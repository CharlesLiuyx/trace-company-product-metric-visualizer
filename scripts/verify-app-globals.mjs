#!/usr/bin/env node
// Static gate for the classic-script global architecture. The viewer app is
// ordered classic scripts sharing one top-level scope (AGENTS.md), which
// imposes two rules that only verify:app could previously catch at runtime:
//
//   1. No two scripts may declare the same top-level binding (a duplicate
//      let/const/class across files is a load-breaking SyntaxError; duplicate
//      function/var silently overwrites).
//   2. Load-time code (top-level statements and immediately-invoked function
//      bodies) may only reference bindings declared by the same script, an
//      EARLIER script in index.html order, or a known browser/vendor global.
//      Runtime calls (inside functions invoked later) may go either way.
//   3. Every reference — load-time OR runtime — must resolve to *something*:
//      a lexical binding in scope, any script's top-level global (shared
//      scope), a window/global-attached export, or a known browser/JS global.
//      A reference that resolves to none of these is a genuine dangling
//      identifier, almost always a refactor orphan (a helper moved out of
//      scope) or a typo. Rule 2 only inspects load-time code, so such a
//      reference inside a hover/click handler slips past it and only throws
//      once exercised in the browser — this rule closes that gap with real
//      lexical scope resolution.
//
// This enforces the documented module-layering contract statically, in
// milliseconds, without a browser. Unknown bare identifiers in load-time
// code are also errors (usually a typo or a missing dom.js/state.js dep).
import * as acorn from 'acorn';
import { scriptSources } from './script-sources.mjs';
import { readProjectFile } from './lib/project.mjs';

const VENDOR_PREFIX = 'vendor/';
// Scripts that get the full load-time reference analysis (shared top-level
// scope contract). Data scripts are IIFE-wrapped pure data; they only join
// the duplicate-declaration sweep.
const ANALYZED_PREFIXES = ['src/'];

// Bare identifiers that are legitimate without a top-level declaration:
// vendored libraries plus browser globals not present in the Node runtime.
const EXTRA_GLOBALS = new Set([
  'd3',
  'Chart',
  'window',
  'document',
  'navigator',
  'location',
  'history',
  'localStorage',
  'sessionStorage',
  'requestAnimationFrame',
  'cancelAnimationFrame',
  'requestIdleCallback',
  'cancelIdleCallback',
  'matchMedia',
  'getComputedStyle',
  'addEventListener',
  'removeEventListener',
  'dispatchEvent',
  'CustomEvent',
  'Event',
  'KeyboardEvent',
  'MouseEvent',
  'PointerEvent',
  'WheelEvent',
  'TouchEvent',
  'HTMLElement',
  'HTMLInputElement',
  'HTMLCanvasElement',
  'SVGElement',
  'Element',
  'Image',
  'ImageData',
  'OffscreenCanvas',
  'createImageBitmap',
  'Blob',
  'FileReader',
  'XMLSerializer',
  'DOMParser',
  'DOMRect',
  'ResizeObserver',
  'IntersectionObserver',
  'MutationObserver',
  'devicePixelRatio',
  'innerWidth',
  'innerHeight',
  'screen',
  'alert',
  'getSelection',
]);

function isKnownGlobal(name) {
  return EXTRA_GLOBALS.has(name) || name in globalThis;
}

// Globals published by data scripts, which are injected from the manifest at
// runtime rather than via <script> tags in index.html — so they never appear
// among the analyzed scripts' top-level declarations. The app reads them bare.
const DATA_GLOBALS = new Set([
  'DATASETS',
  'TraceDomain',
  'TraceDatasetRegistry',
  'DATASET_FILE_METADATA',
  'INCOME_STATEMENT_SSOT',
  '__DATASET_MANIFEST__',
]);

function patternNames(pattern, out) {
  if (!pattern) return out;
  switch (pattern.type) {
    case 'Identifier':
      out.push(pattern.name);
      break;
    case 'ObjectPattern':
      for (const property of pattern.properties) {
        patternNames(property.type === 'RestElement' ? property.argument : property.value, out);
      }
      break;
    case 'ArrayPattern':
      for (const element of pattern.elements) patternNames(element, out);
      break;
    case 'AssignmentPattern':
      patternNames(pattern.left, out);
      break;
    case 'RestElement':
      patternNames(pattern.argument, out);
      break;
    default:
      break;
  }
  return out;
}

function topLevelDeclarations(ast) {
  const names = [];
  for (const node of ast.body) {
    if (node.type === 'VariableDeclaration') {
      for (const declarator of node.declarations) patternNames(declarator.id, names);
    } else if (node.type === 'FunctionDeclaration' || node.type === 'ClassDeclaration') {
      if (node.id) names.push(node.id.name);
    }
  }
  return names;
}

// Every identifier declared anywhere in the file (any depth: params, catch,
// nested functions). Used to shadow-filter load-time references: a name
// declared locally at any scope is conservatively treated as non-global.
function allDeclaredNames(ast) {
  const names = new Set();
  (function walk(node) {
    if (!node || typeof node.type !== 'string') return;
    switch (node.type) {
      case 'VariableDeclarator':
        patternNames(node.id, []).forEach((name) => names.add(name));
        break;
      case 'FunctionDeclaration':
      case 'ClassDeclaration':
      case 'FunctionExpression':
      case 'ClassExpression':
        if (node.id) names.add(node.id.name);
        break;
      case 'CatchClause':
        if (node.param) patternNames(node.param, []).forEach((name) => names.add(name));
        break;
      default:
        break;
    }
    if (node.params) {
      for (const param of node.params) patternNames(param, []).forEach((name) => names.add(name));
    }
    for (const key of Object.keys(node)) {
      const value = node[key];
      if (Array.isArray(value)) {
        for (const child of value) walk(child);
      } else if (value && typeof value.type === 'string') {
        walk(value);
      }
    }
  })(ast);
  return names;
}

function isFunctionNode(node) {
  return (
    node.type === 'FunctionDeclaration' ||
    node.type === 'FunctionExpression' ||
    node.type === 'ArrowFunctionExpression'
  );
}

// Bare identifier references inside load-time-executed code: top-level
// statements plus immediately-invoked function bodies. Deferred function
// bodies (declarations, listeners, methods) are skipped — they run later,
// when every script has loaded.
function loadTimeReferences(ast) {
  const references = [];

  function visit(node, parent, parentKey) {
    if (!node || typeof node.type !== 'string') return;

    if (isFunctionNode(node)) {
      const isIife =
        parent &&
        parent.type === 'CallExpression' &&
        parentKey === 'callee';
      if (!isIife) return; // deferred body: not load-time code
      // IIFE: params are declarations, body executes now.
      visit(node.body, node, 'body');
      return;
    }

    switch (node.type) {
      case 'Identifier': {
        const skip =
          (parent.type === 'MemberExpression' && parentKey === 'property' && !parent.computed) ||
          ((parent.type === 'Property' || parent.type === 'PropertyDefinition' || parent.type === 'MethodDefinition') &&
            parentKey === 'key' &&
            !parent.computed) ||
          (parent.type === 'VariableDeclarator' && parentKey === 'id') ||
          ((parent.type === 'FunctionDeclaration' || parent.type === 'ClassDeclaration' || parent.type === 'FunctionExpression' || parent.type === 'ClassExpression') &&
            parentKey === 'id') ||
          ((parent.type === 'LabeledStatement' || parent.type === 'BreakStatement' || parent.type === 'ContinueStatement') &&
            parentKey === 'label') ||
          parent.type === 'MetaProperty' ||
          (parent.type === 'ExportSpecifier' || parent.type === 'ImportSpecifier');
        if (!skip) references.push({ name: node.name, line: node.loc.start.line });
        return;
      }
      case 'ObjectPattern':
      case 'ArrayPattern':
        // destructuring declaration targets: only visit computed keys/defaults
        for (const property of node.properties || node.elements || []) visit(property, node, 'pattern');
        return;
      default:
        break;
    }

    for (const key of Object.keys(node)) {
      if (key === 'loc' || key === 'start' || key === 'end') continue;
      const value = node[key];
      if (Array.isArray(value)) {
        for (const child of value) visit(child, node, key);
      } else if (value && typeof value.type === 'string') {
        visit(value, node, key);
      }
    }
  }

  for (const statement of ast.body) visit(statement, ast, 'body');
  return references;
}

// Names published onto the shared scope via `window.X =` / `global.X =`
// (the pattern IIFE modules use to export, e.g. `global.SankeyEngine = …`).
// Collected so bare references to them elsewhere resolve.
function attachedGlobalNames(ast, out) {
  (function walk(node) {
    if (!node || typeof node.type !== 'string') return;
    if (
      node.type === 'AssignmentExpression' &&
      node.left.type === 'MemberExpression' &&
      !node.left.computed &&
      node.left.object.type === 'Identifier' &&
      (node.left.object.name === 'window' ||
        node.left.object.name === 'global' ||
        node.left.object.name === 'globalThis') &&
      node.left.property.type === 'Identifier'
    ) {
      out.add(node.left.property.name);
    }
    for (const key of Object.keys(node)) {
      if (key === 'loc' || key === 'start' || key === 'end') continue;
      const value = node[key];
      if (Array.isArray(value)) {
        for (const child of value) walk(child);
      } else if (value && typeof value.type === 'string') {
        walk(value);
      }
    }
  })(ast);
  return out;
}

// ---- Rule 3: lexical scope resolution (all scopes, load-time + runtime) ----
// A compact scope walker good enough for the classic-script sources: tracks
// function/block/loop/catch scopes, var+function hoisting, let/const block
// scope, params (incl. destructuring + defaults), and skips non-reference
// identifiers (member props, object keys, labels). Any reference that resolves
// to no enclosing binding falls through to the shared-global / known-global
// check in unresolvedReferences.
function makeScope(parent) {
  return { parent, names: new Set() };
}
function declareName(scope, name) {
  if (name) scope.names.add(name);
}
function resolveName(scope, name) {
  for (let s = scope; s; s = s.parent) if (s.names.has(name)) return true;
  return false;
}
// var + function declarations hoist to the nearest function/program scope;
// stop at nested function boundaries.
function hoistVars(node, fnScope) {
  if (!node || typeof node.type !== 'string') return;
  if (node.type === 'FunctionDeclaration') {
    if (node.id) declareName(fnScope, node.id.name);
    return;
  }
  if (isFunctionNode(node)) return;
  if (node.type === 'VariableDeclaration' && node.kind === 'var') {
    for (const d of node.declarations) patternNames(d.id, []).forEach((n) => declareName(fnScope, n));
  }
  for (const key of Object.keys(node)) {
    if (key === 'loc' || key === 'start' || key === 'end') continue;
    const value = node[key];
    if (Array.isArray(value)) {
      for (const child of value) if (child && child.type) hoistVars(child, fnScope);
    } else if (value && typeof value.type === 'string') {
      hoistVars(value, fnScope);
    }
  }
}
// let/const/class/(strict-mode block function) declared directly in a block.
function declareBlockLexicals(statements, scope) {
  for (const st of statements) {
    if (!st) continue;
    if (st.type === 'VariableDeclaration' && st.kind !== 'var') {
      for (const d of st.declarations) patternNames(d.id, []).forEach((n) => declareName(scope, n));
    } else if ((st.type === 'ClassDeclaration' || st.type === 'FunctionDeclaration') && st.id) {
      declareName(scope, st.id.name);
    }
  }
}

function unresolvedReferences(ast, sharedGlobals) {
  const problems = [];
  const isGlobal = (name) =>
    sharedGlobals.has(name) || DATA_GLOBALS.has(name) || isKnownGlobal(name);

  function visitPatternExprs(pattern, scope) {
    // computed keys and default values inside a binding pattern are references
    if (!pattern) return;
    if (pattern.type === 'AssignmentPattern') {
      visitPatternExprs(pattern.left, scope);
      visit(pattern.right, scope);
    } else if (pattern.type === 'ObjectPattern') {
      for (const p of pattern.properties) {
        if (p.type === 'Property') {
          if (p.computed) visit(p.key, scope);
          visitPatternExprs(p.value, scope);
        } else if (p.type === 'RestElement') {
          visitPatternExprs(p.argument, scope);
        }
      }
    } else if (pattern.type === 'ArrayPattern') {
      for (const el of pattern.elements) visitPatternExprs(el, scope);
    } else if (pattern.type === 'RestElement') {
      visitPatternExprs(pattern.argument, scope);
    }
  }

  function visitFunction(node, scope) {
    const s = makeScope(scope);
    declareName(s, 'arguments');
    if (node.id && node.type === 'FunctionExpression') declareName(s, node.id.name);
    for (const p of node.params) patternNames(p, []).forEach((n) => declareName(s, n));
    for (const p of node.params) visitPatternExprs(p, s);
    if (node.body.type === 'BlockStatement') {
      hoistVars(node.body, s);
      declareBlockLexicals(node.body.body, s);
      for (const st of node.body.body) visit(st, s);
    } else {
      visit(node.body, s); // arrow expression body
    }
  }

  function visit(node, scope) {
    if (!node || typeof node.type !== 'string') return;
    switch (node.type) {
      case 'FunctionDeclaration':
      case 'FunctionExpression':
      case 'ArrowFunctionExpression':
        visitFunction(node, scope);
        return;
      case 'BlockStatement': {
        const s = makeScope(scope);
        declareBlockLexicals(node.body, s);
        for (const st of node.body) visit(st, s);
        return;
      }
      case 'ForStatement':
      case 'ForInStatement':
      case 'ForOfStatement': {
        const s = makeScope(scope);
        const head = node.init || node.left;
        if (head && head.type === 'VariableDeclaration' && head.kind !== 'var') {
          for (const d of head.declarations) patternNames(d.id, []).forEach((n) => declareName(s, n));
        }
        for (const key of ['init', 'test', 'update', 'left', 'right']) if (node[key]) visit(node[key], s);
        visit(node.body, s);
        return;
      }
      case 'CatchClause': {
        const s = makeScope(scope);
        if (node.param) patternNames(node.param, []).forEach((n) => declareName(s, n));
        visit(node.body, s);
        return;
      }
      case 'VariableDeclarator':
        visitPatternExprs(node.id, scope);
        if (node.init) visit(node.init, scope);
        return;
      case 'MemberExpression':
        visit(node.object, scope);
        if (node.computed) visit(node.property, scope);
        return;
      case 'Property':
        if (node.computed) visit(node.key, scope);
        visit(node.value, scope);
        return;
      case 'MethodDefinition':
      case 'PropertyDefinition':
        if (node.computed) visit(node.key, scope);
        if (node.value) visit(node.value, scope);
        return;
      case 'LabeledStatement':
        visit(node.body, scope);
        return;
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'MetaProperty':
        return;
      case 'Identifier':
        if (!resolveName(scope, node.name) && !isGlobal(node.name)) {
          problems.push({ name: node.name, line: node.loc.start.line });
        }
        return;
      default:
        break;
    }
    for (const key of Object.keys(node)) {
      if (key === 'loc' || key === 'start' || key === 'end') continue;
      const value = node[key];
      if (Array.isArray(value)) {
        for (const child of value) visit(child, scope);
      } else if (value && typeof value.type === 'string') {
        visit(value, scope);
      }
    }
  }

  const program = makeScope(null);
  hoistVars({ type: 'Program', body: ast.body }, program);
  declareBlockLexicals(ast.body, program);
  for (const st of ast.body) visit(st, program);

  const seen = new Set();
  return problems.filter((p) => {
    const key = `${p.name}:${p.line}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function parseScript(source, file) {
  return acorn.parse(source, { ecmaVersion: 'latest', sourceType: 'script', locations: true });
}

function main() {
  const indexHtml = readProjectFile('index.html');
  const scripts = scriptSources(indexHtml).filter((src) => !src.startsWith(VENDOR_PREFIX));
  const errors = [];

  const declarationOwner = new Map(); // top-level name -> first declaring script
  const declaredByScript = new Map(); // script -> Set(top-level names)
  const parsed = [];

  for (const script of scripts) {
    let ast;
    try {
      ast = parseScript(readProjectFile(script), script);
    } catch (error) {
      errors.push(`${script}: parse error: ${error.message}`);
      continue;
    }
    const names = topLevelDeclarations(ast);
    declaredByScript.set(script, new Set(names));
    for (const name of names) {
      const owner = declarationOwner.get(name);
      if (owner && owner !== script) {
        errors.push(`duplicate top-level declaration "${name}" in ${script} (already declared by ${owner})`);
      } else {
        declarationOwner.set(name, script);
      }
    }
    parsed.push({ script, ast });
  }

  // Shared-scope union: every analyzed script's top-level bindings plus every
  // window/global-attached export. Rule 3 references resolve against this
  // (order-independent, since runtime code may reference any loaded script).
  const sharedGlobals = new Set(declarationOwner.keys());
  for (const { ast } of parsed) attachedGlobalNames(ast, sharedGlobals);

  // Load-order rule: load-time references must resolve to this script, an
  // earlier script, or a known global.
  const availableSoFar = new Set();
  let analyzedCount = 0;
  let referenceCount = 0;
  let unresolvedCount = 0;
  for (const { script, ast } of parsed) {
    const analyzed = ANALYZED_PREFIXES.some((prefix) => script.startsWith(prefix));
    if (analyzed) {
      analyzedCount += 1;
      const localNames = allDeclaredNames(ast);
      for (const reference of loadTimeReferences(ast)) {
        referenceCount += 1;
        const { name, line } = reference;
        if (localNames.has(name) || availableSoFar.has(name) || isKnownGlobal(name)) continue;
        const owner = declarationOwner.get(name);
        errors.push(
          owner
            ? `${script}:${line} load-time reference to "${name}" declared by later script ${owner} (load order violation)`
            : `${script}:${line} load-time reference to unknown identifier "${name}"`
        );
      }
      // Rule 3: any-scope dangling reference (refactor orphan / typo). Scoped
      // lexical resolution, then the shared/known-global fallback.
      for (const { name, line } of unresolvedReferences(ast, sharedGlobals)) {
        unresolvedCount += 1;
        errors.push(
          `${script}:${line} unresolved reference to "${name}" (no local binding, shared global, or known browser/JS global — likely a moved helper or typo)`
        );
      }
    }
    for (const name of declaredByScript.get(script) || []) availableSoFar.add(name);
  }

  if (errors.length) {
    console.error(`app globals verification failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }
  console.log(
    `app globals verification passed: ${scripts.length} classic script(s) swept for duplicate top-level declarations, ${analyzedCount} analyzed for load-order safety (${referenceCount} load-time reference(s)) and all-scope reference resolution (0 unresolved).`
  );
}

main();

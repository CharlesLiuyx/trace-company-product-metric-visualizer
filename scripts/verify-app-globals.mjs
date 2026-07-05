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

  // Load-order rule: load-time references must resolve to this script, an
  // earlier script, or a known global.
  const availableSoFar = new Set();
  let analyzedCount = 0;
  let referenceCount = 0;
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
    }
    for (const name of declaredByScript.get(script) || []) availableSoFar.add(name);
  }

  if (errors.length) {
    console.error(`app globals verification failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }
  console.log(
    `app globals verification passed: ${scripts.length} classic script(s) swept for duplicate top-level declarations, ${analyzedCount} analyzed for load-order safety (${referenceCount} load-time reference(s)).`
  );
}

main();

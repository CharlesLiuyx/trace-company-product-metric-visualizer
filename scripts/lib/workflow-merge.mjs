// Typed, non-executing SSOT merge. Unknown code remains a path conflict.
import { parse } from 'acorn';
import { isDeepStrictEqual as equal } from 'node:util';

function conflict(location, base, current, incoming) {
  throw Object.assign(new Error(`Concurrent edits conflict at ${location}`), { code: 'PUBLICATION_PATH_CONFLICT', details: { location, base, current, incoming } });
}
export function mergeValue(base, current, incoming, location = 'record') {
  if (equal(current, incoming) || equal(base, incoming)) return current;
  if (equal(base, current)) return incoming;
  const object = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
  if (object(current) && object(incoming) && (base === undefined || object(base))) {
    const result = {};
    for (const key of new Set([...Object.keys(base || {}), ...Object.keys(current), ...Object.keys(incoming)])) {
      if (['__proto__', 'constructor', 'prototype'].includes(key)) throw new Error('Unsafe SSOT property');
      const value = mergeValue(base?.[key], current[key], incoming[key], `${location}.${key}`);
      if (value !== undefined) result[key] = value;
    }
    return result;
  }
  if (Array.isArray(current) && Array.isArray(incoming) && (base === undefined || Array.isArray(base))) {
    const all = [...(base || []), ...current, ...incoming];
    const key = ['key', 'id', 'date'].find((field) => all.length && all.every((item) => object(item) && typeof item[field] === 'string'));
    if (key) {
      const map = (items = []) => {
        const result = new Map(items.map((item) => [item[key], item]));
        if (result.size !== items.length) throw new Error(`Duplicate ${key} in ${location}`);
        return result;
      };
      const a = map(base), b = map(current), c = map(incoming);
      return [...new Set([...b.keys(), ...[...a.keys(), ...c.keys()].filter((id) => !b.has(id)).sort()])]
        .map((id) => mergeValue(a.get(id), b.get(id), c.get(id), `${location}[${id}]`)).filter((item) => item !== undefined);
    }
  }
  return conflict(location, base, current, incoming);
}
function family(file) {
  if (/^data\/income-statements\/[^/]+\.js$/.test(file)) return ['INCOME_STATEMENT_SSOT', 'records'];
  if (/^data\/company-metadata\/[^/]+\.js$/.test(file)) return ['COMPANY_METADATA', 'companies'];
  if (file === 'data/revenue-metrics.js') return ['REVENUE_METRIC_SSOT', 'records'];
  return null;
}
export function parseSsotRecords(source, file) {
  const kind = family(file);
  if (!kind) throw new Error(`No semantic merger for ${file}`);
  if (source == null) return [];
  const tree = parse(source, { ecmaVersion: 'latest' });
  const records = [], familyReference = Symbol('family');
  let initialized = false;
  function unsupported(reason) { throw new Error(`Unsupported SSOT ${reason} in ${file}`); }
  for (const statement of tree.body) {
    let call = statement.type === 'ExpressionStatement' ? statement.expression : null;
    if (call?.type === 'CallExpression' && call.callee.type === 'MemberExpression') call = { type: 'CallExpression', arguments: [{ name: 'window' }], callee: { type: 'FunctionExpression', params: [{ type: 'Identifier', name: 'window' }], body: { body: [statement] } } };
    if (call?.type !== 'CallExpression' || call.callee.type !== 'FunctionExpression' || call.arguments.length !== 1 || call.arguments[0].name !== 'window' || call.callee.params.length !== 1 || call.callee.params[0].type !== 'Identifier') unsupported('wrapper');
    const global = call.callee.params[0].name, constants = new Map();
    const target = (node) => node?.type === 'MemberExpression' && !node.computed && node.object.type === 'Identifier' && node.object.name === global && node.property.name === kind[0];
    function literal(node, stack = new Set()) {
      if (target(node) && initialized) return familyReference;
      if (node?.type === 'Literal' && (node.value === null || ['number', 'string', 'boolean'].includes(typeof node.value))) return node.value;
      if (node?.type === 'UnaryExpression' && node.operator === '-' && node.argument.type === 'Literal' && typeof node.argument.value === 'number') return -node.argument.value;
      if (node?.type === 'Identifier' && constants.has(node.name) && !stack.has(node.name)) {
        const value = constants.get(node.name);
        return value === familyReference ? value : literal(value, new Set([...stack, node.name]));
      }
      if (node?.type === 'CallExpression' && node.callee.type === 'Identifier' && node.arguments.length === 0 && !stack.has(node.callee.name)) {
        const helper = constants.get(node.callee.name);
        if (helper?.type === 'ArrowFunctionExpression' && helper.params.length === 0 && !helper.async && helper.body.type === 'ObjectExpression') return literal(helper.body, new Set([...stack, node.callee.name]));
      }
      if (node?.type === 'ArrayExpression' && node.elements.every(Boolean)) return node.elements.flatMap((item) => item.type === 'SpreadElement' ? literal(item.argument, stack) : [literal(item, stack)]);
      if (node?.type === 'ObjectExpression') {
        const value = {};
        for (const prop of node.properties) {
          if (prop.type === 'SpreadElement') { Object.assign(value, literal(prop.argument, stack)); continue; }
          if (prop.type !== 'Property' || prop.computed || prop.method || prop.kind !== 'init') unsupported('property');
          const key = prop.key.type === 'Identifier' ? prop.key.name : prop.key.value;
          if (typeof key !== 'string' || ['__proto__', 'constructor', 'prototype'].includes(key)) unsupported('property name');
          value[key] = literal(prop.value, stack);
        }
        return value;
      }
      unsupported(`non-literal ${node?.type}`);
    }
    function assignment(node) {
      if (node.type !== 'AssignmentExpression' || node.operator !== '=' || !target(node.left)) unsupported('mutation');
      const right = node.right;
      let value;
      if (right.type === 'LogicalExpression' && right.operator === '||' && target(right.left)) value = literal(right.right);
      else value = literal(right);
      if (value.schemaVersion !== 1 || !Array.isArray(value[kind[1]]) || Object.keys(value).some((key) => !['schemaVersion', kind[1]].includes(key))) unsupported('family schema');
      if (right.type === 'LogicalExpression' && value[kind[1]].length) unsupported('nonempty initializer');
      if (right.type !== 'LogicalExpression') { if (initialized) unsupported('replacement after registration'); records.push(...value[kind[1]]); }
      initialized = true; return familyReference;
    }
    for (const item of call.callee.body.body) {
      if (item.type === 'VariableDeclaration' && item.kind === 'const') {
        for (const entry of item.declarations) {
          if (entry.id.type !== 'Identifier' || !entry.init || constants.has(entry.id.name)) unsupported('binding');
          constants.set(entry.id.name, entry.init.type === 'AssignmentExpression' ? assignment(entry.init) : entry.init);
          if (entry.init.type === 'ArrowFunctionExpression') {
            if (entry.init.params.length || entry.init.async || entry.init.body.type !== 'ObjectExpression') unsupported('helper');
            literal(entry.init.body);
          } else if (entry.init.type !== 'AssignmentExpression') literal(entry.init);
        }
      } else if (item.type === 'ExpressionStatement') {
        const node = item.expression;
        if (node.type === 'Literal' && node.value === 'use strict') continue;
        if (node.type === 'AssignmentExpression') { assignment(node); continue; }
        const method = node.callee;
        if (node.type !== 'CallExpression' || method.type !== 'MemberExpression' || method.computed || method.property.name !== 'push' || method.object.type !== 'MemberExpression' || method.object.computed || method.object.property.name !== kind[1] || literal(method.object.object) !== familyReference) unsupported('mutation');
        records.push(...node.arguments.flatMap((argument) => argument.type === 'SpreadElement' ? literal(argument.argument) : [literal(argument)]));
      } else unsupported('control flow');
    }
  }
  if (!initialized || records.some((record) => typeof record.key !== 'string') || new Set(records.map((item) => item.key)).size !== records.length) throw new Error(`Unrecognized or duplicate SSOT records in ${file}`);
  return records;
}
export function mergeSource(file, base, current, incoming) {
  if (current === incoming || base === incoming) return current;
  if (base === current) return incoming;
  const kind = family(file);
  if (!kind) return conflict(file, base, current, incoming);
  const records = mergeValue(parseSsotRecords(base, file), parseSsotRecords(current, file), parseSsotRecords(incoming, file), file);
  return `/* Pure ${kind[0]} records. Merged by the Publication Module. */\n(function (global) {\n  const target = global.${kind[0]} = global.${kind[0]} || { schemaVersion: 1, ${kind[1]}: [] };\n  target.${kind[1]}.push(...${JSON.stringify(records, null, 2)});\n})(window);\n`;
}

export function containsSsotRecords(file, current, incoming) {
  if (!family(file) || current == null || incoming == null) return false;
  try {
    const existing = new Map(parseSsotRecords(current, file).map((record) => [record.key, record]));
    const wanted = parseSsotRecords(incoming, file);
    return wanted.length > 0 && wanted.every((record) => equal(existing.get(record.key), record));
  } catch { return false; }
}

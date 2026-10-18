// Loads the repo's classic browser scripts (window-global style, no modules)
// into a Node vm context so verifiers inspect the same data the viewer sees.
// The context exposes `window` as the context itself and a `document` set to
// undefined so load-time feature checks behave like a DOM-less environment.
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { rootDir } from './project.mjs';

export function loadClassicScripts(scripts, root = rootDir) {
  const context = { console };
  context.window = context;
  context.document = undefined;
  vm.createContext(context);
  for (const script of scripts) {
    vm.runInContext(readFileSync(path.join(root, script), 'utf8'), context, { filename: script });
  }
  return context;
}

// Loads the repo's classic browser scripts (window-global style, no modules)
// into a Node vm context so verifiers inspect the same data the viewer sees.
// The context exposes `window` as the context itself and a `document` set to
// undefined so load-time feature checks behave like a DOM-less environment.
import vm from 'node:vm';
import { readProjectFile } from './project.mjs';

export function loadClassicScripts(scripts) {
  const context = { console };
  context.window = context;
  context.document = undefined;
  vm.createContext(context);
  for (const script of scripts) {
    vm.runInContext(readProjectFile(script), context, { filename: script });
  }
  return context;
}

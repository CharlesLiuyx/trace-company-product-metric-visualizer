// Test helper: load the repo's classic browser scripts into a vm context,
// same mechanism as scripts/lib/vm-browser.mjs (re-exported so tests do not
// depend on scripts/ internals changing shape).
export { loadClassicScripts } from '../../scripts/lib/vm-browser.mjs';

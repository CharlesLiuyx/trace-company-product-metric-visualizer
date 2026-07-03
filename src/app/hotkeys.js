/* Trace viewer · hotkeys.js
 * Single registry for every modifier-combo shortcut in the viewer. Modules
 * never read event.metaKey/ctrlKey/altKey/shiftKey directly for a shortcut;
 * they ask matchesHotkey(event, name) so each combo is declared, named, and
 * de-conflicted in exactly one table. */

const HOTKEY_PRIMARY = 1; // Command on macOS, Ctrl elsewhere — either qualifies
const HOTKEY_SHIFT = 2;
const HOTKEY_ALT = 4; // Option on macOS

/* `mask` is the exact modifier set the combo requires. Matching is exact so
 * overlapping combos stay disjoint (⌘⌥⇧-click can never also fire the
 * ⌘-click action); `ignore` lists bits a gesture tolerates on top of its
 * mask (e.g. a trackpad pinch zoom with shift accidentally held). `key`
 * pins a keyboard combo to one lowercased event.key.
 * `hint` names the i18n string the header indicator shows while the combo's
 * modifiers are held (no hint = combo stays silent); `when` gates the hint
 * to the context where the combo actually works. */
const HOTKEYS = {
  // click · company/period lists: add the clicked item to a multi-selection
  scopeExtendClick: { mask: HOTKEY_SHIFT, hint: 'hotkeyHintScopeExtendClick' },
  // click · comparison sankey node/link: replace the metric-trend selection
  // with just the clicked object
  metricSoloClick: {
    mask: HOTKEY_PRIMARY,
    hint: 'hotkeyHintMetricSoloClick',
    when: () => !sankeyComparison.hidden,
  },
  // click · comparison sankey node: select the node plus all of its
  // same-layer siblings (every node in its authored sankey column)
  metricLayerClick: {
    mask: HOTKEY_PRIMARY | HOTKEY_ALT | HOTKEY_SHIFT,
    hint: 'hotkeyHintMetricLayerClick',
    when: () => !sankeyComparison.hidden,
  },
  // wheel · comparison canvas: zoom at the pointer (trackpad pinch arrives
  // as ctrl+wheel, so stray shift/alt must not break the gesture)
  comparisonZoomWheel: {
    mask: HOTKEY_PRIMARY,
    ignore: HOTKEY_SHIFT | HOTKEY_ALT,
    hint: 'hotkeyHintComparisonZoomWheel',
    when: () => comparisonZoomActive(),
  },
  // wheel · comparison canvas: pan horizontally
  comparisonPanWheel: {
    mask: HOTKEY_SHIFT,
    ignore: HOTKEY_ALT,
    hint: 'hotkeyHintComparisonPanWheel',
    when: () => comparisonZoomActive(),
  },
  // keydown · global: open the company search
  companySearchKey: { mask: HOTKEY_PRIMARY | HOTKEY_SHIFT, key: 'f', hint: 'hotkeyHintCompanySearchKey' },
  // keydown · sidebar resizer: arrow keys resize in larger steps
  sidebarFastResizeKey: { mask: HOTKEY_SHIFT },
};

function hotkeyModifierMask(event) {
  return (event.metaKey || event.ctrlKey ? HOTKEY_PRIMARY : 0)
    | (event.shiftKey ? HOTKEY_SHIFT : 0)
    | (event.altKey ? HOTKEY_ALT : 0);
}
function matchesHotkey(event, name) {
  const combo = HOTKEYS[name];
  if (!combo) return false;
  if (combo.key != null && String(event.key || '').toLowerCase() !== combo.key) return false;
  return (hotkeyModifierMask(event) & ~(combo.ignore || 0)) === combo.mask;
}
// plain interaction = no modifier held and no IME composition in flight;
// guards single-key handlers (list arrow navigation) against combo clashes
function isPlainKeyEvent(event) {
  return !event.isComposing && hotkeyModifierMask(event) === 0;
}
// shift+mousedown's browser default extends the document text selection from
// the previous anchor to the press point, so combo clicks on interactive
// targets must preventDefault at mousedown — by click time it is too late
function hotkeyClickExtendsSelection(event) {
  return Boolean(hotkeyModifierMask(event) & HOTKEY_SHIFT);
}

/* ---- held-combo indicator ----
 * While modifiers are held, the header's top-right shows what the current
 * combo means right now: every declared hint whose mask equals the held set
 * and whose `when` context holds. Releasing the keys (or leaving the tab)
 * clears it. keydown auto-repeat and mouse traffic cost one integer compare;
 * the DOM is written only when the held set actually changes. */
const HOTKEY_IS_MAC = /Mac|iPhone|iPad/.test(navigator.platform || '');
function hotkeyGlyphs(mask) {
  const parts = [];
  if (mask & HOTKEY_PRIMARY) parts.push(HOTKEY_IS_MAC ? '⌘' : 'Ctrl');
  if (mask & HOTKEY_ALT) parts.push(HOTKEY_IS_MAC ? '⌥' : 'Alt');
  if (mask & HOTKEY_SHIFT) parts.push(HOTKEY_IS_MAC ? '⇧' : 'Shift');
  return parts.join(HOTKEY_IS_MAC ? '' : '+');
}
let hotkeyHintRenderedMask = 0;
function renderHotkeyHint(mask) {
  if (mask === hotkeyHintRenderedMask) return;
  hotkeyHintRenderedMask = mask;
  if (!hotkeyHint) return;
  let hints = '';
  if (mask) {
    for (const name in HOTKEYS) {
      const combo = HOTKEYS[name];
      if (!combo.hint || combo.mask !== mask) continue;
      if (combo.when && !combo.when()) continue;
      hints += (hints ? ' · ' : '') + t(combo.hint);
    }
  }
  if (!hints) {
    hotkeyHint.hidden = true;
    return;
  }
  hotkeyHintKeys.textContent = hotkeyGlyphs(mask);
  hotkeyHintText.textContent = hints;
  hotkeyHint.hidden = false;
}
function syncHotkeyHint(event) {
  renderHotkeyHint(hotkeyModifierMask(event));
}
window.addEventListener('keydown', syncHotkeyHint, true);
window.addEventListener('keyup', syncHotkeyHint, true);
// modifiers released outside the page (⌘Tab away, context switch) never send
// a keyup here, so losing the tab or window clears the indicator
window.addEventListener('blur', () => renderHotkeyHint(0));
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') renderHotkeyHint(0);
});

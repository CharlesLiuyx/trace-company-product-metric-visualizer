/* Trace viewer · comparison-zoom.js
 * Comparison canvas zoom: two-phase gesture (bitmap-proxy preview overlay,
 * committed relayout), zoom controls, wheel/pinch wiring, perf HUD. */

const COMPARISON_ZOOM_MIN = 1;
const COMPARISON_ZOOM_STEP = 1.25;
const COMPARISON_WHEEL_ZOOM_STEP = 1.2;
const COMPARISON_PINCH_ZOOM_SENSITIVITY = 0.01;
// the trade-off in this delay: shorter sharpens the blurry preview sooner
// after the hands stop, longer avoids accidental commits during the
// micro-pauses inside a continuous pinch; commits are cheap (~45ms measured),
// so bias toward sharpening fast
const COMPARISON_ZOOM_COMMIT_DELAY = 140;
// perf observability: append ?fps=1 to the URL (or set localStorage
// trace-perf-hud=1) for a live frame-rate HUD plus per-gesture console stats
const perfHudEnabled = (() => {
  try {
    return new URLSearchParams(window.location.search).has('fps')
      || window.localStorage.getItem('trace-perf-hud') === '1';
  } catch (error) {
    return false;
  }
})();
// max zoom is dynamic: it brings the most shrunken chart in the current
// comparison back to its authored size, where its labels are readable
let comparisonZoomMax = COMPARISON_ZOOM_MIN;
function clampComparisonZoom(value) {
  const zoom = finiteNumber(value);
  if (zoom == null) return COMPARISON_ZOOM_MIN;
  return Math.min(comparisonZoomMax, Math.max(COMPARISON_ZOOM_MIN, zoom));
}
function comparisonZoomActive() {
  return state.viewMode === 'sankey' && (isMultiCompanyScope() || isMultiPeriodScope());
}
function comparisonFlow() {
  return sankeyComparison?.querySelector('.comparison-flow');
}
function applyComparisonZoom() {
  const zoom = clampComparisonZoom(state.comparisonZoom);
  state.comparisonZoom = zoom;
  const active = comparisonZoomActive();
  const zoomed = zoom > COMPARISON_ZOOM_MIN + 0.001;
  sankeyView?.classList.toggle('comparison-zoomed', active && zoomed);
  sankeyComparison?.classList.toggle('zoomed', zoomed);
  const flow = comparisonFlow();
  if (flow) {
    const baseContentWidth = finiteNumber(flow.dataset.baseContentWidth);
    // scale the flow container with the charts so the wrap pattern stays the
    // same at every zoom level; gaps stay fixed so small charts never end up
    // separated by scaled-up whitespace
    flow.style.width = zoomed && baseContentWidth != null ? `${Math.round(baseContentWidth * zoom)}px` : '';
  }
  sankeyComparison?.querySelectorAll('.comparison-chart-host').forEach((host) => {
    const baseWidth = finiteNumber(host.dataset.baseWidth);
    // floor so browser rounding can never push a packed row past the container
    if (baseWidth != null) host.style.width = `${Math.max(1, Math.floor(baseWidth * zoom))}px`;
  });
  syncComparisonZoomControls(zoom);
}
function syncComparisonZoomControls(zoom = clampComparisonZoom(state.comparisonZoom)) {
  if (!comparisonZoomControls) return;
  comparisonZoomControls.hidden = !comparisonZoomActive();
  zoomFitBtn.textContent = `${Math.round(zoom * 100)}%`;
  zoomInBtn.disabled = zoom >= comparisonZoomMax - 0.001;
  zoomOutBtn.disabled = zoom <= COMPARISON_ZOOM_MIN + 0.001;
}
// Relaying out every comparison SVG is far too slow to run per wheel event, so
// zooming is two-phase: gestures preview on a self-painted canvas overlay and
// the real width-based layout is committed once the gesture pauses, shifting
// scroll so the anchored content point never moves.
//
// The preview deliberately avoids CSS transforms: scaling a composited layer
// makes the compositor re-rasterize every chart at each new scale, which
// capped gestures at ~20-25 fps. Instead each chart is pre-rendered to a flat
// bitmap after render, and during the gesture the flow is hidden while a
// viewport-sized canvas draws those bitmaps directly — per frame that is just
// a handful of texture blits and zero layout, style, or raster work.
const COMPARISON_PROXY_MAX_WIDTH = 2048;
let comparisonProxyGeneration = 0;
function comparisonProxyTargetWidth(host, fallbackWidth) {
  const dpr = window.devicePixelRatio || 1;
  const baseWidth = finiteNumber(host.dataset.baseWidth) || fallbackWidth;
  // raster at the current committed zoom (with 2x headroom, capped): after a
  // deep zoom commits, the refreshed bitmaps keep the next gesture — and the
  // blurry wait before the next commit — close to sharp; small comparisons
  // get a higher cap because their total bitmap memory stays modest
  const cardCount = sankeyComparison?.querySelectorAll('.comparison-chart-host').length || 1;
  const cap = cardCount <= 6 ? 3072 : COMPARISON_PROXY_MAX_WIDTH;
  const displayWidth = baseWidth * clampComparisonZoom(state.comparisonZoom);
  return Math.round(Math.min(cap, Math.max(1, displayWidth * dpr * 2)));
}
function buildComparisonZoomProxies() {
  // one chart per idle slice: rasterizing an SVG into a bitmap takes tens of
  // milliseconds, and doing all charts in one burst would jank interaction
  // right after every render
  const generation = comparisonProxyGeneration;
  const hosts = [...(sankeyComparison?.querySelectorAll('.comparison-chart-host') || [])];
  const buildNext = () => {
    if (generation !== comparisonProxyGeneration) return;
    const host = hosts.shift();
    if (!host) return;
    buildComparisonZoomProxy(host, generation);
    if (hosts.length) scheduleIdleTask(buildNext);
  };
  buildNext();
}
function buildComparisonZoomProxy(host, generation) {
  const svg = host.querySelector('svg');
  if (!svg) return;
  const viewBox = svg.viewBox?.baseVal;
  const width = viewBox?.width;
  const height = viewBox?.height;
  if (!width || !height) return;
  const rasterWidth = comparisonProxyTargetWidth(host, width);
  const existing = host.querySelector('.comparison-zoom-proxy');
  // tolerance keeps small zoom adjustments from re-rastering every chart
  if (existing && existing.width > rasterWidth / 1.4 && existing.width < rasterWidth * 1.4) return;
  const clone = svg.cloneNode(true);
  clone.setAttribute('width', String(width));
  clone.setAttribute('height', String(height));
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml;charset=utf-8' }));
  const image = new Image();
  image.onload = () => {
    URL.revokeObjectURL(url);
    // a re-render may have replaced the comparison while the bitmap decoded
    if (generation !== comparisonProxyGeneration || !host.isConnected) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'comparison-zoom-proxy';
    canvas.width = rasterWidth;
    canvas.height = Math.max(1, Math.round(rasterWidth * height / width));
    canvas.getContext('2d')?.drawImage(image, 0, 0, canvas.width, canvas.height);
    canvas.setAttribute('aria-hidden', 'true');
    const previous = host.querySelector('.comparison-zoom-proxy');
    if (previous) previous.replaceWith(canvas);
    else host.appendChild(canvas);
    host.classList.add('has-zoom-proxy');
  };
  image.onerror = () => URL.revokeObjectURL(url);
  image.src = url;
}
let comparisonZoomGesture = null;
let lastZoomCommitMs = null;
let lastZoomSharpenMs = null;
function comparisonZoomOverlay() {
  let overlay = document.getElementById('comparisonZoomOverlay');
  if (!overlay) {
    overlay = document.createElement('canvas');
    overlay.id = 'comparisonZoomOverlay';
    overlay.className = 'comparison-zoom-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }
  return overlay;
}
function hideComparisonZoomOverlay() {
  const overlay = document.getElementById('comparisonZoomOverlay');
  if (overlay) overlay.style.display = 'none';
}
function cancelComparisonZoomGesture() {
  const gesture = comparisonZoomGesture;
  if (!gesture) return;
  window.clearTimeout(gesture.timer);
  if (gesture.frame) window.cancelAnimationFrame(gesture.frame);
  comparisonZoomGesture = null;
  sankeyComparison?.classList.remove('zoom-previewing');
  hideComparisonZoomOverlay();
}
function setComparisonZoom(value, anchor) {
  const next = clampComparisonZoom(value);
  const flow = comparisonFlow();
  if (!sankeyView || !flow || !comparisonZoomActive()) {
    cancelComparisonZoomGesture();
    state.comparisonZoom = next;
    applyComparisonZoom();
    return;
  }
  if (!comparisonZoomGesture) {
    const committed = clampComparisonZoom(state.comparisonZoom);
    if (next === committed) return;
    comparisonZoomGesture = {
      committed,
      flow,
      started: false,
      flowLeft: 0,
      flowTop: 0,
      viewLeft: 0,
      viewTop: 0,
      viewHalfX: 0,
      viewHalfY: 0,
      dpr: 1,
      overlay: null,
      ctx: null,
      tiles: [],
      placeholderBg: 'rgba(0, 0, 0, 0.05)',
      scale: 1,
      tx: 0,
      ty: 0,
      pendingZoom: next,
      pendingAnchor: null,
      frame: 0,
      timer: 0,
      events: 0,
      applies: 0,
      startedAt: performance.now(),
    };
  }
  const gesture = comparisonZoomGesture;
  gesture.pendingZoom = next;
  gesture.pendingAnchor = anchor || null;
  gesture.events += 1;
  state.comparisonZoom = next;
  // wheel events can outpace the display; coalesce them into at most one
  // style write per frame so the handler itself never queues redundant work
  if (!gesture.frame) gesture.frame = window.requestAnimationFrame(applyComparisonZoomPreview);
  window.clearTimeout(gesture.timer);
  gesture.timer = window.setTimeout(commitComparisonZoom, COMPARISON_ZOOM_COMMIT_DELAY);
}
// mirrors the fixed flex gap of .comparison-flow in src/app.css
const COMPARISON_FLOW_GAP = 8;
// Exact replay of the committed flex-wrap layout at an arbitrary zoom: greedy
// row filling, fixed gaps, centered rows, top-aligned cards. The preview draws
// this instead of a uniform scale of the current geometry so fixed-size chrome
// (gaps, card borders) stays constant on screen while the charts scale, and
// the commit still lands pixel-identical to the last preview frame.
function comparisonPreviewLayout(gesture, zoom) {
  const width = Math.round(gesture.baseContentWidth * zoom);
  const items = gesture.cards.map((card) => {
    const hostWidth = card.hostBase != null ? Math.max(1, Math.floor(card.hostBase * zoom)) : null;
    return {
      card,
      hostWidth,
      width: hostWidth != null ? hostWidth + card.chromeWidth : card.fixedWidth,
      height: hostWidth != null ? hostWidth * card.aspect + card.chromeHeight : card.fixedHeight,
      x: 0,
      y: 0,
    };
  });
  let rowStart = 0;
  let x = 0;
  let y = 0;
  const closeRow = (end) => {
    const offset = (width - (x - COMPARISON_FLOW_GAP)) / 2;
    let rowHeight = 0;
    for (let index = rowStart; index < end; index += 1) {
      items[index].x += offset;
      items[index].y = y;
      rowHeight = Math.max(rowHeight, items[index].height);
    }
    y += rowHeight + COMPARISON_FLOW_GAP;
  };
  items.forEach((item, index) => {
    if (index > rowStart && x + item.width > width + 0.5) {
      closeRow(index);
      rowStart = index;
      x = 0;
    }
    item.x = x;
    x += item.width + COMPARISON_FLOW_GAP;
  });
  if (items.length) closeRow(items.length);
  return { width, height: Math.max(0, y - COMPARISON_FLOW_GAP), items };
}
function applyComparisonZoomPreview() {
  const gesture = comparisonZoomGesture;
  if (!gesture) return;
  gesture.frame = 0;
  const flow = gesture.flow;
  if (!sankeyView || !flow.isConnected) return;
  if (!gesture.started) {
    // one-off measure at the top of the first frame; nothing during the
    // gesture dirties layout, so these are the only forced reads
    const viewRect = sankeyView.getBoundingClientRect();
    const flowRect = flow.getBoundingClientRect();
    gesture.flowLeft = flowRect.left - viewRect.left + sankeyView.scrollLeft;
    gesture.flowTop = flowRect.top - viewRect.top + sankeyView.scrollTop;
    gesture.viewLeft = viewRect.left;
    gesture.viewTop = viewRect.top;
    gesture.clientWidth = sankeyView.clientWidth;
    gesture.clientHeight = sankeyView.clientHeight;
    gesture.viewHalfX = gesture.clientWidth / 2;
    gesture.viewHalfY = gesture.clientHeight / 2;
    gesture.dpr = window.devicePixelRatio || 1;
    // geometry needed to predict the committed scroll bounds at any scale:
    // the flow box scales linearly, the chrome around it does not
    gesture.padRight = Math.max(0, sankeyView.scrollWidth - (gesture.flowLeft + flowRect.width));
    gesture.padBottom = Math.max(0, sankeyView.scrollHeight - (gesture.flowTop + flowRect.height));
    gesture.baseContentWidth = finiteNumber(flow.dataset.baseContentWidth)
      || flowRect.width / Math.max(gesture.committed, 0.001);
    // per-card geometry for the layout replay: the chart area scales with
    // zoom, the chrome around it (borders, empty-card boxes) does not
    gesture.cards = [...flow.querySelectorAll(':scope > .comparison-card')].map((card) => {
      const cardRect = card.getBoundingClientRect();
      const host = card.querySelector('.comparison-chart-host');
      const hostRect = host ? host.getBoundingClientRect() : null;
      const hostBase = host ? finiteNumber(host.dataset.baseWidth) : null;
      return {
        hostBase: hostRect && hostRect.width > 0 ? hostBase : null,
        aspect: hostRect && hostRect.width > 0 ? hostRect.height / hostRect.width : 0,
        chromeWidth: hostRect ? cardRect.width - hostRect.width : 0,
        chromeHeight: hostRect ? cardRect.height - hostRect.height : 0,
        hostOffsetX: hostRect ? hostRect.left - cardRect.left : 0,
        hostOffsetY: hostRect ? hostRect.top - cardRect.top : 0,
        fixedWidth: cardRect.width,
        fixedHeight: cardRect.height,
        bitmap: host?.querySelector('.comparison-zoom-proxy') || null,
      };
    });
    const frame = sankeyComparison.querySelector('.comparison-chart-frame');
    if (frame) gesture.placeholderBg = getComputedStyle(frame).backgroundColor;
    const overlay = comparisonZoomOverlay();
    overlay.style.left = `${viewRect.left}px`;
    overlay.style.top = `${viewRect.top}px`;
    overlay.style.width = `${viewRect.width}px`;
    overlay.style.height = `${viewRect.height}px`;
    const backingWidth = Math.max(1, Math.round(viewRect.width * gesture.dpr));
    const backingHeight = Math.max(1, Math.round(viewRect.height * gesture.dpr));
    if (overlay.width !== backingWidth) overlay.width = backingWidth;
    if (overlay.height !== backingHeight) overlay.height = backingHeight;
    overlay.style.display = 'block';
    gesture.overlay = overlay;
    gesture.ctx = overlay.getContext('2d');
    if (gesture.ctx) gesture.ctx.imageSmoothingQuality = 'medium';
    // hide the live flow for the duration of the gesture; the overlay is the
    // only thing moving, so the DOM stays untouched frame to frame
    sankeyComparison?.classList.add('zoom-previewing');
    gesture.started = true;
  }
  const point = gesture.pendingAnchor || { x: gesture.viewHalfX, y: gesture.viewHalfY };
  const scale = gesture.pendingZoom / gesture.committed;
  // keep the content point under the pointer fixed by inverting the current
  // preview mapping; scroll reads stay free because layout is never dirtied
  const scrollLeft = sankeyView.scrollLeft;
  const scrollTop = sankeyView.scrollTop;
  const anchorX = point.x + scrollLeft;
  const anchorY = point.y + scrollTop;
  const contentX = (anchorX - gesture.flowLeft - gesture.tx) / gesture.scale;
  const contentY = (anchorY - gesture.flowTop - gesture.ty) / gesture.scale;
  gesture.tx = anchorX - gesture.flowLeft - scale * contentX;
  gesture.ty = anchorY - gesture.flowTop - scale * contentY;
  const layout = comparisonPreviewLayout(gesture, gesture.pendingZoom);
  // the committed layout is a bounded scroll container (commit resolves to
  // scroll ≈ current scroll − t, clamped to [0, max]); clamping the preview to
  // that same range makes content pin to the edges while zooming out instead
  // of jumping there when the commit lands
  const maxScrollX = Math.max(0, gesture.flowLeft + layout.width + gesture.padRight - gesture.clientWidth);
  const maxScrollY = Math.max(0, gesture.flowTop + layout.height + gesture.padBottom - gesture.clientHeight);
  gesture.tx = Math.min(scrollLeft, Math.max(scrollLeft - maxScrollX, gesture.tx));
  gesture.ty = Math.min(scrollTop, Math.max(scrollTop - maxScrollY, gesture.ty));
  gesture.scale = scale;
  const ctx = gesture.ctx;
  if (ctx && gesture.overlay) {
    const dpr = gesture.dpr;
    const overlayWidth = gesture.overlay.width;
    const overlayHeight = gesture.overlay.height;
    ctx.clearRect(0, 0, overlayWidth, overlayHeight);
    const originX = gesture.flowLeft + gesture.tx - scrollLeft;
    const originY = gesture.flowTop + gesture.ty - scrollTop;
    layout.items.forEach((item) => {
      const card = item.card;
      const chartWidthPx = item.hostWidth != null ? item.hostWidth : item.width;
      const chartHeightPx = item.hostWidth != null ? item.hostWidth * card.aspect : item.height;
      const x = (originX + item.x + card.hostOffsetX) * dpr;
      const y = (originY + item.y + card.hostOffsetY) * dpr;
      const width = chartWidthPx * dpr;
      const height = chartHeightPx * dpr;
      if (x >= overlayWidth || y >= overlayHeight || x + width <= 0 || y + height <= 0) return;
      if (card.bitmap) {
        ctx.drawImage(card.bitmap, x, y, width, height);
      } else {
        // bitmap still rendering; keep the card's footprint visible
        ctx.fillStyle = gesture.placeholderBg;
        ctx.fillRect(x, y, width, height);
      }
    });
  }
  syncComparisonZoomControls(gesture.pendingZoom);
  gesture.applies += 1;
}
function commitComparisonZoom() {
  const gesture = comparisonZoomGesture;
  if (!gesture) return;
  const commitStartedAt = performance.now();
  window.clearTimeout(gesture.timer);
  if (gesture.frame) window.cancelAnimationFrame(gesture.frame);
  comparisonZoomGesture = null;
  sankeyComparison?.classList.remove('zoom-previewing');
  hideComparisonZoomOverlay();
  const flow = gesture.flow.isConnected ? gesture.flow : comparisonFlow();
  if (!sankeyView || !flow) {
    applyComparisonZoom();
    return;
  }
  if (!gesture.started) {
    // no preview frame rendered before the commit timer fired; fall back to a
    // plain anchored relayout
    const point = gesture.pendingAnchor || { x: sankeyView.clientWidth / 2, y: sankeyView.clientHeight / 2 };
    const viewRect = sankeyView.getBoundingClientRect();
    const flowRectBefore = flow.getBoundingClientRect();
    const contentX = viewRect.left + point.x - flowRectBefore.left;
    const contentY = viewRect.top + point.y - flowRectBefore.top;
    const ratio = clampComparisonZoom(state.comparisonZoom) / gesture.committed;
    applyComparisonZoom();
    const flowRectAfter = flow.getBoundingClientRect();
    const flowLeft = flowRectAfter.left - viewRect.left + sankeyView.scrollLeft;
    const flowTop = flowRectAfter.top - viewRect.top + sankeyView.scrollTop;
    sankeyView.scrollLeft = flowLeft + contentX * ratio - point.x;
    sankeyView.scrollTop = flowTop + contentY * ratio - point.y;
    lastZoomCommitMs = performance.now() - commitStartedAt;
    scheduleIdleTask(buildComparisonZoomProxies);
    return;
  }
  // capture scroll before relayout: shrinking widths makes the browser clamp
  // the scroll position ahead of the corrective write below
  const scrollLeftBefore = sankeyView.scrollLeft;
  const scrollTopBefore = sankeyView.scrollTop;
  applyComparisonZoom();
  // the committed layout reproduces the previewed geometry relative to the
  // flow origin, so shifting scroll by the origin drift keeps the view seamless
  const viewRect = sankeyView.getBoundingClientRect();
  const flowRect = flow.getBoundingClientRect();
  const flowLeft = flowRect.left - viewRect.left + sankeyView.scrollLeft;
  const flowTop = flowRect.top - viewRect.top + sankeyView.scrollTop;
  sankeyView.scrollLeft = scrollLeftBefore + flowLeft - gesture.flowLeft - gesture.tx;
  sankeyView.scrollTop = scrollTopBefore + flowTop - gesture.flowTop - gesture.ty;
  lastZoomCommitMs = performance.now() - commitStartedAt;
  // re-raster the bitmaps at the zoom level that just landed so the next
  // gesture (and its blurry wait) starts from a sharp baseline
  scheduleIdleTask(buildComparisonZoomProxies);
  if (perfHudEnabled) {
    const previewSeconds = Math.max(0.001, (commitStartedAt - gesture.startedAt) / 1000);
    console.info(
      `[comparison-zoom] ${gesture.events} events · ${gesture.applies} frames · `
      + `~${Math.round(gesture.applies / previewSeconds)} fps preview · commit ${lastZoomCommitMs.toFixed(1)}ms`
    );
    // double rAF lands after the sharp frame has been produced, so the delta
    // approximates how long the blur lingered past the last zoom tick
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        lastZoomSharpenMs = performance.now() - commitStartedAt + COMPARISON_ZOOM_COMMIT_DELAY;
        console.info(`[comparison-zoom] sharp ~${Math.round(lastZoomSharpenMs)}ms after the last tick (${COMPARISON_ZOOM_COMMIT_DELAY}ms wait + relayout + raster)`);
      });
    });
  }
}
if (perfHudEnabled && content) {
  const hud = document.createElement('div');
  hud.className = 'perf-hud';
  hud.setAttribute('aria-hidden', 'true');
  hud.textContent = 'fps —';
  content.appendChild(hud);
  const frames = [];
  let lastFrameAt = performance.now();
  let lastHudUpdate = 0;
  const tick = (now) => {
    frames.push({ at: now, delta: now - lastFrameAt });
    lastFrameAt = now;
    while (frames.length && now - frames[0].at > 1000) frames.shift();
    // refresh the readout sparsely so the HUD itself costs nothing measurable
    if (now - lastHudUpdate > 150 && frames.length) {
      lastHudUpdate = now;
      const avgDelta = frames.reduce((sum, frame) => sum + frame.delta, 0) / frames.length;
      const worst = frames.reduce((max, frame) => Math.max(max, frame.delta), 0);
      hud.textContent = [
        `${Math.round(1000 / Math.max(1, avgDelta))} fps`,
        `worst ${Math.round(worst)}ms`,
        lastZoomCommitMs != null ? `commit ${Math.round(lastZoomCommitMs)}ms` : '',
        lastZoomSharpenMs != null ? `sharpen ${Math.round(lastZoomSharpenMs)}ms` : '',
      ].filter(Boolean).join(' · ');
    }
    window.requestAnimationFrame(tick);
  };
  window.requestAnimationFrame(tick);
}

zoomInBtn?.addEventListener('click', () => setComparisonZoom(clampComparisonZoom(state.comparisonZoom) * COMPARISON_ZOOM_STEP));
zoomOutBtn?.addEventListener('click', () => setComparisonZoom(clampComparisonZoom(state.comparisonZoom) / COMPARISON_ZOOM_STEP));
zoomFitBtn?.addEventListener('click', () => setComparisonZoom(COMPARISON_ZOOM_MIN));
function comparisonWheelDeltas(event) {
  const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? sankeyView.clientHeight : 1;
  return { dx: event.deltaX * scale, dy: event.deltaY * scale };
}
// Figma-style canvas wheel model: plain wheel pans both axes, shift+wheel pans
// horizontally, ctrl/cmd+wheel (incl. trackpad pinch) zooms at the pointer.
sankeyView?.addEventListener('wheel', (event) => {
  if (!comparisonZoomActive()) return;
  event.preventDefault();
  const { dx, dy } = comparisonWheelDeltas(event);
  if (event.ctrlKey || event.metaKey) {
    // reuse the rect measured at gesture start; a per-event read would force
    // a layout on every wheel tick
    const rect = comparisonZoomGesture?.started
      ? { left: comparisonZoomGesture.viewLeft, top: comparisonZoomGesture.viewTop }
      : sankeyView.getBoundingClientRect();
    const anchor = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    // trackpad pinch arrives as ctrlKey wheel events with small pixel deltas;
    // notched mouse wheels report large steps and get a fixed factor per notch
    const pinch = event.deltaMode === 0 && Math.abs(dy) < 50;
    const factor = pinch
      ? Math.exp(-dy * COMPARISON_PINCH_ZOOM_SENSITIVITY)
      : (dy < 0 ? COMPARISON_WHEEL_ZOOM_STEP : 1 / COMPARISON_WHEEL_ZOOM_STEP);
    setComparisonZoom(clampComparisonZoom(state.comparisonZoom) * factor, anchor);
    return;
  }
  const horizontal = event.shiftKey && Math.abs(dx) < Math.abs(dy);
  sankeyView.scrollLeft += horizontal ? dy : dx;
  sankeyView.scrollTop += horizontal ? 0 : dy;
  const gesture = comparisonZoomGesture;
  if (gesture) {
    // panning while a zoom preview is up: repaint the overlay against the new
    // scroll position and keep the commit deferred until the hands are still
    if (!gesture.frame) gesture.frame = window.requestAnimationFrame(applyComparisonZoomPreview);
    window.clearTimeout(gesture.timer);
    gesture.timer = window.setTimeout(commitComparisonZoom, COMPARISON_ZOOM_COMMIT_DELAY);
  }
}, { passive: false });

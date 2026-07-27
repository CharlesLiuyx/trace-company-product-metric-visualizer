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
    // Preserve the calibrated ratio even when an extreme cross-company
    // comparison makes a chart narrower than one CSS pixel. Browser
    // sub-pixel layout is more truthful than a 1px floor; zoom can reveal it.
    if (baseWidth != null) host.style.width = `${baseWidth * zoom}px`;
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
// viewport-sized canvas draws those bitmaps directly. A tiny, contained
// skeleton flow resolves the browser's own sub-pixel width quantization once
// per frame; the live SVG tree still performs no layout, style, or raster work.
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
function destroyComparisonPreviewResolver(gesture) {
  gesture?.layoutResolver?.stage?.remove();
  if (gesture) gesture.layoutResolver = null;
}
function cancelComparisonZoomGesture() {
  cancelComparisonCardZoom();
  hideComparisonZoomHint();
  const gesture = comparisonZoomGesture;
  if (!gesture) return;
  window.clearTimeout(gesture.timer);
  if (gesture.frame) window.cancelAnimationFrame(gesture.frame);
  destroyComparisonPreviewResolver(gesture);
  comparisonZoomGesture = null;
  sankeyComparison?.classList.remove('zoom-previewing');
  hideComparisonZoomOverlay();
}
function createComparisonZoomGesture(flow, committed) {
  return {
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
    layoutResolver: null,
    placeholderBg: 'rgba(0, 0, 0, 0.05)',
    scale: 1,
    tx: 0,
    ty: 0,
    pendingZoom: committed,
    pendingAnchor: null,
    morph: false,
    frame: 0,
    timer: 0,
    events: 0,
    applies: 0,
    startedAt: performance.now(),
  };
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
  // a manual zoom takes over from a running double-click flight: reveal its
  // already-committed layout, then gesture from there
  if (comparisonZoomGesture?.morph) finishComparisonCardZoomFlight();
  if (!comparisonZoomGesture) {
    const committed = clampComparisonZoom(state.comparisonZoom);
    if (next === committed) return;
    comparisonZoomGesture = createComparisonZoomGesture(flow, committed);
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
function resolvedCssPixel(serialized, label) {
  const match = String(serialized || '').trim().match(/^(-?(?:\d+(?:\.\d+)?|\.\d+))px$/i);
  const value = match ? Number(match[1]) : NaN;
  if (!Number.isFinite(value)) {
    throw new Error(`Comparison layout requires ${label} to resolve to a finite px length`);
  }
  return value;
}
function requiredResolvedCssPixel(serialized, label) {
  const value = resolvedCssPixel(serialized, label);
  if (value < 0) {
    throw new Error(`Comparison layout requires ${label} to resolve to a non-negative px length`);
  }
  return value;
}
// Measurement sandboxes are fixed-position siblings of the real comparison,
// not body-level lookalikes. This preserves its inherited theme, font, and
// ancestor-scoped `.comparison-view` geometry while keeping it out of the
// visible flex layout. Reusable geometry must be class-scoped; duplicating the
// live element id would make selectors and accessibility ambiguous.
function createComparisonMeasurementStage(width, purpose) {
  const stage = document.createElement('div');
  stage.className = sankeyComparison?.className || 'comparison-view';
  stage.classList.remove('zoom-previewing');
  stage.classList.add(purpose);
  stage.setAttribute('aria-hidden', 'true');
  if (sankeyComparison) {
    for (const attribute of sankeyComparison.attributes) {
      if (attribute.name.startsWith('data-')) stage.setAttribute(attribute.name, attribute.value);
    }
    for (const property of sankeyComparison.style) {
      if (property.startsWith('--')) {
        stage.style.setProperty(property, sankeyComparison.style.getPropertyValue(property));
      }
    }
  }
  Object.assign(stage.style, {
    position: 'fixed',
    left: '-100000px',
    top: '0',
    width: `${width}px`,
    opacity: '0',
    pointerEvents: 'none',
    zIndex: '-1',
    contain: 'layout paint',
  });
  (sankeyComparison?.parentElement || document.body).appendChild(stage);
  return stage;
}
function resolvedComparisonFlowMetrics(flow) {
  if (!(flow instanceof Element) || !flow.isConnected) {
    throw new Error('Comparison layout metrics require a connected flow');
  }
  const style = getComputedStyle(flow);
  return {
    columnGap: requiredResolvedCssPixel(style.columnGap, 'column-gap'),
    rowGap: requiredResolvedCssPixel(style.rowGap, 'row-gap'),
  };
}
// Fit observes the same connected flex/card tree that will be committed.
// Measuring flex-outer-minus-host width incorporates resolved calc/rem values,
// asymmetric borders, margins, and future card chrome without duplicating CSS
// math. DOMRect excludes margins, so include their computed inline values
// explicitly: margins participate in flex packing just as gaps do.
function measureComparisonFitLayout(flow) {
  const { columnGap, rowGap } = resolvedComparisonFlowMetrics(flow);
  const card = document.createElement('section');
  card.className = 'comparison-card';
  card.innerHTML = `
    <div class="comparison-chart-frame">
      <div class="comparison-chart-host"></div>
    </div>
  `;
  const frame = card.querySelector('.comparison-chart-frame');
  const host = card.querySelector('.comparison-chart-host');
  frame.style.maxWidth = '100%';
  host.style.width = '100px';
  host.style.height = '1px';
  const empty = document.createElement('section');
  empty.className = 'comparison-card empty';
  try {
    flow.append(card, empty);
    const cardWidth = card.getBoundingClientRect().width;
    const hostWidth = host.getBoundingClientRect().width;
    const cardStyle = getComputedStyle(card);
    const emptyStyle = getComputedStyle(empty);
    const cardMargins = resolvedCssPixel(cardStyle.marginInlineStart, 'card margin-inline-start')
      + resolvedCssPixel(cardStyle.marginInlineEnd, 'card margin-inline-end');
    const emptyMargins = resolvedCssPixel(emptyStyle.marginInlineStart, 'empty-card margin-inline-start')
      + resolvedCssPixel(emptyStyle.marginInlineEnd, 'empty-card margin-inline-end');
    const emptyCardInlineSize = empty.getBoundingClientRect().width + emptyMargins;
    const cardInlineFixed = cardWidth - hostWidth + cardMargins;
    if (
      !Number.isFinite(cardInlineFixed)
      || cardInlineFixed < 0
      || !Number.isFinite(emptyCardInlineSize)
      || emptyCardInlineSize < 0
    ) {
      throw new Error('Comparison card fixed inline geometry did not resolve to a finite non-negative size');
    }
    return { columnGap, rowGap, cardInlineFixed, emptyCardInlineSize };
  } finally {
    card.remove();
    empty.remove();
  }
}
// The browser is the authority for serialized CSS lengths. Engines quantize
// fractional widths before flex-wrap (and do not all promise the same private
// layout unit), so arithmetic on the authored doubles can disagree in either
// direction at a row boundary. This lightweight SVG-free mirror asks the
// active engine for the exact card boxes it will commit.
function createComparisonPreviewResolver(gesture) {
  const stage = createComparisonMeasurementStage(
    Math.round(gesture.baseContentWidth),
    'comparison-preview-resolver'
  );
  const flow = document.createElement('div');
  flow.className = gesture.flow?.className || 'comparison-flow';
  flow.classList.remove('zoom-previewing');
  stage.appendChild(flow);
  const entries = gesture.cards.map((card) => {
    const element = document.createElement('section');
    element.className = card.className || 'comparison-card';
    element.classList.remove('hover-linked');
    let host = null;
    if (card.hostBase != null) {
      element.innerHTML = `
        <div class="comparison-chart-frame">
          <div class="comparison-chart-host"></div>
        </div>
      `;
      const frame = element.querySelector('.comparison-chart-frame');
      host = element.querySelector('.comparison-chart-host');
      frame.style.maxWidth = '100%';
      const ratioProbe = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      ratioProbe.setAttribute('viewBox', `0 0 1 ${card.aspect}`);
      ratioProbe.setAttribute('aria-hidden', 'true');
      host.appendChild(ratioProbe);
    } else {
      element.style.width = `${card.fixedWidth}px`;
      element.style.height = `${card.fixedHeight}px`;
      element.style.minHeight = '0';
    }
    flow.appendChild(element);
    return { element, host };
  });
  return { stage, flow, entries };
}
function resolvedComparisonPreviewLayout(gesture, zoom) {
  if (!gesture.layoutResolver) {
    gesture.layoutResolver = createComparisonPreviewResolver(gesture);
  }
  const resolver = gesture.layoutResolver;
  const width = Math.round(gesture.baseContentWidth * zoom);
  resolver.stage.classList.toggle('zoomed', zoom > COMPARISON_ZOOM_MIN + 0.001);
  resolver.stage.style.width = `${width}px`;
  resolver.flow.style.width = `${width}px`;
  resolver.entries.forEach(({ host }, index) => {
    if (host) host.style.width = `${gesture.cards[index].hostBase * zoom}px`;
  });
  const flowRect = resolver.flow.getBoundingClientRect();
  const items = resolver.entries.map(({ element, host }, index) => {
    const card = gesture.cards[index];
    const rect = element.getBoundingClientRect();
    const hostRect = host?.getBoundingClientRect() || null;
    return {
      card,
      hostWidth: hostRect?.width ?? null,
      hostHeight: hostRect?.height ?? null,
      hostOffsetX: hostRect ? hostRect.left - rect.left : card.hostOffsetX,
      hostOffsetY: hostRect ? hostRect.top - rect.top : card.hostOffsetY,
      width: rect.width,
      height: rect.height,
      x: rect.left - flowRect.left,
      y: rect.top - flowRect.top,
    };
  });
  return { width: flowRect.width, height: flowRect.height, items };
}
function comparisonPreviewCardGeometry(card) {
  const cardRect = card.getBoundingClientRect();
  const host = card.querySelector('.comparison-chart-host');
  const hostRect = host?.getBoundingClientRect() || null;
  const hostBase = host ? finiteNumber(host.dataset.baseWidth) : null;
  const viewBox = host?.querySelector(':scope > svg')?.viewBox?.baseVal;
  const viewBoxAspect = viewBox?.width > 0 && viewBox?.height > 0
    ? viewBox.height / viewBox.width
    : null;
  const paintedAspect = hostRect?.width > 0 && hostRect?.height > 0
    ? hostRect.height / hostRect.width
    : null;
  // A positive calibrated base width is semantic geometry even if the active
  // browser quantizes its fit-level box to 0px. The viewBox keeps zoom as the
  // inspection path once that width grows past the engine's layout unit.
  const scalable = hostBase != null && hostBase > 0;
  return {
    className: card.className,
    hostBase: scalable ? hostBase : null,
    // The committed SVG recomputes height from its viewBox at every width.
    // A fit-level DOMRect ratio already contains two independent layout-unit
    // roundings; scaling that approximation compounds the error.
    aspect: scalable ? (viewBoxAspect || paintedAspect || 0) : 0,
    chromeWidth: hostRect ? cardRect.width - hostRect.width : 0,
    chromeHeight: hostRect ? cardRect.height - hostRect.height : 0,
    hostOffsetX: hostRect ? hostRect.left - cardRect.left : 0,
    hostOffsetY: hostRect ? hostRect.top - cardRect.top : 0,
    fixedWidth: cardRect.width,
    fixedHeight: cardRect.height,
    bitmap: host?.querySelector('.comparison-zoom-proxy') || null,
  };
}
function applyComparisonZoomPreview() {
  const gesture = comparisonZoomGesture;
  if (!gesture) return;
  gesture.frame = 0;
  // morph flights paint through their own loop in zoomComparisonToCard
  if (gesture.morph) return;
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
    const flowMetrics = resolvedComparisonFlowMetrics(flow);
    gesture.columnGap = flowMetrics.columnGap;
    gesture.rowGap = flowMetrics.rowGap;
    // per-card geometry for the layout replay: the chart area scales with
    // zoom, the chrome around it (borders, empty-card boxes) does not
    gesture.cards = [...flow.querySelectorAll(':scope > .comparison-card')]
      .map(comparisonPreviewCardGeometry);
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
  let layout;
  try {
    layout = resolvedComparisonPreviewLayout(gesture, gesture.pendingZoom);
  } catch (error) {
    // Never strand the real flow hidden if the isolated resolver is rejected
    // by an unexpected CSS/browser condition. Commit a normal sharp relayout.
    console.error('[comparison-zoom] preview geometry resolution failed', error);
    gesture.started = false;
    commitComparisonZoom();
    return;
  }
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
      const chartHeightPx = item.hostHeight != null ? item.hostHeight : item.height;
      const x = (originX + item.x + (item.hostOffsetX ?? card.hostOffsetX)) * dpr;
      const y = (originY + item.y + (item.hostOffsetY ?? card.hostOffsetY)) * dpr;
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
  if (gesture.morph) {
    // a morph flight committed its layout up front; ending it is just reveal
    finishComparisonCardZoomFlight();
    return;
  }
  const commitStartedAt = performance.now();
  window.clearTimeout(gesture.timer);
  if (gesture.frame) window.cancelAnimationFrame(gesture.frame);
  destroyComparisonPreviewResolver(gesture);
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
// Double-click on a chart's title flies the canvas to that chart. The final
// layout is committed up front — hidden behind the overlay, which keeps
// showing the pre-zoom frame — and the true start and end screen rects of
// every chart are measured from the DOM. The overlay then morphs each chart
// bitmap from its start rect to its end rect, so both endpoints of the
// flight are real geometry and the reveal lands with no jump.
const COMPARISON_CARD_ZOOM_DURATION = 120;
const COMPARISON_CARD_ZOOM_MARGIN = 16;
let comparisonCardZoomFrame = 0;
function cancelComparisonCardZoom() {
  if (!comparisonCardZoomFrame) return;
  window.cancelAnimationFrame(comparisonCardZoomFrame);
  comparisonCardZoomFrame = 0;
}
function finishComparisonCardZoomFlight() {
  const gesture = comparisonZoomGesture;
  if (!gesture || !gesture.morph) return;
  cancelComparisonCardZoom();
  window.clearTimeout(gesture.timer);
  destroyComparisonPreviewResolver(gesture);
  comparisonZoomGesture = null;
  sankeyComparison?.classList.remove('zoom-previewing');
  hideComparisonZoomOverlay();
  syncComparisonZoomControls();
  // re-raster the bitmaps at the zoom that just landed
  scheduleIdleTask(buildComparisonZoomProxies);
}
function zoomComparisonToCard(cardElement) {
  const flow = comparisonFlow();
  if (!sankeyView || !flow || !comparisonZoomActive()) return;
  hideComparisonZoomHint();
  // land any in-progress gesture first so the flight starts from committed
  // geometry (a morph flight just reveals; a wheel preview commits)
  if (comparisonZoomGesture) commitComparisonZoom();
  if (comparisonZoomGesture) return;
  const cards = [...flow.querySelectorAll(':scope > .comparison-card')];
  const index = cards.indexOf(cardElement);
  const host = cardElement.querySelector('.comparison-chart-host');
  const hostBase = host ? finiteNumber(host.dataset.baseWidth) : null;
  if (index < 0 || !host || hostBase == null) return;
  const hostRect = host.getBoundingClientRect();
  const cardRect = cardElement.getBoundingClientRect();
  const viewBox = host.querySelector(':scope > svg')?.viewBox?.baseVal;
  const aspect = hostRect.width > 0 && hostRect.height > 0
    ? hostRect.height / hostRect.width
    : viewBox?.width > 0 && viewBox?.height > 0
      ? viewBox.height / viewBox.width
      : null;
  if (!(hostBase > 0) || !(aspect > 0)) return;
  const viewRect = sankeyView.getBoundingClientRect();
  const margin = COMPARISON_CARD_ZOOM_MARGIN;
  // the chart area scales with zoom, the card chrome around it does not
  const chromeWidth = cardRect.width - hostRect.width;
  const chromeHeight = cardRect.height - hostRect.height;
  const targetZoom = clampComparisonZoom(Math.min(
    (Math.max(1, sankeyView.clientWidth - margin * 2) - chromeWidth) / hostBase,
    (Math.max(1, sankeyView.clientHeight - margin * 2) - chromeHeight) / (hostBase * aspect)
  ));
  const startZoom = clampComparisonZoom(state.comparisonZoom);
  const measureRects = () => cards.map((card) => {
    const box = card.querySelector('.comparison-chart-host') || card;
    const rect = box.getBoundingClientRect();
    return {
      left: rect.left - viewRect.left,
      top: rect.top - viewRect.top,
      width: rect.width,
      height: rect.height,
    };
  });
  const startRects = measureRects();
  const bitmaps = cards.map((card) => card.querySelector('.comparison-zoom-proxy'));
  // freeze the screen behind the overlay, then commit the final layout under it
  const gesture = createComparisonZoomGesture(flow, startZoom);
  gesture.morph = true;
  gesture.started = true;
  comparisonZoomGesture = gesture;
  const overlay = comparisonZoomOverlay();
  const dpr = window.devicePixelRatio || 1;
  overlay.style.left = `${viewRect.left}px`;
  overlay.style.top = `${viewRect.top}px`;
  overlay.style.width = `${viewRect.width}px`;
  overlay.style.height = `${viewRect.height}px`;
  const backingWidth = Math.max(1, Math.round(viewRect.width * dpr));
  const backingHeight = Math.max(1, Math.round(viewRect.height * dpr));
  if (overlay.width !== backingWidth) overlay.width = backingWidth;
  if (overlay.height !== backingHeight) overlay.height = backingHeight;
  overlay.style.display = 'block';
  const ctx = overlay.getContext('2d');
  if (ctx) ctx.imageSmoothingQuality = 'medium';
  const frame = sankeyComparison.querySelector('.comparison-chart-frame');
  const placeholderBg = frame ? getComputedStyle(frame).backgroundColor : gesture.placeholderBg;
  sankeyComparison?.classList.add('zoom-previewing');
  state.comparisonZoom = targetZoom;
  applyComparisonZoom();
  // land the scroll on real geometry: center the card, or pin its top/left
  // edge inside when it cannot fully fit; the browser clamps at content edges
  const landedRect = cardElement.getBoundingClientRect();
  const desiredX = landedRect.width > sankeyView.clientWidth - margin * 2
    ? margin + landedRect.width / 2 : sankeyView.clientWidth / 2;
  const desiredY = landedRect.height > sankeyView.clientHeight - margin * 2
    ? margin + landedRect.height / 2 : sankeyView.clientHeight / 2;
  sankeyView.scrollLeft += landedRect.left - viewRect.left + landedRect.width / 2 - desiredX;
  sankeyView.scrollTop += landedRect.top - viewRect.top + landedRect.height / 2 - desiredY;
  const scrollBase = { left: sankeyView.scrollLeft, top: sankeyView.scrollTop };
  const endRects = measureRects();
  const startedAt = performance.now();
  const paintMorphFrame = (eased) => {
    if (!ctx) return;
    // wheel panning during the flight shifts the committed DOM; shift the
    // end rects with it so the reveal stays aligned
    const scrollDx = sankeyView.scrollLeft - scrollBase.left;
    const scrollDy = sankeyView.scrollTop - scrollBase.top;
    ctx.clearRect(0, 0, overlay.width, overlay.height);
    for (let i = 0; i < cards.length; i += 1) {
      const from = startRects[i];
      const to = endRects[i];
      const x = (from.left + (to.left - scrollDx - from.left) * eased) * dpr;
      const y = (from.top + (to.top - scrollDy - from.top) * eased) * dpr;
      const width = (from.width + (to.width - from.width) * eased) * dpr;
      const height = (from.height + (to.height - from.height) * eased) * dpr;
      if (x >= overlay.width || y >= overlay.height || x + width <= 0 || y + height <= 0) continue;
      if (bitmaps[i]) {
        ctx.drawImage(bitmaps[i], x, y, width, height);
      } else {
        // bitmap still rendering; keep the card's footprint visible
        ctx.fillStyle = placeholderBg;
        ctx.fillRect(x, y, width, height);
      }
    }
    syncComparisonZoomControls(startZoom * Math.pow(targetZoom / startZoom, eased));
  };
  const step = () => {
    comparisonCardZoomFrame = 0;
    // a re-render or manual zoom replaced the gesture; stop flying
    if (comparisonZoomGesture !== gesture) return;
    const progress = Math.min(1, (performance.now() - startedAt) / COMPARISON_CARD_ZOOM_DURATION);
    if (progress >= 1) {
      finishComparisonCardZoomFlight();
      return;
    }
    paintMorphFrame(1 - Math.pow(1 - progress, 3));
    comparisonCardZoomFrame = window.requestAnimationFrame(step);
  };
  // safety net: if rAF stalls (hidden tab), the timer reveals the committed
  // layout so the live flow never stays hidden behind the overlay
  gesture.timer = window.setTimeout(finishComparisonCardZoomFlight, COMPARISON_CARD_ZOOM_DURATION + 200);
  step();
}
// One-shot hint tooltip: a single click on a title teaches the double-click
// gesture without performing it.
const COMPARISON_ZOOM_HINT_DURATION = 1600;
let comparisonZoomHintTimer = 0;
function showComparisonZoomHint(titleRect) {
  let hint = document.getElementById('comparisonZoomHint');
  if (!hint) {
    hint = document.createElement('div');
    hint.id = 'comparisonZoomHint';
    hint.className = 'comparison-zoom-hint';
    hint.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hint);
  }
  hint.textContent = t('comparisonZoomHint');
  hint.style.left = `${Math.round(titleRect.left + titleRect.width / 2)}px`;
  hint.style.top = `${Math.round(titleRect.bottom + 8)}px`;
  hint.classList.add('visible');
  window.clearTimeout(comparisonZoomHintTimer);
  comparisonZoomHintTimer = window.setTimeout(hideComparisonZoomHint, COMPARISON_ZOOM_HINT_DURATION);
}
function hideComparisonZoomHint() {
  window.clearTimeout(comparisonZoomHintTimer);
  comparisonZoomHintTimer = 0;
  document.getElementById('comparisonZoomHint')?.classList.remove('visible');
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
  if (comparisonZoomHintTimer) hideComparisonZoomHint();
  const { dx, dy } = comparisonWheelDeltas(event);
  if (matchesHotkey(event, 'comparisonZoomWheel')) {
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
  const horizontal = matchesHotkey(event, 'comparisonPanWheel') && Math.abs(dx) < Math.abs(dy);
  sankeyView.scrollLeft += horizontal ? dy : dx;
  sankeyView.scrollTop += horizontal ? 0 : dy;
  const gesture = comparisonZoomGesture;
  if (gesture && !gesture.morph) {
    // panning while a zoom preview is up: repaint the overlay against the new
    // scroll position and keep the commit deferred until the hands are still
    if (!gesture.frame) gesture.frame = window.requestAnimationFrame(applyComparisonZoomPreview);
    window.clearTimeout(gesture.timer);
    gesture.timer = window.setTimeout(commitComparisonZoom, COMPARISON_ZOOM_COMMIT_DELAY);
  }
}, { passive: false });
// the title's box padded generously — the whole headline band — is the hit
// area: a single click shows the hint, a double click flies to the chart
function comparisonCardTitleHit(event) {
  if (!comparisonZoomActive()) return null;
  const target = event.target instanceof Element ? event.target : null;
  const card = target?.closest('.comparison-card');
  if (!card || card.classList.contains('empty')) return null;
  const title = card.querySelector('.sankey-title');
  if (!title) return null;
  const rect = title.getBoundingClientRect();
  const pad = Math.max(10, rect.height * 0.6);
  if (event.clientX < rect.left - pad || event.clientX > rect.right + pad
    || event.clientY < rect.top - pad || event.clientY > rect.bottom + pad) return null;
  return { card, rect };
}
sankeyComparison?.addEventListener('click', (event) => {
  const hit = comparisonCardTitleHit(event);
  if (hit) showComparisonZoomHint(hit.rect);
});
sankeyComparison?.addEventListener('dblclick', (event) => {
  const hit = comparisonCardTitleHit(event);
  if (!hit) return;
  event.preventDefault();
  zoomComparisonToCard(hit.card);
});

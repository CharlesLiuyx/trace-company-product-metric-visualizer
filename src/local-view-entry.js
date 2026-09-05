/* The root file is the stable local review address. HTTP and embedded viewers
 * keep their ordinary boot path; each frame loads one complete workspace/tree. */
(function () {
  if (location.protocol !== 'file:' || window.top !== window || !location.pathname.endsWith('/index.html')) return;
  let current = '', frame, host, label, loading = false;
  const entry = new URL(location.href); entry.hash = ''; entry.search = '';
  function show(selection) {
    if (!selection || selection.entryUrl !== entry.href) return false;
    const validTarget = selection.mode === 'published'
      ? /^output\/publications\/trees\/[a-f0-9]{64}\/index\.html$/.test(selection.target)
      : selection.mode === 'review-pending' && /^output\/builds\/build-[a-f0-9-]+\/workspace\/index\.html$/.test(selection.target);
    if (!validTarget) return false;
    const identity = JSON.stringify(selection);
    if (identity === current) return true;
    if (!host) {
      host = document.createElement('div'); host.id = 'trace-local-view';
      host.style.cssText = 'position:fixed;inset:0;z-index:2147483647;display:flex;flex-direction:column;background:#fff;color:#171717;font:12px system-ui;text-align:left';
      label = document.createElement('div'); label.setAttribute('role', 'status');
      label.style.cssText = 'height:24px;flex:none;box-sizing:border-box;padding:3px 10px;border-bottom:1px solid #bbb;background:#f5f5f5';
      frame = document.createElement('iframe'); frame.title = 'Trace 审阅与已发布结果';
      frame.style.cssText = 'width:100%;flex:1;min-height:0;border:0;background:#fff';
      host.append(label, frame); document.body.append(host);
    }
    label.textContent = `${selection.mode === 'published' ? '已审阅通过 · 已发布' : '待人工审阅'}${selection.key ? ' · ' + selection.key : ''}`;
    const url = new URL(selection.target, entry);
    url.searchParams.set('localViewRevision', selection.revision);
    url.hash = location.hash || (selection.key ? '#' + selection.key : '');
    frame.src = url.href;
    current = identity;
    window.TRACE_LOCAL_VIEW_ACTIVE = true;
    return true;
  }
  function readSelection() {
    if (loading) return Promise.resolve(Boolean(host));
    loading = true;
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = new URL('output/local-view/selection.js?t=' + Date.now(), entry).href;
      function done() { script.remove(); loading = false; resolve(show(window.TRACE_LOCAL_VIEW_SELECTION)); }
      script.onload = done; script.onerror = done;
      document.head.append(script);
    });
  }
  const ready = document.readyState === 'loading' ? new Promise((resolve) => document.addEventListener('DOMContentLoaded', resolve, { once: true })) : Promise.resolve();
  window.TRACE_LOCAL_VIEW_READY = ready.then(readSelection);
  window.TRACE_LOCAL_VIEW_READY.then(() => setInterval(() => { if (!document.hidden) readSelection(); }, 2000));
  window.addEventListener('focus', () => ready.then(readSelection));
  window.addEventListener('hashchange', () => {
    if (frame) { const url = new URL(frame.src); url.hash = location.hash; frame.src = url.href; }
  });
})();

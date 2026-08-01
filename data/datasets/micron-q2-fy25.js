/* Micron Q2 FY25 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const MAGENTA = '#bd03f7';
  const BLACK = '#000000';
  const GRAY_LINK = '#808080';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#8ec88e';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#de7878';
  const OTHER_NON_OPERATING_FACE = '#e1cdcd';
  const OTHER_OPEX_FACE = '#e5cece';
  const BG = '#f2f2f2';

  const LOGO = `
    <g fill="none" stroke="#000" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 80V52a13 13 0 0 1 26 0v28M34 65a13 13 0 0 1 26 0v15M78 56v24M126 60a14 14 0 1 0 0 24M150 56v24m0-16a12 12 0 0 1 15-6M232 80V52a13 13 0 0 1 26 0v28"/><circle cx="200" cy="66" r="14"/>
    </g><circle cx="78" cy="40" r="4"/><text x="294" y="86" font-family="Montserrat,Arial,sans-serif" font-weight="700" font-size="8">&#174;</text>`;
  const SERVER_ICON = `
    <g stroke="#111" stroke-width="4" stroke-linejoin="round" fill="#fff"><rect x="20" y="16" width="60" height="18" rx="6"/><rect x="20" y="41" width="60" height="18" rx="6"/><rect x="20" y="66" width="60" height="18" rx="6"/></g>
    <g fill="#111"><circle cx="31" cy="25" r="3"/><circle cx="31" cy="50" r="3"/><circle cx="31" cy="75" r="3"/></g>
    <g fill="${MAGENTA}"><rect x="42" y="23" width="24" height="4" rx="2"/><rect x="42" y="48" width="24" height="4" rx="2"/><rect x="42" y="73" width="24" height="4" rx="2"/></g>`;
  const MOBILE_ICON = `<rect x="16" y="6" width="52" height="88" rx="8" fill="#fff" stroke="#111" stroke-width="4.5"/><path d="M34 14h16" stroke="#111" stroke-width="4.5" stroke-linecap="round"/><g stroke="${MAGENTA}" stroke-width="4"><path d="M25 31l34 35M25 47l31 31"/></g>`;
  const EMBEDDED_ICON = `<circle cx="50" cy="50" r="40" fill="#fff" stroke="${MAGENTA}" stroke-width="5"/><circle cx="50" cy="50" r="37" fill="none" stroke="#111" stroke-width="4"/><g fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"><path d="M18 45h18a14 14 0 0 1 28 0h18M50 52v32M50 52c-16 4-24 18-26 30M50 52c16 4 24 18 26 30"/></g><circle cx="50" cy="50" r="4.5" fill="${MAGENTA}"/>`;
  const STORAGE_ICON = `<g stroke="#111" stroke-width="3" stroke-linejoin="round"><rect x="34" y="10" width="52" height="20" rx="3" fill="#2b2b2b" transform="rotate(-18 60 20)"/><rect x="10" y="40" width="60" height="22" rx="3" fill="#1f1f1f" transform="rotate(-14 40 51)"/><rect x="52" y="52" width="44" height="16" rx="3" fill="#2b2b2b" transform="rotate(-14 74 60)"/></g>`;
  const icon = (markup, x, y, width, height, viewBox = '0 0 100 100') => `<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">${markup}</svg>`;
  const annotations = () => `<g>${icon(SERVER_ICON, 157, 448, 105, 105)}${icon(MOBILE_ICON, 173, 704, 72, 96, '0 0 84 100')}${icon(EMBEDDED_ICON, 157, 884, 106, 106)}${icon(STORAGE_ICON, 134, 1062, 150, 100, '0 0 100 78')}</g>`;

  const textLine = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, lineGap = 7) => ({ blocks: [{ x, top, anchor: 'middle', lineGap, lines }] });
  const labels = (zh) => ({
    compute_networking: { blocks: [
      { x: 438, top: 416, anchor: 'middle', lineGap: 8, lines: [textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 +109%' : '+109% Y/Y', 29, 400, NOTE)] },
      { x: 214, top: 582, anchor: 'middle', lineGap: 7, semanticRole: 'source-offset-label', lines: [{ ...textLine(zh ? '计算与网络' : 'Compute &', 40, 800, MAGENTA), textLength: 232 }, ...(zh ? [] : [textLine('Networking', 40, 800, MAGENTA)])] },
    ] },
    mobile: { blocks: [
      { x: 438, top: 742, anchor: 'middle', lineGap: 8, lines: [textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 (33%)' : '(33%) Y/Y', 29, 400, NOTE)] },
      { x: 214, top: 819, anchor: 'middle', lineGap: 7, semanticRole: 'source-offset-label', lines: [{ ...textLine(zh ? '移动业务' : 'Mobile', 40, 800, MAGENTA), textLength: 134 }] },
    ] },
    embedded: { blocks: [
      { x: 438, top: 918, anchor: 'middle', lineGap: 8, lines: [textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 (8%)' : '(8%) Y/Y', 29, 400, NOTE)] },
      { x: 214, top: 1004, anchor: 'middle', lineGap: 7, semanticRole: 'source-offset-label', lines: [{ ...textLine(zh ? '嵌入式业务' : 'Embedded', 40, 800, MAGENTA), textLength: 208 }] },
    ] },
    storage: { blocks: [
      { x: 438, top: 1100, anchor: 'middle', lineGap: 8, lines: [textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 +54%' : '+54% Y/Y', 29, 400, NOTE)] },
      { x: 214, top: 1207, anchor: 'middle', lineGap: 7, semanticRole: 'source-offset-label', lines: [{ ...textLine(zh ? '存储业务' : 'Storage', 40, 800, MAGENTA), textLength: 152 }] },
    ] },
    revenue: block(905, 562, [textLine(zh ? '收入' : 'Revenue', 44, 800, MAGENTA), textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 +38%' : '+38% Y/Y', 29, 400, NOTE)], 8),
    gross_profit: block(1372, 406, [textLine(zh ? '毛利润' : 'Gross profit', 42, 800, GREEN_LABEL), textLine('$value', 42, 400, GREEN_LABEL), textLine(zh ? '利润率 37%' : '37% margin', 29, 400, NOTE), textLine(zh ? '同比 +18 个百分点' : '+18pp Y/Y', 29, 400, NOTE)], 7),
    cost_of_revenue: block(1372, 1153, [textLine(zh ? '收入' : 'Cost of', 38, 800), textLine(zh ? '成本' : 'revenue', 38, 800), textLine('$value', 38, 400)], 6),
    operating_profit: block(1832, 301, [textLine(zh ? '营业利润' : 'Operating profit', 42, 800, GREEN_LABEL), textLine('$value', 42, 400, GREEN_LABEL), textLine(zh ? '利润率 22%' : '22% margin', 29, 400, NOTE), textLine(zh ? '同比 +19 个百分点' : '+19pp Y/Y', 29, 400, NOTE)], 7),
    operating_expenses: block(1832, 839, [textLine(zh ? '营业' : 'Operating', 38, 800, RED_LABEL), textLine(zh ? '费用' : 'expenses', 38, 800, RED_LABEL), textLine('$value', 38, 400, RED_LABEL)], 6),
    net_profit: block(2457, 348, [textLine(zh ? '净利润' : 'Net profit', 42, 800, GREEN_LABEL), textLine('$value', 42, 400, GREEN_LABEL), textLine(zh ? '利润率 20%' : '20% margin', 29, 400, NOTE), textLine(zh ? '同比 +6 个百分点' : '+6pp Y/Y', 29, 400, NOTE)], 7),
    tax: block(2457, 606, [textLine(zh ? '税费' : 'Tax', 34, 800, RED_LABEL), textLine('$value', 34, 400, RED_LABEL)], 6),
    rnd: block(2457, 872, [textLine(zh ? '研发' : 'R&D', 34, 800, RED_LABEL), textLine('$value', 34, 400, RED_LABEL)], 6),
    sga: block(2457, 1052, [textLine(zh ? '销售及行政' : 'SG&A', zh ? 30 : 34, 800, RED_LABEL), textLine('$value', 34, 400, RED_LABEL)], 6),
    other_non_operating: block(2457, 733, [textLine(zh ? '其他' : 'Other', 34, 800, RED_LABEL), textLine('$value', 34, 400, RED_LABEL)], 6),
    other_opex: block(2457, 1222, [textLine(zh ? '其他' : 'Other', 34, 800, RED_LABEL), textLine('$value', 34, 400, RED_LABEL)], 6),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'micron-q2-fy25', name: 'Micron · Q2 FY25', company: 'Micron',
    meta: {
      company: 'Micron', title: 'Micron Q2 FY25 Income Statement', period: 'Q2 FY25', periodNote: 'Ending Feb. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/micron-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 191, titleSize: 122, titleWeight: 800, titleTextLength: 2160,
      periodX: 2450, periodY: 235, periodNoteY: 282, periodAnchor: 'middle',
      logoWidth: 700, logoHeight: 230, logoX: 560, logoY: 200, logoViewBox: '0 0 300 100', logoSvg: LOGO,
    },
    render: {
      width: 2667, height: 1500, background: BG, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: MAGENTA }, hub: { node: BLACK, label: MAGENTA }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(),
    layout: {
      scale: 40,
      nodes: {
        compute_networking: { x: 403, y: 508, width: 71, height: 184 }, mobile: { x: 403, y: 836, width: 71, height: 41 }, embedded: { x: 403, y: 1011, width: 71, height: 39 }, storage: { x: 403, y: 1191, width: 71, height: 55 },
        revenue: { x: 870, y: 707, width: 70, height: 325 }, gross_profit: { x: 1337, y: 590, width: 71, height: 118 }, cost_of_revenue: { x: 1337, y: 930, width: 71, height: 205 },
        operating_profit: { x: 1797, y: 483, width: 70, height: 70 }, operating_expenses: { x: 1797, y: 770, width: 70, height: 46 }, net_profit: { x: 2271, y: 386, width: 71, height: 62 },
        tax: { x: 2271, y: 640, width: 71, height: 5 }, other_non_operating: { x: 2271, y: 764, width: 71, height: 2 },
        rnd: { x: 2271, y: 894, width: 71, height: 35 }, sga: { x: 2271, y: 1085, width: 71, height: 9 }, other_opex: { x: 2271, y: 1252, width: 71, height: 2 },
      }, labels: labels(false),
    },
    nodes: [
      { id: 'compute_networking', col: 0, order: 0, type: 'source', label: ['Compute &', 'Networking'], value: 4.6, notes: ['+109% Y/Y'] },
      { id: 'mobile', col: 0, order: 1, type: 'source', label: 'Mobile', value: 1.1, notes: ['(33%) Y/Y'] },
      { id: 'embedded', col: 0, order: 2, type: 'source', label: 'Embedded', value: 1.0, valueText: '$1.0B', notes: ['(8%) Y/Y'] },
      { id: 'storage', col: 0, order: 3, type: 'source', label: 'Storage', value: 1.4, notes: ['+54% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.1, notes: ['+38% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.0, valueText: '$3.0B', notes: ['37% margin', '+18pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['22% margin', '+19pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.2 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['20% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.0002, valueText: '($0.2M)' },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.011, valueText: '($11M)', color: OTHER_NON_OPERATING_FACE },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.9 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.3 },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.007, valueText: '($7M)', color: OTHER_OPEX_FACE },
    ],
    links: [
      { source: 'compute_networking', target: 'revenue', value: 4.6, sourceWidth: 184, targetWidth: 184, y0: 600, y1: 799, sourceOrder: 0, targetOrder: 0 },
      { source: 'mobile', target: 'revenue', value: 1.1, sourceWidth: 41, targetWidth: 41, y0: 856.5, y1: 911.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'embedded', target: 'revenue', value: 1.0, sourceWidth: 39, targetWidth: 39, y0: 1030.5, y1: 951.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'storage', target: 'revenue', value: 1.4, sourceWidth: 55, targetWidth: 61, y0: 1218.5, y1: 1001.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.0, sourceWidth: 120, targetWidth: 118, y0: 767, y1: 649, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.1, sourceWidth: 205, targetWidth: 205, y0: 929.5, y1: 1032.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, sourceWidth: 72, targetWidth: 70, y0: 626, y1: 518, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.2, sourceWidth: 46, targetWidth: 46, y0: 685, y1: 793, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 64, targetWidth: 62, y0: 515, y1: 417, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.0002, sourceWidth: 5, targetWidth: 5, y0: 549.5, y1: 642.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.011, sourceWidth: 1, targetWidth: 2, y0: 552.5, y1: 765, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 35, targetWidth: 35, y0: 787.5, y1: 911.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 10, targetWidth: 9, y0: 810, y1: 1089.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.007, sourceWidth: 1, targetWidth: 2, y0: 815.5, y1: 1253, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: { zh: {
      name: 'Micron · 2025 财年第二季度',
      meta: { title: 'Micron 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 2 月', titleTextLength: 1500 },
      nodes: {
        compute_networking: { label: '计算与网络', notes: ['同比 +109%'] }, mobile: { label: '移动业务', notes: ['同比 (33%)'] }, embedded: { label: '嵌入式业务', notes: ['同比 (8%)'] }, storage: { label: '存储业务', notes: ['同比 +54%'] },
        revenue: { label: '收入', notes: ['同比 +38%'] }, gross_profit: { label: '毛利润', notes: ['利润率 37%', '同比 +18 个百分点'] }, cost_of_revenue: { label: '收入成本' },
        operating_profit: { label: '营业利润', notes: ['利润率 22%', '同比 +19 个百分点'] }, operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 20%', '同比 +6 个百分点'] },
        tax: { label: '税费' }, other_non_operating: { label: '其他' }, rnd: { label: '研发' }, sga: { label: '销售及行政' }, other_opex: { label: '其他' },
      }, layout: { labels: labels(true) },
    } },
  });
})();

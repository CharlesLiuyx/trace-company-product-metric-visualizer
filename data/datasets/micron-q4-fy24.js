/* Micron Q4 FY24 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const NOTE = '#666666';
  const MAGENTA = '#bd03f7';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  const LOGO = `
    <g fill="none" stroke="#000" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 80V52a13 13 0 0 1 26 0v28M34 65a13 13 0 0 1 26 0v15M78 56v24M126 60a14 14 0 1 0 0 24M150 56v24m0-16a12 12 0 0 1 15-6M232 80V52a13 13 0 0 1 26 0v28"/>
      <circle cx="200" cy="66" r="14"/>
    </g>
    <circle cx="78" cy="40" r="4"/>
    <text x="294" y="86" font-family="Montserrat,Arial,sans-serif" font-weight="700" font-size="8">&#174;</text>`;
  const SERVER_ICON = `
    <g stroke="#111" stroke-width="4" stroke-linejoin="round" fill="#fff">
      <rect x="20" y="16" width="60" height="18" rx="6"/><rect x="20" y="41" width="60" height="18" rx="6"/><rect x="20" y="66" width="60" height="18" rx="6"/>
    </g>
    <g fill="#111"><circle cx="31" cy="25" r="3"/><circle cx="31" cy="50" r="3"/><circle cx="31" cy="75" r="3"/></g>
    <g fill="${MAGENTA}"><rect x="42" y="23" width="24" height="4" rx="2"/><rect x="42" y="48" width="24" height="4" rx="2"/><rect x="42" y="73" width="24" height="4" rx="2"/></g>`;
  const MOBILE_ICON = `<rect x="16" y="6" width="52" height="88" rx="8" fill="#fff" stroke="#111" stroke-width="4.5"/><path d="M34 14h16" stroke="#111" stroke-width="4.5" stroke-linecap="round"/><g stroke="${MAGENTA}" stroke-width="4"><path d="M25 31l34 35M25 47l31 31"/></g>`;
  const EMBEDDED_ICON = `<circle cx="50" cy="50" r="40" fill="#fff" stroke="${MAGENTA}" stroke-width="5"/><circle cx="50" cy="50" r="37" fill="none" stroke="#111" stroke-width="4"/><g fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"><path d="M18 45h18a14 14 0 0 1 28 0h18M50 52v32M50 52c-16 4-24 18-26 30M50 52c16 4 24 18 26 30"/></g><circle cx="50" cy="50" r="4.5" fill="${MAGENTA}"/>`;
  const STORAGE_ICON = `<g stroke="#111" stroke-width="3" stroke-linejoin="round"><rect x="34" y="10" width="52" height="20" rx="3" fill="#2b2b2b" transform="rotate(-18 60 20)"/><rect x="10" y="40" width="60" height="22" rx="3" fill="#1f1f1f" transform="rotate(-14 40 51)"/><rect x="52" y="52" width="44" height="16" rx="3" fill="#2b2b2b" transform="rotate(-14 74 60)"/></g>`;
  const icon = (markup, x, y, width, height, viewBox = '0 0 100 100') =>
    `<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">${markup}</svg>`;
  const annotations = (zh) => `
    <g>${icon(SERVER_ICON, 158, 369, 106, 106)}${icon(MOBILE_ICON, 173, 674, 72, 96, '0 0 84 100')}${icon(EMBEDDED_ICON, 157, 857, 106, 106)}${icon(STORAGE_ICON, 134, 1080, 150, 100, '0 0 100 78')}</g>
    <g class="sankey-interactive-annotation" data-node="restructuring"
      data-link-numerator="restructuring" data-link-denominator="operating_expenses"
      data-link-anchor-x="2268" data-link-anchor-y="1271"
      font-family="Noto Sans,Arial,sans-serif" text-anchor="middle" fill="${RED_LABEL}">
      <text x="2461" y="1264" font-size="40" font-weight="800">${zh ? '重组费用' : 'Restructuring'}</text>
      <text x="2461" y="1302" font-size="40">($1M)</text>
    </g>`;

  const textLine = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, lineGap = 7) => ({ blocks: [{ x, top, anchor: 'middle', lineGap, lines }] });
  const labels = (zh) => ({
    compute_networking: { blocks: [
      { x: 438, top: 373, anchor: 'middle', lineGap: 8, lines: [textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 +152%' : '+152% Y/Y', 29, 400, NOTE)] },
      { x: 212, top: zh ? 505 : 487, anchor: 'middle', lineGap: 7, lines: [textLine(zh ? '计算与网络' : 'Compute &', 40, 800, MAGENTA), ...(zh ? [] : [textLine('Networking', 40, 800, MAGENTA)])] },
    ] },
    mobile: { blocks: [
      { x: 438, top: 661, anchor: 'middle', lineGap: 8, lines: [textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 +55%' : '+55% Y/Y', 29, 400, NOTE)] },
      { x: 212, top: 770, anchor: 'middle', lineGap: 7, lines: [textLine(zh ? '移动业务' : 'Mobile', 40, 800, MAGENTA)] },
    ] },
    embedded: { blocks: [
      { x: 438, top: 896, anchor: 'middle', lineGap: 8, lines: [textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 +36%' : '+36% Y/Y', 29, 400, NOTE)] },
      { x: 212, top: 986, anchor: 'middle', lineGap: 7, lines: [textLine(zh ? '嵌入式业务' : 'Embedded', 40, 800, MAGENTA)] },
    ] },
    storage: { blocks: [
      { x: 462, top: 1096, anchor: 'middle', lineGap: 8, lines: [textLine('$value', 42, 400, MAGENTA), textLine(zh ? '同比 +127%' : '+127% Y/Y', 29, 400, NOTE)] },
      { x: 212, top: 1202, anchor: 'middle', lineGap: 7, lines: [textLine(zh ? '存储业务' : 'Storage', 40, 800, MAGENTA)] },
    ] },
    revenue: block(905, 573, [textLine(zh ? '收入' : 'Revenue', 40, 800, MAGENTA), textLine('$value', 38, 400, MAGENTA), textLine(zh ? '同比 +93%' : '+93% Y/Y', 27, 400, NOTE)], 6),
    gross_profit: block(1373, 427, [textLine(zh ? '毛利润' : 'Gross profit', 42, 800, GREEN_LABEL), textLine('$value', 42, 400, GREEN_LABEL), textLine(zh ? '利润率 35%' : '35% margin', 29, 400, NOTE), textLine(zh ? '同比 +46 个百分点' : '+46pp Y/Y', 29, 400, NOTE)], 7),
    cost_of_revenue: block(1370, 1197, [textLine(zh ? '收入' : 'Cost of', 38, 800, RED_LABEL), textLine(zh ? '成本' : 'revenue', 38, 800, RED_LABEL), textLine('$value', 38, 400, RED_LABEL)], 6),
    operating_profit: block(1835, 336, [textLine(zh ? '营业利润' : 'Operating profit', 42, 800, GREEN_LABEL), textLine('$value', 42, 400, GREEN_LABEL), textLine(zh ? '利润率 20%' : '20% margin', 29, 400, NOTE), textLine(zh ? '同比 +56 个百分点' : '+56pp Y/Y', 29, 400, NOTE)], 7),
    operating_expenses: block(1837, 881, [textLine(zh ? '营业' : 'Operating', 38, 800, RED_LABEL), textLine(zh ? '费用' : 'expenses', 38, 800, RED_LABEL), textLine('$value', 38, 400, RED_LABEL)], 6),
    net_profit: block(zh ? 2465 : 2457, 391, [textLine(zh ? '净利润' : 'Net profit', 42, 800, GREEN_LABEL), textLine('$value', 42, 400, GREEN_LABEL), textLine(zh ? '利润率 11%' : '11% margin', 29, 400, NOTE), textLine(zh ? '同比 +47 个百分点' : '+47pp Y/Y', 29, 400, NOTE)], 7),
    tax: block(2457, 625, [textLine(zh ? '税费' : 'Tax', 30, 800, RED_LABEL), textLine('$value', 30, 400, RED_LABEL)], 4),
    other_non_operating: block(2457, 718, [textLine(zh ? '其他' : 'Other', 30, 800, RED_LABEL), textLine('$value', 30, 400, RED_LABEL)], 4),
    interest: block(2457, 799, [textLine(zh ? '利息' : 'Interest', 30, 800, RED_LABEL), textLine('$value', 30, 400, RED_LABEL)], 4),
    rnd: block(2457, 893, [textLine(zh ? '研发' : 'R&D', 30, 800, RED_LABEL), textLine('$value', 30, 400, RED_LABEL)], 4),
    sga: block(2457, 1014, [textLine(zh ? '销售及行政' : 'SG&A', 30, 800, RED_LABEL), textLine('$value', 30, 400, RED_LABEL)], 4),
    other_opex: block(2457, 1127, [textLine(zh ? '其他' : 'Other', 30, 800, RED_LABEL), textLine('$value', 30, 400, RED_LABEL)], 4),
    restructuring: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'micron-q4-fy24', name: 'Micron · Q4 FY24', company: 'Micron',
    meta: {
      company: 'Micron', title: 'Micron Q4 FY24 Income Statement', period: 'Q4 FY24', periodNote: 'Ending Aug. 2024', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/micron-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 190, titleSize: 122, titleWeight: 800, titleTextLength: 2150,
      periodX: 2454, periodY: 276, periodNoteY: 317, periodAnchor: 'middle',
      logoWidth: 540, logoHeight: 170, logoX: 630, logoY: 270, logoViewBox: '0 0 300 100', logoSvg: LOGO,
    },
    render: {
      width: 2667, height: 1500, background: BG, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: MAGENTA }, hub: { node: BLACK, label: MAGENTA }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 44.8,
      routes: { restructuring: { x: 2270, y: 1271, width: 0, height: 1 } },
      nodes: {
        compute_networking: { x: 403, y: 464, width: 71, height: 135 }, mobile: { x: 403, y: 753, width: 71, height: 83 }, embedded: { x: 403, y: 987, width: 71, height: 51 }, storage: { x: 403, y: 1187, width: 71, height: 75 },
        revenue: { x: 870, y: 716, width: 70, height: 349 }, gross_profit: { x: 1337, y: 607, width: 71, height: 121 }, cost_of_revenue: { x: 1334, y: 951, width: 72, height: 225 },
        operating_profit: { x: 1800, y: 518, width: 70, height: 68 }, operating_expenses: { x: 1802, y: 806, width: 70, height: 52 },
        net_profit: { x: 2271, y: 433, width: 71, height: 37 }, tax: { x: 2271, y: 649, width: 71, height: 27 },
        other_non_operating: { x: 2271, y: 756, width: 71, height: 2, color: RED_LINK }, interest: { x: 2271, y: 838, width: 71, height: 2, color: RED_LINK },
        rnd: { x: 2271, y: 898, width: 71, height: 39 }, sga: { x: 2271, y: 1032, width: 71, height: 11 }, other_opex: { x: 2271, y: 1154, width: 71, height: 2, color: RED_LINK },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'restructuring', representation: 'flow', label: 'Restructuring', value: 0.001, valueText: '($1M)', type: 'cost', labelColor: RED_LABEL },
    ],
    nodes: [
      { id: 'compute_networking', col: 0, order: 0, type: 'source', label: ['Compute &', 'Networking'], value: 3.1, notes: ['+152% Y/Y'] },
      { id: 'mobile', col: 0, order: 1, type: 'source', label: 'Mobile', value: 1.9, notes: ['+55% Y/Y'] },
      { id: 'embedded', col: 0, order: 2, type: 'source', label: 'Embedded', value: 1.2, notes: ['+36% Y/Y'] },
      { id: 'storage', col: 0, order: 3, type: 'source', label: 'Storage', value: 1.7, notes: ['+127% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 7.8, notes: ['+93% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.7, notes: ['35% margin', '+46pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.0, valueText: '($5.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, notes: ['20% margin', '+56pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.2 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.9, notes: ['11% margin', '+47pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.007, valueText: '($7M)', color: RED_LINK },
      { id: 'interest', col: 4, order: 3, type: 'cost', label: 'Interest', value: 0.005, valueText: '($5M)', color: RED_LINK },
      { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 0.9 },
      { id: 'sga', col: 4, order: 5, type: 'cost', label: 'SG&A', value: 0.3 },
      { id: 'other_opex', col: 4, order: 6, type: 'cost', label: 'Other', value: 0.016, valueText: '($16M)', color: RED_LINK },
    ],
    links: [
      { source: 'compute_networking', target: 'revenue', value: 3.1, sourceWidth: 135, targetWidth: 137, y0: 531.5, y1: 784.5, targetOrder: 0 },
      { source: 'mobile', target: 'revenue', value: 1.9, sourceWidth: 83, targetWidth: 84, y0: 794.5, y1: 895, targetOrder: 1 },
      { source: 'embedded', target: 'revenue', value: 1.2, sourceWidth: 51, targetWidth: 53, y0: 1012.5, y1: 963.5, targetOrder: 2 },
      { source: 'storage', target: 'revenue', value: 1.7, sourceWidth: 75, targetWidth: 75, y0: 1224.5, y1: 1027.5, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.7, sourceWidth: 121, targetWidth: 121, y0: 776.5, y1: 667.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.0, sourceWidth: 228, targetWidth: 225, y0: 951, y1: 1063.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceWidth: 68, targetWidth: 68, y0: 641, y1: 552, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.2, sourceWidth: 52, targetWidth: 52, y0: 702, y1: 832, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.9, sourceWidth: 40, targetWidth: 37, y0: 538, y1: 451.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 26, targetWidth: 27, y0: 571, y1: 662.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.007, sourceWidth: 1, targetWidth: 2, y0: 584.5, y1: 757, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.005, sourceWidth: 1, targetWidth: 2, y0: 585.5, y1: 839, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 39, targetWidth: 39, y0: 825.5, y1: 917.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 11, targetWidth: 11, y0: 850, y1: 1037.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.016, sourceWidth: 1, targetWidth: 2, y0: 856.5, y1: 1155, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', targetRoute: 'restructuring', value: 0.001, sourceWidth: 1, targetWidth: 1, y0: 857.5, y1: 1271, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: { zh: {
      name: 'Micron · 2024 财年第四季度',
      meta: { title: 'Micron 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 8 月', titleTextLength: 1500 },
      annotationsSvg: annotations(true), nonNodeMetrics: { restructuring: { label: '重组费用' } },
      nodes: {
        compute_networking: { label: '计算与网络', notes: ['同比 +152%'] }, mobile: { label: '移动业务', notes: ['同比 +55%'] }, embedded: { label: '嵌入式业务', notes: ['同比 +36%'] }, storage: { label: '存储业务', notes: ['同比 +127%'] },
        revenue: { label: '收入', notes: ['同比 +93%'] }, gross_profit: { label: '毛利润', notes: ['利润率 35%', '同比 +46 个百分点'] }, cost_of_revenue: { label: '收入成本' },
        operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 +56 个百分点'] }, operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +47 个百分点'] },
        tax: { label: '税费' }, other_non_operating: { label: '其他' }, interest: { label: '利息' }, rnd: { label: '研发' }, sga: { label: '销售及行政' }, other_opex: { label: '其他' },
      },
      layout: { labels: labels(true) },
    } },
  });
})();

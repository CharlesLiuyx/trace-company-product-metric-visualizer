/* Micron Q3 FY25 income statement ($B), measured from the native 2667x1500
 * Source. Financial values live in data/income-statements/micron.js. */
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
    <g fill="none" stroke="#111111" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 80V52a13 13 0 0 1 26 0V80"/><path d="M34 65a13 13 0 0 1 26 0V80"/>
      <path d="M78 56V80"/><path d="M126 60a14 14 0 1 0 0 24"/>
      <path d="M150 56V80M150 64a12 12 0 0 1 15-6"/><circle cx="200" cy="66" r="14"/>
      <path d="M232 80V52a13 13 0 0 1 26 0V80"/>
    </g><circle cx="78" cy="40" r="4" fill="#111111"/><circle cx="276" cy="78" r="3.5" fill="#111111"/>`;

  const STORAGE_ICON = `
    <g stroke="#111111" stroke-width="3" stroke-linejoin="round">
      <rect x="34" y="10" width="52" height="20" rx="3" fill="#2b2b2b" transform="rotate(-18 60 20)"/>
      <rect x="10" y="40" width="60" height="22" rx="3" fill="#1f1f1f" transform="rotate(-14 40 51)"/>
      <rect x="52" y="52" width="44" height="16" rx="3" fill="#2b2b2b" transform="rotate(-14 74 60)"/>
    </g><g fill="${MAGENTA}" opacity="0.85"><rect x="20" y="52" width="12" height="2.2" transform="rotate(-14 26 53)"/><rect x="42" y="18" width="10" height="2" transform="rotate(-18 47 19)"/></g>`;

  const COMPUTE_ICON = `
    <g stroke="#111111" stroke-width="4" stroke-linejoin="round" fill="#ffffff">
      <rect x="20" y="16" width="60" height="18" rx="6"/><rect x="20" y="41" width="60" height="18" rx="6"/><rect x="20" y="66" width="60" height="18" rx="6"/>
    </g><g fill="#111111"><circle cx="31" cy="25" r="3"/><circle cx="31" cy="50" r="3"/><circle cx="31" cy="75" r="3"/></g>
    <g fill="${MAGENTA}"><rect x="42" y="23" width="24" height="4" rx="2"/><rect x="42" y="48" width="24" height="4" rx="2"/><rect x="42" y="73" width="24" height="4" rx="2"/></g>`;

  const MOBILE_ICON = `
    <rect x="16" y="6" width="52" height="88" rx="12" fill="#ffffff" stroke="#111111" stroke-width="4.5"/>
    <path d="M34 14h16" stroke="#111111" stroke-width="4.5" stroke-linecap="round"/><circle cx="42" cy="86" r="2.6" fill="#111111"/>
    <g stroke="${MAGENTA}" stroke-width="5" stroke-linecap="round"><path d="M26 62L58 26"/><path d="M30 78L60 44"/></g>`;

  const EMBEDDED_ICON = `
    <circle cx="50" cy="50" r="40" fill="#ffffff" stroke="${MAGENTA}" stroke-width="6"/><circle cx="50" cy="50" r="40" fill="none" stroke="#111111" stroke-width="4" stroke-dasharray="150 200" stroke-dashoffset="-6"/>
    <g fill="none" stroke="#111111" stroke-width="6" stroke-linecap="round"><path d="M18 45h18a14 14 0 0 1 28 0h18"/><path d="M50 52V84"/><path d="M50 52C34 56 26 70 24 82"/><path d="M50 52C66 56 74 70 76 82"/></g>
    <circle cx="50" cy="50" r="4.5" fill="${MAGENTA}"/>`;

  const svgIcon = (markup, x, y, width, height, viewBox) => `
    <g data-typography-role="brand"><svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">${markup}</svg></g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${svgIcon(COMPUTE_ICON, 158, 455, 106, 106, '0 0 100 100')}
      ${svgIcon(STORAGE_ICON, 132, 725, 152, 90, '0 0 100 78')}
      ${svgIcon(MOBILE_ICON, 178, 940, 66, 108, '0 0 84 100')}
      ${svgIcon(EMBEDDED_ICON, 145, 1128, 126, 126, '0 0 100 100')}
      <g class="sankey-interactive-annotation" data-node="interest" data-link-numerator="interest" data-link-denominator="net_profit" data-link-anchor-x="2188" data-link-anchor-y="459.5">
        <path d="M2144 459.5H2232C2246 459.5 2238 401.5 2270 401.5" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="2188" y="505" text-anchor="middle" font-size="34" font-weight="800" fill="${GREEN_LABEL}">${zh ? '利息收入' : 'Interest'}</text>
        <text x="2188" y="547" text-anchor="middle" font-size="32" font-weight="400" fill="${GREEN_LABEL}">$12M</text>
        <rect x="2134" y="448" width="166" height="110" fill="transparent" pointer-events="all"/>
      </g>
    </g>`;

  const line = (text, size, options = {}) => ({ text, size, weight: options.weight ?? 400, color: options.color });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 8,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}), lines,
  });
  const sourceLabel = (amountTop, nameTop, names, qoq, nameSemanticRole) => ({
    blocks: [
      block(436, amountTop, [line('$value', 44, { color: MAGENTA }), line(qoq, 30, { color: NOTE })], { lineGap: 10 }),
      block(214, nameTop, names.map((name) => line(name, 40, { weight: 800, color: MAGENTA })), {
        lineGap: 7,
        semanticRole: nameSemanticRole,
      }),
    ],
  });

  const labels = (zh) => {
    const t = zh ? {
      compute: ['计算与网络'], storage: ['存储'], mobile: ['移动'], embedded: ['嵌入式'], revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'], net: '净利润', tax: '税费', other: '其他', rnd: '研发', sga: '销售及行政',
      q11: '环比 +11%', q4: '环比 +4%', q45: '环比 +45%', q20: '环比 +20%', q15: '环比 +15%',
      margin38: '利润率 38%', margin23: '利润率 23%', margin20: '利润率 20%', pp1: '环比 +1 个百分点',
    } : {
      compute: ['Compute &', 'Networking'], storage: ['Storage'], mobile: ['Mobile'], embedded: ['Embedded'], revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', other: 'Other', rnd: 'R&D', sga: 'SG&A',
      q11: '+11% Q/Q', q4: '+4% Q/Q', q45: '+45% Q/Q', q20: '+20% Q/Q', q15: '+15% Q/Q',
      margin38: '38% margin', margin23: '23% margin', margin20: '20% margin', pp1: '+1pp Q/Q',
    };
    return {
      compute_networking: sourceLabel(402, zh ? 592 : 574, t.compute, t.q11, 'reference-offset-side-label'),
      storage: sourceLabel(743, 844, t.storage, t.q4),
      mobile: sourceLabel(947, 1051, t.mobile, t.q45),
      embedded: sourceLabel(1154, 1250, t.embedded, t.q20),
      revenue: { blocks: [block(904, 561, [line(t.revenue, 46, { weight: 800, color: MAGENTA }), line('$value', 44, { color: MAGENTA }), line(t.q15, 30, { color: NOTE })])] },
      gross_profit: { blocks: [block(1371, 392, [line(t.gross, 44, { weight: 800, color: GREEN_LABEL }), line('$value', 44, { color: GREEN_LABEL }), line(t.margin38, 30, { color: NOTE }), line(t.pp1, 30, { color: NOTE })])] },
      cost_of_revenue: { blocks: [block(1371, 1143, [...t.cost.map((v) => line(v, 40, { weight: 800, color: RED_LABEL })), line('$value', 40, { color: RED_LABEL })], { lineGap: 7 })] },
      operating_profit: { blocks: [block(1839, 271, [line(t.operatingProfit, 44, { weight: 800, color: GREEN_LABEL }), line('$value', 44, { color: GREEN_LABEL }), line(t.margin23, 30, { color: NOTE }), line(t.pp1, 30, { color: NOTE })])] },
      operating_expenses: { blocks: [block(1840, zh ? 842 : 834, [...t.operatingExpenses.map((v) => line(v, 40, { weight: 800, color: RED_LABEL })), line('$value', 40, { color: RED_LABEL })], { lineGap: 7 })] },
      net_profit: { blocks: [block(2460, 318, [line(t.net, 44, { weight: 800, color: GREEN_LABEL }), line('$value', 44, { color: GREEN_LABEL }), line(t.margin20, 30, { color: NOTE }), line(t.pp1, 30, { color: NOTE })])] },
      interest: { blocks: [] },
      tax: { blocks: [block(2458, 589, [line(t.tax, 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 6 })] },
      other_non_operating: { blocks: [block(2458, 701, [line(t.other, 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 6 })] },
      rnd: { blocks: [block(2458, 876, [line(t.rnd, 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 6 })] },
      sga: { blocks: [block(2458, 1047, [line(t.sga, zh ? 34 : 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 6 })] },
      other_opex: { blocks: [block(2458, 1195, [line(t.other, 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 6 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'micron-q3-fy25', name: 'Micron · Q3 FY25', company: 'Micron',
    meta: {
      company: 'Micron', title: 'Micron Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending May 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/micron-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 190, titleSize: 122, titleWeight: 800, titleTextLength: 2148,
      periodX: 1840, periodY: 1262, periodNoteY: 1303, periodAnchor: 'middle',
      logoWidth: 660, logoHeight: 160, logoY: 248, logoViewBox: '0 20 285 70', logoSvg: LOGO,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, interfaceAudit: { mode: 'error' },
      palette: { source: { node: BLACK, label: MAGENTA }, hub: { node: BLACK, label: MAGENTA }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [{ id: 'interest', representation: 'flow', label: 'Interest', value: 0.012, valueText: '$12M', type: 'profit', labelColor: GREEN_LABEL }],
    layout: {
      scale: 33.7,
      routes: { interest: { x: 2080, y: 459.5, width: 0, height: 1 } },
      nodes: {
        compute_networking: { x: 402, y: 502, width: 71, height: 170 }, storage: { x: 402, y: 842, width: 71, height: 48 },
        mobile: { x: 402, y: 1048, width: 71, height: 51 }, embedded: { x: 402, y: 1254, width: 71, height: 37 },
        revenue: { x: 869, y: 712, width: 70, height: 314 }, gross_profit: { x: 1336, y: 577, width: 71, height: 118 },
        cost_of_revenue: { x: 1336, y: 940, width: 71, height: 194 }, operating_profit: { x: 1804, y: 457, width: 70, height: 71 },
        operating_expenses: { x: 1806, y: 779, width: 70, height: 42 }, net_profit: { x: 2270, y: 341, width: 71, height: 61 },
        tax: { x: 2270, y: 627, width: 71, height: 5 }, other_non_operating: { x: 2270, y: 744, width: 71, height: 1 },
        rnd: { x: 2270, y: 901, width: 71, height: 31 }, sga: { x: 2270, y: 1085, width: 71, height: 9 },
        other_opex: { x: 2270, y: 1237, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'compute_networking', col: 0, order: 0, type: 'source', label: ['Compute &', 'Networking'], value: 5.1, notes: ['+11% Q/Q'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'storage', col: 0, order: 1, type: 'source', label: 'Storage', value: 1.5, notes: ['+4% Q/Q'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'mobile', col: 0, order: 2, type: 'source', label: 'Mobile', value: 1.6, notes: ['+45% Q/Q'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.2, notes: ['+20% Q/Q'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 9.3, notes: ['+15% Q/Q'], color: BLACK, labelColor: MAGENTA },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.5, notes: ['38% margin', '+1pp Q/Q'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.8 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['23% margin', '+1pp Q/Q'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.3 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['20% margin', '+1pp Q/Q'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.1 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.0, valueText: '($1.0B)' },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.3 },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.1 },
    ],
    links: [
      { source: 'compute_networking', target: 'revenue', value: 5.1, sourceWidth: 170, targetWidth: 170, y0: 587, y1: 797, sourceOrder: 0, targetOrder: 0 },
      { source: 'storage', target: 'revenue', value: 1.5, sourceWidth: 48, targetWidth: 50, y0: 866, y1: 907, sourceOrder: 0, targetOrder: 1 },
      { source: 'mobile', target: 'revenue', value: 1.6, sourceWidth: 51, targetWidth: 54, y0: 1073.5, y1: 959, sourceOrder: 0, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.2, sourceWidth: 37, targetWidth: 40, y0: 1272.5, y1: 1006, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.5, sourceWidth: 120, targetWidth: 118, y0: 772, y1: 636, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.8, sourceWidth: 194, targetWidth: 194, y0: 929, y1: 1037, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, sourceWidth: 71, targetWidth: 71, y0: 612.5, y1: 492.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.3, sourceWidth: 47, targetWidth: 42, y0: 671.5, y1: 800, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 61, targetWidth: 60, y0: 487.5, y1: 371, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.012, sourceWidth: 1, targetWidth: 1, y0: 459.5, y1: 401.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2144, c1x: 2232, c1y: 459.5, c2x: 2238, c2y: 401.5 } },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 9, targetWidth: 5, y0: 522.5, y1: 629.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 527.5, y1: 744.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 31, targetWidth: 31, y0: 794.5, y1: 916.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 9, targetWidth: 9, y0: 815.5, y1: 1089.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 820.5, y1: 1237.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '美光 · 2025 财年第三季度',
        meta: { title: '美光 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 5 月', titleTextLength: 1500 },
        annotationsSvg: annotations(true), nonNodeMetrics: { interest: { label: '利息收入' } },
        nodes: {
          compute_networking: { label: '计算与网络', notes: ['环比 +11%'] }, storage: { label: '存储', notes: ['环比 +4%'] }, mobile: { label: '移动', notes: ['环比 +45%'] }, embedded: { label: '嵌入式', notes: ['环比 +20%'] },
          revenue: { label: '收入', notes: ['环比 +15%'] }, gross_profit: { label: '毛利润', notes: ['利润率 38%', '环比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 23%', '环比 +1 个百分点'] }, operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 20%', '环比 +1 个百分点'] }, tax: { label: '税费' }, other_non_operating: { label: '其他' }, rnd: { label: '研发' }, sga: { label: '销售及行政' }, other_opex: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

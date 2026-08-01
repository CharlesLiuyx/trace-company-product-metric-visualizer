/* Micron Q1 FY25 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const NOTE = '#666666';
  const LEFT_NOTE = '#858585';
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
    <g fill="none" stroke="#000000" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 80 V52 a13 13 0 0 1 26 0 V80"/>
      <path d="M34 65 a13 13 0 0 1 26 0 V80"/>
      <path d="M78 56 V80"/>
      <path d="M126 60 a14 14 0 1 0 0 24"/>
      <path d="M150 56 V80 M150 64 a12 12 0 0 1 15 -6"/>
      <circle cx="200" cy="66" r="14"/>
      <path d="M232 80 V52 a13 13 0 0 1 26 0 V80"/>
    </g>
    <circle cx="78" cy="40" r="4" fill="#000000"/>
    <text x="294" y="86" font-family="Montserrat,Arial,sans-serif" font-weight="700" font-size="8" fill="#000000">&#174;</text>`;

  const STORAGE_ICON = `
    <g stroke="#111111" stroke-width="3" stroke-linejoin="round">
      <rect x="34" y="10" width="52" height="20" rx="3" fill="#2b2b2b" transform="rotate(-18 60 20)"/>
      <rect x="10" y="40" width="60" height="22" rx="3" fill="#1f1f1f" transform="rotate(-14 40 51)"/>
      <rect x="52" y="52" width="44" height="16" rx="3" fill="#2b2b2b" transform="rotate(-14 74 60)"/>
    </g>
    <g fill="${MAGENTA}" opacity="0.85">
      <rect x="20" y="52" width="12" height="2.2" transform="rotate(-14 26 53)"/>
      <rect x="42" y="18" width="10" height="2" transform="rotate(-18 47 19)"/>
    </g>`;

  const COMPUTE_ICON = `
    <g stroke="#111111" stroke-width="4" stroke-linejoin="round" fill="#ffffff">
      <rect x="20" y="16" width="60" height="18" rx="6"/>
      <rect x="20" y="41" width="60" height="18" rx="6"/>
      <rect x="20" y="66" width="60" height="18" rx="6"/>
    </g>
    <g fill="#111111"><circle cx="31" cy="25" r="3"/><circle cx="31" cy="50" r="3"/><circle cx="31" cy="75" r="3"/></g>
    <g fill="${MAGENTA}"><rect x="42" y="23" width="24" height="4" rx="2"/><rect x="42" y="48" width="24" height="4" rx="2"/><rect x="42" y="73" width="24" height="4" rx="2"/></g>`;

  const MOBILE_ICON = `
    <rect x="16" y="6" width="52" height="88" rx="12" fill="#ffffff" stroke="#111111" stroke-width="4.5"/>
    <path d="M34 14 h16" stroke="#111111" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="42" cy="86" r="2.6" fill="#111111"/>
    <g stroke="${MAGENTA}" stroke-width="5" stroke-linecap="round"><path d="M26 62 L58 26"/><path d="M30 78 L60 44"/></g>`;

  const EMBEDDED_ICON = `
    <circle cx="50" cy="50" r="40" fill="#ffffff" stroke="${MAGENTA}" stroke-width="6"/>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#111111" stroke-width="4" stroke-dasharray="150 200" stroke-dashoffset="-6"/>
    <g fill="none" stroke="#111111" stroke-width="6" stroke-linecap="round">
      <path d="M18 45 h18 a14 14 0 0 1 28 0 h18"/><path d="M50 52 V84"/>
      <path d="M50 52 C34 56 26 70 24 82"/><path d="M50 52 C66 56 74 70 76 82"/>
    </g>
    <circle cx="50" cy="50" r="4.5" fill="${MAGENTA}"/>`;

  const svgIcon = (markup, x, y, width, height, viewBox) =>
    `<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">${markup}</svg>`;

  const annotations = `
    <g data-typography-role="brand">
      ${svgIcon(COMPUTE_ICON, 158, 411, 106, 106, '0 0 100 100')}
      ${svgIcon(STORAGE_ICON, 132, 710, 152, 90, '0 0 100 78')}
      ${svgIcon(MOBILE_ICON, 178, 925, 66, 108, '0 0 84 100')}
      ${svgIcon(EMBEDDED_ICON, 149, 1137, 118, 118, '0 0 100 100')}
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });

  const labels = {
    compute_networking: { blocks: [
      block(439, 390, [line('$value', 44, 400, MAGENTA), line('+46% Q/Q', 30, 400, LEFT_NOTE)], 10),
      { ...block(210, 540, [line('Compute &', 40, 800, MAGENTA), line('Networking', 40, 800, MAGENTA)], 7), semanticRole: 'reference-offset-side-label' },
    ] },
    storage: { blocks: [
      block(439, 719, [line('$value', 44, 400, MAGENTA), line('+3% Q/Q', 30, 400, LEFT_NOTE)], 10),
      { ...block(210, 829, [line('Storage', 40, 800, MAGENTA)], 7), semanticRole: 'reference-offset-side-label' },
    ] },
    mobile: { blocks: [
      block(439, 937, [line('$value', 44, 400, MAGENTA), line('+19% Q/Q', 30, 400, LEFT_NOTE)], 10),
      block(210, 1042, [line('Mobile', 40, 800, MAGENTA)], 7),
    ] },
    embedded: { blocks: [
      block(439, 1168, [line('$value', 44, 400, MAGENTA), line('(10%) Q/Q', 30, 400, LEFT_NOTE)], 10),
      block(210, 1263, [line('Embedded', 40, 800, MAGENTA)], 7),
    ] },
    revenue: { blocks: [block(906, 566, [line('Revenue', 46, 800, MAGENTA), line('$value', 44, 400, MAGENTA), line('+12% Q/Q', 30, 400, NOTE)])] },
    gross_profit: { blocks: [block(1374, 418, [line('Gross profit', 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line('38% margin', 30, 400, NOTE), line('+3pp Q/Q', 30, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1376, 1181, [line('Cost of', 40, 800, RED_LABEL), line('revenue', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 7)] },
    operating_profit: { blocks: [block(1846, 316, [line('Operating profit', 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line('25% margin', 30, 400, NOTE), line('+5pp Q/Q', 30, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1848, 860, [line('Operating', 40, 800, RED_LABEL), line('expenses', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 7)] },
    net_profit: { blocks: [block(2457, 388, [line('Net profit', 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line('21% margin', 30, 400, NOTE), line('+10pp Q/Q', 30, 400, NOTE)])] },
    tax: { blocks: [block(2457, 651, [line('Tax', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 6)] },
    other_non_operating: { blocks: [block(2457, 761, [line('Other', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 6)] },
    rnd: { blocks: [block(2457, 890, [line('R&D', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 6)] },
    sga: { blocks: [block(2457, 1099, [line('SG&A', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 6)] },
  };

  const zhLabels = {
    compute_networking: { blocks: [block(439, 390, [line('$value', 44, 400, MAGENTA), line('环比 +46%', 30, 400, LEFT_NOTE)], 10), block(210, 550, [line('计算与网络', 40, 800, MAGENTA)], 7)] },
    storage: { blocks: [block(439, 719, [line('$value', 44, 400, MAGENTA), line('环比 +3%', 30, 400, LEFT_NOTE)], 10), block(210, 828, [line('存储', 40, 800, MAGENTA)], 7)] },
    mobile: { blocks: [block(439, 937, [line('$value', 44, 400, MAGENTA), line('环比 +19%', 30, 400, LEFT_NOTE)], 10), block(210, 1042, [line('移动业务', 40, 800, MAGENTA)], 7)] },
    embedded: { blocks: [block(439, 1168, [line('$value', 44, 400, MAGENTA), line('环比下降 10%', 30, 400, LEFT_NOTE)], 10), block(210, 1263, [line('嵌入式业务', 40, 800, MAGENTA)], 7)] },
    revenue: { blocks: [block(906, 566, [line('收入', 46, 800, MAGENTA), line('$value', 44, 400, MAGENTA), line('环比 +12%', 30, 400, NOTE)])] },
    gross_profit: { blocks: [block(1374, 418, [line('毛利润', 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line('利润率 38%', 30, 400, NOTE), line('环比 +3 个百分点', 30, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1376, 1181, [line('收入', 40, 800, RED_LABEL), line('成本', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 7)] },
    operating_profit: { blocks: [block(1846, 316, [line('营业利润', 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line('利润率 25%', 30, 400, NOTE), line('环比 +5 个百分点', 30, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1848, 873, [line('营业费用', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 7)] },
    net_profit: { blocks: [block(2477, 388, [line('净利润', 44, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line('利润率 21%', 30, 400, NOTE), line('环比 +10 个百分点', 30, 400, NOTE)])] },
    tax: { blocks: [block(2457, 651, [line('税费', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 6)] },
    other_non_operating: { blocks: [block(2457, 761, [line('其他', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 6)] },
    rnd: { blocks: [block(2457, 890, [line('研发', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 6)] },
    sga: { blocks: [block(2457, 1099, [line('销售及行政', 34, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)], 6)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'micron-q1-fy25',
    name: 'Micron · Q1 FY25',
    company: 'Micron',
    meta: {
      company: 'Micron',
      title: 'Micron Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Nov. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/micron-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 190,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2148,
      periodX: 2453,
      periodY: 277,
      periodNoteY: 318,
      periodAnchor: 'middle',
      logoWidth: 700,
      logoHeight: 240,
      logoX: 700,
      logoY: 180,
      logoViewBox: '0 0 300 100',
      logoSvg: LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: MAGENTA },
        hub: { node: BLACK, label: MAGENTA },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 39.2,
      nodes: {
        compute_networking: { x: 404, y: 486, width: 71, height: 172 },
        storage: { x: 404, y: 815, width: 71, height: 67 },
        mobile: { x: 404, y: 1033, width: 71, height: 59 },
        embedded: { x: 404, y: 1264, width: 71, height: 39 },
        revenue: { x: 871, y: 714, width: 70, height: 341 },
        gross_profit: { x: 1338, y: 606, width: 71, height: 130 },
        cost_of_revenue: { x: 1340, y: 953, width: 72, height: 209 },
        operating_profit: { x: 1811, y: 501, width: 70, height: 84 },
        operating_expenses: { x: 1813, y: 799, width: 70, height: 44 },
        net_profit: { x: 2272, y: 396, width: 71, height: 73 },
        tax: { x: 2272, y: 693, width: 71, height: 8 },
        other_non_operating: { x: 2272, y: 817, width: 71, height: 3, color: RED_LINK },
        rnd: { x: 2272, y: 910, width: 71, height: 34 },
        sga: { x: 2272, y: 1135, width: 71, height: 10 },
      },
      labels,
    },
    nodes: [
      { id: 'compute_networking', col: 0, order: 0, type: 'source', label: ['Compute &', 'Networking'], value: 4.4, notes: ['+46% Q/Q'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'storage', col: 0, order: 1, type: 'source', label: 'Storage', value: 1.7, notes: ['+3% Q/Q'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'mobile', col: 0, order: 2, type: 'source', label: 'Mobile', value: 1.5, notes: ['+19% Q/Q'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 1.1, notes: ['(10%) Q/Q'], color: BLACK, labelColor: MAGENTA, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.7, notes: ['+12% Q/Q'], color: BLACK, labelColor: MAGENTA },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.3, notes: ['38% margin', '+3pp Q/Q'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.4 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['25% margin', '+5pp Q/Q'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.2 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['21% margin', '+10pp Q/Q'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'other_non_operating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.022, valueText: '($22M)', color: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.9 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.3 },
    ],
    links: [
      { source: 'compute_networking', target: 'revenue', value: 4.4, sourceWidth: 172, targetWidth: 172, targetOrder: 0 },
      { source: 'storage', target: 'revenue', value: 1.7, sourceWidth: 67, targetWidth: 68, targetOrder: 1 },
      { source: 'mobile', target: 'revenue', value: 1.5, sourceWidth: 59, targetWidth: 60, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 1.1, sourceWidth: 39, targetWidth: 41, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 3.3, sourceWidth: 131, targetWidth: 130, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.4, sourceWidth: 210, targetWidth: 209, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, sourceWidth: 84, targetWidth: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.2, sourceWidth: 46, targetWidth: 44, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, width: 73, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, width: 8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.022, width: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, width: 34, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, width: 10, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Micron · 2025 财年第一季度',
        meta: { title: 'Micron 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2024 年 11 月', titleTextLength: 1500 },
        nodes: {
          compute_networking: { label: '计算与网络', notes: ['环比 +46%'] },
          storage: { label: '存储', notes: ['环比 +3%'] },
          mobile: { label: '移动业务', notes: ['环比 +19%'] },
          embedded: { label: '嵌入式业务', notes: ['环比下降 10%'] },
          revenue: { label: '收入', notes: ['环比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 38%', '环比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 25%', '环比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '环比 +10 个百分点'] },
          tax: { label: '税费' },
          other_non_operating: { label: '其他' },
          rnd: { label: '研发' },
          sga: { label: '销售及行政' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

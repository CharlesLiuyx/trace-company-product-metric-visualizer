/* ====================================================================
 * Docebo - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/docebo-q3-fy25.png as a fixed
 * d3-sankey layout with measured SVG geometry and pure vector annotations.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#1464db';
  const BLUE_LINK = '#8eb2e8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const doceboLogo = `
    <g transform="translate(-10 0) scale(0.95 1)"
      font-family="Montserrat,Arial,sans-serif" fill="#0068d9">
      <text x="0" y="125" font-size="148" font-weight="800" letter-spacing="-10"
        textLength="520" lengthAdjust="spacingAndGlyphs">docebo</text>
      <text x="526" y="55" font-size="27" font-weight="700">®</text>
    </g>`;

  const annotations = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other"
      font-family="Montserrat,Arial,sans-serif" fill="${GREEN_LABEL}">
      <text x="2114" y="437" font-size="31" font-weight="800">${zh ? '其他' : 'Other'}</text>
      <text x="2114" y="479" font-size="31" font-weight="400">$0.2M</text>
    </g>
    <g font-family="Montserrat,Arial,sans-serif" fill="#ffffff">
      <rect x="110" y="1133" width="144" height="168" rx="32" fill="${BLUE}"/>
      <text x="182" y="1188" text-anchor="middle" font-size="29" font-weight="800">ARR</text>
      <text x="182" y="1227" text-anchor="middle" font-size="28" font-weight="500">$236M</text>
      <text x="182" y="1268" text-anchor="middle" font-size="27" font-weight="500">${zh ? '同比 +10%' : '+10% Y/Y'}</text>
      <rect x="268" y="1135" width="379" height="164" rx="32" fill="${BLUE}"/>
      <text x="457.5" y="1188" text-anchor="middle" font-size="29" font-weight="800">${zh ? '平均合同金额' : 'Average Contract'}</text>
      <text x="457.5" y="1227" text-anchor="middle" font-size="28" font-weight="500">$62.8K</text>
      <text x="457.5" y="1268" text-anchor="middle" font-size="27" font-weight="500">${zh ? '同比 +16%' : '+16% Y/Y'}</text>
    </g>
    <text x="168" y="1334" font-family="Montserrat,Arial,sans-serif" font-size="28"
      font-weight="500" fill="${NOTE}">ARR = ${zh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>`;

  const block = (x, top, lines, anchor = 'middle', lineGap = 9) => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });
  const nodeLabel = (name, value, notes = [], options = {}) => [
    { text: name, size: options.nameSize || 40, weight: 800, color: options.nameColor },
    { text: value, size: options.valueSize || 39, weight: 400, color: options.valueColor },
    ...notes.map((text) => ({ text, size: options.noteSize || 28, weight: 400, color: NOTE })),
  ];

  const englishLabels = {
    subscription: { blocks: [
      block(414.5, 402, [
        { text: '$value', size: 39, weight: 400 },
        { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
      ]),
      block(304, 649, [{ text: 'Subscription', size: 40, weight: 800 }], 'end'),
    ] },
    professional_services: { blocks: [
      block(414.5, 934, [
        { text: '$value', size: 39, weight: 400 },
        { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
      ]),
      block(300, 998, [
        { text: 'Professional', size: 40, weight: 800 },
        { text: 'services', size: 40, weight: 800 },
      ], 'end'),
    ] },
    revenue: { blocks: [block(880, 462, nodeLabel('Revenue', '$value', ['+11% Y/Y']))] },
    gross_profit: { blocks: [block(1346.5, 318, nodeLabel('Gross profit', '$value', ['80% margin', '(1pp) Y/Y'], { nameSize: 39 }))] },
    cost_of_revenue: { blocks: [block(1349.5, 1087, [
      { text: 'Cost of', size: 36, weight: 800 },
      { text: 'revenue', size: 36, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ], 'middle', 8)] },
    operating_profit: { blocks: [block(1812.5, 232, nodeLabel('Operating profit', '$value', ['13% margin', '+5pp Y/Y'], { nameSize: 39 }))] },
    operating_expenses: { blocks: [block(1815.5, 890, [
      { text: 'Operating', size: 39, weight: 800 },
      { text: 'expenses', size: 39, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ], 'middle', 8)] },
    other: { blocks: [] },
    net_profit: { blocks: [block(2355, 279, nodeLabel('Net profit', '$value', ['10% margin', '+1pp Y/Y']), 'start')] },
    tax: { blocks: [block(2450, 494, [
      { text: 'Tax', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
    ], 'middle', 8)] },
    sm: { blocks: [block(2369, 650, [
      { text: 'S&M ($18M)', size: 31, weight: 800 },
      { text: '29% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
    rnd: { blocks: [block(2369, 783, [
      { text: 'R&D ($12M)', size: 31, weight: 800 },
      { text: '19% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
    ga: { blocks: [block(2372, 919, [
      { text: 'G&A ($9M)', size: 31, weight: 800 },
      { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
    sbc: { blocks: [block(2379, 1055, [
      { text: 'SBC ($2M)', size: 31, weight: 800 },
      { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
    depreciation: { blocks: [block(2368, 1187, [
      { text: 'Depreciation', size: 31, weight: 800 },
      { text: '($0.7M)', size: 31, weight: 400 },
      { text: '1% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
  };

  const zhLabels = {
    subscription: { blocks: [
      block(414.5, 402, [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +10%', size: 28, weight: 400, color: NOTE },
      ]),
      block(304, 649, [{ text: '订阅', size: 40, weight: 800 }], 'end'),
    ] },
    professional_services: { blocks: [
      block(414.5, 934, [
        { text: '$value', size: 39, weight: 400 },
        { text: '同比 +27%', size: 28, weight: 400, color: NOTE },
      ]),
      block(300, 998, [
        { text: '专业', size: 40, weight: 800 },
        { text: '服务', size: 40, weight: 800 },
      ], 'end'),
    ] },
    revenue: { blocks: [block(880, 462, nodeLabel('收入', '$value', ['同比 +11%']))] },
    gross_profit: { blocks: [block(1346.5, 318, nodeLabel('毛利润', '$value', ['利润率 80%', '同比 (1 个百分点)'], { nameSize: 39 }))] },
    cost_of_revenue: { blocks: [block(1349.5, 1087, [
      { text: '收入', size: 36, weight: 800 },
      { text: '成本', size: 36, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ], 'middle', 8)] },
    operating_profit: { blocks: [block(1812.5, 232, nodeLabel('营业利润', '$value', ['利润率 13%', '同比 +5 个百分点'], { nameSize: 39 }))] },
    operating_expenses: { blocks: [block(1815.5, 890, [
      { text: '营业', size: 39, weight: 800 },
      { text: '费用', size: 39, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ], 'middle', 8)] },
    other: { blocks: [] },
    net_profit: { blocks: [block(2355, 279, nodeLabel('净利润', '$value', ['利润率 10%', '同比 +1 个百分点']), 'start')] },
    tax: { blocks: [block(2450, 494, [
      { text: '税费', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
    ], 'middle', 8)] },
    sm: { blocks: [block(2369, 650, [
      { text: '销售与营销 ($18M)', size: 31, weight: 800 },
      { text: '占收入 29%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
    rnd: { blocks: [block(2369, 783, [
      { text: '研发 ($12M)', size: 31, weight: 800 },
      { text: '占收入 19%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
    ga: { blocks: [block(2372, 919, [
      { text: '一般及行政 ($9M)', size: 31, weight: 800 },
      { text: '占收入 15%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
    sbc: { blocks: [block(2379, 1055, [
      { text: '股权激励 ($2M)', size: 31, weight: 800 },
      { text: '占收入 3%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
    depreciation: { blocks: [block(2368, 1187, [
      { text: '折旧', size: 31, weight: 800 },
      { text: '($0.7M)', size: 31, weight: 400 },
      { text: '占收入 1%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
    ], 'start', 8)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'docebo-q3-fy25',
    name: 'Docebo · Q3 FY25',
    company: 'Docebo',
    meta: {
      company: 'Docebo',
      title: 'Docebo Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/docebo-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2200,
      logoWidth: 555,
      logoHeight: 160,
      logoY: 253,
      logoViewBox: '0 0 555 160',
      logoSvg: doceboLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1,
      nodes: {
        subscription: { x: 379, y: 505, width: 71, height: 343 },
        professional_services: { x: 379, y: 1038, width: 71, height: 19 },
        revenue: { x: 846, y: 616, width: 70, height: 364 },
        gross_profit: { x: 1313, y: 501, width: 71, height: 293 },
        cost_of_revenue: { x: 1313, y: 1001, width: 71, height: 71 },
        operating_profit: { x: 1781, y: 414, width: 70, height: 45 },
        operating_expenses: { x: 1781, y: 634, width: 70, height: 244 },
        other: { x: 2114, y: 394, width: 71, height: 2 },
        net_profit: { x: 2247, y: 318, width: 71, height: 34 },
        tax: { x: 2247, y: 544, width: 71, height: 10 },
        sm: { x: 2247, y: 642, width: 71, height: 103 },
        rnd: { x: 2247, y: 808, width: 71, height: 68 },
        ga: { x: 2247, y: 924, width: 71, height: 52 },
        sbc: { x: 2247, y: 1092, width: 71, height: 8 },
        depreciation: { x: 2247, y: 1222, width: 71, height: 1 },
      },
      labels: englishLabels,
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 58.046, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: 'Professional services', value: 3.576, notes: ['+27% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 61.622, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 49.49, notes: ['80% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 12.132, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 8.048, notes: ['13% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 41.442, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.198, valueText: '$0.198M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 6.109, notes: ['10% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.137, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 17.6, notes: ['29% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 11.905, notes: ['19% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 9.173, notes: ['15% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sbc', col: 5, order: 5, type: 'cost', label: 'SBC', value: 1.925, notes: ['3% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 5, order: 6, type: 'cost', label: 'Depreciation', value: 0.743, valueText: '($0.743M)', notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 58.046, sourceWidth: 343, targetWidth: 343, y0: 676.5, y1: 787.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'professional_services', target: 'revenue', value: 3.576, sourceWidth: 19, targetWidth: 21, y0: 1047.5, y1: 969.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 49.49, sourceWidth: 293, targetWidth: 293, y0: 762.5, y1: 647.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 12.132, sourceWidth: 70, targetWidth: 71, y0: 945, y1: 1036.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 8.048, sourceWidth: 46, targetWidth: 45, y0: 524, y1: 436.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 41.442, sourceWidth: 247, targetWidth: 244, y0: 670.5, y1: 756, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 5.911, sourceWidth: 33, targetWidth: 33, y0: 430.5, y1: 334.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2.137, sourceWidth: 12, targetWidth: 10, y0: 453, y1: 549, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'other',
        target: 'net_profit',
        value: 0.198,
        sourceWidth: 2,
        targetWidth: 1,
        y0: 395,
        y1: 351.5,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: GREEN_LINK,
        curve: { c1x: 2205, c1y: 395, c2x: 2220, c2y: 351.5 },
      },
      { source: 'operating_expenses', target: 'sm', value: 17.6, sourceWidth: 104, targetWidth: 103, y0: 686, y1: 693.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 11.905, sourceWidth: 70, targetWidth: 68, y0: 773, y1: 842, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 9.173, sourceWidth: 54, targetWidth: 52, y0: 835, y1: 950, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sbc', value: 1.925, sourceWidth: 11, targetWidth: 8, y0: 867.5, y1: 1096, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation', value: 0.743, sourceWidth: 4, targetWidth: 1, y0: 876, y1: 1222.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['ARR'],
      zh: {
        name: 'Docebo · 2025 财年第三季度',
        meta: {
          title: 'Docebo 2025 财年第三季度利润表',
          titleTextLength: 2200,
        },
        annotationsSvg: annotations(true),
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +10%'] },
          professional_services: { label: '专业服务', notes: ['同比 +27%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 29%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 15%', '同比 (0 个百分点)'] },
          sbc: { label: '股权激励', notes: ['占收入 3%', '同比 (0 个百分点)'] },
          depreciation: { label: '折旧', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

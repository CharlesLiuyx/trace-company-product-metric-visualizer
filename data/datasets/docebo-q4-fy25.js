/* ====================================================================
 * Docebo - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/docebo-q4-fy25.png as a fixed
 * d3-sankey layout with measured SVG geometry and pure vector annotations.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#2166d5';
  const BLUE_LINK = '#87ade5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#dc0000';
  const RED_LABEL = '#9c1700';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2355;

  const doceboLogo = `
    <g font-family="Montserrat,Arial,sans-serif" fill="#0969d8">
      <text x="0" y="125" font-size="148" font-weight="800" letter-spacing="-10"
        textLength="520" lengthAdjust="spacingAndGlyphs">docebo</text>
      <text x="526" y="55" font-size="27" font-weight="700">®</text>
    </g>`;

  const kpiCards = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif" fill="#ffffff">
      <rect x="110" y="1135" width="144" height="165" rx="32" fill="${BLUE}"/>
      <text x="182" y="1188" text-anchor="middle" font-size="29" font-weight="800">ARR</text>
      <text x="182" y="1227" text-anchor="middle" font-size="28" font-weight="500">$238M</text>
      <text x="182" y="1268" text-anchor="middle" font-size="27" font-weight="500">${zh ? '同比 +8%' : '+8% Y/Y'}</text>
      <rect x="267" y="1135" width="381" height="165" rx="32" fill="${BLUE}"/>
      <text x="457.5" y="1188" text-anchor="middle" font-size="29" font-weight="800">${zh ? '平均合同金额' : 'Average Contract'}</text>
      <text x="457.5" y="1227" text-anchor="middle" font-size="28" font-weight="500">$66.5K</text>
      <text x="457.5" y="1268" text-anchor="middle" font-size="27" font-weight="500">${zh ? '同比 +21%' : '+21% Y/Y'}</text>
    </g>
    <text x="169" y="1334" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">ARR = ${zh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>`;

  const block = (x, top, lines, anchor = 'middle', lineGap = 9) => ({ x, top, anchor, lineGap, lines });
  const nodeLabel = (name, value, notes = [], options = {}) => [
    { text: name, size: options.nameSize || 40, weight: 800, color: options.nameColor },
    { text: value, size: options.valueSize || 39, weight: 400, color: options.valueColor },
    ...notes.map((text) => ({ text, size: options.noteSize || 28, weight: 400, color: NOTE })),
  ];

  const zhLayoutLabels = {
    subscription: { blocks: [
      block(414.5, 426, [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +9%', size: 28, weight: 400, color: NOTE }]),
      block(284, 670, [{ text: '订阅', size: 40, weight: 800 }], 'end'),
    ] },
    professional_services: { blocks: [
      block(414.5, 979, [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +29%', size: 28, weight: 400, color: NOTE }]),
      block(260, 1018, [{ text: '专业', size: 40, weight: 800 }, { text: '服务', size: 40, weight: 800 }], 'end'),
    ] },
    revenue: { blocks: [block(881, 485, nodeLabel('收入', '$value', ['同比 +11%']))] },
    gross_profit: { blocks: [block(1348.5, 370, nodeLabel('毛利润', '$value', ['利润率 80%', '同比 (2 个百分点)'], { nameSize: 39 }))] },
    cost_of_revenue: { blocks: [block(1348.5, 1110, [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }], 'middle', 8)] },
    operating_profit: { blocks: [block(1818.5, 283, nodeLabel('营业利润', '$value', ['利润率 15%', '同比 +1 个百分点'], { nameSize: 39 }))] },
    operating_expenses: { blocks: [block(1818.5, 925, [{ text: '营业', size: 39, weight: 800 }, { text: '费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }], 'middle', 8)] },
    tax_benefit: { blocks: [block(2145, 222, [{ text: '税收收益', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }])] },
    net_profit: { blocks: [block(2390, 365, [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }], 'start')] },
    other: { blocks: [block(RIGHT_LABEL_X, 516, [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }], 'start', 8)] },
    sm: { blocks: [block(RIGHT_LABEL_X, 641, [{ text: '销售与营销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 29%', size: 28, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 789, [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 19%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
    ga: { blocks: [block(RIGHT_LABEL_X, 944, [{ text: '一般及行政', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 13%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
    sbc: { blocks: [block(RIGHT_LABEL_X, 1110, [{ text: '股权激励', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 2%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
    depreciation: { blocks: [block(RIGHT_LABEL_X, 1280, [{ text: '折旧', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 1%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'docebo-q4-fy25',
    name: 'Docebo · Q4 FY25',
    company: 'Docebo',
    meta: {
      company: 'Docebo',
      title: 'Docebo Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/docebo-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2200,
      logoWidth: 555,
      logoHeight: 160,
      logoY: 272,
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
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: kpiCards(false),
    layout: {
      scale: 1,
      nodes: {
        subscription: { x: 377, y: 517, width: 75, height: 334 },
        professional_services: { x: 377, y: 1068, width: 75, height: 24 },
        revenue: { x: 844, y: 627, width: 74, height: 358 },
        gross_profit: { x: 1312, y: 555, width: 73, height: 285 },
        cost_of_revenue: { x: 1312, y: 1007, width: 73, height: 73 },
        operating_profit: { x: 1782, y: 464, width: 73, height: 55 },
        operating_expenses: { x: 1782, y: 679, width: 73, height: 233 },
        tax_benefit: { x: 2109, y: 307, width: 72, height: 100 },
        net_profit: { x: 2248, y: 324, width: 72, height: 151 },
        other: { x: 2248, y: 562, width: 72, height: 2 },
        sm: { x: 2248, y: 630, width: 72, height: 102 },
        rnd: { x: 2248, y: 791, width: 72, height: 69 },
        ga: { x: 2248, y: 956, width: 72, height: 49 },
        sbc: { x: 2248, y: 1142, width: 72, height: 8 },
        depreciation: { x: 2248, y: 1328, width: 72, height: 4 },
      },
      labels: {
        subscription: { blocks: [
          block(414.5, 426, [{ text: '$value', size: 39, weight: 400 }, { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE }]),
          block(284, 670, [{ text: 'Subscription', size: 40, weight: 800 }], 'end'),
        ] },
        professional_services: { blocks: [
          block(414.5, 979, [{ text: '$value', size: 39, weight: 400 }, { text: '+29% Y/Y', size: 28, weight: 400, color: NOTE }]),
          block(260, 1018, [{ text: 'Professional', size: 40, weight: 800 }, { text: 'services', size: 40, weight: 800 }], 'end'),
        ] },
        revenue: { blocks: [block(881, 485, nodeLabel('Revenue', '$value', ['+11% Y/Y']))] },
        gross_profit: { blocks: [block(1348.5, 370, nodeLabel('Gross profit', '$value', ['80% margin', '(2pp) Y/Y'], { nameSize: 39 }))] },
        cost_of_revenue: { blocks: [block(1348.5, 1110, [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }], 'middle', 8)] },
        operating_profit: { blocks: [block(1818.5, 283, nodeLabel('Operating profit', '$value', ['15% margin', '+1pp Y/Y'], { nameSize: 39 }))] },
        operating_expenses: { blocks: [block(1818.5, 925, [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }], 'middle', 8)] },
        tax_benefit: { blocks: [block(2145, 222, [{ text: 'Tax benefit', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }])] },
        net_profit: { blocks: [block(2390, 365, [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }], 'start')] },
        other: { blocks: [block(RIGHT_LABEL_X, 516, [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }], 'start', 8)] },
        sm: { blocks: [block(RIGHT_LABEL_X, 641, [{ text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '29% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 789, [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '19% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
        ga: { blocks: [block(RIGHT_LABEL_X, 944, [{ text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '13% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
        sbc: { blocks: [block(RIGHT_LABEL_X, 1110, [{ text: 'SBC', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '2% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
        depreciation: { blocks: [block(RIGHT_LABEL_X, 1280, [{ text: 'Depreciation', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '1% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }], 'start', 8)] },
      },
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 59.082, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: 'Professional services', value: 3.955, notes: ['+29% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 63.037, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 50.297, notes: ['80% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 12.74, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 9.34, notes: ['15% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 40.957, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 17.694, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 26.853, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.181, valueText: '($0.2M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 18.006, notes: ['29% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 12.113, notes: ['19% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 8.407, valueText: '($9M)', notes: ['13% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sbc', col: 5, order: 5, type: 'cost', label: 'SBC', value: 1.551, notes: ['2% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 5, order: 6, type: 'cost', label: 'Depreciation', value: 0.798, notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 59.082, sourceWidth: 334, targetWidth: 335, y0: 684, y1: 794.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'professional_services', target: 'revenue', value: 3.955, sourceWidth: 24, targetWidth: 24, y0: 1080, y1: 973.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 50.297, sourceWidth: 286, targetWidth: 285, y0: 770, y1: 697.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 12.74, sourceWidth: 73, targetWidth: 73, y0: 948.5, y1: 1043.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 9.34, sourceWidth: 54, targetWidth: 55, y0: 582, y1: 491.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 40.957, sourceWidth: 231, targetWidth: 233, y0: 724.5, y1: 795.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 9.159, sourceWidth: 54, targetWidth: 53, y0: 491, y1: 448.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 0.181, sourceWidth: 1, targetWidth: 2, y0: 518.5, y1: 563, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1960, c1y: 518.5, c2x: 2210, c2y: 563 } },
      { source: 'tax_benefit', target: 'net_profit', value: 17.694, sourceWidth: 100, targetWidth: 98, y0: 357, y1: 373.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { c1x: 2195, c1y: 357, c2x: 2215, c2y: 373.5 } },
      { source: 'operating_expenses', target: 'sm', value: 18.006, sourceWidth: 102, targetWidth: 102, y0: 730, y1: 681, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 12.113, sourceWidth: 69, targetWidth: 69, y0: 815.5, y1: 825.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 8.407, sourceWidth: 48, targetWidth: 49, y0: 874, y1: 980.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sbc', value: 1.551, sourceWidth: 10, targetWidth: 8, y0: 903, y1: 1146, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation', value: 0.798, sourceWidth: 4, targetWidth: 4, y0: 910, y1: 1330, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['ARR'],
      zh: {
        name: 'Docebo · 2025 财年第四季度',
        meta: { title: 'Docebo 2025 财年第四季度利润表', titleTextLength: 2200 },
        annotationsSvg: kpiCards(true),
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +9%'] },
          professional_services: { label: '专业服务', notes: ['同比 +29%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润' },
          other: { label: '其他' },
          sm: { label: '销售与营销', notes: ['占收入 29%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 13%', '同比 (0 个百分点)'] },
          sbc: { label: '股权激励', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          depreciation: { label: '折旧', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

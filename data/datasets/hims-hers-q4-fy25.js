/* Hims & Hers Q4 FY25 income statement ($M), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE = '#cd9b5c';
  const SOURCE_LINK = '#dec6a7';
  const PROFIT = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#99cd99';
  const COST = '#d90000';
  const COST_LABEL = '#a61700';
  const COST_LINK = '#e08585';
  const RIGHT_LABEL_X = 2486;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });

  const himsHersLogo = `
    <g transform="translate(-24 0)">
      <text x="350" y="119" text-anchor="middle" font-family="Georgia,Times New Roman,serif"
        font-size="139" font-weight="700" letter-spacing="-6" textLength="665"
        lengthAdjust="spacingAndGlyphs" fill="#121212">hims &amp; hers</text>
    </g>`;

  const kpiCard = (x, width, header, value, note, headerSize = 28) => `
    <g>
      <rect x="${x}" y="1201" width="${width}" height="149" rx="29" fill="#d29a55"/>
      <text x="${x + width / 2}" y="1252" text-anchor="middle" font-size="${headerSize}" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1291" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1322" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(72, 241, zh ? '订阅用户' : 'Subscribers', '2.5M', zh ? '同比 +13%' : '+13% Y/Y', zh ? 27 : 28)}
      ${kpiCard(326, 378, zh ? '每名订阅用户月收入' : 'Monthly Rev. per Sub', '$83', zh ? '同比 +11%' : '+11% Y/Y', zh ? 23 : 28)}
    </g>`;

  const labels = {
    online_revenue: {
      blocks: [
        block(388, 470, [line('$value', 39), line('+29% Y/Y', 29, { color: NOTE })]),
        block(184, 621, [line('Online', 40, { weight: 800 }), line('Revenue', 40, { weight: 800 })], { lineGap: 10 }),
      ],
    },
    wholesale_revenue: {
      blocks: [
        block(388, 1035, [line('$value', 39), line('(16%) Y/Y', 29, { color: NOTE })]),
        block(184, 1077, [line('Wholesale', 40, { weight: 800 }), line('Revenue', 40, { weight: 800 })], { lineGap: 10 }),
      ],
    },
    revenue: { blocks: [block(855, 512, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+28% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1322, 374, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('72% margin', 29, { color: NOTE }), line('(5pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1322, 1148, [line('Cost of', 36, { weight: 800 }), line('revenue', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1790, 301, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('1% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1790, 937, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)], { lineGap: 10 })] },
    other_income: { blocks: [block(2087, 500, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 338, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('3% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })])] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 691, [line('Marketing', 31, { weight: 800 }), line('($238M)', 31), line('39% of revenue', 29, { color: NOTE }), line('(7pp) Y/Y', 29, { color: NOTE })])] },
    operations_support: { blocks: [block(RIGHT_LABEL_X, 862, [line('Operations', 31, { weight: 800 }), line('& support', 31, { weight: 800 }), line('($80M)', 31), line('13% of revenue', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 6 })] },
    general_admin: { blocks: [block(RIGHT_LABEL_X, 1077, [line('General & admin', 31, { weight: 800 }), line('($76M)', 31), line('12% of revenue', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])] },
    tech_development: { blocks: [block(RIGHT_LABEL_X, 1243, [line('Tech & Development', 31, { weight: 800 }), line('($41M)', 31), line('7% of revenue', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])] },
  };

  const zhLabels = {
    online_revenue: {
      blocks: [
        block(388, 470, [line('$value', 39), line('同比 +29%', 29, { color: NOTE })]),
        block(184, 636, [line('线上收入', 40, { weight: 800 })]),
      ],
    },
    wholesale_revenue: {
      blocks: [
        block(388, 1035, [line('$value', 39), line('同比 (16%)', 29, { color: NOTE })]),
        block(184, 1092, [line('批发收入', 40, { weight: 800 })]),
      ],
    },
    revenue: { blocks: [block(855, 512, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +28%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1322, 374, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 72%', 29, { color: NOTE }), line('同比 (5 个百分点)', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1322, 1148, [line('收入', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1790, 301, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 1%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1790, 947, [line('运营费用', 40, { weight: 800 }), line('$value', 39)])] },
    other_income: { blocks: [block(2087, 506, [line('其他', 31, { weight: 800 }), line('$value', 31)])] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 338, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 3%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })])] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 701, [line('营销 ($238M)', 31, { weight: 800 }), line('占收入 39%', 29, { color: NOTE }), line('同比 (7 个百分点)', 29, { color: NOTE })])] },
    operations_support: { blocks: [block(RIGHT_LABEL_X, 881, [line('运营与支持', 31, { weight: 800 }), line('($80M)', 31), line('占收入 13%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(RIGHT_LABEL_X, 1087, [line('一般及行政 ($76M)', 31, { weight: 800 }), line('占收入 12%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })])] },
    tech_development: { blocks: [block(RIGHT_LABEL_X, 1253, [line('技术与开发 ($41M)', 31, { weight: 800 }), line('占收入 7%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hims-hers-q4-fy25',
    name: 'Hims & Hers · Q4 FY25',
    company: 'Hims & Hers',
    meta: {
      company: 'Hims & Hers',
      title: 'Hims & Hers Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/hims-hers-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2495,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 700,
      logoHeight: 145,
      logoY: 270,
      logoViewBox: '0 0 700 145',
      logoSvg: himsHersLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE, label: '#000000' },
        hub: { node: SOURCE, label: '#000000' },
        profit: { node: PROFIT, label: PROFIT_LABEL },
        cost: { node: COST, label: COST_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: PROFIT_LINK, cost: COST_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'hims-hers-online-revenue-hims-card-q4-fy25', href: 'data/assets/raster-annotations/hims-hers/online-revenue-hims-card-q4-fy25.png', x: 40, y: 738, width: 143, height: 142 },
      { key: 'hims-hers-online-revenue-hers-card-q4-fy25', href: 'data/assets/raster-annotations/hims-hers/online-revenue-hers-card-q4-fy25.png', x: 188, y: 738, width: 143, height: 142 },
    ],
    layout: {
      scale: 0.61,
      nodes: {
        online_revenue: { x: 351, y: 563, width: 74, height: 373 },
        wholesale_revenue: { x: 351, y: 1130, width: 74, height: 7 },
        revenue: { x: 819, y: 655, width: 72, height: 377 },
        gross_profit: { x: 1286, y: 558, width: 72, height: 271 },
        cost_of_revenue: { x: 1286, y: 1025, width: 72, height: 107 },
        operating_profit: { x: 1754, y: 483, width: 72, height: 6 },
        operating_expenses: { x: 1754, y: 651, width: 72, height: 265 },
        other_income: { x: 2051, y: 476, width: 72, height: 7 },
        net_profit: { x: 2220, y: 384, width: 72, height: 13 },
        marketing: { x: 2220, y: 686, width: 72, height: 145 },
        operations_support: { x: 2220, y: 950, width: 72, height: 49 },
        general_admin: { x: 2220, y: 1111, width: 72, height: 46 },
        tech_development: { x: 2220, y: 1283, width: 72, height: 25 },
      },
      labels,
    },
    nodes: [
      { id: 'online_revenue', col: 0, order: 0, type: 'source', label: ['Online', 'Revenue'], value: 609, notes: ['+29% Y/Y'], color: SOURCE, labelColor: '#000000', linkTint: SOURCE_LINK },
      { id: 'wholesale_revenue', col: 0, order: 1, type: 'source', label: ['Wholesale', 'Revenue'], value: 9, notes: ['(16%) Y/Y'], color: SOURCE, labelColor: '#000000', linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 618, notes: ['+28% Y/Y'], color: SOURCE, labelColor: '#000000', linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 444, notes: ['72% margin', '(5pp) Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 173, color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 9, notes: ['1% margin', '(2pp) Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 435, color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 11, color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 21, notes: ['3% margin', '(2pp) Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'marketing', col: 5, order: 1, type: 'cost', label: 'Marketing', value: 238, notes: ['39% of revenue', '(7pp) Y/Y'], color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'operations_support', col: 5, order: 2, type: 'cost', label: ['Operations', '& support'], value: 80, notes: ['13% of revenue', '+1pp Y/Y'], color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'general_admin', col: 5, order: 3, type: 'cost', label: 'General & admin', value: 76, notes: ['12% of revenue', '+2pp Y/Y'], color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'tech_development', col: 5, order: 4, type: 'cost', label: 'Tech & Development', value: 41, notes: ['7% of revenue', '+2pp Y/Y'], color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
    ],
    links: [
      { source: 'online_revenue', target: 'revenue', value: 609, sourceWidth: 373, targetWidth: 371, y0: 749.5, y1: 840.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'wholesale_revenue', target: 'revenue', value: 9, sourceWidth: 7, targetWidth: 6, y0: 1133.5, y1: 1029, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 444, sourceWidth: 272, targetWidth: 271, y0: 791, y1: 693.5, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 173, sourceWidth: 105, targetWidth: 107, y0: 979.5, y1: 1078.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 9, sourceWidth: 6, targetWidth: 6, y0: 561, y1: 486, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 435, sourceWidth: 265, targetWidth: 265, y0: 696.5, y1: 783.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 9, sourceWidth: 6, targetWidth: 6, y0: 486, y1: 387, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'other_income', target: 'net_profit', value: 11, sourceWidth: 7, targetWidth: 7, y0: 479.5, y1: 393.5, sourceOrder: 0, targetOrder: 1, linkTint: PROFIT_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 238, sourceWidth: 145, targetWidth: 145, y0: 723.5, y1: 758.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations_support', value: 80, sourceWidth: 49, targetWidth: 49, y0: 820.5, y1: 974.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_admin', value: 76, sourceWidth: 46, targetWidth: 46, y0: 868, y1: 1134, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'tech_development', value: 41, sourceWidth: 25, targetWidth: 25, y0: 903.5, y1: 1295.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Hims & Hers · 2025 财年第四季度',
        meta: {
          title: 'Hims & Hers 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleSize: 108,
          titleTextLength: 1775,
        },
        annotationsSvg: annotations(true),
        nodes: {
          online_revenue: { label: '线上收入', notes: ['同比 +29%'] },
          wholesale_revenue: { label: '批发收入', notes: ['同比 (16%)'] },
          revenue: { label: '收入', notes: ['同比 +28%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 (5 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (2 个百分点)'] },
          marketing: { label: '营销', notes: ['占收入 39%', '同比 (7 个百分点)'] },
          operations_support: { label: '运营与支持', notes: ['占收入 13%', '同比 +1 个百分点'] },
          general_admin: { label: '一般及行政', notes: ['占收入 12%', '同比 +2 个百分点'] },
          tech_development: { label: '技术与开发', notes: ['占收入 7%', '同比 +2 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

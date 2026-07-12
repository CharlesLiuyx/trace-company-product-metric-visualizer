/* Home Depot Q1 FY26 income statement ($B), reconstructed from the processed
 * reference as a fixed d3-Sankey view. Financial SSOT: home-depot.js. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#15527a';
  const NOTE = '#696969';
  const ORANGE = '#f47720';
  const ORANGE_LINK = '#f1b58d';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00964d';
  const GREEN_LINK = '#9ccd9a';
  const RED = '#d60000';
  const RED_LABEL = '#9d1808';
  const RED_LINK = '#df8284';
  const RIGHT_LABEL_X = 2500;

  const line = (text, size, options = {}) => ({ text, size, ...options });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1212" width="${width}" height="148" rx="27" fill="${ORANGE}"/>
      ${lines.map((item, index) => `<text x="${x + width / 2}" y="${1253 + index * 32}" text-anchor="middle"
        font-size="${item.size || (index === lines.length - 1 ? 23 : 29)}" font-weight="${item.weight || (index === lines.length - 1 ? 500 : 800)}" fill="#ffffff">${item.text}</text>`).join('')}
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(33, 274, isZh
        ? [{ text: '同店销售' }, { text: '同比 +0.9%', size: 23, weight: 500 }]
        : [{ text: 'Comparable sales' }, { text: '+0.9% Y/Y', size: 23, weight: 500 }])}
      ${kpiCard(319, 274, isZh
        ? [{ text: '客户交易' }, { text: '同比 (0.8%)', size: 23, weight: 500 }]
        : [{ text: 'Customer' }, { text: 'transactions' }, { text: '(0.8%) Y/Y', size: 23, weight: 500 }])}
      ${kpiCard(605, 274, isZh
        ? [{ text: '平均客单价' }, { text: '同比 +2.3%', size: 23, weight: 500 }]
        : [{ text: 'Average ticket' }, { text: '+2.3% Y/Y', size: 23, weight: 500 }])}
    </g>`;

  const labels = {
    building_materials: {
      blocks: [
        block(464, 315, [line('$value', 40, { color: ORANGE }), line('(0%) Y/Y', 29, { color: NOTE })]),
        block(213, 442, [line('Building Materials', 40, { weight: 800, color: ORANGE })]),
        block(213, 503, [line('Electrical/Lighting, Lumber,', 28, { color: NOTE }), line('Millwork, and Plumbing', 28, { color: NOTE })]),
      ],
    },
    decor: {
      blocks: [
        block(464, 582, [line('$value', 40, { color: ORANGE }), line('+1% Y/Y', 29, { color: NOTE })]),
        block(213, 722, [line('Décor', 40, { weight: 800, color: ORANGE })]),
        block(213, 776, [line('Appliances, Storage, Flooring,', 28, { color: NOTE }), line('Kitchen and Bath, and Paint', 28, { color: NOTE })]),
      ],
    },
    hardlines: {
      blocks: [
        block(464, 835, [line('$value', 40, { color: ORANGE }), line('+3% Y/Y', 29, { color: NOTE })]),
        block(213, 962, [line('Hardlines', 40, { weight: 800, color: ORANGE })]),
        block(213, 1013, [line('Hardware, Indoor Garden,', 28, { color: NOTE }), line('Outdoor Garden, and Tools', 28, { color: NOTE })]),
      ],
    },
    other: {
      blocks: [
        block(464, 1072, [line('$value', 40, { color: ORANGE }), line('+56% Y/Y', 29, { color: NOTE })]),
        block(213, 1165, [line('Other', 40, { weight: 800, color: ORANGE })]),
      ],
    },
    revenue: { blocks: [block(932, 525, [line('Net Sales', 40, { weight: 800, color: ORANGE }), line('$value', 40, { color: ORANGE }), line('+5% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1400, 380, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('33% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1400, 1196, [line('Cost of sales', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 11 })] },
    operating_profit: { blocks: [block(1865, 249, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('12% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1865, 846, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 249, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('8% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 513, [line('Tax', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    interest: { blocks: [block(RIGHT_LABEL_X, 627, [line('Interest', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    sga: { blocks: [block(RIGHT_LABEL_X, 875, [line('SG&A', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    da: { blocks: [block(RIGHT_LABEL_X, 1069, [line('Depreciation &', 34, { weight: 800, color: RED_LABEL }), line('amortization', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
  };

  const zhLabels = {
    building_materials: {
      blocks: [
        block(464, 315, [line('$value', 40, { color: ORANGE }), line('同比 (0%)', 29, { color: NOTE })]),
        block(213, 442, [line('建筑材料', 40, { weight: 800, color: ORANGE })]),
        block(213, 503, [line('电气／照明、木材、', 28, { color: NOTE }), line('木制品和管道', 28, { color: NOTE })]),
      ],
    },
    decor: {
      blocks: [
        block(464, 582, [line('$value', 40, { color: ORANGE }), line('同比 +1%', 29, { color: NOTE })]),
        block(213, 722, [line('家居装饰', 40, { weight: 800, color: ORANGE })]),
        block(213, 776, [line('电器、收纳、地板、', 28, { color: NOTE }), line('厨房与卫浴及涂料', 28, { color: NOTE })]),
      ],
    },
    hardlines: {
      blocks: [
        block(464, 835, [line('$value', 40, { color: ORANGE }), line('同比 +3%', 29, { color: NOTE })]),
        block(213, 962, [line('五金硬货', 40, { weight: 800, color: ORANGE })]),
        block(213, 1013, [line('五金、室内园艺、', 28, { color: NOTE }), line('户外园艺和工具', 28, { color: NOTE })]),
      ],
    },
    other: {
      blocks: [
        block(464, 1072, [line('$value', 40, { color: ORANGE }), line('同比 +56%', 29, { color: NOTE })]),
        block(213, 1165, [line('其他', 40, { weight: 800, color: ORANGE })]),
      ],
    },
    revenue: { blocks: [block(932, 525, [line('净销售额', 40, { weight: 800, color: ORANGE }), line('$value', 40, { color: ORANGE }), line('同比 +5%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1400, 380, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 33%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1400, 1196, [line('销售成本', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 11 })] },
    operating_profit: { blocks: [block(1865, 249, [line('营业利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 12%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1865, 846, [line('运营费用', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 249, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 8%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 513, [line('税费', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    interest: { blocks: [block(RIGHT_LABEL_X, 627, [line('利息', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    sga: { blocks: [block(RIGHT_LABEL_X, 875, [line('销售、一般及', 31, { weight: 800, color: RED_LABEL }), line('行政费用', 31, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    da: { blocks: [block(RIGHT_LABEL_X, 1069, [line('折旧及摊销', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'home-depot-q1-fy26',
    name: 'Home Depot · Q1 FY26',
    company: 'Home Depot',
    meta: {
      company: 'Home Depot',
      title: 'Home Depot Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Three months ended May 3, 2026',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/home-depot-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2525,
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
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'home-depot-company-logo', href: 'data/assets/raster-annotations/home-depot/company-logo-q1-fy26.png', x: 806, y: 246, width: 244, height: 244 },
      { key: 'home-depot-building-materials-icons', href: 'data/assets/raster-annotations/home-depot/building-materials-icons-q1-fy26.png', x: 44, y: 320, width: 365, height: 120 },
      { key: 'home-depot-decor-icons', href: 'data/assets/raster-annotations/home-depot/decor-icons-q1-fy26.png', x: 84, y: 600, width: 304, height: 102 },
      { key: 'home-depot-hardlines-icons', href: 'data/assets/raster-annotations/home-depot/hardlines-icons-q1-fy26.png', x: 120, y: 850, width: 258, height: 103 },
      { key: 'home-depot-other-distributor-logos', href: 'data/assets/raster-annotations/home-depot/other-distributor-logos-q1-fy26.png', x: 144, y: 1082, width: 205, height: 76 },
    ],
    layout: {
      scale: 9.5,
      nodes: {
        building_materials: { x: 428, y: 403, width: 72, height: 124 },
        decor: { x: 428, y: 669, width: 72, height: 121 },
        hardlines: { x: 428, y: 926, width: 72, height: 115 },
        other: { x: 428, y: 1160, width: 72, height: 39 },
        revenue: { x: 896, y: 666, width: 72, height: 397 },
        gross_profit: { x: 1364, y: 560, width: 72, height: 131 },
        cost_of_sales: { x: 1364, y: 906, width: 72, height: 266 },
        operating_profit: { x: 1829, y: 428, width: 72, height: 47 },
        operating_expenses: { x: 1829, y: 739, width: 72, height: 84 },
        net_profit: { x: 2299, y: 292, width: 72, height: 31 },
        tax: { x: 2299, y: 538, width: 72, height: 11 },
        interest: { x: 2299, y: 657, width: 72, height: 6 },
        sga: { x: 2299, y: 871, width: 72, height: 76 },
        da: { x: 2299, y: 1118, width: 72, height: 8 },
      },
      labels,
    },
    nodes: [
      { id: 'building_materials', col: 0, order: 0, type: 'source', label: 'Building Materials', value: 13.0, notes: ['(0%) Y/Y', 'Electrical/Lighting, Lumber, Millwork, and Plumbing'] },
      { id: 'decor', col: 0, order: 1, type: 'source', label: 'Décor', value: 12.6, notes: ['+1% Y/Y', 'Appliances, Storage, Flooring, Kitchen and Bath, and Paint'] },
      { id: 'hardlines', col: 0, order: 2, type: 'source', label: 'Hardlines', value: 12.2, notes: ['+3% Y/Y', 'Hardware, Indoor Garden, Outdoor Garden, and Tools'] },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 4.0, notes: ['+56% Y/Y', 'SRS Distribution and GMS'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net Sales', value: 41.8, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 13.8, notes: ['33% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 28.0 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 5.0, notes: ['12% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 8.8 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.3, notes: ['8% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.1 },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.6 },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 8.0 },
      { id: 'da', col: 4, order: 4, type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.8 },
    ],
    links: [
      { source: 'building_materials', target: 'revenue', value: 13.0, sourceWidth: 124, targetWidth: 124, y0: 465, y1: 728, sourceOrder: 0, targetOrder: 0 },
      { source: 'decor', target: 'revenue', value: 12.6, sourceWidth: 121, targetWidth: 121, y0: 729.5, y1: 850.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'hardlines', target: 'revenue', value: 12.2, sourceWidth: 115, targetWidth: 115, y0: 983.5, y1: 968.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 4.0, sourceWidth: 39, targetWidth: 39, y0: 1179.5, y1: 1045.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 13.8, sourceWidth: 131, targetWidth: 131, y0: 731.5, y1: 625.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 28.0, sourceWidth: 266, targetWidth: 266, y0: 929.5, y1: 1039, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 5.0, sourceWidth: 47, targetWidth: 47, y0: 583.5, y1: 451.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.8, sourceWidth: 84, targetWidth: 84, y0: 649, y1: 781, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.3, sourceWidth: 31, targetWidth: 31, y0: 443.5, y1: 307.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.1, sourceWidth: 11, targetWidth: 11, y0: 464.5, y1: 543.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.6, sourceWidth: 6, targetWidth: 6, y0: 472, y1: 660, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 8.0, sourceWidth: 76, targetWidth: 76, y0: 777, y1: 909, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.8, sourceWidth: 8, targetWidth: 8, y0: 819, y1: 1122, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '家得宝 · 2026 财年第一季度',
        meta: {
          title: '家得宝 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 5 月 3 日的三个月',
          titleTextLength: 1760,
        },
        annotationsSvg: annotations(true),
        nodes: {
          building_materials: { label: '建筑材料', notes: ['同比 (0%)', '电气／照明、木材、木制品和管道'] },
          decor: { label: '家居装饰', notes: ['同比 +1%', '电器、收纳、地板、厨房与卫浴及涂料'] },
          hardlines: { label: '五金硬货', notes: ['同比 +3%', '五金、室内园艺、户外园艺和工具'] },
          other: { label: '其他', notes: ['同比 +56%', 'SRS Distribution 和 GMS'] },
          revenue: { label: '净销售额', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          sga: { label: '销售、一般及行政费用' },
          da: { label: '折旧及摊销' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* Coupang Q3 FY25 income statement ($B), measured from the active Build reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BROWN = '#894f24';
  const BROWN_LINK = '#c2a995';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

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
    lineGap: options.lineGap || 9,
    lines,
  });

  const coupangLogo = `
    <g transform="translate(-75 0) scale(1.1 1.2)" font-family="Montserrat,Arial,sans-serif" font-size="126" font-weight="700">
      <text x="0" y="116" fill="#894f24">cou</text>
      <text x="208" y="116" fill="#e94b22">p</text>
      <text x="276" y="116" fill="#fac000">a</text>
      <text x="344" y="116" fill="#80bc27">n</text>
      <text x="421" y="116" fill="#3dacdc">g</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif" fill="#ffffff">
      <rect x="64" y="1249" width="736" height="111" rx="30" fill="${BROWN}"/>
      <text x="95" y="1294" font-size="29"><tspan font-weight="800">${isZh ? '活跃客户' : 'Active Customers'}</tspan><tspan> 24.7M ${isZh ? '（同比 +10%）' : '(+10% Y/Y)'}</tspan></text>
      <text x="95" y="1337" font-size="29"><tspan font-weight="800">${isZh ? '每位活跃客户收入' : 'Revenue per Active Customers'}</tspan><tspan> $323 ${isZh ? '（同比 +5%）' : '(+5% Y/Y)'}</tspan></text>
    </g>
    <g class="sankey-interactive-annotation" data-node="product_commerce"
      font-family="Noto Sans,Arial,sans-serif" text-anchor="middle">
      <text x="477" y="475" font-size="40" fill="${BROWN}">$8.0B</text>
      <text x="477" y="516" font-size="27" fill="${NOTE}">${isZh ? '同比 +16%' : '+16% Y/Y'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="developing_offerings"
      font-family="Noto Sans,Arial,sans-serif" text-anchor="middle">
      <text x="477" y="1029" font-size="40" fill="${BROWN}">$1.3B</text>
      <text x="477" y="1070" font-size="27" fill="${NOTE}">${isZh ? '同比 +32%' : '+32% Y/Y'}</text>
    </g>`;

  const labels = (isZh) => ({
    product_commerce: {
      blocks: [
        block(251, 560, [
          line(isZh ? '产品' : 'Product', 40, { weight: 800 }),
          line(isZh ? '商业' : 'Commerce', 40, { weight: 800 }),
          line(isZh ? '调整后利润率 9%' : '9% adjusted margin', 28, { color: NOTE }),
          line(isZh ? '同比 +2 个百分点' : '+2pp Y/Y', 28, { color: NOTE }),
        ], { lineGap: 8 }),
        block(251, 768, [
          line(isZh ? '核心零售' : 'Core retail', 28, { color: NOTE }),
          line(isZh ? '平台业务' : 'Marketplace', 28, { color: NOTE }),
          line(isZh ? '火箭生鲜' : 'Rocket Fresh', 28, { color: NOTE }),
        ], { lineGap: 8 }),
      ],
    },
    developing_offerings: {
      blocks: [
        block(252, 1067, [
          line(isZh ? '培育中' : 'Developing', 40, { weight: 800 }),
          line(isZh ? '业务' : 'Offerings', 40, { weight: 800 }),
          line(isZh ? '调整后利润率 (23%)' : '(23%) adjusted margin', 28, { color: NOTE }),
          line(isZh ? '同比 +10 个百分点' : '+10pp Y/Y', 28, { color: NOTE }),
        ], { lineGap: 8 }),
      ],
    },
    revenue: {
      blocks: [block(944, 498, [
        line(isZh ? '收入' : 'Revenue', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '同比 +18%' : '+18% Y/Y', 28, { color: NOTE }),
        line(isZh ? '按固定汇率同比 +20%' : '+20% Y/Y fxn', 28, { color: NOTE }),
      ])],
    },
    gross_profit: {
      blocks: [block(1410, 360, [
        line(isZh ? '毛利润' : 'Gross profit', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '利润率 29%' : '29% margin', 28, { color: NOTE }),
        line(isZh ? '同比 +1 个百分点' : '+1pp Y/Y', 28, { color: NOTE }),
      ])],
    },
    cost_of_revenue: {
      blocks: [block(1410, 1168, [
        line(isZh ? '收入' : 'Cost of', 35, { weight: 800 }),
        line(isZh ? '成本' : 'revenue', 35, { weight: 800 }),
        line('$value', 35),
      ], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [block(1878, 281, [
        line(isZh ? '营业利润' : 'Operating profit', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '利润率 2%' : '2% margin', 28, { color: NOTE }),
        line(isZh ? '同比 0 个百分点' : '+0pp Y/Y', 28, { color: NOTE }),
      ])],
    },
    operating_expenses: {
      blocks: [block(1878, 799, [
        line(isZh ? '运营' : 'Operating', 40, { weight: 800 }),
        line(isZh ? '费用' : 'expenses', 40, { weight: 800 }),
        line('$value', 39),
      ], { lineGap: 8 })],
    },
    other: {
      blocks: [block(2219, 472, [
        line(isZh ? '其他' : 'Other', 39, { weight: 800 }),
        line('$value', 39),
      ], { lineGap: 8 })],
    },
    net_profit: {
      blocks: [block(2509, 327, [
        line(isZh ? '净利润' : 'Net profit', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '利润率 1%' : '1% margin', 28, { color: NOTE }),
        line(isZh ? '同比 0 个百分点' : '+0pp Y/Y', 28, { color: NOTE }),
      ])],
    },
    tax: {
      blocks: [block(2509, 567, [
        line(isZh ? '税项' : 'Tax', 39, { weight: 800 }),
        line('$value', 39),
      ], { lineGap: 8 })],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coupang-q3-fy25',
    name: 'Coupang · Q3 FY25',
    company: 'Coupang',
    meta: {
      company: 'Coupang',
      title: 'Coupang Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coupang-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      hidePeriodStamp: true,
      logoWidth: 580,
      logoHeight: 142,
      logoY: 206,
      logoViewBox: '0 0 580 142',
      logoSvg: coupangLogo,
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
        source: { node: BROWN, label: BROWN },
        hub: { node: BROWN, label: BROWN },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BROWN_LINK, hub: BROWN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      {
        key: 'coupang-developing-offerings-brands',
        href: 'data/assets/raster-annotations/coupang/developing-offerings-brands.png',
        x: 132,
        y: 963,
        width: 272,
        height: 96,
      },
    ],
    layout: {
      scale: 40,
      nodes: {
        product_commerce: { x: 441, y: 539, width: 71, height: 323 },
        developing_offerings: { x: 441, y: 1089, width: 71, height: 52 },
        revenue: { x: 908, y: 678, width: 70, height: 376 },
        gross_profit: { x: 1375, y: 542, width: 71, height: 108 },
        cost_of_revenue: { x: 1375, y: 878, width: 71, height: 265 },
        operating_profit: { x: 1843, y: 465, width: 70, height: 4 },
        operating_expenses: { x: 1843, y: 674, width: 70, height: 103 },
        other: { x: 2183, y: 453, width: 72, height: 4 },
        net_profit: { x: 2309, y: 390, width: 71, height: 4 },
        tax: { x: 2309, y: 603, width: 71, height: 4 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'product_commerce', col: 0, order: 0, type: 'source', label: ['Product', 'Commerce'], value: 8.0, valueText: '$8.0B', notes: ['+16% Y/Y', '9% adjusted margin', '+2pp Y/Y', 'Core retail', 'Marketplace', 'Rocket Fresh'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'developing_offerings', col: 0, order: 1, type: 'source', label: ['Developing', 'Offerings'], value: 1.3, notes: ['+32% Y/Y', '(23%) adjusted margin', '+10pp Y/Y'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 9.3, notes: ['+18% Y/Y', '+20% Y/Y fxn'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.7, notes: ['29% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.162, valueText: '$162M', notes: ['2% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.003, valueText: '$3M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.095, valueText: '$95M', notes: ['1% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.070, valueText: '($70M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'product_commerce', target: 'revenue', value: 8.0, sourceWidth: 323, targetWidth: 323, y0: 700.5, y1: 839.5, linkTint: BROWN_LINK },
      { source: 'developing_offerings', target: 'revenue', value: 1.3, sourceWidth: 52, targetWidth: 52, y0: 1115, y1: 1028, linkTint: BROWN_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.7, sourceWidth: 111, targetWidth: 108, y0: 733.5, y1: 596, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.5, sourceWidth: 265, targetWidth: 265, y0: 921.5, y1: 1010.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.162, sourceWidth: 4, targetWidth: 4, y0: 544, y1: 467, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.6, sourceWidth: 103, targetWidth: 103, y0: 598.5, y1: 725.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.092, sourceWidth: 2, targetWidth: 3, y0: 466, y1: 391.5, linkTint: GREEN_LINK, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.070, sourceWidth: 2, targetWidth: 4, y0: 468, y1: 605, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.003, sourceWidth: 4, targetWidth: 1, y0: 455, y1: 393.5, linkTint: GREEN_LINK, targetOrder: 1, curve: { c1x: 2272, c1y: 455, c2x: 2288, c2y: 393.5 } },
    ],
    i18n: {
      zh: {
        name: '酷澎 · 2025 财年第三季度',
        meta: {
          title: '酷澎 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1540,
        },
        annotationsSvg: annotations(true),
        nodes: {
          product_commerce: { label: ['产品', '商业'], notes: ['同比 +16%', '调整后利润率 9%', '同比 +2 个百分点', '核心零售', '平台业务', '火箭生鲜'] },
          developing_offerings: { label: ['培育中', '业务'], notes: ['同比 +32%', '调整后利润率 (23%)', '同比 +10 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +18%', '按固定汇率同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 1%', '同比 0 个百分点'] },
          tax: { label: '税项' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

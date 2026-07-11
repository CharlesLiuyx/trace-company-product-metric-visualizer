/* Coupang Q4 FY25 income statement ($B), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#185279';
  const NOTE = '#666666';
  const BROWN = '#925721';
  const BROWN_LINK = '#c2a993';
  const GREEN = '#2ca324';
  const GREEN_LABEL = '#008e4c';
  const GREEN_LINK = '#99cc98';
  const RED = '#dc0000';
  const RED_LABEL = '#9f1000';
  const RED_LINK = '#dd8585';
  const NET_LOSS_GUIDE = '#c55959';

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
      <text x="0" y="116" fill="#965921">cou</text>
      <text x="208" y="116" fill="#f14922">p</text>
      <text x="276" y="116" fill="#ffc400">a</text>
      <text x="344" y="116" fill="#83bf25">n</text>
      <text x="421" y="116" fill="#43a5d7">g</text>
    </g>`;

  const kpiCard = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif" fill="#ffffff">
      <rect x="64" y="1249" width="736" height="111" rx="30" fill="${BROWN}"/>
      <text x="95" y="1294" font-size="29"><tspan font-weight="800">${isZh ? '活跃客户' : 'Active Customers'}</tspan><tspan> 24.6M ${isZh ? '（同比 +8%）' : '(+8% Y/Y)'}</tspan></text>
      <text x="95" y="1337" font-size="29"><tspan font-weight="800">${isZh ? '每位活跃客户收入' : 'Revenue per Active Customers'}</tspan><tspan> $301 ${isZh ? '（同比持平）' : '(Flat Y/Y)'}</tspan></text>
    </g>`;

  const annotations = (isZh) => `
    ${kpiCard(isZh)}
    <g class="sankey-interactive-annotation" data-node="net_loss"
      data-link-numerator="other" data-link-denominator="net_loss"
      data-link-anchor-x="2215" data-link-anchor-y="578"
      font-family="Montserrat,Arial,sans-serif" fill="${RED_LABEL}">
      <path d="M2310,532.5 C2294,533 2276,560 2256,578" fill="none" stroke="${RED_LINK}" stroke-width="2" stroke-linecap="butt"/>
      <line x1="2173" y1="578" x2="2256" y2="578" stroke="${NET_LOSS_GUIDE}" stroke-width="2" stroke-linecap="butt"/>
      <rect x="2167" y="526" width="221" height="167" fill="#ffffff" fill-opacity="0" pointer-events="all"/>
      <text x="2218" y="634" text-anchor="middle" font-size="40" font-weight="800">${isZh ? '净亏损' : 'Net loss'}</text>
      <text x="2218" y="680" text-anchor="middle" font-size="39">($26M)</text>
    </g>`;

  const labels = (isZh) => ({
    product_commerce: {
      blocks: [
        block(476, 442, [line('$value', 40), line(isZh ? '同比 +8%' : '+8% Y/Y', 27, { color: NOTE })]),
        block(251, 559, [
          line(isZh ? '产品' : 'Product', 40, { weight: 800 }),
          line(isZh ? '商业' : 'Commerce', 40, { weight: 800 }),
          line(isZh ? '调整后利润率 8%' : '8% adjusted margin', 28, { color: NOTE }),
          line(isZh ? '同比 0 个百分点' : '(0pp) Y/Y', 28, { color: NOTE }),
        ], { lineGap: 8 }),
        block(251, 767, [
          line(isZh ? '核心零售' : 'Core retail', 28, { color: NOTE }),
          line(isZh ? '平台业务' : 'Marketplace', 28, { color: NOTE }),
          line(isZh ? '火箭生鲜' : 'Rocket Fresh', 28, { color: NOTE }),
        ], { lineGap: 8 }),
      ],
    },
    developing_offerings: {
      blocks: [
        block(476, 954, [line('$value', 40), line(isZh ? '同比 +32%' : '+32% Y/Y', 27, { color: NOTE })]),
        block(252, 1044, [
          line(isZh ? '培育中' : 'Developing', 40, { weight: 800 }),
          line(isZh ? '业务' : 'Offerings', 40, { weight: 800 }),
          line(isZh ? '调整后利润率 (21%)' : '(21%) adjusted margin', 28, { color: NOTE }),
          line(isZh ? '同比 (10 个百分点)' : '(10pp) Y/Y', 28, { color: NOTE }),
        ], { lineGap: 8 }),
      ],
    },
    revenue: {
      blocks: [block(944, 481, [
        line(isZh ? '收入' : 'Revenue', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '同比 +11%' : '+11% Y/Y', 28, { color: NOTE }),
        line(isZh ? '按固定汇率同比 +14%' : '+14% Y/Y fxn', 28, { color: NOTE }),
      ])],
    },
    gross_profit: {
      blocks: [block(1410, 351, [
        line(isZh ? '毛利润' : 'Gross profit', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '利润率 29%' : '29% margin', 28, { color: NOTE }),
        line(isZh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, { color: NOTE }),
      ])],
    },
    cost_of_revenue: {
      blocks: [block(1410, 1126, [
        line(isZh ? '收入' : 'Cost of', 35, { weight: 800 }),
        line(isZh ? '成本' : 'revenue', 35, { weight: 800 }),
        line('$value', 35),
      ], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [block(1877, 257, [
        line(isZh ? '营业利润' : 'Operating profit', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '利润率 0%' : '0% margin', 28, { color: NOTE }),
        line(isZh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 28, { color: NOTE }),
      ])],
    },
    operating_expenses: {
      blocks: [block(1877, 756, [
        line(isZh ? '运营' : 'Operating', 40, { weight: 800 }),
        line(isZh ? '费用' : 'expenses', 40, { weight: 800 }),
        line('$value', 39),
      ], { lineGap: 8 })],
    },
    net_loss: { blocks: [] },
    other: {
      blocks: [block(2438, 494, [
        line(isZh ? '其他' : 'Other', 39, { weight: 800 }),
        line('$value', 39),
      ], { anchor: 'start', lineGap: 8 })],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coupang-q4-fy25',
    name: 'Coupang · Q4 FY25',
    company: 'Coupang',
    meta: {
      company: 'Coupang',
      title: 'Coupang Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coupang-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 580,
      logoHeight: 142,
      logoY: 215,
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
        y: 941,
        width: 272,
        height: 96,
      },
    ],
    layout: {
      scale: 40,
      nodes: {
        product_commerce: { x: 440, y: 533, width: 73, height: 296 },
        developing_offerings: { x: 440, y: 1044, width: 73, height: 59 },
        revenue: { x: 907, y: 658, width: 73, height: 352 },
        gross_profit: { x: 1374, y: 530, width: 72, height: 101 },
        cost_of_revenue: { x: 1374, y: 853, width: 72, height: 250 },
        operating_profit: { x: 1841, y: 439, width: 72, height: 4 },
        operating_expenses: { x: 1841, y: 628, width: 72, height: 100 },
        other: { x: 2310, y: 531, width: 72, height: 3 },
        net_loss: { x: 2256, y: 577, width: 1, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'product_commerce', col: 0, order: 0, type: 'source', label: ['Product', 'Commerce'], value: 7.4, notes: ['+8% Y/Y', '8% adjusted margin', '(0pp) Y/Y', 'Core retail', 'Marketplace', 'Rocket Fresh'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'developing_offerings', col: 0, order: 1, type: 'source', label: ['Developing', 'Offerings'], value: 1.4, notes: ['+32% Y/Y', '(21%) adjusted margin', '(10pp) Y/Y'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.8, notes: ['+11% Y/Y', '+14% Y/Y fxn'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.5, notes: ['29% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.008, valueText: '$8M', notes: ['0% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'cost', label: 'Other', value: -0.034, valueText: '($34M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 4, order: 1, type: 'cost', label: 'Net loss', value: -0.026, valueText: '($26M)', color: BG, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'product_commerce', target: 'revenue', value: 7.4, sourceWidth: 296, targetWidth: 296, y0: 681, y1: 806, linkTint: BROWN_LINK },
      { source: 'developing_offerings', target: 'revenue', value: 1.4, sourceWidth: 59, targetWidth: 56, y0: 1073.5, y1: 982, linkTint: BROWN_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.5, sourceWidth: 101, targetWidth: 101, y0: 708.5, y1: 580.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.3, sourceWidth: 250, targetWidth: 250, y0: 884, y1: 978, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.008, sourceWidth: 4, targetWidth: 4, y0: 532, y1: 441, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.5, sourceWidth: 100, targetWidth: 100, y0: 581, y1: 678, linkTint: RED_LINK },
      // This is a semantic bridge: every hover surface compares its endpoint bars.
      { source: 'operating_profit', target: 'other', value: 0.034, sourceWidth: 4, targetWidth: 3, y0: 441, y1: 532.5, linkTint: RED_LINK, curve: { c1x: 2070, c1y: 441, c2x: 2200, c2y: 532.5 } },
      { source: 'other', target: 'net_loss', value: 0.034, sourceWidth: 0, targetWidth: 0, y0: 532.5, y1: 578, interactionOnly: true, curve: { x0: 2310, x1: 2256, c1x: 2294, c1y: 533, c2x: 2276, c2y: 560 } },
    ],
    i18n: {
      zh: {
        name: '酷澎 · 2025 财年第四季度',
        meta: {
          title: '酷澎 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1540,
        },
        annotationsSvg: annotations(true),
        nodes: {
          product_commerce: { label: ['产品', '商业'], notes: ['同比 +8%', '调整后利润率 8%', '同比 0 个百分点', '核心零售', '平台业务', '火箭生鲜'] },
          developing_offerings: { label: ['培育中', '业务'], notes: ['同比 +32%', '调整后利润率 (21%)', '同比 (10 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +11%', '按固定汇率同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 29%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 0%', '同比 (4 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_loss: { label: '净亏损' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

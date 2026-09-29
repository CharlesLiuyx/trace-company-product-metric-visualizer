/* Coupang Q2 FY26 income statement ($B), measured from the active Build reference. */
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
    semanticRole: options.semanticRole || '',
    lineGap: options.lineGap || 9,
    lines,
  });

  // The source locks the wordmark to the left of the wider Q1 hub column.
  const coupangLogo = `
    <g transform="translate(-235 0) scale(1.1 1.2)" font-family="Montserrat,Arial,sans-serif" font-size="126" font-weight="700">
      <text x="0" y="116" fill="#894f24">cou</text>
      <text x="208" y="116" fill="#e94b22">p</text>
      <text x="276" y="116" fill="#fac000">a</text>
      <text x="344" y="116" fill="#80bc27">n</text>
      <text x="421" y="116" fill="#3dacdc">g</text>
    </g>`;

  const kpiCard = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif" fill="#ffffff">
      <rect x="64" y="1249" width="736" height="111" rx="30" fill="${BROWN}"/>
      <text x="181" y="1294" font-size="29" font-weight="800">${isZh ? '活跃客户' : 'Active Customers'}</text>
      <text data-operating-metric="active_customers" x="456" y="1294" font-size="29">24.7M</text>
      <text x="558" y="1294" font-size="29">${isZh ? '同比 +3%' : '(+3% Y/Y)'}</text>
      <text x="95" y="1337" font-size="29" font-weight="800">${isZh ? '每位活跃客户收入' : 'Revenue per Active Customers'}</text>
      <text data-operating-metric="revenue_per_active_customer" x="568" y="1337" font-size="29">$301</text>
      <text x="641" y="1337" font-size="29">${isZh ? '同比 -2%' : '(-2% Y/Y)'}</text>
    </g>`;

  const labels = (isZh) => ({
    product_commerce: {
      blocks: [
        block(478, 370, [line('$value', 40), line(isZh ? '同比 +1%' : '+1% Y/Y', 27, { color: NOTE })]),
        block(251, 486, [
          line(isZh ? '产品' : 'Product', 40, { weight: 800 }),
          line(isZh ? '商业' : 'Commerce', 40, { weight: 800 }),
          line(isZh ? '调整后利润率 5%' : '5% adjusted margin', 28, { color: NOTE }),
          line(isZh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 28, { color: NOTE }),
        ], { lineGap: 8 }),
        block(251, 687, [
          line(isZh ? '核心零售' : 'Core retail', 28, { color: NOTE }),
          line(isZh ? '平台业务' : 'Marketplace', 28, { color: NOTE }),
          line(isZh ? '火箭生鲜' : 'Rocket Fresh', 28, { color: NOTE }),
        ], { lineGap: 8, semanticRole: 'note' }),
      ],
    },
    developing_offerings: {
      blocks: [
        block(478, 910, [line('$value', 40), line(isZh ? '同比 +20%' : '+20% Y/Y', 27, { color: NOTE })]),
        block(252, 978, [
          line(isZh ? '培育中' : 'Developing', 40, { weight: 800 }),
          line(isZh ? '业务' : 'Offerings', 40, { weight: 800 }),
          line(isZh ? '调整后利润率 (15%)' : '(15%) adjusted margin', 28, { color: NOTE }),
          line(isZh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 28, { color: NOTE }),
        ], { lineGap: 8 }),
      ],
    },
    revenue: {
      blocks: [block(1101, 422, [
        line(isZh ? '收入' : 'Revenue', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '同比 +4%' : '+4% Y/Y', 28, { color: NOTE }),
        line(isZh ? '按固定汇率同比 +10%' : '+10% Y/Y fxn', 28, { color: NOTE }),
      ])],
    },
    gross_profit: {
      blocks: [block(1724, 286, [
        line(isZh ? '毛利润' : 'Gross profit', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '利润率 28%' : '28% margin', 28, { color: NOTE }),
        line(isZh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, { color: NOTE }),
      ])],
    },
    cost_of_revenue: {
      blocks: [block(1724, 1068, [
        line(isZh ? '收入' : 'Cost of', 35, { weight: 800 }),
        line(isZh ? '成本' : 'revenue', 35, { weight: 800 }),
        line('$value', 35),
      ], { lineGap: 8 })],
    },
    operating_expenses: {
      blocks: [block(2437, 621, [
        line(isZh ? '运营' : 'Operating', 40, { weight: 800 }),
        line(isZh ? '费用' : 'expenses', 40, { weight: 800 }),
        line('$value', 39),
      ], { anchor: 'start', lineGap: 8 })],
    },
    operating_loss: {
      blocks: [block(2027, 849, [
        line(isZh ? '营业' : 'Operating', 40, { weight: 800 }),
        line(isZh ? '亏损' : 'loss', 40, { weight: 800 }),
        line('$value', 39),
        line(isZh ? '占收入 (6%)' : '(6%) of revenue', 28, { color: NOTE }),
        line(isZh ? '同比 (8 个百分点)' : '(8pp) Y/Y', 28, { color: NOTE }),
      ], { lineGap: 8 })],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coupang-q2-fy26',
    name: 'Coupang · Q2 FY26',
    company: 'Coupang',
    meta: {
      company: 'Coupang',
      title: 'Coupang Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Q2 FY26 (Source-stated)',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coupang-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      hidePeriodStamp: true,
      logoWidth: 580,
      logoHeight: 142,
      logoY: 207,
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
    operatingMetrics: [{"id": "active_customers", "value": "24700000", "unit": "count", "currency": null, "comparison": "eq", "literal": "24.7M"}, {"id": "revenue_per_active_customer", "value": "0.301", "unit": "K", "currency": "USD", "comparison": "eq", "literal": "$301"}],
    annotationsSvg: kpiCard(false),
    rasterAnnotations: [
      {
        key: 'coupang-developing-offerings-brands',
        href: 'data/assets/raster-annotations/coupang/developing-offerings-brands.png',
        x: 132,
        y: 875,
        width: 272,
        height: 96,
      },
    ],
    layout: {
      scale: 43.3,
      nodes: {
        product_commerce: { x: 443, y: 461, width: 71, height: 286 },
        developing_offerings: { x: 443, y: 1002, width: 71, height: 55 },
        revenue: { x: 1065, y: 604, width: 72, height: 342 },
        gross_profit: { x: 1688, y: 465, width: 72, height: 97 },
        cost_of_revenue: { x: 1688, y: 806, width: 72, height: 245 },
        operating_expenses: { x: 2311, y: 639, width: 71, height: 117 },
        operating_loss: { x: 1995, y: 799, width: 71, height: 22 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'product_commerce', col: 0, order: 0, type: 'source', label: ['Product', 'Commerce'], value: 7.4, notes: ['+1% Y/Y', '5% adjusted margin', '(4pp) Y/Y', 'Core retail', 'Marketplace', 'Rocket Fresh'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'developing_offerings', col: 0, order: 1, type: 'source', label: ['Developing', 'Offerings'], value: 1.4, notes: ['+20% Y/Y', '(15%) adjusted margin', '(4pp) Y/Y'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.9, notes: ['+4% Y/Y', '+10% Y/Y fxn'], color: BROWN, labelColor: BROWN, linkTint: BROWN_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.5, notes: ['28% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.6, notes: ['(6%) of revenue', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'product_commerce', target: 'revenue', value: 7.4, sourceWidth: 286, targetWidth: 286, y0: 604, y1: 747, sourceOrder: 0, targetOrder: 0, linkTint: BROWN_LINK },
      { source: 'developing_offerings', target: 'revenue', value: 1.4, sourceWidth: 55, targetWidth: 56, y0: 1029.5, y1: 918, sourceOrder: 0, targetOrder: 1, linkTint: BROWN_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.5, sourceWidth: 97, targetWidth: 97, y0: 652.5, y1: 513.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.4, sourceWidth: 245, targetWidth: 245, y0: 823.5, y1: 928.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.5, sourceWidth: 97, targetWidth: 97, y0: 513.5, y1: 687.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.6, sourceWidth: 22, targetWidth: 20, y0: 810, y1: 746, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '酷澎 · 2026 财年第二季度',
        meta: {
          title: '酷澎 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '2026 财年第二季度（原图标注）',
          titleSize: 112,
          titleTextLength: 1540,
        },
        annotationsSvg: kpiCard(true),
        nodes: {
          product_commerce: { label: ['产品', '商业'], notes: ['同比 +1%', '调整后利润率 5%', '同比 (4 个百分点)', '核心零售', '平台业务', '火箭生鲜'] },
          developing_offerings: { label: ['培育中', '业务'], notes: ['同比 +20%', '调整后利润率 (15%)', '同比 (4 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +4%', '按固定汇率同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 28%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_expenses: { label: '运营费用' },
          operating_loss: { label: ['营业', '亏损'], notes: ['占收入 (6%)', '同比 (8 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

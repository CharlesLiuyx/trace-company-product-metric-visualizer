/* Lowe's Q1 FY26 income statement ($B), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#074f96';
  const BLUE_LINK = '#88a9c8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#dc0000';
  const RED_LABEL = '#9f1906';
  const RED_LINK = '#df8585';
  const RIGHT_LABEL_X = 2490;

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

  const lowesLogo = `
    <path d="M18 51H73L250 4L427 51H482V207H18Z" fill="#004990"/>
    <path d="M61 51L250 0L439 51" fill="none" stroke="#004990" stroke-width="13" stroke-linejoin="round"/>
    <text x="250" y="164" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="106" font-weight="800" letter-spacing="-7" textLength="384" lengthAdjust="spacingAndGlyphs" fill="#ffffff">LOWE'S</text>
    <text x="423" y="105" font-family="Montserrat,Arial,sans-serif" font-size="17" font-weight="700" fill="#ffffff">®</text>`;

  const kpiCard = (x, width, headerLines, value, note) => `
    <g>
      <rect x="${x}" y="1205" width="${width}" height="150" rx="31" fill="${BLUE}"/>
      ${headerLines.map((entry, index) => `<text x="${x + width / 2}" y="${1259 + index * 39}" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${entry}</text>`).join('')}
      <text x="${x + width / 2}" y="${headerLines.length > 1 ? 1326 : 1291}" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="23" font-weight="500" fill="#ffffff">${value}</text>
      ${note ? `<text x="${x + width / 2}" y="${headerLines.length > 1 ? 1354 : 1325}" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="22" font-weight="500" fill="#ffffff">${note}</text>` : ''}
    </g>`;

  const businessText = (isZh) => `
    <g class="sankey-interactive-annotation" data-node="home_decor">
      <text x="228" y="491" text-anchor="middle" font-size="40" font-weight="800" fill="${BLUE}">${isZh ? '家居装饰' : 'Home Décor'}</text>
      <text x="228" y="526" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '家电、装饰、地板、' : 'Appliances, Décor, Flooring,'}</text>
      <text x="228" y="557" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '厨卫及涂料' : 'Kitchen & Bath, and Paint'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="building_products">
      <text x="226" y="750" text-anchor="middle" font-size="40" font-weight="800" fill="${BLUE}">${isZh ? '建筑产品' : 'Building Products'}</text>
      <text x="226" y="790" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '电气及照明、木材、' : 'Electrical/Lighting, Lumber,'}</text>
      <text x="226" y="821" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '木制品及管道' : 'Millwork, and Plumbing'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="hardlines">
      <text x="228" y="996" text-anchor="middle" font-size="40" font-weight="800" fill="${BLUE}">${isZh ? '耐用品' : 'Hardlines'}</text>
      <text x="228" y="1033" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '五金、室内园艺、' : 'Hardware, Indoor Garden,'}</text>
      <text x="228" y="1064" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '户外园艺及工具' : 'Outdoor Garden, and Tools'}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${businessText(isZh)}
      <g class="sankey-interactive-annotation" data-node="home_decor">
        ${kpiCard(32, 275, [isZh ? '可比销售额' : 'Comparable sales'], isZh ? '同比 +0.6%' : '+0.6% Y/Y', '')}
      </g>
      <g class="sankey-interactive-annotation" data-node="building_products">
        ${kpiCard(319, 275, isZh ? ['客户', '交易次数'] : ['Customer', 'transactions'], isZh ? '同比 (1%)' : '(1%) Y/Y', '')}
      </g>
      <g class="sankey-interactive-annotation" data-node="hardlines">
        ${kpiCard(606, 325, [isZh ? '平均客单价' : 'Average ticket'], '$108', isZh ? '同比 +1.5%' : '+1.5% Y/Y')}
      </g>
    </g>`;

  const labels = {
    home_decor: { blocks: [
      block(466, 319, [line('$value', 39), line('+1% Y/Y', 29, { color: NOTE })]),
    ] },
    building_products: { blocks: [
      block(466, 608, [line('$value', 39), line('(0%) Y/Y', 29, { color: NOTE })]),
    ] },
    hardlines: { blocks: [
      block(466, 838, [line('$value', 39), line('+3% Y/Y', 29, { color: NOTE })]),
    ] },
    other: { blocks: [
      block(466, 1063, [line('$value', 39), line('+4444% Y/Y', 29, { color: NOTE })]),
      block(219, 1144, [line('Other', 40, { weight: 800 })]),
    ] },
    revenue: { blocks: [block(934, 531, [line('Net Sales', 40, { weight: 800 }), line('$value', 39), line('+10% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1400, 381, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('33% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1400, 1109, [line('Cost of sales', 35, { weight: 800 }), line('$value', 35)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1867, 267, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('11% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1867, 803, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 275, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('7% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 499, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    interest: { blocks: [block(RIGHT_LABEL_X, 619, [line('Interest', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 874, [line('SG&A', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    depreciation_amortization: { blocks: [block(RIGHT_LABEL_X, 1069, [line('Depreciation &', 31, { weight: 800 }), line('amortization', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
  };

  const zhLabels = {
    home_decor: { blocks: [
      block(466, 319, [line('$value', 39), line('同比 +1%', 29, { color: NOTE })]),
    ] },
    building_products: { blocks: [
      block(466, 608, [line('$value', 39), line('同比 (0%)', 29, { color: NOTE })]),
    ] },
    hardlines: { blocks: [
      block(466, 838, [line('$value', 39), line('同比 +3%', 29, { color: NOTE })]),
    ] },
    other: { blocks: [
      block(466, 1063, [line('$value', 39), line('同比 +4444%', 29, { color: NOTE })]),
      block(219, 1148, [line('其他', 40, { weight: 800 })]),
    ] },
    revenue: { blocks: [block(934, 535, [line('净销售额', 40, { weight: 800 }), line('$value', 39), line('同比 +10%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1400, 385, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 33%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1400, 1109, [line('销售成本', 35, { weight: 800 }), line('$value', 35)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1867, 271, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 11%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1867, 807, [line('运营费用', 40, { weight: 800 }), line('$value', 39)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 279, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 7%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 503, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    interest: { blocks: [block(RIGHT_LABEL_X, 623, [line('利息', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 870, [line('销售、一般及', 30, { weight: 800 }), line('行政费用', 30, { weight: 800 }), line('$value', 31)], { lineGap: 7 })] },
    depreciation_amortization: { blocks: [block(RIGHT_LABEL_X, 1069, [line('折旧及摊销', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lowes-q1-fy26',
    name: "Lowe's · Q1 FY26",
    company: "Lowe's",
    meta: {
      company: "Lowe's",
      title: "Lowe's Q1 FY26 Income Statement",
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lowes-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2165,
      periodX: 1072,
      periodY: 1274,
      periodNoteY: 1315,
      logoWidth: 445,
      logoHeight: 205,
      logoY: 239,
      logoViewBox: '0 0 500 220',
      logoSvg: lowesLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'lowes-home-decor-icons', href: 'data/assets/raster-annotations/lowes/home-decor.png', x: 79, y: 349, width: 283, height: 96 },
      { key: 'lowes-building-products-icons', href: 'data/assets/raster-annotations/lowes/building-products.png', x: 30, y: 608, width: 360, height: 105 },
      { key: 'lowes-hardlines-icons', href: 'data/assets/raster-annotations/lowes/hardlines.png', x: 116, y: 857, width: 224, height: 97 },
    ],
    layout: {
      scale: 13.65,
      nodes: {
        home_decor: { x: 428, y: 417, width: 73, height: 98 },
        building_products: { x: 428, y: 704, width: 73, height: 93 },
        hardlines: { x: 428, y: 935, width: 73, height: 93 },
        other: { x: 428, y: 1157, width: 73, height: 31 },
        revenue: { x: 897, y: 676, width: 73, height: 315 },
        gross_profit: { x: 1364, y: 564, width: 73, height: 104 },
        cost_of_sales: { x: 1364, y: 877, width: 73, height: 213 },
        operating_profit: { x: 1831, y: 450, width: 73, height: 35 },
        operating_expenses: { x: 1831, y: 722, width: 73, height: 70 },
        net_profit: { x: 2298, y: 323, width: 73, height: 23 },
        tax: { x: 2298, y: 536, width: 73, height: 7 },
        interest: { x: 2298, y: 656, width: 73, height: 7 },
        sga: { x: 2298, y: 884, width: 73, height: 60 },
        depreciation_amortization: { x: 2298, y: 1124, width: 73, height: 6 },
      },
      labels,
    },
    nodes: [
      { id: 'home_decor', col: 0, order: 0, type: 'source', label: 'Home Décor', value: 7.2, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'building_products', col: 0, order: 1, type: 'source', label: 'Building Products', value: 6.8, notes: ['(0%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'hardlines', col: 0, order: 2, type: 'source', label: 'Hardlines', value: 6.8, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 2.3, notes: ['+4444% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net Sales', value: 23.1, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.5, notes: ['33% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 15.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, notes: ['11% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['7% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 4.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 4, type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'home_decor', target: 'revenue', value: 7.2, sourceWidth: 98, targetWidth: 98, y0: 466, y1: 725, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'building_products', target: 'revenue', value: 6.8, sourceWidth: 93, targetWidth: 93, y0: 750.5, y1: 820.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'hardlines', target: 'revenue', value: 6.8, sourceWidth: 93, targetWidth: 93, y0: 981.5, y1: 913.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'other', target: 'revenue', value: 2.3, sourceWidth: 31, targetWidth: 31, y0: 1172.5, y1: 975.5, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 7.5, sourceWidth: 104, targetWidth: 104, y0: 728, y1: 616, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 15.5, sourceWidth: 211, targetWidth: 213, y0: 885.5, y1: 983.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 35, targetWidth: 35, y0: 581.5, y1: 467.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.0, sourceWidth: 69, targetWidth: 70, y0: 633.5, y1: 757, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 23, targetWidth: 23, y0: 461.5, y1: 334.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 6, targetWidth: 7, y0: 476, y1: 539.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 6, targetWidth: 7, y0: 482, y1: 659.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 4.4, sourceWidth: 60, targetWidth: 60, y0: 752, y1: 914, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.6, sourceWidth: 10, targetWidth: 6, y0: 787, y1: 1127, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '劳氏 · 2026 财年第一季度',
        meta: {
          title: '劳氏 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 108,
          titleTextLength: 1560,
          periodX: 1072,
        },
        annotationsSvg: annotations(true),
        nodes: {
          home_decor: { label: '家居装饰', notes: ['同比 +1%'] },
          building_products: { label: '建筑产品', notes: ['同比 (0%)'] },
          hardlines: { label: '耐用品', notes: ['同比 +3%'] },
          other: { label: '其他', notes: ['同比 +4444%'] },
          revenue: { label: '净销售额', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          sga: { label: '销售、一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

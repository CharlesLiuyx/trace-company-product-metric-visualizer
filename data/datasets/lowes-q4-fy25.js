/* Lowe's Q4 FY25 income statement ($B), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#004990';
  const BLUE_LINK = '#85a6c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2501;

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

  const iconClusters = () => `
    <g fill="none" stroke="#151515" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <g class="sankey-interactive-annotation" data-node="home_decor" transform="translate(82 351)">
        <path d="M2 76H188M17 76V35H55V76M19 35H53V10H21Z"/>
        <path d="M93 76V45H172V76M91 45Q92 25 113 25H151Q172 25 174 45M107 25V16H156V25"/>
        <path d="M183 76V45H214V76M192 45V10H210V45M193 10H209"/>
        <path d="M245 76V44H280V76M252 44V16H275V44M258 16V4H269V16"/>
        <path d="M300 76H340M320 76V39M306 58Q320 47 334 58M304 42Q320 30 336 42M320 39V24"/>
      </g>
      <g class="sankey-interactive-annotation" data-node="building_products" transform="translate(35 612)">
        <path d="M4 56H142M72 56V30M20 56L8 62M123 56L138 62M35 56V72M103 56V72"/>
        <path d="M72 30V10M60 10H84M59 18H85"/>
        <path d="M171 76V31H215V76M165 31H221M182 31V9M204 31V9M178 9H186M200 9H208"/>
        <path d="M257 76V25M257 25Q281 24 281 47V58Q281 72 296 72H309"/>
        <path d="M302 76V58H332V76M316 58V21M304 21H328M316 21V10"/>
      </g>
      <g class="sankey-interactive-annotation" data-node="hardlines" transform="translate(104 861)">
        <path d="M7 76H104M20 76V58Q35 39 61 43L84 53L76 67H40L29 76M48 43L65 12M65 12L60 5M65 12L72 8"/>
        <circle cx="31" cy="76" r="9"/><circle cx="75" cy="76" r="9"/>
        <path d="M129 43H180V66H129Z M180 48H203V61H180 M144 43V27H164V43 M149 27V16H160V27"/>
        <path d="M137 66V76M177 66V76"/>
      </g>
      <g data-typography-role="brand" transform="translate(168 1077)">
        <rect x="0" y="0" width="124" height="36" fill="#ffffff" stroke="#8b4d58" stroke-width="1.5"/>
        <rect x="39" y="4" width="80" height="28" fill="#155077"/>
        <path d="M5 12L18 6L33 12L27 18L32 28H8L13 18Z" fill="#2f6637"/>
        <text x="79" y="26" text-anchor="middle" font-family="Georgia,serif" font-size="24" font-weight="700" fill="#ffffff">FBM</text>
        <text x="62" y="44" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" fill="#444444">Foundation Building Materials</text>
      </g>
    </g>`;

  const kpiCard = (x, width, headerLines, value, note) => `
    <g>
      <rect x="${x}" y="1205" width="${width}" height="150" rx="31" fill="${BLUE}"/>
      ${headerLines.map((entry, index) => `<text x="${x + width / 2}" y="${1259 + index * 39}" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${entry}</text>`).join('')}
      <text x="${x + width / 2}" y="${headerLines.length > 1 ? 1326 : 1291}" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="23" font-weight="500" fill="#ffffff">${value}</text>
      ${note ? `<text x="${x + width / 2}" y="${headerLines.length > 1 ? 1354 : 1325}" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="22" font-weight="500" fill="#ffffff">${note}</text>` : ''}
    </g>`;

  const businessText = (isZh) => `
    <g class="sankey-interactive-annotation" data-node="home_decor">
      <text x="228" y="513" text-anchor="middle" font-size="40" font-weight="800" fill="${BLUE}">${isZh ? '家居装饰' : 'Home Décor'}</text>
      <text x="228" y="548" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '家电、装饰、地板、' : 'Appliances, Décor, Flooring,'}</text>
      <text x="228" y="579" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '厨卫及涂料' : 'Kitchen & Bath, and Paint'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="building_products">
      <text x="226" y="750" text-anchor="middle" font-size="40" font-weight="800" fill="${BLUE}">${isZh ? '建筑产品' : 'Building Products'}</text>
      <text x="226" y="790" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '电气及照明、木材、' : 'Electrical/Lighting, Lumber,'}</text>
      <text x="226" y="821" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '木制品及管道' : 'Millwork, and Plumbing'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="hardlines">
      <text x="228" y="980" text-anchor="middle" font-size="40" font-weight="800" fill="${BLUE}">${isZh ? '耐用品' : 'Hardlines'}</text>
      <text x="228" y="1017" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '五金、室内园艺、' : 'Hardware, Indoor Garden,'}</text>
      <text x="228" y="1048" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="27" fill="${NOTE}">${isZh ? '户外园艺及工具' : 'Outdoor Garden, and Tools'}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${iconClusters()}
      ${businessText(isZh)}
      <g class="sankey-interactive-annotation" data-node="home_decor">
        ${kpiCard(32, 275, [isZh ? '可比销售额' : 'Comparable sales'], isZh ? '同比 +1%' : '+1% Y/Y', '')}
      </g>
      <g class="sankey-interactive-annotation" data-node="building_products">
        ${kpiCard(319, 275, isZh ? ['客户', '交易次数'] : ['Customer', 'transactions'], isZh ? '同比 (2%)' : '(2%) Y/Y', '')}
      </g>
      <g class="sankey-interactive-annotation" data-node="hardlines">
        ${kpiCard(606, 325, [isZh ? '平均客单价' : 'Average ticket'], '$107', isZh ? '同比 +4%' : '+4% Y/Y')}
      </g>
    </g>`;

  const labels = {
    home_decor: { blocks: [
      block(472, 382, [line('$value', 39), line('(1%) Y/Y', 29, { color: NOTE })]),
    ] },
    building_products: { blocks: [
      block(472, 613, [line('$value', 39), line('+2% Y/Y', 29, { color: NOTE })]),
    ] },
    hardlines: { blocks: [
      block(475, 836, [line('$value', 39), line('+4% Y/Y', 29, { color: NOTE })]),
    ] },
    other: { blocks: [
      block(475, 1046, [line('$value', 39), line('NM', 29, { color: NOTE })]),
      block(234, 1130, [line('Other', 40, { weight: 800 })]),
    ] },
    revenue: { blocks: [block(939, 559, [line('Net Sales', 40, { weight: 800 }), line('$value', 39), line('+11% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1399, 381, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('32% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1400, 1100, [line('Cost of sales', 35, { weight: 800 }), line('$value', 35)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1877, 300, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('8% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1874, 791, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)], { lineGap: 9 })] },
    net_profit: { blocks: [block(2502, 329, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('5% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    interest: { blocks: [block(RIGHT_LABEL_X, 547, [line('Interest', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 664, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 826, [line('SG&A', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    depreciation_amortization: { blocks: [block(2508, 1051, [line('Depreciation &', 31, { weight: 800 }), line('amortization', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
  };

  const zhLabels = {
    home_decor: { blocks: [
      block(472, 382, [line('$value', 39), line('同比 (1%)', 29, { color: NOTE })]),
    ] },
    building_products: { blocks: [
      block(472, 613, [line('$value', 39), line('同比 +2%', 29, { color: NOTE })]),
    ] },
    hardlines: { blocks: [
      block(475, 836, [line('$value', 39), line('同比 +4%', 29, { color: NOTE })]),
    ] },
    other: { blocks: [
      block(475, 1046, [line('$value', 39), line('不适用', 29, { color: NOTE })]),
      block(234, 1127, [line('其他', 40, { weight: 800 })]),
    ] },
    revenue: { blocks: [block(939, 563, [line('净销售额', 40, { weight: 800 }), line('$value', 39), line('同比 +11%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1399, 385, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 32%', 29, { color: NOTE }), line('同比 (0 个百分点)', 29, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1400, 1100, [line('销售成本', 35, { weight: 800 }), line('$value', 35)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1877, 304, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 8%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1874, 795, [line('运营费用', 40, { weight: 800 }), line('$value', 39)], { lineGap: 9 })] },
    net_profit: { blocks: [block(2502, 333, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 5%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    interest: { blocks: [block(RIGHT_LABEL_X, 551, [line('利息', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 668, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 822, [line('销售、一般及', 30, { weight: 800 }), line('行政费用', 30, { weight: 800 }), line('$value', 31)], { lineGap: 7 })] },
    depreciation_amortization: { blocks: [block(2508, 1051, [line('折旧及摊销', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lowes-q4-fy25',
    name: "Lowe's · Q4 FY25",
    company: "Lowe's",
    meta: {
      company: "Lowe's",
      title: "Lowe's Q4 FY25 Income Statement",
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lowes-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2130,
      periodX: 1064,
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
    layout: {
      scale: 13.25,
      nodes: {
        home_decor: { x: 435, y: 469, width: 73, height: 104 },
        building_products: { x: 435, y: 708, width: 73, height: 80 },
        hardlines: { x: 435, y: 930, width: 73, height: 64 },
        other: { x: 435, y: 1139, width: 73, height: 25 },
        revenue: { x: 902, y: 710, width: 73, height: 274 },
        gross_profit: { x: 1369, y: 569, width: 73, height: 89 },
        cost_of_sales: { x: 1369, y: 900, width: 73, height: 186 },
        operating_profit: { x: 1837, y: 486, width: 72, height: 23 },
        operating_expenses: { x: 1837, y: 707, width: 72, height: 67 },
        net_profit: { x: 2303, y: 388, width: 73, height: 13 },
        interest: { x: 2303, y: 569, width: 73, height: 5 },
        tax: { x: 2303, y: 706, width: 73, height: 3 },
        sga: { x: 2303, y: 835, width: 73, height: 59 },
        depreciation_amortization: { x: 2303, y: 1109, width: 73, height: 7 },
      },
      labels,
    },
    nodes: [
      { id: 'home_decor', col: 0, order: 0, type: 'source', label: 'Home Décor', value: 7.8, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'building_products', col: 0, order: 1, type: 'source', label: 'Building Products', value: 6.0, valueText: '$6.0B', notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'hardlines', col: 0, order: 2, type: 'source', label: 'Hardlines', value: 4.9, notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 1.9, notes: ['NM'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net Sales', value: 20.6, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.7, notes: ['32% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 13.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, notes: ['8% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.0, valueText: '$1.0B', notes: ['5% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 4.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 4, type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'home_decor', target: 'revenue', value: 7.8, sourceWidth: 104, targetWidth: 104, y0: 521, y1: 762, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'building_products', target: 'revenue', value: 6.0, sourceWidth: 80, targetWidth: 80, y0: 748, y1: 854, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'hardlines', target: 'revenue', value: 4.9, sourceWidth: 64, targetWidth: 64, y0: 962, y1: 926, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'other', target: 'revenue', value: 1.9, sourceWidth: 25, targetWidth: 25, y0: 1151.5, y1: 971.5, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 6.7, sourceWidth: 87, targetWidth: 89, y0: 753.5, y1: 613.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 13.9, sourceWidth: 186, targetWidth: 186, y0: 891, y1: 993, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.7, sourceWidth: 21, targetWidth: 23, y0: 579.5, y1: 497.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.0, sourceWidth: 68, targetWidth: 67, y0: 624, y1: 740.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.0, sourceWidth: 11, targetWidth: 13, y0: 491.5, y1: 394.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 6, targetWidth: 5, y0: 500, y1: 571.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 6, targetWidth: 3, y0: 506, y1: 707.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 4.4, sourceWidth: 58, targetWidth: 59, y0: 736, y1: 864.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.6, sourceWidth: 9, targetWidth: 7, y0: 769.5, y1: 1112.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['FBM', 'Foundation Building Materials'],
      zh: {
        name: '劳氏 · 2025 财年第四季度',
        meta: {
          title: '劳氏 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 108,
          titleTextLength: 1560,
          periodX: 1064,
        },
        annotationsSvg: annotations(true),
        nodes: {
          home_decor: { label: '家居装饰', notes: ['同比 (1%)'] },
          building_products: { label: '建筑产品', notes: ['同比 +2%'] },
          hardlines: { label: '耐用品', notes: ['同比 +4%'] },
          other: { label: '其他', notes: ['不适用'] },
          revenue: { label: '净销售额', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 32%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (1 个百分点)'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

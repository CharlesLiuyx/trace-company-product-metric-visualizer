/* ====================================================================
 * Fiserv - Q4 FY25 income statement ($B)
 * Measured reconstruction of input/processed/fiserv-q4-fy25.png using
 * fixed d3/SVG geometry only; publisher attribution is intentionally
 * excluded from the rendered View.
 * ==================================================================== */
(function () {
  const TITLE = '#19567f';
  const NOTE = '#666666';
  const ORANGE = '#ff6800';
  const ORANGE_LINK = '#f6b17b';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00904e';
  const GREEN_LINK = '#9dcc9a';
  const RED = '#d60000';
  const RED_LABEL = '#a21406';
  const RED_LINK = '#e18386';
  const SCALE = 55.4;

  const fiservWordmark = `
    <text x="196" y="145" text-anchor="middle" font-family="Arial,sans-serif"
      font-size="154" font-weight="900" letter-spacing="-13" fill="${ORANGE}"
      textLength="370" lengthAdjust="spacingAndGlyphs">fiserv.</text>`;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const labelsEn = {
    merchants_solutions: { blocks: [
      block(479, 457, [line('$value', 39), line('+2% Y/Y', 28, { color: NOTE })]),
      block(279, 562, [line('Merchants', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 }), line('32% operating margin', 28, { color: NOTE })], { lineGap: 10 }),
    ] },
    financial_solutions: { blocks: [
      block(479, 735, [line('$value', 39), line('(2%) Y/Y', 28, { color: NOTE })]),
      block(279, 837, [line('Financial', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 }), line('42% operating margin', 28, { color: NOTE })], { lineGap: 10 }),
    ] },
    corporate: { blocks: [
      block(479, 995, [line('$value', 39), line('+9% Y/Y', 28, { color: NOTE })]),
      block(279, 1081, [line('Corporate', 40, { weight: 800 })]),
    ] },
    revenue: { blocks: [
      block(946, 561, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+1% Y/Y', 28, { color: NOTE })]),
    ] },
    gross_profit: { blocks: [
      block(1414, 397, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('57% margin', 28, { color: NOTE }), line('(4pp) Y/Y', 28, { color: NOTE })]),
    ] },
    cost_processing: { blocks: [
      block(1468, 1006, [line('Cost of', 34, { weight: 800 }), line('processing', 34, { weight: 800 }), line('$value', 34)], { anchor: 'start', lineGap: 8 }),
    ] },
    cost_product: { blocks: [
      block(1468, 1163, [line('Cost of', 34, { weight: 800 }), line('product', 34, { weight: 800 }), line('$value', 34)], { anchor: 'start', lineGap: 8 }),
    ] },
    operating_profit: { blocks: [
      block(1881, 286, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('24% margin', 28, { color: NOTE }), line('(7pp) Y/Y', 28, { color: NOTE })]),
    ] },
    operating_expenses: { blocks: [
      block(1881, 881, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 }),
    ] },
    other: { blocks: [
      block(2220, 487, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 }),
    ] },
    net_profit: { blocks: [
      block(2411, 344, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('15% margin', 28, { color: NOTE }), line('+4pp Y/Y', 28, { color: NOTE })], { anchor: 'start' }),
    ] },
    interest: { blocks: [
      block(2420, 659, [line('Interest', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 }),
    ] },
    tax: { blocks: [
      block(2420, 832, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 }),
    ] },
  };

  const labelsZh = {
    merchants_solutions: { blocks: [
      block(479, 457, [line('$value', 39), line('同比 +2%', 28, { color: NOTE })]),
      block(279, 575, [line('商户解决方案', 38, { weight: 800 }), line('经营利润率 32%', 27, { color: NOTE })], { lineGap: 11 }),
    ] },
    financial_solutions: { blocks: [
      block(479, 735, [line('$value', 39), line('同比 (2%)', 28, { color: NOTE })]),
      block(279, 850, [line('金融解决方案', 38, { weight: 800 }), line('经营利润率 42%', 27, { color: NOTE })], { lineGap: 11 }),
    ] },
    corporate: { blocks: [
      block(479, 995, [line('$value', 39), line('同比 +9%', 28, { color: NOTE })]),
      block(279, 1092, [line('公司及其他', 38, { weight: 800 })]),
    ] },
    revenue: { blocks: [
      block(946, 561, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +1%', 28, { color: NOTE })]),
    ] },
    gross_profit: { blocks: [
      block(1414, 397, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 57%', 28, { color: NOTE }), line('同比 (4 个百分点)', 28, { color: NOTE })]),
    ] },
    cost_processing: { blocks: [
      block(1468, 1018, [line('处理服务成本', 32, { weight: 800 }), line('$value', 34)], { anchor: 'start', lineGap: 9 }),
    ] },
    cost_product: { blocks: [
      block(1468, 1176, [line('产品成本', 32, { weight: 800 }), line('$value', 34)], { anchor: 'start', lineGap: 9 }),
    ] },
    operating_profit: { blocks: [
      block(1881, 286, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 24%', 28, { color: NOTE }), line('同比 (7 个百分点)', 28, { color: NOTE })]),
    ] },
    operating_expenses: { blocks: [
      block(1881, 894, [line('营业费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 }),
    ] },
    other: { blocks: [
      block(2220, 487, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 }),
    ] },
    net_profit: { blocks: [
      block(2411, 344, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 15%', 28, { color: NOTE }), line('同比 +4 个百分点', 28, { color: NOTE })], { anchor: 'start' }),
    ] },
    interest: { blocks: [
      block(2420, 659, [line('利息费用', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 }),
    ] },
    tax: { blocks: [
      block(2420, 832, [line('所得税', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 }),
    ] },
  };

  const cards = (zh = false) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="181" y="1159" width="275" height="147" rx="31" fill="${ORANGE}"/>
      <text x="318.5" y="1210" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">Clover GPV</text>
      <text x="318.5" y="1251" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$329B</text>
      <text x="318.5" y="1282" text-anchor="middle" font-size="25" font-weight="500" fill="#ffffff">${zh ? '同比 +6%' : '+6% Y/Y'}</text>
      <rect x="464" y="1159" width="428" height="147" rx="31" fill="${ORANGE}"/>
      <text x="678" y="1224" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${zh ? '内生收入增长' : 'Organic revenue growth'}</text>
      <text x="678" y="1263" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${zh ? '同比持平' : 'Flat Y/Y'}</text>
      <text x="149" y="1354" font-size="28" font-weight="500" fill="${NOTE}">${zh ? 'GPV = 总支付额' : 'GPV = Gross Payment Volume'}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fiserv-q4-fy25',
    name: 'Fiserv · Q4 FY25',
    company: 'Fiserv',
    meta: {
      company: 'Fiserv',
      title: 'Fiserv Q4 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/fiserv-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2150,
      logoWidth: 392,
      logoHeight: 172,
      logoY: 287,
      logoViewBox: '0 0 392 172',
      logoSvg: fiservWordmark,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 9 },
    },
    annotationsSvg: cards(),
    layout: {
      scale: SCALE,
      nodes: {
        merchants_solutions: { x: 443, y: 548, width: 72, height: 140.6 },
        financial_solutions: { x: 443, y: 825, width: 72, height: 130.9 },
        corporate: { x: 443, y: 1086, width: 72, height: 21.3 },
        revenue: { x: 910, y: 700, width: 72, height: 292.8 },
        gross_profit: { x: 1378, y: 579, width: 72, height: 167.1 },
        cost_processing: { x: 1378, y: 1014, width: 72, height: 83.9 },
        cost_product: { x: 1378, y: 1191, width: 72, height: 41.7 },
        operating_profit: { x: 1845, y: 469, width: 72, height: 71.5 },
        operating_expenses: { x: 1845, y: 764, width: 72, height: 95.7 },
        other: { x: 2184, y: 462, width: 72, height: 5.4 },
        net_profit: { x: 2311, y: 368, width: 72, height: 44.9 },
        interest: { x: 2311, y: 679, width: 72, height: 20.8 },
        tax: { x: 2311, y: 854, width: 72, height: 11.2 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'merchants_solutions', col: 0, order: 0, type: 'source', label: ['Merchants', 'Solutions'], value: 2.538, notes: ['+2% Y/Y', '32% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'financial_solutions', col: 0, order: 1, type: 'source', label: ['Financial', 'Solutions'], value: 2.362, notes: ['(2%) Y/Y', '42% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'corporate', col: 0, order: 2, type: 'source', label: 'Corporate', value: 0.384, notes: ['+9% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.284, notes: ['+1% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.016, notes: ['57% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_processing', col: 2, order: 1, type: 'cost', label: ['Cost of', 'processing'], value: 1.515, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_product', col: 2, order: 2, type: 'cost', label: ['Cost of', 'product'], value: 0.753, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.291, notes: ['24% margin', '(7pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.728, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.097, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.811, notes: ['15% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.375, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.202, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'merchants_solutions', target: 'revenue', value: 2.538, width: 140.6, sourceWidth: 140.6, targetWidth: 139, y1: 771.5, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'financial_solutions', target: 'revenue', value: 2.362, width: 130.9, sourceWidth: 130.9, targetWidth: 130, y1: 906, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'corporate', target: 'revenue', value: 0.384, width: 21.3, sourceWidth: 21.3, targetWidth: 22, y1: 982, sourceOrder: 0, targetOrder: 2, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 3.016, width: 167.1, sourceWidth: 165, targetWidth: 167.1, y0: 784.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_processing', value: 1.515, width: 83.9, sourceWidth: 84, targetWidth: 83.9, y0: 909, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'cost_product', value: 0.753, width: 41.7, sourceWidth: 42, targetWidth: 41.7, y0: 972, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.291, width: 71.5, sourceWidth: 71.5, targetWidth: 71.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.728, width: 95.7, sourceWidth: 94.5, targetWidth: 95.7, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.714, width: 39.6, sourceWidth: 39.6, targetWidth: 39.6, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.375, width: 20.8, sourceWidth: 20.8, targetWidth: 20.8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.202, width: 11.2, sourceWidth: 11.2, targetWidth: 11.2, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.097, width: 5.4, sourceWidth: 5.4, targetWidth: 5.4, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 2275, c1y: 464.7, c2x: 2285, c2y: 410.3 } },
    ],
    i18n: {
      preservedAnnotationText: ['Clover GPV'],
      zh: {
        name: 'Fiserv · 2025 财年第四季度',
        meta: {
          title: 'Fiserv 2025 财年第四季度利润表',
          titleSize: 110,
          titleTextLength: 1860,
        },
        nodes: {
          merchants_solutions: { label: '商户解决方案', notes: ['同比 +2%', '经营利润率 32%'] },
          financial_solutions: { label: '金融解决方案', notes: ['同比 (2%)', '经营利润率 42%'] },
          corporate: { label: '公司及其他', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 (4 个百分点)'] },
          cost_processing: { label: '处理服务成本' },
          cost_product: { label: '产品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 24%', '同比 (7 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +4 个百分点'] },
          interest: { label: '利息费用' },
          tax: { label: '所得税' },
        },
        layout: { labels: labelsZh },
        annotationsSvg: cards(true),
      },
    },
  });
})();

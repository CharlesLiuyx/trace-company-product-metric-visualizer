/* ====================================================================
 * Fiserv - Q1 FY26 income statement ($B)
 * Measured reconstruction of input/processed/fiserv-q1-fy26.png using
 * fixed d3/SVG geometry only; publisher attribution is intentionally
 * excluded from the rendered View.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const ORANGE = '#ff6600';
  const ORANGE_LINK = '#f7b385';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

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
      block(479, 405, [line('$value', 39), line('+0% Y/Y', 28, { color: NOTE })]),
      block(279, 516, [line('Merchants', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 }), line('26% operating margin', 28, { color: NOTE })], { lineGap: 10 }),
    ] },
    financial_solutions: { blocks: [
      block(479, 709, [line('$value', 39), line('(5%) Y/Y', 28, { color: NOTE })]),
      block(279, 819, [line('Financial', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 }), line('38% operating margin', 28, { color: NOTE })], { lineGap: 10 }),
    ] },
    corporate: { blocks: [
      block(479, 999, [line('$value', 39), line('+3% Y/Y', 28, { color: NOTE })]),
      block(279, 1088, [line('Corporate', 40, { weight: 800 })]),
    ] },
    revenue: { blocks: [
      block(946, 499, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('(2%) Y/Y', 28, { color: NOTE })]),
    ] },
    gross_profit: { blocks: [
      block(1414, 313, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('54% margin', 28, { color: NOTE }), line('(5pp) Y/Y', 28, { color: NOTE })]),
    ] },
    cost_processing: { blocks: [
      block(1468, 938, [line('Cost of', 34, { weight: 800 }), line('processing', 34, { weight: 800 }), line('$value', 34)], { anchor: 'start', lineGap: 8 }),
    ] },
    cost_product: { blocks: [
      block(1468, 1121, [line('Cost of', 34, { weight: 800 }), line('product', 34, { weight: 800 }), line('$value', 34)], { anchor: 'start', lineGap: 8 }),
    ] },
    operating_profit: { blocks: [
      block(1881, 234, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('18% margin', 28, { color: NOTE }), line('(9pp) Y/Y', 28, { color: NOTE })]),
    ] },
    operating_expenses: { blocks: [
      block(1881, 879, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 }),
    ] },
    other: { blocks: [
      block(1674, 886, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 }),
    ] },
    net_profit: { blocks: [
      block(2411, 288, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('11% margin', 28, { color: NOTE }), line('(5pp) Y/Y', 28, { color: NOTE })], { anchor: 'start' }),
    ] },
    interest_other: { blocks: [
      block(2420, 595, [line('Interest &', 31, { weight: 800 }), line('Other', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 }),
    ] },
  };

  const labelsZh = {
    merchants_solutions: { blocks: [
      block(479, 405, [line('$value', 39), line('同比 +0%', 28, { color: NOTE })]),
      block(279, 528, [line('商户解决方案', 38, { weight: 800 }), line('经营利润率 26%', 27, { color: NOTE })], { lineGap: 11 }),
    ] },
    financial_solutions: { blocks: [
      block(479, 709, [line('$value', 39), line('同比 (5%)', 28, { color: NOTE })]),
      block(279, 833, [line('金融解决方案', 38, { weight: 800 }), line('经营利润率 38%', 27, { color: NOTE })], { lineGap: 11 }),
    ] },
    corporate: { blocks: [
      block(479, 999, [line('$value', 39), line('同比 +3%', 28, { color: NOTE })]),
      block(279, 1098, [line('公司及其他', 38, { weight: 800 })]),
    ] },
    revenue: { blocks: [
      block(946, 499, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 (2%)', 28, { color: NOTE })]),
    ] },
    gross_profit: { blocks: [
      block(1414, 313, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 54%', 28, { color: NOTE }), line('同比 (5 个百分点)', 28, { color: NOTE })]),
    ] },
    cost_processing: { blocks: [
      block(1468, 950, [line('处理服务成本', 32, { weight: 800 }), line('$value', 34)], { anchor: 'start', lineGap: 9 }),
    ] },
    cost_product: { blocks: [
      block(1468, 1133, [line('产品成本', 32, { weight: 800 }), line('$value', 34)], { anchor: 'start', lineGap: 9 }),
    ] },
    operating_profit: { blocks: [
      block(1881, 234, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 18%', 28, { color: NOTE }), line('同比 (9 个百分点)', 28, { color: NOTE })]),
    ] },
    operating_expenses: { blocks: [
      block(1881, 891, [line('营业费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 }),
    ] },
    other: { blocks: [
      block(1674, 898, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 }),
    ] },
    net_profit: { blocks: [
      block(2411, 288, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 11%', 28, { color: NOTE }), line('同比 (5 个百分点)', 28, { color: NOTE })], { anchor: 'start' }),
    ] },
    interest_other: { blocks: [
      block(2420, 607, [line('利息及其他', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 }),
    ] },
  };

  const cards = (zh = false) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="181" y="1159" width="275" height="147" rx="31" fill="${ORANGE}"/>
      <text x="318.5" y="1210" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">Clover GPV</text>
      <text x="318.5" y="1251" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$324B</text>
      <text x="318.5" y="1282" text-anchor="middle" font-size="25" font-weight="500" fill="#ffffff">${zh ? '同比 +12%' : '+12% Y/Y'}</text>
      <rect x="480" y="1159" width="428" height="147" rx="31" fill="${ORANGE}"/>
      <text x="694" y="1224" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${zh ? '内生收入增长' : 'Organic revenue growth'}</text>
      <text x="694" y="1263" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${zh ? '同比 (4%)' : '(4%) Y/Y'}</text>
      <text x="149" y="1354" font-size="28" font-weight="500" fill="${NOTE}">${zh ? 'GPV = 总支付额' : 'GPV = Gross Payment Volume'}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fiserv-q1-fy26',
    name: 'Fiserv · Q1 FY26',
    company: 'Fiserv',
    meta: {
      company: 'Fiserv',
      title: 'Fiserv Q1 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/fiserv-q1-fy26.png', width: 2667, height: 1500 },
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
      scale: 68.4,
      nodes: {
        merchants_solutions: { x: 443, y: 492, width: 72, height: 162 },
        financial_solutions: { x: 443, y: 798, width: 72, height: 157 },
        corporate: { x: 443, y: 1088, width: 72, height: 24 },
        revenue: { x: 910, y: 636, width: 72, height: 347 },
        gross_profit: { x: 1378, y: 493, width: 72, height: 185 },
        cost_processing: { x: 1378, y: 929, width: 72, height: 111 },
        cost_product: { x: 1378, y: 1148, width: 72, height: 49 },
        operating_profit: { x: 1845, y: 413, width: 72, height: 64 },
        operating_expenses: { x: 1845, y: 726, width: 72, height: 129 },
        other: { x: 1637, y: 863, width: 72, height: 6 },
        net_profit: { x: 2311, y: 318, width: 72, height: 39 },
        interest_other: { x: 2311, y: 629, width: 72, height: 23 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'merchants_solutions', col: 0, order: 0, type: 'source', label: ['Merchants', 'Solutions'], value: 2.373, notes: ['+0% Y/Y', '26% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'financial_solutions', col: 0, order: 1, type: 'source', label: ['Financial', 'Solutions'], value: 2.302, notes: ['(5%) Y/Y', '38% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'corporate', col: 0, order: 2, type: 'source', label: 'Corporate', value: 0.352, notes: ['+3% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.027, notes: ['(2%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.72, notes: ['54% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_processing', col: 2, order: 1, type: 'cost', label: ['Cost of', 'processing'], value: 1.61, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_product', col: 2, order: 2, type: 'cost', label: ['Cost of', 'product'], value: 0.697, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.918, notes: ['18% margin', '(9pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.885, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 2, type: 'profit', label: 'Other', value: 0.083, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.571, notes: ['11% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest_other', col: 4, order: 1, type: 'cost', label: ['Interest &', 'Other'], value: 0.347, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'merchants_solutions', target: 'revenue', value: 2.373, width: 162, sourceWidth: 162, targetWidth: 160, y1: 719, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'financial_solutions', target: 'revenue', value: 2.302, width: 157, sourceWidth: 157, targetWidth: 156, y1: 877, sourceOrder: 0, targetOrder: 1, linkTint: ORANGE_LINK },
      { source: 'corporate', target: 'revenue', value: 0.352, width: 24, sourceWidth: 24, targetWidth: 25, y1: 967.5, sourceOrder: 0, targetOrder: 2, linkTint: ORANGE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.72, width: 184, sourceWidth: 184, targetWidth: 184, y0: 731, y1: 585, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_processing', value: 1.61, width: 108, sourceWidth: 108, targetWidth: 110, y0: 877, y1: 984, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'cost_product', value: 0.697, width: 49, sourceWidth: 49, targetWidth: 49, y0: 955.5, y1: 1172.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.918, width: 61, sourceWidth: 61, targetWidth: 63, y0: 524.5, y1: 444.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.802, width: 123, sourceWidth: 123, targetWidth: 122, y0: 615.5, y1: 787, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'operating_expenses', value: 0.083, width: 6, sourceWidth: 6, targetWidth: 6, y0: 866, y1: 851, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 1745, c1y: 866, c2x: 1790, c2y: 851 } },
      { source: 'operating_profit', target: 'net_profit', value: 0.571, width: 38, sourceWidth: 38, targetWidth: 38, y0: 432, y1: 337, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest_other', value: 0.347, width: 25, sourceWidth: 25, targetWidth: 21, y0: 463.5, y1: 640.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Clover GPV'],
      zh: {
        name: 'Fiserv · 2026 财年第一季度',
        meta: { title: 'Fiserv 2026 财年第一季度利润表', titleSize: 110, titleTextLength: 1860 },
        nodes: {
          merchants_solutions: { label: '商户解决方案', notes: ['同比 +0%', '经营利润率 26%'] },
          financial_solutions: { label: '金融解决方案', notes: ['同比 (5%)', '经营利润率 38%'] },
          corporate: { label: '公司及其他', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 (2%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 (5 个百分点)'] },
          cost_processing: { label: '处理服务成本' },
          cost_product: { label: '产品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 (9 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (5 个百分点)'] },
          interest_other: { label: '利息及其他' },
        },
        layout: { labels: labelsZh },
        annotationsSvg: cards(true),
      },
    },
  });
})();

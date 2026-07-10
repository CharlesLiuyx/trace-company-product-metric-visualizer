/* ====================================================================
 * Fortinet - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/fortinet-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const SOURCE_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const KPI = '#18191d';

  const fortinetLogo = `
    <g font-family="Arial,sans-serif" font-weight="800">
      <text x="0" y="92" font-size="98" letter-spacing="-7" fill="#231f20">F</text>
      <g fill="#ee2e24">
        <rect x="96" y="14" width="25" height="22"/><rect x="128" y="14" width="25" height="22"/><rect x="160" y="14" width="25" height="22"/>
        <rect x="96" y="42" width="25" height="22"/><rect x="128" y="42" width="25" height="22"/><rect x="160" y="42" width="25" height="22"/>
        <rect x="96" y="70" width="25" height="22"/><rect x="128" y="70" width="25" height="22"/><rect x="160" y="70" width="25" height="22"/>
      </g>
      <text x="195" y="92" font-size="88" letter-spacing="-4" textLength="412" lengthAdjust="spacingAndGlyphs" fill="#231f20">RTINET</text>
      <text x="620" y="91" font-size="15" font-weight="500" fill="#231f20">®</text>
    </g>`;

  const billingsCard = (label, growth) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="316" y="1169" width="190" height="157" rx="32" fill="${KPI}"/>
      <text x="411" y="1217" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${label}</text>
      <text x="411" y="1259" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$2.37B</text>
      <text x="411" y="1302" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${growth}</text>
    </g>`;

  const otherIncomeAnnotation = (nameLines) => `
    <g class="sankey-interactive-annotation" data-node="other_income" font-family="Montserrat,Arial,sans-serif">
      <rect x="1515" y="1015" width="165" height="165" fill="#ffffff" fill-opacity="0"/>
      <line x1="1538" y1="1026" x2="1629" y2="1026" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="1590" y="1073" text-anchor="middle" font-size="40" font-weight="700" fill="${GREEN_LABEL}">${nameLines[0]}</text>
      <text x="1590" y="1122" text-anchor="middle" font-size="40" font-weight="700" fill="${GREEN_LABEL}">${nameLines[1]}</text>
      <text x="1590" y="1170" text-anchor="middle" font-size="39" font-weight="400" fill="${GREEN_LABEL}">$1M</text>
    </g>`;
  const annotationsEn = `${billingsCard('Billings', '+18% Y/Y')}${otherIncomeAnnotation(['Other', 'income'])}`;
  const annotationsZh = `${billingsCard('账单额', '同比 +18%')}${otherIncomeAnnotation(['其他', '收入'])}`;
  const block = (x, top, parts, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap == null ? 9 : options.lineGap,
    parts, nameSize: options.nameSize || 40, valueSize: options.valueSize || 39,
    noteSize: options.noteSize || 28, nameColor: options.nameColor,
  });
  const sourceMargin = (x, top, text) => ({
    x, top, anchor: 'end', lines: [{ text, size: 28, weight: 400, color: NOTE }],
  });
  const zhLayoutLabels = {
    product: { blocks: [
      block(409.5, 478, ['value', 'notes']),
      block(300, 600, ['name'], { anchor: 'end' }),
      sourceMargin(300, 650, '毛利率 67%'),
    ] },
    service: { blocks: [
      block(409.5, 787, ['value', 'notes']),
      block(300, 978, ['name'], { anchor: 'end' }),
      sourceMargin(300, 1028, '毛利率 87%'),
    ] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fortinet-q4-fy25',
    name: 'Fortinet · Q4 FY25',
    company: 'Fortinet',
    meta: {
      company: 'Fortinet',
      title: 'Fortinet Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/fortinet-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2225,
      logoWidth: 648,
      logoHeight: 108,
      logoY: 276,
      logoViewBox: '0 0 648 108',
      logoSvg: fortinetLogo,
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
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        product: { x: 374, y: 581, width: 71, height: 123 },
        service: { x: 374, y: 892, width: 71, height: 217 },
        revenue: { x: 841, y: 689, width: 70, height: 341 },
        gross_profit: { x: 1308, y: 580, width: 71, height: 271 },
        cost_of_revenue: { x: 1308, y: 1041, width: 71, height: 69 },
        operating_profit: { x: 1776, y: 478, width: 70, height: 110 },
        operating_expenses: { x: 1776, y: 806, width: 70, height: 159 },
        other_income: { x: 1568, y: 1020, width: 73, height: 4 },
        interest: { x: 2128, y: 495, width: 70, height: 2 },
        net_profit: { x: 2242, y: 361, width: 71, height: 90 },
        tax: { x: 2242, y: 680, width: 71, height: 25 },
        other: { x: 2242, y: 797, width: 71, height: 1 },
        sm: { x: 2242, y: 874, width: 71, height: 112 },
        rnd: { x: 2242, y: 1098, width: 71, height: 35 },
        ga: { x: 2242, y: 1260, width: 71, height: 9 },
      },
      labels: {
        product: { blocks: [
          block(409.5, 478, ['value', 'notes']),
          block(300, 600, ['name'], { anchor: 'end' }),
          sourceMargin(300, 650, '67% gross margin'),
        ] },
        service: { blocks: [
          block(409.5, 787, ['value', 'notes']),
          block(300, 978, ['name'], { anchor: 'end' }),
          sourceMargin(300, 1028, '87% gross margin'),
        ] },
        revenue: { blocks: [block(876, 535, ['name', 'value', 'notes'])] },
        gross_profit: { blocks: [block(1343.5, 389, ['name', 'value', 'notes'], { nameColor: GREEN_LABEL })] },
        cost_of_revenue: { blocks: [block(1343.5, 1125, ['name', 'value'], { nameSize: 38, valueSize: 37, nameColor: RED_LABEL })] },
        operating_profit: { blocks: [block(1811, 286, ['name', 'value', 'notes'], { nameColor: GREEN_LABEL })] },
        operating_expenses: { blocks: [block(1811, 976, ['name', 'value'], { nameSize: 38, valueSize: 37, nameColor: RED_LABEL })] },
        other_income: { blocks: [] },
        interest: { blocks: [block(2163, 511, ['name', 'value'], { nameColor: GREEN_LABEL })] },
        net_profit: { blocks: [block(2353, 339, ['name', 'value', 'notes'], { anchor: 'start', nameColor: GREEN_LABEL })] },
        tax: { blocks: [block(2383, 650, ['name', 'value'], { anchor: 'start', nameSize: 31, valueSize: 31, nameColor: RED_LABEL })] },
        other: { blocks: [block(2398, 760, ['name', 'value'], { anchor: 'start', nameSize: 31, valueSize: 31, nameColor: RED_LABEL })] },
        sm: { blocks: [block(2383, 850, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        rnd: { blocks: [block(2383, 1034, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        ga: { blocks: [block(2383, 1214, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
      },
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 691, notes: ['+20% Y/Y'], linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 1214, notes: ['+12% Y/Y'], linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1905, notes: ['+15% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1516, notes: ['80% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 389 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 626, notes: ['33% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 890 },
      { id: 'other_income', col: 3, order: 2, type: 'profit', label: ['Other', 'income'], value: 1, color: BACKGROUND, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 28, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 506, notes: ['27% margin', '(5pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 145 },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 629, notes: ['33% of revenue', '+1pp Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 205, notes: ['11% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 57, notes: ['3% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 691, sourceWidth: 123, targetWidth: 123, y0: 642.5, y1: 750.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 1214, sourceWidth: 217, targetWidth: 217, y0: 1000.5, y1: 920.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1516, sourceWidth: 271, targetWidth: 271, y0: 824.5, y1: 715.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 389, sourceWidth: 70, targetWidth: 69, y0: 994.5, y1: 1075.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 626, sourceWidth: 110, targetWidth: 110, y0: 635, y1: 533, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 890, sourceWidth: 161, targetWidth: 159, y0: 770.5, y1: 885.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 1, sourceWidth: 4, targetWidth: 1, y0: 1022, y1: 964.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 1684, c1y: 1022, c2x: 1738, c2y: 964.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 478, sourceWidth: 84, targetWidth: 85, y0: 520, y1: 403.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 145, sourceWidth: 25, targetWidth: 25, y0: 574.5, y1: 692.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 3, sourceWidth: 1, targetWidth: 1, y0: 587.5, y1: 797.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK,
        curve: { c1x: 1950, c1y: 587.5, c2x: 2140, c2y: 797.5 } },
      { source: 'interest', target: 'net_profit', value: 28, sourceWidth: 2, targetWidth: 5, y0: 496, y1: 448.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 2214, c1y: 496, c2x: 2222, c2y: 448.5 } },
      { source: 'operating_expenses', target: 'sm', value: 629, sourceWidth: 112, targetWidth: 112, y0: 862, y1: 930, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 205, sourceWidth: 35, targetWidth: 35, y0: 935.5, y1: 1115.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 57, sourceWidth: 12, targetWidth: 9, y0: 959, y1: 1264.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Fortinet · 2025 财年第四季度',
        meta: { title: 'Fortinet 2025 财年第四季度利润表', titleTextLength: 2225 },
        nodes: {
          product: { label: '产品', notes: ['同比 +20%'] },
          service: { label: '服务', notes: ['同比 +12%'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: ['其他', '收入'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 (5 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sm: { label: '销售与营销', notes: ['占收入 33%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();

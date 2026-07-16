/* ====================================================================
 * Fortinet - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/fortinet-q3-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const SOURCE_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008e00';
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
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="309" y="1178" width="190" height="157" rx="32" fill="${KPI}"/>
      <text x="404" y="1226" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${label}</text>
      <text x="404" y="1268" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$1.81B</text>
      <text x="404" y="1311" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${growth}</text>
    </g>`;

  const otherIncomeAnnotation = (nameLines) => `
    <g class="sankey-interactive-annotation" data-node="other_income" font-family="Noto Sans,Arial,sans-serif">
      <rect x="1500" y="1038" width="180" height="170" fill="#ffffff" fill-opacity="0"/>
      <line x1="1548" y1="1056" x2="1629" y2="1056" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="1590" y="1102" text-anchor="middle" font-size="30" font-weight="700" fill="${GREEN_LABEL}">${nameLines[0]}</text>
      <text x="1590" y="1143" text-anchor="middle" font-size="30" font-weight="700" fill="${GREEN_LABEL}">${nameLines[1]}</text>
      <text x="1590" y="1185" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$1M</text>
    </g>`;

  const annotationsEn = `${billingsCard('Billings', '+14% Y/Y')}${otherIncomeAnnotation(['Other', 'income'])}`;
  const annotationsZh = `${billingsCard('账单额', '同比 +14%')}${otherIncomeAnnotation(['其他', '收入'])}`;
  const block = (x, top, parts, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    parts,
    nameSize: options.nameSize || 40,
    valueSize: options.valueSize || 39,
    noteSize: options.noteSize || 28,
    nameColor: options.nameColor,
  });
  const sourceMargin = (x, top, text) => ({
    x,
    top,
    anchor: 'end',
    lines: [{ text, size: 25.5, weight: 400, color: NOTE }],
  });
  const zhLayoutLabels = {
    product: {
      blocks: [
        block(409.5, 470, ['value', 'notes']),
        block(300, 602, ['name'], { anchor: 'end' }),
        sourceMargin(300, 642, '毛利率 68%'),
      ],
    },
    service: {
      blocks: [
        block(409.5, 798, ['value', 'notes']),
        block(300, 998, ['name'], { anchor: 'end' }),
        sourceMargin(300, 1037, '毛利率 87%'),
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fortinet-q3-fy25',
    name: 'Fortinet · Q3 FY25',
    company: 'Fortinet',
    meta: {
      company: 'Fortinet',
      title: 'Fortinet Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/fortinet-q3-fy25.png', width: 2667, height: 1500 },
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
        product: { x: 374, y: 562, width: 71, height: 128 },
        service: { x: 374, y: 890, width: 71, height: 265 },
        revenue: { x: 841, y: 674, width: 70, height: 391 },
        gross_profit: { x: 1307, y: 560, width: 71, height: 316 },
        cost_of_revenue: { x: 1307, y: 1086, width: 71, height: 75 },
        operating_profit: { x: 1776, y: 463, width: 70, height: 123 },
        operating_expenses: { x: 1776, y: 820, width: 70, height: 192 },
        other_income: { x: 1552, y: 1054, width: 73, height: 3 },
        interest: { x: 2098, y: 316, width: 70, height: 8 },
        other: { x: 2098, y: 518, width: 70, height: 3 },
        net_profit: { x: 2242, y: 361, width: 71, height: 108 },
        tax: { x: 2242, y: 691, width: 71, height: 27 },
        sm: { x: 2242, y: 820, width: 71, height: 133 },
        rnd: { x: 2242, y: 1084, width: 71, height: 46 },
        ga: { x: 2242, y: 1275, width: 71, height: 15 },
      },
      labels: {
        product: {
          blocks: [
            block(409.5, 470, ['value', 'notes']),
            block(300, 602, ['name'], { anchor: 'end' }),
            sourceMargin(300, 642, '68% gross margin'),
          ],
        },
        service: {
          blocks: [
            block(409.5, 798, ['value', 'notes']),
            block(300, 998, ['name'], { anchor: 'end' }),
            sourceMargin(300, 1037, '87% gross margin'),
          ],
        },
        revenue: { blocks: [block(876, 532, ['name', 'value', 'notes'])] },
        gross_profit: { blocks: [block(1342.5, 377, ['name', 'value', 'notes'], { nameColor: GREEN_LABEL })] },
        cost_of_revenue: { blocks: [block(1342.5, 1175, ['name', 'value'], { nameSize: 38, valueSize: 37, nameColor: RED_LABEL })] },
        operating_profit: { blocks: [block(1811, 279, ['name', 'value', 'notes'], { nameColor: GREEN_LABEL })] },
        operating_expenses: { blocks: [block(1811, 1024, ['name', 'value'], { nameSize: 38, valueSize: 37, nameColor: RED_LABEL })] },
        other_income: { blocks: [] },
        interest: { blocks: [block(2133, 231, ['name', 'value'], { nameSize: 31, valueSize: 31, nameColor: GREEN_LABEL })] },
        other: { blocks: [block(2133, 543, ['name', 'value'], { nameSize: 31, valueSize: 31, nameColor: GREEN_LABEL })] },
        net_profit: { blocks: [block(2353, 365, ['name', 'value', 'notes'], { anchor: 'start', nameColor: GREEN_LABEL })] },
        tax: { blocks: [block(2383, 669, ['name', 'value'], { anchor: 'start', nameSize: 31, valueSize: 31, nameColor: RED_LABEL })] },
        sm: { blocks: [block(2383, 850, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        rnd: { blocks: [block(2383, 1064, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        ga: { blocks: [block(2383, 1241, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
      },
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Products', value: 559, notes: ['+18% Y/Y'], linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 1166, notes: ['+13% Y/Y'], linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1725, notes: ['+14% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1393, notes: ['81% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 332 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 547, notes: ['32% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 846 },
      { id: 'other_income', col: 3, order: 2, type: 'profit', label: ['Other', 'income'], value: 1, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 35, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 13, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 474, notes: ['27% margin', '(8pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 121 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 584, notes: ['34% of revenue', '(0pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 202, notes: ['12% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 61, notes: ['4% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 559, sourceWidth: 128, targetWidth: 128, y0: 626, y1: 738, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 1166, sourceWidth: 265, targetWidth: 263, y0: 1022.5, y1: 933.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1393, sourceWidth: 316, targetWidth: 316, y0: 832, y1: 718, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 332, sourceWidth: 75, targetWidth: 75, y0: 1027.5, y1: 1123.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 547, sourceWidth: 123, targetWidth: 123, y0: 621.5, y1: 524.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 846, sourceWidth: 193, targetWidth: 192, y0: 779.5, y1: 916, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 1, sourceWidth: 3, targetWidth: 1, y0: 1055.5, y1: 1011.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 1685, c1y: 1055.5, c2x: 1738, c2y: 1011.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 426, sourceWidth: 96, targetWidth: 97, y0: 511, y1: 417.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 121, sourceWidth: 27, targetWidth: 27, y0: 572.5, y1: 704.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 35, sourceWidth: 8, targetWidth: 8, y0: 320, y1: 365, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK,
        curve: { c1x: 2202, c1y: 320, c2x: 2220, c2y: 365 } },
      { source: 'other', target: 'net_profit', value: 13, sourceWidth: 3, targetWidth: 3, y0: 519.5, y1: 467.5, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK,
        curve: { c1x: 2202, c1y: 519.5, c2x: 2220, c2y: 467.5 } },
      { source: 'operating_expenses', target: 'sm', value: 584, sourceWidth: 133, targetWidth: 133, y0: 886.5, y1: 886.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 202, sourceWidth: 46, targetWidth: 46, y0: 976, y1: 1107, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 61, sourceWidth: 14, targetWidth: 15, y0: 1005, y1: 1282.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Fortinet · 2025 财年第三季度',
        meta: { title: 'Fortinet 2025 财年第三季度利润表', titleTextLength: 2225 },
        nodes: {
          product: { label: '产品', notes: ['同比 +18%'] },
          service: { label: '服务', notes: ['同比 +13%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: ['其他', '收入'] },
          interest: { label: '利息' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 (8 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 34%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 4%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();

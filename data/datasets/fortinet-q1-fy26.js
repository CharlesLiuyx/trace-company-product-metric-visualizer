/* ====================================================================
 * Fortinet - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/fortinet-q1-fy26.png as a fixed
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
      <rect x="316" y="1169" width="190" height="157" rx="32" fill="${KPI}"/>
      <text x="411" y="1217" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${label}</text>
      <text x="411" y="1259" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$2.1B</text>
      <text x="411" y="1302" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${growth}</text>
    </g>`;

  const otherIncomeAnnotation = (nameLines) => `
    <g class="sankey-interactive-annotation" data-node="other_income" font-family="Noto Sans,Arial,sans-serif">
      <rect x="1515" y="1015" width="165" height="165" fill="#ffffff" fill-opacity="0"/>
      <line x1="1553" y1="1036" x2="1652" y2="1036" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="1590" y="1083" text-anchor="middle" font-size="30" font-weight="700" fill="${GREEN_LABEL}">${nameLines[0]}</text>
      <text x="1590" y="1124" text-anchor="middle" font-size="30" font-weight="700" fill="${GREEN_LABEL}">${nameLines[1]}</text>
      <text x="1590" y="1166" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$1M</text>
    </g>`;
  const annotationsEn = `${billingsCard('Billings', '+31% Y/Y')}${otherIncomeAnnotation(['Other', 'income'])}`;
  const annotationsZh = `${billingsCard('账单额', '同比 +31%')}${otherIncomeAnnotation(['其他', '收入'])}`;
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
      block(409.5, 468, ['value', 'notes']),
      block(300, 600, ['name'], { anchor: 'end' }),
      sourceMargin(300, 650, '毛利率 68%'),
    ] },
    service: { blocks: [
      block(409.5, 787, ['value', 'notes']),
      block(300, 978, ['name'], { anchor: 'end' }),
      sourceMargin(300, 1028, '毛利率 87%'),
    ] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fortinet-q1-fy26',
    name: 'Fortinet · Q1 FY26',
    company: 'Fortinet',
    meta: {
      company: 'Fortinet',
      title: 'Fortinet Q1 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/fortinet-q1-fy26.png', width: 2667, height: 1500 },
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
        product: { x: 374, y: 556, width: 71, height: 136 },
        service: { x: 374, y: 894, width: 71, height: 255 },
        revenue: { x: 841, y: 687, width: 70, height: 392 },
        gross_profit: { x: 1308, y: 555, width: 71, height: 314 },
        cost_of_revenue: { x: 1308, y: 1072, width: 71, height: 76 },
        operating_profit: { x: 1773, y: 456, width: 70, height: 122 },
        operating_expenses: { x: 1776, y: 809, width: 70, height: 192 },
        other_income: { x: 1552, y: 1036, width: 73, height: 1 },
        other: { x: 2098, y: 501, width: 70, height: 14 },
        net_profit: { x: 2242, y: 338, width: 71, height: 111 },
        tax: { x: 2242, y: 680, width: 71, height: 24 },
        sm: { x: 2242, y: 838, width: 71, height: 134 },
        rnd: { x: 2242, y: 1103, width: 71, height: 43 },
        ga: { x: 2242, y: 1276, width: 71, height: 8 },
      },
      labels: {
        product: { blocks: [
          block(409.5, 468, ['value', 'notes']),
          block(300, 600, ['name'], { anchor: 'end' }),
          sourceMargin(300, 650, '68% gross margin'),
        ] },
        service: { blocks: [
          block(409.5, 787, ['value', 'notes']),
          block(300, 978, ['name'], { anchor: 'end' }),
          sourceMargin(300, 1028, '87% gross margin'),
        ] },
        revenue: { blocks: [block(876, 535, ['name', 'value', 'notes'])] },
        gross_profit: { blocks: [block(1343.5, 364, ['name', 'value', 'notes'], { nameColor: GREEN_LABEL })] },
        cost_of_revenue: { blocks: [block(1343.5, 1156, ['name', 'value'], { nameSize: 38, valueSize: 37, nameColor: RED_LABEL })] },
        operating_profit: { blocks: [block(1808, 276, ['name', 'value', 'notes'], { nameColor: GREEN_LABEL })] },
        operating_expenses: { blocks: [block(1811, 1012, ['name', 'value'], { nameSize: 38, valueSize: 37, nameColor: RED_LABEL })] },
        other_income: { blocks: [] },
        other: { blocks: [block(2133, 528, ['name', 'value'], { nameColor: GREEN_LABEL })] },
        net_profit: { blocks: [block(2353, 322, ['name', 'value', 'notes'], { anchor: 'start', nameColor: GREEN_LABEL })] },
        tax: { blocks: [block(2383, 650, ['name', 'value'], { anchor: 'start', nameSize: 31, valueSize: 31, nameColor: RED_LABEL })] },
        sm: { blocks: [block(2383, 850, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        rnd: { blocks: [block(2383, 1046, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        ga: { blocks: [block(2383, 1214, ['name', 'value', 'notes'], { anchor: 'start', nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
      },
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Products', value: 645, notes: ['+41% Y/Y'], linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 1205, notes: ['+11% Y/Y'], linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1850, notes: ['+20% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1485, notes: ['80% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 365 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 580, notes: ['31% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 905 },
      { id: 'other_income', col: 3, order: 2, type: 'profit', label: ['Other', 'income'], value: 1, color: BACKGROUND, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 77, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 535, notes: ['29% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 122 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 636, notes: ['34% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 214, notes: ['12% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 56, notes: ['3% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 645, sourceWidth: 136, targetWidth: 136, y0: 624, y1: 755, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 1205, sourceWidth: 255, targetWidth: 256, y0: 1021.5, y1: 951, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1485, sourceWidth: 314, targetWidth: 314, y0: 844, y1: 712, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 365, sourceWidth: 78, targetWidth: 76, y0: 1040, y1: 1110, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 580, sourceWidth: 122, targetWidth: 122, y0: 616, y1: 517, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 905, sourceWidth: 192, targetWidth: 191, y0: 773, y1: 904.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 1, sourceWidth: 1, targetWidth: 1, y0: 1036.5, y1: 1000.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 1693, c1y: 1036.5, c2x: 1738, c2y: 1000.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 458, sourceWidth: 97, targetWidth: 97, y0: 504.5, y1: 386.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 122, sourceWidth: 24, targetWidth: 24, y0: 566, y1: 692, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 77, sourceWidth: 14, targetWidth: 14, y0: 508, y1: 442, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 2200, c1y: 508, c2x: 2222, c2y: 442 } },
      { source: 'operating_expenses', target: 'sm', value: 636, sourceWidth: 134, targetWidth: 134, y0: 876, y1: 905, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 214, sourceWidth: 43, targetWidth: 43, y0: 964.5, y1: 1124.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 56, sourceWidth: 15, targetWidth: 8, y0: 993.5, y1: 1280, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Fortinet · 2026 财年第一季度',
        meta: { title: 'Fortinet 2026 财年第一季度利润表', titleTextLength: 2225 },
        nodes: {
          product: { label: '产品', notes: ['同比 +41%'] },
          service: { label: '服务', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +2 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: ['其他', '收入'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 34%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();

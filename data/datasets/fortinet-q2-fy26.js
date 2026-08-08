/* ====================================================================
 * Fortinet - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/fortinet-q2-fy26.png as a measured,
 * fixed-layout d3-sankey with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const SOURCE_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const MICRO_GREEN_LABEL = '#008e00';
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
      <rect x="241" y="1173" width="192" height="159" rx="32" fill="${KPI}"/>
      <text x="337" y="1221" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${label}</text>
      <text x="337" y="1263" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$2.37B</text>
      <text x="337" y="1306" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${growth}</text>
    </g>`;

  const otherIncomeAnnotation = (name) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="operating_expenses"
      data-link-anchor-x="1698"
      data-link-anchor-y="959"
      font-family="Noto Sans,Arial,sans-serif">
      <path d="M1553 984H1630C1683 984 1706 936 1768 936"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="1598" y="1029" text-anchor="middle" font-size="30" font-weight="700" fill="${MICRO_GREEN_LABEL}">${name}</text>
      <text x="1598" y="1070" text-anchor="middle" font-size="30" font-weight="400" fill="${MICRO_GREEN_LABEL}">$1M</text>
    </g>`;

  const annotationsEn = `${billingsCard('Billings', '+33% Y/Y')}${otherIncomeAnnotation('Other')}`;
  const annotationsZh = `${billingsCard('账单额', '同比 +33%')}${otherIncomeAnnotation('其他')}`;

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
  const sourceLabels = (zh) => ({
    product: { blocks: [
      block(401.5, 438, ['value', 'notes']),
      {
        x: 330,
        top: 559,
        anchor: 'end',
        lineGap: 5,
        semanticRole: 'centered-side-label',
        lines: [
          { text: zh ? '产品' : 'Products', size: 40, weight: 800, color: BLACK },
          { text: zh ? '毛利率 70%' : '70% gross margin', size: 28, weight: 400, color: NOTE },
        ],
      },
    ] },
    service: { blocks: [
      block(401.5, 775, ['value', 'notes']),
      {
        x: 325,
        top: 932,
        anchor: 'end',
        lineGap: 5,
        semanticRole: 'centered-side-label',
        lines: [
          { text: zh ? '服务' : 'Service', size: 40, weight: 800, color: BLACK },
          { text: zh ? '毛利率 87%' : '87% gross margin', size: 28, weight: 400, color: NOTE },
        ],
      },
    ] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fortinet-q2-fy26',
    name: 'Fortinet · Q2 FY26',
    company: 'Fortinet',
    meta: {
      company: 'Fortinet',
      title: 'Fortinet Q2 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/fortinet-q2-fy26.png', width: 2667, height: 1500 },
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
      routes: {
        other_income: { x: 1553, y: 984, width: 77, height: 1 },
      },
      nodes: {
        product: { x: 366, y: 534, width: 71, height: 126 },
        service: { x: 366, y: 866, width: 71, height: 209 },
        revenue: { x: 833, y: 664, width: 70, height: 336 },
        gross_profit: { x: 1300, y: 532, width: 71, height: 271 },
        cost_of_revenue: { x: 1300, y: 1013, width: 71, height: 65 },
        operating_profit: { x: 1768, y: 435, width: 70, height: 111 },
        operating_expenses: { x: 1768, y: 780, width: 70, height: 155 },
        other: { x: 2110, y: 470, width: 70, height: 4 },
        net_profit: { x: 2234, y: 312, width: 71, height: 99 },
        tax: { x: 2234, y: 648, width: 71, height: 16 },
        sm: { x: 2234, y: 830, width: 71, height: 109 },
        rnd: { x: 2234, y: 1063, width: 71, height: 35 },
        ga: { x: 2234, y: 1240, width: 71, height: 8 },
      },
      labels: {
        ...sourceLabels(false),
        revenue: { blocks: [block(868.5, 520, ['name', 'value', 'notes'])] },
        gross_profit: { blocks: [block(1335.5, 354, ['name', 'value', 'notes'], { nameColor: GREEN_LABEL })] },
        cost_of_revenue: { blocks: [block(1335.5, 1093, ['name', 'value'], { nameSize: 38, valueSize: 37, nameColor: RED_LABEL })] },
        operating_profit: { blocks: [block(1803, 256, ['name', 'value', 'notes'], { nameColor: GREEN_LABEL })] },
        operating_expenses: { blocks: [block(1803, 952, ['name', 'value'], { nameSize: 38, valueSize: 37, nameColor: RED_LABEL })] },
        other: { blocks: [block(2146, 485, ['name', 'value'], { nameSize: 31, valueSize: 31, lineGap: 7, nameColor: MICRO_GREEN_LABEL })] },
        net_profit: { blocks: [block(2348, 306, ['name', 'value', 'notes'], { anchor: 'start', nameColor: GREEN_LABEL })] },
        tax: { blocks: [block(2441, 616, ['name', 'value'], { nameSize: 31, valueSize: 31, nameColor: RED_LABEL })] },
        sm: { blocks: [block(2441, 835, ['name', 'value', 'notes'], { nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        rnd: { blocks: [block(2442, 1022, ['name', 'value', 'notes'], { nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        ga: { blocks: [block(2441, 1209, ['name', 'value', 'notes'], { nameSize: 31, valueSize: 31, noteSize: 28, nameColor: RED_LABEL })] },
        other_income: { blocks: [] },
      },
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 1, valueText: '$1M', type: 'profit', labelColor: MICRO_GREEN_LABEL },
    ],
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Products', value: 773, notes: ['+52% Y/Y'], linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 1275, valueText: '$1,275M', notes: ['+14% Y/Y'], linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2048, valueText: '$2,048M', notes: ['+26% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1643, valueText: '$1,643M', notes: ['80% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 405 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 689, notes: ['34% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 954 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 32, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 606, notes: ['30% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 115 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 669, notes: ['33% of revenue', '(4pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 225, notes: ['11% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 61, notes: ['3% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 773, sourceWidth: 126, targetWidth: 127, y0: 597, y1: 727.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 1275, sourceWidth: 209, targetWidth: 209, y0: 970.5, y1: 895.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1643, sourceWidth: 271, targetWidth: 271, y0: 799.5, y1: 667.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 405, sourceWidth: 65, targetWidth: 65, y0: 967.5, y1: 1045.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 689, sourceWidth: 113, targetWidth: 111, y0: 588.5, y1: 490.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 954, sourceWidth: 158, targetWidth: 154, y0: 724, y1: 857, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'operating_expenses', value: 1, sourceWidth: 1, targetWidth: 1, y0: 984, y1: 934.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 574, sourceWidth: 95, targetWidth: 95, y0: 482.5, y1: 359.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 115, sourceWidth: 16, targetWidth: 16, y0: 538, y1: 656, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 32, sourceWidth: 4, targetWidth: 4, y0: 472, y1: 409, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        curve: { c1x: 2200, c1y: 472, c2x: 2215, c2y: 409 } },
      { source: 'operating_expenses', target: 'sm', value: 669, sourceWidth: 109, targetWidth: 109, y0: 834.5, y1: 884.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 225, sourceWidth: 36, targetWidth: 35, y0: 907, y1: 1080.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 61, sourceWidth: 10, targetWidth: 8, y0: 930, y1: 1244, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Fortinet · 2026 财年第二季度',
        meta: { title: 'Fortinet 2026 财年第二季度利润表', titleTextLength: 2225 },
        nodes: {
          product: { label: '产品', notes: ['同比 +52%'] },
          service: { label: '服务', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +26%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 +6 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 33%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 (2 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
        nonNodeMetrics: { other_income: { label: '其他' } },
        layout: { labels: sourceLabels(true) },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();

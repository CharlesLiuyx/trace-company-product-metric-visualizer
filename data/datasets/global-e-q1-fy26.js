/* ====================================================================
 * Global-e - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/global-e-q1-fy26.png as a fixed
 * d3-sankey layout with source-measured SVG geometry and vector branding.
 * ==================================================================== */
(function () {
  const DARK = '#404145';
  const SOURCE_LINK = '#a7a7a9';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2da02b';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#a5cea2';
  const RED = '#cc0000';
  const RED_LABEL = '#941000';
  const RED_LINK = '#e59d97';
  const ORANGE = '#f15b2c';

  const globalELogoSvg = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="15" y="150" font-size="180" font-weight="500" fill="${DARK}"
        textLength="527" lengthAdjust="spacingAndGlyphs">Global</text>
      <circle cx="567" cy="88" r="64" fill="${ORANGE}"/>
      <circle cx="567" cy="88" r="43" fill="#f2f2f2"/>
      <path d="M521 105 L611 62" fill="none" stroke="${ORANGE}" stroke-width="18" stroke-linecap="butt"/>
      <rect x="610" y="75" width="24" height="24" fill="#f2f2f2"/>
    </g>`;

  const kpiCard = (growth) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="185" y="1157" width="188" height="147" rx="31" fill="${ORANGE}"/>
      <text x="279" y="1201" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">GMV</text>
      <text x="279" y="1243" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">$1.7B</text>
      <text x="279" y="1284" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${growth}</text>
    </g>`;

  const annotationsEn = `
    ${kpiCard('+40% Y/Y')}
    <line x1="2240" y1="566" x2="2311" y2="566" stroke="${RED_LINK}" stroke-width="2"/>
    <text x="67" y="1340" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">GMV = Gross Merchandise Value</text>`;

  const annotationsZh = `
    ${kpiCard('同比 +40%')}
    <line x1="2240" y1="566" x2="2311" y2="566" stroke="${RED_LINK}" stroke-width="2"/>
    <text x="67" y="1340" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">GMV = 商品交易总额</text>`;

  const zhLayoutLabels = {
    service_fees: { blocks: [
      { x: 403, top: 439, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '同比 +44%', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 318, top: 591, anchor: 'end', lines: [{ text: '服务费', size: 40, weight: 800 }] },
    ] },
    fulfillment: { blocks: [
      { x: 403, top: 842, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '同比 +24%', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 310, top: 1006, anchor: 'end', lines: [{ text: '履约服务', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 871, top: 529, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +33%', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1338.5, top: 342, anchor: 'middle', lineGap: 9, lines: [
      { text: '毛利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 46%', size: 28, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1338.5, top: 1135, anchor: 'middle', lineGap: 8, lines: [
      { text: '收入', size: 35, weight: 800 }, { text: '成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1806.5, top: 233, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 13%', size: 28, weight: 400, color: NOTE }, { text: '同比 +23 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1801.5, top: 852, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2340, top: 268, anchor: 'start', lineGap: 9, lines: [
      { text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 12%', size: 28, weight: 400, color: NOTE }, { text: '同比 +21 个百分点', size: 27, weight: 400, color: NOTE },
    ] }] },
    other: { blocks: [{ x: 2388, top: 523, anchor: 'start', lineGap: 8, lines: [
      { text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    sm: { blocks: [{ x: 2388, top: 773, anchor: 'start', lineGap: 8, lines: [
      { text: '销售与营销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 14%', size: 28, weight: 400, color: NOTE }, { text: '同比 (20 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: 2388, top: 979, anchor: 'start', lineGap: 8, lines: [
      { text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 13%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2388, top: 1183, anchor: 'start', lineGap: 8, lines: [
      { text: '一般及行政', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 6%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 27, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'global-e-q1-fy26',
    name: 'Global-e · Q1 FY26',
    company: 'Global-e',
    meta: {
      company: 'Global-e', title: 'Global-e Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/global-e-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2248,
      hidePeriodStamp: true,
      logoWidth: 655, logoHeight: 175, logoY: 256, logoViewBox: '0 0 655 175', logoSvg: globalELogoSvg,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        service_fees: { x: 368, y: 539, width: 70, height: 164 }, fulfillment: { x: 368, y: 941, width: 70, height: 179 },
        revenue: { x: 836, y: 683, width: 70, height: 346 }, gross_profit: { x: 1303, y: 535, width: 71, height: 156 },
        cost_of_revenue: { x: 1303, y: 932, width: 71, height: 188 }, operating_profit: { x: 1772, y: 427, width: 69, height: 42 },
        operating_expenses: { x: 1767, y: 727, width: 69, height: 110 }, net_profit: { x: 2240, y: 310, width: 70, height: 40 },
        other: { x: 2240, y: 565, width: 70, height: 2 }, sm: { x: 2240, y: 819, width: 70, height: 46 },
        rnd: { x: 2240, y: 1023, width: 70, height: 42 }, ga: { x: 2240, y: 1222, width: 70, height: 17 },
      },
      labels: {
        service_fees: { blocks: [
          { x: 403, top: 439, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+44% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 318, top: 591, anchor: 'end', lines: [{ text: 'Service fees', size: 40, weight: 800 }] },
        ] },
        fulfillment: { blocks: [
          { x: 403, top: 842, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 310, top: 1006, anchor: 'end', lines: [{ text: 'Fulfillment', size: 40, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 871, top: 529, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+33% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1338.5, top: 342, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '46% margin', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1338.5, top: 1135, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 35, weight: 800 }, { text: 'revenue', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1806.5, top: 233, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '13% margin', size: 28, weight: 400, color: NOTE }, { text: '+23pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1801.5, top: 852, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2340, top: 268, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '12% margin', size: 28, weight: 400, color: NOTE }, { text: '+21pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        other: { blocks: [{ x: 2388, top: 523, anchor: 'start', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        sm: { blocks: [{ x: 2388, top: 773, anchor: 'start', lineGap: 8, lines: [{ text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '14% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(20pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: 2388, top: 979, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '13% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: 2388, top: 1183, anchor: 'start', lineGap: 8, lines: [{ text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '6% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'service_fees', col: 0, order: 0, type: 'source', label: 'Service fees', value: 121, notes: ['+44% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'fulfillment', col: 0, order: 1, type: 'source', label: 'Fulfillment', value: 131, notes: ['+24% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 252, notes: ['+33% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 115, notes: ['46% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 137 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 33, notes: ['13% margin', '+23pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 82 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 30, notes: ['12% margin', '+21pp Y/Y'] },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 3, color: '#f2f2f2' },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'Sales & marketing', value: 34, notes: ['14% of revenue', '(20pp) Y/Y'] },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'Research & development', value: 33, notes: ['13% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'General & administrative', value: 15, notes: ['6% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'service_fees', target: 'revenue', value: 121, sourceWidth: 164, targetWidth: 166, y0: 621, y1: 766, linkTint: SOURCE_LINK },
      { source: 'fulfillment', target: 'revenue', value: 131, sourceWidth: 179, targetWidth: 180, y0: 1030.5, y1: 939, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 115, sourceWidth: 156, targetWidth: 156, y0: 761, y1: 613, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 137, sourceWidth: 190, targetWidth: 188, y0: 934, y1: 1026, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 33, sourceWidth: 42, targetWidth: 42, y0: 556, y1: 448, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 82, sourceWidth: 114, targetWidth: 110, y0: 634, y1: 782, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 30, width: 40, y0: 447, y1: 330, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 3, sourceWidth: 2, targetWidth: 2, y0: 468, y1: 566, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 34, sourceWidth: 47, targetWidth: 46, y0: 750.5, y1: 842, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 33, sourceWidth: 44, targetWidth: 42, y0: 796, y1: 1044, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 15, sourceWidth: 19, targetWidth: 17, y0: 827.5, y1: 1230.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Global-e · 2026 财年第一季度',
        meta: { title: 'Global-e 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 2248 },
        nodes: {
          service_fees: { label: '服务费', notes: ['同比 +44%'] }, fulfillment: { label: '履约服务', notes: ['同比 +24%'] }, revenue: { label: '收入', notes: ['同比 +33%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +23 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +21 个百分点'] }, other: { label: '其他' },
          sm: { label: '销售与营销', notes: ['占收入 14%', '同比 (20 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 6%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels }, annotationsSvg: annotationsZh,
      },
    },
  });
})();

/* McDonald's - Q1 FY25 income statement ($B), reconstructed from the
 * measured source image as a fixed SVG Sankey. */
(function () {
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666';
  const GOLD = '#ffc72c';
  const ARCH_GOLD = '#ffc000';
  const GOLD_LINK = '#f7df99';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const SHORT_RED = '#e0c9c9';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const arches = '<path fill="' + ARCH_GOLD + '" d="M0 199V100C0 42 29 0 70 0c25 0 46 17 58 48C140 17 161 0 186 0c41 0 70 42 70 100v99h-31v-99c0-37-16-64-40-64s-40 27-40 64v99H88v-99c0-37-16-64-40-64S31 63 31 100v99z"/>';
  const card = (x, width, title, lines, fontFamily = 'Noto Sans,Arial,sans-serif') =>
    '<g><rect x="' + x + '" y="1199" width="' + width + '" height="148" rx="29" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="1254" text-anchor="middle" font-family="' + fontFamily + '" font-size="29" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (lines.length === 1 ? 1304 : 1290 + index * 31) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="24" fill="#fff">' + line + '</text>').join('') +
    '</g>';
  const annotations = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(150, 271, 'Global', ['comparable sales', '(1%) Y/Y']) +
    card(435, 273, 'Systemwide sales', ['(1%) Y/Y']) +
    '</g>';
  const annotationsZh = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(150, 271, '全球', ['可比销售额', '同比 (1%)']) +
    card(435, 273, '系统销售额', ['同比 (1%)']) +
    '</g>';

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 349, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(9%) Y/Y', size: 28, color: NOTE }] },
      { x: 199, top: 432, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '13% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 656, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(2%) Y/Y', size: 28, color: NOTE }] },
      { x: 197, top: 805, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '83% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1038, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+78% Y/Y', size: 28, color: NOTE }] },
      { x: 202, top: 1080, anchor: 'middle', semanticRole: 'grouped-side-label', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 887, top: 524, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '(3%) Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1349, top: 374, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '56% margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1349, top: 1138, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1839, top: 248, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '44% margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [{ x: 2174, top: 495, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1839, top: 861, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2449, top: 300, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '31% margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 643, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2451, top: 771, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2451, top: 933, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2451, top: 1065, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_opex: { blocks: [{ x: 2451, top: 1228, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 349, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (9%)', size: 28, color: NOTE }] },
      { x: 199, top: 456, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 13%', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 656, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (2%)', size: 28, color: NOTE }] },
      { x: 197, top: 808, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 83%', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1038, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +78%', size: 28, color: NOTE }] },
      { x: 202, top: 1083, anchor: 'middle', semanticRole: 'grouped-side-label', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 887, top: 524, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 (3%)', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1349, top: 374, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 56%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1349, top: 1138, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1839, top: 248, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 44%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [{ x: 2174, top: 495, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1839, top: 861, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2449, top: 286, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 31%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 643, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2451, top: 765, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2451, top: 924, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2451, top: 1065, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_opex: { blocks: [{ x: 2451, top: 1228, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q1-fy25',
    name: "McDonald's · Q1 FY25",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q1 FY25 Income Statement", period: 'Q1 FY25', periodNote: 'Ending Mar. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 132, titleWeight: 800, titleTextLength: 2428,
      hidePeriodStamp: true,
      logoWidth: 228, logoHeight: 199, logoY: 271, logoViewBox: '0 0 256 199', logoSvg: arches,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: GOLD, label: '#050505' }, hub: { node: GOLD, label: '#050505' }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GOLD_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    nodes: [
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.1, notes: ['(9%) Y/Y', '13% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 3.7, notes: ['(2%) Y/Y', '83% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.2, notes: ['+78% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.0, valueText: '$6.0B', notes: ['(3%) Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.3, notes: ['56% margin', '+0pp Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.6 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 2.6, notes: ['44% margin', '+0pp Y/Y'] },
      { id: 'operating_other_income', type: 'profit', label: 'Other', value: 0.1 },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.7 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 1.9, notes: ['31% margin', '+0pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
      { id: 'other_opex', type: 'cost', label: 'Other', value: 0.007, valueText: '($7M)', color: SHORT_RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.1, sourceWidth: 126, targetWidth: 128, y0: 497, y1: 736, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 3.7, sourceWidth: 217, targetWidth: 219, y0: 853.5, y1: 909.5, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 8, targetWidth: 7, y0: 1142, y1: 1022.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.3, sourceWidth: 199, targetWidth: 197, y0: 771.5, y1: 651.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.6, sourceWidth: 155, targetWidth: 155, y0: 948.5, y1: 1044.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 158, targetWidth: 155, y0: 632, y1: 506.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 39, targetWidth: 40, y0: 730.5, y1: 826, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 108, targetWidth: 108, y0: 483, y1: 372, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 27, targetWidth: 26, y0: 550.5, y1: 682, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 20, targetWidth: 20, y0: 574, y1: 811, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_other_income', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 2, y0: 479.5, y1: 427, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 0.6, sourceWidth: 32, targetWidth: 31, y0: 822, y1: 976.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 6, targetWidth: 5, y0: 841, y1: 1130.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.007, sourceWidth: 2, targetWidth: 2, y0: 845, y1: 1262, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    layout: {
      scale: 59,
      nodes: {
        company_owned_restaurants: { x: 382, y: 434, width: 71, height: 126 },
        franchised_restaurants: { x: 382, y: 745, width: 71, height: 217 },
        other_revenue: { x: 382, y: 1138, width: 71, height: 8 },
        revenue: { x: 852, y: 672, width: 70, height: 354 },
        gross_profit: { x: 1313, y: 553, width: 72, height: 197 },
        restaurant_expenses: { x: 1313, y: 967, width: 72, height: 155 },
        operating_profit: { x: 1804, y: 429, width: 70, height: 155 },
        operating_other_income: { x: 2139, y: 479, width: 70, height: 1 },
        operating_expenses: { x: 1804, y: 806, width: 70, height: 40 },
        net_profit: { x: 2250, y: 318, width: 71, height: 110 },
        tax: { x: 2250, y: 669, width: 71, height: 26 },
        interest: { x: 2250, y: 801, width: 71, height: 20 },
        other_sga: { x: 2250, y: 961, width: 71, height: 31 },
        depreciation_amortization: { x: 2250, y: 1128, width: 71, height: 5 },
        other_opex: { x: 2250, y: 1261, width: 71, height: 2 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2025 财年第一季度',
        meta: { title: '麦当劳 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月' },
        annotationsSvg: annotationsZh,
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 (9%)', '毛利率 13%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 (2%)', '毛利率 83%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +78%', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 (3%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +0 个百分点'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 44%', '同比 +0 个百分点'] },
          operating_other_income: { label: '其他' },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          other_sga: { label: '其他销售、一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
          other_opex: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

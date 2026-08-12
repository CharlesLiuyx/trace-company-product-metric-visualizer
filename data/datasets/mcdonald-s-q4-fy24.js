/* McDonald's - Q4 FY24 income statement ($B), reconstructed from the
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
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const arches = '<path fill="' + ARCH_GOLD + '" d="M0 199V100C0 42 29 0 70 0c25 0 46 17 58 48C140 17 161 0 186 0c41 0 70 42 70 100v99h-31v-99c0-37-16-64-40-64s-40 27-40 64v99H88v-99c0-37-16-64-40-64S31 63 31 100v99z"/>';
  const card = (x, width, title, lines, fontFamily = 'Noto Sans,Arial,sans-serif') =>
    '<g><rect x="' + x + '" y="1199" width="' + width + '" height="148" rx="29" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="1257" text-anchor="middle" font-family="' + fontFamily + '" font-size="29" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (lines.length === 1 ? 1307 : 1293 + index * 31) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="24" fill="#fff">' + line + '</text>').join('') +
    '</g>';
  const annotations = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(150, 271, 'Global', ['comparable sales', '+0.4% Y/Y']) +
    card(435, 273, 'Systemwide sales', ['+2% Y/Y']) +
    '</g>';
  const annotationsZh = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(150, 271, '全球', ['可比销售额', '同比 +0.4%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    card(435, 273, '系统销售额', ['同比 +2%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    '</g>';

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 382, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(7%) Y/Y', size: 28, color: NOTE }] },
      { x: 206, top: 437, anchor: 'middle', lineGap: 18, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '14% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 660, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+2% Y/Y', size: 28, color: NOTE }] },
      { x: 200, top: 795, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '83% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1036, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+89% Y/Y', size: 28, color: NOTE }] },
      { x: 217, top: 1078, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE, textLength: 306 }] },
    ] },
    revenue: { blocks: [{ x: 885, top: 530, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '(0%) Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1359, top: 384, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '58% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1355, top: 1184, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1841, top: 282, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '45% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    other_income: { blocks: [{ x: 2158, top: 556, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1840, top: 976, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2442, top: 340, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '32% margin', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 725, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2452, top: 843, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2452, top: 1033, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2458, top: 1189, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  const labelsZh = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 382, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (7%)', size: 28, color: NOTE }] },
      { x: 206, top: 461, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 14%', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 660, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +2%', size: 28, color: NOTE }] },
      { x: 200, top: 798, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 83%', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1036, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +89%', size: 28, color: NOTE }] },
      { x: 217, top: 1081, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 885, top: 530, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 (0%)', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1359, top: 384, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 58%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1355, top: 1184, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1841, top: 282, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 45%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    other_income: { blocks: [{ x: 2158, top: 556, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1840, top: 976, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2442, top: 326, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 32%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 725, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2452, top: 837, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2452, top: 1024, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2458, top: 1189, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q4-fy24',
    name: "McDonald's · Q4 FY24",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: 'McDonald’s Q4 FY24 Income Statement', period: 'Q4 FY24', periodNote: 'Ending Dec. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 197, titleSize: 132, titleWeight: 800, titleTextLength: 2430,
      hidePeriodStamp: true,
      logoWidth: 228, logoHeight: 199, logoX: 774, logoY: 267, logoViewBox: '0 0 256 199', logoSvg: arches,
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
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.3, notes: ['(7%) Y/Y', '14% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 4.0, valueText: '$4.0B', notes: ['+2% Y/Y', '83% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['+89% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.4, notes: ['(0%) Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.7, notes: ['58% margin', '+1pp Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.7 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 2.9, notes: ['45% margin', '+1pp Y/Y'] },
      { id: 'other_income', type: 'profit', label: 'Other', value: 0.049, valueText: '$49M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.8 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.0, valueText: '$2.0B', notes: ['32% margin', '(0pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.7 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.3, sourceWidth: 140, targetWidth: 140, y0: 543, y1: 742, sourceOrder: 0, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 4.0, sourceWidth: 241, targetWidth: 245, y0: 871.5, y1: 934.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 5, targetWidth: 5, y0: 1128.5, y1: 1059.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.7, sourceWidth: 226, targetWidth: 224, y0: 785, y1: 678, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.7, sourceWidth: 164, targetWidth: 164, y0: 980, y1: 1078, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.9, sourceWidth: 176, targetWidth: 176, y0: 654, y1: 552, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.8, sourceWidth: 48, targetWidth: 47, y0: 766, y1: 928.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.951, sourceWidth: 121, targetWidth: 120, y0: 524.5, y1: 416, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 33, targetWidth: 30, y0: 601.5, y1: 757, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 22, targetWidth: 21, y0: 629, y1: 870.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.049, sourceWidth: 1, targetWidth: 1, y0: 537.5, y1: 476.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 0.7, sourceWidth: 41, targetWidth: 39, y0: 925.5, y1: 1065.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 6, targetWidth: 6, y0: 949, y1: 1244, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    layout: {
      scale: 60.7,
      nodes: {
        company_owned_restaurants: { x: 385, y: 473, width: 71, height: 140 }, franchised_restaurants: { x: 385, y: 751, width: 71, height: 241 }, other_revenue: { x: 385, y: 1126, width: 71, height: 5 },
        revenue: { x: 852, y: 672, width: 70, height: 390 }, gross_profit: { x: 1321, y: 566, width: 72, height: 224 }, restaurant_expenses: { x: 1319, y: 996, width: 71, height: 164 },
        operating_profit: { x: 1804, y: 464, width: 70, height: 176 }, other_income: { x: 2122, y: 537, width: 70, height: 1 }, operating_expenses: { x: 1807, y: 905, width: 70, height: 47 },
        net_profit: { x: 2253, y: 356, width: 71, height: 121 }, tax: { x: 2253, y: 742, width: 71, height: 30 }, interest: { x: 2253, y: 860, width: 71, height: 21 }, other_sga: { x: 2253, y: 1046, width: 71, height: 39 }, depreciation_amortization: { x: 2253, y: 1241, width: 71, height: 6 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2024 财年第四季度',
        meta: { title: '麦当劳 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 12 月', titleTextLength: 1900 },
        annotationsSvg: annotationsZh,
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 (7%)', '毛利率 14%'] }, franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +2%', '毛利率 83%'] }, other_revenue: { label: '其他收入', notes: ['同比 +89%', '其他餐厅'] }, revenue: { label: '收入', notes: ['同比 (0%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] }, restaurant_expenses: { label: '餐厅费用' }, operating_profit: { label: '营业利润', notes: ['利润率 45%', '同比 +1 个百分点'] }, other_income: { label: '其他' }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 32%', '同比 (0 个百分点)'] }, tax: { label: '税费' }, interest: { label: '利息' }, other_sga: { label: '其他销售、一般及行政费用' }, depreciation_amortization: { label: '折旧及摊销' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

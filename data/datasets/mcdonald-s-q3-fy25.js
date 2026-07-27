/* McDonald's - Q3 FY25 income statement ($B), reconstructed from the
 * measured source image as a fixed SVG Sankey. */
(function () {
  const BACKGROUND = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666';
  const GOLD = '#ffc72c';
  const ARCH_GOLD = '#ffc000';
  const GOLD_LINK = '#f7df99';
  const GREEN = '#2ca02c';
  const SHORT_GREEN = '#49ab49';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const arches = '<path fill="' + ARCH_GOLD + '" d="M0 199V100C0 42 29 0 70 0c25 0 46 17 58 48C140 17 161 0 186 0c41 0 70 42 70 100v99h-31v-99c0-37-16-64-40-64s-40 27-40 64v99H88v-99c0-37-16-64-40-64S31 63 31 100v99z"/>';
  const card = (x, width, title, lines, fontFamily = 'Noto Sans,Arial,sans-serif') =>
    '<g><rect x="' + x + '" y="1202" width="' + width + '" height="149" rx="29" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="1257" text-anchor="middle" font-family="' + fontFamily + '" font-size="29" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (lines.length === 1 ? 1307 : 1293 + index * 31) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="24" fill="#fff">' + line + '</text>').join('') +
    '</g>';
  const annotations = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(152, 270, 'Global', ['comparable sales', '+4% Y/Y']) +
    card(436, 278, 'Systemwide sales', ['+8% Y/Y']) +
    '</g>';
  const annotationsZh = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(152, 270, '全球', ['可比销售额', '同比 +4%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    card(436, 278, '系统销售额', ['同比 +8%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    '</g>';

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 399, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(4%) Y/Y', size: 28, color: NOTE }] },
      { x: 199, top: 479, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '15% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 669, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+7% Y/Y', size: 28, color: NOTE }] },
      { x: 196, top: 797, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '85% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1023, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+22% Y/Y', size: 28, color: NOTE }] },
      { x: 205, top: 1074, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 884, top: 545, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '+3% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1352, top: 389, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '58% margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352, top: 1145, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1819, top: 276, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '47% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [{ x: 1564, top: 942, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1819, top: 913, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2448, top: 305, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '32% margin', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 648, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2451, top: 780, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2449, top: 977, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2449, top: 1154, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 399, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (4%)', size: 28, color: NOTE }] },
      { x: 199, top: 503, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 15%', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 669, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +7%', size: 28, color: NOTE }] },
      { x: 196, top: 800, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 85%', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1023, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +22%', size: 28, color: NOTE }] },
      { x: 205, top: 1077, anchor: 'middle', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 884, top: 545, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 +3%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1352, top: 389, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 58%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352, top: 1145, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1819, top: 276, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 47%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [{ x: 1564, top: 942, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1819, top: 913, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2450, top: 291, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 32%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 648, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2451, top: 774, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2449, top: 968, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2449, top: 1154, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q3-fy25',
    name: "McDonald's · Q3 FY25",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q3 FY25 Income Statement", period: 'Q3 FY25', periodNote: 'Ending Sep. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 132, titleWeight: 800, titleTextLength: 2428,
      hidePeriodStamp: true,
      logoWidth: 227, logoHeight: 199, logoY: 282, logoViewBox: '0 0 256 199', logoSvg: arches,
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
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.6, notes: ['(4%) Y/Y', '15% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 4.4, notes: ['+7% Y/Y', '85% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.2, notes: ['+22% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 7.1, notes: ['+3% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 4.1, notes: ['58% margin', '+2pp Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 3.0, valueText: '($3.0B)' },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 3.4, notes: ['47% margin', '+1pp Y/Y'] },
      { id: 'operating_other_income', type: 'profit', label: 'Other', value: 0.037, valueText: '$37M', color: SHORT_GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.8 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.3, notes: ['32% margin', '(1pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.7 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.7 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.6, sourceWidth: 110, targetWidth: 110, y0: 546, y1: 741, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 4.4, sourceWidth: 187, targetWidth: 188, y0: 853.5, y1: 891, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 5, targetWidth: 5, y0: 1116.5, y1: 987.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.1, sourceWidth: 175, targetWidth: 175, y0: 773.5, y1: 660.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 3.0, sourceWidth: 129, targetWidth: 127, y0: 925.5, y1: 1055.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.4, sourceWidth: 144, targetWidth: 144, y0: 645, y1: 530, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.8, sourceWidth: 30, targetWidth: 30, y0: 733, y1: 871, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_other_income', target: 'operating_expenses', value: 0.037, sourceWidth: 2, targetWidth: 2, y0: 920, y1: 887, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 1602, x1: 1784, c1x: 1660, c1y: 920, c2x: 1720, c2y: 887 } },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 98, targetWidth: 98, y0: 507, y1: 367, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 28, targetWidth: 28, y0: 571, y1: 681, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 16, targetWidth: 16, y0: 594, y1: 810, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_sga', value: 0.7, sourceWidth: 27, targetWidth: 27, y0: 869.5, y1: 1008.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 886, y1: 1209, sourceOrder: 1, targetOrder: 0 },
    ],
    layout: {
      scale: 42.7,
      nodes: {
        company_owned_restaurants: { x: 382, y: 491, width: 71, height: 110 },
        franchised_restaurants: { x: 382, y: 760, width: 71, height: 187 },
        other_revenue: { x: 382, y: 1114, width: 71, height: 5 },
        revenue: { x: 849, y: 686, width: 70, height: 304 },
        gross_profit: { x: 1316, y: 573, width: 71, height: 175 },
        restaurant_expenses: { x: 1316, y: 992, width: 71, height: 127 },
        operating_profit: { x: 1784, y: 458, width: 70, height: 144 },
        operating_other_income: { x: 1531, y: 919, width: 71, height: 2 },
        operating_expenses: { x: 1784, y: 856, width: 70, height: 32 },
        net_profit: { x: 2250, y: 318, width: 71, height: 98 },
        tax: { x: 2250, y: 667, width: 71, height: 28 },
        interest: { x: 2250, y: 802, width: 71, height: 16 },
        other_sga: { x: 2250, y: 995, width: 71, height: 27 },
        depreciation_amortization: { x: 2250, y: 1207, width: 71, height: 4 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2025 财年第三季度',
        meta: { title: '麦当劳 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月' },
        annotationsSvg: annotationsZh,
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 (4%)', '毛利率 15%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +7%', '毛利率 85%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +22%', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 +2 个百分点'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 47%', '同比 +1 个百分点'] },
          operating_other_income: { label: '其他' },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          other_sga: { label: '其他销售、一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

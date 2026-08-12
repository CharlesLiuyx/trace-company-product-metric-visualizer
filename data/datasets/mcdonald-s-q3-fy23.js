/* McDonald's - Q3 FY23 income statement ($B), reconstructed from the
 * processed source as a fixed SVG Sankey. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GOLD = '#ffc72c';
  const ARCH_GOLD = '#ffc000';
  const GOLD_LINK = '#f7df99';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const arches = `<path fill="${ARCH_GOLD}" d="M0 199V100C0 42 29 0 70 0c25 0 46 17 58 48C140 17 161 0 186 0c41 0 70 42 70 100v99h-31v-99c0-37-16-64-40-64s-40 27-40 64v99H88v-99c0-37-16-64-40-64S31 63 31 100v99z"/>`;
  const card = (x, width, title, lines, fontFamily = 'Noto Sans,Arial,sans-serif') => `<g><rect x="${x}" y="1210" width="${width}" height="148" rx="29" fill="#000"/><text x="${x + width / 2}" y="1262" text-anchor="middle" font-family="${fontFamily}" font-size="29" font-weight="800" fill="#fff">${title}</text>${lines.map((line, index) => `<text x="${x + width / 2}" y="${1300 + index * 31}" text-anchor="middle" font-family="${fontFamily}" font-size="24" fill="#fff">${line}</text>`).join('')}</g>`;
  const annotations = `<g font-family="Noto Sans,Arial,sans-serif">${card(145, 271, 'Global', ['comparable sales', '+8.8% Y/Y'])}${card(429, 274, 'Digital sales', ['40% of total sales in top', '6 markets'])}<text x="159" y="1400" font-size="26" fill="${NOTE}">Digital Sales = Mobile, Delivery, and Kiosk</text></g>`;
  const annotationsZh = `<g font-family="Noto Sans,Arial,sans-serif">${card(145, 271, '全球', ['可比销售额', '同比 +8.8%'])}${card(429, 274, '数字销售', ['40% 的总销售额来自前', '6 大市场'])}<text x="159" y="1400" font-size="26" fill="${NOTE}">数字销售 = 移动端、配送和自助点餐机</text></g>`;

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 420, top: 302, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+20% Y/Y', size: 28, color: NOTE }] },
      { x: 200, top: 403, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '16% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 420, top: 617, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+10% Y/Y', size: 28, color: NOTE }] },
      { x: 200, top: 773, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '85% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 421, top: 1037, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+17% Y/Y', size: 28, color: NOTE }] },
      { x: 204, top: 1092, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 886, top: 515, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '+14% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1355, top: 365, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '58% margin', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1359, top: 1180, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1819, top: 264, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '48% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    non_operating_income: { blocks: [{ x: 2138, top: 565, anchor: 'middle', lineGap: 8, lines: [{ text: 'Non-operating', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1819, top: 917, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2445, top: 339, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '35% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 685, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2452, top: 841, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 1024, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2457, top: 1176, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [
      { x: 420, top: 302, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +20%', size: 28, color: NOTE }] },
      { x: 200, top: 421, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 16%', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 420, top: 617, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +10%', size: 28, color: NOTE }] },
      { x: 200, top: 788, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 85%', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 421, top: 1037, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +17%', size: 28, color: NOTE }] },
      { x: 204, top: 1092, anchor: 'middle', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 886, top: 515, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 +14%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1355, top: 365, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 58%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1359, top: 1195, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1819, top: 264, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 48%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    non_operating_income: { blocks: [{ x: 2138, top: 565, anchor: 'middle', lineGap: 8, lines: [{ text: '非营业收入', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1819, top: 932, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2445, top: 339, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 35%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 685, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2452, top: 841, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 1015, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2457, top: 1191, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q3-fy23',
    name: "McDonald's · Q3 FY23",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q3 FY23 Income Statement", period: 'Q3 FY23', periodNote: 'Ending Sep. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1336, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2428,
      hidePeriodStamp: true,
      logoWidth: 215, logoHeight: 187, logoY: 258, logoViewBox: '0 0 256 199', logoSvg: arches,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: GOLD, label: '#000000' }, hub: { node: GOLD, label: '#000000' }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GOLD_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 59.55,
      routes: { non_operating_income: { x: 2022, y: 578, width: 0, height: 2 } },
      nodes: {
        company_owned_restaurants: { x: 385, y: 391, width: 71, height: 151 },
        franchised_restaurants: { x: 385, y: 708, width: 71, height: 242 },
        other_revenue: { x: 385, y: 1125, width: 71, height: 4 },
        revenue: { x: 852, y: 657, width: 70, height: 399 },
        gross_profit: { x: 1319, y: 548, width: 71, height: 230 },
        restaurant_expenses: { x: 1324, y: 994, width: 71, height: 167 },
        operating_profit: { x: 1784, y: 448, width: 70, height: 190 },
        operating_expenses: { x: 1784, y: 856, width: 70, height: 38 },
        net_profit: { x: 2253, y: 334, width: 71, height: 137 },
        tax: { x: 2253, y: 702, width: 71, height: 34 },
        interest: { x: 2253, y: 865, width: 71, height: 17 },
        other_sga: { x: 2253, y: 1035, width: 71, height: 31 },
        depreciation_amortization: { x: 2253, y: 1225, width: 71, height: 4 },
      },
      labels,
    },
    nonNodeMetrics: [
      { id: 'non_operating_income', representation: 'flow', label: 'Non-operating', value: 0.1, type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.6, notes: ['+20% Y/Y', '16% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 4.0, valueText: '$4.0B', notes: ['+10% Y/Y', '85% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['+17% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.7, notes: ['+14% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.9, notes: ['58% margin', '(1pp) Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.8 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 3.2, notes: ['48% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.6 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.3, notes: ['35% margin', '+1pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.6, sourceWidth: 151, targetWidth: 151, y0: 466.5, y1: 732.5, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 4.0, sourceWidth: 242, targetWidth: 243, y0: 829, y1: 929.5, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 1127, y1: 1054, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.9, sourceWidth: 230, targetWidth: 230, y0: 772, y1: 663, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.8, sourceWidth: 169, targetWidth: 167, y0: 971.5, y1: 1077.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.2, sourceWidth: 190, targetWidth: 190, y0: 643, y1: 543, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.6, sourceWidth: 40, targetWidth: 38, y0: 758, y1: 875, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 134, targetWidth: 137, y0: 515, y1: 402.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'non_operating_income', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 578, y1: 470, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2022, c1x: 2135, c1y: 578, c2x: 2184, c2y: 470 } },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 35, targetWidth: 34, y0: 599.5, y1: 719, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 21, targetWidth: 17, y0: 627.5, y1: 873.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_sga', value: 0.6, sourceWidth: 33, targetWidth: 31, y0: 872.5, y1: 1050.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 892, y1: 1227, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '麦当劳 · 2023 财年第三季度',
        meta: { title: '麦当劳 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月', titleTextLength: 1900 },
        annotationsSvg: annotationsZh,
        nonNodeMetrics: { non_operating_income: { label: '非营业收入' } },
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 +20%', '毛利率 16%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +10%', '毛利率 85%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +17%', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 (1 个百分点)'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 48%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
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

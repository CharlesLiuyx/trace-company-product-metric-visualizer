/* McDonald's - Q4 FY23 income statement ($B), reconstructed from the
 * native-scale Source measurement as a fixed SVG Sankey. */
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

  const arches = '<path fill="' + ARCH_GOLD + '" d="M0 187V94C0 39 27 0 66 0c24 0 43 16 55 45C132 16 152 0 175 0c39 0 66 39 66 94v93h-29V94c0-35-15-60-38-60s-38 25-38 60v93H83V94c0-35-15-60-38-60S29 59 29 94v93z"/>';
  const card = (x, width, title, lines, fontFamily = 'Noto Sans,Arial,sans-serif') =>
    '<g><rect x="' + x + '" y="1241" width="' + width + '" height="148" rx="28" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="1293" text-anchor="middle" font-family="' + fontFamily + '" font-size="28" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (1329 + index * 30) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="23" fill="#fff">' + line + '</text>').join('') +
    '</g>';
  const annotations = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(150, 271, 'Global', ['comparable sales', '+3% Y/Y']) +
    card(435, 273, 'Systemwide sales', ['+6% Y/Y']) +
    '</g>';
  const annotationsZh = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(150, 271, '全球', ['可比销售额', '同比 +3%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    card(435, 273, '系统销售额', ['同比 +6%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    '</g>';

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 420, top: 293, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+12% Y/Y', size: 28, color: NOTE }] },
      { x: 194, top: 404, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '16% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 420, top: 625, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+6% Y/Y', size: 28, color: NOTE }] },
      { x: 191, top: 793, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '84% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 420, top: 1048, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(12%) Y/Y', size: 28, color: NOTE }] },
      { x: 174, top: 1114, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other revenue', size: 32, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 884, top: 515, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '+8% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1352, top: 368, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '57% margin', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352, top: 1197, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1819, top: 275, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '44% margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1819, top: 936, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    non_operating_income: { blocks: [{ x: 2152, top: 590, anchor: 'middle', lineGap: 8, lines: [{ text: 'Non-operating', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2448, top: 364, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '32% margin', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 696, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2448, top: 850, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 1033, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2457, top: 1229, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [{ x: 420, top: 293, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +12%', size: 28, color: NOTE }] }, { x: 194, top: 428, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 16%', size: 27, color: NOTE }] }] },
    franchised_restaurants: { blocks: [{ x: 420, top: 625, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +6%', size: 28, color: NOTE }] }, { x: 191, top: 796, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 84%', size: 27, color: NOTE }] }] },
    other_revenue: { blocks: [{ x: 420, top: 1048, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (12%)', size: 28, color: NOTE }] }, { x: 174, top: 1117, anchor: 'middle', lineGap: 8, lines: [{ text: '其他收入', size: 32, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] }] },
    revenue: { blocks: [{ x: 884, top: 515, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 +8%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1352, top: 368, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 57%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352, top: 1197, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1819, top: 275, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 44%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1819, top: 936, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    non_operating_income: { blocks: [{ x: 2152, top: 590, anchor: 'middle', lineGap: 8, lines: [{ text: '非营业收入', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2448, top: 350, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 32%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 696, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2448, top: 844, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 1024, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2457, top: 1229, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q4-fy23',
    name: "McDonald's · Q4 FY23",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q4 FY23 Income Statement", period: 'Q4 FY23', periodNote: 'Ending Dec. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 132, titleWeight: 800, titleTextLength: 2444,
      hidePeriodStamp: true,
      logoWidth: 214, logoHeight: 187, logoY: 258, logoViewBox: '0 0 241 187', logoSvg: arches,
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
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.5, notes: ['+12% Y/Y', '16% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 3.9, notes: ['+6% Y/Y', '84% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['(12%) Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.4, notes: ['+8% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.7, notes: ['57% margin', '(0pp) Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.8 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 2.8, notes: ['44% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.9 },
      { id: 'non_operating_income', type: 'profit', label: 'Non-operating', value: 0.1 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.0, notes: ['32% margin', '(0pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.8 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.5, sourceWidth: 163, targetWidth: 164, y0: 468.5, y1: 737, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 3.9, sourceWidth: 256, targetWidth: 256, y0: 847, y1: 947, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 5, y0: 1152.5, y1: 1077.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.7, sourceWidth: 244, targetWidth: 242, y0: 777, y1: 671, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.8, sourceWidth: 181, targetWidth: 183, y0: 989.5, y1: 1082.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.8, sourceWidth: 187, targetWidth: 185, y0: 643.5, y1: 552.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9, sourceWidth: 55, targetWidth: 55, y0: 764.5, y1: 886.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.0, sourceWidth: 132, targetWidth: 131, y0: 526, y1: 426.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 32, targetWidth: 30, y0: 608, y1: 732, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 21, targetWidth: 23, y0: 634.5, y1: 877.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'non_operating_income', target: 'net_profit', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 573.5, y1: 493.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 0.8, sourceWidth: 50, targetWidth: 48, y0: 884, y1: 1067, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 912, y1: 1287, sourceOrder: 1, targetOrder: 0 },
    ],
    layout: {
      scale: 65.5,
      nodes: {
        company_owned_restaurants: { x: 385, y: 386, width: 71, height: 164 },
        franchised_restaurants: { x: 385, y: 719, width: 71, height: 256 },
        other_revenue: { x: 385, y: 1151, width: 71, height: 3 },
        revenue: { x: 852, y: 655, width: 70, height: 425 },
        gross_profit: { x: 1321, y: 550, width: 72, height: 242 },
        restaurant_expenses: { x: 1321, y: 991, width: 72, height: 183 },
        operating_profit: { x: 1784, y: 460, width: 70, height: 185 },
        operating_expenses: { x: 1789, y: 859, width: 70, height: 55 },
        non_operating_income: { x: 2117, y: 572, width: 70, height: 3 },
        net_profit: { x: 2253, y: 361, width: 71, height: 134 },
        tax: { x: 2253, y: 717, width: 71, height: 30 },
        interest: { x: 2253, y: 866, width: 71, height: 23 },
        other_sga: { x: 2253, y: 1043, width: 71, height: 48 },
        depreciation_amortization: { x: 2253, y: 1285, width: 71, height: 4 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2023 财年第四季度',
        meta: { title: '麦当劳 2023 财年第四季度利润表', period: '2023 财年第四季度', periodNote: '截至 2023 年 12 月' },
        annotationsSvg: annotationsZh,
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 +12%', '毛利率 16%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +6%', '毛利率 84%'] },
          other_revenue: { label: '其他收入', notes: ['同比 (12%)', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 (0 个百分点)'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 44%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          non_operating_income: { label: '非营业收入' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 (0 个百分点)'] },
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

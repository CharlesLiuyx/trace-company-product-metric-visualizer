/* McDonald's - Q4 FY22 income statement ($B), reconstructed from the
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
    '<g><rect x="' + x + '" y="1210" width="' + width + '" height="148" rx="28" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="1262" text-anchor="middle" font-family="' + fontFamily + '" font-size="28" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (1298 + index * 30) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="23" fill="#fff">' + line + '</text>').join('') +
    '</g>';
  const note = (text, fontFamily = 'Noto Sans,Arial,sans-serif') =>
    '<text x="144" y="1394" font-family="' + fontFamily + '" font-size="27" fill="#666">' + text + '</text>';
  const annotations = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(145, 271, 'Global', ['comparable sales', '+12.6% Y/Y']) +
    card(429, 274, 'Digital sales', ['&gt; 35% of total sales']) +
    note('Digital Sales = Mobile, Delivery, and Kiosk') +
    '</g>';
  const annotationsZh = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(145, 271, '全球', ['可比销售额', '同比 +12.6%']) +
    card(429, 274, '数字销售', ['占总销售额 &gt;35%']) +
    note('数字销售 = 移动端、配送和自助点餐机') +
    '</g>';

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 423, top: 415, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(13%) Y/Y', size: 28, color: NOTE }] },
      { x: 197, top: 521, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '15% operating margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 421, top: 701, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+7% Y/Y', size: 28, color: NOTE }] },
      { x: 192, top: 874, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '84% operating margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 421, top: 1082, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(7%) Y/Y', size: 28, color: NOTE }] },
      { x: 174, top: 1114, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800, textLength: 219 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 891, top: 486, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '(1%) Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1358, top: 359, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '58% margin', size: 28, color: NOTE }, { text: '+3pp Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1356, top: 1157, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1820, top: 281, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '44% margin', size: 28, color: NOTE }, { text: '+3pp Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1820, top: 933, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    non_operating_income: { blocks: [{ x: 2154, top: 566, anchor: 'middle', lineGap: 8, lines: [{ text: 'Non-operating', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2445, top: 379, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '32% margin', size: 28, color: NOTE }, { text: '+5pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 702, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2449, top: 819, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 1004, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2451, top: 1130, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_opex: { blocks: [{ x: 2449, top: 1274, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other opex', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [{ x: 423, top: 415, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (13%)', size: 28, color: NOTE }] }, { x: 197, top: 545, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '营业利润率 15%', size: 27, color: NOTE }] }] },
    franchised_restaurants: { blocks: [{ x: 421, top: 701, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +7%', size: 28, color: NOTE }] }, { x: 192, top: 877, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '营业利润率 84%', size: 27, color: NOTE }] }] },
    other_revenue: { blocks: [{ x: 421, top: 1082, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (7%)', size: 28, color: NOTE }] }, { x: 189, top: 1117, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] }] },
    revenue: { blocks: [{ x: 891, top: 486, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 (1%)', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1358, top: 359, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 58%', size: 28, color: NOTE }, { text: '同比 +3 个百分点', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1356, top: 1157, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1820, top: 281, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 44%', size: 28, color: NOTE }, { text: '同比 +3 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1820, top: 933, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    non_operating_income: { blocks: [{ x: 2154, top: 566, anchor: 'middle', lineGap: 8, lines: [{ text: '非营业收入', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2445, top: 364, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 32%', size: 28, color: NOTE }, { text: '同比 +5 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 702, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2449, top: 813, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 995, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2451, top: 1130, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_opex: { blocks: [{ x: 2449, top: 1268, anchor: 'middle', lineGap: 8, lines: [{ text: '其他运营费用', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q4-fy22',
    name: "McDonald's · Q4 FY22",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q4 FY22 Income Statement", period: 'Q4 FY22', periodNote: 'Ending Dec. 2022',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 132, titleWeight: 800, titleTextLength: 2428,
      hidePeriodStamp: true,
      logoWidth: 241, logoHeight: 187, logoY: 258, logoViewBox: '0 0 241 187', logoSvg: arches,
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
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.2, notes: ['(13%) Y/Y', '15% operating margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 3.6, notes: ['+7% Y/Y', '84% operating margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['(7%) Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 5.9, notes: ['(1%) Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.4, notes: ['58% margin', '+3pp Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.5 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 2.6, notes: ['44% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.8 },
      { id: 'non_operating_income', type: 'profit', label: 'Non-operating', value: 0.1 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 1.9, notes: ['32% margin', '+5pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.7 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.015, valueText: '($15M)' },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.2, sourceWidth: 157, targetWidth: 157, y0: 579.5, y1: 702.5, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 3.6, sourceWidth: 260, targetWidth: 263, y0: 918, y1: 912.5, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 1179, y1: 1046, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.4, sourceWidth: 243, targetWidth: 243, y0: 745.5, y1: 660.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.5, sourceWidth: 181, targetWidth: 179, y0: 957.5, y1: 1043.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 184, targetWidth: 184, y0: 631, y1: 547, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.8, sourceWidth: 59, targetWidth: 58, y0: 752.5, y1: 879, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 135, targetWidth: 132, y0: 522.5, y1: 417, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 29, targetWidth: 29, y0: 604.5, y1: 738.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 20, targetWidth: 20, y0: 629, y1: 857, sourceOrder: 2, targetOrder: 0 },
      { source: 'non_operating_income', target: 'net_profit', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 549.5, y1: 483.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 0.7, sourceWidth: 50, targetWidth: 50, y0: 875, y1: 1033, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 6, targetWidth: 5, y0: 903, y1: 1176.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.015, sourceWidth: 2, targetWidth: 2, y0: 907, y1: 1310, sourceOrder: 2, targetOrder: 0 },
    ],
    layout: {
      scale: 71.7,
      nodes: {
        company_owned_restaurants: { x: 385, y: 501, width: 71, height: 157 },
        franchised_restaurants: { x: 385, y: 788, width: 71, height: 260 },
        other_revenue: { x: 385, y: 1177, width: 71, height: 4 },
        revenue: { x: 847, y: 624, width: 70, height: 424 },
        gross_profit: { x: 1316, y: 539, width: 72, height: 243 },
        restaurant_expenses: { x: 1319, y: 954, width: 71, height: 179 },
        operating_profit: { x: 1789, y: 455, width: 70, height: 184 },
        operating_expenses: { x: 1792, y: 850, width: 70, height: 58 },
        non_operating_income: { x: 2119, y: 548, width: 70, height: 3 },
        net_profit: { x: 2253, y: 351, width: 71, height: 135 },
        tax: { x: 2253, y: 724, width: 71, height: 29 },
        interest: { x: 2253, y: 847, width: 71, height: 20 },
        other_sga: { x: 2253, y: 1008, width: 71, height: 50 },
        depreciation_amortization: { x: 2253, y: 1174, width: 71, height: 5 },
        other_opex: { x: 2253, y: 1309, width: 71, height: 2 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2022 财年第四季度',
        meta: { title: '麦当劳 2022 财年第四季度利润表', period: '2022 财年第四季度', periodNote: '截至 2022 年 12 月' },
        annotationsSvg: annotationsZh,
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 (13%)', '营业利润率 15%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +7%', '营业利润率 84%'] },
          other_revenue: { label: '其他收入', notes: ['同比 (7%)', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 +3 个百分点'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 44%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          non_operating_income: { label: '非营业收入' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          other_sga: { label: '其他销售、一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
          other_opex: { label: '其他运营费用' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

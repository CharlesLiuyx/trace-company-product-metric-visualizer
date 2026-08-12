/* McDonald's - Q1 FY24 income statement ($B), reconstructed from the
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
    '<g><rect x="' + x + '" y="1241" width="' + width + '" height="148" rx="29" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="' + (lines.length === 1 ? 1314 : 1298) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="29" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (lines.length === 1 ? 1350 : 1332 + index * 32) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="24" fill="#fff">' + line + '</text>').join('') +
    '</g>';

  const annotations = (language) => {
    const zh = language === 'zh';
    const font = 'Noto Sans,Arial,sans-serif';
    return '<g font-family="' + font + '">' +
      card(150, 271, zh ? '全球' : 'Global', zh ? ['可比销售额', '同比 +2%'] : ['comparable sales', '+2% Y/Y'], font) +
      card(435, 273, zh ? '系统销售额' : 'Systemwide sales', zh ? ['同比 +3%'] : ['+3% Y/Y'], font) +
      '<text x="172" y="1447" font-family="' + font + '" font-size="38" font-weight="800" fill="#000">' + (zh ? '来源：季度业绩' : 'Source: Quarterly results') + '</text>' +
      '</g>';
  };

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 421, top: 302, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+12% Y/Y', size: 28, color: NOTE }] },
      { x: 195, top: 410, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '14% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 421, top: 633, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+4% Y/Y', size: 28, color: NOTE }] },
      { x: 200, top: 788, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '83% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 421, top: 1050, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+6% Y/Y', size: 28, color: NOTE }] },
      { x: 203, top: 1096, anchor: 'middle', semanticRole: 'top-aligned-side-label', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 888, top: 541, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '+5% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1374, top: 395, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '56% margin', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1356, top: 1196, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1845, top: 295, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '44% margin', size: 28, color: NOTE }, { text: '+1 pp Y/Y', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [{ x: 1704, top: 713, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other operating', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 930, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    non_operating: { blocks: [{ x: 2150, top: 576, anchor: 'middle', lineGap: 8, lines: [{ text: 'Non-operating', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2445, top: 388, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '31% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 696, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2452, top: 844, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 1070, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2456, top: 1199, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [
      { x: 421, top: 298, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +12%', size: 28, color: NOTE }] },
      { x: 195, top: 430, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 14%', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 421, top: 632, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +4%', size: 28, color: NOTE }] },
      { x: 200, top: 810, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 83%', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 421, top: 1059, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +6%', size: 28, color: NOTE }] },
      { x: 203, top: 1105, anchor: 'middle', semanticRole: 'top-aligned-side-label', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 888, top: 537, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 +5%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1374, top: 392, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 56%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1349, top: 1186, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1845, top: 288, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 44%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [{ x: 1704, top: 721, anchor: 'middle', lineGap: 8, lines: [{ text: '其他营业收入', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    operating_expenses: { blocks: [{ x: 1868, top: 926, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    non_operating: { blocks: [{ x: 2150, top: 585, anchor: 'middle', lineGap: 8, lines: [{ text: '非营业项目', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2432, top: 386, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 31%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 703, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2452, top: 852, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 1068, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2456, top: 1227, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q1-fy24',
    name: "McDonald's · Q1 FY24",
    company: "McDonald's",
    meta: {
      company: "McDonald's",
      title: "McDonald's Q1 FY24 Income Statement",
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 197,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2430,
      hidePeriodStamp: true,
      logoX: 777,
      logoWidth: 227,
      logoHeight: 199,
      logoY: 267,
      logoViewBox: '0 0 256 199',
      logoSvg: arches,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: GOLD, label: '#050505' }, hub: { node: GOLD, label: '#050505' }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GOLD_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('en'),
    nodes: [
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.4, notes: ['+12% Y/Y', '14% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 3.7, notes: ['+4% Y/Y', '83% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['+6% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.2, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.4, notes: ['56% margin', '(0pp) Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.7 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 2.7, notes: ['44% margin', '+1 pp Y/Y'] },
      { id: 'operating_other_income', type: 'profit', label: 'Other operating', value: 0.017, valueText: '$17M' },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.7 },
      { id: 'non_operating', type: 'profit', label: 'Non-operating', value: 0.045, valueText: '$45M' },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 1.9, notes: ['31% margin', '+1pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.4, sourceWidth: 147, targetWidth: 147, y0: 461.5, y1: 750.5, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 3.7, sourceWidth: 234, targetWidth: 236, y0: 841, y1: 942, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 1151, y1: 1062, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.4, sourceWidth: 217, targetWidth: 216, y0: 785.5, y1: 680, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.7, sourceWidth: 170, targetWidth: 170, y0: 979, y1: 1079, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 172, targetWidth: 170, y0: 658, y1: 553, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 44, targetWidth: 43, y0: 766, y1: 883.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_other_income', target: 'operating_profit', value: 0.017, sourceWidth: 1, targetWidth: 1, y0: 697.5, y1: 637.5, sourceOrder: 0, targetOrder: 1, curve: { x0: 1740, x1: 1792, c1x: 1757, c1y: 697.5, c2x: 1776, c2y: 637.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 118, targetWidth: 120, y0: 527, y1: 444, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 30, targetWidth: 29, y0: 601, y1: 729.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 22, targetWidth: 22, y0: 627, y1: 866, sourceOrder: 2, targetOrder: 0 },
      { source: 'non_operating', target: 'net_profit', value: 0.045, sourceWidth: 1, targetWidth: 1, y0: 559.5, y1: 503.5, sourceOrder: 0, targetOrder: 1, curve: { x0: 2187, x1: 2253, c1x: 2212, c1y: 559.5, c2x: 2235, c2y: 503.5 } },
      { source: 'operating_expenses', target: 'other_sga', value: 0.6, sourceWidth: 37, targetWidth: 37, y0: 880.5, y1: 1084.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 5, targetWidth: 5, y0: 902.5, y1: 1241.5, sourceOrder: 1, targetOrder: 0 },
    ],
    layout: {
      scale: 62.4,
      nodes: {
        company_owned_restaurants: { x: 385, y: 388, width: 71, height: 147 },
        franchised_restaurants: { x: 385, y: 724, width: 71, height: 234 },
        other_revenue: { x: 385, y: 1149, width: 71, height: 4 },
        revenue: { x: 852, y: 677, width: 70, height: 387 },
        gross_profit: { x: 1319, y: 572, width: 71, height: 216 },
        restaurant_expenses: { x: 1324, y: 994, width: 71, height: 170 },
        operating_profit: { x: 1792, y: 468, width: 70, height: 170 },
        operating_other_income: { x: 1669, y: 697, width: 71, height: 1 },
        operating_expenses: { x: 1794, y: 862, width: 70, height: 43 },
        non_operating: { x: 2117, y: 559, width: 70, height: 1 },
        net_profit: { x: 2253, y: 384, width: 71, height: 120 },
        tax: { x: 2253, y: 715, width: 71, height: 29 },
        interest: { x: 2253, y: 855, width: 71, height: 22 },
        other_sga: { x: 2253, y: 1066, width: 71, height: 37 },
        depreciation_amortization: { x: 2253, y: 1239, width: 71, height: 5 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2024 财年第一季度',
        meta: { title: '麦当劳 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2024 年 3 月', titleTextLength: 1760 },
        annotationsSvg: annotations('zh'),
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 +12%', '毛利率 14%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +4%', '毛利率 83%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +6%', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 (0 个百分点)'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 44%', '同比 +1 个百分点'] },
          operating_other_income: { label: '其他营业收入' },
          operating_expenses: { label: '运营费用' },
          non_operating: { label: '非营业项目' },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
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

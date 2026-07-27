/* McDonald's - Q1 FY26 income statement ($B), reconstructed from the
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
  const OTHER_LABEL = '#038f51';
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
  const otherAnnotation = (label, fontFamily = 'Noto Sans,Arial,sans-serif') =>
    '<g class="sankey-interactive-annotation" data-node="operating_other_income" data-link-numerator="operating_other_income" data-link-denominator="operating_expenses" data-link-anchor-x="1690" data-link-anchor-y="902">' +
    '<path d="M1589 932H1660C1710 932 1717 871 1784 871" fill="none" stroke="' + GREEN_LINK + '" stroke-width="2"/>' +
    '<rect x="1572" y="916" width="218" height="120" fill="transparent"/>' +
    '<text x="1624" y="978" text-anchor="middle" font-family="' + fontFamily + '" font-size="31" font-weight="800" fill="' + OTHER_LABEL + '">' + label + '</text>' +
    '<text x="1624" y="1021" text-anchor="middle" font-family="' + fontFamily + '" font-size="31" fill="' + OTHER_LABEL + '">$0.1B</text></g>';
  const annotations = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(152, 270, 'Global', ['comparable sales', '+4% Y/Y']) +
    card(436, 278, 'Systemwide sales', ['+11% Y/Y']) +
    otherAnnotation('Other') +
    '</g>';
  const annotationsZh = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(152, 270, '全球', ['可比销售额', '同比 +4%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    card(436, 278, '系统销售额', ['同比 +11%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    otherAnnotation('其他', 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    '</g>';

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 408, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+9% Y/Y', size: 28, color: NOTE }] },
      { x: 170, top: 463, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '15% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 677, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+9% Y/Y', size: 28, color: NOTE }] },
      { x: 178, top: 819, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '85% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1022, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+19% Y/Y', size: 28, color: NOTE }] },
      { x: 171, top: 1069, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 884, top: 559, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '+9% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1352, top: 403, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '56% margin', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352, top: 1111, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1816, top: 280, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '45% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [] },
    operating_expenses: { blocks: [{ x: 1819, top: 878, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2448, top: 359, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '30% margin', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2470, top: 628, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2470, top: 756, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2470, top: 971, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2470, top: 1147, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 408, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +9%', size: 28, color: NOTE }] },
      { x: 170, top: 487, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 15%', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 677, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +9%', size: 28, color: NOTE }] },
      { x: 178, top: 822, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 85%', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1022, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +19%', size: 28, color: NOTE }] },
      { x: 171, top: 1072, anchor: 'middle', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 884, top: 559, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 +9%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1352, top: 403, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 56%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352, top: 1111, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1816, top: 280, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 45%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [] },
    operating_expenses: { blocks: [{ x: 1819, top: 878, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2450, top: 345, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 30%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2470, top: 628, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2470, top: 750, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2470, top: 962, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2470, top: 1147, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q1-fy26',
    name: "McDonald's · Q1 FY26",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q1 FY26 Income Statement", period: 'Q1 FY26', periodNote: 'Ending Mar. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q1-fy26.png', width: 2667, height: 1500 },
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
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.3, notes: ['+9% Y/Y', '15% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 4.0, notes: ['+9% Y/Y', '85% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.2, notes: ['+19% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.5, notes: ['+9% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.6, notes: ['56% margin', '(0pp) Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.9 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 3.0, notes: ['45% margin', '+1pp Y/Y'] },
      { id: 'operating_other_income', type: 'profit', label: 'Other', value: 0.1, color: BACKGROUND, labelColor: GREEN_LABEL },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.8 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.0, notes: ['30% margin', '(1pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.7 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.3, sourceWidth: 110, targetWidth: 110, y0: 549, y1: 751, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 4.0, sourceWidth: 192, targetWidth: 192, y0: 859, y1: 902, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 7, targetWidth: 11, y0: 1110.5, y1: 1003.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.6, sourceWidth: 174, targetWidth: 174, y0: 783, y1: 663, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.9, sourceWidth: 139, targetWidth: 138, y0: 939.5, y1: 1034, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.0, sourceWidth: 140, targetWidth: 140, y0: 646, y1: 524, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 34, targetWidth: 36, y0: 733, y1: 854, sourceOrder: 1, targetOrder: 1 },
      { source: 'operating_other_income', target: 'operating_expenses', value: 0.1, width: 0, sourceWidth: 0, targetWidth: 0, y0: 932, y1: 871, sourceOrder: 0, targetOrder: 0, interactionOnly: true, curve: { x0: 1589, x1: 1784, c1x: 1660, c1y: 932, c2x: 1717, c2y: 871 } },
      { source: 'operating_profit', target: 'net_profit', value: 2.0, sourceWidth: 94, targetWidth: 94, y0: 501, y1: 387, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 25, targetWidth: 25, y0: 560.5, y1: 665.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 21, targetWidth: 17, y0: 583.5, y1: 782.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_sga', value: 0.7, sourceWidth: 30, targetWidth: 30, y0: 851, y1: 998, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 6, targetWidth: 4, y0: 869, y1: 1200, sourceOrder: 1, targetOrder: 0 },
    ],
    layout: {
      scale: 48.1,
      nodes: {
        company_owned_restaurants: { x: 382, y: 494, width: 71, height: 110 },
        franchised_restaurants: { x: 382, y: 763, width: 71, height: 192 },
        other_revenue: { x: 382, y: 1107, width: 71, height: 7 },
        revenue: { x: 849, y: 696, width: 70, height: 313 },
        gross_profit: { x: 1316, y: 576, width: 71, height: 174 },
        restaurant_expenses: { x: 1316, y: 965, width: 71, height: 138 },
        operating_profit: { x: 1781, y: 454, width: 70, height: 140 },
        operating_other_income: { x: 1589, y: 932, width: 1, height: 2 },
        operating_expenses: { x: 1784, y: 836, width: 70, height: 36 },
        net_profit: { x: 2250, y: 340, width: 71, height: 94 },
        tax: { x: 2250, y: 653, width: 71, height: 25 },
        interest: { x: 2250, y: 774, width: 71, height: 17 },
        other_sga: { x: 2250, y: 983, width: 71, height: 30 },
        depreciation_amortization: { x: 2250, y: 1198, width: 71, height: 4 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2026 财年第一季度',
        meta: { title: '麦当劳 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月' },
        annotationsSvg: annotationsZh,
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 +9%', '毛利率 15%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +9%', '毛利率 85%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +19%', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 (0 个百分点)'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
          operating_other_income: { label: '其他' },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 (1 个百分点)'] },
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

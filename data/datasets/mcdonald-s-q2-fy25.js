/* McDonald's — Q2 FY25 income statement ($B), reconstructed from the
 * measured source image as a fixed SVG Sankey. */
(function () {
  const BG = '#f2f2f2';
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
    '<g><rect x="' + x + '" y="1202" width="' + width + '" height="149" rx="29" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="1257" text-anchor="middle" font-family="' + fontFamily + '" font-size="29" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (lines.length === 1 ? 1307 : 1293 + index * 31) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="24" fill="#fff">' + line + '</text>').join('') +
    '</g>';
  const otherIncomeGuide = (label, fontFamily = 'Noto Sans,Arial,sans-serif') =>
    '<g class="sankey-interactive-annotation" data-node="operating_other_income" data-link-numerator="operating_other_income" data-link-denominator="net_profit" data-link-anchor-x="2210" data-link-anchor-y="453">' +
    '<path d="M2139 486H2209C2232 486 2237 418 2250 418" fill="none" stroke="' + GREEN_LINK + '" stroke-width="2"/>' +
    '<rect x="2117" y="490" width="126" height="99" fill="transparent"/>' +
    '<text x="2177" y="533" text-anchor="middle" font-family="' + fontFamily + '" font-size="31" font-weight="800" fill="' + GREEN_LABEL + '">' + label + '</text>' +
    '<text x="2177" y="574" text-anchor="middle" font-family="' + fontFamily + '" font-size="31" fill="' + GREEN_LABEL + '">$18M</text></g>';
  const annotations = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(152, 270, 'Global', ['comparable sales', '+4% Y/Y']) +
    card(436, 278, 'Systemwide sales', ['+8% Y/Y']) +
    otherIncomeGuide('Other') + '</g>';
  const annotationsZh = '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(152, 270, '全球', ['可比销售额', '同比 +4%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    card(436, 278, '系统销售额', ['同比 +8%'], 'Noto Sans SC,Noto Sans,Arial,sans-serif') +
    otherIncomeGuide('其他', 'Noto Sans SC,Noto Sans,Arial,sans-serif') + '</g>';

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 418, top: 356, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(0%) Y/Y', size: 28, color: NOTE }] },
      { x: 199, top: 440, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '15% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 418, top: 660, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+7% Y/Y', size: 28, color: NOTE }] },
      { x: 196, top: 807, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '84% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 418, top: 1034, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+93% Y/Y', size: 28, color: NOTE, textLength: 100 }] },
      { x: 205, top: 1079, anchor: 'middle', semanticRole: 'grouped-side-label', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 884, top: 545, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '+5% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1352, top: 376, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '58% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352, top: 1117, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1819, top: 269, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '47% margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [] },
    operating_expenses: { blocks: [{ x: 1819, top: 868, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2448, top: 304, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '33% margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 635, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2448, top: 757, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 931, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2448, top: 1055, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_operating_expense: { blocks: [{ x: 2450, top: 1208, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };
  const zhLabels = {
    company_owned_restaurants: { blocks: [{ x: 418, top: 356, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (0%)', size: 28, color: NOTE }] }, { x: 199, top: 464, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 15%', size: 27, color: NOTE }] }] },
    franchised_restaurants: { blocks: [{ x: 418, top: 660, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +7%', size: 28, color: NOTE }] }, { x: 196, top: 810, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 84%', size: 27, color: NOTE }] }] },
    other_revenue: { blocks: [{ x: 418, top: 1034, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +93%', size: 28, color: NOTE }] }, { x: 205, top: 1082, anchor: 'middle', semanticRole: 'grouped-side-label', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] }] },
    revenue: { blocks: [{ x: 884, top: 545, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 +5%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1352, top: 376, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 58%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352, top: 1117, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1819, top: 269, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 47%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 28, color: NOTE }] }] },
    operating_other_income: { blocks: [] },
    operating_expenses: { blocks: [{ x: 1819, top: 868, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2450, top: 290, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 33%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 635, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2448, top: 751, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448, top: 922, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2448, top: 1055, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_operating_expense: { blocks: [{ x: 2450, top: 1208, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q2-fy25', name: "McDonald's · Q2 FY25", company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q2 FY25 Income Statement", period: 'Q2 FY25', periodNote: 'Ending Jun. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 132, titleWeight: 800, titleTextLength: 2428,
      hidePeriodStamp: true,
      logoWidth: 227, logoHeight: 199, logoY: 282, logoViewBox: '0 0 256 199', logoSvg: arches,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: GOLD, label: '#050505' }, hub: { node: GOLD, label: '#050505' }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GOLD_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    nonNodeMetrics: [
      { id: 'operating_other_income', representation: 'flow', label: 'Other', value: 0.018, valueText: '$18M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.5, notes: ['(0%) Y/Y', '15% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 4.2, notes: ['+7% Y/Y', '84% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.2, notes: ['+93% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.8, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 4.0, notes: ['58% margin', '+1pp Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.9 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 3.2, notes: ['47% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.7 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.3, notes: ['33% margin', '+2pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
      { id: 'other_operating_expense', type: 'cost', label: 'Other', value: 0.029, valueText: '($29M)', color: '#aa5858', labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.5, sourceWidth: 111, targetWidth: 111, y0: 501.5, y1: 742.5, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 4.2, sourceWidth: 190, targetWidth: 190, y0: 843, y1: 893, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 7, targetWidth: 9, y0: 1127.5, y1: 992.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.0, sourceWidth: 179, targetWidth: 179, y0: 776.5, y1: 649.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.9, sourceWidth: 131, targetWidth: 130, y0: 931.5, y1: 1027, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.2, sourceWidth: 147, targetWidth: 147, y0: 633.5, y1: 524.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 32, targetWidth: 31, y0: 723, y1: 830.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 101, targetWidth: 100, y0: 501.5, y1: 368, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 28, targetWidth: 26, y0: 566, y1: 670, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 18, targetWidth: 16, y0: 589, y1: 787, sourceOrder: 2, targetOrder: 0 },
      { sourceRoute: 'operating_other_income', target: 'net_profit', value: 0.018, sourceWidth: 2, targetWidth: 2, y0: 486, y1: 418, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 0.6, sourceWidth: 25, targetWidth: 25, y0: 827.5, y1: 959.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 841.5, y1: 1104.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.029, sourceWidth: 1, targetWidth: 2, y0: 844, y1: 1237, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, curve: { x0: 1854, x1: 2250, c1x: 1992, c1y: 844, c2x: 2075, c2y: 1237 } },
    ],
    layout: {
      scale: 44.5,
      routes: {
        operating_other_income: { x: 2139, y: 486, width: 0, height: 1 },
      },
      nodes: {
        company_owned_restaurants: { x: 382, y: 446, width: 71, height: 111 },
        franchised_restaurants: { x: 382, y: 748, width: 71, height: 190 },
        other_revenue: { x: 382, y: 1124, width: 71, height: 7 },
        revenue: { x: 849, y: 687, width: 70, height: 310 },
        gross_profit: { x: 1316, y: 560, width: 71, height: 179 },
        restaurant_expenses: { x: 1316, y: 962, width: 71, height: 130 },
        operating_profit: { x: 1784, y: 451, width: 70, height: 147 },
        operating_expenses: { x: 1784, y: 815, width: 70, height: 31 },
        net_profit: { x: 2250, y: 318, width: 71, height: 100 },
        tax: { x: 2250, y: 657, width: 71, height: 26 },
        interest: { x: 2250, y: 779, width: 71, height: 16 },
        other_sga: { x: 2250, y: 947, width: 71, height: 25 },
        depreciation_amortization: { x: 2250, y: 1103, width: 71, height: 3 },
        other_operating_expense: { x: 2250, y: 1236, width: 71, height: 2 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2025 财年第二季度',
        meta: { title: '麦当劳 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 6 月' },
        annotationsSvg: annotationsZh,
        nonNodeMetrics: { operating_other_income: { label: '其他' } },
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 (0%)', '毛利率 15%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +7%', '毛利率 84%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +93%', '其他餐厅'] }, revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] }, restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 47%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 33%', '同比 +2 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' },
          other_sga: { label: '其他销售、一般及行政费用' }, depreciation_amortization: { label: '折旧及摊销' },
          other_operating_expense: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

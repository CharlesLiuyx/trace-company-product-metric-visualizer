/* McDonald's Q1 FY23 income statement ($B), measured from the native
 * 2667x1500 Source. Financial values live in the McDonald's Metric SSOT. */
(function () {
  'use strict';

  const BACKGROUND = '#f2f2f2';
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

  const arches = '<path fill="' + ARCH_GOLD + '" d="M0 199V100C0 42 29 0 70 0c25 0 46 17 58 48C140 17 161 0 186 0c41 0 70 42 70 100v99h-31v-99c0-37-16-64-40-64s-40 27-40 64v99H88v-99c0-37-16-64-40-64S31 63 31 100v99z"/>';

  const card = (x, width, title, lines) =>
    '<g><rect x="' + x + '" y="1210" width="' + width + '" height="148" rx="29" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="1259" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (1296 + index * 31) + '" text-anchor="middle" font-size="24" fill="#fff">' + line + '</text>').join('') +
    '</g>';

  const annotations = (zh) => '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(145, 271, zh ? '全球' : 'Global', zh ? ['可比销售额', '同比 +12.6%'] : ['comparable sales', '+12.6% Y/Y']) +
    card(429, 274, zh ? '数字销售额' : 'Digital sales', zh ? ['总销售额占比 40%', '6 个主要市场'] : ['40% of total sales in top', '6 markets']) +
    '<text x="156" y="1394" text-anchor="start" font-size="27" fill="' + NOTE + '">' +
      (zh ? '数字销售额 = 移动端、配送与自助点餐' : 'Digital Sales = Mobile, Delivery, and Kiosk') + '</text>' +
    '<g class="sankey-interactive-annotation" data-node="non_operating_income" data-link-numerator="non_operating_income" data-link-denominator="net_profit" data-link-anchor-x="2170" data-link-anchor-y="548">' +
      '<path d="M2119 548H2188C2220 548 2210 486 2253 486" fill="none" stroke="' + GREEN_LINK + '" stroke-width="3"/>' +
      '<text x="2147" y="596" text-anchor="middle" font-size="31" font-weight="800" fill="' + GREEN_LABEL + '">' + (zh ? '非营业收入' : 'Non-operating') + '</text>' +
      '<text x="2147" y="637" text-anchor="middle" font-size="31" fill="' + GREEN_LABEL + '">$0.1B</text>' +
      '<rect x="2028" y="475" width="240" height="175" fill="transparent" pointer-events="all"/>' +
    '</g></g>';

  const line = (text, size, options = {}) => ({ text, size, weight: options.weight, color: options.color });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 8,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}), lines,
  });
  const labels = (zh) => {
    const t = zh ? {
      companyOwned: ['自营餐厅', '销售额'], franchised: '加盟餐厅', otherRevenue: '其他收入', otherRestaurants: '其他餐厅',
      revenue: '收入', gross: '毛利润', restaurantExpenses: '餐厅费用', operatingProfit: '营业利润', operatingExpenses: '运营费用',
      netProfit: '净利润', tax: '税费', interest: '利息', otherSga: ['其他销售、一般及', '行政费用'],
      da: '折旧及摊销', otherOpex: '其他运营费用', y3n: '同比 (3%)', y10: '同比 +10%', y14n: '同比 (14%)', y4: '同比 +4%',
      margin56: '利润率 56%', pp2: '同比 +2 个百分点', margin43: '利润率 43%', pp4: '同比 +4 个百分点',
      margin31: '利润率 31%', pp11: '同比 +11 个百分点',
    } : {
      companyOwned: ['Sales from', 'company-owned', 'restaurants'], franchised: ['Franchised', 'restaurants'], otherRevenue: 'Other revenue', otherRestaurants: 'Other restaurants',
      revenue: 'Revenue', gross: 'Gross profit', restaurantExpenses: ['Restaurant', 'expenses'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      netProfit: 'Net profit', tax: 'Tax', interest: 'Interest', otherSga: 'Other SG&A', da: ['Depreciation &', 'amortization'], otherOpex: 'Other opex',
      y3n: '(3%) Y/Y', y10: '+10% Y/Y', y14n: '(14%) Y/Y', y4: '+4% Y/Y', margin56: '56% margin', pp2: '+2pp Y/Y',
      margin43: '43% margin', pp4: '+4pp Y/Y', margin31: '31% margin', pp11: '+11pp Y/Y',
    };
    const amount = (x, top, yoy) => block(x, top, [line('$value', 38), line(yoy, 28, { color: NOTE })]);
    const side = (x, top, names, notes = [], options = {}) => block(x, top, [...[].concat(names).map((v) => line(v, 39, { weight: 800 })), ...notes.map((v) => line(v, 27, { color: NOTE }))], options);
    const profit = (x, top, name, margin, yoy) => block(x, top, [line(name, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 38, { color: GREEN_LABEL }), line(margin, 28, { color: NOTE }), line(yoy, 28, { color: NOTE })], { lineGap: 9 });
    const right = (x, top, names, size = 31) => block(x, top, [...[].concat(names).map((v) => line(v, size, { weight: 800, color: RED_LABEL })), line('$value', 31, { color: RED_LABEL })]);
    return {
      company_owned_restaurants: { blocks: [amount(420, 402, t.y3n), side(196, zh ? 529 : 507, t.companyOwned)] },
      franchised_restaurants: { blocks: [amount(420, 689, t.y10), side(204, zh ? 895 : 871, t.franchised)] },
      other_revenue: { blocks: [amount(420, 1076, t.y14n), side(203, 1110, t.otherRevenue, [t.otherRestaurants], { semanticRole: 'top-aligned-side-label' })] },
      revenue: { blocks: [block(882, 474, [line(t.revenue, 40, { weight: 800 }), line('$value', 38), line(t.y4, 28, { color: NOTE })], { lineGap: 9 })] },
      gross_profit: { blocks: [profit(1352, 359, t.gross, t.margin56, t.pp2)] },
      restaurant_expenses: { blocks: [block(1354, 1157, [...[].concat(t.restaurantExpenses).map((v) => line(v, 37, { weight: 800, color: RED_LABEL })), line('$value', 35, { color: RED_LABEL })])] },
      operating_profit: { blocks: [profit(1824, 274, t.operatingProfit, t.margin43, t.pp4)] },
      operating_expenses: { blocks: [block(1820, 932, [...[].concat(t.operatingExpenses).map((v) => line(v, 36, { weight: 800, color: RED_LABEL })), line('$value', 34, { color: RED_LABEL })])] },
      non_operating_income: { blocks: [] },
      net_profit: { blocks: [profit(2445, zh ? 366 : 380, t.netProfit, t.margin31, t.pp11)] },
      tax: { blocks: [right(2448, 699, t.tax)] },
      interest: { blocks: [right(2448, 817, t.interest)] },
      other_sga: { blocks: [right(2448, zh ? 989 : 1000, t.otherSga, zh ? 27 : 31)] },
      depreciation_amortization: { blocks: [right(2451, zh ? 1137 : 1124, t.da, zh ? 31 : 31)] },
      other_opex: { blocks: [right(2448, zh ? 1262 : 1254, t.otherOpex, zh ? 29 : 31)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q1-fy23',
    name: "McDonald's · Q1 FY23",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q1 FY23 Income Statement", period: 'Q1 FY23', periodNote: 'Ending Mar. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 203, titleSize: 132, titleWeight: 800, titleTextLength: 2430,
      hidePeriodStamp: true,
      logoWidth: 214, logoHeight: 187, logoY: 258, logoViewBox: '0 0 256 199', logoSvg: arches,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error', fullFaceIds: ['net_profit:left'] },
      palette: { source: { node: GOLD, label: '#050505' }, hub: { node: GOLD, label: '#050505' }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GOLD_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'non_operating_income', representation: 'flow', label: 'Non-operating', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.2, notes: ['(3%) Y/Y'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 3.6, notes: ['+10% Y/Y'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['(14%) Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 5.9, notes: ['+4% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.3, notes: ['56% margin', '+2pp Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.6 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 2.5, notes: ['43% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.8 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 1.8, notes: ['31% margin', '+11pp Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.2, sourceWidth: 157, targetWidth: 157, y0: 579.5, y1: 702.5, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 3.6, sourceWidth: 260, targetWidth: 260, y0: 918, y1: 911, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 7, y0: 1179.5, y1: 1044.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.3, sourceWidth: 244, targetWidth: 243, y0: 746, y1: 660.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.6, sourceWidth: 180, targetWidth: 179, y0: 958, y1: 1043.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 184, targetWidth: 184, y0: 631, y1: 547, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.8, sourceWidth: 59, targetWidth: 58, y0: 752.5, y1: 879, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 130, targetWidth: 135, y0: 520, y1: 418.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'non_operating_income', target: 'net_profit', value: 0.1, sourceWidth: 3, targetWidth: 5, y0: 548, y1: 483.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2119, c1x: 2188, c1y: 548, c2x: 2210, c2y: 486 } },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 30, targetWidth: 29, y0: 600, y1: 738.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 24, targetWidth: 20, y0: 626, y1: 857, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_sga', value: 0.6, sourceWidth: 50, targetWidth: 50, y0: 875, y1: 1033, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 5, targetWidth: 5, y0: 902.5, y1: 1176.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 3, targetWidth: 1, y0: 906.5, y1: 1309.5, sourceOrder: 2, targetOrder: 0 },
    ],
    layout: {
      scale: 71.86,
      routes: { non_operating_income: { x: 2119, y: 548, width: 0, height: 3 } },
      nodes: {
        company_owned_restaurants: { x: 385, y: 501, width: 71, height: 157 },
        franchised_restaurants: { x: 385, y: 788, width: 71, height: 260 },
        other_revenue: { x: 385, y: 1178, width: 71, height: 3 },
        revenue: { x: 847, y: 624, width: 70, height: 424 },
        gross_profit: { x: 1316, y: 539, width: 72, height: 243 },
        restaurant_expenses: { x: 1319, y: 954, width: 71, height: 179 },
        operating_profit: { x: 1789, y: 455, width: 70, height: 184 },
        operating_expenses: { x: 1792, y: 850, width: 70, height: 58 },
        net_profit: { x: 2253, y: 351, width: 71, height: 135 },
        tax: { x: 2253, y: 724, width: 71, height: 29 },
        interest: { x: 2253, y: 847, width: 71, height: 20 },
        other_sga: { x: 2253, y: 1008, width: 71, height: 50 },
        depreciation_amortization: { x: 2253, y: 1174, width: 71, height: 5 },
        other_opex: { x: 2253, y: 1309, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2023 财年第一季度',
        meta: { title: '麦当劳 2023 财年第一季度利润表', period: '2023 财年第一季度', periodNote: '截至 2023 年 3 月', titleTextLength: 1580 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { non_operating_income: { label: '非营业收入' } },
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 (3%)'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +10%'] },
          other_revenue: { label: '其他收入', notes: ['同比 (14%)', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +2 个百分点'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +11 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
          other_sga: { label: ['其他销售、一般及', '行政费用'] },
          depreciation_amortization: { label: '折旧及摊销' }, other_opex: { label: '其他运营费用' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

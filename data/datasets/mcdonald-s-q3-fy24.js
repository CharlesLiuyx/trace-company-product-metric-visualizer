/* McDonald's Q3 FY24 income statement ($B), measured from the native
 * 2667x1500 Source. Financial values live in the pure Metric SSOT. */
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

  const card = (x, width, title, lines, fontFamily = 'Noto Sans,Arial,sans-serif') =>
    '<g><rect x="' + x + '" y="1199" width="' + width + '" height="148" rx="29" fill="#000"/>' +
    '<text x="' + (x + width / 2) + '" y="1241" text-anchor="middle" font-family="' + fontFamily + '" font-size="29" font-weight="800" fill="#fff">' + title + '</text>' +
    lines.map((line, index) => '<text x="' + (x + width / 2) + '" y="' + (lines.length === 1 ? 1299 : 1278 + index * 31) + '" text-anchor="middle" font-family="' + fontFamily + '" font-size="24" fill="#fff">' + line + '</text>').join('') +
    '</g>';

  const guideAnnotations = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other_income"
      data-link-numerator="other_income" data-link-denominator="net_profit"
      data-link-anchor-x="2165" data-link-anchor-y="561">
      <path d="M2090 561H2165C2208 561 2207 503 2250 503"
        fill="none" stroke="#5f965f" stroke-width="1"/>
      <text x="2132" y="613" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2132" y="654" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$36M</text>
    </g>`;

  const annotations = (zh) => '<g font-family="Noto Sans,Arial,sans-serif">' +
    card(150, 271, zh ? '全球' : 'Global', zh ? ['可比销售额', '同比 (1.5%)'] : ['comparable sales', '(1.5%) Y/Y'], zh ? 'Noto Sans SC,Noto Sans,Arial,sans-serif' : undefined) +
    card(435, 273, zh ? '系统销售额' : 'Systemwide sales', [zh ? '同比持平' : 'Flat Y/Y'], zh ? 'Noto Sans SC,Noto Sans,Arial,sans-serif' : undefined) +
    guideAnnotations(zh) +
    '</g>';

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8, semanticRole = '') => ({
    x, top, anchor, lineGap, lines, ...(semanticRole ? { semanticRole } : {}),
  });

  const labels = (zh) => {
    const t = zh ? {
      companyOwned: ['自营餐厅', '销售额'], franchised: ['加盟餐厅'], otherRevenue: ['其他收入'], otherRestaurants: '其他餐厅',
      revenue: '收入', gross: '毛利润', restaurantExpenses: ['餐厅费用'], operatingProfit: '营业利润', operatingExpenses: ['运营费用'],
      net: '净利润', tax: '税费', interest: '利息', otherSga: ['其他销售、一般及', '行政费用'], depreciation: ['折旧及摊销'],
      y4: '同比 +4%', y1: '同比 +1%', y39: '同比 +39%', y3: '同比 +3%', gm15: '毛利率 15%', gm84: '毛利率 84%',
      m56: '利润率 56%', m46: '利润率 46%', m33: '利润率 33%', pp1: '同比 (1 个百分点)', pp2: '同比 (2 个百分点)',
    } : {
      companyOwned: ['Sales from', 'company-owned', 'restaurants'], franchised: ['Franchised', 'restaurants'], otherRevenue: ['Other revenue'], otherRestaurants: 'Other restaurants',
      revenue: 'Revenue', gross: 'Gross profit', restaurantExpenses: ['Restaurant', 'expenses'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', interest: 'Interest', otherSga: ['Other SG&A'], depreciation: ['Depreciation &', 'amortization'],
      y4: '+4% Y/Y', y1: '+1% Y/Y', y39: '+39% Y/Y', y3: '+3% Y/Y', gm15: '15% gross margin', gm84: '84% gross margin',
      m56: '56% margin', m46: '46% margin', m33: '33% margin', pp1: '(1pp) Y/Y', pp2: '(2pp) Y/Y',
    };
    return {
      other_income: { blocks: [] },
      company_owned_restaurants: { blocks: [
        block(418, 346, [line('$value', 38), line(t.y4, 28, 400, NOTE)]),
        block(199, zh ? 438 : 414, [...t.companyOwned.map((v) => line(v, 39, 800)), line(t.gm15, 27, 400, NOTE)]),
      ] },
      franchised_restaurants: { blocks: [
        block(418, 655, [line('$value', 38), line(t.y1, 28, 400, NOTE)]),
        block(196, zh ? 785 : 771, [...t.franchised.map((v) => line(v, 39, 800)), line(t.gm84, 27, 400, NOTE)]),
      ] },
      other_revenue: { blocks: [
        block(418, 1040, [line('$value', 38), line(t.y39, 28, 400, NOTE)]),
        block(205, 1086, [...t.otherRevenue.map((v) => line(v, 39, 800)), line(t.otherRestaurants, 27, 400, NOTE)], 'middle', 8, 'reference-offset-side-label'),
      ] },
      revenue: { blocks: [block(884, 526, [line(t.revenue, 40, 800), line('$value', 38), line(t.y3, 28, 400, NOTE)], 'middle', 9)] },
      gross_profit: { blocks: [block(1352, 379, [line(t.gross, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(t.m56, 28, 400, NOTE), line(t.pp1, 28, 400, NOTE)], 'middle', 9)] },
      restaurant_expenses: { blocks: [block(1352, 1158, [...t.restaurantExpenses.map((v) => line(v, 37, 800, RED_LABEL)), line('$value', 35, 400, RED_LABEL)])] },
      operating_profit: { blocks: [block(1809, 295, [line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(t.m46, 28, 400, NOTE), line(t.pp2, 28, 400, NOTE)], 'middle', 9)] },
      operating_expenses: { blocks: [block(1811, 911, [...t.operatingExpenses.map((v) => line(v, 36, 800, RED_LABEL)), line('$value', 34, 400, RED_LABEL)])] },
      net_profit: { blocks: [block(2448, zh ? 351.5 : 365.5, [line(t.net, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(t.m33, 28, 400, NOTE), line(t.pp2, 28, 400, NOTE)], 'middle', 9)] },
      tax: { blocks: [block(2448, 672, [line(t.tax, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
      interest: { blocks: [block(2448, 808, [line(t.interest, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
      other_sga: { blocks: [block(2448, zh ? 958 : 967, [...t.otherSga.map((v) => line(v, zh ? 27 : 31, 800, RED_LABEL)), line('$value', 31, 400, RED_LABEL)])] },
      depreciation_amortization: { blocks: [block(2448, 1099, [...t.depreciation.map((v) => line(v, 31, 800, RED_LABEL)), line('$value', 31, 400, RED_LABEL)])] },
      other_operating_expense: { blocks: [block(2448, 1251, [line(zh ? '其他' : 'Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q3-fy24',
    name: "McDonald's · Q3 FY24",
    company: "McDonald's",
    meta: {
      company: "McDonald's", title: "McDonald's Q3 FY24 Income Statement", period: 'Q3 FY24', periodNote: 'Ending Sep. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 132, titleWeight: 800, titleTextLength: 2430,
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
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.036, valueText: '$36M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.7, notes: ['+4% Y/Y', '15% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 4.1, notes: ['+1% Y/Y', '84% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['+39% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.9, notes: ['+3% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.9, notes: ['56% margin', '(1pp) Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 3.0, valueText: '($3.0B)' },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 3.1, notes: ['46% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.7 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.3, notes: ['33% margin', '(2pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.5 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
      { id: 'other_operating_expense', type: 'cost', label: 'Other', value: 0.039, valueText: '($39M)' },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.7, sourceWidth: 140, targetWidth: 140, y0: 507, y1: 737, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 4.1, sourceWidth: 217, targetWidth: 221, y0: 854.5, y1: 917.5, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 5, targetWidth: 5, y0: 1132.5, y1: 1030.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.9, sourceWidth: 205, targetWidth: 205, y0: 769.5, y1: 663.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 3.0, sourceWidth: 161, targetWidth: 158, y0: 952.5, y1: 1057, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.1, sourceWidth: 168, targetWidth: 168, y0: 645, y1: 560, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 37, targetWidth: 35, y0: 747.5, y1: 872.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 117, targetWidth: 118, y0: 534.5, y1: 443, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.036, sourceWidth: 1, targetWidth: 1, y0: 561, y1: 502.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2090, x1: 2250, c1x: 2165, c1y: 561, c2x: 2207, c2y: 503 } },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 30, targetWidth: 30, y0: 608, y1: 711, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 21, targetWidth: 18, y0: 633.5, y1: 854, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_sga', value: 0.5, sourceWidth: 26, targetWidth: 26, y0: 868, y1: 1003, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 5, targetWidth: 3, y0: 883.5, y1: 1150.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.039, sourceWidth: 4, targetWidth: 5, y0: 888, y1: 1282.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, curve: { x0: 1846, x1: 2250, c1x: 2015, c1y: 888, c2x: 2075, c2y: 1282.5 } },
    ],
    layout: {
      scale: 52.8,
      routes: {
        other_income: { x: 2090, y: 561, width: 0, height: 1 },
      },
      nodes: {
        company_owned_restaurants: { x: 382, y: 437, width: 71, height: 140 },
        franchised_restaurants: { x: 382, y: 746, width: 71, height: 217 },
        other_revenue: { x: 382, y: 1130, width: 71, height: 5 },
        revenue: { x: 849, y: 667, width: 70, height: 366 },
        gross_profit: { x: 1316, y: 561, width: 71, height: 205 },
        restaurant_expenses: { x: 1316, y: 978, width: 71, height: 158 },
        operating_profit: { x: 1774, y: 476, width: 70, height: 168 },
        operating_expenses: { x: 1776, y: 855, width: 70, height: 35 },
        net_profit: { x: 2250, y: 384, width: 71, height: 119 },
        tax: { x: 2250, y: 696, width: 71, height: 30 },
        interest: { x: 2250, y: 845, width: 71, height: 18 },
        other_sga: { x: 2250, y: 990, width: 71, height: 26 },
        depreciation_amortization: { x: 2250, y: 1149, width: 71, height: 3 },
        other_operating_expense: { x: 2250, y: 1280, width: 71, height: 5 },
      },
      labels: labels(false),
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2024 财年第三季度',
        meta: { title: '麦当劳 2024 财年第三季度利润表', period: '2024 财年第三季度', periodNote: '截至 2024 年 9 月', titleTextLength: 1900 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 +4%', '毛利率 15%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +1%', '毛利率 84%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +39%', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 (1 个百分点)'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 46%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 33%', '同比 (2 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' }, other_sga: { label: '其他销售、一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
          other_operating_expense: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

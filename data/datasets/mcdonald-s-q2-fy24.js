/* McDonald's Q2 FY24 income statement ($B), reconstructed from the native
 * 2667×1500 Source as a fixed d3-Sankey. */
(function () {
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

  const annotations = (zh) => {
    const cardOne = zh
      ? ['全球', '可比销售额', '同比 (1%)']
      : ['Global', 'comparable sales', '(1%) Y/Y'];
    const cardTwo = zh
      ? ['系统销售额', '同比 (1%)']
      : ['Systemwide sales', '(1%) Y/Y'];
    return '<g font-family="Noto Sans,Arial,sans-serif">' +
      '<g><rect x="150" y="1241" width="271" height="148" rx="29" fill="#000"/>' +
      '<text x="285.5" y="1295" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + cardOne[0] + '</text>' +
      '<text x="285.5" y="1332" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + cardOne[1] + '</text>' +
      '<text x="285.5" y="1372" text-anchor="middle" font-size="24" fill="#fff">' + cardOne[2] + '</text></g>' +
      '<g><rect x="435" y="1241" width="273" height="148" rx="29" fill="#000"/>' +
      '<text x="571.5" y="1310" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + cardTwo[0] + '</text>' +
      '<text x="571.5" y="1351" text-anchor="middle" font-size="24" fill="#fff">' + cardTwo[1] + '</text></g>' +
      '<g class="sankey-interactive-annotation" data-node="other_income" data-link-numerator="other_income" data-link-denominator="net_profit" data-link-anchor-x="2190" data-link-anchor-y="604">' +
      '<path d="M2118 604H2190C2222 604 2228 543 2253 543" fill="none" stroke="' + GREEN_LINK + '" stroke-width="2"/>' +
      '<text x="2157.5" y="646" text-anchor="middle" font-size="31" font-weight="800" fill="' + GREEN_LABEL + '">' + (zh ? '其他' : 'Other') + '</text>' +
      '<text x="2157.5" y="684" text-anchor="middle" font-size="31" fill="' + GREEN_LABEL + '">$9M</text></g>' +
      '</g>';
  };

  const labels = {
    company_owned_restaurants: { blocks: [
      { x: 421, top: 343, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '(1%) Y/Y', size: 28, color: NOTE }] },
      { x: 200, top: 434, anchor: 'middle', lineGap: 8, lines: [{ text: 'Sales from', size: 39, weight: 800 }, { text: 'company-owned', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '15% gross margin', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 421, top: 646, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+0% Y/Y', size: 28, color: NOTE }] },
      { x: 200, top: 790, anchor: 'middle', lineGap: 8, lines: [{ text: 'Franchised', size: 39, weight: 800 }, { text: 'restaurants', size: 39, weight: 800 }, { text: '84% gross margin', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 424, top: 1038, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '+16% Y/Y', size: 28, color: NOTE }] },
      { x: 204, top: 1105, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 8, lines: [{ text: 'Other revenue', size: 39, weight: 800 }, { text: 'Other restaurants', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 888, top: 539, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '(0%) Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1357.5, top: 401, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '57% margin', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352.5, top: 1163, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restaurant', size: 37, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1826, top: 319, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '45% margin', size: 28, color: NOTE }, { text: '(3pp) Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 917, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2445, top: 425, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '31% margin', size: 28, color: NOTE }, { text: '(4pp) Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 710, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2451.5, top: 836, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448.5, top: 963, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2452, top: 1080, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_operating_expense: { blocks: [{ x: 2453.5, top: 1213, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_income: { blocks: [] },
  };

  const zhLabels = {
    company_owned_restaurants: { blocks: [
      { x: 421, top: 343, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 (1%)', size: 28, color: NOTE }] },
      { x: 200, top: 462, anchor: 'middle', lineGap: 8, lines: [{ text: '自营餐厅', size: 39, weight: 800 }, { text: '销售额', size: 39, weight: 800 }, { text: '毛利率 15%', size: 27, color: NOTE }] },
    ] },
    franchised_restaurants: { blocks: [
      { x: 421, top: 646, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +0%', size: 28, color: NOTE }] },
      { x: 200, top: 805, anchor: 'middle', lineGap: 8, lines: [{ text: '加盟餐厅', size: 39, weight: 800 }, { text: '毛利率 84%', size: 27, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 424, top: 1038, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38 }, { text: '同比 +16%', size: 28, color: NOTE }] },
      { x: 204, top: 1108, anchor: 'middle', lineGap: 8, lines: [{ text: '其他收入', size: 39, weight: 800 }, { text: '其他餐厅', size: 27, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 888, top: 539, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38 }, { text: '同比 (0%)', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1357.5, top: 401, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 57%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    restaurant_expenses: { blocks: [{ x: 1352.5, top: 1163, anchor: 'middle', lineGap: 8, lines: [{ text: '餐厅费用', size: 37, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1826, top: 319, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 45%', size: 28, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 917, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }] }] },
    net_profit: { blocks: [{ x: 2445, top: 425, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, color: GREEN_LABEL }, { text: '利润率 31%', size: 28, color: NOTE }, { text: '同比 (4 个百分点)', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2448, top: 710, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2451.5, top: 836, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_sga: { blocks: [{ x: 2448.5, top: 954, anchor: 'middle', lineGap: 8, lines: [{ text: '其他销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '行政费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    depreciation_amortization: { blocks: [{ x: 2452, top: 1105, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
    other_operating_expense: { blocks: [{ x: 2453.5, top: 1213, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mcdonald-s-q2-fy24',
    name: "McDonald's · Q2 FY24",
    company: "McDonald's",
    meta: {
      company: "McDonald's",
      title: "McDonald's Q2 FY24 Income Statement",
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/mcdonald-s-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2430,
      hidePeriodStamp: true,
      logoX: 777,
      logoY: 267,
      logoWidth: 227,
      logoHeight: 199,
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
      palette: {
        source: { node: GOLD, label: '#000000' },
        hub: { node: GOLD, label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GOLD_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.009, valueText: '$9M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'company_owned_restaurants', type: 'source', label: ['Sales from', 'company-owned', 'restaurants'], value: 2.5, notes: ['(1%) Y/Y', '15% gross margin'] },
      { id: 'franchised_restaurants', type: 'source', label: ['Franchised', 'restaurants'], value: 3.9, notes: ['+0% Y/Y', '84% gross margin'] },
      { id: 'other_revenue', type: 'source', label: 'Other revenue', value: 0.1, notes: ['+16% Y/Y', 'Other restaurants'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 6.5, notes: ['(0%) Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 3.7, notes: ['57% margin', '(0pp) Y/Y'] },
      { id: 'restaurant_expenses', type: 'cost', label: ['Restaurant', 'expenses'], value: 2.8 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 2.9, notes: ['45% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.8 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 2.0, valueText: '$2.0B', notes: ['31% margin', '(4pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.4 },
      { id: 'other_sga', type: 'cost', label: 'Other SG&A', value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.1 },
      { id: 'other_operating_expense', type: 'cost', label: 'Other', value: 0.1 },
    ],
    links: [
      { source: 'company_owned_restaurants', target: 'revenue', value: 2.5, sourceWidth: 132, targetWidth: 132, y0: 499, y1: 749, targetOrder: 0 },
      { source: 'franchised_restaurants', target: 'revenue', value: 3.9, sourceWidth: 212, targetWidth: 216, y0: 841, y1: 923, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 1128.5, y1: 1032.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.7, sourceWidth: 201, targetWidth: 200, y0: 783.5, y1: 685, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'restaurant_expenses', value: 2.8, sourceWidth: 149, targetWidth: 149, y0: 959.5, y1: 1064.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.9, sourceWidth: 158, targetWidth: 156, y0: 664, y1: 584, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.8, sourceWidth: 42, targetWidth: 42, y0: 764, y1: 873, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.0, sourceWidth: 110, targetWidth: 106, y0: 561, y1: 489, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.009, sourceWidth: 2, targetWidth: 1, y0: 604, y1: 542.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 27, targetWidth: 27, y0: 629.5, y1: 749.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 19, targetWidth: 19, y0: 652.5, y1: 865.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_sga', value: 0.6, sourceWidth: 32, targetWidth: 30, y0: 868, y1: 996, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.1, sourceWidth: 5, targetWidth: 4, y0: 886.5, y1: 1133, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.1, sourceWidth: 5, targetWidth: 3, y0: 891.5, y1: 1242.5, sourceOrder: 2, targetOrder: 0 },
    ],
    layout: {
      scale: 53.5,
      routes: { other_income: { x: 2190, y: 604, width: 0, height: 2 } },
      nodes: {
        company_owned_restaurants: { x: 385, y: 433, width: 71, height: 132 },
        franchised_restaurants: { x: 385, y: 735, width: 71, height: 212 },
        other_revenue: { x: 385, y: 1127, width: 71, height: 3 },
        revenue: { x: 852, y: 683, width: 70, height: 351 },
        gross_profit: { x: 1319, y: 585, width: 71, height: 200 },
        restaurant_expenses: { x: 1319, y: 990, width: 71, height: 149 },
        operating_profit: { x: 1794, y: 506, width: 70, height: 156 },
        operating_expenses: { x: 1794, y: 852, width: 70, height: 42 },
        net_profit: { x: 2253, y: 436, width: 71, height: 107 },
        tax: { x: 2253, y: 736, width: 71, height: 27 },
        interest: { x: 2253, y: 856, width: 71, height: 19 },
        other_sga: { x: 2253, y: 981, width: 71, height: 30 },
        depreciation_amortization: { x: 2253, y: 1131, width: 71, height: 4 },
        other_operating_expense: { x: 2253, y: 1241, width: 71, height: 3 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '麦当劳 · 2024 财年第二季度',
        meta: {
          title: '麦当劳 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          company_owned_restaurants: { label: ['自营餐厅', '销售额'], notes: ['同比 (1%)', '毛利率 15%'] },
          franchised_restaurants: { label: '加盟餐厅', notes: ['同比 +0%', '毛利率 84%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +16%', '其他餐厅'] },
          revenue: { label: '收入', notes: ['同比 (0%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 (0 个百分点)'] },
          restaurant_expenses: { label: '餐厅费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 45%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          other_sga: { label: '其他销售、一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
          other_operating_expense: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

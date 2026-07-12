/* Flutter Entertainment — Q1 FY26 income statement ($B).
 * Fixed-layout reconstruction measured against the active local reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const CYAN = '#009cde';
  const CYAN_LABEL = '#0098df';
  const CYAN_LINK = '#7cc3e3';
  const NAVY = '#031338';
  const NAVY_LINK = '#8d97aa';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const copy = (zh) => zh ? {
    us: '美国', international: '国际业务', sportsbook: '体育博彩', igaming: '在线博彩', other: '其他',
    revenue: '收入', gross: '毛利润', cost: ['销售', '成本'], operating: ['营业利润'],
    expenses: ['营业', '费用'], net: '净利润', tax: '税费', sm: '销售与营销', ga: '一般及行政', rnd: '研发',
    yoy6: '同比 +6%', yoy27: '同比 +27%', yoy10: '同比 +10%', yoy26: '同比 +26%', yoy3: '同比 +3%', yoy17: '同比 +17%',
    margin43: '毛利率 43%', margin2: '利润率 1.8%', margin10: '利润率 4.9%', pp4: '同比 (4 个百分点)', pp1: '同比 -4.2pp',
    smPct: '占收入 22%', gaPct: '占收入 12%', rndPct: '占收入 6%', pp0: '同比 (0 个百分点)', country: '美国',
  } : {
    us: 'US', international: 'International', sportsbook: 'Sportsbook', igaming: 'iGaming', other: 'Other',
    revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'sales'], operating: ['Operating profit'],
    expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', sm: 'S&M', ga: 'G&A', rnd: 'R&D',
    yoy6: '+6% Y/Y', yoy27: '+27% Y/Y', yoy10: '+10% Y/Y', yoy26: '+26% Y/Y', yoy3: '+3% Y/Y', yoy17: '+17% Y/Y',
    margin43: '43% margin', margin2: '1.8% margin', margin10: '4.9% margin', pp4: '(4pp) Y/Y', pp1: '(4.2pp) Y/Y',
    smPct: '22% of revenue', gaPct: '12% of revenue', rndPct: '6% of revenue', pp0: '(0pp) Y/Y', country: 'US',
  };

  const annotations = (zh) => {
    const T = copy(zh);
    return `
      <g class="sankey-interactive-annotation" data-node="us">
        <rect x="341" y="679" width="42" height="27" rx="1" fill="#ffffff"/>
        <rect x="341" y="679" width="42" height="3" fill="#b22234"/><rect x="341" y="685" width="42" height="3" fill="#b22234"/>
        <rect x="341" y="691" width="42" height="3" fill="#b22234"/><rect x="341" y="697" width="42" height="3" fill="#b22234"/>
        <rect x="341" y="679" width="19" height="15" fill="#3c3b6e"/>
        <text x="401" y="708" text-anchor="start" font-size="40" font-weight="800" fill="${CYAN_LABEL}">${T.country}</text>
        <rect x="335" y="670" width="136" height="48" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="sankey-interactive-annotation" data-node="igaming">
        <path d="M847 910 C942 910 1017 890 1086 820 L1158 820 C1232 820 1272 910 1397 910 C1272 910 1232 1009 1158 1009 L1086 1009 C1017 1009 942 955 847 910 Z" fill="${BG}"/>
        <text x="1121" y="896" text-anchor="middle" font-size="40" font-weight="700" fill="${NAVY}">${T.igaming}</text>
        <text x="1121" y="949" text-anchor="middle" font-size="39" font-weight="400" fill="${NAVY}">$2.0B</text>
        <text x="1121" y="991" text-anchor="middle" font-size="27" font-weight="400" fill="${NOTE}">${T.yoy26}</text>
        <rect x="847" y="820" width="551" height="195" fill="#ffffff" fill-opacity="0"/>
      </g>`;
  };

  const labels = (zh) => {
    const T = copy(zh);
    const center = (x, top, lines, lineGap = 9) => ({ x, top, anchor: 'middle', lineGap, lines });
    const right = (x, top, lines, lineGap = 7) => ({ x, top, anchor: 'start', lineGap, lines });
    const line = (text, size, opts = {}) => ({ text, size, weight: opts.weight || 400, color: opts.color });
    const terminalX = zh ? 2420 : 2480;
    return {
      us: { blocks: [center(500, 531, [line('$value', 39, { color: CYAN_LABEL }), line(T.yoy6, 27, { color: NOTE })])] },
      international: { blocks: [
        center(500, 866, [line('$value', 39, { color: CYAN_LABEL }), line(T.yoy27, 27, { color: NOTE })]),
        center(217, 958, [line(T.international, 39, { weight: 800, color: CYAN_LABEL })]),
      ] },
      revenue_geo: { blocks: [center(811, 596, [line(T.revenue, 40, { weight: 800 }), line('$value', 39), line(T.yoy17, 27, { color: NOTE })])] },
      sportsbook: { blocks: [center(1121, 470, [line(T.sportsbook, 40, { weight: 800 }), line('$value', 39), line(T.yoy10, 27, { color: NOTE })])] },
      igaming: { blocks: [] },
      other_revenue: { blocks: [center(1121, 1167, [line(T.other, 40, { weight: 800 }), line('$value', 39), line(T.yoy3, 27, { color: NOTE })])] },
      revenue: { blocks: [center(1434, 596, [line(T.revenue, 40, { weight: 800 }), line('$value', 39), line(T.yoy17, 27, { color: NOTE })])] },
      gross_profit: { blocks: [center(1746, 447, [line(T.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(T.margin43, 28, { color: NOTE }), line(T.pp4, 28, { color: NOTE })])] },
      cost_of_sales: { blocks: [center(1746, 1172, [...T.cost.map((value) => line(value, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })])] },
      operating_profit: { blocks: [center(2055, 350, [...T.operating.map((value) => line(value, 40, { weight: 800, color: GREEN_LABEL })), line('$value', 39, { color: GREEN_LABEL }), line(T.margin2, 28, { color: NOTE }), line(T.pp4, 28, { color: NOTE })])] },
      operating_expenses: { blocks: [center(2057, 937, [...T.expenses.map((value) => line(value, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })])] },
      other_income: { blocks: [center(2263, 529, [line(T.other, 31, { weight: 800, color: GREEN_LABEL }), line('$value', 31, { color: GREEN_LABEL })])] },
      net_profit: { blocks: [right(2438, 404, [line(T.net, 39, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(T.margin10, 28, { color: NOTE }), line(T.pp1, 28, { color: NOTE })])] },
      tax: { blocks: [right(terminalX, 634, [line(T.tax, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })])] },
      sm: { blocks: [right(terminalX, 862, [line(T.sm, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.smPct, 28, { color: NOTE }), line(T.pp0, 28, { color: NOTE })])] },
      ga: { blocks: [right(terminalX, 1058, [line(T.ga, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.gaPct, 28, { color: NOTE }), line(T.pp1, 28, { color: NOTE })])] },
      rnd: { blocks: [right(terminalX, 1248, [line(T.rnd, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.rndPct, 28, { color: NOTE }), line(T.pp0, 28, { color: NOTE })])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'flutter-q1-fy26',
    name: 'Flutter Entertainment · Q1 FY26',
    company: 'Flutter Entertainment',
    meta: {
      company: 'Flutter Entertainment', title: 'Flutter Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/flutter-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2200,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: CYAN, label: CYAN_LABEL }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: CYAN_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'flutter-company-wordmark', href: 'data/assets/raster-annotations/flutter/company-wordmark.png', x: 808, y: 254, width: 650, height: 166 },
      { key: 'fanduel-us-brand', href: 'data/assets/raster-annotations/flutter/fanduel-us-brand.png', x: 14, y: 655, width: 300, height: 76 },
      { key: 'flutter-international-brand-cluster', href: 'data/assets/raster-annotations/flutter/international-brand-cluster.png', x: 78, y: 1008, width: 364, height: 204 },
    ],
    layout: {
      scale: 74,
      nodes: {
        us: { x: 465, y: 620, width: 71, height: 133 }, international: { x: 465, y: 956, width: 71, height: 195 },
        revenue_geo: { x: 776, y: 738, width: 71, height: 331 },
        sportsbook: { x: 1085, y: 613, width: 71, height: 170 }, igaming: { x: 1087, y: 1010, width: 72, height: 147 }, other_revenue: { x: 1087, y: 1318, width: 72, height: 7 },
        revenue: { x: 1399, y: 742, width: 71, height: 332 }, gross_profit: { x: 1710, y: 631, width: 72, height: 140 }, cost_of_sales: { x: 1710, y: 975, width: 72, height: 189 },
        operating_profit: { x: 2019, y: 538, width: 72, height: 4 }, operating_expenses: { x: 2022, y: 788, width: 71, height: 134 }, other_income: { x: 2227, y: 499, width: 71, height: 10 },
        net_profit: { x: 2333, y: 452, width: 71, height: 14 }, tax: { x: 2333, y: 667, width: 71, height: 2 }, sm: { x: 2333, y: 880, width: 71, height: 72 }, ga: { x: 2333, y: 1090, width: 71, height: 39 }, rnd: { x: 2333, y: 1260, width: 71, height: 18 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'us', col: 0, order: 0, type: 'source', label: 'US', value: 1.8, notes: ['+6% Y/Y'] },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 2.5, notes: ['+27% Y/Y'] },
      { id: 'revenue_geo', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.3, notes: ['+17% Y/Y'] },
      { id: 'sportsbook', col: 2, order: 0, type: 'hub', label: 'Sportsbook', value: 2.2, notes: ['+10% Y/Y'] },
      { id: 'igaming', col: 2, order: 1, type: 'hub', label: 'iGaming', value: 2.0, notes: ['+26% Y/Y'] },
      { id: 'other_revenue', col: 2, order: 2, type: 'hub', label: 'Other', value: 0.1, notes: ['+3% Y/Y'] },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 4.3, notes: ['+17% Y/Y'] },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 1.8, notes: ['43% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 2.5, valueText: '($2.5B)' },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: ['Operating profit'], value: 0.079, valueText: '$0.08B', notes: ['1.8% margin', '(4.3pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.8, valueText: '($1.8B)' },
      { id: 'other_income', col: 6, order: 0, type: 'profit', label: 'Other', value: 0.155, valueText: '$0.16B' },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 0.209, valueText: '$0.21B', notes: ['4.9% margin', '(4.2pp) Y/Y'] },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 0.025, valueText: '($25M)' },
      { id: 'sm', col: 7, order: 2, type: 'cost', label: 'S&M', value: 1.0, valueText: '($1.0B)', notes: ['22% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 7, order: 3, type: 'cost', label: 'G&A', value: 0.5, valueText: '($0.5B)', notes: ['12% of revenue', '+1pp Y/Y'] },
      { id: 'rnd', col: 7, order: 4, type: 'cost', label: 'R&D', value: 0.3, valueText: '($0.3B)', notes: ['6% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'us', target: 'revenue_geo', value: 1.8, sourceWidth: 133, targetWidth: 133, y0: 686.5, y1: 804.5, linkTint: CYAN_LINK },
      { source: 'international', target: 'revenue_geo', value: 2.5, sourceWidth: 195, targetWidth: 198, y0: 1053.5, y1: 970, linkTint: CYAN_LINK },
      { source: 'revenue_geo', target: 'sportsbook', value: 2.2, sourceWidth: 170, targetWidth: 170, y0: 823, y1: 698, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue_geo', target: 'igaming', value: 2.0, sourceWidth: 147, targetWidth: 147, y0: 981.5, y1: 1083.5, sourceOrder: 1, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue_geo', target: 'other_revenue', value: 0.1, sourceWidth: 14, targetWidth: 7, y0: 1062, y1: 1321.5, sourceOrder: 2, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'sportsbook', target: 'revenue', value: 2.2, sourceWidth: 170, targetWidth: 170, y0: 698, y1: 827, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'igaming', target: 'revenue', value: 2.0, sourceWidth: 147, targetWidth: 147, y0: 1083.5, y1: 985.5, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 7, targetWidth: 15, y0: 1321.5, y1: 1066.5, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.8, sourceWidth: 140, targetWidth: 140, y0: 812, y1: 701, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2.5, sourceWidth: 192, targetWidth: 189, y0: 978, y1: 1069.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.079, sourceWidth: 4, targetWidth: 4, y0: 633, y1: 540, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.8, sourceWidth: 134, targetWidth: 134, y0: 702, y1: 855, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.079, sourceWidth: 2, targetWidth: 4, y0: 539, y1: 454, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.155, sourceWidth: 10, targetWidth: 10, y0: 504, y1: 461, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.025, sourceWidth: 2, targetWidth: 2, y0: 541, y1: 668, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.0, sourceWidth: 72, targetWidth: 72, y0: 824, y1: 916, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.5, sourceWidth: 39, targetWidth: 39, y0: 879.5, y1: 1109.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, sourceWidth: 23, targetWidth: 18, y0: 910.5, y1: 1269, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Flutter Entertainment · 2026 财年第一季度',
        meta: { title: 'Flutter 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleSize: 115, titleTextLength: 2200 },
        nodes: {
          us: { label: '美国', notes: ['同比 +6%'] }, international: { label: '国际业务', notes: ['同比 +27%'] },
          revenue_geo: { label: '收入', notes: ['同比 +17%'] }, sportsbook: { label: '体育博彩', notes: ['同比 +10%'] }, igaming: { label: '在线博彩', notes: ['同比 +26%'] }, other_revenue: { label: '其他', notes: ['同比 +3%'] }, revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 43%', '同比 (4 个百分点)'] }, cost_of_sales: { label: ['销售', '成本'] }, operating_profit: { label: ['营业利润'], notes: ['利润率 1.8%', '同比 (4.3 个百分点)'] }, operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 4.9%', '同比 -4.2pp'] }, tax: { label: '税费' }, sm: { label: '销售与营销', notes: ['占收入 22%', '同比 (0 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 12%', '同比 +1 个百分点'] }, rnd: { label: '研发', notes: ['占收入 6%', '同比 +0 个百分点'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();

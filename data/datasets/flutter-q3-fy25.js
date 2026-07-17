/* Flutter Entertainment — Q3 FY25 income statement ($B).
 * Fixed-layout reconstruction measured against the Build-bound Source. */
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
    revenue: '收入', gross: '毛利润', cost: ['销售', '成本'], operatingLoss: ['营业', '亏损'],
    expenses: ['营业', '费用'], sm: '销售与营销', ga: '一般及行政', impairment: '减值', rnd: '研发',
    yoy9: '同比 +9%', yoy21: '同比 +21%', yoy17: '同比 +17%', yoy3: '同比 +3%', yoy35: '同比 +35%', yoy2: '同比 +2%',
    margin43: '毛利率 43%', margin22: '利润率 (22%)', pp3: '同比 (3 个百分点)', pp25: '同比 (25 个百分点)',
    smPct: '占收入 25%', gaPct: '占收入 19%', impairmentPct: '占收入 14%', rndPct: '占收入 7%',
    pp2: '同比 +2 个百分点', pp5: '同比 +5 个百分点', pp14: '同比 +14 个百分点', pp1: '同比 +1 个百分点',
    country: '美国',
  } : {
    us: 'US', international: 'International', sportsbook: 'Sportsbook', igaming: 'iGaming', other: 'Other',
    revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'sales'], operatingLoss: ['Operating', 'loss'],
    expenses: ['Operating', 'expenses'], sm: 'S&M', ga: 'G&A', impairment: 'Impairment', rnd: 'R&D',
    yoy9: '+9% Y/Y', yoy21: '+21% Y/Y', yoy17: '+17% Y/Y', yoy3: '+3% Y/Y', yoy35: '+35% Y/Y', yoy2: '+2% Y/Y',
    margin43: '43% margin', margin22: '(22%) margin', pp3: '(3pp) Y/Y', pp25: '(25pp) Y/Y',
    smPct: '25% of revenue', gaPct: '19% of revenue', impairmentPct: '14% of revenue', rndPct: '7% of revenue',
    pp2: '+2pp Y/Y', pp5: '+5pp Y/Y', pp14: '+14pp Y/Y', pp1: '+1pp Y/Y',
    country: 'US',
  };

  const annotations = (zh) => {
    const T = copy(zh);
    return `
      <g class="sankey-interactive-annotation" data-node="us">
        <rect x="341" y="644" width="42" height="27" rx="1" fill="#ffffff"/>
        <rect x="341" y="644" width="42" height="3" fill="#b22234"/><rect x="341" y="650" width="42" height="3" fill="#b22234"/>
        <rect x="341" y="656" width="42" height="3" fill="#b22234"/><rect x="341" y="662" width="42" height="3" fill="#b22234"/>
        <rect x="341" y="644" width="19" height="15" fill="#3c3b6e"/>
        <text x="401" y="673" text-anchor="start" font-size="40" font-weight="800" fill="${CYAN_LABEL}">${T.country}</text>
        <rect x="335" y="635" width="136" height="48" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="sankey-interactive-annotation" data-node="international">
        <text x="327" y="987" text-anchor="middle" font-size="39" font-weight="800" fill="${CYAN_LABEL}">${T.international}</text>
        <rect x="190" y="948" width="275" height="50" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="sankey-interactive-annotation" data-node="igaming">
        <path d="M854 865 C949 865 1024 845 1093 775 L1165 775 C1239 775 1279 865 1404 865 C1279 865 1239 964 1165 964 L1093 964 C1024 964 949 910 854 865 Z" fill="${BG}"/>
        <text x="1129" y="850" text-anchor="middle" font-size="40" font-weight="700" fill="${NAVY}">${T.igaming}</text>
        <text x="1129" y="903" text-anchor="middle" font-size="39" font-weight="400" fill="${NAVY}">$1.9B</text>
        <text x="1129" y="945" text-anchor="middle" font-size="27" font-weight="400" fill="${NOTE}">${T.yoy35}</text>
        <rect x="854" y="775" width="551" height="195" fill="#ffffff" fill-opacity="0"/>
      </g>`;
  };

  const labels = (zh) => {
    const T = copy(zh);
    const center = (x, top, lines, lineGap = 9) => ({ x, top, anchor: 'middle', lineGap, lines });
    const line = (text, size, opts = {}) => ({ text, size, weight: opts.weight || 400, color: opts.color });
    const terminalX = 2532;
    return {
      us: { blocks: [center(507, 512, [line('$value', 39, { color: CYAN_LABEL }), line(T.yoy9, 27, { color: NOTE })])] },
      international: { blocks: [
        center(507, 848, [line('$value', 39, { color: CYAN_LABEL }), line(T.yoy21, 27, { color: NOTE })]),
      ] },
      revenue_geo: { blocks: [center(818, 590, [line(T.revenue, 40, { weight: 800 }), line('$value', 39), line(T.yoy17, 27, { color: NOTE })])] },
      sportsbook: { blocks: [center(1129, 458, [line(T.sportsbook, 40, { weight: 800 }), line('$value', 39), line(T.yoy3, 27, { color: NOTE })])] },
      igaming: { blocks: [] },
      other_revenue: { blocks: [center(1134, 1161, [line(T.other, 40, { weight: 800 }), line('$value', 39), line(T.yoy2, 27, { color: NOTE })])] },
      revenue: { blocks: [center(1441, 612, [line(T.revenue, 40, { weight: 800 }), line('$value', 39), line(T.yoy17, 27, { color: NOTE })])] },
      gross_profit: { blocks: [center(1752, 416, [line(T.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(T.margin43, 28, { color: NOTE }), line(T.pp3, 28, { color: NOTE })])] },
      cost_of_sales: { blocks: [center(1752, 1169, [...T.cost.map((value) => line(value, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })])] },
      operating_loss: { blocks: [center(1927, 1055, [...T.operatingLoss.map((value) => line(value, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL }), line(T.margin22, 28, { color: NOTE }), line(T.pp25, 28, { color: NOTE })])] },
      operating_expenses: { blocks: [center(2066, 597, [...T.expenses.map((value) => line(value, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })])] },
      sm: { blocks: [center(terminalX, 524, [line(T.sm, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.smPct, 28, { color: NOTE }), line(T.pp2, 28, { color: NOTE })], 7)] },
      ga: { blocks: [center(terminalX, 718, [line(T.ga, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.gaPct, 28, { color: NOTE }), line(T.pp5, 28, { color: NOTE })], 7)] },
      impairment: { blocks: [center(terminalX, 933, [line(T.impairment, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.impairmentPct, 28, { color: NOTE }), line(T.pp14, 28, { color: NOTE })], 7)] },
      rnd: { blocks: [center(terminalX, 1149, [line(T.rnd, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.rndPct, 28, { color: NOTE }), line(T.pp1, 28, { color: NOTE })], 7)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'flutter-q3-fy25',
    name: 'Flutter Entertainment · Q3 FY25',
    company: 'Flutter Entertainment',
    meta: {
      company: 'Flutter Entertainment',
      title: 'Flutter Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/flutter-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2140,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: CYAN, label: CYAN_LABEL },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: CYAN_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'flutter-company-wordmark', href: 'data/assets/raster-annotations/flutter/company-wordmark.png', x: 808, y: 254, width: 650, height: 166 },
      { key: 'fanduel-us-brand', href: 'data/assets/raster-annotations/flutter/fanduel-us-brand.png', x: 14, y: 620, width: 300, height: 76 },
      { key: 'flutter-international-brand-cluster', href: 'data/assets/raster-annotations/flutter/international-brand-cluster.png', x: 78, y: 1008, width: 364, height: 204 },
    ],
    layout: {
      scale: 82,
      nodes: {
        us: { x: 471, y: 603, width: 71, height: 113 },
        international: { x: 471, y: 942, width: 71, height: 200 },
        revenue_geo: { x: 782, y: 735, width: 71, height: 315 },
        sportsbook: { x: 1093, y: 605, width: 72, height: 145 },
        igaming: { x: 1093, y: 964, width: 72, height: 156 },
        other_revenue: { x: 1098, y: 1310, width: 72, height: 9 },
        revenue: { x: 1405, y: 757, width: 71, height: 315 },
        gross_profit: { x: 1716, y: 605, width: 72, height: 133 },
        cost_of_sales: { x: 1716, y: 982, width: 72, height: 179 },
        operating_loss: { x: 1891, y: 964, width: 72, height: 67 },
        operating_expenses: { x: 2030, y: 751, width: 72, height: 203 },
        sm: { x: 2339, y: 513, width: 71, height: 78 },
        ga: { x: 2339, y: 721, width: 71, height: 56 },
        impairment: { x: 2339, y: 949, width: 71, height: 41 },
        rnd: { x: 2339, y: 1162, width: 71, height: 22 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'us', col: 0, order: 0, type: 'source', label: 'US', value: 1.4, notes: ['+9% Y/Y'] },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 2.4, notes: ['+21% Y/Y'] },
      { id: 'revenue_geo', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.8, notes: ['+17% Y/Y'] },
      { id: 'sportsbook', col: 2, order: 0, type: 'hub', label: 'Sportsbook', value: 1.8, notes: ['+3% Y/Y'] },
      { id: 'igaming', col: 2, order: 1, type: 'hub', label: 'iGaming', value: 1.9, notes: ['+35% Y/Y'] },
      { id: 'other_revenue', col: 2, order: 2, type: 'hub', label: 'Other', value: 0.1, notes: ['+2% Y/Y'] },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 3.8, notes: ['+17% Y/Y'] },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 1.6, notes: ['43% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 2.2, valueText: '($2.2B)' },
      { id: 'operating_loss', col: 5, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.8, valueText: '($0.8B)', notes: ['(22%) margin', '(25pp) Y/Y'] },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 2.5, valueText: '($2.5B)' },
      { id: 'sm', col: 7, order: 0, type: 'cost', label: 'S&M', value: 1.0, valueText: '($1.0B)', notes: ['25% of revenue', '+2pp Y/Y'] },
      { id: 'ga', col: 7, order: 1, type: 'cost', label: 'G&A', value: 0.7, valueText: '($0.7B)', notes: ['19% of revenue', '+5pp Y/Y'] },
      { id: 'impairment', col: 7, order: 2, type: 'cost', label: 'Impairment', value: 0.5, valueText: '($0.5B)', notes: ['14% of revenue', '+14pp Y/Y'] },
      { id: 'rnd', col: 7, order: 3, type: 'cost', label: 'R&D', value: 0.3, valueText: '($0.3B)', notes: ['7% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'us', target: 'revenue_geo', value: 1.4, sourceWidth: 113, targetWidth: 113, y0: 659.5, y1: 791.5, sourceOrder: 0, targetOrder: 0, linkTint: CYAN_LINK },
      { source: 'international', target: 'revenue_geo', value: 2.4, sourceWidth: 200, targetWidth: 202, y0: 1042, y1: 949, sourceOrder: 0, targetOrder: 1, linkTint: CYAN_LINK },
      { source: 'revenue_geo', target: 'sportsbook', value: 1.8, sourceWidth: 145, targetWidth: 145, y0: 807.5, y1: 677.5, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue_geo', target: 'igaming', value: 1.9, sourceWidth: 156, targetWidth: 156, y0: 958, y1: 1042, sourceOrder: 1, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue_geo', target: 'other_revenue', value: 0.1, sourceWidth: 14, targetWidth: 9, y0: 1043, y1: 1314.5, sourceOrder: 2, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'sportsbook', target: 'revenue', value: 1.8, sourceWidth: 145, targetWidth: 145, y0: 677.5, y1: 829.5, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'igaming', target: 'revenue', value: 1.9, sourceWidth: 156, targetWidth: 156, y0: 1042, y1: 980, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 9, targetWidth: 14, y0: 1314.5, y1: 1065, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.6, sourceWidth: 134, targetWidth: 133, y0: 824, y1: 671.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2.2, sourceWidth: 181, targetWidth: 179, y0: 981.5, y1: 1071.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, sourceWidth: 133, targetWidth: 134, y0: 671.5, y1: 818, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss',
        target: 'operating_expenses',
        value: 0.8,
        sourceWidth: 67,
        targetWidth: 69,
        y0: 997.5,
        y1: 919.5,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: RED_LINK,
        curve: { x0: 1963, x1: 2030, c1x: 1985, c1y: 997.5, c2x: 2008, c2y: 919.5 },
      },
      { source: 'operating_expenses', target: 'sm', value: 1.0, sourceWidth: 80, targetWidth: 78, y0: 791, y1: 552, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.7, sourceWidth: 58, targetWidth: 56, y0: 860, y1: 749, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'impairment', value: 0.5, sourceWidth: 42, targetWidth: 41, y0: 910, y1: 969.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, sourceWidth: 23, targetWidth: 22, y0: 942.5, y1: 1173, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Flutter Entertainment · 2025 财年第三季度',
        meta: {
          title: 'Flutter 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 115,
          titleTextLength: 2140,
        },
        nodes: {
          us: { label: '美国', notes: ['同比 +9%'] },
          international: { label: '国际业务', notes: ['同比 +21%'] },
          revenue_geo: { label: '收入', notes: ['同比 +17%'] },
          sportsbook: { label: '体育博彩', notes: ['同比 +3%'] },
          igaming: { label: '在线博彩', notes: ['同比 +35%'] },
          other_revenue: { label: '其他', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 43%', '同比 (3 个百分点)'] },
          cost_of_sales: { label: ['销售', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (22%)', '同比 (25 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 25%', '同比 +2 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 19%', '同比 +5 个百分点'] },
          impairment: { label: '减值', notes: ['占收入 14%', '同比 +14 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();

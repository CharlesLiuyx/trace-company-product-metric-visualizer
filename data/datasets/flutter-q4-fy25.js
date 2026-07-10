/* Flutter Entertainment — Q4 FY25 income statement ($B).
 * Measured, fixed-layout d3-sankey reconstruction of the local reference.
 * Validated runtime brand crops preserve source wordmarks; publisher marks
 * are intentionally omitted. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const CYAN = '#109bd7';
  const CYAN_LABEL = '#0098df';
  const CYAN_LINK = '#7cc3e3';
  const NAVY = '#071642';
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
    revenue: '收入', gross: '毛利润', cost: ['销售', '成本'], operating: ['营业', '利润'],
    expenses: ['营业', '费用'], net: '净利润', tax: '税费', sm: '销售与营销', ga: '一般及行政', rnd: '研发',
    yoy33: '同比 +33%', yoy19: '同比 +19%', yoy21: '同比 +21%', yoy32: '同比 +32%', yoy3: '同比 +3%', yoy25: '同比 +25%',
    margin45: '毛利率 45%', margin5: '利润率 5%', margin0: '利润率 0%', pp4: '同比 (4 个百分点)', pp2: '同比 (2 个百分点)',
    pp1: '同比 +1 个百分点', pp3: '同比 (3 个百分点)', pp0: '同比 (0 个百分点)',
    smPct: '占收入 23%', gaPct: '占收入 11%', rndPct: '占收入 5%', country: '美国',
  } : {
    us: 'US', international: 'International', sportsbook: 'Sportsbook', igaming: 'iGaming', other: 'Other',
    revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'sales'], operating: ['Operating', 'profit'],
    expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', sm: 'S&M', ga: 'G&A', rnd: 'R&D',
    yoy33: '+33% Y/Y', yoy19: '+19% Y/Y', yoy21: '+21% Y/Y', yoy32: '+32% Y/Y', yoy3: '+3% Y/Y', yoy25: '+25% Y/Y',
    margin45: '45% margin', margin5: '5% margin', margin0: '0% margin', pp4: '(4pp) Y/Y', pp2: '(2pp) Y/Y',
    pp1: '+1pp Y/Y', pp3: '(3pp) Y/Y', pp0: '(0pp) Y/Y',
    smPct: '23% of revenue', gaPct: '11% of revenue', rndPct: '5% of revenue', country: 'US',
  };

  const annotations = (zh) => {
    const T = copy(zh);
    return `
      <g class="sankey-interactive-annotation" data-node="us" font-family="Montserrat,Arial,sans-serif">
        <rect x="341" y="644" width="42" height="27" rx="1" fill="#ffffff"/>
        <rect x="341" y="644" width="42" height="3" fill="#b22234"/><rect x="341" y="650" width="42" height="3" fill="#b22234"/>
        <rect x="341" y="656" width="42" height="3" fill="#b22234"/><rect x="341" y="662" width="42" height="3" fill="#b22234"/>
        <rect x="341" y="644" width="19" height="15" fill="#3c3b6e"/>
        <text x="401" y="673" text-anchor="start" font-size="40" font-weight="800" fill="${CYAN_LABEL}">${T.country}</text>
        <rect x="335" y="635" width="136" height="48" fill="#ffffff" fill-opacity="0"/>
      </g>
      <g class="sankey-interactive-annotation" data-node="igaming" font-family="Montserrat,Arial,sans-serif">
        <path d="M855 865 C950 865 1025 845 1094 775 L1166 775 C1240 775 1280 865 1405 865 C1280 865 1240 964 1166 964 L1094 964 C1025 964 950 910 855 865 Z" fill="${BG}"/>
        <text x="1130" y="850" text-anchor="middle" font-size="40" font-weight="700" fill="${NAVY}">${T.igaming}</text>
        <text x="1128" y="903" text-anchor="middle" font-size="39" font-weight="400" fill="${NAVY}">$2.0B</text>
        <text x="1128" y="945" text-anchor="middle" font-size="27" font-weight="400" fill="${NOTE}">${T.yoy32}</text>
        <rect x="855" y="775" width="551" height="195" fill="#ffffff" fill-opacity="0"/>
      </g>`;
  };

  const labels = (zh) => {
    const T = copy(zh);
    const center = (x, top, lines, lineGap = 9) => ({ x, top, anchor: 'middle', lineGap, lines });
    const right = (x, top, lines, lineGap = 7) => ({ x, top, anchor: 'start', lineGap, lines });
    const line = (text, size, opts = {}) => ({ text, size, weight: opts.weight || 400, color: opts.color });
    const terminalX = zh ? 2420 : 2482;
    const netX = 2438;
    return {
      us: { blocks: [center(507, 500, [line('$value', 39, { color: CYAN_LABEL }), line(T.yoy33, 27, { color: NOTE })])] },
      international: { blocks: [
        center(507, 826, [line('$value', 39, { color: CYAN_LABEL }), line(T.yoy19, 27, { color: NOTE })]),
        center(217, 957, [line(T.international, 39, { weight: 800, color: CYAN_LABEL })]),
      ] },
      revenue_geo: { blocks: [center(819, 550, [line(T.revenue, 40, { weight: 800 }), line('$value', 39), line(T.yoy25, 27, { color: NOTE })])] },
      sportsbook: { blocks: [center(1130, 458, [line(T.sportsbook, 40, { weight: 800 }), line('$value', 39), line(T.yoy21, 27, { color: NOTE })])] },
      igaming: { blocks: [] },
      other_revenue: { blocks: [center(1130, 1139, [line(T.other, 40, { weight: 800 }), line('$value', 39), line(T.yoy3, 27, { color: NOTE })])] },
      revenue: { blocks: [center(1442, 550, [line(T.revenue, 40, { weight: 800 }), line('$value', 39), line(T.yoy25, 27, { color: NOTE })])] },
      gross_profit: { blocks: [center(1753, 410, [line(T.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(T.margin45, 28, { color: NOTE }), line(T.pp4, 28, { color: NOTE })])] },
      cost_of_sales: { blocks: [center(1753, 1119, [...T.cost.map((value) => line(value, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })])] },
      operating_profit: { blocks: [center(2064, 311, [...T.operating.map((value) => line(value, 40, { weight: 800, color: GREEN_LABEL })), line('$value', 39, { color: GREEN_LABEL }), line(T.margin5, 28, { color: NOTE }), line(T.pp2, 28, { color: NOTE })])] },
      operating_expenses: { blocks: [center(2064, 826, [...T.expenses.map((value) => line(value, 40, { weight: 800, color: RED_LABEL })), line('$value', 39, { color: RED_LABEL })])] },
      net_profit: { blocks: [right(netX, 366, [line(T.net, 39, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line(T.margin0, 28, { color: NOTE }), line(T.pp4, 28, { color: NOTE })])] },
      tax: { blocks: [right(terminalX, 551, [line(T.tax, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })])] },
      other_expense: { blocks: [right(terminalX, 643, [line(T.other, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })])] },
      sm: { blocks: [right(terminalX, 757, [line(T.sm, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.smPct, 28, { color: NOTE }), line(T.pp1, 28, { color: NOTE })])] },
      ga: { blocks: [right(terminalX, 948, [line(T.ga, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.gaPct, 28, { color: NOTE }), line(T.pp3, 28, { color: NOTE })])] },
      rnd: { blocks: [right(terminalX, 1143, [line(T.rnd, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(T.rndPct, 28, { color: NOTE }), line(T.pp0, 28, { color: NOTE })])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'flutter-q4-fy25',
    name: 'Flutter Entertainment · Q4 FY25',
    company: 'Flutter Entertainment',
    meta: {
      company: 'Flutter Entertainment', title: 'Flutter Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/flutter-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2200,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
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
      { key: 'fanduel-us-brand', href: 'data/assets/raster-annotations/flutter/fanduel-us-brand.png', x: 14, y: 620, width: 300, height: 76 },
      { key: 'flutter-international-brand-cluster', href: 'data/assets/raster-annotations/flutter/international-brand-cluster.png', x: 78, y: 1008, width: 364, height: 204 },
    ],
    layout: {
      scale: 67.8,
      nodes: {
        us: { x: 470, y: 587, width: 73, height: 143 }, international: { x: 470, y: 920, width: 73, height: 173 },
        revenue_geo: { x: 782, y: 691, width: 73, height: 316 },
        sportsbook: { x: 1094, y: 602, width: 72, height: 173 }, igaming: { x: 1094, y: 964, width: 72, height: 134 }, other_revenue: { x: 1094, y: 1290, width: 72, height: 7 },
        revenue: { x: 1406, y: 698, width: 73, height: 313 },
        gross_profit: { x: 1717, y: 594, width: 73, height: 140 }, cost_of_sales: { x: 1717, y: 922, width: 73, height: 176 },
        operating_profit: { x: 2028, y: 534, width: 73, height: 17 }, operating_expenses: { x: 2028, y: 677, width: 73, height: 123 },
        net_profit: { x: 2340, y: 457, width: 72, height: 2, color: GREEN_LINK }, tax: { x: 2340, y: 581, width: 72, height: 8 }, other_expense: { x: 2340, y: 676, width: 72, height: 8 },
        sm: { x: 2340, y: 756, width: 72, height: 73 }, ga: { x: 2340, y: 981, width: 72, height: 34 }, rnd: { x: 2340, y: 1180, width: 72, height: 12 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'us', col: 0, order: 0, type: 'source', label: 'US', value: 2.1, notes: ['+33% Y/Y'] },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 2.6, notes: ['+19% Y/Y'] },
      { id: 'revenue_geo', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.7, notes: ['+25% Y/Y'] },
      { id: 'sportsbook', col: 2, order: 0, type: 'hub', label: 'Sportsbook', value: 2.6, notes: ['+21% Y/Y'] },
      { id: 'igaming', col: 2, order: 1, type: 'hub', label: 'iGaming', value: 2.0, notes: ['+32% Y/Y'] },
      { id: 'other_revenue', col: 2, order: 2, type: 'hub', label: 'Other', value: 0.1, notes: ['+3% Y/Y'] },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 4.7, notes: ['+25% Y/Y'] },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 2.1, notes: ['45% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 2.6, valueText: '($2.6B)' },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 0.3, notes: ['5% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.9, valueText: '($1.9B)' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.01, valueText: '$10M', notes: ['0% margin', '(4pp) Y/Y'], color: GREEN_LINK, labelColor: GREEN_LABEL },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)' },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 1.1, valueText: '($1.1B)', notes: ['23% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.5, valueText: '($0.5B)', notes: ['11% of revenue', '(3pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 5, type: 'cost', label: 'R&D', value: 0.2, valueText: '($0.2B)', notes: ['5% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'us', target: 'revenue_geo', value: 2.1, sourceWidth: 143, targetWidth: 143, y0: 658.5, y1: 762.5, linkTint: CYAN_LINK },
      { source: 'international', target: 'revenue_geo', value: 2.6, sourceWidth: 173, targetWidth: 173, y0: 1006.5, y1: 920.5, linkTint: CYAN_LINK },
      { source: 'revenue_geo', target: 'sportsbook', value: 2.6, sourceWidth: 173, targetWidth: 173, y0: 777.5, y1: 688.5, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      // iGaming is a real middle-column node; the white channel overlays its
      // product label while the two grey ribbons form the source's U-shaped
      // lower boundary around the visible node face.
      { source: 'revenue_geo', target: 'igaming', value: 2.0, sourceWidth: 136, targetWidth: 134, y0: 932, y1: 1031, sourceOrder: 1, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue_geo', target: 'other_revenue', value: 0.1, sourceWidth: 7, targetWidth: 7, y0: 1003.5, y1: 1293.5, sourceOrder: 2, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'sportsbook', target: 'revenue', value: 2.6, sourceWidth: 173, targetWidth: 173, y0: 688.5, y1: 784.5, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'igaming', target: 'revenue', value: 2.0, sourceWidth: 134, targetWidth: 133, y0: 1031, y1: 937.5, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 7, targetWidth: 7, y0: 1293.5, y1: 1007.5, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.1, sourceWidth: 140, targetWidth: 140, y0: 768, y1: 664, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2.6, sourceWidth: 173, targetWidth: 176, y0: 924.5, y1: 1010, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, sourceWidth: 20, targetWidth: 17, y0: 604, y1: 542.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.9, sourceWidth: 120, targetWidth: 123, y0: 674, y1: 738.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.01, sourceWidth: 2, targetWidth: 2, y0: 535, y1: 458, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 8, targetWidth: 8, y0: 540, y1: 585, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, sourceWidth: 7, targetWidth: 8, y0: 547.5, y1: 680, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.1, sourceWidth: 73, targetWidth: 73, y0: 713.5, y1: 792.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.5, sourceWidth: 34, targetWidth: 34, y0: 767, y1: 998, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.2, sourceWidth: 16, targetWidth: 12, y0: 792, y1: 1186, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Flutter Entertainment · 2025 财年第四季度',
        meta: { title: 'Flutter 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 115, titleTextLength: 2200 },
        nodes: {
          us: { label: '美国', notes: ['同比 +33%'] }, international: { label: '国际业务', notes: ['同比 +19%'] },
          revenue_geo: { label: '收入', notes: ['同比 +25%'] }, sportsbook: { label: '体育博彩', notes: ['同比 +21%'] }, igaming: { label: '在线博彩', notes: ['同比 +32%'] }, other_revenue: { label: '其他', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 +25%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 45%', '同比 (4 个百分点)'] }, cost_of_sales: { label: ['销售', '成本'] },
          operating_profit: { label: ['营业', '利润'], notes: ['利润率 5%', '同比 (2 个百分点)'] }, operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 0%', '同比 (4 个百分点)'] },
          tax: { label: '税费' }, other_expense: { label: '其他' }, sm: { label: '销售与营销', notes: ['占收入 23%', '同比 +1 个百分点'] }, ga: { label: '一般及行政', notes: ['占收入 11%', '同比 (3 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 5%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();

/* Expedia Q3 FY25 income statement ($B), measured from the Build Source.
 * The Expedia, Vrbo, aircraft, and trivago drawings reuse the validated
 * vector reconstruction under data/assets/icon-references/expedia/. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NAVY = '#202843';
  const NAVY_LINK = '#9397a3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const expediaMarkPath =
    'M37 24 L78 45 L110 30 L114 33 L84 54 L82 93 L80 101 L78 101 L74 70 L70 62 L31 83 L10 93 L7 92 L7 90 L65 53 L58 44 L37 28 L36 25 Z';
  const logoSvg = `<circle cx="60" cy="61" r="61" fill="${NAVY}"/><path d="${expediaMarkPath}" fill="#ffc94c"/><text x="153" y="102" font-family="Montserrat,Arial,sans-serif" font-size="114" font-weight="600" textLength="409" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">Expedia</text>`;

  const iconsSvg = `
    <g data-typography-role="brand" transform="translate(233 506)"><rect x="8" y="11" width="68" height="68" rx="15" fill="#ffc94c"/><circle cx="42" cy="45" r="26" fill="${NAVY}"/><g transform="translate(42 45) scale(.4262) translate(-60 -61)"><path d="${expediaMarkPath}" fill="#ffc94c"/></g></g>
    <g data-typography-role="brand" transform="translate(312 505)"><rect x="6" y="8" width="69" height="69" rx="15" fill="#0e214b"/><g fill="none" stroke-linecap="round"><path d="M20 21 C20 30 24 46 31 64" stroke="#71bef0" stroke-width="2.4"/><path d="M25 21 C26 32 30 48 34 64" stroke="#318dec" stroke-width="2.4"/><path d="M30 21 C31 32 34 48 37 61" stroke="#2f79d1" stroke-width="2.3"/><path d="M34 21 C34 31 37 45 39 56" stroke="#e77036" stroke-width="2.3"/><path d="M38 21 C38 29 40 42 42 51" stroke="#82b183" stroke-width="2.4"/><path d="M50 21 C51 28 48 40 43 52" stroke="#82b183" stroke-width="2.2"/><path d="M55 20 C56 29 51 42 45 55" stroke="#e77036" stroke-width="2.2"/><path d="M60 19 C61 30 55 45 46 58" stroke="#318dec" stroke-width="2.2"/></g></g>
    <g data-typography-role="brand" transform="translate(222 813)"><path d="M24 8 L26 8 L29 11 L26 14 L27 15 L30 15 L35 10 L37 11 L38 14 L35 17 L41 19 L45 19 L58 8 L67 9 L67 16 L65 20 L55 31 L58 41 L61 38 L65 40 L64 43 L59 46 L60 48 L62 49 L65 47 L67 49 L67 52 L62 55 L65 62 L62 67 L53 57 L50 51 L42 44 L31 52 L32 65 L30 67 L23 55 L21 55 L12 63 L20 52 L8 45 L10 43 L23 44 L31 33 L23 24 L17 21 L8 12 L13 10 L21 13 L24 9 Z" fill="#8b9096"/><path d="M10 11 L14 11 L25 16 L30 16 L35 19 L44 20 L31 32 L27 25 L25 25 L26 24 L24 22 L22 23 L22 21 L20 22 L21 21 L19 19 L10 14 L11 12 Z" fill="#2fa3dc"/><path d="M54 32 L57 44 L59 46 L58 49 L60 49 L59 55 L62 63 L64 64 L62 65 L59 60 L57 60 L57 57 L55 55 L54 57 L50 49 L44 43 L49 37 L51 39 L53 38 L53 36 L51 35 L53 33 Z" fill="#2fa3dc"/><path d="M10 44 L23 45 L21 52 L9 45 Z" fill="#2fa3dc"/><path d="M29 52 L31 60 L30 66 L24 55 L28 53 Z" fill="#2fa3dc"/><path d="M57 13 L61 15 L61 19 L50 30 L36 38 L28 45 L28 42 L32 36 L53 15 L56 14 Z" fill="#e4e7e9"/><path d="M63 17 L64 19 L63 21 L40 45 L30 51 L29 50 L24 52 L23 54 L28 49 L31 49 L36 46 L55 29 L64 19 L63 18 Z" fill="#6e747a"/></g>
    <g data-typography-role="brand" transform="translate(74 950)"><rect x="7" y="8" width="68" height="68" rx="15" fill="#fefefe"/><path d="M17 34 L18 34 L19 36 L21 36 L18 38 L18 40 L21 42 L20 43 L17 42 L17 38 L15 36 L17 35 Z M23 36 L25 37 L27 36 L24 38 L24 42 L23 42 L23 37 Z M29 36 L30 36 L30 42 L29 42 L29 37 Z" fill="#017eab"/><path d="M33 36 L34 36 L35 40 L36 41 L38 39 L39 36 L40 36 L37 42 L35 42 L34 38 L33 37 Z M56 36 L57 37 L57 42 L56 40 Z M42 36 L47 36 L48 42 L45 42 L44 43 L41 42 L42 39 L46 39 L47 38 L45 36 L43 36 Z" fill="#f1920c"/><path d="M51 36 L54 36 L55 37 L57 36 L57 44 L56 46 L54 47 L50 46 L50 45 L51 46 L54 46 L56 44 L55 42 L53 43 L50 42 L50 37 Z M60 36 L64 36 L65 37 L66 39 L65 42 L61 43 L59 41 L59 37 Z" fill="#c84a32"/></g>`;

  const card = (x, width, label, value, note) => `<g><rect x="${x}" y="1197" width="${width}" height="150" rx="24" fill="${NAVY}"/><text x="${x + width / 2}" y="1247" text-anchor="middle" font-size="27" font-weight="700" fill="#fff">${label}</text><text x="${x + width / 2}" y="1286" text-anchor="middle" font-size="27" font-weight="400" fill="#fff">${value}</text><text x="${x + width / 2}" y="1316" text-anchor="middle" font-size="23" font-weight="400" fill="#fff">${note}</text></g>`;
  const annotations = (zh) => `<g font-family="Noto Sans,Arial,sans-serif">${iconsSvg}${card(101, 304, zh ? '总预订额' : 'Gross bookings', '$30.7B', zh ? '同比 +12%' : '+12% Y/Y')}${card(416, 330, zh ? '预订夜晚数' : 'Nights booked', zh ? '1.08 亿' : '108M', zh ? '同比 +11%' : '+11% Y/Y')}</g>`;

  const text = (zh) => zh
    ? {
        lodging: '住宿', air: '机票', advertising: '广告', other: '其他', otherIncome: '其他收益',
        revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润',
        expenses: ['运营', '费用'], net: '净利润', tax: '税费', sm: ['销售与', '市场'],
        technology: '技术', amortization: '摊销', ga: '管理费用',
        yoy9: '同比 +9%', yoyDown3: '同比 (3%)', yoy23: '同比 +23%', yoy2: '同比 +2%',
        margin91: '利润率 91%', margin23: '利润率 23%', margin22: '利润率 22%',
        pp1: '同比 +1 个百分点', pp5: '同比 +5 个百分点',
        rev50: '占收入 50%', ppDown1: '同比 (1 个百分点)',
      }
    : {
        lodging: 'Lodging', air: 'Air', advertising: 'Advertising', other: 'Other', otherIncome: 'Other',
        revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit',
        expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', sm: ['Sales &', 'marketing'],
        technology: 'Technology', amortization: 'Amortization', ga: 'G&A',
        yoy9: '+9% Y/Y', yoyDown3: '(3%) Y/Y', yoy23: '+23% Y/Y', yoy2: '+2% Y/Y',
        margin91: '91% margin', margin23: '23% margin', margin22: '22% margin',
        pp1: '+1pp Y/Y', pp5: '+5pp Y/Y', rev50: '50% of revenue', ppDown1: '(1pp) Y/Y',
      };

  const layouts = (zh) => {
    const t = text(zh);
    const lines = (entries) => entries.map(([value, size, weight, color]) => ({ text: value, size, weight, color }));
    const amountNotes = (top, notes) => ({ x: 454, top, anchor: 'middle', lineGap: 15, lines: lines([['$value', 38, 400], ...notes.map((value) => [value, 29, 400, NOTE])]) });
    const side = (x, top, values, gap = 9, anchor = 'middle') => ({ x, top, anchor, lineGap: gap, lines: lines(values) });
    return {
      lodging: { blocks: [amountNotes(359, [t.yoy9]), { x: 314, top: 589, anchor: 'middle', lines: lines([[t.lodging, 40, 800]]) }] },
      air: { blocks: [amountNotes(753, [t.yoyDown3]), { x: 317, top: 818, anchor: 'start', lines: lines([[t.air, 40, 800]]) }] },
      advertising: { blocks: [amountNotes(888, [t.yoy23]), { x: 160, top: 957, anchor: 'start', lines: lines([[t.advertising, 40, 800]]) }] },
      other_revenue: { blocks: [amountNotes(1023, [t.yoy2]), { x: 265, top: 1088, anchor: 'start', lines: lines([[t.other, 40, 800]]) }] },
      revenue: { blocks: [side(918, 446, [[t.revenue, 40, 800], ['$value', 38, 400], [t.yoy9, 29, 400, NOTE]], 14)] },
      gross_profit: { blocks: [side(1386, 317, [[t.gross, 40, 800], ['$value', 38, 400], [t.margin91, 29, 400, NOTE], [t.pp1, 29, 400, NOTE]], 13)] },
      cost_of_revenue: { blocks: [side(1386, 1018, [[t.cost[0], 38, 800], [t.cost[1], 38, 800], ['$value', 38, 400]], 10)] },
      operating_profit: { blocks: [side(1854, 237, [[t.operating, 40, 800], ['$value', 38, 400], [t.margin23, 29, 400, NOTE], [t.pp5, 29, 400, NOTE]], 13)] },
      operating_expenses: { blocks: [side(1854, 880, [[t.expenses[0], 38, 800], [t.expenses[1], 38, 800], ['$value', 38, 400]], 10)] },
      other_income: { blocks: [side(2202, 442, [[t.otherIncome, 32, 800], ['$value', 32, 400]], 9)] },
      net_profit: { blocks: [side(2485, 287, [[t.net, 38, 800], ['$value', 38, 400], [t.margin22, 29, 400, NOTE], [t.pp5, 29, 400, NOTE]], 10)] },
      tax: { blocks: [side(2485, 527, [[t.tax, 32, 800], ['$value', 32, 400]])] },
      sm: { blocks: [side(2485, 684, [[t.sm[0], 32, 800], [t.sm[1], 32, 800], ['$value', 32, 400], [t.rev50, 29, 400, NOTE], [t.ppDown1, 29, 400, NOTE]], 10)] },
      technology: { blocks: [side(2485, 904, [[t.technology, 32, 800], ['$value', 32, 400]])] },
      amortization: { blocks: [side(2485, 1000, [[t.amortization, 32, 800], ['$value', 32, 400]])] },
      ga: { blocks: [side(2485, 1113, [[t.ga, 32, 800], ['$value', 32, 400]])] },
      other_opex: { blocks: [side(2485, 1218, [[t.other, 32, 800], ['$value', 32, 400]])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'expedia-q3-fy25',
    name: 'Expedia · Q3 FY25',
    company: 'Expedia',
    meta: {
      company: 'Expedia',
      title: 'Expedia Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/expedia-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2200,
      hidePeriodStamp: true,
      logoWidth: 649,
      logoHeight: 127,
      logoY: 250,
      logoViewBox: '0 0 649 127',
      logoSvg,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      nodes: {
        lodging: { x: 417, y: 454, width: 71, height: 249 },
        air: { x: 417, y: 847, width: 71, height: 5 },
        advertising: { x: 417, y: 982, width: 71, height: 20 },
        other_revenue: { x: 417, y: 1117, width: 71, height: 24 },
        revenue: { x: 884, y: 593, width: 70, height: 307 },
        gross_profit: { x: 1351, y: 504, width: 71, height: 279 },
        cost_of_revenue: { x: 1351, y: 981, width: 71, height: 24 },
        operating_profit: { x: 1819, y: 424, width: 70, height: 70 },
        operating_expenses: { x: 1819, y: 658, width: 70, height: 208 },
        other_income: { x: 2166, y: 417, width: 70, height: 5 },
        net_profit: { x: 2285, y: 307, width: 71, height: 65 },
        tax: { x: 2285, y: 558, width: 71, height: 10 },
        sm: { x: 2285, y: 678, width: 71, height: 150 },
        technology: { x: 2285, y: 912, width: 71, height: 20 },
        amortization: { x: 2285, y: 1009, width: 71, height: 13 },
        ga: { x: 2285, y: 1116, width: 71, height: 10 },
        other_opex: { x: 2285, y: 1231, width: 71, height: 4 },
      },
      labels: layouts(false),
    },
    nodes: [
      { id: 'lodging', col: 0, order: 0, type: 'source', label: 'Lodging', value: 3.6, notes: ['+9% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'air', col: 0, order: 1, type: 'source', label: 'Air', value: 0.1, notes: ['(3%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 0.3, notes: ['+23% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'other_revenue', col: 0, order: 3, type: 'source', label: 'Other', value: 0.4, notes: ['+2% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.4, notes: ['+9% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.0, valueText: '$4.0B', notes: ['91% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.0, valueText: '$1.0B', notes: ['23% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.0, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.0, valueText: '$1.0B', notes: ['22% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 2.2, notes: ['50% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 5, order: 3, type: 'cost', label: 'Technology', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: 'Amortization', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'lodging', target: 'revenue', value: 3.6, sourceWidth: 249, targetWidth: 251, y0: 578.5, y1: 718.5, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'air', target: 'revenue', value: 0.1, sourceWidth: 5, targetWidth: 7, y0: 849.5, y1: 847.5, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'advertising', target: 'revenue', value: 0.3, sourceWidth: 20, targetWidth: 21, y0: 992, y1: 861.5, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.4, sourceWidth: 24, targetWidth: 28, y0: 1129, y1: 886, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 4.0, sourceWidth: 281, targetWidth: 279, y0: 733.5, y1: 643.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.4, sourceWidth: 25, targetWidth: 24, y0: 887.5, y1: 993, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.0, sourceWidth: 72, targetWidth: 70, y0: 540, y1: 459, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.0, sourceWidth: 207, targetWidth: 208, y0: 679.5, y1: 762, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 61, targetWidth: 60, y0: 454.5, y1: 337, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 9, targetWidth: 10, y0: 489.5, y1: 563, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 5, targetWidth: 5, y0: 419.5, y1: 369.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 2.2, sourceWidth: 152, targetWidth: 150, y0: 734, y1: 753, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology', value: 0.3, sourceWidth: 22, targetWidth: 20, y0: 821, y1: 922, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 0.2, sourceWidth: 16, targetWidth: 13, y0: 840, y1: 1015.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.2, sourceWidth: 11, targetWidth: 10, y0: 853.5, y1: 1121, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 7, targetWidth: 4, y0: 862.5, y1: 1233, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Expedia · 2025 财年第三季度',
        meta: {
          title: 'Expedia 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 2200,
          hidePeriodStamp: true,
        },
        nodes: {
          lodging: { label: '住宿', notes: ['同比 +9%'] },
          air: { label: '机票', notes: ['同比 (3%)'] },
          advertising: { label: '广告', notes: ['同比 +23%'] },
          other_revenue: { label: '其他', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 91%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 23%', '同比 +5 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other_income: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          sm: { label: ['销售与', '市场'], notes: ['占收入 50%', '同比 (1 个百分点)'] },
          technology: { label: '技术' },
          amortization: { label: '摊销' },
          ga: { label: '管理费用' },
          other_opex: { label: '其他' },
        },
        layout: { labels: layouts(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();

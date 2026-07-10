/* Expedia Q4 FY25 income statement ($B), measured from the processed source.
 * The Expedia, Vrbo, aircraft, and trivago drawings reuse the validated
 * vector reconstruction for the materially identical Expedia icon clusters. */
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

  const expediaMarkPath = 'M37 24 L78 45 L110 30 L114 33 L84 54 L82 93 L80 101 L78 101 L74 70 L70 62 L31 83 L10 93 L7 92 L7 90 L65 53 L58 44 L37 28 L36 25 Z';
  const logoSvg = `<circle cx="60" cy="61" r="61" fill="${NAVY}"/><path d="${expediaMarkPath}" fill="#ffc94c"/><text x="153" y="102" font-family="Montserrat,Arial,sans-serif" font-size="114" font-weight="600" textLength="409" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">Expedia</text>`;

  const iconsSvg = `
    <g transform="translate(233 506)"><rect x="8" y="11" width="68" height="68" rx="15" fill="#ffc94c"/><circle cx="42" cy="45" r="26" fill="${NAVY}"/><g transform="translate(42 45) scale(.4262) translate(-60 -61)"><path d="${expediaMarkPath}" fill="#ffc94c"/></g></g>
    <g transform="translate(312 505)"><rect x="6" y="8" width="69" height="69" rx="15" fill="#0e214b"/><g fill="none" stroke-linecap="round"><path d="M20 21 C20 30 24 46 31 64" stroke="#71bef0" stroke-width="2.4"/><path d="M25 21 C26 32 30 48 34 64" stroke="#318dec" stroke-width="2.4"/><path d="M30 21 C31 32 34 48 37 61" stroke="#2f79d1" stroke-width="2.3"/><path d="M34 21 C34 31 37 45 39 56" stroke="#e77036" stroke-width="2.3"/><path d="M38 21 C38 29 40 42 42 51" stroke="#82b183" stroke-width="2.4"/><path d="M50 21 C51 28 48 40 43 52" stroke="#82b183" stroke-width="2.2"/><path d="M55 20 C56 29 51 42 45 55" stroke="#e77036" stroke-width="2.2"/><path d="M60 19 C61 30 55 45 46 58" stroke="#318dec" stroke-width="2.2"/></g></g>
    <g transform="translate(222 813)"><path d="M24 8 L26 8 L29 11 L26 14 L27 15 L30 15 L35 10 L37 11 L38 14 L35 17 L41 19 L45 19 L58 8 L67 9 L67 16 L65 20 L55 31 L58 41 L61 38 L65 40 L64 43 L59 46 L60 48 L62 49 L65 47 L67 49 L67 52 L62 55 L65 62 L62 67 L53 57 L50 51 L42 44 L31 52 L32 65 L30 67 L23 55 L21 55 L12 63 L20 52 L8 45 L10 43 L23 44 L31 33 L23 24 L17 21 L8 12 L13 10 L21 13 L24 9 Z" fill="#8b9096"/><path d="M10 11 L14 11 L25 16 L30 16 L35 19 L44 20 L31 32 L27 25 L25 25 L26 24 L24 22 L22 23 L22 21 L20 22 L21 21 L19 19 L10 14 L11 12 Z" fill="#2fa3dc"/><path d="M54 32 L57 44 L59 46 L58 49 L60 49 L59 55 L62 63 L64 64 L62 65 L59 60 L57 60 L57 57 L55 55 L54 57 L50 49 L44 43 L49 37 L51 39 L53 38 L53 36 L51 35 L53 33 Z" fill="#2fa3dc"/><path d="M10 44 L23 45 L21 52 L9 45 Z" fill="#2fa3dc"/><path d="M29 52 L31 60 L30 66 L24 55 L28 53 Z" fill="#2fa3dc"/><path d="M57 13 L61 15 L61 19 L50 30 L36 38 L28 45 L28 42 L32 36 L53 15 L56 14 Z" fill="#e4e7e9"/><path d="M63 17 L64 19 L63 21 L40 45 L30 51 L29 50 L24 52 L23 54 L28 49 L31 49 L36 46 L55 29 L64 19 L63 18 Z" fill="#6e747a"/></g>
    <g transform="translate(74 950)"><rect x="7" y="8" width="68" height="68" rx="15" fill="#fefefe"/><path d="M17 34 L18 34 L19 36 L21 36 L18 38 L18 40 L21 42 L20 43 L17 42 L17 38 L15 36 L17 35 Z M23 36 L25 37 L27 36 L24 38 L24 42 L23 42 L23 37 Z M29 36 L30 36 L30 42 L29 42 L29 37 Z" fill="#017eab"/><path d="M33 36 L34 36 L35 40 L36 41 L38 39 L39 36 L40 36 L37 42 L35 42 L34 38 L33 37 Z M56 36 L57 37 L57 42 L56 40 Z M42 36 L47 36 L48 42 L45 42 L44 43 L41 42 L42 39 L46 39 L47 38 L45 36 L43 36 Z" fill="#f1920c"/><path d="M51 36 L54 36 L55 37 L57 36 L57 44 L56 46 L54 47 L50 46 L50 45 L51 46 L54 46 L56 44 L55 42 L53 43 L50 42 L50 37 Z M60 36 L64 36 L65 37 L66 39 L65 42 L61 43 L59 41 L59 37 Z" fill="#c84a32"/></g>`;

  const card = (x, width, label, value, note) => `<g><rect x="${x}" y="1197" width="${width}" height="150" rx="24" fill="${NAVY}"/><text x="${x + width / 2}" y="1247" text-anchor="middle" font-size="27" font-weight="700" fill="#fff">${label}</text><text x="${x + width / 2}" y="1286" text-anchor="middle" font-size="27" font-weight="400" fill="#fff">${value}</text><text x="${x + width / 2}" y="1316" text-anchor="middle" font-size="23" font-weight="400" fill="#fff">${note}</text></g>`;
  const annotations = (zh) => `<g font-family="Montserrat,Arial,sans-serif">${iconsSvg}${card(101, 304, zh ? '总预订额' : 'Gross bookings', '$27.0B', zh ? '同比 +11%' : '+11% Y/Y')}${card(416, 330, zh ? '预订夜晚数' : 'Nights booked', '94M', zh ? '同比 +9%' : '+9% Y/Y')}</g>`;

  const text = (zh) => zh ? {
    lodging: '住宿', air: '机票', advertising: '广告', other: '其他', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'], net: '净利润', sm: ['销售与', '市场'], technology: '技术', amortization: '摊销', ga: '管理费用',
    yoy11: '同比 +11%', yoyDown4: '同比 (4%)', yoy27: '同比 +27%', yoy9: '同比 +9%', margin90: '利润率 90%', margin12: '利润率 12%', margin6: '利润率 6%', pp1: '同比 +1 个百分点', pp5: '同比 +5 个百分点', ppDown3: '同比 (3 个百分点)', rev54: '占收入 54%', ppDown1: '同比 (1 个百分点)',
  } : {
    lodging: 'Lodging', air: 'Air', advertising: 'Advertising', other: 'Other', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', sm: ['Sales &', 'marketing'], technology: 'Technology', amortization: 'Amortization', ga: 'G&A',
    yoy11: '+11% Y/Y', yoyDown4: '(4%) Y/Y', yoy27: '+27% Y/Y', yoy9: '+9% Y/Y', margin90: '90% margin', margin12: '12% margin', margin6: '6% margin', pp1: '+1pp Y/Y', pp5: '+5pp Y/Y', ppDown3: '(3pp) Y/Y', rev54: '54% of revenue', ppDown1: '(1pp) Y/Y',
  };

  const layouts = (zh) => {
    const t = text(zh);
    const lines = (entries) => entries.map(([value, size, weight, color]) => ({ text: value, size, weight, color }));
    const amountNotes = (top, notes) => ({ x: 454, top, anchor: 'middle', lineGap: 15, lines: lines([['$value', 38, 400], ...notes.map((value) => [value, 29, 400, NOTE])]) });
    const center = (x, top, values, gap = 10, size = 38) => ({ x, top, anchor: 'middle', lineGap: gap, lines: lines(values.map((value, index) => [value, index === values.length - 1 && value === '$value' ? size : size, index === values.length - 1 && value === '$value' ? 400 : 800])) });
    const side = (top, values, gap = 9) => ({ x: 2430, top, anchor: 'start', lineGap: gap, lines: lines(values) });
    return {
      lodging: { blocks: [amountNotes(356, [t.yoy11]), { x: 314, top: 592, anchor: 'middle', lines: lines([[t.lodging, 40, 800]]) }] },
      air: { blocks: [amountNotes(752, [t.yoyDown4]), { x: 317, top: 828, anchor: 'start', lines: lines([[t.air, 40, 800]]) }] },
      advertising: { blocks: [amountNotes(878, [t.yoy27]), { x: 160, top: 964, anchor: 'start', lines: lines([[t.advertising, 40, 800]]) }] },
      other_revenue: { blocks: [amountNotes(1021, [t.yoy9]), { x: 265, top: 1114, anchor: 'start', lines: lines([[t.other, 40, 800]]) }] },
      revenue: { blocks: [{ x: 919, top: 433, anchor: 'middle', lineGap: 14, lines: lines([[t.revenue, 40, 800], ['$value', 38, 400], [t.yoy11, 29, 400, NOTE]]) }] },
      gross_profit: { blocks: [{ x: 1386, top: 314, anchor: 'middle', lineGap: 13, lines: lines([[t.gross, 40, 800], ['$value', 38, 400], [t.margin90, 29, 400, NOTE], [t.pp1, 29, 400, NOTE]]) }] },
      cost_of_revenue: { blocks: [center(1386, 1055, [...t.cost, '$value'])] },
      operating_profit: { blocks: [{ x: 1854, top: 216, anchor: 'middle', lineGap: 13, lines: lines([[t.operating, 40, 800], ['$value', 38, 400], [t.margin12, 29, 400, NOTE], [t.pp5, 29, 400, NOTE]]) }] },
      operating_expenses: { blocks: [center(1851, 891, [...t.expenses, '$value'])] },
      net_profit: { blocks: [side(267, [[t.net, 38, 800], ['$value', 38, 400], [t.margin6, 29, 400, NOTE], [t.ppDown3, 29, 400, NOTE]])] },
      other_non_operating: { blocks: [side(502, [[t.other, 32, 800], ['$value', 32, 400]])] },
      sm: { blocks: [side(676, [[t.sm[0], 32, 800], [t.sm[1], 32, 800], ['$value', 32, 400], [t.rev54, 29, 400, NOTE], [t.ppDown1, 29, 400, NOTE]], 10)] },
      technology: { blocks: [side(918, [[t.technology, 32, 800], ['$value', 32, 400]])] },
      amortization: { blocks: [side(1035, [[t.amortization, 32, 800], ['$value', 32, 400]])] },
      ga: { blocks: [side(1150, [[t.ga, 32, 800], ['$value', 32, 400]])] },
      other_opex: { blocks: [side(1260, [[t.other, 32, 800], ['$value', 32, 400]])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'expedia-q4-fy25', name: 'Expedia · Q4 FY25', company: 'Expedia',
    meta: {
      company: 'Expedia', title: 'Expedia Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/expedia-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2200, periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 649, logoHeight: 127, logoY: 250, logoViewBox: '0 0 649 127', logoSvg,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      nodes: {
        lodging: { x: 417, y: 453, width: 71, height: 246 }, air: { x: 417, y: 846, width: 71, height: 6 }, advertising: { x: 417, y: 977, width: 71, height: 26 }, other_revenue: { x: 417, y: 1115, width: 71, height: 26 },
        revenue: { x: 884, y: 597, width: 70, height: 310 }, gross_profit: { x: 1351, y: 508, width: 71, height: 279 }, cost_of_revenue: { x: 1351, y: 1009, width: 71, height: 29 },
        operating_profit: { x: 1819, y: 406, width: 70, height: 35 }, operating_expenses: { x: 1816, y: 632, width: 70, height: 243 },
        net_profit: { x: 2285, y: 317, width: 71, height: 16 }, other_non_operating: { x: 2285, y: 536, width: 71, height: 15 }, sm: { x: 2285, y: 680, width: 71, height: 165 }, technology: { x: 2285, y: 941, width: 71, height: 26 }, amortization: { x: 2285, y: 1060, width: 71, height: 18 }, ga: { x: 2285, y: 1176, width: 71, height: 17 }, other_opex: { x: 2285, y: 1293, width: 71, height: 8 },
      },
      labels: layouts(false),
    },
    nodes: [
      { id: 'lodging', col: 0, order: 0, type: 'source', label: 'Lodging', value: 2.8, notes: ['+11% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'air', col: 0, order: 1, type: 'source', label: 'Air', value: 0.1, notes: ['(4%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 0.3, notes: ['+27% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'other_revenue', col: 0, order: 3, type: 'source', label: 'Other', value: 0.3, notes: ['+9% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.5, notes: ['+11% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.2, notes: ['90% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['12% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['6% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_non_operating', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 1.9, notes: ['54% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 4, order: 3, type: 'cost', label: 'Technology', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 4, order: 4, type: 'cost', label: 'Amortization', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 4, order: 6, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'lodging', target: 'revenue', value: 2.8, sourceWidth: 246, targetWidth: 246, y0: 576, y1: 720, linkTint: NAVY_LINK },
      { source: 'air', target: 'revenue', value: 0.1, sourceWidth: 6, targetWidth: 8, y0: 849, y1: 847, linkTint: NAVY_LINK },
      { source: 'advertising', target: 'revenue', value: 0.3, sourceWidth: 26, targetWidth: 28, y0: 990, y1: 865, linkTint: NAVY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.3, sourceWidth: 26, targetWidth: 28, y0: 1128, y1: 893, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 3.2, sourceWidth: 279, targetWidth: 279, y0: 736.5, y1: 647.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.3, sourceWidth: 31, targetWidth: 29, y0: 891.5, y1: 1023.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 35, targetWidth: 35, y0: 525.5, y1: 423.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.8, sourceWidth: 244, targetWidth: 243, y0: 665, y1: 753.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 17, targetWidth: 16, y0: 414.5, y1: 325, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.2, sourceWidth: 18, targetWidth: 15, y0: 432, y1: 543.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.9, sourceWidth: 170, targetWidth: 165, y0: 717, y1: 762.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology', value: 0.3, sourceWidth: 27, targetWidth: 26, y0: 815.5, y1: 954, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 0.2, sourceWidth: 19, targetWidth: 18, y0: 838.5, y1: 1069, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.2, sourceWidth: 18, targetWidth: 17, y0: 857, y1: 1184.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 9, targetWidth: 8, y0: 870.5, y1: 1297, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Expedia · 2025 财年第四季度',
        meta: { title: 'Expedia 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2200 },
        nodes: {
          lodging: { label: '住宿', notes: ['同比 +11%'] }, air: { label: '机票', notes: ['同比 (4%)'] }, advertising: { label: '广告', notes: ['同比 +27%'] }, other_revenue: { label: '其他', notes: ['同比 +9%'] }, revenue: { label: '收入', notes: ['同比 +11%'] }, gross_profit: { label: '毛利润', notes: ['利润率 90%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +5 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (3 个百分点)'] }, other_non_operating: { label: '其他' }, sm: { label: ['销售与', '市场'], notes: ['占收入 54%', '同比 (1 个百分点)'] }, technology: { label: '技术' }, amortization: { label: '摊销' }, ga: { label: '管理费用' }, other_opex: { label: '其他' },
        },
        layout: { labels: layouts(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();

/* Uber Q2 FY23 income statement, measured from the 2667×1500 Source. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';
  const NOTE = '#666666';
  const RIGHT_X = 2330;

  const card = (x, width, title, value, note) =>
    '<g>' +
      '<rect x="' + x + '" y="1202" width="' + width + '" height="148" rx="22" fill="#000"/>' +
      '<text x="' + (x + width / 2) + '" y="1254" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + title + '</text>' +
      '<text x="' + (x + width / 2) + '" y="1292" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">' + value + '</text>' +
      '<text x="' + (x + width / 2) + '" y="1327" text-anchor="middle" font-size="23" font-weight="500" fill="#fff">' + note + '</text>' +
    '</g>';

  const annotations = (L) =>
    '<g font-family="Montserrat,Arial,sans-serif">' +
      '<g data-typography-role="brand">' +
        '<rect x="157" y="447" width="94" height="94" rx="14" fill="#000"/>' +
        '<text x="204" y="508" text-anchor="middle" font-family="Arial,sans-serif" font-size="33" font-weight="500" fill="#fff">Uber</text>' +
        '<text x="71" y="845" font-family="Arial,sans-serif" font-size="53" font-weight="500" fill="#001f28">Uber</text>' +
        '<text x="200" y="845" font-family="Arial,sans-serif" font-size="53" font-weight="800" fill="#00c444">Eats</text>' +
        '<text x="71" y="1126" font-family="Arial,sans-serif" font-size="47" font-weight="500" fill="#000">Uber Freight</text>' +
      '</g>' +
      card(31, 155, L.trips, '2.3B', L.tripsYoy) +
      card(194, 169, 'MAPC', '137M', L.mapcYoy) +
      card(371, 329, L.grossBookings, '$33.6B', L.grossBookingsYoy) +
      '<g><rect x="709" y="1202" width="378" height="148" rx="22" fill="#000"/>' +
        '<text x="898" y="1254" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + L.takeRate + '</text>' +
        '<text x="739" y="1292" font-size="' + L.takeRateSize + '" font-weight="500" fill="#fff">' + L.mobilityTakeRate + '</text>' +
        '<text x="739" y="1327" font-size="' + L.takeRateSize + '" font-weight="500" fill="#fff">' + L.deliveryTakeRate + '</text>' +
      '</g>' +
      '<text x="83" y="1387" font-size="28" font-weight="500" fill="' + NOTE + '">' + L.mapcFootnote + '</text>' +
    '</g>';

  const annotationsEn = annotations({
    trips: 'Trips', tripsYoy: '+22% Y/Y', mapcYoy: '+12% Y/Y',
    grossBookings: 'Gross Bookings', grossBookingsYoy: '+18% Y/Y fx neutral',
    takeRate: 'Take rate', takeRateSize: 25,
    mobilityTakeRate: 'Mobility 29.3% (+2.7pp Y/Y)',
    deliveryTakeRate: 'Delivery 19.6% (+0.2pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });
  const annotationsZh = annotations({
    trips: '行程', tripsYoy: '同比 +22%', mapcYoy: '同比 +12%',
    grossBookings: '总预订额', grossBookingsYoy: '同比 +18%（汇率中性）',
    takeRate: '抽成率', takeRateSize: 23,
    mobilityTakeRate: '出行 29.3%（同比 +2.7 个百分点）',
    deliveryTakeRate: '配送 19.6%（同比 +0.2 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const text = {
    en: {
      mobilityYoy: '+38% Y/Y', mobility: 'Mobility', mobilityMargin: '24% adjusted margin',
      deliveryYoy: '+14% Y/Y', delivery: 'Delivery', deliveryMargin: '11% adjusted margin',
      freightYoy: '(30%) Y/Y', freightMargin: '(1%) adjusted margin',
      revenue: 'Revenue', revenueYoy: '+14% Y/Y',
      gross: 'Gross profit', grossMargin: '40% margin', grossYoy: '+4pp Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue',
      operatingProfit: 'Operating profit', operatingMargin: '4% margin', operatingYoy: '+12pp Y/Y',
      operating: 'Operating', expenses: 'expenses',
      other: 'Other', net: 'Net profit', netMargin: '4% margin', netYoy: '+37pp Y/Y',
      interest: 'Interest ($0.1B)', tax: 'Tax ($0.1B)',
      sm: 'S&M ($1.2B)', smPct: '13% of revenue', smYoy: '(2pp) Y/Y',
      rnd: 'R&D ($0.8B)', rndPct: '9% of revenue', rndYoy: '+0pp Y/Y',
      operations: 'Operations ($0.7B)', operationsPct: '7% of revenue', operationsYoy: '+0pp Y/Y',
      ga: 'G&A ($0.5B)', gaPct: '5% of revenue', gaYoy: '(5pp) Y/Y',
      da: 'D&A ($0.2B)', daPct: '2% of revenue', daYoy: '(1pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +38%', mobility: '出行', mobilityMargin: '调整后利润率 24%',
      deliveryYoy: '同比 +14%', delivery: '配送', deliveryMargin: '调整后利润率 11%',
      freightYoy: '同比 (30%)', freightMargin: '调整后利润率 (1%)',
      revenue: '收入', revenueYoy: '同比 +14%',
      gross: '毛利润', grossMargin: '利润率 40%', grossYoy: '同比 +4 个百分点',
      costOf: '收入', revenueWord: '成本',
      operatingProfit: '营业利润', operatingMargin: '利润率 4%', operatingYoy: '同比 +12 个百分点',
      operating: '运营', expenses: '费用',
      other: '其他', net: '净利润', netMargin: '利润率 4%', netYoy: '同比 +37 个百分点',
      interest: '利息 ($0.1B)', tax: '税费 ($0.1B)',
      sm: '销售与市场 ($1.2B)', smPct: '占收入 13%', smYoy: '同比 (2 个百分点)',
      rnd: '研发 ($0.8B)', rndPct: '占收入 9%', rndYoy: '同比 +0 个百分点',
      operations: '运营 ($0.7B)', operationsPct: '占收入 7%', operationsYoy: '同比 +0 个百分点',
      ga: '管理费用 ($0.5B)', gaPct: '占收入 5%', gaYoy: '同比 (5 个百分点)',
      da: '折旧与摊销 ($0.2B)', daPct: '占收入 2%', daYoy: '同比 (1 个百分点)',
    },
  };

  const block = (x, top, anchor, lines, lineGap) => ({
    x, top, anchor, lineGap: lineGap == null ? 9 : lineGap, lines,
  });
  const makeLabels = (L) => ({
    mobility: { blocks: [
      block(400, 334, 'middle', [
        { text: '$value', size: 39, weight: 400 },
        { text: L.mobilityYoy, size: 29, weight: 400, color: NOTE },
      ]),
      block(188, 563, 'middle', [
        { text: L.mobility, size: 41, weight: 800 },
        { text: L.mobilityMargin, size: 29, weight: 400, color: NOTE },
      ]),
    ] },
    delivery: { blocks: [
      block(400, 717, 'middle', [
        { text: '$value', size: 39, weight: 400 },
        { text: L.deliveryYoy, size: 29, weight: 400, color: NOTE },
      ]),
      block(199, 869, 'middle', [
        { text: L.delivery, size: 41, weight: 800 },
        { text: L.deliveryMargin, size: 29, weight: 400, color: NOTE },
      ]),
    ] },
    freight: { blocks: [
      block(402, 1016, 'middle', [
        { text: '$value', size: 39, weight: 400 },
        { text: L.freightYoy, size: 29, weight: 400, color: NOTE },
      ]),
      block(198, 1146, 'middle', [
        { text: L.freightMargin, size: 29, weight: 400, color: NOTE },
      ]),
    ] },
    revenue: { blocks: [block(866, 465, 'middle', [
      { text: L.revenue, size: 42, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
    ])] },
    gross_profit: { blocks: [block(1338, 339, 'middle', [
      { text: L.gross, size: 38, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
      { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
    ])] },
    cost_of_revenue: { blocks: [block(1341, 1145, 'middle', [
      { text: L.costOf, size: 36, weight: 800 },
      { text: L.revenueWord, size: 36, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ], 8)] },
    operating_profit: { blocks: [block(1769, 258, 'middle', [
      { text: L.operatingProfit, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
      { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
    ])] },
    operating_expenses: { blocks: [block(1796, 818, 'middle', [
      { text: L.operating, size: 38, weight: 800 },
      { text: L.expenses, size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ], 8)] },
    other: { blocks: [block(2133, 408, 'middle', [
      { text: L.other, size: 32, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 33, weight: 400, color: GREEN_LABEL },
    ], 10)] },
    net_profit: { blocks: [block(2341, 264, 'start', [
      { text: L.net, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.netMargin, size: 29, weight: 400, color: NOTE },
      { text: L.netYoy, size: 29, weight: 400, color: NOTE },
    ])] },
    interest: { blocks: [block(RIGHT_X, 517, 'start', [
      { text: L.interest, size: 31, weight: 800 },
    ])] },
    tax: { blocks: [block(2358, 627, 'start', [
      { text: L.tax, size: 31, weight: 800 },
    ])] },
    sm: { blocks: [block(2342, 740, 'start', [
      { text: L.sm, size: 31, weight: 800 },
      { text: L.smPct, size: 29, weight: 400, color: NOTE },
      { text: L.smYoy, size: 29, weight: 400, color: NOTE },
    ])] },
    rnd: { blocks: [block(2359, 894, 'start', [
      { text: L.rnd, size: 31, weight: 800 },
      { text: L.rndPct, size: 29, weight: 400, color: NOTE },
      { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
    ])] },
    operations: { blocks: [block(2317, 1022, 'start', [
      { text: L.operations, size: 30, weight: 800 },
      { text: L.operationsPct, size: 29, weight: 400, color: NOTE },
      { text: L.operationsYoy, size: 29, weight: 400, color: NOTE },
    ])] },
    ga: { blocks: [block(2361, 1160, 'start', [
      { text: L.ga, size: 31, weight: 800 },
      { text: L.gaPct, size: 29, weight: 400, color: NOTE },
      { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
    ])] },
    da: { blocks: [block(2361, 1296, 'start', [
      { text: L.da, size: 31, weight: 800 },
      { text: L.daPct, size: 29, weight: 400, color: NOTE },
      { text: L.daYoy, size: 29, weight: 400, color: NOTE },
    ])] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q2-fy23',
    name: 'Uber - Q2 FY23',
    company: 'Uber',
    meta: {
      company: 'Uber',
      title: 'Uber Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/uber-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 198,
      titleSize: 123,
      titleWeight: 700,
      titleTextLength: 2019,
      logoWidth: 470,
      logoHeight: 165,
      logoY: 252,
      logoViewBox: '0 0 470 165',
      logoSvg: '<text x="235" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="193" font-weight="500" fill="#000">Uber</text>',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: -9,
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 46.6,
      nodes: {
        mobility: { x: 364, y: 425, width: 71, height: 227 },
        delivery: { x: 364, y: 808, width: 71, height: 141 },
        freight: { x: 364, y: 1106, width: 71, height: 58 },
        revenue: { x: 831, y: 606, width: 70, height: 429 },
        gross_profit: { x: 1303, y: 513, width: 71, height: 174 },
        cost_of_revenue: { x: 1305, y: 867, width: 72, height: 257 },
        operating_profit: { x: 1753, y: 434, width: 70, height: 15 },
        operating_expenses: { x: 1761, y: 632, width: 70, height: 158 },
        other: { x: 2098, y: 377, width: 70, height: 12 },
        net_profit: { x: 2232, y: 314, width: 71, height: 18 },
        interest: { x: 2232, y: 527, width: 71, height: 7 },
        tax: { x: 2232, y: 638, width: 71, height: 3 },
        sm: { x: 2232, y: 743, width: 71, height: 57 },
        rnd: { x: 2232, y: 906, width: 71, height: 37 },
        operations: { x: 2232, y: 1048, width: 71, height: 31 },
        ga: { x: 2232, y: 1190, width: 71, height: 23 },
        da: { x: 2232, y: 1322, width: 71, height: 10 },
      },
      labels: makeLabels(text.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 4.9, notes: ['+38% Y/Y'], color: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 3.1, notes: ['+14% Y/Y'], color: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['(30%) Y/Y'], color: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 9.2, notes: ['+14% Y/Y'], color: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.7, notes: ['40% margin', '+4pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.5, color: RED, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, notes: ['4% margin', '+12pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.4, color: RED, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.3, color: GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['4% margin', '+37pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.1, color: RED, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.1, color: RED, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 1.2, color: RED, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.8, color: RED, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 5, type: 'cost', label: 'Operations', value: 0.7, color: RED, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 0.5, color: RED, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 7, type: 'cost', label: 'D&A', value: 0.2, color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 4.9, sourceWidth: 227, targetWidth: 227, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 3.1, sourceWidth: 141, targetWidth: 141, targetOrder: 1 },
      { source: 'freight', target: 'revenue', value: 1.3, sourceWidth: 58, targetWidth: 61, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.7, sourceWidth: 172, targetWidth: 174, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.5, sourceWidth: 257, targetWidth: 257, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, width: 15, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.4, width: 158, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 0.1, width: 5, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.3, width: 12, targetOrder: 1 },
      { source: 'operating_profit', target: 'interest', value: 0.1, width: 7, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 3, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 1.2, width: 57, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 37, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, width: 31, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.5, width: 23, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 10, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2023 财年第二季度',
        meta: { title: 'Uber 2023 财年第二季度利润表', titleTextLength: 1780 },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +38%'] },
          delivery: { label: '配送', notes: ['同比 +14%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 (30%)'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +12 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +37 个百分点'] },
          interest: { label: '利息' }, tax: { label: '税费' },
          sm: { label: '销售与市场' }, rnd: { label: '研发' },
          operations: { label: '运营' }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' },
        },
        layout: { labels: makeLabels(text.zh) },
      },
    },
  });
})();

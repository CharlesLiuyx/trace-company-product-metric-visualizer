/* Uber Q4 FY23 income statement ($B), reconstructed from the Source raster. */
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

  const card = (x, width, title, value, note, extra = '') => `
    <g>
      <rect x="${x}" y="1202" width="${width}" height="148" rx="18" fill="#000000"/>
      <text x="${x + width / 2}" y="1255" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      ${value ? `<text x="${x + width / 2}" y="1294" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>` : ''}
      ${note ? `<text x="${x + width / 2}" y="1326" text-anchor="middle" font-size="23" font-weight="500" fill="#ffffff">${note}</text>` : ''}
      ${extra}
    </g>`;

  const annotations = (L) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g data-typography-role="brand" font-family="Montserrat,Arial,sans-serif">
        <rect x="147" y="472" width="111" height="111" rx="15" fill="#000000"/>
        <text x="202" y="543" text-anchor="middle" font-family="Arial,sans-serif" font-size="39" font-weight="500" fill="#ffffff">Uber</text>
        <text x="68" y="873" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001e24">Uber</text>
        <text x="202" y="873" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#00c444">Eats</text>
        <text x="68" y="1102" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>
      </g>
      ${card(31, 157, L.trips, '2.6B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '150M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$37.6B', L.grossBookingsYoy)}
      ${card(709, 379, L.takeRate, '', '', `
        <text x="${L.takeRateX}" y="1293" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.mobilityTakeRate}</text>
        <text x="${L.takeRateX}" y="1326" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.deliveryTakeRate}</text>
      `)}
      <text x="85" y="1387" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips', tripsYoy: '+24% Y/Y', mapcYoy: '+15% Y/Y',
    grossBookings: 'Gross Bookings', grossBookingsYoy: '+22% Y/Y',
    takeRate: 'Take rate', takeRateX: 741, takeRateSize: 27,
    mobilityTakeRate: 'Mobility 28.7% (+0.9pp Y/Y)',
    deliveryTakeRate: 'Delivery 18.3% (-2.1pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });
  const annotationsZh = annotations({
    trips: '行程', tripsYoy: '同比 +24%', mapcYoy: '同比 +15%',
    grossBookings: '总预订额', grossBookingsYoy: '同比 +22%',
    takeRate: '抽成率', takeRateX: 737, takeRateSize: 25,
    mobilityTakeRate: '出行 28.7%（同比 +0.9 个百分点）',
    deliveryTakeRate: '配送 18.3%（同比 -2.1 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const text = {
    en: {
      mobilityYoy: '+34% Y/Y', mobilityName: 'Mobility', mobilityMargin: '26% adjusted margin',
      deliveryYoy: '+6% Y/Y', deliveryName: 'Delivery', deliveryMargin: '15% adjusted margin',
      freightYoy: '(17%) Y/Y', freightMargin: '(1%) adjusted margin',
      revenue: 'Revenue', revenueYoy: '+15% Y/Y', grossProfit: 'Gross profit', grossMargin: '39% margin', grossYoy: '+1pp Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue', operatingProfit: 'Operating profit', operatingMargin: '7% margin', operatingYoy: '+8pp Y/Y',
      operating: 'Operating', expenses: 'expenses', equity: 'Equity investments', netProfit: 'Net profit', netMargin: '17% margin', netYoy: '+10pp Y/Y',
      interest: 'Interest', tax: 'Tax', sm: 'S&M ($0.9B)', smPct: '9% of revenue', smYoy: '(4pp) Y/Y',
      rnd: 'R&D ($0.8B)', rndPct: '8% of revenue', rndYoy: '(1pp) Y/Y', operations: 'Operations ($0.7B)', operationsPct: '7% of revenue', operationsYoy: '+0pp Y/Y',
      ga: 'G&A ($0.6B)', gaPct: '6% of revenue', gaYoy: '(3pp) Y/Y', da: 'D&A ($0.2B)', daPct: '2% of revenue', daYoy: '(1pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +34%', mobilityName: '出行', mobilityMargin: '调整后利润率 26%',
      deliveryYoy: '同比 +6%', deliveryName: '配送', deliveryMargin: '调整后利润率 15%',
      freightYoy: '同比 (17%)', freightMargin: '调整后利润率 (1%)',
      revenue: '收入', revenueYoy: '同比 +15%', grossProfit: '毛利润', grossMargin: '利润率 39%', grossYoy: '同比 +1 个百分点',
      costOf: '收入', revenueWord: '成本', operatingProfit: '营业利润', operatingMargin: '利润率 7%', operatingYoy: '同比 +8 个百分点',
      operating: '营业', expenses: '费用', equity: '权益投资', netProfit: '净利润', netMargin: '利润率 17%', netYoy: '同比 +10 个百分点',
      interest: '利息', tax: '税费', sm: '销售与市场 ($0.9B)', smPct: '占收入 9%', smYoy: '同比 (4 个百分点)',
      rnd: '研发 ($0.8B)', rndPct: '占收入 8%', rndYoy: '同比 (1 个百分点)', operations: '运营 ($0.7B)', operationsPct: '占收入 7%', operationsYoy: '同比 +0 个百分点',
      ga: '管理费用 ($0.6B)', gaPct: '占收入 6%', gaYoy: '同比 (3 个百分点)', da: '折旧与摊销 ($0.2B)', daPct: '占收入 2%', daYoy: '同比 (1 个百分点)',
    },
  };

  const block = (x, top, anchor, lines, lineGap = 9) => ({ x, top, anchor, lineGap, lines });
  const line = (value, size, weight = 400, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });
  const makeLabels = (L) => ({
    mobility: { blocks: [
      block(399, 378, 'middle', [line('$value', 39), line(L.mobilityYoy, 29, 400, NOTE)], 8),
      block(204, 607, 'middle', [line(L.mobilityName, 41, 800), line(L.mobilityMargin, 29, 400, NOTE)]),
    ] },
    delivery: { blocks: [
      block(399, 729, 'middle', [line('$value', 39), line(L.deliveryYoy, 29, 400, NOTE)], 8),
      block(201, 886, 'middle', [line(L.deliveryName, 41, 800), line(L.deliveryMargin, 29, 400, NOTE)]),
    ] },
    freight: { blocks: [
      block(403, 996, 'middle', [line('$value', 39), line(L.freightYoy, 29, 400, NOTE)], 8),
      block(199, 1123, 'middle', [line(L.freightMargin, 29, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(777, 497, 'start', [line(L.revenue, 42, 800), line('$value', 40), line(L.revenueYoy, 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1332, 375, 'middle', [line(L.grossProfit, 38, 800), line('$value', 39), line(L.grossMargin, 29, 400, NOTE), line(L.grossYoy, 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1332, 1148, 'middle', [line(L.costOf, 36, 800), line(L.revenueWord, 36, 800), line('$value', 37)])] },
    operating_profit: { blocks: [block(1795, 279, 'middle', [line(L.operatingProfit, 38, 800), line('$value', 40), line(L.operatingMargin, 29, 400, NOTE), line(L.operatingYoy, 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1793, 831, 'middle', [line(L.operating, 38, 800), line(L.expenses, 38, 800), line('$value', 38)])] },
    equity_investments: { blocks: [block(2110, 219, 'middle', [line(L.equity, 32, 800, GREEN_LABEL), line('$value', 33, 400, GREEN_LABEL)], 12)] },
    net_profit: { blocks: [block(2338, 320, 'start', [line(L.netProfit, 38, 800), line('$value', 40), line(L.netMargin, 29, 400, NOTE), line(L.netYoy, 29, 400, NOTE)], 8)] },
    interest: { blocks: [block(2378, 513, 'start', [line(L.interest, 32, 800), line('$value', 32)], 10)] },
    tax: { blocks: [block(2388, 584, 'start', [line(L.tax, 32, 800), line('$value', 32)], 10)] },
    sm: { blocks: [block(2356, 700, 'start', [line(L.sm, 32, 800), line(L.smPct, 29, 400, NOTE), line(L.smYoy, 29, 400, NOTE)], 10)] },
    rnd: { blocks: [block(2359, 852, 'start', [line(L.rnd, 32, 800), line(L.rndPct, 29, 400, NOTE), line(L.rndYoy, 29, 400, NOTE)], 10)] },
    operations: { blocks: [block(2316, 993, 'start', [line(L.operations, 31, 800), line(L.operationsPct, 29, 400, NOTE), line(L.operationsYoy, 29, 400, NOTE)], 10)] },
    ga: { blocks: [block(2360, 1140, 'start', [line(L.ga, 32, 800), line(L.gaPct, 29, 400, NOTE), line(L.gaYoy, 29, 400, NOTE)], 10)] },
    da: { blocks: [block(2361, 1280, 'start', [line(L.da, 32, 800), line(L.daPct, 29, 400, NOTE), line(L.daYoy, 29, 400, NOTE)], 10)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q4-fy23', name: 'Uber - Q4 FY23', company: 'Uber',
    meta: {
      title: 'Uber Q4 FY23 Income Statement', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/uber-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 123, titleWeight: 700, titleTextLength: 2025,
      logoWidth: 470, logoHeight: 165, logoY: 262, logoViewBox: '0 0 470 165',
      logoSvg: '<text x="235" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="193" font-weight="500" fill="#000000">Uber</text>',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, labelYOffset: -9,
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 40,
      nodes: {
        mobility: { x: 364, y: 468, width: 71, height: 224 }, delivery: { x: 364, y: 821, width: 71, height: 125 }, freight: { x: 366, y: 1074, width: 71, height: 50 },
        revenue: { x: 831, y: 641, width: 70, height: 405 }, gross_profit: { x: 1300, y: 546, width: 72, height: 157 }, cost_of_revenue: { x: 1300, y: 869, width: 72, height: 247 },
        operating_profit: { x: 1761, y: 449, width: 70, height: 24 }, operating_expenses: { x: 1761, y: 668, width: 70, height: 130 },
        equity_investments: { x: 2093, y: 302, width: 70, height: 52 }, net_profit: { x: 2232, y: 332, width: 71, height: 67 },
        interest: { x: 2232, y: 537, width: 71, height: 5 }, tax: { x: 2232, y: 616, width: 71, height: 2 }, sm: { x: 2232, y: 712, width: 71, height: 36 },
        rnd: { x: 2232, y: 872, width: 71, height: 30 }, operations: { x: 2232, y: 1026, width: 71, height: 26 }, ga: { x: 2232, y: 1173, width: 71, height: 23 }, da: { x: 2232, y: 1318, width: 71, height: 6 },
      },
      labels: makeLabels(text.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 5.5, notes: ['+34% Y/Y'], color: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 3.1, notes: ['+6% Y/Y'], color: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['(17%) Y/Y'], color: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 9.9, notes: ['+15% Y/Y'], color: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.9, notes: ['39% margin', '+1pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.1, color: RED, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, notes: ['7% margin', '+8pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.2, color: RED, linkTint: RED_LINK },
      { id: 'equity_investments', col: 4, order: 0, type: 'profit', label: 'Equity investments', value: 1.3, color: GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: 'Net profit', value: 1.7, notes: ['17% margin', '+10pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.2, color: RED, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 3, type: 'cost', label: 'Tax', value: 0.1, color: RED, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 0.9, color: RED, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 0.8, color: RED, linkTint: RED_LINK },
      { id: 'operations', col: 4, order: 6, type: 'cost', label: 'Operations', value: 0.7, color: RED, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 7, type: 'cost', label: 'G&A', value: 0.6, color: RED, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 8, type: 'cost', label: 'D&A', value: 0.2, color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 5.5, width: 224 }, { source: 'delivery', target: 'revenue', value: 3.1, width: 125 }, { source: 'freight', target: 'revenue', value: 1.3, width: 50, targetWidth: 56 },
      { source: 'revenue', target: 'gross_profit', value: 3.9, width: 157 }, { source: 'revenue', target: 'cost_of_revenue', value: 6.1, width: 247 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.7, width: 24 }, { source: 'gross_profit', target: 'operating_expenses', value: 3.2, width: 130, sourceWidth: 133 },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, width: 13, sourceWidth: 14, targetWidth: 15, sourceOrder: 0, targetOrder: 1 },
      { source: 'equity_investments', target: 'net_profit', value: 1.3, width: 52, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, width: 5, sourceWidth: 7, sourceOrder: 1 }, { source: 'operating_profit', target: 'tax', value: 0.1, width: 2, sourceWidth: 3, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 0.9, width: 36, sourceWidth: 36, sourceOrder: 0 }, { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 30, sourceWidth: 32, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, width: 26, sourceWidth: 28, sourceOrder: 2 }, { source: 'operating_expenses', target: 'ga', value: 0.6, width: 23, sourceWidth: 24, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 6, sourceWidth: 10, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2023 财年第四季度', meta: { title: 'Uber 2023 财年第四季度利润表', titleTextLength: 1780 }, annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +34%'] }, delivery: { label: '配送', notes: ['同比 +6%'] }, freight: { label: 'Uber Freight 货运', notes: ['同比 (17%)'] },
          revenue: { label: '收入', notes: ['同比 +15%'] }, gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +8 个百分点'] }, operating_expenses: { label: '营业费用' }, equity_investments: { label: '权益投资' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +10 个百分点'] }, interest: { label: '利息' }, tax: { label: '税费' }, sm: { label: '销售与市场' }, rnd: { label: '研发' },
          operations: { label: '运营' }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' },
        },
        layout: { labels: makeLabels(text.zh) },
      },
    },
  });
})();

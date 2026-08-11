/* Uber — Q3 FY23 income statement ($B).
 * Reconstructed from input/processed/uber-q3-fy23.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/uber.js. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const TAX_GREEN = '#008e00';
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
      ${note ? `<text x="${x + width / 2}" y="1333" text-anchor="middle" font-size="23" font-weight="500" fill="#ffffff">${note}</text>` : ''}
      ${extra}
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Noto Sans,Arial,sans-serif">
      <g data-typography-role="brand">
        <rect x="159" y="473" width="92" height="92" rx="14" fill="#000000"/>
        <text x="205" y="535" text-anchor="middle" font-family="Arial,sans-serif" font-size="31" font-weight="500" fill="#ffffff">Uber</text>
        <text x="69" y="873" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#001e24">Uber</text>
        <text x="183" y="873" font-family="Arial,sans-serif" font-size="48" font-weight="800" fill="#00c444">Eats</text>
        <text x="65" y="1129" font-family="Arial,sans-serif" font-size="44" font-weight="500" fill="#000000">Uber Freight</text>
      </g>
      ${card(31, 157, L.trips, '2.4B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '142M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$35.3B', L.grossBookingsYoy)}
      ${card(709, 379, L.takeRate, '', '', `
        <text x="${L.takeRateX}" y="1294" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.mobilityTakeRate}</text>
        <text x="${L.takeRateX}" y="1333" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.deliveryTakeRate}</text>
      `)}
      <text x="85" y="1384" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips', tripsYoy: '+25% Y/Y', mapcYoy: '+15% Y/Y',
    grossBookings: 'Gross Bookings', grossBookingsYoy: '+21% Y/Y', takeRate: 'Take rate',
    takeRateX: 741, takeRateSize: 27,
    mobilityTakeRate: 'Mobility 28.3% (+0.4pp Y/Y)',
    deliveryTakeRate: 'Delivery 18.2% (-2.0pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });
  const annotationsZh = annotations({
    trips: '行程', tripsYoy: '同比 +25%', mapcYoy: '同比 +15%',
    grossBookings: '总预订额', grossBookingsYoy: '同比 +21%', takeRate: '抽成率',
    takeRateX: 727, takeRateSize: 22,
    mobilityTakeRate: '出行 28.3%（同比 +0.4 个百分点）',
    deliveryTakeRate: '配送 18.2%（同比 -2.0 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const copy = {
    en: {
      mobilityYoy: '+33% Y/Y', mobilityName: 'Mobility', mobilityMargin: '25% adjusted margin',
      deliveryYoy: '+6% Y/Y', deliveryName: 'Delivery', deliveryMargin: '14% adjusted margin',
      freightYoy: '(27%) Y/Y', freightMargin: '(1%) adjusted margin', revenue: 'Revenue', revenueYoy: '+11% Y/Y',
      gross: 'Gross profit', grossMargin: '39% margin', grossYoy: '+1pp Y/Y', costOf: 'Cost of', revenueWord: 'revenue',
      operatingProfit: 'Operating profit', operatingMargin: '4% margin', operatingYoy: '+10pp Y/Y',
      operating: 'Operating', expenses: 'expenses', taxBenefit: 'Tax benefit', netProfit: 'Net profit', netMargin: '2% margin', netYoy: '+17pp Y/Y', interestOther: 'Interest & Other',
      sm: 'S&M ($0.9B)', smPct: '10% of revenue', smYoy: '(4pp) Y/Y',
      rnd: 'R&D ($0.9B)', rndPct: '9% of revenue', rndYoy: '(1pp) Y/Y',
      operations: 'Operations ($0.7B)', operationsPct: '7% of revenue', operationsYoy: '+0pp Y/Y',
      ga: 'G&A ($0.6B)', gaPct: '7% of revenue', gaYoy: '(4pp) Y/Y',
      da: 'D&A ($0.2B)', daPct: '2% of revenue', daYoy: '(1pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +33%', mobilityName: '出行', mobilityMargin: '调整后利润率 25%',
      deliveryYoy: '同比 +6%', deliveryName: '配送', deliveryMargin: '调整后利润率 14%',
      freightYoy: '同比 (27%)', freightMargin: '调整后利润率 (1%)', revenue: '收入', revenueYoy: '同比 +11%',
      gross: '毛利润', grossMargin: '利润率 39%', grossYoy: '同比 +1 个百分点', costOf: '收入', revenueWord: '成本',
      operatingProfit: '营业利润', operatingMargin: '利润率 4%', operatingYoy: '同比 +10 个百分点',
      operating: '营业', expenses: '费用', taxBenefit: '税收收益', netProfit: '净利润', netMargin: '利润率 2%', netYoy: '同比 +17 个百分点', interestOther: '利息及其他',
      sm: '销售与市场 ($0.9B)', smPct: '占收入 10%', smYoy: '同比 (4 个百分点)',
      rnd: '研发 ($0.9B)', rndPct: '占收入 9%', rndYoy: '同比 (1 个百分点)',
      operations: '运营 ($0.7B)', operationsPct: '占收入 7%', operationsYoy: '同比 +0 个百分点',
      ga: '管理费用 ($0.6B)', gaPct: '占收入 7%', gaYoy: '同比 (4 个百分点)',
      da: '折旧与摊销 ($0.2B)', daPct: '占收入 2%', daYoy: '同比 (1 个百分点)',
    },
  };

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 9) => ({ x, top, anchor, lineGap, lines });
  const labels = (L) => ({
    mobility: { blocks: [
      block(400, 359, [line('$value', 39), line(L.mobilityYoy, 29, 400, NOTE)]),
      block(204, 580, [line(L.mobilityName, 41, 800), line(L.mobilityMargin, 29, 400, NOTE)]),
    ] },
    delivery: { blocks: [
      block(400, 733, [line('$value', 39), line(L.deliveryYoy, 29, 400, NOTE)]),
      block(201, 879, [line(L.deliveryName, 41, 800), line(L.deliveryMargin, 29, 400, NOTE)]),
    ] },
    freight: { blocks: [
      block(400, 999, [line('$value', 39), line(L.freightYoy, 29, 400, NOTE)]),
      block(198, 1138, [line(L.freightMargin, 29, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(775, 484, [line(L.revenue, 42, 800), line('$value', 40), line(L.revenueYoy, 29, 400, NOTE)], 'start')] },
    gross_profit: { blocks: [block(1329, 368, [line(L.gross, 38, 800), line('$value', 39), line(L.grossMargin, 29, 400, NOTE), line(L.grossYoy, 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1326, 1155, [line(L.costOf, 36, 800), line(L.revenueWord, 36, 800), line('$value', 37)])] },
    operating_profit: { blocks: [block(1791, 291, [line(L.operatingProfit, 38, 800), line('$value', 40), line(L.operatingMargin, 29, 400, NOTE), line(L.operatingYoy, 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1791, 848, [line(L.operating, 38, 800), line(L.expenses, 38, 800), line('$value', 38)])] },
    tax_benefit: { blocks: [block(2116, 469, [line(L.taxBenefit, 31, 800, TAX_GREEN), line('$value', 31, 400, TAX_GREEN)])] },
    net_profit: { blocks: [block(2338, 345, [line(L.netProfit, 38, 800), line('$value', 40), line(L.netMargin, 29, 400, NOTE), line(L.netYoy, 29, 400, NOTE)], 'start')] },
    interest_and_other: { blocks: [block(2328, 566, [line(L.interestOther, 32, 800), line('$value', 32)], 'start')] },
    sm: { blocks: [block(2341, 729, [line(L.sm, 32, 800), line(L.smPct, 29, 400, NOTE), line(L.smYoy, 29, 400, NOTE)], 'start', 10)] },
    rnd: { blocks: [block(2359, 884, [line(L.rnd, 32, 800), line(L.rndPct, 29, 400, NOTE), line(L.rndYoy, 29, 400, NOTE)], 'start', 10)] },
    operations: { blocks: [block(2316, 1013, [line(L.operations, 31, 800), line(L.operationsPct, 29, 400, NOTE), line(L.operationsYoy, 29, 400, NOTE)], 'start', 10)] },
    ga: { blocks: [block(2359, 1142, [line(L.ga, 32, 800), line(L.gaPct, 29, 400, NOTE), line(L.gaYoy, 29, 400, NOTE)], 'start', 10)] },
    da: { blocks: [block(2361, 1274, [line(L.da, 32, 800), line(L.daPct, 29, 400, NOTE), line(L.daYoy, 29, 400, NOTE)], 'start', 10)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q3-fy23', name: 'Uber - Q3 FY23', company: 'Uber',
    meta: {
      title: 'Uber Q3 FY23 Income Statement', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/uber-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 123, titleWeight: 700, titleTextLength: 2025,
      logoWidth: 470, logoHeight: 165, logoY: 262, logoViewBox: '0 0 470 165',
      logoSvg: '<text x="235" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="193" font-weight="500" fill="#000000">Uber</text>',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 45,
      nodes: {
        mobility: { x: 364, y: 459, width: 71, height: 231 },
        delivery: { x: 364, y: 835, width: 71, height: 132 },
        freight: { x: 364, y: 1102, width: 71, height: 57 },
        revenue: { x: 831, y: 636, width: 70, height: 424 },
        gross_profit: { x: 1293, y: 556, width: 71, height: 166 },
        cost_of_revenue: { x: 1290, y: 885, width: 72, height: 256 },
        operating_profit: { x: 1756, y: 478, width: 70, height: 17 },
        operating_expenses: { x: 1756, y: 683, width: 70, height: 148 },
        tax_benefit: { x: 2077, y: 458, width: 72, height: 3 },
        net_profit: { x: 2232, y: 392, width: 71, height: 10 },
        interest_and_other: { x: 2232, y: 587, width: 71, height: 8 },
        sm: { x: 2232, y: 755, width: 71, height: 41 },
        rnd: { x: 2232, y: 902, width: 71, height: 34 },
        operations: { x: 2232, y: 1040, width: 71, height: 29 },
        ga: { x: 2232, y: 1175, width: 71, height: 28 },
        da: { x: 2232, y: 1316, width: 71, height: 8 },
      },
      labels: labels(copy.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 5.1, notes: ['+33% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 2.9, notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['(27%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 9.3, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.7, notes: ['39% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['4% margin', '+10pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 0.04, valueText: '$40M', color: TAX_GREEN, labelColor: TAX_GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['2% margin', '+17pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest_and_other', col: 5, order: 1, type: 'cost', label: 'Interest & Other', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 4, type: 'cost', label: 'Operations', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 6, type: 'cost', label: 'D&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 5.1, sourceWidth: 231, targetWidth: 231, sourceOrder: 0, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 2.9, sourceWidth: 132, targetWidth: 132, sourceOrder: 0, targetOrder: 1 },
      { source: 'freight', target: 'revenue', value: 1.3, sourceWidth: 57, targetWidth: 61, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.7, sourceWidth: 168, targetWidth: 166, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.6, sourceWidth: 256, targetWidth: 256, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 18, targetWidth: 17, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.3, sourceWidth: 148, targetWidth: 148, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_and_other', value: 0.2, sourceWidth: 10, targetWidth: 8, sourceOrder: 1, targetOrder: 0 },
      { source: 'tax_benefit', target: 'net_profit', value: 0.04, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.9, sourceWidth: 40, targetWidth: 41, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 40, targetWidth: 34, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, sourceWidth: 31, targetWidth: 29, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.6, sourceWidth: 27, targetWidth: 28, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 10, targetWidth: 8, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: { zh: {
      name: 'Uber · 2023 财年第三季度', meta: { title: 'Uber 2023 财年第三季度利润表', titleTextLength: 1780 },
      annotationsSvg: annotationsZh,
      nodes: {
        mobility: { label: '出行', notes: ['同比 +33%'] }, delivery: { label: '配送', notes: ['同比 +6%'] },
        freight: { label: 'Uber Freight 货运', notes: ['同比 (27%)'] }, revenue: { label: '收入', notes: ['同比 +11%'] },
        gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
        operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +10 个百分点'] }, operating_expenses: { label: '营业费用' }, tax_benefit: { label: '税收收益' },
        net_profit: { label: '净利润', notes: ['利润率 2%', '同比 +17 个百分点'] }, interest_and_other: { label: '利息及其他' },
        sm: { label: '销售与市场' }, rnd: { label: '研发' }, operations: { label: '运营' }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' },
      },
      layout: { labels: labels(copy.zh) },
    } },
  });
})();

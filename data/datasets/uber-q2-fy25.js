/* Uber - Q2 FY25 income statement ($B), fixed d3-sankey reconstruction. */
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
      <rect x="${x}" y="1163" width="${width}" height="148" rx="18" fill="#000000"/>
      <text x="${x + width / 2}" y="1216" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      ${value ? `<text x="${x + width / 2}" y="1255" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>` : ''}
      ${note ? `<text x="${x + width / 2}" y="1287" text-anchor="middle" font-size="23" font-weight="500" fill="#ffffff">${note}</text>` : ''}
      ${extra}
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g data-typography-role="brand">
        <rect x="147" y="378" width="111" height="111" rx="15" fill="#000000"/>
        <text x="202" y="449" text-anchor="middle" font-family="Arial,sans-serif" font-size="39" font-weight="500" fill="#ffffff">Uber</text>
        <text x="68" y="804" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001e24">Uber</text>
        <text x="202" y="804" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#00c444">Eats</text>
        <text x="68" y="1072" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>
      </g>
      ${card(31, 157, L.trips, '3.3B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '180M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$46.8B', L.grossBookingsYoy)}
      ${card(709, 379, L.takeRate, '', '', `
        <text x="${L.takeRateX}" y="1254" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.mobilityTakeRate}</text>
        <text x="${L.takeRateX}" y="1287" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.deliveryTakeRate}</text>
      `)}
      <text x="85" y="1348" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips', tripsYoy: '+18% Y/Y', mapcYoy: '+15% Y/Y',
    grossBookings: 'Gross Bookings', grossBookingsYoy: '+18% Y/Y fx neutral',
    takeRate: 'Take rate', takeRateX: 741, takeRateSize: 25,
    mobilityTakeRate: 'Mobility 30.7% (+0.9pp Y/Y)',
    deliveryTakeRate: 'Delivery 18.9% (+0.7pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });
  const annotationsZh = annotations({
    trips: '行程', tripsYoy: '同比 +18%', mapcYoy: '同比 +15%',
    grossBookings: '总预订额', grossBookingsYoy: '同比 +18%（汇率中性）',
    takeRate: '抽成率', takeRateX: 730, takeRateSize: 22,
    mobilityTakeRate: '出行 30.7%（同比 +0.9 个百分点）',
    deliveryTakeRate: '配送 18.9%（同比 +0.7 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const text = {
    en: {
      mobilityYoy: '+19% Y/Y', mobilityName: 'Mobility', mobilityMargin: '26% adjusted margin', mobilityMarginYoy: '+1pp Y/Y',
      deliveryYoy: '+25% Y/Y', deliveryName: 'Delivery', deliveryMargin: '21% adjusted margin', deliveryMarginYoy: '+3pp Y/Y',
      freightYoy: '(1%) Y/Y', freightMargin: '(0%) adjusted margin', freightMarginYoy: '+0pp Y/Y',
      revenue: 'Revenue', revenueYoy: '+18% Y/Y', gross: 'Gross profit', grossMargin: '40% margin', grossYoy: '+0pp Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue', operatingProfit: 'Operating profit', operatingMargin: '11% margin', operatingYoy: '+4pp Y/Y',
      operating: 'Operating', expenses: 'expenses', other: 'Other', netProfit: 'Net profit', netMargin: '11% margin', netYoy: '+1pp Y/Y',
      taxInterest: 'Tax & Interest',
      sm: 'S&M ($1.2B)', smPct: '10% of revenue', smYoy: '(1pp) Y/Y',
      rnd: 'R&D ($0.8B)', rndPct: '7% of revenue', rndYoy: '(0pp) Y/Y',
      operations: 'Operations ($0.7B)', operationsPct: '6% of revenue', operationsYoy: '(1pp) Y/Y',
      ga: 'G&A ($0.7B)', gaPct: '5% of revenue', gaYoy: '(1pp) Y/Y',
      da: 'D&A ($0.2B)', daPct: '1% of revenue', daYoy: '(0pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +19%', mobilityName: '出行', mobilityMargin: '调整后利润率 26%', mobilityMarginYoy: '同比 +1 个百分点',
      deliveryYoy: '同比 +25%', deliveryName: '配送', deliveryMargin: '调整后利润率 21%', deliveryMarginYoy: '同比 +3 个百分点',
      freightYoy: '同比 (1%)', freightMargin: '调整后利润率 (0%)', freightMarginYoy: '同比 +0 个百分点',
      revenue: '收入', revenueYoy: '同比 +18%', gross: '毛利润', grossMargin: '利润率 40%', grossYoy: '同比 +0 个百分点',
      costOf: '收入', revenueWord: '成本', operatingProfit: '营业利润', operatingMargin: '利润率 11%', operatingYoy: '同比 +4 个百分点',
      operating: '运营', expenses: '费用', other: '其他', netProfit: '净利润', netMargin: '利润率 11%', netYoy: '同比 +1 个百分点',
      taxInterest: '税费及利息',
      sm: '销售与市场 ($1.2B)', smPct: '占收入 10%', smYoy: '同比 (1 个百分点)',
      rnd: '研发 ($0.8B)', rndPct: '占收入 7%', rndYoy: '同比 (0 个百分点)',
      operations: '运营 ($0.7B)', operationsPct: '占收入 6%', operationsYoy: '同比 (1 个百分点)',
      ga: '管理费用 ($0.7B)', gaPct: '占收入 5%', gaYoy: '同比 (1 个百分点)',
      da: '折旧与摊销 ($0.2B)', daPct: '占收入 1%', daYoy: '同比 (0 个百分点)',
    },
  };

  const block = (x, top, lines, anchor = 'middle', lineGap = 9) => ({ x, top, anchor, lineGap, lines });
  const line = (value, size, weight = 400, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });
  const makeLabels = (L) => ({
    mobility: { blocks: [
      block(400, 351, [line('$value', 39), line(L.mobilityYoy, 29, 400, NOTE)]),
      block(200, 526, [line(L.mobilityName, 41, 800), line(L.mobilityMargin, 29, 400, NOTE), line(L.mobilityMarginYoy, 29, 400, NOTE)]),
    ] },
    delivery: { blocks: [
      block(400, 701, [line('$value', 39), line(L.deliveryYoy, 29, 400, NOTE)]),
      block(198, 824, [line(L.deliveryName, 41, 800), line(L.deliveryMargin, 29, 400, NOTE), line(L.deliveryMarginYoy, 29, 400, NOTE)]),
    ] },
    freight: { blocks: [
      block(400, 970, [line('$value', 39), line(L.freightYoy, 29, 400, NOTE)]),
      block(200, 1086, [line(L.freightMargin, 29, 400, NOTE), line(L.freightMarginYoy, 29, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(778, 479, [line(L.revenue, 42, 800), line('$value', 40), line(L.revenueYoy, 29, 400, NOTE)], 'start')] },
    gross_profit: { blocks: [block(1334, 354, [line(L.gross, 38, 800), line('$value', 39), line(L.grossMargin, 29, 400, NOTE), line(L.grossYoy, 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1339, 1117, [line(L.costOf, 36, 800), line(L.revenueWord, 36, 800), line('$value', 37)])] },
    operating_profit: { blocks: [block(1801, 250, [line(L.operatingProfit, 38, 800), line('$value', 40), line(L.operatingMargin, 29, 400, NOTE), line(L.operatingYoy, 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1803, 803, [line(L.operating, 38, 800), line(L.expenses, 38, 800), line('$value', 38)])] },
    other: { blocks: [block(2161, 435, [line(L.other, 32, 800, GREEN_LABEL), line('$value', 33, 400, GREEN_LABEL)], 'middle', 16)] },
    net_profit: { blocks: [block(2358, 293, [line(L.netProfit, 38, 800), line('$value', 40), line(L.netMargin, 29, 400, NOTE), line(L.netYoy, 29, 400, NOTE)], 'start')] },
    tax_interest: { blocks: [block(2348, 545, [line(L.taxInterest, 32, 800), line('$value', 32)], 'start', 10)] },
    sm: { blocks: [block(2353, 729, [line(L.sm, 32, 800), line(L.smPct, 29, 400, NOTE), line(L.smYoy, 29, 400, NOTE)], 'start', 10)] },
    rnd: { blocks: [block(2359, 872, [line(L.rnd, 32, 800), line(L.rndPct, 29, 400, NOTE), line(L.rndYoy, 29, 400, NOTE)], 'start', 10)] },
    operations: { blocks: [block(2318, 1006, [line(L.operations, 31, 800), line(L.operationsPct, 29, 400, NOTE), line(L.operationsYoy, 29, 400, NOTE)], 'start', 10)] },
    ga: { blocks: [block(2356, 1139, [line(L.ga, 32, 800), line(L.gaPct, 29, 400, NOTE), line(L.gaYoy, 29, 400, NOTE)], 'start', 10)] },
    da: { blocks: [block(2361, 1270, [line(L.da, 32, 800), line(L.daPct, 29, 400, NOTE), line(L.daYoy, 29, 400, NOTE)], 'start', 10)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q2-fy25', name: 'Uber - Q2 FY25', company: 'Uber',
    meta: {
      title: 'Uber Q2 FY25 Income Statement', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/uber-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 123, titleWeight: 700, titleTextLength: 2025,
      logoWidth: 470, logoHeight: 165, logoY: 262, logoViewBox: '0 0 470 165',
      logoSvg: '<text x="235" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="193" font-weight="500" fill="#000000">Uber</text>',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, labelYOffset: -9, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 28.4,
      nodes: {
        mobility: { x: 365, y: 432, width: 71, height: 207 }, delivery: { x: 365, y: 783, width: 71, height: 117 }, freight: { x: 365, y: 1056, width: 71, height: 34 },
        revenue: { x: 832, y: 619, width: 70, height: 362 }, gross_profit: { x: 1299, y: 524, width: 71, height: 143 }, cost_of_revenue: { x: 1301, y: 877, width: 72, height: 216 },
        operating_profit: { x: 1767, y: 422, width: 70, height: 38 }, operating_expenses: { x: 1767, y: 667, width: 70, height: 101 },
        other: { x: 2124, y: 410, width: 70, height: 3 }, net_profit: { x: 2233, y: 323, width: 71, height: 36 }, tax_interest: { x: 2233, y: 573, width: 71, height: 5 },
        sm: { x: 2233, y: 737, width: 71, height: 32 }, rnd: { x: 2233, y: 883, width: 71, height: 22 }, operations: { x: 2233, y: 1011, width: 71, height: 19 },
        ga: { x: 2233, y: 1146, width: 71, height: 17 }, da: { x: 2233, y: 1284, width: 71, height: 2 },
      },
      labels: makeLabels(text.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 7.3, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 4.1, notes: ['+25% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.7, notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.0, valueText: '$5.0B', notes: ['40% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, notes: ['11% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.4, notes: ['11% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_interest', col: 4, order: 1, type: 'cost', label: 'Tax & Interest', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 4, order: 4, type: 'cost', label: 'Operations', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 6, type: 'cost', label: 'D&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 7.3, width: 207 }, { source: 'delivery', target: 'revenue', value: 4.1, width: 117 }, { source: 'freight', target: 'revenue', value: 1.3, width: 34, targetWidth: 38 },
      { source: 'revenue', target: 'gross_profit', value: 5.0, width: 143 }, { source: 'revenue', target: 'cost_of_revenue', value: 7.6, width: 216, sourceWidth: 219 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.5, width: 38 }, { source: 'gross_profit', target: 'operating_expenses', value: 3.6, width: 101, sourceWidth: 105 },
      { source: 'operating_profit', target: 'net_profit', value: 1.4, width: 36, sourceWidth: 33, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.2, width: 3, targetOrder: 1, y1: 357.5, curve: { c1x: 2210, c1y: 411, c2x: 2217, c2y: 357.5 } },
      { source: 'operating_profit', target: 'tax_interest', value: 0.3, width: 5, sourceWidth: 5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 1.2, width: 32, sourceWidth: 34, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 22, sourceWidth: 25, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, width: 19, sourceWidth: 21, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.7, width: 17, sourceWidth: 19, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 2, sourceWidth: 2, sourceOrder: 4 },
    ],
    i18n: { zh: {
      name: 'Uber · 2025 财年第二季度', meta: { title: 'Uber 2025 财年第二季度利润表', titleTextLength: 1780 }, annotationsSvg: annotationsZh,
      nodes: {
        mobility: { label: '出行', notes: ['同比 +19%'] }, delivery: { label: '配送', notes: ['同比 +25%'] }, freight: { label: 'Uber Freight 货运', notes: ['同比 (1%)'] },
        revenue: { label: '收入', notes: ['同比 +18%'] }, gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
        operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +4 个百分点'] }, operating_expenses: { label: '运营费用' }, other: { label: '其他' },
        net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +1 个百分点'] }, tax_interest: { label: '税费及利息' }, sm: { label: '销售与市场' }, rnd: { label: '研发' },
        operations: { label: '运营' }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' },
      },
      layout: { labels: makeLabels(text.zh) },
    } },
  });
})();

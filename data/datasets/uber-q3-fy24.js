/* ====================================================================
 * Uber - Q3 FY24 income statement ($B)
 * Reconstructed from input/processed/uber-q3-fy24.png as a fixed d3-sankey
 * layout with pure SVG/text annotations.
 * ==================================================================== */
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
  const RIGHT_COST_LABEL_X = 2355;

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
        <rect x="147" y="445" width="111" height="111" rx="15" fill="#000000"/>
        <text x="202" y="516" text-anchor="middle" font-family="Arial,sans-serif" font-size="39" font-weight="500" fill="#ffffff">Uber</text>

        <text x="69" y="853" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001e24">Uber</text>
        <text x="203" y="853" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#00c444">Eats</text>
        <text x="69" y="1113" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>
      </g>

      ${card(31, 157, L.trips, '2.9B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '161M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$41.0B', L.grossBookingsYoy)}
      ${card(
        709,
        379,
        L.takeRate,
        '',
        '',
        `
          <text x="${L.takeRateX}" y="1254" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.mobilityTakeRate}</text>
          <text x="${L.takeRateX}" y="1287" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.deliveryTakeRate}</text>
        `
      )}
      <text x="85" y="1348" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips',
    tripsYoy: '+17% Y/Y',
    mapcYoy: '+13% Y/Y',
    grossBookings: 'Gross Bookings',
    grossBookingsYoy: '+20% Y/Y fx neutral',
    takeRate: 'Take rate',
    takeRateX: 741,
    takeRateSize: 27,
    mobilityTakeRate: 'Mobility 30.5% (+2.2pp Y/Y)',
    deliveryTakeRate: 'Delivery 18.6% (+0.4pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });

  const annotationsZh = annotations({
    trips: '行程',
    tripsYoy: '同比 +17%',
    mapcYoy: '同比 +13%',
    grossBookings: '总预订额',
    grossBookingsYoy: '同比 +20%（汇率中性）',
    takeRate: '抽成率',
    takeRateX: 737,
    takeRateSize: 25,
    mobilityTakeRate: '出行 30.5%（同比 +2.2 个百分点）',
    deliveryTakeRate: '配送 18.6%（同比 +0.4 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const labelText = {
    en: {
      mobilityYoy: '+26% Y/Y', mobilityName: 'Mobility', mobilityMargin: '26% adjusted margin',
      deliveryYoy: '+18% Y/Y', deliveryName: 'Delivery', deliveryMargin: '18% adjusted margin',
      freightYoy: '+2% Y/Y', freightMargin: '(1%) adjusted margin',
      revenue: 'Revenue', revenueYoy: '+20% Y/Y',
      grossProfit: 'Gross profit', grossMargin: '40% margin', grossYoy: '+0pp Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue',
      operatingProfit: 'Operating profit', operatingMargin: '9% margin', operatingYoy: '+5pp Y/Y',
      operating: 'Operating', expenses: 'expenses',
      other: 'Other', netProfit: 'Net profit', netMargin: '23% margin', netYoy: '+21pp Y/Y',
      tax: 'Tax', interest: 'Interest',
      sm: 'S&M ($1.1B)', smPct: '10% of revenue', smYoy: '(0pp) Y/Y',
      rnd: 'R&D ($0.8B)', rndPct: '7% of revenue', rndYoy: '(2pp) Y/Y',
      operations: 'Operations ($0.7B)', operationsPct: '6% of revenue', operationsYoy: '(1pp) Y/Y',
      ga: 'G&A ($0.6B)', gaPct: '6% of revenue', gaYoy: '(1pp) Y/Y',
      da: 'D&A ($0.2B)', daPct: '2% of revenue', daYoy: '(1pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +26%', mobilityName: '出行', mobilityMargin: '调整后利润率 26%',
      deliveryYoy: '同比 +18%', deliveryName: '配送', deliveryMargin: '调整后利润率 18%',
      freightYoy: '同比 +2%', freightMargin: '调整后利润率 (1%)',
      revenue: '收入', revenueYoy: '同比 +20%',
      grossProfit: '毛利润', grossMargin: '利润率 40%', grossYoy: '同比 +0 个百分点',
      costOf: '收入', revenueWord: '成本',
      operatingProfit: '营业利润', operatingMargin: '利润率 9%', operatingYoy: '同比 +5 个百分点',
      operating: '营业', expenses: '费用',
      other: '其他', netProfit: '净利润', netMargin: '利润率 23%', netYoy: '同比 +21 个百分点',
      tax: '税费', interest: '利息',
      sm: '销售与市场 ($1.1B)', smPct: '占收入 10%', smYoy: '同比 (0 个百分点)',
      rnd: '研发 ($0.8B)', rndPct: '占收入 7%', rndYoy: '同比 (2 个百分点)',
      operations: '运营 ($0.7B)', operationsPct: '占收入 6%', operationsYoy: '同比 (1 个百分点)',
      ga: '管理费用 ($0.6B)', gaPct: '占收入 6%', gaYoy: '同比 (1 个百分点)',
      da: '折旧与摊销 ($0.2B)', daPct: '占收入 2%', daYoy: '同比 (1 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    mobility: { blocks: [
      { x: 404, top: 356, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.mobilityYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 204, top: 590, anchor: 'middle', lineGap: 9, lines: [
        { text: L.mobilityName, size: 41, weight: 800 },
        { text: L.mobilityMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    delivery: { blocks: [
      { x: 400, top: 717, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.deliveryYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 200, top: 880, anchor: 'middle', lineGap: 9, lines: [
        { text: L.deliveryName, size: 41, weight: 800 },
        { text: L.deliveryMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    freight: { blocks: [
      { x: 400, top: 983, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.freightYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 200, top: 1128, anchor: 'middle', lineGap: 9, lines: [
        { text: L.freightMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 870, top: 489, anchor: 'middle', lineGap: 9, lines: [
      { text: L.revenue, size: 42, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1335, top: 318, anchor: 'middle', lineGap: 9, lines: [
      { text: L.grossProfit, size: 38, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
      { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1335, top: 1151, anchor: 'middle', lineGap: 8, lines: [
      { text: L.costOf, size: 36, weight: 800 },
      { text: L.revenueWord, size: 36, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1800, top: 237, anchor: 'middle', lineGap: 9, lines: [
      { text: L.operatingProfit, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
      { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1798, top: 797, anchor: 'middle', lineGap: 8, lines: [
      { text: L.operating, size: 38, weight: 800 },
      { text: L.expenses, size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    other: { blocks: [{ x: 2123, top: 456, anchor: 'middle', lineGap: 10, lines: [
      { text: L.other, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2448, top: 282, anchor: 'middle', lineGap: 8, lines: [
      { text: L.netProfit, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.netMargin, size: 29, weight: 400, color: NOTE },
      { text: L.netYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    tax: { blocks: [{ x: 2447, top: 525, anchor: 'middle', lineGap: 10, lines: [
      { text: L.tax, size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 },
    ] }] },
    interest: { blocks: [{ x: 2457, top: 616, anchor: 'middle', lineGap: 10, lines: [
      { text: L.interest, size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 },
    ] }] },
    sm: { blocks: [{ x: RIGHT_COST_LABEL_X, top: 761, anchor: 'start', lineGap: 10, lines: [
      { text: L.sm, size: 32, weight: 800 }, { text: L.smPct, size: 29, weight: 400, color: NOTE },
      { text: L.smYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: 2362, top: 902, anchor: 'start', lineGap: 10, lines: [
      { text: L.rnd, size: 32, weight: 800 }, { text: L.rndPct, size: 29, weight: 400, color: NOTE },
      { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    operations: { blocks: [{ x: 2314, top: 1036, anchor: 'start', lineGap: 10, lines: [
      { text: L.operations, size: 31, weight: 800 }, { text: L.operationsPct, size: 29, weight: 400, color: NOTE },
      { text: L.operationsYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2364, top: 1166, anchor: 'start', lineGap: 10, lines: [
      { text: L.ga, size: 32, weight: 800 }, { text: L.gaPct, size: 29, weight: 400, color: NOTE },
      { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    da: { blocks: [{ x: 2361, top: 1329, anchor: 'start', lineGap: 10, lines: [
      { text: L.da, size: 32, weight: 800 }, { text: L.daPct, size: 29, weight: 400, color: NOTE },
      { text: L.daYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q3-fy24',
    name: 'Uber - Q3 FY24',
    company: 'Uber',
    meta: {
      title: 'Uber Q3 FY24 Income Statement',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/uber-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 123, titleWeight: 700, titleTextLength: 2025,
      logoWidth: 470, logoHeight: 165, logoY: 262, logoViewBox: '0 0 470 165',
      logoSvg: '<text x="235" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="193" font-weight="500" fill="#000000">Uber</text>',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, labelYOffset: -9, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 35.2,
      nodes: {
        mobility: { x: 365, y: 450, width: 71, height: 224 },
        delivery: { x: 365, y: 809, width: 71, height: 120 },
        freight: { x: 365, y: 1080, width: 71, height: 44 },
        revenue: { x: 832, y: 620, width: 70, height: 391 },
        gross_profit: { x: 1299, y: 494, width: 71, height: 153 },
        cost_of_revenue: { x: 1299, y: 885, width: 71, height: 236 },
        operating_profit: { x: 1774, y: 405, width: 70, height: 35 },
        operating_expenses: { x: 1772, y: 652, width: 70, height: 117 },
        other: { x: 2087, y: 376, width: 70, height: 62 },
        net_profit: { x: 2233, y: 315, width: 71, height: 88 },
        tax: { x: 2233, y: 562, width: 71, height: 3 },
        interest: { x: 2233, y: 646, width: 71, height: 4 },
        sm: { x: 2233, y: 756, width: 71, height: 36 },
        rnd: { x: 2233, y: 918, width: 71, height: 25 },
        operations: { x: 2233, y: 1066, width: 71, height: 20 },
        ga: { x: 2233, y: 1215, width: 71, height: 22 },
        da: { x: 2233, y: 1375, width: 71, height: 5 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 6.4, notes: ['+26% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 3.5, notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.1, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.4, notes: ['40% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.1, notes: ['9% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 1.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.6, notes: ['23% margin', '+21pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 5, type: 'cost', label: 'Operations', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 6, type: 'cost', label: 'G&A', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 7, type: 'cost', label: 'D&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 6.4, width: 224 },
      { source: 'delivery', target: 'revenue', value: 3.5, width: 120 },
      { source: 'freight', target: 'revenue', value: 1.3, width: 44, targetWidth: 47 },
      { source: 'revenue', target: 'gross_profit', value: 4.4, width: 153, sourceWidth: 155 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.8, width: 236 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.1, width: 35, sourceWidth: 36 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.4, width: 117, sourceWidth: 116 },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, width: 25, sourceWidth: 27, targetWidth: 26, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.8, width: 62, targetWidth: 62, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 3, sourceWidth: 4, sourceOrder: 1 },
      { source: 'operating_profit', target: 'interest', value: 0.1, width: 4, sourceWidth: 4, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 1.1, width: 36, sourceWidth: 38, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 25, sourceWidth: 27, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, width: 20, sourceWidth: 24, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.6, width: 22, sourceWidth: 21, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 5, sourceWidth: 7, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2024 财年第三季度',
        meta: { title: 'Uber 2024 财年第三季度利润表', titleTextLength: 1780 },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +26%'] }, delivery: { label: '配送', notes: ['同比 +18%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 +2%'] }, revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 +5 个百分点'] }, operating_expenses: { label: '营业费用' },
          other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 23%', '同比 +21 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sm: { label: '销售与市场' }, rnd: { label: '研发' },
          operations: { label: '运营' }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' },
        },
        layout: { labels: makeLabels(labelText.zh) },
      },
    },
  });
})();

/* ====================================================================
 * Uber - Q3 FY22 income statement ($B)
 * Reconstructed from input/processed/uber-q3-fy22.png as a fixed d3-sankey
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

  const card = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1202" width="${width}" height="148" rx="18" fill="#000000"/>
      <text x="${x + width / 2}" y="1255" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1293" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1328" text-anchor="middle" font-size="23" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = (L) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g data-typography-role="brand">
        <rect x="134" y="417" width="92" height="92" rx="13" fill="#000000"/>
        <text x="180" y="482" text-anchor="middle" font-family="Arial,sans-serif" font-size="39" font-weight="500" fill="#ffffff">Uber</text>

        <text x="47" y="799" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001e24">Uber</text>
        <text x="181" y="799" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#00c444">Eats</text>
        <text x="47" y="1057" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>
      </g>

      ${card(31, 157, L.trips, '1.95B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '124M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$29.1B', L.grossBookingsYoy)}
      ${card(709, 240, L.takeRate, '28.7%', L.takeRateYoy)}
      <text x="85" y="1386" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips',
    tripsYoy: '+19% Y/Y',
    mapcYoy: '+14% Y/Y',
    grossBookings: 'Gross Bookings',
    grossBookingsYoy: '+26% Y/Y',
    takeRate: 'Take rate',
    takeRateYoy: '+8pp Y/Y',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });

  const annotationsZh = annotations({
    trips: '行程',
    tripsYoy: '同比 +19%',
    mapcYoy: '同比 +14%',
    grossBookings: '总预订额',
    grossBookingsYoy: '同比 +26%',
    takeRate: '抽成率',
    takeRateYoy: '同比 +8 个百分点',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const labelText = {
    en: {
      mobilityYoy: '+73% Y/Y',
      mobilityName: 'Mobility',
      mobilityMargin: '23% adjusted margin',
      deliveryYoy: '+24% Y/Y',
      deliveryName: 'Delivery',
      deliveryMargin: '7% adjusted margin',
      freightYoy: '+336% Y/Y',
      freightMargin: '0.1% adjusted margin',
      revenue: 'Revenue',
      revenueYoy: '+72% Y/Y',
      grossProfit: 'Gross profit',
      grossMargin: '38% margin',
      grossYoy: '(12pp) Y/Y',
      costOf: 'Cost of',
      revenueWord: 'revenue',
      operating: 'Operating',
      expenses: 'expenses',
      operatingLoss: 'Operating loss',
      operatingLossMargin: '(6%) margin',
      operatingLossYoy: '+6pp Y/Y',
      operations: 'Operations',
      support: '& Support',
      operationsPct: '7% of revenue',
      operationsYoy: '(2pp) Y/Y',
      sm: 'Sales & marketing',
      smPct: '14% of revenue',
      smYoy: '(10pp) Y/Y',
      rnd: 'R&D',
      rndPct: '9% of revenue',
      rndYoy: '(1pp) Y/Y',
      ga: 'General & Admin',
      gaPct: '11% of revenue',
      gaYoy: '(2pp) Y/Y',
      da: 'Depreciation',
      amortization: '& Amortization',
      daPct: '3% of revenue',
      daYoy: '(2pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +73%',
      mobilityName: '出行',
      mobilityMargin: '调整后利润率 23%',
      deliveryYoy: '同比 +24%',
      deliveryName: '配送',
      deliveryMargin: '调整后利润率 7%',
      freightYoy: '同比 +336%',
      freightMargin: '调整后利润率 0.1%',
      revenue: '收入',
      revenueYoy: '同比 +72%',
      grossProfit: '毛利润',
      grossMargin: '利润率 38%',
      grossYoy: '同比 (12 个百分点)',
      costOf: '收入',
      revenueWord: '成本',
      operating: '运营',
      expenses: '费用',
      operatingLoss: '营业亏损',
      operatingLossMargin: '利润率 (6%)',
      operatingLossYoy: '同比 +6 个百分点',
      operations: '运营',
      support: '与支持',
      operationsPct: '占收入 7%',
      operationsYoy: '同比 (2 个百分点)',
      sm: '销售与市场',
      smPct: '占收入 14%',
      smYoy: '同比 (10 个百分点)',
      rnd: '研发',
      rndPct: '占收入 9%',
      rndYoy: '同比 (1 个百分点)',
      ga: '管理费用',
      gaPct: '占收入 11%',
      gaYoy: '同比 (2 个百分点)',
      da: '折旧',
      amortization: '与摊销',
      daPct: '占收入 3%',
      daYoy: '同比 (2 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    mobility: { blocks: [
      { x: 409, top: 359, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.mobilityYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 180, top: 531, anchor: 'middle', lineGap: 9, lines: [
        { text: L.mobilityName, size: 41, weight: 800 },
        { text: L.mobilityMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    delivery: { blocks: [
      { x: 404, top: 667, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.deliveryYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 176, top: 810, anchor: 'middle', lineGap: 9, lines: [
        { text: L.deliveryName, size: 41, weight: 800 },
        { text: L.deliveryMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    freight: { blocks: [
      { x: 409, top: 938, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.freightYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 177, top: 1082, anchor: 'middle', lineGap: 9, lines: [
        { text: L.freightMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 892, top: 464, anchor: 'start', lineGap: 9, lines: [
      { text: L.revenue, size: 42, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1429, top: 304, anchor: 'middle', lineGap: 9, lines: [
      { text: L.grossProfit, size: 38, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
      { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1435, top: 1108, anchor: 'middle', lineGap: 8, lines: [
      { text: L.costOf, size: 36, weight: 800 },
      { text: L.revenueWord, size: 36, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ] }] },
    operating_expenses: { blocks: [{ x: 1856, top: 441, anchor: 'middle', lineGap: 8, lines: [
      { text: L.operating, size: 38, weight: 800 },
      { text: L.expenses, size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    operating_loss: { blocks: [{ x: 1685, top: 960, anchor: 'middle', lineGap: 9, lines: [
      { text: L.operatingLoss, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.operatingLossMargin, size: 29, weight: 400, color: NOTE },
      { text: L.operatingLossYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    operations: { blocks: [{ x: 2450, top: 331, anchor: 'middle', lineGap: 9, lines: [
      { text: L.operations, size: 32, weight: 800 },
      { text: L.support, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 },
      { text: L.operationsPct, size: 29, weight: 400, color: NOTE },
      { text: L.operationsYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: 2456, top: 556, anchor: 'middle', lineGap: 9, lines: [
      { text: L.sm, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 },
      { text: L.smPct, size: 29, weight: 400, color: NOTE },
      { text: L.smYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: 2450, top: 762, anchor: 'middle', lineGap: 9, lines: [
      { text: L.rnd, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 },
      { text: L.rndPct, size: 29, weight: 400, color: NOTE },
      { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2456, top: 954, anchor: 'middle', lineGap: 9, lines: [
      { text: L.ga, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 },
      { text: L.gaPct, size: 29, weight: 400, color: NOTE },
      { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    da: { blocks: [{ x: 2448, top: 1144, anchor: 'middle', lineGap: 9, lines: [
      { text: L.da, size: 32, weight: 800 },
      { text: L.amortization, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 },
      { text: L.daPct, size: 29, weight: 400, color: NOTE },
      { text: L.daYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q3-fy22',
    name: 'Uber - Q3 FY22',
    company: 'Uber',
    meta: {
      title: 'Uber Q3 FY22 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/uber-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 700,
      titleTextLength: 2031,
      logoWidth: 470,
      logoHeight: 165,
      logoY: 255,
      logoViewBox: '0 0 470 165',
      logoSvg: '<text x="235" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="193" font-weight="500" fill="#000000">Uber</text>',
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
      scale: 45,
      nodes: {
        mobility: { x: 371, y: 440, width: 71, height: 174 },
        delivery: { x: 371, y: 755, width: 71, height: 125 },
        freight: { x: 371, y: 1024, width: 71, height: 77 },
        revenue: { x: 948, y: 609, width: 70, height: 380 },
        gross_profit: { x: 1400, y: 477, width: 72, height: 143 },
        cost_of_revenue: { x: 1405, y: 851, width: 72, height: 235 },
        operating_loss: { x: 1646, y: 910, width: 71, height: 20 },
        operating_expenses: { x: 1819, y: 589, width: 70, height: 165 },
        operations: { x: 2225, y: 346, width: 71, height: 25 },
        sm: { x: 2225, y: 554, width: 71, height: 50 },
        rnd: { x: 2225, y: 766, width: 71, height: 33 },
        ga: { x: 2225, y: 944, width: 71, height: 39 },
        da: { x: 2225, y: 1163, width: 71, height: 9 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 3.8, valueText: '$3.8B', notes: ['+73% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 2.8, valueText: '$2.8B', notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.8, valueText: '$1.8B', notes: ['+336% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.3, valueText: '$8.3B', notes: ['+72% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.2, valueText: '$3.2B', notes: ['38% margin', '(12pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.2, valueText: '($5.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: 'Operating loss', value: -0.5, valueText: '($0.5B)', notes: ['(6%) margin', '+6pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 3.7, valueText: '($3.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 0, type: 'cost', label: ['Operations', '& Support'], value: 0.6, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'Sales & marketing', value: 1.2, valueText: '($1.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'General & Admin', value: 0.9, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 4, type: 'cost', label: ['Depreciation', '& Amortization'], value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 3.8, width: 174, sourceWidth: 174, targetWidth: 174, y0: 527, y1: 696, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 2.8, width: 125, sourceWidth: 125, targetWidth: 127, y0: 817.5, y1: 846.5, targetOrder: 1 },
      { source: 'freight', target: 'revenue', value: 1.8, width: 77, sourceWidth: 77, targetWidth: 79, y0: 1062.5, y1: 949.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.2, width: 143, sourceWidth: 149, targetWidth: 143, y0: 683.5, y1: 548.5, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.2, width: 235, sourceWidth: 231, targetWidth: 235, y0: 873.5, y1: 968.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.2, width: 143, sourceWidth: 143, targetWidth: 145, y0: 548.5, y1: 661.5, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.5, width: 20, sourceWidth: 20, targetWidth: 20, y0: 920, y1: 744, targetOrder: 1 },
      { source: 'operating_expenses', target: 'operations', value: 0.6, width: 25, sourceWidth: 27, targetWidth: 25, y0: 602.5, y1: 358.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 1.2, width: 50, sourceWidth: 54, targetWidth: 50, y0: 643, y1: 579, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 33, sourceWidth: 36, targetWidth: 33, y0: 688, y1: 782.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.9, width: 39, sourceWidth: 39, targetWidth: 39, y0: 725.5, y1: 963.5, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 9, sourceWidth: 9, targetWidth: 9, y0: 749.5, y1: 1167.5, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2022 财年第三季度',
        meta: { title: 'Uber 2022 财年第三季度利润表', titleTextLength: 1780 },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +73%'] },
          delivery: { label: '配送', notes: ['同比 +24%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 +336%'] },
          revenue: { label: '收入', notes: ['同比 +72%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 38%', '同比 (12 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (6%)', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          operations: { label: ['运营', '与支持'] },
          sm: { label: '销售与市场' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
          da: { label: ['折旧', '与摊销'] },
        },
        layout: { labels: makeLabels(labelText.zh) },
      },
    },
  });
})();

/* ====================================================================
 *  Uber - Q1 FY23 income statement ($B)
 *  Reconstructed from input/processed/uber-q1-fy23.png as a fixed d3-sankey
 *  layout with pure SVG/text annotations.
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
      <text x="${x + width / 2}" y="1294" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1328" text-anchor="middle" font-size="23" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = (L) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g data-typography-role="brand">
        <rect x="157" y="415" width="96" height="96" rx="13" fill="#000000"/>
        <text x="205" y="477" text-anchor="middle" font-family="Arial,sans-serif" font-size="33" font-weight="500" fill="#ffffff">Uber</text>

        <text x="69" y="843" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001e24">Uber</text>
        <text x="203" y="843" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#00c444">Eats</text>
        <text x="69" y="1127" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>
      </g>

      ${card(31, 157, L.trips, '2.1B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '130M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$31.4B', L.grossBookingsYoy)}
      ${card(709, 240, L.takeRate, '28.1%', L.takeRateYoy)}
      <text x="85" y="1386" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips',
    tripsYoy: '+24% Y/Y',
    mapcYoy: '+13% Y/Y',
    grossBookings: 'Gross Bookings',
    grossBookingsYoy: '+22% Y/Y fx neutral',
    takeRate: 'Take rate',
    takeRateYoy: '+2.2pp Y/Y',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });

  const annotationsZh = annotations({
    trips: '行程',
    tripsYoy: '同比 +24%',
    mapcYoy: '同比 +13%',
    grossBookings: '总预订额',
    grossBookingsYoy: '同比 +22%（汇率中性）',
    takeRate: '抽成率',
    takeRateYoy: '同比 +2.2 个百分点',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const labelText = {
    en: {
      mobilityYoy: '+72% Y/Y', mobilityName: 'Mobility', mobilityMargin: '24% adjusted margin',
      deliveryYoy: '+23% Y/Y', deliveryName: 'Delivery', deliveryMargin: '9% adjusted margin',
      freightYoy: '(23%) Y/Y', freightMargin: '(2%) adjusted margin',
      revenue: 'Revenue', revenueYoy: '+29% Y/Y',
      grossProfit: 'Gross profit', grossMargin: '40% margin', grossYoy: '(1pp) Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue',
      operating: 'Operating', expenses: 'expenses',
      operatingLossA: 'Operating', operatingLossB: 'loss', operatingMargin: '(3%) margin', operatingYoy: '+4pp Y/Y',
      operationsA: 'Operations', operationsB: '& Support', operationsPct: '7% of revenue', operationsYoy: '(1pp) Y/Y',
      sm: 'Sales & marketing', smPct: '14% of revenue', smYoy: '(4pp) Y/Y',
      rnd: 'R&D', rndPct: '9% of revenue', rndYoy: '+0pp Y/Y',
      ga: 'General & Admin', gaPct: '11% of revenue', gaYoy: '+1pp Y/Y',
      daA: 'Depreciation', daB: '& Amortization', daPct: '2% of revenue', daYoy: '(1pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +72%', mobilityName: '出行', mobilityMargin: '调整后利润率 24%',
      deliveryYoy: '同比 +23%', deliveryName: '配送', deliveryMargin: '调整后利润率 9%',
      freightYoy: '同比 (23%)', freightMargin: '调整后利润率 (2%)',
      revenue: '收入', revenueYoy: '同比 +29%',
      grossProfit: '毛利润', grossMargin: '利润率 40%', grossYoy: '同比 (1 个百分点)',
      costOf: '收入', revenueWord: '成本',
      operating: '营业', expenses: '费用',
      operatingLossA: '营业', operatingLossB: '亏损', operatingMargin: '利润率 (3%)', operatingYoy: '同比 +4 个百分点',
      operationsA: '运营', operationsB: '与支持', operationsPct: '占收入 7%', operationsYoy: '同比 (1 个百分点)',
      sm: '销售与市场', smPct: '占收入 14%', smYoy: '同比 (4 个百分点)',
      rnd: '研发', rndPct: '占收入 9%', rndYoy: '同比 +0 个百分点',
      ga: '管理费用', gaPct: '占收入 11%', gaYoy: '同比 +1 个百分点',
      daA: '折旧', daB: '与摊销', daPct: '占收入 2%', daYoy: '同比 (1 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    mobility: { blocks: [
      { x: 395, top: 326, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: L.mobilityYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 203, top: 532, anchor: 'middle', lineGap: 9, lines: [
        { text: L.mobilityName, size: 41, weight: 800 }, { text: L.mobilityMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    delivery: { blocks: [
      { x: 402, top: 705, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: L.deliveryYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 201, top: 864, anchor: 'middle', lineGap: 9, lines: [
        { text: L.deliveryName, size: 41, weight: 800 }, { text: L.deliveryMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    freight: { blocks: [
      { x: 401, top: 1020, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: L.freightYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 200, top: 1138, anchor: 'middle', lineGap: 9, lines: [
        { text: L.freightMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 798, top: 462, anchor: 'start', lineGap: 9, lines: [
      { text: L.revenue, size: 42, weight: 800 }, { text: '$value', size: 40, weight: 400 },
      { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1334, top: 264, anchor: 'middle', lineGap: 9, lines: [
      { text: L.grossProfit, size: 38, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
      { text: L.grossMargin, size: 29, weight: 400, color: NOTE }, { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1335, top: 1139, anchor: 'middle', lineGap: 8, lines: [
      { text: L.costOf, size: 36, weight: 800 }, { text: L.revenueWord, size: 36, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ] }] },
    operating_expenses: { blocks: [{ x: 1804, top: 450, anchor: 'middle', lineGap: 8, lines: [
      { text: L.operating, size: 38, weight: 800 }, { text: L.expenses, size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    operating_loss: { blocks: [{ x: 1566.5, top: 962, anchor: 'middle', lineGap: 8, lines: [
      { text: L.operatingLossA, size: 38, weight: 800 }, { text: L.operatingLossB, size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 }, { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
      { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    operations_support: { blocks: [{ x: 2447, top: 248, anchor: 'middle', lineGap: 8, lines: [
      { text: L.operationsA, size: 32, weight: 800 }, { text: L.operationsB, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 }, { text: L.operationsPct, size: 29, weight: 400, color: NOTE },
      { text: L.operationsYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: 2459, top: 502, anchor: 'middle', lineGap: 8, lines: [
      { text: L.sm, size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 },
      { text: L.smPct, size: 29, weight: 400, color: NOTE }, { text: L.smYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: 2447, top: 719, anchor: 'middle', lineGap: 8, lines: [
      { text: L.rnd, size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 },
      { text: L.rndPct, size: 29, weight: 400, color: NOTE }, { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2458, top: 969, anchor: 'middle', lineGap: 8, lines: [
      { text: L.ga, size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 },
      { text: L.gaPct, size: 29, weight: 400, color: NOTE }, { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    da: { blocks: [{ x: 2457, top: 1184, anchor: 'middle', lineGap: 8, lines: [
      { text: L.daA, size: 32, weight: 800 }, { text: L.daB, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 }, { text: L.daPct, size: 29, weight: 400, color: NOTE },
      { text: L.daYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q1-fy23',
    name: 'Uber - Q1 FY23',
    company: 'Uber',
    meta: {
      title: 'Uber Q1 FY23 Income Statement', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/uber-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 123, titleWeight: 700, titleTextLength: 2025,
      logoWidth: 470, logoHeight: 165, logoY: 242, logoViewBox: '0 0 470 165',
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
      scale: 46.5,
      nodes: {
        mobility: { x: 367, y: 408, width: 71, height: 201 },
        delivery: { x: 367, y: 788, width: 71, height: 143 },
        freight: { x: 367, y: 1101, width: 71, height: 64 },
        revenue: { x: 832, y: 599, width: 70, height: 412 },
        gross_profit: { x: 1298, y: 441, width: 72, height: 165 },
        cost_of_revenue: { x: 1301, y: 875, width: 71, height: 245 },
        operating_loss: { x: 1531, y: 933, width: 71, height: 10 },
        operating_expenses: { x: 1771, y: 596, width: 70, height: 177 },
        operations_support: { x: 2235, y: 268, width: 71, height: 29 },
        sm: { x: 2235, y: 484, width: 71, height: 57 },
        rnd: { x: 2235, y: 738, width: 71, height: 34 },
        ga: { x: 2235, y: 970, width: 71, height: 42 },
        da: { x: 2235, y: 1222, width: 71, height: 8 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 4.3, notes: ['+72% Y/Y', '24% adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 3.1, notes: ['+23% Y/Y', '9% adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.4, notes: ['(23%) Y/Y', '(2%) adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.8, notes: ['+29% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.6, notes: ['40% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.3, valueText: '($0.3B)', notes: ['(3%) margin', '+4pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 3.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations_support', col: 5, order: 0, type: 'cost', label: 'Operations & Support', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'Sales & marketing', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'General & Admin', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 4, type: 'cost', label: 'Depreciation & Amortization', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    nonNodeMetrics: [{ id: 'tax', representation: 'data-only' }],
    links: [
      { source: 'mobility', target: 'revenue', value: 4.3, sourceWidth: 201, targetWidth: 202, y0: 508.5, y1: 700, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 3.1, sourceWidth: 143, targetWidth: 144, y0: 859.5, y1: 873, targetOrder: 1 },
      { source: 'freight', target: 'revenue', value: 1.4, sourceWidth: 64, targetWidth: 66, y0: 1133, y1: 978, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.6, sourceWidth: 168, targetWidth: 165, y0: 683, y1: 523.5, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.3, sourceWidth: 244, targetWidth: 245, y0: 889, y1: 997.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.6, sourceWidth: 165, targetWidth: 167, y0: 523.5, y1: 679.5, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.3, sourceWidth: 10, targetWidth: 10, y0: 938, y1: 768, targetOrder: 1, curve: { x0: 1602, x1: 1771, c1x: 1650, c1y: 938, c2x: 1715, c2y: 768 } },
      { source: 'operating_expenses', target: 'operations_support', value: 0.6, sourceWidth: 30, targetWidth: 29, y0: 611, y1: 282.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 1.3, sourceWidth: 58, targetWidth: 57, y0: 655, y1: 512.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 37, targetWidth: 34, y0: 702.5, y1: 755, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.9, sourceWidth: 44, targetWidth: 42, y0: 743, y1: 991, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 8, targetWidth: 8, y0: 769, y1: 1226, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2023 财年第一季度',
        meta: { title: 'Uber 2023 财年第一季度利润表', titleTextLength: 1780 },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +72%', '调整后利润率 24%'] },
          delivery: { label: '配送', notes: ['同比 +23%', '调整后利润率 9%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 (23%)', '调整后利润率 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +29%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (3%)', '同比 +4 个百分点'] },
          operating_expenses: { label: '营业费用' },
          operations_support: { label: '运营与支持' }, sm: { label: '销售与市场' }, rnd: { label: '研发' },
          ga: { label: '管理费用' }, da: { label: '折旧与摊销' },
        },
        nonNodeMetrics: { tax: { label: '税费' } },
        layout: { labels: makeLabels(labelText.zh) },
      },
    },
  });
})();

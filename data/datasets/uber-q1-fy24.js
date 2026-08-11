/* ====================================================================
 *  Uber - Q1 FY24 income statement ($B)
 *  Reconstructed from input/processed/uber-q1-fy24.png as a fixed d3-sankey
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
      <g data-typography-role="brand">
        <rect x="147" y="445" width="111" height="111" rx="15" fill="#000000"/>
        <text x="202" y="516" text-anchor="middle" font-family="Arial,sans-serif" font-size="39" font-weight="500" fill="#ffffff">Uber</text>

        <text x="75" y="855" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001e24">Uber</text>
        <text x="209" y="855" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#00c444">Eats</text>
        <text x="74" y="1112" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>
      </g>

      ${card(31, 157, L.trips, '2.6B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '149M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$37.7B', L.grossBookingsYoy)}
      ${card(
        709,
        379,
        L.takeRate,
        '',
        '',
        `
          <text x="${L.takeRateX}" y="1293" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.mobilityTakeRate}</text>
          <text x="${L.takeRateX}" y="1326" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.deliveryTakeRate}</text>
        `
      )}
      <text x="86" y="1393" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips',
    tripsYoy: '+21% Y/Y',
    mapcYoy: '+15% Y/Y',
    grossBookings: 'Gross Bookings',
    grossBookingsYoy: '+20% Y/Y',
    takeRate: 'Take rate',
    takeRateX: 741,
    takeRateSize: 27,
    mobilityTakeRate: 'Mobility 30.2% (+1.3pp Y/Y)',
    deliveryTakeRate: 'Delivery 18.2% (-2.4pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });

  const annotationsZh = annotations({
    trips: '行程',
    tripsYoy: '同比 +21%',
    mapcYoy: '同比 +15%',
    grossBookings: '总预订额',
    grossBookingsYoy: '同比 +20%',
    takeRate: '抽成率',
    takeRateX: 730,
    takeRateSize: 23,
    mobilityTakeRate: '出行 30.2%（同比 +1.3pp）',
    deliveryTakeRate: '配送 18.2%（同比 -2.4pp）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const labelText = {
    en: {
      mobilityYoy: '+30% Y/Y', mobilityName: 'Mobility', mobilityMargin: '26% adjusted margin',
      deliveryYoy: '+4% Y/Y', deliveryName: 'Delivery', deliveryMargin: '16% adjusted margin',
      freightYoy: '(8%) Y/Y', freightMargin: '(2%) adjusted margin',
      revenue: 'Revenue', revenueYoy: '+15% Y/Y',
      grossProfit: 'Gross profit', grossMargin: '39% margin', grossYoy: '(1pp) Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue',
      operatingProfit: 'Operating profit', operatingMargin: '2% margin', operatingYoy: '+5pp Y/Y',
      operating: 'Operating', expenses: 'expenses', netLoss: 'Net loss',
      equity1: 'Equity', equity2: 'investments', equity3: '& Other',
      ga: 'G&A ($1.2B)', gaPct: '12% of revenue', gaYoy: '+1pp Y/Y',
      sm: 'S&M ($0.9B)', smPct: '9% of revenue', smYoy: '(5pp) Y/Y',
      rnd: 'R&D ($0.8B)', rndPct: '8% of revenue', rndYoy: '(1pp) Y/Y',
      operations: 'Operations ($0.7B)', operationsPct: '7% of revenue', operationsYoy: '(0pp) Y/Y',
      da: 'D&A ($0.2B)', daPct: '2% of revenue', daYoy: '(0pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +30%', mobilityName: '出行', mobilityMargin: '调整后利润率 26%',
      deliveryYoy: '同比 +4%', deliveryName: '配送', deliveryMargin: '调整后利润率 16%',
      freightYoy: '同比 (8%)', freightMargin: '调整后利润率 (2%)',
      revenue: '收入', revenueYoy: '同比 +15%',
      grossProfit: '毛利润', grossMargin: '利润率 39%', grossYoy: '同比 (1 个百分点)',
      costOf: '收入', revenueWord: '成本',
      operatingProfit: '营业利润', operatingMargin: '利润率 2%', operatingYoy: '同比 +5 个百分点',
      operating: '营业', expenses: '费用', netLoss: '净亏损',
      equity1: '股权投资', equity2: '及其他', equity3: '',
      ga: '管理费用 ($1.2B)', gaPct: '占收入 12%', gaYoy: '同比 +1 个百分点',
      sm: '销售与市场 ($0.9B)', smPct: '占收入 9%', smYoy: '同比 (5 个百分点)',
      rnd: '研发 ($0.8B)', rndPct: '占收入 8%', rndYoy: '同比 (1 个百分点)',
      operations: '运营 ($0.7B)', operationsPct: '占收入 7%', operationsYoy: '同比 (0 个百分点)',
      da: '折旧与摊销 ($0.2B)', daPct: '占收入 2%', daYoy: '同比 (0 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    mobility: { blocks: [
      { x: 404, top: 353, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.mobilityYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 204, top: 586, anchor: 'middle', lineGap: 9, lines: [
        { text: L.mobilityName, size: 41, weight: 800 },
        { text: L.mobilityMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    delivery: { blocks: [
      { x: 399, top: 726, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.deliveryYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 200, top: 876, anchor: 'middle', lineGap: 9, lines: [
        { text: L.deliveryName, size: 41, weight: 800 },
        { text: L.deliveryMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    freight: { blocks: [
      { x: 399, top: 999, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.freightYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 200, top: 1128, anchor: 'middle', lines: [
        { text: L.freightMargin, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 855, top: 503, anchor: 'middle', lineGap: 9, lines: [
      { text: L.revenue, size: 42, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1334, top: 330, anchor: 'middle', lineGap: 9, lines: [
      { text: L.grossProfit, size: 38, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
      { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1335, top: 1160, anchor: 'middle', lineGap: 8, lines: [
      { text: L.costOf, size: 36, weight: 800 },
      { text: L.revenueWord, size: 36, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1803, top: 245, anchor: 'middle', lineGap: 9, lines: [
      { text: L.operatingProfit, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
      { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1816, top: 795, anchor: 'middle', lineGap: 8, lines: [
      { text: L.operating, size: 38, weight: 800 },
      { text: L.expenses, size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    net_loss: { blocks: [{ x: 2146, top: 330, anchor: 'middle', lineGap: 7, lines: [
      { text: L.netLoss, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
    ] }] },
    equity_investments_and_other: { blocks: [{ x: 2459, top: 462, anchor: 'middle', lineGap: 8, lines: [
      { text: L.equity1, size: 32, weight: 800 },
      { text: L.equity2, size: 32, weight: 800 },
      ...(L.equity3 ? [{ text: L.equity3, size: 32, weight: 800 }] : []),
      { text: '$value', size: 32, weight: 400 },
    ] }] },
    ga: { blocks: [{ x: 2352, top: 700, anchor: 'start', lineGap: 10, lines: [
      { text: L.ga, size: 32, weight: 800 }, { text: L.gaPct, size: 29, color: NOTE }, { text: L.gaYoy, size: 29, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: 2356, top: 854, anchor: 'start', lineGap: 10, lines: [
      { text: L.sm, size: 32, weight: 800 }, { text: L.smPct, size: 29, color: NOTE }, { text: L.smYoy, size: 29, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: 2361, top: 1000, anchor: 'start', lineGap: 10, lines: [
      { text: L.rnd, size: 32, weight: 800 }, { text: L.rndPct, size: 29, color: NOTE }, { text: L.rndYoy, size: 29, color: NOTE },
    ] }] },
    operations: { blocks: [{ x: 2315, top: 1151, anchor: 'start', lineGap: 10, lines: [
      { text: L.operations, size: 31, weight: 800 }, { text: L.operationsPct, size: 29, color: NOTE }, { text: L.operationsYoy, size: 29, color: NOTE },
    ] }] },
    da: { blocks: [{ x: 2344, top: 1304, anchor: 'start', lineGap: 10, lines: [
      { text: L.da, size: 32, weight: 800 }, { text: L.daPct, size: 29, color: NOTE }, { text: L.daYoy, size: 29, color: NOTE },
    ] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q1-fy24',
    name: 'Uber - Q1 FY24',
    company: 'Uber',
    meta: {
      title: 'Uber Q1 FY24 Income Statement',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/uber-q1-fy24.png', width: 2667, height: 1500 },
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
      nodes: {
        mobility: { x: 364, y: 438, width: 71, height: 219 },
        delivery: { x: 364, y: 810, width: 71, height: 124 },
        freight: { x: 364, y: 1083, width: 71, height: 48 },
        revenue: { x: 831, y: 637, width: 70, height: 396 },
        gross_profit: { x: 1300, y: 502, width: 72, height: 153 },
        cost_of_revenue: { x: 1305, y: 888, width: 72, height: 241 },
        operating_profit: { x: 1768, y: 414, width: 70, height: 5 },
        operating_expenses: { x: 1766, y: 618, width: 70, height: 146 },
        net_loss: { x: 2110, y: 429, width: 71, height: 24 },
        equity_investments_and_other: { x: 2232, y: 494, width: 71, height: 30 },
        ga: { x: 2232, y: 685, width: 71, height: 45 },
        sm: { x: 2232, y: 843, width: 71, height: 34 },
        rnd: { x: 2232, y: 991, width: 71, height: 30 },
        operations: { x: 2232, y: 1146, width: 71, height: 25 },
        da: { x: 2232, y: 1302, width: 71, height: 5 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 5.6, notes: ['+30% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 3.2, notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['(8%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 10.1, notes: ['+15% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.0, valueText: '$4.0B', notes: ['39% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.2, valueText: '($6.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.2, notes: ['2% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.8, valueText: '($3.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 4, order: 0, type: 'cost', label: 'Net loss', value: -0.7, valueText: '($0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'equity_investments_and_other', col: 5, order: 0, type: 'cost', label: 'Equity investments & Other', value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 4, type: 'cost', label: 'Operations', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 5, type: 'cost', label: 'D&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 5.6, sourceWidth: 219, targetWidth: 219, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 3.2, sourceWidth: 124, targetWidth: 125, targetOrder: 1 },
      { source: 'freight', target: 'revenue', value: 1.3, sourceWidth: 48, targetWidth: 52, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.0, sourceWidth: 154, targetWidth: 153, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.2, sourceWidth: 242, targetWidth: 241, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.2, sourceWidth: 5, targetWidth: 5, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.8, sourceWidth: 148, targetWidth: 146, sourceOrder: 1 },
      { source: 'net_loss', target: 'equity_investments_and_other', value: 0.7, sourceWidth: 24, targetWidth: 24, targetOrder: 0 },
      { source: 'operating_profit', target: 'equity_investments_and_other', value: 0.2, sourceWidth: 5, targetWidth: 5, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.2, sourceWidth: 46, targetWidth: 45, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.9, sourceWidth: 35, targetWidth: 34, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 31, targetWidth: 30, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, sourceWidth: 27, targetWidth: 25, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 7, targetWidth: 5, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2024 财年第一季度',
        meta: { title: 'Uber 2024 财年第一季度利润表', titleTextLength: 1780 },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +30%'] }, delivery: { label: '配送', notes: ['同比 +4%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 (8%)'] }, revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 +5 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] }, net_loss: { label: '净亏损' },
          equity_investments_and_other: { label: '股权投资及其他' }, ga: { label: '管理费用' }, sm: { label: '销售与市场' },
          rnd: { label: '研发' }, operations: { label: '运营' }, da: { label: '折旧与摊销' },
        },
        layout: { labels: makeLabels(labelText.zh) },
      },
    },
  });
})();

/* ====================================================================
 *  Uber - Q3 FY25 income statement ($B)
 *  Reconstructed from input/processed/uber-q3-fy25.png as a fixed d3-sankey
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
  const RIGHT_COST_LABEL_X = 2350;

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

      ${card(31, 157, L.trips, '3.5B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '189M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$49.7B', L.grossBookingsYoy)}
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
    tripsYoy: '+22% Y/Y',
    mapcYoy: '+17% Y/Y',
    grossBookings: 'Gross Bookings',
    grossBookingsYoy: '+21% Y/Y',
    takeRate: 'Take rate',
    takeRateX: 741,
    takeRateSize: 27,
    mobilityTakeRate: 'Mobility 30.6% (+0.1pp Y/Y)',
    deliveryTakeRate: 'Delivery 19.2% (+0.6pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });

  const annotationsZh = annotations({
    trips: '行程',
    tripsYoy: '同比 +22%',
    mapcYoy: '同比 +17%',
    grossBookings: '总预订额',
    grossBookingsYoy: '同比 +21%',
    takeRate: '抽成率',
    takeRateX: 737,
    takeRateSize: 25,
    mobilityTakeRate: '出行 30.6%（同比 +0.1 个百分点）',
    deliveryTakeRate: '配送 19.2%（同比 +0.6 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const labelText = {
    en: {
      mobilityYoy: '+20% Y/Y',
      mobilityName: 'Mobility',
      mobilityMargin: '27% adjusted margin',
      mobilityMarginYoy: '+0pp Y/Y',
      deliveryYoy: '+29% Y/Y',
      deliveryName: 'Delivery',
      deliveryMargin: '21% adjusted margin',
      deliveryMarginYoy: '+2pp Y/Y',
      freightYoy: '(0%) Y/Y',
      freightMargin: '(2%) adjusted margin',
      freightMarginYoy: '(0pp) Y/Y',
      revenue: 'Revenue',
      revenueYoy: '+20% Y/Y',
      gross: 'Gross',
      profit: 'profit',
      grossMargin: '40% margin',
      grossYoy: '+0pp Y/Y',
      costOf: 'Cost of',
      revenueWord: 'revenue',
      operating: 'Operating',
      operatingProfit: 'profit',
      operatingMargin: '8% margin',
      operatingYoy: '(1pp) Y/Y',
      taxBenefitOther: 'Tax benefit & Other',
      operating: 'Operating',
      expenses: 'expenses',
      net: 'Net',
      netProfit: 'profit',
      interest: 'Interest',
      sm: 'S&M ($1.3B)',
      smPct: '10% of revenue',
      smYoy: '(0pp) Y/Y',
      ga: 'G&A ($1.2B)',
      gaPct: '9% of revenue',
      gaYoy: '+3pp Y/Y',
      rnd: 'R&D ($0.9B)',
      rndPct: '7% of revenue',
      rndYoy: '(1pp) Y/Y',
      operations: 'Operations ($0.7B)',
      operationsPct: '5% of revenue',
      operationsYoy: '(1pp) Y/Y',
      da: 'D&A ($0.2B)',
      daPct: '1% of revenue',
      daYoy: '(0pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +20%',
      mobilityName: '出行',
      mobilityMargin: '调整后利润率 27%',
      mobilityMarginYoy: '同比 +0 个百分点',
      deliveryYoy: '同比 +29%',
      deliveryName: '配送',
      deliveryMargin: '调整后利润率 21%',
      deliveryMarginYoy: '同比 +2 个百分点',
      freightYoy: '同比 (0%)',
      freightMargin: '调整后利润率 (2%)',
      freightMarginYoy: '同比 (0 个百分点)',
      revenue: '收入',
      revenueYoy: '同比 +20%',
      gross: '毛',
      profit: '利润',
      grossMargin: '利润率 40%',
      grossYoy: '同比 +0 个百分点',
      costOf: '收入',
      revenueWord: '成本',
      operating: '营业',
      operatingProfit: '利润',
      operatingMargin: '利润率 8%',
      operatingYoy: '同比 (1 个百分点)',
      taxBenefitOther: '税收收益及其他',
      operating: '运营',
      expenses: '费用',
      net: '净',
      netProfit: '利润',
      interest: '利息',
      sm: '销售与市场 ($1.3B)',
      smPct: '占收入 10%',
      smYoy: '同比 (0 个百分点)',
      ga: '管理费用 ($1.2B)',
      gaPct: '占收入 9%',
      gaYoy: '同比 +3 个百分点',
      rnd: '研发 ($0.9B)',
      rndPct: '占收入 7%',
      rndYoy: '同比 (1 个百分点)',
      operations: '运营 ($0.7B)',
      operationsPct: '占收入 5%',
      operationsYoy: '同比 (1 个百分点)',
      da: '折旧与摊销 ($0.2B)',
      daPct: '占收入 1%',
      daYoy: '同比 (0 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    mobility: { blocks: [
      { x: 397, top: 356, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.mobilityYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 204, top: 512, anchor: 'middle', lineGap: 9, lines: [
        { text: L.mobilityName, size: 41, weight: 800 },
        { text: L.mobilityMargin, size: 29, weight: 400, color: NOTE },
        { text: L.mobilityMarginYoy, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    delivery: { blocks: [
      { x: 400, top: 725, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.deliveryYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 197, top: 820, anchor: 'middle', lineGap: 9, lines: [
        { text: L.deliveryName, size: 41, weight: 800 },
        { text: L.deliveryMargin, size: 29, weight: 400, color: NOTE },
        { text: L.deliveryMarginYoy, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    freight: { blocks: [
      { x: 397, top: 993, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: L.freightYoy, size: 29, weight: 400, color: NOTE },
      ] },
      { x: 201, top: 1082, anchor: 'middle', lineGap: 9, lines: [
        { text: L.freightMargin, size: 29, weight: 400, color: NOTE },
        { text: L.freightMarginYoy, size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 775, top: 511, anchor: 'start', lineGap: 9, lines: [
      { text: L.revenue, size: 42, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1330, top: 361, anchor: 'middle', lineGap: 9, lines: [
      { text: L.gross, size: 38, weight: 800 },
      { text: L.profit, size: 38, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
      { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1332, top: 1118, anchor: 'middle', lineGap: 8, lines: [
      { text: L.costOf, size: 36, weight: 800 },
      { text: L.revenueWord, size: 36, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1801, top: 295, anchor: 'middle', lineGap: 9, lines: [
      { text: L.operating, size: 38, weight: 800 },
      { text: L.operatingProfit, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
      { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1798, top: 852, anchor: 'middle', lineGap: 8, lines: [
      { text: L.operating, size: 38, weight: 800 },
      { text: L.expenses, size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    tax_benefit_and_other: { blocks: [{ x: 2110, top: 213, anchor: 'middle', lineGap: 16, lines: [
      { text: L.taxBenefitOther, size: 32, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 33, weight: 400, color: GREEN_LABEL },
    ] }] },
    net_profit: { blocks: [{ x: 2398, top: 341, anchor: 'start', lineGap: 7, lines: [
      { text: L.net, size: 38, weight: 800 },
      { text: L.netProfit, size: 38, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
    ] }] },
    interest: { blocks: [{ x: 2396, top: 568, anchor: 'start', lineGap: 10, lines: [
      { text: L.interest, size: 32, weight: 800 },
      { text: '$value', size: 32, weight: 400 },
    ] }] },
    sm: { blocks: [{ x: RIGHT_COST_LABEL_X, top: 686, anchor: 'start', lineGap: 10, lines: [
      { text: L.sm, size: 32, weight: 800 },
      { text: L.smPct, size: 29, weight: 400, color: NOTE },
      { text: L.smYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2359, top: 837, anchor: 'start', lineGap: 10, lines: [
      { text: L.ga, size: 32, weight: 800 },
      { text: L.gaPct, size: 29, weight: 400, color: NOTE },
      { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    rnd: { blocks: [{ x: 2364, top: 986, anchor: 'start', lineGap: 10, lines: [
      { text: L.rnd, size: 32, weight: 800 },
      { text: L.rndPct, size: 29, weight: 400, color: NOTE },
      { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    operations: { blocks: [{ x: 2324, top: 1126, anchor: 'start', lineGap: 10, lines: [
      { text: L.operations, size: 31, weight: 800 },
      { text: L.operationsPct, size: 29, weight: 400, color: NOTE },
      { text: L.operationsYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
    da: { blocks: [{ x: 2358, top: 1268, anchor: 'start', lineGap: 10, lines: [
      { text: L.da, size: 32, weight: 800 },
      { text: L.daPct, size: 29, weight: 400, color: NOTE },
      { text: L.daYoy, size: 29, weight: 400, color: NOTE },
    ] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q3-fy25',
    name: 'Uber - Q3 FY25',
    company: 'Uber',
    meta: {
      title: 'Uber Q3 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/uber-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 700,
      titleTextLength: 2025,
      logoWidth: 470,
      logoHeight: 165,
      logoY: 262,
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
      scale: 26.6,
      nodes: {
        mobility: { x: 364, y: 441, width: 71, height: 204 },
        delivery: { x: 364, y: 805, width: 71, height: 118 },
        freight: { x: 364, y: 1074, width: 71, height: 34 },
        revenue: { x: 831, y: 657, width: 70, height: 359 },
        gross_profit: { x: 1298, y: 585, width: 71, height: 142 },
        cost_of_revenue: { x: 1298, y: 878, width: 71, height: 215 },
        operating_profit: { x: 1766, y: 520, width: 70, height: 28 },
        operating_expenses: { x: 1766, y: 708, width: 70, height: 111 },
        tax_benefit_and_other: { x: 2078, y: 299, width: 70, height: 150 },
        net_profit: { x: 2232, y: 316, width: 71, height: 177 },
        interest: { x: 2232, y: 603, width: 71, height: 1 },
        sm: { x: 2232, y: 707, width: 71, height: 32 },
        ga: { x: 2232, y: 863, width: 71, height: 29 },
        rnd: { x: 2232, y: 1008, width: 71, height: 21 },
        operations: { x: 2232, y: 1149, width: 71, height: 18 },
        da: { x: 2232, y: 1300, width: 71, height: 2 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 7.7, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 4.5, notes: ['+29% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 13.5, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.4, notes: ['40% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.1, notes: ['8% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit_and_other', col: 4, order: 0, type: 'profit', label: 'Tax benefit & Other', value: 5.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: 'Net profit', value: 6.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 3, type: 'cost', label: 'S&M', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 4, order: 6, type: 'cost', label: 'Operations', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 7, type: 'cost', label: 'D&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 7.7, width: 204 },
      { source: 'delivery', target: 'revenue', value: 4.5, width: 118 },
      { source: 'freight', target: 'revenue', value: 1.3, width: 34, targetWidth: 37 },
      { source: 'revenue', target: 'gross_profit', value: 5.4, width: 142 },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.1, width: 215, sourceWidth: 217 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.1, width: 28 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.2, width: 111, sourceWidth: 114 },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, width: 28, sourceWidth: 27, sourceOrder: 0, targetOrder: 1 },
      { source: 'tax_benefit_and_other', target: 'net_profit', value: 5.7, width: 150, targetWidth: 149, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.1, width: 1, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 1.3, width: 32, sourceWidth: 34, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 1.2, width: 29, sourceWidth: 32, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, width: 21, sourceWidth: 24, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, width: 18, sourceWidth: 19, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 2, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2025 财年第三季度',
        meta: { title: 'Uber 2025 财年第三季度利润表', titleTextLength: 1780 },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +20%'] },
          delivery: { label: '配送', notes: ['同比 +29%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 (0%)'] },
          revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          tax_benefit_and_other: { label: '税收收益及其他' },
          net_profit: { label: '净利润' },
          interest: { label: '利息' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
          rnd: { label: '研发' },
          operations: { label: '运营' },
          da: { label: '折旧与摊销' },
        },
        layout: { labels: makeLabels(labelText.zh) },
      },
    },
  });
})();

/* Uber - Q1 FY25 income statement ($B), fixed d3-sankey reconstruction. */
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
        <rect x="147" y="365" width="111" height="107" rx="15" fill="#000000"/>
        <text x="202" y="436" text-anchor="middle" font-family="Arial,sans-serif" font-size="39" font-weight="500" fill="#ffffff">Uber</text>
        <text x="68" y="804" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001e24">Uber</text>
        <text x="202" y="804" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#00c444">Eats</text>
        <text x="68" y="1072" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>
      </g>
      ${card(31, 157, L.trips, '3.0B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '170M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$42.8B', L.grossBookingsYoy)}
      ${card(709, 379, L.takeRate, '', '', `
        <text x="${L.takeRateX}" y="1254" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.mobilityTakeRate}</text>
        <text x="${L.takeRateX}" y="1287" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.deliveryTakeRate}</text>
      `)}
      <text x="85" y="1348" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips', tripsYoy: '+18% Y/Y', mapcYoy: '+14% Y/Y',
    grossBookings: 'Gross Bookings', grossBookingsYoy: '+18% Y/Y fx neutral',
    takeRate: 'Take rate', takeRateX: 741, takeRateSize: 27,
    mobilityTakeRate: 'Mobility 30.7% (+0.5pp Y/Y)',
    deliveryTakeRate: 'Delivery 18.5% (+0.4pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });
  const annotationsZh = annotations({
    trips: '行程', tripsYoy: '同比 +18%', mapcYoy: '同比 +14%',
    grossBookings: '总预订额', grossBookingsYoy: '同比 +18%（汇率中性）',
    takeRate: '抽成率', takeRateX: 737, takeRateSize: 25,
    mobilityTakeRate: '出行 30.7%（同比 +0.5 个百分点）',
    deliveryTakeRate: '配送 18.5%（同比 +0.4 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const labelText = {
    en: {
      mobilityYoy: '+15% Y/Y', mobilityName: 'Mobility', mobilityMargin: '27% adjusted margin', mobilityMarginYoy: '+1pp Y/Y',
      deliveryYoy: '+18% Y/Y', deliveryName: 'Delivery', deliveryMargin: '20% adjusted margin', deliveryMarginYoy: '+4pp Y/Y',
      freightYoy: '(2%) Y/Y', freightMargin: '(1%) adjusted margin', freightMarginYoy: '+1pp Y/Y',
      revenue: 'Revenue', revenueYoy: '+14% Y/Y', gross: 'Gross profit', grossMargin: '40% margin', grossYoy: '+1pp Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue', operatingProfit: 'Operating profit', operatingMargin: '11% margin', operatingYoy: '+9pp Y/Y',
      operating: 'Operating', expenses: 'expenses', taxBenefit: 'Tax benefit', other: 'Other', netProfit: 'Net profit', interest: 'Interest',
      sm: 'S&M ($1.1B)', smPct: '9% of revenue', smYoy: '+1pp Y/Y',
      rnd: 'R&D ($0.8B)', rndPct: '7% of revenue', rndYoy: '(2pp) Y/Y',
      ga: 'G&A ($0.7B)', gaPct: '6% of revenue', gaYoy: '(6pp) Y/Y',
      operations: 'Operations ($0.7B)', operationsPct: '6% of revenue', operationsYoy: '(1pp) Y/Y',
      da: 'D&A ($0.2B)', daPct: '1% of revenue', daYoy: '(0pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +15%', mobilityName: '出行', mobilityMargin: '调整后利润率 27%', mobilityMarginYoy: '同比 +1 个百分点',
      deliveryYoy: '同比 +18%', deliveryName: '配送', deliveryMargin: '调整后利润率 20%', deliveryMarginYoy: '同比 +4 个百分点',
      freightYoy: '同比 (2%)', freightMargin: '调整后利润率 (1%)', freightMarginYoy: '同比 +1 个百分点',
      revenue: '收入', revenueYoy: '同比 +14%', gross: '毛利润', grossMargin: '利润率 40%', grossYoy: '同比 +1 个百分点',
      costOf: '收入', revenueWord: '成本', operatingProfit: '营业利润', operatingMargin: '利润率 11%', operatingYoy: '同比 +9 个百分点',
      operating: '运营', expenses: '费用', taxBenefit: '税收收益', other: '其他', netProfit: '净利润', interest: '利息',
      sm: '销售与市场 ($1.1B)', smPct: '占收入 9%', smYoy: '同比 +1 个百分点',
      rnd: '研发 ($0.8B)', rndPct: '占收入 7%', rndYoy: '同比 (2 个百分点)',
      ga: '管理费用 ($0.7B)', gaPct: '占收入 6%', gaYoy: '同比 (6 个百分点)',
      operations: '运营 ($0.7B)', operationsPct: '占收入 6%', operationsYoy: '同比 (1 个百分点)',
      da: '折旧与摊销 ($0.2B)', daPct: '占收入 1%', daYoy: '同比 (0 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    mobility: { blocks: [
      { x: 401, top: 331, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: L.mobilityYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 204, top: 503, anchor: 'middle', lineGap: 9, lines: [{ text: L.mobilityName, size: 41, weight: 800 }, { text: L.mobilityMargin, size: 29, weight: 400, color: NOTE }, { text: L.mobilityMarginYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    delivery: { blocks: [
      { x: 402, top: 694, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: L.deliveryYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 200, top: 826, anchor: 'middle', lineGap: 9, lines: [{ text: L.deliveryName, size: 41, weight: 800 }, { text: L.deliveryMargin, size: 29, weight: 400, color: NOTE }, { text: L.deliveryMarginYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    freight: { blocks: [
      { x: 401, top: 961, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: L.freightYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 1093, anchor: 'middle', lineGap: 9, lines: [{ text: L.freightMargin, size: 29, weight: 400, color: NOTE }, { text: L.freightMarginYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 778, top: 480, anchor: 'start', lineGap: 9, lines: [{ text: L.revenue, size: 42, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: L.revenueYoy, size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1334, top: 341, anchor: 'middle', lineGap: 9, lines: [{ text: L.gross, size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: L.grossMargin, size: 29, weight: 400, color: NOTE }, { text: L.grossYoy, size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1332, top: 1122, anchor: 'middle', lineGap: 8, lines: [{ text: L.costOf, size: 36, weight: 800 }, { text: L.revenueWord, size: 36, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1809, top: 240, anchor: 'middle', lineGap: 9, lines: [{ text: L.operatingProfit, size: 38, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: L.operatingMargin, size: 29, weight: 400, color: NOTE }, { text: L.operatingYoy, size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1801, top: 797, anchor: 'middle', lineGap: 8, lines: [{ text: L.operating, size: 38, weight: 800 }, { text: L.expenses, size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
    tax_benefit: { blocks: [{ x: 2132, top: 215, anchor: 'middle', lineGap: 16, lines: [{ text: L.taxBenefit, size: 32, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 33, weight: 400, color: GREEN_LABEL }] }] },
    other: { blocks: [{ x: 2155, top: 451, anchor: 'middle', lineGap: 10, lines: [{ text: L.other, size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2348, top: 318, anchor: 'start', lineGap: 10, lines: [{ text: L.netProfit, size: 38, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
    interest: { blocks: [{ x: 2387, top: 566, anchor: 'start', lineGap: 10, lines: [{ text: L.interest, size: 32, weight: 800 }, { text: '$value', size: 32, weight: 400 }] }] },
    sm: { blocks: [{ x: 2359, top: 719, anchor: 'start', lineGap: 10, lines: [{ text: L.sm, size: 32, weight: 800 }, { text: L.smPct, size: 29, weight: 400, color: NOTE }, { text: L.smYoy, size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2359, top: 865, anchor: 'start', lineGap: 10, lines: [{ text: L.rnd, size: 32, weight: 800 }, { text: L.rndPct, size: 29, weight: 400, color: NOTE }, { text: L.rndYoy, size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: 2359, top: 999, anchor: 'start', lineGap: 10, lines: [{ text: L.ga, size: 32, weight: 800 }, { text: L.gaPct, size: 29, weight: 400, color: NOTE }, { text: L.gaYoy, size: 29, weight: 400, color: NOTE }] }] },
    operations: { blocks: [{ x: 2318, top: 1136, anchor: 'start', lineGap: 10, lines: [{ text: L.operations, size: 31, weight: 800 }, { text: L.operationsPct, size: 29, weight: 400, color: NOTE }, { text: L.operationsYoy, size: 29, weight: 400, color: NOTE }] }] },
    da: { blocks: [{ x: 2361, top: 1284, anchor: 'start', lineGap: 10, lines: [{ text: L.da, size: 32, weight: 800 }, { text: L.daPct, size: 29, weight: 400, color: NOTE }, { text: L.daYoy, size: 29, weight: 400, color: NOTE }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q1-fy25', name: 'Uber - Q1 FY25', company: 'Uber',
    meta: {
      title: 'Uber Q1 FY25 Income Statement', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/uber-q1-fy25.png', width: 2667, height: 1500 },
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
      scale: 32,
      nodes: {
        mobility: { x: 364, y: 415, width: 71, height: 209 }, delivery: { x: 364, y: 780, width: 71, height: 120 }, freight: { x: 364, y: 1049, width: 71, height: 39 },
        revenue: { x: 831, y: 619, width: 70, height: 371 }, gross_profit: { x: 1298, y: 514, width: 71, height: 146 }, cost_of_revenue: { x: 1298, y: 869, width: 71, height: 224 },
        operating_profit: { x: 1771, y: 414, width: 70, height: 37 }, operating_expenses: { x: 1768, y: 658, width: 70, height: 106 },
        tax_benefit: { x: 2098, y: 302, width: 70, height: 12 }, other: { x: 2121, y: 422, width: 70, height: 7 }, net_profit: { x: 2232, y: 322, width: 71, height: 57 },
        interest: { x: 2232, y: 588, width: 71, height: 1 }, sm: { x: 2232, y: 709, width: 71, height: 31 }, rnd: { x: 2232, y: 860, width: 71, height: 25 },
        ga: { x: 2232, y: 1000, width: 71, height: 19 }, operations: { x: 2232, y: 1134, width: 71, height: 20 }, da: { x: 2232, y: 1291, width: 71, height: 3 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 6.5, notes: ['+15% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 3.8, notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.5, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.6, notes: ['40% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.2, notes: ['11% margin', '+9pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 0.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 2, type: 'profit', label: 'Net profit', value: 1.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 3, type: 'cost', label: 'Interest', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 5, type: 'cost', label: 'R&D', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 6, type: 'cost', label: 'G&A', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 4, order: 7, type: 'cost', label: 'Operations', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 8, type: 'cost', label: 'D&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 6.5, width: 209 }, { source: 'delivery', target: 'revenue', value: 3.8, width: 120 }, { source: 'freight', target: 'revenue', value: 1.3, width: 39, targetWidth: 42 },
      { source: 'revenue', target: 'gross_profit', value: 4.6, width: 146 }, { source: 'revenue', target: 'cost_of_revenue', value: 6.9, width: 224, sourceWidth: 225 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.2, width: 37 }, { source: 'gross_profit', target: 'operating_expenses', value: 3.4, width: 106, sourceWidth: 109 },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, width: 36, targetWidth: 38, sourceOrder: 0, targetOrder: 1 },
      { source: 'tax_benefit', target: 'net_profit', value: 0.4, width: 12, targetOrder: 0 }, { source: 'other', target: 'net_profit', value: 0.2, width: 7, targetOrder: 2 },
      { source: 'operating_profit', target: 'interest', value: 0.1, width: 1, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 1.1, width: 31, sourceWidth: 33, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 25, sourceWidth: 27, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.7, width: 19, sourceWidth: 21, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, width: 20, sourceWidth: 22, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 3, sourceOrder: 4 },
    ],
    i18n: { zh: { name: 'Uber · 2025 财年第一季度', meta: { title: 'Uber 2025 财年第一季度利润表', titleTextLength: 1780 }, annotationsSvg: annotationsZh,
      nodes: {
        mobility: { label: '出行', notes: ['同比 +15%'] }, delivery: { label: '配送', notes: ['同比 +18%'] }, freight: { label: 'Uber Freight 货运', notes: ['同比 (2%)'] },
        revenue: { label: '收入', notes: ['同比 +14%'] }, gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
        operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +9 个百分点'] }, operating_expenses: { label: '运营费用' },
        tax_benefit: { label: '税收收益' }, other: { label: '其他' }, net_profit: { label: '净利润' }, interest: { label: '利息' },
        sm: { label: '销售与市场' }, rnd: { label: '研发' }, ga: { label: '管理费用' }, operations: { label: '运营' }, da: { label: '折旧与摊销' },
      }, layout: { labels: makeLabels(labelText.zh) },
    } },
  });
})();

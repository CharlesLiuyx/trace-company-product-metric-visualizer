/* Uber Q4 FY22 income statement ($B), reconstructed from the Source image. */
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
      <text x="${x + width / 2}" y="1254" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1292" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1328" text-anchor="middle" font-size="23" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g data-typography-role="brand">
        <rect x="158" y="444" width="93" height="93" rx="13" fill="#000000"/>
        <text x="204.5" y="504" text-anchor="middle" font-family="Arial,sans-serif" font-size="34" font-weight="500" fill="#ffffff">Uber</text>
        <text x="70" y="830" font-family="Arial,sans-serif" font-size="50" font-weight="500" fill="#001e24">Uber</text>
        <text x="204" y="830" font-family="Arial,sans-serif" font-size="50" font-weight="800" fill="#00c444">Eats</text>
        <text x="70" y="1128" font-family="Arial,sans-serif" font-size="47" font-weight="500" fill="#000000">Uber Freight</text>
      </g>
      ${card(31, 157, L.trips, '2.1B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '131M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$30.7B', L.grossBookingsYoy)}
      ${card(709, 240, L.takeRate, '28.0%', L.takeRateYoy)}
      <text x="85" y="1388" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
      <text x="170" y="1438" font-size="31" font-weight="800" fill="#000000">${L.source}</text>
    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips', tripsYoy: '+11% Y/Y', mapcYoy: '+11% Y/Y',
    grossBookings: 'Gross Bookings', grossBookingsYoy: '+26% Y/Y fx neutral',
    takeRate: 'Take rate', takeRateYoy: '+6pp Y/Y',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
    source: 'Source: Quarterly results',
  });
  const annotationsZh = annotations({
    trips: '行程', tripsYoy: '同比 +11%', mapcYoy: '同比 +11%',
    grossBookings: '总预订额', grossBookingsYoy: '按固定汇率同比 +26%',
    takeRate: '抽成率', takeRateYoy: '同比 +6 个百分点',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
    source: '来源：季度业绩',
  });

  const text = {
    en: {
      mobilityYoy: '+82% Y/Y', mobility: 'Mobility', mobilityMargin: '24% adjusted margin',
      deliveryYoy: '+21% Y/Y', delivery: 'Delivery', deliveryMargin: '8% adjusted margin',
      freightYoy: '+49% Y/Y', freightMargin: '(1%) adjusted margin',
      revenue: 'Revenue', revenueYoy: '+49% Y/Y',
      grossProfit: 'Gross profit', grossMargin: '38% margin', grossYoy: '(8pp) Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue',
      operating: 'Operating', expenses: 'expenses', operatingLoss: 'Operating', loss: 'loss',
      operatingMargin: '(2%) margin', operatingYoy: '+8pp Y/Y',
      operations: 'Operations', support: '& Support', operationsValue: '($0.6B)', operationsPct: '7% of revenue', operationsYoy: '(2pp) Y/Y',
      sm: 'Sales & marketing', smValue: '($1.1B)', smPct: '13% of revenue', smYoy: '(9pp) Y/Y',
      rnd: 'R&D', rndValue: '($0.7B)', rndPct: '9% of revenue', rndYoy: '(1pp) Y/Y',
      ga: 'General & Admin', gaValue: '($0.7B)', gaPct: '9% of revenue', gaYoy: '(2pp) Y/Y',
      da: 'Depreciation', da2: '& Amortization', daValue: '($0.2B)', daPct: '9% of revenue', daYoy: '(2pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +82%', mobility: '出行', mobilityMargin: '调整后利润率 24%',
      deliveryYoy: '同比 +21%', delivery: '配送', deliveryMargin: '调整后利润率 8%',
      freightYoy: '同比 +49%', freightMargin: '调整后利润率 (1%)',
      revenue: '收入', revenueYoy: '同比 +49%',
      grossProfit: '毛利润', grossMargin: '利润率 38%', grossYoy: '同比 (8 个百分点)',
      costOf: '收入', revenueWord: '成本',
      operating: '运营', expenses: '费用', operatingLoss: '营业', loss: '亏损',
      operatingMargin: '利润率 (2%)', operatingYoy: '同比 +8 个百分点',
      operations: '运营', support: '与支持', operationsValue: '($0.6B)', operationsPct: '占收入 7%', operationsYoy: '同比 (2 个百分点)',
      sm: '销售与市场', smValue: '($1.1B)', smPct: '占收入 13%', smYoy: '同比 (9 个百分点)',
      rnd: '研发', rndValue: '($0.7B)', rndPct: '占收入 9%', rndYoy: '同比 (1 个百分点)',
      ga: '管理费用', gaValue: '($0.7B)', gaPct: '占收入 9%', gaYoy: '同比 (2 个百分点)',
      da: '折旧', da2: '与摊销', daValue: '($0.2B)', daPct: '占收入 9%', daYoy: '同比 (2 个百分点)',
    },
  };

  const block = (x, top, anchor, lines, lineGap = 8) => ({ blocks: [{ x, top, anchor, lineGap, lines }] });
  const labels = (L) => ({
    mobility: { blocks: [
      { x: 408, top: 362, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: L.mobilityYoy, size: 29, color: NOTE }] },
      { x: 188, top: 569, anchor: 'middle', lineGap: 8, lines: [{ text: L.mobility, size: 40, weight: 800 }, { text: L.mobilityMargin, size: 29, color: NOTE }] },
    ] },
    delivery: { blocks: [
      { x: 408, top: 704, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: L.deliveryYoy, size: 29, color: NOTE }] },
      { x: 188, top: 863, anchor: 'middle', lineGap: 8, lines: [{ text: L.delivery, size: 39, weight: 800 }, { text: L.deliveryMargin, size: 29, color: NOTE }] },
    ] },
    freight: { blocks: [
      { x: 408, top: 1010, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39 }, { text: L.freightYoy, size: 29, color: NOTE }] },
      { x: 188, top: 1155, anchor: 'middle', lineGap: 8, lines: [{ text: L.freightMargin, size: 29, color: NOTE }] },
    ] },
    revenue: block(943, 444, 'middle', [{ text: L.revenue, size: 42, weight: 800 }, { text: '$value', size: 40 }, { text: L.revenueYoy, size: 29, color: NOTE }], 9),
    gross_profit: block(1399, 297, 'middle', [{ text: L.grossProfit, size: 38, weight: 800 }, { text: '$value', size: 39, color: GREEN_LABEL }, { text: L.grossMargin, size: 29, color: NOTE }, { text: L.grossYoy, size: 29, color: NOTE }], 8),
    cost_of_revenue: block(1398, 1129, 'middle', [{ text: L.costOf, size: 37, weight: 800 }, { text: L.revenueWord, size: 37, weight: 800 }, { text: '$value', size: 38 }], 8),
    operating_expenses: block(1801, 428, 'middle', [{ text: L.operating, size: 38, weight: 800 }, { text: L.expenses, size: 38, weight: 800 }, { text: '$value', size: 38 }], 8),
    operating_loss: block(1628, 905, 'middle', [{ text: L.operatingLoss, size: 38, weight: 800 }, { text: L.loss, size: 38, weight: 800 }, { text: '$value', size: 38 }, { text: L.operatingMargin, size: 29, color: NOTE }, { text: L.operatingYoy, size: 29, color: NOTE }], 8),
    operations: block(2452, 305, 'middle', [{ text: L.operations, size: 31, weight: 800 }, { text: L.support, size: 31, weight: 800 }, { text: L.operationsValue, size: 32 }, { text: L.operationsPct, size: 29, color: NOTE }, { text: L.operationsYoy, size: 29, color: NOTE }], 8),
    sm: block(2459, 537, 'middle', [{ text: L.sm, size: 31, weight: 800 }, { text: L.smValue, size: 32 }, { text: L.smPct, size: 29, color: NOTE }, { text: L.smYoy, size: 29, color: NOTE }], 8),
    rnd: block(2453, 737, 'middle', [{ text: L.rnd, size: 31, weight: 800 }, { text: L.rndValue, size: 32 }, { text: L.rndPct, size: 29, color: NOTE }, { text: L.rndYoy, size: 29, color: NOTE }], 8),
    ga: block(2458, 955, 'middle', [{ text: L.ga, size: 31, weight: 800 }, { text: L.gaValue, size: 32 }, { text: L.gaPct, size: 29, color: NOTE }, { text: L.gaYoy, size: 29, color: NOTE }], 8),
    da: block(2452, 1123, 'middle', [{ text: L.da, size: 31, weight: 800 }, { text: L.da2, size: 31, weight: 800 }, { text: L.daValue, size: 32 }, { text: L.daPct, size: 29, color: NOTE }, { text: L.daYoy, size: 29, color: NOTE }], 8),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q4-fy22', name: 'Uber - Q4 FY22',
    meta: {
      title: 'Uber Q4 FY22 Income Statement', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/uber-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 123, titleWeight: 700, titleTextLength: 2025,
      logoWidth: 470, logoHeight: 165, logoY: 260, logoViewBox: '0 0 470 165',
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
      scale: 48.2,
      nodes: {
        mobility: { x: 367, y: 446, width: 71, height: 197 }, delivery: { x: 367, y: 797, width: 71, height: 139 }, freight: { x: 367, y: 1090, width: 71, height: 73 },
        revenue: { x: 909, y: 587, width: 71, height: 413 }, gross_profit: { x: 1363, y: 466, width: 72, height: 158 }, cost_of_revenue: { x: 1368, y: 844, width: 72, height: 255 },
        operating_loss: { x: 1588, y: 862, width: 72, height: 6 }, operating_expenses: { x: 1773, y: 572, width: 72, height: 165 },
        operations: { x: 2235, y: 327, width: 72, height: 28 }, sm: { x: 2235, y: 520, width: 72, height: 54 }, rnd: { x: 2235, y: 745, width: 72, height: 35 },
        ga: { x: 2235, y: 942, width: 72, height: 35 }, da: { x: 2235, y: 1133, width: 72, height: 10 },
      },
      labels: labels(text.en),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 4.1, notes: ['+82% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 2.9, notes: ['+21% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.5, notes: ['+49% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.6, notes: ['+49% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.3, notes: ['38% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -0.1, notes: ['(2%) margin', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 3.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 0, type: 'cost', label: ['Operations', '& Support'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'Sales & marketing', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'General & Admin', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 4, type: 'cost', label: ['Depreciation', '& Amortization'], value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 4.1, sourceWidth: 197, targetWidth: 197, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 2.9, sourceWidth: 139, targetWidth: 139, targetOrder: 1 },
      { source: 'freight', target: 'revenue', value: 1.5, sourceWidth: 73, targetWidth: 76, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.3, sourceWidth: 158, targetWidth: 158, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.3, sourceWidth: 255, targetWidth: 255, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.3, sourceWidth: 158, targetWidth: 158, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.1, sourceWidth: 6, targetWidth: 6, y0: 865, y1: 734, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'operations', value: 0.6, sourceWidth: 28, targetWidth: 28, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 1.1, sourceWidth: 54, targetWidth: 54, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, sourceWidth: 35, targetWidth: 35, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.7, sourceWidth: 35, targetWidth: 35, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 12, targetWidth: 10, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2022 财年第四季度',
        meta: { title: 'Uber 2022 财年第四季度利润表', titleTextLength: 1780 },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +82%'] }, delivery: { label: '配送', notes: ['同比 +21%'] }, freight: { label: 'Uber Freight 货运', notes: ['同比 +49%'] },
          revenue: { label: '收入', notes: ['同比 +49%'] }, gross_profit: { label: '毛利润', notes: ['利润率 38%', '同比 (8 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (2%)', '同比 +8 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          operations: { label: ['运营', '与支持'] }, sm: { label: '销售与市场' }, rnd: { label: '研发' }, ga: { label: '管理费用' }, da: { label: ['折旧', '与摊销'] },
        },
        layout: { labels: labels(text.zh) },
      },
    },
  });
})();

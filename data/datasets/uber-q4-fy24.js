/* Uber Q4 FY24 income statement ($B), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const OTHER_GREEN = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

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
        <rect x="147" y="389" width="111" height="111" rx="15" fill="#000000"/>
        <text x="202" y="460" text-anchor="middle" font-family="Arial,sans-serif" font-size="39" font-weight="500" fill="#ffffff">Uber</text>
        <text x="68" y="795" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001e24">Uber</text>
        <text x="202" y="795" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#00c444">Eats</text>
        <text x="68" y="1072" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>
      </g>

      ${card(31, 157, L.trips, '3.1B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '171M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$44.2B', L.grossBookingsYoy)}
      ${card(709, 379, L.takeRate, '', '', `
        <text x="${L.takeRateX}" y="1254" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.mobilityTakeRate}</text>
        <text x="${L.takeRateX}" y="1287" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.deliveryTakeRate}</text>
      `)}
      <text x="85" y="1348" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>

    </g>`;

  const annotationsEn = annotations({
    trips: 'Trips',
    tripsYoy: '+18% Y/Y',
    mapcYoy: '+14% Y/Y',
    grossBookings: 'Gross Bookings',
    grossBookingsYoy: '+21% Y/Y fx neutral',
    takeRate: 'Take rate',
    takeRateX: 741,
    takeRateSize: 25,
    mobilityTakeRate: 'Mobility 30.3% (+1.6pp Y/Y)',
    deliveryTakeRate: 'Delivery 18.7% (+0.4pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });

  const annotationsZh = annotations({
    trips: '行程',
    tripsYoy: '同比 +18%',
    mapcYoy: '同比 +14%',
    grossBookings: '总预订额',
    grossBookingsYoy: '同比 +21%（汇率中性）',
    takeRate: '抽成率',
    takeRateX: 737,
    takeRateSize: 23,
    mobilityTakeRate: '出行 30.3%（同比 +1.6 个百分点）',
    deliveryTakeRate: '配送 18.7%（同比 +0.4 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const labelText = {
    en: {
      mobilityName: 'Mobility', mobilityYoy: '+25% Y/Y', mobilityMargin: '21% adjusted margin',
      deliveryName: 'Delivery', deliveryYoy: '+21% Y/Y', deliveryMargin: '13% adjusted margin',
      freightYoy: '(0%) Y/Y', freightMargin: '(1%) adjusted margin',
      revenue: 'Revenue', revenueYoy: '+20% Y/Y',
      gross: 'Gross profit', grossMargin: '40% margin', grossYoy: '+0pp Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue',
      operatingProfit: 'Operating profit', operatingMargin: '6% margin', operatingYoy: '(0pp) Y/Y',
      operating: 'Operating', expenses: 'expenses', taxBenefit: 'Tax benefit', other: 'Other', netProfit: 'Net profit',
      sm: 'S&M ($1.2B)', smPct: '10% of revenue', smYoy: '+1pp Y/Y',
      ga: 'G&A ($1.1B)', gaPct: '9% of revenue', gaYoy: '+3pp Y/Y',
      rnd: 'R&D ($0.8B)', rndPct: '7% of revenue', rndYoy: '(1pp) Y/Y',
      operations: 'Operations ($0.7B)', operationsPct: '6% of revenue', operationsYoy: '(1pp) Y/Y',
      interest: 'Interest', da: 'D&A ($0.2B)', daPct: '1% of revenue', daYoy: '(1pp) Y/Y',
    },
    zh: {
      mobilityName: '出行', mobilityYoy: '同比 +25%', mobilityMargin: '调整后利润率 21%',
      deliveryName: '配送', deliveryYoy: '同比 +21%', deliveryMargin: '调整后利润率 13%',
      freightYoy: '同比 (0%)', freightMargin: '调整后利润率 (1%)',
      revenue: '收入', revenueYoy: '同比 +20%',
      gross: '毛利润', grossMargin: '利润率 40%', grossYoy: '同比 +0 个百分点',
      costOf: '收入', revenueWord: '成本',
      operatingProfit: '营业利润', operatingMargin: '利润率 6%', operatingYoy: '同比 (0 个百分点)',
      operating: '营业', expenses: '费用', taxBenefit: '税收收益', other: '其他', netProfit: '净利润',
      sm: '销售与市场 ($1.2B)', smPct: '占收入 10%', smYoy: '同比 +1 个百分点',
      ga: '管理费用 ($1.1B)', gaPct: '占收入 9%', gaYoy: '同比 +3 个百分点',
      rnd: '研发 ($0.8B)', rndPct: '占收入 7%', rndYoy: '同比 (1 个百分点)',
      operations: '运营 ($0.7B)', operationsPct: '占收入 6%', operationsYoy: '同比 (1 个百分点)',
      interest: '利息', da: '折旧与摊销 ($0.2B)', daPct: '占收入 1%', daYoy: '同比 (1 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    mobility: { blocks: [
      block(403, 375, [line('$value', 39), line(L.mobilityYoy, 29, { color: NOTE })], { lineGap: 8 }),
      block(204, 530, [line(L.mobilityName, 41, { weight: 800 }), line(L.mobilityMargin, 29, { color: NOTE })], { lineGap: 9 }),
    ] },
    delivery: { blocks: [
      block(402, 714, [line('$value', 39), line(L.deliveryYoy, 29, { color: NOTE })], { lineGap: 8 }),
      block(202, 824, [line(L.deliveryName, 41, { weight: 800 }), line(L.deliveryMargin, 29, { color: NOTE })], { lineGap: 9 }),
    ] },
    freight: { blocks: [
      block(400, 993, [line('$value', 39), line(L.freightYoy, 29, { color: NOTE })], { lineGap: 8 }),
      block(201, 1128, [line(L.freightMargin, 29, { color: NOTE })], { lineGap: 9 }),
    ] },
    revenue: { blocks: [block(783, 544, [line(L.revenue, 42, { weight: 800 }), line('$value', 40), line(L.revenueYoy, 29, { color: NOTE })], { anchor: 'start', lineGap: 9 })] },
    gross_profit: { blocks: [block(1331, 432, [line(L.gross, 38, { weight: 800 }), line('$value', 39), line(L.grossMargin, 29, { color: NOTE }), line(L.grossYoy, 29, { color: NOTE })], { lineGap: 9 })] },
    cost_of_revenue: { blocks: [block(1333, 1090, [line(L.costOf, 36, { weight: 800 }), line(L.revenueWord, 36, { weight: 800 }), line('$value', 37)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1800, 361, [line(L.operatingProfit, 38, { weight: 800 }), line('$value', 40), line(L.operatingMargin, 29, { color: NOTE }), line(L.operatingYoy, 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1800, 821, [line(L.operating, 38, { weight: 800 }), line(L.expenses, 38, { weight: 800 }), line('$value', 38)], { lineGap: 8 })] },
    tax_benefit: { blocks: [block(2106, 225, [line(L.taxBenefit, 32, { weight: 800, color: OTHER_GREEN }), line('$value', 33, { color: OTHER_GREEN })], { lineGap: 12 })] },
    other: { blocks: [block(2149, 563, [line(L.other, 32, { weight: 800, color: OTHER_GREEN }), line('$value', 33, { color: OTHER_GREEN })], { lineGap: 12 })] },
    net_profit: { blocks: [block(2348, 375, [line(L.netProfit, 38, { weight: 800 }), line('$value', 40)], { anchor: 'start', lineGap: 7 })] },
    interest: { blocks: [block(2387, 636, [line(L.interest, 32, { weight: 800 }), line('$value', 32)], { anchor: 'start', lineGap: 10 })] },
    sm: { blocks: [block(2353, 755, [line(L.sm, 32, { weight: 800 }), line(L.smPct, 29, { color: NOTE }), line(L.smYoy, 29, { color: NOTE })], { anchor: 'start', lineGap: 10 })] },
    ga: { blocks: [block(2360, 895, [line(L.ga, 32, { weight: 800 }), line(L.gaPct, 29, { color: NOTE }), line(L.gaYoy, 29, { color: NOTE })], { anchor: 'start', lineGap: 10 })] },
    rnd: { blocks: [block(2363, 1040, [line(L.rnd, 32, { weight: 800 }), line(L.rndPct, 29, { color: NOTE }), line(L.rndYoy, 29, { color: NOTE })], { anchor: 'start', lineGap: 10 })] },
    operations: { blocks: [block(2316, 1172, [line(L.operations, 31, { weight: 800 }), line(L.operationsPct, 29, { color: NOTE }), line(L.operationsYoy, 29, { color: NOTE })], { anchor: 'start', lineGap: 10 })] },
    da: { blocks: [block(2348, 1306, [line(L.da, 32, { weight: 800 }), line(L.daPct, 29, { color: NOTE }), line(L.daYoy, 29, { color: NOTE })], { anchor: 'start', lineGap: 10 })] },
  });

  const labels = makeLabels(labelText.en);
  const zhLabels = makeLabels(labelText.zh);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q4-fy24',
    name: 'Uber · Q4 FY24',
    company: 'Uber',
    meta: {
      company: 'Uber',
      title: 'Uber Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/uber-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 700,
      titleTextLength: 2017,
      logoWidth: 470,
      logoHeight: 165,
      logoY: 262,
      logoViewBox: '0 0 470 165',
      logoSvg: '<text x="235" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="193" font-weight="500" fill="#000000">Uber</text>',
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
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
      scale: 1,
      nodes: {
        mobility: { x: 364, y: 462, width: 71, height: 167 },
        delivery: { x: 364, y: 797, width: 71, height: 90 },
        freight: { x: 364, y: 1081, width: 71, height: 29 },
        revenue: { x: 831, y: 681, width: 70, height: 289 },
        gross_profit: { x: 1295, y: 604, width: 72, height: 112 },
        cost_of_revenue: { x: 1298, y: 886, width: 71, height: 174 },
        operating_profit: { x: 1766, y: 535, width: 70, height: 16 },
        operating_expenses: { x: 1766, y: 694, width: 70, height: 93 },
        tax_benefit: { x: 2073, y: 311, width: 70, height: 144 },
        other: { x: 2111, y: 542, width: 70, height: 4 },
        net_profit: { x: 2232, y: 328, width: 71, height: 167 },
        interest: { x: 2232, y: 666, width: 71, height: 5 },
        sm: { x: 2232, y: 765, width: 71, height: 27 },
        ga: { x: 2232, y: 901, width: 71, height: 25 },
        rnd: { x: 2232, y: 1048, width: 71, height: 17 },
        operations: { x: 2232, y: 1184, width: 71, height: 14 },
        da: { x: 2232, y: 1320, width: 71, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 6.9, notes: ['+25% Y/Y', '21% adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'delivery', col: 0, order: 1, type: 'source', label: 'Delivery', value: 3.8, notes: ['+21% Y/Y', '13% adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'freight', col: 0, order: 2, type: 'source', label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y', '(1%) adjusted margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.0, valueText: '$12.0B', notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.7, notes: ['40% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.8, notes: ['6% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, valueText: '($4.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 6.0, valueText: '$6.0B', color: GREEN, labelColor: OTHER_GREEN, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 0.2, color: GREEN, labelColor: OTHER_GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 6.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 1.2, notes: ['10% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 1.1, notes: ['9% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.8, notes: ['7% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 5, type: 'cost', label: 'Operations', value: 0.7, notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 6, type: 'cost', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'revenue', value: 6.9, sourceWidth: 167, targetWidth: 167, y0: 545.5, y1: 764.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'delivery', target: 'revenue', value: 3.8, sourceWidth: 90, targetWidth: 90, y0: 842, y1: 893, sourceOrder: 0, targetOrder: 1 },
      { source: 'freight', target: 'revenue', value: 1.3, sourceWidth: 29, targetWidth: 32, y0: 1095.5, y1: 954, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.7, sourceWidth: 113, targetWidth: 112, y0: 737.5, y1: 660, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.2, sourceWidth: 176, targetWidth: 174, y0: 882, y1: 973, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, sourceWidth: 16, targetWidth: 16, y0: 612, y1: 543, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, sourceWidth: 96, targetWidth: 93, y0: 668, y1: 740.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'tax_benefit', target: 'net_profit', value: 6.0, sourceWidth: 144, targetWidth: 144, y0: 383, y1: 400, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 14, targetWidth: 19, y0: 542, y1: 481.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 544, y1: 493, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 5, y0: 550, y1: 668.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 1.2, sourceWidth: 28, targetWidth: 27, y0: 708, y1: 778.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 1.1, sourceWidth: 26, targetWidth: 25, y0: 735, y1: 913.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 19, targetWidth: 17, y0: 757.5, y1: 1056.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 0.7, sourceWidth: 16, targetWidth: 14, y0: 775, y1: 1191, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 4, targetWidth: 3, y0: 785, y1: 1321.5, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Uber · 2024 财年第四季度',
        meta: {
          title: 'Uber 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          titleTextLength: 1780,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +25%', '调整后利润率 21%'] },
          delivery: { label: '配送', notes: ['同比 +21%', '调整后利润率 13%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 (0%)', '调整后利润率 (1%)'] },
          revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          tax_benefit: { label: '税收收益' },
          other: { label: '其他' },
          net_profit: { label: '净利润' },
          interest: { label: '利息' },
          sm: { label: '销售与市场', notes: ['占收入 10%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 +3 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          operations: { label: '运营', notes: ['占收入 6%', '同比 (1 个百分点)'] },
          da: { label: '折旧与摊销', notes: ['占收入 1%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

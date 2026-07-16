/* Toast Q3 FY25 income statement ($M), measured from the Build Source. */
(function () {
  const NOTE = '#666666';
  const TITLE = '#155077';
  const ORANGE = '#ff4c00';
  const ORANGE_CARD = '#ff4b00';
  const ORANGE_LINK = '#f7a685';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2427;
  const SCALE = 416 / 1633;

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
    lineGap: options.lineGap || 9,
    lines,
  });

  const toastLogo = `
    <g transform="translate(-16 0)">
      <path transform="translate(11 13) scale(1.035 0.90)" fill="${ORANGE}" fill-rule="evenodd" d="M20 162C6 139 7 92 19 63C5 51 9 31 28 18C59-3 119 0 145 22C159 34 160 51 147 63C159 91 159 137 145 160C111 171 52 172 20 162ZM37 143C28 119 29 86 38 66C31 57 31 48 39 40C59 24 109 24 128 40C137 48 136 57 129 66C138 88 138 121 130 142C105 150 62 151 37 143Z"/>
      <text x="187" y="155" font-family="Montserrat,Arial,sans-serif" font-size="170" font-weight="800" fill="${ORANGE}" textLength="421" lengthAdjust="spacingAndGlyphs">toast</text>
    </g>`;

  const kpiCard = (x, width, header, value, note) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="1157" width="${width}" height="150" rx="31" fill="${ORANGE_CARD}"/>
      <text x="${x + width / 2}" y="1209" text-anchor="middle" font-size="28" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1250" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1285" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(194, 221, 'ARR', '$2.0B', isZh ? '同比 +30%' : '+30% Y/Y')}
      ${kpiCard(436, 240, isZh ? '门店数' : 'Locations', '156,000', isZh ? '同比 +23%' : '+23% Y/Y')}
      <text x="226" y="1342" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = ${isZh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>
    </g>`;

  const labels = {
    subscription_services: {
      blocks: [
        block(402, 301, [line('$value', 39), line('+29% Y/Y', 29, { color: NOTE })]),
        block(306, 370, [line('Subscription', 40, { weight: 800 }), line('services', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    financial_technology_solutions: {
      blocks: [
        block(396, 508, [line('$value', 39), line('+26% Y/Y', 29, { color: NOTE })]),
        block(293, 695, [line('Financial', 40, { weight: 800 }), line('technology', 40, { weight: 800 }), line('solutions', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    hardware_professional_services: {
      blocks: [
        block(402, 1008, [line('$value', 39), line('(10%) Y/Y', 29, { color: NOTE })]),
        block(322, 980, [line('Hardware and', 40, { weight: 800 }), line('professional', 40, { weight: 800 }), line('services', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    revenue: {
      blocks: [block(868, 468, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+25% Y/Y', 29, { color: NOTE })])],
    },
    gross_profit: {
      blocks: [block(1338, 327, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('25% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])],
    },
    cost_of_revenue: {
      blocks: [block(1335, 1152, [line('Cost of', 33, { weight: 800 }), line('revenue', 33, { weight: 800 }), line('$value', 34)], { lineGap: 14 })],
    },
    operating_profit: {
      blocks: [block(1802, 231, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('5% margin', 29, { color: NOTE }), line('+3pp Y/Y', 29, { color: NOTE })])],
    },
    operating_expenses: {
      blocks: [block(1800, 721, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 12 })],
    },
    other: {
      blocks: [block(2145, 426, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 9 })],
    },
    net_profit: {
      blocks: [block(RIGHT_LABEL_X, 281, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('6% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])],
    },
    sm: {
      blocks: [block(RIGHT_LABEL_X, 674, [line('S&M', 31, { weight: 800 }), line('$value', 29), line('9% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 12 })],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 876, [line('R&D', 31, { weight: 800 }), line('$value', 29), line('6% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 13 })],
    },
    ga: {
      blocks: [block(RIGHT_LABEL_X, 1071, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('6% of revenue', 28, { color: NOTE }), line('+0% Y/Y', 28, { color: NOTE })], { lineGap: 12 })],
    },
  };

  const zhLabels = {
    subscription_services: { blocks: [block(402, 307, [line('$value', 39), line('同比 +29%', 29, { color: NOTE })]), block(314, 397, [line('订阅服务', 40, { weight: 800 })], { anchor: 'end' })] },
    financial_technology_solutions: { blocks: [block(396, 514, [line('$value', 39), line('同比 +26%', 29, { color: NOTE })]), block(304, 742, [line('金融科技', 40, { weight: 800 }), line('解决方案', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    hardware_professional_services: { blocks: [block(402, 1014, [line('$value', 39), line('同比 (10%)', 29, { color: NOTE })]), block(313, 1028, [line('硬件与', 40, { weight: 800 }), line('专业服务', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    revenue: { blocks: [block(868, 477, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +25%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1338, 339, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 25%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1335, 1152, [line('收入', 33, { weight: 800 }), line('成本', 33, { weight: 800 }), line('$value', 34)], { lineGap: 14 })] },
    operating_profit: { blocks: [block(1802, 237, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 5%', 29, { color: NOTE }), line('同比 +3 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1800, 730, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 12 })] },
    other: { blocks: [block(2145, 434, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 287, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 6%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })])] },
    sm: { blocks: [block(RIGHT_LABEL_X, 674, [line('销售与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 9%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })], { lineGap: 12 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 876, [line('研发', 31, { weight: 800 }), line('$value', 29), line('占收入 6%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 13 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1071, [line('一般及行政', 31, { weight: 800 }), line('$value', 29), line('占收入 6%', 28, { color: NOTE }), line('同比 +0%', 28, { color: NOTE })], { lineGap: 12 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'toast-q3-fy25',
    name: 'Toast · Q3 FY25',
    company: 'Toast',
    meta: {
      company: 'Toast',
      title: 'Toast Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/toast-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2068,
      hidePeriodStamp: true,
      logoWidth: 700,
      logoHeight: 180,
      logoY: 240,
      logoViewBox: '0 0 700 180',
      logoSvg: toastLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: SCALE,
      nodes: {
        subscription_services: { x: 365, y: 400, width: 73, height: 62 },
        financial_technology_solutions: { x: 365, y: 606, width: 73, height: 342 },
        hardware_professional_services: { x: 365, y: 1105, width: 73, height: 11 },
        revenue: { x: 832, y: 615, width: 72, height: 416 },
        gross_profit: { x: 1299, y: 516, width: 73, height: 109 },
        cost_of_revenue: { x: 1299, y: 839, width: 73, height: 306 },
        operating_profit: { x: 1767, y: 420, width: 72, height: 20 },
        operating_expenses: { x: 1767, y: 621, width: 72, height: 88 },
        other: { x: 2109, y: 408, width: 72, height: 6 },
        net_profit: { x: 2233, y: 336, width: 73, height: 27 },
        sm: { x: 2233, y: 700, width: 73, height: 37 },
        rnd: { x: 2233, y: 907, width: 73, height: 26 },
        ga: { x: 2233, y: 1106, width: 73, height: 26 },
      },
      labels,
    },
    nodes: [
      { id: 'subscription_services', col: 0, order: 0, type: 'source', label: 'Subscription services', value: 244, notes: ['+29% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'financial_technology_solutions', col: 0, order: 1, type: 'source', label: 'Financial technology solutions', value: 1345, notes: ['+26% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'hardware_professional_services', col: 0, order: 2, type: 'source', label: 'Hardware and professional services', value: 44, notes: ['(10%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1633, valueText: '$1,633M', notes: ['+25% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 432, notes: ['25% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 1201, valueText: '($1,201M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 84, notes: ['5% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 348, valueText: '($348M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 21, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 105, notes: ['6% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'S&M', value: 144, notes: ['9% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 102, notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 102, notes: ['6% of revenue', '+0% Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription_services', target: 'revenue', value: 244, width: 62, sourceWidth: 62, targetWidth: 62, y0: 431, y1: 646, sourceOrder: 0, targetOrder: 0 },
      { source: 'financial_technology_solutions', target: 'revenue', value: 1345, width: 342, sourceWidth: 342, targetWidth: 342, y0: 777, y1: 848, sourceOrder: 0, targetOrder: 1 },
      { source: 'hardware_professional_services', target: 'revenue', value: 44, width: 11, sourceWidth: 11, targetWidth: 11, y0: 1110.5, y1: 1024.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 432, width: 109, sourceWidth: 109, targetWidth: 109, y0: 669.5, y1: 570.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1201, width: 306, sourceWidth: 306, targetWidth: 306, y0: 878, y1: 992, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 84, width: 20, sourceWidth: 20, targetWidth: 20, y0: 526, y1: 430, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 348, width: 89, sourceWidth: 89, targetWidth: 88, y0: 580.5, y1: 665, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 84, width: 20, sourceWidth: 20, targetWidth: 21, y0: 430, y1: 346.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 21, width: 6, sourceWidth: 6, targetWidth: 6, y0: 411, y1: 360, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2181, x1: 2233, c1x: 2200, c1y: 411, c2x: 2212, c2y: 360 } },
      { source: 'operating_expenses', target: 'sm', value: 144, width: 36, sourceWidth: 36, targetWidth: 37, y0: 639, y1: 718.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 102, width: 26, sourceWidth: 26, targetWidth: 26, y0: 670, y1: 920, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 102, width: 26, sourceWidth: 26, targetWidth: 26, y0: 696, y1: 1119, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Toast · 2025 财年第三季度',
        meta: {
          title: 'Toast 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1550,
        },
        annotationsSvg: annotations(true),
        nodes: {
          subscription_services: { label: '订阅服务', notes: ['同比 +29%'] },
          financial_technology_solutions: { label: '金融科技解决方案', notes: ['同比 +26%'] },
          hardware_professional_services: { label: '硬件与专业服务', notes: ['同比 (10%)'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 25%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +2 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 9%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 6%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 6%', '同比 +0%'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

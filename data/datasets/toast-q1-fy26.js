/* Toast Q1 FY26 income statement ($M), measured from the processed reference. */
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
  const BACKGROUND = '#f2f2f2';
  const RIGHT_LABEL_X = 2427;
  const SCALE = 334 / 1630;

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
    <path transform="translate(11 13) scale(1.035 0.90)" fill="${ORANGE}" fill-rule="evenodd" d="M20 162C6 139 7 92 19 63C5 51 9 31 28 18C59-3 119 0 145 22C159 34 160 51 147 63C159 91 159 137 145 160C111 171 52 172 20 162ZM37 143C28 119 29 86 38 66C31 57 31 48 39 40C59 24 109 24 128 40C137 48 136 57 129 66C138 88 138 121 130 142C105 150 62 151 37 143Z"/>
    <text x="187" y="155" font-family="Montserrat,Arial,sans-serif" font-size="170" font-weight="800" fill="${ORANGE}" textLength="421" lengthAdjust="spacingAndGlyphs">toast</text>`;

  const kpiCard = (x, width, header, value, note) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="1157" width="${width}" height="150" rx="31" fill="${ORANGE_CARD}"/>
      <text x="${x + width / 2}" y="1209" text-anchor="middle" font-size="28" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1250" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1285" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(194, 221, 'ARR', '$2.2B', isZh ? '同比 +26%' : '+26% Y/Y')}
      ${kpiCard(436, 240, isZh ? '门店数' : 'Locations', '171,000', isZh ? '同比 +22%' : '+22% Y/Y')}
      <text x="226" y="1342" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = ${isZh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>
    </g>`;

  const labels = {
    subscription_services: {
      blocks: [
        block(402, 343, [line('$value', 39), line('+28% Y/Y', 29, { color: NOTE })]),
        block(306, 407, [line('Subscription', 40, { weight: 800 }), line('services', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    financial_technology_solutions: {
      blocks: [
        block(402, 533, [line('$value', 39), line('+22% Y/Y', 29, { color: NOTE })]),
        block(293, 690, [line('Financial', 40, { weight: 800 }), line('technology', 40, { weight: 800 }), line('solutions', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    hardware_professional_services: {
      blocks: [
        block(402, 953, [line('$value', 39), line('(15%) Y/Y', 29, { color: NOTE })]),
        block(322, 977, [line('Hardware and', 40, { weight: 800 }), line('professional', 40, { weight: 800 }), line('services', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    revenue: { blocks: [block(869, 471, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+22% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1336, 333, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('27% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1336, 1068, [line('Cost of', 33, { weight: 800 }), line('revenue', 33, { weight: 800 }), line('$value', 34)], { lineGap: 14 })] },
    operating_profit: { blocks: [block(1808, 254, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('7% margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1804, 742, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 12 })] },
    other: { blocks: [block(2148, 440, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 295, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('6% margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 555, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { lineGap: 12 })] },
    sm: { blocks: [block(RIGHT_LABEL_X, 718, [line('S&M', 31, { weight: 800 }), line('$value', 29), line('10% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 12 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 907, [line('R&D', 31, { weight: 800 }), line('$value', 29), line('6% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 13 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1100, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('5% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 12 })] },
  };

  const zhLabels = {
    subscription_services: { blocks: [block(402, 349, [line('$value', 39), line('同比 +28%', 29, { color: NOTE })]), block(314, 430, [line('订阅服务', 40, { weight: 800 })], { anchor: 'end' })] },
    financial_technology_solutions: { blocks: [block(402, 539, [line('$value', 39), line('同比 +22%', 29, { color: NOTE })]), block(314, 737, [line('金融科技', 40, { weight: 800 }), line('解决方案', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    hardware_professional_services: { blocks: [block(402, 958, [line('$value', 39), line('同比 (15%)', 29, { color: NOTE })]), block(314, 1025, [line('硬件与', 40, { weight: 800 }), line('专业服务', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    revenue: { blocks: [block(869, 484, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +22%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1336, 350, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 27%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1336, 1068, [line('收入', 33, { weight: 800 }), line('成本', 33, { weight: 800 }), line('$value', 34)], { lineGap: 14 })] },
    operating_profit: { blocks: [block(1808, 264, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 7%', 29, { color: NOTE }), line('同比 +4 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1804, 751, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 12 })] },
    other: { blocks: [block(2148, 448, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 305, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 6%', 29, { color: NOTE }), line('同比 +4 个百分点', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 565, [line('税费', 31, { weight: 800 }), line('$value', 29)], { lineGap: 12 })] },
    sm: { blocks: [block(RIGHT_LABEL_X, 718, [line('销售与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 10%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })], { lineGap: 12 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 907, [line('研发', 31, { weight: 800 }), line('$value', 29), line('占收入 6%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })], { lineGap: 13 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1100, [line('一般及行政', 31, { weight: 800 }), line('$value', 29), line('占收入 5%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 12 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'toast-q1-fy26',
    name: 'Toast · Q1 FY26',
    company: 'Toast',
    meta: {
      company: 'Toast',
      title: 'Toast Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/toast-q1-fy26.png', width: 2667, height: 1500 },
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
      background: BACKGROUND,
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
        subscription_services: { x: 366, y: 443, width: 73, height: 55 },
        financial_technology_solutions: { x: 366, y: 634, width: 73, height: 271 },
        hardware_professional_services: { x: 366, y: 1055, width: 73, height: 9 },
        revenue: { x: 833, y: 626, width: 73, height: 334 },
        gross_profit: { x: 1300, y: 525, width: 73, height: 92 },
        cost_of_revenue: { x: 1300, y: 811, width: 73, height: 241 },
        operating_profit: { x: 1770, y: 446, width: 72, height: 23 },
        operating_expenses: { x: 1768, y: 660, width: 72, height: 70 },
        other: { x: 2108, y: 425, width: 72, height: 3 },
        net_profit: { x: 2234, y: 355, width: 73, height: 26 },
        tax: { x: 2234, y: 602, width: 72, height: 1 },
        sm: { x: 2234, y: 744, width: 73, height: 31 },
        rnd: { x: 2234, y: 941, width: 73, height: 20 },
        ga: { x: 2234, y: 1129, width: 73, height: 17 },
      },
      labels,
    },
    nodes: [
      { id: 'subscription_services', col: 0, order: 0, type: 'source', label: 'Subscription services', value: 268, notes: ['+28% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'financial_technology_solutions', col: 0, order: 1, type: 'source', label: 'Financial technology solutions', value: 1323, notes: ['+22% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'hardware_professional_services', col: 0, order: 2, type: 'source', label: 'Hardware and professional services', value: 39, notes: ['(15%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1630, valueText: '$1,630M', notes: ['+22% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 447, notes: ['27% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 1183, valueText: '($1,183M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 110, notes: ['7% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 337, valueText: '($337M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 21, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 126, notes: ['6% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5, valueText: '($5M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 156, notes: ['10% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 97, notes: ['6% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 84, notes: ['5% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription_services', target: 'revenue', value: 268, width: 55, sourceWidth: 55, targetWidth: 55, y0: 470.5, y1: 653.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'financial_technology_solutions', target: 'revenue', value: 1323, width: 271, sourceWidth: 271, targetWidth: 271, y0: 769.5, y1: 816.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'hardware_professional_services', target: 'revenue', value: 39, width: 9, sourceWidth: 9, targetWidth: 8, y0: 1059.5, y1: 956, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 447, width: 92, sourceWidth: 92, targetWidth: 92, y0: 672, y1: 571, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1183, width: 242, sourceWidth: 242, targetWidth: 241, y0: 839, y1: 931.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 110, width: 23, sourceWidth: 23, targetWidth: 23, y0: 536.5, y1: 457.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 337, width: 69, sourceWidth: 69, targetWidth: 70, y0: 582.5, y1: 695, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 110, width: 22, sourceWidth: 22, targetWidth: 22, y0: 457, y1: 366, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 21, width: 3, sourceWidth: 3, targetWidth: 4, y0: 426.5, y1: 379, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2180, x1: 2234, c1x: 2200, c1y: 426.5, c2x: 2210, c2y: 379 } },
      { source: 'operating_profit', target: 'tax', value: 5, width: 1, sourceWidth: 1, targetWidth: 1, y0: 468.5, y1: 602.5, sourceOrder: 1, targetOrder: 0, curve: { x0: 1842, x1: 2234, c1x: 1960, c1y: 468.5, c2x: 2110, c2y: 602.5 } },
      { source: 'operating_expenses', target: 'sm', value: 156, width: 32, sourceWidth: 32, targetWidth: 31, y0: 676, y1: 759.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 97, width: 20, sourceWidth: 20, targetWidth: 20, y0: 702, y1: 951, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 84, width: 18, sourceWidth: 18, targetWidth: 17, y0: 721, y1: 1137.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Toast · 2026 财年第一季度',
        meta: {
          title: 'Toast 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1550,
        },
        annotationsSvg: annotations(true),
        nodes: {
          subscription_services: { label: '订阅服务', notes: ['同比 +28%'] },
          financial_technology_solutions: { label: '金融科技解决方案', notes: ['同比 +22%'] },
          hardware_professional_services: { label: '硬件与专业服务', notes: ['同比 (15%)'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 27%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 10%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 6%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 5%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

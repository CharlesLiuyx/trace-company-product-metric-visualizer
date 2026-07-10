/* Toast Q4 FY25 income statement ($M), measured from the processed reference. */
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
  const SCALE = 409 / 1633;

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
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="${x}" y="1157" width="${width}" height="150" rx="31" fill="${ORANGE_CARD}"/>
      <text x="${x + width / 2}" y="1209" text-anchor="middle" font-size="28" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1250" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1285" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(194, 221, 'ARR', '$2.0B', isZh ? '同比 +26%' : '+26% Y/Y')}
      ${kpiCard(436, 240, isZh ? '门店数' : 'Locations', '164,000', isZh ? '同比 +22%' : '+22% Y/Y')}
      <text x="226" y="1342" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = ${isZh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>
    </g>`;

  const labels = {
    subscription_services: {
      blocks: [
        block(402, 290, [line('$value', 39), line('+28% Y/Y', 29, { color: NOTE })]),
        block(306, 371, [line('Subscription', 40, { weight: 800 }), line('services', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    financial_technology_solutions: {
      blocks: [
        block(402, 514, [line('$value', 39), line('+22% Y/Y', 29, { color: NOTE })]),
        block(293, 695, [line('Financial', 40, { weight: 800 }), line('technology', 40, { weight: 800 }), line('solutions', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    hardware_professional_services: {
      blocks: [
        block(402, 1009, [line('$value', 39), line('(10%) Y/Y', 29, { color: NOTE })]),
        block(322, 980, [line('Hardware and', 40, { weight: 800 }), line('professional', 40, { weight: 800 }), line('services', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    revenue: { blocks: [block(869, 466, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+22% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1336, 311, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('26% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1336, 1135, [line('Cost of', 33, { weight: 800 }), line('revenue', 33, { weight: 800 }), line('$value', 34)], { lineGap: 14 })] },
    operating_profit: { blocks: [block(1804, 222, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('5% margin', 29, { color: NOTE }), line('+3pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1804, 733, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 12 })] },
    other: { blocks: [block(2140, 412, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 267, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('6% margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })])] },
    sm: { blocks: [block(RIGHT_LABEL_X, 666, [line('S&M', 31, { weight: 800 }), line('$value', 29), line('9% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { lineGap: 12 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 851, [line('R&D', 31, { weight: 800 }), line('$value', 29), line('6% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 13 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1032, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('5% of revenue', 28, { color: NOTE }), line('(1%) Y/Y', 28, { color: NOTE })], { lineGap: 12 })] },
    restructuring: { blocks: [block(RIGHT_LABEL_X, 1198, [line('Restructuring', 31, { weight: 800 }), line('$value', 29), line('0% of revenue', 28, { color: NOTE }), line('+0% Y/Y', 28, { color: NOTE })], { lineGap: 12 })] },
  };

  const zhLabels = {
    subscription_services: { blocks: [block(402, 296, [line('$value', 39), line('同比 +28%', 29, { color: NOTE })]), block(314, 399, [line('订阅服务', 40, { weight: 800 })], { anchor: 'end' })] },
    financial_technology_solutions: { blocks: [block(402, 520, [line('$value', 39), line('同比 +22%', 29, { color: NOTE })]), block(314, 742, [line('金融科技', 40, { weight: 800 }), line('解决方案', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    hardware_professional_services: { blocks: [block(402, 1014, [line('$value', 39), line('同比 (10%)', 29, { color: NOTE })]), block(314, 1028, [line('硬件与', 40, { weight: 800 }), line('专业服务', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 })] },
    revenue: { blocks: [block(869, 479, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +22%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1336, 328, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 26%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1336, 1135, [line('收入', 33, { weight: 800 }), line('成本', 33, { weight: 800 }), line('$value', 34)], { lineGap: 14 })] },
    operating_profit: { blocks: [block(1804, 232, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 5%', 29, { color: NOTE }), line('同比 +3 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1804, 742, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 12 })] },
    other: { blocks: [block(2140, 420, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 9 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 277, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 6%', 29, { color: NOTE }), line('同比 +4 个百分点', 29, { color: NOTE })])] },
    sm: { blocks: [block(RIGHT_LABEL_X, 666, [line('销售与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 9%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })], { lineGap: 12 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 851, [line('研发', 31, { weight: 800 }), line('$value', 29), line('占收入 6%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 13 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1032, [line('一般及行政', 31, { weight: 800 }), line('$value', 29), line('占收入 5%', 28, { color: NOTE }), line('同比 (1%)', 28, { color: NOTE })], { lineGap: 12 })] },
    restructuring: { blocks: [block(RIGHT_LABEL_X, 1198, [line('重组', 31, { weight: 800 }), line('$value', 29), line('占收入 0%', 28, { color: NOTE }), line('同比 +0%', 28, { color: NOTE })], { lineGap: 12 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'toast-q4-fy25',
    name: 'Toast · Q4 FY25',
    company: 'Toast',
    meta: {
      company: 'Toast',
      title: 'Toast Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/toast-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2068,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
        subscription_services: { x: 366, y: 388, width: 73, height: 65 },
        financial_technology_solutions: { x: 366, y: 614, width: 73, height: 333 },
        hardware_professional_services: { x: 366, y: 1111, width: 73, height: 10 },
        revenue: { x: 833, y: 617, width: 72, height: 409 },
        gross_profit: { x: 1300, y: 503, width: 73, height: 106 },
        cost_of_revenue: { x: 1300, y: 817, width: 73, height: 304 },
        operating_profit: { x: 1768, y: 407, width: 72, height: 21 },
        operating_expenses: { x: 1768, y: 636, width: 72, height: 85 },
        other: { x: 2103, y: 396, width: 72, height: 4 },
        net_profit: { x: 2234, y: 310, width: 73, height: 24 },
        sm: { x: 2234, y: 692, width: 73, height: 39 },
        rnd: { x: 2234, y: 881, width: 73, height: 25 },
        ga: { x: 2234, y: 1070, width: 73, height: 21 },
        restructuring: { x: 2234, y: 1248, width: 73, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'subscription_services', col: 0, order: 0, type: 'source', label: 'Subscription services', value: 256, notes: ['+28% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'financial_technology_solutions', col: 0, order: 1, type: 'source', label: 'Financial technology solutions', value: 1335, notes: ['+22% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'hardware_professional_services', col: 0, order: 2, type: 'source', label: 'Hardware and professional services', value: 43, notes: ['(10%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1633, valueText: '$1,633M', notes: ['+22% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 423, notes: ['26% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 1210, valueText: '($1,210M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 85, notes: ['5% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 338, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 16, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 101, notes: ['6% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'S&M', value: 153, notes: ['9% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 97, notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 84, notes: ['5% of revenue', '(1%) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 4, type: 'cost', label: 'Restructuring', value: 4, notes: ['0% of revenue', '+0% Y/Y'], color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription_services', target: 'revenue', value: 256, width: 65, sourceWidth: 65, targetWidth: 65, y0: 420.5, y1: 649.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'financial_technology_solutions', target: 'revenue', value: 1335, width: 333, sourceWidth: 333, targetWidth: 334, y0: 780.5, y1: 849, sourceOrder: 0, targetOrder: 1 },
      { source: 'hardware_professional_services', target: 'revenue', value: 43, width: 10, sourceWidth: 10, targetWidth: 10, y0: 1116, y1: 1021, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 423, width: 106, sourceWidth: 106, targetWidth: 106, y0: 670, y1: 556, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1210, width: 303, sourceWidth: 303, targetWidth: 304, y0: 874.5, y1: 969, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 85, width: 21, sourceWidth: 21, targetWidth: 21, y0: 513.5, y1: 417.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 338, width: 85, sourceWidth: 85, targetWidth: 85, y0: 566.5, y1: 678.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 85, width: 21, sourceWidth: 21, targetWidth: 20, y0: 417.5, y1: 320, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 16, width: 4, sourceWidth: 4, targetWidth: 4, y0: 398, y1: 332, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2175, x1: 2234, c1x: 2200, c1y: 398, c2x: 2210, c2y: 332 } },
      { source: 'operating_expenses', target: 'sm', value: 153, width: 39, sourceWidth: 39, targetWidth: 39, y0: 655.5, y1: 711.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 97, width: 24, sourceWidth: 24, targetWidth: 25, y0: 687, y1: 893.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 84, width: 21, sourceWidth: 21, targetWidth: 21, y0: 709.5, y1: 1080.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 4, width: 1, sourceWidth: 1, targetWidth: 3, y0: 720.5, y1: 1249.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Toast · 2025 财年第四季度',
        meta: {
          title: 'Toast 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1550,
        },
        annotationsSvg: annotations(true),
        nodes: {
          subscription_services: { label: '订阅服务', notes: ['同比 +28%'] },
          financial_technology_solutions: { label: '金融科技解决方案', notes: ['同比 +22%'] },
          hardware_professional_services: { label: '硬件与专业服务', notes: ['同比 (10%)'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 26%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +4 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 9%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 6%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 5%', '同比 (1%)'] },
          restructuring: { label: '重组', notes: ['占收入 0%', '同比 +0%'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

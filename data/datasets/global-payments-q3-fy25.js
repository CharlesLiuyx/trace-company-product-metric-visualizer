/* Global Payments Q3 FY25 income statement ($B), measured from the primary source. */
(function () {
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BLUE = '#044075';
  const BLUE_LABEL = '#044074';
  const BLUE_LINK = '#87a2ba';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_ALT_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2440;
  const SCALE = 298 / 2.007637;

  // Pure SVG text treatment of the company wordmark. The chart runtime never
  // embeds pixels from the reference image.
  const GLOBAL_PAYMENTS_WORDMARK = `
    <text x="0" y="118" fill="#003C71" font-family="Montserrat,Arial,sans-serif"
      font-size="116" font-weight="400" letter-spacing="-7"
      textLength="840" lengthAdjust="spacingAndGlyphs">globalpayments</text>`;

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

  const labelsEn = {
    americas: {
      blocks: [
        block(400, 354, [line('$value', 39), line('(2%) Y/Y', 29, { color: NOTE })]),
        block(207, 548, [line('Americas', 40, { weight: 800 })]),
      ],
    },
    europe: {
      blocks: [
        block(400, 782, [line('$value', 39), line('+9% Y/Y', 29, { color: NOTE })]),
        block(190, 881, [line('Europe', 40, { weight: 800 })]),
      ],
    },
    asia_pacific: {
      blocks: [
        block(400, 1007, [line('$value', 39), line('+9% Y/Y', 29, { color: NOTE })]),
        block(184, 1086, [line('Asia Pacific', 40, { weight: 800 })]),
      ],
    },
    revenue: {
      blocks: [block(1018, 488, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+0% Y/Y', 29, { color: NOTE })])],
    },
    operating_profit: {
      blocks: [block(1645, 309, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('39% margin', 29, { color: NOTE }), line('+17pp Y/Y', 29, { color: NOTE })])],
    },
    business_dispositions: {
      blocks: [block(1469, 697, [line('Business', 31, { weight: 800 }), line('dispositions', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })],
    },
    other: {
      blocks: [block(2102, 233, [line('Other', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })],
    },
    net_profit: {
      blocks: [block(RIGHT_LABEL_X, 330, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('33% margin', 29, { color: NOTE }), line('+16pp Y/Y', 29, { color: NOTE })])],
    },
    tax: {
      blocks: [block(RIGHT_LABEL_X, 667, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })],
    },
    interest: {
      blocks: [block(RIGHT_LABEL_X, 798, [line('Interest', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })],
    },
    sga: {
      blocks: [block(RIGHT_LABEL_X, 966, [line('SG&A', 31, { weight: 800 }), line('$value', 29), line('51% of revenue', 28, { color: NOTE }), line('(2pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })],
    },
    cost_of_service: {
      blocks: [block(RIGHT_LABEL_X, 1214, [line('Cost of service', 31, { weight: 800 }), line('$value', 29), line('28% of revenue', 28, { color: NOTE }), line('+2pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })],
    },
    operating_expenses: {
      blocks: [block(1645, 1110, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })],
    },
  };

  const labelsZh = {
    americas: { blocks: [block(400, 354, [line('$value', 39), line('同比下降 2%', 29, { color: NOTE })]), block(207, 548, [line('美洲', 40, { weight: 800 })])] },
    europe: { blocks: [block(400, 782, [line('$value', 39), line('同比 +9%', 29, { color: NOTE })]), block(190, 881, [line('欧洲', 40, { weight: 800 })])] },
    asia_pacific: { blocks: [block(400, 1007, [line('$value', 39), line('同比 +9%', 29, { color: NOTE })]), block(184, 1086, [line('亚太地区', 40, { weight: 800 })])] },
    revenue: { blocks: [block(1018, 488, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比持平', 29, { color: NOTE })])] },
    operating_profit: { blocks: [block(1645, 309, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 39%', 29, { color: NOTE }), line('同比 +17 个百分点', 29, { color: NOTE })])] },
    business_dispositions: { blocks: [block(1469, 697, [line('业务处置', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    other: { blocks: [block(2102, 233, [line('其他', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 330, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 33%', 29, { color: NOTE }), line('同比 +16 个百分点', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 667, [line('所得税', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    interest: { blocks: [block(RIGHT_LABEL_X, 798, [line('利息', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    sga: { blocks: [block(2480, 966, [line('销售、一般及行政费用', 31, { weight: 800 }), line('$value', 29), line('占收入 51%', 28, { color: NOTE }), line('同比下降 2 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    cost_of_service: { blocks: [block(RIGHT_LABEL_X, 1214, [line('服务成本', 31, { weight: 800 }), line('$value', 29), line('占收入 28%', 28, { color: NOTE }), line('同比 +2 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1645, 1110, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'global-payments-q3-fy25',
    name: 'Global Payments · Q3 FY25',
    company: 'Global Payments',
    meta: {
      company: 'Global Payments',
      title: 'Global Payments Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/global-payments-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2480,
      hidePeriodStamp: true,
      logoWidth: 840,
      logoHeight: 120,
      logoY: 304,
      logoViewBox: '0 0 840 120',
      logoSvg: GLOBAL_PAYMENTS_WORDMARK,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: [
          'revenue:left',
          'revenue:right',
          'operating_profit:left',
          'operating_profit:right',
          'operating_expenses:right',
          'net_profit:left',
        ],
      },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    layout: {
      scale: SCALE,
      nodes: {
        americas: { x: 364, y: 447, width: 71, height: 235 },
        europe: { x: 364, y: 876, width: 71, height: 50 },
        asia_pacific: { x: 364, y: 1100, width: 71, height: 9 },
        revenue: { x: 986, y: 632, width: 72, height: 298 },
        business_dispositions: { x: 1434, y: 633, width: 72, height: 51 },
        operating_profit: { x: 1609, y: 496, width: 72, height: 114 },
        operating_expenses: { x: 1609, y: 851, width: 72, height: 234 },
        other: { x: 2067, y: 317, width: 71, height: 29 },
        net_profit: { x: 2232, y: 348, width: 71, height: 98 },
        tax: { x: 2232, y: 690, width: 71, height: 27 },
        interest: { x: 2232, y: 827, width: 71, height: 15 },
        sga: { x: 2232, y: 959, width: 71, height: 149 },
        cost_of_service: { x: 2232, y: 1231, width: 71, height: 82 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'americas', col: 0, order: 0, type: 'source', label: 'Americas', value: 1.583629, notes: ['(2%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 0.351147, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'asia_pacific', col: 0, order: 2, type: 'source', label: 'Asia Pacific', value: 0.072861, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.007637, notes: ['+0% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'business_dispositions', col: 2, order: 1, type: 'profit', label: 'Business dispositions', value: 0.343891, color: GREEN, labelColor: GREEN_ALT_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.778014, notes: ['39% margin', '+17pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 1.573514, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.225663, color: GREEN, labelColor: GREEN_ALT_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.660595, notes: ['33% margin', '+16pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.199309, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.143773, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.016832, notes: ['51% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_of_service', col: 5, order: 4, type: 'cost', label: 'Cost of service', value: 0.556682, notes: ['28% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'americas', target: 'revenue', value: 1.583629, width: 235, sourceWidth: 235, targetWidth: 235, y0: 564.5, y1: 749.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'europe', target: 'revenue', value: 0.351147, width: 50, sourceWidth: 50, targetWidth: 54, y0: 901, y1: 894, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'asia_pacific', target: 'revenue', value: 0.072861, width: 9, sourceWidth: 9, targetWidth: 9, y0: 1104.5, y1: 925.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.434123, width: 63, sourceWidth: 65, targetWidth: 65, y0: 664.5, y1: 528.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1.573514, width: 233, sourceWidth: 233, targetWidth: 234, y0: 813.5, y1: 968, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'business_dispositions', target: 'operating_profit', value: 0.343891, width: 51, sourceWidth: 51, targetWidth: 49, y0: 658.5, y1: 585.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.434932, width: 65, sourceWidth: 67, targetWidth: 67, y0: 529.5, y1: 412.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.199309, width: 28, sourceWidth: 30, targetWidth: 27, y0: 578, y1: 703.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.143773, width: 17, sourceWidth: 17, targetWidth: 15, y0: 601.5, y1: 834.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.225663, width: 29, sourceWidth: 29, targetWidth: 31, y0: 331.5, y1: 363.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.016832, width: 150, sourceWidth: 153, targetWidth: 149, y0: 927.5, y1: 1033.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'cost_of_service', value: 0.556682, width: 81, sourceWidth: 81, targetWidth: 82, y0: 1044.5, y1: 1272, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Global Payments · 2025 财年第三季度',
        meta: {
          title: 'Global Payments 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        nodes: {
          americas: { label: '美洲', notes: ['同比下降 2%'] },
          europe: { label: '欧洲', notes: ['同比 +9%'] },
          asia_pacific: { label: '亚太地区', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比持平'] },
          business_dispositions: { label: '业务处置' },
          operating_profit: { label: '营业利润', notes: ['利润率 39%', '同比 +17 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 33%', '同比 +16 个百分点'] },
          tax: { label: '所得税' },
          interest: { label: '利息' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 51%', '同比下降 2 个百分点'] },
          cost_of_service: { label: '服务成本', notes: ['占收入 28%', '同比 +2 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

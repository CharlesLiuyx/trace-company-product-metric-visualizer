/* Axon Q1 FY26 income statement ($M), measured from the active reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GREY_LINK = '#909090';
  const GREEN = '#2aa32a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce99';
  const RED = '#d90000';
  const RED_LABEL = '#981400';
  const RED_LINK = '#df7f80';
  const RIGHT_LABEL_X = 2443;
  const NET_LABEL_X = 2390;

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

  const labels = {
    taser: {
      blocks: [block(463, 392, [line('$value', 39), line('+19% Y/Y', 29, { color: NOTE })], { lineGap: 10 })],
    },
    personal_sensors: {
      blocks: [
        block(463, 602, [line('$value', 39), line('+23% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
        block(58, 700, [line('Personal Sensors', 40, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    platform_solutions: {
      blocks: [
        block(463, 756, [line('$value', 39), line('+95% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
        block(386, 818, [line('Platform', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
      ],
    },
    connected_devices: {
      blocks: [block(836, 410, [line('Connected', 40, { weight: 800 }), line('Devices', 40, { weight: 800 }), line('$value', 39), line('+33% Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    software_services: {
      blocks: [block(587, 1013, [line('Software & Services', 40, { weight: 800 }), line('$value', 39), line('+35% Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    revenue: {
      blocks: [block(1211, 548, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+34% Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    gross_profit: {
      blocks: [block(1584, 429, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('59% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    cost_of_revenue: {
      blocks: [block(1584, 1134, [line('Cost of', 38, { weight: 800 }), line('revenue', 38, { weight: 800 }), line('$value', 38)], { lineGap: 8 })],
    },
    operating_profit: {
      blocks: [block(1955, 330, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('4% margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    other: {
      blocks: [block(2203, 595, [line('Other', 40, { weight: 800 }), line('$value', 39)], { lineGap: 9 })],
    },
    net_profit: {
      blocks: [block(NET_LABEL_X, 411, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('152% margin', 29, { color: NOTE }), line('+60pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 9 })],
    },
    operating_expenses: {
      blocks: [block(1957, 908, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)], { lineGap: 9 })],
    },
    sga: {
      blocks: [block(RIGHT_LABEL_X, 831, [line('SG&A', 31, { weight: 800 }), line('$value', 31), line('32% of revenue', 29, { color: NOTE }), line('(5pp) Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 1133, [line('R&D', 31, { weight: 800 }), line('$value', 31), line('23% of revenue', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })],
    },
    products: {
      blocks: [block(1900, 1088, [line('Products', 31, { weight: 800 }), line('$value', 31), line('49% gross margin', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })],
    },
    services: {
      blocks: [block(1900, 1307, [line('Services', 31, { weight: 800 }), line('$value', 31), line('72% gross margin', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })],
    },
  };

  const zhLabels = {
    taser: { blocks: [block(463, 392, [line('$value', 39), line('同比 +19%', 29, { color: NOTE })], { lineGap: 10 })] },
    personal_sensors: {
      blocks: [
        block(463, 602, [line('$value', 39), line('同比 +23%', 29, { color: NOTE })], { lineGap: 10 }),
        block(58, 700, [line('个人传感器', 39, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    platform_solutions: {
      blocks: [
        block(463, 756, [line('$value', 39), line('同比 +95%', 29, { color: NOTE })], { lineGap: 10 }),
        block(386, 830, [line('平台解决方案', 36, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    connected_devices: { blocks: [block(836, 424, [line('联网设备', 40, { weight: 800 }), line('$value', 39), line('同比 +33%', 29, { color: NOTE })], { lineGap: 10 })] },
    software_services: { blocks: [block(587, 1026, [line('软件与服务', 40, { weight: 800 }), line('$value', 39), line('同比 +35%', 29, { color: NOTE })], { lineGap: 10 })] },
    revenue: { blocks: [block(1211, 548, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +34%', 29, { color: NOTE })], { lineGap: 10 })] },
    gross_profit: { blocks: [block(1584, 429, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 59%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 10 })] },
    cost_of_revenue: { blocks: [block(1584, 1134, [line('收入', 38, { weight: 800 }), line('成本', 38, { weight: 800 }), line('$value', 38)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1955, 330, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 4%', 29, { color: NOTE }), line('同比 +5 个百分点', 29, { color: NOTE })], { lineGap: 10 })] },
    other: { blocks: [block(2203, 595, [line('其他', 40, { weight: 800 }), line('$value', 39)], { lineGap: 10 })] },
    net_profit: { blocks: [block(NET_LABEL_X, 411, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 152%', 29, { color: NOTE }), line('同比 +60 个百分点', 29, { color: NOTE })], { anchor: 'start', lineGap: 10 })] },
    operating_expenses: { blocks: [block(1957, 921, [line('运营费用', 40, { weight: 800 }), line('$value', 39)], { lineGap: 10 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 831, [line('销售、一般及', 30, { weight: 800 }), line('行政费用', 30, { weight: 800 }), line('$value', 31), line('占收入 32%', 29, { color: NOTE }), line('同比 (5 个百分点)', 29, { color: NOTE })], { anchor: 'start', lineGap: 7 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 1133, [line('研发', 31, { weight: 800 }), line('$value', 31), line('占收入 23%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    products: { blocks: [block(1900, 1098, [line('产品', 31, { weight: 800 }), line('$value', 31), line('毛利率 49%', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    services: { blocks: [block(1900, 1317, [line('服务', 31, { weight: 800 }), line('$value', 31), line('毛利率 72%', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'axon-q1-fy26',
    name: 'Axon · Q1 FY26',
    company: 'Axon',
    meta: {
      company: 'Axon',
      title: 'AXON Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/axon-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2092,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    rasterAnnotations: [
      { key: 'axon-business-personal-sensors-taser-cluster-q4-fy25', href: 'data/assets/raster-annotations/axon/business-personal-sensors-taser-cluster-q4-fy25.png', x: 58, y: 449, width: 340, height: 128 },
      { key: 'axon-company-mark-q4-fy25', href: 'data/assets/raster-annotations/axon/company-mark-q4-fy25.png', x: 1098, y: 292, width: 219, height: 197 },
      { key: 'axon-business-platform-solutions-evidence-wordmark-q4-fy25', href: 'data/assets/raster-annotations/axon/business-platform-solutions-evidence-wordmark-q4-fy25.png', x: 418, y: 970, width: 351, height: 31 },
    ],
    layout: {
      scale: 1,
      nodes: {
        taser: { x: 427, y: 482, width: 72, height: 93 },
        personal_sensors: { x: 427, y: 692, width: 72, height: 45 },
        platform_solutions: { x: 427, y: 846, width: 72, height: 44 },
        connected_devices: { x: 800, y: 604, width: 72, height: 183 },
        software_services: { x: 800, y: 979, width: 72, height: 143 },
        revenue: { x: 1174, y: 689, width: 72, height: 325 },
        gross_profit: { x: 1546, y: 607, width: 72, height: 192 },
        cost_of_revenue: { x: 1548, y: 984, width: 72, height: 134 },
        operating_profit: { x: 1919, y: 508, width: 72, height: 12 },
        operating_expenses: { x: 1921, y: 714, width: 72, height: 181 },
        products: { x: 1756, y: 1098, width: 72, height: 94 },
        services: { x: 1756, y: 1301, width: 72, height: 40 },
        other: { x: 2167, y: 498, width: 72, height: 56 },
        net_profit: { x: 2295, y: 424, width: 72, height: 69 },
        sga: { x: 2295, y: 846, width: 72, height: 105 },
        rnd: { x: 2295, y: 1140, width: 72, height: 77 },
      },
      labels,
    },
    nodes: [
      { id: 'taser', col: 0, order: 0, type: 'source', label: 'TASER', value: 233, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'personal_sensors', col: 0, order: 1, type: 'source', label: 'Personal Sensors', value: 109, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'platform_solutions', col: 0, order: 2, type: 'source', label: 'Platform Solutions', value: 111, notes: ['+95% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'connected_devices', col: 1, order: 0, type: 'source', label: ['Connected', 'Devices'], value: 453, notes: ['+33% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'software_services', col: 1, order: 1, type: 'source', label: 'Software & Services', value: 355, notes: ['+35% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 807, notes: ['+34% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 477, notes: ['59% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 330, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'products', col: 4, order: 1, type: 'cost', label: 'Products', value: 232, notes: ['49% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'services', col: 4, order: 2, type: 'cost', label: 'Services', value: 98, notes: ['72% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 29, notes: ['4% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 448, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 0, type: 'profit', label: 'Other', value: 140, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 169, notes: ['152% margin', '+60pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sga', col: 7, order: 1, type: 'cost', label: 'SG&A', value: 259, notes: ['32% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 2, type: 'cost', label: 'R&D', value: 189, notes: ['23% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'taser', target: 'connected_devices', value: 233, sourceWidth: 93, targetWidth: 93, y0: 528.5, y1: 650.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'personal_sensors', target: 'connected_devices', value: 109, sourceWidth: 44, targetWidth: 44, y0: 714.5, y1: 719, sourceOrder: 0, targetOrder: 1 },
      { source: 'platform_solutions', target: 'connected_devices', value: 111, sourceWidth: 44, targetWidth: 46, y0: 868, y1: 764, sourceOrder: 0, targetOrder: 2 },
      { source: 'connected_devices', target: 'revenue', value: 453, sourceWidth: 181, targetWidth: 181, y0: 695.5, y1: 779.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'software_services', target: 'revenue', value: 355, sourceWidth: 142, targetWidth: 144, y0: 1050.5, y1: 942, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 477, sourceWidth: 191, targetWidth: 191, y0: 784.5, y1: 702.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 330, sourceWidth: 134, targetWidth: 132, y0: 947, y1: 1051, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 29, sourceWidth: 12, targetWidth: 12, y0: 614, y1: 514, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 448, sourceWidth: 179, targetWidth: 179, y0: 708.5, y1: 804.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 29, sourceWidth: 12, targetWidth: 12, y0: 514, y1: 430, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 140, sourceWidth: 56, targetWidth: 56, y0: 526, y1: 464, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 259, sourceWidth: 104, targetWidth: 104, y0: 766, y1: 898, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 189, sourceWidth: 76, targetWidth: 76, y0: 856, y1: 1178.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'products', value: 232, sourceWidth: 93, targetWidth: 93, y0: 1030.5, y1: 1145, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'services', value: 98, sourceWidth: 39, targetWidth: 39, y0: 1096.5, y1: 1321, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Axon · 2026 财年第一季度',
        meta: {
          title: 'Axon 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 108,
          titleTextLength: 1670,
        },
        nodes: {
          taser: { label: 'TASER', notes: ['同比 +19%'] },
          personal_sensors: { label: '个人传感器', notes: ['同比 +23%'] },
          platform_solutions: { label: '平台解决方案', notes: ['同比 +95%'] },
          connected_devices: { label: '联网设备', notes: ['同比 +33%'] },
          software_services: { label: '软件与服务', notes: ['同比 +35%'] },
          revenue: { label: '收入', notes: ['同比 +34%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +5 个百分点'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 152%', '同比 +60 个百分点'] },
          operating_expenses: { label: '运营费用' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 32%', '同比 (5 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 23%', '同比 (2 个百分点)'] },
          products: { label: '产品', notes: ['毛利率 49%'] },
          services: { label: '服务', notes: ['毛利率 72%'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

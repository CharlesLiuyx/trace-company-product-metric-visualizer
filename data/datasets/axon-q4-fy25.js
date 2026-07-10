/* Axon Q4 FY25 income statement ($M), measured from the processed reference. */
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
  const RIGHT_LABEL_X = 2486;

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
      blocks: [block(463, 339, [line('$value', 39), line('+32% Y/Y', 29, { color: NOTE })], { lineGap: 10 })],
    },
    personal_sensors: {
      blocks: [
        block(463, 604, [line('$value', 39), line('+28% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
        block(58, 700, [line('Personal Sensors', 40, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    platform_solutions: {
      blocks: [
        block(463, 790, [line('$value', 39), line('+81% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
        block(386, 851, [line('Platform', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
      ],
    },
    connected_devices: {
      blocks: [block(836, 377, [line('Connected', 40, { weight: 800 }), line('Devices', 40, { weight: 800 }), line('$value', 39), line('+38% Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    software_services: {
      blocks: [block(587, 1065, [line('Software & Services', 40, { weight: 800 }), line('$value', 39), line('+40% Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    revenue: {
      blocks: [block(1211, 529, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+39% Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    gross_profit: {
      blocks: [block(1584, 377, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('58% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })],
    },
    cost_of_revenue: {
      blocks: [block(1584, 1237, [line('Cost of', 38, { weight: 800 }), line('revenue', 38, { weight: 800 }), line('$value', 38)], { lineGap: 8 })],
    },
    operating_loss: {
      blocks: [block(1789, 925, [line('Operating loss', 40, { weight: 800 }), line('$value', 39), line('(6%) margin', 29, { color: NOTE }), line('(4pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })],
    },
    operating_expenses: {
      blocks: [block(1957, 500, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)], { lineGap: 9 })],
    },
    sga: {
      blocks: [block(RIGHT_LABEL_X, 570, [line('SG&A', 31, { weight: 800 }), line('$value', 31), line('40% of revenue', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 933, [line('R&D', 31, { weight: 800 }), line('$value', 31), line('24% of revenue', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })],
    },
    products: {
      blocks: [block(2019, 1137, [line('Products', 31, { weight: 800 }), line('$value', 31), line('47% gross margin', 29, { color: NOTE })], { lineGap: 8 })],
    },
    services: {
      blocks: [block(2019, 1270, [line('Services', 31, { weight: 800 }), line('$value', 31), line('73% gross margin', 29, { color: NOTE })], { lineGap: 8 })],
    },
  };

  const zhLabels = {
    taser: {
      blocks: [block(463, 339, [line('$value', 39), line('同比 +32%', 29, { color: NOTE })], { lineGap: 10 })],
    },
    personal_sensors: {
      blocks: [
        block(463, 604, [line('$value', 39), line('同比 +28%', 29, { color: NOTE })], { lineGap: 10 }),
        block(58, 700, [line('个人传感器', 39, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    platform_solutions: {
      blocks: [
        block(463, 790, [line('$value', 39), line('同比 +81%', 29, { color: NOTE })], { lineGap: 10 }),
        block(386, 865, [line('平台解决方案', 36, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    connected_devices: {
      blocks: [block(836, 391, [line('联网设备', 40, { weight: 800 }), line('$value', 39), line('同比 +38%', 29, { color: NOTE })], { lineGap: 10 })],
    },
    software_services: {
      blocks: [block(587, 1078, [line('软件与服务', 40, { weight: 800 }), line('$value', 39), line('同比 +40%', 29, { color: NOTE })], { lineGap: 10 })],
    },
    revenue: {
      blocks: [block(1211, 529, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +39%', 29, { color: NOTE })], { lineGap: 10 })],
    },
    gross_profit: {
      blocks: [block(1584, 379, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 58%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })], { lineGap: 10 })],
    },
    cost_of_revenue: {
      blocks: [block(1584, 1237, [line('收入', 38, { weight: 800 }), line('成本', 38, { weight: 800 }), line('$value', 38)], { lineGap: 8 })],
    },
    operating_loss: {
      blocks: [block(1789, 936, [line('营业亏损', 40, { weight: 800 }), line('$value', 39), line('利润率 (6%)', 29, { color: NOTE }), line('同比 (4 个百分点)', 29, { color: NOTE })], { lineGap: 9 })],
    },
    operating_expenses: {
      blocks: [block(1957, 526, [line('运营费用', 40, { weight: 800 }), line('$value', 39)], { lineGap: 10 })],
    },
    sga: {
      blocks: [block(RIGHT_LABEL_X, 570, [line('销售、一般及', 30, { weight: 800 }), line('行政费用', 30, { weight: 800 }), line('$value', 31), line('占收入 40%', 29, { color: NOTE }), line('同比 +0 个百分点', 29, { color: NOTE })], { lineGap: 7 })],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 944, [line('研发', 31, { weight: 800 }), line('$value', 31), line('占收入 24%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { lineGap: 8 })],
    },
    products: {
      blocks: [block(2019, 1147, [line('产品', 31, { weight: 800 }), line('$value', 31), line('毛利率 47%', 29, { color: NOTE })], { lineGap: 8 })],
    },
    services: {
      blocks: [block(2019, 1280, [line('服务', 31, { weight: 800 }), line('$value', 31), line('毛利率 73%', 29, { color: NOTE })], { lineGap: 8 })],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'axon-q4-fy25',
    name: 'Axon · Q4 FY25',
    company: 'Axon',
    meta: {
      company: 'Axon',
      title: 'AXON Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/axon-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2092,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      { key: 'axon-business-personal-sensors-taser-cluster-q4-fy25', href: 'data/assets/raster-annotations/axon/business-personal-sensors-taser-cluster-q4-fy25.png', x: 58, y: 416, width: 340, height: 128 },
      { key: 'axon-company-mark-q4-fy25', href: 'data/assets/raster-annotations/axon/company-mark-q4-fy25.png', x: 1088, y: 307, width: 219, height: 197 },
      { key: 'axon-business-platform-solutions-evidence-wordmark-q4-fy25', href: 'data/assets/raster-annotations/axon/business-platform-solutions-evidence-wordmark-q4-fy25.png', x: 418, y: 1021, width: 351, height: 31 },
    ],
    layout: {
      scale: 1,
      nodes: {
        taser: { x: 426, y: 428, width: 74, height: 129 },
        personal_sensors: { x: 426, y: 694, width: 74, height: 53 },
        platform_solutions: { x: 426, y: 880, width: 74, height: 39 },
        connected_devices: { x: 800, y: 572, width: 72, height: 219 },
        software_services: { x: 800, y: 1024, width: 72, height: 163 },
        revenue: { x: 1175, y: 669, width: 72, height: 386 },
        gross_profit: { x: 1548, y: 558, width: 72, height: 223 },
        cost_of_revenue: { x: 1548, y: 1061, width: 72, height: 163 },
        operating_loss: { x: 1753, y: 881, width: 72, height: 25 },
        operating_expenses: { x: 1921, y: 653, width: 72, height: 247 },
        sga: { x: 2296, y: 559, width: 72, height: 153 },
        rnd: { x: 2296, y: 931, width: 72, height: 94 },
        products: { x: 1827, y: 1125, width: 72, height: 116 },
        services: { x: 1827, y: 1284, width: 72, height: 47 },
      },
      labels,
    },
    nodes: [
      { id: 'taser', col: 0, order: 0, type: 'source', label: 'TASER', value: 264, notes: ['+32% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'personal_sensors', col: 0, order: 1, type: 'source', label: 'Personal Sensors', value: 109, notes: ['+28% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'platform_solutions', col: 0, order: 2, type: 'source', label: 'Platform Solutions', value: 81, notes: ['+81% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'connected_devices', col: 1, order: 0, type: 'source', label: ['Connected', 'Devices'], value: 454, notes: ['+38% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'software_services', col: 1, order: 1, type: 'source', label: 'Software & Services', value: 343, notes: ['+40% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 797, notes: ['+39% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 461, notes: ['58% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 335, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: 'Operating loss', value: -50, notes: ['(6%) margin', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 511, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 0, type: 'cost', label: 'SG&A', value: 317, notes: ['40% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 1, type: 'cost', label: 'R&D', value: 194, notes: ['24% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'products', col: 5, order: 1, type: 'cost', label: 'Products', value: 242, notes: ['47% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'services', col: 5, order: 2, type: 'cost', label: 'Services', value: 93, notes: ['73% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'taser', target: 'connected_devices', value: 264, sourceWidth: 129, targetWidth: 128, y0: 492.5, y1: 636, sourceOrder: 0, targetOrder: 0 },
      { source: 'personal_sensors', target: 'connected_devices', value: 109, sourceWidth: 53, targetWidth: 53, y0: 720.5, y1: 726.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'platform_solutions', target: 'connected_devices', value: 81, sourceWidth: 39, targetWidth: 38, y0: 899.5, y1: 772, sourceOrder: 0, targetOrder: 2 },
      { source: 'connected_devices', target: 'revenue', value: 454, sourceWidth: 219, targetWidth: 222, y0: 681.5, y1: 780, sourceOrder: 0, targetOrder: 0 },
      { source: 'software_services', target: 'revenue', value: 343, sourceWidth: 163, targetWidth: 164, y0: 1105.5, y1: 972, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 461, sourceWidth: 222, targetWidth: 223, y0: 780, y1: 669.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 335, sourceWidth: 164, targetWidth: 163, y0: 972, y1: 1142.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 461, sourceWidth: 223, targetWidth: 222, y0: 669.5, y1: 764, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 50, sourceWidth: 25, targetWidth: 25,
        y0: 893.5, y1: 887.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        curve: { x0: 1825, x1: 1921, c1x: 1860, c1y: 893.5, c2x: 1884, c2y: 887.5 },
      },
      { source: 'operating_expenses', target: 'sga', value: 317, sourceWidth: 153, targetWidth: 153, y0: 729.5, y1: 635.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 194, sourceWidth: 94, targetWidth: 94, y0: 853, y1: 978, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'products', value: 242, sourceWidth: 116, targetWidth: 116, y0: 1119, y1: 1183, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'services', value: 93, sourceWidth: 47, targetWidth: 44, y0: 1200.5, y1: 1306, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Axon · 2025 财年第四季度',
        meta: {
          title: 'Axon 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 108,
          titleTextLength: 1670,
        },
        nodes: {
          taser: { label: 'TASER', notes: ['同比 +32%'] },
          personal_sensors: { label: '个人传感器', notes: ['同比 +28%'] },
          platform_solutions: { label: '平台解决方案', notes: ['同比 +81%'] },
          connected_devices: { label: '联网设备', notes: ['同比 +38%'] },
          software_services: { label: '软件与服务', notes: ['同比 +40%'] },
          revenue: { label: '收入', notes: ['同比 +39%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (6%)', '同比 (4 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 40%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 +1 个百分点'] },
          products: { label: '产品', notes: ['毛利率 47%'] },
          services: { label: '服务', notes: ['毛利率 73%'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

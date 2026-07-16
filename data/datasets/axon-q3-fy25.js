/* Axon Q3 FY25 income statement ($M), measured from the active reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GREY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
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
  const operatingLossAnnotation = (zh) => `
    <g class="sankey-interactive-annotation" data-node="operating_loss"
       font-family="Noto Sans,Arial,sans-serif" text-anchor="middle">
      <rect x="1665" y="890" width="335" height="190" fill="transparent"/>
      <text x="1831" y="${zh ? 944 : 933}" font-size="40" font-weight="800" fill="${RED_LABEL}">${zh ? '营业亏损' : 'Operating loss'}</text>
      <text x="1831" y="${zh ? 996 : 985}" font-size="39" font-weight="400" fill="${RED_LABEL}">($2M)</text>
      <text x="1831" y="${zh ? 1041 : 1027}" font-size="29" font-weight="400" fill="${NOTE}">${zh ? '利润率 (0%)' : '(0%) margin'}</text>
      <text x="1831" y="${zh ? 1084 : 1069}" font-size="29" font-weight="400" fill="${NOTE}">${zh ? '同比 (5 个百分点)' : '(5pp) Y/Y'}</text>
    </g>`;

  const labels = {
    taser: {
      blocks: [block(466, 364, [line('$value', 39), line('+17% Y/Y', 29, { color: NOTE })], { lineGap: 10 })],
    },
    personal_sensors: {
      blocks: [
        block(466, 598, [line('$value', 39), line('+20% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
        block(58, 694, [line('Personal Sensors', 40, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    platform_solutions: {
      blocks: [
        block(459, 767, [line('$value', 39), line('+71% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
        block(376, 831, [line('Platform', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 })], { anchor: 'end', lineGap: 13 }),
      ],
    },
    connected_devices: {
      blocks: [block(829, 381, [line('Connected', 40, { weight: 800 }), line('Devices', 40, { weight: 800 }), line('$value', 39), line('+24% Y/Y', 29, { color: NOTE })], { lineGap: 13 })],
    },
    software_services: {
      blocks: [block(590, 1004, [line('Software & Services', 40, { weight: 800 }), line('$value', 39), line('+41% Y/Y', 29, { color: NOTE })], { lineGap: 13 })],
    },
    revenue: {
      blocks: [block(1209, 538, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+31% Y/Y', 29, { color: NOTE })], { lineGap: 13 })],
    },
    gross_profit: {
      blocks: [block(1583, 393, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('60% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 13 })],
    },
    cost_of_revenue: {
      blocks: [block(1582, 1146, [line('Cost of', 38, { weight: 800 }), line('revenue', 38, { weight: 800 }), line('$value', 38)], { lineGap: 9 })],
    },
    operating_loss: {
      blocks: [],
    },
    operating_expenses: {
      blocks: [block(1956, 496, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)], { lineGap: 7 })],
    },
    sga: {
      blocks: [block(RIGHT_LABEL_X, 535, [line('SG&A', 31, { weight: 800 }), line('$value', 31), line('36% of revenue', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { lineGap: 11 })],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 861, [line('R&D', 31, { weight: 800 }), line('$value', 31), line('25% of revenue', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })], { lineGap: 11 })],
    },
    products: {
      blocks: [block(1966, 1102, [line('Products', 31, { weight: 800 }), line('$value', 31), line('50% gross margin', 29, { color: NOTE })], { lineGap: 11 })],
    },
    services: {
      blocks: [block(1966, 1261, [line('Services', 31, { weight: 800 }), line('$value', 31), line('74% gross margin', 29, { color: NOTE })], { lineGap: 11 })],
    },
  };

  const zhLabels = {
    taser: {
      blocks: [block(466, 364, [line('$value', 39), line('同比 +17%', 29, { color: NOTE })], { lineGap: 10 })],
    },
    personal_sensors: {
      blocks: [
        block(466, 598, [line('$value', 39), line('同比 +20%', 29, { color: NOTE })], { lineGap: 10 }),
        block(58, 694, [line('个人传感器', 39, { weight: 800 })], { anchor: 'start' }),
      ],
    },
    platform_solutions: {
      blocks: [
        block(459, 767, [line('$value', 39), line('同比 +71%', 29, { color: NOTE })], { lineGap: 10 }),
        block(376, 858, [line('平台解决方案', 36, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    connected_devices: {
      blocks: [block(829, 395, [line('联网设备', 40, { weight: 800 }), line('$value', 39), line('同比 +24%', 29, { color: NOTE })], { lineGap: 14 })],
    },
    software_services: {
      blocks: [block(590, 1017, [line('软件与服务', 40, { weight: 800 }), line('$value', 39), line('同比 +41%', 29, { color: NOTE })], { lineGap: 14 })],
    },
    revenue: {
      blocks: [block(1209, 538, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +31%', 29, { color: NOTE })], { lineGap: 14 })],
    },
    gross_profit: {
      blocks: [block(1583, 389, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 60%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 14 })],
    },
    cost_of_revenue: {
      blocks: [block(1582, 1146, [line('收入', 38, { weight: 800 }), line('成本', 38, { weight: 800 }), line('$value', 38)], { lineGap: 9 })],
    },
    operating_loss: {
      blocks: [],
    },
    operating_expenses: {
      blocks: [block(1956, 518, [line('运营费用', 40, { weight: 800 }), line('$value', 39)], { lineGap: 10 })],
    },
    sga: {
      blocks: [block(RIGHT_LABEL_X, 535, [line('销售、一般及', 30, { weight: 800 }), line('行政费用', 30, { weight: 800 }), line('$value', 31), line('占收入 36%', 29, { color: NOTE }), line('同比 +0 个百分点', 29, { color: NOTE })], { lineGap: 10 })],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 872, [line('研发', 31, { weight: 800 }), line('$value', 31), line('占收入 25%', 29, { color: NOTE }), line('同比 +4 个百分点', 29, { color: NOTE })], { lineGap: 11 })],
    },
    products: {
      blocks: [block(1966, 1112, [line('产品', 31, { weight: 800 }), line('$value', 31), line('毛利率 50%', 29, { color: NOTE })], { lineGap: 11 })],
    },
    services: {
      blocks: [block(1966, 1271, [line('服务', 31, { weight: 800 }), line('$value', 31), line('毛利率 74%', 29, { color: NOTE })], { lineGap: 11 })],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'axon-q3-fy25',
    name: 'Axon · Q3 FY25',
    company: 'Axon',
    meta: {
      company: 'Axon',
      title: 'AXON Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/axon-q3-fy25.png', width: 2667, height: 1500 },
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
    annotationsSvg: operatingLossAnnotation(false),
    rasterAnnotations: [
      { key: 'axon-business-personal-sensors-taser-cluster-q4-fy25', href: 'data/assets/raster-annotations/axon/business-personal-sensors-taser-cluster-q4-fy25.png', x: 58, y: 450, width: 340, height: 128 },
      { key: 'axon-company-mark-q4-fy25', href: 'data/assets/raster-annotations/axon/company-mark-q4-fy25.png', x: 1093, y: 305, width: 219, height: 197 },
      { key: 'axon-business-platform-solutions-evidence-wordmark-q4-fy25', href: 'data/assets/raster-annotations/axon/business-platform-solutions-evidence-wordmark-q4-fy25.png', x: 418, y: 972, width: 351, height: 31 },
    ],
    layout: {
      scale: 1,
      nodes: {
        taser: { x: 427, y: 461, width: 72, height: 113 },
        personal_sensors: { x: 427, y: 695, width: 72, height: 51 },
        platform_solutions: { x: 427, y: 866, width: 72, height: 28 },
        connected_devices: { x: 800, y: 585, width: 72, height: 191 },
        software_services: { x: 800, y: 988, width: 72, height: 143 },
        revenue: { x: 1174, y: 689, width: 72, height: 335 },
        gross_profit: { x: 1548, y: 580, width: 72, height: 202 },
        cost_of_revenue: { x: 1548, y: 998, width: 72, height: 133 },
        operating_loss: { x: 1717, y: 877, width: 72, height: 2 },
        operating_expenses: { x: 1922, y: 645, width: 72, height: 204 },
        sga: { x: 2295, y: 543, width: 72, height: 118 },
        rnd: { x: 2295, y: 868, width: 72, height: 83 },
        products: { x: 1775, y: 1096, width: 72, height: 95 },
        services: { x: 1775, y: 1288, width: 72, height: 39 },
      },
      labels,
    },
    nodes: [
      { id: 'taser', col: 0, order: 0, type: 'source', label: 'TASER', value: 238, notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'personal_sensors', col: 0, order: 1, type: 'source', label: 'Personal Sensors', value: 107, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'platform_solutions', col: 0, order: 2, type: 'source', label: 'Platform Solutions', value: 61, notes: ['+71% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'connected_devices', col: 1, order: 0, type: 'source', label: ['Connected', 'Devices'], value: 405, notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'software_services', col: 1, order: 1, type: 'source', label: 'Software & Services', value: 305, notes: ['+41% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 711, notes: ['+31% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 427, notes: ['60% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 283, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: 'Operating loss', value: -2, notes: ['(0%) margin', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'products', col: 5, order: 1, type: 'cost', label: 'Products', value: 203, notes: ['50% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'services', col: 5, order: 2, type: 'cost', label: 'Services', value: 80, notes: ['74% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 429, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 7, order: 0, type: 'cost', label: 'SG&A', value: 253, notes: ['36% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 1, type: 'cost', label: 'R&D', value: 177, notes: ['25% of revenue', '+4pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'taser', target: 'connected_devices', value: 238, sourceWidth: 111, targetWidth: 111, y0: 517.5, y1: 640.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'personal_sensors', target: 'connected_devices', value: 107, sourceWidth: 49, targetWidth: 50, y0: 720.5, y1: 721, sourceOrder: 0, targetOrder: 1 },
      { source: 'platform_solutions', target: 'connected_devices', value: 61, sourceWidth: 27, targetWidth: 30, y0: 879.5, y1: 761, sourceOrder: 0, targetOrder: 2 },
      { source: 'connected_devices', target: 'revenue', value: 405, sourceWidth: 189, targetWidth: 190, y0: 680.5, y1: 784, sourceOrder: 0, targetOrder: 0 },
      { source: 'software_services', target: 'revenue', value: 305, sourceWidth: 142, targetWidth: 145, y0: 1059.5, y1: 951.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 427, sourceWidth: 202, targetWidth: 201, y0: 790, y1: 681.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 283, sourceWidth: 133, targetWidth: 131, y0: 957.5, y1: 1064.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 427, sourceWidth: 200, targetWidth: 200, y0: 681, y1: 746, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 2, sourceWidth: 2, targetWidth: 2,
        y0: 878, y1: 848, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        curve: { x0: 1789, x1: 1922, c1x: 1850, c1y: 878, c2x: 1882, c2y: 848 },
      },
      { source: 'operating_expenses', target: 'sga', value: 253, sourceWidth: 120, targetWidth: 116, y0: 705, y1: 602, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 177, sourceWidth: 84, targetWidth: 81, y0: 807, y1: 909.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'products', value: 203, sourceWidth: 96, targetWidth: 94, y0: 1046, y1: 1144, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'services', value: 80, sourceWidth: 37, targetWidth: 37, y0: 1112.5, y1: 1307.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Axon · 2025 财年第三季度',
        meta: {
          title: 'Axon 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 108,
          titleTextLength: 1670,
        },
        nodes: {
          taser: { label: 'TASER', notes: ['同比 +17%'] },
          personal_sensors: { label: '个人传感器', notes: ['同比 +20%'] },
          platform_solutions: { label: '平台解决方案', notes: ['同比 +71%'] },
          connected_devices: { label: '联网设备', notes: ['同比 +24%'] },
          software_services: { label: '软件与服务', notes: ['同比 +41%'] },
          revenue: { label: '收入', notes: ['同比 +31%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 60%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (0%)', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 36%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 +4 个百分点'] },
          products: { label: '产品', notes: ['毛利率 50%'] },
          services: { label: '服务', notes: ['毛利率 74%'] },
        },
        layout: { labels: zhLabels },
        annotationsSvg: operatingLossAnnotation(true),
      },
    },
  });
})();

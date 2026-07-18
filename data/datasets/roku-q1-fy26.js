/* Roku — Q1 FY26 income statement ($M). Fixed, source-measured Sankey. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const PURPLE = '#6f1ab1';
  const PURPLE_LABEL = '#6b3b97';
  const PURPLE_LINK = '#b791d4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const CARD = '#6b3b97';

  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="164" y="1186" width="381" height="154" rx="44" fill="${CARD}"/>
      <text x="354.5" y="1237" text-anchor="middle" font-size="32" font-weight="800" fill="#ffffff">Streaming hours</text>
      <text x="354.5" y="1280" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">38.7B</text>
      <text x="354.5" y="1318" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">+8% Y/Y</text>
    </g>`;
  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="164" y="1186" width="381" height="154" rx="44" fill="${CARD}"/>
      <text x="354.5" y="1237" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">流媒体观看时长</text>
      <text x="354.5" y="1280" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">38.7B</text>
      <text x="354.5" y="1318" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">同比 +8%</text>
    </g>`;

  const labels = {
    platform: { blocks: [
      block(450, 451, 'middle', [line('$value', 40, 400), line('+28% Y/Y', 29, 400, NOTE)]),
      block(234, 675, 'middle', [line('Platform', 40, 800)]),
      block(234, 759, 'middle', [line('53% gross margin', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)]),
    ] },
    devices: { blocks: [
      block(449, 968, 'middle', [line('$value', 40, 400), line('(16%) Y/Y', 29, 400, NOTE)]),
      block(248, 1049, 'middle', [line('Devices', 40, 800)]),
      block(248, 1100, 'middle', [line('(14%) gross margin', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(913, 535, 'middle', [line('Revenue', 40, 800), line('$value', 40, 400), line('+22% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1382, 356, 'middle', [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('45% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1381, 1109, 'middle', [line('Cost of', 40, 800, RED_LABEL), line('revenue', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    operating_profit: { blocks: [block(1852, 260, 'middle', [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('4% margin', 29, 400, NOTE), line('+10pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1852, 842, 'middle', [line('Operating', 40, 800, RED_LABEL), line('expenses', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    net_profit: { blocks: [block(2478, 302, 'middle', [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL)])] },
    other: { blocks: [block(2195, 455, 'middle', [line('Other', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)])] },
    tax: { blocks: [block(2476, 569, 'middle', [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    platform_cost: { blocks: [block(1669, 1018, 'start', [line('Platform', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    player_cost: { blocks: [block(1676, 1202, 'start', [line('Player', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    sm: { blocks: [block(2477, 743, 'middle', [line('S&M', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('18% of revenue', 29, 400, NOTE), line('(4pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2475, 971, 'middle', [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('15% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(2468, 1180, 'middle', [line('G&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('8% of revenue', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    platform: { blocks: [
      block(450, 451, 'middle', [line('$value', 40, 400), line('同比 +28%', 29, 400, NOTE)]),
      block(234, 675, 'middle', [line('平台', 40, 800)]),
      block(234, 759, 'middle', [line('毛利率 53%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)]),
    ] },
    devices: { blocks: [
      block(449, 968, 'middle', [line('$value', 40, 400), line('同比 (16%)', 29, 400, NOTE)]),
      block(248, 1049, 'middle', [line('设备', 40, 800)]),
      block(248, 1100, 'middle', [line('毛利率 (14%)', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(913, 535, 'middle', [line('收入', 40, 800), line('$value', 40, 400), line('同比 +22%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1382, 356, 'middle', [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 45%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1381, 1109, 'middle', [line('收入', 40, 800, RED_LABEL), line('成本', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    operating_profit: { blocks: [block(1852, 260, 'middle', [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 4%', 29, 400, NOTE), line('同比 +10 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1852, 842, 'middle', [line('营业', 40, 800, RED_LABEL), line('费用', 40, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    net_profit: { blocks: [block(2478, 302, 'middle', [line('净利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL)])] },
    other: { blocks: [block(2195, 455, 'middle', [line('其他', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)])] },
    tax: { blocks: [block(2476, 569, 'middle', [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    platform_cost: { blocks: [block(1669, 1018, 'start', [line('平台', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    player_cost: { blocks: [block(1676, 1202, 'start', [line('播放器', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    sm: { blocks: [block(2477, 743, 'middle', [line('销售与市场', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 18%', 29, 400, NOTE), line('同比 (4 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2475, 971, 'middle', [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 15%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(2472, 1180, 'middle', [line('一般及行政', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 8%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'roku-q1-fy26',
    name: 'Roku · Q1 FY26',
    company: 'Roku',
    meta: {
      company: 'Roku',
      title: 'Roku Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/roku-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2070,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE_LABEL },
        hub: { node: PURPLE, label: PURPLE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/roku/company-wordmark.png', x: 659, y: 278, width: 494, height: 165 },
      { key: 'platform-tv-screen', href: 'data/assets/raster-annotations/roku/platform-tv-screen.png', x: 134, y: 553, width: 198, height: 125 },
      { key: 'devices-remote-cluster', href: 'data/assets/raster-annotations/roku/devices-remote-cluster.png', x: 126, y: 934, width: 230, height: 104 },
    ],
    layout: {
      scale: 0.278,
      nodes: {
        platform: { x: 414, y: 542, width: 71, height: 315 },
        devices: { x: 414, y: 1059, width: 71, height: 32 },
        revenue: { x: 881, y: 678, width: 70, height: 348 },
        gross_profit: { x: 1348, y: 540, width: 71, height: 157 },
        cost_of_revenue: { x: 1348, y: 908, width: 71, height: 190 },
        operating_profit: { x: 1816, y: 444, width: 70, height: 13 },
        operating_expenses: { x: 1818, y: 689, width: 70, height: 142 },
        net_profit: { x: 2282, y: 334, width: 71, height: 22 },
        other: { x: 2156, y: 424, width: 70, height: 8 },
        tax: { x: 2282, y: 601, width: 71, height: 1 },
        platform_cost: { x: 1573, y: 976, width: 70, height: 151 },
        player_cost: { x: 1576, y: 1217, width: 70, height: 36 },
        sm: { x: 2282, y: 744, width: 71, height: 60 },
        rnd: { x: 2282, y: 972, width: 71, height: 51 },
        ga: { x: 2282, y: 1192, width: 71, height: 26 },
      },
      labels,
    },
    nodes: [
      { id: 'platform', col: 0, order: 0, type: 'source', label: 'Platform', value: 1131, valueText: '$1,131M', notes: ['+28% Y/Y', '53% gross margin', '(1pp) Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'devices', col: 0, order: 1, type: 'source', label: 'Devices', value: 118, valueText: '$118M', notes: ['(16%) Y/Y', '(14%) gross margin', '(3pp) Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1249, valueText: '$1,249M', notes: ['+22% Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 565, valueText: '$565M', notes: ['45% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 684, valueText: '($684M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 52, valueText: '$52M', notes: ['4% margin', '+10pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 513, valueText: '($513M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 86, valueText: '$86M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 38, valueText: '$38M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 3, valueText: '($3M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'platform_cost', col: 4, order: 1, type: 'cost', label: 'Platform', value: 547, valueText: '($547M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'player_cost', col: 4, order: 2, type: 'cost', label: 'Player', value: 137, valueText: '($137M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 221, valueText: '($221M)', notes: ['18% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 190, valueText: '($190M)', notes: ['15% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 103, valueText: '($103M)', notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'platform', target: 'revenue', value: 1131, width: 315, y1: 835.5, targetOrder: 0 },
      { source: 'devices', target: 'revenue', value: 118, width: 32, y1: 1010, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 565, width: 157, y0: 756.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 684, width: 190, y0: 931, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 52, width: 13, y0: 546.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 513, sourceWidth: 144, targetWidth: 142, y0: 625, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 52, sourceWidth: 12, targetWidth: 14, y0: 450, y1: 341, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3, sourceWidth: 1, targetWidth: 1, y0: 456.5, y1: 601.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 38, width: 8, y0: 428, y1: 352, sourceOrder: 0, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'platform_cost', value: 547, sourceWidth: 151, targetWidth: 151, y0: 983.5, y1: 1051.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'player_cost', value: 137, sourceWidth: 39, targetWidth: 36, y0: 1078.5, y1: 1235, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 221, sourceWidth: 60, targetWidth: 60, y0: 719, y1: 774, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 190, sourceWidth: 54, targetWidth: 51, y0: 776, y1: 997.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 103, sourceWidth: 28, targetWidth: 26, y0: 817, y1: 1205, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Roku · 2026 财年第一季度',
        meta: { title: 'Roku 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度' },
        annotationsSvg: annotationsZh,
        nodes: {
          platform: { label: '平台', notes: ['同比 +28%', '毛利率 53%', '同比 (1 个百分点)'] },
          devices: { label: '设备', notes: ['同比 (16%)', '毛利率 (14%)', '同比 (3 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +10 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润' }, other: { label: '其他' }, tax: { label: '税费' },
          platform_cost: { label: '平台' }, player_cost: { label: '播放器' },
          sm: { label: '销售与市场', notes: ['占收入 18%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 (3 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* Take-Two Q2 FY26 income statement: measured fixed Sankey layout. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const BLUE = '#0a8ad2';
  const BLUE_LABEL = '#1478c6';
  const BLUE_LINK = '#8ac2e4';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2344;

  const annotations = (isZh) => `
    <g font-family="Noto Sans, Arial, sans-serif">
      <rect x="77" y="1176" width="490" height="74" rx="21" fill="#1075c5"/>
      <text x="111" y="1224" font-size="27" font-weight="800" fill="#ffffff">${isZh ? '净预订额' : 'Net bookings'}</text>
      <text x="${isZh ? 247 : 299}" y="1224" font-size="27" font-weight="400" fill="#ffffff">${isZh ? '$1.96B（同比 +33%）' : '$1.96B (+33% Y/Y)'}</text>
    </g>`;

  const labels = {
    mobile: { blocks: [
      { x: 404, top: 431, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 519, anchor: 'middle', lines: [{ text: 'Includes Zynga', size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 561, anchor: 'middle', lines: [{ text: 'Mobile', size: 40, weight: 800, color: BLUE_LABEL }] },
    ] },
    console: { blocks: [
      { x: 404, top: 690, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '+47% Y/Y', size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 811, anchor: 'middle', lines: [{ text: 'Console', size: 40, weight: 800, color: BLUE_LABEL }] },
    ] },
    pc_other: { blocks: [
      { x: 404, top: 910, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '+91% Y/Y', size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 997, anchor: 'middle', lines: [{ text: 'PC & other', size: 40, weight: 800, color: BLUE_LABEL }] },
    ] },
    platform_revenue: { blocks: [{ x: 716, top: 554, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    game: { blocks: [{ x: 1027, top: 380, anchor: 'middle', lineGap: 9, lines: [{ text: 'Game', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+33% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    advertising: { blocks: [{ x: 1027, top: 876, anchor: 'middle', lineGap: 9, lines: [{ text: 'Advertising', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1339, top: 554, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1650, top: 344, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '55% margin', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1650, top: 1057, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 38, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1810, top: 870, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'loss', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }, { text: '(6%) margin', size: 29, weight: 400, color: NOTE }, { text: '+16pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1962, top: 569, anchor: 'middle', lineGap: 3, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 491, anchor: 'start', lineGap: 7, lines: [{ text: 'S&M ($0.5B)', size: 30, weight: 800, color: RED_LABEL }, { text: '30% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 720, anchor: 'start', lineGap: 7, lines: [{ text: 'R&D ($0.3B)', size: 30, weight: 800, color: RED_LABEL }, { text: '15% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 905, anchor: 'start', lineGap: 7, lines: [{ text: 'G&A ($0.2B)', size: 30, weight: 800, color: RED_LABEL }, { text: '13% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    other: { blocks: [{ x: RIGHT_LABEL_X, top: 1112, anchor: 'start', lineGap: 7, lines: [{ text: 'Other ($49M)', size: 30, weight: 800, color: RED_LABEL }, { text: '3% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
  };

  const zhLabels = {
    mobile: { blocks: [{ x: 404, top: 431, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 +11%', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 519, anchor: 'middle', lines: [{ text: '包括 Zynga', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 561, anchor: 'middle', lines: [{ text: '移动端', size: 40, weight: 800, color: BLUE_LABEL }] }] },
    console: { blocks: [{ x: 404, top: 690, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 +47%', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 811, anchor: 'middle', lines: [{ text: '主机', size: 40, weight: 800, color: BLUE_LABEL }] }] },
    pc_other: { blocks: [{ x: 404, top: 910, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 +91%', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 997, anchor: 'middle', lines: [{ text: 'PC 及其他', size: 36, weight: 800, color: BLUE_LABEL }] }] },
    platform_revenue: { blocks: [{ x: 716, top: 554, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +31%', size: 29, weight: 400, color: NOTE }] }] },
    game: { blocks: [{ x: 1027, top: 380, anchor: 'middle', lineGap: 9, lines: [{ text: '游戏', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +33%', size: 29, weight: 400, color: NOTE }] }] },
    advertising: { blocks: [{ x: 1027, top: 876, anchor: 'middle', lineGap: 9, lines: [{ text: '广告', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +11%', size: 29, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1339, top: 554, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +31%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1650, top: 344, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 55%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1650, top: 1057, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 38, weight: 800, color: RED_LABEL }, { text: '成本', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1810, top: 870, anchor: 'middle', lineGap: 7, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }, { text: '利润率 (6%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +16 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1962, top: 569, anchor: 'middle', lineGap: 3, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 491, anchor: 'start', lineGap: 7, lines: [{ text: '销售与市场', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 30%', size: 29, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 720, anchor: 'start', lineGap: 7, lines: [{ text: '研发', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 15%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 905, anchor: 'start', lineGap: 7, lines: [{ text: '管理费用', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 13%', size: 29, weight: 400, color: NOTE }, { text: '同比 (6 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    other: { blocks: [{ x: RIGHT_LABEL_X, top: 1112, anchor: 'start', lineGap: 7, lines: [{ text: '其他', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 3%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'take-two-q2-fy26',
    name: 'Take-Two · Q2 FY26',
    company: 'Take-Two',
    meta: {
      company: 'Take-Two', title: 'Take-Two Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Sept. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/take-two-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 200, titleSize: 126, titleWeight: 800, titleTextLength: 2326,
      periodX: 2390, periodY: 257, periodNoteY: 298,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'company-logo', href: 'data/assets/raster-annotations/take-two/company-logo.png', x: 574, y: 292, width: 270, height: 220 },
      { key: 'mobile-store-icons', href: 'data/assets/raster-annotations/take-two/mobile-store-icons.png', x: 98, y: 393, width: 225, height: 118 },
      { key: 'console-cluster', href: 'data/assets/raster-annotations/take-two/console-cluster.png', x: 30, y: 681, width: 302, height: 126 },
      { key: 'steam-icon', href: 'data/assets/raster-annotations/take-two/steam-icon.png', x: 162, y: 886, width: 104, height: 106 },
      { key: 'studio-portfolio', href: 'data/assets/raster-annotations/take-two/studio-portfolio.png', x: 52, y: 1253, width: 600, height: 121 },
    ],
    layout: {
      scale: 108,
      nodes: {
        mobile: { x: 368, y: 520, width: 72, height: 86 }, console: { x: 368, y: 784, width: 72, height: 75 }, pc_other: { x: 368, y: 1003, width: 72, height: 25 },
        platform_revenue: { x: 680, y: 696, width: 72, height: 190 }, game: { x: 991, y: 522, width: 72, height: 177 }, advertising: { x: 991, y: 1019, width: 72, height: 16 },
        revenue: { x: 1303, y: 699, width: 72, height: 191 }, gross_profit: { x: 1614, y: 525, width: 72, height: 105 }, cost_of_revenue: { x: 1614, y: 952, width: 72, height: 85 },
        operating_loss: { x: 1753, y: 836, width: 72, height: 13 }, operating_expenses: { x: 1926, y: 709, width: 72, height: 117 },
        sm: { x: 2236, y: 488, width: 72, height: 58 }, rnd: { x: 2236, y: 716, width: 72, height: 30 }, ga: { x: 2236, y: 907, width: 72, height: 25 }, other: { x: 2236, y: 1121, width: 72, height: 7 },
      },
      labels,
    },
    nodes: [
      { id: 'mobile', col: 0, order: 0, type: 'source', label: 'Mobile', value: 0.8216, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'console', col: 0, order: 1, type: 'source', label: 'Console', value: 0.72, notes: ['+47% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'pc_other', col: 0, order: 2, type: 'source', label: 'PC & other', value: 0.2322, notes: ['+91% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'platform_revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.7738, notes: ['+31% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'game', col: 2, order: 0, type: 'hub', label: 'Game', value: 1.6409, notes: ['+33% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'advertising', col: 2, order: 1, type: 'hub', label: 'Advertising', value: 0.1329, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1.7738, notes: ['+31% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 0.9805, notes: ['55% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.7933, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 5, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.098, notes: ['(6%) margin', '+16pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 1.0785, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 7, order: 0, type: 'cost', label: 'S&M', value: 0.5366, notes: ['30% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 1, type: 'cost', label: 'R&D', value: 0.268, notes: ['15% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 2, type: 'cost', label: 'G&A', value: 0.225, notes: ['13% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 7, order: 3, type: 'cost', label: 'Other', value: 0.049, valueText: '($49M)', notes: ['3% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobile', target: 'platform_revenue', value: 0.8216, width: 86, sourceWidth: 86, targetWidth: 86, y1: 739, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'console', target: 'platform_revenue', value: 0.72, width: 75, sourceWidth: 75, targetWidth: 75, y1: 819.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'pc_other', target: 'platform_revenue', value: 0.2322, width: 25, sourceWidth: 25, targetWidth: 29, y1: 871.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'platform_revenue', target: 'game', value: 1.6409, width: 177, sourceWidth: 177, targetWidth: 177, y0: 784.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'platform_revenue', target: 'advertising', value: 0.1329, width: 16, sourceWidth: 13, targetWidth: 16, y0: 879.5, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'game', target: 'revenue', value: 1.6409, width: 177, sourceWidth: 177, targetWidth: 177, y1: 787.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'advertising', target: 'revenue', value: 0.1329, width: 16, sourceWidth: 16, targetWidth: 14, y1: 883, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.9805, width: 105, sourceWidth: 105, targetWidth: 105, y0: 751.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.7933, width: 87, sourceWidth: 86, targetWidth: 85, y0: 847, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9805, width: 105, sourceWidth: 105, targetWidth: 105, y1: 761.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.098, width: 13, sourceWidth: 13, targetWidth: 12, y0: 842.5, y1: 820, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.5366, width: 58, sourceWidth: 58, targetWidth: 58, y0: 738, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.268, width: 30, sourceWidth: 30, targetWidth: 30, y0: 782, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.225, width: 25, sourceWidth: 25, targetWidth: 25, y0: 809.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 0.049, width: 7, sourceWidth: 4, targetWidth: 7, y0: 824, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Take-Two · 2026 财年第二季度',
        meta: { title: 'Take-Two 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2025 年 9 月', titleSize: 118, titleTextLength: 2050 },
        annotationsSvg: annotations(true),
        nodes: {
          mobile: { label: '移动端', notes: ['同比 +11%'] }, console: { label: '主机', notes: ['同比 +47%'] }, pc_other: { label: 'PC 及其他', notes: ['同比 +91%'] },
          platform_revenue: { label: '收入', notes: ['同比 +31%'] }, game: { label: '游戏', notes: ['同比 +33%'] }, advertising: { label: '广告', notes: ['同比 +11%'] }, revenue: { label: '收入', notes: ['同比 +31%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_loss: { label: '营业亏损', notes: ['利润率 (6%)', '同比 +16 个百分点'] }, operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场营销', notes: ['占收入 30%', '同比 (4 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 15%', '同比 (3 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 13%', '同比 (6 个百分点)'] }, other: { label: '其他', notes: ['占收入 3%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

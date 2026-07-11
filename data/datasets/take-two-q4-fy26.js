/* Take-Two Q4 FY26 income statement: measured fixed Sankey layout. */
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
      <text x="${isZh ? 247 : 299}" y="1224" font-size="27" font-weight="400" fill="#ffffff">${isZh ? '$1.58B（同比 -0%）' : '$1.58B (-0% Y/Y)'}</text>
    </g>`;

  const labels = {
    mobile: { blocks: [
      { x: 404, top: 416, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 518, anchor: 'middle', lines: [{ text: 'Includes Zynga', size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 557, anchor: 'middle', lines: [{ text: 'Mobile', size: 40, weight: 800, color: BLUE_LABEL }] },
    ] },
    console: { blocks: [
      { x: 404, top: 691, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 856, anchor: 'middle', lines: [{ text: 'Console', size: 40, weight: 800, color: BLUE_LABEL }] },
    ] },
    pc_other: { blocks: [
      { x: 404, top: 994, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '(34%) Y/Y', size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 1060, anchor: 'middle', lines: [{ text: 'PC & other', size: 40, weight: 800, color: BLUE_LABEL }] },
    ] },
    platform_revenue: { blocks: [{ x: 716, top: 523, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    game: { blocks: [{ x: 1027, top: 360, anchor: 'middle', lineGap: 9, lines: [{ text: 'Game', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    advertising: { blocks: [{ x: 1027, top: 936, anchor: 'middle', lineGap: 9, lines: [{ text: 'Advertising', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1339, top: 523, anchor: 'middle', lineGap: 7, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1650, top: 327, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '56% margin', size: 29, weight: 400, color: NOTE }, { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1650, top: 1111, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 38, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1843, top: 877, anchor: 'middle', lineGap: 7, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'loss', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }, { text: '(1%) margin', size: 29, weight: 400, color: NOTE }, { text: '+239pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1962, top: 541, anchor: 'middle', lineGap: 3, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 507, anchor: 'start', lineGap: 7, lines: [{ text: 'S&M ($0.4B)', size: 30, weight: 800, color: RED_LABEL }, { text: '23% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 749, anchor: 'start', lineGap: 7, lines: [{ text: 'R&D ($0.3B)', size: 30, weight: 800, color: RED_LABEL }, { text: '16% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 966, anchor: 'start', lineGap: 7, lines: [{ text: 'G&A ($0.2B)', size: 30, weight: 800, color: RED_LABEL }, { text: '13% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    other: { blocks: [{ x: RIGHT_LABEL_X, top: 1177, anchor: 'start', lineGap: 7, lines: [{ text: 'Other ($0.1B)', size: 30, weight: 800, color: RED_LABEL }, { text: '3% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
  };

  const zhLabels = {
    mobile: { blocks: [{ x: 404, top: 416, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 +13%', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 518, anchor: 'middle', lines: [{ text: '包括 Zynga', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 557, anchor: 'middle', lines: [{ text: '移动端', size: 40, weight: 800, color: BLUE_LABEL }] }] },
    console: { blocks: [{ x: 404, top: 691, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 +14%', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 856, anchor: 'middle', lines: [{ text: '主机', size: 40, weight: 800, color: BLUE_LABEL }] }] },
    pc_other: { blocks: [{ x: 404, top: 994, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 (34%)', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 1060, anchor: 'middle', lines: [{ text: 'PC 及其他', size: 36, weight: 800, color: BLUE_LABEL }] }] },
    platform_revenue: { blocks: [{ x: 716, top: 523, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +6%', size: 29, weight: 400, color: NOTE }] }] },
    game: { blocks: [{ x: 1027, top: 360, anchor: 'middle', lineGap: 9, lines: [{ text: '游戏', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +6%', size: 29, weight: 400, color: NOTE }] }] },
    advertising: { blocks: [{ x: 1027, top: 936, anchor: 'middle', lineGap: 9, lines: [{ text: '广告', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +2%', size: 29, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1339, top: 523, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +6%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1650, top: 327, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 56%', size: 29, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1650, top: 1111, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 38, weight: 800, color: RED_LABEL }, { text: '成本', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1843, top: 877, anchor: 'middle', lineGap: 7, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }, { text: '利润率 (1%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +239 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1962, top: 541, anchor: 'middle', lineGap: 3, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 507, anchor: 'start', lineGap: 7, lines: [{ text: '销售与市场', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 23%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 749, anchor: 'start', lineGap: 7, lines: [{ text: '研发', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 16%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 966, anchor: 'start', lineGap: 7, lines: [{ text: '管理费用', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 13%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    other: { blocks: [{ x: RIGHT_LABEL_X, top: 1177, anchor: 'start', lineGap: 7, lines: [{ text: '其他', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 3%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'take-two-q4-fy26',
    name: 'Take-Two · Q4 FY26',
    company: 'Take-Two',
    meta: {
      company: 'Take-Two', title: 'Take-Two Q4 FY26 Income Statement', period: 'Q4 FY26', periodNote: 'Ending Apr. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/take-two-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2350,
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
      { key: 'company-logo', href: 'data/assets/raster-annotations/take-two/company-logo.png', x: 574, y: 264, width: 270, height: 220 },
      { key: 'mobile-store-icons', href: 'data/assets/raster-annotations/take-two/mobile-store-icons.png', x: 94, y: 395, width: 225, height: 118 },
      { key: 'console-cluster', href: 'data/assets/raster-annotations/take-two/console-cluster.png', x: 36, y: 739, width: 302, height: 126 },
      { key: 'steam-icon', href: 'data/assets/raster-annotations/take-two/steam-icon.png', x: 162, y: 973, width: 104, height: 106 },
      { key: 'studio-portfolio', href: 'data/assets/raster-annotations/take-two/studio-portfolio.png', x: 52, y: 1253, width: 600, height: 121 },
    ],
    layout: {
      scale: 153,
      nodes: {
        mobile: { x: 368, y: 509, width: 72, height: 104 }, console: { x: 368, y: 785, width: 72, height: 129 }, pc_other: { x: 368, y: 1087, width: 72, height: 25 },
        platform_revenue: { x: 680, y: 678, width: 72, height: 259 }, game: { x: 991, y: 512, width: 72, height: 241 }, advertising: { x: 991, y: 1090, width: 72, height: 17 },
        revenue: { x: 1303, y: 678, width: 72, height: 259 }, gross_profit: { x: 1614, y: 509, width: 72, height: 145 }, cost_of_revenue: { x: 1614, y: 985, width: 72, height: 113 },
        operating_loss: { x: 1803, y: 864, width: 72, height: 2 }, operating_expenses: { x: 1926, y: 682, width: 72, height: 143 },
        sm: { x: 2236, y: 512, width: 72, height: 61 }, rnd: { x: 2236, y: 761, width: 72, height: 41 }, ga: { x: 2236, y: 983, width: 72, height: 35 }, other: { x: 2236, y: 1194, width: 72, height: 8 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels,
    },
    nodes: [
      { id: 'mobile', col: 0, order: 0, type: 'source', label: 'Mobile', value: 0.8439, valueText: '$0.8B', notes: ['+13% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'console', col: 0, order: 1, type: 'source', label: 'Console', value: 0.6746, valueText: '$0.7B', notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'pc_other', col: 0, order: 2, type: 'source', label: 'PC & other', value: 0.1613, valueText: '$0.2B', notes: ['(34%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'platform_revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.6798, valueText: '$1.7B', notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'game', col: 2, order: 0, type: 'hub', label: 'Game', value: 1.5684, valueText: '$1.6B', notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'advertising', col: 2, order: 1, type: 'hub', label: 'Advertising', value: 0.1114, valueText: '$0.1B', notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1.6798, valueText: '$1.7B', notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 0.9387, valueText: '$0.9B', notes: ['56% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.7411, valueText: '($0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 5, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.0109, valueText: '($10M)', notes: ['(1%) margin', '+239pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 0.9278, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 7, order: 0, type: 'cost', label: 'S&M', value: 0.3922, valueText: '($0.4B)', notes: ['23% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 1, type: 'cost', label: 'R&D', value: 0.2625, valueText: '($0.3B)', notes: ['16% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 2, type: 'cost', label: 'G&A', value: 0.2238, valueText: '($0.2B)', notes: ['13% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 7, order: 3, type: 'cost', label: 'Other', value: 0.0493, valueText: '($0.1B)', notes: ['3% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 8, order: 0, type: 'cost', label: '', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent' },
    ],
    links: [
      { source: 'mobile', target: 'platform_revenue', value: 0.8439, sourceWidth: 102, targetWidth: 106, y0: 561, y1: 731, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'console', target: 'platform_revenue', value: 0.6746, sourceWidth: 127, targetWidth: 129, y0: 849.5, y1: 848.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'pc_other', target: 'platform_revenue', value: 0.1613, sourceWidth: 23, targetWidth: 24, y0: 1099.5, y1: 924, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'platform_revenue', target: 'game', value: 1.5684, sourceWidth: 243, targetWidth: 239, y0: 799.5, y1: 632.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'platform_revenue', target: 'advertising', value: 0.1114, sourceWidth: 15, targetWidth: 15, y0: 928.5, y1: 1098.5, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'game', target: 'revenue', value: 1.5684, sourceWidth: 239, targetWidth: 243, y0: 632.5, y1: 799.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'advertising', target: 'revenue', value: 0.1114, sourceWidth: 15, targetWidth: 15, y0: 1098.5, y1: 928.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.9387, sourceWidth: 145, targetWidth: 143, y0: 750.5, y1: 581.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.7411, sourceWidth: 113, targetWidth: 112, y0: 879.5, y1: 1041, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9387, sourceWidth: 142, targetWidth: 141, y0: 583, y1: 752.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.0109, sourceWidth: 2, targetWidth: 2, y0: 865, y1: 823, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1875, x1: 1926, c1x: 1890, c1y: 865, c2x: 1910, c2y: 823 } },
      { source: 'operating_expenses', target: 'sm', value: 0.3922, sourceWidth: 60, targetWidth: 60, y0: 713, y1: 542, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.2625, sourceWidth: 41, targetWidth: 41, y0: 763.5, y1: 781.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.2238, sourceWidth: 35, targetWidth: 35, y0: 801.5, y1: 1000.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 0.0493, sourceWidth: 8, targetWidth: 8, y0: 820.5, y1: 1198, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Take-Two · 2026 财年第四季度',
        meta: { title: 'Take-Two 2026 财年第四季度利润表', period: '2026 财年第四季度', periodNote: '截至 2026 年 4 月', titleSize: 118, titleTextLength: 2050 },
        annotationsSvg: annotations(true),
        nodes: {
          mobile: { label: '移动端', notes: ['同比 +13%'] }, console: { label: '主机', notes: ['同比 +14%'] }, pc_other: { label: 'PC 及其他', notes: ['同比 (34%)'] },
          platform_revenue: { label: '收入', notes: ['同比 +6%'] }, game: { label: '游戏', notes: ['同比 +6%'] }, advertising: { label: '广告', notes: ['同比 +2%'] }, revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +5 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_loss: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +239 个百分点'] }, operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场营销', notes: ['占收入 23%', '同比 (2 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 16%', '同比 (3 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 13%', '同比 (1 个百分点)'] }, other: { label: '其他', notes: ['占收入 3%', '同比 (3 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

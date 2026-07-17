/* ====================================================================
 * Take-Two - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/take-two-q3-fy26.png as a fixed
 * d3-sankey layout with validated runtime raster icon annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const BLUE = '#0a8ad2';
  const BLUE_LABEL = '#1478c6';
  const BLUE_LINK = '#86bbe0';
  const GRAY_LINK = '#8d8d8d';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cf99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2344;

  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="77" y="1176" width="490" height="74" rx="21" fill="#1075c5"/>
      <text x="111" y="1224" font-size="27" font-weight="800" fill="#ffffff"${isZh ? '' : ' textLength="182" lengthAdjust="spacingAndGlyphs"'}>${isZh ? '净预订额' : 'Net bookings'}</text>
      <text x="${isZh ? 247 : 299}" y="1224" font-size="27" font-weight="400" fill="#ffffff">${isZh ? '$1.76B（同比 +28%）' : '$1.76B (+28% Y/Y)'}</text>
    </g>`;

  const labels = {
    mobile: {
      blocks: [
        { x: 404, top: 445, anchor: 'middle', lineGap: 7, lines: [
          { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
          { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 202, top: 527, anchor: 'middle', lines: [{ text: 'Includes Zynga', size: 29, weight: 400, color: NOTE }] },
        { x: 202, top: 568, anchor: 'middle', lines: [{ text: 'Mobile', size: 40, weight: 800, color: BLUE_LABEL }] },
      ],
    },
    console: {
      blocks: [
        { x: 404, top: 691, anchor: 'middle', lineGap: 7, lines: [
          { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
          { text: '+28% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 202, top: 809, anchor: 'middle', lines: [{ text: 'Console', size: 40, weight: 800, color: BLUE_LABEL }] },
      ],
    },
    pc_other: {
      blocks: [
        { x: 404, top: 913, anchor: 'middle', lineGap: 7, lines: [
          { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
          { text: '+51% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 202, top: 989, anchor: 'middle', lines: [{ text: 'PC & other', size: 40, weight: 800, color: BLUE_LABEL }] },
      ],
    },
    platform_revenue: {
      blocks: [{ x: 716, top: 530, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    game: {
      blocks: [{ x: 1027, top: 395, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Game', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+26% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    advertising: {
      blocks: [{ x: 1027, top: 867, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Advertising', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    revenue: {
      blocks: [{ x: 1339, top: 530, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1650, top: 357, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
        { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
        { text: '56% margin', size: 29, weight: 400, color: NOTE },
        { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1650, top: 1055, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Cost of', size: 38, weight: 800, color: RED_LABEL },
        { text: 'revenue', size: 38, weight: 800, color: RED_LABEL },
        { text: '$value', size: 38, weight: 400, color: RED_LABEL },
      ] }],
    },
    operating_loss: {
      blocks: [{ x: 1843, top: 851, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
        { text: 'loss', size: 40, weight: 800, color: RED_LABEL },
        { text: '$value', size: 36, weight: 400, color: RED_LABEL },
        { text: '(2%) margin', size: 29, weight: 400, color: NOTE },
        { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1962, top: 534, anchor: 'middle', lineGap: 3, lines: [
        { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
        { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
        { text: '$value', size: 38, weight: 400, color: RED_LABEL },
      ] }],
    },
    sm: {
      blocks: [{ x: RIGHT_LABEL_X, top: 450, anchor: 'start', lineGap: 7, lines: [
        { text: 'S&M ($0.4B)', size: 30, weight: 800, color: RED_LABEL },
        { text: '25% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    rnd: {
      blocks: [{ x: RIGHT_LABEL_X, top: 669, anchor: 'start', lineGap: 7, lines: [
        { text: 'R&D ($0.3B)', size: 30, weight: 800, color: RED_LABEL },
        { text: '17% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    ga: {
      blocks: [{ x: RIGHT_LABEL_X, top: 876, anchor: 'start', lineGap: 7, lines: [
        { text: 'G&A ($0.2B)', size: 30, weight: 800, color: RED_LABEL },
        { text: '13% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    other: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1075, anchor: 'start', lineGap: 7, lines: [
        { text: 'Other ($49M)', size: 30, weight: 800, color: RED_LABEL },
        { text: '3% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
  };

  const zhLabels = {
    mobile: {
      blocks: [
        { x: 404, top: 445, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 +17%', size: 29, weight: 400, color: NOTE }] },
        { x: 202, top: 527, anchor: 'middle', lines: [{ text: '包括 Zynga', size: 29, weight: 400, color: NOTE }] },
        { x: 202, top: 568, anchor: 'middle', lines: [{ text: '移动端', size: 40, weight: 800, color: BLUE_LABEL }] },
      ],
    },
    console: { blocks: [{ x: 404, top: 691, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 +28%', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 809, anchor: 'middle', lines: [{ text: '主机', size: 40, weight: 800, color: BLUE_LABEL }] }] },
    pc_other: { blocks: [{ x: 404, top: 913, anchor: 'middle', lineGap: 7, lines: [{ text: '$value', size: 40, weight: 400, color: BLUE_LABEL }, { text: '同比 +51%', size: 29, weight: 400, color: NOTE }] }, { x: 202, top: 989, anchor: 'middle', lines: [{ text: 'PC 及其他', size: 36, weight: 800, color: BLUE_LABEL }] }] },
    platform_revenue: { blocks: [{ x: 716, top: 530, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +25%', size: 29, weight: 400, color: NOTE }] }] },
    game: { blocks: [{ x: 1027, top: 395, anchor: 'middle', lineGap: 9, lines: [{ text: '游戏', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +26%', size: 29, weight: 400, color: NOTE }] }] },
    advertising: { blocks: [{ x: 1027, top: 867, anchor: 'middle', lineGap: 9, lines: [{ text: '广告', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +10%', size: 29, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1339, top: 530, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +25%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1650, top: 357, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 56%', size: 29, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1650, top: 1055, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 38, weight: 800, color: RED_LABEL }, { text: '成本', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1843, top: 851, anchor: 'middle', lineGap: 7, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, weight: 400, color: RED_LABEL }, { text: '利润率 (2%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1962, top: 534, anchor: 'middle', lineGap: 3, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 450, anchor: 'start', lineGap: 7, lines: [{ text: '销售与市场', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 25%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 669, anchor: 'start', lineGap: 7, lines: [{ text: '研发', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 17%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 876, anchor: 'start', lineGap: 7, lines: [{ text: '管理费用', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 13%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    other: { blocks: [{ x: RIGHT_LABEL_X, top: 1075, anchor: 'start', lineGap: 7, lines: [{ text: '其他', size: 30, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: '占收入 3%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'take-two-q3-fy26',
    name: 'Take-Two · Q3 FY26',
    company: 'Take-Two',
    meta: {
      company: 'Take-Two',
      title: 'Take-Two Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/take-two-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2350,
      periodX: 2390,
      periodY: 257,
      periodNoteY: 298,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'company-logo', href: 'data/assets/raster-annotations/take-two/company-logo.png', x: 574, y: 292, width: 270, height: 220 },
      { key: 'mobile-store-icons', href: 'data/assets/raster-annotations/take-two/mobile-store-icons.png', x: 94, y: 416, width: 225, height: 118 },
      { key: 'console-cluster', href: 'data/assets/raster-annotations/take-two/console-cluster.png', x: 36, y: 692, width: 302, height: 126 },
      { key: 'steam-icon', href: 'data/assets/raster-annotations/take-two/steam-icon.png', x: 162, y: 896, width: 104, height: 106 },
      { key: 'studio-portfolio', href: 'data/assets/raster-annotations/take-two/studio-portfolio.png', x: 52, y: 1253, width: 600, height: 121 },
    ],
    layout: {
      scale: 132,
      nodes: {
        mobile: { x: 368, y: 542, width: 72, height: 114 },
        console: { x: 368, y: 793, width: 72, height: 86 },
        pc_other: { x: 368, y: 1011, width: 72, height: 24 },
        platform_revenue: { x: 680, y: 683, width: 72, height: 225 },
        game: { x: 991, y: 546, width: 72, height: 207 },
        advertising: { x: 991, y: 1018, width: 72, height: 17 },
        revenue: { x: 1303, y: 684, width: 72, height: 225 },
        gross_profit: { x: 1614, y: 542, width: 72, height: 125 },
        cost_of_revenue: { x: 1614, y: 940, width: 72, height: 100 },
        operating_loss: { x: 1807, y: 833, width: 72, height: 8 },
        operating_expenses: { x: 1926, y: 679, width: 72, height: 130 },
        sm: { x: 2237, y: 470, width: 72, height: 57 },
        rnd: { x: 2237, y: 689, width: 72, height: 37 },
        ga: { x: 2237, y: 896, width: 72, height: 29 },
        other: { x: 2237, y: 1095, width: 72, height: 7 },
      },
      labels,
    },
    nonNodeMetrics: [
      { id: 'tax', representation: 'data-only' },
    ],

    nodes: [
      { id: 'mobile', col: 0, order: 0, type: 'source', label: 'Mobile', value: 0.8658, valueText: '$0.9B', notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'console', col: 0, order: 1, type: 'source', label: 'Console', value: 0.6521, valueText: '$0.7B', notes: ['+28% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'pc_other', col: 0, order: 2, type: 'source', label: 'PC & other', value: 0.1811, valueText: '$0.2B', notes: ['+51% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'platform_revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.699, valueText: '$1.7B', notes: ['+25% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'game', col: 2, order: 0, type: 'hub', label: 'Game', value: 1.5703, valueText: '$1.6B', notes: ['+26% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'advertising', col: 2, order: 1, type: 'hub', label: 'Advertising', value: 0.1287, valueText: '$0.1B', notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1.699, valueText: '$1.7B', notes: ['+25% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 0.9455, valueText: '$1.0B', notes: ['56% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.7535, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 5, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.0387, valueText: '($39M)', notes: ['(2%) margin', '+7pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 0.9842, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 7, order: 0, type: 'cost', label: 'S&M', value: 0.4332, valueText: '($0.4B)', notes: ['25% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 1, type: 'cost', label: 'R&D', value: 0.2827, valueText: '($0.3B)', notes: ['17% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 2, type: 'cost', label: 'G&A', value: 0.2186, valueText: '($0.2B)', notes: ['13% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 7, order: 3, type: 'cost', label: 'Other', value: 0.0497, valueText: '($49M)', notes: ['3% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobile', target: 'platform_revenue', value: 0.8658, width: 114, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'console', target: 'platform_revenue', value: 0.6521, width: 87, sourceWidth: 86, targetWidth: 87, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'pc_other', target: 'platform_revenue', value: 0.1811, width: 24, sourceWidth: 24, targetWidth: 22, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'platform_revenue', target: 'game', value: 1.5703, width: 207, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'platform_revenue', target: 'advertising', value: 0.1287, width: 18, sourceWidth: 18, targetWidth: 17, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'game', target: 'revenue', value: 1.5703, width: 207, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'advertising', target: 'revenue', value: 0.1287, width: 18, sourceWidth: 17, targetWidth: 18, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.9455, width: 125, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.7535, width: 100, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9455, width: 125, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.0387, width: 5, sourceOrder: 0, targetOrder: 1, y0: 837, y1: 806.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.4332, width: 57, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.2827, width: 37, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.2186, width: 29, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 0.0497, width: 7, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Take-Two · 2026 财年第三季度',
        meta: {
          title: 'Take-Two 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 118,
          titleTextLength: 2050,
        },
        annotationsSvg: annotations(true),
        nodes: {
          mobile: { label: '移动端', notes: ['同比 +17%'] },
          console: { label: '主机', notes: ['同比 +28%'] },
          pc_other: { label: 'PC 及其他', notes: ['同比 +51%'] },
          platform_revenue: { label: '收入', notes: ['同比 +25%'] },
          game: { label: '游戏', notes: ['同比 +26%'] },
          advertising: { label: '广告', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +7 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场营销', notes: ['占收入 25%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 17%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 13%', '同比 (1 个百分点)'] },
          other: { label: '其他', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

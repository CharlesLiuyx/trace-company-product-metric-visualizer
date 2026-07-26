/* GameStop Q4 FY25 income statement ($M), reconstructed from the supplied 2667×1500 reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const SOURCE = '#000000';
  const SOURCE_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const text = (value, size, weight = 400, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });
  const above = (x, top, lines, lineGap = 9) => ({ x, top, anchor: 'middle', lineGap, lines });
  const side = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'start', lineGap, lines });
  const gameStopLogo = '<text x="0" y="130" font-family="Arial Black, Arial, sans-serif" font-size="154" font-weight="900" letter-spacing="-11"><tspan fill="#202020">Game</tspan><tspan fill="#ee2a28">Stop</tspan></text>';
  const annotations = `<g data-typography-role="brand" transform="translate(742 278)">${gameStopLogo}</g><g font-family="Noto Sans,Arial,sans-serif" font-size="32"><text x="1039" y="535">🇺🇸</text><text x="1045" y="929">🇦🇺</text><text x="1045" y="1148">🇪🇺</text></g>`;

  const labels = {
    hardware_accessories: { blocks: [above(511, 490, [text('$value', 40), text('(26%) Y/Y', 29, 400, NOTE)]), { x: 338, top: 604, anchor: 'end', lines: [text('Hardware &', 40, 800), text('Accessories', 40, 800)] }] },
    packaged_software: { blocks: [above(511, 812, [text('$value', 40), text('(29%) Y/Y', 29, 400, NOTE)]), { x: 448, top: 912, anchor: 'end', lines: [text('Packaged Software', 40, 800)] }] },
    collectibles: { blocks: [above(511, 1040, [text('$value', 40), text('+35% Y/Y', 29, 400, NOTE)]), { x: 438, top: 1158, anchor: 'end', lines: [text('Collectibles', 40, 800)] }] },
    revenue_by_product: { blocks: [above(821, 641, [text('Revenue', 40, 800), text('$1,104M', 40), text('(14%) Y/Y', 29, 400, NOTE)])] },
    united_states: { blocks: [above(1148, 502, [text('$value', 40), text('(8%) Y/Y', 29, 400, NOTE)])] },
    australia: { blocks: [above(1160, 895, [text('$value', 40), text('+9% Y/Y', 29, 400, NOTE)])] },
    europe: { blocks: [above(1156, 1113, [text('$value', 40), text('(21%) Y/Y', 29, 400, NOTE)])] },
    revenue: { blocks: [above(1445, 644, [text('Revenue', 40, 800), text('$1,104M', 40), text('(14%) Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [above(1756, 486, [text('Gross profit', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('35% margin', 29, 400, NOTE), text('+7pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [above(1756, 1148, [text('Cost of', 40, 800, RED_LABEL), text('revenue', 40, 800, RED_LABEL), text('$value', 40, 400, RED_LABEL)])] },
    operating_profit: { blocks: [above(2067, 329, [text('Operating', 40, 800, GREEN_LABEL), text('profit', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('12% margin', 29, 400, NOTE), text('+6pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [above(2067, 872, [text('Operating', 40, 800, RED_LABEL), text('expenses', 40, 800, RED_LABEL), text('$value', 40, 400, RED_LABEL)])] },
    tax_benefit: { blocks: [side(2185, 582, [text('Tax benefit', 31, 800, GREEN_LABEL)]), above(2269, 621, [text('$value', 31, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [side(2446, 420, [text('Net profit', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('12% margin', 29, 400, NOTE), text('+1pp Y/Y', 29, 400, NOTE)])] },
    other: { blocks: [side(2484, 670, [text('Other', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
    sga: { blocks: [side(2479, 886, [text('SG&A', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
    impairment: { blocks: [side(2440, 1170, [text('Impairment', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
  };

  const zhLabels = {
    hardware_accessories: { blocks: [above(511, 490, [text('$value', 40), text('同比 (26%)', 29, 400, NOTE)]), { x: 338, top: 626, anchor: 'end', lines: [text('硬件及配件', 38, 800)] }] },
    packaged_software: { blocks: [above(511, 812, [text('$value', 40), text('同比 (29%)', 29, 400, NOTE)]), { x: 448, top: 913, anchor: 'end', lines: [text('实体软件', 38, 800)] }] },
    collectibles: { blocks: [above(511, 1040, [text('$value', 40), text('同比 +35%', 29, 400, NOTE)]), { x: 438, top: 1159, anchor: 'end', lines: [text('收藏品', 38, 800)] }] },
    revenue_by_product: { blocks: [above(821, 641, [text('收入', 40, 800), text('$1,104M', 40), text('同比 (14%)', 29, 400, NOTE)])] },
    united_states: { blocks: [above(1148, 502, [text('$value', 40), text('同比 (8%)', 29, 400, NOTE)])] },
    australia: { blocks: [above(1160, 895, [text('$value', 40), text('同比 +9%', 29, 400, NOTE)])] },
    europe: { blocks: [above(1156, 1113, [text('$value', 40), text('同比 (21%)', 29, 400, NOTE)])] },
    revenue: { blocks: [above(1445, 644, [text('收入', 40, 800), text('$1,104M', 40), text('同比 (14%)', 29, 400, NOTE)])] },
    gross_profit: { blocks: [above(1756, 486, [text('毛利润', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('利润率 35%', 29, 400, NOTE), text('同比 +7 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [above(1756, 1148, [text('收入', 40, 800, RED_LABEL), text('成本', 40, 800, RED_LABEL), text('$value', 40, 400, RED_LABEL)])] },
    operating_profit: { blocks: [above(2067, 329, [text('营业利润', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('利润率 12%', 29, 400, NOTE), text('同比 +6 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [above(2067, 872, [text('营业费用', 40, 800, RED_LABEL), text('$value', 40, 400, RED_LABEL)])] },
    tax_benefit: { blocks: [side(2194, 582, [text('所得税收益', 30, 800, GREEN_LABEL)]), above(2269, 621, [text('$value', 31, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [side(2446, 420, [text('净利润', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('利润率 12%', 29, 400, NOTE), text('同比 +1 个百分点', 29, 400, NOTE)])] },
    other: { blocks: [side(2484, 670, [text('其他', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
    sga: { blocks: [side(2475, 867, [text('销售、一般及', 23, 800, RED_LABEL), text('行政费用', 23, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL)], 3)] },
    impairment: { blocks: [side(2440, 1170, [text('资产减值', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'gamestop-q4-fy25', name: 'GameStop · Q4 FY25', company: 'GameStop',
    meta: {
      company: 'GameStop', title: 'GameStop Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Jan. 31, 2026', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/gamestop-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2360,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: SOURCE, label: SOURCE }, hub: { node: SOURCE, label: SOURCE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, nodeRadius: 0,
      type: { name: 40, value: 40, note: 29, lineGap: 9 }, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
    },
    rasterAnnotations: [
      { key: 'hardware-consoles', href: 'data/assets/raster-annotations/gamestop/hardware-consoles-q4-fy25.png', x: 20, y: 360, width: 420, height: 230 },
      { key: 'packaged-software-games', href: 'data/assets/raster-annotations/gamestop/packaged-software-games-q4-fy25.png', x: 150, y: 735, width: 230, height: 165 },
      { key: 'collectibles-figure', href: 'data/assets/raster-annotations/gamestop/collectibles-figure-q4-fy25.png', x: 25, y: 1035, width: 180, height: 220 },
    ],
    annotationsSvg: annotations,
    layout: {
      scale: 0.228,
      nodes: {
        hardware_accessories: { x: 474, y: 590, width: 73, height: 122 }, packaged_software: { x: 474, y: 913, width: 73, height: 47 }, collectibles: { x: 474, y: 1141, width: 73, height: 83 },
        revenue_by_product: { x: 785, y: 787, width: 73, height: 253 }, united_states: { x: 1096, y: 596, width: 73, height: 183 }, australia: { x: 1096, y: 990, width: 73, height: 39 }, europe: { x: 1096, y: 1211, width: 73, height: 35 }, revenue: { x: 1408, y: 790, width: 73, height: 254 },
        gross_profit: { x: 1719, y: 668, width: 74, height: 89 }, cost_of_revenue: { x: 1719, y: 973, width: 74, height: 166 }, operating_profit: { x: 2031, y: 576, width: 73, height: 33 }, operating_expenses: { x: 2031, y: 804, width: 73, height: 58 },
        tax_benefit: { x: 2236, y: 555, width: 73, height: 11 }, net_profit: { x: 2342, y: 474, width: 73, height: 29 }, other: { x: 2342, y: 701, width: 73, height: 14 }, sga: { x: 2342, y: 898, width: 73, height: 56 }, impairment: { x: 2342, y: 1213, width: 73, height: 5 },
      },
      labels,
    },
    nodes: [
      { id: 'hardware_accessories', col: 0, order: 0, type: 'source', label: ['Hardware &', 'Accessories'], value: 535.6, notes: ['(26%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'packaged_software', col: 0, order: 1, type: 'source', label: 'Packaged Software', value: 203.7, notes: ['(29%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'collectibles', col: 0, order: 2, type: 'source', label: 'Collectibles', value: 365.0, notes: ['+35% Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'revenue_by_product', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1104.3, notes: ['(14%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'united_states', col: 2, order: 0, type: 'hub', label: 'United States', value: 788.5, notes: ['(8%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'australia', col: 2, order: 1, type: 'hub', label: 'Australia', value: 161.7, notes: ['+9% Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'europe', col: 2, order: 2, type: 'hub', label: 'Europe', value: 154.1, notes: ['(21%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1104.3, notes: ['(14%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 386.8, notes: ['35% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 717.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 135.2, notes: ['12% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 251.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 6, order: 0, type: 'profit', label: 'Tax benefit', value: 50.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 127.9, notes: ['12% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 7, order: 1, type: 'cost', label: 'Other', value: 58.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 7, order: 2, type: 'cost', label: 'SG&A', value: 241.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'impairment', col: 7, order: 3, type: 'cost', label: 'Impairment', value: 10.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'hardware_accessories', target: 'revenue_by_product', value: 535.6, sourceWidth: 122, targetWidth: 122, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'packaged_software', target: 'revenue_by_product', value: 203.7, sourceWidth: 47, targetWidth: 47, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'collectibles', target: 'revenue_by_product', value: 365.0, sourceWidth: 83, targetWidth: 83, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'revenue_by_product', target: 'united_states', value: 788.5, sourceWidth: 181, targetWidth: 183, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'revenue_by_product', target: 'australia', value: 161.7, sourceWidth: 37, targetWidth: 39, y1: 1009.5, sourceOrder: 1, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'revenue_by_product', target: 'europe', value: 154.1, sourceWidth: 35, targetWidth: 35, sourceOrder: 2, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'united_states', target: 'revenue', value: 788.5, sourceWidth: 183, targetWidth: 181, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'australia', target: 'revenue', value: 161.7, sourceWidth: 39, targetWidth: 37, y0: 1009.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'europe', target: 'revenue', value: 154.1, sourceWidth: 35, targetWidth: 35, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 386.8, sourceWidth: 89, targetWidth: 89, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 717.5, sourceWidth: 165, targetWidth: 166, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 135.2, sourceWidth: 31, targetWidth: 33, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 251.6, sourceWidth: 58, targetWidth: 58, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 77.0, sourceWidth: 18, targetWidth: 18, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 50.9, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 58.2, sourceWidth: 14, targetWidth: 14, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 241.5, sourceWidth: 55, targetWidth: 56, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'impairment', value: 10.1, sourceWidth: 3, targetWidth: 5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['Game', 'Stop'],
      zh: {
        name: '游戏驿站 · 2025 财年第四季度',
        meta: { title: '游戏驿站 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2026 年 1 月 31 日', titleTextLength: 1770 },
        nodes: {
          hardware_accessories: { label: '硬件及配件', notes: ['同比 (26%)'] }, packaged_software: { label: '实体软件', notes: ['同比 (29%)'] }, collectibles: { label: '收藏品', notes: ['同比 +35%'] },
          revenue_by_product: { label: '收入', notes: ['同比 (14%)'] }, united_states: { label: '美国', notes: ['同比 (8%)'] }, australia: { label: '澳大利亚', notes: ['同比 +9%'] }, europe: { label: '欧洲', notes: ['同比 (21%)'] }, revenue: { label: '收入', notes: ['同比 (14%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 35%', '同比 +7 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +6 个百分点'] }, operating_expenses: { label: '营业费用' },
          tax_benefit: { label: '所得税收益' }, net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +1 个百分点'] }, other: { label: '其他' }, sga: { label: '销售、一般及行政费用' }, impairment: { label: '资产减值' },
        },
        annotationsSvg: annotations,
        layout: { labels: zhLabels },
      },
    },
  });
})();

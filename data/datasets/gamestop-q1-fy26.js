/* GameStop Q1 FY26 income statement ($M), reconstructed from the supplied 2667×1500 reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const SOURCE = '#000000';
  const SOURCE_LINK = '#888888';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9acd98';
  const RED = '#d90000';
  const RED_LABEL = '#9d1400';
  const RED_LINK = '#df8282';
  const NOTE = '#666666';
  const RIGHT_X = 2440;
  const text = (value, size, weight = 400, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });
  const above = (x, top, lines, lineGap = 9) => ({ x, top, anchor: 'middle', lineGap, lines });
  const side = (top, lines, x = RIGHT_X, lineGap = 8) => ({ x, top, anchor: 'start', lineGap, lines });
  const gameStopLogo = '<text x="0" y="130" font-family="Arial Black, Arial, sans-serif" font-size="154" font-weight="900" letter-spacing="-11"><tspan fill="#202020">Game</tspan><tspan fill="#f42525">Stop</tspan></text>';

  const labels = {
    hardware_accessories: { blocks: [above(510, 460, [text('$value', 40), text('(3%) Y/Y', 29, 400, NOTE)]), { x: 370, top: 625, anchor: 'end', lines: [text('Hardware &', 40, 800), text('Accessories', 40, 800)] }] },
    packaged_software: { blocks: [above(510, 838, [text('$value', 40), text('(13%) Y/Y', 29, 400, NOTE)]), { x: 370, top: 935, anchor: 'end', lines: [text('Packaged Software', 40, 800)] }] },
    collectibles: { blocks: [above(510, 1100, [text('$value', 40), text('+65% Y/Y', 29, 400, NOTE)]), { x: 368, top: 1231, anchor: 'end', lines: [text('Collectibles', 40, 800)] }] },
    revenue_by_product: { blocks: [above(821, 585, [text('Revenue', 40, 800), text('$value', 40), text('(14%) Y/Y', 29, 400, NOTE)])] },
    united_states: { blocks: [above(1131, 510, [text('$value', 40), text('+21% Y/Y', 29, 400, NOTE)])] },
    australia: { blocks: [above(1131, 927, [text('$value', 40), text('+22% Y/Y', 29, 400, NOTE)])] },
    europe: { blocks: [above(1131, 1141, [text('$value', 40), text('+13% Y/Y', 29, 400, NOTE)])] },
    revenue: { blocks: [above(1443, 581, [text('Revenue', 40, 800), text('$value', 40), text('(14%) Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [above(1755, 410, [text('Gross profit', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('41% margin', 29, 400, NOTE), text('+6pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [above(1755, 1144, [text('Cost of', 40, 800, RED_LABEL), text('revenue', 40, 800, RED_LABEL), text('$value', 40, 400, RED_LABEL)])] },
    operating_profit: { blocks: [above(2066, 290, [text('Operating', 40, 800, GREEN_LABEL), text('profit', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('17% margin', 29, 400, NOTE), text('+19pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [above(2066, 821, [text('Operating', 40, 800, RED_LABEL), text('expenses', 40, 800, RED_LABEL), text('$value', 40, 400, RED_LABEL)])] },
    other_operating_income: { blocks: [{ x: 1965, top: 836, anchor: 'end', lineGap: 4, lines: [text('Other', 29, 800, GREEN_LABEL), text('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [above(2261, 246, [text('Other', 31, 800, GREEN_LABEL), text('$value', 30, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [side(363, [text('Net profit', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('47% margin', 29, 400, NOTE), text('+41pp Y/Y', 29, 400, NOTE)])] },
    tax: { blocks: [side(613, [text('Tax', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
    sga: { blocks: [side(884, [text('SG&A', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
  };

  const zhLabels = {
    hardware_accessories: { blocks: [above(510, 460, [text('$value', 40), text('同比 (3%)', 29, 400, NOTE)]), { x: 370, top: 637, anchor: 'end', lines: [text('硬件及配件', 38, 800)] }] },
    packaged_software: { blocks: [above(510, 838, [text('$value', 40), text('同比 (13%)', 29, 400, NOTE)]), { x: 370, top: 935, anchor: 'end', lines: [text('实体软件', 38, 800)] }] },
    collectibles: { blocks: [above(510, 1100, [text('$value', 40), text('同比 +65%', 29, 400, NOTE)]), { x: 368, top: 1235, anchor: 'end', lines: [text('收藏品', 38, 800)] }] },
    revenue_by_product: { blocks: [above(821, 585, [text('收入', 40, 800), text('$value', 40), text('同比 (14%)', 29, 400, NOTE)])] },
    united_states: { blocks: [above(1131, 510, [text('$value', 40), text('同比 +21%', 29, 400, NOTE)])] },
    australia: { blocks: [above(1131, 927, [text('$value', 40), text('同比 +22%', 29, 400, NOTE)])] },
    europe: { blocks: [above(1131, 1141, [text('$value', 40), text('同比 +13%', 29, 400, NOTE)])] },
    revenue: { blocks: [above(1443, 581, [text('收入', 40, 800), text('$value', 40), text('同比 (14%)', 29, 400, NOTE)])] },
    gross_profit: { blocks: [above(1755, 410, [text('毛利润', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('利润率 41%', 29, 400, NOTE), text('同比 +6 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [above(1755, 1144, [text('收入', 40, 800, RED_LABEL), text('成本', 40, 800, RED_LABEL), text('$value', 40, 400, RED_LABEL)])] },
    operating_profit: { blocks: [above(2066, 290, [text('营业利润', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('利润率 17%', 29, 400, NOTE), text('同比 +19 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [above(2066, 821, [text('营业费用', 40, 800, RED_LABEL), text('$value', 40, 400, RED_LABEL)])] },
    other_operating_income: { blocks: [{ x: 1965, top: 836, anchor: 'end', lineGap: 4, lines: [text('其他', 29, 800, GREEN_LABEL), text('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [above(2261, 246, [text('其他', 31, 800, GREEN_LABEL), text('$value', 30, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [side(363, [text('净利润', 40, 800, GREEN_LABEL), text('$value', 40, 400, GREEN_LABEL), text('利润率 47%', 29, 400, NOTE), text('同比 +41 个百分点', 29, 400, NOTE)])] },
    tax: { blocks: [side(613, [text('税费', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
    sga: { blocks: [side(884, [text('销售、一般及行政费用', 28, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'gamestop-q1-fy26', name: 'GameStop · Q1 FY26', company: 'GameStop',
    meta: {
      company: 'GameStop', title: 'GameStop Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending May 2, 2026', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/gamestop-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2240,
      hidePeriodStamp: true, logoWidth: 750, logoHeight: 155, logoX: 742, logoY: 294, logoViewBox: '0 0 750 155', logoSvg: gameStopLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: SOURCE, label: SOURCE }, hub: { node: SOURCE, label: SOURCE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, nodeRadius: 0,
      type: { name: 40, value: 40, note: 29, lineGap: 9 }, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
    },
    rasterAnnotations: [
      { key: 'hardware-consoles', href: 'data/assets/raster-annotations/gamestop/hardware-consoles-q1-fy26.png', x: 20, y: 370, width: 420, height: 235 },
      { key: 'packaged-software-games', href: 'data/assets/raster-annotations/gamestop/packaged-software-games-q1-fy26.png', x: 120, y: 750, width: 270, height: 180 },
      { key: 'collectibles-figure', href: 'data/assets/raster-annotations/gamestop/collectibles-figure-q1-fy26.png', x: 30, y: 1090, width: 180, height: 225 },
    ],
    layout: {
      scale: 0.354,
      nodes: {
        hardware_accessories: { x: 473, y: 549, width: 74, height: 118 }, packaged_software: { x: 473, y: 928, width: 74, height: 54 }, collectibles: { x: 473, y: 1191, width: 74, height: 124 },
        revenue_by_product: { x: 785, y: 730, width: 72, height: 297 }, united_states: { x: 1096, y: 599, width: 72, height: 231 }, australia: { x: 1096, y: 1022, width: 72, height: 36 }, europe: { x: 1096, y: 1075, width: 72, height: 30 }, revenue: { x: 1408, y: 730, width: 72, height: 297 },
        gross_profit: { x: 1720, y: 599, width: 72, height: 120 }, cost_of_revenue: { x: 1720, y: 942, width: 72, height: 175 }, operating_profit: { x: 2031, y: 535, width: 72, height: 51 }, operating_expenses: { x: 2031, y: 739, width: 72, height: 72 }, other_operating_income: { x: 1809, y: 846, width: 72, height: 1.8 },
        other_income: { x: 2222, y: 330, width: 72, height: 129 }, net_profit: { x: 2342, y: 378, width: 72, height: 139 }, tax: { x: 2342, y: 632, width: 72, height: 41 }, sga: { x: 2342, y: 882, width: 72, height: 72 },
      },
      labels,
    },
    nodes: [
      { id: 'hardware_accessories', col: 0, order: 0, type: 'source', label: ['Hardware &', 'Accessories'], value: 334, notes: ['(3%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'packaged_software', col: 0, order: 1, type: 'source', label: 'Packaged Software', value: 153, notes: ['(13%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'collectibles', col: 0, order: 2, type: 'source', label: 'Collectibles', value: 349, notes: ['+65% Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'revenue_by_product', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 835, notes: ['(14%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'united_states', col: 2, order: 0, type: 'hub', label: 'United States', value: 651, notes: ['+21% Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'australia', col: 2, order: 1, type: 'hub', label: 'Australia', value: 100, notes: ['+22% Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'europe', col: 2, order: 2, type: 'hub', label: 'Europe', value: 85, notes: ['+13% Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 835, notes: ['(14%) Y/Y'], color: SOURCE, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 340, notes: ['41% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 495, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 143, notes: ['17% margin', '+19pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 202, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 5, order: 2, type: 'profit', label: 'Other', value: 5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 6, order: 0, type: 'profit', label: 'Other', value: 363, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 390, notes: ['47% margin', '+41pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 117, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 7, order: 2, type: 'cost', label: 'SG&A', value: 202, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'hardware_accessories', target: 'revenue_by_product', value: 334, width: 118, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK }, { source: 'packaged_software', target: 'revenue_by_product', value: 153, width: 54, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK }, { source: 'collectibles', target: 'revenue_by_product', value: 349, width: 124, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'revenue_by_product', target: 'united_states', value: 651, width: 231, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK }, { source: 'revenue_by_product', target: 'australia', value: 100, sourceWidth: 36, targetWidth: 36, y1: 1040, sourceOrder: 1, targetOrder: 0, linkTint: SOURCE_LINK }, { source: 'revenue_by_product', target: 'europe', value: 85, width: 30, sourceOrder: 2, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'united_states', target: 'revenue', value: 651, width: 231, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK }, { source: 'australia', target: 'revenue', value: 100, sourceWidth: 36, targetWidth: 36, y0: 1040, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK }, { source: 'europe', target: 'revenue', value: 85, width: 30, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 340, width: 120, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_revenue', value: 495, width: 175, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 138, sourceWidth: 48.9, targetWidth: 48.9, y0: 623.45, y1: 559.45, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 202, sourceWidth: 71.1, targetWidth: 72, y0: 683.45, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK }, { source: 'other_operating_income', target: 'operating_expenses', value: 5, sourceWidth: 1.8, targetWidth: 1.8, y0: 846.9, y1: 810.1, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 26, sourceWidth: 9.2, targetWidth: 9.2, y0: 539.6, y1: 512.4, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'other_income', target: 'net_profit', value: 363, sourceWidth: 129, targetWidth: 129, y1: 442.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 117, sourceWidth: 41.4, targetWidth: 41.4, y0: 565.3, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK }, { source: 'operating_expenses', target: 'sga', value: 202, width: 72, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '游戏驿站 · 2026 财年第一季度', meta: { title: '游戏驿站 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 5 月 2 日', titleTextLength: 1770 },
        nodes: {
          hardware_accessories: { label: '硬件及配件', notes: ['同比 (3%)'] }, packaged_software: { label: '实体软件', notes: ['同比 (13%)'] }, collectibles: { label: '收藏品', notes: ['同比 +65%'] }, revenue_by_product: { label: '收入', notes: ['同比 (14%)'] }, united_states: { label: '美国', notes: ['同比 +21%'] }, australia: { label: '澳大利亚', notes: ['同比 +22%'] }, europe: { label: '欧洲', notes: ['同比 +13%'] }, revenue: { label: '收入', notes: ['同比 (14%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 41%', '同比 +6 个百分点'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +19 个百分点'] }, operating_expenses: { label: '营业费用' }, other_operating_income: { label: '其他' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 47%', '同比 +41 个百分点'] }, tax: { label: '税费' }, sga: { label: '销售、一般及行政费用' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

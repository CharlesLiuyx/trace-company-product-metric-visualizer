/* Tilray Brands — Q2 FY26 income statement ($M), measured from the reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#686868';
  const BLUE = '#113da3';
  const SOURCE_LIGHT = '#7098cc';
  const GREEN = '#2fa32a';
  const GREEN_LABEL = '#00934d';
  const GREEN_LINK = '#9bd096';
  const RED = '#d90000';
  const RED_LABEL = '#a51c09';
  const RED_LINK = '#df8585';
  const RIGHT_X = 2428;

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

  const tilraySymbol = `
    <g data-typography-role="brand" aria-label="Tilray Brands mark">
      <circle cx="642" cy="359" r="85" fill="#0d3ba4"/>
      <path d="M556 403 L621 275 L665 344 L641 377 Z" fill="#6f9fd1"/>
      <path d="M642 275 L701 347 L665 344 L621 275 Z" fill="#ffffff"/>
      <path d="M594 430 L665 344 L695 432 C665 449 622 449 594 430 Z" fill="#008b05"/>
    </g>`;

  const labels = {
    beverage_alcohol: { blocks: [
      block(428, 339, [line('$value', 40), line('(21%) Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 429, [line('Beverage', 39, { weight: 800 }), line('alcohol', 39, { weight: 800 })], { lineGap: 7 }),
      block(238, 531, [line('31% gross margin', 28, { color: NOTE })]),
    ] },
    cannabis: { blocks: [
      block(428, 592, [line('$value', 40, { color: GREEN_LABEL }), line('+3% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 722, [line('Cannabis', 39, { weight: 800, color: '#008b05' })]),
      block(238, 773, [line('39% gross margin', 28, { color: NOTE })]),
    ] },
    distribution: { blocks: [
      block(428, 865, [line('$value', 40), line('+26% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1004, [line('Distribution', 39, { weight: 800 })]),
      block(238, 1055, [line('13% gross margin', 28, { color: NOTE })]),
    ] },
    wellness: { blocks: [
      block(428, 1186, [line('$value', 40), line('(0%) Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1254, [line('Wellness', 39, { weight: 800 })]),
      block(238, 1304, [line('32% gross margin', 28, { color: NOTE })]),
    ] },
    revenue: { blocks: [block(894, 534, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+3% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1362, 340, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('26% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_goods_sold: { blocks: [block(1362, 1205, [line('Cost of', 36, { weight: 800, color: RED_LABEL }), line('goods sold', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    operating_loss: { blocks: [block(1628, 958, [line('Operating', 39, { weight: 800, color: RED_LABEL }), line('loss', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL }), line('(10%) margin', 28, { color: NOTE }), line('+10pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1832, 515, [line('Operating', 39, { weight: 800, color: RED_LABEL }), line('expenses', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_X, 422, [line('G&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('24% of revenue', 28, { color: NOTE }), line('+2pp Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    selling: { blocks: [block(RIGHT_X, 599, [line('Selling', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('5% of revenue', 28, { color: NOTE }), line('(2pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    marketing: { blocks: [block(RIGHT_X, 770, [line('Marketing', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('5% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    amortization: { blocks: [block(RIGHT_X, 937, [line('Amortization', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('2% of revenue', 28, { color: NOTE }), line('(9pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    other: { blocks: [block(RIGHT_X, 1107, [line('Other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('1% of revenue', 28, { color: NOTE }), line('(3pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
  };

  const zhLabels = {
    beverage_alcohol: { blocks: [
      block(428, 339, [line('$value', 40), line('同比 (21%)', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 438, [line('酒精饮料', 39, { weight: 800 })]),
      block(238, 531, [line('毛利率 31%', 28, { color: NOTE })]),
    ] },
    cannabis: { blocks: [
      block(428, 592, [line('$value', 40, { color: GREEN_LABEL }), line('同比 +3%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 722, [line('大麻', 39, { weight: 800, color: '#008b05' })]),
      block(238, 773, [line('毛利率 39%', 28, { color: NOTE })]),
    ] },
    distribution: { blocks: [
      block(428, 865, [line('$value', 40), line('同比 +26%', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1004, [line('分销', 39, { weight: 800 })]),
      block(238, 1055, [line('毛利率 13%', 28, { color: NOTE })]),
    ] },
    wellness: { blocks: [
      block(428, 1186, [line('$value', 40), line('同比 (0%)', 29, { color: NOTE })], { lineGap: 12 }),
      block(238, 1254, [line('健康产品', 39, { weight: 800 })]),
      block(238, 1304, [line('毛利率 32%', 28, { color: NOTE })]),
    ] },
    revenue: { blocks: [block(894, 534, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +3%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1362, 340, [line('毛利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 26%', 29, { color: NOTE }), line('同比 (3 个百分点)', 27, { color: NOTE })], { lineGap: 12 })] },
    cost_of_goods_sold: { blocks: [block(1362, 1215, [line('销售成本', 36, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 9 })] },
    operating_loss: { blocks: [block(1628, 968, [line('营业亏损', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL }), line('利润率 (10%)', 28, { color: NOTE }), line('同比 +10 个百分点', 27, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1832, 525, [line('营业费用', 39, { weight: 800, color: RED_LABEL }), line('$value', 39, { color: RED_LABEL })], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_X, 422, [line('一般及行政费用', 30, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 24%', 28, { color: NOTE }), line('同比 +2 个百分点', 27, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    selling: { blocks: [block(RIGHT_X, 599, [line('销售费用', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 5%', 28, { color: NOTE }), line('同比 (2 个百分点)', 27, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    marketing: { blocks: [block(RIGHT_X, 770, [line('市场营销', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 5%', 28, { color: NOTE }), line('同比 (0 个百分点)', 27, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    amortization: { blocks: [block(RIGHT_X, 937, [line('摊销', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 2%', 28, { color: NOTE }), line('同比 (9 个百分点)', 27, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    other: { blocks: [block(RIGHT_X, 1107, [line('其他', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('占收入 1%', 28, { color: NOTE }), line('同比 (3 个百分点)', 27, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tilray-q2-fy26',
    name: 'Tilray Brands · Q2 FY26',
    company: 'Tilray Brands',
    meta: {
      company: 'Tilray Brands',
      title: 'Tilray Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Nov. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/tilray-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2170,
      periodX: 894,
      periodY: 1284,
      periodNoteY: 1327,
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
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LIGHT, hub: SOURCE_LIGHT, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 39, value: 40, note: 28, lineGap: 9 },
    },
    annotationsSvg: tilraySymbol,
    rasterAnnotations: [
      { key: 'tilray-brands-wordmark', href: 'data/assets/raster-annotations/tilray/tilray-brands-wordmark.png', x: 735, y: 270, width: 460, height: 175 },
      { key: 'tilray-beverage-can', href: 'data/assets/raster-annotations/tilray/beverage-can.png', x: 190, y: 288, width: 94, height: 142 },
      { key: 'tilray-cannabis-leaf', href: 'data/assets/raster-annotations/tilray/cannabis-leaf.png', x: 135, y: 580, width: 205, height: 142 },
    ],
    layout: {
      scale: 1,
      nodes: {
        beverage_alcohol: { x: 391, y: 432, width: 72, height: 93 },
        cannabis: { x: 391, y: 684, width: 72, height: 123 },
        distribution: { x: 391, y: 960, width: 72, height: 154 },
        wellness: { x: 391, y: 1279, width: 72, height: 26 },
        revenue: { x: 858, y: 678, width: 72, height: 397 },
        gross_profit: { x: 1326, y: 525, width: 72, height: 105 },
        cost_of_goods_sold: { x: 1326, y: 902, width: 72, height: 290 },
        operating_loss: { x: 1592, y: 894, width: 72, height: 40 },
        operating_expenses: { x: 1796, y: 675, width: 72, height: 145 },
        ga: { x: 2259, y: 418, width: 72, height: 92 },
        selling: { x: 2259, y: 632, width: 72, height: 21 },
        marketing: { x: 2259, y: 801, width: 72, height: 18 },
        amortization: { x: 2259, y: 964, width: 72, height: 9 },
        other: { x: 2259, y: 1116, width: 72, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'beverage_alcohol', col: 0, order: 0, type: 'source', label: ['Beverage', 'alcohol'], value: 50, notes: ['(21%) Y/Y', '31% gross margin'], color: SOURCE_LIGHT, labelColor: SOURCE_LIGHT, linkTint: '#a7bed7' },
      { id: 'cannabis', col: 0, order: 1, type: 'source', label: 'Cannabis', value: 68, notes: ['+3% Y/Y', '39% gross margin'], color: '#008b05', labelColor: '#008b05', linkTint: '#91ba8e' },
      { id: 'distribution', col: 0, order: 2, type: 'source', label: 'Distribution', value: 85, notes: ['+26% Y/Y', '13% gross margin'], color: BLUE, labelColor: BLUE, linkTint: '#839bc9' },
      { id: 'wellness', col: 0, order: 3, type: 'source', label: 'Wellness', value: 15, notes: ['(0%) Y/Y', '32% gross margin'], color: BLUE, labelColor: BLUE, linkTint: '#839bc9' },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 218, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: SOURCE_LIGHT },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 57, notes: ['26% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_goods_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'goods sold'], value: 160, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -22, valueText: '($22M)', notes: ['(10%) margin', '+10pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 80, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 0, type: 'cost', label: 'G&A', value: 51, notes: ['24% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling', col: 5, order: 1, type: 'cost', label: 'Selling', value: 12, notes: ['5% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 2, type: 'cost', label: 'Marketing', value: 10, notes: ['5% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 3, type: 'cost', label: 'Amortization', value: 4, notes: ['2% of revenue', '(9pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 4, type: 'cost', label: 'Other', value: 2, notes: ['1% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'beverage_alcohol', target: 'revenue', value: 50, sourceWidth: 93, targetWidth: 93, y0: 478.5, y1: 724.5, sourceOrder: 0, targetOrder: 0, linkTint: '#a7bed7' },
      { source: 'cannabis', target: 'revenue', value: 68, sourceWidth: 123, targetWidth: 123, y0: 745.5, y1: 832.5, sourceOrder: 0, targetOrder: 1, linkTint: '#91ba8e' },
      { source: 'distribution', target: 'revenue', value: 85, sourceWidth: 154, targetWidth: 154, y0: 1037, y1: 971, sourceOrder: 0, targetOrder: 2, linkTint: '#839bc9' },
      { source: 'wellness', target: 'revenue', value: 15, sourceWidth: 26, targetWidth: 27, y0: 1292, y1: 1061.5, sourceOrder: 0, targetOrder: 3, linkTint: '#839bc9' },
      { source: 'revenue', target: 'gross_profit', value: 57, sourceWidth: 105, targetWidth: 105, y0: 730.5, y1: 577.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_goods_sold', value: 160, sourceWidth: 292, targetWidth: 290, y0: 929.5, y1: 1047, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 57, sourceWidth: 105, targetWidth: 105, y0: 577.5, y1: 727.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 22, sourceWidth: 40, targetWidth: 40, y0: 914, y1: 800, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1664, x1: 1796, c1x: 1708, c1y: 914, c2x: 1752, c2y: 800 } },
      { source: 'operating_expenses', target: 'ga', value: 51, sourceWidth: 93, targetWidth: 92, y0: 721.5, y1: 464, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling', value: 12, sourceWidth: 21, targetWidth: 21, y0: 778.5, y1: 642.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 10, sourceWidth: 18, targetWidth: 18, y0: 798.5, y1: 810, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 4, sourceWidth: 9, targetWidth: 9, y0: 812, y1: 968.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 2, sourceWidth: 4, targetWidth: 4, y0: 818, y1: 1118, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Tilray Brands · 2026 财年第二季度',
        meta: {
          title: 'Tilray 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 11 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        nodes: {
          beverage_alcohol: { label: ['酒精', '饮料'], notes: ['同比 (21%)', '毛利率 31%'] },
          cannabis: { label: '大麻', notes: ['同比 +3%', '毛利率 39%'] },
          distribution: { label: '分销', notes: ['同比 +26%', '毛利率 13%'] },
          wellness: { label: '健康产品', notes: ['同比 (0%)', '毛利率 32%'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 26%', '同比 (3 个百分点)'] },
          cost_of_goods_sold: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (10%)', '同比 +10 个百分点'] },
          operating_expenses: { label: '营业费用' },
          ga: { label: '一般及行政费用', notes: ['占收入 24%', '同比 +2 个百分点'] },
          selling: { label: '销售费用', notes: ['占收入 5%', '同比 (2 个百分点)'] },
          marketing: { label: '市场营销', notes: ['占收入 5%', '同比 (0 个百分点)'] },
          amortization: { label: '摊销', notes: ['占收入 2%', '同比 (9 个百分点)'] },
          other: { label: '其他', notes: ['占收入 1%', '同比 (3 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

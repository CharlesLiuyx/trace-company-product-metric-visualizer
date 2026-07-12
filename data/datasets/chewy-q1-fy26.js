/* Chewy Q1 FY26 income statement ($B), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#6a6a6a';
  const BLUE = '#254ec5';
  const BLUE_LINK = '#8fa4db';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9bce9a';
  const RED = '#df0800';
  const RED_LABEL = '#a31700';
  const RED_LINK = '#df8585';
  const RIGHT_LABEL_X = 2465;

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

  const kpiCard = (x, width, heading, value, options = {}) => `
    <g>
      <rect x="${x}" y="1185" width="${width}" height="165" rx="31" fill="${BLUE}"/>
      <text x="${x + width / 2}" y="1240" text-anchor="middle" font-size="${options.headingSize || 31}" font-weight="800" fill="#fff">${heading}</text>
      <text x="${x + width / 2}" y="1280" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">${value}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(49, 331, isZh ? '活跃客户' : 'Active customers', isZh ? '21.5M（同比 +4%）' : '21.5M (+4% Y/Y)', { headingSize: isZh ? 30 : 31 })}
      ${kpiCard(393, 381, isZh ? '每位客户净销售额' : 'Net sale per customer', isZh ? '$597（同比 +2%）' : '$597 (+2% Y/Y)', { headingSize: isZh ? 28 : 31 })}
      ${kpiCard(787, 304, isZh ? 'Autoship 销售额' : 'Autoship sales', isZh ? '84%（同比 +2 个百分点）' : '84% (+2pp Y/Y)', { headingSize: isZh ? 28 : 31 })}
      <g class="sankey-period-stamp">
        <text x="2158" y="1204" text-anchor="middle" font-size="42" font-weight="800" fill="#666">${isZh ? '2026 财年第一季度' : 'Q1 FY26'}</text>
        <text x="2158" y="1248" text-anchor="middle" font-size="29" fill="#666">${isZh ? '截至 2026 年 5 月' : 'Ending May 2026'}</text>
      </g>
    </g>`;

  const labels = {
    consumables: {
      blocks: [
        block(475, 441, [line('$value', 40), line('+5% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(400, 626, [line('Consumables', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    hardgoods: {
      blocks: [
        block(475, 796, [line('$value', 40), line('+15% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(400, 890, [line('Hardgoods', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    other: {
      blocks: [
        block(475, 965, [line('$value', 40), line('+12% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(400, 1076, [line('Other', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: { blocks: [block(942, 539, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+8% Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1409, 348, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('30% margin', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1409, 1119, [line('Cost of', 36, { weight: 800 }), line('revenue', 36, { weight: 800 }), line('$value', 36)], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1876, 258, [line('Operating profit', 40, { weight: 800 }), line('$value', 40), line('4% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 12 })] },
    interest: { blocks: [block(2222, 425, [line('Interest', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 289, [line('Net profit', 40, { weight: 800 }), line('$value', 40), line('3% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 550, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
    operating_expenses: { blocks: [block(1876, 805, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 850, [line('G&A', 31, { weight: 800 }), line('$value', 29), line('20% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    advertising_marketing: { blocks: [block(RIGHT_LABEL_X, 1055, [line('Advertising &', 30, { weight: 800 }), line('Marketing', 30, { weight: 800 }), line('$value', 29), line('6% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
  };

  const zhLabels = {
    consumables: {
      blocks: [
        block(475, 441, [line('$value', 40), line('同比 +5%', 29, { color: NOTE })], { lineGap: 12 }),
        block(400, 636, [line('消耗品', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    hardgoods: {
      blocks: [
        block(475, 796, [line('$value', 40), line('同比 +15%', 29, { color: NOTE })], { lineGap: 12 }),
        block(400, 900, [line('耐用品', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    other: {
      blocks: [
        block(475, 965, [line('$value', 40), line('同比 +12%', 29, { color: NOTE })], { lineGap: 12 }),
        block(400, 1086, [line('其他', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: { blocks: [block(942, 539, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +8%', 29, { color: NOTE })], { lineGap: 12 })] },
    gross_profit: { blocks: [block(1409, 348, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 30%', 29, { color: NOTE }), line('同比 +0 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    cost_of_revenue: { blocks: [block(1409, 1129, [line('收入', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1876, 258, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 4%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { lineGap: 12 })] },
    interest: { blocks: [block(2222, 435, [line('利息', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    net_profit: { blocks: [block(2438, 299, [line('净利润', 40, { weight: 800 }), line('$value', 40), line('利润率 3%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { anchor: 'start', lineGap: 12 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 560, [line('税费', 31, { weight: 800 }), line('$value', 29)], { anchor: 'start', lineGap: 8 })] },
    operating_expenses: { blocks: [block(1876, 815, [line('营业', 40, { weight: 800 }), line('费用', 40, { weight: 800 }), line('$value', 40)], { lineGap: 9 })] },
    ga: { blocks: [block(2438, 860, [line('一般及行政费用', 30, { weight: 800 }), line('$value', 29), line('占收入 20%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    advertising_marketing: { blocks: [block(2438, 1065, [line('广告与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 6%', 28, { color: NOTE }), line('同比 (0 个百分点)', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chewy-q1-fy26',
    name: 'Chewy · Q1 FY26',
    company: 'Chewy',
    meta: {
      company: 'Chewy',
      title: 'Chewy Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/chewy-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2190,
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
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'chewy-company-wordmark', href: 'data/assets/raster-annotations/chewy/company-wordmark-q1-fy26.png', x: 548, y: 248, width: 700, height: 225 },
      { key: 'chewy-pet-parent-screen', href: 'data/assets/raster-annotations/chewy/pet-parent-screen-q1-fy26.png', x: 1560, y: 1000, width: 530, height: 320 },
    ],
    layout: {
      scale: 1,
      nodes: {
        consumables: { x: 438, y: 534, width: 72, height: 214 },
        hardgoods: { x: 438, y: 889, width: 72, height: 37 },
        other: { x: 438, y: 1058, width: 72, height: 63 },
        revenue: { x: 906, y: 684, width: 72, height: 312 },
        gross_profit: { x: 1374, y: 534, width: 72, height: 94 },
        cost_of_revenue: { x: 1374, y: 879, width: 72, height: 218 },
        operating_profit: { x: 1840, y: 444, width: 72, height: 10 },
        operating_expenses: { x: 1840, y: 703, width: 72, height: 81 },
        interest: { x: 2182, y: 400, width: 72, height: 3 },
        net_profit: { x: 2308, y: 339, width: 72, height: 8 },
        tax: { x: 2308, y: 580, width: 72, height: 3 },
        ga: { x: 2308, y: 862, width: 72, height: 64 },
        advertising_marketing: { x: 2308, y: 1095, width: 72, height: 18 },
      },
      labels,
    },
    nodes: [
      { id: 'consumables', col: 0, order: 0, type: 'source', label: 'Consumables', value: 2.3, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'hardgoods', col: 0, order: 1, type: 'source', label: 'Hardgoods', value: 0.4, notes: ['+15% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other', col: 0, order: 2, type: 'source', label: 'Other', value: 0.7, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.4, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.0, notes: ['30% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.1, valueText: '$0.1M', notes: ['4% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.003, valueText: '$3M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.1, notes: ['3% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.037, valueText: '($37M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 0.7, notes: ['20% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'advertising_marketing', col: 5, order: 3, type: 'cost', label: ['Advertising &', 'Marketing'], value: 0.2, notes: ['6% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'consumables', target: 'revenue', value: 2.3, sourceWidth: 214, targetWidth: 214, y0: 641, y1: 791, sourceOrder: 0, targetOrder: 0 },
      { source: 'hardgoods', target: 'revenue', value: 0.4, sourceWidth: 37, targetWidth: 37, y0: 907.5, y1: 916.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other', target: 'revenue', value: 0.7, sourceWidth: 63, targetWidth: 61, y0: 1089.5, y1: 965.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1.0, sourceWidth: 94, targetWidth: 94, y0: 731, y1: 581, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.3, sourceWidth: 218, targetWidth: 218, y0: 887, y1: 988, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.1, sourceWidth: 10, targetWidth: 10, y0: 539, y1: 449, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9, sourceWidth: 84, targetWidth: 81, y0: 586, y1: 743.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.063, sourceWidth: 7, targetWidth: 5, y0: 447.5, y1: 341.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.037, sourceWidth: 3, targetWidth: 3, y0: 452.5, y1: 581.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 0.003, sourceWidth: 3, targetWidth: 3, y0: 401.5, y1: 345.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.7, sourceWidth: 63, targetWidth: 64, y0: 734.5, y1: 894, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'advertising_marketing', value: 0.2, sourceWidth: 18, targetWidth: 18, y0: 775, y1: 1104, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Chewy · 2026 财年第一季度',
        meta: {
          title: 'Chewy 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 5 月',
          titleSize: 108,
          titleTextLength: 1570,
        },
        annotationsSvg: annotations(true),
        nodes: {
          consumables: { label: '消耗品', notes: ['同比 +5%'] },
          hardgoods: { label: '耐用品', notes: ['同比 +15%'] },
          other: { label: '其他', notes: ['同比 +12%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 30%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          ga: { label: '一般及行政费用', notes: ['占收入 20%', '同比 (1 个百分点)'] },
          advertising_marketing: { label: '广告与营销', notes: ['占收入 6%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

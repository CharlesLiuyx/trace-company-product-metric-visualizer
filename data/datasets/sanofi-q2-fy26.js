/* Sanofi Q2 FY26 income statement (€B), measured against the local reference. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#797979';
  const PURPLE = '#7a00e6';
  const PURPLE_LINK = '#bc85ed';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const sourceNames = (zh = false) => {
    const names = [
      ['immunology', zh ? '免疫' : 'Immunology', 280, 504, 270, 58],
      ['rare_diseases', zh ? '罕见病' : 'Rare diseases', 276, 821, 290, 58],
      ['other', zh ? '其他' : 'Other', 270, 1072, 150, 58],
      ['vaccines', zh ? '疫苗' : 'Vaccines', 273, 1303, 190, 58],
    ];
    return names.map(([id, text, x, y, width, height]) => `
      <g class="sankey-interactive-annotation" data-node="${id}">
        <text x="${x}" y="${y}" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="39" font-weight="700" fill="${PURPLE}">${text}</text>
        <rect x="${x - width / 2}" y="${y - 46}" width="${width}" height="${height}" fill="#ffffff" fill-opacity="0" pointer-events="all"/>
      </g>`).join('');
  };

  const labels = (zh = false) => ({
    immunology: { blocks: [
      block(480, 324, [line('$value', 39, 400), line(zh ? '同比 +38%' : '+38% Y/Y', 28, 400, NOTE)]),
    ] },
    rare_diseases: { blocks: [
      block(474, 653, [line('$value', 39, 400), line(zh ? '同比 +24%' : '+24% Y/Y', 28, 400, NOTE)]),
    ] },
    other: { blocks: [
      block(473, 932, [line('$value', 39, 400), line(zh ? '同比 +4%' : '+4% Y/Y', 28, 400, NOTE)]),
    ] },
    vaccines: { blocks: [
      block(477, 1167, [line('$value', 39, 400), line(zh ? '同比 (5%)' : '(5%) Y/Y', 28, 400, NOTE)]),
    ] },
    biopharma: { blocks: [block(938, 538, [
      line(zh ? '生物制药' : 'Biopharma', 40, 700), line('$value', 39, 400), line(zh ? '同比 +16%' : '+16% Y/Y', 28, 400, NOTE),
    ])] },
    other_revenue: { blocks: [block(1179, 459, [
      line(zh ? '其他收入' : 'Other revenue', 31, 700), line('$value', 30, 400),
    ], 'middle', 5)] },
    gross_profit: { blocks: [block(1407, 403, [
      line(zh ? '毛利润' : 'Gross profit', 40, 700, GREEN_LABEL),
      line('$value', 39, 400, GREEN_LABEL),
      line(zh ? '利润率 80%' : '80% margin', 28, 400, NOTE),
      line(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 28, 400, NOTE),
    ])] },
    cost_of_sales: { blocks: [block(1404, 1184, [
      line(zh ? '销售成本' : 'Cost of sales', 35, 700, RED_LABEL), line('$value', 35, 400, RED_LABEL),
    ], 'middle', 5)] },
    operating_profit: { blocks: [block(1875, 311, [
      line(zh ? '营业利润' : 'Operating profit', 40, 700, GREEN_LABEL),
      line('$value', 39, 400, GREEN_LABEL),
      line(zh ? '利润率 9%' : '9% margin', 28, 400, NOTE),
      line(zh ? '同比 (6 个百分点)' : '(6pp) Y/Y', 28, 400, NOTE),
    ])] },
    operating_expenses: { blocks: [block(1870, 984, [
      line(zh ? '运营' : 'Operating', 35, 700, RED_LABEL),
      line(zh ? '费用' : 'expenses', 35, 700, RED_LABEL),
      line('$value', 35, 400, RED_LABEL),
    ], 'middle', 11)] },
    net_profit: { blocks: [block(2499, 350, [
      line(zh ? '净利润' : 'Net profit', 31, 700, GREEN_LABEL),
      line('$value', 31, 400, GREEN_LABEL),
      line(zh ? '利润率 3%' : '3% margin', 28, 400, NOTE),
      line(zh ? '同比 (36 个百分点)' : '(36pp) Y/Y', 27, 400, NOTE),
    ], 'middle', 17)] },
    tax: { blocks: [block(2498, 547, [line(zh ? '税费' : 'Tax', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    financial: { blocks: [block(2501, 630, [line(zh ? '财务费用' : 'Financial', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    sga: { blocks: [block(2509, 774, [line(zh ? '销售、一般及管理' : 'SG&A', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    rnd: { blocks: [block(2506, 921, [line(zh ? '研发' : 'R&D', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    restructuring: { blocks: [block(2512, 1058, [line(zh ? '重组费用' : 'Restructuring', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    other_operating: { blocks: [block(2512, 1185, [line(zh ? '其他运营费用' : 'Other operating', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    amortization_and_other: { blocks: [block(2506, 1300, [line(zh ? '摊销及' : 'Amortization &', 31, 700, RED_LABEL), line(zh ? '其他 (€0.5B)' : 'other (€0.5B)', 31, 400, RED_LABEL)], 'middle', 6)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sanofi-q2-fy26',
    name: 'Sanofi · Q2 FY26',
    company: 'Sanofi',
    comparisonScale: { anchorNodeId: 'biopharma' },
    meta: {
      company: 'Sanofi',
      title: 'Sanofi Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Three months ended Jun. 30, 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/sanofi-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2130,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: [
          'biopharma:left', 'biopharma:right',
          'other_revenue:right',
          'gross_profit:left',
          'cost_of_sales:left',
          'operating_profit:left',
          'operating_expenses:left',
          'net_profit:left', 'tax:left', 'financial:left', 'sga:left', 'rnd:left',
          'restructuring:left', 'other_operating:left', 'amortization_and_other:left',
        ],
      },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/sanofi/sanofi-q2-company-wordmark.png', x: 600, y: 225, width: 655, height: 180 },
      { key: 'dupixent', href: 'data/assets/raster-annotations/sanofi/sanofi-q2-dupixent.png', x: 155, y: 380, width: 230, height: 90 },
      { key: 'rare-disease-products', href: 'data/assets/raster-annotations/sanofi/sanofi-q2-rare-disease-products.png', x: 150, y: 575, width: 250, height: 205 },
      { key: 'toujeo', href: 'data/assets/raster-annotations/sanofi/sanofi-q2-toujeo.png', x: 170, y: 935, width: 205, height: 105 },
      { key: 'vaccine-products', href: 'data/assets/raster-annotations/sanofi/sanofi-q2-vaccine-products.png', x: 135, y: 1105, width: 270, height: 155 },
    ],
    annotationsSvg: sourceNames(false),
    layout: {
      scale: 31.1,
      nodes: {
        immunology: { x: 440, y: 420, width: 71, height: 159 },
        rare_diseases: { x: 440, y: 750, width: 71, height: 104 },
        other: { x: 440, y: 1031, width: 71, height: 57 },
        vaccines: { x: 440, y: 1265, width: 71, height: 34 },
        biopharma: { x: 907, y: 687, width: 70, height: 361 },
        other_revenue: { x: 1148, y: 547, width: 70, height: 20 },
        gross_profit: { x: 1374, y: 587, width: 71, height: 288 },
        cost_of_sales: { x: 1374, y: 1075, width: 71, height: 93 },
        operating_profit: { x: 1842, y: 495, width: 70, height: 31 },
        operating_expenses: { x: 1842, y: 710, width: 70, height: 255 },
        net_profit: { x: 2308, y: 400, width: 71, height: 10 },
        tax: { x: 2308, y: 575, width: 71, height: 12 },
        financial: { x: 2308, y: 665, width: 71, height: 5 },
        sga: { x: 2308, y: 774, width: 71, height: 74 },
        rnd: { x: 2308, y: 923, width: 71, height: 67 },
        restructuring: { x: 2308, y: 1066, width: 71, height: 47 },
        other_operating: { x: 2308, y: 1195, width: 71, height: 43 },
        amortization_and_other: { x: 2308, y: 1327, width: 71, height: 16 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'revenue', representation: 'data-only' },
    ],
    nodes: [
      { id: 'immunology', col: 0, order: 0, type: 'source', label: 'Immunology', value: 5.1, notes: ['+38% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'rare_diseases', col: 0, order: 1, type: 'source', label: 'Rare diseases', value: 1.9, notes: ['+24% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other', col: 0, order: 2, type: 'source', label: 'Other', value: 3.3, notes: ['+4% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'vaccines', col: 0, order: 3, type: 'source', label: 'Vaccines', value: 1.2, notes: ['(5%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'biopharma', col: 1, order: 0, type: 'hub', label: 'Biopharma', value: 11.6, notes: ['+16% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 2, order: 0, type: 'profit', label: 'Other revenue', value: 0.7 },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 9.3, notes: ['80% margin', '+3pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.0, valueText: '(€3.0B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.0, valueText: '€1.0B', notes: ['9% margin', '(6pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 8.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['3% margin', '(36pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'financial', col: 5, order: 2, type: 'cost', label: 'Financial', value: 0.2 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 2.5 },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.2 },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 1.5 },
      { id: 'other_operating', col: 5, order: 6, type: 'cost', label: 'Other operating', value: 1.4 },
      { id: 'amortization_and_other', col: 5, order: 7, type: 'cost', label: ['Amortization &', 'other'], value: 0.5 },
    ],
    links: [
      { source: 'immunology', target: 'biopharma', value: 5.1, sourceWidth: 159, targetWidth: 160, y0: 499.5, y1: 767, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'rare_diseases', target: 'biopharma', value: 1.9, sourceWidth: 104, targetWidth: 106, y0: 802, y1: 900, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'other', target: 'biopharma', value: 3.3, sourceWidth: 57, targetWidth: 58, y0: 1059.5, y1: 982, sourceOrder: 0, targetOrder: 2, linkTint: PURPLE_LINK },
      { source: 'vaccines', target: 'biopharma', value: 1.2, sourceWidth: 34, targetWidth: 37, y0: 1282, y1: 1029.5, sourceOrder: 0, targetOrder: 3, linkTint: PURPLE_LINK },
      { source: 'biopharma', target: 'gross_profit', value: 8.6, sourceWidth: 267, targetWidth: 268, y0: 820.5, y1: 741, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'biopharma', target: 'cost_of_sales', value: 3.0, sourceWidth: 94, targetWidth: 93, y0: 1001, y1: 1121.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_revenue', target: 'gross_profit', value: 0.7, sourceWidth: 20, targetWidth: 20, y0: 557, y1: 597, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.0, sourceWidth: 30, targetWidth: 31, y0: 602, y1: 510.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.2, sourceWidth: 258, targetWidth: 255, y0: 746, y1: 837.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 10, targetWidth: 10, y0: 500, y1: 405, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 12, targetWidth: 12, y0: 511, y1: 581, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'financial', value: 0.2, sourceWidth: 9, targetWidth: 5, y0: 521.5, y1: 667.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 2.5, sourceWidth: 75, targetWidth: 74, y0: 747.5, y1: 811, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, sourceWidth: 68, targetWidth: 67, y0: 819, y1: 956.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 1.5, sourceWidth: 48, targetWidth: 47, y0: 877, y1: 1089.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 1.4, sourceWidth: 44, targetWidth: 43, y0: 923, y1: 1216.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization_and_other', value: 0.5, sourceWidth: 20, targetWidth: 16, y0: 955, y1: 1335, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '赛诺菲 · 2026 财年第二季度',
        meta: {
          title: '赛诺菲 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的三个月',
          titleSize: 116,
          titleTextLength: 1870,
          hidePeriodStamp: true,
        },
        nodes: {
          immunology: { label: '免疫', notes: ['同比 +38%'] },
          rare_diseases: { label: '罕见病', notes: ['同比 +24%'] },
          other: { label: '其他', notes: ['同比 +4%'] },
          vaccines: { label: '疫苗', notes: ['同比 (5%)'] },
          biopharma: { label: '生物制药', notes: ['同比 +16%'] },
          other_revenue: { label: '其他收入' },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 +3 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 (6 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (36 个百分点)'] },
          tax: { label: '税费' },
          financial: { label: '财务费用' },
          sga: { label: '销售、一般及管理费用' },
          rnd: { label: '研发' },
          restructuring: { label: '重组费用' },
          other_operating: { label: '其他运营费用' },
          amortization_and_other: { label: '摊销及其他' },
        },
        annotationsSvg: sourceNames(true),
        layout: { labels: labels(true) },
      },
    },
  });
})();

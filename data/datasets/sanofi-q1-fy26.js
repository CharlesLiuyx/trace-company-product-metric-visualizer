/* Sanofi Q1 FY26 income statement (€B), measured against the local reference. */
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
      ['immunology', zh ? '免疫' : 'Immunology', 280, 504, 150, 58],
      ['rare_diseases', zh ? '罕见病' : 'Rare diseases', 276, 729, 170, 58],
      ['oncology', zh ? '肿瘤' : 'Oncology', 267, 907, 150, 58],
      ['other', zh ? '其他' : 'Other', 270, 1100, 130, 58],
      ['vaccines', zh ? '疫苗' : 'Vaccines', 273, 1303, 140, 58],
    ];
    return names.map(([id, text, x, y, width, height]) => `
      <g class="sankey-interactive-annotation" data-node="${id}">
        <text x="${x}" y="${y}" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="39" font-weight="700" fill="${PURPLE}">${text}</text>
        <rect x="${x - width / 2}" y="${y - 46}" width="${width}" height="${height}" fill="#ffffff" fill-opacity="0" pointer-events="all"/>
      </g>`).join('');
  };

  const labels = (zh = false) => ({
    immunology: { blocks: [
      block(472, 291, [line('$value', 39, 400), line(zh ? '同比 +20%' : '+20% Y/Y', 28, 400, NOTE)]),
    ] },
    rare_diseases: { blocks: [
      block(472, 588, [line('$value', 39, 400), line(zh ? '同比 +12%' : '+12% Y/Y', 28, 400, NOTE)]),
    ] },
    oncology: { blocks: [
      block(472, 794, [line('$value', 39, 400), line(zh ? '同比 (9%)' : '(9%) Y/Y', 28, 400, NOTE)]),
    ] },
    other: { blocks: [
      block(472, 943, [line('$value', 39, 400), line(zh ? '同比 (5%)' : '(5%) Y/Y', 28, 400, NOTE)]),
    ] },
    vaccines: { blocks: [
      block(472, 1172, [line('$value', 39, 400), line(zh ? '同比 (3%)' : '(3%) Y/Y', 28, 400, NOTE)]),
    ] },
    biopharma: { blocks: [block(937, 538, [
      line(zh ? '生物制药' : 'Biopharma', 40, 700), line('$value', 39, 400), line(zh ? '同比 +6%' : '+6% Y/Y', 28, 400, NOTE),
    ])] },
    other_revenue: { blocks: [block(1166, 420, [
      line(zh ? '其他收入' : 'Other revenue', 31, 700), line('$value', 30, 400),
    ], 'middle', 5)] },
    gross_profit: { blocks: [block(1383, 344, [
      line(zh ? '毛利润' : 'Gross profit', 40, 700, GREEN_LABEL),
      line('$value', 39, 400, GREEN_LABEL),
      line(zh ? '利润率 77%' : '77% margin', 28, 400, NOTE),
      line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 28, 400, NOTE),
    ])] },
    cost_of_sales: { blocks: [block(1404, 1167, [
      line(zh ? '销售成本' : 'Cost of sales', 35, 700, RED_LABEL), line('$value', 35, 400, RED_LABEL),
    ], 'middle', 5)] },
    operating_profit: { blocks: [block(1870, 241, [
      line(zh ? '营业利润' : 'Operating profit', 40, 700, GREEN_LABEL),
      line('$value', 39, 400, GREEN_LABEL),
      line(zh ? '利润率 20%' : '20% margin', 28, 400, NOTE),
      line(zh ? '同比 (3 个百分点)' : '(3pp) Y/Y', 28, 400, NOTE),
    ])] },
    operating_expenses: { blocks: [block(1870, 951, [
      line(zh ? '运营' : 'Operating', 35, 700, RED_LABEL),
      line(zh ? '费用' : 'expenses', 35, 700, RED_LABEL),
      line('$value', 35, 400, RED_LABEL),
    ], 'middle', 5)] },
    net_profit: { blocks: [block(2499, 282, [
      line(zh ? '净利润' : 'Net profit', 31, 700, GREEN_LABEL),
      line('$value', 31, 400, GREEN_LABEL),
      line(zh ? '利润率 15%' : '15% margin', 28, 400, NOTE),
      line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 27, 400, NOTE),
    ], 'middle', 6)] },
    tax: { blocks: [block(2498, 519, [line(zh ? '税费' : 'Tax', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    financial: { blocks: [block(2500, 619, [line(zh ? '财务费用' : 'Financial', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    sga: { blocks: [block(2508, 785, [line(zh ? '销售、一般及管理' : 'SG&A', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    rnd: { blocks: [block(2506, 924, [line(zh ? '研发' : 'R&D', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    other_operating: { blocks: [block(2511, 1061, [line(zh ? '其他运营费用' : 'Other operating', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
    amortization_and_other: { blocks: [block(2508, 1176, [line(zh ? '摊销及' : 'Amortization &', 31, 700, RED_LABEL), line(zh ? '其他 (€0.5B)' : 'other (€0.5B)', 31, 400, RED_LABEL)], 'middle', 6)] },
    restructuring: { blocks: [block(2512, 1299, [line(zh ? '重组费用' : 'Restructuring', 31, 700, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'middle', 6)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sanofi-q1-fy26',
    name: 'Sanofi · Q1 FY26',
    company: 'Sanofi',
    meta: {
      company: 'Sanofi',
      title: 'Sanofi Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Three months ended Mar. 31, 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/sanofi-q1-fy26.png', width: 2667, height: 1500 },
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
          'gross_profit:left', 'gross_profit:right',
          'cost_of_sales:left',
          'operating_profit:left', 'operating_profit:right',
          'operating_expenses:left', 'operating_expenses:right',
          'net_profit:left', 'tax:left', 'financial:left', 'sga:left', 'rnd:left',
          'other_operating:left', 'amortization_and_other:left', 'restructuring:left',
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
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/sanofi/sanofi-q1-company-wordmark.png', x: 600, y: 225, width: 655, height: 180 },
      { key: 'dupixent', href: 'data/assets/raster-annotations/sanofi/sanofi-q1-dupixent.png', x: 155, y: 380, width: 230, height: 90 },
      { key: 'fabrazyme', href: 'data/assets/raster-annotations/sanofi/sanofi-q1-fabrazyme.png', x: 155, y: 545, width: 235, height: 130 },
      { key: 'sarclisa', href: 'data/assets/raster-annotations/sanofi/sanofi-q1-sarclisa.png', x: 165, y: 780, width: 210, height: 85 },
      { key: 'toujeo', href: 'data/assets/raster-annotations/sanofi/sanofi-q1-toujeo.png', x: 170, y: 935, width: 205, height: 110 },
      { key: 'vaccine-products', href: 'data/assets/raster-annotations/sanofi/sanofi-q1-vaccine-products.png', x: 135, y: 1105, width: 270, height: 155 },
    ],
    annotationsSvg: sourceNames(false),
    layout: {
      scale: 32.5,
      nodes: {
        immunology: { x: 434, y: 386, width: 71, height: 140 },
        rare_diseases: { x: 434, y: 684, width: 71, height: 55 },
        oncology: { x: 434, y: 890, width: 71, height: 6 },
        other: { x: 434, y: 1040, width: 71, height: 95 },
        vaccines: { x: 434, y: 1269, width: 71, height: 41 },
        biopharma: { x: 904, y: 689, width: 70, height: 347 },
        other_revenue: { x: 1154, y: 512, width: 70, height: 22 },
        gross_profit: { x: 1368, y: 530, width: 71, height: 268 },
        cost_of_sales: { x: 1368, y: 1046, width: 71, height: 103 },
        operating_profit: { x: 1836, y: 425, width: 70, height: 67 },
        operating_expenses: { x: 1836, y: 735, width: 70, height: 196 },
        net_profit: { x: 2302, y: 311, width: 71, height: 50 },
        tax: { x: 2302, y: 551, width: 71, height: 13 },
        financial: { x: 2302, y: 657, width: 71, height: 2 },
        sga: { x: 2302, y: 783, width: 71, height: 75 },
        rnd: { x: 2302, y: 935, width: 71, height: 56 },
        other_operating: { x: 2302, y: 1081, width: 71, height: 41 },
        amortization_and_other: { x: 2302, y: 1208, width: 71, height: 15 },
        restructuring: { x: 2302, y: 1338, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'revenue', representation: 'data-only' },
    ],
    nodes: [
      { id: 'immunology', col: 0, order: 0, type: 'source', label: 'Immunology', value: 4.3, notes: ['+20% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'rare_diseases', col: 0, order: 1, type: 'source', label: 'Rare diseases', value: 1.8, notes: ['+12% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'oncology', col: 0, order: 2, type: 'source', label: 'Oncology', value: 0.2, notes: ['(9%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 2.9, notes: ['(5%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'vaccines', col: 0, order: 4, type: 'source', label: 'Vaccines', value: 1.3, notes: ['(3%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'biopharma', col: 1, order: 0, type: 'hub', label: 'Biopharma', value: 10.5, notes: ['+6% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 2, order: 0, type: 'profit', label: 'Other revenue', value: 0.7 },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 8.1, notes: ['77% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['20% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.0 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['15% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'financial', col: 5, order: 2, type: 'cost', label: 'Financial', value: 0.1 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 2.3 },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 1.7 },
      { id: 'other_operating', col: 5, order: 5, type: 'cost', label: 'Other operating', value: 1.3 },
      { id: 'amortization_and_other', col: 5, order: 6, type: 'cost', label: ['Amortization &', 'other'], value: 0.5 },
      { id: 'restructuring', col: 5, order: 7, type: 'cost', label: 'Restructuring', value: 0.1 },
    ],
    links: [
      { source: 'immunology', target: 'biopharma', value: 4.3, sourceWidth: 140, targetWidth: 142, y0: 456, y1: 760, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'rare_diseases', target: 'biopharma', value: 1.8, sourceWidth: 55, targetWidth: 59, y0: 711.5, y1: 860.5, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'oncology', target: 'biopharma', value: 0.2, sourceWidth: 6, targetWidth: 7, y0: 893, y1: 893.5, sourceOrder: 0, targetOrder: 2, linkTint: PURPLE_LINK },
      { source: 'other', target: 'biopharma', value: 2.9, sourceWidth: 95, targetWidth: 96, y0: 1087.5, y1: 945, sourceOrder: 0, targetOrder: 3, linkTint: PURPLE_LINK },
      { source: 'vaccines', target: 'biopharma', value: 1.3, sourceWidth: 41, targetWidth: 43, y0: 1289.5, y1: 1014.5, sourceOrder: 0, targetOrder: 4, linkTint: PURPLE_LINK },
      { source: 'biopharma', target: 'gross_profit', value: 7.4, sourceWidth: 243, targetWidth: 246, y0: 810.5, y1: 675, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'biopharma', target: 'cost_of_sales', value: 3.1, sourceWidth: 104, targetWidth: 103, y0: 984, y1: 1097.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_revenue', target: 'gross_profit', value: 0.7, sourceWidth: 22, targetWidth: 22, y0: 523, y1: 541, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 69, targetWidth: 67, y0: 564.5, y1: 458.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.0, sourceWidth: 199, targetWidth: 196, y0: 698.5, y1: 833, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 50, targetWidth: 50, y0: 450, y1: 336, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 14, targetWidth: 13, y0: 482, y1: 557.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'financial', value: 0.1, sourceWidth: 3, targetWidth: 2, y0: 490.5, y1: 658, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 2.3, sourceWidth: 76, targetWidth: 75, y0: 773, y1: 820.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.7, sourceWidth: 57, targetWidth: 56, y0: 839.5, y1: 963, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 1.3, sourceWidth: 43, targetWidth: 41, y0: 889.5, y1: 1101.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization_and_other', value: 0.5, sourceWidth: 16, targetWidth: 15, y0: 919, y1: 1215.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, sourceWidth: 4, targetWidth: 1, y0: 929, y1: 1338.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '赛诺菲 · 2026 财年第一季度',
        meta: {
          title: '赛诺菲 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的三个月',
          titleSize: 116,
          titleTextLength: 1870,
          hidePeriodStamp: true,
        },
        nodes: {
          immunology: { label: '免疫', notes: ['同比 +20%'] },
          rare_diseases: { label: '罕见病', notes: ['同比 +12%'] },
          oncology: { label: '肿瘤', notes: ['同比 (9%)'] },
          other: { label: '其他', notes: ['同比 (5%)'] },
          vaccines: { label: '疫苗', notes: ['同比 (3%)'] },
          biopharma: { label: '生物制药', notes: ['同比 +6%'] },
          other_revenue: { label: '其他收入' },
          gross_profit: { label: '毛利润', notes: ['利润率 77%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          financial: { label: '财务费用' },
          sga: { label: '销售、一般及管理费用' },
          rnd: { label: '研发' },
          other_operating: { label: '其他运营费用' },
          amortization_and_other: { label: '摊销及其他' },
          restructuring: { label: '重组费用' },
        },
        annotationsSvg: sourceNames(true),
        layout: { labels: labels(true) },
      },
    },
  });
})();

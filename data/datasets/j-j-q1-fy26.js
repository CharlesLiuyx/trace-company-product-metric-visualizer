/* J&J Q1 FY26 income statement ($B), measured against the Build-bound reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY = '#666666';
  const GRAY_LINK = '#b3b3b3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BRAND_RED = '#eb1700';
  const RIGHT_X = 2443;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const labels = {
    innovative_medicine: { blocks: [
      block(462.5, 519, [line('$value', 39, 400, NOTE), line('+11% Y/Y', 28, 400, NOTE)]),
      block(246, 640.5, [line('Innovative', 67, 400, BRAND_RED), line('Medicine', 67, 400, BRAND_RED)], 'middle', 4),
    ] },
    medtech: { blocks: [
      block(462.5, 971, [line('$value', 39, 400, NOTE), line('+8% Y/Y', 28, 400, NOTE)]),
      block(236, 1083, [line('MedTech', 67, 400, BRAND_RED)]),
    ] },
    revenue: { blocks: [block(929, 589, [line('Sales', 40, 800, NOTE), line('$value', 39, 400, NOTE), line('+10% Y/Y', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1396.5, 436, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('66% margin', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
    cost_of_products_sold: { blocks: [block(1396.5, 1210, [line('Cost of', 36, 800, RED_LABEL), line('products sold', 36, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 6)] },
    pretax_income: { blocks: [block(1864, 299.5, [line('Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('25% margin', 28, 400, NOTE), line('(37pp) Y/Y', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1864, 979, [line('Expenses', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], 'middle', 6)] },
    net_profit: { blocks: [block(2382, 329.5, [line('Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('22% margin', 28, 400, NOTE), line('(28pp) Y/Y', 28, 400, NOTE)], 'start')] },
    tax: { blocks: [block(2493, 616, [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    other_nonoperating: { blocks: [block(RIGHT_X, 717, [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
    sga: { blocks: [block(2383.5, 864.5, [line('Sales,', 31, 800, RED_LABEL), line('marketing &', 31, 800, RED_LABEL), line('administrative', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('25% of revenue', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)], 'start', 6)] },
    rnd: { blocks: [block(2401, 1132, [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('15% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)], 'start', 7)] },
    other_opex: { blocks: [block(RIGHT_X, 1297, [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
  };

  const zhLabels = {
    innovative_medicine: { blocks: [
      block(462.5, 519, [line('$value', 39, 400, NOTE), line('同比 +11%', 28, 400, NOTE)]),
      block(246, 654, [line('创新', 52, 400, BRAND_RED), line('制药', 52, 400, BRAND_RED)], 'middle', 6),
    ] },
    medtech: { blocks: [
      block(462.5, 971, [line('$value', 39, 400, NOTE), line('同比 +8%', 28, 400, NOTE)]),
      block(236, 1093, [line('医疗科技', 52, 400, BRAND_RED)]),
    ] },
    revenue: { blocks: [block(929, 589, [line('销售额', 40, 800, NOTE), line('$value', 39, 400, NOTE), line('同比 +10%', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1396.5, 436, [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 66%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)])] },
    cost_of_products_sold: { blocks: [block(1396.5, 1210, [line('产品销售', 35, 800, RED_LABEL), line('成本', 35, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 6)] },
    pretax_income: { blocks: [block(1864, 299.5, [line('税前利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 25%', 28, 400, NOTE), line('同比 (37 个百分点)', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1864, 979, [line('费用', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], 'middle', 6)] },
    net_profit: { blocks: [block(2435, 329.5, [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 22%', 28, 400, NOTE), line('同比 (28 个百分点)', 28, 400, NOTE)], 'start')] },
    tax: { blocks: [block(2493, 616, [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    other_nonoperating: { blocks: [block(RIGHT_X, 717, [line('其他', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
    sga: { blocks: [block(2447, 864.5, [line('销售、市场及', 29, 800, RED_LABEL), line('行政费用', 29, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 25%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)], 'start', 6)] },
    rnd: { blocks: [block(RIGHT_X, 1132, [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 15%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)], 'start', 7)] },
    other_opex: { blocks: [block(RIGHT_X, 1297, [line('其他', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'j-j-q1-fy26',
    name: 'J&J · Q1 FY26',
    company: 'Johnson & Johnson',
    meta: {
      company: 'Johnson & Johnson',
      title: 'J&J Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 29, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/j-j-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1920,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: GRAY, label: BRAND_RED },
        hub: { node: GRAY, label: NOTE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'j-j-company-wordmark', href: 'data/assets/raster-annotations/j-j/company-wordmark.png', x: 690, y: 300, width: 470, height: 220 },
      { key: 'j-j-innovative-medicine-icon', href: 'data/assets/raster-annotations/j-j/innovative-medicine-icon.png', x: 166, y: 500, width: 160, height: 160 },
      { key: 'j-j-medtech-icon', href: 'data/assets/raster-annotations/j-j/medtech-icon.png', x: 167, y: 863, width: 170, height: 240 },
    ],
    layout: {
      scale: 1,
      nodes: {
        innovative_medicine: { x: 427, y: 613, width: 71, height: 214 },
        medtech: { x: 427, y: 1068, width: 71, height: 118 },
        revenue: { x: 894, y: 737, width: 70, height: 336 },
        gross_profit: { x: 1361, y: 612, width: 71, height: 223 },
        cost_of_products_sold: { x: 1361, y: 1076, width: 71, height: 112 },
        pretax_income: { x: 1829, y: 477, width: 70, height: 83 },
        operating_expenses: { x: 1829, y: 826, width: 70, height: 136 },
        net_profit: { x: 2295, y: 356, width: 71, height: 70 },
        tax: { x: 2295, y: 652, width: 71, height: 8 },
        other_nonoperating: { x: 2295, y: 759, width: 71, height: 3 },
        sga: { x: 2295, y: 900, width: 71, height: 81 },
        rnd: { x: 2295, y: 1139, width: 71, height: 47 },
        other_opex: { x: 2295, y: 1331, width: 71, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'innovative_medicine', col: 0, order: 0, type: 'source', label: ['Innovative', 'Medicine'], value: 15.4, notes: ['+11% Y/Y'], color: GRAY, labelColor: BRAND_RED, linkTint: GRAY_LINK },
      { id: 'medtech', col: 0, order: 1, type: 'source', label: 'MedTech', value: 8.6, notes: ['+8% Y/Y'], color: GRAY, labelColor: BRAND_RED, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 24.1, notes: ['+10% Y/Y'], color: GRAY, labelColor: NOTE, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 16.0, valueText: '$16.0B', notes: ['66% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_products_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'products sold'], value: 8.1 },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 6.0, valueText: '$6.0B', notes: ['25% margin', '(37pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Expenses', value: 9.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net income', value: 5.2, notes: ['22% margin', '(28pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
      { id: 'other_nonoperating', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.043, valueText: '($43M)', color: '#e0c5c5', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales,', 'marketing &', 'administrative'], value: 6.0, valueText: '($6.0B)', notes: ['25% of revenue', '+2pp Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 3.6, notes: ['15% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.3 },
    ],
    links: [
      { source: 'innovative_medicine', target: 'revenue', value: 15.4, sourceWidth: 214, targetWidth: 216, y0: 720, y1: 845, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'medtech', target: 'revenue', value: 8.6, sourceWidth: 118, targetWidth: 120, y0: 1127, y1: 1013, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 16.0, sourceWidth: 222, targetWidth: 223, y0: 848, y1: 723.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_products_sold', value: 8.1, sourceWidth: 114, targetWidth: 112, y0: 1016, y1: 1132, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'pretax_income', value: 6.0, sourceWidth: 84, targetWidth: 83, y0: 654, y1: 518.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 9.9, sourceWidth: 139, targetWidth: 136, y0: 765.5, y1: 894, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_profit', value: 5.2, sourceWidth: 71, targetWidth: 70, y0: 512.5, y1: 391, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 0.8, sourceWidth: 9, targetWidth: 8, y0: 552.5, y1: 656, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'other_nonoperating', value: 0.043, sourceWidth: 3, targetWidth: 3, y0: 558.5, y1: 760.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 6.0, sourceWidth: 82, targetWidth: 81, y0: 867, y1: 940.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.6, sourceWidth: 49, targetWidth: 47, y0: 932.5, y1: 1162.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.3, sourceWidth: 5, targetWidth: 3, y0: 959.5, y1: 1332.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '强生 · 2026 财年第一季度',
        meta: {
          title: '强生 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 29 日的季度',
          titleSize: 116,
          titleTextLength: 1850,
        },
        nodes: {
          innovative_medicine: { label: ['创新', '制药'], notes: ['同比 +11%'] },
          medtech: { label: '医疗科技', notes: ['同比 +8%'] },
          revenue: { label: '销售额', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 66%', '同比 (0 个百分点)'] },
          cost_of_products_sold: { label: ['产品销售', '成本'] },
          pretax_income: { label: '税前利润', notes: ['利润率 25%', '同比 (37 个百分点)'] },
          operating_expenses: { label: '费用' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 (28 个百分点)'] },
          tax: { label: '税费' },
          other_nonoperating: { label: '其他' },
          sga: { label: ['销售、市场及', '行政费用'], notes: ['占收入 25%', '同比 +2 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

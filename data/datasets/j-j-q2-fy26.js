/* J&J Q2 FY26 income statement ($B), measured against the Build-bound reference. */
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
      block(462.5, 523.5, [line('$value', 39, 400, NOTE), line('+8% Y/Y', 28, 400, NOTE)]),
      { ...block(246, 661.5, [line('Innovative', 67, 400, BRAND_RED), line('Medicine', 67, 400, BRAND_RED)], 'middle', 4), semanticRole: 'reference-offset-side-label' },
    ] },
    medtech: { blocks: [
      block(462.5, 965, [line('$value', 39, 400, NOTE), line('+5% Y/Y', 28, 400, NOTE)]),
      { ...block(236, 1109, [line('MedTech', 67, 400, BRAND_RED)]), semanticRole: 'reference-offset-side-label' },
    ] },
    revenue: { blocks: [block(929, 590, [line('Sales', 40, 800, NOTE), line('$value', 39, 400, NOTE), line('+7% Y/Y', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1396.5, 441, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('68% margin', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)])] },
    cost_of_products_sold: { blocks: [block(1396.5, 1206, [line('Cost of', 36, 800, RED_LABEL), line('products sold', 36, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 6)] },
    pretax_income: { blocks: [block(1864, 289.5, [line('Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('27% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1864, 1004, [line('Expenses', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], 'middle', 6)] },
    net_profit: { blocks: [block(2382, 315.5, [line('Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('22% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)], 'start')] },
    tax: { blocks: [block(2493, 622, [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    sga: { blocks: [block(2383.5, 797.5, [line('Sales,', 31, 800, RED_LABEL), line('marketing &', 31, 800, RED_LABEL), line('administrative', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('25% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)], 'start', 6)] },
    rnd: { blocks: [block(2401, 1086, [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('14% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)], 'start', 7)] },
    other_opex: { blocks: [block(RIGHT_X, 1286, [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
  };

  const zhLabels = {
    innovative_medicine: { blocks: [
      block(462.5, 523.5, [line('$value', 39, 400, NOTE), line('同比 +8%', 28, 400, NOTE)]),
      { ...block(246, 675.5, [line('创新', 52, 400, BRAND_RED), line('制药', 52, 400, BRAND_RED)], 'middle', 6), semanticRole: 'reference-offset-side-label' },
    ] },
    medtech: { blocks: [
      block(462.5, 965, [line('$value', 39, 400, NOTE), line('同比 +5%', 28, 400, NOTE)]),
      { ...block(236, 1119, [line('医疗科技', 52, 400, BRAND_RED)]), semanticRole: 'reference-offset-side-label' },
    ] },
    revenue: { blocks: [block(929, 590, [line('销售额', 40, 800, NOTE), line('$value', 39, 400, NOTE), line('同比 +7%', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1396.5, 441, [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 68%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)])] },
    cost_of_products_sold: { blocks: [block(1396.5, 1206, [line('产品销售', 35, 800, RED_LABEL), line('成本', 35, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 6)] },
    pretax_income: { blocks: [block(1864, 289.5, [line('税前利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 27%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1864, 1004, [line('费用', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], 'middle', 6)] },
    net_profit: { blocks: [block(2435, 315.5, [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 22%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)], 'start')] },
    tax: { blocks: [block(2493, 622, [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    sga: { blocks: [block(2447, 810, [line('销售、市场及', 29, 800, RED_LABEL), line('行政费用', 29, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 25%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)], 'start', 6)] },
    rnd: { blocks: [block(RIGHT_X, 1086, [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 14%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)], 'start', 7)] },
    other_opex: { blocks: [block(RIGHT_X, 1286, [line('其他', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'j-j-q2-fy26',
    name: 'J&J · Q2 FY26',
    company: 'Johnson & Johnson',
    meta: {
      company: 'Johnson & Johnson',
      title: 'J&J Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 28, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/j-j-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'j-j-innovative-medicine-icon', href: 'data/assets/raster-annotations/j-j/innovative-medicine-icon.png', x: 166, y: 528, width: 160, height: 160 },
      { key: 'j-j-medtech-icon', href: 'data/assets/raster-annotations/j-j/medtech-icon.png', x: 167, y: 892, width: 170, height: 240 },
    ],
    layout: {
      scale: 1,
      nodes: {
        innovative_medicine: { x: 428, y: 611, width: 71, height: 221 },
        medtech: { x: 428, y: 1054, width: 71, height: 120 },
        revenue: { x: 895, y: 739, width: 70, height: 342 },
        gross_profit: { x: 1362, y: 620, width: 71, height: 232 },
        cost_of_products_sold: { x: 1362, y: 1074, width: 71, height: 107 },
        pretax_income: { x: 1830, y: 465, width: 70, height: 90 },
        operating_expenses: { x: 1830, y: 845, width: 70, height: 141 },
        net_profit: { x: 2296, y: 328, width: 71, height: 74 },
        tax: { x: 2296, y: 657, width: 71, height: 15 },
        sga: { x: 2296, y: 854, width: 71, height: 86 },
        rnd: { x: 2296, y: 1110, width: 71, height: 49 },
        other_opex: { x: 2296, y: 1320, width: 71, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'innovative_medicine', col: 0, order: 0, type: 'source', label: ['Innovative', 'Medicine'], value: 16.4, notes: ['+8% Y/Y'], color: GRAY, labelColor: BRAND_RED, linkTint: GRAY_LINK },
      { id: 'medtech', col: 0, order: 1, type: 'source', label: 'MedTech', value: 8.9, notes: ['+5% Y/Y'], color: GRAY, labelColor: BRAND_RED, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 25.3, notes: ['+7% Y/Y'], color: GRAY, labelColor: NOTE, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 17.3, notes: ['68% margin', '+0pp Y/Y'] },
      { id: 'cost_of_products_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'products sold'], value: 8.1 },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 6.7, notes: ['27% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Expenses', value: 10.5 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net income', value: 5.5, notes: ['22% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.2 },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: ['Sales,', 'marketing &', 'administrative'], value: 6.4, notes: ['25% of revenue', '+1pp Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 3.7, notes: ['14% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.4 },
    ],
    links: [
      { source: 'innovative_medicine', target: 'revenue', value: 16.4, sourceWidth: 221, targetWidth: 222, y0: 721.5, y1: 850, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'medtech', target: 'revenue', value: 8.9, sourceWidth: 120, targetWidth: 120, y0: 1114, y1: 1021, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 17.3, sourceWidth: 232, targetWidth: 232, y0: 855, y1: 736, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_products_sold', value: 8.1, sourceWidth: 110, targetWidth: 107, y0: 1026, y1: 1127.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'pretax_income', value: 6.7, sourceWidth: 90, targetWidth: 90, y0: 665, y1: 510, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 10.5, sourceWidth: 142, targetWidth: 141, y0: 781, y1: 915.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_profit', value: 5.5, sourceWidth: 74, targetWidth: 74, y0: 502, y1: 365, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.2, sourceWidth: 16, targetWidth: 15, y0: 547, y1: 664.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 6.4, sourceWidth: 87, targetWidth: 86, y0: 888.5, y1: 897, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.7, sourceWidth: 50, targetWidth: 49, y0: 957, y1: 1134.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.4, sourceWidth: 4, targetWidth: 4, y0: 984, y1: 1322, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '强生 · 2026 财年第二季度',
        meta: {
          title: '强生 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 28 日的季度',
          titleSize: 116,
          titleTextLength: 1850,
        },
        nodes: {
          innovative_medicine: { label: ['创新', '制药'], notes: ['同比 +8%'] },
          medtech: { label: '医疗科技', notes: ['同比 +5%'] },
          revenue: { label: '销售额', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 +0 个百分点'] },
          cost_of_products_sold: { label: ['产品销售', '成本'] },
          pretax_income: { label: '税前利润', notes: ['利润率 27%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '费用' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: ['销售、市场及', '行政费用'], notes: ['占收入 25%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

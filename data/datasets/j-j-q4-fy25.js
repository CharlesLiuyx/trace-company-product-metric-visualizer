/* J&J Q4 FY25 income statement ($B), measured against the local reference. */
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
  const RIGHT_X = 2448;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const labels = {
    innovative_medicine: { blocks: [
      block(462.5, 518, [line('$value', 39, 400, NOTE), line('+10% Y/Y', 28, 400, NOTE)]),
      block(246, 680, [line('Innovative', 67, 400, BRAND_RED), line('Medicine', 67, 400, BRAND_RED)], 'middle', 4),
    ] },
    medtech: { blocks: [
      block(462.5, 953, [line('$value', 39, 400, NOTE), line('+7% Y/Y', 28, 400, NOTE)]),
      block(236, 1123, [line('MedTech', 67, 400, BRAND_RED)]),
    ] },
    revenue: { blocks: [block(929, 576, [line('Sales', 40, 800, NOTE), line('$value', 39, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1396.5, 424, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('68% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
    cost_of_products_sold: { blocks: [block(1396.5, 1184, [line('Cost of', 36, 800, RED_LABEL), line('products sold', 36, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 6)] },
    pretax_income: { blocks: [block(1864, 318, [line('Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('22% margin', 28, 400, NOTE), line('+5pp Y/Y', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1864, 932, [line('Expenses', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], 'middle', 6)] },
    tax_benefit: { blocks: [block(2201, 534, [line('Tax benefit', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [block(2441, 348, [line('Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('21% margin', 28, 400, NOTE), line('+6pp Y/Y', 28, 400, NOTE)], 'start')] },
    other_nonoperating: { blocks: [block(RIGHT_X, 628, [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
    sga: { blocks: [block(2447, 783, [line('Sales,', 31, 800, RED_LABEL), line('marketing &', 31, 800, RED_LABEL), line('administrative', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('29% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)], 'start', 6)] },
    rnd: { blocks: [block(RIGHT_X, 1069, [line('R&D', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('17% of revenue', 28, 400, NOTE), line('(6pp) Y/Y', 28, 400, NOTE)], 'start', 7)] },
    other_opex: { blocks: [block(RIGHT_X, 1283, [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
  };

  const zhLabels = {
    innovative_medicine: { blocks: [
      block(462.5, 518, [line('$value', 39, 400, NOTE), line('同比 +10%', 28, 400, NOTE)]),
      block(246, 690, [line('创新', 52, 400, BRAND_RED), line('制药', 52, 400, BRAND_RED)], 'middle', 6),
    ] },
    medtech: { blocks: [
      block(462.5, 953, [line('$value', 39, 400, NOTE), line('同比 +7%', 28, 400, NOTE)]),
      block(246, 1130, [line('医疗科技', 52, 400, BRAND_RED)]),
    ] },
    revenue: { blocks: [block(929, 576, [line('销售额', 40, 800, NOTE), line('$value', 39, 400, NOTE), line('同比 +9%', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1396.5, 424, [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 68%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)])] },
    cost_of_products_sold: { blocks: [block(1396.5, 1184, [line('产品销售', 35, 800, RED_LABEL), line('成本', 35, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 6)] },
    pretax_income: { blocks: [block(1864, 318, [line('税前利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 22%', 28, 400, NOTE), line('同比 +5 个百分点', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1864, 932, [line('费用', 39, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], 'middle', 6)] },
    tax_benefit: { blocks: [block(2201, 534, [line('税收收益', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [block(2441, 348, [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 21%', 28, 400, NOTE), line('同比 +6 个百分点', 28, 400, NOTE)], 'start')] },
    other_nonoperating: { blocks: [block(RIGHT_X, 628, [line('其他', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
    sga: { blocks: [block(2447, 783, [line('销售、市场及', 29, 800, RED_LABEL), line('行政费用', 29, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 29%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)], 'start', 6)] },
    rnd: { blocks: [block(RIGHT_X, 1069, [line('研发', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL), line('占收入 17%', 28, 400, NOTE), line('同比 (6 个百分点)', 28, 400, NOTE)], 'start', 7)] },
    other_opex: { blocks: [block(RIGHT_X, 1283, [line('其他', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start')] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'j-j-q4-fy25',
    name: 'J&J · Q4 FY25',
    company: 'Johnson & Johnson',
    meta: {
      company: 'Johnson & Johnson',
      title: 'J&J Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/j-j-q4-fy25.png', width: 2667, height: 1500 },
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
      { key: 'j-j-innovative-medicine-icon', href: 'data/assets/raster-annotations/j-j/innovative-medicine-icon.png', x: 165, y: 530, width: 160, height: 160 },
      { key: 'j-j-medtech-icon', href: 'data/assets/raster-annotations/j-j/medtech-icon.png', x: 165, y: 890, width: 170, height: 240 },
    ],
    layout: {
      scale: 1,
      nodes: {
        innovative_medicine: { x: 427, y: 618, width: 71, height: 211 },
        medtech: { x: 427, y: 1053, width: 71, height: 118 },
        revenue: { x: 894, y: 727, width: 70, height: 332 },
        gross_profit: { x: 1361, y: 615, width: 71, height: 224 },
        cost_of_products_sold: { x: 1361, y: 1064, width: 71, height: 107 },
        pretax_income: { x: 1829, y: 509, width: 70, height: 72 },
        operating_expenses: { x: 1829, y: 768, width: 70, height: 150 },
        tax_benefit: { x: 2166, y: 518, width: 70, height: 3 },
        net_profit: { x: 2295, y: 393, width: 71, height: 67 },
        other_nonoperating: { x: 2295, y: 678, width: 71, height: 4 },
        sga: { x: 2295, y: 827, width: 71, height: 88 },
        rnd: { x: 2295, y: 1087, width: 71, height: 55 },
        other_opex: { x: 2295, y: 1321, width: 71, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'innovative_medicine', col: 0, order: 0, type: 'source', label: ['Innovative', 'Medicine'], value: 15.8, notes: ['+10% Y/Y'], color: GRAY, labelColor: BRAND_RED, linkTint: GRAY_LINK },
      { id: 'medtech', col: 0, order: 1, type: 'source', label: 'MedTech', value: 8.8, notes: ['+7% Y/Y'], color: GRAY, labelColor: BRAND_RED, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 24.6, notes: ['+9% Y/Y'], color: GRAY, labelColor: NOTE, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 16.6, notes: ['68% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_products_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'products sold'], value: 8.0 },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 5.4, notes: ['22% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Expenses', value: 11.2 },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 0.2, color: 'rgba(44, 160, 44, 0.75)', labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net income', value: 5.1, notes: ['21% margin', '+6pp Y/Y'] },
      { id: 'other_nonoperating', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.5 },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: ['Sales,', 'marketing &', 'administrative'], value: 6.8, notes: ['29% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 4.3, notes: ['17% of revenue', '(6pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.2, color: '#c3a3b9', labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'innovative_medicine', target: 'revenue', value: 15.8, sourceWidth: 211, targetWidth: 215, y0: 723.5, y1: 834.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'medtech', target: 'revenue', value: 8.8, sourceWidth: 118, targetWidth: 117, y0: 1112, y1: 1000.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 16.6, sourceWidth: 224, targetWidth: 224, y0: 839, y1: 727, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_products_sold', value: 8.0, sourceWidth: 107, targetWidth: 107, y0: 1005.5, y1: 1117.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'pretax_income', value: 5.4, sourceWidth: 74, targetWidth: 72, y0: 652, y1: 545, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 11.2, sourceWidth: 150, targetWidth: 150, y0: 764, y1: 843, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_profit', value: 5.1, sourceWidth: 67, targetWidth: 67, y0: 542.5, y1: 426.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 519.5, y1: 458.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'other_nonoperating', value: 0.5, sourceWidth: 7, targetWidth: 4, y0: 577.5, y1: 680, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 6.8, sourceWidth: 88, targetWidth: 88, y0: 812, y1: 871, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 4.3, sourceWidth: 59, targetWidth: 55, y0: 885.5, y1: 1114.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 916.5, y1: 1322.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '强生 · 2025 财年第四季度',
        meta: {
          title: '强生 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleSize: 116,
          titleTextLength: 1850,
        },
        nodes: {
          innovative_medicine: { label: ['创新', '制药'], notes: ['同比 +10%'] },
          medtech: { label: '医疗科技', notes: ['同比 +7%'] },
          revenue: { label: '销售额', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
          cost_of_products_sold: { label: ['产品销售', '成本'] },
          pretax_income: { label: '税前利润', notes: ['利润率 22%', '同比 +5 个百分点'] },
          operating_expenses: { label: '费用' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +6 个百分点'] },
          other_nonoperating: { label: '其他' },
          sga: { label: ['销售、市场及', '行政费用'], notes: ['占收入 29%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 17%', '同比 (6 个百分点)'] },
          other_opex: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

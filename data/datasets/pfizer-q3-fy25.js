/* Pfizer Q3 FY25 income statement ($B), measured against the local reference. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const PURPLE = '#2b00be';
  const BLUE_LINK = '#85c5f7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2420;

  const zhLayoutLabels = {
    primary_care: { blocks: [
      { x: 499, top: 416, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (16%)', size: 28, weight: 400, color: NOTE }] },
      { x: 335, top: 534, anchor: 'middle', lineGap: 4, lines: [{ text: '初级', size: 39, weight: 800 }, { text: '医疗', size: 39, weight: 800 }] },
    ] },
    specialty_care: { blocks: [
      { x: 499, top: 761, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +3%', size: 28, weight: 400, color: NOTE }] },
      { x: 330, top: 852, anchor: 'middle', lineGap: 4, lines: [{ text: '专科', size: 39, weight: 800 }, { text: '医疗', size: 39, weight: 800 }] },
    ] },
    oncology: { blocks: [
      { x: 499, top: 1044, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +5%', size: 28, weight: 400, color: NOTE }] },
      { x: 370, top: 1162, anchor: 'middle', lines: [{ text: '肿瘤', size: 39, weight: 800 }] },
    ] },
    business_innovation: { blocks: [{ x: 873, top: 1046, anchor: 'middle', lineGap: 4, lines: [{ text: '业务', size: 39, weight: 800 }, { text: '创新', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +11%', size: 28, weight: 400, color: NOTE }] }] },
    biopharma: { blocks: [{ x: 873, top: 537, anchor: 'middle', lineGap: 8, lines: [{ text: '生物制药', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (6%)', size: 28, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1247, top: 609, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (6%)', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1620, top: 493, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 75%', size: 28, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1620, top: 1190, anchor: 'middle', lineGap: 5, lines: [{ text: '销售', size: 35, weight: 800 }, { text: '成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1995, top: 394, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 20%', size: 28, weight: 400, color: NOTE }, { text: '同比 (7 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1997, top: 994, anchor: 'middle', lineGap: 5, lines: [{ text: '营业', size: 39, weight: 800 }, { text: '费用', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 442, anchor: 'start', lineGap: 6, lines: [{ text: '净利润', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '同比 21%', size: 28, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2252, top: 614, anchor: 'middle', lineGap: 6, lines: [{ text: '税收收益', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 762, anchor: 'start', lineGap: 6, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 24%', size: 28, weight: 400, color: NOTE }, { text: '同比 +9 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 953, anchor: 'start', lineGap: 6, lines: [{ text: '销售、一般及', size: 31, weight: 800 }, { text: '行政费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 19%', size: 28, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    amortization: { blocks: [{ x: RIGHT_X, top: 1130, anchor: 'start', lineGap: 6, lines: [{ text: '摊销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 7%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    other: { blocks: [{ x: RIGHT_X, top: 1304, anchor: 'start', lineGap: 6, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pfizer-q3-fy25', name: 'Pfizer · Q3 FY25', company: 'Pfizer',
    meta: {
      company: 'Pfizer', title: 'Pfizer Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Quarter ended Sep. 28, 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pfizer-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2070, hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: [
          'biopharma:left',
          'revenue:left',
          'revenue:right',
          'gross_profit:right',
          'net_profit:left',
          'operating_expenses:right',
        ],
      },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: PURPLE, label: PURPLE }, hub: { node: PURPLE, label: PURPLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/pfizer/company-wordmark.png', x: 805, y: 220, width: 655, height: 275 },
      { key: 'primary-care-products', href: 'data/assets/raster-annotations/pfizer/primary-care-products.png', x: 0, y: 431, width: 230, height: 245 },
      { key: 'specialty-care-vyndaqel', href: 'data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png', x: 0, y: 828, width: 230, height: 108 },
      { key: 'oncology-ibrance', href: 'data/assets/raster-annotations/pfizer/oncology-ibrance.png', x: 0, y: 1108, width: 235, height: 115 },
    ],
    layout: {
      scale: 17.25,
      nodes: {
        primary_care: { x: 464, y: 509, width: 71, height: 132 },
        specialty_care: { x: 464, y: 853, width: 71, height: 75 },
        oncology: { x: 464, y: 1140, width: 71, height: 72 },
        biopharma: { x: 838, y: 676, width: 70, height: 282 },
        business_innovation: { x: 838, y: 1241, width: 70, height: 4 },
        revenue: { x: 1212, y: 751, width: 70, height: 288 },
        gross_profit: { x: 1585, y: 676, width: 71, height: 215 },
        cost_of_sales: { x: 1585, y: 1093, width: 71, height: 71 },
        operating_profit: { x: 1959, y: 577, width: 71, height: 55 },
        operating_expenses: { x: 1962, y: 812, width: 70, height: 158 },
        tax: { x: 2217, y: 587, width: 70, height: 3 },
        net_profit: { x: 2332, y: 462, width: 71, height: 60 },
        rnd: { x: 2332, y: 758, width: 71, height: 67 },
        sga: { x: 2332, y: 953, width: 71, height: 53 },
        amortization: { x: 2332, y: 1152, width: 71, height: 20 },
        other: { x: 2332, y: 1324, width: 71, height: 12 },
      },
      labels: {
        primary_care: { blocks: [{ x: 499, top: 416, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(16%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 315, top: 534, anchor: 'middle', lineGap: 4, lines: [{ text: 'Primary', size: 39, weight: 800 }, { text: 'Care', size: 39, weight: 800 }] }] },
        specialty_care: { blocks: [{ x: 499, top: 761, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 311, top: 852, anchor: 'middle', lineGap: 4, lines: [{ text: 'Specialty', size: 39, weight: 800 }, { text: 'Care', size: 39, weight: 800 }] }] },
        oncology: { blocks: [{ x: 499, top: 1044, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 324, top: 1162, anchor: 'middle', lines: [{ text: 'Oncology', size: 39, weight: 800 }] }] },
        business_innovation: { blocks: [{ x: 873, top: 1054, anchor: 'middle', lineGap: 4, lines: [{ text: 'Business', size: 39, weight: 800 }, { text: 'innovation', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        biopharma: { blocks: [{ x: 873, top: 537, anchor: 'middle', lineGap: 8, lines: [{ text: 'Biopharma', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(6%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        revenue: { blocks: [{ x: 1241, top: 609, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(6%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1620, top: 493, anchor: 'middle', lineGap: 8, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '75% margin', size: 28, weight: 400, color: NOTE }, { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1620, top: 1190, anchor: 'middle', lineGap: 5, lines: [{ text: 'Cost', size: 35, weight: 800 }, { text: 'of sales', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1995, top: 394, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '20% margin', size: 28, weight: 400, color: NOTE }, { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1997, top: 984, anchor: 'middle', lineGap: 5, lines: [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2446, top: 453, anchor: 'start', lineGap: 6, lines: [{ text: 'Net profit', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '21% Y/Y', size: 28, weight: 400, color: NOTE }, { text: '(4pp) Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: 2252, top: 607, anchor: 'middle', lineGap: 6, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        rnd: { blocks: [{ x: RIGHT_X, top: 762, anchor: 'start', lineGap: 6, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '24% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+9pp Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 953, anchor: 'start', lineGap: 6, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '19% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        amortization: { blocks: [{ x: RIGHT_X, top: 1130, anchor: 'start', lineGap: 6, lines: [{ text: 'Amortization', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE }] }] },
        other: { blocks: [{ x: 2467, top: 1304, anchor: 'start', lineGap: 6, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      },
    },
    nodes: [
      { id: 'primary_care', col: 0, order: 0, type: 'source', label: ['Primary', 'Care'], value: 7.6, notes: ['(16%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'specialty_care', col: 0, order: 1, type: 'source', label: ['Specialty', 'Care'], value: 4.4, notes: ['+3% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'oncology', col: 0, order: 2, type: 'source', label: 'Oncology', value: 4.3, notes: ['+5% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'biopharma', col: 1, order: 0, type: 'hub', label: 'Biopharma', value: 16.3, notes: ['(6%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'business_innovation', col: 1, order: 1, type: 'source', label: ['Business', 'innovation'], value: 0.3, notes: ['+11% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 16.7, notes: ['(6%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.5, notes: ['75% margin', '+5pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: ['Cost', 'of sales'], value: 4.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.3, notes: ['20% margin', '(7pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 9.1 },
      { id: 'tax', col: 5, order: 0, type: 'profit', label: 'Tax', value: 0.2 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 3.6, notes: ['21% Y/Y', '(4pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 1, type: 'cost', label: 'R&D', value: 3.9, notes: ['24% of revenue', '+9pp Y/Y'] },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 3.2, notes: ['19% of revenue', '+1pp Y/Y'] },
      { id: 'amortization', col: 6, order: 3, type: 'cost', label: 'Amortization', value: 1.2, notes: ['7% of revenue', '(0pp) Y/Y'] },
      { id: 'other', col: 6, order: 4, type: 'cost', label: 'Other', value: 0.8 },
    ],
    links: [
      { source: 'primary_care', target: 'biopharma', value: 7.6, sourceWidth: 132, targetWidth: 132, y0: 575, y1: 742, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'specialty_care', target: 'biopharma', value: 4.4, sourceWidth: 75, targetWidth: 76, y0: 890.5, y1: 846, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'oncology', target: 'biopharma', value: 4.3, sourceWidth: 72, targetWidth: 74, y0: 1176, y1: 921, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'biopharma', target: 'revenue', value: 16.3, sourceWidth: 282, targetWidth: 283, y0: 817, y1: 892.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'business_innovation', target: 'revenue', value: 0.3, sourceWidth: 4, targetWidth: 5, y0: 1243, y1: 1036.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.5, sourceWidth: 215, targetWidth: 215, y0: 858.5, y1: 783.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 4.2, sourceWidth: 73, targetWidth: 71, y0: 1002.5, y1: 1128.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.3, sourceWidth: 56, targetWidth: 55, y0: 704, y1: 604.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 9.1, sourceWidth: 159, targetWidth: 158, y0: 811.5, y1: 891, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 3.3, sourceWidth: 55, targetWidth: 57, y0: 604.5, y1: 490.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'tax', target: 'net_profit', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 588.5, y1: 520.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 3.9, sourceWidth: 67, targetWidth: 67, y0: 845.5, y1: 791.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 3.2, sourceWidth: 55, targetWidth: 53, y0: 906.5, y1: 979.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 1.2, sourceWidth: 24, targetWidth: 20, y0: 946, y1: 1162, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 0.8, sourceWidth: 12, targetWidth: 12, y0: 964, y1: 1330, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '辉瑞 · 2025 财年第三季度',
        meta: { title: '辉瑞 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月 28 日的季度', titleSize: 116, titleTextLength: 1860, hidePeriodStamp: true },
        nodes: {
          primary_care: { label: ['初级', '医疗'], notes: ['同比 (16%)'] },
          specialty_care: { label: ['专科', '医疗'], notes: ['同比 +3%'] },
          oncology: { label: '肿瘤', notes: ['同比 +5%'] },
          biopharma: { label: '生物制药', notes: ['同比 (6%)'] },
          business_innovation: { label: ['业务', '创新'], notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 (6%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 +5 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (7 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          tax: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['同比 21%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 +9 个百分点'] },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 19%', '同比 +1 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 7%', '同比 (0 个百分点)'] },
          other: { label: '其他' },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

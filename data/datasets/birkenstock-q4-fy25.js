/* Birkenstock — Q4 FY25 income statement (€M), measured from the active Build Source. */
(function () {
  const BLUE = '#004b84';
  const BLUE_LINK = '#85a6c0';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const RIGHT_X = 2512;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="113" y="271" fill="${TITLE}" font-size="42" font-weight="800">in euro</text>
    </g>`;
  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="113" y="271" fill="${TITLE}" font-size="36" font-weight="800">单位：欧元</text>
    </g>`;

  const labelsEn = {
    business_to_business: { blocks: [
      { x: 477, top: 381, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 38, weight: 400 },
        { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 240, top: 544, anchor: 'middle', lineGap: 5, lines: [
        { text: 'Business', size: 41, weight: 800 },
        { text: 'to Business', size: 41, weight: 800 },
      ] },
      { x: 240, top: 646, anchor: 'middle', semanticRole: 'note', lines: [
        { text: 'Third-party store networks', size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    direct_to_consumer: { blocks: [
      { x: 477, top: 834, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 40, weight: 400 },
        { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 240, top: 942, anchor: 'middle', lineGap: 5, semanticRole: 'source-group', lines: [
        { text: 'Direct to', size: 41, weight: 800 },
        { text: 'Consumer', size: 41, weight: 800 },
      ] },
      { x: 240, top: 1040, anchor: 'middle', lineGap: 5, semanticRole: 'note', lines: [
        { text: 'Owned retail stores and', size: 29, weight: 400, color: NOTE },
        { text: 'Birkenstock.com', size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    other_revenue: { blocks: [
      { x: 477, top: 1191, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 40, weight: 400 },
        { text: '+108% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 240, top: 1266, anchor: 'middle', lines: [
        { text: 'Other revenue', size: 40, weight: 800 },
      ] },
    ] },
    revenue: { blocks: [{ x: 947, top: 553, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Revenue', size: 41, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1415, top: 407, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Gross profit', size: 41, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '58% margin', size: 29, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_sales: { blocks: [{ x: 1415, top: 1252, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Cost of sales', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1882, top: 250, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Operating profit', size: 41, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '21% margin', size: 29, weight: 400, color: NOTE },
      { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1882, top: 962, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 40, weight: 800 },
      { text: 'expenses', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 295, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Net profit', size: 41, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '18% margin', size: 29, weight: 400, color: NOTE },
      { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    finance: { blocks: [{ x: RIGHT_X, top: 560, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Finance', size: 35, weight: 800 },
      { text: '$value', size: 34, weight: 400 },
    ] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 678, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Tax', size: 35, weight: 800 },
      { text: '$value', size: 34, weight: 400 },
    ] }] },
    selling_distribution: { blocks: [{ x: RIGHT_X, top: 880, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Selling &', size: 35, weight: 800 },
      { text: 'distribution', size: 35, weight: 800 },
      { text: '$value', size: 34, weight: 400 },
      { text: '30% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_X, top: 1109, anchor: 'middle', lineGap: 8, lines: [
      { text: 'G&A', size: 35, weight: 800 },
      { text: '$value', size: 34, weight: 400 },
      { text: '7% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    other_expenses: { blocks: [{ x: RIGHT_X, top: 1295, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Other', size: 35, weight: 800 },
      { text: '$value', size: 34, weight: 400 },
    ] }] },
  };

  const labelsZh = {
    business_to_business: { blocks: [
      { x: 477, top: 381, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +22%', size: 28, weight: 400, color: NOTE }] },
      { x: 240, top: 544, anchor: 'middle', lineGap: 5, lines: [{ text: '企业', size: 41, weight: 800 }, { text: '业务', size: 41, weight: 800 }] },
      { x: 240, top: 646, anchor: 'middle', semanticRole: 'note', lines: [{ text: '第三方门店网络', size: 29, weight: 400, color: NOTE }] },
    ] },
    direct_to_consumer: { blocks: [
      { x: 477, top: 834, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +8%', size: 29, weight: 400, color: NOTE }] },
      { x: 240, top: 942, anchor: 'middle', lineGap: 5, semanticRole: 'source-group', lines: [{ text: '直营', size: 41, weight: 800 }, { text: '消费者', size: 41, weight: 800 }] },
      { x: 240, top: 1040, anchor: 'middle', lineGap: 5, semanticRole: 'note', lines: [{ text: '自营零售门店及', size: 29, weight: 400, color: NOTE }, { text: '勃肯官网', size: 29, weight: 400, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 477, top: 1191, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +108%', size: 29, weight: 400, color: NOTE }] },
      { x: 240, top: 1266, anchor: 'middle', lines: [{ text: '其他收入', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 947, top: 553, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +15%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1415, top: 407, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 58%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1415, top: 1252, anchor: 'middle', lineGap: 8, lines: [{ text: '销售成本', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1882, top: 250, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 21%', size: 29, weight: 400, color: NOTE }, { text: '同比持平', size: 27, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1882, top: 962, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 295, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 18%', size: 29, weight: 400, color: NOTE }, { text: '同比 +6 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    finance: { blocks: [{ x: RIGHT_X, top: 560, anchor: 'middle', lineGap: 8, lines: [{ text: '财务费用', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 678, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    selling_distribution: { blocks: [{ x: RIGHT_X, top: 880, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与', size: 35, weight: 800 }, { text: '分销', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 30%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_X, top: 1109, anchor: 'middle', lineGap: 8, lines: [{ text: '一般及行政', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 7%', size: 29, weight: 400, color: NOTE }, { text: '同比持平', size: 27, weight: 400, color: NOTE }] }] },
    other_expenses: { blocks: [{ x: RIGHT_X, top: 1295, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'birkenstock-q4-fy25',
    name: 'Birkenstock · Q4 FY25',
    company: 'Birkenstock',
    meta: {
      company: 'Birkenstock',
      title: 'Birkenstock Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Sept. 2025',
      currency: '€',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/birkenstock-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 129,
      titleWeight: 800,
      titleTextLength: 2502,
      periodX: 1880,
      periodY: 1237,
      periodNoteY: 1283,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
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
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      { key: 'birkenstock-business-to-business-sandal-q4-fy25', href: 'data/assets/raster-annotations/birkenstock/business-to-business-sandal-q4-fy25.png', x: 60, y: 365, width: 352, height: 171 },
      { key: 'birkenstock-direct-to-consumer-store-q4-fy25', href: 'data/assets/raster-annotations/birkenstock/direct-to-consumer-store-q4-fy25.png', x: 58, y: 710, width: 350, height: 224 },
      { key: 'birkenstock-company-wordmark', href: 'data/assets/raster-annotations/birkenstock/company-wordmark.png', x: 618, y: 278, width: 646, height: 135 },
    ],
    layout: {
      scale: 1,
      nodes: {
        business_to_business: { x: 445, y: 478, width: 71, height: 225 },
        direct_to_consumer: { x: 445, y: 923, width: 71, height: 178 },
        other_revenue: { x: 445, y: 1289, width: 71, height: 2 },
        revenue: { x: 912, y: 702, width: 70, height: 405 },
        gross_profit: { x: 1379, y: 589, width: 71, height: 235 },
        cost_of_sales: { x: 1379, y: 1067, width: 71, height: 168 },
        operating_profit: { x: 1847, y: 429, width: 70, height: 85 },
        operating_expenses: { x: 1847, y: 797, width: 70, height: 147 },
        net_profit: { x: 2313, y: 325, width: 71, height: 72 },
        finance: { x: 2313, y: 599, width: 71, height: 6 },
        tax: { x: 2313, y: 716, width: 71, height: 3 },
        selling_distribution: { x: 2313, y: 916, width: 71, height: 118 },
        ga: { x: 2313, y: 1175, width: 71, height: 26 },
        other_expenses: { x: 2313, y: 1334, width: 71, height: 1 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'business_to_business', col: 0, order: 0, type: 'source', label: ['Business', 'to Business'], value: 293, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'direct_to_consumer', col: 0, order: 1, type: 'source', label: ['Direct to', 'Consumer'], value: 232, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other revenue', value: 1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 526, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 306, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 220, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 112, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 194, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 94, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'finance', col: 4, order: 1, type: 'cost', label: 'Finance', value: 11, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling_distribution', col: 4, order: 3, type: 'cost', label: ['Selling &', 'distribution'], value: 156, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 36, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 5, type: 'cost', label: 'Other', value: 2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'business_to_business', target: 'revenue', value: 293, width: 225, sourceWidth: 225, targetWidth: 225, y0: 590.5, y1: 814.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'direct_to_consumer', target: 'revenue', value: 232, width: 178, sourceWidth: 178, targetWidth: 178, y0: 1012, y1: 1016, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1, width: 2, sourceWidth: 2, targetWidth: 2, y0: 1290, y1: 1106, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 306, width: 235, sourceWidth: 235, targetWidth: 235, y0: 819.5, y1: 706.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 220, width: 168, sourceWidth: 169, targetWidth: 168, y0: 1022.5, y1: 1151, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 112, width: 85, sourceWidth: 85, targetWidth: 85, y0: 631.5, y1: 471.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 194, width: 147, sourceWidth: 150, targetWidth: 147, y0: 749, y1: 870.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 94, width: 72, sourceWidth: 72, targetWidth: 72, y0: 465, y1: 361, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'finance', value: 11, width: 6, sourceWidth: 8, targetWidth: 6, y0: 505, y1: 602, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 7, width: 3, sourceWidth: 5, targetWidth: 3, y0: 511.5, y1: 717.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling_distribution', value: 156, width: 118, sourceWidth: 118, targetWidth: 118, y0: 856, y1: 975, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 36, width: 26, sourceWidth: 27, targetWidth: 26, y0: 928.5, y1: 1188, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_expenses', value: 2, width: 1, sourceWidth: 2, targetWidth: 1, y0: 943, y1: 1334.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '勃肯 · 2025 财年第四季度',
        meta: {
          title: '勃肯 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1810,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          business_to_business: { label: ['企业', '业务'] },
          direct_to_consumer: { label: ['直营', '消费者'] },
          other_revenue: { label: '其他收入' },
          revenue: { label: '收入' },
          gross_profit: { label: '毛利润' },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润' },
          finance: { label: '财务费用' },
          tax: { label: '税费' },
          selling_distribution: { label: ['销售与', '分销'] },
          ga: { label: '一般及行政' },
          other_expenses: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

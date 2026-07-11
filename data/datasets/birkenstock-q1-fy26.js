/* ====================================================================
 * Birkenstock - Q1 FY26 income statement (€M)
 * Reconstructed from input/processed/birkenstock-q1-fy26.png as a fixed
 * d3-sankey layout. The source's sandal, storefront, and proprietary
 * wordmark are validated, background-matched runtime raster annotations;
 * publisher attribution is intentionally not recreated.
 * ==================================================================== */
(function () {
  const BLUE = '#00538b';
  const BLUE_LINK = '#89a9c2';
  const TITLE = '#155077';
  const NOTE = '#6b6b6b';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9bcd9a';
  const RED = '#dc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#df8587';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2500;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="111" y="278" fill="${TITLE}" font-size="42" font-weight="800">in euro</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="111" y="278" fill="${TITLE}" font-size="36" font-weight="800">单位：欧元</text>
    </g>`;

  const labelsEn = {
    business_to_business: { blocks: [
      { x: 477, top: 426, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 40, weight: 400 },
        { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 241, top: 558, anchor: 'middle', lineGap: 5, lines: [
        { text: 'Business', size: 41, weight: 800 },
        { text: 'to Business', size: 41, weight: 800 },
      ] },
      { x: 241, top: 654, anchor: 'middle', lines: [{ text: 'Third-party store networks', size: 29, weight: 400, color: NOTE }] },
    ] },
    direct_to_consumer: { blocks: [
      { x: 477, top: 815, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 40, weight: 400 },
        { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 241, top: 954, anchor: 'middle', lineGap: 5, lines: [
        { text: 'Direct to', size: 41, weight: 800 },
        { text: 'Consumer', size: 41, weight: 800 },
      ] },
      { x: 241, top: 1057, anchor: 'middle', lineGap: 5, lines: [
        { text: 'Owned retail stores and', size: 29, weight: 400, color: NOTE },
        { text: 'Birkenstock.com', size: 29, weight: 400, color: NOTE },
      ] },
    ] },
    other_revenue: { blocks: [
      { x: 477, top: 1169, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 40, weight: 400 },
        { text: '(49%) Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 240, top: 1232, anchor: 'middle', lines: [{ text: 'Other revenue', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 945, top: 558, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Revenue', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 },
      { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1412, top: 383, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Gross profit', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 },
      { text: '56% margin', size: 29, weight: 400, color: NOTE }, { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_sales: { blocks: [{ x: 1412, top: 1240, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Cost of sales', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1877, top: 248, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Operating profit', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 },
      { text: '19% margin', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    other_income: { blocks: [{ x: 1761, top: 588, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Other', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 },
    ] }] },
    operating_expenses: { blocks: [{ x: 1877, top: 932, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 252, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Net profit', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 },
      { text: '13% margin', size: 29, weight: 400, color: NOTE }, { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 563, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Tax', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 },
    ] }] },
    finance: { blocks: [{ x: RIGHT_LABEL_X, top: 688, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Finance', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 },
    ] }] },
    selling_distribution: { blocks: [{ x: RIGHT_LABEL_X, top: 872, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Selling &', size: 35, weight: 800 }, { text: 'distribution', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 },
      { text: '31% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1103, anchor: 'middle', lineGap: 8, lines: [
      { text: 'G&A', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 },
      { text: '7% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    other_expenses: { blocks: [{ x: RIGHT_LABEL_X, top: 1275, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Other', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 },
    ] }] },
  };

  const labelsZh = {
    business_to_business: { blocks: [
      { x: 477, top: 426, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +18%', size: 29, weight: 400, color: NOTE }] },
      { x: 241, top: 566, anchor: 'middle', lineGap: 5, lines: [{ text: '企业', size: 41, weight: 800 }, { text: '业务', size: 41, weight: 800 }] },
      { x: 241, top: 654, anchor: 'middle', lines: [{ text: '第三方门店网络', size: 29, weight: 400, color: NOTE }] },
    ] },
    direct_to_consumer: { blocks: [
      { x: 477, top: 815, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +4%', size: 29, weight: 400, color: NOTE }] },
      { x: 241, top: 962, anchor: 'middle', lineGap: 5, lines: [{ text: '直营', size: 41, weight: 800 }, { text: '消费者', size: 41, weight: 800 }] },
      { x: 241, top: 1057, anchor: 'middle', lineGap: 5, lines: [{ text: '自营零售门店及', size: 29, weight: 400, color: NOTE }, { text: '勃肯官网', size: 29, weight: 400, color: NOTE }] },
    ] },
    other_revenue: { blocks: [
      { x: 477, top: 1169, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 (49%)', size: 29, weight: 400, color: NOTE }] },
      { x: 240, top: 1232, anchor: 'middle', lines: [{ text: '其他收入', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 945, top: 558, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +11%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1412, top: 383, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 56%', size: 29, weight: 400, color: NOTE }, { text: '同比 (5 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1412, top: 1240, anchor: 'middle', lineGap: 8, lines: [{ text: '销售成本', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1877, top: 248, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 19%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    other_income: { blocks: [{ x: 1761, top: 588, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    operating_expenses: { blocks: [{ x: 1877, top: 932, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 252, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 41, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 13%', size: 29, weight: 400, color: NOTE }, { text: '同比 +7 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 563, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    finance: { blocks: [{ x: RIGHT_LABEL_X, top: 688, anchor: 'middle', lineGap: 8, lines: [{ text: '财务费用', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
    selling_distribution: { blocks: [{ x: RIGHT_LABEL_X, top: 872, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与', size: 35, weight: 800 }, { text: '分销', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 31%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1103, anchor: 'middle', lineGap: 8, lines: [{ text: '一般及行政', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '占收入 7%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE }] }] },
    other_expenses: { blocks: [{ x: RIGHT_LABEL_X, top: 1275, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'birkenstock-q1-fy26',
    name: 'Birkenstock · Q1 FY26',
    company: 'Birkenstock',
    meta: {
      company: 'Birkenstock',
      title: 'Birkenstock Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/birkenstock-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 129,
      titleWeight: 800,
      titleTextLength: 2502,
      periodX: 1966,
      periodY: 1200,
      periodNoteY: 1245,
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
      { key: 'birkenstock-business-to-business-sandal', href: 'data/assets/raster-annotations/birkenstock/business-to-business-sandal.png', x: 52, y: 365, width: 365, height: 190 },
      { key: 'birkenstock-direct-to-consumer-store', href: 'data/assets/raster-annotations/birkenstock/direct-to-consumer-store.png', x: 58, y: 720, width: 350, height: 228 },
      { key: 'birkenstock-company-wordmark', href: 'data/assets/raster-annotations/birkenstock/company-wordmark.png', x: 618, y: 278, width: 646, height: 135 },
    ],
    layout: {
      scale: 1,
      nodes: {
        business_to_business: { x: 440, y: 522, width: 74, height: 210 },
        direct_to_consumer: { x: 440, y: 908, width: 74, height: 181 },
        other_revenue: { x: 440, y: 1266, width: 74, height: 1 },
        revenue: { x: 908, y: 704, width: 74, height: 392 },
        gross_profit: { x: 1375, y: 574, width: 73, height: 219 },
        cost_of_sales: { x: 1375, y: 1048, width: 73, height: 173 },
        other_income: { x: 1724, y: 560, width: 73, height: 12 },
        operating_profit: { x: 1840, y: 443, width: 74, height: 78 },
        operating_expenses: { x: 1840, y: 762, width: 74, height: 155 },
        net_profit: { x: 2309, y: 327, width: 73, height: 50 },
        tax: { x: 2309, y: 595, width: 73, height: 19 },
        finance: { x: 2309, y: 724, width: 73, height: 6 },
        selling_distribution: { x: 2309, y: 872, width: 73, height: 124 },
        ga: { x: 2309, y: 1119, width: 73, height: 28 },
        other_expenses: { x: 2309, y: 1306, width: 73, height: 3 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'business_to_business', col: 0, order: 0, type: 'source', label: ['Business', 'to Business'], value: 215, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'direct_to_consumer', col: 0, order: 1, type: 'source', label: ['Direct to', 'Consumer'], value: 186, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other revenue', value: 1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 402, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 224, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 178, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 12, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 78, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 158, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 51, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 19, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'finance', col: 4, order: 2, type: 'cost', label: 'Finance', value: 9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling_distribution', col: 4, order: 3, type: 'cost', label: ['Selling &', 'distribution'], value: 126, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 29, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 5, type: 'cost', label: 'Other', value: 3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'business_to_business', target: 'revenue', value: 215, width: 210, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'direct_to_consumer', target: 'revenue', value: 186, width: 181, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1, width: 1, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 224, width: 219, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 178, width: 173, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 66, width: 64, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 158, width: 155, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 12, width: 12, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 51, width: 50, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 19, width: 19, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'finance', value: 9, width: 9, sourceWidth: 9, targetWidth: 6, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling_distribution', value: 126, width: 124, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 29, width: 28, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_expenses', value: 3, width: 3, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '勃肯 · 2026 财年第一季度',
        meta: {
          title: '勃肯 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
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
          other_income: { label: '其他' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          finance: { label: '财务费用' },
          selling_distribution: { label: ['销售与', '分销'] },
          ga: { label: '一般及行政' },
          other_expenses: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

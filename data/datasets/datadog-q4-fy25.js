/* ====================================================================
 * Datadog - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/datadog-q4-fy25.png as a fixed
 * d3-sankey layout. The Datadog wordmark reuses the validated Q1 FY26
 * runtime asset because the source cluster is materially identical.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const PURPLE = '#632ca6';
  const PURPLE_CARD = '#632ba6';
  const PURPLE_NAME = '#632ba6';
  const PURPLE_LABEL = '#612ba6';
  const PURPLE_LINK = '#b299cf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2464;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const label = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const labelGroup = (...blocks) => ({ blocks });

  const kpiCards = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="102" y="1143" width="205" height="166" rx="34" fill="${PURPLE_CARD}"/>
      <text x="205" y="1217" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.dbnr}</text>
      <text x="205" y="1262" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">${labels.dbnrValue}</text>

      <rect x="321" y="1143" width="516" height="166" rx="34" fill="${PURPLE_CARD}"/>
      <text x="579" y="1217" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${labels.customers}</tspan><tspan font-weight="500"> 32,700 ${labels.customerGrowth}</tspan>
      </text>
      <text x="579" y="1262" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${labels.largeCustomers}</tspan><tspan font-weight="500"> 4,310 ${labels.largeCustomerGrowth}</tspan>
      </text>

      <text x="210" y="1348" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = kpiCards({
    dbnr: 'DBNR',
    dbnrValue: 'about 120%',
    customers: 'Customers',
    customerGrowth: '+9% Y/Y',
    largeCustomers: '&gt; $100K',
    largeCustomerGrowth: '+19% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = kpiCards({
    dbnr: 'DBNR',
    dbnrValue: '约 120%',
    customers: '客户数',
    customerGrowth: '同比 +9%',
    largeCustomers: '&gt; $100K 客户',
    largeCustomerGrowth: '同比 +19%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    north_america: labelGroup(
      label(421, 412, 'middle', [line('$value', 40), line('+31% Y/Y', 29, 400, NOTE)]),
      label(217, 586, 'middle', [line('North', 40, 800, PURPLE_NAME), line('America', 40, 800, PURPLE_NAME)], 10)
    ),
    international: labelGroup(
      label(421, 892, 'middle', [line('$value', 40), line('+24% Y/Y', 29, 400, NOTE)]),
      label(219, 1024, 'middle', [line('International', 40, 800)])
    ),
    revenue: labelGroup(label(884, 455, 'middle', [line('Revenue', 40, 800), line('$value', 40), line('+29% Y/Y', 29, 400, NOTE)], 9)),
    gross_profit: labelGroup(label(1354, 322, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('80% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 9)),
    cost_of_revenue: labelGroup(label(1354, 1111, 'middle', [line('Cost of', 35, 800), line('revenue', 35, 800), line('$value', 36)], 10)),
    operating_profit: labelGroup(label(1821, 248, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('1% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)])),
    operating_expenses: labelGroup(label(1822, 916, 'middle', [line('Operating', 35, 800), line('expenses', 35, 800), line('$value', 38)], 10)),
    other: labelGroup(label(2170, 413, 'middle', [line('Other', 31, 800), line('$value', 30)], 11)),
    net_profit: labelGroup(label(2356, 298, 'start', [line('Net profit', 40, 800), line('$value', 40)], 11)),
    tax: labelGroup(label(2453, 485, 'middle', [line('Tax', 31, 800), line('$value', 30)], 10)),
    rnd: labelGroup(label(2447, 660, 'middle', [line('R&D', 31, 800), line('$value', 30), line('44% of revenue', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 9)),
    sm: labelGroup(label(2450, 920, 'middle', [line('S&M', 31, 800), line('$value', 30), line('28% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 9)),
    ga: labelGroup(label(2452, 1130, 'middle', [line('G&A', 31, 800), line('$value', 30), line('8% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 9)),
  };

  const labelsZh = {
    north_america: labelGroup(
      label(421, 412, 'middle', [line('$value', 40), line('同比 +31%', 29, 400, NOTE)]),
      label(217, 642, 'middle', [line('北美', 40, 800)])
    ),
    international: labelGroup(
      label(421, 892, 'middle', [line('$value', 40), line('同比 +24%', 29, 400, NOTE)]),
      label(219, 1024, 'middle', [line('国际', 40, 800)])
    ),
    revenue: labelGroup(label(884, 455, 'middle', [line('收入', 40, 800), line('$value', 40), line('同比 +29%', 29, 400, NOTE)], 9)),
    gross_profit: labelGroup(label(1354, 322, 'middle', [line('毛利润', 40, 800), line('$value', 40), line('利润率 80%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 9)),
    cost_of_revenue: labelGroup(label(1354, 1111, 'middle', [line('收入', 35, 800), line('成本', 35, 800), line('$value', 36)], 10)),
    operating_profit: labelGroup(label(1821, 248, 'middle', [line('营业利润', 40, 800), line('$value', 40), line('利润率 1%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)])),
    operating_expenses: labelGroup(label(1822, 933, 'middle', [line('营业', 35, 800), line('费用', 35, 800), line('$value', 38)], 10)),
    other: labelGroup(label(2170, 413, 'middle', [line('其他', 31, 800), line('$value', 30)], 11)),
    net_profit: labelGroup(label(2356, 298, 'start', [line('净利润', 40, 800), line('$value', 40)], 11)),
    tax: labelGroup(label(2453, 485, 'middle', [line('税费', 31, 800), line('$value', 30)], 10)),
    rnd: labelGroup(label(2447, 660, 'middle', [line('研发', 31, 800), line('$value', 30), line('占收入 44%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 9)),
    sm: labelGroup(label(2450, 920, 'middle', [line('销售与营销', 31, 800), line('$value', 30), line('占收入 28%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 9)),
    ga: labelGroup(label(2452, 1130, 'middle', [line('管理费用', 31, 800), line('$value', 30), line('占收入 8%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 9)),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'datadog-q4-fy25',
    name: 'Datadog · Q4 FY25',
    company: 'Datadog',
    meta: {
      company: 'Datadog',
      title: 'Datadog Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/datadog-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 201,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2252,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE_LABEL },
        hub: { node: PURPLE, label: PURPLE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [{
      key: 'company-wordmark',
      href: 'data/assets/raster-annotations/datadog/company-wordmark.png',
      x: 540,
      y: 285,
      width: 620,
      height: 170,
    }],
    layout: {
      scale: 1,
      nodes: {
        north_america: { x: 384, y: 514, width: 71, height: 265 },
        international: { x: 384, y: 993, width: 71, height: 106 },
        revenue: { x: 851, y: 608, width: 70, height: 374 },
        gross_profit: { x: 1318, y: 514, width: 71, height: 299 },
        cost_of_revenue: { x: 1318, y: 1027, width: 71, height: 71 },
        operating_profit: { x: 1786, y: 439, width: 70, height: 1 },
        operating_expenses: { x: 1786, y: 608, width: 70, height: 295 },
        other: { x: 2133, y: 386, width: 70, height: 15 },
        net_profit: { x: 2252, y: 339, width: 71, height: 16 },
        tax: { x: 2252, y: 528, width: 71, height: 2 },
        rnd: { x: 2252, y: 648, width: 71, height: 162 },
        sm: { x: 2252, y: 930, width: 71, height: 103 },
        ga: { x: 2252, y: 1162, width: 71, height: 26 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: 'North America', value: 679, notes: ['+31% Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 275, notes: ['+24% Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 953, notes: ['+29% Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 766, notes: ['80% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 187 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 9, notes: ['1% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 757 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 44 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 47 },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 7 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 418, notes: ['44% of revenue', '+1pp Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 264, notes: ['28% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 74, notes: ['8% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 679, sourceWidth: 265, targetWidth: 268, y0: 646.5, y1: 742, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 275, width: 106, y0: 1046, y1: 929, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 766, width: 299, y0: 757.5, y1: 663.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 187, sourceWidth: 75, targetWidth: 71, y0: 944.5, y1: 1062.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 9, sourceWidth: 4, targetWidth: 1, y0: 516, y1: 439.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 757, width: 295, y0: 665.5, y1: 755.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 9, width: 1, y0: 439.5, y1: 339.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 7, sourceWidth: 1, targetWidth: 2, y0: 439.5, y1: 529, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 44, width: 15, y0: 393.5, y1: 347.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 418, sourceWidth: 163, targetWidth: 162, y0: 689.5, y1: 729, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 264, width: 103, y0: 822.5, y1: 981.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 74, sourceWidth: 29, targetWidth: 26, y0: 888.5, y1: 1175, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Datadog · 2025 财年第四季度',
        meta: { title: 'Datadog 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleSize: 112, titleTextLength: 1900 },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +31%'] },
          international: { label: '国际', notes: ['同比 +24%'] },
          revenue: { label: '收入', notes: ['同比 +29%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 44%', '同比 +1 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 28%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

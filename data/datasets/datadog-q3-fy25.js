/* Datadog - Q3 FY25 income statement ($M).
 * Measured against input/processed/datadog-q3-fy25.png. */
(function () {
  const TITLE = '#155077';
  const PURPLE = '#632ca6';
  const PURPLE_LINK = '#b299cf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2454;

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const label = (x, top, anchor, lines, lineGap = 8) => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });
  const labelGroup = (...blocks) => ({ blocks });

  const kpiCards = (labels) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="102" y="1143" width="205" height="166" rx="34" fill="${PURPLE}"/>
      <text x="205" y="1217" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.dbnr}</text>
      <text x="205" y="1262" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">${labels.dbnrValue}</text>

      <rect x="321" y="1143" width="516" height="166" rx="34" fill="${PURPLE}"/>
      <text x="579" y="1217" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${labels.customers}</tspan><tspan font-weight="500"> 32,000 ${labels.customerGrowth}</tspan>
      </text>
      <text x="579" y="1262" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${labels.largeCustomers}</tspan><tspan font-weight="500"> 4,060 ${labels.largeCustomerGrowth}</tspan>
      </text>

      <text x="210" y="1348" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = kpiCards({
    dbnr: 'DBNR',
    dbnrValue: 'about 120%',
    customers: 'Customers',
    customerGrowth: '+10% Y/Y',
    largeCustomers: '&gt; $100K',
    largeCustomerGrowth: '+16% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = kpiCards({
    dbnr: 'DBNR',
    dbnrValue: '约 120%',
    customers: '客户数',
    customerGrowth: '同比 +10%',
    largeCustomers: '&gt; $100K 客户',
    largeCustomerGrowth: '同比 +16%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    north_america: labelGroup(
      label(418, 426, 'middle', [line('$value', 40), line('+31% Y/Y', 29, 400, NOTE)]),
      label(216, 588, 'middle', [line('North', 40, 800), line('America', 40, 800)], 10)
    ),
    international: labelGroup(
      label(423, 888, 'middle', [line('$value', 40), line('+23% Y/Y', 29, 400, NOTE)]),
      label(217, 1001, 'middle', [line('International', 40, 800)])
    ),
    revenue: labelGroup(
      label(882, 495, 'middle', [
        line('Revenue', 40, 800),
        line('$value', 40),
        line('+28% Y/Y', 29, 400, NOTE),
      ])
    ),
    gross_profit: labelGroup(
      label(1354, 335, 'middle', [
        line('Gross profit', 40, 800),
        line('$value', 40),
        line('80% margin', 29, 400, NOTE),
        line('+0pp Y/Y', 29, 400, NOTE),
      ])
    ),
    cost_of_revenue: labelGroup(
      label(1348, 1089, 'middle', [
        line('Cost of', 37, 800),
        line('revenue', 37, 800),
        line('$value', 36),
      ])
    ),
    operating_loss: labelGroup(
      label(1620, 1069, 'middle', [
        line('Operating', 40, 800),
        line('loss', 40, 800),
        line('$value', 40),
        line('(1%) margin', 29, 400, NOTE),
        line('(4pp) Y/Y', 29, 400, NOTE),
      ])
    ),
    operating_expenses: labelGroup(
      label(1822, 490, 'middle', [
        line('Operating', 40, 800),
        line('expenses', 40, 800),
        line('$value', 38),
      ])
    ),
    rnd: labelGroup(
      label(RIGHT_LABEL_X, 487, 'middle', [
        line('R&D', 31, 800),
        line('$value', 30),
        line('45% of revenue', 29, 400, NOTE),
        line('+3pp Y/Y', 29, 400, NOTE),
      ])
    ),
    sm: labelGroup(
      label(RIGHT_LABEL_X, 794, 'middle', [
        line('S&M', 31, 800),
        line('$value', 30),
        line('27% of revenue', 29, 400, NOTE),
        line('(0pp) Y/Y', 29, 400, NOTE),
      ])
    ),
    ga: labelGroup(
      label(RIGHT_LABEL_X, 1034, 'middle', [
        line('G&A', 31, 800),
        line('$value', 30),
        line('8% of revenue', 29, 400, NOTE),
        line('+1pp Y/Y', 29, 400, NOTE),
      ])
    ),
  };

  const labelsZh = {
    north_america: labelGroup(
      label(418, 426, 'middle', [line('$value', 40), line('同比 +31%', 29, 400, NOTE)]),
      label(216, 610, 'middle', [line('北美', 40, 800)])
    ),
    international: labelGroup(
      label(423, 888, 'middle', [line('$value', 40), line('同比 +23%', 29, 400, NOTE)]),
      label(217, 1001, 'middle', [line('国际', 40, 800)])
    ),
    revenue: labelGroup(
      label(882, 495, 'middle', [
        line('收入', 40, 800),
        line('$value', 40),
        line('同比 +28%', 29, 400, NOTE),
      ])
    ),
    gross_profit: labelGroup(
      label(1354, 335, 'middle', [
        line('毛利润', 40, 800),
        line('$value', 40),
        line('利润率 80%', 29, 400, NOTE),
        line('同比 +0 个百分点', 29, 400, NOTE),
      ])
    ),
    cost_of_revenue: labelGroup(
      label(1348, 1089, 'middle', [
        line('收入', 37, 800),
        line('成本', 37, 800),
        line('$value', 36),
      ])
    ),
    operating_loss: labelGroup(
      label(1620, 1069, 'middle', [
        line('营业亏损', 40, 800),
        line('$value', 40),
        line('利润率 (1%)', 29, 400, NOTE),
        line('同比 (4 个百分点)', 29, 400, NOTE),
      ])
    ),
    operating_expenses: labelGroup(
      label(1822, 490, 'middle', [
        line('营业', 40, 800),
        line('费用', 40, 800),
        line('$value', 38),
      ])
    ),
    rnd: labelGroup(
      label(RIGHT_LABEL_X, 487, 'middle', [
        line('研发', 31, 800),
        line('$value', 30),
        line('占收入 45%', 29, 400, NOTE),
        line('同比 +3 个百分点', 29, 400, NOTE),
      ])
    ),
    sm: labelGroup(
      label(RIGHT_LABEL_X, 794, 'middle', [
        line('销售与营销', 31, 800),
        line('$value', 30),
        line('占收入 27%', 29, 400, NOTE),
        line('同比 (0 个百分点)', 29, 400, NOTE),
      ])
    ),
    ga: labelGroup(
      label(RIGHT_LABEL_X, 1034, 'middle', [
        line('管理费用', 31, 800),
        line('$value', 30),
        line('占收入 8%', 29, 400, NOTE),
        line('同比 +1 个百分点', 29, 400, NOTE),
      ])
    ),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'datadog-q3-fy25',
    name: 'Datadog · Q3 FY25',
    company: 'Datadog',
    meta: {
      company: 'Datadog',
      title: 'Datadog Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: {
        src: 'input/processed/datadog-q3-fy25.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 201,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2252,
      hidePeriodStamp: true,
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
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PURPLE_LINK,
        hub: GREEN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
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
        north_america: { x: 384, y: 523, width: 71, height: 223 },
        international: { x: 384, y: 981, width: 71, height: 88 },
        revenue: { x: 851, y: 640, width: 70, height: 311 },
        gross_profit: { x: 1318, y: 517, width: 71, height: 248 },
        cost_of_revenue: { x: 1318, y: 1012, width: 71, height: 60 },
        operating_loss: { x: 1582, y: 1042, width: 73, height: 4 },
        operating_expenses: { x: 1786, y: 640, width: 70, height: 251 },
        rnd: { x: 2252, y: 473, width: 71, height: 140 },
        sm: { x: 2252, y: 790, width: 71, height: 81 },
        ga: { x: 2252, y: 1057, width: 71, height: 24 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: 'North America', value: 634, notes: ['+31% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 252, notes: ['+23% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 886, notes: ['+28% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 709, notes: ['80% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 176 },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: 'Operating loss', value: -6, notes: ['(1%) margin', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 715 },
      { id: 'rnd', col: 5, order: 0, type: 'cost', label: 'R&D', value: 402, notes: ['45% of revenue', '+3pp Y/Y'] },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'S&M', value: 239, notes: ['27% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 74, notes: ['8% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 634, width: 223, y0: 634.5, y1: 751.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 252, width: 88, y0: 1025, y1: 907, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 709, sourceWidth: 249, targetWidth: 248, y0: 764.5, y1: 641, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 176, sourceWidth: 62, targetWidth: 60, y0: 920, y1: 1042, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 709, width: 248, y0: 641, y1: 764, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'operating_loss',
        target: 'operating_expenses',
        value: 6,
        sourceWidth: 4,
        targetWidth: 3,
        y0: 1044,
        y1: 889.5,
        sourceOrder: 0,
        targetOrder: 1,
        curve: { x0: 1655, x1: 1786, c1x: 1696, c1y: 1044, c2x: 1745, c2y: 889.5 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 402, sourceWidth: 141, targetWidth: 140, y0: 710.5, y1: 543, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 239, sourceWidth: 84, targetWidth: 81, y0: 823, y1: 830.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 74, sourceWidth: 26, targetWidth: 24, y0: 878, y1: 1069, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['DBNR'],
      zh: {
        name: 'Datadog · 2025 财年第三季度',
        meta: {
          title: 'Datadog 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          titleSize: 112,
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +31%'] },
          international: { label: '国际', notes: ['同比 +23%'] },
          revenue: { label: '收入', notes: ['同比 +28%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (1%)', '同比 (4 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          rnd: { label: '研发', notes: ['占收入 45%', '同比 +3 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 27%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

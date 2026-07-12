/* Dynatrace - Q4 FY26 income statement ($M).
 * Measured against input/processed/dynatrace-q4-fy26.png. */
(function () {
  const TITLE = '#155277';
  const PURPLE = '#6a24f6';
  const PURPLE_LINK = '#b495f3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#696969';
  const RIGHT_LABEL_X = 2410;

  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });

  const kpiCards = (labels) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="257" y="1103" width="146" height="163" rx="35" fill="${PURPLE}"/>
      <text x="330" y="1154" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.arr}</text>
      <text x="330" y="1197" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$2.05B</text>
      <text x="330" y="1239" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.arrGrowth}</text>

      <rect x="411" y="1103" width="197" height="163" rx="35" fill="${PURPLE}"/>
      <text x="510" y="1157" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.dbnr}</text>
      <text x="510" y="1200" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">110%</text>
      <text x="510" y="1241" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.dbnrChange}</text>

      <text x="220" y="1312" font-size="29" font-weight="500" fill="${NOTE}">${labels.arrFootnote}</text>
      <text x="205" y="1360" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = kpiCards({
    arr: 'ARR',
    arrGrowth: '+18% Y/Y',
    dbnr: 'DBNR',
    dbnrChange: '(1pp) Q/Q',
    arrFootnote: 'ARR = Annual Recurring Revenue',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = kpiCards({
    arr: 'ARR',
    arrGrowth: '同比 +18%',
    dbnr: 'DBNR',
    dbnrChange: '环比 -1pp',
    arrFootnote: 'ARR = 年度经常性收入',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    subscription: { blocks: [
      block(392, 461, [{ text: '$value', size: 40, weight: 400 }, { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE }]),
      block(63, 684, [{ text: 'Subscription', size: 40, weight: 800 }], 'start'),
    ] },
    service: { blocks: [
      block(392, 926, [{ text: '$value', size: 40, weight: 400 }, { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE }]),
      block(114, 1005, [{ text: 'Service', size: 40, weight: 800 }], 'start'),
    ] },
    revenue: { blocks: [block(860, 510, [
      { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    gross_profit: { blocks: [block(1327, 368, [
      { text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '81% margin', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    cost_of_revenue: { blocks: [block(1322, 1050, [
      { text: 'Cost of', size: 37, weight: 800 }, { text: 'revenue', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 },
    ])] },
    operating_profit: { blocks: [block(1800, 280, [
      { text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '7% margin', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    operating_expenses: { blocks: [block(1799, 921, [
      { text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
    ])] },
    other_income: { blocks: [block(2144, 459, [
      { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
    ])] },
    net_profit: { blocks: [block(2330, 318, [
      { text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '3% margin', size: 29, weight: 400, color: NOTE }, { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'start')] },
    tax: { blocks: [block(RIGHT_LABEL_X, 547, [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }]) ] },
    sm: { blocks: [block(RIGHT_LABEL_X, 750, [
      { text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '34% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 945, [
      { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '25% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1135, [
      { text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '11% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    other_expense: { blocks: [block(RIGHT_LABEL_X, 1317, [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }]) ] },
  };

  const labelsZh = {
    subscription: { blocks: [
      block(392, 461, [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +19%', size: 29, weight: 400, color: NOTE }]),
      block(63, 684, [{ text: '订阅', size: 40, weight: 800 }], 'start'),
    ] },
    service: { blocks: [
      block(392, 926, [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +20%', size: 29, weight: 400, color: NOTE }]),
      block(114, 1005, [{ text: '服务', size: 40, weight: 800 }], 'start'),
    ] },
    revenue: { blocks: [block(860, 510, [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +19%', size: 29, weight: 400, color: NOTE }])] },
    gross_profit: { blocks: [block(1327, 368, [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 81%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }])] },
    cost_of_revenue: { blocks: [block(1322, 1050, [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }])] },
    operating_profit: { blocks: [block(1800, 280, [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 7%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }])] },
    operating_expenses: { blocks: [block(1799, 921, [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }])] },
    other_income: { blocks: [block(2144, 459, [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
    net_profit: { blocks: [block(2330, 318, [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 3%', size: 29, weight: 400, color: NOTE }, { text: '同比 (6 个百分点)', size: 29, weight: 400, color: NOTE }], 'start')] },
    tax: { blocks: [block(RIGHT_LABEL_X, 547, [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
    sm: { blocks: [block(RIGHT_LABEL_X + 8, 750, [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 34%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }])] },
    rnd: { blocks: [block(RIGHT_LABEL_X + 8, 945, [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 25%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }])] },
    ga: { blocks: [block(RIGHT_LABEL_X + 8, 1135, [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 11%', size: 29, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE }])] },
    other_expense: { blocks: [block(RIGHT_LABEL_X, 1317, [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dynatrace-q4-fy26',
    name: 'Dynatrace · Q4 FY26',
    company: 'Dynatrace',
    meta: {
      company: 'Dynatrace',
      title: 'Dynatrace Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/dynatrace-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2380,
      periodX: 185,
      periodY: 296,
      periodNoteY: 338,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: '#5d5d5d',
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [{
      key: 'company-logo',
      href: 'data/assets/raster-annotations/dynatrace/company-logo.png',
      x: 684,
      y: 225,
      width: 346,
      height: 260,
    }],
    layout: {
      scale: 1,
      nodes: {
        subscription: { x: 363, y: 554, width: 73, height: 289 },
        service: { x: 363, y: 1017, width: 73, height: 15 },
        revenue: { x: 830, y: 651, width: 73, height: 304 },
        gross_profit: { x: 1297, y: 556, width: 73, height: 246 },
        cost_of_revenue: { x: 1297, y: 973, width: 73, height: 58 },
        operating_profit: { x: 1764, y: 462, width: 73, height: 21 },
        operating_expenses: { x: 1764, y: 674, width: 73, height: 225 },
        other_income: { x: 2109, y: 435, width: 73, height: 6 },
        net_profit: { x: 2230, y: 375, width: 73, height: 12 },
        tax: { x: 2230, y: 572, width: 73, height: 17 },
        sm: { x: 2230, y: 755, width: 73, height: 105 },
        rnd: { x: 2230, y: 981, width: 73, height: 75 },
        ga: { x: 2230, y: 1178, width: 73, height: 35 },
        other_expense: { x: 2230, y: 1355, width: 73, height: 10 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 506, notes: ['+19% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 26, notes: ['+20% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 532, notes: ['+19% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 430, notes: ['81% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 101 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 37, notes: ['7% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 393 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 10 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 18, notes: ['3% margin', '(6pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 29 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 183, notes: ['34% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 131, notes: ['25% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 60, notes: ['11% of revenue', '(0pp) Y/Y'] },
      { id: 'other_expense', col: 5, order: 5, type: 'cost', label: 'Other', value: 19 },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 506, width: 289, sourceOrder: 0, targetOrder: 0 },
      { source: 'service', target: 'revenue', value: 26, width: 15, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 430, width: 246, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 101, width: 58, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 37, width: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 393, width: 225, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 8, width: 4, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 29, width: 17, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 10, sourceWidth: 6, targetWidth: 8, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 183, width: 105, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 131, width: 75, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 60, width: 35, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expense', value: 19, width: 10, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR', 'DBNR'],
      zh: {
        name: 'Dynatrace · 2026 财年第四季度',
        meta: {
          title: 'Dynatrace 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 112,
          titleTextLength: 1960,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +19%'] },
          service: { label: '服务', notes: ['同比 +20%'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (6 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 34%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 (0 个百分点)'] },
          other_expense: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* Dynatrace - Q2 FY26 income statement ($M).
 * Measured against input/processed/dynatrace-q2-fy26.png. */
(function () {
  const TITLE = '#155077';
  const PURPLE = '#6a24f6';
  const PURPLE_LINK = '#b495f3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#696969';
  const RIGHT_LABEL_X = 2438;

  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });

  const kpiCards = (labels) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="257" y="1103" width="146" height="163" rx="35" fill="${PURPLE}"/>
      <text x="330" y="1154" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.arr}</text>
      <text x="330" y="1197" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$1.9B</text>
      <text x="330" y="1239" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.arrGrowth}</text>

      <rect x="411" y="1103" width="197" height="163" rx="35" fill="${PURPLE}"/>
      <text x="510" y="1157" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.dbnr}</text>
      <text x="510" y="1200" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">111%</text>
      <text x="510" y="1241" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.dbnrChange}</text>

      <text x="220" y="1312" font-size="29" font-weight="500" fill="${NOTE}">${labels.arrFootnote}</text>
      <text x="205" y="1360" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = kpiCards({
    arr: 'ARR',
    arrGrowth: '+17% Y/Y',
    dbnr: 'DBNR',
    dbnrChange: '+1pp Q/Q',
    arrFootnote: 'ARR = Annual Recurring Revenue',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = kpiCards({
    arr: 'ARR',
    arrGrowth: '同比 +17%',
    dbnr: 'DBNR',
    dbnrChange: '环比 +1pp',
    arrFootnote: 'ARR = 年度经常性收入',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    subscription: { blocks: [
      block(392, 449, [{ text: '$value', size: 40, weight: 400 }, { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE }]),
      block(63, 667, [{ text: 'Subscription', size: 40, weight: 800 }], 'start'),
    ] },
    service: { blocks: [
      block(392, 962, [{ text: '$value', size: 40, weight: 400 }, { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE }]),
      block(114, 1036, [{ text: 'Service', size: 40, weight: 800 }], 'start'),
    ] },
    revenue: { blocks: [block(859, 514, [
      { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    gross_profit: { blocks: [block(1327, 351, [
      { text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '82% margin', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    cost_of_revenue: { blocks: [block(1327, 1086, [
      { text: 'Cost of', size: 37, weight: 800 }, { text: 'revenue', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 },
    ])] },
    operating_profit: { blocks: [block(1794, 246, [
      { text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '15% margin', size: 29, weight: 400, color: NOTE }, { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    operating_expenses: { blocks: [block(1794, 910, [
      { text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
    ])] },
    other_income: { blocks: [block(2136, 409, [
      { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
    ])] },
    net_profit: { blocks: [block(2330, 276, [
      { text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '12% margin', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
    ], 'start')] },
    tax: { blocks: [block(RIGHT_LABEL_X - 11, 544, [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }]) ] },
    sm: { blocks: [block(RIGHT_LABEL_X, 793, [
      { text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '34% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 1004, [
      { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '23% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1213, [
      { text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '10% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ])] },
  };

  const labelsZh = {
    subscription: { blocks: [
      block(392, 449, [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +18%', size: 29, weight: 400, color: NOTE }]),
      block(63, 667, [{ text: '订阅', size: 40, weight: 800 }], 'start'),
    ] },
    service: { blocks: [
      block(392, 962, [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +14%', size: 29, weight: 400, color: NOTE }]),
      block(114, 1036, [{ text: '服务', size: 40, weight: 800 }], 'start'),
    ] },
    revenue: { blocks: [block(859, 514, [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +18%', size: 29, weight: 400, color: NOTE }])] },
    gross_profit: { blocks: [block(1327, 351, [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 82%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }])] },
    cost_of_revenue: { blocks: [block(1327, 1086, [{ text: '收入', size: 37, weight: 800 }, { text: '成本', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }])] },
    operating_profit: { blocks: [block(1794, 246, [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 15%', size: 29, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE }])] },
    operating_expenses: { blocks: [block(1794, 910, [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }])] },
    other_income: { blocks: [block(2136, 409, [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
    net_profit: { blocks: [block(2330, 276, [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '利润率 12%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }], 'start')] },
    tax: { blocks: [block(RIGHT_LABEL_X - 11, 544, [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
    sm: { blocks: [block(RIGHT_LABEL_X + 8, 793, [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 34%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }])] },
    rnd: { blocks: [block(RIGHT_LABEL_X + 8, 1004, [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 23%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }])] },
    ga: { blocks: [block(RIGHT_LABEL_X + 8, 1213, [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '占收入 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dynatrace-q2-fy26',
    name: 'Dynatrace · Q2 FY26',
    company: 'Dynatrace',
    meta: {
      company: 'Dynatrace',
      title: 'Dynatrace Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/dynatrace-q2-fy26.png', width: 2667, height: 1500 },
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
        subscription: { x: 356, y: 541, width: 73, height: 297 },
        service: { x: 356, y: 1053, width: 73, height: 13 },
        revenue: { x: 823, y: 655, width: 73, height: 311 },
        gross_profit: { x: 1290, y: 539, width: 73, height: 254 },
        cost_of_revenue: { x: 1290, y: 1010, width: 73, height: 56 },
        operating_profit: { x: 1757, y: 426, width: 73, height: 47 },
        operating_expenses: { x: 1757, y: 680, width: 73, height: 209 },
        other_income: { x: 2100, y: 382, width: 73, height: 9 },
        net_profit: { x: 2224, y: 311, width: 73, height: 36 },
        tax: { x: 2224, y: 567, width: 73, height: 19 },
        sm: { x: 2224, y: 798, width: 73, height: 105 },
        rnd: { x: 2224, y: 1028, width: 73, height: 72 },
        ga: { x: 2224, y: 1230, width: 73, height: 31 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 473, notes: ['+18% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 21, notes: ['+14% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 494, notes: ['+18% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 404, notes: ['82% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 90 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 73, notes: ['15% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 331 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 14 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 57, notes: ['12% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 30 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 168, notes: ['34% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 115, notes: ['23% of revenue', '+0pp Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 48, notes: ['10% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 473, sourceWidth: 297, targetWidth: 298, sourceOrder: 0, targetOrder: 0 },
      { source: 'service', target: 'revenue', value: 21, sourceWidth: 13, targetWidth: 13, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 404, sourceWidth: 255, targetWidth: 254, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 90, sourceWidth: 56, targetWidth: 56, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 73, sourceWidth: 47, targetWidth: 47, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 331, sourceWidth: 207, targetWidth: 209, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 43, sourceWidth: 28, targetWidth: 27, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 30, sourceWidth: 19, targetWidth: 19, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 14, sourceWidth: 9, targetWidth: 9, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 168, sourceWidth: 105, targetWidth: 105, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 115, sourceWidth: 73, targetWidth: 72, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 48, sourceWidth: 31, targetWidth: 31, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR', 'DBNR'],
      zh: {
        name: 'Dynatrace · 2026 财年第二季度',
        meta: {
          title: 'Dynatrace 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 10 月',
          titleSize: 112,
          titleTextLength: 1960,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +18%'] },
          service: { label: '服务', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +4 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 34%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 23%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

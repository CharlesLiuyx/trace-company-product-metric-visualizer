/* ====================================================================
 * Dynatrace - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/dynatrace-q3-fy26.png as a fixed
 * d3-sankey layout with a validated company-logo raster annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155277';
  const PURPLE = '#6a24f6';
  const PURPLE_LINK = '#b495f3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e08585';
  const NOTE = '#696969';
  const RIGHT_LABEL_X = 2410;

  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });

  const kpiCards = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="257" y="1103" width="146" height="163" rx="35" fill="${PURPLE}"/>
      <text x="330" y="1154" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.arr}</text>
      <text x="330" y="1197" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">$2.0B</text>
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
    arrGrowth: '+16% Y/Y',
    dbnr: 'DBNR',
    dbnrChange: 'Flat Q/Q',
    arrFootnote: 'ARR = Annual Recurring Revenue',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = kpiCards({
    arr: 'ARR',
    arrGrowth: '同比 +16%',
    dbnr: 'DBNR',
    dbnrChange: '环比持平',
    arrFootnote: 'ARR = 年度经常性收入',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const zhLayoutLabels = {
    subscription: {
      blocks: [
        block(392, 436, [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 +18%', size: 29, weight: 400, color: NOTE },
        ]),
        block(63, 681, [{ text: '订阅', size: 40, weight: 800 }], 'start'),
      ],
    },
    service: {
      blocks: [
        block(392, 962, [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
        ]),
        block(114, 1041, [{ text: '服务', size: 40, weight: 800 }], 'start'),
      ],
    },
    revenue: { blocks: [block(859, 508, [
      { text: '收入', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '同比 +18%', size: 29, weight: 400, color: NOTE },
    ])] },
    gross_profit: { blocks: [block(1327, 375, [
      { text: '毛利润', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '利润率 81%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
    ])] },
    cost_of_revenue: { blocks: [block(1327, 1091, [
      { text: '收入', size: 37, weight: 800 },
      { text: '成本', size: 37, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ])] },
    operating_profit: { blocks: [block(1794, 278, [
      { text: '营业利润', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '利润率 14%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
    ])] },
    operating_expenses: { blocks: [block(1794, 966, [
      { text: '营业', size: 40, weight: 800 },
      { text: '费用', size: 40, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ])] },
    other: { blocks: [block(2131, 445, [
      { text: '其他', size: 31, weight: 800 },
      { text: '$value', size: 30, weight: 400 },
    ])] },
    net_profit: { blocks: [block(2300, 307, [
      { text: '净利润', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (75 个百分点)', size: 29, weight: 400, color: NOTE },
    ], 'start')] },
    tax: { blocks: [block(RIGHT_LABEL_X, 574, [
      { text: '税费', size: 31, weight: 800 },
      { text: '$value', size: 30, weight: 400 },
    ])] },
    sm: { blocks: [block(RIGHT_LABEL_X + 8, 800, [
      { text: '销售与市场', size: 31, weight: 800 },
      { text: '$value', size: 30, weight: 400 },
      { text: '占收入 34%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
    ])] },
    rnd: { blocks: [block(RIGHT_LABEL_X + 8, 1012, [
      { text: '研发', size: 31, weight: 800 },
      { text: '$value', size: 30, weight: 400 },
      { text: '占收入 23%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
    ])] },
    ga: { blocks: [block(RIGHT_LABEL_X + 8, 1220, [
      { text: '管理费用', size: 31, weight: 800 },
      { text: '$value', size: 30, weight: 400 },
      { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
    ])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dynatrace-q3-fy26',
    name: 'Dynatrace · Q3 FY26',
    company: 'Dynatrace',
    meta: {
      company: 'Dynatrace',
      title: 'Dynatrace Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/dynatrace-q3-fy26.png', width: 2667, height: 1500 },
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
    rasterAnnotations: [
      {
        key: 'company-logo',
        href: 'data/assets/raster-annotations/dynatrace/company-logo.png',
        x: 684,
        y: 225,
        width: 346,
        height: 260,
      },
    ],
    layout: {
      scale: 1,
      nodes: {
        subscription: { x: 356, y: 532, width: 73, height: 334 },
        service: { x: 356, y: 1054, width: 73, height: 15 },
        revenue: { x: 823, y: 650, width: 73, height: 349 },
        gross_profit: { x: 1290, y: 563, width: 73, height: 284 },
        cost_of_revenue: { x: 1290, y: 1006, width: 73, height: 65 },
        operating_profit: { x: 1757, y: 458, width: 73, height: 49 },
        operating_expenses: { x: 1757, y: 713, width: 73, height: 235 },
        other: { x: 2094, y: 419, width: 73, height: 8 },
        net_profit: { x: 2223, y: 342, width: 73, height: 27 },
        tax: { x: 2223, y: 592, width: 73, height: 30 },
        sm: { x: 2223, y: 808, width: 73, height: 118 },
        rnd: { x: 2223, y: 1036, width: 73, height: 82 },
        ga: { x: 2223, y: 1240, width: 73, height: 35 },
      },
      labels: {
        subscription: {
          blocks: [
            block(392, 436, [
              { text: '$value', size: 40, weight: 400 },
              { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
            ]),
            block(63, 681, [{ text: 'Subscription', size: 40, weight: 800 }], 'start'),
          ],
        },
        service: {
          blocks: [
            block(392, 962, [
              { text: '$value', size: 40, weight: 400 },
              { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
            ]),
            block(114, 1041, [{ text: 'Service', size: 40, weight: 800 }], 'start'),
          ],
        },
        revenue: { blocks: [block(859, 508, [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 40, weight: 400 },
          { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
        ])] },
        gross_profit: { blocks: [block(1327, 375, [
          { text: 'Gross profit', size: 40, weight: 800 },
          { text: '$value', size: 40, weight: 400 },
          { text: '81% margin', size: 29, weight: 400, color: NOTE },
          { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
        ])] },
        cost_of_revenue: { blocks: [block(1327, 1091, [
          { text: 'Cost of', size: 37, weight: 800 },
          { text: 'revenue', size: 37, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
        ])] },
        operating_profit: { blocks: [block(1794, 278, [
          { text: 'Operating profit', size: 40, weight: 800 },
          { text: '$value', size: 40, weight: 400 },
          { text: '14% margin', size: 29, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
        ])] },
        operating_expenses: { blocks: [block(1794, 966, [
          { text: 'Operating', size: 40, weight: 800 },
          { text: 'expenses', size: 40, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
        ])] },
        other: { blocks: [block(2131, 445, [
          { text: 'Other', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ])] },
        net_profit: { blocks: [block(2300, 307, [
          { text: 'Net profit', size: 40, weight: 800 },
          { text: '$value', size: 40, weight: 400 },
          { text: '8% margin', size: 29, weight: 400, color: NOTE },
          { text: '(75pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ], 'start')] },
        tax: { blocks: [block(RIGHT_LABEL_X, 574, [
          { text: 'Tax', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ])] },
        sm: { blocks: [block(RIGHT_LABEL_X, 800, [
          { text: 'S&M', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '34% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ])] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 1012, [
          { text: 'R&D', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '23% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
        ])] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1220, [
          { text: 'G&A', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
          { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ])] },
      },
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 493, notes: ['+18% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 22, notes: ['+16% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 516, notes: ['+18% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 420, notes: ['81% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 96 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 73, notes: ['14% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 347 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 12 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 40, notes: ['8% margin', '(75pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 44 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 174, notes: ['34% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 121, notes: ['23% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 52, notes: ['10% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 493, width: 334, sourceOrder: 0, targetOrder: 0 },
      { source: 'service', target: 'revenue', value: 22, width: 15, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 420, width: 284, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 96, width: 65, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 73, width: 49, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 347, width: 235, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 28, width: 19, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 44, width: 30, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 12, width: 8, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 174, width: 118, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 121, width: 82, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 52, width: 35, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR', 'DBNR'],
      zh: {
        name: 'Dynatrace · 2026 财年第三季度',
        meta: {
          title: 'Dynatrace 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 1 月的季度',
          titleSize: 112,
          titleTextLength: 1960,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +18%'] },
          service: { label: '服务', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (75 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 34%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 23%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

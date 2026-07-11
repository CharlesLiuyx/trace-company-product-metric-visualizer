/* ====================================================================
 * Workday - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/workday-q4-fy26.png as a fixed
 * d3-sankey layout with the reusable Workday SVG logo.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#0069ae';
  const BLUE_LINK = '#85b4d3';
  const ORANGE = '#f58b00';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2428;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1178" width="${width}" height="166" rx="34" fill="${BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1233 + index * 40}" text-anchor="middle"
          font-size="${index === 0 ? 33 : 31}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(38, 435, ['Subscription Backlog', '$28B', '+12% Y/Y'])}
      ${kpiCard(484, 318, ['Gross Revenue', 'Retention', '97%'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(38, 435, ['订阅待履约收入', '$28B', '同比 +12%'])}
      ${kpiCard(484, 318, ['总收入', '留存率', '97%'])}
    </g>`;

  const zhLayoutLabels = {
    subscription: {
      blocks: [
        { x: 204, top: 644, anchor: 'middle', lineGap: 10, lines: [
          { text: '订阅', size: 39, weight: 800, color: ORANGE },
          { text: '毛利率 82%', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 400, top: 406, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400, color: ORANGE },
          { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    professional_services: {
      blocks: [
        { x: 204, top: 1019, anchor: 'middle', lineGap: 10, lines: [
          { text: '专业', size: 38, weight: 800, color: ORANGE },
          { text: '服务', size: 38, weight: 800, color: ORANGE },
          { text: '毛利率 (13%)', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 400, top: 993, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 38, weight: 400, color: ORANGE },
          { text: '同比 +1%', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    revenue: { blocks: [{ x: 866, top: 475, anchor: 'middle', lineGap: 10, lines: [
      { text: '收入', size: 40, weight: 800, color: ORANGE },
      { text: '$value', size: 40, weight: 400, color: ORANGE },
      { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1335, top: 313, anchor: 'middle', lineGap: 10, lines: [
      { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '利润率 76%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_profit: { blocks: [{ x: 1801, top: 214, anchor: 'middle', lineGap: 10, lines: [
      { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '利润率 7%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    other: { blocks: [{ x: 2153, top: 373, anchor: 'middle', lineGap: 9, lines: [
      { text: '其他', size: 32, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
    ] }] },
    net_profit: { blocks: [{ x: 2426, top: 263, anchor: 'middle', lineGap: 10, lines: [
      { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '利润率 6%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1335, top: 1118, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 35, weight: 800, color: RED_LABEL },
      { text: '成本', size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ] }] },
    operating_expenses: { blocks: [{ x: 1802, top: 944, anchor: 'middle', lineGap: 9, lines: [
      { text: '运营', size: 35, weight: 800, color: RED_LABEL },
      { text: '费用', size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 545, anchor: 'middle', lineGap: 9, lines: [
      { text: '税费', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
    ] }] },
    product_development: { blocks: [{ x: RIGHT_LABEL_X, top: 673, anchor: 'middle', lineGap: 9, lines: [
      { text: '产品', size: 33, weight: 800, color: RED_LABEL },
      { text: '开发', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 889, anchor: 'middle', lineGap: 9, lines: [
      { text: 'S&M 费用', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1067, anchor: 'middle', lineGap: 9, lines: [
      { text: 'G&A 费用', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 1242, anchor: 'middle', lineGap: 9, lines: [
      { text: '重组', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '占收入 5%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'workday-q4-fy26',
    name: 'Workday · Q4 FY26',
    company: 'Workday',
    meta: {
      company: 'Workday',
      title: 'Workday Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/workday-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1320,
      titleY: 199,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2290,
      periodX: 1830,
      periodY: 1232,
      periodNoteY: 1274,
      logoWidth: 665,
      logoHeight: 280,
      logoY: 232,
      logoViewBox: '0 0 665 280',
      logoSvg: BUSINESS_ICONS.workdayCompanyLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: ORANGE },
        hub: { node: BLUE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 154,
      nodes: {
        subscription: { x: 365, y: 494, width: 72, height: 362 },
        professional_services: { x: 365, y: 1080, width: 72, height: 29 },
        revenue: { x: 830, y: 615, width: 72, height: 389 },
        gross_profit: { x: 1298, y: 492, width: 72, height: 293 },
        cost_of_revenue: { x: 1298, y: 1003, width: 72, height: 96 },
        operating_profit: { x: 1765, y: 395, width: 72, height: 29 },
        operating_expenses: { x: 1765, y: 655, width: 72, height: 269 },
        other: { x: 2117, y: 340, width: 72, height: 16 },
        net_profit: { x: 2233, y: 304, width: 72, height: 20 },
        tax: { x: 2233, y: 568, width: 72, height: 16 },
        product_development: { x: 2233, y: 679, width: 72, height: 103 },
        sm: { x: 2233, y: 902, width: 72, height: 100 },
        ga: { x: 2233, y: 1113, width: 72, height: 36 },
        restructuring: { x: 2233, y: 1278, width: 72, height: 18 },
      },
      labels: {
        subscription: { blocks: [
          { x: 204, top: 644, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Subscription', size: 39, weight: 800, color: ORANGE },
            { text: '82% gross margin', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 400, top: 406, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 39, weight: 400, color: ORANGE },
            { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        professional_services: { blocks: [
          { x: 204, top: 1019, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Professional', size: 38, weight: 800, color: ORANGE },
            { text: 'services', size: 38, weight: 800, color: ORANGE },
            { text: '(13%) gross margin', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 400, top: 993, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400, color: ORANGE },
            { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 866, top: 475, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 800, color: ORANGE },
          { text: '$value', size: 40, weight: 400, color: ORANGE },
          { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1335, top: 313, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
          { text: '76% margin', size: 29, weight: 400, color: NOTE },
          { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_profit: { blocks: [{ x: 1801, top: 214, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
          { text: '7% margin', size: 29, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        other: { blocks: [{ x: 2153, top: 373, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Other', size: 32, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2426, top: 263, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
          { text: '6% margin', size: 29, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1335, top: 1118, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Cost of', size: 35, weight: 800, color: RED_LABEL },
          { text: 'revenue', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ] }] },
        operating_expenses: { blocks: [{ x: 1802, top: 944, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating', size: 35, weight: 800, color: RED_LABEL },
          { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ] }] },
        tax: { blocks: [{ x: RIGHT_LABEL_X, top: 545, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Tax', size: 33, weight: 800, color: RED_LABEL },
          { text: '$value', size: 33, weight: 400, color: RED_LABEL },
        ] }] },
        product_development: { blocks: [{ x: RIGHT_LABEL_X, top: 673, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Product', size: 33, weight: 800, color: RED_LABEL },
          { text: 'development', size: 33, weight: 800, color: RED_LABEL },
          { text: '$value', size: 33, weight: 400, color: RED_LABEL },
          { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 889, anchor: 'middle', lineGap: 9, lines: [
          { text: 'S&M', size: 33, weight: 800, color: RED_LABEL },
          { text: '$value', size: 33, weight: 400, color: RED_LABEL },
          { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1067, anchor: 'middle', lineGap: 9, lines: [
          { text: 'G&A', size: 33, weight: 800, color: RED_LABEL },
          { text: '$value', size: 33, weight: 400, color: RED_LABEL },
          { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 1242, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Restructuring', size: 33, weight: 800, color: RED_LABEL },
          { text: '$value', size: 33, weight: 400, color: RED_LABEL },
          { text: '5% of revenue', size: 29, weight: 400, color: NOTE },
          { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 2.360, valueText: '$2,360M', notes: ['+16% Y/Y', '82% gross margin'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 0.172, valueText: '$172M', notes: ['+1% Y/Y', '(13%) gross margin'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.532, valueText: '$2,532M', notes: ['+15% Y/Y'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.921, valueText: '$1,921M', notes: ['76% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.611, valueText: '($611M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.174, valueText: '$174M', notes: ['7% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.747, valueText: '($1,747M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.090, valueText: '$90M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.145, valueText: '$145M', notes: ['6% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.119, valueText: '($119M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 2, type: 'cost', label: ['Product', 'development'], value: 0.691, valueText: '($691M)', notes: ['27% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.675, valueText: '($675M)', notes: ['27% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.251, valueText: '($251M)', notes: ['10% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.130, valueText: '($130M)', notes: ['5% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 2.360, sourceWidth: 362, targetWidth: 360, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 0.172, sourceWidth: 29, targetWidth: 29, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1.921, sourceWidth: 293, targetWidth: 293, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.611, sourceWidth: 96, targetWidth: 96, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.174, sourceWidth: 29, targetWidth: 29, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.747, sourceWidth: 264, targetWidth: 269, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.055, sourceWidth: 8, targetWidth: 8, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.119, sourceWidth: 21, targetWidth: 16, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.090, sourceWidth: 16, targetWidth: 12, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'product_development', value: 0.691, sourceWidth: 105, targetWidth: 103, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.675, sourceWidth: 105, targetWidth: 100, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.251, sourceWidth: 40, targetWidth: 36, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.130, sourceWidth: 19, targetWidth: 18, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Workday · 2026 财年第四季度',
        meta: {
          title: 'Workday 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1860,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +16%', '毛利率 82%'] },
          professional_services: { label: '专业服务', notes: ['同比 +1%', '毛利率 (13%)'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          product_development: { label: '产品开发', notes: ['占收入 27%', '同比 (3 个百分点)'] },
          sm: { label: 'S&M 费用', notes: ['占收入 27%', '同比 (2 个百分点)'] },
          ga: { label: 'G&A 费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 5%', '同比 +2 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

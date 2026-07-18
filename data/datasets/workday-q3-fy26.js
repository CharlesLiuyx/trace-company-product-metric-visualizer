/* ====================================================================
 * Workday - Q3 FY26 income statement ($B)
 * Reconstructed from input/processing/workday-q3-fy26.png as a measured,
 * fixed d3-sankey layout with the reusable Workday SVG logo.
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
  const RESTRUCTURING_FACE = '#cfaaaa';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2428;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1178" width="${width}" height="168" rx="34" fill="${BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1233 + index * 40}" text-anchor="middle"
          font-size="${index === 0 ? 33 : 31}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(38, 435, ['Subscription Backlog', '$26B', '+17% Y/Y'])}
      ${kpiCard(483, 317, ['Gross Revenue', 'Retention', '97%'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(38, 435, ['订阅待履约收入', '$26B', '同比 +17%'])}
      ${kpiCard(483, 317, ['总收入', '留存率', '97%'])}
    </g>`;

  const labelsEn = {
    subscription: {
      blocks: [
        { x: 206, top: 667, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Subscription', size: 39, weight: 800, color: ORANGE },
          { text: '82% gross margin', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 402, top: 419, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400, color: ORANGE },
          { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    professional_services: {
      blocks: [
        { x: 207, top: 1036, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Professional', size: 38, weight: 800, color: ORANGE },
          { text: 'services', size: 38, weight: 800, color: ORANGE },
          { text: '(4%) gross margin', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 400, top: 1006, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 38, weight: 400, color: ORANGE },
          { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    revenue: { blocks: [{ x: 871, top: 483, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Revenue', size: 40, weight: 800, color: ORANGE },
      { text: '$value', size: 40, weight: 400, color: ORANGE },
      { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1334, top: 328, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '76% margin', size: 29, weight: 400, color: NOTE },
      { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_profit: { blocks: [{ x: 1807, top: 228, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '11% margin', size: 29, weight: 400, color: NOTE },
      { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    other: { blocks: [{ x: 2147, top: 422, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Other', size: 32, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
    ] }] },
    net_profit: { blocks: [{ x: 2427, top: 288, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '10% margin', size: 29, weight: 400, color: NOTE },
      { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1343, top: 1182, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Cost of', size: 35, weight: 800, color: RED_LABEL },
      { text: 'revenue', size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ] }] },
    operating_expenses: { blocks: [{ x: 1807, top: 951, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Operating', size: 35, weight: 800, color: RED_LABEL },
      { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 542, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Tax', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 700, anchor: 'middle', lineGap: 9, lines: [
      { text: 'S&M', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    product_development: { blocks: [{ x: RIGHT_LABEL_X, top: 879, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Product', size: 33, weight: 800, color: RED_LABEL },
      { text: 'development', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1108, anchor: 'middle', lineGap: 9, lines: [
      { text: 'G&A', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 1271, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Restructuring', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
    ] }] },
  };

  const labelsZh = {
    subscription: {
      blocks: [
        { x: 206, top: 667, anchor: 'middle', lineGap: 10, lines: [
          { text: '订阅', size: 39, weight: 800, color: ORANGE },
          { text: '毛利率 82%', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 402, top: 419, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400, color: ORANGE },
          { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    professional_services: {
      blocks: [
        { x: 207, top: 1036, anchor: 'middle', lineGap: 10, lines: [
          { text: '专业', size: 38, weight: 800, color: ORANGE },
          { text: '服务', size: 38, weight: 800, color: ORANGE },
          { text: '毛利率 (4%)', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 400, top: 1006, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 38, weight: 400, color: ORANGE },
          { text: '同比 (6%)', size: 29, weight: 400, color: NOTE },
        ] },
      ],
    },
    revenue: { blocks: [{ x: 871, top: 483, anchor: 'middle', lineGap: 10, lines: [
      { text: '收入', size: 40, weight: 800, color: ORANGE },
      { text: '$value', size: 40, weight: 400, color: ORANGE },
      { text: '同比 +13%', size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1334, top: 328, anchor: 'middle', lineGap: 10, lines: [
      { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '利润率 76%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_profit: { blocks: [{ x: 1807, top: 228, anchor: 'middle', lineGap: 10, lines: [
      { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '利润率 11%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    other: { blocks: [{ x: 2147, top: 422, anchor: 'middle', lineGap: 9, lines: [
      { text: '其他', size: 32, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
    ] }] },
    net_profit: { blocks: [{ x: 2427, top: 288, anchor: 'middle', lineGap: 10, lines: [
      { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
      { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
      { text: '利润率 10%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1343, top: 1182, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 35, weight: 800, color: RED_LABEL },
      { text: '成本', size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ] }] },
    operating_expenses: { blocks: [{ x: 1807, top: 951, anchor: 'middle', lineGap: 9, lines: [
      { text: '运营', size: 35, weight: 800, color: RED_LABEL },
      { text: '费用', size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 542, anchor: 'middle', lineGap: 9, lines: [
      { text: '税费', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 700, anchor: 'middle', lineGap: 9, lines: [
      { text: 'S&M 费用', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '占收入 28%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
    ] }] },
    product_development: { blocks: [{ x: RIGHT_LABEL_X, top: 879, anchor: 'middle', lineGap: 9, lines: [
      { text: '产品', size: 33, weight: 800, color: RED_LABEL },
      { text: '开发', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
      { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1108, anchor: 'middle', lineGap: 9, lines: [
      { text: 'G&A 费用', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
      { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 1271, anchor: 'middle', lineGap: 9, lines: [
      { text: '重组', size: 33, weight: 800, color: RED_LABEL },
      { text: '$value', size: 33, weight: 400, color: RED_LABEL },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'workday-q3-fy26',
    name: 'Workday · Q3 FY26',
    company: 'Workday',
    meta: {
      company: 'Workday',
      title: 'Workday Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/workday-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1320,
      titleY: 199,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2290,
      periodX: 1807,
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
      scale: 170,
      nodes: {
        subscription: { x: 367, y: 511, width: 71, height: 381 },
        professional_services: { x: 367, y: 1099, width: 71, height: 30 },
        revenue: { x: 834, y: 623, width: 70, height: 413 },
        gross_profit: { x: 1301, y: 510, width: 71, height: 311 },
        cost_of_revenue: { x: 1301, y: 1060, width: 71, height: 99 },
        operating_profit: { x: 1769, y: 410, width: 70, height: 42 },
        operating_expenses: { x: 1769, y: 660, width: 70, height: 267 },
        other: { x: 2109, y: 391, width: 70, height: 11 },
        net_profit: { x: 2235, y: 316, width: 71, height: 41 },
        tax: { x: 2235, y: 565, width: 71, height: 12 },
        sm: { x: 2235, y: 686, width: 71, height: 114 },
        product_development: { x: 2235, y: 909, width: 71, height: 111 },
        ga: { x: 2235, y: 1126, width: 71, height: 38 },
        restructuring: { x: 2235, y: 1289, width: 71, height: 2 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 2.244, valueText: '$2,244M', notes: ['+15% Y/Y', '82% gross margin'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 0.188, valueText: '$188M', notes: ['(6%) Y/Y', '(4%) gross margin'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.432, valueText: '$2,432M', notes: ['+13% Y/Y'], color: BLUE, labelColor: ORANGE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.841, valueText: '$1,841M', notes: ['76% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.591, valueText: '($591M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.259, valueText: '$259M', notes: ['11% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.582, valueText: '($1,582M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.079, valueText: '$79M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.252, valueText: '$252M', notes: ['10% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.086, valueText: '($86M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 0.677, valueText: '($677M)', notes: ['28% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 3, type: 'cost', label: ['Product', 'development'], value: 0.666, valueText: '($666M)', notes: ['27% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.234, valueText: '($234M)', notes: ['10% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.005, valueText: '($5M)', color: RESTRUCTURING_FACE, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 2.244, sourceWidth: 381, targetWidth: 381, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 0.188, sourceWidth: 30, targetWidth: 32, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1.841, sourceWidth: 311, targetWidth: 311, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.591, sourceWidth: 102, targetWidth: 99, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.259, sourceWidth: 43, targetWidth: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.582, sourceWidth: 268, targetWidth: 267, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.173, sourceWidth: 29, targetWidth: 29, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.086, sourceWidth: 13, targetWidth: 12, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.079, sourceWidth: 11, targetWidth: 12, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 0.677, sourceWidth: 115, targetWidth: 114, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 0.666, sourceWidth: 112, targetWidth: 111, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.234, sourceWidth: 39, targetWidth: 38, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.005, sourceWidth: 1, targetWidth: 2, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Workday · 2026 财年第三季度',
        meta: {
          title: 'Workday 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          titleTextLength: 1860,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +15%', '毛利率 82%'] },
          professional_services: { label: '专业服务', notes: ['同比 (6%)', '毛利率 (4%)'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sm: { label: 'S&M 费用', notes: ['占收入 28%', '同比 (1 个百分点)'] },
          product_development: { label: '产品开发', notes: ['占收入 27%', '同比 (3 个百分点)'] },
          ga: { label: 'G&A 费用', notes: ['占收入 10%', '同比 +0 个百分点'] },
          restructuring: { label: '重组' },
        },
        layout: {
          labels: labelsZh,
        },
      },
    },
  });
})();

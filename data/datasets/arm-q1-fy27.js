/* ====================================================================
 * Arm Holdings - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/arm-q1-fy27.png as a fixed
 * d3-sankey layout with the reusable Arm wordmark annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#008fbe';
  const BLUE_LINK = '#85c5db';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const text = (value, size, weight = 400, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines) => ({ x, top, anchor, lineGap: 10, lines });
  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const labels = {
    license_other: { blocks: [
      block(333, 541, 'middle', [text('$value', 39), text('+23% Y/Y', 28, 400, NOTE)]),
      { ...block(232, 623, 'end', [text('License', 39, 800), text('& Other', 39, 800), text('Support &', 28, 400, NOTE), text('Maintenance', 28, 400, NOTE)]), semanticRole: 'top-aligned-side-label' },
    ] },
    royalty: { blocks: [
      block(333, 904, 'middle', [text('$value', 39), text('+22% Y/Y', 28, 400, NOTE)]),
      { ...block(224, 1026, 'end', [text('Royalty', 39, 800), text('Percentage', 28, 400, NOTE), text('or fixed', 28, 400, NOTE)]), semanticRole: 'top-aligned-side-label' },
    ] },
    revenue_by_type: { blocks: [block(644, 600, 'middle', [text('Revenue', 39, 800), text('$value', 39), text('+22% Y/Y', 28, 400, NOTE)])] },
    external_customers: { blocks: [block(955, 485, 'middle', [text('External Customers', 38, 800), text('$value', 39), text('+24% Y/Y', 28, 400, NOTE)])] },
    related_parties: { blocks: [block(955, 1154, 'middle', [text('Related parties', 39, 800), text('$value', 39), text('+18% Y/Y', 28, 400, NOTE), text('Arm China', 28, 400, NOTE), text('Equity method investments', 28, 400, NOTE)])] },
    revenue: { blocks: [block(1267, 597, 'middle', [text('Revenue', 39, 800), text('$value', 39), text('+22% Y/Y', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1578, 400, 'middle', [text('Gross', 38, 800), text('profit', 38, 800), text('$value', 39), text('97% margin', 28, 400, NOTE), text('+0pp Y/Y', 28, 400, NOTE)])] },
    cost_of_sales: { blocks: [block(1578, 1151, 'middle', [text('Cost of sales', 33, 800), text('$value', 32)])] },
    operating_profit: { blocks: [block(1882, 324, 'middle', [text('Operating', 38, 800), text('profit', 38, 800), text('$value', 39), text('7% margin', 28, 400, NOTE), text('(4pp) Y/Y', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1882, 1023, 'middle', [text('Operating', 34, 800), text('expenses', 34, 800), text('$value', 32)])] },
    tax: { blocks: [block(2085, 359, 'middle', [text('Tax', 31, 800, GREEN_LABEL), text('$value', 31, 400, GREEN_LABEL)])] },
    other_income: { blocks: [block(2035, 600, 'start', [text('Other', 31, 800, GREEN_LABEL), text('$value', 31, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [block(2302, 453, 'start', [text('Net profit', 38, 800), text('$value', 39), text('21% margin', 28, 400, NOTE), text('+9pp Y/Y', 28, 400, NOTE)])] },
    rnd: { blocks: [block(2400, 845, 'middle', [text('R&D', 31, 800), text('$value', 31), text('65% of revenue', 28, 400, NOTE), text('+3pp Y/Y', 28, 400, NOTE)])] },
    sga: { blocks: [block(2400, 1039, 'middle', [text('SG&A', 31, 800), text('$value', 31), text('25% of revenue', 28, 400, NOTE), text('(0pp) Y/Y', 28, 400, NOTE)])] },
    other_operating_expense: { blocks: [block(2400, 1232, 'middle', [text('Other', 31, 800), text('$value', 31), text('1% of revenue', 28, 400, NOTE)])] },
  };

  const zhLabels = {
    license_other: { blocks: [block(333, 541, 'middle', [text('$value', 39), text('同比 +23%', 28, 400, NOTE)]), { ...block(232, 623, 'end', [text('授权', 39, 800), text('及其他', 39, 800), text('支持与', 28, 400, NOTE), text('维护', 28, 400, NOTE)]), semanticRole: 'top-aligned-side-label' }] },
    royalty: { blocks: [block(333, 904, 'middle', [text('$value', 39), text('同比 +22%', 28, 400, NOTE)]), { ...block(224, 1026, 'end', [text('版税', 39, 800), text('按比例或', 28, 400, NOTE), text('固定金额', 28, 400, NOTE)]), semanticRole: 'top-aligned-side-label' }] },
    revenue_by_type: { blocks: [block(644, 600, 'middle', [text('收入', 39, 800), text('$value', 39), text('同比 +22%', 28, 400, NOTE)])] },
    external_customers: { blocks: [block(955, 485, 'middle', [text('外部客户', 38, 800), text('$value', 39), text('同比 +24%', 28, 400, NOTE)])] },
    related_parties: { blocks: [block(955, 1154, 'middle', [text('关联方', 39, 800), text('$value', 39), text('同比 +18%', 28, 400, NOTE), text('Arm 中国', 28, 400, NOTE), text('权益法投资', 28, 400, NOTE)])] },
    revenue: { blocks: [block(1267, 597, 'middle', [text('收入', 39, 800), text('$value', 39), text('同比 +22%', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1578, 400, 'middle', [text('毛利润', 38, 800), text('$value', 39), text('利润率 97%', 28, 400, NOTE), text('同比 +0 个百分点', 28, 400, NOTE)])] },
    cost_of_sales: { blocks: [block(1578, 1151, 'middle', [text('销售成本', 33, 800), text('$value', 32)])] },
    operating_profit: { blocks: [block(1882, 324, 'middle', [text('营业利润', 38, 800), text('$value', 39), text('利润率 7%', 28, 400, NOTE), text('同比 (4 个百分点)', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1889, 1023, 'middle', [text('运营费用', 34, 800), text('$value', 32)])] },
    tax: { blocks: [block(2085, 359, 'middle', [text('税项', 31, 800, GREEN_LABEL), text('$value', 31, 400, GREEN_LABEL)])] },
    other_income: { blocks: [block(2035, 600, 'start', [text('其他', 31, 800, GREEN_LABEL), text('$value', 31, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [block(2302, 453, 'start', [text('净利润', 38, 800), text('$value', 39), text('利润率 21%', 28, 400, NOTE), text('同比 +9 个百分点', 28, 400, NOTE)])] },
    rnd: { blocks: [block(2400, 845, 'middle', [text('研发', 31, 800), text('$value', 31), text('占收入 65%', 28, 400, NOTE), text('同比 +3 个百分点', 28, 400, NOTE)])] },
    sga: { blocks: [block(2400, 1039, 'middle', [text('销售、一般及行政', 31, 800), text('$value', 31), text('占收入 25%', 28, 400, NOTE), text('同比 (0 个百分点)', 28, 400, NOTE)])] },
    other_operating_expense: { blocks: [block(2400, 1232, 'middle', [text('其他', 31, 800), text('$value', 31), text('占收入 1%', 28, 400, NOTE)])] },
  };

  const annotations = `
    <g data-typography-role="brand">
      ${svgIcon('armHoldingsCompanyWordmark', 670, 172, 600, 290, '0 0 565 205')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arm-q1-fy27',
    name: 'Arm Holdings · Q1 FY27',
    company: 'Arm Holdings',
    meta: {
      company: 'Arm Holdings', title: 'Arm Holdings Q1 FY27 Income Statement', period: 'Q1 FY27', periodNote: 'Ending June 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/arm-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 118, titleWeight: 800, titleTextLength: 2398,
      periodX: 2382, periodY: 257, periodNoteY: 300,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 39, value: 39, note: 28, lineGap: 8 }, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 0.195,
      nodes: {
        license_other: { x: 297, y: 630, width: 71, height: 110 }, royalty: { x: 297, y: 994, width: 71, height: 137 },
        revenue_by_type: { x: 608, y: 743, width: 71, height: 251 }, external_customers: { x: 919, y: 631, width: 72, height: 175 },
        related_parties: { x: 919, y: 1061, width: 72, height: 74 }, revenue: { x: 1231, y: 741, width: 71, height: 254 },
        gross_profit: { x: 1542, y: 635, width: 72, height: 244 }, cost_of_sales: { x: 1542, y: 1124, width: 72, height: 5 },
        operating_profit: { x: 1854, y: 558, width: 71, height: 15 }, operating_expenses: { x: 1854, y: 773, width: 71, height: 227 },
        tax: { x: 2049, y: 452, width: 71, height: 1 }, other_income: { x: 2049, y: 555, width: 71, height: 30 },
        net_profit: { x: 2165, y: 479, width: 71, height: 51 }, rnd: { x: 2165, y: 835, width: 71, height: 162 },
        sga: { x: 2165, y: 1090, width: 71, height: 61 }, other_operating_expense: { x: 2165, y: 1261, width: 71, height: 1 },
      },
      labels,
    },
    nodes: [
      { id: 'license_other', col: 0, order: 0, type: 'source', label: ['License', '& Other'], value: 574, notes: ['+23% Y/Y', 'Support & Maintenance'] },
      { id: 'royalty', col: 0, order: 1, type: 'source', label: 'Royalty', value: 715, notes: ['+22% Y/Y', 'Percentage or fixed'] },
      { id: 'revenue_by_type', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1289, notes: ['+22% Y/Y'] },
      { id: 'external_customers', col: 2, order: 0, type: 'source', label: 'External Customers', value: 901, notes: ['+24% Y/Y'] },
      { id: 'related_parties', col: 2, order: 1, type: 'source', label: 'Related parties', value: 388, notes: ['+18% Y/Y', 'Arm China', 'Equity method investments'] },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1289, notes: ['+22% Y/Y'] },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 1253, notes: ['97% margin', '+0pp Y/Y'] },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 36 },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 91, notes: ['7% margin', '(4pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1162 },
      { id: 'tax', col: 6, order: 0, type: 'profit', label: 'Tax', value: 17, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 6, order: 1, type: 'profit', label: 'Other', value: 162, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 270, notes: ['21% margin', '+9pp Y/Y'] },
      { id: 'rnd', col: 7, order: 1, type: 'cost', label: 'R&D', value: 838, notes: ['65% of revenue', '+3pp Y/Y'] },
      { id: 'sga', col: 7, order: 2, type: 'cost', label: 'SG&A', value: 317, notes: ['25% of revenue', '(0pp) Y/Y'] },
      { id: 'other_operating_expense', col: 7, order: 3, type: 'cost', label: 'Other', value: 7, notes: ['1% of revenue'] },
    ],
    links: [
      { source: 'license_other', target: 'revenue_by_type', value: 574, sourceWidth: 110, targetWidth: 111, targetOrder: 0 },
      { source: 'royalty', target: 'revenue_by_type', value: 715, sourceWidth: 137, targetWidth: 140, targetOrder: 1 },
      { source: 'revenue_by_type', target: 'external_customers', value: 901, sourceWidth: 177, targetWidth: 175, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue_by_type', target: 'related_parties', value: 388, sourceWidth: 74, targetWidth: 74, sourceOrder: 1, targetOrder: 0 },
      { source: 'external_customers', target: 'revenue', value: 901, sourceWidth: 175, targetWidth: 177, sourceOrder: 0, targetOrder: 0 },
      { source: 'related_parties', target: 'revenue', value: 388, sourceWidth: 74, targetWidth: 75, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1253, sourceWidth: 247, targetWidth: 244, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 36, sourceWidth: 5, targetWidth: 5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 91, width: 15, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1162, width: 227, sourceOrder: 1, targetOrder: 0 },
      { source: 'tax', target: 'net_profit', value: 17, sourceWidth: 1, targetWidth: 3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 91, sourceWidth: 15, targetWidth: 16, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 162, sourceWidth: 30, targetWidth: 30, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 838, sourceWidth: 164, targetWidth: 162, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 317, sourceWidth: 62, targetWidth: 61, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 7, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Arm Holdings · 2027 财年第一季度',
        meta: { title: 'Arm Holdings 2027 财年第一季度利润表', period: '2027 财年第一季度', periodNote: '截至 2026 年 6 月' },
        nodes: {
          license_other: { label: '授权及其他', notes: ['同比 +23%', '支持与维护'] }, royalty: { label: '版税', notes: ['同比 +22%', '按比例或固定金额'] },
          revenue_by_type: { label: '收入', notes: ['同比 +22%'] }, external_customers: { label: '外部客户', notes: ['同比 +24%'] },
          related_parties: { label: '关联方', notes: ['同比 +18%', 'Arm 中国', '权益法投资'] }, revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 97%', '同比 +0 个百分点'] }, cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (4 个百分点)'] }, operating_expenses: { label: '运营费用' },
          tax: { label: '税项' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +9 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 65%', '同比 +3 个百分点'] }, sga: { label: '销售、一般及行政', notes: ['占收入 25%', '同比 (0 个百分点)'] },
          other_operating_expense: { label: '其他', notes: ['占收入 1%'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

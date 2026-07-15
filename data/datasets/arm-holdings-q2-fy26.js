/* ====================================================================
 * Arm Holdings - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/arm-holdings-q2-fy26.png as a fixed
 * d3-sankey layout with a source-validated legacy Arm wordmark annotation.
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
  const text = (value, size, weight = 400, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines) => ({ x, top, anchor, lineGap: 10, lines });

  const labels = {
    license_other: {
      blocks: [
        block(346, 553, 'middle', [text('$value', 39), text('+56% Y/Y', 28, 400, NOTE)]),
        block(232, 648, 'end', [text('License', 39, 800), text('& Other', 39, 800), text('Support &', 28, 400, NOTE), text('Maintenance', 28, 400, NOTE)]),
      ],
    },
    royalty: {
      blocks: [
        block(338, 899, 'middle', [text('$value', 39), text('+21% Y/Y', 28, 400, NOTE)]),
        block(224, 996, 'end', [text('Royalty', 39, 800), text('Percentage', 28, 400, NOTE), text('or fixed', 28, 400, NOTE)]),
      ],
    },
    revenue_by_type: { blocks: [block(650, 599, 'middle', [text('Revenue', 39, 800), text('$value', 39), text('+34% Y/Y', 28, 400, NOTE)])] },
    external_customers: { blocks: [block(962, 495, 'middle', [text('External Customers', 38, 800), text('$value', 39), text('+9% Y/Y', 28, 400, NOTE)])] },
    related_parties: { blocks: [block(962, 1138, 'middle', [text('Related parties', 39, 800), text('$value', 39), text('+120% Y/Y', 28, 400, NOTE), text('Arm China', 28, 400, NOTE), text('Equity method investments', 28, 400, NOTE)])] },
    revenue: { blocks: [block(1273, 599, 'middle', [text('Revenue', 39, 800), text('$value', 39), text('+34% Y/Y', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1581, 457, 'middle', [text('Gross profit', 38, 800), text('$value', 39), text('97% margin', 28, 400, NOTE), text('+1pp Y/Y', 28, 400, NOTE)])] },
    cost_of_sales: { blocks: [block(1580, 1153, 'middle', [text('Cost of sales', 33, 800), text('$value', 32)])] },
    operating_profit: { blocks: [block(1895, 390, 'middle', [text('Operating profit', 38, 800), text('$value', 39), text('14% margin', 28, 400, NOTE), text('+7pp Y/Y', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1895, 1013, 'middle', [text('Operating', 34, 800), text('expenses', 34, 800), text('$value', 32)])] },
    other: { blocks: [block(2052, 593, 'start', [text('Other', 31, 800, GREEN_LABEL), text('$value', 31, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [block(2307, 439, 'start', [text('Net profit', 38, 800), text('$value', 39), text('21% margin', 28, 400, NOTE), text('+8pp Y/Y', 28, 400, NOTE)])] },
    tax: { blocks: [block(2398, 740, 'middle', [text('Tax', 31, 800), text('$value', 31)])] },
    rnd: { blocks: [block(2398, 921, 'middle', [text('R&D', 31, 800), text('$value', 31), text('61% of revenue', 28, 400, NOTE), text('+1pp Y/Y', 28, 400, NOTE)])] },
    sga: { blocks: [block(2398, 1165, 'middle', [text('SG&A', 31, 800), text('$value', 31), text('22% of revenue', 28, 400, NOTE), text('(6pp) Y/Y', 28, 400, NOTE)])] },
  };

  const zhLabels = {
    license_other: { blocks: [block(338, 553, 'middle', [text('$value', 39), text('同比 +56%', 28, 400, NOTE)]), block(224, 648, 'end', [text('授权', 39, 800), text('及其他', 39, 800), text('支持与', 28, 400, NOTE), text('维护', 28, 400, NOTE)])] },
    royalty: { blocks: [block(338, 899, 'middle', [text('$value', 39), text('同比 +21%', 28, 400, NOTE)]), block(224, 996, 'end', [text('版税', 39, 800), text('按比例或', 28, 400, NOTE), text('固定金额', 28, 400, NOTE)])] },
    revenue_by_type: { blocks: [block(650, 599, 'middle', [text('收入', 39, 800), text('$value', 39), text('同比 +34%', 28, 400, NOTE)])] },
    external_customers: { blocks: [block(962, 495, 'middle', [text('外部客户', 38, 800), text('$value', 39), text('同比 +9%', 28, 400, NOTE)])] },
    related_parties: { blocks: [block(962, 1138, 'middle', [text('关联方', 39, 800), text('$value', 39), text('同比 +120%', 28, 400, NOTE), text('Arm 中国', 28, 400, NOTE), text('权益法投资', 28, 400, NOTE)])] },
    revenue: { blocks: [block(1273, 599, 'middle', [text('收入', 39, 800), text('$value', 39), text('同比 +34%', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1581, 457, 'middle', [text('毛利润', 38, 800), text('$value', 39), text('利润率 97%', 28, 400, NOTE), text('同比 +1 个百分点', 28, 400, NOTE)])] },
    cost_of_sales: { blocks: [block(1580, 1144, 'middle', [text('销售成本', 33, 800), text('$value', 32)])] },
    operating_profit: { blocks: [block(1895, 390, 'middle', [text('营业利润', 38, 800), text('$value', 39), text('利润率 14%', 28, 400, NOTE), text('同比 +7 个百分点', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1895, 1013, 'middle', [text('运营费用', 34, 800), text('$value', 32)])] },
    other: { blocks: [block(2052, 593, 'start', [text('其他', 31, 800, GREEN_LABEL), text('$value', 31, 400, GREEN_LABEL)])] },
    net_profit: { blocks: [block(2298, 432, 'start', [text('净利润', 38, 800), text('$value', 39), text('利润率 21%', 28, 400, NOTE), text('同比 +8 个百分点', 28, 400, NOTE)])] },
    tax: { blocks: [block(2398, 740, 'middle', [text('税费', 31, 800), text('$value', 31)])] },
    rnd: { blocks: [block(2398, 921, 'middle', [text('研发', 31, 800), text('$value', 31), text('占收入 61%', 28, 400, NOTE), text('同比 +1 个百分点', 28, 400, NOTE)])] },
    sga: { blocks: [block(2398, 1165, 'middle', [text('销售、一般及行政', 31, 800), text('$value', 31), text('占收入 22%', 28, 400, NOTE), text('同比 (6 个百分点)', 28, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arm-holdings-q2-fy26',
    name: 'Arm Holdings · Q2 FY26',
    company: 'Arm Holdings',
    meta: {
      company: 'Arm Holdings', title: 'Arm Holdings Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Sep. 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/arm-holdings-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 118, titleWeight: 800, titleTextLength: 2398,
      periodX: 2382, periodY: 257, periodNoteY: 300,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 39, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
    },
    rasterAnnotations: [
      { key: 'arm-holdings-company-wordmark-q2-fy26', href: 'data/assets/raster-annotations/arm-holdings/company-wordmark-q2-fy26.png', x: 700, y: 265, width: 520, height: 165 },
    ],
    layout: {
      scale: 0.214,
      nodes: {
        license_other: { x: 303, y: 641, width: 71, height: 109 }, royalty: { x: 303, y: 989, width: 71, height: 131 },
        revenue_by_type: { x: 614, y: 748, width: 71, height: 243 }, external_customers: { x: 925, y: 643, width: 72, height: 152 },
        related_parties: { x: 925, y: 1031, width: 72, height: 89 }, revenue: { x: 1237, y: 748, width: 71, height: 243 },
        gross_profit: { x: 1546, y: 642, width: 71, height: 236 }, cost_of_sales: { x: 1543, y: 1125, width: 72, height: 4 },
        operating_profit: { x: 1860, y: 577, width: 71, height: 34 }, operating_expenses: { x: 1860, y: 792, width: 71, height: 202 },
        other: { x: 2062, y: 556, width: 72, height: 27 }, net_profit: { x: 2171, y: 474, width: 71, height: 49 },
        tax: { x: 2171, y: 775, width: 71, height: 11 }, rnd: { x: 2171, y: 915, width: 71, height: 146 }, sga: { x: 2171, y: 1187, width: 71, height: 52 },
      },
      labels,
    },
    nodes: [
      { id: 'license_other', col: 0, order: 0, type: 'source', label: ['License', '& Other'], value: 515, notes: ['+56% Y/Y', 'Support & Maintenance'] },
      { id: 'royalty', col: 0, order: 1, type: 'source', label: 'Royalty', value: 620, notes: ['+21% Y/Y', 'Percentage or fixed'] },
      { id: 'revenue_by_type', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1135, notes: ['+34% Y/Y'] },
      { id: 'external_customers', col: 2, order: 0, type: 'source', label: 'External Customers', value: 713, notes: ['+9% Y/Y'] },
      { id: 'related_parties', col: 2, order: 1, type: 'source', label: 'Related parties', value: 422, notes: ['+120% Y/Y', 'Arm China', 'Equity method investments'] },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1135, notes: ['+34% Y/Y'] },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 1106, notes: ['97% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 29 },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 163, notes: ['14% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 943 },
      { id: 'other', col: 6, order: 0, type: 'profit', label: 'Other', value: 139 },
      { id: 'net_profit', col: 6, order: 1, type: 'profit', label: 'Net profit', value: 238, notes: ['21% margin', '+8pp Y/Y'] },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 64 },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 691, notes: ['61% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 6, order: 4, type: 'cost', label: 'SG&A', value: 252, notes: ['22% of revenue', '(6pp) Y/Y'] },
    ],
    links: [
      { source: 'license_other', target: 'revenue_by_type', value: 515, sourceWidth: 109, targetWidth: 110, targetOrder: 0 }, { source: 'royalty', target: 'revenue_by_type', value: 620, sourceWidth: 131, targetWidth: 133, targetOrder: 1 },
      { source: 'revenue_by_type', target: 'external_customers', value: 713, sourceWidth: 153, targetWidth: 152, sourceOrder: 0, targetOrder: 0 }, { source: 'revenue_by_type', target: 'related_parties', value: 422, sourceWidth: 90, targetWidth: 89, sourceOrder: 1, targetOrder: 0 },
      { source: 'external_customers', target: 'revenue', value: 713, sourceWidth: 152, targetWidth: 153, sourceOrder: 0, targetOrder: 0 }, { source: 'related_parties', target: 'revenue', value: 422, sourceWidth: 89, targetWidth: 90, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1106, sourceWidth: 239, targetWidth: 236, sourceOrder: 0, targetOrder: 0 }, { source: 'revenue', target: 'cost_of_sales', value: 29, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 163, width: 34, sourceOrder: 0, targetOrder: 0 }, { source: 'gross_profit', target: 'operating_expenses', value: 943, width: 202, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 99, sourceWidth: 22, targetWidth: 21, sourceOrder: 0, targetOrder: 0 }, { source: 'other', target: 'net_profit', value: 139, sourceWidth: 27, targetWidth: 27, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 64, sourceWidth: 12, targetWidth: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 691, sourceWidth: 148, targetWidth: 146, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_expenses', target: 'sga', value: 252, sourceWidth: 54, targetWidth: 52, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Arm Holdings · 2026 财年第二季度',
        meta: { title: 'Arm Holdings 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2025 年 9 月' },
        nodes: {
          license_other: { label: '授权及其他', notes: ['同比 +56%', '支持与维护'] }, royalty: { label: '版税', notes: ['同比 +21%', '按比例或固定金额'] },
          revenue_by_type: { label: '收入', notes: ['同比 +34%'] }, external_customers: { label: '外部客户', notes: ['同比 +9%'] },
          related_parties: { label: '关联方', notes: ['同比 +120%', 'Arm 中国', '权益法投资'] }, revenue: { label: '收入', notes: ['同比 +34%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 97%', '同比 +1 个百分点'] }, cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +7 个百分点'] }, operating_expenses: { label: '运营费用' }, other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +8 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 61%', '同比 +1 个百分点'] }, sga: { label: '销售、一般及行政', notes: ['占收入 22%', '同比 (6 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* CoreWeave Q3 FY25 income statement ($B). Fixed against its local source. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#2c41de';
  const BLUE_LINK = '#99a2e9';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const RIGHT_LABEL_X = 2388;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <svg x="300" y="267" width="285" height="178" viewBox="0 0 530 330" overflow="visible">
        ${BUSINESS_ICONS.coreweaveCompanyLogo || ''}
      </svg>
    </g>`;

  const enLabels = {
    committed_contracts: {
      blocks: [
        { x: 434, top: 512, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 38, weight: 400 }, { text: '+139% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 235, top: 706, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Committed', size: 40, weight: 800, color: BLUE }, { text: 'Contracts', size: 40, weight: 800, color: BLUE },
        ] },
      ],
    },
    on_demand_services: {
      blocks: [
        { x: 434, top: 1032, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 38, weight: 400 }, { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 235, top: 1082, anchor: 'middle', lineGap: 9, lines: [
          { text: 'On-demand', size: 40, weight: 800, color: BLUE }, { text: 'Services', size: 40, weight: 800, color: BLUE },
        ] },
      ],
    },
    revenue: { blocks: [{ x: 746, top: 553, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+134% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    united_states: { blocks: [{ x: 1064, top: 462, anchor: 'middle', lineGap: 8, lines: [
      { text: 'United States', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+134% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    rest_of_world: { blocks: [{ x: 1057, top: 1155, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Rest of World', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+127% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    revenue_to_profit: { blocks: [{ x: 1369, top: 545, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+134% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1680, top: 420, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '73% margin', size: 28, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1680, top: 1155, anchor: 'middle', lineGap: 7, lines: [
      { text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1991, top: 277, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 40, weight: 800 }, { text: 'profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '4% margin', size: 28, weight: 400, color: NOTE }, { text: '(16pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1991, top: 932, anchor: 'middle', lineGap: 7, lines: [
      { text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    net_loss: { blocks: [{ x: 2181, top: 548, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Net loss', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '(8%) margin', size: 28, weight: 400, color: NOTE }, { text: '+54pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    other_expenses: { blocks: [{ x: 2423, top: 410, anchor: 'start', lineGap: 8, lines: [
      { text: 'Other', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 840, anchor: 'start', lineGap: 8, lines: [
      { text: 'R&D ($747M)', size: 30, weight: 800 }, { text: '55% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1108, anchor: 'start', lineGap: 8, lines: [
      { text: 'G&A ($152M)', size: 30, weight: 800 }, { text: '11% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1234, anchor: 'start', lineGap: 8, lines: [
      { text: 'S&M ($45M)', size: 30, weight: 800 }, { text: '3% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    tax: { blocks: [] },
  };

  const zhLabels = {
    committed_contracts: { blocks: [
      { x: 434, top: 512, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +139%', size: 28, weight: 400, color: NOTE }] },
      { x: 235, top: 706, anchor: 'middle', lineGap: 9, lines: [{ text: '已承诺', size: 40, weight: 800, color: BLUE }, { text: '合同', size: 40, weight: 800, color: BLUE }] },
    ] },
    on_demand_services: { blocks: [
      { x: 434, top: 1032, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +17%', size: 28, weight: 400, color: NOTE }] },
      { x: 235, top: 1082, anchor: 'middle', lineGap: 9, lines: [{ text: '按需', size: 40, weight: 800, color: BLUE }, { text: '服务', size: 40, weight: 800, color: BLUE }] },
    ] },
    revenue: { blocks: [{ x: 746, top: 553, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +134%', size: 28, weight: 400, color: NOTE }] }] },
    united_states: { blocks: [{ x: 1057, top: 462, anchor: 'middle', lineGap: 8, lines: [{ text: '美国', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +134%', size: 28, weight: 400, color: NOTE }] }] },
    rest_of_world: { blocks: [{ x: 1057, top: 1155, anchor: 'middle', lineGap: 8, lines: [{ text: '世界其他地区', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +127%', size: 28, weight: 400, color: NOTE }] }] },
    revenue_to_profit: { blocks: [{ x: 1369, top: 553, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +134%', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1680, top: 420, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 73%', size: 28, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1680, top: 1155, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1991, top: 267, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 4%', size: 28, weight: 400, color: NOTE }, { text: '同比 (16 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1991, top: 932, anchor: 'middle', lineGap: 7, lines: [{ text: '运营费用', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
    net_loss: { blocks: [{ x: 2181, top: 548, anchor: 'middle', lineGap: 8, lines: [{ text: '净亏损', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 (8%)', size: 28, weight: 400, color: NOTE }, { text: '同比 +54 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    other_expenses: { blocks: [{ x: 2438, top: 410, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 840, anchor: 'start', lineGap: 8, lines: [{ text: '研发 ($747M)', size: 30, weight: 800 }, { text: '占收入 55%', size: 28, weight: 400, color: NOTE }, { text: '同比 +6 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1084, anchor: 'start', lineGap: 8, lines: [{ text: '管理费用 ($152M)', size: 30, weight: 800 }, { text: '占收入 11%', size: 28, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1234, anchor: 'start', lineGap: 8, lines: [{ text: '销售与市场 ($45M)', size: 30, weight: 800 }, { text: '占收入 3%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    tax: { blocks: [] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coreweave-q3-fy25',
    name: 'CoreWeave · Q3 FY25',
    company: 'CoreWeave',
    meta: {
      company: 'CoreWeave', title: 'CoreWeave Q3 FY25 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 3,
      referenceImage: { src: 'input/processed/coreweave-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 133, titleWeight: 800, titleTextLength: 2400,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 }, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 215,
      nodes: {
        committed_contracts: { x: 398, y: 603, width: 72, height: 289 }, on_demand_services: { x: 398, y: 1129, width: 72, height: 4 },
        revenue: { x: 710, y: 693, width: 72, height: 294 }, united_states: { x: 1021, y: 602, width: 72, height: 277 },
        rest_of_world: { x: 1021, y: 1117, width: 72, height: 16 }, revenue_to_profit: { x: 1333, y: 687, width: 71, height: 295 },
        gross_profit: { x: 1644, y: 602, width: 72, height: 214 }, cost_of_revenue: { x: 1644, y: 1052, width: 72, height: 78 },
        operating_profit: { x: 1955, y: 507, width: 73, height: 9 }, operating_expenses: { x: 1955, y: 706, width: 73, height: 203 },
        net_loss: { x: 2145, y: 500, width: 72, height: 21 }, other_expenses: { x: 2267, y: 423, width: 72, height: 34 },
        rnd: { x: 2267, y: 807, width: 72, height: 160 }, ga: { x: 2267, y: 1084, width: 72, height: 31 }, sm: { x: 2267, y: 1240, width: 72, height: 8 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'committed_contracts', col: 0, order: 0, type: 'source', label: ['Committed', 'Contracts'], value: 1.338, valueText: '$1,338M', notes: ['+139% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'on_demand_services', col: 0, order: 1, type: 'source', label: ['On-demand', 'Services'], value: 0.027, valueText: '$27M', notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.365, valueText: '$1,365M', notes: ['+134% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'united_states', col: 2, order: 0, type: 'hub', label: 'United States', value: 1.281, valueText: '$1,281M', notes: ['+134% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'rest_of_world', col: 2, order: 1, type: 'hub', label: 'Rest of World', value: 0.083, valueText: '$83M', notes: ['+127% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue_to_profit', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1.365, valueText: '$1,365M', notes: ['+134% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 0.996, valueText: '$996M', notes: ['73% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.369, valueText: '($369M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 0.052, valueText: '$52M', notes: ['4% margin', '(16pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.944, valueText: '($944M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 6, order: 0, type: 'cost', label: 'Net loss', value: -0.11, valueText: '($110M)', notes: ['(8%) margin', '+54pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 7, order: 0, type: 'cost', label: 'Other', value: 0.162, valueText: '($162M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 1, type: 'cost', label: 'R&D', value: 0.747, valueText: '($747M)', notes: ['55% of revenue', '+6pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 2, type: 'cost', label: 'G&A', value: 0.152, valueText: '($152M)', notes: ['11% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 7, order: 3, type: 'cost', label: 'S&M', value: 0.045, valueText: '($45M)', notes: ['3% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 8, order: 0, type: 'cost', label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent' },
    ],
    links: [
      { source: 'committed_contracts', target: 'revenue', value: 1.338, width: 289, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'on_demand_services', target: 'revenue', value: 0.027, width: 4, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'united_states', value: 1.281, width: 277, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'rest_of_world', value: 0.083, width: 16, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'united_states', target: 'revenue_to_profit', value: 1.281, sourceWidth: 277, targetWidth: 279, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'rest_of_world', target: 'revenue_to_profit', value: 0.083, width: 16, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue_to_profit', target: 'gross_profit', value: 0.996, sourceWidth: 216, targetWidth: 214, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue_to_profit', target: 'cost_of_revenue', value: 0.369, sourceWidth: 79, targetWidth: 78, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.052, sourceWidth: 11, targetWidth: 9, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.944, width: 203, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expenses', value: 0.052, sourceWidth: 9, targetWidth: 13, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss', target: 'other_expenses', value: 0.162, sourceWidth: 21, targetWidth: 21, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.747, sourceWidth: 162, targetWidth: 160, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.152, sourceWidth: 33, targetWidth: 31, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.045, sourceWidth: 8, targetWidth: 8, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'CoreWeave · 2025 财年第三季度',
        meta: { title: 'CoreWeave 2025 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 2240 },
        nodes: {
          committed_contracts: { label: ['已承诺', '合同'], notes: ['同比 +139%'] }, on_demand_services: { label: ['按需', '服务'], notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 +134%'] }, united_states: { label: '美国', notes: ['同比 +134%'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +127%'] },
          revenue_to_profit: { label: '收入', notes: ['同比 +134%'] }, gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (3 个百分点)'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (16 个百分点)'] }, operating_expenses: { label: '运营费用' }, net_loss: { label: '净亏损', notes: ['利润率 (8%)', '同比 +54 个百分点'] },
          other_expenses: { label: '其他' }, rnd: { label: '研发', notes: ['占收入 55%', '同比 +6 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 11%', '同比 +5 个百分点'] }, sm: { label: '销售与市场', notes: ['占收入 3%', '同比 +2 个百分点'] }, tax: { label: '税费' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

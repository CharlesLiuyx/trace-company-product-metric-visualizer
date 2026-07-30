/* CoreWeave Q2 FY25 income statement ($B). Fixed against its local source. */
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
        { x: 434, top: 480, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 38, weight: 400 },
          { text: '+213% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 235, top: 686, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Committed', size: 40, weight: 800, color: BLUE },
          { text: 'Contracts', size: 40, weight: 800, color: BLUE },
        ] },
      ],
    },
    on_demand_services: {
      blocks: [
        { x: 434, top: 1043, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 38, weight: 400 },
          { text: '+53% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 235, top: 1082, anchor: 'middle', lineGap: 9, lines: [
          { text: 'On-demand', size: 40, weight: 800, color: BLUE },
          { text: 'Services', size: 40, weight: 800, color: BLUE },
        ] },
      ],
    },
    revenue: { blocks: [{ x: 746, top: 535, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Revenue', size: 40, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '+207% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    united_states: { blocks: [{ x: 1057, top: 445, anchor: 'middle', lineGap: 8, lines: [
      { text: 'United States', size: 40, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '+210% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    rest_of_world: { blocks: [{ x: 1057, top: 1148, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Rest of World', size: 40, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '+158% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    revenue_to_profit: { blocks: [{ x: 1370, top: 535, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Revenue', size: 40, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '+207% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1680, top: 398, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Gross profit', size: 40, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '74% margin', size: 28, weight: 400, color: NOTE },
      { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1680, top: 1152, anchor: 'middle', lineGap: 7, lines: [
      { text: 'Cost of', size: 36, weight: 800 },
      { text: 'revenue', size: 36, weight: 800 },
      { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1984, top: 242, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 40, weight: 800 },
      { text: 'profit', size: 40, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '2% margin', size: 28, weight: 400, color: NOTE },
      { text: '(18pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1980, top: 979, anchor: 'middle', lineGap: 7, lines: [
      { text: 'Operating', size: 40, weight: 800 },
      { text: 'expenses', size: 40, weight: 800 },
      { text: '$value', size: 35, weight: 400 },
    ] }] },
    net_loss: { blocks: [{ x: 2138, top: 569, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Net loss', size: 40, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '(24%) margin', size: 28, weight: 400, color: NOTE },
      { text: '+58pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    other_expenses: { blocks: [{ x: 2423, top: 398, anchor: 'start', lineGap: 8, lines: [
      { text: 'Other', size: 30, weight: 800 },
      { text: '$value', size: 30, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 908, anchor: 'start', lineGap: 8, lines: [
      { text: 'R&D ($670M)', size: 30, weight: 800 },
      { text: '55% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1119, anchor: 'start', lineGap: 8, lines: [
      { text: 'G&A ($174M)', size: 30, weight: 800 },
      { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1271, anchor: 'start', lineGap: 8, lines: [
      { text: 'S&M ($37M)', size: 30, weight: 800 },
      { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
  };

  const zhLabels = {
    committed_contracts: { blocks: [
      { x: 434, top: 480, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 38, weight: 400 },
        { text: '同比 +213%', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 235, top: 686, anchor: 'middle', lineGap: 9, lines: [
        { text: '已承诺', size: 40, weight: 800, color: BLUE },
        { text: '合同', size: 40, weight: 800, color: BLUE },
      ] },
    ] },
    on_demand_services: { blocks: [
      { x: 434, top: 1043, anchor: 'middle', lineGap: 8, lines: [
        { text: '$value', size: 38, weight: 400 },
        { text: '同比 +53%', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 235, top: 1082, anchor: 'middle', lineGap: 9, lines: [
        { text: '按需', size: 40, weight: 800, color: BLUE },
        { text: '服务', size: 40, weight: 800, color: BLUE },
      ] },
    ] },
    revenue: { blocks: [{ x: 746, top: 535, anchor: 'middle', lineGap: 8, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '同比 +207%', size: 28, weight: 400, color: NOTE },
    ] }] },
    united_states: { blocks: [{ x: 1057, top: 445, anchor: 'middle', lineGap: 8, lines: [
      { text: '美国', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '同比 +210%', size: 28, weight: 400, color: NOTE },
    ] }] },
    rest_of_world: { blocks: [{ x: 1057, top: 1148, anchor: 'middle', lineGap: 8, lines: [
      { text: '世界其他地区', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '同比 +158%', size: 28, weight: 400, color: NOTE },
    ] }] },
    revenue_to_profit: { blocks: [{ x: 1370, top: 535, anchor: 'middle', lineGap: 8, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '同比 +207%', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1680, top: 398, anchor: 'middle', lineGap: 8, lines: [
      { text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '利润率 74%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1680, top: 1152, anchor: 'middle', lineGap: 7, lines: [
      { text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 },
      { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1984, top: 242, anchor: 'middle', lineGap: 8, lines: [
      { text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '利润率 2%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (18 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1980, top: 979, anchor: 'middle', lineGap: 7, lines: [
      { text: '运营费用', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    net_loss: { blocks: [{ x: 2138, top: 569, anchor: 'middle', lineGap: 8, lines: [
      { text: '净亏损', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '利润率 (24%)', size: 28, weight: 400, color: NOTE },
      { text: '同比 +58 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    other_expenses: { blocks: [{ x: 2423, top: 398, anchor: 'start', lineGap: 8, lines: [
      { text: '其他', size: 30, weight: 800 }, { text: '$value', size: 30, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 908, anchor: 'start', lineGap: 8, lines: [
      { text: '研发 ($670M)', size: 30, weight: 800 },
      { text: '占收入 55%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +9 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1119, anchor: 'start', lineGap: 8, lines: [
      { text: '管理费用 ($174M)', size: 30, weight: 800 },
      { text: '占收入 14%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +9 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1271, anchor: 'start', lineGap: 8, lines: [
      { text: '销售与市场 ($37M)', size: 30, weight: 800 },
      { text: '占收入 3%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coreweave-q2-fy25',
    name: 'CoreWeave · Q2 FY25',
    company: 'CoreWeave',
    meta: {
      company: 'CoreWeave',
      title: 'CoreWeave Q2 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/coreweave-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2440,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 252,
      nodes: {
        committed_contracts: { x: 399, y: 584, width: 71, height: 300 },
        on_demand_services: { x: 399, y: 1129, width: 71, height: 4 },
        revenue: { x: 710, y: 677, width: 71, height: 306 },
        united_states: { x: 1021, y: 585, width: 72, height: 291 },
        rest_of_world: { x: 1021, y: 1116, width: 72, height: 13 },
        revenue_to_profit: { x: 1335, y: 678, width: 72, height: 306 },
        gross_profit: { x: 1644, y: 579, width: 72, height: 226 },
        cost_of_revenue: { x: 1644, y: 1051, width: 72, height: 77 },
        operating_profit: { x: 1952, y: 473, width: 71, height: 4 },
        operating_expenses: { x: 1953, y: 740, width: 72, height: 223 },
        net_loss: { x: 2108, y: 472, width: 72, height: 72 },
        other_expenses: { x: 2267, y: 391, width: 71, height: 77 },
        rnd: { x: 2267, y: 866, width: 71, height: 167 },
        ga: { x: 2267, y: 1129, width: 71, height: 43 },
        sm: { x: 2267, y: 1280, width: 71, height: 7 },
      },
      labels: enLabels,
    },
    nonNodeMetrics: [{ id: 'tax', representation: 'data-only' }],
    nodes: [
      { id: 'committed_contracts', col: 0, order: 0, type: 'source', label: ['Committed', 'Contracts'], value: 1.189, valueText: '$1,189M', notes: ['+213% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'on_demand_services', col: 0, order: 1, type: 'source', label: ['On-demand', 'Services'], value: 0.024, valueText: '$24M', notes: ['+53% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.213, valueText: '$1,213M', notes: ['+207% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'united_states', col: 2, order: 0, type: 'hub', label: 'United States', value: 1.148, valueText: '$1,148M', notes: ['+210% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'rest_of_world', col: 2, order: 1, type: 'hub', label: 'Rest of World', value: 0.065, valueText: '$65M', notes: ['+158% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue_to_profit', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1.213, valueText: '$1,213M', notes: ['+207% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 0.9, valueText: '$900M', notes: ['74% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.313, valueText: '($313M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 0.019, valueText: '$19M', notes: ['2% margin', '(18pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.881, valueText: '($881M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 6, order: 0, type: 'cost', label: 'Net loss', value: -0.291, valueText: '($291M)', notes: ['(24%) margin', '+58pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 7, order: 0, type: 'cost', label: 'Other', value: 0.31, valueText: '($310M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 1, type: 'cost', label: 'R&D', value: 0.67, valueText: '($670M)', notes: ['55% of revenue', '+9pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 2, type: 'cost', label: 'G&A', value: 0.174, valueText: '($174M)', notes: ['14% of revenue', '+9pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 7, order: 3, type: 'cost', label: 'S&M', value: 0.037, valueText: '($37M)', notes: ['3% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'committed_contracts', target: 'revenue', value: 1.189, sourceWidth: 300, targetWidth: 300, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'on_demand_services', target: 'revenue', value: 0.024, sourceWidth: 4, targetWidth: 6, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'united_states', value: 1.148, sourceWidth: 291, targetWidth: 291, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'rest_of_world', value: 0.065, sourceWidth: 15, targetWidth: 13, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'united_states', target: 'revenue_to_profit', value: 1.148, sourceWidth: 291, targetWidth: 291, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'rest_of_world', target: 'revenue_to_profit', value: 0.065, sourceWidth: 13, targetWidth: 15, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue_to_profit', target: 'gross_profit', value: 0.9, sourceWidth: 229, targetWidth: 226, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue_to_profit', target: 'cost_of_revenue', value: 0.313, sourceWidth: 77, targetWidth: 77, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.019, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.881, sourceWidth: 222, targetWidth: 223, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expenses', value: 0.019, sourceWidth: 4, targetWidth: 5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss', target: 'other_expenses', value: 0.291, sourceWidth: 72, targetWidth: 72, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.67, sourceWidth: 169, targetWidth: 167, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.174, sourceWidth: 44, targetWidth: 43, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.037, sourceWidth: 10, targetWidth: 7, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'CoreWeave · 2025 财年第二季度',
        meta: { title: 'CoreWeave 2025 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 2240 },
        nodes: {
          committed_contracts: { label: ['已承诺', '合同'], notes: ['同比 +213%'] },
          on_demand_services: { label: ['按需', '服务'], notes: ['同比 +53%'] },
          revenue: { label: '收入', notes: ['同比 +207%'] },
          united_states: { label: '美国', notes: ['同比 +210%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +158%'] },
          revenue_to_profit: { label: '收入', notes: ['同比 +207%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (18 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损', notes: ['利润率 (24%)', '同比 +58 个百分点'] },
          other_expenses: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 55%', '同比 +9 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 14%', '同比 +9 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 3%', '同比 +2 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

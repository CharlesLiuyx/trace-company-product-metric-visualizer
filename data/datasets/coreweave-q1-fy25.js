/* CoreWeave Q1 FY25 income statement ($B). Fixed against its local source. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#858585';
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
  const coreweaveSymbol = (BUSINESS_ICONS.coreweaveCompanyLogo || '')
    .replace(/<text x="265" y="314"[^>]*>CoreWeave<\/text>/, '');

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <svg x="258" y="268" width="340" height="236" viewBox="0 0 530 330" preserveAspectRatio="none" overflow="visible">
        ${coreweaveSymbol}
      </svg>
      <text x="428" y="546" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="77" font-weight="400" fill="#020202">CoreWeave</text>
    </g>`;

  const enLabels = {
    committed_contracts: {
      blocks: [
        { x: 438, top: 617, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 38, weight: 400 }, { text: '+442% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 255, top: 826, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Committed', size: 40, weight: 800, color: BLUE }, { text: 'Contracts', size: 40, weight: 800, color: BLUE },
        ] },
      ],
    },
    on_demand_services: {
      blocks: [
        { x: 438, top: 1111, anchor: 'middle', lineGap: 8, lines: [
          { text: '$value', size: 38, weight: 400 }, { text: '+73% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 250, top: 1149, anchor: 'middle', lineGap: 9, lines: [
          { text: 'On-demand', size: 40, weight: 800, color: BLUE }, { text: 'Services', size: 40, weight: 800, color: BLUE },
        ] },
      ],
    },
    revenue: { blocks: [{ x: 749, top: 652, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+420% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    united_states: { blocks: [{ x: 1060, top: 566, anchor: 'middle', lineGap: 8, lines: [
      { text: 'United States', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+425% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    rest_of_world: { blocks: [{ x: 1063, top: 1246, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Rest of World', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+345% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    revenue_to_profit: { blocks: [{ x: 1371, top: 648, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+420% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1685, top: 537, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 },
      { text: '73% margin', size: 28, weight: 400, color: NOTE }, { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1680, top: 1247, anchor: 'middle', lineGap: 7, lines: [
      { text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_loss: { blocks: [{ x: 1866, top: 1119, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 40, weight: 800 }, { text: 'loss', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 },
      { text: '(3%) margin', size: 28, weight: 400, color: NOTE }, { text: '(12pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1987, top: 637, anchor: 'middle', lineGap: 7, lines: [
      { text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 728, anchor: 'start', lineGap: 8, lines: [
      { text: 'R&D ($561M)', size: 30, weight: 800 }, { text: '57% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+8pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 966, anchor: 'start', lineGap: 8, lines: [
      { text: 'G&A ($175M)', size: 30, weight: 800 }, { text: '18% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1139, anchor: 'start', lineGap: 8, lines: [
      { text: 'S&M ($11M)', size: 30, weight: 800 }, { text: '1% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
  };

  const zhLabels = {
    committed_contracts: { blocks: [
      { x: 438, top: 617, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +442%', size: 28, weight: 400, color: NOTE }] },
      { x: 255, top: 826, anchor: 'middle', lineGap: 9, lines: [{ text: '已承诺', size: 40, weight: 800, color: BLUE }, { text: '合同', size: 40, weight: 800, color: BLUE }] },
    ] },
    on_demand_services: { blocks: [
      { x: 438, top: 1111, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +73%', size: 28, weight: 400, color: NOTE }] },
      { x: 250, top: 1149, anchor: 'middle', lineGap: 9, lines: [{ text: '按需', size: 40, weight: 800, color: BLUE }, { text: '服务', size: 40, weight: 800, color: BLUE }] },
    ] },
    revenue: { blocks: [{ x: 749, top: 652, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +420%', size: 28, weight: 400, color: NOTE }] }] },
    united_states: { blocks: [{ x: 1060, top: 566, anchor: 'middle', lineGap: 8, lines: [{ text: '美国', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +425%', size: 28, weight: 400, color: NOTE }] }] },
    rest_of_world: { blocks: [{ x: 1063, top: 1246, anchor: 'middle', lineGap: 8, lines: [{ text: '世界其他地区', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +345%', size: 28, weight: 400, color: NOTE }] }] },
    revenue_to_profit: { blocks: [{ x: 1371, top: 648, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +420%', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1685, top: 537, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 73%', size: 28, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1680, top: 1247, anchor: 'middle', lineGap: 7, lines: [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
    operating_loss: { blocks: [{ x: 1866, top: 1119, anchor: 'middle', lineGap: 8, lines: [{ text: '营业亏损', size: 40, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '利润率 (3%)', size: 28, weight: 400, color: NOTE }, { text: '同比 (12 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1987, top: 637, anchor: 'middle', lineGap: 7, lines: [{ text: '运营费用', size: 40, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 728, anchor: 'start', lineGap: 8, lines: [{ text: '研发 ($561M)', size: 30, weight: 800 }, { text: '占收入 57%', size: 28, weight: 400, color: NOTE }, { text: '同比 +8 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 966, anchor: 'start', lineGap: 8, lines: [{ text: '管理费用 ($175M)', size: 30, weight: 800 }, { text: '占收入 18%', size: 28, weight: 400, color: NOTE }, { text: '同比 +9 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1139, anchor: 'start', lineGap: 8, lines: [{ text: '销售与市场 ($11M)', size: 30, weight: 800 }, { text: '占收入 1%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coreweave-q1-fy25',
    name: 'CoreWeave · Q1 FY25',
    company: 'CoreWeave',
    meta: {
      company: 'CoreWeave', title: 'CoreWeave Q1 FY25 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 3,
      referenceImage: { src: 'input/processed/coreweave-q1-fy25.png', width: 2667, height: 1500 },
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
      scale: 338,
      nodes: {
        committed_contracts: { x: 402, y: 709, width: 71, height: 325 },
        on_demand_services: { x: 402, y: 1199, width: 71, height: 5 },
        revenue: { x: 713, y: 795, width: 71, height: 332 },
        united_states: { x: 1024, y: 711, width: 72, height: 314 },
        rest_of_world: { x: 1019, y: 1209, width: 72, height: 15 },
        revenue_to_profit: { x: 1336, y: 789, width: 71, height: 331 },
        gross_profit: { x: 1650, y: 721, width: 71, height: 242 },
        cost_of_revenue: { x: 1645, y: 1139, width: 71, height: 88 },
        operating_loss: { x: 1830, y: 1089, width: 71, height: 8 },
        operating_expenses: { x: 1951, y: 788, width: 72, height: 251 },
        rnd: { x: 2270, y: 684, width: 71, height: 189 },
        ga: { x: 2270, y: 978, width: 71, height: 57 },
        sm: { x: 2270, y: 1152, width: 71, height: 1 },
      },
      labels: enLabels,
    },
    nonNodeMetrics: [{ id: 'tax', representation: 'data-only' }],
    nodes: [
      { id: 'committed_contracts', col: 0, order: 0, type: 'source', label: ['Committed', 'Contracts'], value: 0.962, valueText: '$962M', notes: ['+442% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'on_demand_services', col: 0, order: 1, type: 'source', label: ['On-demand', 'Services'], value: 0.02, valueText: '$20M', notes: ['+73% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 0.982, valueText: '$982M', notes: ['+420% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'united_states', col: 2, order: 0, type: 'hub', label: 'United States', value: 0.929, valueText: '$929M', notes: ['+425% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'rest_of_world', col: 2, order: 1, type: 'hub', label: 'Rest of World', value: 0.052, valueText: '$52M', notes: ['+345% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue_to_profit', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 0.982, valueText: '$982M', notes: ['+420% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 0.719, valueText: '$719M', notes: ['73% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 4, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.262, valueText: '($262M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 5, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.027, valueText: '($27M)', notes: ['(3%) margin', '(12pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 6, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 0.747, valueText: '($747M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 0, type: 'cost', label: 'R&D', value: 0.561, valueText: '($561M)', notes: ['57% of revenue', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 7, order: 1, type: 'cost', label: 'G&A', value: 0.175, valueText: '($175M)', notes: ['18% of revenue', '+9pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 7, order: 2, type: 'cost', label: 'S&M', value: 0.011, valueText: '($11M)', notes: ['1% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'committed_contracts', target: 'revenue', value: 0.962, sourceWidth: 325, targetWidth: 325, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'on_demand_services', target: 'revenue', value: 0.02, sourceWidth: 5, targetWidth: 7, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'united_states', value: 0.929, width: 314, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'rest_of_world', value: 0.052, sourceWidth: 18, targetWidth: 15, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'united_states', target: 'revenue_to_profit', value: 0.929, sourceWidth: 314, targetWidth: 316, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'rest_of_world', target: 'revenue_to_profit', value: 0.052, width: 15, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue_to_profit', target: 'gross_profit', value: 0.719, sourceWidth: 241, targetWidth: 242, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue_to_profit', target: 'cost_of_revenue', value: 0.262, sourceWidth: 90, targetWidth: 88, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.719, sourceWidth: 242, targetWidth: 241, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.027, sourceWidth: 8, targetWidth: 9, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.561, sourceWidth: 187, targetWidth: 189, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.175, sourceWidth: 56, targetWidth: 57, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.011, sourceWidth: 8, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'CoreWeave · 2025 财年第一季度',
        meta: { title: 'CoreWeave 2025 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 2240 },
        nodes: {
          committed_contracts: { label: ['已承诺', '合同'], notes: ['同比 +442%'] },
          on_demand_services: { label: ['按需', '服务'], notes: ['同比 +73%'] },
          revenue: { label: '收入', notes: ['同比 +420%'] },
          united_states: { label: '美国', notes: ['同比 +425%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +345%'] },
          revenue_to_profit: { label: '收入', notes: ['同比 +420%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (3%)', '同比 (12 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 57%', '同比 +8 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 18%', '同比 +9 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 1%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

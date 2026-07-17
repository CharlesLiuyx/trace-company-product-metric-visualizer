/* ====================================================================
 * CoreWeave - FY25 income statement ($B)
 * Reconstructed from input/processed/coreweave-fy25.png as a fixed
 * d3-sankey layout with a reusable SVG CoreWeave logo annotation.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#767676';
  const BLUE = '#3146e8';
  const BLUE_LINK = '#98a2e6';
  const GRAY_LINK = '#8d8d8b';
  const GREEN = '#29a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cf99';
  const RED = '#d60000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38283';
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
        {
          x: 434, top: 512, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+156% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 235, top: 740, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Committed', size: 40, weight: 800, color: BLUE },
            { text: 'Contracts', size: 40, weight: 800, color: BLUE },
          ],
        },
      ],
    },
    on_demand_services: {
      blocks: [
        {
          x: 434, top: 978, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+456% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 235, top: 1032, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'On-demand', size: 40, weight: 800, color: BLUE },
            { text: 'Services', size: 40, weight: 800, color: BLUE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 746, top: 561, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+167% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    united_states: {
      blocks: [
        {
          x: 1057, top: 476, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'United States', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+167% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rest_of_world: {
      blocks: [
        {
          x: 1057, top: 1125, anchor: 'middle', lineGap: 11,
          lines: [
            { text: 'Rest of World', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+179% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue_to_profit: {
      blocks: [
        {
          x: 1369, top: 562, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '+167% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1680, top: 443, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '72% margin', size: 28, weight: 400, color: NOTE },
            { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1680, top: 1116, anchor: 'middle', lineGap: 7,
          lines: [
            { text: 'Cost of', size: 36, weight: 800 },
            { text: 'revenue', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1989, top: 554, anchor: 'middle', lineGap: 7,
          lines: [
            { text: 'Operating', size: 40, weight: 800 },
            { text: 'expenses', size: 40, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1876, top: 1018, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Operating', size: 40, weight: 800 },
            { text: 'loss', size: 40, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: '(1%) margin', size: 28, weight: 400, color: NOTE },
            { text: '(18pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 620, anchor: 'start', lineGap: 8,
          lines: [
            { text: 'R&D ($2.9B)', size: 30, weight: 800 },
            { text: '57% of revenue', size: 28, weight: 400, color: NOTE },
            { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 873, anchor: 'start', lineGap: 8,
          lines: [
            { text: 'G&A ($0.7M)', size: 30, weight: 800 },
            { text: '13% of revenue', size: 28, weight: 400, color: NOTE },
            { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1062, anchor: 'start', lineGap: 8,
          lines: [
            { text: 'S&M ($0.1B)', size: 30, weight: 800 },
            { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
            { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: { blocks: [] },
  };

  const zhLabels = {
    committed_contracts: {
      blocks: [
        {
          x: 434, top: 512, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +156%', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 235, top: 740, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '已承诺', size: 40, weight: 800, color: BLUE },
            { text: '合同', size: 40, weight: 800, color: BLUE },
          ],
        },
      ],
    },
    on_demand_services: {
      blocks: [
        {
          x: 434, top: 978, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +456%', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 235, top: 1032, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '按需', size: 40, weight: 800, color: BLUE },
            { text: '服务', size: 40, weight: 800, color: BLUE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 746, top: 561, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +167%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    united_states: {
      blocks: [
        {
          x: 1057, top: 476, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '美国', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +167%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rest_of_world: {
      blocks: [
        {
          x: 1057, top: 1125, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '世界其他地区', size: 38, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +179%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue_to_profit: {
      blocks: [
        {
          x: 1369, top: 562, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '同比 +167%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1680, top: 443, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '毛利润', size: 40, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '利润率 72%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1680, top: 1116, anchor: 'middle', lineGap: 7,
          lines: [
            { text: '收入', size: 36, weight: 800 },
            { text: '成本', size: 36, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1989, top: 554, anchor: 'middle', lineGap: 7,
          lines: [
            { text: '运营', size: 40, weight: 800 },
            { text: '费用', size: 40, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1876, top: 1018, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业', size: 40, weight: 800 },
            { text: '亏损', size: 40, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: '利润率 (1%)', size: 28, weight: 400, color: NOTE },
            { text: '同比 (18 个百分点)', size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 620, anchor: 'start', lineGap: 8,
          lines: [
            { text: '研发 ($2.9B)', size: 30, weight: 800 },
            { text: '占收入 57%', size: 28, weight: 400, color: NOTE },
            { text: '同比 +7 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 873, anchor: 'start', lineGap: 8,
          lines: [
            { text: '管理费用 ($0.7M)', size: 29, weight: 800 },
            { text: '占收入 13%', size: 28, weight: 400, color: NOTE },
            { text: '同比 +6 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1062, anchor: 'start', lineGap: 8,
          lines: [
            { text: '销售与市场 ($0.1B)', size: 29, weight: 800 },
            { text: '占收入 3%', size: 28, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: { blocks: [] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coreweave-fy25',
    name: 'CoreWeave · FY25',
    company: 'CoreWeave',
    meta: {
      company: 'CoreWeave',
      title: 'CoreWeave FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Fiscal year 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coreweave-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2180,
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
      linkTint: {
        source: BLUE_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 65,
      nodes: {
        committed_contracts: { x: 398, y: 608, width: 72, height: 305 },
        on_demand_services: { x: 398, y: 1065, width: 72, height: 27 },
        revenue: { x: 710, y: 695, width: 72, height: 331 },
        united_states: { x: 1021, y: 610, width: 72, height: 309 },
        rest_of_world: { x: 1021, y: 1085, width: 72, height: 19 },
        revenue_to_profit: { x: 1333, y: 696, width: 71, height: 332 },
        gross_profit: { x: 1644, y: 613, width: 72, height: 237 },
        cost_of_revenue: { x: 1644, y: 1009, width: 72, height: 93 },
        operating_loss: { x: 1838, y: 1004, width: 75, height: 3 },
        operating_expenses: { x: 1955, y: 698, width: 73, height: 240 },
        rnd: { x: 2267, y: 567, width: 72, height: 189 },
        ga: { x: 2267, y: 891, width: 72, height: 41 },
        sm: { x: 2267, y: 1086, width: 72, height: 8 },
      },
      labels: enLabels,
    },

    nonNodeMetrics: [
      { id: 'tax', representation: 'data-only' },
    ],

    nodes: [
      {
        id: 'committed_contracts', col: 0, order: 0, type: 'source',
        label: ['Committed', 'Contracts'], value: 4.7, notes: ['+156% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'on_demand_services', col: 0, order: 1, type: 'source',
        label: ['On-demand', 'Services'], value: 0.4, notes: ['+456% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 5.1, notes: ['+167% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'united_states', col: 2, order: 0, type: 'hub',
        label: 'United States', value: 4.8, notes: ['+167% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'rest_of_world', col: 2, order: 1, type: 'hub',
        label: 'Rest of World', value: 0.3, notes: ['+179% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue_to_profit', col: 3, order: 0, type: 'hub',
        label: 'Revenue', value: 5.1, notes: ['+167% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'gross_profit', col: 4, order: 0, type: 'profit',
        label: 'Gross profit', value: 3.7, notes: ['72% margin', '(3pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 4, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 1.5,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 5, order: 1, type: 'cost',
        label: ['Operating', 'loss'], value: -0.046, valueText: '($46M)',
        notes: ['(1%) margin', '(18pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 6, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 3.7,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 7, order: 0, type: 'cost',
        label: 'R&D', value: 2.9, notes: ['57% of revenue', '+7pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 7, order: 1, type: 'cost',
        label: 'G&A', value: 0.7, valueText: '($0.7M)', notes: ['13% of revenue', '+6pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 7, order: 2, type: 'cost',
        label: 'S&M', value: 0.1, notes: ['3% of revenue', '+2pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'committed_contracts', target: 'revenue', value: 4.7, width: 305, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'on_demand_services', target: 'revenue', value: 0.4, width: 27, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },

      { source: 'revenue', target: 'united_states', value: 4.8, width: 309, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'rest_of_world', value: 0.3, width: 19, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'united_states', target: 'revenue_to_profit', value: 4.8, width: 309, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'rest_of_world', target: 'revenue_to_profit', value: 0.3, width: 19, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },

      { source: 'revenue_to_profit', target: 'gross_profit', value: 3.7, width: 237, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue_to_profit', target: 'cost_of_revenue', value: 1.5, width: 93, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_expenses', value: 3.7, width: 237, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 0.046, width: 3,
        sourceOrder: 0, targetOrder: 1, y0: 1005.5, y1: 936.5,
        curve: { x0: 1913, c1x: 1938, c1y: 1005.5, c2x: 1950, c2y: 936.5 },
        linkTint: RED_LINK,
      },

      { source: 'operating_expenses', target: 'rnd', value: 2.9, width: 189, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.7, width: 41, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.1, width: 8, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'CoreWeave · 2025 财年',
        meta: {
          title: 'CoreWeave 2025 财年利润表',
          period: '2025 财年',
          periodNote: '2025 财年',
          titleTextLength: 1840,
        },
        nodes: {
          committed_contracts: { label: ['已承诺', '合同'], notes: ['同比 +156%'] },
          on_demand_services: { label: ['按需', '服务'], notes: ['同比 +456%'] },
          revenue: { label: '收入', notes: ['同比 +167%'] },
          united_states: { label: '美国', notes: ['同比 +167%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +179%'] },
          revenue_to_profit: { label: '收入', notes: ['同比 +167%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (1%)', '同比 (18 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 57%', '同比 +7 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 13%', '同比 +6 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 3%', '同比 +2 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

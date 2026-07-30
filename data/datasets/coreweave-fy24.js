/* ====================================================================
 * CoreWeave - FY24 income statement ($B)
 * Reconstructed from input/processed/coreweave-fy24.png as a fixed
 * d3-sankey layout with a reusable SVG CoreWeave logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#2c41de';
  const BLUE_LINK = '#99a2e9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const RIGHT_LABEL_X = 2015;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <svg x="580" y="260" width="430" height="270" viewBox="0 0 530 330" overflow="visible">
        ${BUSINESS_ICONS.coreweaveCompanyLogo || ''}
      </svg>
    </g>`;

  const line = (text, size, weight, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8) => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });

  const enLabels = {
    committed_contracts: {
      blocks: [
        block(434, 602, 'middle', [line('$value', 38, 400), line('+813% Y/Y', 28, 400, NOTE)]),
        block(363, 799, 'end', [line('Committed', 40, 800, BLUE), line('Contracts', 40, 800, BLUE)], 9),
      ],
    },
    on_demand_services: {
      blocks: [
        block(434, 1074, 'middle', [line('$value', 38, 400), line('+179% Y/Y', 28, 400, NOTE)]),
        block(363, 1127, 'end', [line('On-demand', 40, 800, BLUE), line('Services', 40, 800, BLUE)], 9),
      ],
    },
    revenue: {
      blocks: [
        block(806, 642, 'middle', [
          line('Revenue', 40, 800),
          line('$value', 38, 400),
          line('+737% Y/Y', 28, 400, NOTE),
        ]),
      ],
    },
    gross_profit: {
      blocks: [
        block(1180, 509, 'middle', [
          line('Gross profit', 40, 800),
          line('$value', 38, 400),
          line('76% margin', 28, 400, NOTE),
          line('+8pp Y/Y', 28, 400, NOTE),
        ]),
      ],
    },
    cost_of_revenue: {
      blocks: [
        block(1181, 1193, 'middle', [
          line('Cost of', 36, 800),
          line('revenue', 36, 800),
          line('$value', 35, 400),
        ], 7),
      ],
    },
    operating_profit: {
      blocks: [
        block(1559, 415, 'middle', [
          line('Operating profit', 40, 800),
          line('$value', 38, 400),
          line('17% margin', 28, 400, NOTE),
          line('+18pp Y/Y', 28, 400, NOTE),
        ]),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1561, 1019, 'middle', [
          line('Operating', 40, 800),
          line('expenses', 40, 800),
          line('$value', 35, 400),
        ], 7),
      ],
    },
    net_loss: {
      blocks: [
        block(1855, 346, 'middle', [line('Net loss', 40, 800), line('$value', 38, 400)]),
      ],
    },
    other_expenses: {
      blocks: [
        block(2045, 711, 'middle', [
          line('Other', 40, 800),
          line('expenses', 40, 800),
          line('$value', 35, 400),
        ], 7),
      ],
    },
    loss_fair_value_adjustments: {
      blocks: [
        block(2366, 392, 'start', [
          line('Loss on', 32, 800),
          line('fair value', 32, 800),
          line('adjustments', 32, 800),
          line('$value', 30, 400),
        ], 7),
      ],
    },
    interest_other: {
      blocks: [
        block(2394, 599, 'start', [
          line('Interest', 32, 800),
          line('& Other', 32, 800),
          line('$value', 30, 400),
        ], 7),
      ],
    },
    tax: {
      blocks: [
        block(2395, 757, 'start', [line('Tax', 32, 800), line('$value', 30, 400)], 7),
      ],
    },
    rnd: {
      blocks: [
        block(RIGHT_LABEL_X, 934, 'start', [
          line('R&D ($1.0B)', 30, 800),
          line('51% of revenue', 28, 400, NOTE),
          line('+44pp Y/Y', 28, 400, NOTE),
        ]),
      ],
    },
    ga: {
      blocks: [
        block(RIGHT_LABEL_X, 1093, 'start', [
          line('G&A ($0.1B)', 30, 800),
          line('6% of revenue', 28, 400, NOTE),
          line('+5pp Y/Y', 28, 400, NOTE),
        ]),
      ],
    },
    sm: {
      blocks: [
        block(RIGHT_LABEL_X, 1244, 'start', [
          line('S&M ($18M)', 30, 800),
          line('1% of revenue', 28, 400, NOTE),
          line('+0pp Y/Y', 28, 400, NOTE),
        ]),
      ],
    },
  };

  const zhLabels = {
    committed_contracts: {
      blocks: [
        block(434, 602, 'middle', [line('$value', 38, 400), line('同比 +813%', 28, 400, NOTE)]),
        block(363, 799, 'end', [line('已承诺', 40, 800, BLUE), line('合同', 40, 800, BLUE)], 9),
      ],
    },
    on_demand_services: {
      blocks: [
        block(434, 1076, 'middle', [line('$value', 38, 400), line('同比 +179%', 28, 400, NOTE)]),
        block(363, 1129, 'end', [line('按需', 40, 800, BLUE), line('服务', 40, 800, BLUE)], 9),
      ],
    },
    revenue: {
      blocks: [
        block(806, 642, 'middle', [line('收入', 40, 800), line('$value', 38, 400), line('同比 +737%', 28, 400, NOTE)]),
      ],
    },
    gross_profit: {
      blocks: [
        block(1180, 509, 'middle', [
          line('毛利润', 40, 800),
          line('$value', 38, 400),
          line('利润率 76%', 28, 400, NOTE),
          line('同比 +8 个百分点', 28, 400, NOTE),
        ]),
      ],
    },
    cost_of_revenue: {
      blocks: [block(1181, 1193, 'middle', [line('收入', 36, 800), line('成本', 36, 800), line('$value', 35, 400)], 7)],
    },
    operating_profit: {
      blocks: [
        block(1559, 415, 'middle', [
          line('营业利润', 40, 800),
          line('$value', 38, 400),
          line('利润率 17%', 28, 400, NOTE),
          line('同比 +18 个百分点', 28, 400, NOTE),
        ]),
      ],
    },
    operating_expenses: {
      blocks: [block(1561, 1019, 'middle', [line('运营费用', 40, 800), line('$value', 35, 400)], 7)],
    },
    net_loss: {
      blocks: [block(1855, 349, 'middle', [line('净亏损', 40, 800), line('$value', 38, 400)])],
    },
    other_expenses: {
      blocks: [block(2045, 711, 'middle', [line('其他费用', 40, 800), line('$value', 35, 400)], 7)],
    },
    loss_fair_value_adjustments: {
      blocks: [
        block(2394, 392, 'start', [
          line('公允价值', 31, 800),
          line('调整损失', 31, 800),
          line('$value', 30, 400),
        ], 7),
      ],
    },
    interest_other: {
      blocks: [block(2394, 600, 'start', [line('利息及其他', 31, 800), line('$value', 30, 400)], 7)],
    },
    tax: {
      blocks: [block(2394, 758, 'start', [line('税费', 31, 800), line('$value', 30, 400)], 7)],
    },
    rnd: {
      blocks: [
        block(RIGHT_LABEL_X, 934, 'start', [
          line('研发 ($1.0B)', 30, 800),
          line('占收入 51%', 28, 400, NOTE),
          line('同比 +44 个百分点', 28, 400, NOTE),
        ]),
      ],
    },
    ga: {
      blocks: [
        block(RIGHT_LABEL_X, 1093, 'start', [
          line('管理费用 ($0.1B)', 30, 800),
          line('占收入 6%', 28, 400, NOTE),
          line('同比 +5 个百分点', 28, 400, NOTE),
        ]),
      ],
    },
    sm: {
      blocks: [
        block(RIGHT_LABEL_X, 1244, 'start', [
          line('销售与市场 ($18M)', 30, 800),
          line('占收入 1%', 28, 400, NOTE),
          line('同比 +0 个百分点', 28, 400, NOTE),
        ]),
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coreweave-fy24',
    name: 'CoreWeave · FY24',
    company: 'CoreWeave',
    meta: {
      company: 'CoreWeave',
      title: 'CoreWeave FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coreweave-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2230,
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
        hub: { node: BLUE, label: BLUE },
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
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 162,
      nodes: {
        committed_contracts: { x: 397, y: 699, width: 71, height: 298 },
        on_demand_services: { x: 397, y: 1172, width: 71, height: 10 },
        revenue: { x: 771, y: 788, width: 70, height: 310 },
        gross_profit: { x: 1145, y: 693, width: 70, height: 229 },
        cost_of_revenue: { x: 1147, y: 1096, width: 70, height: 78 },
        operating_profit: { x: 1523, y: 599, width: 71, height: 51 },
        operating_expenses: { x: 1526, y: 825, width: 70, height: 177 },
        net_loss: { x: 1820, y: 450, width: 70, height: 139 },
        other_expenses: { x: 2010, y: 500, width: 70, height: 192 },
        loss_fair_value_adjustments: { x: 2265, y: 415, width: 71, height: 122 },
        interest_other: { x: 2265, y: 624, width: 71, height: 49 },
        tax: { x: 2265, y: 772, width: 71, height: 17 },
        rnd: { x: 1897, y: 907, width: 71, height: 154 },
        ga: { x: 1900, y: 1152, width: 70, height: 17 },
        sm: { x: 1902, y: 1262, width: 71, height: 1 },
      },
      labels: enLabels,
    },

    nodes: [
      {
        id: 'committed_contracts', col: 0, order: 0, type: 'source',
        label: ['Committed', 'Contracts'], value: 1.8, valueText: '$1.8B', notes: ['+813% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'on_demand_services', col: 0, order: 1, type: 'source',
        label: ['On-demand', 'Services'], value: 0.1, valueText: '$0.1B', notes: ['+179% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1.915, notes: ['+737% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 1.422, notes: ['76% margin', '+8pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 0.493,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 0.324,
        notes: ['17% margin', '+18pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 1.098,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_loss', col: 4, order: 0, type: 'cost',
        label: 'Net loss', value: -0.863,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_expenses', col: 5, order: 0, type: 'cost',
        label: ['Other', 'expenses'], value: 1.187,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'loss_fair_value_adjustments', col: 6, order: 0, type: 'cost',
        label: ['Loss on', 'fair value', 'adjustments'], value: 0.756,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest_other', col: 6, order: 1, type: 'cost',
        label: ['Interest', '& Other'], value: 0.312,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 2, type: 'cost',
        label: 'Tax', value: 0.119,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 6, order: 3, type: 'cost',
        label: 'R&D', value: 0.961, notes: ['51% of revenue', '+44pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 4, type: 'cost',
        label: 'G&A', value: 0.119, notes: ['6% of revenue', '+5pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 6, order: 5, type: 'cost',
        label: 'S&M', value: 0.018, valueText: '($18M)', notes: ['1% of revenue', '+0pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'committed_contracts', target: 'revenue', value: 1.8, sourceWidth: 298, targetWidth: 298, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'on_demand_services', target: 'revenue', value: 0.1, sourceWidth: 10, targetWidth: 12, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.422, sourceWidth: 229, targetWidth: 229, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.493, sourceWidth: 81, targetWidth: 78, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.324, sourceWidth: 51, targetWidth: 51, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.098, sourceWidth: 177, targetWidth: 177, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss', target: 'other_expenses', value: 0.863, sourceWidth: 139, targetWidth: 139, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expenses', value: 0.324, sourceWidth: 51, targetWidth: 53, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'other_expenses', target: 'loss_fair_value_adjustments', value: 0.756, sourceWidth: 122, targetWidth: 122, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_expenses', target: 'interest_other', value: 0.312, sourceWidth: 49, targetWidth: 49, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_expenses', target: 'tax', value: 0.119, sourceWidth: 21, targetWidth: 17, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.961, sourceWidth: 154, targetWidth: 154, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.119, sourceWidth: 17, targetWidth: 17, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.018, sourceWidth: 6, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'CoreWeave · 2024 财年',
        meta: {
          title: 'CoreWeave 2024 财年利润表',
          period: '',
          periodNote: '',
          titleTextLength: 1900,
        },
        nodes: {
          committed_contracts: { label: ['已承诺', '合同'], notes: ['同比 +813%'] },
          on_demand_services: { label: ['按需', '服务'], notes: ['同比 +179%'] },
          revenue: { label: '收入', notes: ['同比 +737%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +8 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +18 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损' },
          other_expenses: { label: '其他费用' },
          loss_fair_value_adjustments: { label: ['公允价值', '调整损失'] },
          interest_other: { label: '利息及其他' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 51%', '同比 +44 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 +5 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* ====================================================================
 * Lam Research - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/lam-research-q3-fy26.png as a fixed
 * d3-sankey layout with a pure SVG Lam Research lockup.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE = '#27a98b';
  const SOURCE_LABEL = '#20a68a';
  const SOURCE_LINK = '#9bd2c5';
  const HUB = '#28263d';
  const HUB_LINK = '#999aa4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#dd0000';
  const RED_LABEL = '#9f1900';
  const RED_LINK = '#e08383';
  const FOUNDRY = '#f8c625';
  const LOGIC = '#ec9940';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2434;

  const lamResearchLogo = `
    <g fill="#000000">
      <path d="M0 208 112 0l112 208H0Z"/>
      <path d="m56 104 117 104h-31L42 119l85 89H97L29 138l57 70H57L14 161l29 47H0l31-58Z" fill="#f2f2f2"/>
      <text x="245" y="141" font-family="Georgia,Times New Roman,serif" font-size="165" letter-spacing="-14">Lam</text>
      <text x="253" y="205" font-family="Georgia,Times New Roman,serif" font-size="56" letter-spacing="4">RESEARCH</text>
      <text x="552" y="79" font-family="Arial,sans-serif" font-size="31">®</text>
    </g>`;

  const enLabels = {
    memory: {
      blocks: [
        { x: 384, top: 421, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 313, top: 535, anchor: 'end', lines: [{ text: 'Memory', size: 40, weight: 800 }] },
      ],
    },
    foundry: {
      blocks: [
        { x: 380, top: 644, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+38% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 304, top: 776, anchor: 'end', lines: [{ text: 'Foundry', size: 40, weight: 800 }] },
      ],
    },
    logic: {
      blocks: [
        { x: 380, top: 895, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(4%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 280, top: 971, anchor: 'end', lines: [{ text: 'Logic', size: 40, weight: 800 }] },
      ],
    },
    systems: {
      blocks: [{ x: 753, top: 495, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Systems', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    customer_support: {
      blocks: [
        { x: 747, top: 959, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 680, top: 1070, anchor: 'end', lineGap: 10, lines: [
          { text: 'Customer', size: 40, weight: 800 },
          { text: 'Support', size: 40, weight: 800 },
        ] },
      ],
    },
    revenue: {
      blocks: [{ x: 1122, top: 578, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1507, top: 447, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Gross profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '50% margin', size: 29, weight: 400, color: NOTE },
        { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_goods_sold: {
      blocks: [{ x: 1499, top: 1202, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Cost of', size: 38, weight: 800 },
        { text: 'goods sold', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1874, top: 330, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Operating profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '35% margin', size: 29, weight: 400, color: NOTE },
        { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1874, top: 932, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Operating', size: 38, weight: 800 },
        { text: 'Expenses', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_LABEL_X, top: 379, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Net profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '31% margin', size: 29, weight: 400, color: NOTE },
        { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_LABEL_X, top: 663, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Tax', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    interest: {
      blocks: [{ x: RIGHT_LABEL_X, top: 785, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Interest', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    rnd: {
      blocks: [{ x: RIGHT_LABEL_X, top: 935, anchor: 'middle', lineGap: 10, lines: [
        { text: 'R&D', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    sga: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1128, anchor: 'middle', lineGap: 10, lines: [
        { text: 'SG&A', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: '5% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
  };

  const zhLabels = {
    memory: { blocks: [
      { x: 384, top: 421, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +11%', size: 29, weight: 400, color: NOTE }] },
      { x: 313, top: 535, anchor: 'end', lines: [{ text: '存储', size: 40, weight: 800 }] },
    ] },
    foundry: { blocks: [
      { x: 380, top: 644, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +38%', size: 29, weight: 400, color: NOTE }] },
      { x: 304, top: 776, anchor: 'end', lines: [{ text: '代工', size: 40, weight: 800 }] },
    ] },
    logic: { blocks: [
      { x: 380, top: 895, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (4%)', size: 29, weight: 400, color: NOTE }] },
      { x: 280, top: 971, anchor: 'end', lines: [{ text: '逻辑', size: 40, weight: 800 }] },
    ] },
    systems: { blocks: [{ x: 753, top: 495, anchor: 'middle', lineGap: 10, lines: [{ text: '系统', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }] }] },
    customer_support: { blocks: [
      { x: 747, top: 959, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +25%', size: 29, weight: 400, color: NOTE }] },
      { x: 680, top: 1070, anchor: 'end', lineGap: 10, lines: [{ text: '客户', size: 40, weight: 800 }, { text: '支持', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 1122, top: 578, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +24%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1507, top: 447, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 50%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_goods_sold: { blocks: [{ x: 1499, top: 1202, anchor: 'middle', lineGap: 9, lines: [{ text: '销售', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1874, top: 330, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 35%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1874, top: 932, anchor: 'middle', lineGap: 9, lines: [{ text: '运营', size: 38, weight: 800 }, { text: '费用', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 379, anchor: 'middle', lineGap: 10, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 31%', size: 29, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 663, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    interest: { blocks: [{ x: RIGHT_LABEL_X, top: 785, anchor: 'middle', lineGap: 8, lines: [{ text: '利息支出', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 935, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 10%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: RIGHT_LABEL_X, top: 1128, anchor: 'middle', lineGap: 10, lines: [{ text: '销售、一般及管理', size: 30, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 5%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lam-research-q3-fy26',
    name: 'Lam Research · Q3 FY26',
    company: 'Lam Research',
    meta: {
      company: 'Lam Research',
      title: 'LAM Research Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lam-research-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2520,
      periodX: 2357,
      periodY: 286,
      periodNoteY: 327,
      logoWidth: 650,
      logoHeight: 250,
      logoY: 283,
      logoViewBox: '0 0 650 230',
      logoSvg: lamResearchLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: SOURCE, label: SOURCE_LABEL },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: HUB_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 65,
      nodes: {
        memory: { x: 343, y: 512, width: 72, height: 95 },
        foundry: { x: 343, y: 733, width: 72, height: 131 },
        logic: { x: 343, y: 986, width: 72, height: 18 },
        systems: { x: 717, y: 637, width: 72, height: 241 },
        customer_support: { x: 707, y: 1049, width: 72, height: 138 },
        revenue: { x: 1091, y: 719, width: 72, height: 377 },
        gross_profit: { x: 1469, y: 632, width: 72, height: 189 },
        cost_of_goods_sold: { x: 1466, y: 1002, width: 72, height: 190 },
        operating_profit: { x: 1838, y: 511, width: 72, height: 133 },
        operating_expenses: { x: 1838, y: 861, width: 72, height: 57 },
        net_profit: { x: 2213, y: 392, width: 72, height: 119 },
        tax: { x: 2213, y: 685, width: 72, height: 13 },
        interest: { x: 2213, y: 816, width: 72, height: 1 },
        rnd: { x: 2213, y: 960, width: 72, height: 41 },
        sga: { x: 2213, y: 1153, width: 72, height: 21 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'memory', col: 0, order: 0, type: 'source', label: 'Memory', value: 1.5, notes: ['+11% Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'foundry', col: 0, order: 1, type: 'source', label: 'Foundry', value: 2.0, valueText: '$2.0B', notes: ['+38% Y/Y'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: '#f3df9d' },
      { id: 'logic', col: 0, order: 2, type: 'source', label: 'Logic', value: 0.3, notes: ['(4%) Y/Y'], color: LOGIC, labelColor: LOGIC, linkTint: '#edc996' },
      { id: 'systems', col: 1, order: 0, type: 'source', label: 'Systems', value: 3.7, notes: ['+23% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'customer_support', col: 1, order: 1, type: 'source', label: ['Customer', 'Support'], value: 2.1, notes: ['+25% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 5.8, notes: ['+24% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.9, notes: ['50% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_goods_sold', col: 3, order: 1, type: 'cost', label: ['Cost of', 'goods sold'], value: 2.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.0, valueText: '$2.0B', notes: ['35% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.8, notes: ['31% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.036, valueText: '($36M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.6, notes: ['10% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, notes: ['5% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'memory', target: 'systems', value: 1.5, sourceWidth: 95, targetWidth: 93, sourceOrder: 0, targetOrder: 0 },
      { source: 'foundry', target: 'systems', value: 2.0, sourceWidth: 131, targetWidth: 130, sourceOrder: 0, targetOrder: 1 },
      { source: 'logic', target: 'systems', value: 0.3, sourceWidth: 18, targetWidth: 18, sourceOrder: 0, targetOrder: 2 },
      { source: 'systems', target: 'revenue', value: 3.7, sourceWidth: 241, targetWidth: 241, sourceOrder: 0, targetOrder: 0 },
      { source: 'customer_support', target: 'revenue', value: 2.1, sourceWidth: 138, targetWidth: 136, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2.9, sourceWidth: 189, targetWidth: 189, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_goods_sold', value: 2.9, sourceWidth: 188, targetWidth: 190, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.0, sourceWidth: 133, targetWidth: 133, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9, sourceWidth: 56, targetWidth: 57, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 119, targetWidth: 119, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 13, targetWidth: 13, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.036, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.6, sourceWidth: 38, targetWidth: 39, y1: 981.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 19, targetWidth: 21, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '泛林集团 · 2026 财年第三季度',
        meta: {
          title: '泛林集团 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1940,
        },
        nodes: {
          memory: { label: '存储', notes: ['同比 +11%'] },
          foundry: { label: '代工', notes: ['同比 +38%'] },
          logic: { label: '逻辑', notes: ['同比 (4%)'] },
          systems: { label: '系统', notes: ['同比 +23%'] },
          customer_support: { label: ['客户', '支持'], notes: ['同比 +25%'] },
          revenue: { label: '收入', notes: ['同比 +24%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +1 个百分点'] },
          cost_of_goods_sold: { label: ['销售', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息支出' },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
          sga: { label: '销售、一般及管理', notes: ['占收入 5%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* ====================================================================
 * Lam Research - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/lam-research-q1-fy26.png as a fixed
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
  // The Interest guide is a distinct, source-authored thin line: it is
  // darker than the profit ribbon but intentionally softer than the node.
  const INTEREST_GUIDE = '#5db45d';
  const RED = '#dd0000';
  const RED_LABEL = '#9f1900';
  const RED_LINK = '#e08383';
  const FOUNDARY = '#f8c625';
  const LOGIC = '#ec9940';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2449;

  const lamResearchLogo = `
    <g fill="#000000">
      <path d="M0 208 112 0l112 208H0Z"/>
      <path d="m56 104 117 104h-31L42 119l85 89H97L29 138l57 70H57L14 161l29 47H0l31-58Z" fill="#f2f2f2"/>
      <text x="245" y="141" font-family="Georgia,Times New Roman,serif" font-size="165" letter-spacing="-14">Lam</text>
      <text x="253" y="205" font-family="Georgia,Times New Roman,serif" font-size="56" letter-spacing="4">RESEARCH</text>
      <text x="552" y="79" font-family="Arial,sans-serif" font-size="31">®</text>
    </g>`;

  const interestGuideEn = `
    <g class="sankey-interactive-annotation"
      data-node="interest"
      data-link-numerator="interest"
      data-link-denominator="net_profit"
      data-link-anchor-x="2189"
      data-link-anchor-y="602">
      <path d="M2100 622H2171C2194 622 2188 562 2213 562" fill="none" stroke="${INTEREST_GUIDE}" stroke-width="2"/>
      <text x="2143" y="667" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">Interest</text>
      <text x="2143" y="707" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$30M</text>
    </g>`;

  const interestGuideZh = `
    <g class="sankey-interactive-annotation"
      data-node="interest"
      data-link-numerator="interest"
      data-link-denominator="net_profit"
      data-link-anchor-x="2189"
      data-link-anchor-y="602">
      <path d="M2100 622H2171C2194 622 2188 562 2213 562" fill="none" stroke="${INTEREST_GUIDE}" stroke-width="2"/>
      <text x="2143" y="667" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">利息</text>
      <text x="2143" y="707" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$30M</text>
    </g>`;

  const enLabels = {
    memory: {
      blocks: [
        { x: 380, top: 422, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+44% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 304, top: 526, anchor: 'end', lines: [{ text: 'Memory', size: 40, weight: 800 }] },
      ],
    },
    foundry: {
      blocks: [
        { x: 380, top: 630, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+117% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 304, top: 765, anchor: 'end', lines: [{ text: 'Foundry', size: 40, weight: 800 }] },
      ],
    },
    logic: {
      blocks: [
        { x: 380, top: 895, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(63%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 280, top: 967, anchor: 'end', lines: [{ text: 'Logic', size: 40, weight: 800 }] },
      ],
    },
    systems: {
      blocks: [{ x: 753, top: 509, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Systems', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+48% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    customer_support: {
      blocks: [
        { x: 753, top: 948, anchor: 'middle', lineGap: 10, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+0% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 697, top: 1043, anchor: 'end', lineGap: 10, lines: [
          { text: 'Customer', size: 40, weight: 800 },
          { text: 'Support', size: 40, weight: 800 },
        ] },
      ],
    },
    revenue: {
      blocks: [{ x: 1127, top: 610, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+28% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1510, top: 470, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Gross profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '50% margin', size: 29, weight: 400, color: NOTE },
        { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_goods_sold: {
      blocks: [{ x: 1510, top: 1164, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Cost of', size: 38, weight: 800 },
        { text: 'goods sold', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1863, top: 387, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Operating profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '34% margin', size: 29, weight: 400, color: NOTE },
        { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1863, top: 937, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Operating', size: 38, weight: 800 },
        { text: 'Expenses', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
      ] }],
    },
    // The source's Interest text belongs to the semantic guide annotation.
    // An empty layout entry suppresses the renderer's automatic node label.
    interest: { blocks: [] },
    net_profit: {
      blocks: [{ x: RIGHT_LABEL_X, top: 449, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Net profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '29% margin', size: 29, weight: 400, color: NOTE },
        { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_LABEL_X, top: 738, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Tax', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    rnd: {
      blocks: [{ x: RIGHT_LABEL_X, top: 965, anchor: 'middle', lineGap: 10, lines: [
        { text: 'R&D', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    sga: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1155, anchor: 'middle', lineGap: 10, lines: [
        { text: 'SG&A', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: '5% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
  };

  const zhLabels = {
    memory: { blocks: [
      { x: 380, top: 422, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +44%', size: 29, weight: 400, color: NOTE }] },
      { x: 304, top: 526, anchor: 'end', lines: [{ text: '存储', size: 40, weight: 800 }] },
    ] },
    foundry: { blocks: [
      { x: 380, top: 630, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +117%', size: 29, weight: 400, color: NOTE }] },
      { x: 304, top: 765, anchor: 'end', lines: [{ text: '代工', size: 40, weight: 800 }] },
    ] },
    logic: { blocks: [
      { x: 380, top: 895, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (63%)', size: 29, weight: 400, color: NOTE }] },
      { x: 280, top: 967, anchor: 'end', lines: [{ text: '逻辑', size: 40, weight: 800 }] },
    ] },
    systems: { blocks: [{ x: 753, top: 509, anchor: 'middle', lineGap: 10, lines: [{ text: '系统', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +48%', size: 29, weight: 400, color: NOTE }] }] },
    customer_support: { blocks: [
      { x: 753, top: 948, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +0%', size: 29, weight: 400, color: NOTE }] },
      { x: 697, top: 1043, anchor: 'end', lineGap: 10, lines: [{ text: '客户', size: 40, weight: 800 }, { text: '支持', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 1127, top: 610, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +28%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1510, top: 470, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 50%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_goods_sold: { blocks: [{ x: 1510, top: 1164, anchor: 'middle', lineGap: 9, lines: [{ text: '销售', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1863, top: 387, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 34%', size: 29, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1863, top: 937, anchor: 'middle', lineGap: 9, lines: [{ text: '运营', size: 38, weight: 800 }, { text: '费用', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    interest: { blocks: [] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 449, anchor: 'middle', lineGap: 10, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 29%', size: 29, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 738, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 965, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 11%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: RIGHT_LABEL_X, top: 1155, anchor: 'middle', lineGap: 10, lines: [{ text: '销售、一般及管理', size: 30, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 5%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lam-research-q1-fy26',
    name: 'Lam Research · Q1 FY26',
    company: 'Lam Research',
    meta: {
      company: 'Lam Research',
      title: 'LAM Research Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lam-research-q1-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: interestGuideEn,
    layout: {
      scale: 62,
      nodes: {
        memory: { x: 343, y: 513, width: 72, height: 76 },
        foundry: { x: 343, y: 722, width: 72, height: 134 },
        logic: { x: 343, y: 984, width: 72, height: 16 },
        systems: { x: 717, y: 650, width: 72, height: 222 },
        customer_support: { x: 717, y: 1038, width: 72, height: 109 },
        revenue: { x: 1091, y: 751, width: 72, height: 337 },
        gross_profit: { x: 1474, y: 649, width: 72, height: 169 },
        cost_of_goods_sold: { x: 1474, y: 988, width: 72, height: 164 },
        operating_profit: { x: 1827, y: 567, width: 72, height: 113 },
        operating_expenses: { x: 1827, y: 868, width: 72, height: 55 },
        interest: { x: 2078, y: 621, width: 1, height: 1 },
        net_profit: { x: 2213, y: 464, width: 72, height: 98 },
        tax: { x: 2213, y: 761, width: 72, height: 19 },
        rnd: { x: 2213, y: 984, width: 72, height: 38 },
        sga: { x: 2213, y: 1174, width: 72, height: 20 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'memory', col: 0, order: 0, type: 'source', label: 'Memory', value: 1.2, notes: ['+44% Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'foundry', col: 0, order: 1, type: 'source', label: 'Foundry', value: 2.1, notes: ['+117% Y/Y'], color: FOUNDARY, labelColor: FOUNDARY, linkTint: '#f3df9d' },
      { id: 'logic', col: 0, order: 2, type: 'source', label: 'Logic', value: 0.2, notes: ['(63%) Y/Y'], color: LOGIC, labelColor: LOGIC, linkTint: '#edc996' },
      { id: 'systems', col: 1, order: 0, type: 'source', label: 'Systems', value: 3.5, notes: ['+48% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'customer_support', col: 1, order: 1, type: 'source', label: ['Customer', 'Support'], value: 1.8, notes: ['+0% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 5.3, notes: ['+28% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.7, notes: ['50% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_goods_sold', col: 3, order: 1, type: 'cost', label: ['Cost of', 'goods sold'], value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['34% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.03, valueText: '$30M', color: BG, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['29% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 0.6, notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 0.3, notes: ['5% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'memory', target: 'systems', value: 1.2, sourceWidth: 76, targetWidth: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'foundry', target: 'systems', value: 2.1, sourceWidth: 134, targetWidth: 133, sourceOrder: 0, targetOrder: 1 },
      { source: 'logic', target: 'systems', value: 0.2, sourceWidth: 16, targetWidth: 14, sourceOrder: 0, targetOrder: 2 },
      { source: 'systems', target: 'revenue', value: 3.5, sourceWidth: 222, targetWidth: 222, sourceOrder: 0, targetOrder: 0 },
      { source: 'customer_support', target: 'revenue', value: 1.8, sourceWidth: 109, targetWidth: 109, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2.7, sourceWidth: 169, targetWidth: 167, y1: 734.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_goods_sold', value: 2.6, sourceWidth: 164, targetWidth: 164, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, sourceWidth: 113, targetWidth: 113, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9, sourceWidth: 56, targetWidth: 55, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 94, targetWidth: 98, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 19, targetWidth: 19, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 0.03, interactionOnly: true, showTooltip: false },
      { source: 'operating_expenses', target: 'rnd', value: 0.6, sourceWidth: 35, targetWidth: 38, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 20, targetWidth: 20, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        annotationsSvg: interestGuideZh,
        name: '泛林集团 · 2026 财年第一季度',
        meta: {
          title: '泛林集团 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1940,
        },
        nodes: {
          memory: { label: '存储', notes: ['同比 +44%'] },
          foundry: { label: '代工', notes: ['同比 +117%'] },
          logic: { label: '逻辑', notes: ['同比 (63%)'] },
          systems: { label: '系统', notes: ['同比 +48%'] },
          customer_support: { label: ['客户', '支持'], notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 +28%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +2 个百分点'] },
          cost_of_goods_sold: { label: ['销售', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 +4 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          sga: { label: '销售、一般及管理', notes: ['占收入 5%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

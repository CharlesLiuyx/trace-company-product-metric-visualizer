/* ====================================================================
 * Circle - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/circle-q1-fy26.png as a fixed
 * d3-sankey layout with a pure-SVG Circle brand reconstruction.
 * The supplied artwork has a stale "$133M" net-profit label; valueText
 * preserves that source pixel text while node.value remains the reported
 * $55M used by the financial SSOT and hover semantics.
 * ==================================================================== */
(function () {
  const NAVY = '#3c3752';
  const GRAY_LINK = '#a09daa';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2441;

  const circleLogo = `
    <g>
      <circle cx="95" cy="84" r="70" fill="none" stroke="#6ee2d0" stroke-width="20" stroke-dasharray="208 232" stroke-dashoffset="17"/>
      <circle cx="95" cy="84" r="51" fill="none" stroke="#57b7f4" stroke-width="19" stroke-dasharray="150 170" stroke-dashoffset="-28"/>
      <circle cx="95" cy="84" r="31" fill="none" stroke="#9786ee" stroke-width="19" stroke-dasharray="91 105" stroke-dashoffset="-49"/>
      <circle cx="95" cy="84" r="11" fill="#ffffff"/>
      <text x="210" y="126" font-family="Montserrat,Arial,sans-serif" font-size="128" font-weight="600" letter-spacing="2" fill="${NAVY}">CIRCLE</text>
    </g>`;

  const enLabels = {
    reserve_income: {
      blocks: [
        { x: 374, top: 397, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 270, top: 627, anchor: 'end', lineGap: 8, lines: [
          { text: 'Reserve', size: 40, weight: 800 },
          { text: 'income', size: 40, weight: 800 },
        ] },
      ],
    },
    other_revenue: {
      blocks: [
        { x: 374, top: 984, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+101% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 270, top: 1043, anchor: 'end', lineGap: 8, lines: [
          { text: 'Other', size: 40, weight: 800 },
          { text: 'revenue', size: 40, weight: 800 },
        ] },
      ],
    },
    revenue: {
      blocks: [{ x: 998, top: 464, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1620, top: 318, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Operating profit', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '3% margin', size: 29, weight: 400, color: NOTE },
        { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    distribution_transaction_costs: {
      blocks: [{ x: 1673, top: 802, anchor: 'start', lineGap: 8, lines: [
        { text: 'Distribution and', size: 39, weight: 800 },
        { text: 'transaction costs', size: 39, weight: 800 },
        { text: '$value', size: 36, weight: 400 },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1621, top: 1230, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating', size: 39, weight: 800 },
        { text: 'expenses', size: 39, weight: 800 },
        { text: '$value', size: 36, weight: 400 },
      ] }],
    },
    other_income: {
      blocks: [{ x: 2112, top: 500, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Other', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_LABEL_X, top: 361, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Net profit', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '8% margin', size: 29, weight: 400, color: NOTE },
        { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_LABEL_X, top: 615, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Tax', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    compensation: {
      blocks: [{ x: RIGHT_LABEL_X, top: 829, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Compensation', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    general_admin: {
      blocks: [{ x: RIGHT_LABEL_X, top: 962, anchor: 'middle', lineGap: 8, lines: [
        { text: 'General & admin', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    depreciation_amortization: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1063, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Depreciation &', size: 34, weight: 800 },
        { text: 'amortization', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    it_infrastructure: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1195, anchor: 'middle', lineGap: 8, lines: [
        { text: 'IT Infrastructure', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    marketing_other: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1306, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Marketing & other', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
  };

  const zhLabels = {
    reserve_income: {
      blocks: [
        { x: 374, top: 397, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 270, top: 652, anchor: 'end', lines: [{ text: '储备金收益', size: 40, weight: 800 }] },
      ],
    },
    other_revenue: {
      blocks: [
        { x: 374, top: 984, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 +101%', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 270, top: 1064, anchor: 'end', lines: [{ text: '其他收入', size: 40, weight: 800 }] },
      ],
    },
    revenue: { blocks: [{ x: 998, top: 464, anchor: 'middle', lineGap: 10, lines: [
      { text: '收入', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '同比 +20%', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_profit: { blocks: [{ x: 1620, top: 318, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '利润率 3%', size: 29, weight: 400, color: NOTE },
      { text: '同比（4 个百分点）', size: 29, weight: 400, color: NOTE },
    ] }] },
    distribution_transaction_costs: { blocks: [{ x: 1673, top: 802, anchor: 'start', lineGap: 8, lines: [
      { text: '分发与', size: 39, weight: 800 },
      { text: '交易成本', size: 39, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ] }] },
    operating_expenses: { blocks: [{ x: 1621, top: 1230, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 39, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ] }] },
    other_income: { blocks: [{ x: 2112, top: 500, anchor: 'middle', lineGap: 8, lines: [
      { text: '其他', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 361, anchor: 'middle', lineGap: 9, lines: [
      { text: '净利润', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 615, anchor: 'middle', lineGap: 8, lines: [
      { text: '税费', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    compensation: { blocks: [{ x: RIGHT_LABEL_X, top: 829, anchor: 'middle', lineGap: 8, lines: [
      { text: '薪酬', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    general_admin: { blocks: [{ x: RIGHT_LABEL_X, top: 962, anchor: 'middle', lineGap: 8, lines: [
      { text: '一般及行政费用', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    depreciation_amortization: { blocks: [{ x: RIGHT_LABEL_X, top: 1086, anchor: 'middle', lineGap: 7, lines: [
      { text: '折旧及摊销', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    it_infrastructure: { blocks: [{ x: RIGHT_LABEL_X, top: 1195, anchor: 'middle', lineGap: 8, lines: [
      { text: 'IT 基础设施', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    marketing_other: { blocks: [{ x: RIGHT_LABEL_X, top: 1306, anchor: 'middle', lineGap: 8, lines: [
      { text: '市场营销及其他', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'circle-q1-fy26',
    name: 'Circle · Q1 FY26',
    company: 'Circle',
    meta: {
      company: 'Circle',
      title: 'Circle Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/circle-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2070,
      periodX: 175,
      periodY: 1420,
      periodNoteY: 1460,
      logoWidth: 800,
      logoHeight: 170,
      logoY: 264,
      logoViewBox: '0 0 800 170',
      logoSvg: circleLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#f2f2f2',
      noteColor: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 0.543,
      nodes: {
        reserve_income: { x: 339, y: 487, width: 71, height: 354 },
        other_revenue: { x: 339, y: 1077, width: 71, height: 20 },
        revenue: { x: 961, y: 609, width: 72, height: 377 },
        operating_profit: { x: 1584, y: 500, width: 72, height: 23 },
        distribution_transaction_costs: { x: 1584, y: 743, width: 72, height: 220 },
        operating_expenses: { x: 1584, y: 1076, width: 72, height: 130 },
        other_income: { x: 2077, y: 478, width: 71, height: 5 },
        net_profit: { x: 2207, y: 398, width: 71, height: 27 },
        tax: { x: 2207, y: 650, width: 71, height: 1 },
        compensation: { x: 2207, y: 824, width: 71, height: 73 },
        general_admin: { x: 2207, y: 983, width: 71, height: 29 },
        depreciation_amortization: { x: 2207, y: 1111, width: 71, height: 12 },
        it_infrastructure: { x: 2207, y: 1226, width: 71, height: 5 },
        marketing_other: { x: 2207, y: 1333, width: 71, height: 2 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'reserve_income', col: 0, order: 0, type: 'source', label: ['Reserve', 'income'], value: 652, notes: ['+17% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: ['Other', 'revenue'], value: 42, notes: ['+101% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 694, notes: ['+20% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 45, notes: ['3% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'distribution_transaction_costs', col: 2, order: 1, type: 'cost', label: ['Distribution and', 'transaction costs'], value: 407, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 2, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 242, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 12, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 55, valueText: '$133M', notes: ['8% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation', col: 4, order: 2, type: 'cost', label: 'Compensation', value: 138, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 4, order: 3, type: 'cost', label: 'General & admin', value: 57, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 4, type: 'cost', label: ['Depreciation &', 'amortization'], value: 27, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'it_infrastructure', col: 4, order: 5, type: 'cost', label: 'IT Infrastructure', value: 13, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_other', col: 4, order: 6, type: 'cost', label: 'Marketing & other', value: 7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'reserve_income', target: 'revenue', value: 652, sourceWidth: 354, targetWidth: 357, sourceOrder: 0, targetOrder: 0, y0: 664, y1: 787.5, linkTint: GRAY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 42, sourceWidth: 20, targetWidth: 20, sourceOrder: 0, targetOrder: 1, y0: 1087, y1: 976, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'operating_profit', value: 45, width: 23, sourceOrder: 0, targetOrder: 0, y0: 620.5, y1: 511.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'distribution_transaction_costs', value: 407, width: 220, sourceOrder: 1, targetOrder: 0, y0: 742.5, y1: 853 },
      { source: 'revenue', target: 'operating_expenses', value: 242, sourceWidth: 134, targetWidth: 130, sourceOrder: 2, targetOrder: 0, y0: 919, y1: 1141 },
      { source: 'operating_profit', target: 'net_profit', value: 45, sourceWidth: 23, targetWidth: 22, sourceOrder: 0, targetOrder: 0, y0: 511.5, y1: 409 },
      { source: 'operating_profit', target: 'tax', value: 1, sourceWidth: 1, targetWidth: 1, sourceOrder: 1, targetOrder: 0, y0: 522.5, y1: 650.5, curve: { c1x: 1760, c1y: 522.5, c2x: 2110, c2y: 650.5 } },
      { source: 'other_income', target: 'net_profit', value: 12, sourceWidth: 5, targetWidth: 5, sourceOrder: 0, targetOrder: 1, y0: 480.5, y1: 422.5, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'compensation', value: 138, sourceWidth: 74, targetWidth: 73, sourceOrder: 0, targetOrder: 0, y0: 1113, y1: 860.5 },
      { source: 'operating_expenses', target: 'general_admin', value: 57, sourceWidth: 31, targetWidth: 29, sourceOrder: 1, targetOrder: 0, y0: 1165.5, y1: 997.5 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 27, sourceWidth: 14, targetWidth: 12, sourceOrder: 2, targetOrder: 0, y0: 1188, y1: 1117 },
      { source: 'operating_expenses', target: 'it_infrastructure', value: 13, sourceWidth: 7, targetWidth: 5, sourceOrder: 3, targetOrder: 0, y0: 1198.5, y1: 1228.5 },
      { source: 'operating_expenses', target: 'marketing_other', value: 7, sourceWidth: 4, targetWidth: 2, sourceOrder: 4, targetOrder: 0, y0: 1204, y1: 1334 },
    ],
    i18n: {
      zh: {
        name: 'Circle · 2026 财年第一季度',
        meta: {
          title: 'Circle 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1800,
        },
        nodes: {
          reserve_income: { label: '储备金收益', notes: ['同比 +17%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +101%'] },
          revenue: { label: '收入', notes: ['同比 +20%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比（4 个百分点）'] },
          distribution_transaction_costs: { label: '分发与交易成本' },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          compensation: { label: '薪酬' },
          general_admin: { label: '一般及行政费用' },
          depreciation_amortization: { label: '折旧及摊销' },
          it_infrastructure: { label: 'IT 基础设施' },
          marketing_other: { label: '市场营销及其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

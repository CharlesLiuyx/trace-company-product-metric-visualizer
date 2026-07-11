/* ====================================================================
 * Circle - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/circle-q4-fy25.png as a fixed
 * d3-sankey layout with a pure-SVG Circle brand reconstruction.
 * ==================================================================== */
(function () {
  const NAVY = '#3e395a';
  const GRAY_LINK = '#a2a1ae';
  const GREEN = '#25a326';
  const GREEN_LABEL = '#008e50';
  const GREEN_LINK = '#a0d59e';
  const RED = '#d90000';
  const RED_LABEL = '#a41703';
  const RED_LINK = '#df8184';
  const NOTE = '#6a6a6a';
  const TITLE = '#15547c';
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
        { x: 374, top: 423, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+69% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 270, top: 632, anchor: 'end', lineGap: 8, lines: [
          { text: 'Reserve', size: 40, weight: 800 },
          { text: 'income', size: 40, weight: 800 },
        ] },
      ],
    },
    other_revenue: {
      blocks: [
        { x: 374, top: 980, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+1,435% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 270, top: 1033, anchor: 'end', lineGap: 8, lines: [
          { text: 'Other', size: 40, weight: 800 },
          { text: 'revenue', size: 40, weight: 800 },
        ] },
      ],
    },
    revenue: {
      blocks: [{ x: 998, top: 509, anchor: 'middle', lineGap: 10, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+77% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1621, top: 337, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Operating profit', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '3% margin', size: 29, weight: 400, color: NOTE },
        { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    distribution_transaction_costs: {
      blocks: [{ x: 1673, top: 808, anchor: 'start', lineGap: 8, lines: [
        { text: 'Distribution and', size: 39, weight: 800 },
        { text: 'transaction costs', size: 39, weight: 800 },
        { text: '$value', size: 36, weight: 400 },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1621, top: 1200, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating', size: 39, weight: 800 },
        { text: 'expenses', size: 39, weight: 800 },
        { text: '$value', size: 36, weight: 400 },
      ] }],
    },
    other_income: {
      blocks: [{ x: 2090, top: 531, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Other', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_LABEL_X, top: 367, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Net profit', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '8% margin', size: 29, weight: 400, color: NOTE },
        { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_LABEL_X, top: 631, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Tax', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    compensation: {
      blocks: [{ x: RIGHT_LABEL_X, top: 774, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Compensation', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    general_admin: {
      blocks: [{ x: RIGHT_LABEL_X, top: 903, anchor: 'middle', lineGap: 8, lines: [
        { text: 'General & admin', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    depreciation_amortization: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1006, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Depreciation &', size: 34, weight: 800 },
        { text: 'amortization', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    it_infrastructure: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1159, anchor: 'middle', lineGap: 8, lines: [
        { text: 'IT Infrastructure', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
    marketing_other: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1280, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Marketing & other', size: 34, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ] }],
    },
  };

  const zhLabels = {
    reserve_income: {
      blocks: [
        { x: 374, top: 423, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 +69%', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 270, top: 657, anchor: 'end', lines: [{ text: '储备金收益', size: 40, weight: 800 }] },
      ],
    },
    other_revenue: {
      blocks: [
        { x: 374, top: 980, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '同比 +1,435%', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 270, top: 1054, anchor: 'end', lines: [{ text: '其他收入', size: 40, weight: 800 }] },
      ],
    },
    revenue: { blocks: [{ x: 998, top: 509, anchor: 'middle', lineGap: 10, lines: [
      { text: '收入', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '同比 +77%', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_profit: { blocks: [{ x: 1621, top: 337, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '利润率 3%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    distribution_transaction_costs: { blocks: [{ x: 1673, top: 808, anchor: 'start', lineGap: 8, lines: [
      { text: '分发与', size: 39, weight: 800 },
      { text: '交易成本', size: 39, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ] }] },
    operating_expenses: { blocks: [{ x: 1621, top: 1200, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 39, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ] }] },
    other_income: { blocks: [{ x: 2090, top: 531, anchor: 'middle', lineGap: 8, lines: [
      { text: '其他', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 367, anchor: 'middle', lineGap: 9, lines: [
      { text: '净利润', size: 40, weight: 800 },
      { text: '$value', size: 40, weight: 400 },
      { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
      { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE },
    ] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 631, anchor: 'middle', lineGap: 8, lines: [
      { text: '税费', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    compensation: { blocks: [{ x: RIGHT_LABEL_X, top: 774, anchor: 'middle', lineGap: 8, lines: [
      { text: '薪酬', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    general_admin: { blocks: [{ x: RIGHT_LABEL_X, top: 903, anchor: 'middle', lineGap: 8, lines: [
      { text: '一般及行政费用', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    depreciation_amortization: { blocks: [{ x: RIGHT_LABEL_X, top: 1029, anchor: 'middle', lineGap: 7, lines: [
      { text: '折旧及摊销', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    it_infrastructure: { blocks: [{ x: RIGHT_LABEL_X, top: 1159, anchor: 'middle', lineGap: 8, lines: [
      { text: 'IT 基础设施', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    marketing_other: { blocks: [{ x: RIGHT_LABEL_X, top: 1280, anchor: 'middle', lineGap: 8, lines: [
      { text: '市场营销及其他', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'circle-q4-fy25',
    name: 'Circle · Q4 FY25',
    company: 'Circle',
    meta: {
      company: 'Circle',
      title: 'Circle Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/circle-q4-fy25.png', width: 2667, height: 1500 },
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
      scale: 0.434,
      nodes: {
        reserve_income: { x: 337, y: 523, width: 73, height: 316 },
        other_revenue: { x: 337, y: 1077, width: 73, height: 17 },
        revenue: { x: 961, y: 658, width: 73, height: 334 },
        operating_profit: { x: 1585, y: 528, width: 73, height: 24 },
        distribution_transaction_costs: { x: 1585, y: 784, width: 73, height: 200 },
        operating_expenses: { x: 1585, y: 1078, width: 73, height: 110 },
        other_income: { x: 2054, y: 482, width: 73, height: 37 },
        net_profit: { x: 2206, y: 404, width: 73, height: 58 },
        tax: { x: 2206, y: 675, width: 73, height: 3 },
        compensation: { x: 2206, y: 785, width: 73, height: 59 },
        general_admin: { x: 2206, y: 925, width: 73, height: 31 },
        depreciation_amortization: { x: 2206, y: 1064, width: 73, height: 11 },
        it_infrastructure: { x: 2206, y: 1195, width: 73, height: 5 },
        marketing_other: { x: 2206, y: 1317, width: 73, height: 4 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'reserve_income', col: 0, order: 0, type: 'source', label: ['Reserve', 'income'], value: 733, notes: ['+69% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: ['Other', 'revenue'], value: 37, notes: ['+1,435% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 770, notes: ['+77% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: GRAY_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 55, notes: ['3% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'distribution_transaction_costs', col: 2, order: 1, type: 'cost', label: ['Distribution and', 'transaction costs'], value: 461, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 2, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 254, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 85, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 133, notes: ['8% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation', col: 4, order: 2, type: 'cost', label: 'Compensation', value: 137, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 4, order: 3, type: 'cost', label: 'General & admin', value: 71, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 4, type: 'cost', label: ['Depreciation &', 'amortization'], value: 26, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'it_infrastructure', col: 4, order: 5, type: 'cost', label: 'IT Infrastructure', value: 11, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_other', col: 4, order: 6, type: 'cost', label: 'Marketing & other', value: 10, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'reserve_income', target: 'revenue', value: 733, sourceWidth: 316, targetWidth: 317, sourceOrder: 0, targetOrder: 0, y0: 681, y1: 816.5, linkTint: GRAY_LINK },
      { source: 'other_revenue', target: 'revenue', value: 37, sourceWidth: 17, targetWidth: 17, sourceOrder: 0, targetOrder: 1, y0: 1085.5, y1: 983.5, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'operating_profit', value: 55, width: 24, sourceOrder: 0, targetOrder: 0, y0: 670, y1: 540, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'distribution_transaction_costs', value: 461, width: 200, sourceOrder: 1, targetOrder: 0, y0: 782, y1: 884 },
      { source: 'revenue', target: 'operating_expenses', value: 254, width: 110, sourceOrder: 2, targetOrder: 0, y0: 937, y1: 1133 },
      { source: 'operating_profit', target: 'net_profit', value: 55, sourceWidth: 24, targetWidth: 22, sourceOrder: 0, targetOrder: 0, y0: 540, y1: 415, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 7, sourceWidth: 1, targetWidth: 3, sourceOrder: 1, targetOrder: 0, y0: 551.5, y1: 676.5, curve: { c1x: 1760, c1y: 551.5, c2x: 2110, c2y: 676.5 } },
      { source: 'other_income', target: 'net_profit', value: 85, sourceWidth: 37, targetWidth: 36, sourceOrder: 0, targetOrder: 1, y0: 500.5, y1: 444, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'compensation', value: 137, width: 59, sourceOrder: 0, targetOrder: 0, y0: 1107.5, y1: 814.5 },
      { source: 'operating_expenses', target: 'general_admin', value: 71, width: 31, sourceOrder: 1, targetOrder: 0, y0: 1152.5, y1: 940.5 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 26, width: 11, sourceOrder: 2, targetOrder: 0, y0: 1173.5, y1: 1069.5 },
      { source: 'operating_expenses', target: 'it_infrastructure', value: 11, width: 5, sourceOrder: 3, targetOrder: 0, y0: 1181.5, y1: 1197.5 },
      { source: 'operating_expenses', target: 'marketing_other', value: 10, width: 4, sourceOrder: 4, targetOrder: 0, y0: 1186, y1: 1319 },
    ],
    i18n: {
      zh: {
        name: 'Circle · 2025 财年第四季度',
        meta: {
          title: 'Circle 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1800,
        },
        nodes: {
          reserve_income: { label: '储备金收益', notes: ['同比 +69%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +1,435%'] },
          revenue: { label: '收入', notes: ['同比 +77%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 +3 个百分点'] },
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

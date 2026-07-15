/* ====================================================================
 * KLA - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/kla-q2-fy26.png as a fixed
 * d3-sankey layout with a pure SVG KLA+ lockup. Six product-category
 * revenue segments feed the purple Revenue hub, then the standard
 * gross / operating / net waterfall.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const HUB = '#3f0080';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e2a5a5';
  const BG = '#f2f2f2';
  // revenue product-category source hues + their pastel ribbon tints
  const WAFER = '#41007f', WAFER_LINK = '#a285bd';
  const PATTERNING = '#aa1dd5', PATTERNING_LINK = '#d292e4';
  const SPECIALTY = '#00a7e1', SPECIALTY_LINK = '#85cfe9';
  const PCB = '#50dd3f', PCB_LINK = '#a9e8a1';
  const SERVICES = '#ff6400', SERVICES_LINK = '#f7b285';
  const OTHER_SRC = '#8f8f96', OTHER_SRC_LABEL = '#5a5a64', OTHER_SRC_LINK = '#b7b7bb';
  const RIGHT_LABEL_X = 2521;

  const klaLogo = `
    <g transform="translate(38,0)">
    <g fill="none" stroke="${WAFER}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10,4 L10,72 Q10,87 25,86"/>
      <path d="M10,46 L82,4"/>
      <path d="M10,47 L80,86"/>
      <path d="M120,4 L120,86"/>
      <path d="M120,86 L183,86"/>
      <path d="M204,86 L249,5"/>
      <path d="M249,5 L295,86"/>
    </g>
    <rect x="322" y="2" width="88" height="88" rx="6" fill="${SPECIALTY}"/>
    <g stroke="#ffffff" stroke-width="11" stroke-linecap="round">
      <path d="M340,46 L392,46"/>
      <path d="M366,20 L366,72"/>
    </g>
    </g>`;

  const enLabels = {
    wafer_inspection: {
      blocks: [
        { x: 499, top: 338, anchor: 'middle', lineGap: 13, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 448, top: 457, anchor: 'end', lineGap: 13, lines: [
          { text: 'Wafer', size: 40, weight: 800 },
          { text: 'Inspection', size: 40, weight: 800 },
        ] },
      ],
    },
    patterning: {
      blocks: [
        { x: 498, top: 598, anchor: 'middle', lineGap: 13, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 448, top: 700, anchor: 'end', lines: [{ text: 'Patterning', size: 40, weight: 800 }] },
      ],
    },
    specialty_semi_process: {
      blocks: [
        { x: 500, top: 780, anchor: 'middle', lineGap: 13, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(15%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 448, top: 811, anchor: 'end', lineGap: 13, lines: [
          { text: 'Specialty', size: 40, weight: 800 },
          { text: 'Semi Process', size: 40, weight: 800 },
        ] },
      ],
    },
    pcb_component_inspection: {
      blocks: [
        { x: 498, top: 910, anchor: 'middle', lineGap: 13, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(14%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 448, top: 962, anchor: 'end', lineGap: 13, lines: [
          { text: 'PCB and Component', size: 40, weight: 800 },
          { text: 'Inspection', size: 40, weight: 800 },
        ] },
      ],
    },
    services: {
      blocks: [
        { x: 498, top: 1039, anchor: 'middle', lineGap: 13, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 448, top: 1142, anchor: 'end', lines: [{ text: 'Services', size: 40, weight: 800 }] },
      ],
    },
    other_revenue: {
      blocks: [
        { x: 498, top: 1225, anchor: 'middle', lineGap: 13, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(50%) Y/Y', size: 29, weight: 400, color: NOTE },
        ] },
        { x: 448, top: 1304, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [{ x: 966, top: 518, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1433, top: 366, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Gross profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '61% margin', size: 29, weight: 400, color: NOTE },
        { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_revenue: {
      blocks: [{ x: 1433, top: 1084, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Cost of', size: 38, weight: 800 },
        { text: 'revenue', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1899, top: 245, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '41% margin', size: 29, weight: 400, color: NOTE },
        { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1899, top: 858, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Operating', size: 38, weight: 800 },
        { text: 'expenses', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
      ] }],
    },
    net_profit: {
      blocks: [{ x: RIGHT_LABEL_X, top: 287, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Net profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '35% margin', size: 29, weight: 400, color: NOTE },
        { text: '+8pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    tax: {
      blocks: [{ x: RIGHT_LABEL_X, top: 614, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Tax', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    other_ded: {
      blocks: [{ x: RIGHT_LABEL_X, top: 732, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Other', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    rnd: {
      blocks: [{ x: RIGHT_LABEL_X, top: 923, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Research &', size: 31, weight: 800 },
        { text: 'Development', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: '12% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
    sga: {
      blocks: [{ x: RIGHT_LABEL_X, top: 1093, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Sales, General', size: 31, weight: 800 },
        { text: '& Admin', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
        { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
        { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
      ] }],
    },
  };

  const zhLabels = {
    wafer_inspection: { blocks: [
      { x: 499, top: 338, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +1%', size: 29, weight: 400, color: NOTE }] },
      { x: 448, top: 457, anchor: 'end', lineGap: 13, lines: [{ text: '晶圆', size: 40, weight: 800 }, { text: '检测', size: 40, weight: 800 }] },
    ] },
    patterning: { blocks: [
      { x: 498, top: 598, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +31%', size: 29, weight: 400, color: NOTE }] },
      { x: 448, top: 700, anchor: 'end', lines: [{ text: '图形化', size: 40, weight: 800 }] },
    ] },
    specialty_semi_process: { blocks: [
      { x: 500, top: 780, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (15%)', size: 29, weight: 400, color: NOTE }] },
      { x: 448, top: 811, anchor: 'end', lineGap: 13, lines: [{ text: '特种半导体', size: 40, weight: 800 }, { text: '制程', size: 40, weight: 800 }] },
    ] },
    pcb_component_inspection: { blocks: [
      { x: 498, top: 910, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (14%)', size: 29, weight: 400, color: NOTE }] },
      { x: 448, top: 962, anchor: 'end', lineGap: 13, lines: [{ text: 'PCB 与', size: 40, weight: 800 }, { text: '元件检测', size: 40, weight: 800 }] },
    ] },
    services: { blocks: [
      { x: 498, top: 1039, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +18%', size: 29, weight: 400, color: NOTE }] },
      { x: 448, top: 1142, anchor: 'end', lines: [{ text: '服务', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 498, top: 1225, anchor: 'middle', lineGap: 13, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (50%)', size: 29, weight: 400, color: NOTE }] },
      { x: 448, top: 1304, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 966, top: 518, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +7%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1433, top: 366, anchor: 'middle', lineGap: 8, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 61%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1433, top: 1084, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1899, top: 245, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 41%', size: 29, weight: 400, color: NOTE }, { text: '同比 +9 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1899, top: 858, anchor: 'middle', lineGap: 9, lines: [{ text: '运营', size: 38, weight: 800 }, { text: '费用', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 287, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 35%', size: 29, weight: 400, color: NOTE }, { text: '同比 +8 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 614, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    other_ded: { blocks: [{ x: RIGHT_LABEL_X, top: 732, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 923, anchor: 'middle', lineGap: 8, lines: [{ text: '研究与', size: 31, weight: 800 }, { text: '开发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 12%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: RIGHT_LABEL_X, top: 1093, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般', size: 31, weight: 800 }, { text: '及管理', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 8%', size: 29, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'kla-q2-fy26',
    name: 'KLA · Q2 FY26',
    company: 'KLA',
    meta: {
      company: 'KLA',
      title: 'KLA Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/kla-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1336,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1950,
      periodX: 2500,
      periodY: 190,
      periodNoteY: 232,
      logoWidth: 412,
      logoHeight: 91,
      logoY: 323,
      logoViewBox: '0 0 412 91',
      logoSvg: klaLogo,
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
        source: { node: OTHER_SRC, label: OTHER_SRC_LABEL },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: OTHER_SRC_LINK, hub: '#999aa4', profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 89,
      nodes: {
        wafer_inspection: { x: 463, y: 439, width: 72, height: 140 },
        patterning: { x: 463, y: 699, width: 72, height: 62 },
        specialty_semi_process: { x: 463, y: 880, width: 72, height: 11 },
        pcb_component_inspection: { x: 463, y: 1010, width: 72, height: 7 },
        services: { x: 463, y: 1136, width: 72, height: 70 },
        other_revenue: { x: 463, y: 1324, width: 72, height: 5 },
        revenue: { x: 930, y: 669, width: 72, height: 295 },
        gross_profit: { x: 1397, y: 557, width: 72, height: 181 },
        cost_of_revenue: { x: 1397, y: 958, width: 72, height: 114 },
        operating_profit: { x: 1863, y: 436, width: 72, height: 122 },
        operating_expenses: { x: 1863, y: 784, width: 72, height: 60 },
        net_profit: { x: 2331, y: 316, width: 72, height: 102 },
        tax: { x: 2331, y: 647, width: 72, height: 16 },
        other_ded: { x: 2331, y: 770, width: 72, height: 3 },
        rnd: { x: 2331, y: 968, width: 72, height: 35 },
        sga: { x: 2331, y: 1195, width: 72, height: 24 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'wafer_inspection', col: 0, order: 0, type: 'source', label: ['Wafer', 'Inspection'], value: 1.6, notes: ['+1% Y/Y'], color: WAFER, labelColor: WAFER, linkTint: WAFER_LINK },
      { id: 'patterning', col: 0, order: 1, type: 'source', label: 'Patterning', value: 0.7, notes: ['+31% Y/Y'], color: PATTERNING, labelColor: PATTERNING, linkTint: PATTERNING_LINK },
      { id: 'specialty_semi_process', col: 0, order: 2, type: 'source', label: ['Specialty', 'Semi Process'], value: 0.1, notes: ['(15%) Y/Y'], color: SPECIALTY, labelColor: SPECIALTY, linkTint: SPECIALTY_LINK },
      { id: 'pcb_component_inspection', col: 0, order: 3, type: 'source', label: ['PCB and Component', 'Inspection'], value: 0.1, notes: ['(14%) Y/Y'], color: PCB, labelColor: PCB, linkTint: PCB_LINK },
      { id: 'services', col: 0, order: 4, type: 'source', label: 'Services', value: 0.8, notes: ['+18% Y/Y'], color: SERVICES, labelColor: SERVICES, linkTint: SERVICES_LINK },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 0.04, valueText: '$40M', notes: ['(50%) Y/Y'], color: OTHER_SRC, labelColor: OTHER_SRC_LABEL, linkTint: OTHER_SRC_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.3, notes: ['+7% Y/Y'], color: HUB, labelColor: HUB, linkTint: '#999aa4' },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.0, valueText: '$2.0B', notes: ['61% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, notes: ['41% margin', '+9pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['35% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_ded', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.032, valueText: '($32M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: ['Research &', 'Development'], value: 0.4, notes: ['12% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: ['Sales, General', '& Admin'], value: 0.3, notes: ['8% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'wafer_inspection', target: 'revenue', value: 1.6, sourceWidth: 140, targetWidth: 140, sourceOrder: 0, targetOrder: 0, linkTint: WAFER_LINK },
      { source: 'patterning', target: 'revenue', value: 0.7, sourceWidth: 62, targetWidth: 62, sourceOrder: 0, targetOrder: 1, linkTint: PATTERNING_LINK },
      { source: 'specialty_semi_process', target: 'revenue', value: 0.1, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 2, linkTint: SPECIALTY_LINK },
      { source: 'pcb_component_inspection', target: 'revenue', value: 0.1, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 3, linkTint: PCB_LINK },
      { source: 'services', target: 'revenue', value: 0.8, sourceWidth: 70, targetWidth: 70, sourceOrder: 0, targetOrder: 4, linkTint: SERVICES_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.04, sourceWidth: 5, targetWidth: 5, sourceOrder: 0, targetOrder: 5, linkTint: OTHER_SRC_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.0, sourceWidth: 180, targetWidth: 181, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.3, sourceWidth: 115, targetWidth: 114, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.4, sourceWidth: 121, targetWidth: 122, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 60, targetWidth: 60, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 102, targetWidth: 102, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 16, targetWidth: 16, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_ded', value: 0.032, sourceWidth: 3, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.4, sourceWidth: 35, targetWidth: 35, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 24, targetWidth: 24, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'KLA · 2026 财年第二季度',
        meta: {
          title: 'KLA 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1500,
        },
        nodes: {
          wafer_inspection: { label: ['晶圆', '检测'], notes: ['同比 +1%'] },
          patterning: { label: '图形化', notes: ['同比 +31%'] },
          specialty_semi_process: { label: ['特种半导体', '制程'], notes: ['同比 (15%)'] },
          pcb_component_inspection: { label: ['PCB 与', '元件检测'], notes: ['同比 (14%)'] },
          services: { label: '服务', notes: ['同比 +18%'] },
          other_revenue: { label: '其他', notes: ['同比 (50%)'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 +9 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 +8 个百分点'] },
          tax: { label: '税费' },
          other_ded: { label: '其他' },
          rnd: { label: ['研究与', '开发'], notes: ['占收入 12%', '同比 +0 个百分点'] },
          sga: { label: ['销售、一般', '及管理'], notes: ['占收入 8%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

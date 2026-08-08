/* ====================================================================
 * KLA - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/kla-q4-fy26.png as a fixed d3-sankey
 * layout with a pure SVG KLA lockup.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const PURPLE = '#41007f';
  const PURPLE_LINK = '#a285bd';
  const MAGENTA = '#aa1dd5';
  const MAGENTA_LINK = '#d292e4';
  const BLUE = '#00a7e1';
  const BLUE_LINK = '#85cfe9';
  const LIME = '#50dd3e';
  const LIME_LINK = '#a9e8a1';
  const ORANGE = '#ff6400';
  const ORANGE_LINK = '#f7b285';
  const GREY = '#5a5a64';
  const GREY_LINK = '#aeaeb2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  const klaLogo = `
    <g data-typography-role="brand">
      <text x="0" y="118" font-family="Montserrat,Arial,sans-serif" font-size="126"
        font-weight="500" letter-spacing="5" fill="#41007f">KLA</text>
      <rect x="336" y="20" width="92" height="92" fill="#00a7e1"/>
      <path d="M382 28v76M344 66h76" fill="none" stroke="#fff" stroke-width="9"/>
    </g>`;

  const otherExpenseGuide = (label) => `
    <g class="sankey-interactive-annotation"
      data-node="other_expense"
      data-link-numerator="other_expense"
      data-link-denominator="operating_profit"
      data-link-anchor-x="2077"
      data-link-anchor-y="536">
      <path d="M2220 501H2289C2318 501 2308 445 2330 445"
        fill="none" stroke="#5db45d" stroke-width="2"/>
      <text x="2260" y="544" text-anchor="middle" font-size="31" font-weight="800"
        fill="${GREEN_LABEL}">${label}</text>
      <text x="2260" y="586" text-anchor="middle" font-size="31" font-weight="400"
        fill="${GREEN_LABEL}">$5M</text>
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 9) => ({ x, top, anchor, lineGap, lines });

  const enLabels = {
    other_expense: { blocks: [] },
    wafer_inspection: { blocks: [
      block(497, 301, [line('$1.8B', 39), line('+1% Y/Y', 29, 400, NOTE)]),
      block(436, 443, [line('Wafer', 40, 800), line('Inspection', 40, 800)], 'end', 10),
    ] },
    patterning: { blocks: [
      block(497, 605, [line('$0.7B', 39), line('+61% Y/Y', 29, 400, NOTE)]),
      block(436, 709, [line('Patterning', 40, 800)], 'end'),
    ] },
    specialty_semi_process: { blocks: [
      block(497, 789, [line('$0.1B', 39), line('+11% Y/Y', 29, 400, NOTE)]),
      block(430, 840, [line('Specialty', 40, 800), line('Semi Process', 40, 800)], 'end', 10),
    ] },
    pcb_component_inspection: { blocks: [
      block(497, 910, [line('$0.2B', 39), line('+96% Y/Y', 29, 400, NOTE)]),
      block(426, 967, [line('PCB and Component', 40, 800), line('Inspection', 40, 800)], 'end', 10),
    ] },
    services: { blocks: [
      block(497, 1037, [line('$0.8B', 39), line('+17% Y/Y', 29, 400, NOTE)]),
      block(436, 1150, [line('Services', 40, 800)], 'end'),
    ] },
    other_revenue: { blocks: [
      block(497, 1235, [line('$24M', 39), line('(39%) Y/Y', 29, 400, NOTE)]),
      block(426, 1300, [line('Other', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(964, 496, [
      line('Revenue', 40, 800), line('$3.7B', 39), line('+15% Y/Y', 29, 400, NOTE),
    ])] },
    gross_profit: { blocks: [block(1434, 358, [
      line('Gross profit', 40, 800), line('$2.2B', 39), line('61% margin', 29, 400, NOTE),
      line('(1pp) Y/Y', 29, 400, NOTE),
    ])] },
    cost_of_revenue: { blocks: [block(1433, 1185, [
      line('Cost of', 38, 800), line('revenue', 38, 800), line('($1.4B)', 37),
    ], 'middle', 8)] },
    operating_profit: { blocks: [block(1901, 220, [
      line('Operating profit', 40, 800), line('$1.6B', 39), line('42% margin', 29, 400, NOTE),
      line('(0pp) Y/Y', 29, 400, NOTE),
    ])] },
    operating_expenses: { blocks: [block(1892, 925, [
      line('Operating', 38, 800), line('expenses', 38, 800), line('($0.7B)', 37),
    ], 'middle', 8)] },
    net_profit: { blocks: [block(2516, 290, [
      line('Net profit', 40, 800), line('$1.4B', 39), line('37% margin', 29, 400, NOTE),
      line('(1pp) Y/Y', 29, 400, NOTE),
    ])] },
    tax: { blocks: [block(2506, 644, [line('Tax', 31, 800), line('($0.2B)', 31)], 'middle', 8)] },
    rnd: { blocks: [block(2516, 928, [
      line('Research &', 31, 800), line('Development', 31, 800), line('($0.4B)', 31),
      line('11% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE),
    ], 'middle', 8)] },
    sga: { blocks: [block(2516, 1146, [
      line('Sales, General', 31, 800), line('& Admin', 31, 800), line('($0.3B)', 31),
      line('8% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE),
    ], 'middle', 8)] },
  };

  const zhLabels = {
    ...enLabels,
    wafer_inspection: { blocks: [
      block(497, 301, [line('$1.8B', 39), line('同比 +1%', 29, 400, NOTE)]),
      block(436, 464, [line('晶圆检测', 40, 800)], 'end'),
    ] },
    patterning: { blocks: [
      block(497, 605, [line('$0.7B', 39), line('同比 +61%', 29, 400, NOTE)]),
      block(436, 713, [line('图形化', 40, 800)], 'end'),
    ] },
    specialty_semi_process: { blocks: [
      block(497, 789, [line('$0.1B', 39), line('同比 +11%', 29, 400, NOTE)]),
      block(430, 870, [line('专用半导体制程', 36, 800)], 'end'),
    ] },
    pcb_component_inspection: { blocks: [
      block(497, 910, [line('$0.2B', 39), line('同比 +96%', 29, 400, NOTE)]),
      block(426, 996, [line('PCB 与元器件检测', 34, 800)], 'end'),
    ] },
    services: { blocks: [
      block(497, 1037, [line('$0.8B', 39), line('同比 +17%', 29, 400, NOTE)]),
      block(436, 1154, [line('服务', 40, 800)], 'end'),
    ] },
    other_revenue: { blocks: [
      block(497, 1235, [line('$24M', 39), line('同比 (39%)', 29, 400, NOTE)]),
      block(426, 1300, [line('其他', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(964, 496, [line('收入', 40, 800), line('$3.7B', 39), line('同比 +15%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1434, 358, [line('毛利润', 40, 800), line('$2.2B', 39), line('利润率 61%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1433, 1207, [line('收入成本', 38, 800), line('($1.4B)', 37)], 'middle', 8)] },
    operating_profit: { blocks: [block(1901, 220, [line('营业利润', 40, 800), line('$1.6B', 39), line('利润率 42%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1901, 947, [line('运营费用', 38, 800), line('($0.7B)', 37)], 'middle', 8)] },
    net_profit: { blocks: [block(2518, 290, [line('净利润', 40, 800), line('$1.4B', 39), line('利润率 37%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)])] },
    tax: { blocks: [block(2506, 644, [line('税费', 31, 800), line('($0.2B)', 31)], 'middle', 8)] },
    rnd: { blocks: [block(2516, 945, [line('研发', 31, 800), line('($0.4B)', 31), line('占收入 11%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 'middle', 8)] },
    sga: { blocks: [block(2528, 1162, [line('销售、一般及管理', 30, 800), line('($0.3B)', 31), line('占收入 8%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 'middle', 8)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'kla-q4-fy26',
    name: 'KLA · Q4 FY26',
    company: 'KLA',
    meta: {
      company: 'KLA',
      title: 'KLA Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/kla-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1960,
      periodX: 1901,
      periodY: 1172,
      periodNoteY: 1214,
      logoWidth: 430,
      logoHeight: 125,
      logoY: 303,
      logoViewBox: '0 0 430 125',
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
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherExpenseGuide('Other'),
    layout: {
      scale: 109.08,
      routes: { other_expense: { x: 2220, y: 501, width: 0, height: 1 } },
      nodes: {
        wafer_inspection: { x: 462, y: 392, width: 71, height: 194 },
        patterning: { x: 462, y: 694, width: 71, height: 79 },
        specialty_semi_process: { x: 462, y: 882, width: 71, height: 14 },
        pcb_component_inspection: { x: 462, y: 1005, width: 71, height: 16 },
        services: { x: 462, y: 1131, width: 71, height: 88 },
        other_revenue: { x: 462, y: 1326, width: 71, height: 5 },
        revenue: { x: 929, y: 637, width: 70, height: 399 },
        gross_profit: { x: 1396, y: 541, width: 71, height: 244 },
        cost_of_revenue: { x: 1396, y: 1010, width: 71, height: 152 },
        operating_profit: { x: 1864, y: 402, width: 70, height: 169 },
        operating_expenses: { x: 1864, y: 830, width: 70, height: 73 },
        net_profit: { x: 2330, y: 294, width: 71, height: 149 },
        tax: { x: 2330, y: 669, width: 71, height: 19 },
        rnd: { x: 2330, y: 958, width: 71, height: 43 },
        sga: { x: 2330, y: 1185, width: 71, height: 30 },
      },
      labels: enLabels,
    },
    nonNodeMetrics: [{
      id: 'other_expense',
      representation: 'flow',
      label: 'Other',
      value: 0.004563,
      valueText: '$5M',
      type: 'cost',
      labelColor: GREEN_LABEL,
    }],
    nodes: [
      { id: 'wafer_inspection', type: 'source', label: ['Wafer', 'Inspection'], value: 1.781116, notes: ['+1% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'patterning', type: 'source', label: 'Patterning', value: 0.728099, notes: ['+61% Y/Y'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'specialty_semi_process', type: 'source', label: ['Specialty', 'Semi Process'], value: 0.136513, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'pcb_component_inspection', type: 'source', label: ['PCB and Component', 'Inspection'], value: 0.167526, notes: ['+96% Y/Y'], color: LIME, labelColor: LIME, linkTint: LIME_LINK },
      { id: 'services', type: 'source', label: 'Services', value: 0.820405, notes: ['+17% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', type: 'source', label: 'Other', value: 0.023897, notes: ['(39%) Y/Y'], color: GREY, labelColor: GREY, linkTint: GREY_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 3.657556, notes: ['+15% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 2.244448, notes: ['61% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', type: 'cost', label: ['Cost of', 'revenue'], value: 1.413108, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 1.553948, notes: ['42% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.6905, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 1.363059, notes: ['37% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.186326, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', type: 'cost', label: ['Research &', 'Development'], value: 0.399023, notes: ['11% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', type: 'cost', label: ['Sales, General', '& Admin'], value: 0.291477, notes: ['8% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'wafer_inspection', target: 'revenue', value: 1.781116, sourceWidth: 194, targetWidth: 194, sourceOrder: 0, targetOrder: 0 },
      { source: 'patterning', target: 'revenue', value: 0.728099, sourceWidth: 79, targetWidth: 79, sourceOrder: 0, targetOrder: 1 },
      { source: 'specialty_semi_process', target: 'revenue', value: 0.136513, sourceWidth: 14, targetWidth: 15, sourceOrder: 0, targetOrder: 2 },
      { source: 'pcb_component_inspection', target: 'revenue', value: 0.167526, sourceWidth: 16, targetWidth: 18, sourceOrder: 0, targetOrder: 3 },
      { source: 'services', target: 'revenue', value: 0.820405, sourceWidth: 88, targetWidth: 90, sourceOrder: 0, targetOrder: 4 },
      { source: 'other_revenue', target: 'revenue', value: 0.023897, sourceWidth: 5, targetWidth: 3, sourceOrder: 0, targetOrder: 5 },
      { source: 'revenue', target: 'gross_profit', value: 2.244448, sourceWidth: 244, targetWidth: 244, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.413108, sourceWidth: 155, targetWidth: 152, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.553948, sourceWidth: 169, targetWidth: 169, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.6905, sourceWidth: 75, targetWidth: 73, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.363059, sourceWidth: 149, targetWidth: 149, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.186326, sourceWidth: 20, targetWidth: 19, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', targetRoute: 'other_expense', value: 0.004563, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0, interactionOnly: true, linkTint: { left: GREEN_LINK, right: '#5db45d' } },
      { source: 'operating_expenses', target: 'rnd', value: 0.399023, sourceWidth: 43, targetWidth: 43, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.291477, sourceWidth: 30, targetWidth: 30, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        annotationsSvg: otherExpenseGuide('其他'),
        name: '科磊 · 2026 财年第四季度',
        meta: {
          title: '科磊 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 1740,
        },
        nodes: {
          wafer_inspection: { label: '晶圆检测', notes: ['同比 +1%'] },
          patterning: { label: '图形化', notes: ['同比 +61%'] },
          specialty_semi_process: { label: '专用半导体制程', notes: ['同比 +11%'] },
          pcb_component_inspection: { label: 'PCB 与元器件检测', notes: ['同比 +96%'] },
          services: { label: '服务', notes: ['同比 +17%'] },
          other_revenue: { label: '其他', notes: ['同比 (39%)'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 37%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 (0 个百分点)'] },
          sga: { label: '销售、一般及管理', notes: ['占收入 8%', '同比 (0 个百分点)'] },
        },
        nonNodeMetrics: { other_expense: { label: '其他' } },
        layout: { labels: zhLabels },
      },
    },
  });
})();

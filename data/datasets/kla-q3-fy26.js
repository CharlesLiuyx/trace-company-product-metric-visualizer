/* ====================================================================
 * KLA - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/kla-q3-fy26.png as a fixed d3-sankey
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

  const otherIncomeGuideEn = `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2269"
      data-link-anchor-y="472.5">
      <path d="M2214 501H2283C2312 501 2302 445 2324 445"
        fill="none" stroke="#5db45d" stroke-width="2"/>
      <text x="2254" y="544" text-anchor="middle" font-size="31" font-weight="800"
        fill="${GREEN_LABEL}">Other</text>
      <text x="2254" y="586" text-anchor="middle" font-size="31" font-weight="400"
        fill="${GREEN_LABEL}">$9M</text>
    </g>`;

  const otherIncomeGuideZh = `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2269"
      data-link-anchor-y="472.5">
      <path d="M2214 501H2283C2312 501 2302 445 2324 445"
        fill="none" stroke="#5db45d" stroke-width="2"/>
      <text x="2254" y="544" text-anchor="middle" font-size="31" font-weight="800"
        fill="${GREEN_LABEL}">其他</text>
      <text x="2254" y="586" text-anchor="middle" font-size="31" font-weight="400"
        fill="${GREEN_LABEL}">$9M</text>
    </g>`;

  const enLabels = {
    other_income: { blocks: [] },
    wafer_inspection: { blocks: [
      { x: 491, top: 250, anchor: 'middle', lineGap: 9, lines: [
        { text: '$1.7B', size: 39, weight: 400 },
        { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 430, top: 388, anchor: 'end', lineGap: 10, lines: [
        { text: 'Wafer', size: 40, weight: 800 },
        { text: 'Inspection', size: 40, weight: 800 },
      ] },
    ] },
    patterning: { blocks: [
      { x: 491, top: 560, anchor: 'middle', lineGap: 9, lines: [
        { text: '$0.6B', size: 39, weight: 400 },
        { text: '(3%) Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 430, top: 658, anchor: 'end', lines: [{ text: 'Patterning', size: 40, weight: 800 }] },
    ] },
    specialty_semi_process: { blocks: [
      { x: 491, top: 770, anchor: 'middle', lineGap: 9, lines: [
        { text: '$0.1B', size: 39, weight: 400 },
        { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 424, top: 815, anchor: 'end', lineGap: 10, lines: [
        { text: 'Specialty', size: 40, weight: 800 },
        { text: 'Semi Process', size: 40, weight: 800 },
      ] },
    ] },
    pcb_component_inspection: { blocks: [
      { x: 491, top: 910, anchor: 'middle', lineGap: 9, lines: [
        { text: '$0.1B', size: 39, weight: 400 },
        { text: '(9%) Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 420, top: 954, anchor: 'end', lineGap: 10, lines: [
        { text: 'PCB and Component', size: 40, weight: 800 },
        { text: 'Inspection', size: 40, weight: 800 },
      ] },
    ] },
    services: { blocks: [
      { x: 491, top: 1034, anchor: 'middle', lineGap: 9, lines: [
        { text: '$0.8B', size: 39, weight: 400 },
        { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 430, top: 1142, anchor: 'end', lines: [{ text: 'Services', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 491, top: 1253, anchor: 'middle', lineGap: 9, lines: [
        { text: '$46M', size: 39, weight: 400 },
        { text: '+143% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 420, top: 1320, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 958, top: 471, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Revenue', size: 40, weight: 800 },
      { text: '$3.4B', size: 39, weight: 400 },
      { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1428, top: 355, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Gross profit', size: 40, weight: 800 },
      { text: '$2.1B', size: 39, weight: 400 },
      { text: '61% margin', size: 29, weight: 400, color: NOTE },
      { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1427, top: 1160, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Cost of', size: 38, weight: 800 },
      { text: 'revenue', size: 38, weight: 800 },
      { text: '($1.3B)', size: 37, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1895, top: 233, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Operating profit', size: 40, weight: 800 },
      { text: '$1.4B', size: 39, weight: 400 },
      { text: '41% margin', size: 29, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1895, top: 908, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 38, weight: 800 },
      { text: 'expenses', size: 38, weight: 800 },
      { text: '($0.7B)', size: 37, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2492, top: 303, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Net profit', size: 40, weight: 800 },
      { text: '$1.2B', size: 39, weight: 400 },
      { text: '35% margin', size: 29, weight: 400, color: NOTE },
      { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    tax: { blocks: [{ x: 2500, top: 637, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Tax', size: 31, weight: 800 },
      { text: '($0.2B)', size: 31, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: 2510, top: 883, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Research &', size: 31, weight: 800 },
      { text: 'Development', size: 31, weight: 800 },
      { text: '($0.4B)', size: 31, weight: 400 },
      { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    sga: { blocks: [{ x: 2510, top: 1125, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Sales, General', size: 31, weight: 800 },
      { text: '& Admin', size: 31, weight: 800 },
      { text: '($0.3B)', size: 31, weight: 400 },
      { text: '9% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
  };

  const zhLabels = {
    other_income: { blocks: [] },
    wafer_inspection: { blocks: [
      { x: 491, top: 250, anchor: 'middle', lineGap: 9, lines: [{ text: '$1.7B', size: 39 }, { text: '同比 +16%', size: 29, color: NOTE }] },
      { x: 430, top: 413, anchor: 'end', lines: [{ text: '晶圆检测', size: 40, weight: 800 }] },
    ] },
    patterning: { blocks: [
      { x: 491, top: 560, anchor: 'middle', lineGap: 9, lines: [{ text: '$0.6B', size: 39 }, { text: '同比 (3%)', size: 29, color: NOTE }] },
      { x: 430, top: 658, anchor: 'end', lines: [{ text: '图形化', size: 40, weight: 800 }] },
    ] },
    specialty_semi_process: { blocks: [
      { x: 491, top: 770, anchor: 'middle', lineGap: 9, lines: [{ text: '$0.1B', size: 39 }, { text: '同比 +4%', size: 29, color: NOTE }] },
      { x: 424, top: 842, anchor: 'end', lines: [{ text: '专用半导体制程', size: 36, weight: 800 }] },
    ] },
    pcb_component_inspection: { blocks: [
      { x: 491, top: 910, anchor: 'middle', lineGap: 9, lines: [{ text: '$0.1B', size: 39 }, { text: '同比 (9%)', size: 29, color: NOTE }] },
      { x: 420, top: 984, anchor: 'end', lines: [{ text: 'PCB 与元器件检测', size: 34, weight: 800 }] },
    ] },
    services: { blocks: [
      { x: 491, top: 1034, anchor: 'middle', lineGap: 9, lines: [{ text: '$0.8B', size: 39 }, { text: '同比 +16%', size: 29, color: NOTE }] },
      { x: 430, top: 1142, anchor: 'end', lines: [{ text: '服务', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 491, top: 1253, anchor: 'middle', lineGap: 9, lines: [{ text: '$46M', size: 39 }, { text: '同比 +143%', size: 29, color: NOTE }] },
      { x: 420, top: 1320, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 958, top: 471, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$3.4B', size: 39 }, { text: '同比 +11%', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1428, top: 355, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$2.1B', size: 39 }, { text: '利润率 61%', size: 29, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1427, top: 1182, anchor: 'middle', lineGap: 8, lines: [{ text: '收入成本', size: 38, weight: 800 }, { text: '($1.3B)', size: 37 }] }] },
    operating_profit: { blocks: [{ x: 1895, top: 233, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$1.4B', size: 39 }, { text: '利润率 41%', size: 29, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1895, top: 930, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 38, weight: 800 }, { text: '($0.7B)', size: 37 }] }] },
    net_profit: { blocks: [{ x: 2512, top: 303, anchor: 'middle', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$1.2B', size: 39 }, { text: '利润率 35%', size: 29, color: NOTE }, { text: '同比 (0 个百分点)', size: 29, color: NOTE }] }] },
    tax: { blocks: [{ x: 2500, top: 637, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '($0.2B)', size: 31 }] }] },
    rnd: { blocks: [{ x: 2510, top: 900, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '($0.4B)', size: 31 }, { text: '占收入 11%', size: 29, color: NOTE }, { text: '同比 +0 个百分点', size: 29, color: NOTE }] }] },
    sga: { blocks: [{ x: 2522, top: 1141, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般及管理', size: 30, weight: 800 }, { text: '($0.3B)', size: 31 }, { text: '占收入 9%', size: 29, color: NOTE }, { text: '同比 +0 个百分点', size: 29, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'kla-q3-fy26',
    name: 'KLA · Q3 FY26',
    company: 'KLA',
    meta: {
      company: 'KLA',
      title: 'KLA Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/kla-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1960,
      periodX: 1886,
      periodY: 1190,
      periodNoteY: 1234,
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
    annotationsSvg: otherIncomeGuideEn,
    layout: {
      scale: 110.7,
      routes: {
        other_income: { x: 2214, y: 501, width: 0, height: 1 },
      },
      nodes: {
        wafer_inspection: { x: 456, y: 342, width: 71, height: 191 },
        patterning: { x: 456, y: 649, width: 71, height: 67 },
        specialty_semi_process: { x: 456, y: 858, width: 71, height: 14 },
        pcb_component_inspection: { x: 456, y: 1000, width: 71, height: 7 },
        services: { x: 456, y: 1125, width: 71, height: 84 },
        other_revenue: { x: 456, y: 1344, width: 71, height: 2 },
        revenue: { x: 923, y: 614, width: 70, height: 378 },
        gross_profit: { x: 1392, y: 536, width: 72, height: 230 },
        cost_of_revenue: { x: 1390, y: 988, width: 71, height: 147 },
        operating_profit: { x: 1860, y: 413, width: 70, height: 155 },
        operating_expenses: { x: 1860, y: 810, width: 70, height: 72 },
        net_profit: { x: 2324, y: 312, width: 71, height: 132 },
        tax: { x: 2324, y: 657, width: 71, height: 22 },
        rnd: { x: 2324, y: 916, width: 71, height: 41 },
        sga: { x: 2324, y: 1162, width: 71, height: 30 },
      },
      labels: enLabels,
    },
    nonNodeMetrics: [
      {
        id: 'other_income',
        representation: 'flow',
        label: 'Other',
        value: 0.009252,
        valueText: '$9M',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'wafer_inspection', type: 'source', label: ['Wafer', 'Inspection'], value: 1.739671, notes: ['+16% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'patterning', type: 'source', label: 'Patterning', value: 0.615076, notes: ['(3%) Y/Y'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'specialty_semi_process', type: 'source', label: ['Specialty', 'Semi Process'], value: 0.144199, notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'pcb_component_inspection', type: 'source', label: ['PCB and Component', 'Inspection'], value: 0.095148, notes: ['(9%) Y/Y'], color: LIME, labelColor: LIME, linkTint: LIME_LINK },
      { id: 'services', type: 'source', label: 'Services', value: 0.774791, notes: ['+16% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', type: 'source', label: 'Other', value: 0.046193, notes: ['+143% Y/Y'], color: GREY, labelColor: GREY, linkTint: GREY_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 3.415078, notes: ['+11% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 2.087406, notes: ['61% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', type: 'cost', label: ['Cost of', 'revenue'], value: 1.327672, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 1.407309, notes: ['41% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 0.680097, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 1.20099, notes: ['35% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.215771, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', type: 'cost', label: ['Research &', 'Development'], value: 0.388763, notes: ['11% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', type: 'cost', label: ['Sales, General', '& Admin'], value: 0.291134, notes: ['9% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'wafer_inspection', target: 'revenue', value: 1.739671, sourceWidth: 191, targetWidth: 193, sourceOrder: 0, targetOrder: 0 },
      { source: 'patterning', target: 'revenue', value: 0.615076, sourceWidth: 67, targetWidth: 68, sourceOrder: 0, targetOrder: 1 },
      { source: 'specialty_semi_process', target: 'revenue', value: 0.144199, sourceWidth: 14, targetWidth: 16, sourceOrder: 0, targetOrder: 2 },
      { source: 'pcb_component_inspection', target: 'revenue', value: 0.095148, sourceWidth: 7, targetWidth: 10, sourceOrder: 0, targetOrder: 3 },
      { source: 'services', target: 'revenue', value: 0.774791, sourceWidth: 84, targetWidth: 86, sourceOrder: 0, targetOrder: 4 },
      { source: 'other_revenue', target: 'revenue', value: 0.046193, sourceWidth: 2, targetWidth: 5, sourceOrder: 0, targetOrder: 5 },
      { source: 'revenue', target: 'gross_profit', value: 2.087406, sourceWidth: 231, targetWidth: 230, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.327672, sourceWidth: 146, targetWidth: 147, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.407309, sourceWidth: 155, targetWidth: 155, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.680097, sourceWidth: 75, targetWidth: 72, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.191738, sourceWidth: 132, targetWidth: 131, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.215771, sourceWidth: 23, targetWidth: 22, sourceOrder: 1, targetOrder: 0 },
      {
        sourceRoute: 'other_income',
        target: 'net_profit',
        value: 0.009252,
        sourceWidth: 1,
        targetWidth: 1,
        sourceOrder: 0,
        targetOrder: 1,
        interactionOnly: true,
        linkTint: { left: '#5db45d', right: GREEN_LINK },
      },
      { source: 'operating_expenses', target: 'rnd', value: 0.388763, sourceWidth: 41, targetWidth: 41, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.291134, sourceWidth: 30, targetWidth: 30, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        annotationsSvg: otherIncomeGuideZh,
        name: '科磊 · 2026 财年第三季度',
        meta: {
          title: '科磊 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1740,
        },
        nodes: {
          wafer_inspection: { label: '晶圆检测', notes: ['同比 +16%'] },
          patterning: { label: '图形化', notes: ['同比 (3%)'] },
          specialty_semi_process: { label: '专用半导体制程', notes: ['同比 +4%'] },
          pcb_component_inspection: { label: 'PCB 与元器件检测', notes: ['同比 (9%)'] },
          services: { label: '服务', notes: ['同比 +16%'] },
          other_revenue: { label: '其他', notes: ['同比 +143%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及管理', notes: ['占收入 9%', '同比 +0 个百分点'] },
        },
        nonNodeMetrics: {
          other_income: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

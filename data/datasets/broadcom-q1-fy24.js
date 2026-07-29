/* Broadcom Q1 FY24 income statement ($B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const CRIMSON = '#cc092f';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';
  const BG = '#f2f2f2';

  const LOGO = `
    <circle cx="50" cy="50" r="49" fill="${CRIMSON}"/>
    <path d="M7 56 C 15 56 18 50 25 50 C 33 50 35 64 42 64 C 46 64 47 31 50 31 C 53 31 54 64 58 64 C 65 64 67 50 75 50 C 82 50 85 56 93 56"
      fill="none" stroke="#ffffff" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  const annotations = `
    <g data-typography-role="brand" font-family="Montserrat,Arial,sans-serif">
      <text x="576" y="322" fill="#000000" font-size="98" font-weight="800" letter-spacing="1">BROADCOM</text>
      <text x="1188" y="263" fill="#000000" font-size="23" font-weight="700">®</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'broadcom-q1-fy24',
    name: 'Broadcom · Q1 FY24',
    company: 'Broadcom',
    meta: {
      company: 'Broadcom',
      title: 'Broadcom Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Jan. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/broadcom-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2350,
      periodX: 200,
      periodY: 319,
      periodNoteY: 360,
      logoWidth: 192,
      logoHeight: 192,
      logoY: 352,
      logoViewBox: '0 0 100 100',
      logoSvg: LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 31.3,
      nodes: {
        semiconductor_solutions: { x: 370, y: 584, width: 71, height: 232 },
        infrastructure_software: { x: 370, y: 1045, width: 71, height: 141 },
        revenue: { x: 835, y: 708, width: 70, height: 376 },
        gross_profit: { x: 1311, y: 594, width: 72, height: 231 },
        cost_of_revenue: { x: 1314, y: 1030, width: 71, height: 142 },
        operating_profit: { x: 1777, y: 491, width: 70, height: 63 },
        operating_expenses: { x: 1772, y: 766, width: 70, height: 165 },
        net_profit: { x: 2238, y: 352, width: 71, height: 39 },
        other: { x: 2238, y: 553, width: 71, height: 21 },
        tax: { x: 2238, y: 674, width: 71, height: 3 },
        rnd: { x: 2238, y: 821, width: 71, height: 71 },
        sga: { x: 2238, y: 981, width: 71, height: 47 },
        amortization: { x: 2238, y: 1132, width: 71, height: 24 },
        restructuring: { x: 2238, y: 1274, width: 71, height: 17 },
      },
      labels: {
        semiconductor_solutions: { blocks: [
          { x: 404, top: 480, anchor: 'middle', lineGap: 9, lines: [
            { text: '$7.4B', size: 44, weight: 400 },
            { text: '+4% Y/Y', size: 30, weight: 400, color: NOTE },
          ] },
          { x: 200, top: 654, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Semiconductor', size: 38, weight: 800 },
            { text: 'solutions', size: 38, weight: 800 },
          ] },
        ] },
        infrastructure_software: { blocks: [
          { x: 407, top: 939, anchor: 'middle', lineGap: 9, lines: [
            { text: '$4.6B', size: 44, weight: 400 },
            { text: '+153% Y/Y', size: 30, weight: 400, color: NOTE },
          ] },
          { x: 206, top: 1070, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Infrastructure', size: 38, weight: 800 },
            { text: 'software', size: 38, weight: 800 },
          ] },
        ] },
        revenue: { blocks: [{ x: 872, top: 558, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Revenue', size: 46, weight: 800 },
          { text: '$value', size: 44, weight: 400 },
          { text: '+34% Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1348, top: 405, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 44, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
          { text: '62% margin', size: 30, weight: 400, color: NOTE },
          { text: '(6pp) Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1348, top: 1185, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Cost of', size: 40, weight: 800 },
          { text: 'revenue', size: 40, weight: 800 },
          { text: '$value', size: 40, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1812, top: 302, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 44, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
          { text: '17% margin', size: 30, weight: 400, color: NOTE },
          { text: '(29pp) Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1807, top: 946, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Operating', size: 40, weight: 800 },
          { text: 'Expenses', size: 40, weight: 800 },
          { text: '$value', size: 40, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2429, top: 324, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 44, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
          { text: '11% margin', size: 30, weight: 400, color: NOTE },
          { text: '(32pp) Y/Y', size: 30, weight: 400, color: NOTE },
        ] }] },
        other: { blocks: [{ x: 2428, top: 525, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Other', size: 32, weight: 800 },
          { text: '$value', size: 32, weight: 400 },
        ] }] },
        tax: { blocks: [{ x: 2428, top: 633, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Tax', size: 32, weight: 800 },
          { text: '$value', size: 32, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2453, top: 815, anchor: 'middle', lineGap: 7, lines: [
          { text: 'R&D ($2.3B)', size: 34, weight: 800 },
          { text: '19% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        sga: { blocks: [{ x: 2451, top: 945, anchor: 'middle', lineGap: 7, lines: [
          { text: 'SG&A ($1.6B)', size: 34, weight: 800 },
          { text: '13% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        amortization: { blocks: [{ x: 2454, top: 1089, anchor: 'middle', lineGap: 2, lines: [
          { text: 'Amortization', size: 34, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
          { text: '7% of revenue', size: 24, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 24, weight: 400, color: NOTE },
        ] }] },
        restructuring: { blocks: [{ x: 2457, top: 1253, anchor: 'middle', lineGap: 2, lines: [
          { text: 'Restructuring', size: 34, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
          { text: '5% of revenue', size: 24, weight: 400, color: NOTE },
          { text: '+5pp Y/Y', size: 24, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'semiconductor_solutions', col: 0, order: 0, type: 'source', label: ['Semiconductor', 'solutions'], value: 7.4, notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'infrastructure_software', col: 0, order: 1, type: 'source', label: ['Infrastructure', 'software'], value: 4.6, notes: ['+153% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.0, valueText: '$12.0B', notes: ['+34% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.4, notes: ['62% margin', '(6pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['17% margin', '(29pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 5.3 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.3, notes: ['11% margin', '(32pp) Y/Y'] },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.7 },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.1 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 2.3, notes: ['19% of revenue', '+6pp Y/Y'] },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 1.6, notes: ['13% of revenue', '+9pp Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.8, notes: ['7% of revenue', '+3pp Y/Y'] },
      { id: 'restructuring', col: 4, order: 6, type: 'cost', label: 'Restructuring', value: 0.6, notes: ['5% of revenue', '+5pp Y/Y'] },
    ],
    links: [
      { source: 'semiconductor_solutions', target: 'revenue', value: 7.4, sourceWidth: 232, targetWidth: 233, y0: 700, y1: 824.5, targetOrder: 0 },
      { source: 'infrastructure_software', target: 'revenue', value: 4.6, sourceWidth: 141, targetWidth: 143, y0: 1115.5, y1: 1012.5, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 7.4, sourceWidth: 233, targetWidth: 231, y0: 824.5, y1: 709.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.6, sourceWidth: 143, targetWidth: 142, y0: 1012.5, y1: 1101, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 64, targetWidth: 63, y0: 626, y1: 522.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.3, sourceWidth: 166, targetWidth: 165, y0: 742, y1: 848.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 39, targetWidth: 39, y0: 510.5, y1: 371.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.7, sourceWidth: 21, targetWidth: 21, y0: 540.5, y1: 563.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 552.5, y1: 675.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.3, sourceWidth: 72, targetWidth: 71, y0: 802, y1: 856.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.6, sourceWidth: 50, targetWidth: 47, y0: 863, y1: 1004.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.8, sourceWidth: 25, targetWidth: 24, y0: 900.5, y1: 1144, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.6, sourceWidth: 18, targetWidth: 17, y0: 922, y1: 1282.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['BROADCOM'],
      zh: {
        name: 'Broadcom · 2024 财年第一季度',
        meta: {
          title: 'Broadcom 2024 财年第一季度利润表',
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 1 月',
          titleTextLength: 1500,
        },
        nodes: {
          semiconductor_solutions: { label: ['半导体', '解决方案'], notes: ['同比 +4%'] },
          infrastructure_software: { label: ['基础设施', '软件'], notes: ['同比 +153%'] },
          revenue: { label: '收入', notes: ['同比 +34%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 62%', '同比 (6 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 (29 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (32 个百分点)'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 +6 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 13%', '同比 +9 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 7%', '同比 +3 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 5%', '同比 +5 个百分点'] },
        },
        layout: {
          labels: {
            semiconductor_solutions: { blocks: [
              { x: 404, top: 480, anchor: 'middle', lineGap: 9, lines: [
                { text: '$7.4B', size: 44, weight: 400 },
                { text: '同比 +4%', size: 30, weight: 400, color: NOTE },
              ] },
              { x: 200, top: 677, anchor: 'middle', lineGap: 8, lines: [
                { text: '半导体解决方案', size: 38, weight: 800 },
              ] },
            ] },
            infrastructure_software: { blocks: [
              { x: 407, top: 939, anchor: 'middle', lineGap: 9, lines: [
                { text: '$4.6B', size: 44, weight: 400 },
                { text: '同比 +153%', size: 30, weight: 400, color: NOTE },
              ] },
              { x: 206, top: 1093, anchor: 'middle', lineGap: 8, lines: [
                { text: '基础设施软件', size: 38, weight: 800 },
              ] },
            ] },
            net_profit: { blocks: [{ x: 2440, top: 324, anchor: 'middle', lineGap: 8, lines: [
              { text: '净利润', size: 44, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 44, weight: 400, color: GREEN_LABEL },
              { text: '利润率 11%', size: 30, weight: 400, color: NOTE },
              { text: '同比 (32 个百分点)', size: 30, weight: 400, color: NOTE },
            ] }] },
            sga: { blocks: [{ x: 2451, top: 932, anchor: 'middle', lineGap: 2, lines: [
              { text: '销售及行政', size: 30, weight: 800 },
              { text: '$value', size: 28, weight: 400 },
              { text: '占收入 13%', size: 24, weight: 400, color: NOTE },
              { text: '同比 +9 个百分点', size: 24, weight: 400, color: NOTE },
            ] }] },
            amortization: { blocks: [{ x: 2454, top: 1067, anchor: 'middle', lineGap: 2, lines: [
              { text: '摊销', size: 34, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
              { text: '占收入 7%', size: 24, weight: 400, color: NOTE },
              { text: '同比 +3 个百分点', size: 24, weight: 400, color: NOTE },
            ] }] },
          },
        },
      },
    },
  });
})();

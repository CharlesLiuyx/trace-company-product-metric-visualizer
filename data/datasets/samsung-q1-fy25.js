/* ====================================================================
 * Samsung - Q1 FY25 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q1-fy25.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#1428a0';
  const BLUE_LINK = '#8e97cd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="198" y="272" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 640, 330, 1.04)}
      ${icon('samsungDeviceExperienceCluster', 53, 441, 1.03)}
      ${icon('samsungDeviceSolutionsChipCluster', 214, 752, 1.05)}
      ${icon('samsungDisplayWordmark', 95, 1058, 0.96)}
      ${icon('samsungHarmanWordmark', 94, 1147, 0.91)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q1-fy25',
    name: 'Samsung · Q1 FY25',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2295,
      hidePeriodStamp: true,
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
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 3.25,
      nodes: {
        device_experience: { x: 436, y: 513, width: 72, height: 167 },
        device_solutions: { x: 436, y: 840, width: 72, height: 80 },
        samsung_display: { x: 436, y: 1065, width: 72, height: 18 },
        harman: { x: 436, y: 1236, width: 72, height: 10 },
        segment_sales: { x: 810, y: 698, width: 72, height: 280 },
        eliminations: { x: 1186, y: 1203, width: 72, height: 21 },
        revenue: { x: 1184, y: 823, width: 72, height: 258 },
        gross_profit: { x: 1552, y: 698, width: 72, height: 89 },
        cost_of_revenue: { x: 1557, y: 1005, width: 72, height: 166 },
        operating_profit: { x: 1934, y: 600, width: 72, height: 20 },
        operating_expenses: { x: 1934, y: 827, width: 72, height: 67 },
        other: { x: 2192, y: 571, width: 72, height: 5 },
        net_profit: { x: 2304, y: 505, width: 72, height: 24 },
        tax: { x: 2304, y: 749, width: 72, height: 2 },
        sga: { x: 2304, y: 924, width: 72, height: 39 },
        rnd: { x: 2304, y: 1143, width: 72, height: 28 },
      },
      labels: {
        device_experience: { blocks: [
          { x: 472, top: 428, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '+9% Y/Y', size: 27, weight: 400, color: NOTE },
          ] },
          { x: 378, top: 522, anchor: 'end', semanticRole: 'reference-offset-side-label', lineGap: 8, lines: [
            { text: 'Device eXperience', size: 36, weight: 800, color: BLUE },
            { text: 'Digital TVs', size: 28, weight: 400, color: NOTE },
            { text: 'Refrigerators', size: 28, weight: 400, color: NOTE },
            { text: 'Mobile phones', size: 28, weight: 400, color: NOTE },
            { text: 'Communication systems', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        device_solutions: { blocks: [
          { x: 472, top: 742, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '+9% Y/Y', size: 27, weight: 400, color: NOTE },
          ] },
          { x: 385, top: 873, anchor: 'end', semanticRole: 'reference-offset-side-label', lineGap: 9, lines: [
            { text: 'Device Solutions', size: 36, weight: 800, color: BLUE },
            { text: 'Memory, Foundry,', size: 28, weight: 400, color: NOTE },
            { text: '& System LSI', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        samsung_display: { blocks: [
          { x: 472, top: 976, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '+9% Y/Y', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        harman: { blocks: [
          { x: 472, top: 1137, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '+7% Y/Y', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        segment_sales: { blocks: [] },
        revenue: { blocks: [
          { x: 1220, top: 676, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Sales', size: 40, weight: 800, color: BLUE },
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        eliminations: { blocks: [
          { x: 1222, top: 1240, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Eliminations', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
        gross_profit: { blocks: [
          { x: 1596, top: 518, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '36% margin', size: 28, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        cost_of_revenue: { blocks: [
          { x: 1593, top: 1187, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Cost of', size: 36, weight: 800, color: RED_LABEL },
            { text: 'revenue', size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ] },
        ] },
        operating_profit: { blocks: [
          { x: 1978, top: 418, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '8% margin', size: 28, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        operating_expenses: { blocks: [
          { x: 1970, top: 921, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
            { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ] },
        ] },
        other: { blocks: [
          { x: 2228, top: 593, anchor: 'middle', lineGap: 7, lines: [
            { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
          ] },
        ] },
        net_profit: { blocks: [
          { x: 2400, top: 473, anchor: 'start', lineGap: 9, lines: [
            { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '10% margin', size: 28, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        tax: { blocks: [
          { x: 2493, top: 711, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ] },
        ] },
        sga: { blocks: [
          { x: 2515, top: 902, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
            { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        rnd: { blocks: [
          { x: 2508, top: 1125, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
            { text: 'development', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            { text: '11% of revenue', size: 28, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
      },
    },

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 51.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 25.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 5.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 86.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -7.0, valueText: '(7.0T)' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 79.1, notes: ['+10% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 28.1, notes: ['36% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 51.0, valueText: '(51.0T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 6.7, notes: ['8% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.4 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 2.5 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 8.2, notes: ['10% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.9, valueText: '(0.9T)' },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: ['Sales, general', '& admin'], value: 12.4, notes: ['16% of revenue', '(0pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: ['Research &', 'development'], value: 9.0, valueText: '(9.0T)', notes: ['11% of revenue', '+1pp Y/Y'] },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 51.7, sourceWidth: 167, targetWidth: 168, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 25.1, sourceWidth: 80, targetWidth: 82, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 5.9, sourceWidth: 18, targetWidth: 19, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.4, sourceWidth: 10, targetWidth: 11, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 79.1, sourceWidth: 258, targetWidth: 258, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 7.0, sourceWidth: 22, targetWidth: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 28.1, sourceWidth: 92, targetWidth: 89, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 51.0, sourceWidth: 166, targetWidth: 166, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 6.7, sourceWidth: 20, targetWidth: 20, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 21.4, sourceWidth: 69, targetWidth: 67, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 5.7, sourceWidth: 18, targetWidth: 18, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.9, sourceWidth: 2, targetWidth: 2, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 12.4, sourceWidth: 39, targetWidth: 39, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 9.0, sourceWidth: 28, targetWidth: 28, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 2.5, sourceWidth: 5, targetWidth: 6, targetOrder: 1 },
    ],

    i18n: {
      preservedAnnotationText: ['SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2025 财年第一季度',
        meta: { title: 'Samsung 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月' },
        nodes: {
          device_experience: { label: '设备体验' },
          device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' },
          harman: { label: '哈曼' },
          eliminations: { label: '抵销' },
          revenue: { label: '销售额', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 36%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 16%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: {
            samsung_display: { blocks: [
              { x: 472, top: 976, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '同比 +9%', size: 27, weight: 400, color: NOTE },
              ] },
            ] },
            harman: { blocks: [
              { x: 472, top: 1137, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '同比 +7%', size: 27, weight: 400, color: NOTE },
              ] },
            ] },
          },
        },
      },
    },
  });
})();

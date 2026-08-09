/* ====================================================================
 * Samsung - Q4 FY24 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q4-fy24.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * Segment order (top -> bottom): Device eXperience, Device Solutions,
 * Samsung Display, Harman. Scale 3.70 px/T from measured node bars.
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
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="198" y="272" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 659, 317, 1.06)}
      ${icon('samsungDeviceExperienceCluster', 53, 341, 1.03)}
      ${icon('samsungDeviceSolutionsChipCluster', 213, 671, 0.92)}
      ${icon('samsungDisplayWordmark', 95, 960, 1)}
      ${icon('samsungHarmanWordmark', 100, 1056, 1)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q4-fy24',
    name: 'Samsung · Q4 FY24',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q4-fy24.png', width: 2667, height: 1500 },
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
      nodeRadius: 0,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 3.70,
      nodes: {
        device_experience: { x: 435, y: 446, width: 72, height: 150 },
        device_solutions: { x: 435, y: 743, width: 72, height: 110 },
        samsung_display: { x: 435, y: 991, width: 72, height: 29 },
        harman: { x: 435, y: 1160, width: 72, height: 13 },
        segment_sales: { x: 809, y: 612, width: 72, height: 308 },
        eliminations: { x: 1183, y: 1122, width: 72, height: 22 },
        revenue: { x: 1182, y: 738, width: 72, height: 282 },
        gross_profit: { x: 1556, y: 611, width: 72, height: 105 },
        cost_of_revenue: { x: 1556, y: 969, width: 72, height: 175 },
        operating_profit: { x: 1930, y: 512, width: 72, height: 23 },
        operating_expenses: { x: 1930, y: 740, width: 72, height: 81 },
        other: { x: 2190, y: 497, width: 72, height: 4 },
        net_profit: { x: 2304, y: 435, width: 72, height: 27 },
        tax: { x: 2304, y: 647, width: 72, height: 1 },
        sga: { x: 2304, y: 841, width: 72, height: 42 },
        rnd: { x: 2304, y: 1052, width: 72, height: 38 },
      },
      labels: {
        device_experience: { blocks: [
          { x: 471, top: 357, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '+2% Y/Y', size: 27, weight: 400, color: NOTE },
          ] },
          { x: 408, top: 438, anchor: 'end', semanticRole: 'side-description', lines: [
            { text: 'Device eXperience', size: 36, weight: 800, color: BLUE, textLength: 352 },
          ] },
          { x: 403, top: 500, anchor: 'end', lineGap: 10, semanticRole: 'side-description', lines: [
            { text: 'Digital TVs', size: 28, weight: 400, color: NOTE },
            { text: 'Refrigerators', size: 28, weight: 400, color: NOTE, textLength: 165 },
            { text: 'Mobile phones', size: 28, weight: 400, color: NOTE, textLength: 188 },
            { text: 'Communication systems', size: 28, weight: 400, color: NOTE, textLength: 315 },
          ] },
        ] },
        device_solutions: { blocks: [
          { x: 471, top: 654, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '+39% Y/Y', size: 27, weight: 400, color: NOTE },
          ] },
          { x: 413, top: 772, anchor: 'end', semanticRole: 'side-description', lines: [
            { text: 'Device Solutions', size: 36, weight: 800, color: BLUE, textLength: 315 },
          ] },
          { x: 407, top: 822, anchor: 'end', lineGap: 9, semanticRole: 'side-description', lines: [
            { text: 'Memory, Foundry,', size: 28, weight: 400, color: NOTE, textLength: 233 },
            { text: '& System LSI', size: 28, weight: 400, color: NOTE, textLength: 162 },
          ] },
        ] },
        samsung_display: { blocks: [
          { x: 471, top: 902, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '(16%) Y/Y', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        harman: { blocks: [
          { x: 471, top: 1071, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400, color: BLUE },
            { text: '0% Y/Y', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        segment_sales: { blocks: [] },
        revenue: { blocks: [
          { x: 1211, top: 596, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Sales', size: 40, weight: 800, color: BLUE },
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        eliminations: { blocks: [
          { x: 1218, top: 1172, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Eliminations', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
        gross_profit: { blocks: [
          { x: 1592, top: 433, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '38% margin', size: 28, weight: 400, color: NOTE },
            { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        cost_of_revenue: { blocks: [
          { x: 1592, top: 1164, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Cost of', size: 36, weight: 800, color: RED_LABEL },
            { text: 'revenue', size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ] },
        ] },
        operating_profit: { blocks: [
          { x: 1966, top: 332, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '9% margin', size: 28, weight: 400, color: NOTE },
            { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        operating_expenses: { blocks: [
          { x: 1966, top: 839, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
            { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ] },
        ] },
        other: { blocks: [
          { x: 2226, top: 517, anchor: 'middle', lineGap: 7, lines: [
            { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
          ] },
        ] },
        net_profit: { blocks: [
          { x: 2400, top: 404, anchor: 'start', lineGap: 9, lines: [
            { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: '10% margin', size: 28, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        tax: { blocks: [
          { x: 2493, top: 616, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ] },
        ] },
        sga: { blocks: [
          { x: 2508, top: 813, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
            { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        rnd: { blocks: [
          { x: 2508, top: 1046, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
            { text: 'development', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
            { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
      },
    },

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 40.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 30.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 8.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 82.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -6.8, valueText: '(6.8T)' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 75.8, notes: ['+12% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 28.5, notes: ['38% margin', '+6pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 47.3, valueText: '(47.3T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 6.5, notes: ['9% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 22.0, valueText: '(22.0T)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.5 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 7.8, notes: ['10% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '(0.2T)' },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: ['Sales, general', '& admin'], value: 11.7, notes: ['15% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: ['Research &', 'development'], value: 10.3, notes: ['14% of revenue', '+2pp Y/Y'] },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 40.5, sourceWidth: 150, targetWidth: 150, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 30.1, sourceWidth: 110, targetWidth: 112, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 8.1, sourceWidth: 29, targetWidth: 31, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.9, sourceWidth: 13, targetWidth: 15, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 75.8, sourceWidth: 282, targetWidth: 282, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 6.8, sourceWidth: 26, targetWidth: 22, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 28.5, sourceWidth: 106, targetWidth: 105, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 47.3, sourceWidth: 176, targetWidth: 175, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 6.5, sourceWidth: 24, targetWidth: 23, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 22.0, sourceWidth: 81, targetWidth: 81, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 6.3, sourceWidth: 22, targetWidth: 22, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 1, targetWidth: 1, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 11.7, sourceWidth: 43, targetWidth: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 10.3, sourceWidth: 38, targetWidth: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.5, sourceWidth: 4, targetWidth: 5, targetOrder: 1 },
    ],

    i18n: {
      preservedAnnotationText: ['SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2024 财年第四季度',
        meta: {
          title: 'Samsung 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
          titleSize: 104,
          titleTextLength: 1900,
        },
        nodes: {
          device_experience: { label: '设备体验' },
          device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' },
          harman: { label: '哈曼' },
          eliminations: { label: '抵销' },
          revenue: { label: '销售额', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 38%', '同比 +6 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 +2 个百分点'] },
        },
        layout: {
          labels: {
            device_experience: { blocks: [
              { x: 471, top: 357, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '同比 +2%', size: 27, weight: 400, color: NOTE },
              ] },
              { x: 408, top: 438, anchor: 'end', semanticRole: 'side-description', lines: [
                { text: '设备体验', size: 36, weight: 800, color: BLUE },
              ] },
              { x: 403, top: 500, anchor: 'end', lineGap: 10, semanticRole: 'side-description', lines: [
                { text: '数字电视', size: 28, weight: 400, color: NOTE },
                { text: '冰箱', size: 28, weight: 400, color: NOTE },
                { text: '手机', size: 28, weight: 400, color: NOTE },
                { text: '通信系统', size: 28, weight: 400, color: NOTE },
              ] },
            ] },
            device_solutions: { blocks: [
              { x: 471, top: 654, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '同比 +39%', size: 27, weight: 400, color: NOTE },
              ] },
              { x: 413, top: 772, anchor: 'end', semanticRole: 'side-description', lines: [
                { text: '设备解决方案', size: 36, weight: 800, color: BLUE },
              ] },
              { x: 407, top: 822, anchor: 'end', lineGap: 9, semanticRole: 'side-description', lines: [
                { text: '存储、晶圆代工、', size: 28, weight: 400, color: NOTE },
                { text: '系统 LSI', size: 28, weight: 400, color: NOTE },
              ] },
            ] },
            samsung_display: { blocks: [
              { x: 471, top: 902, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '同比 (16%)', size: 27, weight: 400, color: NOTE },
              ] },
            ] },
            harman: { blocks: [
              { x: 471, top: 1071, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '同比 0%', size: 27, weight: 400, color: NOTE },
              ] },
            ] },
          },
        },
      },
    },
  });
})();

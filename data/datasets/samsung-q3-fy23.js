/* Samsung Q3 FY23 income statement (KRW T), fixed from the 2667x1500 Source. */
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
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const icon = (name, x, y, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${ICONS[name] || ''}</g>`;
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap || 8, ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}), lines });
  const line = (text, size, weight, color, textLength) => ({ text, size, weight, color, ...(textLength == null ? {} : { textLength }) });

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="198" y="272" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 606, 243, 1.06)}
      ${icon('samsungDeviceExperienceCluster', 72, 414, 1.03)}
      ${icon('samsungDeviceSolutionsChipCluster', 283, 839, 1.05)}
      ${icon('samsungDisplayWordmark', 98, 1065, 0.96)}
      ${icon('samsungHarmanWordmark', 98, 1118, 0.88)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q3-fy23',
    name: 'Samsung · Q3 FY23',
    company: 'Samsung',
    meta: {
      company: 'Samsung', title: 'Samsung Q3 FY23 Income Statement', period: 'Q3 FY23', periodNote: 'Ending Sep. 2023',
      currency: '', unit: 'T', decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2295, hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 }, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 4.94,
      nodes: {
        device_experience: { x: 431, y: 499, width: 72, height: 217 },
        device_solutions: { x: 431, y: 868, width: 72, height: 82 },
        samsung_display: { x: 431, y: 1112, width: 72, height: 41 },
        harman: { x: 431, y: 1321, width: 72, height: 20 },
        segment_sales: { x: 805, y: 662, width: 72, height: 358 },
        revenue: { x: 1176, y: 707, width: 72, height: 333 },
        eliminations: { x: 1176, y: 1147, width: 72, height: 25 },
        gross_profit: { x: 1545, y: 598, width: 72, height: 103 },
        cost_of_revenue: { x: 1555, y: 916, width: 72, height: 231 },
        operating_profit: { x: 1914, y: 504, width: 72, height: 12 },
        operating_expenses: { x: 1916, y: 689, width: 72, height: 91 },
        other: { x: 2114, y: 362, width: 72, height: 8 },
        tax_benefit: { x: 2167, y: 521, width: 72, height: 9 },
        net_profit: { x: 2299, y: 429, width: 72, height: 30 },
        sga: { x: 2299, y: 808, width: 72, height: 56 },
        rnd: { x: 2299, y: 1062, width: 72, height: 35 },
      },
      labels: {
        device_experience: { blocks: [
          block(467, 407, [line('$value', 38, 400, BLUE), line('(7%) Y/Y', 27, 400, NOTE)]),
          block(408, 512, [line('Device eXperience', 36, 800, BLUE), line('Digital TVs', 28, 400, NOTE), line('Refrigerators', 28, 400, NOTE), line('Mobile phones', 28, 400, NOTE), line('Communication systems', 31, 400, NOTE)], { anchor: 'end', lineGap: 10.5, semanticRole: 'source-measured-label' }),
        ] },
        device_solutions: { blocks: [
          block(467, 775, [line('$value', 38, 400, BLUE), line('(29%) Y/Y', 27, 400, NOTE)]),
          block(410, 895, [line('Device Solutions', 40, 800, BLUE), line('Memory, Foundry,', 28, 400, NOTE), line('& System LSI', 28, 400, NOTE)], { anchor: 'end', lineGap: 8, semanticRole: 'source-measured-label' }),
        ] },
        samsung_display: { blocks: [block(467, 1017, [line('$value', 38, 400, BLUE), line('(12%) Y/Y', 27, 400, NOTE)])] },
        harman: { blocks: [block(467, 1230, [line('$value', 38, 400, BLUE), line('+5% Y/Y', 27, 400, NOTE)])] },
        segment_sales: { blocks: [] },
        revenue: { blocks: [block(1212, 559, [line('Sales', 40, 800, BLUE), line('$value', 39, 400, BLUE), line('(12%) Y/Y', 28, 400, NOTE)], { lineGap: 10 })] },
        eliminations: { blocks: [block(1212, 1196, [line('Eliminations', 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
        gross_profit: { blocks: [block(1581, 412, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('31% margin', 28, 400, NOTE), line('(7pp) Y/Y', 28, 400, NOTE)], { lineGap: 9 })] },
        cost_of_revenue: { blocks: [block(1591, 1166, [line('Cost of', 36, 800, RED_LABEL), line('revenue', 36, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)])] },
        operating_profit: { blocks: [block(1950, 276, [line('Operating', 36, 800, GREEN_LABEL), line('profit', 36, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('4% margin', 28, 400, NOTE), line('(11pp) Y/Y', 28, 400, NOTE)], { lineGap: 9 })] },
        operating_expenses: { blocks: [block(1947, 800, [line('Operating', 36, 800, RED_LABEL), line('expenses', 36, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)])] },
        other: { blocks: [block(2150, 275, [line('Other', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL)], { lineGap: 7 })] },
        tax_benefit: { blocks: [block(2199, 536, [line('Tax benefit', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL)], { lineGap: 7 })] },
        net_profit: { blocks: [block(2400, 399, [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('9% margin', 28, 400, NOTE), line('(4pp) Y/Y', 28, 400, NOTE)], { anchor: 'start', lineGap: 9 })] },
        sga: { blocks: [block(2515, 775, [line('Sales, general', 31, 800, RED_LABEL), line('& admin', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
        rnd: { blocks: [block(2515, 1022, [line('Research &', 31, 800, RED_LABEL), line('development', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
      },
    },
    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 44.0, valueText: '44.0T', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 16.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 8.2, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.8, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 72.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 67.4, notes: ['(12%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -5.1, valueText: '(5.1T)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 20.8, notes: ['31% margin', '(7pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 46.6, valueText: '(46.6T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 2.4, notes: ['4% margin', '(11pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 18.4, valueText: '(18.4T)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.5 },
      { id: 'tax_benefit', col: 5, order: 1, type: 'profit', label: 'Tax benefit', value: 1.9 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 5.8, notes: ['9% margin', '(4pp) Y/Y'] },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: ['Sales, general', '& admin'], value: 11.3, valueText: '(11.3T)' },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: ['Research &', 'development'], value: 7.0, valueText: '(7.0T)' },
    ],
    links: [
      { source: 'device_experience', target: 'segment_sales', value: 44.0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 16.4, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 8.2, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.8, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 67.4, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 5.1, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 20.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 46.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 18.4, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.4, sourceOrder: 0, targetOrder: 1 },
      { source: 'tax_benefit', target: 'net_profit', value: 1.9, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 11.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.0, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2023 财年第三季度',
        meta: { title: 'Samsung 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月' },
        nodes: {
          device_experience: { label: '设备体验' }, device_solutions: { label: '设备解决方案' }, samsung_display: { label: '三星显示' }, harman: { label: '哈曼' },
          eliminations: { label: '抵销' }, revenue: { label: '销售额', notes: ['同比 (12%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 31%', '同比 (7 个百分点)'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (11 个百分点)'] }, operating_expenses: { label: '运营费用' },
          other: { label: '其他' }, tax_benefit: { label: '税收收益' }, net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (4 个百分点)'] },
          sga: { label: '销售、一般及行政' }, rnd: { label: '研发' },
        },
        layout: { labels: {
          samsung_display: { blocks: [block(467, 1017, [line('$value', 38, 400, BLUE), line('同比 (12%)', 27, 400, NOTE)])] },
          harman: { blocks: [block(467, 1230, [line('$value', 38, 400, BLUE), line('同比 +5%', 27, 400, NOTE)])] },
        } },
      },
    },
  });
})();

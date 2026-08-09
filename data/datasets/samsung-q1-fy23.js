/* ====================================================================
 * Samsung - Q1 FY23 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q1-fy23.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#777777';
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
      <text x="197" y="272" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 607, 249, 1.06)}
      ${icon('samsungDeviceExperienceCluster', 53, 420, 1.08)}
      ${icon('samsungDeviceSolutionsChipCluster', 210, 800, 1)}
      ${icon('samsungDisplayWordmark', 96, 1118, 0.98)}
      ${icon('samsungHarmanWordmark', 96, 1207, 1)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q1-fy23',
    name: 'Samsung · Q1 FY23',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2295,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 5.7,
      nodes: {
        device_experience: { x: 430, y: 460, width: 72, height: 264 },
        device_solutions: { x: 430, y: 887, width: 72, height: 78 },
        samsung_display: { x: 430, y: 1124, width: 72, height: 38 },
        harman: { x: 430, y: 1316, width: 72, height: 18 },
        segment_sales: { x: 810, y: 619, width: 72, height: 398 },
        revenue: { x: 1179, y: 567, width: 72, height: 364 },
        eliminations: { x: 1179, y: 1072, width: 72, height: 34 },
        gross_profit: { x: 1550, y: 496, width: 70, height: 101 },
        cost_of_revenue: { x: 1558, y: 736, width: 70, height: 263 },
        operating_profit: { x: 1929, y: 426, width: 70, height: 4 },
        operating_expenses: { x: 1929, y: 638, width: 70, height: 97 },
        other: { x: 2147, y: 426, width: 70, height: 7 },
        net_profit: { x: 2299, y: 339, width: 71, height: 9 },
        tax: { x: 2299, y: 594, width: 71, height: 3 },
        sga: { x: 2299, y: 837, width: 71, height: 60 },
        rnd: { x: 2299, y: 1165, width: 71, height: 38 },
      },
      labels: {
        device_experience: {
          blocks: [
            {
              x: 472, top: 375, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+8% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 407, top: 515, anchor: 'end', lineGap: 11.5, semanticRole: 'source-measured-label',
              lines: [
                { text: 'Device eXperience', size: 36, weight: 800, color: BLUE },
                { text: 'Digital TVs', size: 28, weight: 400, color: NOTE },
                { text: 'Refrigerators', size: 28, weight: 400, color: NOTE },
                { text: 'Mobile phones', size: 28, weight: 400, color: NOTE },
                { text: 'Communication systems', size: 28, weight: 400, color: NOTE, textLength: 351 },
              ],
            },
          ],
        },
        device_solutions: {
          blocks: [
            {
              x: 469, top: 802, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+8% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 411, top: 915, anchor: 'end', lineGap: 6.5, semanticRole: 'source-measured-label',
              lines: [
                { text: 'Device Solutions', size: 36, weight: 800, color: BLUE, textLength: 314 },
                { text: 'Memory, Foundry,', size: 28, weight: 400, color: NOTE },
                { text: '& System LSI', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        samsung_display: {
          blocks: [
            {
              x: 469, top: 1040, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+8% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        harman: {
          blocks: [
            {
              x: 471, top: 1228, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+8% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        segment_sales: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1212, top: 424, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales', size: 40, weight: 800, color: BLUE },
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '(10%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1208.5, top: 1126.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Eliminations', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1590, top: 319, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '28% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1590.5, top: 1024.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800, color: RED_LABEL },
                { text: 'sales', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1966.5, top: 248, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '1% margin', size: 28, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1961.5, top: 764.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2184.5, top: 440, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2397, top: 315, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '2% margin', size: 28, weight: 400, color: NOTE },
                { text: '(31pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2487.5, top: 567.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2491, top: 835, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
                { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2491.5, top: 1148.5, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'development', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 46.2, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 13.7, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 6.6, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.2, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 69.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 63.8, notes: ['(10%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -6.0, valueText: '(6.0T)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 17.7, notes: ['28% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 46.0, valueText: '(46.0T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['1% margin', '(5pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.1, valueText: '(17.1T)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.2 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['2% margin', '(31pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3, valueText: '(0.3T)' },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: ['Sales, general', '& admin'], value: 10.5, valueText: '(10.5T)' },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: ['Research &', 'development'], value: 6.6, valueText: '(6.6T)' },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 46.2, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 13.7, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 6.6, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.2, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 63.8, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 6.0, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 17.7, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 46.0, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.1, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 0.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 10.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 6.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.2, targetOrder: 1 },
    ],

    i18n: {
      preservedAnnotationText: ['SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2023 财年第一季度',
        meta: {
          title: 'Samsung 2023 财年第一季度利润表',
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
        },
        nodes: {
          device_experience: { label: '设备体验', notes: ['同比 +8%'] },
          device_solutions: { label: '设备解决方案', notes: ['同比 +8%'] },
          samsung_display: { label: '三星显示', notes: ['同比 +8%'] },
          harman: { label: '哈曼', notes: ['同比 +8%'] },
          revenue: { label: '销售额', notes: ['同比 (10%)'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 28%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (31 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政' },
          rnd: { label: '研发' },
        },
      },
    },
  });
})();

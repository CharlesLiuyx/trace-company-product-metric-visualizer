/* ====================================================================
 * Samsung - Q2 FY23 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q2-fy23.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * Segment order (top -> bottom): Device eXperience, Device Solutions,
 * Samsung Display, Harman. Native scale is about 6.13 px/T.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
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

  const icon = (name, x, y, scale = 1, clearanceId = '', pairedNode = '') => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand"${clearanceId ? ` data-annotation-clearance="${clearanceId}"` : ''}${pairedNode ? ` data-annotation-paired-node="${pairedNode}"` : ''}>${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="198" y="287" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 672, 328.9, 1.06)}
      ${icon('samsungDeviceExperienceCluster', 72, 421, 1.03)}
      ${icon('samsungDeviceSolutionsChipCluster', 283, 786, 1.05)}
      ${icon('samsungDisplayWordmark', 88, 1092.8, 0.96, 'samsung-display-wordmark', 'samsung_display')}
      ${icon('samsungHarmanWordmark', 88, 1243.14, 0.88, 'harman-wordmark', 'harman')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q2-fy23',
    name: 'Samsung · Q2 FY23',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q2-fy23.png', width: 2667, height: 1500 },
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
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 6.13,
      nodes: {
        device_experience: { x: 431, y: 466, width: 72, height: 246 },
        device_solutions: { x: 431, y: 864, width: 72, height: 89 },
        samsung_display: { x: 431, y: 1099, width: 72, height: 39 },
        harman: { x: 431, y: 1319, width: 72, height: 20 },
        segment_sales: { x: 805, y: 620, width: 72, height: 399 },
        revenue: { x: 1179, y: 645, width: 72, height: 368 },
        eliminations: { x: 1184, y: 1145, width: 72, height: 28 },
        gross_profit: { x: 1548, y: 537, width: 72, height: 110 },
        cost_of_revenue: { x: 1555, y: 833, width: 72, height: 255 },
        operating_profit: { x: 1929, y: 412, width: 72, height: 3 },
        operating_expenses: { x: 1929, y: 632, width: 72, height: 107 },
        other: { x: 2153, y: 469, width: 72, height: 3 },
        net_profit: { x: 2299, y: 353, width: 72, height: 9 },
        sga: { x: 2299, y: 732, width: 72, height: 63 },
        rnd: { x: 2299, y: 978, width: 72, height: 42 },
      },
      labels: {
        device_experience: {
          blocks: [
            {
              x: 467, top: 377, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '(10%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 378, top: 517, anchor: 'end', lineGap: 11, semanticRole: 'side-description',
              lines: [
                { text: 'Device eXperience', size: 36, weight: 800, color: BLUE },
                { text: 'Digital TVs', size: 28, weight: 400, color: NOTE },
                { text: 'Refrigerators', size: 28, weight: 400, color: NOTE },
                { text: 'Mobile phones', size: 28, weight: 400, color: NOTE },
                { text: 'Communication systems', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        device_solutions: {
          blocks: [
            {
              x: 467, top: 774, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '(48%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 385, top: 898, anchor: 'end', lineGap: 9, semanticRole: 'side-description',
              lines: [
                { text: 'Device Solutions', size: 36, weight: 800, color: BLUE },
                { text: 'Memory, Foundry,', size: 28, weight: 400, color: NOTE },
                { text: '& System LSI', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        samsung_display: {
          blocks: [
            {
              x: 467, top: 1007, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '(16%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        harman: {
          blocks: [
            {
              x: 467, top: 1231, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+17% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        segment_sales: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1214, top: 502, anchor: 'middle', lineGap: 10,
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
              x: 1215, top: 1197, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Eliminations', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1578, top: 353, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '31% margin', size: 28, weight: 400, color: NOTE },
                { text: '(9pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1590, top: 1108, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1965, top: 231, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '1% margin', size: 28, weight: 400, color: NOTE },
                { text: '(17pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1962, top: 764, anchor: 'middle', lineGap: 8,
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
              x: 2191, top: 495, anchor: 'middle', lineGap: 7,
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
              x: 2399, top: 314, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '3% margin', size: 28, weight: 400, color: NOTE },
                { text: '(12pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2515, top: 731, anchor: 'middle', lineGap: 8,
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
              x: 2516, top: 965, anchor: 'middle', lineGap: 8,
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

    nonNodeMetrics: [
      { id: 'tax', representation: 'data-only' },
    ],

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 40.2, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 14.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 6.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 64.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 60.0, valueText: '60.0T', notes: ['(10%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -4.9, valueText: '(4.9T)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 18.4, notes: ['31% margin', '(9pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 41.7, valueText: '(41.7T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, notes: ['1% margin', '(17pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.7, valueText: '(17.7T)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.0, valueText: '1.0T' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.7, notes: ['3% margin', '(12pp) Y/Y'] },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: ['Sales, general', '& admin'], value: 10.5, valueText: '(10.5T)' },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: ['Research &', 'development'], value: 7.2, valueText: '(7.2T)' },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 40.2, sourceWidth: 246, targetWidth: 245, y0: 589, y1: 742.5, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 14.7, sourceWidth: 89, targetWidth: 90, y0: 908.5, y1: 910, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 6.5, sourceWidth: 39, targetWidth: 42, y0: 1118.5, y1: 976, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.5, sourceWidth: 20, targetWidth: 22, y0: 1329, y1: 1008, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 60.0, sourceWidth: 371, targetWidth: 368, y0: 805.5, y1: 829, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 4.9, sourceWidth: 28, targetWidth: 28, y0: 1005, y1: 1159, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 18.4, sourceWidth: 113, targetWidth: 110, y0: 701.5, y1: 592, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 41.7, sourceWidth: 255, targetWidth: 255, y0: 885.5, y1: 960.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.7, sourceWidth: 4, targetWidth: 3, y0: 539, y1: 413.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.7, sourceWidth: 106, targetWidth: 107, y0: 594, y1: 685.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.7, sourceWidth: 3, targetWidth: 4, y0: 413.5, y1: 355, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.0, sourceWidth: 3, targetWidth: 4, y0: 470.5, y1: 360, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 10.5, sourceWidth: 64, targetWidth: 63, y0: 664, y1: 763.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.2, sourceWidth: 43, targetWidth: 42, y0: 717.5, y1: 999, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['In KRW trillion', 'SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2023 财年第二季度',
        meta: {
          title: 'Samsung 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
        },
        nodes: {
          device_experience: { label: '设备体验' },
          device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' },
          harman: { label: '哈曼' },
          revenue: { label: '销售额', notes: ['同比 (10%)'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 31%', '同比 (9 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (17 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (12 个百分点)'] },
          sga: { label: '销售、一般及行政' },
          rnd: { label: '研发' },
        },
      },
    },
  });
})();

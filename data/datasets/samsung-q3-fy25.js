/* ====================================================================
 * Samsung - Q3 FY25 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q3-fy25.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * Segment order (top -> bottom): Device eXperience, Device Solutions,
 * Samsung Display, Harman. Scale 3.47 px/T from measured node bars.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#777777';
  const BLUE = '#2029a5';
  const BLUE_LINK = '#8f98cf';
  const GREEN = '#25a126';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cc98';
  const RED = '#d60000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e38283';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="198" y="272" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 672, 338, 1.06)}
      ${icon('samsungDeviceExperienceCluster', 72, 421, 1.03)}
      ${icon('samsungDeviceSolutionsChipCluster', 283, 736, 1.05)}
      ${icon('samsungDisplayWordmark', 120, 1075, 0.96)}
      ${icon('samsungHarmanWordmark', 118, 1158, 0.88)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q3-fy25',
    name: 'Samsung · Q3 FY25',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q3-fy25.png', width: 2667, height: 1500 },
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
      scale: 3.47,
      nodes: {
        device_experience: { x: 435, y: 527, width: 72, height: 168 },
        device_solutions: { x: 435, y: 842, width: 72, height: 115 },
        samsung_display: { x: 435, y: 1084, width: 72, height: 27 },
        harman: { x: 435, y: 1257, width: 72, height: 13 },
        segment_sales: { x: 809, y: 690, width: 72, height: 329 },
        eliminations: { x: 1183, y: 1222, width: 72, height: 24 },
        revenue: { x: 1183, y: 805, width: 72, height: 303 },
        gross_profit: { x: 1556, y: 688, width: 72, height: 116 },
        cost_of_revenue: { x: 1556, y: 1028, width: 72, height: 184 },
        operating_profit: { x: 1930, y: 575, width: 72, height: 42 },
        operating_expenses: { x: 1930, y: 869, width: 72, height: 74 },
        other: { x: 2178, y: 574, width: 72, height: 4 },
        net_profit: { x: 2304, y: 465, width: 72, height: 42 },
        tax: { x: 2304, y: 730, width: 72, height: 3 },
        sga: { x: 2304, y: 976, width: 72, height: 42 },
        rnd: { x: 2304, y: 1196, width: 72, height: 30 },
      },
      labels: {
        device_experience: {
          blocks: [
            {
              x: 471, top: 438, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+8% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 408, top: 522, anchor: 'end', lineGap: 8, semanticRole: 'side-description',
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
              x: 471, top: 752, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+13% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 413, top: 846, anchor: 'end', lineGap: 9, semanticRole: 'side-description',
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
              x: 474, top: 996, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+1% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        harman: {
          blocks: [
            {
              x: 471, top: 1168, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+12% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        segment_sales: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1219, top: 660, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales', size: 40, weight: 800, color: BLUE },
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1219, top: 1270, anchor: 'middle', lineGap: 8,
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
              x: 1592, top: 507, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '39% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1592, top: 1237, anchor: 'middle', lineGap: 8,
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
              x: 1966, top: 394, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '14% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1966, top: 964, anchor: 'middle', lineGap: 8,
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
              x: 2214, top: 596, anchor: 'middle', lineGap: 7,
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
              x: 2401, top: 425, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '14% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2492, top: 704, anchor: 'middle', lineGap: 8,
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
              x: 2515, top: 937, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
                { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2516, top: 1173, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'development', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 48.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 33.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 8.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 4.0, valueText: '4.0T', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 93.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -7.5, valueText: '(7.5T)' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 86.1, notes: ['+9% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 33.5, notes: ['39% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 52.6, valueText: '(52.6T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 12.2, notes: ['14% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.3, valueText: '(21.3T)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.4 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 12.2, notes: ['14% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.3, valueText: '(1.3T)' },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: ['Sales, general', '& admin'], value: 12.5, notes: ['15% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: ['Research &', 'development'], value: 8.8, notes: ['10% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 48.4, sourceWidth: 168, targetWidth: 169, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 33.1, sourceWidth: 115, targetWidth: 116, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 8.1, sourceWidth: 27, targetWidth: 29, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 4.0, sourceWidth: 13, targetWidth: 15, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 86.1, sourceWidth: 303, targetWidth: 303, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 7.5, sourceWidth: 26, targetWidth: 24, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 33.5, sourceWidth: 116, targetWidth: 116, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 52.6, sourceWidth: 187, targetWidth: 184, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 12.2, sourceWidth: 42, targetWidth: 42, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 21.3, sourceWidth: 74, targetWidth: 74, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 10.9, sourceWidth: 39, targetWidth: 39, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.3, sourceWidth: 3, targetWidth: 3, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 12.5, sourceWidth: 43, targetWidth: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.8, sourceWidth: 31, targetWidth: 29, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.4, sourceWidth: 4, targetWidth: 3, targetOrder: 1, y0: 576 },
    ],

    i18n: {
      preservedAnnotationText: ['SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2025 财年第三季度',
        meta: {
          title: 'Samsung 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
        },
        nodes: {
          device_experience: { label: '设备体验' },
          device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' },
          harman: { label: '哈曼' },
          eliminations: { label: '抵销' },
          revenue: { label: '销售额', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            samsung_display: {
              blocks: [
                {
                  x: 474, top: 996, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 +1%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            harman: {
              blocks: [
                {
                  x: 471, top: 1168, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 +12%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();

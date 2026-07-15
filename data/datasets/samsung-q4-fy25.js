/* ====================================================================
 * Samsung - Q4 FY25 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q4-fy25.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * Segment order (top -> bottom): Device eXperience, Device Solutions,
 * Samsung Display, Harman. Scale 3.15 px/T from measured node bars.
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
    key: 'samsung-q4-fy25',
    name: 'Samsung · Q4 FY25',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q4-fy25.png', width: 2667, height: 1500 },
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
      scale: 3.15,
      nodes: {
        device_experience: { x: 435, y: 539, width: 72, height: 140 },
        device_solutions: { x: 435, y: 828, width: 72, height: 139 },
        samsung_display: { x: 435, y: 1089, width: 72, height: 30 },
        harman: { x: 435, y: 1250, width: 72, height: 14 },
        segment_sales: { x: 809, y: 696, width: 72, height: 323 },
        eliminations: { x: 1183, y: 1229, width: 72, height: 27 },
        revenue: { x: 1182, y: 802, width: 72, height: 296 },
        gross_profit: { x: 1556, y: 693, width: 72, height: 139 },
        cost_of_revenue: { x: 1556, y: 1021, width: 72, height: 156 },
        operating_profit: { x: 1930, y: 577, width: 72, height: 63 },
        operating_expenses: { x: 1930, y: 850, width: 72, height: 76 },
        other: { x: 2190, y: 581, width: 72, height: 3 },
        net_profit: { x: 2304, y: 474, width: 72, height: 62 },
        tax: { x: 2304, y: 764, width: 72, height: 4 },
        sga: { x: 2304, y: 952, width: 72, height: 42 },
        rnd: { x: 2304, y: 1187, width: 72, height: 34 },
      },
      labels: {
        device_experience: {
          blocks: [
            {
              x: 471, top: 450, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+9% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 408, top: 522, anchor: 'end', lineGap: 8,
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
              x: 471, top: 739, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+46% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 408, top: 846, anchor: 'end', lineGap: 9,
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
              x: 474, top: 1000, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+17% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        harman: {
          blocks: [
            {
              x: 471, top: 1161, anchor: 'middle', lineGap: 8,
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
              x: 1218, top: 660, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales', size: 40, weight: 800, color: BLUE },
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1218, top: 1279, anchor: 'middle', lineGap: 8,
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
              x: 1592, top: 515, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '47% margin', size: 28, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1592, top: 1200, anchor: 'middle', lineGap: 8,
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
              x: 1966, top: 397, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '21% margin', size: 28, weight: 400, color: NOTE },
                { text: '+13pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1966, top: 949, anchor: 'middle', lineGap: 8,
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
              x: 2226, top: 592, anchor: 'middle', lineGap: 7,
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
              x: 2420, top: 460, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '21% margin', size: 28, weight: 400, color: NOTE },
                { text: '+11pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2508, top: 733, anchor: 'middle', lineGap: 8,
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
              x: 2508, top: 924, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
                { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2508, top: 1156, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'development', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '12% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 44.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 44.0, valueText: '44.0T', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 9.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 4.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 102.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 8.6, valueText: '(8.6T)' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 93.8, notes: ['+24% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 44.2, notes: ['47% margin', '+10pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 49.6, valueText: '(49.6T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 20.0, valueText: '20.0T', notes: ['21% margin', '+13pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 24.2 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.0, valueText: '1.0T' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 19.6, notes: ['21% margin', '+11pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.4, valueText: '(1.4B)' },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: ['Sales, general', '& admin'], value: 13.3, notes: ['14% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: ['Research &', 'development'], value: 10.9, notes: ['12% of revenue', '(2pp) Y/Y'] },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 44.3, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 44.0, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 9.5, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 4.6, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 93.8, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 8.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 44.2, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 49.6, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 20.0, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 24.2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 18.6, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.4, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 13.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 10.9, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.0, targetOrder: 1 },
    ],

    i18n: {
      preservedAnnotationText: ['SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2025 财年第四季度',
        meta: {
          title: 'Samsung 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          device_experience: { label: '设备体验' },
          device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' },
          harman: { label: '哈曼' },
          eliminations: { label: '抵销' },
          revenue: { label: '销售额', notes: ['同比 +24%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +10 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 +13 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +11 个百分点'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 (2 个百分点)'] },
        },
        layout: {
          labels: {
            samsung_display: {
              blocks: [
                {
                  x: 474, top: 1000, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 +17%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            harman: {
              blocks: [
                {
                  x: 471, top: 1161, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 +17%', size: 27, weight: 400, color: NOTE },
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

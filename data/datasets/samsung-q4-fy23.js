/* ====================================================================
 * Samsung - Q4 FY23 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q4-fy23.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * Segment order (top -> bottom): Device eXperience, Device Solutions,
 * Samsung Display, Harman. Scale 4.23 px/T from measured node bars.
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

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="198" y="272" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 642, 370, 1.06)}
      ${icon('samsungDeviceExperienceCluster', 42, 430, 1.03)}
      ${icon('samsungDeviceSolutionsChipCluster', 213, 780, 1.05)}
      ${icon('samsungDisplayWordmark', 95, 1100, 0.96)}
      ${icon('samsungHarmanWordmark', 55, 1210, 0.88)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q4-fy23',
    name: 'Samsung · Q4 FY23',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q4-fy23.png', width: 2667, height: 1500 },
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
      scale: 4.23,
      nodes: {
        device_experience: { x: 435, y: 557, width: 72, height: 168 },
        device_solutions: { x: 435, y: 877, width: 72, height: 92 },
        samsung_display: { x: 435, y: 1121, width: 72, height: 41 },
        harman: { x: 435, y: 1321, width: 72, height: 17 },
        segment_sales: { x: 809, y: 749, width: 72, height: 319 },
        revenue: { x: 1178, y: 804, width: 72, height: 289 },
        eliminations: { x: 1185, y: 1219, width: 72, height: 29 },
        gross_profit: { x: 1547, y: 687, width: 72, height: 92 },
        cost_of_revenue: { x: 1554, y: 995, width: 72, height: 195 },
        operating_profit: { x: 1930, y: 583, width: 72, height: 12 },
        operating_expenses: { x: 1930, y: 801, width: 72, height: 79 },
        tax_benefit: { x: 2190, y: 438, width: 72, height: 12 },
        other: { x: 2183, y: 578, width: 72, height: 1 },
        net_profit: { x: 2304, y: 482, width: 72, height: 27 },
        sga: { x: 2304, y: 922, width: 72, height: 47 },
        rnd: { x: 2304, y: 1211, width: 72, height: 31 },
      },
      labels: {
        device_experience: {
          blocks: [
            {
              x: 471, top: 472, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '(7%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 378, top: 522, anchor: 'end', lineGap: 8, semanticRole: 'side-description',
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
              x: 471, top: 787, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+8% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 385, top: 896, anchor: 'end', lineGap: 9, semanticRole: 'side-description',
              lines: [
                { text: 'Device Solutions', size: 36, weight: 800, color: BLUE },
                { text: 'Memory, Foundry,', size: 28, weight: 400, color: NOTE },
                { text: '& System LSI', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        samsung_display: {
          blocks: [{
            x: 474, top: 1029, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 38, weight: 400, color: BLUE },
              { text: '+4% Y/Y', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
        harman: {
          blocks: [{
            x: 471, top: 1231, anchor: 'middle', lineGap: 8,
            lines: [
              { text: '$value', size: 38, weight: 400, color: BLUE },
              { text: '(58%) Y/Y', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
        segment_sales: { blocks: [] },
        revenue: {
          blocks: [{
            x: 1215, top: 660, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Sales', size: 40, weight: 800, color: BLUE },
              { text: '$value', size: 39, weight: 400, color: BLUE },
              { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        eliminations: {
          blocks: [{
            x: 1219, top: 1270, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Eliminations', size: 32, weight: 800, color: RED_LABEL },
              { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1583, top: 501, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              { text: '32% margin', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1590, top: 1212, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Cost of', size: 36, weight: 800, color: RED_LABEL },
              { text: 'revenue', size: 36, weight: 800, color: RED_LABEL },
              { text: '$value', size: 35, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1966, top: 347, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Operating', size: 40, weight: 800, color: GREEN_LABEL },
              { text: 'profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              { text: '4% margin', size: 28, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1966, top: 899, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
              { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
              { text: '$value', size: 35, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        tax_benefit: {
          blocks: [{
            x: 2226, top: 353, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Tax benefit', size: 31, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
            ],
          }],
        },
        other: {
          blocks: [{
            x: 2223, top: 599, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2401, top: 448, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              { text: '9% margin', size: 28, weight: 400, color: NOTE },
              { text: '25pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: 2515, top: 889, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
              { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: 2516, top: 1165, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
              { text: 'development', size: 31, weight: 800, color: RED_LABEL },
              { text: '$value', size: 30, weight: 400, color: RED_LABEL },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 39.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 21.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 9.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 74.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 67.8, notes: ['(4%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -7.0, valueText: '(7.0T)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 21.7, notes: ['32% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 46.1, valueText: '(46.1T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 2.8, notes: ['4% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 18.8 },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: 'Tax benefit', value: 2.8 },
      { id: 'other', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.7 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 6.3, notes: ['9% margin', '25pp) Y/Y'] },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: ['Sales, general', '& admin'], value: 11.3, valueText: '(11.3T)' },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: ['Research &', 'development'], value: 7.6, valueText: '(7.6T)' },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 39.6, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 21.7, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 9.7, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.9, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 67.8, targetWidth: 289, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 7.0, targetWidth: 29, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 21.7, sourceWidth: 92, targetWidth: 92, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 46.1, sourceWidth: 197, targetWidth: 195, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.8, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 18.8, targetWidth: 79, sourceOrder: 1 },
      { source: 'tax_benefit', target: 'net_profit', value: 2.8, sourceWidth: 12, targetWidth: 12, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.8, sourceWidth: 12, targetWidth: 12, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 0.7, sourceWidth: 1, targetWidth: 3, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 11.3, sourceWidth: 47, targetWidth: 47, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.6, sourceWidth: 32, targetWidth: 31, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2023 财年第四季度',
        meta: {
          title: 'Samsung 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
        },
        nodes: {
          device_experience: { label: '设备体验' },
          device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' },
          harman: { label: '哈曼' },
          revenue: { label: '销售额', notes: ['同比 (4%)'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收收益' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 25 个百分点)'] },
          sga: { label: '销售、一般及行政' },
          rnd: { label: '研发' },
        },
        layout: {
          labels: {
            samsung_display: {
              blocks: [{
                x: 474, top: 1029, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '$value', size: 38, weight: 400, color: BLUE },
                  { text: '同比 +4%', size: 27, weight: 400, color: NOTE },
                ],
              }],
            },
            harman: {
              blocks: [{
                x: 471, top: 1231, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '$value', size: 38, weight: 400, color: BLUE },
                  { text: '同比 (58%)', size: 27, weight: 400, color: NOTE },
                ],
              }],
            },
            net_profit: {
              blocks: [{
                x: 2401, top: 448, anchor: 'start', lineGap: 9,
                lines: [
                  { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                  { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                  { text: '利润率 9%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 25 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
          },
        },
      },
    },
  });
})();

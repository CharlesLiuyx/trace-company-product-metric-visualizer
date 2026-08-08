/* ====================================================================
 * Samsung - Q2 FY26 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q2-fy26.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * Segment order (top -> bottom): Device eXperience, Device Solutions,
 * Samsung Display, Harman. Scale 1.68 px/T from measured node bars.
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
      ${icon('samsungDeviceExperienceCluster', 72, 360, 1.03)}
      ${icon('samsungDeviceSolutionsChipCluster', 283, 736, 1.05)}
      ${icon('samsungDisplayWordmark', 120, 1108, 0.96)}
      ${icon('samsungHarmanWordmark', 118, 1158, 0.88)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q2-fy26',
    name: 'Samsung · Q2 FY26',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q2-fy26.png', width: 2667, height: 1500 },
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
      scale: 1.69,
      nodes: {
        device_experience: { x: 435, y: 477, width: 72, height: 81 },
        device_solutions: { x: 435, y: 738, width: 72, height: 216 },
        samsung_display: { x: 435, y: 1120, width: 72, height: 13 },
        harman: { x: 435, y: 1283, width: 72, height: 8 },
        segment_sales: { x: 809, y: 719, width: 72, height: 318 },
        revenue: { x: 1183, y: 782, width: 72, height: 290 },
        eliminations: { x: 1183, y: 1203, width: 72, height: 27 },
        gross_profit: { x: 1556, y: 714, width: 72, height: 202 },
        cost_of_revenue: { x: 1556, y: 1059, width: 72, height: 88 },
        operating_profit: { x: 1930, y: 605, width: 72, height: 151 },
        operating_expenses: { x: 1930, y: 932, width: 72, height: 50 },
        other: { x: 2190, y: 659, width: 72, height: 8 },
        net_profit: { x: 2304, y: 489, width: 72, height: 122 },
        tax: { x: 2304, y: 830, width: 72, height: 39 },
        rnd: { x: 2304, y: 1011, width: 72, height: 27 },
        sga: { x: 2304, y: 1208, width: 72, height: 23 },
      },
      labels: {
        device_experience: {
          blocks: [
            {
              x: 471, top: 392, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+10% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 378, top: 448, anchor: 'end', lineGap: 8, semanticRole: 'side-description',
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
              x: 471, top: 650, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+357% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 385, top: 857, anchor: 'end', lineGap: 9, semanticRole: 'side-description',
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
              x: 471, top: 1033, anchor: 'middle', lineGap: 8,
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
              x: 471, top: 1194, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+19% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        segment_sales: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1219, top: 642, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales', size: 40, weight: 800, color: BLUE },
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+130% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1219, top: 1253, anchor: 'middle', lineGap: 8,
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
              x: 1592, top: 531, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '70% margin', size: 28, weight: 400, color: NOTE },
                { text: '+35pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1592, top: 1170, anchor: 'middle', lineGap: 8,
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
              x: 1975, top: 426, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '52% margin', size: 28, weight: 400, color: NOTE },
                { text: '+46pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1958, top: 1006, anchor: 'middle', lineGap: 8,
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
              x: 2226, top: 689, anchor: 'middle', lineGap: 7,
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
              x: 2401, top: 480, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '42% margin', size: 28, weight: 400, color: NOTE },
                { text: '+35pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2492, top: 816, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2516, top: 970, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'development', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '9% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2515, top: 1169, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
                { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 48.0, valueText: '48.0T', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 127.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 7.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 4.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 187.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 171.5, notes: ['+130% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -16.1, valueText: '(16.1T)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 119.3, notes: ['70% margin', '+35pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 52.2, valueText: '(52.2T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 89.5, notes: ['52% margin', '+46pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 29.8, valueText: '(29.8T)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 4.9 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 71.6, notes: ['42% margin', '+35pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 22.8, valueText: '(22.8T)' },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: ['Research &', 'development'], value: 16.0, valueText: '(16.0T)', notes: ['9% of revenue', '(3pp) Y/Y'] },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: ['Sales, general', '& admin'], value: 13.8, notes: ['8% of revenue', '(8pp) Y/Y'] },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 48.0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 127.5, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 7.5, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 4.6, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 171.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 16.1, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 119.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 52.2, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 89.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 29.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 66.7, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 22.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 16.0, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 13.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 4.9, sourceOrder: 0, targetOrder: 1 },
    ],

    i18n: {
      preservedAnnotationText: ['In KRW trillion', 'SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2026 财年第二季度',
        meta: {
          title: 'Samsung 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
        },
        nodes: {
          device_experience: { label: '设备体验' },
          device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' },
          harman: { label: '哈曼' },
          revenue: { label: '销售额', notes: ['同比 +130%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 70%', '同比 +35 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 52%', '同比 +46 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 42%', '同比 +35 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 (3 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 8%', '同比 (8 个百分点)'] },
        },
        layout: {
          labels: {
            samsung_display: {
              blocks: [
                {
                  x: 471, top: 1033, anchor: 'middle', lineGap: 8,
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
                  x: 471, top: 1194, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 +19%', size: 27, weight: 400, color: NOTE },
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

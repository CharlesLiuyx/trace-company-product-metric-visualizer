/* ====================================================================
 * Samsung - Q2 FY24 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q2-fy24.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * Segment order (top -> bottom): Device eXperience, Device Solutions,
 * Samsung Display, Harman. Scale 3.08 px/T from measured node bars.
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
      ${icon('samsungDeviceSolutionsChipCluster', 283, 696, 1.05)}
      ${icon('samsungDisplayWordmark', 120, 1038, 0.96)}
      ${icon('samsungHarmanWordmark', 118, 1158, 0.88)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q2-fy24',
    name: 'Samsung · Q2 FY24',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q2-fy24.png', width: 2667, height: 1500 },
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
      scale: 3.08,
      nodes: {
        device_experience: { x: 435, y: 492, width: 72, height: 130 },
        device_solutions: { x: 435, y: 785, width: 72, height: 88 },
        samsung_display: { x: 435, y: 1049, width: 72, height: 24 },
        harman: { x: 435, y: 1258, width: 72, height: 12 },
        segment_sales: { x: 809, y: 756, width: 72, height: 253 },
        revenue: { x: 1178, y: 812, width: 72, height: 230 },
        eliminations: { x: 1180, y: 1173, width: 72, height: 24 },
        gross_profit: { x: 1549, y: 676, width: 72, height: 93 },
        cost_of_revenue: { x: 1557, y: 1015, width: 72, height: 137 },
        operating_profit: { x: 1933, y: 557, width: 72, height: 32 },
        operating_expenses: { x: 1930, y: 834, width: 72, height: 60 },
        other: { x: 2191, y: 533, width: 72, height: 4 },
        net_profit: { x: 2304, y: 443, width: 72, height: 30 },
        tax: { x: 2304, y: 693, width: 72, height: 6 },
        sga: { x: 2304, y: 930, width: 72, height: 35 },
        rnd: { x: 2304, y: 1181, width: 72, height: 25 },
      },
      labels: {
        device_experience: {
          blocks: [
            {
              x: 471, top: 406, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+5% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 408, top: 433, anchor: 'end', lineGap: 12, semanticRole: 'side-description',
              lines: [
                { text: 'Device eXperience', size: 36, weight: 800, color: BLUE },
                { text: 'Digital TVs', size: 28, weight: 400, color: NOTE },
                { text: 'Refrigerators', size: 28, weight: 400, color: NOTE },
                { text: 'Mobile phones', size: 28, weight: 400, color: NOTE },
                { text: 'Communication systems', size: 28, weight: 400, color: NOTE, textLength: 344 },
              ],
            },
          ],
        },
        device_solutions: {
          blocks: [
            {
              x: 471, top: 701, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+94% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 408, top: 816, anchor: 'end', lineGap: 9, semanticRole: 'side-description',
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
              x: 474, top: 964, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+18% Y/Y', size: 27, weight: 400, color: NOTE },
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
                { text: '+3% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        segment_sales: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1215, top: 671, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales', size: 40, weight: 800, color: BLUE },
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+23% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1213, top: 1220, anchor: 'middle', lineGap: 8,
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
              x: 1590, top: 493, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '40% margin', size: 28, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1590, top: 1171, anchor: 'middle', lineGap: 8,
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
              x: 1967, top: 374, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '14% margin', size: 28, weight: 400, color: NOTE },
                { text: '+13pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1961, top: 911, anchor: 'middle', lineGap: 8,
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
              x: 2227, top: 558, anchor: 'middle', lineGap: 7,
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
              x: 2401, top: 401, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '13% margin', size: 28, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2493, top: 658, anchor: 'middle', lineGap: 8,
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
              x: 2513, top: 1138, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'development', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '11% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2515, top: 895, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
                { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'device_experience', col: 0, order: 0, type: 'source', label: 'Device eXperience', value: 42.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_solutions', col: 0, order: 1, type: 'source', label: 'Device Solutions', value: 28.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 7.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 82.0, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 74.1, notes: ['+23% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -7.8, valueText: '(7.8T)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 29.8, notes: ['40% margin', '+10pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 44.3, valueText: '(44.3T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 10.5, notes: ['14% margin', '+13pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 19.3, valueText: '(19.3T)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.2 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 9.9, notes: ['13% margin', '+10pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.8, valueText: '(1.8T)' },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: ['Sales, general', '& admin'], value: 11.3, notes: ['15% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: ['Research &', 'development'], value: 8.1, notes: ['11% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'device_experience', target: 'segment_sales', value: 42.1, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_solutions', target: 'segment_sales', value: 28.6, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 7.7, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.6, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 74.1, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 7.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 29.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 44.3, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 10.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 19.3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 8.7, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 11.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.1, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.2, sourceOrder: 0, targetOrder: 1 },
    ],

    i18n: {
      preservedAnnotationText: ['In KRW trillion', 'SAMSUNG DISPLAY', 'A SAMSUNG COMPANY'],
      zh: {
        name: 'Samsung · 2024 财年第二季度',
        meta: {
          title: 'Samsung 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
        },
        nodes: {
          device_experience: { label: '设备体验' },
          device_solutions: { label: '设备解决方案' },
          samsung_display: { label: '三星显示' },
          harman: { label: '哈曼' },
          eliminations: { label: '抵销' },
          revenue: { label: '销售额', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +10 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +13 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +10 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 15%', '同比 (2 个百分点)'] },
        },
        layout: {
          labels: {
            device_experience: {
              blocks: [
                {
                  x: 471, top: 406, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 +5%', size: 27, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 408, top: 433, anchor: 'end', lineGap: 12, semanticRole: 'side-description',
                  lines: [
                    { text: '设备体验', size: 36, weight: 800, color: BLUE },
                    { text: '数字电视', size: 28, weight: 400, color: NOTE },
                    { text: '冰箱', size: 28, weight: 400, color: NOTE },
                    { text: '手机', size: 28, weight: 400, color: NOTE },
                    { text: '通信系统', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            device_solutions: {
              blocks: [
                {
                  x: 471, top: 701, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 +94%', size: 27, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 408, top: 816, anchor: 'end', lineGap: 9, semanticRole: 'side-description',
                  lines: [
                    { text: '设备解决方案', size: 36, weight: 800, color: BLUE },
                    { text: '存储器、晶圆代工、', size: 28, weight: 400, color: NOTE },
                    { text: '与 System LSI', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            samsung_display: {
              blocks: [
                {
                  x: 474, top: 964, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400, color: BLUE },
                    { text: '同比 +18%', size: 27, weight: 400, color: NOTE },
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
                    { text: '同比 +3%', size: 27, weight: 400, color: NOTE },
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

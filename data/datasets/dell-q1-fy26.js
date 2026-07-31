/* ====================================================================
 * Dell - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/dell-q1-fy26.png as a measured,
 * fixed-layout d3-sankey with the reusable SVG Dell wordmark.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#0075ba';
  const BLUE_LABEL = '#0074ba';
  const BLUE_LINK = '#85bad8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2390;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dell-q1-fy26',
    name: 'Dell - Q1 FY26',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2055,
      periodX: 1302,
      periodY: 1301,
      periodNoteY: 1343,
      logoWidth: 936,
      logoHeight: 205,
      logoY: 249,
      logoViewBox: '195 0 936 205',
      logoSvg: BUSINESS_ICONS.dellLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
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
      type: { name: 39, value: 39, note: 28, lineGap: 9 },
    },

    layout: {
      scale: 12.35,
      nodes: {
        server_networking: { x: 415, y: 555, width: 71, height: 76 },
        storage: { x: 415, y: 797, width: 71, height: 47 },
        isg: { x: 789, y: 659, width: 70, height: 126 },
        commercial: { x: 415, y: 985, width: 71, height: 136 },
        consumer: { x: 415, y: 1271, width: 71, height: 16 },
        csg: { x: 791, y: 1022, width: 70, height: 152 },
        other_revenue: { x: 786, y: 1379, width: 70, height: 5 },
        revenue: { x: 1165, y: 789, width: 70, height: 289 },
        gross_profit: { x: 1536, y: 659, width: 71, height: 59 },
        cost_of_revenue: { x: 1536, y: 945, width: 71, height: 227 },
        operating_profit: { x: 1910, y: 569, width: 71, height: 12 },
        operating_expenses: { x: 1910, y: 777, width: 71, height: 45 },
        net_profit: { x: 2283, y: 481, width: 71, height: 10 },
        tax: { x: 2283, y: 689, width: 71, height: 4 },
        other_expense: { x: 2283, y: 793, width: 71, height: 2 },
        sga: { x: 2283, y: 932, width: 71, height: 33 },
        rnd: { x: 2283, y: 1156, width: 71, height: 8 },
      },
      labels: {
        server_networking: {
          blocks: [
            {
              x: 448, top: 462, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 377, top: 550, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Server &', size: 38, weight: 800 },
                { text: 'Networking', size: 38, weight: 800 },
              ],
            },
          ],
        },
        storage: {
          blocks: [
            {
              x: 448, top: 704, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 377, top: 799, anchor: 'end', lines: [{ text: 'Storage', size: 38, weight: 800 }] },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 448, top: 883, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 377, top: 1032, anchor: 'end', lines: [{ text: 'Commercial', size: 38, weight: 800 }] },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 448, top: 1174, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(19%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 377, top: 1252, anchor: 'end', lines: [{ text: 'Consumer', size: 38, weight: 800 }] },
          ],
        },
        isg: {
          blocks: [{
            x: 824, top: 507, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        csg: {
          blocks: [{
            x: 826, top: 879, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'CSG (Client)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_revenue: {
          blocks: [{
            x: 821, top: 1235, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(47%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1200, top: 638, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1572, top: 478, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '21% margin', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1572, top: 1185, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Cost of', size: 38, weight: 800 },
              { text: 'revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1946, top: 386, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '5% margin', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1946, top: 839, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 36, weight: 800 },
              { text: 'expenses', size: 36, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2467, top: 427, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '4% margin', size: 28, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2467, top: 662, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Tax', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2467, top: 766, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: 2379, top: 932, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'SG&A ($3.0B)', size: 32, weight: 800 },
              { text: '13% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 1144, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'R&D ($0.8B)', size: 32, weight: 800 },
              { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'server_networking', col: 0, order: 0, type: 'source',
        label: ['Server &', 'Networking'], value: 6.3, notes: ['+16% Y/Y'] },
      { id: 'storage', col: 0, order: 1, type: 'source',
        label: 'Storage', value: 4.0, valueText: '$4.0B', notes: ['+6% Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source',
        label: 'ISG (Infrastructure)', value: 10.3, notes: ['+12% Y/Y'] },
      { id: 'commercial', col: 0, order: 2, type: 'source',
        label: 'Commercial', value: 11.0, valueText: '$11.0B', notes: ['+9% Y/Y'] },
      { id: 'consumer', col: 0, order: 3, type: 'source',
        label: 'Consumer', value: 1.5, notes: ['(19%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source',
        label: 'CSG (Client)', value: 12.5, notes: ['+5% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source',
        label: 'Other', value: 0.6, notes: ['(47%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 23.4, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 4.9, notes: ['21% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 18.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 1.2, notes: ['5% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 3.8 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 1.0, valueText: '$1.0B', notes: ['4% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.1 },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.1 },
      { id: 'sga', col: 6, order: 3, type: 'cost',
        label: 'SG&A', value: 3.0, valueText: '($3.0B)', notes: ['13% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost',
        label: 'R&D', value: 0.8, notes: ['3% of revenue', '+0pp Y/Y'] },
    ],

    links: [
      { source: 'server_networking', target: 'isg', value: 6.3, sourceWidth: 76, targetWidth: 77, targetOrder: 0 },
      { source: 'storage', target: 'isg', value: 4.0, sourceWidth: 47, targetWidth: 49, targetOrder: 1 },
      { source: 'isg', target: 'revenue', value: 10.3, sourceWidth: 126, targetWidth: 127, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 11.0, width: 136, targetOrder: 0 },
      { source: 'consumer', target: 'csg', value: 1.5, width: 16, targetOrder: 1 },
      { source: 'csg', target: 'revenue', value: 12.5, sourceWidth: 152, targetWidth: 154, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.6, sourceWidth: 5, targetWidth: 8, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.9, width: 59, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 18.4,
        sourceWidth: 230, targetWidth: 227, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.2,
        sourceWidth: 12, targetWidth: 12, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.8,
        sourceWidth: 47, targetWidth: 45, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.0,
        sourceWidth: 10, targetWidth: 10, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1,
        sourceWidth: 1, targetWidth: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.1,
        sourceWidth: 1, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 3.0,
        sourceWidth: 37, targetWidth: 33, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8,
        sourceWidth: 8, targetWidth: 8, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2026 财年第一季度',
        meta: {
          title: 'DELL 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 4 月',
          titleSize: 116,
          titleTextLength: 1960,
        },
        nodes: {
          server_networking: { label: ['服务器', '与网络'], notes: ['同比 +16%'] },
          storage: { label: '存储', notes: ['同比 +6%'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 +12%'] },
          commercial: { label: '商业', notes: ['同比 +9%'] },
          consumer: { label: '消费者', notes: ['同比 (19%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 +5%'] },
          other_revenue: { label: '其他', notes: ['同比 (47%)'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 21%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          sga: { label: '销售、一般及行政', notes: ['占收入 13%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            server_networking: {
              blocks: [
                {
                  x: 448, top: 462, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +16%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 377, top: 550, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '服务器', size: 38, weight: 800 },
                    { text: '与网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [{
                x: 2379, top: 916, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '销售、一般及行政', size: 30, weight: 800 },
                  { text: '($3.0B)', size: 30, weight: 800 },
                  { text: '占收入 13%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            rnd: {
              blocks: [{
                x: RIGHT_LABEL_X, top: 1144, anchor: 'start', lineGap: 9,
                lines: [
                  { text: '研发 ($0.8B)', size: 32, weight: 800 },
                  { text: '占收入 3%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
          },
        },
      },
    },
  });
})();

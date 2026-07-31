/* ====================================================================
 * Dell - Q1 FY25 income statement ($B)
 * Reconstructed from input/processed/dell-q1-fy25.png as a fixed
 * d3-sankey layout with the reusable SVG Dell wordmark.
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
  const RIGHT_LABEL_X = 2372;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dell-q1-fy25',
    name: 'Dell - Q1 FY25',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Apr. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2014,
      periodX: 1334,
      periodY: 1332,
      periodNoteY: 1369,
      logoWidth: 936,
      logoHeight: 205,
      logoY: 237,
      logoViewBox: '195 0 936 205',
      logoSvg: `<g transform="translate(144 0)">${BUSINESS_ICONS.dellLogo || ''}</g>`,
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
      scale: 14.2,
      nodes: {
        server_networking: { x: 417, y: 495, width: 71, height: 76 },
        storage: { x: 417, y: 702, width: 71, height: 51 },
        isg: { x: 791, y: 638, width: 70, height: 130 },
        commercial: { x: 417, y: 1023, width: 71, height: 144 },
        consumer: { x: 417, y: 1307, width: 71, height: 24 },
        csg: { x: 791, y: 998, width: 70, height: 169 },
        other_revenue: { x: 788, y: 1412, width: 70, height: 14 },
        revenue: { x: 1165, y: 772, width: 70, height: 316 },
        gross_profit: { x: 1541, y: 665, width: 70, height: 67 },
        cost_of_revenue: { x: 1539, y: 912, width: 70, height: 247 },
        operating_profit: { x: 1910, y: 568, width: 70, height: 11 },
        operating_expenses: { x: 1910, y: 800, width: 70, height: 54 },
        tax_benefit: { x: 2175, y: 510, width: 70, height: 4 },
        net_profit: { x: 2285, y: 444, width: 71, height: 11 },
        other_expense: { x: 2285, y: 712, width: 71, height: 2 },
        sga: { x: 2285, y: 933, width: 71, height: 42 },
        rnd: { x: 2285, y: 1168, width: 71, height: 9 },
      },
      labels: {
        server_networking: {
          blocks: [
            {
              x: 454, top: 404, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+42% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 371, top: 489, anchor: 'end', lineGap: 10,
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
              x: 454, top: 600, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+0% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 367, top: 701, anchor: 'end', lines: [{ text: 'Storage', size: 38, weight: 800 }] },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 454, top: 925, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 377, top: 1109, anchor: 'end', semanticRole: 'source-offset-label',
              lines: [{ text: 'Commercial', size: 38, weight: 800 }],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 452, top: 1205, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(15%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 367, top: 1291, anchor: 'end', semanticRole: 'source-offset-label',
              lines: [{ text: 'Consumer', size: 38, weight: 800 }],
            },
          ],
        },
        isg: {
          blocks: [{
            x: 826, top: 486, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(6%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        csg: {
          blocks: [{
            x: 826, top: 845, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'CSG (Client)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(0%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_revenue: {
          blocks: [{
            x: 826, top: 1258, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(22%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1200, top: 619, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1576, top: 485, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '22% margin', size: 28, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1574, top: 1171, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Cost of', size: 38, weight: 800 },
              { text: 'revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1946, top: 389, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '4% margin', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1946, top: 873, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 36, weight: 800 },
              { text: 'expenses', size: 36, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        tax_benefit: {
          blocks: [{
            x: 2210, top: 527, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Tax', size: 32, weight: 800 },
              { text: 'benefit', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2470, top: 400, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '4% margin', size: 28, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2469, top: 677, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 920, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'SG&A ($3.1B)', size: 32, weight: 800 },
              { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: RIGHT_LABEL_X + 6, top: 1152, anchor: 'start', lineGap: 9,
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
      { id: 'server_networking', col: 0, order: 0, type: 'source', label: ['Server &', 'Networking'], value: 5.466, notes: ['+42% Y/Y'] },
      { id: 'storage', col: 0, order: 1, type: 'source', label: 'Storage', value: 3.761, notes: ['+0% Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source', label: 'ISG (Infrastructure)', value: 9.227, notes: ['(6%) Y/Y'] },
      { id: 'commercial', col: 0, order: 2, type: 'source', label: 'Commercial', value: 10.154, notes: ['+3% Y/Y'] },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 1.813, notes: ['(15%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source', label: 'CSG (Client)', value: 11.967, notes: ['(0%) Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 1.05, notes: ['(22%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 22.244, notes: ['+6% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.806, notes: ['22% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 17.438 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.92, notes: ['4% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.886 },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: ['Tax', 'benefit'], value: 0.408 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.955, notes: ['4% margin', '+2pp Y/Y'] },
      { id: 'other_expense', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.373 },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 3.123, notes: ['14% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 0.763, notes: ['3% of revenue', '+0pp Y/Y'] },
    ],

    links: [
      { source: 'server_networking', target: 'isg', value: 5.466, width: 76, targetOrder: 0 },
      { source: 'storage', target: 'isg', value: 3.761, sourceWidth: 51, targetWidth: 54, targetOrder: 1 },
      { source: 'isg', target: 'revenue', value: 9.227, width: 130, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 10.154, width: 144, targetOrder: 0 },
      { source: 'consumer', target: 'csg', value: 1.813, width: 24, targetOrder: 1 },
      { source: 'csg', target: 'revenue', value: 11.967, width: 169, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 1.05, sourceWidth: 14, targetWidth: 17, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.806, width: 67, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 17.438, sourceWidth: 248, targetWidth: 247, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.92, width: 11, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.886, sourceWidth: 56, targetWidth: 54, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 0.547, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.373, sourceWidth: 4, targetWidth: 2, sourceOrder: 1 },
      { source: 'tax_benefit', target: 'net_profit', value: 0.408, sourceWidth: 4, targetWidth: 4, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 3.123, width: 42, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.763, sourceWidth: 12, targetWidth: 9, sourceOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2025 财年第一季度',
        meta: {
          title: 'DELL 2025 财年第一季度利润表',
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 4 月',
        },
        nodes: {
          server_networking: { label: ['服务器', '与网络'], notes: ['同比 +42%'] },
          storage: { label: '存储', notes: ['同比 +0%'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 (6%)'] },
          commercial: { label: '商业', notes: ['同比 +3%'] },
          consumer: { label: '消费者', notes: ['同比 (15%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 (0%)'] },
          other_revenue: { label: '其他', notes: ['同比 (22%)'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 22%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +2 个百分点'] },
          other_expense: { label: '其他' },
          sga: { label: '销售、一般及行政', notes: ['占收入 14%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            server_networking: {
              blocks: [
                {
                  x: 454, top: 404, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +42%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 371, top: 489, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '服务器', size: 38, weight: 800 },
                    { text: '与网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            tax_benefit: {
              blocks: [{
                x: 2210, top: 536, anchor: 'middle', lineGap: 9,
                lines: [
                  { text: '税收', size: 32, weight: 800 },
                  { text: '收益', size: 32, weight: 800 },
                  { text: '$value', size: 31, weight: 400 },
                ],
              }],
            },
            sga: {
              blocks: [{
                x: RIGHT_LABEL_X, top: 913, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '销售、一般及行政', size: 30, weight: 800 },
                  { text: '($3.1B)', size: 30, weight: 800 },
                  { text: '占收入 14%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            rnd: {
              blocks: [{
                x: RIGHT_LABEL_X, top: 1153, anchor: 'start', lineGap: 9,
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

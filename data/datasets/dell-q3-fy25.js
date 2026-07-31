/* ====================================================================
 * Dell - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/dell-q3-fy25.png as a fixed
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
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dell-q3-fy25',
    name: 'Dell - Q3 FY25',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Oct. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2014,
      periodX: 1297,
      periodY: 1304,
      periodNoteY: 1348,
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
      scale: 11.43,
      nodes: {
        server_networking: { x: 415, y: 548, width: 72, height: 84 },
        storage: { x: 415, y: 799, width: 72, height: 43 },
        isg: { x: 789, y: 643, width: 72, height: 129 },
        commercial: { x: 415, y: 994, width: 72, height: 115 },
        consumer: { x: 415, y: 1250, width: 72, height: 21 },
        csg: { x: 789, y: 1026, width: 72, height: 138 },
        other_revenue: { x: 789, y: 1371, width: 72, height: 8 },
        revenue: { x: 1163, y: 792, width: 72, height: 279 },
        gross_profit: { x: 1536, y: 643, width: 72, height: 59 },
        cost_of_revenue: { x: 1536, y: 945, width: 72, height: 218 },
        operating_profit: { x: 1910, y: 546, width: 72, height: 17 },
        operating_expenses: { x: 1910, y: 742, width: 72, height: 40 },
        net_profit: { x: 2283, y: 430, width: 72, height: 10 },
        other_expense: { x: 2283, y: 628, width: 72, height: 2 },
        tax: { x: 2283, y: 758, width: 72, height: 2 },
        sga: { x: 2283, y: 884, width: 72, height: 31 },
        rnd: { x: 2283, y: 1124, width: 72, height: 7 },
      },
      labels: {
        server_networking: {
          blocks: [
            {
              x: 451, top: 453, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+58% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 378, top: 541, anchor: 'end', lineGap: 10,
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
              x: 451, top: 700, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 378, top: 797, anchor: 'end', lines: [{ text: 'Storage', size: 38, weight: 800 }] },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 451, top: 896, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 378, top: 1031, anchor: 'end', lines: [{ text: 'Commercial', size: 38, weight: 800 }] },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 451, top: 1153, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(18%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 378, top: 1235, anchor: 'end', lines: [{ text: 'Consumer', size: 38, weight: 800 }] },
          ],
        },
        isg: {
          blocks: [{
            x: 825, top: 493, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        csg: {
          blocks: [{
            x: 825, top: 874, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'CSG (Client)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(1%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_revenue: {
          blocks: [{
            x: 825, top: 1220, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(41%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1199, top: 644, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1572, top: 454, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '22% margin', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1572, top: 1180, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Cost of', size: 38, weight: 800 },
              { text: 'revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1946, top: 358, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '7% margin', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1946, top: 802, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 36, weight: 800 },
              { text: 'expenses', size: 36, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2467, top: 381, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '5% margin', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2468, top: 595, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2468, top: 723, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Tax', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: 2370, top: 881, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'SG&A ($2.9B)', size: 32, weight: 800 },
              { text: '12% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: 2378, top: 1105, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'R&D ($0.7B)', size: 32, weight: 800 },
              { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'server_networking', col: 0, order: 0, type: 'source', label: ['Server &', 'Networking'], value: 7.4, notes: ['+58% Y/Y'] },
      { id: 'storage', col: 0, order: 1, type: 'source', label: 'Storage', value: 4.0, valueText: '$4.0B', notes: ['+4% Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source', label: 'ISG (Infrastructure)', value: 11.4, notes: ['+34% Y/Y'] },
      { id: 'commercial', col: 0, order: 2, type: 'source', label: 'Commercial', value: 10.1, notes: ['+3% Y/Y'] },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 2.0, valueText: '$2.0B', notes: ['(18%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source', label: 'CSG (Client)', value: 12.1, notes: ['(1%) Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.9, notes: ['(41%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 24.4, notes: ['+10% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.3, notes: ['22% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, notes: ['7% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.6 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['5% margin', '+0pp Y/Y'] },
      { id: 'other_expense', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.3 },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 2.9, notes: ['12% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 0.7, notes: ['3% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'server_networking', target: 'isg', value: 7.4, sourceWidth: 84, targetWidth: 84 },
      { source: 'storage', target: 'isg', value: 4.0, sourceWidth: 43, targetWidth: 44 },
      { source: 'isg', target: 'revenue', value: 11.4, sourceWidth: 128, targetWidth: 130, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 10.1, sourceWidth: 115, targetWidth: 115 },
      { source: 'consumer', target: 'csg', value: 2.0, sourceWidth: 21, targetWidth: 23 },
      { source: 'csg', target: 'revenue', value: 12.1, sourceWidth: 138, targetWidth: 138, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.9, sourceWidth: 8, targetWidth: 11, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.3, sourceWidth: 62, targetWidth: 59, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 19.1, sourceWidth: 217, targetWidth: 218, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.7, sourceWidth: 19, targetWidth: 17, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.6, width: 40, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 11, targetWidth: 10, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, sourceWidth: 3, targetWidth: 2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 3, targetWidth: 2, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 2.9, sourceWidth: 33, targetWidth: 31, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, width: 7, sourceOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2025 财年第三季度',
        meta: {
          title: 'DELL 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2024 年 10 月',
          titleTextLength: 1510,
        },
        nodes: {
          server_networking: { label: ['服务器', '与网络'], notes: ['同比 +58%'] },
          storage: { label: '存储', notes: ['同比 +4%'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 +34%'] },
          commercial: { label: '商业', notes: ['同比 +3%'] },
          consumer: { label: '消费者', notes: ['同比 (18%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 (1%)'] },
          other_revenue: { label: '其他', notes: ['同比 (41%)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 22%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +0 个百分点'] },
          other_expense: { label: '其他' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 12%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            server_networking: {
              blocks: [
                {
                  x: 451, top: 453, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +58%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 378, top: 541, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '服务器', size: 38, weight: 800 },
                    { text: '与网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [{
                x: 2370, top: 873, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '销售、一般及行政', size: 30, weight: 800 },
                  { text: '($2.9B)', size: 30, weight: 800 },
                  { text: '占收入 12%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            rnd: {
              blocks: [{
                x: 2378, top: 1105, anchor: 'start', lineGap: 9,
                lines: [
                  { text: '研发 ($0.7B)', size: 32, weight: 800 },
                  { text: '占收入 3%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
          },
        },
      },
    },
  });
})();

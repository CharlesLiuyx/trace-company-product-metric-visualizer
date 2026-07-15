/* ====================================================================
 * Dell - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/dell-q3-fy26.png as a fixed
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
  const RIGHT_LABEL_X = 2386;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dell-q3-fy26',
    name: 'Dell - Q3 FY26',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2055,
      periodX: 2469,
      periodY: 319,
      periodNoteY: 367,
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
      // The reference exposes every flow/node join, so Build-bound evidence
      // enforces G12 instead of merely surfacing a diagnostic warning.
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
      scale: 12.2,
      nodes: {
        server_networking: { x: 415, y: 560, width: 72, height: 123 },
        storage: { x: 415, y: 843, width: 72, height: 49 },
        isg: { x: 789, y: 663, width: 72, height: 172 },
        commercial: { x: 415, y: 1029, width: 72, height: 130 },
        consumer: { x: 415, y: 1292, width: 72, height: 23 },
        csg: { x: 789, y: 1087, width: 72, height: 153 },
        other_revenue: { x: 789, y: 1429, width: 72, height: 5 },
        revenue: { x: 1163, y: 793, width: 72, height: 330 },
        gross_profit: { x: 1536, y: 660, width: 72, height: 69 },
        cost_of_revenue: { x: 1536, y: 976, width: 72, height: 262 },
        operating_profit: { x: 1910, y: 561, width: 72, height: 26 },
        operating_expenses: { x: 1910, y: 780, width: 72, height: 44 },
        net_profit: { x: 2283, y: 469, width: 72, height: 19 },
        tax: { x: 2283, y: 663, width: 72, height: 5 },
        other_expense: { x: 2283, y: 760, width: 72, height: 4 },
        sga: { x: 2283, y: 888, width: 72, height: 33 },
        rnd: { x: 2283, y: 1173, width: 72, height: 10 },
      },
      labels: {
        server_networking: {
          blocks: [
            {
              x: 442, top: 470, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 377, top: 576, anchor: 'end', lineGap: 10,
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
              x: 444, top: 752, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(1%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 379, top: 843, anchor: 'end', lines: [{ text: 'Storage', size: 38, weight: 800 }] },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 441, top: 935, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 376, top: 1080, anchor: 'end', lines: [{ text: 'Commercial', size: 38, weight: 800 }] },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 441, top: 1194, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(7%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 376, top: 1271, anchor: 'end', lines: [{ text: 'Consumer', size: 38, weight: 800 }] },
          ],
        },
        isg: {
          blocks: [{
            x: 825, top: 517, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        csg: {
          blocks: [{
            x: 825, top: 938, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'CSG (Client)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_revenue: {
          blocks: [{
            x: 825, top: 1281, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(52%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1199, top: 648, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1572, top: 479, anchor: 'middle', lineGap: 10,
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
            x: 1572, top: 1252, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Cost of', size: 38, weight: 800 },
              { text: 'revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1946, top: 376, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '8% margin', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1946, top: 838, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 36, weight: 800 },
              { text: 'expenses', size: 36, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2467, top: 404, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '6% margin', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2467, top: 628, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Tax', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2467, top: 727, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 889, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'SG&A ($2.7B)', size: 32, weight: 800 },
              { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 1159, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'R&D ($0.8B)', size: 32, weight: 800 },
              { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'server_networking', col: 0, order: 0, type: 'source', label: ['Server &', 'Networking'], value: 10.1, notes: ['+37% Y/Y'] },
      { id: 'storage', col: 0, order: 1, type: 'source', label: 'Storage', value: 4.0, valueText: '$4.0B', notes: ['(1%) Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source', label: 'ISG (Infrastructure)', value: 14.1, notes: ['+24% Y/Y'] },
      { id: 'commercial', col: 0, order: 2, type: 'source', label: 'Commercial', value: 10.6, notes: ['+5% Y/Y'] },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 1.9, notes: ['(7%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source', label: 'CSG (Client)', value: 12.5, notes: ['+3% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.4, notes: ['(52%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 27.0, valueText: '$27.0B', notes: ['+11% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.6, notes: ['21% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 21.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['8% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.5 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['6% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.2 },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 2.7, notes: ['10% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 0.8, notes: ['3% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'server_networking', target: 'isg', value: 10.1, width: 123 },
      { source: 'storage', target: 'isg', value: 4.0, width: 49 },
      { source: 'isg', target: 'revenue', value: 14.1, width: 172, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 10.6, width: 130 },
      { source: 'consumer', target: 'csg', value: 1.9, width: 23 },
      { source: 'csg', target: 'revenue', value: 12.5, width: 153, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.4, width: 5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.6, width: 69, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 21.4, sourceWidth: 261, targetWidth: 262, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, width: 26, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.5, width: 43, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, width: 19, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, width: 5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 0.2, sourceWidth: 2, targetWidth: 3, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 2.7, width: 33, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 10, sourceOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2026 财年第三季度',
        meta: {
          title: 'DELL 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
        },
        nodes: {
          server_networking: { label: ['服务器', '与网络'], notes: ['同比 +37%'] },
          storage: { label: '存储', notes: ['同比 (1%)'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 +24%'] },
          commercial: { label: '商业', notes: ['同比 +5%'] },
          consumer: { label: '消费者', notes: ['同比 (7%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 +3%'] },
          other_revenue: { label: '其他', notes: ['同比 (52%)'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 21%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            server_networking: {
              blocks: [
                {
                  x: 442, top: 470, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +37%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 377, top: 576, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '服务器', size: 38, weight: 800 },
                    { text: '与网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [{
                x: RIGHT_LABEL_X, top: 881, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '销售、一般及行政', size: 30, weight: 800 },
                  { text: '($2.7B)', size: 30, weight: 800 },
                  { text: '占收入 10%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            rnd: {
              blocks: [{
                x: RIGHT_LABEL_X, top: 1159, anchor: 'start', lineGap: 9,
                lines: [
                  { text: '研发 ($0.8B)', size: 32, weight: 800 },
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

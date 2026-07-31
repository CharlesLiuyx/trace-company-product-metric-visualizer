/* ====================================================================
 * Dell - Q2 FY25 income statement ($B)
 * Reconstructed from input/processed/dell-q2-fy25.png as a fixed
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
  const RIGHT_LABEL_X = 2370;
  const RND_LABEL_X = 2378;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dell-q2-fy25',
    name: 'Dell - Q2 FY25',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending July 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2029,
      periodX: 1334,
      periodY: 1337,
      periodNoteY: 1380,
      logoWidth: 936,
      logoHeight: 203,
      logoY: 237,
      logoViewBox: '50 0 936 205',
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
      scale: 13.16,
      nodes: {
        server_networking: { x: 415, y: 518, width: 72, height: 99 },
        storage: { x: 415, y: 782, width: 72, height: 50 },
        isg: { x: 789, y: 635, width: 72, height: 152 },
        commercial: { x: 415, y: 1058, width: 72, height: 137 },
        consumer: { x: 415, y: 1333, width: 72, height: 23 },
        csg: { x: 794, y: 999, width: 72, height: 163 },
        other_revenue: { x: 784, y: 1377, width: 72, height: 10 },
        revenue: { x: 1163, y: 769, width: 72, height: 329 },
        gross_profit: { x: 1532, y: 658, width: 72, height: 68 },
        cost_of_revenue: { x: 1532, y: 917, width: 72, height: 259 },
        operating_profit: { x: 1915, y: 545, width: 72, height: 15 },
        operating_expenses: { x: 1908, y: 791, width: 72, height: 50 },
        net_profit: { x: 2283, y: 467, width: 72, height: 7 },
        other_expense: { x: 2283, y: 635, width: 72, height: 3 },
        tax: { x: 2283, y: 749, width: 72, height: 2 },
        sga: { x: 2283, y: 932, width: 72, height: 39 },
        rnd: { x: 2283, y: 1167, width: 72, height: 9 },
      },
      labels: {
        server_networking: {
          blocks: [
            {
              x: 454, top: 424, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+80% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 377, top: 519, anchor: 'end', lineGap: 10,
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
              x: 447, top: 685, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(5%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 368, top: 787, anchor: 'end', lines: [{ text: 'Storage', size: 38, weight: 800 }] },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 444, top: 962, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+0% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 379, top: 1107, anchor: 'end', lines: [{ text: 'Commercial', size: 38, weight: 800 }] },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 444, top: 1236, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(22%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 369, top: 1318, anchor: 'end', lines: [{ text: 'Consumer', size: 38, weight: 800 }] },
          ],
        },
        isg: {
          blocks: [{
            x: 814, top: 484, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+38% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        csg: {
          blocks: [{
            x: 830, top: 850, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'CSG (Client)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_revenue: {
          blocks: [{
            x: 824, top: 1227, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(37%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1199, top: 627, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1568, top: 468, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '21% margin', size: 28, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1568, top: 1192, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Cost of', size: 38, weight: 800 },
              { text: 'revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1946, top: 356, anchor: 'middle', lineGap: 10,
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
            x: 1941, top: 859, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 36, weight: 800 },
              { text: 'expenses', size: 36, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2469, top: 394, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '3% margin', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2469, top: 607, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2469, top: 722, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Tax', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 932, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'SG&A ($3.2B)', size: 32, weight: 800 },
              { text: '13% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: RND_LABEL_X, top: 1150, anchor: 'start', lineGap: 9,
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
      { id: 'server_networking', col: 0, order: 0, type: 'source', label: ['Server &', 'Networking'], value: 7.7, notes: ['+80% Y/Y'] },
      { id: 'storage', col: 0, order: 1, type: 'source', label: 'Storage', value: 4.0, valueText: '$4.0B', notes: ['(5%) Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source', label: 'ISG (Infrastructure)', value: 11.6, notes: ['+38% Y/Y'] },
      { id: 'commercial', col: 0, order: 2, type: 'source', label: 'Commercial', value: 10.6, notes: ['+0% Y/Y'] },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 1.9, notes: ['(22%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source', label: 'CSG (Client)', value: 12.4, notes: ['(4%) Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 1.0, valueText: '$1.0B', notes: ['(37%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 25.0, valueText: '$25.0B', notes: ['+9% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.3, notes: ['21% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.3, notes: ['5% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, valueText: '($4.0B)' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.8, notes: ['3% margin', '+1pp Y/Y'] },
      { id: 'other_expense', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.4 },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 0.1, color: '#d53c3c' },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 3.2, notes: ['13% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 0.8, notes: ['3% of revenue', '+0pp Y/Y'] },
    ],

    links: [
      { source: 'server_networking', target: 'isg', value: 7.7, sourceWidth: 99, targetWidth: 100, sourceOrder: 0, targetOrder: 0 },
      { source: 'storage', target: 'isg', value: 4.0, sourceWidth: 50, targetWidth: 52, sourceOrder: 0, targetOrder: 1 },
      { source: 'isg', target: 'revenue', value: 11.6, sourceWidth: 152, targetWidth: 153, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 10.6, sourceWidth: 137, targetWidth: 138, sourceOrder: 0, targetOrder: 0 },
      { source: 'consumer', target: 'csg', value: 1.9, sourceWidth: 23, targetWidth: 25, sourceOrder: 0, targetOrder: 1 },
      { source: 'csg', target: 'revenue', value: 12.4, sourceWidth: 163, targetWidth: 163, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 1.0, sourceWidth: 10, targetWidth: 13, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.3, sourceWidth: 68, targetWidth: 68, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 19.7, sourceWidth: 261, targetWidth: 259, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.3, sourceWidth: 17, targetWidth: 15, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, sourceWidth: 51, targetWidth: 50, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 9, targetWidth: 7, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.4, sourceWidth: 5, targetWidth: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 1, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 3.2, sourceWidth: 41, targetWidth: 39, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2025 财年第二季度',
        meta: {
          title: 'DELL 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 7 月',
        },
        nodes: {
          server_networking: { label: ['服务器', '与网络'], notes: ['同比 +80%'] },
          storage: { label: '存储', notes: ['同比 (5%)'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 +38%'] },
          commercial: { label: '商业', notes: ['同比 +0%'] },
          consumer: { label: '消费者', notes: ['同比 (22%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 (4%)'] },
          other_revenue: { label: '其他', notes: ['同比 (37%)'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 21%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +1 个百分点'] },
          other_expense: { label: '其他' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 13%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            server_networking: {
              blocks: [
                {
                  x: 454, top: 424, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +80%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 377, top: 519, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '服务器', size: 38, weight: 800 },
                    { text: '与网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [{
                x: RIGHT_LABEL_X, top: 924, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '销售、一般及行政', size: 30, weight: 800 },
                  { text: '($3.2B)', size: 30, weight: 800 },
                  { text: '占收入 13%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            rnd: {
              blocks: [{
                x: RND_LABEL_X, top: 1150, anchor: 'start', lineGap: 9,
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

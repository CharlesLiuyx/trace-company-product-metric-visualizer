/* ====================================================================
 * Dell - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/dell-q2-fy26.png as a fixed
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
    key: 'dell-q2-fy26',
    name: 'Dell - Q2 FY26',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending July 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2055,
      periodX: 1283,
      periodY: 1295,
      periodNoteY: 1338,
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
      scale: 10.0,
      nodes: {
        server_networking: { x: 415, y: 573, width: 72, height: 128 },
        storage: { x: 415, y: 864, width: 72, height: 39 },
        isg: { x: 789, y: 668, width: 72, height: 167 },
        commercial: { x: 415, y: 1019, width: 72, height: 108 },
        consumer: { x: 415, y: 1275, width: 72, height: 17 },
        csg: { x: 789, y: 1057, width: 72, height: 125 },
        other_revenue: { x: 789, y: 1353, width: 72, height: 3 },
        revenue: { x: 1163, y: 792, width: 72, height: 297 },
        gross_profit: { x: 1536, y: 673, width: 72, height: 53 },
        cost_of_revenue: { x: 1536, y: 946, width: 72, height: 243 },
        operating_profit: { x: 1910, y: 575, width: 72, height: 17 },
        operating_expenses: { x: 1910, y: 807, width: 72, height: 37 },
        net_profit: { x: 2283, y: 478, width: 72, height: 12 },
        tax: { x: 2283, y: 684, width: 72, height: 3 },
        other_expense: { x: 2283, y: 779, width: 72, height: 3 },
        sga: { x: 2283, y: 952, width: 72, height: 30 },
        rnd: { x: 2283, y: 1159, width: 72, height: 9 },
      },
      labels: {
        server_networking: {
          blocks: [
            {
              x: 449, top: 481, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+69% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 379, top: 590, anchor: 'end', lineGap: 10,
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
              x: 452, top: 777, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 375, top: 860, anchor: 'end', lines: [{ text: 'Storage', size: 38, weight: 800 }] },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 449, top: 932, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 378, top: 1050, anchor: 'end', lines: [{ text: 'Commercial', size: 38, weight: 800 }] },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 452, top: 1184, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(7%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 371, top: 1257, anchor: 'end', lines: [{ text: 'Consumer', size: 38, weight: 800 }] },
          ],
        },
        isg: {
          blocks: [{
            x: 823, top: 520, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+44% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        csg: {
          blocks: [{
            x: 823, top: 910, anchor: 'middle', lineGap: 11,
            lines: [
              { text: 'CSG (Client)', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+1% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        other_revenue: {
          blocks: [{
            x: 823, top: 1206, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '(51%) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1191, top: 650, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1570, top: 496, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '18% margin', size: 28, weight: 400, color: NOTE },
              { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1571, top: 1203, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Cost of', size: 38, weight: 800 },
              { text: 'revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1948, top: 392, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '6% margin', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1948, top: 859, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 36, weight: 800 },
              { text: 'expenses', size: 36, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2470, top: 423, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 38, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '4% margin', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2469, top: 651, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Tax', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        other_expense: {
          blocks: [{
            x: 2469, top: 744, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 32, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 949, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'SG&A ($2.9B)', size: 32, weight: 800 },
              { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 1143, anchor: 'start', lineGap: 9,
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
      { id: 'server_networking', col: 0, order: 0, type: 'source', label: ['Server &', 'Networking'], value: 12.9, notes: ['+69% Y/Y'] },
      { id: 'storage', col: 0, order: 1, type: 'source', label: 'Storage', value: 3.9, notes: ['(3%) Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source', label: 'ISG (Infrastructure)', value: 16.8, notes: ['+44% Y/Y'] },
      { id: 'commercial', col: 0, order: 2, type: 'source', label: 'Commercial', value: 10.8, notes: ['+2% Y/Y'] },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 1.7, notes: ['(7%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source', label: 'CSG (Client)', value: 12.5, notes: ['+1% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.5, notes: ['(51%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 29.8, notes: ['+19% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.4, notes: ['18% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 24.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['6% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.7 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.2, notes: ['4% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.3 },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 2.9, notes: ['10% of revenue', '(3pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 0.8, notes: ['3% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'server_networking', target: 'isg', value: 12.9, width: 128 },
      { source: 'storage', target: 'isg', value: 3.9, width: 39 },
      { source: 'isg', target: 'revenue', value: 16.8, width: 167, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 10.8, width: 108 },
      { source: 'consumer', target: 'csg', value: 1.7, width: 17 },
      { source: 'csg', target: 'revenue', value: 12.5, width: 125, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.5, sourceWidth: 3, targetWidth: 5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.4, sourceWidth: 53, targetWidth: 53, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 24.3, sourceWidth: 243, targetWidth: 243, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, width: 17, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.7, sourceWidth: 36, targetWidth: 37, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 11, targetWidth: 12, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, width: 3, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, width: 3, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 2.9, sourceWidth: 29, targetWidth: 30, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 8, targetWidth: 9, sourceOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2026 财年第二季度',
        meta: {
          title: 'DELL 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 7 月',
        },
        nodes: {
          server_networking: { label: ['服务器', '与网络'], notes: ['同比 +69%'] },
          storage: { label: '存储', notes: ['同比 (3%)'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 +44%'] },
          commercial: { label: '商业', notes: ['同比 +2%'] },
          consumer: { label: '消费者', notes: ['同比 (7%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 +1%'] },
          other_revenue: { label: '其他', notes: ['同比 (51%)'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            server_networking: {
              blocks: [
                {
                  x: 449, top: 481, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +69%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 379, top: 590, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '服务器', size: 38, weight: 800 },
                    { text: '与网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [{
                x: RIGHT_LABEL_X, top: 937, anchor: 'start', lineGap: 8,
                lines: [
                  { text: '销售、一般及行政', size: 30, weight: 800 },
                  { text: '($2.9B)', size: 30, weight: 800 },
                  { text: '占收入 10%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            rnd: {
              blocks: [{
                x: RIGHT_LABEL_X, top: 1143, anchor: 'start', lineGap: 9,
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

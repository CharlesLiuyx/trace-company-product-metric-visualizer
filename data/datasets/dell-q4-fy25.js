/* ====================================================================
 * Dell - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/dell-q4-fy25.png as a fixed
 * d3-sankey layout with the shared vector Dell logo.
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
    key: 'dell-q4-fy25',
    name: 'Dell - Q4 FY25',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1315,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 1978,
      periodX: 1334,
      periodY: 1305,
      periodNoteY: 1353,
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
      titleColor: TITLE,
      subtitleColor: NOTE,
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
      interfaceAudit: { mode: 'error' },
    },

    layout: {
      scale: 12,
      nodes: {
        server_networking: { x: 415, y: 497, width: 72, height: 78 },
        storage: { x: 415, y: 748, width: 72, height: 53 },
        isg: { x: 786, y: 599, width: 72, height: 135 },
        commercial: { x: 415, y: 943, width: 72, height: 117 },
        consumer: { x: 415, y: 1205, width: 72, height: 22 },
        csg: { x: 789, y: 981, width: 72, height: 141 },
        other_revenue: { x: 789, y: 1304, width: 72, height: 7 },
        revenue: { x: 1165, y: 726, width: 72, height: 287 },
        gross_profit: { x: 1539, y: 592, width: 72, height: 67 },
        cost_of_revenue: { x: 1537, y: 904, width: 72, height: 218 },
        operating_profit: { x: 1938, y: 490, width: 72, height: 25 },
        operating_expenses: { x: 1938, y: 713, width: 72, height: 40 },
        net_profit: { x: 2283, y: 402, width: 72, height: 18 },
        other_expense: { x: 2283, y: 579, width: 72, height: 2 },
        tax: { x: 2283, y: 686, width: 72, height: 1 },
        sga: { x: 2283, y: 818, width: 72, height: 31 },
        rnd: { x: 2283, y: 1030, width: 72, height: 8 },
      },
      labels: {
        server_networking: {
          blocks: [
            {
              x: 451, top: 408, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 376, top: 493, anchor: 'end', lineGap: 10,
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
              x: 451, top: 657, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 367, top: 752, anchor: 'end',
              lines: [{ text: 'Storage', size: 38, weight: 800 }],
            },
          ],
        },
        isg: {
          blocks: [
            {
              x: 823, top: 457, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 451, top: 845, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 377, top: 978, anchor: 'end',
              lines: [{ text: 'Commercial', size: 38, weight: 800 }],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 451, top: 1107, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(12%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 1181, anchor: 'end', semanticRole: 'top-aligned-side-label',
              lines: [{ text: 'Consumer', size: 38, weight: 800 }],
            },
          ],
        },
        csg: {
          blocks: [
            {
              x: 823, top: 839, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'CSG (Client)', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+1% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 825, top: 1163, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(45%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1200, top: 588, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1574, top: 413, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '24% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1570, top: 1137, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1974, top: 313, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '9% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1974, top: 771, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2470, top: 336, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '6% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: 2469, top: 550, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2469, top: 653, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Tax', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2371, top: 792, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'SG&A ($2.7B)', size: 32, weight: 800 },
                { text: '11% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2378, top: 1003, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'R&D ($0.8B)', size: 32, weight: 800 },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'server_networking', col: 0, order: 0, type: 'source',
        label: ['Server &', 'Networking'], value: 6.6, notes: ['+37% Y/Y'] },
      { id: 'storage', col: 0, order: 1, type: 'source',
        label: 'Storage', value: 4.7, notes: ['+5% Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source',
        label: 'ISG (Infrastructure)', value: 11.4, notes: ['+22% Y/Y'] },
      { id: 'commercial', col: 0, order: 2, type: 'source',
        label: 'Commercial', value: 10.0, valueText: '$10.0B', notes: ['+5% Y/Y'] },
      { id: 'consumer', col: 0, order: 3, type: 'source',
        label: 'Consumer', value: 1.9, notes: ['(12%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source',
        label: 'CSG (Client)', value: 11.9, notes: ['+1% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source',
        label: 'Other', value: 0.7, notes: ['(45%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 23.9, notes: ['+7% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 5.7, notes: ['24% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 18.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 2.2, notes: ['9% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 3.5 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 1.5, notes: ['6% margin', '+1pp Y/Y'] },
      { id: 'other_expense', col: 6, order: 1, type: 'cost',
        label: 'Other', value: 0.2 },
      { id: 'tax', col: 6, order: 2, type: 'cost',
        label: 'Tax', value: 0.4 },
      { id: 'sga', col: 6, order: 3, type: 'cost',
        label: 'SG&A', value: 2.7, notes: ['11% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost',
        label: 'R&D', value: 0.8, notes: ['3% of revenue', '+0pp Y/Y'] },
    ],

    links: [
      { source: 'server_networking', target: 'isg', value: 6.6,
        sourceWidth: 78, targetWidth: 77, targetOrder: 0 },
      { source: 'storage', target: 'isg', value: 4.7,
        sourceWidth: 53, targetWidth: 58, targetOrder: 1 },
      { source: 'isg', target: 'revenue', value: 11.4,
        sourceWidth: 135, targetWidth: 138, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 10.0,
        sourceWidth: 117, targetWidth: 117, targetOrder: 0 },
      { source: 'consumer', target: 'csg', value: 1.9,
        sourceWidth: 22, targetWidth: 24, targetOrder: 1 },
      { source: 'csg', target: 'revenue', value: 11.9,
        sourceWidth: 141, targetWidth: 143, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.7,
        sourceWidth: 6, targetWidth: 6, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 5.7,
        sourceWidth: 67, targetWidth: 67, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 18.3,
        sourceWidth: 220, targetWidth: 217, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 2.2,
        width: 24, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.5,
        sourceWidth: 43, targetWidth: 40, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 1.5,
        sourceWidth: 16, targetWidth: 18, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.2,
        sourceWidth: 4, targetWidth: 2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.4,
        sourceWidth: 5, targetWidth: 1, sourceOrder: 2 },

      { source: 'operating_expenses', target: 'sga', value: 2.7,
        sourceWidth: 30, targetWidth: 31, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8,
        sourceWidth: 10, targetWidth: 7, sourceOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2025 财年第四季度',
        meta: {
          title: 'DELL 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 1 月',
        },
        nodes: {
          server_networking: { label: ['服务器与', '网络'], notes: ['同比 +37%'] },
          storage: { label: '存储', notes: ['同比 +5%'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 +22%'] },
          commercial: { label: '商业', notes: ['同比 +5%'] },
          consumer: { label: '消费者', notes: ['同比 (12%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 +1%'] },
          other_revenue: { label: '其他', notes: ['同比 (45%)'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 24%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +1 个百分点'] },
          other_expense: { label: '其他' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 11%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            server_networking: {
              blocks: [
                {
                  x: 451, top: 408, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +37%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 376, top: 493, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '服务器与', size: 38, weight: 800 },
                    { text: '网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2371, top: 778, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售、一般及行政', size: 30, weight: 800 },
                    { text: '($2.7B)', size: 30, weight: 800 },
                    { text: '占收入 11%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2378, top: 1003, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '研发 ($0.8B)', size: 32, weight: 800 },
                    { text: '占收入 3%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
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

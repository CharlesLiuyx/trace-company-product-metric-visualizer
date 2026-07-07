/* ====================================================================
 * Dell - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/dell-q4-fy26.png as a fixed
 * d3-sankey layout with a reusable SVG Dell logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const BLUE = '#007cbd';
  const BLUE_LABEL = '#007abd';
  const BLUE_LINK = '#83bbd8';
  const GREEN = '#23a323';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bd49d';
  const RED = '#d70000';
  const RED_LABEL = '#961100';
  const RED_LINK = '#e68383';
  const NOTE = '#6f6f6f';
  const RIGHT_LABEL_X = 2390;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dell-q4-fy26',
    name: 'Dell - Q4 FY26',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1315,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 1978,
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
      scale: 9.58,
      nodes: {
        ai_optimized_servers: { x: 415, y: 502, width: 72, height: 86 },
        traditional_servers_networking: { x: 415, y: 710, width: 72, height: 56 },
        storage: { x: 415, y: 890, width: 72, height: 46 },
        isg: { x: 788, y: 659, width: 72, height: 188 },
        commercial: { x: 415, y: 1073, width: 72, height: 111 },
        consumer: { x: 415, y: 1305, width: 72, height: 18 },
        csg: { x: 788, y: 1090, width: 72, height: 129 },
        other_revenue: { x: 788, y: 1374, width: 72, height: 3 },
        revenue: { x: 1162, y: 793, width: 72, height: 320 },
        gross_profit: { x: 1536, y: 686, width: 72, height: 64 },
        cost_of_revenue: { x: 1536, y: 948, width: 72, height: 256 },
        operating_profit: { x: 1910, y: 599, width: 72, height: 30 },
        operating_expenses: { x: 1909, y: 842, width: 73, height: 34 },
        net_profit: { x: 2283, y: 499, width: 72, height: 22 },
        tax: { x: 2283, y: 706, width: 72, height: 5 },
        other_expense: { x: 2283, y: 807, width: 72, height: 3 },
        sga: { x: 2283, y: 954, width: 72, height: 27 },
        rnd: { x: 2283, y: 1242, width: 72, height: 7 },
      },
      labels: {
        ai_optimized_servers: {
          blocks: [
            {
              x: 451, top: 407, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+342% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 362, top: 498, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'AI-optimized', size: 38, weight: 800 },
                { text: 'Servers', size: 38, weight: 800 },
              ],
            },
          ],
        },
        traditional_servers_networking: {
          blocks: [
            {
              x: 451, top: 610, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 362, top: 690, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Traditional', size: 38, weight: 800 },
                { text: 'server &', size: 38, weight: 800 },
                { text: 'networking', size: 38, weight: 800 },
              ],
            },
          ],
        },
        storage: {
          blocks: [
            {
              x: 451, top: 790, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 362, top: 892, anchor: 'end',
              lines: [{ text: 'Storage', size: 38, weight: 800 }],
            },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 451, top: 980, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 362, top: 1103, anchor: 'end',
              lines: [{ text: 'Commercial', size: 38, weight: 800 }],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 451, top: 1217, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(0%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 362, top: 1290, anchor: 'end',
              lines: [{ text: 'Consumer', size: 38, weight: 800 }],
            },
          ],
        },
        isg: {
          blocks: [
            {
              x: 823, top: 514, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+73% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        csg: {
          blocks: [
            {
              x: 823, top: 945, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'CSG (Client)', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 823, top: 1270, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1198, top: 648, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+39% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1572, top: 500, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '20% margin', size: 28, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1572, top: 1220, anchor: 'middle', lineGap: 10,
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
              x: 1946, top: 414, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '9% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1946, top: 895, anchor: 'middle', lineGap: 10,
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
              x: 2466, top: 439, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '7% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2466, top: 682, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Tax', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: 2466, top: 785, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 946, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'SG&A ($2.8B)', size: 32, weight: 800 },
                { text: '9% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1240, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'R&D ($0.8B)', size: 32, weight: 800 },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'ai_optimized_servers', col: 0, order: 0, type: 'source',
        label: ['AI-optimized', 'Servers'], value: 9.0, valueText: '$9.0B', notes: ['+342% Y/Y'] },
      { id: 'traditional_servers_networking', col: 0, order: 1, type: 'source',
        label: ['Traditional', 'server &', 'networking'], value: 5.8, notes: ['+27% Y/Y'] },
      { id: 'storage', col: 0, order: 2, type: 'source',
        label: 'Storage', value: 4.8, notes: ['+2% Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source',
        label: 'ISG (Infrastructure)', value: 19.6, notes: ['+73% Y/Y'] },
      { id: 'commercial', col: 0, order: 3, type: 'source',
        label: 'Commercial', value: 11.6, notes: ['+16% Y/Y'] },
      { id: 'consumer', col: 0, order: 4, type: 'source',
        label: 'Consumer', value: 1.9, notes: ['(0%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source',
        label: 'CSG (Client)', value: 13.5, notes: ['+14% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source',
        label: 'Other', value: 0.3 },
      { id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 33.4, notes: ['+39% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 6.7, notes: ['20% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 26.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 3.1, notes: ['9% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 3.6 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 2.3, notes: ['7% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost',
        label: 'Tax', value: 0.5 },
      { id: 'other_expense', col: 6, order: 2, type: 'cost',
        label: 'Other', value: 0.3 },
      { id: 'sga', col: 6, order: 3, type: 'cost',
        label: 'SG&A', value: 2.8, notes: ['9% of revenue', '(3pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost',
        label: 'R&D', value: 0.8, notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'ai_optimized_servers', target: 'isg', value: 9.0, width: 86 },
      { source: 'traditional_servers_networking', target: 'isg', value: 5.8, width: 56 },
      { source: 'storage', target: 'isg', value: 4.8, width: 46 },
      { source: 'isg', target: 'revenue', value: 19.6, width: 188, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 11.6, width: 111 },
      { source: 'consumer', target: 'csg', value: 1.9, width: 18 },
      { source: 'csg', target: 'revenue', value: 13.5, width: 129, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.3, width: 3, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 6.7, width: 64, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 26.6, width: 256, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 3.1, width: 30, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.6, width: 34, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 2.3, width: 22, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, width: 5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, width: 3, sourceOrder: 2 },

      { source: 'operating_expenses', target: 'sga', value: 2.8, width: 27, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 7, sourceOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2026 财年第四季度',
        meta: {
          title: 'DELL 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
        },
        nodes: {
          ai_optimized_servers: { label: ['AI 优化', '服务器'], notes: ['同比 +342%'] },
          traditional_servers_networking: { label: ['传统服务器', '与网络'], notes: ['同比 +27%'] },
          storage: { label: '存储', notes: ['同比 +2%'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 +73%'] },
          commercial: { label: '商业', notes: ['同比 +16%'] },
          consumer: { label: '消费者', notes: ['同比 (0%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 +14%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +39%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 20%', '同比 (4 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          sga: { label: '销售、一般及行政', notes: ['占收入 9%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            ai_optimized_servers: {
              blocks: [
                {
                  x: 451, top: 407, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +342%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 362, top: 498, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: 'AI 优化', size: 38, weight: 800 },
                    { text: '服务器', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            traditional_servers_networking: {
              blocks: [
                {
                  x: 451, top: 610, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +27%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 362, top: 706, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '传统服务器', size: 38, weight: 800 },
                    { text: '与网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 930, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售、一般及行政', size: 30, weight: 800 },
                    { text: '($2.8B)', size: 30, weight: 800 },
                    { text: '占收入 9%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1240, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '研发 ($0.8B)', size: 32, weight: 800 },
                    { text: '占收入 2%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
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

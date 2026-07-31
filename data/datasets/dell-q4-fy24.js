/* Dell Q4 FY24 income statement ($B), reconstructed from the native Source. */
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
  const RIGHT_LABEL_X = 2371;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const block = (x, top, lines, anchor = 'middle', lineGap = 9) => ({
    x, top, anchor, lineGap, lines,
  });
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dell-q4-fy24',
    name: 'Dell - Q4 FY24',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Jan. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2029,
      periodX: 2469,
      periodY: 280,
      periodNoteY: 327,
      logoWidth: 936,
      logoHeight: 205,
      logoY: 262,
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
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 39, value: 39, note: 28, lineGap: 9 },
    },
    layout: {
      scale: 12.7,
      nodes: {
        server_networking: { x: 417, y: 492, width: 71, height: 60 },
        storage: { x: 417, y: 680, width: 71, height: 55 },
        isg: { x: 788, y: 662, width: 70, height: 118 },
        commercial: { x: 417, y: 1010, width: 71, height: 121 },
        consumer: { x: 417, y: 1264, width: 71, height: 25 },
        csg: { x: 791, y: 978, width: 70, height: 148 },
        other_revenue: { x: 788, y: 1336, width: 70, height: 15 },
        revenue: { x: 1165, y: 773, width: 70, height: 284 },
        gross_profit: { x: 1536, y: 670, width: 70, height: 66 },
        cost_of_revenue: { x: 1541, y: 931, width: 70, height: 216 },
        operating_profit: { x: 1915, y: 589, width: 70, height: 17 },
        operating_expenses: { x: 1917, y: 775, width: 71, height: 46 },
        net_profit: { x: 2285, y: 471, width: 71, height: 12 },
        other_expense: { x: 2285, y: 675, width: 71, height: 1 },
        tax: { x: 2285, y: 772, width: 71, height: 1 },
        sga: { x: 2285, y: 937, width: 71, height: 38 },
        rnd: { x: 2285, y: 1187, width: 71, height: 7 },
      },
      labels: {
        server_networking: { blocks: [
          block(452, 405, [line('$value', 39), line('(2%) Y/Y', 28, 400, NOTE)]),
          block(370, 478, [line('Server &', 38, 800), line('Networking', 38, 800)], 'end', 10),
        ] },
        storage: { blocks: [
          block(444, 592, [line('$value', 39), line('(10%) Y/Y', 28, 400, NOTE)]),
          block(369, 686, [line('Storage', 38, 800)], 'end'),
        ] },
        isg: { blocks: [block(823, 520, [
          line('ISG (Infrastructure)', 39, 800), line('$value', 39), line('(6%) Y/Y', 28, 400, NOTE),
        ], 'middle', 11)] },
        commercial: { blocks: [
          block(452, 918, [line('$value', 39), line('(11%) Y/Y', 28, 400, NOTE)]),
          block(370, 1049, [line('Commercial', 38, 800)], 'end'),
        ] },
        consumer: { blocks: [
          block(452, 1159, [line('$value', 39), line('(19%) Y/Y', 28, 400, NOTE)]),
          block(370, 1254, [line('Consumer', 38, 800)], 'end'),
        ] },
        csg: { blocks: [block(823, 835, [
          line('CSG (Client)', 39, 800), line('$value', 39), line('(12%) Y/Y', 28, 400, NOTE),
        ], 'middle', 11)] },
        other_revenue: { blocks: [block(823, 1192, [
          line('Other', 39, 800), line('$value', 39), line('(28%) Y/Y', 28, 400, NOTE),
        ])] },
        revenue: { blocks: [block(1199, 630, [
          line('Revenue', 39, 800), line('$value', 39), line('(11%) Y/Y', 28, 400, NOTE),
        ], 'middle', 10)] },
        gross_profit: { blocks: [block(1572, 484, [
          line('Gross profit', 38, 800), line('$value', 39), line('24% margin', 28, 400, NOTE),
          line('+1pp Y/Y', 28, 400, NOTE),
        ], 'middle', 10)] },
        cost_of_revenue: { blocks: [block(1576, 1169, [
          line('Cost of', 38, 800), line('revenue', 38, 800), line('$value', 37),
        ], 'middle', 10)] },
        operating_profit: { blocks: [block(1950, 405, [
          line('Operating profit', 38, 800), line('$value', 39), line('7% margin', 28, 400, NOTE),
          line('+2pp Y/Y', 28, 400, NOTE),
        ], 'middle', 10)] },
        operating_expenses: { blocks: [block(1953, 841, [
          line('Operating', 36, 800), line('expenses', 36, 800), line('$value', 36),
        ], 'middle', 10)] },
        net_profit: { blocks: [block(2469, 410, [
          line('Net profit', 38, 800), line('$value', 39), line('5% margin', 28, 400, NOTE),
          line('+3pp Y/Y', 28, 400, NOTE),
        ], 'middle', 10)] },
        other_expense: { blocks: [block(2469, 634, [line('Other', 32, 800), line('$value', 31)])] },
        tax: { blocks: [block(2469, 725, [line('Tax', 32, 800), line('$value', 31)])] },
        sga: { blocks: [block(RIGHT_LABEL_X, 921, [
          line('SG&A ($3.1B)', 32, 800), line('14% of revenue', 28, 400, NOTE),
          line('(1pp) Y/Y', 28, 400, NOTE),
        ], 'start')] },
        rnd: { blocks: [block(2378, 1153, [
          line('R&D ($0.7B)', 32, 800), line('3% of revenue', 28, 400, NOTE),
          line('+0pp Y/Y', 28, 400, NOTE),
        ], 'start')] },
      },
    },
    nodes: [
      { id: 'server_networking', col: 0, order: 0, type: 'source', label: ['Server &', 'Networking'], value: 4.9, notes: ['(2%) Y/Y'] },
      { id: 'storage', col: 0, order: 1, type: 'source', label: 'Storage', value: 4.5, notes: ['(10%) Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source', label: 'ISG (Infrastructure)', value: 9.3, notes: ['(6%) Y/Y'] },
      { id: 'commercial', col: 0, order: 2, type: 'source', label: 'Commercial', value: 9.6, notes: ['(11%) Y/Y'] },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 2.2, notes: ['(19%) Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source', label: 'CSG (Client)', value: 11.7, notes: ['(12%) Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 1.3, notes: ['(28%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 22.3, notes: ['(11%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.3, notes: ['24% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 17.0, valueText: '($17.0B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, notes: ['7% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.7, valueText: '($3.7B)' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.2, notes: ['5% margin', '+3pp Y/Y'] },
      { id: 'other_expense', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)' },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)' },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 3.1, notes: ['14% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 0.7, notes: ['3% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'server_networking', target: 'isg', value: 4.9, sourceWidth: 60, targetWidth: 63, y0: 522, y1: 693.5, targetOrder: 0 },
      { source: 'storage', target: 'isg', value: 4.5, sourceWidth: 55, targetWidth: 55, y0: 707.5, y1: 752.5, targetOrder: 1 },
      { source: 'isg', target: 'revenue', value: 9.3, sourceWidth: 118, targetWidth: 118, y0: 721, y1: 832, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 9.6, sourceWidth: 121, targetWidth: 120, y0: 1070.5, y1: 1038, targetOrder: 0 },
      { source: 'consumer', target: 'csg', value: 2.2, sourceWidth: 25, targetWidth: 28, y0: 1276.5, y1: 1112, targetOrder: 1 },
      { source: 'csg', target: 'revenue', value: 11.7, sourceWidth: 148, targetWidth: 148, y0: 1052, y1: 965, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 1.3, sourceWidth: 15, targetWidth: 18, y0: 1343.5, y1: 1048, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.3, sourceWidth: 68, targetWidth: 66, y0: 807, y1: 703, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 17.0, sourceWidth: 216, targetWidth: 216, y0: 949, y1: 1039, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceWidth: 18, targetWidth: 17, y0: 679, y1: 597.5, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.7, sourceWidth: 48, targetWidth: 46, y0: 712, y1: 798, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 13, targetWidth: 12, y0: 595.5, y1: 477, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.2, sourceWidth: 2, targetWidth: 1, y0: 603, y1: 675.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 605, y1: 772.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 3.1, sourceWidth: 39, targetWidth: 38, y0: 794.5, y1: 956, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, sourceWidth: 7, targetWidth: 7, y0: 817.5, y1: 1190.5, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Dell · 2024 财年第四季度',
        meta: {
          title: 'DELL 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 1 月',
        },
        nodes: {
          server_networking: { label: ['服务器', '与网络'], notes: ['同比 (2%)'] },
          storage: { label: '存储', notes: ['同比 (10%)'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 (6%)'] },
          commercial: { label: '商业', notes: ['同比 (11%)'] },
          consumer: { label: '消费者', notes: ['同比 (19%)'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 (12%)'] },
          other_revenue: { label: '其他', notes: ['同比 (28%)'] },
          revenue: { label: '收入', notes: ['同比 (11%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 24%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +3 个百分点'] },
          other_expense: { label: '其他' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            server_networking: { blocks: [
              block(452, 405, [line('$value', 39), line('同比 (2%)', 28, 400, NOTE)]),
              block(370, 478, [line('服务器', 38, 800), line('与网络', 38, 800)], 'end', 10),
            ] },
            sga: { blocks: [block(RIGHT_LABEL_X, 913, [
              line('销售、一般及行政', 30, 800), line('($3.1B)', 30, 800),
              line('占收入 14%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE),
            ], 'start', 8)] },
            rnd: { blocks: [block(2378, 1153, [
              line('研发 ($0.7B)', 32, 800), line('占收入 3%', 28, 400, NOTE),
              line('同比 +0 个百分点', 28, 400, NOTE),
            ], 'start')] },
          },
        },
      },
    },
  });
})();

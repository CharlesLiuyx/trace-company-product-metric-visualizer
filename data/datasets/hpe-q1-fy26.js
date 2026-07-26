/* HPE Q1 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const TITLE = '#155077';
  const NETWORKING = '#00b08a';
  const NETWORKING_LINK = '#85d3c2';
  const CLOUD_AI = '#7630ea';
  const CLOUD_AI_LINK = '#ba9bed';
  const CORPORATE = '#306eef';
  const CORPORATE_LINK = '#9bb7f0';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9bcd9b';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const hpeLogo = `
    <g transform="translate(-11,0)">
      <path fill="#000" d="M0 0h31v57h99V0h31v155h-31V88H31v67H0z"/>
      <path fill="#000" d="M202 0h78c49 0 80 29 80 77 0 47-31 77-80 77h-47v1h-31zM233 30v94h46c31 0 50-17 50-47s-19-47-50-47z"/>
      <path fill="#00b388" d="M389 0h151v29H421v33h108v30H421v34h119v29H389z"/>
    </g>`;

  const above = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });
  const text = (value, size, weight = 800, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hpe-q1-fy26',
    name: 'HPE · Q1 FY26',
    company: 'HPE',
    meta: {
      company: 'HPE',
      title: 'HPE Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/hpe-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 1974,
      periodX: 2470,
      periodY: 238,
      periodNoteY: 281,
      logoWidth: 540,
      logoHeight: 155,
      logoY: 298,
      logoViewBox: '0 0 540 155',
      logoSvg: hpeLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NETWORKING, label: NETWORKING },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NETWORKING_LINK, hub: NETWORKING_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      nodeRadius: 0,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    layout: {
      scale: 39.65,
      nodes: {
        networking: { x: 416, y: 542, width: 71, height: 106 },
        cloud_ai: { x: 416, y: 841, width: 71, height: 251 },
        corporate_other: { x: 416, y: 1284, width: 71, height: 10 },
        revenue: { x: 883, y: 683, width: 70, height: 369 },
        gross_profit: { x: 1350, y: 564, width: 71, height: 132 },
        cost_of_revenue: { x: 1350, y: 907, width: 71, height: 235 },
        operating_profit: { x: 1818, y: 482, width: 70, height: 16 },
        operating_expenses: { x: 1818, y: 697, width: 70, height: 113 },
        net_profit: { x: 2284, y: 388, width: 71, height: 16 },
        tax_other: { x: 2284, y: 585, width: 71, height: 2 },
        sga: { x: 2284, y: 725, width: 71, height: 66 },
        rnd: { x: 2284, y: 940, width: 71, height: 27 },
        intangibles: { x: 2284, y: 1129, width: 71, height: 10 },
        other_opex: { x: 2284, y: 1299, width: 71, height: 2 },
      },
      labels: {
        networking: { blocks: [
          above(448, 450, [text('$value', 39, 400, NETWORKING), text('+151% Y/Y', 28, 400, NOTE)]),
          { x: 384, top: 560, anchor: 'end', lines: [text('Networking', 40, 800, NETWORKING), text('24% operating margin', 28, 400, NOTE)] },
        ] },
        cloud_ai: { blocks: [
          above(451, 748, [text('$value', 39, 400, CLOUD_AI), text('(3%) Y/Y', 28, 400, NOTE)]),
          { x: 399, top: 934, anchor: 'end', lines: [text('Cloud & AI', 40, 800, CLOUD_AI), text('10% operating margin', 28, 400, NOTE)] },
        ] },
        corporate_other: { blocks: [
          above(451, 1189, [text('$value', 39, 400, CORPORATE), text('(2%) Y/Y', 28, 400, NOTE)]),
          { x: 390, top: 1268, anchor: 'end', lines: [text('Corporate & Other', 40, 800, CORPORATE)] },
        ] },
        revenue: { blocks: [above(918, 538, [text('Revenue', 40, 800), text('$value', 39, 400), text('+18% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [above(1386, 378, [text('Gross profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('36% margin', 28, 400, NOTE), text('+3pp Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [above(1386, 1156, [text('Cost of', 40, 800, RED_LABEL), text('revenue', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        operating_profit: { blocks: [above(1858, 299, [text('Operating profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('5% margin', 28, 400, NOTE), text('(4pp) Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [above(1853, 824, [text('Operating', 40, 800, RED_LABEL), text('expenses', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        net_profit: { blocks: [above(2498, 334, [text('Net profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('5% margin', 28, 400, NOTE), text('(13pp) Y/Y', 28, 400, NOTE)])] },
        tax_other: { blocks: [above(2496, 548, [text('Tax & Other', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL)])] },
        sga: { blocks: [
          { x: 2423, top: 745, anchor: 'start', lines: [text('SG&A', 31, 800, RED_LABEL)] },
          { x: 2515, top: 745, anchor: 'start', lines: [text('($1.7B)', 30, 400, RED_LABEL)] },
          above(2516, 783, [text('18% of revenue', 28, 400, NOTE), text('+3pp Y/Y', 28, 400, NOTE)], 7),
        ] },
        rnd: { blocks: [
          { x: 2432, top: 937, anchor: 'start', lines: [text('R&D', 31, 800, RED_LABEL)] },
          { x: 2506, top: 937, anchor: 'start', lines: [text('($0.7B)', 30, 400, RED_LABEL)] },
          above(2516, 975, [text('8% of revenue', 28, 400, NOTE), text('+1pp Y/Y', 28, 400, NOTE)], 7),
        ] },
        intangibles: { blocks: [
          { x: 2379, top: 1107, anchor: 'start', lines: [text('Intangibles', 31, 800, RED_LABEL)] },
          { x: 2559, top: 1107, anchor: 'start', lines: [text('($0.3B)', 30, 400, RED_LABEL)] },
          above(2516, 1145, [text('3% of revenue', 28, 400, NOTE), text('+2pp Y/Y', 28, 400, NOTE)], 7),
        ] },
        other_opex: { blocks: [
          { x: 2404, top: 1259, anchor: 'start', lines: [text('Other', 31, 800, RED_LABEL)] },
          { x: 2501, top: 1259, anchor: 'start', lines: [text('($0.1B)', 30, 400, RED_LABEL)] },
          above(2500, 1297, [text('1% of revenue', 28, 400, NOTE), text('(0pp) Y/Y', 28, 400, NOTE)], 7),
        ] },
      },
    },
    nodes: [
      { id: 'networking', col: 0, order: 0, type: 'source', label: 'Networking', value: 2.706, notes: ['24% operating margin', '+151% Y/Y'], color: NETWORKING, labelColor: NETWORKING, linkTint: NETWORKING_LINK },
      { id: 'cloud_ai', col: 0, order: 1, type: 'source', label: 'Cloud & AI', value: 6.334, notes: ['10% operating margin', '(3%) Y/Y'], color: CLOUD_AI, labelColor: CLOUD_AI, linkTint: CLOUD_AI_LINK },
      { id: 'corporate_other', col: 0, order: 2, type: 'source', label: 'Corporate & Other', value: 0.261, notes: ['(2%) Y/Y'], color: CORPORATE, labelColor: CORPORATE, linkTint: CORPORATE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 9.301, notes: ['+18% Y/Y'], color: '#000000', labelColor: '#000000', linkTint: NETWORKING_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.34, notes: ['36% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.961, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.47, notes: ['5% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.87, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.452, notes: ['5% margin', '(13pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_other', col: 4, order: 1, type: 'cost', label: 'Tax & Other', value: 0.018, valueText: '($18M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 2, type: 'cost', label: 'SG&A', value: 1.698, notes: ['18% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.744, notes: ['8% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intangibles', col: 4, order: 4, type: 'cost', label: 'Intangibles', value: 0.311, notes: ['3% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.117, notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'networking', target: 'revenue', value: 2.706, width: 106, sourceOrder: 0, targetOrder: 0, linkTint: { left: NETWORKING_LINK, right: NETWORKING_LINK } },
      { source: 'cloud_ai', target: 'revenue', value: 6.334, width: 251, sourceOrder: 0, targetOrder: 1, linkTint: { left: CLOUD_AI_LINK, right: CLOUD_AI_LINK } },
      { source: 'corporate_other', target: 'revenue', value: 0.261, sourceWidth: 10, targetWidth: 12, sourceOrder: 0, targetOrder: 2, linkTint: { left: CORPORATE_LINK, right: CORPORATE_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.34, width: 132, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.961, sourceWidth: 237, targetWidth: 235, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.47, sourceWidth: 19, targetWidth: 16, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.87, sourceWidth: 113, targetWidth: 113, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.452, sourceWidth: 14, targetWidth: 16, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_other', value: 0.018, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.698, width: 66, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.744, width: 27, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'intangibles', value: 0.311, width: 10, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.117, sourceWidth: 10, targetWidth: 2, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '慧与 · 2026 财年第一季度',
        meta: { title: '慧与 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 1 月', titleTextLength: 1750 },
        nodes: {
          networking: { label: '网络业务', notes: ['营业利润率 24%', '同比 +151%'] },
          cloud_ai: { label: '云与 AI', notes: ['营业利润率 10%', '同比 (3%)'] },
          corporate_other: { label: '公司及其他', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 36%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (4 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (13 个百分点)'] },
          tax_other: { label: '税费及其他' },
          sga: { label: '销售、一般及行政', notes: ['占收入 18%', '同比 +3 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 8%', '同比 +1 个百分点'] },
          intangibles: { label: '无形资产摊销', notes: ['占收入 3%', '同比 +2 个百分点'] },
          other_opex: { label: '其他', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            networking: { blocks: [above(448, 450, [text('$value', 39, 400, NETWORKING), text('同比 +151%', 28, 400, NOTE)]), { x: 384, top: 560, anchor: 'end', lines: [text('网络业务', 40, 800, NETWORKING), text('营业利润率 24%', 28, 400, NOTE)] }] },
            cloud_ai: { blocks: [above(451, 748, [text('$value', 39, 400, CLOUD_AI), text('同比 (3%)', 28, 400, NOTE)]), { x: 399, top: 934, anchor: 'end', lines: [text('云与 AI', 40, 800, CLOUD_AI), text('营业利润率 10%', 28, 400, NOTE)] }] },
            corporate_other: { blocks: [above(451, 1189, [text('$value', 39, 400, CORPORATE), text('同比 (2%)', 28, 400, NOTE)]), { x: 390, top: 1268, anchor: 'end', lines: [text('公司及其他', 40, 800, CORPORATE)] }] },
            revenue: { blocks: [above(918, 538, [text('收入', 40, 800), text('$value', 39, 400), text('同比 +18%', 28, 400, NOTE)])] },
            gross_profit: { blocks: [above(1386, 378, [text('毛利润', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('利润率 36%', 28, 400, NOTE), text('同比 +3 个百分点', 28, 400, NOTE)])] },
            cost_of_revenue: { blocks: [above(1386, 1156, [text('收入', 40, 800, RED_LABEL), text('成本', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
            operating_profit: { blocks: [above(1858, 299, [text('营业利润', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('利润率 5%', 28, 400, NOTE), text('同比 (4 个百分点)', 28, 400, NOTE)])] },
            operating_expenses: { blocks: [above(1853, 824, [text('运营', 40, 800, RED_LABEL), text('费用', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
            net_profit: { blocks: [above(2498, 334, [text('净利润', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('利润率 5%', 28, 400, NOTE), text('同比 (13 个百分点)', 28, 400, NOTE)])] },
            tax_other: { blocks: [above(2496, 548, [text('税费及其他', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL)])] },
            sga: { blocks: [
              above(2516, 745, [text('销售管理费（$1.7B）', 29, 800, RED_LABEL)]),
              above(2516, 783, [text('占收入 18%', 28, 400, NOTE), text('同比 +3 个百分点', 28, 400, NOTE)], 7),
            ] },
            rnd: { blocks: [
              above(2516, 937, [text('研发（$0.7B）', 31, 800, RED_LABEL)]),
              above(2516, 975, [text('占收入 8%', 28, 400, NOTE), text('同比 +1 个百分点', 28, 400, NOTE)], 7),
            ] },
            intangibles: { blocks: [
              above(2516, 1107, [text('无形资产摊销（$0.3B）', 26, 800, RED_LABEL)]),
              above(2516, 1145, [text('占收入 3%', 28, 400, NOTE), text('同比 +2 个百分点', 28, 400, NOTE)], 7),
            ] },
            other_opex: { blocks: [
              above(2500, 1259, [text('其他（$0.1B）', 31, 800, RED_LABEL)]),
              above(2500, 1297, [text('占收入 1%', 28, 400, NOTE), text('同比 (0 个百分点)', 28, 400, NOTE)], 7),
            ] },
          },
        },
      },
    },
  });
})();

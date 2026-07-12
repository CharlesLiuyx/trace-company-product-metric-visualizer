/* HPE Q2 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
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
  const GREEN_LINK = '#9bce9b';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e18383';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2415;

  const hpeLogo = `
    <g transform="translate(-11,0)">
      <path fill="#000" d="M0 0h31v57h99V0h31v155h-31V88H31v67H0z"/>
      <path fill="#000" d="M202 0h78c49 0 80 29 80 77 0 47-31 77-80 77h-47v1h-31zM233 30v94h46c31 0 50-17 50-47s-19-47-50-47z"/>
      <path fill="#00b388" d="M389 0h151v29H421v33h108v30H421v34h119v29H389z"/>
    </g>`;

  const above = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });
  const side = (top, lines, x = RIGHT_LABEL_X, lineGap = 7) => ({ x, top, anchor: 'start', lineGap, lines });
  const text = (value, size, weight = 800, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hpe-q2-fy26',
    name: 'HPE · Q2 FY26',
    company: 'HPE',
    meta: {
      company: 'HPE',
      title: 'HPE Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/hpe-q2-fy26.png', width: 2667, height: 1500 },
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
      scale: 41.5,
      nodes: {
        networking: { x: 416, y: 549, width: 71, height: 110 },
        cloud_ai: { x: 416, y: 833, width: 71, height: 320 },
        corporate_other: { x: 416, y: 1310, width: 71, height: 10 },
        revenue: { x: 883, y: 669, width: 70, height: 446 },
        gross_profit: { x: 1350, y: 573, width: 71, height: 160 },
        cost_of_revenue: { x: 1350, y: 926, width: 71, height: 281 },
        operating_profit: { x: 1818, y: 500, width: 70, height: 29 },
        operating_expenses: { x: 1815, y: 696, width: 70, height: 128 },
        net_profit: { x: 2284, y: 377, width: 71, height: 22 },
        tax: { x: 2284, y: 598, width: 71, height: 1 },
        other_nonoperating: { x: 2284, y: 687, width: 71, height: 1 },
        sga: { x: 2284, y: 797, width: 71, height: 75 },
        rnd: { x: 2284, y: 991, width: 71, height: 37 },
        intangibles: { x: 2284, y: 1147, width: 71, height: 11 },
        other_opex: { x: 2284, y: 1293, width: 71, height: 2 },
      },
      labels: {
        networking: { blocks: [
          above(451, 460, [text('$value', 39, 400, NETWORKING), text('+148% Y/Y', 28, 400, NOTE)]),
          { x: 399, top: 572, anchor: 'end', lines: [text('Networking', 40, 800, NETWORKING), text('22% operating margin', 28, 400, NOTE)] },
        ] },
        cloud_ai: { blocks: [
          above(451, 744, [text('$value', 39, 400, CLOUD_AI), text('+23% Y/Y', 28, 400, NOTE)]),
          { x: 399, top: 952, anchor: 'end', lines: [text('Cloud & AI', 40, 800, CLOUD_AI), text('12% operating margin', 28, 400, NOTE)] },
        ] },
        corporate_other: { blocks: [
          above(451, 1220, [text('$value', 39, 400, CORPORATE), text('+3% Y/Y', 28, 400, NOTE)]),
          { x: 390, top: 1284, anchor: 'end', lines: [text('Corporate & Other', 40, 800, CORPORATE)] },
        ] },
        revenue: { blocks: [above(918, 530, [text('Revenue', 40, 800), text('$value', 39, 400), text('+40% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [above(1386, 394, [text('Gross profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('37% margin', 28, 400, NOTE), text('+8pp Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [above(1386, 1233, [text('Cost of', 40, 800, RED_LABEL), text('revenue', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        operating_profit: { blocks: [above(1853, 320, [text('Operating profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('7% margin', 28, 400, NOTE), text('+22pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [above(1850, 850, [text('Operating', 40, 800, RED_LABEL), text('expenses', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        net_profit: { blocks: [side(328, [text('Net profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('6% margin', 28, 400, NOTE), text('+19pp Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [side(568, [text('Tax', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL)])] },
        other_nonoperating: { blocks: [side(659, [text('Other', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL)])] },
        sga: { blocks: [side(791, [text('SG&A', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL), text('17% of revenue', 28, 400, NOTE), text('+0pp Y/Y', 28, 400, NOTE)])] },
        rnd: { blocks: [side(980, [text('R&D', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL), text('9% of revenue', 28, 400, NOTE), text('+2pp Y/Y', 28, 400, NOTE)])] },
        intangibles: { blocks: [side(1120, [text('Intangibles', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL), text('3% of revenue', 28, 400, NOTE), text('+3pp Y/Y', 28, 400, NOTE)])] },
        other_opex: { blocks: [side(1274, [text('Other', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL), text('1% of revenue', 28, 400, NOTE), text('(18pp) Y/Y', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'networking', col: 0, order: 0, type: 'source', label: 'Networking', value: 2.7, notes: ['22% operating margin', '+148% Y/Y'], color: NETWORKING, labelColor: NETWORKING, linkTint: NETWORKING_LINK },
      { id: 'cloud_ai', col: 0, order: 1, type: 'source', label: 'Cloud & AI', value: 7.7, notes: ['12% operating margin', '+23% Y/Y'], color: CLOUD_AI, labelColor: CLOUD_AI, linkTint: CLOUD_AI_LINK },
      { id: 'corporate_other', col: 0, order: 2, type: 'source', label: 'Corporate & Other', value: 0.3, notes: ['+3% Y/Y'], color: CORPORATE, labelColor: CORPORATE, linkTint: CORPORATE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 10.7, notes: ['+40% Y/Y'], color: '#000000', labelColor: '#000000', linkTint: NETWORKING_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.9, notes: ['37% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, notes: ['7% margin', '+22pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.6, notes: ['6% margin', '+19pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_nonoperating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 1.8, notes: ['17% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 0.9, notes: ['9% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intangibles', col: 4, order: 5, type: 'cost', label: 'Intangibles', value: 0.3, notes: ['3% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 4, order: 6, type: 'cost', label: 'Other', value: 0.1, notes: ['1% of revenue', '(18pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'networking', target: 'revenue', value: 2.7, width: 110, sourceOrder: 0, targetOrder: 0, linkTint: { left: NETWORKING_LINK, right: NETWORKING_LINK } },
      { source: 'cloud_ai', target: 'revenue', value: 7.7, width: 320, sourceOrder: 0, targetOrder: 1, linkTint: { left: CLOUD_AI_LINK, right: CLOUD_AI_LINK } },
      { source: 'corporate_other', target: 'revenue', value: 0.3, sourceWidth: 10, targetWidth: 16, sourceOrder: 0, targetOrder: 2, linkTint: { left: CORPORATE_LINK, right: CORPORATE_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.9, width: 160, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.8, sourceWidth: 286, targetWidth: 281, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.7, width: 29, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.2, sourceWidth: 131, targetWidth: 128, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.6, sourceWidth: 22, targetWidth: 22, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.1, sourceWidth: 6, targetWidth: 1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.8, width: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, width: 37, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'intangibles', value: 0.3, width: 11, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 5, targetWidth: 2, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '慧与 · 2026 财年第二季度',
        meta: { title: '慧与 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 4 月', titleTextLength: 1750 },
        nodes: {
          networking: { label: '网络业务', notes: ['营业利润率 22%', '同比 +148%'] },
          cloud_ai: { label: '云与 AI', notes: ['营业利润率 12%', '同比 +23%'] },
          corporate_other: { label: '公司及其他', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 +40%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 37%', '同比 +8 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +22 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +19 个百分点'] },
          tax: { label: '税费' },
          other_nonoperating: { label: '其他' },
          sga: { label: '销售、一般及行政', notes: ['占收入 17%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 +2 个百分点'] },
          intangibles: { label: '无形资产摊销', notes: ['占收入 3%', '同比 +3 个百分点'] },
          other_opex: { label: '其他', notes: ['占收入 1%', '同比 (18 个百分点)'] },
        },
        layout: {
          labels: {
            networking: { blocks: [above(451, 460, [text('$value', 39, 400, NETWORKING), text('同比 +148%', 28, 400, NOTE)]), { x: 399, top: 572, anchor: 'end', lines: [text('网络业务', 40, 800, NETWORKING), text('营业利润率 22%', 28, 400, NOTE)] }] },
            cloud_ai: { blocks: [above(451, 744, [text('$value', 39, 400, CLOUD_AI), text('同比 +23%', 28, 400, NOTE)]), { x: 399, top: 952, anchor: 'end', lines: [text('云与 AI', 40, 800, CLOUD_AI), text('营业利润率 12%', 28, 400, NOTE)] }] },
            corporate_other: { blocks: [above(451, 1220, [text('$value', 39, 400, CORPORATE), text('同比 +3%', 28, 400, NOTE)]), { x: 390, top: 1284, anchor: 'end', lines: [text('公司及其他', 40, 800, CORPORATE)] }] },
            revenue: { blocks: [above(918, 530, [text('收入', 40, 800), text('$value', 39, 400), text('同比 +40%', 28, 400, NOTE)])] },
            gross_profit: { blocks: [above(1386, 394, [text('毛利润', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('利润率 37%', 28, 400, NOTE), text('同比 +8 个百分点', 28, 400, NOTE)])] },
            cost_of_revenue: { blocks: [above(1386, 1233, [text('收入', 40, 800, RED_LABEL), text('成本', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
            operating_profit: { blocks: [above(1853, 320, [text('营业利润', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('利润率 7%', 28, 400, NOTE), text('同比 +22 个百分点', 28, 400, NOTE)])] },
            operating_expenses: { blocks: [above(1850, 850, [text('运营', 40, 800, RED_LABEL), text('费用', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
            net_profit: { blocks: [side(328, [text('净利润', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('利润率 6%', 28, 400, NOTE), text('同比 +19 个百分点', 28, 400, NOTE)])] },
            tax: { blocks: [side(568, [text('税费', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL)])] },
            other_nonoperating: { blocks: [side(659, [text('其他', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL)])] },
            sga: { blocks: [side(791, [text('销售、一般及行政', 29, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL), text('占收入 17%', 28, 400, NOTE), text('同比 +0 个百分点', 28, 400, NOTE)])] },
            rnd: { blocks: [side(980, [text('研发', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL), text('占收入 9%', 28, 400, NOTE), text('同比 +2 个百分点', 28, 400, NOTE)])] },
            intangibles: { blocks: [side(1120, [text('无形资产摊销', 29, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL), text('占收入 3%', 28, 400, NOTE), text('同比 +3 个百分点', 28, 400, NOTE)])] },
            other_opex: { blocks: [side(1274, [text('其他', 31, 800, RED_LABEL), text('$value', 30, 400, RED_LABEL), text('占收入 1%', 28, 400, NOTE), text('同比 (18 个百分点)', 28, 400, NOTE)])] },
          },
        },
      },
    },
  });
})();

/* Accenture Q3 FY26 income statement ($B), measured from the supplied source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const PURPLE = '#9000ff';
  const PURPLE_LINK = '#bd78ed';
  const BLACK = '#000000';
  const GRAY_LINK = '#919191';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9bce9b';
  const RED = '#dc0000';
  const RED_LABEL = '#9e1b08';
  const RED_LINK = '#e18282';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2438;

  const line = (text, size, weight = 400, color) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });
  const above = (x, top, lines) => block(x, top, lines);
  const side = (top, lines) => block(RIGHT_LABEL_X, top, lines, 'start', 7);

  const labelsEn = {
    communications_media_tech: { blocks: [
      above(465, 400, [line('$value', 39, 400, PURPLE), line('+10% Y/Y', 28, 400, NOTE)]),
      block(405, 478, [line('Communications', 40, 800, PURPLE), line('Media & Tech', 40, 800, PURPLE)], 'end', 10),
    ] },
    financial_services: { blocks: [
      above(465, 586, [line('$value', 39, 400, PURPLE), line('+6% Y/Y', 28, 400, NOTE)]),
      block(405, 669, [line('Financial', 40, 800, PURPLE), line('Services', 40, 800, PURPLE)], 'end', 10),
    ] },
    health_public_services: { blocks: [
      above(465, 761, [line('$value', 39, 400, PURPLE), line('+2% Y/Y', 28, 400, NOTE)]),
      block(405, 851, [line('Health &', 40, 800, PURPLE), line('Public Services', 40, 800, PURPLE)], 'end', 10),
    ] },
    products: { blocks: [
      above(465, 960, [line('$value', 39, 400, PURPLE), line('+6% Y/Y', 28, 400, NOTE)]),
      block(405, 1087, [line('Products', 40, 800, PURPLE)], 'end'),
    ] },
    resources: { blocks: [
      above(465, 1174, [line('$value', 39, 400, PURPLE), line('+3% Y/Y', 28, 400, NOTE)]),
      block(405, 1276, [line('Resources', 40, 800, PURPLE)], 'end'),
    ] },
    revenue: { blocks: [
      above(777, 590, [line('Revenue', 40, 800), line('$value', 39), line('+6% Y/Y', 28, 400, NOTE)]),
    ] },
    consulting: { blocks: [
      above(1088, 468, [line('Consulting', 40, 800), line('$value', 39), line('+4% Y/Y', 28, 400, NOTE)]),
    ] },
    managed_services: { blocks: [
      above(1088, 1218, [line('Managed Services', 40, 800), line('$value', 39), line('+8% Y/Y', 28, 400, NOTE)]),
    ] },
    revenue_total: { blocks: [
      above(1398, 590, [line('Revenue', 40, 800), line('$value', 39), line('+6% Y/Y', 28, 400, NOTE)]),
    ] },
    gross_profit: { blocks: [
      above(1711, 428, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('33% margin', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)]),
    ] },
    cost_of_services: { blocks: [
      above(1711, 1215, [line('Cost of', 40, 800, RED_LABEL), line('services', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)]),
    ] },
    operating_profit: { blocks: [
      above(2022, 342, [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('17% margin', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)]),
    ] },
    operating_expenses: { blocks: [
      above(2022, 878, [line('Operating', 40, 800, RED_LABEL), line('expenses', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)]),
    ] },
    net_profit: { blocks: [side(379, [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('13% margin', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)])] },
    tax: { blocks: [side(594, [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    other: { blocks: [side(704, [line('Other', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    sm: { blocks: [side(943, [line('S&M', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('10% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
    ga: { blocks: [side(1208, [line('G&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('6% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)])] },
  };

  const labelsZh = {
    communications_media_tech: { blocks: [above(465, 400, [line('$value', 39, 400, PURPLE), line('同比 +10%', 28, 400, NOTE)]), block(405, 490, [line('通信', 40, 800, PURPLE), line('媒体与科技', 40, 800, PURPLE)], 'end', 11)] },
    financial_services: { blocks: [above(465, 586, [line('$value', 39, 400, PURPLE), line('同比 +6%', 28, 400, NOTE)]), block(405, 681, [line('金融服务', 40, 800, PURPLE)], 'end')] },
    health_public_services: { blocks: [above(465, 761, [line('$value', 39, 400, PURPLE), line('同比 +2%', 28, 400, NOTE)]), block(405, 864, [line('医疗健康与', 38, 800, PURPLE), line('公共服务', 38, 800, PURPLE)], 'end', 11)] },
    products: { blocks: [above(465, 960, [line('$value', 39, 400, PURPLE), line('同比 +6%', 28, 400, NOTE)]), block(405, 1096, [line('产品', 40, 800, PURPLE)], 'end')] },
    resources: { blocks: [above(465, 1174, [line('$value', 39, 400, PURPLE), line('同比 +3%', 28, 400, NOTE)]), block(405, 1286, [line('资源', 40, 800, PURPLE)], 'end')] },
    revenue: { blocks: [above(777, 590, [line('收入', 40, 800), line('$value', 39), line('同比 +6%', 28, 400, NOTE)])] },
    consulting: { blocks: [above(1088, 468, [line('咨询', 40, 800), line('$value', 39), line('同比 +4%', 28, 400, NOTE)])] },
    managed_services: { blocks: [above(1088, 1218, [line('托管服务', 40, 800), line('$value', 39), line('同比 +8%', 28, 400, NOTE)])] },
    revenue_total: { blocks: [above(1398, 590, [line('收入', 40, 800), line('$value', 39), line('同比 +6%', 28, 400, NOTE)])] },
    gross_profit: { blocks: [above(1711, 428, [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 33%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)])] },
    cost_of_services: { blocks: [above(1711, 1215, [line('服务成本', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)])] },
    operating_profit: { blocks: [above(2022, 342, [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 17%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [above(2022, 878, [line('营业费用', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)])] },
    net_profit: { blocks: [side(379, [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 13%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)])] },
    tax: { blocks: [side(594, [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    other: { blocks: [side(704, [line('其他', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    sm: { blocks: [side(943, [line('销售与市场', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 10%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)])] },
    ga: { blocks: [side(1208, [line('一般及行政', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 6%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'accenture-q3-fy26',
    name: 'Accenture · Q3 FY26',
    company: 'Accenture',
    meta: {
      company: 'Accenture',
      title: 'Accenture Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/accenture-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2410,
      periodX: 239,
      periodY: 315,
      periodNoteY: 356,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      linkOpacity: 1,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: `
      <g data-typography-role="brand">
        <text x="1120" y="296" text-anchor="middle" font-family="Arial,sans-serif" font-size="142" font-weight="900" fill="#9700ff">&gt;</text>
        <text x="1120" y="410" text-anchor="middle" font-family="Arial,sans-serif" font-size="150" font-weight="900" letter-spacing="-10" fill="#000000">accenture</text>
      </g>`,
    layout: {
      scale: 19.55,
      nodes: {
        communications_media_tech: { x: 429, y: 488, width: 73, height: 62 },
        financial_services: { x: 429, y: 674, width: 73, height: 68 },
        health_public_services: { x: 429, y: 852, width: 73, height: 76 },
        products: { x: 429, y: 1048, width: 73, height: 108 },
        resources: { x: 429, y: 1264, width: 73, height: 51 },
        revenue: { x: 741, y: 729, width: 72, height: 365 },
        consulting: { x: 1052, y: 609, width: 72, height: 180 },
        managed_services: { x: 1052, y: 1015, width: 72, height: 184 },
        revenue_total: { x: 1362, y: 729, width: 72, height: 365 },
        gross_profit: { x: 1675, y: 610, width: 72, height: 119 },
        cost_of_services: { x: 1675, y: 950, width: 72, height: 246 },
        operating_profit: { x: 1986, y: 520, width: 72, height: 64 },
        operating_expenses: { x: 1986, y: 796, width: 72, height: 59 },
        net_profit: { x: 2299, y: 420, width: 72, height: 48 },
        tax: { x: 2299, y: 622, width: 72, height: 15 },
        other: { x: 2299, y: 736, width: 72, height: 2 },
        sm: { x: 2299, y: 961, width: 72, height: 38 },
        ga: { x: 2299, y: 1219, width: 72, height: 23 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'communications_media_tech', col: 0, order: 0, type: 'source', label: ['Communications', 'Media & Tech'], value: 3.2, notes: ['+10% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'financial_services', col: 0, order: 1, type: 'source', label: ['Financial', 'Services'], value: 3.5, notes: ['+6% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'health_public_services', col: 0, order: 2, type: 'source', label: ['Health &', 'Public Services'], value: 3.8, notes: ['+2% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'products', col: 0, order: 3, type: 'source', label: 'Products', value: 5.7, notes: ['+6% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'resources', col: 0, order: 4, type: 'source', label: 'Resources', value: 2.5, notes: ['+3% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 18.7, notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'consulting', col: 2, order: 0, type: 'hub', label: 'Consulting', value: 9.3, notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'managed_services', col: 2, order: 1, type: 'hub', label: 'Managed Services', value: 9.4, notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue_total', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 18.7, notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 6.1, notes: ['33% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_services', col: 4, order: 1, type: 'cost', label: ['Cost of', 'services'], value: 12.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 3.2, notes: ['17% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.4, notes: ['13% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.025, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 1.8, notes: ['10% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 1.1, notes: ['6% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'communications_media_tech', target: 'revenue', value: 3.2, width: 62, sourceWidth: 62, targetWidth: 62, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'financial_services', target: 'revenue', value: 3.5, width: 68, sourceWidth: 68, targetWidth: 68, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'health_public_services', target: 'revenue', value: 3.8, width: 76, sourceWidth: 76, targetWidth: 76, sourceOrder: 0, targetOrder: 2, linkTint: PURPLE_LINK },
      { source: 'products', target: 'revenue', value: 5.7, width: 108, sourceWidth: 108, targetWidth: 108, sourceOrder: 0, targetOrder: 3, linkTint: PURPLE_LINK },
      { source: 'resources', target: 'revenue', value: 2.5, width: 49, sourceWidth: 49, targetWidth: 49, sourceOrder: 0, targetOrder: 4, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'consulting', value: 9.3, width: 180, sourceWidth: 180, targetWidth: 180, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'managed_services', value: 9.4, width: 184, sourceWidth: 184, targetWidth: 184, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'consulting', target: 'revenue_total', value: 9.3, width: 180, sourceWidth: 180, targetWidth: 180, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'managed_services', target: 'revenue_total', value: 9.4, width: 184, sourceWidth: 184, targetWidth: 184, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue_total', target: 'gross_profit', value: 6.1, width: 119, sourceWidth: 119, targetWidth: 119, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue_total', target: 'cost_of_services', value: 12.6, width: 246, sourceWidth: 246, targetWidth: 246, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.2, width: 63, sourceWidth: 63, targetWidth: 63, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.0, width: 56, sourceWidth: 56, targetWidth: 58, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.4, width: 48, sourceWidth: 48, targetWidth: 48, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, width: 15, sourceWidth: 15, targetWidth: 15, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.025, width: 1, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.8, width: 36, sourceWidth: 36, targetWidth: 37, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.1, width: 22, sourceWidth: 22, targetWidth: 23, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '埃森哲 · 2026 财年第三季度',
        meta: { title: '埃森哲 2026 财年第三季度利润表', period: '2026 财年第三季度', periodNote: '截至 2026 年 5 月', titleSize: 86, titleTextLength: 1900 },
        nodes: {
          communications_media_tech: { label: ['通信', '媒体与科技'], notes: ['同比 +10%'] }, financial_services: { label: '金融服务', notes: ['同比 +6%'] }, health_public_services: { label: ['医疗健康与', '公共服务'], notes: ['同比 +2%'] }, products: { label: '产品', notes: ['同比 +6%'] }, resources: { label: '资源', notes: ['同比 +3%'] }, revenue: { label: '收入', notes: ['同比 +6%'] }, consulting: { label: '咨询', notes: ['同比 +4%'] }, managed_services: { label: '托管服务', notes: ['同比 +8%'] }, revenue_total: { label: '收入', notes: ['同比 +6%'] }, gross_profit: { label: '毛利润', notes: ['利润率 33%', '同比 (0 个百分点)'] }, cost_of_services: { label: '服务成本' }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +0 个百分点'] }, operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +0 个百分点'] }, tax: { label: '税费' }, other: { label: '其他' }, sm: { label: '销售与市场', notes: ['占收入 10%', '同比 (0 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 6%', '同比 +0 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* Accenture Q2 FY26 income statement ($B), measured from the supplied source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const PURPLE = '#a100ff';
  const PURPLE_LINK = '#cd85f7';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2493;

  const line = (text, size, weight = 400, color) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });
  const above = (x, top, lines) => block(x, top, lines);
  const side = (top, lines, x = RIGHT_LABEL_X) => block(x, top, lines, 'middle', 7);

  const labelsEn = {
    communications_media_tech: { blocks: [
      above(464, 337, [line('$value', 39, 400, PURPLE), line('+13% Y/Y', 28, 400, NOTE)]),
      block(250, 413, [line('Communications', 40, 800, PURPLE), line('Media & Tech', 40, 800, PURPLE)], 'middle', 10),
    ] },
    financial_services: { blocks: [
      above(464, 536, [line('$value', 39, 400, PURPLE), line('+13% Y/Y', 28, 400, NOTE)]),
      block(250, 619, [line('Financial', 40, 800, PURPLE), line('Services', 40, 800, PURPLE)], 'middle', 10),
    ] },
    health_public_services: { blocks: [
      above(464, 719, [line('$value', 39, 400, PURPLE), line('+2% Y/Y', 28, 400, NOTE)]),
      block(250, 805, [line('Health &', 40, 800, PURPLE), line('Public Services', 40, 800, PURPLE)], 'middle', 10),
    ] },
    products: { blocks: [
      above(464, 914, [line('$value', 39, 400, PURPLE), line('+8% Y/Y', 28, 400, NOTE)]),
      block(250, 1041, [line('Products', 40, 800, PURPLE)]),
    ] },
    resources: { blocks: [
      above(464, 1151, [line('$value', 39, 400, PURPLE), line('+7% Y/Y', 28, 400, NOTE)]),
      block(250, 1250, [line('Resources', 40, 800, PURPLE)]),
    ] },
    revenue: { blocks: [
      above(775, 547, [line('Revenue', 40, 800), line('$value', 39), line('+8% Y/Y', 28, 400, NOTE)]),
    ] },
    consulting: { blocks: [
      above(1086, 450, [line('Consulting', 40, 800), line('$value', 39), line('+7% Y/Y', 28, 400, NOTE)]),
    ] },
    managed_services: { blocks: [
      above(1086, 1168, [line('Managed Services', 40, 800), line('$value', 39), line('+10% Y/Y', 28, 400, NOTE)]),
    ] },
    revenue_total: { blocks: [
      above(1398, 551, [line('Revenue', 40, 800), line('$value', 39), line('+8% Y/Y', 28, 400, NOTE)]),
    ] },
    gross_profit: { blocks: [
      above(1709, 421, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('30% margin', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)]),
    ] },
    cost_of_services: { blocks: [
      above(1709, 1168, [line('Cost of', 40, 800, RED_LABEL), line('services', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)]),
    ] },
    operating_profit: { blocks: [
      above(2028, 339, [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('14% margin', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)]),
    ] },
    operating_expenses: { blocks: [
      above(2021, 823, [line('Operating', 40, 800, RED_LABEL), line('expenses', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)]),
    ] },
    net_profit: { blocks: [side(385, [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('10% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
    tax: { blocks: [side(607, [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    other: { blocks: [side(731, [line('Other', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 2493)] },
    sm: { blocks: [side(869, [line('S&M', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('10% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
    ga: { blocks: [side(1072, [line('G&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('7% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)])] },
  };

  const labelsZh = {
    communications_media_tech: { blocks: [above(464, 337, [line('$value', 39, 400, PURPLE), line('同比 +13%', 28, 400, NOTE)]), block(250, 420, [line('通信', 40, 800, PURPLE), line('媒体与科技', 40, 800, PURPLE)], 'middle', 11)] },
    financial_services: { blocks: [above(464, 536, [line('$value', 39, 400, PURPLE), line('同比 +13%', 28, 400, NOTE)]), block(250, 640, [line('金融服务', 40, 800, PURPLE)])] },
    health_public_services: { blocks: [above(464, 719, [line('$value', 39, 400, PURPLE), line('同比 +2%', 28, 400, NOTE)]), block(250, 811, [line('医疗健康与', 38, 800, PURPLE), line('公共服务', 38, 800, PURPLE)], 'middle', 11)] },
    products: { blocks: [above(464, 914, [line('$value', 39, 400, PURPLE), line('同比 +8%', 28, 400, NOTE)]), block(250, 1046, [line('产品', 40, 800, PURPLE)])] },
    resources: { blocks: [above(464, 1151, [line('$value', 39, 400, PURPLE), line('同比 +7%', 28, 400, NOTE)]), block(250, 1255, [line('资源', 40, 800, PURPLE)])] },
    revenue: { blocks: [above(775, 547, [line('收入', 40, 800), line('$value', 39), line('同比 +8%', 28, 400, NOTE)])] },
    consulting: { blocks: [above(1086, 450, [line('咨询', 40, 800), line('$value', 39), line('同比 +7%', 28, 400, NOTE)])] },
    managed_services: { blocks: [above(1086, 1168, [line('托管服务', 40, 800), line('$value', 39), line('同比 +10%', 28, 400, NOTE)])] },
    revenue_total: { blocks: [above(1398, 551, [line('收入', 40, 800), line('$value', 39), line('同比 +8%', 28, 400, NOTE)])] },
    gross_profit: { blocks: [above(1709, 421, [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 30%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)])] },
    cost_of_services: { blocks: [above(1709, 1168, [line('服务成本', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)])] },
    operating_profit: { blocks: [above(2028, 339, [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 14%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)])] },
    operating_expenses: { blocks: [above(2021, 823, [line('营业费用', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)])] },
    net_profit: { blocks: [side(385, [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 10%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)])] },
    tax: { blocks: [side(607, [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    other: { blocks: [side(731, [line('其他', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    sm: { blocks: [side(869, [line('销售与市场', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 10%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)])] },
    ga: { blocks: [side(1072, [line('一般及行政', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 7%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'accenture-q2-fy26',
    name: 'Accenture · Q2 FY26',
    company: 'Accenture',
    meta: {
      company: 'Accenture',
      title: 'Accenture Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/accenture-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1332,
      titleY: 186,
      titleSize: 110,
      titleWeight: 800,
      titleTextLength: 2365,
      periodX: 243,
      periodY: 313,
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
        <path d="M1159 238 L1228 263 L1228 285 L1159 312 L1159 289 L1201 274 L1159 260 Z" fill="#a100ff"></path>
        <text x="1100" y="422" text-anchor="middle" font-family="Arial,sans-serif" font-size="150" font-weight="900" letter-spacing="-10" textLength="708" lengthAdjust="spacingAndGlyphs" fill="#000000">accenture</text>
      </g>`,
    layout: {
      scale: 19.55,
      nodes: {
        communications_media_tech: { x: 428, y: 437, width: 71, height: 59 },
        financial_services: { x: 428, y: 632, width: 71, height: 65 },
        health_public_services: { x: 428, y: 819, width: 71, height: 71 },
        products: { x: 428, y: 1013, width: 71, height: 107 },
        resources: { x: 428, y: 1253, width: 71, height: 46 },
        revenue: { x: 739, y: 696, width: 71, height: 359 },
        consulting: { x: 1050, y: 600, width: 72, height: 175 },
        managed_services: { x: 1050, y: 974, width: 72, height: 181 },
        revenue_total: { x: 1362, y: 702, width: 71, height: 359 },
        gross_profit: { x: 1673, y: 603, width: 72, height: 107 },
        cost_of_services: { x: 1673, y: 905, width: 72, height: 250 },
        operating_profit: { x: 1992, y: 520, width: 72, height: 47 },
        operating_expenses: { x: 1985, y: 750, width: 71, height: 57 },
        net_profit: { x: 2296, y: 426, width: 71, height: 35 },
        tax: { x: 2296, y: 641, width: 71, height: 9 },
        other: { x: 2296, y: 761, width: 71, height: 2 },
        sm: { x: 2296, y: 880, width: 71, height: 32 },
        ga: { x: 2296, y: 1100, width: 71, height: 23 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'communications_media_tech', col: 0, order: 0, type: 'source', label: ['Communications', 'Media & Tech'], value: 3.1, notes: ['+13% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'financial_services', col: 0, order: 1, type: 'source', label: ['Financial', 'Services'], value: 3.4, notes: ['+13% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'health_public_services', col: 0, order: 2, type: 'source', label: ['Health &', 'Public Services'], value: 3.7, notes: ['+2% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'products', col: 0, order: 3, type: 'source', label: 'Products', value: 5.5, notes: ['+8% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'resources', col: 0, order: 4, type: 'source', label: 'Resources', value: 2.4, notes: ['+7% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 18.0, valueText: '$18.0B', notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'consulting', col: 2, order: 0, type: 'hub', label: 'Consulting', value: 8.9, notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'managed_services', col: 2, order: 1, type: 'hub', label: 'Managed Services', value: 9.2, notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue_total', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 18.0, valueText: '$18.0B', notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 5.5, notes: ['30% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_services', col: 4, order: 1, type: 'cost', label: ['Cost of', 'services'], value: 12.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, notes: ['14% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.0, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['10% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.036893, valueText: '($36.893M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 1.7, notes: ['10% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 1.2, notes: ['7% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'communications_media_tech', target: 'revenue', value: 3.1, sourceWidth: 59, targetWidth: 61, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'financial_services', target: 'revenue', value: 3.4, sourceWidth: 65, targetWidth: 67, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'health_public_services', target: 'revenue', value: 3.7, sourceWidth: 71, targetWidth: 73, sourceOrder: 0, targetOrder: 2, linkTint: PURPLE_LINK },
      { source: 'products', target: 'revenue', value: 5.5, sourceWidth: 107, targetWidth: 110, sourceOrder: 0, targetOrder: 3, linkTint: PURPLE_LINK },
      { source: 'resources', target: 'revenue', value: 2.4, sourceWidth: 46, targetWidth: 48, sourceOrder: 0, targetOrder: 4, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'consulting', value: 8.9, sourceWidth: 175, targetWidth: 175, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'managed_services', value: 9.2, sourceWidth: 184, targetWidth: 181, sourceOrder: 1, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'consulting', target: 'revenue_total', value: 8.9, sourceWidth: 175, targetWidth: 176, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'managed_services', target: 'revenue_total', value: 9.2, sourceWidth: 181, targetWidth: 183, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue_total', target: 'gross_profit', value: 5.5, sourceWidth: 109, targetWidth: 107, y0: 756.5, y1: 656.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue_total', target: 'cost_of_services', value: 12.6, sourceWidth: 250, targetWidth: 250, y0: 936, y1: 1030, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 50, targetWidth: 47, y0: 628, y1: 543.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.0, sourceWidth: 57, targetWidth: 57, y0: 681.5, y1: 778.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 35, targetWidth: 35, y0: 537.5, y1: 443.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 9, targetWidth: 9, y0: 560.5, y1: 645.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.036893, sourceWidth: 2, targetWidth: 2, y0: 566, y1: 762, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.7, sourceWidth: 32, targetWidth: 32, y0: 766, y1: 896, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.2, sourceWidth: 25, targetWidth: 23, y0: 794.5, y1: 1111.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '埃森哲 · 2026 财年第二季度',
        meta: { title: '埃森哲 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 2 月', titleSize: 86, titleTextLength: 1900 },
        nodes: {
          communications_media_tech: { label: ['通信', '媒体与科技'], notes: ['同比 +13%'] }, financial_services: { label: '金融服务', notes: ['同比 +13%'] }, health_public_services: { label: ['医疗健康与', '公共服务'], notes: ['同比 +2%'] }, products: { label: '产品', notes: ['同比 +8%'] }, resources: { label: '资源', notes: ['同比 +7%'] }, revenue: { label: '收入', notes: ['同比 +8%'] }, consulting: { label: '咨询', notes: ['同比 +7%'] }, managed_services: { label: '托管服务', notes: ['同比 +10%'] }, revenue_total: { label: '收入', notes: ['同比 +8%'] }, gross_profit: { label: '毛利润', notes: ['利润率 30%', '同比 +0 个百分点'] }, cost_of_services: { label: '服务成本' }, operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +0 个百分点'] }, operating_expenses: { label: '营业费用' }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] }, tax: { label: '税费' }, other: { label: '其他' }, sm: { label: '销售与市场', notes: ['占收入 10%', '同比 (0 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 7%', '同比 +0 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* ====================================================================
 * Roblox - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/roblox-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const BLUE = '#00a2ff';
  const BLUE_LINK = '#85cef7';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const SCALE = 340 / 1459;
  const h = (value) => Math.round(value * SCALE * 100) / 100;
  const RIGHT_LABEL_X = 2360;
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const group = (x, top, anchor, lines, lineGap = 8) => ({ blocks: [{ x, top, anchor, lineGap, lines }] });

  const kpiCard = (x, y, width, height, title, value, note) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="43" fill="${BLUE}"/>
      <text x="${x + width / 2}" y="${y + 54}" text-anchor="middle" font-size="35" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="${y + 95}" text-anchor="middle" font-size="35" font-weight="400" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="${y + 138}" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">${note}</text>
    </g>`;

  const robloxWordmark = `
    <g transform="translate(665 306)">
      <text x="0" y="79" font-family="Arial Black,Arial,sans-serif" font-size="86" font-weight="900" fill="#000000">R</text>
      <g transform="translate(107 10) rotate(12 37 37)">
        <rect x="0" y="0" width="74" height="74" fill="#000000"/>
        <rect x="26" y="26" width="20" height="20" fill="${BG}"/>
      </g>
      <text x="188" y="79" font-family="Arial Black,Arial,sans-serif" font-size="86" font-weight="900" fill="#000000">BLOX</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${robloxWordmark}
      ${kpiCard(70, 1150, 159, 165, 'DAU', '144M', '+69% Y/Y')}
      ${kpiCard(236, 1150, 352, 165, 'Hours Engaged', '35.2B', '+88% Y/Y')}
      ${kpiCard(595, 1150, 190, 165, 'Bookings', '$2,222M', '+63% Y/Y')}
      <text x="385" y="1342" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">DAU = Daily Active Users</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${robloxWordmark}
      ${kpiCard(70, 1150, 159, 165, '日活用户', '144M', '同比 +69%')}
      ${kpiCard(236, 1150, 352, 165, '参与时长', '35.2B', '同比 +88%')}
      ${kpiCard(595, 1150, 190, 165, '预订额', '$2,222M', '同比 +63%')}
      <text x="385" y="1342" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">DAU = 日活跃用户</text>
    </g>`;

  const labelsEn = {
    north_america: { blocks: [
      { x: 427, top: 283, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('+34% Y/Y', 29, 400, NOTE)] },
      { x: 298, top: 425, anchor: 'middle', lineGap: 10, lines: [line('North', 40, 800), line('America', 40, 800)] },
    ] },
    europe: { blocks: [
      { x: 427, top: 614, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('+54% Y/Y', 29, 400, NOTE)] },
      { x: 374, top: 718, anchor: 'end', lines: [line('Europe', 40, 800)] },
    ] },
    apac: { blocks: [
      { x: 427, top: 783, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('+59% Y/Y', 29, 400, NOTE)] },
      { x: 318, top: 879, anchor: 'middle', lines: [line('APAC', 40, 800)] },
    ] },
    rest_of_world: { blocks: [
      { x: 427, top: 940, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('+69% Y/Y', 29, 400, NOTE)] },
      { x: 374, top: 1025, anchor: 'end', lines: [line('Rest of world', 40, 800)] },
    ] },
    revenue: group(894, 440, 'middle', [line('Revenue', 40, 800), line('$value', 39, 400), line('+43% Y/Y', 29, 400, NOTE)], 10),
    gross_profit: group(1361, 278, 'middle', [line('Gross profit', 40, 800), line('$value', 39, 400), line('78% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 9),
    cost_of_revenue: group(1361, 1021, 'middle', [line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 34, 400)]),
    operating_loss: group(1614, 997, 'middle', [line('Operating', 36, 800), line('loss', 36, 800), line('$value', 34, 400), line('(25%) margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)]),
    operating_expenses: group(1828, 439, 'middle', [line('Operating', 36, 800), line('expenses', 36, 800), line('$value', 34, 400)]),
    developer_fees: group(RIGHT_LABEL_X, 309, 'start', [line('Developer fees', 31, 800), line('$value', 29, 400), line('34% of revenue', 28, 400, NOTE), line('+5pp Y/Y', 28, 400, NOTE)]),
    infrastructure: group(RIGHT_LABEL_X, 552, 'start', [line('Infrastructure', 31, 800), line('$value', 29, 400), line('29% of revenue', 28, 400, NOTE), line('(7pp) Y/Y', 28, 400, NOTE)]),
    rnd: group(RIGHT_LABEL_X, 763, 'start', [line('R&D', 31, 800), line('$value', 29, 400), line('23% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)]),
    ga: group(RIGHT_LABEL_X, 969, 'start', [line('G&A', 31, 800), line('$value', 29, 400), line('12% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)]),
    sm: group(RIGHT_LABEL_X, 1155, 'start', [line('S&M', 31, 800), line('$value', 29, 400), line('6% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)]),
  };

  const labelsZh = {
    north_america: { blocks: [
      { x: 427, top: 283, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('同比 +34%', 29, 400, NOTE)] },
      { x: 298, top: 425, anchor: 'middle', lines: [line('北美', 40, 800)] },
    ] },
    europe: { blocks: [
      { x: 427, top: 614, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('同比 +54%', 29, 400, NOTE)] },
      { x: 374, top: 718, anchor: 'end', lines: [line('欧洲', 40, 800)] },
    ] },
    apac: { blocks: [
      { x: 427, top: 783, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('同比 +59%', 29, 400, NOTE)] },
      { x: 318, top: 879, anchor: 'middle', lines: [line('亚太', 40, 800)] },
    ] },
    rest_of_world: { blocks: [
      { x: 427, top: 940, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('同比 +69%', 29, 400, NOTE)] },
      { x: 374, top: 1025, anchor: 'end', lines: [line('世界其他地区', 40, 800)] },
    ] },
    revenue: group(894, 440, 'middle', [line('收入', 40, 800), line('$value', 39, 400), line('同比 +43%', 29, 400, NOTE)], 10),
    gross_profit: group(1361, 278, 'middle', [line('毛利润', 40, 800), line('$value', 39, 400), line('利润率 78%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)], 9),
    cost_of_revenue: group(1361, 1021, 'middle', [line('收入', 36, 800), line('成本', 36, 800), line('$value', 34, 400)]),
    operating_loss: group(1614, 997, 'middle', [line('营业', 36, 800), line('亏损', 36, 800), line('$value', 34, 400), line('利润率 (25%)', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)]),
    operating_expenses: group(1828, 439, 'middle', [line('运营', 36, 800), line('费用', 36, 800), line('$value', 34, 400)]),
    developer_fees: group(RIGHT_LABEL_X, 309, 'start', [line('开发者费用', 31, 800), line('$value', 29, 400), line('占收入 34%', 28, 400, NOTE), line('同比 +5 个百分点', 28, 400, NOTE)]),
    infrastructure: group(RIGHT_LABEL_X, 552, 'start', [line('基础设施', 31, 800), line('$value', 29, 400), line('占收入 29%', 28, 400, NOTE), line('同比 (7 个百分点)', 28, 400, NOTE)]),
    rnd: group(RIGHT_LABEL_X, 763, 'start', [line('研发', 31, 800), line('$value', 29, 400), line('占收入 23%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)]),
    ga: group(RIGHT_LABEL_X, 969, 'start', [line('管理费用', 31, 800), line('$value', 29, 400), line('占收入 12%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)]),
    sm: group(RIGHT_LABEL_X, 1155, 'start', [line('销售与市场', 31, 800), line('$value', 29, 400), line('占收入 6%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)]),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'roblox-q4-fy25',
    name: 'Roblox · Q4 FY25',
    company: 'Roblox',
    meta: {
      company: 'Roblox', title: 'Roblox Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/roblox-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2150,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, labelYOffset: 0, type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: SCALE,
      nodes: {
        north_america: { x: 391, y: 376, width: 72, height: h(836) },
        europe: { x: 391, y: 702, width: 72, height: h(281) },
        apac: { x: 391, y: 875, width: 72, height: h(164) },
        rest_of_world: { x: 391, y: 1031, width: 72, height: h(134) },
        revenue: { x: 858, y: 581, width: 72, height: h(1415) },
        gross_profit: { x: 1325, y: 460, width: 72, height: h(1100) },
        cost_of_revenue: { x: 1325, y: 929, width: 72, height: h(315) },
        operating_loss: { x: 1578, y: 895, width: 72, height: h(359) },
        operating_expenses: { x: 1793, y: 580, width: 72, height: h(1459) },
        developer_fees: { x: 2260, y: 336, width: 72, height: h(477) },
        infrastructure: { x: 2260, y: 563, width: 72, height: h(410) },
        rnd: { x: 2260, y: 789, width: 72, height: h(329) },
        ga: { x: 2260, y: 1018, width: 72, height: h(164) },
        sm: { x: 2260, y: 1200, width: 72, height: h(79) },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: ['North', 'America'], value: 836, notes: ['+34% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 281, notes: ['+54% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'apac', col: 0, order: 2, type: 'source', label: 'APAC', value: 164, notes: ['+59% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'rest_of_world', col: 0, order: 3, type: 'source', label: 'Rest of world', value: 134, notes: ['+69% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1415, notes: ['+43% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1100, notes: ['78% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 315, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -359, notes: ['(25%) margin', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 1459, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'developer_fees', col: 5, order: 0, type: 'cost', label: 'Developer fees', value: 477, notes: ['34% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'infrastructure', col: 5, order: 1, type: 'cost', label: 'Infrastructure', value: 410, notes: ['29% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 329, notes: ['23% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 164, notes: ['12% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 79, notes: ['6% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 0, type: 'cost', label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent' },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 836, sourceWidth: h(836), targetWidth: h(836), y0: 473.4, y1: 678.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 281, sourceWidth: h(281), targetWidth: h(281), y0: 734.7, y1: 808.4, sourceOrder: 1, targetOrder: 1 },
      { source: 'apac', target: 'revenue', value: 164, sourceWidth: h(164), targetWidth: h(164), y0: 894.1, y1: 860.1, sourceOrder: 2, targetOrder: 2 },
      { source: 'rest_of_world', target: 'revenue', value: 134, sourceWidth: h(134), targetWidth: h(134), y0: 1046.6, y1: 895.0, sourceOrder: 3, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 1100, sourceWidth: h(1100), targetWidth: h(1100), y0: 709.2, y1: 588.2, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 315, sourceWidth: h(315), targetWidth: h(315), y0: 874.2, y1: 965.7, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1100, sourceWidth: h(1100), targetWidth: h(1100), y0: 588.2, y1: 708.2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 359, sourceWidth: h(359), targetWidth: h(359), y0: 936.8, y1: 878.2, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'developer_fees', value: 477, sourceWidth: h(477), targetWidth: h(477), y0: 635.58, y1: 391.58, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'infrastructure', value: 410, sourceWidth: h(410), targetWidth: h(410), y0: 738.93, y1: 610.77, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 329, sourceWidth: h(329), targetWidth: h(329), y0: 825.04, y1: 827.34, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 164, sourceWidth: h(164), targetWidth: h(164), y0: 882.48, y1: 1037.11, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 79, sourceWidth: h(79), targetWidth: h(79), y0: 910.80, y1: 1209.21, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Roblox · 2025 财年第四季度',
        meta: { title: 'Roblox 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2150 },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +34%'] }, europe: { label: '欧洲', notes: ['同比 +54%'] }, apac: { label: '亚太', notes: ['同比 +59%'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +69%'] },
          revenue: { label: '收入', notes: ['同比 +43%'] }, gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 (0 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (25%)', '同比 +1 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          developer_fees: { label: '开发者费用', notes: ['占收入 34%', '同比 +5 个百分点'] }, infrastructure: { label: '基础设施', notes: ['占收入 29%', '同比 (7 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 23%', '同比 +1 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 12%', '同比 +1 个百分点'] }, sm: { label: '销售与市场', notes: ['占收入 6%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

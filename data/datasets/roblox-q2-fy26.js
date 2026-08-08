/* ====================================================================
 * Roblox - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/roblox-q2-fy26.png as a fixed
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
    <g transform="translate(665 306)" data-typography-role="brand">
      <text x="0" y="79" font-family="Arial Black,Arial,sans-serif" font-size="86" font-weight="900" fill="#000000">R</text>
      <g transform="translate(107 10) rotate(12 37 37)">
        <rect x="0" y="0" width="74" height="74" fill="#000000"/>
        <rect x="26" y="26" width="20" height="20" fill="${BG}"/>
      </g>
      <text x="188" y="79" font-family="Arial Black,Arial,sans-serif" font-size="86" font-weight="900" fill="#000000">BLOX</text>
    </g>`;

  const robloxAvatarCluster = `
    <g transform="translate(720 927)" stroke="#2b2118" stroke-width="2.3" stroke-linejoin="round">
      <g transform="translate(0 27)"><rect x="0" y="26" width="42" height="62" rx="6" fill="#b91510"/><circle cx="21" cy="14" r="19" fill="#d28b16"/><path d="M4 40 L39 66 M38 40 L6 72" stroke="#ffd33f" stroke-width="6"/><rect x="7" y="84" width="12" height="39" fill="#c27a0b"/><rect x="25" y="84" width="12" height="39" fill="#c27a0b"/><path d="M43 0 L52 85" stroke="#c89220" stroke-width="4"/></g>
      <g transform="translate(65 10)"><rect x="0" y="30" width="58" height="74" rx="5" fill="#a76b30"/><rect x="10" y="6" width="42" height="36" rx="5" fill="#c58a45"/><circle cx="18" cy="46" r="3" fill="#111"/><circle cx="38" cy="46" r="3" fill="#111"/><path d="M16 67 H42" stroke="#1c1c1c" stroke-width="5"/><rect x="5" y="101" width="13" height="43" fill="#8c8c8c"/><rect x="39" y="101" width="13" height="43" fill="#8c8c8c"/></g>
      <g transform="translate(145 0)"><rect x="22" y="55" width="55" height="80" rx="10" fill="#3b3b3b"/><circle cx="50" cy="35" r="30" fill="#ffd08b"/><path d="M20 18 C35 0 64 0 78 18 L72 28 C58 19 40 18 28 29Z" fill="#f7c02b"/><path d="M38 41 Q50 54 63 41" fill="none" stroke="#3f2719" stroke-width="3"/><rect x="28" y="131" width="17" height="55" fill="#2d5d8f"/><rect x="56" y="131" width="17" height="55" fill="#244f7c"/><path d="M14 78 C0 63 0 44 17 37" fill="none" stroke="#3b3b3b" stroke-width="15"/><path d="M76 28 L95 4" stroke="#666" stroke-width="7"/></g>
      <g transform="translate(244 37)"><rect x="4" y="45" width="53" height="67" rx="7" fill="#5a4f55"/><circle cx="31" cy="27" r="27" fill="#ffd48b"/><path d="M4 19 C26 -8 50 4 58 25 C45 18 24 17 6 29Z" fill="#d44725"/><path d="M16 36 Q31 51 46 36" fill="none" stroke="#6b2b22" stroke-width="3"/><rect x="9" y="109" width="16" height="45" fill="#5b4a3a"/><rect x="37" y="109" width="16" height="45" fill="#5b4a3a"/><path d="M55 46 L76 25" stroke="#b7b7b7" stroke-width="5"/></g>
      <g transform="translate(319 52)"><rect x="7" y="38" width="58" height="70" rx="7" fill="#1379d3"/><rect x="15" y="0" width="44" height="44" rx="8" fill="#ffe12f"/><circle cx="29" cy="21" r="3" fill="#1c1c1c"/><circle cx="46" cy="21" r="3" fill="#1c1c1c"/><path d="M29 32 Q38 24 47 32" fill="none" stroke="#1c1c1c" stroke-width="3"/><rect x="11" y="104" width="20" height="57" fill="#2db23d"/><rect x="41" y="104" width="20" height="57" fill="#36a933"/><path d="M64 46 L90 66" stroke="#f3c22e" stroke-width="14"/></g>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${robloxWordmark}${robloxAvatarCluster}
      ${kpiCard(46, 1149, 161, 165, 'DAU', '123M', '+10% Y/Y')}
      ${kpiCard(210, 1149, 351, 165, 'Hours Engaged', '29B', '+5% Y/Y')}
      ${kpiCard(569, 1149, 190, 165, 'Bookings', '$1.56B', '+8% Y/Y')}
      <text x="385" y="1342" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">DAU = Daily Active Users</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${robloxWordmark}${robloxAvatarCluster}
      ${kpiCard(46, 1149, 161, 165, '日活用户', '123M', '同比 +10%')}
      ${kpiCard(210, 1149, 351, 165, '参与时长', '29B', '同比 +5%')}
      ${kpiCard(569, 1149, 190, 165, '预订额', '$1.56B', '同比 +8%')}
      <text x="385" y="1342" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">DAU = 日活跃用户</text>
    </g>`;

  const labelsEn = {
    north_america: { blocks: [
      { x: 427, top: 272, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('+26% Y/Y', 29, 400, NOTE)] },
      { x: 298, top: 412, anchor: 'middle', lineGap: 10, lines: [line('North', 40, 800), line('America', 40, 800)] },
    ] },
    europe: { blocks: [
      { x: 427, top: 590, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('+49% Y/Y', 29, 400, NOTE)] },
      { x: 374, top: 692, anchor: 'end', lines: [line('Europe', 40, 800)] },
    ] },
    apac: { blocks: [
      { x: 427, top: 779, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('+51% Y/Y', 29, 400, NOTE)] },
      { x: 318, top: 865, anchor: 'middle', lines: [line('APAC', 40, 800)] },
    ] },
    rest_of_world: { blocks: [
      { x: 427, top: 950, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('+59% Y/Y', 29, 400, NOTE)] },
      { x: 374, top: 1031, anchor: 'end', lines: [line('Rest of world', 40, 800)] },
    ] },
    revenue: group(894, 456, 'middle', [line('Revenue', 40, 800), line('$value', 39, 400), line('+36% Y/Y', 29, 400, NOTE)], 10),
    gross_profit: group(1361, 303, 'middle', [line('Gross profit', 40, 800), line('$value', 39, 400), line('80% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)], 9),
    cost_of_revenue: group(1361, 1080, 'middle', [line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 34, 400)]),
    operating_loss: group(1604, 995, 'middle', [line('Operating', 36, 800), line('loss', 36, 800), line('$value', 34, 400), line('(16%) margin', 29, 400, NOTE), line('+14pp Y/Y', 29, 400, NOTE)]),
    operating_expenses: group(1828, 451, 'middle', [line('Operating', 36, 800), line('expenses', 36, 800), line('$value', 34, 400)]),
    developer_fees: group(RIGHT_LABEL_X, 272, 'start', [line('Developer fees', 31, 800), line('$value', 29, 400), line('25% of revenue', 28, 400, NOTE), line('(5pp) Y/Y', 28, 400, NOTE)]),
    infrastructure: group(RIGHT_LABEL_X, 488, 'start', [line('Infrastructure', 31, 800), line('$value', 29, 400), line('25% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)]),
    rnd: group(RIGHT_LABEL_X, 714, 'start', [line('R&D', 31, 800), line('$value', 29, 400), line('29% of revenue', 28, 400, NOTE), line('(7pp) Y/Y', 28, 400, NOTE)]),
    ga: group(RIGHT_LABEL_X, 934, 'start', [line('G&A', 31, 800), line('$value', 29, 400), line('14% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)]),
    sm: group(RIGHT_LABEL_X, 1117, 'start', [line('S&M', 31, 800), line('$value', 29, 400), line('4% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)]),
  };

  const labelsZh = {
    north_america: { blocks: [
      { x: 427, top: 272, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('同比 +26%', 29, 400, NOTE)] },
      { x: 298, top: 438, anchor: 'middle', lines: [line('北美', 40, 800)] },
    ] },
    europe: { blocks: [
      { x: 427, top: 590, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('同比 +49%', 29, 400, NOTE)] },
      { x: 374, top: 692, anchor: 'end', lines: [line('欧洲', 40, 800)] },
    ] },
    apac: { blocks: [
      { x: 427, top: 779, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('同比 +51%', 29, 400, NOTE)] },
      { x: 318, top: 865, anchor: 'middle', lines: [line('亚太', 40, 800)] },
    ] },
    rest_of_world: { blocks: [
      { x: 427, top: 950, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line('同比 +59%', 29, 400, NOTE)] },
      { x: 374, top: 1031, anchor: 'end', lines: [line('世界其他地区', 40, 800)] },
    ] },
    revenue: group(894, 456, 'middle', [line('收入', 40, 800), line('$value', 39, 400), line('同比 +36%', 29, 400, NOTE)], 10),
    gross_profit: group(1361, 303, 'middle', [line('毛利润', 40, 800), line('$value', 39, 400), line('利润率 80%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)], 9),
    cost_of_revenue: group(1361, 1080, 'middle', [line('收入', 36, 800), line('成本', 36, 800), line('$value', 34, 400)]),
    operating_loss: group(1604, 995, 'middle', [line('营业', 36, 800), line('亏损', 36, 800), line('$value', 34, 400), line('利润率 (16%)', 29, 400, NOTE), line('同比 +14 个百分点', 29, 400, NOTE)]),
    operating_expenses: group(1828, 451, 'middle', [line('运营', 36, 800), line('费用', 36, 800), line('$value', 34, 400)]),
    developer_fees: group(RIGHT_LABEL_X, 272, 'start', [line('开发者费用', 31, 800), line('$value', 29, 400), line('占收入 25%', 28, 400, NOTE), line('同比 (5 个百分点)', 28, 400, NOTE)]),
    infrastructure: group(RIGHT_LABEL_X, 488, 'start', [line('基础设施', 31, 800), line('$value', 29, 400), line('占收入 25%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)]),
    rnd: group(RIGHT_LABEL_X, 714, 'start', [line('研发', 31, 800), line('$value', 29, 400), line('占收入 29%', 28, 400, NOTE), line('同比 (7 个百分点)', 28, 400, NOTE)]),
    ga: group(RIGHT_LABEL_X, 934, 'start', [line('管理费用', 31, 800), line('$value', 29, 400), line('占收入 14%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)]),
    sm: group(RIGHT_LABEL_X, 1117, 'start', [line('销售与市场', 31, 800), line('$value', 29, 400), line('占收入 4%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)]),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'roblox-q2-fy26',
    name: 'Roblox · Q2 FY26',
    company: 'Roblox',
    meta: {
      company: 'Roblox', title: 'Roblox Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/roblox-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2150,
      hidePeriodStamp: true,
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
      nodes: {
        north_america: { x: 391, y: 366, width: 72, height: 191 },
        europe: { x: 391, y: 682, width: 72, height: 68 },
        apac: { x: 391, y: 870, width: 72, height: 39 },
        rest_of_world: { x: 391, y: 1040, width: 72, height: 32 },
        revenue: { x: 858, y: 605, width: 72, height: 318 },
        gross_profit: { x: 1325, y: 492, width: 72, height: 266 },
        cost_of_revenue: { x: 1325, y: 993, width: 72, height: 64 },
        operating_loss: { x: 1568, y: 918, width: 72, height: 51 },
        operating_expenses: { x: 1793, y: 611, width: 72, height: 318 },
        developer_fees: { x: 2259, y: 287, width: 72, height: 82 },
        infrastructure: { x: 2259, y: 501, width: 72, height: 82 },
        rnd: { x: 2259, y: 724, width: 72, height: 95 },
        ga: { x: 2259, y: 956, width: 72, height: 45 },
        sm: { x: 2259, y: 1148, width: 72, height: 14 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [{ id: 'tax', representation: 'data-only' }],
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: ['North', 'America'], value: 846, notes: ['+26% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 304, notes: ['+49% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'apac', col: 0, order: 2, type: 'source', label: 'APAC', value: 175, notes: ['+51% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'rest_of_world', col: 0, order: 3, type: 'source', label: 'Rest of world', value: 144, notes: ['+59% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1469, notes: ['+36% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1177, notes: ['80% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 292, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -229, notes: ['(16%) margin', '+14pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 1406, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'developer_fees', col: 5, order: 0, type: 'cost', label: 'Developer fees', value: 363, notes: ['25% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'infrastructure', col: 5, order: 1, type: 'cost', label: 'Infrastructure', value: 363, notes: ['25% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 420, notes: ['29% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 199, notes: ['14% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 61, notes: ['4% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 846, sourceWidth: 191, targetWidth: 183, y0: 461.5, y1: 696.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 304, sourceWidth: 68, targetWidth: 66, y0: 716, y1: 821, sourceOrder: 1, targetOrder: 1 },
      { source: 'apac', target: 'revenue', value: 175, sourceWidth: 39, targetWidth: 38, y0: 889.5, y1: 873, sourceOrder: 2, targetOrder: 2 },
      { source: 'rest_of_world', target: 'revenue', value: 144, sourceWidth: 32, targetWidth: 31, y0: 1056, y1: 907.5, sourceOrder: 3, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 1177, sourceWidth: 255, targetWidth: 266, y0: 732.5, y1: 625, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 292, sourceWidth: 63, targetWidth: 64, y0: 891.5, y1: 1025, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1177, sourceWidth: 266, targetWidth: 266, y0: 625, y1: 744, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 229, sourceWidth: 51, targetWidth: 52, y0: 943.5, y1: 903, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'developer_fees', value: 363, sourceWidth: 82, targetWidth: 82, y0: 652, y1: 328, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'infrastructure', value: 363, sourceWidth: 82, targetWidth: 82, y0: 734, y1: 542, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 420, sourceWidth: 95, targetWidth: 95, y0: 822.5, y1: 771.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 199, sourceWidth: 45, targetWidth: 45, y0: 892.5, y1: 978.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 61, sourceWidth: 14, targetWidth: 14, y0: 922, y1: 1155, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Roblox · 2026 财年第二季度',
        meta: { title: 'Roblox 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 2150 },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +26%'] }, europe: { label: '欧洲', notes: ['同比 +49%'] }, apac: { label: '亚太', notes: ['同比 +51%'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +59%'] },
          revenue: { label: '收入', notes: ['同比 +36%'] }, gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 +2 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (16%)', '同比 +14 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          developer_fees: { label: '开发者费用', notes: ['占收入 25%', '同比 (5 个百分点)'] }, infrastructure: { label: '基础设施', notes: ['占收入 25%', '同比 +1 个百分点'] }, rnd: { label: '研发', notes: ['占收入 29%', '同比 (7 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 14%', '同比 (1 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 4%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

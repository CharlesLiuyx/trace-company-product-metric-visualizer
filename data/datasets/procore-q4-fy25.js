/* ====================================================================
 * Procore — Q4 FY25 income statement ($M)
 * Fixed SVG Sankey measured from input/processed/procore-q4-fy25.png.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const DARK = '#000000';
  const DARK_LINK = '#858585';
  const ORANGE = '#ff3d00';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2395;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ blocks: [{ x, top, anchor, lines, lineGap }] });

  // The crop was validated under data/assets/icon-references/procore/. This
  // remains a pure SVG reconstruction, so no source bitmap enters the chart.
  const procoreLogo = `
    <g fill="#000000">
      <path d="M0 0H84V45H19V81H0ZM19 16V29H65V16Z" fill-rule="evenodd"/>
      <path d="M96 0H179V45H151L190 81H164L129 47H115V81H96ZM115 16V30H160V16Z" fill-rule="evenodd"/>
      <path d="M202 0H271L286 18V63L271 81H202L187 63V18ZM214 16L205 28V53L214 65H259L268 53V28L259 16Z" fill-rule="evenodd"/>
      <path d="M300 0H371V18H333L322 29V52L333 63H371V81H300L285 63V18Z"/>
      <path d="M384 0H453L468 18V63L453 81H384L369 63V18ZM396 16L387 28V53L396 65H441L450 53V28L441 16Z" fill-rule="evenodd"/>
      <path d="M480 0H563V45H535L574 81H548L513 47H499V81H480ZM499 16V30H544V16Z" fill-rule="evenodd"/>
      <path d="M580 0H646V18H600V31H638V49H600V63H646V81H580Z"/>
    </g>
    <path d="M323 30L338 30L346 44L338 58H323L315 44Z" fill="${ORANGE}"/>
  `;

  const cards = (zh) => {
    const retention = zh ? '净收入留存率' : 'Net revenue retention';
    const customers = zh ? '客户数' : 'Customers';
    const quarterGrowth = zh ? '环比 +1%' : '+1% Q/Q';
    return `
      <g font-family="Montserrat,Arial,sans-serif">
        <rect x="72" y="1156" width="381" height="164" rx="34" fill="${DARK}"/>
        <text x="262.5" y="1229" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${retention}</text>
        <text x="262.5" y="1272" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">106%</text>
        <rect x="466" y="1151" width="339" height="164" rx="34" fill="${DARK}"/>
        <text x="635.5" y="1204" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${customers}</text>
        <text x="635.5" y="1248" text-anchor="middle" font-size="35" font-weight="400" fill="#ffffff">17,850</text>
        <text x="635.5" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">${quarterGrowth}</text>
      </g>`;
  };

  const labels = (zh) => {
    const t = zh ? {
      unitedStates: '美国', restOfWorld: '世界其他地区', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], loss: ['营业', '亏损'], expenses: ['运营', '费用'],
      sm: '销售与营销', rnd: '研发', ga: '一般及行政',
      yoy16: '同比 +16%', yoy15: '同比 +15%', margin80: '利润率 80%',
      down1: '同比 (1 个百分点)', margin12: '利润率 (12%)', plus10: '同比 +10 个百分点',
      rev45: '占收入 45%', rev28: '占收入 28%', rev20: '占收入 20%',
      down9: '同比 (9 个百分点)', down2: '同比 (2 个百分点)', flat: '同比 (0 个百分点)',
    } : {
      unitedStates: 'United States', restOfWorld: 'Rest of World', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], loss: ['Operating', 'loss'], expenses: ['Operating', 'expenses'],
      sm: 'S&M', rnd: 'R&D', ga: 'G&A',
      yoy16: '+16% Y/Y', yoy15: '+15% Y/Y', margin80: '80% margin',
      down1: '(1pp) Y/Y', margin12: '(12%) margin', plus10: '+10pp Y/Y',
      rev45: '45% of revenue', rev28: '28% of revenue', rev20: '20% of revenue',
      down9: '(9pp) Y/Y', down2: '(2pp) Y/Y', flat: '(0pp) Y/Y',
    };
    return {
      united_states: {
        blocks: [
          { x: 404.5, top: 381, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line(t.yoy16, 29, 400, NOTE)] },
          { x: 340, top: 588, anchor: 'end', lines: [line(t.unitedStates, 40, 800)] },
        ],
      },
      rest_of_world: {
        blocks: [
          { x: 404.5, top: 886, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line(t.yoy15, 29, 400, NOTE)] },
          { x: 340, top: 987, anchor: 'end', lines: [line(t.restOfWorld, 40, 800)] },
        ],
      },
      revenue: block(871, 473, 'middle', [line(t.revenue, 40, 800), line('$value', 39, 400), line(t.yoy16, 29, 400, NOTE)], 10),
      gross_profit: block(1338.5, 286, 'middle', [line(t.gross, 40, 800), line('$value', 39, 400), line(t.margin80, 29, 400, NOTE), line(t.down1, 29, 400, NOTE)], 9),
      cost_of_revenue: block(1338.5, 1050, 'middle', [line(t.cost[0], 36, 800), line(t.cost[1], 36, 800), line('$value', 34, 400)], 8),
      operating_loss: block(1626.5, 1044, 'middle', [line(t.loss[0], 36, 800), line(t.loss[1], 36, 800), line('$value', 34, 400), line(t.margin12, 29, 400, NOTE), line(t.plus10, 29, 400, NOTE)], 8),
      operating_expenses: block(1808, 463, 'middle', [line(t.expenses[0], 40, 800), line(t.expenses[1], 40, 800), line('$value', 39, 400)], 9),
      sm: block(RIGHT_LABEL_X, 443, 'start', [line(t.sm, 31, 800), line('$value', 29, 400), line(t.rev45, 28, 400, NOTE), line(t.down9, 28, 400, NOTE)], 8),
      rnd: block(RIGHT_LABEL_X, 763, 'start', [line(t.rnd, 31, 800), line('$value', 29, 400), line(t.rev28, 28, 400, NOTE), line(t.down2, 28, 400, NOTE)], 8),
      ga: block(RIGHT_LABEL_X, 1023, 'start', [line(t.ga, 31, 800), line('$value', 29, 400), line(t.rev20, 28, 400, NOTE), line(t.flat, 28, 400, NOTE)], 8),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'procore-q4-fy25',
    name: 'Procore · Q4 FY25',
    company: 'Procore',
    meta: {
      company: 'Procore',
      title: 'Procore Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/procore-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2200,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 654,
      logoHeight: 90,
      logoY: 275,
      logoViewBox: '0 0 654 90',
      logoSvg: procoreLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: ORANGE },
        hub: { node: DARK, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: DARK_LINK, hub: DARK_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: cards(false),
    layout: {
      nodes: {
        united_states: { x: 369, y: 481, width: 71, height: 265 },
        rest_of_world: { x: 369, y: 989, width: 71, height: 45 },
        revenue: { x: 836, y: 624, width: 70, height: 310 },
        gross_profit: { x: 1303, y: 479, width: 71, height: 247 },
        cost_of_revenue: { x: 1303, y: 979, width: 71, height: 59 },
        operating_loss: { x: 1591, y: 985, width: 71, height: 36 },
        operating_expenses: { x: 1773, y: 619, width: 70, height: 285 },
        sm: { x: 2237, y: 434, width: 71, height: 136 },
        rnd: { x: 2237, y: 758, width: 71, height: 85 },
        ga: { x: 2237, y: 1034, width: 71, height: 60 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 298, notes: ['+16% Y/Y'], color: DARK, labelColor: ORANGE, linkTint: DARK_LINK },
      { id: 'rest_of_world', col: 0, order: 1, type: 'source', label: 'Rest of World', value: 51, notes: ['+15% Y/Y'], color: DARK, labelColor: ORANGE, linkTint: DARK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 349, notes: ['+16% Y/Y'], color: DARK, labelColor: ORANGE, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 280, notes: ['80% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 69, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -43, notes: ['(12%) margin', '+10pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 322, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 156, notes: ['45% of revenue', '(9pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 98, notes: ['28% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 69, notes: ['20% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 298, sourceWidth: 265, targetWidth: 265, y0: 613.5, y1: 756.5, sourceOrder: 0, targetOrder: 0, linkTint: DARK_LINK },
      { source: 'rest_of_world', target: 'revenue', value: 51, sourceWidth: 45, targetWidth: 45, y0: 1011.5, y1: 911.5, sourceOrder: 0, targetOrder: 1, linkTint: DARK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 280, sourceWidth: 247, targetWidth: 247, y0: 747.5, y1: 602.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 69, sourceWidth: 63, targetWidth: 59, y0: 902.5, y1: 1008.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 280, sourceWidth: 247, targetWidth: 247, y0: 602.5, y1: 742.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 43, sourceWidth: 36, targetWidth: 38, y0: 1003, y1: 885, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 156, sourceWidth: 139, targetWidth: 136, y0: 688.5, y1: 502, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 98, sourceWidth: 86, targetWidth: 85, y0: 801, y1: 800.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 69, sourceWidth: 60, targetWidth: 60, y0: 874, y1: 1064, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Procore · 2025 财年第四季度',
        meta: { title: 'Procore 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2200 },
        nodes: {
          united_states: { label: '美国', notes: ['同比 +16%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +15%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (12%)', '同比 +10 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 45%', '同比 (9 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 20%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: cards(true),
      },
    },
  });
})();

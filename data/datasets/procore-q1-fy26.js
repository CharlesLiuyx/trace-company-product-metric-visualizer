/* ====================================================================
 * Procore — Q1 FY26 income statement ($M)
 * Fixed SVG Sankey measured from input/processed/procore-q1-fy26.png.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const DARK = '#000000';
  const DARK_LINK = '#858585';
  const ORANGE = '#ff3d00';
  const REVENUE_ORANGE = '#ff3800';
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

  // Reconstructed from Procore's visible vector wordmark; no source bitmap is
  // used in the runtime chart.
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
    const retention = zh ? '毛留存率 95%' : 'Gross retention 95%';
    const customers = zh ? '> $100K 客户数' : 'Customers > $100K';
    const yearGrowth = zh ? '同比 +16%' : '+16% Y/Y';
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <rect x="72" y="1156" width="381" height="164" rx="34" fill="${DARK}"/>
        <text x="262.5" y="1257" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${retention}</text>
        <rect x="466" y="1151" width="412" height="164" rx="34" fill="${DARK}"/>
        <text x="672" y="1204" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${customers}</text>
        <text x="672" y="1248" text-anchor="middle" font-size="35" font-weight="400" fill="#ffffff">2,795</text>
        <text x="672" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">${yearGrowth}</text>
      </g>`;
  };

  const labels = (zh) => {
    const t = zh ? {
      unitedStates: '美国', restOfWorld: '世界其他地区', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], loss: ['营业', '亏损'], expenses: ['运营', '费用'],
      sm: '销售与营销', rnd: '研发', ga: '一般及行政',
      yoy15: '同比 +15%', yoy17: '同比 +17%', yoy16: '同比 +16%', margin80: '利润率 80%',
      plus1: '同比 +1 个百分点', margin4: '利润率 (4%)', plus8: '同比 +8 个百分点',
      rev42: '占收入 42%', rev24: '占收入 24%', rev19: '占收入 19%',
      down3: '同比 (3 个百分点)', down4: '同比 (4 个百分点)',
    } : {
      unitedStates: 'United States', restOfWorld: 'Rest of World', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], loss: ['Operating', 'loss'], expenses: ['Operating', 'expenses'],
      sm: 'S&M', rnd: 'R&D', ga: 'G&A',
      yoy15: '+15% Y/Y', yoy17: '+17% Y/Y', yoy16: '+16% Y/Y', margin80: '80% margin',
      plus1: '+1pp Y/Y', margin4: '(4%) margin', plus8: '+8pp Y/Y',
      rev42: '42% of revenue', rev24: '24% of revenue', rev19: '19% of revenue',
      down3: '(3pp) Y/Y', down4: '(4pp) Y/Y',
    };
    return {
      united_states: {
        blocks: [
          { x: 405.5, top: 390, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line(t.yoy15, 29, 400, NOTE)] },
          { x: 340, top: 618, anchor: 'end', lines: [line(t.unitedStates, 40, 800)] },
        ],
      },
      rest_of_world: {
        blocks: [
          { x: 405.5, top: 927, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line(t.yoy17, 29, 400, NOTE)] },
          { x: 340, top: 1032, anchor: 'end', lines: [line(t.restOfWorld, 40, 800)] },
        ],
      },
      revenue: block(872, 441, 'middle', [line(t.revenue, 40, 800), line('$value', 39, 400), line(t.yoy16, 29, 400, NOTE)], 10),
      gross_profit: block(1339.5, 283, 'middle', [line(t.gross, 40, 800), line('$value', 39, 400), line(t.margin80, 29, 400, NOTE), line(t.plus1, 29, 400, NOTE)], 9),
      cost_of_revenue: block(1339.5, 1092, 'middle', [line(t.cost[0], 36, 800), line(t.cost[1], 36, 800), line('$value', 34, 400)], 8),
      operating_loss: block(1594.5, 971, 'middle', [line(t.loss[0], 36, 800), line(t.loss[1], 36, 800), line('$value', 34, 400), line(t.margin4, 29, 400, NOTE), line(t.plus8, 29, 400, NOTE)], 8),
      operating_expenses: block(1807, 431, 'middle', [line(t.expenses[0], 40, 800), line(t.expenses[1], 40, 800), line('$value', 39, 400)], 9),
      sm: block(RIGHT_LABEL_X, 450, 'start', [line(t.sm, 31, 800), line('$value', 29, 400), line(t.rev42, 28, 400, NOTE), line(t.down3, 28, 400, NOTE)], 8),
      rnd: block(RIGHT_LABEL_X, 800, 'start', [line(t.rnd, 31, 800), line('$value', 29, 400), line(t.rev24, 28, 400, NOTE), line(t.down4, 28, 400, NOTE)], 8),
      ga: block(RIGHT_LABEL_X, 1083, 'start', [line(t.ga, 31, 800), line('$value', 29, 400), line(t.rev19, 28, 400, NOTE), line(t.plus1, 28, 400, NOTE)], 8),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'procore-q1-fy26',
    name: 'Procore · Q1 FY26',
    company: 'Procore',
    meta: {
      company: 'Procore',
      title: 'Procore Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/procore-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2200,
      hidePeriodStamp: true,
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
        hub: { node: DARK, label: REVENUE_ORANGE },
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
        united_states: { x: 370, y: 488, width: 71, height: 318 },
        rest_of_world: { x: 370, y: 1027, width: 71, height: 55 },
        revenue: { x: 837, y: 594, width: 70, height: 374 },
        gross_profit: { x: 1304, y: 476, width: 71, height: 297 },
        cost_of_revenue: { x: 1304, y: 1009, width: 71, height: 72 },
        operating_loss: { x: 1559, y: 935, width: 71, height: 13 },
        operating_expenses: { x: 1772, y: 593, width: 70, height: 315 },
        sm: { x: 2238, y: 447, width: 71, height: 154 },
        rnd: { x: 2238, y: 802, width: 71, height: 88 },
        ga: { x: 2238, y: 1086, width: 71, height: 70 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 305, notes: ['+15% Y/Y'], color: DARK, labelColor: ORANGE, linkTint: DARK_LINK },
      { id: 'rest_of_world', col: 0, order: 1, type: 'source', label: 'Rest of World', value: 54, notes: ['+17% Y/Y'], color: DARK, labelColor: ORANGE, linkTint: DARK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 359, notes: ['+16% Y/Y'], color: DARK, labelColor: REVENUE_ORANGE, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 288, notes: ['80% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 71, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -16, notes: ['(4%) margin', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 303, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 149, notes: ['42% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 86, notes: ['24% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 69, notes: ['19% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 305, sourceWidth: 318, targetWidth: 319, y0: 647, y1: 753.5, sourceOrder: 0, targetOrder: 0, linkTint: DARK_LINK },
      { source: 'rest_of_world', target: 'revenue', value: 54, sourceWidth: 55, targetWidth: 55, y0: 1054.5, y1: 940.5, sourceOrder: 0, targetOrder: 1, linkTint: DARK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 288, sourceWidth: 302, targetWidth: 297, y0: 745, y1: 624.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 71, sourceWidth: 72, targetWidth: 72, y0: 932, y1: 1045, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 288, sourceWidth: 297, targetWidth: 300, y0: 624.5, y1: 743, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 16, sourceWidth: 13, targetWidth: 15, y0: 941.5, y1: 900.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 149, sourceWidth: 153, targetWidth: 154, y0: 669.5, y1: 524, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 86, sourceWidth: 89, targetWidth: 88, y0: 790.5, y1: 846, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 69, sourceWidth: 73, targetWidth: 70, y0: 871.5, y1: 1121, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Procore · 2026 财年第一季度',
        meta: { title: 'Procore 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 2200 },
        nodes: {
          united_states: { label: '美国', notes: ['同比 +15%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (4%)', '同比 +8 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 42%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (4 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 19%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: cards(true),
      },
    },
  });
})();

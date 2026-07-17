/* ====================================================================
 * Procore — Q3 FY25 income statement ($M)
 * Fixed SVG Sankey measured from input/processed/procore-q3-fy25.png.
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
  const RIGHT_LABEL_X = 2427;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ blocks: [{ x, top, anchor, lines, lineGap }] });

  // Reuse the validated pure-SVG Procore wordmark reconstruction. No source
  // bitmap or reference crop enters the runtime chart.
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
    const customers = zh ? '客户数' : 'Customers';
    const quarterGrowth = zh ? '环比 +1%' : '+1% Q/Q';
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <rect x="73" y="1156" width="379" height="163" rx="34" fill="${DARK}"/>
        <text x="262.5" y="1251" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${retention}</text>
        <rect x="466" y="1151" width="339" height="164" rx="34" fill="${DARK}"/>
        <text x="635.5" y="1204" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${customers}</text>
        <text x="635.5" y="1248" text-anchor="middle" font-size="35" font-weight="400" fill="#ffffff">17,623</text>
        <text x="635.5" y="1292" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">${quarterGrowth}</text>
      </g>`;
  };

  const labels = (zh) => {
    const t = zh ? {
      unitedStates: '美国', restOfWorld: '世界其他地区', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], loss: ['营业', '亏损'], expenses: ['运营', '费用'],
      sm: '销售与营销', rnd: '研发', ga: '一般及行政',
      yoy15: '同比 +15%', yoy14: '同比 +14%', margin80: '利润率 80%',
      down2: '同比 (2 个百分点)', margin4: '利润率 (4%)', plus8: '同比 +8 个百分点',
      rev43: '占收入 43%', rev26: '占收入 26%', rev16: '占收入 16%',
      down5: '同比 (5 个百分点)', down1: '同比 (1 个百分点)', down3: '同比 (3 个百分点)',
    } : {
      unitedStates: 'United States', restOfWorld: 'Rest of World', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], loss: ['Operating', 'loss'], expenses: ['Operating', 'expenses'],
      sm: 'S&M', rnd: 'R&D', ga: 'G&A',
      yoy15: '+15% Y/Y', yoy14: '+14% Y/Y', margin80: '80% margin',
      down2: '(2pp) Y/Y', margin4: '(4%) margin', plus8: '+8pp Y/Y',
      rev43: '43% of revenue', rev26: '26% of revenue', rev16: '16% of revenue',
      down5: '(5pp) Y/Y', down1: '(1pp) Y/Y', down3: '(3pp) Y/Y',
    };
    return {
      united_states: {
        blocks: [
          { x: 405.5, top: 431, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line(t.yoy15, 29, 400, NOTE)] },
          { x: 340, top: 632, anchor: 'end', lines: [line(t.unitedStates, 40, 800)] },
        ],
      },
      rest_of_world: {
        blocks: [
          { x: 405.5, top: 889, anchor: 'middle', lineGap: 9, lines: [line('$value', 39, 400), line(t.yoy14, 29, 400, NOTE)] },
          { x: 340, top: 990, anchor: 'end', lines: [line(t.restOfWorld, 40, 800)] },
        ],
      },
      revenue: block(872, 474, 'middle', [line(t.revenue, 40, 800), line('$value', 39, 400), line(t.yoy15, 29, 400, NOTE)], 10),
      gross_profit: block(1339.5, 352, 'middle', [line(t.gross, 40, 800), line('$value', 39, 400), line(t.margin80, 29, 400, NOTE), line(t.down2, 29, 400, NOTE)], 9),
      cost_of_revenue: block(1339.5, 1054, 'middle', [line(t.cost[0], 36, 800), line(t.cost[1], 36, 800), line('$value', 34, 400)], 8),
      operating_loss: block(1660.5, 971, 'middle', [line(t.loss[0], 36, 800), line(t.loss[1], 36, 800), line('$value', 34, 400), line(t.margin4, 29, 400, NOTE), line(t.plus8, 29, 400, NOTE)], 8),
      operating_expenses: block(1803, 465, 'middle', [line(t.expenses[0], 40, 800), line(t.expenses[1], 40, 800), line('$value', 39, 400)], 9),
      sm: block(RIGHT_LABEL_X, 528, 'middle', [line(t.sm, 31, 800), line('$value', 29, 400), line(t.rev43, 28, 400, NOTE), line(t.down5, 28, 400, NOTE)], 8),
      rnd: block(RIGHT_LABEL_X, 851, 'middle', [line(t.rnd, 31, 800), line('$value', 29, 400), line(t.rev26, 28, 400, NOTE), line(t.down1, 28, 400, NOTE)], 8),
      ga: block(RIGHT_LABEL_X, 1084, 'middle', [line(t.ga, 31, 800), line('$value', 29, 400), line(t.rev16, 28, 400, NOTE), line(t.down3, 28, 400, NOTE)], 8),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'procore-q3-fy25',
    name: 'Procore · Q3 FY25',
    company: 'Procore',
    meta: {
      company: 'Procore',
      title: 'Procore Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/procore-q3-fy25.png', width: 2667, height: 1500 },
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
        united_states: { x: 370, y: 530, width: 71, height: 260 },
        rest_of_world: { x: 370, y: 989, width: 71, height: 43 },
        revenue: { x: 837, y: 626, width: 70, height: 306 },
        gross_profit: { x: 1304, y: 532, width: 71, height: 244 },
        cost_of_revenue: { x: 1304, y: 971, width: 71, height: 61 },
        operating_loss: { x: 1629, y: 924, width: 71, height: 12 },
        operating_expenses: { x: 1772, y: 623, width: 70, height: 257 },
        sm: { x: 2238, y: 530, width: 71, height: 130 },
        rnd: { x: 2238, y: 851, width: 71, height: 79 },
        ga: { x: 2238, y: 1085, width: 71, height: 46 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 289, notes: ['+15% Y/Y'], color: DARK, labelColor: ORANGE, linkTint: DARK_LINK },
      { id: 'rest_of_world', col: 0, order: 1, type: 'source', label: 'Rest of World', value: 50, notes: ['+14% Y/Y'], color: DARK, labelColor: ORANGE, linkTint: DARK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 339, notes: ['+15% Y/Y'], color: DARK, labelColor: REVENUE_ORANGE, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 270, notes: ['80% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 69, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -15, notes: ['(4%) margin', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 285, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 144, notes: ['43% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 88, notes: ['26% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 53, notes: ['16% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 289, sourceWidth: 260, targetWidth: 261, y0: 660, y1: 756.5, sourceOrder: 0, targetOrder: 0, linkTint: DARK_LINK },
      { source: 'rest_of_world', target: 'revenue', value: 50, sourceWidth: 43, targetWidth: 45, y0: 1010.5, y1: 909.5, sourceOrder: 0, targetOrder: 1, linkTint: DARK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 270, sourceWidth: 244, targetWidth: 244, y0: 748, y1: 654, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 69, sourceWidth: 62, targetWidth: 61, y0: 901, y1: 1001.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 270, sourceWidth: 244, targetWidth: 244, y0: 654, y1: 745, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 15, sourceWidth: 12, targetWidth: 13, y0: 930, y1: 873.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 144, sourceWidth: 130, targetWidth: 130, y0: 688, y1: 595, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 88, sourceWidth: 79, targetWidth: 79, y0: 792.5, y1: 890.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 53, sourceWidth: 48, targetWidth: 46, y0: 856, y1: 1108, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Procore · 2025 财年第三季度',
        meta: { title: 'Procore 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleTextLength: 2200 },
        nodes: {
          united_states: { label: '美国', notes: ['同比 +15%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (4%)', '同比 +8 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 43%', '同比 (5 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 16%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: cards(true),
      },
    },
  });
})();

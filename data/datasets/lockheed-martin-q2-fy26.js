/* ====================================================================
 * Lockheed Martin - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/lockheed-martin-q2-fy26.png as a
 * fixed d3-sankey layout. The four photographic segment tiles reuse the
 * materially identical, reviewed Q1 FY26 runtime rasters; all financial
 * geometry and typography remain native SVG.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#00377e';
  const NAVY_LINK = '#859dbd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#12975d';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const wordmark = `
    <g data-typography-role="brand" fill="${NAVY}">
      <text x="628" y="371" font-family="Arial,Helvetica,sans-serif" font-size="58" font-weight="700" font-style="italic" letter-spacing="5" textLength="512" lengthAdjust="spacingAndGlyphs">LOCKHEED MARTIN</text>
      <polygon points="955,327 1187,318 1187,322 955,331"/>
      <polygon points="1204,294 1209,297 1198,332 1188,330"/>
      <polygon points="1237,334 1191,326 1202,341"/>
      <polygon points="1180,340 1130,370 1120,372 1172,336"/>
      <polygon points="1188,345 1182,388 1193,342"/>
      <polygon points="1165,350 1128,376 1160,346"/>
    </g>`;

  const card = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1194" width="${width}" height="158" rx="30" fill="${NAVY}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${[1244, 1285, 1324][index]}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = (zh = false) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${wordmark}
      ${card(73, 449, [
        { text: zh ? '飞机交付' : 'Aircraft Deliveries', size: 30, weight: 800 },
        { text: '44', size: 28, weight: 400 },
        { text: zh ? '同比 -34' : '-34 Y/Y', size: 26, weight: 400 },
      ])}
      ${card(531, 241, [
        { text: zh ? '订单储备' : 'Backlog', size: 30, weight: 800 },
        { text: '$230B', size: 28, weight: 400 },
        { text: zh ? '同比 +38%' : '+38% Y/Y', size: 26, weight: 400 },
      ])}
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 12) => ({ x, top, anchor, lineGap, lines });

  const labels = (zh = false) => ({
    aeronautics: { blocks: [
      block(470, 295, [line('$value', 39), line(zh ? '同比 +9%' : '+9% Y/Y', 28, 400, NOTE)]),
      block(256, 429, [line(zh ? '航空' : 'Aeronautics', 40, 800), line(zh ? '分部利润率 9%' : '9% segment margin', 28, 400, NOTE)]),
    ] },
    missile_fire_control: { blocks: [
      block(470, 581, [line('$value', 39), line(zh ? '同比 +19%' : '+19% Y/Y', 28, 400, NOTE)]),
      block(256, zh ? 655 : 629, [
        ...(zh ? [line('导弹与火控', 40, 800)] : [line('Missile and', 40, 800), line('Fire Control', 40, 800)]),
        line(zh ? '分部利润率 14%' : '14% segment margin', 28, 400, NOTE),
      ]),
    ] },
    rotary_mission_systems: { blocks: [
      block(470, 781, [line('$value', 39), line(zh ? '同比 +9%' : '+9% Y/Y', 28, 400, NOTE)]),
      block(258, zh ? 877 : 851, [
        ...(zh ? [line('旋翼与任务系统', 40, 800)] : [line('Rotary &', 40, 800), line('Mission Systems', 40, 800)]),
        line(zh ? '分部利润率 10%' : '10% segment margin', 28, 400, NOTE),
      ]),
    ] },
    space: { blocks: [
      block(470, 980, [line('$value', 39), line(zh ? '同比 +6%' : '+6% Y/Y', 28, 400, NOTE)]),
      block(256, 1097, [line(zh ? '太空' : 'Space', 40, 800), line(zh ? '分部利润率 11%' : '11% segment margin', 28, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(936, 478, [line(zh ? '收入' : 'Revenue', 40, 800), line('$value', 39), line(zh ? '同比 +11%' : '+11% Y/Y', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1408, 327, [line(zh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 12%' : '12% margin', 28, 400, NOTE), line(zh ? '同比 +8 个百分点' : '+8pp Y/Y', 28, 400, NOTE)])] },
    operating_profit: { blocks: [block(1882, 219, [line(zh ? '营业利润' : 'Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 12%' : '12% margin', 28, 400, NOTE), line(zh ? '同比 +8 个百分点' : '+8pp Y/Y', 28, 400, NOTE)])] },
    net_profit: { blocks: [block(2496, 267, [line(zh ? '净利润' : 'Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 9%' : '9% margin', 28, 400, NOTE), line(zh ? '同比 +7 个百分点' : '+7pp Y/Y', 28, 400, NOTE)])] },
    tax: { blocks: [block(2495, 552, [line(zh ? '税费' : 'Tax', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'middle', 10)] },
    other_nonoperating: { blocks: [block(2496, 723, [line(zh ? '利息及其他' : 'Interest', 30, 800, RED_LABEL), ...(zh ? [] : [line('& other', 30, 800, RED_LABEL)]), line('$value', 30, 400, RED_LABEL)], 'middle', 10)] },
    other_operating: { blocks: [block(1683, 658, [line(zh ? '其他' : 'Other', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 'middle', 10)] },
    operating_expenses: { blocks: [] },
    cost_of_sales: { blocks: [block(1409, 1088, [line(zh ? '销售成本' : 'Cost of sales', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)])] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lockheed-martin-q2-fy26',
    name: 'Lockheed Martin · Q2 FY26',
    company: 'Lockheed Martin',
    meta: {
      company: 'Lockheed Martin',
      title: 'Lockheed Martin Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$', unit: 'B', decimals: 3,
      referenceImage: { src: 'input/processed/lockheed-martin-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1336, titleY: 196, titleSize: 115, titleWeight: 800, titleTextLength: 2431,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', nodeRadius: 0,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 12 },
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotations(),
    rasterAnnotations: [
      { key: 'lockheed-q2-aeronautics-jet', href: 'data/assets/raster-annotations/lockheed-martin/aeronautics-jet-q1-fy26.png', x: 118, y: 284, width: 285, height: 140 },
      { key: 'lockheed-q2-missile-fire-control', href: 'data/assets/raster-annotations/lockheed-martin/missile-fire-control-q1-fy26.png', x: 172, y: 520, width: 171, height: 106 },
      { key: 'lockheed-q2-rotary-mission-systems', href: 'data/assets/raster-annotations/lockheed-martin/rotary-mission-systems-q1-fy26.png', x: 147, y: 774, width: 196, height: 84 },
      { key: 'lockheed-q2-space-spacecraft', href: 'data/assets/raster-annotations/lockheed-martin/space-spacecraft-q1-fy26.png', x: 198, y: 1006, width: 118, height: 89 },
    ],
    layout: {
      scale: 16.52,
      nodes: {
        aeronautics: { x: 439, y: 394, width: 71, height: 132 },
        missile_fire_control: { x: 439, y: 680, width: 71, height: 65 },
        rotary_mission_systems: { x: 439, y: 880, width: 71, height: 70 },
        space: { x: 439, y: 1078, width: 71, height: 56 },
        revenue: { x: 906, y: 627, width: 70, height: 332 },
        gross_profit: { x: 1373, y: 519, width: 71, height: 38 },
        cost_of_sales: { x: 1373, y: 780, width: 71, height: 290 },
        other_operating: { x: 1644, y: 641, width: 71, height: 3 },
        operating_profit: { x: 1841, y: 410, width: 70, height: 39 },
        net_profit: { x: 2307, y: 320, width: 71, height: 29 },
        tax: { x: 2307, y: 590, width: 71, height: 2 },
        other_nonoperating: { x: 2307, y: 781, width: 71, height: 3 },
      },
      labels: labels(),
    },
    nonNodeMetrics: [
      { id: 'operating_expenses', representation: 'data-only' },
    ],

    nodes: [
      { id: 'aeronautics', col: 0, order: 0, type: 'source', label: 'Aeronautics', value: 8.1, valueText: '$8.1B', notes: ['+9% Y/Y', '9% segment margin'] },
      { id: 'missile_fire_control', col: 0, order: 1, type: 'source', label: ['Missile and', 'Fire Control'], value: 4.1, valueText: '$4.1B', notes: ['+19% Y/Y', '14% segment margin'] },
      { id: 'rotary_mission_systems', col: 0, order: 2, type: 'source', label: ['Rotary &', 'Mission Systems'], value: 4.4, valueText: '$4.4B', notes: ['+9% Y/Y', '10% segment margin'] },
      { id: 'space', col: 0, order: 3, type: 'source', label: 'Space', value: 3.5, valueText: '$3.5B', notes: ['+6% Y/Y', '11% segment margin'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 20.1, valueText: '$20.1B', notes: ['+11% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.4, valueText: '$2.4B', notes: ['12% margin', '+8pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 17.6, valueText: '($17.6B)' },
      { id: 'other_operating', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.033, valueText: '$33M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, valueText: '$2.5B', notes: ['12% margin', '+8pp Y/Y'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.8, valueText: '$1.8B', notes: ['9% margin', '+7pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, valueText: '($0.3B)' },
      { id: 'other_nonoperating', col: 5, order: 2, type: 'cost', label: ['Interest', '& other'], value: 0.3, valueText: '($0.3B)' },
    ],
    links: [
      { source: 'aeronautics', target: 'revenue', value: 8.1, sourceWidth: 132, targetWidth: 133, sourceOrder: 0, targetOrder: 0 },
      { source: 'missile_fire_control', target: 'revenue', value: 4.1, sourceWidth: 65, targetWidth: 69, sourceOrder: 0, targetOrder: 1 },
      { source: 'rotary_mission_systems', target: 'revenue', value: 4.4, sourceWidth: 70, targetWidth: 72, sourceOrder: 0, targetOrder: 2 },
      { source: 'space', target: 'revenue', value: 3.5, sourceWidth: 56, targetWidth: 58, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.4, sourceWidth: 40, targetWidth: 38, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 17.6, sourceWidth: 291, targetWidth: 290, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.4, sourceWidth: 38, targetWidth: 36, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_operating', target: 'operating_profit', value: 0.033, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 1, curve: { c1x: 1760, c1y: 643, c2x: 1815, c2y: 447 }, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 29, targetWidth: 29, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 5, targetWidth: 2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.3, sourceWidth: 5, targetWidth: 3, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '洛克希德·马丁 · 2026 财年第二季度',
        meta: { title: '洛克希德·马丁 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 2100 },
        annotationsSvg: annotations(true),
        nodes: {
          aeronautics: { label: '航空', notes: ['同比 +9%', '分部利润率 9%'] },
          missile_fire_control: { label: '导弹与火控', notes: ['同比 +19%', '分部利润率 14%'] },
          rotary_mission_systems: { label: '旋翼与任务系统', notes: ['同比 +9%', '分部利润率 10%'] },
          space: { label: '太空', notes: ['同比 +6%', '分部利润率 11%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12%', '同比 +8 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          other_operating: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +8 个百分点'] },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          other_nonoperating: { label: '利息及其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

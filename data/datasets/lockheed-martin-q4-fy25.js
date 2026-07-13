/* ====================================================================
 * Lockheed Martin - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/lockheed-martin-q4-fy25.png as a
 * fixed d3-sankey layout. The four photographic segment tiles are
 * reviewed, whitelisted runtime rasters; all financial geometry and
 * typography remain native SVG.
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
  const TRANSPARENT = 'rgba(0,0,0,0)';

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
        { text: '98', size: 28, weight: 400 },
        { text: zh ? '同比 -13' : '-13 Y/Y', size: 26, weight: 400 },
      ])}
      ${card(531, 241, [
        { text: zh ? '订单储备' : 'Backlog', size: 30, weight: 800 },
        { text: '$194B', size: 28, weight: 400 },
        { text: zh ? '同比 +10%' : '+10% Y/Y', size: 26, weight: 400 },
      ])}
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 12) => ({ x, top, anchor, lineGap, lines });

  const labels = (zh = false) => ({
    aeronautics: { blocks: [
      block(470, 291, [line('$value', 39), line(zh ? '同比 +6%' : '+6% Y/Y', 28, 400, NOTE)]),
      block(256, 445, [line(zh ? '航空' : 'Aeronautics', 40, 800), line(zh ? '分部利润率 9%' : '9% segment margin', 28, 400, NOTE)]),
    ] },
    missile_fire_control: { blocks: [
      block(470, 571, [line('$value', 39), line(zh ? '同比 +18%' : '+18% Y/Y', 28, 400, NOTE)]),
      block(256, zh ? 667 : 641, [
        ...(zh ? [line('导弹与火控', 40, 800)] : [line('Missile and', 40, 800), line('Fire Control', 40, 800)]),
        line(zh ? '分部利润率 13%' : '13% segment margin', 28, 400, NOTE),
      ]),
    ] },
    rotary_mission_systems: { blocks: [
      block(470, 764, [line('$value', 39), line(zh ? '同比 +8%' : '+8% Y/Y', 28, 400, NOTE)]),
      block(258, zh ? 890 : 864, [
        ...(zh ? [line('旋翼与任务系统', 40, 800)] : [line('Rotary &', 40, 800), line('Mission Systems', 40, 800)]),
        line(zh ? '分部利润率 10%' : '10% segment margin', 28, 400, NOTE),
      ]),
    ] },
    space: { blocks: [
      block(470, 972, [line('$value', 39), line(zh ? '同比 +8%' : '+8% Y/Y', 28, 400, NOTE)]),
      block(256, 1097, [line(zh ? '太空' : 'Space', 40, 800), line(zh ? '分部利润率 9%' : '9% segment margin', 28, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(936, 462, [line(zh ? '收入' : 'Revenue', 40, 800), line('$value', 39), line(zh ? '同比 +9%' : '+9% Y/Y', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1408, 320, [line(zh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 11%' : '11% margin', 28, 400, NOTE), line(zh ? '同比 +8 个百分点' : '+8pp Y/Y', 28, 400, NOTE)])] },
    operating_profit: { blocks: [block(1875, 230, [line(zh ? '营业利润' : 'Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 11%' : '11% margin', 28, 400, NOTE), line(zh ? '同比 +8 个百分点' : '+8pp Y/Y', 28, 400, NOTE)])] },
    net_profit: { blocks: [block(2494, 266, [line(zh ? '净利润' : 'Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 7%' : '7% margin', 28, 400, NOTE), line(zh ? '同比 +4 个百分点' : '+4pp Y/Y', 28, 400, NOTE)])] },
    tax: { blocks: [block(2494, 513, [line(zh ? '税费' : 'Tax', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'middle', 10)] },
    interest: { blocks: [block(2494, 665, [line(zh ? '利息' : 'Interest', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'middle', 10)] },
    other_nonoperating: { blocks: [block(2494, 822, [line(zh ? '其他' : 'Other', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'middle', 10)] },
    other_operating: { blocks: [block(1748, 574, [line(zh ? '其他' : 'Other', 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL)], 'middle', 10)] },
    operating_expenses: { blocks: [] },
    cost_of_sales: { blocks: [block(1408, 1057, [line(zh ? '销售成本' : 'Cost of sales', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)])] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lockheed-martin-q4-fy25',
    name: 'Lockheed Martin · Q4 FY25',
    company: 'Lockheed Martin',
    meta: {
      company: 'Lockheed Martin',
      title: 'Lockheed Martin Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/lockheed-martin-q4-fy25.png', width: 2667, height: 1500 },
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
      interfaceAudit: {
        mode: 'error',
        // The reviewed $9M Other add-in keeps its 2px financial height but
        // intentionally expands to a 60px visible face. Its sole outgoing
        // link occupies that entire face, so score this as a design-specified
        // full-face interface rather than scanning the reference at its
        // transformed right-hand x-coordinate.
        fullFaceIds: ['other_operating:right'],
      },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotations(),
    rasterAnnotations: [
      { key: 'lockheed-q4-aeronautics-jet', href: 'data/assets/raster-annotations/lockheed-martin/aeronautics-jet-q4-fy25.png', x: 118, y: 305, width: 285, height: 140 },
      { key: 'lockheed-q4-missile-fire-control', href: 'data/assets/raster-annotations/lockheed-martin/missile-fire-control-q4-fy25.png', x: 172, y: 537, width: 171, height: 106 },
      { key: 'lockheed-q4-rotary-mission-systems', href: 'data/assets/raster-annotations/lockheed-martin/rotary-mission-systems-q4-fy25.png', x: 147, y: 784, width: 196, height: 84 },
      { key: 'lockheed-q4-space-spacecraft', href: 'data/assets/raster-annotations/lockheed-martin/space-spacecraft-q4-fy25.png', x: 184, y: 999, width: 151, height: 96 },
    ],
    layout: {
      scale: 17.3,
      nodes: {
        aeronautics: { x: 439, y: 390, width: 71, height: 147 },
        missile_fire_control: { x: 439, y: 667, width: 71, height: 68 },
        rotary_mission_systems: { x: 439, y: 862, width: 71, height: 79 },
        space: { x: 439, y: 1071, width: 71, height: 53 },
        revenue: { x: 906, y: 614, width: 71, height: 351 },
        gross_profit: { x: 1373, y: 513, width: 71, height: 38 },
        cost_of_sales: { x: 1373, y: 734, width: 71, height: 310 },
        // User-directed visible face: preserve the 2px financial height,
        // while the 60px width gives the Other flow a clear right-hand exit.
        other_operating: { x: 1718, y: 534, width: 60, height: 2 },
        operating_expenses: { x: 1749, y: 0, width: 71, height: 0 },
        operating_profit: { x: 1840, y: 420, width: 71, height: 39 },
        net_profit: { x: 2307, y: 330, width: 71, height: 22 },
        tax: { x: 2307, y: 540, width: 71, height: 7 },
        interest: { x: 2307, y: 697, width: 71, height: 4 },
        other_nonoperating: { x: 2307, y: 858, width: 71, height: 2 },
      },
      labels: labels(),
    },
    nodes: [
      { id: 'aeronautics', col: 0, order: 0, type: 'source', label: 'Aeronautics', value: 8.5, notes: ['+6% Y/Y', '9% segment margin'] },
      { id: 'missile_fire_control', col: 0, order: 1, type: 'source', label: ['Missile and', 'Fire Control'], value: 4.0, valueText: '$4.0B', notes: ['+18% Y/Y', '13% segment margin'] },
      { id: 'rotary_mission_systems', col: 0, order: 2, type: 'source', label: ['Rotary &', 'Mission Systems'], value: 4.6, notes: ['+8% Y/Y', '10% segment margin'] },
      { id: 'space', col: 0, order: 3, type: 'source', label: 'Space', value: 3.2, notes: ['+8% Y/Y', '9% segment margin'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 20.3, notes: ['+9% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.3, notes: ['11% margin', '+8pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 18.0, valueText: '($18.0B)' },
      // The $9M operating add-in uses the requested 60px label-centered face.
      { id: 'other_operating', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.009, valueText: '$9M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      // Zero-valued schema anchor: the source has no operating-expense bar
      // between gross and operating profit, but the SSOT verifier requires a
      // numeric operating_expenses node.
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: '', value: 0, color: TRANSPARENT, labelColor: TRANSPARENT, linkTint: TRANSPARENT },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.3, notes: ['11% margin', '+8pp Y/Y'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.3, notes: ['7% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.3 },
      { id: 'other_nonoperating', col: 5, order: 3, type: 'cost', label: 'Other', value: 0.5 },
    ],
    links: [
      { source: 'aeronautics', target: 'revenue', value: 8.5, sourceWidth: 147, targetWidth: 147, sourceOrder: 0, targetOrder: 0 },
      { source: 'missile_fire_control', target: 'revenue', value: 4.0, sourceWidth: 68, targetWidth: 69, sourceOrder: 0, targetOrder: 1 },
      { source: 'rotary_mission_systems', target: 'revenue', value: 4.6, sourceWidth: 79, targetWidth: 80, sourceOrder: 0, targetOrder: 2 },
      { source: 'space', target: 'revenue', value: 3.2, sourceWidth: 53, targetWidth: 55, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.3, sourceWidth: 40, targetWidth: 38, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 18.0, sourceWidth: 311, targetWidth: 310, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceWidth: 38, targetWidth: 37, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_operating', target: 'operating_profit', value: 0.009, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 1, curve: { c1x: 1790, c1y: 535, c2x: 1815, c2y: 458 }, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 22, targetWidth: 22, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 4, targetWidth: 7, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 5, targetWidth: 4, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.5, sourceWidth: 8, targetWidth: 2, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '洛克希德·马丁 · 2025 财年第四季度',
        meta: { title: '洛克希德·马丁 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2100 },
        annotationsSvg: annotations(true),
        nodes: {
          aeronautics: { label: '航空', notes: ['同比 +6%', '分部利润率 9%'] },
          missile_fire_control: { label: '导弹与火控', notes: ['同比 +18%', '分部利润率 13%'] },
          rotary_mission_systems: { label: '旋翼与任务系统', notes: ['同比 +8%', '分部利润率 10%'] },
          space: { label: '太空', notes: ['同比 +8%', '分部利润率 9%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 11%', '同比 +8 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          other_operating: { label: '其他' },
          operating_expenses: { label: '' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +8 个百分点'] },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          other_nonoperating: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

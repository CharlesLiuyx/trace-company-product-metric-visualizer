/* ====================================================================
 * Lockheed Martin - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/lockheed-martin-q1-fy26.png as a
 * fixed d3-sankey layout. The four photographic segment tiles reuse the
 * reviewed Lockheed Martin runtime rasters; all financial geometry and
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
        { text: '52', size: 28, weight: 400 },
        { text: zh ? '同比 -10' : '-10 Y/Y', size: 26, weight: 400 },
      ])}
      ${card(531, 241, [
        { text: zh ? '订单储备' : 'Backlog', size: 30, weight: 800 },
        { text: '$186.4B', size: 28, weight: 400 },
        { text: zh ? '同比 +8%' : '+8% Y/Y', size: 26, weight: 400 },
      ])}
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 12) => ({ x, top, anchor, lineGap, lines });

  const labels = (zh = false) => ({
    aeronautics: { blocks: [
      block(470, 295, [line('$value', 39), line(zh ? '同比 -1%' : '(1%) Y/Y', 28, 400, NOTE)]),
      block(256, 450, [line(zh ? '航空' : 'Aeronautics', 40, 800), line(zh ? '分部利润率 9%' : '9% segment margin', 28, 400, NOTE)]),
    ] },
    missile_fire_control: { blocks: [
      block(470, 571, [line('$value', 39), line(zh ? '同比 +8%' : '+8% Y/Y', 28, 400, NOTE)]),
      block(256, zh ? 672 : 644, [
        ...(zh ? [line('导弹与火控', 40, 800)] : [line('Missile and', 40, 800), line('Fire Control', 40, 800)]),
        line(zh ? '分部利润率 14%' : '14% segment margin', 28, 400, NOTE),
      ]),
    ] },
    rotary_mission_systems: { blocks: [
      block(470, 778, [line('$value', 39), line(zh ? '同比 -8%' : '(8%) Y/Y', 28, 400, NOTE)]),
      block(258, zh ? 902 : 876, [
        ...(zh ? [line('旋翼与任务系统', 40, 800)] : [line('Rotary &', 40, 800), line('Mission Systems', 40, 800)]),
        line(zh ? '分部利润率 11%' : '11% segment margin', 28, 400, NOTE),
      ]),
    ] },
    space: { blocks: [
      block(470, 969, [line('$value', 39), line(zh ? '同比 +7%' : '+7% Y/Y', 28, 400, NOTE)]),
      block(256, 1100, [line(zh ? '太空' : 'Space', 40, 800), line(zh ? '分部利润率 8%' : '8% segment margin', 28, 400, NOTE)]),
    ] },
    revenue: { blocks: [block(936, 501, [line(zh ? '收入' : 'Revenue', 40, 800), line('$value', 39), line(zh ? '同比持平' : '+0% Y/Y', 28, 400, NOTE)])] },
    gross_profit: { blocks: [block(1408, 366, [line(zh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 12%' : '12% margin', 28, 400, NOTE), line(zh ? '同比 -1 个百分点' : '(1pp) Y/Y', 28, 400, NOTE)])] },
    operating_profit: { blocks: [block(1883, 230, [line(zh ? '营业利润' : 'Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 11%' : '11% margin', 28, 400, NOTE), line(zh ? '同比 -2 个百分点' : '(2pp) Y/Y', 28, 400, NOTE)])] },
    net_profit: { blocks: [block(2494, 230, [line(zh ? '净利润' : 'Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 8%' : '8% margin', 28, 400, NOTE), line(zh ? '同比 -1 个百分点' : '(1pp) Y/Y', 28, 400, NOTE)])] },
    tax: { blocks: [block(2494, 527, [line(zh ? '税费' : 'Tax', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'middle', 10)] },
    other_nonoperating: { blocks: [block(2494, 730, [line(zh ? '其他' : 'Other', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'middle', 10)] },
    operating_expenses: { blocks: [] },
    cost_of_sales: { blocks: [block(1408, 1131, [line(zh ? '销售成本' : 'Cost of sales', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)])] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lockheed-martin-q1-fy26',
    name: 'Lockheed Martin · Q1 FY26',
    company: 'Lockheed Martin',
    meta: {
      company: 'Lockheed Martin',
      title: 'Lockheed Martin Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/lockheed-martin-q1-fy26.png', width: 2667, height: 1500 },
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
      { key: 'lockheed-q1-aeronautics-jet', href: 'data/assets/raster-annotations/lockheed-martin/aeronautics-jet-q1-fy26.png', x: 118, y: 305, width: 285, height: 140 },
      { key: 'lockheed-q1-missile-fire-control', href: 'data/assets/raster-annotations/lockheed-martin/missile-fire-control-q1-fy26.png', x: 172, y: 537, width: 171, height: 106 },
      { key: 'lockheed-q1-rotary-mission-systems', href: 'data/assets/raster-annotations/lockheed-martin/rotary-mission-systems-q1-fy26.png', x: 147, y: 784, width: 196, height: 84 },
      { key: 'lockheed-q1-space-spacecraft', href: 'data/assets/raster-annotations/lockheed-martin/space-spacecraft-q1-fy26.png', x: 198, y: 1006, width: 118, height: 89 },
    ],
    layout: {
      scale: 19.65,
      nodes: {
        aeronautics: { x: 439, y: 394, width: 71, height: 135 },
        missile_fire_control: { x: 439, y: 667, width: 71, height: 70 },
        rotary_mission_systems: { x: 439, y: 871, width: 71, height: 78 },
        space: { x: 439, y: 1072, width: 71, height: 67 },
        revenue: { x: 906, y: 653, width: 70, height: 354 },
        gross_profit: { x: 1373, y: 556, width: 71, height: 39 },
        cost_of_sales: { x: 1373, y: 803, width: 71, height: 312 },
        operating_profit: { x: 1848, y: 418, width: 70, height: 39 },
        net_profit: { x: 2307, y: 296, width: 71, height: 27 },
        tax: { x: 2307, y: 562, width: 71, height: 4 },
        other_nonoperating: { x: 2307, y: 772, width: 71, height: 4 },
      },
      labels: labels(),
    },
    nonNodeMetrics: [
      { id: 'operating_expenses', representation: 'data-only' },
    ],

    nodes: [
      { id: 'aeronautics', col: 0, order: 0, type: 'source', label: 'Aeronautics', value: 7.0, valueText: '$7.0B', notes: ['(1%) Y/Y', '9% segment margin'] },
      { id: 'missile_fire_control', col: 0, order: 1, type: 'source', label: ['Missile and', 'Fire Control'], value: 3.6, notes: ['+8% Y/Y', '14% segment margin'] },
      { id: 'rotary_mission_systems', col: 0, order: 2, type: 'source', label: ['Rotary &', 'Mission Systems'], value: 4.0, valueText: '$4.0B', notes: ['(8%) Y/Y', '11% segment margin'] },
      { id: 'space', col: 0, order: 3, type: 'source', label: 'Space', value: 3.4, notes: ['+7% Y/Y', '8% segment margin'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 18.0, valueText: '$18.0B', notes: ['+0% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.1, notes: ['12% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 15.9, valueText: '($15.9B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['11% margin', '(2pp) Y/Y'] },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['8% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'other_nonoperating', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.3 },
    ],
    links: [
      { source: 'aeronautics', target: 'revenue', value: 7.0, sourceWidth: 135, targetWidth: 137, sourceOrder: 0, targetOrder: 0 },
      { source: 'missile_fire_control', target: 'revenue', value: 3.6, sourceWidth: 70, targetWidth: 70, sourceOrder: 0, targetOrder: 1 },
      { source: 'rotary_mission_systems', target: 'revenue', value: 4.0, sourceWidth: 78, targetWidth: 79, sourceOrder: 0, targetOrder: 2 },
      { source: 'space', target: 'revenue', value: 3.4, sourceWidth: 67, targetWidth: 68, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.1, sourceWidth: 42, targetWidth: 39, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 15.9, sourceWidth: 312, targetWidth: 312, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 39, targetWidth: 39, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 28, targetWidth: 27, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 5, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.3, sourceWidth: 5, targetWidth: 4, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '洛克希德·马丁 · 2026 财年第一季度',
        meta: { title: '洛克希德·马丁 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 2100 },
        annotationsSvg: annotations(true),
        nodes: {
          aeronautics: { label: '航空', notes: ['同比 -1%', '分部利润率 9%'] },
          missile_fire_control: { label: '导弹与火控', notes: ['同比 +8%', '分部利润率 14%'] },
          rotary_mission_systems: { label: '旋翼与任务系统', notes: ['同比 -8%', '分部利润率 11%'] },
          space: { label: '太空', notes: ['同比 +7%', '分部利润率 8%'] },
          revenue: { label: '收入', notes: ['同比持平'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12%', '同比 -1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 -2 个百分点'] },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 -1 个百分点'] },
          tax: { label: '税费' },
          other_nonoperating: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

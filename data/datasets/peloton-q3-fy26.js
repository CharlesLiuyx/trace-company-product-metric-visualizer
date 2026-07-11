/* ====================================================================
 * Peloton - Q3 FY26 income statement ($M)
 * Fixed d3-sankey layout measured from input/processed/peloton-q3-fy26.png.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const DARK = '#05222e';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2445;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const makeLabels = (isZh) => ({
    connected_fitness_products: {
      blocks: [
        block(484.5, 467, [line('$value', 39), line(isZh ? '同比 (1%)' : '(1%) Y/Y', 29, 400, NOTE)]),
        block(270, 529, [
          line(isZh ? '互联' : 'Connected', 40, 800),
          line(isZh ? '健身' : 'Fitness', 40, 800),
          line(isZh ? '产品' : 'Products', 40, 800),
        ], 'middle', 13),
        block(260, 693, [line(isZh ? '毛利率 11%' : '11% gross margin', 29, 400, NOTE)]),
      ],
    },
    subscriptions: {
      blocks: [
        block(484.5, 778, [line('$value', 39), line(isZh ? '同比 +2%' : '+2% Y/Y', 29, 400, NOTE)]),
        block(270, 1008, [line(isZh ? '订阅' : 'Subscriptions', 40, 800)]),
        block(265, 1062, [line(isZh ? '毛利率 71%' : '71% gross margin', 29, 400, NOTE)]),
      ],
    },
    revenue: {
      blocks: [block(948, 540, [
        line(isZh ? '收入' : 'Revenue', 40, 800),
        line('$value', 39),
        line(isZh ? '同比 +1%' : '+1% Y/Y', 29, 400, NOTE),
      ])],
    },
    gross_profit: {
      blocks: [block(1408.5, 378, [
        line(isZh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line(isZh ? '利润率 52%' : '52% margin', 29, 400, NOTE),
        line(isZh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    cost_of_revenue: {
      blocks: [block(1415.5, 1112, [
        line(isZh ? '收入' : 'Cost of', 35, 800, RED_LABEL),
        line(isZh ? '成本' : 'revenue', 35, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 11)],
    },
    operating_profit: {
      blocks: [block(1883, 256, [
        line(isZh ? '营业利润' : 'Operating profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line(isZh ? '利润率 8%' : '8% margin', 29, 400, NOTE),
        line(isZh ? '同比 +14 个百分点' : '+14pp Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    operating_expenses: {
      blocks: [block(1883, 906, [
        line(isZh ? '营业' : 'Operating', 36, 800, RED_LABEL),
        line(isZh ? '费用' : 'expenses', 36, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 12)],
    },
    net_profit: {
      blocks: [block(isZh ? 2510 : 2498, 281, [
        line(isZh ? '净利润' : 'Net profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line(isZh ? '利润率 4%' : '4% margin', 29, 400, NOTE),
        line(isZh ? '同比 +12 个百分点' : '+12pp Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    other_expense: {
      blocks: [block(RIGHT_LABEL_X, 520, [
        line(isZh ? '其他' : 'Other', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
      ], 'start', 8)],
    },
    ga: {
      blocks: [block(RIGHT_LABEL_X, 704, [
        line(isZh ? '管理费用' : 'G&A', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 17%' : '17% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 (7 个百分点)' : '(7pp) Y/Y', 28, 400, NOTE),
      ], 'start', 8)],
    },
    sm: {
      blocks: [block(RIGHT_LABEL_X, 873, [
        line(isZh ? '销售与营销' : 'S&M', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 16%' : '16% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, 400, NOTE),
      ], 'start', 8)],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 1050, [
        line(isZh ? '研发' : 'R&D', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 9%' : '9% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 28, 400, NOTE),
      ], 'start', 8)],
    },
    other_opex: {
      blocks: [block(RIGHT_LABEL_X, 1213, [
        line(isZh ? '其他' : 'Other', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 2%' : '2% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 28, 400, NOTE),
      ], 'start', 8)],
    },
    tax: { blocks: [] },
  });

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="31" fill="${BLACK}"/>
      ${lines.map((item) => `<text x="${x + width / 2}" y="${item.y}" text-anchor="middle" font-size="${item.size}" font-weight="${item.weight || 400}" fill="#ffffff">${item.text}</text>`).join('')}
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(21, 1160, 240, 166, [
        { text: isZh ? '会员数' : 'Members', y: 1214, size: 29, weight: 800 },
        { text: '6.1M', y: 1256, size: 28 },
        { text: isZh ? '同比 (5%)' : '(5%) Y/Y', y: 1295, size: 25 },
      ])}
      <g>
        <rect x="272" y="1162" width="519" height="166" rx="31" fill="${BLACK}"/>
        ${isZh
          ? '<text x="531.5" y="1236" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">订阅 2.9M（同比 +8%）</text><text x="531.5" y="1280" text-anchor="middle" font-size="25" font-weight="500" fill="#ffffff">App 订阅 0.6M（同比 +9%）</text>'
          : '<text x="531.5" y="1236" text-anchor="middle" font-size="29" fill="#ffffff"><tspan font-weight="800">Subscriptions</tspan><tspan font-weight="400"> 2.9M (8%) Y/Y</tspan></text><text x="531.5" y="1280" text-anchor="middle" font-size="28" fill="#ffffff"><tspan font-weight="800">App Subscriptions</tspan><tspan font-weight="400"> 0.6M (9%) Y/Y</tspan></text>'}
      </g>
      ${kpiCard(802, 1160, 413, 169, [
        { text: isZh ? '月度净流失率' : 'Net Monthly Churn', y: 1212, size: 28, weight: 800 },
        { text: '1.2%', y: 1256, size: 28 },
        { text: isZh ? '同比 (10 个基点)' : '(10bps) Y/Y', y: 1300, size: 25 },
      ])}
    </g>`;

  const labelsEn = makeLabels(false);
  const labelsZh = makeLabels(true);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'peloton-q3-fy26',
    name: 'Peloton · Q3 FY26',
    company: 'Peloton',
    meta: {
      company: 'Peloton',
      title: 'Peloton Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/peloton-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2208,
      periodX: 1881,
      periodY: 1217,
      periodNoteY: 1248,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/peloton/company-wordmark-q3-fy26.png', x: 559, y: 263, width: 685, height: 215 },
      { key: 'connected-fitness-bike', href: 'data/assets/raster-annotations/peloton/connected-fitness-bike-q3-fy26.png', x: 145, y: 293, width: 275, height: 230 },
      { key: 'subscription-app-icon', href: 'data/assets/raster-annotations/peloton/subscription-app-icon-q3-fy26.png', x: 165, y: 787, width: 205, height: 205 },
    ],
    layout: {
      scale: 0.56,
      nodes: {
        connected_fitness_products: { x: 446, y: 565, width: 71, height: 103 },
        subscriptions: { x: 446, y: 878, width: 71, height: 216 },
        revenue: { x: 913, y: 693, width: 70, height: 321 },
        gross_profit: { x: 1380, y: 569, width: 71, height: 165 },
        cost_of_revenue: { x: 1380, y: 941, width: 71, height: 154 },
        operating_profit: { x: 1848, y: 446, width: 70, height: 25 },
        operating_expenses: { x: 1848, y: 751, width: 70, height: 139 },
        net_profit: { x: 2314, y: 324, width: 71, height: 11 },
        other_expense: { x: 2314, y: 557, width: 71, height: 13 },
        ga: { x: 2314, y: 719, width: 71, height: 54 },
        sm: { x: 2314, y: 896, width: 71, height: 48 },
        rnd: { x: 2314, y: 1075, width: 71, height: 29 },
        other_opex: { x: 2312, y: 1249, width: 71, height: 1 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'connected_fitness_products', col: 0, order: 0, type: 'source', label: 'Connected Fitness Products', value: 203, notes: ['(1%) Y/Y', '11% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'subscriptions', col: 0, order: 1, type: 'source', label: 'Subscriptions', value: 428, notes: ['+2% Y/Y', '71% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 631, notes: ['+1% Y/Y'], color: BLACK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 327, notes: ['52% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 304, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 52, notes: ['8% margin', '+14pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 275, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 26, notes: ['4% margin', '+12pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_expense', col: 5, order: 1, type: 'cost', label: 'Other', value: 27, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 110, notes: ['17% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 98, notes: ['16% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 59, notes: ['9% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 8, notes: ['2% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 0, type: 'cost', label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent' },
    ],
    links: [
      { source: 'connected_fitness_products', target: 'revenue', value: 203, sourceWidth: 103, targetWidth: 105, y0: 616.5, y1: 745.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'subscriptions', target: 'revenue', value: 428, sourceWidth: 216, targetWidth: 216, y0: 986, y1: 906, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 327, sourceWidth: 167, targetWidth: 165, y0: 776.5, y1: 651.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 304, sourceWidth: 154, targetWidth: 154, y0: 937, y1: 1018, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 52, sourceWidth: 25, targetWidth: 25, y0: 581.5, y1: 458.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 275, sourceWidth: 139, targetWidth: 139, y0: 664.5, y1: 820.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 26, sourceWidth: 11, targetWidth: 11, y0: 451.5, y1: 329.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 27, sourceWidth: 14, targetWidth: 13, y0: 464, y1: 563.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 110, sourceWidth: 55, targetWidth: 54, y0: 778.5, y1: 746, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 98, sourceWidth: 50, targetWidth: 48, y0: 831, y1: 920, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 59, sourceWidth: 30, targetWidth: 29, y0: 871, y1: 1089.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 8, sourceWidth: 4, targetWidth: 1, y0: 888, y1: 1249.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Peloton · 2026 财年第三季度',
        meta: {
          title: 'Peloton 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1630,
        },
        annotationsSvg: annotations(true),
        nodes: {
          connected_fitness_products: { label: '互联健身产品', notes: ['同比 (1%)', '毛利率 11%'] },
          subscriptions: { label: '订阅', notes: ['同比 +2%', '毛利率 71%'] },
          revenue: { label: '收入', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +14 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +12 个百分点'] },
          other_expense: { label: '其他' },
          ga: { label: '管理费用', notes: ['占收入 17%', '同比 (7 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 16%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 (0 个百分点)'] },
          other_opex: { label: '其他', notes: ['占收入 2%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

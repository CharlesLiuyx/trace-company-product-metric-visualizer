/* ====================================================================
 * Peloton - Q2 FY26 income statement ($M)
 * Fixed d3-sankey layout measured from input/processed/peloton-q2-fy26.png.
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
        block(484.5, 431, [line('$value', 39), line(isZh ? '同比 (4%)' : '(4%) Y/Y', 29, 400, NOTE)]),
        block(270, 510, [
          line(isZh ? '互联' : 'Connected', 40, 800),
          line(isZh ? '健身' : 'Fitness', 40, 800),
          line(isZh ? '产品' : 'Products', 40, 800),
        ], 'middle', 13),
        block(260, 674, [line(isZh ? '毛利率 14%' : '14% gross margin', 29, 400, NOTE)]),
      ],
    },
    subscriptions: {
      blocks: [
        block(484.5, 786, [line('$value', 39), line(isZh ? '同比 (2%)' : '(2%) Y/Y', 29, 400, NOTE)]),
        block(270, 1016, [line(isZh ? '订阅' : 'Subscriptions', 40, 800)]),
        block(265, 1070, [line(isZh ? '毛利率 72%' : '72% gross margin', 29, 400, NOTE)]),
      ],
    },
    revenue: {
      blocks: [block(946, 502, [
        line(isZh ? '收入' : 'Revenue', 40, 800),
        line('$value', 39),
        line(isZh ? '同比 (3%)' : '(3%) Y/Y', 29, 400, NOTE),
      ])],
    },
    gross_profit: {
      blocks: [block(1406.5, 338, [
        line(isZh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line(isZh ? '利润率 50%' : '50% margin', 29, 400, NOTE),
        line(isZh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    cost_of_revenue: {
      blocks: [block(1413.5, 1134, [
        line(isZh ? '收入' : 'Cost of', 35, 800, RED_LABEL),
        line(isZh ? '成本' : 'revenue', 35, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 11)],
    },
    operating_loss: {
      blocks: [block(1662, 937, [
        line(isZh ? '营业' : 'Operating', 36, 800, RED_LABEL),
        line(isZh ? '亏损' : 'loss', 36, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
        line(isZh ? '利润率 (2%)' : '(2%) margin', 29, 400, NOTE),
        line(isZh ? '同比 +5 个百分点' : '+5pp Y/Y', 29, 400, NOTE),
      ], 'middle', 10)],
    },
    operating_expenses: {
      blocks: [block(1884, 510, [
        line(isZh ? '营业' : 'Operating', 36, 800, RED_LABEL),
        line(isZh ? '费用' : 'expenses', 36, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 12)],
    },
    sm: {
      blocks: [block(RIGHT_LABEL_X, 433, [
        line(isZh ? '销售与营销' : 'S&M', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 23%' : '23% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 +1 个百分点' : '+1pp Y/Y', 28, 400, NOTE),
      ], 'start', 8)],
    },
    ga: {
      blocks: [block(RIGHT_LABEL_X, 653, [
        line(isZh ? '管理费用' : 'G&A', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 16%' : '16% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 28, 400, NOTE),
      ], 'start', 8)],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 854, [
        line(isZh ? '研发' : 'R&D', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 10%' : '10% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 +1 个百分点' : '+1pp Y/Y', 28, 400, NOTE),
      ], 'start', 8)],
    },
    other: {
      blocks: [block(RIGHT_LABEL_X, 1055, [
        line(isZh ? '其他' : 'Other', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 4%' : '4% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 +1 个百分点' : '+1pp Y/Y', 28, 400, NOTE),
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
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(21, 1160, 240, 166, [
        { text: isZh ? '会员数' : 'Members', y: 1214, size: 29, weight: 800 },
        { text: '5.8M', y: 1256, size: 28 },
        { text: isZh ? '同比 (6%)' : '(6%) Y/Y', y: 1295, size: 25 },
      ])}
      <g>
        <rect x="272" y="1162" width="519" height="166" rx="31" fill="${BLACK}"/>
        ${isZh
          ? '<text x="531.5" y="1236" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff"><tspan font-weight="800">订阅</tspan><tspan font-weight="400"> 2.7M（同比 (7%)）</tspan></text><text x="531.5" y="1280" text-anchor="middle" font-size="25" font-weight="500" fill="#ffffff"><tspan font-weight="800">App 订阅</tspan><tspan font-weight="400"> 0.5M（同比 (11%)）</tspan></text>'
          : '<text x="531.5" y="1236" text-anchor="middle" font-size="29" fill="#ffffff"><tspan font-weight="800">Subscriptions</tspan><tspan font-weight="400"> 2.7M (7%) Y/Y</tspan></text><text x="531.5" y="1280" text-anchor="middle" font-size="28" fill="#ffffff"><tspan font-weight="800">App Subscriptions</tspan><tspan font-weight="400"> 0.5M (11%) Y/Y</tspan></text>'}
      </g>
      ${kpiCard(802, 1160, 413, 169, [
        { text: isZh ? '月度净流失率' : 'Net Monthly Churn', y: 1212, size: 28, weight: 800 },
        { text: '1.9%', y: 1256, size: 28 },
        { text: isZh ? '同比 +50 个基点' : '+50bps Y/Y', y: 1300, size: 25 },
      ])}
    </g>`;

  const labelsEn = makeLabels(false);
  const labelsZh = makeLabels(true);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'peloton-q2-fy26',
    name: 'Peloton · Q2 FY26',
    company: 'Peloton',
    meta: {
      company: 'Peloton',
      title: 'Peloton Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/peloton-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2208,
      periodX: 2498,
      periodY: 267,
      periodNoteY: 310,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
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
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/peloton/company-wordmark-q2-fy26.png', x: 568, y: 240, width: 690, height: 220 },
      { key: 'connected-fitness-bike', href: 'data/assets/raster-annotations/peloton/connected-fitness-bike-q2-fy26.png', x: 145, y: 270, width: 275, height: 230 },
      { key: 'subscription-app-icon', href: 'data/assets/raster-annotations/peloton/subscription-app-icon-q2-fy26.png', x: 165, y: 795, width: 205, height: 205 },
    ],
    layout: {
      scale: 0.56,
      nodes: {
        connected_fitness_products: { x: 444, y: 529, width: 71, height: 136 },
        subscriptions: { x: 444, y: 886, width: 71, height: 230 },
        revenue: { x: 911, y: 653, width: 70, height: 368 },
        gross_profit: { x: 1378, y: 527, width: 71, height: 185 },
        cost_of_revenue: { x: 1378, y: 937, width: 71, height: 182 },
        operating_loss: { x: 1623, y: 915, width: 71, height: 6 },
        operating_expenses: { x: 1846, y: 662, width: 70, height: 191 },
        sm: { x: 2312, y: 458, width: 71, height: 83 },
        ga: { x: 2312, y: 682, width: 71, height: 55 },
        rnd: { x: 2312, y: 883, width: 71, height: 34 },
        other: { x: 2312, y: 1084, width: 71, height: 8 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      { id: 'tax', representation: 'data-only' },
    ],

    nodes: [
      { id: 'connected_fitness_products', col: 0, order: 0, type: 'source', label: 'Connected Fitness Products', value: 244, notes: ['(4%) Y/Y', '14% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'subscriptions', col: 0, order: 1, type: 'source', label: 'Subscriptions', value: 413, notes: ['(2%) Y/Y', '72% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 657, notes: ['(3%) Y/Y'], color: BLACK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 331, notes: ['50% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 325, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: 'Operating loss', value: -14, notes: ['(2%) margin', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 346, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 152, notes: ['23% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 103, notes: ['16% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 65, notes: ['10% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 3, type: 'cost', label: 'Other', value: 26, notes: ['4% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'connected_fitness_products', target: 'revenue', value: 244, sourceWidth: 136, targetWidth: 135, y0: 597, y1: 720.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'subscriptions', target: 'revenue', value: 413, sourceWidth: 230, targetWidth: 230, y0: 1001, y1: 906, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 331, sourceWidth: 184, targetWidth: 185, y0: 745, y1: 619.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 325, sourceWidth: 181, targetWidth: 182, y0: 930.5, y1: 1028, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 331, sourceWidth: 185, targetWidth: 184, y0: 619.5, y1: 754, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 14, sourceWidth: 6, targetWidth: 7, y0: 918, y1: 851.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 152, sourceWidth: 84, targetWidth: 83, y0: 704, y1: 499.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 103, sourceWidth: 57, targetWidth: 55, y0: 774.5, y1: 709.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 65, sourceWidth: 36, targetWidth: 34, y0: 821, y1: 900, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 26, sourceWidth: 14, targetWidth: 8, y0: 846, y1: 1088, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Peloton · 2026 财年第二季度',
        meta: {
          title: 'Peloton 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1630,
        },
        annotationsSvg: annotations(true),
        nodes: {
          connected_fitness_products: { label: '互联健身产品', notes: ['同比 (4%)', '毛利率 14%'] },
          subscriptions: { label: '订阅', notes: ['同比 (2%)', '毛利率 72%'] },
          revenue: { label: '收入', notes: ['同比 (3%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 23%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 16%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
          other: { label: '其他', notes: ['占收入 4%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

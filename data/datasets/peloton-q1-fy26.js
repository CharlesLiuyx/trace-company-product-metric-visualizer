/* ====================================================================
 * Peloton - Q1 FY26 income statement ($M)
 * Fixed d3-sankey layout measured from input/processed/peloton-q1-fy26.png.
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
  const RIGHT_LABEL_X = 2504;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const makeLabels = (isZh) => ({
    connected_fitness_products: {
      blocks: [
        block(484.5, 471, [line('$value', 39), line(isZh ? '同比 (5%)' : '(5%) Y/Y', 29, 400, NOTE)]),
        block(270, 530, [
          line(isZh ? '互联' : 'Connected', 40, 800),
          line(isZh ? '健身' : 'Fitness', 40, 800),
          line(isZh ? '产品' : 'Products', 40, 800),
        ], 'middle', 13),
        block(260, 686, [line(isZh ? '毛利率 7%' : '7% gross margin', 29, 400, NOTE)]),
      ],
    },
    subscriptions: {
      blocks: [
        block(484.5, 761, [line('$value', 39), line(isZh ? '同比 (7%)' : '(7%) Y/Y', 29, 400, NOTE)]),
        block(270, 992, [line(isZh ? '订阅' : 'Subscriptions', 40, 800)]),
        block(265, 1044, [line(isZh ? '毛利率 69%' : '69% gross margin', 29, 400, NOTE)]),
      ],
    },
    revenue: {
      blocks: [block(946, 542, [
        line(isZh ? '收入' : 'Revenue', 40, 800),
        line('$value', 39),
        line(isZh ? '同比 (6%)' : '(6%) Y/Y', 29, 400, NOTE),
      ])],
    },
    gross_profit: {
      blocks: [block(1415, 382, [
        line(isZh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line(isZh ? '利润率 52%' : '52% margin', 29, 400, NOTE),
        line(isZh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    cost_of_revenue: {
      blocks: [block(1414.5, 1124, [
        line(isZh ? '收入' : 'Cost of', 35, 800, RED_LABEL),
        line(isZh ? '成本' : 'revenue', 35, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 11)],
    },
    operating_profit: {
      blocks: [block(1883, 303, [
        line(isZh ? '营业利润' : 'Operating profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line(isZh ? '利润率 7%' : '7% margin', 29, 400, NOTE),
        line(isZh ? '同比 +5 个百分点' : '+5pp Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    operating_expenses: {
      blocks: [block(1883, 855, [
        line(isZh ? '营业' : 'Operating', 36, 800, RED_LABEL),
        line(isZh ? '费用' : 'expenses', 36, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 12)],
    },
    net_profit: {
      blocks: [block(RIGHT_LABEL_X, 341, [
        line(isZh ? '净利润' : 'Net profit', 40, 800, GREEN_LABEL),
        line('$value', 39, 400, GREEN_LABEL),
        line(isZh ? '利润率 3%' : '3% margin', 29, 400, NOTE),
        line(isZh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE),
      ], 'middle', 9)],
    },
    other_expense: {
      blocks: [block(RIGHT_LABEL_X, 564, [
        line(isZh ? '其他' : 'Other', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
      ], 'middle', 8)],
    },
    ga: {
      blocks: [block(RIGHT_LABEL_X, 713, [
        line(isZh ? '管理费用' : 'G&A', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 18%' : '18% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, 400, NOTE),
      ], 'middle', 8)],
    },
    sm: {
      blocks: [block(RIGHT_LABEL_X, 881, [
        line(isZh ? '销售与营销' : 'S&M', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 12%' : '12% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, 400, NOTE),
      ], 'middle', 8)],
    },
    rnd: {
      blocks: [block(RIGHT_LABEL_X, 1051, [
        line(isZh ? '研发' : 'R&D', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 11%' : '11% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 +1 个百分点' : '+1pp Y/Y', 28, 400, NOTE),
      ], 'middle', 8)],
    },
    other_opex: {
      blocks: [block(RIGHT_LABEL_X, 1211, [
        line(isZh ? '其他' : 'Other', 31, 800, RED_LABEL),
        line('$value', 29, 400, RED_LABEL),
        line(isZh ? '占收入 2%' : '2% of revenue', 28, 400, NOTE),
        line(isZh ? '同比 (3 个百分点)' : '(3pp) Y/Y', 28, 400, NOTE),
      ], 'middle', 8)],
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
        { text: '5.9M', y: 1256, size: 28 },
        { text: isZh ? '同比 (6%)' : '(6%) Y/Y', y: 1295, size: 25 },
      ])}
      <g>
        <rect x="272" y="1162" width="519" height="166" rx="31" fill="${BLACK}"/>
        ${isZh
          ? '<text x="531.5" y="1236" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">订阅 2.7M（同比 (6%)）</text><text x="531.5" y="1280" text-anchor="middle" font-size="25" font-weight="500" fill="#ffffff">App 订阅 0.5M（同比 (8%)）</text>'
          : '<text x="531.5" y="1236" text-anchor="middle" font-size="29" fill="#ffffff"><tspan font-weight="800">Subscriptions</tspan><tspan font-weight="400"> 2.7M (6%) Y/Y</tspan></text><text x="531.5" y="1280" text-anchor="middle" font-size="28" fill="#ffffff"><tspan font-weight="800">App Subscriptions</tspan><tspan font-weight="400"> 0.5M (8%) Y/Y</tspan></text>'}
      </g>
      ${kpiCard(802, 1160, 413, 169, [
        { text: isZh ? '月度净流失率' : 'Net Monthly Churn', y: 1212, size: 28, weight: 800 },
        { text: '1.6%', y: 1256, size: 28 },
        { text: isZh ? '同比 (20 个基点)' : '(20bps) Y/Y', y: 1300, size: 25 },
      ])}
    </g>`;

  const labelsEn = makeLabels(false);
  const labelsZh = makeLabels(true);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'peloton-q1-fy26',
    name: 'Peloton · Q1 FY26',
    company: 'Peloton',
    meta: {
      company: 'Peloton',
      title: 'Peloton Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/peloton-q1-fy26.png', width: 2667, height: 1500 },
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
      { key: 'company-wordmark', href: 'data/assets/raster-annotations/peloton/company-wordmark-q1-fy26.png', x: 559, y: 260, width: 685, height: 220 },
      { key: 'connected-fitness-bike', href: 'data/assets/raster-annotations/peloton/connected-fitness-bike-q1-fy26.png', x: 145, y: 293, width: 275, height: 230 },
      { key: 'subscription-app-icon', href: 'data/assets/raster-annotations/peloton/subscription-app-icon-q1-fy26.png', x: 165, y: 770, width: 205, height: 205 },
    ],
    layout: {
      scale: 0.6,
      nodes: {
        connected_fitness_products: { x: 444, y: 574, width: 71, height: 91 },
        subscriptions: { x: 444, y: 862, width: 71, height: 244 },
        revenue: { x: 911, y: 694, width: 70, height: 338 },
        gross_profit: { x: 1378, y: 573, width: 71, height: 172 },
        cost_of_revenue: { x: 1378, y: 952, width: 71, height: 162 },
        operating_profit: { x: 1846, y: 494, width: 70, height: 24 },
        operating_expenses: { x: 1846, y: 698, width: 70, height: 146 },
        net_profit: { x: 2312, y: 395, width: 71, height: 6 },
        other_expense: { x: 2312, y: 594, width: 71, height: 15 },
        ga: { x: 2312, y: 730, width: 71, height: 60 },
        sm: { x: 2312, y: 907, width: 71, height: 38 },
        rnd: { x: 2312, y: 1063, width: 71, height: 36 },
        other_opex: { x: 2312, y: 1228, width: 71, height: 6 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'connected_fitness_products', col: 0, order: 0, type: 'source', label: 'Connected Fitness Products', value: 152, notes: ['(5%) Y/Y', '7% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'subscriptions', col: 0, order: 1, type: 'source', label: 'Subscriptions', value: 398, notes: ['(7%) Y/Y', '69% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 551, notes: ['(6%) Y/Y'], color: BLACK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 284, notes: ['52% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 267, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 41, notes: ['7% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 242, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 14, notes: ['3% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_expense', col: 5, order: 1, type: 'cost', label: 'Other', value: 27, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 101, notes: ['18% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 67, notes: ['12% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 62, notes: ['11% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 13, notes: ['2% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 0, type: 'cost', label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent' },
    ],
    links: [
      { source: 'connected_fitness_products', target: 'revenue', value: 152, sourceWidth: 91, targetWidth: 94, y0: 619.5, y1: 741, sourceOrder: 0, targetOrder: 0 },
      { source: 'subscriptions', target: 'revenue', value: 398, sourceWidth: 244, targetWidth: 244, y0: 984, y1: 910, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 284, sourceWidth: 174, targetWidth: 172, y0: 781, y1: 659, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 267, sourceWidth: 163, targetWidth: 162, y0: 950.5, y1: 1033, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 41, sourceWidth: 25, targetWidth: 24, y0: 585.5, y1: 506, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 242, sourceWidth: 147, targetWidth: 146, y0: 671.5, y1: 771, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 14, sourceWidth: 9, targetWidth: 6, y0: 498.5, y1: 398, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 27, sourceWidth: 15, targetWidth: 15, y0: 510.5, y1: 601.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 101, sourceWidth: 61, targetWidth: 60, y0: 728.5, y1: 760, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 67, sourceWidth: 41, targetWidth: 38, y0: 779.5, y1: 926, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 62, sourceWidth: 38, targetWidth: 36, y0: 819, y1: 1081, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 13, sourceWidth: 6, targetWidth: 6, y0: 841, y1: 1231, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Peloton · 2026 财年第一季度',
        meta: {
          title: 'Peloton 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1630,
        },
        annotationsSvg: annotations(true),
        nodes: {
          connected_fitness_products: { label: '互联健身产品', notes: ['同比 (5%)', '毛利率 7%'] },
          subscriptions: { label: '订阅', notes: ['同比 (7%)', '毛利率 69%'] },
          revenue: { label: '收入', notes: ['同比 (6%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +3 个百分点'] },
          other_expense: { label: '其他' },
          ga: { label: '管理费用', notes: ['占收入 18%', '同比 (2 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 12%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
          other_opex: { label: '其他', notes: ['占收入 2%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

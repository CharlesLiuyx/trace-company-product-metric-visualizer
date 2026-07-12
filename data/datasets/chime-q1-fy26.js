/* Chime Q1 FY26 income statement ($M), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE = '#5fc781';
  const SOURCE_LABEL = '#1ec576';
  const SOURCE_VALUE = '#17ca7a';
  const REVENUE_LABEL = '#19c878';
  const SOURCE_LINK = '#afdfbf';
  const PROFIT = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const INTEREST_LABEL = '#008e00';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2508;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const chimeLogo = `
    <text x="-4" y="150" font-family="Montserrat,Arial,sans-serif" font-size="176" font-weight="800"
      letter-spacing="-12" textLength="498" lengthAdjust="spacingAndGlyphs" fill="#1ec677">chime</text>
    <text x="486" y="56" font-family="Montserrat,Arial,sans-serif" font-size="22" font-weight="700" fill="#1ec677">®</text>`;

  const kpiCard = (x, width, header, value, note, options = {}) => `
    <g>
      <rect x="${x}" y="1164" width="${width}" height="149" rx="${options.rx || 31}" fill="#16c979"/>
      <text x="${x + width / 2}" y="1218" text-anchor="middle" font-size="${options.headerSize || 29}" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1257" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1286" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(36, 379, isZh ? '交易利润率' : 'Transaction Margin', '76%', isZh ? '同比 +9 个百分点' : '+9pp Y/Y', { headerSize: isZh ? 28 : 29 })}
      ${kpiCard(428, 346, isZh ? '活跃会员' : 'Active Members', '10.2M', isZh ? '同比 +19%' : '+19% Y/Y')}
      ${kpiCard(787, 146, 'ARPAM', '$263', isZh ? '同比 +5%' : '+5% Y/Y', { rx: 29, headerSize: 27 })}
      <text x="96" y="1350" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARPAM = ${isZh ? '每名活跃会员平均收入' : 'Average Revenue per Active Member'}</text>
    </g>`;

  const labels = {
    payment_revenue: {
      blocks: [
        block(441.5, 405, [line('$value', 39, { color: SOURCE_VALUE }), line('+16% Y/Y', 29, { color: NOTE })]),
        block(201, 580, [line('Payment', 40, { weight: 800 }), line('revenue', 40, { weight: 800 })], { lineGap: 10 }),
        block(208, 685, [line('Interchange-based fees', 29, { color: NOTE })]),
      ],
    },
    platform_related_revenue: {
      blocks: [
        block(441.5, 889, [line('$value', 39), line('+50% Y/Y', 29, { color: NOTE })]),
        block(201, 978, [line('Platform-related', 40, { weight: 800 }), line('revenue', 40, { weight: 800 })], { lineGap: 10 }),
        block(189, 1093, [line('Credit Builder, MyPay, SpotMe', 28, { color: NOTE })]),
      ],
    },
    revenue: { blocks: [block(908, 509, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+25% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1375, 311, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('90% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1375, 1107, [line('Cost of', 36, { weight: 800 }), line('revenue', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1843, 231, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('7% margin', 29, { color: NOTE }), line('+9pp Y/Y', 29, { color: NOTE })])] },
    interest: { blocks: [block(2185, 400, [line('Interest', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 274, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('8% margin', 29, { color: NOTE }), line('+6pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1848, 953, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)])] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 582, [line('Marketing ($165M)', 31, { weight: 800 }), line('26% of revenue', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    technology: { blocks: [block(RIGHT_LABEL_X, 708, [line('Technology ($110M)', 31, { weight: 800 }), line('17% of revenue', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    operations: { blocks: [block(RIGHT_LABEL_X, 831, [line('Operations ($95M)', 31, { weight: 800 }), line('15% of revenue', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    transaction_risk_losses: { blocks: [block(RIGHT_LABEL_X, 958, [line('Transaction and', 31, { weight: 800 }), line('risk losses', 31, { weight: 800 }), line('($89M)', 31), line('14% of revenue', 29, { color: NOTE }), line('(7pp) Y/Y', 29, { color: NOTE })], { lineGap: 7 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1163, [line('G&A ($71M)', 31, { weight: 800 }), line('11% of revenue', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    da: { blocks: [block(RIGHT_LABEL_X, 1279, [line('D&A ($4M)', 31, { weight: 800 }), line('1% of revenue', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
  };

  const zhLabels = {
    payment_revenue: {
      blocks: [
        block(441.5, 405, [line('$value', 39, { color: SOURCE_VALUE }), line('同比 +16%', 29, { color: NOTE })]),
        block(201, 590, [line('支付收入', 40, { weight: 800 })]),
        block(201, 685, [line('基于交换费', 29, { color: NOTE })]),
      ],
    },
    platform_related_revenue: {
      blocks: [
        block(441.5, 889, [line('$value', 39), line('同比 +50%', 29, { color: NOTE })]),
        block(201, 992, [line('平台相关收入', 39, { weight: 800 })]),
        block(189, 1093, [line('Credit Builder、MyPay、SpotMe', 25, { color: NOTE })]),
      ],
    },
    revenue: { blocks: [block(908, 519, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +25%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1375, 321, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 90%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1375, 1107, [line('收入', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_profit: { blocks: [block(1843, 241, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 7%', 29, { color: NOTE }), line('同比 +9 个百分点', 29, { color: NOTE })])] },
    interest: { blocks: [block(2185, 400, [line('利息', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 284, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 8%', 29, { color: NOTE }), line('同比 +6 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1848, 963, [line('运营', 40, { weight: 800 }), line('费用', 40, { weight: 800 }), line('$value', 39)])] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 582, [line('营销 ($165M)', 31, { weight: 800 }), line('占收入 26%', 29, { color: NOTE }), line('同比 (0 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    technology: { blocks: [block(RIGHT_LABEL_X, 708, [line('技术 ($110M)', 31, { weight: 800 }), line('占收入 17%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    operations: { blocks: [block(RIGHT_LABEL_X, 831, [line('运营 ($95M)', 31, { weight: 800 }), line('占收入 15%', 29, { color: NOTE }), line('同比 (0 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    transaction_risk_losses: { blocks: [block(RIGHT_LABEL_X, 958, [line('交易与', 31, { weight: 800 }), line('风险损失', 31, { weight: 800 }), line('($89M)', 31), line('占收入 14%', 29, { color: NOTE }), line('同比 (7 个百分点)', 29, { color: NOTE })], { lineGap: 7 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1163, [line('一般及行政 ($71M)', 31, { weight: 800 }), line('占收入 11%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    da: { blocks: [block(RIGHT_LABEL_X, 1279, [line('折旧与摊销 ($4M)', 31, { weight: 800 }), line('占收入 1%', 29, { color: NOTE }), line('同比 (0 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chime-q1-fy26',
    name: 'Chime · Q1 FY26',
    company: 'Chime',
    meta: {
      company: 'Chime',
      title: 'Chime Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/chime-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2123,
      hidePeriodStamp: true,
      logoWidth: 500,
      logoHeight: 160,
      logoY: 284,
      logoViewBox: '0 0 510 160',
      logoSvg: chimeLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE, label: SOURCE_LABEL },
        hub: { node: SOURCE, label: REVENUE_LABEL },
        profit: { node: PROFIT, label: PROFIT_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: PROFIT_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'chime-payment-revenue-card', href: 'data/assets/raster-annotations/chime/payment-revenue-card-q1-fy26.png', x: 105, y: 450, width: 190, height: 140 },
      { key: 'chime-platform-related-revenue-phone', href: 'data/assets/raster-annotations/chime/platform-related-revenue-phone-q1-fy26.png', x: 95, y: 830, width: 200, height: 155 },
    ],
    layout: {
      scale: 1,
      nodes: {
        payment_revenue: { x: 406, y: 504, width: 71, height: 237 },
        platform_related_revenue: { x: 406, y: 988, width: 71, height: 117 },
        revenue: { x: 873, y: 659, width: 70, height: 354 },
        gross_profit: { x: 1340, y: 500, width: 71, height: 317 },
        cost_of_revenue: { x: 1340, y: 1059, width: 71, height: 34 },
        operating_profit: { x: 1808, y: 423, width: 70, height: 22 },
        operating_expenses: { x: 1813, y: 648, width: 70, height: 291 },
        interest: { x: 2150, y: 385, width: 70, height: 3 },
        net_profit: { x: 2274, y: 313, width: 71, height: 27 },
        marketing: { x: 2274, y: 588, width: 71, height: 89 },
        technology: { x: 2274, y: 744, width: 71, height: 58 },
        operations: { x: 2274, y: 878, width: 71, height: 50 },
        transaction_risk_losses: { x: 2274, y: 1022, width: 71, height: 46 },
        ga: { x: 2274, y: 1167, width: 71, height: 36 },
        da: { x: 2274, y: 1298, width: 71, height: 2 },
      },
      labels,
    },
    nodes: [
      { id: 'payment_revenue', col: 0, order: 0, type: 'source', label: ['Payment', 'revenue'], value: 433, notes: ['+16% Y/Y', 'Interchange-based fees'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'platform_related_revenue', col: 0, order: 1, type: 'source', label: ['Platform-related', 'revenue'], value: 215, notes: ['+50% Y/Y', 'Credit Builder, MyPay, SpotMe'], color: SOURCE, labelColor: '#16c979', linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 647, notes: ['+25% Y/Y'], color: SOURCE, labelColor: REVENUE_LABEL, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 580, notes: ['90% margin', '+1pp Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 67, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 46, notes: ['7% margin', '+9pp Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 534, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 8, color: PROFIT, labelColor: INTEREST_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 53, notes: ['8% margin', '+6pp Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'marketing', col: 5, order: 1, type: 'cost', label: 'Marketing', value: 165, notes: ['26% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 5, order: 2, type: 'cost', label: 'Technology', value: 110, notes: ['17% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 3, type: 'cost', label: 'Operations', value: 95, notes: ['15% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'transaction_risk_losses', col: 5, order: 4, type: 'cost', label: ['Transaction and', 'risk losses'], value: 89, notes: ['14% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 71, notes: ['11% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 6, type: 'cost', label: 'D&A', value: 4, notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'payment_revenue', target: 'revenue', value: 433, sourceWidth: 237, targetWidth: 237, y0: 622.5, y1: 777.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'platform_related_revenue', target: 'revenue', value: 215, sourceWidth: 117, targetWidth: 117, y0: 1046.5, y1: 954.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 580, sourceWidth: 319, targetWidth: 317, y0: 818.5, y1: 658.5, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 67, sourceWidth: 35, targetWidth: 34, y0: 995.5, y1: 1076, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 46, sourceWidth: 25, targetWidth: 22, y0: 512.5, y1: 434, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 534, sourceWidth: 292, targetWidth: 291, y0: 671, y1: 793.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 46, sourceWidth: 22, targetWidth: 24, y0: 434, y1: 325, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'interest', target: 'net_profit', value: 8, sourceWidth: 3, targetWidth: 3, y0: 386.5, y1: 338.5, sourceOrder: 0, targetOrder: 1, linkTint: PROFIT_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 165, sourceWidth: 90, targetWidth: 89, y0: 693, y1: 632.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology', value: 110, sourceWidth: 60, targetWidth: 58, y0: 768, y1: 773, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 95, sourceWidth: 50, targetWidth: 50, y0: 823, y1: 903, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'transaction_risk_losses', value: 89, sourceWidth: 49, targetWidth: 46, y0: 872.5, y1: 1045, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 71, sourceWidth: 39, targetWidth: 36, y0: 916.5, y1: 1185, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 4, sourceWidth: 2, targetWidth: 2, y0: 937, y1: 1299, sourceOrder: 5, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARPAM'],
      zh: {
        name: 'Chime · 2026 财年第一季度',
        meta: {
          title: 'Chime 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 110,
          titleTextLength: 1510,
        },
        annotationsSvg: annotations(true),
        nodes: {
          payment_revenue: { label: '支付收入', notes: ['同比 +16%', '基于交换费'] },
          platform_related_revenue: { label: '平台相关收入', notes: ['同比 +50%', 'Credit Builder、MyPay、SpotMe'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 90%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +6 个百分点'] },
          marketing: { label: '营销', notes: ['占收入 26%', '同比 (0 个百分点)'] },
          technology: { label: '技术', notes: ['占收入 17%', '同比 +2 个百分点'] },
          operations: { label: '运营', notes: ['占收入 15%', '同比 (0 个百分点)'] },
          transaction_risk_losses: { label: '交易与风险损失', notes: ['占收入 14%', '同比 (7 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 11%', '同比 +2 个百分点'] },
          da: { label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

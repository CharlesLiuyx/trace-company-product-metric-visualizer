/* Chime Q3 FY25 income statement ($M), measured from the active Build Source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE = '#5fc781';
  const SOURCE_LABEL = '#1ec677';
  const SOURCE_VALUE = '#16c979';
  const SOURCE_LINK = '#afdfbf';
  const PROFIT = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
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
      letter-spacing="-12" textLength="498" lengthAdjust="spacingAndGlyphs" fill="${SOURCE_LABEL}">chime</text>
    <text x="486" y="56" font-family="Montserrat,Arial,sans-serif" font-size="22" font-weight="700" fill="${SOURCE_LABEL}">®</text>`;

  const kpiCard = (x, width, header, value, note, options = {}) => `
    <g>
      <rect x="${x}" y="1165" width="${width}" height="147" rx="${options.rx || 31}" fill="${SOURCE_VALUE}"/>
      <text x="${x + width / 2}" y="1218" text-anchor="middle" font-size="${options.headerSize || 29}" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1257" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1286" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(36, 379, isZh ? '交易利润率' : 'Transaction Margin', '69%', isZh ? '同比 (5 个百分点)' : '(5pp) Y/Y', { headerSize: isZh ? 28 : 29 })}
      ${kpiCard(429, 344, isZh ? '活跃会员' : 'Active Members', '9.1M', isZh ? '同比 +21%' : '+21% Y/Y')}
      ${kpiCard(787, 146, 'ARPAM', '$245', isZh ? '同比 +6%' : '+6% Y/Y', { rx: 29, headerSize: 27 })}
      <text x="96" y="1350" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARPAM = ${isZh ? '每名活跃会员平均收入' : 'Average Revenue per Active Member'}</text>
    </g>`;

  const labels = {
    payment_revenue: {
      blocks: [
        block(441.5, 447, [line('$value', 39, { color: SOURCE_VALUE }), line('+16% Y/Y', 29, { color: NOTE })]),
        block(201, 623, [line('Payment', 40, { weight: 800 }), line('revenue', 40, { weight: 800 })], { lineGap: 10 }),
        block(201, 731, [line('Interchange-based fees', 29, { color: NOTE })]),
      ],
    },
    platform_related_revenue: {
      blocks: [
        block(441.5, 887, [line('$value', 39, { color: SOURCE_VALUE }), line('+65% Y/Y', 29, { color: NOTE })]),
        block(201, 979, [line('Platform-related', 40, { weight: 800 }), line('revenue', 40, { weight: 800 })], { lineGap: 10 }),
        block(189, 1093, [line('Credit Builder, MyPay, SpotMe', 28, { color: NOTE })]),
      ],
    },
    revenue: { blocks: [block(908, 509, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+29% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1375, 362, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('87% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1375, 1155, [line('Cost of', 36, { weight: 800 }), line('revenue', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_loss: { blocks: [block(1614, 1134, [line('Operating', 40, { weight: 800 }), line('loss', 40, { weight: 800 }), line('$value', 39), line('(12%) margin', 29, { color: NOTE }), line('(5pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1842, 498, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)])] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 292, [line('Marketing ($154M)', 31, { weight: 800 }), line('28% of revenue', 29, { color: NOTE }), line('(6pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    technology: { blocks: [block(RIGHT_LABEL_X, 487, [line('Technology ($124M)', 31, { weight: 800 }), line('23% of revenue', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    transaction_risk_losses: { blocks: [block(RIGHT_LABEL_X, 665, [line('Transaction and', 31, { weight: 800 }), line('risk losses', 31, { weight: 800 }), line('($97M)', 31), line('18% of revenue', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { lineGap: 7 })] },
    operations: { blocks: [block(RIGHT_LABEL_X + 16, 882, [line('Operations ($84M)', 31, { weight: 800 }), line('15% of revenue', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1052, [line('G&A ($77M)', 31, { weight: 800 }), line('14% of revenue', 29, { color: NOTE }), line('+3pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    da: { blocks: [block(RIGHT_LABEL_X, 1206, [line('D&A ($4M)', 31, { weight: 800 }), line('1% of revenue', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
  };

  const zhLabels = {
    payment_revenue: {
      blocks: [
        block(441.5, 447, [line('$value', 39, { color: SOURCE_VALUE }), line('同比 +16%', 29, { color: NOTE })]),
        block(201, 637, [line('支付收入', 40, { weight: 800 })]),
        block(201, 731, [line('基于交换费', 29, { color: NOTE })]),
      ],
    },
    platform_related_revenue: {
      blocks: [
        block(441.5, 887, [line('$value', 39, { color: SOURCE_VALUE }), line('同比 +65%', 29, { color: NOTE })]),
        block(201, 993, [line('平台相关收入', 39, { weight: 800 })]),
        block(189, 1093, [line('Credit Builder、MyPay、SpotMe', 25, { color: NOTE })]),
      ],
    },
    revenue: { blocks: [block(908, 519, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +29%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1375, 362, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 87%', 29, { color: NOTE }), line('同比 (0 个百分点)', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1375, 1155, [line('收入', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_loss: { blocks: [block(1614, 1144, [line('营业亏损', 40, { weight: 800 }), line('$value', 39), line('利润率 (12%)', 29, { color: NOTE }), line('同比 (5 个百分点)', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1842, 502, [line('运营', 40, { weight: 800 }), line('费用', 40, { weight: 800 }), line('$value', 39)])] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 292, [line('营销 ($154M)', 31, { weight: 800 }), line('占收入 28%', 29, { color: NOTE }), line('同比 (6 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    technology: { blocks: [block(RIGHT_LABEL_X, 487, [line('技术 ($124M)', 31, { weight: 800 }), line('占收入 23%', 29, { color: NOTE }), line('同比 +4 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    transaction_risk_losses: { blocks: [block(RIGHT_LABEL_X, 665, [line('交易与', 31, { weight: 800 }), line('风险损失', 31, { weight: 800 }), line('($97M)', 31), line('占收入 18%', 29, { color: NOTE }), line('同比 +5 个百分点', 29, { color: NOTE })], { lineGap: 7 })] },
    operations: { blocks: [block(RIGHT_LABEL_X + 16, 882, [line('运营 ($84M)', 31, { weight: 800 }), line('占收入 15%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1052, [line('一般及行政 ($77M)', 31, { weight: 800 }), line('占收入 14%', 29, { color: NOTE }), line('同比 +3 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    da: { blocks: [block(RIGHT_LABEL_X, 1206, [line('折旧与摊销 ($4M)', 31, { weight: 800 }), line('占收入 1%', 29, { color: NOTE }), line('同比 (0 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chime-q3-fy25',
    name: 'Chime · Q3 FY25',
    company: 'Chime',
    meta: {
      company: 'Chime',
      title: 'Chime Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/chime-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2114,
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
        hub: { node: SOURCE, label: SOURCE_LABEL },
        profit: { node: PROFIT, label: PROFIT_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: PROFIT_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'chime-payment-revenue-card', href: 'data/assets/raster-annotations/chime/payment-revenue-card-q3-fy25.png', x: 105, y: 475, width: 190, height: 140 },
      { key: 'chime-platform-related-revenue-phone', href: 'data/assets/raster-annotations/chime/platform-related-revenue-phone-q3-fy25.png', x: 95, y: 825, width: 200, height: 155 },
    ],
    layout: {
      scale: 1,
      nodes: {
        payment_revenue: { x: 404, y: 544, width: 71, height: 237 },
        platform_related_revenue: { x: 404, y: 984, width: 71, height: 118 },
        revenue: { x: 871, y: 658, width: 70, height: 357 },
        gross_profit: { x: 1338, y: 541, width: 71, height: 310 },
        cost_of_revenue: { x: 1338, y: 1095, width: 71, height: 44 },
        operating_loss: { x: 1578, y: 1067, width: 71, height: 41 },
        operating_expenses: { x: 1806, y: 658, width: 70, height: 354 },
        marketing: { x: 2272, y: 287, width: 71, height: 100 },
        technology: { x: 2272, y: 497, width: 71, height: 79 },
        transaction_risk_losses: { x: 2272, y: 686, width: 71, height: 63 },
        operations: { x: 2272, y: 881, width: 71, height: 53 },
        ga: { x: 2272, y: 1054, width: 71, height: 49 },
        da: { x: 2272, y: 1216, width: 71, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'payment_revenue', col: 0, order: 0, type: 'source', label: ['Payment', 'revenue'], value: 363, notes: ['+16% Y/Y', 'Interchange-based fees'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'platform_related_revenue', col: 0, order: 1, type: 'source', label: ['Platform-related', 'revenue'], value: 180, notes: ['+65% Y/Y', 'Credit Builder, MyPay, SpotMe'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 544, notes: ['+29% Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 474, notes: ['87% margin', '(0pp) Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 69, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -65, notes: ['(12%) margin', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 539, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 0, type: 'cost', label: 'Marketing', value: 154, notes: ['28% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 5, order: 1, type: 'cost', label: 'Technology', value: 124, notes: ['23% of revenue', '+4pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'transaction_risk_losses', col: 5, order: 2, type: 'cost', label: ['Transaction and', 'risk losses'], value: 97, notes: ['18% of revenue', '+5pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 3, type: 'cost', label: 'Operations', value: 84, notes: ['15% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 77, notes: ['14% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 5, type: 'cost', label: 'D&A', value: 4, notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'payment_revenue', target: 'revenue', value: 363, sourceWidth: 237, targetWidth: 238, y0: 662.5, y1: 777, sourceOrder: 0, targetOrder: 0 },
      { source: 'platform_related_revenue', target: 'revenue', value: 180, sourceWidth: 118, targetWidth: 119, y0: 1043, y1: 955.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 474, sourceWidth: 313, targetWidth: 310, y0: 814.5, y1: 696, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 69, sourceWidth: 44, targetWidth: 44, y0: 993, y1: 1117, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 474, sourceWidth: 310, targetWidth: 312, y0: 696, y1: 814, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 65, sourceWidth: 41, targetWidth: 42, y0: 1087.5, y1: 991, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'marketing', value: 154, sourceWidth: 101, targetWidth: 100, y0: 708.5, y1: 337, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology', value: 124, sourceWidth: 81, targetWidth: 79, y0: 799.5, y1: 536.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'transaction_risk_losses', value: 97, sourceWidth: 64, targetWidth: 63, y0: 872, y1: 717.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 84, sourceWidth: 55, targetWidth: 53, y0: 931.5, y1: 907.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 77, sourceWidth: 51, targetWidth: 49, y0: 984.5, y1: 1078.5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 4, sourceWidth: 2, targetWidth: 3, y0: 1011, y1: 1217.5, sourceOrder: 5, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARPAM'],
      zh: {
        name: 'Chime · 2025 财年第三季度',
        meta: {
          title: 'Chime 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          titleSize: 110,
          titleTextLength: 1510,
        },
        annotationsSvg: annotations(true),
        nodes: {
          payment_revenue: { label: '支付收入', notes: ['同比 +16%', '基于交换费'] },
          platform_related_revenue: { label: '平台相关收入', notes: ['同比 +65%', 'Credit Builder、MyPay、SpotMe'] },
          revenue: { label: '收入', notes: ['同比 +29%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (12%)', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          marketing: { label: '营销', notes: ['占收入 28%', '同比 (6 个百分点)'] },
          technology: { label: '技术', notes: ['占收入 23%', '同比 +4 个百分点'] },
          transaction_risk_losses: { label: '交易与风险损失', notes: ['占收入 18%', '同比 +5 个百分点'] },
          operations: { label: '运营', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 14%', '同比 +3 个百分点'] },
          da: { label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

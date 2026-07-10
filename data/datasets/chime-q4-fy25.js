/* Chime Q4 FY25 income statement ($M), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE = '#5fc781';
  const SOURCE_LABEL = '#16c979';
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
      <rect x="${x}" y="1164" width="${width}" height="149" rx="${options.rx || 31}" fill="${SOURCE_LABEL}"/>
      <text x="${x + width / 2}" y="1218" text-anchor="middle" font-size="${options.headerSize || 29}" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1257" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1286" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(36, 379, isZh ? '交易利润率' : 'Transaction Margin', '72%', isZh ? '同比 +3 个百分点' : '+3pp Y/Y', { headerSize: isZh ? 28 : 29 })}
      ${kpiCard(428, 346, isZh ? '活跃会员' : 'Active Members', '9.5M', isZh ? '同比 +19%' : '+19% Y/Y')}
      ${kpiCard(787, 146, 'ARPAM', '$257', isZh ? '同比 +5%' : '+5% Y/Y', { rx: 29, headerSize: 27 })}
      <text x="96" y="1350" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARPAM = ${isZh ? '每名活跃会员平均收入' : 'Average Revenue per Active Member'}</text>
    </g>`;

  const labels = {
    payment_revenue: {
      blocks: [
        block(441.5, 439, [line('$value', 39), line('+17% Y/Y', 29, { color: NOTE })]),
        block(201, 614, [line('Payment', 40, { weight: 800 }), line('revenue', 40, { weight: 800 })], { lineGap: 10 }),
        block(208, 719, [line('Interchange-based fees', 29, { color: NOTE })]),
      ],
    },
    platform_related_revenue: {
      blocks: [
        block(441.5, 887, [line('$value', 39), line('+47% Y/Y', 29, { color: NOTE })]),
        block(201, 979, [line('Platform-related', 40, { weight: 800 }), line('revenue', 40, { weight: 800 })], { lineGap: 10 }),
        block(189, 1095, [line('Credit Builder, MyPay, SpotMe', 28, { color: NOTE })]),
      ],
    },
    revenue: { blocks: [block(908, 515, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+26% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1375, 356, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('89% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1375, 1112, [line('Cost of', 36, { weight: 800 }), line('revenue', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_loss: { blocks: [block(1638, 1072, [line('Operating', 40, { weight: 800 }), line('loss', 40, { weight: 800 }), line('$value', 39), line('(9%) margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1842, 500, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)])] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 296, [line('Marketing ($164M)', 31, { weight: 800 }), line('28% of revenue', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    technology: { blocks: [block(RIGHT_LABEL_X, 488, [line('Technology ($111M)', 31, { weight: 800 }), line('19% of revenue', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 661, [line('G&A ($109M)', 31, { weight: 800 }), line('18% of revenue', 29, { color: NOTE }), line('+8pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    transaction_risk_losses: { blocks: [block(RIGHT_LABEL_X, 804, [line('Transaction and', 31, { weight: 800 }), line('risk losses', 31, { weight: 800 }), line('($103M)', 31), line('17% of revenue', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })], { lineGap: 7 })] },
    operations: { blocks: [block(RIGHT_LABEL_X, 1043, [line('Operations ($93M)', 31, { weight: 800 }), line('16% of revenue', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    da: { blocks: [block(RIGHT_LABEL_X, 1198, [line('D&A ($4M)', 31, { weight: 800 }), line('1% of revenue', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
  };

  const zhLabels = {
    payment_revenue: {
      blocks: [
        block(441.5, 439, [line('$value', 39), line('同比 +17%', 29, { color: NOTE })]),
        block(201, 628, [line('支付收入', 40, { weight: 800 })]),
        block(201, 719, [line('基于交换费', 29, { color: NOTE })]),
      ],
    },
    platform_related_revenue: {
      blocks: [
        block(441.5, 887, [line('$value', 39), line('同比 +47%', 29, { color: NOTE })]),
        block(201, 993, [line('平台相关收入', 39, { weight: 800 })]),
        block(201, 1095, [line('Credit Builder、MyPay、SpotMe', 25, { color: NOTE })]),
      ],
    },
    revenue: { blocks: [block(908, 525, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +26%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1375, 366, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 89%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1375, 1112, [line('收入', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_loss: { blocks: [block(1638, 1082, [line('营业亏损', 40, { weight: 800 }), line('$value', 39), line('利润率 (9%)', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1842, 510, [line('运营', 40, { weight: 800 }), line('费用', 40, { weight: 800 }), line('$value', 39)])] },
    marketing: { blocks: [block(RIGHT_LABEL_X, 296, [line('营销 ($164M)', 31, { weight: 800 }), line('占收入 28%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    technology: { blocks: [block(RIGHT_LABEL_X, 488, [line('技术 ($111M)', 31, { weight: 800 }), line('占收入 19%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 661, [line('一般及行政 ($109M)', 31, { weight: 800 }), line('占收入 18%', 29, { color: NOTE }), line('同比 +8 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    transaction_risk_losses: { blocks: [block(RIGHT_LABEL_X, 804, [line('交易与', 31, { weight: 800 }), line('风险损失', 31, { weight: 800 }), line('($103M)', 31), line('占收入 17%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })], { lineGap: 7 })] },
    operations: { blocks: [block(RIGHT_LABEL_X, 1043, [line('运营 ($93M)', 31, { weight: 800 }), line('占收入 16%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    da: { blocks: [block(RIGHT_LABEL_X, 1198, [line('折旧与摊销 ($4M)', 31, { weight: 800 }), line('占收入 1%', 29, { color: NOTE }), line('同比 (0 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chime-q4-fy25',
    name: 'Chime · Q4 FY25',
    company: 'Chime',
    meta: {
      company: 'Chime',
      title: 'Chime Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/chime-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2123,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      { key: 'chime-payment-revenue-card', href: 'data/assets/raster-annotations/chime/payment-revenue-card-q4-fy25.png', x: 105, y: 470, width: 190, height: 140 },
      { key: 'chime-platform-related-revenue-phone', href: 'data/assets/raster-annotations/chime/platform-related-revenue-phone-q4-fy25.png', x: 95, y: 830, width: 200, height: 155 },
    ],
    layout: {
      scale: 1,
      nodes: {
        payment_revenue: { x: 406, y: 539, width: 71, height: 215 },
        platform_related_revenue: { x: 406, y: 986, width: 71, height: 108 },
        revenue: { x: 873, y: 666, width: 70, height: 326 },
        gross_profit: { x: 1339, y: 543, width: 72, height: 290 },
        cost_of_revenue: { x: 1339, y: 1062, width: 72, height: 35 },
        operating_loss: { x: 1602, y: 1029, width: 72, height: 28 },
        operating_expenses: { x: 1806, y: 668, width: 72, height: 320 },
        marketing: { x: 2273, y: 303, width: 72, height: 89 },
        technology: { x: 2273, y: 502, width: 72, height: 58 },
        ga: { x: 2273, y: 671, width: 72, height: 55 },
        transaction_risk_losses: { x: 2273, y: 849, width: 72, height: 60 },
        operations: { x: 2273, y: 1045, width: 72, height: 50 },
        da: { x: 2273, y: 1250, width: 72, height: 1 },
      },
      labels,
    },
    nodes: [
      { id: 'payment_revenue', col: 0, order: 0, type: 'source', label: ['Payment', 'revenue'], value: 396, notes: ['+17% Y/Y', 'Interchange-based fees'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'platform_related_revenue', col: 0, order: 1, type: 'source', label: ['Platform-related', 'revenue'], value: 200, notes: ['+47% Y/Y', 'Credit Builder, MyPay, SpotMe'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 596, notes: ['+26% Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 530, notes: ['89% margin', '+1pp Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 66, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -54, notes: ['(9%) margin', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 584, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 0, type: 'cost', label: 'Marketing', value: 164, notes: ['28% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 5, order: 1, type: 'cost', label: 'Technology', value: 111, notes: ['19% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 109, notes: ['18% of revenue', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'transaction_risk_losses', col: 5, order: 3, type: 'cost', label: ['Transaction and', 'risk losses'], value: 103, notes: ['17% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 4, type: 'cost', label: 'Operations', value: 93, notes: ['16% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 5, type: 'cost', label: 'D&A', value: 4, notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'payment_revenue', target: 'revenue', value: 396, sourceWidth: 215, targetWidth: 217, y0: 646.5, y1: 774.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'platform_related_revenue', target: 'revenue', value: 200, sourceWidth: 108, targetWidth: 109, y0: 1040, y1: 937.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 530, sourceWidth: 291, targetWidth: 290, y0: 811.5, y1: 688, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 66, sourceWidth: 35, targetWidth: 35, y0: 974.5, y1: 1079.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 530, sourceWidth: 290, targetWidth: 290, y0: 688, y1: 813, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 54, sourceWidth: 28, targetWidth: 30, y0: 1043, y1: 973, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'marketing', value: 164, sourceWidth: 90, targetWidth: 89, y0: 713, y1: 347.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology', value: 111, sourceWidth: 61, targetWidth: 58, y0: 788.5, y1: 531, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 109, sourceWidth: 60, targetWidth: 55, y0: 849, y1: 698.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'transaction_risk_losses', value: 103, sourceWidth: 56, targetWidth: 60, y0: 907, y1: 879, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 93, sourceWidth: 51, targetWidth: 50, y0: 960.5, y1: 1070, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 4, sourceWidth: 2, targetWidth: 1, y0: 987, y1: 1250.5, sourceOrder: 5, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Chime · 2025 财年第四季度',
        meta: {
          title: 'Chime 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleSize: 110,
          titleTextLength: 1510,
        },
        annotationsSvg: annotations(true),
        nodes: {
          payment_revenue: { label: '支付收入', notes: ['同比 +17%', '基于交换费'] },
          platform_related_revenue: { label: '平台相关收入', notes: ['同比 +47%', 'Credit Builder、MyPay、SpotMe'] },
          revenue: { label: '收入', notes: ['同比 +26%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (9%)', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          marketing: { label: '营销', notes: ['占收入 28%', '同比 (2 个百分点)'] },
          technology: { label: '技术', notes: ['占收入 19%', '同比 +2 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 18%', '同比 +8 个百分点'] },
          transaction_risk_losses: { label: '交易与风险损失', notes: ['占收入 17%', '同比 (2 个百分点)'] },
          operations: { label: '运营', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          da: { label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

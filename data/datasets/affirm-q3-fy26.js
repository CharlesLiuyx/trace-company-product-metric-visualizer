/* Affirm Q3 FY26 income statement ($M), measured from the active Build source. */
(function () {
  const BG = '#f2f2f2';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BLUE = '#4a4af5';
  const BLUE_LINK = '#a6a6f2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TAX_LINE = '#d33535';
  const RIGHT_X = 2450;

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
    lineGap: options.lineGap || 8,
    lines,
  });

  const affirmLogo = `
    <path transform="translate(18 11) scale(.95)" d="M256 224 C286 -61 543 -61 574 224" fill="none" stroke="${BLUE}" stroke-width="23" stroke-linecap="butt"/>
    <text transform="translate(3 1)" x="276" y="224" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="166" font-weight="900" fill="#101820" textLength="508"
      lengthAdjust="spacingAndGlyphs">affirm</text>`;

  const kpiCard = (x, y, width, height, header, value, note, headerSize = 28) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="31" fill="#000"/>
      <text x="${x + width / 2}" y="${y + 48}" text-anchor="middle" font-size="${headerSize}" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="${y + 88}" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="${y + 127}" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(102, 822, 146, 158, 'GMV', '$11.6B', zh ? '同比 +35%' : '+35% Y/Y')}
      ${kpiCard(255, 821, 240, 159, 'D2C GMV', '$3.7B', zh ? '同比 +48%' : '+48% Y/Y')}
      ${kpiCard(103, 990, 391, 159, zh ? '活跃消费者' : 'Active consumers', '26.8M', zh ? '同比 +22%' : '+22% Y/Y', 27)}
      ${kpiCard(103, 1159, 391, 159, zh ? '活跃商户' : 'Active merchants', '515K', zh ? '同比 +44%' : '+44% Y/Y', 27)}
      <text x="87" y="1348" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">GMV = ${zh ? '商品交易总额' : 'Gross Merchandise Value'}</text>
      <text x="1333" y="1301" text-anchor="middle" font-size="38" font-weight="800" fill="${NOTE}">${zh ? '2026 财年第三季度' : 'Q3 FY26'}</text>
      <text x="1333" y="1338" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${zh ? '截至 2026 年 3 月' : 'Ending Mar. 2026'}</text>
    </g>`;

  const labels = {
    merchant_network_revenue: {
      blocks: [
        block(402, 328, [line('$value', 39), line('+25% Y/Y', 29, { color: NOTE })]),
        block(333, 416, [line('Merchant', 40, { weight: 800 }), line('network', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    card_network_revenue: {
      blocks: [
        block(402, 609, [line('$value', 39), line('+13% Y/Y', 29, { color: NOTE })]),
        block(333, 675, [line('Card', 40, { weight: 800 }), line('network', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    total_network_revenue: {
      blocks: [block(869, 325, [line('Total', 40, { weight: 800 }), line('network', 40, { weight: 800 }), line('$value', 39), line('+23% Y/Y', 29, { color: NOTE })], { lineGap: 8 })],
    },
    interest_income: {
      blocks: [
        block(869, 727, [line('$value', 39), line('+32% Y/Y', 29, { color: NOTE })]),
        block(766, 840, [line('Interest', 40, { weight: 800 }), line('income', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    gain_on_sale_of_loans: {
      blocks: [
        block(869, 1052, [line('$value', 39), line('+68% Y/Y', 29, { color: NOTE })]),
        block(766, 1124, [line('Gain on', 39, { weight: 800 }), line('sale of loans', 39, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    servicing_income: {
      blocks: [
        block(869, 1211, [line('$value', 39), line('+39% Y/Y', 29, { color: NOTE })]),
        block(766, 1264, [line('Servicing', 39, { weight: 800 }), line('income', 39, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    revenue: { blocks: [block(1337, 517, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+33% Y/Y', 29, { color: NOTE })])] },
    operating_profit: { blocks: [block(1801, 325, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('9% margin', 29, { color: NOTE }), line('+10pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1801, 1223, [line('Operating', 38, { weight: 800 }), line('expenses', 38, { weight: 800 }), line('$value', 37)], { lineGap: 10 })] },
    other_income: { blocks: [block(2131, 193, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_X, 240, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('10% margin', 29, { color: NOTE }), line('+10pp Y/Y', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_X, 400, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    loss_on_loan_purchase_commitment: { blocks: [block(RIGHT_X, 466, [line('Loss on loan', 31, { weight: 800 }), line('purchase', 31, { weight: 800 }), line('commitment', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    provision_for_credit_losses: { blocks: [block(RIGHT_X, 630, [line('Provision for', 31, { weight: 800 }), line('credit loss', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    funding_costs: { blocks: [block(RIGHT_X, 790, [line('Funding costs', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    processing_servicing: { blocks: [block(RIGHT_X, 899, [line('Processing &', 31, { weight: 800 }), line('Servicing', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    technology_data_analytics: { blocks: [block(RIGHT_X, 1034, [line('Technology &', 31, { weight: 800 }), line('data analytics', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(RIGHT_X, 1211, [line('S&M ($73M)', 31, { weight: 800 })])] },
    general_administrative: { blocks: [block(RIGHT_X, 1326, [line('G&A ($145M)', 31, { weight: 800 })])] },
  };

  const zhLabels = {
    merchant_network_revenue: { blocks: [block(402, 334, [line('$value', 39), line('同比 +25%', 29, { color: NOTE })]), block(333, 440, [line('商户网络', 40, { weight: 800 })], { anchor: 'end' })] },
    card_network_revenue: { blocks: [block(402, 615, [line('$value', 39), line('同比 +13%', 29, { color: NOTE })]), block(333, 700, [line('卡网络', 40, { weight: 800 })], { anchor: 'end' })] },
    total_network_revenue: { blocks: [block(869, 348, [line('网络总收入', 40, { weight: 800 }), line('$value', 39), line('同比 +23%', 29, { color: NOTE })])] },
    interest_income: { blocks: [block(869, 727, [line('$value', 39), line('同比 +32%', 29, { color: NOTE })]), block(797, 864, [line('利息收入', 40, { weight: 800 })], { anchor: 'end' })] },
    gain_on_sale_of_loans: { blocks: [block(869, 1054, [line('$value', 39), line('同比 +68%', 29, { color: NOTE })]), block(797, 1147, [line('贷款出售收益', 38, { weight: 800 })], { anchor: 'end' })] },
    servicing_income: { blocks: [block(869, 1217, [line('$value', 39), line('同比 +39%', 29, { color: NOTE })]), block(797, 1288, [line('服务收入', 39, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(1337, 523, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +33%', 29, { color: NOTE })])] },
    operating_profit: { blocks: [block(1801, 331, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 9%', 29, { color: NOTE }), line('同比 +10 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1801, 1231, [line('运营费用', 38, { weight: 800 }), line('$value', 37)])] },
    other_income: { blocks: [block(2131, 195, [line('其他', 31, { weight: 800 }), line('$value', 31)])] },
    net_profit: { blocks: [block(RIGHT_X, 240, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 10%', 29, { color: NOTE }), line('同比 +10 个百分点', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_X, 402, [line('税费', 31, { weight: 800 }), line('$value', 31)])] },
    loss_on_loan_purchase_commitment: { blocks: [block(RIGHT_X, 485, [line('贷款购买', 31, { weight: 800 }), line('承诺损失', 31, { weight: 800 }), line('$value', 31)])] },
    provision_for_credit_losses: { blocks: [block(RIGHT_X, 649, [line('信贷损失准备', 31, { weight: 800 }), line('$value', 31)])] },
    funding_costs: { blocks: [block(RIGHT_X, 790, [line('融资成本', 31, { weight: 800 }), line('$value', 31)])] },
    processing_servicing: { blocks: [block(RIGHT_X, 915, [line('处理与服务', 31, { weight: 800 }), line('$value', 31)])] },
    technology_data_analytics: { blocks: [block(RIGHT_X, 1053, [line('技术与数据分析', 31, { weight: 800 }), line('$value', 31)])] },
    sales_marketing: { blocks: [block(RIGHT_X, 1211, [line('销售与营销 ($73M)', 30, { weight: 800 })])] },
    general_administrative: { blocks: [block(RIGHT_X, 1326, [line('一般及行政 ($145M)', 30, { weight: 800 })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'affirm-q3-fy26',
    name: 'Affirm · Q3 FY26',
    company: 'Affirm',
    meta: {
      company: 'Affirm',
      title: 'Affirm Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/affirm-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2125,
      hidePeriodStamp: true,
      logoWidth: 610,
      logoHeight: 240,
      logoY: 254,
      logoViewBox: '0 0 610 240',
      logoSvg: affirmLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: '#000000' },
        hub: { node: BLUE, label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 435 / 1038,
      nodes: {
        merchant_network_revenue: { x: 364, y: 425, width: 71, height: 110 },
        card_network_revenue: { x: 364, y: 705, width: 71, height: 27 },
        total_network_revenue: { x: 831, y: 525, width: 70, height: 139 },
        interest_income: { x: 834, y: 814, width: 70, height: 222 },
        gain_on_sale_of_loans: { x: 831, y: 1143, width: 70, height: 50 },
        servicing_income: { x: 831, y: 1306, width: 70, height: 17 },
        revenue: { x: 1298, y: 670, width: 71, height: 435 },
        operating_profit: { x: 1766, y: 512, width: 70, height: 35 },
        operating_expenses: { x: 1766, y: 811, width: 70, height: 397 },
        other_income: { x: 2096, y: 280, width: 70, height: 9 },
        tax: { x: 2232, y: 443, width: 71, height: 1 },
        net_profit: { x: 2232, y: 281, width: 71, height: 42 },
        loss_on_loan_purchase_commitment: { x: 2232, y: 530, width: 71, height: 28 },
        provision_for_credit_losses: { x: 2232, y: 657, width: 71, height: 81 },
        funding_costs: { x: 2232, y: 809, width: 71, height: 47 },
        processing_servicing: { x: 2232, y: 926, width: 71, height: 65 },
        technology_data_analytics: { x: 2232, y: 1063, width: 71, height: 79 },
        sales_marketing: { x: 2232, y: 1215, width: 71, height: 27 },
        general_administrative: { x: 2232, y: 1315, width: 71, height: 58 },
      },
      labels,
    },
    nodes: [
      { id: 'merchant_network_revenue', col: 0, order: 0, type: 'source', label: 'Merchant network', value: 268, notes: ['+25% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'card_network_revenue', col: 0, order: 1, type: 'source', label: 'Card network', value: 66, notes: ['+13% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'total_network_revenue', col: 1, order: 0, type: 'source', label: 'Total network', value: 334, notes: ['+23% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'interest_income', col: 1, order: 1, type: 'source', label: 'Interest income', value: 532, notes: ['+32% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'gain_on_sale_of_loans', col: 1, order: 2, type: 'source', label: 'Gain on sale of loans', value: 127, notes: ['+68% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'servicing_income', col: 1, order: 3, type: 'source', label: 'Servicing income', value: 45, notes: ['+39% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 1038, valueText: '$1,038M', notes: ['+33% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 88, notes: ['9% margin', '+10pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 950, valueText: '($950M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 19, valueText: '$19M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 0, type: 'cost', label: 'Tax', value: 4, valueText: '($4M)', color: TAX_LINE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 103, notes: ['10% margin', '+10pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'loss_on_loan_purchase_commitment', col: 5, order: 2, type: 'cost', label: 'Loss on loan purchase commitment', value: 68, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provision_for_credit_losses', col: 5, order: 3, type: 'cost', label: 'Provision for credit loss', value: 197, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'funding_costs', col: 5, order: 4, type: 'cost', label: 'Funding costs', value: 114, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'processing_servicing', col: 5, order: 5, type: 'cost', label: 'Processing & Servicing', value: 162, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_data_analytics', col: 5, order: 6, type: 'cost', label: 'Technology & data analytics', value: 192, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 5, order: 7, type: 'cost', label: 'S&M', value: 73, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 5, order: 8, type: 'cost', label: 'G&A', value: 145, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'merchant_network_revenue', target: 'total_network_revenue', value: 268, sourceWidth: 110, targetWidth: 110, y0: 480, y1: 580, sourceOrder: 0, targetOrder: 0 },
      { source: 'card_network_revenue', target: 'total_network_revenue', value: 66, sourceWidth: 27, targetWidth: 29, y0: 718.5, y1: 649.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'total_network_revenue', target: 'revenue', value: 334, sourceWidth: 139, targetWidth: 138, y0: 594.5, y1: 739, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest_income', target: 'revenue', value: 532, sourceWidth: 222, targetWidth: 227, y0: 925, y1: 921.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'gain_on_sale_of_loans', target: 'revenue', value: 127, sourceWidth: 50, targetWidth: 53, y0: 1168, y1: 1061.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'servicing_income', target: 'revenue', value: 45, sourceWidth: 17, targetWidth: 17, y0: 1314.5, y1: 1096.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'operating_profit', value: 88, sourceWidth: 35, targetWidth: 35, y0: 687.5, y1: 529.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 950, sourceWidth: 400, targetWidth: 397, y0: 905, y1: 1009.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 84, sourceWidth: 33, targetWidth: 34, y0: 528.5, y1: 306, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 4, sourceWidth: 2, targetWidth: 1, y0: 546, y1: 443.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 19, sourceWidth: 9, targetWidth: 8, y0: 284.5, y1: 285, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'loss_on_loan_purchase_commitment', value: 68, sourceWidth: 28, targetWidth: 28, y0: 825, y1: 544, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'provision_for_credit_losses', value: 197, sourceWidth: 82, targetWidth: 81, y0: 880, y1: 697.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'funding_costs', value: 114, sourceWidth: 48, targetWidth: 47, y0: 945, y1: 832.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'processing_servicing', value: 162, sourceWidth: 68, targetWidth: 65, y0: 1003, y1: 958.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_data_analytics', value: 192, sourceWidth: 80, targetWidth: 79, y0: 1077, y1: 1102.5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 73, sourceWidth: 30, targetWidth: 27, y0: 1132, y1: 1228.5, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 145, sourceWidth: 61, targetWidth: 58, y0: 1177.5, y1: 1344, sourceOrder: 6, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['GMV', 'D2C GMV'],
      zh: {
        name: 'Affirm · 2026 财年第三季度',
        meta: {
          title: 'Affirm 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1550,
        },
        annotationsSvg: annotations(true),
        nodes: {
          merchant_network_revenue: { label: '商户网络', notes: ['同比 +25%'] },
          card_network_revenue: { label: '卡网络', notes: ['同比 +13%'] },
          total_network_revenue: { label: '网络总收入', notes: ['同比 +23%'] },
          interest_income: { label: '利息收入', notes: ['同比 +32%'] },
          gain_on_sale_of_loans: { label: '贷款出售收益', notes: ['同比 +68%'] },
          servicing_income: { label: '服务收入', notes: ['同比 +39%'] },
          revenue: { label: '收入', notes: ['同比 +33%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 +10 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          tax: { label: '税费' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +10 个百分点'] },
          loss_on_loan_purchase_commitment: { label: '贷款购买承诺损失' },
          provision_for_credit_losses: { label: '信贷损失准备' },
          funding_costs: { label: '融资成本' },
          processing_servicing: { label: '处理与服务' },
          technology_data_analytics: { label: '技术与数据分析' },
          sales_marketing: { label: '销售与营销' },
          general_administrative: { label: '一般及行政' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

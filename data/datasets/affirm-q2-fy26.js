/* Affirm Q2 FY26 income statement ($M), measured from the processed reference. */
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
  const TAX_LINE = '#bd7373';
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
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="31" fill="#000"/>
      <text x="${x + width / 2}" y="${y + 48}" text-anchor="middle" font-size="${headerSize}" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="${y + 88}" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="${y + 127}" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(102, 822, 146, 158, 'GMV', '$13.8B', zh ? '同比 +36%' : '+36% Y/Y')}
      ${kpiCard(255, 821, 240, 159, 'D2C GMV', '$4.3B', zh ? '同比 +52%' : '+52% Y/Y')}
      ${kpiCard(103, 990, 391, 159, zh ? '活跃消费者' : 'Active consumers', '25.8M', zh ? '同比 +23%' : '+23% Y/Y', 27)}
      ${kpiCard(103, 1159, 391, 159, zh ? '活跃商户' : 'Active merchants', '478K', zh ? '同比 +42%' : '+42% Y/Y', 27)}
      <text x="87" y="1348" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">GMV = ${zh ? '商品交易总额' : 'Gross Merchandise Value'}</text>
      <text x="1333" y="1301" text-anchor="middle" font-size="38" font-weight="800" fill="${NOTE}">${zh ? '2026 财年第二季度' : 'Q2 FY26'}</text>
      <text x="1333" y="1338" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${zh ? '截至 2025 年 12 月' : 'Ending Dec. 2025'}</text>
    </g>`;

  const labels = {
    merchant_network_revenue: {
      blocks: [
        block(402, 332, [line('$value', 39), line('+34% Y/Y', 29, { color: NOTE })]),
        block(333, 430, [line('Merchant', 40, { weight: 800 }), line('network', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    card_network_revenue: {
      blocks: [
        block(402, 602, [line('$value', 39), line('+26% Y/Y', 29, { color: NOTE })]),
        block(333, 660, [line('Card', 40, { weight: 800 }), line('network', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    total_network_revenue: {
      blocks: [block(869, 327, [line('Total', 40, { weight: 800 }), line('network', 40, { weight: 800 }), line('$value', 39), line('+32% Y/Y', 29, { color: NOTE })], { lineGap: 8 })],
    },
    interest_income: {
      blocks: [
        block(869, 720, [line('$value', 39), line('+21% Y/Y', 29, { color: NOTE })]),
        block(766, 834, [line('Interest', 40, { weight: 800 }), line('income', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    gain_on_sale_of_loans: {
      blocks: [
        block(869, 997, [line('$value', 39), line('+48% Y/Y', 29, { color: NOTE })]),
        block(766, 1069, [line('Gain on', 39, { weight: 800 }), line('sale of loans', 39, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    servicing_income: {
      blocks: [
        block(869, 1166, [line('$value', 39), line('+49% Y/Y', 29, { color: NOTE })]),
        block(766, 1219, [line('Servicing', 39, { weight: 800 }), line('income', 39, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    revenue: { blocks: [block(1337, 501, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+30% Y/Y', 29, { color: NOTE })])] },
    operating_profit: { blocks: [block(1809, 300, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('10% margin', 29, { color: NOTE }), line('+11pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1804, 1099, [line('Operating', 38, { weight: 800 }), line('expenses', 38, { weight: 800 }), line('$value', 37)], { lineGap: 10 })] },
    other_income: { blocks: [block(2078, 206, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_X, 242, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('12% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_X, 412, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    loss_on_loan_purchase_commitment: { blocks: [block(RIGHT_X, 480, [line('Loss on loan', 31, { weight: 800 }), line('purchase', 31, { weight: 800 }), line('commitment', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    provision_for_credit_losses: { blocks: [block(RIGHT_X, 647, [line('Provision for', 31, { weight: 800 }), line('credit loss', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    funding_costs: { blocks: [block(RIGHT_X, 804, [line('Funding costs', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    processing_servicing: { blocks: [block(RIGHT_X, 913, [line('Processing &', 31, { weight: 800 }), line('Servicing', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    technology_data_analytics: { blocks: [block(RIGHT_X, 1048, [line('Technology &', 31, { weight: 800 }), line('data analytics', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(RIGHT_X, 1216, [line('S&M ($99M)', 31, { weight: 800 })])] },
    general_administrative: { blocks: [block(RIGHT_X, 1325, [line('G&A ($141M)', 31, { weight: 800 })])] },
  };

  const zhLabels = {
    merchant_network_revenue: { blocks: [block(402, 338, [line('$value', 39), line('同比 +34%', 29, { color: NOTE })]), block(333, 454, [line('商户网络', 40, { weight: 800 })], { anchor: 'end' })] },
    card_network_revenue: { blocks: [block(402, 608, [line('$value', 39), line('同比 +26%', 29, { color: NOTE })]), block(333, 685, [line('卡网络', 40, { weight: 800 })], { anchor: 'end' })] },
    total_network_revenue: { blocks: [block(869, 350, [line('网络总收入', 40, { weight: 800 }), line('$value', 39), line('同比 +32%', 29, { color: NOTE })])] },
    interest_income: { blocks: [block(869, 720, [line('$value', 39), line('同比 +21%', 29, { color: NOTE })]), block(797, 859, [line('利息收入', 40, { weight: 800 })], { anchor: 'end' })] },
    gain_on_sale_of_loans: { blocks: [block(869, 999, [line('$value', 39), line('同比 +48%', 29, { color: NOTE })]), block(797, 1092, [line('贷款出售收益', 38, { weight: 800 })], { anchor: 'end' })] },
    servicing_income: { blocks: [block(869, 1172, [line('$value', 39), line('同比 +49%', 29, { color: NOTE })]), block(797, 1243, [line('服务收入', 39, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(1337, 507, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +30%', 29, { color: NOTE })])] },
    operating_profit: { blocks: [block(1809, 306, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 10%', 29, { color: NOTE }), line('同比 +11 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1804, 1107, [line('运营费用', 38, { weight: 800 }), line('$value', 37)])] },
    other_income: { blocks: [block(2078, 212, [line('其他', 31, { weight: 800 }), line('$value', 31)])] },
    net_profit: { blocks: [block(RIGHT_X, 242, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 12%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })])] },
    tax: { blocks: [block(RIGHT_X, 414, [line('税费', 31, { weight: 800 }), line('$value', 31)])] },
    loss_on_loan_purchase_commitment: { blocks: [block(RIGHT_X, 499, [line('贷款购买', 31, { weight: 800 }), line('承诺损失', 31, { weight: 800 }), line('$value', 31)])] },
    provision_for_credit_losses: { blocks: [block(RIGHT_X, 666, [line('信贷损失准备', 31, { weight: 800 }), line('$value', 31)])] },
    funding_costs: { blocks: [block(RIGHT_X, 804, [line('融资成本', 31, { weight: 800 }), line('$value', 31)])] },
    processing_servicing: { blocks: [block(RIGHT_X, 929, [line('处理与服务', 31, { weight: 800 }), line('$value', 31)])] },
    technology_data_analytics: { blocks: [block(RIGHT_X, 1067, [line('技术与数据分析', 31, { weight: 800 }), line('$value', 31)])] },
    sales_marketing: { blocks: [block(RIGHT_X, 1216, [line('销售与营销 ($99M)', 30, { weight: 800 })])] },
    general_administrative: { blocks: [block(RIGHT_X, 1325, [line('一般及行政 ($141M)', 30, { weight: 800 })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'affirm-q2-fy26',
    name: 'Affirm · Q2 FY26',
    company: 'Affirm',
    meta: {
      company: 'Affirm',
      title: 'Affirm Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/affirm-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2125,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      scale: 348 / 1123,
      nodes: {
        merchant_network_revenue: { x: 367, y: 429, width: 71, height: 100 },
        card_network_revenue: { x: 367, y: 699, width: 71, height: 21 },
        total_network_revenue: { x: 834, y: 526, width: 70, height: 123 },
        interest_income: { x: 834, y: 808, width: 70, height: 151 },
        gain_on_sale_of_loans: { x: 834, y: 1087, width: 70, height: 56 },
        servicing_income: { x: 832, y: 1261, width: 70, height: 11 },
        revenue: { x: 1301, y: 654, width: 71, height: 348 },
        operating_profit: { x: 1774, y: 489, width: 70, height: 34 },
        operating_expenses: { x: 1769, y: 773, width: 70, height: 311 },
        other_income: { x: 2046, y: 301, width: 71, height: 3 },
        tax: { x: 2235, y: 450, width: 71, height: 1 },
        net_profit: { x: 2235, y: 305, width: 71, height: 39 },
        loss_on_loan_purchase_commitment: { x: 2235, y: 543, width: 71, height: 28 },
        provision_for_credit_losses: { x: 2235, y: 672, width: 71, height: 65 },
        funding_costs: { x: 2235, y: 827, width: 71, height: 32 },
        processing_servicing: { x: 2235, y: 945, width: 71, height: 48 },
        technology_data_analytics: { x: 2235, y: 1078, width: 71, height: 55 },
        sales_marketing: { x: 2235, y: 1219, width: 71, height: 29 },
        general_administrative: { x: 2235, y: 1326, width: 71, height: 42 },
      },
      labels,
    },
    nodes: [
      { id: 'merchant_network_revenue', col: 0, order: 0, type: 'source', label: 'Merchant network', value: 328, notes: ['+34% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'card_network_revenue', col: 0, order: 1, type: 'source', label: 'Card network', value: 73, notes: ['+26% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'total_network_revenue', col: 1, order: 0, type: 'source', label: 'Total network', value: 401, notes: ['+32% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'interest_income', col: 1, order: 1, type: 'source', label: 'Interest income', value: 494, notes: ['+21% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'gain_on_sale_of_loans', col: 1, order: 2, type: 'source', label: 'Gain on sale of loans', value: 185, notes: ['+48% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'servicing_income', col: 1, order: 3, type: 'source', label: 'Servicing income', value: 43, notes: ['+49% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 1123, valueText: '$1,123M', notes: ['+30% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 118, notes: ['10% margin', '+11pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 1005, valueText: '($1,005M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 16, valueText: '$16M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 0, type: 'cost', label: 'Tax', value: 4, valueText: '($4M)', color: TAX_LINE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 130, notes: ['12% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'loss_on_loan_purchase_commitment', col: 5, order: 2, type: 'cost', label: 'Loss on loan purchase commitment', value: 96, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provision_for_credit_losses', col: 5, order: 3, type: 'cost', label: 'Provision for credit loss', value: 214, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'funding_costs', col: 5, order: 4, type: 'cost', label: 'Funding costs', value: 112, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'processing_servicing', col: 5, order: 5, type: 'cost', label: 'Processing & Servicing', value: 159, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_data_analytics', col: 5, order: 6, type: 'cost', label: 'Technology & data analytics', value: 185, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 5, order: 7, type: 'cost', label: 'S&M', value: 99, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 5, order: 8, type: 'cost', label: 'G&A', value: 141, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'merchant_network_revenue', target: 'total_network_revenue', value: 328, sourceWidth: 100, targetWidth: 101, y0: 479, y1: 576.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'card_network_revenue', target: 'total_network_revenue', value: 73, sourceWidth: 21, targetWidth: 22, y0: 709.5, y1: 638, sourceOrder: 0, targetOrder: 1 },
      { source: 'total_network_revenue', target: 'revenue', value: 401, sourceWidth: 123, targetWidth: 124, y0: 587.5, y1: 716, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest_income', target: 'revenue', value: 494, sourceWidth: 151, targetWidth: 153, y0: 883.5, y1: 854.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'gain_on_sale_of_loans', target: 'revenue', value: 185, sourceWidth: 56, targetWidth: 57, y0: 1115, y1: 959.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'servicing_income', target: 'revenue', value: 43, sourceWidth: 11, targetWidth: 14, y0: 1266.5, y1: 995, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'operating_profit', value: 118, sourceWidth: 36, targetWidth: 34, y0: 672, y1: 506, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1005, sourceWidth: 312, targetWidth: 311, y0: 846, y1: 928.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 114, sourceWidth: 33, targetWidth: 34, y0: 505.5, y1: 327, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 4, sourceWidth: 1, targetWidth: 1, y0: 522.5, y1: 450.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 16, sourceWidth: 3, targetWidth: 5, y0: 302.5, y1: 307.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'loss_on_loan_purchase_commitment', value: 96, sourceWidth: 30, targetWidth: 28, y0: 788, y1: 557, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'provision_for_credit_losses', value: 214, sourceWidth: 66, targetWidth: 65, y0: 836, y1: 704.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'funding_costs', value: 112, sourceWidth: 35, targetWidth: 32, y0: 886.5, y1: 843, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'processing_servicing', value: 159, sourceWidth: 49, targetWidth: 48, y0: 928.5, y1: 969, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_data_analytics', value: 185, sourceWidth: 57, targetWidth: 55, y0: 981.5, y1: 1105.5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 99, sourceWidth: 30, targetWidth: 29, y0: 1025, y1: 1233.5, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 141, sourceWidth: 44, targetWidth: 42, y0: 1062, y1: 1347, sourceOrder: 6, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['GMV', 'D2C GMV'],
      zh: {
        name: 'Affirm · 2026 财年第二季度',
        meta: {
          title: 'Affirm 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1550,
        },
        annotationsSvg: annotations(true),
        nodes: {
          merchant_network_revenue: { label: '商户网络', notes: ['同比 +34%'] },
          card_network_revenue: { label: '卡网络', notes: ['同比 +26%'] },
          total_network_revenue: { label: '网络总收入', notes: ['同比 +32%'] },
          interest_income: { label: '利息收入', notes: ['同比 +21%'] },
          gain_on_sale_of_loans: { label: '贷款出售收益', notes: ['同比 +48%'] },
          servicing_income: { label: '服务收入', notes: ['同比 +49%'] },
          revenue: { label: '收入', notes: ['同比 +30%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 +11 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          tax: { label: '税费' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +2 个百分点'] },
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

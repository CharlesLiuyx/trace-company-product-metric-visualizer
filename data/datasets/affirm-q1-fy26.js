/* Affirm Q1 FY26 income statement ($M), measured from the active Build source. */
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
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="31" fill="#000"/>
      <text x="${x + width / 2}" y="${y + 48}" text-anchor="middle" font-size="${headerSize}" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="${y + 88}" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="${y + 127}" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(102, 822, 146, 158, 'GMV', '$10.8B', zh ? '同比 +42%' : '+42% Y/Y')}
      ${kpiCard(255, 821, 240, 159, 'D2C GMV', '$3.2B', zh ? '同比 +53%' : '+53% Y/Y')}
      ${kpiCard(103, 990, 391, 159, zh ? '活跃消费者' : 'Active consumers', '24.1M', zh ? '同比 +24%' : '+24% Y/Y', 27)}
      ${kpiCard(103, 1159, 391, 159, zh ? '活跃商户' : 'Active merchants', '419K', zh ? '同比 +30%' : '+30% Y/Y', 27)}
      <text x="87" y="1348" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">GMV = ${zh ? '商品交易总额' : 'Gross Merchandise Value'}</text>
      <text x="1333" y="1301" text-anchor="middle" font-size="38" font-weight="800" fill="${NOTE}">${zh ? '2026 财年第一季度' : 'Q1 FY26'}</text>
      <text x="1333" y="1338" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${zh ? '截至 2025 年 9 月' : 'Ending Sept. 2025'}</text>
    </g>`;

  const labels = {
    merchant_network_revenue: {
      blocks: [
        block(402, 332, [line('$value', 39), line('+36% Y/Y', 29, { color: NOTE })]),
        block(333, 430, [line('Merchant', 40, { weight: 800 }), line('network', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    card_network_revenue: {
      blocks: [
        block(402, 591, [line('$value', 39), line('+46% Y/Y', 29, { color: NOTE })]),
        block(316, 653, [line('Card', 40, { weight: 800 }), line('network', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    total_network_revenue: {
      blocks: [block(869, 330, [line('Total', 40, { weight: 800 }), line('network', 40, { weight: 800 }), line('$value', 39), line('+38% Y/Y', 29, { color: NOTE })], { lineGap: 8 })],
    },
    interest_income: {
      blocks: [
        block(869, 723, [line('$value', 39), line('+20% Y/Y', 29, { color: NOTE })]),
        block(766, 840, [line('Interest', 40, { weight: 800 }), line('income', 40, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    gain_on_sale_of_loans: {
      blocks: [
        block(869, 1005, [line('$value', 39), line('+87% Y/Y', 29, { color: NOTE })]),
        block(811, 1080, [line('Gain on', 39, { weight: 800 }), line('sale of loans', 39, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    servicing_income: {
      blocks: [
        block(869, 1174, [line('$value', 39), line('+53% Y/Y', 29, { color: NOTE })]),
        block(779, 1199, [line('Servicing', 39, { weight: 800 }), line('income', 39, { weight: 800 })], { anchor: 'end', lineGap: 10 }),
      ],
    },
    revenue: { blocks: [block(1337, 523, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+34% Y/Y', 29, { color: NOTE })])] },
    operating_profit: { blocks: [block(1801, 304, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('7% margin', 29, { color: NOTE }), line('+26pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1801, 1186, [line('Operating', 38, { weight: 800 }), line('expenses', 38, { weight: 800 }), line('$value', 37)], { lineGap: 10 })] },
    other_income: { blocks: [block(2095, 207, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_X, 227, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('9% margin', 29, { color: NOTE }), line('+23pp Y/Y', 29, { color: NOTE })])] },
    tax: { blocks: [block(2457, 400, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    loss_on_loan_purchase_commitment: { blocks: [block(RIGHT_X, 476, [line('Loss on loan', 31, { weight: 800 }), line('purchase', 31, { weight: 800 }), line('commitment', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    provision_for_credit_losses: { blocks: [block(RIGHT_X, 670, [line('Provision for', 31, { weight: 800 }), line('credit loss', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    funding_costs: { blocks: [block(RIGHT_X, 804, [line('Funding costs', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    processing_servicing: { blocks: [block(RIGHT_X, 916, [line('Processing &', 31, { weight: 800 }), line('Servicing', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    technology_data_analytics: { blocks: [block(RIGHT_X, 1060, [line('Technology &', 31, { weight: 800 }), line('data analytics', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(RIGHT_X, 1218, [line('S&M ($78M)', 31, { weight: 800 })])] },
    general_administrative: { blocks: [block(RIGHT_X, 1331, [line('G&A ($145M)', 31, { weight: 800 })])] },
  };

  const zhLabels = {
    merchant_network_revenue: { blocks: [block(402, 338, [line('$value', 39), line('同比 +36%', 29, { color: NOTE })]), block(333, 454, [line('商户网络', 40, { weight: 800 })], { anchor: 'end' })] },
    card_network_revenue: { blocks: [block(402, 597, [line('$value', 39), line('同比 +46%', 29, { color: NOTE })]), block(316, 678, [line('卡网络', 40, { weight: 800 })], { anchor: 'end' })] },
    total_network_revenue: { blocks: [block(869, 353, [line('网络总收入', 40, { weight: 800 }), line('$value', 39), line('同比 +38%', 29, { color: NOTE })])] },
    interest_income: { blocks: [block(869, 723, [line('$value', 39), line('同比 +20%', 29, { color: NOTE })]), block(797, 864, [line('利息收入', 40, { weight: 800 })], { anchor: 'end' })] },
    gain_on_sale_of_loans: { blocks: [block(869, 1007, [line('$value', 39), line('同比 +87%', 29, { color: NOTE })]), block(827, 1105, [line('贷款出售收益', 38, { weight: 800 })], { anchor: 'end' })] },
    servicing_income: { blocks: [block(869, 1173, [line('$value', 39), line('同比 +53%', 29, { color: NOTE })]), block(810, 1223, [line('服务收入', 39, { weight: 800 })], { anchor: 'end' })] },
    revenue: { blocks: [block(1337, 529, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +34%', 29, { color: NOTE })])] },
    operating_profit: { blocks: [block(1801, 310, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 7%', 29, { color: NOTE }), line('同比 +26 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1801, 1194, [line('运营费用', 38, { weight: 800 }), line('$value', 37)])] },
    other_income: { blocks: [block(2095, 209, [line('其他', 31, { weight: 800 }), line('$value', 31)])] },
    net_profit: { blocks: [block(RIGHT_X, 227, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 9%', 29, { color: NOTE }), line('同比 +23 个百分点', 29, { color: NOTE })])] },
    tax: { blocks: [block(2457, 402, [line('税费', 31, { weight: 800 }), line('$value', 31)])] },
    loss_on_loan_purchase_commitment: { blocks: [block(RIGHT_X, 495, [line('贷款购买', 31, { weight: 800 }), line('承诺损失', 31, { weight: 800 }), line('$value', 31)])] },
    provision_for_credit_losses: { blocks: [block(RIGHT_X, 689, [line('信贷损失准备', 31, { weight: 800 }), line('$value', 31)])] },
    funding_costs: { blocks: [block(RIGHT_X, 804, [line('融资成本', 31, { weight: 800 }), line('$value', 31)])] },
    processing_servicing: { blocks: [block(RIGHT_X, 932, [line('处理与服务', 31, { weight: 800 }), line('$value', 31)])] },
    technology_data_analytics: { blocks: [block(RIGHT_X, 1079, [line('技术与数据分析', 31, { weight: 800 }), line('$value', 31)])] },
    sales_marketing: { blocks: [block(RIGHT_X, 1218, [line('销售与营销 ($78M)', 30, { weight: 800 })])] },
    general_administrative: { blocks: [block(RIGHT_X, 1331, [line('一般及行政 ($145M)', 30, { weight: 800 })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'affirm-q1-fy26',
    name: 'Affirm · Q1 FY26',
    company: 'Affirm',
    meta: {
      company: 'Affirm',
      title: 'Affirm Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/affirm-q1-fy26.png', width: 2667, height: 1500 },
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
      scale: 371 / 933,
      nodes: {
        merchant_network_revenue: { x: 364, y: 429, width: 71, height: 98 },
        card_network_revenue: { x: 364, y: 696, width: 71, height: 25 },
        total_network_revenue: { x: 831, y: 529, width: 70, height: 126 },
        interest_income: { x: 831, y: 812, width: 70, height: 180 },
        gain_on_sale_of_loans: { x: 831, y: 1105, width: 70, height: 46 },
        servicing_income: { x: 831, y: 1261, width: 70, height: 14 },
        revenue: { x: 1298, y: 667, width: 71, height: 371 },
        operating_profit: { x: 1766, y: 483, width: 70, height: 24 },
        operating_expenses: { x: 1766, y: 821, width: 70, height: 346 },
        other_income: { x: 2058, y: 298, width: 70, height: 6 },
        tax: { x: 2232, y: 433, width: 71, height: 2 },
        net_profit: { x: 2232, y: 303, width: 71, height: 30 },
        loss_on_loan_purchase_commitment: { x: 2232, y: 514, width: 71, height: 26 },
        provision_for_credit_losses: { x: 2232, y: 660, width: 71, height: 64 },
        funding_costs: { x: 2232, y: 817, width: 71, height: 42 },
        processing_servicing: { x: 2232, y: 942, width: 71, height: 51 },
        technology_data_analytics: { x: 2232, y: 1080, width: 71, height: 65 },
        sales_marketing: { x: 2232, y: 1220, width: 71, height: 30 },
        general_administrative: { x: 2232, y: 1321, width: 71, height: 56 },
      },
      labels,
    },
    nodes: [
      { id: 'merchant_network_revenue', col: 0, order: 0, type: 'source', label: 'Merchant network', value: 251, notes: ['+36% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'card_network_revenue', col: 0, order: 1, type: 'source', label: 'Card network', value: 69, notes: ['+46% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'total_network_revenue', col: 1, order: 0, type: 'source', label: 'Total network', value: 320, notes: ['+38% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'interest_income', col: 1, order: 1, type: 'source', label: 'Interest income', value: 454, notes: ['+20% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'gain_on_sale_of_loans', col: 1, order: 2, type: 'source', label: 'Gain on sale of loans', value: 119, notes: ['+87% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'servicing_income', col: 1, order: 3, type: 'source', label: 'Servicing income', value: 40, notes: ['+53% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 933, notes: ['+34% Y/Y'], color: BLUE, labelColor: '#000', linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 64, notes: ['7% margin', '+26pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 870, valueText: '($870M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 19, valueText: '$19M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 0, type: 'cost', label: 'Tax', value: 2, valueText: '($2M)', color: TAX_LINE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 81, notes: ['9% margin', '+23pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'loss_on_loan_purchase_commitment', col: 5, order: 2, type: 'cost', label: 'Loss on loan purchase commitment', value: 72, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provision_for_credit_losses', col: 5, order: 3, type: 'cost', label: 'Provision for credit loss', value: 163, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'funding_costs', col: 5, order: 4, type: 'cost', label: 'Funding costs', value: 110, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'processing_servicing', col: 5, order: 5, type: 'cost', label: 'Processing & Servicing', value: 134, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_data_analytics', col: 5, order: 6, type: 'cost', label: 'Technology & data analytics', value: 168, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 5, order: 7, type: 'cost', label: 'S&M', value: 78, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 5, order: 8, type: 'cost', label: 'G&A', value: 145, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'merchant_network_revenue', target: 'total_network_revenue', value: 251, sourceWidth: 98, targetWidth: 100, y0: 478, y1: 579, sourceOrder: 0, targetOrder: 0 },
      { source: 'card_network_revenue', target: 'total_network_revenue', value: 69, sourceWidth: 25, targetWidth: 26, y0: 708.5, y1: 642, sourceOrder: 0, targetOrder: 1 },
      { source: 'total_network_revenue', target: 'revenue', value: 320, sourceWidth: 126, targetWidth: 127, y0: 592, y1: 730.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest_income', target: 'revenue', value: 454, sourceWidth: 180, targetWidth: 181, y0: 902, y1: 884.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'gain_on_sale_of_loans', target: 'revenue', value: 119, sourceWidth: 46, targetWidth: 47, y0: 1128, y1: 998.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'servicing_income', target: 'revenue', value: 40, sourceWidth: 14, targetWidth: 16, y0: 1268, y1: 1030, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'operating_profit', value: 64, sourceWidth: 25, targetWidth: 24, y0: 679.5, y1: 495, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 870, sourceWidth: 346, targetWidth: 346, y0: 865, y1: 994, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 62, sourceWidth: 22, targetWidth: 23, y0: 494, y1: 321.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 2, sourceWidth: 2, targetWidth: 2, y0: 506, y1: 434, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 19, sourceWidth: 6, targetWidth: 7, y0: 301, y1: 306.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'loss_on_loan_purchase_commitment', value: 72, sourceWidth: 29, targetWidth: 26, y0: 835.5, y1: 527, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'provision_for_credit_losses', value: 163, sourceWidth: 65, targetWidth: 64, y0: 882.5, y1: 692, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'funding_costs', value: 110, sourceWidth: 44, targetWidth: 42, y0: 937, y1: 838, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'processing_servicing', value: 134, sourceWidth: 53, targetWidth: 51, y0: 985.5, y1: 967.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_data_analytics', value: 168, sourceWidth: 67, targetWidth: 65, y0: 1045.5, y1: 1112.5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 78, sourceWidth: 31, targetWidth: 30, y0: 1094.5, y1: 1235, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 145, sourceWidth: 57, targetWidth: 56, y0: 1138.5, y1: 1349, sourceOrder: 6, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['GMV', 'D2C GMV'],
      zh: {
        name: 'Affirm · 2026 财年第一季度',
        meta: {
          title: 'Affirm 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1550,
        },
        annotationsSvg: annotations(true),
        nodes: {
          merchant_network_revenue: { label: '商户网络', notes: ['同比 +36%'] },
          card_network_revenue: { label: '卡网络', notes: ['同比 +46%'] },
          total_network_revenue: { label: '网络总收入', notes: ['同比 +38%'] },
          interest_income: { label: '利息收入', notes: ['同比 +20%'] },
          gain_on_sale_of_loans: { label: '贷款出售收益', notes: ['同比 +87%'] },
          servicing_income: { label: '服务收入', notes: ['同比 +53%'] },
          revenue: { label: '收入', notes: ['同比 +34%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +26 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          tax: { label: '税费' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +23 个百分点'] },
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

/* ====================================================================
 * PayPal - Q4 FY25 income statement ($B)
 * Fixed-layout d3/SVG reconstruction measured from the processed source,
 * with validated runtime raster identity annotations and SVG KPI cards.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const TRANSACTION_BLUE = '#169bd7';
  const TRANSACTION_LINK = '#8fcae5';
  const OTHER_BLUE = '#253b80';
  const OTHER_LINK = '#96a0bf';
  const HUB = '#222d65';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const KPI_BLUE = '#019be0';

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
    lineGap: options.lineGap == null ? 10 : options.lineGap,
    lines,
  });

  const labelsEn = {
    transaction_revenues: {
      blocks: [
        block(492, 417, [line('$value', 39, { color: TRANSACTION_BLUE }), line('+3% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(228, 630, [line('Transaction', 39, { weight: 800, color: TRANSACTION_BLUE }), line('revenues', 39, { weight: 800, color: TRANSACTION_BLUE })], { lineGap: 11 }),
        block(228, 731, [
          line('Transaction fee, for payments,', 23, { color: NOTE }),
          line('conversion cross-border,', 23, { color: NOTE }),
          line('transfer of funds', 23, { color: NOTE }),
        ], { lineGap: 8 }),
      ],
    },
    other_value_added_services: {
      blocks: [
        block(492, 949, [line('$value', 39, { color: OTHER_BLUE }), line('+10% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(226, 877, [
          line('Other', 39, { weight: 800, color: OTHER_BLUE }),
          line('value-added', 39, { weight: 800, color: OTHER_BLUE }),
          line('services', 39, { weight: 800, color: OTHER_BLUE }),
        ], { lineGap: 10 }),
        block(226, 1027, [
          line('Partnerships, referral,', 23, { color: NOTE }),
          line('subscription, gateway fees,', 23, { color: NOTE }),
          line('interest', 23, { color: NOTE }),
        ], { lineGap: 8 }),
      ],
    },
    revenue: {
      blocks: [block(958, 455, [
        line('Revenue', 40, { weight: 800, color: OTHER_BLUE }),
        line('$value', 39, { color: OTHER_BLUE }),
        line('+4% Y/Y', 29, { color: NOTE }),
      ], { lineGap: 11 })],
    },
    gross_profit: {
      blocks: [block(1425, 327, [
        line('Gross profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('41% margin', 29, { color: NOTE }),
        line('(0pp) Y/Y', 29, { color: NOTE }),
      ], { lineGap: 10 })],
    },
    transaction_expense: {
      blocks: [block(1488, 920, [
        line('Transaction', 31, { weight: 800, color: RED_LABEL }),
        line('expense', 31, { weight: 800, color: RED_LABEL }),
        line('$value', 31, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 9 })],
    },
    transaction_credit_losses: {
      blocks: [block(1480, 1124, [
        line('Transaction &', 30, { weight: 800, color: RED_LABEL }),
        line('credit losses', 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    customer_support: {
      blocks: [
        block(1572, 1246, [
          line('Customer', 28, { weight: 800, color: RED_LABEL }),
          line('support', 28, { weight: 800, color: RED_LABEL }),
        ], { lineGap: 13 }),
        block(1572, 1323, [line('$value', 30, { color: RED_LABEL })]),
      ],
    },
    operating_profit: {
      blocks: [block(1903, 212, [
        line('Operating profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('17% margin', 29, { color: NOTE }),
        line('+0pp Y/Y', 29, { color: NOTE }),
      ], { lineGap: 10 })],
    },
    operating_expenses: {
      blocks: [
        block(1902, 773, [
          line('Operating', 34, { weight: 800, color: RED_LABEL }),
          line('expenses', 34, { weight: 800, color: RED_LABEL }),
        ], { lineGap: 12 }),
        block(1901, 868, [line('$value', 34, { color: RED_LABEL })]),
      ],
    },
    other_income: {
      blocks: [
        block(2244, 427, [line('Other', 30, { weight: 800, color: GREEN_LABEL })]),
        block(2244, 468, [line('$value', 29, { color: GREEN_LABEL })]),
      ],
    },
    net_profit: {
      blocks: [block(2418, 262, [
        line('Net profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('17% margin', 29, { color: NOTE }),
        line('+3pp Y/Y', 29, { color: NOTE }),
      ], { anchor: 'start', lineGap: 10 })],
    },
    tax: {
      blocks: [block(2418, 549, [
        line('Tax', 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    technology_development: {
      blocks: [
        block(2424, 713, [
          line('Technology &', 28, { weight: 800, color: RED_LABEL }),
          line('Development', 28, { weight: 800, color: RED_LABEL }),
        ], { anchor: 'start', lineGap: 10 }),
        block(2516, 791, [line('$value', 29, { color: RED_LABEL })]),
        block(2419, 842, [line('9% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    sales_marketing: {
      blocks: [
        block(2432, 934, [line('S&M', 28, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2498, 934, [line('($0.7B)', 29, { color: RED_LABEL })], { anchor: 'start' }),
        block(2419, 984, [line('8% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    general_administrative: {
      blocks: [
        block(2440, 1085, [line('G&A', 28, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2504, 1085, [line('($0.5B)', 29, { color: RED_LABEL })], { anchor: 'start' }),
        block(2419, 1137, [line('6% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    restructuring: {
      blocks: [
        block(2415, 1228, [line('Restructuring', 29, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2510, 1266, [line('$value', 29, { color: RED_LABEL })]),
        block(2419, 1318, [line('1% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, blockIndex, texts) => {
    labelsZh[id].blocks[blockIndex].lines.forEach((item, index) => { item.text = texts[index]; });
  };
  setLines('transaction_revenues', 0, ['$value', '同比 +3%']);
  setLines('transaction_revenues', 1, ['交易', '收入']);
  setLines('transaction_revenues', 2, ['支付、货币兑换、跨境支付', '以及资金转账的交易手续费', '']);
  setLines('other_value_added_services', 0, ['$value', '同比 +10%']);
  setLines('other_value_added_services', 1, ['其他', '增值', '服务']);
  setLines('other_value_added_services', 2, ['合作伙伴、推荐、订阅、', '网关费用和利息', '']);
  setLines('revenue', 0, ['收入', '$value', '同比 +4%']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 41%', '同比 (0 个百分点)']);
  setLines('transaction_expense', 0, ['交易', '费用', '$value']);
  setLines('transaction_credit_losses', 0, ['交易与', '信贷损失', '$value']);
  setLines('customer_support', 0, ['客户', '支持']);
  setLines('customer_support', 1, ['$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 17%', '同比 +0 个百分点']);
  setLines('operating_expenses', 0, ['运营', '费用']);
  setLines('operating_expenses', 1, ['$value']);
  setLines('other_income', 0, ['其他']);
  setLines('other_income', 1, ['$value']);
  setLines('net_profit', 0, ['净利润', '$value', '利润率 17%', '同比 +3 个百分点']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('technology_development', 0, ['技术与', '开发']);
  setLines('technology_development', 1, ['$value']);
  setLines('technology_development', 2, ['占收入 9%', '同比 +0 个百分点']);
  labelsZh.sales_marketing.blocks.splice(0, 2, block(2419, 934, [line('销售与营销（$0.7B）', 27, { weight: 800, color: RED_LABEL })], { anchor: 'start' }));
  setLines('sales_marketing', 1, ['占收入 8%', '同比 +0 个百分点']);
  labelsZh.general_administrative.blocks.splice(0, 2, block(2419, 1085, [line('一般及行政（$0.5B）', 27, { weight: 800, color: RED_LABEL })], { anchor: 'start' }));
  setLines('general_administrative', 1, ['占收入 6%', '同比 (1 个百分点)']);
  setLines('restructuring', 0, ['重组']);
  setLines('restructuring', 1, ['$value']);
  setLines('restructuring', 2, ['占收入 1%', '同比 +0 个百分点']);

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1114" width="${width}" height="150" rx="28" fill="${KPI_BLUE}"/>
      ${lines.map((item) => `
        <text x="${x + width / 2}" y="${item.y}" text-anchor="middle"
          font-size="${item.size}" font-weight="${item.weight}" fill="#ffffff">${item.text}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(30, 203, [
        { text: 'TPV', y: 1167, size: 29, weight: 800 },
        { text: '$475B', y: 1210, size: 29, weight: 500 },
        { text: '+9% Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      ${kpiCard(246, 380, [
        { text: 'Active accounts', y: 1167, size: 29, weight: 800 },
        { text: '439M', y: 1210, size: 29, weight: 500 },
        { text: '+1% Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      ${kpiCard(636, 192, [
        { text: 'TPA', y: 1167, size: 29, weight: 800 },
        { text: '58', y: 1210, size: 29, weight: 500 },
        { text: '(5%) Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      <text x="429" y="1304" text-anchor="middle" font-size="28" font-weight="500" fill="${NOTE}">TPV = Total Payment Volume</text>
      <text x="429" y="1342" text-anchor="middle" font-size="28" font-weight="500" fill="${NOTE}">TPA = Transactions per active account (TTM)</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,'Microsoft YaHei',sans-serif">
      ${kpiCard(30, 203, [
        { text: 'TPV', y: 1167, size: 29, weight: 800 },
        { text: '$475B', y: 1210, size: 29, weight: 500 },
        { text: '同比 +9%', y: 1249, size: 27, weight: 500 },
      ])}
      ${kpiCard(246, 380, [
        { text: '活跃账户', y: 1167, size: 29, weight: 800 },
        { text: '439M', y: 1210, size: 29, weight: 500 },
        { text: '同比 +1%', y: 1249, size: 27, weight: 500 },
      ])}
      ${kpiCard(636, 192, [
        { text: 'TPA', y: 1167, size: 29, weight: 800 },
        { text: '58', y: 1210, size: 29, weight: 500 },
        { text: '同比 (5%)', y: 1249, size: 27, weight: 500 },
      ])}
      <text x="429" y="1304" text-anchor="middle" font-size="28" font-weight="500" fill="${NOTE}">TPV = 总支付额</text>
      <text x="429" y="1342" text-anchor="middle" font-size="28" font-weight="500" fill="${NOTE}">TPA = 每个活跃账户的交易笔数（过去十二个月）</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paypal-q4-fy25',
    name: 'PayPal · Q4 FY25',
    company: 'PayPal',
    meta: {
      company: 'PayPal',
      title: 'PayPal Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/paypal-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2140,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      interfaceAudit: { mode: 'error' },
      nodeRadius: 0,
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: TRANSACTION_BLUE, label: TRANSACTION_BLUE },
        hub: { node: HUB, label: OTHER_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: TRANSACTION_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 39, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'paypal-company-wordmark', href: 'data/assets/raster-annotations/paypal/company-wordmark-q4-fy25.png', x: 600, y: 235, width: 636, height: 177 },
      { key: 'paypal-transaction-revenues-paypal-venmo-icons', href: 'data/assets/raster-annotations/paypal/transaction-revenues-paypal-venmo-icons-q4-fy25.png', x: 45, y: 415, width: 378, height: 214 },
    ],
    annotationsSvg: annotationsEn,
    layout: {
      scale: 46.4,
      nodes: {
        transaction_revenues: { x: 456, y: 516, width: 71, height: 367 },
        other_value_added_services: { x: 456, y: 1043, width: 71, height: 37 },
        revenue: { x: 923, y: 601, width: 70, height: 407 },
        gross_profit: { x: 1390, y: 511, width: 71, height: 166 },
        transaction_expense: { x: 1390, y: 866, width: 71, height: 199 },
        transaction_credit_losses: { x: 1392, y: 1168, width: 72, height: 16 },
        customer_support: { x: 1390, y: 1290, width: 71, height: 20 },
        operating_profit: { x: 1868, y: 396, width: 70, height: 69 },
        operating_expenses: { x: 1868, y: 660, width: 70, height: 96 },
        other_income: { x: 2205, y: 408, width: 70, height: 3 },
        net_profit: { x: 2324, y: 288, width: 71, height: 65 },
        tax: { x: 2324, y: 572, width: 71, height: 8 },
        technology_development: { x: 2324, y: 752, width: 71, height: 37 },
        sales_marketing: { x: 2324, y: 939, width: 71, height: 30 },
        general_administrative: { x: 2324, y: 1090, width: 71, height: 21 },
        restructuring: { x: 2324, y: 1270, width: 71, height: 2 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'transaction_revenues', col: 0, order: 0, type: 'source', label: ['Transaction', 'revenues'], value: 7.8, valueText: '$7.8B', notes: ['+3% Y/Y'], color: TRANSACTION_BLUE, labelColor: TRANSACTION_BLUE, linkTint: TRANSACTION_LINK },
      { id: 'other_value_added_services', col: 0, order: 1, type: 'source', label: ['Other', 'value-added', 'services'], value: 0.9, valueText: '$0.9B', notes: ['+10% Y/Y'], color: OTHER_BLUE, labelColor: OTHER_BLUE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.7, valueText: '$8.7B', notes: ['+4% Y/Y'], color: HUB, labelColor: OTHER_BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.6, valueText: '$3.6B', notes: ['41% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'transaction_expense', col: 2, order: 1, type: 'cost', label: 'Transaction expense', value: 4.3, valueText: '($4.3B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'transaction_credit_losses', col: 2, order: 2, type: 'cost', label: 'Transaction & credit losses', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'customer_support', col: 2, order: 3, type: 'cost', label: 'Customer support', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, valueText: '$1.5B', notes: ['17% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 2.1, valueText: '($2.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, valueText: '$0.1B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.4, valueText: '$1.4B', notes: ['17% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, labelSide: 'right', linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'technology_development', col: 5, order: 2, type: 'cost', label: ['Technology &', 'Development'], value: 0.8, valueText: '($0.8B)', notes: ['9% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'sales_marketing', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.7, valueText: '($0.7B)', notes: ['8% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'general_administrative', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.5, valueText: '($0.5B)', notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
    ],
    links: [
      { source: 'transaction_revenues', target: 'revenue', value: 7.8, sourceWidth: 367, targetWidth: 367, y0: 699.5, y1: 784.5, linkTint: TRANSACTION_LINK },
      { source: 'other_value_added_services', target: 'revenue', value: 0.9, sourceWidth: 37, targetWidth: 40, y0: 1061.5, y1: 988, linkTint: OTHER_LINK },

      { source: 'revenue', target: 'gross_profit', value: 3.6, sourceWidth: 167, targetWidth: 166, y0: 684.5, y1: 594, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'transaction_expense', value: 4.3, sourceWidth: 200, targetWidth: 199, y0: 868, y1: 965.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'transaction_credit_losses', value: 0.4, sourceWidth: 18, targetWidth: 16, y0: 977, y1: 1176, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'customer_support', value: 0.4, sourceWidth: 22, targetWidth: 20, y0: 997, y1: 1300, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceWidth: 69, targetWidth: 69, y0: 545.5, y1: 430.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.1, sourceWidth: 97, targetWidth: 96, y0: 628.5, y1: 708, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 61, targetWidth: 62, y0: 426.5, y1: 319, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 8, targetWidth: 8, y0: 461, y1: 576, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 409.5, y1: 351.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },

      { source: 'operating_expenses', target: 'technology_development', value: 0.8, sourceWidth: 37, targetWidth: 37, y0: 678.5, y1: 770.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 0.7, sourceWidth: 31, targetWidth: 30, y0: 712.5, y1: 954, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'general_administrative', value: 0.5, sourceWidth: 22, targetWidth: 21, y0: 739, y1: 1100.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, sourceWidth: 6, targetWidth: 2, y0: 753, y1: 1271, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['TPV', 'TPA'],
      zh: {
        name: 'PayPal · 2025 财年第四季度',
        meta: {
          title: 'PayPal 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1700,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          transaction_revenues: { label: '交易收入', notes: ['同比 +3%'] },
          other_value_added_services: { label: '其他增值服务', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 41%', '同比 (0 个百分点)'] },
          transaction_expense: { label: '交易费用' },
          transaction_credit_losses: { label: '交易与信贷损失' },
          customer_support: { label: '客户支持' },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          technology_development: { label: '技术与开发', notes: ['占收入 9%', '同比 +0 个百分点'] },
          sales_marketing: { label: '销售与营销', notes: ['占收入 8%', '同比 +0 个百分点'] },
          general_administrative: { label: '一般及行政费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

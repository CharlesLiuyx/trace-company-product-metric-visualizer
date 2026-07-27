/* ====================================================================
 * PayPal - Q1 FY26 income statement ($B)
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
        block(492, 435, [line('$value', 39, { color: TRANSACTION_BLUE }), line('+7% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
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
        block(492, 967, [line('$value', 39, { color: OTHER_BLUE }), line('+10% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
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
      blocks: [block(958, 500, [
        line('Revenue', 40, { weight: 800, color: OTHER_BLUE }),
        line('$value', 39, { color: OTHER_BLUE }),
        line('+7% Y/Y', 29, { color: NOTE }),
      ], { lineGap: 11 })],
    },
    gross_profit: {
      blocks: [block(1425, 342, [
        line('Gross profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('40% margin', 29, { color: NOTE }),
        line('(2pp) Y/Y', 29, { color: NOTE }),
      ], { lineGap: 10 })],
    },
    transaction_expense: {
      blocks: [block(1488, 925, [
        line('Transaction', 31, { weight: 800, color: RED_LABEL }),
        line('expense', 31, { weight: 800, color: RED_LABEL }),
        line('$value', 31, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 9 })],
    },
    transaction_credit_losses: {
      blocks: [block(1480, 1115, [
        line('Transaction &', 30, { weight: 800, color: RED_LABEL }),
        line('credit losses', 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    customer_support: {
      blocks: [
        block(1572, 1243, [
          line('Customer', 28, { weight: 800, color: RED_LABEL }),
          line('support', 28, { weight: 800, color: RED_LABEL }),
        ], { lineGap: 13 }),
        block(1572, 1320, [line('$value', 30, { color: RED_LABEL })]),
      ],
    },
    operating_profit: {
      blocks: [block(1893, 240, [
        line('Operating profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('18% margin', 29, { color: NOTE }),
        line('(2pp) Y/Y', 29, { color: NOTE }),
      ], { lineGap: 10 })],
    },
    operating_expenses: {
      blocks: [
        block(1892, 794, [
          line('Operating', 34, { weight: 800, color: RED_LABEL }),
          line('expenses', 34, { weight: 800, color: RED_LABEL }),
        ], { lineGap: 12 }),
        block(1891, 889, [line('$value', 34, { color: RED_LABEL })]),
      ],
    },
    net_profit: {
      blocks: [block(2418, 278, [
        line('Net profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('13% margin', 29, { color: NOTE }),
        line('(3pp) Y/Y', 29, { color: NOTE }),
      ], { anchor: 'start', lineGap: 10 })],
    },
    tax: {
      blocks: [block(2418, 526, [
        line('Tax', 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    other_expense: {
      blocks: [block(2418, 632, [
        line('Other', 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    technology_development: {
      blocks: [
        block(2424, 743, [
          line('Technology &', 28, { weight: 800, color: RED_LABEL }),
          line('Development', 28, { weight: 800, color: RED_LABEL }),
        ], { anchor: 'start', lineGap: 10 }),
        block(2516, 821, [line('$value', 29, { color: RED_LABEL })]),
        block(2419, 872, [line('9% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    sales_marketing: {
      blocks: [
        block(2432, 949, [line('S&M', 28, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2498, 949, [line('($0.5B)', 29, { color: RED_LABEL })], { anchor: 'start' }),
        block(2419, 999, [line('6% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    general_administrative: {
      blocks: [
        block(2440, 1103, [line('G&A', 28, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2504, 1103, [line('($0.5B)', 29, { color: RED_LABEL })], { anchor: 'start' }),
        block(2419, 1155, [line('6% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    restructuring: {
      blocks: [
        block(2415, 1245, [line('Restructuring', 29, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2510, 1283, [line('$value', 29, { color: RED_LABEL })]),
        block(2419, 1335, [line('1% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, blockIndex, texts) => {
    labelsZh[id].blocks[blockIndex].lines.forEach((item, index) => { item.text = texts[index]; });
  };
  setLines('transaction_revenues', 0, ['$value', '同比 +7%']);
  setLines('transaction_revenues', 1, ['交易', '收入']);
  setLines('transaction_revenues', 2, ['支付、货币兑换、跨境支付', '以及资金转账的交易手续费', '']);
  setLines('other_value_added_services', 0, ['$value', '同比 +10%']);
  setLines('other_value_added_services', 1, ['其他', '增值', '服务']);
  setLines('other_value_added_services', 2, ['合作伙伴、推荐、订阅、', '网关费用和利息', '']);
  setLines('revenue', 0, ['收入', '$value', '同比 +7%']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 40%', '同比 (2 个百分点)']);
  setLines('transaction_expense', 0, ['交易', '费用', '$value']);
  setLines('transaction_credit_losses', 0, ['交易与', '信贷损失', '$value']);
  setLines('customer_support', 0, ['客户', '支持']);
  setLines('customer_support', 1, ['$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 18%', '同比 (2 个百分点)']);
  setLines('operating_expenses', 0, ['运营', '费用']);
  setLines('operating_expenses', 1, ['$value']);
  setLines('net_profit', 0, ['净利润', '$value', '利润率 13%', '同比 (3 个百分点)']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('other_expense', 0, ['其他', '$value']);
  setLines('technology_development', 0, ['技术与', '开发']);
  setLines('technology_development', 1, ['$value']);
  setLines('technology_development', 2, ['占收入 9%', '同比 +0 个百分点']);
  labelsZh.sales_marketing.blocks.splice(0, 2, block(2419, 949, [line('销售与营销（$0.5B）', 25, { weight: 800, color: RED_LABEL })], { anchor: 'start' }));
  setLines('sales_marketing', 1, ['占收入 6%', '同比 (0 个百分点)']);
  labelsZh.general_administrative.blocks.splice(0, 2, block(2419, 1103, [line('一般及行政（$0.5B）', 25, { weight: 800, color: RED_LABEL })], { anchor: 'start' }));
  setLines('general_administrative', 1, ['占收入 6%', '同比 (1 个百分点)']);
  setLines('restructuring', 0, ['重组']);
  setLines('restructuring', 1, ['$value']);
  setLines('restructuring', 2, ['占收入 1%', '同比 +0 个百分点']);

  const kpiCard = (x, width, lines, fontFamily = "'Noto Sans',Arial,sans-serif") => `
    <g>
      <rect x="${x}" y="1114" width="${width}" height="150" rx="28" fill="${KPI_BLUE}"/>
      ${lines.map((item) => `
        <text x="${x + width / 2}" y="${item.y}" text-anchor="middle"
          font-family="${fontFamily}" font-size="${item.size}" font-weight="${item.weight}" fill="#ffffff">${item.text}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="'Noto Sans',Arial,sans-serif">
      ${kpiCard(30, 203, [
        { text: 'TPV', y: 1167, size: 29, weight: 800 },
        { text: '$464B', y: 1210, size: 29, weight: 500 },
        { text: '+11% Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      ${kpiCard(246, 380, [
        { text: 'Active accounts', y: 1167, size: 29, weight: 800 },
        { text: '439M', y: 1210, size: 29, weight: 500 },
        { text: '+1% Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      ${kpiCard(636, 192, [
        { text: 'TPA', y: 1167, size: 29, weight: 800 },
        { text: '59', y: 1210, size: 29, weight: 500 },
        { text: '(1%) Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      <text x="429" y="1304" text-anchor="middle" font-family="'Noto Sans',Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">TPV = Total Payment Volume</text>
      <text x="429" y="1342" text-anchor="middle" font-family="'Noto Sans',Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">TPA = Transactions per active account (TTM)</text>
    </g>`;

  const annotationsZh = `
    <g font-family="'Noto Sans',Arial,sans-serif">
      ${kpiCard(30, 203, [
        { text: 'TPV', y: 1167, size: 29, weight: 800 },
        { text: '$464B', y: 1210, size: 29, weight: 500 },
        { text: '同比 +11%', y: 1249, size: 27, weight: 500 },
      ], "'Noto Sans',Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(246, 380, [
        { text: '活跃账户', y: 1167, size: 29, weight: 800 },
        { text: '439M', y: 1210, size: 29, weight: 500 },
        { text: '同比 +1%', y: 1249, size: 27, weight: 500 },
      ], "'Noto Sans',Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(636, 192, [
        { text: 'TPA', y: 1167, size: 29, weight: 800 },
        { text: '59', y: 1210, size: 29, weight: 500 },
        { text: '同比 (1%)', y: 1249, size: 27, weight: 500 },
      ], "'Noto Sans',Arial,'Microsoft YaHei',sans-serif")}
      <text x="429" y="1304" text-anchor="middle" font-family="'Noto Sans',Arial,'Microsoft YaHei',sans-serif" font-size="28" font-weight="500" fill="${NOTE}">TPV = 总支付额</text>
      <text x="429" y="1342" text-anchor="middle" font-family="'Noto Sans',Arial,'Microsoft YaHei',sans-serif" font-size="28" font-weight="500" fill="${NOTE}">TPA = 每个活跃账户的交易笔数（过去十二个月）</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paypal-q1-fy26',
    name: 'PayPal · Q1 FY26',
    company: 'PayPal',
    meta: {
      company: 'PayPal',
      title: 'PayPal Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/paypal-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2140,
      hidePeriodStamp: true,
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
      { key: 'paypal-company-wordmark-q1-fy26', href: 'data/assets/raster-annotations/paypal/company-wordmark-q1-fy26.png', x: 600, y: 235, width: 636, height: 177 },
      { key: 'paypal-transaction-revenues-paypal-venmo-icons-q1-fy26', href: 'data/assets/raster-annotations/paypal/transaction-revenues-paypal-venmo-icons-q1-fy26.png', x: 45, y: 415, width: 378, height: 214 },
    ],
    annotationsSvg: annotationsEn,
    layout: {
      scale: 46.4,
      nodes: {
        transaction_revenues: { x: 456, y: 534, width: 71, height: 330 },
        other_value_added_services: { x: 456, y: 1059, width: 71, height: 35 },
        revenue: { x: 923, y: 646, width: 70, height: 369 },
        gross_profit: { x: 1390, y: 527, width: 71, height: 148 },
        transaction_expense: { x: 1390, y: 881, width: 71, height: 183 },
        transaction_credit_losses: { x: 1390, y: 1158, width: 71, height: 15 },
        customer_support: { x: 1392, y: 1287, width: 72, height: 17 },
        operating_profit: { x: 1858, y: 425, width: 70, height: 65 },
        operating_expenses: { x: 1858, y: 696, width: 70, height: 82 },
        net_profit: { x: 2324, y: 305, width: 71, height: 47 },
        tax: { x: 2324, y: 549, width: 71, height: 11 },
        other_expense: { x: 2324, y: 667, width: 71, height: 3 },
        technology_development: { x: 2324, y: 770, width: 71, height: 33 },
        sales_marketing: { x: 2324, y: 958, width: 71, height: 20 },
        general_administrative: { x: 2324, y: 1109, width: 71, height: 20 },
        restructuring: { x: 2324, y: 1294, width: 71, height: 1 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'transaction_revenues', col: 0, order: 0, type: 'source', label: ['Transaction', 'revenues'], value: 7.5, valueText: '$7.5B', notes: ['+7% Y/Y'], color: TRANSACTION_BLUE, labelColor: TRANSACTION_BLUE, linkTint: TRANSACTION_LINK },
      { id: 'other_value_added_services', col: 0, order: 1, type: 'source', label: ['Other', 'value-added', 'services'], value: 0.9, valueText: '$0.9B', notes: ['+10% Y/Y'], color: OTHER_BLUE, labelColor: OTHER_BLUE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.4, valueText: '$8.4B', notes: ['+7% Y/Y'], color: HUB, labelColor: OTHER_BLUE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.4, valueText: '$3.4B', notes: ['40% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'transaction_expense', col: 2, order: 1, type: 'cost', label: 'Transaction expense', value: 4.2, valueText: '($4.2B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'transaction_credit_losses', col: 2, order: 2, type: 'cost', label: 'Transaction & credit losses', value: 0.5, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'customer_support', col: 2, order: 3, type: 'cost', label: 'Customer support', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, valueText: '$1.5B', notes: ['18% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 1.9, valueText: '($1.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.1, valueText: '$1.1B', notes: ['13% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, labelSide: 'right', linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'other_expense', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'technology_development', col: 4, order: 3, type: 'cost', label: ['Technology &', 'Development'], value: 0.8, valueText: '($0.8B)', notes: ['9% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 4, type: 'cost', label: 'S&M', value: 0.5, valueText: '($0.5B)', notes: ['6% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'general_administrative', col: 4, order: 5, type: 'cost', label: 'G&A', value: 0.5, valueText: '($0.5B)', notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'restructuring', col: 4, order: 6, type: 'cost', label: 'Restructuring', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
    ],
    links: [
      { source: 'transaction_revenues', target: 'revenue', value: 7.5, sourceWidth: 330, targetWidth: 333, y0: 699, y1: 812.5, linkTint: TRANSACTION_LINK },
      { source: 'other_value_added_services', target: 'revenue', value: 0.9, sourceWidth: 35, targetWidth: 36, y0: 1076.5, y1: 997, linkTint: OTHER_LINK },

      { source: 'revenue', target: 'gross_profit', value: 3.4, sourceWidth: 149, targetWidth: 148, y0: 720.5, y1: 601, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'transaction_expense', value: 4.2, sourceWidth: 182, targetWidth: 183, y0: 886, y1: 972.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'transaction_credit_losses', value: 0.5, sourceWidth: 20, targetWidth: 15, y0: 987, y1: 1165.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'customer_support', value: 0.4, sourceWidth: 18, targetWidth: 17, y0: 1006, y1: 1295.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceWidth: 65, targetWidth: 65, y0: 559.5, y1: 457.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.9, sourceWidth: 82, targetWidth: 82, y0: 633.5, y1: 737, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 49, targetWidth: 47, y0: 449.5, y1: 328.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 12, targetWidth: 11, y0: 480, y1: 554.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, sourceWidth: 4, targetWidth: 3, y0: 488, y1: 668.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_expenses', target: 'technology_development', value: 0.8, sourceWidth: 35, targetWidth: 33, y0: 713.5, y1: 786.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 0.5, sourceWidth: 22, targetWidth: 20, y0: 742, y1: 968, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'general_administrative', value: 0.5, sourceWidth: 22, targetWidth: 20, y0: 764, y1: 1119, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, sourceWidth: 3, targetWidth: 1, y0: 776.5, y1: 1294.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['TPV', 'TPA'],
      zh: {
        name: 'PayPal · 2026 财年第一季度',
        meta: {
          title: 'PayPal 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1700,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          transaction_revenues: { label: '交易收入', notes: ['同比 +7%'] },
          other_value_added_services: { label: '其他增值服务', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 (2 个百分点)'] },
          transaction_expense: { label: '交易费用' },
          transaction_credit_losses: { label: '交易与信贷损失' },
          customer_support: { label: '客户支持' },
          operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          technology_development: { label: '技术与开发', notes: ['占收入 9%', '同比 +0 个百分点'] },
          sales_marketing: { label: '销售与营销', notes: ['占收入 6%', '同比 (0 个百分点)'] },
          general_administrative: { label: '一般及行政费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

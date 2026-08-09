/* ====================================================================
 * PayPal - Q2 FY26 income statement ($B)
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
  const OTHER_LABEL = '#243b80';
  const HUB_LABEL = '#001e6a';
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
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
    lines,
  });

  const labelsEn = {
    transaction_revenues: {
      blocks: [
        block(492, 404, [line('$value', 39, { color: TRANSACTION_BLUE }), line('+5% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(228, 617, [line('Transaction', 39, { weight: 800, color: TRANSACTION_BLUE }), line('revenues', 39, { weight: 800, color: TRANSACTION_BLUE })], { lineGap: 11, semanticRole: 'source-offset-label' }),
        block(228, 717, [
          line('Transaction fee, for payments,', 23, { color: NOTE }),
          line('conversion cross-border,', 23, { color: NOTE }),
          line('transfer of funds', 23, { color: NOTE }),
        ], { lineGap: 8, semanticRole: 'note' }),
      ],
    },
    other_value_added_services: {
      blocks: [
        block(492, 947, [line('$value', 39, { color: OTHER_LABEL }), line('+0% Y/Y', 29, { color: NOTE })], { lineGap: 12 }),
        block(226, 863, [
          line('Other', 39, { weight: 800, color: OTHER_LABEL }),
          line('value-added', 39, { weight: 800, color: OTHER_LABEL }),
          line('services', 39, { weight: 800, color: OTHER_LABEL }),
        ], { lineGap: 10, semanticRole: 'source-offset-label' }),
        block(226, 1013, [
          line('Partnerships, referral,', 23, { color: NOTE }),
          line('subscription, gateway fees,', 23, { color: NOTE }),
          line('interest', 23, { color: NOTE }),
        ], { lineGap: 8, semanticRole: 'note' }),
      ],
    },
    revenue: {
      blocks: [block(958, 484, [
        line('Revenue', 40, { weight: 800, color: HUB_LABEL }),
        line('$value', 39, { color: HUB_LABEL }),
        line('+5% Y/Y', 29, { color: NOTE }),
      ], { lineGap: 11 })],
    },
    gross_profit: {
      blocks: [block(1425, 323, [
        line('Gross profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('40% margin', 29, { color: NOTE }),
        line('(2pp) Y/Y', 29, { color: NOTE }),
      ], { lineGap: 10 })],
    },
    transaction_expense: {
      blocks: [block(1480, 925, [
        line('Transaction', 31, { weight: 800, color: RED_LABEL }),
        line('expense', 31, { weight: 800, color: RED_LABEL }),
        line('$value', 31, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 9 })],
    },
    transaction_credit_losses: {
      blocks: [block(1469, 1135, [
        line('Transaction &', 30, { weight: 800, color: RED_LABEL }),
        line('credit losses', 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    customer_support: {
      blocks: [
        block(1572, 1271, [
          line('Customer', 28, { weight: 800, color: RED_LABEL }),
          line('support', 28, { weight: 800, color: RED_LABEL }),
        ], { lineGap: 13 }),
        block(1572, 1348, [line('$value', 30, { color: RED_LABEL })]),
      ],
    },
    operating_profit: {
      blocks: [block(1893, 226, [
        line('Operating profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('16% margin', 29, { color: NOTE }),
        line('(2pp) Y/Y', 29, { color: NOTE }),
      ], { lineGap: 10 })],
    },
    operating_expenses: {
      blocks: [
        block(1892, 783, [
          line('Operating', 34, { weight: 800, color: RED_LABEL }),
          line('expenses', 34, { weight: 800, color: RED_LABEL }),
        ], { lineGap: 12 }),
        block(1891, 878, [line('$value', 34, { color: RED_LABEL })]),
      ],
    },
    net_profit: {
      blocks: [block(2418, 267, [
        line('Net profit', 39, { weight: 800, color: GREEN_LABEL }),
        line('$value', 39, { color: GREEN_LABEL }),
        line('13% margin', 29, { color: NOTE }),
        line('(2pp) Y/Y', 29, { color: NOTE }),
      ], { anchor: 'start', lineGap: 10 })],
    },
    tax: {
      blocks: [block(2463, 498, [
        line('Tax', 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    other_expense: {
      blocks: [block(2463, 604, [
        line('Other', 30, { weight: 800, color: RED_LABEL }),
        line('$value', 30, { color: RED_LABEL }),
      ], { anchor: 'start', lineGap: 8 })],
    },
    technology_development: {
      blocks: [
        block(2424, 730, [
          line('Technology &', 28, { weight: 800, color: RED_LABEL }),
          line('Development', 28, { weight: 800, color: RED_LABEL }),
        ], { anchor: 'start', lineGap: 10 }),
        block(2516, 808, [line('$value', 29, { color: RED_LABEL })]),
        block(2419, 859, [line('10% of revenue', 28, { color: NOTE }), line('+1pp Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    sales_marketing: {
      blocks: [
        block(2438, 935, [line('S&M', 28, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2504, 935, [line('($0.5B)', 29, { color: RED_LABEL })], { anchor: 'start' }),
        block(2425, 985, [line('6% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    general_administrative: {
      blocks: [
        block(2449, 1089, [line('G&A', 28, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2513, 1089, [line('($0.5B)', 29, { color: RED_LABEL })], { anchor: 'start' }),
        block(2428, 1141, [line('6% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
    restructuring: {
      blocks: [
        block(2415, 1231, [line('Restructuring', 29, { weight: 800, color: RED_LABEL })], { anchor: 'start' }),
        block(2510, 1269, [line('$value', 29, { color: RED_LABEL })]),
        block(2419, 1321, [line('1% of revenue', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { anchor: 'start', lineGap: 8 }),
      ],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, blockIndex, texts) => {
    labelsZh[id].blocks[blockIndex].lines.forEach((item, index) => { item.text = texts[index]; });
  };
  setLines('transaction_revenues', 0, ['$value', '同比 +5%']);
  setLines('transaction_revenues', 1, ['交易', '收入']);
  setLines('transaction_revenues', 2, ['支付、货币兑换、跨境支付', '以及资金转账的交易手续费', '']);
  setLines('other_value_added_services', 0, ['$value', '同比 +0%']);
  setLines('other_value_added_services', 1, ['其他', '增值', '服务']);
  setLines('other_value_added_services', 2, ['合作伙伴、推荐、订阅、', '网关费用和利息', '']);
  setLines('revenue', 0, ['收入', '$value', '同比 +5%']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 40%', '同比 (2 个百分点)']);
  setLines('transaction_expense', 0, ['交易', '费用', '$value']);
  setLines('transaction_credit_losses', 0, ['交易与', '信贷损失', '$value']);
  setLines('customer_support', 0, ['客户', '支持']);
  setLines('customer_support', 1, ['$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 16%', '同比 (2 个百分点)']);
  setLines('operating_expenses', 0, ['运营', '费用']);
  setLines('operating_expenses', 1, ['$value']);
  setLines('net_profit', 0, ['净利润', '$value', '利润率 13%', '同比 (2 个百分点)']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('other_expense', 0, ['其他', '$value']);
  setLines('technology_development', 0, ['技术与', '开发']);
  setLines('technology_development', 1, ['$value']);
  setLines('technology_development', 2, ['占收入 10%', '同比 +1 个百分点']);
  labelsZh.sales_marketing.blocks.splice(0, 2, block(2425, 935, [line('销售与营销（$0.5B）', 25, { weight: 800, color: RED_LABEL })], { anchor: 'start' }));
  setLines('sales_marketing', 1, ['占收入 6%', '同比 (1 个百分点)']);
  labelsZh.general_administrative.blocks.splice(0, 2, block(2425, 1089, [line('一般及行政（$0.5B）', 25, { weight: 800, color: RED_LABEL })], { anchor: 'start' }));
  setLines('general_administrative', 1, ['占收入 6%', '同比 +0 个百分点']);
  setLines('restructuring', 0, ['重组']);
  setLines('restructuring', 1, ['$value']);
  setLines('restructuring', 2, ['占收入 1%', '同比 (0 个百分点)']);

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
        { text: '$486B', y: 1210, size: 29, weight: 500 },
        { text: '+9% Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      ${kpiCard(246, 380, [
        { text: 'Active accounts', y: 1167, size: 29, weight: 800 },
        { text: '439M', y: 1210, size: 29, weight: 500 },
        { text: '+0% Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      ${kpiCard(636, 192, [
        { text: 'TPA', y: 1167, size: 29, weight: 800 },
        { text: '60', y: 1210, size: 29, weight: 500 },
        { text: '+3% Y/Y', y: 1249, size: 27, weight: 500 },
      ])}
      <text x="429" y="1304" text-anchor="middle" font-family="'Noto Sans',Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">TPV = Total Payment Volume</text>
      <text x="429" y="1342" text-anchor="middle" font-family="'Noto Sans',Arial,sans-serif" font-size="28" font-weight="500" fill="${NOTE}">TPA = Transactions per active account (TTM)</text>
    </g>`;

  const annotationsZh = `
    <g font-family="'Noto Sans',Arial,sans-serif">
      ${kpiCard(30, 203, [
        { text: 'TPV', y: 1167, size: 29, weight: 800 },
        { text: '$486B', y: 1210, size: 29, weight: 500 },
        { text: '同比 +9%', y: 1249, size: 27, weight: 500 },
      ], "'Noto Sans',Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(246, 380, [
        { text: '活跃账户', y: 1167, size: 29, weight: 800 },
        { text: '439M', y: 1210, size: 29, weight: 500 },
        { text: '同比 +0%', y: 1249, size: 27, weight: 500 },
      ], "'Noto Sans',Arial,'Microsoft YaHei',sans-serif")}
      ${kpiCard(636, 192, [
        { text: 'TPA', y: 1167, size: 29, weight: 800 },
        { text: '60', y: 1210, size: 29, weight: 500 },
        { text: '同比 +3%', y: 1249, size: 27, weight: 500 },
      ], "'Noto Sans',Arial,'Microsoft YaHei',sans-serif")}
      <text x="429" y="1304" text-anchor="middle" font-family="'Noto Sans',Arial,'Microsoft YaHei',sans-serif" font-size="28" font-weight="500" fill="${NOTE}">TPV = 总支付额</text>
      <text x="429" y="1342" text-anchor="middle" font-family="'Noto Sans',Arial,'Microsoft YaHei',sans-serif" font-size="28" font-weight="500" fill="${NOTE}">TPA = 每个活跃账户的交易笔数（过去十二个月）</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paypal-q2-fy26',
    name: 'PayPal · Q2 FY26',
    company: 'PayPal',
    meta: {
      company: 'PayPal',
      title: 'PayPal Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/paypal-q2-fy26.png', width: 2667, height: 1500 },
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
        hub: { node: HUB, label: HUB_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: TRANSACTION_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 39, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'paypal-company-wordmark-q2-fy26', href: 'data/assets/raster-annotations/paypal/company-wordmark-q1-fy26.png', x: 600, y: 221, width: 636, height: 177 },
      { key: 'paypal-transaction-revenues-paypal-venmo-icons-q2-fy26', href: 'data/assets/raster-annotations/paypal/transaction-revenues-paypal-venmo-icons-q1-fy26.png', x: 45, y: 401, width: 378, height: 214 },
    ],
    annotationsSvg: annotationsEn,
    layout: {
      scale: 45.2,
      nodes: {
        transaction_revenues: { x: 458, y: 501, width: 71, height: 355 },
        other_value_added_services: { x: 458, y: 1039, width: 71, height: 37 },
        revenue: { x: 925, y: 629, width: 70, height: 393 },
        gross_profit: { x: 1392, y: 507, width: 71, height: 155 },
        transaction_expense: { x: 1392, y: 874, width: 71, height: 198 },
        transaction_credit_losses: { x: 1392, y: 1183, width: 71, height: 15 },
        customer_support: { x: 1392, y: 1300, width: 71, height: 18 },
        operating_profit: { x: 1860, y: 410, width: 70, height: 63 },
        operating_expenses: { x: 1860, y: 680, width: 70, height: 89 },
        net_profit: { x: 2326, y: 311, width: 71, height: 49 },
        tax: { x: 2326, y: 533, width: 71, height: 6 },
        other_expense: { x: 2326, y: 635, width: 71, height: 4 },
        technology_development: { x: 2326, y: 763, width: 71, height: 36 },
        sales_marketing: { x: 2326, y: 954, width: 71, height: 23 },
        general_administrative: { x: 2326, y: 1136, width: 71, height: 20 },
        restructuring: { x: 2326, y: 1315, width: 71, height: 2 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'transaction_revenues', col: 0, order: 0, type: 'source', label: ['Transaction', 'revenues'], value: 7.8, valueText: '$7.8B', notes: ['+5% Y/Y'], color: TRANSACTION_BLUE, labelColor: TRANSACTION_BLUE, linkTint: TRANSACTION_LINK },
      { id: 'other_value_added_services', col: 0, order: 1, type: 'source', label: ['Other', 'value-added', 'services'], value: 0.9, valueText: '$0.9B', notes: ['+0% Y/Y'], color: OTHER_BLUE, labelColor: OTHER_LABEL, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.7, valueText: '$8.7B', notes: ['+5% Y/Y'], color: HUB, labelColor: HUB_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.4, valueText: '$3.4B', notes: ['40% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'transaction_expense', col: 2, order: 1, type: 'cost', label: 'Transaction expense', value: 4.4, valueText: '($4.4B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'transaction_credit_losses', col: 2, order: 2, type: 'cost', label: 'Transaction & credit losses', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'customer_support', col: 2, order: 3, type: 'cost', label: 'Customer support', value: 0.5, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, valueText: '$1.4B', notes: ['16% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.1, valueText: '$1.1B', notes: ['13% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, labelSide: 'right', linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'other_expense', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'technology_development', col: 4, order: 3, type: 'cost', label: ['Technology &', 'Development'], value: 0.8, valueText: '($0.8B)', notes: ['10% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 4, type: 'cost', label: 'S&M', value: 0.5, valueText: '($0.5B)', notes: ['6% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'general_administrative', col: 4, order: 5, type: 'cost', label: 'G&A', value: 0.5, valueText: '($0.5B)', notes: ['6% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
      { id: 'restructuring', col: 4, order: 6, type: 'cost', label: 'Restructuring', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, labelSide: 'right', linkTint: RED_LINK },
    ],
    links: [
      { source: 'transaction_revenues', target: 'revenue', value: 7.8, sourceWidth: 355, targetWidth: 354, y0: 678.5, y1: 806, linkTint: TRANSACTION_LINK },
      { source: 'other_value_added_services', target: 'revenue', value: 0.9, sourceWidth: 37, targetWidth: 39, y0: 1057.5, y1: 1002.5, linkTint: OTHER_LINK },

      { source: 'revenue', target: 'gross_profit', value: 3.4, sourceWidth: 155, targetWidth: 155, y0: 706.5, y1: 584.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'transaction_expense', value: 4.4, sourceWidth: 199, targetWidth: 198, y0: 883.5, y1: 973, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'transaction_credit_losses', value: 0.4, sourceWidth: 21, targetWidth: 15, y0: 993.5, y1: 1190.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'customer_support', value: 0.5, sourceWidth: 18, targetWidth: 18, y0: 1013, y1: 1309, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 1.4, sourceWidth: 63, targetWidth: 63, y0: 538.5, y1: 441.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.0, sourceWidth: 92, targetWidth: 89, y0: 616, y1: 724.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 49, targetWidth: 49, y0: 434.5, y1: 335.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 7, targetWidth: 6, y0: 462.5, y1: 536, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, sourceWidth: 7, targetWidth: 4, y0: 469.5, y1: 637, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_expenses', target: 'technology_development', value: 0.8, sourceWidth: 36, targetWidth: 36, y0: 698, y1: 781, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 0.5, sourceWidth: 23, targetWidth: 23, y0: 727.5, y1: 965.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'general_administrative', value: 0.5, sourceWidth: 23, targetWidth: 20, y0: 750.5, y1: 1146, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, sourceWidth: 7, targetWidth: 2, y0: 765.5, y1: 1316, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['TPV', 'TPA'],
      zh: {
        name: 'PayPal · 2026 财年第二季度',
        meta: {
          title: 'PayPal 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleSize: 112,
          titleTextLength: 1700,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          transaction_revenues: { label: '交易收入', notes: ['同比 +5%'] },
          other_value_added_services: { label: '其他增值服务', notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 (2 个百分点)'] },
          transaction_expense: { label: '交易费用' },
          transaction_credit_losses: { label: '交易与信贷损失' },
          customer_support: { label: '客户支持' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          technology_development: { label: '技术与开发', notes: ['占收入 10%', '同比 +1 个百分点'] },
          sales_marketing: { label: '销售与营销', notes: ['占收入 6%', '同比 (1 个百分点)'] },
          general_administrative: { label: '一般及行政费用', notes: ['占收入 6%', '同比 +0 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* ====================================================================
 * Block - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/block-q3-fy25.png as a measured
 * fixed d3-Sankey layout. Reuses validated Block identity/icon assets
 * and adds Source-specific Square, bitcoin, and hardware crops.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_VALUE = '#008e00';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const AMORTIZATION_FACE = '#cf9898';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_X = 2493;

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: 'middle',
    lineGap: 10,
    lines,
    ...options,
  });

  const labelsEn = {
    bitcoin_revenue: { blocks: [
      block(470, 474, [line('$value', 39), line('(19%) Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
      block(289, 641, [line('4% gross margin', 29, 400, NOTE)]),
    ] },
    transaction_revenue: { blocks: [
      block(470, 704, [line('$value', 39), line('+9% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
      block(289, 803, [line('Transaction', 40, 800), line('39% gross margin', 29, 400, NOTE)], { lineGap: 13 }),
    ] },
    subscription_services: { blocks: [
      block(470, 935, [line('$value', 39), line('+23% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
      block(289, 1036, [line('Subscription', 40, 800), line('and services', 40, 800), line('86% gross margin', 29, 400, NOTE)], { lineGap: 13 }),
    ] },
    hardware_revenue: { blocks: [
      block(470, 1180, [line('$value', 39), line('+91% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
      block(294, 1240, [line('Hardware', 40, 800), line('(47%) gross margin', 29, 400, NOTE)], { lineGap: 13 }),
    ] },
    revenue: { blocks: [
      block(843, 628, [line('Revenue', 40, 800), line('$value', 39), line('+2% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
    ] },
    square_gross_profit: { blocks: [
      block(1214, 461, [line('$value', 39, 400, GREEN_VALUE), line('+9% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
    ] },
    cash_app_gross_profit: { blocks: [
      block(1209, 620, [line('$value', 39, 400, GREEN_VALUE), line('+24% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
      block(1155, 832, [line('Cash App', 40, 800, BLACK)], { anchor: 'start' }),
    ] },
    gross_profit: { blocks: [
      block(1591, 377, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('+18% Y/Y', 29, 400, NOTE)], { lineGap: 13 }),
    ] },
    cost_of_revenue: { blocks: [
      block(1218, 1181, [line('Cost of', 34, 800, RED_LABEL), line('revenue', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], { lineGap: 13 }),
    ] },
    bitcoin_cost: { blocks: [
      block(1741, 900, [line('Bitcoin', 28, 800, RED_LABEL), line('$value', 28, 400, RED_LABEL)], { lineGap: 8 }),
    ] },
    transaction_cost: { blocks: [
      block(1742, 1029, [line('Transaction', 27, 800, RED_LABEL), line('$value', 27, 400, RED_LABEL)], { lineGap: 8 }),
    ] },
    subscription_cost: { blocks: [
      block(1743, 1129, [line('Subscription', 27, 800, RED_LABEL), line('$value', 27, 400, RED_LABEL)], { lineGap: 8 }),
    ] },
    hardware_cost: { blocks: [
      block(1741, 1211, [line('Hardware', 27, 800, RED_LABEL), line('$value', 27, 400, RED_LABEL)], { lineGap: 8 }),
    ] },
    amortization: { blocks: [
      block(1737, 1302, [line('Amortization', 27, 800, RED_LABEL), line('$value', 27, 400, RED_LABEL)], { lineGap: 8 }),
    ] },
    operating_profit: { blocks: [
      block(1965, 265, [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('7% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], { lineGap: 12 }),
    ] },
    operating_expenses: { blocks: [
      block(1958, 750, [line('Operating', 40, 800, RED_LABEL), line('expenses', 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], { lineGap: 13 }),
    ] },
    other_non_operating: { blocks: [
      block(2232, 441, [line('Other', 31, 800, GREEN_VALUE), line('$value', 31, 400, GREEN_VALUE)], { lineGap: 10 }),
    ] },
    net_profit: { blocks: [
      block(RIGHT_X, 315, [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('8% margin', 29, 400, NOTE), line('+3pp Y/Y', 29, 400, NOTE)], { lineGap: 12 }),
    ] },
    tax: { blocks: [
      block(RIGHT_X, 523, [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 }),
    ] },
    product_development: { blocks: [
      block(RIGHT_X, 647, [line('Product', 31, 800, RED_LABEL), line('Development', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 11 }),
    ] },
    sales_marketing: { blocks: [
      block(RIGHT_X, 809, [line('S&M', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 }),
    ] },
    ga: { blocks: [
      block(RIGHT_X, 952, [line('G&A', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 }),
    ] },
    loan_losses: { blocks: [
      block(RIGHT_X, 1097, [line('Loan losses', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 }),
    ] },
    other_operating: { blocks: [
      block(RIGHT_X, 1238, [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], { lineGap: 10 }),
    ] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, texts) => {
    const lines = labelsZh[id].blocks.flatMap((item) => item.lines);
    texts.forEach((text, index) => { lines[index].text = text; });
  };
  setLines('bitcoin_revenue', ['$value', '同比 (19%)', '毛利率 4%']);
  setLines('transaction_revenue', ['$value', '同比 +9%', '交易', '毛利率 39%']);
  setLines('subscription_services', ['$value', '同比 +23%', '订阅', '与服务', '毛利率 86%']);
  setLines('hardware_revenue', ['$value', '同比 +91%', '硬件', '毛利率 (47%)']);
  setLines('revenue', ['收入', '$value', '同比 +2%']);
  setLines('square_gross_profit', ['$value', '同比 +9%']);
  setLines('cash_app_gross_profit', ['$value', '同比 +24%', 'Cash App 消费者生态']);
  setLines('gross_profit', ['毛利润', '$value', '同比 +18%']);
  setLines('cost_of_revenue', ['收入', '成本', '$value']);
  setLines('bitcoin_cost', ['比特币', '$value']);
  setLines('transaction_cost', ['交易', '$value']);
  setLines('subscription_cost', ['订阅', '$value']);
  setLines('hardware_cost', ['硬件', '$value']);
  setLines('amortization', ['摊销', '$value']);
  setLines('operating_profit', ['营业利润', '$value', '利润率 7%', '同比 +1 个百分点']);
  setLines('operating_expenses', ['运营', '费用', '$value']);
  setLines('other_non_operating', ['其他', '$value']);
  setLines('net_profit', ['净利润', '$value', '利润率 8%', '同比 +3 个百分点']);
  setLines('tax', ['税费', '$value']);
  setLines('product_development', ['产品', '开发', '$value']);
  setLines('sales_marketing', ['销售与营销', '$value']);
  setLines('ga', ['一般及行政', '$value']);
  setLines('loan_losses', ['贷款损失', '$value']);
  setLines('other_operating', ['其他', '$value']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'block-q3-fy25',
    name: 'Block · Q3 FY25',
    company: 'Block',
    meta: {
      company: 'Block',
      title: 'Block Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/block-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 2052,
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
      labelWeight: 600,
      valueWeight: 300,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'block-company-logo', href: 'data/assets/raster-annotations/block/company-logo-fy25.png', x: 750, y: 269, width: 190, height: 279 },
      { key: 'block-square-wordmark', href: 'data/assets/raster-annotations/block/square-wordmark-q3-fy25.png', x: 1087, y: 394, width: 281, height: 64 },
      { key: 'block-cash-app-icon', href: 'data/assets/raster-annotations/block/financial-solutions-icon-fy25.png', x: 1088, y: 826, width: 58, height: 58 },
      { key: 'block-bitcoin-wordmark', href: 'data/assets/raster-annotations/block/bitcoin-wordmark-q3-fy25.png', x: 150, y: 558, width: 280, height: 77 },
      { key: 'block-hardware-icon', href: 'data/assets/raster-annotations/block/hardware-icon-q3-fy25.png', x: 100, y: 1217, width: 80, height: 80 },
    ],
    layout: {
      scale: 1,
      nodes: {
        bitcoin_revenue: { x: 435, y: 567, width: 71, height: 101 },
        transaction_revenue: { x: 435, y: 797, width: 71, height: 96 },
        subscription_services: { x: 435, y: 1029, width: 71, height: 114 },
        hardware_revenue: { x: 435, y: 1275, width: 71, height: 1 },
        revenue: { x: 809, y: 778, width: 70, height: 319 },
        square_gross_profit: { x: 1183, y: 563, width: 70, height: 50 },
        cash_app_gross_profit: { x: 1183, y: 713, width: 70, height: 83 },
        cost_of_revenue: { x: 1183, y: 983, width: 70, height: 178 },
        gross_profit: { x: 1556, y: 529, width: 71, height: 136 },
        bitcoin_cost: { x: 1556, y: 882, width: 71, height: 96 },
        transaction_cost: { x: 1556, y: 1028, width: 71, height: 58 },
        subscription_cost: { x: 1556, y: 1152, width: 71, height: 14 },
        hardware_cost: { x: 1556, y: 1240, width: 71, height: 3 },
        amortization: { x: 1556, y: 1327, width: 71, height: 1 },
        operating_profit: { x: 1930, y: 450, width: 71, height: 19 },
        operating_expenses: { x: 1930, y: 625, width: 71, height: 116 },
        other_non_operating: { x: 2193, y: 422, width: 70, height: 7 },
        net_profit: { x: 2303, y: 360, width: 71, height: 22 },
        tax: { x: 2303, y: 550, width: 71, height: 7 },
        product_development: { x: 2303, y: 683, width: 71, height: 35 },
        sales_marketing: { x: 2303, y: 831, width: 71, height: 28 },
        ga: { x: 2303, y: 971, width: 71, height: 26 },
        loan_losses: { x: 2303, y: 1125, width: 71, height: 16 },
        other_operating: { x: 2303, y: 1273, width: 71, height: 4 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'bitcoin_revenue', col: 0, order: 0, type: 'source', label: 'Bitcoin', value: 2.0, valueText: '$2.0B', notes: ['(19%) Y/Y', '4% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'transaction_revenue', col: 0, order: 1, type: 'source', label: 'Transaction', value: 1.9, valueText: '$1.9B', notes: ['+9% Y/Y', '39% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'subscription_services', col: 0, order: 2, type: 'source', label: ['Subscription', 'and services'], value: 2.2, valueText: '$2.2B', notes: ['+23% Y/Y', '86% gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'hardware_revenue', col: 0, order: 3, type: 'source', label: 'Hardware', value: 0.1, valueText: '$0.1B', notes: ['+91% Y/Y', '(47%) gross margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.1, valueText: '$6.1B', notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'square_gross_profit', col: 2, order: 0, type: 'profit', label: 'Square', value: 1.0, valueText: '$1.0B', notes: ['+9% Y/Y'], color: GREEN, labelColor: GREEN_VALUE, linkTint: GREEN_LINK },
      { id: 'cash_app_gross_profit', col: 2, order: 1, type: 'profit', label: 'Cash App', value: 1.6, valueText: '$1.6B', notes: ['+24% Y/Y'], color: GREEN, labelColor: GREEN_VALUE, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 2, type: 'cost', label: ['Cost of', 'revenue'], value: 3.5, valueText: '($3.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.7, valueText: '$2.7B', notes: ['+18% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'bitcoin_cost', col: 3, order: 1, type: 'cost', label: 'Bitcoin', value: 1.9, valueText: '($1.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'transaction_cost', col: 3, order: 2, type: 'cost', label: 'Transaction', value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'subscription_cost', col: 3, order: 3, type: 'cost', label: 'Subscription', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'hardware_cost', col: 3, order: 4, type: 'cost', label: 'Hardware', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 3, order: 5, type: 'cost', label: 'Amortization', value: 0.014, valueText: '($14M)', color: AMORTIZATION_FACE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, valueText: '$0.4B', notes: ['7% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.3, valueText: '($2.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_non_operating', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.2, valueText: '$0.2B', color: GREEN, labelColor: GREEN_VALUE, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.5, valueText: '$0.5B', notes: ['8% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 6, order: 2, type: 'cost', label: ['Product', 'Development'], value: 0.7, valueText: '($0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 6, order: 3, type: 'cost', label: 'S&M', value: 0.6, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.5, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'loan_losses', col: 6, order: 5, type: 'cost', label: 'Loan losses', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 6, order: 6, type: 'cost', label: 'Other', value: 0.034, valueText: '($34M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'bitcoin_revenue', target: 'revenue', value: 2.0, sourceWidth: 101, targetWidth: 103, y0: 617.5, y1: 829.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'transaction_revenue', target: 'revenue', value: 1.9, sourceWidth: 96, targetWidth: 99, y0: 845, y1: 930.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'subscription_services', target: 'revenue', value: 2.2, sourceWidth: 114, targetWidth: 114, y0: 1086, y1: 1037, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'hardware_revenue', target: 'revenue', value: 0.1, sourceWidth: 1, targetWidth: 3, y0: 1275.5, y1: 1095.5, sourceOrder: 0, targetOrder: 3, linkTint: GRAY_LINK },

      { source: 'revenue', target: 'square_gross_profit', value: 1.0, sourceWidth: 50, targetWidth: 50, y0: 803, y1: 588, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cash_app_gross_profit', value: 1.6, sourceWidth: 86, targetWidth: 83, y0: 871, y1: 754.5, sourceOrder: 1, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.5, sourceWidth: 183, targetWidth: 178, y0: 1005.5, y1: 1072, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },

      { source: 'square_gross_profit', target: 'gross_profit', value: 1.0, sourceWidth: 50, targetWidth: 50, y0: 588, y1: 554, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'cash_app_gross_profit', target: 'gross_profit', value: 1.6, sourceWidth: 83, targetWidth: 86, y0: 754.5, y1: 622, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },

      { source: 'cost_of_revenue', target: 'bitcoin_cost', value: 1.9, sourceWidth: 97, targetWidth: 96, y0: 1031.5, y1: 930, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'transaction_cost', value: 1.1, sourceWidth: 59, targetWidth: 58, y0: 1109.5, y1: 1057, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'subscription_cost', value: 0.3, sourceWidth: 16, targetWidth: 14, y0: 1147, y1: 1159, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'hardware_cost', value: 0.1, sourceWidth: 4, targetWidth: 3, y0: 1157, y1: 1241.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'amortization', value: 0.014, sourceWidth: 1, targetWidth: 1, y0: 1159.5, y1: 1327.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 19, targetWidth: 19, y0: 538.5, y1: 459.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.3, sourceWidth: 116, targetWidth: 116, y0: 607, y1: 683, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 0.3, sourceWidth: 12, targetWidth: 15, y0: 456, y1: 367.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 7, targetWidth: 7, y0: 465.5, y1: 553.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_non_operating', target: 'net_profit', value: 0.2, sourceWidth: 7, targetWidth: 7, y0: 425.5, y1: 378.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },

      { source: 'operating_expenses', target: 'product_development', value: 0.7, sourceWidth: 35, targetWidth: 35, y0: 642.5, y1: 700.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_marketing', value: 0.6, sourceWidth: 29, targetWidth: 28, y0: 674.5, y1: 845, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.5, sourceWidth: 26, targetWidth: 26, y0: 702, y1: 984, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'loan_losses', value: 0.4, sourceWidth: 18, targetWidth: 16, y0: 724, y1: 1133, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating', value: 0.034, sourceWidth: 7, targetWidth: 4, y0: 736.5, y1: 1275, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Block · 2025 财年第三季度',
        meta: {
          title: 'Block 2025 财年第三季度利润表',
          period: '',
          periodNote: '',
          titleTextLength: 1420,
        },
        nodes: {
          bitcoin_revenue: { label: '比特币', notes: ['同比 (19%)', '毛利率 4%'] },
          transaction_revenue: { label: '交易', notes: ['同比 +9%', '毛利率 39%'] },
          subscription_services: { label: '订阅与服务', notes: ['同比 +23%', '毛利率 86%'] },
          hardware_revenue: { label: '硬件', notes: ['同比 +91%', '毛利率 (47%)'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          square_gross_profit: { label: 'Square 商户生态', notes: ['同比 +9%'] },
          cash_app_gross_profit: { label: 'Cash App 消费者生态', notes: ['同比 +24%'] },
          gross_profit: { label: '毛利润', notes: ['同比 +18%'] },
          cost_of_revenue: { label: '收入成本' },
          bitcoin_cost: { label: '比特币' },
          transaction_cost: { label: '交易' },
          subscription_cost: { label: '订阅' },
          hardware_cost: { label: '硬件' },
          amortization: { label: '摊销' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_non_operating: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          product_development: { label: '产品开发' },
          sales_marketing: { label: '销售与营销' },
          ga: { label: '一般及行政' },
          loan_losses: { label: '贷款损失' },
          other_operating: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

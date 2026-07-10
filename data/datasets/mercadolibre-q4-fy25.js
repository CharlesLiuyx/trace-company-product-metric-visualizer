/* ====================================================================
 * MercadoLibre - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/mercadolibre-q4-fy25.png as a fixed
 * d3-sankey layout with validated business-brand raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#696969';
  const GOLD = '#f4d13f';
  const GOLD_LABEL = '#a29700';
  const GOLD_LINK = '#f0e1a2';
  const LIME = '#7dc900';
  const LIME_LINK = '#bedb8b';
  const BLUE = '#079fd8';
  const BLUE_LABEL = '#009cdf';
  const BLUE_LINK = '#7bc6e3';
  const TEAL = '#08cba7';
  const TEAL_LINK = '#84ddd0';
  const NAVY = '#303d8e';
  const GREEN = '#2aa52a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9dce9b';
  const RED = '#d70000';
  const RED_LABEL = '#9b1200';
  const RED_LINK = '#df8485';
  const RIGHT_LABEL_X = 2417;

  function block(x, top, lines, anchor = 'middle', lineGap = 8) {
    return { x, top, anchor, lineGap, lines };
  }

  function makeLabels(language) {
    const zh = language === 'zh';
    const yoy = (value) => (zh ? `同比 ${value}` : `${value} Y/Y`);
    const margin = (value) => (zh ? `利润率 ${value}` : `${value} margin`);
    const pp = (value) => (zh ? `同比 ${value} 个百分点` : `${value}pp Y/Y`);

    return {
      marketplace: {
        blocks: [block(566, 370, [
          { text: '$value', size: 39, weight: 400, color: GOLD_LABEL },
          { text: yoy('+32%'), size: 29, weight: 400, color: NOTE },
        ])],
      },
      shipping: {
        blocks: [block(566, 662, [
          { text: '$value', size: 39, weight: 400, color: LIME },
          { text: yoy('+71%'), size: 29, weight: 400, color: NOTE },
        ])],
      },
      payments: {
        blocks: [block(566, 824, [
          { text: '$value', size: 39, weight: 400, color: BLUE_LABEL },
          { text: yoy('+33%'), size: 29, weight: 400, color: NOTE },
        ])],
      },
      pos: {
        blocks: [block(566, 1008, [
          { text: '$value', size: 39, weight: 400, color: BLUE_LABEL },
          { text: yoy('(5%)'), size: 29, weight: 400, color: NOTE },
        ])],
      },
      credit: {
        blocks: [block(566, 1110, [
          { text: '$value', size: 39, weight: 400, color: TEAL },
          { text: yoy('+77%'), size: 29, weight: 400, color: NOTE },
        ])],
      },
      commerce: {
        blocks: [block(918, 404, [
          { text: zh ? '电商' : 'Commerce', size: 40, weight: 800, color: GOLD_LABEL },
          { text: '$value', size: 39, weight: 400, color: GOLD_LABEL },
          { text: yoy('+40%'), size: 29, weight: 400, color: NOTE },
        ], 'middle', 9)],
      },
      fintech: {
        blocks: [block(918, 1134, [
          { text: zh ? '金融科技' : 'Fintech', size: 40, weight: 800, color: BLUE_LABEL },
          { text: '$value', size: 39, weight: 400, color: BLUE_LABEL },
          { text: yoy('+51%'), size: 29, weight: 400, color: NOTE },
        ], 'middle', 9)],
      },
      revenue: {
        blocks: [block(1270, 501, [
          { text: zh ? '净收入' : 'Net Revenue', size: 40, weight: 800, color: NAVY },
          { text: '$value', size: 39, weight: 400, color: NAVY },
          { text: yoy('+45%'), size: 29, weight: 400, color: NOTE },
        ], 'middle', 9)],
      },
      gross_profit: {
        blocks: [block(1623, 373, [
          { text: zh ? '毛利润' : 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: margin('43%'), size: 29, weight: 400, color: NOTE },
          { text: pp('(2)'), size: 29, weight: 400, color: NOTE },
        ], 'middle', 9)],
      },
      cost_of_revenue: {
        blocks: [block(1623, 1130, [
          { text: zh ? '收入' : 'Cost of', size: 36, weight: 800, color: RED_LABEL },
          { text: zh ? '成本' : 'revenue', size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 37, weight: 400, color: RED_LABEL },
        ], 'middle', 8)],
      },
      operating_profit: {
        blocks: [block(1980, 279, [
          { text: zh ? '营业利润' : 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: margin('10%'), size: 29, weight: 400, color: NOTE },
          { text: pp('(3)'), size: 29, weight: 400, color: NOTE },
        ], 'middle', 9)],
      },
      operating_expenses: {
        blocks: [block(1980, 807, [
          { text: zh ? '运营' : 'Operating', size: 38, weight: 800, color: RED_LABEL },
          { text: zh ? '费用' : 'expenses', size: 38, weight: 800, color: RED_LABEL },
          { text: '$value', size: 38, weight: 400, color: RED_LABEL },
        ], 'middle', 8)],
      },
      net_profit: {
        blocks: [block(2385, 326, [
          { text: zh ? '净利润' : 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: margin('6%'), size: 29, weight: 400, color: NOTE },
          { text: pp('(4)'), size: 29, weight: 400, color: NOTE },
        ], 'start', 9)],
      },
      tax: {
        blocks: [block(RIGHT_LABEL_X, 527, [
          { text: zh ? '税费' : 'Tax', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 31, weight: 400, color: RED_LABEL },
        ], 'start', 8)],
      },
      other: {
        blocks: [block(RIGHT_LABEL_X, 619, [
          { text: zh ? '其他' : 'Other', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 31, weight: 400, color: RED_LABEL },
        ], 'start', 8)],
      },
      sm: {
        blocks: [block(RIGHT_LABEL_X, 710, [
          { text: zh ? '销售与' : 'Sales &', size: 32, weight: 800, color: RED_LABEL },
          { text: zh ? '营销' : 'Marketing', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ], 'start', 8)],
      },
      product_development: {
        blocks: [block(RIGHT_LABEL_X, 860, [
          { text: zh ? '产品' : 'Product', size: 32, weight: 800, color: RED_LABEL },
          { text: zh ? '开发' : 'Development', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ], 'start', 8)],
      },
      ga: {
        blocks: [block(RIGHT_LABEL_X, 1008, [
          { text: zh ? '管理' : 'General &', size: 32, weight: 800, color: RED_LABEL },
          { text: zh ? '费用' : 'Admin', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ], 'start', 8)],
      },
      provision_doubtful: {
        blocks: [block(RIGHT_LABEL_X, 1160, [
          { text: zh ? '坏账' : 'Provision', size: 32, weight: 800, color: RED_LABEL },
          { text: zh ? '准备' : 'doubtful', size: 32, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          { text: zh ? '损失后利息' : 'Interest margin', size: 29, weight: 400, color: NOTE },
          { text: zh ? '利润率 23%' : 'after losses 23%', size: 29, weight: 400, color: NOTE },
        ], 'start', 8)],
      },
    };
  }

  function annotations(language) {
    const zh = language === 'zh';
    const copy = zh
      ? {
        marketplace: ['撮合服务、', '广告销售'],
        shipping: ['商品销售', '+ 配送费'],
        payments: ['支付方案、分期、信用卡', '及借记卡手续费、保险科技费'],
        pos: '销售点设备',
        credit: ['贷款利息收入', '+ 信用卡交易'],
      }
      : {
        marketplace: ['Intermediation services,', 'advertising sales'],
        shipping: ['Product sales', '+ shipping fees'],
        payments: ['Payment solution, installments, credit', '& debit card fees, insurtech fees'],
        pos: 'Point of sale devices',
        credit: ['Interest earned on loans', '+ credit card transactions'],
      };
    const paymentSize = zh ? 21 : 23;
    return `
      <g font-family="Montserrat,Arial,sans-serif" font-weight="400" fill="${NOTE}">
        <text x="285" y="559" text-anchor="middle" font-size="24">${copy.marketplace[0]}</text>
        <text x="285" y="590" text-anchor="middle" font-size="24">${copy.marketplace[1]}</text>
        <text x="318" y="791" text-anchor="middle" font-size="24">${copy.shipping[0]}</text>
        <text x="318" y="821" text-anchor="middle" font-size="24">${copy.shipping[1]}</text>
        <text x="300" y="1020" text-anchor="middle" font-size="${paymentSize}">${copy.payments[0]}</text>
        <text x="300" y="1050" text-anchor="middle" font-size="${paymentSize}">${copy.payments[1]}</text>
        <text x="318" y="1110" text-anchor="middle" font-size="24">${copy.pos}</text>
        <text x="286" y="1317" text-anchor="middle" font-size="24">${copy.credit[0]}</text>
        <text x="286" y="1347" text-anchor="middle" font-size="24">${copy.credit[1]}</text>
      </g>`;
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mercadolibre-q4-fy25',
    name: 'MercadoLibre · Q4 FY25',
    company: 'MercadoLibre',
    meta: {
      company: 'MercadoLibre',
      title: 'MercadoLibre Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/mercadolibre-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2460,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: GOLD, label: GOLD_LABEL },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GOLD_LINK, hub: NAVY, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations('en'),
    rasterAnnotations: [
      { key: 'corporate-handshake', href: 'data/assets/raster-annotations/mercadolibre/corporate-handshake.png', x: 1144, y: 264, width: 256, height: 182 },
      { key: 'commerce-brand', href: 'data/assets/raster-annotations/mercadolibre/commerce-brand.png', x: 64, y: 410, width: 412, height: 124 },
      { key: 'ads-brand', href: 'data/assets/raster-annotations/mercadolibre/ads-brand.png', x: 230, y: 592, width: 170, height: 56 },
      { key: 'envios-brand', href: 'data/assets/raster-annotations/mercadolibre/envios-brand.png', x: 212, y: 682, width: 290, height: 90 },
      { key: 'pago-brand', href: 'data/assets/raster-annotations/mercadolibre/pago-brand.png', x: 60, y: 868, width: 445, height: 132 },
      { key: 'credito-brand', href: 'data/assets/raster-annotations/mercadolibre/credito-brand.png', x: 60, y: 1174, width: 438, height: 120 },
    ],

    layout: {
      scale: 42,
      nodes: {
        marketplace: { x: 532, y: 471, width: 68, height: 160 },
        shipping: { x: 532, y: 760, width: 68, height: 50 },
        payments: { x: 532, y: 922, width: 68, height: 80 },
        pos: { x: 532, y: 1108, width: 68, height: 3 },
        credit: { x: 532, y: 1200, width: 68, height: 80 },
        commerce: { x: 884, y: 559, width: 68, height: 210 },
        fintech: { x: 884, y: 963, width: 68, height: 161 },
        revenue: { x: 1236, y: 657, width: 68, height: 370 },
        gross_profit: { x: 1587, y: 563, width: 72, height: 160 },
        cost_of_revenue: { x: 1587, y: 913, width: 72, height: 210 },
        operating_profit: { x: 1944, y: 470, width: 72, height: 38 },
        operating_expenses: { x: 1944, y: 678, width: 72, height: 122 },
        net_profit: { x: 2296, y: 394, width: 72, height: 25 },
        tax: { x: 2296, y: 564, width: 72, height: 8 },
        other: { x: 2296, y: 658, width: 72, height: 5 },
        sm: { x: 2296, y: 720, width: 72, height: 42 },
        product_development: { x: 2296, y: 909, width: 72, height: 25 },
        ga: { x: 2296, y: 1062, width: 72, height: 13 },
        provision_doubtful: { x: 2296, y: 1207, width: 72, height: 42 },
      },
      labels: makeLabels('en'),
    },

    nodes: [
      { id: 'marketplace', col: 0, order: 0, type: 'source', label: 'Intermediation services and advertising sales', value: 3.8, valueText: '$3.8B', notes: ['+32% Y/Y'], color: GOLD, labelColor: GOLD_LABEL, linkTint: GOLD_LINK },
      { id: 'shipping', col: 0, order: 1, type: 'source', label: 'Product sales and shipping fees', value: 1.2, valueText: '$1.2B', notes: ['+71% Y/Y'], color: LIME, labelColor: LIME, linkTint: LIME_LINK },
      { id: 'payments', col: 0, order: 2, type: 'source', label: 'Payment solution, installments, credit and debit card fees, and insurtech fees', value: 1.9, valueText: '$1.9B', notes: ['+33% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'pos', col: 0, order: 3, type: 'source', label: 'Point of sale devices', value: 0.018, valueText: '$18M', notes: ['(5%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'credit', col: 0, order: 4, type: 'source', label: 'Interest earned on loans and credit card transactions', value: 1.9, valueText: '$1.9B', notes: ['+77% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'commerce', col: 1, order: 0, type: 'hub', label: 'Commerce', value: 5.0, valueText: '$5.0B', notes: ['+40% Y/Y'], color: GOLD, labelColor: GOLD_LABEL, linkTint: GOLD_LINK },
      { id: 'fintech', col: 1, order: 1, type: 'hub', label: 'Fintech', value: 3.8, valueText: '$3.8B', notes: ['+51% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net Revenue', value: 8.8, valueText: '$8.8B', notes: ['+45% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.8, valueText: '$3.8B', notes: ['43% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.9, valueText: '$0.9B', notes: ['10% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.9, valueText: '($2.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.6, valueText: '$0.6B', notes: ['6% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'Sales & Marketing', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 4, type: 'cost', label: 'Product Development', value: 0.6, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'General & Admin', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provision_doubtful', col: 5, order: 6, type: 'cost', label: 'Provision for doubtful accounts', value: 1.0, valueText: '($1.0B)', notes: ['Interest margin after losses 23%'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'marketplace', target: 'commerce', value: 3.8, width: 160, sourceOrder: 0, targetOrder: 0, linkTint: GOLD_LINK },
      { source: 'shipping', target: 'commerce', value: 1.2, width: 50, sourceOrder: 0, targetOrder: 1, linkTint: LIME_LINK },
      { source: 'payments', target: 'fintech', value: 1.9, width: 80, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'pos', target: 'fintech', value: 0.018, width: 3, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'credit', target: 'fintech', value: 1.9, width: 80, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'commerce', target: 'revenue', value: 5.0, width: 210, sourceOrder: 0, targetOrder: 0, linkTint: GOLD_LINK },
      { source: 'fintech', target: 'revenue', value: 3.8, width: 160, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 3.8, width: 160, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.0, width: 210, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9, width: 38, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.9, width: 122, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.6, width: 25, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.1, width: 5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.0, width: 42, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'product_development', value: 0.6, width: 25, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.3, width: 13, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'provision_doubtful', value: 1.0, width: 42, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: '美客多 · 2025 财年第四季度',
        meta: {
          title: '美客多 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1500,
        },
        annotationsSvg: annotations('zh'),
        nodes: {
          marketplace: { label: '撮合服务与广告销售', notes: ['同比 +32%'] },
          shipping: { label: '商品销售与配送费', notes: ['同比 +71%'] },
          payments: { label: '支付及金融服务费用', notes: ['同比 +33%'] },
          pos: { label: '销售点设备', notes: ['同比 (5%)'] },
          credit: { label: '贷款与信用卡利息收入', notes: ['同比 +77%'] },
          commerce: { label: '电商', notes: ['同比 +40%'] },
          fintech: { label: '金融科技', notes: ['同比 +51%'] },
          revenue: { label: '净收入', notes: ['同比 +45%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sm: { label: '销售与营销' },
          product_development: { label: '产品开发' },
          ga: { label: '管理费用' },
          provision_doubtful: { label: '坏账准备', notes: ['损失后利息利润率 23%'] },
        },
        layout: { labels: makeLabels('zh') },
      },
    },
  });
})();

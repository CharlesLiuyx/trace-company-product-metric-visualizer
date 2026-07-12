/* ====================================================================
 * MercadoLibre - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/mercadolibre-q1-fy26.png as a fixed
 * d3-sankey layout with validated business-brand raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#696969';
  const GOLD = '#edc949';
  const GOLD_LABEL = '#929000';
  const GOLD_LINK = '#efdfa6';
  const LIME = '#80bd01';
  const LIME_LINK = '#bfd985';
  const BLUE = '#009ee0';
  const BLUE_LABEL = '#009ee0';
  const BLUE_LINK = '#85cbe9';
  const TEAL = '#00c8a1';
  const TEAL_LINK = '#85dfcd';
  const NAVY = '#2b3780';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
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
      marketplace: { blocks: [block(566, 365, [{ text: '$value', size: 39, weight: 400, color: GOLD_LABEL }, { text: yoy('+39%'), size: 29, weight: 400, color: NOTE }])] },
      shipping: { blocks: [block(566, 644, [{ text: '$value', size: 39, weight: 400, color: LIME }, { text: yoy('+85%'), size: 29, weight: 400, color: NOTE }])] },
      payments: { blocks: [block(566, 819, [{ text: '$value', size: 39, weight: 400, color: BLUE_LABEL }, { text: yoy('+32%'), size: 29, weight: 400, color: NOTE }])] },
      pos: { blocks: [block(566, 1003, [{ text: '$value', size: 39, weight: 400, color: BLUE_LABEL }, { text: yoy('+38%'), size: 29, weight: 400, color: NOTE }])] },
      credit: { blocks: [block(566, 1105, [{ text: '$value', size: 39, weight: 400, color: TEAL }, { text: yoy('+76%'), size: 29, weight: 400, color: NOTE }])] },
      commerce: { blocks: [block(918, 398, [{ text: zh ? '电商' : 'Commerce', size: 40, weight: 800, color: GOLD_LABEL }, { text: '$value', size: 39, weight: 400, color: GOLD_LABEL }, { text: yoy('+47%'), size: 29, weight: 400, color: NOTE }], 'middle', 9)] },
      fintech: { blocks: [block(918, 1126, [{ text: zh ? '金融科技' : 'Fintech', size: 40, weight: 800, color: BLUE_LABEL }, { text: '$value', size: 39, weight: 400, color: BLUE_LABEL }, { text: yoy('+51%'), size: 29, weight: 400, color: NOTE }], 'middle', 9)] },
      revenue: { blocks: [block(1270, 495, [{ text: zh ? '净收入' : 'Net Revenue', size: 40, weight: 800, color: NAVY }, { text: '$value', size: 39, weight: 400, color: NAVY }, { text: yoy('+49%'), size: 29, weight: 400, color: NOTE }], 'middle', 9)] },
      gross_profit: { blocks: [block(1623, 365, [{ text: zh ? '毛利润' : 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: margin('44%'), size: 29, weight: 400, color: NOTE }, { text: pp('(3)'), size: 29, weight: 400, color: NOTE }], 'middle', 9)] },
      cost_of_revenue: { blocks: [block(1623, 1125, [{ text: zh ? '收入' : 'Cost of', size: 36, weight: 800, color: RED_LABEL }, { text: zh ? '成本' : 'revenue', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 37, weight: 400, color: RED_LABEL }], 'middle', 8)] },
      operating_profit: { blocks: [block(1980, 279, [{ text: zh ? '营业利润' : 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: margin('7%'), size: 29, weight: 400, color: NOTE }, { text: pp('(6)'), size: 29, weight: 400, color: NOTE }], 'middle', 9)] },
      operating_expenses: { blocks: [block(1980, 807, [{ text: zh ? '运营' : 'Operating', size: 38, weight: 800, color: RED_LABEL }, { text: zh ? '费用' : 'expenses', size: 38, weight: 800, color: RED_LABEL }, { text: '$value', size: 38, weight: 400, color: RED_LABEL }], 'middle', 8)] },
      net_profit: { blocks: [block(2385, 326, [{ text: zh ? '净利润' : 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: margin('5%'), size: 29, weight: 400, color: NOTE }, { text: pp('(4)'), size: 29, weight: 400, color: NOTE }], 'start', 9)] },
      tax: { blocks: [block(RIGHT_LABEL_X, 517, [{ text: zh ? '税费' : 'Tax', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }], 'start', 8)] },
      other: { blocks: [block(RIGHT_LABEL_X, 614, [{ text: zh ? '其他' : 'Other', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }], 'start', 8)] },
      sm: { blocks: [block(RIGHT_LABEL_X, 710, [{ text: zh ? '销售与' : 'Sales &', size: 32, weight: 800, color: RED_LABEL }, { text: zh ? '营销' : 'Marketing', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }], 'start', 8)] },
      product_development: { blocks: [block(RIGHT_LABEL_X, 860, [{ text: zh ? '产品' : 'Product', size: 32, weight: 800, color: RED_LABEL }, { text: zh ? '开发' : 'Development', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }], 'start', 8)] },
      ga: { blocks: [block(RIGHT_LABEL_X, 1008, [{ text: zh ? '管理' : 'General &', size: 32, weight: 800, color: RED_LABEL }, { text: zh ? '费用' : 'Admin', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }], 'start', 8)] },
      provision_doubtful: { blocks: [block(RIGHT_LABEL_X, 1160, [{ text: zh ? '坏账' : 'Provision', size: 32, weight: 800, color: RED_LABEL }, { text: zh ? '准备' : 'doubtful', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }, { text: zh ? '损失后利息' : 'Interest margin', size: 29, weight: 400, color: NOTE }, { text: zh ? '利润率 18%' : 'after losses 18%', size: 29, weight: 400, color: NOTE }], 'start', 8)] },
    };
  }

  function annotations(language) {
    const zh = language === 'zh';
    const copy = zh
      ? { marketplace: ['撮合服务、', '广告销售'], shipping: ['商品销售', '+ 配送费'], payments: ['支付方案、分期、信用卡', '及借记卡手续费、保险科技费'], pos: '销售点设备', credit: ['贷款利息收入', '+ 信用卡交易'] }
      : { marketplace: ['Intermediation services,', 'advertising sales'], shipping: ['Product sales', '+ shipping fees'], payments: ['Payment solution, installments, credit', '& debit card fees, insurtech fees'], pos: 'Point of sale devices', credit: ['Interest earned on loans', '+ credit card transactions'] };
    const paymentSize = zh ? 21 : 23;
    return `
      <g font-family="Noto Sans,Arial,sans-serif" font-weight="400" fill="${NOTE}">
        <text x="285" y="535" text-anchor="middle" font-size="24">${copy.marketplace[0]}</text>
        <text x="285" y="565" text-anchor="middle" font-size="24">${copy.marketplace[1]}</text>
        <text x="318" y="766" text-anchor="middle" font-size="24">${copy.shipping[0]}</text>
        <text x="318" y="796" text-anchor="middle" font-size="24">${copy.shipping[1]}</text>
        <text x="300" y="995" text-anchor="middle" font-size="${paymentSize}">${copy.payments[0]}</text>
        <text x="300" y="1025" text-anchor="middle" font-size="${paymentSize}">${copy.payments[1]}</text>
        <text x="318" y="1095" text-anchor="middle" font-size="24">${copy.pos}</text>
        <text x="286" y="1292" text-anchor="middle" font-size="24">${copy.credit[0]}</text>
        <text x="286" y="1322" text-anchor="middle" font-size="24">${copy.credit[1]}</text>
      </g>`;
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mercadolibre-q1-fy26',
    name: 'MercadoLibre · Q1 FY26',
    company: 'MercadoLibre',
    meta: {
      company: 'MercadoLibre', title: 'MercadoLibre Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mercadolibre-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 128, titleWeight: 800, titleTextLength: 2460,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: GOLD, label: GOLD_LABEL }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GOLD_LINK, hub: NAVY, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations('en'),
    rasterAnnotations: [
      { key: 'corporate-handshake', href: 'data/assets/raster-annotations/mercadolibre/q1-fy26/corporate-handshake.png', x: 1144, y: 242, width: 256, height: 176 },
      { key: 'commerce-brand', href: 'data/assets/raster-annotations/mercadolibre/q1-fy26/commerce-brand.png', x: 64, y: 394, width: 412, height: 110 },
      { key: 'ads-brand', href: 'data/assets/raster-annotations/mercadolibre/q1-fy26/ads-brand.png', x: 230, y: 577, width: 170, height: 56 },
      { key: 'envios-brand', href: 'data/assets/raster-annotations/mercadolibre/q1-fy26/envios-brand.png', x: 212, y: 666, width: 290, height: 80 },
      { key: 'pago-brand', href: 'data/assets/raster-annotations/mercadolibre/q1-fy26/pago-brand.png', x: 60, y: 854, width: 445, height: 114 },
      { key: 'credito-brand', href: 'data/assets/raster-annotations/mercadolibre/q1-fy26/credito-brand.png', x: 60, y: 1154, width: 438, height: 120 },
    ],
    layout: {
      scale: 42,
      nodes: {
        marketplace: { x: 533, y: 454, width: 67, height: 151 }, shipping: { x: 533, y: 732, width: 67, height: 42 },
        payments: { x: 533, y: 908, width: 67, height: 76 }, pos: { x: 532, y: 1105, width: 68, height: 3 }, credit: { x: 533, y: 1195, width: 67, height: 80 },
        commerce: { x: 886, y: 543, width: 66, height: 197 }, fintech: { x: 886, y: 943, width: 66, height: 161 }, revenue: { x: 1239, y: 636, width: 66, height: 358 },
        gross_profit: { x: 1592, y: 544, width: 66, height: 156 }, cost_of_revenue: { x: 1592, y: 905, width: 66, height: 202 },
        operating_profit: { x: 1947, y: 471, width: 66, height: 22 }, operating_expenses: { x: 1945, y: 663, width: 66, height: 130 },
        net_profit: { x: 2297, y: 401, width: 67, height: 15 }, tax: { x: 2297, y: 539, width: 67, height: 5 }, other: { x: 2297, y: 639, width: 67, height: 2 },
        sm: { x: 2297, y: 728, width: 67, height: 38 }, product_development: { x: 2297, y: 902, width: 67, height: 26 }, ga: { x: 2297, y: 1075, width: 67, height: 11 }, provision_doubtful: { x: 2297, y: 1216, width: 67, height: 48 },
      },
      labels: makeLabels('en'),
    },
    nodes: [
      { id: 'marketplace', col: 0, order: 0, type: 'source', label: 'Intermediation services and advertising sales', value: 3.8, valueText: '$3.8B', notes: ['+39% Y/Y'], color: GOLD, labelColor: GOLD_LABEL, linkTint: GOLD_LINK },
      { id: 'shipping', col: 0, order: 1, type: 'source', label: 'Product sales and shipping fees', value: 1.1, valueText: '$1.1B', notes: ['+85% Y/Y'], color: LIME, labelColor: LIME, linkTint: LIME_LINK },
      { id: 'payments', col: 0, order: 2, type: 'source', label: 'Payment solution, installments, credit and debit card fees, and insurtech fees', value: 1.9, valueText: '$1.9B', notes: ['+32% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'pos', col: 0, order: 3, type: 'source', label: 'Point of sale devices', value: 0.018, valueText: '$18M', notes: ['+38% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'credit', col: 0, order: 4, type: 'source', label: 'Interest earned on loans and credit card transactions', value: 2.0, valueText: '$2.0B', notes: ['+76% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'commerce', col: 1, order: 0, type: 'hub', label: 'Commerce', value: 4.9, valueText: '$4.9B', notes: ['+47% Y/Y'], color: GOLD, labelColor: GOLD_LABEL, linkTint: GOLD_LINK },
      { id: 'fintech', col: 1, order: 1, type: 'hub', label: 'Fintech', value: 3.918, valueText: '$4.0B', notes: ['+51% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net Revenue', value: 8.8, valueText: '$8.8B', notes: ['+49% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.9, valueText: '$3.9B', notes: ['44% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, valueText: '$0.6B', notes: ['7% margin', '(6pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.3, valueText: '($3.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, valueText: '$0.4B', notes: ['5% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.032, valueText: '($32M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'Sales & Marketing', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 4, type: 'cost', label: 'Product Development', value: 0.7, valueText: '($0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'General & Admin', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'provision_doubtful', col: 5, order: 6, type: 'cost', label: 'Provision for doubtful accounts', value: 1.2, valueText: '($1.2B)', notes: ['Interest margin after losses 18%'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'marketplace', target: 'commerce', value: 3.8, width: 151, sourceWidth: 151, targetWidth: 151, sourceOrder: 0, targetOrder: 0, linkTint: GOLD_LINK },
      { source: 'shipping', target: 'commerce', value: 1.1, width: 42, sourceWidth: 42, targetWidth: 46, sourceOrder: 0, targetOrder: 1, linkTint: LIME_LINK },
      { source: 'payments', target: 'fintech', value: 1.9, width: 76, sourceWidth: 76, targetWidth: 76, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'pos', target: 'fintech', value: 0.018, width: 3, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'credit', target: 'fintech', value: 2.0, width: 80, sourceWidth: 80, targetWidth: 84, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'commerce', target: 'revenue', value: 4.9, width: 197, sourceWidth: 197, targetWidth: 196, sourceOrder: 0, targetOrder: 0, linkTint: GOLD_LINK },
      { source: 'fintech', target: 'revenue', value: 3.918, width: 161, sourceWidth: 161, targetWidth: 162, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 3.9, width: 156, sourceWidth: 156, targetWidth: 156, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.0, width: 202, sourceWidth: 202, targetWidth: 202, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, width: 22, sourceWidth: 22, targetWidth: 22, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.3, width: 130, sourceWidth: 134, targetWidth: 130, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, width: 15, sourceWidth: 15, targetWidth: 15, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 5, sourceWidth: 5, targetWidth: 5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.032, width: 2, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.0, width: 38, sourceWidth: 38, targetWidth: 38, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'product_development', value: 0.7, width: 26, sourceWidth: 26, targetWidth: 26, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.3, width: 11, sourceWidth: 11, targetWidth: 11, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'provision_doubtful', value: 1.2, width: 48, sourceWidth: 55, targetWidth: 48, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '美客多 · 2026 财年第一季度',
        meta: { title: '美客多 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleSize: 112, titleTextLength: 1500 },
        annotationsSvg: annotations('zh'),
        nodes: {
          marketplace: { label: '撮合服务与广告销售', notes: ['同比 +39%'] }, shipping: { label: '商品销售与配送费', notes: ['同比 +85%'] }, payments: { label: '支付及金融服务费用', notes: ['同比 +32%'] }, pos: { label: '销售点设备', notes: ['同比 +38%'] }, credit: { label: '贷款与信用卡利息收入', notes: ['同比 +76%'] },
          commerce: { label: '电商', notes: ['同比 +47%'] }, fintech: { label: '金融科技', notes: ['同比 +51%'] }, revenue: { label: '净收入', notes: ['同比 +49%'] }, gross_profit: { label: '毛利润', notes: ['利润率 44%', '同比 (3 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (6 个百分点)'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (4 个百分点)'] }, tax: { label: '税费' }, other: { label: '其他' }, sm: { label: '销售与营销' }, product_development: { label: '产品开发' }, ga: { label: '管理费用' }, provision_doubtful: { label: '坏账准备', notes: ['损失后利息利润率 18%'] },
        },
        layout: { labels: makeLabels('zh') },
      },
    },
  });
})();

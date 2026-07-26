/* Apple Q4 FY22 income statement ($B), measured from the native source image. */
(function () {
  const BG = '#f2f2f2';
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#b3b3b3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const APPLE_PATH =
    'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701';
  const applePath = (window.SANKEY_BRAND && window.SANKEY_BRAND.apple) || APPLE_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const appleGlyph = (x, y, size) =>
    `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="${BLACK}"><path d="${applePath}"/></g>`;

  function brandAnnotations() {
    return `<g data-typography-role="brand">
      ${appleGlyph(124, 468, 38)}
      <text x="171" y="512" font-family="Arial,sans-serif" font-size="57" font-weight="700" fill="${BLACK}">iPhone</text>
      ${appleGlyph(111, 997, 42)}
      <text x="160" y="1041" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(105, 1068, 42)}
      <text x="154" y="1111" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(84 1204)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'],
      productCost: '产品', serviceCost: '服务', net: '净利润', tax: '税费',
      other: '其他', rnd: '研发', sga: '销售、一般及行政',
      yoyUp10: '同比 +10%', yoyUp25: '同比 +25', yoyDown13: '同比 (13%)',
      yoyUp9: '同比 +9%', yoyUp5: '同比 +5%', yoyUp8: '同比 +8%',
      grossMargin: '利润率 42%', operatingMargin: '利润率 28%',
      netMargin: '利润率 23%', ppDown1: '同比 (1 个百分点)', ppDown2: '同比 (2 个百分点)',
      productMargin: '毛利率 35%', serviceMargin: '毛利率 70%',
      rndShare: '占收入 8%', sgaShare: '占收入 7%',
      macSub: 'Air、Pro、iMac', wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', net: 'Net profit', tax: 'Tax',
      other: 'Other', rnd: 'R&D', sga: 'SG&A', yoyUp10: '+10% Y/Y', yoyUp25: '+25 Y/Y',
      yoyDown13: '(13%) Y/Y', yoyUp9: '+9% Y/Y', yoyUp5: '+5% Y/Y', yoyUp8: '+8% Y/Y',
      grossMargin: '42% margin', operatingMargin: '28% margin', netMargin: '23% margin',
      ppDown1: '(1pp) Y/Y', ppDown2: '(2pp) Y/Y',
      productMargin: '35% gross margin', serviceMargin: '70% gross margin',
      rndShare: '8% of revenue', sgaShare: '7% of revenue',
      macSub: 'Air, Pro, iMac', wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(359, 334, [value(), note(t.yoyUp10)], 'start', 12)] },
      mac: { blocks: [
        block(356, 651, [value(), note(t.yoyUp25)], 'start', 12),
        block(110, 723, [name('MacBook', 56), note(t.macSub, 23)], 'start', 7),
      ] },
      ipad: { blocks: [
        block(367, 799, [value(), note(t.yoyDown13)], 'start', 12),
        block(220, 887, [name('iPad', 62)], 'start'),
      ] },
      wearables: { blocks: [
        block(390, 981, [value(), note(t.yoyUp10)], 'start', 12),
        block(255, 1129, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(794, 453, [name(t.products), value(), note(t.yoyUp9)], 'middle', 12)] },
      services: { blocks: [block(800, 1064, [name(t.services), value(), note(t.yoyUp5)], 'middle', 12)] },
      revenue: { blocks: [block(1162, 559, [name(t.revenue), value(), note(t.yoyUp8)], 'middle', 12)] },
      gross_profit: { blocks: [block(1525, 456, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin)], 'middle', 12)] },
      cost_of_revenue: { blocks: [block(1523, 1202, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9)] },
      operating_profit: { blocks: [block(1911, 325, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppDown1)], 'middle', 11)] },
      operating_expenses: { blocks: [block(1912, 852, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8)] },
      product_cost: { blocks: [block(1877, 1077, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'start', 9)] },
      service_cost: { blocks: [block(1879, 1239, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'start', 9)] },
      net_profit: { blocks: [block(2440, 348, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppDown2)], 'middle', 11)] },
      tax: { blocks: [block(2448, 613, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      other_expense: { blocks: [block(2448, 706, [cost(t.other, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [block(2448, 914, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27)], 'middle', 8)] },
      sga: { blocks: [block(2448, 1107, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27)], 'middle', 8)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q4-fy22',
    name: 'Apple · Q4 FY22',
    company: 'Apple',
    meta: {
      company: 'Apple', title: 'Apple Q4 FY22 Income Statement', period: 'Q4 FY22',
      periodNote: 'Ending Sept. 2022', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/apple-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 92, titleWeight: 800, titleTextLength: 2080,
      periodX: 2274, periodY: 250, periodNoteY: 292,
      logoWidth: 280, logoHeight: 270, logoY: 232, logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: '#666666', label: NOTE }, hub: { node: '#666666', label: NOTE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations(),
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 385, y: 428, width: 71, height: 169 },
        mac: { x: 385, y: 745, width: 71, height: 44 },
        ipad: { x: 388, y: 915, width: 71, height: 27 },
        wearables: { x: 388, y: 1071, width: 71, height: 37 },
        products: { x: 759, y: 595, width: 70, height: 285 },
        services: { x: 764, y: 1215, width: 70, height: 75 },
        revenue: { x: 1127, y: 702, width: 70, height: 362 },
        gross_profit: { x: 1491, y: 601, width: 70, height: 151 },
        cost_of_revenue: { x: 1488, y: 971, width: 70, height: 208 },
        operating_profit: { x: 1876, y: 508, width: 70, height: 99 },
        operating_expenses: { x: 1876, y: 780, width: 70, height: 51 },
        product_cost: { x: 1751, y: 1034, width: 70, height: 185 },
        service_cost: { x: 1753, y: 1276, width: 70, height: 22 },
        net_profit: { x: 2236, y: 426, width: 71, height: 82 },
        tax: { x: 2239, y: 646, width: 71, height: 14 },
        other_expense: { x: 2239, y: 728, width: 71, height: 2 },
        rnd: { x: 2239, y: 941, width: 71, height: 25 },
        sga: { x: 2239, y: 1145, width: 71, height: 24 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 42.6, notes: ['+10% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'MacBook', value: 11.5, notes: ['+25 Y/Y', 'Air, Pro, iMac'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 7.2, notes: ['(13%) Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: 'Wearables, Home, and Accessories', value: 9.7, notes: ['+10% Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 71.0, valueText: '$71.0B', notes: ['+9% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 19.2, notes: ['+5% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 90.1, notes: ['+8% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 38.1, notes: ['42% margin'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: 'Cost of revenue', value: 52.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 24.9, notes: ['28% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 13.2 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 46.4, notes: ['35% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 5.7, notes: ['70% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 20.7, notes: ['23% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 3.9 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.2 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 6.8, notes: ['8% of revenue'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 6.4, notes: ['7% of revenue'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 42.6, sourceWidth: 169, targetWidth: 171, y0: 512.5, y1: 680.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 11.5, sourceWidth: 44, targetWidth: 46, y0: 767, y1: 789, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 7.2, sourceWidth: 27, targetWidth: 29, y0: 928.5, y1: 826.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 9.7, sourceWidth: 37, targetWidth: 39, y0: 1089.5, y1: 860.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 71.0, sourceWidth: 285, targetWidth: 287, y0: 737.5, y1: 845.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 19.2, sourceWidth: 75, targetWidth: 75, y0: 1252.5, y1: 1026.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 38.1, sourceWidth: 154, targetWidth: 151, y0: 779, y1: 676.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 52.1, sourceWidth: 208, targetWidth: 208, y0: 960, y1: 1075, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 24.9, sourceWidth: 100, targetWidth: 99, y0: 651, y1: 557.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 13.2, sourceWidth: 51, targetWidth: 51, y0: 726.5, y1: 805.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 20.7, sourceWidth: 82, targetWidth: 82, y0: 549, y1: 467, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3.9, sourceWidth: 14, targetWidth: 14, y0: 598, y1: 653, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 606, y1: 729, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 6.8, sourceWidth: 26, targetWidth: 25, y0: 793, y1: 953.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.4, sourceWidth: 25, targetWidth: 24, y0: 818.5, y1: 1157, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 46.4, sourceWidth: 188, targetWidth: 185, y0: 1065, y1: 1126.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 5.7, sourceWidth: 20, targetWidth: 22, y0: 1169, y1: 1287, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2022 财年第四季度',
        meta: {
          title: 'Apple 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 9 月',
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +10%'] },
          mac: { label: 'MacBook', notes: ['同比 +25', 'Air、Pro、iMac'] },
          ipad: { label: 'iPad', notes: ['同比 (13%)'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 +10%'] },
          products: { label: '产品', notes: ['同比 +9%'] },
          services: { label: '服务', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 42%'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 35%'] },
          service_cost: { label: '服务', notes: ['毛利率 70%'] },
          net_profit: { label: '净利润', notes: ['利润率 23%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 8%'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

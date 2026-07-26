/* Apple Q3 FY25 income statement ($B), measured from the Build Source. */
(function () {
  const BG = '#f2f2f2';
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const OTHER_FACE = '#cf9999';
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
      ${appleGlyph(98, 488, 40)}
      <text x="144" y="538" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      <text x="220" y="943" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="${BLACK}">iPad</text>
      ${appleGlyph(98, 1012, 42)}
      <text x="148" y="1055" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1085, 42)}
      <text x="148" y="1125" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(78 1242)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operating: '营业利润', expenses: ['运营', '费用'], productCost: '产品', serviceCost: '服务',
      net: '净利润', tax: '税费', other: '其他', rnd: '研发', sga: '销售、一般及行政',
      yoy13: '同比 +13%', yoy15: '同比 +15%', yoyDown8: '同比 (8%)', yoyDown9: '同比 (9%)',
      yoy8: '同比 +8%', yoy10: '同比 +10%', grossMargin: '利润率 46%', operatingMargin: '利润率 30%',
      netMargin: '利润率 25%', ppZero: '同比 +0 个百分点', ppZeroDown: '同比 (0 个百分点)',
      productMargin: '毛利率 35%', serviceMargin: '毛利率 76%', rndShare: '占收入 9%',
      sgaShare: '占收入 7%', macSub: 'Air、Pro、Mini', wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', net: 'Net profit', tax: 'Tax', other: 'Other',
      rnd: 'R&D', sga: 'SG&A', yoy13: '+13% Y/Y', yoy15: '+15% Y/Y', yoyDown8: '(8%) Y/Y',
      yoyDown9: '(9%) Y/Y', yoy8: '+8% Y/Y', yoy10: '+10% Y/Y', grossMargin: '46% margin',
      operatingMargin: '30% margin', netMargin: '25% margin', ppZero: '+0pp Y/Y',
      ppZeroDown: '(0pp) Y/Y', productMargin: '35% gross margin', serviceMargin: '76% gross margin',
      rndShare: '9% of revenue', sgaShare: '7% of revenue', macSub: 'Air, Pro, Mini',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(364, 321, [value(), note(t.yoy13)], 'start', 12)] },
      mac: { blocks: [
        block(365, 645, [value(), note(t.yoy15)], 'start', 12),
        block(212, 718, [name('Mac', 69), note(t.macSub, 24)], 'start', 7),
      ] },
      ipad: { blocks: [
        block(373, 818, [value(), note(t.yoyDown8)], 'start', 12),
      ] },
      wearables: { blocks: [
        block(373, 1006, [value(), note(t.yoyDown9)], 'start', 12),
        block(210, 1146, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(792, 425, [name(t.products), value(), note(t.yoy8)], 'middle', 12)] },
      services: { blocks: [block(792, 1085, [name(t.services), value(), note(t.yoy13)], 'middle', 12)] },
      revenue: { blocks: [block(1166, 561, [name(t.revenue), value(), note(t.yoy10)], 'middle', 12)] },
      gross_profit: { blocks: [
        block(1539, 390, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppZero)], 'middle', 12),
      ] },
      cost_of_revenue: { blocks: [
        block(1540, 1224, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9),
      ] },
      operating_profit: { blocks: [
        block(1915, 312, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppZero)], 'middle', 11),
      ] },
      operating_expenses: { blocks: [
        block(1912, 865, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8),
      ] },
      product_cost: { blocks: [
        block(1919, 1086, [cost(t.productCost), value(RED_LABEL, 31)], 'start', 9),
        block(1986, 1168, [note(t.productMargin, 27)], 'middle', 9),
      ] },
      service_cost: { blocks: [
        block(1929, 1265, [cost(t.serviceCost), value(RED_LABEL, 31)], 'start', 9),
        block(1989, 1347, [note(t.serviceMargin, 27)], 'middle', 9),
      ] },
      net_profit: { blocks: [
        block(2354, 410, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppZeroDown)], 'start', 11),
      ] },
      tax: { blocks: [block(2447, 617, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      other_expense: { blocks: [block(2447, 732, [cost(t.other, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [
        block(2447, 887, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27), note(t.ppZero, 27)], 'middle', 8),
      ] },
      sga: { blocks: [
        block(2447, 1157, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27), note(t.ppZeroDown, 27)], 'middle', 8),
      ] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q3-fy25',
    name: 'Apple · Q3 FY25',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending June 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 168,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: 2420,
      periodY: 268,
      periodNoteY: 324,
      logoWidth: 280,
      logoHeight: 270,
      logoY: 242,
      logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations(),
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 384, y: 413, width: 71, height: 175 },
        mac: { x: 384, y: 750, width: 71, height: 30 },
        ipad: { x: 384, y: 922, width: 71, height: 25 },
        wearables: { x: 384, y: 1102, width: 71, height: 28 },
        products: { x: 758, y: 572, width: 70, height: 263 },
        services: { x: 758, y: 1232, width: 70, height: 108 },
        revenue: { x: 1132, y: 703, width: 70, height: 372 },
        gross_profit: { x: 1505, y: 572, width: 71, height: 171 },
        cost_of_revenue: { x: 1505, y: 1006, width: 71, height: 198 },
        operating_profit: { x: 1879, y: 496, width: 71, height: 109 },
        operating_expenses: { x: 1879, y: 781, width: 71, height: 59 },
        product_cost: { x: 1784, y: 1051, width: 70, height: 171 },
        service_cost: { x: 1784, y: 1311, width: 70, height: 24 },
        net_profit: { x: 2252, y: 411, width: 71, height: 90 },
        tax: { x: 2252, y: 661, width: 71, height: 16 },
        other_expense: { x: 2252, y: 772, width: 71, height: 1 },
        rnd: { x: 2252, y: 907, width: 71, height: 33 },
        sga: { x: 2252, y: 1181, width: 71, height: 24 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 44.6, notes: ['+13% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'Mac', value: 8.0, valueText: '$8.0B', notes: ['+15% Y/Y', 'Air, Pro, Mini'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 6.6, notes: ['(8%) Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 7.4, notes: ['(9%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 66.6, notes: ['+8% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 27.4, notes: ['+13% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 94.0, valueText: '$94.0B', notes: ['+10% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 43.7, notes: ['46% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 50.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 28.2, notes: ['30% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.5 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 43.6, notes: ['35% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.7, notes: ['76% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 23.4, notes: ['25% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.6 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.2, color: OTHER_FACE, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 8.9, notes: ['9% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 6.6, notes: ['7% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 44.6, sourceWidth: 175, targetWidth: 178, y0: 500.5, y1: 661, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 8.0, sourceWidth: 30, targetWidth: 32, y0: 765, y1: 766, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 6.6, sourceWidth: 25, targetWidth: 25, y0: 934.5, y1: 794.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 7.4, sourceWidth: 28, targetWidth: 28, y0: 1116, y1: 821, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 66.6, sourceWidth: 263, targetWidth: 266, y0: 703.5, y1: 836, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 27.4, sourceWidth: 108, targetWidth: 106, y0: 1286, y1: 1022, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 43.7, sourceWidth: 174, targetWidth: 170, y0: 790, y1: 657, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 50.3, sourceWidth: 198, targetWidth: 198, y0: 976, y1: 1105, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 28.2, sourceWidth: 110, targetWidth: 109, y0: 627, y1: 550.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.5, sourceWidth: 61, targetWidth: 59, y0: 712.5, y1: 810.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 23.4, sourceWidth: 92, targetWidth: 90, y0: 542, y1: 456, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.6, sourceWidth: 16, targetWidth: 16, y0: 596, y1: 669, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.2, sourceWidth: 1, targetWidth: 1, y0: 604.5, y1: 772.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.9, sourceWidth: 35, targetWidth: 33, y0: 798.5, y1: 923.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.6, sourceWidth: 24, targetWidth: 24, y0: 828, y1: 1193, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 43.6, sourceWidth: 171, targetWidth: 171, y0: 1091.5, y1: 1136.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.7, sourceWidth: 27, targetWidth: 24, y0: 1190.5, y1: 1323, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2025 财年第三季度',
        meta: {
          title: 'Apple 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 6 月',
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +13%'] },
          mac: { label: 'Mac', notes: ['同比 +15%', 'Air、Pro、Mini'] },
          ipad: { label: 'iPad', notes: ['同比 (8%)'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (9%)'] },
          products: { label: '产品', notes: ['同比 +8%'] },
          services: { label: '服务', notes: ['同比 +13%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 35%'] },
          service_cost: { label: '服务', notes: ['毛利率 76%'] },
          net_profit: { label: '净利润', notes: ['利润率 25%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: brandAnnotations(),
      },
    },
  });
})();

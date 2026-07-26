/* Apple Q4 FY24 income statement ($B), measured from the native source image. */
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
      ${appleGlyph(98, 477, 40)}
      <text x="144" y="519" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      ${appleGlyph(98, 966, 42)}
      <text x="148" y="1005" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1039, 42)}
      <text x="148" y="1078" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(78 1200)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operating: '营业利润', expenses: ['运营', '费用'], productCost: '产品', serviceCost: '服务',
      net: '净利润', tax: '税费', rnd: '研发', sga: '销售、一般及行政',
      yoy6: '同比 +6%', yoy2: '同比 +2%', yoy8: '同比 +8%', yoyDown3: '同比 (3%)',
      yoy4: '同比 +4%', yoy12: '同比 +12%', grossMargin: '利润率 46%',
      operatingMargin: '利润率 31%', netMargin: '利润率 16%', ppUp1: '同比 +1 个百分点',
      ppDown10: '同比 (10 个百分点)', productMargin: '毛利率 36%', serviceMargin: '毛利率 74%',
      rndShare: '占收入 9%', sgaShare: '占收入 7%', ppZero: '同比 +0 个百分点',
      ppZeroParen: '同比 (0 个百分点)', macSub: 'Air、Pro、iMac',
      wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', net: 'Net profit', tax: 'Tax', rnd: 'R&D',
      sga: 'SG&A', yoy6: '+6% Y/Y', yoy2: '+2% Y/Y', yoy8: '+8% Y/Y', yoyDown3: '(3%) Y/Y',
      yoy4: '+4% Y/Y', yoy12: '+12% Y/Y', grossMargin: '46% margin', operatingMargin: '31% margin',
      netMargin: '16% margin', ppUp1: '+1pp Y/Y', ppDown10: '(10pp) Y/Y',
      productMargin: '36% gross margin', serviceMargin: '74% gross margin', rndShare: '9% of revenue',
      sgaShare: '7% of revenue', ppZero: '+0pp Y/Y', ppZeroParen: '(0pp) Y/Y',
      macSub: 'Air, Pro, iMac', wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(363, 322, [value(), note(t.yoy6)], 'start', 12)] },
      mac: { blocks: [
        block(373, 624, [value(), note(t.yoy2)], 'start', 12),
        block(104, 683, [name('MacBook', 57), note(t.macSub, 24)], 'start', 7),
      ] },
      ipad: { blocks: [
        block(373, 764, [value(), note(t.yoy8)], 'start', 12),
        block(221, 851, [name('iPad', 62)], 'start'),
      ] },
      wearables: { blocks: [
        block(373, 951, [value(), note(t.yoyDown3)], 'start', 12),
        block(221, 1098, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(800, 431, [name(t.products), value(), note(t.yoy4)], 'middle', 12)] },
      services: { blocks: [block(797, 1048, [name(t.services), value(), note(t.yoy12)], 'middle', 12)] },
      revenue: { blocks: [block(1174, 549, [name(t.revenue), value(), note(t.yoy6)], 'middle', 12)] },
      gross_profit: { blocks: [
        block(1545, 398, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppUp1)], 'middle', 12),
      ] },
      cost_of_revenue: { blocks: [
        block(1545, 1184, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9),
      ] },
      operating_profit: { blocks: [
        block(1929, 312, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppUp1)], 'middle', 11),
      ] },
      operating_expenses: { blocks: [
        block(1922, 873, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8),
      ] },
      product_cost: { blocks: [
        block(1833, 1075, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'start', 9),
      ] },
      service_cost: { blocks: [
        block(1839, 1250, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'start', 9),
      ] },
      net_profit: { blocks: [
        block(2352, 382, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppDown10)], 'start', 11),
      ] },
      tax: { blocks: [block(2447, 640, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [
        block(2447, 847, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27), note(t.ppZero, 27)], 'middle', 8),
      ] },
      sga: { blocks: [
        block(2450, 1078, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27), note(t.ppZeroParen, 27)], 'middle', 8),
      ] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q4-fy24',
    name: 'Apple · Q4 FY24',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Sept. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: 2420,
      periodY: 270,
      periodNoteY: 325,
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
        iphone: { x: 387, y: 416, width: 71, height: 167 },
        mac: { x: 387, y: 715, width: 71, height: 26 },
        ipad: { x: 387, y: 876, width: 71, height: 23 },
        wearables: { x: 387, y: 1042, width: 71, height: 32 },
        products: { x: 761, y: 576, width: 70, height: 254 },
        services: { x: 763, y: 1195, width: 70, height: 89 },
        revenue: { x: 1135, y: 692, width: 70, height: 345 },
        gross_profit: { x: 1509, y: 581, width: 70, height: 157 },
        cost_of_revenue: { x: 1509, y: 981, width: 70, height: 185 },
        operating_profit: { x: 1887, y: 493, width: 71, height: 107 },
        operating_expenses: { x: 1885, y: 800, width: 70, height: 50 },
        product_cost: { x: 1732, y: 1041, width: 70, height: 162 },
        service_cost: { x: 1735, y: 1279, width: 70, height: 21 },
        net_profit: { x: 2255, y: 422, width: 71, height: 51 },
        tax: { x: 2255, y: 646, width: 71, height: 52 },
        rnd: { x: 2255, y: 869, width: 71, height: 26 },
        sga: { x: 2255, y: 1102, width: 71, height: 23 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 46.2, notes: ['+6% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'MacBook', value: 7.7, notes: ['+2% Y/Y', 'Air, Pro, iMac'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 7.0, valueText: '$7.0B', notes: ['+8% Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 9.0, valueText: '$9.0B', notes: ['(3%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 70.0, valueText: '$70.0B', notes: ['+4% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 25.0, valueText: '$25.0B', notes: ['+12% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 94.9, notes: ['+6% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 43.9, notes: ['46% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 51.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 29.6, notes: ['31% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.3 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 44.6, notes: ['36% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.5, notes: ['74% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 14.7, notes: ['16% margin', '(10pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 14.9 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 7.8, notes: ['9% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 6.5, notes: ['7% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 46.2, sourceWidth: 167, targetWidth: 167, y0: 499.5, y1: 659.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 7.7, sourceWidth: 26, targetWidth: 26, y0: 728, y1: 755.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 7.0, sourceWidth: 23, targetWidth: 23, y0: 887.5, y1: 780.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 9.0, sourceWidth: 32, targetWidth: 38, y0: 1058, y1: 811, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 70.0, sourceWidth: 254, targetWidth: 254, y0: 703, y1: 819, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 25.0, sourceWidth: 89, targetWidth: 91, y0: 1239.5, y1: 991.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 43.9, sourceWidth: 162, targetWidth: 157, y0: 773, y1: 659.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 51.1, sourceWidth: 183, targetWidth: 185, y0: 945.5, y1: 1073.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 29.6, sourceWidth: 105, targetWidth: 107, y0: 633.5, y1: 546.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.3, sourceWidth: 52, targetWidth: 50, y0: 712, y1: 825, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 14.7, sourceWidth: 53, targetWidth: 51, y0: 519.5, y1: 447.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 14.9, sourceWidth: 54, targetWidth: 52, y0: 573, y1: 672, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.8, sourceWidth: 26, targetWidth: 26, y0: 813, y1: 882, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.5, sourceWidth: 24, targetWidth: 23, y0: 838, y1: 1113.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 44.6, sourceWidth: 162, targetWidth: 162, y0: 1062, y1: 1122, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.5, sourceWidth: 23, targetWidth: 21, y0: 1154.5, y1: 1289.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2024 财年第四季度',
        meta: {
          title: 'Apple 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 9 月',
          titleSize: 92,
          titleTextLength: 1780,
        },
        annotationsSvg: brandAnnotations(),
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +6%'] },
          mac: { label: 'MacBook', notes: ['同比 +2%', 'Air、Pro、iMac'] },
          ipad: { label: 'iPad', notes: ['同比 +8%'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (3%)'] },
          products: { label: '产品', notes: ['同比 +4%'] },
          services: { label: '服务', notes: ['同比 +12%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 36%'] },
          service_cost: { label: '服务', notes: ['毛利率 74%'] },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 (10 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

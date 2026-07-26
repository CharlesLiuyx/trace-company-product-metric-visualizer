/* Apple Q4 FY23 income statement ($B), measured from the native Source image. */
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
  const appleGlyph = (x, y, size) => `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="${BLACK}"><path d="${applePath}"/></g>`;

  function brandAnnotations() {
    return `<g data-typography-role="brand">
      ${appleGlyph(98, 423, 40)}
      <text x="144" y="464" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      ${appleGlyph(98, 979, 42)}
      <text x="148" y="1017" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1048, 42)}
      <text x="148" y="1087" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(78 1192)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operating: '营业利润', expenses: ['运营', '费用'], productCost: '产品', serviceCost: '服务',
      net: '净利润', tax: '税费', rnd: '研发', sga: '销售、一般及行政',
      yoyUp3: '同比 +3%', yoyDown34: '同比 (34%)', yoyDown10: '同比 (10%)',
      yoyDown3: '同比 (3%)', yoyDown5: '同比 (5%)', yoyUp16: '同比 +16%',
      yoyDown1: '同比 (1%)', grossMargin: '利润率 45%', operatingMargin: '利润率 30%',
      netMargin: '利润率 26%', ppUp3: '同比 +3 个百分点', productMargin: '毛利率 37%',
      serviceMargin: '毛利率 71%', rndShare: '占收入 8%', sgaShare: '占收入 7%',
      macSub: 'Air、Pro、iMac', wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', net: 'Net profit', tax: 'Tax', rnd: 'R&D',
      sga: 'SG&A', yoyUp3: '+3% Y/Y', yoyDown34: '(34%) Y/Y', yoyDown10: '(10%) Y/Y',
      yoyDown3: '(3%) Y/Y', yoyDown5: '(5%) Y/Y', yoyUp16: '+16% Y/Y', yoyDown1: '(1%) Y/Y',
      grossMargin: '45% margin', operatingMargin: '30% margin', netMargin: '26% margin',
      ppUp3: '+3pp Y/Y', productMargin: '37% gross margin', serviceMargin: '71% gross margin',
      rndShare: '8% of revenue', sgaShare: '7% of revenue', macSub: 'Air, Pro, iMac',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(374, 270, [value(), note(t.yoyUp3)], 'start', 12)] },
      mac: { blocks: [
        block(375, 592, [value(), note(t.yoyDown34)], 'start', 12),
        block(115, 654, [name('MacBook', 59), note(t.macSub, 23)], 'start', 7),
      ] },
      ipad: { blocks: [
        block(375, 764, [value(), note(t.yoyDown10)], 'start', 12),
        block(229, 852, [name('iPad', 64)], 'start'),
      ] },
      wearables: { blocks: [
        block(372, 972, [value(), note(t.yoyDown3)], 'start', 12),
        block(229, 1109, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(799, 414, [name(t.products), value(), note(t.yoyDown5)], 'middle', 12)] },
      services: { blocks: [block(798, 1057, [name(t.services), value(), note(t.yoyUp16)], 'middle', 12)] },
      revenue: { blocks: [block(1172, 523, [name(t.revenue), value(), note(t.yoyDown1)], 'middle', 12)] },
      gross_profit: { blocks: [block(1548, 374, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppUp3)], 'middle', 12)] },
      cost_of_revenue: { blocks: [block(1543, 1138, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9)] },
      operating_profit: { blocks: [block(1930, 289, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppUp3)], 'middle', 11)] },
      operating_expenses: { blocks: [block(1928, 831, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8)] },
      product_cost: { blocks: [block(1891, 1014, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'start', 9)] },
      service_cost: { blocks: [block(1913, 1211, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'start', 9)] },
      net_profit: { blocks: [block(2387, 350, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppUp3)], 'start', 11)] },
      tax: { blocks: [block(2485, 641, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [block(2485, 866, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27)], 'middle', 8)] },
      sga: { blocks: [block(2488, 1071, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27)], 'middle', 8)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q4-fy23',
    name: 'Apple · Q4 FY23',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Sept. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 168,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: 1333,
      periodY: 1309,
      periodNoteY: 1359,
      logoWidth: 280,
      logoHeight: 270,
      logoY: 222,
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
        iphone: { x: 389, y: 362, width: 71, height: 167 },
        mac: { x: 389, y: 686, width: 71, height: 28 },
        ipad: { x: 389, y: 879, width: 71, height: 22 },
        wearables: { x: 389, y: 1066, width: 71, height: 34 },
        products: { x: 765, y: 556, width: 70, height: 258 },
        services: { x: 763, y: 1202, width: 70, height: 83 },
        revenue: { x: 1137, y: 667, width: 70, height: 343 },
        gross_profit: { x: 1513, y: 560, width: 70, height: 154 },
        cost_of_revenue: { x: 1508, y: 930, width: 70, height: 186 },
        operating_profit: { x: 1894, y: 475, width: 71, height: 102 },
        operating_expenses: { x: 1897, y: 760, width: 70, height: 49 },
        product_cost: { x: 1769, y: 983, width: 70, height: 161 },
        service_cost: { x: 1774, y: 1240, width: 70, height: 23 },
        net_profit: { x: 2257, y: 373, width: 71, height: 87 },
        tax: { x: 2257, y: 665, width: 71, height: 14 },
        rnd: { x: 2257, y: 891, width: 71, height: 25 },
        sga: { x: 2257, y: 1101, width: 71, height: 22 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 43.8, notes: ['+3% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'MacBook', value: 7.6, notes: ['(34%) Y/Y', 'Air, Pro, iMac'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 6.4, notes: ['(10%) Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 9.3, notes: ['(3%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 67.2, notes: ['(5%) Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 22.3, notes: ['+16% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 89.5, notes: ['(1%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 40.4, notes: ['45% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 49.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 27.0, valueText: '$27.0B', notes: ['30% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 13.5 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 42.6, notes: ['37% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.5, notes: ['71% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 23.0, valueText: '$23.0B', notes: ['26% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.0, valueText: '($4.0B)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 7.3, notes: ['8% of revenue'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 6.2, notes: ['7% of revenue'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 43.8, sourceWidth: 167, targetWidth: 168, y0: 445.5, y1: 640, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 7.6, sourceWidth: 28, targetWidth: 29, y0: 700, y1: 738.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 6.4, sourceWidth: 22, targetWidth: 24, y0: 890, y1: 765, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 9.3, sourceWidth: 34, targetWidth: 37, y0: 1083, y1: 794.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 67.2, sourceWidth: 258, targetWidth: 260, y0: 685, y1: 797, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 22.3, sourceWidth: 83, targetWidth: 83, y0: 1243.5, y1: 968.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 40.4, sourceWidth: 154, targetWidth: 154, y0: 744, y1: 637, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 49.1, sourceWidth: 189, targetWidth: 186, y0: 915.5, y1: 1023, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 27.0, sourceWidth: 102, targetWidth: 102, y0: 611, y1: 526, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 13.5, sourceWidth: 52, targetWidth: 49, y0: 688, y1: 784.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 23.0, sourceWidth: 87, targetWidth: 87, y0: 518.5, y1: 416.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.0, sourceWidth: 15, targetWidth: 14, y0: 569.5, y1: 672, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.3, sourceWidth: 25, targetWidth: 25, y0: 772.5, y1: 903.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.2, sourceWidth: 24, targetWidth: 22, y0: 797, y1: 1112, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 42.6, sourceWidth: 163, targetWidth: 161, y0: 1011.5, y1: 1063.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.5, sourceWidth: 23, targetWidth: 23, y0: 1104.5, y1: 1251.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2023 财年第四季度',
        meta: {
          title: 'Apple 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 9 月',
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +3%'] },
          mac: { label: 'MacBook', notes: ['同比 (34%)', 'Air、Pro、iMac'] },
          ipad: { label: 'iPad', notes: ['同比 (10%)'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (3%)'] },
          products: { label: '产品', notes: ['同比 (5%)'] },
          services: { label: '服务', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 37%'] },
          service_cost: { label: '服务', notes: ['毛利率 71%'] },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 8%'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: brandAnnotations(),
      },
    },
  });
})();

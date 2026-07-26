/* Apple Q2 FY23 income statement ($B), measured from the native Source. */
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
    return `
      <g data-typography-role="brand">
        ${appleGlyph(126, 490, 40)}
        <text x="174" y="535" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      </g>
      <g data-typography-role="brand">
        ${appleGlyph(105, 1017, 38)}
        <text x="150" y="1059" font-family="Arial,sans-serif" font-size="50" font-weight="800" fill="${BLACK}">WATCH</text>
        ${appleGlyph(95, 1091, 38)}
        <text x="140" y="1132" font-family="Arial,sans-serif" font-size="50" font-weight="500" fill="${BLACK}">AirPods</text>
      </g>
      <g data-typography-role="brand" data-annotation-clearance="apple-services-icon-cluster"
         transform="translate(78 1258)">${businessIcons.appleServicesCluster || ''}</g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operating: '营业利润', expenses: ['运营', '费用'], productCost: '产品', serviceCost: '服务',
      other: '其他', net: '净利润', tax: '税费', rnd: '研发', sga: '销售、一般及行政',
      yoy2: '同比 +2%', yoyDown31: '同比 (31%)', yoyDown13: '同比 (13%)', yoyDown1: '同比 (1%)',
      yoyDown5: '同比 (5%)', yoy5: '同比 +5%', yoyDown3: '同比 (3%)',
      grossMargin: '利润率 44%', operatingMargin: '利润率 30%', netMargin: '利润率 25%',
      ppUp: '同比 +1 个百分点', ppDown: '同比 (1 个百分点)', ppZero: '同比 (0 个百分点)',
      productMargin: '毛利率 37%', serviceMargin: '毛利率 71%',
      rndShare: '占收入 8%', sgaShare: '占收入 7%', macSub: 'Air、Pro、iMac',
      wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', other: 'Other', net: 'Net profit',
      tax: 'Tax', rnd: 'R&D', sga: 'SG&A', yoy2: '+2% Y/Y', yoyDown31: '(31%) Y/Y',
      yoyDown13: '(13%) Y/Y', yoyDown1: '(1%) Y/Y', yoyDown5: '(5%) Y/Y', yoy5: '+5% Y/Y',
      yoyDown3: '(3%) Y/Y', grossMargin: '44% margin', operatingMargin: '30% margin',
      netMargin: '25% margin', ppUp: '+1pp Y/Y', ppDown: '(1pp) Y/Y', ppZero: '(0pp) Y/Y',
      productMargin: '37% gross margin', serviceMargin: '71% gross margin',
      rndShare: '8% of revenue', sgaShare: '7% of revenue', macSub: 'Air, Pro, iMac',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(353, 320, [value(), note(t.yoy2)], 'start', 12)] },
      mac: { blocks: [
        block(368, 684, [value(), note(t.yoyDown31)], 'start', 12),
        block(104, 744, [name('MacBook', 57), note(t.macSub, 24)], 'start', 7),
      ] },
      ipad: { blocks: [
        block(368, 844, [value(), note(t.yoyDown13)], 'start', 12),
        block(220, 916, [name('iPad', 64)], 'start'),
      ] },
      wearables: { blocks: [
        block(362, 1022, [value(), note(t.yoyDown1)], 'start', 12),
        block(216, 1156, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(807, 450, [name(t.products), value(), note(t.yoyDown5)], 'middle', 12)] },
      services: { blocks: [block(792, 1117, [name(t.services), value(), note(t.yoy5)], 'middle', 12)] },
      revenue: { blocks: [block(1165, 584, [name(t.revenue), value(), note(t.yoyDown3)], 'middle', 12)] },
      gross_profit: { blocks: [block(1570, 410, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppUp)], 'middle', 12)] },
      cost_of_revenue: { blocks: [block(1564, 1221, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9)] },
      operating_profit: { blocks: [block(1926, 313, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppDown)], 'middle', 11)] },
      operating_expenses: { blocks: [block(1928, 864, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8)] },
      product_cost: { blocks: [block(1988, 1086, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'middle', 9)] },
      service_cost: { blocks: [block(1988, 1262, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'middle', 9)] },
      other_income: { blocks: [block(2180, 589, [name(t.other, 31, GREEN_LABEL), value(GREEN_LABEL, 31)], 'middle', 0)] },
      net_profit: { blocks: [block(2432, 394, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppZero)], 'middle', 11)] },
      tax: { blocks: [block(2426, 661, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [block(2427, 887, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27)], 'middle', 8)] },
      sga: { blocks: [block(zh ? 2460 : 2428, 1084, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27)], 'middle', 8)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q2-fy23',
    name: 'Apple · Q2 FY23',
    company: 'Apple',
    meta: {
      company: 'Apple', title: 'Apple Q2 FY23 Income Statement', period: 'Q2 FY23',
      periodNote: 'Ending Mar. 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/apple-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1332, titleY: 199, titleSize: 133, titleWeight: 800, titleTextLength: 2079,
      periodX: 2274, periodY: 252, periodNoteY: 292,
      logoWidth: 280, logoHeight: 270, logoY: 242, logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: '#666666', label: BLACK }, hub: { node: '#666666', label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations(),
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 381, y: 411, width: 72, height: 216 },
        mac: { x: 381, y: 775, width: 72, height: 28 },
        ipad: { x: 381, y: 942, width: 72, height: 27 },
        wearables: { x: 381, y: 1112, width: 72, height: 35 },
        products: { x: 757, y: 596, width: 72, height: 310 },
        services: { x: 755, y: 1262, width: 72, height: 87 },
        revenue: { x: 1129, y: 728, width: 72, height: 401 },
        gross_profit: { x: 1533, y: 598, width: 72, height: 175 },
        cost_of_revenue: { x: 1535, y: 987, width: 72, height: 222 },
        operating_profit: { x: 1889, y: 493, width: 72, height: 118 },
        operating_expenses: { x: 1891, y: 796, width: 72, height: 55 },
        product_cost: { x: 1786, y: 1057, width: 72, height: 197 },
        service_cost: { x: 1784, y: 1310, width: 72, height: 24 },
        other_income: { x: 2146, y: 575, width: 70, height: 1 },
        net_profit: { x: 2249, y: 411, width: 72, height: 101 },
        tax: { x: 2249, y: 686, width: 72, height: 16 },
        rnd: { x: 2249, y: 925, width: 72, height: 30 },
        sga: { x: 2249, y: 1110, width: 72, height: 25 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 51.3, notes: ['+2% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'MacBook', value: 7.2, notes: ['(31%) Y/Y', 'Air, Pro, iMac'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 6.7, notes: ['(13%) Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 8.8, notes: ['(1%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 73.9, notes: ['(5%) Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 20.9, notes: ['+5% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 94.8, notes: ['(3%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 42.0, valueText: '$42.0B', notes: ['44% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 52.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 28.3, notes: ['30% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 13.7 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 46.8, notes: ['37% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.1, notes: ['71% gross margin'] },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.1 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 24.2, notes: ['25% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 4.2 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 7.5, notes: ['8% of revenue'] },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 6.2, notes: ['7% of revenue'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 51.3, sourceWidth: 216, targetWidth: 216, y0: 519, y1: 704, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 7.2, sourceWidth: 28, targetWidth: 28, y0: 789, y1: 826, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 6.7, sourceWidth: 27, targetWidth: 27, y0: 955.5, y1: 853.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 8.8, sourceWidth: 35, targetWidth: 39, y0: 1129.5, y1: 886.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 73.9, sourceWidth: 310, targetWidth: 314, y0: 751, y1: 885, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 20.9, sourceWidth: 87, targetWidth: 87, y0: 1305.5, y1: 1085.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 42.0, sourceWidth: 177, targetWidth: 175, y0: 816.5, y1: 685.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 52.9, sourceWidth: 223, targetWidth: 222, y0: 1017.5, y1: 1098, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 28.3, sourceWidth: 118, targetWidth: 118, y0: 657, y1: 552, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 13.7, sourceWidth: 57, targetWidth: 55, y0: 744.5, y1: 823.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 24.2, sourceWidth: 101, targetWidth: 100, y0: 543.5, y1: 461, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 4.2, sourceWidth: 17, targetWidth: 16, y0: 602.5, y1: 694, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 575.5, y1: 511.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 7.5, sourceWidth: 30, targetWidth: 30, y0: 811, y1: 940, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 6.2, sourceWidth: 25, targetWidth: 25, y0: 838.5, y1: 1122.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cost', value: 46.8, sourceWidth: 197, targetWidth: 197, y0: 1085.5, y1: 1155.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.1, sourceWidth: 24, targetWidth: 24, y0: 1197, y1: 1322, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['iPhone', 'WATCH', 'AirPods', 'tv'],
      zh: {
        name: 'Apple · 2023 财年第二季度',
        meta: {
          title: 'Apple 2023 财年第二季度利润表', period: '2023 财年第二季度',
          periodNote: '截至 2023 年 3 月', titleSize: 112, titleTextLength: 1760,
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +2%'] },
          mac: { label: 'MacBook', notes: ['同比 (31%)', 'Air、Pro、iMac'] },
          ipad: { label: 'iPad', notes: ['同比 (13%)'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (1%)'] },
          products: { label: '产品', notes: ['同比 (5%)'] },
          services: { label: '服务', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 (3%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 44%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 37%'] },
          service_cost: { label: '服务', notes: ['毛利率 71%'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 25%', '同比 (0 个百分点)'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 8%'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

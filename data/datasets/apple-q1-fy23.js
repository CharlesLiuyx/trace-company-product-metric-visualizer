/* Apple Q1 FY23 income statement ($B), measured from the native source image. */
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
  const appleGlyph = (x, y, size) => `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="${BLACK}"><path d="${applePath}"/></g>`;

  function brandAnnotations() {
    return `<g data-typography-role="brand">
      ${appleGlyph(98, 492, 40)}
      <text x="144" y="533" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      ${appleGlyph(98, 1019, 42)}
      <text x="148" y="1057" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1093, 42)}
      <text x="148" y="1131" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(78 1254)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operating: '营业利润', expenses: ['运营', '费用'], productCost: '产品', serviceCost: '服务',
      net: '净利润', tax: '税费', other: '其他', rnd: '研发', sga: '销售、一般及行政',
      yoyDown8: '同比 (8%)', yoyDown29: '同比 (29%)', yoyUp30: '同比 +30%', yoyUp6: '同比 +6%',
      yoyDown5: '同比 (5%)', grossMargin: '利润率 43%', operatingMargin: '利润率 31%',
      netMargin: '利润率 26%', ppDown1: '同比 (1 个百分点)', ppDown2: '同比 (2 个百分点)',
      productMargin: '毛利率 37%', serviceMargin: '毛利率 71%', rndShare: '占收入 7%',
      sgaShare: '占收入 6%', macSub: 'Air、Pro、iMac', wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', net: 'Net profit', tax: 'Tax', other: 'Other',
      rnd: 'R&D', sga: 'SG&A', yoyDown8: '(8%) Y/Y', yoyDown29: '(29%) Y/Y',
      yoyUp30: '+30% Y/Y', yoyUp6: '+6% Y/Y', yoyDown5: '(5%) Y/Y', grossMargin: '43% margin',
      operatingMargin: '31% margin', netMargin: '26% margin', ppDown1: '(1pp) Y/Y',
      ppDown2: '(2pp) Y/Y', productMargin: '37% gross margin', serviceMargin: '71% gross margin',
      rndShare: '7% of revenue', sgaShare: '6% of revenue', macSub: 'Air, Pro, iMac',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = '#5e5e5e', size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(414, 322, [value(), note(t.yoyDown8)], 'middle', 12)] },
      mac: { blocks: [
        block(414, 679, [value(), note(t.yoyDown29)], 'middle', 12),
        block(105, 743, [name('MacBook', 58), note(t.macSub, 24)], 'start', 7),
      ] },
      ipad: { blocks: [
        block(414, 838, [value(), note(t.yoyUp30)], 'middle', 12),
        block(220, 911, [name('iPad', 62)], 'start'),
      ] },
      wearables: { blocks: [
        block(414, 1014, [value(), note(t.yoyDown8)], 'middle', 12),
        block(221, 1158, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(791, 448, [name(t.products, 40, '#5e5e5e'), value(), note(t.yoyDown8)], 'middle', 4)] },
      services: { blocks: [block(781, 1127, [name(t.services, 40, '#5e5e5e'), value(), note(t.yoyUp6)], 'middle', 4)] },
      revenue: { blocks: [block(1163, 586, [name(t.revenue, 40, '#5e5e5e'), value(), note(t.yoyDown5)], 'middle', 4)] },
      gross_profit: { blocks: [block(1528, 411, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppDown1)], 'middle', 12)] },
      cost_of_revenue: { blocks: [block(1524.5, 1209, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9)] },
      operating_profit: { blocks: [block(1907, 303, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppDown2)], 'middle', 11)] },
      operating_expenses: { blocks: [block(1908, 863, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8)] },
      product_cost: { blocks: [block(1852, 1086, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'start', 9)] },
      service_cost: { blocks: [block(1853, 1262, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'start', 9)] },
      net_profit: { blocks: [block(2337, 393, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppDown2)], 'start', 11)] },
      tax: { blocks: [block(2426, 668, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      other_expense: { blocks: [block(2426, 794, [cost(t.other, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [block(2426, 949, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27)], 'middle', 8)] },
      sga: {
        blocks: [
          block(zh ? 2344 : 2426, 1144, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27)], zh ? 'start' : 'middle', 8),
        ],
      },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q1-fy23',
    name: 'Apple · Q1 FY23',
    company: 'Apple',
    meta: {
      company: 'Apple', title: 'Apple Q1 FY23 Income Statement', period: 'Q1 FY23', periodNote: 'Ending Dec. 2022',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/apple-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 92, titleWeight: 800, titleTextLength: 2080,
      periodX: 2275, periodY: 252, periodNoteY: 292,
      logoWidth: 280, logoHeight: 270, logoY: 242, logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: '#666666', label: '#5e5e5e' },
        hub: { node: '#666666', label: '#5e5e5e' },
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
        iphone: { x: 380, y: 412, width: 71, height: 196 },
        mac: { x: 380, y: 775, width: 71, height: 21 },
        ipad: { x: 380, y: 940, width: 71, height: 25 },
        wearables: { x: 380, y: 1105, width: 71, height: 39 },
        products: { x: 756, y: 593, width: 70, height: 289 },
        services: { x: 746, y: 1273, width: 70, height: 61 },
        revenue: { x: 1128, y: 728, width: 70, height: 351 },
        gross_profit: { x: 1502, y: 596, width: 70, height: 149 },
        cost_of_revenue: { x: 1499, y: 990, width: 70, height: 199 },
        operating_profit: { x: 1872, y: 487, width: 70, height: 106 },
        operating_expenses: { x: 1873, y: 797, width: 70, height: 41 },
        product_cost: { x: 1758, y: 1050, width: 70, height: 180 },
        service_cost: { x: 1758, y: 1310, width: 70, height: 16 },
        net_profit: { x: 2248, y: 396, width: 71, height: 88 },
        tax: { x: 2248, y: 683, width: 71, height: 15 },
        other_expense: { x: 2248, y: 820, width: 71, height: 2 },
        rnd: { x: 2248, y: 976, width: 71, height: 20 },
        sga: { x: 2248, y: 1176, width: 71, height: 18 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 65.8, notes: ['(8%) Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'MacBook', value: 7.7, notes: ['(29%) Y/Y', 'Air, Pro, iMac'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 9.4, notes: ['+30% Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 13.5, notes: ['(8%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 96.4, notes: ['(8%) Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 20.8, notes: ['+6% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 117.2, notes: ['(5%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 50.3, notes: ['43% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 66.8 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 36.0, valueText: '$36.0B', notes: ['31% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.3 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 60.8, notes: ['37% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.1, notes: ['71% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 30.0, valueText: '$30.0B', notes: ['26% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.6 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.4, color: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.7, notes: ['7% of revenue'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 6.6, notes: ['6% of revenue'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 65.8, sourceWidth: 196, targetWidth: 197, y0: 510, y1: 691.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 7.7, sourceWidth: 21, targetWidth: 23, y0: 785.5, y1: 801.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 9.4, sourceWidth: 25, targetWidth: 28, y0: 952.5, y1: 827, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 13.5, sourceWidth: 39, targetWidth: 41, y0: 1124.5, y1: 861.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 96.4, sourceWidth: 289, targetWidth: 289, y0: 737.5, y1: 872.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 20.8, sourceWidth: 61, targetWidth: 62, y0: 1303.5, y1: 1048, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 50.3, sourceWidth: 150, targetWidth: 149, y0: 803, y1: 670.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 66.8, sourceWidth: 201, targetWidth: 199, y0: 978.5, y1: 1089.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 36.0, sourceWidth: 106, targetWidth: 106, y0: 649, y1: 540, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.3, sourceWidth: 43, targetWidth: 41, y0: 723.5, y1: 817.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 30.0, sourceWidth: 88, targetWidth: 88, y0: 531, y1: 440, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.6, sourceWidth: 16, targetWidth: 15, y0: 583, y1: 690.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.4, sourceWidth: 2, targetWidth: 2, y0: 592, y1: 821, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.7, sourceWidth: 21, targetWidth: 20, y0: 807.5, y1: 986, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.6, sourceWidth: 20, targetWidth: 18, y0: 828, y1: 1185, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 60.8, sourceWidth: 181, targetWidth: 180, y0: 1080.5, y1: 1140, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.1, sourceWidth: 18, targetWidth: 16, y0: 1180, y1: 1318, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2023 财年第一季度',
        meta: { title: 'Apple 2023 财年第一季度利润表', period: '2023 财年第一季度', periodNote: '截至 2022 年 12 月' },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 (8%)'] },
          mac: { label: 'MacBook', notes: ['同比 (29%)', 'Air、Pro、iMac'] },
          ipad: { label: 'iPad', notes: ['同比 +30%'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (8%)'] },
          products: { label: '产品', notes: ['同比 (8%)'] },
          services: { label: '服务', notes: ['同比 +6%'] },
          revenue: { label: '收入', notes: ['同比 (5%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 37%'] },
          service_cost: { label: '服务', notes: ['毛利率 71%'] },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 7%'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 6%'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: brandAnnotations(),
      },
    },
  });
})();

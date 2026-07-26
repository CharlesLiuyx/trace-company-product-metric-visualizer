/* Apple Q1 FY25 income statement ($B), measured from the native source image. */
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
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });
  const appleGlyph = (x, y, size) =>
    `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="${BLACK}"><path d="${applePath}"/></g>`;

  function brandAnnotations() {
    return `<g data-typography-role="brand">
      ${appleGlyph(98, 502, 40)}
      <text x="144" y="554" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      ${appleGlyph(98, 1018, 42)}
      <text x="148" y="1056" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1088, 42)}
      <text x="148" y="1126" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(70 1223)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function otherExpenseCallout(zh) {
    return `<g class="sankey-interactive-annotation"
      data-node="other_expense"
      data-link-numerator="other_expense"
      data-link-denominator="operating_profit"
      data-link-anchor-x="2128"
      data-link-anchor-y="676">
      <text x="2450" y="737" text-anchor="middle" font-size="31" font-weight="800" fill="${RED_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2450" y="777" text-anchor="middle" font-size="31" font-weight="400" fill="${RED_LABEL}">($0.2B)</text>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'],
      productCost: '产品', serviceCost: '服务', net: '净利润', tax: '税费',
      rnd: '研发', sga: '销售、一般及行政', yoyDown1: '同比 (1%)', yoy2: '同比 +2%',
      yoy16: '同比 +16%', yoy15: '同比 +15%', yoyDown2: '同比 (2%)',
      yoy14: '同比 +14%', yoy4: '同比 +4%', grossMargin: '利润率 47%',
      operatingMargin: '利润率 34%', netMargin: '利润率 29%',
      ppUp: '同比 +1 个百分点', ppZero: '同比 +0 个百分点',
      productMargin: '毛利率 39%', serviceMargin: '毛利率 75%',
      rndShare: '占收入 7%', sgaShare: '占收入 6%', macSub: 'Air、Pro、Mini',
      wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit',
      expenses: ['Operating', 'expenses'], productCost: 'Products', serviceCost: 'Services',
      net: 'Net profit', tax: 'Tax', rnd: 'R&D', sga: 'SG&A', yoyDown1: '(1%) Y/Y',
      yoy2: '+2% Y/Y', yoy16: '+16% Y/Y', yoy15: '+15% Y/Y', yoyDown2: '(2%) Y/Y',
      yoy14: '+14% Y/Y', yoy4: '+4% Y/Y', grossMargin: '47% margin',
      operatingMargin: '34% margin', netMargin: '29% margin', ppUp: '+1pp Y/Y',
      ppZero: '+0pp Y/Y', productMargin: '39% gross margin',
      serviceMargin: '75% gross margin', rndShare: '7% of revenue',
      sgaShare: '6% of revenue', macSub: 'Air, Pro, Mini',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(360, 338, [value(), note(t.yoyDown1)], 'start', 12)] },
      mac: { blocks: [
        block(368, 664, [value(), note(t.yoy16)], 'start', 12),
        {
          ...block(214, 734, [name('Mac', 69), note(t.macSub, 24)], 'start', 7),
          semanticRole: 'reference-offset-side-label',
        },
      ] },
      ipad: { blocks: [
        block(368, 824, [value(), note(t.yoy15)], 'start', 12),
        {
          ...block(220, 889, [name('iPad', 64)], 'start'),
          semanticRole: 'reference-offset-side-label',
        },
      ] },
      wearables: { blocks: [
        block(357, 1006, [value(), note(t.yoyDown2)], 'start', 12),
        block(222, 1143, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(797, 438, [name(t.products), value(), note(t.yoy2)], 'middle', 12)] },
      services: { blocks: [block(793, 1090, [name(t.services), value(), note(t.yoy14)], 'middle', 12)] },
      revenue: { blocks: [block(1170, 552, [name(t.revenue), value(), note(t.yoy4)], 'middle', 12)] },
      gross_profit: { blocks: [block(1546, 397, [
        name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppUp),
      ], 'middle', 12)] },
      cost_of_revenue: { blocks: [block(1548, 1173, [
        cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37),
      ], 'middle', 9)] },
      operating_profit: { blocks: [block(1915, 302, [
        name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38),
        note(t.operatingMargin), note(t.ppUp),
      ], 'middle', 11)] },
      operating_expenses: { blocks: [block(1915, 827, [
        cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36),
      ], 'middle', 8)] },
      product_cost: { blocks: [block(1832, 1028, [
        cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27),
      ], 'start', 9)] },
      service_cost: { blocks: [block(1831, 1217, [
        cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27),
      ], 'start', 9)] },
      net_profit: { blocks: [block(2355, 374, [
        name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppUp),
      ], 'start', 11)] },
      tax: { blocks: [block(2448, 605, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [block(2447, 836, [
        cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27), note(t.ppZero, 27),
      ], 'middle', 8)] },
      sga: { blocks: [block(zh ? 2453 : 2448, 1067, [
        cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27), note(t.ppZero, 27),
      ], 'middle', 8)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q1-fy25',
    name: 'Apple · Q1 FY25',
    company: 'Apple',
    meta: {
      company: 'Apple', title: 'Apple Q1 FY25 Income Statement',
      period: 'Q1 FY25', periodNote: 'Ending Dec. 2024', currency: '$', unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 168, titleSize: 92, titleWeight: 800, titleTextLength: 2080,
      periodX: 2420, periodY: 268, periodNoteY: 324,
      logoWidth: 280, logoHeight: 270, logoY: 242, logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE,
      subtitleColor: NOTE, noteColor: NOTE, interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations() + otherExpenseCallout(false),
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 387, y: 439, width: 71, height: 187 },
        mac: { x: 387, y: 766, width: 71, height: 23 },
        ipad: { x: 387, y: 929, width: 71, height: 20 },
        wearables: { x: 387, y: 1098, width: 71, height: 30 },
        products: { x: 763, y: 580, width: 70, height: 266 },
        services: { x: 758, y: 1237, width: 70, height: 70 },
        revenue: { x: 1135, y: 695, width: 70, height: 338 },
        gross_profit: { x: 1511, y: 578, width: 70, height: 157 },
        cost_of_revenue: { x: 1513, y: 970, width: 71, height: 179 },
        operating_profit: { x: 1880, y: 484, width: 70, height: 115 },
        operating_expenses: { x: 1880, y: 765, width: 70, height: 40 },
        product_cost: { x: 1730, y: 1009, width: 70, height: 160 },
        service_cost: { x: 1732, y: 1248, width: 70, height: 16 },
        net_profit: { x: 2255, y: 374, width: 71, height: 97 },
        tax: { x: 2255, y: 633, width: 71, height: 15 },
        other_expense: { x: 2255, y: 754, width: 71, height: 2 },
        rnd: { x: 2255, y: 856, width: 71, height: 21 },
        sga: { x: 2255, y: 1088, width: 71, height: 17 },
      },
      labels: { ...labels(false), other_expense: { blocks: [] } },
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 69.1, notes: ['(1%) Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'Mac', value: 9.0, valueText: '$9.0B', notes: ['+16% Y/Y', 'Air, Pro, Mini'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 8.1, notes: ['+15% Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 11.7, notes: ['(2%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 98.0, valueText: '$98.0B', notes: ['+2% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 26.3, notes: ['+14% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 124.3, notes: ['+4% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 58.3, notes: ['47% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 66.0, valueText: '($66.0B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 42.8, notes: ['34% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.4 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 59.4, notes: ['39% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.6, notes: ['75% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 36.3, notes: ['29% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6.2 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 8.3, notes: ['7% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 7.2, notes: ['6% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 69.1, sourceWidth: 187, targetWidth: 187, y0: 532.5, y1: 673.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 9.0, sourceWidth: 23, targetWidth: 23, y0: 777.5, y1: 778.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 8.1, sourceWidth: 20, targetWidth: 20, y0: 939, y1: 800, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 11.7, sourceWidth: 30, targetWidth: 36, y0: 1113, y1: 828, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 98.0, sourceWidth: 266, targetWidth: 268, y0: 713, y1: 829, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 26.3, sourceWidth: 70, targetWidth: 70, y0: 1272, y1: 998, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 58.3, sourceWidth: 159, targetWidth: 157, y0: 774.5, y1: 656.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 66.0, sourceWidth: 179, targetWidth: 179, y0: 943.5, y1: 1059.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 42.8, sourceWidth: 115, targetWidth: 115, y0: 635.5, y1: 541.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.4, sourceWidth: 42, targetWidth: 40, y0: 714, y1: 785, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 36.3, sourceWidth: 97, targetWidth: 97, y0: 532.5, y1: 422.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 6.2, sourceWidth: 17, targetWidth: 15, y0: 589.5, y1: 640.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.2, sourceWidth: 1, targetWidth: 2, y0: 598.5, y1: 755, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.3, sourceWidth: 22, targetWidth: 21, y0: 776, y1: 866.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 7.2, sourceWidth: 18, targetWidth: 17, y0: 796, y1: 1096.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 59.4, sourceWidth: 162, targetWidth: 160, y0: 1051, y1: 1089, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.6, sourceWidth: 17, targetWidth: 16, y0: 1140.5, y1: 1256, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2025 财年第一季度',
        meta: {
          title: 'Apple 2025 财年第一季度利润表',
          period: '2025 财年第一季度', periodNote: '截至 2024 年 12 月',
        },
        annotationsSvg: brandAnnotations() + otherExpenseCallout(true),
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 (1%)'] },
          mac: { label: 'Mac', notes: ['同比 +16%', 'Air、Pro、Mini'] },
          ipad: { label: 'iPad', notes: ['同比 +15%'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (2%)'] },
          products: { label: '产品', notes: ['同比 +2%'] },
          services: { label: '服务', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 39%'] },
          service_cost: { label: '服务', notes: ['毛利率 75%'] },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 6%', '同比 +0 个百分点'] },
        },
        layout: { labels: { ...labels(true), other_expense: { blocks: [] } } },
      },
    },
  });
})();

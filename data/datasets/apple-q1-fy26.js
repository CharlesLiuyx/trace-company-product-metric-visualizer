/* Apple Q1 FY26 income statement ($B), measured from the native source image. */
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
      ${appleGlyph(98, 552, 40)}
      <text x="144" y="593" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      ${appleGlyph(98, 1069, 42)}
      <text x="148" y="1107" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1143, 42)}
      <text x="148" y="1181" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(78 1270)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function otherIncomeCallout(zh) {
    const name = zh ? '其他' : 'Other';
    return `<g class="sankey-interactive-annotation" data-node="other_income">
      <path d="M2163 576H2202C2225 576 2228 520 2250 520" fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
      <rect x="2126" y="580" width="110" height="90" fill="transparent"/>
      <text x="2180" y="619" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${name}</text>
      <text x="2180" y="659" text-anchor="middle" font-size="31" fill="${GREEN_LABEL}">$0.2B</text>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operating: '营业利润', expenses: ['运营', '费用'], productCost: '产品', serviceCost: '服务', net: '净利润',
      tax: '税费', rnd: '研发', sga: '销售、一般及行政', yoy23: '同比 +23%', yoyDown7: '同比 (7%)',
      yoy6: '同比 +6%', yoyDown2: '同比 (2%)', yoy16: '同比 +16%', yoy14: '同比 +14%',
      grossMargin: '利润率 48%', operatingMargin: '利润率 35%', netMargin: '利润率 29%', ppUp: '同比 +1 个百分点',
      ppZero: '同比 +0 个百分点', productMargin: '毛利率 41%', serviceMargin: '毛利率 77%',
      rndShare: '占收入 8%', sgaShare: '占收入 5%', sgaPp: '同比 (1 个百分点)',
      macSub: 'Air、Pro、Mini', wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'],
      operating: 'Operating profit', expenses: ['Operating', 'expenses'], productCost: 'Products', serviceCost: 'Services', net: 'Net profit',
      tax: 'Tax', rnd: 'R&D', sga: 'SG&A', yoy23: '+23% Y/Y', yoyDown7: '(7%) Y/Y', yoy6: '+6% Y/Y',
      yoyDown2: '(2%) Y/Y', yoy16: '+16% Y/Y', yoy14: '+14% Y/Y', grossMargin: '48% margin',
      operatingMargin: '35% margin', netMargin: '29% margin', ppUp: '+1pp Y/Y', ppZero: '+0pp Y/Y',
      productMargin: '41% gross margin', serviceMargin: '77% gross margin', rndShare: '8% of revenue',
      sgaShare: '5% of revenue', sgaPp: '(1pp) Y/Y', macSub: 'Air, Pro, Mini',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(360, 372, [value(), note(t.yoy23)], 'start', 12)] },
      mac: { blocks: [
        block(368, 728, [value(), note(t.yoyDown7)], 'start', 12),
        block(214, 793, [name('Mac', 69), note(t.macSub, 24)], 'start', 7),
      ] },
      ipad: { blocks: [
        block(368, 882, [value(), note(t.yoy6)], 'start', 12),
        block(220, 947, [name('iPad', 64)], 'start'),
      ] },
      wearables: { blocks: [
        block(357, 1058, [value(), note(t.yoyDown2)], 'start', 12),
        block(222, 1198, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(791, 451, [name(t.products), value(), note(t.yoy16)], 'middle', 12)] },
      services: { blocks: [block(791, 1114, [name(t.services), value(), note(t.yoy14)], 'middle', 12)] },
      revenue: { blocks: [block(1165, 561, [name(t.revenue), value(), note(t.yoy16)], 'middle', 12)] },
      gross_profit: { blocks: [block(1539, 404, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppUp)], 'middle', 12)] },
      cost_of_revenue: { blocks: [block(1539, 1212, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9)] },
      operating_profit: { blocks: [block(1916, 315, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppUp)], 'middle', 11)] },
      operating_expenses: { blocks: [block(1912, 877, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8)] },
      product_cost: { blocks: [block(1852, 1076, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'start', 9)] },
      service_cost: { blocks: [block(1892, 1285, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'start', 9)] },
      other_income: { blocks: [] },
      net_profit: { blocks: [block(2355, 411, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppZero)], 'start', 11)] },
      tax: { blocks: [block(2448, 682, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [block(2447, 878, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27), note(t.ppUp, 27)], 'middle', 8)] },
      sga: { blocks: [block(2448, 1112, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27), note(t.sgaPp, 27)], 'middle', 8)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q1-fy26',
    name: 'Apple · Q1 FY26',
    company: 'Apple',
    meta: {
      company: 'Apple', title: 'Apple Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/apple-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 168, titleSize: 92, titleWeight: 800, titleTextLength: 2080,
      periodX: 2420, periodY: 268, periodNoteY: 324,
      logoWidth: 280, logoHeight: 270, logoY: 242, logoViewBox: '0 0 24 24', logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations() + otherIncomeCallout(false),
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 381, y: 465, width: 72, height: 228 }, mac: { x: 381, y: 832, width: 72, height: 20 },
        ipad: { x: 381, y: 993, width: 72, height: 20 }, wearables: { x: 381, y: 1154, width: 72, height: 29 },
        products: { x: 755, y: 598, width: 72, height: 305 }, services: { x: 755, y: 1266, width: 72, height: 79 },
        revenue: { x: 1129, y: 704, width: 72, height: 387 }, gross_profit: { x: 1503, y: 590, width: 72, height: 185 },
        cost_of_revenue: { x: 1503, y: 991, width: 72, height: 199 }, operating_profit: { x: 1876, y: 497, width: 72, height: 135 },
        operating_expenses: { x: 1876, y: 807, width: 72, height: 47 }, product_cost: { x: 1744, y: 1048, width: 72, height: 180 },
        service_cost: { x: 1744, y: 1315, width: 72, height: 16 }, other_income: { x: 2162, y: 576, width: 1, height: 2 },
        net_profit: { x: 2250, y: 409, width: 72, height: 111 }, tax: { x: 2250, y: 699, width: 72, height: 23 },
        rnd: { x: 2250, y: 899, width: 72, height: 28 }, sga: { x: 2250, y: 1143, width: 72, height: 18 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 85.3, notes: ['+23% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'Mac', value: 8.4, notes: ['(7%) Y/Y', 'Air, Pro, Mini'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 8.5, notes: ['+6% Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 11.5, notes: ['(2%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 113.7, notes: ['+16% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 30.0, valueText: '$30.0B', notes: ['+14% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 143.8, notes: ['+16% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 69.2, notes: ['48% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 74.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 50.9, notes: ['35% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 18.4 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 67.5, notes: ['41% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 7.1, notes: ['77% gross margin'] },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.2, color: BG, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 42.1, notes: ['29% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 8.9 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 10.9, notes: ['8% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 7.5, notes: ['5% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 85.3, sourceWidth: 228, targetWidth: 228, y0: 579, y1: 712, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 8.4, sourceWidth: 20, targetWidth: 19, y0: 842, y1: 835.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 8.5, sourceWidth: 20, targetWidth: 22, y0: 1003, y1: 856, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 11.5, sourceWidth: 29, targetWidth: 36, y0: 1168.5, y1: 885, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 113.7, sourceWidth: 305, targetWidth: 308, y0: 750.5, y1: 858, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 30.0, sourceWidth: 79, targetWidth: 79, y0: 1305.5, y1: 1051.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 69.2, sourceWidth: 188, targetWidth: 185, y0: 798, y1: 682.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 74.5, sourceWidth: 199, targetWidth: 199, y0: 991.5, y1: 1090.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 50.9, sourceWidth: 135, targetWidth: 135, y0: 657.5, y1: 564.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 18.4, sourceWidth: 50, targetWidth: 47, y0: 750, y1: 830.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 42.1, sourceWidth: 111, targetWidth: 111, y0: 552.5, y1: 464.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 8.9, sourceWidth: 23, targetWidth: 23, y0: 620.5, y1: 710.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.2, sourceWidth: 0, targetWidth: 0, y0: 577, y1: 520, sourceOrder: 0, targetOrder: 1, interactionOnly: true, curve: { x0: 2163, x1: 2250, c1x: 2202, c1y: 577, c2x: 2228, c2y: 520 }, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 10.9, sourceWidth: 28, targetWidth: 28, y0: 821, y1: 913, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 7.5, sourceWidth: 18, targetWidth: 18, y0: 845, y1: 1152, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 67.5, sourceWidth: 180, targetWidth: 180, y0: 1081, y1: 1138, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 7.1, sourceWidth: 19, targetWidth: 16, y0: 1180.5, y1: 1323, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2026 财年第一季度',
        meta: { title: 'Apple 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2025 年 12 月' },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +23%'] }, mac: { label: 'Mac', notes: ['同比 (7%)', 'Air、Pro、Mini'] },
          ipad: { label: 'iPad', notes: ['同比 +6%'] }, wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (2%)'] },
          products: { label: '产品', notes: ['同比 +16%'] }, services: { label: '服务', notes: ['同比 +14%'] }, revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] }, operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 41%'] }, service_cost: { label: '服务', notes: ['毛利率 77%'] }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +0 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 8%', '同比 +1 个百分点'] }, sga: { label: '销售、一般及行政', notes: ['占收入 5%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: brandAnnotations() + otherIncomeCallout(true),
      },
    },
  });
})();

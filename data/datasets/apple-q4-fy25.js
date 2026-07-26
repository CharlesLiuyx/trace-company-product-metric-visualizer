/* Apple Q4 FY25 income statement ($B), measured from the native Source. */
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
      ${appleGlyph(98, 512, 40)}
      <text x="144" y="562" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      ${appleGlyph(98, 1014, 42)}
      <text x="148" y="1055" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1086, 42)}
      <text x="148" y="1127" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(78 1241)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function otherIncomeCallout(zh) {
    const name = zh ? '其他' : 'Other';
    return `<g class="sankey-interactive-annotation" data-node="other_income">
      <path d="M2141 579H2200C2225 579 2228 519 2252 519" fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
      <rect x="2114" y="570" width="130" height="96" fill="transparent"/>
      <text x="2181" y="620" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${name}</text>
      <text x="2181" y="662" text-anchor="middle" font-size="31" fill="${GREEN_LABEL}">$0.4B</text>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'],
      productCost: '产品', serviceCost: '服务', net: '净利润', tax: '税费',
      rnd: '研发', sga: '销售、一般及行政', yoy6: '同比 +6%', yoy13: '同比 +13%',
      yoyZero: '同比 +0%', yoy5: '同比 +5%', yoy15: '同比 +15%', yoy8: '同比 +8%',
      grossMargin: '利润率 47%', operatingMargin: '利润率 32%', netMargin: '利润率 27%',
      ppUp1: '同比 +1 个百分点', ppZero: '同比 +0 个百分点', ppUp11: '同比 +11 个百分点',
      productMargin: '毛利率 36%', serviceMargin: '毛利率 75%',
      rndShare: '占收入 9%', sgaShare: '占收入 7%', macSub: 'Air、Pro、Mini',
      wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', net: 'Net profit', tax: 'Tax',
      rnd: 'R&D', sga: 'SG&A', yoy6: '+6% Y/Y', yoy13: '+13% Y/Y', yoyZero: '+0% Y/Y',
      yoy5: '+5% Y/Y', yoy15: '+15% Y/Y', yoy8: '+8% Y/Y', grossMargin: '47% margin',
      operatingMargin: '32% margin', netMargin: '27% margin', ppUp1: '+1pp Y/Y',
      ppZero: '+0pp Y/Y', ppUp11: '+11pp Y/Y', productMargin: '36% gross margin',
      serviceMargin: '75% gross margin', rndShare: '9% of revenue',
      sgaShare: '7% of revenue', macSub: 'Air, Pro, Mini',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);

    return {
      iphone: { blocks: [block(360, 346, [value(), note(t.yoy6)], 'start', 12)] },
      mac: { blocks: [
        block(368, 669, [value(), note(t.yoy13)], 'start', 12),
        { ...block(214, 749, [name('Mac', 69)], 'start', 7), semanticRole: 'name' },
        { ...block(214, 812, [note(t.macSub, 24)], 'start', 7), semanticRole: 'note' },
      ] },
      ipad: { blocks: [
        block(368, zh ? 824 : 797, [value(), note(t.yoyZero)], 'start', 12),
        block(220, 899, [name('iPad', 64)], 'start'),
      ] },
      wearables: { blocks: [
        block(368, 1000, [value(), note(t.yoyZero)], 'start', 12),
        block(222, 1147, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(792, 431, [name(t.products), value(), note(t.yoy5)], 'middle', 12)] },
      services: { blocks: [block(792, 1077, [name(t.services), value(), note(t.yoy15)], 'middle', 12)] },
      revenue: { blocks: [block(1166, 551, [name(t.revenue), value(), note(t.yoy8)], 'middle', 12)] },
      gross_profit: { blocks: [
        block(1539, 399, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppUp1)], 'middle', 12),
      ] },
      cost_of_revenue: { blocks: [
        block(1539, 1205, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9),
      ] },
      operating_profit: { blocks: [
        block(1916, 305, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppZero)], 'middle', 11),
      ] },
      operating_expenses: { blocks: [
        block(1914, 860, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8),
      ] },
      product_cost: { blocks: [
        block(1959, 1081, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'middle', 9),
      ] },
      service_cost: { blocks: [
        block(1967, 1268, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'middle', 9),
      ] },
      other_income: { blocks: [] },
      net_profit: { blocks: [
        block(2444, 406, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppUp11)], 'middle', 11),
      ] },
      tax: { blocks: [block(2448, 677, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [
        block(2448, 874, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27), note(t.ppZero, 27)], 'middle', 8),
      ] },
      sga: { blocks: [
        block(2448, 1111, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27), note(t.ppZero, 27)], 'middle', 8),
      ] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q4-fy25',
    name: 'Apple · Q4 FY25',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q4-fy25.png', width: 2667, height: 1500 },
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
    annotationsSvg: brandAnnotations() + otherIncomeCallout(false),
    nonNodeMetrics: [
      { id: 'other_income', representation: 'annotation', value: 0.4, type: 'profit' },
    ],
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 384, y: 446, width: 71, height: 183 },
        mac: { x: 384, y: 772, width: 71, height: 31 },
        ipad: { x: 384, y: 931, width: 71, height: 23 },
        wearables: { x: 384, y: 1093, width: 71, height: 33 },
        products: { x: 758, y: 585, width: 70, height: 277 },
        services: { x: 758, y: 1231, width: 70, height: 106 },
        revenue: { x: 1132, y: 704, width: 70, height: 385 },
        gross_profit: { x: 1505, y: 588, width: 71, height: 180 },
        cost_of_revenue: { x: 1505, y: 986, width: 73, height: 202 },
        operating_profit: { x: 1879, y: 492, width: 71, height: 120 },
        operating_expenses: { x: 1879, y: 788, width: 71, height: 58 },
        product_cost: { x: 1747, y: 1047, width: 70, height: 175 },
        service_cost: { x: 1744, y: 1293, width: 70, height: 25 },
        net_profit: { x: 2252, y: 418, width: 71, height: 101 },
        tax: { x: 2252, y: 703, width: 71, height: 17 },
        rnd: { x: 2252, y: 894, width: 71, height: 32 },
        sga: { x: 2252, y: 1134, width: 71, height: 26 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 49.0, valueText: '$49.0B', notes: ['+6% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'Mac', value: 8.7, notes: ['+13% Y/Y', 'Air, Pro, Mini'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 7.0, valueText: '$7.0B', notes: ['+0% Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 9.0, valueText: '$9.0B', notes: ['(0%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 73.7, notes: ['+5% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 28.8, notes: ['+15% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 102.5, notes: ['+8% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 48.3, notes: ['47% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 54.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 32.4, notes: ['32% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.9 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 47.0, valueText: '($47.0B)', notes: ['36% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 7.1, notes: ['75% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 27.5, notes: ['27% margin', '+11pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.3 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 8.9, notes: ['9% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 7.0, valueText: '($7.0B)', notes: ['7% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 49.0, sourceWidth: 182, targetWidth: 183, y0: 538, y1: 676.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 8.7, sourceWidth: 29, targetWidth: 32, y0: 787.5, y1: 784, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 7.0, sourceWidth: 23, targetWidth: 24, y0: 942.5, y1: 812, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 9.0, sourceWidth: 33, targetWidth: 38, y0: 1109.5, y1: 843, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 73.7, sourceWidth: 277, targetWidth: 279, y0: 723.5, y1: 843.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 28.8, sourceWidth: 106, targetWidth: 106, y0: 1284, y1: 1036, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 48.3, sourceWidth: 183, targetWidth: 180, y0: 795.5, y1: 678, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 54.1, sourceWidth: 202, targetWidth: 202, y0: 988, y1: 1087, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 32.4, sourceWidth: 122, targetWidth: 120, y0: 649, y1: 552, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.9, sourceWidth: 58, targetWidth: 58, y0: 739, y1: 817, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 27.5, sourceWidth: 102, targetWidth: 100, y0: 543, y1: 468, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.3, sourceWidth: 18, targetWidth: 17, y0: 603, y1: 711.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.9, sourceWidth: 32, targetWidth: 32, y0: 804, y1: 910, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 7.0, sourceWidth: 26, targetWidth: 26, y0: 833, y1: 1147, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 47.0, sourceWidth: 177, targetWidth: 175, y0: 1074.5, y1: 1134.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 7.1, sourceWidth: 25, targetWidth: 25, y0: 1175.5, y1: 1305.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2025 财年第四季度',
        meta: {
          title: 'Apple 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 9 月',
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +6%'] },
          mac: { label: 'Mac', notes: ['同比 +13%', 'Air、Pro、Mini'] },
          ipad: { label: 'iPad', notes: ['同比 +0%'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (0%)'] },
          products: { label: '产品', notes: ['同比 +5%'] },
          services: { label: '服务', notes: ['同比 +15%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 36%'] },
          service_cost: { label: '服务', notes: ['毛利率 75%'] },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 +11 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 +0 个百分点'] },
        },
        nonNodeMetrics: { other_income: { label: '其他' } },
        layout: { labels: labels(true) },
        annotationsSvg: brandAnnotations() + otherIncomeCallout(true),
      },
    },
  });
})();

/* Apple Q2 FY24 income statement ($B), measured from the native Source. */
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
  const applePath =
    (window.SANKEY_BRAND && window.SANKEY_BRAND.apple) || APPLE_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    color,
  });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x,
    top,
    anchor,
    lineGap,
    lines,
  });
  const appleGlyph = (x, y, size) =>
    `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="${BLACK}"><path d="${applePath}"/></g>`;

  function brandAnnotations() {
    return `<g data-typography-role="brand">
      ${appleGlyph(117, 493, 40)}
      <text x="169" y="531" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      ${appleGlyph(94, 977, 42)}
      <text x="145" y="1015" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(94, 1051, 42)}
      <text x="145" y="1089" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(78 1209)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function otherIncomeCallout(zh) {
    return `<g class="sankey-interactive-annotation" data-node="other_income">
      <path d="M2145 514H2219C2242 514 2236 460 2259 460" fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
      <rect x="2115" y="510" width="150" height="105" fill="transparent"/>
      <text x="2180" y="558" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2180" y="600" text-anchor="middle" font-size="31" fill="${GREEN_LABEL}">$0.2B</text>
    </g>`;
  }

  function labels(zh) {
    const t = zh
      ? {
          products: '产品',
          services: '服务',
          revenue: '收入',
          gross: '毛利润',
          cost: ['收入', '成本'],
          operating: '营业利润',
          expenses: ['运营', '费用'],
          productCost: '产品',
          serviceCost: '服务',
          net: '净利润',
          tax: '税费',
          rnd: '研发',
          sga: '销售、一般及行政',
          iphoneYoy: '同比 (10%)',
          macYoy: '同比 +4%',
          ipadYoy: '同比 (17%)',
          wearablesYoy: '同比 (10%)',
          productsYoy: '同比 (10%)',
          servicesYoy: '同比 +14%',
          revenueYoy: '同比 (4%)',
          grossMargin: '利润率 47%',
          grossPp: '同比 +2 个百分点',
          operatingMargin: '利润率 31%',
          operatingPp: '同比 +1 个百分点',
          netMargin: '利润率 26%',
          netPp: '同比 +1 个百分点',
          productMargin: '毛利率 37%',
          serviceMargin: '毛利率 75%',
          rndShare: '占收入 9%',
          rndPp: '同比 +1 个百分点',
          sgaShare: '占收入 7%',
          sgaPp: '同比 +1 个百分点',
          macSub: 'Air、Pro、iMac',
          wearables: ['可穿戴设备、家居与', '配件'],
        }
      : {
          products: 'Products',
          services: 'Services',
          revenue: 'Revenue',
          gross: 'Gross profit',
          cost: ['Cost of', 'revenue'],
          operating: 'Operating profit',
          expenses: ['Operating', 'expenses'],
          productCost: 'Products',
          serviceCost: 'Services',
          net: 'Net profit',
          tax: 'Tax',
          rnd: 'R&D',
          sga: 'SG&A',
          iphoneYoy: '(10%) Y/Y',
          macYoy: '+4% Y/Y',
          ipadYoy: '(17%) Y/Y',
          wearablesYoy: '(10%) Y/Y',
          productsYoy: '(10%) Y/Y',
          servicesYoy: '+14% Y/Y',
          revenueYoy: '(4%) Y/Y',
          grossMargin: '47% margin',
          grossPp: '+2pp Y/Y',
          operatingMargin: '31% margin',
          operatingPp: '+1pp Y/Y',
          netMargin: '26% margin',
          netPp: '+1pp Y/Y',
          productMargin: '37% gross margin',
          serviceMargin: '75% gross margin',
          rndShare: '9% of revenue',
          rndPp: '+1pp Y/Y',
          sgaShare: '7% of revenue',
          sgaPp: '+1pp Y/Y',
          macSub: 'Air, Pro, iMac',
          wearables: ['Wearables, Home, and', 'Accessories'],
        };
    const name = (text, size = 40, color = BLACK) =>
      line(text, size, 800, color);
    const value = (color = BLACK, size = 39) =>
      line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);

    return {
      iphone: {
        blocks: [
          block(360, 323, [value(), note(t.iphoneYoy)], 'start', 12),
        ],
      },
      mac: {
        blocks: [
          block(368, 641, [value(), note(t.macYoy)], 'start', 12),
          block(104, 705, [name('MacBook', 59), note(t.macSub, 24)], 'start', 7),
        ],
      },
      ipad: {
        blocks: [
          block(368, 776, [value(), note(t.ipadYoy)], 'start', 12),
          block(220, 862, [name('iPad', 64)], 'start'),
        ],
      },
      wearables: {
        blocks: [
          block(368, 954, [value(), note(t.wearablesYoy)], 'start', 12),
          block(222, 1102, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
        ],
      },
      products: {
        blocks: [
          block(797, 405, [name(t.products), value(), note(t.productsYoy)], 'middle', 12),
        ],
      },
      services: {
        blocks: [
          block(800, 1058, [name(t.services), value(), note(t.servicesYoy)], 'middle', 12),
        ],
      },
      revenue: {
        blocks: [
          block(1174, 523, [name(t.revenue), value(), note(t.revenueYoy)], 'middle', 12),
        ],
      },
      gross_profit: {
        blocks: [
          block(1543, 366, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.grossPp)], 'middle', 12),
        ],
      },
      cost_of_revenue: {
        blocks: [
          block(1543, 1183, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9),
        ],
      },
      operating_profit: {
        blocks: [
          block(1916, 275, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.operatingPp)], 'middle', 11),
        ],
      },
      operating_expenses: {
        blocks: [
          block(1924, 856, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8),
        ],
      },
      product_cost: {
        blocks: [
          block(1829, 1043, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'start', 9),
        ],
      },
      service_cost: {
        blocks: [
          block(1836, 1229, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'start', 9),
        ],
      },
      other_income: { blocks: [] },
      net_profit: {
        blocks: [
          block(2358, 368, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.netPp)], 'start', 11),
        ],
      },
      tax: {
        blocks: [
          block(2447, 637, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7),
        ],
      },
      rnd: {
        blocks: [
          block(2453, 909, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27), note(t.rndPp, 27)], 'middle', 8),
        ],
      },
      sga: {
        blocks: [
          block(2454, 1137, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27), note(t.sgaPp, 27)], 'middle', 8),
        ],
      },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q2-fy24',
    name: 'Apple · Q2 FY24',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/apple-q2-fy24.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1333,
      titleY: 177,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: 2420,
      periodY: 268,
      periodNoteY: 324,
      logoWidth: 280,
      logoHeight: 270,
      logoY: 224,
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
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations() + otherIncomeCallout(false),
    layout: {
      scale: 1,
      routes: {
        other_income: { x: 2145, y: 514, width: 0, height: 1 },
      },
      nodes: {
        iphone: { x: 391, y: 417, width: 71, height: 184 },
        mac: { x: 391, y: 738, width: 71, height: 27 },
        ipad: { x: 391, y: 892, width: 71, height: 20 },
        wearables: { x: 391, y: 1044, width: 71, height: 30 },
        products: { x: 762, y: 553, width: 70, height: 267 },
        services: { x: 765, y: 1209, width: 70, height: 94 },
        revenue: { x: 1139, y: 670, width: 70, height: 365 },
        gross_profit: { x: 1508, y: 554, width: 70, height: 169 },
        cost_of_revenue: { x: 1508, y: 973, width: 70, height: 194 },
        operating_profit: { x: 1881, y: 460, width: 70, height: 110 },
        operating_expenses: { x: 1889, y: 785, width: 70, height: 57 },
        product_cost: { x: 1724, y: 1014, width: 70, height: 170 },
        service_cost: { x: 1721, y: 1277, width: 70, height: 21 },
        net_profit: { x: 2259, y: 366, width: 71, height: 94 },
        tax: { x: 2259, y: 666, width: 71, height: 17 },
        rnd: { x: 2259, y: 924, width: 71, height: 30 },
        sga: { x: 2259, y: 1153, width: 71, height: 24 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      {
        id: 'other_income',
        representation: 'flow',
        label: 'Other',
        value: 0.2,
        valueText: '$0.2B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 46.0, valueText: '$46.0B', notes: ['(10%) Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'MacBook', value: 7.5, notes: ['+4% Y/Y', 'Air, Pro, iMac'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 5.6, notes: ['(17%) Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 7.9, notes: ['(10%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 66.9, notes: ['(10%) Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 23.9, notes: ['+14% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 90.8, notes: ['(4%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 42.3, notes: ['47% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 48.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 27.9, notes: ['31% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.4 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 42.4, notes: ['37% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.1, notes: ['75% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 23.6, notes: ['26% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.4 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 7.9, notes: ['9% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 6.5, notes: ['7% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 46.0, sourceWidth: 184, targetWidth: 184, y0: 509, y1: 645, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 7.5, sourceWidth: 27, targetWidth: 30, y0: 751.5, y1: 752, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 5.6, sourceWidth: 20, targetWidth: 22, y0: 902, y1: 778, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 7.9, sourceWidth: 30, targetWidth: 31, y0: 1059, y1: 804.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 66.9, sourceWidth: 267, targetWidth: 269, y0: 686.5, y1: 804.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 23.9, sourceWidth: 94, targetWidth: 96, y0: 1256, y1: 987, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 42.3, sourceWidth: 170, targetWidth: 169, y0: 755, y1: 638.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 48.5, sourceWidth: 195, targetWidth: 194, y0: 937.5, y1: 1070, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 27.9, sourceWidth: 111, targetWidth: 110, y0: 609.5, y1: 515, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.4, sourceWidth: 58, targetWidth: 57, y0: 694, y1: 813.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 23.6, sourceWidth: 93, targetWidth: 93, y0: 506.5, y1: 412.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.4, sourceWidth: 17, targetWidth: 17, y0: 561.5, y1: 674.5, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.2, sourceWidth: 1, targetWidth: 1, y0: 514, y1: 459.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 7.9, sourceWidth: 32, targetWidth: 30, y0: 801, y1: 939, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.5, sourceWidth: 25, targetWidth: 24, y0: 829.5, y1: 1165, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 42.4, sourceWidth: 170, targetWidth: 170, y0: 1058, y1: 1099, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.1, sourceWidth: 24, targetWidth: 21, y0: 1155, y1: 1287.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2024 财年第二季度',
        meta: {
          title: 'Apple 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 3 月',
        },
        nonNodeMetrics: {
          other_income: { label: '其他' },
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 (10%)'] },
          mac: { label: 'MacBook', notes: ['同比 +4%', 'Air、Pro、iMac'] },
          ipad: { label: 'iPad', notes: ['同比 (17%)'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (10%)'] },
          products: { label: '产品', notes: ['同比 (10%)'] },
          services: { label: '服务', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 (4%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 47%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 37%'] },
          service_cost: { label: '服务', notes: ['毛利率 75%'] },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 +1 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: brandAnnotations() + otherIncomeCallout(true),
      },
    },
  });
})();

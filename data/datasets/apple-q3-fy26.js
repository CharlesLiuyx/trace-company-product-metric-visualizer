/* Apple Q3 FY26 income statement ($B), measured from the Build Source. */
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
      ${appleGlyph(98, 493, 40)}
      <text x="144" y="550" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      <text x="220" y="963" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="${BLACK}">iPad</text>
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
      <path d="M2146 579H2205C2230 579 2233 535 2257 535" fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
      <rect x="2119" y="570" width="130" height="96" fill="transparent"/>
      <text x="2186" y="620" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${name}</text>
      <text x="2186" y="662" text-anchor="middle" font-size="31" fill="${GREEN_LABEL}">$0.6B</text>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'],
      productCost: '产品', serviceCost: '服务', net: '净利润', tax: '税费',
      rnd: '研发', sga: '销售、一般及行政', yoy22: '同比 +22%', yoy29: '同比 +29%',
      yoyDown6: '同比 (6%)', yoy6: '同比 +6%', yoy18: '同比 +18%', yoy12: '同比 +12%',
      yoy16: '同比 +16%', grossMargin: '利润率 50%', operatingMargin: '利润率 33%',
      netMargin: '利润率 27%', ppUp4: '同比 +4 个百分点', ppUp3: '同比 +3 个百分点',
      ppUp2: '同比 +2 个百分点', productMargin: '毛利率 40%', serviceMargin: '毛利率 76%',
      rndShare: '占收入 11%', sgaShare: '占收入 7%', ppUp1: '同比 +1 个百分点',
      ppZeroDown: '同比 (0 个百分点)', macSub: 'Air、Pro、Mini',
      wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', net: 'Net profit', tax: 'Tax',
      rnd: 'R&D', sga: 'SG&A', yoy22: '+22% Y/Y', yoy29: '+29% Y/Y',
      yoyDown6: '(6%) Y/Y', yoy6: '+6% Y/Y', yoy18: '+18% Y/Y', yoy12: '+12% Y/Y',
      yoy16: '+16% Y/Y', grossMargin: '50% margin', operatingMargin: '33% margin',
      netMargin: '27% margin', ppUp4: '+4pp Y/Y', ppUp3: '+3pp Y/Y', ppUp2: '+2pp Y/Y',
      productMargin: '40% gross margin', serviceMargin: '76% gross margin',
      rndShare: '11% of revenue', sgaShare: '7% of revenue', ppUp1: '+1pp Y/Y',
      ppZeroDown: '(0pp) Y/Y', macSub: 'Air, Pro, Mini',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);

    return {
      iphone: { blocks: [block(367, 325, [value(), note(t.yoy22)], 'start', 12)] },
      mac: { blocks: [
        block(364, 675, [value(), note(t.yoy29)], 'start', 12),
        { ...block(214, 746, [name('Mac', 69)], 'start', 7), semanticRole: 'name' },
        { ...block(214, 811, [note(t.macSub, 24)], 'start', 7), semanticRole: 'note' },
      ] },
      ipad: { blocks: [
        block(371, 841, [value(), note(t.yoyDown6)], 'start', 12),
      ] },
      wearables: { blocks: [
        block(368, 1007, [value(), note(t.yoy6)], 'start', 12),
        block(220, 1145, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(798, 434, [name(t.products), value(), note(t.yoy18)], 'middle', 12)] },
      services: { blocks: [block(798, 1046, [name(t.services), value(), note(t.yoy12)], 'middle', 12)] },
      revenue: { blocks: [block(1168, 540, [name(t.revenue), value(), note(t.yoy16)], 'middle', 12)] },
      gross_profit: { blocks: [
        block(1540, 393, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppUp4)], 'middle', 12),
      ] },
      cost_of_revenue: { blocks: [
        block(1542, 1252, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9),
      ] },
      operating_profit: { blocks: [
        block(1920, 313, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppUp3)], 'middle', 11),
      ] },
      operating_expenses: { blocks: [
        block(1919, 876, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8),
      ] },
      product_cost: { blocks: [
        block(1920, 1069, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'middle', 9),
      ] },
      service_cost: { blocks: [
        block(1920, 1240, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'middle', 9),
      ] },
      other_income: { blocks: [] },
      net_profit: { blocks: [
        block(2448, 436, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppUp2)], 'middle', 11),
      ] },
      tax: { blocks: [block(2448, 657, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [
        block(2448, 846, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27), note(t.ppUp1, 27)], 'middle', 8),
      ] },
      sga: { blocks: [
        block(zh ? 2460 : 2448, 1070, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27), note(t.ppZeroDown, 27)], 'middle', 8),
      ] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q3-fy26',
    name: 'Apple · Q3 FY26',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q3-fy26.png', width: 2667, height: 1500 },
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
      { id: 'other_income', representation: 'annotation', value: 0.6, type: 'profit' },
    ],
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 389, y: 423, width: 71, height: 208 },
        mac: { x: 389, y: 766, width: 71, height: 37 },
        ipad: { x: 389, y: 941, width: 71, height: 21 },
        wearables: { x: 389, y: 1109, width: 71, height: 28 },
        products: { x: 763, y: 591, width: 70, height: 300 },
        services: { x: 763, y: 1202, width: 70, height: 117 },
        revenue: { x: 1137, y: 693, width: 70, height: 419 },
        gross_profit: { x: 1510, y: 585, width: 71, height: 208 },
        cost_of_revenue: { x: 1510, y: 1034, width: 71, height: 207 },
        product_cost: { x: 1719, y: 1059, width: 70, height: 179 },
        service_cost: { x: 1719, y: 1295, width: 70, height: 26 },
        operating_profit: { x: 1884, y: 501, width: 71, height: 135 },
        operating_expenses: { x: 1884, y: 792, width: 71, height: 70 },
        net_profit: { x: 2257, y: 422, width: 71, height: 113 },
        tax: { x: 2257, y: 685, width: 71, height: 22 },
        rnd: { x: 2257, y: 862, width: 71, height: 44 },
        sga: { x: 2257, y: 1092, width: 71, height: 27 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 54.3, notes: ['+22% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'Mac', value: 10.4, notes: ['+29% Y/Y', 'Air, Pro, Mini'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 6.2, notes: ['(6%) Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: ['Wearables, Home,', 'and Accessories'], value: 7.9, notes: ['+6% Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 78.7, notes: ['+18% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 30.7, notes: ['+12% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 109.4, notes: ['+16% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 54.8, notes: ['50% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 54.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 35.7, notes: ['33% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 19.1 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 47.1, notes: ['40% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 7.5, notes: ['76% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 29.8, notes: ['27% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6.4 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 11.7, notes: ['11% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 7.3, notes: ['7% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 54.3, sourceWidth: 208, targetWidth: 208, y0: 527, y1: 695, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 10.4, sourceWidth: 37, targetWidth: 37, y0: 784.5, y1: 817.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 6.2, sourceWidth: 21, targetWidth: 24, y0: 951.5, y1: 848, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 7.9, sourceWidth: 28, targetWidth: 31, y0: 1123, y1: 875.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 78.7, sourceWidth: 300, targetWidth: 302, y0: 741, y1: 844, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 30.7, sourceWidth: 117, targetWidth: 117, y0: 1260.5, y1: 1053.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 54.8, sourceWidth: 210, targetWidth: 208, y0: 798, y1: 689, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 54.6, sourceWidth: 209, targetWidth: 207, y0: 1007.5, y1: 1137.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 35.7, sourceWidth: 136, targetWidth: 135, y0: 653, y1: 568.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 19.1, sourceWidth: 72, targetWidth: 70, y0: 757, y1: 827, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 29.8, sourceWidth: 113, targetWidth: 113, y0: 557.5, y1: 478.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 6.4, sourceWidth: 22, targetWidth: 22, y0: 625, y1: 696, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 11.7, sourceWidth: 43, targetWidth: 44, y0: 813.5, y1: 884, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 7.3, sourceWidth: 27, targetWidth: 27, y0: 848.5, y1: 1105.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 47.1, sourceWidth: 179, targetWidth: 179, y0: 1123.5, y1: 1148.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 7.5, sourceWidth: 28, targetWidth: 26, y0: 1227, y1: 1308, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2026 财年第三季度',
        meta: {
          title: 'Apple 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 6 月',
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +22%'] },
          mac: { label: 'Mac', notes: ['同比 +29%', 'Air、Pro、Mini'] },
          ipad: { label: 'iPad', notes: ['同比 (6%)'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 +6%'] },
          products: { label: '产品', notes: ['同比 +18%'] },
          services: { label: '服务', notes: ['同比 +12%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 40%'] },
          service_cost: { label: '服务', notes: ['毛利率 76%'] },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] },
        },
        nonNodeMetrics: { other_income: { label: '其他' } },
        layout: { labels: labels(true) },
        annotationsSvg: brandAnnotations() + otherIncomeCallout(true),
      },
    },
  });
})();

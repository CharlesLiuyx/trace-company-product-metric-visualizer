/* Apple Q3 FY23 income statement ($B), measured from the native source image. */
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
    return `<g data-typography-role="brand">
      <g class="sankey-interactive-annotation" data-node="iphone">
        ${appleGlyph(98, 407, 40)}
        <text x="144" y="448" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="wearables">
        ${appleGlyph(98, 973, 42)}
        <text x="148" y="1011" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
        ${appleGlyph(98, 1047, 42)}
        <text x="148" y="1085" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      </g>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(78 1192)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function labels(zh) {
    const t = zh ? {
      products: '产品', services: '服务', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operating: '营业利润', expenses: ['运营', '费用'], productCost: '产品', serviceCost: '服务',
      net: '净利润', tax: '税费', other: '其他', rnd: '研发', sga: '销售、一般及行政',
      yoyDown2: '同比 (2%)', yoyDown7: '同比 (7%)', yoyDown20: '同比 (20%)', yoyUp2: '同比 +2%',
      yoyDown4: '同比 (4%)', yoyUp8: '同比 +8%', yoyDown1: '同比 (1%)',
      grossMargin: '利润率 45%', operatingMargin: '利润率 28%', netMargin: '利润率 24%',
      ppUp: '同比 +1 个百分点', ppZero: '同比 +0 个百分点',
      productMargin: '毛利率 35%', serviceMargin: '毛利率 71%',
      rndShare: '占收入 9%', sgaShare: '占收入 7%',
      macSub: 'Air、Pro、iMac', wearables: ['可穿戴设备、家居与', '配件'],
    } : {
      products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'],
      productCost: 'Products', serviceCost: 'Services', net: 'Net profit', tax: 'Tax', other: 'Other',
      rnd: 'R&D', sga: 'SG&A', yoyDown2: '(2%) Y/Y', yoyDown7: '(7%) Y/Y',
      yoyDown20: '(20%) Y/Y', yoyUp2: '+2% Y/Y', yoyDown4: '(4%) Y/Y', yoyUp8: '+8% Y/Y',
      yoyDown1: '(1%) Y/Y', grossMargin: '45% margin', operatingMargin: '28% margin',
      netMargin: '24% margin', ppUp: '+1pp Y/Y', ppZero: '+0pp Y/Y',
      productMargin: '35% gross margin', serviceMargin: '71% gross margin',
      rndShare: '9% of revenue', sgaShare: '7% of revenue', macSub: 'Air, Pro, iMac',
      wearables: ['Wearables, Home, and', 'Accessories'],
    };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(366, 271, [value(), note(t.yoyDown2)], 'start', 12)] },
      mac: { blocks: [
        block(380, 596, [value(), note(t.yoyDown7)], 'start', 12),
        block(104, 654, [name('Mac', 63), note(t.macSub, 23)], 'start', 7),
      ] },
      ipad: { blocks: [
        block(366, 788, [value(), note(t.yoyDown20)], 'start', 12),
        block(220, 854, [name('iPad', 62)], 'start'),
      ] },
      wearables: { blocks: [
        block(380, 966, [value(), note(t.yoyUp2)], 'start', 12),
        block(222, 1108, [note(t.wearables[0], 22), note(t.wearables[1], 22)], 'middle', 6),
      ] },
      products: { blocks: [block(801, 414, [name(t.products), value(), note(t.yoyDown4)], 'middle', 12)] },
      services: { blocks: [block(801, 1034, [name(t.services), value(), note(t.yoyUp8)], 'middle', 12)] },
      revenue: { blocks: [block(1174, 524, [name(t.revenue), value(), note(t.yoyDown1)], 'middle', 12)] },
      gross_profit: { blocks: [block(1548, 378, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.ppUp)], 'middle', 12)] },
      cost_of_revenue: { blocks: [block(1556, 1152, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9)] },
      operating_profit: { blocks: [block(1928, 287, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.ppZero)], 'middle', 11)] },
      operating_expenses: { blocks: [block(1924, 813, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8)] },
      product_cost: { blocks: [block(1888, 1028, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'start', 9)] },
      service_cost: { blocks: [block(1892, 1210, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'start', 9)] },
      net_profit: { blocks: [block(2357, 344, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.ppUp)], 'start', 11)] },
      tax: { blocks: [block(2448, 620, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      other_expense: { blocks: [block(2448, 724, [cost(t.other, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [block(2448, 882, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.rndShare, 27)], 'middle', 8)] },
      sga: { blocks: [block(2454, 1072, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.sgaShare, 27)], 'middle', 8)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q3-fy23',
    name: 'Apple · Q3 FY23',
    company: 'Apple',
    meta: {
      company: 'Apple', title: 'Apple Q3 FY23 Income Statement', period: 'Q3 FY23',
      periodNote: 'Ending June 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/apple-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 92, titleWeight: 800, titleTextLength: 2080,
      periodX: 1334, periodY: 1306, periodNoteY: 1348,
      logoWidth: 280, logoHeight: 270, logoY: 221, logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: '#666666', label: NOTE }, hub: { node: '#666666', label: NOTE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandAnnotations(),
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 391, y: 361, width: 71, height: 162 },
        mac: { x: 391, y: 688, width: 71, height: 27 },
        ipad: { x: 391, y: 884, width: 71, height: 21 },
        wearables: { x: 393, y: 1077, width: 71, height: 32 },
        products: { x: 767, y: 561, width: 70, height: 251 },
        services: { x: 765, y: 1198, width: 70, height: 86 },
        revenue: { x: 1139, y: 667, width: 70, height: 339 },
        gross_profit: { x: 1513, y: 562, width: 70, height: 150 },
        cost_of_revenue: { x: 1508, y: 937, width: 70, height: 187 },
        operating_profit: { x: 1886, y: 471, width: 71, height: 94 },
        operating_expenses: { x: 1889, y: 740, width: 70, height: 53 },
        product_cost: { x: 1766, y: 1004, width: 70, height: 161 },
        service_cost: { x: 1764, y: 1254, width: 70, height: 24 },
        net_profit: { x: 2259, y: 363, width: 71, height: 81 },
        tax: { x: 2259, y: 648, width: 71, height: 10 },
        other_expense: { x: 2259, y: 758, width: 71, height: 2 },
        rnd: { x: 2259, y: 904, width: 71, height: 28 },
        sga: { x: 2259, y: 1104, width: 71, height: 22 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 39.7, notes: ['(2%) Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'Mac', value: 6.9, notes: ['(7%) Y/Y', 'Air, Pro, iMac'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 5.8, notes: ['(20%) Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: 'Wearables, Home, and Accessories', value: 8.3, notes: ['+2% Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 60.6, notes: ['(4%) Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 21.2, notes: ['+8% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 81.8, notes: ['(1%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 36.4, notes: ['45% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: 'Cost of revenue', value: 45.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 23.0, valueText: '$23.0B', notes: ['28% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 13.4 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 39.1, notes: ['35% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.2, notes: ['71% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 19.9, notes: ['24% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.9 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.3 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.4, notes: ['9% of revenue'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 6.0, valueText: '$6.0B', notes: ['7% of revenue'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 39.7, sourceWidth: 162, targetWidth: 164, y0: 442, y1: 643, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 6.9, sourceWidth: 27, targetWidth: 28, y0: 701.5, y1: 739, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 5.8, sourceWidth: 21, targetWidth: 24, y0: 894.5, y1: 765, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 8.3, sourceWidth: 32, targetWidth: 35, y0: 1093, y1: 794.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 60.6, sourceWidth: 251, targetWidth: 253, y0: 686.5, y1: 793.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 21.2, sourceWidth: 86, targetWidth: 86, y0: 1241, y1: 963, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 36.4, sourceWidth: 152, targetWidth: 150, y0: 743, y1: 637, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 45.4, sourceWidth: 187, targetWidth: 187, y0: 912.5, y1: 1030.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 23.0, sourceWidth: 94, targetWidth: 94, y0: 609, y1: 518, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 13.4, sourceWidth: 56, targetWidth: 53, y0: 684, y1: 766.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 19.9, sourceWidth: 81, targetWidth: 81, y0: 511.5, y1: 403.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.9, sourceWidth: 10, targetWidth: 10, y0: 557, y1: 653, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, sourceWidth: 2, targetWidth: 2, y0: 563, y1: 759, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.4, sourceWidth: 31, targetWidth: 28, y0: 755.5, y1: 918, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.0, sourceWidth: 22, targetWidth: 22, y0: 782, y1: 1115, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 39.1, sourceWidth: 163, targetWidth: 161, y0: 1018.5, y1: 1084.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.2, sourceWidth: 24, targetWidth: 24, y0: 1112, y1: 1266, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['tv'],
      zh: {
        name: 'Apple · 2023 财年第三季度',
        meta: { title: 'Apple 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 6 月' },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 (2%)'] }, mac: { label: 'Mac', notes: ['同比 (7%)', 'Air、Pro、iMac'] },
          ipad: { label: 'iPad', notes: ['同比 (20%)'] }, wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 +2%'] },
          products: { label: '产品', notes: ['同比 (4%)'] }, services: { label: '服务', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' }, product_cost: { label: '产品', notes: ['毛利率 35%'] },
          service_cost: { label: '服务', notes: ['毛利率 71%'] }, net_profit: { label: '净利润', notes: ['利润率 24%', '同比 +1 个百分点'] },
          tax: { label: '税费' }, other_expense: { label: '其他' }, rnd: { label: '研发', notes: ['占收入 9%'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

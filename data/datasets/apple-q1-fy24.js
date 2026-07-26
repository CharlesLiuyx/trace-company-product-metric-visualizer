/* Apple Q1 FY24 income statement ($B), measured from the native Source. */
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

  function brandAnnotations(zh) {
    const wearables = zh ? ['可穿戴设备、家居与', '配件'] : ['Wearables, Home, and', 'Accessories'];
    const macFamily = zh ? 'Air、Pro、iMac' : 'Air, Pro, iMac';
    return `<g data-typography-role="brand">
      ${appleGlyph(98, 449, 40)}
      <text x="144" y="501" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>
      <text x="102" y="769" font-family="Arial,sans-serif" font-size="60" font-weight="700" fill="${BLACK}">MacBook</text>
      <text x="161" y="802" font-family="Arial,sans-serif" font-size="22" font-weight="400" fill="${NOTE}">${macFamily}</text>
      <text x="220" y="922" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="${BLACK}">iPad</text>
      ${appleGlyph(98, 977, 42)}
      <text x="148" y="1021" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1051, 42)}
      <text x="148" y="1090" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>
      <text x="222" y="1127" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" fill="${NOTE}">${wearables[0]}</text>
      <text x="222" y="1158" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" fill="${NOTE}">${wearables[1]}</text>
      <g data-annotation-clearance="apple-services-icon-cluster" transform="translate(73 1193)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;
  }

  function labels(zh) {
    const t = zh
      ? {
          products: '产品', services: '服务', revenue: '收入', gross: '毛利润',
          cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'],
          productCost: '产品', serviceCost: '服务', net: '净利润', tax: '税费',
          other: '其他', rnd: '研发', sga: '销售、一般及行政',
          yoy6: '同比 +6%', yoy1: '同比 +1%', yoyDown25: '同比 (25%)',
          yoyDown11: '同比 (11%)', yoy0: '同比 +0%', yoy11: '同比 +11%',
          yoy2: '同比 +2%', grossMargin: '利润率 46%', operatingMargin: '利润率 34%',
          netMargin: '利润率 28%', pp3: '同比 +3 个百分点',
          productMargin: '毛利率 39%', serviceMargin: '毛利率 73%',
          share6: '占收入 6%',
        }
      : {
          products: 'Products', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
          cost: ['Cost of', 'revenue'], operating: 'Operating profit',
          expenses: ['Operating', 'expenses'], productCost: 'Products', serviceCost: 'Services',
          net: 'Net profit', tax: 'Tax', other: 'Other', rnd: 'R&D', sga: 'SG&A',
          yoy6: '+6% Y/Y', yoy1: '+1% Y/Y', yoyDown25: '(25%) Y/Y',
          yoyDown11: '(11%) Y/Y', yoy0: '+0% Y/Y', yoy11: '+11% Y/Y', yoy2: '+2% Y/Y',
          grossMargin: '46% margin', operatingMargin: '34% margin', netMargin: '28% margin',
          pp3: '+3pp Y/Y', productMargin: '39% gross margin',
          serviceMargin: '73% gross margin', share6: '6% of revenue',
        };
    const name = (text, size = 40, color = BLACK) => line(text, size, 800, color);
    const value = (color = BLACK, size = 39) => line('$value', size, 400, color);
    const note = (text, size = 28) => line(text, size, 400, NOTE);
    const cost = (text, size = 32) => line(text, size, 800, RED_LABEL);
    return {
      iphone: { blocks: [block(364, 292, [value(), note(t.yoy6)], 'start', 12)] },
      mac: { blocks: [block(370, 648, [value(), note(t.yoy1)], 'start', 12)] },
      ipad: { blocks: [block(368, 805, [value(), note(t.yoyDown25)], 'start', 12)] },
      wearables: { blocks: [block(361, 965, [value(), note(t.yoyDown11)], 'start', 12)] },
      products: { blocks: [block(797, 423, [name(t.products), value(), note(t.yoy0)], 'middle', 12)] },
      services: { blocks: [block(797, 1063, [name(t.services), value(), note(t.yoy11)], 'middle', 12)] },
      revenue: { blocks: [block(1173, 525, [name(t.revenue), value(), note(t.yoy2)], 'middle', 12)] },
      gross_profit: {
        blocks: [block(1547, 392, [name(t.gross, 39, GREEN_LABEL), value(GREEN_LABEL), note(t.grossMargin), note(t.pp3)], 'middle', 12)],
      },
      cost_of_revenue: {
        blocks: [block(1552, 1166, [cost(t.cost[0], 38), cost(t.cost[1], 38), value(RED_LABEL, 37)], 'middle', 9)],
      },
      operating_profit: {
        blocks: [block(1938, 314, [name(t.operating, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.operatingMargin), note(t.pp3)], 'middle', 11)],
      },
      operating_expenses: {
        blocks: [block(1941, 847, [cost(t.expenses[0], 38), cost(t.expenses[1], 38), value(RED_LABEL, 36)], 'middle', 8)],
      },
      product_cost: {
        blocks: [block(1929, 1029, [cost(t.productCost), value(RED_LABEL, 31), note(t.productMargin, 27)], 'middle', 9)],
      },
      service_cost: {
        blocks: [block(1934, 1230, [cost(t.serviceCost), value(RED_LABEL, 31), note(t.serviceMargin, 27)], 'middle', 9)],
      },
      net_profit: {
        blocks: [block(2446, 375, [name(t.net, 39, GREEN_LABEL), value(GREEN_LABEL, 38), note(t.netMargin), note(t.pp3)], 'middle', 11)],
      },
      tax: { blocks: [block(2448, 573, [cost(t.tax, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      other_expense: { blocks: [block(2449, 665, [cost(t.other, 30), value(RED_LABEL, 30)], 'middle', 7)] },
      rnd: { blocks: [block(2448, 870, [cost(t.rnd, 31), value(RED_LABEL, 30), note(t.share6, 27)], 'middle', 8)] },
      sga: { blocks: [block(2451, 1100, [cost(t.sga, 31), value(RED_LABEL, 30), note(t.share6, 27)], 'middle', 8)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q1-fy24',
    name: 'Apple · Q1 FY24',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 168,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: 1334,
      periodY: 1310,
      periodNoteY: 1360,
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
    annotationsSvg: brandAnnotations(false),
    layout: {
      scale: 1,
      nodes: {
        iphone: { x: 388, y: 382, width: 71, height: 209 },
        mac: { x: 388, y: 738, width: 71, height: 21 },
        ipad: { x: 388, y: 895, width: 71, height: 20 },
        wearables: { x: 388, y: 1055, width: 71, height: 34 },
        products: { x: 762, y: 566, width: 70, height: 289 },
        services: { x: 762, y: 1207, width: 70, height: 67 },
        revenue: { x: 1138, y: 669, width: 70, height: 359 },
        gross_profit: { x: 1512, y: 578, width: 70, height: 163 },
        cost_of_revenue: { x: 1517, y: 950, width: 70, height: 194 },
        operating_profit: { x: 1906, y: 500, width: 70, height: 119 },
        operating_expenses: { x: 1906, y: 780, width: 70, height: 43 },
        product_cost: { x: 1731, y: 1000, width: 70, height: 174 },
        service_cost: { x: 1731, y: 1266, width: 70, height: 17 },
        net_profit: { x: 2256, y: 404, width: 71, height: 101 },
        tax: { x: 2256, y: 603, width: 71, height: 17 },
        other_expense: { x: 2256, y: 696, width: 71, height: 2 },
        rnd: { x: 2256, y: 902, width: 71, height: 21 },
        sga: { x: 2256, y: 1125, width: 71, height: 19 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 69.7, notes: ['+6% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'MacBook', value: 7.8, notes: ['+1% Y/Y', 'Air, Pro, iMac'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 7.0, valueText: '$7.0B', notes: ['(25%) Y/Y'] },
      { id: 'wearables', col: 0, order: 3, type: 'source', label: 'Wearables, Home, and Accessories', value: 12.0, valueText: '$12.0B', notes: ['(11%) Y/Y'] },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 96.5, notes: ['+0% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 23.1, notes: ['+11% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 119.6, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 54.9, notes: ['46% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: 'Cost of revenue', value: 64.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 40.4, notes: ['34% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 14.5 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 58.4, notes: ['39% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 6.3, notes: ['73% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 33.9, notes: ['28% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6.4 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.1 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.7, notes: ['6% of revenue'] },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 6.8, notes: ['6% of revenue'] },
    ],
    links: [
      { source: 'iphone', target: 'products', value: 69.7, sourceWidth: 209, targetWidth: 210, y0: 486.5, y1: 671, sourceOrder: 0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 7.8, sourceWidth: 21, targetWidth: 23, y0: 748.5, y1: 787.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 7.0, sourceWidth: 20, targetWidth: 21, y0: 905, y1: 809.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 12.0, sourceWidth: 34, targetWidth: 35, y0: 1072, y1: 837.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 96.5, sourceWidth: 289, targetWidth: 291, y0: 710.5, y1: 814.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 23.1, sourceWidth: 67, targetWidth: 68, y0: 1240.5, y1: 994, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 54.9, sourceWidth: 165, targetWidth: 163, y0: 751.5, y1: 659.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 64.7, sourceWidth: 194, targetWidth: 194, y0: 931, y1: 1047, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 40.4, sourceWidth: 120, targetWidth: 119, y0: 638, y1: 559.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.5, sourceWidth: 43, targetWidth: 43, y0: 719.5, y1: 801.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 33.9, sourceWidth: 101, targetWidth: 101, y0: 550.5, y1: 454.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 6.4, sourceWidth: 17, targetWidth: 17, y0: 609.5, y1: 611.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 618, y1: 697, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.7, sourceWidth: 23, targetWidth: 21, y0: 791.5, y1: 912.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 6.8, sourceWidth: 20, targetWidth: 19, y0: 813, y1: 1134.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 58.4, sourceWidth: 177, targetWidth: 174, y0: 1038.5, y1: 1087, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 6.3, sourceWidth: 17, targetWidth: 17, y0: 1135.5, y1: 1274.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['MacBook', 'iPad', 'WATCH', 'AirPods', 'tv'],
      zh: {
        name: 'Apple · 2024 财年第一季度',
        meta: {
          title: 'Apple 2024 财年第一季度利润表',
          period: '2024 财年第一季度',
          periodNote: '截至 2023 年 12 月',
        },
        nodes: {
          iphone: { label: 'iPhone', notes: ['同比 +6%'] },
          mac: { label: 'MacBook', notes: ['同比 +1%', 'Air、Pro、iMac'] },
          ipad: { label: 'iPad', notes: ['同比 (25%)'] },
          wearables: { label: '可穿戴设备、家居与配件', notes: ['同比 (11%)'] },
          products: { label: '产品', notes: ['同比 +0%'] },
          services: { label: '服务', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          product_cost: { label: '产品', notes: ['毛利率 39%'] },
          service_cost: { label: '服务', notes: ['毛利率 73%'] },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 6%'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 6%'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: brandAnnotations(true),
      },
    },
  });
})();

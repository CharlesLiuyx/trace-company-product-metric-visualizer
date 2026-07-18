/* AT&T Q1 FY26 income statement ($B), reconstructed from the measured
 * processed reference as a fixed d3-sankey layout. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#0099dc';
  const BLUE_LINK = '#85cae8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_X = 2494;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });

  function cards(zh) {
    const first = zh
      ? ['后付费手机', '7,450 万用户', '净增 +29.4 万，同比']
      : ['Postpaid Phones', '74.5M Subscribers', 'Net Adds +294K Y/Y'];
    const second = zh
      ? ['AT&T 光纤', '1,250 万用户', '净增 +27.3 万，同比']
      : ['AT&T Fiber', '12.5M Subscribers', 'Net Adds +273K Y/Y'];
    return '<g>'
      + '<rect x="53" y="1200" width="351" height="150" rx="30" fill="' + BLUE + '"/>'
      + '<text x="228.5" y="1252" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + first[0] + '</text>'
      + '<text x="228.5" y="1291" text-anchor="middle" font-size="28" fill="#fff">' + first[1] + '</text>'
      + '<text x="228.5" y="1324" text-anchor="middle" font-size="22" fill="#fff">' + first[2] + '</text>'
      + '<rect x="416" y="1200" width="330" height="150" rx="30" fill="' + BLUE + '"/>'
      + '<text x="581" y="1252" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + second[0] + '</text>'
      + '<text x="581" y="1291" text-anchor="middle" font-size="28" fill="#fff">' + second[1] + '</text>'
      + '<text x="581" y="1324" text-anchor="middle" font-size="22" fill="#fff">' + second[2] + '</text>'
      + '</g>';
  }

  function labels(zh) {
    const t = zh ? {
      wireless: '无线服务',
      advanced: ['高级家庭', '互联网'],
      fiber: '企业光纤',
      transitional: ['企业', '过渡业务'],
      other: '其他',
      service: '服务',
      equipment: '设备',
      revenue: '收入',
      operating: '营业利润',
      expenses: ['营业', '费用'],
      otherIncome: '其他收入',
      net: '净利润',
      interest: '利息',
      tax: '税费',
      sga: '销售、一般及管理费用',
      otherCost: ['其他收入', '成本'],
      da: ['折旧与', '摊销'],
      yoy2: '同比 +2%',
      yoy59: '同比 +59%',
      yoy45: '同比 +45%',
      yoyDown59: '同比 (59%)',
      yoy1: '同比 +1%',
      yoy10: '同比 +10%',
      yoy3: '同比 +3%',
      operatingMargin: '利润率 21%',
      operatingPp: '同比 +2 个百分点',
      netMargin: '利润率 13%',
      netPp: '同比 (2 个百分点)',
    } : {
      wireless: 'Wireless services',
      advanced: ['Advanced home', 'Internet'],
      fiber: 'Business fiber',
      transitional: ['Business', 'transitional'],
      other: 'Other',
      service: 'Service',
      equipment: 'Equipment',
      revenue: 'Revenue',
      operating: 'Operating profit',
      expenses: ['Operating', 'expenses'],
      otherIncome: 'Other income',
      net: 'Net profit',
      interest: 'Interest',
      tax: 'Tax',
      sga: 'SG&A',
      otherCost: ['Other cost', 'of revenue'],
      da: ['Depreciation &', 'Amortization'],
      yoy2: '+2% Y/Y',
      yoy59: '+59% Y/Y',
      yoy45: '+45% Y/Y',
      yoyDown59: '(59%) Y/Y',
      yoy1: '+1% Y/Y',
      yoy10: '+10% Y/Y',
      yoy3: '+3% Y/Y',
      operatingMargin: '21% margin',
      operatingPp: '+2pp Y/Y',
      netMargin: '13% margin',
      netPp: '(2pp) Y/Y',
    };
    const name = (text, size = 40, color = BLUE) => line(text, size, { weight: 800, color });
    const costName = (text, size = 32) => line(text, size, { weight: 800, color: RED_LABEL });
    const value = (color = BLUE, size = 39) => line('$value', size, { color });
    const note = (text, size = 29) => line(text, size, { color: NOTE });

    return {
      wireless_services: { blocks: [
        block(438, 250, [value(), note(t.yoy2)], { lineGap: 9 }),
        block(205, 414, [name(t.wireless)]),
      ] },
      advanced_home_internet: { blocks: [
        block(438, 580, [value(), note(t.yoy2)], { lineGap: 9 }),
        block(205, 642, [name(t.advanced[0]), name(t.advanced[1])], { lineGap: 10 }),
      ] },
      business_fiber: { blocks: [
        block(438, 747, [value(), note(t.yoy59)], { lineGap: 9 }),
        block(205, 827, [name(t.fiber)]),
      ] },
      business_transitional: { blocks: [
        block(438, 896, [value(), note(t.yoy45)], { lineGap: 9 }),
        block(205, 948, [name(t.transitional[0]), name(t.transitional[1])], { lineGap: 10 }),
      ] },
      other: { blocks: [
        block(438, 1037, [value(), note(t.yoyDown59)], { lineGap: 9 }),
        block(205, 1122, [name(t.other)]),
      ] },
      service: { blocks: [
        block(905, 344, [name(t.service), value(), note(t.yoy1)], { lineGap: 9 }),
      ] },
      equipment: { blocks: [
        block(904, 898, [name(t.equipment), value(), note(t.yoy10)], { lineGap: 9 }),
      ] },
      revenue: { blocks: [
        block(1368, 490, [name(t.revenue), value(), note(t.yoy3)], { lineGap: 9 }),
      ] },
      operating_profit: { blocks: [
        block(1835, 306, [
          name(t.operating, 40, GREEN_LABEL),
          value(GREEN_LABEL),
          note(t.operatingMargin),
          note(t.operatingPp),
        ], { lineGap: 9 }),
      ] },
      operating_expenses: { blocks: [
        block(1839, 1125, [
          costName(t.expenses[0], 36),
          costName(t.expenses[1], 36),
          value(RED_LABEL, 36),
        ], { lineGap: 9 }),
      ] },
      other_income: { blocks: [
        block(2183, 463, [name(t.otherIncome, 32, GREEN_LABEL), value(GREEN_LABEL, 32)], { lineGap: 8 }),
      ] },
      net_profit: { blocks: [
        block(RIGHT_X, 306, [
          name(t.net, 40, GREEN_LABEL),
          value(GREEN_LABEL),
          note(t.netMargin),
          note(t.netPp),
        ], { lineGap: 9 }),
      ] },
      interest: { blocks: [
        block(RIGHT_X, 574, [costName(t.interest), value(RED_LABEL, 31)], { lineGap: 8 }),
      ] },
      tax: { blocks: [
        block(RIGHT_X, 703, [costName(t.tax), value(RED_LABEL, 31)], { lineGap: 8 }),
      ] },
      sga: { blocks: [
        block(zh ? 2505 : RIGHT_X, 847, [
          costName(t.sga, zh ? 30 : 32),
          value(RED_LABEL, 31),
        ], { lineGap: 8 }),
      ] },
      equipment_cost: { blocks: [
        block(RIGHT_X, 1004, [costName(t.equipment), value(RED_LABEL, 31)], { lineGap: 8 }),
      ] },
      other_cost_of_revenue: { blocks: [
        block(RIGHT_X, 1129, [
          costName(t.otherCost[0]),
          costName(t.otherCost[1]),
          value(RED_LABEL, 31),
        ], { lineGap: 8 }),
      ] },
      depreciation_amortization: { blocks: [
        block(RIGHT_X, 1270, [
          costName(t.da[0]),
          costName(t.da[1]),
          value(RED_LABEL, 31),
        ], { lineGap: 8 }),
      ] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'at-t-q1-fy26',
    name: 'AT&T · Q1 FY26',
    company: 'AT&T',
    meta: {
      company: 'AT&T',
      title: 'AT&T Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/at-t-q1-fy26.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2050,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: {
        mode: 'error',
        // The Source paints each of these multi-link faces as one continuous
        // node-backed interface; Matrix review preserves per-link identity.
        fullFaceIds: [
          'service:left',
          'revenue:left',
          'revenue:right',
          'operating_profit:right',
          'operating_expenses:right',
          'net_profit:left',
        ],
      },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      {
        key: 'at-t-company-logo',
        href: 'data/assets/raster-annotations/at-t/company-logo.png',
        x: 1058,
        y: 250,
        width: 538,
        height: 230,
      },
    ],
    annotationsSvg: cards(false),
    layout: {
      scale: 1,
      nodes: {
        wireless_services: { x: 402, y: 346, width: 71, height: 183 },
        advanced_home_internet: { x: 402, y: 675, width: 71, height: 28 },
        business_fiber: { x: 402, y: 843, width: 71, height: 18 },
        business_transitional: { x: 402, y: 992, width: 71, height: 9 },
        other: { x: 402, y: 1135, width: 71, height: 18 },
        service: { x: 869, y: 493, width: 70, height: 265 },
        equipment: { x: 869, y: 1046, width: 70, height: 61 },
        revenue: { x: 1336, y: 638, width: 71, height: 329 },
        operating_profit: { x: 1804, y: 492, width: 70, height: 67 },
        operating_expenses: { x: 1804, y: 848, width: 70, height: 259 },
        other_income: { x: 2151, y: 444, width: 70, height: 4 },
        net_profit: { x: 2270, y: 353, width: 71, height: 42 },
        interest: { x: 2270, y: 605, width: 71, height: 18 },
        tax: { x: 2270, y: 739, width: 71, height: 10 },
        sga: { x: 2270, y: 846, width: 71, height: 75 },
        equipment_cost: { x: 2270, y: 1012, width: 71, height: 64 },
        other_cost_of_revenue: { x: 2270, y: 1155, width: 71, height: 63 },
        depreciation_amortization: { x: 2270, y: 1305, width: 71, height: 50 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'wireless_services', col: 0, order: 0, type: 'source', label: 'Wireless services', value: 17.7, valueText: '$17.7B', notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'advanced_home_internet', col: 0, order: 1, type: 'source', label: ['Advanced home', 'Internet'], value: 2.8, valueText: '$2.8B', notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'business_fiber', col: 0, order: 2, type: 'source', label: 'Business fiber', value: 1.9, valueText: '$1.9B', notes: ['+59% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'business_transitional', col: 0, order: 3, type: 'source', label: ['Business', 'transitional'], value: 1.1, valueText: '$1.1B', notes: ['+45% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other', col: 0, order: 4, type: 'source', label: 'Other', value: 2.0, valueText: '$2.0B', notes: ['(59%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'service', col: 1, order: 0, type: 'hub', label: 'Service', value: 25.5, valueText: '$25.5B', notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'equipment', col: 1, order: 1, type: 'source', label: 'Equipment', value: 6.0, valueText: '$6.0B', notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 31.5, valueText: '$31.5B', notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 6.7, valueText: '$6.7B', notes: ['21% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 24.8, valueText: '($24.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other income', value: 0.6, valueText: '$0.6B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: 'Net profit', value: 4.2, valueText: '$4.2B', notes: ['13% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 1.8, valueText: '($1.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 3, type: 'cost', label: 'Tax', value: 1.2, valueText: '($1.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 7.3, valueText: '($7.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'equipment_cost', col: 4, order: 5, type: 'cost', label: 'Equipment', value: 6.3, valueText: '($6.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_cost_of_revenue', col: 4, order: 6, type: 'cost', label: ['Other cost', 'of revenue'], value: 6.3, valueText: '($6.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 7, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'wireless_services', target: 'service', value: 17.7, sourceWidth: 183, targetWidth: 183, y0: 437.5, y1: 584.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'advanced_home_internet', target: 'service', value: 2.8, sourceWidth: 28, targetWidth: 30, y0: 689, y1: 691, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'business_fiber', target: 'service', value: 1.9, sourceWidth: 18, targetWidth: 20, y0: 852, y1: 716, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'business_transitional', target: 'service', value: 1.1, sourceWidth: 9, targetWidth: 11, y0: 996.5, y1: 731.5, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'other', target: 'service', value: 2.0, sourceWidth: 18, targetWidth: 21, y0: 1144, y1: 747.5, sourceOrder: 0, targetOrder: 4, linkTint: BLUE_LINK },
      { source: 'service', target: 'revenue', value: 25.5, sourceWidth: 265, targetWidth: 268, y0: 625.5, y1: 772, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'equipment', target: 'revenue', value: 6.0, sourceWidth: 61, targetWidth: 61, y0: 1076.5, y1: 936.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 6.7, sourceWidth: 68, targetWidth: 67, y0: 672, y1: 525.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 24.8, sourceWidth: 261, targetWidth: 259, y0: 836.5, y1: 977.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 4.2, sourceWidth: 36, targetWidth: 38, y0: 510, y1: 372, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 1.8, sourceWidth: 21, targetWidth: 18, y0: 538.5, y1: 614, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.2, sourceWidth: 10, targetWidth: 10, y0: 554, y1: 744, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.6, sourceWidth: 4, targetWidth: 4, y0: 446, y1: 393, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 7.3, sourceWidth: 75, targetWidth: 75, y0: 885.5, y1: 883.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'equipment_cost', value: 6.3, sourceWidth: 67, targetWidth: 64, y0: 956.5, y1: 1044, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_cost_of_revenue', value: 6.3, sourceWidth: 67, targetWidth: 63, y0: 1023.5, y1: 1186.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 5.0, sourceWidth: 50, targetWidth: 50, y0: 1082, y1: 1330, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'AT&T · 2026 财年第一季度',
        meta: {
          title: 'AT&T 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleTextLength: 1900,
        },
        nodes: {
          wireless_services: { label: '无线服务', notes: ['同比 +2%'] },
          advanced_home_internet: { label: ['高级家庭', '互联网'], notes: ['同比 +2%'] },
          business_fiber: { label: '企业光纤', notes: ['同比 +59%'] },
          business_transitional: { label: ['企业', '过渡业务'], notes: ['同比 +45%'] },
          other: { label: '其他', notes: ['同比 (59%)'] },
          service: { label: '服务', notes: ['同比 +1%'] },
          equipment: { label: '设备', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 (2 个百分点)'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及管理费用' },
          equipment_cost: { label: '设备' },
          other_cost_of_revenue: { label: ['其他收入', '成本'] },
          depreciation_amortization: { label: ['折旧与', '摊销'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: cards(true),
      },
    },
  });
})();

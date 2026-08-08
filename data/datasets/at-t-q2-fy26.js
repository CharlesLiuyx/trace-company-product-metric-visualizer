/* AT&T Q2 FY26 income statement ($B), reconstructed from the measured
 * Source as a fixed d3-sankey layout. */
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
      ? ['后付费手机', '7,490 万用户', '净增 +43.2 万，同比']
      : ['Postpaid Phones', '74.9M Subscribers', 'Net Adds +432K Y/Y'];
    const second = zh
      ? ['AT&T 光纤', '1,210 万用户', '净增 +34.4 万，同比']
      : ['AT&T Fiber', '12.1M Subscribers', 'Net Adds +344K Y/Y'];
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
      yoy4: '同比 +4%',
      yoy65: '同比 +65%',
      yoy56: '同比 56%',
      yoyDown58: '同比 (58%)',
      yoy3: '同比 +3%',
      yoy0: '同比 +0%',
      yoy2: '同比 +2%',
      operatingMargin: '利润率 22%',
      operatingPp: '同比 +1 个百分点',
      netMargin: '利润率 16%',
      netPp: '同比 +0 个百分点',
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
      yoy4: '+4% Y/Y',
      yoy65: '+65% Y/Y',
      yoy56: '56% Y/Y',
      yoyDown58: '(58%) Y/Y',
      yoy3: '+3% Y/Y',
      yoy0: '+0% Y/Y',
      yoy2: '+2% Y/Y',
      operatingMargin: '22% margin',
      operatingPp: '+1pp Y/Y',
      netMargin: '16% margin',
      netPp: '+0pp Y/Y',
    };
    const name = (text, size = 40, color = BLUE) => line(text, size, { weight: 800, color });
    const costName = (text, size = 32) => line(text, size, { weight: 800, color: RED_LABEL });
    const value = (color = BLUE, size = 39) => line('$value', size, { color });
    const note = (text, size = 29) => line(text, size, { color: NOTE });

    return {
      wireless_services: { blocks: [
        block(438, 248, [value(), note(t.yoy4)], { lineGap: 9 }),
        block(205, 414, [name(t.wireless)]),
      ] },
      advanced_home_internet: { blocks: [
        block(438, 577, [value(), note(t.yoy4)], { lineGap: 9 }),
        block(205, 642, [name(t.advanced[0]), name(t.advanced[1])], { lineGap: 10 }),
      ] },
      business_fiber: { blocks: [
        block(438, 737, [value(), note(t.yoy65)], { lineGap: 9 }),
        block(205, 821, [name(t.fiber)]),
      ] },
      business_transitional: { blocks: [
        block(438, 889, [value(), note(t.yoy56)], { lineGap: 9 }),
        block(205, 942, [name(t.transitional[0]), name(t.transitional[1])], { lineGap: 10 }),
      ] },
      other: { blocks: [
        block(438, 1031, [value(), note(t.yoyDown58)], { lineGap: 9 }),
        block(205, 1112, [name(t.other)]),
      ] },
      service: { blocks: [
        block(898, 365, [name(t.service), value(), note(t.yoy3)], { lineGap: 9 }),
      ] },
      equipment: { blocks: [
        block(897, 906, [name(t.equipment), value(), note(t.yoy0)], { lineGap: 9 }),
      ] },
      revenue: { blocks: [
        block(1368, 497, [name(t.revenue), value(), note(t.yoy2)], { lineGap: 9 }),
      ] },
      operating_profit: { blocks: [
        block(1839, 330, [
          name(t.operating, 40, GREEN_LABEL),
          value(GREEN_LABEL),
          note(t.operatingMargin),
          note(t.operatingPp),
        ], { lineGap: 9 }),
      ] },
      operating_expenses: { blocks: [
        block(1843, 1076, [
          costName(t.expenses[0], 36),
          costName(t.expenses[1], 36),
          value(RED_LABEL, 36),
        ], { lineGap: 9 }),
      ] },
      other_income: { blocks: [
        block(2183, 493, [name(t.otherIncome, 32, GREEN_LABEL), value(GREEN_LABEL, 32)], { lineGap: 8 }),
      ] },
      net_profit: { blocks: [
        block(RIGHT_X, 321, [
          name(t.net, 40, GREEN_LABEL),
          value(GREEN_LABEL),
          note(t.netMargin),
          note(t.netPp),
        ], { lineGap: 9 }),
      ] },
      interest: { blocks: [
        block(RIGHT_X, 600, [costName(t.interest), value(RED_LABEL, 31)], { lineGap: 8 }),
      ] },
      tax: { blocks: [
        block(RIGHT_X, 710, [costName(t.tax), value(RED_LABEL, 31)], { lineGap: 8 }),
      ] },
      sga: { blocks: [
        block(zh ? 2505 : RIGHT_X, 822, [
          costName(t.sga, zh ? 30 : 32),
          value(RED_LABEL, 31),
        ], { lineGap: 8 }),
      ] },
      other_cost_of_revenue: { blocks: [
        block(RIGHT_X, 958, [
          costName(t.otherCost[0]),
          costName(t.otherCost[1]),
          value(RED_LABEL, 31),
        ], { lineGap: 8 }),
      ] },
      equipment_cost: { blocks: [
        block(RIGHT_X, 1122, [costName(t.equipment), value(RED_LABEL, 31)], { lineGap: 8 }),
      ] },
      depreciation_amortization: { blocks: [
        block(RIGHT_X, 1243, [
          costName(t.da[0]),
          costName(t.da[1]),
          value(RED_LABEL, 31),
        ], { lineGap: 8 }),
      ] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'at-t-q2-fy26',
    name: 'AT&T · Q2 FY26',
    company: 'AT&T',
    meta: {
      company: 'AT&T',
      title: 'AT&T Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/at-t-q2-fy26.png',
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
        wireless_services: { x: 402, y: 343, width: 71, height: 183 },
        advanced_home_internet: { x: 402, y: 674, width: 71, height: 28 },
        business_fiber: { x: 402, y: 833, width: 71, height: 17 },
        business_transitional: { x: 402, y: 986, width: 71, height: 7 },
        other: { x: 402, y: 1126, width: 71, height: 17 },
        service: { x: 869, y: 513, width: 70, height: 264 },
        equipment: { x: 869, y: 1054, width: 70, height: 55 },
        revenue: { x: 1336, y: 644, width: 71, height: 322 },
        operating_profit: { x: 1804, y: 514, width: 70, height: 70 },
        operating_expenses: { x: 1804, y: 809, width: 70, height: 249 },
        other_income: { x: 2144, y: 471, width: 70, height: 5 },
        net_profit: { x: 2270, y: 360, width: 71, height: 49 },
        interest: { x: 2270, y: 628, width: 71, height: 17 },
        tax: { x: 2270, y: 745, width: 71, height: 5 },
        sga: { x: 2270, y: 825, width: 71, height: 73 },
        other_cost_of_revenue: { x: 2270, y: 984, width: 71, height: 67 },
        equipment_cost: { x: 2270, y: 1134, width: 71, height: 57 },
        depreciation_amortization: { x: 2270, y: 1281, width: 71, height: 47 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'wireless_services', col: 0, order: 0, type: 'source', label: 'Wireless services', value: 18.2, valueText: '$18.2B', notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'advanced_home_internet', col: 0, order: 1, type: 'source', label: ['Advanced home', 'Internet'], value: 2.9, valueText: '$2.9B', notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'business_fiber', col: 0, order: 2, type: 'source', label: 'Business fiber', value: 1.9, valueText: '$1.9B', notes: ['+65% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'business_transitional', col: 0, order: 3, type: 'source', label: ['Business', 'transitional'], value: 1.0, valueText: '$1.0B', notes: ['56% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other', col: 0, order: 4, type: 'source', label: 'Other', value: 1.9, valueText: '$1.9B', notes: ['(58%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'service', col: 1, order: 0, type: 'hub', label: 'Service', value: 26.0, valueText: '$26.0B', notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'equipment', col: 1, order: 1, type: 'source', label: 'Equipment', value: 5.6, valueText: '$5.6B', notes: ['+0% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 31.6, valueText: '$31.6B', notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 7.0, valueText: '$7.0B', notes: ['22% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 24.5, valueText: '($24.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other income', value: 0.7, valueText: '$0.7B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: 'Net profit', value: 5.0, valueText: '$5.0B', notes: ['16% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 1.9, valueText: '($1.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 3, type: 'cost', label: 'Tax', value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 7.2, valueText: '($7.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_cost_of_revenue', col: 4, order: 5, type: 'cost', label: ['Other cost', 'of revenue'], value: 6.6, valueText: '($6.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'equipment_cost', col: 4, order: 6, type: 'cost', label: 'Equipment', value: 5.7, valueText: '($5.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 7, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'wireless_services', target: 'service', value: 18.2, sourceWidth: 183, targetWidth: 183, y0: 434.5, y1: 604.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'advanced_home_internet', target: 'service', value: 2.9, sourceWidth: 28, targetWidth: 29, y0: 688, y1: 710.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'business_fiber', target: 'service', value: 1.9, sourceWidth: 17, targetWidth: 20, y0: 841.5, y1: 735, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'business_transitional', target: 'service', value: 1.0, sourceWidth: 7, targetWidth: 10, y0: 989.5, y1: 750, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'other', target: 'service', value: 1.9, sourceWidth: 17, targetWidth: 22, y0: 1134.5, y1: 766, sourceOrder: 0, targetOrder: 4, linkTint: BLUE_LINK },
      { source: 'service', target: 'revenue', value: 26.0, sourceWidth: 264, targetWidth: 266, y0: 645, y1: 777, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'equipment', target: 'revenue', value: 5.6, sourceWidth: 55, targetWidth: 56, y0: 1081.5, y1: 938, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 7.0, sourceWidth: 70, targetWidth: 70, y0: 679, y1: 549, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 24.5, sourceWidth: 252, targetWidth: 249, y0: 840, y1: 933.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 5.0, sourceWidth: 49, targetWidth: 44, y0: 538.5, y1: 382, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 1.9, sourceWidth: 17, targetWidth: 17, y0: 571.5, y1: 636.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 4, targetWidth: 5, y0: 582, y1: 747.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.7, sourceWidth: 5, targetWidth: 5, y0: 473.5, y1: 406.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 7.2, sourceWidth: 73, targetWidth: 73, y0: 845.5, y1: 861.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_cost_of_revenue', value: 6.6, sourceWidth: 67, targetWidth: 67, y0: 915.5, y1: 1017.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'equipment_cost', value: 5.7, sourceWidth: 57, targetWidth: 57, y0: 977.5, y1: 1162.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 5.0, sourceWidth: 52, targetWidth: 47, y0: 1032, y1: 1304.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'AT&T · 2026 财年第二季度',
        meta: {
          title: 'AT&T 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleTextLength: 1900,
        },
        nodes: {
          wireless_services: { label: '无线服务', notes: ['同比 +4%'] },
          advanced_home_internet: { label: ['高级家庭', '互联网'], notes: ['同比 +4%'] },
          business_fiber: { label: '企业光纤', notes: ['同比 +65%'] },
          business_transitional: { label: ['企业', '过渡业务'], notes: ['同比 56%'] },
          other: { label: '其他', notes: ['同比 (58%)'] },
          service: { label: '服务', notes: ['同比 +3%'] },
          equipment: { label: '设备', notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 22%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 +0 个百分点'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          sga: { label: '销售、一般及管理费用' },
          other_cost_of_revenue: { label: ['其他收入', '成本'] },
          equipment_cost: { label: '设备' },
          depreciation_amortization: { label: ['折旧与', '摊销'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: cards(true),
      },
    },
  });
})();

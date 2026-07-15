/* AT&T Q4 FY25 income statement ($B), reconstructed from the measured
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
  const RIGHT_X = 2490;
  // These two source labels sit to the left of the micro-flow values; keeping
  // them clear of their 70px bars is especially important at responsive sizes.
  const MEXICO_LABEL_X = 742;
  const CORPORATE_LABEL_X = 725;

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
      ? ['后付费手机', '7,420 万用户', '净增 +42.1 万，同比']
      : ['Postpaid Phones', '74.2M Subscribers', 'Net Adds +421K Y/Y'];
    const second = zh
      ? ['AT&T 光纤', '1,040 万用户', '净增 +28.3 万，同比']
      : ['AT&T Fiber', '10.4M Subscribers', 'Net Adds +283K Y/Y'];
    return '<g>'
      + '<rect x="52" y="1200" width="352" height="150" rx="30" fill="' + BLUE + '"/>'
      + '<text x="228" y="1252" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + first[0] + '</text>'
      + '<text x="228" y="1291" text-anchor="middle" font-size="28" fill="#fff">' + first[1] + '</text>'
      + '<text x="228" y="1324" text-anchor="middle" font-size="22" fill="#fff">' + first[2] + '</text>'
      + '<rect x="415" y="1200" width="332" height="150" rx="30" fill="' + BLUE + '"/>'
      + '<text x="581" y="1252" text-anchor="middle" font-size="29" font-weight="800" fill="#fff">' + second[0] + '</text>'
      + '<text x="581" y="1291" text-anchor="middle" font-size="28" fill="#fff">' + second[1] + '</text>'
      + '<text x="581" y="1324" text-anchor="middle" font-size="22" fill="#fff">' + second[2] + '</text>'
      + '</g>';
  }

  function otherIncomeCallout(zh) {
    const name = zh ? '其他收入' : 'Other income';
    return '<g class="sankey-interactive-annotation" data-node="other_income">'
      + '<path d="M2151 488H2220C2240 488 2247 436 2263 436H2267" fill="none" stroke="' + GREEN_LINK + '" stroke-width="3" stroke-linecap="butt"/>'
      + '<rect x="2070" y="491" width="210" height="104" fill="transparent"/>'
      + '<text x="2175" y="533" text-anchor="middle" font-size="32" font-weight="800" fill="' + GREEN_LABEL + '">' + name + '</text>'
      + '<text x="2175" y="575" text-anchor="middle" font-size="32" fill="' + GREEN_LABEL + '">$0.3B</text>'
      + '</g>';
  }

  function mexicoCallout(zh) {
    const name = zh ? '墨西哥' : 'Mexico';
    const yoy = zh ? '同比 +21%' : '+21% Y/Y';
    const margin = zh ? '调整后利润率 3%' : '3% adjusted margin';
    return '<g class="sankey-interactive-annotation" data-node="mexico">'
      + '<rect x="610" y="900" width="350" height="160" fill="transparent"/>'
      + '<text x="901" y="941" text-anchor="middle" font-size="39" fill="' + BLUE + '">$1.3B</text>'
      + '<text x="901" y="977" text-anchor="middle" font-size="29" fill="' + NOTE + '">' + yoy + '</text>'
      + '<text x="' + MEXICO_LABEL_X + '" y="1014" text-anchor="middle" font-size="40" font-weight="800" fill="' + BLUE + '">' + name + '</text>'
      + '<text x="' + MEXICO_LABEL_X + '" y="1053" text-anchor="middle" font-size="29" fill="' + NOTE + '">' + margin + '</text>'
      + '</g>';
  }

  function corporateCallout(zh) {
    const name = zh ? '公司及其他' : 'Corporate';
    const yoy = zh ? '同比 (25%)' : '(25%) Y/Y';
    return '<g class="sankey-interactive-annotation" data-node="corporate">'
      + '<rect x="638" y="1075" width="325" height="125" fill="transparent"/>'
      + '<text x="901" y="1117" text-anchor="middle" font-size="39" fill="' + BLUE + '">$0.1B</text>'
      + '<text x="901" y="1153" text-anchor="middle" font-size="29" fill="' + NOTE + '">' + yoy + '</text>'
      + '<text x="' + CORPORATE_LABEL_X + '" y="1194" text-anchor="middle" font-size="40" font-weight="800" fill="' + BLUE + '">' + name + '</text>'
      + '</g>';
  }

  function annotations(zh) {
    return cards(zh) + mexicoCallout(zh) + corporateCallout(zh) + otherIncomeCallout(zh);
  }

  function labels(zh) {
    const t = zh ? {
      mobility: '移动通信', business: ['企业', '有线业务'], consumer: ['消费者', '有线业务'],
      communications: '通信业务', mexico: '墨西哥', corporate: '公司及其他', revenue: '收入',
      operating: '营业利润', expenses: ['营业', '费用'], net: '净利润', interest: '利息', tax: '税费',
      equipment: '设备', sga: '销售、一般及管理费用', otherCost: ['其他收入', '成本'],
      da: ['折旧与', '摊销'], restructuring: '重组费用',
      yoy5: '同比 +5%', yoyDown8: '同比 (8%)', yoy3: '同比 +3%', yoy21: '同比 +21%',
      yoyDown25: '同比 (25%)', yoy4: '同比 +4%', margin26: '调整后利润率 26%',
      marginDown4: '调整后利润率 (4%)', margin15: '调整后利润率 15%', margin3: '调整后利润率 3%',
      operatingMargin: '利润率 19%', operatingPp: '同比 +2 个百分点', netMargin: '利润率 13%',
      netPp: '同比 (0 个百分点)',
    } : {
      mobility: 'Mobility', business: ['Business', 'Wireline'], consumer: ['Consumer', 'Wireline'],
      communications: 'Communications', mexico: 'Mexico', corporate: 'Corporate', revenue: 'Revenue',
      operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', interest: 'Interest', tax: 'Tax',
      equipment: 'Equipment', sga: 'SG&A', otherCost: ['Other cost', 'of revenue'],
      da: ['Depreciation &', 'Amortization'], restructuring: 'Restructuring',
      yoy5: '+5% Y/Y', yoyDown8: '(8%) Y/Y', yoy3: '+3% Y/Y', yoy21: '+21% Y/Y',
      yoyDown25: '(25%) Y/Y', yoy4: '+4% Y/Y', margin26: '26% adjusted margin',
      marginDown4: '(4%) adjusted margin', margin15: '15% adjusted margin', margin3: '3% adjusted margin',
      operatingMargin: '19% margin', operatingPp: '+2pp Y/Y', netMargin: '13% margin',
      netPp: '(0pp) Y/Y',
    };
    const name = (text, size = 40, color = BLUE) => line(text, size, { weight: 800, color });
    const costName = (text, size = 32) => line(text, size, { weight: 800, color: RED_LABEL });
    const value = (color = BLUE, size = 39) => line('$value', size, { color });
    const note = (text, size = 29) => line(text, size, { color: NOTE });
    return {
      mobility: { blocks: [
        block(434, 326, [value(), note(t.yoy5)], { lineGap: 9 }),
        block(247, 500, [name(t.mobility)]),
        block(247, 550, [note(t.margin26)]),
      ] },
      business_wireline: { blocks: [
        block(434, 730, [value(), note(t.yoyDown8)], { lineGap: 9 }),
        block(247, 798, [name(t.business[0]), name(t.business[1])], { lineGap: 10 }),
        block(247, 898, [note(t.marginDown4)]),
      ] },
      consumer_wireline: { blocks: [
        block(434, 917, [value(), note(t.yoy3)], { lineGap: 9 }),
        block(247, 975, [name(t.consumer[0]), name(t.consumer[1])], { lineGap: 10 }),
        block(247, 1085, [note(t.margin15)]),
      ] },
      communications: { blocks: [block(901, 389, [name(t.communications), value(), note(zh ? '同比 +3%' : '+3% Y/Y')], { lineGap: 9 })] },
      mexico: { blocks: [] },
      corporate: { blocks: [] },
      revenue: { blocks: [block(1368, 496, [name(t.revenue), value(), note(t.yoy4)], { lineGap: 9 })] },
      operating_profit: { blocks: [block(1835, 361, [name(t.operating, 40, GREEN_LABEL), value(GREEN_LABEL), note(t.operatingMargin), note(t.operatingPp)], { lineGap: 9 })] },
      operating_expenses: { blocks: [block(1835, 1103, [costName(t.expenses[0], 36), costName(t.expenses[1], 36), value(RED_LABEL, 36)], { lineGap: 9 })] },
      other_income: { blocks: [] },
      net_profit: { blocks: [block(RIGHT_X, 366, [name(t.net, 40, GREEN_LABEL), value(GREEN_LABEL), note(t.netMargin), note(t.netPp)], { lineGap: 9 })] },
      interest: { blocks: [block(RIGHT_X, 588, [costName(t.interest), value(RED_LABEL, 31)], { lineGap: 8 })] },
      tax: { blocks: [block(RIGHT_X, 673, [costName(t.tax), value(RED_LABEL, 31)], { lineGap: 8 })] },
      equipment: { blocks: [block(RIGHT_X, 797, [costName(t.equipment), value(RED_LABEL, 31)], { lineGap: 8 })] },
      sga: { blocks: [block(zh ? 2506 : RIGHT_X, 940, [costName(t.sga), value(RED_LABEL, 31)], { lineGap: 8 })] },
      other_cost_of_revenue: { blocks: [block(RIGHT_X, 1052, [costName(t.otherCost[0]), costName(t.otherCost[1]), value(RED_LABEL, 31)], { lineGap: 8 })] },
      depreciation_amortization: { blocks: [block(RIGHT_X, 1187, [costName(t.da[0]), costName(t.da[1]), value(RED_LABEL, 31)], { lineGap: 8 })] },
      restructuring: { blocks: [block(RIGHT_X, 1319, [costName(t.restructuring), value(RED_LABEL, 31)], { lineGap: 8 })] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'at-t-q4-fy25',
    name: 'AT&T · Q4 FY25',
    company: 'AT&T',
    meta: {
      company: 'AT&T',
      title: 'AT&T Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/at-t-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2150,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'at-t-company-logo', href: 'data/assets/raster-annotations/at-t/company-logo.png', x: 1060, y: 250, width: 520, height: 230 },
    ],
    annotationsSvg: annotations(false),
    layout: {
      scale: 1,
      nodes: {
        mobility: { x: 399, y: 418, width: 71, height: 233 },
        business_wireline: { x: 399, y: 827, width: 71, height: 38 },
        consumer_wireline: { x: 399, y: 1014, width: 71, height: 31 },
        communications: { x: 866, y: 537, width: 70, height: 308 },
        mexico: { x: 866, y: 997, width: 70, height: 10 },
        corporate: { x: 866, y: 1172, width: 70, height: 2 },
        revenue: { x: 1333, y: 645, width: 71, height: 320 },
        operating_profit: { x: 1800, y: 546, width: 71, height: 54 },
        operating_expenses: { x: 1800, y: 819, width: 71, height: 265 },
        other_income: { x: 2148, y: 488, width: 1, height: 2 },
        net_profit: { x: 2267, y: 398, width: 71, height: 38 },
        interest: { x: 2267, y: 615, width: 71, height: 15 },
        tax: { x: 2267, y: 705, width: 1, height: 2 },
        equipment: { x: 2267, y: 799, width: 71, height: 68 },
        sga: { x: 2267, y: 934, width: 71, height: 80 },
        other_cost_of_revenue: { x: 2267, y: 1081, width: 71, height: 59 },
        depreciation_amortization: { x: 2267, y: 1221, width: 71, height: 48 },
        restructuring: { x: 2267, y: 1352, width: 71, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'mobility', col: 0, order: 0, type: 'source', label: 'Mobility', value: 24.4, notes: ['+5% Y/Y', '26% adjusted margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'business_wireline', col: 0, order: 1, type: 'source', label: ['Business', 'Wireline'], value: 4.2, notes: ['(8%) Y/Y', '(4%) adjusted margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'consumer_wireline', col: 0, order: 2, type: 'source', label: ['Consumer', 'Wireline'], value: 3.6, notes: ['+3% Y/Y', '15% adjusted margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'communications', col: 1, order: 0, type: 'hub', label: 'Communications', value: 32.1, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'mexico', col: 1, order: 1, type: 'source', label: 'Mexico', value: 1.3, notes: ['+21% Y/Y', '3% adjusted margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'corporate', col: 1, order: 2, type: 'source', label: 'Corporate', value: 0.1, notes: ['(25%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 33.5, notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 5.8, notes: ['19% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 27.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other income', value: 0.3, color: BG, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: 'Net profit', value: 4.2, notes: ['13% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 1.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 3, type: 'cost', label: 'Tax', value: 0.1, color: BG, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'equipment', col: 4, order: 4, type: 'cost', label: 'Equipment', value: 8.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 5, type: 'cost', label: 'SG&A', value: 7.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_cost_of_revenue', col: 4, order: 6, type: 'cost', label: ['Other cost', 'of revenue'], value: 6.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 4, order: 7, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 5.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 4, order: 8, type: 'cost', label: 'Restructuring', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility', target: 'communications', value: 24.4, sourceWidth: 233, targetWidth: 233, y0: 534.5, y1: 653.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'business_wireline', target: 'communications', value: 4.2, sourceWidth: 38, targetWidth: 38, y0: 846, y1: 789, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'consumer_wireline', target: 'communications', value: 3.6, sourceWidth: 31, targetWidth: 37, y0: 1029.5, y1: 826.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'communications', target: 'revenue', value: 32.1, sourceWidth: 308, targetWidth: 308, y0: 691, y1: 799, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'mexico', target: 'revenue', value: 1.3, sourceWidth: 10, targetWidth: 12, y0: 1002, y1: 959, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'corporate', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 1173, y1: 964, sourceOrder: 0, targetOrder: 2, curve: { x0: 936, x1: 1333, c1x: 1040, c1y: 1173, c2x: 1160, c2y: 964 }, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 5.8, sourceWidth: 54, targetWidth: 54, y0: 672, y1: 573, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 27.7, sourceWidth: 266, targetWidth: 265, y0: 832, y1: 951.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.3, sourceWidth: 0, targetWidth: 0, y0: 489, y1: 436, sourceOrder: 0, targetOrder: 1, interactionOnly: true, curve: { x0: 2148, x1: 2267, c1x: 2200, c1y: 489, c2x: 2218, c2y: 436 } },
      { source: 'operating_profit', target: 'net_profit', value: 4.2, sourceWidth: 38, targetWidth: 38, y0: 565, y1: 417, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 1.8, sourceWidth: 15, targetWidth: 15, y0: 591.5, y1: 622.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 2, targetWidth: 0, y0: 599, y1: 706, sourceOrder: 2, targetOrder: 0, interactionOnly: true, curve: { x0: 1871, x1: 2267, c1x: 2010, c1y: 599, c2x: 2160, c2y: 706 }, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'equipment', value: 8.5, sourceWidth: 68, targetWidth: 68, y0: 853, y1: 833, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 7.4, sourceWidth: 80, targetWidth: 80, y0: 927, y1: 974, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_cost_of_revenue', value: 6.3, sourceWidth: 59, targetWidth: 59, y0: 996.5, y1: 1110.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 5.1, sourceWidth: 48, targetWidth: 48, y0: 1050, y1: 1245, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 0.3, sourceWidth: 10, targetWidth: 3, y0: 1079, y1: 1353.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'AT&T · 2025 财年第四季度',
        meta: {
          title: 'AT&T 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleTextLength: 1900,
        },
        nodes: {
          mobility: { label: '移动通信', notes: ['同比 +5%', '调整后利润率 26%'] },
          business_wireline: { label: ['企业', '有线业务'], notes: ['同比 (8%)', '调整后利润率 (4%)'] },
          consumer_wireline: { label: ['消费者', '有线业务'], notes: ['同比 +3%', '调整后利润率 15%'] },
          communications: { label: '通信业务', notes: ['同比 +3%'] },
          mexico: { label: '墨西哥', notes: ['同比 +21%', '调整后利润率 3%'] },
          corporate: { label: '公司及其他', notes: ['同比 (25%)'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 (0 个百分点)'] },
          interest: { label: '利息' }, tax: { label: '税费' }, equipment: { label: '设备' },
          sga: { label: '销售、一般及管理费用' }, other_cost_of_revenue: { label: ['其他收入', '成本'] },
          depreciation_amortization: { label: ['折旧与', '摊销'] }, restructuring: { label: '重组费用' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();

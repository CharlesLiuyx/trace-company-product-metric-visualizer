/* Nike · Q3 FY23 income statement ($B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GREY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const name = (text, size = 40, color = BLACK) => ({ text, size, weight: 800, color });
  const amount = (size = 38, color = BLACK) => ({ text: '$value', size, weight: 400, color });
  const note = (text, size = 29) => ({ text, size, weight: 400, color: NOTE });

  const geographyCallout = (localized) => {
    const china = localized ? '中国' : 'China';
    const chinaNote = localized ? '同比 -8%' : '-8% Y/Y';
    const rowNote = localized ? '同比 +19%' : '+19% Y/Y';
    const rowDefinition = localized ? 'RoW = 中国以外地区' : 'RoW = Rest of World';
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <path d="M874 1083 L904 1138 L844 1138 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
        <rect x="744" y="1138" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
        <text x="864" y="1178" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${china}<tspan fill="${RED_LABEL}" font-weight="700"> ${chinaNote}</tspan></text>
        <text x="864" y="1221" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN_LABEL}" font-weight="700"> ${rowNote}</tspan></text>
        <text x="864" y="1284" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">${rowDefinition}</text>
      </g>`;
  };

  const labels = (localized) => {
    const text = localized ? {
      footwear: '鞋类', apparel: '服装', equipment: '装备', revenue: '收入',
      gross: '毛利润', cost: '销售成本', operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'], other: '其他', interest: '利息',
      net: '净利润', tax: '税费', overhead: '管理费用', demand: ['需求', '创造费用'],
      footwearNote: '同比 +20%', apparelNote: '同比 +5%', equipmentNote: '同比 +3%',
      converseNote: '同比 +8%', revenueNote: '同比 +14%',
      grossNotes: ['利润率 43%', '同比 (3 个百分点)'],
      operatingNotes: ['利润率 15%', '同比 (4 个百分点)'],
      netNotes: ['利润率 10%', '同比 (3 个百分点)'],
    } : {
      footwear: 'Footwear', apparel: 'Apparel', equipment: 'Equipment', revenue: 'Revenue',
      gross: 'Gross profit', cost: 'Cost of sales', operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'], other: 'Other', interest: 'Interest',
      net: 'Net profit', tax: 'Tax', overhead: 'Overhead', demand: ['Demand', 'Creation'],
      footwearNote: '+20% Y/Y', apparelNote: '+5% Y/Y', equipmentNote: '+3% Y/Y',
      converseNote: '+8% Y/Y', revenueNote: '+14% Y/Y',
      grossNotes: ['43% margin', '(3pp) Y/Y'],
      operatingNotes: ['15% margin', '(4pp) Y/Y'],
      netNotes: ['10% margin', '(3pp) Y/Y'],
    };

    return {
      footwear: { blocks: [
        { x: 402, top: 446, anchor: 'middle', lineGap: 8, lines: [amount(), note(text.footwearNote)] },
        { x: 224, top: 688, anchor: 'middle', semanticRole: 'icon-caption', lines: [name(text.footwear)] },
      ] },
      apparel: { blocks: [
        { x: 402, top: 799, anchor: 'middle', lineGap: 8, lines: [amount(), note(text.apparelNote)] },
        { x: 228, top: 927, anchor: 'middle', semanticRole: 'icon-caption', lines: [name(text.apparel)] },
      ] },
      equipment: { blocks: [
        { x: 402, top: 1033, anchor: 'middle', lineGap: 8, lines: [amount(), note(text.equipmentNote)] },
        { x: 221, top: 1105, anchor: 'middle', semanticRole: 'icon-caption', lines: [name(text.equipment)] },
      ] },
      converse: { blocks: [
        { x: 402, top: 1198, anchor: 'middle', lineGap: 8, lines: [amount(), note(text.converseNote)] },
        { x: 231, top: 1276, anchor: 'middle', semanticRole: 'icon-caption', lines: [name('Converse')] },
      ] },
      revenue: { blocks: [{ x: 870, top: 592, anchor: 'middle', lineGap: 9, lines: [name(text.revenue), amount(), note(text.revenueNote)] }] },
      gross_profit: { blocks: [{ x: 1331, top: 414, anchor: 'middle', lineGap: 9, lines: [name(text.gross, 40, GREEN_LABEL), amount(38, GREEN_LABEL), note(text.grossNotes[0]), note(text.grossNotes[1])] }] },
      cost_of_sales: { blocks: [{ x: 1326, top: 1192, anchor: 'middle', lineGap: 8, lines: [name(text.cost, 38, RED_LABEL), amount(38, RED_LABEL)] }] },
      operating_profit: { blocks: [{ x: 1792, top: 339, anchor: 'middle', lineGap: 9, lines: [name(text.operatingProfit, localized ? 38 : 40, GREEN_LABEL), amount(38, GREEN_LABEL), note(text.operatingNotes[0]), note(text.operatingNotes[1])] }] },
      operating_expenses: { blocks: [{ x: 1787, top: 848, anchor: 'middle', lineGap: 8, lines: [name(text.operatingExpenses[0], 36, RED_LABEL), name(text.operatingExpenses[1], 36, RED_LABEL), amount(34, RED_LABEL)] }] },
      other: { blocks: [{ x: 2106, top: 543, anchor: 'middle', lineGap: 8, lines: [name(text.other, 32, GREEN_LABEL), amount(32, GREEN_LABEL)] }] },
      interest: { blocks: [{ x: 2140, top: 672, anchor: 'middle', lineGap: 8, lines: [name(text.interest, 32, GREEN_LABEL), amount(32, GREEN_LABEL)] }] },
      net_profit: { blocks: [{ x: 2328, top: 409, anchor: 'start', lineGap: 9, lines: [name(text.net, 40, GREEN_LABEL), amount(38, GREEN_LABEL), note(text.netNotes[0]), note(text.netNotes[1])] }] },
      tax: { blocks: [{ x: 2374, top: 793, anchor: 'start', lineGap: 8, lines: [name(text.tax, 34, RED_LABEL), amount(32, RED_LABEL)] }] },
      overhead: { blocks: [{ x: 2349, top: 1013, anchor: 'start', lineGap: 8, lines: [name(text.overhead, localized ? 30 : 32, RED_LABEL), amount(32, RED_LABEL)] }] },
      demand_creation: { blocks: [{ x: 2324, top: 1276, anchor: 'start', lineGap: 8, lines: [name(text.demand[0], 32, RED_LABEL), name(text.demand[1], localized ? 29 : 32, RED_LABEL), amount(32, RED_LABEL)] }] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q3-fy23',
    name: 'Nike · Q3 FY23',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Feb. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nike-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1338,
      titleY: 219,
      titleSize: 142,
      titleWeight: 800,
      titleTextLength: 2002,
      periodX: 2423,
      periodY: 279,
      periodNoteY: 317,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
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
      linkTint: { source: GREY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: geographyCallout(false),
    rasterAnnotations: [
      { key: 'nike-company-logo', href: 'data/assets/raster-annotations/nike/company-logo.png', x: 627, y: 257, width: 541, height: 301 },
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 545, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 763, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 967, width: 190, height: 152 },
      { key: 'nike-business-converse', href: 'data/assets/raster-annotations/nike/business-converse.png', x: 125, y: 1150, width: 215, height: 136 },
    ],
    layout: {
      scale: 26.6,
      nodes: {
        footwear: { x: 369, y: 545, width: 71, height: 211 },
        apparel: { x: 369, y: 899, width: 71, height: 89 },
        equipment: { x: 369, y: 1133, width: 71, height: 9 },
        converse: { x: 369, y: 1298, width: 71, height: 15 },
        revenue: { x: 836, y: 741, width: 70, height: 331 },
        gross_profit: { x: 1295, y: 599, width: 72, height: 141 },
        cost_of_sales: { x: 1295, y: 995, width: 72, height: 185 },
        operating_profit: { x: 1756, y: 519, width: 70, height: 36 },
        operating_expenses: { x: 1756, y: 720, width: 70, height: 104 },
        other: { x: 2071, y: 533, width: 70, height: 1 },
        interest: { x: 2103, y: 655, width: 70, height: 5 },
        net_profit: { x: 2237, y: 444, width: 71, height: 31 },
        tax: { x: 2237, y: 834, width: 71, height: 5 },
        overhead: { x: 2237, y: 1009, width: 71, height: 79 },
        demand_creation: { x: 2237, y: 1332, width: 71, height: 22 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 8.0, valueText: '$8.0B', notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.4, notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.4, notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.6, notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.4, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.4, notes: ['43% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.0, valueText: '($7.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, notes: ['15% margin', '(4pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, valueText: '($4.0B)' },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.058, valueText: '$58M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'profit', label: 'Interest', value: 0.007, valueText: '$7M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.2, notes: ['10% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'overhead', col: 5, order: 2, type: 'cost', label: 'Overhead', value: 3.0, valueText: '($3.0B)' },
      { id: 'demand_creation', col: 5, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 0.9 },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 8.0, sourceWidth: 211, targetWidth: 212, y0: 650.5, y1: 847, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.4, sourceWidth: 89, targetWidth: 90, y0: 943.5, y1: 998, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.4, sourceWidth: 9, targetWidth: 11, y0: 1137.5, y1: 1048.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.6, sourceWidth: 15, targetWidth: 18, y0: 1305.5, y1: 1063, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.4, sourceWidth: 142, targetWidth: 141, y0: 812, y1: 669.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.0, sourceWidth: 189, targetWidth: 185, y0: 977.5, y1: 1087.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.4, sourceWidth: 36, targetWidth: 36, y0: 617, y1: 537, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, sourceWidth: 105, targetWidth: 104, y0: 687.5, y1: 772, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 31, targetWidth: 29, y0: 534.5, y1: 458.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 5, targetWidth: 5, y0: 552.5, y1: 836.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.058, sourceWidth: 1, targetWidth: 1, y0: 533.5, y1: 473.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'interest', target: 'net_profit', value: 0.007, sourceWidth: 5, targetWidth: 1, y0: 657.5, y1: 474.5, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'overhead', value: 3.0, sourceWidth: 81, targetWidth: 79, y0: 760.5, y1: 1048.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'demand_creation', value: 0.9, sourceWidth: 23, targetWidth: 22, y0: 812.5, y1: 1343, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['RoW', 'Converse'],
      zh: {
        name: 'Nike · 2023 财年第三季度',
        meta: {
          title: 'Nike 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 2 月',
          titleTextLength: 1700,
        },
        annotationsSvg: geographyCallout(true),
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +20%'] },
          apparel: { label: '服装', notes: ['同比 +5%'] },
          equipment: { label: '装备', notes: ['同比 +3%'] },
          converse: { notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 (3 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (4 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          overhead: { label: '管理费用' },
          demand_creation: { label: ['需求', '创造费用'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

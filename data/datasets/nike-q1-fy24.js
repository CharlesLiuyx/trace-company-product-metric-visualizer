/* Nike · Q1 FY24 income statement ($B), reconstructed from the Source PNG. */
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
  const value = (size = 38, color = BLACK) => ({ text: '$value', size, weight: 400, color });
  const note = (text, size = 29) => ({ text, size, weight: 400, color: NOTE });

  const geographyCallout = (localized) => {
    const china = localized ? '中国' : 'China';
    const chinaNote = localized ? '同比 +5%' : '+5% Y/Y';
    const rowNote = localized ? '同比 +2%' : '+2% Y/Y';
    const rowDefinition = localized ? 'RoW = 中国以外地区' : 'RoW = Rest of World';
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <path d="M847 1107 L877 1161 L817 1161 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
        <rect x="727" y="1161" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
        <text x="847" y="1201" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${china}<tspan fill="${GREEN_LABEL}" font-weight="700"> ${chinaNote}</tspan></text>
        <text x="847" y="1244" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${GREEN_LABEL}" font-weight="700"> ${rowNote}</tspan></text>
        <text x="847" y="1305" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">${rowDefinition}</text>
      </g>`;
  };

  const microFlowGuides = (localized) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="interest">
        <line x1="2034" y1="510" x2="2117" y2="510" stroke="${GREEN}" stroke-width="2"/>
        <text x="2102" y="559" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${localized ? '利息' : 'Interest'}</text>
        <text x="2102" y="631" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$34M</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other">
        <line x1="2114" y1="610" x2="2216" y2="610" stroke="${GREEN}" stroke-width="2"/>
        <text x="2152" y="661" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${localized ? '其他' : 'Other'}</text>
        <text x="2152" y="701" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$10M</text>
      </g>
    </g>`;

  const annotations = (localized) => `${geographyCallout(localized)}${microFlowGuides(localized)}`;

  const labels = (localized) => {
    const t = localized ? {
      footwear: '鞋类', apparel: '服装', equipment: '装备', revenue: '收入',
      gross: '毛利润', cost: '销售成本', operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'], net: '净利润', tax: '税费', overhead: '管理费用',
      demand: ['需求', '创造费用'],
      footwearNote: '同比 +4%', apparelNote: '同比 (1%)', equipmentNote: '同比 +9%',
      converseNote: '同比 (8%)', revenueNote: '同比 +2%', grossNotes: ['利润率 44%', '同比持平'],
      operatingNotes: ['利润率 12%', '同比 (1 个百分点)'], netNotes: ['利润率 11%', '同比持平'],
    } : {
      footwear: 'Footwear', apparel: 'Apparel', equipment: 'Equipment', revenue: 'Revenue',
      gross: 'Gross profit', cost: 'Cost of sales', operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', overhead: 'Overhead',
      demand: ['Demand', 'Creation'],
      footwearNote: '+4% Y/Y', apparelNote: '(1%) Y/Y', equipmentNote: '+9% Y/Y', converseNote: '(8%) Y/Y',
      revenueNote: '+2% Y/Y', grossNotes: ['44% margin', 'Flat Y/Y'], operatingNotes: ['12% margin', '(1pp) Y/Y'],
      netNotes: ['11% margin', 'Flat Y/Y'],
    };

    return {
      footwear: { blocks: [
        { x: 397, top: 430, anchor: 'middle', lineGap: 8, lines: [value(), note(t.footwearNote)] },
        { x: 224, top: 675, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [name(t.footwear)] },
      ] },
      apparel: { blocks: [
        { x: 397, top: 808, anchor: 'middle', lineGap: 8, lines: [value(), note(t.apparelNote)] },
        { x: 228, top: 928, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [name(t.apparel)] },
      ] },
      equipment: { blocks: [
        { x: 400, top: 1054, anchor: 'middle', lineGap: 8, lines: [value(), note(t.equipmentNote)] },
        { x: 221, top: 1131, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [name(t.equipment)] },
      ] },
      converse: { blocks: [
        { x: 401, top: 1232, anchor: 'middle', lineGap: 8, lines: [value(), note(t.converseNote)] },
        { x: 231, top: 1307, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [name('Converse')] },
      ] },
      revenue: { blocks: [{ x: 860, top: 596, anchor: 'middle', lineGap: 9, lines: [name(t.revenue), value(), note(t.revenueNote)] }] },
      gross_profit: { blocks: [{ x: 1345, top: 433, anchor: 'middle', lineGap: 9, lines: [name(t.gross, 40, GREEN_LABEL), value(38, GREEN_LABEL), note(t.grossNotes[0]), note(t.grossNotes[1])] }] },
      cost_of_sales: { blocks: [{ x: 1350, top: 1228, anchor: 'middle', lineGap: 8, lines: [name(t.cost, 38, RED_LABEL), value(38, RED_LABEL)] }] },
      operating_profit: { blocks: [{ x: 1792, top: 329, anchor: 'middle', lineGap: 9, lines: [name(t.operatingProfit, localized ? 38 : 40, GREEN_LABEL), value(38, GREEN_LABEL), note(t.operatingNotes[0]), note(t.operatingNotes[1])] }] },
      operating_expenses: { blocks: [{ x: 1798, top: 922, anchor: 'middle', lineGap: 8, lines: [name(t.operatingExpenses[0], 36, RED_LABEL), name(t.operatingExpenses[1], 36, RED_LABEL), value(34, RED_LABEL)] }] },
      net_profit: { blocks: [{ x: 2325, top: 402, anchor: 'start', lineGap: 9, lines: [name(t.net, 40, GREEN_LABEL), value(38, GREEN_LABEL), note(t.netNotes[0]), note(t.netNotes[1])] }] },
      tax: { blocks: [{ x: 2381, top: 712, anchor: 'start', lineGap: 8, lines: [name(t.tax, 34, RED_LABEL), value(32, RED_LABEL)] }] },
      overhead: { blocks: [{ x: 2356, top: 992, anchor: 'start', lineGap: 8, lines: [name(t.overhead, localized ? 30 : 32, RED_LABEL), value(32, RED_LABEL)] }] },
      demand_creation: { blocks: [{ x: 2365, top: 1250, anchor: 'start', lineGap: 8, lines: [name(t.demand[0], 32, RED_LABEL), name(t.demand[1], localized ? 29 : 32, RED_LABEL), value(32, RED_LABEL)] }] },
      interest: { blocks: [] },
      other: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q1-fy24',
    name: 'Nike · Q1 FY24',
    company: 'Nike',
    meta: {
      company: 'Nike', title: 'Nike Q1 FY24 Income Statement', period: 'Q1 FY24',
      periodNote: 'Ending August 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/nike-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1338, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2002,
      periodX: 2258, periodY: 253, periodNoteY: 295,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'nike-company-logo', href: 'data/assets/raster-annotations/nike/company-logo.png', x: 627, y: 257, width: 541, height: 301 },
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 545, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 755, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 988, width: 190, height: 152 },
      { key: 'nike-business-converse-q1-fy24', href: 'data/assets/raster-annotations/nike/business-converse-q1-fy24.png', x: 125, y: 1178, width: 215, height: 146 },
    ],
    layout: {
      scale: 27.75,
      routes: {
        interest: { x: 2117, y: 510, width: 0, height: 2 },
        other: { x: 2216, y: 610, width: 0, height: 2 },
      },
      nodes: {
        footwear: { x: 358, y: 521, width: 71, height: 232 },
        apparel: { x: 358, y: 897, width: 71, height: 92 },
        equipment: { x: 358, y: 1144, width: 71, height: 13 },
        converse: { x: 358, y: 1328, width: 71, height: 15 },
        revenue: { x: 825, y: 739, width: 70, height: 358 },
        gross_profit: { x: 1309, y: 616, width: 72, height: 157 },
        cost_of_sales: { x: 1312, y: 1008, width: 71, height: 197 },
        operating_profit: { x: 1757, y: 511, width: 70, height: 44 },
        operating_expenses: { x: 1770, y: 785, width: 70, height: 112 },
        net_profit: { x: 2226, y: 399, width: 71, height: 40 },
        tax: { x: 2226, y: 749, width: 71, height: 4 },
        overhead: { x: 2226, y: 987, width: 71, height: 82 },
        demand_creation: { x: 2226, y: 1297, width: 71, height: 26 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.034, valueText: '$34M', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'other', representation: 'flow', label: 'Other', value: 0.010, valueText: '$10M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 8.4, notes: ['+4% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.4, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.5, notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.6, notes: ['(8%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.9, notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.7, notes: ['44% margin', 'Flat Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.2 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['12% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['11% margin', 'Flat Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'overhead', col: 5, order: 2, type: 'cost', label: 'Overhead', value: 3.0, valueText: '($3.0B)' },
      { id: 'demand_creation', col: 5, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 1.1 },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 8.4, sourceWidth: 232, targetWidth: 232, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.4, sourceWidth: 92, targetWidth: 94, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.5, sourceWidth: 13, targetWidth: 14, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.6, sourceWidth: 15, targetWidth: 18, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.7, sourceWidth: 157, targetWidth: 157, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.2, sourceWidth: 201, targetWidth: 197, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 44, targetWidth: 44, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.1, sourceWidth: 113, targetWidth: 112, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.4, sourceWidth: 40, targetWidth: 39, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.034, sourceWidth: 2, targetWidth: 2, y0: 510, targetOrder: 1, linkTint: GREEN_LINK },
      { sourceRoute: 'other', target: 'net_profit', value: 0.010, sourceWidth: 2, targetWidth: 1, y0: 610, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'overhead', value: 3.0, sourceWidth: 82, targetWidth: 82, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.1, sourceWidth: 30, targetWidth: 26, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['RoW', 'Converse'],
      zh: {
        name: 'Nike · 2024 财年第一季度',
        meta: { title: 'Nike 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2023 年 8 月', titleTextLength: 1700 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { interest: { label: '利息' }, other: { label: '其他' } },
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +4%'] }, apparel: { label: '服装', notes: ['同比 (1%)'] },
          equipment: { label: '装备', notes: ['同比 +9%'] }, converse: { notes: ['同比 (8%)'] },
          revenue: { label: '收入', notes: ['同比 +2%'] }, gross_profit: { label: '毛利润', notes: ['利润率 44%', '同比持平'] },
          cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 11%', '同比持平'] },
          tax: { label: '税费' }, overhead: { label: '管理费用' }, demand_creation: { label: ['需求', '创造费用'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

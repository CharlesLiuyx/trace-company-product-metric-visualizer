/* Nike Q4 FY24 income statement ($B), reconstructed from the native
 * 2667x1500 Source. Nike's wordmark and four business-line images reuse the
 * validated Nike runtime raster assets; every financial face remains SVG. */
(function () {
  const BG = '#f2f2f2';
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

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}),
  });

  const labels = (zh) => {
    const t = zh ? {
      footwear: '鞋类', apparel: '服装', equipment: '装备', converse: 'Converse',
      revenue: '收入', gross: '毛利润', cost: '销售成本', operating: '营业利润',
      expenses: ['运营', '费用'], other: '其他', interest: '利息', net: '净利润',
      tax: '税费', overhead: '管理费用', demand: ['需求', '创造费用'],
      yoy4: '同比 (4%)', yoy3: '同比 +3%', yoy34: '同比 +34%', yoy18: '同比 (18%)',
      yoy2: '同比 (2%)', margin45: '利润率 45%', pp1: '同比 +1 个百分点',
      margin12: '利润率 12%', pp3: '同比 +3 个百分点', pp4: '同比 +4 个百分点',
    } : {
      footwear: 'Footwear', apparel: 'Apparel', equipment: 'Equipment', converse: 'Converse',
      revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit',
      expenses: ['Operating', 'expenses'], other: 'Other', interest: 'Interest', net: 'Net profit',
      tax: 'Tax', overhead: 'Overhead', demand: ['Demand', 'Creation'],
      yoy4: '(4%) Y/Y', yoy3: '+3% Y/Y', yoy34: '+34% Y/Y', yoy18: '(18%) Y/Y',
      yoy2: '(2%) Y/Y', margin45: '45% margin', pp1: '+1pp Y/Y',
      margin12: '12% margin', pp3: '+3pp Y/Y', pp4: '+4pp Y/Y',
    };
    const valueNote = (x, top, note) => ({ blocks: [block(x, top, [line('$value', 38), line(note, 29, 400, NOTE)])] });
    return {
      footwear: { blocks: [
        ...valueNote(392, 447, t.yoy4).blocks,
        block(224, 674, [line(t.footwear, 40, 800, BLACK)], { semanticRole: 'reference-offset-side-label' }),
      ] },
      apparel: { blocks: [
        ...valueNote(392, 811, t.yoy3).blocks,
        block(228, 927, [line(t.apparel, 40, 800, BLACK)], { semanticRole: 'reference-offset-side-label' }),
      ] },
      equipment: { blocks: [
        ...valueNote(392, 1043, t.yoy34).blocks,
        block(230, 1125, [line(t.equipment, 40, 800, BLACK)], { semanticRole: 'reference-offset-side-label' }),
      ] },
      converse: { blocks: [
        ...valueNote(392, 1221, t.yoy18).blocks,
        block(233, 1300, [line(t.converse, 40, 800, BLACK)], { semanticRole: 'reference-offset-side-label' }),
      ] },
      revenue: { blocks: [block(859, 595, [
        line(t.revenue, 40, 800, BLACK), line('$value', 38, 400, BLACK), line(t.yoy2, 29, 400, NOTE),
      ], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1328, 434, [
        line(t.gross, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.margin45, 29, 400, NOTE), line(t.pp1, 29, 400, NOTE),
      ], { lineGap: 9 })] },
      cost_of_sales: { blocks: [block(1333, 1195, [
        line(t.cost, 38, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL),
      ])] },
      operating_profit: { blocks: [block(1805, 319, [
        line(t.operating, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.margin12, 29, 400, NOTE), line(t.pp3, 29, 400, NOTE),
      ], { lineGap: 9 })] },
      operating_expenses: { blocks: [block(1805, 896, [
        ...t.expenses.map((text) => line(text, 36, 800, RED_LABEL)), line('$value', 34, 400, RED_LABEL),
      ])] },
      other: { blocks: [block(2125, 261, [
        line(t.other, 32, 800, GREEN_LABEL), line('$value', 32, 400, GREEN_LABEL),
      ])] },
      interest: { blocks: [block(2130, 513, [
        line(t.interest, 32, 800, GREEN_LABEL), line('$value', 32, 400, GREEN_LABEL),
      ])] },
      net_profit: { blocks: [block(2415, 353, [
        line(t.net, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.margin12, 29, 400, NOTE), line(t.pp4, 29, 400, NOTE),
      ], { lineGap: 9 })] },
      tax: { blocks: [block(2414, 633, [
        line(t.tax, 34, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL),
      ])] },
      overhead: { blocks: [block(2411, 995, [
        line(t.overhead, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL),
      ])] },
      demand_creation: { blocks: [block(2414, 1195, [
        ...t.demand.map((text) => line(text, 32, 800, RED_LABEL)), line('$value', 32, 400, RED_LABEL),
      ])] },
    };
  };

  const calloutBox = `
    <path d="M847 1094 L877 1148 L817 1148 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="727" y="1148" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;
  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${calloutBox}
      <text x="847" y="1188" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${zh ? '中国' : 'China'}<tspan fill="${GREEN_LABEL}" font-weight="700">${zh ? ' 同比 +3%' : ' +3% Y/Y'}</tspan></text>
      <text x="847" y="1231" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${RED}" font-weight="700">${zh ? ' 同比 (2%)' : ' (2%) Y/Y'}</tspan></text>
      <text x="847" y="1292" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">${zh ? 'RoW = 中国以外地区' : 'RoW = Rest of World'}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q4-fy24',
    name: 'Nike · Q4 FY24',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending May 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nike-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 189,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2002,
      periodX: 2428,
      periodY: 232,
      periodNoteY: 274,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
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
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'nike-company-logo', href: 'data/assets/raster-annotations/nike/company-logo.png', x: 627, y: 257, width: 541, height: 301 },
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 500, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 735, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 962, width: 190, height: 152 },
      { key: 'nike-business-converse-q2-fy26', href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png', x: 125, y: 1155, width: 205, height: 132 },
    ],
    layout: {
      scale: 26,
      nodes: {
        footwear: { x: 356, y: 546, width: 71, height: 213 },
        apparel: { x: 356, y: 908, width: 71, height: 85 },
        equipment: { x: 356, y: 1142, width: 71, height: 13 },
        converse: { x: 356, y: 1319, width: 71, height: 10 },
        revenue: { x: 823, y: 738, width: 70, height: 329 },
        gross_profit: { x: 1292, y: 612, width: 72, height: 146 },
        cost_of_sales: { x: 1297, y: 1001, width: 72, height: 181 },
        operating_profit: { x: 1770, y: 498, width: 70, height: 40 },
        operating_expenses: { x: 1770, y: 764, width: 70, height: 107 },
        other: { x: 2090, y: 349, width: 70, height: 1 },
        interest: { x: 2095, y: 496, width: 70, height: 3 },
        net_profit: { x: 2224, y: 387, width: 71, height: 38 },
        tax: { x: 2224, y: 669, width: 71, height: 4 },
        overhead: { x: 2224, y: 1000, width: 71, height: 76 },
        demand_creation: { x: 2224, y: 1245, width: 71, height: 27 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 8.2, notes: ['(4%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.3, notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.6, notes: ['+34% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.5, notes: ['(18%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.6, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.6, notes: ['45% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.0, valueText: '($7.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, notes: ['12% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'profit', label: 'Interest', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['12% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 2, type: 'cost', label: 'Overhead', value: 3.0, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 8.2, sourceWidth: 213, targetWidth: 221, y0: 652.5, y1: 848.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.3, sourceWidth: 85, targetWidth: 85, y0: 950.5, y1: 1001.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.6, sourceWidth: 13, targetWidth: 13, y0: 1148.5, y1: 1050.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.5, sourceWidth: 10, targetWidth: 10, y0: 1324, y1: 1062, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.6, sourceWidth: 146, targetWidth: 146, y0: 811, y1: 685, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.0, sourceWidth: 183, targetWidth: 181, y0: 975.5, y1: 1091.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceWidth: 40, targetWidth: 40, y0: 632, y1: 518, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.1, sourceWidth: 106, targetWidth: 107, y0: 705, y1: 817.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 349.5, y1: 387.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 36, targetWidth: 34, y0: 516, y1: 405, sourceOrder: 0, targetOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 497.5, y1: 423.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 536, y1: 671, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'overhead', value: 3.0, sourceWidth: 80, targetWidth: 76, y0: 804, y1: 1038, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.1, sourceWidth: 27, targetWidth: 27, y0: 857.5, y1: 1258.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2024 财年第四季度',
        meta: {
          title: 'Nike 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 5 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotations(true),
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (4%)'] },
          apparel: { label: '服装', notes: ['同比 +3%'] },
          equipment: { label: '装备', notes: ['同比 +34%'] },
          converse: { notes: ['同比 (18%)'] },
          revenue: { label: '收入', notes: ['同比 (2%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          overhead: { label: '管理费用' },
          demand_creation: { label: ['需求', '创造费用'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

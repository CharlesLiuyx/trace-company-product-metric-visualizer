/* Nike Q2 FY25 income statement ($B), reconstructed from the fixed
 * 2667x1500 Source. Nike/product raster annotations reuse validated assets. */
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

  const calloutBox = `
    <path d="M857 1089 L887 1143 L827 1143 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="727" y="1143" width="260" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  function calloutSvg(zh) {
    return `
      <g font-family="Montserrat,Arial,sans-serif" data-annotation-clearance="nike-geography-callout">
        ${calloutBox}
        <text x="857" y="1183" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${zh ? '中国' : 'China'}<tspan fill="${RED}" font-weight="700"> ${zh ? '同比 (8%)' : '(8%) Y/Y'}</tspan></text>
        <text x="857" y="1226" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${RED}" font-weight="700"> ${zh ? '同比 (8%)' : '(8%) Y/Y'}</tspan></text>
        <text x="857" y="1291" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">${zh ? 'RoW = 中国以外地区' : 'RoW = Rest of World'}</text>
        <g class="sankey-interactive-annotation" data-node="interest" data-link-numerator="interest" data-link-denominator="net_profit" data-link-anchor-x="2190" data-link-anchor-y="430">
          <text x="2140" y="529" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${zh ? '利息' : 'Interest'}</text>
          <text x="2140" y="568" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="32" fill="${GREEN_LABEL}">$24M</text>
        </g>
      </g>`;
  }

  function labels(t) {
    const block = (x, top, lines, lineGap = 8, anchor = 'middle', semanticRole = '') => ({
      x, top, anchor, lineGap, lines, ...(semanticRole ? { semanticRole } : {}),
    });
    const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
    return {
      footwear: { blocks: [
        block(390, 390, [line('$value', 38, 400), line(t.footwearNote, 29, 400, NOTE)]),
        block(224, 632, [line(t.footwear, 40, 800, BLACK)], 8, 'middle', 'reference-offset-side-label'),
      ] },
      apparel: { blocks: [
        block(390, 753, [line('$value', 38, 400), line(t.apparelNote, 29, 400, NOTE)]),
        block(228, 889, [line(t.apparel, 40, 800, BLACK)], 8, 'middle', 'reference-offset-side-label'),
      ] },
      equipment: { blocks: [
        block(390, 1012, [line('$value', 38, 400), line(t.equipmentNote, 29, 400, NOTE)]),
        block(221, 1098, [line(t.equipment, 40, 800, BLACK)], 8, 'middle', 'reference-offset-side-label'),
      ] },
      converse: { blocks: [
        block(390, 1187, [line('$value', 38, 400), line(t.converseNote, 29, 400, NOTE)]),
        block(231, t.converseNameTop, [line('Converse', 40, 800, BLACK)], 8, 'middle', 'reference-offset-side-label'),
      ] },
      revenue: { blocks: [block(856, 582, [
        line(t.revenue, 40, 800, BLACK), line('$value', 38, 400, BLACK), line(t.revenueNote, 29, 400, NOTE),
      ], 9)] },
      gross_profit: { blocks: [block(1329, 402, [
        line(t.grossProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.grossMargin, 29, 400, NOTE), line(t.grossYoy, 29, 400, NOTE),
      ], 9)] },
      cost_of_sales: { blocks: [block(1328, 1186, [
        line(t.costOfSales, 38, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL),
      ])] },
      operating_profit: { blocks: [block(1803, 299, [
        line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.operatingMargin, 29, 400, NOTE), line(t.operatingYoy, 29, 400, NOTE),
      ], 9)] },
      operating_expenses: { blocks: [block(1798, 863, [
        line(t.operatingExpenses[0], 36, 800, RED_LABEL), line(t.operatingExpenses[1], 36, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ])] },
      other: { blocks: [block(2117, 256, [line(t.other, 32, 800, GREEN_LABEL), line('$value', 32, 400, GREEN_LABEL)])] },
      interest: { blocks: [] },
      net_profit: { blocks: [block(2416, 341, [
        line(t.netProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
        line(t.netMargin, 29, 400, NOTE), line(t.netYoy, 29, 400, NOTE),
      ], 9)] },
      tax: { blocks: [block(2426, 598, [line(t.tax, 34, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)])] },
      overhead: { blocks: [block(2428, 928, [
        line(t.overhead, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL),
        line(t.overheadMargin, 29, 400, NOTE), line(t.overheadYoy, 29, 400, NOTE),
      ])] },
      demand_creation: { blocks: [block(2428, 1150, [
        line(t.demandCreation[0], 32, 800, RED_LABEL), line(t.demandCreation[1], 32, 800, RED_LABEL),
        line('$value', 32, 400, RED_LABEL), line(t.demandMargin, 29, 400, NOTE), line(t.demandYoy, 29, 400, NOTE),
      ])] },
    };
  }

  const en = {
    footwear: 'Footwear', footwearNote: '(11%) Y/Y', apparel: 'Apparel', apparelNote: '(1%) Y/Y',
    equipment: 'Equipment', equipmentNote: '+14% Y/Y', converseNote: '(21%) Y/Y', revenue: 'Revenue',
    revenueNote: '(8%) Y/Y', grossProfit: 'Gross profit', grossMargin: '44% margin', grossYoy: '(1pp) Y/Y',
    costOfSales: 'Cost of sales', operatingProfit: 'Operating profit', operatingMargin: '11% margin',
    operatingYoy: '(2pp) Y/Y', operatingExpenses: ['Operating', 'expenses'], other: 'Other', interest: 'Interest',
    netProfit: 'Net profit', netMargin: '9% margin', netYoy: '(2pp) Y/Y', tax: 'Tax', overhead: 'Overhead',
    overheadMargin: '23% margin', overheadYoy: '+1pp Y/Y', demandCreation: ['Demand', 'Creation'],
    demandMargin: '9% margin', demandYoy: '+1pp Y/Y', converseNameTop: 1273,
  };
  const zh = {
    footwear: '鞋类', footwearNote: '同比 (11%)', apparel: '服装', apparelNote: '同比 (1%)', equipment: '装备',
    equipmentNote: '同比 +14%', converseNote: '同比 (21%)', revenue: '收入', revenueNote: '同比 (8%)',
    grossProfit: '毛利润', grossMargin: '利润率 44%', grossYoy: '同比 (1 个百分点)', costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 11%', operatingYoy: '同比 (2 个百分点)',
    operatingExpenses: ['运营', '费用'], other: '其他', interest: '利息', netProfit: '净利润',
    netMargin: '利润率 9%', netYoy: '同比 (2 个百分点)', tax: '税费', overhead: '管理费用',
    overheadMargin: '利润率 23%', overheadYoy: '同比 +1 个百分点', demandCreation: ['需求', '创造费用'],
    demandMargin: '利润率 9%', demandYoy: '同比 +1 个百分点', converseNameTop: 1277,
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q2-fy25', name: 'Nike · Q2 FY25', company: 'Nike',
    meta: {
      company: 'Nike', title: 'Nike Q2 FY25 Income Statement', period: 'Q2 FY25', periodNote: 'Ending Nov. 2024',
      currency: '$', unit: 'B', decimals: 3,
      referenceImage: { src: 'input/processed/nike-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 189, titleSize: 118, titleWeight: 800, titleTextLength: 2002,
      periodX: 2407, periodY: 262, periodNoteY: 294,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, linkOpacity: 1,
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: calloutSvg(false),
    rasterAnnotations: [
      { key: 'nike-company-logo', href: 'data/assets/raster-annotations/nike/company-logo.png', x: 627, y: 257, width: 541, height: 301 },
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 500, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 735, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 962, width: 190, height: 152 },
      { key: 'nike-business-converse-q2-fy26', href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png', x: 125, y: 1155, width: 205, height: 132 },
    ],
    layout: {
      scale: 27,
      nodes: {
        footwear: { x: 354, y: 489, width: 71, height: 207 }, apparel: { x: 354, y: 845, width: 71, height: 100 },
        equipment: { x: 354, y: 1104, width: 71, height: 13 }, converse: { x: 354, y: 1291, width: 71, height: 10 },
        revenue: { x: 821, y: 724, width: 70, height: 335 }, gross_profit: { x: 1288, y: 581, width: 71, height: 147 },
        cost_of_sales: { x: 1285, y: 967, width: 72, height: 187 }, operating_profit: { x: 1763, y: 478, width: 70, height: 36 },
        operating_expenses: { x: 1763, y: 730, width: 70, height: 108 }, other: { x: 2086, y: 341, width: 70, height: 3 },
        interest: { x: 2093, y: 470, width: 70, height: 3 }, net_profit: { x: 2222, y: 371, width: 71, height: 32 },
        tax: { x: 2222, y: 634, width: 71, height: 5 }, overhead: { x: 2222, y: 924, width: 71, height: 78 },
        demand_creation: { x: 2222, y: 1187, width: 71, height: 29 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 7.7, valueText: '$7.7B', notes: ['(11%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.7, valueText: '$3.7B', notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.5, valueText: '$0.5B', notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.4, valueText: '$0.4B', notes: ['(21%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.4, valueText: '$12.4B', notes: ['(8%) Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.4, valueText: '$5.4B', notes: ['44% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 7.0, valueText: '($7.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, valueText: '$1.4B', notes: ['11% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, valueText: '($4.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.008, valueText: '$8M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'profit', label: 'Interest', value: 0.024, valueText: '$24M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.2, valueText: '$1.2B', notes: ['9% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 2, type: 'cost', label: 'Overhead', value: 2.9, valueText: '($2.9B)', notes: ['23% margin', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 1.1, valueText: '($1.1B)', notes: ['9% margin', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 7.7, sourceWidth: 207, targetWidth: 212, y0: 592.5, y1: 830, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.7, sourceWidth: 100, targetWidth: 100, y0: 895, y1: 986, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.5, sourceWidth: 13, targetWidth: 13, y0: 1110.5, y1: 1042.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.4, sourceWidth: 10, targetWidth: 10, y0: 1296, y1: 1054, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.4, sourceWidth: 147, targetWidth: 147, y0: 797.5, y1: 654.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 7.0, sourceWidth: 188, targetWidth: 187, y0: 965, y1: 1060.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.4, sourceWidth: 36, targetWidth: 36, y0: 599, y1: 496, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, sourceWidth: 111, targetWidth: 108, y0: 672.5, y1: 784, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.068, sourceWidth: 31, targetWidth: 26, y0: 493.5, y1: 387, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 5, targetWidth: 5, y0: 511.5, y1: 636.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.008, sourceWidth: 3, targetWidth: 3, y0: 342.5, y1: 372.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'interest', target: 'net_profit', value: 0.024, sourceWidth: 3, targetWidth: 3, y0: 471.5, y1: 401.5, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'overhead', value: 2.9, sourceWidth: 79, targetWidth: 78, y0: 769.5, y1: 963, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.1, sourceWidth: 29, targetWidth: 29, y0: 823.5, y1: 1201.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2025 财年第二季度',
        meta: { title: 'Nike 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2024 年 11 月', titleTextLength: 1900 },
        annotationsSvg: calloutSvg(true),
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (11%)'] }, apparel: { label: '服装', notes: ['同比 (1%)'] },
          equipment: { label: '装备', notes: ['同比 +14%'] }, converse: { notes: ['同比 (21%)'] },
          revenue: { label: '收入', notes: ['同比 (8%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 44%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] }, other: { label: '其他' }, interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (2 个百分点)'] }, tax: { label: '税费' },
          overhead: { label: '管理费用', notes: ['利润率 23%', '同比 +1 个百分点'] },
          demand_creation: { label: ['需求', '创造费用'], notes: ['利润率 9%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(zh) },
      },
    },
  });
})();

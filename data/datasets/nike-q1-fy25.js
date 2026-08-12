/* Nike - Q1 FY25 income statement ($B), measured from the native 2667x1500 Source. */
(function () {
  'use strict';

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

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8, semanticRole) => ({
    x, top, anchor, lineGap, ...(semanticRole ? { semanticRole } : {}), lines,
  });

  const labels = (zh) => ({
    footwear: { blocks: [
      block(392, 425, 'middle', [line('$value', 38), line(zh ? '同比 (11%)' : '(11%) Y/Y', 29, 400, NOTE)]),
      block(218, 668, 'middle', [line(zh ? '鞋类' : 'Footwear', 40, 800, BLACK)], 8, 'reference-offset-side-label'),
    ] },
    apparel: { blocks: [
      block(392, 813, 'middle', [line('$value', 38), line(zh ? '同比 (11%)' : '(11%) Y/Y', 29, 400, NOTE)]),
      block(230, 935, 'middle', [line(zh ? '服装' : 'Apparel', 40, 800, BLACK)], 8, 'reference-offset-side-label'),
    ] },
    equipment: { blocks: [
      block(392, 1057, 'middle', [line('$value', 38), line(zh ? '同比 +14%' : '+14% Y/Y', 29, 400, NOTE)]),
      block(224, 1136, 'middle', [line(zh ? '装备' : 'Equipment', 40, 800, BLACK)], 8, 'reference-offset-side-label'),
    ] },
    converse: { blocks: [
      block(392, 1225, 'middle', [line('$value', 38), line(zh ? '同比 (15%)' : '(15%) Y/Y', 29, 400, NOTE)]),
      block(233, 1308, 'middle', [line('Converse', 40, 800, BLACK)], 8, 'reference-offset-side-label'),
    ] },
    revenue: { blocks: [
      block(857, 586, 'middle', [line(zh ? '收入' : 'Revenue', 40, 800, BLACK), line('$value', 38, 400, BLACK), line(zh ? '同比 (10%)' : '(10%) Y/Y', 29, 400, NOTE)], 9),
    ] },
    gross_profit: { blocks: [
      block(1331, 417, 'middle', [line(zh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(zh ? '利润率 45%' : '45% margin', 29, 400, NOTE), line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE)], 9),
    ] },
    cost_of_sales: { blocks: [
      block(1324, 1211, 'middle', [line(zh ? '销售成本' : 'Cost of sales', 38, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL)]),
    ] },
    operating_profit: { blocks: [
      block(1792, 315, 'middle', [line(zh ? '营业利润' : 'Operating profit', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(zh ? '利润率 10%' : '10% margin', 29, 400, NOTE), line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 29, 400, NOTE)], 9),
    ] },
    operating_expenses: { blocks: [
      block(1792, 909, 'middle', [line(zh ? '运营' : 'Operating', 36, 800, RED_LABEL), line(zh ? '费用' : 'expenses', 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)]),
    ] },
    net_profit: { blocks: [
      block(2416, 376, 'middle', [line(zh ? '净利润' : 'Net profit', 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line(zh ? '利润率 9%' : '9% margin', 29, 400, NOTE), line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 29, 400, NOTE)], 9),
    ] },
    tax: { blocks: [
      block(2426, 658, 'middle', [line(zh ? '税费' : 'Tax', 34, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)]),
    ] },
    overhead: { blocks: [
      block(2427, 918, 'middle', [line(zh ? '管理费用' : 'Overhead', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL), line(zh ? '利润率 24%' : '24% margin', 29, 400, NOTE), line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE)]),
    ] },
    demand_creation: { blocks: [
      block(2426, 1158, 'middle', [line(zh ? '需求' : 'Demand', 32, 800, RED_LABEL), line(zh ? '创造费用' : 'Creation', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL), line(zh ? '利润率 11%' : '11% margin', 29, 400, NOTE), line(zh ? '同比 +2 个百分点' : '+2pp Y/Y', 29, 400, NOTE)]),
    ] },
  });

  const calloutBox = `
    <path d="M847 1094 L877 1149 L817 1149 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="727" y="1149" width="241" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const supplementaryGuide = (id, label, value, path, labelX, nameY, valueY) => `
    <g class="sankey-interactive-annotation" data-node="${id}" font-family="Noto Sans,Arial,sans-serif">
      <path d="${path}" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="${labelX}" y="${nameY}" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${label}</text>
      <text x="${labelX}" y="${valueY}" text-anchor="middle" font-size="31" fill="${GREEN_LABEL}">${value}</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="847" y="1188" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${zh ? '中国' : 'China'}<tspan fill="${RED}" font-weight="700"> ${zh ? '同比 (4%)' : '(4%) Y/Y'}</tspan></text>
        <text x="847" y="1231" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${RED}" font-weight="700"> ${zh ? '同比 (11%)' : '(11%) Y/Y'}</tspan></text>
      </g>
      <text x="847" y="1292" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">RoW = ${zh ? '中国以外地区' : 'Rest of World'}</text>
      ${supplementaryGuide('other_income', zh ? '其他收益' : 'Other', '$55M', 'M2074 358H2144C2184 358 2184 402 2222 402', 2117, 301, 342)}
      ${supplementaryGuide('interest_income', zh ? '利息收入' : 'Interest', '$43M', 'M2103 490H2168C2195 490 2190 432 2222 432', 2142, 539, 579)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q1-fy25',
    name: 'Nike · Q1 FY25',
    company: 'Nike',
    meta: {
      company: 'Nike',
      title: 'Nike Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Aug. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nike-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2020,
      periodX: 2410,
      periodY: 281,
      periodNoteY: 323,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 532, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 760, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 984, width: 190, height: 152 },
      { key: 'nike-business-converse-q2-fy26', href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png', x: 125, y: 1180, width: 205, height: 132 },
    ],
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 0.055, valueText: '$55M', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'interest_income', representation: 'flow', label: 'Interest', value: 0.043, valueText: '$43M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 28.9,
      routes: {
        other_income: { x: 2074, y: 358, width: 0, height: 2 },
        interest_income: { x: 2103, y: 490, width: 0, height: 2 },
      },
      nodes: {
        footwear: { x: 355, y: 524, width: 71, height: 215 },
        apparel: { x: 355, y: 911, width: 71, height: 86 },
        equipment: { x: 355, y: 1152, width: 71, height: 15 },
        converse: { x: 355, y: 1324, width: 71, height: 12 },
        revenue: { x: 822, y: 731, width: 70, height: 335 },
        gross_profit: { x: 1289, y: 598, width: 71, height: 151 },
        cost_of_sales: { x: 1289, y: 1020, width: 71, height: 181 },
        operating_profit: { x: 1757, y: 497, width: 70, height: 35 },
        operating_expenses: { x: 1757, y: 769, width: 70, height: 117 },
        net_profit: { x: 2223, y: 402, width: 71, height: 30 },
        tax: { x: 2223, y: 689, width: 71, height: 5 },
        overhead: { x: 2223, y: 922, width: 71, height: 80 },
        demand_creation: { x: 2223, y: 1196, width: 71, height: 34 },
      },
      labels: { ...labels(false), other_income: { blocks: [] }, interest_income: { blocks: [] } },
    },
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 7.5, notes: ['(11%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.0, valueText: '$3.0B', notes: ['(11%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.6, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.5, notes: ['(15%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 11.6, notes: ['(10%) Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.3, notes: ['45% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 6.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.2, notes: ['10% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.0, valueText: '($4.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['9% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'overhead', col: 4, order: 2, type: 'cost', label: 'Overhead', value: 2.8, notes: ['24% margin', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'demand_creation', col: 4, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 1.2, notes: ['11% margin', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 7.5, sourceWidth: 215, targetWidth: 222, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.0, sourceWidth: 86, targetWidth: 86, sourceOrder: 0, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.6, sourceWidth: 15, targetWidth: 15, sourceOrder: 0, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.5, sourceWidth: 12, targetWidth: 12, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.3, sourceWidth: 152, targetWidth: 151, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 6.3, sourceWidth: 183, targetWidth: 181, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.2, sourceWidth: 35, targetWidth: 35, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, sourceWidth: 116, targetWidth: 117, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 30, targetWidth: 30, sourceOrder: 0, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.055, sourceWidth: 2, targetWidth: 2, y0: 358, y1: 403, sourceOrder: 0, targetOrder: 0, interactionOnly: true, showTooltip: false, linkTint: GREEN_LINK },
      { sourceRoute: 'interest_income', target: 'net_profit', value: 0.043, sourceWidth: 2, targetWidth: 2, y0: 490, y1: 431, sourceOrder: 0, targetOrder: 2, interactionOnly: true, showTooltip: false, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 5, targetWidth: 5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'overhead', value: 2.8, sourceWidth: 83, targetWidth: 80, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.2, sourceWidth: 34, targetWidth: 34, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2025 财年第一季度',
        meta: {
          title: 'Nike 2025 财年第一季度利润表',
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 8 月',
          titleTextLength: 1910,
          periodX: 2380,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          other_income: { label: '其他收益' },
          interest_income: { label: '利息收入' },
        },
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (11%)'] },
          apparel: { label: '服装', notes: ['同比 (11%)'] },
          equipment: { label: '装备', notes: ['同比 +14%'] },
          converse: { notes: ['同比 (15%)'] },
          revenue: { label: '收入', notes: ['同比 (10%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          overhead: { label: '管理费用', notes: ['利润率 24%', '同比 +1 个百分点'] },
          demand_creation: { label: ['需求', '创造费用'], notes: ['利润率 11%', '同比 +2 个百分点'] },
        },
        layout: { labels: { ...labels(true), other_income: { blocks: [] }, interest_income: { blocks: [] } } },
      },
    },
  });
})();

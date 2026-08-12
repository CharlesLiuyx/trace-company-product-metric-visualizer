/* Nike Q3 FY24 income statement ($B), measured from the Source image. */
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

  const line = (text, size, weight = 400, color) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 9) => ({ x, top, anchor, lines, lineGap });

  const callout = (zh) => `
    <g>
      <path d="M847 1093 L877 1147 L817 1147 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
      <rect x="727" y="1147" width="240" height="109" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
      <text x="847" y="1187" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">${zh ? '中国' : 'China'}<tspan fill="${GREEN_LABEL}" font-weight="700">${zh ? ' 同比 +5%' : ' +5% Y/Y'}</tspan></text>
      <text x="847" y="1230" text-anchor="middle" font-size="30" font-weight="800" fill="${BLACK}">RoW<tspan fill="${RED_LABEL}" font-weight="700">${zh ? ' 同比 (0%)' : ' (0%) Y/Y'}</tspan></text>
      <text x="847" y="1291" text-anchor="middle" font-size="24" font-weight="500" fill="${NOTE}">${zh ? 'RoW = 中国以外地区' : 'RoW = Rest of World'}</text>
    </g>`;

  const incomeGuide = ({ id, label, valueText, x, labelY, valueY, path, anchorX, anchorY }) => `
    <g class="sankey-interactive-annotation" data-node="${id}"
      data-link-numerator="${id}" data-link-denominator="net_profit"
      data-link-anchor-x="${anchorX}" data-link-anchor-y="${anchorY}">
      <path d="${path}" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="${x}" y="${labelY}" text-anchor="middle" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${label}</text>
      <text x="${x}" y="${valueY}" text-anchor="middle" font-size="32" font-weight="400" fill="${GREEN_LABEL}">${valueText}</text>
    </g>`;

  const annotations = (zh) => `${callout(zh)}
    ${incomeGuide({
      id: 'interest', label: zh ? '利息收入' : 'Interest', valueText: '$52M',
      x: 2123, labelY: 303, valueY: 345,
      path: 'M2054 366H2137C2174 366 2175 405 2223 407', anchorX: 2166, anchorY: 386,
    })}
    ${incomeGuide({
      id: 'other', label: zh ? '其他' : 'Other', valueText: '$16M',
      x: 2098, labelY: 542, valueY: 584,
      path: 'M2045 500H2087C2130 500 2132 435 2223 433', anchorX: 2156, anchorY: 460,
    })}`;

  const labels = (L) => ({
    footwear: { blocks: [
      block(393, 430, 'middle', [line('$value', 38), line(L.footwearYoy, 29, 400, NOTE)], 8),
      { ...block(218, 675, 'middle', [line(L.footwear, 40, 800, BLACK)]), semanticRole: 'reference-offset-side-label' },
    ] },
    apparel: { blocks: [
      block(383, 805, 'middle', [line('$value', 38), line(L.apparelYoy, 29, 400, NOTE)], 8),
      { ...block(230, 944, 'middle', [line(L.apparel, 40, 800, BLACK)]), semanticRole: 'reference-offset-side-label' },
    ] },
    equipment: { blocks: [
      block(393, 1056, 'middle', [line('$value', 38), line(L.equipmentYoy, 29, 400, NOTE)], 8),
      { ...block(223, 1144, 'middle', [line(L.equipment, 40, 800, BLACK)]), semanticRole: 'reference-offset-side-label' },
    ] },
    converse: { blocks: [
      block(393, 1238, 'middle', [line('$value', 38), line(L.converseYoy, 29, 400, NOTE)], 8),
      { ...block(233, 1314, 'middle', [line('Converse', 40, 800, BLACK)]), semanticRole: 'reference-offset-side-label' },
    ] },
    revenue: { blocks: [block(861, 593, 'middle', [
      line(L.revenue, 40, 800, BLACK), line('$value', 38, 400, BLACK), line(L.revenueYoy, 29, 400, NOTE),
    ])] },
    gross_profit: { blocks: [block(1328, 445, 'middle', [
      line(L.grossProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
      line(L.grossMargin, 29, 400, NOTE), line(L.grossYoy, 29, 400, NOTE),
    ])] },
    cost_of_sales: { blocks: [block(1328, 1185, 'middle', [
      line(L.costOfSales, 38, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL),
    ], 8)] },
    operating_profit: { blocks: [block(1795, 350, 'middle', [
      line(L.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
      line(L.operatingMargin, 29, 400, NOTE), line(L.operatingYoy, 29, 400, NOTE),
    ])] },
    operating_expenses: { blocks: [block(1787, 949, 'middle', [
      line(L.operating1, 36, 800, RED_LABEL), line(L.operating2, 36, 800, RED_LABEL),
      line('$value', 34, 400, RED_LABEL),
    ], 8)] },
    net_profit: { blocks: [block(2415, 376, 'middle', [
      line(L.netProfit, 40, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL),
      line(L.netMargin, 29, 400, NOTE), line(L.netYoy, 29, 400, NOTE),
    ])] },
    tax: { blocks: [block(2428, 715, 'middle', [
      line(L.tax, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL),
    ], 8)] },
    overhead: { blocks: [block(2428, 1010, 'middle', [
      line(L.overhead, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL),
    ], 8)] },
    demand_creation: { blocks: [block(2428, 1193, 'middle', [
      line(L.demand1, 32, 800, RED_LABEL), line(L.demand2, 32, 800, RED_LABEL),
      line('$value', 32, 400, RED_LABEL),
    ], 8)] },
    interest: { blocks: [] },
    other: { blocks: [] },
  });

  const labelsEn = labels({
    footwear: 'Footwear', footwearYoy: '+2% Y/Y', apparel: 'Apparel', apparelYoy: '(3%) Y/Y',
    equipment: 'Equipment', equipmentYoy: '+21% Y/Y', converseYoy: '(21%) Y/Y',
    revenue: 'Revenue', revenueYoy: '+0% Y/Y', grossProfit: 'Gross profit',
    grossMargin: '45% margin', grossYoy: '+1pp Y/Y', costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '11% margin', operatingYoy: '(1pp) Y/Y',
    operating1: 'Operating', operating2: 'expenses', netProfit: 'Net profit',
    netMargin: '9% margin', netYoy: '(1pp) Y/Y', tax: 'Tax', overhead: 'Overhead',
    demand1: 'Demand', demand2: 'Creation',
  });

  const labelsZh = labels({
    footwear: '鞋类', footwearYoy: '同比 +2%', apparel: '服装', apparelYoy: '同比 (3%)',
    equipment: '装备', equipmentYoy: '同比 +21%', converseYoy: '同比 (21%)',
    revenue: '收入', revenueYoy: '同比 +0%', grossProfit: '毛利润',
    grossMargin: '利润率 45%', grossYoy: '同比 +1 个百分点', costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 11%', operatingYoy: '同比 (1 个百分点)',
    operating1: '运营', operating2: '费用', netProfit: '净利润',
    netMargin: '利润率 9%', netYoy: '同比 (1 个百分点)', tax: '税费', overhead: '管理费用',
    demand1: '需求', demand2: '创造费用',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nike-q3-fy24',
    name: 'Nike · Q3 FY24',
    company: 'Nike',
    meta: {
      company: 'Nike', title: 'Nike Q3 FY24 Income Statement', period: 'Q3 FY24',
      periodNote: 'Ending Feb. 2024', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/nike-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 189, titleSize: 118, titleWeight: 800, titleTextLength: 2002,
      periodX: 193, periodY: 338, periodNoteY: 384,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'nike-company-logo', href: 'data/assets/raster-annotations/nike/company-logo.png', x: 627, y: 257, width: 541, height: 301 },
      { key: 'nike-business-footwear', href: 'data/assets/raster-annotations/nike/business-footwear.png', x: 114, y: 532, width: 207, height: 140 },
      { key: 'nike-business-apparel', href: 'data/assets/raster-annotations/nike/business-apparel.png', x: 140, y: 760, width: 200, height: 164 },
      { key: 'nike-business-equipment', href: 'data/assets/raster-annotations/nike/business-equipment.png', x: 150, y: 990, width: 190, height: 152 },
      { key: 'nike-business-converse-q2-fy26', href: 'data/assets/raster-annotations/nike/business-converse-q2-fy26.png', x: 125, y: 1186, width: 205, height: 132 },
    ],
    layout: {
      scale: 27,
      routes: {
        interest: { x: 2054, y: 366, width: 0, height: 1 },
        other: { x: 2045, y: 500, width: 0, height: 1 },
      },
      nodes: {
        footwear: { x: 355, y: 535, width: 71, height: 220 },
        apparel: { x: 355, y: 908, width: 71, height: 87 },
        equipment: { x: 355, y: 1160, width: 71, height: 12 },
        converse: { x: 355, y: 1338, width: 71, height: 11 },
        revenue: { x: 822, y: 740, width: 70, height: 335 },
        gross_profit: { x: 1291, y: 627, width: 72, height: 149 },
        cost_of_sales: { x: 1296, y: 991, width: 72, height: 184 },
        operating_profit: { x: 1752, y: 534, width: 70, height: 35 },
        operating_expenses: { x: 1749, y: 815, width: 70, height: 113 },
        net_profit: { x: 2223, y: 405, width: 71, height: 31 },
        tax: { x: 2223, y: 749, width: 71, height: 3 },
        overhead: { x: 2223, y: 1014, width: 71, height: 85 },
        demand_creation: { x: 2223, y: 1247, width: 71, height: 25 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.052, valueText: '$52M', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'other', representation: 'flow', label: 'Other', value: 0.016, valueText: '$16M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 8.2, valueText: '$8.2B', notes: ['+2% Y/Y'], color: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 3.3, valueText: '$3.3B', notes: ['(3%) Y/Y'], color: BLACK, linkTint: GREY_LINK },
      { id: 'equipment', col: 0, order: 2, type: 'source', label: 'Equipment', value: 0.5, valueText: '$0.5B', notes: ['+21% Y/Y'], color: BLACK, linkTint: GREY_LINK },
      { id: 'converse', col: 0, order: 3, type: 'source', label: 'Converse', value: 0.5, valueText: '$0.5B', notes: ['(21%) Y/Y'], color: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.4, valueText: '$12.4B', notes: ['+0% Y/Y'], color: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.6, valueText: '$5.6B', notes: ['45% margin', '+1pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 6.9, valueText: '($6.9B)', color: RED, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.3, valueText: '$1.3B', notes: ['11% margin', '(1pp) Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.2, valueText: '($4.2B)', color: RED, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.2, valueText: '$1.2B', notes: ['9% margin', '(1pp) Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)', color: RED, linkTint: RED_LINK },
      { id: 'overhead', col: 5, order: 2, type: 'cost', label: 'Overhead', value: 3.2, valueText: '($3.2B)', color: RED, linkTint: RED_LINK },
      { id: 'demand_creation', col: 5, order: 3, type: 'cost', label: ['Demand', 'Creation'], value: 1.0, valueText: '($1.0B)', color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 8.2, sourceWidth: 220, targetWidth: 225, y0: 645, y1: 852.5, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 3.3, sourceWidth: 87, targetWidth: 87, y0: 951.5, y1: 1008.5, targetOrder: 1 },
      { source: 'equipment', target: 'revenue', value: 0.5, sourceWidth: 12, targetWidth: 12, y0: 1166, y1: 1058, targetOrder: 2 },
      { source: 'converse', target: 'revenue', value: 0.5, sourceWidth: 11, targetWidth: 11, y0: 1343.5, y1: 1069.5, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.6, sourceWidth: 149, targetWidth: 149, y0: 814.5, y1: 701.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 6.9, sourceWidth: 186, targetWidth: 184, y0: 982, y1: 1083, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.3, sourceWidth: 34, targetWidth: 34, y0: 644, y1: 551.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.2, sourceWidth: 115, targetWidth: 113, y0: 718.5, y1: 871.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.052, sourceWidth: 2, targetWidth: 2, y0: 366, y1: 408, targetOrder: 0, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 31, targetWidth: 31, y0: 549.5, y1: 420.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { sourceRoute: 'other', target: 'net_profit', value: 0.016, sourceWidth: 2, targetWidth: 2, y0: 500, y1: 434, targetOrder: 2, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 4, targetWidth: 3, y0: 567, y1: 750.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'overhead', value: 3.2, sourceWidth: 85, targetWidth: 85, y0: 857.5, y1: 1056.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'demand_creation', value: 1.0, sourceWidth: 28, targetWidth: 25, y0: 914, y1: 1259.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['RoW'],
      zh: {
        name: 'Nike · 2024 财年第三季度',
        meta: {
          title: 'Nike 2024 财年第三季度利润表', period: '2024 财年第三季度',
          periodNote: '截至 2024 年 2 月', titleTextLength: 1900,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { interest: { label: '利息收入' }, other: { label: '其他' } },
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +2%'] }, apparel: { label: '服装', notes: ['同比 (3%)'] },
          equipment: { label: '装备', notes: ['同比 +21%'] }, converse: { notes: ['同比 (21%)'] },
          revenue: { label: '收入', notes: ['同比 +0%'] }, gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (1 个百分点)'] },
          tax: { label: '税费' }, overhead: { label: '管理费用' }, demand_creation: { label: ['需求', '创造费用'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

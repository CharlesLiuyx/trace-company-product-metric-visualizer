/* Adidas Q1 FY24 income statement (€B), measured from the Source image. */
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
      <path d="M861 1116 L892 1176 L830 1176 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
      <rect x="673" y="1176" width="395" height="139" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
      <text x="871" y="1218" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${zh ? '北美' : 'North America'}<tspan font-weight="500">${zh ? ' 同比 (5%)' : ' (5%) Y/Y'}</tspan></text>
      <text x="871" y="1261" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">EMEA<tspan font-weight="500">${zh ? ' 同比 +15%' : ' +15% Y/Y'}</tspan></text>
      <text x="871" y="1304" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${zh ? '中国' : 'China'}<tspan font-weight="500">${zh ? ' 同比 +1%' : ' +1% Y/Y'}</tspan></text>
    </g>`;

  const otherGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other" data-link-numerator="other" data-link-denominator="operating_profit"
      data-link-anchor-x="1714" data-link-anchor-y="550">
      <path d="M1634 572H1709C1746 572 1748 528 1765 528"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="1677" y="614" text-anchor="middle" font-size="31" font-weight="800"
        fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="1677" y="656" text-anchor="middle" font-size="31" font-weight="400"
        fill="${GREEN_LABEL}">€19M</text>
    </g>`;

  const labels = (L) => ({
    footwear: { blocks: [
      block(394, 415, 'middle', [line('$value', 40), line(L.footwearYoy, 29, 400, NOTE)]),
      { ...block(224, 640, 'middle', [line(L.footwear, 40, 800, BLACK)]), semanticRole: 'reference-offset-side-label' },
    ] },
    apparel: { blocks: [
      block(391, 830, 'middle', [line('$value', 40), line(L.apparelYoy, 29, 400, NOTE)]),
      { ...block(228, 970, 'middle', [line(L.apparel, 40, 800, BLACK)]), semanticRole: 'reference-offset-side-label' },
    ] },
    accessories_gear: { blocks: [
      block(397, 1164, 'middle', [line('$value', 40), line(L.accessoriesYoy, 29, 400, NOTE)]),
      { ...block(220, 1243, 'middle', [line(L.accessories1, 40, 800, BLACK), line(L.accessories2, 40, 800, BLACK)], 8), semanticRole: 'reference-offset-side-label' },
    ] },
    revenue: { blocks: [block(857, 590, 'middle', [
      line(L.revenue, 40, 800, BLACK), line('$value', 40, 400, BLACK), line(L.revenueYoy, 29, 400, NOTE),
    ], 10)] },
    gross_profit: { blocks: [block(1315, 436, 'middle', [
      line(L.grossProfit, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
      line(L.grossMargin, 29, 400, NOTE), line(L.grossYoy, 29, 400, NOTE),
    ])] },
    cost_of_sales: { blocks: [block(1326, 1235, 'middle', [
      line(L.costOfSales, 36, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL),
    ])] },
    operating_profit: { blocks: [block(1798, 327, 'middle', [
      line(L.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
      line(L.operatingMargin, 29, 400, NOTE), line(L.operatingYoy, 29, 400, NOTE),
    ])] },
    operating_expenses: { blocks: [block(1795, 911, 'middle', [
      line(L.operating1, 36, 800, RED_LABEL), line(L.operating2, 36, 800, RED_LABEL),
      line('$value', 34, 400, RED_LABEL),
    ])] },
    net_profit: { blocks: [block(2429, 375, 'middle', [
      line(L.netProfit, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL),
      line(L.netMargin, 29, 400, NOTE), line(L.netYoy, 29, 400, NOTE),
    ])] },
    financial: { blocks: [block(2423, 589, 'middle', [
      line(L.financial, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL),
    ], 8)] },
    tax: { blocks: [block(2426, 702, 'middle', [
      line(L.tax, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL),
    ], 8)] },
    ga: { blocks: [block(2429, 922, 'middle', [
      line(L.ga, 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL),
    ], 8)] },
    marketing_pos: { blocks: [block(2435, 1158, 'middle', [
      line(L.marketing1, 32, 800, RED_LABEL), line(L.marketing2, 32, 800, RED_LABEL),
      line('$value', 32, 400, RED_LABEL),
    ], 8)] },
    other: { blocks: [] },
  });

  const labelsEn = labels({
    footwear: 'Footwear', footwearYoy: '+7% Y/Y',
    apparel: 'Apparel', apparelYoy: '(1%) Y/Y',
    accessories1: 'Accessories', accessories2: '& Gear', accessoriesYoy: '(4%) Y/Y',
    revenue: 'Revenue', revenueYoy: '+3% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '51% margin', grossYoy: '+6pp Y/Y',
    costOfSales: 'Cost of sales', operatingProfit: 'Operating profit',
    operatingMargin: '6% margin', operatingYoy: '+5pp Y/Y',
    operating1: 'Operating', operating2: 'expenses', netProfit: 'Net profit',
    netMargin: '3% margin', netYoy: '+4pp Y/Y', financial: 'Financial', tax: 'Tax',
    ga: 'G&A', marketing1: 'Marketing', marketing2: '& POS',
  });

  const labelsZh = labels({
    footwear: '鞋类', footwearYoy: '同比 +7%',
    apparel: '服装', apparelYoy: '同比 (1%)',
    accessories1: '配件', accessories2: '与装备', accessoriesYoy: '同比 (4%)',
    revenue: '收入', revenueYoy: '同比 +3%',
    grossProfit: '毛利润', grossMargin: '利润率 51%', grossYoy: '同比 +6 个百分点',
    costOfSales: '销售成本', operatingProfit: '营业利润',
    operatingMargin: '利润率 6%', operatingYoy: '同比 +5 个百分点',
    operating1: '运营', operating2: '费用', netProfit: '净利润',
    netMargin: '利润率 3%', netYoy: '同比 +4 个百分点',
    financial: '财务费用', tax: '税费', ga: '管理费用',
    marketing1: '营销', marketing2: '与销售点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adidas-q1-fy24',
    name: 'Adidas · Q1 FY24',
    company: 'Adidas',
    meta: {
      company: 'Adidas',
      title: 'Adidas Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '€', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adidas-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 118, titleWeight: 800, titleTextLength: 2143,
      hidePeriodStamp: true,
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: `${callout(false)}${otherGuide(false)}`,
    rasterAnnotations: [
      { key: 'adidas-company-logo', href: 'data/assets/raster-annotations/adidas/company-logo.png', x: 642, y: 254, width: 424, height: 312 },
      { key: 'adidas-business-footwear', href: 'data/assets/raster-annotations/adidas/business-footwear.png', x: 114, y: 492, width: 200, height: 170 },
      { key: 'adidas-business-apparel', href: 'data/assets/raster-annotations/adidas/business-apparel.png', x: 112, y: 808, width: 202, height: 166 },
      { key: 'adidas-business-accessories-gear', href: 'data/assets/raster-annotations/adidas/business-accessories-gear.png', x: 116, y: 1070, width: 214, height: 138 },
    ],
    layout: {
      scale: 66.5,
      routes: { other: { x: 1634, y: 572, width: 0, height: 1 } },
      nodes: {
        footwear: { x: 358, y: 518, width: 71, height: 216 },
        apparel: { x: 358, y: 927, width: 71, height: 125 },
        accessories_gear: { x: 358, y: 1263, width: 71, height: 21 },
        revenue: { x: 825, y: 739, width: 70, height: 367 },
        gross_profit: { x: 1282, y: 617, width: 71, height: 186 },
        cost_of_sales: { x: 1292, y: 1041, width: 71, height: 177 },
        operating_profit: { x: 1765, y: 508, width: 70, height: 20 },
        operating_expenses: { x: 1760, y: 723, width: 70, height: 165 },
        net_profit: { x: 2226, y: 417, width: 71, height: 10 },
        financial: { x: 2226, y: 626, width: 71, height: 3 },
        tax: { x: 2226, y: 737, width: 71, height: 2 },
        ga: { x: 2226, y: 907, width: 71, height: 120 },
        marketing_pos: { x: 2226, y: 1198, width: 71, height: 43 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other', value: 0.019, valueText: '€19M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 3.2, valueText: '€3.2B', notes: ['+7% Y/Y'], color: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 1.9, valueText: '€1.9B', notes: ['(1%) Y/Y'], color: BLACK, linkTint: GREY_LINK },
      { id: 'accessories_gear', col: 0, order: 2, type: 'source', label: ['Accessories', '& Gear'], value: 0.3, valueText: '€0.3B', notes: ['(4%) Y/Y'], color: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.5, valueText: '€5.5B', notes: ['+3% Y/Y'], color: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.8, valueText: '€2.8B', notes: ['51% margin', '+6pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 2.7, valueText: '(€2.7B)', color: RED, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, valueText: '€0.3B', notes: ['6% margin', '+5pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.5, valueText: '(€2.5B)', color: RED, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, valueText: '€0.2B', notes: ['3% margin', '+4pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'financial', col: 5, order: 1, type: 'cost', label: 'Financial', value: 0.1, valueText: '(€0.1B)', color: RED, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.1, valueText: '(€0.1B)', color: RED, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 1.8, valueText: '(€1.8B)', color: RED, linkTint: RED_LINK },
      { id: 'marketing_pos', col: 5, order: 4, type: 'cost', label: ['Marketing', '& POS'], value: 0.7, valueText: '(€0.7B)', color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 3.2, sourceWidth: 216, targetWidth: 217, y0: 626, y1: 847.5, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 1.9, sourceWidth: 125, targetWidth: 129, y0: 989.5, y1: 1020.5, targetOrder: 1 },
      { source: 'accessories_gear', target: 'revenue', value: 0.3, sourceWidth: 21, targetWidth: 20, y0: 1273.5, y1: 1095, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 2.8, sourceWidth: 188, targetWidth: 186, y0: 833, y1: 710, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2.7, sourceWidth: 179, targetWidth: 177, y0: 1016.5, y1: 1129.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.281, sourceWidth: 20, targetWidth: 20, y0: 627, y1: 518, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.5, sourceWidth: 166, targetWidth: 165, y0: 720, y1: 805.5, sourceOrder: 1, linkTint: RED_LINK },
      { sourceRoute: 'other', target: 'operating_profit', value: 0.019, sourceWidth: 2, targetWidth: 2, y0: 572, y1: 527, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 10, targetWidth: 10, y0: 513, y1: 422, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'financial', value: 0.1, sourceWidth: 5, targetWidth: 3, y0: 520.5, y1: 627.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 5, targetWidth: 2, y0: 525.5, y1: 738, sourceOrder: 2, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.8, sourceWidth: 121, targetWidth: 120, y0: 783.5, y1: 967, sourceOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing_pos', value: 0.7, sourceWidth: 43, targetWidth: 43, y0: 866.5, y1: 1219.5, sourceOrder: 1, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Adidas · 2024 财年第一季度',
        meta: {
          title: 'Adidas 2024 财年第一季度利润表', period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月', titleTextLength: 1850,
        },
        annotationsSvg: `${callout(true)}${otherGuide(true)}`,
        nonNodeMetrics: { other: { label: '其他' } },
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 +7%'] }, apparel: { label: '服装', notes: ['同比 (1%)'] },
          accessories_gear: { label: ['配件', '与装备'], notes: ['同比 (4%)'] }, revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +6 个百分点'] }, cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +5 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +4 个百分点'] }, financial: { label: '财务费用' },
          tax: { label: '税费' }, ga: { label: '管理费用' }, marketing_pos: { label: ['营销', '与销售点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

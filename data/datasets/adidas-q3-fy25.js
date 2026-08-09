/* ====================================================================
 * Adidas - Q3 FY25 income statement (€B)
 * Fixed d3-sankey reconstruction of input/processed/adidas-q3-fy25.png.
 * The company logo reuses the validated Adidas asset; Q3 product photos
 * come from the dataset-bound crop spec in input/icon-crop-specs/.
 * ==================================================================== */
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
    <path d="M849 1080 L880 1140 L818 1140 Z" fill="#efefef" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="662" y="1140" width="394" height="139" rx="18" fill="#efefef" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotations = (L) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="859" y="1184" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.northAmerica}<tspan font-weight="500"> (5%) Y/Y</tspan></text>
        <text x="859" y="1227" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.europe}<tspan font-weight="500"> +8% Y/Y</tspan></text>
        <text x="859" y="1270" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.china}<tspan font-weight="500"> +0% Y/Y</tspan></text>
      </g>
    </g>`;

  const annotationsEn = annotations({
    northAmerica: 'North America',
    europe: 'Europe',
    china: 'China',
  });

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="859" y="1184" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">北美<tspan font-weight="500"> 同比 (5%)</tspan></text>
        <text x="859" y="1227" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">欧洲<tspan font-weight="500"> 同比 +8%</tspan></text>
        <text x="859" y="1270" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">中国<tspan font-weight="500"> 同比 +0%</tspan></text>
      </g>
    </g>`;

  const labelBlocks = (L) => ({
    footwear: {
      blocks: [
        {
          x: 386, top: 479, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.footwearYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 222, top: 685, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: L.footwear, size: 40, weight: 800, color: BLACK }] },
      ],
    },
    apparel: {
      blocks: [
        {
          x: 385, top: 845, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.apparelYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 228, top: 992, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: L.apparel, size: 40, weight: 800, color: BLACK }] },
      ],
    },
    accessories_gear: {
      blocks: [
        {
          x: 387, top: 1135, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.accessoriesYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 210, top: 1191, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 8,
          lines: [
            { text: L.accessories1, size: 40, weight: 800, color: BLACK },
            { text: L.accessories2, size: 40, weight: 800, color: BLACK },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 851, top: 631, anchor: 'middle', lineGap: 10,
          lines: [
            { text: L.revenue, size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1320, top: 447, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
            { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_sales: {
      blocks: [
        {
          x: 1321, top: 1190, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.costOfSales, size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 36, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 1671, top: 659, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.other, size: 32, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1785, top: 344, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
            { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1785, top: 955, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.operating1, size: 36, weight: 800, color: RED_LABEL },
            { text: L.operating2, size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 34, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2427, top: 402, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.netProfit, size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: L.netMargin, size: 29, weight: 400, color: NOTE },
            { text: L.netYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax_other: {
      blocks: [
        {
          x: 2426, top: 635, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.taxOther, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 32, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2426, top: 941, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.ga, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 32, weight: 400, color: RED_LABEL },
            { text: L.gaRev, size: 29, weight: 400, color: NOTE },
            { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    marketing_pos: {
      blocks: [
        {
          x: 2432, top: 1171, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.marketing1, size: 32, weight: 800, color: RED_LABEL },
            { text: L.marketing2, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 32, weight: 400, color: RED_LABEL },
            { text: L.marketingRev, size: 29, weight: 400, color: NOTE },
            { text: L.marketingYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  });

  const labelsEn = labelBlocks({
    footwear: 'Footwear', footwearYoy: '(1%) Y/Y',
    apparel: 'Apparel', apparelYoy: '+11% Y/Y',
    accessories1: 'Accessories', accessories2: '& Gear', accessoriesYoy: '(3%) Y/Y',
    revenue: 'Revenue', revenueYoy: '+3% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '52% margin', grossYoy: '+1pp Y/Y',
    costOfSales: 'Cost of sales', other: 'Other',
    operatingProfit: 'Operating profit', operatingMargin: '11% margin', operatingYoy: '+2pp Y/Y',
    operating1: 'Operating', operating2: 'expenses',
    netProfit: 'Net profit', netMargin: '7% margin', netYoy: '(0pp) Y/Y',
    taxOther: 'Tax & other', ga: 'G&A', gaRev: '29% of revenue', gaYoy: '(4pp) Y/Y',
    marketing1: 'Marketing', marketing2: '& POS', marketingRev: '12% of revenue', marketingYoy: '+1pp Y/Y',
  });

  const labelsZh = labelBlocks({
    footwear: '鞋类', footwearYoy: '同比 (1%)',
    apparel: '服装', apparelYoy: '同比 +11%',
    accessories1: '配件', accessories2: '与装备', accessoriesYoy: '同比 (3%)',
    revenue: '收入', revenueYoy: '同比 +3%',
    grossProfit: '毛利润', grossMargin: '利润率 52%', grossYoy: '同比 +1 个百分点',
    costOfSales: '销售成本', other: '其他',
    operatingProfit: '营业利润', operatingMargin: '利润率 11%', operatingYoy: '同比 +2 个百分点',
    operating1: '运营', operating2: '费用',
    netProfit: '净利润', netMargin: '利润率 7%', netYoy: '同比 (0 个百分点)',
    taxOther: '税费及其他', ga: '管理费用', gaRev: '占收入 29%', gaYoy: '同比 (4 个百分点)',
    marketing1: '营销', marketing2: '与销售点', marketingRev: '占收入 12%', marketingYoy: '同比 +1 个百分点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adidas-q3-fy25',
    name: 'Adidas · Q3 FY25',
    company: 'Adidas',
    meta: {
      company: 'Adidas',
      title: 'Adidas Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/adidas-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 168,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2158,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      { key: 'adidas-company-logo', href: 'data/assets/raster-annotations/adidas/company-logo.png', x: 642, y: 254, width: 424, height: 312 },
      { key: 'adidas-q3-fy25-business-footwear', href: 'data/assets/raster-annotations/adidas/q3-fy25-business-footwear.png', x: 114, y: 476, width: 200, height: 190 },
      { key: 'adidas-q3-fy25-business-apparel', href: 'data/assets/raster-annotations/adidas/q3-fy25-business-apparel.png', x: 112, y: 802, width: 202, height: 176 },
      { key: 'adidas-q3-fy25-business-accessories-gear', href: 'data/assets/raster-annotations/adidas/q3-fy25-business-accessories-gear.png', x: 116, y: 1050, width: 214, height: 142 },
    ],
    layout: {
      scale: 44.24,
      nodes: {
        footwear: { x: 348, y: 572, width: 71, height: 164 },
        apparel: { x: 348, y: 935, width: 71, height: 103 },
        accessories_gear: { x: 348, y: 1232, width: 71, height: 20 },
        revenue: { x: 815, y: 773, width: 70, height: 292 },
        gross_profit: { x: 1282, y: 629, width: 71, height: 150 },
        cost_of_sales: { x: 1284, y: 1032, width: 72, height: 139 },
        other: { x: 1632, y: 639, width: 71, height: 1 },
        operating_profit: { x: 1750, y: 528, width: 70, height: 30 },
        operating_expenses: { x: 1750, y: 813, width: 70, height: 119 },
        net_profit: { x: 2216, y: 438, width: 71, height: 20 },
        tax_other: { x: 2216, y: 661, width: 71, height: 8 },
        ga: { x: 2216, y: 932, width: 71, height: 84 },
        marketing_pos: { x: 2216, y: 1211, width: 71, height: 33 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 3.8, valueText: '€3.8B', notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 2.4, valueText: '€2.4B', notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'accessories_gear', col: 0, order: 2, type: 'source', label: ['Accessories', '& Gear'], value: 0.5, valueText: '€0.5B', notes: ['(3%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.6, valueText: '€6.6B', notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.4, valueText: '€3.4B', notes: ['52% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 3.2, valueText: '(€3.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.042, valueText: '€42M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, valueText: '€0.7B', notes: ['11% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.7, valueText: '(€2.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.5, valueText: '€0.5B', notes: ['7% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_other', col: 5, order: 1, type: 'cost', label: 'Tax & other', value: 0.3, valueText: '(€0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 1.9, valueText: '(€1.9B)', notes: ['29% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_pos', col: 5, order: 3, type: 'cost', label: ['Marketing', '& POS'], value: 0.8, valueText: '(€0.8B)', notes: ['12% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 3.8, sourceWidth: 164, targetWidth: 164, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 2.4, sourceWidth: 103, targetWidth: 108, sourceOrder: 0, targetOrder: 1 },
      { source: 'accessories_gear', target: 'revenue', value: 0.5, width: 20, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.4, width: 150, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.2, sourceWidth: 142, targetWidth: 139, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.658, sourceWidth: 29, targetWidth: 29, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.7, sourceWidth: 121, targetWidth: 119, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'operating_profit', value: 0.042, width: 1, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, width: 20, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_other', value: 0.3, sourceWidth: 9, targetWidth: 8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.9, width: 84, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing_pos', value: 0.8, width: 33, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Adidas · 2025 财年第三季度',
        meta: {
          title: 'Adidas 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1850,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (1%)'] },
          apparel: { label: '服装', notes: ['同比 +11%'] },
          accessories_gear: { label: ['配件', '与装备'], notes: ['同比 (3%)'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          other: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 (0 个百分点)'] },
          tax_other: { label: '税费及其他' },
          ga: { label: '管理费用', notes: ['占收入 29%', '同比 (4 个百分点)'] },
          marketing_pos: { label: ['营销', '与销售点'], notes: ['占收入 12%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

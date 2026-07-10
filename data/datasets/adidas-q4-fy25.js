/* ====================================================================
 * Adidas - Q4 FY25 income statement (€B)
 * Reconstructed from input/processed/adidas-q4-fy25.png as a fixed
 * d3-sankey layout with whitelisted adidas logo and product-line raster
 * annotations extracted via input/icon-crop-specs/adidas-q4-fy25.json.
 *
 * Source-chart quirks mirrored here:
 * - Footwear/Apparel/Accessories & Gear and Revenue are solid black bars;
 *   incoming revenue bands are grey.
 * - Other €41M is a tiny positive add-in into the operating-profit bar.
 * - Published rounding: revenue segments sum to €6.0B vs the €6.1B hub,
 *   and G&A + Marketing & POS sum to €2.9B vs €3.0B operating expenses.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GREY_LINK = '#8a8a88';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9ace98';
  const RED = '#d60000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#df8181';
  const NOTE = '#666666';

  const calloutBox = `
    <path d="M849 1080 L880 1140 L818 1140 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="662" y="1140" width="394" height="139" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="859" y="1184" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.northAmerica}<tspan font-weight="500"> +5% Y/Y</tspan></text>
        <text x="859" y="1227" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.europe}<tspan font-weight="500"> +6% Y/Y</tspan></text>
        <text x="859" y="1270" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.china}<tspan font-weight="500"> +15% Y/Y</tspan></text>
      </g>
    </g>`;

  const annotationsEn = annotations({
    northAmerica: 'North America',
    europe: 'Europe',
    china: 'China',
  });

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="859" y="1184" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">北美<tspan font-weight="500"> 同比 +5%</tspan></text>
        <text x="859" y="1227" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">欧洲<tspan font-weight="500"> 同比 +6%</tspan></text>
        <text x="859" y="1270" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">中国<tspan font-weight="500"> 同比 +15%</tspan></text>
      </g>
    </g>`;

  const labelBlocks = (L) => ({
    footwear: {
      blocks: [
        {
          x: 387, top: 492, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.footwearYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 205, top: 698, anchor: 'middle', lines: [{ text: L.footwear, size: 40, weight: 800, color: BLACK }] },
      ],
    },
    apparel: {
      blocks: [
        {
          x: 387, top: 842, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.apparelYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 205, top: 989, anchor: 'middle', lines: [{ text: L.apparel, size: 40, weight: 800, color: BLACK }] },
      ],
    },
    accessories_gear: {
      blocks: [
        {
          x: 387, top: 1156, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.accessoriesYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 205, top: 1212, anchor: 'middle', lineGap: 8,
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
          x: 853, top: 620, anchor: 'middle', lineGap: 10,
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
          x: 1318, top: 426, anchor: 'middle', lineGap: 9,
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
          x: 1319, top: 1208, anchor: 'middle', lineGap: 9,
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
          x: 1675, top: 629, anchor: 'middle', lineGap: 8,
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
          x: 1785, top: 342, anchor: 'middle', lineGap: 9,
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
          x: 1788, top: 952, anchor: 'middle', lineGap: 9,
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
          x: 2432, top: 402, anchor: 'middle', lineGap: 9,
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
          x: 2428, top: 632, anchor: 'middle', lineGap: 9,
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
          x: 2428, top: 911, anchor: 'middle', lineGap: 8,
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
          x: 2428, top: 1151, anchor: 'middle', lineGap: 8,
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
    footwear: 'Footwear',
    footwearYoy: '(4%) Y/Y',
    apparel: 'Apparel',
    apparelYoy: '+12% Y/Y',
    accessories1: 'Accessories',
    accessories2: '& Gear',
    accessoriesYoy: '(0%) Y/Y',
    revenue: 'Revenue',
    revenueYoy: '+2% Y/Y',
    grossProfit: 'Gross profit',
    grossMargin: '51% margin',
    grossYoy: '+1pp Y/Y',
    costOfSales: 'Cost of sales',
    other: 'Other',
    operatingProfit: 'Operating profit',
    operatingMargin: '3% margin',
    operatingYoy: '+2pp Y/Y',
    operating1: 'Operating',
    operating2: 'expenses',
    netProfit: 'Net profit',
    netMargin: '1% margin',
    netYoy: '+2pp Y/Y',
    taxOther: 'Tax & other',
    ga: 'G&A',
    gaRev: '35% of revenue',
    gaYoy: '(2pp) Y/Y',
    marketing1: 'Marketing',
    marketing2: '& POS',
    marketingRev: '14% of revenue',
    marketingYoy: '+1pp Y/Y',
  });

  const labelsZh = labelBlocks({
    footwear: '鞋类',
    footwearYoy: '同比 (4%)',
    apparel: '服装',
    apparelYoy: '同比 +12%',
    accessories1: '配件',
    accessories2: '与装备',
    accessoriesYoy: '同比 (0%)',
    revenue: '收入',
    revenueYoy: '同比 +2%',
    grossProfit: '毛利润',
    grossMargin: '利润率 51%',
    grossYoy: '同比 +1 个百分点',
    costOfSales: '销售成本',
    other: '其他',
    operatingProfit: '营业利润',
    operatingMargin: '利润率 3%',
    operatingYoy: '同比 +2 个百分点',
    operating1: '运营',
    operating2: '费用',
    netProfit: '净利润',
    netMargin: '利润率 1%',
    netYoy: '同比 +2 个百分点',
    taxOther: '税费及其他',
    ga: '管理费用',
    gaRev: '占收入 35%',
    gaYoy: '同比 (2 个百分点)',
    marketing1: '营销',
    marketing2: '与销售点',
    marketingRev: '占收入 14%',
    marketingYoy: '同比 +1 个百分点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adidas-q4-fy25',
    name: 'Adidas · Q4 FY25',
    company: 'Adidas',
    meta: {
      company: 'Adidas',
      title: 'Adidas Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/adidas-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 168,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2158,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'adidas-company-logo',
        href: 'data/assets/raster-annotations/adidas/company-logo.png',
        x: 642, y: 254, width: 424, height: 312,
      },
      {
        key: 'adidas-business-footwear',
        href: 'data/assets/raster-annotations/adidas/business-footwear.png',
        x: 114, y: 492, width: 200, height: 170,
      },
      {
        key: 'adidas-business-apparel',
        href: 'data/assets/raster-annotations/adidas/business-apparel.png',
        x: 112, y: 808, width: 202, height: 166,
      },
      {
        key: 'adidas-business-accessories-gear',
        href: 'data/assets/raster-annotations/adidas/business-accessories-gear.png',
        x: 116, y: 1070, width: 214, height: 138,
      },
    ],

    layout: {
      scale: 50.4,
      nodes: {
        footwear: { x: 350, y: 584, width: 73, height: 164 },
        apparel: { x: 350, y: 933, width: 73, height: 121 },
        accessories_gear: { x: 350, y: 1246, width: 73, height: 23 },
        revenue: { x: 817, y: 764, width: 73, height: 308 },
        gross_profit: { x: 1282, y: 607, width: 73, height: 158 },
        cost_of_sales: { x: 1282, y: 1030, width: 73, height: 150 },
        other: { x: 1637, y: 604, width: 75, height: 2 },
        operating_profit: { x: 1749, y: 526, width: 73, height: 10 },
        operating_expenses: { x: 1751, y: 778, width: 73, height: 150 },
        net_profit: { x: 2219, y: 450, width: 73, height: 5 },
        tax_other: { x: 2219, y: 662, width: 73, height: 5 },
        ga: { x: 2219, y: 921, width: 73, height: 110 },
        marketing_pos: { x: 2219, y: 1196, width: 73, height: 40 },
      },
      labels: labelsEn,
    },

    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 3.2, valueText: '€3.2B', notes: ['(4%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 2.4, valueText: '€2.4B', notes: ['+12% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'accessories_gear', col: 0, order: 2, type: 'source', label: ['Accessories', '& Gear'], value: 0.4, valueText: '€0.4B', notes: ['(0%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.1, valueText: '€6.1B', notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.1, valueText: '€3.1B', notes: ['51% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 3.0, valueText: '(€3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.041, valueText: '€41M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.2, valueText: '€0.2B', notes: ['3% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.0, valueText: '(€3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.1, valueText: '€0.1B', notes: ['1% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_other', col: 5, order: 1, type: 'cost', label: 'Tax & other', value: 0.1, valueText: '(€0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 2.1, valueText: '(€2.1B)', notes: ['35% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_pos', col: 5, order: 3, type: 'cost', label: ['Marketing', '& POS'], value: 0.8, valueText: '(€0.8B)', notes: ['14% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      /* Product categories sum to €6.0B vs the €6.1B hub; the bars fill
       * the revenue hub continuously to mirror source-chart rounding. */
      { source: 'footwear', target: 'revenue', value: 3.2, width: 164, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 2.4, width: 121, sourceOrder: 0, targetOrder: 1 },
      { source: 'accessories_gear', target: 'revenue', value: 0.4, width: 23, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 3.1, width: 158, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.0, width: 150, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 0.159, width: 8, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.0, width: 150, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'operating_profit', value: 0.041, width: 2, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },

      { source: 'operating_profit', target: 'net_profit', value: 0.1, width: 5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_other', value: 0.1, width: 5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'operating_expenses', target: 'ga', value: 2.1, width: 110, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing_pos', value: 0.8, width: 40, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'Adidas · 2025 财年第四季度',
        meta: {
          title: 'Adidas 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1850,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (4%)'] },
          apparel: { label: '服装', notes: ['同比 +12%'] },
          accessories_gear: { label: ['配件', '与装备'], notes: ['同比 (0%)'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          other: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 1%', '同比 +2 个百分点'] },
          tax_other: { label: '税费及其他' },
          ga: { label: '管理费用', notes: ['占收入 35%', '同比 (2 个百分点)'] },
          marketing_pos: { label: ['营销', '与销售点'], notes: ['占收入 14%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: labelsZh,
        },
      },
    },
  });
})();

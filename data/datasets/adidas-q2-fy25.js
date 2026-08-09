/* ====================================================================
 * Adidas - Q2 FY25 income statement (€B)
 * Reconstructed from input/processed/adidas-q2-fy25.png as a fixed
 * d3-sankey layout with whitelisted adidas logo and product-line raster
 * annotations extracted via input/icon-crop-specs/adidas-q2-fy25.json.
 *
 * Source-chart quirks mirrored here:
 * - Footwear/Apparel/Accessories & Gear and Revenue are solid black bars;
 *   incoming revenue bands are grey.
 * - Other €19M is a 71×2px positive add-in into the operating-profit bar.
 * - Published rounding: revenue segments sum to €5.9B vs the €6.0B hub,
 *   and G&A + Marketing & POS sum to €2.6B vs €2.5B operating expenses.
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
    <path d="M854 1075 L885 1135 L823 1135 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="667" y="1135" width="397" height="143" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;

  const annotations = (L) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g>
        ${calloutBox}
        <text x="865" y="1179" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.northAmerica}<tspan font-weight="500"> +3% Y/Y</tspan></text>
        <text x="865" y="1222" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.europe}<tspan font-weight="500"> +4% Y/Y</tspan></text>
        <text x="865" y="1265" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">${L.china}<tspan font-weight="500"> (3%) Y/Y</tspan></text>
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
        <text x="865" y="1184" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">北美<tspan font-weight="500"> 同比 +3%</tspan></text>
        <text x="865" y="1227" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">欧洲<tspan font-weight="500"> 同比 +4%</tspan></text>
        <text x="865" y="1270" text-anchor="middle" font-size="31" font-weight="800" fill="#222222">中国<tspan font-weight="500"> 同比 (3%)</tspan></text>
      </g>
    </g>`;

  const labelBlocks = (L) => ({
    footwear: {
      blocks: [
        {
          x: 397, top: 433, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.footwearYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 219, top: 664, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: L.footwear, size: 40, weight: 800, color: BLACK }] },
      ],
    },
    apparel: {
      blocks: [
        {
          x: 391, top: 831, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.apparelYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 218, top: 985, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: L.apparel, size: 40, weight: 800, color: BLACK }] },
      ],
    },
    accessories_gear: {
      blocks: [
        {
          x: 388, top: 1152, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 40, weight: 400 },
            { text: L.accessoriesYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 219, top: 1216, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 8,
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
          x: 854, top: 609, anchor: 'middle', lineGap: 10,
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
          x: 1317, top: 481, anchor: 'middle', lineGap: 9,
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
          x: 1319, top: 1189, anchor: 'middle', lineGap: 9,
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
          x: 1672, top: 658, anchor: 'middle', lineGap: 8,
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
          x: 1789, top: 384, anchor: 'middle', lineGap: 9,
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
          x: 1792, top: 949, anchor: 'middle', lineGap: 9,
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
          x: 2429, top: 399, anchor: 'middle', lineGap: 9,
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
          x: 2428, top: 641, anchor: 'middle', lineGap: 9,
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
          x: 2430, top: 944, anchor: 'middle', lineGap: 8,
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
          x: 2433, top: 1162, anchor: 'middle', lineGap: 8,
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
    footwearYoy: '(3%) Y/Y',
    apparel: 'Apparel',
    apparelYoy: '+11% Y/Y',
    accessories1: 'Accessories',
    accessories2: '& Gear',
    accessoriesYoy: '+3% Y/Y',
    revenue: 'Revenue',
    revenueYoy: '+2% Y/Y',
    grossProfit: 'Gross profit',
    grossMargin: '52% margin',
    grossYoy: '+1pp Y/Y',
    costOfSales: 'Cost of sales',
    other: 'Other',
    operatingProfit: 'Operating profit',
    operatingMargin: '9% margin',
    operatingYoy: '+3pp Y/Y',
    operating1: 'Operating',
    operating2: 'expenses',
    netProfit: 'Net profit',
    netMargin: '6% margin',
    netYoy: '+3pp Y/Y',
    taxOther: 'Tax & other',
    ga: 'G&A',
    gaRev: '31% of revenue',
    gaYoy: '(2pp) Y/Y',
    marketing1: 'Marketing',
    marketing2: '& POS',
    marketingRev: '12% of revenue',
    marketingYoy: '(0pp) Y/Y',
  });

  const labelsZh = labelBlocks({
    footwear: '鞋类',
    footwearYoy: '同比 (3%)',
    apparel: '服装',
    apparelYoy: '同比 +11%',
    accessories1: '配件',
    accessories2: '与装备',
    accessoriesYoy: '同比 +3%',
    revenue: '收入',
    revenueYoy: '同比 +2%',
    grossProfit: '毛利润',
    grossMargin: '利润率 52%',
    grossYoy: '同比 +1 个百分点',
    costOfSales: '销售成本',
    other: '其他',
    operatingProfit: '营业利润',
    operatingMargin: '利润率 9%',
    operatingYoy: '同比 +3 个百分点',
    operating1: '运营',
    operating2: '费用',
    netProfit: '净利润',
    netMargin: '利润率 6%',
    netYoy: '同比 +3 个百分点',
    taxOther: '税费及其他',
    ga: '管理费用',
    gaRev: '占收入 31%',
    gaYoy: '同比 (2 个百分点)',
    marketing1: '营销',
    marketing2: '与销售点',
    marketingRev: '占收入 12%',
    marketingYoy: '同比 (0 个百分点)',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adidas-q2-fy25',
    name: 'Adidas · Q2 FY25',
    company: 'Adidas',
    meta: {
      company: 'Adidas',
      title: 'Adidas Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/adidas-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 168,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2158,
      hidePeriodStamp: true,
    },
    render: {
      interfaceAudit: { mode: 'error', fullFaceIds: ['revenue:left'] },
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
        x: 651, y: 225, width: 424, height: 312,
      },
      {
        key: 'adidas-business-footwear',
        href: 'data/assets/raster-annotations/adidas/business-footwear.png',
        x: 128, y: 459, width: 200, height: 170,
      },
      {
        key: 'adidas-business-apparel',
        href: 'data/assets/raster-annotations/adidas/business-apparel.png',
        x: 126, y: 804, width: 202, height: 166,
      },
      {
        key: 'adidas-business-accessories-gear',
        href: 'data/assets/raster-annotations/adidas/business-accessories-gear.png',
        x: 130, y: 1070, width: 214, height: 138,
      },
    ],

    layout: {
      scale: 50.4,
      nodes: {
        footwear: { x: 351, y: 527, width: 71, height: 174 },
        apparel: { x: 351, y: 923, width: 71, height: 100 },
        accessories_gear: { x: 351, y: 1244, width: 71, height: 21 },
        revenue: { x: 818, y: 752, width: 70, height: 298 },
        gross_profit: { x: 1285, y: 664, width: 71, height: 153 },
        cost_of_sales: { x: 1285, y: 1021, width: 71, height: 143 },
        other: { x: 1636, y: 642, width: 71, height: 2 },
        operating_profit: { x: 1753, y: 568, width: 70, height: 25 },
        operating_expenses: { x: 1753, y: 799, width: 70, height: 127 },
        net_profit: { x: 2219, y: 463, width: 71, height: 18 },
        tax_other: { x: 2219, y: 669, width: 71, height: 8 },
        ga: { x: 2219, y: 958, width: 71, height: 90 },
        marketing_pos: { x: 2219, y: 1195, width: 71, height: 34 },
      },
      labels: labelsEn,
    },

    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 3.5, valueText: '€3.5B', notes: ['(3%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 2.0, valueText: '€2.0B', notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'accessories_gear', col: 0, order: 2, type: 'source', label: ['Accessories', '& Gear'], value: 0.4, valueText: '€0.4B', notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.0, valueText: '€6.0B', notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.1, valueText: '€3.1B', notes: ['52% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 2.9, valueText: '(€2.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.019, valueText: '€19M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.5, valueText: '€0.5B', notes: ['9% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.5, valueText: '(€2.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, valueText: '€0.4B', notes: ['6% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_other', col: 5, order: 1, type: 'cost', label: 'Tax & other', value: 0.2, valueText: '(€0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 1.9, valueText: '(€1.9B)', notes: ['31% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_pos', col: 5, order: 3, type: 'cost', label: ['Marketing', '& POS'], value: 0.7, valueText: '(€0.7B)', notes: ['12% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'footwear', target: 'revenue', value: 3.5, sourceWidth: 174, targetWidth: 175, y0: 614, y1: 839.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 2.0, sourceWidth: 100, targetWidth: 101, y0: 973, y1: 977.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'accessories_gear', target: 'revenue', value: 0.4, sourceWidth: 21, targetWidth: 22, y0: 1254.5, y1: 1039, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.1, sourceWidth: 154, targetWidth: 153, y0: 829, y1: 740.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2.9, sourceWidth: 144, targetWidth: 143, y0: 978, y1: 1092.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.481, sourceWidth: 25, targetWidth: 23, y0: 676.5, y1: 579.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.5, sourceWidth: 127, targetWidth: 127, y0: 753.5, y1: 862.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'operating_profit', value: 0.019, sourceWidth: 2, targetWidth: 2, y0: 643, y1: 592, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 18, targetWidth: 17, y0: 577, y1: 472.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_other', value: 0.2, sourceWidth: 7, targetWidth: 8, y0: 589.5, y1: 673, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.9, sourceWidth: 91, targetWidth: 90, y0: 844.5, y1: 1003, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing_pos', value: 0.7, sourceWidth: 35, targetWidth: 34, y0: 908.5, y1: 1212, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'Adidas · 2025 财年第二季度',
        meta: {
          title: 'Adidas 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
          titleTextLength: 1850,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          footwear: { label: '鞋类', notes: ['同比 (3%)'] },
          apparel: { label: '服装', notes: ['同比 +11%'] },
          accessories_gear: { label: ['配件', '与装备'], notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          other: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +3 个百分点'] },
          tax_other: { label: '税费及其他' },
          ga: { label: '管理费用', notes: ['占收入 31%', '同比 (2 个百分点)'] },
          marketing_pos: { label: ['营销', '与销售点'], notes: ['占收入 12%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: labelsZh,
        },
      },
    },
  });
})();

/* ====================================================================
 * Ferrari - Q2 FY26 income statement (€B)
 * Reconstructed from input/processing/ferrari-q2-fy26.png as a fixed
 * d3-sankey layout. The recurring Ferrari visual assets are the validated
 * runtime rasters first introduced with ferrari-q4-fy25.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
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

  const labelBlocks = (L) => ({
    cars_and_spare_parts: {
      blocks: [
        {
          x: 524, top: 449, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.carsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 328, top: 691, anchor: 'middle', lineGap: 8,
          semanticRole: 'reference-offset-side-label',
          lines: [
            { text: L.cars1, size: 40, weight: 800, color: BLACK },
            { text: L.cars2, size: 40, weight: 800, color: BLACK },
          ],
        },
      ],
    },
    sponsorships_commercial_brands: {
      blocks: [
        {
          x: 520, top: 930, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.sponsorshipsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 238, top: 984, anchor: 'middle', lineGap: 8,
          semanticRole: 'reference-offset-side-label',
          lines: [
            { text: L.sponsorships1, size: 40, weight: 800, color: BLACK },
            { text: L.sponsorships2, size: 40, weight: 800, color: BLACK },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 524, top: 1110, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.otherYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 383, top: 1191, anchor: 'middle',
          semanticRole: 'reference-offset-side-label',
          lines: [{ text: L.other, size: 40, weight: 800, color: BLACK }],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 989, top: 575, anchor: 'middle', lineGap: 10,
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
          x: 1456, top: 431, anchor: 'middle', lineGap: 9,
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
          x: 1458, top: 1238, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.costOfSales, size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 36, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1924, top: 309, anchor: 'middle', lineGap: 9,
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
          x: 1924, top: 953, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.operating1, size: 36, weight: 800, color: RED_LABEL },
            { text: L.operating2, size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 34, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    investments: { blocks: [] },
    net_profit: {
      blocks: [
        {
          x: 2551, top: 374, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.netProfit, size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: L.netMargin, size: 29, weight: 400, color: NOTE },
            { text: L.netYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2550, top: 669, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.tax, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    finance: {
      blocks: [
        {
          x: 2551, top: 808, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.finance, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: 2545, top: 960, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.rnd, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: L.rndRevenue, size: 29, weight: 400, color: NOTE },
            { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sga: {
      blocks: [
        {
          x: 2545, top: 1138, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.sga, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: L.sgaRevenue, size: 29, weight: 400, color: NOTE },
            { text: L.sgaYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_opex: {
      blocks: [
        {
          x: 2550, top: 1310, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.otherOpex, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
  });

  const labelsEn = labelBlocks({
    cars1: 'Cars and', cars2: 'spare parts', carsYoy: '+8% Y/Y',
    sponsorships1: 'Sponsorships,', sponsorships2: 'commercial & brands', sponsorshipsYoy: '+2% Y/Y',
    other: 'Other', otherYoy: '+33% Y/Y',
    revenue: 'Revenue', revenueYoy: '+8% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '53% margin', grossYoy: '(0pp) Y/Y',
    costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '31% margin', operatingYoy: '+0pp Y/Y',
    operating1: 'Operating', operating2: 'expenses',
    netProfit: 'Net profit', netMargin: '24% margin', netYoy: '+0pp Y/Y',
    tax: 'Tax', finance: 'Finance',
    rnd: 'R&D', rndRevenue: '11% of revenue', rndYoy: '(1pp) Y/Y',
    sga: 'SG&A', sgaRevenue: '10% of revenue', sgaYoy: '+1pp Y/Y',
    otherOpex: 'Other',
  });

  const labelsZh = labelBlocks({
    cars1: '汽车及', cars2: '零部件', carsYoy: '同比 +8%',
    sponsorships1: '赞助、商业', sponsorships2: '与品牌', sponsorshipsYoy: '同比 +2%',
    other: '其他', otherYoy: '同比 +33%',
    revenue: '收入', revenueYoy: '同比 +8%',
    grossProfit: '毛利润', grossMargin: '利润率 53%', grossYoy: '同比 0pp',
    costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 31%', operatingYoy: '同比 +0pp',
    operating1: '营业', operating2: '费用',
    netProfit: '净利润', netMargin: '利润率 24%', netYoy: '同比 +0pp',
    tax: '税费', finance: '财务费用',
    rnd: '研发', rndRevenue: '占收入 11%', rndYoy: '同比 -1pp',
    sga: '销售管理费用', sgaRevenue: '占收入 10%', sgaYoy: '同比 +1pp',
    otherOpex: '其他',
  });

  const investmentsAnnotation = (label) => `
    <g class="sankey-interactive-annotation" data-node="investments" font-family="Noto Sans,Arial,sans-serif">
      <rect x="1657" y="930" width="180" height="150" fill="#ffffff" fill-opacity="0"/>
      <!-- The source guide begins at the operating-expenses bar's right/bottom socket. -->
      <path d="M1888 930 C1816 930 1780 979 1714 979 H1653" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <path d="M1888 930 C1816 930 1780 979 1714 979 H1653" fill="none" stroke="#ffffff" stroke-opacity="0" stroke-width="16"/>
      <text x="1715" y="1015" text-anchor="middle" font-size="31" font-weight="700" fill="${GREEN_LABEL}">${label}</text>
      <text x="1715" y="1056" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">€4M</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ferrari-q2-fy26',
    name: 'Ferrari · Q2 FY26',
    company: 'Ferrari',
    meta: {
      company: 'Ferrari',
      title: 'Ferrari Q2 FY26 Income Statement',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ferrari-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1335,
      titleY: 200,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2175,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
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
      linkTint: {
        source: GREY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: investmentsAnnotation('Investments'),
    rasterAnnotations: [
      { key: 'ferrari-company-crest-and-wordmark', href: 'data/assets/raster-annotations/ferrari/company-crest-and-wordmark-q4-fy25.png', x: 812, y: 240, width: 342, height: 340 },
      { key: 'ferrari-cars-and-spare-parts', href: 'data/assets/raster-annotations/ferrari/cars-and-spare-parts-q4-fy25.png', x: 190, y: 573, width: 252, height: 96 },
      { key: 'ferrari-sponsorships-commercial-brands', href: 'data/assets/raster-annotations/ferrari/sponsorships-commercial-brands-q4-fy25.png', x: 174, y: 865, width: 246, height: 92 },
      { key: 'ferrari-other-engine', href: 'data/assets/raster-annotations/ferrari/other-engine-q4-fy25.png', x: 94, y: 1132, width: 166, height: 144 },
    ],
    layout: {
      scale: 160,
      nodes: {
        cars_and_spare_parts: { x: 487, y: 544, width: 71, height: 299 },
        sponsorships_commercial_brands: { x: 487, y: 1020, width: 71, height: 37 },
        other: { x: 487, y: 1206, width: 71, height: 16 },
        revenue: { x: 954, y: 723, width: 71, height: 355 },
        gross_profit: { x: 1420, y: 618, width: 73, height: 186 },
        cost_of_sales: { x: 1420, y: 1045, width: 73, height: 168 },
        operating_profit: { x: 1888, y: 496, width: 72, height: 109 },
        operating_expenses: { x: 1887, y: 855, width: 74, height: 75 },
        net_profit: { x: 2355, y: 390, width: 72, height: 83 },
        tax: { x: 2354, y: 689, width: 73, height: 22 },
        finance: { x: 2354, y: 839, width: 73, height: 1 },
        rnd: { x: 2354, y: 970, width: 73, height: 38 },
        sga: { x: 2354, y: 1153, width: 73, height: 33 },
        other_opex: { x: 2354, y: 1337, width: 73, height: 3 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      {
        id: 'investments',
        representation: 'annotation',
        label: 'Investments',
        value: 0.004,
        valueText: '€4M',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'cars_and_spare_parts', col: 0, order: 0, type: 'source', label: ['Cars and', 'spare parts'], value: 1.6, valueText: '€1.6B', notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'sponsorships_commercial_brands', col: 0, order: 1, type: 'source', label: ['Sponsorships,', 'commercial & brands'], value: 0.2, valueText: '€0.2B', notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'other', col: 0, order: 2, type: 'source', label: 'Other', value: 0.1, valueText: '€0.1B', notes: ['+33% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.9, valueText: '€1.9B', notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.0, valueText: '€1.0B', notes: ['53% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 0.9, valueText: '(€0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, valueText: '€0.6B', notes: ['31% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.4, valueText: '(€0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.5, valueText: '€0.5B', notes: ['24% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '(€0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'finance', col: 4, order: 2, type: 'cost', label: 'Finance', value: 0.004, valueText: '(€4M)', color: '#d64949', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.2, valueText: '(€0.2B)', notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.2, valueText: '(€0.2B)', notes: ['10% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.012, valueText: '(€12M)', color: '#d64949', labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'cars_and_spare_parts', target: 'revenue', value: 1.6, sourceWidth: 299, targetWidth: 299, y0: 693.5, y1: 872.5, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'sponsorships_commercial_brands', target: 'revenue', value: 0.2, sourceWidth: 37, targetWidth: 37, y0: 1038.5, y1: 1040.5, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'other', target: 'revenue', value: 0.1, sourceWidth: 16, targetWidth: 19, y0: 1214, y1: 1068.5, sourceOrder: 0, targetOrder: 2, linkTint: GREY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.0, sourceWidth: 186, targetWidth: 186, y0: 816, y1: 711, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 0.9, sourceWidth: 168, targetWidth: 168, y0: 994, y1: 1129, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, sourceWidth: 111, targetWidth: 109, y0: 673.5, y1: 550.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.4, sourceWidth: 75, targetWidth: 75, y0: 766.5, y1: 892.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 83, targetWidth: 83, y0: 537.5, y1: 431.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 22, targetWidth: 22, y0: 590, y1: 700, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'finance', value: 0.004, sourceWidth: 4, targetWidth: 1, y0: 603, y1: 839.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.2, sourceWidth: 38, targetWidth: 38, y0: 874, y1: 989, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.2, sourceWidth: 33, targetWidth: 33, y0: 909.5, y1: 1169.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.012, sourceWidth: 3, targetWidth: 3, y0: 928.5, y1: 1338.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '法拉利 · 2026 财年第二季度',
        meta: {
          title: '法拉利 2026 财年第二季度利润表',
          titleTextLength: 1760,
        },
        nonNodeMetrics: {
          investments: { label: '投资收益' },
        },
        nodes: {
          cars_and_spare_parts: { label: ['汽车及', '零部件'], notes: ['同比 +8%'] },
          sponsorships_commercial_brands: { label: ['赞助、商业', '与品牌'], notes: ['同比 +2%'] },
          other: { label: '其他', notes: ['同比 +33%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比（0 个百分点）'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +0 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 24%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          finance: { label: '财务费用' },
          rnd: { label: '研发', notes: ['占收入 11%', '同比（1 个百分点）'] },
          sga: { label: '销售管理费用', notes: ['占收入 10%', '同比 +1 个百分点'] },
          other_opex: { label: '其他' },
        },
        layout: { labels: labelsZh },
        annotationsSvg: investmentsAnnotation('投资'),
      },
    },
  });
})();

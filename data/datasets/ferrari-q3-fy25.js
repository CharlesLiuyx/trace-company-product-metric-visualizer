/* ====================================================================
 * Ferrari - Q3 FY25 income statement (€B)
 * Reconstructed from input/processed/ferrari-q3-fy25.png as a fixed
 * d3-sankey layout with validated Ferrari and business-source raster assets.
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

  const carsCaption = (first, second) => `
    <g class="sankey-interactive-annotation" data-node="cars_and_spare_parts"
       font-family="Noto Sans,Arial,sans-serif" text-anchor="middle">
      <text x="331" y="752" font-size="40" font-weight="800" fill="${BLACK}">${first}</text>
      <text x="331" y="800" font-size="40" font-weight="800" fill="${BLACK}">${second}</text>
    </g>`;

  const labelBlocks = (L) => ({
    cars_and_spare_parts: {
      blocks: [
        {
          x: 527, top: 490, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.carsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sponsorships_commercial_brands: {
      blocks: [
        {
          x: 520, top: 898, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.sponsorshipsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 238, top: 968, anchor: 'middle', lineGap: 8,
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
          x: 527, top: 1089, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.otherYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 369, top: 1171, anchor: 'middle', lines: [{ text: L.other, size: 40, weight: 800, color: BLACK }] },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 992, top: 605, anchor: 'middle', lineGap: 10,
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
          x: 1459, top: 439, anchor: 'middle', lineGap: 9,
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
          x: 1459, top: 1181, anchor: 'middle', lineGap: 8,
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
          x: 1927, top: 346, anchor: 'middle', lineGap: 9,
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
          x: 1927, top: 912, anchor: 'middle', lineGap: 8,
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
          x: 2541, top: 417, anchor: 'middle', lineGap: 9,
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
          x: 2550, top: 684, anchor: 'middle', lineGap: 8,
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
          x: 2541, top: 988, anchor: 'middle', lineGap: 8,
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
          x: 2550, top: 1186, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.sga, size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: L.sgaRevenue, size: 29, weight: 400, color: NOTE },
            { text: L.sgaYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  });

  const labelsEn = labelBlocks({
    cars1: 'Cars and', cars2: 'spare parts', carsYoy: '+6% Y/Y',
    sponsorships1: 'Sponsorships,', sponsorships2: 'commercial & brands', sponsorshipsYoy: '+21% Y/Y',
    other: 'Other', otherYoy: '+9% Y/Y',
    revenue: 'Revenue', revenueYoy: '+7% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '50% margin', grossYoy: '+0pp Y/Y',
    costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '28% margin', operatingYoy: '+0pp Y/Y',
    operating1: 'Operating', operating2: 'expenses',
    netProfit: 'Net profit', netMargin: '22% margin', netYoy: '(1pp) Y/Y',
    tax: 'Tax', finance: 'Finance',
    rnd: 'R&D', rndRevenue: '13% of revenue', rndYoy: '(0pp) Y/Y',
    sga: 'SG&A', sgaRevenue: '9% of revenue', sgaYoy: '+1pp Y/Y',
  });

  const labelsZh = labelBlocks({
    cars1: '汽车及', cars2: '零部件', carsYoy: '同比 +6%',
    sponsorships1: '赞助、商业', sponsorships2: '与品牌', sponsorshipsYoy: '同比 +21%',
    other: '其他', otherYoy: '同比 +9%',
    revenue: '收入', revenueYoy: '同比 +7%',
    grossProfit: '毛利润', grossMargin: '利润率 50%', grossYoy: '同比 +0 个百分点',
    costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 28%', operatingYoy: '同比 +0 个百分点',
    operating1: '营业', operating2: '费用',
    netProfit: '净利润', netMargin: '利润率 22%', netYoy: '同比 (1 个百分点)',
    tax: '税费', finance: '财务费用',
    rnd: '研发', rndRevenue: '占收入 13%', rndYoy: '同比 (0 个百分点)',
    sga: '销售管理费用', sgaRevenue: '占收入 9%', sgaYoy: '同比 +1 个百分点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ferrari-q3-fy25',
    name: 'Ferrari · Q3 FY25',
    company: 'Ferrari',
    meta: {
      company: 'Ferrari',
      title: 'Ferrari Q3 FY25 Income Statement',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ferrari-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1335,
      titleY: 200,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2175,
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
      linkTint: {
        source: GREY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'ferrari-company-crest-and-wordmark', href: 'data/assets/raster-annotations/ferrari/company-crest-and-wordmark-q4-fy25.png', x: 812, y: 240, width: 342, height: 340 },
      { key: 'ferrari-cars-and-spare-parts', href: 'data/assets/raster-annotations/ferrari/cars-and-spare-parts-q4-fy25.png', x: 190, y: 593, width: 252, height: 96 },
      { key: 'ferrari-sponsorships-commercial-brands', href: 'data/assets/raster-annotations/ferrari/sponsorships-commercial-brands-q4-fy25.png', x: 174, y: 868, width: 246, height: 92 },
      { key: 'ferrari-other-engine', href: 'data/assets/raster-annotations/ferrari/other-engine-q4-fy25.png', x: 94, y: 1100, width: 166, height: 144 },
    ],
    annotationsSvg: carsCaption('Cars and', 'spare parts'),
    layout: {
      scale: 160,
      nodes: {
        cars_and_spare_parts: { x: 490, y: 580, width: 71, height: 247 },
        sponsorships_commercial_brands: { x: 490, y: 999, width: 71, height: 34 },
        other: { x: 490, y: 1188, width: 71, height: 11 },
        revenue: { x: 957, y: 745, width: 70, height: 296 },
        gross_profit: { x: 1424, y: 620, width: 71, height: 146 },
        cost_of_sales: { x: 1424, y: 1010, width: 71, height: 148 },
        operating_profit: { x: 1892, y: 526, width: 70, height: 83 },
        operating_expenses: { x: 1892, y: 826, width: 70, height: 63 },
        net_profit: { x: 2358, y: 435, width: 71, height: 62 },
        tax: { x: 2358, y: 706, width: 71, height: 16 },
        finance: { x: 2358, y: 843, width: 71, height: 1 },
        rnd: { x: 2358, y: 999, width: 71, height: 35 },
        sga: { x: 2358, y: 1213, width: 71, height: 24 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'cars_and_spare_parts', col: 0, order: 0, type: 'source', label: ['Cars and', 'spare parts'], value: 1.5, valueText: '€1.5B', notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'sponsorships_commercial_brands', col: 0, order: 1, type: 'source', label: ['Sponsorships,', 'commercial & brands'], value: 0.2, valueText: '€0.2B', notes: ['+21% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'other', col: 0, order: 2, type: 'source', label: 'Other', value: 0.1, valueText: '€0.1B', notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.8, valueText: '€1.8B', notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.9, valueText: '€0.9B', notes: ['50% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 0.9, valueText: '(€0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.5, valueText: '€0.5B', notes: ['28% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.4, valueText: '(€0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.4, valueText: '€0.4B', notes: ['22% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '(€0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'finance', col: 4, order: 2, type: 'cost', label: 'Finance', value: 0.01, valueText: '(€10M)', color: '#d64747', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.2, valueText: '(€0.2B)', notes: ['13% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.2, valueText: '(€0.2B)', notes: ['9% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'cars_and_spare_parts', target: 'revenue', value: 1.5, sourceWidth: 247, targetWidth: 248, y0: 703.5, y1: 869, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'sponsorships_commercial_brands', target: 'revenue', value: 0.2, sourceWidth: 34, targetWidth: 37, y0: 1016, y1: 1011.5, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'other', target: 'revenue', value: 0.1, sourceWidth: 11, targetWidth: 11, y0: 1193.5, y1: 1035.5, sourceOrder: 0, targetOrder: 2, linkTint: GREY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.9, sourceWidth: 148, targetWidth: 146, y0: 819, y1: 693, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 0.9, sourceWidth: 148, targetWidth: 148, y0: 967, y1: 1084, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.5, sourceWidth: 83, targetWidth: 83, y0: 661.5, y1: 567.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.4, sourceWidth: 63, targetWidth: 63, y0: 734.5, y1: 857.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 63, targetWidth: 62, y0: 557.5, y1: 466, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 18, targetWidth: 16, y0: 598, y1: 714, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'finance', value: 0.01, sourceWidth: 2, targetWidth: 1, y0: 608, y1: 843.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.2, sourceWidth: 35, targetWidth: 35, y0: 843.5, y1: 1016.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.2, sourceWidth: 28, targetWidth: 24, y0: 875, y1: 1225, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '法拉利 · 2025 财年第三季度',
        meta: {
          title: '法拉利 2025 财年第三季度利润表',
          titleTextLength: 1760,
        },
        nodes: {
          cars_and_spare_parts: { label: ['汽车及', '零部件'], notes: ['同比 +6%'] },
          sponsorships_commercial_brands: { label: ['赞助、商业', '与品牌'], notes: ['同比 +21%'] },
          other: { label: '其他', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 50%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 +0 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          finance: { label: '财务费用' },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 (0 个百分点)'] },
          sga: { label: '销售管理费用', notes: ['占收入 9%', '同比 +1 个百分点'] },
        },
        annotationsSvg: carsCaption('汽车及', '零部件'),
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* ====================================================================
 * Ferrari - Q1 FY26 income statement (€B)
 * Reconstructed from input/processed/ferrari-q1-fy26.png as a fixed
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
          x: 527, top: 470, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.carsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 331, top: 693, anchor: 'middle', lineGap: 8,
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
          x: 527, top: 909, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.sponsorshipsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 270, top: 966, anchor: 'middle', lineGap: 8,
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
          x: 527, top: 1131, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: L.otherYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 369, top: 1206, anchor: 'middle', lines: [{ text: L.other, size: 40, weight: 800, color: BLACK }] },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 992, top: 594, anchor: 'middle', lineGap: 10,
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
          x: 1459, top: 415, anchor: 'middle', lineGap: 9,
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
          x: 1459, top: 1188, anchor: 'middle', lineGap: 8,
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
          x: 1927, top: 319, anchor: 'middle', lineGap: 9,
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
          x: 1927, top: 914, anchor: 'middle', lineGap: 8,
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
          x: 2541, top: 351, anchor: 'middle', lineGap: 9,
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
          x: 2541, top: 638, anchor: 'middle', lineGap: 8,
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
          x: 2541, top: 755, anchor: 'middle', lineGap: 8,
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
          x: 2541, top: 939, anchor: 'middle', lineGap: 8,
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
          x: 2541, top: 1132, anchor: 'middle', lineGap: 8,
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
    cars1: 'Cars and', cars2: 'spare parts', carsYoy: '+1% Y/Y',
    sponsorships1: 'Sponsorships,', sponsorships2: 'commercial & brands', sponsorshipsYoy: '+14% Y/Y',
    other: 'Other', otherYoy: '+16% Y/Y',
    revenue: 'Revenue', revenueYoy: '+3% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '52% margin', grossYoy: '(0pp) Y/Y',
    costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '30% margin', operatingYoy: '(1pp) Y/Y',
    operating1: 'Operating', operating2: 'expenses',
    netProfit: 'Net profit', netMargin: '22% margin', netYoy: '(1pp) Y/Y',
    tax: 'Tax', finance: 'Finance',
    rnd: 'R&D', rndRevenue: '13% of revenue', rndYoy: '+0pp Y/Y',
    sga: 'SG&A', sgaRevenue: '9% of revenue', sgaYoy: '+0pp Y/Y',
  });

  const labelsZh = labelBlocks({
    cars1: '汽车及', cars2: '零部件', carsYoy: '同比 +1%',
    sponsorships1: '赞助、商业', sponsorships2: '与品牌', sponsorshipsYoy: '同比 +14%',
    other: '其他', otherYoy: '同比 +16%',
    revenue: '收入', revenueYoy: '同比 +3%',
    grossProfit: '毛利润', grossMargin: '利润率 52%', grossYoy: '同比 0pp',
    costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 30%', operatingYoy: '同比 -1pp',
    operating1: '营业', operating2: '费用',
    netProfit: '净利润', netMargin: '利润率 22%', netYoy: '同比 -1pp',
    tax: '税费', finance: '财务费用',
    rnd: '研发', rndRevenue: '占收入 13%', rndYoy: '同比 +0pp',
    sga: '销售管理费用', sgaRevenue: '占收入 9%', sgaYoy: '同比 +0pp',
  });

  const investmentsAnnotation = (label) => `
    <g class="sankey-interactive-annotation" data-node="investments" font-family="Noto Sans,Arial,sans-serif">
      <rect x="1660" y="905" width="170" height="150" fill="#ffffff" fill-opacity="0"/>
      <!-- The source guide begins at the operating-expenses bar's right/bottom socket. -->
      <path d="M1962 887 C1888 887 1805 932 1738 932 H1676" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <path d="M1962 887 C1888 887 1805 932 1738 932 H1676" fill="none" stroke="#ffffff" stroke-opacity="0" stroke-width="16"/>
      <text x="1718" y="970" text-anchor="middle" font-size="31" font-weight="700" fill="${GREEN_LABEL}">${label}</text>
      <text x="1718" y="1011" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">€3M</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ferrari-q1-fy26',
    name: 'Ferrari · Q1 FY26',
    company: 'Ferrari',
    meta: {
      company: 'Ferrari',
      title: 'Ferrari Q1 FY26 Income Statement',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ferrari-q1-fy26.png', width: 2667, height: 1500 },
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
        cars_and_spare_parts: { x: 490, y: 560, width: 71, height: 247 },
        sponsorships_commercial_brands: { x: 490, y: 997, width: 71, height: 33 },
        other: { x: 490, y: 1220, width: 71, height: 10 },
        revenue: { x: 957, y: 735, width: 70, height: 294 },
        gross_profit: { x: 1424, y: 598, width: 71, height: 152 },
        cost_of_sales: { x: 1424, y: 1027, width: 71, height: 141 },
        operating_profit: { x: 1892, y: 500, width: 70, height: 85 },
        operating_expenses: { x: 1892, y: 822, width: 70, height: 65 },
        investments: { x: 1675, y: 932, width: 1, height: 1 },
        net_profit: { x: 2358, y: 372, width: 71, height: 64 },
        tax: { x: 2358, y: 663, width: 71, height: 18 },
        finance: { x: 2358, y: 790, width: 71, height: 2 },
        rnd: { x: 2358, y: 952, width: 71, height: 37 },
        sga: { x: 2358, y: 1156, width: 71, height: 24 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'cars_and_spare_parts', col: 0, order: 0, type: 'source', label: ['Cars and', 'spare parts'], value: 1.6, valueText: '€1.6B', notes: ['+1% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'sponsorships_commercial_brands', col: 0, order: 1, type: 'source', label: ['Sponsorships,', 'commercial & brands'], value: 0.2, valueText: '€0.2B', notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'other', col: 0, order: 2, type: 'source', label: 'Other', value: 0.1, valueText: '€0.1B', notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.8, valueText: '€1.8B', notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.0, valueText: '€1.0B', notes: ['52% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 0.9, valueText: '(€0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.5, valueText: '€0.5B', notes: ['30% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.4, valueText: '(€0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investments', col: 3, order: 2, type: 'profit', label: 'Investments', value: 0.003, valueText: '€3M', color: BACKGROUND, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.4, valueText: '€0.4B', notes: ['22% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '(€0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'finance', col: 4, order: 2, type: 'cost', label: 'Finance', value: 0.011, valueText: '(€11M)', color: '#d64949', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.2, valueText: '(€0.2B)', notes: ['13% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.2, valueText: '(€0.2B)', notes: ['9% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'cars_and_spare_parts', target: 'revenue', value: 1.6, sourceWidth: 247, targetWidth: 247, y0: 683.5, y1: 858.5, sourceOrder: 0, targetOrder: 0, linkTint: GREY_LINK },
      { source: 'sponsorships_commercial_brands', target: 'revenue', value: 0.2, sourceWidth: 33, targetWidth: 33, y0: 1013.5, y1: 998.5, sourceOrder: 0, targetOrder: 1, linkTint: GREY_LINK },
      { source: 'other', target: 'revenue', value: 0.1, sourceWidth: 10, targetWidth: 14, y0: 1225, y1: 1022, sourceOrder: 0, targetOrder: 2, linkTint: GREY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.0, sourceWidth: 152, targetWidth: 152, y0: 811, y1: 674, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 0.9, sourceWidth: 141, targetWidth: 141, y0: 958.5, y1: 1097.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.5, sourceWidth: 85, targetWidth: 85, y0: 640.5, y1: 542.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.4, sourceWidth: 65, targetWidth: 65, y0: 716.5, y1: 854.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      // The native guide travels back from the opex bar's right socket. Keep the
      // financial relationship available to hover semantics, but render its
      // measured reverse-direction geometry in investmentsAnnotation above.
      { source: 'investments', target: 'operating_expenses', value: 0.003, width: 0, sourceWidth: 0, targetWidth: 0, y0: 932.5, y1: 887, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 64, targetWidth: 64, y0: 532, y1: 404, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 18, targetWidth: 18, y0: 573, y1: 672, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'finance', value: 0.011, sourceWidth: 2, targetWidth: 2, y0: 583, y1: 791, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.2, sourceWidth: 37, targetWidth: 37, y0: 840.5, y1: 970.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.2, sourceWidth: 28, targetWidth: 24, y0: 873, y1: 1168, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '法拉利 · 2026 财年第一季度',
        meta: {
          title: '法拉利 2026 财年第一季度利润表',
          titleTextLength: 1760,
        },
        nodes: {
          cars_and_spare_parts: { label: ['汽车及', '零部件'], notes: ['同比 +1%'] },
          sponsorships_commercial_brands: { label: ['赞助、商业', '与品牌'], notes: ['同比 +14%'] },
          other: { label: '其他', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比（0 个百分点）'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比（1 个百分点）'] },
          operating_expenses: { label: ['营业', '费用'] },
          investments: { label: '投资' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比（1 个百分点）'] },
          tax: { label: '税费' },
          finance: { label: '财务费用' },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 +0 个百分点'] },
          sga: { label: '销售管理费用', notes: ['占收入 9%', '同比 +0 个百分点'] },
        },
        layout: { labels: labelsZh },
        annotationsSvg: investmentsAnnotation('投资'),
      },
    },
  });
})();

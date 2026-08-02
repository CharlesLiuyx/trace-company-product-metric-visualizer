/* BYD FY23 income statement (RMB B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const line = (text, size, options = {}) => ({ text, size, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 8, lines, ...options });

  const annotations = (unitText) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="113" y="286" font-size="38" font-weight="800" fill="${TITLE}">${unitText}</text>
    </g>`;

  const labelText = {
    en: {
      automobiles: 'Automobiles', autoYoy: '+49% Y/Y', autoMargin: '6% operating margin',
      otherSales: 'Other sales', otherSalesYoy: '+20% Y/Y',
      otherSalesNotes: ['Mobile handset', 'Components,', 'assembly service', 'and other products'],
      sales: 'Sales', salesYoy: '+42% Y/Y', services: 'Services', rental: 'Rental income', smallYoy: '+5% Y/Y',
      revenue: 'Revenue', revenueYoy: '+42% Y/Y', grossProfit: 'Gross profit', grossMargin: '20% margin', grossYoy: '+3pp Y/Y',
      operational1: 'Operational', operational2: 'costs', other: 'Other', operatingProfit: 'Operating profit',
      operatingMargin: '6% margin', operatingYoy: '(1pp) Y/Y', operating1: 'Operating', operating2: 'expenses',
      netProfit: 'Net profit', netMargin: '5% margin', netYoy: '+1pp Y/Y', tax: 'Tax',
      rnd: 'R&D', selling: 'Selling', admin: 'Admin.', surcharge: 'Surcharge',
      sevenRevenue: '7% of revenue', fourRevenue: '4% of revenue', twoRevenue: '2% of revenue', oneRevenue: '1% of revenue',
      plusTwo: '+2pp Y/Y', plusOne: '+1pp Y/Y', zeroParen: '(0pp) Y/Y', plusZero: '+0pp Y/Y',
    },
    zh: {
      automobiles: '汽车', autoYoy: '同比 +49%', autoMargin: '营业利润率 6%',
      otherSales: '其他销售', otherSalesYoy: '同比 +20%',
      otherSalesNotes: ['手机部件、', '组装服务及', '其他产品'],
      sales: '销售额', salesYoy: '同比 +42%', services: '服务', rental: '租赁收入', smallYoy: '同比 +5%',
      revenue: '收入', revenueYoy: '同比 +42%', grossProfit: '毛利润', grossMargin: '毛利率 20%', grossYoy: '同比 +3 个百分点',
      operational1: '运营', operational2: '成本', other: '其他', operatingProfit: '营业利润',
      operatingMargin: '利润率 6%', operatingYoy: '同比 (1 个百分点)', operating1: '营业', operating2: '费用',
      netProfit: '净利润', netMargin: '净利率 5%', netYoy: '同比 +1 个百分点', tax: '税费',
      rnd: '研发', selling: '销售', admin: '行政', surcharge: '附加费',
      sevenRevenue: '占收入 7%', fourRevenue: '占收入 4%', twoRevenue: '占收入 2%', oneRevenue: '占收入 1%',
      plusTwo: '同比 +2 个百分点', plusOne: '同比 +1 个百分点', zeroParen: '同比 (0 个百分点)', plusZero: '同比 +0 个百分点',
    },
  };

  const makeLabels = (L, localized = false) => ({
    automobiles: {
      blocks: [
        block(416, 355, [line('$value', 39), line(L.autoYoy, 29, { color: NOTE })], { lineGap: 10 }),
        block(186, 620, [line(L.automobiles, localized ? 38 : 40, { weight: 800 }), line(L.autoMargin, 29, { color: NOTE })], { lineGap: 10 }),
      ],
    },
    other_sales: {
      blocks: [
        block(400, 866, [line('$value', 39), line(L.otherSalesYoy, 29, { color: NOTE })], { lineGap: 10 }),
        block(200, 973, [
          line(L.otherSales, 40, { weight: 800 }),
          ...L.otherSalesNotes.map((text) => line(text, 29, { color: NOTE })),
        ], { lineGap: 7, semanticRole: 'reference-offset-side-label' }),
      ],
    },
    sales: { blocks: [block(773, 474, [line(L.sales, 40, { weight: 800 }), line('$value', 39), line(L.salesYoy, 29, { color: NOTE })], { lineGap: 9 })] },
    services: {
      blocks: [
        block(773, 1068, [line('$value', 39), line(L.smallYoy, 29, { color: NOTE })], { lineGap: 9 }),
        block(690, 1147, [line(L.services, 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    rental_income: {
      blocks: [
        block(773, 1235, [line('$value', 39), line(L.smallYoy, 29, { color: NOTE })], { lineGap: 9 }),
        block(690, 1317, [line(L.rental, 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    revenue: { blocks: [block(1148, 622, [line(L.revenue, 42, { weight: 800 }), line('$value', 39), line(L.revenueYoy, 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1499, 447, [
      line(L.grossProfit, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }),
      line(L.grossMargin, 29, { color: NOTE }), line(L.grossYoy, 29, { color: NOTE }),
    ], { lineGap: 9 })] },
    operational_costs: { blocks: [block(1517, 1193, [
      line(L.operational1, 39, { weight: 800, color: RED_LABEL }), line(L.operational2, 39, { weight: 800, color: RED_LABEL }),
      line('$value', 39, { color: RED_LABEL }),
    ], { lineGap: 8 })] },
    other_operating_income: { blocks: [block(1793, 601, [
      line(L.other, 34, { weight: 800, color: GREEN_LABEL }), line('$value', 32, { color: GREEN_LABEL }),
    ], { lineGap: 5 })] },
    operating_profit: { blocks: [block(1901, 331, [
      line(L.operatingProfit, localized ? 37 : 39, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }),
      line(L.operatingMargin, 29, { color: NOTE }), line(L.operatingYoy, localized ? 27 : 29, { color: NOTE }),
    ], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1897, 834, [
      line(L.operating1, 39, { weight: 800, color: RED_LABEL }), line(L.operating2, 39, { weight: 800, color: RED_LABEL }),
      line('$value', 39, { color: RED_LABEL }),
    ], { lineGap: 8 })] },
    net_profit: { blocks: [block(2433, 328, [
      line(L.netProfit, 39, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }),
      line(L.netMargin, 29, { color: NOTE }), line(L.netYoy, localized ? 27 : 29, { color: NOTE }),
    ], { lineGap: 8 })] },
    tax: { blocks: [block(2393, 603, [line(L.tax, 31, { weight: 800, color: RED_LABEL }), line('$value', 30, { color: RED_LABEL })], { anchor: 'start', lineGap: 7 })] },
    other_after_operating: { blocks: [block(2391, 728, [line(L.other, 31, { weight: 800, color: RED_LABEL }), line('$value', 30, { color: RED_LABEL })], { anchor: 'start', lineGap: 7 })] },
    rnd: { blocks: [block(2337, 878, [
      line(`${L.rnd} (39.6B)`, 31, { weight: 800, color: RED_LABEL }), line(L.sevenRevenue, 29, { color: NOTE }), line(L.plusTwo, 29, { color: NOTE }),
    ], { anchor: 'start', lineGap: 7 })] },
    selling: { blocks: [block(2332, 1020, [
      line(`${L.selling} (25.2B)`, 31, { weight: 800, color: RED_LABEL }), line(L.fourRevenue, 29, { color: NOTE }), line(L.plusOne, 29, { color: NOTE }),
    ], { anchor: 'start', lineGap: 7 })] },
    admin: { blocks: [block(2328, 1155, [
      line(`${L.admin} (13.5B)`, 31, { weight: 800, color: RED_LABEL }), line(L.twoRevenue, 29, { color: NOTE }), line(L.zeroParen, 29, { color: NOTE }),
    ], { anchor: 'start', lineGap: 7 })] },
    surcharge: { blocks: [block(2303, 1286, [
      line(`${L.surcharge} (10.3B)`, localized ? 29 : 31, { weight: 800, color: RED_LABEL }), line(L.oneRevenue, 29, { color: NOTE }), line(L.plusZero, 29, { color: NOTE }),
    ], { anchor: 'start', lineGap: 7 })] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'byd-fy23',
    name: 'BYD · FY23',
    company: 'BYD',
    meta: {
      company: 'BYD',
      title: 'BYD FY23 Income Statement',
      period: 'FY23',
      periodNote: 'Year ending Dec. 2023',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/byd-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1770,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
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
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 39, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations('in RMB'),
    rasterAnnotations: [
      { key: 'automobiles-product-cluster', href: 'data/assets/raster-annotations/byd/automobiles-product-cluster.png', x: 35, y: 452, width: 325, height: 165 },
      { key: 'byd-wordmark', href: 'data/assets/raster-annotations/byd/byd-wordmark.png', x: 884, y: 255, width: 502, height: 307 },
    ],
    layout: {
      scale: 0.5,
      nodes: {
        automobiles: { x: 364, y: 456, width: 71, height: 248 },
        other_sales: { x: 364, y: 961, width: 71, height: 60 },
        sales: { x: 738, y: 619, width: 70, height: 310 },
        services: { x: 737, y: 1170, width: 73, height: 3 },
        rental_income: { x: 737, y: 1340, width: 72, height: 3 },
        revenue: { x: 1117, y: 767, width: 70, height: 312 },
        gross_profit: { x: 1483, y: 632, width: 70, height: 61 },
        operational_costs: { x: 1481, y: 924, width: 70, height: 248 },
        other_operating_income: { x: 1755, y: 583, width: 71, height: 3 },
        operating_profit: { x: 1862, y: 516, width: 70, height: 18 },
        operating_expenses: { x: 1862, y: 757, width: 70, height: 43 },
        net_profit: { x: 2232, y: 366, width: 71, height: 14 },
        tax: { x: 2232, y: 650, width: 72, height: 3 },
        other_after_operating: { x: 2232, y: 768, width: 72, height: 2 },
        rnd: { x: 2232, y: 893, width: 71, height: 19 },
        selling: { x: 2232, y: 1046, width: 71, height: 11 },
        admin: { x: 2232, y: 1192, width: 71, height: 5 },
        surcharge: { x: 2232, y: 1326, width: 71, height: 4 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'automobiles', col: 0, order: 0, type: 'source', label: 'Automobiles', value: 479.1, valueText: '479.1B', notes: ['+49% Y/Y', '6% operating margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_sales', col: 0, order: 1, type: 'source', label: 'Other sales', value: 118.8, valueText: '118.8B', notes: ['+20% Y/Y', 'Mobile handset components, assembly service and other products'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'sales', col: 1, order: 0, type: 'source', label: 'Sales', value: 597.9, valueText: '597.9B', notes: ['+42% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 4.2, valueText: '4.2B', notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'rental_income', col: 1, order: 2, type: 'source', label: 'Rental income', value: 0.2, valueText: '0.2B', notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 602.3, valueText: '602.3B', notes: ['+42% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 121.8, valueText: '121.8B', notes: ['20% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operational_costs', col: 3, order: 1, type: 'cost', label: ['Operational', 'costs'], value: 480.6, valueText: '(480.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 4.9, valueText: '4.9B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 38.1, valueText: '38.1B', notes: ['6% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 88.6, valueText: '(88.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 7, order: 0, type: 'profit', label: 'Net profit', value: 31.3, valueText: '31.3B', notes: ['5% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 7, order: 1, type: 'cost', label: 'Tax', value: 5.9, valueText: '(5.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_after_operating', col: 7, order: 2, type: 'cost', label: 'Other', value: 0.8, valueText: '(0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 7, order: 3, type: 'cost', label: 'R&D', value: 39.6, valueText: '(39.6B)', notes: ['7% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling', col: 7, order: 4, type: 'cost', label: 'Selling', value: 25.2, valueText: '(25.2B)', notes: ['4% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'admin', col: 7, order: 5, type: 'cost', label: 'Admin.', value: 13.5, valueText: '(13.5B)', notes: ['2% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'surcharge', col: 7, order: 6, type: 'cost', label: 'Surcharge', value: 10.3, valueText: '(10.3B)', notes: ['1% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'automobiles', target: 'sales', value: 479.1, sourceWidth: 248, targetWidth: 248, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'other_sales', target: 'sales', value: 118.8, sourceWidth: 60, targetWidth: 62, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'sales', target: 'revenue', value: 597.9, sourceWidth: 310, targetWidth: 310, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'services', target: 'revenue', value: 4.2, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'rental_income', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 121.8, sourceWidth: 61, targetWidth: 61, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operational_costs', value: 480.6, sourceWidth: 251, targetWidth: 248, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 33.2, sourceWidth: 17, targetWidth: 15, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 88.6, sourceWidth: 44, targetWidth: 43, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_operating_income', target: 'operating_profit', value: 4.9, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 31.3, sourceWidth: 14, targetWidth: 14, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 5.9, sourceWidth: 3, targetWidth: 3, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_after_operating', value: 0.8, sourceWidth: 1, targetWidth: 2, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 39.6, sourceWidth: 19, targetWidth: 19, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling', value: 25.2, sourceWidth: 12, targetWidth: 11, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'admin', value: 13.5, sourceWidth: 7, targetWidth: 5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'surcharge', value: 10.3, sourceWidth: 5, targetWidth: 4, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '比亚迪 · 2023 财年',
        meta: {
          title: '比亚迪 2023 财年利润表',
          period: '2023 财年',
          periodNote: '截至 2023 年 12 月',
          titleTextLength: 1260,
        },
        annotationsSvg: annotations('单位：人民币'),
        nodes: {
          automobiles: { label: '汽车', notes: ['同比 +49%', '营业利润率 6%'] },
          other_sales: { label: '其他销售', notes: ['同比 +20%', '手机部件、组装服务及其他产品'] },
          sales: { label: '销售额', notes: ['同比 +42%'] },
          services: { label: '服务', notes: ['同比 +5%'] },
          rental_income: { label: '租赁收入', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +42%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 20%', '同比 +3 个百分点'] },
          operational_costs: { label: ['运营', '成本'] },
          other_operating_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['净利率 5%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          other_after_operating: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 +2 个百分点'] },
          selling: { label: '销售', notes: ['占收入 4%', '同比 +1 个百分点'] },
          admin: { label: '行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
          surcharge: { label: '附加费', notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: { labels: makeLabels(labelText.zh, true) },
      },
    },
  });
})();

/* Adidas FY23 income statement (€B), reconstructed from the Source image. */
(function () {
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
    <path d="M860 1107 L893 1175 L827 1175 Z" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>
    <rect x="674" y="1175" width="380" height="140" rx="18" fill="#eeeeee" stroke="#1a1a1a" stroke-width="4"/>`;
  const annotations = (L) => `
    <g font-family="Noto Sans,Arial,sans-serif">
    <g class="sankey-interactive-annotation" data-node="footwear"><text x="224" y="678" text-anchor="middle" font-size="40" font-weight="800" fill="#000">${L.footwear}</text></g>
    <g class="sankey-interactive-annotation" data-node="apparel"><text x="228" y="1000" text-anchor="middle" font-size="40" font-weight="800" fill="#000">${L.apparel}</text></g>
    <g class="sankey-interactive-annotation" data-node="accessories_gear"><text x="220" y="1253" text-anchor="middle" font-size="40" font-weight="800" fill="#000">${L.accessories1}<tspan x="220" dy="52">${L.accessories2}</tspan></text></g>
    <g>${calloutBox}
      <text x="864" y="1216" text-anchor="middle" font-size="31" fill="#222"><tspan font-weight="800">${L.na}</tspan><tspan> ${L.naYoy}</tspan></text>
      <text x="864" y="1259" text-anchor="middle" font-size="31" fill="#222"><tspan font-weight="800">${L.emea}</tspan><tspan> ${L.emeaYoy}</tspan></text>
      <text x="864" y="1302" text-anchor="middle" font-size="31" fill="#222"><tspan font-weight="800">${L.china}</tspan><tspan> ${L.chinaYoy}</tspan></text>
    </g></g>`;

  const makeLines = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ blocks: [{ x, top, anchor, lineGap, lines }] });
  const labels = (L) => ({
    footwear: { blocks: [
      { x: 387, top: 415, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: L.footwearYoy, size: 29, color: NOTE }] },
    ] },
    apparel: { blocks: [
      { x: 387, top: 797, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: L.apparelYoy, size: 29, color: NOTE }] },
    ] },
    accessories_gear: { blocks: [
      { x: 390, top: 1120, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: L.accessoriesYoy, size: 29, color: NOTE }] },
    ] },
    revenue: makeLines(858, 588, [{ text: L.revenue, size: 40, weight: 800 }, { text: '$value', size: 40 }, { text: L.revenueYoy, size: 29, color: NOTE }], 'middle', 9),
    gross_profit: makeLines(1318, 415, [{ text: L.gross, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: L.grossMargin, size: 29, color: NOTE }, { text: L.grossYoy, size: 29, color: NOTE }], 'middle', 9),
    cost_of_sales: makeLines(1325, 1227, [{ text: L.cost, size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 36, color: RED_LABEL }], 'middle', 9),
    other_income: makeLines(1678, 586, [{ text: L.other, size: 32, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 32, color: GREEN_LABEL }]),
    operating_profit: makeLines(1787, 309, [{ text: L.opProfit, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: L.opMargin, size: 29, color: NOTE }, { text: L.opYoy, size: 29, color: NOTE }], 'middle', 9),
    operating_expenses: makeLines(1788, 936, [{ text: L.operating, size: 36, weight: 800, color: RED_LABEL }, { text: L.expenses, size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, color: RED_LABEL }], 'middle', 9),
    net_loss: makeLines(2132, 277, [{ text: L.netLoss, size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }, { text: L.netMargin, size: 29, color: NOTE }, { text: L.netYoy, size: 29, color: NOTE }], 'middle', 9),
    financial: makeLines(2408, 530, [{ text: L.financial, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }]),
    tax: makeLines(2410, 662, [{ text: L.tax, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }]),
    distribution_selling: makeLines(2430, 853, [{ text: L.distribution, size: 32, weight: 800, color: RED_LABEL }, { text: L.selling, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }]),
    marketing_pos: makeLines(2432, 1034, [{ text: L.marketing, size: 32, weight: 800, color: RED_LABEL }, { text: L.pos, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }]),
    ga: makeLines(2432, 1178, [{ text: L.ga, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }]),
    other_opex: makeLines(2432, 1311, [{ text: L.other, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, color: RED_LABEL }]),
  });

  const EN = {
    footwear: 'Footwear', footwearYoy: '(1%) Y/Y', apparel: 'Apparel', apparelYoy: '(11%) Y/Y',
    accessories1: 'Accessories', accessories2: '& Gear', accessoriesYoy: '(1%) Y/Y', revenue: 'Revenue', revenueYoy: '(5%) Y/Y',
    gross: 'Gross profit', grossMargin: '48% margin', grossYoy: '+0pp Y/Y', cost: 'Cost of sales', other: 'Other',
    opProfit: 'Operating profit', opMargin: '1% margin', opYoy: '(2pp) Y/Y', operating: 'Operating', expenses: 'expenses',
    netLoss: 'Net loss', netMargin: '(0%) margin', netYoy: '(1pp) Y/Y', financial: 'Financial', tax: 'Tax',
    distribution: 'Distribution', selling: '& Selling', marketing: 'Marketing', pos: '& POS', ga: 'G&A',
  };
  const ZH = {
    footwear: '鞋类', footwearYoy: '同比 (1%)', apparel: '服装', apparelYoy: '同比 (11%)',
    accessories1: '配件', accessories2: '与装备', accessoriesYoy: '同比 (1%)', revenue: '收入', revenueYoy: '同比 (5%)',
    gross: '毛利润', grossMargin: '利润率 48%', grossYoy: '同比 +0 个百分点', cost: '销售成本', other: '其他',
    opProfit: '营业利润', opMargin: '利润率 1%', opYoy: '同比 (2 个百分点)', operating: '运营', expenses: '费用',
    netLoss: '净亏损', netMargin: '利润率 (0%)', netYoy: '同比 (1 个百分点)', financial: '财务费用', tax: '税费',
    distribution: '分销', selling: '与销售', marketing: '营销', pos: '与销售点', ga: '管理费用',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adidas-fy23', name: 'Adidas · FY23', company: 'Adidas',
    meta: {
      company: 'Adidas', title: 'Adidas FY23 Income Statement', period: '', periodNote: '', currency: '€', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adidas-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 168, titleSize: 118, titleWeight: 800, titleTextLength: 1948,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: {
        mode: 'error',
        // The Source's 3–4px add-in/loss faces are fully occupied, but their
        // curves leave the right edge immediately above/below the raster
        // probe. Bind these two reviewed interfaces to the complete node face.
        fullFaceIds: ['other_income:right', 'net_loss:right'],
      },
      titleColor: '#155077', subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GREY_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations({ footwear: 'Footwear', apparel: 'Apparel', accessories1: 'Accessories', accessories2: '& Gear', na: 'North America', naYoy: '(19%) Y/Y', emea: 'EMEA', emeaYoy: '(4%) Y/Y', china: 'China', chinaYoy: 'flat Y/Y' }),
    rasterAnnotations: [
      { key: 'adidas-company-logo', href: 'data/assets/raster-annotations/adidas/company-logo.png', x: 651, y: 225, width: 424, height: 312 },
      { key: 'adidas-business-footwear', href: 'data/assets/raster-annotations/adidas/business-footwear.png', x: 128, y: 439, width: 200, height: 170 },
      { key: 'adidas-business-apparel', href: 'data/assets/raster-annotations/adidas/business-apparel.png', x: 126, y: 779, width: 202, height: 166 },
      { key: 'adidas-business-accessories-gear', href: 'data/assets/raster-annotations/adidas/business-accessories-gear.png', x: 130, y: 1071, width: 214, height: 138 },
    ],
    layout: {
      scale: 17.5,
      nodes: {
        footwear: { x: 356, y: 507, width: 71, height: 211 }, apparel: { x: 356, y: 888, width: 71, height: 135 }, accessories_gear: { x: 358, y: 1210, width: 71, height: 25 },
        revenue: { x: 823, y: 731, width: 70, height: 374 }, gross_profit: { x: 1290, y: 598, width: 71, height: 177 }, cost_of_sales: { x: 1290, y: 1013, width: 71, height: 196 },
        other_income: { x: 1639, y: 568, width: 78, height: 3 }, operating_profit: { x: 1750, y: 493, width: 70, height: 4 }, operating_expenses: { x: 1753, y: 745, width: 70, height: 175 },
        net_loss: { x: 2093, y: 461, width: 82, height: 4 }, financial: { x: 2224, y: 568, width: 71, height: 6 }, tax: { x: 2224, y: 705, width: 71, height: 4 },
        distribution_selling: { x: 2224, y: 847, width: 71, height: 100 }, marketing_pos: { x: 2224, y: 1052, width: 71, height: 46 }, ga: { x: 2224, y: 1205, width: 71, height: 35 }, other_opex: { x: 2224, y: 1351, width: 71, height: 5 },
      },
      labels: labels(EN),
    },
    nodes: [
      { id: 'footwear', col: 0, order: 0, type: 'source', label: 'Footwear', value: 12.1, valueText: '€12.1B', notes: ['(1%) Y/Y'] },
      { id: 'apparel', col: 0, order: 1, type: 'source', label: 'Apparel', value: 7.8, valueText: '€7.8B', notes: ['(11%) Y/Y'] },
      { id: 'accessories_gear', col: 0, order: 2, type: 'source', label: ['Accessories', '& Gear'], value: 1.4, valueText: '€1.4B', notes: ['(1%) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 21.4, valueText: '€21.4B', notes: ['(5%) Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.2, valueText: '€10.2B', notes: ['48% margin', '+0pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 11.2, valueText: '(€11.2B)' },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.2, valueText: '€0.2B' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.3, valueText: '€0.3B', notes: ['1% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 10.1, valueText: '(€10.1B)' },
      { id: 'net_loss', col: 5, order: 0, type: 'cost', label: 'Net loss', value: -0.1, valueText: '(€0.1B)', notes: ['(0%) margin', '(1pp) Y/Y'] },
      { id: 'financial', col: 6, order: 0, type: 'cost', label: 'Financial', value: 0.2, valueText: '(€0.2B)' },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.1, valueText: '(€0.1B)' },
      { id: 'distribution_selling', col: 6, order: 2, type: 'cost', label: ['Distribution', '& Selling'], value: 5.5, valueText: '(€5.5B)' },
      { id: 'marketing_pos', col: 6, order: 3, type: 'cost', label: ['Marketing', '& POS'], value: 2.5, valueText: '(€2.5B)' },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 1.8, valueText: '(€1.8B)' },
      { id: 'other_opex', col: 6, order: 5, type: 'cost', label: 'Other', value: 0.2, valueText: '(€0.2B)' },
    ],
    links: [
      { source: 'footwear', target: 'revenue', value: 12.1, sourceWidth: 211, targetWidth: 212, sourceOrder: 0, targetOrder: 0 },
      { source: 'apparel', target: 'revenue', value: 7.8, sourceWidth: 135, targetWidth: 136, sourceOrder: 0, targetOrder: 1 },
      { source: 'accessories_gear', target: 'revenue', value: 1.4, sourceWidth: 25, targetWidth: 25, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 10.2, sourceWidth: 178, targetWidth: 177, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 11.2, sourceWidth: 196, targetWidth: 196, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 10.1, sourceWidth: 175, targetWidth: 175, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 0.2, sourceWidth: 3, targetWidth: 2, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'financial', value: 0.2, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 2, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss', target: 'financial', value: 0.1, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'distribution_selling', value: 5.5, sourceWidth: 96, targetWidth: 100, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing_pos', value: 2.5, sourceWidth: 43, targetWidth: 46, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 1.8, sourceWidth: 31, targetWidth: 35, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 5, targetWidth: 5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: { zh: {
      name: 'Adidas · 2023 财年',
      meta: { title: 'Adidas 2023 财年利润表', period: '', periodNote: '', titleTextLength: 1460 },
      annotationsSvg: annotations({ footwear: '鞋类', apparel: '服装', accessories1: '配件', accessories2: '与装备', na: '北美', naYoy: '同比 (19%)', emea: 'EMEA', emeaYoy: '同比 (4%)', china: '中国', chinaYoy: '同比持平' }),
      nodes: {
        footwear: { label: '鞋类', notes: ['同比 (1%)'] }, apparel: { label: '服装', notes: ['同比 (11%)'] }, accessories_gear: { label: ['配件', '与装备'], notes: ['同比 (1%)'] },
        revenue: { label: '收入', notes: ['同比 (5%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 +0 个百分点'] }, cost_of_sales: { label: '销售成本' },
        other_income: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (2 个百分点)'] }, operating_expenses: { label: ['运营', '费用'] },
        net_loss: { label: '净亏损', notes: ['利润率 (0%)', '同比 (1 个百分点)'] }, financial: { label: '财务费用' }, tax: { label: '税费' },
        distribution_selling: { label: ['分销', '与销售'] }, marketing_pos: { label: ['营销', '与销售点'] }, ga: { label: '管理费用' }, other_opex: { label: '其他' },
      },
      layout: { labels: labels(ZH) },
    } },
  });
})();

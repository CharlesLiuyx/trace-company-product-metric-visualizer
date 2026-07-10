/* ====================================================================
 * Amgen - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/amgen-q4-fy25.png as a fixed
 * d3-sankey layout. Product logo clusters are validated runtime rasters.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const BLUE = '#2a65a4';
  const BLUE_LABEL = '#19557f';
  const BLUE_LINK = '#91b0cf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9acc97';
  const RED = '#df0000';
  const RED_LABEL = '#981700';
  const RED_LINK = '#df8082';
  const NOTE = '#696969';
  const RIGHT_X = 2432;

  const sourceLabel = (name, valueTop, nameTop, note, nameX = 415, valueX = 504) => ({
    blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: note, size: 28, weight: 400, color: NOTE },
      ] },
      { x: nameX, top: nameTop, anchor: 'end', lines: [{ text: name, size: 40, weight: 800 }] },
    ],
  });

  const zhSourceLabel = (name, valueTop, nameTop, note, nameX = 415, valueX = 504) => ({
    blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: note, size: 28, weight: 400, color: NOTE },
      ] },
      { x: nameX, top: nameTop, anchor: 'end', lines: [{ text: name, size: 40, weight: 800 }] },
    ],
  });

  const layoutLabels = {
    repatha: sourceLabel('Repatha', 268, 356, '+44% Y/Y'),
    prolia: sourceLabel('Prolia', 391, 484, '(10%) Y/Y'),
    evenity: sourceLabel('EVENITY', 529, 615, '+39% Y/Y'),
    blincyto: sourceLabel('BLINCYTO', 656, 735, '+8% Y/Y'),
    tezspire: sourceLabel('Tezspire', 771, 851, '+60% Y/Y'),
    tepezza: sourceLabel('Tepezza', 897, 981, '(1%) Y/Y'),
    other_products: { blocks: [
      { x: 415, top: 1170, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
      { x: 504, top: 1027, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
    ] },
    product_sales: { blocks: [{ x: 878, top: 476, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Product', size: 40, weight: 800 }, { text: 'sales', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 }, { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    other_revenue: { blocks: [{ x: 878, top: 1014, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Other', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '+35% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    revenue: { blocks: [{ x: 1252, top: 625, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1624, top: 438, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Gross', size: 40, weight: 800 }, { text: 'profit', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 }, { text: '70% margin', size: 28, weight: 400, color: NOTE },
      { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_sales: { blocks: [{ x: 1624, top: 1195, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Cost of sales', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1998, top: 315, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Operating', size: 40, weight: 800 }, { text: 'profit', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 }, { text: '28% margin', size: 28, weight: 400, color: NOTE },
      { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1998, top: 979, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 376, anchor: 'start', lineGap: 9, lines: [
      { text: 'Net', size: 40, weight: 800 }, { text: 'profit', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 }, { text: '14% margin', size: 28, weight: 400, color: NOTE },
      { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    interest: { blocks: [{ x: RIGHT_X, top: 626, anchor: 'start', lineGap: 7, lines: [
      { text: 'Interest', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    other_expense: { blocks: [{ x: RIGHT_X, top: 746, anchor: 'start', lineGap: 7, lines: [
      { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 845, anchor: 'start', lineGap: 7, lines: [
      { text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 975, anchor: 'start', lineGap: 8, lines: [
      { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '22% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    sga: { blocks: [{ x: RIGHT_X, top: 1125, anchor: 'start', lineGap: 8, lines: [
      { text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '20% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    other_opex: { blocks: [{ x: RIGHT_X, top: 1270, anchor: 'start', lineGap: 8, lines: [
      { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '1% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
  };

  const zhLayoutLabels = {
    repatha: zhSourceLabel('Repatha', 268, 356, '同比 +44%'),
    prolia: zhSourceLabel('Prolia', 391, 484, '同比 (10%)'),
    evenity: zhSourceLabel('EVENITY', 529, 615, '同比 +39%'),
    blincyto: zhSourceLabel('BLINCYTO', 656, 735, '同比 +8%'),
    tezspire: zhSourceLabel('Tezspire', 771, 851, '同比 +60%'),
    tepezza: zhSourceLabel('Tepezza', 897, 981, '同比 (1%)'),
    other_products: { blocks: [
      { x: 415, top: 1170, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] },
      { x: 504, top: 1027, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +2%', size: 28, weight: 400, color: NOTE }] },
    ] },
    product_sales: { blocks: [{ x: 878, top: 476, anchor: 'middle', lineGap: 9, lines: [{ text: '产品销售', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +7%', size: 28, weight: 400, color: NOTE }] }] },
    other_revenue: { blocks: [{ x: 878, top: 1014, anchor: 'middle', lineGap: 9, lines: [{ text: '其他', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +35%', size: 28, weight: 400, color: NOTE }] }] },
    revenue: { blocks: [{ x: 1252, top: 625, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +9%', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1624, top: 438, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 70%', size: 28, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_sales: { blocks: [{ x: 1624, top: 1195, anchor: 'middle', lineGap: 8, lines: [{ text: '销售成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1998, top: 315, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 28%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1998, top: 979, anchor: 'middle', lineGap: 8, lines: [{ text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }] }] },
    net_profit: { blocks: [{ x: RIGHT_X, top: 376, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 14%', size: 28, weight: 400, color: NOTE }, { text: '同比 +7 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    interest: { blocks: [{ x: RIGHT_X, top: 626, anchor: 'start', lineGap: 7, lines: [{ text: '利息', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    other_expense: { blocks: [{ x: RIGHT_X, top: 746, anchor: 'start', lineGap: 7, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    tax: { blocks: [{ x: RIGHT_X, top: 845, anchor: 'start', lineGap: 7, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: RIGHT_X, top: 975, anchor: 'start', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 22%', size: 28, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: 2415, top: 1125, anchor: 'start', lineGap: 8, lines: [{ text: '销售、一般及管理费用', size: 24, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 20%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
    other_opex: { blocks: [{ x: RIGHT_X, top: 1270, anchor: 'start', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 1%', size: 28, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amgen-q4-fy25',
    name: 'Amgen · Q4 FY25',
    company: 'Amgen',
    meta: {
      company: 'Amgen',
      title: 'Amgen Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/amgen-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2260,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0,
      interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
      titleColor: BLUE_LABEL, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'amgen-company-logo', href: 'data/assets/raster-annotations/amgen/company-logo.png', x: 747, y: 242, width: 580, height: 176 },
      { key: 'amgen-product-repatha', href: 'data/assets/raster-annotations/amgen/product-repatha.png', x: 14, y: 317, width: 179, height: 83 },
      { key: 'amgen-product-prolia', href: 'data/assets/raster-annotations/amgen/product-prolia.png', x: 14, y: 451, width: 179, height: 91 },
      { key: 'amgen-product-evenity', href: 'data/assets/raster-annotations/amgen/product-evenity.png', x: 14, y: 604, width: 179, height: 56 },
      { key: 'amgen-product-blincyto', href: 'data/assets/raster-annotations/amgen/product-blincyto.png', x: 8, y: 713, width: 191, height: 73 },
      { key: 'amgen-product-tezspire', href: 'data/assets/raster-annotations/amgen/product-tezspire.png', x: 8, y: 831, width: 191, height: 75 },
      { key: 'amgen-product-tepezza', href: 'data/assets/raster-annotations/amgen/product-tepezza.png', x: 0, y: 942, width: 235, height: 118 },
    ],
    layout: {
      scale: 1,
      nodes: {
        repatha: { x: 467, y: 356, width: 74, height: 23 }, prolia: { x: 467, y: 483, width: 74, height: 28 },
        evenity: { x: 467, y: 622, width: 74, height: 15 }, blincyto: { x: 467, y: 744, width: 74, height: 10 },
        tezspire: { x: 467, y: 859, width: 74, height: 13 }, tepezza: { x: 467, y: 987, width: 74, height: 14 },
        other_products: { x: 467, y: 1115, width: 74, height: 143 }, product_sales: { x: 841, y: 668, width: 74, height: 244 },
        other_revenue: { x: 841, y: 1158, width: 74, height: 14 }, revenue: { x: 1215, y: 769, width: 74, height: 268 },
        gross_profit: { x: 1587, y: 670, width: 74, height: 188 }, cost_of_sales: { x: 1587, y: 1091, width: 74, height: 78 },
        operating_profit: { x: 1962, y: 548, width: 74, height: 74 }, operating_expenses: { x: 1962, y: 846, width: 74, height: 111 },
        net_profit: { x: 2335, y: 411, width: 74, height: 34 }, interest: { x: 2335, y: 652, width: 74, height: 18 },
        other_expense: { x: 2335, y: 769, width: 74, height: 16 }, tax: { x: 2335, y: 875, width: 74, height: 6 },
        rnd: { x: 2335, y: 978, width: 74, height: 58 }, sga: { x: 2335, y: 1126, width: 74, height: 55 }, other_opex: { x: 2335, y: 1282, width: 74, height: 4 },
      },
      labels: layoutLabels,
    },
    nodes: [
      { id: 'repatha', type: 'source', label: 'Repatha', value: 0.9, notes: ['+44% Y/Y'] },
      { id: 'prolia', type: 'source', label: 'Prolia', value: 1.1, notes: ['(10%) Y/Y'] },
      { id: 'evenity', type: 'source', label: 'EVENITY', value: 0.6, notes: ['+39% Y/Y'] },
      { id: 'blincyto', type: 'source', label: 'BLINCYTO', value: 0.4, notes: ['+8% Y/Y'] },
      { id: 'tezspire', type: 'source', label: 'Tezspire', value: 0.5, notes: ['+60% Y/Y'] },
      { id: 'tepezza', type: 'source', label: 'Tepezza', value: 0.5, notes: ['(1%) Y/Y'] },
      { id: 'other_products', type: 'source', label: 'Other', value: 5.6, notes: ['+2% Y/Y'] },
      { id: 'product_sales', type: 'hub', label: ['Product', 'sales'], value: 9.4, notes: ['+7% Y/Y'] },
      { id: 'other_revenue', type: 'source', label: 'Other', value: 0.5, notes: ['+35% Y/Y'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 9.9, notes: ['+9% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: ['Gross', 'profit'], value: 6.9, notes: ['70% margin', '+4pp Y/Y'] },
      { id: 'cost_of_sales', type: 'cost', label: 'Cost of sales', value: 3.0 },
      { id: 'operating_profit', type: 'profit', label: ['Operating', 'profit'], value: 2.7, notes: ['28% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 4.2 },
      { id: 'net_profit', type: 'profit', label: ['Net', 'profit'], value: 1.3, notes: ['14% margin', '+7pp Y/Y'] },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.7 }, { id: 'other_expense', type: 'cost', label: 'Other', value: 0.6 },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'rnd', type: 'cost', label: 'R&D', value: 2.1, notes: ['22% of revenue', '+3pp Y/Y'] },
      { id: 'sga', type: 'cost', label: 'SG&A', value: 2.0, notes: ['20% of revenue', '(1pp) Y/Y'] },
      { id: 'other_opex', type: 'cost', label: 'Other', value: 0.1, notes: ['1% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'repatha', target: 'product_sales', value: 0.9, sourceWidth: 23, targetWidth: 23, y0: 367.5, y1: 679.5, linkTint: BLUE_LINK },
      { source: 'prolia', target: 'product_sales', value: 1.1, sourceWidth: 28, targetWidth: 28, y0: 497, y1: 705, linkTint: BLUE_LINK },
      { source: 'evenity', target: 'product_sales', value: 0.6, sourceWidth: 15, targetWidth: 15, y0: 629.5, y1: 726.5, linkTint: BLUE_LINK },
      { source: 'blincyto', target: 'product_sales', value: 0.4, sourceWidth: 10, targetWidth: 10, y0: 749, y1: 739, linkTint: BLUE_LINK },
      { source: 'tezspire', target: 'product_sales', value: 0.5, sourceWidth: 13, targetWidth: 13, y0: 865.5, y1: 750.5, linkTint: BLUE_LINK },
      { source: 'tepezza', target: 'product_sales', value: 0.5, sourceWidth: 14, targetWidth: 12, y0: 994, y1: 763, linkTint: BLUE_LINK },
      { source: 'other_products', target: 'product_sales', value: 5.6, sourceWidth: 143, targetWidth: 143, y0: 1186.5, y1: 840.5, linkTint: BLUE_LINK },
      { source: 'product_sales', target: 'revenue', value: 9.4, sourceWidth: 244, targetWidth: 254, y0: 790, y1: 896, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.5, sourceWidth: 14, targetWidth: 14, y0: 1165, y1: 1030, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 6.9, sourceWidth: 190, targetWidth: 188, y0: 864, y1: 764, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.0, sourceWidth: 78, targetWidth: 78, y0: 998, y1: 1130, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 74, targetWidth: 74, y0: 707, y1: 585, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.2, sourceWidth: 114, targetWidth: 111, y0: 801, y1: 901.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 34, targetWidth: 34, y0: 565, y1: 428, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.7, sourceWidth: 18, targetWidth: 18, y0: 591, y1: 661, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.6, sourceWidth: 16, targetWidth: 16, y0: 608, y1: 777, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 6, targetWidth: 6, y0: 619, y1: 878, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.1, sourceWidth: 55, targetWidth: 58, y0: 873.5, y1: 1007, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 2.0, sourceWidth: 54, targetWidth: 55, y0: 928, y1: 1153.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 2, targetWidth: 4, y0: 956, y1: 1284, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '安进 · 2025 财年第四季度',
        meta: { title: '安进 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2260 },
        nodes: {
          repatha: { label: 'Repatha', notes: ['同比 +44%'] }, prolia: { label: 'Prolia', notes: ['同比 (10%)'] }, evenity: { label: 'EVENITY', notes: ['同比 +39%'] },
          blincyto: { label: 'BLINCYTO', notes: ['同比 +8%'] }, tezspire: { label: 'Tezspire', notes: ['同比 +60%'] }, tepezza: { label: 'Tepezza', notes: ['同比 (1%)'] },
          other_products: { label: '其他', notes: ['同比 +2%'] }, product_sales: { label: ['产品', '销售'], notes: ['同比 +7%'] }, other_revenue: { label: '其他', notes: ['同比 +35%'] }, revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: ['毛', '利润'], notes: ['利润率 70%', '同比 +4 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: ['营业', '利润'], notes: ['利润率 28%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: ['净', '利润'], notes: ['利润率 14%', '同比 +7 个百分点'] }, interest: { label: '利息' }, other_expense: { label: '其他' }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 22%', '同比 +3 个百分点'] }, sga: { label: '销售、一般及管理费用', notes: ['占收入 20%', '同比 (1 个百分点)'] }, other_opex: { label: '其他', notes: ['占收入 1%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

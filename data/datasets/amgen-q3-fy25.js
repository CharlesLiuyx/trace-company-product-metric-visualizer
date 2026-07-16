/* ====================================================================
 * Amgen - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/amgen-q3-fy25.png as a fixed
 * d3-sankey layout. Product logo clusters reuse validated Amgen rasters.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const BLUE = '#2162a5';
  const BLUE_LABEL = '#155077';
  const BLUE_LINK = '#94b1ce';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const sourceLabel = (name, valueTop, nameTop, note, nameTextLength, nameX = 423, valueX = 500) => ({
    blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 34, weight: 400 },
        { text: note, size: 27, weight: 400, color: NOTE },
      ] },
      { x: nameX, top: nameTop, anchor: 'end', lines: [
        { text: name, size: 40, weight: 800, textLength: nameTextLength },
      ] },
    ],
  });

  const layoutLabels = {
    repatha: sourceLabel('Repatha', 264, 341, '+40% Y/Y', 174, 406),
    prolia: sourceLabel('Prolia', 388, 465, '+9% Y/Y', 152, 377),
    evenity: sourceLabel('EVENITY', 526, 598, '+36% Y/Y', 176, 402),
    blincyto: sourceLabel('BLINCYTO', 643, 714, '+20% Y/Y', 195),
    tezspire: sourceLabel('Tezspire', 774, 843, '+40% Y/Y', 177, 398),
    tepezza: sourceLabel('Tepezza', 886, 956, '+15% Y/Y', 177, 398),
    other_products: {
      blocks: [
        { x: 381, top: 1144, anchor: 'end', lines: [
          { text: 'Other', size: 40, weight: 800, textLength: 152 },
        ] },
        { x: 500, top: 1007, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 34, weight: 400 },
          { text: '+5% Y/Y', size: 27, weight: 400, color: NOTE },
        ] },
      ],
    },
    product_sales: {
      blocks: [{ x: 876, top: 477, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Product', size: 40, weight: 800 },
        { text: 'sales', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    other_revenue: {
      blocks: [{ x: 876, top: 1155, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Other', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    revenue: {
      blocks: [{ x: 1249, top: 646, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1623, top: 452, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Gross', size: 40, weight: 800 },
        { text: 'profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '68% margin', size: 28, weight: 400, color: NOTE },
        { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_sales: {
      blocks: [{ x: 1623, top: 1140, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Cost of sales', size: 35, weight: 800 },
        { text: '$value', size: 35, weight: 400 },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1996, top: 328, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Operating', size: 40, weight: 800 },
        { text: 'profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '26% margin', size: 28, weight: 400, color: NOTE },
        { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1996, top: 954, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating', size: 39, weight: 800 },
        { text: 'expenses', size: 39, weight: 800 },
        { text: '$value', size: 38, weight: 400 },
      ] }],
    },
    other_income: {
      blocks: [{ x: 2184, top: 268, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Other', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    net_profit: {
      blocks: [{ x: 2453, top: 352, anchor: 'start', lineGap: 9, lines: [
        { text: 'Net', size: 40, weight: 800 },
        { text: 'profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '21% margin', size: 28, weight: 400, color: NOTE },
        { text: '+23pp Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    interest: {
      blocks: [{ x: 2461, top: 685, anchor: 'start', lineGap: 7, lines: [
        { text: 'Interest', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    tax: {
      blocks: [{ x: 2474, top: 781, anchor: 'start', lineGap: 7, lines: [
        { text: 'Tax', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    rnd: {
      blocks: [{ x: 2433, top: 948, anchor: 'start', lineGap: 8, lines: [
        { text: 'R&D ($1.9B)', size: 31, weight: 800 },
        { text: '20% of revenue', size: 28, weight: 400, color: NOTE },
        { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    sga: {
      blocks: [{ x: 2429, top: 1115, anchor: 'start', lineGap: 8, lines: [
        { text: 'SG&A ($1.7B)', size: 31, weight: 800 },
        { text: '18% of revenue', size: 28, weight: 400, color: NOTE },
        { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    other_opex: {
      blocks: [{ x: 2425, top: 1268, anchor: 'start', lineGap: 8, lines: [
        { text: 'Other ($0.3B)', size: 31, weight: 800 },
        { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
        { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
  };

  const zhLayoutLabels = {
    repatha: sourceLabel('Repatha', 264, 341, '同比 +40%', 174, 406),
    prolia: sourceLabel('Prolia', 388, 465, '同比 +9%', 152, 377),
    evenity: sourceLabel('EVENITY', 526, 598, '同比 +36%', 176, 402),
    blincyto: sourceLabel('BLINCYTO', 643, 714, '同比 +20%', 195),
    tezspire: sourceLabel('Tezspire', 774, 843, '同比 +40%', 177, 398),
    tepezza: sourceLabel('Tepezza', 886, 956, '同比 +15%', 177, 398),
    other_products: { blocks: [
      { x: 381, top: 1144, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] },
      { x: 500, top: 1007, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 34, weight: 400 },
        { text: '同比 +5%', size: 27, weight: 400, color: NOTE },
      ] },
    ] },
    product_sales: { blocks: [{ x: 876, top: 477, anchor: 'middle', lineGap: 9, lines: [
      { text: '产品销售', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +12%', size: 28, weight: 400, color: NOTE },
    ] }] },
    other_revenue: { blocks: [{ x: 876, top: 1155, anchor: 'middle', lineGap: 9, lines: [
      { text: '其他', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +19%', size: 28, weight: 400, color: NOTE },
    ] }] },
    revenue: { blocks: [{ x: 1249, top: 646, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +12%', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1623, top: 452, anchor: 'middle', lineGap: 9, lines: [
      { text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 68%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +7 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_sales: { blocks: [{ x: 1623, top: 1140, anchor: 'middle', lineGap: 8, lines: [
      { text: '销售成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1996, top: 328, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 26%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1996, top: 954, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 },
    ] }] },
    other_income: { blocks: [{ x: 2184, top: 268, anchor: 'middle', lineGap: 8, lines: [
      { text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2438, top: 352, anchor: 'start', lineGap: 9, lines: [
      { text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 21%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +23 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    interest: { blocks: [{ x: 2461, top: 685, anchor: 'start', lineGap: 7, lines: [
      { text: '利息', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    tax: { blocks: [{ x: 2474, top: 781, anchor: 'start', lineGap: 7, lines: [
      { text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: 2433, top: 948, anchor: 'start', lineGap: 8, lines: [
      { text: '研发（$1.9B）', size: 31, weight: 800 },
      { text: '占收入 20%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    sga: { blocks: [{ x: 2410, top: 1115, anchor: 'start', lineGap: 8, lines: [
      { text: '销售、一般及管理费用（$1.7B）', size: 17, weight: 800 },
      { text: '占收入 18%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    other_opex: { blocks: [{ x: 2425, top: 1268, anchor: 'start', lineGap: 8, lines: [
      { text: '其他（$0.3B）', size: 31, weight: 800 },
      { text: '占收入 3%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amgen-q3-fy25',
    name: 'Amgen · Q3 FY25',
    company: 'Amgen',
    meta: {
      company: 'Amgen',
      title: 'Amgen Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amgen-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2160,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: BLUE_LABEL,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
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
        repatha: { x: 465, y: 347, width: 72, height: 19 },
        prolia: { x: 465, y: 474, width: 72, height: 27 },
        evenity: { x: 465, y: 615, width: 72, height: 13 },
        blincyto: { x: 465, y: 733, width: 73, height: 9 },
        tezspire: { x: 465, y: 858, width: 72, height: 8 },
        tepezza: { x: 465, y: 970, width: 72, height: 13 },
        other_products: { x: 465, y: 1096, width: 72, height: 131 },
        product_sales: { x: 838, y: 670, width: 73, height: 225 },
        other_revenue: { x: 839, y: 1129, width: 72, height: 9 },
        revenue: { x: 1213, y: 786, width: 72, height: 235 },
        gross_profit: { x: 1587, y: 686, width: 71, height: 159 },
        cost_of_sales: { x: 1586, y: 1043, width: 72, height: 76 },
        operating_profit: { x: 1960, y: 562, width: 72, height: 61 },
        operating_expenses: { x: 1960, y: 849, width: 73, height: 97 },
        other_income: { x: 2148, y: 353, width: 72, height: 67 },
        net_profit: { x: 2334, y: 379, width: 72, height: 95 },
        interest: { x: 2333, y: 711, width: 73, height: 17 },
        tax: { x: 2333, y: 807, width: 73, height: 16 },
        rnd: { x: 2333, y: 937, width: 73, height: 46 },
        sga: { x: 2333, y: 1105, width: 73, height: 42 },
        other_opex: { x: 2333, y: 1277, width: 73, height: 7 },
      },
      labels: layoutLabels,
    },
    nodes: [
      { id: 'repatha', type: 'source', label: 'Repatha', value: 0.8, notes: ['+40% Y/Y'] },
      { id: 'prolia', type: 'source', label: 'Prolia', value: 1.1, notes: ['+9% Y/Y'] },
      { id: 'evenity', type: 'source', label: 'EVENITY', value: 0.5, notes: ['+36% Y/Y'] },
      { id: 'blincyto', type: 'source', label: 'BLINCYTO', value: 0.4, notes: ['+20% Y/Y'] },
      { id: 'tezspire', type: 'source', label: 'Tezspire', value: 0.4, notes: ['+40% Y/Y'] },
      { id: 'tepezza', type: 'source', label: 'Tepezza', value: 0.6, notes: ['+15% Y/Y'] },
      { id: 'other_products', type: 'source', label: 'Other', value: 5.3, notes: ['+5% Y/Y'] },
      { id: 'product_sales', type: 'hub', label: ['Product', 'sales'], value: 9.1, notes: ['+12% Y/Y'] },
      { id: 'other_revenue', type: 'source', label: 'Other', value: 0.4, notes: ['+19% Y/Y'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 9.6, notes: ['+12% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: ['Gross', 'profit'], value: 6.5, notes: ['68% margin', '+7pp Y/Y'] },
      { id: 'cost_of_sales', type: 'cost', label: 'Cost of sales', value: 3.1 },
      { id: 'operating_profit', type: 'profit', label: ['Operating', 'profit'], value: 2.5, notes: ['26% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 3.9 },
      { id: 'other_income', type: 'profit', label: 'Other', value: 2.1 },
      { id: 'net_profit', type: 'profit', label: ['Net', 'profit'], value: 3.2, notes: ['21% margin', '+23pp Y/Y'] },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.7 },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.7 },
      { id: 'rnd', type: 'cost', label: 'R&D', value: 1.9, notes: ['20% of revenue', '+3pp Y/Y'] },
      { id: 'sga', type: 'cost', label: 'SG&A', value: 1.7, notes: ['18% of revenue', '(1pp) Y/Y'] },
      { id: 'other_opex', type: 'cost', label: 'Other', value: 0.3, notes: ['3% of revenue', '+3pp Y/Y'] },
    ],
    links: [
      { source: 'repatha', target: 'product_sales', value: 0.8, sourceWidth: 19, targetWidth: 19, y0: 356.5, y1: 679.5, linkTint: BLUE_LINK },
      { source: 'prolia', target: 'product_sales', value: 1.1, sourceWidth: 27, targetWidth: 27, y0: 487.5, y1: 702.5, linkTint: BLUE_LINK },
      { source: 'evenity', target: 'product_sales', value: 0.5, sourceWidth: 13, targetWidth: 13, y0: 621.5, y1: 722.5, linkTint: BLUE_LINK },
      { source: 'blincyto', target: 'product_sales', value: 0.4, sourceWidth: 9, targetWidth: 9, y0: 737.5, y1: 733.5, linkTint: BLUE_LINK },
      { source: 'tezspire', target: 'product_sales', value: 0.4, sourceWidth: 8, targetWidth: 8, y0: 862, y1: 742, linkTint: BLUE_LINK },
      { source: 'tepezza', target: 'product_sales', value: 0.6, sourceWidth: 13, targetWidth: 13, y0: 976.5, y1: 752.5, linkTint: BLUE_LINK },
      { source: 'other_products', target: 'product_sales', value: 5.3, sourceWidth: 131, targetWidth: 136, y0: 1161.5, y1: 827, linkTint: BLUE_LINK },
      { source: 'product_sales', target: 'revenue', value: 9.1, sourceWidth: 225, targetWidth: 225, y0: 782.5, y1: 898.5, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.4, sourceWidth: 9, targetWidth: 9, y0: 1133.5, y1: 1016.5, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 6.5, sourceWidth: 159, targetWidth: 159, y0: 865.5, y1: 765.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.1, sourceWidth: 76, targetWidth: 76, y0: 983, y1: 1081, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 61, targetWidth: 61, y0: 716.5, y1: 592.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.9, sourceWidth: 97, targetWidth: 97, y0: 796.5, y1: 897.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 27, targetWidth: 27, y0: 575.5, y1: 460.5, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.7, sourceWidth: 17, targetWidth: 17, y0: 597.5, y1: 719.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 17, targetWidth: 16, y0: 614.5, y1: 815, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 2.1, sourceWidth: 67, targetWidth: 67, y0: 386.5, y1: 412.5, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.9, sourceWidth: 46, targetWidth: 46, y0: 872, y1: 960, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.7, sourceWidth: 43, targetWidth: 42, y0: 916.5, y1: 1126, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 0.3, sourceWidth: 8, targetWidth: 7, y0: 942, y1: 1280.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '安进 · 2025 财年第三季度',
        meta: {
          title: '安进 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 2160,
        },
        nodes: {
          repatha: { label: 'Repatha', notes: ['同比 +40%'] },
          prolia: { label: 'Prolia', notes: ['同比 +9%'] },
          evenity: { label: 'EVENITY', notes: ['同比 +36%'] },
          blincyto: { label: 'BLINCYTO', notes: ['同比 +20%'] },
          tezspire: { label: 'Tezspire', notes: ['同比 +40%'] },
          tepezza: { label: 'Tepezza', notes: ['同比 +15%'] },
          other_products: { label: '其他', notes: ['同比 +5%'] },
          product_sales: { label: ['产品', '销售'], notes: ['同比 +12%'] },
          other_revenue: { label: '其他', notes: ['同比 +19%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: ['毛', '利润'], notes: ['利润率 68%', '同比 +7 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: ['营业', '利润'], notes: ['利润率 26%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: ['净', '利润'], notes: ['利润率 21%', '同比 +23 个百分点'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 20%', '同比 +3 个百分点'] },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 18%', '同比 (1 个百分点)'] },
          other_opex: { label: '其他', notes: ['占收入 3%', '同比 +3 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

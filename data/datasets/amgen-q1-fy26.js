/* ====================================================================
 * Amgen - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/amgen-q1-fy26.png as a fixed
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
    repatha: sourceLabel('Repatha', 267, 340, '+34% Y/Y', 157, 405),
    prolia: sourceLabel('Prolia', 406, 481, '(34%) Y/Y', 107, 380),
    evenity: sourceLabel('EVENITY', 547, 615, '+27% Y/Y', 157, 406),
    blincyto: sourceLabel('BLINCYTO', 679, 749, '+12% Y/Y', 190, 421),
    tezspire: sourceLabel('Tezspire', 805, 872, '+20% Y/Y', 159, 407),
    tepezza: sourceLabel('Tepezza', 931, 1002, '+29% Y/Y', 152, 401),
    other_products: {
      blocks: [
        { x: 394, top: 1191, anchor: 'end', lines: [
          { text: 'Other', size: 40, weight: 800, textLength: 112 },
        ] },
        { x: 511, top: 1060, anchor: 'middle', lineGap: 9, lines: [
          { text: '$value', size: 34, weight: 400 },
          { text: '+4% Y/Y', size: 27, weight: 400, color: NOTE },
        ] },
      ],
    },
    product_sales: {
      blocks: [{ x: 871, top: 511, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Product', size: 40, weight: 800 },
        { text: 'sales', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    other_revenue: {
      blocks: [{ x: 869, top: 1191, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Other', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+45% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    revenue: {
      blocks: [{ x: 1247, top: 661, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Revenue', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    gross_profit: {
      blocks: [{ x: 1622, top: 528, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Gross profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '68% margin', size: 28, weight: 400, color: NOTE },
        { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    cost_of_sales: {
      blocks: [{ x: 1622, top: 1176, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Cost of sales', size: 35, weight: 800 },
        { text: '$value', size: 35, weight: 400 },
      ] }],
    },
    operating_profit: {
      blocks: [{ x: 1998, top: 422, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Operating profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '31% margin', size: 28, weight: 400, color: NOTE },
        { text: '+16pp Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1998, top: 954, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Operating', size: 39, weight: 800 },
        { text: 'expenses', size: 39, weight: 800 },
        { text: '$value', size: 38, weight: 400 },
      ] }],
    },
    other_income: {
      blocks: [{ x: 1828, top: 983, anchor: 'middle', lineGap: 8, lines: [
        { text: 'Other', size: 31, weight: 800 },
        { text: 'Income', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    net_profit: {
      blocks: [{ x: 2434, top: 441, anchor: 'start', lineGap: 9, lines: [
        { text: 'Net profit', size: 40, weight: 800 },
        { text: '$value', size: 39, weight: 400 },
        { text: '21% margin', size: 28, weight: 400, color: NOTE },
        { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    interest: {
      blocks: [{ x: 2463, top: 693, anchor: 'start', lineGap: 7, lines: [
        { text: 'Interest', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    tax: {
      blocks: [{ x: 2476, top: 807, anchor: 'start', lineGap: 7, lines: [
        { text: 'Tax', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    rnd: {
      blocks: [{ x: 2433, top: 995, anchor: 'start', lineGap: 8, lines: [
        { text: 'R&D ($1.7B)', size: 31, weight: 800 },
        { text: '20% of revenue', size: 28, weight: 400, color: NOTE },
        { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    sga: {
      blocks: [{ x: 2423, top: 1162, anchor: 'start', lineGap: 8, lines: [
        { text: 'SG&A ($1.6B)', size: 31, weight: 800 },
        { text: '19% of revenue', size: 28, weight: 400, color: NOTE },
        { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
  };

  const zhLayoutLabels = {
    repatha: sourceLabel('Repatha', 267, 340, '同比 +34%', 157, 405),
    prolia: sourceLabel('Prolia', 406, 481, '同比 (34%)', 107, 380),
    evenity: sourceLabel('EVENITY', 547, 615, '同比 +27%', 157, 406),
    blincyto: sourceLabel('BLINCYTO', 679, 749, '同比 +12%', 190, 421),
    tezspire: sourceLabel('Tezspire', 805, 872, '同比 +20%', 159, 407),
    tepezza: sourceLabel('Tepezza', 931, 1002, '同比 +29%', 152, 401),
    other_products: { blocks: [
      { x: 394, top: 1191, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] },
      { x: 511, top: 1060, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 34, weight: 400 },
        { text: '同比 +4%', size: 27, weight: 400, color: NOTE },
      ] },
    ] },
    product_sales: { blocks: [{ x: 871, top: 511, anchor: 'middle', lineGap: 9, lines: [
      { text: '产品销售', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +4%', size: 28, weight: 400, color: NOTE },
    ] }] },
    other_revenue: { blocks: [{ x: 869, top: 1191, anchor: 'middle', lineGap: 9, lines: [
      { text: '其他', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +45%', size: 28, weight: 400, color: NOTE },
    ] }] },
    revenue: { blocks: [{ x: 1247, top: 661, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 +6%', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1622, top: 528, anchor: 'middle', lineGap: 9, lines: [
      { text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 68%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +5 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_sales: { blocks: [{ x: 1622, top: 1176, anchor: 'middle', lineGap: 8, lines: [
      { text: '销售成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1998, top: 422, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 31%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +16 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1998, top: 954, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 },
    ] }] },
    other_income: { blocks: [{ x: 1828, top: 983, anchor: 'middle', lineGap: 8, lines: [
      { text: '其他收入', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2434, top: 441, anchor: 'start', lineGap: 9, lines: [
      { text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 21%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    interest: { blocks: [{ x: 2463, top: 693, anchor: 'start', lineGap: 7, lines: [
      { text: '利息', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    tax: { blocks: [{ x: 2476, top: 807, anchor: 'start', lineGap: 7, lines: [
      { text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: 2433, top: 995, anchor: 'start', lineGap: 8, lines: [
      { text: '研发（$1.7B）', size: 31, weight: 800 },
      { text: '占收入 20%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    sga: { blocks: [{ x: 2410, top: 1162, anchor: 'start', lineGap: 8, lines: [
      { text: '销售、一般及管理费用（$1.6B）', size: 17, weight: 800 },
      { text: '占收入 19%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amgen-q1-fy26',
    name: 'Amgen · Q1 FY26',
    company: 'Amgen',
    meta: {
      company: 'Amgen',
      title: 'Amgen Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amgen-q1-fy26.png', width: 2667, height: 1500 },
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
        repatha: { x: 465, y: 354, width: 72, height: 22 },
        prolia: { x: 465, y: 493, width: 72, height: 18 },
        evenity: { x: 465, y: 633, width: 72, height: 13 },
        blincyto: { x: 465, y: 766, width: 72, height: 9 },
        tezspire: { x: 465, y: 892, width: 72, height: 8 },
        tepezza: { x: 465, y: 1017, width: 72, height: 12 },
        other_products: { x: 465, y: 1147, width: 72, height: 130 },
        product_sales: { x: 838, y: 708, width: 73, height: 224 },
        other_revenue: { x: 833, y: 1164, width: 72, height: 8 },
        revenue: { x: 1213, y: 808, width: 72, height: 236 },
        gross_profit: { x: 1586, y: 711, width: 73, height: 160 },
        cost_of_sales: { x: 1586, y: 1086, width: 73, height: 73 },
        operating_profit: { x: 1960, y: 604, width: 73, height: 71 },
        operating_expenses: { x: 1960, y: 850, width: 75, height: 88 },
        other_income: { x: 1789, y: 970, width: 70, height: 2 },
        net_profit: { x: 2333, y: 483, width: 72, height: 48 },
        interest: { x: 2333, y: 723, width: 72, height: 15 },
        tax: { x: 2333, y: 842, width: 72, height: 5 },
        rnd: { x: 2333, y: 1007, width: 72, height: 45 },
        sga: { x: 2333, y: 1179, width: 72, height: 42 },
      },
      labels: layoutLabels,
    },
    nodes: [
      { id: 'repatha', type: 'source', label: 'Repatha', value: 0.9, notes: ['+34% Y/Y'] },
      { id: 'prolia', type: 'source', label: 'Prolia', value: 0.7, notes: ['(34%) Y/Y'] },
      { id: 'evenity', type: 'source', label: 'EVENITY', value: 0.6, notes: ['+27% Y/Y'] },
      { id: 'blincyto', type: 'source', label: 'BLINCYTO', value: 0.4, notes: ['+12% Y/Y'] },
      { id: 'tezspire', type: 'source', label: 'Tezspire', value: 0.3, notes: ['+20% Y/Y'] },
      { id: 'tepezza', type: 'source', label: 'Tepezza', value: 0.5, notes: ['+29% Y/Y'] },
      { id: 'other_products', type: 'source', label: 'Other', value: 4.8, notes: ['+4% Y/Y'] },
      { id: 'product_sales', type: 'hub', label: ['Product', 'sales'], value: 8.2, notes: ['+4% Y/Y'] },
      { id: 'other_revenue', type: 'source', label: 'Other', value: 0.4, notes: ['+45% Y/Y'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 8.6, notes: ['+6% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 5.9, notes: ['68% margin', '+5pp Y/Y'] },
      { id: 'cost_of_sales', type: 'cost', label: 'Cost of sales', value: 2.7 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 2.7, notes: ['31% margin', '+16pp Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 3.3 },
      { id: 'other_income', type: 'profit', label: ['Other', 'Income'], value: 0.1 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 1.8, notes: ['21% margin', '(0pp) Y/Y'] },
      { id: 'interest', type: 'cost', label: 'Interest', value: 0.7 },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'rnd', type: 'cost', label: 'R&D', value: 1.7, notes: ['20% of revenue', '+2pp Y/Y'] },
      { id: 'sga', type: 'cost', label: 'SG&A', value: 1.6, notes: ['19% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'repatha', target: 'product_sales', value: 0.9, sourceWidth: 22, targetWidth: 25, y0: 365, y1: 720.5, linkTint: BLUE_LINK },
      { source: 'prolia', target: 'product_sales', value: 0.7, sourceWidth: 18, targetWidth: 19, y0: 502, y1: 742.5, linkTint: BLUE_LINK },
      { source: 'evenity', target: 'product_sales', value: 0.6, sourceWidth: 13, targetWidth: 16, y0: 639.5, y1: 760, linkTint: BLUE_LINK },
      { source: 'blincyto', target: 'product_sales', value: 0.4, sourceWidth: 9, targetWidth: 11, y0: 770.5, y1: 773.5, linkTint: BLUE_LINK },
      { source: 'tezspire', target: 'product_sales', value: 0.3, sourceWidth: 8, targetWidth: 8, y0: 896, y1: 783, linkTint: BLUE_LINK },
      { source: 'tepezza', target: 'product_sales', value: 0.5, sourceWidth: 12, targetWidth: 14, y0: 1023, y1: 794, linkTint: BLUE_LINK },
      { source: 'other_products', target: 'product_sales', value: 4.8, sourceWidth: 130, targetWidth: 131, y0: 1212, y1: 866.5, linkTint: BLUE_LINK },
      { source: 'product_sales', target: 'revenue', value: 8.2, sourceWidth: 224, targetWidth: 224, y0: 820, y1: 920, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.4, sourceWidth: 8, targetWidth: 12, y0: 1168, y1: 1038, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 5.9, sourceWidth: 159, targetWidth: 160, y0: 887.5, y1: 791, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2.7, sourceWidth: 77, targetWidth: 73, y0: 1005.5, y1: 1122.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 71, targetWidth: 71, y0: 746.5, y1: 639.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.2, sourceWidth: 89, targetWidth: 86, y0: 826.5, y1: 893, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 46, targetWidth: 48, y0: 627, y1: 507, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.7, sourceWidth: 16, targetWidth: 15, y0: 658, y1: 730.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 9, targetWidth: 5, y0: 670.5, y1: 844.5, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 971, y1: 937, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.7, sourceWidth: 45, targetWidth: 45, y0: 872.5, y1: 1029.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.6, sourceWidth: 43, targetWidth: 42, y0: 916.5, y1: 1200, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '安进 · 2026 财年第一季度',
        meta: {
          title: '安进 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 2160,
        },
        nodes: {
          repatha: { label: 'Repatha', notes: ['同比 +34%'] },
          prolia: { label: 'Prolia', notes: ['同比 (34%)'] },
          evenity: { label: 'EVENITY', notes: ['同比 +27%'] },
          blincyto: { label: 'BLINCYTO', notes: ['同比 +12%'] },
          tezspire: { label: 'Tezspire', notes: ['同比 +20%'] },
          tepezza: { label: 'Tepezza', notes: ['同比 +29%'] },
          other_products: { label: '其他', notes: ['同比 +4%'] },
          product_sales: { label: ['产品', '销售'], notes: ['同比 +4%'] },
          other_revenue: { label: '其他', notes: ['同比 +45%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 +5 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +16 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 (0 个百分点)'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 20%', '同比 +2 个百分点'] },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 19%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

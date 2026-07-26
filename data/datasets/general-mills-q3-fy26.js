/* General Mills — Q3 FY26 income statement ($B).
 * Reconstructed from input/processed/general-mills-q3-fy26.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/general-mills.js. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const SOURCE = '#234291';
  const SOURCE_LINK = '#95a3c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_X = 2520;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap || 9,
    lines,
  });

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2280"
      data-link-anchor-y="486">
      <path d="M2194 515H2266C2290 515 2291 461 2305 461"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2235" y="560" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收入' : 'Other'}</text>
      <text x="2235" y="601" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$9M</text>
    </g>`;

  const labels = (zh) => {
    const text = zh
      ? {
          northAmericaRetail: ['北美零售'],
          pet: ['宠物业务'],
          northAmericaFoodservice: ['北美餐饮服务'],
          international: ['国际业务'],
          netSales: '净销售额',
          grossProfit: '毛利润',
          costOfSales: '销售成本',
          operatingProfit: '营业利润',
          sga: ['销售、一般及', '管理费用'],
          other: '其他',
          netProfit: '净利润',
          tax: '税费',
          interest: '利息',
          yoy14: '同比 (14%)',
          yoy12: '同比 +12%',
          yoy15: '同比 +15%',
          yoy24: '同比 (24%)',
          yoy8: '同比 (8%)',
          margin17: '分部利润率 17%',
          margin5: '分部利润率 5%',
          margin16: '分部利润率 16%',
          margin11: '分部利润率 11%',
          margin31: '利润率 31%',
          margin12: '利润率 12%',
          margin7: '利润率 7%',
          pp3: '同比 (3 个百分点)',
          pp7: '同比 (7 个百分点)',
          pp6: '同比 (6 个百分点)',
        }
      : {
          northAmericaRetail: ['North America', 'Retail'],
          pet: ['Pet'],
          northAmericaFoodservice: ['North America', 'Foodservice'],
          international: ['International'],
          netSales: 'Net sales',
          grossProfit: 'Gross profit',
          costOfSales: 'Cost of sales',
          operatingProfit: 'Operating profit',
          sga: ['SG&A', 'expenses'],
          other: 'Other',
          netProfit: 'Net profit',
          tax: 'Tax',
          interest: 'Interest',
          yoy14: '(14%) Y/Y',
          yoy12: '+12% Y/Y',
          yoy15: '+15% Y/Y',
          yoy24: '(24%) Y/Y',
          yoy8: '(8%) Y/Y',
          margin17: '17% segment margin',
          margin5: '5% segment margin',
          margin16: '16% segment margin',
          margin11: '11% segment margin',
          margin31: '31% margin',
          margin12: '12% margin',
          margin7: '7% margin',
          pp3: '(3pp) Y/Y',
          pp7: '(7pp) Y/Y',
          pp6: '(6pp) Y/Y',
        };

    const source = (valueTop, nameTop, marginTop, name, yoy, margin) => ({
      blocks: [
        block(472, valueTop, [
          line('$value', 40),
          line(yoy, 29, { color: NOTE }),
        ], { lineGap: 12 }),
        block(268, nameTop, name.map((item) => line(item, zh ? 37 : 40, { weight: 800 })), {
          lineGap: 7,
        }),
        block(268, marginTop, [line(margin, 29, { color: NOTE })]),
      ],
    });

    return {
      north_america_retail: source(406, zh ? 578 : 553, zh ? 634 : 660, text.northAmericaRetail, text.yoy14, text.margin17),
      pet: source(757, zh ? 851 : 849, 892, text.pet, text.yoy12, text.margin5),
      north_america_foodservice: source(960, zh ? 1052 : 1029, zh ? 1105 : 1135, text.northAmericaFoodservice, text.yoy15, text.margin16),
      international: source(1175, zh ? 1268 : 1267, 1321, text.international, text.yoy24, text.margin11),
      revenue: {
        blocks: [
          block(940, 610, [
            line(text.netSales, 40, { weight: 800 }),
            line('$value', 40),
            line(text.yoy8, 29, { color: NOTE }),
          ], { lineGap: 12 }),
        ],
      },
      gross_profit: {
        blocks: [
          block(1407, 462, [
            line(text.grossProfit, 40, { weight: 800 }),
            line('$value', 40),
            line(text.margin31, 29, { color: NOTE }),
            line(text.pp3, 29, { color: NOTE }),
          ], { lineGap: 12 }),
        ],
      },
      cost_of_sales: {
        blocks: [
          block(1407, 1213, [
            line(text.costOfSales, 40, { weight: 800 }),
            line('$value', 40),
          ], { lineGap: 10 }),
        ],
      },
      operating_profit: {
        blocks: [
          block(1874, 353, [
            line(text.operatingProfit, 40, { weight: 800 }),
            line('$value', 40),
            line(text.margin12, 29, { color: NOTE }),
            line(text.pp7, 29, { color: NOTE }),
          ], { lineGap: 12 }),
        ],
      },
      sga: {
        blocks: [
          block(1874, zh ? 894 : 871, [
            ...text.sga.map((item) => line(item, zh ? 35 : 40, { weight: 800 })),
            line('$value', 40),
          ], { lineGap: 8 }),
        ],
      },
      other_operating_expenses: {
        blocks: [
          block(1874, 1084, [
            line(text.other, 31, { weight: 800 }),
            line('$value', 31),
          ], { lineGap: 8 }),
        ],
      },
      other_income: { blocks: [] },
      net_profit: {
        blocks: [
          block(RIGHT_X, 392, [
            line(text.netProfit, 40, { weight: 800 }),
            line('$value', 40),
            line(text.margin7, 29, { color: NOTE }),
            line(text.pp6, 29, { color: NOTE }),
          ], { lineGap: 12 }),
        ],
      },
      tax: {
        blocks: [
          block(RIGHT_X, 634, [
            line(text.tax, 31, { weight: 800 }),
            line('$value', 31),
          ], { lineGap: 8 }),
        ],
      },
      interest: {
        blocks: [
          block(RIGHT_X, 800, [
            line(text.interest, 31, { weight: 800 }),
            line('$value', 31),
          ], { lineGap: 8 }),
        ],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'general-mills-q3-fy26',
    name: 'General Mills · Q3 FY26',
    company: 'General Mills',
    meta: {
      company: 'General Mills',
      title: 'General Mills Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/general-mills-q3-fy26.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2510,
      periodX: 2238,
      periodY: 1304,
      periodNoteY: 1348,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE, label: SOURCE },
        hub: { node: SOURCE, label: SOURCE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SOURCE_LINK,
        hub: SOURCE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: otherIncomeGuide(false),
    rasterAnnotations: [
      {
        key: 'general-mills-company-logo',
        href: 'data/assets/raster-annotations/general-mills/company-logo-q3-fy26.png',
        x: 675,
        y: 248,
        width: 485,
        height: 290,
      },
      {
        key: 'north-america-retail-product-cluster',
        href: 'data/assets/raster-annotations/general-mills/north-america-retail-product-cluster-q3-fy26.png',
        x: 168,
        y: 394,
        width: 200,
        height: 150,
      },
      {
        key: 'pet-product-cluster',
        href: 'data/assets/raster-annotations/general-mills/pet-product-cluster-q3-fy26.png',
        x: 190,
        y: 700,
        width: 160,
        height: 140,
      },
      {
        key: 'north-america-foodservice-product-cluster',
        href: 'data/assets/raster-annotations/general-mills/north-america-foodservice-product-cluster-q3-fy26.png',
        x: 185,
        y: 922,
        width: 165,
        height: 104,
      },
      {
        key: 'international-product-cluster',
        href: 'data/assets/raster-annotations/general-mills/international-product-cluster-q3-fy26.png',
        x: 180,
        y: 1161,
        width: 180,
        height: 102,
      },
    ],
    layout: {
      scale: 75,
      routes: {
        other_income: { x: 2266, y: 515, width: 0, height: 1 },
      },
      nodes: {
        north_america_retail: { x: 436, y: 499, width: 73, height: 196 },
        pet: { x: 436, y: 850, width: 73, height: 54 },
        north_america_foodservice: { x: 436, y: 1053, width: 73, height: 49 },
        international: { x: 436, y: 1268, width: 73, height: 40 },
        revenue: { x: 903, y: 754, width: 73, height: 333 },
        gross_profit: { x: 1370, y: 648, width: 73, height: 102 },
        cost_of_sales: { x: 1370, y: 970, width: 73, height: 231 },
        operating_profit: { x: 1837, y: 539, width: 73, height: 40 },
        sga: { x: 1837, y: 798, width: 73, height: 61 },
        other_operating_expenses: { x: 1837, y: 1061, width: 73, height: 1 },
        net_profit: { x: 2304, y: 439, width: 73, height: 23 },
        tax: { x: 2304, y: 668, width: 73, height: 9 },
        interest: { x: 2304, y: 819, width: 73, height: 7 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      {
        id: 'operating_expenses',
        representation: 'data-only',
      },
      {
        id: 'other_income',
        representation: 'flow',
        label: 'Other',
        value: 0.009,
        valueText: '$9M',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      {
        id: 'north_america_retail',
        col: 0,
        order: 0,
        type: 'source',
        label: ['North America', 'Retail'],
        value: 2.6,
        notes: ['(14%) Y/Y', '17% segment margin'],
      },
      {
        id: 'pet',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Pet',
        value: 0.7,
        notes: ['+12% Y/Y', '5% segment margin'],
      },
      {
        id: 'north_america_foodservice',
        col: 0,
        order: 2,
        type: 'source',
        label: ['North America', 'Foodservice'],
        value: 0.6,
        notes: ['+15% Y/Y', '16% segment margin'],
      },
      {
        id: 'international',
        col: 0,
        order: 3,
        type: 'source',
        label: 'International',
        value: 0.5,
        notes: ['(24%) Y/Y', '11% segment margin'],
      },
      {
        id: 'revenue',
        col: 1,
        order: 0,
        type: 'hub',
        label: 'Net sales',
        value: 4.4,
        notes: ['(8%) Y/Y'],
      },
      {
        id: 'gross_profit',
        col: 2,
        order: 0,
        type: 'profit',
        label: 'Gross profit',
        value: 1.4,
        notes: ['31% margin', '(3pp) Y/Y'],
      },
      {
        id: 'cost_of_sales',
        col: 2,
        order: 1,
        type: 'cost',
        label: 'Cost of sales',
        value: 3.1,
      },
      {
        id: 'operating_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Operating profit',
        value: 0.5,
        notes: ['12% margin', '(7pp) Y/Y'],
      },
      {
        id: 'sga',
        col: 3,
        order: 1,
        type: 'cost',
        label: ['SG&A', 'expenses'],
        value: 0.8,
      },
      {
        id: 'other_operating_expenses',
        col: 3,
        order: 2,
        type: 'cost',
        label: 'Other',
        value: 0.029,
        valueText: '($29M)',
      },
      {
        id: 'net_profit',
        col: 5,
        order: 0,
        type: 'profit',
        label: 'Net profit',
        value: 0.3,
        notes: ['7% margin', '(6pp) Y/Y'],
      },
      {
        id: 'tax',
        col: 5,
        order: 1,
        type: 'cost',
        label: 'Tax',
        value: 0.1,
      },
      {
        id: 'interest',
        col: 5,
        order: 2,
        type: 'cost',
        label: 'Interest',
        value: 0.1,
      },
    ],
    links: [
      {
        source: 'north_america_retail',
        target: 'revenue',
        value: 2.6,
        sourceWidth: 196,
        targetWidth: 194,
        y0: 597,
        y1: 851,
        sourceOrder: 0,
        targetOrder: 0,
      },
      {
        source: 'pet',
        target: 'revenue',
        value: 0.7,
        sourceWidth: 54,
        targetWidth: 53,
        y0: 877,
        y1: 974.5,
        sourceOrder: 0,
        targetOrder: 1,
      },
      {
        source: 'north_america_foodservice',
        target: 'revenue',
        value: 0.6,
        sourceWidth: 49,
        targetWidth: 48,
        y0: 1077.5,
        y1: 1025,
        sourceOrder: 0,
        targetOrder: 2,
      },
      {
        source: 'international',
        target: 'revenue',
        value: 0.5,
        sourceWidth: 38,
        targetWidth: 38,
        y0: 1287,
        y1: 1068,
        sourceOrder: 0,
        targetOrder: 3,
      },
      {
        source: 'revenue',
        target: 'gross_profit',
        value: 1.4,
        sourceWidth: 102,
        targetWidth: 102,
        y0: 805,
        y1: 699,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'revenue',
        target: 'cost_of_sales',
        value: 3.1,
        sourceWidth: 231,
        targetWidth: 231,
        y0: 971.5,
        y1: 1085.5,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'gross_profit',
        target: 'operating_profit',
        value: 0.5,
        sourceWidth: 39,
        targetWidth: 40,
        y0: 667.5,
        y1: 559,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'gross_profit',
        target: 'sga',
        value: 0.8,
        sourceWidth: 60,
        targetWidth: 61,
        y0: 717,
        y1: 828.5,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'gross_profit',
        target: 'other_operating_expenses',
        value: 0.029,
        sourceWidth: 3,
        targetWidth: 1,
        y0: 748.5,
        y1: 1061.5,
        sourceOrder: 2,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'operating_profit',
        target: 'net_profit',
        value: 0.3,
        sourceWidth: 24,
        targetWidth: 23,
        y0: 551,
        y1: 450.5,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 0.1,
        sourceWidth: 9,
        targetWidth: 9,
        y0: 567.5,
        y1: 672.5,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'operating_profit',
        target: 'interest',
        value: 0.1,
        sourceWidth: 7,
        targetWidth: 7,
        y0: 575.5,
        y1: 822.5,
        sourceOrder: 2,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        sourceRoute: 'other_income',
        target: 'net_profit',
        value: 0.009,
        sourceWidth: 2,
        targetWidth: 2,
        y0: 515,
        y1: 461,
        sourceOrder: 0,
        targetOrder: 1,
        interactionOnly: true,
        linkTint: GREEN_LINK,
      },
    ],
    i18n: {
      zh: {
        name: '通用磨坊 · 2026 财年第三季度',
        meta: {
          title: '通用磨坊 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 2 月',
          titleSize: 112,
          titleTextLength: 1780,
        },
        annotationsSvg: otherIncomeGuide(true),
        nonNodeMetrics: {
          other_income: { label: '其他收入' },
        },
        nodes: {
          north_america_retail: {
            label: '北美零售',
            notes: ['同比 (14%)', '分部利润率 17%'],
          },
          pet: {
            label: '宠物业务',
            notes: ['同比 +12%', '分部利润率 5%'],
          },
          north_america_foodservice: {
            label: '北美餐饮服务',
            notes: ['同比 +15%', '分部利润率 16%'],
          },
          international: {
            label: '国际业务',
            notes: ['同比 (24%)', '分部利润率 11%'],
          },
          revenue: { label: '净销售额', notes: ['同比 (8%)'] },
          gross_profit: {
            label: '毛利润',
            notes: ['利润率 31%', '同比 (3 个百分点)'],
          },
          cost_of_sales: { label: '销售成本' },
          operating_profit: {
            label: '营业利润',
            notes: ['利润率 12%', '同比 (7 个百分点)'],
          },
          sga: { label: '销售、一般及管理费用' },
          other_operating_expenses: { label: '其他' },
          net_profit: {
            label: '净利润',
            notes: ['利润率 7%', '同比 (6 个百分点)'],
          },
          tax: { label: '税费' },
          interest: { label: '利息' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

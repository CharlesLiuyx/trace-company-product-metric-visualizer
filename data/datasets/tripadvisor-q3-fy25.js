/* Tripadvisor — Q3 FY25 income statement ($M).
 * Reconstructed from input/processed/tripadvisor-q3-fy25.png as a measured,
 * fixed-layout d3-sankey. Publisher attribution is intentionally not rendered. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const TEAL = '#34e0a1';
  const TEAL_LINK = '#9ce9cd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const DARK = '#000000';
  const RIGHT_LABEL_X = 2491;

  const labels = (zh) => {
    const t = zh ? {
      tripadvisor: '猫途鹰',
      tripadvisorDescription: ['品牌酒店、展示平台', '体验活动及餐饮', '调整后利润率 25%'],
      tripadvisorYoy: '同比 (8%)',
      viator: '体验业务',
      viatorDescription: ['观光、活动及景点', '调整后利润率 17%'],
      viatorYoy: '同比 +9%',
      thefork: '餐厅预订',
      theforkDescription: ['餐厅预订', '调整后利润率 22%'],
      theforkYoy: '同比 +29%',
      revenue: '收入',
      revenueYoy: '同比 +4%',
      gross: '毛利润',
      grossMargin: '利润率 93%',
      grossYoy: '同比 +0 个百分点',
      cost: ['收入', '成本'],
      operatingProfit: '营业利润',
      operatingMargin: '利润率 13%',
      operatingYoy: '同比 +0 个百分点',
      netProfit: '净利润',
      netMargin: '利润率 10%',
      netYoy: '同比 +2 个百分点',
      operatingExpenses: ['运营', '费用'],
      eliminations: '抵销',
      tax: '税费及其他',
      sm: '销售与营销（$227M）',
      personnel: '人员（$147M）',
      technology: '技术（$26M）',
      da: '折旧与摊销（$24M）',
      ga: '管理费用（$18M）',
      smNotes: ['占收入 41%', '同比 +1 个百分点'],
      personnelNotes: ['占收入 27%', '同比 (1 个百分点)'],
      technologyNotes: ['占收入 5%', '同比 +0 个百分点'],
      daNotes: ['占收入 4%', '同比 +0 个百分点'],
      gaNotes: ['占收入 3%', '同比 +0 个百分点'],
    } : {
      tripadvisor: 'Tripadvisor',
      tripadvisorDescription: ['Branded hotels,', 'display & platform,', 'experiences & dining', '25% adjusted margin'],
      tripadvisorYoy: '(8%) Y/Y',
      viator: 'Viator',
      viatorDescription: ['Tours, activities', '& attractions', '17% adjusted margin'],
      viatorYoy: '+9% Y/Y',
      thefork: 'TheFork',
      theforkDescription: ['Restaurant', 'reservations', '22% adjusted margin'],
      theforkYoy: '+29% Y/Y',
      revenue: 'Revenue',
      revenueYoy: '+4% Y/Y',
      gross: 'Gross profit',
      grossMargin: '93% margin',
      grossYoy: '+0pp Y/Y',
      cost: ['Cost of', 'revenue'],
      operatingProfit: 'Operating profit',
      operatingMargin: '13% margin',
      operatingYoy: '(0pp) Y/Y',
      netProfit: 'Net profit',
      netMargin: '10% margin',
      netYoy: '+2pp Y/Y',
      operatingExpenses: ['Operating', 'expenses'],
      eliminations: 'Eliminations',
      tax: 'Tax & other',
      sm: 'S&M ($227M)',
      personnel: 'Personnel ($147M)',
      technology: 'Technology ($26M)',
      da: 'D&A ($24M)',
      ga: 'G&A ($18M)',
      smNotes: ['41% of revenue', '+1pp Y/Y'],
      personnelNotes: ['27% of revenue', '(1pp) Y/Y'],
      technologyNotes: ['5% of revenue', '+0pp Y/Y'],
      daNotes: ['4% of revenue', '+0pp Y/Y'],
      gaNotes: ['3% of revenue', '(0pp) Y/Y'],
    };
    const sourceLabel = (
      valueTop,
      valueYoy,
      nameX,
      nameTop,
      name,
      descriptionX,
      descriptionTop,
      description
    ) => ({
      blocks: [
        {
          x: 424,
          top: valueTop,
          anchor: 'middle',
          lineGap: 14,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: valueYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: nameX,
          top: nameTop,
          anchor: 'end',
          lineGap: 8,
          lines: [{ text: name, size: 39, weight: 800 }],
        },
        {
          x: descriptionX,
          top: descriptionTop,
          anchor: 'end',
          lineGap: 11,
          lines: description.map((text) => ({ text, size: 27, weight: 400, color: NOTE })),
        },
      ],
    });
    const expense = (top, text, notes) => ({
      blocks: [{
        x: RIGHT_LABEL_X,
        top,
        anchor: 'middle',
        lineGap: 13,
        lines: [
          { text, size: 31, weight: 800 },
          ...notes.map((value) => ({ text: value, size: 27, weight: 400, color: NOTE })),
        ],
      }],
    });
    return {
      tripadvisor: sourceLabel(370, t.tripadvisorYoy, 353, 460, t.tripadvisor, 370, 511, t.tripadvisorDescription),
      viator: sourceLabel(669, t.viatorYoy, 306, 774, t.viator, 380, 824, t.viatorDescription),
      thefork: sourceLabel(979, t.theforkYoy, 318, 1067, t.thefork, 370, 1115, t.theforkDescription),
      gross_segment_revenue: { blocks: [] },
      revenue: {
        blocks: [{
          x: 1168,
          top: 490,
          anchor: 'middle',
          lineGap: 13,
          lines: [
            { text: t.revenue, size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t.revenueYoy, size: 27, weight: 400, color: NOTE },
          ],
        }],
      },
      gross_profit: {
        blocks: [{
          x: 1547,
          top: 366,
          anchor: 'middle',
          lineGap: 13,
          lines: [
            { text: t.gross, size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t.grossMargin, size: 27, weight: 400, color: NOTE },
            { text: t.grossYoy, size: 27, weight: 400, color: NOTE },
          ],
        }],
      },
      cost_of_revenue: {
        blocks: [{
          x: 1547,
          top: 1105,
          anchor: 'middle',
          lineGap: 11,
          lines: [
            ...t.cost.map((text) => ({ text, size: 36, weight: 800 })),
            { text: '$value', size: 36, weight: 400 },
          ],
        }],
      },
      operating_profit: {
        blocks: [{
          x: 1918,
          top: 242,
          anchor: 'middle',
          lineGap: 13,
          lines: [
            { text: t.operatingProfit, size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t.operatingMargin, size: 27, weight: 400, color: NOTE },
            { text: t.operatingYoy, size: 27, weight: 400, color: NOTE },
          ],
        }],
      },
      operating_expenses: {
        blocks: [{
          x: 1918,
          top: 949,
          anchor: 'middle',
          lineGap: 5,
          lines: [
            ...t.operatingExpenses.map((text) => ({ text, size: 40, weight: 800 })),
            { text: '$value', size: 39, weight: 400 },
          ],
        }],
      },
      net_profit: {
        blocks: [{
          x: 2492,
          top: 287,
          anchor: 'middle',
          lineGap: 13,
          lines: [
            { text: t.netProfit, size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t.netMargin, size: 27, weight: 400, color: NOTE },
            { text: t.netYoy, size: 27, weight: 400, color: NOTE },
          ],
        }],
      },
      tax_other: {
        blocks: [{
          x: 2491,
          top: 523,
          anchor: 'middle',
          lineGap: 7,
          lines: [
            { text: t.tax, size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        }],
      },
      eliminations: {
        blocks: [{
          x: 1168,
          top: 1102,
          anchor: 'middle',
          lineGap: 8,
          lines: [
            { text: t.eliminations, size: 36, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        }],
      },
      sm: expense(727, t.sm, t.smNotes),
      personnel: expense(890, t.personnel, t.personnelNotes),
      technology: expense(1047, t.technology, t.technologyNotes),
      da: expense(1166, t.da, t.daNotes),
      ga: expense(1274, t.ga, t.gaNotes),
    };
  };

  const rasterAnnotations = () => [
    { key: 'tripadvisor-company-logo', href: 'data/assets/raster-annotations/tripadvisor/company-logo.png', x: 602, y: 269, width: 763, height: 186 },
    { key: 'tripadvisor-hotel-other-icon', href: 'data/assets/raster-annotations/tripadvisor/hotel-other-icon.png', x: 4, y: 415, width: 146, height: 137 },
    { key: 'tripadvisor-experiences-icon', href: 'data/assets/raster-annotations/tripadvisor/experiences-icon.png', x: 2, y: 731, width: 132, height: 140 },
    { key: 'tripadvisor-thefork-icon', href: 'data/assets/raster-annotations/tripadvisor/thefork-icon.png', x: 4, y: 1024, width: 148, height: 140 },
  ];

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tripadvisor-q3-fy25',
    name: 'Tripadvisor · Q3 FY25',
    company: 'Tripadvisor',
    meta: {
      company: 'Tripadvisor',
      title: 'Tripadvisor Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/tripadvisor-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2450,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: TEAL, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: TEAL_LINK, hub: TEAL_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 27, lineGap: 8 },
    },
    rasterAnnotations: rasterAnnotations(),
    layout: {
      scale: 0.56,
      nodes: {
        tripadvisor: { x: 388, y: 469, width: 71, height: 130 },
        viator: { x: 388, y: 768, width: 71, height: 164 },
        thefork: { x: 388, y: 1078, width: 71, height: 34 },
        gross_segment_revenue: { x: 762, y: 550, width: 70, height: 332 },
        revenue: { x: 1136, y: 639, width: 70, height: 309 },
        eliminations: { x: 1136, y: 1068, width: 70, height: 19 },
        gross_profit: { x: 1507, y: 554, width: 70, height: 286 },
        cost_of_revenue: { x: 1509, y: 1069, width: 71, height: 20 },
        operating_profit: { x: 1883, y: 430, width: 71, height: 38 },
        operating_expenses: { x: 1883, y: 688, width: 71, height: 248 },
        net_profit: { x: 2256, y: 326, width: 71, height: 28 },
        tax_other: { x: 2256, y: 558, width: 71, height: 6 },
        sm: { x: 2256, y: 708, width: 71, height: 126 },
        personnel: { x: 2256, y: 904, width: 71, height: 80 },
        technology: { x: 2256, y: 1064, width: 71, height: 13 },
        da: { x: 2256, y: 1186, width: 71, height: 11 },
        ga: { x: 2256, y: 1291, width: 71, height: 9 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'tripadvisor', col: 0, order: 0, type: 'source', label: 'Tripadvisor', value: 235, notes: ['(8%) Y/Y', 'Branded hotels, display & platform, experiences & dining', '25% adjusted margin'] },
      { id: 'viator', col: 0, order: 1, type: 'source', label: 'Viator', value: 294, notes: ['+9% Y/Y', 'Tours, activities & attractions', '17% adjusted margin'] },
      { id: 'thefork', col: 0, order: 2, type: 'source', label: 'TheFork', value: 63, notes: ['+29% Y/Y', 'Restaurant reservations', '22% adjusted margin'] },
      { id: 'gross_segment_revenue', col: 1, order: 0, type: 'source', label: 'Company revenue before eliminations', value: 592 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 553, notes: ['+4% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -39 },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 512, notes: ['93% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 41 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 70, notes: ['13% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 442 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 53, notes: ['10% margin', '+2pp Y/Y'] },
      { id: 'tax_other', col: 6, order: 1, type: 'cost', label: 'Tax & other', value: 17 },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 227, notes: ['41% of revenue', '+1pp Y/Y'] },
      { id: 'personnel', col: 6, order: 3, type: 'cost', label: 'Personnel', value: 147, notes: ['27% of revenue', '(1pp) Y/Y'] },
      { id: 'technology', col: 6, order: 4, type: 'cost', label: 'Technology', value: 26, notes: ['5% of revenue', '+0pp Y/Y'] },
      { id: 'da', col: 6, order: 5, type: 'cost', label: 'D&A', value: 24, notes: ['4% of revenue', '+0pp Y/Y'] },
      { id: 'ga', col: 6, order: 6, type: 'cost', label: 'G&A', value: 18, notes: ['3% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'tripadvisor', target: 'gross_segment_revenue', value: 235, sourceWidth: 130, targetWidth: 132, y0: 534, y1: 616, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'viator', target: 'gross_segment_revenue', value: 294, sourceWidth: 164, targetWidth: 165, y0: 850, y1: 764.5, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'thefork', target: 'gross_segment_revenue', value: 63, sourceWidth: 34, targetWidth: 35, y0: 1095, y1: 864.5, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'revenue', value: 553, sourceWidth: 310, targetWidth: 309, y0: 705, y1: 793.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'eliminations', value: 39, sourceWidth: 22, targetWidth: 19, y0: 871, y1: 1077.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 512, sourceWidth: 287, targetWidth: 286, y0: 782.5, y1: 697, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 41, sourceWidth: 21, targetWidth: 20, y0: 937.5, y1: 1079, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 70, sourceWidth: 38, targetWidth: 38, y0: 573, y1: 449, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 442, sourceWidth: 248, targetWidth: 248, y0: 716, y1: 812, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 53, sourceWidth: 28, targetWidth: 28, y0: 444, y1: 340, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax_other', value: 17, sourceWidth: 10, targetWidth: 6, y0: 463, y1: 561, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 227, sourceWidth: 127, targetWidth: 126, y0: 751.5, y1: 771, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'personnel', value: 147, sourceWidth: 82, targetWidth: 80, y0: 856, y1: 944, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology', value: 26, sourceWidth: 15, targetWidth: 13, y0: 904.5, y1: 1070.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 24, sourceWidth: 14, targetWidth: 11, y0: 919, y1: 1191.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 18, sourceWidth: 10, targetWidth: 9, y0: 931, y1: 1295.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '猫途鹰 · 2025 财年第三季度',
        meta: {
          title: '猫途鹰 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          titleTextLength: 2120,
          hidePeriodStamp: true,
        },
        nodes: {
          tripadvisor: { label: '猫途鹰', notes: ['同比 (8%)', '品牌酒店、展示平台、体验活动及餐饮', '调整后利润率 25%'] },
          viator: { label: '体验业务', notes: ['同比 +9%', '观光、活动及景点', '调整后利润率 17%'] },
          thefork: { label: '餐厅预订', notes: ['同比 +29%', '餐厅预订', '调整后利润率 22%'] },
          gross_segment_revenue: { label: '抵销前公司收入' },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 93%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +0 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +2 个百分点'] },
          tax_other: { label: '税费及其他' },
          sm: { label: '销售与营销', notes: ['占收入 41%', '同比 +1 个百分点'] },
          personnel: { label: '人员', notes: ['占收入 27%', '同比 (1 个百分点)'] },
          technology: { label: '技术', notes: ['占收入 5%', '同比 +0 个百分点'] },
          da: { label: '折旧与摊销', notes: ['占收入 4%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 3%', '同比 +0 个百分点'] },
        },
        layout: { labels: labels(true) },
        rasterAnnotations: rasterAnnotations(),
      },
    },
  });
})();

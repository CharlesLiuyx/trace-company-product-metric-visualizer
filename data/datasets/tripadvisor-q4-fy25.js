/* Tripadvisor — Q4 FY25 income statement ($M).
 * Reconstructed from input/processed/tripadvisor-q4-fy25.png as a measured,
 * fixed-layout d3-sankey. Publisher attribution is intentionally not rendered. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const TEAL = '#3bd8a1';
  const TEAL_LINK = '#9ee6cf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#98cb93';
  const RED = '#dc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e18484';
  const NOTE = '#696969';
  const DARK = '#000000';
  const RIGHT_LABEL_X = 2497;

  const labels = (zh) => {
    const t = zh ? {
      hotels: ['酒店', '及其他'], hotelsDescription: ['品牌酒店、展示及平台、', '体验活动与餐饮', '调整后利润率 19%'], hotelsYoy: '同比 (15%)',
      experiences: '体验业务', experiencesDescription: ['观光、活动', '及景点', '调整后利润率 7%'], experiencesYoy: '同比 +10%',
      thefork: '餐厅预订', theforkDescription: ['餐饮预约服务', '调整后利润率 2%'], theforkYoy: '同比 +19%',
      revenue: '收入', revenueYoy: '同比 +0%', gross: '毛利润', grossMargin: '利润率 91%', grossYoy: '同比 (2 个百分点)',
      cost: ['收入', '成本'], operatingLoss: ['营业', '亏损'], operatingMargin: '利润率 (9%)', operatingYoy: '同比 (9 个百分点)',
      operatingExpenses: ['运营', '费用'], eliminations: '抵销',
      sm: '销售与营销（$175M）', personnel: '人员（$133M）', restructuring: '重组（$33M）', technology: '技术（$25M）', ga: '管理费用（$20M）', da: '折旧与摊销（$20M）',
      smNotes: ['占收入 43%', '同比 +6 个百分点'], personnelNotes: ['占收入 32%', '同比 (3 个百分点)'], restructuringNotes: ['占收入 8%', '同比 +3 个百分点'], technologyNotes: ['占收入 6%', '同比 +0 个百分点'], gaNotes: ['占收入 5%', '同比 +0 个百分点'], daNotes: ['占收入 5%', '同比 +0 个百分点'],
    } : {
      hotels: ['Hotel', '& Other'], hotelsDescription: ['Branded hotels,', 'display & platform,', 'experiences & dining', '19% adjusted margin'], hotelsYoy: '(15%) Y/Y',
      experiences: 'Experiences', experiencesDescription: ['Tours, activities', '& attractions', '7% adjusted margin'], experiencesYoy: '+10% Y/Y',
      thefork: 'TheFork', theforkDescription: ['Restaurant', 'reservations', '2% adjusted margin'], theforkYoy: '+19% Y/Y',
      revenue: 'Revenue', revenueYoy: '+0% Y/Y', gross: 'Gross profit', grossMargin: '91% margin', grossYoy: '(2pp) Y/Y',
      cost: ['Cost of', 'revenue'], operatingLoss: ['Operating', 'loss'], operatingMargin: '(9%) margin', operatingYoy: '(9pp) Y/Y',
      operatingExpenses: ['Operating', 'expenses'], eliminations: 'Eliminations',
      sm: 'S&M ($175M)', personnel: 'Personnel ($133M)', restructuring: 'Restructuring ($33M)', technology: 'Technology ($25M)', ga: 'G&A ($20M)', da: 'D&A ($20M)',
      smNotes: ['43% of revenue', '+6pp Y/Y'], personnelNotes: ['32% of revenue', '(3pp) Y/Y'], restructuringNotes: ['8% of revenue', '+3pp Y/Y'], technologyNotes: ['6% of revenue', '+0pp Y/Y'], gaNotes: ['5% of revenue', '+0pp Y/Y'], daNotes: ['5% of revenue', '+0pp Y/Y'],
    };
    const sourceLabel = (valueX, valueTop, valueYoy, nameX, nameTop, nameLines, descriptionTop, description) => ({ blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: valueYoy, size: 27, weight: 400, color: NOTE }] },
      { x: nameX, top: nameTop, anchor: 'end', lineGap: 8, lines: nameLines.map((text) => ({ text, size: 39, weight: 800 })) },
      { x: nameX, top: descriptionTop, anchor: 'end', lineGap: 7, lines: description.map((text) => ({ text, size: 27, weight: 400, color: NOTE })) },
    ] });
    const expense = (top, text, notes) => ({ blocks: [{ x: RIGHT_LABEL_X, top, anchor: 'middle', lineGap: 7, lines: [
      { text, size: 31, weight: 800 },
      ...notes.map((value) => ({ text: value, size: 27, weight: 400, color: NOTE })),
    ] }] });
    return {
      hotels_other: sourceLabel(423.5, 323, t.hotelsYoy, 363, 398, t.hotels, 496, t.hotelsDescription),
      experiences: sourceLabel(423.5, 634, t.experiencesYoy, 363, 768, [t.experiences], 832, t.experiencesDescription),
      thefork: sourceLabel(423.5, 986, t.theforkYoy, 363, 1086, [t.thefork], 1131, t.theforkDescription),
      gross_segment_revenue: { blocks: [] },
      revenue: { blocks: [{ x: 1170, top: 485, anchor: 'middle', lineGap: 9, lines: [{ text: t.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.revenueYoy, size: 27, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1546, top: 378, anchor: 'middle', lineGap: 9, lines: [{ text: t.gross, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.grossMargin, size: 27, weight: 400, color: NOTE }, { text: t.grossYoy, size: 27, weight: 400, color: NOTE }] }] },
      cost_of_revenue: { blocks: [{ x: 1546, top: 1111, anchor: 'middle', lineGap: 8, lines: [...t.cost.map((text) => ({ text, size: 36, weight: 800 })), { text: '$value', size: 36, weight: 400 }] }] },
      operating_loss: { blocks: [{ x: 1761, top: 1135, anchor: 'middle', lineGap: 8, lines: [...t.operatingLoss.map((text) => ({ text, size: 40, weight: 800 })), { text: '$value', size: 39, weight: 400 }, { text: t.operatingMargin, size: 27, weight: 400, color: NOTE }, { text: t.operatingYoy, size: 27, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1921, top: 470, anchor: 'middle', lineGap: 9, lines: [...t.operatingExpenses.map((text) => ({ text, size: 40, weight: 800 })), { text: '$value', size: 39, weight: 400 }] }] },
      eliminations: { blocks: [{ x: 1170, top: 1162, anchor: 'middle', lineGap: 8, lines: [{ text: t.eliminations, size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
      sm: expense(418, t.sm, t.smNotes), personnel: expense(674, t.personnel, t.personnelNotes), restructuring: expense(858, t.restructuring, t.restructuringNotes),
      technology: expense(1004, t.technology, t.technologyNotes), ga: expense(1148, t.ga, t.gaNotes), da: expense(1295, t.da, t.daNotes),
    };
  };

  const rasterAnnotations = (hotelOtherY = 386) => [
    { key: 'tripadvisor-company-logo', href: 'data/assets/raster-annotations/tripadvisor/company-logo.png', x: 602, y: 270, width: 763, height: 186 },
    { key: 'tripadvisor-hotel-other-icon', href: 'data/assets/raster-annotations/tripadvisor/hotel-other-icon.png', x: 4, y: hotelOtherY, width: 146, height: 137 },
    { key: 'tripadvisor-experiences-icon', href: 'data/assets/raster-annotations/tripadvisor/experiences-icon.png', x: 2, y: 730, width: 132, height: 140 },
    { key: 'tripadvisor-thefork-icon', href: 'data/assets/raster-annotations/tripadvisor/thefork-icon.png', x: 2, y: 1031, width: 148, height: 140 },
  ];

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tripadvisor-q4-fy25',
    name: 'Tripadvisor · Q4 FY25',
    company: 'Tripadvisor',
    meta: {
      company: 'Tripadvisor', title: 'Tripadvisor Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Quarter ended Dec. 31, 2025', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/tripadvisor-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2450,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' }, allowRasterAnnotations: true,
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: TEAL, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: TEAL_LINK, hub: TEAL_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 27, lineGap: 8 },
    },
    rasterAnnotations: rasterAnnotations(),
    layout: {
      scale: 0.865,
      nodes: {
        hotels_other: { x: 387, y: 416, width: 73, height: 131 }, experiences: { x: 387, y: 722, width: 73, height: 176 }, thefork: { x: 387, y: 1076, width: 73, height: 50 },
        gross_segment_revenue: { x: 761, y: 540, width: 73, height: 358 }, revenue: { x: 1134, y: 624, width: 73, height: 356 }, eliminations: { x: 1134, y: 1138, width: 73, height: 1 },
        gross_profit: { x: 1510, y: 562, width: 72, height: 325 }, cost_of_revenue: { x: 1510, y: 1057, width: 72, height: 30 }, operating_loss: { x: 1725, y: 1078, width: 72, height: 30 },
        operating_expenses: { x: 1885, y: 623, width: 73, height: 356 }, sm: { x: 2255, y: 389, width: 73, height: 151 }, personnel: { x: 2255, y: 660, width: 73, height: 115 }, restructuring: { x: 2255, y: 888, width: 73, height: 29 },
        technology: { x: 2255, y: 1033, width: 73, height: 22 }, ga: { x: 2255, y: 1164, width: 73, height: 17 }, da: { x: 2255, y: 1300, width: 73, height: 17 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'hotels_other', col: 0, order: 0, type: 'source', label: ['Hotel', '& Other'], value: 151, notes: ['(15%) Y/Y', 'Branded hotels, display & platform, experiences & dining', '19% adjusted margin'] },
      { id: 'experiences', col: 0, order: 1, type: 'source', label: 'Experiences', value: 204, notes: ['+10% Y/Y', 'Tours, activities & attractions', '7% adjusted margin'] },
      { id: 'thefork', col: 0, order: 2, type: 'source', label: 'TheFork', value: 57, notes: ['+19% Y/Y', 'Restaurant reservations', '2% adjusted margin'] },
      { id: 'gross_segment_revenue', col: 1, order: 0, type: 'source', label: 'Company revenue before eliminations', value: 412 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 411, notes: ['+0% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 1 },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 376, notes: ['91% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 35 },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -35, notes: ['(9%) margin', '(9pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 411 },
      { id: 'sm', col: 6, order: 0, type: 'cost', label: 'S&M', value: 175, notes: ['43% of revenue', '+6pp Y/Y'] },
      { id: 'personnel', col: 6, order: 1, type: 'cost', label: 'Personnel', value: 133, notes: ['32% of revenue', '(3pp) Y/Y'] },
      { id: 'restructuring', col: 6, order: 2, type: 'cost', label: 'Restructuring', value: 33, notes: ['8% of revenue', '+3pp Y/Y'] },
      { id: 'technology', col: 6, order: 3, type: 'cost', label: 'Technology', value: 25, notes: ['6% of revenue', '+0pp Y/Y'] },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 20, notes: ['5% of revenue', '+0pp Y/Y'] },
      { id: 'da', col: 6, order: 5, type: 'cost', label: 'D&A', value: 20, notes: ['5% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'hotels_other', target: 'gross_segment_revenue', value: 151, sourceWidth: 131, targetWidth: 131, y0: 481.5, y1: 605.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'experiences', target: 'gross_segment_revenue', value: 204, sourceWidth: 176, targetWidth: 176, y0: 810, y1: 759, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'thefork', target: 'gross_segment_revenue', value: 57, sourceWidth: 50, targetWidth: 50, y0: 1101, y1: 872, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'revenue', value: 411, sourceWidth: 356, targetWidth: 356, y0: 718, y1: 802, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'eliminations', value: 1, sourceWidth: 1, targetWidth: 1, y0: 897.5, y1: 1138.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 376, sourceWidth: 325, targetWidth: 325, y0: 786.5, y1: 724.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 35, sourceWidth: 30, targetWidth: 30, y0: 964, y1: 1072, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 376, sourceWidth: 325, targetWidth: 325, y0: 724.5, y1: 785.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 35, sourceWidth: 30, targetWidth: 30, y0: 1093, y1: 963, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 175, sourceWidth: 151, targetWidth: 151, y0: 698.5, y1: 464.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'personnel', value: 133, sourceWidth: 115, targetWidth: 115, y0: 831.5, y1: 717.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 33, sourceWidth: 29, targetWidth: 29, y0: 903.5, y1: 902.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology', value: 25, sourceWidth: 22, targetWidth: 22, y0: 929, y1: 1044, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 20, sourceWidth: 17, targetWidth: 17, y0: 948.5, y1: 1172.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 20, sourceWidth: 22, targetWidth: 17, y0: 968, y1: 1308.5, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '猫途鹰 · 2025 财年第四季度',
        meta: { title: '猫途鹰 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleTextLength: 2120 },
        nodes: {
          hotels_other: { label: ['酒店', '及其他'], notes: ['同比 (15%)', '品牌酒店、展示及平台、体验活动与餐饮', '调整后利润率 19%'] }, experiences: { label: '体验业务', notes: ['同比 +10%', '观光、活动及景点', '调整后利润率 7%'] }, thefork: { label: 'TheFork（餐厅预订）', notes: ['同比 +19%', '餐厅预订', '调整后利润率 2%'] },
          gross_segment_revenue: { label: '抵销前公司收入' }, revenue: { label: '收入', notes: ['同比 +0%'] }, eliminations: { label: '抵销' }, gross_profit: { label: '毛利润', notes: ['利润率 91%', '同比 (2 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (9%)', '同比 (9 个百分点)'] }, operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 43%', '同比 +6 个百分点'] }, personnel: { label: '人员', notes: ['占收入 32%', '同比 (3 个百分点)'] }, restructuring: { label: '重组', notes: ['占收入 8%', '同比 +3 个百分点'] }, technology: { label: '技术', notes: ['占收入 6%', '同比 +0 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 5%', '同比 +0 个百分点'] }, da: { label: '折旧与摊销', notes: ['占收入 5%', '同比 +0 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

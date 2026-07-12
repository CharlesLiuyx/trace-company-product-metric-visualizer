/* Tripadvisor — Q1 FY26 income statement ($M).
 * Reconstructed from input/processed/tripadvisor-q1-fy26.png as a measured,
 * fixed-layout d3-sankey. Publisher attribution is intentionally not rendered. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const TEAL = '#34e0a1';
  const TEAL_LINK = '#9ce9cd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9acc95';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#696969';
  const DARK = '#000000';
  const RIGHT_LABEL_X = 2497;

  const labels = (zh) => {
    const t = zh ? {
      experiences: '体验业务', experiencesDescription: ['观光与活动市场', '调整后利润率 (11%)'], experiencesYoy: '同比 +8%',
      hotels: ['酒店', '及其他'], hotelsDescription: ['传统媒体与广告', '调整后利润率 23%'], hotelsYoy: '同比 (20%)',
      thefork: '餐厅预订', theforkDescription: ['餐饮预约服务', '调整后利润率 8%'], theforkYoy: '同比 +23%',
      revenue: '收入', revenueYoy: '同比 (4%)', gross: '毛利润', grossMargin: '利润率 91%', grossYoy: '同比 (2 个百分点)',
      cost: ['收入', '成本'], operatingLoss: ['营业', '亏损'], operatingMargin: '利润率 (7%)', operatingYoy: '同比 (3 个百分点)',
      operatingExpenses: ['运营', '费用'], eliminations: '抵销',
      sm: '销售与营销（$178M）', personnel: '人员（$130M）', technology: '技术（$25M）', da: '折旧与摊销（$25M）', ga: '管理费用（$15M）', restructuring: '重组（$3M）',
      smNotes: ['占收入 46%', '同比 +3 个百分点'], personnelNotes: ['占收入 34%', '同比 (2 个百分点)'], technologyNotes: ['占收入 7%', '同比 +1 个百分点'], daNotes: ['占收入 6%', '同比 +1 个百分点'], gaNotes: ['占收入 3%', '同比 +0 个百分点'], restructuringNotes: [],
    } : {
      experiences: 'Experiences', experiencesDescription: ['Tours and activities', 'marketplace', '(11%) adjusted margin'], experiencesYoy: '+8% Y/Y',
      hotels: ['Hotels', '& Other'], hotelsDescription: ['Legacy media', 'and advertising', '23% adjusted margin'], hotelsYoy: '(20%) Y/Y',
      thefork: 'TheFork', theforkDescription: ['Restaurant', 'reservations', '8% adjusted margin'], theforkYoy: '+23% Y/Y',
      revenue: 'Revenue', revenueYoy: '(4%) Y/Y', gross: 'Gross profit', grossMargin: '91% margin', grossYoy: '(2pp) Y/Y',
      cost: ['Cost of', 'revenue'], operatingLoss: ['Operating', 'loss'], operatingMargin: '(7%) margin', operatingYoy: '(3pp) Y/Y',
      operatingExpenses: ['Operating', 'expenses'], eliminations: 'Eliminations',
      sm: 'S&M ($178M)', personnel: 'Personnel ($130M)', technology: 'Technology ($25M)', da: 'D&A ($25M)', ga: 'G&A ($15M)', restructuring: 'Restructuring ($3M)',
      smNotes: ['46% of revenue', '+3pp Y/Y'], personnelNotes: ['34% of revenue', '(2pp) Y/Y'], technologyNotes: ['7% of revenue', '+1pp Y/Y'], daNotes: ['6% of revenue', '+1pp Y/Y'], gaNotes: ['3% of revenue', '+0pp Y/Y'], restructuringNotes: [],
    };
    const sourceLabel = (valueTop, valueYoy, nameTop, nameLines, descriptionTop, description) => ({ blocks: [
      { x: 423.5, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: valueYoy, size: 27, weight: 400, color: NOTE }] },
      { x: 363, top: nameTop, anchor: 'end', lineGap: 8, lines: nameLines.map((text) => ({ text, size: 39, weight: 800 })) },
      { x: 363, top: descriptionTop, anchor: 'end', lineGap: 7, lines: description.map((text) => ({ text, size: 27, weight: 400, color: NOTE })) },
    ] });
    const expense = (top, text, notes) => ({ blocks: [{ x: RIGHT_LABEL_X, top, anchor: 'middle', lineGap: 7, lines: [
      { text, size: 31, weight: 800 }, ...notes.map((value) => ({ text: value, size: 27, weight: 400, color: NOTE })),
    ] }] });
    return {
      experiences: sourceLabel(368, t.experiencesYoy, 467, [t.experiences], 520, t.experiencesDescription),
      hotels_other: sourceLabel(688, t.hotelsYoy, 738, t.hotels, 833, t.hotelsDescription),
      thefork: sourceLabel(996, t.theforkYoy, 1098, [t.thefork], 1144, t.theforkDescription),
      gross_segment_revenue: { blocks: [] },
      revenue: { blocks: [{ x: 1170, top: 485, anchor: 'middle', lineGap: 9, lines: [{ text: t.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.revenueYoy, size: 27, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1546, top: 378, anchor: 'middle', lineGap: 9, lines: [{ text: t.gross, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.grossMargin, size: 27, weight: 400, color: NOTE }, { text: t.grossYoy, size: 27, weight: 400, color: NOTE }] }] },
      cost_of_revenue: { blocks: [{ x: 1546, top: 1168, anchor: 'middle', lineGap: 8, lines: [...t.cost.map((text) => ({ text, size: 36, weight: 800 })), { text: '$value', size: 36, weight: 400 }] }] },
      operating_loss: { blocks: [{ x: 1740, top: 1058, anchor: 'middle', lineGap: 8, lines: [...t.operatingLoss.map((text) => ({ text, size: 40, weight: 800 })), { text: '$value', size: 39, weight: 400 }, { text: t.operatingMargin, size: 27, weight: 400, color: NOTE }, { text: t.operatingYoy, size: 27, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1920, top: 470, anchor: 'middle', lineGap: 9, lines: [...t.operatingExpenses.map((text) => ({ text, size: 40, weight: 800 })), { text: '$value', size: 39, weight: 400 }] }] },
      eliminations: { blocks: [{ x: 1170, top: 1162, anchor: 'middle', lineGap: 8, lines: [{ text: t.eliminations, size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
      sm: expense(522, t.sm, t.smNotes), personnel: expense(738, t.personnel, t.personnelNotes), technology: expense(902, t.technology, t.technologyNotes),
      da: expense(1042, t.da, t.daNotes), ga: expense(1180, t.ga, t.gaNotes), restructuring: expense(1299, t.restructuring, t.restructuringNotes),
    };
  };

  const rasterAnnotations = () => [
    { key: 'tripadvisor-company-logo', href: 'data/assets/raster-annotations/tripadvisor/company-logo.png', x: 602, y: 270, width: 763, height: 186 },
    { key: 'tripadvisor-hotel-other-icon', href: 'data/assets/raster-annotations/tripadvisor/hotel-other-icon.png', x: 79, y: 322, width: 146, height: 137 },
    { key: 'tripadvisor-experiences-icon', href: 'data/assets/raster-annotations/tripadvisor/experiences-icon.png', x: 211, y: 319, width: 132, height: 140 },
    { key: 'tripadvisor-thefork-icon', href: 'data/assets/raster-annotations/tripadvisor/thefork-icon.png', x: 175, y: 961, width: 148, height: 140 },
  ];

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tripadvisor-q1-fy26',
    name: 'Tripadvisor · Q1 FY26',
    company: 'Tripadvisor',
    meta: {
      company: 'Tripadvisor', title: 'Tripadvisor Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Quarter ended Mar. 31, 2026', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/tripadvisor-q1-fy26.png', width: 2667, height: 1500 },
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
        experiences: { x: 387, y: 457, width: 73, height: 160 }, hotels_other: { x: 387, y: 780, width: 73, height: 150 }, thefork: { x: 387, y: 1086, width: 73, height: 55 },
        gross_segment_revenue: { x: 761, y: 555, width: 73, height: 365 }, revenue: { x: 1134, y: 627, width: 73, height: 363 }, eliminations: { x: 1134, y: 1146, width: 73, height: 1 },
        gross_profit: { x: 1508, y: 551, width: 73, height: 331 }, cost_of_revenue: { x: 1508, y: 1118, width: 73, height: 30 }, operating_loss: { x: 1705, y: 1012, width: 70, height: 23 },
        operating_expenses: { x: 1882, y: 629, width: 73, height: 356 }, sm: { x: 2255, y: 488, width: 73, height: 169 }, personnel: { x: 2255, y: 722, width: 73, height: 124 }, technology: { x: 2255, y: 940, width: 73, height: 25 },
        da: { x: 2255, y: 1076, width: 73, height: 24 }, ga: { x: 2255, y: 1194, width: 73, height: 13 }, restructuring: { x: 2255, y: 1320, width: 73, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'experiences', col: 0, order: 0, type: 'source', label: 'Experiences', value: 168, notes: ['+8% Y/Y', 'Tours and activities marketplace', '(11%) adjusted margin'] },
      { id: 'hotels_other', col: 0, order: 1, type: 'source', label: ['Hotels', '& Other'], value: 158, notes: ['(20%) Y/Y', 'Legacy media and advertising', '23% adjusted margin'] },
      { id: 'thefork', col: 0, order: 2, type: 'source', label: 'TheFork', value: 57, notes: ['+23% Y/Y', 'Restaurant reservations', '8% adjusted margin'] },
      { id: 'gross_segment_revenue', col: 1, order: 0, type: 'source', label: 'Company revenue before eliminations', value: 383 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 382, notes: ['(4%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 1 },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 350, notes: ['91% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 33 },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -25, notes: ['(7%) margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 375 },
      { id: 'sm', col: 6, order: 0, type: 'cost', label: 'S&M', value: 178, notes: ['46% of revenue', '+3pp Y/Y'] },
      { id: 'personnel', col: 6, order: 1, type: 'cost', label: 'Personnel', value: 130, notes: ['34% of revenue', '(2pp) Y/Y'] },
      { id: 'technology', col: 6, order: 2, type: 'cost', label: 'Technology', value: 25, notes: ['7% of revenue', '+1pp Y/Y'] },
      { id: 'da', col: 6, order: 3, type: 'cost', label: 'D&A', value: 25, notes: ['6% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 15, notes: ['3% of revenue', '+0pp Y/Y'] },
      { id: 'restructuring', col: 6, order: 5, type: 'cost', label: 'Restructuring', value: 3 },
    ],
    links: [
      { source: 'experiences', target: 'gross_segment_revenue', value: 168, sourceWidth: 160, targetWidth: 160, y0: 537, y1: 635, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'hotels_other', target: 'gross_segment_revenue', value: 158, sourceWidth: 150, targetWidth: 150, y0: 855, y1: 790, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'thefork', target: 'gross_segment_revenue', value: 57, sourceWidth: 55, targetWidth: 55, y0: 1113.5, y1: 892.5, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'revenue', value: 382, sourceWidth: 363, targetWidth: 363, y0: 736.5, y1: 808.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'eliminations', value: 1, sourceWidth: 1, targetWidth: 1, y0: 919.5, y1: 1146.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 350, sourceWidth: 331, targetWidth: 331, y0: 792.5, y1: 716.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 33, sourceWidth: 30, targetWidth: 30, y0: 973.5, y1: 1133, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 350, sourceWidth: 331, targetWidth: 331, y0: 716.5, y1: 795.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 25, sourceWidth: 23, targetWidth: 23, y0: 1023.5, y1: 972.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 178, sourceWidth: 169, targetWidth: 169, y0: 713.5, y1: 572.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'personnel', value: 130, sourceWidth: 124, targetWidth: 124, y0: 860, y1: 784, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology', value: 25, sourceWidth: 25, targetWidth: 25, y0: 934.5, y1: 952.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 25, sourceWidth: 24, targetWidth: 24, y0: 959, y1: 1088, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 15, sourceWidth: 13, targetWidth: 13, y0: 977.5, y1: 1200.5, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 3, sourceWidth: 1, targetWidth: 3, y0: 984.5, y1: 1321.5, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '猫途鹰 · 2026 财年第一季度',
        meta: { title: '猫途鹰 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的季度', titleTextLength: 2120 },
        nodes: {
          experiences: { label: '体验业务', notes: ['同比 +8%', '观光与活动市场', '调整后利润率 (11%)'] }, hotels_other: { label: ['酒店', '及其他'], notes: ['同比 (20%)', '传统媒体与广告', '调整后利润率 23%'] }, thefork: { label: 'TheFork（餐厅预订）', notes: ['同比 +23%', '餐厅预订', '调整后利润率 8%'] },
          gross_segment_revenue: { label: '抵销前公司收入' }, revenue: { label: '收入', notes: ['同比 (4%)'] }, eliminations: { label: '抵销' }, gross_profit: { label: '毛利润', notes: ['利润率 91%', '同比 (2 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (7%)', '同比 (3 个百分点)'] }, operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 46%', '同比 +3 个百分点'] }, personnel: { label: '人员', notes: ['占收入 34%', '同比 (2 个百分点)'] }, technology: { label: '技术', notes: ['占收入 7%', '同比 +1 个百分点'] }, da: { label: '折旧与摊销', notes: ['占收入 6%', '同比 +1 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 3%', '同比 +0 个百分点'] }, restructuring: { label: '重组' },
        },
        layout: { labels: labels(true) },
        rasterAnnotations: rasterAnnotations(),
      },
    },
  });
})();

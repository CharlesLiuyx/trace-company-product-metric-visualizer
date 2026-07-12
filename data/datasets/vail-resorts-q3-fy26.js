/* ====================================================================
 * Vail Resorts - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/vail-resorts-q3-fy26.png as a fixed
 * d3-Sankey layout with validated runtime icon annotations.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const SOURCE = '#0e3561';
  const SOURCE_LINK = '#8b9db1';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const vailResortsLogo = `
    <text x="0" y="76" font-family="Arial Black,Arial,sans-serif" font-size="78" font-weight="900" letter-spacing="-3" fill="#050505">VAIL</text>
    <text x="194" y="76" font-family="Arial,Helvetica,sans-serif" font-size="76" font-weight="700" letter-spacing="2" fill="#8e8e90">RESORTS</text>
    <text x="643" y="21" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="#777777">®</text>`;

  const labelBlocks = (L) => ({
    lift: { blocks: [
      { x: 422, top: 244, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.liftYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 345, top: 385, anchor: 'middle', lines: [{ text: L.lift, size: 40, weight: 800, color: TITLE }] },
    ] },
    ski_school: { blocks: [
      { x: 422, top: 558, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.skiSchoolYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 158, top: 649, anchor: 'start', lines: [{ text: L.skiSchool, size: 40, weight: 800, color: TITLE }] },
    ] },
    dining: { blocks: [
      { x: 422, top: 700, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.diningYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 229, top: 785, anchor: 'start', lines: [{ text: L.dining, size: 40, weight: 800, color: TITLE }] },
    ] },
    retail_rental: { blocks: [
      { x: 422, top: 843, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.retailRentalYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 106, top: 929, anchor: 'start', lines: [{ text: L.retailRental, size: 40, weight: 800, color: TITLE }] },
    ] },
    other_revenue: { blocks: [
      { x: 422, top: 982, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.otherRevenueYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 242, top: 1061, anchor: 'middle', lines: [{ text: L.other, size: 40, weight: 800, color: TITLE }] },
    ] },
    mountain: { blocks: [
      { x: 890, top: 329, anchor: 'middle', lineGap: 9, lines: [{ text: L.mountain, size: 40, weight: 800, color: TITLE }, { text: '$value', size: 40, weight: 400, color: TITLE }, { text: L.mountainYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    lodging: { blocks: [
      { x: 890, top: 927, anchor: 'middle', lineGap: 9, lines: [{ text: L.lodging, size: 40, weight: 800, color: TITLE }, { text: '$value', size: 40, weight: 400, color: TITLE }, { text: L.lodgingYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    revenue: { blocks: [
      { x: 1356, top: 457, anchor: 'middle', lineGap: 9, lines: [{ text: L.revenue, size: 40, weight: 800, color: TITLE }, { text: '$value', size: 40, weight: 400, color: TITLE }, { text: L.revenueYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    cost_of_revenue: { blocks: [] },
    operating_profit: { blocks: [
      { x: 1825, top: 244, anchor: 'middle', lineGap: 9, lines: [{ text: L.operating1, size: 40, weight: 800, color: GREEN_LABEL }, { text: L.profit, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: L.operatingMargin, size: 29, weight: 400, color: NOTE }, { text: L.operatingYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [
      { x: 1825, top: 1063, anchor: 'middle', lineGap: 9, lines: [{ text: L.operating1, size: 40, weight: 800, color: RED_LABEL }, { text: L.expenses, size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] },
    ] },
    net_profit: { blocks: [
      { x: 2480, top: 284, anchor: 'middle', lineGap: 9, lines: [{ text: L.net1, size: 40, weight: 800, color: GREEN_LABEL }, { text: L.profit, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: L.netMargin, size: 29, weight: 400, color: NOTE }, { text: L.netYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    tax: { blocks: [
      { x: 2480, top: 532, anchor: 'middle', lineGap: 8, lines: [{ text: L.tax, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    other_expense: { blocks: [
      { x: 2480, top: 625, anchor: 'middle', lineGap: 8, lines: [{ text: L.other, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    mountain_lodging: { blocks: [
      { x: 2480, top: 789, anchor: 'middle', lineGap: 9, lines: [{ text: L.mountainExpense1, size: 32, weight: 800, color: RED_LABEL }, { text: L.mountainExpense2, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    ga: { blocks: [
      { x: 2480, top: 960, anchor: 'middle', lineGap: 8, lines: [{ text: L.ga, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    da: { blocks: [
      { x: 2480, top: 1078, anchor: 'middle', lineGap: 8, lines: [{ text: L.da, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    retail_dining: { blocks: [
      { x: 2480, top: 1165, anchor: 'middle', lineGap: 8, lines: [{ text: L.retailDining1, size: 31, weight: 800, color: RED_LABEL }, { text: L.retailDining2, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }] },
    ] },
    retail_dining_other: { blocks: [
      { x: 2480, top: 1300, anchor: 'middle', lineGap: 8, lines: [{ text: L.retailDining1, size: 31, weight: 800, color: RED_LABEL }, { text: L.retailDining2, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }] },
    ] },
  });

  const labelsEn = labelBlocks({
    lift: 'Lift', liftYoy: '(5%) Y/Y', skiSchool: 'Ski school', skiSchoolYoy: '(12%) Y/Y',
    dining: 'Dining', diningYoy: '(11%) Y/Y', retailRental: 'Retail/rental', retailRentalYoy: '(8%) Y/Y',
    other: 'Other', otherRevenueYoy: '(4%) Y/Y', mountain: 'Mountain', mountainYoy: '(7%) Y/Y',
    lodging: 'Lodging', lodgingYoy: '(9%) Y/Y', revenue: 'Revenue', revenueYoy: '(7%) Y/Y',
    operating1: 'Operating', profit: 'profit', expenses: 'expenses', operatingMargin: '41% margin', operatingYoy: '(4pp) Y/Y',
    net1: 'Net', netMargin: '28% margin', netYoy: '(4pp) Y/Y', tax: 'Tax',
    mountainExpense1: 'Mountain &', mountainExpense2: 'Lodging', ga: 'G&A', da: 'D&A',
    retailDining1: 'Retail &', retailDining2: 'Dining',
  });

  const labelsZh = labelBlocks({
    lift: '缆车', liftYoy: '同比 -5%', skiSchool: '滑雪学校', skiSchoolYoy: '同比 -12%',
    dining: '餐饮', diningYoy: '同比 -11%', retailRental: '零售及租赁', retailRentalYoy: '同比 -8%',
    other: '其他', otherRevenueYoy: '同比 -4%', mountain: '山地业务', mountainYoy: '同比 -7%',
    lodging: '住宿', lodgingYoy: '同比 -9%', revenue: '收入', revenueYoy: '同比 -7%',
    operating1: '营业', profit: '利润', expenses: '费用', operatingMargin: '利润率 41%', operatingYoy: '同比 -4 个百分点',
    net1: '净', netMargin: '利润率 28%', netYoy: '同比 -4 个百分点', tax: '税费',
    mountainExpense1: '山地及', mountainExpense2: '住宿', ga: '管理费用', da: '折旧与摊销',
    retailDining1: '零售及', retailDining2: '餐饮',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'vail-resorts-q3-fy26',
    name: 'Vail Resorts · Q3 FY26',
    company: 'Vail Resorts',
    meta: {
      company: 'Vail Resorts',
      title: 'Vail Resorts Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/vail-resorts-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2445,
      periodX: 1334,
      periodY: 1317,
      periodNoteY: 1359,
      logoSvg: vailResortsLogo,
      logoViewBox: '0 0 670 100',
      logoWidth: 750,
      logoHeight: 112,
      logoY: 262,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE, label: TITLE },
        hub: { node: SOURCE, label: TITLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'vail-resorts-lift-resort-brands', href: 'data/assets/raster-annotations/vail-resorts/lift-resort-brands-q3-fy26.png', x: 12, y: 332, width: 185, height: 210 },
      { key: 'vail-resorts-lift-gondola', href: 'data/assets/raster-annotations/vail-resorts/lift-gondola-q3-fy26.png', x: 232, y: 400, width: 66, height: 62 },
      { key: 'vail-resorts-mountain-skier', href: 'data/assets/raster-annotations/vail-resorts/mountain-skier-q3-fy26.png', x: 566, y: 292, width: 108, height: 112 },
      { key: 'vail-resorts-mountain-icon', href: 'data/assets/raster-annotations/vail-resorts/mountain-icon-q3-fy26.png', x: 858, y: 260, width: 75, height: 68 },
      { key: 'vail-resorts-lodging-icon', href: 'data/assets/raster-annotations/vail-resorts/lodging-icon-q3-fy26.png', x: 858, y: 848, width: 75, height: 72 },
    ],
    layout: {
      scale: 1,
      nodes: {
        lift: { x: 387, y: 343, width: 71, height: 172 },
        ski_school: { x: 387, y: 648, width: 71, height: 31 },
        dining: { x: 387, y: 792, width: 71, height: 21 },
        retail_rental: { x: 387, y: 933, width: 71, height: 23 },
        other_revenue: { x: 387, y: 1072, width: 71, height: 10 },
        mountain: { x: 854, y: 473, width: 70, height: 269 },
        lodging: { x: 854, y: 1073, width: 70, height: 17 },
        revenue: { x: 1321, y: 599, width: 71, height: 287 },
        cost_of_revenue: { x: 1600, y: 400, width: 1, height: 1 },
        operating_profit: { x: 1789, y: 472, width: 70, height: 116 },
        operating_expenses: { x: 1789, y: 871, width: 70, height: 167 },
        net_profit: { x: 2255, y: 308, width: 71, height: 80 },
        tax: { x: 2255, y: 553, width: 71, height: 24 },
        other_expense: { x: 2255, y: 652, width: 71, height: 10 },
        mountain_lodging: { x: 2255, y: 789, width: 71, height: 109 },
        ga: { x: 2255, y: 981, width: 71, height: 22 },
        da: { x: 2255, y: 1101, width: 71, height: 16 },
        retail_dining: { x: 2255, y: 1212, width: 71, height: 11 },
        retail_dining_other: { x: 2255, y: 1313, width: 71, height: 2 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'lift', col: 0, order: 0, type: 'source', label: 'Lift', value: 729, notes: ['(5%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'ski_school', col: 0, order: 1, type: 'source', label: 'Ski school', value: 142, notes: ['(12%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'dining', col: 0, order: 2, type: 'source', label: 'Dining', value: 99, notes: ['(11%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'retail_rental', col: 0, order: 3, type: 'source', label: 'Retail/rental', value: 104, notes: ['(8%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 55, notes: ['(4%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'mountain', col: 1, order: 0, type: 'source', label: 'Mountain', value: 1130, notes: ['(7%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'lodging', col: 1, order: 1, type: 'source', label: 'Lodging', value: 75, notes: ['(9%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 1205, notes: ['(7%) Y/Y'], color: SOURCE, labelColor: TITLE },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0, valueText: '($0M)', color: BG, labelColor: BG, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 494, notes: ['41% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 711, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: ['Net', 'profit'], value: 340, notes: ['28% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 106, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 4, order: 2, type: 'cost', label: 'Other', value: 48, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'mountain_lodging', col: 4, order: 3, type: 'cost', label: ['Mountain &', 'Lodging'], value: 460, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 102, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 5, type: 'cost', label: 'D&A', value: 77, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'retail_dining', col: 4, order: 6, type: 'cost', label: ['Retail &', 'dining'], value: 57, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'retail_dining_other', col: 4, order: 7, type: 'cost', label: ['Retail &', 'Dining'], value: 15, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'lift', target: 'mountain', value: 729, sourceWidth: 172, targetWidth: 172, y0: 429, y1: 559, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'ski_school', target: 'mountain', value: 142, sourceWidth: 31, targetWidth: 31, y0: 663.5, y1: 660.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'dining', target: 'mountain', value: 99, sourceWidth: 21, targetWidth: 21, y0: 802.5, y1: 686.5, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'retail_rental', target: 'mountain', value: 104, sourceWidth: 23, targetWidth: 23, y0: 944.5, y1: 708.5, sourceOrder: 0, targetOrder: 3, linkTint: SOURCE_LINK },
      { source: 'other_revenue', target: 'mountain', value: 55, sourceWidth: 10, targetWidth: 22, y0: 1077, y1: 731, sourceOrder: 0, targetOrder: 4, linkTint: SOURCE_LINK },
      { source: 'mountain', target: 'revenue', value: 1130, sourceWidth: 269, targetWidth: 269, y0: 607.5, y1: 733.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'lodging', target: 'revenue', value: 75, sourceWidth: 17, targetWidth: 17, y0: 1081.5, y1: 877.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 494, sourceWidth: 119, targetWidth: 116, y0: 658.5, y1: 530, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 711, sourceWidth: 168, targetWidth: 167, y0: 802, y1: 954.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 340, sourceWidth: 80, targetWidth: 80, y0: 512, y1: 348, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 106, sourceWidth: 24, targetWidth: 24, y0: 564, y1: 565, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 48, sourceWidth: 10, targetWidth: 10, y0: 582, y1: 657, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'mountain_lodging', value: 460, sourceWidth: 110, targetWidth: 109, y0: 926, y1: 843.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 102, sourceWidth: 24, targetWidth: 22, y0: 993, y1: 992, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 77, sourceWidth: 18, targetWidth: 16, y0: 1014, y1: 1109, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'retail_dining', value: 57, sourceWidth: 12, targetWidth: 11, y0: 1029, y1: 1217.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'retail_dining_other', value: 15, sourceWidth: 3, targetWidth: 2, y0: 1036.5, y1: 1314, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '韦尔度假村 · 2026 财年第三季度',
        meta: {
          title: '韦尔度假村 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 2130,
        },
        nodes: {
          lift: { label: '缆车', notes: ['同比 -5%'] }, ski_school: { label: '滑雪学校', notes: ['同比 -12%'] },
          dining: { label: '餐饮', notes: ['同比 -11%'] }, retail_rental: { label: '零售及租赁', notes: ['同比 -8%'] },
          other_revenue: { label: '其他', notes: ['同比 -4%'] }, mountain: { label: '山地业务', notes: ['同比 -7%'] },
          lodging: { label: '住宿', notes: ['同比 -9%'] }, revenue: { label: '收入', notes: ['同比 -7%'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: ['营业', '利润'], notes: ['利润率 41%', '同比 -4 个百分点'] }, operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: ['净', '利润'], notes: ['利润率 28%', '同比 -4 个百分点'] }, tax: { label: '税费' }, other_expense: { label: '其他' },
          mountain_lodging: { label: ['山地及', '住宿'] }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' },
          retail_dining: { label: ['零售及', '餐饮'] }, retail_dining_other: { label: ['零售及', '餐饮'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

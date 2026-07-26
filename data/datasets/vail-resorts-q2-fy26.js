/* ====================================================================
 * Vail Resorts - Q2 FY26 income statement ($M)
 * Reconstructed from input/processing/vail-resorts-q2-fy26.png as a fixed
 * d3-Sankey layout with the validated Vail Resorts runtime icon assets.
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
    <g transform="translate(28 -14)">
      <text x="0" y="76" font-family="Arial Black,Arial,sans-serif" font-size="78" font-weight="900" letter-spacing="-3" fill="#050505">VAIL</text>
      <text x="194" y="76" font-family="Arial,Helvetica,sans-serif" font-size="76" font-weight="700" letter-spacing="2" fill="#8e8e90">RESORTS</text>
      <text x="583" y="21" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="#777777">®</text>
    </g>`;

  const labelBlocks = (L) => ({
    lift: { blocks: [
      { x: 420, top: 269, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.liftYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 293, top: 432, anchor: 'start', lines: [{ text: L.lift, size: 40, weight: 800, color: TITLE }] },
    ] },
    ski_school: { blocks: [
      { x: 420, top: 608, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.skiSchoolYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 170, top: 695, anchor: 'start', lines: [{ text: L.skiSchool, size: 40, weight: 800, color: TITLE }] },
    ] },
    dining: { blocks: [
      { x: 420, top: 749, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.diningYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 237, top: 831, anchor: 'start', lines: [{ text: L.dining, size: 40, weight: 800, color: TITLE }] },
    ] },
    retail_rental: { blocks: [
      { x: 420, top: 882, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.retailRentalYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 110, top: 969, anchor: 'start', lines: [{ text: L.retailRental, size: 40, weight: 800, color: TITLE }] },
    ] },
    other_revenue: { blocks: [
      { x: 420, top: 1031, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 40, weight: 400 }, { text: L.otherRevenueYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 242, top: 1106, anchor: 'middle', lines: [{ text: L.other, size: 40, weight: 800, color: TITLE }] },
    ] },
    mountain: { blocks: [
      { x: 886, top: 366, anchor: 'middle', lineGap: 9, lines: [{ text: L.mountain, size: 40, weight: 800, color: TITLE }, { text: '$value', size: 40, weight: 400, color: TITLE }, { text: L.mountainYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    lodging: { blocks: [
      { x: 886, top: 980, anchor: 'middle', lineGap: 9, lines: [{ text: L.lodging, size: 40, weight: 800, color: TITLE }, { text: '$value', size: 40, weight: 400, color: TITLE }, { text: L.lodgingYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    revenue: { blocks: [
      { x: 1354, top: 449, anchor: 'middle', lineGap: 9, lines: [{ text: L.revenue, size: 40, weight: 800, color: TITLE }, { text: '$value', size: 40, weight: 400, color: TITLE }, { text: L.revenueYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    operating_profit: { blocks: [
      { x: 1821, top: 233, anchor: 'middle', lineGap: 9, lines: [{ text: L.operating1, size: 40, weight: 800, color: GREEN_LABEL }, { text: L.profit, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: L.operatingMargin, size: 29, weight: 400, color: NOTE }, { text: L.operatingYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [
      { x: 1821, top: 1047, anchor: 'middle', lineGap: 9, lines: [{ text: L.operating1, size: 40, weight: 800, color: RED_LABEL }, { text: L.expenses, size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] },
    ] },
    net_profit: { blocks: [
      { x: 2480, top: 337, anchor: 'middle', lineGap: 9, lines: [{ text: L.netProfit, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: L.netMargin, size: 29, weight: 400, color: NOTE }, { text: L.netYoy, size: 29, weight: 400, color: NOTE }] },
    ] },
    tax: { blocks: [
      { x: 2480, top: 545, anchor: 'middle', lineGap: 8, lines: [{ text: L.tax, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    other_expense: { blocks: [
      { x: 2480, top: 644, anchor: 'middle', lineGap: 8, lines: [{ text: L.other, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    mountain_lodging: { blocks: [
      { x: 2480, top: 852, anchor: 'middle', lineGap: 9, lines: [{ text: L.mountainExpense1, size: 32, weight: 800, color: RED_LABEL }, { text: L.mountainExpense2, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    ga: { blocks: [
      { x: 2480, top: 1072, anchor: 'middle', lineGap: 8, lines: [{ text: L.ga, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    da: { blocks: [
      { x: 2480, top: 1166, anchor: 'middle', lineGap: 8, lines: [{ text: L.da, size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] },
    ] },
    retail_dining: { blocks: [
      { x: 2480, top: 1290, anchor: 'middle', lineGap: 8, lines: [{ text: L.retailDining1, size: 31, weight: 800, color: RED_LABEL }, { text: L.retailDining2, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }] },
    ] },
  });

  const labelsEn = labelBlocks({
    lift: 'Lift', liftYoy: '(3%) Y/Y', skiSchool: 'Ski school', skiSchoolYoy: '(9%) Y/Y',
    dining: 'Dining', diningYoy: '(7%) Y/Y', retailRental: 'Retail/rental', retailRentalYoy: '(7%) Y/Y',
    other: 'Other', otherRevenueYoy: '(7%) Y/Y', mountain: 'Mountain', mountainYoy: '(5%) Y/Y',
    lodging: 'Lodging', lodgingYoy: '(3%) Y/Y', revenue: 'Revenue', revenueYoy: '(5%) Y/Y',
    operating1: 'Operating', profit: 'profit', expenses: 'expenses', operatingMargin: '32% margin', operatingYoy: '(2pp) Y/Y',
    netProfit: 'Net profit', netMargin: '21% margin', netYoy: '(2pp) Y/Y', tax: 'Tax',
    mountainExpense1: 'Mountain &', mountainExpense2: 'Lodging', ga: 'G&A', da: 'D&A',
    retailDining1: 'Retail &', retailDining2: 'Dining',
  });

  const labelsZh = labelBlocks({
    lift: '缆车', liftYoy: '同比 -3%', skiSchool: '滑雪学校', skiSchoolYoy: '同比 -9%',
    dining: '餐饮', diningYoy: '同比 -7%', retailRental: '零售及租赁', retailRentalYoy: '同比 -7%',
    other: '其他', otherRevenueYoy: '同比 -7%', mountain: '山地业务', mountainYoy: '同比 -5%',
    lodging: '住宿', lodgingYoy: '同比 -3%', revenue: '收入', revenueYoy: '同比 -5%',
    operating1: '营业', profit: '利润', expenses: '费用', operatingMargin: '利润率 32%', operatingYoy: '同比 -2 个百分点',
    netProfit: '净利润', netMargin: '利润率 21%', netYoy: '同比 -2 个百分点', tax: '税费',
    mountainExpense1: '山地及', mountainExpense2: '住宿', ga: '管理费用', da: '折旧与摊销',
    retailDining1: '零售及', retailDining2: '餐饮',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'vail-resorts-q2-fy26',
    name: 'Vail Resorts · Q2 FY26',
    company: 'Vail Resorts',
    meta: {
      company: 'Vail Resorts',
      title: 'Vail Resorts Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/vail-resorts-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 202,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2470,
      periodX: 1354,
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
      { key: 'vail-resorts-lift-resort-brands', href: 'data/assets/raster-annotations/vail-resorts/lift-resort-brands-q3-fy26.png', x: 12, y: 374, width: 185, height: 210 },
      { key: 'vail-resorts-lift-gondola', href: 'data/assets/raster-annotations/vail-resorts/lift-gondola-q3-fy26.png', x: 232, y: 441, width: 66, height: 62 },
      { key: 'vail-resorts-mountain-skier', href: 'data/assets/raster-annotations/vail-resorts/mountain-skier-q3-fy26.png', x: 566, y: 344, width: 108, height: 112 },
      { key: 'vail-resorts-mountain-icon', href: 'data/assets/raster-annotations/vail-resorts/mountain-icon-q3-fy26.png', x: 858, y: 307, width: 75, height: 68 },
      { key: 'vail-resorts-lodging-icon', href: 'data/assets/raster-annotations/vail-resorts/lodging-icon-q3-fy26.png', x: 858, y: 908, width: 75, height: 72 },
    ],
    layout: {
      scale: 1,
      nodes: {
        lift: { x: 385, y: 358, width: 71, height: 197 },
        ski_school: { x: 385, y: 697, width: 71, height: 37 },
        dining: { x: 385, y: 839, width: 71, height: 25 },
        retail_rental: { x: 385, y: 971, width: 71, height: 38 },
        other_revenue: { x: 385, y: 1119, width: 71, height: 15 },
        mountain: { x: 852, y: 509, width: 70, height: 319 },
        lodging: { x: 852, y: 1125, width: 70, height: 20 },
        revenue: { x: 1319, y: 592, width: 71, height: 342 },
        operating_profit: { x: 1787, y: 467, width: 70, height: 108 },
        operating_expenses: { x: 1787, y: 795, width: 70, height: 231 },
        net_profit: { x: 2253, y: 360, width: 71, height: 70 },
        tax: { x: 2253, y: 572, width: 71, height: 20 },
        other_expense: { x: 2253, y: 675, width: 71, height: 12 },
        mountain_lodging: { x: 2253, y: 833, width: 71, height: 150 },
        ga: { x: 2253, y: 1071, width: 71, height: 38 },
        da: { x: 2253, y: 1197, width: 71, height: 21 },
        retail_dining: { x: 2253, y: 1310, width: 71, height: 18 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'lift', col: 0, order: 0, type: 'source', label: 'Lift', value: 626, notes: ['(3%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'ski_school', col: 0, order: 1, type: 'source', label: 'Ski school', value: 121, notes: ['(9%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'dining', col: 0, order: 2, type: 'source', label: 'Dining', value: 85, notes: ['(7%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'retail_rental', col: 0, order: 3, type: 'source', label: 'Retail/rental', value: 126, notes: ['(7%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 55, notes: ['(7%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'mountain', col: 1, order: 0, type: 'source', label: 'Mountain', value: 1012, notes: ['(5%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'lodging', col: 1, order: 1, type: 'source', label: 'Lodging', value: 72, notes: ['(3%) Y/Y'], color: SOURCE, labelColor: TITLE, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 1084, notes: ['(5%) Y/Y'], color: SOURCE, labelColor: TITLE },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 345, notes: ['32% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 739, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: ['Net', 'profit'], value: 226, notes: ['21% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 72, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 4, order: 2, type: 'cost', label: 'Other', value: 47, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'mountain_lodging', col: 4, order: 3, type: 'cost', label: ['Mountain &', 'Lodging'], value: 481, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 122, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 5, type: 'cost', label: 'D&A', value: 74, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'retail_dining', col: 4, order: 6, type: 'cost', label: ['Retail &', 'Dining'], value: 59, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only' },
    ],
    links: [
      { source: 'lift', target: 'mountain', value: 626, sourceWidth: 197, targetWidth: 197, y0: 456.5, y1: 607.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'ski_school', target: 'mountain', value: 121, sourceWidth: 37, targetWidth: 37, y0: 715.5, y1: 724.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'dining', target: 'mountain', value: 85, sourceWidth: 25, targetWidth: 25, y0: 851.5, y1: 755.5, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'retail_rental', target: 'mountain', value: 126, sourceWidth: 38, targetWidth: 38, y0: 990, y1: 787, sourceOrder: 0, targetOrder: 3, linkTint: SOURCE_LINK },
      { source: 'other_revenue', target: 'mountain', value: 55, sourceWidth: 15, targetWidth: 22, y0: 1126.5, y1: 817, sourceOrder: 0, targetOrder: 4, linkTint: SOURCE_LINK },
      { source: 'mountain', target: 'revenue', value: 1012, sourceWidth: 319, targetWidth: 322, y0: 668.5, y1: 753, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'lodging', target: 'revenue', value: 72, sourceWidth: 20, targetWidth: 20, y0: 1135, y1: 924, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 345, sourceWidth: 109, targetWidth: 108, y0: 646.5, y1: 521, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 739, sourceWidth: 233, targetWidth: 231, y0: 817.5, y1: 910.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 226, sourceWidth: 71, targetWidth: 70, y0: 502.5, y1: 395, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 72, sourceWidth: 22, targetWidth: 20, y0: 549, y1: 582, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 47, sourceWidth: 15, targetWidth: 12, y0: 567.5, y1: 681, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'mountain_lodging', value: 481, sourceWidth: 151, targetWidth: 150, y0: 870.5, y1: 908, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 122, sourceWidth: 38, targetWidth: 38, y0: 965, y1: 1090, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 74, sourceWidth: 23, targetWidth: 21, y0: 995.5, y1: 1207.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'retail_dining', value: 59, sourceWidth: 19, targetWidth: 18, y0: 1016.5, y1: 1319, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '韦尔度假村 · 2026 财年第二季度',
        meta: {
          title: '韦尔度假村 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 2130,
        },
        nodes: {
          lift: { label: '缆车', notes: ['同比 -3%'] }, ski_school: { label: '滑雪学校', notes: ['同比 -9%'] },
          dining: { label: '餐饮', notes: ['同比 -7%'] }, retail_rental: { label: '零售及租赁', notes: ['同比 -7%'] },
          other_revenue: { label: '其他', notes: ['同比 -7%'] }, mountain: { label: '山地业务', notes: ['同比 -5%'] },
          lodging: { label: '住宿', notes: ['同比 -3%'] }, revenue: { label: '收入', notes: ['同比 -5%'] },
          operating_profit: { label: ['营业', '利润'], notes: ['利润率 32%', '同比 -2 个百分点'] }, operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: ['净', '利润'], notes: ['利润率 21%', '同比 -2 个百分点'] }, tax: { label: '税费' }, other_expense: { label: '其他' },
          mountain_lodging: { label: ['山地及', '住宿'] }, ga: { label: '管理费用' }, da: { label: '折旧与摊销' },
          retail_dining: { label: ['零售及', '餐饮'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

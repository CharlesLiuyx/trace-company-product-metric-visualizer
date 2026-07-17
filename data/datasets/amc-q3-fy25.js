/* AMC Entertainment Q3 FY25 income statement ($M), reconstructed from the
 * 2667x1500 Source image. The three segment-photo clusters reuse AMC's
 * validated runtime raster annotations. */
(function () {
  const TITLE = '#155077';
  const DARK = '#000000';
  const SOURCE_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const AMC_RED = '#e41d38';

  const amcLogo = `
    <text x="6" y="122" font-family="Arial Rounded MT Bold,Arial,sans-serif"
      font-size="195" font-weight="800" letter-spacing="-19" textLength="488"
      lengthAdjust="spacingAndGlyphs" fill="${AMC_RED}">amc</text>`;

  const attendanceCard = (first, second, secondSize = 25) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="49" y="1199" width="739" height="159" rx="27" fill="#000000"/>
      <text x="418.5" y="1250" text-anchor="middle" font-size="25" fill="#ffffff">${first}</text>
      <text x="418.5" y="1307" text-anchor="middle" font-size="${secondSize}" fill="#ffffff">${second}</text>
    </g>`;

  const sourceCaptions = ({ admissions, foodFirst, foodSecond, other, noteFirst, noteSecond }) => `
    <g class="sankey-interactive-annotation" data-node="admissions"
      font-family="Montserrat,Arial,sans-serif" fill="#000000" text-anchor="middle" font-weight="800">
      <text x="300" y="629" font-size="39">${admissions}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="food_beverage"
      font-family="Montserrat,Arial,sans-serif" fill="#000000" text-anchor="middle" font-weight="800">
      <text x="329.5" y="867" font-size="39">${foodFirst}</text>
      <text x="329.5" y="914" font-size="39">${foodSecond}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="other_theatre"
      font-family="Montserrat,Arial,sans-serif" fill="#000000" text-anchor="middle" font-weight="800">
      <text x="289" y="1100" font-size="38">${other}</text>
      <g fill="${NOTE}" font-size="29" font-weight="400">
        <text x="264.5" y="1142">${noteFirst}</text>
        <text x="264.5" y="1176">${noteSecond}</text>
      </g>
    </g>`;

  const annotationsEn = sourceCaptions({
    admissions: 'Admissions',
    foodFirst: 'Food &amp;',
    foodSecond: 'Beverage',
    other: 'Other theatre',
    noteFirst: 'Gift Cards, Package tickets,',
    noteSecond: 'Advertising, Retail, Rentals',
  }) + attendanceCard(
    '<tspan font-weight="800">Attendance 58M</tspan><tspan dx="9">(10%) Y/Y</tspan>',
    '<tspan font-weight="800">Food &amp; Beverage per patron</tspan><tspan dx="9">$7.74 +3% Y/Y</tspan>'
  );

  const annotationsZh = sourceCaptions({
    admissions: '影院票务',
    foodFirst: '餐饮',
    foodSecond: '',
    other: '其他影院',
    noteFirst: '礼品卡、套餐票、广告、',
    noteSecond: '零售、场地租赁',
  }) + attendanceCard(
    '<tspan font-weight="800">观影人次 5,800 万</tspan><tspan dx="9">同比 (10%)</tspan>',
    '<tspan font-weight="800">餐饮客单价</tspan><tspan dx="9">$7.74，同比 +3%</tspan>',
    24
  );

  const labelsEn = {
    admissions: { blocks: [
      { x: 487.5, top: 364, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
    ] },
    food_beverage: { blocks: [
      { x: 497, top: 729, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '(8%) Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
    ] },
    other_theatre: { blocks: [
      { x: 501, top: 1002, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 954, top: 476, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1419, top: 292, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Gross profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '66% margin', size: 28, weight: 400, color: NOTE },
      { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    film_exhibition_costs: { blocks: [{ x: 1421.5, top: 828, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Film exhibition', size: 35, weight: 800 }, { text: 'costs', size: 35, weight: 800 },
      { text: '$value', size: 35, weight: 400 },
    ] }] },
    food_beverage_costs: { blocks: [{ x: 1421.5, top: 1101, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Food &', size: 35, weight: 800 }, { text: 'Beverage costs', size: 35, weight: 800 },
      { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1889, top: 219, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '3% margin', size: 28, weight: 400, color: NOTE },
      { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1889, top: 827, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
    ] }] },
    net_loss: { blocks: [{ x: 2199, top: 466, anchor: 'middle', lineGap: 1, lines: [
      { text: 'Net loss', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '(23%) margin', size: 28, weight: 400, color: NOTE },
      { text: '(21pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    other: { blocks: [{ x: 2453, top: 310, anchor: 'start', lineGap: 8, lines: [
      { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    operating: { blocks: [{ x: 2424.5, top: 699, anchor: 'start', lineGap: 8, lines: [
      { text: 'Operating', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '36% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    rent: { blocks: [{ x: 2425.5, top: 888, anchor: 'start', lineGap: 8, lines: [
      { text: 'Rent', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '17% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    depreciation_amortization: { blocks: [{ x: 2407, top: 1053, anchor: 'start', lineGap: 5, lines: [
      { text: 'Depreciation &', size: 31, weight: 800 }, { text: 'Amortization', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 }, { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2432.5, top: 1257, anchor: 'start', lineGap: 1, lines: [
      { text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
      { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  labelsZh.admissions.blocks[0].lines[1].text = '同比 (4%)';
  labelsZh.food_beverage.blocks[0].lines[1].text = '同比 (8%)';
  labelsZh.other_theatre.blocks[0].lines[1].text = '同比 +17%';
  const zhLines = {
    revenue: ['收入', '$value', '同比 (4%)'],
    gross_profit: ['毛利润', '$value', '利润率 66%', '同比 +1 个百分点'],
    film_exhibition_costs: ['电影放映', '成本', '$value'],
    food_beverage_costs: ['餐饮成本', '$value'],
    operating_profit: ['营业利润', '$value', '利润率 3%', '同比 (3 个百分点)'],
    operating_expenses: ['运营费用', '$value'],
    net_loss: ['净亏损', '$value', '利润率 (23%)', '同比 (21 个百分点)'],
    other: ['其他', '$value'],
    operating: ['运营', '$value', '占收入 36%', '同比 +2 个百分点'],
    rent: ['租金', '$value', '占收入 17%', '同比 +1 个百分点'],
    depreciation_amortization: ['折旧及摊销', '$value', '占收入 6%', '同比 +0 个百分点'],
    ga: ['管理费用', '$value', '占收入 4%', '同比 +0 个百分点'],
  };
  for (const [id, texts] of Object.entries(zhLines)) {
    const source = labelsEn[id].blocks[0].lines;
    labelsZh[id].blocks[0].lines = texts.map((text, index) => ({
      ...(source[Math.min(index, source.length - 1)] || {}),
      text,
    }));
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amc-q3-fy25',
    name: 'AMC Entertainment · Q3 FY25',
    company: 'AMC Entertainment',
    meta: {
      company: 'AMC Entertainment',
      title: 'AMC Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Three months ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/amc-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2020,
      hidePeriodStamp: true,
      logoWidth: 500,
      logoHeight: 130,
      logoY: 277,
      logoViewBox: '0 0 500 130',
      logoSvg: amcLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      { key: 'amc-admissions-tickets', href: 'data/assets/raster-annotations/amc/admissions-tickets.png', x: 241, y: 426, width: 180, height: 138 },
      { key: 'amc-food-beverage', href: 'data/assets/raster-annotations/amc/food-beverage.png', x: 268, y: 649, width: 130, height: 158 },
      { key: 'amc-other-theatre-seat', href: 'data/assets/raster-annotations/amc/other-theatre-seat.png', x: 268, y: 920, width: 132, height: 119 },
    ],
    layout: {
      scale: 1,
      nodes: {
        admissions: { x: 452, y: 460, width: 71, height: 177 },
        food_beverage: { x: 452, y: 816, width: 71, height: 112 },
        other_theatre: { x: 452, y: 1090, width: 71, height: 32 },
        revenue: { x: 919, y: 615, width: 70, height: 324 },
        gross_profit: { x: 1383, y: 471, width: 72, height: 213 },
        film_exhibition_costs: { x: 1386, y: 970, width: 71, height: 87 },
        food_beverage_costs: { x: 1386, y: 1244, width: 71, height: 20 },
        operating_profit: { x: 1854, y: 396, width: 70, height: 6 },
        operating_expenses: { x: 1854, y: 602, width: 70, height: 204 },
        net_loss: { x: 2164, y: 367, width: 70, height: 73 },
        other: { x: 2320, y: 305, width: 71, height: 82 },
        operating: { x: 2320, y: 697, width: 71, height: 116 },
        rent: { x: 2320, y: 929, width: 71, height: 55 },
        depreciation_amortization: { x: 2320, y: 1119, width: 71, height: 18 },
        ga: { x: 2320, y: 1279, width: 71, height: 11 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'admissions', col: 0, order: 0, type: 'source', label: 'Admissions', value: 715, notes: ['(4%) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'food_beverage', col: 0, order: 1, type: 'source', label: 'Food & Beverage', value: 452, notes: ['(8%) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'other_theatre', col: 0, order: 2, type: 'source', label: 'Other theatre', value: 133, notes: ['+17% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1300, valueText: '$1,300M', notes: ['(4%) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 859, notes: ['66% margin', '+1pp Y/Y'] },
      { id: 'film_exhibition_costs', col: 2, order: 1, type: 'cost', label: ['Film exhibition', 'costs'], value: 352 },
      { id: 'food_beverage_costs', col: 2, order: 2, type: 'cost', label: ['Food &', 'Beverage costs'], value: 89 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 36, notes: ['3% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 823 },
      { id: 'net_loss', col: 4, order: 0, type: 'cost', label: 'Net loss', value: -298, valueText: '($298M)', notes: ['(23%) margin', '(21pp) Y/Y'], linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'cost', label: 'Other', value: 334 },
      { id: 'operating', col: 5, order: 1, type: 'cost', label: 'Operating', value: 465, notes: ['36% of revenue', '+2pp Y/Y'] },
      { id: 'rent', col: 5, order: 2, type: 'cost', label: 'Rent', value: 224, notes: ['17% of revenue', '+1pp Y/Y'] },
      { id: 'depreciation_amortization', col: 5, order: 3, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 79, notes: ['6% of revenue', '+0pp Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 55, notes: ['4% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'admissions', target: 'revenue', value: 715, sourceWidth: 177, targetWidth: 177, y0: 548.5, y1: 703.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'food_beverage', target: 'revenue', value: 452, sourceWidth: 112, targetWidth: 113, y0: 872, y1: 849.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'other_theatre', target: 'revenue', value: 133, sourceWidth: 32, targetWidth: 33, y0: 1106, y1: 922.5, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 859, sourceWidth: 213, targetWidth: 213, y0: 721.5, y1: 577.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'film_exhibition_costs', value: 352, sourceWidth: 87, targetWidth: 87, y0: 871.5, y1: 1013.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'food_beverage_costs', value: 89, sourceWidth: 24, targetWidth: 20, y0: 927, y1: 1254, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 36, sourceWidth: 6, targetWidth: 6, y0: 474, y1: 399, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 823, sourceWidth: 207, targetWidth: 204, y0: 580.5, y1: 704, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 36, sourceWidth: 6, targetWidth: 9, y0: 399, y1: 309.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss', target: 'other', value: 298, sourceWidth: 73, targetWidth: 73, y0: 403.5, y1: 350.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'operating', value: 465, sourceWidth: 115, targetWidth: 116, y0: 659.5, y1: 755, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rent', value: 224, sourceWidth: 56, targetWidth: 55, y0: 745, y1: 956.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 79, sourceWidth: 20, targetWidth: 18, y0: 783, y1: 1128, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 55, sourceWidth: 13, targetWidth: 11, y0: 799.5, y1: 1284.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'AMC 娱乐 · 2025 财年第三季度',
        meta: {
          title: 'AMC 娱乐 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的三个月',
          titleTextLength: 1850,
        },
        nodes: {
          admissions: { label: '影院票务', notes: ['同比 (4%)'] },
          food_beverage: { label: '餐饮', notes: ['同比 (8%)'] },
          other_theatre: { label: '其他影院', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 (4%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 66%', '同比 +1 个百分点'] },
          film_exhibition_costs: { label: '电影放映成本' },
          food_beverage_costs: { label: '餐饮成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损', notes: ['利润率 (23%)', '同比 (21 个百分点)'] },
          other: { label: '其他' },
          operating: { label: '运营', notes: ['占收入 36%', '同比 +2 个百分点'] },
          rent: { label: '租金', notes: ['占收入 17%', '同比 +1 个百分点'] },
          depreciation_amortization: { label: '折旧及摊销', notes: ['占收入 6%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 4%', '同比 +0 个百分点'] },
        },
        layout: { labels: labelsZh },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();

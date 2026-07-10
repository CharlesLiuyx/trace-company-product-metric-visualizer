/* ====================================================================
 * AMC Entertainment - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/amc-q4-fy25.png as a fixed
 * d3-sankey layout. The three semantic segment-photo clusters are the
 * validated, whitelisted runtime raster annotations documented under
 * data/assets/icon-references/amc/.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK = '#000000';
  const SOURCE_LINK = '#909090';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9acd9a';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const LOSS_LINK = '#e4aeae';
  const NOTE = '#666666';
  const AMC_RED = '#ed1b36';

  /* The wordmark is a vector approximation of the solid AMC mark in the
   * reference; the segment photographs are kept in approved runtime rasters. */
  const amcLogo = `
    <text x="6" y="122" font-family="Arial Rounded MT Bold,Arial,sans-serif"
      font-size="195" font-weight="800" letter-spacing="-19" textLength="488"
      lengthAdjust="spacingAndGlyphs" fill="${AMC_RED}">amc</text>`;

  const attendanceCard = (first, second, secondSize = 25) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="50" y="1200" width="739" height="160" rx="27" fill="#000000"/>
      <text x="419.5" y="1250" text-anchor="middle" font-size="25" fill="#ffffff">${first}</text>
      <text x="419.5" y="1307" text-anchor="middle" font-size="${secondSize}" fill="#ffffff">${second}</text>
    </g>`;

  const annotationsEn = attendanceCard(
    '<tspan font-weight="800">Attendance 56M</tspan><tspan dx="9">(10%) Y/Y</tspan>',
    '<tspan font-weight="800">Food &amp; Beverage per patron</tspan><tspan dx="9">$7.75 +7% Y/Y</tspan>'
  );

  const annotationsZh = attendanceCard(
    '<tspan font-weight="800">观影人次 5,600 万</tspan><tspan dx="9">同比 (10%)</tspan>',
    '<tspan font-weight="800">餐饮客单价</tspan><tspan dx="9">$7.75，同比 +7%</tspan>',
    24
  );

  const zhLayoutLabels = {
    admissions: { blocks: [
      { x: 485.5, top: 364, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '同比 (3%)', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 299, top: 590, anchor: 'middle', lines: [{ text: '影院票务', size: 39, weight: 800 }] },
    ] },
    food_beverage: { blocks: [
      { x: 485.5, top: 712, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '同比 (2%)', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 299, top: 812, anchor: 'middle', lines: [{ text: '餐饮', size: 39, weight: 800 }] },
    ] },
    other_theatre: { blocks: [
      { x: 485.5, top: 979, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: '同比 +8%', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 302, top: 1057, anchor: 'middle', lines: [{ text: '其他影院', size: 38, weight: 800 }] },
      { x: 302, top: 1110, anchor: 'middle', lineGap: 7, lines: [
        { text: '礼品卡、套餐票、广告、', size: 24, weight: 400, color: NOTE },
        { text: '零售、场地租赁', size: 24, weight: 400, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 952, top: 476, anchor: 'middle', lineGap: 9, lines: [
      { text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '同比 (1%)', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1420, top: 309, anchor: 'middle', lineGap: 9, lines: [
      { text: '毛利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 68%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    film_exhibition_costs: { blocks: [{ x: 1420, top: 871, anchor: 'middle', lineGap: 8, lines: [
      { text: '电影放映', size: 35, weight: 800 }, { text: '成本', size: 35, weight: 800 },
      { text: '$value', size: 35, weight: 400 },
    ] }] },
    food_beverage_costs: { blocks: [{ x: 1420, top: 1157, anchor: 'middle', lineGap: 8, lines: [
      { text: '餐饮成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1886, top: 216, anchor: 'middle', lineGap: 9, lines: [
      { text: '营业利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 0%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1886, top: 874, anchor: 'middle', lineGap: 8, lines: [
      { text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 },
    ] }] },
    net_loss: { blocks: [{ x: 2216, top: 211, anchor: 'middle', lineGap: 9, lines: [
      { text: '净亏损', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: '利润率 (10%)', size: 28, weight: 400, color: NOTE },
      { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    other: { blocks: [{ x: 2420, top: 405, anchor: 'start', lineGap: 8, lines: [
      { text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
    operating: { blocks: [{ x: 2420, top: 542, anchor: 'start', lineGap: 8, lines: [
      { text: '运营', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 36%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    rent: { blocks: [{ x: 2420, top: 725, anchor: 'start', lineGap: 8, lines: [
      { text: '租金', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 17%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    depreciation_amortization: { blocks: [{ x: 2420, top: 908, anchor: 'start', lineGap: 8, lines: [
      { text: '折旧及摊销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 6%', size: 28, weight: 400, color: NOTE },
      { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: 2420, top: 1135, anchor: 'start', lineGap: 8, lines: [
      { text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: '占收入 5%', size: 28, weight: 400, color: NOTE },
      { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
    ] }] },
    impairment: { blocks: [{ x: 2420, top: 1320, anchor: 'start', lineGap: 8, lines: [
      { text: '减值', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
    ] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amc-q4-fy25',
    name: 'AMC Entertainment · Q4 FY25',
    company: 'AMC Entertainment',
    meta: {
      company: 'AMC Entertainment',
      title: 'AMC Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Three months ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/amc-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 125,
      titleWeight: 800,
      titleTextLength: 2020,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
        admissions: { x: 449, y: 452, width: 73, height: 191 },
        food_beverage: { x: 449, y: 800, width: 73, height: 118 },
        other_theatre: { x: 449, y: 1066, width: 73, height: 41 },
        revenue: { x: 916, y: 615, width: 72, height: 349 },
        gross_profit: { x: 1384, y: 488, width: 72, height: 239 },
        film_exhibition_costs: { x: 1384, y: 1008, width: 72, height: 87 },
        food_beverage_costs: { x: 1384, y: 1250, width: 72, height: 23 },
        operating_profit: { x: 1850, y: 398, width: 73, height: 2 },
        operating_expenses: { x: 1850, y: 612, width: 73, height: 240 },
        net_loss: { x: 2180, y: 389, width: 72, height: 34 },
        other: { x: 2316, y: 422, width: 73, height: 34 },
        operating: { x: 2316, y: 536, width: 73, height: 127 },
        rent: { x: 2316, y: 781, width: 73, height: 60 },
        depreciation_amortization: { x: 2316, y: 988, width: 73, height: 22 },
        ga: { x: 2316, y: 1163, width: 73, height: 13 },
        impairment: { x: 2316, y: 1332, width: 73, height: 14 },
      },
      labels: {
        admissions: { blocks: [
          { x: 485.5, top: 364, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 299, top: 590, anchor: 'middle', lines: [{ text: 'Admissions', size: 39, weight: 800 }] },
        ] },
        food_beverage: { blocks: [
          { x: 485.5, top: 712, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 299, top: 812, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Food &', size: 39, weight: 800 }, { text: 'Beverage', size: 39, weight: 800 },
          ] },
        ] },
        other_theatre: { blocks: [
          { x: 485.5, top: 979, anchor: 'middle', lineGap: 9, lines: [
            { text: '$value', size: 39, weight: 400 }, { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 302, top: 1057, anchor: 'middle', lines: [{ text: 'Other theatre', size: 38, weight: 800 }] },
          { x: 302, top: 1110, anchor: 'middle', lineGap: 7, lines: [
            { text: 'Gift Cards, Package tickets,', size: 24, weight: 400, color: NOTE },
            { text: 'Advertising, Retail, Rentals', size: 24, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [{ x: 952, top: 476, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '(1%) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1420, top: 309, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '68% margin', size: 28, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        film_exhibition_costs: { blocks: [{ x: 1420, top: 871, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Film exhibition', size: 35, weight: 800 }, { text: 'costs', size: 35, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        food_beverage_costs: { blocks: [{ x: 1420, top: 1114, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Food &', size: 35, weight: 800 }, { text: 'Beverage costs', size: 35, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1886, top: 216, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '0% margin', size: 28, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1886, top: 874, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
        ] }] },
        net_loss: { blocks: [{ x: 2216, top: 211, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Net loss', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
          { text: '(10%) margin', size: 28, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        other: { blocks: [{ x: 2464, top: 405, anchor: 'start', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
        operating: { blocks: [{ x: 2464, top: 542, anchor: 'start', lineGap: 8, lines: [
          { text: 'Operating', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '36% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        rent: { blocks: [{ x: 2464, top: 725, anchor: 'start', lineGap: 8, lines: [
          { text: 'Rent', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '17% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        depreciation_amortization: { blocks: [{ x: 2464, top: 908, anchor: 'start', lineGap: 8, lines: [
          { text: 'Depreciation &', size: 31, weight: 800 }, { text: 'Amortization', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 }, { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: 2464, top: 1135, anchor: 'start', lineGap: 8, lines: [
          { text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
          { text: '5% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        impairment: { blocks: [{ x: 2464, top: 1320, anchor: 'start', lineGap: 8, lines: [
          { text: 'Impairment', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
        ] }] },
      },
    },
    nodes: [
      { id: 'admissions', col: 0, order: 0, type: 'source', label: 'Admissions', value: 702, notes: ['(3%) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'food_beverage', col: 0, order: 1, type: 'source', label: 'Food & Beverage', value: 437, notes: ['(2%) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'other_theatre', col: 0, order: 2, type: 'source', label: 'Other theatre', value: 150, notes: ['+8% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1288, valueText: '$1,288M', notes: ['(1%) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 877, notes: ['68% margin', '+1pp Y/Y'] },
      { id: 'film_exhibition_costs', col: 2, order: 1, type: 'cost', label: ['Film exhibition', 'costs'], value: 326 },
      { id: 'food_beverage_costs', col: 2, order: 2, type: 'cost', label: ['Food &', 'Beverage costs'], value: 85 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0, notes: ['0% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 877 },
      { id: 'net_loss', col: 4, order: 0, type: 'cost', label: 'Net loss', value: -127, valueText: '($127M)', notes: ['(10%) margin', '+1pp Y/Y'], linkTint: LOSS_LINK },
      { id: 'other', col: 5, order: 0, type: 'cost', label: 'Other', value: 128 },
      { id: 'operating', col: 5, order: 1, type: 'cost', label: 'Operating', value: 470, notes: ['36% of revenue', '+3pp Y/Y'] },
      { id: 'rent', col: 5, order: 2, type: 'cost', label: 'Rent', value: 223, notes: ['17% of revenue', '+1pp Y/Y'] },
      { id: 'depreciation_amortization', col: 5, order: 3, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 80, notes: ['6% of revenue', '+0pp Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 61, notes: ['5% of revenue', '(0pp) Y/Y'] },
      { id: 'impairment', col: 5, order: 5, type: 'cost', label: 'Impairment', value: 44 },
    ],
    links: [
      { source: 'admissions', target: 'revenue', value: 702, sourceWidth: 191, targetWidth: 191, y0: 547.5, y1: 710.5, linkTint: SOURCE_LINK },
      { source: 'food_beverage', target: 'revenue', value: 437, sourceWidth: 118, targetWidth: 118, y0: 859, y1: 865, linkTint: SOURCE_LINK },
      { source: 'other_theatre', target: 'revenue', value: 150, sourceWidth: 41, targetWidth: 40, y0: 1086.5, y1: 944, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 877, sourceWidth: 239, targetWidth: 239, y0: 734.5, y1: 607.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'film_exhibition_costs', value: 326, sourceWidth: 87, targetWidth: 87, y0: 897.5, y1: 1051.5, linkTint: RED_LINK },
      { source: 'revenue', target: 'food_beverage_costs', value: 85, sourceWidth: 23, targetWidth: 23, y0: 952.5, y1: 1261.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0, width: 2, y0: 489, y1: 399, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 877, sourceWidth: 239, targetWidth: 240, y0: 607.5, y1: 732, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 1, width: 2, y0: 399, y1: 455, linkTint: LOSS_LINK },
      { source: 'net_loss', target: 'other', value: 127, sourceWidth: 34, targetWidth: 34, y0: 406, y1: 439, linkTint: LOSS_LINK },
      { source: 'operating_expenses', target: 'operating', value: 470, width: 127, y0: 675.5, y1: 599.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rent', value: 223, width: 60, y0: 769, y1: 811, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 80, width: 22, y0: 810, y1: 999, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 61, sourceWidth: 17, targetWidth: 13, y0: 829.5, y1: 1169.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'impairment', value: 44, width: 14, y0: 845, y1: 1339, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'AMC 娱乐 · 2025 财年第四季度',
        meta: {
          title: 'AMC 娱乐 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的三个月',
          titleTextLength: 1850,
        },
        nodes: {
          admissions: { label: '影院票务', notes: ['同比 (3%)'] },
          food_beverage: { label: '餐饮', notes: ['同比 (2%)'] },
          other_theatre: { label: '其他影院', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 +1 个百分点'] },
          film_exhibition_costs: { label: '电影放映成本' },
          food_beverage_costs: { label: '餐饮成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 0%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损', notes: ['利润率 (10%)', '同比 +1 个百分点'] },
          other: { label: '其他' },
          operating: { label: '运营', notes: ['占收入 36%', '同比 +3 个百分点'] },
          rent: { label: '租金', notes: ['占收入 17%', '同比 +1 个百分点'] },
          depreciation_amortization: { label: '折旧及摊销', notes: ['占收入 6%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 5%', '同比 (0 个百分点)'] },
          impairment: { label: '减值' },
        },
        layout: { labels: zhLayoutLabels },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();

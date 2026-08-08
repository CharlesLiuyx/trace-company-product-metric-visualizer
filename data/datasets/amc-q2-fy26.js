/* AMC Entertainment Q2 FY26 income statement ($M), reconstructed from the
 * 2667x1500 Source image. The three business image clusters reuse AMC's
 * already-validated runtime raster annotations. */
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
    <text x="3" y="122" font-family="Arial Rounded MT Bold,Arial,sans-serif"
      font-size="218" font-weight="800" letter-spacing="-19" textLength="460"
      lengthAdjust="spacingAndGlyphs" fill="${AMC_RED}">amc</text>`;

  const annotations = (isZh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="admissions" fill="${DARK}" text-anchor="middle">
        <rect x="180" y="590" width="240" height="62" fill="transparent"/>
        <text x="300" y="636" font-size="39" font-weight="800">${isZh ? '影院票务' : 'Admissions'}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="food_beverage" fill="${DARK}" text-anchor="middle">
        <rect x="230" y="790" width="200" height="140" fill="transparent"/>
        <text x="329.5" y="846" font-size="39" font-weight="800">${isZh ? '餐饮' : 'Food &amp;'}</text>
        <text x="329.5" y="893" font-size="39" font-weight="800">${isZh ? '' : 'Beverage'}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other_theatre" fill="${DARK}" text-anchor="middle">
        <rect x="65" y="1048" width="370" height="140" fill="transparent"/>
        <text x="289" y="1094" font-size="39" font-weight="800">${isZh ? '其他影院' : 'Other theatre'}</text>
        <g fill="${NOTE}" font-size="24" font-weight="400">
          <text x="264.5" y="1141">${isZh ? '礼品卡、套餐票、广告、' : 'Gift Cards, Package tickets,'}</text>
          <text x="264.5" y="1177">${isZh ? '零售、场地租赁' : 'Advertising, Retail, Rentals'}</text>
        </g>
      </g>
      <g class="sankey-interactive-annotation" data-node="net_loss"
        data-link-numerator="net_loss" data-link-denominator="other"
        data-link-anchor-x="2232" data-link-anchor-y="480">
        <path d="M2320 383 C2296 383 2295 480 2265 480 H2190"
          fill="none" stroke="${RED_LINK}" stroke-width="2"/>
        <rect x="2138" y="375" width="194" height="310" fill="transparent"/>
        <text x="2232" y="534" text-anchor="middle" font-size="39" font-weight="800" fill="${RED_LABEL}">${isZh ? '净亏损' : 'Net loss'}</text>
        <text x="2232" y="593" text-anchor="middle" font-size="39" fill="${RED_LABEL}">($10M)</text>
        <text x="2232" y="636" text-anchor="middle" font-size="28" fill="${NOTE}">${isZh ? '利润率 (1%)' : '(1%) margin'}</text>
        <text x="2232" y="675" text-anchor="middle" font-size="28" fill="${NOTE}">${isZh ? '同比 (0 个百分点)' : '(0pp) Y/Y'}</text>
      </g>
      <rect x="49" y="1199" width="739" height="159" rx="27" fill="#000000"/>
      <text x="418.5" y="1250" text-anchor="middle" font-size="25" fill="#ffffff">${isZh
        ? '<tspan font-weight="800">观影人次 7,100 万</tspan><tspan dx="9">同比 +14%</tspan>'
        : '<tspan font-weight="800">Attendance 71M</tspan><tspan dx="9">+14% Y/Y</tspan>'}</text>
      <text x="418.5" y="1307" text-anchor="middle" font-size="25" fill="#ffffff">${isZh
        ? '<tspan font-weight="800">餐饮客单价</tspan><tspan dx="9">$8.08，同比 +2%</tspan>'
        : '<tspan font-weight="800">Food &amp; Beverage per patron</tspan><tspan dx="9">$8.08 +2% Y/Y</tspan>'}</text>
    </g>`;

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const labels = (isZh) => ({
    admissions: { blocks: [
      block(490.5, 387, 'middle', [line('$value', 39), line(isZh ? '同比 +13%' : '+13% Y/Y', 28, 400, NOTE)], 9),
    ] },
    food_beverage: { blocks: [
      block(496.5, 714.5, 'middle', [line('$value', 39), line(isZh ? '同比 +15%' : '+15% Y/Y', 28, 400, NOTE)], 9),
    ] },
    other_theatre: { blocks: [
      block(491.5, 973.5, 'middle', [line('$value', 39), line(isZh ? '同比 +16%' : '+16% Y/Y', 28, 400, NOTE)], 9),
    ] },
    revenue: { blocks: [block(947.5, 456, 'middle', [
      line(isZh ? '收入' : 'Revenue', 40, 800),
      line('$value', 39),
      line(isZh ? '同比 +14%' : '+14% Y/Y', 28, 400, NOTE),
    ], 9)] },
    gross_profit: { blocks: [block(1421.5, 321, 'middle', [
      line(isZh ? '毛利润' : 'Gross profit', 39, 800),
      line('$value', 39),
      line(isZh ? '利润率 66%' : '66% margin', 28, 400, NOTE),
      line(isZh ? '同比 +1 个百分点' : '+1pp Y/Y', 28, 400, NOTE),
    ], 9)] },
    film_exhibition_costs: { blocks: [block(1421.5, 792, 'middle', isZh
      ? [line('电影放映', 35, 800), line('成本', 35, 800), line('$value', 35)]
      : [line('Film exhibition', 35, 800), line('costs', 35, 800), line('$value', 35)], 8)] },
    food_beverage_costs: { blocks: [block(1421.5, 1088, 'middle', isZh
      ? [line('餐饮成本', 35, 800), line('$value', 35)]
      : [line('Food &', 35, 800), line('Beverage costs', 35, 800), line('$value', 35)], 8)] },
    operating_profit: { blocks: [block(1889, 233, 'middle', [
      line(isZh ? '营业利润' : 'Operating profit', 39, 800),
      line('$value', 39),
      line(isZh ? '利润率 15%' : '15% margin', 28, 400, NOTE),
      line(isZh ? '同比 +8 个百分点' : '+8pp Y/Y', 28, 400, NOTE),
    ], 9)] },
    operating_expenses: { blocks: [block(1882, 848.5, 'middle', isZh
      ? [line('运营费用', 39, 800), line('$value', 38)]
      : [line('Operating', 39, 800), line('expenses', 39, 800), line('$value', 38)], 8)] },
    other: { blocks: [block(2459, 323, 'start', [
      line(isZh ? '其他' : 'Other', 31, 800),
      line('$value', 31),
    ], 8)] },
    operating: { blocks: [block(2424.5, 728, 'start', [
      line(isZh ? '运营' : 'Operating', 31, 800),
      line('$value', 31),
      line(isZh ? '占收入 29%' : '29% of revenue', 28, 400, NOTE),
      line(isZh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 28, 400, NOTE),
    ], 8)] },
    rent: { blocks: [block(2425.5, 910, 'start', [
      line(isZh ? '租金' : 'Rent', 31, 800),
      line('$value', 31),
      line(isZh ? '占收入 14%' : '14% of revenue', 28, 400, NOTE),
      line(isZh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, 400, NOTE),
    ], 8)] },
    depreciation_amortization: { blocks: [block(2432, 1086, 'start', [
      line(isZh ? '折旧及摊销' : 'D&A', 31, 800),
      line('$value', 31),
      line(isZh ? '占收入 5%' : '5% of revenue', 28, 400, NOTE),
      line(isZh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 28, 400, NOTE),
    ], 8)] },
    ga: { blocks: [block(2439, 1251, 'start', [
      line(isZh ? '管理费用' : 'G&A', 31, 800),
      line('$value', 31),
      line(isZh ? '占收入 3%' : '3% of revenue', 28, 400, NOTE),
      line(isZh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 28, 400, NOTE),
    ], 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amc-q2-fy26',
    name: 'AMC Entertainment · Q2 FY26',
    company: 'AMC Entertainment',
    meta: {
      company: 'AMC Entertainment',
      title: 'AMC Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Three months ended Jun. 30, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/amc-q2-fy26.png', width: 2667, height: 1500 },
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
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'amc-admissions-tickets', href: 'data/assets/raster-annotations/amc/admissions-tickets.png', x: 241, y: 426, width: 180, height: 138 },
      { key: 'amc-food-beverage', href: 'data/assets/raster-annotations/amc/food-beverage.png', x: 268, y: 649, width: 130, height: 158 },
      { key: 'amc-other-theatre-seat', href: 'data/assets/raster-annotations/amc/other-theatre-seat.png', x: 268, y: 920, width: 132, height: 119 },
    ],
    layout: {
      scale: 1,
      nodes: {
        admissions: { x: 452, y: 483, width: 71, height: 185 },
        food_beverage: { x: 452, y: 810, width: 71, height: 122 },
        other_theatre: { x: 452, y: 1067, width: 71, height: 33 },
        revenue: { x: 919, y: 593, width: 70, height: 345 },
        gross_profit: { x: 1386, y: 499, width: 71, height: 227 },
        film_exhibition_costs: { x: 1386, y: 940, width: 71, height: 93 },
        food_beverage_costs: { x: 1386, y: 1234, width: 71, height: 21 },
        operating_profit: { x: 1854, y: 409, width: 70, height: 50 },
        operating_expenses: { x: 1854, y: 652, width: 70, height: 174 },
        other: { x: 2320, y: 330, width: 71, height: 53 },
        operating: { x: 2320, y: 737, width: 71, height: 96 },
        rent: { x: 2320, y: 942, width: 71, height: 46 },
        depreciation_amortization: { x: 2320, y: 1119, width: 71, height: 15 },
        ga: { x: 2320, y: 1281, width: 71, height: 9 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      { id: 'net_loss', representation: 'annotation', label: 'Net loss', value: -10, valueText: '($10M)', type: 'cost', labelColor: RED_LABEL },
    ],
    nodes: [
      { id: 'admissions', col: 0, order: 0, type: 'source', label: 'Admissions', value: 863, notes: ['+13% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'food_beverage', col: 0, order: 1, type: 'source', label: 'Food & Beverage', value: 576, notes: ['+15% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'other_theatre', col: 0, order: 2, type: 'source', label: 'Other theatre', value: 158, notes: ['+16% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1597, valueText: '$1,597M', notes: ['+14% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1049, valueText: '$1,049M', notes: ['66% margin', '+1pp Y/Y'] },
      { id: 'film_exhibition_costs', col: 2, order: 1, type: 'cost', label: ['Film exhibition', 'costs'], value: 440 },
      { id: 'food_beverage_costs', col: 2, order: 2, type: 'cost', label: ['Food &', 'Beverage costs'], value: 108 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 238, notes: ['15% margin', '+8pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 810 },
      { id: 'other', col: 4, order: 0, type: 'cost', label: 'Other', value: 249 },
      { id: 'operating', col: 4, order: 1, type: 'cost', label: 'Operating', value: 458, notes: ['29% of revenue', '(4pp) Y/Y'] },
      { id: 'rent', col: 4, order: 2, type: 'cost', label: 'Rent', value: 224, notes: ['14% of revenue', '(2pp) Y/Y'] },
      { id: 'depreciation_amortization', col: 4, order: 3, type: 'cost', label: 'D&A', value: 76, notes: ['5% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 52, notes: ['3% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'admissions', target: 'revenue', value: 863, sourceWidth: 185, targetWidth: 185, y0: 575.5, y1: 685.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'food_beverage', target: 'revenue', value: 576, sourceWidth: 122, targetWidth: 122, y0: 871, y1: 839, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'other_theatre', target: 'revenue', value: 158, sourceWidth: 33, targetWidth: 38, y0: 1083.5, y1: 919, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1049, sourceWidth: 227, targetWidth: 227, y0: 706.5, y1: 612.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'film_exhibition_costs', value: 440, sourceWidth: 96, targetWidth: 93, y0: 868, y1: 986.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'food_beverage_costs', value: 108, sourceWidth: 22, targetWidth: 21, y0: 927, y1: 1244.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 238, sourceWidth: 50, targetWidth: 50, y0: 524, y1: 434, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 810, sourceWidth: 177, targetWidth: 174, y0: 637.5, y1: 739, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 238, sourceWidth: 50, targetWidth: 53, y0: 434, y1: 356.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'operating', value: 458, sourceWidth: 101, targetWidth: 96, y0: 702.5, y1: 785, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rent', value: 224, sourceWidth: 49, targetWidth: 46, y0: 777.5, y1: 965, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 76, sourceWidth: 15, targetWidth: 15, y0: 809.5, y1: 1126.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 52, sourceWidth: 9, targetWidth: 9, y0: 821.5, y1: 1285.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'AMC 娱乐 · 2026 财年第二季度',
        meta: {
          title: 'AMC 娱乐 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的三个月',
          titleTextLength: 1850,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { net_loss: { label: '净亏损' } },
        nodes: {
          admissions: { label: '影院票务', notes: ['同比 +13%'] },
          food_beverage: { label: '餐饮', notes: ['同比 +15%'] },
          other_theatre: { label: '其他影院', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 66%', '同比 +1 个百分点'] },
          film_exhibition_costs: { label: '电影放映成本' },
          food_beverage_costs: { label: '餐饮成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +8 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          operating: { label: '运营', notes: ['占收入 29%', '同比 (4 个百分点)'] },
          rent: { label: '租金', notes: ['占收入 14%', '同比 (2 个百分点)'] },
          depreciation_amortization: { label: '折旧及摊销', notes: ['占收入 5%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

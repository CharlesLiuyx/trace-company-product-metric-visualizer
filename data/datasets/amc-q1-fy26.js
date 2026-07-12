/* AMC Entertainment Q1 FY26 income statement ($M), reconstructed from the
 * processed source using fixed SVG-only Sankey geometry. The three business
 * image clusters reuse AMC's already-validated runtime raster annotations. */
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

  const attendanceCard = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="49" y="1199" width="739" height="159" rx="27" fill="#000000"/>
      <text x="418.5" y="1250" text-anchor="middle" font-size="25" fill="#ffffff">${zh
        ? '<tspan font-weight="800">观影人次 4,800 万</tspan><tspan dx="9">同比 +14%</tspan>'
        : '<tspan font-weight="800">Attendance 48M</tspan><tspan dx="9">+14% Y/Y</tspan>'}</text>
      <text x="418.5" y="1307" text-anchor="middle" font-size="25" fill="#ffffff">${zh
        ? '<tspan font-weight="800">餐饮客单价</tspan><tspan dx="9">$7.29，同比 +8%</tspan>'
        : '<tspan font-weight="800">Food &amp; Beverage per patron</tspan><tspan dx="9">$7.29 +8% Y/Y</tspan>'}</text>
    </g>`;

  const labels = (zh) => ({
    admissions: { blocks: [
      { x: 490.5, top: 370, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: zh ? '同比 +22%' : '+22% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 299, top: 597, anchor: 'middle', lines: [{ text: zh ? '影院票务' : 'Admissions', size: 39, weight: 800 }] },
    ] },
    food_beverage: { blocks: [
      { x: 496.5, top: 709, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: zh ? '同比 +23%' : '+23% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
      zh
        ? { x: 299, top: 812, anchor: 'middle', lines: [{ text: '餐饮', size: 39, weight: 800 }] }
        : { x: 299, top: 812, anchor: 'middle', lineGap: 8, lines: [{ text: 'Food &', size: 39, weight: 800 }, { text: 'Beverage', size: 39, weight: 800 }] },
    ] },
    other_theatre: { blocks: [
      { x: 490.5, top: 974, anchor: 'middle', lineGap: 9, lines: [
        { text: '$value', size: 39, weight: 400 }, { text: zh ? '同比 +13%' : '+13% Y/Y', size: 28, weight: 400, color: NOTE },
      ] },
      { x: 288, top: 1057, anchor: 'middle', lines: [{ text: zh ? '其他影院' : 'Other theatre', size: zh ? 38 : 39, weight: 800 }] },
      { x: 302, top: 1110, anchor: 'middle', lineGap: 7, lines: zh
        ? [{ text: '礼品卡、套餐票、广告、', size: 24, weight: 400, color: NOTE }, { text: '零售、场地租赁', size: 24, weight: 400, color: NOTE }]
        : [{ text: 'Gift Cards, Package tickets,', size: 24, weight: 400, color: NOTE }, { text: 'Advertising, Retail, Rentals', size: 24, weight: 400, color: NOTE }],
      },
    ] },
    revenue: { blocks: [{ x: 942, top: 443, anchor: 'middle', lineGap: 9, lines: [
      { text: zh ? '收入' : 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: zh ? '同比 +21%' : '+21% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1414.5, top: 296, anchor: 'middle', lineGap: 9, lines: [
      { text: zh ? '毛利润' : 'Gross profit', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 },
      { text: zh ? '利润率 69%' : '69% margin', size: 28, weight: 400, color: NOTE },
      { text: zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    film_exhibition_costs: { blocks: [{ x: 1421.5, top: 825, anchor: 'middle', lineGap: 8, lines: zh
      ? [{ text: '电影放映', size: 35, weight: 800 }, { text: '成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }]
      : [{ text: 'Film exhibition', size: 35, weight: 800 }, { text: 'costs', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }],
    }] },
    food_beverage_costs: { blocks: [{ x: 1421.5, top: 1090, anchor: 'middle', lineGap: 8, lines: zh
      ? [{ text: '餐饮成本', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }]
      : [{ text: 'Food &', size: 35, weight: 800 }, { text: 'Beverage costs', size: 35, weight: 800 }, { text: '$value', size: 35, weight: 400 }],
    }] },
    operating_loss: { blocks: [{ x: 1714.5, top: 934, anchor: 'middle', lineGap: 9, lines: zh
      ? [{ text: '营业亏损', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 (4%)', size: 28, weight: 400, color: NOTE }, { text: '同比 +13 个百分点', size: 28, weight: 400, color: NOTE }]
      : [{ text: 'Operating', size: 39, weight: 800 }, { text: 'Loss', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(4%) margin', size: 28, weight: 400, color: NOTE }, { text: '+13pp Y/Y', size: 28, weight: 400, color: NOTE }],
    }] },
    operating_expenses: { blocks: [{ x: 1877, top: 430, anchor: 'middle', lineGap: 8, lines: zh
      ? [{ text: '运营费用', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }]
      : [{ text: 'Operating', size: 39, weight: 800 }, { text: 'expenses', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }],
    }] },
    operating: { blocks: [{ x: 2442, top: 446, anchor: 'start', lineGap: 8, lines: [
      { text: zh ? '运营' : 'Operating', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: zh ? '占收入 39%' : '39% of revenue', size: 28, weight: 400, color: NOTE },
      { text: zh ? '同比 (7 个百分点)' : '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    rent: { blocks: [{ x: zh ? 2440 : 2461, top: 704, anchor: 'start', lineGap: 8, lines: [
      { text: zh ? '租金' : 'Rent', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: zh ? '占收入 21%' : '21% of revenue', size: 28, weight: 400, color: NOTE },
      { text: zh ? '同比 (4 个百分点)' : '(4pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    depreciation_amortization: { blocks: [{ x: 2440, top: 919, anchor: 'start', lineGap: 8, lines: zh
      ? [{ text: '折旧及摊销', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 7%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE }]
      : [{ text: 'Depreciation &', size: 31, weight: 800 }, { text: 'Amortization', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE }],
    }] },
    ga: { blocks: [{ x: zh ? 2440 : 2464, top: 1175, anchor: 'start', lineGap: 8, lines: [
      { text: zh ? '管理费用' : 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 },
      { text: zh ? '占收入 6%' : '6% of revenue', size: 28, weight: 400, color: NOTE },
      { text: zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amc-q1-fy26',
    name: 'AMC Entertainment · Q1 FY26',
    company: 'AMC Entertainment',
    meta: {
      company: 'AMC Entertainment',
      title: 'AMC Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Three months ended Mar. 31, 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/amc-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 198, titleSize: 125, titleWeight: 800, titleTextLength: 2020,
      hidePeriodStamp: true,
      logoWidth: 500, logoHeight: 130, logoY: 277, logoViewBox: '0 0 500 130', logoSvg: amcLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: attendanceCard(false),
    rasterAnnotations: [
      { key: 'amc-admissions-tickets', href: 'data/assets/raster-annotations/amc/admissions-tickets.png', x: 241, y: 426, width: 180, height: 138 },
      { key: 'amc-food-beverage', href: 'data/assets/raster-annotations/amc/food-beverage.png', x: 268, y: 649, width: 130, height: 158 },
      { key: 'amc-other-theatre-seat', href: 'data/assets/raster-annotations/amc/other-theatre-seat.png', x: 268, y: 920, width: 132, height: 119 },
    ],
    layout: {
      scale: 1,
      nodes: {
        admissions: { x: 452, y: 468, width: 71, height: 193 },
        food_beverage: { x: 452, y: 807, width: 71, height: 114 },
        other_theatre: { x: 452, y: 1074, width: 71, height: 37 },
        revenue: { x: 919, y: 596, width: 70, height: 348 },
        gross_profit: { x: 1386, y: 486, width: 71, height: 241 },
        film_exhibition_costs: { x: 1386, y: 971, width: 71, height: 84 },
        food_beverage_costs: { x: 1386, y: 1236, width: 71, height: 20 },
        operating_loss: { x: 1679, y: 901, width: 71, height: 14 },
        operating_expenses: { x: 1854, y: 596, width: 70, height: 255 },
        operating: { x: 2320, y: 450, width: 71, height: 135 },
        rent: { x: 2318, y: 736, width: 71, height: 73 },
        depreciation_amortization: { x: 2320, y: 986, width: 71, height: 23 },
        ga: { x: 2320, y: 1209, width: 71, height: 19 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'admissions', col: 0, order: 0, type: 'source', label: 'Admissions', value: 578, notes: ['+22% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'food_beverage', col: 0, order: 1, type: 'source', label: 'Food & Beverage', value: 347, notes: ['+23% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'other_theatre', col: 0, order: 2, type: 'source', label: 'Other theatre', value: 120, notes: ['+13% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1045, notes: ['+21% Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 723, notes: ['69% margin', '(0pp) Y/Y'] },
      { id: 'film_exhibition_costs', col: 2, order: 1, type: 'cost', label: ['Film exhibition', 'costs'], value: 256 },
      { id: 'food_beverage_costs', col: 2, order: 2, type: 'cost', label: ['Food &', 'Beverage costs'], value: 66 },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'Loss'], value: -46, valueText: '($46M)', notes: ['(4%) margin', '+13pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 769 },
      { id: 'operating', col: 5, order: 0, type: 'cost', label: 'Operating', value: 407, notes: ['39% of revenue', '(7pp) Y/Y'] },
      { id: 'rent', col: 5, order: 1, type: 'cost', label: 'Rent', value: 224, notes: ['21% of revenue', '(4pp) Y/Y'] },
      { id: 'depreciation_amortization', col: 5, order: 2, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 76, notes: ['7% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 62, notes: ['6% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'admissions', target: 'revenue', value: 578, sourceWidth: 193, targetWidth: 193, y0: 564.5, y1: 692.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'food_beverage', target: 'revenue', value: 347, sourceWidth: 114, targetWidth: 114, y0: 864, y1: 847, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'other_theatre', target: 'revenue', value: 120, sourceWidth: 37, targetWidth: 40, y0: 1092.5, y1: 924, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 723, sourceWidth: 241, targetWidth: 241, y0: 716, y1: 606.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'film_exhibition_costs', value: 256, sourceWidth: 84, targetWidth: 84, y0: 879, y1: 1013, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'food_beverage_costs', value: 66, sourceWidth: 23, targetWidth: 20, y0: 932.5, y1: 1246, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 723, sourceWidth: 241, targetWidth: 241, y0: 606.5, y1: 716.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 46, sourceWidth: 14, targetWidth: 14, y0: 908, y1: 844, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1750, x1: 1854, c1x: 1784, c1y: 908, c2x: 1822, c2y: 844 } },
      { source: 'operating_expenses', target: 'operating', value: 407, sourceWidth: 135, targetWidth: 135, y0: 663.5, y1: 517.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rent', value: 224, sourceWidth: 73, targetWidth: 73, y0: 768.5, y1: 772.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 76, sourceWidth: 28, targetWidth: 23, y0: 819, y1: 997.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 62, sourceWidth: 19, targetWidth: 19, y0: 842, y1: 1218.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'AMC 娱乐 · 2026 财年第一季度',
        meta: { title: 'AMC 娱乐 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日的三个月', titleTextLength: 1850 },
        nodes: {
          admissions: { label: '影院票务', notes: ['同比 +22%'] }, food_beverage: { label: '餐饮', notes: ['同比 +23%'] },
          other_theatre: { label: '其他影院', notes: ['同比 +13%'] }, revenue: { label: '收入', notes: ['同比 +21%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 69%', '同比 (0 个百分点)'] }, film_exhibition_costs: { label: '电影放映成本' },
          food_beverage_costs: { label: '餐饮成本' }, operating_loss: { label: '营业亏损', notes: ['利润率 (4%)', '同比 +13 个百分点'] },
          operating_expenses: { label: '运营费用' }, operating: { label: '运营', notes: ['占收入 39%', '同比 (7 个百分点)'] },
          rent: { label: '租金', notes: ['占收入 21%', '同比 (4 个百分点)'] }, depreciation_amortization: { label: '折旧及摊销', notes: ['占收入 7%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: attendanceCard(true),
      },
    },
  });
})();

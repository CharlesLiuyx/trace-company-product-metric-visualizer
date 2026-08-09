/* ====================================================================
 * Sony - Q1 FY25 income statement (¥B)
 * Reconstructed from input/processed/sony-q1-fy25.png as a fixed
 * d3-sankey layout. The Sony wordmark is the reusable pure-SVG asset.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#797979';
  const BLACK = '#000000';
  const BACKGROUND = '#f2f2f2';
  const ORANGE = '#d95f02';
  const ORANGE_LINK = '#e6af86';
  const PINK = '#e7298a';
  const PINK_LINK = '#ed97c2';
  const GOLD = '#bf9b30';
  const GOLD_LINK = '#dbca9b';
  const BLUE = '#27445c';
  const BLUE_LINK = '#97a4ae';
  const DEEP_GREEN = '#023020';
  const DEEP_GREEN_LINK = '#869b93';
  const OTHER = '#5e5e5e';
  const OTHER_LINK = '#cfcfcf';
  const PURPLE = '#4b00b0';
  const PURPLE_LINK = '#a685d3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const sonyWordmark = BUSINESS_ICONS.sonyCompanyWordmark || `
    <text x="0" y="104" font-family="Times New Roman, Georgia, serif" font-size="116" font-weight="900" fill="${BLACK}"
      textLength="467" lengthAdjust="spacingAndGlyphs">SONY</text>`;

  function annotations(unitText) {
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="324" y="281" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
        <g transform="translate(704 338)" data-typography-role="brand">${sonyWordmark}</g>
      </g>`;
  }

  function labels(t) {
    const valueBlock = (x, top, color, note, lineGap = 10) => ({
      x, top, anchor: 'middle', lineGap,
      lines: [
        { text: '$value', size: 39, weight: 400, color },
        { text: note, size: 28, weight: 400, color: NOTE },
      ],
    });
    const segmentNameBlock = (x, top, color, name, margin, size = 40) => ({
      x, top, anchor: 'end', lineGap: 13,
      lines: [
        { text: name, size, weight: 800, color },
        { text: margin, size: 28, weight: 400, color: NOTE },
      ],
    });
    return {
      game_network: { blocks: [
        valueBlock(469, 301, ORANGE, t.gameYoy),
        segmentNameBlock(384, 401, ORANGE, t.game, t.gameMargin),
      ] },
      music: { blocks: [
        valueBlock(459.5, 526, PINK, t.musicYoy),
        segmentNameBlock(361.5, 617, PINK, t.music, t.musicMargin),
      ] },
      pictures: { blocks: [
        valueBlock(460.5, 687, GOLD, t.picturesYoy),
        segmentNameBlock(366.5, 780, GOLD, t.pictures, t.picturesMargin),
      ] },
      technology: { blocks: [
        valueBlock(452.5, 842, BLUE, t.technologyYoy),
        segmentNameBlock(368.5, 929, BLUE, t.technology, t.technologyMargin),
      ] },
      imaging_sensing: { blocks: [
        valueBlock(469, 1009, DEEP_GREEN, t.imagingYoy),
        segmentNameBlock(386, 1102, DEEP_GREEN, t.imaging, t.imagingMargin, 39),
      ] },
      other_revenue: { blocks: [
        valueBlock(471, 1185.5, OTHER, t.otherRevenueYoy, 15),
        { x: 302, top: 1255, anchor: 'end', lines: [{ text: t.otherRevenue, size: 40, weight: 800, color: OTHER }] },
      ] },
      revenue: { blocks: [{
        x: 940, top: 527, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.sales, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      financial_services: { blocks: [{
        x: 1085, top: 1126, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.financialServices, size: 40, weight: 800, color: PURPLE },
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: t.financialServicesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1403.5, top: 374, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: t.grossYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      cost_of_sales: { blocks: [{
        x: 1407, top: 1085, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.costOfSales, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1855, top: 279.5, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: t.operatingYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      operating_expenses: { blocks: [{
        x: 1868, top: 788.5, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
        x: 1676, top: 815.5, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.other, size: 31, weight: 800, color: GREEN_LABEL },
          { text: t.income, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      other_after_operating: { blocks: [{
        x: 2190, top: 470, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.other, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      net_profit: { blocks: [
        { x: 2398.5, top: 300.5, anchor: 'start', lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }] },
        { x: 2490.5, top: 355.5, anchor: 'middle', lineGap: 14, lines: [
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.netMargin, size: 28, weight: 400, color: NOTE },
          { text: t.netYoy, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      tax: { blocks: [{
        x: 2482, top: 563, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.tax, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }],
      }] },
      sga: { blocks: [{
        x: 2492, top: 792, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.sga, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }],
      }] },
      other_expenses: { blocks: [{
        x: 2482, top: 1021, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.otherExpense, size: 31, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '+8% Y/Y', gameMargin: '16% operating margin',
    music: 'Music', musicYoy: '+5% Y/Y', musicMargin: '20% operating margin',
    pictures: 'Pictures', picturesYoy: '(3%) Y/Y', picturesMargin: '6% operating margin',
    technology: 'Technology', technologyYoy: '(11%) Y/Y', technologyMargin: '8% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+15% Y/Y', imagingMargin: '13% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '+21% Y/Y',
    sales: 'Sales', salesYoy: '+2% Y/Y', financialServices: 'Financial services', financialServicesYoy: '(17%) Y/Y',
    grossProfit: 'Gross profit', grossMargin: '32% margin', grossYoy: '+2pp Y/Y', costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '13% margin', operatingYoy: '+3pp Y/Y',
    operating: 'Operating', expenses: 'expenses', other: 'Other', income: 'income', netProfit: 'Net profit', netMargin: '10% margin', netYoy: '+2pp Y/Y',
    tax: 'Tax', sga: 'SG&A', otherExpense: 'Other',
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 +8%', gameMargin: '营业利润率 16%',
    music: '音乐', musicYoy: '同比 +5%', musicMargin: '营业利润率 20%',
    pictures: '影视', picturesYoy: '同比 (3%)', picturesMargin: '营业利润率 6%',
    technology: '技术', technologyYoy: '同比 (11%)', technologyMargin: '营业利润率 8%',
    imaging: '成像与传感', imagingYoy: '同比 +15%', imagingMargin: '营业利润率 13%',
    otherRevenue: '其他', otherRevenueYoy: '同比 +21%',
    sales: '销售额', salesYoy: '同比 +2%', financialServices: '金融服务', financialServicesYoy: '同比 (17%)',
    grossProfit: '毛利润', grossMargin: '利润率 32%', grossYoy: '同比 +2 个百分点', costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 13%', operatingYoy: '同比 +3 个百分点',
    operating: '运营', expenses: '费用', other: '其他', income: '收入', netProfit: '净利润', netMargin: '利润率 10%', netYoy: '同比 +2 个百分点',
    tax: '税费', sga: '销售、一般及行政费用', otherExpense: '其他',
  };
  const labelsZh = labels(zh);
  labelsZh.financial_services.blocks[0].x = 1085;
  labelsZh.other_income.blocks[0].lines.splice(0, 2, { text: '其他收入', size: 31, weight: 800, color: GREEN_LABEL });
  labelsZh.sga.blocks[0].x = 2510;
  labelsZh.sga.blocks[0].lines[0].size = 26;
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q1-fy25',
    name: 'Sony · Q1 FY25',
    company: 'Sony',
    meta: {
      company: 'Sony', title: 'Sony Q1 FY25 Income Statement', period: 'Q1 FY25', periodNote: 'Ending June 2025',
      currency: '¥', unit: 'B', decimals: 0,
      referenceImage: { src: 'input/processed/sony-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2024,
      periodX: 1470, periodY: 1328, periodNoteY: 1373,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, titleColor: TITLE, subtitleColor: '#5e5e5e', noteColor: NOTE, interfaceAudit: { mode: 'error' },
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: '#858585', hub: '#858585', profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen'),
    layout: {
      nodes: {
        game_network: { x: 435, y: 396, width: 71, height: 103 }, music: { x: 435, y: 619, width: 71, height: 50 },
        pictures: { x: 435, y: 784, width: 71, height: 35 }, technology: { x: 435, y: 937, width: 71, height: 57 },
        imaging_sensing: { x: 435, y: 1109, width: 71, height: 44 }, other_revenue: { x: 435, y: 1279, width: 71, height: 1 },
        revenue: { x: 902, y: 673, width: 70, height: 298 }, financial_services: { x: 1046, y: 1104, width: 72, height: 7 },
        gross_profit: { x: 1369, y: 564, width: 71, height: 91 }, cost_of_sales: { x: 1369, y: 868, width: 71, height: 196 },
        operating_profit: { x: 1837, y: 465, width: 70, height: 37 }, operating_expenses: { x: 1834, y: 710, width: 70, height: 57 },
        other_income: { x: 1639, y: 797, width: 72, height: 2 }, other_after_operating: { x: 2158, y: 454, width: 70, height: 2 },
        net_profit: { x: 2303, y: 373, width: 71, height: 27 }, tax: { x: 2303, y: 599, width: 71, height: 9 },
        sga: { x: 2303, y: 834, width: 71, height: 55 }, other_expenses: { x: 2303, y: 1089, width: 71, height: 1 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 937, valueText: '¥937B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 465, valueText: '¥465B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 327, valueText: '¥327B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 534, valueText: '¥534B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 408, valueText: '¥408B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: en.otherRevenue, value: 19, valueText: '¥19B', notes: [en.otherRevenueYoy], color: OTHER, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: en.sales, value: 2622, valueText: '¥2,622B', notes: [en.salesYoy], color: BLACK, labelColor: BLACK, linkTint: '#858585' },
      { id: 'financial_services', col: 2, order: 1, type: 'cost', label: en.financialServices, value: -69, valueText: '(¥69B)', notes: [en.financialServicesYoy], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: en.grossProfit, value: 846, valueText: '¥846B', notes: [en.grossMargin, en.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 2, type: 'cost', label: en.costOfSales, value: 1775, valueText: '(¥1,775B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: en.operatingProfit, value: 340, valueText: '¥340B', notes: [en.operatingMargin, en.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 507, valueText: '(¥507B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 2, type: 'profit', label: `${en.other} ${en.income}`, value: 10, valueText: '¥10B', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_after_operating', col: 4, order: 0, type: 'profit', label: en.other, value: 17, valueText: '¥17B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: en.netProfit, value: 263, valueText: '¥263B', notes: [en.netMargin, en.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: en.tax, value: 94, valueText: '(¥94B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: en.sga, value: 515, valueText: '(¥515B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 4, type: 'cost', label: [en.otherExpense, en.expenses], value: 2, valueText: '(¥2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 937, sourceWidth: 103, targetWidth: 103, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 465, sourceWidth: 50, targetWidth: 53, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 327, sourceWidth: 35, targetWidth: 36, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 534, sourceWidth: 57, targetWidth: 60, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 408, sourceWidth: 44, targetWidth: 45, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'other_revenue', target: 'revenue', value: 19, sourceWidth: 1, targetWidth: 1, targetOrder: 5, linkTint: OTHER_LINK },
      { source: 'revenue', target: 'gross_profit', value: 846, sourceWidth: 93, targetWidth: 91, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1775, sourceWidth: 196, targetWidth: 196, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'financial_services', value: 69, sourceWidth: 9, targetWidth: 7, sourceOrder: 2, targetOrder: 0, linkTint: PURPLE_LINK, y0: 966.5, y1: 1107.5, curve: { x0: 972, x1: 1046, c1x: 987, c1y: 966.5, c2x: 1026, c2y: 1107.5 } },
      { source: 'gross_profit', target: 'operating_profit', value: 340, sourceWidth: 34, targetWidth: 37, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 507, sourceWidth: 57, targetWidth: 55, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 10, sourceWidth: 2, targetWidth: 2, targetOrder: 1, linkTint: GREEN_LINK, y0: 798, y1: 766, curve: { x0: 1711, x1: 1834, c1x: 1745, c1y: 798, c2x: 1797, c2y: 766 } },
      { source: 'operating_profit', target: 'net_profit', value: 246, sourceWidth: 27, targetWidth: 25, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 94, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_after_operating', target: 'net_profit', value: 17, sourceWidth: 2, targetWidth: 2, targetOrder: 1, linkTint: GREEN_LINK, y0: 455, y1: 399, curve: { x0: 2228, x1: 2303, c1x: 2252, c1y: 455, c2x: 2284, c2y: 399 } },
      { source: 'operating_expenses', target: 'sga', value: 515, sourceWidth: 55, targetWidth: 55, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_expenses', value: 2, sourceWidth: 1, targetWidth: 1, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, y0: 766.5, y1: 1089.5, curve: { x0: 1904, x1: 2303, c1x: 2066, c1y: 766.5, c2x: 2158, c2y: 1089.5 } },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2025 财年第一季度',
        meta: { title: 'Sony 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2025 年 6 月', titleTextLength: 1660 },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] }, music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] }, technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] }, other_revenue: { label: zh.otherRevenue, notes: [zh.otherRevenueYoy] },
          revenue: { label: zh.sales, notes: [zh.salesYoy] }, financial_services: { label: zh.financialServices, notes: [zh.financialServicesYoy] },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] }, cost_of_sales: { label: zh.costOfSales },
          operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] }, operating_expenses: { label: [zh.operating, zh.expenses] },
          other_income: { label: '其他收入' }, other_after_operating: { label: zh.other },
          net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] }, tax: { label: zh.tax }, sga: { label: zh.sga }, other_expenses: { label: [zh.otherExpense, zh.expenses] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

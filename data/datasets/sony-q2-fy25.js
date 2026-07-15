/* ====================================================================
 * Sony - Q2 FY25 income statement (¥B)
 * Reconstructed from input/processed/sony-q2-fy25.png as a fixed
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
        <line x1="2143" y1="426" x2="2218" y2="426" stroke="${GREEN}" stroke-width="2" />
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
        valueBlock(474, 697, GOLD, t.picturesYoy),
        segmentNameBlock(380, 780, GOLD, t.pictures, t.picturesMargin),
      ] },
      technology: { blocks: [
        valueBlock(469, 855, BLUE, t.technologyYoy),
        segmentNameBlock(385, 939, BLUE, t.technology, t.technologyMargin),
      ] },
      imaging_sensing: { blocks: [
        valueBlock(469, 1011, DEEP_GREEN, t.imagingYoy),
        segmentNameBlock(386, 1095, DEEP_GREEN, t.imaging, t.imagingMargin, 39),
      ] },
      other_revenue: { blocks: [
        valueBlock(471, 1179, OTHER, t.otherRevenueYoy, 15),
        { x: 302, top: 1253, anchor: 'end', lines: [{ text: t.otherRevenue, size: 40, weight: 800, color: OTHER }] },
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
        x: 1085, top: 1082, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.financialServices, size: 40, weight: 800, color: PURPLE },
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: t.financialServicesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1421, top: 353, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: t.grossYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      cost_of_sales: { blocks: [{
        x: 1390, top: 1053, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.costOfSales, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1899, top: 262, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: t.operatingYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      operating_expenses: { blocks: [{
        x: 1875, top: 760, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
        x: 2208, top: 440, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      net_profit: { blocks: [
        { x: 2390, top: 308, anchor: 'start', lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }] },
        { x: 2482, top: 363, anchor: 'middle', lineGap: 14, lines: [
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
        x: 2482, top: 809, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.sga, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }],
      }] },
      other_expenses: { blocks: [{
        x: 2482, top: 1008, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.otherExpense, size: 31, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '+4% Y/Y', gameMargin: '11% operating margin',
    music: 'Music', musicYoy: '+21% Y/Y', musicMargin: '21% operating margin',
    pictures: 'Pictures', picturesYoy: '(3%) Y/Y', picturesMargin: '4% operating margin',
    technology: 'Technology', technologyYoy: '(7%) Y/Y', technologyMargin: '11% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+15% Y/Y', imagingMargin: '23% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '(1%) Y/Y',
    sales: 'Sales', salesYoy: '+5% Y/Y', financialServices: 'Financial services', financialServicesYoy: '(29%) Y/Y',
    grossProfit: 'Gross profit', grossMargin: '32% margin', grossYoy: '+1pp Y/Y', costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '14% margin', operatingYoy: '+1pp Y/Y',
    operating: 'Operating', expenses: 'expenses', otherIncome: 'Other', netProfit: 'Net profit', netMargin: '10% margin', netYoy: '+0pp Y/Y',
    tax: 'Tax', sga: 'SG&A', otherExpense: 'Other',
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 +4%', gameMargin: '营业利润率 11%',
    music: '音乐', musicYoy: '同比 +21%', musicMargin: '营业利润率 21%',
    pictures: '影视', picturesYoy: '同比 (3%)', picturesMargin: '营业利润率 4%',
    technology: '技术', technologyYoy: '同比 (7%)', technologyMargin: '营业利润率 11%',
    imaging: '成像与传感', imagingYoy: '同比 +15%', imagingMargin: '营业利润率 23%',
    otherRevenue: '其他', otherRevenueYoy: '同比 (1%)',
    sales: '销售额', salesYoy: '同比 +5%', financialServices: '金融服务', financialServicesYoy: '同比 (29%)',
    grossProfit: '毛利润', grossMargin: '利润率 32%', grossYoy: '同比 +1 个百分点', costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 14%', operatingYoy: '同比 +1 个百分点',
    operating: '运营', expenses: '费用', otherIncome: '其他收入', netProfit: '净利润', netMargin: '利润率 10%', netYoy: '同比 +0 个百分点',
    tax: '税费', sga: '销售、一般及行政费用', otherExpense: '其他',
  };
  const labelsZh = labels(zh);
  labelsZh.financial_services.blocks[0].x = 1085;
  labelsZh.sga.blocks[0].x = 2510;
  labelsZh.sga.blocks[0].lines[0].size = 26;
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q2-fy25',
    name: 'Sony · Q2 FY25',
    company: 'Sony',
    meta: {
      company: 'Sony', title: 'Sony Q2 FY25 Income Statement', period: 'Q2 FY25', periodNote: 'Ending Sept. 2025',
      currency: '¥', unit: 'B', decimals: 0,
      referenceImage: { src: 'input/processed/sony-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2024,
      periodX: 2480, periodY: 237, periodNoteY: 281,
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
        game_network: { x: 436, y: 394, width: 71, height: 87 }, music: { x: 436, y: 620, width: 71, height: 41 },
        pictures: { x: 436, y: 792, width: 71, height: 26 }, technology: { x: 436, y: 950, width: 71, height: 45 },
        imaging_sensing: { x: 436, y: 1106, width: 71, height: 47 }, other_revenue: { x: 436, y: 1273, width: 71, height: 2 },
        revenue: { x: 903, y: 668, width: 70, height: 259 }, financial_services: { x: 1049, y: 1060, width: 71, height: 8 },
        gross_profit: { x: 1370, y: 544, width: 71, height: 79 }, cost_of_sales: { x: 1370, y: 860, width: 71, height: 168 },
        operating_profit: { x: 1840, y: 453, width: 70, height: 32 }, operating_expenses: { x: 1838, y: 701, width: 70, height: 44 },
        other_income: { x: 2201, y: 425, width: 14, height: 2 }, net_profit: { x: 2304, y: 359, width: 71, height: 24 },
        tax: { x: 2304, y: 601, width: 71, height: 8 }, sga: { x: 2304, y: 829, width: 71, height: 43 }, other_expenses: { x: 2304, y: 1069, width: 71, height: 5 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 1113, valueText: '¥1,113B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 542, valueText: '¥542B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 347, valueText: '¥347B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 576, valueText: '¥576B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 615, valueText: '¥615B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: en.otherRevenue, value: 24, valueText: '¥24B', notes: [en.otherRevenueYoy], color: BACKGROUND, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: en.sales, value: 3108, valueText: '¥3,108B', notes: [en.salesYoy], color: BLACK, labelColor: BLACK, linkTint: '#858585' },
      { id: 'financial_services', col: 2, order: 1, type: 'cost', label: en.financialServices, value: -108, valueText: '(¥108B)', notes: [en.financialServicesYoy], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: en.grossProfit, value: 1008, valueText: '¥1,008B', notes: [en.grossMargin, en.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 2, type: 'cost', label: en.costOfSales, value: 2100, valueText: '(¥2,100B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: en.operatingProfit, value: 429, valueText: '¥429B', notes: [en.operatingMargin, en.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 579, valueText: '(¥579B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: en.otherIncome, value: 13, valueText: '¥13B', color: BACKGROUND, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: en.netProfit, value: 318, valueText: '¥318B', notes: [en.netMargin, en.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: en.tax, value: 123, valueText: '(¥123B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: en.sga, value: 553, valueText: '(¥553B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 4, type: 'cost', label: [en.otherExpense, en.expenses], value: 26, valueText: '(¥26B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 1113, sourceWidth: 87, targetWidth: 87, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 542, sourceWidth: 41, targetWidth: 41, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 347, sourceWidth: 26, targetWidth: 26, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 576, sourceWidth: 45, targetWidth: 45, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 615, sourceWidth: 47, targetWidth: 47, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'other_revenue', target: 'revenue', value: 24, sourceWidth: 2, targetWidth: 13, targetOrder: 5, linkTint: OTHER_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1008, sourceWidth: 79, targetWidth: 79, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2100, sourceWidth: 172, targetWidth: 168, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'financial_services', value: 108, sourceWidth: 8, targetWidth: 8, sourceOrder: 2, targetOrder: 0, linkTint: PURPLE_LINK, y0: 923, y1: 1064, curve: { x0: 973, x1: 1049, c1x: 988, c1y: 923, c2x: 1028, c2y: 1064 } },
      { source: 'gross_profit', target: 'operating_profit', value: 429, sourceWidth: 32, targetWidth: 32, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 579, sourceWidth: 47, targetWidth: 44, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 305, sourceWidth: 24, targetWidth: 22, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 123, sourceWidth: 8, targetWidth: 8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 13, sourceWidth: 2, targetWidth: 2, targetOrder: 1, linkTint: GREEN_LINK, y0: 426, y1: 381, curve: { x0: 2215, x1: 2304, c1x: 2240, c1y: 426, c2x: 2285, c2y: 381 } },
      { source: 'operating_expenses', target: 'sga', value: 553, sourceWidth: 43, targetWidth: 43, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_expenses', value: 26, sourceWidth: 1, targetWidth: 5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, y0: 744.5, y1: 1071.5, curve: { x0: 1908, x1: 2304, c1x: 2070, c1y: 744.5, c2x: 2160, c2y: 1071.5 } },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2025 财年第二季度',
        meta: { title: 'Sony 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 9 月', titleTextLength: 1660 },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] }, music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] }, technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] }, other_revenue: { label: zh.otherRevenue, notes: [zh.otherRevenueYoy] },
          revenue: { label: zh.sales, notes: [zh.salesYoy] }, financial_services: { label: zh.financialServices, notes: [zh.financialServicesYoy] },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] }, cost_of_sales: { label: zh.costOfSales },
          operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] }, operating_expenses: { label: [zh.operating, zh.expenses] },
          other_income: { label: zh.otherIncome }, net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] }, tax: { label: zh.tax }, sga: { label: zh.sga }, other_expenses: { label: [zh.otherExpense, zh.expenses] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

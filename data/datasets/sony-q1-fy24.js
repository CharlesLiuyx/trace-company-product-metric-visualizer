/* ====================================================================
 * Sony - Q1 FY24 income statement (¥B)
 * Reconstructed from input/processed/sony-q1-fy24.png as a fixed
 * d3-sankey layout. The Sony wordmark is the reusable pure-SVG asset.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
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
  const PURPLE = '#4c00b0';
  const PURPLE_LINK = '#a685d3';
  const OTHER = '#5e5e5e';
  const OTHER_NODE = '#969696';
  const OTHER_LINK = '#cfcfcf';
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
        <text x="324" y="254" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
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
        { text: margin, size: 30, weight: 400, color: NOTE },
      ],
    });
    return {
      game_network: { blocks: [valueBlock(463, 283, ORANGE, t.gameYoy), segmentNameBlock(384, 389, ORANGE, t.game, t.gameMargin)] },
      music: { blocks: [valueBlock(463, 497, PINK, t.musicYoy), segmentNameBlock(376, 590, PINK, t.music, t.musicMargin)] },
      pictures: { blocks: [valueBlock(463, 642, GOLD, t.picturesYoy), segmentNameBlock(381, 746, GOLD, t.pictures, t.picturesMargin)] },
      technology: { blocks: [valueBlock(463, 810, BLUE, t.technologyYoy), segmentNameBlock(386, 908, BLUE, t.technology, t.technologyMargin)] },
      imaging_sensing: { blocks: [valueBlock(463, 990, DEEP_GREEN, t.imagingYoy), segmentNameBlock(387, 1063, DEEP_GREEN, t.imaging, t.imagingMargin, 39)] },
      financial_services: { blocks: [valueBlock(463, 1144, PURPLE, t.financialYoy), segmentNameBlock(390, 1226, PURPLE, t.financialServices, t.financialMargin, 39)] },
      other_revenue: { blocks: [valueBlock(463, 1283, OTHER, t.otherRevenueYoy, 15), { x: 390, top: 1366, anchor: 'end', lines: [{ text: t.otherRevenue, size: 40, weight: 800, color: OTHER }] }] },
      revenue: { blocks: [{
        x: 933, top: 524, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.sales, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1400, top: 352, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: t.grossYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      cost_of_sales: { blocks: [{
        x: 1400, top: 1080, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.costOf, size: 34, weight: 800, color: RED_LABEL },
          { text: t.salesLower, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1865, top: 247, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: t.operatingYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      operating_expenses: { blocks: [{
        x: 1865, top: 804, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
        x: 1742, top: 527, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 30, weight: 400, color: GREEN_LABEL }],
      }] },
      finance: { blocks: [{
        x: 2200, top: 437, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.finance, size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 30, weight: 400, color: GREEN_LABEL }],
      }] },
      net_profit: { blocks: [
        { x: 2390, top: 306, anchor: 'start', lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }] },
        { x: 2482, top: 359, anchor: 'middle', lineGap: 14, lines: [
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.netMargin, size: 28, weight: 400, color: NOTE },
          { text: t.netYoy, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      tax: { blocks: [{ x: 2474, top: 569, anchor: 'middle', lineGap: 11, lines: [{ text: t.tax, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }] }] },
      sga: { blocks: [{ x: 2468, top: 809, anchor: 'middle', lineGap: 11, lines: [{ text: t.sga, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }] }] },
      financial_services_other: { blocks: [{
        x: 2474, top: 1114, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.financialLine, size: 31, weight: 800, color: RED_LABEL },
          { text: t.servicesLine, size: 31, weight: 800, color: RED_LABEL },
          { text: t.andOther, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '+12% Y/Y', gameMargin: '8% operating margin',
    music: 'Music', musicYoy: '+22% Y/Y', musicMargin: '20% operating margin',
    pictures: 'Pictures', picturesYoy: '+5% Y/Y', picturesMargin: '3% operating margin',
    technology: 'Technology', technologyYoy: '+5% Y/Y', technologyMargin: '11% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+23% Y/Y', imagingMargin: '11% operating margin',
    financialServices: 'Financial services', financialYoy: '(34%) Y/Y', financialMargin: '7% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '+7% Y/Y', sales: 'Sales', salesYoy: '+2% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '41% margin', grossYoy: '(4pp) Y/Y', costOfSales: 'Cost of sales', costOf: 'Cost of', salesLower: 'sales',
    operatingProfit: 'Operating profit', operatingMargin: '9% margin', operatingYoy: '+1pp Y/Y',
    operating: 'Operating', expenses: 'expenses', otherIncome: 'Other', finance: 'Finance',
    netProfit: 'Net profit', netMargin: '8% margin', netYoy: '+0pp Y/Y', tax: 'Tax', sga: 'SG&A',
    financialServicesLine: 'Financial services', financialLine: 'Financial', servicesLine: 'services', andOther: '& other',
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 +12%', gameMargin: '营业利润率 8%',
    music: '音乐', musicYoy: '同比 +22%', musicMargin: '营业利润率 20%',
    pictures: '影视', picturesYoy: '同比 +5%', picturesMargin: '营业利润率 3%',
    technology: '技术', technologyYoy: '同比 +5%', technologyMargin: '营业利润率 11%',
    imaging: '成像与传感', imagingYoy: '同比 +23%', imagingMargin: '营业利润率 11%',
    financialServices: '金融服务', financialYoy: '同比 (34%)', financialMargin: '营业利润率 7%',
    otherRevenue: '其他', otherRevenueYoy: '同比 +7%', sales: '销售额', salesYoy: '同比 +2%',
    grossProfit: '毛利润', grossMargin: '利润率 41%', grossYoy: '同比 (4 个百分点)', costOfSales: '销售成本', costOf: '销售', salesLower: '成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 9%', operatingYoy: '同比 +1 个百分点',
    operating: '运营', expenses: '费用', otherIncome: '其他收入', finance: '财务收入',
    netProfit: '净利润', netMargin: '利润率 8%', netYoy: '同比 +0 个百分点', tax: '税费', sga: '销售、一般及行政费用',
    financialServicesLine: '金融服务', financialLine: '金融', servicesLine: '服务', andOther: '及其他',
  };
  const labelsZh = labels(zh);
  labelsZh.financial_services.blocks[1].lines[0].size = 37;
  labelsZh.sga.blocks[0].x = 2515;
  labelsZh.sga.blocks[0].lines[0].size = 26;
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q1-fy24',
    name: 'Sony · Q1 FY24',
    company: 'Sony',
    meta: {
      company: 'Sony', title: 'Sony Q1 FY24 Income Statement', period: 'Q1 FY24', periodNote: 'Ending Jun. 2024',
      currency: '¥', unit: 'B', decimals: 0,
      referenceImage: { src: 'input/processed/sony-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2018,
      periodX: 148, periodY: 267, periodNoteY: 311,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, titleColor: TITLE, subtitleColor: '#5e5e5e', noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: '#858585', hub: '#858585', profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen'),
    layout: {
      nodes: {
        game_network: { x: 431, y: 380, width: 71, height: 75 }, music: { x: 431, y: 596, width: 71, height: 37 },
        pictures: { x: 431, y: 757, width: 71, height: 29 }, technology: { x: 431, y: 911, width: 71, height: 53 },
        imaging_sensing: { x: 431, y: 1090, width: 71, height: 28 }, financial_services: { x: 431, y: 1239, width: 71, height: 39 },
        other_revenue: { x: 431, y: 1389, width: 71, height: 4 }, revenue: { x: 898, y: 667, width: 70, height: 272 },
        gross_profit: { x: 1365, y: 547, width: 71, height: 109 }, cost_of_sales: { x: 1365, y: 899, width: 71, height: 161 },
        other_income: { x: 1703, y: 512, width: 71, height: 3 }, operating_profit: { x: 1830, y: 438, width: 70, height: 24 },
        operating_expenses: { x: 1830, y: 701, width: 70, height: 85 }, finance: { x: 2165, y: 422, width: 70, height: 4 },
        net_profit: { x: 2299, y: 348, width: 71, height: 20 }, tax: { x: 2299, y: 601, width: 71, height: 6 },
        sga: { x: 2299, y: 830, width: 71, height: 47 }, financial_services_other: { x: 2299, y: 1154, width: 71, height: 35 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 844, valueText: '¥844B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 436, valueText: '¥436B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 337, valueText: '¥337B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 594, valueText: '¥594B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 333, valueText: '¥333B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'financial_services', col: 0, order: 5, type: 'source', label: en.financialServices, value: 446, valueText: '¥446B', notes: [en.financialYoy, en.financialMargin], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: en.otherRevenue, value: 21, valueText: '¥21B', notes: [en.otherRevenueYoy], color: OTHER_NODE, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: en.sales, value: 3012, valueText: '¥3,012B', notes: [en.salesYoy], color: BLACK, labelColor: BLACK, linkTint: '#858585' },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: en.grossProfit, value: 1227, valueText: '¥1,227B', notes: [en.grossMargin, en.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: en.costOfSales, value: 1784, valueText: '(¥1,784B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: en.otherIncome, value: 12, valueText: '¥12B', color: '#6aaf6a', labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: en.operatingProfit, value: 279, valueText: '¥279B', notes: [en.operatingMargin, en.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 960, valueText: '(¥960B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'finance', col: 5, order: 0, type: 'profit', label: en.finance, value: 38, valueText: '¥38B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: en.netProfit, value: 236, valueText: '¥236B', notes: [en.netMargin, en.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: en.tax, value: 81, valueText: '(¥81B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: en.sga, value: 543, valueText: '(¥543B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial_services_other', col: 6, order: 3, type: 'cost', label: `${en.financialServicesLine} ${en.andOther}`, value: 416, valueText: '(¥416B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 844, sourceWidth: 75, targetWidth: 75, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 436, sourceWidth: 37, targetWidth: 37, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 337, sourceWidth: 29, targetWidth: 29, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 594, sourceWidth: 53, targetWidth: 53, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 333, sourceWidth: 28, targetWidth: 28, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'financial_services', target: 'revenue', value: 446, sourceWidth: 39, targetWidth: 39, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 21, sourceWidth: 4, targetWidth: 11, targetOrder: 6, linkTint: OTHER_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1227, sourceWidth: 109, targetWidth: 109, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1784, sourceWidth: 163, targetWidth: 161, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 267, sourceWidth: 24, targetWidth: 21, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 960, sourceWidth: 85, targetWidth: 85, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 12, sourceWidth: 3, targetWidth: 3, targetOrder: 1, linkTint: GREEN_LINK, y0: 513.5, y1: 460.5, curve: { x0: 1774, x1: 1830, c1x: 1795, c1y: 513.5, c2x: 1815, c2y: 460.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 198, sourceWidth: 18, targetWidth: 16, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 81, sourceWidth: 6, targetWidth: 6, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'finance', target: 'net_profit', value: 38, sourceWidth: 4, targetWidth: 4, targetOrder: 1, linkTint: GREEN_LINK, y0: 424, y1: 366, curve: { x0: 2235, x1: 2299, c1x: 2260, c1y: 424, c2x: 2282, c2y: 366 } },
      { source: 'operating_expenses', target: 'sga', value: 543, sourceWidth: 47, targetWidth: 47, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_services_other', value: 416, sourceWidth: 38, targetWidth: 35, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2024 财年第一季度',
        meta: { title: 'Sony 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2024 年 6 月', titleTextLength: 1660, periodX: 165 },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] }, music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] }, technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] }, financial_services: { label: zh.financialServices, notes: [zh.financialYoy, zh.financialMargin] },
          other_revenue: { label: zh.otherRevenue, notes: [zh.otherRevenueYoy] }, revenue: { label: zh.sales, notes: [zh.salesYoy] },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] }, cost_of_sales: { label: zh.costOfSales },
          other_income: { label: zh.otherIncome }, operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] },
          operating_expenses: { label: [zh.operating, zh.expenses] }, finance: { label: zh.finance },
          net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] }, tax: { label: zh.tax }, sga: { label: zh.sga },
          financial_services_other: { label: [zh.financialServicesLine, zh.andOther] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* Sony — Q4 FY24 income statement (¥B).
 * Reconstructed from input/processed/sony-q4-fy24.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/sony.js. */
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
  const OTHER = '#666666';
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
        <text x="324" y="252" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
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
        valueBlock(469, 305, ORANGE, t.gameYoy),
        segmentNameBlock(384, 411, ORANGE, t.game, t.gameMargin),
      ] },
      music: { blocks: [
        valueBlock(462.5, 532, PINK, t.musicYoy),
        segmentNameBlock(360.5, 633, PINK, t.music, t.musicMargin),
      ] },
      pictures: { blocks: [
        valueBlock(466.1, 681, GOLD, t.picturesYoy),
        segmentNameBlock(364.5, 784, GOLD, t.pictures, t.picturesMargin),
      ] },
      technology: { blocks: [
        valueBlock(467.3, 831, BLUE, t.technologyYoy),
        segmentNameBlock(369, 947, BLUE, t.technology, t.technologyMargin),
      ] },
      imaging_sensing: { blocks: [
        valueBlock(469, 998, DEEP_GREEN, t.imagingYoy),
        segmentNameBlock(384, 1115, DEEP_GREEN, t.imaging, t.imagingMargin, 39),
      ] },
      other_revenue: { blocks: [
        valueBlock(469, 1164, OTHER, t.otherRevenueYoy, 15),
        { x: 302, top: 1253, anchor: 'end', lines: [{ text: t.otherRevenue, size: 40, weight: 800, color: OTHER }] },
      ] },
      revenue: { blocks: [{
        x: 936, top: 526, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.sales, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      financial_services: { blocks: [{
        x: 1115, top: 1097, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.financialServices, size: 40, weight: 800, color: PURPLE },
          { text: '$value', size: 39, weight: 400, color: PURPLE },
          { text: t.financialServicesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1406, top: 373, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: t.grossYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      cost_of_sales: { blocks: [{
        x: 1406, top: 1041, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.costOfSales, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_financial: { blocks: [{
        x: 1593, top: 824, anchor: 'middle', lineGap: 9,
        lines: [
          { text: t.other, size: 31, weight: 800, color: GREEN_LABEL },
          { text: t.financial, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1875, top: 280, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: t.operatingYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      operating_expenses: { blocks: [{
        x: 1868, top: 757, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      net_profit: { blocks: [
        { x: 2388, top: 343, anchor: 'start', lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }] },
        { x: 2482, top: 398, anchor: 'middle', lineGap: 14, lines: [
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.netMargin, size: 28, weight: 400, color: NOTE },
          { text: t.netYoy, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      other_income: { blocks: [{
        x: 2214, top: 443, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 30, weight: 400, color: GREEN_LABEL }],
      }] },
      tax: { blocks: [{
        x: 2482, top: 580, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.tax, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }],
      }] },
      sga: { blocks: [{
        x: 2482, top: 785, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.sga, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }],
      }] },
      other_expenses: { blocks: [{
        x: 2482, top: 1013, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.otherExpense, size: 31, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '(1%) Y/Y', gameMargin: '9% operating margin',
    music: 'Music', musicYoy: '+10% Y/Y', musicMargin: '18% operating margin',
    pictures: 'Pictures', picturesYoy: '+2% Y/Y', picturesMargin: '13% operating margin',
    technology: 'Technology', technologyYoy: '(10%) Y/Y', technologyMargin: '(4%) operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+2% Y/Y', imagingMargin: '9% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '+18% Y/Y',
    sales: 'Sales', salesYoy: '(24%) Y/Y', financialServices: 'Financial services', financialServicesYoy: '(126%) Y/Y',
    grossProfit: 'Gross profit', grossMargin: '25% margin', grossYoy: '(18pp) Y/Y', costOfSales: 'Cost of sales',
    other: 'Other', financial: 'financial', operatingProfit: 'Operating profit', operatingMargin: '8% margin', operatingYoy: '+1pp Y/Y',
    operating: 'Operating', expenses: 'expenses', otherIncome: 'Other', netProfit: 'Net profit', netMargin: '8% margin', netYoy: '+2pp Y/Y',
    tax: 'Tax', sga: 'SG&A', otherExpense: 'Other',
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 (1%)', gameMargin: '营业利润率 9%',
    music: '音乐', musicYoy: '同比 +10%', musicMargin: '营业利润率 18%',
    pictures: '影视', picturesYoy: '同比 +2%', picturesMargin: '营业利润率 13%',
    technology: '技术', technologyYoy: '同比 (10%)', technologyMargin: '营业利润率 (4%)',
    imaging: '成像与传感', imagingYoy: '同比 +2%', imagingMargin: '营业利润率 9%',
    otherRevenue: '其他', otherRevenueYoy: '同比 +18%',
    sales: '销售额', salesYoy: '同比 (24%)', financialServices: '金融服务', financialServicesYoy: '同比 (126%)',
    grossProfit: '毛利润', grossMargin: '利润率 25%', grossYoy: '同比 (18 个百分点)', costOfSales: '销售成本',
    other: '其他', financial: '财务收益', operatingProfit: '营业利润', operatingMargin: '利润率 8%', operatingYoy: '同比 +1 个百分点',
    operating: '运营', expenses: '费用', otherIncome: '其他收入', netProfit: '净利润', netMargin: '利润率 8%', netYoy: '同比 +2 个百分点',
    tax: '税费', sga: '销售、一般及行政费用', otherExpense: '其他',
  };
  const labelsZh = labels(zh);
  labelsZh.other_financial.blocks[0].lines.splice(1, 1);
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';
  labelsZh.sga.blocks[0].x = 2510;
  labelsZh.sga.blocks[0].lines[0].size = 26;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q4-fy24',
    name: 'Sony · Q4 FY24',
    company: 'Sony',
    meta: {
      company: 'Sony',
      title: 'Sony Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending March. 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/sony-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2024,
      periodX: 2253,
      periodY: 1306,
      periodNoteY: 1348,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: '#858585', hub: '#858585', profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen'),
    layout: {
      nodes: {
        game_network: { x: 434, y: 402, width: 71, height: 101 },
        music: { x: 434, y: 629, width: 71, height: 44 },
        pictures: { x: 434, y: 782, width: 71, height: 39 },
        technology: { x: 434, y: 947, width: 71, height: 45 },
        imaging_sensing: { x: 434, y: 1119, width: 71, height: 36 },
        other_revenue: { x: 434, y: 1271, width: 71, height: 5 },
        revenue: { x: 901, y: 678, width: 70, height: 278 },
        financial_services: { x: 1079, y: 1068, width: 73, height: 17 },
        gross_profit: { x: 1370, y: 563, width: 72, height: 63 },
        cost_of_sales: { x: 1370, y: 831, width: 72, height: 195 },
        other_financial: { x: 1558, y: 797, width: 71, height: 14 },
        operating_profit: { x: 1833, y: 468, width: 70, height: 18 },
        operating_expenses: { x: 1833, y: 682, width: 70, height: 58 },
        other_income: { x: 2178, y: 429, width: 71, height: 3 },
        net_profit: { x: 2302, y: 373, width: 71, height: 19 },
        tax: { x: 2302, y: 616, width: 71, height: 2 },
        sga: { x: 2302, y: 792, width: 71, height: 58 },
        other_expenses: { x: 2302, y: 1069, width: 71, height: 2 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 1045, valueText: '¥1,045B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 464, valueText: '¥464B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 411, valueText: '¥411B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 470, valueText: '¥470B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 388, valueText: '¥388B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: en.otherRevenue, value: 22, valueText: '¥22B', notes: [en.otherRevenueYoy], color: OTHER, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: en.sales, value: 2630, valueText: '¥2,630B', notes: [en.salesYoy], color: BLACK, labelColor: BLACK, linkTint: '#858585' },
      { id: 'financial_services', col: 2, order: 2, type: 'cost', label: en.financialServices, value: -175, valueText: '(¥175B)', notes: [en.financialServicesYoy], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: en.grossProfit, value: 650, valueText: '¥650B', notes: [en.grossMargin, en.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: en.costOfSales, value: 1980, valueText: '(¥1,980B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_financial', col: 3, order: 1, type: 'profit', label: `${en.other} ${en.financial}`, value: 162, valueText: '¥162B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: en.operatingProfit, value: 204, valueText: '¥204B', notes: [en.operatingMargin, en.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 609, valueText: '(¥609B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: en.otherIncome, value: 9, valueText: '¥9B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: en.netProfit, value: 209, valueText: '¥209B', notes: [en.netMargin, en.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: en.tax, value: 4, valueText: '(¥4B)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: en.sga, value: 599, valueText: '(¥599B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 5, order: 3, type: 'cost', label: `${en.otherExpense} ${en.expenses}`, value: 9, valueText: '(¥9B)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 1045, sourceWidth: 101, targetWidth: 103, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 464, sourceWidth: 44, targetWidth: 46, sourceOrder: 0, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 411, sourceWidth: 39, targetWidth: 41, sourceOrder: 0, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 470, sourceWidth: 45, targetWidth: 47, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 388, sourceWidth: 36, targetWidth: 39, sourceOrder: 0, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'other_revenue', target: 'revenue', value: 22, sourceWidth: 5, targetWidth: 2, sourceOrder: 0, targetOrder: 5, linkTint: OTHER_LINK },
      { source: 'revenue', target: 'gross_profit', value: 650, sourceWidth: 63, targetWidth: 63, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1980, sourceWidth: 195, targetWidth: 195, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'financial_services', value: 175, sourceWidth: 20, targetWidth: 17, sourceOrder: 2, targetOrder: 0, linkTint: PURPLE_LINK, y0: 946, y1: 1076.5, curve: { x0: 971, x1: 1079, c1x: 1000, c1y: 946, c2x: 1034, c2y: 1076.5 } },
      { source: 'gross_profit', target: 'operating_profit', value: 204, sourceWidth: 18, targetWidth: 18, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 446, sourceWidth: 45, targetWidth: 44, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_financial', target: 'operating_expenses', value: 162, sourceWidth: 14, targetWidth: 14, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, y0: 804, y1: 733, curve: { x0: 1629, x1: 1833, c1x: 1695, c1y: 804, c2x: 1760, c2y: 733 } },
      { source: 'operating_profit', target: 'net_profit', value: 204, sourceWidth: 18, targetWidth: 18, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_profit', value: 9, sourceWidth: 3, targetWidth: 1, y0: 430.5, y1: 391.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2249, x1: 2302, c1x: 2280, c1y: 430.5, c2x: 2278, c2y: 391.5 } },
      { source: 'operating_profit', target: 'tax', value: 4, sourceWidth: 1, targetWidth: 2, y0: 485.5, y1: 617, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { x0: 1903, x1: 2302, c1x: 2090, c1y: 485.5, c2x: 2162, c2y: 617 } },
      { source: 'operating_expenses', target: 'sga', value: 599, sourceWidth: 58, targetWidth: 58, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_expenses', value: 9, sourceWidth: 1, targetWidth: 2, y0: 739.5, y1: 1070, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { x0: 1903, x1: 2302, c1x: 2078, c1y: 739.5, c2x: 2167, c2y: 1070 } },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2024 财年第四季度',
        meta: { title: 'Sony 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2025 年 3 月', titleTextLength: 1660 },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] },
          music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] },
          technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] },
          other_revenue: { label: zh.otherRevenue, notes: [zh.otherRevenueYoy] },
          revenue: { label: zh.sales, notes: [zh.salesYoy] },
          financial_services: { label: zh.financialServices, notes: [zh.financialServicesYoy] },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] },
          cost_of_sales: { label: zh.costOfSales },
          other_financial: { label: zh.financial },
          operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] },
          operating_expenses: { label: `${zh.operating}${zh.expenses}` },
          other_income: { label: zh.otherIncome },
          net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] },
          tax: { label: zh.tax },
          sga: { label: zh.sga },
          other_expenses: { label: `${zh.otherExpense}${zh.expenses}` },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

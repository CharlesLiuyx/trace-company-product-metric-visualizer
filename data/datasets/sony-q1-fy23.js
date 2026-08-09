/* Sony - Q1 FY23 income statement (¥B), fixed to the 2667×1500 Source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#797979';
  const BLACK = '#000000';
  const BACKGROUND = '#f2f2f2';
  const GRAY_LINK = '#858585';
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
  const OTHER = '#858585';
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
        <text x="324" y="281" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
        <g transform="translate(790 399)" data-typography-role="brand">${sonyWordmark}</g>
        <path d="M2231 465.5 C2246 465.5 2271 374.5 2287 374.5" fill="none" stroke="${GREEN_LINK}" stroke-width="1" />
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
        valueBlock(458, 296, ORANGE, t.gameYoy),
        segmentNameBlock(383, 403, ORANGE, t.game, t.gameMargin),
      ] },
      music: { blocks: [
        valueBlock(438, 487, PINK, t.musicYoy),
        segmentNameBlock(358, 565, PINK, t.music, t.musicMargin),
      ] },
      pictures: { blocks: [
        valueBlock(438, 636, GOLD, t.picturesYoy),
        segmentNameBlock(362, 696, GOLD, t.pictures, t.picturesMargin),
      ] },
      technology: { blocks: [
        valueBlock(451, 769, BLUE, t.technologyYoy),
        segmentNameBlock(376, 842, BLUE, t.technology, t.technologyMargin),
      ] },
      imaging_sensing: { blocks: [
        valueBlock(458, 940, DEEP_GREEN, t.imagingYoy),
        segmentNameBlock(386, 994, DEEP_GREEN, t.imaging, t.imagingMargin, 39),
      ] },
      financial_services: { blocks: [
        valueBlock(451, 1084, PURPLE, t.financialServicesYoy),
        segmentNameBlock(379, 1166, PURPLE, t.financialServices, t.financialServicesMargin),
      ] },
      other_revenue: { blocks: [
        valueBlock(456, 1260, OTHER, t.otherRevenueYoy, 15),
        segmentNameBlock(373, 1307, OTHER, t.otherRevenue, t.otherRevenueMargin),
      ] },
      segment_sales: { blocks: [] },
      revenue: { blocks: [{
        x: 1204, top: 553, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.sales, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      eliminations: { blocks: [{
        x: 1204, top: 1129, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.intersegment, size: 34, weight: 800, color: RED_LABEL },
          { text: t.elimination, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1575, top: 274, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: t.grossYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      cost_of_sales: { blocks: [{
        x: 1575, top: 1114, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.costOfSales, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
        x: 1814, top: 585, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1940, top: 273, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: t.operatingYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      operating_expenses: { blocks: [{
        x: 1940, top: 842, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      financial_income: { blocks: [{
        x: 2195, top: 478, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.financial, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      net_profit: { blocks: [
        { x: 2380, top: 328, anchor: 'start', lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }] },
        { x: 2480, top: 381, anchor: 'middle', lineGap: 14, lines: [
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.netMargin, size: 28, weight: 400, color: NOTE },
          { text: t.netYoy, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      tax: { blocks: [{
        x: 2480, top: 650, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.tax, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      sga: { blocks: [{
        x: 2492, top: 874, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.sga, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      financial_services_other: { blocks: [{
        x: 2502, top: 1094, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.financialServices, size: 31, weight: 800, color: RED_LABEL },
          { text: t.andOther, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '+28% Y/Y', gameMargin: '6% operating margin',
    music: 'Music', musicYoy: '+16% Y/Y', musicMargin: '20% operating margin',
    pictures: 'Pictures', picturesYoy: '(6%) Y/Y', picturesMargin: '5% operating margin',
    technology: 'Technology', technologyYoy: '+4% Y/Y', technologyMargin: '10% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+23% Y/Y', imagingMargin: '4% operating margin',
    financialServices: 'Financial services', financialServicesYoy: '+215% Y/Y', financialServicesMargin: '8% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '+1% Y/Y', otherRevenueMargin: '13% operating margin',
    sales: 'Sales', salesYoy: '+33% Y/Y', intersegment: 'Intersegment', elimination: 'Elimination',
    grossProfit: 'Gross profit', grossMargin: '45% margin', grossYoy: '+8pp Y/Y', costOfSales: 'Cost of sales',
    otherIncome: 'Other', operatingProfit: 'Operating profit', operatingMargin: '9% margin', operatingYoy: '+0pp Y/Y',
    operating: 'Operating', expenses: 'expenses', financial: 'Financial', netProfit: 'Net profit',
    netMargin: '7% margin', netYoy: '(4pp) Y/Y', tax: 'Tax', sga: 'SG&A', andOther: '& other',
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 +28%', gameMargin: '营业利润率 6%',
    music: '音乐', musicYoy: '同比 +16%', musicMargin: '营业利润率 20%',
    pictures: '影视', picturesYoy: '同比 (6%)', picturesMargin: '营业利润率 5%',
    technology: '技术', technologyYoy: '同比 +4%', technologyMargin: '营业利润率 10%',
    imaging: '成像与传感', imagingYoy: '同比 +23%', imagingMargin: '营业利润率 4%',
    financialServices: '金融服务', financialServicesYoy: '同比 +215%', financialServicesMargin: '营业利润率 8%',
    otherRevenue: '其他', otherRevenueYoy: '同比 +1%', otherRevenueMargin: '营业利润率 13%',
    sales: '销售额', salesYoy: '同比 +33%', intersegment: '分部间', elimination: '抵销',
    grossProfit: '毛利润', grossMargin: '利润率 45%', grossYoy: '同比 +8 个百分点', costOfSales: '销售成本',
    otherIncome: '其他收入', operatingProfit: '营业利润', operatingMargin: '利润率 9%', operatingYoy: '同比 +0 个百分点',
    operating: '运营', expenses: '费用', financial: '金融收益', netProfit: '净利润',
    netMargin: '利润率 7%', netYoy: '同比 (4 个百分点)', tax: '税费', sga: '销售、一般及行政费用', andOther: '及其他',
  };
  const labelsZh = labels(zh);
  labelsZh.financial_services.blocks[1].x = 390;
  labelsZh.sga.blocks[0].x = 2505;
  labelsZh.sga.blocks[0].lines[0].size = 25;
  labelsZh.net_profit.blocks[1].x = 2390;
  labelsZh.net_profit.blocks[1].anchor = 'start';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q1-fy23',
    name: 'Sony · Q1 FY23',
    company: 'Sony',
    meta: {
      company: 'Sony', title: 'Sony Q1 FY23 Income Statement', period: 'Q1 FY23', periodNote: 'Ending June 2023',
      currency: '¥', unit: 'B', decimals: 0,
      referenceImage: { src: 'input/processed/sony-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2024,
      periodX: 2480, periodY: 140, periodNoteY: 184,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, titleColor: TITLE, subtitleColor: '#5e5e5e', noteColor: NOTE,
      interfaceAudit: {
        mode: 'error',
        // User-directed correction: the two incoming links must continuously fill this 24px face.
        fullFaceIds: ['operating_profit:left'],
      },
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen'),
    layout: {
      nodes: {
        game_network: { x: 420, y: 393, width: 72, height: 69 },
        music: { x: 420, y: 576, width: 72, height: 31 },
        pictures: { x: 420, y: 725, width: 72, height: 27 },
        technology: { x: 420, y: 859, width: 72, height: 51 },
        imaging_sensing: { x: 420, y: 1029, width: 72, height: 25 },
        financial_services: { x: 420, y: 1173, width: 72, height: 61 },
        other_revenue: { x: 420, y: 1355, width: 72, height: 1 },
        segment_sales: { x: 791, y: 671, width: 72, height: 280 },
        revenue: { x: 1168, y: 705, width: 72, height: 274 },
        eliminations: { x: 1168, y: 1109, width: 72, height: 2 },
        gross_profit: { x: 1539, y: 592, width: 72, height: 123 },
        cost_of_sales: { x: 1539, y: 947, width: 72, height: 151 },
        other_income: { x: 1778, y: 569, width: 72, height: 2 },
        operating_profit: { x: 1887, y: 467, width: 72, height: 24 },
        operating_expenses: { x: 1887, y: 724, width: 72, height: 100 },
        financial_income: { x: 2159, y: 465, width: 72, height: 1 },
        net_profit: { x: 2287, y: 353, width: 72, height: 22 },
        tax: { x: 2287, y: 678, width: 72, height: 3 },
        sga: { x: 2287, y: 874, width: 72, height: 56 },
        financial_services_other: { x: 2287, y: 1094, width: 72, height: 41 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 772, valueText: '¥772B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 358, valueText: '¥358B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 320, valueText: '¥320B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 572, valueText: '¥572B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 293, valueText: '¥293B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'financial_services', col: 0, order: 5, type: 'source', label: en.financialServices, value: 681, valueText: '¥681B', notes: [en.financialServicesYoy, en.financialServicesMargin], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: en.otherRevenue, value: 20, valueText: '¥20B', notes: [en.otherRevenueYoy, en.otherRevenueMargin], color: OTHER, labelColor: '#666666', linkTint: OTHER_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 3016, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: en.sales, value: 2964, valueText: '¥2,964B', notes: [en.salesYoy] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Intersegment Elimination', value: -52, valueText: '(¥52B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: en.grossProfit, value: 1339, valueText: '¥1,339B', notes: [en.grossMargin, en.grossYoy] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: en.costOfSales, value: 1624, valueText: '(¥1,624B)' },
      { id: 'other_income', col: 4, order: 1, type: 'profit', label: en.otherIncome, value: 13, valueText: '¥13B', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: en.operatingProfit, value: 253, valueText: '¥253B', notes: [en.operatingMargin, en.operatingYoy] },
      { id: 'operating_expenses', col: 4, order: 2, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 1099, valueText: '(¥1,099B)' },
      { id: 'financial_income', col: 5, order: 1, type: 'profit', label: en.financial, value: 23, valueText: '¥23B' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: en.netProfit, value: 218, valueText: '¥218B', notes: [en.netMargin, en.netYoy] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: en.tax, value: 58, valueText: '(¥58B)' },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: en.sga, value: 475, valueText: '(¥475B)' },
      { id: 'financial_services_other', col: 6, order: 3, type: 'cost', label: ['Financial services', '& other'], value: 624, valueText: '(¥624B)' },
    ],
    links: [
      { source: 'game_network', target: 'segment_sales', value: 772, sourceWidth: 69, targetWidth: 72, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'segment_sales', value: 358, sourceWidth: 31, targetWidth: 33, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'segment_sales', value: 320, sourceWidth: 27, targetWidth: 30, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'segment_sales', value: 572, sourceWidth: 51, targetWidth: 53, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'segment_sales', value: 293, sourceWidth: 25, targetWidth: 27, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'financial_services', target: 'segment_sales', value: 681, sourceWidth: 61, targetWidth: 63, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'segment_sales', value: 20, sourceWidth: 1, targetWidth: 2, targetOrder: 6, linkTint: OTHER_LINK },
      { source: 'segment_sales', target: 'revenue', value: 2964, sourceWidth: 275, targetWidth: 274, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'segment_sales', target: 'eliminations', value: 52, sourceWidth: 5, targetWidth: 2, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1339, sourceWidth: 123, targetWidth: 123, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1624, sourceWidth: 151, targetWidth: 151, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 240, sourceWidth: 23, targetWidth: 23, sourceOrder: 0, targetOrder: 0, y1: 478.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1099, sourceWidth: 100, targetWidth: 100, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 13, sourceWidth: 2, targetWidth: 1, sourceOrder: 0, targetOrder: 1, y0: 570, y1: 490.5, linkTint: GREEN_LINK, curve: { x0: 1850, x1: 1887, c1x: 1862, c1y: 570, c2x: 1878, c2y: 490.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 195, sourceWidth: 19, targetWidth: 21, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 58, sourceWidth: 5, targetWidth: 3, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'financial_income', target: 'net_profit', value: 23, sourceWidth: 0, targetWidth: 0, sourceOrder: 0, targetOrder: 1, y0: 465.5, y1: 374.5, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2231, x1: 2287, c1x: 2246, c1y: 465.5, c2x: 2271, c2y: 374.5 } },
      { source: 'operating_expenses', target: 'sga', value: 475, sourceWidth: 43, targetWidth: 56, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_services_other', value: 624, sourceWidth: 57, targetWidth: 41, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2023 财年第一季度',
        meta: { title: 'Sony 2023 财年第一季度利润表', period: '2023 财年第一季度', periodNote: '截至 2023 年 6 月', titleTextLength: 1660 },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] },
          music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] },
          technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] },
          financial_services: { label: zh.financialServices, notes: [zh.financialServicesYoy, zh.financialServicesMargin] },
          other_revenue: { label: zh.otherRevenue, notes: [zh.otherRevenueYoy, zh.otherRevenueMargin] },
          revenue: { label: zh.sales, notes: [zh.salesYoy] }, eliminations: { label: '分部间抵销' },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] }, cost_of_sales: { label: zh.costOfSales },
          other_income: { label: zh.otherIncome }, operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] },
          operating_expenses: { label: [zh.operating, zh.expenses] }, financial_income: { label: zh.financial },
          net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] }, tax: { label: zh.tax }, sga: { label: zh.sga },
          financial_services_other: { label: [zh.financialServices, zh.andOther] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

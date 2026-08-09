/* Sony - Q3 FY22 income statement (¥B), fixed to the 2667×1500 Source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#797979';
  const MARGIN = '#666666';
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
  const OTHER = '#7f7f7f';
  const OTHER_LABEL = '#5e5e5e';
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
        <text x="323" y="253" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
        <g transform="translate(795 334)" data-typography-role="brand">${sonyWordmark}</g>
      </g>`;
  }

  function labels(t) {
    const valueBlock = (x, top, color, note, lineGap = 10) => ({
      x,
      top,
      anchor: 'middle',
      lineGap,
      lines: [
        { text: '$value', size: 39, weight: 400, color },
        { text: note, size: 28, weight: 400, color: NOTE },
      ],
    });
    const segmentNameBlock = (x, top, color, name, margin, size = 40) => ({
      x,
      top,
      anchor: 'end',
      lineGap: 13,
      lines: [
        { text: name, size, weight: 800, color },
        { text: margin, size: 30, weight: 400, color: MARGIN },
      ],
    });

    return {
      game_network: { blocks: [
        valueBlock(461.5, 348, ORANGE, t.gameYoy),
        segmentNameBlock(382, 451, ORANGE, t.game, t.gameMargin),
      ] },
      music: { blocks: [
        valueBlock(461.5, 523, PINK, t.musicYoy),
        segmentNameBlock(377, 602, PINK, t.music, t.musicMargin),
      ] },
      pictures: { blocks: [
        valueBlock(461.5, 653, GOLD, t.picturesYoy),
        segmentNameBlock(379, 737, GOLD, t.pictures, t.picturesMargin),
      ] },
      technology: { blocks: [
        valueBlock(461.5, 798, BLUE, t.technologyYoy),
        segmentNameBlock(387, 891, BLUE, t.technology, t.technologyMargin),
      ] },
      imaging_sensing: { blocks: [
        valueBlock(461.5, 962, DEEP_GREEN, t.imagingYoy),
        segmentNameBlock(391, 1037, DEEP_GREEN, t.imaging, t.imagingMargin, 39),
      ] },
      financial_services: { blocks: [
        valueBlock(461.5, 1095, PURPLE, t.financialYoy),
        segmentNameBlock(388, 1176, PURPLE, t.financialServices, t.financialMargin, 39),
      ] },
      other_revenue: { blocks: [
        valueBlock(461.5, 1233, OTHER_LABEL, t.otherYoy, 15),
        segmentNameBlock(376, 1299, OTHER_LABEL, t.other, t.otherMargin, 39),
      ] },
      segment_sales: { blocks: [] },
      revenue: { blocks: [{
        x: 1241,
        top: 590,
        anchor: 'middle',
        lineGap: 10,
        lines: [
          { text: t.sales, size: 40, weight: 800, color: '#5e5e5e' },
          { text: '$value', size: 39, weight: 400, color: '#5e5e5e' },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      eliminations: { blocks: [{
        x: 1245,
        top: 1115,
        anchor: 'middle',
        lineGap: 16,
        lines: [
          { text: t.intersegment, size: 34, weight: 800, color: RED_LABEL },
          { text: t.elimination, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1583,
        top: 435,
        anchor: 'middle',
        lineGap: 12,
        lines: [
          { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: t.grossYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      cost_of_sales: { blocks: [{
        x: 1584,
        top: 1137,
        anchor: 'middle',
        lineGap: 16,
        lines: [
          { text: t.costOf, size: 34, weight: 800, color: RED_LABEL },
          { text: t.salesCost, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
        x: 1848,
        top: 658,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1971,
        top: 345,
        anchor: 'middle',
        lineGap: 12,
        lines: [
          { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: t.operatingYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      operating_expenses: { blocks: [{
        x: 1958,
        top: 883,
        anchor: 'middle',
        lineGap: 14,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      net_profit: { blocks: [
        { x: 2384, top: 386, anchor: 'start', lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }] },
        { x: 2482, top: 437, anchor: 'middle', lineGap: 14, lines: [
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.netMargin, size: 28, weight: 400, color: NOTE },
          { text: t.netYoy, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      tax: { blocks: [{
        x: 2477, top: 677, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.tax, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      financial_loss: { blocks: [{
        x: 2482, top: 774, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.financialLoss, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      sga: { blocks: [{
        x: 2477, top: 985, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.sga, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      financial_services_other: { blocks: [{
        x: 2482,
        top: 1166,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.financialServicesCost, size: 31, weight: 800, color: RED_LABEL },
          { text: t.servicesOther, size: 31, weight: 800, color: RED_LABEL },
          { text: t.andOther, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '35% Y/Y', gameMargin: '11% operating margin',
    music: 'Music', musicYoy: '(19%) Y/Y', musicMargin: '19% operating margin',
    pictures: 'Pictures', picturesYoy: '+39% Y/Y', picturesMargin: '32% operating margin',
    technology: 'Technology', technologyYoy: '(9%) Y/Y', technologyMargin: '12% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '(22%) Y/Y', imagingMargin: '20% operating margin',
    financialServices: 'Financial services', financialYoy: '+31% Y/Y', financialMargin: '7% operating margin',
    other: 'Other', otherYoy: '+9% Y/Y', otherMargin: '30% operating margin',
    sales: 'Sales', salesYoy: '(11%) Y/Y', intersegment: 'Intersegment', elimination: 'Elimination',
    grossProfit: 'Gross profit', grossMargin: '41% margin', grossYoy: '+4pp Y/Y',
    costOf: 'Cost of', salesCost: 'sales', otherIncome: 'Other',
    operatingProfit: 'Operating profit', operatingMargin: '15% margin', operatingYoy: '+3pp Y/Y',
    operating: 'Operating', expenses: 'expenses', netProfit: 'Net profit',
    netMargin: '11% margin', netYoy: '+2pp Y/Y', tax: 'Tax', financialLoss: 'Financial loss',
    sga: 'SG&A', financialServicesCost: 'Financial', servicesOther: 'services', andOther: '& other',
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 35%', gameMargin: '营业利润率 11%',
    music: '音乐', musicYoy: '同比 (19%)', musicMargin: '营业利润率 19%',
    pictures: '影视', picturesYoy: '同比 +39%', picturesMargin: '营业利润率 32%',
    technology: '技术', technologyYoy: '同比 (9%)', technologyMargin: '营业利润率 12%',
    imaging: '成像与传感', imagingYoy: '同比 (22%)', imagingMargin: '营业利润率 20%',
    financialServices: '金融服务', financialYoy: '同比 +31%', financialMargin: '营业利润率 7%',
    other: '其他', otherYoy: '同比 +9%', otherMargin: '营业利润率 30%',
    sales: '销售额', salesYoy: '同比 (11%)', intersegment: '分部间', elimination: '抵销',
    grossProfit: '毛利润', grossMargin: '利润率 41%', grossYoy: '同比 +4 个百分点',
    costOf: '销售', salesCost: '成本', otherIncome: '其他收入',
    operatingProfit: '营业利润', operatingMargin: '利润率 15%', operatingYoy: '同比 +3 个百分点',
    operating: '运营', expenses: '费用', netProfit: '净利润',
    netMargin: '利润率 11%', netYoy: '同比 +2 个百分点', tax: '税费', financialLoss: '财务亏损',
    sga: '销售、一般及行政费用', financialServicesCost: '金融服务', servicesOther: '及其他', andOther: '费用',
  };
  const labelsZh = labels(zh);
  labelsZh.sga.blocks[0].x = 2505;
  labelsZh.sga.blocks[0].lines[0].size = 25;
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q3-fy22',
    name: 'Sony · Q3 FY22',
    company: 'Sony',
    meta: {
      company: 'Sony',
      title: 'Sony Q3 FY22 Income Statement',
      period: 'Q3 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/sony-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2024,
      periodX: 2285,
      periodY: 251,
      periodNoteY: 291,
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
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen'),
    layout: {
      nodes: {
        game_network: { x: 426, y: 437, width: 71, height: 69 },
        music: { x: 426, y: 612, width: 71, height: 24 },
        pictures: { x: 426, y: 742, width: 71, height: 38 },
        technology: { x: 426, y: 887, width: 71, height: 57 },
        imaging_sensing: { x: 426, y: 1051, width: 71, height: 25 },
        financial_services: { x: 426, y: 1184, width: 71, height: 38 },
        other_revenue: { x: 426, y: 1327, width: 71, height: 3 },
        segment_sales: { x: 800, y: 678, width: 70, height: 264 },
        revenue: { x: 1206, y: 732, width: 70, height: 260 },
        eliminations: { x: 1206, y: 1092.5, width: 70, height: 3 },
        gross_profit: { x: 1548, y: 628, width: 70, height: 106 },
        cost_of_sales: { x: 1550, y: 972, width: 70, height: 153 },
        other_income: { x: 1810, y: 647, width: 70, height: 5 },
        operating_profit: { x: 1929, y: 531, width: 70, height: 38 },
        operating_expenses: { x: 1929, y: 794, width: 70, height: 72 },
        net_profit: { x: 2294, y: 396, width: 71, height: 29 },
        tax: { x: 2294, y: 716, width: 71, height: 8 },
        financial_loss: { x: 2294, y: 813, width: 71, height: 4 },
        sga: { x: 2294, y: 1019, width: 71, height: 34 },
        financial_services_other: { x: 2294, y: 1211, width: 71, height: 35 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 813, valueText: '¥813B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 295, valueText: '¥295B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 461, valueText: '¥461B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 687, valueText: '¥687B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 325, valueText: '¥325B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'financial_services', col: 0, order: 5, type: 'source', label: en.financialServices, value: 471, valueText: '¥471B', notes: [en.financialYoy, en.financialMargin], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: en.other, value: 27, valueText: '¥27B', notes: [en.otherYoy, en.otherMargin], color: OTHER, labelColor: '#5e5e5e', linkTint: OTHER_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 3079, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: en.sales, value: 3031, valueText: '¥3,031B', notes: [en.salesYoy], color: BLACK, labelColor: '#5e5e5e', linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: [en.intersegment, en.elimination], value: -50, valueText: '(¥50B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: en.grossProfit, value: 1244, valueText: '¥1,244B', notes: [en.grossMargin, en.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: `${en.costOf} ${en.salesCost}`, value: 1787, valueText: '(¥1,787B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 1, type: 'profit', label: en.otherIncome, value: 79, valueText: '¥79B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: en.operatingProfit, value: 465, valueText: '¥465B', notes: [en.operatingMargin, en.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 2, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 857, valueText: '(¥857B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: en.netProfit, value: 348, valueText: '¥348B', notes: [en.netMargin, en.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: en.tax, value: 114, valueText: '(¥114B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial_loss', col: 5, order: 2, type: 'cost', label: en.financialLoss, value: 4, valueText: '(¥4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: en.sga, value: 424, valueText: '(¥424B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial_services_other', col: 5, order: 4, type: 'cost', label: 'Financial services & other', value: 434, valueText: '(¥434B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'game_network', target: 'segment_sales', value: 813, sourceWidth: 69, targetWidth: 69, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'segment_sales', value: 295, sourceWidth: 24, targetWidth: 25, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'segment_sales', value: 461, sourceWidth: 38, targetWidth: 40, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'segment_sales', value: 687, sourceWidth: 57, targetWidth: 59, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'segment_sales', value: 325, sourceWidth: 25, targetWidth: 28, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'financial_services', target: 'segment_sales', value: 471, sourceWidth: 38, targetWidth: 40, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'segment_sales', value: 27, sourceWidth: 3, targetWidth: 3, targetOrder: 6, linkTint: OTHER_LINK },
      { source: 'segment_sales', target: 'revenue', value: 3031, sourceWidth: 260, targetWidth: 260, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'segment_sales', target: 'eliminations', value: 50, sourceWidth: 4, targetWidth: 3, sourceOrder: 1, targetOrder: 0, y0: 940, y1: 1094, linkTint: RED_LINK, curve: { c1x: 1030, c1y: 940, c2x: 1110, c2y: 1094 } },
      { source: 'revenue', target: 'gross_profit', value: 1244, sourceWidth: 106, targetWidth: 106, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1787, sourceWidth: 154, targetWidth: 153, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 386, sourceWidth: 34, targetWidth: 33, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 857, sourceWidth: 72, targetWidth: 72, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 79, sourceWidth: 5, targetWidth: 5, y0: 649.5, y1: 566.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { c1x: 1898, c1y: 649.5, c2x: 1918, c2y: 566.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 348, sourceWidth: 29, targetWidth: 29, y0: 545.5, y1: 410.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 114, sourceWidth: 7, targetWidth: 8, y0: 563.5, y1: 720, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'financial_loss', value: 4, sourceWidth: 2, targetWidth: 4, y0: 568, y1: 815, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 424, sourceWidth: 36, targetWidth: 34, y0: 812, y1: 1036, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_services_other', value: 434, sourceWidth: 36, targetWidth: 35, y0: 848, y1: 1228.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2022 财年第三季度',
        meta: {
          title: 'Sony 2022 财年第三季度利润表',
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 12 月',
          titleTextLength: 1660,
        },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] },
          music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] },
          technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] },
          financial_services: { label: zh.financialServices, notes: [zh.financialYoy, zh.financialMargin] },
          other_revenue: { label: zh.other, notes: [zh.otherYoy, zh.otherMargin] },
          revenue: { label: zh.sales, notes: [zh.salesYoy] },
          eliminations: { label: [zh.intersegment, zh.elimination] },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] },
          cost_of_sales: { label: `${zh.costOf} ${zh.salesCost}` },
          other_income: { label: zh.otherIncome },
          operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] },
          operating_expenses: { label: `${zh.operating} ${zh.expenses}` },
          net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] },
          tax: { label: zh.tax },
          financial_loss: { label: zh.financialLoss },
          sga: { label: zh.sga },
          financial_services_other: { label: `${zh.financialServicesCost}${zh.servicesOther}` },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

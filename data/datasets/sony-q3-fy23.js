/* ====================================================================
 * Sony - Q3 FY23 income statement (¥B)
 * Reconstructed from input/processed/sony-q3-fy23.png as a fixed
 * d3-sankey layout. Reuses the shared pure-SVG Sony wordmark.
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
  const PURPLE = '#4b00b0';
  const PURPLE_LINK = '#a685d3';
  const OTHER = '#666666';
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
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="324" y="253" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
        <g transform="translate(708 326)" data-typography-role="brand">${sonyWordmark}</g>
      </g>`;
  }

  function labels(t) {
    const valueBlock = (x, top, valueColor, note, lineGap = 10) => ({
      x,
      top,
      anchor: 'middle',
      lineGap,
      lines: [
        { text: '$value', size: 39, weight: 400, color: valueColor },
        { text: note, size: 28, weight: 400, color: NOTE },
      ],
    });
    const segmentNameBlock = (x, top, color, name, margin, nameSize = 40) => ({
      x,
      top,
      anchor: 'end',
      lineGap: 13,
      lines: [
        { text: name, size: nameSize, weight: 800, color },
        { text: margin, size: 28, weight: 400, color: NOTE },
      ],
    });
    return {
      game_network: { blocks: [
        valueBlock(464, 278, ORANGE, t.gameYoy),
        segmentNameBlock(385, 405, ORANGE, t.game, t.gameMargin),
      ] },
      music: { blocks: [
        valueBlock(464, 524, PINK, t.musicYoy),
        segmentNameBlock(360, 621, PINK, t.music, t.musicMargin),
      ] },
      pictures: { blocks: [
        valueBlock(464, 684, GOLD, t.picturesYoy),
        segmentNameBlock(363, 766, GOLD, t.pictures, t.picturesMargin),
      ] },
      technology: { blocks: [
        valueBlock(464, 830, BLUE, t.technologyYoy),
        segmentNameBlock(364, 924, BLUE, t.technology, t.technologyMargin),
      ] },
      imaging_sensing: { blocks: [
        valueBlock(464, 996, DEEP_GREEN, t.imagingYoy),
        segmentNameBlock(389, 1081, DEEP_GREEN, t.imaging, t.imagingMargin, 39),
      ] },
      financial_services: { blocks: [
        valueBlock(464, 1141, PURPLE, t.financialServicesYoy),
        segmentNameBlock(380, 1217, PURPLE, t.financialServices, t.financialServicesMargin, 38),
      ] },
      other_revenue: { blocks: [
        valueBlock(464, 1260, OTHER, t.otherRevenueYoy, 13),
        { x: 380, top: 1342, anchor: 'end', lines: [{ text: t.otherRevenue, size: 40, weight: 800, color: OTHER }] },
      ] },
      revenue: { blocks: [{
        x: 930,
        top: 536,
        anchor: 'middle',
        lineGap: 10,
        lines: [
          { text: t.sales, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1400,
        top: 360,
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
        x: 1392,
        top: 1103,
        anchor: 'middle',
        lineGap: 12,
        lines: [
          { text: t.costOf, size: 34, weight: 800, color: RED_LABEL },
          { text: t.salesCost, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
        x: 1726,
        top: 548,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1870,
        top: 258,
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
        x: 1870,
        top: 785,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      net_profit: { blocks: [
        { x: 2387, top: 303, anchor: 'start', lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }] },
        { x: 2482, top: 355, anchor: 'middle', lineGap: 14, lines: [
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.netMargin, size: 28, weight: 400, color: NOTE },
          { text: t.netYoy, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      tax: { blocks: [{ x: 2482, top: 540, anchor: 'middle', lineGap: 11, lines: [
        { text: t.tax, size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 30, weight: 400, color: RED_LABEL },
      ] }] },
      financial: { blocks: [{ x: 2482, top: 662, anchor: 'middle', lineGap: 11, lines: [
        { text: t.financial, size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 30, weight: 400, color: RED_LABEL },
      ] }] },
      sga: { blocks: [{ x: 2482, top: 901, anchor: 'middle', lineGap: 11, lines: [
        { text: t.sga, size: 31, weight: 800, color: RED_LABEL },
        { text: '$value', size: 30, weight: 400, color: RED_LABEL },
      ] }] },
      financial_services_other: { blocks: [{ x: 2496, top: 1083, anchor: 'middle', lineGap: 8, lines: [
        { text: t.financialServicesCost, size: 29, weight: 800, color: RED_LABEL },
        { text: t.andOther, size: 29, weight: 800, color: RED_LABEL },
        { text: '$value', size: 30, weight: 400, color: RED_LABEL },
      ] }] },
    };
  }

  const textEn = {
    game: 'Game & Network', gameYoy: '+18% Y/Y', gameMargin: '6% operating margin',
    music: 'Music', musicYoy: '+16% Y/Y', musicMargin: '18% operating margin',
    pictures: 'Pictures', picturesYoy: '+10% Y/Y', picturesMargin: '12% operating margin',
    technology: 'Technology', technologyYoy: '(2%) Y/Y', technologyMargin: '11% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+24% Y/Y', imagingMargin: '21% operating margin',
    financialServices: 'Financial services', financialServicesYoy: '13% Y/Y', financialServicesMargin: '25% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '+26% Y/Y', sales: 'Sales', salesYoy: '+22% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '33% margin', grossYoy: '+3pp Y/Y', costOf: 'Cost of', salesCost: 'sales',
    otherIncome: 'Other', operatingProfit: 'Operating profit', operatingMargin: '12% margin', operatingYoy: '(1pp) Y/Y',
    operating: 'Operating', expenses: 'expenses', netProfit: 'Net profit', netMargin: '10% margin', netYoy: '(1pp) Y/Y',
    tax: 'Tax', financial: 'Financial', sga: 'SG&A', financialServicesCost: 'Financial services', andOther: '& other',
  };
  const textZh = {
    game: '游戏与网络', gameYoy: '同比 +18%', gameMargin: '营业利润率 6%',
    music: '音乐', musicYoy: '同比 +16%', musicMargin: '营业利润率 18%',
    pictures: '影视', picturesYoy: '同比 +10%', picturesMargin: '营业利润率 12%',
    technology: '技术', technologyYoy: '同比 (2%)', technologyMargin: '营业利润率 11%',
    imaging: '成像与传感', imagingYoy: '同比 +24%', imagingMargin: '营业利润率 21%',
    financialServices: '金融服务', financialServicesYoy: '同比 13%', financialServicesMargin: '营业利润率 25%',
    otherRevenue: '其他', otherRevenueYoy: '同比 +26%', sales: '销售额', salesYoy: '同比 +22%',
    grossProfit: '毛利润', grossMargin: '利润率 33%', grossYoy: '同比 +3 个百分点', costOf: '销售', salesCost: '成本',
    otherIncome: '其他收入', operatingProfit: '营业利润', operatingMargin: '利润率 12%', operatingYoy: '同比 (1 个百分点)',
    operating: '运营', expenses: '费用', netProfit: '净利润', netMargin: '利润率 10%', netYoy: '同比 (1 个百分点)',
    tax: '税费', financial: '财务项目', sga: '销售、一般及行政费用', financialServicesCost: '金融服务', andOther: '及其他',
  };
  const labelsZh = labels(textZh);
  labelsZh.net_profit.blocks[1].x = 2395;
  labelsZh.net_profit.blocks[1].anchor = 'start';
  labelsZh.sga.blocks[0] = {
    x: 2482,
    top: 901,
    anchor: 'middle',
    lineGap: 8,
    lines: [
      { text: '销售、一般及', size: 28, weight: 800, color: RED_LABEL },
      { text: '行政费用', size: 28, weight: 800, color: RED_LABEL },
      { text: '$value', size: 30, weight: 400, color: RED_LABEL },
    ],
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q3-fy23',
    name: 'Sony · Q3 FY23',
    company: 'Sony',
    meta: {
      company: 'Sony',
      title: 'Sony Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/sony-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1305,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2015,
      periodX: 2490,
      periodY: 143,
      periodNoteY: 184,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: '#858585', hub: '#858585', profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen'),
    layout: {
      scale: 0.0811,
      nodes: {
        game_network: { x: 429, y: 375, width: 71, height: 116 },
        music: { x: 429, y: 623, width: 71, height: 34 },
        pictures: { x: 429, y: 777, width: 71, height: 30 },
        technology: { x: 429, y: 921, width: 71, height: 59 },
        imaging_sensing: { x: 429, y: 1091, width: 71, height: 39 },
        financial_services: { x: 429, y: 1230, width: 71, height: 24 },
        other_revenue: { x: 429, y: 1365, width: 71, height: 3 },
        revenue: { x: 895, y: 678, width: 72, height: 305 },
        gross_profit: { x: 1363, y: 548, width: 71, height: 100 },
        cost_of_sales: { x: 1363, y: 879, width: 71, height: 205 },
        other_income: { x: 1688, y: 537, width: 71, height: 1 },
        operating_profit: { x: 1836, y: 443, width: 70, height: 38 },
        operating_expenses: { x: 1836, y: 710, width: 70, height: 63 },
        net_profit: { x: 2297, y: 358, width: 71, height: 29 },
        tax: { x: 2297, y: 570, width: 71, height: 7 },
        financial: { x: 2297, y: 700, width: 71, height: 2 },
        sga: { x: 2297, y: 913, width: 71, height: 44 },
        financial_services_other: { x: 2297, y: 1106, width: 71, height: 19 },
      },
      labels: labels(textEn),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: 'Game & Network', value: 1429, valueText: '¥1,429B', notes: ['+18% Y/Y', '6% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: 'Music', value: 418, valueText: '¥418B', notes: ['+16% Y/Y', '18% operating margin'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: 'Pictures', value: 365, valueText: '¥365B', notes: ['+10% Y/Y', '12% operating margin'], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: 'Technology', value: 726, valueText: '¥726B', notes: ['(2%) Y/Y', '11% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: 'Imaging & Sensing', value: 478, valueText: '¥478B', notes: ['+24% Y/Y', '21% operating margin'], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'financial_services', col: 0, order: 5, type: 'source', label: 'Financial services', value: 309, valueText: '¥309B', notes: ['13% Y/Y', '25% operating margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 23, valueText: '¥23B', notes: ['+26% Y/Y'], color: OTHER, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 3748, valueText: '¥3,748B', notes: ['+22% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1244, valueText: '¥1,244B', notes: ['33% margin', '+3pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 2504, valueText: '(¥2,504B)' },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 7, valueText: '¥7B' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 464, valueText: '¥464B', notes: ['12% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: 'Operating expenses', value: 787, valueText: '(¥787B)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 368, valueText: '¥368B', notes: ['10% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 91, valueText: '(¥91B)' },
      { id: 'financial', col: 4, order: 2, type: 'cost', label: 'Financial', value: 4, valueText: '(¥4B)' },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 555, valueText: '(¥555B)' },
      { id: 'financial_services_other', col: 4, order: 4, type: 'cost', label: 'Financial services & other', value: 232, valueText: '(¥232B)' },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 1429, width: 116, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 418, width: 34, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 365, width: 30, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 726, width: 59, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 478, width: 39, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'financial_services', target: 'revenue', value: 309, width: 24, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 23, width: 3, targetOrder: 6, linkTint: OTHER_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1244, width: 100, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2504, width: 205, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 457, width: 37, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 787, width: 63, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 7, width: 1, sourceOrder: 0, targetOrder: 1, y0: 537.5, y1: 479.5, linkTint: GREEN_LINK, curve: { c1x: 1776, c1y: 537.5, c2x: 1822, c2y: 479.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 368, width: 29, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 91, width: 7, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'financial', value: 4, width: 2, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 555, width: 44, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_services_other', value: 232, width: 19, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2023 财年第三季度',
        meta: {
          title: 'Sony 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 12 月',
          titleTextLength: 1620,
          periodX: 2420,
        },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: '游戏与网络', notes: ['同比 +18%', '营业利润率 6%'] },
          music: { label: '音乐', notes: ['同比 +16%', '营业利润率 18%'] },
          pictures: { label: '影视', notes: ['同比 +10%', '营业利润率 12%'] },
          technology: { label: '技术', notes: ['同比 (2%)', '营业利润率 11%'] },
          imaging_sensing: { label: '成像与传感', notes: ['同比 +24%', '营业利润率 21%'] },
          financial_services: { label: '金融服务', notes: ['同比 13%', '营业利润率 25%'] },
          other_revenue: { label: '其他', notes: ['同比 +26%'] },
          revenue: { label: '销售额', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 33%', '同比 +3 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          other_income: { label: '其他收入' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          financial: { label: '财务项目' },
          sga: { label: '销售、一般及行政费用' },
          financial_services_other: { label: '金融服务及其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

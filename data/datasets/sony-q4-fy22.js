/* ====================================================================
 * Sony - Q4 FY22 income statement (¥B)
 * Reconstructed from input/processed/sony-q4-fy22.png as a fixed
 * d3-sankey layout. Reuses the validated pure-SVG Sony wordmark.
 * ==================================================================== */
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
  const OTHER = '#7f7f7f';
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
    const segmentNameBlock = (
      x,
      top,
      color,
      name,
      margin,
      nameSize = 40,
      marginSize = 28
    ) => ({
      x,
      top,
      anchor: 'end',
      lineGap: 13,
      lines: [
        { text: name, size: nameSize, weight: 800, color },
        { text: margin, size: marginSize, weight: 400, color: NOTE },
      ],
    });
    return {
      game_network: { blocks: [
        valueBlock(455.5, 326, ORANGE, t.gameYoy),
        segmentNameBlock(384, 430, ORANGE, t.game, t.gameMargin),
      ] },
      music: { blocks: [
        valueBlock(455.5, 531, PINK, t.musicYoy),
        segmentNameBlock(376, 604, PINK, t.music, t.musicMargin, 40, 30),
      ] },
      pictures: { blocks: [
        valueBlock(455.5, 661, GOLD, t.picturesYoy),
        segmentNameBlock(382, 729, GOLD, t.pictures, t.picturesMargin, 40, 30),
      ] },
      technology: { blocks: [
        valueBlock(455.5, 793, BLUE, t.technologyYoy),
        segmentNameBlock(388, 865, BLUE, t.technology, t.technologyMargin),
      ] },
      imaging_sensing: { blocks: [
        valueBlock(455.5, 957.5, DEEP_GREEN, t.imagingYoy),
        segmentNameBlock(391, 1026.5, DEEP_GREEN, t.imaging, t.imagingMargin, 38),
      ] },
      financial_services: { blocks: [
        valueBlock(455.5, 1096.5, PURPLE, t.financialYoy),
        segmentNameBlock(389, 1170.5, PURPLE, t.financialServices, t.financialMargin, 39),
      ] },
      other_revenue: { blocks: [
        valueBlock(455.5, 1247, OTHER, t.otherYoy, 15),
        segmentNameBlock(379, 1298, OTHER, t.other, t.otherMargin, 39),
      ] },
      segment_sales: { blocks: [] },
      revenue: { blocks: [{
        x: 1200,
        top: 574.5,
        anchor: 'middle',
        lineGap: 10,
        lines: [
          { text: t.sales, size: 40, weight: 800, color: '#5e5e5e' },
          { text: '$value', size: 39, weight: 400, color: '#5e5e5e' },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      eliminations: { blocks: [{
        x: 1203,
        top: 1149,
        anchor: 'middle',
        lineGap: 8,
        lines: [
          { text: t.intersegment, size: 34, weight: 800, color: RED_LABEL },
          { text: t.elimination, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1582,
        top: 428,
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
        x: 1582,
        top: 1104,
        anchor: 'middle',
        lineGap: 8,
        lines: [
          { text: t.costOf, size: 34, weight: 800, color: RED_LABEL },
          { text: t.salesCost, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
          x: 1838.5,
        top: 607,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1943,
        top: 335,
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
        x: 1938,
        top: 862.5,
        anchor: 'middle',
        lineGap: 10,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      financial_income: { blocks: [{
        x: 2186.5,
        top: 531,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.financialIncome, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      net_profit: { blocks: [
        {
          x: 2382,
          top: 373,
          anchor: 'start',
          lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }],
        },
        {
          x: 2482,
          top: 422,
          anchor: 'middle',
          lineGap: 14,
          lines: [
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: t.netMargin, size: 28, weight: 400, color: NOTE },
            { text: t.netYoy, size: 28, weight: 400, color: NOTE },
          ],
        },
      ] },
      tax: { blocks: [{
        x: 2482,
        top: 682,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.tax, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      sga: { blocks: [{
        x: 2482,
        top: 942,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.sga, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      financial_services_other: { blocks: [{
        x: 2482,
        top: 1171,
        anchor: 'middle',
        lineGap: 8,
        lines: [
          { text: t.financialServicesCost, size: 31, weight: 800, color: RED_LABEL },
          { text: t.servicesOther, size: 31, weight: 800, color: RED_LABEL },
          { text: t.andOther, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
    };
  }

  const textEn = {
    game: 'Game & Network', gameYoy: '+61% Y/Y', gameMargin: '8% operating margin',
    music: 'Music', musicYoy: '+19% Y/Y', musicMargin: '14% operating margin',
    pictures: 'Pictures', picturesYoy: '+15% Y/Y', picturesMargin: '3% operating margin',
    technology: 'Technology', technologyYoy: '+0% Y/Y', technologyMargin: '(2%) operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+37% Y/Y', imagingMargin: '3% operating margin',
    financialServices: 'Financial services', financialYoy: '+76% Y/Y', financialMargin: '10% operating margin',
    other: 'Other', otherYoy: '(10%) Y/Y', otherMargin: '(13%) operating margin',
    sales: 'Sales', salesYoy: '+35% Y/Y', intersegment: 'Intersegment', elimination: 'Elimination',
    grossProfit: 'Gross profit', grossMargin: '37% margin', grossYoy: '+1pp Y/Y',
    costOf: 'Cost of', salesCost: 'sales', otherIncome: 'Other',
    operatingProfit: 'Operating profit', operatingMargin: '4% margin', operatingYoy: '(2pp) Y/Y',
    operating: 'Operating', expenses: 'expenses', financialIncome: 'Financial', netProfit: 'Net profit',
    netMargin: '4% margin', netYoy: '(1pp) Y/Y', tax: 'Tax', sga: 'SG&A',
    financialServicesCost: 'Financial', servicesOther: 'services', andOther: '& other',
  };

  const textZh = {
    game: '游戏与网络', gameYoy: '同比 +61%', gameMargin: '营业利润率 8%',
    music: '音乐', musicYoy: '同比 +19%', musicMargin: '营业利润率 14%',
    pictures: '影视', picturesYoy: '同比 +15%', picturesMargin: '营业利润率 3%',
    technology: '技术', technologyYoy: '同比 +0%', technologyMargin: '营业利润率 (2%)',
    imaging: '成像与传感', imagingYoy: '同比 +37%', imagingMargin: '营业利润率 3%',
    financialServices: '金融服务', financialYoy: '同比 +76%', financialMargin: '营业利润率 10%',
    other: '其他', otherYoy: '同比 (10%)', otherMargin: '营业利润率 (13%)',
    sales: '销售额', salesYoy: '同比 +35%', intersegment: '分部间', elimination: '抵销',
    grossProfit: '毛利润', grossMargin: '利润率 37%', grossYoy: '同比 +1 个百分点',
    costOf: '销售', salesCost: '成本', otherIncome: '其他收入',
    operatingProfit: '营业利润', operatingMargin: '利润率 4%', operatingYoy: '同比 (2 个百分点)',
    operating: '营业', expenses: '费用', financialIncome: '金融收入', netProfit: '净利润',
    netMargin: '利润率 4%', netYoy: '同比 (1 个百分点)', tax: '税费', sga: '销售、一般及行政费用',
    financialServicesCost: '金融服务', servicesOther: '及其他', andOther: '费用',
  };
  const labelsZh = labels(textZh);
  labelsZh.sga.blocks[0].x = 2490;
  labelsZh.sga.blocks[0].lines[0].size = 25;
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q4-fy22',
    name: 'Sony · Q4 FY22',
    company: 'Sony',
    meta: {
      company: 'Sony',
      title: 'Sony Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Mar. 2023',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/sony-q4-fy22.png', width: 2667, height: 1500 },
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
        game_network: { x: 420, y: 418, width: 71, height: 94 },
        music: { x: 420, y: 622, width: 71, height: 28 },
        pictures: { x: 420, y: 755, width: 71, height: 31 },
        technology: { x: 420, y: 889, width: 71, height: 43 },
        imaging_sensing: { x: 420, y: 1047, width: 71, height: 29 },
        financial_services: { x: 420, y: 1187, width: 71, height: 43 },
        other_revenue: { x: 420, y: 1352, width: 71, height: 4 },
        segment_sales: { x: 794, y: 679, width: 70, height: 279 },
        revenue: { x: 1165, y: 723, width: 70, height: 273 },
        eliminations: { x: 1168, y: 1116, width: 70, height: 8 },
        gross_profit: { x: 1547, y: 620, width: 70, height: 99 },
        cost_of_sales: { x: 1547, y: 907, width: 70, height: 170 },
        other_income: { x: 1799, y: 592, width: 71, height: 5 },
        operating_profit: { x: 1908, y: 520, width: 70, height: 12 },
        operating_expenses: { x: 1903, y: 752, width: 70, height: 89 },
        financial_income: { x: 2146, y: 515, width: 73, height: 5 },
        net_profit: { x: 2288, y: 398, width: 71, height: 11 },
        tax: { x: 2288, y: 718, width: 71, height: 5 },
        sga: { x: 2288, y: 954, width: 71, height: 48 },
        financial_services_other: { x: 2288, y: 1218, width: 71, height: 39 },
      },
      labels: labels(textEn),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: textEn.game, value: 1073, valueText: '¥1,073B', notes: [textEn.gameYoy, textEn.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: textEn.music, value: 349, valueText: '¥349B', notes: [textEn.musicYoy, textEn.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: textEn.pictures, value: 359, valueText: '¥359B', notes: [textEn.picturesYoy, textEn.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: textEn.technology, value: 494, valueText: '¥494B', notes: [textEn.technologyYoy, textEn.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: textEn.imaging, value: 348, valueText: '¥348B', notes: [textEn.imagingYoy, textEn.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'financial_services', col: 0, order: 5, type: 'source', label: textEn.financialServices, value: 493, valueText: '¥493B', notes: [textEn.financialYoy, textEn.financialMargin], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: textEn.other, value: 23, valueText: '¥23B', notes: [textEn.otherYoy, textEn.otherMargin], color: OTHER, labelColor: '#5e5e5e', linkTint: OTHER_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 3139, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: textEn.sales, value: 3064, valueText: '¥3,064B', notes: [textEn.salesYoy], color: BLACK, labelColor: '#5e5e5e', linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: [textEn.intersegment, textEn.elimination], value: -77, valueText: '(¥77B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: textEn.grossProfit, value: 1131, valueText: '¥1,131B', notes: [textEn.grossMargin, textEn.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: `${textEn.costOf} ${textEn.salesCost}`, value: 1933, valueText: '(¥1,933B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 1, type: 'profit', label: textEn.otherIncome, value: 6, valueText: '¥6B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: textEn.operatingProfit, value: 129, valueText: '¥129B', notes: [textEn.operatingMargin, textEn.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 2, type: 'cost', label: `${textEn.operating} ${textEn.expenses}`, value: 1008, valueText: '(¥1,008B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial_income', col: 5, order: 1, type: 'profit', label: textEn.financialIncome, value: 16, valueText: '¥16B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: textEn.netProfit, value: 129, valueText: '¥129B', notes: [textEn.netMargin, textEn.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: textEn.tax, value: 16, valueText: '(¥16B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: textEn.sga, value: 551, valueText: '(¥551B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial_services_other', col: 6, order: 3, type: 'cost', label: 'Financial services & other', value: 457, valueText: '(¥457B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'game_network', target: 'segment_sales', value: 1073, width: 94, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'segment_sales', value: 349, width: 28, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'segment_sales', value: 359, width: 31, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'segment_sales', value: 494, width: 43, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'segment_sales', value: 348, width: 29, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'financial_services', target: 'segment_sales', value: 493, width: 43, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'segment_sales', value: 23, sourceWidth: 4, targetWidth: 11, targetOrder: 6, linkTint: OTHER_LINK },
      { source: 'segment_sales', target: 'revenue', value: 3064, sourceWidth: 273, targetWidth: 273, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'segment_sales', target: 'eliminations', value: 77, sourceWidth: 8, targetWidth: 8, sourceOrder: 1, targetOrder: 0, y0: 954, y1: 1120, linkTint: RED_LINK, curve: { c1x: 1030, c1y: 954, c2x: 1100, c2y: 1120 } },
      { source: 'revenue', target: 'gross_profit', value: 1131, sourceWidth: 99, targetWidth: 99, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1933, sourceWidth: 174, targetWidth: 170, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 123, sourceWidth: 12, targetWidth: 12, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1008, sourceWidth: 87, targetWidth: 89, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 6, sourceWidth: 5, targetWidth: 5, y0: 594.5, y1: 529.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { c1x: 1890, c1y: 594.5, c2x: 1899, c2y: 529.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 113, sourceWidth: 12, targetWidth: 11, y0: 526, y1: 403.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 16, sourceWidth: 5, targetWidth: 5, y0: 529.5, y1: 720.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'financial_income', target: 'net_profit', value: 16, sourceWidth: 5, targetWidth: 5, y0: 517.5, y1: 406.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { c1x: 2240, c1y: 517.5, c2x: 2265, c2y: 406.5 } },
      { source: 'operating_expenses', target: 'sga', value: 551, sourceWidth: 48, targetWidth: 48, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_services_other', value: 457, sourceWidth: 39, targetWidth: 39, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2022 财年第四季度',
        meta: {
          title: 'Sony 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2023 年 3 月',
          titleTextLength: 1660,
        },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: textZh.game, notes: [textZh.gameYoy, textZh.gameMargin] },
          music: { label: textZh.music, notes: [textZh.musicYoy, textZh.musicMargin] },
          pictures: { label: textZh.pictures, notes: [textZh.picturesYoy, textZh.picturesMargin] },
          technology: { label: textZh.technology, notes: [textZh.technologyYoy, textZh.technologyMargin] },
          imaging_sensing: { label: textZh.imaging, notes: [textZh.imagingYoy, textZh.imagingMargin] },
          financial_services: { label: textZh.financialServices, notes: [textZh.financialYoy, textZh.financialMargin] },
          other_revenue: { label: textZh.other, notes: [textZh.otherYoy, textZh.otherMargin] },
          revenue: { label: textZh.sales, notes: [textZh.salesYoy] },
          eliminations: { label: [textZh.intersegment, textZh.elimination] },
          gross_profit: { label: textZh.grossProfit, notes: [textZh.grossMargin, textZh.grossYoy] },
          cost_of_sales: { label: `${textZh.costOf} ${textZh.salesCost}` },
          other_income: { label: textZh.otherIncome },
          operating_profit: { label: textZh.operatingProfit, notes: [textZh.operatingMargin, textZh.operatingYoy] },
          operating_expenses: { label: `${textZh.operating} ${textZh.expenses}` },
          financial_income: { label: textZh.financialIncome },
          net_profit: { label: textZh.netProfit, notes: [textZh.netMargin, textZh.netYoy] },
          tax: { label: textZh.tax },
          sga: { label: textZh.sga },
          financial_services_other: { label: `${textZh.financialServicesCost}${textZh.servicesOther}` },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

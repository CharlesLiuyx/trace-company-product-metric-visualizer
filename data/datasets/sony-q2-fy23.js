/* ====================================================================
 * Sony - Q2 FY23 income statement (¥B)
 * Reconstructed from input/processed/sony-q2-fy23.png as a fixed
 * d3-sankey layout. Reuses the validated pure-SVG Sony wordmark.
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
  const OTHER = '#5e5e5e';
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
        <text x="324" y="253" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
        <g transform="translate(710 301)" data-typography-role="brand">${sonyWordmark}</g>
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
        valueBlock(464, 273, ORANGE, t.gameYoy),
        segmentNameBlock(385, 395, ORANGE, t.game, t.gameMargin),
      ] },
      music: { blocks: [
        valueBlock(449.5, 497, PINK, t.musicYoy),
        segmentNameBlock(366.5, 577, PINK, t.music, t.musicMargin),
      ] },
      pictures: { blocks: [
        valueBlock(449.7, 649, GOLD, t.picturesYoy),
        segmentNameBlock(370.7, 724, GOLD, t.pictures, t.picturesMargin),
      ] },
      technology: { blocks: [
        valueBlock(451.9, 812, BLUE, t.technologyYoy),
        segmentNameBlock(377.9, 889, BLUE, t.technology, t.technologyMargin),
      ] },
      imaging_sensing: { blocks: [
        valueBlock(459, 998, DEEP_GREEN, t.imagingYoy),
        segmentNameBlock(390, 1055, DEEP_GREEN, t.imaging, t.imagingMargin, 39),
      ] },
      financial_services: { blocks: [
        valueBlock(464.5, 1155, PURPLE, t.financialServicesYoy),
        segmentNameBlock(382.5, 1191, PURPLE, t.financialServices, t.financialServicesMargin, 38),
      ] },
      other_revenue: { blocks: [
        valueBlock(464.5, 1268, OTHER, t.otherRevenueYoy, 12),
        {
          x: 381,
          top: 1323,
          anchor: 'end',
          semanticRole: 'source-offset-side-label',
          lines: [{ text: t.otherRevenue, size: 40, weight: 800, color: OTHER }],
        },
      ] },
      revenue: { blocks: [{
        x: 939, top: 519, anchor: 'middle', lineGap: 10,
        lines: [
          { text: t.sales, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1403, top: 346, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: t.grossYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      cost_of_sales: { blocks: [{
        x: 1402, top: 1093, anchor: 'middle', lineGap: 12,
        lines: [
          ...t.costOfSalesLines.map((text) => ({ text, size: 34, weight: 800, color: RED_LABEL })),
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
        x: 1708, top: 543, anchor: 'middle', lineGap: 11,
        lines: [
          { text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1858, top: 274, anchor: 'middle', lineGap: 12,
        lines: [
          { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: t.operatingYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      operating_expenses: { blocks: [{
        x: 1860, top: 755, anchor: 'middle', lineGap: 8,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      net_profit: { blocks: [
        { x: 2385, top: 323, anchor: 'start', lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }] },
        { x: 2482, top: 375, anchor: 'middle', lineGap: 14, lines: [
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.netMargin, size: 28, weight: 400, color: NOTE },
          { text: t.netYoy, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      tax: { blocks: [{
        x: 2482, top: 537, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.tax, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }],
      }] },
      financial: { blocks: [{
        x: 2482, top: 646, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.financial, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }],
      }] },
      sga: { blocks: [{
        x: 2482, top: 791, anchor: 'middle', lineGap: 11,
        lines: [{ text: t.sga, size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 30, weight: 400, color: RED_LABEL }],
      }] },
      financial_services_other: { blocks: [{
        x: 2482, top: 1002, anchor: 'middle', lineGap: 8,
        lines: [
          ...t.financialServicesOtherLines.map((text) => ({ text, size: 31, weight: 800, color: RED_LABEL })),
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '+32% Y/Y', gameMargin: '5% operating margin',
    music: 'Music', musicYoy: '+12% Y/Y', musicMargin: '20% operating margin',
    pictures: 'Pictures', picturesYoy: '+18% Y/Y', picturesMargin: '7% operating margin',
    technology: 'Technology', technologyYoy: '(10%) Y/Y', technologyMargin: '10% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+1% Y/Y', imagingMargin: '12% operating margin',
    financialServices: 'Financial services', financialServicesYoy: '(42%) Y/Y', financialServicesMargin: '15% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '+26% Y/Y',
    sales: 'Sales', salesYoy: '+8% Y/Y', grossProfit: 'Gross profit', grossMargin: '30% margin', grossYoy: '(5pp) Y/Y',
    costOfSales: 'Cost of sales', costOfSalesLines: ['Cost of', 'sales'], otherIncome: 'Other', operatingProfit: 'Operating profit', operatingMargin: '9% margin', operatingYoy: '(5pp) Y/Y',
    operating: 'Operating', expenses: 'expenses', netProfit: 'Net profit', netMargin: '7% margin', netYoy: '(4pp) Y/Y',
    tax: 'Tax', financial: 'Financial', sga: 'SG&A', andOther: 'services & other', financialServicesOtherLines: ['Financial', 'services', '& other'],
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 +32%', gameMargin: '营业利润率 5%',
    music: '音乐', musicYoy: '同比 +12%', musicMargin: '营业利润率 20%',
    pictures: '影视', picturesYoy: '同比 +18%', picturesMargin: '营业利润率 7%',
    technology: '技术', technologyYoy: '同比 (10%)', technologyMargin: '营业利润率 10%',
    imaging: '成像与传感', imagingYoy: '同比 +1%', imagingMargin: '营业利润率 12%',
    financialServices: '金融服务', financialServicesYoy: '同比 (42%)', financialServicesMargin: '营业利润率 15%',
    otherRevenue: '其他', otherRevenueYoy: '同比 +26%',
    sales: '销售额', salesYoy: '同比 +8%', grossProfit: '毛利润', grossMargin: '利润率 30%', grossYoy: '同比 (5 个百分点)',
    costOfSales: '销售成本', costOfSalesLines: ['销售', '成本'], otherIncome: '其他收入', operatingProfit: '营业利润', operatingMargin: '利润率 9%', operatingYoy: '同比 (5 个百分点)',
    operating: '运营', expenses: '费用', netProfit: '净利润', netMargin: '利润率 7%', netYoy: '同比 (4 个百分点)',
    tax: '税费', financial: '财务费用', sga: '销售、一般及行政费用', andOther: '及其他', financialServicesOtherLines: ['金融', '服务', '及其他'],
  };
  const labelsZh = labels(zh);
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';
  labelsZh.sga.blocks[0].x = 2510;
  labelsZh.sga.blocks[0].lines[0].size = 26;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q2-fy23',
    name: 'Sony · Q2 FY23',
    company: 'Sony',
    meta: {
      company: 'Sony', title: 'Sony Q2 FY23 Income Statement', period: 'Q2 FY23', periodNote: 'Ending Sept. 2023',
      currency: '¥', unit: 'B', decimals: 0,
      referenceImage: { src: 'input/processed/sony-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2024,
      periodX: 2517, periodY: 145, periodNoteY: 187,
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
        game_network: { x: 429, y: 362, width: 71, height: 104 }, music: { x: 429, y: 586, width: 71, height: 44 },
        pictures: { x: 429, y: 738, width: 71, height: 43 }, technology: { x: 429, y: 901, width: 71, height: 68 },
        imaging_sensing: { x: 429, y: 1087, width: 71, height: 40 }, financial_services: { x: 429, y: 1243, width: 71, height: 9 },
        other_revenue: { x: 429, y: 1363, width: 71, height: 5 }, revenue: { x: 904, y: 666, width: 70, height: 320 },
        gross_profit: { x: 1368, y: 536, width: 71, height: 96 }, cost_of_sales: { x: 1365, y: 849, width: 72, height: 223 },
        other_income: { x: 1673, y: 524, width: 71, height: 5 }, operating_profit: { x: 1823, y: 456, width: 70, height: 29 },
        operating_expenses: { x: 1826, y: 672, width: 70, height: 68 }, net_profit: { x: 2297, y: 355, width: 71, height: 20 },
        tax: { x: 2297, y: 565, width: 71, height: 4 }, financial: { x: 2297, y: 672, width: 71, height: 2 },
        sga: { x: 2297, y: 795, width: 71, height: 58 }, financial_services_other: { x: 2297, y: 1030, width: 71, height: 8 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 930, valueText: '¥930B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 399, valueText: '¥399B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 397, valueText: '¥397B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 603, valueText: '¥603B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 375, valueText: '¥375B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'financial_services', col: 0, order: 5, type: 'source', label: en.financialServices, value: 102, valueText: '¥102B', notes: [en.financialServicesYoy, en.financialServicesMargin], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: en.otherRevenue, value: 22, valueText: '¥22B', notes: [en.otherRevenueYoy], color: OTHER, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: en.sales, value: 2829, valueText: '¥2,829B', notes: [en.salesYoy], color: BLACK, labelColor: BLACK, linkTint: '#858585' },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: en.grossProfit, value: 861, valueText: '¥861B', notes: [en.grossMargin, en.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: en.costOfSales, value: 1968, valueText: '(¥1,968B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: en.otherIncome, value: 6, valueText: '¥6B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 3, order: 1, type: 'profit', label: en.operatingProfit, value: 263, valueText: '¥263B', notes: [en.operatingMargin, en.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 604, valueText: '(¥604B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: en.netProfit, value: 201, valueText: '¥201B', notes: [en.netMargin, en.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: en.tax, value: 56, valueText: '(¥56B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial', col: 4, order: 2, type: 'cost', label: en.financial, value: 5, valueText: '(¥5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: en.sga, value: 519, valueText: '(¥519B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial_services_other', col: 4, order: 4, type: 'cost', label: [en.financialServices, en.andOther], value: 86, valueText: '(¥86B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 930, sourceWidth: 104, targetWidth: 105, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 399, sourceWidth: 44, targetWidth: 45, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 397, sourceWidth: 43, targetWidth: 45, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 603, sourceWidth: 68, targetWidth: 68, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 375, sourceWidth: 40, targetWidth: 42, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'financial_services', target: 'revenue', value: 102, sourceWidth: 9, targetWidth: 12, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 22, sourceWidth: 5, targetWidth: 3, targetOrder: 6, linkTint: OTHER_LINK },
      { source: 'revenue', target: 'gross_profit', value: 861, sourceWidth: 96, targetWidth: 96, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1968, sourceWidth: 223, targetWidth: 223, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 257, sourceWidth: 29, targetWidth: 28, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 604, sourceWidth: 67, targetWidth: 68, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 6, sourceWidth: 3, targetWidth: 1, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        y0: 526.5, y1: 484.5, curve: { x0: 1744, x1: 1823, c1x: 1775, c1y: 526.5, c2x: 1805, c2y: 484.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 201, sourceWidth: 22, targetWidth: 20, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 56, sourceWidth: 6, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'financial', value: 5, sourceWidth: 1, targetWidth: 2, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 519, sourceWidth: 58, targetWidth: 58, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_services_other', value: 86, sourceWidth: 10, targetWidth: 8, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2023 财年第二季度',
        meta: { title: 'Sony 2023 财年第二季度利润表', period: '2023 财年第二季度', periodNote: '截至 2023 年 9 月', titleTextLength: 1660, periodX: 2498 },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] }, music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] }, technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] }, financial_services: { label: zh.financialServices, notes: [zh.financialServicesYoy, zh.financialServicesMargin] },
          other_revenue: { label: zh.otherRevenue, notes: [zh.otherRevenueYoy] }, revenue: { label: zh.sales, notes: [zh.salesYoy] },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] }, cost_of_sales: { label: zh.costOfSales },
          other_income: { label: zh.otherIncome }, operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] },
          operating_expenses: { label: [zh.operating, zh.expenses] }, net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] },
          tax: { label: zh.tax }, financial: { label: zh.financial }, sga: { label: zh.sga }, financial_services_other: { label: [zh.financialServices, zh.andOther] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

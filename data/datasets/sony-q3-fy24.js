/* Sony · Q3 FY24 income statement (¥B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#797979';
  const BLACK = '#000000';
  const BACKGROUND = '#f2f2f2';
  const ORANGE = '#d95f02';
  const ORANGE_LINK = '#e6af86';
  const PINK = '#e2308b';
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

  const line = (text, size, weight = 400, color = BLACK) => ({ text, size, weight, color });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 10,
    ...(options.semanticRole ? { semanticRole: options.semanticRole } : {}), lines,
  });

  function annotations(zh) {
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="324" y="253" font-size="40" font-weight="800" fill="${TITLE}">${zh ? '以日元计' : 'in yen'}</text>
      </g>
      <g transform="translate(710 306)" data-typography-role="brand">${sonyWordmark}</g>
      <g class="sankey-interactive-annotation" data-node="other_income"
        data-link-numerator="other_income" data-link-denominator="operating_profit"
        data-link-anchor-x="1790" data-link-anchor-y="432">
        <path d="M1717 432H1790C1818 432 1816 442 1836 442" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="1754" y="508" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收入' : 'Other'}</text>
        <text x="1754" y="550" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">¥2B</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="financial"
        data-link-numerator="financial" data-link-denominator="net_profit"
        data-link-anchor-x="2235" data-link-anchor-y="375">
        <path d="M2147 375H2235C2265 375 2266 334 2297 334" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="2213" y="417" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '财务收益' : 'Financial'}</text>
        <text x="2213" y="459" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">(¥25B)</text>
      </g>`;
  }

  function labels(t) {
    const valueBlock = (x, top, color, noteText) => block(x, top, [
      line('$value', 39, 400, color), line(noteText, 28, 400, NOTE),
    ]);
    const segmentBlock = (x, top, color, name, margin, size = 40) => block(x, top, [
      line(name, size, 800, color), ...(margin ? [line(margin, 28, 400, NOTE)] : []),
    ], { anchor: 'end', lineGap: 13, semanticRole: 'reference-offset-side-label' });
    return {
      game_network: { blocks: [valueBlock(465, 282, ORANGE, t.gameYoy), segmentBlock(383, 394, ORANGE, t.game, t.gameMargin)] },
      music: { blocks: [valueBlock(488, 521, PINK, t.musicYoy), segmentBlock(406, 594, PINK, t.music, t.musicMargin)] },
      pictures: { blocks: [valueBlock(453, 674, GOLD, t.picturesYoy), segmentBlock(371, 750, GOLD, t.pictures, t.picturesMargin)] },
      technology: { blocks: [valueBlock(479, 820, BLUE, t.technologyYoy), segmentBlock(397, 903, BLUE, t.technology, t.technologyMargin)] },
      imaging_sensing: { blocks: [valueBlock(494, 979, DEEP_GREEN, t.imagingYoy), segmentBlock(412, 1040, DEEP_GREEN, t.imaging, t.imagingMargin, 39)] },
      financial_services: { blocks: [valueBlock(482, 1115, PURPLE, t.financialServicesYoy), segmentBlock(400, 1187, PURPLE, t.financialServices, t.financialServicesMargin, 39)] },
      other_revenue: { blocks: [valueBlock(465, 1265, OTHER, t.otherRevenueYoy), segmentBlock(423, 1332, OTHER, t.otherRevenue, '')] },
      revenue: { blocks: [block(927, 515, [line(t.sales, 40, 800), line('$value', 39), line(t.salesYoy, 28, 400, NOTE)])] },
      gross_profit: { blocks: [block(1396, 348, [line(t.grossProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.grossMargin, 28, 400, NOTE), line(t.grossYoy, 28, 400, NOTE)], { lineGap: 12 })] },
      cost_of_sales: { blocks: [block(1396, 1092, [line(t.costOfSales, 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)])] },
      other_income: { blocks: [] },
      operating_profit: { blocks: [block(1866, 224, [line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.operatingMargin, 28, 400, NOTE), line(t.operatingYoy, 28, 400, NOTE)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1870, 747, [line(t.operating, 36, 800, RED_LABEL), line(t.expenses, 36, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL)], { lineGap: 11 })] },
      net_profit: { blocks: [
        block(2386, 259, [line(t.netProfit, 40, 800, GREEN_LABEL)], { anchor: 'start' }),
        block(2482, 309, [line('$value', 39, 400, GREEN_LABEL), line(t.netMargin, 28, 400, NOTE), line(t.netYoy, 28, 400, NOTE)], { lineGap: 14 }),
      ] },
      tax: { blocks: [block(2482, 501, [line(t.tax, 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], { lineGap: 11 })] },
      financial_services_other: { blocks: [block(2415, 718, [line(t.financialServicesOther[0], 31, 800, RED_LABEL), line(t.financialServicesOther[1], 31, 800, RED_LABEL), line(t.financialServicesOther[2], 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], { anchor: 'start' })] },
      sga: { blocks: [block(2482, 1017, [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], { lineGap: 11 })] },
      financial: { blocks: [] },
    };
  }

  const textEn = {
    game: 'Game & Network', gameYoy: '+13% Y/Y', gameMargin: '7% operating margin', music: 'Music', musicYoy: '+14% Y/Y', musicMargin: '20% operating margin',
    pictures: 'Pictures', picturesYoy: '+9% Y/Y', picturesMargin: '9% operating margin', technology: 'Technology', technologyYoy: '(5%) Y/Y', technologyMargin: '11% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+1% Y/Y', imagingMargin: '20% operating margin', financialServices: 'Financial services', financialServicesYoy: '+132% Y/Y', financialServicesMargin: '6% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '+14% Y/Y', sales: 'Sales', salesYoy: '+18% Y/Y', grossProfit: 'Gross profit', grossMargin: '39% margin', grossYoy: '+6pp Y/Y', costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '11% margin', operatingYoy: '(2pp) Y/Y', operating: 'Operating', expenses: 'expenses', netProfit: 'Net profit', netMargin: '8% margin', netYoy: '(1pp) Y/Y',
    tax: 'Tax', financialServicesOther: ['Financial', 'services', '& other'],
  };
  const textZh = {
    game: '游戏与网络', gameYoy: '同比 +13%', gameMargin: '营业利润率 7%', music: '音乐', musicYoy: '同比 +14%', musicMargin: '营业利润率 20%',
    pictures: '影视', picturesYoy: '同比 +9%', picturesMargin: '营业利润率 9%', technology: '技术', technologyYoy: '同比 (5%)', technologyMargin: '营业利润率 11%',
    imaging: '成像与传感', imagingYoy: '同比 +1%', imagingMargin: '营业利润率 20%', financialServices: '金融服务', financialServicesYoy: '同比 +132%', financialServicesMargin: '营业利润率 6%',
    otherRevenue: '其他', otherRevenueYoy: '同比 +14%', sales: '销售额', salesYoy: '同比 +18%', grossProfit: '毛利润', grossMargin: '利润率 39%', grossYoy: '同比 +6 个百分点', costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 11%', operatingYoy: '同比 (2 个百分点)', operating: '运营', expenses: '费用', netProfit: '净利润', netMargin: '利润率 8%', netYoy: '同比 (1 个百分点)',
    tax: '税费', financialServicesOther: ['金融服务', '及其他', '费用'],
  };
  const labelsEn = labels(textEn);
  const labelsZh = labels(textZh);
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';
  labelsZh.financial_services_other.blocks[0].x = 2395;
  labelsZh.sga.blocks[0].lines[0] = line('销售、一般及行政费用', 27, 800, RED_LABEL);
  labelsZh.sga.blocks[0].x = 2510;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q3-fy24', name: 'Sony · Q3 FY24', company: 'Sony',
    meta: {
      company: 'Sony', title: 'Sony Q3 FY24 Income Statement', period: 'Q3 FY24', periodNote: 'Ending Dec. 2024', currency: '¥', unit: 'B', decimals: 0,
      referenceImage: { src: 'input/processed/sony-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2018, periodX: 2422, periodY: 1270, periodNoteY: 1313,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, titleColor: TITLE, subtitleColor: '#5e5e5e', noteColor: NOTE,
      interfaceAudit: { mode: 'error' }, linkOpacity: 1,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: '#858585', hub: '#858585', profit: GREEN_LINK, cost: RED_LINK }, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 0.0664,
      routes: { other_income: { x: 1790, y: 432, width: 0, height: 2 }, financial: { x: 2235, y: 375, width: 0, height: 2 } },
      nodes: {
        game_network: { x: 429, y: 380, width: 71, height: 106 }, music: { x: 429, y: 610, width: 71, height: 30 }, pictures: { x: 429, y: 763, width: 71, height: 25 }, technology: { x: 429, y: 909, width: 71, height: 44 },
        imaging_sensing: { x: 429, y: 1067, width: 71, height: 30 }, financial_services: { x: 429, y: 1204, width: 71, height: 47 }, other_revenue: { x: 429, y: 1353, width: 71, height: 4 }, revenue: { x: 896, y: 674, width: 70, height: 293 },
        gross_profit: { x: 1363, y: 536, width: 71, height: 113 }, cost_of_sales: { x: 1365, y: 899, width: 72, height: 179 }, operating_profit: { x: 1836, y: 413, width: 70, height: 30 }, operating_expenses: { x: 1841, y: 651, width: 70, height: 82 },
        net_profit: { x: 2297, y: 311, width: 71, height: 24 }, tax: { x: 2297, y: 531, width: 71, height: 5 }, financial_services_other: { x: 2297, y: 775, width: 71, height: 44 }, sga: { x: 2297, y: 1038, width: 71, height: 37 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 2, valueText: '¥2B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'financial', representation: 'flow', label: 'Financial', value: 25, valueText: '(¥25B)', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: 'Game & Network', value: 1620, valueText: '¥1,620B', notes: ['+13% Y/Y', '7% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: 'Music', value: 477, valueText: '¥477B', notes: ['+14% Y/Y', '20% operating margin'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: 'Pictures', value: 397, valueText: '¥397B', notes: ['+9% Y/Y', '9% operating margin'], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: 'Technology', value: 693, valueText: '¥693B', notes: ['(5%) Y/Y', '11% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: 'Imaging & Sensing', value: 481, valueText: '¥481B', notes: ['+1% Y/Y', '20% operating margin'], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'financial_services', col: 0, order: 5, type: 'source', label: 'Financial services', value: 716, valueText: '¥716B', notes: ['+132% Y/Y', '6% operating margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 26, valueText: '¥26B', notes: ['+14% Y/Y'], color: OTHER, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Sales', value: 4410, valueText: '¥4,410B', notes: ['+18% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1714, valueText: '¥1,714B', notes: ['39% margin', '+6pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 2696, valueText: '(¥2,696B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 469, valueText: '¥469B', notes: ['11% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 1247, valueText: '(¥1,247B)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 376, valueText: '¥376B', notes: ['8% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 119, valueText: '(¥119B)' },
      { id: 'financial_services_other', col: 4, order: 2, type: 'cost', label: ['Financial', 'services', '& other'], value: 670, valueText: '(¥670B)' },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 577, valueText: '(¥577B)' },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 1620, sourceWidth: 106, targetWidth: 108, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 477, sourceWidth: 30, targetWidth: 32, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 397, sourceWidth: 25, targetWidth: 26, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 693, sourceWidth: 44, targetWidth: 46, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 481, sourceWidth: 30, targetWidth: 33, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'financial_services', target: 'revenue', value: 716, sourceWidth: 47, targetWidth: 46, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 26, sourceWidth: 4, targetWidth: 2, targetOrder: 6, linkTint: OTHER_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1714, sourceWidth: 114, targetWidth: 113, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2696, sourceWidth: 179, targetWidth: 179, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 467, sourceWidth: 32, targetWidth: 30, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1247, sourceWidth: 81, targetWidth: 82, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'operating_profit', value: 2, sourceWidth: 2, targetWidth: 2, y0: 432, y1: 442, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 351, sourceWidth: 23, targetWidth: 24, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'financial', target: 'net_profit', value: 25, sourceWidth: 2, targetWidth: 2, y0: 375, y1: 334, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 119, sourceWidth: 7, targetWidth: 5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_services_other', value: 670, sourceWidth: 43, targetWidth: 44, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 577, sourceWidth: 38, targetWidth: 37, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2024 财年第三季度',
        meta: { title: 'Sony 2024 财年第三季度利润表', period: '2024 财年第三季度', periodNote: '截至 2024 年 12 月', titleTextLength: 1660 },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_income: { label: '其他收入' }, financial: { label: '财务收益' } },
        nodes: {
          game_network: { label: '游戏与网络', notes: ['同比 +13%', '营业利润率 7%'] }, music: { label: '音乐', notes: ['同比 +14%', '营业利润率 20%'] }, pictures: { label: '影视', notes: ['同比 +9%', '营业利润率 9%'] },
          technology: { label: '技术', notes: ['同比 (5%)', '营业利润率 11%'] }, imaging_sensing: { label: '成像与传感', notes: ['同比 +1%', '营业利润率 20%'] }, financial_services: { label: '金融服务', notes: ['同比 +132%', '营业利润率 6%'] },
          other_revenue: { label: '其他', notes: ['同比 +14%'] }, revenue: { label: '销售额', notes: ['同比 +18%'] }, gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +6 个百分点'] }, cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 (2 个百分点)'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (1 个百分点)'] }, tax: { label: '税费' },
          financial_services_other: { label: ['金融服务', '及其他', '费用'] }, sga: { label: '销售、一般及行政费用' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

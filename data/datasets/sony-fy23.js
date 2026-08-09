/* Sony FY23 income statement (¥B), measured from the Source image. */
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
  const OTHER_NODE = '#7f7f7f';
  const OTHER_LINK = '#bdbdbd';
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

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 9) => ({ x, top, anchor, lines, lineGap });

  function annotations(unitText, otherText, financeText) {
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="63" y="265" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
        <g transform="translate(712 300)" data-typography-role="brand">${sonyWordmark}</g>
        <g class="sankey-interactive-annotation" data-node="other_income"
          data-link-numerator="other_income" data-link-denominator="operating_profit"
          data-link-anchor-x="1712" data-link-anchor-y="570">
          <path d="M1673 570H1745C1785 570 1790 508 1827 508" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
          <text x="1712" y="616" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${otherText}</text>
          <text x="1712" y="654" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">¥40B</text>
        </g>
        <g class="sankey-interactive-annotation" data-node="finance_income"
          data-link-numerator="finance_income" data-link-denominator="net_profit"
          data-link-anchor-x="2216" data-link-anchor-y="443">
          <path d="M2180 443H2245C2275 443 2275 380 2298 380" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
          <text x="2216" y="485" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${financeText}</text>
          <text x="2216" y="523" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">¥60B</text>
        </g>
      </g>`;
  }

  function labels(t) {
    const valueBlock = (x, top, color, yoy, gap = 10) => block(x, top, 'middle', [
      line('$value', 39, 400, color), line(yoy, 28, 400, NOTE),
    ], gap);
    const segmentBlock = (x, top, color, name, margin, size = 40) => block(x, top, 'end', [
      line(name, size, 800, color), line(margin, 28, 400, NOTE),
    ], 12);
    return {
      game_network: { blocks: [valueBlock(465, 285, ORANGE, t.gameYoy), segmentBlock(384, 388, ORANGE, t.game, t.gameMargin)] },
      music: { blocks: [valueBlock(465, 500, PINK, t.musicYoy), segmentBlock(353, 581, PINK, t.music, t.musicMargin)] },
      pictures: { blocks: [valueBlock(465, 656, GOLD, t.picturesYoy), segmentBlock(351, 756, GOLD, t.pictures, t.picturesMargin)] },
      technology: { blocks: [valueBlock(465, 816, BLUE, t.technologyYoy), segmentBlock(366, 901, BLUE, t.technology, t.technologyMargin)] },
      imaging_sensing: { blocks: [valueBlock(465, 987, DEEP_GREEN, t.imagingYoy), segmentBlock(380, 1066, DEEP_GREEN, t.imaging, t.imagingMargin, 39)] },
      financial_services: { blocks: [valueBlock(465, 1124, PURPLE, t.financialYoy), segmentBlock(384, 1214, PURPLE, t.financial, t.financialMargin, 39)] },
      other_revenue: { blocks: [valueBlock(465, 1274, OTHER, t.otherYoy, 12), block(384, 1350, 'end', [line(t.other, 40, 800, OTHER)])] },
      revenue: { blocks: [block(935, 541, 'middle', [line(t.sales, 40, 800), line('$value', 39), line(t.salesYoy, 28, 400, NOTE)], 10)] },
      gross_profit: { blocks: [block(1401, 378, 'middle', [
        line(t.grossProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.grossMargin, 28, 400, NOTE), line(t.grossYoy, 28, 400, NOTE),
      ], 11)] },
      cost_of_sales: { blocks: [block(1397, 1075, 'middle', [
        line(t.costOf, 34, 800, RED_LABEL), line(t.salesWord, 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL),
      ], 9)] },
      operating_profit: { blocks: [block(1857, 300, 'middle', [
        line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.operatingMargin, 28, 400, NOTE), line(t.operatingYoy, 28, 400, NOTE),
      ], 11)] },
      operating_expenses: { blocks: [block(1857, 809, 'middle', [
        line(t.operating, 36, 800, RED_LABEL), line(t.expenses, 36, 800, RED_LABEL), line('$value', 35, 400, RED_LABEL),
      ], 8)] },
      net_profit: { blocks: [block(2483, 314, 'middle', [
        line(t.netProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.netMargin, 28, 400, NOTE), line(t.netYoy, 28, 400, NOTE),
      ], 11)] },
      tax: { blocks: [block(2474, 596, 'middle', [line(t.tax, 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 8)] },
      sga: { blocks: [block(2460, 934, 'middle', [line(t.sga, 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 8)] },
      financial_services_other: { blocks: [block(2460, 1123, 'middle', [
        line(t.financialServices, 31, 800, RED_LABEL), line(t.services, 31, 800, RED_LABEL),
        line(t.andOther, 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL),
      ], 8)] },
      other_income: { blocks: [] },
      finance_income: { blocks: [] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '+18% Y/Y', gameMargin: '7% operating margin',
    music: 'Music', musicYoy: '+17% Y/Y', musicMargin: '19% operating margin',
    pictures: 'Pictures', picturesYoy: '+9% Y/Y', picturesMargin: '8% operating margin',
    technology: 'Technology', technologyYoy: '(1%) Y/Y', technologyMargin: '8% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+24% Y/Y', imagingMargin: '41% operating margin',
    financial: 'Financial services', financialYoy: '+100% Y/Y', financialMargin: '10% operating margin',
    other: 'Other', otherYoy: '+11% Y/Y', sales: 'Sales', salesYoy: '+19% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '38% margin', grossYoy: '+12pp Y/Y', costOf: 'Cost of', salesWord: 'sales',
    operatingProfit: 'Operating profit', operatingMargin: '9% margin', operatingYoy: '(3pp) Y/Y',
    operating: 'Operating', expenses: 'expenses', netProfit: 'Net profit', netMargin: '8% margin', netYoy: '(2pp) Y/Y',
    tax: 'Tax', sga: 'SG&A', financialServices: 'Financial', services: 'services', andOther: '& other',
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 +18%', gameMargin: '营业利润率 7%',
    music: '音乐', musicYoy: '同比 +17%', musicMargin: '营业利润率 19%',
    pictures: '影视', picturesYoy: '同比 +9%', picturesMargin: '营业利润率 8%',
    technology: '技术', technologyYoy: '同比 (1%)', technologyMargin: '营业利润率 8%',
    imaging: '成像与传感', imagingYoy: '同比 +24%', imagingMargin: '营业利润率 41%',
    financial: '金融服务', financialYoy: '同比 +100%', financialMargin: '营业利润率 10%',
    other: '其他', otherYoy: '同比 +11%', sales: '销售额', salesYoy: '同比 +19%',
    grossProfit: '毛利润', grossMargin: '利润率 38%', grossYoy: '同比 +12 个百分点', costOf: '销售', salesWord: '成本',
    operatingProfit: '营业利润', operatingMargin: '利润率 9%', operatingYoy: '同比 (3 个百分点)',
    operating: '营业', expenses: '费用', netProfit: '净利润', netMargin: '利润率 8%', netYoy: '同比 (2 个百分点)',
    tax: '税费', sga: '销售、一般及行政费用', financialServices: '金融', services: '服务', andOther: '及其他',
  };
  const labelsEn = labels(en);
  const labelsZh = labels(zh);
  labelsZh.sga.blocks[0].x = 2500;
  labelsZh.sga.blocks[0].lines[0].size = 25;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-fy23', name: 'Sony · FY23', company: 'Sony',
    meta: {
      company: 'Sony', title: 'Sony FY23 Income Statement', period: 'FY23', periodNote: 'Ending Mar. 2024',
      currency: '¥', unit: 'B', decimals: 0,
      referenceImage: { src: 'input/processed/sony-fy23.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 1812,
      periodX: 1333, periodY: 1311, periodNoteY: 1357,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, titleColor: TITLE, subtitleColor: '#666666', noteColor: NOTE,
      interfaceAudit: {
        mode: 'error',
        // The Source paints these multi-link faces as continuous interfaces.
        fullFaceIds: ['revenue:left', 'revenue:right', 'gross_profit:right', 'operating_profit:left', 'operating_profit:right'],
      },
      linkOpacity: 1,
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: '#858585', hub: '#858585', profit: GREEN_LINK, cost: RED_LINK },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen', 'Other', 'Finance'),
    layout: {
      routes: { other_income: { x: 1673, y: 570, width: 0, height: 1 }, finance_income: { x: 2180, y: 443, width: 0, height: 1 } },
      nodes: {
        game_network: { x: 430, y: 374, width: 71, height: 88 }, music: { x: 430, y: 589, width: 71, height: 33 },
        pictures: { x: 430, y: 744, width: 71, height: 30 }, technology: { x: 430, y: 904, width: 71, height: 50 },
        imaging_sensing: { x: 430, y: 1084, width: 71, height: 9 }, financial_services: { x: 430, y: 1213, width: 71, height: 37 },
        other_revenue: { x: 430, y: 1365, width: 71, height: 21 }, revenue: { x: 897, y: 689, width: 70, height: 279 },
        gross_profit: { x: 1361, y: 563, width: 72, height: 104 }, cost_of_sales: { x: 1361, y: 877, width: 72, height: 172 },
        operating_profit: { x: 1827, y: 484, width: 70, height: 25 }, operating_expenses: { x: 1822, y: 712, width: 70, height: 79 },
        net_profit: { x: 2298, y: 361, width: 71, height: 19 }, tax: { x: 2298, y: 627, width: 71, height: 3 },
        sga: { x: 2298, y: 938, width: 71, height: 45 }, financial_services_other: { x: 2298, y: 1163, width: 71, height: 33 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 40, valueText: '¥40B', type: 'profit', labelColor: GREEN_LABEL },
      { id: 'finance_income', representation: 'flow', label: 'Finance', value: 60, valueText: '¥60B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 4172, valueText: '¥4,172B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 1595, valueText: '¥1,595B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 1487, valueText: '¥1,487B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 2415, valueText: '¥2,415B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 478, valueText: '¥478B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'financial_services', col: 0, order: 5, type: 'source', label: en.financial, value: 1761, valueText: '¥1,761B', notes: [en.financialYoy, en.financialMargin], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: en.other, value: 1113, valueText: '¥1,113B', notes: [en.otherYoy], color: OTHER_NODE, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: en.sales, value: 13021, valueText: '¥13,021B', notes: [en.salesYoy], color: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: en.grossProfit, value: 4932, valueText: '¥4,932B', notes: [en.grossMargin, en.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: `${en.costOf} ${en.salesWord}`, value: 8089, valueText: '(¥8,089B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: en.operatingProfit, value: 1210, valueText: '¥1,210B', notes: [en.operatingMargin, en.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 3762, valueText: '(¥3,762B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: en.netProfit, value: 970.6, notes: [en.netMargin, en.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: en.tax, value: 288, valueText: '(¥288B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 2, type: 'cost', label: en.sga, value: 2156, valueText: '(¥2,156B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial_services_other', col: 4, order: 3, type: 'cost', label: `${en.financialServices} ${en.services} ${en.andOther}`, value: 1606, valueText: '(¥1,606B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 4172, sourceWidth: 88, targetWidth: 88, y0: 418, y1: 733, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 1595, sourceWidth: 33, targetWidth: 34, y0: 605.5, y1: 794, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 1487, sourceWidth: 30, targetWidth: 32, y0: 759, y1: 827, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 2415, sourceWidth: 50, targetWidth: 53, y0: 929, y1: 869.5, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 478, sourceWidth: 9, targetWidth: 12, y0: 1088.5, y1: 902, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'financial_services', target: 'revenue', value: 1761, sourceWidth: 37, targetWidth: 36, y0: 1231.5, y1: 926, targetOrder: 5, linkTint: PURPLE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 1113, sourceWidth: 21, targetWidth: 24, y0: 1375.5, y1: 956, targetOrder: 6, linkTint: OTHER_LINK },
      { source: 'revenue', target: 'gross_profit', value: 4932, sourceWidth: 104, targetWidth: 104, y0: 741, y1: 615, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 8089, sourceWidth: 175, targetWidth: 172, y0: 880.5, y1: 963, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1170, sourceWidth: 22, targetWidth: 25, y0: 574, y1: 496.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'operating_profit', value: 40, sourceWidth: 2, targetWidth: 2, y0: 570, y1: 508, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3762, sourceWidth: 82, targetWidth: 79, y0: 626, y1: 751.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 910.6, sourceWidth: 22, targetWidth: 18, y0: 495, y1: 370, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'finance_income', target: 'net_profit', value: 60, sourceWidth: 2, targetWidth: 1, y0: 443, y1: 379.5, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 288, sourceWidth: 3, targetWidth: 3, y0: 507.5, y1: 628.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 2156, sourceWidth: 45, targetWidth: 45, y0: 734.5, y1: 960.5, sourceOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'financial_services_other', value: 1606, sourceWidth: 33, targetWidth: 33, y0: 774.5, y1: 1179.5, sourceOrder: 1, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2023 财年',
        meta: { title: 'Sony 2023 财年利润表', period: '2023 财年', periodNote: '截至 2024 年 3 月', titleTextLength: 1320 },
        annotationsSvg: annotations('以日元计', '其他', '财务收入'),
        nonNodeMetrics: { other_income: { label: '其他' }, finance_income: { label: '财务收入' } },
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] }, music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] }, technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] }, financial_services: { label: zh.financial, notes: [zh.financialYoy, zh.financialMargin] },
          other_revenue: { label: zh.other, notes: [zh.otherYoy] }, revenue: { label: zh.sales, notes: [zh.salesYoy] },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] }, cost_of_sales: { label: `${zh.costOf}${zh.salesWord}` },
          operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] }, operating_expenses: { label: `${zh.operating}${zh.expenses}` },
          net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] }, tax: { label: zh.tax }, sga: { label: zh.sga },
          financial_services_other: { label: `${zh.financialServices}${zh.services}${zh.andOther}` },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

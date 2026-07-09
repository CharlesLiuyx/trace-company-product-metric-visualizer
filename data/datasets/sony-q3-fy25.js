/* ====================================================================
 * Sony - Q3 FY25 income statement (¥B)
 * Reconstructed from input/processed/sony-q3-fy25.png as a fixed
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
        <g transform="translate(801 334)">${sonyWordmark}</g>
        <line x1="1815" y1="626" x2="1885" y2="626" stroke="${GREEN}" stroke-width="2" />
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
      game_network: {
        blocks: [
          valueBlock(469, 301, ORANGE, t.gameYoy),
          segmentNameBlock(393, 426, ORANGE, t.game, t.gameMargin),
        ],
      },
      music: {
        blocks: [
          valueBlock(474, 565, PINK, t.musicYoy),
          segmentNameBlock(384, 636, PINK, t.music, t.musicMargin),
        ],
      },
      pictures: {
        blocks: [
          valueBlock(474, 733, GOLD, t.picturesYoy),
          segmentNameBlock(389, 790, GOLD, t.pictures, t.picturesMargin),
        ],
      },
      technology: {
        blocks: [
          valueBlock(469, 880, BLUE, t.technologyYoy),
          segmentNameBlock(393, 953, BLUE, t.technology, t.technologyMargin),
        ],
      },
      imaging_sensing: {
        blocks: [
          valueBlock(469, 1045, DEEP_GREEN, t.imagingYoy),
          segmentNameBlock(396, 1116, DEEP_GREEN, t.imaging, t.imagingMargin, 39),
        ],
      },
      other_revenue: {
        blocks: [
          valueBlock(471, 1200, OTHER, t.otherRevenueYoy, 15),
          {
            x: 384,
            top: 1278,
            anchor: 'end',
            lines: [{ text: t.otherRevenue, size: 40, weight: 800, color: OTHER }],
          },
        ],
      },
      segment_sales: { blocks: [] },
      revenue: {
        blocks: [{
          x: 1221,
          top: 550,
          anchor: 'middle',
          lineGap: 10,
          lines: [
            { text: t.sales, size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      eliminations: {
        blocks: [{
          x: 1218,
          top: 1152,
          anchor: 'middle',
          lineGap: 14,
          lines: [
            { text: t.intersegment, size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 34, weight: 400, color: RED_LABEL },
          ],
        }],
      },
      gross_profit: {
        blocks: [{
          x: 1593,
          top: 419,
          anchor: 'middle',
          lineGap: 12,
          lines: [
            { text: t.grossProfit, size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: t.grossMargin, size: 28, weight: 400, color: NOTE },
            { text: t.grossYoy, size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      cost_of_sales: {
        blocks: [{
          x: 1593,
          top: 1115,
          anchor: 'middle',
          lineGap: 12,
          lines: [
            { text: t.costOfSales, size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 34, weight: 400, color: RED_LABEL },
          ],
        }],
      },
      other_income: {
        blocks: [{
          x: 1853,
          top: 641,
          anchor: 'middle',
          lineGap: 11,
          lines: [
            { text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
          ],
        }],
      },
      operating_profit: {
        blocks: [{
          x: 1967,
          top: 344,
          anchor: 'middle',
          lineGap: 12,
          lines: [
            { text: t.operatingProfit, size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
            { text: t.operatingMargin, size: 28, weight: 400, color: NOTE },
            { text: t.operatingYoy, size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      operating_expenses: {
        blocks: [{
          x: 1967,
          top: 830,
          anchor: 'middle',
          lineGap: 11,
          lines: [
            { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
            { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ],
        }],
      },
      net_profit: {
        blocks: [
          {
            x: 2386,
            top: 377,
            anchor: 'start',
            lines: [{ text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL }],
          },
          {
            x: 2482,
            top: 429,
            anchor: 'middle',
            lineGap: 14,
            lines: [
              { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              { text: t.netMargin, size: 28, weight: 400, color: NOTE },
              { text: t.netYoy, size: 28, weight: 400, color: NOTE },
            ],
          },
        ],
      },
      tax: {
        blocks: [{
          x: 2482,
          top: 623,
          anchor: 'middle',
          lineGap: 11,
          lines: [
            { text: t.tax, size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ],
        }],
      },
      other_after_operating: {
        blocks: [{
          x: 2482,
          top: 739,
          anchor: 'middle',
          lineGap: 11,
          lines: [
            { text: t.otherAfterOperating, size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 30, weight: 400, color: RED_LABEL },
          ],
        }],
      },
    };
  }

  const textEn = {
    game: 'Game & Network', gameYoy: '(4%) Y/Y', gameMargin: '9% operating margin',
    music: 'Music', musicYoy: '+13% Y/Y', musicMargin: '20% operating margin',
    pictures: 'Pictures', picturesYoy: '(11%) Y/Y', picturesMargin: '9% operating margin',
    technology: 'Technology', technologyYoy: '(7%) Y/Y', technologyMargin: '9% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+21% Y/Y', imagingMargin: '22% operating margin',
    otherRevenue: 'Other', otherRevenueYoy: '(2%) Y/Y',
    sales: 'Sales', salesYoy: '+1% Y/Y', intersegment: 'Intersegment',
    grossProfit: 'Gross profit', grossMargin: '28% margin', grossYoy: '+1pp Y/Y',
    costOfSales: 'Cost of sales', otherIncome: 'Other',
    operatingProfit: 'Operating profit', operatingMargin: '14% margin', operatingYoy: '+2pp Y/Y',
    operating: 'Operating', expenses: 'expenses', netProfit: 'Net profit',
    netMargin: '10% margin', netYoy: '+1pp Y/Y', tax: 'Tax', otherAfterOperating: 'Other',
  };

  const textZh = {
    game: '游戏与网络', gameYoy: '同比 (4%)', gameMargin: '营业利润率 9%',
    music: '音乐', musicYoy: '同比 +13%', musicMargin: '营业利润率 20%',
    pictures: '影视', picturesYoy: '同比 (11%)', picturesMargin: '营业利润率 9%',
    technology: '技术', technologyYoy: '同比 (7%)', technologyMargin: '营业利润率 9%',
    imaging: '成像与传感', imagingYoy: '同比 +21%', imagingMargin: '营业利润率 22%',
    otherRevenue: '其他', otherRevenueYoy: '同比 (2%)',
    sales: '销售额', salesYoy: '同比 +1%', intersegment: '分部间抵销',
    grossProfit: '毛利润', grossMargin: '利润率 28%', grossYoy: '同比 +1 个百分点',
    costOfSales: '销售成本', otherIncome: '其他收入',
    operatingProfit: '营业利润', operatingMargin: '利润率 14%', operatingYoy: '同比 +2 个百分点',
    operating: '运营', expenses: '费用', netProfit: '净利润',
    netMargin: '利润率 10%', netYoy: '同比 +1 个百分点', tax: '税费', otherAfterOperating: '其他',
  };
  const labelsZh = labels(textZh);
  labelsZh.net_profit.blocks[1].x = 2400;
  labelsZh.net_profit.blocks[1].anchor = 'start';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q3-fy25',
    name: 'Sony · Q3 FY25',
    company: 'Sony',
    meta: {
      company: 'Sony',
      title: 'Sony Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/sony-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2024,
      periodX: 2274,
      periodY: 1238,
      periodNoteY: 1278,
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
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen'),
    layout: {
      scale: 0.0848,
      nodes: {
        game_network: { x: 436, y: 397.5, width: 72, height: 138 },
        music: { x: 436, y: 660.5, width: 72, height: 45 },
        pictures: { x: 436, y: 825.5, width: 72, height: 30 },
        technology: { x: 436, y: 974.5, width: 72, height: 56 },
        imaging_sensing: { x: 436, y: 1139.5, width: 72, height: 51 },
        other_revenue: { x: 436, y: 1302.5, width: 72, height: 4 },
        segment_sales: { x: 810, y: 619.5, width: 72, height: 324 },
        revenue: { x: 1184, y: 704.5, width: 72, height: 318 },
        eliminations: { x: 1184, y: 1134.5, width: 72, height: 6 },
        gross_profit: { x: 1557, y: 610.5, width: 72, height: 90 },
        cost_of_sales: { x: 1557, y: 872.5, width: 72, height: 228 },
        other_income: { x: 1815, y: 624, width: 70, height: 4 },
        operating_profit: { x: 1931, y: 531.5, width: 72, height: 44 },
        operating_expenses: { x: 1931, y: 765.5, width: 72, height: 50 },
        net_profit: { x: 2304, y: 435.5, width: 72, height: 32 },
        tax: { x: 2304, y: 649.5, width: 72, height: 10 },
        other_after_operating: { x: 2304, y: 774.5, width: 72, height: 2 },
      },
      labels: labels(textEn),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: 'Game & Network', value: 1614, valueText: '¥1,614B', notes: ['(4%) Y/Y', '9% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: 'Music', value: 542, valueText: '¥542B', notes: ['+13% Y/Y', '20% operating margin'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: 'Pictures', value: 353, valueText: '¥353B', notes: ['(11%) Y/Y', '9% operating margin'], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: 'Technology', value: 658, valueText: '¥658B', notes: ['(7%) Y/Y', '9% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: 'Imaging & Sensing', value: 604, valueText: '¥604B', notes: ['+21% Y/Y', '22% operating margin'], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 25, valueText: '¥25B', notes: ['(2%) Y/Y'], color: OTHER, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 3798, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 3714, valueText: '¥3,714B', notes: ['+1% Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Intersegment', value: 84, valueText: '(¥84B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 1056, valueText: '¥1,056B', notes: ['28% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 2658, valueText: '(¥2,658B)' },
      { id: 'other_income', col: 4, order: 1, type: 'profit', label: 'Other', value: 43, valueText: '¥43B', color: BACKGROUND, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 515, valueText: '¥515B', notes: ['14% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 2, type: 'cost', label: 'Operating expenses', value: 584, valueText: '(¥584B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 380, valueText: '¥380B', notes: ['10% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 120, valueText: '(¥120B)' },
      { id: 'other_after_operating', col: 5, order: 2, type: 'cost', label: 'Other', value: 15, valueText: '(¥15B)' },
    ],
    links: [
      { source: 'game_network', target: 'segment_sales', value: 1614, width: 138, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'segment_sales', value: 542, width: 45, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'segment_sales', value: 353, width: 30, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'segment_sales', value: 658, width: 56, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'segment_sales', value: 604, width: 51, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'other_revenue', target: 'segment_sales', value: 25, width: 4, targetOrder: 5, linkTint: OTHER_LINK },
      { source: 'segment_sales', target: 'revenue', value: 3714, width: 318, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'segment_sales', target: 'eliminations', value: 84, width: 6, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1056, width: 90, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2658, width: 228, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 472, width: 40, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 584, width: 50, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 43, width: 4, sourceOrder: 0, targetOrder: 1, y0: 626, y1: 573.5, linkTint: GREEN_LINK, curve: { c1x: 1898, c1y: 626, c2x: 1916, c2y: 573.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 380, width: 32, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 120, width: 10, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_after_operating', value: 15, width: 2, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2025 财年第三季度',
        meta: {
          title: 'Sony 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1660,
        },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          game_network: { label: '游戏与网络', notes: ['同比 (4%)', '营业利润率 9%'] },
          music: { label: '音乐', notes: ['同比 +13%', '营业利润率 20%'] },
          pictures: { label: '影视', notes: ['同比 (11%)', '营业利润率 9%'] },
          technology: { label: '技术', notes: ['同比 (7%)', '营业利润率 9%'] },
          imaging_sensing: { label: '成像与传感', notes: ['同比 +21%', '营业利润率 22%'] },
          other_revenue: { label: '其他', notes: ['同比 (2%)'] },
          revenue: { label: '销售额', notes: ['同比 +1%'] },
          eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 28%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          other_income: { label: '其他收入' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          other_after_operating: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

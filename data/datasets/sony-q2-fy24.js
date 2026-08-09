/* Sony — Q2 FY24 income statement (¥B).
 * Reconstructed from input/processed/sony-q2-fy24.png as a measured,
 * fixed-layout d3-sankey. Financial SSOT: data/income-statements/sony.js. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#797979';
  const BLACK = '#000000';
  const ORANGE = '#d95f02';
  const ORANGE_TEXT = '#d95e02';
  const ORANGE_LINK = '#e6af86';
  const PINK = '#e7298a';
  const PINK_TEXT = '#e2308b';
  const PINK_LINK = '#ed97c2';
  const GOLD = '#bf9b30';
  const GOLD_LINK = '#dbca9b';
  const BLUE = '#27445c';
  const BLUE_TEXT = '#27445b';
  const BLUE_LINK = '#97a4ae';
  const DEEP_GREEN = '#023020';
  const DEEP_GREEN_LINK = '#869b93';
  const OTHER = '#5e5f5e';
  const OTHER_LINK = '#bdbdbd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const PALE_RED = '#e0cece';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const sonyWordmark = BUSINESS_ICONS.sonyCompanyWordmark || `
    <text x="0" y="104" font-family="Times New Roman, Georgia, serif" font-size="116" font-weight="900" fill="${BLACK}"
      textLength="467" lengthAdjust="spacingAndGlyphs">SONY</text>`;

  function annotations(zh) {
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="324" y="252" font-size="40" font-weight="800" fill="${TITLE}">${zh ? '以日元计' : 'in yen'}</text>
        <g transform="translate(704 338)" data-typography-role="brand">${sonyWordmark}</g>
        <g class="sankey-interactive-annotation"
          data-node="other_revenue"
          data-link-numerator="other_revenue"
          data-link-denominator="revenue"
          data-link-anchor-x="1040"
          data-link-anchor-y="1050">
          <path d="M968 978C1025 978 1025 1113 1095 1113H1165"
            fill="none" stroke="${OTHER_LINK}" stroke-width="4"/>
          <text x="1124" y="1165" text-anchor="middle" font-size="40" font-weight="800" fill="${OTHER}">${zh ? '其他调整' : 'Other'}</text>
          <text x="1124" y="1217" text-anchor="middle" font-size="39" font-weight="400" fill="${OTHER}">¥42B</text>
        </g>
      </g>`;
  }

  function labels(t) {
    const valueBlock = (x, top, color, note) => ({
      x,
      top,
      anchor: 'middle',
      lineGap: 10,
      lines: [
        { text: '$value', size: 39, weight: 400, color },
        { text: note, size: 28, weight: 400, color: NOTE },
      ],
    });
    const segmentNameBlock = (top, color, name, margin, size = 40) => ({
      x: 385,
      top,
      anchor: 'end',
      lineGap: 13,
      lines: [
        { text: name, size, weight: 800, color },
        { text: margin, size: 28, weight: 400, color: NOTE },
      ],
    });
    return {
      game_network: { blocks: [valueBlock(469, 394, ORANGE_TEXT, t.gameYoy), segmentNameBlock(499, ORANGE_TEXT, t.game, t.gameMargin)] },
      music: { blocks: [valueBlock(449, 616, PINK_TEXT, t.musicYoy), { ...segmentNameBlock(713, PINK_TEXT, t.music, t.musicMargin), x: 375 }] },
      pictures: { blocks: [valueBlock(460, 779, GOLD, t.picturesYoy), { ...segmentNameBlock(870, GOLD, t.pictures, t.picturesMargin), x: 371 }] },
      technology: { blocks: [valueBlock(459, 935, BLUE_TEXT, t.technologyYoy), { ...segmentNameBlock(1029, BLUE_TEXT, t.technology, t.technologyMargin), x: 375 }] },
      imaging_sensing: { blocks: [valueBlock(469, 1105, DEEP_GREEN, t.imagingYoy), segmentNameBlock(1207, DEEP_GREEN, t.imaging, t.imagingMargin, 39)] },
      revenue: { blocks: [{
        x: 933,
        top: 561,
        anchor: 'middle',
        lineGap: 2,
        lines: [
          { text: t.sales, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: t.salesYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      gross_profit: { blocks: [{
        x: 1416,
        top: 390,
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
        x: 1418,
        top: 1145,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.costOfSales, size: 34, weight: 800, color: RED_LABEL },
          { text: '$value', size: 34, weight: 400, color: RED_LABEL },
        ],
      }] },
      operating_profit: { blocks: [{
        x: 1868,
        top: 300,
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
        x: 1864,
        top: 828,
        anchor: 'middle',
        lineGap: 8,
        lines: [
          { text: t.operating, size: 36, weight: 800, color: RED_LABEL },
          { text: t.expenses, size: 36, weight: 800, color: RED_LABEL },
          { text: '$value', size: 35, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_income: { blocks: [{
        x: 1735,
        top: 590,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.otherIncome, size: 31, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
        ],
      }] },
      net_profit: { blocks: [{
        x: 2483,
        top: 350,
        anchor: 'middle',
        lineGap: 12,
        lines: [
          { text: t.netProfit, size: 40, weight: 800, color: GREEN_LABEL },
          { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          { text: t.netMargin, size: 28, weight: 400, color: NOTE },
          { text: t.netYoy, size: 28, weight: 400, color: NOTE },
        ],
      }] },
      tax: { blocks: [{
        x: 2474,
        top: 618,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.tax, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_expense: { blocks: [{
        x: 2474,
        top: 739,
        anchor: 'middle',
        lineGap: 11,
        lines: [
          { text: t.otherExpense, size: 31, weight: 800, color: RED_LABEL },
          { text: '$value', size: 30, weight: 400, color: RED_LABEL },
        ],
      }] },
      other_revenue: { blocks: [] },
    };
  }

  const en = {
    game: 'Game & Network', gameYoy: '+11% Y/Y', gameMargin: '13% operating margin',
    music: 'Music', musicYoy: '+11% Y/Y', musicMargin: '20% operating margin',
    pictures: 'Pictures', picturesYoy: '(11%) Y/Y', picturesMargin: '5% operating margin',
    technology: 'Technology', technologyYoy: '+0% Y/Y', technologyMargin: '12% operating margin',
    imaging: 'Imaging & Sensing', imagingYoy: '+36% Y/Y', imagingMargin: '18% operating margin',
    sales: 'Sales', salesYoy: '+3% Y/Y', grossProfit: 'Gross profit', grossMargin: '30% margin', grossYoy: '(4pp) Y/Y',
    costOfSales: 'Cost of sales', operatingProfit: 'Operating profit', operatingMargin: '16% margin', operatingYoy: '+6pp Y/Y',
    operating: 'Operating', expenses: 'expenses', otherIncome: 'Other', netProfit: 'Net profit', netMargin: '12% margin', netYoy: '+5pp Y/Y',
    tax: 'Tax', otherExpense: 'Other', otherAdjustment: 'Other',
  };
  const zh = {
    game: '游戏与网络', gameYoy: '同比 +11%', gameMargin: '营业利润率 13%',
    music: '音乐', musicYoy: '同比 +11%', musicMargin: '营业利润率 20%',
    pictures: '影视', picturesYoy: '同比 (11%)', picturesMargin: '营业利润率 5%',
    technology: '技术', technologyYoy: '同比 +0%', technologyMargin: '营业利润率 12%',
    imaging: '成像与传感', imagingYoy: '同比 +36%', imagingMargin: '营业利润率 18%',
    sales: '销售额', salesYoy: '同比 +3%', grossProfit: '毛利润', grossMargin: '利润率 30%', grossYoy: '同比 (4 个百分点)',
    costOfSales: '销售成本', operatingProfit: '营业利润', operatingMargin: '利润率 16%', operatingYoy: '同比 +6 个百分点',
    operating: '运营', expenses: '费用', otherIncome: '其他收入', netProfit: '净利润', netMargin: '利润率 12%', netYoy: '同比 +5 个百分点',
    tax: '税费', otherExpense: '其他', otherAdjustment: '其他调整',
  };
  const labelsZh = labels(zh);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-q2-fy24',
    name: 'Sony · Q2 FY24',
    company: 'Sony',
    meta: {
      company: 'Sony',
      title: 'Sony Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/sony-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2024,
      periodX: 2480,
      periodY: 237,
      periodNoteY: 281,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: OTHER,
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
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      {
        id: 'other_revenue',
        representation: 'flow',
        label: 'Other',
        value: -42,
        valueText: '¥42B',
        type: 'cost',
        labelColor: OTHER,
      },
    ],
    layout: {
      routes: { other_revenue: { x: 1165, y: 1113, width: 0, height: 2 } },
      nodes: {
        game_network: { x: 431, y: 482, width: 71, height: 102 },
        music: { x: 431, y: 704, width: 71, height: 43 },
        pictures: { x: 431, y: 868, width: 71, height: 34 },
        technology: { x: 431, y: 1023, width: 71, height: 59 },
        imaging_sensing: { x: 431, y: 1202, width: 71, height: 50 },
        revenue: { x: 898, y: 683, width: 70, height: 295 },
        gross_profit: { x: 1375, y: 572, width: 71, height: 85 },
        cost_of_sales: { x: 1382, y: 897, width: 72, height: 204 },
        operating_profit: { x: 1833, y: 482, width: 70, height: 44 },
        operating_expenses: { x: 1830, y: 752, width: 70, height: 51 },
        other_income: { x: 1700, y: 566, width: 71, height: 11 },
        net_profit: { x: 2299, y: 374, width: 71, height: 33 },
        tax: { x: 2299, y: 654, width: 71, height: 9 },
        other_expense: { x: 2299, y: 776, width: 71, height: 2 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: en.game, value: 1034, valueText: '¥1,034B', notes: [en.gameYoy, en.gameMargin], color: ORANGE, labelColor: ORANGE_TEXT, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: en.music, value: 444, valueText: '¥444B', notes: [en.musicYoy, en.musicMargin], color: PINK, labelColor: PINK_TEXT, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: en.pictures, value: 353, valueText: '¥353B', notes: [en.picturesYoy, en.picturesMargin], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: en.technology, value: 606, valueText: '¥606B', notes: [en.technologyYoy, en.technologyMargin], color: BLUE, labelColor: BLUE_TEXT, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: en.imaging, value: 510, valueText: '¥510B', notes: [en.imagingYoy, en.imagingMargin], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: en.sales, value: 2906, valueText: '¥2,906B', notes: [en.salesYoy], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: en.grossProfit, value: 861, valueText: '¥861B', notes: [en.grossMargin, en.grossYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: en.costOfSales, value: 2045, valueText: '(¥2,045B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: en.operatingProfit, value: 455, valueText: '¥455B', notes: [en.operatingMargin, en.operatingYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: `${en.operating} ${en.expenses}`, value: 537, valueText: '(¥537B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: en.otherIncome, value: 131, valueText: '¥131B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: en.netProfit, value: 340, valueText: '¥340B', notes: [en.netMargin, en.netYoy], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: en.tax, value: 110, valueText: '(¥110B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: en.otherExpense, value: 5, valueText: '(¥5B)', color: PALE_RED, labelColor: RED_LABEL, linkTint: PALE_RED },
    ],
    links: [
      { source: 'game_network', target: 'revenue', value: 1034, sourceWidth: 102, targetWidth: 103, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'music', target: 'revenue', value: 444, sourceWidth: 43, targetWidth: 43, targetOrder: 1, linkTint: PINK_LINK },
      { source: 'pictures', target: 'revenue', value: 353, sourceWidth: 34, targetWidth: 34, targetOrder: 2, linkTint: GOLD_LINK },
      { source: 'technology', target: 'revenue', value: 606, sourceWidth: 59, targetWidth: 59, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'imaging_sensing', target: 'revenue', value: 510, sourceWidth: 50, targetWidth: 56, targetOrder: 4, linkTint: DEEP_GREEN_LINK },
      { source: 'revenue', target: 'gross_profit', value: 861, sourceWidth: 85, targetWidth: 85, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2045, sourceWidth: 210, targetWidth: 204, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', targetRoute: 'other_revenue', value: 42, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, interactionOnly: true, linkTint: OTHER_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 455, sourceWidth: 31, targetWidth: 33, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 537, sourceWidth: 54, targetWidth: 51, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 131, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 340, sourceWidth: 33, targetWidth: 33, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 110, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 5, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0, linkTint: PALE_RED },
    ],
    i18n: {
      zh: {
        name: 'Sony · 2024 财年第二季度',
        meta: {
          title: 'Sony 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 9 月',
          titleTextLength: 1660,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_revenue: { label: '其他调整' } },
        nodes: {
          game_network: { label: zh.game, notes: [zh.gameYoy, zh.gameMargin] },
          music: { label: zh.music, notes: [zh.musicYoy, zh.musicMargin] },
          pictures: { label: zh.pictures, notes: [zh.picturesYoy, zh.picturesMargin] },
          technology: { label: zh.technology, notes: [zh.technologyYoy, zh.technologyMargin] },
          imaging_sensing: { label: zh.imaging, notes: [zh.imagingYoy, zh.imagingMargin] },
          revenue: { label: zh.sales, notes: [zh.salesYoy] },
          gross_profit: { label: zh.grossProfit, notes: [zh.grossMargin, zh.grossYoy] },
          cost_of_sales: { label: zh.costOfSales },
          operating_profit: { label: zh.operatingProfit, notes: [zh.operatingMargin, zh.operatingYoy] },
          operating_expenses: { label: [zh.operating, zh.expenses] },
          other_income: { label: zh.otherIncome },
          net_profit: { label: zh.netProfit, notes: [zh.netMargin, zh.netYoy] },
          tax: { label: zh.tax },
          other_expense: { label: zh.otherExpense },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

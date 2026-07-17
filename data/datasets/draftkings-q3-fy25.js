/* ====================================================================
 * DraftKings - Q3 FY25 income statement ($M)
 * Fixed-layout reconstruction of input/processed/draftkings-q3-fy25.png.
 * Reuses the validated DraftKings wordmark and segment badges documented
 * under data/assets/icon-references/draftkings/.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#f7740c';
  const ORANGE_LINK = '#f3ba8b';
  const GAMING_GREEN = '#61b510';
  const GAMING_LINK = '#b1d68c';
  const DARK = '#000000';
  const DARK_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const line = (text, size, extra = {}) => ({ text, size, ...extra });
  const block = (x, top, lines, extra = {}) => ({
    x,
    top,
    anchor: 'middle',
    lineGap: 8,
    lines,
    ...extra,
  });

  const kpiCard = (x, y, width, title, value, note) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="165" rx="32" fill="${ORANGE}"/>
      <text x="${x + width / 2}" y="${y + 50}" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="${y + 93}" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="${y + 134}" text-anchor="middle" font-size="25" font-weight="400" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = ({ mupTitle, mupValue, mupGrowth, arpmupTitle, arpmupValue, arpmupGrowth, mupDefinition, arpmupDefinition }) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(192, 1116, 162, mupTitle, mupValue, mupGrowth)}
      ${kpiCard(359, 1116, 311, arpmupTitle, arpmupValue, arpmupGrowth)}
      <text x="424" y="1314" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${mupDefinition}</text>
      <text x="424" y="1352" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">${arpmupDefinition}</text>
    </g>`;

  const annotationsEn = annotations({
    mupTitle: 'MUPs',
    mupValue: '3.6M',
    mupGrowth: '+2% Y/Y',
    arpmupTitle: 'ARPMUP',
    arpmupValue: '$106',
    arpmupGrowth: '+3% Y/Y',
    mupDefinition: 'MUP = Monthly Unique Players',
    arpmupDefinition: 'ARPMUP = Average Revenue per MUP',
  });

  const annotationsZh = annotations({
    mupTitle: '月独立玩家',
    mupValue: '360 万',
    mupGrowth: '同比 +2%',
    arpmupTitle: '每位玩家平均收入',
    arpmupValue: '$106',
    arpmupGrowth: '同比 +3%',
    mupDefinition: '月独立玩家',
    arpmupDefinition: '每位月独立玩家平均收入',
  });

  const labelLayout = (copy) => ({
    online_gaming: {
      blocks: [
        block(423, 362, [line('$value', 38), line(copy.onlineGrowth, 29, { color: NOTE })]),
        block(273, copy.onlineNameTop, copy.online.map((text) => line(text, copy.sourceNameSize, { weight: 800 }))),
      ],
    },
    gaming_software: {
      blocks: [
        block(423, 700, [line('$value', 38), line(copy.gamingGrowth, 29, { color: NOTE })]),
        block(273, copy.gamingNameTop, copy.gaming.map((text) => line(text, copy.sourceNameSize, { weight: 800 }))),
      ],
    },
    other_revenue: {
      blocks: [
        block(423, 961, [line('$value', 38), line(copy.otherGrowth, 29, { color: NOTE })]),
        block(273, 1043, [line(copy.other, 40, { weight: 800 })]),
      ],
    },
    revenue: {
      blocks: [
        block(889, 494, [line(copy.revenue, 40, { weight: 800 }), line('$value', 38), line(copy.revenueGrowth, 29, { color: NOTE })]),
      ],
    },
    gross_profit: {
      blocks: [
        block(1356, 327, [
          line(copy.grossProfit, 40, { weight: 800 }),
          line('$value', 38),
          line(copy.grossMargin, 29, { color: NOTE }),
          line(copy.grossGrowth, 29, { color: NOTE }),
        ]),
      ],
    },
    cost_of_revenue: {
      blocks: [
        block(1356, 1095, [
          ...copy.costOfRevenue.map((text) => line(text, 38, { weight: 800 })),
          line('$value', 38),
        ]),
      ],
    },
    operating_loss: {
      blocks: [
        block(1600, 937, [
          ...copy.operatingLoss.map((text) => line(text, 40, { weight: 800 })),
          line('$value', 38),
          line(copy.lossMargin, 29, { color: NOTE }),
          line(copy.lossGrowth, 29, { color: NOTE }),
        ]),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1836, 477, [
          ...copy.operatingExpenses.map((text) => line(text, 40, { weight: 800 })),
          line('$value', 38),
        ]),
      ],
    },
    sm: {
      blocks: [
        block(2470, 429, [
          line(copy.sm, 30, { weight: 800 }),
          line('$value', 30),
          line(copy.smShare, 29, { color: NOTE }),
          line(copy.smGrowth, 29, { color: NOTE }),
        ]),
      ],
    },
    ga: {
      blocks: [
        block(2470, 698, [
          line(copy.ga, 30, { weight: 800 }),
          line('$value', 30),
          line(copy.gaShare, 29, { color: NOTE }),
          line(copy.gaGrowth, 29, { color: NOTE }),
        ]),
      ],
    },
    rnd: {
      blocks: [
        block(2470, 926, [
          line(copy.rnd, 30, { weight: 800 }),
          line('$value', 30),
          line(copy.rndShare, 29, { color: NOTE }),
          line(copy.rndGrowth, 29, { color: NOTE }),
        ]),
      ],
    },
  });

  const labelsEn = labelLayout({
    online: ['Online', 'Gaming'],
    onlineGrowth: '(9%) Y/Y',
    onlineNameTop: 483,
    gaming: ['Gaming', 'Software'],
    gamingGrowth: '+25% Y/Y',
    gamingNameTop: 801,
    sourceNameSize: 40,
    other: 'Other',
    otherGrowth: '+25% Y/Y',
    revenue: 'Revenue',
    revenueGrowth: '+4% Y/Y',
    grossProfit: 'Gross profit',
    grossMargin: '31% margin',
    grossGrowth: '(1pp) Y/Y',
    costOfRevenue: ['Cost of', 'revenue'],
    operatingLoss: ['Operating', 'loss'],
    lossMargin: '(24%) margin',
    lossGrowth: '+3pp Y/Y',
    operatingExpenses: ['Operating', 'expenses'],
    sm: 'S&M',
    smShare: '32% of revenue',
    smGrowth: '+0pp Y/Y',
    ga: 'G&A',
    gaShare: '14% of revenue',
    gaGrowth: '(5pp) Y/Y',
    rnd: 'R&D',
    rndShare: '10% of revenue',
    rndGrowth: '+1pp Y/Y',
  });

  const labelsZh = labelLayout({
    online: ['在线博彩'],
    onlineGrowth: '同比 (9%)',
    onlineNameTop: 506,
    gaming: ['游戏软件'],
    gamingGrowth: '同比 +25%',
    gamingNameTop: 825,
    sourceNameSize: 36,
    other: '其他',
    otherGrowth: '同比 +25%',
    revenue: '收入',
    revenueGrowth: '同比 +4%',
    grossProfit: '毛利润',
    grossMargin: '利润率 31%',
    grossGrowth: '同比 (1 个百分点)',
    costOfRevenue: ['收入', '成本'],
    operatingLoss: ['营业', '亏损'],
    lossMargin: '利润率 (24%)',
    lossGrowth: '同比 +3 个百分点',
    operatingExpenses: ['运营', '费用'],
    sm: '销售与市场',
    smShare: '占收入 32%',
    smGrowth: '同比 +0 个百分点',
    ga: '管理费用',
    gaShare: '占收入 14%',
    gaGrowth: '同比 (5 个百分点)',
    rnd: '研发',
    rndShare: '占收入 10%',
    rndGrowth: '同比 +1 个百分点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'draftkings-q3-fy25',
    name: 'DraftKings · Q3 FY25',
    company: 'DraftKings',
    meta: {
      company: 'DraftKings',
      title: 'DraftKings Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Three months ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/draftkings-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2380,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: DARK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'draftkings-company-wordmark',
        href: 'data/assets/raster-annotations/draftkings/company-wordmark.png',
        x: 620, y: 220, width: 485, height: 261,
      },
      {
        key: 'draftkings-online-gaming-badge',
        href: 'data/assets/raster-annotations/draftkings/online-gaming-badge.png',
        x: 14, y: 370, width: 154, height: 154,
      },
      {
        key: 'draftkings-gaming-software-badge',
        href: 'data/assets/raster-annotations/draftkings/gaming-software-badge.png',
        x: 14, y: 531, width: 154, height: 154,
      },
    ],
    layout: {
      scale: 0.255,
      nodes: {
        online_gaming: { x: 386, y: 452, width: 73, height: 152 },
        gaming_software: { x: 386, y: 789, width: 73, height: 114 },
        other_revenue: { x: 386, y: 1053, width: 73, height: 22 },
        revenue: { x: 853, y: 636, width: 73, height: 292 },
        gross_profit: { x: 1320, y: 509, width: 73, height: 90 },
        cost_of_revenue: { x: 1320, y: 871, width: 73, height: 201 },
        operating_loss: { x: 1563, y: 845, width: 73, height: 70 },
        operating_expenses: { x: 1800, y: 629, width: 72, height: 161 },
        sm: { x: 2254, y: 431, width: 73, height: 92 },
        ga: { x: 2254, y: 722, width: 73, height: 40 },
        rnd: { x: 2254, y: 952, width: 73, height: 29 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'online_gaming', col: 0, order: 0, type: 'source', label: ['Online', 'Gaming'], value: 596, color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming_software', col: 0, order: 1, type: 'source', label: ['Gaming', 'Software'], value: 451, color: GAMING_GREEN, labelColor: GAMING_GREEN, linkTint: GAMING_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 97, color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1144, valueText: '$1,144M', color: DARK, labelColor: DARK, linkTint: DARK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 360, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 784, valueText: '($784M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -272, valueText: '($272M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 632, valueText: '($632M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 360, valueText: '($360M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 157, valueText: '($157M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 115, valueText: '($115M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'online_gaming', target: 'revenue', value: 596, sourceWidth: 152, targetWidth: 152, y0: 528, y1: 712, sourceOrder: 0, targetOrder: 0, linkTint: ORANGE_LINK },
      { source: 'gaming_software', target: 'revenue', value: 451, sourceWidth: 113, targetWidth: 116, y0: 846.5, y1: 846, sourceOrder: 0, targetOrder: 1, linkTint: GAMING_LINK },
      { source: 'other_revenue', target: 'revenue', value: 97, sourceWidth: 22, targetWidth: 24, y0: 1064, y1: 916, sourceOrder: 0, targetOrder: 2, linkTint: DARK_LINK },
      { source: 'revenue', target: 'gross_profit', value: 360, sourceWidth: 90, targetWidth: 90, y0: 681, y1: 554, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 784, sourceWidth: 202, targetWidth: 201, y0: 827, y1: 971.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 360, sourceWidth: 90, targetWidth: 91, y0: 554, y1: 674.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 272, sourceWidth: 70, targetWidth: 70, y0: 880, y1: 755, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 360, sourceWidth: 90, targetWidth: 90, y0: 674, y1: 477, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 157, sourceWidth: 40, targetWidth: 40, y0: 739, y1: 742, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 115, sourceWidth: 31, targetWidth: 27, y0: 774.5, y1: 966.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'DraftKings · 2025 财年第三季度',
        meta: {
          title: 'DraftKings 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的三个月',
          titleTextLength: 1680,
        },
        nodes: {
          online_gaming: { label: '在线博彩', notes: ['同比 (9%)'] },
          gaming_software: { label: '游戏软件', notes: ['同比 +25%'] },
          other_revenue: { label: '其他', notes: ['同比 +25%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 31%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (24%)', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          sm: { label: '销售与市场', notes: ['占收入 32%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 14%', '同比 (5 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
        },
        annotationsSvg: annotationsZh,
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* AppLovin — Q3 FY25 income statement ($M), measured against the source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const TEAL = '#059bc5';
  const TEAL_LABEL = '#049bc4';
  const TEAL_LINK = '#87cadd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BACKGROUND = '#f2f2f2';
  const RIGHT_LABEL_X = 2406;

  const appLovinLogo = `
    <g fill="none" stroke="${TEAL}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M46 83 C85 62 124 62 163 83"/>
      <path d="M46 83 L98 10 L163 83"/>
      <circle cx="46" cy="83" r="16" fill="${BACKGROUND}"/>
      <circle cx="98" cy="10" r="16" fill="${BACKGROUND}"/>
      <circle cx="163" cy="83" r="16" fill="${BACKGROUND}"/>
    </g>
    <text x="212" y="83" font-family="Montserrat,Arial,sans-serif" font-size="77" fill="${TEAL}">
      <tspan font-weight="800">APP</tspan><tspan dx="20" font-weight="400">LOVIN</tspan>
    </text>`;

  const textLines = (texts, size = 40) => texts.map((text) => ({ text, size, weight: 800 }));
  const valueAndNotes = (notes) => [
    { text: '$value', size: 38, weight: 400 },
    ...notes.map((text) => ({ text, size: 29, weight: 400, color: NOTE })),
  ];
  const costValue = { text: '$value', size: 36, weight: 400 };
  const rightCost = (name, notes = []) => [
    { text: name, size: 31, weight: 800 },
    { text: '$value', size: 30, weight: 400 },
    ...notes.map((text) => ({ text, size: 29, weight: 400, color: NOTE })),
  ];
  const block = (x, top, lines, anchor = 'middle', lineGap = 10) => ({ x, top, anchor, lineGap, lines });
  const rightCostBlocks = (name, notes, top, noteX) => [
    block(RIGHT_LABEL_X, top, rightCost(name), 'start', 8),
    block(
      noteX,
      top + 77,
      notes.map((text) => ({ text, size: 29, weight: 400, color: NOTE })),
      'middle',
      8
    ),
  ];

  function labelLayout(copy) {
    return {
      united_states: {
        blocks: [
          block(428, 419, valueAndNotes([copy.usYoy])),
          block(223, copy.usNameTop || 558, textLines(copy.usName)),
        ],
      },
      rest_of_world: {
        blocks: [
          block(434, 800, valueAndNotes([copy.rowYoy])),
          block(223, copy.rowNameTop || 944, textLines(copy.rowName)),
        ],
      },
      revenue: {
        blocks: [block(900, 467, [{ text: copy.revenue, size: 40, weight: 800 }, ...valueAndNotes([copy.revenueYoy])])],
      },
      gross_profit: {
        blocks: [block(1369, 344, [{ text: copy.gross, size: 40, weight: 800 }, ...valueAndNotes(copy.grossNotes)])],
      },
      cost_of_revenue: {
        blocks: [block(1363, 1109, [...textLines(copy.cost, 37), costValue], 'middle', 8)],
      },
      operating_profit: {
        blocks: [block(1836, 252, [{ text: copy.operating, size: 40, weight: 800 }, ...valueAndNotes(copy.operatingNotes)])],
      },
      operating_expenses: {
        blocks: [block(1831, 978, [...textLines(copy.operatingExpenses, 37), costValue], 'middle', 8)],
      },
      net_profit: {
        blocks: [block(2353, 368, [{ text: copy.net, size: 40, weight: 800 }, ...valueAndNotes(copy.netNotes)], 'start')],
      },
      tax: { blocks: [block(2391, 712, rightCost(copy.tax), 'start', 8)] },
      other: { blocks: [block(RIGHT_LABEL_X, 809, rightCost(copy.other), 'start', 8)] },
      ga: { blocks: rightCostBlocks(copy.ga, copy.gaNotes, 921, 2448) },
      sm: { blocks: rightCostBlocks(copy.sm, copy.smNotes, 1085, 2448) },
      rnd: { blocks: rightCostBlocks(copy.rnd, copy.rndNotes, 1256, copy.rndNoteX || 2440) },
    };
  }

  const en = {
    usName: ['United', 'States'], usYoy: '+62% Y/Y',
    rowName: ['Rest of the', 'world'], rowYoy: '+75% Y/Y',
    revenue: 'Revenue', revenueYoy: '+68% Y/Y',
    gross: 'Gross profit', grossNotes: ['88% margin', '+2pp Y/Y'],
    cost: ['Cost of', 'revenue'],
    operating: 'Operating profit', operatingNotes: ['77% margin', '+13pp Y/Y'],
    operatingExpenses: ['Operating', 'expenses'],
    net: 'Net profit', netNotes: ['59% margin', '+7pp Y/Y'],
    tax: 'Tax', other: 'Other', ga: 'G&A', gaNotes: ['4% of revenue', '(0pp) Y/Y'],
    sm: 'S&M', smNotes: ['3% of revenue', '(4pp) Y/Y'],
    rnd: 'R&D', rndNotes: ['3% of revenue', '(7pp) Y/Y'],
  };
  const zh = {
    usName: ['美国'], usNameTop: 584, usYoy: '同比 +62%',
    rowName: ['世界其他地区'], rowNameTop: 970, rowYoy: '同比 +75%',
    revenue: '收入', revenueYoy: '同比 +68%',
    gross: '毛利润', grossNotes: ['利润率 88%', '同比 +2 个百分点'],
    cost: ['收入', '成本'],
    operating: '营业利润', operatingNotes: ['利润率 77%', '同比 +13 个百分点'],
    operatingExpenses: ['运营', '费用'],
    net: '净利润', netNotes: ['利润率 59%', '同比 +7 个百分点'],
    tax: '税费', other: '其他', ga: '管理费用', gaNotes: ['占收入 4%', '同比 (0 个百分点)'],
    sm: '销售与市场', smNotes: ['占收入 3%', '同比 (4 个百分点)'],
    rnd: '研发', rndNotes: ['占收入 3%', '同比 (7 个百分点)'], rndNoteX: 2452,
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'applovin-q3-fy25',
    name: 'AppLovin · Q3 FY25',
    company: 'AppLovin',
    meta: {
      company: 'AppLovin',
      title: 'AppLovin Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/applovin-q3-fy25.png', width: 2667, height: 1500 },
      logoSvg: appLovinLogo, logoViewBox: '0 0 760 125', logoWidth: 820, logoHeight: 135, logoY: 260,
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2320,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BACKGROUND, nodeRadius: 0,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: TEAL, label: TEAL_LABEL }, hub: { node: TEAL, label: TEAL_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: TEAL_LINK, hub: TEAL_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 0.270,
      nodes: {
        united_states: { x: 392, y: 515, width: 72, height: 186 },
        rest_of_world: { x: 392, y: 897, width: 72, height: 194 },
        revenue: { x: 858, y: 616, width: 72, height: 381 },
        gross_profit: { x: 1323, y: 527, width: 72, height: 334 },
        cost_of_revenue: { x: 1323, y: 1045, width: 72, height: 47 },
        operating_profit: { x: 1792, y: 435, width: 72, height: 292 },
        operating_expenses: { x: 1792, y: 922, width: 72, height: 42 },
        net_profit: { x: 2260, y: 336, width: 72, height: 227 },
        tax: { x: 2260, y: 731, width: 72, height: 49 },
        other: { x: 2260, y: 862, width: 72, height: 14 },
        ga: { x: 2260, y: 993, width: 72, height: 14 },
        sm: { x: 2260, y: 1131, width: 72, height: 13 },
        rnd: { x: 2260, y: 1280, width: 72, height: 11 },
      },
      labels: labelLayout(en),
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 688, notes: ['+62% Y/Y'] },
      { id: 'rest_of_world', col: 0, order: 1, type: 'source', label: 'Rest of the world', value: 717, notes: ['+75% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1405, valueText: '$1,405M', notes: ['+68% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1230, valueText: '$1,230M', notes: ['88% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 175 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1079, valueText: '$1,079M', notes: ['77% margin', '+13pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 151 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 836, notes: ['59% margin', '+7pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 185 },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 58 },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 59, notes: ['4% of revenue', '(0pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 49, notes: ['3% of revenue', '(4pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 44, notes: ['3% of revenue', '(7pp) Y/Y'] },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 688, sourceWidth: 185, targetWidth: 185, sourceOrder: 0, targetOrder: 0 },
      { source: 'rest_of_world', target: 'revenue', value: 717, sourceWidth: 193, targetWidth: 196, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1230, sourceWidth: 334, targetWidth: 334, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 175, sourceWidth: 47, targetWidth: 47, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1079, sourceWidth: 292, targetWidth: 292, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 151, sourceWidth: 42, targetWidth: 42, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 836, sourceWidth: 227, targetWidth: 227, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 185, sourceWidth: 49, targetWidth: 49, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'operating_profit', target: 'other', value: 58, sourceWidth: 16, targetWidth: 14, sourceOrder: 2, targetOrder: 0,
        curve: { c1x: 1970, c1y: 719, c2x: 2138, c2y: 869 },
      },
      { source: 'operating_expenses', target: 'ga', value: 59, sourceWidth: 14, targetWidth: 14, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'operating_expenses', target: 'sm', value: 49, sourceWidth: 13, targetWidth: 13, sourceOrder: 1, targetOrder: 0,
        curve: { c1x: 1950, c1y: 942.5, c2x: 2110, c2y: 1137.5 },
      },
      {
        source: 'operating_expenses', target: 'rnd', value: 44, sourceWidth: 15, targetWidth: 11, sourceOrder: 2, targetOrder: 0,
        curve: { c1x: 1958, c1y: 956.5, c2x: 2140, c2y: 1285.5 },
      },
    ],
    i18n: {
      zh: {
        name: 'AppLovin · 2025 财年第三季度',
        meta: {
          title: 'AppLovin 2025 财年第三季度利润表', period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度', titleSize: 112, titleTextLength: 1900,
        },
        nodes: {
          united_states: { label: '美国', notes: ['同比 +62%'] }, rest_of_world: { label: '世界其他地区', notes: ['同比 +75%'] },
          revenue: { label: '收入', notes: ['同比 +68%'] }, gross_profit: { label: '毛利润', notes: ['利润率 88%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 77%', '同比 +13 个百分点'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 59%', '同比 +7 个百分点'] },
          tax: { label: '税费' }, other: { label: '其他' }, ga: { label: '管理费用', notes: ['占收入 4%', '同比 (0 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 3%', '同比 (4 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 3%', '同比 (7 个百分点)'] },
        },
        layout: { labels: labelLayout(zh) },
      },
    },
  });
})();

/* ====================================================================
 * Alphabet - Q2 FY24 income statement ($B)
 * Fixed d3/SVG reconstruction measured from
 * input/processed/alphabet-q2-fy24.png.
 * ==================================================================== */
(function () {
  const BLUE = '#4285f4';
  const BLUE_LINK = '#a3c1f2';
  const YELLOW = '#fbbc05';
  const YELLOW_LINK = '#f6d987';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2478;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;
  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    semanticRole: options.semanticRole,
    lines,
  });

  const businessAnnotations = `
    <g data-typography-role="brand">
      ${icon('googleGMark', 190, 384, 0.62)}
      ${icon('youtubeWordmark', 55, 731, 0.76)}
      ${icon('googleAdMobWordmark', 28, 885, 0.63)}
      ${icon('googlePlayWordmark', 213, 1021, 0.70)}
      ${icon('googleCloudWordmark', 377, 1203, 0.65)}
    </g>`;

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2250"
      data-link-anchor-y="487">
      <path d="M2170 509H2240C2270 509 2270 464 2290 464"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2214" y="550" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2214" y="590" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
    </g>`;

  const labelsEn = {
    search_advertising: {
      blocks: [
        block(457.5, 340, [
          line('$value', 38),
          line('+14% Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
        block(273, 544, [
          line('Search', 39, { weight: 800 }),
          line('advertising', 39, { weight: 800 }),
        ], { lineGap: 8, semanticRole: 'source-offset-label' }),
      ],
    },
    youtube: {
      blocks: [
        block(457.5, 676, [
          line('$value', 38),
          line('+13% Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    google_admob: {
      blocks: [
        block(457.5, 837, [
          line('$value', 38),
          line('(5%) Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
        block(28, 962, [
          line('+ AdSense & Google Ad Manager', 27, { color: NOTE }),
        ], { anchor: 'start', semanticRole: 'annotation' }),
      ],
    },
    ad_revenue: {
      blocks: [
        block(831, 396.5, [
          line('Ad Revenue', 40, { weight: 800 }),
          line('$value', 39),
          line('+11% Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    google_play_devices: {
      blocks: [
        block(619, 991, [
          line('$value', 38, { color: YELLOW }),
          line('+14% Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
        block(417, 1104, [
          line('+ Fitbit, Google Nest, Pixel,', 27, { color: NOTE }),
          line('YouTube Premium & TV', 27, { color: NOTE }),
        ], { lineGap: 7, semanticRole: 'annotation' }),
      ],
    },
    google_cloud: {
      blocks: [
        block(839.5, 1143, [
          line('$value', 38, { color: YELLOW }),
          line('+29% Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
        block(607.5, 1277, [
          line('+ Workspace, Enterprise Android', 27, { color: NOTE }),
          line('Chrome OS, Other APIs', 27, { color: NOTE }),
        ], { lineGap: 7, semanticRole: 'annotation' }),
      ],
    },
    other_revenue: {
      blocks: [
        block(976, 1317, [
          line('$value', 36, { color: YELLOW }),
        ]),
        block(916, 1349, [
          line('Other', 38, { weight: 800, color: YELLOW }),
        ], { anchor: 'end', semanticRole: 'source-offset-label' }),
      ],
    },
    other_income: { blocks: [] },
    revenue: {
      blocks: [
        block(1205, 493, [
          line('Revenue', 40, { weight: 800 }),
          line('$value', 39),
          line('+14% Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    gross_profit: {
      blocks: [
        block(1576.5, 357, [
          line('Gross profit', 40, { weight: 800 }),
          line('$value', 39),
          line('58% margin', 28, { color: NOTE }),
          line('+1pp Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    cost_of_revenue: {
      blocks: [
        block(1579, 1170.5, [
          line('Cost of', 39, { weight: 800 }),
          line('revenues', 39, { weight: 800 }),
          line('$value', 37),
        ]),
      ],
    },
    operating_profit: {
      blocks: [
        block(1958.5, 246.5, [
          line('Operating profit', 39, { weight: 800 }),
          line('$value', 39),
          line('32% margin', 28, { color: NOTE }),
          line('+3pp Y/Y', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1957.5, 877, [
          line('Operating', 39, { weight: 800 }),
          line('expenses', 39, { weight: 800 }),
          line('$value', 37),
        ]),
      ],
    },
    cost_other: {
      blocks: [
        block(1890, 1057.5, [
          line('Other', 31, { weight: 800 }),
          line('$value', 30),
        ], { anchor: 'start', semanticRole: 'centered-side-label' }),
      ],
    },
    tac: {
      blocks: [
        block(1887, 1217, [
          line('TAC', 31, { weight: 800 }),
          line('$value', 30),
        ], { anchor: 'start', semanticRole: 'centered-side-label' }),
      ],
    },
    net_profit: {
      blocks: [
        block(2386, 359.5, [
          line('Net profit', 39, { weight: 800 }),
          line('$value', 39),
          line('28% margin', 28, { color: NOTE }),
          line('+3pp Y/Y', 28, { color: NOTE }),
        ], { anchor: 'start', lineGap: 10 }),
      ],
    },
    tax: {
      blocks: [
        block(RIGHT_LABEL_X, 630.5, [
          line('Tax', 31, { weight: 800 }),
          line('$value', 30),
        ]),
      ],
    },
    rnd: {
      blocks: [
        block(RIGHT_LABEL_X, 813, [
          line('R&D', 31, { weight: 800 }),
          line('$value', 30),
          line('14% of revenue', 27, { color: NOTE }),
          line('(0pp) Y/Y', 27, { color: NOTE }),
        ]),
      ],
    },
    sm: {
      blocks: [
        block(RIGHT_LABEL_X, 1013, [
          line('S&M', 31, { weight: 800 }),
          line('$value', 30),
          line('8% of revenue', 27, { color: NOTE }),
          line('(1pp) Y/Y', 27, { color: NOTE }),
        ]),
      ],
    },
    ga: {
      blocks: [
        block(RIGHT_LABEL_X, 1209, [
          line('G&A', 31, { weight: 800 }),
          line('$value', 30),
          line('4% of revenue', 27, { color: NOTE }),
          line('(1pp) Y/Y', 27, { color: NOTE }),
        ]),
      ],
    },
  };

  const labelsZh = {
    search_advertising: {
      blocks: [
        block(457.5, 340, [
          line('$value', 38),
          line('同比 +14%', 28, { color: NOTE }),
        ], { lineGap: 10 }),
        block(273, 564, [
          line('搜索广告', 39, { weight: 800 }),
        ], { semanticRole: 'source-offset-label' }),
      ],
    },
    youtube: {
      blocks: [
        block(457.5, 676, [
          line('$value', 38),
          line('同比 +13%', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    google_admob: {
      blocks: [
        block(457.5, 837, [
          line('$value', 38),
          line('同比 (5%)', 28, { color: NOTE }),
        ], { lineGap: 10 }),
        block(28, 962, [
          line('+ AdSense 与 Google 广告管理平台', 27, { color: NOTE }),
        ], { anchor: 'start', semanticRole: 'annotation' }),
      ],
    },
    ad_revenue: {
      blocks: [
        block(831, 396.5, [
          line('广告收入', 40, { weight: 800 }),
          line('$value', 39),
          line('同比 +11%', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    google_play_devices: {
      blocks: [
        block(619, 991, [
          line('$value', 38, { color: YELLOW }),
          line('同比 +14%', 28, { color: NOTE }),
        ], { lineGap: 10 }),
        block(417, 1104, [
          line('+ Fitbit、Google Nest、Pixel、', 27, { color: NOTE }),
          line('YouTube Premium 与电视', 27, { color: NOTE }),
        ], { lineGap: 7, semanticRole: 'annotation' }),
      ],
    },
    google_cloud: {
      blocks: [
        block(839.5, 1143, [
          line('$value', 38, { color: YELLOW }),
          line('同比 +29%', 28, { color: NOTE }),
        ], { lineGap: 10 }),
        block(607.5, 1277, [
          line('+ Workspace、企业 Android、', 27, { color: NOTE }),
          line('Chrome OS、其他 API', 27, { color: NOTE }),
        ], { lineGap: 7, semanticRole: 'annotation' }),
      ],
    },
    other_revenue: {
      blocks: [
        block(976, 1317, [line('$value', 36, { color: YELLOW })]),
        block(916, 1349, [line('其他', 38, { weight: 800, color: YELLOW })], {
          anchor: 'end',
          semanticRole: 'source-offset-label',
        }),
      ],
    },
    other_income: { blocks: [] },
    revenue: {
      blocks: [
        block(1205, 493, [
          line('收入', 40, { weight: 800 }),
          line('$value', 39),
          line('同比 +14%', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    gross_profit: {
      blocks: [
        block(1576.5, 357, [
          line('毛利润', 40, { weight: 800 }),
          line('$value', 39),
          line('利润率 58%', 28, { color: NOTE }),
          line('同比 +1 个百分点', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    cost_of_revenue: {
      blocks: [
        block(1579, 1170.5, [
          line('收入', 39, { weight: 800 }),
          line('成本', 39, { weight: 800 }),
          line('$value', 37),
        ]),
      ],
    },
    operating_profit: {
      blocks: [
        block(1958.5, 246.5, [
          line('营业利润', 39, { weight: 800 }),
          line('$value', 39),
          line('利润率 32%', 28, { color: NOTE }),
          line('同比 +3 个百分点', 28, { color: NOTE }),
        ], { lineGap: 10 }),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1957.5, 877, [
          line('运营', 39, { weight: 800 }),
          line('费用', 39, { weight: 800 }),
          line('$value', 37),
        ]),
      ],
    },
    cost_other: {
      blocks: [
        block(1890, 1057.5, [
          line('其他', 31, { weight: 800 }),
          line('$value', 30),
        ], { anchor: 'start', semanticRole: 'centered-side-label' }),
      ],
    },
    tac: {
      blocks: [
        block(1887, 1217, [
          line('流量获取成本', 29, { weight: 800 }),
          line('$value', 30),
        ], { anchor: 'start', semanticRole: 'centered-side-label' }),
      ],
    },
    net_profit: {
      blocks: [
        block(2386, 359.5, [
          line('净利润', 39, { weight: 800 }),
          line('$value', 39),
          line('利润率 28%', 28, { color: NOTE }),
          line('同比 +3 个百分点', 27, { color: NOTE }),
        ], { anchor: 'start', lineGap: 10 }),
      ],
    },
    tax: {
      blocks: [
        block(RIGHT_LABEL_X, 630.5, [
          line('税费', 31, { weight: 800 }),
          line('$value', 30),
        ]),
      ],
    },
    rnd: {
      blocks: [
        block(RIGHT_LABEL_X, 813, [
          line('研发', 31, { weight: 800 }),
          line('$value', 30),
          line('占收入 14%', 27, { color: NOTE }),
          line('同比 (0 个百分点)', 27, { color: NOTE }),
        ]),
      ],
    },
    sm: {
      blocks: [
        block(RIGHT_LABEL_X, 1013, [
          line('销售与市场', 31, { weight: 800 }),
          line('$value', 30),
          line('占收入 8%', 27, { color: NOTE }),
          line('同比 (1 个百分点)', 27, { color: NOTE }),
        ]),
      ],
    },
    ga: {
      blocks: [
        block(RIGHT_LABEL_X, 1209, [
          line('管理费用', 31, { weight: 800 }),
          line('$value', 30),
          line('占收入 4%', 27, { color: NOTE }),
          line('同比 (1 个百分点)', 27, { color: NOTE }),
        ]),
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q2-fy24',
    name: 'Alphabet · Q2 FY24',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q2 FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/alphabet-q2-fy24.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2300,
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
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 9 },
    },
    annotationsSvg: businessAnnotations + otherIncomeGuide(false),
    layout: {
      scale: 4.55,
      routes: {
        other_income: { x: 2170, y: 509, width: 0, height: 1 },
      },
      nodes: {
        search_advertising: { x: 422, y: 431, width: 71, height: 220 },
        youtube: { x: 422, y: 771, width: 71, height: 37 },
        google_admob: { x: 422, y: 928, width: 71, height: 33 },
        ad_revenue: { x: 796, y: 543, width: 70, height: 293 },
        google_play_devices: { x: 603, y: 1087, width: 70, height: 40 },
        google_cloud: { x: 818, y: 1237, width: 70, height: 47 },
        other_revenue: { x: 944, y: 1377, width: 72, height: 3 },
        revenue: { x: 1170, y: 638, width: 70, height: 386 },
        gross_profit: { x: 1544, y: 539, width: 70, height: 224 },
        cost_of_revenue: { x: 1549, y: 996, width: 70, height: 160 },
        operating_profit: { x: 1922, y: 428, width: 71, height: 124 },
        operating_expenses: { x: 1922, y: 766, width: 71, height: 97 },
        cost_other: { x: 1792, y: 1046, width: 70, height: 100 },
        tac: { x: 1792, y: 1226, width: 70, height: 59 },
        net_profit: { x: 2290, y: 358, width: 71, height: 106 },
        tax: { x: 2290, y: 660, width: 71, height: 15 },
        rnd: { x: 2290, y: 813, width: 71, height: 53 },
        sm: { x: 2290, y: 1025, width: 71, height: 29 },
        ga: { x: 2290, y: 1224, width: 71, height: 12 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      {
        id: 'other_income',
        representation: 'flow',
        label: 'Other',
        value: 0.1,
        valueText: '$0.1B',
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 48.5, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 8.7, notes: ['+13% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.4, notes: ['(5%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 64.6, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 9.3, notes: ['+14% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 10.3, notes: ['+29% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.5, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 84.7, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 49.2, notes: ['58% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 35.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 27.4, notes: ['32% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_other', col: 5, order: 0, type: 'cost', label: 'Other', value: 22.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 1, type: 'cost', label: 'TAC', value: 13.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 23.6, notes: ['28% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 3.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 11.9, notes: ['14% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 3.2, notes: ['4% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 48.5, sourceWidth: 220, targetWidth: 220, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'youtube', target: 'ad_revenue', value: 8.7, sourceWidth: 37, targetWidth: 40, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'google_admob', target: 'ad_revenue', value: 7.4, sourceWidth: 33, targetWidth: 33, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'ad_revenue', target: 'revenue', value: 64.6, sourceWidth: 293, targetWidth: 293, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'google_play_devices', target: 'revenue', value: 9.3, sourceWidth: 40, targetWidth: 40, sourceOrder: 0, targetOrder: 1, linkTint: YELLOW_LINK },
      { source: 'google_cloud', target: 'revenue', value: 10.3, sourceWidth: 47, targetWidth: 50, sourceOrder: 0, targetOrder: 2, linkTint: YELLOW_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.5, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 3, linkTint: YELLOW_LINK },
      { source: 'revenue', target: 'gross_profit', value: 49.2, sourceWidth: 224, targetWidth: 224, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 35.5, sourceWidth: 162, targetWidth: 160, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 27.4, sourceWidth: 124, targetWidth: 124, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 21.8, sourceWidth: 100, targetWidth: 97, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 23.5, sourceWidth: 106, targetWidth: 105, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 3.9, sourceWidth: 18, targetWidth: 15, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'cost_of_revenue', target: 'cost_other', value: 22.1, sourceWidth: 100, targetWidth: 100, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'tac', value: 13.4, sourceWidth: 60, targetWidth: 59, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 11.9, sourceWidth: 53, targetWidth: 53, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 6.8, sourceWidth: 30, targetWidth: 29, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 3.2, sourceWidth: 14, targetWidth: 12, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['YouTube', 'Google AdMob', 'Google Play', 'Google Cloud'],
      zh: {
        name: 'Alphabet · 2024 财年第二季度',
        meta: {
          title: 'Alphabet 2024 财年第二季度利润表',
          titleTextLength: 1900,
        },
        nonNodeMetrics: {
          other_income: { label: '其他' },
        },
        nodes: {
          search_advertising: { label: '搜索广告', notes: ['同比 +14%'] },
          youtube: { label: 'YouTube', notes: ['同比 +13%'] },
          google_admob: { label: 'Google AdMob', notes: ['同比 (5%)'] },
          ad_revenue: { label: '广告收入', notes: ['同比 +11%'] },
          google_play_devices: { label: 'Google Play', notes: ['同比 +14%'] },
          google_cloud: { label: 'Google Cloud', notes: ['同比 +29%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          cost_other: { label: '其他' },
          tac: { label: '流量获取成本' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (0 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 8%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labelsZh },
        annotationsSvg: businessAnnotations + otherIncomeGuide(true),
      },
    },
  });
})();

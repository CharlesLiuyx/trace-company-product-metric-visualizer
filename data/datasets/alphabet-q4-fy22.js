/* Alphabet · Q4 FY22 income statement ($B), reconstructed from
 * input/processed/alphabet-q4-fy22.png as a fixed d3-sankey layout. */
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
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2476;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;
  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${icon('googleGMark', 176, 334, 0.72)}
      ${icon('youtubeWordmark', isZh ? 47 : 51, 742, 0.76)}
      ${icon('googleAdMobWordmark', 28, 948, 0.63)}
      ${icon('googlePlayWordmark', 220, 1062, 0.66)}
      ${icon('googleCloudWordmark', 280, 1240, 0.62)}
    </g>
    <g class="sankey-interactive-annotation" data-node="search_advertising"
      font-family="Noto Sans,Arial,sans-serif" font-size="37" font-weight="800"
      text-anchor="middle" fill="${BLUE}">
      <text x="275" y="552">${isZh ? '搜索' : 'Search'}</text>
      <text x="275" y="604">${isZh ? '广告' : 'advertising'}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q4-fy22',
    name: 'Alphabet - Q4 FY22',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q4 FY22 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1338,
      titleY: 197,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2310,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: '#155077',
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 5.47,
      nodes: {
        search_advertising: { x: 424, y: 384, width: 71, height: 232 },
        youtube: { x: 424, y: 770, width: 71, height: 42 },
        google_admob: { x: 424, y: 962, width: 71, height: 43 },
        ad_revenue: { x: 800, y: 461, width: 70, height: 323 },
        google_play_devices: { x: 602, y: 1093, width: 71, height: 45 },
        google_cloud: { x: 720, y: 1262, width: 70, height: 37 },
        other_revenue: { x: 928, y: 1373, width: 70, height: 4 },
        revenue: { x: 1172, y: 543, width: 70, height: 415 },
        gross_profit: { x: 1546, y: 463, width: 70, height: 220 },
        cost_of_revenue: { x: 1543, y: 908, width: 70, height: 192 },
        operating_profit: { x: 1929, y: 419, width: 71, height: 97 },
        operating_expenses: { x: 1932, y: 654, width: 70, height: 121 },
        cost_other: { x: 1797, y: 985, width: 70, height: 121 },
        tac: { x: 1797, y: 1161, width: 70, height: 68 },
        net_profit: { x: 2292, y: 365, width: 71, height: 73 },
        tax: { x: 2292, y: 586, width: 71, height: 17 },
        other_expense: { x: 2292, y: 686, width: 71, height: 4 },
        rnd: { x: 2292, y: 824, width: 71, height: 54 },
        sm: { x: 2292, y: 1003, width: 71, height: 37 },
        ga: { x: 2292, y: 1179, width: 71, height: 25 },
      },
      labels: {
        search_advertising: { blocks: [
          { x: 460, top: 290, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        youtube: { blocks: [
          { x: 460, top: 680, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(8%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        google_admob: { blocks: [
          { x: 460, top: 868, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(9%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 29, top: 1020, anchor: 'start', lines: [
            { text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        ad_revenue: { blocks: [
          { x: 835, top: 318, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Ad Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        google_play_devices: { blocks: [
          { x: 637, top: 1000, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400, color: YELLOW },
            { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 248, top: 1165, anchor: 'start', lineGap: 7, lines: [
            { text: '+ Fitbit, Google Nest, Pixel,', size: 27, weight: 400, color: NOTE },
            { text: 'YouTube Premium & TV', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        google_cloud: { blocks: [
          { x: 755, top: 1165, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400, color: YELLOW },
            { text: '+32% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 297, top: 1321, anchor: 'start', lineGap: 7, lines: [
            { text: '+ Workspace, Enterprise Android', size: 27, weight: 400, color: NOTE },
            { text: 'Chrome OS, Other APIs', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        other_revenue: { blocks: [
          { x: 964, top: 1309, anchor: 'middle', lines: [
            { text: '$value', size: 36, weight: 400, color: YELLOW },
          ] },
          { x: 904, top: 1353, anchor: 'end', lines: [
            { text: 'Other', size: 38, weight: 800, color: YELLOW },
          ] },
        ] },
        revenue: { blocks: [
          { x: 1207, top: 399, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+1% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        gross_profit: { blocks: [
          { x: 1581, top: 278, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Gross Profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '54% margin', size: 28, weight: 400, color: NOTE },
            { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        cost_of_revenue: { blocks: [
          { x: 1565, top: 1117, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Cost of', size: 39, weight: 800 },
            { text: 'revenues', size: 39, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ] },
        ] },
        operating_profit: { blocks: [
          { x: 1965, top: 234, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Operating profit', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '24% margin', size: 28, weight: 400, color: NOTE },
            { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        operating_expenses: { blocks: [
          { x: 1957.5, top: 798, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating', size: 39, weight: 800 },
            { text: 'expenses', size: 39, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ] },
        ] },
        cost_other: { blocks: [
          { x: 1902, top: 1005, anchor: 'start', lineGap: 9, lines: [
            { text: 'Others', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        tac: { blocks: [
          { x: 1909, top: 1162, anchor: 'start', lineGap: 9, lines: [
            { text: 'TAC', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        net_profit: { blocks: [
          { x: 2386, top: 355, anchor: 'start', lineGap: 10, lines: [
            { text: 'Net profit', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '18% margin', size: 28, weight: 400, color: NOTE },
            { text: '(9pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        tax: { blocks: [
          { x: RIGHT_LABEL_X, top: 585, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Tax', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        other_expense: { blocks: [
          { x: RIGHT_LABEL_X, top: 674, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Other', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        rnd: { blocks: [
          { x: RIGHT_LABEL_X, top: 818, anchor: 'middle', lineGap: 9, lines: [
            { text: 'R&D', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '14% of revenue', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        sm: { blocks: [
          { x: RIGHT_LABEL_X, top: 981, anchor: 'middle', lineGap: 9, lines: [
            { text: 'S&M', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '9% of revenue', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        ga: { blocks: [
          { x: RIGHT_LABEL_X, top: 1159, anchor: 'middle', lineGap: 9, lines: [
            { text: 'G&A', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: '7% of revenue', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
      },
    },
    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 42.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 8.0, valueText: '$8.0B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 8.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 59.0, valueText: '$59.0B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 8.8, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 7.3, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.9, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 76.0, valueText: '$76.0B', color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 40.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 35.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 18.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 22.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_other', col: 5, order: 0, type: 'cost', label: 'Others', value: 22.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 1, type: 'cost', label: 'TAC', value: 12.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 13.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 3.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 10.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 4, type: 'cost', label: 'S&M', value: 7.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: 'G&A', value: 5.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 42.6, sourceWidth: 232, targetWidth: 232, y0: 500, y1: 577, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 8.0, sourceWidth: 42, targetWidth: 46, y0: 791, y1: 716, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 8.5, sourceWidth: 43, targetWidth: 45, y0: 983.5, y1: 761.5, targetOrder: 2 },
      { source: 'ad_revenue', target: 'revenue', value: 59.0, sourceWidth: 323, targetWidth: 321, y0: 622.5, y1: 703.5, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 8.8, sourceWidth: 45, targetWidth: 49, y0: 1115.5, y1: 888.5, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 7.3, sourceWidth: 37, targetWidth: 41, y0: 1280.5, y1: 933.5, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.9, sourceWidth: 4, targetWidth: 4, y0: 1375, y1: 956, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 40.7, sourceWidth: 221, targetWidth: 220, y0: 653.5, y1: 573, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 35.3, sourceWidth: 194, targetWidth: 192, y0: 861, y1: 1004, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 18.2, sourceWidth: 97, targetWidth: 97, y0: 511.5, y1: 467.5, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 22.5, sourceWidth: 123, targetWidth: 121, y0: 621.5, y1: 714.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 13.6, sourceWidth: 72, targetWidth: 73, y0: 455, y1: 401.5, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3.5, sourceWidth: 21, targetWidth: 17, y0: 501.5, y1: 594.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 1.0, sourceWidth: 4, targetWidth: 4, y0: 514, y1: 688, sourceOrder: 2 },
      { source: 'cost_of_revenue', target: 'cost_other', value: 22.4, sourceWidth: 121, targetWidth: 121, y0: 968.5, y1: 1045.5, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 12.9, sourceWidth: 71, targetWidth: 68, y0: 1064.5, y1: 1195, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 10.3, sourceWidth: 55, targetWidth: 54, y0: 681.5, y1: 851, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.2, sourceWidth: 41, targetWidth: 36, y0: 729.5, y1: 1021, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 5.1, sourceWidth: 25, targetWidth: 25, y0: 762.5, y1: 1191.5, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2022 财年第四季度',
        meta: {
          title: 'Alphabet 2022 财年第四季度利润表',
        },
        annotationsSvg: annotations(true),
        nodes: {
          search_advertising: { label: '搜索广告' },
          youtube: { label: 'YouTube' },
          google_admob: { label: 'Google AdMob' },
          ad_revenue: { label: '广告收入' },
          google_play_devices: { label: 'Google Play' },
          google_cloud: { label: 'Google Cloud' },
          other_revenue: { label: '其他' },
          revenue: { label: '收入' },
          gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: '运营费用' },
          cost_other: { label: '其他' },
          tac: { label: '流量获取成本' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
      },
    },
  });
})();

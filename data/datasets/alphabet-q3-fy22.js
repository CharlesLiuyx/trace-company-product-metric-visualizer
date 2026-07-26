/* Alphabet · Q3 FY22 income statement ($B), reconstructed from
 * input/processed/alphabet-q3-fy22.png as a fixed d3-sankey layout. */
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
  const RIGHT_LABEL_X = 2450;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q3-fy22',
    name: 'Alphabet - Q3 FY22',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q3 FY22 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 195,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2297,
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
    annotationsSvg: `
      <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
        ${icon('googleGMark', 195, 318, 0.72)}
        ${icon('youtubeWordmark', 56, 696, 0.76)}
        ${icon('googleAdMobWordmark', 28, 867, 0.63)}
        ${icon('googlePlayWordmark', 223, 994, 0.66)}
        ${icon('googleCloudWordmark', 229, 1175, 0.62)}
      </g>`,
    layout: {
      scale: 5.56,
      nodes: {
        search_advertising: { x: 434, y: 378, width: 71, height: 219 },
        youtube: { x: 434, y: 724, width: 71, height: 37 },
        google_admob: { x: 434, y: 881, width: 71, height: 43 },
        ad_revenue: { x: 826, y: 457, width: 70, height: 304 },
        google_play_devices: { x: 593, y: 1025, width: 70, height: 36 },
        google_cloud: { x: 648, y: 1196, width: 70, height: 37 },
        other_revenue: { x: 878, y: 1288, width: 70, height: 2 },
        revenue: { x: 1198, y: 523, width: 70, height: 386 },
        gross_profit: { x: 1592, y: 472, width: 70, height: 210 },
        cost_of_revenue: { x: 1590, y: 1024, width: 70, height: 172 },
        operating_profit: { x: 1947, y: 418, width: 71, height: 94 },
        operating_expenses: { x: 1945, y: 734, width: 70, height: 115 },
        tac: { x: 1847, y: 1085, width: 70, height: 64 },
        cost_other: { x: 1850, y: 1251, width: 70, height: 107 },
        net_profit: { x: 2288, y: 381, width: 71, height: 76 },
        tax: { x: 2288, y: 589, width: 71, height: 10 },
        other_expense: { x: 2288, y: 700, width: 71, height: 2 },
        rnd: { x: 2288, y: 882, width: 71, height: 56 },
        sm: { x: 2288, y: 1019, width: 71, height: 36 },
        ga: { x: 2288, y: 1168, width: 71, height: 17 },
      },
      labels: {
        search_advertising: { blocks: [
          { x: 470, top: 289, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 293, top: 504, anchor: 'middle', lineGap: 7, semanticRole: 'note', lines: [
            { text: 'Search', size: 37, weight: 800 },
            { text: 'advertising', size: 37, weight: 800 },
          ] },
        ] },
        youtube: { blocks: [
          { x: 470, top: 634, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        google_admob: { blocks: [
          { x: 470, top: 792, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 32, top: 945, anchor: 'start', lines: [
            { text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        ad_revenue: { blocks: [
          { x: 861, top: 317, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Ad Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        google_play_devices: { blocks: [
          { x: 628, top: 937, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400, color: YELLOW },
            { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 248, top: 1088, anchor: 'start', lineGap: 7, lines: [
            { text: '+ Fitbit, Google Nest, Pixel,', size: 27, weight: 400, color: NOTE },
            { text: 'YouTube Premium & TV', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        google_cloud: { blocks: [
          { x: 683, top: 1107, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400, color: YELLOW },
            { text: '+38% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
          { x: 248, top: 1250, anchor: 'start', lineGap: 7, lines: [
            { text: '+ Workspace, Enterprise Android', size: 27, weight: 400, color: NOTE },
            { text: 'Chrome OS, Other APIs', size: 27, weight: 400, color: NOTE },
          ] },
        ] },
        other_revenue: { blocks: [
          { x: 913, top: 1228, anchor: 'middle', lines: [
            { text: '$value', size: 36, weight: 400, color: YELLOW },
          ] },
          { x: 849, top: 1258, anchor: 'end', semanticRole: 'note', lines: [
            { text: 'Other', size: 38, weight: 800, color: YELLOW },
          ] },
        ] },
        revenue: { blocks: [
          { x: 1233, top: 380, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        gross_profit: { blocks: [
          { x: 1627, top: 289, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Gross Profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '55% margin', size: 28, weight: 400, color: NOTE },
            { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        cost_of_revenue: { blocks: [
          { x: 1625, top: 1222, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Cost of', size: 39, weight: 800 },
            { text: 'revenues', size: 39, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ] },
        ] },
        operating_profit: { blocks: [
          { x: 1982, top: 236, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Operating profit', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '25% margin', size: 28, weight: 400, color: NOTE },
            { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        operating_expenses: { blocks: [
          { x: 1980, top: 868, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating', size: 39, weight: 800 },
            { text: 'expenses', size: 39, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ] },
        ] },
        tac: { blocks: [
          { x: 1982, top: 1083, anchor: 'start', lines: [
            { text: 'TAC', size: 31, weight: 800 },
          ] },
          { x: 1952, top: 1119, anchor: 'start', lines: [
            { text: '$value', size: 35, weight: 400 },
          ] },
        ] },
        cost_other: { blocks: [
          { x: 1957, top: 1264, anchor: 'start', lines: [
            { text: 'Others', size: 31, weight: 800 },
          ] },
          { x: 1952, top: 1300, anchor: 'start', lines: [
            { text: '$value', size: 35, weight: 400 },
          ] },
        ] },
        net_profit: { blocks: [
          { x: 2370, top: 345, anchor: 'start', lines: [
            { text: 'Net profit', size: 39, weight: 800 },
          ] },
          { x: 2403, top: 397, anchor: 'start', lines: [
            { text: '$value', size: 39, weight: 400 },
          ] },
          { x: 2386, top: 448, anchor: 'start', lineGap: 10, lines: [
            { text: '20% margin', size: 28, weight: 400, color: NOTE },
            { text: '(9pp) Y/Y', size: 28, weight: 400, color: NOTE },
          ] },
        ] },
        tax: { blocks: [
          { x: RIGHT_LABEL_X, top: 574, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Tax', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        other_expense: { blocks: [
          { x: RIGHT_LABEL_X, top: 664, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Other', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        rnd: { blocks: [
          { x: RIGHT_LABEL_X, top: 879, anchor: 'middle', lineGap: 9, lines: [
            { text: 'R&D', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        sm: { blocks: [
          { x: RIGHT_LABEL_X, top: 1008, anchor: 'middle', lineGap: 9, lines: [
            { text: 'S&M', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
        ga: { blocks: [
          { x: RIGHT_LABEL_X, top: 1149, anchor: 'middle', lineGap: 9, lines: [
            { text: 'G&A', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] },
        ] },
      },
    },
    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 39.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 7.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 54.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 6.9, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 6.9, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.8, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 69.1, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 37.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 31.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 17.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 20.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 0, type: 'cost', label: 'TAC', value: 11.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Others', value: 19.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 13.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 2.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 10.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 4, type: 'cost', label: 'S&M', value: 6.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: 'G&A', value: 3.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 39.5, sourceWidth: 219, targetWidth: 219, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 7.1, sourceWidth: 37, targetWidth: 40, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.9, sourceWidth: 43, targetWidth: 45, targetOrder: 2 },
      { source: 'ad_revenue', target: 'revenue', value: 54.5, sourceWidth: 304, targetWidth: 304, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 6.9, sourceWidth: 36, targetWidth: 38, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 6.9, sourceWidth: 37, targetWidth: 38, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.8, sourceWidth: 2, targetWidth: 6, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 37.9, sourceWidth: 210, targetWidth: 210, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 31.2, sourceWidth: 176, targetWidth: 172, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 17.1, sourceWidth: 94, targetWidth: 94, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 20.8, sourceWidth: 116, targetWidth: 115, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 13.9, sourceWidth: 76, targetWidth: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.3, sourceWidth: 12, targetWidth: 10, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 0.9, sourceWidth: 6, targetWidth: 2, sourceOrder: 2 },
      { source: 'cost_of_revenue', target: 'tac', value: 11.8, sourceWidth: 65, targetWidth: 64, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cost_other', value: 19.3, sourceWidth: 107, targetWidth: 107, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 10.3, sourceWidth: 57, targetWidth: 56, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.9, sourceWidth: 38, targetWidth: 36, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 3.6, sourceWidth: 20, targetWidth: 17, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2022 财年第三季度',
        meta: { title: 'Alphabet 2022 财年第三季度利润表' },
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
          tac: { label: '流量获取成本' },
          cost_other: { label: '其他' },
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

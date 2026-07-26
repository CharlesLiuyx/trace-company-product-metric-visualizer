/* ====================================================================
 * Alphabet - Q2 FY23 income statement ($B)
 * Reconstructed from input/processed/alphabet-q2-fy23.png as a fixed
 * d3-sankey layout with reusable SVG Google business annotations.
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
  const RIGHT_LABEL_X = 2480;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${icon('googleGMark', 196, 351, 0.62)}
      ${icon('youtubeWordmark', 56, 720, 0.74)}
      ${icon('googleAdMobWordmark', 33, 920, 0.63)}
      ${icon('googlePlayWordmark', 241, 1061, 0.66)}
      ${icon('googleCloudWordmark', 355, 1212, 0.63)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q2-fy23',
    name: 'Alphabet - Q2 FY23',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q2 FY23 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2310,
      logoSvg: '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 4.65,
      nodes: {
        search_advertising: { x: 423, y: 418, width: 73, height: 198 },
        youtube: { x: 423, y: 761, width: 73, height: 36 },
        google_admob: { x: 423, y: 944, width: 73, height: 36 },
        ad_revenue: { x: 793, y: 526, width: 75, height: 270 },
        google_play_devices: { x: 614, y: 1090, width: 72, height: 39 },
        google_cloud: { x: 779, y: 1234, width: 72, height: 37 },
        other_revenue: { x: 842, y: 1394, width: 73, height: 2 },
        revenue: { x: 1167, y: 636, width: 73, height: 348 },
        gross_profit: { x: 1542, y: 531, width: 72, height: 199 },
        cost_of_revenue: { x: 1550, y: 951, width: 72, height: 149 },
        operating_profit: { x: 1923, y: 440, width: 72, height: 101 },
        operating_expenses: { x: 1928, y: 694, width: 72, height: 97 },
        other_income: { x: 2173, y: 503, width: 72, height: 2 },
        cost_other: { x: 1811, y: 998, width: 72, height: 91 },
        tac: { x: 1811, y: 1183, width: 72, height: 58 },
        net_profit: { x: 2291, y: 366, width: 73, height: 86 },
        tax: { x: 2291, y: 614, width: 73, height: 17 },
        rnd: { x: 2289, y: 766, width: 73, height: 49 },
        sm: { x: 2291, y: 959, width: 73, height: 32 },
        ga: { x: 2291, y: 1174, width: 73, height: 16 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 460, top: 326, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 276, top: 518, anchor: 'middle', lineGap: 8, semanticRole: 'source-group',
              lines: [
                { text: 'Search', size: 39, weight: 800 },
                { text: 'advertising', size: 39, weight: 800 },
              ],
            },
          ],
        },
        youtube: {
          blocks: [{
            x: 462, top: 674, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        google_admob: {
          blocks: [
            {
              x: 460, top: 853, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(5%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 997, anchor: 'start',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [{
            x: 831, top: 382, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Ad Revenue', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        google_play_devices: {
          blocks: [
            {
              x: 650, top: 1001, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 266, top: 1146, anchor: 'start', lineGap: 7,
              lines: [
                { text: '+ Fitbit, Google Nest, Pixel,', size: 27, weight: 400, color: NOTE },
                { text: 'YouTube Premium & TV', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_cloud: {
          blocks: [
            {
              x: 815, top: 1145, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 366, top: 1294, anchor: 'start', lineGap: 7,
              lines: [
                { text: '+ Workspace, Enterprise Android', size: 27, weight: 400, color: NOTE },
                { text: 'Chrome OS, Other APIs', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 878, top: 1332, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
            },
            {
              x: 822, top: 1364, anchor: 'end',
              lines: [{ text: 'Other', size: 44, weight: 800, color: YELLOW }],
            },
          ],
        },
        revenue: {
          blocks: [{
            x: 1204, top: 493, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1578, top: 349, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross Profit', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '57% margin', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1586, top: 1116, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Cost of', size: 39, weight: 800 },
              { text: 'revenues', size: 39, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1959, top: 257, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '29% margin', size: 28, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1964, top: 817, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Operating', size: 39, weight: 800 },
              { text: 'expenses', size: 39, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
            ],
          }],
        },
        other_income: {
          blocks: [{
            x: 2209, top: 517, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Other', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        cost_other: {
          blocks: [{
            x: 1913, top: 996, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'Other', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        tac: {
          blocks: [{
            x: 1944, top: 1171, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'TAC', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2400, top: 350, anchor: 'start', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 39, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '25% margin', size: 28, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 593, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Tax', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 761, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'R&D', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
              { text: '14% of revenue', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
        sm: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 944, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'S&M', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
              { text: '9% of revenue', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
        ga: {
          blocks: [{
            x: RIGHT_LABEL_X, top: 1149, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'G&A', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
              { text: '5% of revenue', size: 27, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 42.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 7.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 58.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 8.1, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 8.0, valueText: '$8.0B', color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.3, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 74.6, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 42.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 31.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 21.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 20.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 19.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 12.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 18.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 3.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 10.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 6.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 3.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 42.6, width: 198, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 7.7, width: 36, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.9, width: 36, targetOrder: 2 },
      { source: 'ad_revenue', target: 'revenue', value: 58.1, width: 270, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 8.1, width: 38, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 8.0, width: 37, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.3, width: 2, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 42.7, width: 199, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 31.9, width: 149, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 21.8, width: 101, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 20.9, width: 97, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 18.3, width: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3.5, width: 17, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 0.1, width: 2, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'cost_other', value: 19.4, width: 91, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 12.5, width: 58, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 10.6, width: 49, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.8, width: 32, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 3.5, width: 16, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['G', 'YouTube', 'Google AdMob', 'Google Play', 'Google Cloud'],
      zh: {
        name: 'Alphabet · 2023 财年第二季度',
        meta: { title: 'Alphabet 2023 财年第二季度利润表' },
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
          other_income: { label: '其他' },
          cost_other: { label: '其他' },
          tac: { label: '流量获取成本' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
      },
    },
  });
})();

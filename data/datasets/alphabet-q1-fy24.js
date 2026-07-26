/* ====================================================================
 * Alphabet - Q1 FY24 income statement ($B)
 * Reconstructed from input/processed/alphabet-q1-fy24.png as a fixed
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
      ${icon('googleGMark', 199, 359, 0.58)}
      ${icon('youtubeWordmark', 55, 718, 0.72)}
      ${icon('googleAdMobWordmark', 32, 884, 0.63)}
      ${icon('googlePlayWordmark', 253, 1030, 0.66)}
      ${icon('googleCloudWordmark', 420, 1207, 0.62)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q1-fy24',
    name: 'Alphabet - Q1 FY24',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q1 FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 166,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2310,
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
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 4.35,
      nodes: {
        search_advertising: { x: 422, y: 406, width: 71, height: 201 },
        youtube: { x: 422, y: 746, width: 71, height: 34 },
        google_admob: { x: 422, y: 916, width: 71, height: 30 },
        ad_revenue: { x: 796, y: 542, width: 70, height: 270 },
        google_play_devices: { x: 648, y: 1058, width: 70, height: 36 },
        google_cloud: { x: 863, y: 1225, width: 70, height: 40 },
        other_revenue: { x: 993, y: 1342, width: 70, height: 1 },
        revenue: { x: 1170, y: 637, width: 70, height: 353 },
        gross_profit: { x: 1544, y: 543, width: 70, height: 204 },
        cost_of_revenue: { x: 1539, y: 963, width: 70, height: 146 },
        operating_profit: { x: 1917, y: 446, width: 71, height: 110 },
        operating_expenses: { x: 1920, y: 736, width: 70, height: 91 },
        other_income: { x: 2180, y: 488, width: 70, height: 10 },
        cost_other: { x: 1790, y: 1020, width: 70, height: 89 },
        tac: { x: 1790, y: 1198, width: 70, height: 55 },
        net_profit: { x: 2290, y: 331, width: 71, height: 102 },
        tax: { x: 2290, y: 630, width: 71, height: 17 },
        rnd: { x: 2290, y: 835, width: 71, height: 50 },
        sm: { x: 2290, y: 1051, width: 71, height: 27 },
        ga: { x: 2290, y: 1254, width: 71, height: 11 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 457, top: 312, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 270, top: 510, anchor: 'middle', lineGap: 6, semanticRole: 'reference-offset-name',
              lines: [
                { text: 'Search', size: 40, weight: 800 },
                { text: 'advertising', size: 40, weight: 800 },
              ],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 457, top: 651, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+21% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_admob: {
          blocks: [
            {
              x: 457, top: 820, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(1%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 962, anchor: 'start',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 831, top: 395, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Ad Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_play_devices: {
          blocks: [
            {
              x: 683, top: 964, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 281, top: 1114, anchor: 'start', lineGap: 7,
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
              x: 898, top: 1131, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 438, top: 1281, anchor: 'start', lineGap: 7,
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
              x: 1028, top: 1285, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
            },
            {
              x: 842, top: 1319, anchor: 'start',
              lines: [{ text: 'Other', size: 38, weight: 800, color: YELLOW }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1205, top: 490, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1579, top: 355, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '58% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1574, top: 1124, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 39, weight: 800 },
                { text: 'revenues', size: 39, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1952, top: 258, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '32% margin', size: 28, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1955, top: 845, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'expenses', size: 39, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2215, top: 513, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        cost_other: {
          blocks: [
            {
              x: 1887, top: 1021, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        tac: {
          blocks: [
            {
              x: 1887, top: 1196, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'TAC', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2386, top: 318, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '29% margin', size: 28, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 603, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 829, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '15% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1026, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '8% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1220, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 46.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 8.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 61.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 8.7, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 9.6, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.6, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 80.5, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 46.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 33.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 25.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 2.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 20.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 12.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 23.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 11.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 6.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 3.0, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 46.1, sourceWidth: 201, targetWidth: 204, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 8.1, sourceWidth: 34, targetWidth: 36, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.4, sourceWidth: 30, targetWidth: 30, targetOrder: 2 },
      { source: 'ad_revenue', target: 'revenue', value: 61.6, sourceWidth: 270, targetWidth: 274, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 8.7, sourceWidth: 36, targetWidth: 37, targetOrder: 1, linkTint: YELLOW_LINK },
      { source: 'google_cloud', target: 'revenue', value: 9.6, sourceWidth: 40, targetWidth: 41, targetOrder: 2, linkTint: YELLOW_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.6, sourceWidth: 1, targetWidth: 1, targetOrder: 3, linkTint: YELLOW_LINK },
      { source: 'revenue', target: 'gross_profit', value: 46.8, sourceWidth: 204, targetWidth: 204, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 33.7, sourceWidth: 149, targetWidth: 146, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 25.5, sourceWidth: 111, targetWidth: 110, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 21.4, sourceWidth: 93, targetWidth: 91, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 20.8, sourceWidth: 93, targetWidth: 92, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.7, sourceWidth: 17, targetWidth: 17, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 2.8, sourceWidth: 10, targetWidth: 10, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'cost_other', value: 20.8, sourceWidth: 90, targetWidth: 89, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 12.9, sourceWidth: 56, targetWidth: 55, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 11.9, sourceWidth: 51, targetWidth: 50, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.4, sourceWidth: 28, targetWidth: 27, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 3.0, sourceWidth: 12, targetWidth: 11, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['YouTube', 'Google AdMob', 'Google Play', 'Google Cloud'],
      zh: {
        name: 'Alphabet · 2024 财年第一季度',
        meta: { title: 'Alphabet 2024 财年第一季度利润表' },
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

/* ====================================================================
 * Alphabet - Q3 FY24 income statement ($B)
 * Reconstructed from input/processed/alphabet-q3-fy24.png as a fixed
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
  const RIGHT_LABEL_X = 2490;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${icon('googleGMark', 199, 390, 0.57)}
      ${icon('youtubeWordmark', 56, 718, 0.73)}
      ${icon('googleAdMobWordmark', 28, 866, 0.63)}
      ${icon('googlePlayWordmark', 230, 1020, 0.66)}
      ${icon('googleCloudWordmark', 402, 1202, 0.48)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q3-fy24',
    name: 'Alphabet - Q3 FY24',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q3 FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/alphabet-q3-fy24.png',
        width: 2667,
        height: 1500,
      },
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
      interfaceAudit: {
        mode: 'error',
      },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 4.05,
      nodes: {
        search_advertising: { x: 438, y: 435, width: 71, height: 201 },
        youtube: { x: 438, y: 756, width: 71, height: 33 },
        google_admob: { x: 438, y: 906, width: 71, height: 29 },
        ad_revenue: { x: 812, y: 537, width: 70, height: 267 },
        google_play_devices: { x: 634, y: 1043, width: 70, height: 42 },
        google_cloud: { x: 827, y: 1218, width: 70, height: 44 },
        other_revenue: { x: 986, y: 1356, width: 79, height: 1 },
        revenue: { x: 1186, y: 634, width: 70, height: 361 },
        gross_profit: { x: 1560, y: 532, width: 70, height: 209 },
        cost_of_revenue: { x: 1560, y: 943, width: 70, height: 148 },
        operating_profit: { x: 1931, y: 439, width: 70, height: 115 },
        operating_expenses: { x: 1933, y: 727, width: 71, height: 92 },
        other_income: { x: 2191, y: 499, width: 70, height: 11 },
        cost_other: { x: 1796, y: 997, width: 70, height: 91 },
        tac: { x: 1798, y: 1191, width: 70, height: 54 },
        net_profit: { x: 2306, y: 349, width: 71, height: 106 },
        tax: { x: 2306, y: 651, width: 71, height: 20 },
        rnd: { x: 2306, y: 804, width: 71, height: 49 },
        sm: { x: 2306, y: 1035, width: 71, height: 27 },
        ga: { x: 2306, y: 1250, width: 71, height: 12 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 474, top: 343, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 272, top: 544, anchor: 'middle', lineGap: 6,
              semanticRole: 'brand-lockup-label',
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
              x: 474, top: 664, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_admob: {
          blocks: [
            {
              x: 474, top: 815, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 944, anchor: 'start',
              lines: [
                { text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 849, top: 394, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Ad Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_play_devices: {
          blocks: [
            {
              x: 669, top: 952, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 258, top: 1108, anchor: 'start', lineGap: 7,
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
              x: 862, top: 1128, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+35% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 419, top: 1280, anchor: 'start', lineGap: 7,
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
              x: 1025, top: 1305, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
            },
            {
              x: 919, top: 1334, anchor: 'end',
              lines: [{ text: 'Other', size: 30, weight: 800, color: YELLOW }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1221, top: 491, anchor: 'middle', lineGap: 10,
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
              x: 1595, top: 345, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '59% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1595, top: 1117, anchor: 'middle', lineGap: 0,
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
              x: 1966, top: 253, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '32% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1968, top: 843, anchor: 'middle', lineGap: 0,
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
              x: 2226, top: 531, anchor: 'middle', lineGap: 10,
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
              x: 1931, top: 1007, anchor: 'start', lineGap: 9,
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
              x: 1940, top: 1192, anchor: 'start', lineGap: 9,
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
              x: 2400, top: 359, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '30% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 634, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 801, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '14% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1014, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 1219, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 49.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 8.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 65.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 10.7, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 11.4, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.4, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 88.3, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 51.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 36.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 28.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 23.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 3.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 22.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 13.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 26.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 5.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 12.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 7.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 3.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 49.4, sourceWidth: 201, targetWidth: 201, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 8.9, sourceWidth: 33, targetWidth: 36, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.5, sourceWidth: 29, targetWidth: 30, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 65.9, sourceWidth: 267, targetWidth: 267, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 10.7, sourceWidth: 42, targetWidth: 45, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 11.4, sourceWidth: 44, targetWidth: 47, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.4, sourceWidth: 1, targetWidth: 2, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 51.8, sourceWidth: 211, targetWidth: 209, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 36.5, sourceWidth: 150, targetWidth: 148, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 28.5, sourceWidth: 115, targetWidth: 115, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 23.3, sourceWidth: 94, targetWidth: 92, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 23.1, sourceWidth: 93, targetWidth: 93, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.4, sourceWidth: 22, targetWidth: 20, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 3.2, sourceWidth: 11, targetWidth: 13, targetOrder: 1 },

      { source: 'cost_of_revenue', target: 'cost_other', value: 22.8, sourceWidth: 92, targetWidth: 91, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 13.7, sourceWidth: 56, targetWidth: 54, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 12.4, sourceWidth: 49, targetWidth: 49, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.2, sourceWidth: 29, targetWidth: 27, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 3.6, sourceWidth: 14, targetWidth: 12, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['G', 'YouTube', 'Google AdMob', 'Google Play', 'Google Cloud'],
      zh: {
        name: 'Alphabet · 2024 财年第三季度',
        meta: {
          title: 'Alphabet 2024 财年第三季度利润表',
        },
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

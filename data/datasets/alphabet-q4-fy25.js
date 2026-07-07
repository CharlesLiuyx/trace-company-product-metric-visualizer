/* ====================================================================
 * Alphabet - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/alphabet-q4-fy25.png as a fixed
 * d3-sankey layout with reusable SVG Google business annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#4285f4';
  const BLUE_LINK = '#9dbcf0';
  const YELLOW = '#fbbc05';
  const YELLOW_LINK = '#f6dc82';
  const GREEN = '#25a326';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcd98';
  const RED = '#d40000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#df7d80';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2490;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('googleWordmark', 55, 431, 1.07)}
      ${icon('youtubeWordmark', 56, 760, 0.76)}
      ${icon('googleAdMobWordmark', 28, 903, 0.63)}
      ${icon('googlePlayWordmark', 283, 1042, 0.66)}
      ${icon('googleCloudWordmark', 403, 1214, 0.62)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q4-fy25',
    name: 'Alphabet - Q4 FY25',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 166,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2310,
      logoWidth: 250,
      logoHeight: 250,
      logoY: 247,
      logoViewBox: '0 0 256 256',
      logoSvg: BUSINESS_ICONS.googleGMark || '',
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
    },
    annotationsSvg: annotations,

    layout: {
      scale: 3.6,
      nodes: {
        search_advertising: { x: 437, y: 424, width: 74, height: 226 },
        youtube: { x: 437, y: 788, width: 74, height: 41 },
        google_admob: { x: 437, y: 946, width: 74, height: 28 },
        ad_revenue: { x: 812, y: 550, width: 74, height: 297 },
        google_play_devices: { x: 650, y: 1065, width: 74, height: 48 },
        google_cloud: { x: 828, y: 1216, width: 74, height: 64 },
        other_revenue: { x: 1010, y: 1329, width: 72, height: 4 },
        revenue: { x: 1185, y: 650, width: 74, height: 410 },
        gross_profit: { x: 1559, y: 545, width: 74, height: 245 },
        cost_of_revenue: { x: 1559, y: 998, width: 74, height: 165 },
        operating_profit: { x: 1932, y: 440, width: 74, height: 129 },
        operating_expenses: { x: 1932, y: 765, width: 74, height: 116 },
        other_income: { x: 2199, y: 518, width: 74, height: 11 },
        cost_other: { x: 1793, y: 1052, width: 74, height: 105 },
        tac: { x: 1793, y: 1237, width: 74, height: 60 },
        net_profit: { x: 2306, y: 353, width: 74, height: 123 },
        tax: { x: 2306, y: 661, width: 74, height: 17 },
        rnd: { x: 2306, y: 798, width: 74, height: 67 },
        sm: { x: 2306, y: 1032, width: 74, height: 30 },
        ga: { x: 2306, y: 1255, width: 74, height: 19 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 474, top: 312, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 54, top: 566, anchor: 'start',
              lines: [{ text: 'Search advertising', size: 35, weight: 800 }],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 474, top: 696, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_admob: {
          blocks: [
            {
              x: 474, top: 846, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 974, anchor: 'start',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 849, top: 404, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Ad Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_play_devices: {
          blocks: [
            {
              x: 686, top: 974, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 311, top: 1130, anchor: 'start', lineGap: 7,
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
              x: 864, top: 1124, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+48% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 403, top: 1288, anchor: 'start', lineGap: 7,
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
              x: 1046, top: 1273, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
            },
            {
              x: 1005, top: 1300, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: YELLOW }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1221, top: 508, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1596, top: 358, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '60% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1596, top: 1174, anchor: 'middle', lineGap: 9,
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
              x: 1969, top: 252, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '32% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1968, top: 910, anchor: 'middle', lineGap: 9,
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
              x: 2236, top: 542, anchor: 'middle', lineGap: 10,
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
              x: 1932, top: 1084, anchor: 'start', lineGap: 9,
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
              x: 1946, top: 1230, anchor: 'start', lineGap: 9,
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
              x: 2404, top: 350, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '30% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 635, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 800, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '16% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 27, weight: 400, color: NOTE },
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
                { text: '7% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1218, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '5% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 63.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 11.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.8, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 82.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 13.6, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 17.7, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.3, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 113.8, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 68.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 45.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 35.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 32.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 3.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 29.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 16.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 34.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 18.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 8.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 5.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 63.1, width: 226, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 11.4, width: 41, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.8, width: 30, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 82.3, width: 297, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 13.6, width: 48, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 17.7, width: 64, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.3, width: 4, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 68.1, width: 245, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 45.8, width: 165, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 35.9, width: 129, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 32.1, width: 116, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 31.2, width: 112, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.7, width: 17, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 3.2, width: 11, targetOrder: 1 },

      { source: 'cost_of_revenue', target: 'cost_other', value: 29.2, width: 105, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 16.6, width: 60, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 18.6, width: 67, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 8.2, width: 30, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 5.3, width: 19, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2025 财年第四季度',
        meta: {
          title: 'Alphabet 2025 财年第四季度利润表',
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

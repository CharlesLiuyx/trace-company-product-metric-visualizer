/* ====================================================================
 * Alphabet - Q1 FY25 income statement ($B)
 * Reconstructed from input/processed/alphabet-q1-fy25.png as a fixed
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
      ${icon('googleWordmark', 53, 398, 1.16)}
      ${icon('youtubeWordmark', 55, 719, 0.74)}
      ${icon('googleAdMobWordmark', 30, 883, 0.59)}
      <g transform="translate(261 1030) scale(0.69 0.89)">${BUSINESS_ICONS.googlePlayWordmark || ''}</g>
      ${icon('googleCloudWordmark', 353, 1220, 0.62)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q1-fy25',
    name: 'Alphabet - Q1 FY25',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q1 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
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
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 4.15,
      nodes: {
        search_advertising: { x: 442, y: 407, width: 74, height: 210 },
        youtube: { x: 442, y: 751, width: 74, height: 35 },
        google_admob: { x: 442, y: 917, width: 74, height: 28 },
        ad_revenue: { x: 816, y: 517, width: 74, height: 276 },
        google_play_devices: { x: 668, y: 1105, width: 74, height: 41 },
        google_cloud: { x: 798, y: 1270, width: 74, height: 49 },
        other_revenue: { x: 1010, y: 1380, width: 72, height: 1 },
        revenue: { x: 1190, y: 636, width: 74, height: 375 },
        gross_profit: { x: 1564, y: 519, width: 74, height: 223 },
        cost_of_revenue: { x: 1564, y: 976, width: 74, height: 150 },
        operating_profit: { x: 1935, y: 409, width: 74, height: 127 },
        operating_expenses: { x: 1940, y: 750, width: 74, height: 95 },
        other_income: { x: 2200, y: 459, width: 74, height: 45 },
        cost_other: { x: 1815, y: 1044, width: 74, height: 91 },
        tac: { x: 1812, y: 1224, width: 74, height: 55 },
        net_profit: { x: 2310, y: 311, width: 74, height: 142 },
        tax: { x: 2310, y: 675, width: 74, height: 27 },
        rnd: { x: 2310, y: 830, width: 74, height: 53 },
        sm: { x: 2310, y: 1041, width: 74, height: 23 },
        ga: { x: 2310, y: 1241, width: 74, height: 13 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 477, top: 303, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 54, top: 566, anchor: 'start', semanticRole: 'note',
              lines: [{ text: 'Search advertising', size: 35, weight: 800 }],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 470, top: 663, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_admob: {
          blocks: [
            {
              x: 477, top: 813.5, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 962.5, anchor: 'start', semanticRole: 'note',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 851, top: 374, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Ad Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_play_devices: {
          blocks: [
            {
              x: 703, top: 1002, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 286, top: 1119, anchor: 'start', lineGap: 7, semanticRole: 'note',
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
              x: 833, top: 1179, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 364, top: 1300, anchor: 'start', lineGap: 7, semanticRole: 'note',
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
              x: 1046, top: 1316, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
            },
            {
              x: 966, top: 1356, anchor: 'end', semanticRole: 'name',
              lines: [{ text: 'Other', size: 38, weight: 800, color: YELLOW }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1225, top: 494, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1599, top: 333, anchor: 'middle', lineGap: 10,
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
              x: 1590.5, top: 1140, anchor: 'middle', lineGap: 9,
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
              x: 1970, top: 225, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '34% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1965, top: 862.5, anchor: 'middle', lineGap: 9,
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
              x: 2235, top: 519, anchor: 'middle', lineGap: 10,
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
              x: 1915, top: 1051.5, anchor: 'start', lineGap: 9,
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
              x: 1919, top: 1218, anchor: 'start', lineGap: 9,
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
              x: 2404, top: 316, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '38% margin', size: 28, weight: 400, color: NOTE },
                { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 653, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 825, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '15% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1021, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '7% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1208.5, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 50.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 8.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 66.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 10.4, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 12.3, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.7, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 90.2, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 53.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 36.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 30.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 23.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 11.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 22.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 13.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 34.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 7.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 13.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 6.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 3.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 50.7, sourceWidth: 210, targetWidth: 209, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 8.9, sourceWidth: 35, targetWidth: 37, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.3, sourceWidth: 28, targetWidth: 30, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 66.9, sourceWidth: 276, targetWidth: 278, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 10.4, sourceWidth: 41, targetWidth: 43, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 12.3, sourceWidth: 49, targetWidth: 51, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.7, sourceWidth: 1, targetWidth: 3, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 53.9, sourceWidth: 223, targetWidth: 223, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 36.4, sourceWidth: 152, targetWidth: 150, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 30.6, sourceWidth: 128, targetWidth: 127, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 23.3, sourceWidth: 95, targetWidth: 95, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 23.4, sourceWidth: 98, targetWidth: 96, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 7.2, sourceWidth: 29, targetWidth: 27, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 11.1, sourceWidth: 45, targetWidth: 46, targetOrder: 1 },

      { source: 'cost_of_revenue', target: 'cost_other', value: 22.6, sourceWidth: 93, targetWidth: 91, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 13.7, sourceWidth: 57, targetWidth: 55, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 13.6, sourceWidth: 56, targetWidth: 53, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.2, sourceWidth: 25, targetWidth: 23, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 3.5, sourceWidth: 14, targetWidth: 13, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2025 财年第一季度',
        meta: {
          title: 'Alphabet 2025 财年第一季度利润表',
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

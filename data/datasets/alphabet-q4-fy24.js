/* ====================================================================
 * Alphabet - Q4 FY24 income statement ($B)
 * Reconstructed from input/processed/alphabet-q4-fy24.png as a fixed
 * d3-sankey layout with reusable SVG Google business annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#4285f4';
  const BLUE_LINK = '#9dbcf0';
  const YELLOW = '#fbbc05';
  const YELLOW_LINK = '#f6dc82';
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

  const icon = (name, x, y, scaleX = 1, scaleY = scaleX) => `
    <g data-annotation-clearance="${name}" transform="translate(${x} ${y}) scale(${scaleX} ${scaleY})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${icon('googleWordmark', 58, 416, 1.12)}
      ${icon('youtubeWordmark', 56, 722, 0.735)}
      ${icon('googleAdMobWordmark', 22, 877, 0.69)}
      ${icon('googlePlayWordmark', 231, 1015, 0.73)}
      ${icon('googleCloudWordmark', 400, 1179.4, 0.67, 0.58)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q4-fy24',
    name: 'Alphabet - Q4 FY24',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q4 FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 166,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2310,
      logoWidth: 264,
      logoHeight: 264,
      logoY: 215,
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
      interfaceAudit: {
        mode: 'error',
      },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 3.6,
      nodes: {
        search_advertising: { x: 438, y: 402, width: 74, height: 216 },
        youtube: { x: 438, y: 747, width: 74, height: 40 },
        google_admob: { x: 438, y: 901, width: 74, height: 30 },
        ad_revenue: { x: 812, y: 533, width: 74, height: 291 },
        google_play_devices: { x: 639, y: 1041, width: 74, height: 45 },
        google_cloud: { x: 819, y: 1197, width: 74, height: 46 },
        other_revenue: { x: 994, y: 1318, width: 74, height: 2 },
        revenue: { x: 1186, y: 638, width: 74, height: 388 },
        gross_profit: { x: 1562, y: 534, width: 74, height: 224 },
        cost_of_revenue: { x: 1567, y: 992, width: 74, height: 161 },
        operating_profit: { x: 1936, y: 433, width: 74, height: 124 },
        operating_expenses: { x: 1936, y: 743, width: 74, height: 99 },
        other_income: { x: 2201, y: 492, width: 74, height: 2 },
        cost_other: { x: 1806, y: 1037, width: 74, height: 103 },
        tac: { x: 1808, y: 1220, width: 74, height: 57 },
        net_profit: { x: 2306, y: 334, width: 74, height: 105 },
        tax: { x: 2306, y: 639, width: 74, height: 22 },
        rnd: { x: 2306, y: 809, width: 74, height: 50 },
        sm: { x: 2306, y: 1040, width: 74, height: 27 },
        ga: { x: 2306, y: 1235, width: 74, height: 16 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 475, top: 299, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 54, top: 559, anchor: 'start', semanticRole: 'source-group',
              lines: [{ text: 'Search advertising', size: 35, weight: 800 }],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 475, top: 653, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_admob: {
          blocks: [
            {
              x: 475, top: 803, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 956, anchor: 'start',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 847, top: 389, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Ad Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_play_devices: {
          blocks: [
            {
              x: 674, top: 950, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 259, top: 1104, anchor: 'start', lineGap: 7,
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
              x: 854, top: 1107, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+30% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 421, top: 1260, anchor: 'start', lineGap: 7,
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
              x: 1031, top: 1254, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
            },
            {
              x: 959, top: 1288, anchor: 'end', semanticRole: 'source-group',
              lines: [{ text: 'Other', size: 38, weight: 800, color: YELLOW }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1221, top: 494, anchor: 'middle', lineGap: 10,
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
              x: 1601, top: 344, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '58% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1604, top: 1165, anchor: 'middle', lineGap: 9,
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
              x: 1974, top: 245, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '32% margin', size: 28, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1971, top: 859, anchor: 'middle', lineGap: 9,
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
              x: 2234, top: 509, anchor: 'middle', lineGap: 10,
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
              x: 1912, top: 1057, anchor: 'start', lineGap: 9,
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
              x: 1914, top: 1216, anchor: 'start', lineGap: 9,
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
              x: 2404, top: 358, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '28% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 628, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 805, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '14% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1015, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 1216, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '5% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 54.0, valueText: '$54.0B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 10.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 8.0, valueText: '$8.0B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 72.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 11.6, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 12.0, valueText: '$12.0B', color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.4, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 96.5, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 55.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 40.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 31.0, valueText: '$31.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 24.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 25.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 14.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 26.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 5.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 13.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 7.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 4.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 54.0, width: 216, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 10.5, width: 40, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 8.0, sourceWidth: 30, targetWidth: 35, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 72.5, width: 291, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 11.6, width: 45, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 12.0, width: 46, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.4, sourceWidth: 2, targetWidth: 5, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 55.9, width: 224, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 40.6, sourceWidth: 163, targetWidth: 161, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 31.0, width: 124, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 24.9, width: 99, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 25.3, width: 100, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.7, sourceWidth: 24, targetWidth: 22, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 1.3, sourceWidth: 2, targetWidth: 5, targetOrder: 1 },

      { source: 'cost_of_revenue', target: 'cost_other', value: 25.8, width: 103, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 14.8, width: 57, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 13.1, width: 50, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.4, width: 27, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 4.4, sourceWidth: 22, targetWidth: 16, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2024 财年第四季度',
        meta: {
          title: 'Alphabet 2024 财年第四季度利润表',
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

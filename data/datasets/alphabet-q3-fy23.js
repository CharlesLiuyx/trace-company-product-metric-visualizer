/* ====================================================================
 * Alphabet - Q3 FY23 income statement ($B)
 * Reconstructed from input/processed/alphabet-q3-fy23.png as a fixed
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
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = (copy = {}) => `
    <g data-typography-role="brand">
      ${icon('googleGMark', 158, 345, 0.87)}
      ${icon('youtubeWordmark', 55, 749, 0.738)}
      ${icon('googleAdMobWordmark', 22, 917, 0.70)}
      ${icon('googlePlayWordmark', 251, 1062, 0.65)}
      ${icon('googleCloudWordmark', 422, 1199, 0.60)}
    </g>
    <g class="sankey-interactive-annotation" data-node="search_advertising"
       fill="${BLUE}" font-size="38" font-weight="800" text-anchor="middle">
      <text x="277" y="577">${copy.searchLine1 || 'Search'}</text>
      <text x="277" y="622">${copy.searchLine2 || 'advertising'}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q3-fy23',
    name: 'Alphabet - Q3 FY23',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q3 FY23 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
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
    annotationsSvg: annotations(),

    layout: {
      scale: 5.1,
      nodes: {
        search_advertising: { x: 424, y: 416, width: 71, height: 224 },
        youtube: { x: 424, y: 786, width: 71, height: 39 },
        google_admob: { x: 424, y: 968, width: 71, height: 37 },
        ad_revenue: { x: 798, y: 535, width: 70, height: 304 },
        google_play_devices: { x: 645, y: 1088, width: 70, height: 41 },
        google_cloud: { x: 845, y: 1224, width: 70, height: 41 },
        other_revenue: { x: 993, y: 1348, width: 70, height: 1 },
        revenue: { x: 1172, y: 641, width: 70, height: 393 },
        gross_profit: { x: 1543, y: 557, width: 70, height: 222 },
        cost_of_revenue: { x: 1546, y: 979, width: 70, height: 169 },
        operating_profit: { x: 1912, y: 465, width: 70, height: 109 },
        operating_expenses: { x: 1914, y: 744, width: 71, height: 111 },
        cost_other: { x: 1819, y: 1047, width: 70, height: 103 },
        tac: { x: 1819, y: 1235, width: 70, height: 64 },
        net_profit: { x: 2292, y: 380, width: 71, height: 99 },
        tax: { x: 2292, y: 599, width: 71, height: 5 },
        other_expense: { x: 2292, y: 700, width: 71, height: 5 },
        rnd: { x: 2292, y: 868, width: 71, height: 55 },
        sm: { x: 2292, y: 1082, width: 71, height: 32 },
        ga: { x: 2292, y: 1295, width: 71, height: 19 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 461, top: 315, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 459, top: 684, anchor: 'middle', lineGap: 10,
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
              x: 459, top: 866, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 29, top: 988, anchor: 'start', semanticRole: 'note',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 827, top: 380, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Ad Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_play_devices: {
          blocks: [
            {
              x: 680, top: 987, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+21% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 280, top: 1138, anchor: 'start', lineGap: 7, semanticRole: 'note',
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
              x: 880, top: 1132, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 440, top: 1283, anchor: 'start', lineGap: 7, semanticRole: 'note',
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
              x: 1024, top: 1274, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
            },
            {
              x: 901, top: 1324, anchor: 'middle',
              lines: [{ text: 'Other', size: 38, weight: 800, color: YELLOW }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1206, top: 489, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1579, top: 377, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross Profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '57% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1578, top: 1158, anchor: 'middle', lineGap: 9,
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
              x: 1953, top: 287, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '28% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1948, top: 871, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'expenses', size: 39, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        cost_other: {
          blocks: [
            {
              x: 1975, top: 1050, anchor: 'middle', lineGap: 9,
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
              x: 1977, top: 1238, anchor: 'middle', lineGap: 9,
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
              x: 2392, top: 361, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '26% margin', size: 28, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2478, top: 566, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: 2481, top: 671, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2479, top: 858, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '15% of revenue', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2481, top: 1062, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '9% of revenue', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2481, top: 1266, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '5% of revenue', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 44.0, valueText: '$44.0B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 8.0, valueText: '$8.0B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 59.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 8.3, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 8.4, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.3, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 76.7, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 43.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 33.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 21.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 22.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_other', col: 5, order: 0, type: 'cost', label: 'Other', value: 20.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 1, type: 'cost', label: 'TAC', value: 12.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 19.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 11.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 4, type: 'cost', label: 'S&M', value: 6.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: 'G&A', value: 4.0, valueText: '($4.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 44.0, width: 224, sourceWidth: 224, targetWidth: 224, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 8.0, width: 39, sourceWidth: 39, targetWidth: 40, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.7, width: 37, sourceWidth: 37, targetWidth: 40, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 59.6, width: 304, sourceWidth: 304, targetWidth: 306, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 8.3, width: 41, sourceWidth: 41, targetWidth: 43, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 8.4, width: 41, sourceWidth: 41, targetWidth: 43, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.3, width: 1, sourceWidth: 1, targetWidth: 1, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 43.5, width: 222, sourceWidth: 223, targetWidth: 222, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 33.2, width: 169, sourceWidth: 170, targetWidth: 169, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 21.3, width: 109, sourceWidth: 109, targetWidth: 109, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 22.1, width: 111, sourceWidth: 113, targetWidth: 111, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 19.7, width: 99, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.5, width: 5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, width: 5, sourceOrder: 2 },

      { source: 'cost_of_revenue', target: 'cost_other', value: 20.6, width: 103, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 12.6, width: 64, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 11.3, width: 55, sourceWidth: 57, targetWidth: 55, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.9, width: 32, sourceWidth: 34, targetWidth: 32, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 4.0, width: 19, sourceWidth: 20, targetWidth: 19, sourceOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'Alphabet · 2023 财年第三季度',
        annotationsSvg: annotations({ searchLine1: '搜索', searchLine2: '广告' }),
        meta: {
          title: 'Alphabet 2023 财年第三季度利润表',
          titleTextLength: 2050,
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
          cost_other: { label: '其他' },
          tac: { label: '流量获取成本' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
        layout: {
          labels: {
            youtube: {
              blocks: [
                {
                  x: 466, top: 684, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +12%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            google_admob: {
              blocks: [
                {
                  x: 466, top: 866, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 (3%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 29, top: 988, anchor: 'start', semanticRole: 'note',
                  lines: [{ text: '+ AdSense 与 Google Ad Manager', size: 25, weight: 400, color: NOTE }],
                },
              ],
            },
            tac: {
              blocks: [
                {
                  x: 1987, top: 1238, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '流量获取成本', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();

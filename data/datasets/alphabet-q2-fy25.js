/* ====================================================================
 * Alphabet - Q2 FY25 income statement ($B)
 * Reconstructed from input/processed/alphabet-q2-fy25.png as a fixed
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

  const otherRevenueGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_revenue"
      data-link-numerator="other_revenue"
      data-link-denominator="revenue"
      data-link-anchor-x="1060"
      data-link-anchor-y="1386">
      <path d="M986 1386H1058C1122 1386 1098 1026 1184 1026"
        fill="none" stroke="${YELLOW_LINK}" stroke-width="2"/>
      <text x="929" y="1392" text-anchor="end" font-size="38"
        font-weight="800" fill="${YELLOW}">${zh ? '其他' : 'Other'}</text>
      <text x="1022" y="1364" text-anchor="middle" font-size="36"
        font-weight="400" fill="${YELLOW}">$0.3B</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${icon('googleWordmark', 55, 391, 1.07)}
      ${icon('youtubeWordmark', 56, 710, 0.76)}
      ${icon('googleAdMobWordmark', 28, 880, 0.63)}
      ${icon('googlePlayWordmark', 258, 1030, 0.66)}
      ${icon('googleCloudWordmark', 381, 1218, 0.62)}
    </g>
    ${otherRevenueGuide(zh)}`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q2-fy25',
    name: 'Alphabet - Q2 FY25',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q2FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q2-fy25.png', width: 2667, height: 1500 },
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
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),

    layout: {
      scale: 3.6,
      routes: {
        other_revenue: { x: 986, y: 1386, width: 0, height: 1 },
      },
      nodes: {
        search_advertising: { x: 453, y: 372, width: 71, height: 210 },
        youtube: { x: 453, y: 733, width: 71, height: 37 },
        google_admob: { x: 453, y: 917, width: 71, height: 26 },
        ad_revenue: { x: 818, y: 514, width: 72, height: 278 },
        google_play_devices: { x: 651, y: 1091, width: 71, height: 41 },
        google_cloud: { x: 831, y: 1245, width: 71, height: 51 },
        revenue: { x: 1184, y: 651, width: 71, height: 376 },
        gross_profit: { x: 1549, y: 524, width: 71, height: 224 },
        cost_of_revenue: { x: 1549, y: 981, width: 71, height: 151 },
        operating_profit: { x: 1914, y: 416, width: 71, height: 120 },
        operating_expenses: { x: 1914, y: 737, width: 71, height: 101 },
        other_income: { x: 2167, y: 467, width: 71, height: 9 },
        cost_other: { x: 1779, y: 1031, width: 71, height: 94 },
        tac: { x: 1781, y: 1206, width: 72, height: 55 },
        net_profit: { x: 2279, y: 309, width: 71, height: 108 },
        tax: { x: 2279, y: 635, width: 71, height: 20 },
        rnd: { x: 2279, y: 810, width: 71, height: 51 },
        sm: { x: 2279, y: 1035, width: 71, height: 25 },
        ga: { x: 2279, y: 1216, width: 71, height: 18 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 489, top: 282, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 54, top: 522, anchor: 'start',
              semanticRole: 'source-group',
              lines: [{ text: 'Search advertising', size: 35, weight: 800 }],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 489, top: 644, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_admob: {
          blocks: [
            {
              x: 489, top: 824, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(1%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 955, anchor: 'start',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 854, top: 374, anchor: 'middle', lineGap: 10,
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
              x: 686, top: 996, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+20% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 285, top: 1116, anchor: 'start', lineGap: 7,
              semanticRole: 'note',
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
              x: 866, top: 1154, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+32% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 398, top: 1303, anchor: 'start', lineGap: 7,
              semanticRole: 'note',
              lines: [
                { text: '+ Workspace, Enterprise Android', size: 27, weight: 400, color: NOTE },
                { text: 'Chrome OS, Other APIs', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1221, top: 508, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1585, top: 342, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '60% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1585, top: 1156, anchor: 'middle', lineGap: 9,
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
              x: 1950, top: 236, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '32% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1950, top: 859, anchor: 'middle', lineGap: 9,
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
              x: 2203, top: 488, anchor: 'middle', lineGap: 10,
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
              x: 1896, top: 1046, anchor: 'start', lineGap: 9,
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
              x: 1896, top: 1201, anchor: 'start', lineGap: 9,
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
              x: 2400, top: 317, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '29% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 616, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 806, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '14% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1012, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 1200, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '5% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nonNodeMetrics: [
      {
        id: 'other_revenue',
        representation: 'flow',
        label: 'Other',
        value: 0.3,
        valueText: '$0.3B',
        type: 'source',
        labelColor: YELLOW,
      },
    ],

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 54.2, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 9.8, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 71.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 11.2, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 13.6, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 96.4, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 57.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 39.0, valueText: '($39.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 31.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 26.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 2.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 24.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 14.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 28.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 5.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 13.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 7.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 5.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 54.2, sourceWidth: 210, targetWidth: 210, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 9.8, sourceWidth: 37, targetWidth: 37, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.4, sourceWidth: 26, targetWidth: 31, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 71.3, sourceWidth: 278, targetWidth: 278, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 11.2, sourceWidth: 41, targetWidth: 41, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 13.6, sourceWidth: 51, targetWidth: 57, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { sourceRoute: 'other_revenue', target: 'revenue', value: 0.3, sourceWidth: 1, targetWidth: 1, y0: 1386, y1: 1026, targetOrder: 3, interactionOnly: true, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 57.4, width: 224, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 39.0, width: 151, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 31.3, sourceWidth: 120, targetWidth: 120, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 26.1, sourceWidth: 104, targetWidth: 101, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 25.5, sourceWidth: 100, targetWidth: 99, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.7, width: 20, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 2.7, width: 9, targetOrder: 1 },

      { source: 'cost_of_revenue', target: 'cost_other', value: 24.3, width: 94, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 14.7, width: 55, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 13.8, sourceWidth: 53, targetWidth: 51, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.1, sourceWidth: 28, targetWidth: 25, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 5.2, sourceWidth: 20, targetWidth: 18, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2025 财年第二季度',
        meta: {
          title: 'Alphabet 2025 财年第二季度利润表',
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          other_revenue: { label: '其他' },
        },
        nodes: {
          search_advertising: { label: '搜索广告' },
          youtube: { label: 'YouTube' },
          google_admob: { label: 'Google AdMob' },
          ad_revenue: { label: '广告收入' },
          google_play_devices: { label: 'Google Play' },
          google_cloud: { label: 'Google Cloud' },
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

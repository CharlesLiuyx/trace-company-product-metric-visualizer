/* ====================================================================
 * Alphabet - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/alphabet-q2-fy26.png as a fixed
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

  const otherRevenueGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_revenue"
      data-link-numerator="other_revenue"
      data-link-denominator="revenue"
      data-link-anchor-x="1046"
      data-link-anchor-y="1344">
      <path d="M964 1344H1044C1112 1344 1092 1110 1184 1110"
        fill="none" stroke="${YELLOW_LINK}" stroke-width="2"/>
      <text x="927" y="1353" text-anchor="end" font-size="38"
        font-weight="800" fill="${YELLOW}">${zh ? '其他' : 'Other'}</text>
      <text x="1004" y="1318" text-anchor="middle" font-size="36"
        font-weight="400" fill="${YELLOW}">$0.5B</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${icon('googleWordmark', 55, 475, 1.07)}
      ${icon('youtubeWordmark', 56, 772, 0.76)}
      ${icon('googleAdMobWordmark', 28, 906, 0.63)}
      ${icon('googlePlayWordmark', 232, 1033, 0.66)}
      ${icon('googleCloudWordmark', 382, 1210, 0.62)}
    </g>
    ${otherRevenueGuide(zh)}`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q2-fy26',
    name: 'Alphabet - Q2 FY26',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q2 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 166,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2310,
      logoWidth: 250,
      logoHeight: 250,
      logoY: 305,
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
      interfaceAudit: { mode: 'error', fullFaceIds: ['revenue:left'] },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),

    layout: {
      scale: 2.56,
      routes: {
        other_revenue: { x: 964, y: 1344, width: 0, height: 1 },
      },
      nodes: {
        search_advertising: { x: 436, y: 483, width: 71, height: 161 },
        youtube: { x: 436, y: 799, width: 71, height: 27 },
        google_admob: { x: 436, y: 966, width: 71, height: 16 },
        ad_revenue: { x: 802, y: 634, width: 70, height: 209 },
        google_play_devices: { x: 617, y: 1074, width: 70, height: 32 },
        google_cloud: { x: 737, y: 1218, width: 70, height: 62 },
        revenue: { x: 1184, y: 804, width: 70, height: 307 },
        gross_profit: { x: 1557, y: 718, width: 71, height: 189 },
        cost_of_revenue: { x: 1557, y: 1117, width: 71, height: 116 },
        operating_profit: { x: 1931, y: 625, width: 71, height: 104 },
        operating_expenses: { x: 1931, y: 889, width: 71, height: 84 },
        investment_gains: { x: 2139, y: 305, width: 70, height: 252 },
        cost_other: { x: 1751, y: 1151, width: 70, height: 75 },
        tac: { x: 1751, y: 1288, width: 70, height: 40 },
        net_profit: { x: 2304, y: 326, width: 71, height: 288 },
        tax: { x: 2304, y: 700, width: 71, height: 67 },
        rnd: { x: 2304, y: 841, width: 71, height: 45 },
        sm: { x: 2304, y: 1028, width: 71, height: 20 },
        ga: { x: 2304, y: 1196, width: 71, height: 14 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 472, top: 386, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 54, top: 607, anchor: 'start',
              semanticRole: 'source-group',
              lines: [{ text: 'Search advertising', size: 35, weight: 800 }],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 472, top: 702, anchor: 'middle', lineGap: 10,
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
              x: 472, top: 869, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(1%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 995, anchor: 'start',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 837, top: 492, anchor: 'middle', lineGap: 10,
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
              x: 652, top: 976, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 258, top: 1117, anchor: 'start', lineGap: 7,
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
              x: 772, top: 1112, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+82% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 338, top: 1287, anchor: 'start', lineGap: 7,
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
              x: 1219, top: 650, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1593, top: 480, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross', size: 40, weight: 800 },
                { text: 'profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '62% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1593, top: 1253, anchor: 'middle', lineGap: 9,
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
              x: 1967, top: 386, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'profit', size: 39, weight: 800 },
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
              x: 1967, top: 994, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'expenses', size: 39, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        investment_gains: {
          blocks: [
            {
              x: 2174, top: 221, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Investment gains', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        cost_other: {
          blocks: [
            {
              x: 1850, top: 1249, anchor: 'start', lineGap: 9,
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
              x: 1882, top: 1358, anchor: 'start', lineGap: 9,
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
              x: 2490, top: 387, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net', size: 39, weight: 800 },
                { text: 'profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 694, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 823, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '15% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1002, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 1169, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '5% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
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
        value: 0.5,
        valueText: '$0.5B',
        type: 'source',
        labelColor: YELLOW,
      },
    ],

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 63.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 11.1, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 81.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 12.9, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 24.8, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 119.8, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 73.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 45.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 40.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 33.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investment_gains', col: 5, order: 0, type: 'profit', label: 'Investment gains', value: 98.0, valueText: '$98.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 29.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 16.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 112.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 26.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 18.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 8.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 6.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 63.3, sourceWidth: 161, targetWidth: 161, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 11.1, sourceWidth: 27, targetWidth: 27, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.3, sourceWidth: 16, targetWidth: 21, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 81.6, sourceWidth: 209, targetWidth: 209, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 12.9, sourceWidth: 32, targetWidth: 32, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 24.8, sourceWidth: 62, targetWidth: 66, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { sourceRoute: 'other_revenue', target: 'revenue', value: 0.5, sourceWidth: 1, targetWidth: 1, y0: 1344, y1: 1110.5, targetOrder: 3, interactionOnly: true, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 73.9, sourceWidth: 189, targetWidth: 189, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 45.9, sourceWidth: 118, targetWidth: 116, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 40.8, sourceWidth: 104, targetWidth: 104, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 33.1, sourceWidth: 84, targetWidth: 84, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 14.2, sourceWidth: 36, targetWidth: 35, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 26.6, sourceWidth: 68, targetWidth: 67, sourceOrder: 1 },
      { source: 'investment_gains', target: 'net_profit', value: 98.0, sourceWidth: 252, targetWidth: 253, targetOrder: 0 },

      { source: 'cost_of_revenue', target: 'cost_other', value: 29.8, sourceWidth: 75, targetWidth: 75, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 16.1, sourceWidth: 39, targetWidth: 40, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 18.2, sourceWidth: 45, targetWidth: 45, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 8.4, sourceWidth: 22, targetWidth: 20, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 6.5, sourceWidth: 17, targetWidth: 14, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2026 财年第二季度',
        meta: {
          title: 'Alphabet 2026 财年第二季度利润表',
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
          investment_gains: { label: '投资收益' },
          cost_other: { label: '其他' },
          tac: { label: '流量获取成本' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
        layout: {
          labels: {
            youtube: {
              blocks: [
                {
                  x: 480, top: 702, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +13%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2490, top: 387, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净', size: 39, weight: 800 },
                    { text: '利润', size: 39, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
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

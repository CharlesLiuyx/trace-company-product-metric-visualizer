/* ====================================================================
 * Alphabet - Q1 FY23 income statement ($B)
 * Reconstructed from input/processed/alphabet-q1-fy23.png as a fixed
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

  const annotations = (zh = false) => `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${icon('googleGMark', 185, 362, 0.68)}
      ${icon('youtubeWordmark', 56, 745, 0.73)}
      ${icon('googleAdMobWordmark', 31, 934, 0.63)}
      ${icon('googlePlayWordmark', 231, 1070, 0.66)}
      ${icon('googleCloudWordmark', 341, 1236, 0.62)}
    </g>
    <g class="sankey-interactive-annotation" data-node="search_advertising"
       font-family="'Noto Sans',Arial,sans-serif" fill="${BLUE}"
       text-anchor="middle" font-size="35" font-weight="800">
      <text x="276" y="561">${zh ? '搜索' : 'Search'}</text>
      <text x="276" y="614">${zh ? '广告' : 'advertising'}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q1-fy23',
    name: 'Alphabet - Q1 FY23',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q1 FY23 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 203,
      titleSize: 100,
      titleWeight: 800,
      titleTextLength: 2310,
      logoWidth: 250,
      logoHeight: 250,
      logoY: 247,
      logoViewBox: '0 0 256 256',
      logoSvg: '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
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
    annotationsSvg: annotations(false),

    layout: {
      scale: 5.9,
      nodes: {
        search_advertising: { x: 423, y: 382, width: 72, height: 238 },
        youtube: { x: 423, y: 778, width: 72, height: 39 },
        google_admob: { x: 423, y: 965, width: 72, height: 43 },
        ad_revenue: { x: 797, y: 494, width: 72, height: 321 },
        google_play_devices: { x: 607, y: 1108, width: 73, height: 44 },
        google_cloud: { x: 764, y: 1247, width: 73, height: 44 },
        other_revenue: { x: 902, y: 1373, width: 72, height: 2 },
        revenue: { x: 1173, y: 563, width: 72, height: 411 },
        gross_profit: { x: 1540, y: 475, width: 71, height: 231 },
        cost_of_revenue: { x: 1544, y: 916, width: 73, height: 181 },
        operating_profit: { x: 1926, y: 418, width: 72, height: 102 },
        operating_expenses: { x: 1925, y: 635, width: 73, height: 128 },
        other_income: { x: 2173, y: 485, width: 72, height: 4 },
        tac: { x: 1807, y: 977, width: 73, height: 69 },
        cost_other: { x: 1812, y: 1143, width: 73, height: 111 },
        net_profit: { x: 2292, y: 338, width: 72, height: 88 },
        tax: { x: 2291, y: 636, width: 73, height: 18 },
        rnd: { x: 2291, y: 787, width: 73, height: 67 },
        sm: { x: 2291, y: 1045, width: 73, height: 38 },
        ga: { x: 2291, y: 1268, width: 73, height: 22 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 459, top: 292, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 459, top: 688, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_admob: {
          blocks: [
            {
              x: 459, top: 877, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(8%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 1011, anchor: 'start',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 833, top: 348, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Ad Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(0%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_play_devices: {
          blocks: [
            {
              x: 644, top: 1020, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 256, top: 1166, anchor: 'start', lineGap: 7,
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
              x: 801, top: 1160, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+28% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 357, top: 1312, anchor: 'start', lineGap: 7,
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
              x: 938, top: 1322, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
            },
            {
              x: 873, top: 1355, anchor: 'end',
              lines: [{ text: 'Other', size: 32, weight: 800, color: YELLOW }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1209, top: 422, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1576, top: 293, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '56% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1581, top: 1119, anchor: 'middle', lineGap: 9,
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
              x: 1962, top: 239, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '25% margin', size: 28, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1962, top: 787, anchor: 'middle', lineGap: 9,
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
              x: 2209, top: 506, anchor: 'middle', lineGap: 10,
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
              x: 1972, top: 1169, anchor: 'middle', lineGap: 9,
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
              x: 1964, top: 981, anchor: 'middle', lineGap: 9,
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
              x: 2385, top: 309, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '22% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 611, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 783, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '16% of revenue', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2478, top: 1037, anchor: 'middle', lineGap: 9,
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
              x: 2478, top: 1238, anchor: 'middle', lineGap: 9,
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
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 40.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 6.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 54.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 7.4, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 7.5, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.4, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 69.8, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 39.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 30.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 17.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 21.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tac', col: 5, order: 1, type: 'cost', label: 'TAC', value: 11.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_other', col: 5, order: 2, type: 'cost', label: 'Other', value: 18.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 15.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 11.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 6.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 3.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 40.3, width: 238, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 6.7, width: 39, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.5, width: 43, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 54.5, width: 321, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 7.4, width: 44, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 7.5, width: 44, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.4, width: 2, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 39.2, width: 231, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 30.6, width: 180, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 17.4, width: 102, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 21.8, width: 128, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 14.3, width: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3.1, width: 18, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 0.8, width: 4, targetOrder: 1 },

      { source: 'cost_of_revenue', target: 'tac', value: 11.7, width: 69, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cost_other', value: 18.9, width: 111, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 11.5, width: 67, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.3, width: 38, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 3.8, width: 22, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2023 财年第一季度',
        meta: {
          title: 'Alphabet 2023 财年第一季度利润表',
        },
        annotationsSvg: annotations(true),
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
        layout: {
          labels: {
            tac: {
              blocks: [
                {
                  x: 1990, top: 981, anchor: 'middle', lineGap: 9,
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

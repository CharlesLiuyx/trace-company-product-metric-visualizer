/* Alphabet Q4 FY23 income statement: measured fixed-layout d3 Sankey. */
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
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const RIGHT_LABEL_X = 2490;
  const icon = (name, x, y, scale) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${ICONS[name] || ''}</g>`;
  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 9, semanticRole = '') => ({
    x,
    top,
    anchor,
    lineGap,
    ...(semanticRole ? { semanticRole } : {}),
    lines,
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q4-fy23',
    name: 'Alphabet - Q4 FY23',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q4 FY23 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/alphabet-q4-fy23.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 166,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2310,
      logoWidth: 250,
      logoHeight: 250,
      logoY: 247,
      logoViewBox: '0 0 256 256',
      logoSvg: ICONS.googleGMark || '',
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
    annotationsSvg: `
      <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
        ${icon('youtubeWordmark', 55, 692, 0.76)}
        ${icon('googleAdMobWordmark', 28, 903, 0.63)}
        ${icon('googlePlayWordmark', 253, 1030, 0.66)}
        ${icon('googleCloudWordmark', 421, 1215, 0.62)}
      </g>`,
    layout: {
      scale: 4.13,
      nodes: {
        search_advertising: { x: 424, y: 365, width: 74, height: 200 },
        youtube: { x: 424, y: 722, width: 74, height: 39 },
        google_admob: { x: 424, y: 921, width: 74, height: 35 },
        ad_revenue: { x: 798, y: 512, width: 74, height: 273 },
        google_play_devices: { x: 625, y: 1053, width: 74, height: 45 },
        google_cloud: { x: 848, y: 1223, width: 74, height: 39 },
        other_revenue: { x: 1000, y: 1356, width: 74, height: 1 },
        revenue: { x: 1167, y: 640, width: 74, height: 357 },
        gross_profit: { x: 1546, y: 522, width: 74, height: 201 },
        cost_of_revenue: { x: 1546, y: 954, width: 74, height: 156 },
        operating_profit: { x: 1917, y: 430, width: 74, height: 98 },
        operating_expenses: { x: 1917, y: 699, width: 74, height: 103 },
        other_income: { x: 2180, y: 477, width: 74, height: 2 },
        cost_other: { x: 1764, y: 997, width: 74, height: 98 },
        tac: { x: 1769, y: 1204, width: 74, height: 58 },
        net_profit: { x: 2292, y: 334, width: 74, height: 85 },
        tax: { x: 2292, y: 650, width: 74, height: 16 },
        rnd: { x: 2292, y: 796, width: 74, height: 51 },
        sm: { x: 2292, y: 1028, width: 74, height: 31 },
        ga: { x: 2292, y: 1252, width: 74, height: 22 },
      },
      labels: {
        search_advertising: {
          blocks: [
            block(461, 278, 'middle', [line('$value', 38), line('+13% Y/Y', 28, 400, NOTE)]),
            block(278, 472, 'middle', [line('Search', 38, 800), line('advertising', 38, 800)], 9, 'source-group'),
          ],
        },
        youtube: {
          blocks: [block(461, 634, 'middle', [line('$value', 38), line('+16% Y/Y', 28, 400, NOTE)])],
        },
        google_admob: {
          blocks: [
            block(461, 833, 'middle', [line('$value', 38), line('(20%) Y/Y', 28, 400, NOTE)]),
            block(28, 980, 'start', [line('+ AdSense & Google Ad Manager', 27, 400, NOTE)]),
          ],
        },
        ad_revenue: {
          blocks: [
            block(835, 370, 'middle', [
              line('Ad Revenue', 40, 800),
              line('$value', 39),
              line('+11% Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        google_play_devices: {
          blocks: [
            block(660, 965, 'middle', [line('$value', 38, 400, YELLOW), line('+23% Y/Y', 28, 400, NOTE)]),
            block(280, 1116, 'start', [
              line('+ Fitbit, Google Nest, Pixel,', 27, 400, NOTE),
              line('YouTube Premium & TV', 27, 400, NOTE),
            ], 7),
          ],
        },
        google_cloud: {
          blocks: [
            block(913, 1136, 'middle', [line('$value', 38, 400, YELLOW), line('+26% Y/Y', 28, 400, NOTE)]),
            block(465, 1287, 'start', [
              line('+ Workspace, Enterprise Android', 27, 400, NOTE),
              line('Chrome OS, Other APIs', 27, 400, NOTE),
            ], 7),
          ],
        },
        other_revenue: {
          blocks: [
            block(1033, 1297, 'middle', [line('$value', 36, 400, YELLOW)]),
            block(961, 1330, 'end', [line('Other', 38, 800, YELLOW)]),
          ],
        },
        revenue: {
          blocks: [
            block(1204, 497, 'middle', [
              line('Revenue', 40, 800),
              line('$value', 39),
              line('+13% Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        gross_profit: {
          blocks: [
            block(1583, 343, 'middle', [
              line('Gross Profit', 40, 800),
              line('$value', 39),
              line('56% margin', 28, 400, NOTE),
              line('+3pp Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        cost_of_revenue: {
          blocks: [
            block(1583, 1130, 'middle', [
              line('Cost of', 39, 800),
              line('revenues', 39, 800),
              line('$value', 37),
            ]),
          ],
        },
        operating_profit: {
          blocks: [
            block(1954, 248, 'middle', [
              line('Operating profit', 39, 800),
              line('$value', 39),
              line('27% margin', 28, 400, NOTE),
              line('+4pp Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        operating_expenses: {
          blocks: [
            block(1954, 815, 'middle', [
              line('Operating', 39, 800),
              line('expenses', 39, 800),
              line('$value', 37),
            ]),
          ],
        },
        other_income: {
          blocks: [
            block(2215, 488, 'middle', [line('Other', 31, 800), line('$value', 30)]),
          ],
        },
        cost_other: {
          blocks: [
            block(1945, 1009, 'middle', [line('Other', 31, 800), line('$value', 30)]),
          ],
        },
        tac: {
          blocks: [block(1930, 1192, 'middle', [line('TAC', 31, 800), line('$value', 30)])],
        },
        net_profit: {
          blocks: [
            block(2389, 326, 'start', [
              line('Net profit', 39, 800),
              line('$value', 39),
              line('24% margin', 28, 400, NOTE),
              line('+6pp Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        tax: {
          blocks: [block(RIGHT_LABEL_X, 626, 'middle', [line('Tax', 31, 800), line('$value', 30)])],
        },
        rnd: {
          blocks: [
            block(RIGHT_LABEL_X, 789, 'middle', [
              line('R&D', 31, 800),
              line('$value', 30),
              line('14% of revenue', 27, 400, NOTE),
            ]),
          ],
        },
        sm: {
          blocks: [
            block(RIGHT_LABEL_X, 999, 'middle', [
              line('S&M', 31, 800),
              line('$value', 30),
              line('9% of revenue', 27, 400, NOTE),
            ]),
          ],
        },
        ga: {
          blocks: [
            block(RIGHT_LABEL_X, 1233, 'middle', [
              line('G&A', 31, 800),
              line('$value', 30),
              line('6% of revenue', 27, 400, NOTE),
            ]),
          ],
        },
      },
    },
    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 48.0, valueText: '$48.0B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 9.2, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 8.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 65.5, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 10.8, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 9.2, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.8, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 86.3, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 48.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 37.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 23.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 25.0, valueText: '($25.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 23.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 14.0, valueText: '($14.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 20.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 3.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 12.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 7.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 5.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 48.0, width: 200, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 9.2, width: 38, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 8.3, width: 35, targetOrder: 2 },
      { source: 'ad_revenue', target: 'revenue', value: 65.5, width: 273, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 10.8, width: 45, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 9.2, width: 38, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.8, width: 1, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 48.7, width: 201, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 37.6, width: 156, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 23.7, width: 98, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 25.0, width: 103, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 20.0, width: 83, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3.7, width: 15, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 0.7, width: 2, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'cost_other', value: 23.6, width: 98, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 14.0, width: 58, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 12.1, width: 50, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.7, width: 31, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 5.2, width: 22, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2023 财年第四季度',
        meta: { title: 'Alphabet 2023 财年第四季度利润表' },
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
                block(1930, 1192, 'middle', [
                  line('流量获取成本', 27, 800),
                  line('$value', 30),
                ]),
              ],
            },
          },
        },
      },
    },
  });
})();

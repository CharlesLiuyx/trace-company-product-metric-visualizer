/* Alphabet Q3 FY25 income statement ($B), measured from the Build Source. */
(function () {
  const BG = '#f2f2f2';
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
  const RIGHT_LABEL_X = 2494;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  function annotations(zh) {
    return `
      <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
        ${icon('googleWordmark', 55, 431, 1.07)}
        ${icon('youtubeWordmark', 56, 760, 0.76)}
        ${icon('googleAdMobWordmark', 28, 903, 0.63)}
        ${icon('googlePlayWordmark', 283, 1042, 0.66)}
        ${icon('googleCloudWordmark', 403, 1214, 0.62)}
      </g>
      <g class="sankey-interactive-annotation" data-node="search_advertising">
        <text x="54" y="586" text-anchor="start" font-size="35" font-weight="800" fill="${BLUE}">${zh ? '搜索广告' : 'Search advertising'}</text>
      </g>
      `;
  }

  function fixedLabels(zh) {
    const t = (en, cn) => (zh ? cn : en);
    return {
      search_advertising: {
        blocks: [
          {
            x: 474, top: 326, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: t('+15% Y/Y', '同比 +15%'), size: 28, weight: 400, color: NOTE },
            ],
          },
        ],
      },
      youtube: {
        blocks: [{
          x: 474, top: 665, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: t('+15% Y/Y', '同比 +15%'), size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      google_admob: {
        blocks: [
          {
            x: 474, top: 845, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: t('(3%) Y/Y', '同比 (3%)'), size: 28, weight: 400, color: NOTE },
            ],
          },
          {
            x: 28, top: 957, anchor: 'start', semanticRole: 'note',
            lines: [{ text: t('+ AdSense & Google Ad Manager', '+ AdSense 与 Google 广告管理平台'), size: 27, weight: 400, color: NOTE }],
          },
        ],
      },
      ad_revenue: {
        blocks: [{
          x: 849, top: 404, anchor: 'middle', lineGap: 10,
          lines: [
            { text: t('Ad Revenue', '广告收入'), size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t('+13% Y/Y', '同比 +13%'), size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      google_play_devices: {
        blocks: [
          {
            x: 714, top: 988, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$value', size: 38, weight: 400, color: YELLOW },
              { text: t('+21% Y/Y', '同比 +21%'), size: 28, weight: 400, color: NOTE },
            ],
          },
          {
            x: 309, top: 1117, anchor: 'start', lineGap: 7, semanticRole: 'note',
            lines: [
              { text: t('+ Fitbit, Google Nest, Pixel,', '+ Fitbit、Google Nest、Pixel、'), size: 27, weight: 400, color: NOTE },
              { text: t('YouTube Premium & TV', 'YouTube Premium 与电视'), size: 27, weight: 400, color: NOTE },
            ],
          },
        ],
      },
      google_cloud: {
        blocks: [
          {
            x: 866, top: 1138, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$value', size: 38, weight: 400, color: YELLOW },
              { text: t('+34% Y/Y', '同比 +34%'), size: 28, weight: 400, color: NOTE },
            ],
          },
          {
            x: 417, top: 1297, anchor: 'start', lineGap: 7, semanticRole: 'note',
            lines: [
              { text: t('+ Workspace, Enterprise Android', '+ Workspace、企业 Android'), size: 27, weight: 400, color: NOTE },
              { text: t('Chrome OS, Other APIs', 'Chrome OS 与其他 API'), size: 27, weight: 400, color: NOTE },
            ],
          },
        ],
      },
      other_revenue: {
        blocks: [
          {
            x: 1031, top: 1330, anchor: 'middle',
            lines: [{ text: '$value', size: 36, weight: 400, color: YELLOW }],
          },
          {
            x: 863, top: 1361, anchor: 'start',
            lines: [{ text: t('Other', '其他'), size: 38, weight: 800, color: YELLOW }],
          },
        ],
      },
      revenue: {
        blocks: [{
          x: 1221, top: 507, anchor: 'middle', lineGap: 10,
          lines: [
            { text: t('Revenue', '收入'), size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t('+16% Y/Y', '同比 +16%'), size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      gross_profit: {
        blocks: [{
          x: 1596, top: 374, anchor: 'middle', lineGap: 10,
          lines: [
            { text: t('Gross profit', '毛利润'), size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t('60% margin', '利润率 60%'), size: 28, weight: 400, color: NOTE },
            { text: t('+1pp Y/Y', '同比 +1 个百分点'), size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      cost_of_revenue: {
        blocks: [{
          x: 1596, top: 1132, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('Cost of', '收入'), size: 39, weight: 800 },
            { text: t('revenues', '成本'), size: 39, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ],
        }],
      },
      operating_profit: {
        blocks: [{
          x: 1969, top: 280, anchor: 'middle', lineGap: 10,
          lines: [
            { text: t('Operating profit', '营业利润'), size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t('31% margin', '利润率 31%'), size: 28, weight: 400, color: NOTE },
            { text: t('(2pp) Y/Y', '同比 (2 个百分点)'), size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      operating_expenses: {
        blocks: [{
          x: 1969, top: 856, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('Operating', '运营'), size: 39, weight: 800 },
            { text: t('expenses', '费用'), size: 39, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ],
        }],
      },
      other_income: {
        blocks: [{
          x: 2230, top: 214, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('Other', '其他'), size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        }],
      },
      cost_other: {
        blocks: [{
          x: 1918, top: 1020, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('Other', '其他'), size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        }],
      },
      tac: {
        blocks: [{
          x: zh ? 1960 : 1918, top: 1181, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('TAC', '流量获取成本'), size: zh ? 24 : 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        }],
      },
      net_profit: {
        blocks: [{
          x: 2498, top: 332, anchor: 'middle', lineGap: 10,
          lines: [
            { text: t('Net profit', '净利润'), size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: t('34% margin', '利润率 34%'), size: 28, weight: 400, color: NOTE },
            { text: t('+4pp Y/Y', '同比 +4 个百分点'), size: 28, weight: 400, color: NOTE },
          ],
        }],
      },
      tax: {
        blocks: [{
          x: RIGHT_LABEL_X, top: 622, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('Tax', '税费'), size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ],
        }],
      },
      rnd: {
        blocks: [{
          x: RIGHT_LABEL_X, top: 816, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('R&D', '研发'), size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: t('15% of revenue', '占收入 15%'), size: 27, weight: 400, color: NOTE },
            { text: t('+1pp Y/Y', '同比 +1 个百分点'), size: 27, weight: 400, color: NOTE },
          ],
        }],
      },
      ga: {
        blocks: [{
          x: RIGHT_LABEL_X, top: 1005, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('G&A', '管理费用'), size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: t('7% of revenue', '占收入 7%'), size: 27, weight: 400, color: NOTE },
            { text: t('+3pp Y/Y', '同比 +3 个百分点'), size: 27, weight: 400, color: NOTE },
          ],
        }],
      },
      sm: {
        blocks: [{
          x: RIGHT_LABEL_X, top: 1190, anchor: 'middle', lineGap: 9,
          lines: [
            { text: t('S&M', '销售与市场'), size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
            { text: t('7% of revenue', '占收入 7%'), size: 27, weight: 400, color: NOTE },
            { text: t('(1pp) Y/Y', '同比 (1 个百分点)'), size: 27, weight: 400, color: NOTE },
          ],
        }],
      },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q3-fy25',
    name: 'Alphabet · Q3 FY25',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q3-fy25.png', width: 2667, height: 1500 },
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
      background: BG,
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
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 3.6,
      nodes: {
        search_advertising: { x: 437, y: 416, width: 74, height: 203 },
        youtube: { x: 437, y: 755, width: 74, height: 35 },
        google_admob: { x: 437, y: 933, width: 74, height: 24 },
        ad_revenue: { x: 811, y: 549, width: 74, height: 266 },
        google_play_devices: { x: 678, y: 1079, width: 74, height: 45 },
        google_cloud: { x: 831, y: 1229, width: 74, height: 53 },
        other_revenue: { x: 991, y: 1383, width: 76, height: 2 },
        revenue: { x: 1185, y: 650, width: 74, height: 369 },
        gross_profit: { x: 1558, y: 556, width: 74, height: 219 },
        cost_of_revenue: { x: 1558, y: 962, width: 74, height: 147 },
        operating_profit: { x: 1932, y: 463, width: 74, height: 111 },
        operating_expenses: { x: 1932, y: 735, width: 74, height: 105 },
        other_income: { x: 2195, y: 301, width: 74, height: 44 },
        cost_other: { x: 1782, y: 1009, width: 74, height: 93 },
        tac: { x: 1785, y: 1188, width: 74, height: 51 },
        net_profit: { x: 2305, y: 325, width: 74, height: 124 },
        tax: { x: 2305, y: 630, width: 74, height: 31 },
        rnd: { x: 2305, y: 823, width: 74, height: 52 },
        ga: { x: 2305, y: 1034, width: 74, height: 25 },
        sm: { x: 2305, y: 1214, width: 74, height: 24 },
      },
      labels: fixedLabels(false),
    },
    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 56.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 10.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 74.2, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 12.9, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 15.2, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.1, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 102.3, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 61.0, valueText: '$61.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 41.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 31.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 29.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 12.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 26.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 14.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 35.0, valueText: '$35.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 9.0, valueText: '($9.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 15.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 3, type: 'cost', label: 'G&A', value: 7.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 4, type: 'cost', label: 'S&M', value: 7.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 56.6, sourceWidth: 203, targetWidth: 203, y0: 517.5, y1: 650.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 10.3, sourceWidth: 35, targetWidth: 35, y0: 772.5, y1: 769.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.4, sourceWidth: 24, targetWidth: 28, y0: 945, y1: 801, sourceOrder: 0, targetOrder: 2 },
      { source: 'ad_revenue', target: 'revenue', value: 74.2, sourceWidth: 266, targetWidth: 266, y0: 682, y1: 783, sourceOrder: 0, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 12.9, sourceWidth: 45, targetWidth: 47, y0: 1101.5, y1: 939.5, sourceOrder: 0, targetOrder: 1, linkTint: YELLOW_LINK },
      { source: 'google_cloud', target: 'revenue', value: 15.2, sourceWidth: 53, targetWidth: 55, y0: 1255.5, y1: 990.5, sourceOrder: 0, targetOrder: 2, linkTint: YELLOW_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 1384, y1: 1018.5, sourceOrder: 0, targetOrder: 3, linkTint: YELLOW_LINK },
      { source: 'revenue', target: 'gross_profit', value: 61.0, sourceWidth: 219, targetWidth: 219, y0: 759.5, y1: 665.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 41.4, sourceWidth: 150, targetWidth: 147, y0: 944, y1: 1035.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 31.2, sourceWidth: 111, targetWidth: 111, y0: 611.5, y1: 518.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 29.7, sourceWidth: 108, targetWidth: 105, y0: 721, y1: 787.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 22.2, sourceWidth: 80, targetWidth: 80, y0: 503, y1: 409, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 9.0, sourceWidth: 31, targetWidth: 31, y0: 558.5, y1: 645.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 12.8, sourceWidth: 44, targetWidth: 44, y0: 323, y1: 347, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'cost_of_revenue', target: 'cost_other', value: 26.5, sourceWidth: 93, targetWidth: 93, y0: 1008.5, y1: 1055.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 14.9, sourceWidth: 54, targetWidth: 51, y0: 1082, y1: 1213.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 15.2, sourceWidth: 52, targetWidth: 52, y0: 761, y1: 849, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 7.4, sourceWidth: 27, targetWidth: 25, y0: 800.5, y1: 1046.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.2, sourceWidth: 26, targetWidth: 24, y0: 827, y1: 1226, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['o', 'g', 'l', 'e'],
      zh: {
        name: 'Alphabet · 2025 财年第三季度',
        meta: { title: 'Alphabet 2025 财年第三季度利润表' },
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
          ga: { label: '管理费用' },
          sm: { label: '销售与市场' },
        },
        layout: { labels: fixedLabels(true) },
      },
    },
  });
})();

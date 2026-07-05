/* ====================================================================
 *  Spotify - Q1 FY26 income statement (EUR B)
 *  Reconstructed from input/processed/spotify-q1-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text Spotify annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#0a0a0a';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#818181';
  const WHITE = '#ffffff';
  const SPGREEN = '#1ed760';
  const RIGHT_LABEL_X = 2508;

  // Spotify sound-wave glyph: three convex-up arcs, widest on top.
  const waves = (cx, cy, r, color) => `
    <path d="M ${cx - 0.62 * r} ${cy - 0.02 * r} Q ${cx} ${cy - 0.36 * r} ${cx + 0.62 * r} ${cy - 0.02 * r}" fill="none" stroke="${color}" stroke-width="${0.135 * r}" stroke-linecap="round"/>
    <path d="M ${cx - 0.50 * r} ${cy + 0.17 * r} Q ${cx} ${cy - 0.13 * r} ${cx + 0.50 * r} ${cy + 0.17 * r}" fill="none" stroke="${color}" stroke-width="${0.115 * r}" stroke-linecap="round"/>
    <path d="M ${cx - 0.37 * r} ${cy + 0.34 * r} Q ${cx} ${cy + 0.11 * r} ${cx + 0.37 * r} ${cy + 0.34 * r}" fill="none" stroke="${color}" stroke-width="${0.095 * r}" stroke-linecap="round"/>`;

  // Spotify app icon: black rounded square, green disc, black waves.
  const appIcon = `
    <rect x="0" y="0" width="231" height="231" rx="52" fill="${BLACK}"/>
    <circle cx="115.5" cy="115.5" r="90" fill="${SPGREEN}"/>
    ${waves(115.5, 122, 90, BLACK)}`;

  const kpiCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1163" width="${width}" height="147" rx="30" fill="${BLACK}"/>
      <text x="${x + width / 2}" y="1214" text-anchor="middle" font-size="29" font-weight="800" fill="${WHITE}">${title}</text>
      <text x="${x + width / 2}" y="1256" text-anchor="middle" font-size="36" font-weight="500" fill="${WHITE}">${value}</text>
      <text x="${x + width / 2}" y="1293" text-anchor="middle" font-size="28" font-weight="500" fill="${WHITE}">${note}</text>
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g>
        <circle cx="118" cy="691" r="45" fill="${BLACK}"/>
        ${waves(118, 694, 45, SPGREEN)}
        <text x="176" y="688" font-size="47" font-weight="800" fill="${BLACK}">Spotify</text>
        <text x="176" y="729" font-size="47" font-weight="800" fill="${BLACK}">Premium</text>
        <text x="232" y="775" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}">${L.pNote1}</text>
        <text x="233" y="813" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}">${L.pNote2}</text>
      </g>
      <g>
        <circle cx="60" cy="1039" r="27" fill="${BLACK}"/>
        ${waves(60, 1041, 27, SPGREEN)}
        <text x="104" y="1053" font-size="30" font-weight="800" fill="${BLACK}">Spotify</text>
        <text x="224" y="1053" font-size="30" font-weight="500" fill="${BLACK}">Advertising</text>
        <text x="233" y="1096" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}">${L.aNote1}</text>
        <text x="233" y="1134" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}">${L.aNote2}</text>
      </g>
      ${kpiCard(31, 208, L.mauT, '761M', L.mauY)}
      ${kpiCard(254, 329, L.subsT, '293M', L.subsY)}
      ${kpiCard(598, 378, L.adT, '483M', L.adY)}
      <text x="300" y="1384" text-anchor="middle" font-size="36" font-weight="500" fill="${NOTE}">${L.foot}</text>
    </g>`;

  const annotationsEn = annotations({
    pNote1: '35% gross margin',
    pNote2: '+1pp Y/Y',
    aNote1: '13% gross margin',
    aNote2: '(1pp) Y/Y',
    mauT: 'MAU',
    mauY: '+12% Y/Y',
    subsT: 'Premium Subs',
    subsY: '+9% Y/Y',
    adT: 'Ad-supported MAUs',
    adY: '+14% Y/Y',
    foot: 'MAU = Monthly Active Users',
  });

  const annotationsZh = annotations({
    pNote1: '35% 毛利率',
    pNote2: '同比 +1 个百分点',
    aNote1: '13% 毛利率',
    aNote2: '同比 (1 个百分点)',
    mauT: 'MAU',
    mauY: '同比 +12%',
    subsT: '付费订阅',
    subsY: '同比 +9%',
    adT: '广告支持 MAU',
    adY: '同比 +14%',
    foot: 'MAU = 月活跃用户',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'spotify-q1-fy26',
    name: 'Spotify · Q1 FY26',
    company: 'Spotify',
    meta: {
      company: 'Spotify',
      title: 'Spotify Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/spotify-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2155,
      periodX: -3000,
      periodY: -3000,
      logoWidth: 231,
      logoHeight: 231,
      logoY: 238,
      logoViewBox: '0 0 231 231',
      logoSvg: appIcon,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 88.7,
      nodes: {
        premium: { x: 423, y: 533, width: 72, height: 365 },
        advertising: { x: 423, y: 1096, width: 72, height: 33 },
        revenue: { x: 890, y: 639, width: 72, height: 398 },
        gross_profit: { x: 1357, y: 534, width: 73, height: 130 },
        cost_of_revenue: { x: 1357, y: 856, width: 73, height: 268 },
        operating_profit: { x: 1824, y: 439, width: 73, height: 62 },
        operating_expenses: { x: 1824, y: 696, width: 73, height: 68 },
        interest: { x: 2170, y: 430, width: 72, height: 18 },
        net_profit: { x: 2292, y: 339, width: 72, height: 62 },
        tax: { x: 2292, y: 597, width: 72, height: 18 },
        sm: { x: 2292, y: 774, width: 72, height: 31 },
        rnd: { x: 2292, y: 994, width: 72, height: 28 },
        ga: { x: 2292, y: 1214, width: 72, height: 9 },
      },
      labels: {
        premium: {
          blocks: [
            {
              x: 458, top: 430, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 41, weight: 400, color: BLACK },
                { text: '+10% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 458, top: 992, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 41, weight: 400, color: BLACK },
                { text: '(5%) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 926, top: 488, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 41, weight: 800, color: BLACK },
                { text: '$value', size: 41, weight: 400, color: BLACK },
                { text: '+8% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1393, top: 341, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 41, weight: 800 },
                { text: '$value', size: 41, weight: 400 },
                { text: '33% margin', size: 30, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1393, top: 1136, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1861, top: 245, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 41, weight: 800 },
                { text: '$value', size: 41, weight: 400 },
                { text: '16% margin', size: 30, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1861, top: 779, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2206, top: 461, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Interest', size: 34, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 300, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Net profit', size: 37, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
                { text: '16% margin', size: 30, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 563, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 37, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 729, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Sales &', size: 36, weight: 800 },
                { text: 'Marketing', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '8% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 959, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'R&D', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '7% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1146, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'General', size: 36, weight: 800 },
                { text: '& Admin', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '2% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'premium', col: 0, order: 0, type: 'source',
        label: 'Spotify Premium', value: 4.1, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'advertising', col: 0, order: 1, type: 'source',
        label: 'Spotify Advertising', value: 0.4, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 4.5, color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 1.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 3.0, valueText: '(€3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 0.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest', col: 4, order: 0, type: 'profit',
        label: 'Interest', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 0.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: ['Sales &', 'Marketing'], value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: ['General', '& Admin'], value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'premium', target: 'revenue', value: 4.1, width: 365 },
      { source: 'advertising', target: 'revenue', value: 0.4, width: 33 },

      { source: 'revenue', target: 'gross_profit', value: 1.5, width: 130 },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.0, width: 268 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.7, width: 62 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.8, width: 68 },

      { source: 'operating_profit', target: 'net_profit', value: 0.5, width: 44, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 18, sourceOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 0.2, width: 18, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 0.3, width: 31, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, width: 28, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.1, width: 9, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['Premium', 'Advertising', 'MAU'],
      zh: {
        name: 'Spotify · 2026 财年第一季度',
        meta: {
          title: 'Spotify 2026 财年第一季度利润表',
          titleTextLength: 1740,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          premium: { label: 'Spotify Premium' },
          advertising: { label: 'Spotify Advertising' },
          revenue: { label: '收入' },
          gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          sm: { label: '销售与市场' },
          rnd: { label: '研发' },
          ga: { label: '一般及行政' },
        },
        layout: {
          labels: {
            premium: {
              blocks: [
                {
                  x: 458, top: 430, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '$value', size: 41, weight: 400, color: BLACK },
                    { text: '同比 +10%', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            advertising: {
              blocks: [
                {
                  x: 458, top: 992, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '$value', size: 41, weight: 400, color: BLACK },
                    { text: '同比 (5%)', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 926, top: 488, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 41, weight: 800, color: BLACK },
                    { text: '$value', size: 41, weight: 400, color: BLACK },
                    { text: '同比 +8%', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1393, top: 341, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '毛利润', size: 41, weight: 800 },
                    { text: '$value', size: 41, weight: 400 },
                    { text: '利润率 33%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1393, top: 1136, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '成本', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1861, top: 245, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业利润', size: 41, weight: 800 },
                    { text: '$value', size: 41, weight: 400 },
                    { text: '利润率 16%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +4 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1861, top: 779, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '运营', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2206, top: 461, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '利息', size: 34, weight: 800 },
                    { text: '$value', size: 33, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 300, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '净利润', size: 37, weight: 800 },
                    { text: '$value', size: 37, weight: 400 },
                    { text: '利润率 16%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 563, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 37, weight: 800 },
                    { text: '$value', size: 37, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 729, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '销售与', size: 36, weight: 800 },
                    { text: '市场营销', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '占收入 8%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 959, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '研发', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '占收入 7%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1146, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '一般及', size: 36, weight: 800 },
                    { text: '行政', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '占收入 2%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 30, weight: 400, color: NOTE },
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

/* ====================================================================
 *  Lyft - FY25 income statement ($M)
 *  Reconstructed from input/processed/lyft-fy25.png as a fixed d3-sankey
 *  layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const PINK = '#ff00bf';
  const PINK_LINK = '#ea78d1';
  const GREEN = '#27a22a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccc9a';
  const RED = '#d50000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#df8082';
  const NOTE = '#6a6a6a';
  const RIGHT_LABEL_X = 2330;

  const lyftLogo = `
    <rect x="0" y="0" width="205" height="205" rx="43" fill="${PINK}"/>
    <text x="102.5" y="134" text-anchor="middle" font-family="Arial Rounded MT Bold, Arial, sans-serif" font-size="94" font-weight="900" fill="#ffffff"
      textLength="158" lengthAdjust="spacingAndGlyphs">lyft</text>
  `;

  const carIcon = (x, y) => `
    <g transform="translate(${x} ${y})">
      <ellipse cx="138" cy="112" rx="138" ry="20" fill="#d8d8d8" opacity="0.42"/>
      <path d="M21 82 C45 39 106 20 175 26 C213 30 245 51 266 86 L282 105 L274 117 L252 117 C249 95 234 81 213 81 C193 81 178 95 174 117 L89 117 C85 96 69 82 48 82 C29 82 13 96 9 117 L0 117 L0 101 C0 92 8 85 21 82 Z" fill="#f8f8f8"/>
      <path d="M54 50 C83 30 146 26 184 39 C203 45 219 60 230 82 L61 82 C55 69 52 58 54 50 Z" fill="#74129b"/>
      <path d="M63 54 C89 38 142 36 174 45 C189 49 202 60 211 75 L66 75 C62 67 61 59 63 54 Z" fill="#a026be"/>
      <circle cx="49" cy="118" r="23" fill="#20212f"/>
      <circle cx="213" cy="118" r="24" fill="#20212f"/>
      <circle cx="49" cy="118" r="13" fill="#c7c7c7"/>
      <circle cx="213" cy="118" r="13" fill="#c7c7c7"/>
      <path d="M260 91 C277 94 289 99 294 107 L279 111 L270 103 Z" fill="#eeeeee"/>
      <path d="M18 88 C45 85 76 86 101 93" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
    </g>`;

  const phone = (x, y, angle, fill) => `
    <g transform="translate(${x} ${y}) rotate(${angle})">
      <rect x="0" y="0" width="76" height="154" rx="12" fill="#1a1a1a"/>
      <rect x="7" y="9" width="62" height="136" rx="7" fill="${fill}"/>
      <rect x="22" y="16" width="32" height="3" rx="1.5" fill="#d8d8d8"/>
      <rect x="17" y="31" width="42" height="8" rx="3" fill="#ffffff"/>
      <rect x="17" y="45" width="42" height="8" rx="3" fill="#ffffff"/>
      <rect x="17" y="59" width="42" height="8" rx="3" fill="#ffffff"/>
      <rect x="18" y="78" width="40" height="12" rx="6" fill="#8c35ee"/>
      <circle cx="38" cy="129" r="9" fill="#8c35ee" opacity="0.65"/>
    </g>`;

  const phonesIcon = (x, y) => `
    <g transform="translate(${x} ${y})">
      ${phone(0, 9, -2, '#f8f8f8')}
      <g transform="translate(87 0) rotate(4)">
        <rect x="0" y="0" width="86" height="163" rx="12" fill="#1b1b1b"/>
        <rect x="8" y="9" width="70" height="145" rx="7" fill="#ecf4ee"/>
        <path d="M12 34 C34 20 51 53 73 42" fill="none" stroke="#80b77c" stroke-width="7" opacity="0.8"/>
        <path d="M10 74 C29 58 46 89 75 71" fill="none" stroke="#7fb4e0" stroke-width="6" opacity="0.85"/>
        <path d="M21 115 L64 93" stroke="#b071d2" stroke-width="5" stroke-linecap="round"/>
        <circle cx="31" cy="68" r="5" fill="#ff4dc4"/>
        <circle cx="54" cy="108" r="5" fill="#8c35ee"/>
        <rect x="17" y="129" width="50" height="9" rx="4" fill="#ffffff"/>
      </g>
    </g>`;

  const kpiCard = (x, width, title, value, note, titleSize = 30) => `
    <g>
      <rect x="${x}" y="1202" width="${width}" height="147" rx="29" fill="#000000"/>
      <text x="${x + width / 2}" y="1254" text-anchor="middle" font-size="${titleSize}" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1294" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1326" text-anchor="middle" font-size="22" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${carIcon(30, 578)}
      <text x="89" y="767" font-size="40" font-weight="800" fill="#000000">Rideshare</text>
      ${phonesIcon(91, 907)}
      <text x="112" y="1130" font-size="40" font-weight="800" fill="#000000">Rentals</text>
      ${kpiCard(31, 309, 'Active Riders', '29.2M', '+18% Y/Y')}
      ${kpiCard(353, 169, 'Ride', '946M', '+14% Y/Y')}
      ${kpiCard(536, 332, 'Gross Bookings', '$18.5B', '+15% Y/Y', 29)}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${carIcon(30, 578)}
      <text x="112" y="767" font-size="40" font-weight="800" fill="#000000">网约车</text>
      ${phonesIcon(91, 907)}
      <text x="112" y="1130" font-size="40" font-weight="800" fill="#000000">租赁</text>
      ${kpiCard(31, 309, '活跃乘客', '29.2M', '同比 +18%')}
      ${kpiCard(353, 169, '行程', '946M', '同比 +14%')}
      ${kpiCard(536, 332, '总预订额', '$18.5B', '同比 +15%', 29)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lyft-fy25',
    name: 'Lyft · FY25',
    company: 'Lyft',
    meta: {
      company: 'Lyft',
      title: 'Lyft FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Year ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/lyft-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1755,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 205,
      logoHeight: 205,
      logoY: 258,
      logoViewBox: '0 0 205 205',
      logoSvg: lyftLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PINK, label: BLACK },
        hub: { node: PINK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PINK_LINK,
        hub: PINK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 0.053,
      nodes: {
        rideshare: { x: 350, y: 505, width: 71, height: 313 },
        rentals: { x: 350, y: 1100, width: 71, height: 22 },
        revenue: { x: 817, y: 654, width: 71, height: 335 },
        gross_profit: { x: 1284, y: 501, width: 71, height: 139 },
        cost_of_revenue: { x: 1284, y: 929, width: 71, height: 196 },
        operating_loss: { x: 1584, y: 867, width: 72, height: 9 },
        operating_expenses: { x: 1751, y: 667, width: 71, height: 149 },
        ga: { x: 2218, y: 360, width: 72, height: 53 },
        sm: { x: 2218, y: 632, width: 72, height: 46 },
        operations_support: { x: 2218, y: 908, width: 72, height: 25 },
        rnd: { x: 2218, y: 1195, width: 72, height: 25 },
      },
      labels: {
        rideshare: {
          blocks: [
            {
              x: 385, top: 415, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rentals: {
          blocks: [
            {
              x: 385, top: 1010, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+0% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 853, top: 514, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1302, top: 322, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '41% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1284, top: 1152, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1618, top: 903, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'loss', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '(3%) margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1777, top: 512, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 340, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'General & admin', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '16% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 610, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Sales & marketing', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '14% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operations_support: {
          blocks: [
            {
              x: 2370, top: 870, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Operations', size: 32, weight: 800 },
                { text: '& support', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2370, top: 1170, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'R&D', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '7% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'rideshare', col: 0, order: 0, type: 'source', label: 'Rideshare', value: 5895, valueText: '$5,895M', notes: ['+10% Y/Y'], color: PINK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'rentals', col: 0, order: 1, type: 'source', label: 'Rentals', value: 421, valueText: '$421M', notes: ['+0% Y/Y'], color: PINK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6316, valueText: '$6,316M', notes: ['+9% Y/Y'], color: PINK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2619, valueText: '$2,619M', notes: ['41% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3698, valueText: '($3,698M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -188, valueText: '($188M)', notes: ['(3%) margin', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 2807, valueText: '($2,807M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 0, type: 'cost', label: 'General & admin', value: 1002, valueText: '($1,002M)', notes: ['16% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'Sales & marketing', value: 875, valueText: '($875M)', notes: ['14% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations_support', col: 5, order: 2, type: 'cost', label: ['Operations', '& support'], value: 478, valueText: '($478M)', notes: ['8% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 451, valueText: '($451M)', notes: ['7% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'rideshare', target: 'revenue', value: 5895, width: 313, sourceOrder: 0, targetOrder: 0 },
      { source: 'rentals', target: 'revenue', value: 421, width: 22, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 2619, width: 139, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3698, width: 196, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 2619, width: 139, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 188, width: 10, sourceOrder: 0, targetOrder: 1, y0: 871.5, y1: 811 },

      { source: 'operating_expenses', target: 'ga', value: 1002, width: 53, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 875, width: 46, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations_support', value: 478, width: 25, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 451, width: 25, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Lyft · 2025 财年',
        meta: {
          title: 'Lyft 2025 财年利润表',
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月 31 日止年度',
          titleSize: 112,
          titleTextLength: 1360,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          rideshare: { label: '网约车', notes: ['同比 +10%'] },
          rentals: { label: '租赁', notes: ['同比 +0%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 41%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (3%)', '同比 +1 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          ga: { label: '管理费用', notes: ['占收入 16%', '同比 (0 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 14%', '同比 +0 个百分点'] },
          operations_support: { label: ['运营', '与支持'], notes: ['占收入 8%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            rideshare: {
              blocks: [
                {
                  x: 385, top: 415, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +10%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rentals: {
              blocks: [
                {
                  x: 385, top: 1010, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +0%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 853, top: 514, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1302, top: 322, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 41%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1284, top: 1152, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 38, weight: 800 },
                    { text: '成本', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1618, top: 903, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业', size: 39, weight: 800 },
                    { text: '亏损', size: 39, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 (3%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1777, top: 512, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2330, top: 340, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '管理费用', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 16%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2330, top: 610, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '销售与市场', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 14%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operations_support: {
              blocks: [
                {
                  x: 2370, top: 870, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '运营', size: 32, weight: 800 },
                    { text: '与支持', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2370, top: 1170, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '研发', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 7%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
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

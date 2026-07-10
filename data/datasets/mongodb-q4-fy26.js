/* ====================================================================
 * MongoDB - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/mongodb-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK = '#06232e';
  const DARK_LABEL = '#102b37';
  const DARK_LINK = '#88959a';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#e08585';
  const NOTE = '#707070';
  const BG = '#f2f2f2';
  const SCALE = 0.5;
  const RIGHT_LABEL_X = 2450;

  const h = (value) => Math.round(value * SCALE);

  const mongoLogo = `
    <g fill="${DARK}">
      <path d="M78 5 C36 45 4 92 4 150 C4 205 41 242 73 256 C69 283 70 304 78 330 C86 304 87 283 83 256 C116 242 153 205 153 150 C153 92 120 45 78 5Z"/>
      <path d="M78 51 C70 105 68 164 78 252 C88 164 86 105 78 51Z" fill="${BG}"/>
      <text x="220" y="240" font-family="Georgia,'Times New Roman',serif" font-size="164" font-weight="500" letter-spacing="0">MongoDB</text>
      <text x="875" y="241" font-family="Montserrat,Arial,sans-serif" font-size="27" font-weight="700">R</text>
      <circle cx="883" cy="231" r="23" fill="none" stroke="${DARK}" stroke-width="5"/>
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="38" y="1220" width="528" height="125" rx="34" fill="${DARK}"/>
      <text x="293" y="1270" text-anchor="middle" font-size="${labels.cardSize}" font-weight="500" fill="#ffffff">
        <tspan font-weight="800">${labels.customers}</tspan><tspan> 65,200 ${labels.customerGrowth}</tspan>
      </text>
      <text x="303" y="1311" text-anchor="middle" font-size="${labels.cardSize}" font-weight="500" fill="#ffffff">
        <tspan>&gt; </tspan><tspan font-weight="800">$100K</tspan><tspan> 2,799 ${labels.largeCustomerGrowth}</tspan>
      </text>
    </g>`;

  const annotationsEn = annotations({
    cardSize: 29,
    customers: 'Customers',
    customerGrowth: '+20% Y/Y',
    largeCustomerGrowth: '+20% Y/Y',
  });

  const annotationsZh = annotations({
    cardSize: 27,
    customers: '客户',
    customerGrowth: '同比 +20%',
    largeCustomerGrowth: '同比 +20%',
  });

  const labelsEn = {
    atlas: {
      blocks: [
        {
          x: 435, top: 426, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+29% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 244, top: 592, anchor: 'middle', lineGap: 11,
          lines: [
            { text: 'Atlas', size: 40, weight: 800 },
            { text: '72% of revenue', size: 31, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 31, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_subscription: {
      blocks: [
        {
          x: 435, top: 850, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 945, anchor: 'middle', lineGap: 10,
          lines: [
            { text: 'Other', size: 40, weight: 800 },
            { text: 'subscription', size: 40, weight: 800 },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 810, top: 1041, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+26% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 640, top: 1134, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] },
      ],
    },
    subscription: {
      blocks: [
        {
          x: 810, top: 484, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Subscription', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+27% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1183, top: 562, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Revenue', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+27% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1557, top: 438, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '73% margin', size: 29, weight: 400, color: NOTE },
            { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1557, top: 1151, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Cost of', size: 36, weight: 800 },
            { text: 'revenue', size: 36, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1930, top: 354, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Operating profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '0% margin', size: 29, weight: 400, color: NOTE },
            { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1930, top: 975, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Operating', size: 40, weight: 800 },
            { text: 'expenses', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    interest_other: {
      blocks: [
        {
          x: 2188, top: 551, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Interest', size: 33, weight: 800 },
            { text: '& other', size: 33, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2465, top: 412, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Net profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 741, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Sales &', size: 31, weight: 800 },
            { text: 'marketing', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '36% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 967, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Research &', size: 31, weight: 800 },
            { text: 'development', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1182, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'General &', size: 31, weight: 800 },
            { text: 'admin', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  const labelsZh = {
    atlas: {
      blocks: [
        {
          x: 435, top: 426, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +29%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 244, top: 592, anchor: 'middle', lineGap: 11,
          lines: [
            { text: 'Atlas', size: 40, weight: 800 },
            { text: '占收入 72%', size: 31, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 31, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_subscription: {
      blocks: [
        {
          x: 435, top: 850, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +20%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 945, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '其他', size: 40, weight: 800 },
            { text: '订阅', size: 40, weight: 800 },
          ],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 810, top: 1041, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +26%', size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 640, top: 1134, anchor: 'middle', lines: [{ text: '服务', size: 40, weight: 800 }] },
      ],
    },
    subscription: {
      blocks: [
        {
          x: 810, top: 484, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '订阅', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +27%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1183, top: 562, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +27%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1557, top: 438, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '毛利润', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 73%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1557, top: 1151, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 36, weight: 800 },
            { text: '成本', size: 36, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1930, top: 354, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '营业利润', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 0%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1930, top: 975, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '运营', size: 40, weight: 800 },
            { text: '费用', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    interest_other: {
      blocks: [
        {
          x: 2188, top: 551, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '利息', size: 33, weight: 800 },
            { text: '及其他', size: 33, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2465, top: 412, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '净利润', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X + 10, top: 741, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '销售与', size: 31, weight: 800 },
            { text: '市场', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 36%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X + 10, top: 967, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '研究与', size: 31, weight: 800 },
            { text: '开发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X + 10, top: 1182, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '一般及', size: 31, weight: 800 },
            { text: '行政', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mongodb-q4-fy26',
    name: 'MongoDB · Q4 FY26',
    company: 'MongoDB',
    meta: {
      company: 'MongoDB',
      title: 'MongoDB Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/mongodb-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1307,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: 201,
      periodY: 309,
      periodNoteY: 352,
      logoWidth: 1077,
      logoHeight: 170,
      logoY: 260,
      logoViewBox: '0 0 1077 340',
      logoSvg: mongoLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK_LABEL },
        hub: { node: DARK, label: DARK_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: DARK_LINK,
        hub: DARK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        atlas: { x: 400, y: 522, width: 71, height: h(503) },
        other_subscription: { x: 400, y: 942, width: 71, height: h(170) },
        subscription: { x: 773, y: 629, width: 71, height: h(673) },
        services: { x: 773, y: 1130, width: 71, height: h(22) },
        revenue: { x: 1147, y: 707, width: 71, height: h(695) },
        gross_profit: { x: 1521, y: 629, width: 71, height: h(508) },
        cost_of_revenue: { x: 1521, y: 1042, width: 71, height: h(187) },
        operating_profit: { x: 1894, y: 538, width: 72, height: 1 },
        operating_expenses: { x: 1894, y: 699, width: 72, height: 254 },
        interest_other: { x: 2152, y: 506, width: 72, height: 6 },
        net_profit: { x: 2268, y: 446, width: 72, height: 6 },
        sm: { x: 2268, y: 730, width: 72, height: h(249) },
        rnd: { x: 2268, y: 975, width: 72, height: h(189) },
        ga: { x: 2268, y: 1206, width: 72, height: h(70) },
      },
      labels: labelsEn,
    },

    nodes: [
      {
        id: 'atlas', col: 0, order: 0, type: 'source',
        label: 'Atlas', value: 503, notes: ['+29% Y/Y', '72% of revenue', '+1pp Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'other_subscription', col: 0, order: 1, type: 'source',
        label: 'Other subscription', value: 170, notes: ['+20% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'subscription', col: 1, order: 0, type: 'source',
        label: 'Subscription', value: 673, notes: ['+27% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'services', col: 1, order: 1, type: 'source',
        label: 'Services', value: 22, notes: ['+26% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 695, notes: ['+27% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 508, notes: ['73% margin', '+0pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: 'Cost of revenue', value: 187,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 1, valueText: '$0M', notes: ['0% margin', '(3pp) Y/Y'],
        color: BG, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: 'Operating expenses', value: 507,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest_other', col: 5, order: 0, type: 'profit',
        label: 'Interest & other', value: 15,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 16,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'sm', col: 6, order: 1, type: 'cost',
        label: 'Sales & marketing', value: 249, notes: ['36% of revenue', '(3pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 6, order: 2, type: 'cost',
        label: 'Research & development', value: 189, notes: ['27% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 3, type: 'cost',
        label: 'General & admin', value: 70, notes: ['10% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'atlas', target: 'subscription', value: 503, width: h(503), sourceOrder: 0, targetOrder: 0 },
      { source: 'other_subscription', target: 'subscription', value: 170, width: h(170), sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription', target: 'revenue', value: 673, width: h(673), sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 22, width: h(22), sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 508, width: h(508), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 187, width: h(187), sourceOrder: 1, targetOrder: 0 },

      {
        source: 'gross_profit',
        target: 'operating_profit',
        value: 1,
        width: 2,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
        curve: { c1x: 1672, c1y: 620, c2x: 1798, c2y: 538 },
      },
      { source: 'gross_profit', target: 'operating_expenses', value: 507, width: 253, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      {
        source: 'operating_profit',
        target: 'net_profit', value: 1,
        width: 2,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
        curve: { c1x: 2032, c1y: 538, c2x: 2156, c2y: 447 },
      },
      {
        source: 'interest_other',
        target: 'net_profit', value: 15,
        width: 4,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: GREEN_LINK,
        curve: { c1x: 2238, c1y: 508, c2x: 2252, c2y: 449 },
      },

      { source: 'operating_expenses', target: 'sm', value: 249, width: h(249), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 189, width: h(189), sourceOrder: 1, targetOrder: 0 },
      {
        source: 'operating_expenses',
        target: 'ga',
        value: 70,
        width: 34,
        sourceOrder: 2,
        targetOrder: 0,
        curve: { c1x: 2040, c1y: 935, c2x: 2160, c2y: 1222 },
      },
    ],

    i18n: {
      zh: {
        name: 'MongoDB · 2026 财年第四季度',
        meta: {
          title: 'MongoDB 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 116,
          titleTextLength: 2050,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          atlas: { label: 'Atlas', notes: ['同比 +29%', '占收入 72%', '同比 +1 个百分点'] },
          other_subscription: { label: '其他订阅', notes: ['同比 +20%'] },
          subscription: { label: '订阅', notes: ['同比 +27%'] },
          services: { label: '服务', notes: ['同比 +26%'] },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 0%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          interest_other: { label: '利息及其他' },
          net_profit: { label: '净利润' },
          sm: { label: '销售与市场', notes: ['占收入 36%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: labelsZh,
        },
      },
    },
  });
})();

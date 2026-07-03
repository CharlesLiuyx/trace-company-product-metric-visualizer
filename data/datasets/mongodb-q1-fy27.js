/* ====================================================================
 * MongoDB - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/mongodb-q1-fy27.png as a fixed
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
  const SCALE = 0.5;
  const RIGHT_LABEL_X = 2450;

  const h = (value) => Math.round(value * SCALE);

  const mongoLogo = `
    <g fill="${DARK}">
      <path d="M78 5 C36 45 4 92 4 150 C4 205 41 242 73 256 C69 283 70 304 78 330 C86 304 87 283 83 256 C116 242 153 205 153 150 C153 92 120 45 78 5Z"/>
      <path d="M78 51 C70 105 68 164 78 252 C88 164 86 105 78 51Z" fill="#f2f2f2"/>
      <text x="220" y="240" font-family="Georgia,'Times New Roman',serif" font-size="164" font-weight="500" letter-spacing="0">MongoDB</text>
      <text x="875" y="241" font-family="Montserrat,Arial,sans-serif" font-size="27" font-weight="700">R</text>
      <circle cx="883" cy="231" r="23" fill="none" stroke="${DARK}" stroke-width="5"/>
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="38" y="1220" width="528" height="125" rx="34" fill="${DARK}"/>
      <text x="293" y="1270" text-anchor="middle" font-size="${labels.cardSize}" font-weight="500" fill="#ffffff">
        <tspan font-weight="800">${labels.customers}</tspan><tspan> 67,700 ${labels.customerGrowth}</tspan>
      </text>
      <text x="303" y="1311" text-anchor="middle" font-size="${labels.cardSize}" font-weight="500" fill="#ffffff">
        <tspan>&gt; </tspan><tspan font-weight="800">$100K</tspan><tspan> 2,895 ${labels.largeCustomerGrowth}</tspan>
      </text>
    </g>`;

  const annotationsEn = annotations({
    cardSize: 29,
    customers: 'Customers',
    customerGrowth: '+19% Y/Y',
    largeCustomerGrowth: '+15% Y/Y',
  });

  const annotationsZh = annotations({
    cardSize: 27,
    customers: '客户',
    customerGrowth: '同比 +19%',
    largeCustomerGrowth: '同比 +15%',
  });

  const zhLayoutLabels = {
    atlas: {
      blocks: [
        {
          x: 435, top: 449, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +29%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 244, top: 613, anchor: 'middle', lineGap: 11,
          lines: [
            { text: 'Atlas', size: 40, weight: 800 },
            { text: '占收入 75%', size: 31, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 31, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_subscription: {
      blocks: [
        {
          x: 435, top: 881, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +13%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 980, anchor: 'middle', lineGap: 10,
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
          x: 810, top: 1066, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +22%', size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 640, top: 1144, anchor: 'middle', lines: [{ text: '服务', size: 40, weight: 800 }] },
      ],
    },
    subscription: {
      blocks: [
        {
          x: 810, top: 490, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '订阅', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +25%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 1183, top: 575, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +25%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1557, top: 440, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '毛利润', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 72%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1557, top: 1163, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 36, weight: 800 },
            { text: '成本', size: 36, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1930, top: 532, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '运营', size: 40, weight: 800 },
            { text: '费用', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1782, top: 1090, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业亏损', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 (4%)', size: 29, weight: 400, color: NOTE },
            { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X + 10, top: 535, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '销售与', size: 31, weight: 800 },
            { text: '市场', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 36%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X + 10, top: 803, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '研究与', size: 31, weight: 800 },
            { text: '开发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 29%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X + 10, top: 1080, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '一般及', size: 31, weight: 800 },
            { text: '行政', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mongodb-q1-fy27',
    name: 'MongoDB · Q1 FY27',
    company: 'MongoDB',
    meta: {
      company: 'MongoDB',
      title: 'MongoDB Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/mongodb-q1-fy27.png', width: 2667, height: 1500 },
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
      background: '#f2f2f2',
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
        atlas: { x: 399, y: 541, width: 72, height: h(512) },
        other_subscription: { x: 399, y: 978, width: 72, height: h(154) },
        subscription: { x: 773, y: 632, width: 72, height: h(666) },
        services: { x: 773, y: 1154, width: 72, height: h(21) },
        revenue: { x: 1147, y: 716, width: 72, height: h(688) },
        gross_profit: { x: 1521, y: 629, width: 72, height: h(496) },
        cost_of_revenue: { x: 1521, y: 1061, width: 72, height: h(191) },
        operating_loss: { x: 1746, y: 1054, width: 72, height: h(25) },
        operating_expenses: { x: 1894, y: 693, width: 72, height: h(521) },
        sm: { x: 2268, y: 540, width: 72, height: h(249) },
        rnd: { x: 2268, y: 819, width: 72, height: h(200) },
        ga: { x: 2268, y: 1116, width: 72, height: h(71) },
      },
      labels: {
        atlas: {
          blocks: [
            {
              x: 435, top: 449, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+29% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 244, top: 611, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Atlas', size: 40, weight: 800 },
                { text: '75% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_subscription: {
          blocks: [
            {
              x: 435, top: 881, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 248, top: 980, anchor: 'middle', lineGap: 10,
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
              x: 810, top: 1066, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 640, top: 1144, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 810, top: 491, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1183, top: 575, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1557, top: 440, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '72% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1557, top: 1163, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1930, top: 532, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1782, top: 1090, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(4%) margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 535, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 31, weight: 800 },
                { text: 'marketing', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '36% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 803, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800 },
                { text: 'development', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '29% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1080, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'General &', size: 31, weight: 800 },
                { text: 'admin', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'atlas', col: 0, order: 0, type: 'source',
        label: 'Atlas', value: 512, notes: ['+29% Y/Y', '75% of revenue', '+2pp Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'other_subscription', col: 0, order: 1, type: 'source',
        label: 'Other subscription', value: 154, notes: ['+13% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'subscription', col: 1, order: 0, type: 'source',
        label: 'Subscription', value: 666, notes: ['+25% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'services', col: 1, order: 1, type: 'source',
        label: 'Services', value: 21, notes: ['+22% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 688, notes: ['+25% Y/Y'],
        color: DARK, labelColor: DARK_LABEL, linkTint: DARK_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 496, notes: ['72% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: 'Cost of revenue', value: 191,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 4, order: 1, type: 'cost',
        label: 'Operating loss', value: -25, notes: ['(4%) margin', '+6pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 5, order: 0, type: 'cost',
        label: 'Operating expenses', value: 521,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 6, order: 0, type: 'cost',
        label: 'Sales & marketing', value: 249, notes: ['36% of revenue', '(4pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 6, order: 1, type: 'cost',
        label: 'Research & development', value: 200, notes: ['29% of revenue', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 2, type: 'cost',
        label: 'General & admin', value: 71, notes: ['10% of revenue', '+0pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'atlas', target: 'subscription', value: 512, width: h(512), sourceOrder: 0, targetOrder: 0 },
      { source: 'other_subscription', target: 'subscription', value: 154, width: h(154), sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription', target: 'revenue', value: 666, width: h(666), sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 21, width: h(21), sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 496, width: h(496), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 191, width: h(191), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 496, width: h(496), sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss',
        target: 'operating_expenses',
        value: 25,
        width: h(25),
        sourceOrder: 0,
        targetOrder: 1,
        curve: { c1x: 1838, c1y: 1060, c2x: 1860, c2y: 950 },
      },

      { source: 'operating_expenses', target: 'sm', value: 249, width: h(249), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 200, width: h(200), sourceOrder: 1, targetOrder: 0 },
      {
        source: 'operating_expenses',
        target: 'ga',
        value: 71,
        width: h(71),
        sourceOrder: 2,
        targetOrder: 0,
        curve: { c1x: 2040, c1y: 940, c2x: 2158, c2y: 1134 },
      },
    ],

    i18n: {
      zh: {
        name: 'MongoDB · 2027 财年第一季度',
        meta: {
          title: 'MongoDB 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 116,
          titleTextLength: 2050,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          atlas: { label: 'Atlas', notes: ['同比 +29%', '占收入 75%', '同比 +2 个百分点'] },
          other_subscription: { label: '其他订阅', notes: ['同比 +13%'] },
          subscription: { label: '订阅', notes: ['同比 +25%'] },
          services: { label: '服务', notes: ['同比 +22%'] },
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (4%)', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          sm: { label: '销售与市场', notes: ['占收入 36%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 29%', '同比 (2 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 10%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();

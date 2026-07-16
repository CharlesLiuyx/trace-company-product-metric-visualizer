/* ====================================================================
 * Snap - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/snap-q3-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const BLACK = '#000000';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const YELLOW = '#fffc00';
  const YELLOW_LINK = '#f7f685';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const SCALE = 354 / 1507;
  const RIGHT_LABEL_X = 2398;
  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${Math.min(31, height / 4)}" fill="${BLACK}"/>
      ${lines
        .map(
          (line, index) =>
            `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const userStack = (labels) => `
    <g>
      <path d="M128 417L157 461H100Z" fill="${BLACK}"/>
      <rect x="60" y="461" width="132" height="707" rx="11" fill="${BLACK}"/>
      ${labels
        .map(
          (line) =>
            `<text x="126" y="${line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(34, 226, 187, 168, [
        { text: 'DAU', y: 57, size: 35, weight: 800 },
        { text: '477M', y: 103, size: 32, weight: 800 },
        { text: '+8% Y/Y', y: 141, size: 20, weight: 500 },
      ])}
      ${userStack([
        { text: '98M', y: 550, size: 35, weight: 800 },
        { text: '(3%) Y/Y', y: 588, size: 24 },
        { text: '100M', y: 843, size: 35, weight: 800 },
        { text: '+1% Y/Y', y: 882, size: 24 },
        { text: '280M', y: 1070, size: 35, weight: 800 },
        { text: '+15% Y/Y', y: 1110, size: 24 },
      ])}
      ${kpiCard(332, 1145, 209, 135, [
        { text: 'ARPU', y: 48, size: 29, weight: 800 },
        { text: '$3.16', y: 82, size: 27 },
        { text: '+2% Y/Y', y: 116, size: 21 },
      ])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">DAU = Daily Active Users</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPU = Average Revenue Per User</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(34, 226, 187, 168, [
        { text: 'DAU', y: 57, size: 35, weight: 800 },
        { text: '477M', y: 103, size: 32, weight: 800 },
        { text: '同比 +8%', y: 141, size: 20, weight: 500 },
      ])}
      ${userStack([
        { text: '98M', y: 550, size: 35, weight: 800 },
        { text: '同比 (3%)', y: 588, size: 24 },
        { text: '100M', y: 843, size: 35, weight: 800 },
        { text: '同比 +1%', y: 882, size: 24 },
        { text: '280M', y: 1070, size: 35, weight: 800 },
        { text: '同比 +15%', y: 1110, size: 24 },
      ])}
      ${kpiCard(332, 1145, 209, 135, [
        { text: 'ARPU', y: 48, size: 29, weight: 800 },
        { text: '$3.16', y: 82, size: 27 },
        { text: '同比 +2%', y: 116, size: 21 },
      ])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">DAU = 日活跃用户</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPU = 每用户平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'snap-q3-fy25',
    name: 'Snap · Q3 FY25',
    company: 'Snap',
    meta: {
      company: 'Snap',
      title: 'Snap Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/snap-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2028,
      hidePeriodStamp: true,
      logoWidth: 234,
      logoHeight: 234,
      logoY: 245,
      logoViewBox: '0 0 208 208',
      logoSvg: BUSINESS_ICONS.snapLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: YELLOW, label: BLACK },
        hub: { node: YELLOW, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: YELLOW_LINK,
        hub: YELLOW_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        north_america: { x: 397, y: 479, width: 72, height: h(898) },
        europe: { x: 397, y: 850, width: 72, height: h(298) },
        rest_of_world: { x: 397, y: 1047, width: 72, height: h(311) },
        revenue: { x: 864, y: 656, width: 72, height: h(1507) },
        gross_profit: { x: 1328, y: 479, width: 72, height: h(833) },
        cost_of_revenue: { x: 1326, y: 957, width: 72, height: h(674) },
        operating_loss: { x: 1604, y: 872, width: 72, height: h(128) },
        operating_expenses: { x: 1799, y: 641, width: 72, height: h(961) },
        rnd: { x: 2265, y: 385, width: 72, height: h(453) },
        sm: { x: 2265, y: 747, width: 72, height: h(256) },
        ga: { x: 2265, y: 1060, width: 72, height: h(251) },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        north_america: {
          blocks: [
            {
              x: 433, top: 382, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 376, top: 532, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'North', size: 40, weight: 800 },
                { text: 'America', size: 40, weight: 800 },
              ],
            },
          ],
        },
        europe: {
          blocks: [
            {
              x: 433, top: 749, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 376, top: 853, anchor: 'end',
              lines: [{ text: 'Europe', size: 40, weight: 800 }],
            },
          ],
        },
        rest_of_world: {
          blocks: [
            {
              x: 433, top: 948, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 382, top: 1033, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Rest', size: 40, weight: 800 },
                { text: 'of world', size: 40, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 900, top: 506, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1364, top: 300, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '55% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1363, top: 1141, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 33, weight: 800 },
                { text: 'revenue', size: 33, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1640, top: 934, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'loss', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '(9%) margin', size: 29, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1835, top: 488, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 382, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '30% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 743, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '17% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1064, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      {
        id: 'north_america', col: 0, order: 0, type: 'source',
        label: ['North', 'America'], value: 898, notes: ['+5% Y/Y'],
        color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK,
      },
      {
        id: 'europe', col: 0, order: 1, type: 'source',
        label: 'Europe', value: 298, notes: ['+20% Y/Y'],
        color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK,
      },
      {
        id: 'rest_of_world', col: 0, order: 2, type: 'source',
        label: 'Rest of world', value: 311, notes: ['+17% Y/Y'],
        color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1507, notes: ['+10% Y/Y'],
        color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 833, notes: ['55% margin', '+2pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 674,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'loss'], value: -128, notes: ['(9%) margin', '+4pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 961,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 0, type: 'cost',
        label: 'R&D', value: 453, notes: ['30% of revenue', '+0pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 1, type: 'cost',
        label: 'S&M', value: 256, notes: ['17% of revenue', '(3pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 2, type: 'cost',
        label: 'G&A', value: 251, notes: ['16% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 0, type: 'cost',
        label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent',
      },
    ],

    links: [
      { source: 'north_america', target: 'revenue', value: 898, width: h(898), sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 298, width: h(298), sourceOrder: 0, targetOrder: 1 },
      { source: 'rest_of_world', target: 'revenue', value: 311, width: h(311), sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 833, width: h(833), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 674, width: h(674), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 833, width: h(833), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 128, width: h(128), sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 453, width: h(453), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 256, width: h(256), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 251, width: h(251), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Snap · 2025 财年第三季度',
        meta: {
          title: 'Snap 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1500,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +5%'] },
          europe: { label: '欧洲', notes: ['同比 +20%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (9%)', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 30%', '同比 +0 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 17%', '同比 (3 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 16%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            north_america: {
              blocks: [
                {
                  x: 433, top: 382, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 344, top: 550, anchor: 'middle',
                  lines: [{ text: '北美', size: 40, weight: 800 }],
                },
              ],
            },
            europe: {
              blocks: [
                {
                  x: 433, top: 749, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +20%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 376, top: 853, anchor: 'end',
                  lines: [{ text: '欧洲', size: 40, weight: 800 }],
                },
              ],
            },
            rest_of_world: {
              blocks: [
                {
                  x: 433, top: 948, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 382, top: 1033, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '世界', size: 40, weight: 800 },
                    { text: '其他地区', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 900, top: 506, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +10%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1364, top: 300, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 55%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1363, top: 1141, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 33, weight: 800 },
                    { text: '成本', size: 33, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1640, top: 934, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 36, weight: 800 },
                    { text: '亏损', size: 36, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                    { text: '利润率 (9%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1835, top: 488, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 36, weight: 800 },
                    { text: '费用', size: 36, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 382, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 30%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 743, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 17%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1064, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 16%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
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

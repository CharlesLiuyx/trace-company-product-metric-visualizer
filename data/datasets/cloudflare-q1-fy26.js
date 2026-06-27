/* ====================================================================
 * Cloudflare - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/cloudflare-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const ORANGE = '#ff7f18';
  const ORANGE_LINK = '#f3bf8e';
  const GREEN = '#27a327';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#9ccd9c';
  const RED = '#d70000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e38284';
  const NOTE = '#707070';
  const DARK = '#3b3b3d';
  const RIGHT_LABEL_X = 2423;

  const cloudflareLogo = `
    <g transform="translate(300 0) scale(0.91)">
      <path d="M43 88C44 58 70 39 100 43C111 15 138 0 171 0C209 0 238 23 244 59C268 59 286 77 286 104C286 127 269 143 246 143H42C19 143 1 126 1 104C1 81 18 65 40 64C40 72 41 80 43 88Z" fill="#f58220"/>
      <path d="M225 58C252 58 273 80 273 107C273 119 269 130 262 138H187C172 138 168 118 184 113L202 108C215 105 218 88 205 81C211 67 218 61 225 58Z" fill="#fbb040"/>
      <path d="M74 92H206C214 92 214 82 205 82H83C75 82 70 92 74 92Z" fill="#ffffff"/>
    </g>
    <text x="20" y="186" font-family="Montserrat,Arial,sans-serif" font-size="63" font-weight="800" letter-spacing="9" fill="${DARK}"
      textLength="550" lengthAdjust="spacingAndGlyphs">CLOUDFLARE</text>
    <text x="570" y="137" font-family="Montserrat,Arial,sans-serif" font-size="15" font-weight="700" fill="${DARK}">R</text>
  `;

  const kpiCard = (x, y, width, height, rx, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${ORANGE}"/>
      ${lines
        .map((line) => `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`)
        .join('')}
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(69, 1155, 164, 164, 35, [
        { text: 'DBNR', y: 52, size: 29, weight: 800 },
        { text: '118%', y: 96, size: 31 },
        { text: labels.dbnrGrowth, y: 138, size: 28 },
      ])}
      ${kpiCard(237, 1153, 568, 164, 28, [
        { text: labels.customers, y: 55, size: 30, weight: 800 },
        { text: labels.customerCount, y: 99, size: 31 },
      ])}
      <text x="201" y="1357" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    dbnrGrowth: '+7pp Y/Y',
    customers: 'Customers &gt; $100K',
    customerCount: '4,416 +24% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    dbnrGrowth: '同比 +7点',
    customers: '客户 &gt; $100K',
    customerCount: '4,416，同比 +24%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'cloudflare-q1-fy26',
    name: 'Cloudflare · Q1 FY26',
    company: 'Cloudflare',
    meta: {
      company: 'Cloudflare',
      title: 'Cloudflare Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/cloudflare-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2365,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 563,
      logoHeight: 205,
      logoY: 213,
      logoViewBox: '0 0 670 205',
      logoSvg: cloudflareLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        united_states: { x: 402, y: 356, width: 71, height: 180 },
        emea: { x: 402, y: 666, width: 71, height: 100 },
        apac: { x: 402, y: 887, width: 71, height: 56 },
        other: { x: 402, y: 1063, width: 71, height: 29 },
        revenue: { x: 864, y: 549, width: 71, height: 365 },
        gross_profit: { x: 1335, y: 449, width: 72, height: 260 },
        cost_of_revenue: { x: 1336, y: 929, width: 71, height: 105 },
        operating_loss: { x: 1636, y: 861, width: 72, height: 35 },
        operating_expenses: { x: 1803, y: 544, width: 71, height: 295 },
        sm: { x: 2270, y: 340, width: 72, height: 155 },
        rnd: { x: 2270, y: 707, width: 72, height: 86 },
        ga: { x: 2270, y: 967, width: 72, height: 54 },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 438, top: 267, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 210, top: 407, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'United', size: 40, weight: 800 },
                { text: 'States', size: 40, weight: 800 },
              ],
            },
          ],
        },
        emea: {
          blocks: [
            {
              x: 438, top: 578, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+31% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 220, top: 692, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
          ],
        },
        apac: {
          blocks: [
            {
              x: 438, top: 799, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 224, top: 891, anchor: 'start', lines: [{ text: 'APAC', size: 40, weight: 800 }] },
          ],
        },
        other: {
          blocks: [
            {
              x: 438, top: 975, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 224, top: 1053, anchor: 'start', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 900, top: 402, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1371, top: 267, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '71% margin', size: 28, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1371, top: 1059, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1672, top: 914, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(10%) margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1839, top: 385, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 348, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '42% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 709, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '24% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 967, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 316, notes: ['+34% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 176, notes: ['+31% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'apac', col: 0, order: 2, type: 'source', label: 'APAC', value: 99, notes: ['+34% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 50, notes: ['+34% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 640, notes: ['+34% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 456, notes: ['71% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 184, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -62, notes: ['(10%) margin', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 518, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 272, notes: ['42% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 151, notes: ['24% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 95, notes: ['15% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'united_states', target: 'revenue', value: 316, width: 180, sourceOrder: 0, targetOrder: 0 },
      { source: 'emea', target: 'revenue', value: 176, width: 100, sourceOrder: 0, targetOrder: 1 },
      { source: 'apac', target: 'revenue', value: 99, width: 56, sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 50, width: 29, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 456, width: 260, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 184, width: 105, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 456, width: 260, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 62, width: 35, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 272, width: 155, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 151, width: 86, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 95, width: 54, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Cloudflare · 2026 财年第一季度',
        meta: {
          title: 'Cloudflare 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 2030,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +34%'] },
          emea: { label: '欧洲、中东和非洲', notes: ['同比 +31%'] },
          apac: { label: '亚太', notes: ['同比 +34%'] },
          other: { label: '其他', notes: ['同比 +34%'] },
          revenue: { label: '收入', notes: ['同比 +34%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 71%', '同比 (5 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (10%)', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 42%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 24%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 15%', '同比 (3 个百分点)'] },
        },
        layout: {
          labels: {
            united_states: {
              blocks: [
                {
                  x: 438, top: 267, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +34%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 210, top: 424, anchor: 'start', lines: [{ text: '美国', size: 40, weight: 800 }] },
              ],
            },
            emea: {
              blocks: [
                {
                  x: 438, top: 578, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +31%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 190, top: 669, anchor: 'start', lineGap: 5,
                  lines: [
                    { text: '欧洲、中东', size: 40, weight: 800 },
                    { text: '非洲', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            apac: {
              blocks: [
                {
                  x: 438, top: 799, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +34%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 260, top: 891, anchor: 'start', lines: [{ text: '亚太', size: 40, weight: 800 }] },
              ],
            },
            other: {
              blocks: [
                {
                  x: 438, top: 975, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +34%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                { x: 224, top: 1053, anchor: 'start', lines: [{ text: '其他', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 900, top: 402, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +34%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1371, top: 267, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 71%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1371, top: 1059, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1672, top: 914, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '亏损', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 (10%)', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1839, top: 385, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 348, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 42%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 709, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 24%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 967, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
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

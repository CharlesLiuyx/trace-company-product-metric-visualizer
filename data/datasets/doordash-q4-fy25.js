/* ====================================================================
 * DoorDash - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/doordash-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DOORDASH_RED = '#ff3008';
  const BLACK = '#000000';
  const GREEN = '#24a127';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccf9b';
  const RED = '#d40000';
  const RED_LABEL = '#930a00';
  const RED_LINK = '#df7f80';
  const GRAY_LINK = '#8f8f8f';
  const NOTE = '#6a6a6a';
  const RIGHT_LABEL_X = 2360;

  const doorDashLogo = `
    <path d="M19 17 H196 C244 17 282 49 282 84 C282 119 246 144 203 144 H119 C107 144 97 139 89 130 L54 89 C49 83 53 74 64 74 H199 C214 74 224 65 224 53 C224 41 214 33 199 33 H64 C51 33 42 28 35 21 Z" fill="${DOORDASH_RED}"/>
    <path d="M103 74 H199 C214 74 224 65 224 53 C224 41 214 33 199 33 H94 C105 44 110 58 103 74 Z" fill="#f2f2f2"/>
  `;

  const card = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1182" width="${width}" height="148" rx="24" fill="${BLACK}"/>
      <text x="${x + width / 2}" y="1235" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1277" text-anchor="middle" font-size="28" font-weight="400" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1310" text-anchor="middle" font-size="21" font-weight="400" fill="#ffffff">${note}</text>
    </g>`;

  const brandAnnotations = `
    <g data-typography-role="brand">
      <text x="86" y="558" font-family="Montserrat,Arial,sans-serif" font-size="41" font-weight="800" textLength="250" lengthAdjust="spacingAndGlyphs" fill="${DOORDASH_RED}">DOORDASH</text>

      <g transform="translate(-60 0)">
        <text x="151" y="968" text-anchor="middle" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="43" font-weight="800" font-style="italic" fill="#4cb4dc" stroke="#ffffff" stroke-width="6" paint-order="stroke">Wolt</text>
        <g transform="translate(76 977)">
          <path d="M0 38 L42 32 L52 74 L10 80 Z" fill="#45bfc1"/>
          <path d="M24 27 L31 6 L43 31 Z" fill="#45bfc1"/>
          <circle cx="27" cy="58" r="3.5" fill="#ffffff"/>
          <circle cx="43" cy="55" r="3.5" fill="#ffffff"/>
        </g>
        <text x="143" y="1027" font-family="Montserrat,Arial,sans-serif" font-size="43" font-weight="800" fill="#45bfc1">deliveroo</text>
      </g>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${brandAnnotations}
      ${card(106, 379, 'Marketplace GOV', '$29.7B', '+39% Y/Y')}
      ${card(497, 157, 'Orders', '903M', '+32% Y/Y')}
      <text x="117" y="1364" font-size="31" font-weight="400" fill="${NOTE}">GOV = Gross Order Volume</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${brandAnnotations}
      ${card(106, 379, 'Marketplace GOV', '$29.7B', '同比 +39%')}
      ${card(497, 157, '订单', '903M', '同比 +32%')}
      <text x="117" y="1364" font-size="31" font-weight="400" fill="${NOTE}">GOV = 总订单金额</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'doordash-q4-fy25',
    name: 'DoorDash · Q4 FY25',
    company: 'DoorDash',
    meta: {
      company: 'DoorDash',
      title: 'DoorDash Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/doordash-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 2338,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 300,
      logoHeight: 150,
      logoY: 302,
      logoViewBox: '0 0 300 150',
      logoSvg: doorDashLogo,
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
      labelYOffset: 0,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.103,
      nodes: {
        united_states: { x: 371, y: 499, width: 72, height: 314 },
        international: { x: 371, y: 1058, width: 72, height: 93 },
        revenue: { x: 839, y: 636, width: 71, height: 407 },
        gross_profit: { x: 1305, y: 490, width: 73, height: 208 },
        cost_of_revenue: { x: 1306, y: 947, width: 71, height: 199 },
        operating_profit: { x: 1773, y: 404, width: 72, height: 15 },
        operating_expenses: { x: 1773, y: 602, width: 71, height: 193 },
        other_income: { x: 2118, y: 357, width: 72, height: 6 },
        net_profit: { x: 2240, y: 297, width: 72, height: 21 },
        tax: { x: 2240, y: 520, width: 72, height: 1 },
        sm: { x: 2240, y: 660, width: 72, height: 73 },
        ga: { x: 2240, y: 854, width: 72, height: 49 },
        rnd: { x: 2240, y: 1019, width: 72, height: 43 },
        da: { x: 2240, y: 1204, width: 72, height: 28 },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 407, top: 406, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 220, top: 608, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'United', size: 40, weight: 800 },
                { text: 'States', size: 40, weight: 800 },
                { text: '77% of revenue', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        international: {
          blocks: [
            {
              x: 407, top: 957, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+144% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 185, top: 1068, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'International', size: 40, weight: 800 },
                { text: '23% of revenue', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 790, top: 490, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+38% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1343, top: 310, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '51% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1341, top: 1170, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 34, weight: 800 },
                { text: 'revenue', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1809, top: 226, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '4% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1809, top: 815, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2154, top: 382, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 30, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2439, top: 226, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '5% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2468, top: 488, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Tax', size: 30, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 682, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'S&M ($707M)', size: 30, weight: 800 },
                { text: '18% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 858, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'G&A ($480M)', size: 30, weight: 800 },
                { text: '12% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1030, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'R&D ($419M)', size: 30, weight: 800 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        da: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1213, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'D&A ($267M)', size: 30, weight: 800 },
                { text: '7% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 3049, valueText: '$3,049M', notes: ['+22% Y/Y', '77% of revenue'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 906, valueText: '$906M', notes: ['+144% Y/Y', '23% of revenue'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3955, valueText: '$3,955M', notes: ['+38% Y/Y'], color: BLACK, labelColor: BLACK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2020, valueText: '$2,020M', notes: ['51% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1935, valueText: '($1,935M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 147, valueText: '$147M', notes: ['4% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1872, valueText: '($1,872M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 75, valueText: '$75M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 213, valueText: '$213M', notes: ['5% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 9, valueText: '($9M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 707, notes: ['18% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 480, notes: ['12% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 419, notes: ['11% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 5, type: 'cost', label: 'D&A', value: 267, notes: ['7% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'united_states', target: 'revenue', value: 3049, width: 314, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 906, width: 93, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 2020, width: 208, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1935, width: 199, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 147, width: 15, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1872, width: 193, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 147, width: 14, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 9, width: 1, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 75, width: 7, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 707, width: 73, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 480, width: 49, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 419, width: 43, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 267, width: 28, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['DOORDASH', 'Wolt', 'deliveroo', 'Marketplace GOV', 'GOV'],
      zh: {
        name: 'DoorDash · 2025 财年第四季度',
        meta: {
          title: 'DoorDash 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1910,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +22%', '占收入 77%'] },
          international: { label: '国际', notes: ['同比 +144%', '占收入 23%'] },
          revenue: { label: '收入', notes: ['同比 +38%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 18%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 12%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 +0 个百分点'] },
          da: { label: '折旧与摊销', notes: ['占收入 7%', '同比 +2 个百分点'] },
        },
        layout: {
          labels: {
            united_states: {
              blocks: [
                {
                  x: 407, top: 406, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +22%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 220, top: 608, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '美国', size: 40, weight: 800 },
                    { text: '市场', size: 40, weight: 800 },
                    { text: '占收入 77%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            international: {
              blocks: [
                {
                  x: 407, top: 957, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +144%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 185, top: 1068, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '国际', size: 40, weight: 800 },
                    { text: '占收入 23%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 790, top: 490, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +38%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1343, top: 310, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 51%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1341, top: 1170, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 34, weight: 800 },
                    { text: '成本', size: 34, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1809, top: 226, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 4%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1809, top: 815, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            other_income: {
              blocks: [
                {
                  x: 2154, top: 382, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '其他', size: 30, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2439, top: 226, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 5%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2468, top: 488, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '税费', size: 30, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 682, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '销售与市场 ($707M)', size: 30, weight: 800 },
                    { text: '占收入 18%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 858, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '管理费用 ($480M)', size: 30, weight: 800 },
                    { text: '占收入 12%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1030, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '研发 ($419M)', size: 30, weight: 800 },
                    { text: '占收入 11%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            da: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1213, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '折旧与摊销 ($267M)', size: 30, weight: 800 },
                    { text: '占收入 7%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
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

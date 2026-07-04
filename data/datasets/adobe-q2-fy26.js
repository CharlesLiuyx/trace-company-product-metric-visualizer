/* ====================================================================
 * Adobe - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/adobe-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const DARK = '#3d3d3d';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GREY_LINK = '#a0a0a0';
  const ADOBE_RED = '#fa0f00';
  const RIGHT_LABEL_X = 2455;

  const adobeFlagMark = `
    <path d="M0,0 L58,0 L0,140 Z" fill="${ADOBE_RED}"/>
    <path d="M102,0 L159,0 L159,137 Z" fill="${ADOBE_RED}"/>
    <path d="M80,50 L93,139 L116,139 Z" fill="${ADOBE_RED}"/>`;

  const adobeLogo = `
    ${adobeFlagMark}
    <text x="214" y="113" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800"
      fill="${ADOBE_RED}" textLength="331" lengthAdjust="spacingAndGlyphs">Adobe</text>`;

  const appIconRect = (size, fill) => `<rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${fill}"/>`;

  const creativeCloudIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})">
      <defs>
        <linearGradient id="adobeCcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fe0e8e"/>
          <stop offset="35%" stop-color="#fb4300"/>
          <stop offset="65%" stop-color="#f6c500"/>
          <stop offset="100%" stop-color="#55e04d"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeCcGradient)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}" fill="none" stroke="#ffffff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.4}" r="${size * 0.19}" fill="none" stroke="#ffffff" stroke-width="${size * 0.09}"/>
    </g>`;

  const acrobatIcon = (x, y, size = 116) => `
    <g transform="translate(${x} ${y})">
      ${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.34},${size * 0.72} C${size * 0.2},${size * 0.62} ${size * 0.22},${size * 0.4} ${size * 0.38},${size * 0.4}
        C${size * 0.5},${size * 0.4} ${size * 0.5},${size * 0.55} ${size * 0.4},${size * 0.6}
        C${size * 0.55},${size * 0.66} ${size * 0.62},${size * 0.5} ${size * 0.72},${size * 0.28}"
        fill="none" stroke="#ffffff" stroke-width="${size * 0.075}" stroke-linecap="round"/>
    </g>`;

  const adobeAIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})">
      ${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.5},${size * 0.21} L${size * 0.8},${size * 0.765} L${size * 0.66},${size * 0.765}
        L${size * 0.5},${size * 0.44} L${size * 0.34},${size * 0.765} L${size * 0.2},${size * 0.765} Z" fill="#ffffff"/>
    </g>`;

  const kpiCard = (x, width, header, value, note) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="${x}" y="1112" width="${width}" height="164" rx="30" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1163" text-anchor="middle" font-size="34" font-weight="800" fill="#ffffff">${header}</text>
      <text x="${x + width / 2}" y="1210" text-anchor="middle" font-size="32" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1250" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creativeCloudIcon(124, 380)}
      ${acrobatIcon(247, 380)}
      ${adobeAIcon(186, 662)}
      ${kpiCard(76, 217, 'ARR', '$27.1B', '+13% Y/Y')}
      ${kpiCard(299, 240, 'RPO', '$22.2B', '+13% Y/Y')}
      <text x="110" y="1312" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
      <text x="49" y="1348" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = Remaining Performance Obligations</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creativeCloudIcon(124, 380)}
      ${acrobatIcon(247, 380)}
      ${adobeAIcon(186, 662)}
      ${kpiCard(76, 217, 'ARR', '$27.1B', '同比 +13%')}
      ${kpiCard(299, 240, 'RPO', '$22.2B', '同比 +13%')}
      <text x="110" y="1312" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = 年化经常性收入</text>
      <text x="49" y="1348" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = 剩余履约义务</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q2-fy26',
    name: 'Adobe · Q2 FY26',
    company: 'Adobe',
    meta: {
      company: 'Adobe',
      title: 'Adobe Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q2-fy26.png', width: 2667, height: 1500 },
      titleY: 204,
      titleSize: 128,
      titleTextLength: 2118,
      periodX: 2536,
      periodY: 276,
      periodNoteY: 318,
      logoWidth: 628,
      logoHeight: 140,
      logoY: 261,
      logoViewBox: '0 0 628 140',
      logoSvg: adobeLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREY_LINK,
        hub: GREY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        creative_marketing: { x: 468, y: 420, width: 72, height: 249 },
        business_consumers: { x: 468, y: 795, width: 72, height: 99 },
        other: { x: 468, y: 1033, width: 72, height: 11 },
        revenue: { x: 936, y: 624, width: 71, height: 359 },
        gross_profit: { x: 1403, y: 518, width: 71, height: 323 },
        cost_of_revenue: { x: 1403, y: 1021, width: 71, height: 36 },
        operating_profit: { x: 1870, y: 428, width: 71, height: 120 },
        operating_expenses: { x: 1870, y: 727, width: 71, height: 203 },
        net_profit: { x: 2337, y: 347, width: 72, height: 93 },
        tax: { x: 2337, y: 602, width: 72, height: 27 },
        sm: { x: 2337, y: 753, width: 72, height: 110 },
        rnd: { x: 2337, y: 941, width: 72, height: 63 },
        ga: { x: 2337, y: 1096, width: 72, height: 28 },
        amortization: { x: 2337, y: 1124, width: 72, height: 2 },
      },
      labels: {
        creative_marketing: {
          blocks: [
            {
              x: 504, top: 329, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 244, top: 505, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Creative & Marketing', size: 34, weight: 800 },
                { text: 'Professionals', size: 34, weight: 800 },
              ],
            },
          ],
        },
        business_consumers: {
          blocks: [
            {
              x: 504, top: 704, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 244, top: 800, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Business Professionals', size: 34, weight: 800 },
                { text: '& Consumers', size: 34, weight: 800 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 504, top: 965, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 34, weight: 400 }],
            },
            {
              x: 459, top: 1024, anchor: 'end',
              lines: [{ text: 'Other', size: 34, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 971, top: 480, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1438, top: 300, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '89% margin', size: 29, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1438, top: 1075, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1905, top: 245, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '34% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1905, top: 935, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 335, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '26% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 595, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 750, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '28% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 935, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '18% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1095, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1272, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 27, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'creative_marketing', col: 0, order: 0, type: 'source',
        label: ['Creative & Marketing', 'Professionals'], value: 4.5, notes: ['+13% Y/Y'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'business_consumers', col: 0, order: 1, type: 'source',
        label: ['Business Professionals', '& Consumers'], value: 1.9, notes: ['+16% Y/Y'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'other', col: 0, order: 2, type: 'source',
        label: 'Other', value: 0.2, color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 6.6, notes: ['+13% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 5.9, notes: ['89% margin', '+4pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 2.2, notes: ['34% margin', '+0pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 3.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net profit', value: 1.7, notes: ['26% margin', '(3pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 4, order: 1, type: 'cost',
        label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 4, order: 2, type: 'cost',
        label: 'S&M', value: 1.9, notes: ['28% of revenue', '+2pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 4, order: 3, type: 'cost',
        label: 'R&D', value: 1.2, notes: ['18% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 4, order: 4, type: 'cost',
        label: 'G&A', value: 0.5, notes: ['8% of revenue', '+0pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'amortization', col: 4, order: 5, type: 'cost',
        label: 'Amortization', value: 0.037, valueText: '($37M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'creative_marketing', target: 'revenue', value: 4.5, width: 249, sourceOrder: 0, targetOrder: 0 },
      { source: 'business_consumers', target: 'revenue', value: 1.9, width: 99, sourceOrder: 0, targetOrder: 1 },
      { source: 'other', target: 'revenue', value: 0.2, width: 11, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 5.9, width: 323, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.7, width: 36, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 2.2, width: 120, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.7, width: 203, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1.7, width: 93, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, width: 27, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_expenses', target: 'sm', value: 1.9, width: 110, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.2, width: 63, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.5, width: 28, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.037, width: 2, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Adobe · 2026 财年第二季度',
        meta: {
          title: 'Adobe 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 5 月',
          titleTextLength: 2070,
          periodX: 2455,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          creative_marketing: { label: ['创意与营销', '专业人士'], notes: ['同比 +13%'] },
          business_consumers: { label: ['企业专业人士', '与消费者'], notes: ['同比 +16%'] },
          other: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 +0 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 28%', '同比 +2 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 +1 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 8%', '同比 +0 个百分点'] },
          amortization: { label: '摊销' },
        },
        layout: {
          labels: {
            creative_marketing: {
              blocks: [
                {
                  x: 504, top: 329, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +13%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 244, top: 505, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '创意与营销', size: 34, weight: 800 },
                    { text: '专业人士', size: 34, weight: 800 },
                  ],
                },
              ],
            },
            business_consumers: {
              blocks: [
                {
                  x: 504, top: 704, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 244, top: 800, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '企业专业人士', size: 34, weight: 800 },
                    { text: '与消费者', size: 34, weight: 800 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 504, top: 965, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 34, weight: 400 }],
                },
                {
                  x: 459, top: 1024, anchor: 'end',
                  lines: [{ text: '其他', size: 34, weight: 800 }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 971, top: 480, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +13%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1438, top: 300, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 89%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1438, top: 1075, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1905, top: 245, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 34%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1905, top: 935, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 335, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 26%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 595, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 750, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 28%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 935, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 18%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 1095, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '一般及行政', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 8%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 1272, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '摊销', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
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

/* ====================================================================
 * Adobe - Q2 FY23 income statement ($B)
 * Reconstructed from input/processed/adobe-q2-fy23.png as a fixed
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
  const RIGHT_LABEL_X = 2426;

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
      <rect x="${x}" y="1146" width="${width}" height="158" rx="31" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1197" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${header}</text>
      <text x="${x + width / 2}" y="1240" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1280" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creativeCloudIcon(104, 445)}
      ${acrobatIcon(227, 445)}
      ${adobeAIcon(165, 704)}
      ${kpiCard(33, 322, 'Creative ARR', '$11.6B', '+8% Y/Y')}
      ${kpiCard(371, 437, 'Document Cloud ARR', '$2.5B', '+17% Y/Y')}
      ${kpiCard(822, 240, 'RPO', '$15.2B', '+10% Y/Y')}
      <text x="220" y="1338" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
      <text x="159" y="1381" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = Remaining Performance Obligation</text>
      <text x="170" y="1436" text-anchor="start" font-size="30" font-weight="800" fill="#000000">Source: <tspan text-decoration="underline">Quarterly results</tspan></text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creativeCloudIcon(104, 445)}
      ${acrobatIcon(227, 445)}
      ${adobeAIcon(165, 704)}
      ${kpiCard(33, 322, '创意 ARR', '$11.6B', '同比 +8%')}
      ${kpiCard(371, 437, '文档云 ARR', '$2.5B', '同比 +17%')}
      ${kpiCard(822, 240, 'RPO', '$15.2B', '同比 +10%')}
      <text x="220" y="1338" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = 年化经常性收入</text>
      <text x="159" y="1381" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = 剩余履约义务</text>
      <text x="170" y="1436" text-anchor="start" font-size="30" font-weight="800" fill="#000000">来源：<tspan text-decoration="underline">季度业绩</tspan></text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q2-fy23',
    name: 'Adobe · Q2 FY23',
    company: 'Adobe',
    meta: {
      company: 'Adobe',
      title: 'Adobe Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending May 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q2-fy23.png', width: 2667, height: 1500 },
      titleY: 204,
      titleSize: 128,
      titleTextLength: 2118,
      periodX: 1334,
      periodY: 1318,
      periodNoteY: 1361,
      logoWidth: 628,
      logoHeight: 140,
      logoY: 247,
      logoViewBox: '0 0 628 140',
      logoSvg: adobeLogo,
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
        digital_media: { x: 403, y: 438, width: 71, height: 249 },
        digital_experience: { x: 403, y: 842, width: 71, height: 86 },
        publishing_advertising: { x: 403, y: 1105, width: 71, height: 4 },
        revenue: { x: 870, y: 585, width: 70, height: 341 },
        gross_profit: { x: 1334, y: 508, width: 72, height: 302 },
        cost_of_revenue: { x: 1342, y: 976, width: 71, height: 39 },
        operating_profit: { x: 1802, y: 433, width: 70, height: 115 },
        operating_expenses: { x: 1797, y: 677, width: 70, height: 185 },
        other_income: { x: 2130, y: 492, width: 70, height: 5 },
        net_profit: { x: 2271, y: 332, width: 71, height: 93 },
        tax: { x: 2271, y: 585, width: 71, height: 24 },
        sm: { x: 2271, y: 779, width: 71, height: 93 },
        rnd: { x: 2271, y: 940, width: 71, height: 60 },
        ga: { x: 2271, y: 1105, width: 71, height: 23 },
        amortization: { x: 2271, y: 1222, width: 71, height: 4 },
      },
      labels: {
        digital_media: {
          blocks: [
            {
              x: 438, top: 348, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 208, top: 579, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Digital Media', size: 34, weight: 800 },
                { text: '96% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        digital_experience: {
          blocks: [
            {
              x: 438, top: 747, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 208, top: 839, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Digital Experience', size: 34, weight: 800 },
                { text: '67% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        publishing_advertising: {
          blocks: [
            {
              x: 438, top: 997, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 34, weight: 400 },
                { text: '(9%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 211, top: 990, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Publishing', size: 34, weight: 800 },
                { text: '& Advertising', size: 34, weight: 800 },
                { text: '75% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 905, top: 438, anchor: 'middle', lineGap: 10,
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
              x: 1370, top: 326, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '88% margin', size: 29, weight: 400, color: NOTE },
                { text: 'Flat Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1378, top: 1037, anchor: 'middle', lineGap: 7,
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
              x: 1837, top: 250, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '34% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1832, top: 885, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2165, top: 503, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 350, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '27% margin', size: 29, weight: 400, color: NOTE },
                { text: 'Flat Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 579, anchor: 'start', lineGap: 8,
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
              x: RIGHT_LABEL_X, top: 779, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '28% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 936, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '18% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1077, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1191, anchor: 'start', lineGap: 8,
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
        id: 'digital_media', col: 0, order: 0, type: 'source',
        label: 'Digital Media', value: 3.5, notes: ['+10% Y/Y', '96% gross margin'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'digital_experience', col: 0, order: 1, type: 'source',
        label: 'Digital Experience', value: 1.2, notes: ['+12% Y/Y', '67% gross margin'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'publishing_advertising', col: 0, order: 2, type: 'source',
        label: ['Publishing', '& Advertising'], value: 0.1, notes: ['(9%) Y/Y', '75% gross margin'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 4.8, notes: ['+10% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 4.2, notes: ['88% margin', 'Flat Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 1.6, notes: ['34% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_income', col: 4, order: 0, type: 'profit',
        label: 'Other', value: 0.026, valueText: '$26M',
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 1.3, notes: ['27% margin', 'Flat Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: 'S&M', value: 1.3, notes: ['28% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 0.9, notes: ['18% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 0.4, notes: ['7% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'amortization', col: 5, order: 5, type: 'cost',
        label: 'Amortization', value: 0.042, valueText: '($42M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'digital_media', target: 'revenue', value: 3.5, sourceWidth: 249, targetWidth: 251, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.2, sourceWidth: 86, targetWidth: 86, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 4.2, sourceWidth: 302, targetWidth: 302, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 39, targetWidth: 39, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 117, targetWidth: 115, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.6, sourceWidth: 185, targetWidth: 185, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1.3, sourceWidth: 91, targetWidth: 88, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 24, targetWidth: 24, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.026, sourceWidth: 5, targetWidth: 5, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 1.3, sourceWidth: 98, targetWidth: 93, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 60, targetWidth: 60, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 23, targetWidth: 23, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.042, sourceWidth: 4, targetWidth: 4, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Adobe · 2023 财年第二季度',
        meta: {
          title: 'Adobe 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 5 月',
          titleTextLength: 2070,
          periodX: 1334,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +10%', '毛利率 96%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +12%', '毛利率 67%'] },
          publishing_advertising: { label: ['出版', '与广告'], notes: ['同比 (9%)', '毛利率 75%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 88%', '同比持平'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比持平'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 28%'] },
          rnd: { label: '研发', notes: ['占收入 18%'] },
          ga: { label: '一般及行政', notes: ['占收入 7%'] },
          amortization: { label: '摊销' },
        },
        layout: {
          labels: {
            digital_media: {
              blocks: [
                {
                  x: 438, top: 348, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +10%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 208, top: 579, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '数字媒体', size: 34, weight: 800 },
                    { text: '毛利率 96%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            digital_experience: {
              blocks: [
                {
                  x: 438, top: 747, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 208, top: 839, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '数字体验', size: 34, weight: 800 },
                    { text: '毛利率 67%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            publishing_advertising: {
              blocks: [
                {
                  x: 438, top: 997, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 34, weight: 400 },
                    { text: '同比 (9%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 211, top: 990, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '出版', size: 34, weight: 800 },
                    { text: '与广告', size: 34, weight: 800 },
                    { text: '毛利率 75%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 905, top: 438, anchor: 'middle', lineGap: 10,
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
                  x: 1370, top: 326, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 88%', size: 29, weight: 400, color: NOTE },
                    { text: '同比持平', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1378, top: 1037, anchor: 'middle', lineGap: 7,
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
                  x: 1837, top: 250, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 34%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1832, top: 885, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            other_income: {
              blocks: [
                {
                  x: 2165, top: 503, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 350, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 27%', size: 29, weight: 400, color: NOTE },
                    { text: '同比持平', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 579, anchor: 'start', lineGap: 8,
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
                  x: RIGHT_LABEL_X,top: 779, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 28%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 936, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 18%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 1077, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '一般及行政', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 7%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: RIGHT_LABEL_X,top: 1191, anchor: 'start', lineGap: 8,
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

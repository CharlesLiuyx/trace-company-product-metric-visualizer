/* ====================================================================
 * Adobe - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/adobe-q4-fy25.png as a fixed
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
  const RIGHT_LABEL_X = 2475;

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
      ${creativeCloudIcon(104, 416)}
      ${acrobatIcon(228, 416)}
      ${adobeAIcon(164, 693)}
      ${kpiCard(76, 217, 'ARR', '$25.2B', '+12% Y/Y')}
      ${kpiCard(299, 240, 'RPO', '$22.5B', '+13% Y/Y')}
      <text x="110" y="1312" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
      <text x="49" y="1348" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = Remaining Performance Obligations</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creativeCloudIcon(104, 416)}
      ${acrobatIcon(228, 416)}
      ${adobeAIcon(164, 693)}
      ${kpiCard(76, 217, 'ARR', '$25.2B', '同比 +12%')}
      ${kpiCard(299, 240, 'RPO', '$22.5B', '同比 +13%')}
      <text x="110" y="1312" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = 年化经常性收入</text>
      <text x="49" y="1348" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = 剩余履约义务</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q4-fy25',
    name: 'Adobe · Q4 FY25',
    company: 'Adobe',
    meta: {
      company: 'Adobe',
      title: 'Adobe Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Nov. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q4-fy25.png', width: 2667, height: 1500 },
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
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        digital_media: { x: 406, y: 389, width: 71, height: 260 },
        digital_experience: { x: 406, y: 806, width: 71, height: 82 },
        publishing_advertising: { x: 406, y: 1028, width: 71, height: 2 },
        revenue: { x: 873, y: 617, width: 70, height: 349 },
        gross_profit: { x: 1340, y: 503, width: 71, height: 311 },
        cost_of_revenue: { x: 1340, y: 1010, width: 71, height: 35 },
        operating_profit: { x: 1812, y: 414, width: 71, height: 126 },
        operating_expenses: { x: 1810, y: 727, width: 70, height: 184 },
        net_profit: { x: 2274, y: 324, width: 71, height: 103 },
        tax: { x: 2274, y: 624, width: 71, height: 20 },
        sm: { x: 2274, y: 799, width: 71, height: 97 },
        rnd: { x: 2274, y: 997, width: 71, height: 60 },
        ga: { x: 2274, y: 1162, width: 71, height: 23 },
        amortization: { x: 2274, y: 1299, width: 71, height: 1 },
      },
      labels: {
        digital_media: {
          blocks: [
            {
              x: 441, top: 298, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 229, top: 548, anchor: 'middle', lineGap: 8, semanticRole: 'reference-offset-side-label',
              lines: [
                { text: 'Digital Media', size: 34, weight: 800, textLength: 251, lengthAdjust: 'spacingAndGlyphs' },
              ],
            },
          ],
        },
        digital_experience: {
          blocks: [
            {
              x: 441, top: 716, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 217, top: 829, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Digital Experience', size: 34, weight: 800, textLength: 345, lengthAdjust: 'spacingAndGlyphs' },
              ],
            },
          ],
        },
        publishing_advertising: {
          blocks: [
            {
              x: 441, top: 969, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 34, weight: 400 }],
            },
            {
              x: 216, top: 984, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Publishing', size: 34, weight: 800 },
                { text: '& Advertising', size: 34, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 908, top: 475, anchor: 'middle', lineGap: 10,
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
              x: 1375, top: 321, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '90% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1375, top: 1071, anchor: 'middle', lineGap: 7,
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
              x: 1847, top: 236, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '37% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1845, top: 930, anchor: 'middle', lineGap: 8,
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
              x: RIGHT_LABEL_X, top: 330, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '30% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 596, anchor: 'middle', lineGap: 8,
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
              x: RIGHT_LABEL_X, top: 792, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '28% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 964, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '18% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1128, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1285, anchor: 'middle', lineGap: 8,
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
        label: 'Digital Media', value: 4.6, notes: ['+12% Y/Y'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'digital_experience', col: 0, order: 1, type: 'source',
        label: 'Digital Experience', value: 1.5, notes: ['+6% Y/Y'],
        color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'publishing_advertising', col: 0, order: 2, type: 'source',
        label: ['Publishing', '& Advertising'], value: 0.1, color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 6.2, notes: ['+10% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREY_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 5.5, notes: ['90% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 2.3, notes: ['37% margin', '+2pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 3.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net profit', value: 1.9, notes: ['30% margin', '(0pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 4, order: 1, type: 'cost',
        label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 4, order: 2, type: 'cost',
        label: 'S&M', value: 1.7, notes: ['28% of revenue', '+0pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 4, order: 3, type: 'cost',
        label: 'R&D', value: 1.1, notes: ['18% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 4, order: 4, type: 'cost',
        label: 'G&A', value: 0.4, notes: ['7% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'amortization', col: 4, order: 5, type: 'cost',
        label: 'Amortization', value: 0.037, valueText: '($37M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'digital_media', target: 'revenue', value: 4.6, sourceWidth: 260, targetWidth: 261, y0: 519, y1: 747.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.5, sourceWidth: 82, targetWidth: 85, y0: 847, y1: 920.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 1029, y1: 964.5, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 5.5, sourceWidth: 315, targetWidth: 311, y0: 774.5, y1: 658.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 34, targetWidth: 35, y0: 949, y1: 1027.5, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceWidth: 127, targetWidth: 126, y0: 566.5, y1: 477, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.3, sourceWidth: 184, targetWidth: 184, y0: 722, y1: 819, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 106, targetWidth: 103, y0: 467, y1: 375.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 20, targetWidth: 20, y0: 530, y1: 634, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_expenses', target: 'sm', value: 1.7, sourceWidth: 100, targetWidth: 97, y0: 777, y1: 847.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 60, targetWidth: 60, y0: 857, y1: 1027, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 23, targetWidth: 23, y0: 898.5, y1: 1173.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.037, sourceWidth: 1, targetWidth: 1, y0: 910.5, y1: 1299.5, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Adobe · 2025 财年第四季度',
        meta: {
          title: 'Adobe 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 11 月',
          titleTextLength: 2070,
          periodX: 2455,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +12%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +6%'] },
          publishing_advertising: { label: ['出版', '与广告'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 90%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 28%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 7%', '同比 (1 个百分点)'] },
          amortization: { label: '摊销' },
        },
        layout: {
          labels: {
            digital_media: {
              blocks: [
                {
                  x: 441, top: 298, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 229, top: 548, anchor: 'middle', lineGap: 8, semanticRole: 'reference-offset-side-label',
                  lines: [
                    { text: '数字媒体', size: 34, weight: 800 },
                  ],
                },
              ],
            },
            digital_experience: {
              blocks: [
                {
                  x: 441, top: 716, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +6%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 217, top: 829, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '数字体验', size: 34, weight: 800 },
                  ],
                },
              ],
            },
            publishing_advertising: {
              blocks: [
                {
                  x: 441, top: 969, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 34, weight: 400 }],
                },
                {
                  x: 216, top: 984, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '出版', size: 34, weight: 800 },
                    { text: '与广告', size: 34, weight: 800 },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 908, top: 475, anchor: 'middle', lineGap: 10,
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
                  x: 1375, top: 321, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 90%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1375, top: 1071, anchor: 'middle', lineGap: 7,
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
                  x: 1847, top: 236, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 37%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1845, top: 930, anchor: 'middle', lineGap: 13,
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
                  x: RIGHT_LABEL_X, top: 330, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 30%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 23, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 596, anchor: 'middle', lineGap: 8,
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
                  x: RIGHT_LABEL_X, top: 792, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与市场', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 28%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 964, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 18%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1128, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '一般及行政', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 7%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1285, anchor: 'middle', lineGap: 8,
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

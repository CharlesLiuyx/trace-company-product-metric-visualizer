/* ====================================================================
 *  The NYT - Q4 FY25 income statement ($M)
 *  Reconstructed from input/processed/nyt-q4-fy25.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';

  const statsCard = (x, width, title, value, note, titleTextLength, noteTextLength, fontFamily = 'Montserrat,Arial,sans-serif') => `
    <g>
      <rect x="${x}" y="2040" width="${width}" height="288" rx="52" fill="#000000"/>
      <text x="${x + width / 2}" y="2135" text-anchor="middle" font-family="${fontFamily}" font-size="50" font-weight="800" fill="#ffffff" textLength="${titleTextLength}" lengthAdjust="spacingAndGlyphs">${title}</text>
      <text x="${x + width / 2}" y="2208" text-anchor="middle" font-family="${fontFamily}" font-size="55" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="2274" text-anchor="middle" font-family="${fontFamily}" font-size="39" font-weight="500" fill="#ffffff" textLength="${noteTextLength}" lengthAdjust="spacingAndGlyphs">${note}</text>
    </g>`;

  const digitalDevice = `
    <g transform="translate(58 780)">
      <rect x="12" y="4" width="215" height="150" rx="6" fill="#111111"/>
      <rect x="23" y="16" width="193" height="120" fill="#f2f3f4"/>
      <rect x="44" y="35" width="58" height="78" fill="#ffffff" stroke="#d3d4d5" stroke-width="3"/>
      <rect x="113" y="42" width="72" height="58" fill="#cbdde6"/>
      <rect x="190" y="41" width="20" height="72" fill="#ffffff"/>
      <rect x="194" y="52" width="34" height="43" fill="#e01719"/>
      <text x="119" y="28" text-anchor="middle" font-family="Georgia,serif" font-size="12" font-weight="700" fill="#000000">The New York Times</text>
      <g stroke="#747474" stroke-width="2">
        <path d="M48 122 H98 M113 110 H178 M44 74 H96 M43 84 H93 M43 94 H92"/>
      </g>
      <path d="M8 154 H231 L255 174 H0 Z" fill="#eeeeee" stroke="#626262" stroke-width="2"/>
      <rect x="95" y="156" width="57" height="7" rx="2" fill="#a5a5a5"/>
      <ellipse cx="127" cy="181" rx="118" ry="8" fill="#565656" opacity="0.38"/>
    </g>`;

  const printStack = `
    <g transform="translate(45 1430)">
      <g fill="#f8f8f8" stroke="#a6a6a6" stroke-width="3">
        <path d="M13 149 C80 126 172 117 264 138 L264 170 C167 159 83 166 16 190 Z"/>
        <path d="M22 119 C91 97 184 88 279 112 L276 147 C180 127 92 139 20 157 Z"/>
        <path d="M37 88 C111 61 205 56 291 83 L286 122 C193 97 106 104 30 132 Z"/>
        <path d="M53 55 C132 29 223 23 303 48 L298 88 C207 67 127 72 46 101 Z"/>
        <path d="M69 25 C146 5 235 2 314 27 L308 66 C225 46 143 50 61 76 Z"/>
      </g>
      <g stroke="#747474" stroke-width="3" opacity="0.75">
        <path d="M75 48 C136 39 198 39 277 54"/>
        <path d="M62 82 C137 69 206 72 291 90"/>
        <path d="M47 116 C128 100 199 105 277 123"/>
        <path d="M31 151 C112 138 195 141 264 157"/>
      </g>
      <g stroke-width="4" opacity="0.72">
        <path d="M95 49 H133" stroke="#b71d2a"/>
        <path d="M152 49 H196" stroke="#d4b226"/>
        <path d="M213 50 H248" stroke="#2e70bc"/>
        <path d="M88 84 H126" stroke="#859b46"/>
        <path d="M181 87 H221" stroke="#bc2525"/>
      </g>
      <path d="M71 198 C139 214 238 212 307 184" fill="none" stroke="#cfcfcf" stroke-width="9" opacity="0.65"/>
    </g>`;

  const nytWordmark = `
    <g transform="translate(1995 432)" fill="#000000" font-family="Old English Text MT,UnifrakturMaguntia,Georgia,Times New Roman,serif" font-weight="900" text-anchor="middle">
      <text x="0" y="118" font-size="112">The</text>
      <text x="0" y="255" font-size="128">New York</text>
      <text x="0" y="390" font-size="128">Times</text>
    </g>`;

  const wirecutterWordmark = `
    <g transform="translate(370 1917)" fill="#000000" font-family="Georgia,Times New Roman,serif">
      <text x="0" y="64" font-size="54" font-weight="900">T</text>
      <rect x="58" y="18" width="3" height="55" fill="#000000" opacity="0.65"/>
      <text x="78" y="68" font-family="Arial Black,Arial,sans-serif" font-size="58" font-weight="900">Wirecutter</text>
    </g>`;

  const annotations = `
    <g transform="scale(0.569142)" font-family="Montserrat,Arial,sans-serif">
      ${statsCard(35, 667, 'Digital subscribers', '12.2M', '+12% Y/Y', 489, 204)}
      ${statsCard(722, 535, 'Digital ARPU', '$9.72', '+1% Y/Y', 325, 176)}
      <text x="118" y="2388" font-family="Montserrat,Arial,sans-serif" font-size="50" font-weight="500" fill="${NOTE}" textLength="780" lengthAdjust="spacingAndGlyphs">ARPU = Average Revenue Per User</text>
    </g>`;

  const annotationsZh = `
    <g transform="scale(0.569142)" font-family="Montserrat,Arial,sans-serif">
      ${statsCard(35, 667, '数字订阅用户', '12.2M', '同比 +12%', 330, 150, 'Noto Sans SC,Noto Sans,Arial,sans-serif')}
      ${statsCard(722, 535, '数字业务 ARPU', '$9.72', '同比 +1%', 300, 140, 'Noto Sans SC,Noto Sans,Arial,sans-serif')}
      <text x="118" y="2388" font-family="Noto Sans SC,Noto Sans,Arial,sans-serif" font-size="50" font-weight="500" fill="${NOTE}" textLength="650" lengthAdjust="spacingAndGlyphs">ARPU = 每用户平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nyt-q4-fy25',
    name: 'The NYT - Q4 FY25',
    company: 'The New York Times Company',
    meta: {
      company: 'The New York Times Company',
      title: 'The NYT Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/nyt-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 127,
      titleWeight: 800,
      titleTextLength: 2225,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
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
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 40, note: 29, lineGap: 12 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      {
        key: 'nyt-company-wordmark',
        href: 'data/assets/raster-annotations/nyt/company-wordmark.png',
        x: 933,
        y: 228,
        width: 433,
        height: 285,
      },
      {
        key: 'nyt-business-digital-device',
        href: 'data/assets/raster-annotations/nyt/business-digital-device.png',
        x: 10,
        y: 426,
        width: 185,
        height: 128,
      },
      {
        key: 'nyt-business-print-newspapers',
        href: 'data/assets/raster-annotations/nyt/business-print-newspapers.png',
        x: 9,
        y: 797,
        width: 199,
        height: 145,
      },
      {
        key: 'nyt-business-wirecutter-wordmark',
        href: 'data/assets/raster-annotations/nyt/business-wirecutter-wordmark.png',
        x: 194,
        y: 1079,
        width: 342,
        height: 74,
      },
    ],

    layout: {
      scale: 0.422,
      nodes: {
        digital: { x: 364, y: 436, width: 71, height: 161 },
        print: { x: 364, y: 821, width: 71, height: 54 },
        subscription: { x: 738, y: 545, width: 70, height: 216 },
        advertising: { x: 738, y: 903, width: 70, height: 80 },
        other_revenue: { x: 738, y: 1099, width: 70, height: 41 },
        revenue: { x: 1112, y: 671, width: 70, height: 342 },
        gross_profit: { x: 1485, y: 542, width: 71, height: 184 },
        cost_of_revenue: { x: 1485, y: 933, width: 71, height: 155 },
        operating_profit: { x: 1859, y: 442, width: 71, height: 68 },
        operating_expenses: { x: 1859, y: 741, width: 71, height: 115 },
        interest: { x: 2088, y: 303, width: 77, height: 4 },
        net_profit: { x: 2232, y: 325, width: 71, height: 53 },
        tax_other: { x: 2232, y: 575, width: 71, height: 16 },
        sm: { x: 2232, y: 756, width: 71, height: 38 },
        ga: { x: 2232, y: 895, width: 71, height: 36 },
        product: { x: 2232, y: 1031, width: 71, height: 27 },
        da: { x: 2232, y: 1165, width: 71, height: 7 },
        other_expense: { x: 2232, y: 1294, width: 71, height: 2 },
      },
      labels: {
        digital: {
          blocks: [
            {
              x: 403, top: 338, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 270, top: 500, anchor: 'middle',
              lines: [{ text: 'Digital', size: 40, weight: 800 }],
            },
          ],
        },
        print: {
          blocks: [
            {
              x: 397, top: 723, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(2%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 271, top: 827, anchor: 'middle',
              lines: [{ text: 'Print', size: 40, weight: 800 }],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 776, top: 393, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 773, top: 803, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 570, top: 921, anchor: 'middle',
              lines: [{ text: 'Advertising', size: 40, weight: 800 }],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 776, top: 1001, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 612, top: 1094, anchor: 'middle',
              lines: [{ text: 'Other', size: 40, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1144, top: 517, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1516, top: 351, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '54% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1516, top: 1105, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Cost of', size: 35, weight: 800 },
                { text: 'revenue', size: 35, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1889, top: 254, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '20% margin', size: 27, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1889, top: 872, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
              ],
            },
            {
              x: 1888, top: 978, anchor: 'middle',
              lines: [{ text: '$value', size: 40, weight: 400 }],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2122.5, top: 213, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2425, top: 286, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '16% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax_other: {
          blocks: [
            {
              x: 2425, top: 540, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Tax & other', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2419, top: 892, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'G&A ($89M)', size: 30, weight: 800 },
                { text: '11% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2425, top: 752, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'S&M ($92M)', size: 30, weight: 800 },
                { text: '12% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        product: {
          blocks: [
            {
              x: 2425, top: 1024, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Product ($67M)', size: 31, weight: 800 },
                { text: '8% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        da: {
          blocks: [
            {
              x: 2419, top: 1147, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'D&A ($21M)', size: 30, weight: 800 },
                { text: '3% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: 2416, top: 1272, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Other ($4M)', size: 31, weight: 800 },
                { text: '1% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'digital', col: 0, order: 0, type: 'source',
        label: 'Digital', value: 382, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'print', col: 0, order: 1, type: 'source',
        label: 'Print', value: 129, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'subscription', col: 1, order: 0, type: 'hub',
        label: 'Subscription', value: 510, notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'advertising', col: 1, order: 1, type: 'source',
        label: 'Advertising', value: 192, notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'other_revenue', col: 1, order: 2, type: 'source',
        label: 'Other', value: 100, notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 802, notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 435, notes: ['54% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 367, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 162, notes: ['20% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 274, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest', col: 5, order: 0, type: 'profit',
        label: 'Interest', value: 11, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 130, notes: ['16% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax_other', col: 6, order: 1, type: 'cost',
        label: 'Tax & other', value: 42, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 3, type: 'cost',
        label: 'G&A', value: 89, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 6, order: 2, type: 'cost',
        label: 'S&M', value: 92, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'product', col: 6, order: 4, type: 'cost',
        label: 'Product', value: 67, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'da', col: 6, order: 5, type: 'cost',
        label: 'D&A', value: 21, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_expense', col: 6, order: 6, type: 'cost',
        label: 'Other', value: 4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'digital', target: 'subscription', value: 382, sourceWidth: 161, targetWidth: 161, y0: 516.5, y1: 625.5 },
      { source: 'print', target: 'subscription', value: 129, sourceWidth: 54, targetWidth: 55, y0: 848, y1: 733.5 },

      { source: 'subscription', target: 'revenue', value: 510, sourceWidth: 216, targetWidth: 218, y0: 653, y1: 780 },
      { source: 'advertising', target: 'revenue', value: 192, sourceWidth: 80, targetWidth: 84, y0: 943, y1: 930 },
      { source: 'other_revenue', target: 'revenue', value: 100, sourceWidth: 41, targetWidth: 42, y0: 1119.5, y1: 992 },

      { source: 'revenue', target: 'gross_profit', value: 435, sourceWidth: 186, targetWidth: 184, y0: 764, y1: 634, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 367, sourceWidth: 158, targetWidth: 155, y0: 934, y1: 1010.5 },

      { source: 'gross_profit', target: 'operating_profit', value: 162, sourceWidth: 69, targetWidth: 68, y0: 576.5, y1: 476 },
      { source: 'gross_profit', target: 'operating_expenses', value: 274, sourceWidth: 115, targetWidth: 115, y0: 668.5, y1: 798.5 },

      {
        source: 'operating_profit', target: 'net_profit', value: 130, sourceWidth: 51, targetWidth: 50,
        y0: 467.5, y1: 353, sourceOrder: 0, targetOrder: 1,
        curve: { x0: 1930, x1: 2232, c1x: 2040, c1y: 467.5, c2x: 2135, c2y: 353 },
      },
      {
        source: 'interest', target: 'net_profit', value: 11, sourceWidth: 4, targetWidth: 3,
        y0: 305, y1: 326.5, targetOrder: 0,
        curve: { x0: 2165, x1: 2232, c1x: 2184, c1y: 305, c2x: 2210, c2y: 326.5 },
      },
      {
        source: 'operating_profit', target: 'tax_other', value: 42, sourceWidth: 17, targetWidth: 16,
        y0: 501.5, y1: 583, sourceOrder: 1,
        curve: { x0: 1930, x1: 2232, c1x: 2035, c1y: 501.5, c2x: 2138, c2y: 583 },
      },

      { source: 'operating_expenses', target: 'sm', value: 92, sourceWidth: 41, targetWidth: 38, y0: 761.5, y1: 775, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 89, sourceWidth: 40, targetWidth: 36, y0: 800, y1: 913, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'product', value: 67, sourceWidth: 31, targetWidth: 27, y0: 833.5, y1: 1044.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'da', value: 21, sourceWidth: 7, targetWidth: 7, y0: 850.5, y1: 1168.5, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other_expense', value: 4, sourceWidth: 2, targetWidth: 2, y0: 855, y1: 1295, sourceOrder: 4 },
    ],

    i18n: {
      preservedAnnotationText: ['The New York Times', 'New York'],
      zh: {
        name: 'The NYT · 2025 财年第四季度',
        meta: {
          title: 'The NYT 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          digital: { label: '数字', notes: ['同比 +14%'] },
          print: { label: '印刷', notes: ['同比 (2%)'] },
          subscription: { label: '订阅', notes: ['同比 +9%'] },
          advertising: { label: '广告', notes: ['同比 +16%'] },
          other_revenue: { label: '其他', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 (1 个百分点)'] },
          tax_other: { label: '税费及其他' },
          ga: { label: '管理费用' },
          sm: { label: '销售与市场' },
          product: { label: '产品' },
          da: { label: '折旧与摊销' },
          other_expense: { label: '其他' },
        },
        layout: {
          labels: {
            sm: {
              blocks: [
                {
                  x: 2315, top: 752, anchor: 'start', lineGap: 12,
                  lines: [
                    { text: '销售与市场 ($92M)', size: 30, weight: 800, color: RED_LABEL },
                    { text: '占收入 12%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2315, top: 892, anchor: 'start', lineGap: 11,
                  lines: [
                    { text: '管理费用 ($89M)', size: 30, weight: 800, color: RED_LABEL },
                    { text: '占收入 11%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            product: {
              blocks: [
                {
                  x: 2315, top: 1024, anchor: 'start', lineGap: 12,
                  lines: [
                    { text: '产品 ($67M)', size: 31, weight: 800, color: RED_LABEL },
                    { text: '占收入 8%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            da: {
              blocks: [
                {
                  x: 2315, top: 1147, anchor: 'start', lineGap: 12,
                  lines: [
                    { text: '折旧与摊销 ($21M)', size: 30, weight: 800, color: RED_LABEL },
                    { text: '占收入 3%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 30, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_expense: {
              blocks: [
                {
                  x: 2315, top: 1272, anchor: 'start', lineGap: 11,
                  lines: [
                    { text: '其他 ($4M)', size: 31, weight: 800, color: RED_LABEL },
                    { text: '占收入 1%', size: 30, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 30, weight: 400, color: NOTE },
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

/* ====================================================================
 * Expedia - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/expedia-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations.
 *
 * Source-chart quirks mirrored here (see data/income-statements/expedia.js):
 * - GAAP opex is $2.798B, but the chart cannot draw the negative
 *   "Legal reserves, occupancy tax and other" credit ($-64M), so the
 *   drawn opex bar sums the five positive items ($2.862B) and the
 *   label shows the sum of rounded items "($2.9B)".
 * - The top-right "Other ($0.3B)" bar is interest expense + other,
 *   net + tax ($323M); the $12M net loss backfills it as a thin line.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#202843';
  const NAVY_LINK = '#9397a3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const LOSS_LINE = '#cc4b4b';
  const NOTE = '#666666';

  /* Expedia aircraft mark, contour-traced from the validated crop
   * data/assets/icon-references/expedia/crops/company-logo.png in
   * logo-box coordinates (circle center 60,61 radius 61). */
  const expediaMarkPath =
    'M37.0 24.0 L78.0 45.0 L110.0 30.0 L114.0 33.0 L84.0 54.0 L82.0 93.0 L80.0 101.0 L78.0 101.0 L74.0 70.0 L70.0 62.0 L31.0 83.0 L10.0 93.0 L7.0 92.0 L7.0 90.0 L65.0 53.0 L58.0 44.0 L37.0 28.0 L36.0 25.0 Z';

  const logoSvg = `
    <circle cx="60" cy="61" r="61" fill="${NAVY}"/>
    <path d="${expediaMarkPath}" fill="#ffc94c"/>
    <text x="153" y="102" font-family="Montserrat,Arial,sans-serif" font-size="114" font-weight="600" textLength="409" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">Expedia</text>`;

  /* Segment icons drawn at source-image coordinates; geometry traced
   * from the validated crops under data/assets/icon-references/expedia/. */
  const expediaAppIcon = `
    <g transform="translate(233 506)">
      <rect x="8" y="11" width="68" height="68" rx="15" fill="#ffc94c"/>
      <circle cx="42" cy="45" r="26" fill="${NAVY}"/>
      <g transform="translate(42 45) scale(0.4262) translate(-60 -61)">
        <path d="${expediaMarkPath}" fill="#ffc94c"/>
      </g>
    </g>`;

  const vrboIcon = `
    <g transform="translate(312 505)">
      <rect x="6" y="8" width="69" height="69" rx="15" fill="#0e214b"/>
      <g fill="none" stroke-linecap="round">
        <path d="M20 21 C20 30 24 46 31 64" stroke="#71bef0" stroke-width="2.4"/>
        <path d="M25 21 C26 32 30 48 34 64" stroke="#318dec" stroke-width="2.4"/>
        <path d="M30 21 C31 32 34 48 37 61" stroke="#2f79d1" stroke-width="2.3"/>
        <path d="M34 21 C34 31 37 45 39 56" stroke="#e77036" stroke-width="2.3"/>
        <path d="M38 21 C38 29 40 42 42 51" stroke="#82b183" stroke-width="2.4"/>
        <path d="M50 21 C51 28 48 40 43 52" stroke="#82b183" stroke-width="2.2"/>
        <path d="M55 20 C56 29 51 42 45 55" stroke="#e77036" stroke-width="2.2"/>
        <path d="M60 19 C61 30 55 45 46 58" stroke="#318dec" stroke-width="2.2"/>
      </g>
    </g>`;

  const airPlaneIcon = `
    <g transform="translate(222 813)">
      <path d="M24 8 L26 8 L29 11 L26 14 L27 15 L30 15 L35 10 L37 11 L38 14 L35 17 L41 19 L45 19 L58 8 L67 9 L67 16 L65 20 L55 31 L58 41 L61 38 L65 40 L64 43 L59 46 L60 48 L62 49 L65 47 L67 49 L67 52 L62 55 L65 62 L62 67 L53 57 L50 51 L42 44 L31 52 L32 65 L30 67 L23 55 L21 55 L12 63 L20 52 L8 45 L10 43 L23 44 L31 33 L23 24 L17 21 L8 12 L13 10 L21 13 L24 9 Z" fill="#8b9096"/>
      <path d="M10 11 L14 11 L25 16 L30 16 L35 19 L44 20 L31 32 L27 25 L25 25 L26 24 L24 22 L22 23 L22 21 L20 22 L21 21 L19 19 L10 14 L11 12 Z" fill="#2fa3dc"/>
      <path d="M54 32 L57 44 L59 46 L58 49 L60 49 L59 55 L62 63 L64 64 L62 65 L59 60 L57 60 L57 57 L55 55 L54 57 L50 49 L44 43 L49 37 L51 39 L53 38 L53 36 L51 35 L53 33 Z" fill="#2fa3dc"/>
      <path d="M10 44 L23 45 L21 52 L9 45 Z" fill="#2fa3dc"/>
      <path d="M29 52 L31 60 L30 66 L24 55 L28 53 Z" fill="#2fa3dc"/>
      <path d="M57 13 L61 15 L61 19 L50 30 L36 38 L28 45 L28 42 L32 36 L53 15 L56 14 Z" fill="#e4e7e9"/>
      <path d="M63 17 L64 19 L63 21 L40 45 L30 51 L29 50 L24 52 L23 54 L28 49 L31 49 L36 46 L55 29 L64 19 L63 18 Z" fill="#6e747a"/>
      <path d="M44 21 L34 31 L43 22 Z" fill="#6e747a"/>
      <path d="M64 41 L61 44 L58 44 L59 42 L60 43 L63 42 Z" fill="#6e747a"/>
    </g>`;

  const trivagoIcon = `
    <g transform="translate(74 950)">
      <rect x="7" y="8" width="68" height="68" rx="15" fill="#fefefe"/>
      <path d="M17 34 L18 34 L19 36 L21 36 L18 38 L18 40 L21 42 L20 43 L17 42 L17 38 L15 36 L17 35 Z" fill="#017eab"/>
      <path d="M23 36 L25 37 L27 36 L24 38 L24 42 L23 42 L23 37 Z" fill="#017eab"/>
      <path d="M29 36 L30 36 L30 42 L29 42 L29 37 Z" fill="#017eab"/>
      <path d="M33 36 L34 36 L35 40 L36 41 L38 39 L39 36 L40 36 L37 42 L35 42 L34 38 L33 37 Z" fill="#f1920c"/>
      <path d="M56 36 L57 37 L57 42 L56 40 Z" fill="#f1920c"/>
      <path d="M42 36 L47 36 L48 42 L45 42 L44 43 L41 42 L42 39 L46 39 L47 38 L45 36 L43 36 Z" fill="#f1920c"/>
      <path d="M51 36 L54 36 L55 37 L57 36 L57 44 L56 46 L54 47 L50 46 L50 45 L51 46 L54 46 L56 44 L55 42 L53 43 L50 42 L50 37 Z" fill="#c84a32"/>
      <path d="M60 36 L64 36 L65 37 L66 39 L65 42 L61 43 L59 41 L59 37 Z" fill="#c84a32"/>
    </g>`;

  const CARD_BASELINES = [50, 89, 119];
  const statsCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="24" fill="${NAVY}"/>
      ${lines
        .map((line, index) => `<text x="${x + width / 2}" y="${y + CARD_BASELINES[index]}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`)
        .join('')}
    </g>`;

  const iconsSvg = `
      ${expediaAppIcon}
      ${vrboIcon}
      ${airPlaneIcon}
      ${trivagoIcon}`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${iconsSvg}
      ${statsCard(100, 1197, 305, 148, [
        { text: 'Gross bookings', size: 27, weight: 700 },
        { text: '$35.5B', size: 27, weight: 400 },
        { text: '+13% Y/Y', size: 23, weight: 400 },
      ])}
      ${statsCard(416, 1197, 330, 150, [
        { text: 'Nights booked', size: 27, weight: 700 },
        { text: '114M', size: 27, weight: 400 },
        { text: '+6% Y/Y', size: 23, weight: 400 },
      ])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${iconsSvg}
      ${statsCard(100, 1197, 305, 148, [
        { text: '总预订额', size: 27, weight: 700 },
        { text: '$35.5B', size: 27, weight: 400 },
        { text: '同比 +13%', size: 23, weight: 400 },
      ])}
      ${statsCard(416, 1197, 330, 150, [
        { text: '预订夜晚数', size: 27, weight: 700 },
        { text: '1.14 亿', size: 27, weight: 400 },
        { text: '同比 +6%', size: 23, weight: 400 },
      ])}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'expedia-q1-fy26',
    name: 'Expedia · Q1 FY26',
    company: 'Expedia',
    meta: {
      company: 'Expedia',
      title: 'Expedia Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/expedia-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1338,
      titleY: 189,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2199,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      /* logo box is widened so the engine's hub-centered placement puts
       * the circle's left edge at source x=594: hub center 919.5 - 649/2
       * = 595. Content occupies 0..715 of the 649-wide box. */
      logoWidth: 649,
      logoHeight: 127,
      logoY: 250,
      logoViewBox: '0 0 649 127',
      logoSvg,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 113.3,
      nodes: {
        lodging: { x: 417, y: 425, width: 72, height: 296 },
        air: { x: 417, y: 852, width: 72, height: 11 },
        advertising: { x: 417, y: 977, width: 72, height: 35 },
        other_revenue: { x: 417, y: 1121, width: 72, height: 43 },
        revenue: { x: 884, y: 586, width: 72, height: 388 },
        gross_profit: { x: 1351, y: 505, width: 72, height: 346 },
        cost_of_revenue: { x: 1351, y: 1068, width: 72, height: 41 },
        other_income: { x: 1698, y: 475, width: 72, height: 6 },
        operating_profit: { x: 1818, y: 400, width: 72, height: 27 },
        operating_expenses: { x: 1818, y: 619, width: 72, height: 324 },
        net_loss: { x: 2140, y: 429, width: 80, height: 3 },
        other: { x: 2285, y: 318, width: 72, height: 28 },
        sm: { x: 2285, y: 567, width: 72, height: 233 },
        technology: { x: 2285, y: 915, width: 72, height: 35 },
        amortization: { x: 2285, y: 1053, width: 72, height: 24 },
        ga: { x: 2285, y: 1187, width: 72, height: 20 },
        other_opex: { x: 2285, y: 1305, width: 72, height: 5 },
      },
      labels: {
        lodging: {
          blocks: [
            {
              x: 454, top: 326, anchor: 'middle', lineGap: 15,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 314, top: 592, anchor: 'middle', lines: [{ text: 'Lodging', size: 40, weight: 800 }] },
          ],
        },
        air: {
          blocks: [
            {
              x: 456, top: 754, anchor: 'middle', lineGap: 15,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: 'Flat Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 317, top: 828, anchor: 'start', lines: [{ text: 'Air', size: 40, weight: 800 }] },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 454, top: 878, anchor: 'middle', lineGap: 15,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 160, top: 964, anchor: 'start', lines: [{ text: 'Advertising', size: 40, weight: 800 }] },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 454, top: 1022, anchor: 'middle', lineGap: 15,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 265, top: 1114, anchor: 'start', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 916, top: 433, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1386, top: 314, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '89% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1387, top: 1123, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 1731, top: 489, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Other income', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1850, top: 207, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '7% margin', size: 29, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1850, top: 956, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        net_loss: {
          blocks: [
            {
              x: 2180, top: 444, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net loss', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2485, top: 290, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2485, top: 583, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales &', size: 32, weight: 800 },
                { text: 'marketing', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '60% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        technology: {
          blocks: [
            {
              x: 2484, top: 888, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Technology', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2484, top: 1023, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Amortization', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2485, top: 1155, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'G&A', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2486, top: 1263, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'lodging', col: 0, order: 0, type: 'source', label: 'Lodging', value: 2.610, notes: ['+14% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'air', col: 0, order: 1, type: 'source', label: 'Air', value: 0.107, valueText: '$0.1B', notes: ['Flat Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'advertising', col: 0, order: 2, type: 'source', label: 'Advertising', value: 0.322, notes: ['+24% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'other_revenue', col: 0, order: 3, type: 'source', label: 'Other', value: 0.387, notes: ['+16% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.426, notes: ['+15% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.049, notes: ['89% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.377, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other income', value: 0.060, valueText: '$0.1B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.251, notes: ['7% margin', '+10pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.798, valueText: '($2.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 5, order: 0, type: 'cost', label: 'Net loss', value: -0.012, valueText: '($12M)', color: LOSS_LINE, labelColor: RED_LABEL, linkTint: LOSS_LINE },
      { id: 'other', col: 6, order: 0, type: 'cost', label: 'Other', value: 0.323, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 1, type: 'cost', label: ['Sales &', 'marketing'], value: 2.058, notes: ['60% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology', col: 6, order: 2, type: 'cost', label: 'Technology', value: 0.324, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 6, order: 3, type: 'cost', label: 'Amortization', value: 0.228, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.196, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 6, order: 5, type: 'cost', label: 'Other', value: 0.056, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'lodging', target: 'revenue', value: 2.610, width: 296, sourceOrder: 0, targetOrder: 0 },
      { source: 'air', target: 'revenue', value: 0.107, width: 11, sourceOrder: 0, targetOrder: 1 },
      { source: 'advertising', target: 'revenue', value: 0.322, width: 35, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_revenue', target: 'revenue', value: 0.387, width: 43, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 3.049, width: 346, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.377, width: 41, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* The drawn gross->operating band is the residual after the five
       * drawn opex items (~$0.19B, 20px); the link keeps the GAAP
       * operating-profit value for tooltips. */
      { source: 'gross_profit', target: 'operating_profit', value: 0.251, width: 20, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.798, width: 324, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_profit', value: 0.060, width: 6, sourceOrder: 0, targetOrder: 1, y0: 478, y1: 424 },

      /* Operating profit plus joined other income flow on into the
       * combined non-operating "Other" outflow (interest expense +
       * other, net + tax); the $12M net loss backfills the rest. */
      { source: 'operating_profit', target: 'other', value: 0.311, width: 27, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'net_loss', target: 'other', value: 0.012, width: 3, sourceOrder: 0, targetOrder: 1, y0: 430.5, y1: 344.5, linkTint: '#d06a6a', curve: { c1x: 2248, c1y: 430.5, c2x: 2258, c2y: 344.5 } },

      { source: 'operating_expenses', target: 'sm', value: 2.058, width: 233, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology', value: 0.324, width: 35, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.228, width: 24, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.196, width: 20, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.056, width: 5, sourceOrder: 4, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Expedia · 2026 财年第一季度',
        meta: {
          title: 'Expedia 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          lodging: { label: '住宿', notes: ['同比 +14%'] },
          air: { label: '机票', notes: ['同比持平'] },
          advertising: { label: '广告', notes: ['同比 +24%'] },
          other_revenue: { label: '其他', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          other_income: { label: '其他收益' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +10 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_loss: { label: '净亏损' },
          other: { label: '其他' },
          sm: { label: '销售与市场', notes: ['占收入 60%', '同比 (5 个百分点)'] },
          technology: { label: '技术' },
          amortization: { label: '摊销' },
          ga: { label: '管理费用' },
          other_opex: { label: '其他' },
        },
        layout: {
          labels: {
            lodging: {
              blocks: [
                {
                  x: 454, top: 326, anchor: 'middle', lineGap: 15,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 314, top: 592, anchor: 'middle', lines: [{ text: '住宿', size: 40, weight: 800 }] },
              ],
            },
            air: {
              blocks: [
                {
                  x: 456, top: 754, anchor: 'middle', lineGap: 15,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比持平', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 317, top: 828, anchor: 'start', lines: [{ text: '机票', size: 40, weight: 800 }] },
              ],
            },
            advertising: {
              blocks: [
                {
                  x: 454, top: 878, anchor: 'middle', lineGap: 15,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +24%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 160, top: 964, anchor: 'start', lines: [{ text: '广告', size: 40, weight: 800 }] },
              ],
            },
            other_revenue: {
              blocks: [
                {
                  x: 454, top: 1022, anchor: 'middle', lineGap: 15,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 265, top: 1114, anchor: 'start', lines: [{ text: '其他', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 916, top: 433, anchor: 'middle', lineGap: 14,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1386, top: 314, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 89%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1387, top: 1123, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 38, weight: 800 },
                    { text: '成本', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            other_income: {
              blocks: [
                {
                  x: 1731, top: 489, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '其他收益', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1850, top: 207, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 7%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +10 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1850, top: 956, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            net_loss: {
              blocks: [
                {
                  x: 2180, top: 444, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净亏损', size: 34, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2485, top: 290, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '其他', size: 34, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2485, top: 583, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '销售与', size: 32, weight: 800 },
                    { text: '市场', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 60%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            technology: {
              blocks: [
                {
                  x: 2484, top: 888, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '技术', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2484, top: 1023, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '摊销', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2485, top: 1155, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '管理费用', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            other_opex: {
              blocks: [
                {
                  x: 2486, top: 1263, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '其他', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
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

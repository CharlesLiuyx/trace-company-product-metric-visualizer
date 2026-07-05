/* ====================================================================
 * Intuit - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/intuit-q3-fy26.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations plus one approved
 * runtime raster (Mailchimp Freddie mascot).
 *
 * Source-chart quirks mirrored here (see data/income-statements/intuit.js):
 * - Consumer ($5.3B) is fed by TurboTax + Credit Karma + ProTax;
 *   Global Business Solutions ($3.3B) has no drawn sub-segments.
 * - "Other $27M" non-operating income is drawn as a hairline that
 *   starts mid-air left of the label and joins the net-profit bar
 *   bottom, mirroring the source's waterfall backfill.
 * - Published rounding: opex items sum to $3.1B vs the $3.2B bar, and
 *   net profit $3.1B vs operating profit - tax + other = $3.03B.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#236cff';
  const BLUE_LINK = '#95b6f7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const STAMP = '#5e5e5e';
  const WORDMARK_INK = '#21262b';

  /* Intuit corporate wordmark drawn above the revenue hub. The logo box
   * is widened so the engine's hub-centered placement puts the wordmark
   * left edge at source x=702: hub center 1169.5 - 936/2 = 701.5.
   * Content occupies 0..558 of the 936-wide box. Custom geometric
   * letterforms traced from the validated crop
   * data/assets/icon-references/intuit/crops/company-wordmark.png. */
  const logoSvg = `
    <g fill="${BLUE}">
      <rect x="0" y="2" width="28" height="107"/>
      <path d="M57.5 109 L57.5 50.5 A50.5 50.5 0 0 1 158.5 50.5 L158.5 109 L132 109 L132 50.5 A24.5 24.5 0 0 0 83 50.5 L83 109 Z"/>
      <rect x="174" y="2" width="94" height="24"/>
      <rect x="207" y="2" width="28" height="107"/>
      <path d="M286 2 L286 61 A51 51 0 0 0 388 61 L388 2 L361 2 L361 61 A24 24 0 0 1 313 61 L313 2 Z"/>
      <rect x="418" y="2" width="28" height="107"/>
      <rect x="464" y="2" width="94" height="24"/>
      <rect x="497" y="2" width="28" height="107"/>
    </g>`;

  /* QuickBooks app icon, geometry tuned against the validated crop
   * data/assets/icon-references/intuit/crops/quickbooks-icon.png. */
  const quickbooksIcon = `
    <g>
      <circle cx="147" cy="537.5" r="59" fill="#2ca01c"/>
      <g fill="none" stroke="#ffffff" stroke-width="9">
        <circle cx="124" cy="538" r="15"/>
        <path d="M139 538 L139 575"/>
        <circle cx="169.5" cy="538" r="15"/>
        <path d="M154.5 501 L154.5 538"/>
      </g>
    </g>`;

  /* TurboTax check icon, geometry tuned against the validated crop
   * data/assets/icon-references/intuit/crops/turbotax-icon.png. */
  const turbotaxIcon = `
    <g>
      <circle cx="231" cy="871" r="28.5" fill="#d42b1e"/>
      <path d="M212 877 L226 892 L250 856" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="butt" stroke-linejoin="miter"/>
    </g>`;

  /* Brand lockup wordmarks approximated in Montserrat; widths pinned to
   * the reference bboxes with textLength. */
  const wordmarks = `
    <g fill="${WORDMARK_INK}">
      <text x="100" y="626" text-anchor="middle" font-size="17" font-weight="700" textLength="40" lengthAdjust="spacingAndGlyphs">ıntuıt</text>
      <text x="151" y="645" text-anchor="middle" font-size="25" font-weight="700" textLength="142" lengthAdjust="spacingAndGlyphs">quickbooks.</text>
      <text x="276" y="626" text-anchor="middle" font-size="17" font-weight="700" textLength="38" lengthAdjust="spacingAndGlyphs">ıntuıt</text>
      <text x="317" y="645" text-anchor="middle" font-size="25" font-weight="700" textLength="121" lengthAdjust="spacingAndGlyphs">mailchimp</text>
      <text x="157" y="901" text-anchor="middle" font-size="17" font-weight="700" textLength="47" lengthAdjust="spacingAndGlyphs">ıntuıt</text>
      <text x="234" y="937" text-anchor="middle" font-size="42" font-weight="700" textLength="213" lengthAdjust="spacingAndGlyphs">turbotax.</text>
      <text x="348" y="934" text-anchor="middle" font-size="13" font-weight="400">&#174;</text>
    </g>
    <g fill="#008600">
      <text x="58" y="1185" font-size="56" font-weight="400" textLength="290" lengthAdjust="spacingAndGlyphs">credit karma</text>
      <text x="345" y="1157" text-anchor="middle" font-size="12" font-weight="400">&#8482;</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${quickbooksIcon}
      ${turbotaxIcon}
      ${wordmarks}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intuit-q3-fy26',
    name: 'Intuit · Q3 FY26',
    company: 'Intuit',
    meta: {
      company: 'Intuit',
      title: 'Intuit Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intuit-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1336,
      titleY: 189,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2065,
      periodX: 203,
      periodY: 318,
      periodNoteY: 353,
      logoWidth: 936,
      logoHeight: 113,
      logoY: 260,
      logoViewBox: '0 0 936 113',
      logoSvg,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: STAMP,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      {
        key: 'mailchimp-icon',
        href: 'data/assets/raster-annotations/intuit/mailchimp-icon.png',
        x: 237,
        y: 467,
        width: 132,
        height: 144,
      },
    ],

    layout: {
      scale: 53.95,
      nodes: {
        turbotax: { x: 387, y: 778, width: 73, height: 237 },
        credit_karma: { x: 387, y: 1149, width: 73, height: 35 },
        protax: { x: 387, y: 1306, width: 73, height: 15 },
        gbs: { x: 761, y: 513, width: 73, height: 177 },
        consumer: { x: 761, y: 913, width: 73, height: 285 },
        revenue: { x: 1133, y: 603, width: 73, height: 464 },
        gross_profit: { x: 1508, y: 513, width: 73, height: 389 },
        cost_of_revenue: { x: 1508, y: 1119, width: 73, height: 74 },
        operating_profit: { x: 1881, y: 414, width: 73, height: 217 },
        operating_expenses: { x: 1881, y: 833, width: 73, height: 171 },
        other: { x: 2138, y: 548, width: 80, height: 3 },
        net_profit: { x: 2255, y: 342, width: 73, height: 166 },
        tax: { x: 2255, y: 680, width: 73, height: 54 },
        sm: { x: 2255, y: 813, width: 73, height: 96 },
        rd: { x: 2255, y: 1008, width: 73, height: 45 },
        ga: { x: 2255, y: 1153, width: 73, height: 22 },
        amortization: { x: 2255, y: 1282, width: 73, height: 6 },
      },
      labels: {
        turbotax: {
          blocks: [
            {
              x: 426, top: 680, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        credit_karma: {
          blocks: [
            {
              x: 423, top: 1050, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        protax: {
          blocks: [
            {
              x: 426, top: 1206, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: 'Flat Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 270, top: 1280, anchor: 'middle', lines: [{ text: 'ProTax', size: 40, weight: 800 }] },
          ],
        },
        gbs: {
          blocks: [
            {
              x: 795, top: 417, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 589, top: 507, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Global Business', size: 40, weight: 800 },
                { text: 'Solutions', size: 40, weight: 800 },
                { text: '77% segment margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 798, top: 1208, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 800, top: 1291, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Consumer', size: 40, weight: 800 },
                { text: '81% segment margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1167, top: 449, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1546, top: 321, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '84% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1546, top: 1205, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1917, top: 225, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '47% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1917, top: 1014, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2178, top: 563, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2464, top: 331, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '36% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2454, top: 678, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2465, top: 806, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'S&M ($1.8B)', size: 32, weight: 800 },
                { text: '21% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rd: {
          blocks: [
            {
              x: 2468, top: 956, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D ($0.8B)', size: 32, weight: 800 },
                { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2467, top: 1101, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A ($0.4B)', size: 32, weight: 800 },
                { text: '5% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2467, top: 1232, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Amortization', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '1% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'turbotax', col: 0, order: 0, type: 'source', label: 'TurboTax', value: 4.4, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'credit_karma', col: 0, order: 1, type: 'source', label: 'Credit Karma', value: 0.6, notes: ['+15% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'protax', col: 0, order: 2, type: 'source', label: 'ProTax', value: 0.3, notes: ['Flat Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gbs', col: 1, order: 0, type: 'source', label: ['Global Business', 'Solutions'], value: 3.3, notes: ['+15% Y/Y', '77% segment margin', '(0pp) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'consumer', col: 1, order: 1, type: 'source', label: 'Consumer', value: 5.3, notes: ['+8% Y/Y', '81% segment margin', '(2pp) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 8.6, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.2, notes: ['84% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.0, valueText: '$4.0B', notes: ['47% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.027, valueText: '$27M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 3.1, notes: ['36% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 1.8, notes: ['21% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 0.8, notes: ['10% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.4, notes: ['5% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 6, order: 5, type: 'cost', label: 'Amortization', value: 0.1, notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'turbotax', target: 'consumer', value: 4.4, width: 237, sourceOrder: 0, targetOrder: 0 },
      { source: 'credit_karma', target: 'consumer', value: 0.6, width: 34, sourceOrder: 0, targetOrder: 1 },
      { source: 'protax', target: 'consumer', value: 0.3, width: 14, sourceOrder: 0, targetOrder: 2 },

      { source: 'gbs', target: 'revenue', value: 3.3, width: 177, sourceOrder: 0, targetOrder: 0 },
      { source: 'consumer', target: 'revenue', value: 5.3, width: 285, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 7.2, width: 389, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.4, width: 74, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 4.0, width: 217, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.2, width: 171, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Waterfall region: the drawn op-profit -> net-profit band is the
       * $3.1B net bar minus the $27M "Other" hairline that backfills the
       * bar bottom from mid-air (no drawn source bar in the original). */
      { source: 'operating_profit', target: 'net_profit', value: 3.1, percent: 75.6, width: 163, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.0, percent: 24.4, width: 54, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.027, width: 3, sourceOrder: 0, targetOrder: 1, y0: 549.5, y1: 506.5, curve: { c1x: 2233, c1y: 549.5, c2x: 2245, c2y: 506.5 } },

      { source: 'operating_expenses', target: 'sm', value: 1.8, width: 96, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rd', value: 0.8, width: 45, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, width: 22, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.1, width: 6, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['ıntuıt', 'quickbooks.', 'mailchimp', 'turbotax.', 'credit karma'],
      zh: {
        name: 'Intuit · 2026 财年第三季度',
        meta: {
          title: 'Intuit 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1900,
        },
        nodes: {
          turbotax: { notes: ['同比 +7%'] },
          credit_karma: { notes: ['同比 +15%'] },
          protax: { notes: ['同比持平'] },
          gbs: { label: ['全球商业', '解决方案'], notes: ['同比 +15%', '分部利润率 77%', '同比 (0 个百分点)'] },
          consumer: { label: '消费者', notes: ['同比 +8%', '分部利润率 81%', '同比 (2 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 84%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 47%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 36%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 21%', '同比 +0 个百分点'] },
          rd: { label: '研发', notes: ['占收入 10%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 5%', '同比 (0 个百分点)'] },
          amortization: { label: '摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            turbotax: {
              blocks: [
                {
                  x: 426, top: 680, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            credit_karma: {
              blocks: [
                {
                  x: 423, top: 1050, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            protax: {
              blocks: [
                {
                  x: 426, top: 1206, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比持平', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 270, top: 1280, anchor: 'middle', lines: [{ text: 'ProTax', size: 40, weight: 800 }] },
              ],
            },
            gbs: {
              blocks: [
                {
                  x: 795, top: 417, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 589, top: 507, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '全球商业', size: 40, weight: 800 },
                    { text: '解决方案', size: 40, weight: 800 },
                    { text: '分部利润率 77%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            consumer: {
              blocks: [
                {
                  x: 798, top: 1208, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +8%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 800, top: 1291, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '消费者', size: 40, weight: 800 },
                    { text: '分部利润率 81%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1167, top: 449, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +10%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1546, top: 321, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 84%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1546, top: 1205, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 38, weight: 800 },
                    { text: '成本', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1917, top: 225, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 47%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1917, top: 1014, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2178, top: 563, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '其他', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2464, top: 331, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 36%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2454, top: 678, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  /* zh label is wider than "S&M ($1.8B)": shifted right so the
                   * block clears the S&M bar by >=5px. */
                  x: 2478, top: 806, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '销售与市场 ($1.8B)', size: 32, weight: 800 },
                    { text: '占收入 21%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rd: {
              blocks: [
                {
                  x: 2468, top: 956, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '研发 ($0.8B)', size: 32, weight: 800 },
                    { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2467, top: 1101, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '管理费用 ($0.4B)', size: 32, weight: 800 },
                    { text: '占收入 5%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2467, top: 1232, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '摊销', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 1%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
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

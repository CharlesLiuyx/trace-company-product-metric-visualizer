/* ====================================================================
 * Intuit - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/intuit-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations plus one approved
 * runtime raster (Mailchimp Freddie mascot).
 *
 * Source-chart quirks mirrored here (see data/income-statements/intuit.js):
 * - Consumer ($1.5B) is fed by TurboTax + Credit Karma + ProTax;
 *   Global Business Solutions ($3.2B) has no drawn sub-segments.
 * - "Other $14M" non-operating income is drawn as a hairline that
 *   starts mid-air left of the label and joins the net-profit bar
 *   bottom, mirroring the source's waterfall backfill.
 * - Published rounding: opex items sum to $2.7B vs the $2.8B bar, and
 *   gross profit / operating-profit / net-profit paths contain minor
 *   source-chart rounding differences.
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
      <circle cx="147" cy="623.5" r="59" fill="#2ca01c"/>
      <g fill="none" stroke="#ffffff" stroke-width="9">
        <circle cx="124" cy="624" r="15"/>
        <path d="M139 624 L139 661"/>
        <circle cx="169.5" cy="624" r="15"/>
        <path d="M154.5 587 L154.5 624"/>
      </g>
    </g>`;

  /* TurboTax check icon, geometry tuned against the validated crop
   * data/assets/icon-references/intuit/crops/turbotax-icon.png. */
  const turbotaxIcon = `
    <g>
      <circle cx="231" cy="860" r="28.5" fill="#d42b1e"/>
      <path d="M212 866 L226 881 L250 845" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="butt" stroke-linejoin="miter"/>
    </g>`;

  /* Brand lockup wordmarks approximated in Montserrat; widths pinned to
   * the reference bboxes with textLength. */
  const wordmarks = `
    <g fill="${WORDMARK_INK}">
      <text x="100" y="712" text-anchor="middle" font-size="17" font-weight="700" textLength="40" lengthAdjust="spacingAndGlyphs">ıntuıt</text>
      <text x="151" y="731" text-anchor="middle" font-size="25" font-weight="700" textLength="142" lengthAdjust="spacingAndGlyphs">quickbooks.</text>
      <text x="276" y="712" text-anchor="middle" font-size="17" font-weight="700" textLength="38" lengthAdjust="spacingAndGlyphs">ıntuıt</text>
      <text x="317" y="731" text-anchor="middle" font-size="25" font-weight="700" textLength="121" lengthAdjust="spacingAndGlyphs">mailchimp</text>
      <text x="157" y="890" text-anchor="middle" font-size="17" font-weight="700" textLength="47" lengthAdjust="spacingAndGlyphs">ıntuıt</text>
      <text x="234" y="926" text-anchor="middle" font-size="42" font-weight="700" textLength="213" lengthAdjust="spacingAndGlyphs">turbotax.</text>
      <text x="348" y="923" text-anchor="middle" font-size="13" font-weight="400">&#174;</text>
    </g>
    <g fill="#008600">
      <text x="58" y="1094" font-size="56" font-weight="400" textLength="290" lengthAdjust="spacingAndGlyphs">credit karma</text>
      <text x="345" y="1066" text-anchor="middle" font-size="12" font-weight="400">&#8482;</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${quickbooksIcon}
      ${turbotaxIcon}
      ${wordmarks}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intuit-q2-fy26',
    name: 'Intuit · Q2 FY26',
    company: 'Intuit',
    meta: {
      company: 'Intuit',
      title: 'Intuit Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intuit-q2-fy26.png', width: 2667, height: 1500 },
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
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      {
        key: 'mailchimp-icon',
        href: 'data/assets/raster-annotations/intuit/mailchimp-icon.png',
        x: 237,
        y: 553,
        width: 132,
        height: 144,
      },
    ],

    layout: {
      scale: 87.15,
      nodes: {
        turbotax: { x: 387, y: 871, width: 73, height: 52 },
        credit_karma: { x: 387, y: 1050, width: 73, height: 55 },
        protax: { x: 387, y: 1240, width: 73, height: 27 },
        gbs: { x: 761, y: 532, width: 73, height: 280 },
        consumer: { x: 761, y: 998, width: 73, height: 131 },
        revenue: { x: 1133, y: 605, width: 73, height: 414 },
        gross_profit: { x: 1508, y: 531, width: 73, height: 320 },
        cost_of_revenue: { x: 1508, y: 1034, width: 73, height: 92 },
        operating_profit: { x: 1881, y: 450, width: 73, height: 76 },
        operating_expenses: { x: 1881, y: 684, width: 73, height: 241 },
        other: { x: 2138, y: 469, width: 80, height: 3 },
        net_profit: { x: 2255, y: 356, width: 73, height: 62 },
        tax: { x: 2255, y: 605, width: 73, height: 16 },
        sm: { x: 2255, y: 720, width: 73, height: 121 },
        rd: { x: 2255, y: 926, width: 73, height: 72 },
        ga: { x: 2255, y: 1109, width: 73, height: 34 },
        amortization: { x: 2255, y: 1268, width: 73, height: 7 },
      },
      labels: {
        turbotax: {
          blocks: [
            {
              x: 426, top: 782, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        credit_karma: {
          blocks: [
            {
              x: 423, top: 961, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        protax: {
          blocks: [
            {
              x: 426, top: 1151, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 270, top: 1238, anchor: 'middle', lines: [{ text: 'ProTax', size: 40, weight: 800 }] },
          ],
        },
        gbs: {
          blocks: [
            {
              x: 795, top: 429, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 589, top: 593, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Global Business', size: 40, weight: 800 },
                { text: 'Solutions', size: 40, weight: 800 },
                { text: '76% segment margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 798, top: 900, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 800, top: 1140, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Consumer', size: 40, weight: 800 },
                { text: '60% segment margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1167, top: 452, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1546, top: 339, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '78% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1546, top: 1136, anchor: 'middle', lineGap: 9,
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
              x: 1917, top: 260, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '18% margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1917, top: 936, anchor: 'middle', lineGap: 9,
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
              x: 2178, top: 480, anchor: 'middle', lineGap: 11,
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
              x: 2464, top: 313, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '15% margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2454, top: 566, anchor: 'middle', lineGap: 8,
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
              x: 2465, top: 729, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'S&M ($1.4B)', size: 32, weight: 800 },
                { text: '30% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rd: {
          blocks: [
            {
              x: 2468, top: 913, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D ($0.8B)', size: 32, weight: 800 },
                { text: '18% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2467, top: 1066, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A ($0.4B)', size: 32, weight: 800 },
                { text: '9% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2467, top: 1208, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Amortization', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
                { text: '3% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'turbotax', col: 0, order: 0, type: 'source', label: 'TurboTax', value: 0.6, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'credit_karma', col: 0, order: 1, type: 'source', label: 'Credit Karma', value: 0.6, notes: ['+23% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'protax', col: 0, order: 2, type: 'source', label: 'ProTax', value: 0.3, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gbs', col: 1, order: 0, type: 'source', label: ['Global Business', 'Solutions'], value: 3.2, notes: ['+18% Y/Y', '76% segment margin', '(1pp) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'consumer', col: 1, order: 1, type: 'source', label: 'Consumer', value: 1.5, notes: ['+15% Y/Y', '60% segment margin', '(1pp) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 4.7, notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.6, notes: ['78% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.9, valueText: '$0.9B', notes: ['18% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.014, valueText: '$14M', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.7, notes: ['15% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 1.4, notes: ['30% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 0.8, notes: ['18% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.4, notes: ['9% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 6, order: 5, type: 'cost', label: 'Amortization', value: 0.1, notes: ['3% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'turbotax', target: 'consumer', value: 0.6, width: 50, sourceWidth: 52, targetWidth: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'credit_karma', target: 'consumer', value: 0.6, width: 54, sourceWidth: 55, targetWidth: 54, sourceOrder: 0, targetOrder: 1 },
      { source: 'protax', target: 'consumer', value: 0.3, width: 24, sourceWidth: 27, targetWidth: 27, sourceOrder: 0, targetOrder: 2 },

      { source: 'gbs', target: 'revenue', value: 3.2, width: 279, sourceWidth: 280, targetWidth: 280, sourceOrder: 0, targetOrder: 0 },
      { source: 'consumer', target: 'revenue', value: 1.5, width: 129, sourceWidth: 131, targetWidth: 134, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 3.6, width: 318, sourceWidth: 320, targetWidth: 320, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.0, width: 90, sourceWidth: 94, targetWidth: 92, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 0.9, width: 73, sourceWidth: 76, targetWidth: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.8, width: 241, sourceWidth: 244, targetWidth: 241, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      /* Waterfall region: the drawn op-profit -> net-profit band is the
       * $0.7B net bar minus the $14M "Other" hairline that backfills the
       * bar bottom from mid-air (no drawn source bar in the original). */
      { source: 'operating_profit', target: 'net_profit', value: 0.7, width: 60, sourceWidth: 60, targetWidth: 60, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 14, sourceWidth: 16, targetWidth: 16, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.014, width: 2, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 1, y0: 470, y1: 416.5, curve: { c1x: 2233, c1y: 470, c2x: 2245, c2y: 416.5 } },

      { source: 'operating_expenses', target: 'sm', value: 1.4, width: 121, sourceWidth: 121, targetWidth: 121, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rd', value: 0.8, width: 72, sourceWidth: 72, targetWidth: 72, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, width: 34, sourceWidth: 34, targetWidth: 34, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.1, width: 7, sourceWidth: 14, targetWidth: 7, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['ıntuıt', 'quickbooks.', 'mailchimp', 'turbotax.', 'credit karma'],
      zh: {
        name: 'Intuit · 2026 财年第二季度',
        meta: {
          title: 'Intuit 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1900,
        },
        nodes: {
          turbotax: { notes: ['同比 +12%'] },
          credit_karma: { notes: ['同比 +23%'] },
          protax: { notes: ['同比 +7%'] },
          gbs: { label: ['全球商业', '解决方案'], notes: ['同比 +18%', '分部利润率 76%', '同比 (1 个百分点)'] },
          consumer: { label: '消费者', notes: ['同比 +15%', '分部利润率 60%', '同比 (1 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 30%', '同比 (0 个百分点)'] },
          rd: { label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 (1 个百分点)'] },
          amortization: { label: '摊销', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            turbotax: {
              blocks: [
                {
                  x: 426, top: 782, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            credit_karma: {
              blocks: [
                {
                  x: 423, top: 961, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +23%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            protax: {
              blocks: [
                {
                  x: 426, top: 1151, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 270, top: 1238, anchor: 'middle', lines: [{ text: 'ProTax', size: 40, weight: 800 }] },
              ],
            },
            gbs: {
              blocks: [
                {
                  x: 795, top: 429, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +18%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 589, top: 593, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '全球商业', size: 40, weight: 800 },
                    { text: '解决方案', size: 40, weight: 800 },
                    { text: '分部利润率 76%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            consumer: {
              blocks: [
                {
                  x: 798, top: 900, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 800, top: 1140, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '消费者', size: 40, weight: 800 },
                    { text: '分部利润率 60%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1167, top: 452, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1546, top: 339, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 78%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1546, top: 1136, anchor: 'middle', lineGap: 9,
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
                  x: 1917, top: 260, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 18%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1917, top: 936, anchor: 'middle', lineGap: 9,
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
                  x: 2178, top: 480, anchor: 'middle', lineGap: 11,
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
                  x: 2464, top: 313, anchor: 'middle', lineGap: 12,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2454, top: 566, anchor: 'middle', lineGap: 8,
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
                  /* zh label is wider than "S&M ($1.4B)": shifted right so the
                   * block clears the S&M bar by >=5px. */
                  x: 2478, top: 729, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '销售与市场 ($1.4B)', size: 32, weight: 800 },
                    { text: '占收入 30%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rd: {
              blocks: [
                {
                  x: 2468, top: 913, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '研发 ($0.8B)', size: 32, weight: 800 },
                    { text: '占收入 18%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2467, top: 1066, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '管理费用 ($0.4B)', size: 32, weight: 800 },
                    { text: '占收入 9%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2467, top: 1208, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '摊销', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                    { text: '占收入 3%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
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

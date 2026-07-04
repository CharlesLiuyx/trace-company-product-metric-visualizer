/* ====================================================================
 * Oracle - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/oracle-q4-fy26.png as a fixed
 * d3-sankey layout with a pure SVG Oracle logo and Oracle Cloud
 * Infrastructure wordmark annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const DARK = '#3a3632';
  const GRAY_LINK = '#9f9d9c';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#8d1200';
  const RED_LINK = '#e08585';
  const ORACLE_RED = '#f80000';
  const RPO_BRICK = '#c64633';

  // Oracle logo: red stadium ("O") ring above a red ORACLE wordmark.
  const ORACLE_LOGO = `
    <path fill="${ORACLE_RED}" fill-rule="evenodd" d="M78 8h137a70 70 0 0 1 0 140H78a70 70 0 0 1 0-140Zm6 34h125a36 36 0 0 1 0 72H84a36 36 0 0 1 0-72Z"/>
    <g fill="${ORACLE_RED}" transform="translate(44 176)">
      <text x="102" y="26" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="38" font-weight="700" letter-spacing="3" textLength="205" lengthAdjust="spacingAndGlyphs">ORACLE</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g fill="#c74634" font-family="Arial,Helvetica,sans-serif">
        <text x="163" y="429" font-size="38" font-weight="800" letter-spacing="1">ORACLE</text>
        <text x="163" y="465" font-size="38" font-weight="800" letter-spacing="1">CLOUD</text>
        <text x="163" y="503" font-size="30" font-weight="500">Infrastructure</text>
      </g>
      <g>
        <rect x="157" y="1226" width="262" height="97" rx="20" fill="${RPO_BRICK}"/>
        <text x="288" y="1268" text-anchor="middle" font-size="30" fill="#ffffff"><tspan font-weight="800">RPO</tspan><tspan font-weight="400"> $638B</tspan></text>
        <text x="288" y="1305" text-anchor="middle" font-size="27" font-weight="400" fill="#ffffff" textLength="238" lengthAdjust="spacingAndGlyphs">+363% Y/Y &amp; +15% Q/Q</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q4-fy26',
    name: 'Oracle · Q4 FY26',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2123,
      periodX: 224,
      periodY: 294,
      periodNoteY: 342,
      logoWidth: 293,
      logoHeight: 212,
      logoY: 270,
      logoViewBox: '0 0 293 212',
      logoSvg: ORACLE_LOGO,
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
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 16.93,
      nodes: {
        oci: { x: 436, y: 422, width: 73, height: 69 },
        cloud_applications: { x: 436, y: 614, width: 73, height: 97 },
        software_support: { x: 436, y: 854, width: 73, height: 83 },
        software_license: { x: 436, y: 1074, width: 73, height: 30 },
        cloud: { x: 810, y: 579, width: 73, height: 168 },
        software: { x: 810, y: 929, width: 73, height: 115 },
        hardware: { x: 810, y: 1188, width: 73, height: 14 },
        services: { x: 810, y: 1339, width: 73, height: 29 },
        revenue: { x: 1184, y: 668, width: 73, height: 326 },
        gross_profit: { x: 1558, y: 573, width: 73, height: 214 },
        cost_of_revenue: { x: 1558, y: 985, width: 73, height: 114 },
        cor_cloud_software: { x: 1768, y: 1030, width: 73, height: 88 },
        cor_hardware: { x: 1768, y: 1213, width: 73, height: 19 },
        cor_services: { x: 1768, y: 1345, width: 73, height: 8 },
        operating_profit: { x: 1932, y: 486, width: 73, height: 105 },
        operating_expenses: { x: 1932, y: 742, width: 73, height: 109 },
        net_profit: { x: 2306, y: 381, width: 73, height: 76 },
        tax: { x: 2306, y: 592, width: 73, height: 17 },
        interest: { x: 2306, y: 706, width: 73, height: 12 },
        rnd: { x: 2306, y: 816, width: 73, height: 44 },
        sm: { x: 2306, y: 958, width: 73, height: 34 },
        restructuring_other: { x: 2306, y: 1097, width: 73, height: 14 },
        amortization: { x: 2306, y: 1218, width: 73, height: 8 },
        ga: { x: 2306, y: 1318, width: 73, height: 8 },
      },
      labels: {
        oci: {
          blocks: [
            {
              x: 472, top: 333, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '+93% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cloud_applications: {
          blocks: [
            {
              x: 472, top: 525, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 318, top: 613, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Cloud', size: 40, weight: 800, color: DARK },
                { text: 'applications', size: 40, weight: 800, color: DARK },
              ],
            },
          ],
        },
        software_support: {
          blocks: [
            {
              x: 472, top: 765, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '(0%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 318, top: 853, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Software', size: 40, weight: 800, color: DARK },
                { text: 'Support', size: 40, weight: 800, color: DARK },
              ],
            },
          ],
        },
        software_license: {
          blocks: [
            {
              x: 472, top: 985, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '(6%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 318, top: 1039, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Software', size: 40, weight: 800, color: DARK },
                { text: 'License', size: 40, weight: 800, color: DARK },
              ],
            },
          ],
        },
        cloud: {
          blocks: [
            {
              x: 846, top: 432, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cloud', size: 40, weight: 800, color: DARK },
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '+47% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        software: {
          blocks: [
            {
              x: 846, top: 782, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Software', size: 40, weight: 800, color: DARK },
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        hardware: {
          blocks: [
            {
              x: 792, top: 1170, anchor: 'end',
              lines: [{ text: 'Hardware', size: 40, weight: 800, color: DARK }],
            },
            {
              x: 846, top: 1099, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        services: {
          blocks: [
            {
              x: 792, top: 1330, anchor: 'end',
              lines: [{ text: 'Services', size: 40, weight: 800, color: DARK }],
            },
            {
              x: 846, top: 1250, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1220, top: 525, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: DARK },
                { text: '$value', size: 40, weight: 400, color: DARK },
                { text: '+21% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1594, top: 397, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '65% margin', size: 28, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1594, top: 1112, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 40, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        cor_cloud_software: {
          blocks: [
            {
              x: 1882, top: 1023, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Cloud &', size: 30, weight: 700, color: RED_LABEL },
                { text: 'Software ($5.2B)', size: 30, weight: 700, color: RED_LABEL },
                { text: '67% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cor_hardware: {
          blocks: [
            {
              x: 1882, top: 1190, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Hardware ($0.3B)', size: 30, weight: 700, color: RED_LABEL },
                { text: '68% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cor_services: {
          blocks: [
            {
              x: 1882, top: 1317, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Services ($1.2B)', size: 30, weight: 700, color: RED_LABEL },
                { text: '24% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1968, top: 300, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '32% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1960, top: 872, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2450, top: 300, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '22% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2458, top: 546, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 800, color: RED_LABEL },
                { text: '($1.1B)', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2458, top: 660, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Interest', size: 34, weight: 800, color: RED_LABEL },
                { text: '($0.8B)', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2402, top: 815, anchor: 'start',
              lines: [{ text: 'R&D ($2.6B)', size: 34, weight: 800, color: RED_LABEL }],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2402, top: 957, anchor: 'start',
              lines: [{ text: 'S&M ($2.1B)', size: 34, weight: 800, color: RED_LABEL }],
            },
          ],
        },
        restructuring_other: {
          blocks: [
            {
              x: 2402, top: 1075, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 34, weight: 800, color: RED_LABEL },
                { text: '& Other', size: 34, weight: 800, color: RED_LABEL },
                { text: '($0.8B)', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2402, top: 1197, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 34, weight: 800, color: RED_LABEL },
                { text: '($0.4B)', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2402, top: 1317, anchor: 'start',
              lines: [{ text: 'G&A ($0.4B)', size: 34, weight: 800, color: RED_LABEL }],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'oci', col: 0, order: 0, type: 'source', label: 'Oracle Cloud Infrastructure', value: 5.8, valueText: '$5.8B', notes: ['+93% Y/Y'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'cloud_applications', col: 0, order: 1, type: 'source', label: ['Cloud', 'applications'], value: 4.1, valueText: '$4.1B', notes: ['+10% Y/Y'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'software_support', col: 0, order: 2, type: 'source', label: ['Software', 'Support'], value: 4.9, valueText: '$4.9B', notes: ['(0%) Y/Y'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'software_license', col: 0, order: 3, type: 'source', label: ['Software', 'License'], value: 1.9, valueText: '$1.9B', notes: ['(6%) Y/Y'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'cloud', col: 1, order: 0, type: 'source', label: 'Cloud', value: 9.9, valueText: '$9.9B', notes: ['+47% Y/Y'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'software', col: 1, order: 1, type: 'source', label: 'Software', value: 6.8, valueText: '$6.8B', notes: ['(2%) Y/Y'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'hardware', col: 1, order: 2, type: 'source', label: 'Hardware', value: 0.9, valueText: '$0.9B', notes: ['+9% Y/Y'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'services', col: 1, order: 3, type: 'source', label: 'Services', value: 1.5, valueText: '$1.5B', notes: ['+13% Y/Y'], color: DARK, labelColor: DARK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 19.2, valueText: '$19.2B', notes: ['+21% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.5, valueText: '$12.5B', notes: ['65% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.7, valueText: '($6.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cor_cloud_software', col: 4, order: 3, type: 'cost', label: ['Cloud &', 'Software'], value: 5.2, valueText: '($5.2B)', notes: ['67% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cor_hardware', col: 4, order: 4, type: 'cost', label: 'Hardware', value: 0.3, valueText: '($0.3B)', notes: ['68% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cor_services', col: 4, order: 5, type: 'cost', label: 'Services', value: 1.2, valueText: '($1.2B)', notes: ['24% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 6.1, valueText: '$6.1B', notes: ['32% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.4, valueText: '($6.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.3, valueText: '$4.3B', notes: ['22% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 2.6, valueText: '($2.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 2.1, valueText: '($2.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring_other', col: 5, order: 5, type: 'cost', label: ['Restructuring', '& Other'], value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 6, type: 'cost', label: 'Amortization', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 7, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      // segments -> cloud / software groups
      { source: 'oci', target: 'cloud', value: 5.8, width: 69, targetOrder: 0 },
      { source: 'cloud_applications', target: 'cloud', value: 4.1, width: 99, targetOrder: 1 },
      { source: 'software_support', target: 'software', value: 4.9, width: 85, targetOrder: 0 },
      { source: 'software_license', target: 'software', value: 1.9, width: 30, targetOrder: 1 },

      // groups + direct segments -> revenue
      { source: 'cloud', target: 'revenue', value: 9.9, width: 168, targetOrder: 0 },
      { source: 'software', target: 'revenue', value: 6.8, width: 115, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.9, width: 14, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.5, width: 29, targetOrder: 3 },

      // revenue -> gross profit / cost of revenue
      { source: 'revenue', target: 'gross_profit', value: 12.5, width: 214, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.7, width: 112, sourceOrder: 1 },

      // cost of revenue -> component cost lines
      { source: 'cost_of_revenue', target: 'cor_cloud_software', value: 5.2, width: 88, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.3, width: 19, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.2, width: 8, sourceOrder: 2, targetOrder: 0 },

      // gross profit -> operating profit / operating expenses
      { source: 'gross_profit', target: 'operating_profit', value: 6.1, width: 105, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.4, width: 109, sourceOrder: 1 },

      // operating profit -> net profit / tax / interest
      { source: 'operating_profit', target: 'net_profit', value: 4.3, width: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.1, width: 17, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.8, width: 12, sourceOrder: 2, targetOrder: 0 },

      // operating expenses -> opex lines
      { source: 'operating_expenses', target: 'rnd', value: 2.6, width: 44, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.1, width: 34, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring_other', value: 0.8, width: 14, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.4, width: 8, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, width: 8, sourceOrder: 4, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Oracle · 2026 财年第四季度',
        meta: {
          title: 'Oracle 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 5 月',
        },
        annotationsSvg: `
    <g font-family="Montserrat,Arial,sans-serif">
      <g fill="#c74634" font-family="Arial,Helvetica,sans-serif">
        <text x="163" y="429" font-size="38" font-weight="800" letter-spacing="1">ORACLE</text>
        <text x="163" y="465" font-size="38" font-weight="800" letter-spacing="1">CLOUD</text>
        <text x="163" y="503" font-size="30" font-weight="500">基础设施</text>
      </g>
      <g>
        <rect x="157" y="1226" width="262" height="97" rx="20" fill="${RPO_BRICK}"/>
        <text x="288" y="1268" text-anchor="middle" font-size="30" fill="#ffffff"><tspan font-weight="800">RPO</tspan><tspan font-weight="400"> $638B</tspan></text>
        <text x="288" y="1305" text-anchor="middle" font-size="27" font-weight="400" fill="#ffffff" textLength="238" lengthAdjust="spacingAndGlyphs">同比 +363% &amp; 环比 +15%</text>
      </g>
    </g>`,
        nodes: {
          oci: { label: 'Oracle 云基础设施', notes: ['同比 +93%'] },
          cloud_applications: { label: '云应用', notes: ['同比 +10%'] },
          software_support: { label: '软件支持', notes: ['同比 (0%)'] },
          software_license: { label: '软件许可证', notes: ['同比 (6%)'] },
          cloud: { label: '云', notes: ['同比 +47%'] },
          software: { label: '软件', notes: ['同比 (2%)'] },
          hardware: { label: '硬件', notes: ['同比 +9%'] },
          services: { label: '服务', notes: ['同比 +13%'] },
          revenue: { label: '收入', notes: ['同比 +21%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比 (5 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud_software: { label: ['云与软件'], notes: ['毛利率 67%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 68%'] },
          cor_services: { label: '服务', notes: ['毛利率 24%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          restructuring_other: { label: ['重组', '及其他'] },
          amortization: { label: '摊销' },
          ga: { label: '一般及行政' },
        },
        layout: {
          labels: {
            cloud_applications: {
              blocks: [
                {
                  x: 472, top: 525, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: DARK },
                    { text: '同比 +10%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 318, top: 613, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '云应用', size: 40, weight: 800, color: DARK },
                  ],
                },
              ],
            },
            software_support: {
              blocks: [
                {
                  x: 472, top: 765, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: DARK },
                    { text: '同比 (0%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 318, top: 874, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '软件支持', size: 40, weight: 800, color: DARK },
                  ],
                },
              ],
            },
            software_license: {
              blocks: [
                {
                  x: 472, top: 985, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: DARK },
                    { text: '同比 (6%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 318, top: 1065, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '软件许可证', size: 40, weight: 800, color: DARK },
                  ],
                },
              ],
            },
            hardware: {
              blocks: [
                {
                  x: 792, top: 1170, anchor: 'end',
                  lines: [{ text: '硬件', size: 40, weight: 800, color: DARK }],
                },
                {
                  x: 846, top: 1099, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: DARK },
                    { text: '同比 +9%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            services: {
              blocks: [
                {
                  x: 792, top: 1330, anchor: 'end',
                  lines: [{ text: '服务', size: 40, weight: 800, color: DARK }],
                },
                {
                  x: 846, top: 1250, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: DARK },
                    { text: '同比 +13%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cloud: {
              blocks: [
                {
                  x: 846, top: 432, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '云', size: 40, weight: 800, color: DARK },
                    { text: '$value', size: 40, weight: 400, color: DARK },
                    { text: '同比 +47%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            software: {
              blocks: [
                {
                  x: 846, top: 782, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '软件', size: 40, weight: 800, color: DARK },
                    { text: '$value', size: 40, weight: 400, color: DARK },
                    { text: '同比 (2%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cor_cloud_software: {
              blocks: [
                {
                  x: 1882, top: 1042, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '云与软件 ($5.2B)', size: 30, weight: 700, color: RED_LABEL },
                    { text: '毛利率 67%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cor_hardware: {
              blocks: [
                {
                  x: 1882, top: 1190, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '硬件 ($0.3B)', size: 30, weight: 700, color: RED_LABEL },
                    { text: '毛利率 68%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cor_services: {
              blocks: [
                {
                  x: 1882, top: 1317, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '服务 ($1.2B)', size: 30, weight: 700, color: RED_LABEL },
                    { text: '毛利率 24%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1594, top: 397, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 65%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1968, top: 300, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 32%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2450, top: 300, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 22%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2458, top: 546, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '税费', size: 34, weight: 800, color: RED_LABEL },
                    { text: '($1.1B)', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2458, top: 660, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '利息', size: 34, weight: 800, color: RED_LABEL },
                    { text: '($0.8B)', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2402, top: 815, anchor: 'start',
                  lines: [{ text: '研发 ($2.6B)', size: 34, weight: 800, color: RED_LABEL }],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2402, top: 938, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场', size: 34, weight: 800, color: RED_LABEL },
                    { text: '($2.1B)', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            restructuring_other: {
              blocks: [
                {
                  x: 2402, top: 1075, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '重组及其他', size: 34, weight: 800, color: RED_LABEL },
                    { text: '($0.8B)', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: 2402, top: 1197, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '摊销', size: 34, weight: 800, color: RED_LABEL },
                    { text: '($0.4B)', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2402, top: 1299, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '一般及行政', size: 34, weight: 800, color: RED_LABEL },
                    { text: '($0.4B)', size: 34, weight: 400, color: RED_LABEL },
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

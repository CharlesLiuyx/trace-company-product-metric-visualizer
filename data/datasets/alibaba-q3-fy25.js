/* ====================================================================
 * Alibaba - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/alibaba-q3-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff5a00';
  const ORANGE_LINK = '#f7ae85';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2330;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <g transform="translate(730 265)" fill="${ORANGE}">
        <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
        <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#ffffff"/>
        <text x="151" y="82" font-family="Arial,sans-serif" font-size="111" font-weight="700" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
      </g>

      <g font-family="Arial,sans-serif" font-weight="700">
        <text x="74" y="385" text-anchor="middle" font-size="38" fill="${ORANGE}">淘宝</text>
        <text x="74" y="414" text-anchor="middle" font-size="21" fill="${ORANGE}">Taobao</text>
        <text x="75" y="452" text-anchor="middle" font-size="36" fill="#ff1636">TMALL</text>

        <g transform="translate(8 542) scale(0.65)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="60" y="572" font-size="26" fill="#2a278f">Lazada</text>
        <text x="16" y="611" font-size="28" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="14" y="653" font-size="35" fill="#242424" font-weight="500">trendyol</text>
        <rect x="111" y="617" width="31" height="15" rx="3" fill="${ORANGE}"/>
        <text x="127" y="630" text-anchor="middle" font-size="11" fill="#ffffff">.com</text>

        <g transform="translate(5 750) scale(0.65)">${BUSINESS_ICONS.alibabaCloud || ''}</g>

        <text x="16" y="874" font-size="30" fill="#0068ff">CAI</text>
        <text x="16" y="908" font-size="30" fill="#0068ff">NIAO</text>
        <text x="92" y="908" font-size="23" fill="#0068ff">菜鸟</text>

        <g transform="translate(22 982)" fill="none" stroke="#1287c9" stroke-width="5" stroke-linecap="round">
          <path d="M0 8h12v-8M0 8v15h12v-8M50 8H38v-8M50 8v15H38v-8"/>
          <path d="M15 12h20"/>
        </g>
        <text x="82" y="1014" font-size="31" fill="#1287c9">饿了么</text>
        <g transform="translate(66 1018) scale(0.27)">${BUSINESS_ICONS.amap || ''}</g>

        <text x="25" y="1168" font-size="37" fill="#ff4081">YOU</text>
        <text x="103" y="1168" font-size="37" fill="#2db7ea">KU</text>

        <text x="38" y="1265" font-size="29" fill="#e21e35">SUN ART</text>
        <g transform="translate(26 1270) scale(0.75)">${BUSINESS_ICONS.hema || ''}</g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q3-fy25',
    name: 'Alibaba · Q3 FY25',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 129,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 2448,
      periodY: 275,
      periodNoteY: 318,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 37, note: 26, lineGap: 7 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 7.5,
      nodes: {
        taobao_tmall: { x: 543, y: 369, width: 65, height: 140 },
        international_digital_commerce: { x: 543, y: 617, width: 65, height: 38 },
        cloud: { x: 543, y: 758, width: 65, height: 31 },
        cainiao: { x: 543, y: 896, width: 65, height: 28 },
        local_services: { x: 543, y: 1025, width: 65, height: 16 },
        digital_media: { x: 543, y: 1152, width: 65, height: 4 },
        all_others: { x: 543, y: 1261, width: 65, height: 54 },
        gross_revenue: { x: 886, y: 584, width: 64, height: 321 },
        revenue: { x: 1224, y: 656, width: 65, height: 291 },
        intersegment_eliminations: { x: 1224, y: 1033, width: 65, height: 30 },
        gross_profit: { x: 1570, y: 559, width: 64, height: 120 },
        cost_of_revenue: { x: 1574, y: 849, width: 64, height: 168 },
        operating_profit: { x: 1917, y: 476, width: 64, height: 40 },
        operating_expenses: { x: 1915, y: 676, width: 64, height: 78 },
        other_income: { x: 2160, y: 472, width: 65, height: 14 },
        net_profit: { x: 2257, y: 392, width: 65, height: 46 },
        tax: { x: 2257, y: 625, width: 65, height: 11 },
        sm: { x: 2257, y: 725, width: 65, height: 43 },
        product_development: { x: 2257, y: 876, width: 65, height: 12 },
        ga: { x: 2257, y: 1013, width: 65, height: 11 },
        goodwill_impairment: { x: 2257, y: 1152, width: 65, height: 8 },
        amortization_intangibles: { x: 2257, y: 1283, width: 65, height: 3 },
      },
      labels: {
        taobao_tmall: {
          blocks: [
            { x: 554, top: 286, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+5% Y/Y', size: 26, weight: 400, color: NOTE },
            ] },
            { x: 499, top: 376, anchor: 'end', lineGap: 8, lines: [
              { text: 'Taobao', size: 38, weight: 800 },
              { text: 'and Tmall', size: 38, weight: 800 },
              { text: '45% adjusted margin', size: 26, weight: 400, color: NOTE },
            ] },
          ],
        },
        international_digital_commerce: {
          blocks: [
            { x: 564, top: 533, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+32% Y/Y', size: 26, weight: 400, color: NOTE },
            ] },
            { x: 509, top: 594, anchor: 'end', lineGap: 8, lines: [
              { text: 'International', size: 38, weight: 800 },
              { text: 'Digital Commerce', size: 38, weight: 800 },
              { text: '(13%) adjusted margin', size: 26, weight: 400, color: NOTE },
            ] },
          ],
        },
        cloud: {
          blocks: [
            { x: 556, top: 668, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+13% Y/Y', size: 26, weight: 400, color: NOTE },
            ] },
            { x: 501, top: 751, anchor: 'end', lineGap: 8, lines: [
              { text: 'Cloud', size: 38, weight: 800 },
              { text: '10% adjusted margin', size: 26, weight: 400, color: NOTE },
            ] },
          ],
        },
        cainiao: {
          blocks: [
            { x: 558, top: 809, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '(1%) Y/Y', size: 26, weight: 400, color: NOTE },
            ] },
            { x: 503, top: 874, anchor: 'end', lineGap: 8, lines: [
              { text: 'Cainiao', size: 38, weight: 800 },
              { text: '1% adjusted margin', size: 26, weight: 400, color: NOTE },
            ] },
          ],
        },
        local_services: {
          blocks: [
            { x: 559, top: 941, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+12% Y/Y', size: 26, weight: 400, color: NOTE },
            ] },
            { x: 504, top: 982, anchor: 'end', lineGap: 8, lines: [
              { text: 'Local Services', size: 38, weight: 800 },
              { text: '(4%) adjusted margin', size: 26, weight: 400, color: NOTE },
            ] },
          ],
        },
        digital_media: {
          blocks: [
            { x: 575, top: 1058, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+8% Y/Y', size: 26, weight: 400, color: NOTE },
            ] },
            { x: 493, top: 1121, anchor: 'end', lineGap: 8, lines: [
              { text: 'Digital Media', size: 38, weight: 800 },
              { text: '(6%) adjusted margin', size: 26, weight: 400, color: NOTE },
            ] },
          ],
        },
        all_others: {
          blocks: [
            { x: 557, top: 1179, anchor: 'middle', lineGap: 8, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+13% Y/Y', size: 26, weight: 400, color: NOTE },
            ] },
            { x: 502, top: 1250, anchor: 'end', lineGap: 8, lines: [
              { text: 'All others', size: 38, weight: 800 },
              { text: '(6%) adjusted margin', size: 26, weight: 400, color: NOTE },
            ] },
          ],
        },
        gross_revenue: { blocks: [] },
        revenue: { blocks: [{ x: 1257, top: 514, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
          { text: '+8% Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        intersegment_eliminations: { blocks: [{ x: 1257, top: 1086, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Inter-segment', size: 35, weight: 800 },
          { text: 'Eliminations', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        gross_profit: { blocks: [{ x: 1602, top: 384, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 37, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
          { text: '42% margin', size: 26, weight: 400, color: NOTE },
          { text: '+2pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1606, top: 1040, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1949, top: 302, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
          { text: '15% margin', size: 26, weight: 400, color: NOTE },
          { text: '+6pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1934, top: 778, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 35, weight: 800 },
          { text: 'expenses', size: 35, weight: 800 },
          { text: '$value', size: 33, weight: 400 },
        ] }] },
        other_income: { blocks: [{ x: 2192, top: 500, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2447, top: 377, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 37, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
          { text: '17% margin', size: 26, weight: 400, color: NOTE },
          { text: '+12pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2340, top: 607, anchor: 'start', lines: [
          { text: 'Tax ($1.5B)', size: 30, weight: 800 },
        ] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 713, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales &', size: 31, weight: 800 },
          { text: 'marketing ($5.8B)', size: 31, weight: 800 },
        ] }] },
        product_development: { blocks: [{ x: 2338, top: 850, anchor: 'start', lineGap: 8, lines: [
          { text: 'Product', size: 30, weight: 800 },
          { text: 'development ($2.0B)', size: 29, weight: 800 },
        ] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 979, anchor: 'start', lineGap: 8, lines: [
          { text: 'General &', size: 30, weight: 800 },
          { text: 'Administrative ($1.5B)', size: 29, weight: 800 },
        ] }] },
        goodwill_impairment: { blocks: [{ x: 2341, top: 1123, anchor: 'start', lineGap: 8, lines: [
          { text: 'Goodwill', size: 30, weight: 800 },
          { text: 'Impairment ($0.8B)', size: 29, weight: 800 },
        ] }] },
        amortization_intangibles: { blocks: [{ x: 2338, top: 1251, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 30, weight: 800 },
          { text: 'of intangibles ($0.3B)', size: 29, weight: 800 },
        ] }] },
      },
    },

    nodes: [
      { id: 'taobao_tmall', col: 0, order: 0, type: 'source', label: ['Taobao', 'and Tmall'], value: 18.6, valueText: '$18.6B', notes: ['+5% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital Commerce'], value: 5.2, valueText: '$5.2B', notes: ['+32% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 2, type: 'source', label: 'Cloud', value: 4.3, valueText: '$4.3B', notes: ['+13% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 3.9, valueText: '$3.9B', notes: ['(1%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'local_services', col: 0, order: 4, type: 'source', label: 'Local Services', value: 2.3, valueText: '$2.3B', notes: ['+12% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 0.7, valueText: '$0.7B', notes: ['+8% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 6, type: 'source', label: 'All others', value: 7.4, valueText: '$7.4B', notes: ['+13% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 42.4, valueText: '$42.4B', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 38.4, valueText: '$38.4B', notes: ['+8% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost', label: ['Inter-segment', 'Eliminations'], value: -4.1, valueText: '($4.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 16.1, valueText: '$16.1B', notes: ['42% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 22.3, valueText: '($22.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.6, valueText: '$5.6B', notes: ['15% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 10.5, valueText: '($10.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 2.2, valueText: '$2.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 6.1, valueText: '$6.1B', notes: ['17% margin', '+12pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.5, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 5.8, valueText: '($5.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 6, order: 3, type: 'cost', label: ['Product', 'development'], value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: ['General &', 'Administrative'], value: 1.5, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'goodwill_impairment', col: 6, order: 5, type: 'cost', label: ['Goodwill', 'Impairment'], value: 0.8, valueText: '($0.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 6, order: 6, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'taobao_tmall', target: 'gross_revenue', value: 18.6, sourceWidth: 140, targetWidth: 141, y0: 439, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 5.2, sourceWidth: 38, targetWidth: 39, y0: 636, targetOrder: 1 },
      { source: 'cloud', target: 'gross_revenue', value: 4.3, sourceWidth: 31, targetWidth: 33, y0: 773.5, targetOrder: 2 },
      { source: 'cainiao', target: 'gross_revenue', value: 3.9, sourceWidth: 28, targetWidth: 30, y0: 910, targetOrder: 3 },
      { source: 'local_services', target: 'gross_revenue', value: 2.3, sourceWidth: 16, targetWidth: 17, y0: 1033, targetOrder: 4 },
      { source: 'digital_media', target: 'gross_revenue', value: 0.7, sourceWidth: 4, targetWidth: 5, y0: 1154, targetOrder: 5 },
      { source: 'all_others', target: 'gross_revenue', value: 7.4, sourceWidth: 54, targetWidth: 56, y0: 1288, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 38.4, sourceWidth: 290, targetWidth: 291, y0: 729, y1: 801.5, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 4.1, sourceWidth: 30, targetWidth: 30, y0: 890, y1: 1048, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 16.1, sourceWidth: 121, targetWidth: 120, y1: 619, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 22.3, sourceWidth: 170, targetWidth: 168, y1: 933, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 5.6, sourceWidth: 40, targetWidth: 40, y1: 496, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 10.5, sourceWidth: 80, targetWidth: 78, y1: 715, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.9, sourceWidth: 29, targetWidth: 30, y1: 407, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.5, sourceWidth: 11, targetWidth: 11, y1: 630.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 2.2, sourceWidth: 14, targetWidth: 16, y0: 479, y1: 430, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 5.8, sourceWidth: 43, targetWidth: 43, y0: 697.5, y1: 746.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 2.0, sourceWidth: 15, targetWidth: 12, y0: 726.5, y1: 882, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.5, sourceWidth: 11, targetWidth: 11, y0: 739.5, y1: 1018.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'goodwill_impairment', value: 0.8, sourceWidth: 6, targetWidth: 5, y0: 748, y1: 1156, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 0.3, sourceWidth: 3, targetWidth: 3, y0: 752.5, y1: 1284.5, sourceOrder: 4 },
    ],

    i18n: {
      preservedAnnotationText: ['Alibaba', 'Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', 'Alibaba Cloud', 'CAI', 'NIAO', 'YOU', 'KU', 'SUN ART'],
      zh: {
        name: 'Alibaba · 2025 财年第三季度',
        meta: {
          title: 'Alibaba 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2024 年 12 月',
        },
        annotationsSvg: annotations,
        nodes: {
          taobao_tmall: { label: '淘宝与天猫', notes: ['同比 +5%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +32%'] },
          cloud: { label: '云', notes: ['同比 +13%'] },
          cainiao: { label: '菜鸟', notes: ['同比 (1%)'] },
          local_services: { label: '本地生活', notes: ['同比 +12%'] },
          digital_media: { label: '数字媒体', notes: ['同比 +8%'] },
          all_others: { label: '所有其他业务', notes: ['同比 +13%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 42%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +12 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场' },
          product_development: { label: '产品开发' },
          ga: { label: '一般及行政' },
          goodwill_impairment: { label: '商誉减值' },
          amortization_intangibles: { label: '无形资产摊销' },
        },
        layout: {
          labels: {
            taobao_tmall: {
              blocks: [
                { x: 554, top: 286, anchor: 'middle', lineGap: 8, lines: [
                  { text: '$value', size: 38, weight: 400 },
                  { text: '同比 +5%', size: 26, weight: 400, color: NOTE },
                ] },
                { x: 499, top: 376, anchor: 'end', lineGap: 8, lines: [
                  { text: '淘宝', size: 38, weight: 800 },
                  { text: '与天猫', size: 38, weight: 800 },
                  { text: '调整后利润率 45%', size: 26, weight: 400, color: NOTE },
                ] },
              ],
            },
            cainiao: {
              blocks: [
                { x: 558, top: 809, anchor: 'middle', lineGap: 8, lines: [
                  { text: '$value', size: 38, weight: 400 },
                  { text: '同比 (1%)', size: 26, weight: 400, color: NOTE },
                ] },
                { x: 503, top: 874, anchor: 'end', lineGap: 8, lines: [
                  { text: '菜鸟', size: 38, weight: 800 },
                  { text: '调整后利润率 1%', size: 26, weight: 400, color: NOTE },
                ] },
              ],
            },
            local_services: {
              blocks: [
                { x: 559, top: 941, anchor: 'middle', lineGap: 8, lines: [
                  { text: '$value', size: 38, weight: 400 },
                  { text: '同比 +12%', size: 26, weight: 400, color: NOTE },
                ] },
                { x: 504, top: 982, anchor: 'end', lineGap: 8, lines: [
                  { text: '本地生活服务', size: 38, weight: 800 },
                  { text: '调整后利润率 (4%)', size: 26, weight: 400, color: NOTE },
                ] },
              ],
            },
            digital_media: {
              blocks: [
                { x: 575, top: 1058, anchor: 'middle', lineGap: 8, lines: [
                  { text: '$value', size: 38, weight: 400 },
                  { text: '同比 +8%', size: 26, weight: 400, color: NOTE },
                ] },
                { x: 493, top: 1121, anchor: 'end', lineGap: 8, lines: [
                  { text: '数字媒体', size: 38, weight: 800 },
                  { text: '调整后利润率 (6%)', size: 26, weight: 400, color: NOTE },
                ] },
              ],
            },
            goodwill_impairment: {
              blocks: [{ x: 2341, top: 1123, anchor: 'start', lineGap: 8, lines: [
                { text: '商誉', size: 30, weight: 800 },
                { text: '减值 ($0.8B)', size: 29, weight: 800 },
              ] }],
            },
          },
        },
      },
    },
  });
})();

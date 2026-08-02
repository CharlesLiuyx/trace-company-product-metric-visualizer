/* ====================================================================
 * Alibaba - Q2 FY25 income statement ($B)
 * Reconstructed from input/processed/alibaba-q2-fy25.png as a fixed
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
  const RIGHT_LABEL_X = 2317;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <g transform="translate(732 304)" fill="${ORANGE}">
        <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
        <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#ffffff"/>
        <text x="151" y="82" font-family="Arial,sans-serif" font-size="111" font-weight="700" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
      </g>
      <g font-family="Arial,sans-serif" font-weight="700">
        <text x="75" y="407" text-anchor="middle" font-size="38" fill="${ORANGE}">淘宝</text>
        <text x="75" y="438" text-anchor="middle" font-size="21" fill="${ORANGE}">Taobao</text>
        <text x="75" y="487" text-anchor="middle" font-size="36" fill="#ff1636">TMALL</text>

        <g transform="translate(8 548) scale(0.65)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="60" y="575" font-size="26" fill="#2a278f">Lazada</text>
        <text x="16" y="618" font-size="28" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="14" y="660" font-size="35" fill="#242424" font-weight="500">trendyol</text>
        <rect x="111" y="625" width="31" height="15" rx="3" fill="${ORANGE}"/>
        <text x="127" y="638" text-anchor="middle" font-size="11" fill="#ffffff">.com</text>

        <text x="22" y="744" font-size="30" fill="#1686d9">e.饿了么</text>
        <g transform="translate(58 755) scale(0.27)">${BUSINESS_ICONS.amap || ''}</g>
        <text x="18" y="914" font-size="30" fill="#0068ff">CAI</text>
        <text x="18" y="947" font-size="30" fill="#0068ff">NIAO</text>
        <text x="94" y="947" font-size="23" fill="#0068ff">菜鸟</text>
        <g transform="translate(10 1040) scale(0.65)">${BUSINESS_ICONS.alibabaCloud || ''}</g>
        <text x="18" y="1198" font-size="37" fill="#ff4081">YOU</text>
        <text x="96" y="1198" font-size="37" fill="#2db7ea">KU</text>
        <text x="38" y="1302" font-size="24" fill="#e3212d">SUN ART</text>
        <g transform="translate(45 1310) scale(0.72)">${BUSINESS_ICONS.hema || ''}</g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q2-fy25',
    name: 'Alibaba · Q2 FY25',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 129,
      titleWeight: 800,
      titleTextLength: 2300,
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
      scale: 8.3,
      nodes: {
        taobao_tmall: { x: 543, y: 402, width: 65, height: 116 },
        international_digital_commerce: { x: 543, y: 624, width: 65, height: 36 },
        local_services: { x: 543, y: 767, width: 65, height: 19 },
        cainiao: { x: 543, y: 893, width: 65, height: 27 },
        cloud: { x: 543, y: 1027, width: 65, height: 33 },
        digital_media: { x: 543, y: 1167, width: 65, height: 4 },
        all_others: { x: 543, y: 1278, width: 65, height: 61 },
        gross_revenue: { x: 884, y: 681, width: 64, height: 308 },
        revenue: { x: 1233, y: 760, width: 64, height: 279 },
        intersegment_eliminations: { x: 1229, y: 1120, width: 64, height: 26 },
        gross_profit: { x: 1574, y: 658, width: 64, height: 109 },
        cost_of_revenue: { x: 1578, y: 966, width: 64, height: 169 },
        operating_profit: { x: 1919, y: 560, width: 64, height: 40 },
        operating_expenses: { x: 1919, y: 791, width: 64, height: 66 },
        other: { x: 2162, y: 535, width: 64, height: 17 },
        net_profit: { x: 2256, y: 453, width: 65, height: 51 },
        tax: { x: 2256, y: 707, width: 65, height: 7 },
        sm: { x: 2256, y: 848, width: 65, height: 37 },
        product_development: { x: 2256, y: 1019, width: 65, height: 15 },
        ga: { x: 2256, y: 1168, width: 65, height: 10 },
        amortization_intangibles: { x: 2256, y: 1314, width: 65, height: 4 },
      },
      labels: {
        taobao_tmall: {
          blocks: [
            {
              x: 575, top: 319, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+1% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 520, top: 422, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Taobao', size: 38, weight: 800 },
                { text: 'and Tmall', size: 38, weight: 800 },
                { text: '45% adjusted margin', size: 26, weight: 400, color: NOTE, textLength: 276 },
              ],
            },
          ],
        },
        international_digital_commerce: {
          blocks: [
            {
              x: 575, top: 541, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+29% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 520, top: 584, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'International', size: 38, weight: 800 },
                { text: 'Digital Commerce', size: 38, weight: 800 },
                { text: '(9%) adjusted margin', size: 26, weight: 400, color: NOTE, textLength: 370 },
              ],
            },
          ],
        },
        local_services: {
          blocks: [
            {
              x: 575, top: 684, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+14% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 520, top: 725, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Local', size: 38, weight: 800 },
                { text: 'Services', size: 38, weight: 800 },
                { text: '(2%) adjusted margin', size: 26, weight: 400, color: NOTE, textLength: 275 },
              ],
            },
          ],
        },
        cainiao: {
          blocks: [
            {
              x: 575, top: 810, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+8% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 520, top: 870, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Cainiao', size: 38, weight: 800 },
                { text: '0% adjusted margin', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cloud: {
          blocks: [
            {
              x: 575, top: 944, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+7% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 520, top: 1025, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Cloud', size: 38, weight: 800 },
                { text: '9% adjusted margin', size: 26, weight: 400, color: NOTE, textLength: 252 },
              ],
            },
          ],
        },
        digital_media: {
          blocks: [
            {
              x: 575, top: 1080, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(1%) Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 520, top: 1151, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Digital Media', size: 38, weight: 800 },
                { text: '(3%) adjusted margin', size: 26, weight: 400, color: NOTE, textLength: 275 },
              ],
            },
          ],
        },
        all_others: {
          blocks: [
            {
              x: 575, top: 1195, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+9% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
            {
              x: 520, top: 1295, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'All others', size: 38, weight: 800 },
                { text: '(3%) adjusted margin', size: 26, weight: 400, color: NOTE, textLength: 269 },
              ],
            },
          ],
        },
        gross_revenue: { blocks: [] },
        revenue: {
          blocks: [{
            x: 1265, top: 618, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Revenue', size: 38, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
              { text: '+5% Y/Y', size: 26, weight: 400, color: NOTE },
            ],
          }],
        },
        intersegment_eliminations: {
          blocks: [{
            x: 1259, top: 1168, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Inter-segment', size: 35, weight: 800 },
              { text: 'Eliminations', size: 35, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1604, top: 484, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Gross profit', size: 37, weight: 800 },
              { text: '$value', size: 37, weight: 400 },
              { text: '39% margin', size: 26, weight: 400, color: NOTE },
              { text: '+1pp Y/Y', size: 26, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1610, top: 1158, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Cost of', size: 36, weight: 800 },
              { text: 'revenue', size: 36, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1953, top: 384, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Operating profit', size: 36, weight: 800 },
              { text: '$value', size: 33, weight: 400 },
              { text: '15% margin', size: 26, weight: 400, color: NOTE },
              { text: '(0pp) Y/Y', size: 26, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1940, top: 883, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Operating', size: 35, weight: 800 },
              { text: 'expenses', size: 35, weight: 800 },
              { text: '$value', size: 33, weight: 400 },
            ],
          }],
        },
        other: {
          blocks: [{
            x: 2195, top: 563, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Other', size: 32, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2440, top: 436, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Net profit', size: 37, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
              { text: '18% margin', size: 26, weight: 400, color: NOTE },
              { text: '+7pp Y/Y', size: 26, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2333, top: 694, anchor: 'start', lineGap: 8,
            lines: [{ text: 'Tax ($1.1B)', size: 30, weight: 800 }],
          }],
        },
        sm: {
          blocks: [{
            x: 2326, top: 827, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Sales &', size: 31, weight: 800 },
              { text: 'marketing ($4.6B)', size: 31, weight: 800 },
            ],
          }],
        },
        product_development: {
          blocks: [{
            x: 2341, top: 994, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Product', size: 30, weight: 800 },
              { text: 'development ($2.0B)', size: 29, weight: 800 },
            ],
          }],
        },
        ga: {
          blocks: [{
            x: 2336, top: 1139, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'General &', size: 30, weight: 800 },
              { text: 'Administrative ($1.4B)', size: 29, weight: 800 },
            ],
          }],
        },
        amortization_intangibles: {
          blocks: [{
            x: 2329, top: 1279, anchor: 'start', lineGap: 8,
            lines: [
              { text: 'Amortization', size: 30, weight: 800 },
              { text: 'of intangibles ($0.2B)', size: 29, weight: 800 },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'taobao_tmall', col: 0, order: 0, type: 'source', label: ['Taobao', 'and Tmall'], value: 14.1, valueText: '$14.1B', notes: ['+1% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital Commerce'], value: 4.5, valueText: '$4.5B', notes: ['+29% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'local_services', col: 0, order: 2, type: 'source', label: ['Local', 'Services'], value: 2.5, valueText: '$2.5B', notes: ['+14% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 3.5, valueText: '$3.5B', notes: ['+8% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 4, type: 'source', label: 'Cloud', value: 4.2, valueText: '$4.2B', notes: ['+7% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 0.8, valueText: '$0.8B', notes: ['(1%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 6, type: 'source', label: 'All others', value: 7.5, valueText: '$7.5B', notes: ['+9% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 37.1, valueText: '$37.1B', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 33.7, valueText: '$33.7B', notes: ['+5% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost', label: ['Inter-segment', 'Eliminations'], value: -3.5, valueText: '($3.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 13.2, valueText: '$13.2B', notes: ['39% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 20.5, valueText: '($20.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.0, valueText: '$5.0B', notes: ['15% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 8.3, valueText: '($8.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 2.2, valueText: '$2.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 6.2, valueText: '$6.2B', notes: ['18% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 4.6, valueText: '($4.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 6, order: 3, type: 'cost', label: ['Product', 'development'], value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: ['General &', 'Administrative'], value: 1.4, valueText: '($1.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 6, order: 5, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'taobao_tmall', target: 'gross_revenue', value: 14.1, sourceWidth: 116, targetWidth: 117, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 4.5, sourceWidth: 36, targetWidth: 37, targetOrder: 1 },
      { source: 'local_services', target: 'gross_revenue', value: 2.5, sourceWidth: 19, targetWidth: 21, targetOrder: 2 },
      { source: 'cainiao', target: 'gross_revenue', value: 3.5, sourceWidth: 27, targetWidth: 29, targetOrder: 3 },
      { source: 'cloud', target: 'gross_revenue', value: 4.2, sourceWidth: 33, targetWidth: 35, targetOrder: 4 },
      { source: 'digital_media', target: 'gross_revenue', value: 0.8, sourceWidth: 4, targetWidth: 7, targetOrder: 5 },
      { source: 'all_others', target: 'gross_revenue', value: 7.5, sourceWidth: 61, targetWidth: 62, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 33.7, width: 279, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 3.5, sourceWidth: 29, targetWidth: 26, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 13.2, width: 109, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 20.5, width: 169, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 5.0, sourceWidth: 40, targetWidth: 40, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.3, sourceWidth: 68, targetWidth: 66, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.9, sourceWidth: 33, targetWidth: 34, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.1, sourceWidth: 7, targetWidth: 7, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 2.2, sourceWidth: 17, targetWidth: 17, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 4.6, sourceWidth: 37, targetWidth: 37, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 2.0, sourceWidth: 16, targetWidth: 15, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.4, sourceWidth: 10, targetWidth: 10, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 0.2, sourceWidth: 3, targetWidth: 4, sourceOrder: 3 },
    ],

    i18n: {
      preservedAnnotationText: ['Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', 'Cainiao', 'YOUKU', 'SUN ART', 'e.饿了么'],
      zh: {
        name: 'Alibaba · 2025 财年第二季度',
        meta: {
          title: 'Alibaba 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 9 月',
        },
        nodes: {
          taobao_tmall: { label: '淘宝与天猫', notes: ['同比 +1%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +29%'] },
          local_services: { label: '本地生活服务', notes: ['同比 +14%'] },
          cainiao: { label: '菜鸟', notes: ['同比 +8%'] },
          cloud: { label: '云', notes: ['同比 +7%'] },
          digital_media: { label: '数字媒体', notes: ['同比 (1%)'] },
          all_others: { label: '所有其他业务', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场' },
          product_development: { label: '产品开发' },
          ga: { label: '一般及行政' },
          amortization_intangibles: { label: '无形资产摊销' },
        },
        layout: {
          labels: {
            taobao_tmall: {
              blocks: [
                {
                  x: 575, top: 319, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +1%', size: 26, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 520, top: 422, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '淘宝', size: 38, weight: 800 },
                    { text: '与天猫', size: 38, weight: 800 },
                    { text: '调整后利润率 45%', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            local_services: {
              blocks: [
                {
                  x: 575, top: 684, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +14%', size: 26, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 520, top: 725, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '本地生活', size: 38, weight: 800 },
                    { text: '服务', size: 38, weight: 800 },
                    { text: '调整后利润率 (2%)', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cainiao: {
              blocks: [
                {
                  x: 575, top: 810, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +8%', size: 26, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 520, top: 870, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '菜鸟', size: 38, weight: 800 },
                    { text: '调整后利润率 0%', size: 26, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [{
                x: 1610, top: 1158, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '收入', size: 36, weight: 800 },
                  { text: '成本', size: 36, weight: 800 },
                  { text: '$value', size: 34, weight: 400 },
                ],
              }],
            },
          },
        },
      },
    },
  });
})();

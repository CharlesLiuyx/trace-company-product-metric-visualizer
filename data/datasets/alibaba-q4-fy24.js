/* ====================================================================
 * Alibaba - Q4 FY24 income statement (RMB B)
 * Reconstructed from input/processed/alibaba-q4-fy24.png as a fixed
 * d3-sankey layout with reusable vector/text brand annotations.
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
  const RIGHT_LABEL_X = 2328;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = (zh = false) => `
    <g data-typography-role="brand" font-family="Arial,sans-serif">
      <g transform="translate(800 260) scale(0.9)" fill="${ORANGE}">
        <path d="M24 47 C52 4 137 -7 139 34 C141 72 84 95 36 89 C10 86 -8 70 4 54 C18 35 50 25 86 23 C54 29 32 40 24 55 C15 76 63 78 96 61 C122 47 130 27 112 19 C86 6 45 19 24 47 Z"/>
        <path d="M72 43 l34 -13 -8 23 -10 -8 c-18 10 -36 14 -54 11 16 -3 31 -7 45 -16 Z" fill="#ffffff"/>
        <text x="168" y="92" font-size="112" font-weight="700">Alibaba</text>
      </g>

      <g font-weight="700">
        <g data-annotation-clearance="taobao-tmall-brands" data-annotation-paired-node="taobao_tmall" data-annotation-paired-target="label" data-annotation-paired-side="left" transform="translate(0 112)">
          <text x="82" y="344" text-anchor="middle" font-size="34" fill="${ORANGE}">淘宝</text>
          <text x="82" y="372" text-anchor="middle" font-size="20" fill="${ORANGE}">Taobao</text>
          <text x="83" y="407" text-anchor="middle" font-size="34" fill="#ff1645">TMALL</text>
        </g>

        <g data-annotation-clearance="international-commerce-brands" data-annotation-paired-node="international_digital_commerce" data-annotation-paired-target="label" data-annotation-paired-side="left" transform="translate(0 171)">
          <g transform="translate(20 448) scale(0.55)">
            <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
            <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
            <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
          </g>
          <text x="58" y="479" font-size="24" fill="#2a278f">Lazada</text>
          <text x="21" y="516" font-size="25" font-weight="500" fill="${ORANGE}">AliExpress</text>
          <text x="23" y="551" font-size="30" font-weight="500" fill="#242424">trendyol</text>
        </g>

        <g data-annotation-clearance="local-services-brands" data-annotation-paired-node="local_services" data-annotation-paired-target="label" data-annotation-paired-side="left" transform="translate(0 197)">
          <text x="23" y="596" font-size="26" fill="#1786c8">饿了么</text>
          <g transform="translate(72 607) scale(0.18)">${BUSINESS_ICONS.amap || ''}</g>
        </g>

        <g data-annotation-clearance="cainiao-brand" data-annotation-paired-node="cainiao" data-annotation-paired-target="label" data-annotation-paired-side="left" transform="translate(0 226)">
          <text x="23" y="710" font-size="28" fill="#0068ff">CAI</text>
          <text x="23" y="738" font-size="28" fill="#0068ff">NIAO</text>
          <text x="92" y="738" font-size="23" fill="#0068ff">菜鸟</text>
        </g>

        <g data-annotation-clearance="alibaba-cloud-brand" data-annotation-paired-node="cloud" data-annotation-paired-target="label" data-annotation-paired-side="left" transform="translate(0 248)">
          <g transform="translate(20 808) scale(0.58)">${BUSINESS_ICONS.alibabaCloud || ''}</g>
        </g>

        <g data-annotation-clearance="digital-media-brand" data-annotation-paired-node="digital_media" data-annotation-paired-target="label" data-annotation-paired-side="left" transform="translate(0 293.5)">
          <text x="24" y="918" font-size="34" fill="#ff4081">YOU</text>
          <text x="95" y="918" font-size="34" fill="#2db7ea">KU</text>
        </g>

        <g data-annotation-clearance="all-others-brands" data-annotation-paired-node="all_others" data-annotation-paired-target="label" data-annotation-paired-side="left" transform="translate(0 308.5)">
          <text x="25" y="1024" font-size="25" fill="#ec1c2b">SUN ART</text>
          <g transform="translate(26 1035) scale(0.55)">${BUSINESS_ICONS.hema || ''}</g>
        </g>
      </g>
    </g>
    <text x="260" y="278" font-size="40" font-weight="800" fill="${TITLE}">${zh ? '单位：人民币' : 'in RMB'}</text>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q4-fy24',
    name: 'Alibaba · Q4 FY24',
    meta: {
      title: 'Alibaba Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 220,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2195,
      periodX: 2440,
      periodY: 306,
      periodNoteY: 348,
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
      type: { name: 36, value: 38, note: 27, lineGap: 7 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(false),

    layout: {
      scale: 1.22,
      nodes: {
        taobao_tmall: { x: 546, y: 422, width: 65, height: 114 },
        international_digital_commerce: { x: 546, y: 658, width: 65, height: 32 },
        local_services: { x: 546, y: 806, width: 65, height: 16 },
        cainiao: { x: 546, y: 926, width: 65, height: 28 },
        cloud: { x: 546, y: 1059, width: 65, height: 30 },
        digital_media: { x: 546, y: 1199, width: 65, height: 5 },
        all_others: { x: 546, y: 1314, width: 65, height: 63 },
        gross_revenue: { x: 887, y: 725, width: 64, height: 299 },
        revenue: { x: 1228, y: 762, width: 64, height: 274 },
        adjustments_unallocated: { x: 1232, y: 1133, width: 64, height: 23 },
        gross_profit: { x: 1566, y: 659, width: 64, height: 90 },
        cost_of_revenue: { x: 1575, y: 933, width: 64, height: 181 },
        operating_profit: { x: 1900, y: 568, width: 64, height: 17 },
        operating_expenses: { x: 1907, y: 788, width: 64, height: 72 },
        net_profit: { x: 2249, y: 447, width: 65, height: 4 },
        interest_investments: { x: 2249, y: 602, width: 65, height: 8 },
        tax: { x: 2249, y: 717, width: 65, height: 6 },
        sm: { x: 2249, y: 848, width: 65, height: 34 },
        product_development: { x: 2249, y: 1019, width: 65, height: 16 },
        ga: { x: 2249, y: 1163, width: 65, height: 16 },
        amortization_intangibles: { x: 2249, y: 1298, width: 65, height: 2 },
      },
      labels: {
        taobao_tmall: {
          blocks: [
            { x: 567, top: 339, anchor: 'middle', lineGap: 7, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+4% Y/Y', size: 27, weight: 400, color: NOTE },
            ] },
            { x: 513, top: 433, anchor: 'end', lineGap: 8, lines: [
              { text: 'Taobao', size: 36, weight: 800 },
              { text: 'and Tmall', size: 36, weight: 800 },
            ] },
          ],
        },
        international_digital_commerce: {
          blocks: [
            { x: 562, top: 575, anchor: 'middle', lineGap: 7, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+45% Y/Y', size: 27, weight: 400, color: NOTE },
            ] },
            { x: 508, top: 632, anchor: 'end', lineGap: 7, lines: [
              { text: 'International', size: 35, weight: 800 },
              { text: 'Digital Commerce', size: 35, weight: 800 },
            ] },
          ],
        },
        local_services: {
          blocks: [
            { x: 571, top: 723, anchor: 'middle', lineGap: 7, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+19% Y/Y', size: 27, weight: 400, color: NOTE },
            ] },
            { x: 517, top: 770, anchor: 'end', lineGap: 7, lines: [
              { text: 'Local', size: 36, weight: 800 },
              { text: 'Services', size: 36, weight: 800 },
            ] },
          ],
        },
        cainiao: {
          blocks: [
            { x: 579, top: 832, anchor: 'middle', lineGap: 7, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+30% Y/Y', size: 27, weight: 400, color: NOTE },
            ] },
            { x: 525, top: 918, anchor: 'end', lines: [{ text: 'Cainiao', size: 36, weight: 800 }] },
          ],
        },
        cloud: {
          blocks: [
            { x: 579, top: 976, anchor: 'middle', lineGap: 7, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+3% Y/Y', size: 27, weight: 400, color: NOTE },
            ] },
            { x: 525, top: 1052, anchor: 'end', lines: [{ text: 'Cloud', size: 36, weight: 800 }] },
          ],
        },
        digital_media: {
          blocks: [
            { x: 579, top: 1122, anchor: 'middle', lineGap: 1, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '(1%) Y/Y', size: 27, weight: 400, color: NOTE },
            ] },
            { x: 499, top: 1180, anchor: 'end', lines: [{ text: 'Digital Media', size: 35, weight: 800 }] },
          ],
        },
        all_others: {
          blocks: [
            { x: 573, top: 1231, anchor: 'middle', lineGap: 7, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '(3%) Y/Y', size: 27, weight: 400, color: NOTE },
            ] },
            { x: 519, top: 1323, anchor: 'end', lines: [{ text: 'All others', size: 36, weight: 800 }] },
          ],
        },
        gross_revenue: { blocks: [] },
        revenue: { blocks: [{ x: 1260, top: 624, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Revenue', size: 36, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '+7% Y/Y', size: 27, weight: 400, color: NOTE },
        ] }] },
        adjustments_unallocated: { blocks: [{ x: 1264, top: 1182, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Adjustments', size: 35, weight: 800 },
          { text: '& unallocated', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        gross_profit: { blocks: [{ x: 1598, top: 487, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Gross profit', size: 36, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '33% margin', size: 27, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1607, top: 1138, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 35, weight: 800 },
          { text: 'revenue', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1932, top: 394, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Operating profit', size: 36, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '7% margin', size: 27, weight: 400, color: NOTE },
          { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1928, top: 883, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 35, weight: 800 },
          { text: 'expenses', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2443, top: 377, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 6, lines: [
          { text: 'Net profit', size: 35, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
          { text: '0% margin', size: 26, weight: 400, color: NOTE },
          { text: '(10pp) Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        interest_investments: { blocks: [{ x: RIGHT_LABEL_X, top: 561, anchor: 'start', lineGap: 7, lines: [
          { text: 'Interest &', size: 31, weight: 800 },
          { text: 'investments (8.1B)', size: 31, weight: 800 },
        ] }] },
        tax: { blocks: [{ x: RIGHT_LABEL_X, top: 700, anchor: 'start', lines: [
          { text: 'Tax (5.7B)', size: 31, weight: 800 },
        ] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 828, anchor: 'start', lineGap: 7, lines: [
          { text: 'Sales &', size: 31, weight: 800 },
          { text: 'marketing (28.8B)', size: 31, weight: 800 },
        ] }] },
        product_development: { blocks: [{ x: RIGHT_LABEL_X, top: 988, anchor: 'start', lineGap: 7, lines: [
          { text: 'Product', size: 31, weight: 800 },
          { text: 'development (14.1B)', size: 31, weight: 800 },
        ] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1139, anchor: 'start', lineGap: 7, lines: [
          { text: 'General &', size: 31, weight: 800 },
          { text: 'Administrative (14.0B)', size: 31, weight: 800 },
        ] }] },
        amortization_intangibles: { blocks: [{ x: RIGHT_LABEL_X, top: 1271, anchor: 'start', lineGap: 7, lines: [
          { text: 'Amortization', size: 31, weight: 800 },
          { text: 'of intangibles (2.1B)', size: 31, weight: 800 },
        ] }] },
      },
    },

    nodes: [
      { id: 'taobao_tmall', col: 0, order: 0, type: 'source', label: ['Taobao', 'and Tmall'], value: 93.2, notes: ['+4% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital Commerce'], value: 27.5, notes: ['+45% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'local_services', col: 0, order: 2, type: 'source', label: ['Local', 'Services'], value: 14.6, notes: ['+19% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 24.6, notes: ['+30% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 4, type: 'source', label: 'Cloud', value: 25.6, notes: ['+3% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 4.9, notes: ['(1%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 6, type: 'source', label: 'All others', value: 51.5, notes: ['(3%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 241.9, color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 221.9, notes: ['+7% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'adjustments_unallocated', col: 2, order: 1, type: 'cost', label: ['Adjustments', '& unallocated'], value: -20.0, valueText: '(20.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 73.8, notes: ['33% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 148.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 14.8, notes: ['7% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 59.0, valueText: '(59.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.9, notes: ['0% margin', '(10pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest_investments', col: 5, order: 1, type: 'cost', label: ['Interest &', 'investments'], value: 8.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 5.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: ['Sales &', 'marketing'], value: 28.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 4, type: 'cost', label: ['Product', 'development'], value: 14.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: ['General &', 'Administrative'], value: 14.0, valueText: '(14.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 5, order: 6, type: 'cost', label: ['Amortization', 'of intangibles'], value: 2.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'taobao_tmall', target: 'gross_revenue', value: 93.2, sourceWidth: 114, targetWidth: 115, y0: 479, y1: 782.5, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 27.5, sourceWidth: 32, targetWidth: 34, y0: 674, y1: 857, targetOrder: 1 },
      { source: 'local_services', target: 'gross_revenue', value: 14.6, sourceWidth: 16, targetWidth: 18, y0: 814, y1: 883, targetOrder: 2 },
      { source: 'cainiao', target: 'gross_revenue', value: 24.6, sourceWidth: 28, targetWidth: 30, y0: 940, y1: 907, targetOrder: 3 },
      { source: 'cloud', target: 'gross_revenue', value: 25.6, sourceWidth: 30, targetWidth: 32, y0: 1074, y1: 938, targetOrder: 4 },
      { source: 'digital_media', target: 'gross_revenue', value: 4.9, sourceWidth: 5, targetWidth: 6, y0: 1201.5, y1: 957, targetOrder: 5 },
      { source: 'all_others', target: 'gross_revenue', value: 51.5, sourceWidth: 63, targetWidth: 64, y0: 1345.5, y1: 992, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 221.9, sourceWidth: 276, targetWidth: 274, y1: 899, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'adjustments_unallocated', value: 20.0, sourceWidth: 23, targetWidth: 23, y1: 1144.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 73.8, sourceWidth: 90, targetWidth: 90, y1: 704, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 148.1, sourceWidth: 184, targetWidth: 181, y1: 1023.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 14.8, sourceWidth: 17, targetWidth: 17, y0: 667.5, y1: 576.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 59.0, sourceWidth: 72, targetWidth: 72, y0: 713, y1: 824, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.9, sourceWidth: 4, targetWidth: 4, y1: 449, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_investments', value: 8.1, sourceWidth: 7, targetWidth: 8, y1: 606, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.7, sourceWidth: 6, targetWidth: 6, y1: 720, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 28.8, sourceWidth: 35, targetWidth: 34, y1: 865, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 14.1, sourceWidth: 17, targetWidth: 16, y1: 1027, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 14.0, sourceWidth: 18, targetWidth: 16, y1: 1171, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 2.1, sourceWidth: 2, targetWidth: 2, y1: 1299, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: [
        '淘宝', 'Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', '饿了么',
        'CAI', 'NIAO', '菜鸟', 'Alibaba Cloud', 'YOU', 'KU', 'SUN ART', '盒马', 'in RMB',
      ],
      zh: {
        name: 'Alibaba · 2024 财年第四季度',
        meta: {
          title: 'Alibaba 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 3 月',
          titleSize: 84,
          titleTextLength: 1600,
        },
        annotationsSvg: annotations(true),
        nodes: {
          taobao_tmall: { label: ['淘宝', '与天猫'], notes: ['同比 +4%'] },
          international_digital_commerce: { label: ['国际', '数字商业'], notes: ['同比 +45%'] },
          local_services: { label: ['本地', '生活服务'], notes: ['同比 +19%'] },
          cainiao: { label: '菜鸟', notes: ['同比 +30%'] },
          cloud: { label: '云业务', notes: ['同比 +3%'] },
          digital_media: { label: '数字媒体', notes: ['同比 (1%)'] },
          all_others: { label: '所有其他业务', notes: ['同比 (3%)'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          adjustments_unallocated: { label: ['调整项', '与未分配项'] },
          gross_profit: { label: '毛利润', notes: ['利润率 33%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 0%', '同比 (10 个百分点)'] },
          interest_investments: { label: ['利息与', '投资损失'] },
          tax: { label: '税费' },
          sm: { label: ['销售与', '市场'] },
          product_development: { label: ['产品', '开发'] },
          ga: { label: ['一般及', '行政'] },
          amortization_intangibles: { label: ['无形资产', '摊销'] },
        },
        layout: {
          labels: {
            taobao_tmall: {
              blocks: [
                { lines: [{ text: '$value' }, { text: '同比 +4%' }] },
                { top: 444, lines: [{ text: '淘宝' }, { text: '与天猫' }] },
              ],
            },
            international_digital_commerce: {
              blocks: [
                { lines: [{ text: '$value' }, { text: '同比 +45%' }] },
                { top: 640, lines: [{ text: '国际' }, { text: '数字商业' }] },
              ],
            },
            local_services: {
              blocks: [
                { lines: [{ text: '$value' }, { text: '同比 +19%' }] },
                { top: 780, lines: [{ text: '本地' }, { text: '生活服务' }] },
              ],
            },
            cainiao: {
              blocks: [
                { lines: [{ text: '$value' }, { text: '同比 +30%' }] },
                { top: 923, lines: [{ text: '菜鸟' }] },
              ],
            },
            digital_media: {
              blocks: [
                { lines: [{ text: '$value' }, { text: '同比 (1%)' }] },
                { lines: [{ text: '数字媒体' }] },
              ],
            },
            adjustments_unallocated: {
              blocks: [
                { lines: [{ text: '调整项' }, { text: '与未分配项' }, { text: '$value' }] },
              ],
            },
            interest_investments: {
              blocks: [
                { lines: [{ text: '利息与' }, { text: '投资损失 (8.1B)' }] },
              ],
            },
            ga: {
              blocks: [
                { lines: [{ text: '一般及' }, { text: '行政 (14.0B)' }] },
              ],
            },
            amortization_intangibles: {
              blocks: [
                { lines: [{ text: '无形资产' }, { text: '摊销 (2.1B)' }] },
              ],
            },
          },
        },
      },
    },
  });
})();

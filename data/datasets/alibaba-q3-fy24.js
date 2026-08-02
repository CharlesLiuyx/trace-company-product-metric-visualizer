/* ====================================================================
 * Alibaba - Q3 FY24 income statement (RMB B)
 * Reconstructed from input/processed/alibaba-q3-fy24.png as a fixed
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
  const RIGHT_LABEL_X = 2327;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="260" y="276" font-size="38" font-weight="800" fill="${TITLE}">in RMB</text>
      <g transform="translate(821 342)" fill="${ORANGE}" data-typography-role="brand">
        <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
        <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#ffffff"/>
        <text x="151" y="82" font-family="Arial,sans-serif" font-size="111" font-weight="700" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
      </g>
      <g font-family="Arial,sans-serif" font-weight="700" data-typography-role="brand">
        <text x="96" y="452" text-anchor="middle" font-size="38" fill="${ORANGE}">淘宝</text>
        <text x="96" y="480" text-anchor="middle" font-size="21" fill="${ORANGE}">Taobao</text>
        <text x="96" y="516" text-anchor="middle" font-size="36" fill="#ff1636">TMALL</text>

        <g transform="translate(18 575) scale(0.62)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="68" y="605" font-size="26" fill="#2a278f">Lazada</text>
        <text x="27" y="646" font-size="28" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <rect x="126" y="651" width="31" height="15" rx="3" fill="${ORANGE}"/>
        <text x="142" y="664" text-anchor="middle" font-size="11" fill="#ffffff">.com</text>
        <text x="27" y="690" font-size="35" fill="#242424" font-weight="500">trendyol</text>

        <text x="30" y="782" font-size="33" fill="#0879c9">饿了么</text>
        <g transform="translate(65 795) scale(0.24)">${BUSINESS_ICONS.amap || ''}</g>

        <text x="24" y="922" font-size="31" font-weight="500" fill="#0068ff">CAI</text>
        <text x="88" y="922" font-size="31" font-weight="500" fill="#0068ff">NIAO</text>
        <text x="145" y="922" font-size="23" fill="#0068ff">菜鸟</text>

        <g transform="translate(22 1047) scale(0.62)">${BUSINESS_ICONS.alibabaCloud || ''}</g>

        <text x="24" y="1199" font-size="37" fill="#ff4081">YOU</text>
        <text x="101" y="1199" font-size="37" fill="#2db7ea">KU</text>

        <text x="38" y="1308" font-size="25" fill="#ed1b2e">SUN ART</text>
        <g transform="translate(47 1322) scale(0.68)">${BUSINESS_ICONS.hema || ''}</g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q3-fy24',
    name: 'Alibaba · Q3 FY24',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Dec. 2023',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 218,
      titleSize: 129,
      titleWeight: 800,
      titleTextLength: 2195,
      periodX: 2442,
      periodY: 289,
      periodNoteY: 333,
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
      linkTint: { source: ORANGE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 37, note: 26, lineGap: 7 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 1.033,
      nodes: {
        taobao_tmall: { x: 559, y: 404, width: 64, height: 133 },
        international_digital_commerce: { x: 559, y: 659, width: 64, height: 27 },
        local_services: { x: 559, y: 791, width: 64, height: 13 },
        cainiao: { x: 559, y: 908, width: 64, height: 29 },
        cloud: { x: 559, y: 1045, width: 64, height: 28 },
        digital_media: { x: 559, y: 1188, width: 64, height: 7 },
        all_others: { x: 559, y: 1304, width: 64, height: 47 },
        gross_revenue: { x: 897, y: 680, width: 64, height: 290 },
        revenue: { x: 1236, y: 712, width: 63, height: 269 },
        adjustments_unallocated: { x: 1234, y: 1066, width: 63, height: 20 },
        gross_profit: { x: 1575, y: 641, width: 63, height: 107 },
        cost_of_revenue: { x: 1579, y: 891, width: 64, height: 161 },
        operating_profit: { x: 1911, y: 586, width: 63, height: 20 },
        operating_expenses: { x: 1911, y: 744, width: 63, height: 83 },
        other: { x: 2149, y: 534, width: 63, height: 1 },
        net_profit: { x: 2251, y: 467, width: 64, height: 9 },
        interest_investments: { x: 2251, y: 645, width: 64, height: 5 },
        tax: { x: 2251, y: 725, width: 64, height: 3 },
        sm: { x: 2251, y: 831, width: 64, height: 34 },
        amortization_intangibles: { x: 2251, y: 987, width: 64, height: 21 },
        product_development: { x: 2251, y: 1137, width: 64, height: 12 },
        ga: { x: 2251, y: 1298, width: 64, height: 10 },
      },
      labels: {
        taobao_tmall: { blocks: [
          { x: 591, top: 316, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+2% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 527, top: 428, anchor: 'end', lineGap: 8, lines: [
            { text: 'Taobao', size: 38, weight: 800 },
            { text: 'and Tmall', size: 38, weight: 800 },
          ] },
        ] },
        international_digital_commerce: { blocks: [
          { x: 591, top: 574, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+44% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 527, top: 605, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'International', size: 38, weight: 800 },
            { text: 'Digital Commerce', size: 38, weight: 800 },
          ] },
        ] },
        local_services: { blocks: [
          { x: 591, top: 706, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+13% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 535, top: 739, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'Local', size: 38, weight: 800 },
            { text: 'Services', size: 38, weight: 800 },
          ] },
        ] },
        cainiao: { blocks: [
          { x: 591, top: 818, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+24% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 533, top: 897, anchor: 'end', lines: [{ text: 'Cainiao', size: 38, weight: 800 }] },
        ] },
        cloud: { blocks: [
          { x: 591, top: 957, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+3% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 533, top: 1035, anchor: 'end', lines: [{ text: 'Cloud', size: 38, weight: 800 }] },
        ] },
        digital_media: { blocks: [
          { x: 591, top: 1105, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+18% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 527, top: 1172, anchor: 'end', lines: [{ text: 'Digital Media', size: 38, weight: 800 }] },
        ] },
        all_others: { blocks: [
          { x: 591, top: 1211, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(7%) Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 534, top: 1305, anchor: 'end', lines: [{ text: 'All Others', size: 38, weight: 800 }] },
        ] },
        gross_revenue: { blocks: [] },
        revenue: { blocks: [{ x: 1268, top: 584, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Revenue', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
          { text: '+5% Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        adjustments_unallocated: { blocks: [{ x: 1266, top: 1105, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Adjustments', size: 35, weight: 800 },
          { text: '& unallocated', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        gross_profit: { blocks: [{ x: 1607, top: 467, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
          { text: '40% margin', size: 26, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1611, top: 1074, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1943, top: 412, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
          { text: '9% margin', size: 26, weight: 400, color: NOTE },
          { text: '(5pp) Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1931, top: 847, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 35, weight: 800 },
          { text: 'expenses', size: 35, weight: 800 },
          { text: '$value', size: 33, weight: 400 },
        ] }] },
        other: { blocks: [{ x: 2181, top: 551, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2429, top: 442, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 37, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
          { text: '4% margin', size: 26, weight: 400, color: NOTE },
          { text: '(14pp) Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        interest_investments: { blocks: [{ x: RIGHT_LABEL_X, top: 605, anchor: 'start', lineGap: 8, lines: [
          { text: 'Interest &', size: 31, weight: 800 },
          { text: 'investments (7.2B)', size: 31, weight: 800 },
        ] }] },
        tax: { blocks: [{ x: RIGHT_LABEL_X, top: 712, anchor: 'start', lines: [{ text: 'Tax (5.0B)', size: 30, weight: 800 }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X + 5, top: 811, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales &', size: 31, weight: 800 },
          { text: 'marketing (33.7B)', size: 31, weight: 800 },
        ] }] },
        amortization_intangibles: { blocks: [{ x: RIGHT_LABEL_X + 12, top: 961, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 30, weight: 800 },
          { text: 'of intangibles (23.1B)', size: 29, weight: 800 },
        ] }] },
        product_development: { blocks: [{ x: RIGHT_LABEL_X, top: 1112, anchor: 'start', lineGap: 8, lines: [
          { text: 'Product', size: 30, weight: 800 },
          { text: 'development (13.4B)', size: 29, weight: 800 },
        ] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X + 8, top: 1272, anchor: 'start', lineGap: 8, lines: [
          { text: 'General &', size: 30, weight: 800 },
          { text: 'Administrative (11.4B)', size: 29, weight: 800 },
        ] }] },
      },
    },

    nodes: [
      { id: 'taobao_tmall', col: 0, order: 0, type: 'source', label: ['Taobao', 'and Tmall'], value: 129.1, valueText: '129.1B', notes: ['+2% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital Commerce'], value: 28.5, valueText: '28.5B', notes: ['+44% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'local_services', col: 0, order: 2, type: 'source', label: ['Local', 'Services'], value: 15.2, valueText: '15.2B', notes: ['+13% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 28.5, valueText: '28.5B', notes: ['+24% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 4, type: 'source', label: 'Cloud', value: 28.1, valueText: '28.1B', notes: ['+3% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 5.0, valueText: '5.0B', notes: ['+18% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 6, type: 'source', label: 'All Others', value: 47.0, valueText: '47.0B', notes: ['(7%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 281.4, valueText: '281.4B', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 260.3, valueText: '260.3B', notes: ['+5% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'adjustments_unallocated', col: 2, order: 1, type: 'cost', label: ['Adjustments', '& unallocated'], value: -21.0, valueText: '(21.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 104.1, valueText: '104.1B', notes: ['40% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 156.2, valueText: '(156.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 22.5, valueText: '22.5B', notes: ['9% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 81.6, valueText: '(81.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.4, valueText: '0.4B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 10.7, valueText: '10.7B', notes: ['4% margin', '(14pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest_investments', col: 6, order: 1, type: 'cost', label: ['Interest &', 'investments'], value: 7.2, valueText: '(7.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 5.0, valueText: '(5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: ['Sales &', 'marketing'], value: 33.7, valueText: '(33.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 6, order: 4, type: 'cost', label: ['Amortization', 'of intangibles'], value: 23.1, valueText: '(23.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 6, order: 5, type: 'cost', label: ['Product', 'development'], value: 13.4, valueText: '(13.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 6, type: 'cost', label: ['General &', 'Administrative'], value: 11.4, valueText: '(11.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'taobao_tmall', target: 'gross_revenue', value: 129.1, sourceWidth: 133, targetWidth: 133, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 28.5, sourceWidth: 27, targetWidth: 29, targetOrder: 1 },
      { source: 'local_services', target: 'gross_revenue', value: 15.2, sourceWidth: 13, targetWidth: 16, targetOrder: 2 },
      { source: 'cainiao', target: 'gross_revenue', value: 28.5, sourceWidth: 29, targetWidth: 29, targetOrder: 3 },
      { source: 'cloud', target: 'gross_revenue', value: 28.1, sourceWidth: 28, targetWidth: 29, targetOrder: 4 },
      { source: 'digital_media', target: 'gross_revenue', value: 5.0, sourceWidth: 7, targetWidth: 5, targetOrder: 5 },
      { source: 'all_others', target: 'gross_revenue', value: 47.0, sourceWidth: 47, targetWidth: 48, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 260.3, width: 269, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'adjustments_unallocated', value: 21.0, width: 20, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 104.1, sourceWidth: 107, targetWidth: 107, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 156.2, sourceWidth: 161, targetWidth: 161, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 22.5, sourceWidth: 22, targetWidth: 20, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 81.6, sourceWidth: 85, targetWidth: 83, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 10.3, sourceWidth: 10, targetWidth: 8, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_investments', value: 7.2, sourceWidth: 6, targetWidth: 5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 5.0, sourceWidth: 4, targetWidth: 3, sourceOrder: 2 },
      { source: 'other', target: 'net_profit', value: 0.4, width: 1, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 33.7, sourceWidth: 34, targetWidth: 34, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 23.1, sourceWidth: 24, targetWidth: 21, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'product_development', value: 13.4, sourceWidth: 14, targetWidth: 12, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 11.4, sourceWidth: 11, targetWidth: 10, sourceOrder: 3 },
    ],

    i18n: {
      preservedAnnotationText: ['Taobao', 'Lazada', 'AliExpress', 'trendyol'],
      zh: {
        name: '阿里巴巴 · 2024 财年第三季度',
        meta: {
          title: '阿里巴巴 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2023 年 12 月',
        },
        nodes: {
          taobao_tmall: { label: '淘宝和天猫', notes: ['同比 +2%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +44%'] },
          local_services: { label: '本地生活服务', notes: ['同比 +13%'] },
          cainiao: { label: '菜鸟', notes: ['同比 +24%'] },
          cloud: { label: '云', notes: ['同比 +3%'] },
          digital_media: { label: '数字媒体', notes: ['同比 +18%'] },
          all_others: { label: '所有其他业务', notes: ['同比 (7%)'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          adjustments_unallocated: { label: '调整及未分配项目' },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 (14 个百分点)'] },
          interest_investments: { label: '利息及投资损失' },
          tax: { label: '税费' },
          sm: { label: '销售与市场' },
          amortization_intangibles: { label: '无形资产摊销' },
          product_development: { label: '产品开发' },
          ga: { label: '一般及行政' },
        },
        layout: {
          labels: {
            taobao_tmall: { blocks: [
              { x: 591, top: 316, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +2%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 527, top: 428, anchor: 'end', lineGap: 8, lines: [
                { text: '淘宝', size: 38, weight: 800 },
                { text: '和天猫', size: 38, weight: 800 },
              ] },
            ] },
            local_services: { blocks: [
              { x: 591, top: 706, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +13%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 535, top: 739, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
                { text: '本地生活', size: 38, weight: 800 },
                { text: '服务', size: 38, weight: 800 },
              ] },
            ] },
            cainiao: { blocks: [
              { x: 591, top: 818, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +24%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 533, top: 897, anchor: 'end', lines: [{ text: '菜鸟', size: 38, weight: 800 }] },
            ] },
            all_others: { blocks: [
              { x: 591, top: 1211, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 (7%)', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 534, top: 1305, anchor: 'end', lines: [{ text: '所有其他业务', size: 38, weight: 800 }] },
            ] },
            adjustments_unallocated: { blocks: [{ x: 1266, top: 1105, anchor: 'middle', lineGap: 8, lines: [
              { text: '调整及', size: 35, weight: 800 },
              { text: '未分配项目', size: 35, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
            ] }] },
            interest_investments: { blocks: [{ x: RIGHT_LABEL_X, top: 605, anchor: 'start', lineGap: 8, lines: [
              { text: '利息及', size: 31, weight: 800 },
              { text: '投资损失 (7.2B)', size: 31, weight: 800 },
            ] }] },
            amortization_intangibles: { blocks: [{ x: RIGHT_LABEL_X + 12, top: 961, anchor: 'start', lineGap: 8, lines: [
              { text: '无形资产', size: 30, weight: 800 },
              { text: '摊销 (23.1B)', size: 29, weight: 800 },
            ] }] },
          },
        },
      },
    },
  });
})();

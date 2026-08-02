/* Alibaba Q1 FY24 income statement (RMB B), reconstructed as fixed SVG Sankey geometry. */
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
      <text x="260" y="278" font-size="40" font-weight="700" fill="${TITLE}">in RMB</text>
      <g transform="translate(820 394)" fill="${ORANGE}">
        <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
        <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#ffffff"/>
        <text x="151" y="82" font-family="Arial,sans-serif" font-size="111" font-weight="700" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
      </g>
      <g font-family="Arial,sans-serif" font-weight="700">
        <text x="74" y="441" text-anchor="middle" font-size="38" fill="${ORANGE}">淘宝</text>
        <text x="74" y="470" text-anchor="middle" font-size="21" fill="${ORANGE}">Taobao</text>
        <text x="75" y="516" text-anchor="middle" font-size="36" fill="#ff1636">TMALL</text>

        <g transform="translate(8 695) scale(0.65)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="60" y="719" font-size="26" fill="#2a278f">Lazada</text>
        <text x="16" y="764" font-size="28" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="14" y="807" font-size="35" fill="#242424" font-weight="500">trendyol</text>
        <rect x="111" y="771" width="31" height="15" rx="3" fill="${ORANGE}"/>
        <text x="127" y="784" text-anchor="middle" font-size="11" fill="#ffffff">.com</text>

        <text x="28" y="851" font-size="31" fill="#2085c5">饿了么</text>
        <g transform="translate(68 856) scale(0.22)">${BUSINESS_ICONS.amap || ''}</g>
        <text x="24" y="975" font-size="31" fill="#0068ff">CAI</text>
        <text x="24" y="1009" font-size="31" fill="#0068ff">NIAO 菜鸟</text>
        <g transform="translate(7 1070) scale(0.65)">${BUSINESS_ICONS.alibabaCloud || ''}</g>
        <text x="24" y="1205" font-size="37" fill="#ff4081">YOU</text>
        <text x="102" y="1205" font-size="37" fill="#2db7ea">KU</text>
        <text x="38" y="1326" font-size="29" fill="#ed1c24">SUN ART</text>
        <g transform="translate(49 1333) scale(0.73)">${BUSINESS_ICONS.hema || ''}</g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q1-fy24',
    name: 'Alibaba · Q1 FY24',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending June 2023',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q1-fy24.png', width: 2667, height: 1500 },
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
      linkTint: { source: ORANGE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 37, note: 26, lineGap: 7 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 0.96,
      nodes: {
        taobao_tmall: { x: 564, y: 405, width: 64, height: 110 },
        international_digital_commerce: { x: 564, y: 692, width: 64, height: 19 },
        local_services: { x: 564, y: 827, width: 64, height: 11 },
        cainiao: { x: 564, y: 949, width: 64, height: 20 },
        cloud: { x: 564, y: 1074, width: 64, height: 23 },
        digital_media: { x: 564, y: 1197, width: 64, height: 3 },
        all_others: { x: 564, y: 1301, width: 64, height: 41 },
        gross_revenue: { x: 901, y: 737, width: 63, height: 240 },
        revenue: { x: 1237, y: 771, width: 64, height: 224 },
        adjustments_unallocated: { x: 1240, y: 1108, width: 63, height: 14 },
        gross_profit: { x: 1574, y: 682, width: 64, height: 86 },
        cost_of_revenue: { x: 1579, y: 956, width: 63, height: 136 },
        operating_profit: { x: 1909, y: 590, width: 63, height: 40 },
        operating_expenses: { x: 1916, y: 817, width: 63, height: 46 },
        other: { x: 2153, y: 578, width: 63, height: 2 },
        net_profit: { x: 2247, y: 481, width: 64, height: 30 },
        interest_investments: { x: 2247, y: 697, width: 64, height: 5 },
        tax: { x: 2247, y: 801, width: 64, height: 5 },
        sm: { x: 2247, y: 887, width: 64, height: 23 },
        product_development: { x: 2247, y: 1018, width: 64, height: 9 },
        ga: { x: 2247, y: 1122, width: 64, height: 5 },
        amortization_intangibles: { x: 2247, y: 1234, width: 64, height: 2 },
        goodwill_impairment: { x: 2247, y: 1340, width: 64, height: 2 },
      },
      labels: {
        taobao_tmall: { blocks: [
          { x: 598, top: 322, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+12% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 538, top: 414, anchor: 'end', lineGap: 8, lines: [
            { text: 'Taobao', size: 38, weight: 800 }, { text: 'and Tmall', size: 38, weight: 800 },
          ] },
        ] },
        international_digital_commerce: { blocks: [
          { x: 598, top: 608, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+41% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 538, top: 650, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'International', size: 38, weight: 800 }, { text: 'Digital Commerce', size: 38, weight: 800 },
          ] },
        ] },
        local_services: { blocks: [
          { x: 598, top: 744, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+30% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 538, top: 775, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'Local', size: 38, weight: 800 }, { text: 'Services', size: 38, weight: 800 },
          ] },
        ] },
        cainiao: { blocks: [
          { x: 598, top: 866, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+34% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 538, top: 922, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [{ text: 'Cainiao', size: 38, weight: 800 }] },
        ] },
        cloud: { blocks: [
          { x: 598, top: 991, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+4% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 538, top: 1059, anchor: 'end', lineGap: 8, lines: [{ text: 'Cloud', size: 38, weight: 800 }] },
        ] },
        digital_media: { blocks: [
          { x: 598, top: 1104, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+36% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 538, top: 1168, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [{ text: 'Digital Media', size: 38, weight: 800 }] },
        ] },
        all_others: { blocks: [
          { x: 598, top: 1218, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 }, { text: '+1% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 538, top: 1285, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [{ text: 'All others', size: 38, weight: 800 }] },
        ] },
        gross_revenue: { blocks: [] },
        revenue: { blocks: [{ x: 1269, top: 625, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 },
          { text: '+14% Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        adjustments_unallocated: { blocks: [{ x: 1271, top: 1142, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Adjustments', size: 35, weight: 800 }, { text: '& unallocated', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        gross_profit: { blocks: [{ x: 1606, top: 503, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 37, weight: 800 }, { text: '$value', size: 37, weight: 400 },
          { text: '39% margin', size: 26, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1610, top: 1109, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1941, top: 417, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 36, weight: 800 }, { text: '$value', size: 35, weight: 400 },
          { text: '18% margin', size: 26, weight: 400, color: NOTE }, { text: '+6pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1940, top: 891, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 35, weight: 800 }, { text: 'expenses', size: 35, weight: 800 },
          { text: '$value', size: 33, weight: 400 },
        ] }] },
        other: { blocks: [{ x: 2185, top: 588, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2438, top: 455, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net profit', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 },
          { text: '14% margin', size: 26, weight: 400, color: NOTE }, { text: '+4pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        interest_investments: { blocks: [{ x: RIGHT_LABEL_X + 10, top: 666, anchor: 'start', lineGap: 8, lines: [
          { text: 'Interest &', size: 30, weight: 800 }, { text: 'investments (7.7B)', size: 29, weight: 800 },
        ] }] },
        tax: { blocks: [{ x: RIGHT_LABEL_X, top: 789, anchor: 'start', lineGap: 8, lines: [
          { text: 'Tax (6.0B)', size: 30, weight: 800 },
        ] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 867, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales &', size: 31, weight: 800 }, { text: 'marketing (27.0B)', size: 30, weight: 800 },
        ] }] },
        product_development: { blocks: [{ x: RIGHT_LABEL_X, top: 988, anchor: 'start', lineGap: 8, lines: [
          { text: 'Product', size: 30, weight: 800 }, { text: 'development (10.5B)', size: 29, weight: 800 },
        ] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1095, anchor: 'start', lineGap: 8, lines: [
          { text: 'General &', size: 30, weight: 800 }, { text: 'Administrative (7.3B)', size: 29, weight: 800 },
        ] }] },
        amortization_intangibles: { blocks: [{ x: RIGHT_LABEL_X + 9, top: 1198, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 30, weight: 800 }, { text: 'of intangibles (2.5B)', size: 29, weight: 800 },
        ] }] },
        goodwill_impairment: { blocks: [{ x: RIGHT_LABEL_X + 10, top: 1308, anchor: 'start', lineGap: 8, lines: [
          { text: 'Goodwill', size: 30, weight: 800 }, { text: 'impairment (2.0B)', size: 29, weight: 800 },
        ] }] },
      },
    },

    nodes: [
      { id: 'taobao_tmall', col: 0, order: 0, type: 'source', label: ['Taobao', 'and Tmall'], value: 115.0, valueText: '115.0B', notes: ['+12% Y/Y'] },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital Commerce'], value: 22.1, valueText: '22.1B', notes: ['+41% Y/Y'] },
      { id: 'local_services', col: 0, order: 2, type: 'source', label: ['Local', 'Services'], value: 14.5, valueText: '14.5B', notes: ['+30% Y/Y'] },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 23.1, valueText: '23.1B', notes: ['+34% Y/Y'] },
      { id: 'cloud', col: 0, order: 4, type: 'source', label: 'Cloud', value: 25.1, valueText: '25.1B', notes: ['+4% Y/Y'] },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 5.4, valueText: '5.4B', notes: ['+36% Y/Y'] },
      { id: 'all_others', col: 0, order: 6, type: 'source', label: 'All others', value: 45.5, valueText: '45.5B', notes: ['+1% Y/Y'] },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 250.8, valueText: '250.8B' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 234.2, valueText: '234.2B', notes: ['+14% Y/Y'] },
      { id: 'adjustments_unallocated', col: 2, order: 1, type: 'cost', label: ['Adjustments', '& unallocated'], value: -16.6, valueText: '(16.6B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 91.8, valueText: '91.8B', notes: ['39% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 142.3, valueText: '(142.3B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 42.5, valueText: '42.5B', notes: ['18% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 49.3, valueText: '(49.3B)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 4.2, valueText: '4.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 33.0, valueText: '33.0B', notes: ['14% margin', '+4pp Y/Y'] },
      { id: 'interest_investments', col: 6, order: 1, type: 'cost', label: ['Interest &', 'investments'], value: 7.7, valueText: '(7.7B)' },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 6.0, valueText: '(6.0B)' },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: ['Sales &', 'marketing'], value: 27.0, valueText: '(27.0B)' },
      { id: 'product_development', col: 6, order: 4, type: 'cost', label: ['Product', 'development'], value: 10.5, valueText: '(10.5B)' },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: ['General &', 'Administrative'], value: 7.3, valueText: '(7.3B)' },
      { id: 'amortization_intangibles', col: 6, order: 6, type: 'cost', label: ['Amortization', 'of intangibles'], value: 2.5, valueText: '(2.5B)', color: RED_LINK },
      { id: 'goodwill_impairment', col: 6, order: 7, type: 'cost', label: ['Goodwill', 'impairment'], value: 2.0, valueText: '(2.0B)', color: RED_LINK },
    ],

    links: [
      { source: 'taobao_tmall', target: 'gross_revenue', value: 115.0, sourceWidth: 110, targetWidth: 110, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 22.1, sourceWidth: 19, targetWidth: 21, targetOrder: 1 },
      { source: 'local_services', target: 'gross_revenue', value: 14.5, sourceWidth: 11, targetWidth: 14, targetOrder: 2 },
      { source: 'cainiao', target: 'gross_revenue', value: 23.1, sourceWidth: 20, targetWidth: 22, targetOrder: 3 },
      { source: 'cloud', target: 'gross_revenue', value: 25.1, sourceWidth: 23, targetWidth: 24, targetOrder: 4 },
      { source: 'digital_media', target: 'gross_revenue', value: 5.4, sourceWidth: 3, targetWidth: 5, targetOrder: 5 },
      { source: 'all_others', target: 'gross_revenue', value: 45.5, sourceWidth: 41, targetWidth: 44, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 234.2, sourceWidth: 226, targetWidth: 224, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'adjustments_unallocated', value: 16.6, width: 14, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 91.8, sourceWidth: 86, targetWidth: 86, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 142.3, sourceWidth: 138, targetWidth: 136, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 42.5, sourceWidth: 40, targetWidth: 40, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 49.3, sourceWidth: 46, targetWidth: 46, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 28.8, sourceWidth: 27, targetWidth: 27, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_investments', value: 7.7, sourceWidth: 7, targetWidth: 5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 6.0, sourceWidth: 6, targetWidth: 5, sourceOrder: 2 },
      { source: 'other', target: 'net_profit', value: 4.2, sourceWidth: 2, targetWidth: 2, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 27.0, sourceWidth: 25, targetWidth: 23, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 10.5, sourceWidth: 10, targetWidth: 9, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 7.3, sourceWidth: 7, targetWidth: 5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 2.5, sourceWidth: 2, targetWidth: 2, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'goodwill_impairment', value: 2.0, sourceWidth: 2, targetWidth: 2, sourceOrder: 4 },
    ],

    i18n: {
      preservedAnnotationText: ['in RMB', 'Alibaba', 'Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', '饿了么', 'NIAO 菜鸟', 'YOUKU', 'SUN ART', '盒马'],
      zh: {
        name: 'Alibaba · 2024 财年第一季度',
        meta: { title: 'Alibaba 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2023 年 6 月' },
        nodes: {
          taobao_tmall: { label: '淘宝与天猫', notes: ['同比 +12%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +41%'] },
          local_services: { label: '本地生活服务', notes: ['同比 +30%'] },
          cainiao: { label: '菜鸟', notes: ['同比 +34%'] },
          cloud: { label: '云', notes: ['同比 +4%'] },
          digital_media: { label: '数字媒体', notes: ['同比 +36%'] },
          all_others: { label: '所有其他业务', notes: ['同比 +1%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          adjustments_unallocated: { label: '调整及未分配项目' },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 14%', '同比 +4 个百分点'] },
          interest_investments: { label: '利息及投资损失' },
          tax: { label: '税费' },
          sm: { label: '销售与市场' },
          product_development: { label: '产品开发' },
          ga: { label: '一般及行政' },
          amortization_intangibles: { label: '无形资产摊销' },
          goodwill_impairment: { label: '商誉减值' },
        },
        layout: {
          labels: {
            taobao_tmall: { blocks: [
              { x: 598, top: 322, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 }, { text: '同比 +12%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 538, top: 414, anchor: 'end', lineGap: 8, lines: [
                { text: '淘宝', size: 38, weight: 800 }, { text: '与天猫', size: 38, weight: 800 },
              ] },
            ] },
            local_services: { blocks: [
              { x: 598, top: 744, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 }, { text: '同比 +30%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 538, top: 775, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
                { text: '本地生活', size: 38, weight: 800 }, { text: '服务', size: 38, weight: 800 },
              ] },
            ] },
            cainiao: { blocks: [
              { x: 598, top: 866, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 }, { text: '同比 +34%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 538, top: 922, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
                { text: '菜鸟', size: 38, weight: 800 },
              ] },
            ] },
            adjustments_unallocated: { blocks: [{ x: 1271, top: 1142, anchor: 'middle', lineGap: 8, lines: [
              { text: '调整及', size: 35, weight: 800 }, { text: '未分配项目', size: 35, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
            ] }] },
            cost_of_revenue: { blocks: [{ x: 1610, top: 1109, anchor: 'middle', lineGap: 8, lines: [
              { text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
            ] }] },
            operating_expenses: { blocks: [{ x: 1940, top: 891, anchor: 'middle', lineGap: 8, lines: [
              { text: '运营', size: 35, weight: 800 }, { text: '费用', size: 35, weight: 800 },
              { text: '$value', size: 33, weight: 400 },
            ] }] },
            interest_investments: { blocks: [{ x: RIGHT_LABEL_X + 10, top: 666, anchor: 'start', lineGap: 8, lines: [
              { text: '利息及', size: 30, weight: 800 }, { text: '投资损失 (7.7B)', size: 29, weight: 800 },
            ] }] },
            amortization_intangibles: { blocks: [{ x: RIGHT_LABEL_X + 9, top: 1198, anchor: 'start', lineGap: 8, lines: [
              { text: '无形资产', size: 30, weight: 800 }, { text: '摊销 (2.5B)', size: 29, weight: 800 },
            ] }] },
            goodwill_impairment: { blocks: [{ x: RIGHT_LABEL_X + 10, top: 1308, anchor: 'start', lineGap: 8, lines: [
              { text: '商誉', size: 30, weight: 800 }, { text: '减值 (2.0B)', size: 29, weight: 800 },
            ] }] },
          },
        },
      },
    },
  });
})();

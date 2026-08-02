/* Alibaba - Q1 FY25 income statement (RMB B), reconstructed from the Source. */
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
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = (inRmb) => `
    <g font-family="Arial,sans-serif" data-typography-role="brand">
      <text x="260" y="275" text-anchor="middle" font-size="40" font-weight="700" fill="#005392">${inRmb}</text>
      <g transform="translate(815 322) scale(.8)" fill="${ORANGE}">
        <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
        <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#fff"/>
        <text x="151" y="82" font-size="111" font-weight="700" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
      </g>
      <g font-weight="700">
        <text x="74" y="384" text-anchor="middle" font-size="38" fill="${ORANGE}">淘宝</text>
        <text x="74" y="413" text-anchor="middle" font-size="21" fill="${ORANGE}">Taobao</text>
        <text x="74" y="458" text-anchor="middle" font-size="36" fill="#ff1636">TMALL</text>

        <g transform="translate(19 514) scale(.55)"><path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/><path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/><path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/></g>
        <text x="77" y="541" font-size="26" fill="#2a278f">Lazada</text>
        <text x="29" y="586" font-size="27" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="29" y="632" font-size="33" fill="#242424" font-weight="500">trendyol</text>

        <text x="32" y="721" font-size="28" fill="#2585c7">饿了么</text>
        <g transform="translate(76 735)"><rect width="48" height="48" rx="8" fill="#f6d83b"/><path d="M5 26 L41 8 27 43 21 30Z" fill="#39a9ff"/></g>
        <text x="20" y="866" font-size="37" fill="#0967f2">CAI</text><text x="20" y="900" font-size="37" fill="#0967f2">NIAO</text><text x="112" y="900" font-size="25" fill="#0967f2">菜鸟</text>
        <g transform="translate(18 1007) scale(.63)">${ICONS.alibabaCloud || ''}</g>
        <text x="26" y="1161" font-size="40" fill="#ff4081">YOU</text><text x="105" y="1161" font-size="40" fill="#2db7ea">KU</text>
        <text x="40" y="1272" font-size="29" fill="#ed1b2f">SUN ART</text>
        <g transform="translate(38 1287) scale(.76)">${ICONS.hema || ''}</g>
      </g>
    </g>`;

  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const line = (text, size = 38, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q1-fy25',
    name: 'Alibaba · Q1 FY25',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Jun. 2024',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 129, titleWeight: 800, titleTextLength: 2195,
      periodX: 2443, periodY: 270, periodNoteY: 313,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: '#5e5e5e', noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE }, hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: ORANGE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 37, note: 26, lineGap: 7 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations('in RMB'),
    layout: {
      scale: 1.1,
      nodes: {
        taobao_tmall: { x: 541, y: 371, width: 65, height: 125 },
        international_digital_commerce: { x: 541, y: 613, width: 65, height: 31 },
        local_services: { x: 541, y: 759, width: 65, height: 16 },
        cainiao: { x: 541, y: 895, width: 65, height: 28 },
        cloud: { x: 541, y: 1040, width: 65, height: 28 },
        digital_media: { x: 541, y: 1181, width: 65, height: 4 },
        all_others: { x: 541, y: 1298, width: 65, height: 51 },
        gross_revenue: { x: 882, y: 661, width: 64, height: 296 },
        revenue: { x: 1224, y: 711, width: 64, height: 272 },
        adjustments_unallocated: { x: 1224, y: 1085, width: 64, height: 22 },
        gross_profit: { x: 1572, y: 626, width: 64, height: 108 },
        cost_of_revenue: { x: 1576, y: 913, width: 64, height: 162 },
        operating_profit: { x: 1914, y: 536, width: 65, height: 38 },
        operating_expenses: { x: 1919, y: 799, width: 64, height: 67 },
        net_profit: { x: 2254, y: 414, width: 65, height: 25 },
        tax: { x: 2254, y: 682, width: 65, height: 10 },
        other: { x: 2254, y: 797, width: 65, height: 2 },
        sm: { x: 2254, y: 924, width: 65, height: 35 },
        product_development: { x: 2254, y: 1078, width: 65, height: 14 },
        ga: { x: 2254, y: 1215, width: 65, height: 12 },
        amortization_intangibles: { x: 2254, y: 1355, width: 65, height: 2 },
      },
      labels: {
        taobao_tmall: { blocks: [
          block(580, 288, 'middle', [line('$value'), line('(1%) Y/Y', 26, 400, NOTE)]),
          block(484, 377, 'end', [line('Taobao', 38, 800), line('and Tmall', 38, 800), line('43% adjusted margin', 26, 400, NOTE)]),
        ] },
        international_digital_commerce: { blocks: [
          block(580, 530, 'middle', [line('$value'), line('+32% Y/Y', 26, 400, NOTE)]),
          block(499, 542, 'end', [line('International', 37, 800), line('Digital Commerce', 37, 800), line('(13%) adjusted margin', 26, 400, NOTE)]),
        ] },
        local_services: { blocks: [
          block(580, 676, 'middle', [line('$value'), line('+12% Y/Y', 26, 400, NOTE)]),
          block(486, 694, 'end', [line('Local', 38, 800), line('Services', 38, 800), line('(2%) adjusted margin', 26, 400, NOTE)]),
        ] },
        cainiao: { blocks: [
          block(580, 812, 'middle', [line('$value'), line('+16% Y/Y', 26, 400, NOTE)]),
          block(492, 871, 'end', [line('Cainiao', 38, 800), line('2% adjusted margin', 26, 400, NOTE)]),
        ] },
        cloud: { blocks: [
          block(580, 957, 'middle', [line('$value'), line('+6% Y/Y', 26, 400, NOTE)]),
          block(493, 1015, 'end', [line('Cloud', 38, 800), line('9% adjusted margin', 26, 400, NOTE)]),
        ] },
        digital_media: { blocks: [
          block(574, 1092, 'middle', [line('$value'), line('+4% Y/Y', 26, 400, NOTE)]),
          block(492, 1151, 'end', [line('Digital Media', 38, 800), line('(2%) adjusted margin', 26, 400, NOTE)]),
        ] },
        all_others: { blocks: [
          block(580, 1215, 'middle', [line('$value'), line('+3% Y/Y', 26, 400, NOTE)]),
          block(492, 1279, 'end', [line('All others', 38, 800), line('(3%) adjusted margin', 26, 400, NOTE)]),
        ] },
        gross_revenue: { blocks: [] },
        revenue: { blocks: [block(1256, 572, 'middle', [line('Revenue', 38, 800), line('$value'), line('+4% Y/Y', 26, 400, NOTE)])] },
        adjustments_unallocated: { blocks: [block(1256, 1130, 'middle', [line('Adjustments', 36, 800), line('& unallocated', 36, 800), line('$value', 34)])] },
        gross_profit: { blocks: [block(1604, 452, 'middle', [line('Gross profit', 38, 800), line('$value'), line('40% margin', 26, 400, NOTE), line('+1pp Y/Y', 26, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1608, 1100, 'middle', [line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 34)])] },
        operating_profit: { blocks: [block(1946, 361, 'middle', [line('Operating profit', 37, 800), line('$value'), line('15% margin', 26, 400, NOTE), line('(3pp) Y/Y', 26, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1928, 891, 'middle', [line('Operating', 35, 800), line('expenses', 35, 800), line('$value', 34)])] },
        net_profit: { blocks: [block(2437, 387, 'middle', [line('Net profit', 38, 800), line('$value'), line('10% margin', 26, 400, NOTE), line('(4pp) Y/Y', 26, 400, NOTE)])] },
        tax: { blocks: [block(2326, 667, 'start', [line('Tax (10.1B)', 30, 800)])] },
        other: { blocks: [block(2326, 774, 'start', [line('Other (1.9B)', 30, 800)])] },
        sm: { blocks: [block(2326, 914, 'start', [line('Sales &', 30, 800), line('marketing (32.7B)', 30, 800)])] },
        product_development: { blocks: [block(2326, 1045, 'start', [line('Product', 30, 800), line('development (13.4B)', 30, 800)])] },
        ga: { blocks: [block(2326, 1185, 'start', [line('General &', 31, 800), line('Administrative (13.3B)', 31, 800)])] },
        amortization_intangibles: { blocks: [block(2331, 1315, 'start', [line('Amortization', 31, 800), line('of intangibles (1.8B)', 31, 800)])] },
      },
    },
    nodes: [
      { id: 'taobao_tmall', col: 0, order: 0, type: 'source', label: ['Taobao', 'and Tmall'], value: 113.4, valueText: '113.4B', notes: ['(1%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital Commerce'], value: 29.3, valueText: '29.3B', notes: ['+32% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'local_services', col: 0, order: 2, type: 'source', label: ['Local', 'Services'], value: 16.2, valueText: '16.2B', notes: ['+12% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 26.8, valueText: '26.8B', notes: ['+16% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 4, type: 'source', label: 'Cloud', value: 26.5, valueText: '26.5B', notes: ['+6% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 5.6, valueText: '5.6B', notes: ['+4% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 6, type: 'source', label: 'All others', value: 47.0, valueText: '47.0B', notes: ['+3% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 264.8, valueText: '264.8B', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 243.2, valueText: '243.2B', notes: ['+4% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'adjustments_unallocated', col: 2, order: 1, type: 'cost', label: ['Adjustments', '& unallocated'], value: -21.6, valueText: '(21.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 97.1, valueText: '97.1B', notes: ['40% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 146.1, valueText: '(146.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 36.0, valueText: '36.0B', notes: ['15% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 61.1, valueText: '(61.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 24.0, valueText: '24.0B', notes: ['10% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 10.1, valueText: '(10.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 1.9, valueText: '(1.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: ['Sales &', 'marketing'], value: 32.7, valueText: '(32.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 4, type: 'cost', label: ['Product', 'development'], value: 13.4, valueText: '(13.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: ['General &', 'Administrative'], value: 13.3, valueText: '(13.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 5, order: 6, type: 'cost', label: ['Amortization', 'of intangibles'], value: 1.8, valueText: '(1.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'taobao_tmall', target: 'gross_revenue', value: 113.4, sourceWidth: 125, targetWidth: 127, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 29.3, sourceWidth: 31, targetWidth: 33, targetOrder: 1 },
      { source: 'local_services', target: 'gross_revenue', value: 16.2, sourceWidth: 16, targetWidth: 18, targetOrder: 2 },
      { source: 'cainiao', target: 'gross_revenue', value: 26.8, sourceWidth: 28, targetWidth: 30, targetOrder: 3 },
      { source: 'cloud', target: 'gross_revenue', value: 26.5, sourceWidth: 28, targetWidth: 30, targetOrder: 4 },
      { source: 'digital_media', target: 'gross_revenue', value: 5.6, sourceWidth: 4, targetWidth: 6, targetOrder: 5 },
      { source: 'all_others', target: 'gross_revenue', value: 47.0, sourceWidth: 51, targetWidth: 52, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 243.2, sourceWidth: 272, targetWidth: 272, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'adjustments_unallocated', value: 21.6, sourceWidth: 24, targetWidth: 22, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 97.1, sourceWidth: 108, targetWidth: 108, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 146.1, sourceWidth: 164, targetWidth: 162, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 36.0, sourceWidth: 39, targetWidth: 38, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 61.1, sourceWidth: 69, targetWidth: 67, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 24.0, sourceWidth: 25, targetWidth: 25, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 10.1, sourceWidth: 11, targetWidth: 10, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 1.9, sourceWidth: 2, targetWidth: 2, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 32.7, sourceWidth: 36, targetWidth: 35, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 13.4, sourceWidth: 15, targetWidth: 14, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 13.3, sourceWidth: 14, targetWidth: 12, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 1.8, sourceWidth: 2, targetWidth: 2, sourceOrder: 3 },
    ],
    i18n: {
      preservedAnnotationText: ['Alibaba', 'Alibaba Cloud', 'Cloud', 'Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', 'CAINIAO', 'YOUKU', 'SUN ART'],
      zh: {
        name: 'Alibaba · 2025 财年第一季度',
        meta: { title: 'Alibaba 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2024 年 6 月' },
        annotationsSvg: annotations('单位：人民币'),
        nodes: {
          taobao_tmall: { label: '淘宝和天猫', notes: ['同比 (1%)'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +32%'] },
          local_services: { label: '本地生活服务', notes: ['同比 +12%'] },
          cainiao: { label: '菜鸟', notes: ['同比 +16%'] }, cloud: { label: '云', notes: ['同比 +6%'] },
          digital_media: { label: '数字媒体', notes: ['同比 +4%'] }, all_others: { label: '所有其他业务', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] }, adjustments_unallocated: { label: '调整及未分配项目' },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (3 个百分点)'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (4 个百分点)'] }, tax: { label: '税费' }, other: { label: '其他' },
          sm: { label: '销售与市场' }, product_development: { label: '产品开发' }, ga: { label: '一般及行政' }, amortization_intangibles: { label: '无形资产摊销' },
        },
        layout: {
          labels: {
            taobao_tmall: { blocks: [
              block(580, 288, 'middle', [line('$value'), line('同比 (1%)', 26, 400, NOTE)]),
              block(484, 377, 'end', [line('淘宝', 38, 800), line('和天猫', 38, 800), line('调整后利润率 43%', 26, 400, NOTE)]),
            ] },
            local_services: { blocks: [
              block(580, 676, 'middle', [line('$value'), line('同比 +12%', 26, 400, NOTE)]),
              block(486, 694, 'end', [line('本地生活', 38, 800), line('服务', 38, 800), line('调整后利润率 (2%)', 26, 400, NOTE)]),
            ] },
            cainiao: { blocks: [
              block(580, 812, 'middle', [line('$value'), line('同比 +16%', 26, 400, NOTE)]),
              block(492, 871, 'end', [line('菜鸟', 38, 800), line('调整后利润率 2%', 26, 400, NOTE)]),
            ] },
            international_digital_commerce: { blocks: [
              block(580, 530, 'middle', [line('$value'), line('同比 +32%', 26, 400, NOTE)]),
              block(499, 542, 'end', [line('国际', 37, 800), line('数字商业', 37, 800), line('调整后利润率 (13%)', 26, 400, NOTE)]),
            ] },
            digital_media: { blocks: [
              block(574, 1092, 'middle', [line('$value'), line('同比 +4%', 26, 400, NOTE)]),
              block(492, 1151, 'end', [line('数字媒体', 38, 800), line('调整后利润率 (2%)', 26, 400, NOTE)]),
            ] },
            adjustments_unallocated: { blocks: [
              block(1256, 1130, 'middle', [line('调整及', 36, 800), line('未分配项目', 36, 800), line('$value', 34)]),
            ] },
            amortization_intangibles: { blocks: [
              block(2331, 1315, 'start', [line('无形资产', 31, 800), line('摊销 (1.8B)', 31, 800)]),
            ] },
            ga: { blocks: [
              block(2326, 1185, 'start', [line('一般及', 31, 800), line('行政 (13.3B)', 31, 800)]),
            ] },
          },
        },
      },
    },
  });
})();

/* Alibaba Q4 FY23 income statement — source-bound fixed Sankey layout. */
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
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = (unitText, sourceText) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="260" y="284" text-anchor="middle" font-size="38" font-weight="800" fill="${TITLE}">${unitText}</text>
      <text x="170" y="1430" font-size="35" font-weight="800" fill="#000000">${sourceText}</text>
    </g>
    <g font-family="Arial,sans-serif" data-typography-role="brand">
      <g transform="translate(833 296) scale(.73)" fill="${ORANGE}">
        <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
        <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#ffffff"/>
        <text x="151" y="82" font-size="111" font-weight="700" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
      </g>
      <g font-weight="700">
        <text x="105" y="444" text-anchor="middle" font-size="34" fill="${ORANGE}">淘宝</text>
        <text x="105" y="470" text-anchor="middle" font-size="20" fill="${ORANGE}">Taobao</text>
        <text x="105" y="510" text-anchor="middle" font-size="35" fill="#ff1636">TMALL</text>
        <g transform="translate(60 516) scale(.55)">${BUSINESS_ICONS.hema || ''}</g>

        <g transform="translate(52 635) scale(.58)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="108" y="666" font-size="25" fill="#2a278f">Lazada</text>
        <text x="58" y="704" font-size="26" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="62" y="745" font-size="32" fill="#242424" font-weight="500">trendyol</text>

        <text x="62" y="815" font-size="26" fill="#1996d3">饿了么</text>
        <g transform="translate(75 827) scale(.3)">${BUSINESS_ICONS.amap || ''}</g>

        <text x="53" y="956" font-size="30" fill="#0068ff">CAI</text>
        <text x="53" y="986" font-size="30" fill="#0068ff">NIAO</text>
        <text x="128" y="986" font-size="22" fill="#0068ff">菜鸟</text>

        <g transform="translate(51 1062) scale(.53)">${BUSINESS_ICONS.alibabaCloud || ''}</g>
        <text x="53" y="1204" font-size="34" fill="#ff4081">YOU</text>
        <text x="124" y="1204" font-size="34" fill="#2db7ea">KU</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q4-fy23',
    name: 'Alibaba · Q4 FY23',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 2448,
      periodY: 273,
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
      type: { name: 37, value: 35, note: 26, lineGap: 7 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations('In RMB', 'Source: Quarterly results'),
    layout: {
      scale: 1.34,
      nodes: {
        china_commerce: { x: 573, y: 405, width: 64, height: 181 },
        international_commerce: { x: 573, y: 706, width: 64, height: 22 },
        local_consumer_services: { x: 573, y: 835, width: 64, height: 16 },
        cainiao: { x: 573, y: 956, width: 64, height: 16 },
        cloud: { x: 573, y: 1070, width: 64, height: 23 },
        digital_media: { x: 573, y: 1195, width: 64, height: 10 },
        other_revenue: { x: 573, y: 1306, width: 64, height: 1 },
        revenue: { x: 1086, y: 686, width: 64, height: 278 },
        gross_profit: { x: 1461, y: 619, width: 64, height: 91 },
        cost_of_revenue: { x: 1463, y: 848, width: 64, height: 185 },
        operating_profit: { x: 1861, y: 538, width: 64, height: 19 },
        operating_expenses: { x: 1861, y: 726, width: 64, height: 70 },
        other_income: { x: 2146, y: 401, width: 64, height: 3 },
        interest_investments: { x: 2146, y: 525, width: 64, height: 10 },
        net_profit: { x: 2263, y: 427, width: 64, height: 29 },
        tax: { x: 2263, y: 698, width: 64, height: 3 },
        product_development: { x: 2263, y: 859, width: 64, height: 31 },
        sm: { x: 2263, y: 975, width: 64, height: 16 },
        ga: { x: 2263, y: 1080, width: 64, height: 15 },
        amortization_intangibles: { x: 2258, y: 1196, width: 65, height: 1 },
      },
      labels: {
        china_commerce: { blocks: [
          { x: 605, top: 320, anchor: 'middle', lines: [{ text: '$value', size: 36, weight: 400 }, { text: '(3%) Y/Y', size: 26, weight: 400, color: NOTE }] },
          { x: 540, top: 455, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: 'China', size: 37, weight: 800 }, { text: 'commerce', size: 37, weight: 800 }] },
        ] },
        international_commerce: { blocks: [
          { x: 596, top: 622, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '+29% Y/Y', size: 26, weight: 400, color: NOTE }] },
          { x: 531, top: 657, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: 'International', size: 37, weight: 800 }, { text: 'commerce', size: 37, weight: 800 }] },
        ] },
        local_consumer_services: { blocks: [
          { x: 592, top: 747, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '+17% Y/Y', size: 26, weight: 400, color: NOTE }] },
          { x: 527, top: 779, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: 'Local consumer', size: 36, weight: 800 }, { text: 'services', size: 36, weight: 800 }] },
        ] },
        cainiao: { blocks: [
          { x: 605, top: 862, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '+18% Y/Y', size: 26, weight: 400, color: NOTE }] },
          { x: 540, top: 912, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: 'Cainiao', size: 36, weight: 800 }] },
        ] },
        cloud: { blocks: [
          { x: 605, top: 986, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '(2%) Y/Y', size: 26, weight: 400, color: NOTE }] },
          { x: 540, top: 1038, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: 'Cloud', size: 36, weight: 800 }] },
        ] },
        digital_media: { blocks: [
          { x: 605, top: 1112, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '+3% Y/Y', size: 26, weight: 400, color: NOTE }] },
          { x: 533, top: 1162, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: 'Digital Media', size: 36, weight: 800 }] },
        ] },
        other_revenue: { blocks: [
          { x: 605, top: 1218, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '+47% Y/Y', size: 26, weight: 400, color: NOTE }] },
          { x: 540, top: 1275, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: 'Other', size: 36, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 1118, top: 543, anchor: 'middle', lines: [{ text: 'Revenue', size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '+2% Y/Y', size: 26, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1493, top: 438, anchor: 'middle', lines: [{ text: 'Gross profit', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '33% margin', size: 26, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 26, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1495, top: 1056, anchor: 'middle', lines: [{ text: 'Cost of', size: 35, weight: 800 }, { text: 'revenue', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1893, top: 366, anchor: 'middle', lines: [{ text: 'Operating profit', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '7% margin', size: 26, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 26, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1893, top: 820, anchor: 'middle', lines: [{ text: 'Operating', size: 35, weight: 800 }, { text: 'expenses', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        other_income: { blocks: [{ x: 2178, top: 322, anchor: 'middle', lines: [{ text: 'Other', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
        interest_investments: { blocks: [{ x: 2178, top: 544, anchor: 'middle', lines: [{ text: 'Interest &', size: 29, weight: 800 }, { text: 'investments', size: 29, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2443, top: 423, anchor: 'middle', lines: [{ text: 'Net profit', size: 36, weight: 800 }, { text: '$value', size: 35, weight: 400 }, { text: '11% margin', size: 26, weight: 400, color: NOTE }, { text: '+20pp Y/Y', size: 26, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: 2340, top: 684, anchor: 'start', lines: [{ text: 'Tax (3.8B)', size: 30, weight: 800 }] }] },
        product_development: { blocks: [{ x: 2348, top: 837, anchor: 'start', lines: [{ text: 'Product', size: 30, weight: 800 }, { text: 'development (13.9B)', size: 29, weight: 800 }] }] },
        sm: { blocks: [{ x: 2340, top: 963, anchor: 'start', lines: [{ text: 'S&M (24.9B)', size: 30, weight: 800 }] }] },
        ga: { blocks: [{ x: 2340, top: 1067, anchor: 'start', lines: [{ text: 'G&A (12.8B)', size: 30, weight: 800 }] }] },
        amortization_intangibles: { blocks: [{ x: 2340, top: 1171, anchor: 'start', lines: [{ text: 'Amortization', size: 29, weight: 800 }, { text: 'of intangibles (2.5B)', size: 30.5, weight: 800 }] }] },
      },
    },
    nodes: [
      { id: 'china_commerce', col: 0, order: 0, type: 'source', label: ['China', 'commerce'], value: 136.1, valueText: '136.1B', notes: ['(3%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_commerce', col: 0, order: 1, type: 'source', label: ['International', 'commerce'], value: 18.5, valueText: '18.5B', notes: ['+29% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'local_consumer_services', col: 0, order: 2, type: 'source', label: ['Local consumer', 'services'], value: 12.5, valueText: '12.5B', notes: ['+17% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 13.6, valueText: '13.6B', notes: ['+18% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 4, type: 'source', label: 'Cloud', value: 18.6, valueText: '18.6B', notes: ['(2%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 8.3, valueText: '8.3B', notes: ['+3% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.6, valueText: '0.6B', notes: ['+47% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 208.2, valueText: '208.2B', notes: ['+2% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 69.4, valueText: '69.4B', notes: ['33% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 138.8, valueText: '(138.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 15.2, valueText: '15.2B', notes: ['7% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 54.1, valueText: '(54.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 1.8, valueText: '1.8B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest_investments', col: 4, order: 1, type: 'profit', label: ['Interest &', 'investments'], value: 8.8, valueText: '8.8B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 22.0, valueText: '22.0B', notes: ['11% margin', '+20pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 3.8, valueText: '(3.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 2, type: 'cost', label: ['Product', 'development'], value: 13.9, valueText: '(13.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 24.9, valueText: '(24.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 12.8, valueText: '(12.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 5, order: 5, type: 'cost', label: ['Amortization', 'of intangibles'], value: 2.5, valueText: '(2.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'china_commerce', target: 'revenue', value: 136.1, sourceWidth: 181, targetWidth: 181, targetOrder: 0 },
      { source: 'international_commerce', target: 'revenue', value: 18.5, sourceWidth: 22, targetWidth: 24, targetOrder: 1 },
      { source: 'local_consumer_services', target: 'revenue', value: 12.5, sourceWidth: 16, targetWidth: 17, targetOrder: 2 },
      { source: 'cainiao', target: 'revenue', value: 13.6, sourceWidth: 16, targetWidth: 18, targetOrder: 3 },
      { source: 'cloud', target: 'revenue', value: 18.6, sourceWidth: 23, targetWidth: 25, targetOrder: 4 },
      { source: 'digital_media', target: 'revenue', value: 8.3, sourceWidth: 10, targetWidth: 11, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 0.6, sourceWidth: 1, targetWidth: 2, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 69.4, sourceWidth: 93, targetWidth: 91, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 138.8, sourceWidth: 185, targetWidth: 185, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 15.2, sourceWidth: 19, targetWidth: 19, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 54.1, sourceWidth: 71, targetWidth: 70, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 11.4, sourceWidth: 16, targetWidth: 15, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 3.8, sourceWidth: 3, targetWidth: 3, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 1.8, sourceWidth: 3, targetWidth: 3, targetOrder: 0 },
      { source: 'interest_investments', target: 'net_profit', value: 8.8, sourceWidth: 10, targetWidth: 11, targetOrder: 2 },
      { source: 'operating_expenses', target: 'product_development', value: 13.9, sourceWidth: 18, targetWidth: 31, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 24.9, sourceWidth: 32, targetWidth: 16, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 12.8, sourceWidth: 16, targetWidth: 15, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 2.5, sourceWidth: 4, targetWidth: 1, sourceOrder: 3 },
    ],
    i18n: {
      preservedAnnotationText: ['Alibaba', 'Alibaba Cloud', '淘宝', 'Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', '饿了么', 'CAI', 'NIAO', '菜鸟', 'YOU', 'KU'],
      zh: {
        name: 'Alibaba · 2023 财年第四季度',
        meta: { title: 'Alibaba 2023 财年第四季度利润表', period: '2023 财年第四季度', periodNote: '截至 2023 年 3 月' },
        annotationsSvg: annotations('单位：人民币', '来源：季度业绩'),
        nodes: {
          china_commerce: { label: '中国商业', notes: ['同比 (3%)'] },
          international_commerce: { label: '国际商业', notes: ['同比 +29%'] },
          local_consumer_services: { label: '本地生活服务', notes: ['同比 +17%'] },
          cainiao: { label: '菜鸟', notes: ['同比 +18%'] },
          cloud: { label: '云业务', notes: ['同比 (2%)'] },
          digital_media: { label: '数字媒体', notes: ['同比 +3%'] },
          other_revenue: { label: '其他', notes: ['同比 +47%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 33%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收益' },
          interest_investments: { label: '利息及投资' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +20 个百分点'] },
          tax: { label: '税费' },
          product_development: { label: '产品开发' },
          sm: { label: '销售与市场' },
          ga: { label: '一般及行政' },
          amortization_intangibles: { label: '无形资产摊销' },
        },
        layout: { labels: {
          china_commerce: { blocks: [
            { x: 605, top: 320, anchor: 'middle', lines: [{ text: '$value', size: 36, weight: 400 }, { text: '同比 (3%)', size: 26, weight: 400, color: NOTE }] },
            { x: 540, top: 455, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: '中国', size: 37, weight: 800 }, { text: '商业', size: 37, weight: 800 }] },
          ] },
          international_commerce: { blocks: [
            { x: 596, top: 622, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '同比 +29%', size: 26, weight: 400, color: NOTE }] },
            { x: 531, top: 657, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: '国际', size: 37, weight: 800 }, { text: '商业', size: 37, weight: 800 }] },
          ] },
          local_consumer_services: { blocks: [
            { x: 592, top: 747, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '同比 +17%', size: 26, weight: 400, color: NOTE }] },
            { x: 527, top: 779, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: '本地生活', size: 36, weight: 800 }, { text: '服务', size: 36, weight: 800 }] },
          ] },
          cainiao: { blocks: [
            { x: 605, top: 862, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '同比 +18%', size: 26, weight: 400, color: NOTE }] },
            { x: 540, top: 912, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: '菜鸟', size: 36, weight: 800 }] },
          ] },
          cloud: { blocks: [
            { x: 605, top: 986, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '同比 (2%)', size: 26, weight: 400, color: NOTE }] },
            { x: 540, top: 1038, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: '云业务', size: 36, weight: 800 }] },
          ] },
          digital_media: { blocks: [
            { x: 605, top: 1112, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '同比 +3%', size: 26, weight: 400, color: NOTE }] },
            { x: 533, top: 1162, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: '数字媒体', size: 36, weight: 800 }] },
          ] },
          other_revenue: { blocks: [
            { x: 605, top: 1218, anchor: 'middle', lines: [{ text: '$value', size: 35, weight: 400 }, { text: '同比 +47%', size: 26, weight: 400, color: NOTE }] },
            { x: 540, top: 1275, anchor: 'end', semanticRole: 'source-offset-label', lines: [{ text: '其他', size: 36, weight: 800 }] },
          ] },
          revenue: { blocks: [{ x: 1118, top: 543, anchor: 'middle', lines: [{ text: '收入', size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '同比 +2%', size: 26, weight: 400, color: NOTE }] }] },
          gross_profit: { blocks: [{ x: 1493, top: 438, anchor: 'middle', lines: [{ text: '毛利润', size: 37, weight: 800 }, { text: '$value', size: 36, weight: 400 }, { text: '利润率 33%', size: 26, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 26, weight: 400, color: NOTE }] }] },
          cost_of_revenue: { blocks: [{ x: 1495, top: 1056, anchor: 'middle', lines: [{ text: '收入', size: 35, weight: 800 }, { text: '成本', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
          operating_profit: { blocks: [{ x: 1893, top: 366, anchor: 'middle', lines: [{ text: '营业利润', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }, { text: '利润率 7%', size: 26, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 26, weight: 400, color: NOTE }] }] },
          operating_expenses: { blocks: [{ x: 1893, top: 820, anchor: 'middle', lines: [{ text: '运营', size: 35, weight: 800 }, { text: '费用', size: 35, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
          other_income: { blocks: [{ x: 2178, top: 322, anchor: 'middle', lines: [{ text: '其他收益', size: 30, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
          interest_investments: { blocks: [{ x: 2178, top: 544, anchor: 'middle', lines: [{ text: '利息及', size: 29, weight: 800 }, { text: '投资收益', size: 29, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
          net_profit: { blocks: [{ x: 2443, top: 423, anchor: 'middle', lines: [{ text: '净利润', size: 36, weight: 800 }, { text: '$value', size: 35, weight: 400 }, { text: '利润率 11%', size: 26, weight: 400, color: NOTE }, { text: '同比 +20 个百分点', size: 26, weight: 400, color: NOTE }] }] },
          tax: { blocks: [{ x: 2340, top: 684, anchor: 'start', lines: [{ text: '税费 (3.8B)', size: 30, weight: 800 }] }] },
          product_development: { blocks: [{ x: 2348, top: 837, anchor: 'start', lines: [{ text: '产品', size: 30, weight: 800 }, { text: '开发 (13.9B)', size: 29, weight: 800 }] }] },
          sm: { blocks: [{ x: 2340, top: 963, anchor: 'start', lines: [{ text: '销售与市场 (24.9B)', size: 30, weight: 800 }] }] },
          ga: { blocks: [{ x: 2340, top: 1067, anchor: 'start', lines: [{ text: '一般及行政 (12.8B)', size: 30, weight: 800 }] }] },
          amortization_intangibles: { blocks: [{ x: 2340, top: 1171, anchor: 'start', lines: [{ text: '无形资产', size: 29, weight: 800 }, { text: '摊销 (2.5B)', size: 30.5, weight: 800 }] }] },
        } },
      },
    },
  });
})();

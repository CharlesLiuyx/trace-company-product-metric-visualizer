/* ====================================================================
 * Alibaba - Q2 FY23 income statement (RMB B)
 * Reconstructed from input/processed/alibaba-q2-fy23.png as a fixed
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
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="329" y="276" text-anchor="middle" font-family="Arial,sans-serif" font-size="38" font-weight="700" fill="#005392">In RMB</text>
      <g transform="translate(833 318) scale(0.65)" fill="${ORANGE}">
        <path d="M21 42 C48 3 123 -6 126 30 C129 64 77 85 33 80 C8 77 -7 63 4 49 C17 31 46 23 78 21 C49 27 29 36 21 50 C13 68 56 70 87 55 C110 42 117 24 101 17 C78 6 41 17 21 42 Z"/>
        <path d="M65 39 l31 -12 -8 21 -9 -7 c-16 9 -32 12 -49 10 15 -3 28 -7 41 -15 Z" fill="#ffffff"/>
        <text x="151" y="82" font-family="Arial,sans-serif" font-size="111" font-weight="700" textLength="512" lengthAdjust="spacingAndGlyphs">Alibaba</text>
      </g>
      <g font-family="Arial,sans-serif" font-weight="700">
        <text x="137" y="407" text-anchor="middle" font-size="38" fill="${ORANGE}">淘宝</text>
        <text x="137" y="435" text-anchor="middle" font-size="21" fill="${ORANGE}">Taobao</text>
        <text x="138" y="474" text-anchor="middle" font-size="36" fill="#ff1636">TMALL</text>
        <g transform="translate(92 486) scale(0.62)">${BUSINESS_ICONS.hema || ''}</g>

        <g transform="translate(74 574) scale(0.65)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="136" y="599" font-size="26" fill="#2a278f">Lazada</text>
        <text x="87" y="643" font-size="28" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="85" y="686" font-size="35" fill="#242424" font-weight="500">trendyol</text>
        <rect x="182" y="650" width="31" height="15" rx="3" fill="${ORANGE}"/>
        <text x="198" y="663" text-anchor="middle" font-size="11" fill="#ffffff">.com</text>

        <text x="87" y="760" font-size="34" fill="#1596d2">饿了么</text>
        <g transform="translate(105 768) scale(0.33)">${BUSINESS_ICONS.amap || ''}</g>
        <text x="70" y="928" font-size="30" fill="#0068ff">CAI</text>
        <text x="70" y="962" font-size="30" fill="#0068ff">NIAO</text>
        <text x="146" y="962" font-size="23" fill="#0068ff">菜鸟</text>
        <g transform="translate(69 1039) scale(0.65)">${BUSINESS_ICONS.alibabaCloud || ''}</g>
        <text x="74" y="1203" font-size="37" fill="#ff4081">YOU</text>
        <text x="152" y="1203" font-size="37" fill="#2db7ea">KU</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q2-fy23',
    name: 'Alibaba · Q2 FY23',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Sept. 2022',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 129,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 156,
      periodY: 1317,
      periodNoteY: 1360,
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
      scale: 1.028,
      nodes: {
        china_commerce: { x: 610, y: 398, width: 64, height: 138 },
        international_commerce: { x: 610, y: 656, width: 64, height: 15 },
        local_consumer_services: { x: 610, y: 794, width: 64, height: 13 },
        cainiao: { x: 610, y: 924, width: 64, height: 11 },
        cloud: { x: 610, y: 1058, width: 64, height: 19 },
        digital_media: { x: 610, y: 1197, width: 64, height: 6 },
        other_revenue: { x: 610, y: 1318, width: 64, height: 2 },
        revenue: { x: 1036, y: 694, width: 63, height: 213 },
        gross_profit: { x: 1427, y: 611, width: 64, height: 76 },
        cost_of_revenue: { x: 1431, y: 850, width: 64, height: 135 },
        operating_profit: { x: 1859, y: 543, width: 63, height: 24 },
        operating_expenses: { x: 1859, y: 722, width: 63, height: 52 },
        net_loss: { x: 2197, y: 440, width: 64, height: 21 },
        interest_investments: { x: 2293, y: 491, width: 64, height: 44 },
        tax: { x: 2293, y: 659, width: 64, height: 1 },
        other_expense: { x: 2293, y: 756, width: 64, height: 2 },
        product_development: { x: 2293, y: 878, width: 64, height: 21 },
        sales_general_admin: { x: 2293, y: 1038, width: 64, height: 13 },
        general_admin: { x: 2293, y: 1179, width: 64, height: 9 },
        amortization_intangibles: { x: 2293, y: 1318, width: 64, height: 2 },
      },
      labels: {
        china_commerce: { blocks: [
          { x: 642, top: 313, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(1%) Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 563, top: 423, anchor: 'end', lineGap: 8, lines: [
            { text: 'China', size: 38, weight: 800 },
            { text: 'commerce', size: 38, weight: 800 },
          ] },
        ] },
        international_commerce: { blocks: [
          { x: 635, top: 572, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+4% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 556, top: 596, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'International', size: 38, weight: 800 },
            { text: 'commerce', size: 38, weight: 800 },
          ] },
        ] },
        local_consumer_services: { blocks: [
          { x: 642, top: 709, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+21% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 563, top: 741, anchor: 'end', lineGap: 8, semanticRole: 'top-aligned-side-label', lines: [
            { text: 'Local consumer', size: 38, weight: 800 },
            { text: 'services', size: 38, weight: 800 },
          ] },
        ] },
        cainiao: { blocks: [
          { x: 642, top: 832, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+36% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 545, top: 896, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Cainiao', size: 38, weight: 800 }] },
        ] },
        cloud: { blocks: [
          { x: 649, top: 974, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+4% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 570, top: 1039, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Cloud', size: 38, weight: 800 }] },
        ] },
        digital_media: { blocks: [
          { x: 642, top: 1111, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '+4% Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 563, top: 1174, anchor: 'end', lines: [{ text: 'Digital Media', size: 38, weight: 800 }] },
        ] },
        other_revenue: { blocks: [
          { x: 642, top: 1222, anchor: 'middle', lineGap: 8, lines: [
            { text: '$value', size: 38, weight: 400 },
            { text: '(45%) Y/Y', size: 26, weight: 400, color: NOTE },
          ] },
          { x: 563, top: 1285, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: 'Other', size: 38, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 1068, top: 551, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Revenue', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
          { text: '+3% Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1459, top: 435, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Gross profit', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
          { text: '37% margin', size: 26, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1463, top: 1009, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'revenue', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1891, top: 369, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating profit', size: 37, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
          { text: '12% margin', size: 26, weight: 400, color: NOTE },
          { text: '+5pp Y/Y', size: 26, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1891, top: 798, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 36, weight: 800 },
          { text: 'expenses', size: 36, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        net_loss: { blocks: [{ x: 2230, top: 335, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Net loss', size: 37, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
        ] }] },
        interest_investments: { blocks: [{ x: 2386, top: 472, anchor: 'start', lineGap: 8, lines: [
          { text: 'Interest &', size: 31, weight: 800 },
          { text: 'investments', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }] },
        tax: { blocks: [{ x: 2439, top: 621, anchor: 'start', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }] },
        other_expense: { blocks: [{ x: 2435, top: 726, anchor: 'start', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }] },
        product_development: { blocks: [{ x: 2404, top: 852, anchor: 'start', lineGap: 8, lines: [
          { text: 'Product &', size: 31, weight: 800 },
          { text: 'development', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }] },
        sales_general_admin: { blocks: [{ x: 2404, top: 1004, anchor: 'start', lineGap: 8, lines: [
          { text: 'Sales, general', size: 31, weight: 800 },
          { text: '& admin', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }] },
        general_admin: { blocks: [{ x: 2430, top: 1139, anchor: 'start', lineGap: 8, lines: [
          { text: 'General &', size: 31, weight: 800 },
          { text: 'admin', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }] },
        amortization_intangibles: { blocks: [{ x: 2400, top: 1274, anchor: 'start', lineGap: 8, lines: [
          { text: 'Amortization', size: 31, weight: 800 },
          { text: 'of intangibles', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }] },
      },
    },

    nodes: [
      { id: 'china_commerce', col: 0, order: 0, type: 'source', label: ['China', 'commerce'], value: 135.4, valueText: '135.4B', notes: ['(1%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_commerce', col: 0, order: 1, type: 'source', label: ['International', 'commerce'], value: 15.7, valueText: '15.7B', notes: ['+4% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'local_consumer_services', col: 0, order: 2, type: 'source', label: ['Local consumer', 'services'], value: 13.1, valueText: '13.1B', notes: ['+21% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 13.4, valueText: '13.4B', notes: ['+36% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 4, type: 'source', label: 'Cloud', value: 20.8, valueText: '20.8B', notes: ['+4% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 8.4, valueText: '8.4B', notes: ['+4% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 0.4, valueText: '0.4B', notes: ['(45%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 207.2, valueText: '207.2B', notes: ['+3% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 76.0, valueText: '76.0B', notes: ['37% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 131.2, valueText: '(131.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 25.1, valueText: '25.1B', notes: ['12% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 50.8, valueText: '(50.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 4, order: 0, type: 'cost', label: 'Net loss', value: -22.5, valueText: '(22.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest_investments', col: 5, order: 0, type: 'cost', label: ['Interest &', 'investments'], value: 43.8, valueText: '(43.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.6, valueText: '(2.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 1.2, valueText: '(1.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 3, type: 'cost', label: ['Product &', 'development'], value: 15.2, valueText: '(15.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_general_admin', col: 5, order: 4, type: 'cost', label: ['Sales, general', '& admin'], value: 22.4, valueText: '(22.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 5, order: 5, type: 'cost', label: ['General &', 'admin'], value: 10.6, valueText: '(10.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 5, order: 6, type: 'cost', label: ['Amortization', 'of intangibles'], value: 2.7, valueText: '(2.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'china_commerce', target: 'revenue', value: 135.4, sourceWidth: 138, targetWidth: 139, targetOrder: 0 },
      { source: 'international_commerce', target: 'revenue', value: 15.7, sourceWidth: 15, targetWidth: 16, targetOrder: 1 },
      { source: 'local_consumer_services', target: 'revenue', value: 13.1, sourceWidth: 13, targetWidth: 13, targetOrder: 2 },
      { source: 'cainiao', target: 'revenue', value: 13.4, sourceWidth: 11, targetWidth: 14, targetOrder: 3 },
      { source: 'cloud', target: 'revenue', value: 20.8, sourceWidth: 19, targetWidth: 21, targetOrder: 4 },
      { source: 'digital_media', target: 'revenue', value: 8.4, sourceWidth: 6, targetWidth: 9, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 0.4, sourceWidth: 2, targetWidth: 1, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 76.0, sourceWidth: 77, targetWidth: 76, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 131.2, sourceWidth: 136, targetWidth: 135, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 25.1, width: 24, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 50.8, width: 52, sourceOrder: 1 },
      { source: 'operating_profit', target: 'interest_investments', value: 21.3, sourceWidth: 21, targetWidth: 23, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 2.6, sourceWidth: 2, targetWidth: 1, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 1.2, sourceWidth: 1, targetWidth: 2, sourceOrder: 2 },
      { source: 'net_loss', target: 'interest_investments', value: 22.5, sourceWidth: 21, targetWidth: 21, targetOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 15.2, sourceWidth: 16, targetWidth: 21, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sales_general_admin', value: 22.4, sourceWidth: 22, targetWidth: 13, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'general_admin', value: 10.6, sourceWidth: 11, targetWidth: 9, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 2.7, sourceWidth: 3, targetWidth: 2, sourceOrder: 3 },
    ],

    i18n: {
      preservedAnnotationText: ['In RMB', 'Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', 'YOUKU', 'CAINIAO'],
      zh: {
        name: 'Alibaba · 2023 财年第二季度',
        meta: {
          title: 'Alibaba 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2022 年 9 月',
          periodX: 170,
        },
        nodes: {
          china_commerce: { label: '中国商业', notes: ['同比 (1%)'] },
          international_commerce: { label: '国际商业', notes: ['同比 +4%'] },
          local_consumer_services: { label: '本地生活服务', notes: ['同比 +21%'] },
          cainiao: { label: '菜鸟', notes: ['同比 +36%'] },
          cloud: { label: '云业务', notes: ['同比 +4%'] },
          digital_media: { label: '数字媒体', notes: ['同比 +4%'] },
          other_revenue: { label: '其他', notes: ['同比 (45%)'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 37%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损' },
          interest_investments: { label: '利息及投资损失' },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          product_development: { label: '产品与研发' },
          sales_general_admin: { label: '销售、一般及行政' },
          general_admin: { label: '一般及行政' },
          amortization_intangibles: { label: '无形资产摊销' },
        },
        layout: {
          labels: {
            china_commerce: { blocks: [
              { x: 642, top: 313, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 (1%)', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 563, top: 443, anchor: 'end', lines: [{ text: '中国商业', size: 38, weight: 800 }] },
            ] },
            international_commerce: { blocks: [
              { x: 642, top: 572, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +4%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 563, top: 617, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: '国际商业', size: 38, weight: 800 }] },
            ] },
            local_consumer_services: { blocks: [
              { x: 642, top: 709, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +21%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 563, top: 761, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: '本地生活服务', size: 38, weight: 800 }] },
            ] },
            cainiao: { blocks: [
              { x: 642, top: 839, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +36%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 563, top: 903, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: '菜鸟', size: 38, weight: 800 }] },
            ] },
            cloud: { blocks: [
              { x: 649, top: 974, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +4%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 570, top: 1039, anchor: 'end', semanticRole: 'top-aligned-side-label', lines: [{ text: '云业务', size: 38, weight: 800 }] },
            ] },
            digital_media: { blocks: [
              { x: 642, top: 1111, anchor: 'middle', lineGap: 8, lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '同比 +4%', size: 26, weight: 400, color: NOTE },
              ] },
              { x: 563, top: 1174, anchor: 'end', lines: [{ text: '数字媒体', size: 38, weight: 800 }] },
            ] },
            net_loss: { blocks: [{ x: 2230, top: 335, anchor: 'middle', lineGap: 8, lines: [
              { text: '净亏损', size: 37, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ] }] },
            interest_investments: { blocks: [{ x: 2386, top: 493, anchor: 'start', lineGap: 8, lines: [
              { text: '利息及投资损失', size: 31, weight: 800 },
              { text: '$value', size: 31, weight: 400 },
            ] }] },
          },
        },
      },
    },
  });
})();

/* Alibaba Q1 FY26 income statement ($B), reconstructed from the native Source. */
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
      <g transform="translate(681 319)" fill="${ORANGE}">
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
        <g transform="translate(5 950) scale(0.65)">${BUSINESS_ICONS.alibabaCloud || ''}</g>
        <g transform="translate(18 1056) scale(0.82)">${BUSINESS_ICONS.hema || ''}</g>
        <text x="14" y="1150" font-size="37" fill="#ff4081">YOU</text>
        <text x="92" y="1150" font-size="37" fill="#2db7ea">KU</text>
        <text x="14" y="1195" font-size="30" fill="#0068ff">CAI</text>
        <text x="14" y="1229" font-size="30" fill="#0068ff">NIAO</text>
        <text x="90" y="1229" font-size="23" fill="#0068ff">菜鸟</text>
        <g transform="translate(57 1240) scale(0.27)">${BUSINESS_ICONS.amap || ''}</g>
      </g>
    </g>`;

  const block = (x, top, anchor, lines) => ({ x, top, anchor, lineGap: 8, lines });
  const name = (text, size = 38) => ({ text, size, weight: 800 });
  const value = (size = 37) => ({ text: '$value', size, weight: 400 });
  const note = (text, size = 26) => ({ text, size, weight: 400, color: NOTE });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q1-fy26',
    name: 'Alibaba · Q1 FY26',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending June 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q1-fy26.png', width: 2667, height: 1500 },
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
      scale: 7,
      nodes: {
        china_ecommerce: { x: 458, y: 437, width: 68, height: 136 },
        international_digital_commerce: { x: 458, y: 770, width: 68, height: 33 },
        cloud: { x: 458, y: 980, width: 68, height: 31 },
        all_others: { x: 458, y: 1171, width: 68, height: 56 },
        gross_revenue: { x: 810, y: 593, width: 66, height: 261 },
        revenue: { x: 1171, y: 669, width: 66, height: 242 },
        intersegment_eliminations: { x: 1171, y: 1035, width: 66, height: 18 },
        gross_profit: { x: 1524, y: 593, width: 67, height: 107 },
        cost_of_revenue: { x: 1527, y: 875, width: 66, height: 133 },
        operating_profit: { x: 1888, y: 521, width: 66, height: 34 },
        operating_expenses: { x: 1883, y: 705, width: 67, height: 73 },
        interest: { x: 2131, y: 389, width: 67, height: 12 },
        other: { x: 2133, y: 508, width: 67, height: 4 },
        net_profit: { x: 2238, y: 415, width: 68, height: 40 },
        tax: { x: 2238, y: 650, width: 68, height: 7 },
        sm: { x: 2238, y: 809, width: 68, height: 50 },
        product_development: { x: 2238, y: 972, width: 68, height: 12 },
        ga: { x: 2238, y: 1127, width: 68, height: 5 },
        amortization_intangibles: { x: 2238, y: 1255, width: 68, height: 1 },
      },
      labels: {
        china_ecommerce: { blocks: [
          block(473, 346, 'middle', [value(38), note('+10% Y/Y')]),
          block(431, 462, 'end', [name('China'), name('E-commerce'), note('27% adjusted margin')]),
        ] },
        international_digital_commerce: { blocks: [
          block(474, 688, 'middle', [value(38), note('+19% Y/Y')]),
          block(415, 721, 'end', [name('International'), name('Digital'), name('Commerce'), note('0% adjusted margin')]),
        ] },
        cloud: { blocks: [
          block(520, 876, 'middle', [value(38), note('+26% Y/Y')]),
          block(458, 955, 'end', [name('Cloud'), note('9% adjusted margin')]),
        ] },
        all_others: { blocks: [
          block(484, 1080, 'middle', [value(38), note('(28%) Y/Y')]),
          block(422, 1182, 'end', [name('All others'), note('(2%) adjusted margin')]),
        ] },
        gross_revenue: { blocks: [] },
        revenue: { blocks: [block(1204, 528, 'middle', [name('Revenue'), value(), note('+2% Y/Y')])] },
        intersegment_eliminations: { blocks: [block(1204, 1079, 'middle', [
          name('Inter-segment', 35), name('Eliminations', 35), value(34),
        ])] },
        gross_profit: { blocks: [block(1558, 360, 'middle', [
          name('Gross', 37), name('profit', 37), value(), note('45% margin'), note('+5pp Y/Y'),
        ])] },
        cost_of_revenue: { blocks: [block(1560, 1030, 'middle', [
          name('Cost of', 36), name('revenue', 36), value(34),
        ])] },
        operating_profit: { blocks: [block(1921, 300, 'middle', [
          name('Operating', 36), name('profit', 36), value(34), note('14% margin'), note('(1pp) Y/Y'),
        ])] },
        operating_expenses: { blocks: [block(1917, 800, 'middle', [
          name('Operating', 35), name('expenses', 35), value(33),
        ])] },
        interest: { blocks: [block(2164, 299, 'middle', [name('Interest', 32), value(30)])] },
        other: { blocks: [block(2170, 529, 'middle', [name('Other', 32), value(30)])] },
        net_profit: { blocks: [block(2425, 378, 'middle', [
          name('Net profit', 37), value(36), note('17% margin'), note('+7pp Y/Y'),
        ])] },
        tax: { blocks: [block(2337, 640, 'start', [name('Tax ($1.2B)', 30)])] },
        sm: { blocks: [block(2324, 791, 'start', [
          name('Sales &', 31), name('marketing ($7.4B)', 31), note('21% of revenue'),
        ])] },
        product_development: { blocks: [block(2325, 971, 'start', [
          name('Product', 30), name('development ($2.1B)', 29), note('6% of revenue'),
        ])] },
        ga: { blocks: [block(2325, 1113, 'start', [
          name('General &', 30), name('Administrative ($1.0B)', 29), note('3% of revenue'),
        ])] },
        amortization_intangibles: { blocks: [block(2323, 1228, 'start', [
          name('Amortization', 30), name('of intangibles ($0.1B)', 29), note('0% of revenue'),
        ])] },
      },
    },
    nodes: [
      { id: 'china_ecommerce', col: 0, order: 0, type: 'source', label: ['China', 'E-commerce'], value: 19.6, valueText: '$19.6B', notes: ['+10% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital', 'Commerce'], value: 4.9, valueText: '$4.9B', notes: ['+19% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 2, type: 'source', label: 'Cloud', value: 4.7, valueText: '$4.7B', notes: ['+26% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 3, type: 'source', label: 'All others', value: 8.3, valueText: '$8.3B', notes: ['(28%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 37.5, valueText: '$37.5B', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 34.6, valueText: '$34.6B', notes: ['+2% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost', label: ['Inter-segment', 'Eliminations'], value: -2.7, valueText: '($2.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 15.5, valueText: '$15.5B', notes: ['45% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.0, valueText: '($19.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.9, valueText: '$4.9B', notes: ['14% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 10.6, valueText: '($10.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 2.1, valueText: '$2.1B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.2, valueText: '$0.2B', color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 5.9, valueText: '$5.9B', notes: ['17% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 1.2, valueText: '($1.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 7.4, valueText: '($7.4B)', notes: ['21% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 6, order: 3, type: 'cost', label: ['Product', 'development'], value: 2.1, valueText: '($2.1B)', notes: ['6% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: ['General &', 'Administrative'], value: 1.0, valueText: '($1.0B)', notes: ['3% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 6, order: 5, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.1, valueText: '($0.1B)', notes: ['0% of revenue'], color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'china_ecommerce', target: 'gross_revenue', value: 19.6, sourceWidth: 136, targetWidth: 136, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 4.9, sourceWidth: 33, targetWidth: 34, targetOrder: 1 },
      { source: 'cloud', target: 'gross_revenue', value: 4.7, sourceWidth: 31, targetWidth: 33, targetOrder: 2 },
      { source: 'all_others', target: 'gross_revenue', value: 8.3, sourceWidth: 56, targetWidth: 58, targetOrder: 3 },
      { source: 'gross_revenue', target: 'revenue', value: 34.6, width: 242, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 2.7, sourceWidth: 18, targetWidth: 18, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 15.5, sourceWidth: 109, targetWidth: 107, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 19.0, sourceWidth: 132, targetWidth: 133, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.9, sourceWidth: 34, targetWidth: 34, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 10.6, width: 73, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.7, sourceWidth: 26, targetWidth: 24, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 1.2, sourceWidth: 8, targetWidth: 7, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 2.1, sourceWidth: 12, targetWidth: 13, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.2, sourceWidth: 4, targetWidth: 3, targetOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 7.4, sourceWidth: 51, targetWidth: 50, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 2.1, sourceWidth: 14, targetWidth: 12, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.0, sourceWidth: 7, targetWidth: 5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 3 },
    ],
    i18n: {
      preservedAnnotationText: ['Taobao', 'Lazada', 'AliExpress', 'trendyol'],
      zh: {
        name: 'Alibaba · 2026 财年第一季度',
        meta: {
          title: 'Alibaba 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 6 月',
        },
        nodes: {
          china_ecommerce: { label: '中国电子商务', notes: ['同比 +10%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +19%'] },
          cloud: { label: '云', notes: ['同比 +26%'] },
          all_others: { label: '所有其他业务', notes: ['同比 (28%)'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息收入' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 21%'] },
          product_development: { label: '产品开发', notes: ['占收入 6%'] },
          ga: { label: '一般及行政', notes: ['占收入 3%'] },
          amortization_intangibles: { label: '无形资产摊销', notes: ['占收入 0%'] },
        },
        layout: {
          labels: {
            cost_of_revenue: { blocks: [block(1560, 1030, 'middle', [name('收入', 36), name('成本', 36), value(34)])] },
          },
        },
      },
    },
  });
})();

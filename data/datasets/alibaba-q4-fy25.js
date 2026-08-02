/* ====================================================================
 * Alibaba - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/alibaba-q4-fy25.png as a fixed
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
  const RIGHT_LABEL_X = 2334;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const sourceLabel = ({ amountX = 571, amountTop, nameX = 520, nameTop, nameLines, nameSize = 38, change, margin, marginSize = 26 }) => ({
    blocks: [
      {
        x: amountX, top: amountTop, anchor: 'middle', lineGap: 7,
        lines: [
          { text: '$value', size: 31, weight: 400 },
          { text: change, size: 21, weight: 400, color: NOTE },
        ],
      },
      {
        x: nameX, top: nameTop, anchor: 'end', lineGap: 8,
        lines: [
          ...nameLines.map((text) => ({ text, size: nameSize, weight: 800 })),
          { text: margin, size: marginSize, weight: 400, color: NOTE },
        ],
      },
    ],
  });

  const centeredLabel = ({ x, top, lines }) => ({
    blocks: [{ x, top, anchor: 'middle', lineGap: 8, lines }],
  });

  const sideLabel = ({ top, lines }) => ({
    blocks: [{ x: RIGHT_LABEL_X, top, anchor: 'start', lineGap: 7, lines }],
  });

  const annotations = `
    <g data-typography-role="brand" font-family="Arial,sans-serif" font-weight="700">
      <g transform="translate(720 244) scale(0.90)" fill="${ORANGE}">
        <path d="M24 47 C52 4 137 -7 139 34 C141 72 84 95 36 89 C10 86 -8 70 4 54 C18 35 50 25 86 23 C54 29 32 40 24 55 C15 76 63 78 96 61 C122 47 130 27 112 19 C86 6 45 19 24 47 Z"/>
        <path d="M72 43 l34 -13 -8 23 -10 -8 c-18 10 -36 14 -54 11 16 -3 31 -7 45 -16 Z" fill="#ffffff"/>
        <text x="168" y="92" font-size="108" font-weight="700">Alibaba</text>
      </g>

      <g transform="translate(44 387.5)" fill="${ORANGE}"
         data-annotation-clearance="taobao-tmall-brand-cluster"
         data-annotation-pair="asset:taobao-tmall-brand-cluster"
         data-annotation-paired-node="taobao_tmall" data-annotation-paired-target="label" data-annotation-paired-side="left">
        <text x="0" y="28" font-size="31">淘宝</text>
        <text x="3" y="52" font-size="18">Taobao</text>
        <text x="0" y="89" font-size="29" fill="#ff1645">TMALL</text>
      </g>

      <g transform="translate(15 568)"
         data-annotation-clearance="international-commerce-brand-cluster"
         data-annotation-pair="asset:international-commerce-brand-cluster"
         data-annotation-paired-node="international_digital_commerce" data-annotation-paired-target="label" data-annotation-paired-side="left">
        <g transform="translate(0 0) scale(0.58)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="44" y="29" font-size="22" fill="#2a278f">Lazada</text>
        <text x="0" y="70" font-size="23" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="0" y="111" font-size="28" fill="#242424" font-weight="500">trendyol</text>
      </g>

      <g transform="translate(9 765.96) scale(0.58)"
         data-annotation-clearance="alibaba-cloud-brand-cluster"
         data-annotation-pair="asset:alibaba-cloud-brand-cluster"
         data-annotation-paired-node="cloud" data-annotation-paired-target="label" data-annotation-paired-side="left">${BUSINESS_ICONS.alibabaCloud || ''}</g>

      <g transform="translate(18 884)" fill="#1688d4"
         data-annotation-clearance="cainiao-brand-cluster"
         data-annotation-pair="asset:cainiao-brand-cluster"
         data-annotation-paired-node="cainiao" data-annotation-paired-target="label" data-annotation-paired-side="left">
        <text x="0" y="28" font-size="25">CAINIAO 菜鸟</text>
      </g>

      <g transform="translate(18 992.24)" fill="#1688d4"
         data-annotation-clearance="local-services-brand-cluster"
         data-annotation-pair="asset:local-services-brand-cluster"
         data-annotation-paired-node="local_services" data-annotation-paired-target="label" data-annotation-paired-side="left">
        <text x="0" y="26" font-size="22">饿了么</text>
        <g transform="translate(92 -4) scale(0.22)">${BUSINESS_ICONS.amap || ''}</g>
      </g>

      <g transform="translate(18 1128.5)"
         data-annotation-clearance="digital-media-brand-cluster"
         data-annotation-pair="asset:digital-media-brand-cluster"
         data-annotation-paired-node="digital_media" data-annotation-paired-target="label" data-annotation-paired-side="left">
        <text x="0" y="30" font-size="31" fill="#ff4081">YOU</text>
        <text x="64" y="30" font-size="31" fill="#2db7ea">KU</text>
      </g>

      <g transform="translate(18 1248.05)"
         data-annotation-clearance="all-others-brand-cluster"
         data-annotation-pair="asset:all-others-brand-cluster"
         data-annotation-paired-node="all_others" data-annotation-paired-target="label" data-annotation-paired-side="left">
        <text x="0" y="28" font-size="24" fill="#ed1b2e">SUN ART</text>
        <g transform="translate(44 38) scale(0.55)">${BUSINESS_ICONS.hema || ''}</g>
      </g>
    </g>`;
  const labels = {
    taobao_tmall: sourceLabel({
      amountTop: 285, nameTop: 371, marginSize: 31,
      nameLines: ['Taobao', 'and Tmall'], change: '+9% Y/Y', margin: '41% adjusted margin',
    }),
    international_digital_commerce: sourceLabel({
      amountTop: 535, nameTop: 564, nameSize: 40,
      nameLines: ['International', 'Digital Commerce'], change: '+22% Y/Y', margin: '(11%) adjusted margin',
    }),
    cloud: sourceLabel({
      amountTop: 677, nameTop: 741, marginSize: 30,
      nameLines: ['Cloud'], change: '+18% Y/Y', margin: '8% adjusted margin',
    }),
    cainiao: sourceLabel({
      amountTop: 818, nameTop: 863, marginSize: 30,
      nameLines: ['Cainiao'], change: '(12%) Y/Y', margin: '(3%) adjusted margin',
    }),
    local_services: sourceLabel({
      amountTop: 939, nameTop: 983, marginSize: 30,
      nameLines: ['Local Services'], change: '+10% Y/Y', margin: '(14%) adjusted margin',
    }),
    digital_media: sourceLabel({
      amountTop: 1059, nameX: 519, nameTop: 1109, marginSize: 28,
      nameLines: ['Digital Media'], change: '+12% Y/Y', margin: '1% adjusted margin',
    }),
    all_others: sourceLabel({
      amountTop: 1195, nameTop: 1249, marginSize: 30,
      nameLines: ['All others'], change: '+5% Y/Y', margin: '(5%) adjusted margin',
    }),
    gross_revenue: { blocks: [] },
    revenue: centeredLabel({
      x: 1259, top: 511,
      lines: [
        { text: 'Revenue', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
        { text: '+7% Y/Y', size: 26, weight: 400, color: NOTE },
      ],
    }),
    intersegment_eliminations: centeredLabel({
      x: 1223, top: 1123,
      lines: [
        { text: 'Inter-segment', size: 35, weight: 800 },
        { text: 'Eliminations', size: 35, weight: 800 },
        { text: '$value', size: 34, weight: 400 },
      ],
    }),
    gross_profit: centeredLabel({
      x: 1603, top: 402,
      lines: [
        { text: 'Gross profit', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
        { text: '38% margin', size: 26, weight: 400, color: NOTE },
        { text: '+5pp Y/Y', size: 26, weight: 400, color: NOTE },
      ],
    }),
    cost_of_revenue: centeredLabel({
      x: 1603, top: 1048,
      lines: [
        { text: 'Cost of', size: 36, weight: 800 },
        { text: 'revenue', size: 36, weight: 800 },
        { text: '$value', size: 34, weight: 400 },
      ],
    }),
    operating_profit: centeredLabel({
      x: 1948, top: 344,
      lines: [
        { text: 'Operating profit', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
        { text: '12% margin', size: 26, weight: 400, color: NOTE },
        { text: '+5pp Y/Y', size: 26, weight: 400, color: NOTE },
      ],
    }),
    operating_expenses: centeredLabel({
      x: 1949, top: 803,
      lines: [
        { text: 'Operating', size: 35, weight: 800 },
        { text: 'expenses', size: 35, weight: 800 },
        { text: '$value', size: 33, weight: 400 },
      ],
    }),
    net_profit: centeredLabel({
      x: 2436, top: 364,
      lines: [
        { text: 'Net profit', size: 38, weight: 800 },
        { text: '$value', size: 37, weight: 400 },
        { text: '5% margin', size: 26, weight: 400, color: NOTE },
        { text: '+5pp Y/Y', size: 26, weight: 400, color: NOTE },
      ],
    }),
    other: sideLabel({
      top: 591,
      lines: [{ text: 'Other ($1.3B)', size: 30, weight: 800 }],
    }),
    tax: sideLabel({
      top: 699,
      lines: [{ text: 'Tax ($0.9B)', size: 30, weight: 800 }],
    }),
    sm: sideLabel({
      top: 807,
      lines: [
        { text: 'Sales &', size: 31, weight: 800 },
        { text: 'marketing ($5.0B)', size: 31, weight: 800 },
        { text: '15% of revenue', size: 26, weight: 400, color: NOTE },
      ],
    }),
    product_development: sideLabel({
      top: 941,
      lines: [
        { text: 'Product', size: 30, weight: 800 },
        { text: 'development ($2.1B)', size: 31, weight: 800 },
        { text: '6% of revenue', size: 26, weight: 400, color: NOTE },
      ],
    }),
    ga: sideLabel({
      top: 1068,
      lines: [
        { text: 'General &', size: 30, weight: 800 },
        { text: 'Administrative ($1.4B)', size: 29, weight: 800 },
        { text: '4% of revenue', size: 26, weight: 400, color: NOTE },
      ],
    }),
    amortization_intangibles: sideLabel({
      top: 1188,
      lines: [
        { text: 'Amortization', size: 30, weight: 800 },
        { text: 'of intangibles ($0.1B)', size: 29, weight: 800 },
        { text: '0% of revenue', size: 26, weight: 400, color: NOTE },
      ],
    }),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q4-fy25',
    name: 'Alibaba · Q4 FY25',
    company: 'Alibaba',
    meta: {
      company: 'Alibaba',
      title: 'Alibaba Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 2190,
      periodX: 2440,
      periodY: 205,
      periodNoteY: 244,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
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
      type: { name: 31, value: 30, note: 21, lineGap: 7 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 9.2,
      nodes: {
        taobao_tmall: { x: 538, y: 353, width: 67, height: 131 },
        international_digital_commerce: { x: 538, y: 603, width: 67, height: 44 },
        cloud: { x: 538, y: 748, width: 67, height: 38 },
        cainiao: { x: 538, y: 886, width: 67, height: 27 },
        local_services: { x: 538, y: 1027, width: 67, height: 20 },
        digital_media: { x: 538, y: 1148, width: 67, height: 6 },
        all_others: { x: 538, y: 1265, width: 67, height: 70 },
        gross_revenue: { x: 880, y: 584, width: 66, height: 338 },
        revenue: { x: 1226, y: 656, width: 66, height: 304 },
        intersegment_eliminations: { x: 1220, y: 1071, width: 66, height: 33 },
        gross_profit: { x: 1570, y: 576, width: 66, height: 118 },
        cost_of_revenue: { x: 1570, y: 839, width: 66, height: 188 },
        operating_profit: { x: 1914, y: 515, width: 67, height: 37 },
        operating_expenses: { x: 1916, y: 690, width: 67, height: 80 },
        net_profit: { x: 2257, y: 439, width: 68, height: 16 },
        other: { x: 2257, y: 604, width: 68, height: 12 },
        tax: { x: 2257, y: 712, width: 68, height: 9 },
        sm: { x: 2257, y: 821, width: 68, height: 47 },
        product_development: { x: 2257, y: 967, width: 68, height: 20 },
        ga: { x: 2257, y: 1104, width: 68, height: 14 },
        amortization_intangibles: { x: 2258, y: 1255, width: 66, height: 2 },
      },
      labels,
    },
    nodes: [
      { id: 'taobao_tmall', col: 0, order: 0, type: 'source', label: ['Taobao', 'and Tmall'], value: 14.0, valueText: '$14.0B', notes: ['+9% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'international_digital_commerce', col: 0, order: 1, type: 'source', label: ['International', 'Digital Commerce'], value: 4.6, valueText: '$4.6B', notes: ['+22% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cloud', col: 0, order: 2, type: 'source', label: 'Cloud', value: 4.2, valueText: '$4.2B', notes: ['+18% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'cainiao', col: 0, order: 3, type: 'source', label: 'Cainiao', value: 3.0, valueText: '$3.0B', notes: ['(12%) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'local_services', col: 0, order: 4, type: 'source', label: 'Local Services', value: 2.2, valueText: '$2.2B', notes: ['+10% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'digital_media', col: 0, order: 5, type: 'source', label: 'Digital Media', value: 0.8, valueText: '$0.8B', notes: ['+12% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'all_others', col: 0, order: 6, type: 'source', label: 'All others', value: 7.4, valueText: '$7.4B', notes: ['+5% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gross_revenue', col: 1, order: 0, type: 'source', label: '', value: 36.2, valueText: '$36.2B', color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 32.6, valueText: '$32.6B', notes: ['+7% Y/Y'], color: ORANGE, labelColor: ORANGE },
      { id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost', label: ['Inter-segment', 'Eliminations'], value: -3.6, valueText: '($3.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.5, valueText: '$12.5B', notes: ['38% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 20.1, valueText: '($20.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.9, valueText: '$3.9B', notes: ['12% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 8.6, valueText: '($8.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.7, valueText: '$1.7B', notes: ['5% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 1.3, valueText: '($1.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.9, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: ['Sales &', 'marketing'], value: 5.0, valueText: '($5.0B)', notes: ['15% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_development', col: 5, order: 4, type: 'cost', label: ['Product', 'development'], value: 2.1, valueText: '($2.1B)', notes: ['6% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: ['General &', 'Administrative'], value: 1.4, valueText: '($1.4B)', notes: ['4% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization_intangibles', col: 5, order: 6, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.1, valueText: '($0.1B)', notes: ['0% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'taobao_tmall', target: 'gross_revenue', value: 14.0, width: 131, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 4.6, width: 44, targetOrder: 1 },
      { source: 'cloud', target: 'gross_revenue', value: 4.2, width: 38, targetOrder: 2 },
      { source: 'cainiao', target: 'gross_revenue', value: 3.0, width: 27, targetOrder: 3 },
      { source: 'local_services', target: 'gross_revenue', value: 2.2, width: 20, targetOrder: 4 },
      { source: 'digital_media', target: 'gross_revenue', value: 0.8, width: 6, targetOrder: 5 },
      { source: 'all_others', target: 'gross_revenue', value: 7.4, width: 70, targetOrder: 6 },
      { source: 'gross_revenue', target: 'revenue', value: 32.6, width: 304, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 3.6, width: 33, sourceOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 12.5, width: 118, sourceWidth: 117, targetWidth: 118, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 20.1, width: 188, sourceWidth: 187, targetWidth: 188, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.9, width: 37, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.6, width: 80, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, width: 16, sourceOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 1.3, width: 12, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.9, width: 9, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 5.0, width: 47, sourceWidth: 46.5, targetWidth: 47, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 2.1, width: 20, sourceWidth: 19.5, targetWidth: 20, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.4, width: 14, sourceWidth: 13, targetWidth: 14, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_intangibles', value: 0.1, width: 2, sourceWidth: 1, targetWidth: 2, sourceOrder: 3 },
    ],
    i18n: {
      preservedAnnotationText: ['Alibaba', '淘宝', 'Taobao', 'TMALL', 'Lazada', 'AliExpress', 'trendyol', 'Alibaba Cloud', 'CAINIAO 菜鸟', '饿了么', 'YOU', 'KU', 'SUN ART'],
      zh: {
        name: 'Alibaba · 2025 财年第四季度',
        meta: {
          title: 'Alibaba 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 3 月',
          titleTextLength: 1900,
        },
        annotationsSvg: annotations,
        nodes: {
          taobao_tmall: { label: '淘宝与天猫', notes: ['同比 +9%'] },
          international_digital_commerce: { label: '国际数字商业', notes: ['同比 +22%'] },
          cloud: { label: '云', notes: ['同比 +18%'] },
          cainiao: { label: '菜鸟', notes: ['同比 (12%)'] },
          local_services: { label: '本地生活服务', notes: ['同比 +10%'] },
          digital_media: { label: '数字媒体', notes: ['同比 +12%'] },
          all_others: { label: '所有其他业务', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 38%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +5 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 15%'] },
          product_development: { label: '产品开发', notes: ['占收入 6%'] },
          ga: { label: '一般及行政', notes: ['占收入 4%'] },
          amortization_intangibles: { label: '无形资产摊销', notes: ['占收入 0%'] },
        },
        layout: {
          labels: {
            taobao_tmall: sourceLabel({ amountTop: 285, nameTop: 394, marginSize: 31, nameLines: ['淘宝与天猫'], change: '同比 +9%', margin: '调整后利润率 41%' }),
            international_digital_commerce: sourceLabel({ amountTop: 535, nameTop: 588, nameSize: 40, nameLines: ['国际数字商业'], change: '同比 +22%', margin: '调整后利润率 (11%)' }),
            cloud: sourceLabel({ amountTop: 677, nameTop: 741, marginSize: 30, nameLines: ['云'], change: '同比 +18%', margin: '调整后利润率 8%' }),
            cainiao: sourceLabel({ amountTop: 818, nameTop: 863, marginSize: 30, nameLines: ['菜鸟'], change: '同比 (12%)', margin: '调整后利润率 (3%)' }),
            local_services: sourceLabel({ amountTop: 939, nameTop: 983, marginSize: 30, nameLines: ['本地生活服务'], change: '同比 +10%', margin: '调整后利润率 (14%)' }),
            digital_media: sourceLabel({ amountTop: 1059, nameX: 519, nameTop: 1109, marginSize: 28, nameLines: ['数字媒体'], change: '同比 +12%', margin: '调整后利润率 1%' }),
            all_others: sourceLabel({ amountTop: 1195, nameTop: 1249, marginSize: 30, nameLines: ['所有其他业务'], change: '同比 +5%', margin: '调整后利润率 (5%)' }),
            revenue: centeredLabel({ x: 1259, top: 511, lines: [{ text: '收入', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '同比 +7%', size: 21, weight: 400, color: NOTE }] }),
            intersegment_eliminations: centeredLabel({ x: 1223, top: 1123, lines: [{ text: '分部间', size: 29, weight: 800 }, { text: '抵销', size: 29, weight: 800 }, { text: '$value', size: 28, weight: 400 }] }),
            gross_profit: centeredLabel({ x: 1603, top: 402, lines: [{ text: '毛利润', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '利润率 38%', size: 21, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 21, weight: 400, color: NOTE }] }),
            cost_of_revenue: centeredLabel({ x: 1603, top: 1048, lines: [{ text: '收入', size: 30, weight: 800 }, { text: '成本', size: 30, weight: 800 }, { text: '$value', size: 28, weight: 400 }] }),
            operating_profit: centeredLabel({ x: 1948, top: 344, lines: [{ text: '营业利润', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '利润率 12%', size: 21, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 21, weight: 400, color: NOTE }] }),
            operating_expenses: centeredLabel({ x: 1949, top: 803, lines: [{ text: '运营', size: 29, weight: 800 }, { text: '费用', size: 29, weight: 800 }, { text: '$value', size: 28, weight: 400 }] }),
            net_profit: centeredLabel({ x: 2436, top: 364, lines: [{ text: '净利润', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }, { text: '利润率 5%', size: 21, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 21, weight: 400, color: NOTE }] }),
            other: sideLabel({ top: 591, lines: [{ text: '其他（$1.3B）', size: 27, weight: 800 }] }),
            tax: sideLabel({ top: 699, lines: [{ text: '税费（$0.9B）', size: 27, weight: 800 }] }),
            sm: sideLabel({ top: 807, lines: [{ text: '销售与市场', size: 27, weight: 800 }, { text: '($5.0B)', size: 27, weight: 800 }, { text: '占收入 15%', size: 21, weight: 400, color: NOTE }] }),
            product_development: sideLabel({ top: 941, lines: [{ text: '产品', size: 26, weight: 800 }, { text: '开发 ($2.1B)', size: 31, weight: 800 }, { text: '占收入 6%', size: 21, weight: 400, color: NOTE }] }),
            ga: sideLabel({ top: 1068, lines: [{ text: '一般及', size: 26, weight: 800 }, { text: '行政 ($1.4B)', size: 25, weight: 800 }, { text: '占收入 4%', size: 21, weight: 400, color: NOTE }] }),
            amortization_intangibles: sideLabel({ top: 1188, lines: [{ text: '无形资产摊销（$0.1B）', size: 25, weight: 800 }, { text: '占收入 0%', size: 21, weight: 400, color: NOTE }] }),
          },
        },
      },
    },
  });
})();

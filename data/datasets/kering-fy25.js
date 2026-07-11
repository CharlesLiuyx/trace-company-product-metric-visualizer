/* ====================================================================
 * Kering - FY25 income statement (€B)
 * Reconstructed from input/processed/kering-fy25.png as a measured,
 * fixed-layout d3-sankey adapter. Brand marks are vector text; publisher
 * attribution is intentionally excluded.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const TEAL = '#2e6065';
  const SOURCE_LINK = '#9dafb3';
  const GREEN = '#28a329';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#d40000';
  const RED_LABEL = '#981500';
  const RED_LINK = '#df7f7f';
  const NOTE = '#666666';
  const RIGHT_X = 2454;

  const brandMarks = `
    <g fill="#111111" data-typography-role="brand">
      <text x="986" y="382" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
        font-size="82" font-weight="400" letter-spacing="24">KERING</text>
      <g fill="none" stroke="#111111" stroke-width="3">
        <path d="M974 408 C930 383 906 397 931 421 C949 438 967 439 986 429"/>
        <path d="M998 408 C1042 383 1066 397 1041 421 C1023 438 1005 439 986 429"/>
        <path d="M986 427 C969 446 974 468 986 488 C998 468 1003 446 986 427 Z"/>
        <circle cx="986" cy="413" r="17"/><circle cx="986" cy="413" r="7"/>
      </g>
      <text x="220" y="510" text-anchor="middle" font-family="Georgia,serif"
        font-size="66" letter-spacing="8">GUCCI</text>
      <text x="220" y="755" text-anchor="middle" font-family="Arial,sans-serif"
        font-size="52" font-weight="800">SAINT LAURENT</text>
      <text x="220" y="914" text-anchor="middle" font-family="Georgia,serif"
        font-size="44">BOTTEGA VENETA</text>
    </g>`;

  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const metric = (name, value, notes, color, sizes = {}) => [
    { text: name, size: sizes.name || 40, weight: 800, color },
    { text: value, size: sizes.value || 39, weight: 400, color },
    ...notes.map((text) => ({ text, size: sizes.note || 28, weight: 400, color: NOTE })),
  ];

  const labels = (L) => ({
    gucci: { blocks: [block(483, 316, [
      { text: '$value', size: 40, weight: 400, color: TEAL },
      { text: L.gucciYoy, size: 28, weight: 400, color: NOTE },
    ])] },
    saint_laurent: { blocks: [block(483, 610, [
      { text: '$value', size: 40, weight: 400, color: TEAL },
      { text: L.saintYoy, size: 28, weight: 400, color: NOTE },
    ])] },
    bottega_veneta: { blocks: [block(483, 778, [
      { text: '$value', size: 40, weight: 400, color: TEAL },
      { text: L.bottegaYoy, size: 28, weight: 400, color: NOTE },
    ])] },
    other_houses: { blocks: [
      block(483, 933, [
        { text: '$value', size: 40, weight: 400, color: TEAL },
        { text: L.otherHousesYoy, size: 28, weight: 400, color: NOTE },
      ]),
      block(392, 1036, [{ text: L.otherHouses, size: 39, weight: 800, color: TEAL }], 'end'),
    ] },
    eyewear_corporate: { blocks: [
      block(483, 1109, [
        { text: '$value', size: 40, weight: 400, color: TEAL },
        { text: L.eyewearYoy, size: 28, weight: 400, color: NOTE },
      ]),
      block(392, 1187, [
        { text: L.eyewear1, size: 36, weight: 800, color: TEAL },
        { text: L.eyewear2, size: 36, weight: 800, color: TEAL },
      ], 'end'),
    ] },
    revenue: { blocks: [block(1231, 535, metric(L.revenue, '$value', [L.revenueYoy], TEAL))] },
    segment_hub: { blocks: [] },
    eliminations: { blocks: [block(1231, 1219, [
      { text: L.eliminations, size: 34, weight: 800, color: RED_LABEL },
      { text: L.eliminationsValue, size: 34, weight: 400, color: RED_LABEL },
    ])] },
    gross_profit: { blocks: [block(1603, 406, metric(L.grossProfit, '$value', [L.grossMargin, L.grossYoy], GREEN_LABEL))] },
    cost_of_sales: { blocks: [block(1603, 1182, [
      { text: L.costOfSales, size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ])] },
    operating_profit: { blocks: [block(1978, 314, metric(L.operatingProfit, '$value', [L.operatingMargin, L.operatingYoy], GREEN_LABEL))] },
    operating_expenses: { blocks: [block(1978, 995, [
      { text: L.opex1, size: 35, weight: 800, color: RED_LABEL },
      { text: L.opex2, size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 34, weight: 400, color: RED_LABEL },
    ])] },
    net_profit: { blocks: [block(2445, 372, metric(L.netProfit, L.netValue, [L.netMargin, L.netYoy], GREEN_LABEL), 'start')] },
    other: { blocks: [block(RIGHT_X, 588, [
      { text: L.other, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
    ], 'start')] },
    tax: { blocks: [block(RIGHT_X, 710, [
      { text: L.tax, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
    ], 'start')] },
    other_opex: { blocks: [block(RIGHT_X, 862, [
      { text: L.otherOpex, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
      { text: L.otherOpexMargin, size: 28, weight: 400, color: NOTE },
      { text: L.otherOpexYoy, size: 28, weight: 400, color: NOTE },
    ], 'start')] },
    personnel_expenses: { blocks: [block(RIGHT_X, 1132, [
      { text: L.personnel1, size: 32, weight: 800, color: RED_LABEL },
      { text: L.personnel2, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
      { text: L.personnelMargin, size: 28, weight: 400, color: NOTE },
      { text: L.personnelYoy, size: 28, weight: 400, color: NOTE },
    ], 'start')] },
  });

  const labelsEn = labels({
    gucciYoy: '(22%) Y/Y', saintYoy: '(8%) Y/Y', bottegaYoy: '(0%) Y/Y',
    otherHouses: 'Other Houses', otherHousesYoy: '(10%) Y/Y',
    eyewear1: 'Kering Eyewear', eyewear2: '& Corporate', eyewearYoy: '+1% Y/Y',
    revenue: 'Revenue', revenueYoy: '(13%) Y/Y', eliminations: 'Eliminations', eliminationsValue: '($0.2B)',
    grossProfit: 'Gross profit', grossMargin: '73% of revenue', grossYoy: '(1pp) Y/Y', costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '11% of revenue', operatingYoy: '(3pp) Y/Y',
    opex1: 'Operating', opex2: 'expenses', netProfit: 'Net profit', netValue: '€39M', netMargin: '0% of revenue', netYoy: '(6pp) Y/Y',
    other: 'Other', tax: 'Tax', otherOpex: 'Other opex', otherOpexMargin: '43% of revenue', otherOpexYoy: '+1pp Y/Y',
    personnel1: 'Personnel', personnel2: 'expenses', personnelMargin: '19% of revenue', personnelYoy: '+1pp Y/Y',
  });

  const labelsZh = labels({
    gucciYoy: '同比 (22%)', saintYoy: '同比 (8%)', bottegaYoy: '同比 (0%)',
    otherHouses: '其他品牌', otherHousesYoy: '同比 (10%)',
    eyewear1: '开云眼镜', eyewear2: '及公司业务', eyewearYoy: '同比 +1%',
    revenue: '收入', revenueYoy: '同比 (13%)', eliminations: '抵销项', eliminationsValue: '($0.2B)',
    grossProfit: '毛利润', grossMargin: '占收入 73%', grossYoy: '同比 (1 个百分点)', costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '占收入 11%', operatingYoy: '同比 (3 个百分点)',
    opex1: '营业', opex2: '费用', netProfit: '净利润', netValue: '€39M', netMargin: '占收入 0%', netYoy: '同比 (6 个百分点)',
    other: '其他', tax: '税费', otherOpex: '其他运营费用', otherOpexMargin: '占收入 43%', otherOpexYoy: '同比 +1 个百分点',
    personnel1: '人员', personnel2: '费用', personnelMargin: '占收入 19%', personnelYoy: '同比 +1 个百分点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'kering-fy25',
    name: 'Kering · FY25',
    company: 'Kering',
    meta: {
      company: 'Kering',
      title: 'Kering FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/kering-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 197,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: TEAL, label: TEAL },
        hub: { node: TEAL, label: TEAL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: brandMarks,
    layout: {
      scale: 26.5,
      nodes: {
        gucci: { x: 447, y: 408, width: 73, height: 162 },
        saint_laurent: { x: 447, y: 698, width: 73, height: 73 },
        bottega_veneta: { x: 447, y: 873, width: 73, height: 47 },
        other_houses: { x: 447, y: 1021, width: 73, height: 78 },
        eyewear_corporate: { x: 447, y: 1197, width: 73, height: 43 },
        segment_hub: { x: 820, y: 585, width: 73, height: 401 },
        revenue: { x: 1194, y: 675, width: 73, height: 399 },
        eliminations: { x: 1194, y: 1196, width: 73, height: 4 },
        gross_profit: { x: 1567, y: 585, width: 73, height: 286 },
        cost_of_sales: { x: 1567, y: 1063, width: 73, height: 109 },
        operating_profit: { x: 1941, y: 494, width: 73, height: 43 },
        operating_expenses: { x: 1941, y: 731, width: 73, height: 245 },
        net_profit: { x: 2317, y: 422, width: 73, height: 2 },
        other: { x: 2317, y: 608, width: 73, height: 34 },
        tax: { x: 2317, y: 743, width: 73, height: 11 },
        other_opex: { x: 2317, y: 863, width: 73, height: 169 },
        personnel_expenses: { x: 2317, y: 1154, width: 73, height: 76 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'gucci', col: 0, order: 0, type: 'source', label: 'Gucci', value: 6.0, valueText: '€6.0B', notes: ['(22%) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: SOURCE_LINK },
      { id: 'saint_laurent', col: 0, order: 1, type: 'source', label: 'Saint Laurent', value: 2.6, valueText: '€2.6B', notes: ['(8%) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: SOURCE_LINK },
      { id: 'bottega_veneta', col: 0, order: 2, type: 'source', label: 'Bottega Veneta', value: 1.7, valueText: '€1.7B', notes: ['(0%) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: SOURCE_LINK },
      { id: 'other_houses', col: 0, order: 3, type: 'source', label: 'Other Houses', value: 2.9, valueText: '€2.9B', notes: ['(10%) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: SOURCE_LINK },
      { id: 'eyewear_corporate', col: 0, order: 4, type: 'source', label: ['Kering Eyewear', '& Corporate'], value: 1.6, valueText: '€1.6B', notes: ['+1% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: SOURCE_LINK },
      { id: 'segment_hub', col: 1, order: 0, type: 'hub', label: '', value: 14.8, color: TEAL, labelColor: TEAL, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 14.7, valueText: '€14.7B', notes: ['(13%) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: SOURCE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.7, valueText: '€10.7B', notes: ['73% of revenue', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 4.0, valueText: '(€4.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, valueText: '€1.6B', notes: ['11% of revenue', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 9.0, valueText: '(€9.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.039, valueText: '€39M', notes: ['0% of revenue', '(6pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 1.2, valueText: '(€1.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.4, valueText: '(€0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 3, type: 'cost', label: 'Other opex', value: 6.3, valueText: '(€6.3B)', notes: ['43% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'personnel_expenses', col: 5, order: 4, type: 'cost', label: ['Personnel', 'expenses'], value: 2.8, valueText: '(€2.8B)', notes: ['19% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'gucci', target: 'segment_hub', value: 6.0, sourceWidth: 162, targetWidth: 162, y0: 489, y1: 666, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'saint_laurent', target: 'segment_hub', value: 2.6, sourceWidth: 73, targetWidth: 72, y0: 734.5, y1: 783, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'bottega_veneta', target: 'segment_hub', value: 1.7, sourceWidth: 47, targetWidth: 48, y0: 896.5, y1: 843, sourceOrder: 0, targetOrder: 2, linkTint: SOURCE_LINK },
      { source: 'other_houses', target: 'segment_hub', value: 2.9, sourceWidth: 78, targetWidth: 78, y0: 1060, y1: 906, sourceOrder: 0, targetOrder: 3, linkTint: SOURCE_LINK },
      { source: 'eyewear_corporate', target: 'segment_hub', value: 1.6, sourceWidth: 43, targetWidth: 41, y0: 1218.5, y1: 965.5, sourceOrder: 0, targetOrder: 4, linkTint: SOURCE_LINK },
      { source: 'segment_hub', target: 'revenue', value: 14.7, sourceWidth: 397, targetWidth: 398, y0: 783.5, y1: 875, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'segment_hub', target: 'eliminations', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 984, y1: 1198, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 10.7, sourceWidth: 289, targetWidth: 286, y0: 819.5, y1: 728, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 4.0, sourceWidth: 110, targetWidth: 109, y0: 1019, y1: 1117.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 43, targetWidth: 43, y0: 606.5, y1: 515.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 9.1, sourceWidth: 243, targetWidth: 245, y0: 749.5, y1: 853.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.039, sourceWidth: 2, targetWidth: 2, y0: 495, y1: 423, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 1.2, sourceWidth: 32, targetWidth: 34, y0: 512, y1: 625, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 9, targetWidth: 11, y0: 532.5, y1: 748.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 6.3, sourceWidth: 169, targetWidth: 169, y0: 815.5, y1: 947.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'personnel_expenses', value: 2.8, sourceWidth: 76, targetWidth: 76, y0: 938, y1: 1192, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '开云集团 · 2025 财年',
        meta: { title: '开云集团 2025 财年利润表', titleTextLength: 1750 },
        annotationsSvg: brandMarks,
        nodes: {
          gucci: { label: 'Gucci', notes: ['同比 (22%)'] },
          saint_laurent: { label: 'Saint Laurent', notes: ['同比 (8%)'] },
          bottega_veneta: { label: 'Bottega Veneta', notes: ['同比 (0%)'] },
          other_houses: { label: '其他品牌', notes: ['同比 (10%)'] },
          eyewear_corporate: { label: ['开云眼镜', '及公司业务'], notes: ['同比 +1%'] },
          segment_hub: { label: '' },
          revenue: { label: '收入', notes: ['同比 (13%)'] },
          eliminations: { label: '抵销项' },
          gross_profit: { label: '毛利润', notes: ['占收入 73%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['占收入 11%', '同比 (3 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['占收入 0%', '同比 (6 个百分点)'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          other_opex: { label: '其他运营费用', notes: ['占收入 43%', '同比 +1 个百分点'] },
          personnel_expenses: { label: ['人员', '费用'], notes: ['占收入 19%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

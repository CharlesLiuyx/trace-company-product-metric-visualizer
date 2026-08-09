/* ====================================================================
 * Kering - H1 FY26 income statement (€B)
 * Reconstructed from input/processed/kering-h1-fy26.png as a measured,
 * fixed-layout d3-sankey adapter. Publisher attribution is excluded.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const TEAL = '#2d575e';
  const SOURCE_LINK = '#99abaf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_X = 2523;

  const brandMarks = `
    <g data-typography-role="brand">
      <g fill="#000000">
        <text x="1004" y="382" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
          font-size="82" font-weight="400" letter-spacing="24" textLength="598" lengthAdjust="spacingAndGlyphs">KERING</text>
        <g fill="none" stroke="#000000" stroke-width="3"
          transform="translate(996 423) scale(1.35 0.9) translate(-986 -393)">
          <path d="M974 408 C930 383 906 397 931 421 C949 438 967 439 986 429"/>
          <path d="M998 408 C1042 383 1066 397 1041 421 C1023 438 1005 439 986 429"/>
          <path d="M986 427 C969 446 974 468 986 488 C998 468 1003 446 986 427 Z"/>
          <circle cx="986" cy="413" r="17"/><circle cx="986" cy="413" r="7"/>
        </g>
      </g>
      <text x="224" y="641" text-anchor="middle" fill="#201600" font-family="Georgia,serif"
        font-size="51" letter-spacing="8" textLength="246" lengthAdjust="spacingAndGlyphs">GUCCI</text>
      <text x="231" y="714" text-anchor="middle" fill="#000000" font-family="Arial,sans-serif"
        font-size="39" font-weight="800">SAINT LAURENT</text>
      <text x="230" y="782" text-anchor="middle" fill="#000000" font-family="Georgia,serif"
        font-size="35">BOTTEGA VENETA</text>
    </g>`;

  const block = (x, top, lines, anchor = 'middle', lineGap = 8, semanticRole) => ({
    x, top, anchor, lineGap, lines, ...(semanticRole ? { semanticRole } : {}),
  });
  const metric = (name, value, notes, color, sizes = {}) => [
    { text: name, size: sizes.name || 40, weight: 800, color },
    { text: value, size: sizes.value || 39, weight: 400, color },
    ...notes.map((text) => ({ text, size: sizes.note || 28, weight: 400, color: NOTE })),
  ];

  const labels = (L) => ({
    fashion_leather_goods: { blocks: [
      block(483, 370, [
        { text: '$value', size: 40, weight: 400, color: TEAL },
        { text: L.fashionYoy, size: 28, weight: 400, color: NOTE },
      ]),
      block(392, 473, [
        { text: L.fashion1, size: 37, weight: 800, color: TEAL, textLength: 347 },
        { text: L.fashion2, size: 37, weight: 800, color: TEAL },
      ], 'end', 8, 'top-aligned-side-label'),
    ] },
    kering_jewelry: { blocks: [
      block(483, 849, [
        { text: '$value', size: 40, weight: 400, color: TEAL },
        { text: L.jewelryYoy, size: 28, weight: 400, color: NOTE },
      ]),
      block(370, 935, [{ text: L.jewelry, size: 37, weight: 800, color: TEAL }], 'end'),
    ] },
    kering_eyewear: { blocks: [
      block(483, 998, [
        { text: '$value', size: 40, weight: 400, color: TEAL },
        { text: L.eyewearYoy, size: 28, weight: 400, color: NOTE },
      ]),
      block(369, 1096, [{ text: L.eyewear, size: 37, weight: 800, color: TEAL }], 'end'),
    ] },
    corporate_other: { blocks: [
      block(483, 1172, [
        { text: '$value', size: 40, weight: 400, color: TEAL },
        { text: L.corporateYoy, size: 28, weight: 400, color: NOTE },
      ]),
      block(345, 1223, [
        { text: L.corporate1, size: 37, weight: 800, color: TEAL },
        { text: L.corporate2, size: 37, weight: 800, color: TEAL },
      ], 'end'),
    ] },
    segment_hub: { blocks: [] },
    revenue: { blocks: [block(1231, 527, metric(L.revenue, '$value', [L.revenueYoy], TEAL))] },
    eliminations: { blocks: [block(1231, 1240, [
      { text: L.eliminations, size: 34, weight: 800, color: RED_LABEL },
      { text: L.eliminationsValue, size: 34, weight: 400, color: RED_LABEL },
    ])] },
    gross_profit: { blocks: [block(1603, 377, metric(L.grossProfit, '$value', [L.grossMargin, L.grossYoy], GREEN_LABEL))] },
    cost_of_sales: { blocks: [block(1603, 1176, [
      { text: L.costOfSales, size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 35, weight: 400, color: RED_LABEL },
    ])] },
    operating_profit: { blocks: [block(1978, 297, metric(L.operatingProfit, '$value', [L.operatingMargin, L.operatingYoy], GREEN_LABEL))] },
    operating_expenses: { blocks: [block(1978, 973, [
      { text: L.opex1, size: 35, weight: 800, color: RED_LABEL },
      { text: L.opex2, size: 35, weight: 800, color: RED_LABEL },
      { text: '$value', size: 34, weight: 400, color: RED_LABEL },
    ])] },
    net_profit: { blocks: [block(RIGHT_X, 340, metric(L.netProfit, '$value', [L.netMargin, L.netYoy], GREEN_LABEL))] },
    other_nonoperating: { blocks: [block(RIGHT_X, 570, [
      { text: L.other, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
    ])] },
    tax: { blocks: [block(RIGHT_X, 695, [
      { text: L.tax, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
    ])] },
    other_opex: { blocks: [block(RIGHT_X, 846, [
      { text: L.otherOpex, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
      { text: L.otherOpexMargin, size: 28, weight: 400, color: NOTE },
      { text: L.otherOpexYoy, size: 28, weight: 400, color: NOTE },
    ])] },
    personnel_expenses: { blocks: [block(RIGHT_X, 1030, [
      { text: L.personnel1, size: 32, weight: 800, color: RED_LABEL },
      { text: L.personnel2, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
      { text: L.personnelMargin, size: 28, weight: 400, color: NOTE },
      { text: L.personnelYoy, size: 28, weight: 400, color: NOTE },
    ])] },
    other_operating: { blocks: [block(RIGHT_X, 1244, [
      { text: L.other, size: 32, weight: 800, color: RED_LABEL },
      { text: '$value', size: 32, weight: 400, color: RED_LABEL },
      { text: L.otherOperatingMargin, size: 28, weight: 400, color: NOTE },
      { text: L.otherOperatingYoy, size: 28, weight: 400, color: NOTE },
    ])] },
  });

  const labelsEn = labels({
    fashion1: 'Fashion & Leather', fashion2: 'Goods', fashionYoy: '(5%) Y/Y',
    jewelry: 'Kering Jewelry', jewelryYoy: '+14% Y/Y',
    eyewear: 'Kering Eyewear', eyewearYoy: '+5% Y/Y',
    corporate1: 'Corporate &', corporate2: 'Other', corporateYoy: '(7%) Y/Y',
    revenue: 'Revenue', revenueYoy: '(3%) Y/Y', eliminations: 'Eliminations', eliminationsValue: '($0.1B)',
    grossProfit: 'Gross profit', grossMargin: '72% of revenue', grossYoy: '(1pp) Y/Y', costOfSales: 'Cost of sales',
    operatingProfit: 'Operating profit', operatingMargin: '10% of revenue', operatingYoy: '(3pp) Y/Y',
    opex1: 'Operating', opex2: 'expenses', netProfit: 'Net profit', netMargin: '3% of revenue', netYoy: '(4pp) Y/Y',
    other: 'Other', tax: 'Tax', otherOpex: 'Other opex', otherOpexMargin: '41% of revenue', otherOpexYoy: '(1pp) Y/Y',
    personnel1: 'Personnel', personnel2: 'expenses', personnelMargin: '18% of revenue', personnelYoy: '(1pp) Y/Y',
    otherOperatingMargin: '3% of revenue', otherOperatingYoy: '+3pp Y/Y',
  });

  const labelsZh = labels({
    fashion1: '时装与皮具', fashion2: '业务', fashionYoy: '同比 (5%)',
    jewelry: '开云珠宝', jewelryYoy: '同比 +14%',
    eyewear: '开云眼镜', eyewearYoy: '同比 +5%',
    corporate1: '公司业务', corporate2: '及其他', corporateYoy: '同比 (7%)',
    revenue: '收入', revenueYoy: '同比 (3%)', eliminations: '抵销项', eliminationsValue: '($0.1B)',
    grossProfit: '毛利润', grossMargin: '占收入 72%', grossYoy: '同比 (1 个百分点)', costOfSales: '销售成本',
    operatingProfit: '营业利润', operatingMargin: '占收入 10%', operatingYoy: '同比 (3 个百分点)',
    opex1: '营业', opex2: '费用', netProfit: '净利润', netMargin: '占收入 3%', netYoy: '同比 (4 个百分点)',
    other: '其他', tax: '税费', otherOpex: '其他运营费用', otherOpexMargin: '占收入 41%', otherOpexYoy: '同比 (1 个百分点)',
    personnel1: '人员', personnel2: '费用', personnelMargin: '占收入 18%', personnelYoy: '同比 (1 个百分点)',
    otherOperatingMargin: '占收入 3%', otherOperatingYoy: '同比 +3 个百分点',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'kering-h1-fy26',
    name: 'Kering · H1 FY26',
    company: 'Kering',
    meta: {
      company: 'Kering',
      title: 'Kering H1 FY26 Income Statement',
      period: 'H1 FY26',
      periodNote: 'Ending June 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/kering-h1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 197,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2150,
      hidePeriodStamp: true,
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
      scale: 55,
      nodes: {
        fashion_leather_goods: { x: 447, y: 461, width: 73, height: 320 },
        kering_jewelry: { x: 447, y: 940, width: 73, height: 28 },
        kering_eyewear: { x: 447, y: 1089, width: 73, height: 53 },
        corporate_other: { x: 447, y: 1264, width: 73, height: 1 },
        segment_hub: { x: 820, y: 555, width: 73, height: 408 },
        revenue: { x: 1194, y: 663, width: 73, height: 400 },
        eliminations: { x: 1194, y: 1218, width: 73, height: 6 },
        gross_profit: { x: 1567, y: 556, width: 73, height: 287 },
        cost_of_sales: { x: 1567, y: 1048, width: 73, height: 114 },
        operating_profit: { x: 1941, y: 481, width: 73, height: 41 },
        operating_expenses: { x: 1941, y: 704, width: 73, height: 248 },
        net_profit: { x: 2315, y: 393, width: 73, height: 11 },
        other_nonoperating: { x: 2315, y: 605, width: 73, height: 17 },
        tax: { x: 2315, y: 732, width: 73, height: 11 },
        other_opex: { x: 2315, y: 840, width: 73, height: 163 },
        personnel_expenses: { x: 2315, y: 1094, width: 73, height: 75 },
        other_operating: { x: 2315, y: 1282, width: 73, height: 12 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'fashion_leather_goods', col: 0, order: 0, type: 'source', label: ['Fashion & Leather', 'Goods'], value: 5.8, valueText: '€5.8B', notes: ['(5%) Y/Y'] },
      { id: 'kering_jewelry', col: 0, order: 1, type: 'source', label: 'Kering Jewelry', value: 0.5, valueText: '€0.5B', notes: ['+14% Y/Y'] },
      { id: 'kering_eyewear', col: 0, order: 2, type: 'source', label: 'Kering Eyewear', value: 1.0, valueText: '€1.0B', notes: ['+5% Y/Y'] },
      { id: 'corporate_other', col: 0, order: 3, type: 'source', label: ['Corporate &', 'Other'], value: 0.1, valueText: '€0.1B', notes: ['(7%) Y/Y'] },
      { id: 'segment_hub', col: 1, order: 0, type: 'hub', label: '', value: 7.4 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 7.2, valueText: '€7.2B', notes: ['(3%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.1, valueText: '($0.1B)' },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.2, valueText: '€5.2B', notes: ['72% of revenue', '(1pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 2.1, valueText: '(€2.1B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, valueText: '€0.7B', notes: ['10% of revenue', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.5, valueText: '(€4.5B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, valueText: '€0.2B', notes: ['3% of revenue', '(4pp) Y/Y'] },
      { id: 'other_nonoperating', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.3, valueText: '(€0.3B)' },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.2, valueText: '(€0.2B)' },
      { id: 'other_opex', col: 5, order: 3, type: 'cost', label: 'Other opex', value: 2.9, valueText: '(€2.9B)', notes: ['41% of revenue', '(1pp) Y/Y'] },
      { id: 'personnel_expenses', col: 5, order: 4, type: 'cost', label: ['Personnel', 'expenses'], value: 1.3, valueText: '(€1.3B)', notes: ['18% of revenue', '(1pp) Y/Y'] },
      { id: 'other_operating', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.2, valueText: '(€0.2B)', notes: ['3% of revenue', '+3pp Y/Y'] },
    ],
    links: [
      { source: 'fashion_leather_goods', target: 'segment_hub', value: 5.8, sourceWidth: 320, targetWidth: 320, y0: 621, y1: 715, sourceOrder: 0, targetOrder: 0 },
      { source: 'kering_jewelry', target: 'segment_hub', value: 0.5, sourceWidth: 28, targetWidth: 28, y0: 954, y1: 889, sourceOrder: 0, targetOrder: 1 },
      { source: 'kering_eyewear', target: 'segment_hub', value: 1.0, sourceWidth: 53, targetWidth: 53, y0: 1115.5, y1: 929.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'corporate_other', target: 'segment_hub', value: 0.1, sourceWidth: 1, targetWidth: 7, y0: 1264.5, y1: 959.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_hub', target: 'revenue', value: 7.2, sourceWidth: 400, targetWidth: 400, y0: 755, y1: 863, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_hub', target: 'eliminations', value: 0.1, sourceWidth: 8, targetWidth: 6, y0: 959, y1: 1221, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 5.2, sourceWidth: 286, targetWidth: 287, y0: 806, y1: 699.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 2.1, sourceWidth: 114, targetWidth: 114, y0: 1006, y1: 1105, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.7, sourceWidth: 41, targetWidth: 41, y0: 576.5, y1: 501.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.5, sourceWidth: 246, targetWidth: 248, y0: 720, y1: 828, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 9, targetWidth: 11, y0: 486.5, y1: 398.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.3, sourceWidth: 17, targetWidth: 17, y0: 500.5, y1: 613.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 15, targetWidth: 11, y0: 514.5, y1: 737.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 2.9, sourceWidth: 163, targetWidth: 163, y0: 785.5, y1: 921.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'personnel_expenses', value: 1.3, sourceWidth: 75, targetWidth: 75, y0: 904.5, y1: 1131.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating', value: 0.2, sourceWidth: 10, targetWidth: 12, y0: 947, y1: 1288, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '开云集团 · 2026 财年上半年',
        meta: {
          title: '开云集团 2026 财年上半年利润表',
          period: '2026 财年上半年',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 1840,
          hidePeriodStamp: true,
        },
        annotationsSvg: brandMarks,
        nodes: {
          fashion_leather_goods: { label: ['时装与皮具', '业务'], notes: ['同比 (5%)'] },
          kering_jewelry: { label: '开云珠宝', notes: ['同比 +14%'] },
          kering_eyewear: { label: '开云眼镜', notes: ['同比 +5%'] },
          corporate_other: { label: ['公司业务', '及其他'], notes: ['同比 (7%)'] },
          segment_hub: { label: '' },
          revenue: { label: '收入', notes: ['同比 (3%)'] },
          eliminations: { label: '抵销项' },
          gross_profit: { label: '毛利润', notes: ['占收入 72%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['占收入 10%', '同比 (3 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['占收入 3%', '同比 (4 个百分点)'] },
          other_nonoperating: { label: '其他' },
          tax: { label: '税费' },
          other_opex: { label: '其他运营费用', notes: ['占收入 41%', '同比 (1 个百分点)'] },
          personnel_expenses: { label: ['人员', '费用'], notes: ['占收入 18%', '同比 (1 个百分点)'] },
          other_operating: { label: '其他', notes: ['占收入 3%', '同比 +3 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

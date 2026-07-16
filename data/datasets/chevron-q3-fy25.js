/* Chevron Q3 FY25 income statement ($B). Financial values live in the
 * Chevron income-statement SSOT; this Adapter owns only Sankey View geometry. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#0b5da5';
  const BLUE_LINK = '#8aafce';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const line = (text, size, options = {}) => ({ text, size, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 8, lines, ...options });

  const chevronLogo = `
    <g>
      <text x="141" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="56" font-weight="800" fill="#075dad"
        textLength="224" lengthAdjust="spacingAndGlyphs">Chevron</text>
      <path d="M30 76L141 116L252 76V151L141 191L30 151Z" fill="#159ad0"/>
      <path d="M30 76L141 116L108 129L30 103Z" fill="#0c70b8"/>
      <path d="M252 76V151L141 191V166L222 136V96Z" fill="#0e76ba"/>
      <path d="M30 162L141 202L252 162V236L141 271L30 236Z" fill="#ed1631"/>
      <path d="M30 162L141 202L108 215L30 190Z" fill="#d8122b"/>
      <path d="M252 162V236L141 271V246L222 216V182Z" fill="#cc1028"/>
      <path d="M30 151L141 191L252 151V162L141 202L30 162Z" fill="#ffffff"/>
    </g>`;

  const upstreamIcon = `
    <g transform="translate(86 355)" fill="none" stroke="#102f78" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 109C43 101 92 101 132 109"/>
      <path d="M18 49L105 18L111 35L26 62Z"/>
      <path d="M22 58L7 61L4 52L19 48Z" fill="#4db5e5"/>
      <path d="M105 18L119 5L129 8L134 35L120 43L111 35Z" fill="#f2f2f2"/>
      <path d="M42 61V100M84 48L99 100M50 100L76 46M58 75H92M52 93H98M28 100V89H47V101"/>
      <path d="M118 43V59M118 74V106"/>
      <rect x="112" y="59" width="13" height="17" rx="3" fill="#f2f2f2"/>
    </g>`;

  const downstreamIcon = `
    <g transform="translate(79 698)" fill="none" stroke="#1f3a80" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 106C36 101 93 101 132 106"/>
      <path d="M28 96V10H88V96M24 96H93V106H21Z" fill="#f2f2f2"/>
      <rect x="36" y="20" width="44" height="31" rx="3" fill="#2b3f85"/>
      <path d="M41 26H74L41 45Z" fill="#49aee2" stroke="none"/>
      <path d="M39 61H47M58 61H66M77 61H85" stroke="#1685c7" stroke-width="8"/>
      <circle cx="59" cy="79" r="11" fill="#f2f2f2"/>
      <path d="M54 81L63 74L60 83" stroke="#273c82" stroke-width="4"/>
      <path d="M88 42H100L110 52V87C110 96 123 96 123 87V59"/>
      <path d="M104 51L116 57V77L108 76Z" fill="#48aede"/>
    </g>`;

  const labels = {
    upstream: {
      blocks: [
        block(250, 480, [line('Upstream', 40, { weight: 800, color: BLUE }), line('22% net margin', 28, { color: NOTE })], { anchor: 'end' }),
        block(360, 348, [line('$15.2B', 40, { color: BLUE }), line('+28% Y/Y', 29, { color: NOTE })]),
      ],
    },
    downstream: {
      blocks: [
        block(250, 886, [line('Downstream', 36, { weight: 800, color: BLUE }), line('3% net margin', 28, { color: NOTE })], { anchor: 'end' }),
        block(360, 680, [line('$33.0B', 40, { color: BLUE }), line('(11%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    all_other: {
      blocks: [
        block(250, 1147, [line('All other', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(360, 1071, [line('$value', 40, { color: BLUE }), line('(11%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    sales_and_other_operating_revenues: {
      blocks: [
        block(826, 370, [line('Sales & other', 40, { weight: 800, color: BLUE }), line('operating revenues', 40, { weight: 800, color: BLUE })]),
        block(826, 476, [line('$48.2B', 40, { color: BLUE }), line('(2%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    income_from_equity_affiliates: {
      blocks: [
        block(746, 1036, [line('Income', 40, { weight: 800, color: BLUE }), line('from', 40, { weight: 800, color: BLUE }), line('equity', 40, { weight: 800, color: BLUE }), line('affiliates', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(826, 1043, [line('$1.0B', 40, { color: BLUE }), line('(22%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    other_income: {
      blocks: [
        block(738, 1316, [line('Other', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(826, 1237, [line('$0.6B', 40, { color: BLUE }), line('(20%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    revenue: {
      blocks: [block(1292, 542, [line('Revenue', 40, { weight: 800, color: BLUE }), line('$49.7B', 40, { color: BLUE }), line('(2%) Y/Y', 29, { color: NOTE })])],
    },
    pretax_income: {
      blocks: [block(1767, 381, [line('Pretax income', 40, { weight: 800, color: GREEN_LABEL }), line('$5.4B', 40, { color: GREEN_LABEL }), line('11% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })])],
    },
    net_income: {
      blocks: [block(2427, 304, [line('Net income', 40, { weight: 800, color: GREEN_LABEL }), line('$3.6B', 40, { color: GREEN_LABEL }), line('7% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })])],
    },
    tax: {
      blocks: [block(2429, 477, [line('Tax', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])],
    },
    operating_expenses: {
      blocks: [block(1760, 1115, [line('Costs and', 40, { weight: 800, color: RED_LABEL }), line('other deductions', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])],
    },
    purchased_crude_oil_and_products: {
      blocks: [block(2427, 593, [line('Crude Oil', 32, { weight: 800, color: RED_LABEL }), line('& Products', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    sga: {
      blocks: [block(2426, 791, [line('SG&A', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])],
    },
    opex: {
      blocks: [block(2420, 918, [line('Opex ($7.5B)', 36, { weight: 800, color: RED_LABEL })])],
    },
    depreciation_depletion_amortization: {
      blocks: [block(2420, 1011, [line('D&A ($5.8B)', 36, { weight: 800, color: RED_LABEL })])],
    },
    taxes_non_income: {
      blocks: [block(2427, 1079, [line('Taxes (non income)', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])],
    },
    interest: {
      blocks: [block(2428, 1189, [line('Interest ($0.4B)', 34, { weight: 800, color: RED_LABEL })])],
    },
    exploration: {
      blocks: [block(2428, 1278, [line('Exploration ($0.3B)', 34, { weight: 800, color: RED_LABEL })])],
    },
    other_costs: {
      blocks: [block(2427, 1351, [line('Other ($0.1B)', 34, { weight: 800, color: RED_LABEL })])],
    },
  };

  const zhLabels = {
    upstream: { blocks: [block(250, 480, [line('上游业务', 40, { weight: 800, color: BLUE }), line('净利率 22%', 28, { color: NOTE })], { anchor: 'end' }), block(360, 348, [line('$15.2B', 40, { color: BLUE }), line('同比 +28%', 29, { color: NOTE })])] },
    downstream: { blocks: [block(250, 886, [line('下游业务', 36, { weight: 800, color: BLUE }), line('净利率 3%', 28, { color: NOTE })], { anchor: 'end' }), block(360, 680, [line('$33.0B', 40, { color: BLUE }), line('同比 (11%)', 29, { color: NOTE })])] },
    all_other: { blocks: [block(250, 1147, [line('其他', 40, { weight: 800, color: BLUE })], { anchor: 'end' }), block(360, 1071, [line('$value', 40, { color: BLUE }), line('同比 (11%)', 29, { color: NOTE })])] },
    sales_and_other_operating_revenues: { blocks: [block(826, 370, [line('销售及其他', 40, { weight: 800, color: BLUE }), line('营业收入', 40, { weight: 800, color: BLUE })]), block(826, 476, [line('$48.2B', 40, { color: BLUE }), line('同比 (2%)', 29, { color: NOTE })])] },
    income_from_equity_affiliates: { blocks: [block(746, 1036, [line('权益法', 40, { weight: 800, color: BLUE }), line('被投资单位', 40, { weight: 800, color: BLUE }), line('收益', 40, { weight: 800, color: BLUE })], { anchor: 'end' }), block(826, 1043, [line('$1.0B', 40, { color: BLUE }), line('同比 (22%)', 29, { color: NOTE })])] },
    other_income: { blocks: [block(738, 1316, [line('其他收入', 40, { weight: 800, color: BLUE })], { anchor: 'end' }), block(826, 1237, [line('$0.6B', 40, { color: BLUE }), line('同比 (20%)', 29, { color: NOTE })])] },
    revenue: { blocks: [block(1292, 542, [line('收入', 40, { weight: 800, color: BLUE }), line('$49.7B', 40, { color: BLUE }), line('同比 (2%)', 29, { color: NOTE })])] },
    pretax_income: { blocks: [block(1767, 381, [line('所得税前利润', 40, { weight: 800, color: GREEN_LABEL }), line('$5.4B', 40, { color: GREEN_LABEL }), line('利润率 11%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })])] },
    net_income: { blocks: [block(2427, 304, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$3.6B', 40, { color: GREEN_LABEL }), line('利润率 7%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })])] },
    tax: { blocks: [block(2429, 477, [line('所得税', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])] },
    operating_expenses: { blocks: [block(1760, 1115, [line('成本及其他', 40, { weight: 800, color: RED_LABEL }), line('扣除项', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])] },
    purchased_crude_oil_and_products: { blocks: [block(2427, 593, [line('原油及产品', 32, { weight: 800, color: RED_LABEL }), line('采购成本', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
    sga: { blocks: [block(2426, 791, [line('销售、一般及管理费用', 28, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    opex: { blocks: [block(2420, 918, [line('运营费用 ($7.5B)', 34, { weight: 800, color: RED_LABEL })])] },
    depreciation_depletion_amortization: { blocks: [block(2440, 1011, [line('折旧、耗竭及摊销 ($5.8B)', 29, { weight: 800, color: RED_LABEL })])] },
    taxes_non_income: { blocks: [block(2427, 1079, [line('非所得税税费', 32, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    interest: { blocks: [block(2428, 1189, [line('利息 ($0.4B)', 34, { weight: 800, color: RED_LABEL })])] },
    exploration: { blocks: [block(2428, 1278, [line('勘探费用 ($0.3B)', 34, { weight: 800, color: RED_LABEL })])] },
    other_costs: { blocks: [block(2427, 1351, [line('其他 ($0.1B)', 34, { weight: 800, color: RED_LABEL })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chevron-q3-fy25',
    name: 'Chevron · Q3 FY25',
    company: 'Chevron',
    meta: {
      company: 'Chevron',
      title: 'Chevron Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/chevron-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      logoSvg: chevronLogo,
      logoViewBox: '0 0 282 271',
      logoWidth: 282,
      logoHeight: 271,
      logoY: 266,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: `<g>${upstreamIcon}${downstreamIcon}</g>`,
    layout: {
      scale: 6.05,
      nodes: {
        upstream: { x: 321, y: 448, width: 73, height: 92 },
        downstream: { x: 321, y: 774, width: 73, height: 201 },
        all_other: { x: 321, y: 1171, width: 73, height: 3 },
        sales_and_other_operating_revenues: { x: 789, y: 567, width: 73, height: 291 },
        income_from_equity_affiliates: { x: 789, y: 1136, width: 73, height: 6 },
        other_income: { x: 789, y: 1336, width: 73, height: 4 },
        revenue: { x: 1256, y: 683, width: 73, height: 301 },
        pretax_income: { x: 1724, y: 558, width: 72, height: 32 },
        operating_expenses: { x: 1724, y: 834, width: 72, height: 269 },
        net_income: { x: 2190, y: 348, width: 73, height: 22 },
        tax: { x: 2190, y: 510, width: 73, height: 11 },
        purchased_crude_oil_and_products: { x: 2190, y: 572, width: 73, height: 165 },
        sga: { x: 2190, y: 809, width: 73, height: 46 },
        opex: { x: 2190, y: 922, width: 73, height: 34 },
        depreciation_depletion_amortization: { x: 2190, y: 1027, width: 73, height: 9 },
        taxes_non_income: { x: 2190, y: 1117, width: 73, height: 7 },
        interest: { x: 2190, y: 1207, width: 73, height: 5 },
        exploration: { x: 2190, y: 1296, width: 73, height: 5 },
        other_costs: { x: 2190, y: 1373, width: 73, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'upstream', col: 0, order: 0, type: 'source', label: 'Upstream', value: 15.165, notes: ['+28% Y/Y', '22% net margin'] },
      { id: 'downstream', col: 0, order: 1, type: 'source', label: 'Downstream', value: 32.98, notes: ['(11%) Y/Y', '3% net margin'] },
      { id: 'all_other', col: 0, order: 2, type: 'source', label: 'All other', value: 0.024, valueText: '$24M', notes: ['(11%) Y/Y'] },
      { id: 'sales_and_other_operating_revenues', col: 1, order: 0, type: 'source', label: ['Sales & other', 'operating revenues'], value: 48.169, notes: ['(2%) Y/Y'] },
      { id: 'income_from_equity_affiliates', col: 1, order: 1, type: 'source', label: ['Income', 'from', 'equity', 'affiliates'], value: 0.981, notes: ['(22%) Y/Y'] },
      { id: 'other_income', col: 1, order: 2, type: 'source', label: 'Other', value: 0.576, notes: ['(20%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 49.726, notes: ['(2%) Y/Y'] },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 5.414, notes: ['11% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Costs and', 'other deductions'], value: 44.312 },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 3.613, notes: ['7% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.801 },
      { id: 'purchased_crude_oil_and_products', col: 4, order: 2, type: 'cost', label: ['Crude Oil', '& Products'], value: 27.398 },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 1.524 },
      { id: 'opex', col: 4, order: 4, type: 'cost', label: 'Opex', value: 7.534 },
      { id: 'depreciation_depletion_amortization', col: 4, order: 5, type: 'cost', label: 'D&A', value: 5.781 },
      { id: 'taxes_non_income', col: 4, order: 6, type: 'cost', label: 'Taxes (non income)', value: 1.347 },
      { id: 'interest', col: 4, order: 7, type: 'cost', label: 'Interest', value: 0.37 },
      { id: 'exploration', col: 4, order: 8, type: 'cost', label: 'Exploration', value: 0.288 },
      { id: 'other_costs', col: 4, order: 9, type: 'cost', label: 'Other', value: 0.07 },
    ],
    links: [
      { source: 'upstream', target: 'sales_and_other_operating_revenues', value: 15.165, sourceWidth: 92, targetWidth: 92, sourceOrder: 0, targetOrder: 0 },
      { source: 'downstream', target: 'sales_and_other_operating_revenues', value: 32.98, sourceWidth: 201, targetWidth: 198, sourceOrder: 0, targetOrder: 1 },
      { source: 'all_other', target: 'sales_and_other_operating_revenues', value: 0.024, sourceWidth: 2, targetWidth: 1, sourceOrder: 0, targetOrder: 2 },
      { source: 'sales_and_other_operating_revenues', target: 'revenue', value: 48.169, sourceWidth: 291, targetWidth: 291, sourceOrder: 0, targetOrder: 0 },
      { source: 'income_from_equity_affiliates', target: 'revenue', value: 0.981, sourceWidth: 6, targetWidth: 6, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_income', target: 'revenue', value: 0.576, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'pretax_income', value: 5.414, sourceWidth: 33, targetWidth: 32, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 44.312, sourceWidth: 268, targetWidth: 269, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 3.613, sourceWidth: 21, targetWidth: 22, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.801, sourceWidth: 11, targetWidth: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'purchased_crude_oil_and_products', value: 27.398, sourceWidth: 166, targetWidth: 165, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'opex', value: 7.534, sourceWidth: 46, targetWidth: 34, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_depletion_amortization', value: 5.781, sourceWidth: 35, targetWidth: 9, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.524, sourceWidth: 9, targetWidth: 46, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'taxes_non_income', value: 1.347, sourceWidth: 8, targetWidth: 7, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'interest', value: 0.37, sourceWidth: 2, targetWidth: 5, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'exploration', value: 0.288, sourceWidth: 2, targetWidth: 5, sourceOrder: 6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_costs', value: 0.07, sourceWidth: 1, targetWidth: 3, sourceOrder: 7, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '雪佛龙 · 2025 财年第三季度',
        meta: {
          title: '雪佛龙 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1580,
        },
        nodes: {
          upstream: { label: '上游业务', notes: ['同比 +28%', '净利率 22%'] },
          downstream: { label: '下游业务', notes: ['同比 (11%)', '净利率 3%'] },
          all_other: { label: '其他', notes: ['同比 (11%)'] },
          sales_and_other_operating_revenues: { label: ['销售及其他', '营业收入'], notes: ['同比 (2%)'] },
          income_from_equity_affiliates: { label: ['权益法', '被投资单位', '收益'], notes: ['同比 (22%)'] },
          other_income: { label: '其他收入', notes: ['同比 (20%)'] },
          revenue: { label: '收入', notes: ['同比 (2%)'] },
          pretax_income: { label: '所得税前利润', notes: ['利润率 11%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['成本及其他', '扣除项'] },
          net_income: { label: '净利润', notes: ['利润率 7%', '同比 (2 个百分点)'] },
          tax: { label: '所得税' },
          purchased_crude_oil_and_products: { label: ['原油及产品', '采购成本'] },
          sga: { label: '销售、一般及管理费用' },
          opex: { label: '运营费用' },
          depreciation_depletion_amortization: { label: '折旧、耗竭及摊销' },
          taxes_non_income: { label: '非所得税税费' },
          interest: { label: '利息' },
          exploration: { label: '勘探费用' },
          other_costs: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

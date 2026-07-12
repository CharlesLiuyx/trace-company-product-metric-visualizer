/* Chevron Q1 FY26 income statement ($B), reconstructed from the processed
 * reference as a fixed SVG-only Sankey. The financial SSOT lives in
 * data/income-statements/chevron.js; this file owns View geometry only. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#16537b';
  const NOTE = '#686868';
  const BLUE = '#1663aa';
  const BLUE_LINK = '#89aecc';
  const GREEN = '#24a52c';
  const GREEN_LABEL = '#00964f';
  const GREEN_LINK = '#9cd29a';
  const RED = '#de0000';
  const RED_LABEL = '#a11b05';
  const RED_LINK = '#e08183';

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

  const annotations = `<g>${upstreamIcon}${downstreamIcon}</g>`;

  const labels = {
    upstream: {
      blocks: [
        block(250, 485, [line('Upstream', 40, { weight: 800, color: BLUE }), line('30% net margin', 28, { color: NOTE })], { anchor: 'end' }),
        block(360, 364, [line('$value', 40, { color: '#075dad' }), line('+6% Y/Y', 29, { color: NOTE })]),
      ],
    },
    downstream: {
      blocks: [
        block(250, 826, [line('Downstream', 36, { weight: 800, color: BLUE }), line('(2%) net margin', 28, { color: NOTE })], { anchor: 'end' }),
        block(360, 610, [line('$value', 40, { color: '#075dad' }), line('+2% Y/Y', 29, { color: NOTE })]),
      ],
    },
    all_other: {
      blocks: [
        block(250, 1107, [line('All other', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(360, 1027, [line('$value', 40, { color: '#075dad' }), line('(26%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    sales_and_other_operating_revenues: {
      blocks: [
        block(826, 386, [line('Sales & other', 40, { weight: 800, color: BLUE }), line('operating revenues', 40, { weight: 800, color: BLUE })]),
        block(826, 494, [line('$value', 40, { color: '#075dad' }), line('+3% Y/Y', 29, { color: NOTE })]),
      ],
    },
    income_from_equity_affiliates: {
      blocks: [
        block(738, 1048, [line('Income', 40, { weight: 800, color: BLUE }), line('from', 40, { weight: 800, color: BLUE }), line('equity', 40, { weight: 800, color: BLUE }), line('affiliates', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(826, 1050, [line('$value', 40, { color: '#075dad' }), line('(9%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    other_income: {
      blocks: [
        block(738, 1327, [line('Other', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(826, 1247, [line('$value', 40, { color: '#075dad' }), line('(56%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    revenue: {
      blocks: [
        block(1292, 542, [line('Revenue', 40, { weight: 800, color: BLUE }), line('$value', 40, { color: '#075dad' }), line('+2% Y/Y', 29, { color: NOTE })]),
      ],
    },
    pretax_income: {
      blocks: [
        block(1760, 403, [line('Pretax income', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('8% margin', 29, { color: NOTE }), line('(4pp) Y/Y', 29, { color: NOTE })]),
      ],
    },
    net_income: {
      blocks: [
        block(2440, 354, [line('Net income', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('5% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })]),
      ],
    },
    tax: {
      blocks: [block(2440, 539, [line('Tax', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])],
    },
    operating_expenses: {
      blocks: [
        block(1760, 1128, [line('Costs and', 40, { weight: 800, color: RED_LABEL }), line('other deductions', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })]),
      ],
    },
    purchased_crude_oil_and_products: {
      blocks: [block(2440, 660, [line('Crude Oil', 32, { weight: 800, color: RED_LABEL }), line('& Products', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    opex: {
      blocks: [block(2420, 907, [line('Opex ($8.7B)', 36, { weight: 800, color: RED_LABEL })])],
    },
    depreciation_depletion_amortization: {
      blocks: [block(2420, 1010, [line('D&A ($5.8B)', 36, { weight: 800, color: RED_LABEL })])],
    },
    taxes_non_income: {
      blocks: [block(2420, 1098, [line('Taxes (non income)', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])],
    },
    interest: {
      blocks: [block(2420, 1213, [line('Interest ($0.3B)', 34, { weight: 800, color: RED_LABEL })])],
    },
    exploration: {
      blocks: [block(2420, 1302, [line('Exploration ($0.2B)', 34, { weight: 800, color: RED_LABEL })])],
    },
  };

  const zhLabels = {
    upstream: {
      blocks: [
        block(250, 485, [line('上游业务', 40, { weight: 800, color: BLUE }), line('净利率 30%', 28, { color: NOTE })], { anchor: 'end' }),
        block(360, 364, [line('$value', 40, { color: '#075dad' }), line('同比 +6%', 29, { color: NOTE })]),
      ],
    },
    downstream: {
      blocks: [
        block(250, 826, [line('下游业务', 40, { weight: 800, color: BLUE }), line('净利率 (2%)', 28, { color: NOTE })], { anchor: 'end' }),
        block(360, 610, [line('$value', 40, { color: '#075dad' }), line('同比 +2%', 29, { color: NOTE })]),
      ],
    },
    all_other: {
      blocks: [
        block(250, 1107, [line('其他', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(360, 1027, [line('$value', 40, { color: '#075dad' }), line('同比 (26%)', 29, { color: NOTE })]),
      ],
    },
    sales_and_other_operating_revenues: {
      blocks: [
        block(826, 386, [line('销售及其他', 40, { weight: 800, color: BLUE }), line('营业收入', 40, { weight: 800, color: BLUE })]),
        block(826, 494, [line('$value', 40, { color: '#075dad' }), line('同比 +3%', 29, { color: NOTE })]),
      ],
    },
    income_from_equity_affiliates: {
      blocks: [
        block(738, 1048, [line('权益法', 40, { weight: 800, color: BLUE }), line('被投资单位', 40, { weight: 800, color: BLUE }), line('收益', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(826, 1050, [line('$value', 40, { color: '#075dad' }), line('同比 (9%)', 29, { color: NOTE })]),
      ],
    },
    other_income: {
      blocks: [
        block(738, 1327, [line('其他收入', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(826, 1247, [line('$value', 40, { color: '#075dad' }), line('同比 (56%)', 29, { color: NOTE })]),
      ],
    },
    revenue: {
      blocks: [block(1292, 542, [line('收入', 40, { weight: 800, color: BLUE }), line('$value', 40, { color: '#075dad' }), line('同比 +2%', 29, { color: NOTE })])],
    },
    pretax_income: {
      blocks: [block(1760, 403, [line('所得税前利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 8%', 29, { color: NOTE }), line('同比 (4 个百分点)', 29, { color: NOTE })])],
    },
    net_income: {
      blocks: [block(2440, 354, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 5%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })])],
    },
    tax: {
      blocks: [block(2440, 539, [line('所得税', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])],
    },
    operating_expenses: {
      blocks: [block(1760, 1128, [line('成本及其他', 40, { weight: 800, color: RED_LABEL }), line('扣除项', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])],
    },
    purchased_crude_oil_and_products: {
      blocks: [block(2440, 660, [line('原油及产品', 32, { weight: 800, color: RED_LABEL }), line('采购成本', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    opex: { blocks: [block(2420, 907, [line('运营费用 ($8.7B)', 34, { weight: 800, color: RED_LABEL })])] },
    depreciation_depletion_amortization: { blocks: [block(2440, 1010, [line('折旧、耗竭及摊销 ($5.8B)', 29, { weight: 800, color: RED_LABEL })])] },
    taxes_non_income: { blocks: [block(2420, 1098, [line('非所得税税费', 32, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })])] },
    interest: { blocks: [block(2420, 1213, [line('利息 ($0.3B)', 34, { weight: 800, color: RED_LABEL })])] },
    exploration: { blocks: [block(2420, 1302, [line('勘探费用 ($0.2B)', 34, { weight: 800, color: RED_LABEL })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chevron-q1-fy26',
    name: 'Chevron · Q1 FY26',
    company: 'Chevron',
    meta: {
      company: 'Chevron',
      title: 'Chevron Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/chevron-q1-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: annotations,
    layout: {
      scale: 6.45,
      nodes: {
        upstream: { x: 321, y: 453, width: 73, height: 85 },
        downstream: { x: 321, y: 699, width: 73, height: 222 },
        all_other: { x: 321, y: 1119, width: 73, height: 0.1 },
        sales_and_other_operating_revenues: { x: 790, y: 583, width: 72, height: 307 },
        income_from_equity_affiliates: { x: 790, y: 1141, width: 72, height: 4.8 },
        other_income: { x: 790, y: 1342, width: 72, height: 2 },
        revenue: { x: 1256, y: 686, width: 72, height: 314 },
        pretax_income: { x: 1723, y: 588, width: 72, height: 25.5 },
        operating_expenses: { x: 1723, y: 822, width: 72, height: 288 },
        net_income: { x: 2189, y: 406, width: 72, height: 14.8 },
        tax: { x: 2189, y: 565, width: 72, height: 10.7 },
        purchased_crude_oil_and_products: { x: 2189, y: 635, width: 72, height: 182.3 },
        opex: { x: 2189, y: 890, width: 72, height: 56.4 },
        depreciation_depletion_amortization: { x: 2189, y: 1013, width: 72, height: 37.5 },
        taxes_non_income: { x: 2189, y: 1128, width: 72, height: 8.5 },
        interest: { x: 2189, y: 1224, width: 72, height: 2.3 },
        exploration: { x: 2189, y: 1313, width: 72, height: 1.4 },
      },
      labels,
    },
    nodes: [
      { id: 'upstream', col: 0, order: 0, type: 'source', label: 'Upstream', value: 13.179, valueText: '$13.1B', notes: ['+6% Y/Y', '30% net margin'] },
      { id: 'downstream', col: 0, order: 1, type: 'source', label: 'Downstream', value: 34.363, notes: ['+2% Y/Y', '(2%) net margin'] },
      { id: 'all_other', col: 0, order: 2, type: 'source', label: 'All other', value: 0.014, valueText: '$14M', notes: ['(26%) Y/Y'], color: BG, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'sales_and_other_operating_revenues', col: 1, order: 0, type: 'source', label: ['Sales & other', 'operating revenues'], value: 47.556, notes: ['+3% Y/Y'] },
      { id: 'income_from_equity_affiliates', col: 1, order: 1, type: 'source', label: ['Income', 'from', 'equity', 'affiliates'], value: 0.745, notes: ['(9%) Y/Y'], color: BG, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_income', col: 1, order: 2, type: 'source', label: 'Other', value: 0.306, notes: ['(56%) Y/Y'], color: BG, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 48.607, notes: ['+2% Y/Y'] },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 3.946, notes: ['8% margin', '(4pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Costs and', 'other deductions'], value: 44.661 },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 2.293, notes: ['5% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.653 },
      { id: 'purchased_crude_oil_and_products', col: 4, order: 2, type: 'cost', label: ['Crude Oil', '& Products'], value: 28.265 },
      { id: 'opex', col: 4, order: 3, type: 'cost', label: 'Opex', value: 8.742 },
      { id: 'depreciation_depletion_amortization', col: 4, order: 4, type: 'cost', label: 'D&A', value: 5.808 },
      { id: 'taxes_non_income', col: 4, order: 5, type: 'cost', label: 'Taxes (non income)', value: 1.314 },
      { id: 'interest', col: 4, order: 6, type: 'cost', label: 'Interest', value: 0.345 },
      { id: 'exploration', col: 4, order: 7, type: 'cost', label: 'Exploration', value: 0.205 },
    ],
    links: [
      { source: 'upstream', target: 'sales_and_other_operating_revenues', value: 13.179, sourceOrder: 0, targetOrder: 0 },
      { source: 'downstream', target: 'sales_and_other_operating_revenues', value: 34.363, sourceOrder: 0, targetOrder: 1 },
      { source: 'all_other', target: 'sales_and_other_operating_revenues', value: 0.014, sourceOrder: 0, targetOrder: 2 },
      { source: 'sales_and_other_operating_revenues', target: 'revenue', value: 47.556, width: 305, sourceOrder: 0, targetOrder: 0 },
      { source: 'income_from_equity_affiliates', target: 'revenue', value: 0.745, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_income', target: 'revenue', value: 0.306, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'pretax_income', value: 3.946, sourceWidth: 25, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 44.661, sourceWidth: 287, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 2.293, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.653, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'purchased_crude_oil_and_products', value: 28.265, targetWidth: 181, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'opex', value: 8.742, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_depletion_amortization', value: 5.808, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'taxes_non_income', value: 1.314, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'interest', value: 0.345, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'exploration', value: 0.205, sourceOrder: 5, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '雪佛龙 · 2026 财年第一季度',
        meta: {
          title: '雪佛龙 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1580,
        },
        nodes: {
          upstream: { label: '上游业务', notes: ['同比 +6%', '净利率 30%'] },
          downstream: { label: '下游业务', notes: ['同比 +2%', '净利率 (2%)'] },
          all_other: { label: '其他', notes: ['同比 (26%)'] },
          sales_and_other_operating_revenues: { label: ['销售及其他', '营业收入'], notes: ['同比 +3%'] },
          income_from_equity_affiliates: { label: ['权益法', '被投资单位', '收益'], notes: ['同比 (9%)'] },
          other_income: { label: '其他收入', notes: ['同比 (56%)'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          pretax_income: { label: '所得税前利润', notes: ['利润率 8%', '同比 (4 个百分点)'] },
          operating_expenses: { label: ['成本及其他', '扣除项'] },
          net_income: { label: '净利润', notes: ['利润率 5%', '同比 (3 个百分点)'] },
          tax: { label: '所得税' },
          purchased_crude_oil_and_products: { label: ['原油及产品', '采购成本'] },
          opex: { label: '运营费用' },
          depreciation_depletion_amortization: { label: '折旧、耗竭及摊销' },
          taxes_non_income: { label: '非所得税税费' },
          interest: { label: '利息' },
          exploration: { label: '勘探费用' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

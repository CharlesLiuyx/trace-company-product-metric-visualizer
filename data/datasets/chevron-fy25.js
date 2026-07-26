/* Chevron FY25 income statement ($B), reconstructed from the processed
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
    <g transform="translate(86 214)" fill="none" stroke="#102f78" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 109C43 101 92 101 132 109"/>
      <path d="M18 49L105 18L111 35L26 62Z"/>
      <path d="M22 58L7 61L4 52L19 48Z" fill="#4db5e5"/>
      <path d="M105 18L119 5L129 8L134 35L120 43L111 35Z" fill="#f2f2f2"/>
      <path d="M42 61V100M84 48L99 100M50 100L76 46M58 75H92M52 93H98M28 100V89H47V101"/>
      <path d="M118 43V59M118 74V106"/>
      <rect x="112" y="59" width="13" height="17" rx="3" fill="#f2f2f2"/>
    </g>`;

  const downstreamIcon = `
    <g transform="translate(79 544)" fill="none" stroke="#1f3a80" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
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

  const allOtherAnnotation = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="all_other"
      data-link-numerator="all_other"
      data-link-denominator="sales_and_other_operating_revenues"
      data-link-anchor-x="620"
      data-link-anchor-y="850">
      <text x="69" y="986" font-size="40" font-weight="800" fill="${BLUE}">${zh ? '其他' : 'All other'}</text>
      <text x="358" y="919" text-anchor="middle" font-size="40" fill="#075dad">$0.1B</text>
      <text x="358" y="964" text-anchor="middle" font-size="29" fill="${NOTE}">${zh ? '同比 (21%)' : '(21%) Y/Y'}</text>
    </g>`;

  const annotations = (zh) => `<g>${upstreamIcon}${downstreamIcon}${allOtherAnnotation(zh)}</g>`;

  const labels = {
    upstream: {
      blocks: [
        block(243, 353, [line('Upstream', 40, { weight: 800, color: BLUE }), line('24% net margin', 28, { color: NOTE })], { anchor: 'end' }),
        block(349, 243, [line('$value', 40, { color: '#075dad' }), line('+14% Y/Y', 29, { color: NOTE })]),
      ],
    },
    downstream: {
      blocks: [
        block(275, 673, [line('Downstream', 40, { weight: 800, color: BLUE }), line('2% net margin', 28, { color: NOTE })], { anchor: 'end' }),
        block(358, 473, [line('$value', 40, { color: '#075dad' }), line('(11%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    all_other: { blocks: [] },
    sales_and_other_operating_revenues: {
      blocks: [
        block(818, 268, [line('Sales & other', 40, { weight: 800, color: BLUE }), line('operating revenues', 40, { weight: 800, color: BLUE })]),
        block(818, 374, [line('$value', 40, { color: '#075dad' }), line('(5%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    income_from_equity_affiliates: {
      blocks: [
        block(750, 841, [line('Income', 40, { weight: 800, color: BLUE }), line('from', 40, { weight: 800, color: BLUE }), line('equity', 40, { weight: 800, color: BLUE }), line('affiliates', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(818, 851, [line('$value', 40, { color: '#075dad' }), line('(35%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    other_income: {
      blocks: [
        block(728, 1100, [line('Other', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(818, 1025, [line('$value', 40, { color: '#075dad' }), line('(67%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    revenue: {
      blocks: [
        block(1285, 465, [line('Revenue', 40, { weight: 800, color: BLUE }), line('$value', 40, { color: '#075dad' }), line('(7%) Y/Y', 29, { color: NOTE })]),
      ],
    },
    pretax_income: {
      blocks: [
        block(1761, 288, [line('Pretax income', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('10% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })]),
      ],
    },
    net_income: {
      blocks: [
        block(2428, 266, [line('Net income', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('7% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })]),
      ],
    },
    tax: {
      blocks: [block(2429, 450, [line('Tax', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    operating_expenses: {
      blocks: [
        block(1753, 1002, [line('Costs and', 40, { weight: 800, color: RED_LABEL }), line('other deductions', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })]),
      ],
    },
    purchased_crude_oil_and_products: {
      blocks: [block(2427, 572, [line('Crude Oil', 32, { weight: 800, color: RED_LABEL }), line('& Products', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    sga: {
      blocks: [block(2427, 768, [line('SG&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    depreciation_depletion_amortization: {
      blocks: [block(2428, 893, [line('D&A ($20.1B)', 32, { weight: 800, color: RED_LABEL })])],
    },
    opex: {
      blocks: [block(2428, 1005, [line('Opex ($5.1B)', 32, { weight: 800, color: RED_LABEL })])],
    },
    taxes_non_income: {
      blocks: [block(2427, 1084, [line('Taxes (non income)', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    interest: {
      blocks: [block(2427, 1190, [line('Interest ($1.2B)', 32, { weight: 800, color: RED_LABEL })])],
    },
    exploration: {
      blocks: [block(2427, 1276, [line('Exploration ($1.1B)', 32, { weight: 800, color: RED_LABEL })])],
    },
    other_costs: {
      blocks: [block(2427, 1361, [line('Other ($0.3B)', 32, { weight: 800, color: RED_LABEL })])],
    },
  };

  const zhLabels = {
    upstream: {
      blocks: [
        block(243, 353, [line('上游业务', 40, { weight: 800, color: BLUE }), line('净利率 24%', 28, { color: NOTE })], { anchor: 'end' }),
        block(349, 243, [line('$value', 40, { color: '#075dad' }), line('同比 +14%', 29, { color: NOTE })]),
      ],
    },
    downstream: {
      blocks: [
        block(275, 673, [line('下游业务', 40, { weight: 800, color: BLUE }), line('净利率 2%', 28, { color: NOTE })], { anchor: 'end' }),
        block(358, 473, [line('$value', 40, { color: '#075dad' }), line('同比 (11%)', 29, { color: NOTE })]),
      ],
    },
    all_other: { blocks: [] },
    sales_and_other_operating_revenues: {
      blocks: [
        block(818, 268, [line('销售及其他', 40, { weight: 800, color: BLUE }), line('营业收入', 40, { weight: 800, color: BLUE })]),
        block(818, 374, [line('$value', 40, { color: '#075dad' }), line('同比 (5%)', 29, { color: NOTE })]),
      ],
    },
    income_from_equity_affiliates: {
      blocks: [
        block(750, 865, [line('权益法', 40, { weight: 800, color: BLUE }), line('被投资单位', 40, { weight: 800, color: BLUE }), line('收益', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(818, 851, [line('$value', 40, { color: '#075dad' }), line('同比 (35%)', 29, { color: NOTE })]),
      ],
    },
    other_income: {
      blocks: [
        block(728, 1100, [line('其他收入', 40, { weight: 800, color: BLUE })], { anchor: 'end' }),
        block(818, 1025, [line('$value', 40, { color: '#075dad' }), line('同比 (67%)', 29, { color: NOTE })]),
      ],
    },
    revenue: {
      blocks: [block(1285, 465, [line('收入', 40, { weight: 800, color: BLUE }), line('$value', 40, { color: '#075dad' }), line('同比 (7%)', 29, { color: NOTE })])],
    },
    pretax_income: {
      blocks: [block(1761, 288, [line('所得税前利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 10%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })])],
    },
    net_income: {
      blocks: [block(2428, 266, [line('净利润', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('利润率 7%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })])],
    },
    tax: {
      blocks: [block(2429, 450, [line('所得税', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    operating_expenses: {
      blocks: [block(1753, 1002, [line('成本及其他', 40, { weight: 800, color: RED_LABEL }), line('扣除项', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })])],
    },
    purchased_crude_oil_and_products: {
      blocks: [block(2427, 572, [line('原油及产品', 32, { weight: 800, color: RED_LABEL }), line('采购成本', 32, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])],
    },
    sga: { blocks: [block(2427, 768, [line('销售、一般及', 29, { weight: 800, color: RED_LABEL }), line('管理费用', 29, { weight: 800, color: RED_LABEL }), line('$value', 30, { color: RED_LABEL })])] },
    depreciation_depletion_amortization: { blocks: [block(2428, 893, [line('折旧、耗竭及摊销 ($20.1B)', 27, { weight: 800, color: RED_LABEL })])] },
    opex: { blocks: [block(2428, 1005, [line('运营费用 ($5.1B)', 30, { weight: 800, color: RED_LABEL })])] },
    taxes_non_income: { blocks: [block(2427, 1084, [line('非所得税税费', 30, { weight: 800, color: RED_LABEL }), line('$value', 32, { color: RED_LABEL })])] },
    interest: { blocks: [block(2427, 1190, [line('利息 ($1.2B)', 30, { weight: 800, color: RED_LABEL })])] },
    exploration: { blocks: [block(2427, 1276, [line('勘探费用 ($1.1B)', 30, { weight: 800, color: RED_LABEL })])] },
    other_costs: { blocks: [block(2427, 1361, [line('其他 ($0.3B)', 30, { weight: 800, color: RED_LABEL })])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'chevron-fy25',
    name: 'Chevron · FY25',
    company: 'Chevron',
    meta: {
      company: 'Chevron',
      title: 'Chevron FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/chevron-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2034,
      logoSvg: chevronLogo,
      logoViewBox: '0 0 282 271',
      logoWidth: 282,
      logoHeight: 271,
      logoY: 216,
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
    annotationsSvg: annotations(false),
    layout: {
      scale: 1.4,
      routes: {
        all_other: { x: 387, y: 980, width: 0, height: 1 },
      },
      nodes: {
        upstream: { x: 316, y: 331, width: 71, height: 73 },
        downstream: { x: 316, y: 564, width: 71, height: 182 },
        sales_and_other_operating_revenues: { x: 783, y: 464, width: 70, height: 257 },
        income_from_equity_affiliates: { x: 783, y: 941, width: 70, height: 1 },
        other_income: { x: 783, y: 1125, width: 70, height: 1 },
        revenue: { x: 1250, y: 606, width: 71, height: 266 },
        pretax_income: { x: 1718, y: 468, width: 70, height: 25 },
        operating_expenses: { x: 1718, y: 751, width: 70, height: 237 },
        net_income: { x: 2184, y: 350, width: 71, height: 15 },
        tax: { x: 2184, y: 455, width: 71, height: 8 },
        purchased_crude_oil_and_products: { x: 2184, y: 544, width: 71, height: 151 },
        sga: { x: 2184, y: 771, width: 71, height: 38 },
        depreciation_depletion_amortization: { x: 2184, y: 894, width: 71, height: 26 },
        opex: { x: 2184, y: 1017, width: 71, height: 5 },
        taxes_non_income: { x: 2184, y: 1113, width: 71, height: 5 },
        interest: { x: 2184, y: 1205, width: 71, height: 1 },
        exploration: { x: 2184, y: 1290, width: 71, height: 1 },
        other_costs: { x: 2184, y: 1373, width: 71, height: 2 },
      },
      labels,
    },
    nonNodeMetrics: [
      {
        id: 'all_other',
        representation: 'flow',
        label: 'All other',
        value: 0.1,
        type: 'source',
        labelColor: BLUE,
      },
    ],
    nodes: [
      { id: 'upstream', col: 0, order: 0, type: 'source', label: 'Upstream', value: 53.5, notes: ['+14% Y/Y', '24% net margin'] },
      { id: 'downstream', col: 0, order: 1, type: 'source', label: 'Downstream', value: 130.9, notes: ['(11%) Y/Y', '2% net margin'] },
      { id: 'sales_and_other_operating_revenues', col: 1, order: 0, type: 'source', label: ['Sales & other', 'operating revenues'], value: 184.4, notes: ['(5%) Y/Y'] },
      { id: 'income_from_equity_affiliates', col: 1, order: 1, type: 'source', label: ['Income', 'from', 'equity', 'affiliates'], value: 3.0, valueText: '$3.0B', notes: ['(35%) Y/Y'] },
      { id: 'other_income', col: 1, order: 2, type: 'source', label: 'Other', value: 1.6, notes: ['(67%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 189.0, valueText: '$189.0B', notes: ['(7%) Y/Y'] },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 19.7, notes: ['10% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Costs and', 'other deductions'], value: 169.3 },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 12.5, notes: ['7% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 7.3 },
      { id: 'purchased_crude_oil_and_products', col: 4, order: 2, type: 'cost', label: ['Crude Oil', '& Products'], value: 108.2 },
      { id: 'sga', col: 4, order: 3, type: 'cost', label: 'SG&A', value: 28.0, valueText: '($28.0B)' },
      { id: 'depreciation_depletion_amortization', col: 4, order: 4, type: 'cost', label: 'D&A', value: 20.1 },
      { id: 'opex', col: 4, order: 5, type: 'cost', label: 'Opex', value: 5.1 },
      { id: 'taxes_non_income', col: 4, order: 6, type: 'cost', label: 'Taxes (non income)', value: 5.3 },
      { id: 'interest', col: 4, order: 7, type: 'cost', label: 'Interest', value: 1.2 },
      { id: 'exploration', col: 4, order: 8, type: 'cost', label: 'Exploration', value: 1.1 },
      { id: 'other_costs', col: 4, order: 9, type: 'cost', label: 'Other', value: 0.3, color: RED_LINK, labelColor: RED_LABEL },
    ],
    links: [
      { source: 'upstream', target: 'sales_and_other_operating_revenues', value: 53.5, sourceWidth: 73, targetWidth: 74, sourceOrder: 0, targetOrder: 0 },
      { source: 'downstream', target: 'sales_and_other_operating_revenues', value: 130.9, sourceWidth: 182, targetWidth: 182, sourceOrder: 0, targetOrder: 1 },
      { sourceRoute: 'all_other', target: 'sales_and_other_operating_revenues', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 2 },
      { source: 'sales_and_other_operating_revenues', target: 'revenue', value: 184.4, sourceWidth: 257, targetWidth: 257, sourceOrder: 0, targetOrder: 0 },
      { source: 'income_from_equity_affiliates', target: 'revenue', value: 3.0, sourceWidth: 1, targetWidth: 5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_income', target: 'revenue', value: 1.6, sourceWidth: 1, targetWidth: 4, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'pretax_income', value: 19.7, sourceWidth: 27, targetWidth: 25, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 169.3, sourceWidth: 239, targetWidth: 237, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 12.5, sourceWidth: 15.5, targetWidth: 15, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 7.3, sourceWidth: 9.5, targetWidth: 8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'purchased_crude_oil_and_products', value: 108.2, sourceWidth: 151.5, targetWidth: 151, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 28.0, sourceWidth: 39.2, targetWidth: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_depletion_amortization', value: 20.1, sourceWidth: 28.1, targetWidth: 26, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'opex', value: 5.1, sourceWidth: 7.1, targetWidth: 5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'taxes_non_income', value: 5.3, sourceWidth: 7.4, targetWidth: 5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'interest', value: 1.2, sourceWidth: 1.7, targetWidth: 1, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'exploration', value: 1.1, sourceWidth: 1.5, targetWidth: 1, sourceOrder: 6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_costs', value: 0.3, sourceWidth: 0.5, targetWidth: 2, sourceOrder: 7, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '雪佛龙 · 2025 财年',
        meta: {
          title: '雪佛龙 2025 财年利润表',
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1320,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: {
          all_other: { label: '其他' },
        },
        nodes: {
          upstream: { label: '上游业务', notes: ['同比 +14%', '净利率 24%'] },
          downstream: { label: '下游业务', notes: ['同比 (11%)', '净利率 2%'] },
          sales_and_other_operating_revenues: { label: ['销售及其他', '营业收入'], notes: ['同比 (5%)'] },
          income_from_equity_affiliates: { label: ['权益法', '被投资单位', '收益'], notes: ['同比 (35%)'] },
          other_income: { label: '其他收入', notes: ['同比 (67%)'] },
          revenue: { label: '收入', notes: ['同比 (7%)'] },
          pretax_income: { label: '所得税前利润', notes: ['利润率 10%', '同比 (3 个百分点)'] },
          operating_expenses: { label: ['成本及其他', '扣除项'] },
          net_income: { label: '净利润', notes: ['利润率 7%', '同比 (2 个百分点)'] },
          tax: { label: '所得税' },
          purchased_crude_oil_and_products: { label: ['原油及产品', '采购成本'] },
          sga: { label: '销售、一般及管理费用' },
          depreciation_depletion_amortization: { label: '折旧、耗竭及摊销' },
          opex: { label: '运营费用' },
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

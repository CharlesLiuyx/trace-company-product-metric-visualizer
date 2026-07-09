/* ====================================================================
 * Global Payments - Q4 FY25 income statement ($B)
 * Fixed-layout d3/SVG reconstruction measured from the processed source.
 * The source title uses the singular "Global Payment"; the company identity
 * and dataset name use the legal brand "Global Payments".
 * ==================================================================== */
(function () {
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BLUE = '#044075';
  const BLUE_LABEL = '#044074';
  const BLUE_LINK = '#87a2ba';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_ALT_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_ALT_LABEL = '#940e00';
  const RED_LINK = '#e08585';
  const SCALE = 335 / 1.896765;
  const RIGHT_LABEL_X = 2444;

  // Official-sourced pure-vector wordmark. The validated reference crop is
  // conversion evidence only and is never used by the d3 runtime.
  const GLOBAL_PAYMENTS_LOGO = `<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5213 19.8198h-3.424V0h3.424v19.8198zM13.397 4.49743c0 .98139-.8056 1.77672-1.7997 1.77672-.9941 0-1.79973-.79533-1.79973-1.77672 0-.98139.80563-1.77613 1.79973-1.77613.9941 0 1.7997.79474 1.7997 1.77613zM6.7732 12.4373c1.40374 0 2.34017-.8963 2.34017-2.2833 0-1.38638-.96378-2.33725-2.42282-2.33725-1.3217 0-2.25753.92387-2.25753 2.39185 0 1.4134.88114 2.2287 2.34018 2.2287zm-3.05562 8.535c0 .9239 1.04582 1.5772 2.80808 1.5772 2.39547 0 3.74454-.7613 3.74454-1.7673 0-.7883-.63323-1.0877-1.92698-1.1417l-3.1666-.1632c-.99113.462-1.45904.8969-1.45904 1.495zm-2.64357-4.3764c0-1.0061.74319-1.9839 2.14753-2.6912-1.3211-.7877-2.0096-2.0655-2.0096-3.7237 0-2.90834 2.20224-4.94625 5.47883-4.94625 1.34429 0 2.68264.42789 3.71123 1.29482.6796.57229 1.2141 1.32242 1.5066 2.15707.1986.56524.261 1.17098.261 1.76676 0 2.7452-2.0375 4.5395-5.39618 4.5395-.60585 0-1.12906-.0546-1.56963-.1638-.6332.2448-.93583.5711-.93583.9515 0 .8097.95719.8717 2.76933.989h.00029l.00096.0001h.0002c.31687.0205.65986.0427 1.02843.0709 3.71713.2718 5.28623.9785 5.28623 3.6967 0 2.7998-2.3402 4.4033-6.77262 4.4033-4.04714 0-6.11203-1.2508-6.11203-3.561 0-1.3318.79789-2.0655 2.50486-2.6091-1.29375-.6245-1.8996-1.1962-1.8996-2.1746zm25.53839.6073c1.8503 0 2.7338-1.4996 2.7338-4.5254 0-3.02634-.8835-4.49843-2.7338-4.49843-1.8223 0-2.7338 1.47209-2.7338 4.49843 0 3.0258.9115 4.5254 2.7338 4.5254zm.0001-11.94175c3.8664 0 6.1857 2.727 6.1857 7.41615 0 4.6887-2.3473 7.4157-6.1857 7.4157-3.8385 0-6.1858-2.754-6.1858-7.4157 0-4.68915 2.32-7.41615 6.1858-7.41615zm17.0664 7.41605c0 2.9712-1.1599 4.5801-3.0655 4.5801-.9388 0-1.7123-.4091-2.5685-1.2268V9.24209c.8841-.79063 1.6571-1.19974 2.5959-1.19974 1.8502 0 3.0381 1.63585 3.0381 4.63515zM34.7035.00094603V16.4944c0 .6815-.0553 1.7996-.1659 3.3257h2.6511l.3597-1.5261c1.1873 1.2538 2.3747 1.7991 3.9211 1.7991 3.2861 0 5.6334-2.9712 5.6334-7.4157 0-4.60698-2.4026-7.41556-5.5228-7.41556-1.4638 0-2.5132.49069-3.5073 1.63643V.00094603h-3.3693zM51.493 15.8945c0 .9544.5524 1.5273 1.5465 1.5273 1.0773 0 2.1267-.4913 3.1761-1.5003v-3.0534c-3.2035.4362-4.7226 1.336-4.7226 3.0264zm4.8053 2.6717c-1.3252.9538-2.7617 1.4175-4.3081 1.4175-2.43 0-3.8658-1.4451-3.8658-3.8169 0-3.1896 2.6785-4.88 8.2013-5.5615V9.48778c0-1.03598-.7176-1.63585-2.0435-1.63585-1.3253 0-2.4026.57229-3.1755 1.63585l-2.32-1.44508c1.2153-1.8542 3.0655-2.781 5.5514-2.781 3.3961 0 5.3016 1.60884 5.3016 4.22608v8.39702c0 .4913.0833 1.1451.2212 1.9352h-3.2587l-.3039-1.2538zm9.6644 1.2536h-3.4241V0h3.4241v19.8198zm4.9589-3.8168c1.4359 1.7996 2.7338 2.6994 4.3355 2.6994 2.3753 0 3.7832-2.0995 3.7832-5.9981 0-3.89852-1.4079-5.99748-3.7832-5.99748-1.6017 0-2.8996.87222-4.3355 2.67124V16.003zM69.2092 5.56165h1.2706l.4417 1.85361h.138c1.3532-1.4175 2.789-2.12654 4.3355-2.12654 3.1482 0 5.3575 2.69882 5.3575 7.38858 0 4.6892-2.2093 7.388-5.3575 7.388-1.5465 0-2.9823-.6814-4.3355-2.0995h-.138v7.0341h-1.7123V5.56165zM83.569 16.1942c0-2.4265 2.2367-3.3263 7.0972-4.3892v4.3892c-1.6844 1.6899-3.1202 2.5357-4.6946 2.5357-1.4911 0-2.4026-.9544-2.4026-2.5357zm2.1819 3.8979c1.767 0 3.3408-.7078 4.9152-2.1535.028.6004.138 1.2273.2765 1.8812h1.6844c-.1659-.8992-.2486-1.5537-.2486-1.9088V9.05148c0-2.12654-1.9055-3.73598-4.6393-3.73598-2.4858 0-4.0043.95439-5.137 2.91776l1.3259.76363c.8562-1.52726 2.0156-2.29089 3.5899-2.29089 1.9882 0 3.1762.95439 3.1762 2.34548v1.38992c-6.0485 1.063-8.8375 2.5356-8.8375 5.8338 0 2.2093 1.5191 3.8169 3.8943 3.8169zM93.896 5.56181h1.7123l4.2529 12.13179 4.2248-12.13179h1.63l-5.441 15.37649c-.9941 2.8344-2.1541 4.0066-4.6393 4.0066-.4418 0-.9388-.0264-1.4912-.1086v-1.3629c.4418.0816.8562.1091 1.2153.1091 2.0708 0 3.0096-1.1451 3.562-3.8445L93.896 5.56181zm15.106-.00006h-1.575V19.8201h1.657V9.43272c1.436-1.77143 2.845-2.64423 4.17-2.64423 2.043 0 2.485 1.19973 2.485 3.70781v9.3238h1.657V9.43272c1.409-1.77143 2.845-2.64423 4.17-2.64423 2.044 0 2.486 1.19973 2.486 3.70781v9.3238h1.629V9.89642c0-3.05335-1.215-4.58002-3.645-4.58002-1.546 0-3.065.81763-4.64 2.45348h-.192c-.663-1.63585-1.823-2.45348-3.452-2.45348-1.519 0-3.121.81763-4.64 2.45348h-.11V5.56175zm24.743 1.11753c-2.265 0-3.867 1.69044-4.142 4.74382h7.926c-.084-3.08097-1.52-4.74382-3.784-4.74382zm5.468 9.70542c-1.271 2.5626-2.9 3.6808-5.441 3.6808-3.589 0-5.882-2.8086-5.882-7.28 0-4.71564 2.375-7.49664 5.827-7.49664 3.48 0 5.413 2.37189 5.413 6.89734v.4637h-9.528c.028 3.9525 1.547 6.0521 4.281 6.0521 1.85 0 3.038-.8992 4.059-2.9988l1.271.6815zm3.865-10.82295h-1.712V19.8201h1.712V9.43272c1.547-1.77143 3.064-2.64423 4.501-2.64423 2.209 0 2.707 1.19973 2.707 3.70781v9.3238h1.685V9.89642c0-3.05335-1.299-4.58002-3.894-4.58002-1.603 0-3.287.81763-4.999 2.48106V5.56175zm15.933 13.19495c.387 0 .885-.1092 1.519-.273v1.3635c-.634.1644-1.297.2724-1.934.2724-1.988 0-2.844-.9814-2.844-3.0534V6.95239h-2.153v-1.3905h2.153V1.3358h1.685v4.22609h3.01v1.3905h-3.01V17.1484c0 1.09.498 1.6083 1.574 1.6083zm10.578-2.6443c0 1.4991-1.188 2.6173-2.983 2.6173-1.685 0-3.121-.8452-4.363-2.4817l-1.271 1.009c1.436 1.9088 3.175 2.808 5.441 2.808 2.981 0 4.915-1.7168 4.915-4.0887 0-2.2633-1.463-3.1356-4.336-4.1991-.231-.0864-.453-.1678-.665-.2457-1.995-.7325-3.146-1.1548-3.146-2.53473 0-1.3905 1.022-2.34431 2.596-2.34431 1.602 0 2.79.68146 3.894 2.12596l1.215-.87222c-1.27-1.71743-2.927-2.61724-4.806-2.61724-2.871 0-4.666 1.60826-4.666 3.78939 0 2.18055 1.5191 2.99935 4.446 4.06235.145.0534.287.1049.424.155 2.112.7688 3.305 1.2033 3.305 2.8167z" fill="#003C71"/>`;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const labelsEn = {
    merchants_solutions: {
      blocks: [
        block(412, 474, [line('$value', 39), line('+6% Y/Y', 29, { color: NOTE })]),
        block(242, 681, [line('Merchants', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 })], { lineGap: 10 }),
      ],
    },
    revenue: {
      blocks: [block(1038, 529, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+6% Y/Y', 29, { color: NOTE })])],
    },
    operating_profit: {
      blocks: [block(1660, 344, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('11% margin', 29, { color: NOTE }), line('(11pp) Y/Y', 29, { color: NOTE })])],
    },
    tax_benefit: {
      blocks: [block(2116, 284, [line('Tax benefit', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })],
    },
    other: {
      blocks: [block(2112, 538, [line('Other', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })],
    },
    net_profit: {
      blocks: [block(RIGHT_LABEL_X, 376, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('12% margin', 29, { color: NOTE }), line('(5pp) Y/Y', 29, { color: NOTE })])],
    },
    interest: {
      blocks: [block(RIGHT_LABEL_X, 672, [line('Interest', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })],
    },
    sga: {
      blocks: [block(RIGHT_LABEL_X, 829, [line('SG&A', 31, { weight: 800 }), line('$value', 29), line('58% of revenue', 28, { color: NOTE }), line('+14pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })],
    },
    cost_of_service: {
      blocks: [block(RIGHT_LABEL_X, 1107, [line('Cost of service', 31, { weight: 800 }), line('$value', 29), line('29% of revenue', 28, { color: NOTE }), line('(12pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })],
    },
    other_operating_expense: {
      blocks: [block(RIGHT_LABEL_X, 1303, [line('Other', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })],
    },
    operating_expenses: {
      blocks: [block(1660, 1133, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })],
    },
  };

  const labelsZh = {
    merchants_solutions: {
      blocks: [
        block(412, 474, [line('$value', 39), line('同比 +6%', 29, { color: NOTE })]),
        block(242, 681, [line('商户', 40, { weight: 800 }), line('解决方案', 40, { weight: 800 })], { lineGap: 10 }),
      ],
    },
    revenue: { blocks: [block(1038, 529, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +6%', 29, { color: NOTE })])] },
    operating_profit: { blocks: [block(1660, 344, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 11%', 29, { color: NOTE }), line('同比 (11 个百分点)', 29, { color: NOTE })])] },
    tax_benefit: { blocks: [block(2116, 284, [line('所得税收益', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    other: { blocks: [block(2112, 538, [line('其他', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 376, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 12%', 29, { color: NOTE }), line('同比 (5 个百分点)', 29, { color: NOTE })])] },
    interest: { blocks: [block(RIGHT_LABEL_X, 672, [line('利息', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    sga: { blocks: [block(2480, 829, [line('销售、一般及行政费用', 31, { weight: 800 }), line('$value', 29), line('占收入 58%', 28, { color: NOTE }), line('同比 +14 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    cost_of_service: { blocks: [block(RIGHT_LABEL_X, 1107, [line('服务成本', 31, { weight: 800 }), line('$value', 29), line('占收入 29%', 28, { color: NOTE }), line('同比 (12 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    other_operating_expense: { blocks: [block(RIGHT_LABEL_X, 1303, [line('其他', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1660, 1133, [line('运营', 36, { weight: 800 }), line('费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'global-payments-q4-fy25',
    name: 'Global Payments · Q4 FY25',
    company: 'Global Payments',
    meta: {
      company: 'Global Payments',
      title: 'Global Payment Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/global-payments-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2442,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 860,
      logoHeight: 127,
      logoY: 343,
      logoViewBox: '0 0 172 25',
      logoSvg: GLOBAL_PAYMENTS_LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    layout: {
      scale: SCALE,
      nodes: {
        merchants_solutions: { x: 381, y: 574, width: 71, height: 335 },
        revenue: { x: 1003, y: 679, width: 71, height: 335 },
        operating_profit: { x: 1628, y: 534, width: 71, height: 36 },
        operating_expenses: { x: 1626, y: 819, width: 71, height: 298 },
        tax_benefit: { x: 2081, y: 376, width: 71, height: 4 },
        other: { x: 2078, y: 502, width: 71, height: 21 },
        net_profit: { x: 2248, y: 409, width: 71, height: 40 },
        interest: { x: 2248, y: 695, width: 71, height: 24 },
        sga: { x: 2248, y: 808, width: 71, height: 193 },
        cost_of_service: { x: 2248, y: 1122, width: 71, height: 98 },
        other_operating_expense: { x: 2248, y: 1341, width: 71, height: 4 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'merchants_solutions', col: 0, order: 0, type: 'source', label: ['Merchants', 'Solutions'], value: 1.896765, valueText: '$1.9B', notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.896765, valueText: '$1.9B', notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.21533, valueText: '$0.2B', notes: ['11% margin', '(11pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.681435, valueText: '($1.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 3, order: 0, type: 'profit', label: 'Tax benefit', value: 0.032625, valueText: '$32M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.113977, valueText: '$0.1B', color: GREEN, labelColor: GREEN_ALT_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.217524, valueText: '$0.2B', notes: ['12% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'cost', label: 'Interest', value: 0.144408, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 2, type: 'cost', label: 'SG&A', value: 1.091918, valueText: '($1.1B)', notes: ['58% of revenue', '+14pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_of_service', col: 4, order: 3, type: 'cost', label: 'Cost of service', value: 0.557343, valueText: '($0.6B)', notes: ['29% of revenue', '(12pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_expense', col: 4, order: 4, type: 'cost', label: 'Other', value: 0.032174, valueText: '$32M', color: RED, labelColor: RED_ALT_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'merchants_solutions', target: 'revenue', value: 1.896765, width: 335, sourceWidth: 340, targetWidth: 340, y0: 742, y1: 847, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 0.21533, width: 36, sourceWidth: 38, targetWidth: 40, y0: 696, y1: 553, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1.681435, width: 297, sourceWidth: 302, targetWidth: 302, y0: 866, y1: 968, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.070922, width: 11, sourceWidth: 12, targetWidth: 13, y0: 539, y1: 418.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.144408, width: 23, sourceWidth: 28, targetWidth: 28, y0: 559, y1: 707, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 0.032625, width: 3.5, sourceWidth: 7, targetWidth: 5, y0: 378.5, y1: 409.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 0.113977, width: 21, sourceWidth: 26, targetWidth: 25, y0: 512, y1: 437.5, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.091918, width: 193, sourceWidth: 195, targetWidth: 196, y0: 914.5, y1: 905, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'cost_of_service', value: 0.557343, width: 97.5, sourceWidth: 101, targetWidth: 101, y0: 1062.5, y1: 1171.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.032174, width: 4, sourceWidth: 6, targetWidth: 7, y0: 1116, y1: 1342.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Global Payments · 2025 财年第四季度',
        meta: {
          title: 'Global Payments 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        nodes: {
          merchants_solutions: { label: '商户解决方案', notes: ['同比 +6%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 (11 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '所得税收益' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 (5 个百分点)'] },
          interest: { label: '利息' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 58%', '同比 +14 个百分点'] },
          cost_of_service: { label: '服务成本', notes: ['占收入 29%', '同比 (12 个百分点)'] },
          other_operating_expense: { label: '其他' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* Verizon Q1 FY26 income statement ($B), measured from the Build Source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2488;

  const verizonWordmark = `
    <g data-typography-role="brand">
      <text x="1156" y="348" text-anchor="middle" fill="#000"
        font-family="Arial,Helvetica,sans-serif" font-size="146"
        font-weight="800" letter-spacing="-9">verizon</text>
      <path d="M1385 279 L1401 279 L1436 231 L1453 231 L1404 310 Z" fill="#e2231a"/>
    </g>`;

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2228.5"
      data-link-anchor-y="371.5">
      <path d="M2174 400 H2248 C2270 400 2260 343 2283 343"
        fill="none" stroke="${GREEN}" stroke-width="3"/>
      <text x="2212" y="448" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2212" y="488" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$0.5B</text>
    </g>`;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight ?? 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 10,
    lines,
  });

  const labels = (zh) => {
    const t = zh
      ? {
          service: '服务',
          wireless: ['无线', '设备'],
          other: '其他',
          consumer: '消费者',
          corporate: '公司及其他',
          mobility: ['移动与', '宽带服务'],
          business: '商业',
          revenue: '收入',
          gross: '毛利润',
          cost: ['收入', '成本'],
          operating: '营业利润',
          expenses: ['运营', '费用'],
          net: '净利润',
          interest: '利息',
          tax: '税费',
          sga: ['销售、一般及', '管理费用'],
          da: ['折旧与', '摊销'],
          serviceYoy: '同比 +2%',
          wirelessConsumerYoy: '同比 +6%',
          otherConsumerYoy: '同比 +7%',
          consumerYoy: '同比 +3%',
          corporateYoy: '同比 (2%)',
          mobilityYoy: '同比 (1%)',
          wirelessBusinessYoy: '同比 (1%)',
          otherBusinessYoy: '同比 +6%',
          businessYoy: '同比 +2%',
          revenueYoy: '同比 +3%',
          grossMargin: '利润率 60%',
          grossPp: '同比 (1 个百分点)',
          operatingMargin: '利润率 24%',
          operatingPp: '同比 +0 个百分点',
          netMargin: '利润率 15%',
          netPp: '同比 +0 个百分点',
        }
      : {
          service: 'Service',
          wireless: ['Wireless', 'Equipment'],
          other: 'Other',
          consumer: 'Consumer',
          corporate: 'Corporate',
          mobility: ['Mobility &', 'Broadband Service'],
          business: 'Business',
          revenue: 'Revenue',
          gross: 'Gross profit',
          cost: ['Cost of', 'revenue'],
          operating: 'Operating profit',
          expenses: ['Operating', 'expenses'],
          net: 'Net profit',
          interest: 'Interest',
          tax: 'Tax',
          sga: ['SG&A'],
          da: ['Depreciation &', 'Amortization'],
          serviceYoy: '+2% Y/Y',
          wirelessConsumerYoy: '+6% Y/Y',
          otherConsumerYoy: '+7% Y/Y',
          consumerYoy: '+3% Y/Y',
          corporateYoy: '(2%) Y/Y',
          mobilityYoy: '(1%) Y/Y',
          wirelessBusinessYoy: '(1%) Y/Y',
          otherBusinessYoy: '+6% Y/Y',
          businessYoy: '+2% Y/Y',
          revenueYoy: '+3% Y/Y',
          grossMargin: '60% margin',
          grossPp: '(1pp) Y/Y',
          operatingMargin: '24% margin',
          operatingPp: '+0pp Y/Y',
          netMargin: '15% margin',
          netPp: '+0pp Y/Y',
        };
    const amount = (top, note, x = 450) =>
      block(x, top, [line('$value', 39), line(note, 29, { color: NOTE })], { lineGap: 11 });
    const name = (top, rows, x = 220) =>
      block(x, top, rows.map((text) => line(text, 40, { weight: 800 })), { lineGap: 12 });
    const center = (x, top, rows, options = {}) => block(x, top, rows, options);
    const terminal = (top, rows) => block(RIGHT_LABEL_X, top, rows, { lineGap: 8 });
    return {
      service: { blocks: [amount(318, t.serviceYoy, 440), name(491, [t.service], 210)] },
      wireless_consumer: {
        blocks: [amount(629, t.wirelessConsumerYoy, 442), name(692, t.wireless, 212)],
      },
      other_consumer: {
        blocks: [amount(774, t.otherConsumerYoy, 444), name(855, [t.other], 214)],
      },
      consumer: {
        blocks: [center(824, 396, [
          line(t.consumer, 40, { weight: 800 }),
          line('$value', 39),
          line(t.consumerYoy, 29, { color: NOTE }),
        ], { lineGap: 11 })],
      },
      corporate: {
        blocks: [center(824, 810, [
          line(t.corporate, 40, { weight: 800 }),
          line('$value', 39),
          line(t.corporateYoy, 29, { color: NOTE }),
        ], { lineGap: 11 })],
      },
      mobility_broadband_service: {
        blocks: [amount(942, t.mobilityYoy), name(1006, t.mobility)],
      },
      wireless_business: {
        blocks: [amount(1102, t.wirelessBusinessYoy, 450), name(1148, t.wireless, 198)],
      },
      other_business: {
        blocks: [amount(1218, t.otherBusinessYoy, 437), name(1306, [t.other], 207)],
      },
      business: {
        blocks: [center(824, 1177, [
          line(t.business, 40, { weight: 800 }),
          line('$value', 39),
          line(t.businessYoy, 29, { color: NOTE }),
        ], { lineGap: 11 })],
      },
      revenue: {
        blocks: [center(1198, 493, [
          line(t.revenue, 40, { weight: 800 }),
          line('$value', 39),
          line(t.revenueYoy, 29, { color: NOTE }),
        ], { lineGap: 11 })],
      },
      gross_profit: {
        blocks: [center(1572, 353, [
          line(t.gross, 40, { weight: 800 }),
          line('$value', 39),
          line(t.grossMargin, 29, { color: NOTE }),
          line(t.grossPp, 29, { color: NOTE }),
        ], { lineGap: 10 })],
      },
      cost_of_revenue: {
        blocks: [center(1572, 1052, [
          ...t.cost.map((text) => line(text, 37, { weight: 800 })),
          line('$value', 37),
        ], { lineGap: 10 })],
      },
      operating_profit: {
        blocks: [center(1948, 248, [
          line(t.operating, 40, { weight: 800 }),
          line('$value', 39),
          line(t.operatingMargin, 29, { color: NOTE }),
          line(t.operatingPp, 29, { color: NOTE }),
        ], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [center(1948, 849, [
          ...t.expenses.map((text) => line(text, 38, { weight: 800 })),
          line('$value', 38),
        ], { lineGap: 10 })],
      },
      net_profit: {
        blocks: [terminal(267, [
          line(t.net, 40, { weight: 800 }),
          line('$value', 39),
          line(t.netMargin, 29, { color: NOTE }),
          line(t.netPp, 29, { color: NOTE }),
        ])],
      },
      interest: {
        blocks: [terminal(528, [line(t.interest, 32, { weight: 800 }), line('$value', 31)])],
      },
      tax: {
        blocks: [terminal(630, [line(t.tax, 32, { weight: 800 }), line('$value', 31)])],
      },
      sga: {
        blocks: [terminal(877, [...t.sga.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)])],
      },
      depreciation_amortization: {
        blocks: [terminal(1106, [...t.da.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)])],
      },
      other_income: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'verizon-q1-fy26',
    name: 'Verizon · Q1 FY26',
    company: 'Verizon',
    meta: {
      company: 'Verizon',
      title: 'Verizon Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/verizon-q1-fy26.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2195,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 10 },
    },
    annotationsSvg: `${verizonWordmark}${otherIncomeGuide(false)}`,
    layout: {
      routes: {
        other_income: { x: 2174, y: 400, width: 0, height: 1 },
      },
      nodes: {
        service: { x: 415, y: 425, width: 71, height: 180 },
        wireless_consumer: { x: 415, y: 719, width: 71, height: 44 },
        other_consumer: { x: 415, y: 871, width: 71, height: 21 },
        consumer: { x: 789, y: 538, width: 70, height: 249 },
        corporate: { x: 789, y: 952, width: 70, height: 2 },
        mobility_broadband_service: { x: 415, y: 1042, width: 71, height: 33 },
        wireless_business: { x: 415, y: 1192, width: 71, height: 6 },
        other_business: { x: 415, y: 1317, width: 71, height: 25 },
        business: { x: 789, y: 1084, width: 70, height: 69 },
        revenue: { x: 1162, y: 634, width: 71, height: 324 },
        gross_profit: { x: 1536, y: 533, width: 71, height: 195 },
        cost_of_revenue: { x: 1536, y: 908, width: 71, height: 127 },
        operating_profit: { x: 1910, y: 428, width: 71, height: 76 },
        operating_expenses: { x: 1910, y: 715, width: 71, height: 118 },
        net_profit: { x: 2283, y: 298, width: 71, height: 47 },
        interest: { x: 2283, y: 553, width: 71, height: 16 },
        tax: { x: 2283, y: 652, width: 71, height: 13 },
        sga: { x: 2283, y: 873, width: 71, height: 70 },
        depreciation_amortization: { x: 2283, y: 1137, width: 71, height: 45 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      {
        id: 'other_income',
        representation: 'flow',
        label: 'Other',
        value: 0.5,
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'service', type: 'source', label: 'Service', value: 19.2, notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wireless_consumer', type: 'source', label: ['Wireless', 'Equipment'], value: 4.8, notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_consumer', type: 'source', label: 'Other', value: 2.4, notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'consumer', type: 'hub', label: 'Consumer', value: 26.5, notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'corporate', type: 'source', label: 'Corporate', value: 0.6, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'mobility_broadband_service', type: 'source', label: ['Mobility &', 'Broadband Service'], value: 3.7, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wireless_business', type: 'source', label: ['Wireless', 'Equipment'], value: 0.9, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_business', type: 'source', label: 'Other', value: 2.9, notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'business', type: 'hub', label: 'Business', value: 7.4, notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 34.4, notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 20.8, notes: ['60% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', type: 'cost', label: ['Cost of', 'revenue'], value: 13.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 8.2, notes: ['24% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 12.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 5.1, notes: ['15% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', type: 'cost', label: 'Interest', value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', type: 'cost', label: 'Tax', value: 1.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', type: 'cost', label: 'SG&A', value: 7.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'Amortization'], value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'service', target: 'consumer', value: 19.2, sourceWidth: 180, targetWidth: 180, y0: 515, y1: 628, sourceOrder: 0, targetOrder: 0 },
      { source: 'wireless_consumer', target: 'consumer', value: 4.8, sourceWidth: 44, targetWidth: 45, y0: 741, y1: 740.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_consumer', target: 'consumer', value: 2.4, sourceWidth: 21, targetWidth: 24, y0: 881.5, y1: 775, sourceOrder: 0, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 26.5, sourceWidth: 249, targetWidth: 250, y0: 662.5, y1: 759, sourceOrder: 0, targetOrder: 0 },
      { source: 'corporate', target: 'revenue', value: 0.6, sourceWidth: 2, targetWidth: 4, y0: 953, y1: 886, sourceOrder: 0, targetOrder: 1 },
      { source: 'mobility_broadband_service', target: 'business', value: 3.7, sourceWidth: 33, targetWidth: 35, y0: 1058.5, y1: 1101.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'wireless_business', target: 'business', value: 0.9, sourceWidth: 6, targetWidth: 8, y0: 1195, y1: 1123, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_business', target: 'business', value: 2.9, sourceWidth: 25, targetWidth: 26, y0: 1329.5, y1: 1140, sourceOrder: 0, targetOrder: 2 },
      { source: 'business', target: 'revenue', value: 7.4, sourceWidth: 69, targetWidth: 70, y0: 1118.5, y1: 923, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 20.8, sourceWidth: 195, targetWidth: 195, y0: 731.5, y1: 630.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.7, sourceWidth: 129, targetWidth: 127, y0: 893.5, y1: 971.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 8.2, sourceWidth: 76, targetWidth: 76, y0: 571, y1: 466, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 12.5, sourceWidth: 118, targetWidth: 118, y0: 669, y1: 774, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 4.6, sourceWidth: 43, targetWidth: 47, y0: 449.5, y1: 321.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 1.9, sourceWidth: 18, targetWidth: 16, y0: 480, y1: 561, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.6, sourceWidth: 15, targetWidth: 13, y0: 496.5, y1: 658.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.5, sourceWidth: 3, targetWidth: 3, y0: 400, y1: 343.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 7.6, sourceWidth: 72, targetWidth: 70, y0: 751, y1: 908, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 5.0, sourceWidth: 46, targetWidth: 45, y0: 810, y1: 1159.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['verizon'],
      zh: {
        name: '威瑞森 · 2026 财年第一季度',
        meta: {
          title: '威瑞森 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1800,
        },
        annotationsSvg: `${verizonWordmark}${otherIncomeGuide(true)}`,
        nodes: {
          service: { label: '服务', notes: ['同比 +2%'] },
          wireless_consumer: { label: ['无线', '设备'], notes: ['同比 +6%'] },
          other_consumer: { label: '其他', notes: ['同比 +7%'] },
          consumer: { label: '消费者', notes: ['同比 +3%'] },
          corporate: { label: '公司及其他', notes: ['同比 (2%)'] },
          mobility_broadband_service: { label: ['移动与', '宽带服务'], notes: ['同比 (1%)'] },
          wireless_business: { label: ['无线', '设备'], notes: ['同比 (1%)'] },
          other_business: { label: '其他', notes: ['同比 +6%'] },
          business: { label: '商业', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 60%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 24%', '同比 +0 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +0 个百分点'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          sga: { label: ['销售、一般及', '管理费用'] },
          depreciation_amortization: { label: ['折旧与', '摊销'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

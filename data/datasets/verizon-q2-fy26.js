/* Verizon Q2 FY26 income statement ($B), measured from the Build Source. */
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
      data-link-anchor-x="2222"
      data-link-anchor-y="438.5">
      <path d="M2179 464 H2248 C2270 464 2260 417 2284 417"
        fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
      <text x="2222" y="509" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2222" y="552" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
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
    semanticRole: options.semanticRole,
    lineGap: options.lineGap ?? 10,
    lines,
  });

  const labels = (zh) => {
    const t = zh
      ? {
          mobility: ['移动与', '宽带服务'],
          wireless: ['无线', '设备'],
          other: '其他',
          consumer: '消费者',
          corporate: '公司及其他',
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
          mobilityConsumerYoy: '同比 +3%',
          wirelessConsumerYoy: '同比 (22%)',
          otherConsumerYoy: '同比 +7%',
          consumerYoy: '同比 (2%)',
          corporateYoy: '同比 (3%)',
          mobilityBusinessYoy: '同比 +0%',
          wirelessBusinessYoy: '同比 (5%)',
          otherBusinessYoy: '同比 +10%',
          businessYoy: '同比 +3%',
          revenueYoy: '同比 (1%)',
          grossMargin: '利润率 62%',
          grossPp: '同比 +2 个百分点',
          operatingMargin: '利润率 21%',
          operatingPp: '同比 (3 个百分点)',
          netMargin: '利润率 12%',
          netPp: '同比 (3 个百分点)',
        }
      : {
          mobility: ['Mobility &', 'Broadband Service'],
          wireless: ['Wireless', 'Equipment'],
          other: 'Other',
          consumer: 'Consumer',
          corporate: 'Corporate',
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
          mobilityConsumerYoy: '+3% Y/Y',
          wirelessConsumerYoy: '(22%) Y/Y',
          otherConsumerYoy: '+7% Y/Y',
          consumerYoy: '(2%) Y/Y',
          corporateYoy: '(3%) Y/Y',
          mobilityBusinessYoy: '+0% Y/Y',
          wirelessBusinessYoy: '(5%) Y/Y',
          otherBusinessYoy: '+10% Y/Y',
          businessYoy: '+3% Y/Y',
          revenueYoy: '(1%) Y/Y',
          grossMargin: '62% margin',
          grossPp: '+2pp Y/Y',
          operatingMargin: '21% margin',
          operatingPp: '(3pp) Y/Y',
          netMargin: '12% margin',
          netPp: '(3pp) Y/Y',
        };
    const amount = (top, note, x = 450) =>
      block(x, top, [line('$value', 39), line(note, 29, { color: NOTE })], { lineGap: 11 });
    const name = (top, rows, x = 220) =>
      block(x, top, rows.map((text) => line(text, 40, { weight: 800 })), {
        lineGap: 12,
        semanticRole: 'grouped-side-label',
      });
    const center = (x, top, rows, options = {}) => block(x, top, rows, options);
    const terminal = (top, rows) => block(RIGHT_LABEL_X, top, rows, { lineGap: 8 });
    return {
      mobility_broadband_consumer: {
        blocks: [amount(331, t.mobilityConsumerYoy, 450), name(464, t.mobility, 207)],
      },
      wireless_consumer: {
        blocks: [amount(617, t.wirelessConsumerYoy), name(686, t.wireless, 200)],
      },
      other_consumer: {
        blocks: [amount(768, t.otherConsumerYoy), name(853, [t.other], 214)],
      },
      consumer: {
        blocks: [center(824, 402, [
          line(t.consumer, 40, { weight: 800 }),
          line('$value', 39),
          line(t.consumerYoy, 29, { color: NOTE }),
        ], { lineGap: 11 })],
      },
      corporate: {
        blocks: [center(824, 818, [
          line(t.corporate, 40, { weight: 800 }),
          line('$value', 39),
          line(t.corporateYoy, 29, { color: NOTE }),
        ], { lineGap: 11 })],
      },
      mobility_broadband_business: {
        blocks: [amount(922, t.mobilityBusinessYoy, 454), name(976, t.mobility, 207)],
      },
      wireless_business: {
        blocks: [amount(1068, t.wirelessBusinessYoy, 454), name(1110, t.wireless, 195)],
      },
      other_business: {
        blocks: [amount(1185, t.otherBusinessYoy, 448), name(1270, [t.other], 207)],
      },
      business: {
        blocks: [center(824, 1169, [
          line(t.business, 40, { weight: 800 }),
          line('$value', 39),
          line(t.businessYoy, 29, { color: NOTE }),
        ], { lineGap: 11 })],
      },
      revenue: {
        blocks: [center(1198, 489, [
          line(t.revenue, 40, { weight: 800 }),
          line('$value', 39),
          line(t.revenueYoy, 29, { color: NOTE }),
        ], { lineGap: 11 })],
      },
      gross_profit: {
        blocks: [center(1572, 364, [
          line(t.gross, 40, { weight: 800 }),
          line('$value', 39),
          line(t.grossMargin, 29, { color: NOTE }),
          line(t.grossPp, 29, { color: NOTE }),
        ], { lineGap: 10 })],
      },
      cost_of_revenue: {
        blocks: [center(1572, 1047, [
          ...t.cost.map((text) => line(text, 37, { weight: 800 })),
          line('$value', 37),
        ], { lineGap: 10 })],
      },
      operating_profit: {
        blocks: [center(1959, 282, [
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
        blocks: [terminal(342, [
          line(t.net, 40, { weight: 800 }),
          line('$value', 39),
          line(t.netMargin, 29, { color: NOTE }),
          line(t.netPp, 29, { color: NOTE }),
        ])],
      },
      interest: {
        blocks: [terminal(573, [line(t.interest, 32, { weight: 800 }), line('$value', 31)])],
      },
      tax: {
        blocks: [terminal(678, [line(t.tax, 32, { weight: 800 }), line('$value', 31)])],
      },
      sga: {
        blocks: [terminal(807, [...t.sga.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)])],
      },
      depreciation_amortization: {
        blocks: [terminal(1025, [...t.da.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)])],
      },
      other_income: { blocks: [] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'verizon-q2-fy26',
    name: 'Verizon · Q2 FY26',
    company: 'Verizon',
    meta: {
      company: 'Verizon',
      title: 'Verizon Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/verizon-q2-fy26.png',
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
        other_income: { x: 2179, y: 464, width: 0, height: 1 },
      },
      nodes: {
        mobility_broadband_consumer: { x: 416, y: 433, width: 71, height: 166 },
        wireless_consumer: { x: 416, y: 719, width: 71, height: 34 },
        other_consumer: { x: 416, y: 868, width: 71, height: 18 },
        consumer: { x: 790, y: 548, width: 70, height: 223 },
        corporate: { x: 790, y: 963, width: 70, height: 5 },
        mobility_broadband_business: { x: 416, y: 1023, width: 71, height: 30 },
        wireless_business: { x: 416, y: 1173, width: 71, height: 5 },
        other_business: { x: 416, y: 1286, width: 71, height: 20 },
        business: { x: 790, y: 1088, width: 70, height: 59 },
        revenue: { x: 1164, y: 633, width: 70, height: 291 },
        gross_profit: { x: 1537, y: 544, width: 71, height: 179 },
        cost_of_revenue: { x: 1537, y: 918, width: 71, height: 110 },
        operating_profit: { x: 1911, y: 465, width: 71, height: 59 },
        operating_expenses: { x: 1911, y: 717, width: 71, height: 117 },
        net_profit: { x: 2284, y: 385, width: 71, height: 32 },
        interest: { x: 2284, y: 593, width: 71, height: 15 },
        tax: { x: 2284, y: 702, width: 71, height: 8 },
        sga: { x: 2284, y: 802, width: 71, height: 74 },
        depreciation_amortization: { x: 2284, y: 1042, width: 71, height: 40 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [
      {
        id: 'other_income',
        representation: 'flow',
        label: 'Other',
        value: 0.1,
        type: 'profit',
        labelColor: GREEN_LABEL,
      },
    ],
    nodes: [
      { id: 'mobility_broadband_consumer', type: 'source', label: ['Mobility &', 'Broadband Service'], value: 19.6, notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wireless_consumer', type: 'source', label: ['Wireless', 'Equipment'], value: 4.2, notes: ['(22%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_consumer', type: 'source', label: 'Other', value: 2.4, notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'consumer', type: 'hub', label: 'Consumer', value: 26.2, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'corporate', type: 'source', label: 'Corporate', value: 0.9, notes: ['(3%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'mobility_broadband_business', type: 'source', label: ['Mobility &', 'Broadband Service'], value: 3.7, notes: ['+0% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wireless_business', type: 'source', label: ['Wireless', 'Equipment'], value: 0.8, notes: ['(5%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_business', type: 'source', label: 'Other', value: 2.6, notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'business', type: 'hub', label: 'Business', value: 7.2, notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 34.3, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 21.1, notes: ['62% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', type: 'cost', label: ['Cost of', 'revenue'], value: 13.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 7.2, notes: ['21% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 14.0, valueText: '($14.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 3.9, notes: ['12% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', type: 'cost', label: 'Interest', value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', type: 'cost', label: 'Tax', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', type: 'cost', label: 'SG&A', value: 9.0, valueText: '($9.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'Amortization'], value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'mobility_broadband_consumer', target: 'consumer', value: 19.6, sourceWidth: 166, targetWidth: 166, y0: 516, y1: 631, sourceOrder: 0, targetOrder: 0 },
      { source: 'wireless_consumer', target: 'consumer', value: 4.2, sourceWidth: 34, targetWidth: 35, y0: 736, y1: 731.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_consumer', target: 'consumer', value: 2.4, sourceWidth: 18, targetWidth: 22, y0: 877, y1: 760, sourceOrder: 0, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 26.2, sourceWidth: 223, targetWidth: 223, y0: 659.5, y1: 744.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'corporate', target: 'revenue', value: 0.9, sourceWidth: 5, targetWidth: 7, y0: 965.5, y1: 859.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'mobility_broadband_business', target: 'business', value: 3.7, sourceWidth: 30, targetWidth: 31, y0: 1038, y1: 1103.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'wireless_business', target: 'business', value: 0.8, sourceWidth: 5, targetWidth: 7, y0: 1175.5, y1: 1122.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_business', target: 'business', value: 2.6, sourceWidth: 20, targetWidth: 21, y0: 1296, y1: 1136.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'business', target: 'revenue', value: 7.2, sourceWidth: 59, targetWidth: 61, y0: 1117.5, y1: 893.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 21.1, sourceWidth: 179, targetWidth: 179, y0: 722.5, y1: 633.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.1, sourceWidth: 112, targetWidth: 110, y0: 868, y1: 973, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 7.2, sourceWidth: 60, targetWidth: 59, y0: 574, y1: 494.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.0, sourceWidth: 118, targetWidth: 117, y0: 664, y1: 775.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 3.8, sourceWidth: 30, targetWidth: 32, y0: 480, y1: 401, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 2.0, sourceWidth: 17, targetWidth: 15, y0: 503.5, y1: 600.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.3, sourceWidth: 12, targetWidth: 8, y0: 518, y1: 706, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 464, y1: 415.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 9.0, sourceWidth: 75, targetWidth: 74, y0: 754.5, y1: 839, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 5.0, sourceWidth: 42, targetWidth: 40, y0: 813, y1: 1062, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['verizon'],
      zh: {
        name: '威瑞森 · 2026 财年第二季度',
        meta: {
          title: '威瑞森 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleSize: 112,
          titleTextLength: 1800,
        },
        annotationsSvg: `${verizonWordmark}${otherIncomeGuide(true)}`,
        nodes: {
          mobility_broadband_consumer: { label: ['移动与', '宽带服务'], notes: ['同比 +3%'] },
          wireless_consumer: { label: ['无线', '设备'], notes: ['同比 (22%)'] },
          other_consumer: { label: '其他', notes: ['同比 +7%'] },
          consumer: { label: '消费者', notes: ['同比 (2%)'] },
          corporate: { label: '公司及其他', notes: ['同比 (3%)'] },
          mobility_broadband_business: { label: ['移动与', '宽带服务'], notes: ['同比 +0%'] },
          wireless_business: { label: ['无线', '设备'], notes: ['同比 (5%)'] },
          other_business: { label: '其他', notes: ['同比 +10%'] },
          business: { label: '商业', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 62%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 21%', '同比 (3 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 (3 个百分点)'] },
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

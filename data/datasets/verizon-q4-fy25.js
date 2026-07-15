/* Verizon Q4 FY25 income statement ($B), measured from the active source claim. */
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
      <text x="1248" y="348" text-anchor="middle" fill="#000" font-family="Arial,Helvetica,sans-serif" font-size="146" font-weight="800" letter-spacing="-9">verizon</text>
      <path d="M1385 279 L1401 279 L1436 231 L1453 231 L1404 310 Z" fill="#e2231a"/>
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
          service: '服务', wireless: ['无线', '设备'], other: '其他', consumer: '消费者', corporate: '公司及其他', enterprise: ['企业及', '公共部门'], markets: ['商业市场', '及 SaaS'], wholesale: '批发', business: '商业', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['运营', '费用'], net: '净利润', interest: '利息', tax: '税费', sga: ['销售、一般及', '管理费用'], da: ['折旧与', '摊销'],
          serviceYoy: '同比 +1%', equipmentYoy: '同比 +10%', otherYoy: '同比 +7%', consumerYoy: '同比 +3%', corporateYoy: '同比 (6%)', enterpriseYoy: '同比 (6%)', marketsYoy: '同比 +6%', wholesaleYoy: '同比 (10%)', businessYoy: '同比 (2%)', revenueYoy: '同比 +2%', grossMargin: '利润率 55%', grossPp: '同比 (2 个百分点)', operatingMargin: '利润率 14%', operatingPp: '同比 (7 个百分点)', netMargin: '利润率 7%', netPp: '同比 (8 个百分点)',
        }
      : {
          service: 'Service', wireless: ['Wireless', 'Equipment'], other: 'Other', consumer: 'Consumer', corporate: 'Corporate', enterprise: ['Enterprise &', 'Public Sector'], markets: ['Business Markets', '& SaaS'], wholesale: 'Wholesale', business: 'Business', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', interest: 'Interest', tax: 'Tax', sga: ['SG&A'], da: ['Depreciation &', 'Amortization'],
          serviceYoy: '+1% Y/Y', equipmentYoy: '+10% Y/Y', otherYoy: '+7% Y/Y', consumerYoy: '+3% Y/Y', corporateYoy: '(6%) Y/Y', enterpriseYoy: '(6%) Y/Y', marketsYoy: '+6% Y/Y', wholesaleYoy: '(10%) Y/Y', businessYoy: '(2%) Y/Y', revenueYoy: '+2% Y/Y', grossMargin: '55% margin', grossPp: '(2pp) Y/Y', operatingMargin: '14% margin', operatingPp: '(7pp) Y/Y', netMargin: '7% margin', netPp: '(8pp) Y/Y',
        };
    const amount = (x, top, note) => block(x, top, [line('$value', 39), line(note, 29, { color: NOTE })], { lineGap: 11 });
    const center = (x, top, rows, options = {}) => block(x, top, rows, options);
    const terminal = (top, rows) => block(RIGHT_LABEL_X, top, rows, { lineGap: 8 });
    return {
      service: { blocks: [amount(450, 306, t.serviceYoy), center(220, 467, [line(t.service, 40, { weight: 800 })])] },
      wireless_equipment: { blocks: [amount(450, 604, t.equipmentYoy), center(220, 684, t.wireless.map((text) => line(text, 40, { weight: 800 })), { lineGap: 12 })] },
      other_consumer: { blocks: [amount(450, 787, t.otherYoy), center(220, 871, [line(t.other, 40, { weight: 800 })])] },
      consumer: { blocks: [center(824, 390, [line(t.consumer, 40, { weight: 800 }), line('$value', 39), line(t.consumerYoy, 29, { color: NOTE })], { lineGap: 11 })] },
      corporate: { blocks: [center(824, 814, [line(t.corporate, 40, { weight: 800 }), line('$value', 39), line(t.corporateYoy, 29, { color: NOTE })], { lineGap: 11 })] },
      enterprise_public_sector: { blocks: [amount(451, 936, t.enterpriseYoy), center(221, 1000, t.enterprise.map((text) => line(text, 40, { weight: 800 })), { lineGap: 12 })] },
      business_markets_saas: { blocks: [amount(450, 1081, t.marketsYoy), center(220, 1144, t.markets.map((text) => line(text, 40, { weight: 800 })), { lineGap: 12 })] },
      wholesale: { blocks: [amount(450, 1223, t.wholesaleYoy), center(220, 1308, [line(t.wholesale, 40, { weight: 800 })])] },
      business: { blocks: [center(824, 1185, [line(t.business, 40, { weight: 800 }), line('$value', 39), line(t.businessYoy, 29, { color: NOTE })], { lineGap: 11 })] },
      revenue: { blocks: [center(1198, 478, [line(t.revenue, 40, { weight: 800 }), line('$value', 39), line(t.revenueYoy, 29, { color: NOTE })], { lineGap: 11 })] },
      gross_profit: { blocks: [center(1572, 350, [line(t.gross, 40, { weight: 800 }), line('$value', 39), line(t.grossMargin, 29, { color: NOTE }), line(t.grossPp, 29, { color: NOTE })], { lineGap: 10 })] },
      cost_of_revenue: { blocks: [center(1572, 1027, [...t.cost.map((text) => line(text, 37, { weight: 800 })), line('$value', 37)], { lineGap: 10 })] },
      operating_profit: { blocks: [center(1948, 259, [line(t.operating, 40, { weight: 800 }), line('$value', 39), line(t.operatingMargin, 29, { color: NOTE }), line(t.operatingPp, 29, { color: NOTE })], { lineGap: 10 })] },
      operating_expenses: { blocks: [center(1948, 815, [...t.expenses.map((text) => line(text, 38, { weight: 800 })), line('$value', 38)], { lineGap: 10 })] },
      net_profit: { blocks: [terminal(309, [line(t.net, 40, { weight: 800 }), line('$value', 39), line(t.netMargin, 29, { color: NOTE }), line(t.netPp, 29, { color: NOTE })])] },
      interest: { blocks: [terminal(561, [line(t.interest, 32, { weight: 800 }), line('$value', 31)])] },
      tax: { blocks: [terminal(657, [line(t.tax, 32, { weight: 800 }), line('$value', 31)])] },
      other: { blocks: [terminal(748, [line(t.other, 32, { weight: 800 }), line('$value', 31)])] },
      sga: { blocks: [terminal(901, [...t.sga.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)])] },
      depreciation_amortization: { blocks: [terminal(1112, [...t.da.map((text) => line(text, 32, { weight: 800 })), line('$value', 31)])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'verizon-q4-fy25',
    name: 'Verizon · Q4 FY25',
    company: 'Verizon',
    meta: {
      company: 'Verizon',
      title: 'Verizon Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/verizon-q4-fy25.png', width: 2667, height: 1500 },
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
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 10 },
    },
    annotationsSvg: verizonWordmark,
    layout: {
      nodes: {
        service: { x: 415, y: 406, width: 71, height: 172 },
        wireless_equipment: { x: 415, y: 704, width: 71, height: 59 },
        other_consumer: { x: 415, y: 888, width: 71, height: 6 },
        consumer: { x: 789, y: 533, width: 70, height: 241 },
        corporate: { x: 789, y: 956, width: 70, height: 3 },
        enterprise_public_sector: { x: 415, y: 1037, width: 71, height: 26 },
        business_markets_saas: { x: 415, y: 1181, width: 71, height: 27 },
        wholesale: { x: 415, y: 1323, width: 71, height: 7 },
        business: { x: 789, y: 1098, width: 70, height: 62 },
        revenue: { x: 1163, y: 620, width: 70, height: 309 },
        gross_profit: { x: 1536, y: 529, width: 71, height: 169 },
        cost_of_revenue: { x: 1536, y: 864, width: 71, height: 140 },
        operating_profit: { x: 1910, y: 439, width: 71, height: 41 },
        operating_expenses: { x: 1910, y: 667, width: 71, height: 126 },
        net_profit: { x: 2283, y: 355, width: 71, height: 19 },
        interest: { x: 2283, y: 588, width: 71, height: 12 },
        tax: { x: 2283, y: 692, width: 71, height: 2 },
        other: { x: 2283, y: 778, width: 71, height: 4 },
        sga: { x: 2283, y: 891, width: 71, height: 86 },
        depreciation_amortization: { x: 2283, y: 1150, width: 71, height: 36 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'service', col: 0, order: 0, type: 'source', label: 'Service', value: 20.2, notes: ['+1% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wireless_equipment', col: 0, order: 1, type: 'source', label: ['Wireless', 'Equipment'], value: 7.1, notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_consumer', col: 0, order: 2, type: 'source', label: 'Other', value: 1.1, notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'consumer', col: 1, order: 0, type: 'hub', label: 'Consumer', value: 28.4, notes: ['+3% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'corporate', col: 1, order: 1, type: 'source', label: 'Corporate', value: 0.6, notes: ['(6%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'enterprise_public_sector', col: 0, order: 3, type: 'source', label: ['Enterprise &', 'Public Sector'], value: 3.3, notes: ['(6%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'business_markets_saas', col: 0, order: 4, type: 'source', label: ['Business Markets', '& SaaS'], value: 3.6, notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wholesale', col: 0, order: 5, type: 'source', label: 'Wholesale', value: 0.5, notes: ['(10%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'business', col: 1, order: 2, type: 'hub', label: 'Business', value: 7.4, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 36.4, notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 19.9, notes: ['55% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 16.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.0, valueText: '$5.0B', notes: ['14% margin', '(7pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.4, notes: ['7% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 1.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 3, type: 'cost', label: 'Other', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 10.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 5, order: 5, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 4.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'service', target: 'consumer', value: 20.2, sourceWidth: 172, targetWidth: 172, y0: 492, y1: 619, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'wireless_equipment', target: 'consumer', value: 7.1, sourceWidth: 59, targetWidth: 59, y0: 733.5, y1: 734.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'other_consumer', target: 'consumer', value: 1.1, sourceWidth: 6, targetWidth: 10, y0: 891, y1: 769, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'consumer', target: 'revenue', value: 28.4, sourceWidth: 241, targetWidth: 241, y0: 653.5, y1: 740.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'corporate', target: 'revenue', value: 0.6, sourceWidth: 3, targetWidth: 6, y0: 957.5, y1: 926, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'enterprise_public_sector', target: 'business', value: 3.3, sourceWidth: 26, targetWidth: 26, y0: 1050, y1: 1111, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'business_markets_saas', target: 'business', value: 3.6, sourceWidth: 27, targetWidth: 27, y0: 1194.5, y1: 1137.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'wholesale', target: 'business', value: 0.5, sourceWidth: 7, targetWidth: 9, y0: 1326.5, y1: 1155.5, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'business', target: 'revenue', value: 7.4, sourceWidth: 62, targetWidth: 62, y0: 1129, y1: 892, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 19.9, sourceWidth: 169, targetWidth: 169, y0: 704.5, y1: 613.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 16.5, sourceWidth: 140, targetWidth: 140, y0: 859, y1: 934, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 5.0, sourceWidth: 41, targetWidth: 41, y0: 549.5, y1: 459.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.9, sourceWidth: 128, targetWidth: 126, y0: 634, y1: 730, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.4, sourceWidth: 19, targetWidth: 19, y0: 448.5, y1: 364.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 1.8, sourceWidth: 12, targetWidth: 12, y0: 464, y1: 594, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 2, targetWidth: 2, y0: 471, y1: 693, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 0.2, sourceWidth: 8, targetWidth: 4, y0: 476, y1: 780, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 10.4, sourceWidth: 90, targetWidth: 86, y0: 712, y1: 934, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 4.5, sourceWidth: 36, targetWidth: 36, y0: 775, y1: 1168, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['verizon'],
      zh: {
        name: '威瑞森 · 2025 财年第四季度',
        meta: {
          title: '威瑞森 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1800,
        },
        nodes: {
          service: { label: '服务', notes: ['同比 +1%'] },
          wireless_equipment: { label: ['无线', '设备'], notes: ['同比 +10%'] },
          other_consumer: { label: '其他', notes: ['同比 +7%'] },
          consumer: { label: '消费者', notes: ['同比 +3%'] },
          corporate: { label: '公司及其他', notes: ['同比 (6%)'] },
          enterprise_public_sector: { label: ['企业及', '公共部门'], notes: ['同比 (6%)'] },
          business_markets_saas: { label: ['商业市场', '及 SaaS'], notes: ['同比 +6%'] },
          wholesale: { label: '批发', notes: ['同比 (10%)'] },
          business: { label: '商业', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 (7 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 (8 个百分点)'] },
          interest: { label: '利息' }, tax: { label: '税费' }, other: { label: '其他' },
          sga: { label: ['销售、一般及', '管理费用'] },
          depreciation_amortization: { label: ['折旧与', '摊销'] },
        },
        layout: { labels: labels(true) },
        annotationsSvg: verizonWordmark,
      },
    },
  });
})();

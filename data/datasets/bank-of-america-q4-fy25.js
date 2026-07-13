/* Bank of America Q4 FY25 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#0b3f91';
  const BLUE_LABEL = '#083b8d';
  const BLUE_LINK = '#859fc6';
  const GREEN = '#26a321';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9acd99';
  const RED = '#d40000';
  const RED_LABEL = '#9d1604';
  const RED_LINK = '#df8585';
  const RIGHT_LABEL_X = 2366;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const bofaLogo = [
    '<g transform="translate(6,2)">',
    '<path d="M28 89 L121 38 L202 65 L111 115 Z" fill="#073b89"/>',
    '<path d="M67 111 L158 60 L238 87 L149 137 Z" fill="#073b89"/>',
    '<path d="M130 28 L215 0 L285 23 L199 52 Z" fill="#ef001b"/>',
    '<path d="M87 62 L178 31 L254 57 L163 88 Z" fill="#ef001b"/>',
    '<path d="M121 106 L218 53 L302 82 L205 136 Z" fill="#ef001b"/>',
    '<path d="M160 148 L261 94 L345 123 L248 178 Z" fill="#ef001b"/>',
    '</g>',
  ].join('');

  const annotations = (zh) => [
    '<g font-family="Noto Sans,Arial,sans-serif">',
    '<text x="97" y="245" font-size="39" font-weight="800" fill="', TITLE, '">', zh ? '按业务分部' : 'By Business Segment', '</text>',
    '<g fill="', BLUE, '">',
    '<rect x="34" y="1208" width="373" height="153" rx="29"/>',
    '<rect x="414" y="1208" width="430" height="153" rx="29"/>',
    '<rect x="852" y="1208" width="235" height="153" rx="29"/>',
    '</g>',
    '<g text-anchor="middle" fill="#ffffff">',
    '<text x="220" y="1260" font-size="30" font-weight="800">', zh ? '平均存款' : 'Average deposits', '</text>',
    '<text x="220" y="1299" font-size="29" font-weight="400">$2.01T</text>',
    '<text x="220" y="1331" font-size="22" font-weight="400">', zh ? '同比 +3% / 环比 +1%' : '+3% Y/Y &amp; +1% Q/Q', '</text>',
    '<text x="629" y="1260" font-size="30" font-weight="800">', zh ? '平均贷款与租赁' : 'Average loans and leases', '</text>',
    '<text x="629" y="1299" font-size="29" font-weight="400">$1.17T</text>',
    '<text x="629" y="1331" font-size="22" font-weight="400">', zh ? '同比 +8% / 环比 +2%' : '+8% Y/Y &amp; +2% Q/Q', '</text>',
    '<text x="970" y="1260" font-size="30" font-weight="800">CET1 ', zh ? '比率' : 'ratio', '</text>',
    '<text x="970" y="1299" font-size="29" font-weight="400">11.4%</text>',
    '<text x="970" y="1331" font-size="22" font-weight="400">', zh ? '环比 (0.5 个百分点)' : '(0.5pp) Q/Q', '</text>',
    '</g></g>',
  ].join('');

  const labels = (zh) => ({
    consumer_banking: { blocks: [
      block(365, 388, [line(zh ? '消费者' : 'Consumer', 40, 800), line(zh ? '银行' : 'Banking', 40, 800), line(zh ? '净利率 29%' : '29% net margin', 28, 400, NOTE)], 'end', 10),
      block(421, 302, [line('$value', 39, 400), line(zh ? '同比 +5%' : '+5% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    global_wealth_investment_management: { blocks: [
      block(357, 641, [line(zh ? '全球财富与' : 'Global Wealth &', 39, 800), line(zh ? '投资管理' : 'Investment', 39, 800), line(zh ? '净利率 21%' : '21% net margin', 28, 400, NOTE)], 'end', 10),
      block(413, 566, [line('$value', 39, 400), line(zh ? '同比 +10%' : '+10% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    global_banking: { blocks: [
      block(365, 878, [line(zh ? '全球银行' : 'Global Banking', 40, 800), line(zh ? '净利率 33%' : '33% net margin', 28, 400, NOTE)], 'end', 10),
      block(421, 790, [line('$value', 39, 400), line(zh ? '同比 +2%' : '+2% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    global_markets: { blocks: [
      block(365, 1084, [line(zh ? '全球市场' : 'Global Markets', 40, 800), line(zh ? '净利率 19%' : '19% net margin', 28, 400, NOTE)], 'end', 10),
      block(421, 996, [line('$value', 39, 400), line(zh ? '同比 +10%' : '+10% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    segment_revenue: { blocks: [] },
    revenue: { blocks: [
      block(1355, 470, [line(zh ? '收入' : 'Revenue', 41, 800), line(zh ? '（扣除利息支出）' : '(net of interest expenses)', zh ? 29 : 33, 800), line('$value', 39, 400), line(zh ? '同比 +7%' : '+7% Y/Y', 28, 400, NOTE)], 'middle', 10),
    ] },
    all_other: { blocks: [
      block(1355, 1078, [line(zh ? '其他' : 'All Other', 36, 800, RED_LABEL), line(zh ? '（非利息亏损）' : '(noninterest loss)', 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    pretax_income: { blocks: [
      block(1819, 438, [line(zh ? '税前利润' : 'Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10),
    ] },
    noninterest_expenses: { blocks: [
      block(1819, 1058, [line(zh ? '非利息' : 'Noninterest', 37, 800, RED_LABEL), line(zh ? '费用' : 'expenses', 37, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    operating_expenses: { blocks: [
      block(1819, 1244, [line(zh ? '信用损失' : 'Provision for', 35, 800, RED_LABEL), line(zh ? '拨备' : 'credit losses', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 'middle', 8),
    ] },
    net_income: { blocks: [
      block(2364, 249, [line(zh ? '净利润' : 'Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '同比 +12%' : '+12% Y/Y', 28, 400, NOTE)], 'start', 10),
    ] },
    tax: { blocks: [block(2431, 445, [line(zh ? '税费' : 'Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'start', 8)] },
    compensation_benefits: { blocks: [block(2368, 580, [line(zh ? '薪酬' : 'Compensation', 30, 800, RED_LABEL), line(zh ? '与福利' : '& benefits', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    occupancy: { blocks: [block(2401, 743, [line(zh ? '场地占用' : 'Occupancy', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    information_processing: { blocks: [block(2394, 837, [line(zh ? '信息处理' : 'Information', 30, 800, RED_LABEL), line(zh ? '处理' : 'processing', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    product_delivery: { blocks: [block(RIGHT_LABEL_X, 976, [line(zh ? '产品交付' : 'Product delivery', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    professional_fees: { blocks: [block(2362, 1092, [line(zh ? '专业费用' : 'Professional fees', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    marketing: { blocks: [block(2353, 1214, [line(zh ? '市场营销（$0.6B）' : 'Marketing ($0.6B)', 30, 800, RED_LABEL)], 'start', 8)] },
    other_expenses: { blocks: [block(2384, 1320, [line(zh ? '其他（$0.8B）' : 'Other ($0.8B)', 30, 800, RED_LABEL)], 'start', 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'bank-of-america-q4-fy25',
    name: 'Bank of America · Q4 FY25',
    company: 'Bank of America',
    meta: {
      company: 'Bank of America',
      title: 'Bank of America Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/bank-of-america-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 116,
      titleWeight: 800,
      titleTextLength: 2502,
      hidePeriodStamp: true,
      logoWidth: 380,
      logoHeight: 205,
      logoY: 285,
      logoViewBox: '0 0 380 205',
      logoSvg: bofaLogo,
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
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 10.35,
      nodes: {
        consumer_banking: { x: 385, y: 392, width: 73, height: 116 },
        global_wealth_investment_management: { x: 385, y: 657, width: 73, height: 68 },
        global_banking: { x: 385, y: 880, width: 73, height: 64 },
        global_markets: { x: 385, y: 1085, width: 73, height: 55 },
        segment_revenue: { x: 851, y: 541, width: 73, height: 304 },
        revenue: { x: 1319, y: 655, width: 73, height: 293 },
        all_other: { x: 1319, y: 1045, width: 73, height: 10 },
        pretax_income: { x: 1786, y: 542, width: 73, height: 100 },
        noninterest_expenses: { x: 1786, y: 855, width: 73, height: 181 },
        operating_expenses: { x: 1786, y: 1207, width: 73, height: 14 },
        net_income: { x: 2252, y: 278, width: 74, height: 79 },
        tax: { x: 2252, y: 468, width: 74, height: 21 },
        compensation_benefits: { x: 2252, y: 583, width: 74, height: 110 },
        occupancy: { x: 2252, y: 769, width: 74, height: 20 },
        information_processing: { x: 2252, y: 880, width: 74, height: 20 },
        product_delivery: { x: 2252, y: 1000, width: 74, height: 10 },
        professional_fees: { x: 2252, y: 1118, width: 74, height: 7 },
        marketing: { x: 2252, y: 1225, width: 74, height: 6 },
        other_expenses: { x: 2252, y: 1330, width: 74, height: 8 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'consumer_banking', col: 0, order: 0, type: 'source', label: ['Consumer', 'Banking'], value: 11.2, notes: ['+5% Y/Y', '29% net margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'global_wealth_investment_management', col: 0, order: 1, type: 'source', label: ['Global Wealth &', 'Investment Management'], value: 6.6, notes: ['+10% Y/Y', '21% net margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'global_banking', col: 0, order: 2, type: 'source', label: 'Global Banking', value: 6.2, notes: ['+2% Y/Y', '33% net margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'global_markets', col: 0, order: 3, type: 'source', label: 'Global Markets', value: 5.3, notes: ['+10% Y/Y', '19% net margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 29.3, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 28.4, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'all_other', col: 2, order: 1, type: 'cost', label: ['All Other', '(noninterest loss)'], value: -1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 9.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'noninterest_expenses', col: 3, order: 1, type: 'cost', label: ['Noninterest', 'expenses'], value: 17.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Provision for', 'credit losses'], value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 7.6, notes: ['+12% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation_benefits', col: 4, order: 2, type: 'cost', label: ['Compensation', '& benefits'], value: 10.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'occupancy', col: 4, order: 3, type: 'cost', label: 'Occupancy', value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'information_processing', col: 4, order: 4, type: 'cost', label: ['Information', 'processing'], value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_delivery', col: 4, order: 5, type: 'cost', label: 'Product delivery', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_fees', col: 4, order: 6, type: 'cost', label: 'Professional fees', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 4, order: 7, type: 'cost', label: 'Marketing', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 8, type: 'cost', label: 'Other', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'consumer_banking', target: 'segment_revenue', value: 11.2, width: 116, sourceOrder: 0, targetOrder: 0 },
      { source: 'global_wealth_investment_management', target: 'segment_revenue', value: 6.6, width: 68, sourceOrder: 0, targetOrder: 1 },
      { source: 'global_banking', target: 'segment_revenue', value: 6.2, width: 64, sourceOrder: 0, targetOrder: 2 },
      { source: 'global_markets', target: 'segment_revenue', value: 5.3, width: 55, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_revenue', target: 'revenue', value: 28.4, width: 295, sourceWidth: 295, targetWidth: 293, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_revenue', target: 'all_other', value: 1.0, width: 10, sourceWidth: 9, targetWidth: 10, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'pretax_income', value: 9.6, width: 100, sourceWidth: 99, targetWidth: 100, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'noninterest_expenses', value: 17.4, width: 181, sourceWidth: 180, targetWidth: 181, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1.3, width: 14, sourceWidth: 14, targetWidth: 14, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 7.6, width: 79, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 2.0, width: 21, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'compensation_benefits', value: 10.6, width: 110, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'occupancy', value: 1.9, width: 20, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'information_processing', value: 1.9, width: 20, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'product_delivery', value: 1.0, width: 10, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'professional_fees', value: 0.7, width: 7, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'marketing', value: 0.6, width: 6, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'other_expenses', value: 0.8, width: 8, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['$2.01T', '$1.17T'],
      zh: {
        name: '美国银行 · 2025 财年第四季度',
        meta: {
          title: '美国银行 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 2180,
        },
        annotationsSvg: annotations(true),
        nodes: {
          consumer_banking: { label: '消费者银行', notes: ['同比 +5%', '净利率 29%'] },
          global_wealth_investment_management: { label: '全球财富与投资管理', notes: ['同比 +10%', '净利率 21%'] },
          global_banking: { label: '全球银行', notes: ['同比 +2%', '净利率 33%'] },
          global_markets: { label: '全球市场', notes: ['同比 +10%', '净利率 19%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          all_other: { label: '其他（非利息亏损）' },
          pretax_income: { label: '税前利润' },
          noninterest_expenses: { label: '非利息费用' },
          operating_expenses: { label: '信用损失拨备' },
          net_income: { label: '净利润', notes: ['同比 +12%'] },
          tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' },
          occupancy: { label: '场地占用' },
          information_processing: { label: '信息处理' },
          product_delivery: { label: '产品交付' },
          professional_fees: { label: '专业费用' },
          marketing: { label: '市场营销' },
          other_expenses: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

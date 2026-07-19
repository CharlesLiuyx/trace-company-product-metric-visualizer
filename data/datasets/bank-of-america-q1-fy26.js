/* Bank of America Q1 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#00358c';
  const BLUE_LABEL = '#00348b';
  const BLUE_VALUE = '#00358e';
  const BLUE_LINK = '#859dc4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const bofaLogo = [
    '<g transform="translate(18,2)">',
    '<g transform="translate(-33,-2) scale(1.03,0.79)">',
    '<path d="M28 89 L121 38 L202 65 L111 115 Z" fill="#073b89"/>',
    '<path d="M67 111 L158 60 L238 87 L149 137 Z" fill="#073b89"/>',
    '</g>',
    '<path d="M130 28 L215 0 L285 23 L199 52 Z" fill="#ef001b"/>',
    '<path d="M87 62 L178 31 L254 57 L163 88 Z" fill="#ef001b"/>',
    '<path d="M121 106 L218 53 L302 82 L205 136 Z" fill="#ef001b"/>',
    '<path d="M160 148 L261 94 L345 123 L248 178 Z" fill="#ef001b"/>',
    '</g>',
  ].join('');

  const annotations = (zh) => [
    '<g font-family="Noto Sans,Arial,sans-serif">',
    '<text x="97" y="245" font-size="39" font-weight="800" fill="', TITLE, '">', zh ? '按业务分部' : 'By Business Segment', '</text>',
    '<g fill="', BLUE_LABEL, '">',
    '<rect x="34" y="1208" width="373" height="153" rx="29"/>',
    '<rect x="414" y="1208" width="440" height="153" rx="29"/>',
    '<rect x="862" y="1208" width="235" height="153" rx="29"/>',
    '</g>',
    '<g text-anchor="middle" fill="#ffffff">',
    '<text x="220" y="1260" font-size="30" font-weight="800">', zh ? '平均存款' : 'Average deposits', '</text>',
    '<text x="220" y="1299" font-size="29" font-weight="400">$2.02T</text>',
    '<text x="220" y="1331" font-size="22" font-weight="400">', zh ? '同比 +3% / 环比 +0%' : '+3% Y/Y &amp; +0% Q/Q', '</text>',
    '<text x="634" y="1260" font-size="30" font-weight="800">', zh ? '平均贷款与租赁' : 'Average loans and leases', '</text>',
    '<text x="634" y="1299" font-size="29" font-weight="400">$1.19T</text>',
    '<text x="634" y="1331" font-size="22" font-weight="400">', zh ? '同比 +9% / 环比 +2%' : '+9% Y/Y &amp; +2% Q/Q', '</text>',
    '<text x="979" y="1260" font-size="30" font-weight="800">CET1 ', zh ? '比率' : 'ratio', '</text>',
    '<text x="979" y="1299" font-size="29" font-weight="400">11.2%</text>',
    '<text x="979" y="1331" font-size="22" font-weight="400">', zh ? '环比 (0.2 个百分点)' : '(0.2pp) Q/Q', '</text>',
    '</g></g>',
  ].join('');

  const labels = (zh) => ({
    consumer_banking: { blocks: [
      block(365, 401, [line(zh ? '消费者' : 'Consumer', 40, 800), line(zh ? '银行' : 'Banking', 40, 800), line(zh ? '净利率 28%' : '28% net margin', 28, 400, NOTE)], 'end', 10),
      block(421, 314, [line('$value', 39, 400, BLUE_VALUE), line(zh ? '同比 +5%' : '+5% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    global_wealth_investment_management: { blocks: [
      block(361, 645, [line(zh ? '全球财富与' : 'Global Wealth &', 39, 800), line(zh ? '投资管理' : 'Investment', 39, 800), line(zh ? '净利率 20%' : '20% net margin', 28, 400, NOTE)], 'end', 10),
      block(425, 570, [line('$value', 39, 400, BLUE_VALUE), line(zh ? '同比 +12%' : '+12% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    global_banking: { blocks: [
      block(369, 854, [line(zh ? '全球银行' : 'Global Banking', 40, 800), line(zh ? '净利率 33%' : '33% net margin', 28, 400, NOTE)], 'end', 10),
      block(425, 766, [line('$value', 39, 400, BLUE_VALUE), line(zh ? '同比 +5%' : '+5% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    global_markets: { blocks: [
      block(368, 1066, [line(zh ? '全球市场' : 'Global Markets', 40, 800), line(zh ? '净利率 28%' : '28% net margin', 28, 400, NOTE)], 'end', 10),
      block(424, 973, [line('$value', 39, 400, BLUE_VALUE), line(zh ? '同比 +8%' : '+8% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    segment_revenue: { blocks: [] },
    revenue: { blocks: [
      block(1351, 456, [line(zh ? '收入' : 'Revenue', 41, 800), line(zh ? '（扣除利息支出）' : '(net of interest expenses)', zh ? 29 : 33, 800), line('$value', 39, 400, BLUE_VALUE), line(zh ? '同比 +7%' : '+7% Y/Y', 28, 400, NOTE)], 'middle', 10),
    ] },
    all_other: { blocks: [
      block(1352, 1081, [line(zh ? '其他' : 'All Other', 36, 800, RED_LABEL), line(zh ? '（非利息亏损）' : '(noninterest loss)', 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    pretax_income: { blocks: [
      block(1816, 420, [line(zh ? '税前利润' : 'Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10),
    ] },
    noninterest_expenses: { blocks: [
      block(1816, 1050, [line(zh ? '非利息' : 'Noninterest', 37, 800, RED_LABEL), line(zh ? '费用' : 'expenses', 37, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    operating_expenses: { blocks: [
      block(1816, 1236, [line(zh ? '信用损失' : 'Provision for', 35, 800, RED_LABEL), line(zh ? '拨备' : 'credit losses', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 'middle', 8),
    ] },
    net_income: { blocks: [
      block(2368, 256, [line(zh ? '净利润' : 'Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '同比 +17%' : '+17% Y/Y', 28, 400, NOTE)], 'start', 10),
    ] },
    tax: { blocks: [block(2432, 431, [line(zh ? '税费' : 'Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'start', 8)] },
    compensation_benefits: { blocks: [block(2374, 553, [line(zh ? '薪酬' : 'Compensation', 30, 800, RED_LABEL), line(zh ? '与福利' : '& benefits', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    information_processing: { blocks: [block(2394, 708, [line(zh ? '信息' : 'Information', 30, 800, RED_LABEL), line(zh ? '处理' : 'processing', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    occupancy: { blocks: [block(2404, 852, [line(zh ? '场地占用' : 'Occupancy', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    product_delivery: { blocks: [block(2364, 975, [line(zh ? '产品交付' : 'Product delivery', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    professional_fees: { blocks: [block(2356, 1093, [line(zh ? '专业费用' : 'Professional fees', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    marketing: { blocks: [block(2354, 1221, [line(zh ? '市场营销（$0.5B）' : 'Marketing ($0.5B)', 30, 800, RED_LABEL)], 'start', 8)] },
    other_expenses: { blocks: [block(2384, 1328, [line(zh ? '其他（$1.0B）' : 'Other ($1.0B)', 30, 800, RED_LABEL)], 'start', 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'bank-of-america-q1-fy26',
    name: 'Bank of America · Q1 FY26',
    company: 'Bank of America',
    meta: {
      company: 'Bank of America',
      title: 'Bank of America Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/bank-of-america-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 116,
      titleWeight: 800,
      titleTextLength: 2502,
      hidePeriodStamp: true,
      logoWidth: 422,
      logoHeight: 241,
      logoY: 289,
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
      scale: 9.82,
      nodes: {
        consumer_banking: { x: 385, y: 403, width: 73, height: 108 },
        global_wealth_investment_management: { x: 385, y: 659, width: 73, height: 66 },
        global_banking: { x: 385, y: 863, width: 73, height: 61 },
        global_markets: { x: 385, y: 1065, width: 73, height: 69 },
        segment_revenue: { x: 852, y: 532, width: 72, height: 307 },
        revenue: { x: 1319, y: 642, width: 73, height: 298 },
        all_other: { x: 1319, y: 1050, width: 73, height: 9 },
        pretax_income: { x: 1787, y: 530, width: 72, height: 103 },
        noninterest_expenses: { x: 1787, y: 847, width: 72, height: 182 },
        operating_expenses: { x: 1787, y: 1200, width: 72, height: 13 },
        net_income: { x: 2253, y: 274, width: 73, height: 85 },
        tax: { x: 2253, y: 458, width: 73, height: 17 },
        compensation_benefits: { x: 2253, y: 553, width: 73, height: 112 },
        information_processing: { x: 2253, y: 752, width: 73, height: 19 },
        occupancy: { x: 2253, y: 878, width: 73, height: 18 },
        product_delivery: { x: 2253, y: 1005, width: 73, height: 10 },
        professional_fees: { x: 2253, y: 1126, width: 73, height: 2 },
        marketing: { x: 2253, y: 1235, width: 73, height: 3 },
        other_expenses: { x: 2253, y: 1341, width: 73, height: 11 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'consumer_banking', col: 0, order: 0, type: 'source', label: ['Consumer', 'Banking'], value: 11.0, valueText: '$11.0B', notes: ['+5% Y/Y', '28% net margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'global_wealth_investment_management', col: 0, order: 1, type: 'source', label: ['Global Wealth &', 'Investment Management'], value: 6.7, notes: ['+12% Y/Y', '20% net margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'global_banking', col: 0, order: 2, type: 'source', label: 'Global Banking', value: 6.3, notes: ['+5% Y/Y', '33% net margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'global_markets', col: 0, order: 3, type: 'source', label: 'Global Markets', value: 7.1, notes: ['+8% Y/Y', '28% net margin'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 31.1, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 30.3, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'all_other', col: 2, order: 1, type: 'cost', label: ['All Other', '(noninterest loss)'], value: -0.9, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 10.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'noninterest_expenses', col: 3, order: 1, type: 'cost', label: ['Noninterest', 'expenses'], value: 18.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Provision for', 'credit losses'], value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 8.6, notes: ['+17% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.8, valueText: '($1.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation_benefits', col: 4, order: 2, type: 'cost', label: ['Compensation', '& benefits'], value: 11.3, valueText: '($11.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'information_processing', col: 4, order: 3, type: 'cost', label: ['Information', 'processing'], value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'occupancy', col: 4, order: 4, type: 'cost', label: 'Occupancy', value: 1.9, valueText: '($1.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product_delivery', col: 4, order: 5, type: 'cost', label: 'Product delivery', value: 1.1, valueText: '($1.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_fees', col: 4, order: 6, type: 'cost', label: 'Professional fees', value: 0.6, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 4, order: 7, type: 'cost', label: 'Marketing', value: 0.5, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 8, type: 'cost', label: 'Other', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'consumer_banking', target: 'segment_revenue', value: 11.0, width: 108, sourceOrder: 0, targetOrder: 0 },
      { source: 'global_wealth_investment_management', target: 'segment_revenue', value: 6.7, width: 66, sourceOrder: 0, targetOrder: 1 },
      { source: 'global_banking', target: 'segment_revenue', value: 6.3, width: 61, sourceOrder: 0, targetOrder: 2 },
      { source: 'global_markets', target: 'segment_revenue', value: 7.1, width: 69, sourceWidth: 69, targetWidth: 72, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_revenue', target: 'revenue', value: 30.3, width: 298, sourceWidth: 298, targetWidth: 298, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_revenue', target: 'all_other', value: 0.9, width: 9, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'pretax_income', value: 10.4, width: 103, sourceWidth: 103, targetWidth: 103, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'noninterest_expenses', value: 18.5, width: 182, sourceWidth: 182, targetWidth: 182, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1.3, width: 13, sourceWidth: 13, targetWidth: 13, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 8.6, width: 85, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.8, width: 17, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'compensation_benefits', value: 11.3, width: 112, sourceWidth: 112, targetWidth: 112, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'information_processing', value: 2.0, width: 19, sourceWidth: 20, targetWidth: 19, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'occupancy', value: 1.9, width: 18, sourceWidth: 19, targetWidth: 18, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'product_delivery', value: 1.1, width: 10, sourceWidth: 11, targetWidth: 10, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'professional_fees', value: 0.6, width: 2, sourceWidth: 6, targetWidth: 2, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'marketing', value: 0.5, width: 3, sourceWidth: 4, targetWidth: 3, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'other_expenses', value: 1.0, width: 10, sourceWidth: 10, targetWidth: 10, sourceOrder: 6, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['$2.02T', '$1.19T'],
      zh: {
        name: '美国银行 · 2026 财年第一季度',
        meta: {
          title: '美国银行 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 2180,
        },
        annotationsSvg: annotations(true),
        nodes: {
          consumer_banking: { label: '消费者银行', notes: ['同比 +5%', '净利率 28%'] },
          global_wealth_investment_management: { label: '全球财富与投资管理', notes: ['同比 +12%', '净利率 20%'] },
          global_banking: { label: '全球银行', notes: ['同比 +5%', '净利率 33%'] },
          global_markets: { label: '全球市场', notes: ['同比 +8%', '净利率 28%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          all_other: { label: '其他（非利息亏损）' },
          pretax_income: { label: '税前利润' },
          noninterest_expenses: { label: '非利息费用' },
          operating_expenses: { label: '信用损失拨备' },
          net_income: { label: '净利润', notes: ['同比 +17%'] },
          tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' },
          information_processing: { label: '信息处理' },
          occupancy: { label: '场地占用' },
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

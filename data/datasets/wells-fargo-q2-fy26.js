/* Wells Fargo Q2 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY = '#666666';
  const GRAY_LINK = '#b3b3b3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const wellsFargoLogo = [
    '<rect width="234" height="252" fill="#d71e28"/>',
    '<rect y="233" width="234" height="19" fill="#ffcd41"/>',
    '<text x="18" y="105" fill="#ffffff" font-family="Georgia,Times New Roman,serif" font-size="49" font-weight="700" textLength="197" lengthAdjust="spacingAndGlyphs">WELLS</text>',
    '<text x="18" y="162" fill="#ffffff" font-family="Georgia,Times New Roman,serif" font-size="49" font-weight="700" textLength="197" lengthAdjust="spacingAndGlyphs">FARGO</text>',
  ].join('');

  const labels = (zh) => ({
    consumer_banking: { blocks: [
      block(430, 302, [line('$value', 39), line(zh ? '同比 +6%' : '+6% Y/Y', 28, 400, NOTE)], 'middle', 10),
      block(357, 410, [line(zh ? '消费者' : 'Consumer', 40, 800), line(zh ? '银行' : 'Banking', 40, 800), line(zh ? '净利率 22%' : '22% net margin', 28, 400, NOTE)], 'end', 10),
    ] },
    commercial_banking: { blocks: [
      block(430, 585, [line('$value', 39), line(zh ? '同比 +6%' : '+6% Y/Y', 28, 400, NOTE)], 'middle', 10),
      block(357, 599, [line(zh ? '商业' : 'Commercial', 40, 800), line(zh ? '银行' : 'Banking', 40, 800), line(zh ? '净利率 38%' : '38% net margin', 28, 400, NOTE)], 'end', 10),
    ] },
    corporate_investment_banking: { blocks: [
      block(433, 771, [line('$value', 39), line(zh ? '同比 +16%' : '+16% Y/Y', 28, 400, NOTE)], 'middle', 10),
      block(353, 767, [line(zh ? '企业与' : 'Corporate &', 40, 800), line(zh ? '投资银行' : 'Investment', 40, 800), ...(zh ? [] : [line('Banking', 40, 800)]), line(zh ? '净利率 43%' : '43% net margin', 28, 400, NOTE)], 'end', 13),
    ] },
    wealth_investment_management: { blocks: [
      block(431, 1000, [line('$value', 39), line(zh ? '同比 +13%' : '+13% Y/Y', 28, 400, NOTE)], 'middle', 10),
      block(354, 993, [line(zh ? '财富与' : 'Wealth &', 40, 800), line(zh ? '投资管理' : 'Investment', 40, 800), ...(zh ? [] : [line('Management', 40, 800)]), line(zh ? '净利率 14%' : '14% net margin', 28, 400, NOTE)], 'end', 10),
    ] },
    segment_revenue: { blocks: [] },
    revenue: { blocks: [
      block(1366, 520, [line(zh ? '收入' : 'Revenue', 41, 800), line('$value', 39), line(zh ? '同比 +9%' : '+9% Y/Y', 28, 400, NOTE)], 'middle', 10),
    ] },
    other: { blocks: [block(1369, 1103, [line(zh ? '其他' : 'Other', 36, 800), line('$0.1B', 34)], 'middle', 19)] },
    pretax_income: { blocks: [
      block(1839, 455, [line(zh ? '税前利润' : 'Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10),
    ] },
    noninterest_expenses: { blocks: [
      block(1842, 1087, [line(zh ? '非利息' : 'Noninterest', 37, 800, RED_LABEL), line(zh ? '费用' : 'expenses', 37, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    operating_expenses: { blocks: [
      block(1842, 1292, [line(zh ? '信用损失' : 'Provision for', 35, 800, RED_LABEL), line(zh ? '拨备' : 'credit losses', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 'middle', 8),
    ] },
    net_income: { blocks: [
      block(2384, 381, [line(zh ? '净利润' : 'Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '同比 +20%' : '+20% Y/Y', 28, 400, NOTE)], 'start', 10),
    ] },
    tax: { blocks: [block(2448, 560, [line(zh ? '税费' : 'Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'start', 8)] },
    personnel: { blocks: [block(2428, 745, [line(zh ? '人员费用' : 'Personnel', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    technology: { blocks: [block(2413, 891, [line(zh ? '技术' : 'Technology', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    occupancy: { blocks: [block(2419, 996, [line(zh ? '场地占用' : 'Occupancy', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    professional_fees: { blocks: [block(2372, 1104, [line(zh ? '专业服务费' : 'Professional fees', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    advertising: { blocks: [block(2359, 1235, [line(zh ? '广告（$0.4B）' : 'Advertising ($0.4B)', 30, 800, RED_LABEL)], 'start', 8)] },
    other_expenses: { blocks: [block(2415, 1345, [line(zh ? '其他（$1.1B）' : 'Other ($1.1B)', 30, 800, RED_LABEL)], 'start', 8)] },
  });

  const annotations = (zh) => [
    '<g font-family="Noto Sans,Arial,sans-serif">',
    '<text x="91" y="256" font-size="39" font-weight="800" fill="', TITLE, '">', zh ? '按业务分部' : 'By Business Segment', '</text>',
    '<g fill="', GRAY, '">',
    '<rect x="23" y="1220" width="371" height="134" rx="29"/>',
    '<rect x="404" y="1220" width="431" height="134" rx="29"/>',
    '<rect x="843" y="1219" width="240" height="136" rx="29"/>',
    '</g>',
    '<g text-anchor="middle" fill="#ffffff">',
    '<text x="208" y="1263" font-size="30" font-weight="800">', zh ? '平均存款' : 'Average deposits', '</text>',
    '<text x="208" y="1302" font-size="29" font-weight="400">$1.47T</text>',
    '<text x="208" y="1334" font-size="22" font-weight="400">', zh ? '同比 +12%' : '+12% Y/Y', '</text>',
    '<text x="620" y="1263" font-size="30" font-weight="800">', zh ? '平均贷款与租赁' : 'Average loans and leases', '</text>',
    '<text x="620" y="1302" font-size="29" font-weight="400">$1.03T</text>',
    '<text x="620" y="1334" font-size="22" font-weight="400">', zh ? '同比 +11%' : '+11% Y/Y', '</text>',
    '<text x="963" y="1263" font-size="30" font-weight="800">CET1 ', zh ? '比率' : 'ratio', '</text>',
    '<text x="963" y="1302" font-size="29" font-weight="400">10.3%</text>',
    '<text x="963" y="1334" font-size="22" font-weight="400">', zh ? '同比 (0.8 个百分点)' : '(0.8pp) Y/Y', '</text>',
    '</g></g>',
  ].join('');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'wells-fargo-q2-fy26',
    name: 'Wells Fargo · Q2 FY26',
    company: 'Wells Fargo',
    meta: {
      company: 'Wells Fargo',
      title: 'Wells Fargo Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/wells-fargo-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 116,
      titleWeight: 800,
      titleTextLength: 2490,
      hidePeriodStamp: true,
      logoWidth: 234,
      logoHeight: 252,
      logoY: 240,
      logoViewBox: '0 0 234 252',
      logoSvg: wellsFargoLogo,
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
        source: { node: GRAY, label: GRAY },
        hub: { node: GRAY, label: GRAY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 13.6,
      nodes: {
        consumer_banking: { x: 401, y: 390, width: 74, height: 142 },
        commercial_banking: { x: 401, y: 679, width: 74, height: 43 },
        corporate_investment_banking: { x: 401, y: 873, width: 74, height: 75 },
        wealth_investment_management: { x: 401, y: 1091, width: 74, height: 53 },
        segment_revenue: { x: 868, y: 557, width: 73, height: 315 },
        revenue: { x: 1335, y: 660, width: 74, height: 313 },
        other: { x: 1335, y: 1089, width: 74, height: 3 },
        pretax_income: { x: 1803, y: 561, width: 73, height: 112 },
        noninterest_expenses: { x: 1803, y: 879, width: 73, height: 188 },
        operating_expenses: { x: 1803, y: 1258, width: 73, height: 14 },
        net_income: { x: 2269, y: 418, width: 74, height: 92 },
        tax: { x: 2269, y: 580, width: 74, height: 22 },
        personnel: { x: 2269, y: 713, width: 74, height: 123 },
        technology: { x: 2269, y: 915, width: 74, height: 22 },
        occupancy: { x: 2269, y: 1026, width: 74, height: 14 },
        professional_fees: { x: 2269, y: 1128, width: 74, height: 18 },
        advertising: { x: 2269, y: 1247, width: 74, height: 6 },
        other_expenses: { x: 2269, y: 1348, width: 74, height: 17 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'consumer_banking', col: 0, order: 0, type: 'source', label: ['Consumer', 'Banking'], value: 10.3, notes: ['+6% Y/Y', '22% net margin'] },
      { id: 'commercial_banking', col: 0, order: 1, type: 'source', label: ['Commercial', 'Banking'], value: 3.1, notes: ['+6% Y/Y', '38% net margin'] },
      { id: 'corporate_investment_banking', col: 0, order: 2, type: 'source', label: ['Corporate &', 'Investment', 'Banking'], value: 5.4, notes: ['+16% Y/Y', '43% net margin'] },
      { id: 'wealth_investment_management', col: 0, order: 3, type: 'source', label: ['Wealth &', 'Investment', 'Management'], value: 3.9, notes: ['+13% Y/Y', '14% net margin'] },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 22.7 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 22.6, notes: ['+9% Y/Y'] },
      { id: 'other', col: 2, order: 1, type: 'hub', label: 'Other', value: -0.1, valueText: '($0.1B)', color: GRAY_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 8.0, valueText: '$8.0B' },
      { id: 'noninterest_expenses', col: 3, order: 1, type: 'cost', label: ['Noninterest', 'expenses'], value: 13.7 },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Provision for', 'credit losses'], value: 0.9, valueText: '($0.9B)' },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 6.6, notes: ['+20% Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.4 },
      { id: 'personnel', col: 4, order: 2, type: 'cost', label: 'Personnel', value: 8.9 },
      { id: 'technology', col: 4, order: 3, type: 'cost', label: 'Technology', value: 1.5 },
      { id: 'occupancy', col: 4, order: 4, type: 'cost', label: 'Occupancy', value: 0.8 },
      { id: 'professional_fees', col: 4, order: 5, type: 'cost', label: 'Professional fees', value: 1.1 },
      { id: 'advertising', col: 4, order: 6, type: 'cost', label: 'Advertising', value: 0.4 },
      { id: 'other_expenses', col: 4, order: 7, type: 'cost', label: 'Other', value: 1.1 },
    ],
    links: [
      { source: 'consumer_banking', target: 'segment_revenue', value: 10.3, sourceWidth: 142, targetWidth: 143, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial_banking', target: 'segment_revenue', value: 3.1, sourceWidth: 43, targetWidth: 43, sourceOrder: 0, targetOrder: 1 },
      { source: 'corporate_investment_banking', target: 'segment_revenue', value: 5.4, sourceWidth: 75, targetWidth: 75, sourceOrder: 0, targetOrder: 2 },
      { source: 'wealth_investment_management', target: 'segment_revenue', value: 3.9, sourceWidth: 53, targetWidth: 54, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_revenue', target: 'revenue', value: 22.6, sourceWidth: 309, targetWidth: 313, y0: 713.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_revenue', target: 'other', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 869.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'pretax_income', value: 8.0, sourceWidth: 112, targetWidth: 112, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'noninterest_expenses', value: 13.7, sourceWidth: 187, targetWidth: 188, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 0.9, sourceWidth: 14, targetWidth: 14, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 6.6, sourceWidth: 90, targetWidth: 92, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.4, sourceWidth: 22, targetWidth: 22, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'personnel', value: 8.9, sourceWidth: 121, targetWidth: 123, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'technology', value: 1.5, sourceWidth: 20, targetWidth: 22, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'occupancy', value: 0.8, sourceWidth: 11, targetWidth: 14, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'professional_fees', value: 1.1, sourceWidth: 15, targetWidth: 18, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'advertising', value: 0.4, sourceWidth: 5, targetWidth: 6, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'other_expenses', value: 1.1, sourceWidth: 16, targetWidth: 17, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['$1.47T', '$1.03T'],
      zh: {
        name: '富国银行 · 2026 财年第二季度',
        meta: {
          title: '富国银行 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 2060,
        },
        annotationsSvg: annotations(true),
        nodes: {
          consumer_banking: { label: '消费者银行', notes: ['同比 +6%', '净利率 22%'] },
          commercial_banking: { label: '商业银行', notes: ['同比 +6%', '净利率 38%'] },
          corporate_investment_banking: { label: '企业与投资银行', notes: ['同比 +16%', '净利率 43%'] },
          wealth_investment_management: { label: '财富与投资管理', notes: ['同比 +13%', '净利率 14%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          other: { label: '其他' },
          pretax_income: { label: '税前利润' },
          noninterest_expenses: { label: '非利息费用' },
          operating_expenses: { label: '信用损失拨备' },
          net_income: { label: '净利润', notes: ['同比 +20%'] },
          tax: { label: '税费' },
          personnel: { label: '人员费用' },
          technology: { label: '技术' },
          occupancy: { label: '场地占用' },
          professional_fees: { label: '专业服务费' },
          advertising: { label: '广告' },
          other_expenses: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

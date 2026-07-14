/* JPMorganChase Q4 FY25 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BROWN = '#8f5a39';
  const BROWN_LABEL = '#8e5a38';
  const BROWN_LINK = '#c5ae9f';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2397;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const jpmorganLogo = '<text x="185" y="132" font-family="Times New Roman,Georgia,serif" font-size="128" font-weight="400" textLength="755" lengthAdjust="spacingAndGlyphs" fill="#000000">JPMorganChase</text>';

  const annotations = (zh) => [
    '<g font-family="Noto Sans,Arial,sans-serif">',
    '<text x="160" y="266" font-size="39" font-weight="800" fill="', TITLE, '">', zh ? '按业务分部' : 'By Business Segment', '</text>',
    '<g fill="', BROWN_LABEL, '">',
    '<rect x="34" y="1191" width="372" height="148" rx="29"/>',
    '<rect x="414" y="1191" width="310" height="148" rx="29"/>',
    '<rect x="733" y="1191" width="309" height="148" rx="29"/>',
    '</g>',
    '<g text-anchor="middle" fill="#ffffff">',
    '<text x="220" y="1243" font-size="30" font-weight="800">', zh ? '平均存款' : 'Average deposits', '</text>',
    '<text x="220" y="1282" font-size="29" font-weight="400">$2.6T</text>',
    '<text x="220" y="1314" font-size="22" font-weight="400">', zh ? '同比 +6%，环比 +2%' : '+6% Y/Y &amp; +2% Q/Q', '</text>',
    '<text x="569" y="1243" font-size="30" font-weight="800">', zh ? '平均贷款' : 'Average loans', '</text>',
    '<text x="569" y="1282" font-size="29" font-weight="400">$1.5T</text>',
    '<text x="569" y="1314" font-size="22" font-weight="400">', zh ? '同比 +9%，环比 +3%' : '+9% Y/Y &amp; +3% Q/Q', '</text>',
    '<text x="887" y="1243" font-size="30" font-weight="800">CET1 ', zh ? '比率' : 'ratio', '</text>',
    '<text x="887" y="1282" font-size="29" font-weight="400">14.5%</text>',
    '<text x="887" y="1314" font-size="22" font-weight="400">', zh ? '同比 -1.2 个百分点，环比 -0.3 个百分点' : '-1.2pp Y/Y &amp; -0.3pp Q/Q', '</text>',
    '</g></g>',
  ].join('');

  const labels = (zh) => ({
    consumer_community_banking: { blocks: [
      block(367, 395, [line(zh ? '消费者与' : 'Consumer &', 40, 800), line(zh ? '社区银行' : 'Community', 40, 800), ...(zh ? [] : [line('Banking', 40, 800)]), line(zh ? '净利率 19%' : '19% net margin', 28, 400, NOTE)], 'end', 10),
      block(467, 296, [line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +6%' : '+6% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    commercial_investment_bank: { blocks: [
      block(367, 685, [line(zh ? '商业与' : 'Commercial &', 40, 800), line(zh ? '投资银行' : 'Investment Bank', 40, 800), line(zh ? '净利率 38%' : '38% net margin', 28, 400, NOTE)], 'end', 10),
      block(467, 582, [line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +10%' : '+10% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    asset_wealth_management: { blocks: [
      block(367, 896, [line(zh ? '资产与财富' : 'Asset & Wealth', 40, 800), line(zh ? '管理' : 'Management', 40, 800), line(zh ? '净利率 28%' : '28% net margin', 28, 400, NOTE)], 'end', 10),
      block(467, 872, [line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +13%' : '+13% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    corporate: { blocks: [
      block(367, 1086, [line(zh ? '公司业务' : 'Corporate', 40, 800), line(zh ? '净利率 21%' : '21% net margin', 28, 400, NOTE)], 'end', 10),
      block(467, 1038, [line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 (26%)' : '(26%) Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    segment_revenue: { blocks: [] },
    revenue: { blocks: [
      block(1401, 498, [line(zh ? '净收入' : 'Net revenue', 40, 800, BROWN_LABEL), line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +7%' : '+7% Y/Y', 28, 400, NOTE)], 'middle', 10),
    ] },
    adjustments: { blocks: [
      block(1401, 1165, [line(zh ? '调整项' : 'Adjustments', 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    pretax_income: { blocks: [
      block(1868, 417, [line(zh ? '税前利润' : 'Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10),
    ] },
    noninterest_expenses: { blocks: [
      block(1868, 1085, [line(zh ? '非利息' : 'Noninterest', 37, 800, RED_LABEL), line(zh ? '费用' : 'expenses', 37, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    operating_expenses: { blocks: [
      block(1868, 1305, [line(zh ? '信用损失' : 'Provision for', 35, 800, RED_LABEL), line(zh ? '拨备' : 'credit losses', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 'middle', 8),
    ] },
    net_income: { blocks: [
      block(RIGHT_LABEL_X, 382, [line(zh ? '净利润' : 'Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '同比 (7%)' : '(7%) Y/Y', 28, 400, NOTE)], 'start', 10),
    ] },
    tax: { blocks: [block(2446, 550, [line(zh ? '税费' : 'Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'start', 8)] },
    compensation_benefits: { blocks: [block(RIGHT_LABEL_X, 684, [line(zh ? '薪酬' : 'Compensation', 30, 800, RED_LABEL), line(zh ? '与福利' : '& benefits', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    occupancy: { blocks: [block(2420, 839, [line(zh ? '场地占用' : 'Occupancy', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    technology_communications: { blocks: [block(2415, 943, [line(zh ? '技术与' : 'Technology', 30, 800, RED_LABEL), line(zh ? '通信' : 'communications', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    professional_services: { blocks: [block(RIGHT_LABEL_X, 1080, [line(zh ? '专业服务' : 'Professional', 30, 800, RED_LABEL), ...(zh ? [] : [line('services', 30, 800, RED_LABEL)]), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    marketing: { blocks: [block(2420, 1209, [line(zh ? '市场营销' : 'Marketing', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    other_expenses: { blocks: [block(2453, 1309, [line(zh ? '其他' : 'Other', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'jpmorganchase-q4-fy25',
    name: 'JPMorganChase · Q4 FY25',
    company: 'JPMorganChase',
    meta: {
      company: 'JPMorganChase',
      title: 'JPMorganChase Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/jpmorganchase-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2530,
      hidePeriodStamp: true,
      logoWidth: 900,
      logoHeight: 205,
      logoY: 253,
      logoViewBox: '0 0 900 205',
      logoSvg: jpmorganLogo,
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
        source: { node: BROWN, label: BROWN_LABEL },
        hub: { node: BROWN, label: BROWN_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BROWN_LINK, hub: BROWN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 8.15,
      nodes: {
        consumer_community_banking: { x: 431, y: 387, width: 73, height: 158 },
        commercial_investment_bank: { x: 431, y: 674, width: 73, height: 157 },
        asset_wealth_management: { x: 431, y: 963, width: 73, height: 51 },
        corporate: { x: 431, y: 1130, width: 73, height: 10 },
        segment_revenue: { x: 898, y: 520, width: 73, height: 383 },
        revenue: { x: 1365, y: 648, width: 73, height: 375 },
        adjustments: { x: 1365, y: 1139, width: 73, height: 6 },
        pretax_income: { x: 1833, y: 524, width: 73, height: 139 },
        noninterest_expenses: { x: 1833, y: 879, width: 73, height: 195 },
        operating_expenses: { x: 1833, y: 1250, width: 73, height: 37 },
        net_income: { x: 2299, y: 385, width: 74, height: 105 },
        tax: { x: 2299, y: 569, width: 74, height: 32 },
        compensation_benefits: { x: 2299, y: 674, width: 74, height: 106 },
        occupancy: { x: 2299, y: 866, width: 74, height: 10 },
        technology_communications: { x: 2299, y: 968, width: 74, height: 21 },
        professional_services: { x: 2299, y: 1090, width: 74, height: 27 },
        marketing: { x: 2299, y: 1220, width: 74, height: 10 },
        other_expenses: { x: 2299, y: 1329, width: 74, height: 12 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'consumer_community_banking', col: 0, order: 0, type: 'source', label: ['Consumer &', 'Community', 'Banking'], value: 19.4, notes: ['+6% Y/Y', '19% net margin'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'commercial_investment_bank', col: 0, order: 1, type: 'source', label: ['Commercial &', 'Investment Bank'], value: 19.4, notes: ['+10% Y/Y', '38% net margin'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'asset_wealth_management', col: 0, order: 2, type: 'source', label: ['Asset & Wealth', 'Management'], value: 6.5, notes: ['+13% Y/Y', '28% net margin'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'corporate', col: 0, order: 3, type: 'source', label: 'Corporate', value: 1.5, notes: ['(26%) Y/Y', '21% net margin'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 46.8, color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net revenue', value: 45.8, notes: ['+7% Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'adjustments', col: 2, order: 1, type: 'cost', label: 'Adjustments', value: -1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 17.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'noninterest_expenses', col: 3, order: 1, type: 'cost', label: ['Noninterest', 'expenses'], value: 24.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Provision for', 'credit losses'], value: 4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 13.0, valueText: '$13.0B', notes: ['(7%) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 4.1, valueText: '($4.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation_benefits', col: 4, order: 2, type: 'cost', label: ['Compensation', '& benefits'], value: 13.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'occupancy', col: 4, order: 3, type: 'cost', label: 'Occupancy', value: 1.5, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_communications', col: 4, order: 4, type: 'cost', label: ['Technology', 'communications'], value: 2.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_services', col: 4, order: 5, type: 'cost', label: ['Professional', 'services'], value: 3.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 4, order: 6, type: 'cost', label: 'Marketing', value: 1.5, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 7, type: 'cost', label: 'Other', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'consumer_community_banking', target: 'segment_revenue', value: 19.4, width: 158, targetWidth: 159, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial_investment_bank', target: 'segment_revenue', value: 19.4, width: 157, targetWidth: 159, sourceOrder: 0, targetOrder: 1 },
      { source: 'asset_wealth_management', target: 'segment_revenue', value: 6.5, width: 51, targetWidth: 53, sourceOrder: 0, targetOrder: 2 },
      { source: 'corporate', target: 'segment_revenue', value: 1.5, width: 10, targetWidth: 12, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_revenue', target: 'revenue', value: 45.8, width: 375, sourceWidth: 375, targetWidth: 375, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_revenue', target: 'adjustments', value: 1.0, width: 8, sourceWidth: 8, targetWidth: 6, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'pretax_income', value: 17.2, width: 139, sourceWidth: 140, targetWidth: 139, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'noninterest_expenses', value: 24.0, width: 195, sourceWidth: 196, targetWidth: 195, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 4.7, width: 37, sourceWidth: 39, targetWidth: 37, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 13.0, width: 105, sourceWidth: 106, targetWidth: 105, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 4.1, width: 32, sourceWidth: 33, targetWidth: 32, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'compensation_benefits', value: 13.1, width: 106, sourceWidth: 107, targetWidth: 106, sourceOrder: 0, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'occupancy', value: 1.5, width: 10, sourceWidth: 12, targetWidth: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'technology_communications', value: 2.9, width: 21, sourceWidth: 24, targetWidth: 21, sourceOrder: 2, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'professional_services', value: 3.3, width: 27, sourceWidth: 27, targetWidth: 27, sourceOrder: 3, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'marketing', value: 1.5, width: 10, sourceWidth: 12, targetWidth: 10, sourceOrder: 4, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'other_expenses', value: 1.7, width: 12, sourceWidth: 13, targetWidth: 12, sourceOrder: 5, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['$2.6T', '$1.5T'],
      zh: {
        name: '摩根大通 · 2025 财年第四季度',
        meta: {
          title: '摩根大通 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 2050,
        },
        annotationsSvg: annotations(true),
        nodes: {
          consumer_community_banking: { label: '消费者与社区银行', notes: ['同比 +6%', '净利率 19%'] },
          commercial_investment_bank: { label: '商业与投资银行', notes: ['同比 +10%', '净利率 38%'] },
          asset_wealth_management: { label: '资产与财富管理', notes: ['同比 +13%', '净利率 28%'] },
          corporate: { label: '公司业务', notes: ['同比 (26%)', '净利率 21%'] },
          revenue: { label: '净收入', notes: ['同比 +7%'] },
          adjustments: { label: '调整项' },
          pretax_income: { label: '税前利润' },
          noninterest_expenses: { label: '非利息费用' },
          operating_expenses: { label: '信用损失拨备' },
          net_income: { label: '净利润', notes: ['同比 (7%)'] },
          tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' },
          occupancy: { label: '场地占用' },
          technology_communications: { label: '技术与通信' },
          professional_services: { label: '专业服务' },
          marketing: { label: '市场营销' },
          other_expenses: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

/* JPMorganChase Q2 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
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
    '<text x="220" y="1282" font-size="29" font-weight="400">$2.7T</text>',
    '<text x="220" y="1314" font-size="22" font-weight="400">', zh ? '同比 +7%，环比 +3%' : '+7% Y/Y &amp; +3% Q/Q', '</text>',
    '<text x="569" y="1243" font-size="30" font-weight="800">', zh ? '平均贷款' : 'Average loans', '</text>',
    '<text x="569" y="1282" font-size="29" font-weight="400">$1.5T</text>',
    '<text x="569" y="1314" font-size="22" font-weight="400">', zh ? '同比 +11%，环比 +2%' : '+11% Y/Y &amp; +2% Q/Q', '</text>',
    '<text x="887" y="1243" font-size="30" font-weight="800">CET1 ', zh ? '比率' : 'ratio', '</text>',
    '<text x="887" y="1282" font-size="29" font-weight="400">14.1%</text>',
    '<text x="887" y="1314" font-size="22" font-weight="400">',
    zh ? '同比 -1.0pp &amp; 环比 -0.2pp' : '-1.0pp Y/Y &amp; -0.2pp Q/Q',
    '</text>',
    '</g></g>',
  ].join('');

  const labels = (zh) => ({
    consumer_community_banking: { blocks: [
      block(367, 399, [line(zh ? '消费者与' : 'Consumer &', 40, 800), line(zh ? '社区银行' : 'Community', 40, 800), ...(zh ? [] : [line('Banking', 40, 800)]), line(zh ? '净利率 26%' : '26% net margin', 28, 400, NOTE)], 'end', 10),
      block(467, 302, [line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +8%' : '+8% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    commercial_investment_bank: { blocks: [
      block(367, 676, [line(zh ? '商业与' : 'Commercial &', 40, 800), line(zh ? '投资银行' : 'Investment Bank', 40, 800), line(zh ? '净利率 39%' : '39% net margin', 28, 400, NOTE)], 'end', 10),
      block(467, 567, [line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +27%' : '+27% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    asset_wealth_management: { blocks: [
      block(367, 889, [line(zh ? '资产与财富' : 'Asset & Wealth', 40, 800), line(zh ? '管理' : 'Management', 40, 800), line(zh ? '净利率 29%' : '29% net margin', 28, 400, NOTE)], 'end', 10),
      block(467, 859, [line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +19%' : '+19% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    corporate: { blocks: [
      block(367, 1084, [line(zh ? '公司业务' : 'Corporate', 40, 800), line(zh ? '净利率 70%' : '70% net margin', 28, 400, NOTE)], 'end', 10),
      block(467, 1030, [line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +293%' : '+293% Y/Y', 28, 400, NOTE)], 'middle', 9),
    ] },
    segment_revenue: { blocks: [] },
    revenue: { blocks: [
      block(1401, 506, [line(zh ? '净收入' : 'Net revenue', 40, 800, BROWN_LABEL), line('$value', 39, 400, BROWN_LABEL), line(zh ? '同比 +28%' : '+28% Y/Y', 28, 400, NOTE)], 'middle', 10),
    ] },
    adjustments: { blocks: [
      block(1401, 1093, [line(zh ? '调整项' : 'Adjustments', 36, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    pretax_income: { blocks: [
      block(1868, 427, [line(zh ? '税前利润' : 'Pretax income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10),
    ] },
    noninterest_expenses: { blocks: [
      block(1868, 1069, [line(zh ? '非利息' : 'Noninterest', 37, 800, RED_LABEL), line(zh ? '费用' : 'expenses', 37, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)], 'middle', 9),
    ] },
    operating_expenses: { blocks: [
      block(1868, 1285, [line(zh ? '信用损失' : 'Provision for', 35, 800, RED_LABEL), line(zh ? '拨备' : 'credit losses', 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)], 'middle', 8),
    ] },
    net_income: { blocks: [
      block(RIGHT_LABEL_X, 368, [line(zh ? '净利润' : 'Net income', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '同比 +41%' : '+41% Y/Y', 28, 400, NOTE)], 'start', 10),
    ] },
    tax: { blocks: [block(2452, 554, [line(zh ? '税费' : 'Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 'start', 8)] },
    compensation_benefits: { blocks: [block(RIGHT_LABEL_X, 709, [line(zh ? '薪酬' : 'Compensation', 30, 800, RED_LABEL), line(zh ? '与福利' : '& benefits', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    occupancy: { blocks: [block(2426, 844, [line(zh ? '场地占用' : 'Occupancy', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    technology_communications: { blocks: [block(2381, 932, [line(zh ? '技术与' : 'Technology,', 30, 800, RED_LABEL), line(zh ? '通信' : 'communications', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    professional_services: { blocks: [block(2415, 1067, [line(zh ? '专业服务' : 'Professional', 30, 800, RED_LABEL), ...(zh ? [] : [line('services', 30, 800, RED_LABEL)]), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    marketing: { blocks: [block(2427, 1198, [line(zh ? '市场营销' : 'Marketing', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
    other_expenses: { blocks: [block(2457, 1297, [line(zh ? '其他' : 'Other', 30, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL)], 'start', 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'jpmorganchase-q2-fy26',
    name: 'JPMorganChase · Q2 FY26',
    company: 'JPMorganChase',
    meta: {
      company: 'JPMorganChase',
      title: 'JPMorganChase Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/jpmorganchase-q2-fy26.png', width: 2667, height: 1500 },
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
      scale: 5.42,
      nodes: {
        consumer_community_banking: { x: 431, y: 391, width: 73, height: 109 },
        commercial_investment_bank: { x: 431, y: 660, width: 73, height: 134 },
        asset_wealth_management: { x: 431, y: 949, width: 73, height: 37 },
        corporate: { x: 431, y: 1121, width: 73, height: 33 },
        segment_revenue: { x: 898, y: 555, width: 73, height: 314 },
        revenue: { x: 1365, y: 651, width: 73, height: 311 },
        adjustments: { x: 1365, y: 1080, width: 73, height: 4 },
        pretax_income: { x: 1833, y: 542, width: 73, height: 150 },
        noninterest_expenses: { x: 1833, y: 912, width: 73, height: 149 },
        operating_expenses: { x: 1833, y: 1254, width: 73, height: 13 },
        net_income: { x: 2299, y: 384, width: 74, height: 115 },
        tax: { x: 2299, y: 576, width: 74, height: 34 },
        compensation_benefits: { x: 2299, y: 711, width: 74, height: 82 },
        occupancy: { x: 2299, y: 877, width: 74, height: 9 },
        technology_communications: { x: 2299, y: 981, width: 74, height: 17 },
        professional_services: { x: 2299, y: 1097, width: 74, height: 21 },
        marketing: { x: 2299, y: 1224, width: 74, height: 9 },
        other_expenses: { x: 2299, y: 1328, width: 74, height: 10 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'consumer_community_banking', col: 0, order: 0, type: 'source', label: ['Consumer &', 'Community', 'Banking'], value: 20.3, notes: ['+8% Y/Y', '26% net margin'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'commercial_investment_bank', col: 0, order: 1, type: 'source', label: ['Commercial &', 'Investment Bank'], value: 24.9, notes: ['+27% Y/Y', '39% net margin'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'asset_wealth_management', col: 0, order: 2, type: 'source', label: ['Asset & Wealth', 'Management'], value: 6.9, notes: ['+19% Y/Y', '29% net margin'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'corporate', col: 0, order: 3, type: 'source', label: 'Corporate', value: 6.0, valueText: '$6.0B', notes: ['+293% Y/Y', '70% net margin'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 58.1, color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net revenue', value: 57.3, notes: ['+28% Y/Y'], color: BROWN, labelColor: BROWN_LABEL, linkTint: BROWN_LINK },
      { id: 'adjustments', col: 2, order: 1, type: 'cost', label: 'Adjustments', value: -0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 27.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'noninterest_expenses', col: 3, order: 1, type: 'cost', label: ['Noninterest', 'expenses'], value: 27.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Provision for', 'credit losses'], value: 2.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 21.2, notes: ['+41% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 6.4, valueText: '($6.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation_benefits', col: 4, order: 2, type: 'cost', label: ['Compensation', '& benefits'], value: 15.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'occupancy', col: 4, order: 3, type: 'cost', label: 'Occupancy', value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_communications', col: 4, order: 4, type: 'cost', label: ['Technology,', 'communications'], value: 3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_services', col: 4, order: 5, type: 'cost', label: ['Professional', 'services'], value: 3.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 4, order: 6, type: 'cost', label: 'Marketing', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 7, type: 'cost', label: 'Other', value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'consumer_community_banking', target: 'segment_revenue', value: 20.3, width: 109, targetWidth: 110, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial_investment_bank', target: 'segment_revenue', value: 24.9, width: 134, targetWidth: 133, sourceOrder: 0, targetOrder: 1 },
      { source: 'asset_wealth_management', target: 'segment_revenue', value: 6.9, width: 37, targetWidth: 37, sourceOrder: 0, targetOrder: 2 },
      { source: 'corporate', target: 'segment_revenue', value: 6.0, width: 33, targetWidth: 34, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_revenue', target: 'revenue', value: 57.3, width: 311, sourceWidth: 311, targetWidth: 311, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_revenue', target: 'adjustments', value: 0.7, width: 3, sourceWidth: 3, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'pretax_income', value: 27.5, width: 150, sourceWidth: 150, targetWidth: 150, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'noninterest_expenses', value: 27.3, width: 148, sourceWidth: 148, targetWidth: 149, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 2.5, width: 13, sourceWidth: 13, targetWidth: 13, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 21.2, width: 115, sourceWidth: 115, targetWidth: 115, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 6.4, width: 35, sourceWidth: 35, targetWidth: 34, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'noninterest_expenses', target: 'compensation_benefits', value: 15.2, width: 82, sourceWidth: 82, targetWidth: 82, sourceOrder: 0, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'occupancy', value: 1.5, width: 9, sourceWidth: 9, targetWidth: 9, sourceOrder: 1, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'technology_communications', value: 3.1, width: 17, sourceWidth: 17, targetWidth: 17, sourceOrder: 2, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'professional_services', value: 3.9, width: 21, sourceWidth: 21, targetWidth: 21, sourceOrder: 3, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'marketing', value: 1.7, width: 9, sourceWidth: 9, targetWidth: 9, sourceOrder: 4, targetOrder: 0 },
      { source: 'noninterest_expenses', target: 'other_expenses', value: 2.0, width: 11, sourceWidth: 11, targetWidth: 10, sourceOrder: 5, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['$2.7T', '$1.5T'],
      zh: {
        name: '摩根大通 · 2026 财年第二季度',
        meta: {
          title: '摩根大通 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 2050,
        },
        annotationsSvg: annotations(true),
        nodes: {
          consumer_community_banking: { label: '消费者与社区银行', notes: ['同比 +8%', '净利率 26%'] },
          commercial_investment_bank: { label: '商业与投资银行', notes: ['同比 +27%', '净利率 39%'] },
          asset_wealth_management: { label: '资产与财富管理', notes: ['同比 +19%', '净利率 29%'] },
          corporate: { label: '公司业务', notes: ['同比 +293%', '净利率 70%'] },
          revenue: { label: '净收入', notes: ['同比 +28%'] },
          adjustments: { label: '调整项' },
          pretax_income: { label: '税前利润' },
          noninterest_expenses: { label: '非利息费用' },
          operating_expenses: { label: '信用损失拨备' },
          net_income: { label: '净利润', notes: ['同比 +41%'] },
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

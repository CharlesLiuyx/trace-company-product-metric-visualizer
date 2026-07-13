/* Schwab Q4 FY25 income statement ($B), reconstructed as a fixed SVG Sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#00a0df';
  const BLUE_LINK = '#85cde9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const SOURCE_DIGEST = 'sha256:0ec57c60f869fcae679898a1bd21de8ac1fd899701c5bded31e3ddd511074847';

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const labels = (t) => ({
    net_interest: { blocks: [
      block(394, 298, [line('$value', 40), line(t.netInterestYy, 28, 400, NOTE)]),
      block(288, 457, [line(t.netInterest, 40, 800, BLUE)], 'end'),
    ] },
    asset_management: { blocks: [
      block(400, 591, [line('$value', 40), line(t.assetManagementYy, 28, 400, NOTE)]),
      block(294, 675, [line(t.assetManagement[0], 40, 800, BLUE), line(t.assetManagement[1], 40, 800, BLUE)], 'end', 10),
    ] },
    trading: { blocks: [
      block(391, 792, [line('$value', 40), line(t.tradingYy, 28, 400, NOTE)]),
      block(285, 886, [line(t.trading, 40, 800, BLUE)], 'end'),
    ] },
    bank_deposit_account_fees: { blocks: [
      block(400, 972, [line('$value', 40), line(t.bankFeesYy, 28, 400, NOTE)]),
      block(294, 1010, [line(t.bankFees[0], 40, 800, BLUE), line(t.bankFees[1], 40, 800, BLUE)], 'end', 10),
    ] },
    other_revenue: { blocks: [
      block(400, 1100, [line('$value', 40), line(t.otherRevenueYy, 28, 400, NOTE)]),
      block(280, 1160, [line(t.otherRevenue, 40, 800, BLUE)], 'end'),
    ] },
    revenue: { blocks: [block(1023, 541, [line(t.revenue, 40, 800, BLUE), line('$value', 39, 400, BLUE), line(t.revenueYy, 28, 400, NOTE)], 'middle', 10)] },
    pretax_income: { blocks: [block(1646, 380, [line(t.pretaxIncome, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10)] },
    operating_expenses: { blocks: [block(1646, 1132, [line(t.nonInterestExpenses[0], 38, 800, RED_LABEL), line(t.nonInterestExpenses[1], 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 10)] },
    net_income: { blocks: [block(2353, 243, [line(t.netIncome, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.netIncomeYy, 28, 400, NOTE)], 'start', 10)] },
    tax: { blocks: [block(2411, 464, [line(t.tax, 31, 800, RED_LABEL)], 'start')] },
    compensation_benefits: { blocks: [block(2367, 546, [line(t.compensation[0], 30, 800, RED_LABEL), line(t.compensation[1], 30, 800, RED_LABEL), line(t.compensationValue, 29, 400, RED_LABEL)], 'start', 8)] },
    professional_services: { blocks: [block(2322, 685, [line(t.professional, 30, 800, RED_LABEL), line(t.professionalValue, 29, 400, RED_LABEL)], 'start', 8)] },
    occupancy: { blocks: [block(2329, 783, [line(t.occupancy, 30, 800, RED_LABEL)], 'start')] },
    advertising: { blocks: [block(2326, 882, [line(t.advertising, 30, 800, RED_LABEL)], 'start')] },
    comm: { blocks: [block(2337, 981, [line(t.comm, 30, 800, RED_LABEL)], 'start')] },
    da: { blocks: [block(2353, 1076, [line(t.da, 30, 800, RED_LABEL)], 'start')] },
    acquired_intangible_assets: { blocks: [block(2331, 1151, [line(t.intangibles[0], 30, 800, RED_LABEL), line(t.intangibles[1], 30, 400, RED_LABEL)], 'start', 8)] },
    regulatory_fee: { blocks: [block(2315, 1274, [line(t.regulatoryFee, 30, 800, RED_LABEL)], 'start')] },
    other_expenses: { blocks: [block(2333, 1359, [line(t.otherExpenses, 30, 800, RED_LABEL)], 'start')] },
  });

  const enLabels = labels({
    netInterest: 'Net interest', netInterestYy: '+27% Y/Y', assetManagement: ['Asset', 'management'], assetManagementYy: '+15% Y/Y',
    trading: 'Trading', tradingYy: '+22% Y/Y', bankFees: ['Bank deposit', 'account fees'], bankFeesYy: '(1%) Y/Y', otherRevenue: 'Other', otherRevenueYy: '(27%) Y/Y',
    revenue: 'Net revenue', revenueYy: '+19% Y/Y', pretaxIncome: 'Pretax income', nonInterestExpenses: ['Non interest', 'expenses'],
    netIncome: 'Net income', netIncomeYy: '+34% Y/Y', tax: 'Tax ($0.7B)', compensation: ['Compensation', '& benefits'], compensationValue: '($1.6B)',
    professional: 'Professional services', professionalValue: '($0.3B)', occupancy: 'Occupancy ($0.3B)', advertising: 'Advertising ($0.1B)', comm: 'Comm. ($0.1B)', da: 'D&A ($0.2B)',
    intangibles: ['Acquired intangible', 'assets ($0.1B)'], regulatoryFee: 'Regulatory fee ($0.1B)', otherExpenses: 'Other ($0.2B)',
  });
  const zhLabels = labels({
    netInterest: '净利息收入', netInterestYy: '同比 +27%', assetManagement: ['资产', '管理'], assetManagementYy: '同比 +15%',
    trading: '交易', tradingYy: '同比 +22%', bankFees: ['银行存款', '账户费用'], bankFeesYy: '同比 (1%)', otherRevenue: '其他', otherRevenueYy: '同比 (27%)',
    revenue: '净收入', revenueYy: '同比 +19%', pretaxIncome: '税前利润', nonInterestExpenses: ['非利息', '费用'],
    netIncome: '净利润', netIncomeYy: '同比 +34%', tax: '税费（$0.7B）', compensation: ['薪酬', '与福利'], compensationValue: '（$1.6B）',
    professional: '专业服务（$0.3B）', professionalValue: '', occupancy: '场地占用（$0.3B）', advertising: '广告（$0.1B）', comm: '通信费用（$0.1B）', da: '折旧与摊销（$0.2B）',
    intangibles: ['收购无形资产', '（$0.1B）'], regulatoryFee: '监管费用（$0.1B）', otherExpenses: '其他（$0.2B）',
  });
  for (const id of ['tax', 'professional_services', 'occupancy', 'advertising', 'comm', 'da', 'acquired_intangible_assets', 'regulatory_fee', 'other_expenses']) {
    zhLabels[id].blocks[0].x = 2340;
    zhLabels[id].blocks[0].lines.forEach((item) => { item.size = Math.min(item.size, 28); });
  }

  const cards = (t) => `
    <g>
      <rect x="43" y="1219" width="464" height="147" rx="29" fill="${BLUE}"/>
      <text x="275" y="1270" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.brokerageTitle}</text>
      <text x="275" y="1310" text-anchor="middle" font-size="28" font-weight="400" fill="#fff">38.5M</text>
      <text x="275" y="1342" text-anchor="middle" font-size="24" font-weight="400" fill="#fff">${t.brokerageYy}</text>
      <rect x="520" y="1219" width="369" height="147" rx="29" fill="${BLUE}"/>
      <text x="704" y="1270" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.bankingTitle}</text>
      <text x="704" y="1310" text-anchor="middle" font-size="28" font-weight="400" fill="#fff">2.2M</text>
      <text x="704" y="1342" text-anchor="middle" font-size="24" font-weight="400" fill="#fff">${t.bankingYy}</text>
    </g>`;

  const logoSvg = `
    <rect width="236" height="230" fill="${BLUE}"/>
    <text x="21" y="111" font-family="Georgia,Times New Roman,serif" font-style="italic" font-size="62" fill="#fff">charles</text>
    <text x="21" y="164" font-family="Georgia,Times New Roman,serif" font-size="48" fill="#fff">SCHWAB</text>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'schwab-q4-fy25',
    name: 'Schwab · Q4 FY25',
    company: 'Schwab',
    meta: {
      company: 'Schwab', title: 'Schwab Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/schwab-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 196, titleSize: 120, titleWeight: 800, titleTextLength: 2240,
      hidePeriodStamp: true,
      logoWidth: 236, logoHeight: 230, logoY: 231, logoViewBox: '0 0 236 230', logoSvg,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: cards({ brokerageTitle: 'Active brokerage accounts', brokerageYy: '+6% Y/Y', bankingTitle: 'Banking accounts', bankingYy: '+11% Y/Y' }),
    nodes: [
      { id: 'net_interest', label: 'Net interest', value: 3.2, notes: ['+27% Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'asset_management', label: ['Asset', 'management'], value: 1.7, notes: ['+15% Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'trading', label: 'Trading', value: 1.1, notes: ['+22% Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'bank_deposit_account_fees', label: ['Bank deposit', 'account fees'], value: 0.2, notes: ['(1%) Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'other_revenue', label: 'Other', value: 0.1, notes: ['(27%) Y/Y'], type: 'source', col: 0, order: 4 },
      { id: 'revenue', label: 'Net revenue', value: 6.3, notes: ['+19% Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 3.2, type: 'profit', col: 2, order: 0 },
      { id: 'operating_expenses', label: ['Non interest', 'expenses'], value: 3.2, type: 'cost', col: 2, order: 1 },
      { id: 'net_income', label: 'Net income', value: 2.5, notes: ['+34% Y/Y'], type: 'profit', col: 3, order: 0 },
      { id: 'tax', label: 'Tax', value: 0.7, type: 'cost', col: 3, order: 1 },
      { id: 'compensation_benefits', label: ['Compensation', '& benefits'], value: 1.6, type: 'cost', col: 3, order: 2 },
      { id: 'professional_services', label: 'Professional services', value: 0.3, type: 'cost', col: 3, order: 3 },
      { id: 'occupancy', label: 'Occupancy', value: 0.3, type: 'cost', col: 3, order: 4 },
      { id: 'advertising', label: 'Advertising', value: 0.1, type: 'cost', col: 3, order: 5 },
      { id: 'comm', label: 'Comm.', value: 0.1, type: 'cost', col: 3, order: 6 },
      { id: 'da', label: 'D&A', value: 0.2, type: 'cost', col: 3, order: 7 },
      { id: 'acquired_intangible_assets', label: ['Acquired intangible', 'assets'], value: 0.1, type: 'cost', col: 3, order: 8 },
      { id: 'regulatory_fee', label: 'Regulatory fee', value: 0.1, type: 'cost', col: 3, order: 9 },
      { id: 'other_expenses', label: 'Other', value: 0.2, type: 'cost', col: 3, order: 10 },
    ],
    links: [
      { source: 'net_interest', target: 'revenue', value: 3.2, sourceWidth: 160, targetWidth: 165, sourceOrder: 0, targetOrder: 0 },
      { source: 'asset_management', target: 'revenue', value: 1.7, sourceWidth: 86, targetWidth: 88, sourceOrder: 0, targetOrder: 1 },
      { source: 'trading', target: 'revenue', value: 1.1, sourceWidth: 52, targetWidth: 54, sourceOrder: 0, targetOrder: 2 },
      { source: 'bank_deposit_account_fees', target: 'revenue', value: 0.2, sourceWidth: 10, targetWidth: 10, sourceOrder: 0, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 4, targetWidth: 5, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'pretax_income', value: 3.2, sourceWidth: 160, targetWidth: 160, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 3.2, sourceWidth: 162, targetWidth: 160, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 2.5, sourceWidth: 124, targetWidth: 124, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 0.7, sourceWidth: 36, targetWidth: 35, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'compensation_benefits', value: 1.6, sourceWidth: 126, targetWidth: 80, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'professional_services', value: 0.3, sourceWidth: 8, targetWidth: 15, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'occupancy', value: 0.3, sourceWidth: 3, targetWidth: 12, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'advertising', value: 0.1, sourceWidth: 2, targetWidth: 3, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'comm', value: 0.1, sourceWidth: 2, targetWidth: 5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 5, targetWidth: 9, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'acquired_intangible_assets', value: 0.1, sourceWidth: 2, targetWidth: 5, sourceOrder: 6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'regulatory_fee', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 7, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expenses', value: 0.2, sourceWidth: 11, targetWidth: 10, sourceOrder: 8, targetOrder: 0 },
    ],
    layout: {
      scale: 50,
      nodes: {
        net_interest: { x: 365, y: 394, width: 71, height: 160 }, asset_management: { x: 365, y: 682, width: 71, height: 86 }, trading: { x: 365, y: 885, width: 71, height: 52 },
        bank_deposit_account_fees: { x: 365, y: 1060, width: 71, height: 10 }, other_revenue: { x: 365, y: 1190, width: 71, height: 4 },
        revenue: { x: 987, y: 687, width: 72, height: 322 }, pretax_income: { x: 1610, y: 487, width: 72, height: 160 }, operating_expenses: { x: 1610, y: 951, width: 72, height: 160 },
        net_income: { x: 2233, y: 244, width: 71, height: 124 }, tax: { x: 2233, y: 457, width: 71, height: 35 }, compensation_benefits: { x: 2233, y: 543, width: 71, height: 80 },
        professional_services: { x: 2233, y: 687, width: 71, height: 15 }, occupancy: { x: 2233, y: 786, width: 71, height: 12 }, advertising: { x: 2233, y: 890, width: 71, height: 3 },
        comm: { x: 2233, y: 989, width: 71, height: 5 }, da: { x: 2233, y: 1082, width: 71, height: 9 }, acquired_intangible_assets: { x: 2233, y: 1184, width: 71, height: 5 },
        regulatory_fee: { x: 2233, y: 1284, width: 71, height: 1 }, other_expenses: { x: 2233, y: 1366, width: 71, height: 10 },
      },
      labels: enLabels,
    },
    i18n: {
      zh: {
        name: '嘉信理财 · 2025 财年第四季度',
        meta: { title: '嘉信理财 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 1850 },
        annotationsSvg: cards({ brokerageTitle: '活跃经纪账户', brokerageYy: '同比 +6%', bankingTitle: '银行账户', bankingYy: '同比 +11%' }),
        nodes: {
          net_interest: { label: '净利息收入', notes: ['同比 +27%'] }, asset_management: { label: '资产管理', notes: ['同比 +15%'] }, trading: { label: '交易', notes: ['同比 +22%'] },
          bank_deposit_account_fees: { label: '银行存款账户费用', notes: ['同比 (1%)'] }, other_revenue: { label: '其他', notes: ['同比 (27%)'] }, revenue: { label: '净收入', notes: ['同比 +19%'] },
          pretax_income: { label: '税前利润' }, operating_expenses: { label: '非利息费用' }, net_income: { label: '净利润', notes: ['同比 +34%'] }, tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' }, professional_services: { label: '专业服务' }, occupancy: { label: '场地占用' }, advertising: { label: '广告' }, comm: { label: '通信费用' },
          da: { label: '折旧与摊销' }, acquired_intangible_assets: { label: '收购无形资产' }, regulatory_fee: { label: '监管费用' }, other_expenses: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

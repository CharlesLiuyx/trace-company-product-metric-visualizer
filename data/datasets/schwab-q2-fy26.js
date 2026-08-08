/* Schwab Q2 FY26 income statement ($B), reconstructed as a fixed SVG Sankey. */
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

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const labels = (t) => ({
    net_interest: { blocks: [
      block(390, 308, [line('$value', 40), line(t.netInterestYy, 28, 400, NOTE)]),
      block(288, 464, [line(t.netInterest, 40, 800, BLUE)], 'end'),
    ] },
    asset_management: { blocks: [
      block(398, 576, [line('$value', 40), line(t.assetManagementYy, 28, 400, NOTE)]),
      block(303, 661, [line(t.assetManagement[0], 40, 800, BLUE), line(t.assetManagement[1], 40, 800, BLUE)], 'end', 10),
    ] },
    trading: { blocks: [
      block(390, 764, [line('$value', 40), line(t.tradingYy, 28, 400, NOTE)]),
      block(285, 861, [line(t.trading, 40, 800, BLUE)], 'end'),
    ] },
    bank_deposit_account_fees: { blocks: [
      block(398, 923, [line('$value', 40), line(t.bankFeesYy, 28, 400, NOTE)]),
      block(301, 979, [line(t.bankFees[0], 40, 800, BLUE), line(t.bankFees[1], 40, 800, BLUE)], 'end', 10),
    ] },
    other_revenue: { blocks: [
      block(390, 1049, [line('$value', 40), line(t.otherRevenueYy, 28, 400, NOTE)]),
      block(288, 1133, [line(t.otherRevenue, 40, 800, BLUE)], 'end'),
    ] },
    revenue: { blocks: [block(1019, 559, [line(t.revenue, 40, 800, BLUE), line('$value', 39, 400, BLUE), line(t.revenueYy, 28, 400, NOTE)], 'middle', 10)] },
    pretax_income: { blocks: [block(1647, 396, [line(t.pretaxIncome, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10)] },
    operating_expenses: { blocks: [block(1647, 1167, [line(t.nonInterestExpenses[0], 38, 800, RED_LABEL), line(t.nonInterestExpenses[1], 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)], 'middle', 10)] },
    net_income: { blocks: [block(2360, 224, [line(t.netIncome, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.netIncomeYy, 28, 400, NOTE)], 'start', 10)] },
    tax: { blocks: [block(2395, 410, [line(t.tax, 31, 800, RED_LABEL)], 'start')] },
    compensation_benefits: { blocks: [block(2349, 481, [line(t.compensation[0], 30, 800, RED_LABEL), line(t.compensation[1], 30, 800, RED_LABEL), line(t.compensationValue, 29, 400, RED_LABEL)], 'start', 8)] },
    professional_services: { blocks: [block(2322, 615, [line(t.professional, 30, 800, RED_LABEL), line(t.professionalValue, 29, 400, RED_LABEL)], 'start', 8)] },
    occupancy: { blocks: [block(2344, 742, [line(t.occupancy, 30, 800, RED_LABEL)], 'start')] },
    advertising: { blocks: [block(2338, 840, [line(t.advertising, 30, 800, RED_LABEL)], 'start')] },
    comm: { blocks: [block(2377, 939, [line(t.comm, 30, 800, RED_LABEL)], 'start')] },
    da: { blocks: [block(2387, 1032, [line(t.da, 30, 800, RED_LABEL)], 'start')] },
    acquired_intangible_assets: { blocks: [block(2335, 1104, [line(t.intangibles[0], 30, 800, RED_LABEL), line(t.intangibles[1], 30, 400, RED_LABEL)], 'start', 8)] },
    regulatory_fee: { blocks: [block(2315, 1214, [line(t.regulatoryFee, 30, 800, RED_LABEL)], 'start')] },
    other_expenses: { blocks: [block(2386, 1313, [line(t.otherExpenses, 30, 800, RED_LABEL)], 'start')] },
  });

  const enLabels = labels({
    netInterest: 'Net interest', netInterestYy: '+19% Y/Y', assetManagement: ['Asset', 'management'], assetManagementYy: '+16% Y/Y',
    trading: 'Trading', tradingYy: '+28% Y/Y', bankFees: ['Bank deposit', 'account fees'], bankFeesYy: '+35% Y/Y', otherRevenue: 'Other', otherRevenueYy: '+32% Y/Y',
    revenue: 'Net revenue', revenueYy: '+21% Y/Y', pretaxIncome: 'Pretax income', nonInterestExpenses: ['Non interest', 'expenses'],
    netIncome: 'Net income', netIncomeYy: '+40% Y/Y', tax: 'Tax ($0.9B)', compensation: ['Compensation', '& benefits'], compensationValue: '($1.8B)',
    professional: 'Professional services', professionalValue: '($0.3B)', occupancy: 'Occupancy ($0.3B)', advertising: 'Advertising ($0.1B)', comm: 'Comm. ($0.2B)', da: 'D&A ($0.2B)',
    intangibles: ['Acquired intangible', 'assets ($0.1B)'], regulatoryFee: 'Regulatory fee ($0.1B)', otherExpenses: 'Other ($0.3B)',
  });
  const zhLabels = labels({
    netInterest: '净利息收入', netInterestYy: '同比 +19%', assetManagement: ['资产', '管理'], assetManagementYy: '同比 +16%',
    trading: '交易', tradingYy: '同比 +28%', bankFees: ['银行存款', '账户费用'], bankFeesYy: '同比 +35%', otherRevenue: '其他', otherRevenueYy: '同比 +32%',
    revenue: '净收入', revenueYy: '同比 +21%', pretaxIncome: '税前利润', nonInterestExpenses: ['非利息', '费用'],
    netIncome: '净利润', netIncomeYy: '同比 +40%', tax: '税费（$0.9B）', compensation: ['薪酬', '与福利'], compensationValue: '（$1.8B）',
    professional: '专业服务（$0.3B）', professionalValue: '', occupancy: '场地占用（$0.3B）', advertising: '广告（$0.1B）', comm: '通信费用（$0.2B）', da: '折旧与摊销（$0.2B）',
    intangibles: ['收购无形资产', '（$0.1B）'], regulatoryFee: '监管费用（$0.1B）', otherExpenses: '其他（$0.3B）',
  });
  for (const id of ['tax', 'professional_services', 'occupancy', 'advertising', 'comm', 'da', 'acquired_intangible_assets', 'regulatory_fee', 'other_expenses']) {
    zhLabels[id].blocks[0].x = 2340;
    zhLabels[id].blocks[0].lines.forEach((item) => { item.size = Math.min(item.size, 28); });
  }

  const cards = (t) => `
    <g>
      <rect x="43" y="1210" width="464" height="148" rx="29" fill="${BLUE}"/>
      <text x="275" y="1261" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.brokerageTitle}</text>
      <text x="275" y="1301" text-anchor="middle" font-size="28" font-weight="400" fill="#fff">39.8M</text>
      <text x="275" y="1333" text-anchor="middle" font-size="24" font-weight="400" fill="#fff">${t.brokerageYy}</text>
      <rect x="520" y="1210" width="369" height="148" rx="29" fill="${BLUE}"/>
      <text x="704" y="1261" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.bankingTitle}</text>
      <text x="704" y="1301" text-anchor="middle" font-size="28" font-weight="400" fill="#fff">2.4M</text>
      <text x="704" y="1333" text-anchor="middle" font-size="24" font-weight="400" fill="#fff">${t.bankingYy}</text>
    </g>`;

  const logoSvg = `
    <rect width="229" height="229" fill="${BLUE}"/>
    <text x="21" y="111" font-family="Georgia,Times New Roman,serif" font-style="italic" font-size="62" fill="#fff">charles</text>
    <text x="21" y="164" font-family="Georgia,Times New Roman,serif" font-size="48" fill="#fff">SCHWAB</text>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'schwab-q2-fy26',
    name: 'Schwab · Q2 FY26',
    company: 'Schwab',
    meta: {
      company: 'Schwab', title: 'Schwab Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/schwab-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 196, titleSize: 120, titleWeight: 800, titleTextLength: 2240,
      hidePeriodStamp: true,
      logoWidth: 229, logoHeight: 229, logoY: 289, logoViewBox: '0 0 229 229', logoSvg,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: cards({ brokerageTitle: 'Active brokerage accounts', brokerageYy: '+6% Y/Y', bankingTitle: 'Banking accounts', bankingYy: '+12% Y/Y' }),
    nodes: [
      { id: 'net_interest', label: 'Net interest', value: 3.4, notes: ['+19% Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'asset_management', label: ['Asset', 'management'], value: 1.8, notes: ['+16% Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'trading', label: 'Trading', value: 1.2, notes: ['+28% Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'bank_deposit_account_fees', label: ['Bank deposit', 'account fees'], value: 0.3, notes: ['+35% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'other_revenue', label: 'Other', value: 0.3, notes: ['+32% Y/Y'], type: 'source', col: 0, order: 4 },
      { id: 'revenue', label: 'Net revenue', value: 7.1, notes: ['+21% Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 3.7, type: 'profit', col: 2, order: 0 },
      { id: 'operating_expenses', label: ['Non interest', 'expenses'], value: 3.4, type: 'cost', col: 2, order: 1 },
      { id: 'net_income', label: 'Net income', value: 2.8, notes: ['+40% Y/Y'], type: 'profit', col: 3, order: 0 },
      { id: 'tax', label: 'Tax', value: 0.9, type: 'cost', col: 3, order: 1 },
      { id: 'compensation_benefits', label: ['Compensation', '& benefits'], value: 1.8, type: 'cost', col: 3, order: 2 },
      { id: 'professional_services', label: 'Professional services', value: 0.3, type: 'cost', col: 3, order: 3 },
      { id: 'occupancy', label: 'Occupancy', value: 0.3, type: 'cost', col: 3, order: 4 },
      { id: 'advertising', label: 'Advertising', value: 0.1, type: 'cost', col: 3, order: 5 },
      { id: 'comm', label: 'Comm.', value: 0.2, type: 'cost', col: 3, order: 6 },
      { id: 'da', label: 'D&A', value: 0.2, type: 'cost', col: 3, order: 7 },
      { id: 'acquired_intangible_assets', label: ['Acquired intangible', 'assets'], value: 0.1, type: 'cost', col: 3, order: 8 },
      { id: 'regulatory_fee', label: 'Regulatory fee', value: 0.1, type: 'cost', col: 3, order: 9 },
      { id: 'other_expenses', label: 'Other', value: 0.3, type: 'cost', col: 3, order: 10 },
    ],
    links: [
      { source: 'net_interest', target: 'revenue', value: 3.4, sourceWidth: 152, targetWidth: 156, sourceOrder: 0, targetOrder: 0 },
      { source: 'asset_management', target: 'revenue', value: 1.8, sourceWidth: 82, targetWidth: 83, sourceOrder: 0, targetOrder: 1 },
      { source: 'trading', target: 'revenue', value: 1.2, sourceWidth: 54, targetWidth: 55, sourceOrder: 0, targetOrder: 2 },
      { source: 'bank_deposit_account_fees', target: 'revenue', value: 0.3, sourceWidth: 14, targetWidth: 14, sourceOrder: 0, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.3, sourceWidth: 13, targetWidth: 14, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'pretax_income', value: 3.7, sourceWidth: 166, targetWidth: 165, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 3.4, sourceWidth: 156, targetWidth: 154, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 2.8, sourceWidth: 127, targetWidth: 125, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 0.9, sourceWidth: 38, targetWidth: 37, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'compensation_benefits', value: 1.8, sourceWidth: 117, targetWidth: 79, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'professional_services', value: 0.3, sourceWidth: 8, targetWidth: 12, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'occupancy', value: 0.3, sourceWidth: 3, targetWidth: 12, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'advertising', value: 0.1, sourceWidth: 2, targetWidth: 3, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'comm', value: 0.2, sourceWidth: 4, targetWidth: 6, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 5, targetWidth: 7, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'acquired_intangible_assets', value: 0.1, sourceWidth: 2, targetWidth: 5, sourceOrder: 6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'regulatory_fee', value: 0.1, sourceWidth: 1, targetWidth: 2, sourceOrder: 7, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expenses', value: 0.3, sourceWidth: 12, targetWidth: 12, sourceOrder: 8, targetOrder: 0 },
    ],
    layout: {
      scale: 50,
      nodes: {
        net_interest: { x: 365, y: 409, width: 71, height: 152 }, asset_management: { x: 365, y: 666, width: 71, height: 82 }, trading: { x: 365, y: 856, width: 71, height: 54 },
        bank_deposit_account_fees: { x: 365, y: 1025, width: 71, height: 14 }, other_revenue: { x: 365, y: 1155, width: 71, height: 13 },
        revenue: { x: 987, y: 700, width: 72, height: 322 }, pretax_income: { x: 1610, y: 506, width: 72, height: 165 }, operating_expenses: { x: 1610, y: 996, width: 72, height: 154 },
        net_income: { x: 2233, y: 220, width: 71, height: 125 }, tax: { x: 2233, y: 404, width: 71, height: 37 }, compensation_benefits: { x: 2233, y: 491, width: 71, height: 79 },
        professional_services: { x: 2233, y: 641, width: 71, height: 12 }, occupancy: { x: 2233, y: 746, width: 71, height: 12 }, advertising: { x: 2233, y: 851, width: 71, height: 3 },
        comm: { x: 2233, y: 945, width: 71, height: 6 }, da: { x: 2233, y: 1038, width: 71, height: 7 }, acquired_intangible_assets: { x: 2233, y: 1133, width: 71, height: 5 },
        regulatory_fee: { x: 2233, y: 1225, width: 71, height: 2 }, other_expenses: { x: 2233, y: 1319, width: 71, height: 12 },
      },
      labels: enLabels,
    },
    i18n: {
      zh: {
        name: '嘉信理财 · 2026 财年第二季度',
        meta: { title: '嘉信理财 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 1850 },
        annotationsSvg: cards({ brokerageTitle: '活跃经纪账户', brokerageYy: '同比 +6%', bankingTitle: '银行账户', bankingYy: '同比 +12%' }),
        nodes: {
          net_interest: { label: '净利息收入', notes: ['同比 +19%'] }, asset_management: { label: '资产管理', notes: ['同比 +16%'] }, trading: { label: '交易', notes: ['同比 +28%'] },
          bank_deposit_account_fees: { label: '银行存款账户费用', notes: ['同比 +35%'] }, other_revenue: { label: '其他', notes: ['同比 +32%'] }, revenue: { label: '净收入', notes: ['同比 +21%'] },
          pretax_income: { label: '税前利润' }, operating_expenses: { label: '非利息费用' }, net_income: { label: '净利润', notes: ['同比 +40%'] }, tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' }, professional_services: { label: '专业服务' }, occupancy: { label: '场地占用' }, advertising: { label: '广告' }, comm: { label: '通信费用' },
          da: { label: '折旧与摊销' }, acquired_intangible_assets: { label: '收购无形资产' }, regulatory_fee: { label: '监管费用' }, other_expenses: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

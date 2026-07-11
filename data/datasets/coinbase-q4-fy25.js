/* Fixed SVG Sankey measured from input/processed/coinbase-q4-fy25.png. */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const BLUE = '#0052ff';
  const BLUE_LINK = '#85aaf7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2440;

  const EN = {
    consumer: ['Consumer'], consumerYy: '(46%) Y/Y',
    institutions: ['Institutions'], institutionsYy: '+31% Y/Y',
    otherTransaction: ['Other'], otherTransactionYy: '(6%) Y/Y',
    stablecoin: ['Stablecoin'], stablecoinYy: '+61% Y/Y',
    blockchain: ['Blockchain', 'rewards'], blockchainYy: '(29%) Y/Y',
    interest: ['Interest', '& finance fee', 'income'], interestYy: '(9%) Y/Y',
    otherSub: ['Other sub'], otherSubYy: '+13% Y/Y',
    transactionBased: ['Transaction-based'], transactionBasedYy: '(37%) Y/Y',
    subscriptionServices: ['Subscription', '& Services'], subscriptionServicesYy: '+13% Y/Y',
    otherRevenue: ['Other'], otherRevenueYy: '(5%) Y/Y',
    revenue: ['Revenue'], revenueYy: '(22%) Y/Y',
    operatingProfit: ['Operating profit'], operatingMargin: '15% margin', operatingPp: '(30pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'],
    netLoss: ['Net loss'], otherCosts: ['Other costs'],
    technology: ['Technology'], technologyShare: '28% of revenue', technologyPp: '+12pp Y/Y',
    ga: ['G&A'], gaShare: '25% of revenue', gaPp: '+9pp Y/Y',
    sm: ['S&M'], smShare: '18% of revenue', smPp: '+8pp Y/Y',
    transactionCosts: ['Transaction'], transactionShare: '12% of revenue', transactionPp: '(2pp) Y/Y',
    otherOperatingCosts: ['Other'],
  };
  const ZH = {
    consumer: ['消费者'], consumerYy: '同比 (46%)',
    institutions: ['机构'], institutionsYy: '同比 +31%',
    otherTransaction: ['其他'], otherTransactionYy: '同比 (6%)',
    stablecoin: ['稳定币'], stablecoinYy: '同比 +61%',
    blockchain: ['区块链奖励'], blockchainYy: '同比 (29%)',
    interest: ['利息和', '金融手续费', '收入'], interestYy: '同比 (9%)',
    otherSub: ['其他订阅'], otherSubYy: '同比 +13%',
    transactionBased: ['交易收入'], transactionBasedYy: '同比 (37%)',
    subscriptionServices: ['订阅与服务'], subscriptionServicesYy: '同比 +13%',
    otherRevenue: ['其他'], otherRevenueYy: '同比 (5%)',
    revenue: ['收入'], revenueYy: '同比 (22%)',
    operatingProfit: ['营业利润'], operatingMargin: '利润率 15%', operatingPp: '同比 (30 个百分点)',
    operatingExpenses: ['运营费用'],
    netLoss: ['净亏损'], otherCosts: ['其他成本'],
    technology: ['技术'], technologyShare: '占收入 28%', technologyPp: '同比 +12 个百分点',
    ga: ['管理费用'], gaShare: '占收入 25%', gaPp: '同比 +9 个百分点',
    sm: ['销售与营销'], smShare: '占收入 18%', smPp: '同比 +8 个百分点',
    transactionCosts: ['交易'], transactionShare: '占收入 12%', transactionPp: '同比 (2 个百分点)',
    otherOperatingCosts: ['其他'],
  };

  const nameLines = (lines, color, size = 40) => lines.map((text) => ({ text, size, weight: 800, color }));
  const valueLine = (color, size = 39) => ({ text: '$value', size, weight: 400, color });
  const noteLine = (text, size = 29) => ({ text, size, weight: 400, color: NOTE });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  function leftLabel(x, valueTop, nameTop, name, yy, nameSize = 40) {
    return {
      blocks: [
        block(x, valueTop, 'middle', [valueLine(BLUE), noteLine(yy)]),
        block(310, nameTop, 'end', nameLines(name, BLUE, nameSize), 5),
      ],
    };
  }

  function sourceLabels(t) {
    return {
      consumer: leftLabel(410, 258, 405, t.consumer, t.consumerYy),
      institutions: leftLabel(410, 503, 590, t.institutions, t.institutionsYy),
      other_transaction: leftLabel(410, 643, 718, t.otherTransaction, t.otherTransactionYy),
      stablecoin: leftLabel(410, 783, 888, t.stablecoin, t.stablecoinYy),
      blockchain_rewards: leftLabel(410, 960, 997, t.blockchain, t.blockchainYy),
      interest_finance_fee_income: leftLabel(410, 1088, 1127, t.interest, t.interestYy),
      other_subscription: leftLabel(410, 1218, 1302, t.otherSub, t.otherSubYy),
      transaction_based: { blocks: [block(877, 361, 'middle', [...nameLines(t.transactionBased, BLUE), valueLine(BLUE), noteLine(t.transactionBasedYy)], 9)] },
      subscription_services: { blocks: [block(877, 751, 'middle', [...nameLines(t.subscriptionServices, BLUE), valueLine(BLUE), noteLine(t.subscriptionServicesYy)], 9)] },
      other_revenue: { blocks: [block(877, 1137, 'middle', [...nameLines(t.otherRevenue, BLUE), valueLine(BLUE), noteLine(t.otherRevenueYy)], 9)] },
      revenue: { blocks: [block(1344, 501, 'middle', [...nameLines(t.revenue, BLUE, 42), valueLine(BLUE, 41), noteLine(t.revenueYy)], 9)] },
      operating_profit: { blocks: [block(1812, 319, 'middle', [...nameLines(t.operatingProfit, GREEN_LABEL, 40), valueLine(GREEN_LABEL, 39), noteLine(t.operatingMargin), noteLine(t.operatingPp)], 8)] },
      operating_expenses: { blocks: [block(1812, 1080, 'middle', [...nameLines(t.operatingExpenses, RED_LABEL, 38), valueLine(RED_LABEL, 36)], 8)] },
      net_loss: { blocks: [block(2122, 216, 'middle', [...nameLines(t.netLoss, RED_LABEL, 40), valueLine(RED_LABEL, 39)], 8)] },
      other_costs: { blocks: [block(RIGHT_LABEL_X, 386, 'middle', [...nameLines(t.otherCosts, RED_LABEL, 31), valueLine(RED_LABEL, 30)], 7)] },
      technology: { blocks: [block(RIGHT_LABEL_X, 628, 'middle', [...nameLines(t.technology, RED_LABEL, 31), valueLine(RED_LABEL, 30), noteLine(t.technologyShare, 28), noteLine(t.technologyPp, 28)], 7)] },
      ga: { blocks: [block(RIGHT_LABEL_X, 806, 'middle', [...nameLines(t.ga, RED_LABEL, 31), valueLine(RED_LABEL, 30), noteLine(t.gaShare, 28), noteLine(t.gaPp, 28)], 7)] },
      sm: { blocks: [block(RIGHT_LABEL_X, 977, 'middle', [...nameLines(t.sm, RED_LABEL, 31), valueLine(RED_LABEL, 30), noteLine(t.smShare, 28), noteLine(t.smPp, 28)], 7)] },
      transaction_costs: { blocks: [block(RIGHT_LABEL_X, 1145, 'middle', [...nameLines(t.transactionCosts, RED_LABEL, 31), valueLine(RED_LABEL, 30), noteLine(t.transactionShare, 28), noteLine(t.transactionPp, 28)], 7)] },
      other_operating_costs: { blocks: [block(RIGHT_LABEL_X, 1303, 'middle', [...nameLines(t.otherOperatingCosts, RED_LABEL, 31), valueLine(RED_LABEL, 30)], 7)] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coinbase-q4-fy25',
    name: 'Coinbase · Q4 FY25',
    company: 'Coinbase',
    meta: {
      company: 'Coinbase',
      title: 'Coinbase Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/coinbase-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 178,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2290,
      periodX: 1334,
      periodY: 100,
      periodNoteY: 130,
      logoWidth: 253,
      logoHeight: 242,
      logoY: 214,
      logoViewBox: '0 0 253 242',
      logoSvg: (BUSINESS_ICONS.coinbaseLogo || '').replaceAll('#0052fe', BLUE),
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: 'transparent',
      noteColor: 'transparent',
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: RED_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 0.182,
      nodes: {
        consumer: { x: 374, y: 346, width: 72, height: 133 },
        institutions: { x: 374, y: 591, width: 72, height: 33 },
        other_transaction: { x: 374, y: 731, width: 72, height: 10 },
        stablecoin: { x: 374, y: 871, width: 72, height: 65 },
        blockchain_rewards: { x: 374, y: 1048, width: 72, height: 25 },
        interest_finance_fee_income: { x: 374, y: 1179, width: 72, height: 9 },
        other_subscription: { x: 374, y: 1308, width: 72, height: 26 },
        transaction_based: { x: 842, y: 507, width: 71, height: 179 },
        subscription_services: { x: 842, y: 954, width: 71, height: 132 },
        other_revenue: { x: 842, y: 1282, width: 71, height: 11 },
        revenue: { x: 1308, y: 644, width: 72, height: 326 },
        operating_profit: { x: 1776, y: 505, width: 72, height: 47 },
        operating_expenses: { x: 1776, y: 784, width: 72, height: 275 },
        net_loss: { x: 2086, y: 318, width: 72, height: 121 },
        other_costs: { x: 2242, y: 340, width: 72, height: 170 },
        technology: { x: 2242, y: 619, width: 72, height: 90 },
        ga: { x: 2242, y: 813, width: 72, height: 81 },
        sm: { x: 2242, y: 994, width: 72, height: 56 },
        transaction_costs: { x: 2242, y: 1168, width: 72, height: 39 },
        other_operating_costs: { x: 2242, y: 1338, width: 72, height: 2 },
      },
      labels: sourceLabels(EN),
    },
    nodes: [
      { id: 'consumer', label: 'Consumer', value: 734, notes: ['(46%) Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'institutions', label: 'Institutions', value: 185, notes: ['+31% Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'other_transaction', label: 'Other', value: 64, notes: ['(6%) Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'stablecoin', label: 'Stablecoin', value: 364, notes: ['+61% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'blockchain_rewards', label: ['Blockchain', 'rewards'], value: 152, notes: ['(29%) Y/Y'], type: 'source', col: 0, order: 4 },
      { id: 'interest_finance_fee_income', label: ['Interest', '& finance fee', 'income'], value: 60, notes: ['(9%) Y/Y'], type: 'source', col: 0, order: 5 },
      { id: 'other_subscription', label: 'Other sub', value: 152, notes: ['+13% Y/Y'], type: 'source', col: 0, order: 6 },
      { id: 'transaction_based', label: 'Transaction-based', value: 983, notes: ['(37%) Y/Y'], type: 'source', col: 1, order: 0 },
      { id: 'subscription_services', label: ['Subscription', '& Services'], value: 727, notes: ['+13% Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'other_revenue', label: 'Other', value: 71, notes: ['(5%) Y/Y'], type: 'source', col: 1, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 1781, valueText: '$1,781M', notes: ['(22%) Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'operating_profit', label: 'Operating profit', value: 274, notes: ['15% margin', '(30pp) Y/Y'], type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 1507, valueText: '($1,507M)', type: 'cost', col: 3, order: 1 },
      { id: 'net_loss', label: 'Net loss', value: -667, valueText: '($667M)', type: 'cost', col: 4, order: 0 },
      { id: 'other_costs', label: 'Other costs', value: 940, valueText: '($940M)', type: 'cost', col: 5, order: 0 },
      { id: 'technology', label: 'Technology', value: 497, notes: ['28% of revenue', '+12pp Y/Y'], type: 'cost', col: 5, order: 1 },
      { id: 'ga', label: 'G&A', value: 453, notes: ['25% of revenue', '+9pp Y/Y'], type: 'cost', col: 5, order: 2 },
      { id: 'sm', label: 'S&M', value: 315, notes: ['18% of revenue', '+8pp Y/Y'], type: 'cost', col: 5, order: 3 },
      { id: 'transaction_costs', label: 'Transaction', value: 219, notes: ['12% of revenue', '(2pp) Y/Y'], type: 'cost', col: 5, order: 4 },
      { id: 'other_operating_costs', label: 'Other', value: 24, type: 'cost', col: 5, order: 5 },
    ],
    links: [
      { source: 'consumer', target: 'transaction_based', value: 734, width: 133, sourceOrder: 0, targetOrder: 0 },
      { source: 'institutions', target: 'transaction_based', value: 185, width: 33, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_transaction', target: 'transaction_based', value: 64, sourceWidth: 10, targetWidth: 13, sourceOrder: 0, targetOrder: 2 },
      { source: 'transaction_based', target: 'revenue', value: 983, width: 179, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'stablecoin', target: 'subscription_services', value: 364, width: 65, sourceOrder: 0, targetOrder: 0 },
      { source: 'blockchain_rewards', target: 'subscription_services', value: 152, width: 25, sourceOrder: 0, targetOrder: 1 },
      { source: 'interest_finance_fee_income', target: 'subscription_services', value: 60, width: 9, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_subscription', target: 'subscription_services', value: 152, sourceWidth: 26, targetWidth: 33, sourceOrder: 0, targetOrder: 3 },
      { source: 'subscription_services', target: 'revenue', value: 727, width: 132, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 71, sourceWidth: 11, targetWidth: 15, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'operating_profit', value: 274, sourceWidth: 51, targetWidth: 47, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1507, sourceWidth: 275, targetWidth: 275, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology', value: 497, sourceWidth: 92, targetWidth: 90, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 453, sourceWidth: 83, targetWidth: 81, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 315, sourceWidth: 57, targetWidth: 56, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'transaction_costs', value: 219, sourceWidth: 40, targetWidth: 39, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_costs', value: 24, sourceWidth: 3, targetWidth: 2, sourceOrder: 4, targetOrder: 0 },
      { source: 'net_loss', target: 'other_costs', value: 667, sourceWidth: 121, targetWidth: 121, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_costs', value: 274, sourceWidth: 47, targetWidth: 49, sourceOrder: 0, targetOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Coinbase · 2025 财年第四季度',
        meta: { title: 'Coinbase 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleSize: 112, titleTextLength: 1820 },
        nodes: {
          consumer: { label: '消费者', notes: ['同比 (46%)'] }, institutions: { label: '机构', notes: ['同比 +31%'] }, other_transaction: { label: '其他', notes: ['同比 (6%)'] },
          stablecoin: { label: '稳定币', notes: ['同比 +61%'] }, blockchain_rewards: { label: '区块链奖励', notes: ['同比 (29%)'] }, interest_finance_fee_income: { label: '利息和金融手续费收入', notes: ['同比 (9%)'] }, other_subscription: { label: '其他订阅', notes: ['同比 +13%'] },
          transaction_based: { label: '交易收入', notes: ['同比 (37%)'] }, subscription_services: { label: '订阅与服务', notes: ['同比 +13%'] }, other_revenue: { label: '其他', notes: ['同比 (5%)'] }, revenue: { label: '收入', notes: ['同比 (22%)'] },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (30 个百分点)'] }, operating_expenses: { label: '运营费用' }, net_loss: { label: '净亏损' }, other_costs: { label: '其他成本' },
          technology: { label: '技术', notes: ['占收入 28%', '同比 +12 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 25%', '同比 +9 个百分点'] }, sm: { label: '销售与营销', notes: ['占收入 18%', '同比 +8 个百分点'] }, transaction_costs: { label: '交易', notes: ['占收入 12%', '同比 (2 个百分点)'] }, other_operating_costs: { label: '其他' },
        },
        layout: { labels: sourceLabels(ZH) },
      },
    },
  });
})();

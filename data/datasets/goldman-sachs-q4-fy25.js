/* Goldman Sachs Q4 FY25 income statement ($B), reconstructed as SVG. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#686868';
  const BLUE = '#6b96c3';
  const BLUE_LABEL = '#6b97c6';
  const BLUE_LINK = '#b4c9dc';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#9a1808';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2360;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const labels = (t) => ({
    cost_of_revenue: { blocks: [] },
    gross_profit: { blocks: [] },
    global_banking_markets: { blocks: [
      block(433, 385, [line('$value', 39), line(t.globalYy, 28, 400, NOTE)]),
      block(381, 522, [line(t.globalName[0], 38, 800), line(t.globalName[1], 38, 800), line(t.globalMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    asset_wealth_management: { blocks: [
      block(433, 858, [line('$value', 39), line(t.assetYy, 28, 400, NOTE)]),
      block(381, 951, [line(t.assetName[0], 38, 800), line(t.assetName[1], 38, 800), line(t.assetMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    revenue: { blocks: [block(968, 508, [line(t.revenue, 40, 800), line('$value', 39), line(t.revenueYy, 28, 400, NOTE)], 'start', 10)] },
    platform_solutions: { blocks: [
      block(1242, 1034, [line(t.platformValue, 36, 400, BLUE_LABEL), line(t.platformName[0], 38, 800, BLUE_LABEL), line(t.platformName[1], 38, 800, BLUE_LABEL), line(t.platformMargin, 28, 400, NOTE)], 'middle', 10),
    ] },
    provision_for_credit_loss: { blocks: [block(1424, 276, [line(t.provisionName[0], 39, 800, GREEN_LABEL), line(t.provisionName[1], 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10)] },
    pretax_income: { blocks: [block(1679, 365, [line(t.pretax, 39, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10)] },
    operating_expenses: { blocks: [block(1679, 1000, [line(t.operatingExpenses[0], 38, 800, RED_LABEL), line(t.operatingExpenses[1], 38, 800, RED_LABEL), line(t.operatingValue, 36, 400, RED_LABEL)], 'middle', 10)] },
    net_income: { blocks: [block(2379, 224, [line(t.netIncome, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.netYy, 28, 400, NOTE)], 'start', 10)] },
    tax: { blocks: [block(2440, 446, [line(t.tax, 31, 800, RED_LABEL), line(t.taxValue, 30, 400, RED_LABEL)], 'start', 8)] },
    compensation_benefits: { blocks: [block(RIGHT_LABEL_X, 551, [line(t.compensation[0], 30, 800, RED_LABEL), line(t.compensation[1], 30, 800, RED_LABEL), line(t.compensationValue, 29, 400, RED_LABEL)], 'start', 8)] },
    transaction_based: { blocks: [block(RIGHT_LABEL_X, 701, [line(t.transaction, 30, 800, RED_LABEL), line(t.transactionValue, 29, 400, RED_LABEL)], 'start', 8)] },
    market_development: { blocks: [block(RIGHT_LABEL_X, 798, [line(t.market, 30, 800, RED_LABEL), line(t.marketValue, 29, 400, RED_LABEL)], 'start', 8)] },
    communication_technology: { blocks: [block(RIGHT_LABEL_X, 891, [line(t.communication[0], 30, 800, RED_LABEL), line(t.communication[1], 30, 800, RED_LABEL), line(t.communicationValue, 29, 400, RED_LABEL)], 'start', 8)] },
    da: { blocks: [block(RIGHT_LABEL_X, 995, [line(t.da, 30, 800, RED_LABEL), line(t.daValue, 29, 400, RED_LABEL)], 'start', 8)] },
    occupancy: { blocks: [block(RIGHT_LABEL_X, 1096, [line(t.occupancy, 30, 800, RED_LABEL), line(t.occupancyValue, 29, 400, RED_LABEL)], 'start', 8)] },
    professional_fees: { blocks: [block(RIGHT_LABEL_X, 1203, [line(t.professional, 30, 800, RED_LABEL), line(t.professionalValue, 29, 400, RED_LABEL)], 'start', 8)] },
    other: { blocks: [block(RIGHT_LABEL_X, 1304, [line(t.other, 30, 800, RED_LABEL), line(t.otherValue, 29, 400, RED_LABEL)], 'start', 8)] },
  });

  const enLabels = labels({
    globalYy: '+22% Y/Y', globalName: ['Global Banking &', 'Markets'], globalMargin: '34% net margin',
    assetYy: '(1%) Y/Y', assetName: ['Asset & Wealth', 'Management'], assetMargin: '20% net margin',
    revenue: 'Revenue', revenueYy: '(3%) Y/Y', platformValue: '($1.7B)', platformName: ['Platform', 'Solutions'], platformMargin: '(7%) net margin',
    provisionName: ['Provision for', 'credit loss'], pretax: 'Pretax income', operatingExpenses: ['Operating', 'expenses'], operatingValue: '($9.7B)',
    netIncome: 'Net income', netYy: '+12% Y/Y', tax: 'Tax', taxValue: '($1.2B)', compensation: ['Compensation', '& benefits'], compensationValue: '($4.7B)',
    transaction: 'Transaction based', transactionValue: '($2.2B)', market: 'Market dev.', marketValue: '($0.2B)', communication: ['Communication,', 'Technology'], communicationValue: '($0.6B)',
    da: 'D&A', daValue: '($0.5B)', occupancy: 'Occupancy', occupancyValue: '($0.2B)', professional: 'Professional fees', professionalValue: '($0.5B)', other: 'Other', otherValue: '($0.8B)',
  });
  const zhLabels = labels({
    globalYy: '同比 +22%', globalName: ['全球银行', '与市场'], globalMargin: '净利率 34%',
    assetYy: '同比 (1%)', assetName: ['资产与财富', '管理'], assetMargin: '净利率 20%',
    revenue: '收入', revenueYy: '同比 (3%)', platformValue: '（$1.7B）', platformName: ['平台', '解决方案'], platformMargin: '净利率 (7%)',
    provisionName: ['信用损失', '拨备'], pretax: '税前利润', operatingExpenses: ['运营', '费用'], operatingValue: '（$9.7B）',
    netIncome: '净利润', netYy: '同比 +12%', tax: '税费', taxValue: '（$1.2B）', compensation: ['薪酬', '与福利'], compensationValue: '（$4.7B）',
    transaction: '交易相关', transactionValue: '（$2.2B）', market: '市场开发', marketValue: '（$0.2B）', communication: ['通信与', '技术'], communicationValue: '（$0.6B）',
    da: '折旧与摊销', daValue: '（$0.5B）', occupancy: '场地占用', occupancyValue: '（$0.2B）', professional: '专业费用', professionalValue: '（$0.5B）', other: '其他', otherValue: '（$0.8B）',
  });
  for (const id of ['tax', 'compensation_benefits', 'transaction_based', 'market_development', 'communication_technology', 'da', 'occupancy', 'professional_fees', 'other']) {
    zhLabels[id].blocks[0].x = 2360;
    zhLabels[id].blocks[0].lines.forEach((item) => { item.size = Math.min(item.size, 28); });
  }

  const annotations = (t) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="123" y="256" font-size="39" font-weight="800" fill="${TITLE}">${t.segment}</text>
      <g><rect x="117" y="1134" width="242" height="148" rx="29" fill="${BLUE}"/><text x="238" y="1187" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.cet1}</text><text x="238" y="1225" text-anchor="middle" font-size="28" fill="#fff">14.4%</text><text x="238" y="1256" text-anchor="middle" font-size="22" fill="#fff">${t.cet1Delta}</text></g>
      <g><rect x="367" y="1134" width="352" height="148" rx="29" fill="${BLUE}"/><text x="543" y="1187" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.roe}</text><text x="543" y="1225" text-anchor="middle" font-size="28" fill="#fff">16.0%</text><text x="543" y="1256" text-anchor="middle" font-size="22" fill="#fff">${t.roeDelta}</text></g>
      <text x="244" y="1320" font-size="28" fill="${NOTE}">${t.cet1Note}</text><text x="162" y="1352" font-size="28" fill="${NOTE}">${t.roeNote}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'goldman-sachs-q4-fy25',
    name: 'Goldman Sachs · Q4 FY25',
    company: 'Goldman Sachs',
    meta: {
      company: 'Goldman Sachs', title: 'Goldman Sachs Q4 FY25 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/goldman-sachs-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 196, titleSize: 120, titleWeight: 800, titleTextLength: 2508,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 244, logoHeight: 242, logoY: 241, logoViewBox: '0 0 244 242', logoSvg: BUSINESS_ICONS.goldmanSachsWordmark || '',
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations({ segment: 'By Business Segment', cet1: 'CET1 ratio', cet1Delta: '(0.6pp) Y/Y', roe: 'Annualized ROE', roeDelta: '+1.4pp Y/Y', cet1Note: 'CET1 = Common Equity Tier 1', roeNote: 'ROE = Return on average common equity' }),
    nodes: [
      { id: 'global_banking_markets', label: ['Global Banking &', 'Markets'], value: 10.4, notes: ['+22% Y/Y', '34% net margin'], type: 'source', col: 0, order: 0 },
      { id: 'asset_wealth_management', label: ['Asset & Wealth', 'Management'], value: 4.7, notes: ['(1%) Y/Y', '20% net margin'], type: 'source', col: 0, order: 1 },
      { id: 'revenue', label: 'Revenue', value: 13.5, notes: ['(3%) Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'cost_of_revenue', label: '', value: 0, type: 'cost', col: 1, order: 1, color: BG, labelColor: BG, linkTint: BG },
      { id: 'gross_profit', label: '', value: 13.5, type: 'profit', col: 1, order: 2, color: BG, labelColor: BG, linkTint: BG },
      { id: 'platform_solutions', label: ['Platform', 'Solutions'], value: -1.7, notes: ['(7%) net margin'], type: 'source', col: 2, order: 3 },
      { id: 'provision_for_credit_loss', label: ['Provision for', 'credit loss'], value: 2.1, type: 'profit', col: 2, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 5.9, type: 'profit', col: 2, order: 1 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 9.7, type: 'cost', col: 2, order: 2 },
      { id: 'net_income', label: 'Net income', value: 4.6, notes: ['+12% Y/Y'], type: 'profit', col: 3, order: 0 },
      { id: 'tax', label: 'Tax', value: 1.2, type: 'cost', col: 3, order: 1 },
      { id: 'compensation_benefits', label: ['Compensation', '& benefits'], value: 4.7, type: 'cost', col: 3, order: 2 },
      { id: 'transaction_based', label: 'Transaction based', value: 2.2, type: 'cost', col: 3, order: 3 },
      { id: 'market_development', label: 'Market dev.', value: 0.2, type: 'cost', col: 3, order: 4 },
      { id: 'communication_technology', label: ['Communication,', 'Technology'], value: 0.6, type: 'cost', col: 3, order: 5 },
      { id: 'da', label: 'D&A', value: 0.5, type: 'cost', col: 3, order: 6 },
      { id: 'occupancy', label: 'Occupancy', value: 0.2, type: 'cost', col: 3, order: 7 },
      { id: 'professional_fees', label: 'Professional fees', value: 0.5, type: 'cost', col: 3, order: 8 },
      { id: 'other', label: 'Other', value: 0.8, type: 'cost', col: 3, order: 9 },
    ],
    links: [
      { source: 'global_banking_markets', target: 'revenue', value: 10.4, targetOrder: 0 },
      { source: 'asset_wealth_management', target: 'revenue', value: 4.7, targetOrder: 1 },
      { source: 'revenue', target: 'platform_solutions', value: 1.7, sourceOrder: 2, targetOrder: 0, sourceWidth: 31, y0: 918.5 },
      { source: 'revenue', target: 'pretax_income', value: 3.8, sourceOrder: 0, targetOrder: 1, sourceWidth: 71, y0: 683.5 },
      { source: 'revenue', target: 'operating_expenses', value: 9.7, sourceOrder: 1, targetOrder: 0, sourceWidth: 184, y0: 811 },
      { source: 'provision_for_credit_loss', target: 'pretax_income', value: 2.1, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 4.6, sourceOrder: 0, targetOrder: 0, y0: 515, targetWidth: 88 },
      { source: 'pretax_income', target: 'tax', value: 1.2, sourceOrder: 1, targetOrder: 0, y0: 570, targetWidth: 26 },
      { source: 'operating_expenses', target: 'compensation_benefits', value: 4.7, sourceOrder: 0, targetOrder: 0, targetWidth: 91 },
      { source: 'operating_expenses', target: 'transaction_based', value: 2.2, sourceOrder: 1, targetOrder: 0, targetWidth: 45 },
      { source: 'operating_expenses', target: 'market_development', value: 0.2, sourceOrder: 2, targetOrder: 0, targetWidth: 6 },
      { source: 'operating_expenses', target: 'communication_technology', value: 0.6, sourceOrder: 3, targetOrder: 0, targetWidth: 14 },
      { source: 'operating_expenses', target: 'da', value: 0.5, sourceOrder: 4, targetOrder: 0, targetWidth: 12 },
      { source: 'operating_expenses', target: 'occupancy', value: 0.2, sourceOrder: 5, targetOrder: 0, targetWidth: 8 },
      { source: 'operating_expenses', target: 'professional_fees', value: 0.5, sourceOrder: 6, targetOrder: 0, targetWidth: 12 },
      { source: 'operating_expenses', target: 'other', value: 0.8, sourceOrder: 7, targetOrder: 0, targetWidth: 17 },
    ],
    layout: {
      scale: 19,
      nodes: {
        global_banking_markets: { x: 397, y: 477, width: 73, height: 197.6 }, asset_wealth_management: { x: 397, y: 947, width: 73, height: 89.3 },
        revenue: { x: 1019, y: 648, width: 74, height: 286.9 }, cost_of_revenue: { x: 1093, y: 648, width: 0, height: 0 }, gross_profit: { x: 1093, y: 648, width: 0, height: 256.5 }, platform_solutions: { x: 1207, y: 979, width: 73, height: 32.3 },
        provision_for_credit_loss: { x: 1388, y: 428, width: 73, height: 39.9 }, pretax_income: { x: 1642, y: 470, width: 73, height: 112.1 }, operating_expenses: { x: 1642, y: 793, width: 73, height: 184.3 },
        net_income: { x: 2266, y: 271, width: 74, height: 88 }, tax: { x: 2266, y: 464, width: 74, height: 26 }, compensation_benefits: { x: 2266, y: 560, width: 74, height: 91 }, transaction_based: { x: 2266, y: 709, width: 74, height: 45 }, market_development: { x: 2266, y: 825, width: 74, height: 6 }, communication_technology: { x: 2266, y: 914, width: 74, height: 14 }, da: { x: 2266, y: 1023, width: 74, height: 12 }, occupancy: { x: 2266, y: 1115, width: 74, height: 8 }, professional_fees: { x: 2266, y: 1220, width: 74, height: 12 }, other: { x: 2266, y: 1326, width: 74, height: 17 },
      },
      labels: enLabels,
    },
    i18n: {
      zh: {
        name: '高盛 · 2025 财年第四季度', meta: { title: '高盛 2025 财年第四季度利润表', period: '', periodNote: '' },
        nodes: {
          global_banking_markets: { label: '全球银行与市场', notes: ['同比 +22%', '净利率 34%'] }, asset_wealth_management: { label: '资产与财富管理', notes: ['同比 (1%)', '净利率 20%'] }, revenue: { label: '收入', notes: ['同比 (3%)'] }, platform_solutions: { label: '平台解决方案', notes: ['净利率 (7%)'] }, provision_for_credit_loss: { label: '信用损失拨备' }, pretax_income: { label: '税前利润' }, operating_expenses: { label: '运营费用' }, net_income: { label: '净利润', notes: ['同比 +12%'] }, tax: { label: '税费' }, compensation_benefits: { label: '薪酬与福利' }, transaction_based: { label: '交易相关' }, market_development: { label: '市场开发' }, communication_technology: { label: '通信与技术' }, da: { label: '折旧与摊销' }, occupancy: { label: '场地占用' }, professional_fees: { label: '专业费用' }, other: { label: '其他' },
        },
        layout: { labels: zhLabels },
        annotationsSvg: annotations({ segment: '按业务分部', cet1: 'CET1 比率', cet1Delta: '同比 (0.6 个百分点)', roe: '年化 ROE', roeDelta: '同比 +1.4 个百分点', cet1Note: 'CET1 = 普通股一级资本', roeNote: 'ROE = 平均普通股权益回报率' }),
      },
    },
  });
})();

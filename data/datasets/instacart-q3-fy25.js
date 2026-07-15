/* ====================================================================
 * Instacart - Q3 FY25 income statement ($M)
 * Reconstructed from input/processed/instacart-q3-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const DARK_GREEN = '#003d29';
  const SOURCE_LINK = '#85a097';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const INTEREST_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const WHITE = '#ffffff';
  const ORANGE = '#ff7009';
  const CARROT_GREEN = '#0aad0a';

  const instacartLogo = () => [
    '<g transform="translate(380 286)" data-typography-role="brand">',
    '<path d="M33 18 L33 66" stroke="' + CARROT_GREEN + '" stroke-width="19" stroke-linecap="round"/>',
    '<path d="M33 66 C15 49 8 36 7 17 C22 22 31 33 33 50" fill="' + CARROT_GREEN + '"/>',
    '<path d="M33 66 C53 51 63 36 63 18 C47 22 37 34 33 50" fill="' + CARROT_GREEN + '"/>',
    '<path d="M3 101 C8 69 58 69 64 101 Z" fill="' + ORANGE + '"/>',
    '<rect x="3" y="101" width="61" height="8" fill="' + ORANGE + '"/>',
    '<text x="94" y="95" font-family="Arial Black,Montserrat,Arial,sans-serif" font-size="126" font-weight="900" fill="' + DARK_GREEN + '">instacart</text>',
    '</g>',
  ].join('');

  const kpiCard = (x, width, title, value, note) => [
    '<g>',
    '<rect x="' + x + '" y="1166" width="' + width + '" height="148" rx="28" fill="' + DARK_GREEN + '"/>',
    '<text x="' + (x + width / 2) + '" y="1217" text-anchor="middle" font-size="28" font-weight="800" fill="' + WHITE + '">' + title + '</text>',
    '<text x="' + (x + width / 2) + '" y="1260" text-anchor="middle" font-size="30" font-weight="500" fill="' + WHITE + '">' + value + '</text>',
    '<text x="' + (x + width / 2) + '" y="1295" text-anchor="middle" font-size="28" font-weight="500" fill="' + WHITE + '">' + note + '</text>',
    '</g>',
  ].join('');

  const annotations = (L) => [
    '<g font-family="Montserrat,Arial,sans-serif">',
    instacartLogo(),
    '<g class="sankey-interactive-annotation" data-node="interest">',
    '<rect x="2078" y="388" width="130" height="82" fill="transparent"/>',
    '<text x="2143" y="436" text-anchor="middle" font-size="31" font-weight="800" fill="' + INTEREST_LABEL + '">' + L.interest + '</text>',
    '<text x="2143" y="479" text-anchor="middle" font-size="31" font-weight="400" fill="' + INTEREST_LABEL + '">' + L.interestValue + '</text>',
    '</g>',
    kpiCard(130, 171, L.gtv, '$9.17B', L.gtvYoy),
    kpiCard(315, 156, L.orders, '83.4M', L.ordersYoy),
    '<text x="110" y="1354" font-size="28" font-weight="400" fill="' + NOTE + '">' + L.gtvFootnote + '</text>',
    '</g>',
  ].join('');

  const labelText = {
    en: {
      transactionValue: '$670M', transactionYoy: '+11% Y/Y', transactionName: 'Transaction', retailerFees: 'Retailer Fees', customerFees: 'Customer Fees',
      adsValue: '$269M', adsYoy: '+9% Y/Y', adsName: 'Advertising', andOther: '& Other', clickFee: 'Per Click & Fixed Fee',
      revenue: 'Revenue', revenueValue: '$939M', revenueYoy: '+10% Y/Y',
      gross: 'Gross profit', grossValue: '$692M', grossMargin: '74% margin', grossYoy: '(2pp) Y/Y',
      costOf: 'Cost of', revenueWord: 'revenue',
      operatingProfit: 'Operating profit', operatingProfitValue: '$168M', operatingMargin: '18% margin', operatingYoy: '+2pp Y/Y',
      operating: 'Operating', expenses: 'expenses', operatingExpensesValue: '($524M)',
      interest: 'Interest', interestValue: '$15M',
      netProfit: 'Net profit', netProfitValue: '$144M', netMargin: '15% margin', netYoy: '+1pp Y/Y', tax: 'Tax',
      sm: 'S&M ($206M)', smPct: '22% of revenue', smYoy: '(3pp) Y/Y',
      rnd: 'R&D ($169M)', rndPct: '18% of revenue', rndYoy: '+1pp Y/Y',
      ga: 'G&A ($87M)', gaPct: '9% of revenue', gaYoy: '+0pp Y/Y',
      operations: 'Operations ($62M)', operationsPct: '7% of revenue', operationsYoy: '(1pp) Y/Y',
    },
    zh: {
      transactionValue: '$670M', transactionYoy: '同比 +11%', transactionName: '交易', retailerFees: '零售商费用', customerFees: '客户费用',
      adsValue: '$269M', adsYoy: '同比 +9%', adsName: '广告', andOther: '及其他', clickFee: '按点击与固定费用',
      revenue: '收入', revenueValue: '$939M', revenueYoy: '同比 +10%',
      gross: '毛利润', grossValue: '$692M', grossMargin: '利润率 74%', grossYoy: '同比 (2 个百分点)',
      costOf: '收入', revenueWord: '成本',
      operatingProfit: '营业利润', operatingProfitValue: '$168M', operatingMargin: '利润率 18%', operatingYoy: '同比 +2 个百分点',
      operating: '营业', expenses: '费用', operatingExpensesValue: '($524M)',
      interest: '利息收入', interestValue: '$15M',
      netProfit: '净利润', netProfitValue: '$144M', netMargin: '利润率 15%', netYoy: '同比 +1 个百分点', tax: '税费',
      sm: '销售与市场 ($206M)', smPct: '占收入 22%', smYoy: '同比 (3 个百分点)',
      rnd: '研发 ($169M)', rndPct: '占收入 18%', rndYoy: '同比 +1 个百分点',
      ga: '管理费用 ($87M)', gaPct: '占收入 9%', gaYoy: '同比 +0 个百分点',
      operations: '运营 ($62M)', operationsPct: '占收入 7%', operationsYoy: '同比 (1 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    transaction: { blocks: [
      { x: 397, top: 426, anchor: 'middle', lineGap: 8, lines: [{ text: L.transactionValue, size: 40, weight: 400 }, { text: L.transactionYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 202, top: 590, anchor: 'middle', lineGap: 8, lines: [{ text: L.transactionName, size: 39, weight: 800 }, { text: L.retailerFees, size: 29, weight: 400, color: NOTE }, { text: L.customerFees, size: 29, weight: 400, color: NOTE }] },
    ] },
    advertising_other: { blocks: [
      { x: 397, top: 921, anchor: 'middle', lineGap: 8, lines: [{ text: L.adsValue, size: 40, weight: 400 }, { text: L.adsYoy, size: 29, weight: 400, color: NOTE }] },
      { x: 189, top: 1018, anchor: 'middle', lineGap: 8, lines: [{ text: L.adsName, size: 39, weight: 800 }, { text: L.andOther, size: 39, weight: 800 }, { text: L.clickFee, size: 28, weight: 400, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 864, top: 505, anchor: 'middle', lineGap: 8, lines: [{ text: L.revenue, size: 40, weight: 800 }, { text: L.revenueValue, size: 40, weight: 400 }, { text: L.revenueYoy, size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1331, top: 337, anchor: 'middle', lineGap: 8, lines: [{ text: L.gross, size: 40, weight: 800 }, { text: L.grossValue, size: 40, weight: 400 }, { text: L.grossMargin, size: 29, weight: 400, color: NOTE }, { text: L.grossYoy, size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1332, top: 1127, anchor: 'middle', lineGap: 8, lines: [{ text: L.costOf, size: 40, weight: 800 }, { text: L.revenueWord, size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1799, top: 224, anchor: 'middle', lineGap: 8, lines: [{ text: L.operatingProfit, size: 40, weight: 800 }, { text: L.operatingProfitValue, size: 40, weight: 400 }, { text: L.operatingMargin, size: 29, weight: 400, color: NOTE }, { text: L.operatingYoy, size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1792, top: 925, anchor: 'middle', lineGap: 8, lines: [{ text: L.operating, size: 40, weight: 800 }, { text: L.expenses, size: 40, weight: 800 }, { text: L.operatingExpensesValue, size: 40, weight: 400 }] }] },
    interest: { blocks: [] },
    net_profit: { blocks: [{ x: 2447, top: 259, anchor: 'middle', lineGap: 8, lines: [{ text: L.netProfit, size: 40, weight: 800 }, { text: L.netProfitValue, size: 40, weight: 400 }, { text: L.netMargin, size: 29, weight: 400, color: NOTE }, { text: L.netYoy, size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2447, top: 552, anchor: 'middle', lineGap: 8, lines: [{ text: L.tax, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    sm: { blocks: [{ x: 2456, top: 764, anchor: 'middle', lineGap: 8, lines: [{ text: L.sm, size: 31, weight: 800 }, { text: L.smPct, size: 29, weight: 400, color: NOTE }, { text: L.smYoy, size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2456, top: 955, anchor: 'middle', lineGap: 8, lines: [{ text: L.rnd, size: 31, weight: 800 }, { text: L.rndPct, size: 29, weight: 400, color: NOTE }, { text: L.rndYoy, size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: 2456, top: 1139, anchor: 'middle', lineGap: 8, lines: [{ text: L.ga, size: 31, weight: 800 }, { text: L.gaPct, size: 29, weight: 400, color: NOTE }, { text: L.gaYoy, size: 29, weight: 400, color: NOTE }] }] },
    operations: { blocks: [{ x: 2447, top: 1275, anchor: 'middle', lineGap: 8, lines: [{ text: L.operations, size: 31, weight: 800 }, { text: L.operationsPct, size: 29, weight: 400, color: NOTE }, { text: L.operationsYoy, size: 29, weight: 400, color: NOTE }] }] },
  });

  const annotationsEn = annotations({ gtv: 'GTV', gtvYoy: '+10% Y/Y', orders: 'Orders', ordersYoy: '+14% Y/Y', interest: 'Interest', interestValue: '$15M', gtvFootnote: 'GTV = Gross Transaction Value' });
  const annotationsZh = annotations({ gtv: 'GTV', gtvYoy: '同比 +10%', orders: '订单', ordersYoy: '同比 +14%', interest: '利息收入', interestValue: '$15M', gtvFootnote: 'GTV = 交易总额' });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'instacart-q3-fy25',
    name: 'Instacart · Q3 FY25',
    company: 'Instacart',
    meta: {
      company: 'Instacart', title: 'Instacart Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Sep. 2025', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/instacart-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1338, titleY: 199, titleSize: 126, titleWeight: 800, titleTextLength: 2290, hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: DARK_GREEN, label: DARK_GREEN }, hub: { node: DARK_GREEN, label: DARK_GREEN }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 0.365,
      nodes: {
        transaction: { x: 361, y: 516, width: 71, height: 243 }, advertising_other: { x: 361, y: 1016, width: 71, height: 96 }, revenue: { x: 828, y: 648, width: 70, height: 341 },
        gross_profit: { x: 1295, y: 518, width: 71, height: 251 }, cost_of_revenue: { x: 1295, y: 1028, width: 71, height: 89 },
        operating_profit: { x: 1765, y: 403, width: 70, height: 58 }, operating_expenses: { x: 1763, y: 710, width: 70, height: 189 }, interest: { x: 2098, y: 389, width: 70, height: 2 },
        net_profit: { x: 2229, y: 285, width: 71, height: 50 }, tax: { x: 2229, y: 583, width: 71, height: 12 }, sm: { x: 2229, y: 764, width: 71, height: 73 }, rnd: { x: 2229, y: 953, width: 71, height: 60 }, ga: { x: 2229, y: 1133, width: 71, height: 30 }, operations: { x: 2229, y: 1276, width: 71, height: 20 },
      },
      labels: makeLabels(labelText.en),
    },
    nodes: [
      { id: 'transaction', col: 0, order: 0, type: 'source', label: 'Transaction', value: 670, notes: ['+11% Y/Y', 'Retailer Fees', 'Customer Fees'], color: DARK_GREEN, labelColor: DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'advertising_other', col: 0, order: 1, type: 'source', label: ['Advertising', '& Other'], value: 269, notes: ['+9% Y/Y', 'Per Click & Fixed Fee'], color: DARK_GREEN, labelColor: DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 939, notes: ['+10% Y/Y'], color: DARK_GREEN, labelColor: DARK_GREEN },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 692, notes: ['74% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 247, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 168, notes: ['18% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 524, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 15, color: '#4bad4b', labelColor: INTEREST_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 144, notes: ['15% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 39, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 206, valueText: '($206M)', notes: ['22% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 169, valueText: '($169M)', notes: ['18% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 87, valueText: '($87M)', notes: ['9% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 5, type: 'cost', label: 'Operations', value: 62, valueText: '($62M)', notes: ['7% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'transaction', target: 'revenue', value: 670, width: 243, sourceOrder: 0, targetOrder: 0 }, { source: 'advertising_other', target: 'revenue', value: 269, sourceWidth: 96, targetWidth: 98, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 692, width: 251, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_revenue', value: 247, width: 89, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 168, sourceWidth: 61, targetWidth: 58, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 524, sourceWidth: 190, targetWidth: 189, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 129, sourceWidth: 47, targetWidth: 45, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 39, sourceWidth: 11, targetWidth: 12, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, y0: 455.5, y1: 589 },
      { source: 'interest', target: 'net_profit', value: 15, sourceWidth: 2, targetWidth: 5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, y1: 332.5, curve: { x0: 2168, x1: 2229, c1x: 2185, c2x: 2216, c1y: 390, c2y: 332.5 } },
      { source: 'operating_expenses', target: 'sm', value: 206, sourceWidth: 74, targetWidth: 73, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_expenses', target: 'rnd', value: 169, sourceWidth: 61, targetWidth: 60, sourceOrder: 1, targetOrder: 0 }, { source: 'operating_expenses', target: 'ga', value: 87, sourceWidth: 31, targetWidth: 30, sourceOrder: 2, targetOrder: 0 }, { source: 'operating_expenses', target: 'operations', value: 62, sourceWidth: 22, targetWidth: 20, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Instacart · 2025 财年第三季度',
        meta: { title: 'Instacart 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleTextLength: 2240 },
        annotationsSvg: annotationsZh,
        nodes: {
          transaction: { label: '交易', notes: ['同比 +11%', '零售商费用', '客户费用'] }, advertising_other: { label: ['广告', '及其他'], notes: ['同比 +9%', '按点击与固定费用'] }, revenue: { label: '收入', notes: ['同比 +10%'] }, gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (2 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] }, operating_expenses: { label: '营业费用' }, interest: { label: '利息收入' }, net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +1 个百分点'] }, tax: { label: '税费' }, sm: { label: '销售与市场', notes: ['占收入 22%', '同比 (3 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 18%', '同比 +1 个百分点'] }, ga: { label: '管理费用', notes: ['占收入 9%', '同比 +0 个百分点'] }, operations: { label: '运营', notes: ['占收入 7%', '同比 (1 个百分点)'] },
        },
        layout: { labels: makeLabels(labelText.zh) },
      },
    },
  });
})();

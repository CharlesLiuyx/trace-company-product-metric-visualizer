/* Mastercard - Q2 FY26 income statement (USD B).
 * Fixed d3/SVG reconstruction of input/processed/mastercard-q2-fy26.png.
 * Publisher credits and watermark artwork are intentionally excluded. */
(function () {
  const ORANGE = '#ff5f00';
  const SALMON_LINK = '#f7b187';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const WHITE = '#ffffff';

  const logo = `
    <circle cx="78" cy="74" r="74" fill="#eb001b"/>
    <circle cx="170" cy="74" r="74" fill="#f79e1b"/>
    <path d="M124 16 A74 74 0 0 1 124 132 A74 74 0 0 1 124 16 Z" fill="#ff5f00"/>
    <text x="124" y="182" text-anchor="middle" font-size="38" font-weight="500" fill="#231f20" font-family="Montserrat,Arial,sans-serif" textLength="212" lengthAdjust="spacingAndGlyphs">mastercard</text>`;

  const kpiCard = (x, width, line1, line2, note) => `
    <g>
      <rect x="${x}" y="1193" width="${width}" height="148" rx="32" fill="${ORANGE}"/>
      <text x="${x + width / 2}" y="1243" text-anchor="middle" font-size="30" font-weight="700" fill="${WHITE}">${line1}</text>
      <text x="${x + width / 2}" y="1281" text-anchor="middle" font-size="30" font-weight="700" fill="${WHITE}">${line2}</text>
      <text x="${x + width / 2}" y="1320" text-anchor="middle" font-size="29" font-weight="600" fill="${WHITE}">${note}</text>
    </g>`;

  const annotations = (t) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(21, 256, t.card1a, t.card1b, t.card1n)}
      ${kpiCard(294, 285, t.card2a, t.card2b, t.card2n)}
      ${kpiCard(593, 284, t.card3a, t.card3b, t.card3n)}
    </g>`;

  const annotationsEn = annotations({
    card1a: 'Gross Dollar', card1b: 'Volume', card1n: '+8% Y/Y',
    card2a: 'Cross-Border', card2b: 'Volume', card2n: '+12% Y/Y',
    card3a: 'Switched', card3b: 'Transactions', card3n: '+9% Y/Y',
  });
  const annotationsZh = annotations({
    card1a: '总美元', card1b: '交易额', card1n: '同比 +8%',
    card2a: '跨境', card2b: '交易额', card2n: '同比 +12%',
    card3a: '已处理', card3b: '交易笔数', card3n: '同比 +9%',
  });

  const nameLine = (text, color, size = 41) => ({ text, size, weight: 700, color });
  const valueLine = (color, size = 41) => ({ text: '$value', size, weight: 400, color });
  const noteLine = (text) => ({ text, size: 30, weight: 400, color: NOTE });

  const buildLabels = (t) => ({
    domestic: { blocks: [
      { x: 211, top: 353, anchor: 'middle', lineGap: 16, lines: t.domestic.map((line) => nameLine(line, ORANGE)) },
      { x: 400, top: 267, anchor: 'middle', lineGap: 12, lines: [valueLine(ORANGE), noteLine(t.yyDomestic)] },
    ] },
    cross_border: { blocks: [
      { x: 214, top: 577, anchor: 'middle', lineGap: 16, lines: t.crossBorder.map((line) => nameLine(line, ORANGE)) },
      { x: 400, top: 486, anchor: 'middle', lineGap: 12, lines: [valueLine(ORANGE), noteLine(t.yyCrossBorder)] },
    ] },
    transaction: { blocks: [
      { x: 214, top: 814, anchor: 'middle', lineGap: 16, lines: t.transaction.map((line) => nameLine(line, ORANGE)) },
      { x: 400, top: 717, anchor: 'middle', lineGap: 12, lines: [valueLine(ORANGE), noteLine(t.yyTransaction)] },
    ] },
    other_rev: { blocks: [
      { x: 215, top: 1024, anchor: 'middle', lineGap: 16, lines: t.other.map((line) => nameLine(line, ORANGE)) },
      { x: 400, top: 947, anchor: 'middle', lineGap: 12, lines: [valueLine(ORANGE), noteLine(t.yyOther)] },
    ] },
    payment_network: { blocks: [
      { x: 1147, top: 251, anchor: 'middle', lineGap: 11, lines: [...t.paymentNetwork.map((line) => nameLine(line, ORANGE)), valueLine(ORANGE), noteLine(t.yyPaymentNetwork)] },
    ] },
    rebates: { blocks: [
      { x: 1146, top: 906, anchor: 'middle', lineGap: 11, lines: [...t.rebates.map((line) => nameLine(line, RED_LABEL)), valueLine(RED_LABEL)] },
    ] },
    value_added: { blocks: [
      { x: 1146, top: 1187, anchor: 'middle', lineGap: 11, lines: [...t.valueAdded.map((line) => nameLine(line, ORANGE)), valueLine(ORANGE), noteLine(t.yyValueAdded)] },
    ] },
    revenue: { blocks: [
      { x: 1520, top: 403, anchor: 'middle', lineGap: 11, lines: [...t.netRevenue.map((line) => nameLine(line, ORANGE)), valueLine(ORANGE), noteLine(t.yyRevenue)] },
    ] },
    operating_profit: { blocks: [
      { x: 1893, top: 260, anchor: 'middle', lineGap: 11, lines: [...t.operatingProfit.map((line) => nameLine(line, GREEN_LABEL)), valueLine(GREEN_LABEL), noteLine(t.operatingMargin), noteLine(t.operatingPp)] },
    ] },
    operating_expenses: { blocks: [
      { x: 1895, top: 908, anchor: 'middle', lineGap: 11, lines: [...t.operatingExpenses.map((line) => nameLine(line, RED_LABEL)), valueLine(RED_LABEL)] },
    ] },
    net_profit: { blocks: [
      { x: 2431, top: 308, anchor: 'middle', lineGap: 11, lines: [...t.netProfit.map((line) => nameLine(line, GREEN_LABEL)), valueLine(GREEN_LABEL), noteLine(t.netMargin), noteLine(t.netPp)] },
    ] },
    tax: { blocks: [
      { x: 2425, top: 588, anchor: 'middle', lineGap: 9, lines: [...t.tax.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    other_ded: { blocks: [
      { x: 2420, top: 709, anchor: 'middle', lineGap: 9, lines: [...t.otherDed.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    general_admin: { blocks: [
      { x: 2431, top: 887, anchor: 'middle', lineGap: 9, lines: [...t.generalAdmin.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    dna: { blocks: [
      { x: 2432, top: 1067, anchor: 'middle', lineGap: 9, lines: [...t.dna.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    marketing: { blocks: [
      { x: 2432, top: 1180, anchor: 'middle', lineGap: 9, lines: [...t.marketing.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    other_opex: { blocks: [
      { x: 2432, top: 1296, anchor: 'middle', lineGap: 9, lines: [...t.otherOpex.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    network_revenue: { blocks: [] },
  });

  const EN = {
    domestic: ['Domestic', 'assessments'], crossBorder: ['Cross-border', 'volume fees'], transaction: ['Transaction', 'processing'], other: ['Other'],
    paymentNetwork: ['Payment', 'Network'], rebates: ['Rebates &', 'incentives'], valueAdded: ['Value-added', 'Services & Solutions'], netRevenue: ['Net revenue'],
    operatingProfit: ['Operating profit'], operatingExpenses: ['Operating', 'expenses'], netProfit: ['Net profit'], tax: ['Tax'], otherDed: ['Other'],
    generalAdmin: ['General', '& admin'], dna: ['D&A'], marketing: ['Marketing'], otherOpex: ['Other'],
    yyDomestic: '+13% Y/Y', yyCrossBorder: '+21% Y/Y', yyTransaction: '+14% Y/Y', yyOther: '+25% Y/Y', yyPaymentNetwork: '+10% Y/Y', yyValueAdded: '+20% Y/Y', yyRevenue: '+14% Y/Y',
    operatingMargin: '60% margin', operatingPp: '+1pp Y/Y', netMargin: '47% margin', netPp: '+2pp Y/Y',
  };
  const ZH = {
    domestic: ['境内', '评估费'], crossBorder: ['跨境', '交易量费'], transaction: ['交易', '处理'], other: ['其他'],
    paymentNetwork: ['支付', '网络'], rebates: ['返利与', '激励'], valueAdded: ['增值服务', '与解决方案'], netRevenue: ['净收入'],
    operatingProfit: ['营业利润'], operatingExpenses: ['运营', '费用'], netProfit: ['净利润'], tax: ['税费'], otherDed: ['其他'],
    generalAdmin: ['一般及', '行政'], dna: ['折旧与摊销'], marketing: ['营销'], otherOpex: ['其他'],
    yyDomestic: '同比 +13%', yyCrossBorder: '同比 +21%', yyTransaction: '同比 +14%', yyOther: '同比 +25%', yyPaymentNetwork: '同比 +10%', yyValueAdded: '同比 +20%', yyRevenue: '同比 +14%',
    operatingMargin: '60% 利润率', operatingPp: '同比 +1 个百分点', netMargin: '47% 利润率', netPp: '同比 +2 个百分点',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mastercard-q2-fy26',
    name: 'Mastercard · Q2 FY26',
    company: 'Mastercard',
    meta: {
      company: 'Mastercard', title: 'Mastercard Q2 FY26 Income Statement', period: 'Q2 FY26', periodNote: 'Ending Jun. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mastercard-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 200, titleSize: 126, titleWeight: 800, titleTextLength: 2430,
      hidePeriodStamp: true,
      logoWidth: 240, logoHeight: 190, logoY: 290, logoViewBox: '0 0 240 190', logoSvg: logo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: ORANGE, label: ORANGE }, hub: { node: ORANGE, label: ORANGE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SALMON_LINK, hub: SALMON_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 25.7,
      nodes: {
        domestic: { x: 363, y: 365, width: 72, height: 82 }, cross_border: { x: 363, y: 585, width: 72, height: 90 }, transaction: { x: 363, y: 813, width: 72, height: 117 }, other_rev: { x: 363, y: 1044, width: 72, height: 8 },
        network_revenue: { x: 738, y: 523, width: 71, height: 294 }, payment_network: { x: 1112, y: 453, width: 71, height: 140 }, rebates: { x: 1112, y: 739, width: 71, height: 155 }, value_added: { x: 1112, y: 1073, width: 71, height: 98 },
        revenue: { x: 1486, y: 556, width: 71, height: 238 }, operating_profit: { x: 1859, y: 451, width: 72, height: 143 }, operating_expenses: { x: 1859, y: 805, width: 72, height: 95 },
        net_profit: { x: 2233, y: 331, width: 72, height: 112 }, tax: { x: 2233, y: 621, width: 72, height: 28 }, other_ded: { x: 2233, y: 749, width: 72, height: 3 }, general_admin: { x: 2233, y: 919, width: 72, height: 79 }, dna: { x: 2233, y: 1108, width: 72, height: 7 }, marketing: { x: 2233, y: 1224, width: 72, height: 5 }, other_opex: { x: 2233, y: 1339, width: 72, height: 2 },
      },
      labels: buildLabels(EN),
    },
    nodes: [
      { id: 'domestic', col: 0, order: 0, type: 'source', label: 'Domestic assessments', value: 3.2 },
      { id: 'cross_border', col: 0, order: 1, type: 'source', label: 'Cross-border volume fees', value: 3.5 },
      { id: 'transaction', col: 0, order: 2, type: 'source', label: 'Transaction processing', value: 4.5 },
      { id: 'other_rev', col: 0, order: 3, type: 'source', label: 'Other', value: 0.3 },
      { id: 'network_revenue', col: 1, order: 0, type: 'hub', label: '', value: 11.5 },
      { id: 'payment_network', col: 2, order: 0, type: 'source', label: 'Payment Network', value: 5.5 },
      { id: 'rebates', col: 2, order: 1, type: 'cost', label: ['Rebates &', 'incentives'], value: 6.0, valueText: '($6.0B)' },
      { id: 'value_added', col: 2, order: 2, type: 'source', label: 'Value-added Services & Solutions', value: 3.8 },
      { id: 'revenue', col: 3, order: 0, type: 'source', label: 'Net revenue', value: 9.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.6 },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.7, valueText: '($3.7B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.4 },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.1, valueText: '($1.1B)' },
      { id: 'other_ded', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'general_admin', col: 5, order: 3, type: 'cost', label: ['General', '& admin'], value: 3.1, valueText: '($3.1B)' },
      { id: 'dna', col: 5, order: 4, type: 'cost', label: 'D&A', value: 0.3, valueText: '($0.3B)' },
      { id: 'marketing', col: 5, order: 5, type: 'cost', label: 'Marketing', value: 0.2, valueText: '($0.2B)' },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
    ],
    links: [
      { source: 'domestic', target: 'network_revenue', value: 3.2, sourceWidth: 82, targetWidth: 82, targetOrder: 0 },
      { source: 'cross_border', target: 'network_revenue', value: 3.5, sourceWidth: 90, targetWidth: 89, targetOrder: 1 },
      { source: 'transaction', target: 'network_revenue', value: 4.5, sourceWidth: 117, targetWidth: 115, targetOrder: 2 },
      { source: 'other_rev', target: 'network_revenue', value: 0.3, width: 8, targetOrder: 3 },
      { source: 'network_revenue', target: 'payment_network', value: 5.5, sourceWidth: 139, targetWidth: 140, sourceOrder: 0 },
      { source: 'network_revenue', target: 'rebates', value: 6.0, sourceWidth: 155, targetWidth: 155, sourceOrder: 1 },
      { source: 'payment_network', target: 'revenue', value: 5.5, sourceWidth: 140, targetWidth: 141, targetOrder: 0 },
      { source: 'value_added', target: 'revenue', value: 3.8, sourceWidth: 98, targetWidth: 97, targetOrder: 1 },
      { source: 'revenue', target: 'operating_profit', value: 5.6, sourceWidth: 143, targetWidth: 143, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 3.7, sourceWidth: 95, targetWidth: 95, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 4.4, sourceWidth: 112, targetWidth: 112, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.1, sourceWidth: 28, targetWidth: 28, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_ded', value: 0.1, sourceWidth: 3, targetWidth: 3, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'general_admin', value: 3.1, sourceWidth: 79, targetWidth: 79, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'dna', value: 0.3, sourceWidth: 7, targetWidth: 7, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'marketing', value: 0.2, sourceWidth: 5, targetWidth: 5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 3 },
    ],
    i18n: {
      zh: {
        name: 'Mastercard · 2026 财年第二季度',
        meta: { title: 'Mastercard 2026 财年第二季度利润表', titleTextLength: 1500 },
        annotationsSvg: annotationsZh,
        nodes: {
          domestic: { label: '境内评估费' }, cross_border: { label: '跨境交易量费' }, transaction: { label: '交易处理' }, other_rev: { label: '其他' }, network_revenue: { label: '' }, payment_network: { label: '支付网络' }, rebates: { label: ['返利与', '激励'] }, value_added: { label: '增值服务与解决方案' }, revenue: { label: '净收入' }, operating_profit: { label: '营业利润' }, operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润' }, tax: { label: '税费' }, other_ded: { label: '其他' }, general_admin: { label: ['一般及', '行政'] }, dna: { label: '折旧与摊销' }, marketing: { label: '营销' }, other_opex: { label: '其他' },
        },
        layout: { labels: buildLabels(ZH) },
      },
    },
  });
})();

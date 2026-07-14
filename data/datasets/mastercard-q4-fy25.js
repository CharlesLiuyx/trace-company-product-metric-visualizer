/* ====================================================================
 * Mastercard - Q4 FY25 income statement (USD B)
 * Fixed d3/SVG reconstruction of input/processed/mastercard-q4-fy25.png.
 * Publisher credits and watermark artwork are intentionally excluded.
 * ==================================================================== */
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

  // Reuses the existing, vector Mastercard lockup rather than embedding any
  // pixels from the source image. SankeyEngine wraps meta.logoSvg as brand
  // typography, isolating the wordmark from product-text font requirements.
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
    card1a: 'Gross Dollar', card1b: 'Volume', card1n: '+7% Y/Y',
    card2a: 'Cross-Border', card2b: 'Volume', card2n: '+14% Y/Y',
    card3a: 'Switched', card3b: 'Transactions', card3n: '+10% Y/Y',
  });
  const annotationsZh = annotations({
    card1a: '总美元', card1b: '交易额', card1n: '同比 +7%',
    card2a: '跨境', card2b: '交易额', card2n: '同比 +14%',
    card3a: '已处理', card3b: '交易笔数', card3n: '同比 +10%',
  });

  const nameLine = (text, color, size = 41) => ({ text, size, weight: 700, color });
  const valueLine = (color, size = 41) => ({ text: '$value', size, weight: 400, color });
  const noteLine = (text) => ({ text, size: 30, weight: 400, color: NOTE });

  const buildLabels = (t) => ({
    domestic: { blocks: [
      { x: 211, top: 365, anchor: 'middle', lineGap: 16, lines: t.domestic.map((line) => nameLine(line, ORANGE)) },
      { x: 400, top: 275, anchor: 'middle', lineGap: 12, lines: [valueLine(ORANGE), noteLine(t.yyDomestic)] },
    ] },
    cross_border: { blocks: [
      { x: 214, top: 589, anchor: 'middle', lineGap: 16, lines: t.crossBorder.map((line) => nameLine(line, ORANGE)) },
      { x: 400, top: 497, anchor: 'middle', lineGap: 12, lines: [valueLine(ORANGE), noteLine(t.yyCrossBorder)] },
    ] },
    transaction: { blocks: [
      { x: 214, top: 834, anchor: 'middle', lineGap: 16, lines: t.transaction.map((line) => nameLine(line, ORANGE)) },
      { x: 400, top: 733, anchor: 'middle', lineGap: 12, lines: [valueLine(ORANGE), noteLine(t.yyTransaction)] },
    ] },
    other_rev: { blocks: [
      { x: 215, top: 1078, anchor: 'middle', lineGap: 16, lines: t.other.map((line) => nameLine(line, ORANGE)) },
      { x: 400, top: 994, anchor: 'middle', lineGap: 12, lines: [valueLine(ORANGE), noteLine(t.yyOther)] },
    ] },
    payment_network: { blocks: [
      { x: 1147, top: 258, anchor: 'middle', lineGap: 11, lines: [...t.paymentNetwork.map((line) => nameLine(line, ORANGE)), valueLine(ORANGE), noteLine(t.yyPaymentNetwork)] },
    ] },
    rebates: { blocks: [
      { x: 1146, top: 916, anchor: 'middle', lineGap: 11, lines: [...t.rebates.map((line) => nameLine(line, RED_LABEL)), valueLine(RED_LABEL)] },
    ] },
    value_added: { blocks: [
      { x: 1146, top: 1196, anchor: 'middle', lineGap: 11, lines: [...t.valueAdded.map((line) => nameLine(line, ORANGE)), valueLine(ORANGE), noteLine(t.yyValueAdded)] },
    ] },
    revenue: { blocks: [
      { x: 1520, top: 420, anchor: 'middle', lineGap: 11, lines: [...t.netRevenue.map((line) => nameLine(line, ORANGE)), valueLine(ORANGE), noteLine(t.yyRevenue)] },
    ] },
    operating_profit: { blocks: [
      { x: 1893, top: 258, anchor: 'middle', lineGap: 11, lines: [...t.operatingProfit.map((line) => nameLine(line, GREEN_LABEL)), valueLine(GREEN_LABEL), noteLine(t.operatingMargin), noteLine(t.operatingPp)] },
    ] },
    operating_expenses: { blocks: [
      { x: 1895, top: 930, anchor: 'middle', lineGap: 11, lines: [...t.operatingExpenses.map((line) => nameLine(line, RED_LABEL)), valueLine(RED_LABEL)] },
    ] },
    net_profit: { blocks: [
      { x: 2431, top: 314, anchor: 'middle', lineGap: 11, lines: [...t.netProfit.map((line) => nameLine(line, GREEN_LABEL)), valueLine(GREEN_LABEL), noteLine(t.netMargin), noteLine(t.netPp)] },
    ] },
    tax: { blocks: [
      { x: 2425, top: 595, anchor: 'middle', lineGap: 9, lines: [...t.tax.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    other_ded: { blocks: [
      { x: 2420, top: 714, anchor: 'middle', lineGap: 9, lines: [...t.otherDed.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    general_admin: { blocks: [
      { x: 2431, top: 903, anchor: 'middle', lineGap: 9, lines: [...t.generalAdmin.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    dna: { blocks: [
      { x: 2432, top: 1066, anchor: 'middle', lineGap: 9, lines: [...t.dna.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    marketing: { blocks: [
      { x: 2432, top: 1164, anchor: 'middle', lineGap: 9, lines: [...t.marketing.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    litigation: { blocks: [
      { x: 2432, top: 1267, anchor: 'middle', lineGap: 9, lines: [...t.litigation.map((line) => nameLine(line, RED_LABEL, 40)), valueLine(RED_LABEL, 40)] },
    ] },
    network_revenue: { blocks: [] },
  });

  const EN = {
    domestic: ['Domestic', 'assessments'], crossBorder: ['Cross-border', 'volume fees'], transaction: ['Transaction', 'processing'], other: ['Other'],
    paymentNetwork: ['Payment', 'Network'], rebates: ['Rebates &', 'incentives'], valueAdded: ['Value-added', 'Services & Solutions'], netRevenue: ['Net revenue'],
    operatingProfit: ['Operating profit'], operatingExpenses: ['Operating', 'expenses'], netProfit: ['Net profit'], tax: ['Tax'], otherDed: ['Other'],
    generalAdmin: ['General', '& admin'], dna: ['D&A'], marketing: ['Marketing'], litigation: ['Litigation'],
    yyDomestic: '+9% Y/Y', yyCrossBorder: '+21% Y/Y', yyTransaction: '+18% Y/Y', yyOther: '+14% Y/Y', yyPaymentNetwork: '+12% Y/Y', yyValueAdded: '+26% Y/Y', yyRevenue: '+18% Y/Y',
    operatingMargin: '56% margin', operatingPp: '+3pp Y/Y', netMargin: '46% margin', netPp: '+1pp Y/Y',
  };
  const ZH = {
    domestic: ['境内', '评估费'], crossBorder: ['跨境', '交易量费'], transaction: ['交易', '处理'], other: ['其他'],
    paymentNetwork: ['支付', '网络'], rebates: ['返利与', '激励'], valueAdded: ['增值服务', '与解决方案'], netRevenue: ['净收入'],
    operatingProfit: ['营业利润'], operatingExpenses: ['运营', '费用'], netProfit: ['净利润'], tax: ['税费'], otherDed: ['其他'],
    generalAdmin: ['一般及', '行政'], dna: ['折旧与摊销'], marketing: ['营销'], litigation: ['诉讼'],
    yyDomestic: '同比 +9%', yyCrossBorder: '同比 +21%', yyTransaction: '同比 +18%', yyOther: '同比 +14%', yyPaymentNetwork: '同比 +12%', yyValueAdded: '同比 +26%', yyRevenue: '同比 +18%',
    operatingMargin: '56% 利润率', operatingPp: '同比 +3 个百分点', netMargin: '46% 利润率', netPp: '同比 +1 个百分点',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'mastercard-q4-fy25',
    name: 'Mastercard · Q4 FY25',
    company: 'Mastercard',
    meta: {
      company: 'Mastercard', title: 'Mastercard Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/mastercard-q4-fy25.png', width: 2667, height: 1500 },
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
      scale: 27.1,
      nodes: {
        domestic: { x: 363, y: 370, width: 72, height: 76 }, cross_border: { x: 363, y: 592, width: 72, height: 88 }, transaction: { x: 363, y: 827, width: 72, height: 116 }, other_rev: { x: 363, y: 1090, width: 72, height: 9 },
        network_revenue: { x: 738, y: 543, width: 71, height: 289 }, payment_network: { x: 1112, y: 465, width: 71, height: 133 }, rebates: { x: 1112, y: 754, width: 71, height: 152 }, value_added: { x: 1112, y: 1078, width: 71, height: 106 },
        revenue: { x: 1486, y: 569, width: 71, height: 242 }, operating_profit: { x: 1859, y: 444, width: 72, height: 135 }, operating_expenses: { x: 1859, y: 804, width: 72, height: 108 },
        net_profit: { x: 2233, y: 328, width: 72, height: 111 }, tax: { x: 2233, y: 627, width: 72, height: 23 }, other_ded: { x: 2233, y: 755, width: 72, height: 1 }, general_admin: { x: 2233, y: 916, width: 72, height: 84 }, dna: { x: 2233, y: 1091, width: 72, height: 9 }, marketing: { x: 2233, y: 1190, width: 72, height: 10 }, litigation: { x: 2233, y: 1293, width: 72, height: 6 },
      },
      labels: buildLabels(EN),
    },
    nodes: [
      { id: 'domestic', col: 0, order: 0, type: 'source', label: 'Domestic assessments', value: 2.8 },
      { id: 'cross_border', col: 0, order: 1, type: 'source', label: 'Cross-border volume fees', value: 3.3 },
      { id: 'transaction', col: 0, order: 2, type: 'source', label: 'Transaction processing', value: 4.2 },
      { id: 'other_rev', col: 0, order: 3, type: 'source', label: 'Other', value: 0.3 },
      { id: 'network_revenue', col: 1, order: 0, type: 'hub', label: '', value: 10.6 },
      { id: 'payment_network', col: 2, order: 0, type: 'source', label: 'Payment Network', value: 4.9 },
      { id: 'rebates', col: 2, order: 1, type: 'cost', label: ['Rebates &', 'incentives'], value: 5.6, valueText: '($5.6B)' },
      { id: 'value_added', col: 2, order: 2, type: 'source', label: 'Value-added Services & Solutions', value: 3.9 },
      { id: 'revenue', col: 3, order: 0, type: 'source', label: 'Net revenue', value: 8.8 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.9 },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.9, valueText: '($3.9B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 4.1 },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8, valueText: '($0.8B)' },
      { id: 'other_ded', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.034, valueText: '($34M)' },
      { id: 'general_admin', col: 5, order: 3, type: 'cost', label: ['General', '& admin'], value: 3.1, valueText: '($3.1B)' },
      { id: 'dna', col: 5, order: 4, type: 'cost', label: 'D&A', value: 0.3, valueText: '($0.3B)' },
      { id: 'marketing', col: 5, order: 5, type: 'cost', label: 'Marketing', value: 0.3, valueText: '($0.3B)' },
      { id: 'litigation', col: 5, order: 6, type: 'cost', label: 'Litigation', value: 0.2, valueText: '($0.2B)' },
    ],
    links: [
      { source: 'domestic', target: 'network_revenue', value: 2.8, width: 76, targetOrder: 0 }, { source: 'cross_border', target: 'network_revenue', value: 3.3, width: 88, targetOrder: 1 }, { source: 'transaction', target: 'network_revenue', value: 4.2, width: 116, targetOrder: 2 }, { source: 'other_rev', target: 'network_revenue', value: 0.3, width: 9, targetOrder: 3 },
      { source: 'network_revenue', target: 'payment_network', value: 4.9, width: 133, sourceOrder: 0 }, { source: 'network_revenue', target: 'rebates', value: 5.6, sourceWidth: 155, targetWidth: 152, sourceOrder: 1 },
      { source: 'payment_network', target: 'revenue', value: 4.9, width: 133, targetOrder: 0 }, { source: 'value_added', target: 'revenue', value: 3.9, sourceWidth: 106, targetWidth: 109, targetOrder: 1 },
      { source: 'revenue', target: 'operating_profit', value: 4.9, width: 135, sourceOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'operating_expenses', value: 3.9, sourceWidth: 107, targetWidth: 108, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 4.1, width: 111, sourceOrder: 0 }, { source: 'operating_profit', target: 'tax', value: 0.8, width: 23, sourceOrder: 1 }, { source: 'operating_profit', target: 'other_ded', value: 0.034, width: 1, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'general_admin', value: 3.1, width: 84, sourceOrder: 0 }, { source: 'operating_expenses', target: 'dna', value: 0.3, width: 9, sourceOrder: 1 }, { source: 'operating_expenses', target: 'marketing', value: 0.3, sourceWidth: 8, targetWidth: 10, sourceOrder: 2 }, { source: 'operating_expenses', target: 'litigation', value: 0.2, width: 6, sourceOrder: 3 },
    ],
    i18n: {
      zh: {
        name: 'Mastercard · 2025 财年第四季度',
        meta: { title: 'Mastercard 2025 财年第四季度利润表', titleTextLength: 1500 },
        annotationsSvg: annotationsZh,
        nodes: {
          domestic: { label: '境内评估费' }, cross_border: { label: '跨境交易量费' }, transaction: { label: '交易处理' }, other_rev: { label: '其他' }, network_revenue: { label: '' }, payment_network: { label: '支付网络' }, rebates: { label: ['返利与', '激励'] }, value_added: { label: '增值服务与解决方案' }, revenue: { label: '净收入' }, operating_profit: { label: '营业利润' }, operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润' }, tax: { label: '税费' }, other_ded: { label: '其他' }, general_admin: { label: ['一般及', '行政'] }, dna: { label: '折旧与摊销' }, marketing: { label: '营销' }, litigation: { label: '诉讼' },
        },
        layout: { labels: buildLabels(ZH) },
      },
    },
  });
})();

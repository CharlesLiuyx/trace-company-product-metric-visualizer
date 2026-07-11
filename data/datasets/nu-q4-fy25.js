/* Nu Q4 FY25 income statement ($B), measured from the processed reference. */
(function () {
  const NOTE = '#666666';
  const TITLE = '#155077';
  const PURPLE = '#771ac9';
  const PURPLE_LINK = '#bb91df';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_CENTER_X = 2454;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  // Pure-vector Nu symbol matched to the thick-stroke proportions in the
  // source infographic. The validated crop remains reference-only.
  const nuSymbol = `
    <g fill="none" stroke="${PURPLE}" stroke-width="35" stroke-linecap="butt" stroke-linejoin="round">
      <path d="M25.5 115.5V58C25.5 37 40 24 58 24C79 24 87.5 39 87.5 59V115.5"/>
      <path d="M131 9.5V65C131 88 145 101 169 101C184 101 192.5 86 192.5 66V9.5"/>
    </g>`;

  const creditCardCluster = `
    <g aria-label="Nu credit cards" data-typography-role="brand">
      <defs>
        <linearGradient id="nu-card-purple-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#52237d"/><stop offset="0.55" stop-color="#8d28dd"/><stop offset="1" stop-color="#5d159f"/>
        </linearGradient>
        <linearGradient id="nu-card-purple-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#6622a7"/><stop offset="0.6" stop-color="#a83aff"/><stop offset="1" stop-color="#6d18b9"/>
        </linearGradient>
      </defs>
      <g transform="translate(171 357) rotate(27)">
        <rect x="-40" y="-66" width="80" height="132" rx="4" fill="url(#nu-card-purple-a)"/>
        <circle cx="-21" cy="-47" r="10" fill="#ef3b24"/><circle cx="-8" cy="-47" r="10" fill="#f4a52d" opacity="0.88"/>
        <rect x="9" y="-54" width="15" height="12" rx="2" fill="#d7d7cf" opacity="0.88"/>
        <text x="-27" y="49" font-size="18" font-weight="800" fill="#ffffff">nu</text>
      </g>
      <g transform="translate(235 306) rotate(-32)">
        <rect x="-40" y="-66" width="80" height="132" rx="4" fill="url(#nu-card-purple-b)"/>
        <circle cx="-21" cy="-47" r="10" fill="#ef3b24"/><circle cx="-8" cy="-47" r="10" fill="#f4a52d" opacity="0.88"/>
        <rect x="9" y="-54" width="15" height="12" rx="2" fill="#d7d7cf" opacity="0.88"/>
        <text x="-26" y="49" font-size="18" font-weight="800" fill="#ffffff">nu</text>
      </g>
    </g>`;

  const kpiCard = (x, title, value, note) => `
    <g>
      <rect x="${x}" y="1200" width="213" height="152" rx="28" fill="${PURPLE}"/>
      <text x="${x + 106.5}" y="1253" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + 106.5}" y="1295" text-anchor="middle" font-size="27" font-weight="400" fill="#ffffff">${value}</text>
      <text x="${x + 106.5}" y="1335" text-anchor="middle" font-size="22" font-weight="400" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creditCardCluster}
      ${kpiCard(70, isZh ? '客户' : 'Customers', '131M', isZh ? '同比 +15%' : '+15% Y/Y')}
      ${kpiCard(291, isZh ? '存款' : 'Deposits', '$41.9B', isZh ? '同比 +29%' : '+29% Y/Y')}
    </g>`;

  const layoutLabels = (isZh) => {
    const t = isZh
      ? {
          creditCard: '信用卡', lending: '贷款', other: '其他', interest: ['利息', '收入'],
          fee: ['手续费及', '佣金', '收入'], revenue: '收入', gross: '毛利润', pretax: '税前利润', net: '净利润',
          interestOther: ['利息及', '其他'], creditLoss: ['信用损失', '准备'], transactional: '交易成本',
          opex: ['运营', '费用'], tax: '税费', ga: '管理费用', support: '客户支持', marketing: '营销', otherExpenses: '其他费用',
          yoy54: '同比 +54%', yoy61: '同比 +61%', yoy66: '同比 +66%', yoy60: '同比 +60%', yoy39: '同比 +39%', yoy57: '同比 +57%',
          margin41: '利润率 41%', yoy4pp: '同比 (4 个百分点)', margin23: '利润率 23%', yoy3pp: '同比 (3 个百分点)',
          margin19: '利润率 19%', yoy1pp: '同比 +1 个百分点', rev9: '占收入 9%', yoyNeg1pp: '同比 (1 个百分点)',
          rev4: '占收入 4%', yoyNeg2pp: '同比 (2 个百分点)', rev3: '占收入 3%',
        }
      : {
          creditCard: 'Credit card', lending: 'Lending', other: 'Other', interest: ['Interest', 'income'],
          fee: ['Fee &', 'commission', 'income'], revenue: 'Revenue', gross: 'Gross profit', pretax: 'Pretax income', net: 'Net income',
          interestOther: ['Interest', '& other'], creditLoss: ['Credit loss', 'allowance'], transactional: 'Transactional',
          opex: ['Operating', 'expenses'], tax: 'Tax', ga: 'G&A', support: 'Customer Support', marketing: 'Marketing', otherExpenses: 'Other expenses',
          yoy54: '+54% Y/Y', yoy61: '+61% Y/Y', yoy66: '+66% Y/Y', yoy60: '+60% Y/Y', yoy39: '+39% Y/Y', yoy57: '+57% Y/Y',
          margin41: '41% margin', yoy4pp: '(4pp) Y/Y', margin23: '23% margin', yoy3pp: '(3pp) Y/Y',
          margin19: '19% margin', yoy1pp: '+1pp Y/Y', rev9: '9% of revenue', yoyNeg1pp: '(1pp) Y/Y',
          rev4: '4% of revenue', yoyNeg2pp: '(2pp) Y/Y', rev3: '3% of revenue',
        };

    const sourceValue = (top, yoy) => block(407.5, top, [
      line('$value', 39), line(yoy, 29, { color: NOTE }),
    ], { lineGap: 14 });
    const mainProfit = (x, top, name, margin, yoy) => block(x, top, [
      line(name, 40, { weight: 800 }), line('$value', 39),
      line(margin, 29, { color: NOTE }), line(yoy, 29, { color: NOTE }),
    ], { lineGap: 13 });
    // Keep the three col-3 cost labels on one left edge, with a 16px clear
    // gap after the shared node face.  The x values are the optical centers
    // of each block's widest line (font metrics differ between en and zh).
    const costLabelX = isZh
      ? { interestOther: 1630, creditLoss: 1648, transactional: 1648 }
      : { interestOther: 1645.5, creditLoss: 1668.5, transactional: 1697 };
    const smallRight = (top, name, note1, note2) => block(RIGHT_CENTER_X, top, [
      line(name, 31, { weight: 800 }), line('$value', 29),
      line(note1, 28, { color: NOTE }), line(note2, 28, { color: NOTE }),
    ], { lineGap: 8 });

    return {
      credit_card: { blocks: [sourceValue(326, t.yoy54), block(325, 453, [line(t.creditCard, 40, { weight: 800 })], { anchor: 'end' })] },
      lending: { blocks: [sourceValue(565, t.yoy61), block(302, 693, [line(t.lending, 40, { weight: 800 })], { anchor: 'end' })] },
      other_interest: { blocks: [sourceValue(802, t.yoy66), block(281, 931, [line(t.other, 40, { weight: 800 })], { anchor: 'end' })] },
      interest_income: { blocks: [block(777, 350, [
        ...t.interest.map((name) => line(name, 40, { weight: 800 })),
        line('$value', 39), line(t.yoy60, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      fee_commission_income: { blocks: [block(727, 983, [
        ...t.fee.map((name) => line(name, 40, { weight: 800 })),
        line('$value', 39), line(t.yoy39, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      revenue: { blocks: [block(1151, 490, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 39), line(t.yoy57, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      gross_profit: { blocks: [mainProfit(1524.5, 361, t.gross, t.margin41, t.yoy4pp)] },
      interest_other: { blocks: [block(costLabelX.interestOther, 860, [
        ...t.interestOther.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 14 })] },
      credit_loss_allowance: { blocks: [block(costLabelX.creditLoss, 1052, [
        ...t.creditLoss.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 14 })] },
      transactional: { blocks: [block(costLabelX.transactional, 1242, [
        line(t.transactional, 36, { weight: 800 }), line('$value', 34),
      ], { lineGap: 15 })] },
      pretax_income: { blocks: [mainProfit(1898.5, 271, t.pretax, t.margin23, t.yoy3pp)] },
      operating_expenses: { blocks: [block(1898.5, 799, [
        ...t.opex.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 15 })] },
      net_income: { blocks: [mainProfit(2438, 356, t.net, t.margin19, t.yoy1pp)] },
      tax: { blocks: [block(2438, 558, [line(t.tax, 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
      ga: { blocks: [
        block(isZh ? 2325 : 2368, 741, [line(t.ga, isZh ? 29 : 31, { weight: 800 })], { anchor: 'start', lineGap: 8 }),
        block(isZh ? 2470 : 2442, 741, [line('$value', 29)], { anchor: 'start', lineGap: 8 }),
        block(RIGHT_CENTER_X, 783, [line(t.rev9, 28, { color: NOTE }), line(t.yoyNeg1pp, 28, { color: NOTE })], { lineGap: 8 }),
      ] },
      customer_support: { blocks: [smallRight(906, t.support, t.rev4, t.yoyNeg2pp)] },
      marketing: { blocks: [
        block(isZh ? 2380 : 2323, 1096, [line(t.marketing, 31, { weight: 800 })], { anchor: 'start', lineGap: 8 }),
        block(isZh ? 2470 : 2488, 1096, [line('$value', 29)], { anchor: 'start', lineGap: 8 }),
        block(RIGHT_CENTER_X, 1138, [line(t.rev3, 28, { color: NOTE }), line(t.yoy1pp, 28, { color: NOTE })], { lineGap: 8 }),
      ] },
      other_expenses: { blocks: [smallRight(1238, t.otherExpenses, t.rev3, t.yoy1pp)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nu-q4-fy25',
    name: 'Nu · Q4 FY25',
    company: 'Nu',
    meta: {
      company: 'Nu',
      title: 'Nu Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nu-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1900,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 450,
      logoHeight: 250,
      logoY: 225,
      logoViewBox: '0 0 224 123.5',
      logoSvg: nuSymbol,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      nodes: {
        credit_card: { x: 368, y: 426, width: 71, height: 112 },
        lending: { x: 368, y: 660, width: 71, height: 120 },
        other_interest: { x: 368, y: 901, width: 71, height: 106 },
        interest_income: { x: 742, y: 552, width: 70, height: 333 },
        fee_commission_income: { x: 742, y: 1238, width: 70, height: 58 },
        revenue: { x: 1116, y: 642, width: 70, height: 390 },
        gross_profit: { x: 1489, y: 550, width: 71, height: 163 },
        interest_other: { x: 1489, y: 869, width: 71, height: 116 },
        credit_loss_allowance: { x: 1489, y: 1067, width: 71, height: 104 },
        transactional: { x: 1489, y: 1278, width: 71, height: 12 },
        pretax_income: { x: 1863, y: 462, width: 71, height: 91 },
        operating_expenses: { x: 1863, y: 714, width: 71, height: 73 },
        net_income: { x: 2236, y: 397, width: 71, height: 76 },
        tax: { x: 2236, y: 584, width: 71, height: 17 },
        ga: { x: 2236, y: 768, width: 71, height: 38 },
        customer_support: { x: 2236, y: 950, width: 71, height: 15 },
        marketing: { x: 2236, y: 1113, width: 71, height: 13 },
        other_expenses: { x: 2236, y: 1291, width: 71, height: 11 },
      },
      labels: layoutLabels(false),
    },
    nodes: [
      { id: 'credit_card', col: 0, order: 0, type: 'source', label: 'Credit card', value: 1.3, notes: ['+54% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'lending', col: 0, order: 1, type: 'source', label: 'Lending', value: 1.4, notes: ['+61% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_interest', col: 0, order: 2, type: 'source', label: 'Other', value: 1.3, notes: ['+66% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'interest_income', col: 1, order: 0, type: 'source', label: 'Interest income', value: 4.0, valueText: '$4.0B', notes: ['+60% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'fee_commission_income', col: 1, order: 1, type: 'source', label: 'Fee & commission income', value: 0.7, notes: ['+39% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 4.7, notes: ['+57% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 1.9, notes: ['41% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest_other', col: 3, order: 1, type: 'cost', label: 'Interest & other', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'credit_loss_allowance', col: 3, order: 2, type: 'cost', label: 'Credit loss allowance', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'transactional', col: 3, order: 3, type: 'cost', label: 'Transactional', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 4, order: 0, type: 'profit', label: 'Pretax income', value: 1.1, notes: ['23% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 5, order: 0, type: 'profit', label: 'Net income', value: 0.9, notes: ['19% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 0.4, notes: ['9% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'customer_support', col: 5, order: 3, type: 'cost', label: 'Customer Support', value: 0.2, notes: ['4% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 4, type: 'cost', label: 'Marketing', value: 0.1, notes: ['3% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 5, order: 5, type: 'cost', label: 'Other expenses', value: 0.1, notes: ['3% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'credit_card', target: 'interest_income', value: 1.3, width: 111, sourceWidth: 112, targetWidth: 111, y0: 482, y1: 607.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'lending', target: 'interest_income', value: 1.4, width: 116, sourceWidth: 120, targetWidth: 116, y0: 720, y1: 721, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_interest', target: 'interest_income', value: 1.3, width: 106, sourceWidth: 106, targetWidth: 106, y0: 954, y1: 832, sourceOrder: 0, targetOrder: 2 },
      { source: 'interest_income', target: 'revenue', value: 4.0, width: 333, sourceWidth: 333, targetWidth: 333, y0: 718.5, y1: 808.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'fee_commission_income', target: 'revenue', value: 0.7, width: 57, sourceWidth: 58, targetWidth: 57, y0: 1267, y1: 1003.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1.9, width: 162, sourceWidth: 162, targetWidth: 163, y0: 723, y1: 631.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'interest_other', value: 1.4, width: 115, sourceWidth: 115, targetWidth: 116, y0: 861.5, y1: 927, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'credit_loss_allowance', value: 1.2, width: 102, sourceWidth: 102, targetWidth: 104, y0: 970, y1: 1119, sourceOrder: 2, targetOrder: 0 },
      { source: 'revenue', target: 'transactional', value: 0.1, width: 11, sourceWidth: 11, targetWidth: 12, y0: 1026.5, y1: 1284, sourceOrder: 3, targetOrder: 0 },
      { source: 'gross_profit', target: 'pretax_income', value: 1.1, width: 91, sourceWidth: 91, targetWidth: 91, y0: 595.5, y1: 507.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9, width: 72, sourceWidth: 72, targetWidth: 73, y0: 677, y1: 750.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 0.9, width: 75, sourceWidth: 75, targetWidth: 76, y0: 499.5, y1: 435, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 0.2, width: 16, sourceWidth: 16, targetWidth: 17, y0: 545, y1: 592.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, width: 37, sourceWidth: 37, targetWidth: 38, y0: 732.5, y1: 787, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'customer_support', value: 0.2, width: 14, sourceWidth: 14, targetWidth: 15, y0: 758, y1: 957.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.1, width: 10, sourceWidth: 10, targetWidth: 13, y0: 770, y1: 1119.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expenses', value: 0.1, width: 12, sourceWidth: 12, targetWidth: 11, y0: 781, y1: 1296.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Nu · 2025 财年第四季度',
        meta: {
          title: 'Nu 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1420,
        },
        annotationsSvg: annotations(true),
        nodes: {
          credit_card: { label: '信用卡', notes: ['同比 +54%'] },
          lending: { label: '贷款', notes: ['同比 +61%'] },
          other_interest: { label: '其他', notes: ['同比 +66%'] },
          interest_income: { label: '利息收入', notes: ['同比 +60%'] },
          fee_commission_income: { label: '手续费及佣金收入', notes: ['同比 +39%'] },
          revenue: { label: '收入', notes: ['同比 +57%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 41%', '同比 (4 个百分点)'] },
          interest_other: { label: '利息及其他' },
          credit_loss_allowance: { label: '信用损失准备' },
          transactional: { label: '交易成本' },
          pretax_income: { label: '税前利润', notes: ['利润率 23%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_income: { label: '净利润', notes: ['利润率 19%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          ga: { label: '管理费用', notes: ['占收入 9%', '同比 (1 个百分点)'] },
          customer_support: { label: '客户支持', notes: ['占收入 4%', '同比 (2 个百分点)'] },
          marketing: { label: '营销', notes: ['占收入 3%', '同比 +1 个百分点'] },
          other_expenses: { label: '其他费用', notes: ['占收入 3%', '同比 +1 个百分点'] },
        },
        layout: { labels: layoutLabels(true) },
      },
    },
  });
})();

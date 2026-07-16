/* Nu Q3 FY25 income statement ($B), measured from the processed reference. */
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

  const nuSymbol = `
    <g fill="none" stroke="${PURPLE}" stroke-width="35" stroke-linecap="butt" stroke-linejoin="round">
      <path d="M25.5 115.5V58C25.5 37 40 24 58 24C79 24 87.5 39 87.5 59V115.5"/>
      <path d="M131 9.5V65C131 88 145 101 169 101C184 101 192.5 86 192.5 66V9.5"/>
    </g>`;

  const creditCardCluster = `
    <g aria-label="Nu credit cards" data-typography-role="brand">
      <defs>
        <linearGradient id="nu-q3-card-purple-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#52237d"/><stop offset="0.55" stop-color="#8d28dd"/><stop offset="1" stop-color="#5d159f"/>
        </linearGradient>
        <linearGradient id="nu-q3-card-purple-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#6622a7"/><stop offset="0.6" stop-color="#a83aff"/><stop offset="1" stop-color="#6d18b9"/>
        </linearGradient>
      </defs>
      <g transform="translate(171 357) rotate(27)">
        <rect x="-40" y="-66" width="80" height="132" rx="4" fill="url(#nu-q3-card-purple-a)"/>
        <circle cx="-21" cy="-47" r="10" fill="#ef3b24"/><circle cx="-8" cy="-47" r="10" fill="#f4a52d" opacity="0.88"/>
        <rect x="9" y="-54" width="15" height="12" rx="2" fill="#d7d7cf" opacity="0.88"/>
        <text x="-27" y="49" font-size="18" font-weight="800" fill="#ffffff">nu</text>
      </g>
      <g transform="translate(235 306) rotate(-32)">
        <rect x="-40" y="-66" width="80" height="132" rx="4" fill="url(#nu-q3-card-purple-b)"/>
        <circle cx="-21" cy="-47" r="10" fill="#ef3b24"/><circle cx="-8" cy="-47" r="10" fill="#f4a52d" opacity="0.88"/>
        <rect x="9" y="-54" width="15" height="12" rx="2" fill="#d7d7cf" opacity="0.88"/>
        <text x="-26" y="49" font-size="18" font-weight="800" fill="#ffffff">nu</text>
      </g>
    </g>`;

  const kpiCard = (x, title, value, note) => `
    <g>
      <rect x="${x}" y="1200" width="213" height="152" rx="28" fill="${PURPLE}"/>
      <text x="${x + 106.5}" y="1253" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + 106.5}" y="1295" text-anchor="middle" font-size="27" fill="#ffffff">${value}</text>
      <text x="${x + 106.5}" y="1335" text-anchor="middle" font-size="22" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g>
      ${creditCardCluster}
      ${kpiCard(70, isZh ? '客户' : 'Customers', '127M', isZh ? '同比 +16%' : '+16% Y/Y')}
      ${kpiCard(291, isZh ? '存款' : 'Deposits', '$38.8B', isZh ? '同比 +37%' : '+37% Y/Y')}
    </g>`;

  const layoutLabels = (isZh) => {
    const t = isZh
      ? {
          creditCard: '信用卡', lending: '贷款', other: '其他', interest: ['利息', '收入'],
          fee: ['手续费及', '佣金', '收入'], revenue: '收入', gross: '毛利润', pretax: '税前利润', net: '净利润',
          interestOther: ['利息及', '其他'], creditLoss: ['信用损失', '准备'], transactional: '交易成本',
          opex: ['运营', '费用'], tax: '税费', ga: '管理费用', support: '客户支持', marketing: '营销', otherExpenses: '其他费用',
          yoy26: '同比 +26%', yoy59: '同比 +59%', yoy54: '同比 +54%', yoy45: '同比 +45%', yoy27: '同比 +27%', yoy42: '同比 +42%',
          margin43: '利润率 43%', yoyNeg2pp: '同比 (2 个百分点)', margin27: '利润率 27%', yoy2pp: '同比 +2 个百分点',
          margin19: '利润率 19%', yoy0pp: '同比 (0 个百分点)', rev8: '占收入 8%', yoyNeg1pp: '同比 (1 个百分点)',
          rev4: '占收入 4%', yoyNeg0pp: '同比 (0 个百分点)', rev2: '占收入 2%',
        }
      : {
          creditCard: 'Credit card', lending: 'Lending', other: 'Other', interest: ['Interest', 'income'],
          fee: ['Fee &', 'commission', 'income'], revenue: 'Revenue', gross: 'Gross profit', pretax: 'Pretax income', net: 'Net income',
          interestOther: ['Interest', '& other'], creditLoss: ['Credit loss', 'allowance'], transactional: 'Transactional',
          opex: ['Operating', 'expenses'], tax: 'Tax', ga: 'G&A', support: 'Customer Support', marketing: 'Marketing', otherExpenses: 'Other expenses',
          yoy26: '+26% Y/Y', yoy59: '+59% Y/Y', yoy54: '+54% Y/Y', yoy45: '+45% Y/Y', yoy27: '+27% Y/Y', yoy42: '+42% Y/Y',
          margin43: '43% margin', yoyNeg2pp: '(2pp) Y/Y', margin27: '27% margin', yoy2pp: '+2pp Y/Y',
          margin19: '19% margin', yoy0pp: '(0pp) Y/Y', rev8: '8% of revenue', yoyNeg1pp: '(1pp) Y/Y',
          rev4: '4% of revenue', yoyNeg0pp: '(0pp) Y/Y', rev2: '2% of revenue',
        };

    const sourceValue = (top, yoy) => block(407.5, top, [
      line('$value', 39), line(yoy, 29, { color: NOTE }),
    ], { lineGap: 14 });
    const mainProfit = (x, top, name, margin, yoy) => block(x, top, [
      line(name, 40, { weight: 800 }), line('$value', 39),
      line(margin, 29, { color: NOTE }), line(yoy, 29, { color: NOTE }),
    ], { lineGap: 13 });
    const costLabelX = isZh
      ? { interestOther: 1694.5, creditLoss: 1693.5, transactional: 1689 }
      : { interestOther: 1694.5, creditLoss: 1693.5, transactional: 1689 };
    const smallRight = (top, name, note1, note2) => block(RIGHT_CENTER_X, top, [
      line(name, 31, { weight: 800 }), line('$value', 29),
      line(note1, 28, { color: NOTE }), line(note2, 28, { color: NOTE }),
    ], { lineGap: 8 });

    return {
      credit_card: { blocks: [sourceValue(304, t.yoy26), block(325, 437, [line(t.creditCard, 40, { weight: 800 })], { anchor: 'end' })] },
      lending: { blocks: [sourceValue(574, t.yoy59), block(302, 714, [line(t.lending, 40, { weight: 800 })], { anchor: 'end' })] },
      other_interest: { blocks: [sourceValue(824, t.yoy54), block(281, 957, [line(t.other, 40, { weight: 800 })], { anchor: 'end' })] },
      interest_income: { blocks: [block(777, 352, [
        ...t.interest.map((name) => line(name, 40, { weight: 800 })),
        line('$value', 39), line(t.yoy45, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      fee_commission_income: { blocks: [block(780, 983, [
        ...t.fee.map((name) => line(name, 40, { weight: 800 })),
        line('$value', 39), line(t.yoy27, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      revenue: { blocks: [block(1151, 490, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 39), line(t.yoy42, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      gross_profit: { blocks: [mainProfit(1524.5, 372, t.gross, t.margin43, t.yoyNeg2pp)] },
      interest_other: { blocks: [block(costLabelX.interestOther, 910, [
        ...t.interestOther.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 14 })] },
      credit_loss_allowance: { blocks: [block(costLabelX.creditLoss, 1103, [
        ...t.creditLoss.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 14 })] },
      transactional: { blocks: [block(costLabelX.transactional, 1297, [
        line(t.transactional, 36, { weight: 800 }), line('$value', 34),
      ], { lineGap: 15 })] },
      pretax_income: { blocks: [mainProfit(1898.5, 274, t.pretax, t.margin27, t.yoy2pp)] },
      operating_expenses: { blocks: [block(1872.5, 816, [
        ...t.opex.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 15 })] },
      net_income: { blocks: [mainProfit(2438, 351, t.net, t.margin19, t.yoy0pp)] },
      tax: { blocks: [block(2438, 605, [line(t.tax, 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
      ga: { blocks: [
        block(isZh ? 2325 : 2368, 826, [line(t.ga, isZh ? 29 : 31, { weight: 800 })], { anchor: 'start', lineGap: 8 }),
        block(isZh ? 2470 : 2442, 826, [line('$value', 29)], { anchor: 'start', lineGap: 8 }),
        block(RIGHT_CENTER_X, 868, [line(t.rev8, 28, { color: NOTE }), line(t.yoyNeg1pp, 28, { color: NOTE })], { lineGap: 8 }),
      ] },
      customer_support: { blocks: [smallRight(973, t.support, t.rev4, t.yoyNeg0pp)] },
      marketing: { blocks: [
        block(isZh ? 2380 : 2323, 1131, [line(t.marketing, 31, { weight: 800 })], { anchor: 'start', lineGap: 8 }),
        block(isZh ? 2470 : 2488, 1131, [line('$value', 29)], { anchor: 'start', lineGap: 8 }),
        block(RIGHT_CENTER_X, 1173, [line(t.rev2, 28, { color: NOTE }), line(t.yoyNeg2pp, 28, { color: NOTE })], { lineGap: 8 }),
      ] },
      other_expenses: { blocks: [smallRight(1251, t.otherExpenses, t.rev2, t.yoyNeg1pp)] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nu-q3-fy25',
    name: 'Nu · Q3 FY25',
    company: 'Nu',
    meta: {
      company: 'Nu',
      title: 'Nu Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nu-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1900,
      hidePeriodStamp: true,
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
        credit_card: { x: 367, y: 406, width: 71, height: 115 },
        lending: { x: 367, y: 672, width: 71, height: 119 },
        other_interest: { x: 367, y: 923, width: 71, height: 105 },
        interest_income: { x: 741, y: 558, width: 70, height: 344 },
        fee_commission_income: { x: 741, y: 1244, width: 70, height: 55 },
        revenue: { x: 1115, y: 642, width: 70, height: 402 },
        gross_profit: { x: 1488, y: 563, width: 71, height: 173 },
        interest_other: { x: 1488, y: 919, width: 71, height: 122 },
        credit_loss_allowance: { x: 1488, y: 1123, width: 71, height: 93 },
        transactional: { x: 1488, y: 1347, width: 71, height: 9 },
        pretax_income: { x: 1862, y: 468, width: 71, height: 106 },
        operating_expenses: { x: 1862, y: 736, width: 71, height: 65 },
        net_income: { x: 2235, y: 387, width: 71, height: 74 },
        tax: { x: 2235, y: 619, width: 71, height: 30 },
        ga: { x: 2235, y: 824, width: 71, height: 32 },
        customer_support: { x: 2235, y: 1007, width: 71, height: 15 },
        marketing: { x: 2235, y: 1168, width: 71, height: 5 },
        other_expenses: { x: 2235, y: 1319, width: 71, height: 9 },
      },
      labels: layoutLabels(false),
    },
    nodes: [
      { id: 'credit_card', col: 0, order: 0, type: 'source', label: 'Credit card', value: 1.2, notes: ['+26% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'lending', col: 0, order: 1, type: 'source', label: 'Lending', value: 1.3, notes: ['+59% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_interest', col: 0, order: 2, type: 'source', label: 'Other', value: 1.1, notes: ['+54% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'interest_income', col: 1, order: 0, type: 'source', label: 'Interest income', value: 3.6, notes: ['+45% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'fee_commission_income', col: 1, order: 1, type: 'source', label: 'Fee & commission income', value: 0.6, notes: ['+27% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 4.2, notes: ['+42% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 1.8, notes: ['43% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest_other', col: 3, order: 1, type: 'cost', label: 'Interest & other', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'credit_loss_allowance', col: 3, order: 2, type: 'cost', label: 'Credit loss allowance', value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'transactional', col: 3, order: 3, type: 'cost', label: 'Transactional', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 4, order: 0, type: 'profit', label: 'Pretax income', value: 1.1, notes: ['27% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 5, order: 0, type: 'profit', label: 'Net income', value: 0.8, notes: ['19% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 0.3, notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'customer_support', col: 5, order: 3, type: 'cost', label: 'Customer Support', value: 0.2, notes: ['4% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 4, type: 'cost', label: 'Marketing', value: 0.1, notes: ['2% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 5, order: 5, type: 'cost', label: 'Other expenses', value: 0.1, notes: ['2% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'credit_card', target: 'interest_income', value: 1.2, sourceWidth: 115, targetWidth: 115, y0: 463.5, y1: 615.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'lending', target: 'interest_income', value: 1.3, sourceWidth: 118, targetWidth: 122, y0: 732, y1: 734, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_interest', target: 'interest_income', value: 1.1, sourceWidth: 105, targetWidth: 107, y0: 975.5, y1: 848.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'interest_income', target: 'revenue', value: 3.6, sourceWidth: 344, targetWidth: 344, y0: 730, y1: 814, sourceOrder: 0, targetOrder: 0 },
      { source: 'fee_commission_income', target: 'revenue', value: 0.6, sourceWidth: 55, targetWidth: 58, y0: 1271.5, y1: 1015, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1.8, sourceWidth: 175, targetWidth: 173, y0: 729.5, y1: 649.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'interest_other', value: 1.3, sourceWidth: 124, targetWidth: 122, y0: 879, y1: 980, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'credit_loss_allowance', value: 1.0, sourceWidth: 94, targetWidth: 93, y0: 988, y1: 1169.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'revenue', target: 'transactional', value: 0.1, sourceWidth: 9, targetWidth: 9, y0: 1039.5, y1: 1351.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'gross_profit', target: 'pretax_income', value: 1.1, sourceWidth: 107, targetWidth: 105, y0: 616.5, y1: 521.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.7, sourceWidth: 66, targetWidth: 65, y0: 703, y1: 768, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 0.8, sourceWidth: 76, targetWidth: 73, y0: 506, y1: 424.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 0.3, sourceWidth: 30, targetWidth: 30, y0: 559, y1: 634, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.3, sourceWidth: 33, targetWidth: 32, y0: 752.5, y1: 840, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'customer_support', value: 0.2, sourceWidth: 15, targetWidth: 15, y0: 776.5, y1: 1014.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.1, sourceWidth: 7, targetWidth: 4, y0: 787.5, y1: 1170, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expenses', value: 0.1, sourceWidth: 10, targetWidth: 9, y0: 796, y1: 1323.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Nu · 2025 财年第三季度',
        meta: {
          title: 'Nu 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1420,
        },
        annotationsSvg: annotations(true),
        nodes: {
          credit_card: { label: '信用卡', notes: ['同比 +26%'] },
          lending: { label: '贷款', notes: ['同比 +59%'] },
          other_interest: { label: '其他', notes: ['同比 +54%'] },
          interest_income: { label: '利息收入', notes: ['同比 +45%'] },
          fee_commission_income: { label: '手续费及佣金收入', notes: ['同比 +27%'] },
          revenue: { label: '收入', notes: ['同比 +42%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 43%', '同比 (2 个百分点)'] },
          interest_other: { label: '利息及其他' },
          credit_loss_allowance: { label: '信用损失准备' },
          transactional: { label: '交易成本' },
          pretax_income: { label: '税前利润', notes: ['利润率 27%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_income: { label: '净利润', notes: ['利润率 19%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
          customer_support: { label: '客户支持', notes: ['占收入 4%', '同比 (0 个百分点)'] },
          marketing: { label: '营销', notes: ['占收入 2%', '同比 (2 个百分点)'] },
          other_expenses: { label: '其他费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
        layout: { labels: layoutLabels(true) },
      },
    },
  });
})();

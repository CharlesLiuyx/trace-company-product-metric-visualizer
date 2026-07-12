/* Nu Q1 FY26 income statement ($B), measured from the processed reference. */
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

  // Pure vector re-creation of the two-card cluster. The source crop remains
  // validation-only; the rendered chart embeds no source pixels.
  const creditCardCluster = `
    <g aria-label="Nu credit cards" data-typography-role="brand">
      <defs>
        <linearGradient id="nu-q1-card-purple-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#52237d"/><stop offset="0.55" stop-color="#8d28dd"/><stop offset="1" stop-color="#5d159f"/>
        </linearGradient>
        <linearGradient id="nu-q1-card-purple-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#6622a7"/><stop offset="0.6" stop-color="#a83aff"/><stop offset="1" stop-color="#6d18b9"/>
        </linearGradient>
      </defs>
      <g transform="translate(171 357) rotate(27)">
        <rect x="-40" y="-66" width="80" height="132" rx="4" fill="url(#nu-q1-card-purple-a)"/>
        <circle cx="-21" cy="-47" r="10" fill="#ef3b24"/><circle cx="-8" cy="-47" r="10" fill="#f4a52d" opacity="0.88"/>
        <rect x="9" y="-54" width="15" height="12" rx="2" fill="#d7d7cf" opacity="0.88"/>
        <text x="-27" y="49" font-size="18" font-weight="800" fill="#ffffff">nu</text>
      </g>
      <g transform="translate(235 306) rotate(-32)">
        <rect x="-40" y="-66" width="80" height="132" rx="4" fill="url(#nu-q1-card-purple-b)"/>
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
      ${kpiCard(70, isZh ? '客户' : 'Customers', '135M', isZh ? '同比 +14%' : '+14% Y/Y')}
      ${kpiCard(291, isZh ? '存款' : 'Deposits', '$42.4B', isZh ? '同比 +22%' : '+22% Y/Y')}
    </g>`;

  const layoutLabels = (isZh) => {
    const t = isZh
      ? {
          creditCard: '信用卡', lending: '贷款', other: '其他', interest: ['利息', '收入'],
          fee: ['手续费及', '佣金', '收入'], revenue: '收入', gross: '毛利润', pretax: '税前利润', net: '净利润',
          interestOther: ['利息及', '其他'], creditLoss: ['信用损失', '准备'], transactional: '交易成本',
          opex: ['运营', '费用'], tax: '税费', ga: '管理费用', support: '客户支持', marketing: '营销', otherExpenses: '其他费用',
          yoy64: '同比 +64%', yoy59: '同比 +59%', yoy44: '同比 +44%', yoy56: '同比 +56%', yoy34: '同比 +34%', yoy53: '同比 +53%',
          margin38: '利润率 38%', yoyNeg3pp: '同比 (3 个百分点)', margin19: '利润率 19%', yoyNeg5pp: '同比 (5 个百分点)',
          margin18: '利润率 18%', yoy0pp: '同比 +0 个百分点', rev10: '占收入 10%', yoy1pp: '同比 +1 个百分点',
          rev4: '占收入 4%', yoyNeg1pp: '同比 (1 个百分点)', rev3: '占收入 3%', yoy2pp: '同比 +2 个百分点', rev1: '占收入 1%',
        }
      : {
          creditCard: 'Credit card', lending: 'Lending', other: 'Other', interest: ['Interest', 'income'],
          fee: ['Fee &', 'commission', 'income'], revenue: 'Revenue', gross: 'Gross profit', pretax: 'Pretax income', net: 'Net income',
          interestOther: ['Interest', '& other'], creditLoss: ['Credit loss', 'allowance'], transactional: 'Transactional',
          opex: ['Operating', 'expenses'], tax: 'Tax', ga: 'G&A', support: 'Customer Support', marketing: 'Marketing', otherExpenses: 'Other expenses',
          yoy64: '+64% Y/Y', yoy59: '+59% Y/Y', yoy44: '+44% Y/Y', yoy56: '+56% Y/Y', yoy34: '+34% Y/Y', yoy53: '+53% Y/Y',
          margin38: '38% margin', yoyNeg3pp: '(3pp) Y/Y', margin19: '19% margin', yoyNeg5pp: '(5pp) Y/Y',
          margin18: '18% margin', yoy0pp: '+0pp Y/Y', rev10: '10% of revenue', yoy1pp: '+1pp Y/Y',
          rev4: '4% of revenue', yoyNeg1pp: '(1pp) Y/Y', rev3: '3% of revenue', yoy2pp: '+2pp Y/Y', rev1: '1% of revenue',
        };

    const sourceValue = (top, yoy) => block(407.5, top, [
      line('$value', 39), line(yoy, 29, { color: NOTE }),
    ], { lineGap: 14 });
    const mainProfit = (x, top, name, margin, yoy) => block(x, top, [
      line(name, 40, { weight: 800 }), line('$value', 39),
      line(margin, 29, { color: NOTE }), line(yoy, 29, { color: NOTE }),
    ], { lineGap: 13 });
    const costLabelX = isZh
      ? { creditLoss: 1648, interestOther: 1630, transactional: 1648 }
      : { creditLoss: 1668.5, interestOther: 1645.5, transactional: 1697 };
    const smallRight = (top, name, note1, note2) => block(RIGHT_CENTER_X, top, [
      line(name, 31, { weight: 800 }), line('$value', 29),
      line(note1, 28, { color: NOTE }), line(note2, 28, { color: NOTE }),
    ], { lineGap: 8 });

    return {
      credit_card: { blocks: [sourceValue(324, t.yoy64), block(325, 453, [line(t.creditCard, 40, { weight: 800 })], { anchor: 'end' })] },
      lending: { blocks: [sourceValue(615, t.yoy59), block(302, 756, [line(t.lending, 40, { weight: 800 })], { anchor: 'end' })] },
      other_interest: { blocks: [sourceValue(907, t.yoy44), block(281, 1043, [line(t.other, 40, { weight: 800 })], { anchor: 'end' })] },
      interest_income: { blocks: [block(777, 363, [
        ...t.interest.map((name) => line(name, 40, { weight: 800 })), line('$value', 39), line(t.yoy56, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      fee_commission_income: { blocks: [block(727, 971, [
        ...t.fee.map((name) => line(name, 40, { weight: 800 })), line('$value', 39), line(t.yoy34, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      revenue: { blocks: [block(1151, 509, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 39), line(t.yoy53, 29, { color: NOTE }),
      ], { lineGap: 13 })] },
      gross_profit: { blocks: [mainProfit(1524.5, 370, t.gross, t.margin38, t.yoyNeg3pp)] },
      credit_loss_allowance: { blocks: [block(costLabelX.creditLoss, 885, [
        ...t.creditLoss.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 14 })] },
      interest_other: { blocks: [block(costLabelX.interestOther, 1080, [
        ...t.interestOther.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 14 })] },
      transactional: { blocks: [block(costLabelX.transactional, 1244, [
        line(t.transactional, 36, { weight: 800 }), line('$value', 34),
      ], { lineGap: 15 })] },
      pretax_income: { blocks: [mainProfit(1898.5, 294, t.pretax, t.margin19, t.yoyNeg5pp)] },
      operating_expenses: { blocks: [block(1898.5, 799, [
        ...t.opex.map((name) => line(name, 36, { weight: 800 })), line('$value', 34),
      ], { lineGap: 15 })] },
      net_income: { blocks: [mainProfit(2438, 356, t.net, t.margin18, t.yoy0pp)] },
      tax: { blocks: [block(2438, 568, [line(t.tax, 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
      ga: { blocks: [
        block(isZh ? 2325 : 2368, 763, [line(t.ga, isZh ? 29 : 31, { weight: 800 })], { anchor: 'start', lineGap: 8 }),
        block(isZh ? 2470 : 2442, 763, [line('$value', 29)], { anchor: 'start', lineGap: 8 }),
        block(RIGHT_CENTER_X, 805, [line(t.rev10, 28, { color: NOTE }), line(t.yoy1pp, 28, { color: NOTE })], { lineGap: 8 }),
      ] },
      customer_support: { blocks: [smallRight(906, t.support, t.rev4, t.yoyNeg1pp)] },
      other_expenses: { blocks: [smallRight(1068, t.otherExpenses, t.rev3, t.yoy2pp)] },
      marketing: { blocks: [
        block(isZh ? 2380 : 2323, 1253, [line(t.marketing, 31, { weight: 800 })], { anchor: 'start', lineGap: 8 }),
        block(isZh ? 2470 : 2488, 1253, [line('$value', 29)], { anchor: 'start', lineGap: 8 }),
        block(RIGHT_CENTER_X, 1295, [line(t.rev1, 28, { color: NOTE }), line(t.yoy0pp, 28, { color: NOTE })], { lineGap: 8 }),
      ] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nu-q1-fy26',
    name: 'Nu · Q1 FY26',
    company: 'Nu',
    meta: {
      company: 'Nu',
      title: 'Nu Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nu-q1-fy26.png', width: 2667, height: 1500 },
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
        credit_card: { x: 368, y: 418, width: 71, height: 135 },
        lending: { x: 368, y: 715, width: 71, height: 140 },
        other_interest: { x: 368, y: 1011, width: 71, height: 96 },
        interest_income: { x: 742, y: 568, width: 70, height: 369 },
        fee_commission_income: { x: 742, y: 1226, width: 70, height: 60 },
        revenue: { x: 1116, y: 660, width: 70, height: 431 },
        gross_profit: { x: 1489, y: 563, width: 71, height: 162 },
        credit_loss_allowance: { x: 1489, y: 881, width: 71, height: 149 },
        interest_other: { x: 1489, y: 1102, width: 71, height: 111 },
        transactional: { x: 1489, y: 1287, width: 71, height: 12 },
        pretax_income: { x: 1863, y: 483, width: 71, height: 83 },
        operating_expenses: { x: 1863, y: 714, width: 71, height: 79 },
        net_income: { x: 2236, y: 409, width: 71, height: 76 },
        tax: { x: 2236, y: 630, width: 71, height: 8 },
        ga: { x: 2236, y: 779, width: 71, height: 43 },
        customer_support: { x: 2236, y: 947, width: 71, height: 19 },
        other_expenses: { x: 2236, y: 1109, width: 71, height: 15 },
        marketing: { x: 2236, y: 1273, width: 71, height: 7 },
      },
      labels: layoutLabels(false),
    },
    nodes: [
      { id: 'credit_card', col: 0, order: 0, type: 'source', label: 'Credit card', value: 1.6, notes: ['+64% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'lending', col: 0, order: 1, type: 'source', label: 'Lending', value: 1.6, notes: ['+59% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_interest', col: 0, order: 2, type: 'source', label: 'Other', value: 1.1, notes: ['+44% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'interest_income', col: 1, order: 0, type: 'source', label: 'Interest income', value: 4.3, valueText: '$4.3B', notes: ['+56% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'fee_commission_income', col: 1, order: 1, type: 'source', label: 'Fee & commission income', value: 0.7, notes: ['+34% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 5.0, notes: ['+53% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 1.9, notes: ['38% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'credit_loss_allowance', col: 3, order: 1, type: 'cost', label: 'Credit loss allowance', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest_other', col: 3, order: 2, type: 'cost', label: 'Interest & other', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'transactional', col: 3, order: 3, type: 'cost', label: 'Transactional', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'pretax_income', col: 4, order: 0, type: 'profit', label: 'Pretax income', value: 1.0, notes: ['19% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 5, order: 0, type: 'profit', label: 'Net income', value: 0.9, notes: ['18% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 0.5, notes: ['10% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'customer_support', col: 5, order: 3, type: 'cost', label: 'Customer Support', value: 0.2, notes: ['4% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 5, order: 4, type: 'cost', label: 'Other expenses', value: 0.1, notes: ['3% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 5, type: 'cost', label: 'Marketing', value: 0.1, notes: ['1% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'credit_card', target: 'interest_income', value: 1.6, width: 135, sourceWidth: 135, targetWidth: 135, y0: 485.5, y1: 635.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'lending', target: 'interest_income', value: 1.6, width: 140, sourceWidth: 140, targetWidth: 139, y0: 785, y1: 772.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_interest', target: 'interest_income', value: 1.1, width: 96, sourceWidth: 96, targetWidth: 95, y0: 1059, y1: 889.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'interest_income', target: 'revenue', value: 4.3, width: 369, sourceWidth: 369, targetWidth: 370, y0: 752.5, y1: 845, sourceOrder: 0, targetOrder: 0 },
      { source: 'fee_commission_income', target: 'revenue', value: 0.7, width: 60, sourceWidth: 60, targetWidth: 61, y0: 1256, y1: 1060.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1.9, width: 161, sourceWidth: 161, targetWidth: 162, y0: 740.5, y1: 644, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'credit_loss_allowance', value: 1.7, width: 147, sourceWidth: 147, targetWidth: 149, y0: 894.5, y1: 955.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'interest_other', value: 1.3, width: 110, sourceWidth: 110, targetWidth: 111, y0: 1023, y1: 1157.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'revenue', target: 'transactional', value: 0.1, width: 13, sourceWidth: 13, targetWidth: 12, y0: 1084.5, y1: 1293, sourceOrder: 3, targetOrder: 0 },
      { source: 'gross_profit', target: 'pretax_income', value: 1.0, width: 83, sourceWidth: 83, targetWidth: 83, y0: 604.5, y1: 524.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.9, width: 79, sourceWidth: 79, targetWidth: 79, y0: 685.5, y1: 753.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 0.9, width: 76, sourceWidth: 76, targetWidth: 76, y0: 521, y1: 447, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 0.1, width: 7, sourceWidth: 7, targetWidth: 8, y0: 562.5, y1: 634, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.5, width: 42, sourceWidth: 42, targetWidth: 43, y0: 735, y1: 800.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'customer_support', value: 0.2, width: 18, sourceWidth: 18, targetWidth: 19, y0: 765, y1: 956.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expenses', value: 0.1, width: 11, sourceWidth: 11, targetWidth: 15, y0: 779.5, y1: 1116.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.1, width: 8, sourceWidth: 8, targetWidth: 7, y0: 789, y1: 1276.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Nu · 2026 财年第一季度',
        meta: {
          title: 'Nu 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1420,
        },
        annotationsSvg: annotations(true),
        nodes: {
          credit_card: { label: '信用卡', notes: ['同比 +64%'] },
          lending: { label: '贷款', notes: ['同比 +59%'] },
          other_interest: { label: '其他', notes: ['同比 +44%'] },
          interest_income: { label: '利息收入', notes: ['同比 +56%'] },
          fee_commission_income: { label: '手续费及佣金收入', notes: ['同比 +34%'] },
          revenue: { label: '收入', notes: ['同比 +53%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 38%', '同比 (3 个百分点)'] },
          credit_loss_allowance: { label: '信用损失准备' },
          interest_other: { label: '利息及其他' },
          transactional: { label: '交易成本' },
          pretax_income: { label: '税前利润', notes: ['利润率 19%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_income: { label: '净利润', notes: ['利润率 18%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 +1 个百分点'] },
          customer_support: { label: '客户支持', notes: ['占收入 4%', '同比 (1 个百分点)'] },
          other_expenses: { label: '其他费用', notes: ['占收入 3%', '同比 +2 个百分点'] },
          marketing: { label: '营销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: layoutLabels(true) },
      },
    },
  });
})();

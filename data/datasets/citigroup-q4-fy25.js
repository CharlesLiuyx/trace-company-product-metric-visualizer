/* Citigroup Q4 FY25 income statement ($B), reconstructed as fixed SVG Sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#686868';
  const BLUE = '#084681';
  const BLUE_LINK = '#8aa4c0';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce99';
  const RED = '#d90000';
  const RED_LABEL = '#9b1808';
  const RED_LINK = '#df8484';
  const RIGHT_X = 2400;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const labels = (t) => ({
    services: { blocks: [
      block(461, 296, [line('$value', 39), line(t.servicesYy, 28, 400, NOTE)], 'middle', 10),
      block(373, 390, [line(t.services, 40, 800), line(t.servicesMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    markets: { blocks: [
      block(461, 505, [line('$value', 39), line(t.marketsYy, 28, 400, NOTE)], 'middle', 10),
      block(373, 580, [line(t.markets, 40, 800), line(t.marketsMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    banking: { blocks: [
      block(461, 700, [line('$value', 39), line(t.bankingYy, 28, 400, NOTE)], 'middle', 10),
      block(373, 758, [line(t.banking, 40, 800), line(t.bankingMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    wealth: { blocks: [
      block(461, 850, [line('$value', 39), line(t.wealthYy, 28, 400, NOTE)], 'middle', 10),
      block(373, 908, [line(t.wealth, 40, 800), line(t.wealthMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    uspb: { blocks: [
      block(461, 994, [line('$value', 39), line(t.uspbYy, 28, 400, NOTE)], 'middle', 10),
      block(373, 1078, [line(t.uspb, 40, 800), line(t.uspbMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    revenue: { blocks: [block(1085, 450, [line(t.revenue, 40, 800), line(t.revenueNote, 32, 800), line('$value', 39), line(t.revenueYy, 28, 400, NOTE)], 'middle', 10)] },
    all_other: { blocks: [block(1242, 1075, [line(t.allOther, 40, 800), line('$value', 39)], 'middle', 11)] },
    pretax_income: { blocks: [block(1706, 345, [line(t.pretax, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10)] },
    operating_expenses: { blocks: [block(1706, 1048, [line(t.noninterest[0], 40, 800, RED_LABEL), line(t.noninterest[1], 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], 'middle', 10)] },
    provision_for_credit_losses: { blocks: [block(1706, 1258, [line(t.provision[0], 38, 800, RED_LABEL), line(t.provision[1], 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 'middle', 10)] },
    net_income: { blocks: [block(RIGHT_X, 270, [line(t.netIncome, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.netYy, 28, 400, NOTE)], 'start', 10)] },
    tax: { blocks: [block(RIGHT_X, 487, [line(t.tax, 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    compensation_benefits: { blocks: [block(RIGHT_X, 670, [line(t.compensation[0], 32, 800, RED_LABEL), line(t.compensation[1], 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    other_general_operating: { blocks: [block(RIGHT_X, 860, [line(t.otherGeneral[0], 32, 800, RED_LABEL), line(t.otherGeneral[1], 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    technology_communication: { blocks: [block(RIGHT_X, 1004, [line(t.technology[0], 31, 800, RED_LABEL), line(t.technology[1], 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    premises_equipment: { blocks: [block(RIGHT_X, 1143, [line(t.premises[0], 31, 800, RED_LABEL), line(t.premises[1], 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    marketing: { blocks: [block(RIGHT_X, 1275, [line(t.marketing, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
  });

  const enLabels = labels({
    servicesYy: '+15% Y/Y', services: 'Services', servicesMargin: '38% net margin',
    marketsYy: '(1%) Y/Y', markets: 'Markets', marketsMargin: '17% net margin',
    bankingYy: '+78% Y/Y', banking: 'Banking', bankingMargin: '31% net margin',
    wealthYy: '+7% Y/Y', wealth: 'Wealth', wealthMargin: '16% net margin',
    uspbYy: '+3% Y/Y', uspb: 'USPB', uspbMargin: '16% net margin',
    revenue: 'Revenue', revenueNote: '(net of interest expenses)', revenueYy: '+2% Y/Y', allOther: 'All Other', pretax: 'Pretax income',
    noninterest: ['Noninterest', 'expenses'], provision: ['Provision for', 'credit losses'], netIncome: 'Net income', netYy: '(13%) Y/Y', tax: 'Tax',
    compensation: ['Compensation', '& benefits'], otherGeneral: ['Other general', 'operating'], technology: ['Technology &', 'communication'], premises: ['Premises &', 'equipment'], marketing: 'Marketing',
  });
  const zhLabels = labels({
    servicesYy: '同比 +15%', services: '服务', servicesMargin: '净利率 38%',
    marketsYy: '同比 (1%)', markets: '市场', marketsMargin: '净利率 17%',
    bankingYy: '同比 +78%', banking: '银行', bankingMargin: '净利率 31%',
    wealthYy: '同比 +7%', wealth: '财富管理', wealthMargin: '净利率 16%',
    uspbYy: '同比 +3%', uspb: '美国个人银行', uspbMargin: '净利率 16%',
    revenue: '收入', revenueNote: '（扣除利息支出后）', revenueYy: '同比 +2%', allOther: '所有其他', pretax: '税前利润',
    noninterest: ['非利息', '费用'], provision: ['信用损失', '拨备'], netIncome: '净利润', netYy: '同比 (13%)', tax: '税费',
    compensation: ['薪酬', '与福利'], otherGeneral: ['其他一般', '运营'], technology: ['技术与', '通信'], premises: ['场地与', '设备'], marketing: '营销',
  });
  for (const id of ['services', 'markets', 'banking', 'wealth', 'uspb']) {
    zhLabels[id].blocks[1].x = 395;
    zhLabels[id].blocks[1].lines.forEach((item) => { item.size = Math.min(item.size, 34); });
  }
  for (const id of ['compensation_benefits', 'other_general_operating', 'technology_communication', 'premises_equipment', 'marketing']) {
    zhLabels[id].blocks[0].lines.forEach((item) => { item.size = Math.min(item.size, 29); });
  }

  const citiLogo = `
    <path d="M61 48 A79 79 0 0 1 219 48" fill="none" stroke="#ed1b2f" stroke-width="15" />
    <text x="140" y="168" text-anchor="middle" font-family="Arial,sans-serif" font-size="180" font-weight="700" letter-spacing="-14" fill="#084681">citi</text>`;
  const annotations = (t) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="193" y="264" font-size="39" font-weight="800" fill="${TITLE}">${t.segment}</text>
      <g><rect x="79" y="1210" width="264" height="149" rx="29" fill="${BLUE}"/><text x="211" y="1263" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.deposits}</text><text x="211" y="1303" text-anchor="middle" font-size="29" fill="#fff">${t.depositsValue}</text><text x="211" y="1334" text-anchor="middle" font-size="22" fill="#fff">${t.depositsChange}</text></g>
      <g><rect x="351" y="1210" width="241" height="149" rx="29" fill="${BLUE}"/><text x="472" y="1263" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.loans}</text><text x="472" y="1303" text-anchor="middle" font-size="29" fill="#fff">${t.loansValue}</text><text x="472" y="1334" text-anchor="middle" font-size="22" fill="#fff">${t.loansChange}</text></g>
      <g><rect x="600" y="1210" width="242" height="149" rx="29" fill="${BLUE}"/><text x="721" y="1263" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.cet1}</text><text x="721" y="1303" text-anchor="middle" font-size="29" fill="#fff">13.2%</text><text x="721" y="1334" text-anchor="middle" font-size="22" fill="#fff">${t.cet1Change}</text></g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'citigroup-q4-fy25',
    name: 'Citigroup · Q4 FY25',
    company: 'Citigroup',
    meta: {
      company: 'Citigroup', title: 'Citigroup Q4 FY25 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/citigroup-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 120, titleWeight: 800, titleTextLength: 2350,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 278, logoHeight: 180, logoY: 252, logoViewBox: '0 0 280 180', logoSvg: citiLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: TITLE }, hub: { node: BLUE, label: TITLE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations({ segment: 'By Business Segment', deposits: 'Deposits', depositsValue: '$1.42T', depositsChange: '+8% Y/Y & +3% Q/Q', loans: 'Loans', loansValue: '$0.74T', loansChange: '+7% Y/Y & +2% Q/Q', cet1: 'CET1 ratio', cet1Change: '(0.4pp) Y/Y' }),
    nodes: [
      { id: 'services', label: 'Services', value: 5.9, notes: ['+15% Y/Y', '38% net margin'], type: 'source', col: 0, order: 0 },
      { id: 'markets', label: 'Markets', value: 4.5, notes: ['(1%) Y/Y', '17% net margin'], type: 'source', col: 0, order: 1 },
      { id: 'banking', label: 'Banking', value: 2.2, notes: ['+78% Y/Y', '31% net margin'], type: 'source', col: 0, order: 2 },
      { id: 'wealth', label: 'Wealth', value: 2.1, notes: ['+7% Y/Y', '16% net margin'], type: 'source', col: 0, order: 3 },
      { id: 'uspb', label: 'USPB', value: 5.3, notes: ['+3% Y/Y', '16% net margin'], type: 'source', col: 0, order: 4 },
      { id: 'revenue', label: 'Revenue', value: 19.9, notes: ['+2% Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'all_other', label: 'All Other', value: 0.2, valueText: '$0.2B', type: 'cost', col: 2, order: 1, color: TITLE, labelColor: TITLE, linkTint: BLUE_LINK },
      { id: 'pretax_income', label: 'Pretax income', value: 3.8, type: 'profit', col: 2, order: 0 },
      { id: 'operating_expenses', label: ['Noninterest', 'expenses'], value: 13.8, type: 'cost', col: 2, order: 2 },
      { id: 'provision_for_credit_losses', label: ['Provision for', 'credit losses'], value: 2.2, type: 'cost', col: 2, order: 3 },
      { id: 'net_income', label: 'Net income', value: 2.5, type: 'profit', col: 3, order: 0, notes: ['(13%) Y/Y'] },
      { id: 'tax', label: 'Tax', value: 1.3, type: 'cost', col: 3, order: 1 },
      { id: 'compensation_benefits', label: ['Compensation', '& benefits'], value: 7.1, type: 'cost', col: 3, order: 2 },
      { id: 'other_general_operating', label: ['Other general', 'operating'], value: 3.3, type: 'cost', col: 3, order: 3 },
      { id: 'technology_communication', label: ['Technology &', 'communication'], value: 2.4, type: 'cost', col: 3, order: 4 },
      { id: 'premises_equipment', label: ['Premises &', 'equipment'], value: 0.7, type: 'cost', col: 3, order: 5 },
      { id: 'marketing', label: 'Marketing', value: 0.3, type: 'cost', col: 3, order: 6 },
    ],
    links: [
      { source: 'services', target: 'revenue', value: 5.9, targetOrder: 0 },
      { source: 'markets', target: 'revenue', value: 4.5, targetOrder: 1 },
      { source: 'banking', target: 'revenue', value: 2.2, targetOrder: 2 },
      { source: 'wealth', target: 'revenue', value: 2.1, targetOrder: 3 },
      { source: 'uspb', target: 'revenue', value: 5.3, targetOrder: 4 },
      { source: 'revenue', target: 'pretax_income', value: 3.8, sourceOrder: 0, targetOrder: 0, sourceWidth: 59, targetWidth: 59 },
      { source: 'revenue', target: 'operating_expenses', value: 13.8, sourceOrder: 1, targetOrder: 0, sourceWidth: 215, targetWidth: 216 },
      { source: 'revenue', target: 'provision_for_credit_losses', value: 2.2, sourceOrder: 2, targetOrder: 0, sourceWidth: 35, targetWidth: 35 },
      { source: 'revenue', target: 'all_other', value: 0.2, sourceOrder: 3, targetOrder: 0, sourceWidth: 4, targetWidth: 4, y0: 948, y1: 1052 },
      { source: 'pretax_income', target: 'net_income', value: 2.5, sourceOrder: 0, targetOrder: 0, sourceWidth: 39, targetWidth: 40 },
      { source: 'pretax_income', target: 'tax', value: 1.3, sourceOrder: 1, targetOrder: 0, sourceWidth: 20, targetWidth: 20 },
      { source: 'operating_expenses', target: 'compensation_benefits', value: 7.1, sourceOrder: 0, targetOrder: 0, targetWidth: 109 },
      { source: 'operating_expenses', target: 'other_general_operating', value: 3.3, sourceOrder: 1, targetOrder: 0, targetWidth: 51 },
      { source: 'operating_expenses', target: 'technology_communication', value: 2.4, sourceOrder: 2, targetOrder: 0, targetWidth: 37 },
      { source: 'operating_expenses', target: 'premises_equipment', value: 0.7, sourceOrder: 3, targetOrder: 0, targetWidth: 12 },
      { source: 'operating_expenses', target: 'marketing', value: 0.3, sourceOrder: 4, targetOrder: 0, targetWidth: 5 },
    ],
    layout: {
      scale: 15.6,
      nodes: {
        services: { x: 425, y: 386, width: 73, height: 92 }, markets: { x: 425, y: 598, width: 73, height: 70 }, banking: { x: 425, y: 791, width: 73, height: 34 }, wealth: { x: 425, y: 943, width: 73, height: 33 }, uspb: { x: 425, y: 1083, width: 73, height: 83 },
        revenue: { x: 1048, y: 639, width: 73, height: 312 }, all_other: { x: 1207, y: 1050, width: 70, height: 4 },
        pretax_income: { x: 1670, y: 453, width: 73, height: 59 }, operating_expenses: { x: 1670, y: 824, width: 73, height: 216 }, provision_for_credit_losses: { x: 1670, y: 1199, width: 73, height: 35 },
        net_income: { x: 2294, y: 303, width: 73, height: 40 }, tax: { x: 2294, y: 491, width: 73, height: 20 }, compensation_benefits: { x: 2294, y: 669, width: 73, height: 109 }, other_general_operating: { x: 2294, y: 891, width: 73, height: 51 }, technology_communication: { x: 2294, y: 1050, width: 73, height: 37 }, premises_equipment: { x: 2294, y: 1191, width: 73, height: 12 }, marketing: { x: 2294, y: 1308, width: 73, height: 5 },
      },
      labels: enLabels,
    },
    i18n: {
      zh: {
        name: '花旗集团 · 2025 财年第四季度',
        meta: { title: '花旗集团 2025 财年第四季度利润表', period: '', periodNote: '', titleTextLength: 1980 },
        nodes: {
          services: { label: '服务', notes: ['同比 +15%', '净利率 38%'] }, markets: { label: '市场', notes: ['同比 (1%)', '净利率 17%'] }, banking: { label: '银行', notes: ['同比 +78%', '净利率 31%'] }, wealth: { label: '财富管理', notes: ['同比 +7%', '净利率 16%'] }, uspb: { label: '美国个人银行', notes: ['同比 +3%', '净利率 16%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] }, all_other: { label: '所有其他' }, pretax_income: { label: '税前利润' }, operating_expenses: { label: ['非利息', '费用'] }, provision_for_credit_losses: { label: ['信用损失', '拨备'] }, net_income: { label: '净利润', notes: ['同比 (13%)'] }, tax: { label: '税费' }, compensation_benefits: { label: ['薪酬', '与福利'] }, other_general_operating: { label: ['其他一般', '运营'] }, technology_communication: { label: ['技术与', '通信'] }, premises_equipment: { label: ['场地与', '设备'] }, marketing: { label: '营销' },
        },
        layout: { labels: zhLabels },
        annotationsSvg: annotations({ segment: '按业务分部', deposits: '存款', depositsValue: '1.42 万亿美元', depositsChange: '同比 +8%，环比 +3%', loans: '贷款', loansValue: '0.74 万亿美元', loansChange: '同比 +7%，环比 +2%', cet1: 'CET1 比率', cet1Change: '同比 (0.4 个百分点)' }),
      },
    },
  });
})();

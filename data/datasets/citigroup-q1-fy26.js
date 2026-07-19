/* Citigroup Q1 FY26 income statement ($B), reconstructed as fixed SVG Sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#003870';
  const BLUE_LINK = '#859db7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2401;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const labels = (t) => ({
    services: { blocks: [
      block(463, 291, [line('$value', 39), line(t.servicesYy, 28, 400, NOTE)], 'middle', 10),
      block(375, 389, [line(t.services, 40, 800), line(t.servicesMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    markets: { blocks: [
      block(453, 468, [line('$value', 39), line(t.marketsYy, 28, 400, NOTE)], 'middle', 10),
      block(365, 566, [line(t.markets, 40, 800), line(t.marketsMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    banking: { blocks: [
      block(453, 655, [line('$value', 39), line(t.bankingYy, 28, 400, NOTE)], 'middle', 10),
      block(365, 715, [line(t.banking, 40, 800), line(t.bankingMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    wealth: { blocks: [
      block(463, 784, [line('$value', 39), line(t.wealthYy, 28, 400, NOTE)], 'middle', 10),
      block(375, 854, [line(t.wealth, 40, 800), line(t.wealthMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    uspb: { blocks: [
      block(463, 919, [line('$value', 39), line(t.uspbYy, 28, 400, NOTE)], 'middle', 10),
      block(375, 1001, [line(t.uspb, 40, 800), line(t.uspbMargin, 28, 400, NOTE)], 'end', 13),
    ] },
    all_other: { blocks: [
      block(463, 1082, [line('$value', 39), line(t.allOtherYy, 28, 400, NOTE)], 'middle', 10),
      block(375, 1154, [line(t.allOther, 40, 800)], 'end', 13),
    ] },
    revenue: { blocks: [block(1081, 461, [line(t.revenue, 40, 800), line(t.revenueNote, 32, 800), line('$value', 39), line(t.revenueYy, 28, 400, NOTE)], 'middle', 10)] },
    pretax_income: { blocks: [block(1708, 371, [line(t.pretax, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL)], 'middle', 10)] },
    operating_expenses: { blocks: [block(1708, 1041, [line(t.noninterest[0], 40, 800, RED_LABEL), line(t.noninterest[1], 40, 800, RED_LABEL), line('$value', 39, 400, RED_LABEL)], 'middle', 10)] },
    provision_for_credit_losses: { blocks: [block(1708, 1255, [line(t.provision[0], 38, 800, RED_LABEL), line(t.provision[1], 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 'middle', 10)] },
    net_income: { blocks: [block(RIGHT_X, 290, [line(t.netIncome, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(t.netYy, 28, 400, NOTE)], 'start', 10)] },
    tax: { blocks: [block(2434, 550, [line(t.tax, 32, 800, RED_LABEL)], 'start', 9)] },
    compensation_benefits: { blocks: [block(RIGHT_X, 692, [line(t.compensation[0], 32, 800, RED_LABEL), line(t.compensation[1], 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    other_general_operating: { blocks: [block(RIGHT_X, 873, [line(t.otherGeneral[0], 32, 800, RED_LABEL), line(t.otherGeneral[1], 32, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    technology_communication: { blocks: [block(2394, 1021, [line(t.technology[0], 31, 800, RED_LABEL), line(t.technology[1], 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    premises_equipment: { blocks: [block(2431, 1160, [line(t.premises[0], 31, 800, RED_LABEL), line(t.premises[1], 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
    marketing: { blocks: [block(2437, 1290, [line(t.marketing, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)], 'start', 9)] },
  });

  const enLabels = labels({
    servicesYy: '+17% Y/Y', services: 'Services', servicesMargin: '37% net margin',
    marketsYy: '+19% Y/Y', markets: 'Markets', marketsMargin: '36% net margin',
    bankingYy: '+15% Y/Y', banking: 'Banking', bankingMargin: '17% net margin',
    wealthYy: '+11% Y/Y', wealth: 'Wealth', wealthMargin: '14% net margin',
    uspbYy: '+4% Y/Y', uspb: 'USPB', uspbMargin: '15% net margin',
    allOtherYy: '+16% Y/Y', allOther: 'All other',
    revenue: 'Revenue', revenueNote: '(net of interest expenses)', revenueYy: '+14% Y/Y', pretax: 'Pretax income',
    noninterest: ['Noninterest', 'expenses'], provision: ['Provision for', 'credit losses'], netIncome: 'Net income', netYy: '+45% Y/Y', tax: 'Tax ($1.6B)',
    compensation: ['Compensation', '& benefits'], otherGeneral: ['Other general', 'operating'], technology: ['Technology &', 'Communication'], premises: ['Premises &', 'equipment'], marketing: 'Marketing',
  });
  const zhLabels = labels({
    servicesYy: '同比 +17%', services: '服务', servicesMargin: '净利率 37%',
    marketsYy: '同比 +19%', markets: '市场', marketsMargin: '净利率 36%',
    bankingYy: '同比 +15%', banking: '银行', bankingMargin: '净利率 17%',
    wealthYy: '同比 +11%', wealth: '财富管理', wealthMargin: '净利率 14%',
    uspbYy: '同比 +4%', uspb: '美国个人银行', uspbMargin: '净利率 15%',
    allOtherYy: '同比 +16%', allOther: '所有其他',
    revenue: '收入', revenueNote: '（扣除利息支出后）', revenueYy: '同比 +14%', pretax: '税前利润',
    noninterest: ['非利息', '费用'], provision: ['信用损失', '拨备'], netIncome: '净利润', netYy: '同比 +45%', tax: '税费（$1.6B）',
    compensation: ['薪酬', '与福利'], otherGeneral: ['其他一般', '运营'], technology: ['技术与', '通信'], premises: ['场地与', '设备'], marketing: '营销',
  });
  for (const id of ['services', 'markets', 'banking', 'wealth', 'uspb', 'all_other']) {
    zhLabels[id].blocks[1].x = 397;
    zhLabels[id].blocks[1].lines.forEach((item) => { item.size = Math.min(item.size, 34); });
  }
  zhLabels.all_other.blocks[1].top += 3;
  for (const id of ['compensation_benefits', 'other_general_operating', 'technology_communication', 'premises_equipment', 'marketing']) {
    zhLabels[id].blocks[0].lines.forEach((item) => { item.size = Math.min(item.size, 29); });
  }

  const citiLogo = `
    <path d="M61 48 A79 79 0 0 1 219 48" fill="none" stroke="#ed0000" stroke-width="15" />
    <text x="140" y="168" text-anchor="middle" font-family="Arial,sans-serif" font-size="180" font-weight="700" letter-spacing="-14" fill="#003c74">citi</text>`;
  const annotations = (t) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="193" y="273" font-size="28" font-weight="800" ${t.segmentTextLength ? `textLength="${t.segmentTextLength}" lengthAdjust="spacing"` : ''} fill="${TITLE}">${t.segment}</text>
      <g><rect x="79" y="1211" width="264" height="149" rx="29" fill="${BLUE}"/><text x="211" y="1263" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.deposits}</text><text x="211" y="1303" text-anchor="middle" font-size="29" fill="#fff">${t.depositsValue}</text><text x="211" y="1334" text-anchor="middle" font-size="22" fill="#fff">${t.depositsChange}</text></g>
      <g><rect x="351" y="1211" width="242" height="149" rx="29" fill="${BLUE}"/><text x="472" y="1263" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.loans}</text><text x="472" y="1303" text-anchor="middle" font-size="29" fill="#fff">${t.loansValue}</text><text x="472" y="1334" text-anchor="middle" font-size="22" fill="#fff">${t.loansChange}</text></g>
      <g><rect x="600" y="1211" width="242" height="149" rx="29" fill="${BLUE}"/><text x="721" y="1263" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.cet1}</text><text x="721" y="1303" text-anchor="middle" font-size="29" fill="#fff">12.7%</text><text x="721" y="1334" text-anchor="middle" font-size="22" fill="#fff">${t.cet1Change}</text></g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'citigroup-q1-fy26',
    name: 'Citigroup · Q1 FY26',
    company: 'Citigroup',
    meta: {
      company: 'Citigroup', title: 'Citigroup Q1 FY26 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/citigroup-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 120, titleWeight: 800, titleTextLength: 2300,
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
    annotationsSvg: annotations({ segment: 'By Business Segment', segmentTextLength: 408, deposits: 'Deposits', depositsValue: '$1.45T', depositsChange: '+11% Y/Y & +2% Q/Q', loans: 'Loans', loansValue: '$0.76T', loansChange: '+9% Y/Y & +3% Q/Q', cet1: 'CET1 ratio', cet1Change: '(0.7pp) Y/Y' }),
    nodes: [
      { id: 'services', label: 'Services', value: 6.1, notes: ['+17% Y/Y', '37% net margin'], type: 'source', col: 0, order: 0 },
      { id: 'markets', label: 'Markets', value: 7.2, notes: ['+19% Y/Y', '36% net margin'], type: 'source', col: 0, order: 1 },
      { id: 'banking', label: 'Banking', value: 1.8, notes: ['+15% Y/Y', '17% net margin'], type: 'source', col: 0, order: 2 },
      { id: 'wealth', label: 'Wealth', value: 3.1, notes: ['+11% Y/Y', '14% net margin'], type: 'source', col: 0, order: 3 },
      { id: 'uspb', label: 'USPB', value: 4.8, notes: ['+4% Y/Y', '15% net margin'], type: 'source', col: 0, order: 4 },
      { id: 'all_other', label: 'All other', value: 1.7, notes: ['+16% Y/Y'], type: 'source', col: 0, order: 5 },
      { id: 'revenue', label: 'Revenue', value: 24.6, notes: ['+14% Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 7.5, type: 'profit', col: 2, order: 0 },
      { id: 'operating_expenses', label: ['Noninterest', 'expenses'], value: 14.3, type: 'cost', col: 2, order: 1 },
      { id: 'provision_for_credit_losses', label: ['Provision for', 'credit losses'], value: 2.8, type: 'cost', col: 2, order: 2 },
      { id: 'net_income', label: 'Net income', value: 5.9, type: 'profit', col: 3, order: 0, notes: ['+45% Y/Y'] },
      { id: 'tax', label: 'Tax', value: 1.6, type: 'cost', col: 3, order: 1 },
      { id: 'compensation_benefits', label: ['Compensation', '& benefits'], value: 8.4, type: 'cost', col: 3, order: 2 },
      { id: 'other_general_operating', label: ['Other general', 'operating'], value: 2.8, type: 'cost', col: 3, order: 3 },
      { id: 'technology_communication', label: ['Technology &', 'Communication'], value: 2.4, type: 'cost', col: 3, order: 4 },
      { id: 'premises_equipment', label: ['Premises &', 'equipment'], value: 0.6, type: 'cost', col: 3, order: 5 },
      { id: 'marketing', label: 'Marketing', value: 0.2, valueText: '($0.2B)', type: 'cost', col: 3, order: 6 },
    ],
    links: [
      { source: 'services', target: 'revenue', value: 6.1, targetOrder: 0 },
      { source: 'markets', target: 'revenue', value: 7.2, targetOrder: 1 },
      { source: 'banking', target: 'revenue', value: 1.8, sourceWidth: 21, targetOrder: 2 },
      { source: 'wealth', target: 'revenue', value: 3.1, sourceWidth: 37, targetOrder: 3 },
      { source: 'uspb', target: 'revenue', value: 4.8, sourceWidth: 57, targetOrder: 4 },
      { source: 'all_other', target: 'revenue', value: 1.7, targetOrder: 5 },
      { source: 'revenue', target: 'pretax_income', value: 7.5, sourceOrder: 0, targetOrder: 0, sourceWidth: 91, targetWidth: 91 },
      { source: 'revenue', target: 'operating_expenses', value: 14.3, sourceOrder: 1, targetOrder: 0, sourceWidth: 175, targetWidth: 176 },
      { source: 'revenue', target: 'provision_for_credit_losses', value: 2.8, sourceOrder: 2, targetOrder: 0, sourceWidth: 34, targetWidth: 35 },
      { source: 'pretax_income', target: 'net_income', value: 5.9, sourceOrder: 0, targetOrder: 0, sourceWidth: 72, targetWidth: 72 },
      { source: 'pretax_income', target: 'tax', value: 1.6, sourceOrder: 1, targetOrder: 0, sourceWidth: 19, targetWidth: 19 },
      { source: 'operating_expenses', target: 'compensation_benefits', value: 8.4, sourceOrder: 0, targetOrder: 0, targetWidth: 103 },
      { source: 'operating_expenses', target: 'other_general_operating', value: 2.8, sourceOrder: 1, targetOrder: 0, targetWidth: 35 },
      { source: 'operating_expenses', target: 'technology_communication', value: 2.4, sourceOrder: 2, targetOrder: 0, targetWidth: 28 },
      { source: 'operating_expenses', target: 'premises_equipment', value: 0.6, sourceOrder: 3, targetOrder: 0, targetWidth: 7 },
      { source: 'operating_expenses', target: 'marketing', value: 0.2, sourceOrder: 4, targetOrder: 0, targetWidth: 3 },
    ],
    layout: {
      scale: 12.2,
      nodes: {
        services: { x: 427, y: 380, width: 73, height: 75 }, markets: { x: 427, y: 558, width: 73, height: 88 }, banking: { x: 427, y: 744, width: 73, height: 21 }, wealth: { x: 427, y: 873, width: 73, height: 37 }, uspb: { x: 427, y: 1008, width: 73, height: 57 }, all_other: { x: 427, y: 1171, width: 73, height: 21 },
        revenue: { x: 1049, y: 647, width: 74, height: 301 },
        pretax_income: { x: 1672, y: 483, width: 74, height: 92 }, operating_expenses: { x: 1672, y: 853, width: 74, height: 176 }, provision_for_credit_losses: { x: 1672, y: 1208, width: 74, height: 35 },
        net_income: { x: 2295, y: 303, width: 73, height: 72 }, tax: { x: 2295, y: 552, width: 73, height: 19 }, compensation_benefits: { x: 2295, y: 696, width: 73, height: 103 }, other_general_operating: { x: 2295, y: 908, width: 73, height: 35 }, technology_communication: { x: 2295, y: 1061, width: 73, height: 28 }, premises_equipment: { x: 2295, y: 1211, width: 73, height: 7 }, marketing: { x: 2295, y: 1321, width: 73, height: 3 },
      },
      labels: enLabels,
    },
    i18n: {
      zh: {
        name: '花旗集团 · 2026 财年第一季度',
        meta: { title: '花旗集团 2026 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 1980 },
        nodes: {
          services: { label: '服务', notes: ['同比 +17%', '净利率 37%'] }, markets: { label: '市场', notes: ['同比 +19%', '净利率 36%'] }, banking: { label: '银行', notes: ['同比 +15%', '净利率 17%'] }, wealth: { label: '财富管理', notes: ['同比 +11%', '净利率 14%'] }, uspb: { label: '美国个人银行', notes: ['同比 +4%', '净利率 15%'] }, all_other: { label: '所有其他', notes: ['同比 +16%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] }, pretax_income: { label: '税前利润' }, operating_expenses: { label: ['非利息', '费用'] }, provision_for_credit_losses: { label: ['信用损失', '拨备'] }, net_income: { label: '净利润', notes: ['同比 +45%'] }, tax: { label: '税费' }, compensation_benefits: { label: ['薪酬', '与福利'] }, other_general_operating: { label: ['其他一般', '运营'] }, technology_communication: { label: ['技术与', '通信'] }, premises_equipment: { label: ['场地与', '设备'] }, marketing: { label: '营销' },
        },
        layout: { labels: zhLabels },
        annotationsSvg: annotations({ segment: '按业务分部', deposits: '存款', depositsValue: '1.45 万亿美元', depositsChange: '同比 +11%，环比 +2%', loans: '贷款', loansValue: '0.76 万亿美元', loansChange: '同比 +9%，环比 +3%', cet1: 'CET1 比率', cet1Change: '同比 (0.7 个百分点)' }),
      },
    },
  });
})();

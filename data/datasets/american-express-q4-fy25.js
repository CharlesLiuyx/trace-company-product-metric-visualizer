/* American Express Q4 FY25 income statement ($B), measured from the active Build source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#006ad5';
  const BLUE_LINK = '#85b4e4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT = 2473;
  const RIGHT_ZH = 2440;
  const TERMINAL = 2373;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const sourceLabel = (yoy, nameLines, margin, valueTop, labelTop) => ({
    blocks: [
      { x: 444, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 44, 400), line(yoy, 30, 400, NOTE)] },
      { x: 394, top: labelTop, anchor: 'end', lineGap: 12, lines: [...nameLines.map((text) => line(text, 40, 800, BLUE)), line(margin, 30, 400, NOTE)] },
    ],
  });

  const labels = {
    us_consumer_services: sourceLabel('+11% Y/Y', ['US Consumer', 'Services'], '17% pretax margin', 314, 406),
    commercial_services: sourceLabel('+7% Y/Y', ['Commercial', 'Services'], '19% pretax margin', 592, 668),
    international_card_services: sourceLabel('+17% Y/Y', ['International', 'Card Services'], '9% pretax margin', 783, 854),
    global_merchant_network: sourceLabel('+8% Y/Y', ['Global Merchant', '& Network Service'], '43% pretax margin', 957, 1028),
    amex_hub: { blocks: [] },
    revenue: { blocks: [{ x: 1378, top: 460, anchor: 'middle', lineGap: 16, lines: [line('Revenue', 40, 800, BLUE), line('(net of interest expenses)', 33, 800, BLUE), line('$value', 44, 400, BLUE), line('+10% Y/Y', 30, 400, NOTE)] }] },
    all_other: { blocks: [] },
    pretax_income: { blocks: [{ x: 1846, top: 426, anchor: 'middle', lineGap: 13, lines: [line('Pretax income', 40, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL)] }] },
    operating_expenses: { blocks: [{ x: 1846, top: 1072, anchor: 'middle', lineGap: 10, lines: [line('Noninterest', 40, 800, RED_LABEL), line('expenses', 40, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL)] }] },
    provision_for_credit_losses: { blocks: [{ x: 1846, top: 1274, anchor: 'middle', lineGap: 12, lines: [line('Provision for', 38, 800, RED_LABEL), line('credit losses', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)] }] },
    net_income: { blocks: [{ x: RIGHT, top: 338, anchor: 'middle', lineGap: 13, lines: [line('Net income', 40, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line('+13% Y/Y', 30, 400, NOTE)] }] },
    tax: { blocks: [{ x: RIGHT, top: 528, anchor: 'middle', lineGap: 12, lines: [line('Tax', 36, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)] }] },
    card_members_rewards: { blocks: [{ x: TERMINAL, top: 660, anchor: 'start', lineGap: 12, lines: [line('Card members', 34, 800, RED_LABEL), line('rewards ($4.8B)', 34, 800, RED_LABEL)] }] },
    business_development: { blocks: [{ x: TERMINAL, top: 771, anchor: 'start', lineGap: 12, lines: [line('Business', 34, 800, RED_LABEL), line('development', 34, 800, RED_LABEL), line('($1.7B)', 34, 400, RED_LABEL)] }] },
    card_member_services: { blocks: [{ x: TERMINAL, top: 922, anchor: 'start', lineGap: 12, lines: [line('Card Member', 34, 800, RED_LABEL), line('services ($2.0B)', 34, 800, RED_LABEL)] }] },
    marketing: { blocks: [{ x: TERMINAL, top: 1071, anchor: 'start', lineGap: 12, lines: [line('Marketing ($1.6B)', 34, 800, RED_LABEL)] }] },
    sales_employee_benefits: { blocks: [{ x: TERMINAL, top: 1210, anchor: 'start', lineGap: 12, lines: [line('Sales & employee', 34, 800, RED_LABEL), line('benefits ($2.5B)', 34, 400, RED_LABEL)] }] },
    other_general_operating: { blocks: [{ x: TERMINAL, top: 1298, anchor: 'start', lineGap: 12, lines: [line('Other general', 34, 800, RED_LABEL), line('operating ($1.9B)', 34, 800, RED_LABEL)] }] },
  };

  const zhSourceLabel = (yoy, nameLines, margin, valueTop, labelTop) => ({
    blocks: [
      { x: 444, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 44, 400), line(yoy, 30, 400, NOTE)] },
      { x: 394, top: labelTop, anchor: 'end', lineGap: 12, lines: [...nameLines.map((text) => line(text, 39, 800, BLUE)), line(margin, 29, 400, NOTE)] },
    ],
  });
  const zhLabels = {
    us_consumer_services: zhSourceLabel('同比 +11%', ['美国消费者', '服务'], '税前利润率 17%', 312, 408),
    commercial_services: zhSourceLabel('同比 +7%', ['商务', '服务'], '税前利润率 19%', 590, 669),
    international_card_services: zhSourceLabel('同比 +17%', ['国际', '卡服务'], '税前利润率 9%', 781, 850),
    global_merchant_network: zhSourceLabel('同比 +8%', ['全球商户与', '网络服务'], '税前利润率 43%', 955, 1020),
    amex_hub: { blocks: [] },
    revenue: { blocks: [{ x: 1378, top: 450, anchor: 'middle', lineGap: 15, lines: [line('收入', 40, 800, BLUE), line('（扣除利息支出后）', 29, 800, BLUE), line('$value', 44, 400, BLUE), line('同比 +10%', 30, 400, NOTE)] }] },
    all_other: { blocks: [] },
    pretax_income: { blocks: [{ x: 1846, top: 399, anchor: 'middle', lineGap: 13, lines: [line('税前利润', 40, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL)] }] },
    operating_expenses: { blocks: [{ x: 1846, top: 1065, anchor: 'middle', lineGap: 10, lines: [line('非利息', 40, 800, RED_LABEL), line('费用', 40, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL)] }] },
    provision_for_credit_losses: { blocks: [{ x: 1846, top: 1271, anchor: 'middle', lineGap: 12, lines: [line('信用损失', 38, 800, RED_LABEL), line('拨备', 38, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)] }] },
    net_income: { blocks: [{ x: RIGHT_ZH, top: 350, anchor: 'middle', lineGap: 13, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 44, 400, GREEN_LABEL), line('同比 +13%', 30, 400, NOTE)] }] },
    tax: { blocks: [{ x: RIGHT_ZH, top: 524, anchor: 'middle', lineGap: 12, lines: [line('税费', 36, 800, RED_LABEL), line('$value', 36, 400, RED_LABEL)] }] },
    card_members_rewards: { blocks: [{ x: RIGHT_ZH, top: 675, anchor: 'middle', lineGap: 12, lines: [line('持卡人奖励', 34, 800, RED_LABEL), line('($4.8B)', 34, 400, RED_LABEL)] }] },
    business_development: { blocks: [{ x: RIGHT_ZH, top: 776, anchor: 'middle', lineGap: 12, lines: [line('业务拓展', 34, 800, RED_LABEL), line('($1.7B)', 34, 400, RED_LABEL)] }] },
    card_member_services: { blocks: [{ x: RIGHT_ZH, top: 916, anchor: 'middle', lineGap: 12, lines: [line('持卡人服务', 34, 800, RED_LABEL), line('($2.0B)', 34, 400, RED_LABEL)] }] },
    marketing: { blocks: [{ x: RIGHT_ZH, top: 1064, anchor: 'middle', lineGap: 12, lines: [line('营销', 34, 800, RED_LABEL), line('($1.6B)', 34, 400, RED_LABEL)] }] },
    sales_employee_benefits: { blocks: [{ x: RIGHT_ZH, top: 1164, anchor: 'middle', lineGap: 12, lines: [line('销售与员工', 34, 800, RED_LABEL), line('福利 ($2.5B)', 34, 400, RED_LABEL)] }] },
    other_general_operating: { blocks: [{ x: RIGHT_ZH, top: 1293, anchor: 'middle', lineGap: 12, lines: [line('其他一般', 34, 800, RED_LABEL), line('运营 ($1.9B)', 34, 400, RED_LABEL)] }] },
  };

  const amexLogo = `
    <rect x="17" y="0" width="253" height="252" fill="${BLUE}"/>
    <text x="143.5" y="121" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="1" textLength="234" lengthAdjust="spacingAndGlyphs">AMERICAN</text>
    <text x="143.5" y="173" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="1" textLength="205" lengthAdjust="spacingAndGlyphs">EXPRESS</text>`;
  const kpiCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1195" width="${width}" height="148" rx="29" fill="${BLUE}"/>
      <text x="${x + width / 2}" y="1247" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1286" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1320" text-anchor="middle" font-size="22" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;
  const annotations = `
    <g>
      <text x="97" y="246" font-size="39" font-weight="800" fill="${TITLE}">By Business Segment</text>
      ${kpiCard(28, 172, 'Deposits', '$152B', '+9% Y/Y')}
      ${kpiCard(209, 329, 'Billed Business', '$445B', '+9% Y/Y')}
      ${kpiCard(547, 240, 'CET1 ratio', '10.5%', 'Flat Y/Y')}
      <text x="492" y="1410" font-size="28" font-weight="500" fill="${NOTE}">CET1 = Common Equity Tier 1</text>
    </g>`;
  const allOtherAnnotation = (title, note) => `
    <g class="sankey-interactive-annotation" data-node="all_other">
      <text x="1378" y="1164" text-anchor="middle" font-size="40" font-weight="800" fill="${RED_LABEL}">${title}</text>
      <text x="1378" y="1210" text-anchor="middle" font-size="36" font-weight="800" fill="${RED_LABEL}">${note}</text>
      <text x="1378" y="1259" text-anchor="middle" font-size="36" font-weight="400" fill="${RED_LABEL}">($0.1B)</text>
    </g>`;
  const annotationsWithAllOther = `${annotations}${allOtherAnnotation('All Other', '(noninterest loss)')}`;
  const zhAnnotations = `
    <g>
      <text x="97" y="246" font-size="39" font-weight="800" fill="${TITLE}">按业务分部</text>
      ${kpiCard(28, 172, '存款', '$152B', '同比 +9%')}
      ${kpiCard(209, 329, '计费业务额', '$445B', '同比 +9%')}
      ${kpiCard(547, 240, 'CET1 比率', '10.5%', '同比持平')}
      <text x="492" y="1410" font-size="28" font-weight="500" fill="${NOTE}">CET1 = 普通股一级资本</text>
    </g>${allOtherAnnotation('所有其他', '（非利息损失）')}`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'american-express-q4-fy25',
    name: 'American Express · Q4 FY25',
    company: 'American Express',
    meta: {
      company: 'American Express', title: 'American Express Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/american-express-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 214, titleSize: 132, titleWeight: 800, titleTextLength: 2486,
      hidePeriodStamp: true,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 279, logoHeight: 252, logoY: 246, logoViewBox: '0 0 279 252', logoSvg: amexLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG,
      // The review-approved minimum face makes the $0.1B adjustment readable
      // at responsive scale while the tapered link preserves its data width.
      interfaceAudit: { mode: 'error', fullFaceIds: ['all_other:left'] },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 44, note: 30, lineGap: 8 },
    },
    annotationsSvg: annotationsWithAllOther,
    nodes: [
      { id: 'us_consumer_services', label: ['US Consumer', 'Services'], value: 9.2, notes: ['+11% Y/Y', '17% pretax margin'], type: 'source', col: 0, order: 0 },
      { id: 'commercial_services', label: ['Commercial', 'Services'], value: 4.4, notes: ['+7% Y/Y', '19% pretax margin'], type: 'source', col: 0, order: 1 },
      { id: 'international_card_services', label: ['International', 'Card Services'], value: 3.5, notes: ['+17% Y/Y', '9% pretax margin'], type: 'source', col: 0, order: 2 },
      { id: 'global_merchant_network', label: ['Global Merchant', '& Network Service'], value: 2.0, valueText: '$2.0B', notes: ['+8% Y/Y', '43% pretax margin'], type: 'source', col: 0, order: 3 },
      { id: 'amex_hub', label: '', value: 19.1, type: 'hub', col: 1, order: 0 },
      { id: 'revenue', label: 'Revenue', value: 19.0, notes: ['+10% Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'all_other', label: 'All Other', value: 0.1, type: 'cost', col: 2, order: 1, labelColor: RED_LABEL },
      { id: 'pretax_income', label: 'Pretax income', value: 3.1, type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Noninterest', 'expenses'], value: 14.5, type: 'cost', col: 3, order: 1 },
      { id: 'provision_for_credit_losses', label: ['Provision for', 'credit losses'], value: 1.4, type: 'cost', col: 3, order: 2 },
      { id: 'net_income', label: 'Net income', value: 2.5, type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 0.6, type: 'cost', col: 4, order: 1 },
      { id: 'card_members_rewards', label: ['Card members', 'rewards'], value: 4.8, type: 'cost', col: 4, order: 2 },
      { id: 'business_development', label: ['Business', 'development'], value: 1.7, type: 'cost', col: 4, order: 3 },
      { id: 'card_member_services', label: ['Card Member', 'services'], value: 2.0, type: 'cost', col: 4, order: 4 },
      { id: 'marketing', label: 'Marketing', value: 1.6, type: 'cost', col: 4, order: 5 },
      { id: 'sales_employee_benefits', label: ['Sales & employee', 'benefits'], value: 2.5, type: 'cost', col: 4, order: 6 },
      { id: 'other_general_operating', label: ['Other general', 'operating'], value: 1.9, type: 'cost', col: 4, order: 7 },
    ],
    links: [
      { source: 'us_consumer_services', target: 'amex_hub', value: 9.2, targetOrder: 0 },
      { source: 'commercial_services', target: 'amex_hub', value: 4.4, targetOrder: 1 },
      { source: 'international_card_services', target: 'amex_hub', value: 3.5, targetOrder: 2 },
      { source: 'global_merchant_network', target: 'amex_hub', value: 2.0, targetOrder: 3 },
      { source: 'amex_hub', target: 'revenue', value: 19.0, sourceOrder: 0, targetOrder: 0 },
      // Preserve the $0.1B flow at the hub; taper its terminal end to the
      // minimum visible 12px adjustment bar rather than hiding the node.
      { source: 'amex_hub', target: 'all_other', value: 0.1, sourceOrder: 1, targetOrder: 0, targetWidth: 12 },
      { source: 'revenue', target: 'pretax_income', value: 3.1, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 14.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'provision_for_credit_losses', value: 1.4, sourceOrder: 2, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 2.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 0.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'card_members_rewards', value: 4.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'business_development', value: 1.7, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'card_member_services', value: 2.0, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 1.6, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_employee_benefits', value: 2.5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_general_operating', value: 1.9, sourceOrder: 5, targetOrder: 0 },
    ],
    layout: {
      scale: 13.6,
      nodes: {
        us_consumer_services: { x: 408, y: 414, width: 72, height: 126 }, commercial_services: { x: 408, y: 690, width: 72, height: 60 },
        international_card_services: { x: 408, y: 890, width: 72, height: 48 }, global_merchant_network: { x: 408, y: 1066, width: 72, height: 28 },
        amex_hub: { x: 875, y: 539, width: 72, height: 260 }, revenue: { x: 1342, y: 667, width: 72, height: 260 },
        all_other: { x: 1342, y: 1111, width: 72, height: 12 }, pretax_income: { x: 1810, y: 541, width: 72, height: 42 },
        operating_expenses: { x: 1810, y: 859, width: 72, height: 198 }, provision_for_credit_losses: { x: 1810, y: 1243, width: 72, height: 20 },
        net_income: { x: 2276, y: 391, width: 72, height: 34 }, tax: { x: 2276, y: 565, width: 72, height: 10 },
        card_members_rewards: { x: 2276, y: 670, width: 72, height: 66 }, business_development: { x: 2276, y: 823, width: 72, height: 24 },
        card_member_services: { x: 2276, y: 949, width: 72, height: 27 }, marketing: { x: 2276, y: 1081, width: 72, height: 22 },
        sales_employee_benefits: { x: 2276, y: 1211, width: 72, height: 34 }, other_general_operating: { x: 2276, y: 1334, width: 72, height: 26 },
      },
      labels,
    },
    i18n: {
      zh: {
        name: '美国运通 · 2025 财年第四季度',
        meta: { title: '美国运通 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2120 },
        nodes: {
          us_consumer_services: { label: ['美国消费者', '服务'], notes: ['同比 +11%', '税前利润率 17%'] }, commercial_services: { label: ['商务', '服务'], notes: ['同比 +7%', '税前利润率 19%'] },
          international_card_services: { label: ['国际', '卡服务'], notes: ['同比 +17%', '税前利润率 9%'] }, global_merchant_network: { label: ['全球商户与', '网络服务'], notes: ['同比 +8%', '税前利润率 43%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] }, all_other: { label: '所有其他' }, pretax_income: { label: '税前利润' }, operating_expenses: { label: ['非利息', '费用'] },
          provision_for_credit_losses: { label: ['信用损失', '拨备'] }, net_income: { label: '净利润', notes: ['同比 +13%'] }, tax: { label: '税费' },
          card_members_rewards: { label: '持卡人奖励' }, business_development: { label: '业务拓展' }, card_member_services: { label: '持卡人服务' }, marketing: { label: '营销' },
          sales_employee_benefits: { label: ['销售与员工', '福利'] }, other_general_operating: { label: ['其他一般', '运营'] },
        },
        layout: { labels: zhLabels },
        annotationsSvg: zhAnnotations,
      },
    },
  });
})();

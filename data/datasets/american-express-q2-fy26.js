/* American Express Q2 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
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

  const amexLogo = [
    `<rect x="26" y="0" width="253" height="252" fill="${BLUE}"/>`,
    '<text x="152.5" y="121" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="1" textLength="234" lengthAdjust="spacingAndGlyphs">AMERICAN</text>',
    '<text x="152.5" y="173" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="1" textLength="205" lengthAdjust="spacingAndGlyphs">EXPRESS</text>',
  ].join('');

  const kpiCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1195" width="${width}" height="148" rx="29" fill="${BLUE}"/>
      <text x="${x + width / 2}" y="1247" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1286" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1320" text-anchor="middle" font-size="22" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="123" y="259" font-size="39" font-weight="800" fill="${TITLE}">${zh ? '按业务分部' : 'By Business Segment'}</text>
      ${kpiCard(28, 172, zh ? '存款' : 'Deposits', '$157B', zh ? '同比 +5%' : '+5% Y/Y')}
      ${kpiCard(209, 329, zh ? '签账金额' : 'Billed Business', '$456B', zh ? '同比 +10%' : '+10% Y/Y')}
      ${kpiCard(547, 240, `CET1 ${zh ? '比率' : 'ratio'}`, '10.4%', zh ? '同比 (0.2pp)' : '(0.2pp) Y/Y')}
      <text x="492" y="1383" font-size="28" font-weight="500" fill="${NOTE}">${zh ? 'CET1 = 普通股一级资本' : 'CET1 = Common Equity Tier 1'}</text>
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const labels = (zh) => ({
    us_consumer_services: { blocks: [
      block(436, 310, [line('$value', 44), line(zh ? '同比 +11%' : '+11% Y/Y', 30, 400, NOTE)]),
      block(374, 411, [line(zh ? '美国消费者' : 'US Consumer', 40, 800), line(zh ? '服务' : 'Services', 40, 800), line(zh ? '税前利润率 22%' : '22% pretax margin', 30, 400, NOTE)], 'end', 12),
    ] },
    commercial_services: { blocks: [
      block(436, 574, [line('$value', 44), line(zh ? '同比 +7%' : '+7% Y/Y', 30, 400, NOTE)]),
      block(374, 653, [line(zh ? '商务' : 'Commercial', 40, 800), line(zh ? '服务' : 'Services', 40, 800), line(zh ? '税前利润率 22%' : '22% pretax margin', 30, 400, NOTE)], 'end', 12),
    ] },
    international_card_services: { blocks: [
      block(436, 763, [line('$value', 44), line(zh ? '同比 +12%' : '+12% Y/Y', 30, 400, NOTE)]),
      block(374, 833, [line(zh ? '国际' : 'International', 40, 800), line(zh ? '卡服务' : 'Card Services', 40, 800), line(zh ? '税前利润率 13%' : '13% pretax margin', 30, 400, NOTE)], 'end', 12),
    ] },
    global_merchant_network: { blocks: [
      block(436, 935, [line('$value', 44), line(zh ? '同比 +8%' : '+8% Y/Y', 30, 400, NOTE)]),
      block(374, 1028, [line(zh ? '全球商户' : 'Global Merchant', 40, 800), line(zh ? '与网络服务' : '& Network Service', 40, 800), line(zh ? '税前利润率 54%' : '54% pretax margin', 30, 400, NOTE)], 'end', 12),
    ] },
    amex_hub: { blocks: [] },
    revenue: { blocks: [block(1364, 436, [line(zh ? '收入' : 'Revenue', 40, 800), line(zh ? '（扣除利息支出后）' : '(net of interest expenses)', 33, 800), line('$value', 44), line(zh ? '同比 +10%' : '+10% Y/Y', 30, 400, NOTE)], 'middle', 4)] },
    all_other: { blocks: [block(1367, 1057, [line(zh ? '所有其他' : 'All Other', 40, 800), line(zh ? '（非利息亏损）' : '(noninterest loss)', 36, 800), line('$value', 36)], 'middle', 14)] },
    pretax_income: { blocks: [block(1838, 405, [line(zh ? '税前利润' : 'Pretax income', 40, 800), line('$value', 44)], 'middle', 13)] },
    operating_expenses: { blocks: [block(1838, 995, [line(zh ? '非利息' : 'Noninterest', 40, 800), line(zh ? '费用' : 'expenses', 40, 800), line('$value', 38)], 'middle', 10)] },
    provision_for_credit_losses: { blocks: [block(1838, 1214, [line(zh ? '信用损失' : 'Provision for', 38, 800), line(zh ? '拨备' : 'credit losses', 38, 800), line('$value', 36)], 'middle', 12)] },
    net_income: { blocks: [block(2473, 346, [line(zh ? '净利润' : 'Net income', 40, 800), line('$value', 44), line(zh ? '同比 +8%' : '+8% Y/Y', 30, 400, NOTE)], 'middle', 13)] },
    tax: { blocks: [block(2472, 490, [line(zh ? '税费' : 'Tax', 36, 800), line('$value', 36)], 'middle', 12)] },
    card_members_rewards: { blocks: [block(2478, 616, [line(zh ? '持卡人' : 'Card members', 34, 800), line(zh ? '奖励（$5.1B）' : 'rewards ($5.1B)', 34, 800)], 'middle', 12)] },
    business_development: { blocks: [block(2477, 715, [line(zh ? '业务' : 'Business', 34, 800), line(zh ? '拓展' : 'development', 34, 800), line('($1.8B)', 34)], 'middle', 12)] },
    card_member_services: { blocks: [block(2482, 860, [line(zh ? '持卡人' : 'Card Member', 34, 800), line(zh ? '服务（$1.9B）' : 'services ($1.9B)', 34, 800)], 'middle', 12)] },
    marketing: { blocks: [block(2489, 989, [line(zh ? '营销（$1.7B）' : 'Marketing ($1.7B)', 34, 800)], 'middle', 12)] },
    sales_employee_benefits: { blocks: [block(2486, 1084, [line(zh ? '销售与员工' : 'Sales & employee', 34, 800), line(zh ? '福利（$2.3B）' : 'benefits ($2.3B)', 34, 800)], 'middle', 12)] },
    other_general_operating: { blocks: [block(2483, 1201, [line(zh ? '其他一般' : 'Other general', 34, 800), line(zh ? '运营（$1.7B）' : 'operating ($1.7B)', 34, 800)], 'middle', 12)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'american-express-q2-fy26',
    name: 'American Express · Q2 FY26',
    company: 'American Express',
    meta: {
      company: 'American Express',
      title: 'American Express Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/american-express-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 192,
      titleSize: 79,
      titleWeight: 800,
      titleTextLength: 2486,
      hidePeriodStamp: true,
      logoWidth: 279,
      logoHeight: 252,
      logoY: 246,
      logoViewBox: '0 0 279 252',
      logoSvg: amexLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error', fullFaceIds: ['all_other:left'] },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 44, note: 30, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nodes: [
      { id: 'us_consumer_services', label: ['US Consumer', 'Services'], value: 9.5, notes: ['+11% Y/Y', '22% pretax margin'], type: 'source', col: 0, order: 0 },
      { id: 'commercial_services', label: ['Commercial', 'Services'], value: 4.5, notes: ['+7% Y/Y', '22% pretax margin'], type: 'source', col: 0, order: 1 },
      { id: 'international_card_services', label: ['International', 'Card Services'], value: 3.6, notes: ['+12% Y/Y', '13% pretax margin'], type: 'source', col: 0, order: 2 },
      { id: 'global_merchant_network', label: ['Global Merchant', '& Network Service'], value: 2.1, notes: ['+8% Y/Y', '54% pretax margin'], type: 'source', col: 0, order: 3 },
      { id: 'amex_hub', label: '', value: 19.7, type: 'hub', col: 1, order: 0 },
      { id: 'revenue', label: 'Revenue', value: 19.6, notes: ['+10% Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'all_other', label: 'All Other', value: -0.1, valueText: '($0.1B)', type: 'cost', col: 2, order: 1, color: RED_LINK, labelColor: RED_LABEL },
      { id: 'pretax_income', label: 'Pretax income', value: 4.1, type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Noninterest', 'expenses'], value: 14.5, type: 'cost', col: 3, order: 1 },
      { id: 'provision_for_credit_losses', label: ['Provision for', 'credit losses'], value: 1.1, type: 'cost', col: 3, order: 2 },
      { id: 'net_income', label: 'Net income', value: 3.1, notes: ['+8% Y/Y'], type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 1.0, valueText: '($1.0B)', type: 'cost', col: 4, order: 1 },
      { id: 'card_members_rewards', label: ['Card members', 'rewards'], value: 5.1, type: 'cost', col: 4, order: 2 },
      { id: 'business_development', label: ['Business', 'development'], value: 1.8, type: 'cost', col: 4, order: 3 },
      { id: 'card_member_services', label: ['Card Member', 'services'], value: 1.9, type: 'cost', col: 4, order: 4 },
      { id: 'marketing', label: 'Marketing', value: 1.7, type: 'cost', col: 4, order: 5 },
      { id: 'sales_employee_benefits', label: ['Sales & employee', 'benefits'], value: 2.3, type: 'cost', col: 4, order: 6 },
      { id: 'other_general_operating', label: ['Other general', 'operating'], value: 1.7, type: 'cost', col: 4, order: 7 },
    ],
    links: [
      { source: 'us_consumer_services', target: 'amex_hub', value: 9.5, width: 148, targetWidth: 148, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial_services', target: 'amex_hub', value: 4.5, width: 70, targetWidth: 70, sourceOrder: 0, targetOrder: 1 },
      { source: 'international_card_services', target: 'amex_hub', value: 3.6, width: 56, targetWidth: 56, sourceOrder: 0, targetOrder: 2 },
      { source: 'global_merchant_network', target: 'amex_hub', value: 2.1, width: 33, targetWidth: 33, sourceOrder: 0, targetOrder: 3 },
      { source: 'amex_hub', target: 'revenue', value: 19.6, width: 306, sourceWidth: 306, targetWidth: 306, sourceOrder: 0, targetOrder: 0 },
      { source: 'amex_hub', target: 'all_other', value: 0.1, width: 1, sourceWidth: 1, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'pretax_income', value: 4.1, width: 64, sourceWidth: 64, targetWidth: 64, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 14.5, width: 225, sourceWidth: 225, targetWidth: 226, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'provision_for_credit_losses', value: 1.1, width: 17, sourceWidth: 17, targetWidth: 17, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'pretax_income', target: 'net_income', value: 3.1, width: 48, sourceWidth: 48, targetWidth: 48, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'pretax_income', target: 'tax', value: 1.0, width: 16, sourceWidth: 16, targetWidth: 16, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'card_members_rewards', value: 5.1, width: 79, sourceWidth: 79, targetWidth: 80, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'business_development', value: 1.8, width: 28, sourceWidth: 28, targetWidth: 28, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'card_member_services', value: 1.9, width: 30, sourceWidth: 30, targetWidth: 30, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 1.7, width: 26, sourceWidth: 26, targetWidth: 27, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sales_employee_benefits', value: 2.3, width: 36, sourceWidth: 36, targetWidth: 36, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_general_operating', value: 1.7, width: 26, sourceWidth: 27, targetWidth: 27, sourceOrder: 5, targetOrder: 0, linkTint: RED_LINK },
    ],
    layout: {
      scale: 15.6,
      nodes: {
        us_consumer_services: { x: 401, y: 407, width: 71, height: 148 },
        commercial_services: { x: 401, y: 668, width: 71, height: 70 },
        international_card_services: { x: 401, y: 871, width: 71, height: 56 },
        global_merchant_network: { x: 401, y: 1066, width: 71, height: 33 },
        amex_hub: { x: 868, y: 523, width: 70, height: 307 },
        revenue: { x: 1335, y: 617, width: 71, height: 306 },
        all_other: { x: 1335, y: 1042, width: 71, height: 4 },
        pretax_income: { x: 1802, y: 520, width: 70, height: 64 },
        operating_expenses: { x: 1802, y: 760, width: 70, height: 226 },
        provision_for_credit_losses: { x: 1802, y: 1184, width: 70, height: 17 },
        net_income: { x: 2269, y: 402, width: 71, height: 48 },
        tax: { x: 2269, y: 528, width: 71, height: 16 },
        card_members_rewards: { x: 2269, y: 622, width: 71, height: 80 },
        business_development: { x: 2269, y: 761, width: 71, height: 28 },
        card_member_services: { x: 2269, y: 872, width: 71, height: 30 },
        marketing: { x: 2269, y: 997, width: 71, height: 27 },
        sales_employee_benefits: { x: 2269, y: 1107, width: 71, height: 36 },
        other_general_operating: { x: 2269, y: 1229, width: 71, height: 27 },
      },
      labels: labels(false),
    },
    i18n: {
      preservedAnnotationText: ['$157B', '$456B', '10.4%', 'CET1'],
      zh: {
        name: 'American Express · 2026 财年第二季度',
        meta: {
          title: 'American Express 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
        },
        annotationsSvg: annotations(true),
        nodes: {
          us_consumer_services: { label: ['美国消费者', '服务'], notes: ['同比 +11%', '税前利润率 22%'] },
          commercial_services: { label: ['商务', '服务'], notes: ['同比 +7%', '税前利润率 22%'] },
          international_card_services: { label: ['国际', '卡服务'], notes: ['同比 +12%', '税前利润率 13%'] },
          global_merchant_network: { label: ['全球商户', '与网络服务'], notes: ['同比 +8%', '税前利润率 54%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          all_other: { label: '所有其他（非利息亏损）' },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: ['非利息', '费用'] },
          provision_for_credit_losses: { label: ['信用损失', '拨备'] },
          net_income: { label: '净利润', notes: ['同比 +8%'] },
          tax: { label: '税费' },
          card_members_rewards: { label: ['持卡人', '奖励'] },
          business_development: { label: ['业务', '拓展'] },
          card_member_services: { label: ['持卡人', '服务'] },
          marketing: { label: '营销' },
          sales_employee_benefits: { label: ['销售与员工', '福利'] },
          other_general_operating: { label: ['其他一般', '运营'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

/* Shopify Q4 FY25 income statement reconstructed from its processed source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SHOP_GREEN = '#96bf48';
  const SHOP_DARK_GREEN = '#64943e';
  const SHOP_LOGO_GREEN = '#93bd46';
  const SHOP_LOGO_DARK_GREEN = '#5f8d3d';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const SOURCE_LINK = '#c9dba5';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BLACK = '#000000';
  const RIGHT_LABEL_X = 2425;

  const line = (text, size, options) => Object.assign({ text, size }, options || {});
  const block = (x, top, lines, options) => Object.assign({ x, top, anchor: 'middle', lineGap: 8, lines }, options || {});

  const shopifyBagLogo = `
    <g transform="translate(-14 8)">
      <path d="M68 33C71 10 88 -1 104 3C112 5 119 12 123 24C131 19 140 20 148 27C159 36 164 53 166 74L143 77C142 57 138 43 130 36C127 33 124 32 121 34C122 43 122 54 120 67L100 69C103 51 103 37 100 26C98 18 95 14 91 13C83 11 74 21 72 36L68 33Z" fill="${SHOP_LOGO_GREEN}"/>
      <path d="M55 68L153 82L175 291L84 322L17 270L55 68Z" fill="${SHOP_LOGO_GREEN}"/>
      <path d="M153 82L205 91L230 274L175 291L153 82Z" fill="${SHOP_LOGO_DARK_GREEN}"/>
      <path d="M113 128C96 119 75 122 63 137C50 154 52 179 68 192C80 202 97 206 108 215C119 224 117 239 105 247C91 257 70 253 53 242L44 274C63 287 91 292 114 282C142 270 151 238 134 216C124 203 109 197 96 191C82 185 77 175 82 165C88 154 104 154 123 164L113 128Z" fill="#ffffff"/>
    </g>`;

  const merchantCluster = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif" transform="translate(145 600)">
      <rect x="0" y="0" width="570" height="284" rx="142" fill="${SHOP_GREEN}" stroke="#59852e" stroke-width="4"/>
      <text x="43" y="170" font-size="62" font-style="italic" font-weight="800" fill="#ffffff">${labels.shopify}</text>
      <g font-size="34" font-style="italic" font-weight="500" fill="#ffffff">
        <text x="332" y="58">${labels.capital}</text><text x="332" y="94">${labels.appStore}</text>
        <text x="332" y="130">${labels.payments}</text><text x="332" y="166">${labels.fulfillment}</text>
        <text x="332" y="202">${labels.balance}</text><text x="332" y="238">${labels.markets}</text>
      </g>
    </g>`;
  const shopifyPlusWordmark = (text) => `<g font-family="Montserrat,Arial,sans-serif" transform="translate(78 1024)"><text x="0" y="0" font-size="45" font-style="italic" font-weight="900" fill="${BLACK}">${text}</text></g>`;
  const annotations = (labels) => `<g>${merchantCluster(labels)}${shopifyPlusWordmark(labels.shopifyPlus)}</g>`;
  const annotationsEn = annotations({ shopify: 'shopify', shopifyPlus: 'shopifyplus', capital: 'Capital', appStore: 'App Store', payments: 'Payments', fulfillment: 'Fulfillment', balance: 'Balance', markets: 'Markets' });
  const annotationsZh = annotations({ shopify: 'Shopify', shopifyPlus: 'Shopify Plus', capital: '资金', appStore: '应用商店', payments: '支付', fulfillment: '履约', balance: '余额', markets: '市场' });

  const labelsEn = {
    merchant_solutions: { blocks: [block(804, 394, [line('Merchant', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('+35% Y/Y', 29, { weight: 400, color: NOTE })])] },
    shopify_plus: { blocks: [block(431, 897, [line('$value', 39, { weight: 400 }), line('+17% Y/Y', 29, { weight: 400, color: NOTE })])] },
    other_subscription: { blocks: [block(431, 1068, [line('$value', 39, { weight: 400 }), line('+17% Y/Y', 29, { weight: 400, color: NOTE })]), block(285, 1172, [line('Other', 40, { weight: 800 })])] },
    subscription_solutions: { blocks: [block(813, 1192, [line('Subscription', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('+17% Y/Y', 29, { weight: 400, color: NOTE })])] },
    revenue: { blocks: [block(1178, 556, [line('Revenue', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('+31% Y/Y', 29, { weight: 400, color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1552, 359, [line('Gross', 40, { weight: 800 }), line('profit', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('46% margin', 29, { weight: 400, color: NOTE }), line('(2pp) Y/Y', 29, { weight: 400, color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1555, 1194, [line('Cost of', 37, { weight: 800 }), line('revenue', 37, { weight: 800 }), line('$value', 36, { weight: 400 })])] },
    operating_profit: { blocks: [block(1928, 272, [line('Operating', 40, { weight: 800 }), line('profit', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('17% margin', 29, { weight: 400, color: NOTE }), line('+1pp Y/Y', 29, { weight: 400, color: NOTE })])] },
    other: { blocks: [block(2186, 551, [line('Other', 31, { weight: 800 }), line('$value', 31, { weight: 400 })])] },
    net_profit: { blocks: [block(2451, 278, [line('Net', 40, { weight: 800 }), line('profit', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('16% margin', 29, { weight: 400, color: NOTE }), line('+10pp Y/Y', 29, { weight: 400, color: NOTE })])] },
    investments: { blocks: [block(2456, 618, [line('Investments', 31, { weight: 800 }), line('$value', 31, { weight: 400 })])] },
    operating_expenses: { blocks: [block(1924, 864, [line('Operating', 38, { weight: 800 }), line('expenses', 38, { weight: 800 }), line('$value', 38, { weight: 400 })])] },
    merchant_cost: { blocks: [block(1950, 1051, [line('Merchant', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('37% gross margin', 29, { weight: 400, color: NOTE })])] },
    subscription_cost: { blocks: [block(1948, 1228, [line('Subscription', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('81% gross margin', 29, { weight: 400, color: NOTE })])] },
    sm: { blocks: [block(2454, 738, [line('S&M', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('12% of revenue', 29, { weight: 400, color: NOTE }), line('(1pp) Y/Y', 29, { weight: 400, color: NOTE })])] },
    rnd: { blocks: [block(2454, 905, [line('R&D', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('11% of revenue', 29, { weight: 400, color: NOTE }), line('(2pp) Y/Y', 29, { weight: 400, color: NOTE })])] },
    ga: { blocks: [block(2454, 1073, [line('G&A', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('3% of revenue', 29, { weight: 400, color: NOTE }), line('(1pp) Y/Y', 29, { weight: 400, color: NOTE })])] },
    loan_losses: { blocks: [block(2454, 1236, [line('Loan losses', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('3% of revenue', 29, { weight: 400, color: NOTE }), line('+0pp Y/Y', 29, { weight: 400, color: NOTE })])] },
    tax: { blocks: [] },
  };
  const labelsZh = {
    merchant_solutions: { blocks: [block(804, 417, [line('商家', 40, { weight: 800 }), line('解决方案', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('同比 +35%', 29, { weight: 400, color: NOTE })])] },
    shopify_plus: { blocks: [block(431, 906, [line('$value', 39, { weight: 400 }), line('同比 +17%', 29, { weight: 400, color: NOTE })])] },
    other_subscription: { blocks: [block(431, 1077, [line('$value', 39, { weight: 400 }), line('同比 +17%', 29, { weight: 400, color: NOTE })]), block(250, 1182, [line('其他', 40, { weight: 800 })])] },
    subscription_solutions: { blocks: [block(804, 1217, [line('订阅', 40, { weight: 800 }), line('解决方案', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('同比 +17%', 29, { weight: 400, color: NOTE })])] },
    revenue: { blocks: [block(1178, 566, [line('收入', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('同比 +31%', 29, { weight: 400, color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1552, 418, [line('毛利润', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('利润率 46%', 29, { weight: 400, color: NOTE }), line('同比 (2 个百分点)', 29, { weight: 400, color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1552, 1222, [line('收入', 37, { weight: 800 }), line('成本', 37, { weight: 800 }), line('$value', 36, { weight: 400 })])] },
    operating_profit: { blocks: [block(1926, 330, [line('营业利润', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('利润率 17%', 29, { weight: 400, color: NOTE }), line('同比 +1 个百分点', 29, { weight: 400, color: NOTE })])] },
    other: { blocks: [block(2186, 559, [line('其他', 31, { weight: 800 }), line('$value', 31, { weight: 400 })])] },
    net_profit: { blocks: [block(2460, 336, [line('净利润', 40, { weight: 800 }), line('$value', 39, { weight: 400 }), line('利润率 16%', 29, { weight: 400, color: NOTE }), line('同比 +10 个百分点', 29, { weight: 400, color: NOTE })])] },
    investments: { blocks: [block(2456, 609, [line('投资', 31, { weight: 800 }), line('$value', 31, { weight: 400 })])] },
    operating_expenses: { blocks: [block(1926, 890, [line('营业', 38, { weight: 800 }), line('费用', 38, { weight: 800 }), line('$value', 38, { weight: 400 })])] },
    merchant_cost: { blocks: [block(1988, 1059, [line('商家', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('毛利率 37%', 29, { weight: 400, color: NOTE })])] },
    subscription_cost: { blocks: [block(1985, 1237, [line('订阅', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('毛利率 81%', 29, { weight: 400, color: NOTE })])] },
    sm: { blocks: [block(RIGHT_LABEL_X, 745, [line('销售与市场', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('占收入 12%', 29, { weight: 400, color: NOTE }), line('同比 (1 个百分点)', 29, { weight: 400, color: NOTE })], { anchor: 'start' })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 913, [line('研发', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('占收入 11%', 29, { weight: 400, color: NOTE }), line('同比 (2 个百分点)', 29, { weight: 400, color: NOTE })], { anchor: 'start' })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1087, [line('管理费用', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('占收入 3%', 29, { weight: 400, color: NOTE }), line('同比 (1 个百分点)', 29, { weight: 400, color: NOTE })], { anchor: 'start' })] },
    loan_losses: { blocks: [block(RIGHT_LABEL_X, 1248, [line('贷款损失', 31, { weight: 800 }), line('$value', 31, { weight: 400 }), line('占收入 3%', 29, { weight: 400, color: NOTE }), line('同比 +0 个百分点', 29, { weight: 400, color: NOTE })], { anchor: 'start' })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'shopify-q4-fy25', name: 'Shopify · Q4 FY25', company: 'Shopify',
    meta: {
      company: 'Shopify', title: 'Shopify Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$', unit: 'B', decimals: 1, referenceImage: { src: 'input/processed/shopify-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2195,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 355, logoHeight: 305, logoY: 215, logoViewBox: '0 0 240 330', logoSvg: shopifyBagLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: SHOP_GREEN, label: SHOP_GREEN }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 100,
      nodes: {
        merchant_solutions: { x: 769, y: 601, width: 70, height: 290 }, shopify_plus: { x: 395, y: 994, width: 71, height: 19 }, other_subscription: { x: 395, y: 1168, width: 71, height: 56 }, subscription_solutions: { x: 769, y: 1100, width: 70, height: 76 }, revenue: { x: 1143, y: 709, width: 70, height: 367 },
        gross_profit: { x: 1516, y: 606, width: 71, height: 168 }, cost_of_revenue: { x: 1516, y: 984, width: 71, height: 197 }, operating_profit: { x: 1890, y: 516, width: 71, height: 61 }, operating_expenses: { x: 1890, y: 746, width: 71, height: 105 }, other: { x: 2151, y: 525, width: 70, height: 9 }, net_profit: { x: 2263, y: 423, width: 71, height: 58 }, investments: { x: 2263, y: 654, width: 71, height: 12 }, merchant_cost: { x: 1753, y: 1028, width: 70, height: 182 }, subscription_cost: { x: 1753, y: 1275, width: 70, height: 13 }, sm: { x: 2263, y: 785, width: 71, height: 41 }, rnd: { x: 2263, y: 975, width: 71, height: 36 }, ga: { x: 2263, y: 1163, width: 71, height: 10 }, loan_losses: { x: 2263, y: 1329, width: 71, height: 9 }, tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'merchant_solutions', col: 0, order: 0, type: 'source', label: ['Merchant', 'Solutions'], value: 2.895, valueText: '$2.9B', notes: ['+35% Y/Y'], color: SHOP_GREEN, labelColor: SHOP_GREEN, linkTint: SOURCE_LINK },
      { id: 'shopify_plus', col: 0, order: 1, type: 'source', label: 'Shopify Plus', value: 0.221, valueText: '$0.2B', notes: ['+17% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'other_subscription', col: 0, order: 2, type: 'source', label: 'Other', value: 0.556, valueText: '$0.6B', notes: ['+17% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'subscription_solutions', col: 1, order: 0, type: 'source', label: ['Subscription', 'Solutions'], value: 0.777, valueText: '$0.8B', notes: ['+17% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 3.672, valueText: '$3.7B', notes: ['+31% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: ['Gross', 'profit'], value: 1.693, valueText: '$1.7B', notes: ['46% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.979, valueText: '($2.0B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 0.631, valueText: '$0.6B', notes: ['17% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.062, valueText: '($1.1B)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.112, valueText: '$0.1B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: ['Net', 'profit'], value: 0.594, valueText: '$0.6B', notes: ['16% margin', '+10pp Y/Y'] },
      { id: 'investments', col: 6, order: 1, type: 'cost', label: 'Investments', value: 0.149, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'merchant_cost', col: 5, order: 2, type: 'cost', label: 'Merchant', value: 1.831, valueText: '($1.8B)', notes: ['37% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'subscription_cost', col: 5, order: 3, type: 'cost', label: 'Subscription', value: 0.148, valueText: '($0.1B)', notes: ['81% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 0.433, valueText: '($0.4B)', notes: ['12% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 0.390, valueText: '($0.4B)', notes: ['11% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.125, valueText: '($0.1B)', notes: ['3% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'loan_losses', col: 6, order: 5, type: 'cost', label: 'Loan losses', value: 0.114, valueText: '($0.1B)', notes: ['3% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 7, order: 0, type: 'cost', label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent' },
    ],
    links: [
      { source: 'merchant_solutions', target: 'revenue', value: 2.895, width: 290, sourceOrder: 0, targetOrder: 0 },
      { source: 'shopify_plus', target: 'subscription_solutions', value: 0.221, width: 19, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_subscription', target: 'subscription_solutions', value: 0.556, width: 56, sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription_solutions', target: 'revenue', value: 0.777, width: 76, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1.693, width: 168, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.979, width: 199, sourceWidth: 199, targetWidth: 197, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.631, width: 61, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.062, width: 107, sourceWidth: 107, targetWidth: 105, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.482, width: 49, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 0.112, width: 9, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'investments', value: 0.149, width: 12, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'merchant_cost', value: 1.831, width: 182, sourceWidth: 182, targetWidth: 182, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'subscription_cost', value: 0.148, width: 15, sourceWidth: 15, targetWidth: 13, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.433, width: 43, sourceWidth: 43, targetWidth: 41, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.390, width: 39, sourceWidth: 39, targetWidth: 36, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.125, width: 12, sourceWidth: 12, targetWidth: 10, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'loan_losses', value: 0.114, width: 11, sourceWidth: 11, targetWidth: 9, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Shopify · 2025 财年第四季度',
        meta: { title: 'Shopify 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 31 日的季度', titleSize: 112, titleTextLength: 1860 },
        annotationsSvg: annotationsZh,
        nodes: {
          merchant_solutions: { label: '商家解决方案', notes: ['同比 +35%'] }, shopify_plus: { label: 'Shopify Plus 方案', notes: ['同比 +17%'] }, other_subscription: { label: '其他', notes: ['同比 +17%'] }, subscription_solutions: { label: '订阅解决方案', notes: ['同比 +17%'] }, revenue: { label: '收入', notes: ['同比 +31%'] }, gross_profit: { label: '毛利润', notes: ['利润率 46%', '同比 (2 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +1 个百分点'] }, operating_expenses: { label: '营业费用' }, other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 16%', '同比 +10 个百分点'] }, investments: { label: '投资' }, merchant_cost: { label: '商家', notes: ['毛利率 37%'] }, subscription_cost: { label: '订阅', notes: ['毛利率 81%'] }, sm: { label: '销售与市场', notes: ['占收入 12%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 11%', '同比 (2 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] }, loan_losses: { label: '贷款损失', notes: ['占收入 3%', '同比 +0 个百分点'] }, tax: { label: '税费' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

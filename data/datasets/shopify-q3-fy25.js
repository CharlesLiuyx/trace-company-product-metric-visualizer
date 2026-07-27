/* Shopify Q3 FY25 income statement reconstructed from its processed source. */
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
  const RIGHT_LABEL_X = 2410;

  const line = (text, size, options) => Object.assign({ text, size }, options || {});
  const block = (x, top, lines, options) =>
    Object.assign({ x, top, anchor: 'middle', lineGap: 8, lines }, options || {});

  const shopifyBagLogo = `
    <g transform="translate(8 8)">
      <path d="M68 33C71 10 88 -1 104 3C112 5 119 12 123 24C131 19 140 20 148 27C159 36 164 53 166 74L143 77C142 57 138 43 130 36C127 33 124 32 121 34C122 43 122 54 120 67L100 69C103 51 103 37 100 26C98 18 95 14 91 13C83 11 74 21 72 36L68 33Z" fill="${SHOP_LOGO_GREEN}"/>
      <path d="M55 68L153 82L175 291L84 322L17 270L55 68Z" fill="${SHOP_LOGO_GREEN}"/>
      <path d="M153 82L205 91L230 274L175 291L153 82Z" fill="${SHOP_LOGO_DARK_GREEN}"/>
      <path d="M113 128C96 119 75 122 63 137C50 154 52 179 68 192C80 202 97 206 108 215C119 224 117 239 105 247C91 257 70 253 53 242L44 274C63 287 91 292 114 282C142 270 151 238 134 216C124 203 109 197 96 191C82 185 77 175 82 165C88 154 104 154 123 164L113 128Z" fill="#ffffff"/>
    </g>`;

  const merchantCluster = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif" transform="translate(145 600)" data-typography-role="brand">
      <rect x="0" y="0" width="570" height="284" rx="142" fill="${SHOP_GREEN}" stroke="#59852e" stroke-width="4"/>
      <text x="43" y="170" font-size="62" font-style="italic" font-weight="800" fill="#ffffff">${labels.shopify}</text>
      <g font-size="34" font-style="italic" font-weight="500" fill="#ffffff">
        <text x="332" y="58">${labels.capital}</text>
        <text x="332" y="94">${labels.appStore}</text>
        <text x="332" y="130">${labels.payments}</text>
        <text x="332" y="166">${labels.fulfillment}</text>
        <text x="332" y="202">${labels.balance}</text>
        <text x="332" y="238">${labels.markets}</text>
      </g>
    </g>`;

  const shopifyPlusWordmark = (text, textX = 0) => `
    <g font-family="Montserrat,Arial,sans-serif" transform="translate(78 1038)" data-typography-role="brand">
      <text x="${textX}" y="0" font-size="45" font-style="italic" font-weight="900" fill="${BLACK}">${text}</text>
    </g>`;

  const annotations = (labels) =>
    `<g>${merchantCluster(labels)}${shopifyPlusWordmark(labels.shopifyPlus, labels.shopifyPlusX)}</g>`;
  const annotationsEn = annotations({
    shopify: 'shopify',
    shopifyPlus: 'shopifyplus',
    capital: 'Capital',
    appStore: 'App Store',
    payments: 'Payments',
    fulfillment: 'Fulfillment',
    balance: 'Balance',
    markets: 'Markets',
  });
  const annotationsZh = annotations({
    shopify: 'Shopify',
    shopifyPlus: 'Shopify Plus',
    capital: '资金',
    appStore: '应用商店',
    payments: '支付',
    fulfillment: '履约',
    balance: '余额',
    markets: '市场',
    shopifyPlusX: -18,
  });

  const labelsEn = {
    merchant_solutions: { blocks: [block(810, 410, [line('Merchant', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 }), line('$value', 39), line('+38% Y/Y', 29, { color: NOTE })])] },
    shopify_plus: { blocks: [block(434, 931, [line('$value', 39), line('+19% Y/Y', 29, { color: NOTE })])] },
    other_subscription: { blocks: [block(437, 1146, [line('$value', 39), line('+13% Y/Y', 29, { color: NOTE })]), block(289, 1245, [line('Other', 40, { weight: 800 })])] },
    subscription_solutions: { blocks: [block(812, 1201, [line('Subscription', 40, { weight: 800 }), line('Solutions', 40, { weight: 800 }), line('$value', 39), line('+15% Y/Y', 29, { color: NOTE })])] },
    revenue: { blocks: [block(1180, 560, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+32% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1550, 374, [line('Gross', 40, { weight: 800 }), line('profit', 40, { weight: 800 }), line('$value', 39), line('49% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1550, 1200, [line('Cost of', 37, { weight: 800 }), line('revenue', 37, { weight: 800 }), line('$value', 36)])] },
    operating_profit: { blocks: [block(1928, 270, [line('Operating', 40, { weight: 800 }), line('profit', 40, { weight: 800 }), line('$value', 39), line('12% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    net_profit: { blocks: [block(2450, 293, [line('Net', 40, { weight: 800 }), line('profit', 40, { weight: 800 }), line('$value', 39), line('9% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })])] },
    tax: { blocks: [block(2454, 524, [line('Tax', 31, { weight: 800 }), line('$value', 31)])] },
    other_expense: { blocks: [block(2454, 624, [line('Other', 31, { weight: 800 }), line('$value', 31)])] },
    operating_expenses: { blocks: [block(1924, 845, [line('Operating', 38, { weight: 800 }), line('expenses', 38, { weight: 800 }), line('$value', 38)])] },
    merchant_cost: { blocks: [block(1950, 1084, [line('Merchant', 31, { weight: 800 }), line('$value', 31), line('38% gross margin', 29, { color: NOTE })])] },
    subscription_cost: { blocks: [block(1948, 1245, [line('Subscription', 31, { weight: 800 }), line('$value', 31), line('82% gross margin', 29, { color: NOTE })])] },
    sm: { blocks: [block(2454, 738, [line('S&M', 31, { weight: 800 }), line('$value', 31), line('14% of revenue', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    rnd: { blocks: [block(2454, 909, [line('R&D', 31, { weight: 800 }), line('$value', 31), line('13% of revenue', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })])] },
    loan_losses: { blocks: [block(2454, 1070, [line('Loan losses', 31, { weight: 800 }), line('$value', 31), line('5% of revenue', 29, { color: NOTE }), line('+3pp Y/Y', 29, { color: NOTE })])] },
    ga: { blocks: [block(2445, 1226, [line('G&A', 31, { weight: 800 }), line('$value', 31), line('4% of revenue', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
  };

  const labelsZh = {
    merchant_solutions: { blocks: [block(810, 423, [line('商家', 40, { weight: 800 }), line('解决方案', 40, { weight: 800 }), line('$value', 39), line('同比 +38%', 29, { color: NOTE })])] },
    shopify_plus: { blocks: [block(434, 931, [line('$value', 39), line('同比 +19%', 29, { color: NOTE })])] },
    other_subscription: { blocks: [block(437, 1152, [line('$value', 39), line('同比 +13%', 29, { color: NOTE })]), block(270, 1251, [line('其他', 40, { weight: 800 })])] },
    subscription_solutions: { blocks: [block(812, 1216, [line('订阅', 40, { weight: 800 }), line('解决方案', 40, { weight: 800 }), line('$value', 39), line('同比 +15%', 29, { color: NOTE })])] },
    revenue: { blocks: [block(1180, 570, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +32%', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1550, 415, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 49%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })])] },
    cost_of_revenue: { blocks: [block(1550, 1228, [line('收入', 37, { weight: 800 }), line('成本', 37, { weight: 800 }), line('$value', 36)])] },
    operating_profit: { blocks: [block(1928, 320, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 12%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    net_profit: { blocks: [block(2450, 334, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 9%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })])] },
    tax: { blocks: [block(2454, 524, [line('税费', 31, { weight: 800 }), line('$value', 31)])] },
    other_expense: { blocks: [block(2454, 624, [line('其他', 31, { weight: 800 }), line('$value', 31)])] },
    operating_expenses: { blocks: [block(1924, 875, [line('营业', 38, { weight: 800 }), line('费用', 38, { weight: 800 }), line('$value', 38)])] },
    merchant_cost: { blocks: [block(1985, 1084, [line('商家', 31, { weight: 800 }), line('$value', 31), line('毛利率 38%', 29, { color: NOTE })])] },
    subscription_cost: { blocks: [block(1985, 1245, [line('订阅', 31, { weight: 800 }), line('$value', 31), line('毛利率 82%', 29, { color: NOTE })])] },
    sm: { blocks: [block(RIGHT_LABEL_X, 738, [line('销售与市场', 31, { weight: 800 }), line('$value', 31), line('占收入 14%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 882, [line('研发', 31, { weight: 800 }), line('$value', 31), line('占收入 13%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
    loan_losses: { blocks: [block(RIGHT_LABEL_X, 1042, [line('贷款损失', 31, { weight: 800 }), line('$value', 31), line('占收入 5%', 29, { color: NOTE }), line('同比 +3 个百分点', 29, { color: NOTE })], { anchor: 'start' })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1202, [line('管理费用', 31, { weight: 800 }), line('$value', 31), line('占收入 4%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'shopify-q3-fy25',
    name: 'Shopify · Q3 FY25',
    company: 'Shopify',
    meta: {
      company: 'Shopify',
      title: 'Shopify Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/shopify-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2195,
      hidePeriodStamp: true,
      logoWidth: 305,
      logoHeight: 325,
      logoY: 215,
      logoViewBox: '0 0 240 330',
      logoSvg: shopifyBagLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: SHOP_GREEN, label: SHOP_GREEN },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 0.121,
      nodes: {
        merchant_solutions: { x: 771, y: 607, width: 70, height: 260 },
        shopify_plus: { x: 397, y: 1027, width: 71, height: 21 },
        other_subscription: { x: 397, y: 1246, width: 71, height: 59 },
        subscription_solutions: { x: 771, y: 1099, width: 70, height: 83 },
        revenue: { x: 1145, y: 707, width: 70, height: 346 },
        gross_profit: { x: 1518, y: 604, width: 71, height: 168 },
        cost_of_revenue: { x: 1518, y: 1007, width: 71, height: 177 },
        operating_profit: { x: 1892, y: 499, width: 71, height: 40 },
        net_profit: { x: 2265, y: 392, width: 71, height: 30 },
        tax: { x: 2265, y: 544, width: 71, height: 3 },
        other_expense: { x: 2265, y: 643, width: 71, height: 3 },
        operating_expenses: { x: 1892, y: 699, width: 71, height: 127 },
        merchant_cost: { x: 1752, y: 1061, width: 70, height: 160 },
        subscription_cost: { x: 1755, y: 1312, width: 70, height: 14 },
        sm: { x: 2265, y: 755, width: 71, height: 48 },
        rnd: { x: 2265, y: 910, width: 71, height: 43 },
        loan_losses: { x: 2265, y: 1078, width: 71, height: 16 },
        ga: { x: 2265, y: 1230, width: 71, height: 12 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'merchant_solutions', col: 0, order: 0, type: 'source', label: ['Merchant', 'Solutions'], value: 2145, valueText: '$2,145M', notes: ['+38% Y/Y'], color: SHOP_GREEN, labelColor: SHOP_GREEN, linkTint: SOURCE_LINK },
      { id: 'shopify_plus', col: 0, order: 1, type: 'source', label: 'Shopify Plus', value: 196, valueText: '$196M', notes: ['+19% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'other_subscription', col: 0, order: 2, type: 'source', label: 'Other', value: 503, valueText: '$503M', notes: ['+13% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'subscription_solutions', col: 1, order: 0, type: 'source', label: ['Subscription', 'Solutions'], value: 699, valueText: '$699M', notes: ['+15% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 2844, valueText: '$2,844M', notes: ['+32% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: ['Gross', 'profit'], value: 1391, valueText: '$1,391M', notes: ['49% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1453, valueText: '($1,453M)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 343, valueText: '$343M', notes: ['12% margin', '(1pp) Y/Y'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: ['Net', 'profit'], value: 264, valueText: '$264M', notes: ['9% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 6, order: 0, type: 'cost', label: 'Tax', value: 44, valueText: '($44M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 6, order: 1, type: 'cost', label: 'Other', value: 35, valueText: '($35M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1048, valueText: '($1,048M)' },
      { id: 'merchant_cost', col: 5, order: 2, type: 'cost', label: 'Merchant', value: 1325, valueText: '($1,325M)', notes: ['38% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'subscription_cost', col: 5, order: 3, type: 'cost', label: 'Subscription', value: 128, valueText: '($128M)', notes: ['82% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 410, valueText: '($410M)', notes: ['14% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 375, valueText: '($375M)', notes: ['13% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'loan_losses', col: 6, order: 4, type: 'cost', label: 'Loan losses', value: 148, valueText: '($148M)', notes: ['5% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: 'G&A', value: 115, valueText: '($115M)', notes: ['4% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'merchant_solutions', target: 'revenue', value: 2145, sourceWidth: 260, targetWidth: 263, sourceOrder: 0, targetOrder: 0 },
      { source: 'shopify_plus', target: 'subscription_solutions', value: 196, sourceWidth: 21, targetWidth: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_subscription', target: 'subscription_solutions', value: 503, sourceWidth: 59, targetWidth: 62, sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription_solutions', target: 'revenue', value: 699, width: 83, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1391, width: 168, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1453, width: 177, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 343, width: 40, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1048, width: 127, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 264, sourceWidth: 33, targetWidth: 30, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 44, sourceWidth: 4, targetWidth: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 35, sourceWidth: 3, targetWidth: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'merchant_cost', value: 1325, sourceWidth: 162, targetWidth: 160, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'subscription_cost', value: 128, sourceWidth: 15, targetWidth: 14, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 410, sourceWidth: 50, targetWidth: 48, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 375, sourceWidth: 45, targetWidth: 43, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'loan_losses', value: 148, sourceWidth: 18, targetWidth: 16, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 115, sourceWidth: 14, targetWidth: 12, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Shopify · 2025 财年第三季度',
        meta: {
          title: 'Shopify 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          titleSize: 112,
          titleTextLength: 1860,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          merchant_solutions: { label: '商家解决方案', notes: ['同比 +38%'] },
          shopify_plus: { label: 'Shopify Plus 方案', notes: ['同比 +19%'] },
          other_subscription: { label: '其他', notes: ['同比 +13%'] },
          subscription_solutions: { label: '订阅解决方案', notes: ['同比 +15%'] },
          revenue: { label: '收入', notes: ['同比 +32%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 (1 个百分点)'] },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          operating_expenses: { label: '营业费用' },
          merchant_cost: { label: '商家', notes: ['毛利率 38%'] },
          subscription_cost: { label: '订阅', notes: ['毛利率 82%'] },
          sm: { label: '销售与市场', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] },
          loan_losses: { label: '贷款损失', notes: ['占收入 5%', '同比 +3 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

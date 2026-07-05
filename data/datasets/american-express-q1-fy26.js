/* ====================================================================
 *  American Express - Q1 FY26 income statement ($B)
 *  Reconstructed from input/processed/american-express-q1-fy26.png as a
 *  fixed d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#006ad5';
  const BLUE_LABEL = '#006ad5';
  const BLUE_LINK = '#85b4e4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  // AMERICAN EXPRESS "blue box" wordmark. The renderer centres the logo over
  // the hub node (cx 901); the box is drawn 13px right inside a padded viewBox
  // so its visual centre lands on the source box centre (cx 914).
  const amexLogo = `
    <rect x="26" y="0" width="253" height="252" fill="${BLUE}"/>
    <text x="152.5" y="121" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="1" textLength="234" lengthAdjust="spacingAndGlyphs">AMERICAN</text>
    <text x="152.5" y="173" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="1" textLength="205" lengthAdjust="spacingAndGlyphs">EXPRESS</text>`;

  const kpiCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1195" width="${width}" height="148" rx="29" fill="${BLUE}"/>
      <text x="${x + width / 2}" y="1247" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1286" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1320" text-anchor="middle" font-size="22" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="123" y="256" font-size="39" font-weight="800" fill="${TITLE}">By Business Segment</text>
      ${kpiCard(28, 172, 'Deposits', '$158B', '+8% Y/Y')}
      ${kpiCard(209, 329, 'Billed Business', '$428B', '+10% Y/Y')}
      ${kpiCard(547, 240, 'CET1 ratio', '10.5%', 'Flat Y/Y')}
      <text x="372" y="1410" font-size="28" font-weight="500" fill="${NOTE}">CET1 = Common Equity Tier 1</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'american-express-q1-fy26',
    name: 'American Express - Q1 FY26',
    company: 'American Express',
    meta: {
      company: 'American Express',
      title: 'American Express Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/american-express-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 214,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2486,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 44, note: 30, lineGap: 8 },
    },
    annotationsSvg: annotations,

    nodes: [
      { id: 'us_consumer_services', label: ['US Consumer', 'Services'], value: 9.1, notes: ['+11% Y/Y', '19% pretax margin'], type: 'source', col: 0, order: 0 },
      { id: 'commercial_services', label: ['Commercial', 'Services'], value: 4.3, notes: ['+7% Y/Y', '19% pretax margin'], type: 'source', col: 0, order: 1 },
      { id: 'international_card_services', label: ['International', 'Card Services'], value: 3.5, notes: ['+20% Y/Y', '22% pretax margin'], type: 'source', col: 0, order: 2 },
      { id: 'global_merchant_network', label: ['Global Merchant', '& Network Service'], value: 2.0, valueText: '$2.0B', notes: ['+10% Y/Y', '56% pretax margin'], type: 'source', col: 0, order: 3 },
      { id: 'amex_hub', label: '', value: 18.9, type: 'hub', col: 1, order: 0 },
      { id: 'revenue', label: 'Revenue', value: 18.9, notes: ['+11% Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'all_other', label: 'All Other', value: 0.1, type: 'cost', col: 2, order: 1, color: BG, labelColor: RED_LABEL },
      { id: 'pretax_income', label: 'Pretax income', value: 3.8, type: 'profit', col: 3, order: 0 },
      { id: 'operating_expenses', label: ['Noninterest', 'expenses'], value: 13.9, type: 'cost', col: 3, order: 1 },
      { id: 'provision_for_credit_losses', label: ['Provision for', 'credit losses'], value: 1.3, type: 'cost', col: 3, order: 2 },
      { id: 'net_income', label: 'Net income', value: 3.0, valueText: '$3.0B', notes: ['+10% Y/Y'], type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 0.8, type: 'cost', col: 4, order: 1 },
      { id: 'card_members_rewards', label: ['Card members', 'rewards'], value: 4.9, type: 'cost', col: 4, order: 2 },
      { id: 'business_development', label: ['Business', 'development'], value: 1.6, type: 'cost', col: 4, order: 3 },
      { id: 'card_member_services', label: ['Card Member', 'services'], value: 2.0, type: 'cost', col: 4, order: 4 },
      { id: 'marketing', label: 'Marketing', value: 1.5, type: 'cost', col: 4, order: 5 },
      { id: 'sales_employee_benefits', label: ['Sales & employee', 'benefits'], value: 2.5, type: 'cost', col: 4, order: 6 },
      { id: 'other_general_operating', label: ['Other general', 'operating'], value: 1.5, type: 'cost', col: 4, order: 7 },
    ],
    links: [
      { source: 'us_consumer_services', target: 'amex_hub', value: 9.1, targetOrder: 0 },
      { source: 'commercial_services', target: 'amex_hub', value: 4.3, targetOrder: 1 },
      { source: 'international_card_services', target: 'amex_hub', value: 3.5, targetOrder: 2 },
      { source: 'global_merchant_network', target: 'amex_hub', value: 2.0, targetOrder: 3 },
      { source: 'amex_hub', target: 'revenue', value: 18.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'amex_hub', target: 'all_other', value: 0.1, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'pretax_income', value: 3.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 13.9, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'provision_for_credit_losses', value: 1.3, sourceOrder: 2, targetOrder: 0 },
      { source: 'pretax_income', target: 'net_income', value: 3.0, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 0.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'card_members_rewards', value: 4.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'business_development', value: 1.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'card_member_services', value: 2.0, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 1.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_employee_benefits', value: 2.5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_general_operating', value: 1.5, sourceOrder: 5, targetOrder: 0 },
    ],
    layout: {
      scale: 15.6,
      nodes: {
        us_consumer_services: { x: 399, y: 408, width: 70, height: 142 },
        commercial_services: { x: 399, y: 686, width: 70, height: 67 },
        international_card_services: { x: 399, y: 877, width: 70, height: 55 },
        global_merchant_network: { x: 399, y: 1051, width: 70, height: 31 },
        amex_hub: { x: 866, y: 527, width: 70, height: 296 },
        revenue: { x: 1333, y: 653, width: 70, height: 295 },
        all_other: { x: 1360, y: 1056, width: 2, height: 3 },
        pretax_income: { x: 1800, y: 509, width: 70, height: 59 },
        operating_expenses: { x: 1800, y: 817, width: 70, height: 217 },
        provision_for_credit_losses: { x: 1800, y: 1210, width: 70, height: 20 },
        net_income: { x: 2267, y: 367, width: 71, height: 47 },
        tax: { x: 2267, y: 550, width: 71, height: 13 },
        card_members_rewards: { x: 2267, y: 681, width: 71, height: 76 },
        business_development: { x: 2267, y: 832, width: 71, height: 25 },
        card_member_services: { x: 2267, y: 945, width: 71, height: 31 },
        marketing: { x: 2267, y: 1072, width: 71, height: 23 },
        sales_employee_benefits: { x: 2267, y: 1189, width: 71, height: 39 },
        other_general_operating: { x: 2267, y: 1326, width: 71, height: 23 },
      },
      labels: {
        us_consumer_services: {
          blocks: [
            { x: 434, top: 312, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 44, weight: 400 }, { text: '+11% Y/Y', size: 30, weight: 400, color: NOTE }] },
            { x: 372, top: 402, anchor: 'end', lineGap: 12, lines: [{ text: 'US Consumer', size: 40, weight: 800 }, { text: 'Services', size: 40, weight: 800 }, { text: '19% pretax margin', size: 30, weight: 400, color: NOTE }] },
          ],
        },
        commercial_services: {
          blocks: [
            { x: 434, top: 590, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 44, weight: 400 }, { text: '+7% Y/Y', size: 30, weight: 400, color: NOTE }] },
            { x: 372, top: 660, anchor: 'end', lineGap: 12, lines: [{ text: 'Commercial', size: 40, weight: 800 }, { text: 'Services', size: 40, weight: 800 }, { text: '19% pretax margin', size: 30, weight: 400, color: NOTE }] },
          ],
        },
        international_card_services: {
          blocks: [
            { x: 434, top: 781, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 44, weight: 400 }, { text: '+20% Y/Y', size: 30, weight: 400, color: NOTE }] },
            { x: 372, top: 841, anchor: 'end', lineGap: 12, lines: [{ text: 'International', size: 40, weight: 800 }, { text: 'Card Services', size: 40, weight: 800 }, { text: '22% pretax margin', size: 30, weight: 400, color: NOTE }] },
          ],
        },
        global_merchant_network: {
          blocks: [
            { x: 434, top: 955, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 44, weight: 400 }, { text: '+10% Y/Y', size: 30, weight: 400, color: NOTE }] },
            { x: 372, top: 1012, anchor: 'end', lineGap: 12, lines: [{ text: 'Global Merchant', size: 40, weight: 800 }, { text: '& Network Service', size: 40, weight: 800 }, { text: '56% pretax margin', size: 30, weight: 400, color: NOTE }] },
          ],
        },
        amex_hub: { blocks: [] },
        revenue: {
          blocks: [
            { x: 1361, top: 444, anchor: 'middle', lineGap: 16, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '(net of interest expenses)', size: 33, weight: 800 }, { text: '$value', size: 44, weight: 400 }, { text: '+11% Y/Y', size: 30, weight: 400, color: NOTE }] },
          ],
        },
        all_other: {
          blocks: [
            { x: 1361, top: 1090, anchor: 'middle', lineGap: 14, lines: [{ text: 'All Other', size: 40, weight: 800 }, { text: '(noninterest loss)', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }] },
          ],
        },
        pretax_income: {
          blocks: [
            { x: 1838, top: 394, anchor: 'middle', lineGap: 13, lines: [{ text: 'Pretax income', size: 40, weight: 800 }, { text: '$value', size: 44, weight: 400 }] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1838, top: 1045, anchor: 'middle', lineGap: 10, lines: [{ text: 'Noninterest', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }] },
          ],
        },
        provision_for_credit_losses: {
          blocks: [
            { x: 1838, top: 1247, anchor: 'middle', lineGap: 12, lines: [{ text: 'Provision for', size: 38, weight: 800 }, { text: 'credit losses', size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 }] },
          ],
        },
        net_income: {
          blocks: [
            { x: 2473, top: 350, anchor: 'middle', lineGap: 13, lines: [{ text: 'Net income', size: 40, weight: 800 }, { text: '$value', size: 44, weight: 400 }, { text: '+10% Y/Y', size: 30, weight: 400, color: NOTE }] },
          ],
        },
        tax: {
          blocks: [
            { x: 2472, top: 524, anchor: 'middle', lineGap: 12, lines: [{ text: 'Tax', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }] },
          ],
        },
        card_members_rewards: {
          blocks: [
            { x: 2499, top: 675, anchor: 'middle', lineGap: 12, lines: [{ text: 'Card members', size: 34, weight: 800 }, { text: 'rewards ($4.9B)', size: 34, weight: 800 }] },
          ],
        },
        business_development: {
          blocks: [
            { x: 2504, top: 776, anchor: 'middle', lineGap: 12, lines: [{ text: 'Business', size: 34, weight: 800 }, { text: 'development', size: 34, weight: 800 }, { text: '($1.6B)', size: 34, weight: 400 }] },
          ],
        },
        card_member_services: {
          blocks: [
            { x: 2508, top: 916, anchor: 'middle', lineGap: 12, lines: [{ text: 'Card Member', size: 34, weight: 800 }, { text: 'services ($2.0B)', size: 34, weight: 800 }] },
          ],
        },
        marketing: {
          blocks: [
            { x: 2510, top: 1064, anchor: 'middle', lineGap: 12, lines: [{ text: 'Marketing ($1.5B)', size: 34, weight: 800 }] },
          ],
        },
        sales_employee_benefits: {
          blocks: [
            { x: 2505, top: 1164, anchor: 'middle', lineGap: 12, lines: [{ text: 'Sales & employee', size: 34, weight: 800 }, { text: 'benefits ($2.5B)', size: 34, weight: 800 }] },
          ],
        },
        other_general_operating: {
          blocks: [
            { x: 2505, top: 1293, anchor: 'middle', lineGap: 12, lines: [{ text: 'Other general', size: 34, weight: 800 }, { text: 'operating ($1.5B)', size: 34, weight: 800 }] },
          ],
        },
      },
    },

    i18n: {
      zh: {
        name: 'American Express · 2026 财年第一季度',
        meta: {
          title: 'American Express 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        nodes: {
          us_consumer_services: { label: ['美国消费者', '服务'], notes: ['同比 +11%', '税前利润率 19%'] },
          commercial_services: { label: ['商业', '服务'], notes: ['同比 +7%', '税前利润率 19%'] },
          international_card_services: { label: ['国际', '卡服务'], notes: ['同比 +20%', '税前利润率 22%'] },
          global_merchant_network: { label: ['全球商户', '与网络服务'], notes: ['同比 +10%', '税前利润率 56%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          all_other: { label: '所有其他' },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: ['非利息', '费用'] },
          provision_for_credit_losses: { label: ['信用损失', '拨备'] },
          net_income: { label: '净利润', notes: ['同比 +10%'] },
          tax: { label: '税费' },
          card_members_rewards: { label: ['持卡人', '奖励'] },
          business_development: { label: ['业务', '拓展'] },
          card_member_services: { label: ['持卡人', '服务'] },
          marketing: { label: '营销' },
          sales_employee_benefits: { label: ['销售与', '员工福利'] },
          other_general_operating: { label: ['其他一般', '运营'] },
        },
      },
    },
  });
})();

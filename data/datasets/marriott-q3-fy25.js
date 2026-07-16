/* Marriott — Q3 FY25 income statement ($B). Fixed, source-measured Sankey. */
(function () {
  const TITLE = '#155077';
  const GREY = '#988d87';
  const GREY_LABEL = '#988d87';
  const GREY_LINK = '#c9c4c1';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BLACK = '#000000';

  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });

  const marriottLogo = `
    <g fill="${BLACK}" data-typography-role="brand">
      <text x="1038" y="345" font-family="Arial Black,Montserrat,Arial,sans-serif" font-size="145" font-weight="900" letter-spacing="-7">Marriott</text>
      <text x="1139" y="407" font-family="Montserrat,Arial,sans-serif" font-size="43" font-weight="800" letter-spacing="8" textLength="500" lengthAdjust="spacingAndGlyphs">INTERNATIONAL</text>
    </g>`;
  const statsCard = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="24" fill="${BLACK}"/>
      ${lines.map((entry, index) => `<text x="${x + width / 2}" y="${y + 48 + index * 37}" text-anchor="middle" font-size="${entry.size}" font-weight="${entry.weight}" fill="#ffffff">${entry.text}</text>`).join('')}
    </g>`;
  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${marriottLogo}
      ${statsCard(98, 1164, 305, [
        { text: 'Comparable', size: 27, weight: 800 },
        { text: 'Systemwide RevPAR', size: 26, weight: 800 },
        { text: '+0.5% Y/Y', size: 24, weight: 400 },
      ])}
      ${statsCard(416, 1164, 330, [
        { text: '9,463 properties', size: 27, weight: 800 },
        { text: '1.719M rooms', size: 27, weight: 800 },
      ])}
      <text x="357" y="1344" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">RevPAR = Revenue Per Available Room</text>
    </g>`;
  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${marriottLogo}
      ${statsCard(98, 1164, 305, [
        { text: '可比', size: 27, weight: 800 },
        { text: '全系统 RevPAR', size: 25, weight: 800 },
        { text: '同比 +0.5%', size: 24, weight: 400 },
      ])}
      ${statsCard(416, 1164, 330, [
        { text: '9,463 处物业', size: 27, weight: 800 },
        { text: '171.9 万间客房', size: 27, weight: 800 },
      ])}
      <text x="357" y="1344" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">RevPAR = 每间可售客房收入</text>
    </g>`;

  const labels = {
    base_management_fees: { blocks: [block(405, 296, 'middle', [line('$value', 40, 400), line('+1% Y/Y', 29, 400, NOTE)], 10), block(218, 327.5, 'middle', [line('Base', 40, 800), line('management', 40, 800), line('fees', 40, 800)], 13)] },
    franchise_fees: { blocks: [block(405, 430, 'middle', [line('$value', 40, 400), line('+8% Y/Y', 29, 400, NOTE)], 10), block(200, 497, 'middle', [line('Franchise', 40, 800), line('fees', 40, 800)], 13)] },
    incentive_management_fees: { blocks: [block(405, 585, 'middle', [line('$value', 40, 400), line('(7%) Y/Y', 29, 400, NOTE)], 10), block(202, 612, 'middle', [line('Incentive', 40, 800), line('management', 40, 800), line('fees', 40, 800)], 13)] },
    gross_fee_revenue: { blocks: [block(873, 313, 'middle', [line('Gross fee', 40, 800), line('Revenue', 40, 800)], 13), block(873, 420, 'middle', [line('$value', 40, 400), line('+4% Y/Y', 29, 400, NOTE)], 10)] },
    contract_investment_amortization: { blocks: [block(1110, 419, 'middle', [line('Amortization', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    owned_leased_and_other_revenue: { blocks: [block(852, 619, 'middle', [line('$value', 40, 400), line('+10% Y/Y', 29, 400, NOTE)], 10), block(675, 650, 'middle', [line('Owned,', 40, 800), line('leased', 40, 800), line('and other', 40, 800)], 13)] },
    cost_reimbursement: { blocks: [block(866, 774, 'middle', [line('$value', 40, 400), line('+3% Y/Y', 29, 400, NOTE)], 10), block(670, 931, 'middle', [line('Cost', 40, 800), line('reimbursement', 40, 800)], 13)] },
    revenue: { blocks: [block(1340, 511, 'middle', [line('Revenue', 40, 800), line('$value', 40, 400), line('+4% Y/Y', 29, 400, NOTE)], 10)] },
    gross_profit: { blocks: [] },
    operating_profit: { blocks: [block(1804, 329, 'middle', [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('18% margin', 29, 400, NOTE), line('+3pp Y/Y', 29, 400, NOTE)], 10)] },
    operating_expenses: { blocks: [block(1806, 1094, 'middle', [line('Operating', 39, 800, RED_LABEL), line('expenses', 39, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL)])] },
    net_profit: { blocks: [block(2380, 321, 'start', [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('11% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)], 10)] },
    tax: { blocks: [block(2475, 550, 'middle', [line('Tax', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    other_nonoperating: { blocks: [block(2475, 657, 'middle', [line('Other', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    owned_leased_other_direct_costs: { blocks: [block(2348, 778, 'start', [line('Owned, lease and', 31, 800, RED_LABEL), line('other direct costs', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    ga: { blocks: [block(2465, 927, 'middle', [line('G&A ($0.2B)', 31, 800, RED_LABEL)])] },
    da: { blocks: [block(2464, 1047, 'middle', [line('D&A ($10M)', 31, 800, RED_LABEL)])] },
    reimbursed_expenses: { blocks: [block(2472, 1219, 'middle', [line('Reimbursed', 31, 800, RED_LABEL), line('expenses', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
  };
  const labelsZh = {
    base_management_fees: { blocks: [block(405, 296, 'middle', [line('$value', 40, 400), line('同比 +1%', 29, 400, NOTE)], 10), block(218, 346, 'middle', [line('基础', 40, 800), line('管理费', 40, 800)], 13)] },
    franchise_fees: { blocks: [block(405, 430, 'middle', [line('$value', 40, 400), line('同比 +8%', 29, 400, NOTE)], 10), block(200, 524, 'middle', [line('特许经营费', 40, 800)])] },
    incentive_management_fees: { blocks: [block(405, 585, 'middle', [line('$value', 40, 400), line('同比 (7%)', 29, 400, NOTE)], 10), block(202, 640, 'middle', [line('激励', 40, 800), line('管理费', 40, 800)], 13)] },
    gross_fee_revenue: { blocks: [block(873, 337, 'middle', [line('总费用收入', 40, 800)]), block(873, 420, 'middle', [line('$value', 40, 400), line('同比 +4%', 29, 400, NOTE)], 10)] },
    contract_investment_amortization: { blocks: [block(1110, 419, 'middle', [line('摊销', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    owned_leased_and_other_revenue: { blocks: [block(852, 619, 'middle', [line('$value', 40, 400), line('同比 +10%', 29, 400, NOTE)], 10), block(675, 676, 'middle', [line('自有、租赁', 40, 800), line('及其他', 40, 800)], 13)] },
    cost_reimbursement: { blocks: [block(866, 774, 'middle', [line('$value', 40, 400), line('同比 +3%', 29, 400, NOTE)], 10), block(670, 958, 'middle', [line('成本报销', 40, 800)])] },
    revenue: { blocks: [block(1340, 511, 'middle', [line('收入', 40, 800), line('$value', 40, 400), line('同比 +4%', 29, 400, NOTE)], 10)] },
    gross_profit: { blocks: [] },
    operating_profit: { blocks: [block(1804, 329, 'middle', [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 18%', 29, 400, NOTE), line('同比 +3 个百分点', 29, 400, NOTE)], 10)] },
    operating_expenses: { blocks: [block(1806, 1121, 'middle', [line('运营费用', 39, 800, RED_LABEL), line('$value', 38, 400, RED_LABEL)])] },
    net_profit: { blocks: [block(2380, 321, 'start', [line('净利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 11%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)], 10)] },
    tax: { blocks: [block(2475, 550, 'middle', [line('税费', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    other_nonoperating: { blocks: [block(2475, 657, 'middle', [line('其他', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    owned_leased_other_direct_costs: { blocks: [block(2348, 778, 'start', [line('自有、租赁及', 31, 800, RED_LABEL), line('其他直接成本', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
    ga: { blocks: [block(2465, 927, 'middle', [line('管理费用 ($0.2B)', 31, 800, RED_LABEL)])] },
    da: { blocks: [block(2464, 1047, 'middle', [line('折旧摊销 ($10M)', 31, 800, RED_LABEL)])] },
    reimbursed_expenses: { blocks: [block(2472, 1219, 'middle', [line('报销费用', 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'marriott-q3-fy25',
    name: 'Marriott · Q3 FY25',
    company: 'Marriott',
    meta: {
      company: 'Marriott',
      title: 'Marriott Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/marriott-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2246,
      hidePeriodStamp: true,
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
        source: { node: GREY, label: GREY_LABEL },
        hub: { node: GREY, label: GREY_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 44,
      nodes: {
        base_management_fees: { x: 368, y: 394, width: 73, height: 14 },
        franchise_fees: { x: 368, y: 528, width: 73, height: 39 },
        incentive_management_fees: { x: 368, y: 684, width: 73, height: 7 },
        gross_fee_revenue: { x: 835, y: 516, width: 72, height: 59 },
        contract_investment_amortization: { x: 1074, y: 507, width: 72, height: 3 },
        owned_leased_and_other_revenue: { x: 835, y: 715, width: 73, height: 19 },
        cost_reimbursement: { x: 835, y: 874, width: 72, height: 211 },
        revenue: { x: 1302, y: 659, width: 73, height: 288 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        operating_profit: { x: 1770, y: 516, width: 72, height: 52 },
        operating_expenses: { x: 1770, y: 847, width: 72, height: 236 },
        net_profit: { x: 2236, y: 358, width: 73, height: 32 },
        tax: { x: 2236, y: 586, width: 73, height: 12 },
        other_nonoperating: { x: 2236, y: 692, width: 73, height: 8 },
        owned_leased_other_direct_costs: { x: 2236, y: 804, width: 73, height: 15 },
        ga: { x: 2236, y: 938, width: 73, height: 11 },
        da: { x: 2236, y: 1065, width: 73, height: 1 },
        reimbursed_expenses: { x: 2236, y: 1171, width: 73, height: 211 },
      },
      labels,
    },
    nodes: [
      { id: 'base_management_fees', col: 0, order: 0, type: 'source', label: ['Base', 'management fees'], value: 0.314, notes: ['+1% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'franchise_fees', col: 0, order: 1, type: 'source', label: 'Franchise fees', value: 0.876, notes: ['+8% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'incentive_management_fees', col: 0, order: 2, type: 'source', label: ['Incentive', 'management fees'], value: 0.148, notes: ['(7%) Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'gross_fee_revenue', col: 1, order: 0, type: 'hub', label: ['Gross fee', 'Revenue'], value: 1.338, notes: ['+4% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'contract_investment_amortization', col: 2, order: 0, type: 'cost', label: 'Amortization', value: 0.029, valueText: '($29M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'owned_leased_and_other_revenue', col: 1, order: 1, type: 'source', label: ['Owned, leased', 'and other'], value: 0.420, notes: ['+10% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'cost_reimbursement', col: 1, order: 2, type: 'source', label: ['Cost', 'reimbursement'], value: 4.760, notes: ['+3% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 6.489, notes: ['+4% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: '', value: 6.489, color: 'transparent', labelColor: 'transparent', linkTint: 'transparent' },
      { id: 'operating_profit', col: 4, order: 1, type: 'profit', label: 'Operating profit', value: 1.180, notes: ['18% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 5.309, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.728, notes: ['11% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.266, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_nonoperating', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.186, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'owned_leased_other_direct_costs', col: 5, order: 3, type: 'cost', label: ['Owned, lease and', 'other direct costs'], value: 0.326, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.234, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 5, type: 'cost', label: 'D&A', value: 0.010, valueText: '($10M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'reimbursed_expenses', col: 5, order: 6, type: 'cost', label: ['Reimbursed', 'expenses'], value: 4.739, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'base_management_fees', target: 'gross_fee_revenue', value: 0.314, width: 14, targetOrder: 0 },
      { source: 'franchise_fees', target: 'gross_fee_revenue', value: 0.876, width: 39, targetOrder: 1 },
      { source: 'incentive_management_fees', target: 'gross_fee_revenue', value: 0.148, width: 6, targetOrder: 2 },
      { source: 'gross_fee_revenue', target: 'contract_investment_amortization', value: 0.029, width: 1, sourceOrder: 0, y0: 516, y1: 508, curve: { c1x: 960, c1y: 516, c2x: 1045, c2y: 508 } },
      { source: 'gross_fee_revenue', target: 'revenue', value: 1.309, width: 58, sourceOrder: 1, targetOrder: 0 },
      { source: 'owned_leased_and_other_revenue', target: 'revenue', value: 0.420, width: 19, targetOrder: 1 },
      { source: 'cost_reimbursement', target: 'revenue', value: 4.760, width: 211, targetOrder: 2 },
      { source: 'revenue', target: 'operating_profit', value: 1.180, width: 52, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 5.309, width: 236, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.728, width: 32, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.266, width: 12, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.186, width: 8, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'owned_leased_other_direct_costs', value: 0.326, width: 14, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.234, width: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.010, width: 1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'reimbursed_expenses', value: 4.739, width: 211, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Marriott · 2025 财年第三季度',
        meta: { title: 'Marriott 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月 30 日的季度' },
        annotationsSvg: annotationsZh,
        nodes: {
          base_management_fees: { label: '基础管理费', notes: ['同比 +1%'] },
          franchise_fees: { label: '特许经营费', notes: ['同比 +8%'] },
          incentive_management_fees: { label: '激励管理费', notes: ['同比 (7%)'] },
          gross_fee_revenue: { label: '总费用收入', notes: ['同比 +4%'] },
          contract_investment_amortization: { label: '摊销' },
          owned_leased_and_other_revenue: { label: '自有、租赁及其他', notes: ['同比 +10%'] },
          cost_reimbursement: { label: '成本报销', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润' },
          operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          other_nonoperating: { label: '其他' },
          owned_leased_other_direct_costs: { label: '自有、租赁及其他直接成本' },
          ga: { label: '管理费用' },
          da: { label: '折旧与摊销' },
          reimbursed_expenses: { label: '报销费用' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

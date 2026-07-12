/* FedEx — Q4 FY26 income statement ($B).
 * Reconstructed from input/processed/fedex-q4-fy26.png. The source is a
 * direct revenue-to-operating-expenses waterfall: it does not depict a
 * gross-profit/cost-of-revenue stage. */
(function () {
  const TITLE = '#155077';
  const PURPLE = '#4d168e';
  const PURPLE_LINK = '#a58dca';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9dce9b';
  const RED = '#d40000';
  const RED_LABEL = '#9d1808';
  const RED_LINK = '#df8585';
  const NOTE = '#666666';

  const fedexWordmark = (x, y, size, suffix = '') => `
    <g data-typography-role="brand" font-family="Arial Black,Arial,sans-serif" font-weight="900" letter-spacing="-7">
      <text x="${x}" y="${y}" font-size="${size}" fill="${PURPLE}">Fed</text>
      <text x="${x + size * 1.78}" y="${y}" font-size="${size}" fill="#ff6200">Ex</text>
      ${suffix ? `<text x="${x + size * 3.05}" y="${y}" font-size="${Math.round(size * 0.32)}" font-family="Georgia,serif" font-weight="400" letter-spacing="0" fill="${PURPLE}">${suffix}</text>` : ''}
    </g>`;

  const annotations = `
    ${fedexWordmark(750, 440, 190)}
    ${fedexWordmark(85, 655, 62, 'Express')}
    ${fedexWordmark(86, 972, 62, 'Freight')}`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'fedex-q4-fy26',
    name: 'FedEx · Q4 FY26',
    company: 'FedEx',
    meta: {
      company: 'FedEx',
      title: 'FedEx Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/fedex-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1335,
      titleY: 200,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: 177,
      periodY: 342,
      periodNoteY: 385,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
      type: { name: 34, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      nodes: {
        express: { x: 350, y: 535, width: 73, height: 279 },
        freight: { x: 350, y: 975, width: 73, height: 31 },
        other_revenue: { x: 350, y: 1158, width: 73, height: 13 },
        revenue: { x: 972, y: 687, width: 73, height: 323 },
        operating_profit: { x: 1597, y: 545, width: 73, height: 21 },
        operating_expenses: { x: 1597, y: 846, width: 73, height: 302 },
        other_income: { x: 2078, y: 309, width: 73, height: 8 },
        net_profit: { x: 2218, y: 327, width: 73, height: 21 },
        tax: { x: 2218, y: 474, width: 73, height: 7 },
        salaries_benefits: { x: 2218, y: 575, width: 73, height: 111 },
        purchased_transportation: { x: 2218, y: 760, width: 73, height: 80 },
        rentals: { x: 2218, y: 923, width: 73, height: 16 },
        depreciation_amortization: { x: 2218, y: 1018, width: 73, height: 14 },
        fuel: { x: 2218, y: 1108, width: 73, height: 18 },
        maintenance: { x: 2218, y: 1197, width: 73, height: 10 },
        business_realignment: { x: 2218, y: 1281, width: 73, height: 3 },
        other_operating: { x: 2218, y: 1341, width: 73, height: 49 },
      },
      labels: {
        express: { blocks: [
          { x: 386, top: 445, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 190, top: 704, anchor: 'middle', lines: [{ text: '8% operating margin', size: 28, weight: 400, color: NOTE }] },
        ] },
        freight: { blocks: [
          { x: 386, top: 886, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 190, top: 1025, anchor: 'middle', lines: [{ text: '7% operating margin', size: 28, weight: 400, color: NOTE }] },
        ] },
        other_revenue: { blocks: [
          { x: 386, top: 1070, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 240, top: 1150, anchor: 'middle', lines: [{ text: 'Other', size: 34, weight: 800, color: PURPLE }] },
        ] },
        revenue: { blocks: [{ x: 1008, top: 545, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_profit: { blocks: [{ x: 1634, top: 366, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '6% margin', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1634, top: 1171, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        other_income: { blocks: [{ x: 2118, top: 223, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 32, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 32, weight: 400, color: GREEN_LABEL }] }] },
        net_profit: { blocks: [{ x: 2465, top: 270, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '6% margin', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: 2465, top: 470, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        salaries_benefits: { blocks: [{ x: 2465, top: 602, anchor: 'middle', lineGap: 8, lines: [{ text: 'Salaries & benefits', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        purchased_transportation: { blocks: [{ x: 2465, top: 747, anchor: 'middle', lineGap: 8, lines: [{ text: 'Purchased', size: 32, weight: 800, color: RED_LABEL }, { text: 'transportation', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        rentals: { blocks: [{ x: 2465, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: 'Rentals', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        depreciation_amortization: { blocks: [{ x: 2465, top: 1004, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 32, weight: 800, color: RED_LABEL }, { text: 'Amortization', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        fuel: { blocks: [{ x: 2465, top: 1107, anchor: 'middle', lineGap: 8, lines: [{ text: 'Fuel', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        maintenance: { blocks: [{ x: 2465, top: 1196, anchor: 'middle', lineGap: 8, lines: [{ text: 'Maintenance', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        business_realignment: { blocks: [{ x: 2465, top: 1254, anchor: 'middle', lineGap: 8, lines: [{ text: 'Business', size: 32, weight: 800, color: RED_LABEL }, { text: 'realignment', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        other_operating: { blocks: [{ x: 2465, top: 1356, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
      },
    },
    nodes: [
      { id: 'express', col: 0, order: 0, type: 'source', label: 'FedEx Express', value: 21.6, notes: ['+14% Y/Y', '8% operating margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'freight', col: 0, order: 1, type: 'source', label: 'FedEx Freight', value: 2.4, notes: ['+5% Y/Y', '7% operating margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 1.0, notes: ['+9% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 25.0, notes: ['+13% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['6% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 23.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 3, order: 1, type: 'profit', label: 'Net profit', value: 1.6, notes: ['6% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 3, order: 2, type: 'cost', label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'salaries_benefits', col: 3, order: 3, type: 'cost', label: 'Salaries & benefits', value: 8.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'purchased_transportation', col: 3, order: 4, type: 'cost', label: ['Purchased', 'transportation'], value: 6.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rentals', col: 3, order: 5, type: 'cost', label: 'Rentals', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 6, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'fuel', col: 3, order: 7, type: 'cost', label: 'Fuel', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'maintenance', col: 3, order: 8, type: 'cost', label: 'Maintenance', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'business_realignment', col: 3, order: 9, type: 'cost', label: ['Business', 'realignment'], value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 3, order: 10, type: 'cost', label: 'Other', value: 3.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'express', target: 'revenue', value: 21.6, width: 279, sourceOrder: 0, targetOrder: 0 },
      { source: 'freight', target: 'revenue', value: 2.4, width: 31, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 1.0, width: 13, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'operating_profit', value: 1.6, width: 20, sourceWidth: 20, targetWidth: 21, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 23.5, width: 303, sourceWidth: 303, targetWidth: 302, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, width: 14, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, width: 7, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.6, width: 7, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'salaries_benefits', value: 8.6, width: 111, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'purchased_transportation', value: 6.2, width: 80, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rentals', value: 1.2, width: 16, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 1.1, width: 14, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'fuel', value: 1.4, width: 18, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'maintenance', value: 0.8, width: 10, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'business_realignment', value: 0.2, width: 3, sourceOrder: 6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating', value: 3.9, width: 49, sourceOrder: 7, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Fed', 'Ex', 'Express', 'Freight'],
      zh: {
        name: '联邦快递 · 2026 财年第四季度',
        meta: { title: '联邦快递 2026 财年第四季度利润表', period: '2026 财年第四季度', periodNote: '截至 2026 年 5 月', titleTextLength: 1740 },
        nodes: {
          express: { label: 'FedEx Express', notes: ['同比 +14%', '营业利润率 8%'] },
          freight: { label: 'FedEx Freight', notes: ['同比 +5%', '营业利润率 7%'] },
          other_revenue: { label: '其他', notes: ['同比 +9%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (1 个百分点)'] }, tax: { label: '税费' },
          salaries_benefits: { label: '薪酬与福利' }, purchased_transportation: { label: ['外购', '运输'] }, rentals: { label: '租赁费用' }, depreciation_amortization: { label: ['折旧与', '摊销'] }, fuel: { label: '燃油' }, maintenance: { label: '维修' }, business_realignment: { label: ['业务', '重组'] }, other_operating: { label: '其他' },
        },
        layout: {
          labels: {
            express: { blocks: [{ x: 386, top: 445, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +14%', size: 28, weight: 400, color: NOTE }] }, { x: 190, top: 704, anchor: 'middle', lines: [{ text: '营业利润率 8%', size: 28, weight: 400, color: NOTE }] }] },
            freight: { blocks: [{ x: 386, top: 886, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +5%', size: 28, weight: 400, color: NOTE }] }, { x: 190, top: 1025, anchor: 'middle', lines: [{ text: '营业利润率 7%', size: 28, weight: 400, color: NOTE }] }] },
            other_revenue: { blocks: [{ x: 386, top: 1070, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +9%', size: 28, weight: 400, color: NOTE }] }, { x: 240, top: 1150, anchor: 'middle', lines: [{ text: '其他', size: 34, weight: 800, color: PURPLE }] }] },
            revenue: { blocks: [{ x: 1008, top: 545, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +13%', size: 28, weight: 400, color: NOTE }] }] },
            operating_profit: { blocks: [{ x: 1634, top: 366, anchor: 'middle', lineGap: 8, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '利润率 6%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1634, top: 1171, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 36, weight: 800, color: RED_LABEL }, { text: '费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
            other_income: { blocks: [{ x: 2118, top: 223, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 32, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 32, weight: 400, color: GREEN_LABEL }] }] },
            net_profit: { blocks: [{ x: 2465, top: 270, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '利润率 6%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            tax: { blocks: [{ x: 2465, top: 470, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            salaries_benefits: { blocks: [{ x: 2465, top: 602, anchor: 'middle', lineGap: 8, lines: [{ text: '薪酬与福利', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            purchased_transportation: { blocks: [{ x: 2465, top: 770, anchor: 'middle', lineGap: 8, lines: [{ text: '外购运输', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            rentals: { blocks: [{ x: 2465, top: 920, anchor: 'middle', lineGap: 8, lines: [{ text: '租赁费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            depreciation_amortization: { blocks: [{ x: 2465, top: 1004, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧与摊销', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            fuel: { blocks: [{ x: 2465, top: 1107, anchor: 'middle', lineGap: 8, lines: [{ text: '燃油', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            maintenance: { blocks: [{ x: 2465, top: 1196, anchor: 'middle', lineGap: 8, lines: [{ text: '维修', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            business_realignment: { blocks: [{ x: 2465, top: 1277, anchor: 'middle', lineGap: 8, lines: [{ text: '业务重组', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            other_operating: { blocks: [{ x: 2465, top: 1356, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
          },
        },
      },
    },
  });
})();

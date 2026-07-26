/* Carnival — Q1 FY26 income statement ($B).
 * Reconstructed from input/processed/carnival-q1-fy26.png. The source is a
 * direct revenue-to-operating-expenses waterfall: it does not depict a
 * gross-profit/cost-of-revenue stage or a separate tax flow. */
(function () {
  const TITLE = '#155077';
  const BLUE = '#005a9c';
  const BLUE_LINK = '#85aeca';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const carnivalLockup = `
    <g data-typography-role="brand" transform="translate(590 237)">
      <g transform="translate(236 0)">
        <path d="M0 0 L16 90" stroke="#171717" stroke-width="5"/>
        <path d="M16 18 C43 5 78 7 104 17 L114 80 C83 70 50 70 26 80 Z" fill="#e8414d"/>
        <ellipse cx="64" cy="46" rx="18" ry="26" fill="#005da8" stroke="#ffffff" stroke-width="5"/>
      </g>
      <text x="0" y="178" font-family="Georgia,Times New Roman,serif" font-size="92" letter-spacing="18" fill="#050505">CARNIVAL</text>
      <text x="18" y="214" font-family="Georgia,Times New Roman,serif" font-size="31" letter-spacing="6" fill="#050505">CORPORATION &amp; PLC.</text>
    </g>`;

  const card = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="114" rx="30" fill="${BLUE}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${y + 42 + index * 37}" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="${line.size}" font-weight="${line.weight || 400}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = `
    <g>
      ${carnivalLockup}
      <g class="sankey-interactive-annotation" data-node="passenger_ticket">
        <rect x="45" y="635" width="350" height="65" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <text x="219.5" y="679" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="39" font-weight="800" fill="${BLUE}">Passenger ticket</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="onboard_other_revenue">
        <rect x="35" y="1055" width="355" height="65" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <text x="210.5" y="1105" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="39" font-weight="800" fill="${BLUE}">Onboard &amp; other</text>
      </g>
      ${card(88, 1196, 642, [
        { text: 'Net yields per ALBD $197 (+7% Y/Y)', size: 26, weight: 700 },
        { text: 'Cruise costs per ALBD $205 (+5% Y/Y)', size: 26, weight: 700 },
      ])}
      ${card(748, 1196, 420, [
        { text: 'Customer deposits', size: 28, weight: 800 },
        { text: '$7.5B (+9% Y/Y)', size: 28 },
      ])}
      <text x="414" y="1342" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="27" fill="${NOTE}">ALBD = Available Lower Berth Day</text>
    </g>`;

  const annotationsZh = `
    <g>
      ${carnivalLockup}
      <g class="sankey-interactive-annotation" data-node="passenger_ticket">
        <rect x="45" y="635" width="350" height="65" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <text x="219.5" y="679" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="39" font-weight="800" fill="${BLUE}">乘客票务</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="onboard_other_revenue">
        <rect x="35" y="1055" width="355" height="65" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <text x="210.5" y="1105" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="39" font-weight="800" fill="${BLUE}">船上及其他</text>
      </g>
      ${card(88, 1196, 642, [
        { text: '每个 ALBD 净收益 $197（同比 +7%）', size: 25, weight: 700 },
        { text: '每个 ALBD 邮轮成本 $205（同比 +5%）', size: 25, weight: 700 },
      ])}
      ${card(748, 1196, 420, [
        { text: '客户预付款', size: 28, weight: 800 },
        { text: '$7.5B（同比 +9%）', size: 28 },
      ])}
      <text x="414" y="1342" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="26" fill="${NOTE}">ALBD = 可售低铺位天数</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'carnival-q1-fy26',
    name: 'Carnival · Q1 FY26',
    company: 'Carnival',
    meta: {
      company: 'Carnival',
      title: 'Carnival Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Feb. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/carnival-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2250,
      periodX: 177,
      periodY: 340,
      periodNoteY: 384,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
      type: { name: 35, value: 38, note: 28, lineGap: 8 },
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      { key: 'carnival-onboard-ship', href: 'data/assets/raster-annotations/carnival/onboard-ship.png', x: 119, y: 973, width: 202, height: 97 },
      { key: 'carnival-brand-cluster', href: 'data/assets/raster-annotations/carnival/brand-cluster.png', x: 50, y: 781, width: 318, height: 142 },
      { key: 'carnival-passenger-ticket', href: 'data/assets/raster-annotations/carnival/passenger-ticket.png', x: 103, y: 527, width: 218, height: 121 },
    ],
    layout: {
      nodes: {
        passenger_ticket: { x: 392, y: 518, width: 72, height: 221 },
        onboard_other_revenue: { x: 392, y: 969, width: 72, height: 118 },
        revenue: { x: 858, y: 669, width: 72, height: 339 },
        operating_profit: { x: 1324, y: 552, width: 72, height: 33 },
        operating_expenses: { x: 1324, y: 781, width: 72, height: 307 },
        net_profit: { x: 1792, y: 457, width: 72, height: 15 },
        interest_other: { x: 1792, y: 630, width: 72, height: 19 },
        cruise_tour: { x: 1792, y: 812, width: 72, height: 218 },
        selling_admin: { x: 1792, y: 1160, width: 72, height: 51 },
        depreciation_amortization: { x: 1792, y: 1341, width: 72, height: 39 },
        commissions_transportation: { x: 2258, y: 388, width: 72, height: 49 },
        onboard_other_cost: { x: 2258, y: 560, width: 72, height: 34 },
        payroll_related: { x: 2258, y: 737, width: 72, height: 37 },
        fuel: { x: 2258, y: 931, width: 72, height: 22 },
        food: { x: 2258, y: 1104, width: 72, height: 21 },
        other_operating: { x: 2258, y: 1265, width: 72, height: 55 },
      },
      labels: {
        passenger_ticket: { blocks: [
          { x: 428, top: 427, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE }] },
        ] },
        onboard_other_revenue: { blocks: [
          { x: 428, top: 876, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE }] },
        ] },
        revenue: { blocks: [{ x: 894, top: 525, anchor: 'middle', lineGap: 8, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_profit: { blocks: [{ x: 1360, top: 325, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800, color: GREEN_LABEL }, { text: 'profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '10% margin', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1360, top: 1100, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        net_profit: { blocks: [{ x: 1828, top: 276, anchor: 'middle', lineGap: 8, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '4% margin', size: 28, weight: 400, color: NOTE }, { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        interest_other: { blocks: [{ x: 1828, top: 502, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 32, weight: 800, color: RED_LABEL }, { text: '& other', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        cruise_tour: { blocks: [{ x: 1828, top: 724, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cruise & tour', size: 32, weight: 800, color: RED_LABEL }, { text: '($3.9B)', size: 32, weight: 400, color: RED_LABEL }] }] },
        selling_admin: { blocks: [{ x: 1828, top: 1073, anchor: 'middle', lineGap: 8, lines: [{ text: 'Selling & admin', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        depreciation_amortization: { blocks: [{ x: 1828, top: 1215, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 32, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        commissions_transportation: { blocks: [{ x: 2469, top: 370, anchor: 'middle', lineGap: 8, lines: [{ text: 'Commissions &', size: 32, weight: 800, color: RED_LABEL }, { text: 'transportation', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        onboard_other_cost: { blocks: [{ x: 2468, top: 529, anchor: 'middle', lineGap: 8, lines: [{ text: 'Onboard', size: 32, weight: 800, color: RED_LABEL }, { text: '& other', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        payroll_related: { blocks: [{ x: 2468, top: 723, anchor: 'middle', lineGap: 8, lines: [{ text: 'Payroll', size: 32, weight: 800, color: RED_LABEL }, { text: '& related', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        fuel: { blocks: [{ x: 2463, top: 909, anchor: 'middle', lineGap: 8, lines: [{ text: 'Fuel', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        food: { blocks: [{ x: 2463, top: 1077, anchor: 'middle', lineGap: 8, lines: [{ text: 'Food', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
        other_operating: { blocks: [{ x: 2469, top: 1231, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 32, weight: 800, color: RED_LABEL }, { text: 'operating', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
      },
    },
    nodes: [
      { id: 'passenger_ticket', col: 0, order: 0, type: 'source', label: 'Passenger ticket', value: 4.0, valueText: '$4.0B', notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'onboard_other_revenue', col: 0, order: 1, type: 'source', label: 'Onboard & other', value: 2.1, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.2, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['10% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 0.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest_other', col: 3, order: 1, type: 'cost', label: ['Interest', '& other'], value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cruise_tour', col: 3, order: 2, type: 'cost', label: 'Cruise & tour', value: 3.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling_admin', col: 3, order: 3, type: 'cost', label: 'Selling & admin', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 3, order: 4, type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'commissions_transportation', col: 4, order: 0, type: 'cost', label: ['Commissions &', 'transportation'], value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'onboard_other_cost', col: 4, order: 1, type: 'cost', label: ['Onboard', '& other'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'payroll_related', col: 4, order: 2, type: 'cost', label: ['Payroll', '& related'], value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'fuel', col: 4, order: 3, type: 'cost', label: 'Fuel', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'food', col: 4, order: 4, type: 'cost', label: 'Food', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating', col: 4, order: 5, type: 'cost', label: ['Other', 'operating'], value: 1.0, valueText: '$1.0B', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'passenger_ticket', target: 'revenue', value: 4.0, width: 221, sourceOrder: 0, targetOrder: 0 },
      { source: 'onboard_other_revenue', target: 'revenue', value: 2.1, width: 118, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'operating_profit', value: 0.6, width: 33, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 5.6, width: 307, sourceWidth: 306, targetWidth: 307, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.3, width: 15, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest_other', value: 0.3, width: 18, sourceWidth: 18, targetWidth: 19, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'cruise_tour', value: 3.9, width: 216, sourceWidth: 216, targetWidth: 218, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'selling_admin', value: 0.9, width: 51, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.7, width: 40, sourceWidth: 40, targetWidth: 39, sourceOrder: 2, targetOrder: 0 },
      { source: 'cruise_tour', target: 'commissions_transportation', value: 0.9, width: 49, sourceOrder: 0, targetOrder: 0 },
      { source: 'cruise_tour', target: 'onboard_other_cost', value: 0.6, width: 34, sourceOrder: 1, targetOrder: 0 },
      { source: 'cruise_tour', target: 'payroll_related', value: 0.7, width: 37, sourceOrder: 2, targetOrder: 0 },
      { source: 'cruise_tour', target: 'fuel', value: 0.4, width: 22, sourceOrder: 3, targetOrder: 0 },
      { source: 'cruise_tour', target: 'food', value: 0.4, width: 21, sourceOrder: 4, targetOrder: 0 },
      { source: 'cruise_tour', target: 'other_operating', value: 1.0, width: 55, sourceOrder: 5, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ALBD', 'CORPORATION & PLC.'],
      zh: {
        name: '嘉年华 · 2026 财年第一季度',
        meta: { title: '嘉年华 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 2 月', titleTextLength: 1760 },
        nodes: {
          passenger_ticket: { label: '乘客票务', notes: ['同比 +5%'] }, onboard_other_revenue: { label: '船上及其他', notes: ['同比 +8%'] }, revenue: { label: '收入', notes: ['同比 +6%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 +1 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 4%', '同比 +6 个百分点'] },
          interest_other: { label: ['利息', '及其他'] }, cruise_tour: { label: '邮轮与旅游' }, selling_admin: { label: '销售与行政' }, depreciation_amortization: { label: ['折旧与', '摊销'] },
          commissions_transportation: { label: ['佣金与', '运输'] }, onboard_other_cost: { label: ['船上', '及其他'] }, payroll_related: { label: ['薪酬及', '相关费用'] }, fuel: { label: '燃油' }, food: { label: '餐饮' }, other_operating: { label: ['其他', '运营'] },
        },
        annotationsSvg: annotationsZh,
        layout: {
          labels: {
            passenger_ticket: { blocks: [
              { x: 428, top: 427, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +5%', size: 28, weight: 400, color: NOTE }] },
            ] },
            onboard_other_revenue: { blocks: [
              { x: 428, top: 876, anchor: 'middle', lineGap: 8, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +8%', size: 28, weight: 400, color: NOTE }] },
            ] },
            revenue: { blocks: [{ x: 894, top: 525, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '同比 +6%', size: 28, weight: 400, color: NOTE }] }] },
            operating_profit: { blocks: [{ x: 1360, top: 325, anchor: 'middle', lineGap: 8, lines: [{ text: '营业', size: 40, weight: 800, color: GREEN_LABEL }, { text: '利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '利润率 10%', size: 28, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1360, top: 1100, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 36, weight: 800, color: RED_LABEL }, { text: '费用', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
            net_profit: { blocks: [{ x: 1828, top: 276, anchor: 'middle', lineGap: 8, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '利润率 4%', size: 28, weight: 400, color: NOTE }, { text: '同比 +6 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            interest_other: { blocks: [{ x: 1828, top: 502, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 32, weight: 800, color: RED_LABEL }, { text: '及其他', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            cruise_tour: { blocks: [{ x: 1828, top: 724, anchor: 'middle', lineGap: 8, lines: [{ text: '邮轮与旅游', size: 32, weight: 800, color: RED_LABEL }, { text: '($3.9B)', size: 32, weight: 400, color: RED_LABEL }] }] },
            selling_admin: { blocks: [{ x: 1828, top: 1073, anchor: 'middle', lineGap: 8, lines: [{ text: '销售与行政', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            depreciation_amortization: { blocks: [{ x: 1828, top: 1215, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧与', size: 32, weight: 800, color: RED_LABEL }, { text: '摊销', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            commissions_transportation: { blocks: [{ x: 2469, top: 370, anchor: 'middle', lineGap: 8, lines: [{ text: '佣金与', size: 32, weight: 800, color: RED_LABEL }, { text: '运输', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            onboard_other_cost: { blocks: [{ x: 2468, top: 529, anchor: 'middle', lineGap: 8, lines: [{ text: '船上', size: 32, weight: 800, color: RED_LABEL }, { text: '及其他', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            payroll_related: { blocks: [{ x: 2468, top: 723, anchor: 'middle', lineGap: 8, lines: [{ text: '薪酬及', size: 32, weight: 800, color: RED_LABEL }, { text: '相关费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            fuel: { blocks: [{ x: 2463, top: 909, anchor: 'middle', lineGap: 8, lines: [{ text: '燃油', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            food: { blocks: [{ x: 2463, top: 1077, anchor: 'middle', lineGap: 8, lines: [{ text: '餐饮', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
            other_operating: { blocks: [{ x: 2469, top: 1231, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 32, weight: 800, color: RED_LABEL }, { text: '运营', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] }] },
          },
        },
      },
    },
  });
})();

/* Cisco Q2 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const TITLE = '#155077';
  const BLUE = '#009fdb';
  const BLUE_LINK = '#7cc6e3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2470;

  const ciscoLogo = `
    <g fill="${BLUE}">
      <rect x="82" y="66" width="20" height="39" rx="10"/>
      <rect x="134" y="38" width="20" height="67" rx="10"/>
      <rect x="186" y="0" width="20" height="128" rx="10"/>
      <rect x="238" y="38" width="20" height="67" rx="10"/>
      <rect x="290" y="66" width="20" height="39" rx="10"/>
      <rect x="342" y="38" width="20" height="67" rx="10"/>
      <rect x="394" y="0" width="20" height="128" rx="10"/>
      <rect x="446" y="38" width="20" height="67" rx="10"/>
      <rect x="498" y="66" width="20" height="39" rx="10"/>
    </g>
    <text x="300" y="238" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="118" font-weight="800" letter-spacing="0" fill="${BLUE}">cisco</text>`;

  const above = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });
  const side = (top, lines, x = RIGHT_LABEL_X, anchor = 'middle', lineGap = 6) => ({ x, top, anchor, lineGap, lines });
  const text = (value, size, weight = 800, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'cisco-q2-fy26',
    name: 'Cisco · Q2 FY26',
    company: 'Cisco',
    meta: {
      company: 'Cisco',
      title: 'Cisco Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/cisco-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2048,
      periodX: 2411,
      periodY: 286,
      periodNoteY: 326,
      logoWidth: 600,
      logoHeight: 245,
      logoY: 247,
      logoViewBox: '0 0 600 245',
      logoSvg: ciscoLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
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
      nodeRadius: 0,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    layout: {
      scale: 21.5,
      nodes: {
        networking: { x: 386, y: 519, width: 73, height: 178 },
        security: { x: 386, y: 823, width: 73, height: 43 },
        collaboration: { x: 386, y: 994, width: 73, height: 23 },
        observability: { x: 386, y: 1147, width: 73, height: 6 },
        products: { x: 759, y: 610, width: 73, height: 250 },
        services: { x: 759, y: 1040, width: 73, height: 80 },
        revenue: { x: 1132, y: 676, width: 73, height: 330 },
        gross_profit: { x: 1507, y: 608, width: 73, height: 214 },
        cost_of_sales: { x: 1507, y: 1003, width: 73, height: 116 },
        product_cost_of_sales: { x: 1702, y: 1084, width: 73, height: 90 },
        services_cost_of_sales: { x: 1702, y: 1234, width: 73, height: 26 },
        operating_profit: { x: 1880, y: 516, width: 73, height: 81 },
        operating_expenses: { x: 1880, y: 772, width: 73, height: 133 },
        net_profit: { x: 2253, y: 432, width: 73, height: 68 },
        tax: { x: 2253, y: 668, width: 73, height: 10 },
        other_expense: { x: 2253, y: 773, width: 73, height: 3 },
        sm: { x: 2253, y: 862, width: 73, height: 62 },
        rnd: { x: 2253, y: 1001, width: 73, height: 51 },
        ga: { x: 2253, y: 1133, width: 73, height: 15 },
        amortization: { x: 2253, y: 1233, width: 73, height: 4 },
        restructuring_other: { x: 2253, y: 1322, width: 73, height: 1 },
      },
      labels: {
        networking: { blocks: [
          above(422, 428, [text('$value', 39, 400, BLUE), text('+21% Y/Y', 28, 400, NOTE)]),
          { x: 350, top: 591, anchor: 'end', lines: [text('Networking', 40, 800, BLUE)] },
        ] },
        security: { blocks: [
          above(422, 734, [text('$value', 39, 400, BLUE), text('(4%) Y/Y', 28, 400, NOTE)]),
          { x: 350, top: 823, anchor: 'end', lines: [text('Security', 40, 800, BLUE)] },
        ] },
        collaboration: { blocks: [
          above(422, 904, [text('$value', 39, 400, BLUE), text('+6% Y/Y', 28, 400, NOTE)]),
          { x: 350, top: 985, anchor: 'end', lines: [text('Collaboration', 40, 800, BLUE)] },
        ] },
        observability: { blocks: [
          above(422, 1059, [text('$value', 39, 400, BLUE), text('Flat Y/Y', 28, 400, NOTE)]),
          { x: 350, top: 1129, anchor: 'end', lines: [text('Observability', 40, 800, BLUE)] },
        ] },
        products: { blocks: [above(795, 462, [text('Products', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('+14% Y/Y', 28, 400, NOTE)])] },
        services: { blocks: [above(795, 1142, [text('Services', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('(1%) Y/Y', 28, 400, NOTE)])] },
        revenue: { blocks: [above(1169, 534, [text('Revenue', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('+10% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [above(1544, 424, [text('Gross profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('65% margin', 28, 400, NOTE), text('(0pp) Y/Y', 28, 400, NOTE)])] },
        cost_of_sales: { blocks: [above(1544, 1137, [text('Cost of', 40, 800, RED_LABEL), text('sales', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        product_cost_of_sales: { blocks: [side(1080, [text('Products', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL), text('64% gross margin', 27, 400, NOTE)], 1835, 'start')] },
        services_cost_of_sales: { blocks: [side(1208, [text('Services', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL), text('68% gross margin', 27, 400, NOTE)], 1835, 'start')] },
        operating_profit: { blocks: [above(1917, 331, [text('Operating profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('25% margin', 28, 400, NOTE), text('+2pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [above(1917, 926, [text('Operating', 40, 800, RED_LABEL), text('expenses', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        net_profit: { blocks: [side(414, [text('Net profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('21% margin', 28, 400, NOTE), text('+3pp Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [side(638, [text('Tax', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        other_expense: { blocks: [side(740, [text('Other', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        sm: { blocks: [side(842, [text('S&M', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        rnd: { blocks: [side(982, [text('R&D', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        ga: { blocks: [side(1110, [text('G&A', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        amortization: { blocks: [side(1195, [text('Amortization', 32, 800, RED_LABEL), text('$value', 32, 400, RED_LABEL)])] },
        restructuring_other: { blocks: [side(1288, [text('Other', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
      },
    },
    nodes: [
      { id: 'networking', col: 0, order: 0, type: 'source', label: 'Networking', value: 8.294, notes: ['+21% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'security', col: 0, order: 1, type: 'source', label: 'Security', value: 2.018, notes: ['(4%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'collaboration', col: 0, order: 2, type: 'source', label: 'Collaboration', value: 1.054, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'observability', col: 0, order: 3, type: 'source', label: 'Observability', value: 0.277, notes: ['Flat Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 11.642, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 3.707, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 15.349, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 9.972, notes: ['65% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 5.377 },
      { id: 'product_cost_of_sales', col: 4, order: 0, type: 'cost', label: 'Products', value: 4.205, notes: ['64% gross margin'] },
      { id: 'services_cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Services', value: 1.172, notes: ['68% gross margin'] },
      { id: 'operating_profit', col: 4, order: 2, type: 'profit', label: 'Operating profit', value: 3.781, notes: ['25% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 3, type: 'cost', label: ['Operating', 'expenses'], value: 6.191 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.175, notes: ['21% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.471 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.135 },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 2.881 },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.355 },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 0.688 },
      { id: 'amortization', col: 5, order: 6, type: 'cost', label: 'Amortization', value: 0.231 },
      { id: 'restructuring_other', col: 5, order: 7, type: 'cost', label: 'Other', value: 0.036, valueText: '($36M)' },
    ],
    links: [
      { source: 'networking', target: 'products', value: 8.294, width: 178, sourceOrder: 0, targetOrder: 0 },
      { source: 'security', target: 'products', value: 2.018, width: 43, sourceOrder: 0, targetOrder: 1 },
      { source: 'collaboration', target: 'products', value: 1.054, width: 23, sourceOrder: 0, targetOrder: 2 },
      { source: 'observability', target: 'products', value: 0.277, width: 6, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 11.642, width: 250, sourceOrder: 0, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 3.707, width: 80, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 9.972, width: 214, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 5.377, width: 116, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'product_cost_of_sales', value: 4.205, width: 90, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'services_cost_of_sales', value: 1.172, width: 26, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.781, width: 81, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.191, width: 133, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.175, width: 68, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.471, width: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.135, width: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.881, width: 62, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.355, width: 51, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.688, width: 15, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.231, width: 4, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring_other', value: 0.036, width: 1, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '思科 · 2026 财年第二季度',
        meta: { title: '思科 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 1 月', titleTextLength: 1780 },
        nodes: {
          networking: { label: '网络', notes: ['同比 +21%'] },
          security: { label: '安全', notes: ['同比 (4%)'] },
          collaboration: { label: '协作', notes: ['同比 +6%'] },
          observability: { label: '可观测性', notes: ['同比持平'] },
          products: { label: '产品', notes: ['同比 +14%'] },
          services: { label: '服务', notes: ['同比 (1%)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: ['销售', '成本'] },
          product_cost_of_sales: { label: '产品', notes: ['毛利率 64%'] },
          services_cost_of_sales: { label: '服务', notes: ['毛利率 68%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 25%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          sm: { label: '销售与市场' },
          rnd: { label: '研发' },
          ga: { label: '一般及行政' },
          amortization: { label: '摊销' },
          restructuring_other: { label: '其他' },
        },
        layout: {
          labels: {
            security: { blocks: [
              above(422, 734, [text('$value', 39, 400, BLUE), text('同比 (4%)', 28, 400, NOTE)]),
              { x: 350, top: 823, anchor: 'end', lines: [text('安全', 40, 800, BLUE)] },
            ] },
            collaboration: { blocks: [
              above(422, 904, [text('$value', 39, 400, BLUE), text('同比 +6%', 28, 400, NOTE)]),
              { x: 350, top: 985, anchor: 'end', lines: [text('协作', 40, 800, BLUE)] },
            ] },
            observability: { blocks: [
              above(422, 1059, [text('$value', 39, 400, BLUE), text('同比持平', 28, 400, NOTE)]),
              { x: 350, top: 1129, anchor: 'end', lines: [text('可观测性', 40, 800, BLUE)] },
            ] },
            sm: { blocks: [side(842, [text('销售与市场', 30, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
            ga: { blocks: [side(1110, [text('一般及行政', 30, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
          },
        },
      },
    },
  });
})();

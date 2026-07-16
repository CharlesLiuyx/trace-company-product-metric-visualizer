/* Cisco Q1 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const TITLE = '#155077';
  const BLUE = '#00a2df';
  const BLUE_LINK = '#85cee9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2444;

  const ciscoLogo = `
    <g fill="${BLUE}">
      <rect x="82" y="66" width="20" height="39" rx="10"/><rect x="134" y="38" width="20" height="67" rx="10"/>
      <rect x="186" y="0" width="20" height="128" rx="10"/><rect x="238" y="38" width="20" height="67" rx="10"/>
      <rect x="290" y="66" width="20" height="39" rx="10"/><rect x="342" y="38" width="20" height="67" rx="10"/>
      <rect x="394" y="0" width="20" height="128" rx="10"/><rect x="446" y="38" width="20" height="67" rx="10"/>
      <rect x="498" y="66" width="20" height="39" rx="10"/>
    </g>
    <text x="300" y="238" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800" fill="${BLUE}">cisco</text>`;

  const above = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });
  const side = (top, lines, x = RIGHT_LABEL_X, anchor = 'middle', lineGap = 6) => ({ x, top, anchor, lineGap, lines });
  const text = (value, size, weight = 800, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'cisco-q1-fy26',
    name: 'Cisco · Q1 FY26',
    company: 'Cisco',
    meta: {
      company: 'Cisco', title: 'Cisco Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Oct. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/cisco-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2048,
      periodX: 2443, periodY: 286, periodNoteY: 326,
      logoWidth: 600, logoHeight: 245, logoY: 247, logoViewBox: '0 0 600 245', logoSvg: ciscoLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, nodeRadius: 0, type: { name: 40, value: 39, note: 28, lineGap: 8 }, interfaceAudit: { mode: 'error' },
    },
    layout: {
      scale: 19.4,
      nodes: {
        networking: { x: 386, y: 509, width: 73, height: 151 }, security: { x: 386, y: 814, width: 73, height: 36 },
        collaboration: { x: 386, y: 986, width: 73, height: 19 }, observability: { x: 386, y: 1149, width: 73, height: 4 },
        products: { x: 759, y: 621, width: 73, height: 217 }, services: { x: 759, y: 1056, width: 73, height: 73 },
        revenue: { x: 1132, y: 699, width: 73, height: 290 }, gross_profit: { x: 1507, y: 635, width: 73, height: 189 },
        cost_of_sales: { x: 1507, y: 1029, width: 73, height: 99 }, product_cost_of_sales: { x: 1699, y: 1075, width: 73, height: 75 },
        services_cost_of_sales: { x: 1699, y: 1237, width: 73, height: 21 }, operating_profit: { x: 1880, y: 567, width: 73, height: 64 },
        operating_expenses: { x: 1880, y: 775, width: 73, height: 124 }, net_profit: { x: 2253, y: 491, width: 73, height: 53 },
        tax: { x: 2253, y: 705, width: 73, height: 9 }, sm: { x: 2253, y: 871, width: 73, height: 54 },
        rnd: { x: 2253, y: 1004, width: 73, height: 45 }, ga: { x: 2253, y: 1138, width: 73, height: 12 },
        amortization: { x: 2253, y: 1233, width: 73, height: 2 }, restructuring_other: { x: 2253, y: 1329, width: 73, height: 1 },
      },
      labels: {
        networking: { blocks: [above(422, 419, [text('$value', 39, 400, BLUE), text('+15% Y/Y', 28, 400, NOTE)]), { x: 350, top: 567, anchor: 'end', lines: [text('Networking', 40, 800, BLUE)] }] },
        security: { blocks: [above(415, 721, [text('$value', 39, 400, BLUE), text('(2%) Y/Y', 28, 400, NOTE)]), { x: 343, top: 814, anchor: 'end', lines: [text('Security', 40, 800, BLUE)] }] },
        collaboration: { blocks: [above(414, 888, [text('$value', 39, 400, BLUE), text('(3%) Y/Y', 28, 400, NOTE)]), { x: 342, top: 972, anchor: 'end', lines: [text('Collaboration', 40, 800, BLUE)] }] },
        observability: { blocks: [above(422, 1058, [text('$value', 39, 400, BLUE), text('+6% Y/Y', 28, 400, NOTE)]), { x: 343, top: 1135, anchor: 'end', lines: [text('Observability', 40, 800, BLUE)] }] },
        products: { blocks: [above(795, 472, [text('Products', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('+10% Y/Y', 28, 400, NOTE)])] },
        services: { blocks: [above(795, 1147, [text('Services', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('+2% Y/Y', 28, 400, NOTE)])] },
        revenue: { blocks: [above(1169, 552, [text('Revenue', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('+8% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [above(1544, 451, [text('Gross profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('65% margin', 28, 400, NOTE), text('(0pp) Y/Y', 28, 400, NOTE)])] },
        cost_of_sales: { blocks: [above(1544, 1142, [text('Cost of', 40, 800, RED_LABEL), text('sales', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        product_cost_of_sales: { blocks: [side(1075, [text('Products', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL), text('64% gross margin', 27, 400, NOTE)], 1891)] },
        services_cost_of_sales: { blocks: [side(1214, [text('Services', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL), text('68% gross margin', 27, 400, NOTE)], 1891)] },
        operating_profit: { blocks: [above(1917, 389, [text('Operating profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('23% margin', 28, 400, NOTE), text('+6pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [above(1917, 921, [text('Operating', 40, 800, RED_LABEL), text('expenses', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        net_profit: { blocks: [side(476, [text('Net profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('19% margin', 28, 400, NOTE), text('(0pp) Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [side(674, [text('Tax', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        sm: { blocks: [side(861, [text('S&M', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        rnd: { blocks: [side(987, [text('R&D', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        ga: { blocks: [side(1105, [text('G&A', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        amortization: { blocks: [side(1194, [text('Amortization', 32, 800, RED_LABEL), text('$value', 32, 400, RED_LABEL)])] },
        restructuring_other: { blocks: [side(1292, [text('Other', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
      },
    },
    nodes: [
      { id: 'networking', col: 0, order: 0, type: 'source', label: 'Networking', value: 7.768, notes: ['+15% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'security', col: 0, order: 1, type: 'source', label: 'Security', value: 1.980, notes: ['(2%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'collaboration', col: 0, order: 2, type: 'source', label: 'Collaboration', value: 1.055, notes: ['(3%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'observability', col: 0, order: 3, type: 'source', label: 'Observability', value: 0.274, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 11.077, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 3.806, notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 14.883, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 9.745, notes: ['65% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 5.138 },
      { id: 'product_cost_of_sales', col: 4, order: 0, type: 'cost', label: 'Products', value: 3.934, notes: ['64% gross margin'] },
      { id: 'services_cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Services', value: 1.204, notes: ['68% gross margin'] },
      { id: 'operating_profit', col: 4, order: 2, type: 'profit', label: 'Operating profit', value: 3.363, notes: ['23% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 3, type: 'cost', label: ['Operating', 'expenses'], value: 6.382 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.860, notes: ['19% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.531 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 2.871 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 2.400 },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.733 },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.231 },
      { id: 'restructuring_other', col: 5, order: 6, type: 'cost', label: 'Other', value: 0.147 },
    ],
    links: [
      { source: 'networking', target: 'products', value: 7.768, width: 151, sourceOrder: 0, targetOrder: 0 }, { source: 'security', target: 'products', value: 1.980, width: 39, sourceWidth: 36, targetWidth: 39, sourceOrder: 0, targetOrder: 1 },
      { source: 'collaboration', target: 'products', value: 1.055, width: 22, sourceWidth: 19, targetWidth: 22, sourceOrder: 0, targetOrder: 2 }, { source: 'observability', target: 'products', value: 0.274, width: 5, sourceWidth: 4, targetWidth: 5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 11.077, width: 217, sourceOrder: 0, targetOrder: 0 }, { source: 'services', target: 'revenue', value: 3.806, width: 73, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 9.745, width: 189, sourceWidth: 190, targetWidth: 189, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_sales', value: 5.138, width: 99, sourceWidth: 100, targetWidth: 99, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'product_cost_of_sales', value: 3.934, width: 76, sourceWidth: 76, targetWidth: 75, sourceOrder: 0, targetOrder: 0 }, { source: 'cost_of_sales', target: 'services_cost_of_sales', value: 1.204, width: 23, sourceWidth: 23, targetWidth: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.363, width: 64, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 6.382, width: 124, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.860, width: 53, sourceWidth: 55, targetWidth: 53, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 0.531, width: 9, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.871, width: 56, sourceWidth: 56, targetWidth: 54, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_expenses', target: 'rnd', value: 2.400, width: 47, sourceWidth: 47, targetWidth: 45, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.733, width: 14, sourceWidth: 14, targetWidth: 12, sourceOrder: 2, targetOrder: 0 }, { source: 'operating_expenses', target: 'amortization', value: 0.231, width: 4, sourceWidth: 4, targetWidth: 2, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring_other', value: 0.147, width: 3, sourceWidth: 3, targetWidth: 1, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '思科 · 2026 财年第一季度', meta: { title: '思科 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2025 年 10 月', titleTextLength: 1780 },
        nodes: {
          networking: { label: '网络', notes: ['同比 +15%'] }, security: { label: '安全', notes: ['同比 (2%)'] }, collaboration: { label: '协作', notes: ['同比 (3%)'] }, observability: { label: '可观测性', notes: ['同比 +6%'] },
          products: { label: '产品', notes: ['同比 +10%'] }, services: { label: '服务', notes: ['同比 +2%'] }, revenue: { label: '收入', notes: ['同比 +8%'] }, gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: ['销售', '成本'] }, product_cost_of_sales: { label: '产品', notes: ['毛利率 64%'] }, services_cost_of_sales: { label: '服务', notes: ['毛利率 68%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 23%', '同比 +6 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 19%', '同比 (0 个百分点)'] },
          tax: { label: '税费' }, sm: { label: '销售与市场' }, rnd: { label: '研发' }, ga: { label: '一般及行政' }, amortization: { label: '摊销' }, restructuring_other: { label: '其他' },
        },
        layout: { labels: {
          security: { blocks: [above(415, 721, [text('$value', 39, 400, BLUE), text('同比 (2%)', 28, 400, NOTE)]), { x: 343, top: 814, anchor: 'end', lines: [text('安全', 40, 800, BLUE)] }] },
          collaboration: { blocks: [above(414, 888, [text('$value', 39, 400, BLUE), text('同比 (3%)', 28, 400, NOTE)]), { x: 342, top: 972, anchor: 'end', lines: [text('协作', 40, 800, BLUE)] }] },
          observability: { blocks: [above(422, 1058, [text('$value', 39, 400, BLUE), text('同比 +6%', 28, 400, NOTE)]), { x: 343, top: 1135, anchor: 'end', lines: [text('可观测性', 40, 800, BLUE)] }] },
          sm: { blocks: [side(861, [text('销售与市场', 30, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] }, ga: { blocks: [side(1105, [text('一般及行政', 30, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        } },
      },
    },
  });
})();

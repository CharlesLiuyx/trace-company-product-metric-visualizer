/* Cisco Q3 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const TITLE = '#155077';
  const BLUE = '#00a2df';
  const BLUE_LINK = '#85cee9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#9c1200';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const BG = '#f2f2f2';

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
  const side = (top, lines, x = 2470, anchor = 'middle', lineGap = 6) => ({ x, top, anchor, lineGap, lines });
  const text = (value, size, weight = 800, color) => ({ text: value, size, weight, ...(color ? { color } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'cisco-q3-fy26',
    name: 'Cisco · Q3 FY26',
    company: 'Cisco',
    meta: {
      company: 'Cisco', title: 'Cisco Q3 FY26 Income Statement', period: 'Q3 FY26', periodNote: 'Ending Apr. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/cisco-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2048,
      periodX: 2411, periodY: 286, periodNoteY: 326,
      logoWidth: 600, logoHeight: 245, logoY: 247, logoViewBox: '0 0 600 245', logoSvg: ciscoLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, nodeRadius: 0, type: { name: 40, value: 39, note: 28, lineGap: 8 }, interfaceAudit: { mode: 'error' },
    },
    layout: {
      scale: 18.6,
      nodes: {
        networking: { x: 386, y: 509, width: 73, height: 160 }, security: { x: 386, y: 805, width: 73, height: 36 },
        collaboration: { x: 386, y: 961, width: 73, height: 16 }, observability: { x: 386, y: 1091, width: 73, height: 3 },
        products: { x: 759, y: 621, width: 73, height: 224 }, services: { x: 759, y: 1021, width: 73, height: 71 },
        revenue: { x: 1132, y: 693, width: 73, height: 295 }, gross_profit: { x: 1507, y: 617, width: 73, height: 188 },
        cost_of_sales: { x: 1507, y: 985, width: 73, height: 107 }, product_cost_of_sales: { x: 1702, y: 1047, width: 73, height: 86 },
        services_cost_of_sales: { x: 1702, y: 1224, width: 73, height: 21 }, operating_profit: { x: 1880, y: 535, width: 73, height: 74 },
        operating_expenses: { x: 1880, y: 772, width: 73, height: 114 }, net_profit: { x: 2253, y: 459, width: 73, height: 63 },
        tax: { x: 2253, y: 702, width: 73, height: 13 }, sm: { x: 2253, y: 874, width: 73, height: 53 },
        rnd: { x: 2253, y: 1032, width: 73, height: 44 }, ga: { x: 2253, y: 1184, width: 73, height: 14 }, amortization: { x: 2253, y: 1310, width: 73, height: 4 },
      },
      labels: {
        networking: { blocks: [above(422, 418, [text('$value', 39, 400, BLUE), text('+25% Y/Y', 28, 400, NOTE)]), { x: 350, top: 578, anchor: 'end', lines: [text('Networking', 40, 800, BLUE)] }] },
        security: { blocks: [above(422, 718, [text('$value', 39, 400, BLUE), text('(0%) Y/Y', 28, 400, NOTE)]), { x: 350, top: 816, anchor: 'end', lines: [text('Security', 40, 800, BLUE)] }] },
        collaboration: { blocks: [above(422, 871, [text('$value', 39, 400, BLUE), text('(1%) Y/Y', 28, 400, NOTE)]), { x: 350, top: 956, anchor: 'end', lines: [text('Collaboration', 40, 800, BLUE)] }] },
        observability: { blocks: [above(422, 1000, [text('$value', 39, 400, BLUE), text('+3% Y/Y', 28, 400, NOTE)]), { x: 350, top: 1082, anchor: 'end', lines: [text('Observability', 40, 800, BLUE)] }] },
        products: { blocks: [above(795, 477, [text('Products', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('+17% Y/Y', 28, 400, NOTE)])] },
        services: { blocks: [above(795, 1116, [text('Services', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('(1%) Y/Y', 28, 400, NOTE)])] },
        revenue: { blocks: [above(1169, 552, [text('Revenue', 40, 800, BLUE), text('$value', 39, 400, BLUE), text('+12% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [above(1544, 435, [text('Gross profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('64% margin', 28, 400, NOTE), text('(2pp) Y/Y', 28, 400, NOTE)])] },
        cost_of_sales: { blocks: [above(1544, 1115, [text('Cost of', 40, 800, RED_LABEL), text('sales', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        product_cost_of_sales: { blocks: [side(1058, [text('Products', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL), text('62% gross margin', 27, 400, NOTE)], 1835, 'start')] },
        services_cost_of_sales: { blocks: [side(1200, [text('Services', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL), text('69% gross margin', 27, 400, NOTE)], 1835, 'start')] },
        operating_profit: { blocks: [above(1917, 354, [text('Operating profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('25% margin', 28, 400, NOTE), text('+2pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [above(1917, 910, [text('Operating', 40, 800, RED_LABEL), text('expenses', 40, 800, RED_LABEL), text('$value', 39, 400, RED_LABEL)])] },
        net_profit: { blocks: [side(442, [text('Net profit', 40, 800, GREEN_LABEL), text('$value', 39, 400, GREEN_LABEL), text('21% margin', 28, 400, NOTE), text('+4pp Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [side(674, [text('Tax', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        sm: { blocks: [side(866, [text('S&M', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        rnd: { blocks: [side(1025, [text('R&D', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        ga: { blocks: [side(1178, [text('G&A', 34, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        amortization: { blocks: [side(1285, [text('Amortization', 32, 800, RED_LABEL), text('$value', 32, 400, RED_LABEL)])] },
      },
    },
    nodes: [
      { id: 'networking', col: 0, order: 0, type: 'source', label: 'Networking', value: 8.815, notes: ['+25% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'security', col: 0, order: 1, type: 'source', label: 'Security', value: 2.008, notes: ['(0%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'collaboration', col: 0, order: 2, type: 'source', label: 'Collaboration', value: 1.024, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'observability', col: 0, order: 3, type: 'source', label: 'Observability', value: 0.269, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 12.117, notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 3.724, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 15.841, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.080, notes: ['64% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 5.761 },
      { id: 'product_cost_of_sales', col: 4, order: 0, type: 'cost', label: 'Products', value: 4.613, notes: ['62% gross margin'] },
      { id: 'services_cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Services', value: 1.148, notes: ['69% gross margin'] },
      { id: 'operating_profit', col: 4, order: 2, type: 'profit', label: 'Operating profit', value: 3.960, notes: ['25% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 3, type: 'cost', label: ['Operating', 'expenses'], value: 6.120 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.373, notes: ['21% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.666 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 2.855 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 2.377 },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.661 },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.228 },
    ],
    links: [
      { source: 'networking', target: 'products', value: 8.815, width: 162, sourceWidth: 160, targetWidth: 162, sourceOrder: 0, targetOrder: 0 }, { source: 'security', target: 'products', value: 2.008, width: 37, sourceWidth: 36, targetWidth: 37, sourceOrder: 0, targetOrder: 1 },
      { source: 'collaboration', target: 'products', value: 1.024, width: 19, sourceWidth: 16, targetWidth: 19, sourceOrder: 0, targetOrder: 2 }, { source: 'observability', target: 'products', value: 0.269, width: 5, sourceWidth: 3, targetWidth: 5, sourceOrder: 0, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 12.117, width: 224, sourceOrder: 0, targetOrder: 0 }, { source: 'services', target: 'revenue', value: 3.724, width: 71, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 10.080, width: 186, sourceWidth: 187, targetWidth: 188, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'revenue', target: 'cost_of_sales', value: 5.761, width: 107, sourceWidth: 108, targetWidth: 107, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'product_cost_of_sales', value: 4.613, width: 86, sourceOrder: 0, targetOrder: 0 }, { source: 'cost_of_sales', target: 'services_cost_of_sales', value: 1.148, width: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.960, width: 74, sourceWidth: 72, targetWidth: 74, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'gross_profit', target: 'operating_expenses', value: 6.120, width: 114, sourceWidth: 116, targetWidth: 114, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.373, width: 63, sourceWidth: 61, targetWidth: 63, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK }, { source: 'operating_profit', target: 'tax', value: 0.666, width: 13, sourceWidth: 13, targetWidth: 13, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.855, width: 53, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_expenses', target: 'rnd', value: 2.377, width: 44, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.661, width: 12, targetWidth: 14, sourceOrder: 2, targetOrder: 0 }, { source: 'operating_expenses', target: 'amortization', value: 0.228, width: 4, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '思科 · 2026 财年第三季度', meta: { title: '思科 2026 财年第三季度利润表', period: '2026 财年第三季度', periodNote: '截至 2026 年 4 月', titleTextLength: 1780 },
        nodes: {
          networking: { label: '网络', notes: ['同比 +25%'] }, security: { label: '安全', notes: ['同比 (0%)'] }, collaboration: { label: '协作', notes: ['同比 (1%)'] }, observability: { label: '可观测性', notes: ['同比 +3%'] },
          products: { label: '产品', notes: ['同比 +17%'] }, services: { label: '服务', notes: ['同比 (1%)'] }, revenue: { label: '收入', notes: ['同比 +12%'] }, gross_profit: { label: '毛利润', notes: ['利润率 64%', '同比 (2 个百分点)'] },
          cost_of_sales: { label: ['销售', '成本'] }, product_cost_of_sales: { label: '产品', notes: ['毛利率 62%'] }, services_cost_of_sales: { label: '服务', notes: ['毛利率 69%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 25%', '同比 +2 个百分点'] }, operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +4 个百分点'] },
          tax: { label: '税费' }, sm: { label: '销售与市场' }, rnd: { label: '研发' }, ga: { label: '一般及行政' }, amortization: { label: '摊销' },
        },
        layout: { labels: {
          security: { blocks: [above(422, 718, [text('$value', 39, 400, BLUE), text('同比 (0%)', 28, 400, NOTE)]), { x: 350, top: 816, anchor: 'end', lines: [text('安全', 40, 800, BLUE)] }] },
          collaboration: { blocks: [above(422, 871, [text('$value', 39, 400, BLUE), text('同比 (1%)', 28, 400, NOTE)]), { x: 350, top: 956, anchor: 'end', lines: [text('协作', 40, 800, BLUE)] }] },
          observability: { blocks: [above(422, 1000, [text('$value', 39, 400, BLUE), text('同比 +3%', 28, 400, NOTE)]), { x: 350, top: 1082, anchor: 'end', lines: [text('可观测性', 40, 800, BLUE)] }] },
          sm: { blocks: [side(866, [text('销售与市场', 30, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] }, ga: { blocks: [side(1178, [text('一般及行政', 30, 800, RED_LABEL), text('$value', 34, 400, RED_LABEL)])] },
        } },
      },
    },
  });
})();

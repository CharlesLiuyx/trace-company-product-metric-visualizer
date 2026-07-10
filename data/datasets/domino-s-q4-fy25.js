/* Domino's Q4 FY25 income statement ($M), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#165580';
  const NOTE = '#666666';
  const BLUE = '#057ab8';
  const BLUE_LINK = '#87b9d6';
  const GREEN = '#2ca424';
  const GREEN_LABEL = '#009347';
  const GREEN_LINK = '#9cd39a';
  const RED = '#d90000';
  const RED_LABEL = '#a51600';
  const RED_LINK = '#e18587';
  const RIGHT_LABEL_X = 2465;

  const line = (text, size, options = {}) => ({
    text, size, weight: options.weight || 400, color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap == null ? 8 : options.lineGap, lines,
  });

  const dominoLogo = `
    <g transform="rotate(-45 128 128)">
      <rect x="38" y="38" width="180" height="180" rx="7" fill="#087abb"/>
      <path d="M128 38H218V218H128Z" fill="#ed1b2f" stroke="#f2f2f2" stroke-width="7"/>
      <circle cx="83" cy="83" r="15" fill="#f2f2f2"/>
      <circle cx="83" cy="163" r="15" fill="#f2f2f2"/>
      <circle cx="173" cy="83" r="15" fill="#f2f2f2"/>
    </g>
    <text x="132" y="250" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="18" font-weight="700" fill="#087abb">TM</text>`;

  const labels = {
    us_company_owned_stores_revenue: { blocks: [
      block(427, 313, [line('$value', 40), line('(10%) Y/Y', 29, { color: NOTE })]),
      block(206, 347, [line('US', 40, { weight: 800 }), line('company-owned', 40, { weight: 800 }), line('stores', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    us_franchise_royalties_fees: { blocks: [
      block(427, 483, [line('$value', 40), line('+9% Y/Y', 29, { color: NOTE })]),
      block(205, 553, [line('US franchise', 40, { weight: 800 }), line('royalties & fees', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    supply_chain_revenue: { blocks: [
      block(427, 675, [line('$value', 40), line('+7% Y/Y', 29, { color: NOTE })]),
      block(206, 828, [line('Supply chain', 40, { weight: 800 })]),
    ] },
    international_franchise: { blocks: [
      block(427, 1006, [line('$value', 40), line('+9% Y/Y', 29, { color: NOTE })]),
      block(207, 1065, [line('International', 40, { weight: 800 }), line('franchise', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    us_franchise_advertising_revenue: { blocks: [
      block(427, 1166, [line('$value', 40), line('+12% Y/Y', 29, { color: NOTE })]),
      block(207, 1230, [line('US franchise', 40, { weight: 800 }), line('advertising', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    revenue: { blocks: [block(895, 557, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+6% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1361, 414, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('40% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    cost_of_sales: { blocks: [block(1361, 1167, [line('Cost of', 40, { weight: 800 }), line('sales', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    supply_chain_cost: { blocks: [block(1818, 1046, [line('Supply chain', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    us_company_owned_stores_cost: { blocks: [block(1818, 1240, [line('US company-', 40, { weight: 800 }), line('owned stores', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1829, 297, [line('Operating profit', 40, { weight: 800 }), line('$value', 40), line('19% margin', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1829, 857, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    net_profit: { blocks: [block(2498, 313, [line('Net profit', 40, { weight: 800 }), line('$value', 40), line('12% margin', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    other: { blocks: [block(RIGHT_LABEL_X, 607, [line('Other', 34, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 727, [line('Tax', 34, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    us_franchise_advertising_cost: { blocks: [block(RIGHT_LABEL_X, 918, [line('US franchise', 34, { weight: 800 }), line('advertising', 34, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    general_administrative: { blocks: [block(RIGHT_LABEL_X, 1097, [line('General &', 34, { weight: 800 }), line('administrative', 34, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
  };

  const zhLabels = {
    us_company_owned_stores_revenue: { blocks: [block(427, 313, [line('$value', 40), line('同比 (10%)', 29, { color: NOTE })]), block(206, 374, [line('美国自营门店', 38, { weight: 800 })])] },
    us_franchise_royalties_fees: { blocks: [block(427, 483, [line('$value', 40), line('同比 +9%', 29, { color: NOTE })]), block(205, 568, [line('美国加盟商', 38, { weight: 800 }), line('权利金及费用', 38, { weight: 800 })])] },
    supply_chain_revenue: { blocks: [block(427, 675, [line('$value', 40), line('同比 +7%', 29, { color: NOTE })]), block(206, 839, [line('供应链', 40, { weight: 800 })])] },
    international_franchise: { blocks: [block(427, 1006, [line('$value', 40), line('同比 +9%', 29, { color: NOTE })]), block(207, 1080, [line('国际特许经营', 37, { weight: 800 })])] },
    us_franchise_advertising_revenue: { blocks: [block(427, 1166, [line('$value', 40), line('同比 +12%', 29, { color: NOTE })]), block(207, 1245, [line('美国加盟商广告', 36, { weight: 800 })])] },
    revenue: { blocks: [block(895, 559, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +6%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1361, 419, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 40%', 29, { color: NOTE }), line('同比 +1 个百分点', 27, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1361, 1182, [line('销售', 40, { weight: 800 }), line('成本', 40, { weight: 800 }), line('$value', 40)])] },
    supply_chain_cost: { blocks: [block(1818, 1062, [line('供应链', 40, { weight: 800 }), line('$value', 40)])] },
    us_company_owned_stores_cost: { blocks: [block(1818, 1256, [line('美国自营门店', 36, { weight: 800 }), line('$value', 40)])] },
    operating_profit: { blocks: [block(1829, 301, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 19%', 29, { color: NOTE }), line('同比 +0 个百分点', 27, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1829, 872, [line('运营费用', 40, { weight: 800 }), line('$value', 40)])] },
    net_profit: { blocks: [block(2498, 328, [line('净利润', 40, { weight: 800 }), line('$value', 40), line('利润率 12%', 29, { color: NOTE }), line('同比 +0 个百分点', 27, { color: NOTE })])] },
    other: { blocks: [block(RIGHT_LABEL_X, 612, [line('其他', 34, { weight: 800 }), line('$value', 34)])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 732, [line('税费', 34, { weight: 800 }), line('$value', 34)])] },
    us_franchise_advertising_cost: { blocks: [block(RIGHT_LABEL_X, 932, [line('美国加盟商广告', 32, { weight: 800 }), line('$value', 34)])] },
    general_administrative: { blocks: [block(RIGHT_LABEL_X, 1112, [line('一般及', 34, { weight: 800 }), line('行政', 34, { weight: 800 }), line('$value', 34)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'domino-s-q4-fy25',
    name: "Domino's · Q4 FY25",
    company: "Domino's",
    meta: {
      company: "Domino's", title: "Domino's Q4 FY25 Income Statement", period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 28, 2025', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/domino-s-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 124, titleWeight: 800, titleTextLength: 2340,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 258, logoHeight: 260, logoY: 258, logoViewBox: '0 0 256 260', logoSvg: dominoLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        us_company_owned_stores_revenue: { x: 390, y: 404, width: 74, height: 24 },
        us_franchise_royalties_fees: { x: 390, y: 575, width: 74, height: 45 },
        supply_chain_revenue: { x: 390, y: 764, width: 74, height: 200 },
        international_franchise: { x: 390, y: 1095, width: 74, height: 23 },
        us_franchise_advertising_revenue: { x: 390, y: 1254, width: 74, height: 41 },
        revenue: { x: 858, y: 696, width: 74, height: 327 },
        gross_profit: { x: 1325, y: 591, width: 72, height: 130 },
        cost_of_sales: { x: 1325, y: 945, width: 72, height: 199 },
        supply_chain_cost: { x: 1605, y: 990, width: 72, height: 177 },
        us_company_owned_stores_cost: { x: 1605, y: 1283, width: 72, height: 21 },
        operating_profit: { x: 1793, y: 473, width: 72, height: 63 },
        operating_expenses: { x: 1793, y: 768, width: 72, height: 66 },
        net_profit: { x: 2260, y: 360, width: 73, height: 39 },
        other: { x: 2260, y: 631, width: 73, height: 15 },
        tax: { x: 2260, y: 754, width: 73, height: 11 },
        us_franchise_advertising_cost: { x: 2260, y: 955, width: 73, height: 36 },
        general_administrative: { x: 2260, y: 1135, width: 73, height: 30 },
      },
      labels,
    },
    nodes: [
      { id: 'us_company_owned_stores_revenue', col: 0, order: 0, type: 'source', label: ['US', 'company-owned', 'stores'], value: 108, notes: ['(10%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'us_franchise_royalties_fees', col: 0, order: 1, type: 'source', label: ['US franchise', 'royalties & fees'], value: 213, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'supply_chain_revenue', col: 0, order: 2, type: 'source', label: 'Supply chain', value: 936, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'international_franchise', col: 0, order: 3, type: 'source', label: ['International', 'franchise'], value: 107, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'us_franchise_advertising_revenue', col: 0, order: 4, type: 'source', label: ['US franchise', 'advertising'], value: 172, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1536, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 610, notes: ['40% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 926, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'supply_chain_cost', col: 3, order: 1, type: 'cost', label: 'Supply chain', value: 829, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'us_company_owned_stores_cost', col: 3, order: 2, type: 'cost', label: ['US company-', 'owned stores'], value: 97, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 296, notes: ['19% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 3, type: 'cost', label: ['Operating', 'expenses'], value: 314, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 182, notes: ['12% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 65, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 49, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'us_franchise_advertising_cost', col: 4, order: 3, type: 'cost', label: ['US franchise', 'advertising'], value: 172, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 4, order: 4, type: 'cost', label: ['General &', 'administrative'], value: 142, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'us_company_owned_stores_revenue', target: 'revenue', value: 108, sourceWidth: 24, targetWidth: 24, y0: 416, y1: 708, sourceOrder: 0, targetOrder: 0 },
      { source: 'us_franchise_royalties_fees', target: 'revenue', value: 213, sourceWidth: 45, targetWidth: 45, y0: 597.5, y1: 742.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'supply_chain_revenue', target: 'revenue', value: 936, sourceWidth: 200, targetWidth: 200, y0: 864, y1: 865, sourceOrder: 0, targetOrder: 2 },
      { source: 'international_franchise', target: 'revenue', value: 107, sourceWidth: 23, targetWidth: 23, y0: 1106.5, y1: 976.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'us_franchise_advertising_revenue', target: 'revenue', value: 172, sourceWidth: 39, targetWidth: 41, y0: 1273.5, y1: 1002.5, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 610, sourceWidth: 130, targetWidth: 130, y0: 761, y1: 656, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 926, sourceWidth: 197, targetWidth: 199, y0: 924.5, y1: 1044.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 296, sourceWidth: 63, targetWidth: 63, y0: 622.5, y1: 504.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 314, sourceWidth: 67, targetWidth: 66, y0: 687.5, y1: 801, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'supply_chain_cost', value: 829, sourceWidth: 178, targetWidth: 177, y0: 1034, y1: 1078.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'us_company_owned_stores_cost', value: 97, sourceWidth: 21, targetWidth: 21, y0: 1133.5, y1: 1293.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 182, sourceWidth: 39, targetWidth: 39, y0: 492.5, y1: 379.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 65, sourceWidth: 14, targetWidth: 15, y0: 519, y1: 638.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 49, sourceWidth: 10, targetWidth: 11, y0: 531, y1: 759.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'us_franchise_advertising_cost', value: 172, sourceWidth: 36, targetWidth: 36, y0: 786, y1: 973, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 142, sourceWidth: 30, targetWidth: 30, y0: 819, y1: 1150, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '达美乐 · 2025 财年第四季度',
        meta: { title: '达美乐 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月 28 日的季度', titleSize: 110, titleTextLength: 1500 },
        nodes: {
          us_company_owned_stores_revenue: { label: '美国自营门店', notes: ['同比 (10%)'] },
          us_franchise_royalties_fees: { label: '美国加盟商权利金及费用', notes: ['同比 +9%'] },
          supply_chain_revenue: { label: '供应链', notes: ['同比 +7%'] },
          international_franchise: { label: '国际特许经营', notes: ['同比 +9%'] },
          us_franchise_advertising_revenue: { label: '美国加盟商广告', notes: ['同比 +12%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] }, gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' }, supply_chain_cost: { label: '供应链' }, us_company_owned_stores_cost: { label: '美国自营门店' },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 +0 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +0 个百分点'] }, other: { label: '其他' }, tax: { label: '税费' },
          us_franchise_advertising_cost: { label: '美国加盟商广告' }, general_administrative: { label: '一般及行政' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* Domino's Q2 FY26 income statement ($M), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#0074ad';
  const BLUE_LINK = '#85b8d3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GAIN_LABEL = '#038f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

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

  const otherGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other"
      data-link-numerator="other"
      data-link-denominator="operating_expenses"
      data-link-anchor-x="1683"
      data-link-anchor-y="841">
      <path d="M1575 850H1669C1715 850 1721 832 1791 832"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="1612" y="901" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GAIN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="1612" y="942" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GAIN_LABEL}">$4M</text>
    </g>`;

  const labels = {
    us_company_owned_stores_revenue: { blocks: [
      block(427, 318, [line('$value', 40), line('(11%) Y/Y', 29, { color: NOTE })]),
      block(206, 347, [line('US', 40, { weight: 800 }), line('company-owned', 40, { weight: 800 }), line('stores', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    us_franchise_royalties_fees: { blocks: [
      block(427, 490, [line('$value', 40), line('+5% Y/Y', 29, { color: NOTE })]),
      block(195, 552, [line('US franchise', 40, { weight: 800 }), line('royalties & fees', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    supply_chain_revenue: { blocks: [
      block(427, 670, [line('$value', 40), line('+6% Y/Y', 29, { color: NOTE })]),
      block(206, 841, [line('Supply chain', 40, { weight: 800 })]),
    ] },
    international_franchise: { blocks: [
      block(427, 1008, [line('$value', 40), line('+6% Y/Y', 29, { color: NOTE })]),
      block(207, 1074, [line('International', 40, { weight: 800 }), line('franchise', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    us_franchise_advertising_revenue: { blocks: [
      block(427, 1167, [line('$value', 40), line('+2% Y/Y', 29, { color: NOTE })]),
      block(207, 1242, [line('US franchise', 40, { weight: 800 }), line('advertising', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    revenue: { blocks: [block(895, 544, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+4% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1358, 392, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('40% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    cost_of_sales: { blocks: [block(1352, 1159, [line('Cost of', 40, { weight: 800 }), line('sales', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    supply_chain_cost: { blocks: [block(1779, 1051, [line('Supply chain', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    us_company_owned_stores_cost: { blocks: [block(1780, 1205, [line('US company-', 40, { weight: 800 }), line('owned stores', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1829, 303, [line('Operating profit', 40, { weight: 800 }), line('$value', 40), line('19% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1824, 845, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    net_profit: { blocks: [block(2449, 337, [line('Net profit', 40, { weight: 800 }), line('$value', 40), line('11% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    interest: { blocks: [block(2450, 608, [line('Interest', 34, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    tax: { blocks: [block(2452, 706, [line('Tax', 34, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    us_franchise_advertising_cost: { blocks: [block(2454, 931, [line('US franchise', 34, { weight: 800 }), line('advertising', 34, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    general_administrative: { blocks: [block(2459, 1172, [line('General &', 34, { weight: 800 }), line('administrative', 34, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
  };

  const zhLabels = {
    us_company_owned_stores_revenue: { blocks: [block(427, 318, [line('$value', 40), line('同比 (11%)', 29, { color: NOTE })]), block(206, 399, [line('美国自营门店', 38, { weight: 800 })])] },
    us_franchise_royalties_fees: { blocks: [block(427, 471, [line('$value', 40), line('同比 +5%', 29, { color: NOTE })]), block(205, 557, [line('美国加盟商', 38, { weight: 800 }), line('权利金及费用', 38, { weight: 800 })])] },
    supply_chain_revenue: { blocks: [block(427, 670, [line('$value', 40), line('同比 +6%', 29, { color: NOTE })]), block(206, 840, [line('供应链', 40, { weight: 800 })])] },
    international_franchise: { blocks: [block(427, 1008, [line('$value', 40), line('同比 +6%', 29, { color: NOTE })]), block(207, 1098, [line('国际特许经营', 37, { weight: 800 })])] },
    us_franchise_advertising_revenue: { blocks: [block(427, 1167, [line('$value', 40), line('同比 +2%', 29, { color: NOTE })]), block(207, 1269, [line('美国加盟商广告', 36, { weight: 800 })])] },
    revenue: { blocks: [block(895, 546, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +4%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1358, 397, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 40%', 29, { color: NOTE }), line('同比 (0 个百分点)', 27, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1352, 1187, [line('销售', 40, { weight: 800 }), line('成本', 40, { weight: 800 }), line('$value', 40)])] },
    supply_chain_cost: { blocks: [block(1789, 1079, [line('供应链', 40, { weight: 800 }), line('$value', 40)])] },
    us_company_owned_stores_cost: { blocks: [block(1787, 1235, [line('美国自营门店', 36, { weight: 800 }), line('$value', 40)])] },
    operating_profit: { blocks: [block(1829, 307, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 19%', 29, { color: NOTE }), line('同比 (0 个百分点)', 27, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1824, 876, [line('运营费用', 40, { weight: 800 }), line('$value', 40)])] },
    net_profit: { blocks: [block(2487, 352, [line('净利润', 40, { weight: 800 }), line('$value', 40), line('利润率 11%', 29, { color: NOTE }), line('同比 (0 个百分点)', 27, { color: NOTE })])] },
    interest: { blocks: [block(2450, 623, [line('利息', 34, { weight: 800 }), line('$value', 34)])] },
    tax: { blocks: [block(2452, 722, [line('税费', 34, { weight: 800 }), line('$value', 34)])] },
    us_franchise_advertising_cost: { blocks: [block(2454, 953, [line('美国加盟商广告', 32, { weight: 800 }), line('$value', 34)])] },
    general_administrative: { blocks: [block(2459, 1195, [line('一般及', 34, { weight: 800 }), line('行政', 34, { weight: 800 }), line('$value', 34)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'domino-s-q2-fy26',
    name: "Domino's · Q2 FY26",
    company: "Domino's",
    meta: {
      company: "Domino's", title: "Domino's Q2 FY26 Income Statement", period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 14, 2026', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/domino-s-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 124, titleWeight: 800, titleTextLength: 2340,
      hidePeriodStamp: true,
      logoWidth: 258, logoHeight: 260, logoY: 258, logoViewBox: '0 0 256 260', logoSvg: dominoLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherGuide(false),
    layout: {
      scale: 1,
      routes: { other: { x: 1575, y: 850, width: 0, height: 1 } },
      nodes: {
        us_company_owned_stores_revenue: { x: 389, y: 410, width: 71, height: 23 },
        us_franchise_royalties_fees: { x: 389, y: 578, width: 71, height: 46 },
        supply_chain_revenue: { x: 389, y: 759, width: 71, height: 210 },
        international_franchise: { x: 389, y: 1111, width: 71, height: 21 },
        us_franchise_advertising_revenue: { x: 389, y: 1269, width: 71, height: 38 },
        revenue: { x: 856, y: 690, width: 70, height: 344 },
        gross_profit: { x: 1323, y: 569, width: 71, height: 136 },
        cost_of_sales: { x: 1323, y: 942, width: 71, height: 206 },
        supply_chain_cost: { x: 1576, y: 1005, width: 70, height: 186 },
        us_company_owned_stores_cost: { x: 1573, y: 1267, width: 70, height: 19 },
        operating_profit: { x: 1791, y: 479, width: 70, height: 65 },
        operating_expenses: { x: 1791, y: 762, width: 70, height: 71 },
        net_profit: { x: 2257, y: 368, width: 71, height: 37 },
        interest: { x: 2257, y: 641, width: 71, height: 14 },
        tax: { x: 2257, y: 740, width: 71, height: 9 },
        us_franchise_advertising_cost: { x: 2257, y: 969, width: 71, height: 36 },
        general_administrative: { x: 2257, y: 1222, width: 71, height: 31 },
      },
      labels: { ...labels, other: { blocks: [] } },
    },
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other', value: 4, type: 'profit', labelColor: GAIN_LABEL },
    ],
    nodes: [
      { id: 'us_company_owned_stores_revenue', col: 0, order: 0, type: 'source', label: ['US', 'company-owned', 'stores'], value: 82, notes: ['(11%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'us_franchise_royalties_fees', col: 0, order: 1, type: 'source', label: ['US franchise', 'royalties & fees'], value: 164, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'supply_chain_revenue', col: 0, order: 2, type: 'source', label: 'Supply chain', value: 732, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'international_franchise', col: 0, order: 3, type: 'source', label: ['International', 'franchise'], value: 82, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'us_franchise_advertising_revenue', col: 0, order: 4, type: 'source', label: ['US franchise', 'advertising'], value: 135, notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1194, notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 478, notes: ['40% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 716, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'supply_chain_cost', col: 3, order: 1, type: 'cost', label: 'Supply chain', value: 644, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'us_company_owned_stores_cost', col: 3, order: 2, type: 'cost', label: ['US company-', 'owned stores'], value: 73, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 232, notes: ['19% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 3, type: 'cost', label: ['Operating', 'expenses'], value: 246, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 136, notes: ['11% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'cost', label: 'Interest', value: 57, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 39, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'us_franchise_advertising_cost', col: 4, order: 3, type: 'cost', label: ['US franchise', 'advertising'], value: 135, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 4, order: 4, type: 'cost', label: ['General &', 'administrative'], value: 115, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'us_company_owned_stores_revenue', target: 'revenue', value: 82, sourceWidth: 23, targetWidth: 24, y0: 421.5, y1: 702, sourceOrder: 0, targetOrder: 0 },
      { source: 'us_franchise_royalties_fees', target: 'revenue', value: 164, sourceWidth: 46, targetWidth: 47, y0: 601, y1: 737.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'supply_chain_revenue', target: 'revenue', value: 732, sourceWidth: 210, targetWidth: 211, y0: 864, y1: 866.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'international_franchise', target: 'revenue', value: 82, sourceWidth: 21, targetWidth: 24, y0: 1121.5, y1: 984, sourceOrder: 0, targetOrder: 3 },
      { source: 'us_franchise_advertising_revenue', target: 'revenue', value: 135, sourceWidth: 38, targetWidth: 38, y0: 1288, y1: 1015, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 478, sourceWidth: 138, targetWidth: 136, y0: 759, y1: 637, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 716, sourceWidth: 206, targetWidth: 206, y0: 931, y1: 1045, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'supply_chain_cost', value: 644, sourceWidth: 186, targetWidth: 186, y0: 1035, y1: 1098, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'us_company_owned_stores_cost', value: 73, sourceWidth: 20, targetWidth: 19, y0: 1138, y1: 1276.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 232, sourceWidth: 65, targetWidth: 65, y0: 601.5, y1: 511.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 246, sourceWidth: 70, targetWidth: 71, y0: 670, y1: 797.5, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'other', target: 'operating_expenses', value: 4, sourceWidth: 2, targetWidth: 2, y0: 850, y1: 832, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 136, sourceWidth: 40, targetWidth: 37, y0: 499, y1: 386.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 57, sourceWidth: 14, targetWidth: 14, y0: 526, y1: 648, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 39, sourceWidth: 11, targetWidth: 9, y0: 538.5, y1: 744.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'us_franchise_advertising_cost', value: 135, sourceWidth: 40, targetWidth: 36, y0: 782, y1: 987, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 115, sourceWidth: 31, targetWidth: 31, y0: 817.5, y1: 1237.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '达美乐 · 2026 财年第二季度',
        meta: { title: '达美乐 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月 14 日的季度', titleSize: 110, titleTextLength: 1500 },
        annotationsSvg: otherGuide(true),
        nonNodeMetrics: { other: { label: '其他' } },
        nodes: {
          us_company_owned_stores_revenue: { label: '美国自营门店', notes: ['同比 (11%)'] },
          us_franchise_royalties_fees: { label: '美国加盟商权利金及费用', notes: ['同比 +5%'] },
          supply_chain_revenue: { label: '供应链', notes: ['同比 +6%'] },
          international_franchise: { label: '国际特许经营', notes: ['同比 +6%'] },
          us_franchise_advertising_revenue: { label: '美国加盟商广告', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 +4%'] }, gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: '销售成本' }, supply_chain_cost: { label: '供应链' }, us_company_owned_stores_cost: { label: '美国自营门店' },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 (0 个百分点)'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (0 个百分点)'] }, interest: { label: '利息' }, tax: { label: '税费' },
          us_franchise_advertising_cost: { label: '美国加盟商广告' }, general_administrative: { label: '一般及行政' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* Domino's Q1 FY26 income statement ($M), measured from the processed reference. */
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

  const gainsGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="gains"
      data-link-numerator="gains"
      data-link-denominator="operating_expenses"
      data-link-anchor-x="1692"
      data-link-anchor-y="839">
      <path d="M1591 852H1686C1732 852 1738 827 1794 827"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="1632" y="899" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GAIN_LABEL}">${zh ? '收益' : 'Gains'}</text>
      <text x="1632" y="940" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GAIN_LABEL}">$8M</text>
    </g>`;

  const labels = {
    us_company_owned_stores_revenue: { blocks: [
      block(427, 318, [line('$value', 40), line('(10%) Y/Y', 29, { color: NOTE })]),
      block(206, 354, [line('US', 40, { weight: 800 }), line('company-owned', 40, { weight: 800 }), line('stores', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    us_franchise_royalties_fees: { blocks: [
      block(427, 495, [line('$value', 40), line('+5% Y/Y', 29, { color: NOTE })]),
      block(195, 552, [line('US franchise', 40, { weight: 800 }), line('royalties & fees', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    supply_chain_revenue: { blocks: [
      block(427, 674, [line('$value', 40), line('+4% Y/Y', 29, { color: NOTE })]),
      block(206, 830, [line('Supply chain', 40, { weight: 800 })]),
    ] },
    international_franchise: { blocks: [
      block(427, 1001, [line('$value', 40), line('+7% Y/Y', 29, { color: NOTE })]),
      block(207, 1067, [line('International', 40, { weight: 800 }), line('franchise', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    us_franchise_advertising_revenue: { blocks: [
      block(427, 1164, [line('$value', 40), line('+5% Y/Y', 29, { color: NOTE })]),
      block(207, 1233, [line('US franchise', 40, { weight: 800 }), line('advertising', 40, { weight: 800 })], { lineGap: 10 }),
    ] },
    revenue: { blocks: [block(895, 556, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+3% Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1361, 405, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('40% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    cost_of_sales: { blocks: [block(1361, 1126, [line('Cost of', 40, { weight: 800 }), line('sales', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    supply_chain_cost: { blocks: [block(1808, 1058, [line('Supply chain', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    us_company_owned_stores_cost: { blocks: [block(1811, 1214, [line('US company-', 40, { weight: 800 }), line('owned stores', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    operating_profit: { blocks: [block(1829, 301, [line('Operating profit', 40, { weight: 800 }), line('$value', 40), line('20% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    operating_expenses: { blocks: [block(1829, 839, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 40)], { lineGap: 10 })] },
    net_profit: { blocks: [block(2460, 329, [line('Net profit', 40, { weight: 800 }), line('$value', 40), line('12% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    other: { blocks: [block(RIGHT_LABEL_X, 577, [line('Other', 34, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 696, [line('Tax', 34, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    us_franchise_advertising_cost: { blocks: [block(RIGHT_LABEL_X, 907, [line('US franchise', 34, { weight: 800 }), line('advertising', 34, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    general_administrative: { blocks: [block(RIGHT_LABEL_X, 1079, [line('General &', 34, { weight: 800 }), line('administrative', 34, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
  };

  const zhLabels = {
    us_company_owned_stores_revenue: { blocks: [block(427, 318, [line('$value', 40), line('同比 (10%)', 29, { color: NOTE })]), block(206, 374, [line('美国自营门店', 38, { weight: 800 })])] },
    us_franchise_royalties_fees: { blocks: [block(427, 476, [line('$value', 40), line('同比 +5%', 29, { color: NOTE })]), block(205, 557, [line('美国加盟商', 38, { weight: 800 }), line('权利金及费用', 38, { weight: 800 })])] },
    supply_chain_revenue: { blocks: [block(427, 674, [line('$value', 40), line('同比 +4%', 29, { color: NOTE })]), block(206, 838, [line('供应链', 40, { weight: 800 })])] },
    international_franchise: { blocks: [block(427, 1001, [line('$value', 40), line('同比 +7%', 29, { color: NOTE })]), block(207, 1091, [line('国际特许经营', 37, { weight: 800 })])] },
    us_franchise_advertising_revenue: { blocks: [block(427, 1164, [line('$value', 40), line('同比 +5%', 29, { color: NOTE })]), block(207, 1257, [line('美国加盟商广告', 36, { weight: 800 })])] },
    revenue: { blocks: [block(895, 558, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +3%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1361, 410, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 40%', 29, { color: NOTE }), line('同比 +1 个百分点', 27, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1361, 1154, [line('销售', 40, { weight: 800 }), line('成本', 40, { weight: 800 }), line('$value', 40)])] },
    supply_chain_cost: { blocks: [block(1818, 1086, [line('供应链', 40, { weight: 800 }), line('$value', 40)])] },
    us_company_owned_stores_cost: { blocks: [block(1818, 1244, [line('美国自营门店', 36, { weight: 800 }), line('$value', 40)])] },
    operating_profit: { blocks: [block(1829, 305, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 20%', 29, { color: NOTE }), line('同比 +1 个百分点', 27, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1829, 870, [line('运营费用', 40, { weight: 800 }), line('$value', 40)])] },
    net_profit: { blocks: [block(2498, 344, [line('净利润', 40, { weight: 800 }), line('$value', 40), line('利润率 12%', 29, { color: NOTE }), line('同比 (1 个百分点)', 27, { color: NOTE })])] },
    other: { blocks: [block(RIGHT_LABEL_X, 592, [line('其他', 34, { weight: 800 }), line('$value', 34)])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 712, [line('税费', 34, { weight: 800 }), line('$value', 34)])] },
    us_franchise_advertising_cost: { blocks: [block(RIGHT_LABEL_X, 929, [line('美国加盟商广告', 32, { weight: 800 }), line('$value', 34)])] },
    general_administrative: { blocks: [block(RIGHT_LABEL_X, 1102, [line('一般及', 34, { weight: 800 }), line('行政', 34, { weight: 800 }), line('$value', 34)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'domino-s-q1-fy26',
    name: "Domino's · Q1 FY26",
    company: "Domino's",
    meta: {
      company: "Domino's", title: "Domino's Q1 FY26 Income Statement", period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 22, 2026', currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/domino-s-q1-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: gainsGuide(false),
    layout: {
      scale: 1,
      routes: { gains: { x: 1591, y: 852, width: 0, height: 1 } },
      nodes: {
        us_company_owned_stores_revenue: { x: 392, y: 424, width: 71, height: 8 },
        us_franchise_royalties_fees: { x: 392, y: 583, width: 71, height: 41 },
        supply_chain_revenue: { x: 392, y: 763, width: 71, height: 191 },
        international_franchise: { x: 392, y: 1103, width: 71, height: 20 },
        us_franchise_advertising_revenue: { x: 392, y: 1262, width: 71, height: 34 },
        revenue: { x: 859, y: 700, width: 70, height: 317 },
        gross_profit: { x: 1326, y: 582, width: 71, height: 126 },
        cost_of_sales: { x: 1326, y: 927, width: 71, height: 189 },
        supply_chain_cost: { x: 1609, y: 1014, width: 70, height: 169 },
        us_company_owned_stores_cost: { x: 1609, y: 1271, width: 70, height: 19 },
        operating_profit: { x: 1794, y: 477, width: 70, height: 62 },
        operating_expenses: { x: 1794, y: 762, width: 70, height: 65 },
        net_profit: { x: 2260, y: 355, width: 71, height: 37 },
        other: { x: 2260, y: 612, width: 71, height: 11 },
        tax: { x: 2260, y: 730, width: 71, height: 9 },
        us_franchise_advertising_cost: { x: 2260, y: 952, width: 71, height: 34 },
        general_administrative: { x: 2260, y: 1125, width: 71, height: 28 },
      },
      labels: { ...labels, gains: { blocks: [] } },
    },
    nonNodeMetrics: [
      { id: 'gains', representation: 'flow', label: 'Gains', value: 8, type: 'profit', labelColor: GAIN_LABEL },
    ],
    nodes: [
      { id: 'us_company_owned_stores_revenue', col: 0, order: 0, type: 'source', label: ['US', 'company-owned', 'stores'], value: 82, notes: ['(10%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'us_franchise_royalties_fees', col: 0, order: 1, type: 'source', label: ['US franchise', 'royalties & fees'], value: 158, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'supply_chain_revenue', col: 0, order: 2, type: 'source', label: 'Supply chain', value: 699, notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'international_franchise', col: 0, order: 3, type: 'source', label: ['International', 'franchise'], value: 81, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'us_franchise_advertising_revenue', col: 0, order: 4, type: 'source', label: ['US franchise', 'advertising'], value: 131, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1151, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 465, notes: ['40% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 686, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'supply_chain_cost', col: 3, order: 1, type: 'cost', label: 'Supply chain', value: 614, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'us_company_owned_stores_cost', col: 3, order: 2, type: 'cost', label: ['US company-', 'owned stores'], value: 72, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 230, notes: ['20% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 3, type: 'cost', label: ['Operating', 'expenses'], value: 242, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 140, notes: ['12% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 50, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 41, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'us_franchise_advertising_cost', col: 4, order: 3, type: 'cost', label: ['US franchise', 'advertising'], value: 131, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 4, order: 4, type: 'cost', label: ['General &', 'administrative'], value: 111, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'us_company_owned_stores_revenue', target: 'revenue', value: 82, sourceWidth: 8, targetWidth: 23, y0: 428, y1: 711.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'us_franchise_royalties_fees', target: 'revenue', value: 158, sourceWidth: 41, targetWidth: 44, y0: 603.5, y1: 745, sourceOrder: 0, targetOrder: 1 },
      { source: 'supply_chain_revenue', target: 'revenue', value: 699, sourceWidth: 191, targetWidth: 192, y0: 858.5, y1: 863, sourceOrder: 0, targetOrder: 2 },
      { source: 'international_franchise', target: 'revenue', value: 81, sourceWidth: 20, targetWidth: 22, y0: 1113, y1: 970, sourceOrder: 0, targetOrder: 3 },
      { source: 'us_franchise_advertising_revenue', target: 'revenue', value: 131, sourceWidth: 34, targetWidth: 36, y0: 1279, y1: 999, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 465, sourceWidth: 129, targetWidth: 126, y0: 764.5, y1: 645, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 686, sourceWidth: 188, targetWidth: 189, y0: 923, y1: 1021.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'supply_chain_cost', value: 614, sourceWidth: 169, targetWidth: 169, y0: 1011.5, y1: 1098.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_sales', target: 'us_company_owned_stores_cost', value: 72, sourceWidth: 20, targetWidth: 19, y0: 1106, y1: 1280.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 230, sourceWidth: 63, targetWidth: 62, y0: 613.5, y1: 508, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 235, sourceWidth: 63, targetWidth: 65, y0: 676.5, y1: 794.5, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'gains', target: 'operating_expenses', value: 8, sourceWidth: 2, targetWidth: 2, y0: 852, y1: 826, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 140, sourceWidth: 38, targetWidth: 37, y0: 496, y1: 373.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 50, sourceWidth: 13, targetWidth: 11, y0: 521.5, y1: 617.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 41, sourceWidth: 11, targetWidth: 9, y0: 533.5, y1: 734.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'us_franchise_advertising_cost', value: 131, sourceWidth: 36, targetWidth: 34, y0: 780, y1: 969, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 111, sourceWidth: 29, targetWidth: 28, y0: 812.5, y1: 1139, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '达美乐 · 2026 财年第一季度',
        meta: { title: '达美乐 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 22 日的季度', titleSize: 110, titleTextLength: 1500 },
        annotationsSvg: gainsGuide(true),
        nonNodeMetrics: { gains: { label: '收益' } },
        nodes: {
          us_company_owned_stores_revenue: { label: '美国自营门店', notes: ['同比 (10%)'] },
          us_franchise_royalties_fees: { label: '美国加盟商权利金及费用', notes: ['同比 +5%'] },
          supply_chain_revenue: { label: '供应链', notes: ['同比 +4%'] },
          international_franchise: { label: '国际特许经营', notes: ['同比 +7%'] },
          us_franchise_advertising_revenue: { label: '美国加盟商广告', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +3%'] }, gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' }, supply_chain_cost: { label: '供应链' }, us_company_owned_stores_cost: { label: '美国自营门店' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 +1 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 (1 个百分点)'] }, other: { label: '其他' }, tax: { label: '税费' },
          us_franchise_advertising_cost: { label: '美国加盟商广告' }, general_administrative: { label: '一般及行政' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

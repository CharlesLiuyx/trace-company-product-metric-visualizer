/* ====================================================================
 * UnitedHealth Group - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/unitedhealth-q4-fy25.png as a fixed
 * d3-sankey layout. The source is a direct operating waterfall: four
 * revenue streams feed Revenue, then Operating profit and Operating
 * expenses; profit divides into Net profit and Other. Gross profit,
 * cost-of-revenue, and tax are zero-valued SSOT-parity nodes kept off-canvas
 * because the source does not show separate bars for them.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NAVY = '#1e3d6a';
  const NAVY_LINK = '#93a0b4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const CARD_NAVY = '#002577';
  const CARD_ORANGE = '#ff612b';
  const RIGHT_X = 2472;

  const wordmark = (parts) => `
    <g font-family="Montserrat,Arial,sans-serif" font-weight="800" fill="${NAVY}" data-typography-role="brand"
       text-anchor="middle" letter-spacing="1">
      <text x="990" y="349">
        <tspan font-size="102">${parts[0]}</tspan><tspan font-size="76">${parts[1]}</tspan><tspan font-size="102">${parts[2]}</tspan><tspan font-size="76">${parts[3]}</tspan>
      </text>
    </g>`;

  const uhcShield = `
    <g fill="none" stroke="${NAVY}" stroke-width="9">
      <path d="M52 1176 v22 a20 20 0 0 0 40 0 v-22"/>
      <path d="M70 1176 v22 a20 20 0 0 0 40 0 v-22"/>
      <path d="M88 1176 v22 a20 20 0 0 0 40 0 v-22"/>
      <path d="M106 1176 v22 a20 20 0 0 0 40 0 v-22"/>
    </g>`;

  const segmentCard = (x, width, fill, revenue, margin) => `
    <g>
      <rect x="${x}" y="1230" width="${width}" height="106" rx="29" fill="${fill}"/>
      <text x="${x + width / 2}" y="1272" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${revenue}</text>
      <text x="${x + width / 2}" y="1308" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${margin}</text>
    </g>`;

  const annotations = (uhcRevenue, uhcMargin, optumRevenue, optumMargin) => `
    ${wordmark(['U', 'NITED', 'H', 'EALTH'])}
    <g font-family="Montserrat,Arial,sans-serif">
      <g data-typography-role="brand">
        ${uhcShield}
        <text x="182" y="1179" font-family="Georgia,'Times New Roman',serif" font-size="34" font-weight="700" fill="${NAVY}">United</text>
        <text x="182" y="1214" font-family="Georgia,'Times New Roman',serif" font-size="34" font-weight="700" fill="${NAVY}">Healthcare</text>
      </g>
      <text x="521" y="1211" font-size="50" font-weight="800" fill="${CARD_ORANGE}" data-typography-role="brand">Optum</text>
      ${segmentCard(28, 465, CARD_NAVY, uhcRevenue, uhcMargin)}
      ${segmentCard(500, 466, CARD_ORANGE, optumRevenue, optumMargin)}
    </g>`;

  const englishLabels = {
    premiums: { blocks: [
      { x: 399, top: 258, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: '+16% Y/Y', size: 30, color: NOTE }] },
      { x: 316, top: 451, anchor: 'end', lines: [{ text: 'Premiums', size: 40, weight: 700 }] },
    ] },
    products: { blocks: [
      { x: 399, top: 667, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: '+0% Y/Y', size: 30, color: NOTE }] },
      { x: 316, top: 734, anchor: 'end', lines: [{ text: 'Products', size: 40, weight: 700 }] },
    ] },
    services: { blocks: [
      { x: 399, top: 842, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: '+10% Y/Y', size: 30, color: NOTE }] },
      { x: 316, top: 896, anchor: 'end', lines: [{ text: 'Services', size: 40, weight: 700 }] },
    ] },
    investments_other: { blocks: [
      { x: 399, top: 1007, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: '(58%) Y/Y', size: 30, color: NOTE }] },
      { x: 316, top: 1011, anchor: 'end', lineGap: 9, lines: [{ text: 'Investments', size: 40, weight: 700 }, { text: '& Other', size: 40, weight: 700 }] },
    ] },
    revenue: { blocks: [
      { x: 1021, top: 412, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '+12% Y/Y', size: 30, color: NOTE }] },
    ] },
    operating_profit: { blocks: [
      { x: 1645, top: 266, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '0% margin', size: 30, color: NOTE }, { text: '(7pp) Y/Y', size: 30, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [
      { x: 1645, top: 1038, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 40, weight: 700 }, { text: 'expenses', size: 40, weight: 700 }, { text: '$value', size: 40 }] },
    ] },
    net_profit: { blocks: [
      { x: 2379, top: 277, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '0% margin', size: 30, color: NOTE }, { text: '(6pp) Y/Y', size: 30, color: NOTE }] },
    ] },
    other: { blocks: [
      { x: RIGHT_X, top: 538, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    medical_costs: { blocks: [
      { x: RIGHT_X, top: 822, anchor: 'middle', lineGap: 8, lines: [{ text: 'Medical costs', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    operational_costs: { blocks: [
      { x: RIGHT_X, top: 1037, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operational costs', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    cost_of_product_sold: { blocks: [
      { x: RIGHT_X, top: 1176, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of product sold', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    da: { blocks: [
      { x: RIGHT_X, top: 1290, anchor: 'middle', lineGap: 8, lines: [{ text: 'D&A', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    // SSOT-parity nodes are intentionally outside the source chart and must
    // not generate off-canvas labels in a text-layout evidence run.
    cost_of_revenue: { blocks: [] },
    gross_profit: { blocks: [] },
    tax: { blocks: [] },
  };

  const chineseLabels = {
    premiums: { blocks: [
      { x: 399, top: 258, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: '同比 +16%', size: 30, color: NOTE }] },
      { x: 316, top: 451, anchor: 'end', lines: [{ text: '保费', size: 40, weight: 700 }] },
    ] },
    products: { blocks: [
      { x: 399, top: 667, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: '同比 +0%', size: 30, color: NOTE }] },
      { x: 316, top: 734, anchor: 'end', lines: [{ text: '产品', size: 40, weight: 700 }] },
    ] },
    services: { blocks: [
      { x: 399, top: 842, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: '同比 +10%', size: 30, color: NOTE }] },
      { x: 316, top: 896, anchor: 'end', lines: [{ text: '服务', size: 40, weight: 700 }] },
    ] },
    investments_other: { blocks: [
      { x: 399, top: 1007, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 40 }, { text: '同比 (58%)', size: 30, color: NOTE }] },
      { x: 316, top: 1011, anchor: 'end', lineGap: 9, lines: [{ text: '投资', size: 40, weight: 700 }, { text: '及其他', size: 40, weight: 700 }] },
    ] },
    revenue: { blocks: [
      { x: 1021, top: 412, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '同比 +12%', size: 30, color: NOTE }] },
    ] },
    operating_profit: { blocks: [
      { x: 1645, top: 266, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '利润率 0%', size: 30, color: NOTE }, { text: '同比 (7 个百分点)', size: 30, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [
      { x: 1645, top: 1038, anchor: 'middle', lineGap: 9, lines: [{ text: '营业', size: 40, weight: 700 }, { text: '费用', size: 40, weight: 700 }, { text: '$value', size: 40 }] },
    ] },
    net_profit: { blocks: [
      { x: 2379, top: 277, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 40, weight: 700 }, { text: '$value', size: 40 }, { text: '利润率 0%', size: 30, color: NOTE }, { text: '同比 (6 个百分点)', size: 30, color: NOTE }] },
    ] },
    other: { blocks: [
      { x: RIGHT_X, top: 538, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    medical_costs: { blocks: [
      { x: RIGHT_X, top: 822, anchor: 'middle', lineGap: 8, lines: [{ text: '医疗成本', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    operational_costs: { blocks: [
      { x: RIGHT_X, top: 1037, anchor: 'middle', lineGap: 8, lines: [{ text: '运营成本', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    cost_of_product_sold: { blocks: [
      { x: RIGHT_X, top: 1176, anchor: 'middle', lineGap: 8, lines: [{ text: '产品销售成本', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
    da: { blocks: [
      { x: RIGHT_X, top: 1290, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧摊销', size: 30, weight: 700 }, { text: '$value', size: 30 }] },
    ] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'unitedhealth-q4-fy25',
    name: 'UnitedHealth Group · Q4 FY25',
    company: 'UnitedHealth Group',
    meta: {
      company: 'UnitedHealth Group',
      title: 'UnitedHealth Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/unitedhealth-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1324,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2431,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 9 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(
      'Revenue: $87.1B (+18% Y/Y)', 'Operating margin 0.3%',
      'Revenue: $70.3B (+8% Y/Y)', 'Operating margin 0.1%'
    ),
    layout: {
      scale: 3.15,
      nodes: {
        premiums: { x: 364, y: 357, width: 70 },
        products: { x: 364, y: 769, width: 70 },
        services: { x: 364, y: 944, width: 70 },
        investments_other: { x: 364, y: 1108, width: 70 },
        revenue: { x: 986, y: 566, width: 71 },
        operating_profit: { x: 1609, y: 457, width: 71 },
        operating_expenses: { x: 1609, y: 670, width: 71 },
        net_profit: { x: 2232, y: 350, width: 71 },
        other: { x: 2232, y: 569, width: 71 },
        medical_costs: { x: 2232, y: 727, width: 71 },
        operational_costs: { x: 2232, y: 1053, width: 71 },
        cost_of_product_sold: { x: 2232, y: 1203, width: 71 },
        da: { x: 2232, y: 1329, width: 71 },
        cost_of_revenue: { x: -2000, y: -2000, width: 1, height: 1 },
        gross_profit: { x: -2000, y: -2000, width: 1, height: 1 },
        tax: { x: -2000, y: -2000, width: 1, height: 1 },
      },
      labels: englishLabels,
    },
    nodes: [
      { id: 'premiums', col: 0, order: 0, type: 'source', label: 'Premiums', value: 88.9, notes: ['+16% Y/Y'] },
      { id: 'products', col: 0, order: 1, type: 'source', label: 'Products', value: 13.5, notes: ['+0% Y/Y'] },
      { id: 'services', col: 0, order: 2, type: 'source', label: 'Services', value: 10.3, notes: ['+10% Y/Y'] },
      { id: 'investments_other', col: 0, order: 3, type: 'source', label: ['Investments', '& Other'], value: 0.6, notes: ['(58%) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 113.2, notes: ['+12% Y/Y'] },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['0% margin', '(7pp) Y/Y'] },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 112.8 },
      { id: 'net_profit', col: 3, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['0% margin', '(6pp) Y/Y'] },
      { id: 'other', col: 3, order: 1, type: 'cost', label: 'Other', value: 0.2 },
      { id: 'medical_costs', col: 3, order: 2, type: 'cost', label: 'Medical costs', value: 82.0, valueText: '($82.0B)' },
      { id: 'operational_costs', col: 3, order: 3, type: 'cost', label: 'Operational costs', value: 17.0, valueText: '($17.0B)' },
      { id: 'cost_of_product_sold', col: 3, order: 4, type: 'cost', label: 'Cost of product sold', value: 12.7 },
      { id: 'da', col: 3, order: 5, type: 'cost', label: 'D&A', value: 1.1 },
      { id: 'cost_of_revenue', col: 5, order: 97, type: 'cost', label: 'Cost of revenue', value: 0 },
      { id: 'gross_profit', col: 5, order: 98, type: 'profit', label: 'Gross profit', value: 113.2 },
      { id: 'tax', col: 5, order: 99, type: 'cost', label: 'Tax', value: 0 },
    ],
    links: [
      { source: 'premiums', target: 'revenue', value: 88.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'products', target: 'revenue', value: 13.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 10.3, sourceOrder: 0, targetOrder: 2 },
      { source: 'investments_other', target: 'revenue', value: 0.6, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'operating_profit', value: 0.4, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 112.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.2, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'medical_costs', value: 82.0, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operational_costs', value: 17.0, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'cost_of_product_sold', value: 12.7, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 1.1, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['U', 'NITED', 'H', 'EALTH', 'United', 'Healthcare', 'Optum'],
      zh: {
        name: '联合健康集团 · 2025 财年第四季度',
        meta: {
          title: '联合健康集团 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1900,
        },
        annotationsSvg: annotations(
          '收入：$87.1B 同比 +18%', '营业利润率 0.3%',
          '收入：$70.3B 同比 +8%', '营业利润率 0.1%'
        ),
        nodes: {
          premiums: { label: '保费', notes: ['同比 +16%'] },
          products: { label: '产品', notes: ['同比 +0%'] },
          services: { label: '服务', notes: ['同比 +10%'] },
          investments_other: { label: ['投资', '及其他'], notes: ['同比 (58%)'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 0%', '同比 (7 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 0%', '同比 (6 个百分点)'] },
          other: { label: '其他' },
          medical_costs: { label: '医疗成本' },
          operational_costs: { label: '运营成本' },
          cost_of_product_sold: { label: '产品销售成本' },
          da: { label: '折旧摊销' },
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
          tax: { label: '税费' },
        },
        layout: { labels: chineseLabels },
      },
    },
  });
})();

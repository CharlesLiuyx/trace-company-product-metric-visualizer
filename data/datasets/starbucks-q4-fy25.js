/* ====================================================================
 * Starbucks - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/starbucks-q4-fy25.png as a fixed
 * d3-sankey layout with reusable SVG Starbucks business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const GREEN = '#00754a';
  const GREEN_LABEL = '#008f47';
  const GREEN_NODE = '#007a49';
  const GREEN_LINK = '#84b9a3';
  const PROFIT_NODE = '#2ca02c';
  const PROFIT_LINK = '#9fd39f';
  const RED = '#d60000';
  const RED_LABEL = '#9d1905';
  const RED_LINK = '#e88384';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const COMPANY_SIREN = (BUSINESS_ICONS.starbucksCompanySiren || '').replace(/<text\b[^>]*>[^<]*<\/text>/g, '');

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;
  const kpiCard = (x, width, title, value, lines, fontFamily = 'Montserrat,Arial,sans-serif') => `
    <g>
      <rect x="${x}" y="1218" width="${width}" height="149" rx="29" fill="${GREEN}"/>
      <text x="${x + width / 2}" y="1270" text-anchor="middle" font-family="${fontFamily}" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
      ${value ? `<text x="${x + width / 2}" y="1309" text-anchor="middle" font-family="${fontFamily}" font-size="29" font-weight="500" fill="#ffffff">${value}</text>` : ''}
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${(value ? 1342 : 1311) + index * 31}" text-anchor="middle" font-family="${fontFamily}" font-size="24" font-weight="500" fill="#ffffff">${line}</text>`).join('')}
    </g>`;
  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('starbucksBeverage', 112, 452, 1.1)}
      ${icon('starbucksFoodMuffin', 100, 777, 1.08)}
      ${icon('starbucksPackagedBeverages', 134, 983, 0.86)}
      ${kpiCard(28, 270, 'Store count', '18,311', ['(1%) Y/Y'])}
      ${kpiCard(303, 440, 'Same Store Sales (0%) Y/Y', '', ['Ticket +1% Y/Y', 'Transactions (1%) Y/Y'])}
    </g>`;
  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('starbucksBeverage', 112, 452, 1.1)}
      ${icon('starbucksFoodMuffin', 100, 777, 1.08)}
      ${icon('starbucksPackagedBeverages', 134, 983, 0.86)}
      ${kpiCard(28, 270, '门店数', '18,311', ['同比 (1%)'], 'Noto Sans SC,Arial,sans-serif')}
      ${kpiCard(303, 440, '同店销售额 同比 (0%)', '', ['客单价同比 +1%', '交易量同比 (1%)'], 'Noto Sans SC,Arial,sans-serif')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'starbucks-q4-fy25',
    name: 'Starbucks · Q4 FY25',
    company: 'Starbucks',
    meta: {
      company: 'Starbucks',
      title: 'Starbucks Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/starbucks-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2348,
      periodX: 189,
      periodY: 267,
      periodNoteY: 311,
      logoWidth: 246,
      logoHeight: 246,
      logoY: 272,
      logoViewBox: '0 0 240 240',
      logoSvg: COMPANY_SIREN,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: GREEN_NODE, label: GREEN },
        hub: { node: GREEN_NODE, label: GREEN },
        profit: { node: PROFIT_NODE, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREEN_LINK,
        hub: null,
        profit: PROFIT_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      // The $0.8B restructuring outflow is the complete visible terminal.
      // Keep its incoming ribbon flush with the complete node face.
      interfaceAudit: { mode: 'error', fullFaceIds: ['restructuring:left'] },
    },
    annotationsSvg: annotations,

    nodes: [
      { id: 'beverage', type: 'source', label: 'Beverage', value: 7.0, valueText: '$7.0B', notes: ['+4% Y/Y'] },
      { id: 'food', type: 'source', label: 'Food', value: 2.2, notes: ['+5% Y/Y'] },
      { id: 'other_revenue', type: 'source', label: 'Other', value: 0.4, notes: ['+41% Y/Y', 'Packaged beverages, royalty and', 'licensing revenue, ingredients'] },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 9.6, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 2.2, notes: ['23% margin', '(4pp) Y/Y'] },
      { id: 'store_opex', type: 'cost', label: 'Store opex', value: 4.3 },
      { id: 'product_distribution', type: 'cost', label: ['Product &', 'distribution'], value: 3.1 },
      { id: 'other_income', type: 'profit', label: 'Other', value: 0.1 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 0.3, notes: ['3% margin', '(11pp) Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 2.0, valueText: '($2.0B)' },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 0.1, notes: ['1% margin', '(9pp) Y/Y'] },
      { id: 'other_expense', type: 'cost', label: 'Other', value: 0.1 },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.03, valueText: '($30M)' },
      { id: 'ga', type: 'cost', label: ['General &', 'administrative'], value: 0.6 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.4 },
      { id: 'restructuring', type: 'cost', label: 'Restructuring', value: 0.8 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.1 },
    ],
    links: [
      { source: 'beverage', target: 'revenue', value: 7.0, sourceWidth: 294, targetWidth: 294, targetOrder: 0 },
      { source: 'food', target: 'revenue', value: 2.2, sourceWidth: 92.4, targetWidth: 92, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.4, sourceWidth: 16.8, targetWidth: 16, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 2.2, sourceWidth: 92.4, targetWidth: 92.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'store_opex', value: 4.3, sourceWidth: 180.6, targetWidth: 180.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'product_distribution', value: 3.1, sourceWidth: 128, targetWidth: 129, sourceOrder: 2, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.3, sourceWidth: 12, targetWidth: 7, y1: 408.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.0, sourceWidth: 80, targetWidth: 84, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'operating_profit', value: 0.1, sourceWidth: 4.2, targetWidth: 2.6, y1: 416.3, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 0.1, width: 4.2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, width: 4.2, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.03, width: 1.26, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.6, width: 25.2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.4, width: 16.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.8, sourceWidth: 33.6, targetWidth: 18, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 8.4, targetWidth: 4.2, sourceOrder: 3, targetOrder: 0 },
    ],
    layout: {
      scale: 42,
      nodes: {
        beverage: { x: 387, y: 447, width: 73, height: 294 },
        food: { x: 387, y: 868, width: 73, height: 92.4 },
        other_revenue: { x: 387, y: 1106, width: 73, height: 16.8 },
        revenue: { x: 853, y: 630, width: 73, height: 403.2 },
        gross_profit: { x: 1324, y: 518, width: 73, height: 92.4 },
        store_opex: { x: 1324, y: 820, width: 73, height: 180.6 },
        product_distribution: { x: 1324, y: 1073, width: 73, height: 130.2 },
        other_income: { x: 1678, y: 465, width: 73, height: 4.2 },
        operating_profit: { x: 1786, y: 405, width: 73, height: 12.6 },
        operating_expenses: { x: 1786, y: 656, width: 73, height: 84 },
        net_profit: { x: 2260, y: 310, width: 73, height: 4.2 },
        other_expense: { x: 2260, y: 510, width: 73, height: 4.2 },
        tax: { x: 2260, y: 631, width: 73, height: 1.26 },
        ga: { x: 2260, y: 835, width: 73, height: 25.2 },
        depreciation_amortization: { x: 2260, y: 1000, width: 73, height: 16.8 },
        restructuring: { x: 2260, y: 1151, width: 73, height: 18 },
        other_opex: { x: 2260, y: 1280, width: 73, height: 4.2 },
      },
      labels: {
        beverage: { blocks: [
          { x: 425, top: 359, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400, color: GREEN }, { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 208, top: 702, anchor: 'middle', lines: [{ text: 'Beverage', size: 40, weight: 800, color: GREEN }] },
        ] },
        food: { blocks: [
          { x: 425, top: 780, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400, color: GREEN }, { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 208, top: 925, anchor: 'middle', lines: [{ text: 'Food', size: 40, weight: 800, color: GREEN }] },
        ] },
        other_revenue: { blocks: [
          { x: 425, top: 1017, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400, color: GREEN }, { text: '+41% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 180, top: 1106, anchor: 'middle', lineGap: 7, lines: [{ text: 'Other', size: 40, weight: 800, color: GREEN }, { text: 'Packaged beverages, royalty and', size: 20, weight: 400, color: NOTE }, { text: 'licensing revenue, ingredients', size: 20, weight: 400, color: NOTE }] },
        ] },
        revenue: { blocks: [{ x: 890, top: 491, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800, color: GREEN }, { text: '$value', size: 38, weight: 400, color: GREEN }, { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1362, top: 337, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '23% margin', size: 29, weight: 400, color: NOTE }, { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        store_opex: { blocks: [{ x: 1525, top: 877, anchor: 'middle', lineGap: 9, lines: [{ text: 'Store opex', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 35, weight: 400, color: RED_LABEL }] }] },
        product_distribution: { blocks: [{ x: 1521, top: 1078, anchor: 'middle', lineGap: 8, lines: [{ text: 'Product &', size: 35, weight: 800, color: RED_LABEL }, { text: 'distribution', size: 35, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        other_income: { blocks: [{ x: 1714, top: 489, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 34, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 34, weight: 400, color: GREEN_LABEL }] }] },
        operating_profit: { blocks: [{ x: 1823, top: 225, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '3% margin', size: 29, weight: 400, color: NOTE }, { text: '(11pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1823, top: 761, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 36, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        net_profit: { blocks: [{ x: 2476, top: 255, anchor: 'middle', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 38, weight: 400, color: GREEN_LABEL }, { text: '1% margin', size: 29, weight: 400, color: NOTE }, { text: '(9pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        other_expense: { blocks: [{ x: 2476, top: 481, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
        tax: { blocks: [{ x: 2476, top: 598, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
        ga: { blocks: [{ x: 2476, top: 795, anchor: 'middle', lineGap: 8, lines: [{ text: 'General &', size: 31, weight: 800, color: RED_LABEL }, { text: 'administrative', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
        depreciation_amortization: { blocks: [{ x: 2472, top: 959, anchor: 'middle', lineGap: 8, lines: [{ text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL }, { text: 'amortization', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
        restructuring: { blocks: [{ x: 2472, top: 1127, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restructuring', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
        other_opex: { blocks: [{ x: 2472, top: 1249, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other opex', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
      },
    },
    i18n: {
      zh: {
        name: 'Starbucks · 2025 财年第四季度',
        meta: { title: 'Starbucks 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 9 月' },
        annotationsSvg: annotationsZh,
        nodes: {
          beverage: { label: '饮品', notes: ['同比 +4%'] }, food: { label: '食品', notes: ['同比 +5%'] },
          other_revenue: { label: '其他', notes: ['同比 +41%', '包装饮品、版税和', '授权收入、原料'] }, revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 23%', '同比 (4 个百分点)'] }, store_opex: { label: '门店运营费用' }, product_distribution: { label: '产品与分销' }, other_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 (11 个百分点)'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 1%', '同比 (9 个百分点)'] },
          other_expense: { label: '其他' }, tax: { label: '税费' }, ga: { label: '一般及行政' }, depreciation_amortization: { label: '折旧与摊销' }, restructuring: { label: '重组' }, other_opex: { label: '其他运营费用' },
        },
      },
    },
  });
})();

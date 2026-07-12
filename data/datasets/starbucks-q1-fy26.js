/* ====================================================================
 * Starbucks - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/starbucks-q1-fy26.png as a fixed
 * d3-sankey layout with reusable, pure-SVG Starbucks business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#00643b';
  const GREEN_LABEL = '#008f51';
  const GREEN_NODE = '#00704a';
  const GREEN_LINK = '#85b7a6';
  const PROFIT_NODE = '#2ca02c';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const kpiCard = (x, width, title, value, lines) => `
    <g>
      <rect x="${x}" y="1214" width="${width}" height="149" rx="29" fill="${GREEN}"/>
      <text x="${x + width / 2}" y="1266" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${title}</text>
      ${value ? `<text x="${x + width / 2}" y="1305" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>` : ''}
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${(value ? 1338 : 1307) + index * 31}" text-anchor="middle" font-size="24" font-weight="500" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotations = (copy) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(74, 270, copy.storeCount, '22,758', [copy.storeCountYoy])}
      ${kpiCard(354, 421, copy.sameStoreSales, '', [copy.ticket, copy.transactions])}
    </g>`;

  const annotationsEn = annotations({
    storeCount: 'Store count',
    storeCountYoy: '+3% Y/Y',
    sameStoreSales: 'Same Store Sale +4% Y/Y',
    ticket: 'Ticket +1% Y/Y',
    transactions: 'Transactions +3% Y/Y',
  });
  const annotationsZh = annotations({
    storeCount: '门店数',
    storeCountYoy: '同比 +3%',
    sameStoreSales: '同店销售额 同比 +4%',
    ticket: '客单价 同比 +1%',
    transactions: '交易量 同比 +3%',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'starbucks-q1-fy26',
    name: 'Starbucks - Q1 FY26',
    company: 'Starbucks',
    meta: {
      company: 'Starbucks',
      title: 'Starbucks Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/starbucks-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2348,
      periodX: 189,
      periodY: 267,
      periodNoteY: 311,
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
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      { key: 'starbucks-q1-fy26-company-siren', href: 'data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png', x: 756, y: 254, width: 272, height: 260 },
      { key: 'starbucks-q1-fy26-business-beverage', href: 'data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png', x: 100, y: 382, width: 216, height: 252 },
      { key: 'starbucks-q1-fy26-business-food', href: 'data/assets/raster-annotations/starbucks/q1-fy26-business-food.png', x: 100, y: 736, width: 196, height: 145 },
      { key: 'starbucks-q1-fy26-business-packaged-beverages', href: 'data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png', x: 126, y: 976, width: 180, height: 106 },
    ],

    nodes: [
      { id: 'beverage', type: 'source', label: 'Beverage', value: 5.9, notes: ['+5% Y/Y'] },
      { id: 'food', type: 'source', label: 'Food', value: 1.9, notes: ['+5% Y/Y'] },
      {
        id: 'other_revenue',
        type: 'source',
        label: 'Other',
        value: 2.1,
        notes: ['+8% Y/Y', 'Packaged beverages, royalty and', 'licensing revenue, ingredients'],
      },
      { id: 'revenue', type: 'hub', label: 'Revenue', value: 9.9, notes: ['+6% Y/Y'] },
      { id: 'gross_profit', type: 'profit', label: 'Gross profit', value: 2.1, notes: ['21% margin', '(3pp) Y/Y'] },
      { id: 'store_opex', type: 'cost', label: 'Store opex', value: 4.6 },
      { id: 'product_distribution', type: 'cost', label: ['Product &', 'distribution'], value: 3.3 },
      { id: 'other_income', type: 'profit', label: 'Other', value: 0.1 },
      { id: 'operating_profit', type: 'profit', label: 'Operating profit', value: 0.9, notes: ['9% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', type: 'cost', label: ['Operating', 'expenses'], value: 1.3 },
      { id: 'net_profit', type: 'profit', label: 'Net profit', value: 0.3, notes: ['3% margin', '(5pp) Y/Y'] },
      { id: 'tax', type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'other_expense', type: 'cost', label: 'Other', value: 0.1 },
      { id: 'ga', type: 'cost', label: ['General &', 'administrative'], value: 0.7 },
      { id: 'depreciation_amortization', type: 'cost', label: ['Depreciation &', 'amortization'], value: 0.4 },
      { id: 'other_opex', type: 'cost', label: 'Other opex', value: 0.1 },
      { id: 'restructuring', type: 'cost', label: 'Restructuring', value: 0.1 },
    ],
    links: [
      { source: 'beverage', target: 'revenue', value: 5.9, width: 240, targetOrder: 0 },
      { source: 'food', target: 'revenue', value: 1.9, width: 78, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 2.1, width: 85, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 2.1, width: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'store_opex', value: 4.6, width: 184, sourceWidth: 184, targetWidth: 186, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'product_distribution', value: 3.3, width: 133, sourceWidth: 133, targetWidth: 134, sourceOrder: 2, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, width: 33, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.3, width: 53, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'operating_profit', value: 0.1, width: 4, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 0.3, width: 12, sourceWidth: 12, targetWidth: 14, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, width: 21, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_expense', value: 0.1, width: 4, sourceWidth: 4, targetWidth: 6, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.7, width: 29, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.4, width: 16, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, width: 4, sourceWidth: 4, targetWidth: 7, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, width: 4, sourceOrder: 3, targetOrder: 0 },
    ],

    layout: {
      scale: 40.5,
      nodes: {
        beverage: { x: 387, y: 461, width: 73, height: 242 },
        food: { x: 387, y: 856, width: 73, height: 79 },
        other_revenue: { x: 387, y: 1085, width: 73, height: 86 },
        revenue: { x: 853, y: 664, width: 73, height: 403 },
        gross_profit: { x: 1321, y: 523, width: 73, height: 87 },
        store_opex: { x: 1321, y: 869, width: 73, height: 186 },
        product_distribution: { x: 1321, y: 1153, width: 73, height: 134 },
        other_income: { x: 1669, y: 512, width: 73, height: 4 },
        operating_profit: { x: 1787, y: 425, width: 73, height: 38 },
        operating_expenses: { x: 1787, y: 700, width: 73, height: 53 },
        net_profit: { x: 2255, y: 338, width: 73, height: 14 },
        tax: { x: 2255, y: 518, width: 73, height: 22 },
        other_expense: { x: 2255, y: 636, width: 73, height: 6 },
        ga: { x: 2255, y: 900, width: 73, height: 29 },
        depreciation_amortization: { x: 2255, y: 1045, width: 73, height: 17 },
        other_opex: { x: 2255, y: 1165, width: 73, height: 7 },
        restructuring: { x: 2255, y: 1269, width: 73, height: 5 },
      },
      labels: {
        beverage: { blocks: [
          { x: 425, top: 372, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400, color: GREEN },
            { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 190, top: 638, anchor: 'middle', lines: [{ text: 'Beverage', size: 40, weight: 800, color: GREEN }] },
        ] },
        food: { blocks: [
          { x: 425, top: 767, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400, color: GREEN },
            { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 187, top: 887, anchor: 'middle', lines: [{ text: 'Food', size: 40, weight: 800, color: GREEN }] },
        ] },
        other_revenue: { blocks: [
          { x: 425, top: 990, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 38, weight: 400, color: GREEN },
            { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 180, top: 1098, anchor: 'middle', lineGap: 7, lines: [
            { text: 'Other', size: 40, weight: 800, color: GREEN },
            { text: 'Packaged beverages, royalty and', size: 20, weight: 400, color: NOTE },
            { text: 'licensing revenue, ingredients', size: 20, weight: 400, color: NOTE },
          ] },
        ] },
        revenue: { blocks: [
          { x: 890, top: 525, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Revenue', size: 40, weight: 800, color: GREEN },
            { text: '$value', size: 38, weight: 400, color: GREEN },
            { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        gross_profit: { blocks: [
          { x: 1358, top: 344, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
            { text: '21% margin', size: 29, weight: 400, color: NOTE },
            { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        store_opex: { blocks: [
          { x: 1524, top: 929, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Store opex', size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 35, weight: 400, color: RED_LABEL },
          ] },
        ] },
        product_distribution: { blocks: [
          { x: 1521, top: 1162, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Product &', size: 35, weight: 800, color: RED_LABEL },
            { text: 'distribution', size: 35, weight: 800, color: RED_LABEL },
            { text: '$value', size: 34, weight: 400, color: RED_LABEL },
          ] },
        ] },
        other_income: { blocks: [
          { x: 1706, top: 535, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other', size: 34, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 34, weight: 400, color: GREEN_LABEL },
          ] },
        ] },
        operating_profit: { blocks: [
          { x: 1823, top: 247, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
            { text: '9% margin', size: 29, weight: 400, color: NOTE },
            { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        operating_expenses: { blocks: [
          { x: 1823, top: 777, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
            { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 34, weight: 400, color: RED_LABEL },
          ] },
        ] },
        net_profit: { blocks: [
          { x: 2476, top: 296, anchor: 'middle', lineGap: 9, lines: [
            { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
            { text: '3% margin', size: 29, weight: 400, color: NOTE },
            { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        tax: { blocks: [
          { x: 2476, top: 495, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
        other_expense: { blocks: [
          { x: 2476, top: 605, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
        ga: { blocks: [
          { x: 2476, top: 860, anchor: 'middle', lineGap: 8, lines: [
            { text: 'General &', size: 31, weight: 800, color: RED_LABEL },
            { text: 'administrative', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
        depreciation_amortization: { blocks: [
          { x: 2472, top: 994, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Depreciation &', size: 31, weight: 800, color: RED_LABEL },
            { text: 'amortization', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
        other_opex: { blocks: [
          { x: 2472, top: 1134, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other opex', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
        restructuring: { blocks: [
          { x: 2472, top: 1238, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Restructuring', size: 31, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ] },
        ] },
      },
    },

    i18n: {
      zh: {
        name: 'Starbucks · 2026 财年第一季度',
        meta: {
          title: 'Starbucks 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
        },
        annotationsSvg: annotationsZh,
        layout: {
          labels: {
            other_revenue: {
              blocks: [
                { x: 425, top: 990, anchor: 'middle', lineGap: 10, lines: [
                  { text: '$value', size: 38, weight: 400, color: GREEN },
                  { text: '同比 +8%', size: 29, weight: 400, color: NOTE },
                ] },
                { x: 180, top: 1098, anchor: 'middle', lineGap: 7, lines: [
                  { text: '其他', size: 40, weight: 800, color: GREEN },
                  { text: '包装饮品、版税和', size: 20, weight: 400, color: NOTE },
                  { text: '授权收入、原料', size: 20, weight: 400, color: NOTE },
                ] },
              ],
            },
          },
        },
        nodes: {
          beverage: { label: '饮品', notes: ['同比 +5%'] },
          food: { label: '食品', notes: ['同比 +5%'] },
          other_revenue: { label: '其他', notes: ['同比 +8%', '包装饮品、royalty and', 'licensing 收入、ingredients'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 21%', '同比 (3 个百分点)'] },
          store_opex: { label: '门店运营费用' },
          product_distribution: { label: '产品与分销' },
          other_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (5 个百分点)'] },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          ga: { label: '一般及行政' },
          depreciation_amortization: { label: '折旧与摊销' },
          other_opex: { label: '其他运营费用' },
          restructuring: { label: '重组' },
        },
      },
    },
  });
})();

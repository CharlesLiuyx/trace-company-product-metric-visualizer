/* Arista Q1 FY24 income-statement Sankey, reconstructed from the claimed source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DARK = '#23395d';
  const SOURCE_LINK = '#959faf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const ARISTA_LOGO = `
    <g fill="#16325B">
      <path d="M391.027 103.426c36.994 0 55.491-25.688 55.491-51.378 0-25.688-18.498-50.353-57.546-50.353-28.773-1.029-134.617-1.029-134.617-1.029v173.668h32.879V28.413c25.691 0 90.43 0 103.79 0 18.496 0 27.745 6.163 27.745 23.635 0 14.385-9.247 22.606-26.718 22.606h-86.315l102.761 98.648h40.078l-73.991-71.932c7.197 2.056 15.417 2.056 16.444 2.056z"/>
      <path d="M480.429.669h31.856v173.665h-31.856z"/>
      <path d="M916.137 27.387V.669h-167.824l-18.497 26.718h86.641v146.947h31.856V27.387z"/>
      <path d="M678.756 72.6h-81.182c-16.438 0-25.689-7.192-25.689-21.58 0-16.44 11.305-23.633 25.689-23.633h110.98L722.941.669H596.546c-28.775 0-52.407 21.577-52.407 51.382 0 26.715 22.608 48.294 53.434 48.294h81.182c18.5 0 28.775 8.224 28.775 23.637 0 13.357-11.305 22.608-28.775 22.608H566.748l-16.44 27.744h132.558c33.912 0 52.406-24.658 52.406-52.404 0-25.697-21.58-49.33-56.516-49.33z"/>
      <path d="M1079.523 174.334h33.912s-94.539-149.003-102.764-162.362c-9.244-15.415-25.689-14.385-34.938-1.028-7.195 11.301-102.762 162.359-102.762 162.359h33.91l31.855-51.378h68.852l17.467-27.746h-67.82l36.996-59.603z"/>
      <path d="M104.325 11.972C97.133 23.272 1.564 174.334 1.564 174.334h33.91l31.858-51.381h67.822l17.47-27.746H84.8l36.993-59.602 86.321 137.697h33.911S147.483 24.301 139.26 10.943C130.013-2.413 113.574-1.387 104.325 11.972z"/>
    </g>`;

  const labels = {
    product: { blocks: [
      { x: 399, top: 470, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 399, top: 521, anchor: 'middle', lines: [{ text: '+13% Y/Y', size: 28, color: NOTE }] },
      { x: 307, top: 642, anchor: 'end', semanticRole: 'source-offset-label', parts: ['name'], nameSize: 40 },
      { x: 230, top: 693, anchor: 'middle', lines: [{ text: '62% gross margin', size: 28, color: NOTE }, { text: '+4pp Y/Y', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 401, top: 1050, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 401, top: 1101, anchor: 'middle', lines: [{ text: '+35% Y/Y', size: 28, color: NOTE }] },
      { x: 298, top: 1153, anchor: 'end', semanticRole: 'source-offset-label', parts: ['name'], nameSize: 40 },
      { x: 230, top: 1204, anchor: 'middle', lines: [{ text: '80% gross margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 867, top: 547, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 867, top: 648, anchor: 'middle', lines: [{ text: '+16% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1336, top: 379, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1336, top: 480, anchor: 'middle', lines: [{ text: '64% margin', size: 28, color: NOTE }, { text: '+4pp Y/Y', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1345, top: 1170, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1644, top: 1104, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1648, top: 1236, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 20, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1802, top: 254, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1802, top: 354, anchor: 'middle', lines: [{ text: '42% margin', size: 28, color: NOTE }, { text: '+6pp Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1803, top: 911, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2126, top: 526, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 326, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 427, anchor: 'middle', lines: [{ text: '41% margin', size: 28, color: NOTE }, { text: '+8pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 621, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2426, top: 882, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2426, top: 965, anchor: 'middle', lines: [{ text: '13% of revenue', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1067, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1147, anchor: 'middle', lines: [{ text: '7% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2431, top: 1236, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2431, top: 1319, anchor: 'middle', lines: [{ text: '2% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
  };

  const zhLabels = {
    product: { blocks: [{ x: 399, top: 470, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 399, top: 521, anchor: 'middle', lines: [{ text: '同比 +13%', size: 28, color: NOTE }] }, { x: 307, top: 642, anchor: 'end', semanticRole: 'source-offset-label', parts: ['name'], nameSize: 40 }, { x: 230, top: 693, anchor: 'middle', lines: [{ text: '毛利率 62%', size: 28, color: NOTE }, { text: '同比 +4 个百分点', size: 28, color: NOTE }] }] },
    service: { blocks: [{ x: 401, top: 1050, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 401, top: 1101, anchor: 'middle', lines: [{ text: '同比 +35%', size: 28, color: NOTE }] }, { x: 298, top: 1153, anchor: 'end', semanticRole: 'source-offset-label', parts: ['name'], nameSize: 40 }, { x: 230, top: 1204, anchor: 'middle', lines: [{ text: '毛利率 80%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 867, top: 547, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 867, top: 648, anchor: 'middle', lines: [{ text: '同比 +16%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1336, top: 379, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1336, top: 480, anchor: 'middle', lines: [{ text: '毛利率 64%', size: 28, color: NOTE }, { text: '同比 +4 个百分点', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1345, top: 1170, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1644, top: 1104, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1648, top: 1236, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 20, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1802, top: 254, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1802, top: 354, anchor: 'middle', lines: [{ text: '利润率 42%', size: 28, color: NOTE }, { text: '同比 +6 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1803, top: 911, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2126, top: 526, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 326, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 427, anchor: 'middle', lines: [{ text: '利润率 41%', size: 28, color: NOTE }, { text: '同比 +8 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 621, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2426, top: 882, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2426, top: 965, anchor: 'middle', lines: [{ text: '占收入 13%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1067, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1147, anchor: 'middle', lines: [{ text: '占收入 7%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2431, top: 1236, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2431, top: 1319, anchor: 'middle', lines: [{ text: '占收入 2%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q1-fy24',
    name: 'Arista · Q1 FY24',
    company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q1 FY24 Income Statement', period: 'Q1 FY24', periodNote: 'Ending Mar. 2024', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100, hidePeriodStamp: true,
      logoWidth: 560, logoHeight: 88, logoY: 349, logoViewBox: '0 0 1115 175',
      logoSvg: ARISTA_LOGO,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        product: { x: 363, y: 566, width: 72, height: 279 }, service: { x: 363, y: 1144, width: 72, height: 49 }, revenue: { x: 830, y: 694, width: 72, height: 331 },
        gross_profit: { x: 1302, y: 562, width: 72, height: 211 }, cost_of_revenue: { x: 1305, y: 1030, width: 72, height: 119 }, product_cor: { x: 1547, y: 1081, width: 72, height: 109 }, service_cor: { x: 1552, y: 1249, width: 72, height: 8 },
        operating_profit: { x: 1764, y: 435, width: 72, height: 139 }, operating_expenses: { x: 1764, y: 820, width: 72, height: 70 }, other_income: { x: 2093, y: 494, width: 70, height: 11 },
        net_profit: { x: 2232, y: 312, width: 72, height: 133 }, tax: { x: 2232, y: 646, width: 72, height: 16 }, rnd: { x: 2232, y: 885, width: 72, height: 43 }, sm: { x: 2232, y: 1088, width: 72, height: 20 }, ga: { x: 2232, y: 1273, width: 72, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.328845, notes: ['+13% Y/Y', '62% gross margin', '+4pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.242529, notes: ['+35% Y/Y', '80% gross margin', '+1pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.571374, notes: ['+16% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.001379, notes: ['64% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.569995 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.660141, notes: ['42% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.341238 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.521679 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.048316, valueText: '($48.316M)' },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.06262 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.637692, notes: ['41% margin', '+8pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.085069 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.208395, notes: ['13% of revenue', '(2pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.10508, notes: ['7% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.027763, valueText: '($27.763M)', notes: ['2% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.328845, sourceWidth: 279, targetWidth: 279, y0: 705.5, y1: 833.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.242529, sourceWidth: 49, targetWidth: 52, y0: 1168.5, y1: 999, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.001379, sourceWidth: 211, targetWidth: 211, y0: 799.5, y1: 667.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.569995, sourceWidth: 120, targetWidth: 119, y0: 965, y1: 1089.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.660141, sourceWidth: 139, targetWidth: 139, y0: 631.5, y1: 504.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.341238, sourceWidth: 72, targetWidth: 70, y0: 737, y1: 855, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.521679, sourceWidth: 110, targetWidth: 109, y0: 1085, y1: 1135.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.048316, sourceWidth: 9, targetWidth: 8, y0: 1144.5, y1: 1253, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.575072, sourceWidth: 122, targetWidth: 122, y0: 496, y1: 373, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.085069, sourceWidth: 17, targetWidth: 16, y0: 565.5, y1: 654, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.06262, sourceWidth: 11, targetWidth: 11, y0: 499.5, y1: 439.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.208395, sourceWidth: 43, targetWidth: 43, y0: 841.5, y1: 906.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.10508, sourceWidth: 22, targetWidth: 20, y0: 874, y1: 1098, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.027763, sourceWidth: 5, targetWidth: 4, y0: 887.5, y1: 1275, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2024 财年第一季度',
        meta: { title: '阿里斯塔网络 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2024 年 3 月', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +13%', '毛利率 62%', '同比 +4 个百分点'] }, service: { label: '服务', notes: ['同比 +35%', '毛利率 80%', '同比 +1 个百分点'] }, revenue: { label: '收入', notes: ['同比 +16%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 64%', '同比 +4 个百分点'] }, cost_of_revenue: { label: '收入成本' }, product_cor: { label: '产品' }, service_cor: { label: '服务' }, operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 +6 个百分点'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 41%', '同比 +8 个百分点'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

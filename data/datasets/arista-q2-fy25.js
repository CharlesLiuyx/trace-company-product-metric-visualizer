/* Arista Q2 FY25 income-statement Sankey, reconstructed from the claimed source. */
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
      { x: 402.5, top: 471, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 402.5, top: 517, anchor: 'middle', lines: [{ text: '+32% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 648, anchor: 'end', lineGap: 12, lines: [
        { text: 'Product', size: 40, weight: 700, color: DARK },
        { text: '62% gross margin', size: 28, color: NOTE },
        { text: '+0pp Y/Y', size: 28, color: NOTE },
      ] },
    ] },
    service: { blocks: [
      { x: 402.5, top: 1008, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 402.5, top: 1056, anchor: 'middle', lines: [{ text: '+23% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 1105, anchor: 'end', lineGap: 11, lines: [
        { text: 'Service', size: 40, weight: 700, color: DARK },
        { text: '82% gross margin', size: 28, color: NOTE },
        { text: '+2pp Y/Y', size: 28, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [
      { x: 869, top: 552, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 869, top: 651, anchor: 'middle', lines: [{ text: '+30% Y/Y', size: 28, color: NOTE }] },
    ] },
    gross_profit: { blocks: [
      { x: 1336.5, top: 418, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1336.5, top: 522, anchor: 'middle', lines: [{ text: '65% margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] },
    ] },
    cost_of_revenue: { blocks: [{ x: 1336.5, top: 1169, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1670, top: 1098, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1674, top: 1230, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [
      { x: 1801, top: 319, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1801, top: 423, anchor: 'middle', lines: [{ text: '45% margin', size: 28, color: NOTE }, { text: '+3pp Y/Y', size: 28, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [{ x: 1804, top: 935, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2140, top: 618, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [
      { x: 2419, top: 406, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 2419, top: 510, anchor: 'middle', lines: [{ text: '40% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
    tax: { blocks: [{ x: 2419, top: 715, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [
      { x: 2435, top: 879, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2435, top: 961, anchor: 'middle', lines: [{ text: '13% of revenue', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    sm: { blocks: [
      { x: 2429, top: 1052, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2429, top: 1134, anchor: 'middle', lines: [{ text: '6% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    ga: { blocks: [
      { x: 2434, top: 1222, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2434, top: 1304, anchor: 'middle', lines: [{ text: '1% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] },
    ] },
  };

  const zhLabels = {
    product: { blocks: [{ x: 402.5, top: 471, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 402.5, top: 517, anchor: 'middle', lines: [{ text: '同比 +32%', size: 28, color: NOTE }] }, { x: 344, top: 648, anchor: 'end', lineGap: 12, lines: [{ text: '产品', size: 40, weight: 700, color: DARK }, { text: '毛利率 62%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    service: { blocks: [{ x: 402.5, top: 1008, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 402.5, top: 1056, anchor: 'middle', lines: [{ text: '同比 +23%', size: 28, color: NOTE }] }, { x: 344, top: 1105, anchor: 'end', lineGap: 11, lines: [{ text: '服务', size: 40, weight: 700, color: DARK }, { text: '毛利率 82%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 869, top: 552, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 869, top: 651, anchor: 'middle', lines: [{ text: '同比 +30%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1336.5, top: 418, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1336.5, top: 522, anchor: 'middle', lines: [{ text: '毛利率 65%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1336.5, top: 1169, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1670, top: 1098, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1674, top: 1230, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1801, top: 319, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1801, top: 423, anchor: 'middle', lines: [{ text: '利润率 45%', size: 28, color: NOTE }, { text: '同比 +3 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1804, top: 935, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2140, top: 618, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 406, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 510, anchor: 'middle', lines: [{ text: '利润率 40%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 715, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2435, top: 879, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2435, top: 961, anchor: 'middle', lines: [{ text: '占收入 13%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1052, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1134, anchor: 'middle', lines: [{ text: '占收入 6%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2434, top: 1222, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2434, top: 1304, anchor: 'middle', lines: [{ text: '占收入 1%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q2-fy25',
    name: 'Arista · Q2 FY25',
    company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q2 FY25 Income Statement', period: 'Q2 FY25', periodNote: 'Ending Jun. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100, hidePeriodStamp: true,
      logoWidth: 560, logoHeight: 88, logoY: 349, logoViewBox: '0 0 1115 175', logoSvg: ARISTA_LOGO,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        product: { x: 367, y: 557, width: 71, height: 287 }, service: { x: 367, y: 1096, width: 71, height: 48 }, revenue: { x: 834, y: 691, width: 70, height: 338 },
        gross_profit: { x: 1301, y: 598, width: 71, height: 220 }, cost_of_revenue: { x: 1301, y: 1029, width: 71, height: 116 }, product_cor: { x: 1564, y: 1076, width: 70, height: 107 }, service_cor: { x: 1564, y: 1268, width: 70, height: 6 },
        operating_profit: { x: 1766, y: 498, width: 70, height: 150 }, operating_expenses: { x: 1769, y: 842, width: 70, height: 68 }, other_income: { x: 2104, y: 586, width: 70, height: 12 },
        net_profit: { x: 2233, y: 403, width: 71, height: 135 }, tax: { x: 2235, y: 731, width: 71, height: 27 }, rnd: { x: 2235, y: 895, width: 71, height: 44 }, sm: { x: 2235, y: 1091, width: 71, height: 16 }, ga: { x: 2235, y: 1258, width: 71, height: 2 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.877, notes: ['+32% Y/Y', '62% gross margin', '+0pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.3278, notes: ['+23% Y/Y', '82% gross margin', '+2pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.2048, notes: ['+30% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.4386, notes: ['65% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.7662 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.9862, notes: ['45% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.4524 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.7073 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.0589 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.094 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.8888, notes: ['40% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1914 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.2965, notes: ['13% of revenue', '(2pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.1265, notes: ['6% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.0294, valueText: '($29.4M)', notes: ['1% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.877, sourceWidth: 287, targetWidth: 287, y0: 700.5, y1: 834.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.3278, sourceWidth: 48, targetWidth: 51, y0: 1120, y1: 1003.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.4386, sourceWidth: 221, targetWidth: 220, y0: 801.5, y1: 708, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.7662, sourceWidth: 117, targetWidth: 116, y0: 970.5, y1: 1087, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9862, sourceWidth: 153, targetWidth: 150, y0: 674.5, y1: 573, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.4524, sourceWidth: 67, targetWidth: 68, y0: 784.5, y1: 876, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.7073, sourceWidth: 110, targetWidth: 107, y0: 1084, y1: 1129.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.0589, sourceWidth: 6, targetWidth: 6, y0: 1142, y1: 1271, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.7948, sourceWidth: 122, targetWidth: 121, y0: 559, y1: 463.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1914, sourceWidth: 27, targetWidth: 27, y0: 634.5, y1: 744.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.094, sourceWidth: 12, targetWidth: 14, y0: 592, y1: 531, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.2965, sourceWidth: 44, targetWidth: 44, y0: 864, y1: 917, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.1265, sourceWidth: 20, targetWidth: 16, y0: 896, y1: 1099, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.0294, sourceWidth: 4, targetWidth: 2, y0: 908, y1: 1259, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2025 财年第二季度',
        meta: { title: '阿里斯塔网络 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 6 月', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +32%', '毛利率 62%', '同比 +0 个百分点'] }, service: { label: '服务', notes: ['同比 +23%', '毛利率 82%', '同比 +2 个百分点'] }, revenue: { label: '收入', notes: ['同比 +30%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 65%', '同比 +0 个百分点'] }, cost_of_revenue: { label: '收入成本' }, product_cor: { label: '产品' }, service_cor: { label: '服务' }, operating_profit: { label: '营业利润', notes: ['利润率 45%', '同比 +3 个百分点'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 40%', '同比 +1 个百分点'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 13%', '同比 (2 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (0 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

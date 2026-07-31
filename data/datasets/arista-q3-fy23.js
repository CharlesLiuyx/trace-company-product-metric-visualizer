/* Arista Q3 FY23 income-statement Sankey, reconstructed from the claimed source. */
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
      { x: 396, top: 511, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 396, top: 560, anchor: 'middle', lines: [{ text: '+27% Y/Y', size: 28, color: NOTE }] },
      { x: 343, top: 729, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 343, top: 778, anchor: 'end', lines: [{ text: '59% gross margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 396, top: 1049, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 396, top: 1098, anchor: 'middle', lines: [{ text: '+33% Y/Y', size: 28, color: NOTE }] },
      { x: 343, top: 1140, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 343, top: 1200, anchor: 'end', lines: [{ text: '90% gross margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 866, top: 569, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 866, top: 669, anchor: 'middle', lines: [{ text: '+28% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1331, top: 427, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1331, top: 529, anchor: 'middle', lines: [{ text: '62% margin', size: 28, color: NOTE }, { text: '+4pp Y/Y', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1331, top: 1175, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1644, top: 1112, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1648, top: 1253, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1794, top: 343, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1794, top: 445, anchor: 'middle', lines: [{ text: '40% margin', size: 28, color: NOTE }, { text: '+4pp Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1800, top: 931, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2093, top: 648, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 399, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 501, anchor: 'middle', lines: [{ text: '36% margin', size: 28, color: NOTE }, { text: '+6pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 772, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2427, top: 901, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2427, top: 981, anchor: 'middle', lines: [{ text: '14% of revenue', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1073, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1153, anchor: 'middle', lines: [{ text: '7% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2432, top: 1244, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2432, top: 1324, anchor: 'middle', lines: [{ text: '2% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
  };

  const zhLabels = {
    product: { blocks: [{ x: 396, top: 511, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 396, top: 560, anchor: 'middle', lines: [{ text: '同比 +27%', size: 28, color: NOTE }] }, { x: 343, top: 729, anchor: 'end', parts: ['name'], nameSize: 40 }, { x: 343, top: 778, anchor: 'end', lines: [{ text: '毛利率 59%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 28, color: NOTE }] }] },
    service: { blocks: [{ x: 396, top: 1049, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 396, top: 1098, anchor: 'middle', lines: [{ text: '同比 +33%', size: 28, color: NOTE }] }, { x: 343, top: 1140, anchor: 'end', parts: ['name'], nameSize: 40 }, { x: 343, top: 1200, anchor: 'end', lines: [{ text: '毛利率 90%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 866, top: 569, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 866, top: 669, anchor: 'middle', lines: [{ text: '同比 +28%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1331, top: 427, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1331, top: 529, anchor: 'middle', lines: [{ text: '毛利率 62%', size: 28, color: NOTE }, { text: '同比 +4 个百分点', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1331, top: 1175, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1644, top: 1112, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1648, top: 1253, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1794, top: 343, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1794, top: 445, anchor: 'middle', lines: [{ text: '利润率 40%', size: 28, color: NOTE }, { text: '同比 +4 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1800, top: 931, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2093, top: 648, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 399, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 501, anchor: 'middle', lines: [{ text: '利润率 36%', size: 28, color: NOTE }, { text: '同比 +6 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 772, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2427, top: 901, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2427, top: 981, anchor: 'middle', lines: [{ text: '占收入 14%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1073, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1153, anchor: 'middle', lines: [{ text: '占收入 7%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2432, top: 1244, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2432, top: 1324, anchor: 'middle', lines: [{ text: '占收入 2%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q3-fy23', name: 'Arista · Q3 FY23', company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q3 FY23 Income Statement', period: 'Q3 FY23', periodNote: 'Ending Sep. 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100, hidePeriodStamp: true,
      logoWidth: 560, logoHeight: 88, logoY: 470, logoViewBox: '0 0 1115 175', logoSvg: ARISTA_LOGO,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        product: { x: 364, y: 604, width: 71, height: 297 }, service: { x: 364, y: 1139, width: 71, height: 50 }, revenue: { x: 831, y: 709, width: 70, height: 349 },
        gross_profit: { x: 1295, y: 611, width: 72, height: 217 }, cost_of_revenue: { x: 1298, y: 1021, width: 71, height: 130 }, product_cor: { x: 1551, y: 1084, width: 70, height: 120 }, service_cor: { x: 1553, y: 1296, width: 70, height: 7 },
        operating_profit: { x: 1758, y: 526, width: 70, height: 137 }, operating_expenses: { x: 1761, y: 837, width: 70, height: 76 }, other_income: { x: 2058, y: 623, width: 70, height: 8 },
        net_profit: { x: 2232, y: 421, width: 71, height: 125 }, tax: { x: 2232, y: 787, width: 71, height: 21 }, rnd: { x: 2232, y: 976, width: 71, height: 47 }, sm: { x: 2232, y: 1177, width: 71, height: 22 }, ga: { x: 2232, y: 1352, width: 71, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.285548, notes: ['+27% Y/Y', '59% gross margin', '+2pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.223908, notes: ['+33% Y/Y', '90% gross margin', '+1pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.509456, notes: ['+28% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.942419, notes: ['62% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.567037 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.602695, notes: ['40% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.339724 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.522866 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.044, valueText: '($44M)' },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.041, valueText: '$41M' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.545327, notes: ['36% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.099183 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.212353, notes: ['14% of revenue', '(2pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.102033, notes: ['7% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.025, valueText: '($25M)', notes: ['2% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.285548, sourceWidth: 297, targetWidth: 297, y0: 752.5, y1: 857.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.223908, sourceWidth: 50, targetWidth: 52, y0: 1164, y1: 1032, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.942419, sourceWidth: 218, targetWidth: 217, y0: 818, y1: 719.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.567037, sourceWidth: 131, targetWidth: 130, y0: 992.5, y1: 1086, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.602695, sourceWidth: 139, targetWidth: 137, y0: 680.5, y1: 594.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.339724, sourceWidth: 78, targetWidth: 76, y0: 789, y1: 875, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.522866, sourceWidth: 120, targetWidth: 120, y0: 1081, y1: 1144, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.044, sourceWidth: 10, targetWidth: 7, y0: 1146, y1: 1299.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.503512, sourceWidth: 115, targetWidth: 116, y0: 583.5, y1: 479, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.099183, sourceWidth: 22, targetWidth: 21, y0: 652, y1: 797.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.041, sourceWidth: 8, targetWidth: 9, y0: 627, y1: 541.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.212353, sourceWidth: 48, targetWidth: 47, y0: 861, y1: 999.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.102033, sourceWidth: 23, targetWidth: 22, y0: 896.5, y1: 1188, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.025, sourceWidth: 5, targetWidth: 4, y0: 910.5, y1: 1354, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2023 财年第三季度',
        meta: { title: '阿里斯塔网络 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +27%', '毛利率 59%', '同比 +2 个百分点'] }, service: { label: '服务', notes: ['同比 +33%', '毛利率 90%', '同比 +1 个百分点'] }, revenue: { label: '收入', notes: ['同比 +28%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 62%', '同比 +4 个百分点'] }, cost_of_revenue: { label: '收入成本' }, product_cor: { label: '产品' }, service_cor: { label: '服务' }, operating_profit: { label: '营业利润', notes: ['利润率 40%', '同比 +4 个百分点'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 36%', '同比 +6 个百分点'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 14%', '同比 (2 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (0 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

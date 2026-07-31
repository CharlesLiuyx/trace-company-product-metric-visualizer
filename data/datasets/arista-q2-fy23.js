/* Arista Q2 FY23 income-statement Sankey, reconstructed from the claimed source. */
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
      { x: 399.5, top: 564, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 399.5, top: 614, anchor: 'middle', lines: [{ text: '+42% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 729, anchor: 'end', lineGap: 9, lines: [
        { text: 'Product', size: 40, weight: 800 },
        { text: '57% gross margin', size: 28, color: NOTE },
        { text: '(3pp) Y/Y', size: 28, color: NOTE },
      ] },
    ] },
    service: { blocks: [
      { x: 399.5, top: 1063, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 399.5, top: 1114, anchor: 'middle', lines: [{ text: '+19% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 1159, anchor: 'end', lineGap: 9, lines: [
        { text: 'Service', size: 40, weight: 800 },
        { text: '79% gross margin', size: 28, color: NOTE },
        { text: '(2pp) Y/Y', size: 28, color: NOTE },
      ] },
    ] },
    revenue: { blocks: [{ x: 866, top: 571, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 866, top: 672, anchor: 'middle', lines: [{ text: '+39% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1338.5, top: 408, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1338.5, top: 509, anchor: 'middle', lines: [{ text: '61% margin', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1333.5, top: 1167, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1618, top: 1098, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1622, top: 1239, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1806, top: 324, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1806, top: 425, anchor: 'middle', lines: [{ text: '36% margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1808, top: 889, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2143, top: 576, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 382, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 483, anchor: 'middle', lines: [{ text: '34% margin', size: 28, color: NOTE }, { text: '+5pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 728, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2427, top: 901, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2427, top: 982, anchor: 'middle', lines: [{ text: '16% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1073, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1154, anchor: 'middle', lines: [{ text: '7% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2408, top: 1248, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2408, top: 1329, anchor: 'middle', lines: [{ text: '2% of revenue', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] }] },
  };

  const zhLabels = {
    product: { blocks: [{ x: 399.5, top: 564, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 399.5, top: 614, anchor: 'middle', lines: [{ text: '同比 +42%', size: 28, color: NOTE }] }, { x: 344, top: 729, anchor: 'end', lineGap: 9, lines: [{ text: '产品', size: 40, weight: 800 }, { text: '毛利率 57%', size: 28, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, color: NOTE }] }] },
    service: { blocks: [{ x: 399.5, top: 1063, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 399.5, top: 1114, anchor: 'middle', lines: [{ text: '同比 +19%', size: 28, color: NOTE }] }, { x: 344, top: 1159, anchor: 'end', lineGap: 9, lines: [{ text: '服务', size: 40, weight: 800 }, { text: '毛利率 79%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 866, top: 571, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 866, top: 672, anchor: 'middle', lines: [{ text: '同比 +39%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1338.5, top: 408, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1338.5, top: 509, anchor: 'middle', lines: [{ text: '毛利率 61%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1333.5, top: 1167, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1618, top: 1098, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1622, top: 1239, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1806, top: 324, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1806, top: 425, anchor: 'middle', lines: [{ text: '利润率 36%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1808, top: 889, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2143, top: 576, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 382, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 483, anchor: 'middle', lines: [{ text: '利润率 34%', size: 28, color: NOTE }, { text: '同比 +5 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 728, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2427, top: 901, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2427, top: 982, anchor: 'middle', lines: [{ text: '占收入 16%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1073, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1154, anchor: 'middle', lines: [{ text: '占收入 7%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2408, top: 1248, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2432, top: 1329, anchor: 'middle', lines: [{ text: '占收入 2%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q2-fy23',
    name: 'Arista · Q2 FY23',
    company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q2 FY23 Income Statement', period: 'Q2 FY23', periodNote: 'Ending Jun. 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100, hidePeriodStamp: true,
      logoWidth: 560, logoHeight: 88, logoY: 349, logoViewBox: '0 0 1115 175', logoSvg: ARISTA_LOGO,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        product: { x: 364, y: 653, width: 71, height: 275 }, service: { x: 364, y: 1158, width: 71, height: 42 }, revenue: { x: 831, y: 713, width: 70, height: 319 },
        gross_profit: { x: 1303, y: 591, width: 71, height: 192 }, cost_of_revenue: { x: 1298, y: 1022, width: 71, height: 124 }, product_cor: { x: 1531, y: 1073, width: 70, height: 116 }, service_cor: { x: 1533, y: 1271, width: 70, height: 6 },
        operating_profit: { x: 1771, y: 508, width: 70, height: 114 }, operating_expenses: { x: 1773, y: 792, width: 70, height: 76 }, other_income: { x: 2108, y: 542, width: 70, height: 11 },
        net_profit: { x: 2232, y: 384, width: 71, height: 107 }, tax: { x: 2232, y: 743, width: 71, height: 19 }, rnd: { x: 2232, y: 936, width: 71, height: 49 }, sm: { x: 2232, y: 1136, width: 71, height: 19 }, ga: { x: 2232, y: 1307, width: 71, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.261537, notes: ['+42% Y/Y', '57% gross margin', '(3pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.197387, notes: ['+19% Y/Y', '79% gross margin', '(2pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.458924, notes: ['+39% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.884129, notes: ['61% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.574795 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.530062, notes: ['36% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.354067 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.533613 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.041, valueText: '($41M)' },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.056, valueText: '$56M' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.491885, notes: ['34% margin', '+5pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.059, valueText: '($59M)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.23, valueText: '($230M)', notes: ['16% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.098, valueText: '($98M)', notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.026, valueText: '($26M)', notes: ['2% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.261537, sourceWidth: 275, targetWidth: 277, y0: 790.5, y1: 851.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.197387, sourceWidth: 42, targetWidth: 42, y0: 1179, y1: 1011, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.884129, sourceWidth: 192, targetWidth: 192, y0: 809, y1: 687, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.574795, sourceWidth: 127, targetWidth: 124, y0: 968.5, y1: 1084, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.530062, sourceWidth: 114, targetWidth: 114, y0: 648, y1: 565, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.354067, sourceWidth: 78, targetWidth: 76, y0: 744, y1: 830, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.533613, sourceWidth: 116, targetWidth: 116, y0: 1080, y1: 1131, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.041, sourceWidth: 8, targetWidth: 6, y0: 1142, y1: 1274, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.471062, sourceWidth: 95, targetWidth: 96, y0: 555.5, y1: 432, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.059, sourceWidth: 19, targetWidth: 19, y0: 612.5, y1: 752.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.056, sourceWidth: 11, targetWidth: 11, y0: 547.5, y1: 485.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.23, sourceWidth: 49, targetWidth: 49, y0: 816.5, y1: 960.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.098, sourceWidth: 21, targetWidth: 19, y0: 851.5, y1: 1145.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.026, sourceWidth: 6, targetWidth: 4, y0: 865, y1: 1309, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2023 财年第二季度',
        meta: { title: '阿里斯塔网络 2023 财年第二季度利润表', period: '2023 财年第二季度', periodNote: '截至 2023 年 6 月', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +42%', '毛利率 57%', '同比 (3 个百分点)'] }, service: { label: '服务', notes: ['同比 +19%', '毛利率 79%', '同比 (2 个百分点)'] }, revenue: { label: '收入', notes: ['同比 +39%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 61%', '同比 (1 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, product_cor: { label: '产品' }, service_cor: { label: '服务' }, operating_profit: { label: '营业利润', notes: ['利润率 36%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +5 个百分点'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 16%', '同比 (1 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (1 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 2%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

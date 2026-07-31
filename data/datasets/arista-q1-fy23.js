/* Arista Q1 FY23 income-statement Sankey, measured from the native Source. */
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
      { x: 399, top: 538, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 399, top: 589, anchor: 'middle', lines: [{ text: '+62% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 708, anchor: 'end', lineGap: 9, lines: [{ text: 'Product', size: 40, weight: 800 }, { text: '57% gross margin', size: 28, color: NOTE }, { text: '(3pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 396, top: 1037, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 396, top: 1088, anchor: 'middle', lines: [{ text: '+18% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 1130, anchor: 'end', lineGap: 9, lines: [{ text: 'Service', size: 40, weight: 800 }, { text: '79% gross margin', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [
      { x: 867, top: 571, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 867, top: 672, anchor: 'middle', lines: [{ text: '+54% Y/Y', size: 28, color: NOTE }] },
    ] },
    gross_profit: { blocks: [
      { x: 1334, top: 426, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1334, top: 529, anchor: 'middle', lines: [{ text: '57% margin', size: 28, color: NOTE }, { text: '(3pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    cost_of_revenue: { blocks: [{ x: 1322.5, top: 1174, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1622, top: 1145, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1626, top: 1296, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [
      { x: 1801, top: 320, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1801, top: 421, anchor: 'middle', lines: [{ text: '36% margin', size: 28, color: NOTE }, { text: '+4pp Y/Y', size: 28, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [{ x: 1804, top: 980, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2117, top: 600, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [
      { x: 2419, top: 381, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 2419, top: 482, anchor: 'middle', lines: [{ text: '32% margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
    tax: { blocks: [{ x: 2420, top: 730, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [
      { x: 2427, top: 897, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2427, top: 980, anchor: 'middle', lines: [{ text: '15% of revenue', size: 28, color: NOTE }, { text: '(5pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    sm: { blocks: [
      { x: 2429, top: 1069, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2429, top: 1152, anchor: 'middle', lines: [{ text: '7% of revenue', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    ga: { blocks: [
      { x: 2432, top: 1243, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2432, top: 1326, anchor: 'middle', lines: [{ text: '2% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] },
    ] },
  };

  const zhLabels = {
    product: { blocks: [{ x: 399, top: 538, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 399, top: 589, anchor: 'middle', lines: [{ text: '同比 +62%', size: 28, color: NOTE }] }, { x: 344, top: 708, anchor: 'end', lineGap: 9, lines: [{ text: '产品', size: 40, weight: 800 }, { text: '毛利率 57%', size: 28, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, color: NOTE }] }] },
    service: { blocks: [{ x: 396, top: 1037, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 396, top: 1088, anchor: 'middle', lines: [{ text: '同比 +18%', size: 28, color: NOTE }] }, { x: 344, top: 1130, anchor: 'end', lineGap: 9, lines: [{ text: '服务', size: 40, weight: 800 }, { text: '毛利率 79%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 867, top: 571, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 867, top: 672, anchor: 'middle', lines: [{ text: '同比 +54%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1334, top: 426, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1334, top: 529, anchor: 'middle', lines: [{ text: '毛利率 57%', size: 28, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1322.5, top: 1174, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1622, top: 1145, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1626, top: 1296, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1801, top: 320, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1801, top: 421, anchor: 'middle', lines: [{ text: '利润率 36%', size: 28, color: NOTE }, { text: '同比 +4 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1804, top: 980, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2117, top: 600, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 381, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 482, anchor: 'middle', lines: [{ text: '利润率 32%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2420, top: 730, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2427, top: 897, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2427, top: 980, anchor: 'middle', lines: [{ text: '占收入 15%', size: 28, color: NOTE }, { text: '同比 (5 个百分点)', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1069, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1152, anchor: 'middle', lines: [{ text: '占收入 7%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2432, top: 1243, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2432, top: 1326, anchor: 'middle', lines: [{ text: '占收入 2%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q1-fy23',
    name: 'Arista · Q1 FY23',
    company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q1 FY23 Income Statement', period: 'Q1 FY23', periodNote: 'Ending Mar. 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100, hidePeriodStamp: true,
      logoWidth: 560, logoHeight: 88, logoY: 388, logoViewBox: '0 0 1115 175', logoSvg: ARISTA_LOGO,
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
        product: { x: 367, y: 629, width: 71, height: 260 }, service: { x: 367, y: 1133, width: 71, height: 39 }, revenue: { x: 832, y: 716, width: 70, height: 301 },
        gross_profit: { x: 1298, y: 610, width: 72, height: 178 }, cost_of_revenue: { x: 1298, y: 1035, width: 72, height: 121 }, product_cor: { x: 1529, y: 1128, width: 70, height: 111 }, service_cor: { x: 1529, y: 1336, width: 70, height: 6 },
        operating_profit: { x: 1766, y: 503, width: 70, height: 106 }, operating_expenses: { x: 1769, y: 893, width: 70, height: 70 }, other_income: { x: 2086, y: 579, width: 70, height: 2 },
        net_profit: { x: 2235, y: 374, width: 71, height: 96 }, tax: { x: 2235, y: 756, width: 71, height: 12 }, rnd: { x: 2235, y: 964, width: 71, height: 43 }, sm: { x: 2235, y: 1153, width: 71, height: 19 }, ga: { x: 2235, y: 1324, width: 71, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.2, valueText: '$1.2B', notes: ['+62% Y/Y', '57% gross margin', '(3pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.2, valueText: '$0.2B', notes: ['+18% Y/Y', '79% gross margin', '(2pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.4, valueText: '$1.4B', notes: ['+54% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.8, valueText: '$0.8B', notes: ['57% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.5, valueText: '($0.5B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.5, valueText: '$0.5B', notes: ['36% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.3, valueText: '($0.3B)' },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.5, valueText: '($0.5B)' },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.038, valueText: '($38M)' },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.012, valueText: '$12M' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.4, valueText: '$0.4B', notes: ['32% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.059, valueText: '($59M)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.201, valueText: '($201M)', notes: ['15% of revenue', '(5pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.093, valueText: '($93M)', notes: ['7% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.025, valueText: '($25M)', notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.2, sourceWidth: 260, targetWidth: 262, y0: 759, y1: 847, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.2, sourceWidth: 39, targetWidth: 39, y0: 1152.5, y1: 997.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.8, sourceWidth: 181, targetWidth: 178, y0: 806.5, y1: 699, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.5, sourceWidth: 120, targetWidth: 121, y0: 957, y1: 1095.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.5, sourceWidth: 108, targetWidth: 106, y0: 664, y1: 556, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.3, sourceWidth: 70, targetWidth: 70, y0: 753, y1: 928, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.5, sourceWidth: 114, targetWidth: 111, y0: 1092, y1: 1183.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.038, sourceWidth: 7, targetWidth: 6, y0: 1152.5, y1: 1339, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 95, targetWidth: 94, y0: 550.5, y1: 421, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.059, sourceWidth: 11, targetWidth: 12, y0: 603.5, y1: 762, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.012, sourceWidth: 2, targetWidth: 2, y0: 580, y1: 469, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.201, sourceWidth: 44, targetWidth: 43, y0: 915, y1: 985.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.093, sourceWidth: 20, targetWidth: 19, y0: 947, y1: 1162.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.025, sourceWidth: 6, targetWidth: 3, y0: 960, y1: 1325.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2023 财年第一季度',
        meta: { title: '阿里斯塔网络 2023 财年第一季度利润表', period: '2023 财年第一季度', periodNote: '截至 2023 年 3 月', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +62%', '毛利率 57%', '同比 (3 个百分点)'] }, service: { label: '服务', notes: ['同比 +18%', '毛利率 79%', '同比 (2 个百分点)'] }, revenue: { label: '收入', notes: ['同比 +54%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 57%', '同比 (3 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, product_cor: { label: '产品' }, service_cor: { label: '服务' }, operating_profit: { label: '营业利润', notes: ['利润率 36%', '同比 +4 个百分点'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +1 个百分点'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 15%', '同比 (5 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (2 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

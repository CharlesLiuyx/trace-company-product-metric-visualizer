/* Arista Q4 FY23 income-statement Sankey, reconstructed from the claimed source. */
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
      { x: 399, top: 424, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 399, top: 475, anchor: 'middle', lines: [{ text: '+19% Y/Y', size: 28, color: NOTE }] },
      { x: 343, top: 640, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 343, top: 691, anchor: 'end', lines: [{ text: '62% gross margin', size: 28, color: NOTE }, { text: '+5pp Y/Y', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 396, top: 995, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 396, top: 1046, anchor: 'middle', lines: [{ text: '+29% Y/Y', size: 28, color: NOTE }] },
      { x: 343, top: 1095, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 343, top: 1146, anchor: 'end', lines: [{ text: '80% gross margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [
      { x: 867, top: 519, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 867, top: 619, anchor: 'middle', lines: [{ text: '+21% Y/Y', size: 28, color: NOTE }] },
    ] },
    gross_profit: { blocks: [
      { x: 1329, top: 345, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1329, top: 449, anchor: 'middle', lines: [{ text: '65% margin', size: 28, color: NOTE }, { text: '+5pp Y/Y', size: 28, color: NOTE }] },
    ] },
    cost_of_revenue: { blocks: [{ x: 1329, top: 1126, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1640, top: 1063, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1644, top: 1205, anchor: 'start', lineGap: 8, lines: [{ text: 'Service', size: 31, weight: 800 }, { text: '($45M)', size: 31 }] }] },
    operating_profit: { blocks: [
      { x: 1803, top: 261, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1803, top: 365, anchor: 'middle', lines: [{ text: '42% margin', size: 28, color: NOTE }, { text: '+5pp Y/Y', size: 28, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [{ x: 1798, top: 848, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2133, top: 552, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [
      { x: 2419, top: 353, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 2419, top: 457, anchor: 'middle', lines: [{ text: '40% margin', size: 28, color: NOTE }, { text: '+6pp Y/Y', size: 28, color: NOTE }] },
    ] },
    tax: { blocks: [{ x: 2419, top: 653, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [
      { x: 2427, top: 844, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2427, top: 926, anchor: 'middle', lines: [{ text: '14% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    sm: { blocks: [
      { x: 2429, top: 1027, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2429, top: 1109, anchor: 'middle', lines: [{ text: '7% of revenue', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] },
    ] },
    ga: { blocks: [
      { x: 2432, top: 1204, anchor: 'middle', lineGap: 8, lines: [{ text: 'G&A', size: 31, weight: 800 }, { text: '($42M)', size: 31 }] },
      { x: 2432, top: 1286, anchor: 'middle', lines: [{ text: '3% of revenue', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
  };

  const zhLabels = {
    product: { blocks: [
      { x: 399, top: 424, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 399, top: 475, anchor: 'middle', lines: [{ text: '同比 +19%', size: 28, color: NOTE }] },
      { x: 343, top: 640, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 343, top: 691, anchor: 'end', lines: [{ text: '毛利率 62%', size: 28, color: NOTE }, { text: '同比 +5 个百分点', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 396, top: 995, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 396, top: 1046, anchor: 'middle', lines: [{ text: '同比 +29%', size: 28, color: NOTE }] },
      { x: 343, top: 1095, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 343, top: 1146, anchor: 'end', lines: [{ text: '毛利率 80%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 867, top: 519, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 867, top: 619, anchor: 'middle', lines: [{ text: '同比 +21%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1329, top: 345, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1329, top: 449, anchor: 'middle', lines: [{ text: '毛利率 65%', size: 28, color: NOTE }, { text: '同比 +5 个百分点', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1329, top: 1126, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1640, top: 1063, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1644, top: 1205, anchor: 'start', lineGap: 8, lines: [{ text: '服务', size: 31, weight: 800 }, { text: '($45M)', size: 31 }] }] },
    operating_profit: { blocks: [{ x: 1803, top: 261, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1803, top: 365, anchor: 'middle', lines: [{ text: '利润率 42%', size: 28, color: NOTE }, { text: '同比 +5 个百分点', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1798, top: 848, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2133, top: 552, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 353, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 457, anchor: 'middle', lines: [{ text: '利润率 40%', size: 28, color: NOTE }, { text: '同比 +6 个百分点', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 653, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2427, top: 844, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2427, top: 926, anchor: 'middle', lines: [{ text: '占收入 14%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1027, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1109, anchor: 'middle', lines: [{ text: '占收入 7%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2432, top: 1204, anchor: 'middle', lineGap: 8, lines: [{ text: '一般及行政', size: 31, weight: 800 }, { text: '($42M)', size: 31 }] }, { x: 2432, top: 1286, anchor: 'middle', lines: [{ text: '占收入 3%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q4-fy23',
    name: 'Arista · Q4 FY23',
    company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q4 FY23 Income Statement', period: 'Q4 FY23', periodNote: 'Ending Dec. 2023', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100,
      hidePeriodStamp: true, logoWidth: 560, logoHeight: 88, logoY: 349, logoViewBox: '0 0 1115 175', logoSvg: ARISTA_LOGO,
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
        product: { x: 364, y: 527, width: 71, height: 283 },
        service: { x: 364, y: 1092, width: 71, height: 49 },
        revenue: { x: 831, y: 672, width: 70, height: 333 },
        gross_profit: { x: 1296, y: 532, width: 71, height: 215 },
        cost_of_revenue: { x: 1296, y: 996, width: 71, height: 115 },
        product_cor: { x: 1513, y: 1033, width: 70, height: 106 },
        service_cor: { x: 1511, y: 1210, width: 70, height: 7 },
        operating_profit: { x: 1766, y: 449, width: 70, height: 138 },
        operating_expenses: { x: 1763, y: 756, width: 70, height: 76 },
        other_income: { x: 2098, y: 534, width: 70, height: 9 },
        net_profit: { x: 2232, y: 357, width: 71, height: 131 },
        tax: { x: 2232, y: 682, width: 71, height: 15 },
        rnd: { x: 2232, y: 861, width: 71, height: 44 },
        sm: { x: 2230, y: 1068, width: 71, height: 22 },
        ga: { x: 2232, y: 1245, width: 71, height: 7 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.310314, notes: ['+19% Y/Y', '62% gross margin', '+5pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.230123, notes: ['+29% Y/Y', '80% gross margin', '+0pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.540437, notes: ['+21% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.999226, notes: ['65% margin', '+5pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.541211 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.495826 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.045385, valueText: '($45.385M)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.639914, notes: ['42% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.359312 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.054477 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.613636, notes: ['40% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.080755 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.211481, notes: ['14% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.105538, notes: ['7% of revenue', '+0pp Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.042293, valueText: '($42.293M)', notes: ['3% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.310314, sourceWidth: 283, targetWidth: 283, y0: 668.5, y1: 813.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.230123, sourceWidth: 49, targetWidth: 50, y0: 1116.5, y1: 980, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.999226, sourceWidth: 215, targetWidth: 215, y0: 779.5, y1: 639.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.541211, sourceWidth: 118, targetWidth: 115, y0: 946, y1: 1053.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.639914, sourceWidth: 138, targetWidth: 138, y0: 601, y1: 518, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.359312, sourceWidth: 77, targetWidth: 76, y0: 708.5, y1: 794, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.495826, sourceWidth: 106, targetWidth: 106, y0: 1049, y1: 1086, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.045385, sourceWidth: 9, targetWidth: 7, y0: 1106.5, y1: 1213.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.559159, sourceWidth: 123, targetWidth: 122, y0: 510.5, y1: 418, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.080755, sourceWidth: 15, targetWidth: 15, y0: 579.5, y1: 689.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.054477, sourceWidth: 9, targetWidth: 9, y0: 538.5, y1: 483.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.211481, sourceWidth: 44, targetWidth: 44, y0: 778, y1: 883, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.105538, sourceWidth: 22, targetWidth: 22, y0: 811, y1: 1079, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.042293, sourceWidth: 10, targetWidth: 7, y0: 827, y1: 1248.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2023 财年第四季度',
        meta: { title: '阿里斯塔网络 2023 财年第四季度利润表', period: '2023 财年第四季度', periodNote: '截至 2023 年 12 月', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +19%', '毛利率 62%', '同比 +5 个百分点'] },
          service: { label: '服务', notes: ['同比 +29%', '毛利率 80%', '同比 +0 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +21%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 65%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, product_cor: { label: '产品' }, service_cor: { label: '服务' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 40%', '同比 +6 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 +0 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 3%', '同比 +1 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* Arista Q3 FY22 income-statement Sankey, reconstructed from the claimed source. */
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
  const SOURCE_VALUE = {
    product: '$1.0B', service: '$0.2B', revenue: '$1.2B', gross_profit: '$0.7B', cost_of_revenue: '($0.5)',
    operating_profit: '$0.4B', operating_expenses: '($0.3B)', product_cor: '($0.4B)', service_cor: '($34M)',
    other_income: '$7M', net_profit: '$0.4B', tax: '($70M)', rnd: '($188M)', sm: '($81M)', ga: '($23M)',
  };
  const ARISTA_LOGO = `
    <g fill="#16325B">
      <path d="M391.027 103.426c36.994 0 55.491-25.688 55.491-51.378 0-25.688-18.498-50.353-57.546-50.353-28.773-1.029-134.617-1.029-134.617-1.029v173.668h32.879V28.413c25.691 0 90.43 0 103.79 0 18.496 0 27.745 6.163 27.745 23.635 0 14.385-9.247 22.606-26.718 22.606h-86.315l102.761 98.648h40.078l-73.991-71.932c7.197 2.056 15.417 2.056 16.444 2.056z"/>
      <path d="M480.429.669h31.856v173.665h-31.856z"/>
      <path d="M916.137 27.387V.669h-167.824l-18.497 26.718h86.641v146.947h31.856V27.387z"/>
      <path d="M678.756 72.6h-81.182c-16.438 0-25.689-7.192-25.689-21.58 0-16.44 11.305-23.633 25.689-23.633h110.98L722.941.669H596.546c-28.775 0-52.407 21.577-52.407 51.382 0 26.715 22.608 48.294 53.434 48.294h81.182c18.5 0 28.775 8.224 28.775 23.637 0 13.357-11.305 22.608-28.775 22.608H566.748l-16.44 27.744h132.558c33.912 0 52.406-24.658 52.406-52.404 0-25.697-21.58-49.33-56.516-49.33z"/>
      <path d="M1079.523 174.334h33.912s-94.539-149.003-102.764-162.362c-9.244-15.415-25.689-14.385-34.938-1.028-7.195 11.301-102.762 162.359-102.762 162.359h33.91l31.855-51.378h68.852l17.467-27.746h-67.82l36.996-59.603z"/>
      <path d="M104.325 11.972C97.133 23.272 1.564 174.334 1.564 174.334h33.91l31.858-51.381h67.822l17.47-27.746H84.8l36.993-59.602 86.321 137.697h33.911S147.483 24.301 139.26 10.943C130.013-2.413 113.574-1.387 104.325 11.972z"/>
    </g>`;

  const line = (text, size, color = undefined, weight = undefined) => ({
    text, size, ...(color ? { color } : {}), ...(weight ? { weight } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lines, lineGap });
  const makeLabels = (zh = false) => ({
    product: { blocks: [
      block(407, 496, 'middle', [line(SOURCE_VALUE.product, 39), line(zh ? '同比 +67%' : '+67% Y/Y', 28, NOTE)], 9),
      block(321, 661, 'end', [line(zh ? '产品' : 'Product', 40, undefined, 800), line(zh ? '毛利率 57%' : '57% gross margin', 28, NOTE), line(zh ? '同比 (3 个百分点)' : '(3pp) Y/Y', 28, NOTE)]),
    ] },
    service: { blocks: [
      block(407, 993, 'middle', [line(SOURCE_VALUE.service, 39), line(zh ? '同比 +16%' : '+16% Y/Y', 28, NOTE)], 9),
      block(341, 1071, 'end', [line(zh ? '服务' : 'Service', 40, undefined, 800), line(zh ? '毛利率 80%' : '80% gross margin', 28, NOTE), line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, NOTE)]),
    ] },
    revenue: { blocks: [block(971, 604, 'middle', [line(zh ? '收入' : 'Revenue', 40, undefined, 800), line(SOURCE_VALUE.revenue, 39), line(zh ? '同比 +57%' : '+57% Y/Y', 28, NOTE)], 9)] },
    gross_profit: { blocks: [block(1441, 444, 'middle', [line(zh ? '毛利润' : 'Gross profit', 40, undefined, 800), line(SOURCE_VALUE.gross_profit, 39), line(zh ? '毛利率 60%' : '60% margin', 28, NOTE), line(zh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 28, NOTE)], 9)] },
    cost_of_revenue: { blocks: [block(1441, 1168, 'middle', zh ? [line('收入成本', 38, undefined, 800), line('($0.5)', 37)] : [line('Cost of', 38, undefined, 800), line('revenue', 38, undefined, 800), line('($0.5)', 37)])] },
    product_cor: { blocks: [block(1773, 1175, 'start', [line(zh ? '产品' : 'Product', 31, undefined, 800), line(SOURCE_VALUE.product_cor, 31)])] },
    service_cor: { blocks: [block(1777, 1302, 'start', [line(zh ? '服务' : 'Service', 31, undefined, 800), line(SOURCE_VALUE.service_cor, 31)])] },
    operating_profit: { blocks: [block(1853, 368, 'middle', [line(zh ? '营业利润' : 'Operating profit', 40, undefined, 800), line(SOURCE_VALUE.operating_profit, 39), line(zh ? '利润率 35%' : '35% margin', 28, NOTE), line(zh ? '同比 +4 个百分点' : '+4pp Y/Y', 28, NOTE)], 9)] },
    operating_expenses: { blocks: [block(1853, 897, 'middle', zh ? [line('运营费用', 38, undefined, 800), line(SOURCE_VALUE.operating_expenses, 37)] : [line('Operating', 38, undefined, 800), line('expenses', 38, undefined, 800), line(SOURCE_VALUE.operating_expenses, 37)])] },
    other_income: { blocks: [block(2148, 640, 'middle', [line(zh ? '其他收入' : 'Other', 31, undefined, 800), line(SOURCE_VALUE.other_income, 31)])] },
    net_profit: { blocks: [block(2428, 413, 'middle', [line(zh ? '净利润' : 'Net profit', 40, undefined, 800), line(SOURCE_VALUE.net_profit, 39), line(zh ? '利润率 30%' : '30% margin', 28, NOTE), line(zh ? '同比持平' : 'Unchanged', 28, NOTE)], 9)] },
    tax: { blocks: [block(2424, 760, 'middle', [line(zh ? '税费' : 'Tax', 31, undefined, 800), line(SOURCE_VALUE.tax, 31)])] },
    rnd: { blocks: [block(2427, 893, 'middle', [line(zh ? '研发' : 'R&D', 31, undefined, 800), line(SOURCE_VALUE.rnd, 31), line(zh ? '占收入 16%' : '16% of revenue', 28, NOTE), line(zh ? '同比 (4 个百分点)' : '(4pp) Y/Y', 28, NOTE)])] },
    sm: { blocks: [block(2429, 1070, 'middle', [line(zh ? '销售与市场' : 'S&M', 31, undefined, 800), line(SOURCE_VALUE.sm, 31), line(zh ? '占收入 7%' : '7% of revenue', 28, NOTE), line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, NOTE)])] },
    ga: { blocks: [block(2432, 1244, 'middle', [line(zh ? '一般及行政' : 'G&A', 31, undefined, 800), line(SOURCE_VALUE.ga, 31), line(zh ? '占收入 2%' : '2% of revenue', 28, NOTE), line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', 28, NOTE)])] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q3-fy22', name: 'Arista · Q3 FY22', company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q3 FY22 Income Statement', period: 'Q3 FY22', periodNote: 'Ending Sep. 2022', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100, hidePeriodStamp: true,
      logoWidth: 560, logoHeight: 88, logoY: 420, logoViewBox: '0 0 1115 175', logoSvg: ARISTA_LOGO,
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
        product: { x: 374, y: 588, width: 71, height: 236 }, service: { x: 377, y: 1082, width: 71, height: 37 },
        revenue: { x: 936, y: 748, width: 70, height: 278 }, gross_profit: { x: 1408, y: 629, width: 72, height: 167 },
        cost_of_revenue: { x: 1413, y: 1037, width: 72, height: 109 }, product_cor: { x: 1667, y: 1162, width: 70, height: 100 },
        service_cor: { x: 1670, y: 1332, width: 70, height: 6 }, operating_profit: { x: 1822, y: 553, width: 70, height: 96 },
        operating_expenses: { x: 1822, y: 808, width: 70, height: 66 }, other_income: { x: 2108, y: 622, width: 72, height: 3 },
        net_profit: { x: 2228, y: 437, width: 71, height: 81 }, tax: { x: 2228, y: 783, width: 71, height: 14 },
        rnd: { x: 2228, y: 918, width: 71, height: 43 }, sm: { x: 2228, y: 1131, width: 71, height: 16 }, ga: { x: 2228, y: 1318, width: 71, height: 3 },
      },
      labels: makeLabels(false),
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.008689, valueText: '$1.008689B', notes: ['+67% Y/Y', '57% gross margin', '(3pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.168112, valueText: '$0.168112B', notes: ['+16% Y/Y', '80% gross margin', '(2pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.176801, valueText: '$1.176801B', notes: ['+57% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 0.70998, valueText: '$0.70998B', notes: ['60% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.466821, valueText: '($0.466821B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.417347, valueText: '$0.417347B', notes: ['35% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.292633, valueText: '($0.292633B)' },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.432569, valueText: '($0.432569B)' },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.034252, valueText: '($34.252M)' },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.006817, valueText: '$6.817M' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.353999, valueText: '$0.353999B', notes: ['30% margin', 'Unchanged'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.070165, valueText: '($70.165M)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.187807, valueText: '($187.807M)', notes: ['16% of revenue', '(4pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.081401, valueText: '($81.401M)', notes: ['7% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.023425, valueText: '($23.425M)', notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.008689, sourceWidth: 236, targetWidth: 238, y0: 706, y1: 867, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.168112, sourceWidth: 37, targetWidth: 40, y0: 1100.5, y1: 1006, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 0.70998, sourceWidth: 168, targetWidth: 167, y0: 832, y1: 712.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.466821, sourceWidth: 110, targetWidth: 109, y0: 971, y1: 1091.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.417347, sourceWidth: 98, targetWidth: 96, y0: 678, y1: 601, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.292633, sourceWidth: 69, targetWidth: 66, y0: 761.5, y1: 841, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.432569, sourceWidth: 101, targetWidth: 100, y0: 1087.5, y1: 1212, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.034252, sourceWidth: 8, targetWidth: 6, y0: 1142, y1: 1335, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.347182, sourceWidth: 80, targetWidth: 80, y0: 593, y1: 477, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.070165, sourceWidth: 16, targetWidth: 14, y0: 641, y1: 790, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.006817, sourceWidth: 3, targetWidth: 1, y0: 623.5, y1: 517.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.187807, sourceWidth: 43, targetWidth: 43, y0: 829.5, y1: 939.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.081401, sourceWidth: 18, targetWidth: 16, y0: 860, y1: 1139, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.023425, sourceWidth: 5, targetWidth: 3, y0: 871.5, y1: 1319.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: { zh: {
      name: '阿里斯塔网络 · 2022 财年第三季度',
      meta: { title: '阿里斯塔网络 2022 财年第三季度利润表', period: '2022 财年第三季度', periodNote: '截至 2022 年 9 月', titleSize: 92, titleTextLength: 1750 },
      nodes: {
        product: { label: '产品', notes: ['同比 +67%', '毛利率 57%', '同比 (3 个百分点)'] }, service: { label: '服务', notes: ['同比 +16%', '毛利率 80%', '同比 (2 个百分点)'] },
        revenue: { label: '收入', notes: ['同比 +57%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 60%', '同比 (4 个百分点)'] }, cost_of_revenue: { label: '收入成本' },
        product_cor: { label: '产品' }, service_cor: { label: '服务' }, operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +4 个百分点'] },
        operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 30%', '同比持平'] }, tax: { label: '税费' },
        rnd: { label: '研发', notes: ['占收入 16%', '同比 (4 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 7%', '同比 (2 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 2%', '同比 (1 个百分点)'] },
      },
      layout: { labels: makeLabels(true) },
    } },
  });
})();

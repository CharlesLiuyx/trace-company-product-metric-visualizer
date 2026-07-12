/* Arista Q1 FY26 income-statement Sankey, reconstructed from the claimed source. */
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
      { x: 395, top: 441, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 395, top: 492, anchor: 'middle', lines: [{ text: '+37% Y/Y', size: 28, color: NOTE }] },
      { x: 313, top: 626, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 313, top: 676, anchor: 'end', lines: [{ text: '58% gross margin', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 395, top: 928, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 395, top: 979, anchor: 'middle', lines: [{ text: '+27% Y/Y', size: 28, color: NOTE }] },
      { x: 313, top: 1018, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 313, top: 1068, anchor: 'end', lines: [{ text: '82% gross margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 863, top: 520, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 863, top: 620, anchor: 'middle', lines: [{ text: '+35% Y/Y', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1329, top: 359, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1329, top: 460, anchor: 'middle', lines: [{ text: '62% margin', size: 28, color: NOTE }, { text: '(2pp) Y/Y', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1329, top: 1094, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1638, top: 1069, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1638, top: 1225, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1795, top: 260, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1795, top: 360, anchor: 'middle', lines: [{ text: '43% margin', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1795, top: 904, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2147, top: 535, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2415, top: 328, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2415, top: 431, anchor: 'middle', lines: [{ text: '38% margin', size: 28, color: NOTE }, { text: '(3pp) Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2415, top: 685, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2415, top: 896, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2415, top: 979, anchor: 'middle', lines: [{ text: '13% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2415, top: 1069, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2415, top: 1152, anchor: 'middle', lines: [{ text: '5% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2415, top: 1238, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2415, top: 1321, anchor: 'middle', lines: [{ text: '1% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] }] },
  };

  const zhLabels = {
    product: { blocks: [{ x: 395, top: 441, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 395, top: 492, anchor: 'middle', lines: [{ text: '同比 +37%', size: 28, color: NOTE }] }, { x: 313, top: 626, anchor: 'end', parts: ['name'], nameSize: 40 }, { x: 313, top: 676, anchor: 'end', lines: [{ text: '毛利率 58%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    service: { blocks: [{ x: 395, top: 928, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 395, top: 979, anchor: 'middle', lines: [{ text: '同比 +27%', size: 28, color: NOTE }] }, { x: 313, top: 1018, anchor: 'end', parts: ['name'], nameSize: 40 }, { x: 313, top: 1068, anchor: 'end', lines: [{ text: '毛利率 82%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 863, top: 520, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 863, top: 620, anchor: 'middle', lines: [{ text: '同比 +35%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1329, top: 359, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1329, top: 460, anchor: 'middle', lines: [{ text: '毛利率 62%', size: 28, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1329, top: 1094, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1638, top: 1069, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1638, top: 1225, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1795, top: 260, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1795, top: 360, anchor: 'middle', lines: [{ text: '利润率 43%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1795, top: 904, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2147, top: 535, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2415, top: 328, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2415, top: 431, anchor: 'middle', lines: [{ text: '利润率 38%', size: 28, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2415, top: 685, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2415, top: 896, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2415, top: 979, anchor: 'middle', lines: [{ text: '占收入 13%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2415, top: 1069, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2415, top: 1152, anchor: 'middle', lines: [{ text: '占收入 5%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2415, top: 1238, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2415, top: 1321, anchor: 'middle', lines: [{ text: '占收入 1%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q1-fy26',
    name: 'Arista · Q1 FY26',
    company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q1-fy26.png', width: 2667, height: 1500 },
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
        product: { x: 359, y: 532, width: 72, height: 290 }, service: { x: 359, y: 1019, width: 72, height: 51 }, revenue: { x: 827, y: 660, width: 72, height: 340 },
        gross_profit: { x: 1293, y: 538, width: 72, height: 211 }, cost_of_revenue: { x: 1293, y: 943, width: 72, height: 129 }, product_cor: { x: 1547, y: 1038, width: 72, height: 120 }, service_cor: { x: 1547, y: 1253, width: 72, height: 10 },
        operating_profit: { x: 1758, y: 438, width: 72, height: 146 }, operating_expenses: { x: 1758, y: 815, width: 72, height: 65 }, other_income: { x: 2112, y: 501, width: 70, height: 13 },
        net_profit: { x: 2228, y: 329, width: 72, height: 129 }, tax: { x: 2228, y: 701, width: 72, height: 31 }, rnd: { x: 2228, y: 910, width: 72, height: 43 }, sm: { x: 2228, y: 1092, width: 72, height: 19 }, ga: { x: 2228, y: 1266, width: 72, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 2.3113, notes: ['+37% Y/Y', '58% gross margin', '(2pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.3977, notes: ['+27% Y/Y', '82% gross margin', '+0pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.709, notes: ['+35% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.6768, notes: ['62% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.0322 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.1578, notes: ['43% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.519 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.9619, valueText: '($1.0B)' },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.0703, valueText: '($0.1B)' },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1136, valueText: '$0.1B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.0229, valueText: '$1.0B', notes: ['38% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2485, valueText: '($0.3B)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.3437, valueText: '($0.3B)', notes: ['13% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.1416, valueText: '($0.1B)', notes: ['5% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.0337, valueText: '($34M)', notes: ['1% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 2.3113, sourceWidth: 290, targetWidth: 290, y0: 677, y1: 805, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.3977, sourceWidth: 51, targetWidth: 50, y0: 1044.5, y1: 975, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.6768, sourceWidth: 211, targetWidth: 211, y0: 765.5, y1: 643.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.0322, sourceWidth: 129, targetWidth: 129, y0: 935.5, y1: 1007.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.1578, sourceWidth: 146, targetWidth: 146, y0: 611, y1: 511, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.519, sourceWidth: 66, targetWidth: 65, y0: 715, y1: 847.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.9619, sourceWidth: 120, targetWidth: 120, y0: 1003, y1: 1098, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.0703, sourceWidth: 9, targetWidth: 10, y0: 1067.5, y1: 1258, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.9093, sourceWidth: 115, targetWidth: 115, y0: 495.5, y1: 386.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2485, sourceWidth: 31, targetWidth: 31, y0: 568.5, y1: 716.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.1136, sourceWidth: 13, targetWidth: 14, y0: 507.5, y1: 451, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.3437, sourceWidth: 43, targetWidth: 43, y0: 836.5, y1: 931.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.1416, sourceWidth: 18, targetWidth: 19, y0: 867, y1: 1101.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.0337, sourceWidth: 4, targetWidth: 4, y0: 878, y1: 1268, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2026 财年第一季度',
        meta: { title: '阿里斯塔网络 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月 31 日', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +37%', '毛利率 58%', '同比 (2 个百分点)'] }, service: { label: '服务', notes: ['同比 +27%', '毛利率 82%', '同比 +0 个百分点'] }, revenue: { label: '收入', notes: ['同比 +35%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 62%', '同比 (2 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, product_cor: { label: '产品' }, service_cor: { label: '服务' }, operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 (0 个百分点)'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 38%', '同比 (3 个百分点)'] }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 13%', '同比 (1 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 5%', '同比 (1 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

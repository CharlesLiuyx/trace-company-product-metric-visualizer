/* Arista Q3 FY25 income-statement Sankey, reconstructed from the claimed source. */
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
      { x: 397.5, top: 457, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 397.5, top: 506, anchor: 'middle', lines: [{ text: '+25% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 612, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 344, top: 663, anchor: 'end', lines: [{ text: '61% gross margin', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 397.5, top: 952, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 397.5, top: 1003, anchor: 'middle', lines: [{ text: '+38% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 1041, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 344, top: 1092, anchor: 'end', lines: [{ text: '82% gross margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [
      { x: 864, top: 534, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 864, top: 634, anchor: 'middle', lines: [{ text: '+27% Y/Y', size: 28, color: NOTE }] },
    ] },
    gross_profit: { blocks: [
      { x: 1331.5, top: 369, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1331.5, top: 473, anchor: 'middle', lines: [{ text: '65% margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] },
    ] },
    cost_of_revenue: { blocks: [{ x: 1331.5, top: 1111, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1620, top: 1060, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1624, top: 1222, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [
      { x: 1800, top: 278, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1800, top: 382, anchor: 'middle', lines: [{ text: '42% margin', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [{ x: 1800, top: 885, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2161, top: 512, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [
      { x: 2419, top: 332, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 2419, top: 436, anchor: 'middle', lines: [{ text: '37% margin', size: 28, color: NOTE }, { text: '(4pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    tax: { blocks: [{ x: 2419, top: 662, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [
      { x: 2432, top: 898, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2432, top: 980, anchor: 'middle', lines: [{ text: '14% of revenue', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
    sm: { blocks: [
      { x: 2424, top: 1072, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2424, top: 1155, anchor: 'middle', lines: [{ text: '7% of revenue', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
    ga: { blocks: [
      { x: 2432, top: 1247, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2432, top: 1329, anchor: 'middle', lines: [{ text: '2% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] },
    ] },
  };

  const zhLabels = {
    product: { blocks: [{ x: 397.5, top: 457, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 397.5, top: 506, anchor: 'middle', lines: [{ text: '同比 +25%', size: 28, color: NOTE }] }, { x: 344, top: 612, anchor: 'end', parts: ['name'], nameSize: 40 }, { x: 344, top: 663, anchor: 'end', lines: [{ text: '毛利率 61%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
    service: { blocks: [{ x: 397.5, top: 952, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 397.5, top: 1003, anchor: 'middle', lines: [{ text: '同比 +38%', size: 28, color: NOTE }] }, { x: 344, top: 1041, anchor: 'end', parts: ['name'], nameSize: 40 }, { x: 344, top: 1092, anchor: 'end', lines: [{ text: '毛利率 82%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 864, top: 534, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 864, top: 634, anchor: 'middle', lines: [{ text: '同比 +27%', size: 28, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1331.5, top: 369, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1331.5, top: 473, anchor: 'middle', lines: [{ text: '毛利率 65%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1331.5, top: 1111, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1620, top: 1060, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1624, top: 1222, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [{ x: 1800, top: 278, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1800, top: 382, anchor: 'middle', lines: [{ text: '利润率 42%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1800, top: 885, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2161, top: 512, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [{ x: 2419, top: 332, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 436, anchor: 'middle', lines: [{ text: '利润率 37%', size: 28, color: NOTE }, { text: '同比 (4 个百分点)', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2419, top: 662, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [{ x: 2432, top: 898, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2432, top: 980, anchor: 'middle', lines: [{ text: '占收入 14%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2424, top: 1072, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2424, top: 1155, anchor: 'middle', lines: [{ text: '占收入 7%', size: 28, color: NOTE }, { text: '同比 +1 个百分点', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2432, top: 1247, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2432, top: 1329, anchor: 'middle', lines: [{ text: '占收入 2%', size: 28, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q3-fy25',
    name: 'Arista · Q3 FY25',
    company: 'Arista',
    meta: {
      company: 'Arista',
      title: 'Arista Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/arista-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2100,
      hidePeriodStamp: true,
      logoWidth: 560,
      logoHeight: 88,
      logoY: 349,
      logoViewBox: '0 0 1115 175',
      logoSvg: ARISTA_LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        product: { x: 362, y: 546, width: 71, height: 257 },
        service: { x: 362, y: 1043, width: 71, height: 51 },
        revenue: { x: 829, y: 674, width: 70, height: 310 },
        gross_profit: { x: 1296, y: 552, width: 71, height: 201 },
        cost_of_revenue: { x: 1296, y: 989, width: 71, height: 109 },
        product_cor: { x: 1501, y: 1040, width: 70, height: 99 },
        service_cor: { x: 1501, y: 1248, width: 70, height: 7 },
        operating_profit: { x: 1764, y: 460, width: 70, height: 130 },
        operating_expenses: { x: 1764, y: 793, width: 70, height: 67 },
        other_income: { x: 2126, y: 479, width: 70, height: 11 },
        net_profit: { x: 2230, y: 321, width: 71, height: 113 },
        tax: { x: 2230, y: 678, width: 71, height: 27 },
        rnd: { x: 2230, y: 909, width: 71, height: 42 },
        sm: { x: 2230, y: 1102, width: 71, height: 18 },
        ga: { x: 2230, y: 1269, width: 71, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.9117, notes: ['+25% Y/Y', '61% gross margin', '(0pp) Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.3966, notes: ['+38% Y/Y', '82% gross margin', '+1pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.3083, notes: ['+27% Y/Y'], color: DARK, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.4902, notes: ['65% margin', '+0pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.8181 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.9782, notes: ['42% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.512 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.7455 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.0726 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.0989 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.853, notes: ['37% margin', '(4pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2241 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.326, notes: ['14% of revenue', '+1pp Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.1512, notes: ['7% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.0348, valueText: '($34.8M)', notes: ['2% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.9117, sourceWidth: 257, targetWidth: 257, y0: 674.5, y1: 802.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.3966, sourceWidth: 51, targetWidth: 53, y0: 1068.5, y1: 957.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.4902, sourceWidth: 201, targetWidth: 201, y0: 774.5, y1: 652.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.8181, sourceWidth: 109, targetWidth: 109, y0: 929.5, y1: 1043.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9782, sourceWidth: 133, targetWidth: 130, y0: 618.5, y1: 525, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.512, sourceWidth: 68, targetWidth: 67, y0: 719, y1: 826.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.7455, sourceWidth: 99, targetWidth: 99, y0: 1038.5, y1: 1089.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.0726, sourceWidth: 10, targetWidth: 7, y0: 1093, y1: 1251.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.7541, sourceWidth: 102, targetWidth: 100, y0: 511, y1: 371, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2241, sourceWidth: 28, targetWidth: 27, y0: 576, y1: 691.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.0989, sourceWidth: 11, targetWidth: 12, y0: 484.5, y1: 428, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.326, sourceWidth: 43, targetWidth: 42, y0: 814.5, y1: 930, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.1512, sourceWidth: 20, targetWidth: 18, y0: 846, y1: 1111, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.0348, sourceWidth: 4, targetWidth: 3, y0: 858, y1: 1270.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2025 财年第三季度',
        meta: {
          title: '阿里斯塔网络 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 92,
          titleTextLength: 1750,
        },
        nodes: {
          product: { label: '产品', notes: ['同比 +25%', '毛利率 61%', '同比 (0 个百分点)'] },
          service: { label: '服务', notes: ['同比 +38%', '毛利率 82%', '同比 +1 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 65%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          product_cor: { label: '产品' },
          service_cor: { label: '服务' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收入' },
          net_profit: { label: '净利润', notes: ['利润率 37%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 7%', '同比 +1 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

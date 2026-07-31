/* Arista Q3 FY24 income-statement Sankey, reconstructed from the claimed source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DARK = '#23395d';
  const DARK_LABEL = '#22385d';
  const HUB_LABEL = '#16315b';
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
      { x: 402.5, top: 454, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 402.5, top: 502, anchor: 'middle', lines: [{ text: '+19% Y/Y', size: 28, color: NOTE }] },
      { x: 230, top: 636, anchor: 'middle', semanticRole: 'source-offset-label', parts: ['name'], nameSize: 40 },
      { x: 230, top: 687, anchor: 'middle', lines: [{ text: '61% gross margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 402.5, top: 1001, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 402.5, top: 1049, anchor: 'middle', lines: [{ text: '+28% Y/Y', size: 28, color: NOTE }] },
      { x: 230, top: 1096, anchor: 'middle', semanticRole: 'source-offset-label', parts: ['name'], nameSize: 40 },
      { x: 230, top: 1147, anchor: 'middle', lines: [{ text: '81% gross margin', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [
      { x: 869, top: 566, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 869, top: 669, anchor: 'middle', lines: [{ text: '+20% Y/Y', size: 28, color: '#424242' }] },
    ] },
    gross_profit: { blocks: [
      { x: 1334, top: 403, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1334, top: 501, anchor: 'middle', lines: [{ text: '64% margin', size: 28, color: NOTE }, { text: '+2pp Y/Y', size: 28, color: NOTE }] },
    ] },
    cost_of_revenue: { blocks: [{ x: 1334, top: 1145, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1703, top: 1102, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1707, top: 1250, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [
      { x: 1799, top: 277, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1799, top: 381, anchor: 'middle', lines: [{ text: '43% margin', size: 28, color: NOTE }, { text: '+3pp Y/Y', size: 28, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [{ x: 1809, top: 870, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2121, top: 560, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [
      { x: 2419, top: 319, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 2419, top: 423, anchor: 'middle', lines: [{ text: '41% margin', size: 28, color: NOTE }, { text: '+5pp Y/Y', size: 28, color: NOTE }] },
    ] },
    tax: { blocks: [{ x: 2419, top: 678, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [
      { x: 2435, top: 871, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2435, top: 961, anchor: 'middle', lines: [{ text: '13% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    sm: { blocks: [
      { x: 2429, top: 1048, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2429, top: 1138, anchor: 'middle', lines: [{ text: '6% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    ga: { blocks: [
      { x: 2432, top: 1222, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2432, top: 1312, anchor: 'middle', lines: [{ text: '2% of revenue', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] },
    ] },
  };

  const zhLabels = Object.fromEntries(Object.entries(labels).map(([id, value]) => [id, value]));
  Object.assign(zhLabels, {
    product: { blocks: [{ x: 402.5, top: 454, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 402.5, top: 502, anchor: 'middle', lines: [{ text: '同比 +19%', size: 28, color: NOTE }] }, { x: 230, top: 636, anchor: 'middle', semanticRole: 'source-offset-label', parts: ['name'], nameSize: 40 }, { x: 230, top: 687, anchor: 'middle', lines: [{ text: '毛利率 61%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 28, color: NOTE }] }] },
    service: { blocks: [{ x: 402.5, top: 1001, anchor: 'middle', parts: ['value'], valueSize: 39 }, { x: 402.5, top: 1049, anchor: 'middle', lines: [{ text: '同比 +28%', size: 28, color: NOTE }] }, { x: 230, top: 1096, anchor: 'middle', semanticRole: 'source-offset-label', parts: ['name'], nameSize: 40 }, { x: 230, top: 1147, anchor: 'middle', lines: [{ text: '毛利率 81%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
    revenue: { blocks: [{ x: 869, top: 566, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 869, top: 669, anchor: 'middle', lines: [{ text: '同比 +20%', size: 28, color: '#424242' }] }] },
    gross_profit: { blocks: [{ x: 1334, top: 403, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1334, top: 501, anchor: 'middle', lines: [{ text: '毛利率 64%', size: 28, color: NOTE }, { text: '同比 +2 个百分点', size: 28, color: NOTE }] }] },
    operating_profit: { blocks: [{ x: 1799, top: 277, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 1799, top: 381, anchor: 'middle', lines: [{ text: '利润率 43%', size: 28, color: NOTE }, { text: '同比 +3 个百分点', size: 28, color: NOTE }] }] },
    net_profit: { blocks: [{ x: 2419, top: 319, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 }, { x: 2419, top: 423, anchor: 'middle', lines: [{ text: '利润率 41%', size: 28, color: NOTE }, { text: '同比 +5 个百分点', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2435, top: 871, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2435, top: 961, anchor: 'middle', lines: [{ text: '占收入 13%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    sm: { blocks: [{ x: 2429, top: 1048, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2429, top: 1138, anchor: 'middle', lines: [{ text: '占收入 6%', size: 28, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2432, top: 1222, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }, { x: 2432, top: 1312, anchor: 'middle', lines: [{ text: '占收入 2%', size: 28, color: NOTE }, { text: '同比 +0 个百分点', size: 28, color: NOTE }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q3-fy24',
    name: 'Arista · Q3 FY24',
    company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q3 FY24 Income Statement', period: 'Q3 FY24', periodNote: 'Ending Sep. 2024', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100, hidePeriodStamp: true,
      logoWidth: 560, logoHeight: 88, logoY: 349, logoViewBox: '0 0 1115 175', logoSvg: ARISTA_LOGO,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: DARK, label: DARK_LABEL }, hub: { node: DARK, label: HUB_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        product: { x: 367, y: 551, width: 71, height: 251 }, service: { x: 367, y: 1098, width: 71, height: 47 }, revenue: { x: 834, y: 714, width: 70, height: 302 },
        gross_profit: { x: 1298, y: 588, width: 72, height: 192 }, cost_of_revenue: { x: 1298, y: 1025, width: 72, height: 106 },
        product_cor: { x: 1609, y: 1101, width: 70, height: 96 }, service_cor: { x: 1609, y: 1294, width: 70, height: 6 },
        operating_profit: { x: 1774, y: 464, width: 70, height: 130 }, operating_expenses: { x: 1776, y: 793, width: 70, height: 60 },
        other_income: { x: 2086, y: 532, width: 70, height: 14 }, net_profit: { x: 2235, y: 368, width: 71, height: 124 }, tax: { x: 2235, y: 712, width: 71, height: 20 },
        rnd: { x: 2235, y: 898, width: 71, height: 38 }, sm: { x: 2235, y: 1090, width: 71, height: 15 }, ga: { x: 2235, y: 1262, width: 71, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.523807, notes: ['+19% Y/Y', '61% gross margin', '+2pp Y/Y'], color: DARK, labelColor: DARK_LABEL, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.287129, notes: ['+28% Y/Y', '81% gross margin', '+0pp Y/Y'], color: DARK, labelColor: DARK_LABEL, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.810936, notes: ['+20% Y/Y'], color: DARK, labelColor: HUB_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.161717, notes: ['64% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.649219 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.78525, notes: ['43% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.376467 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.593343 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.055876 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.09766 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.747938, notes: ['41% margin', '+5pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.134972 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.235824, notes: ['13% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.106832, notes: ['6% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.034, valueText: '($34M)', notes: ['2% of revenue', '+0pp Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.523807, sourceWidth: 251, targetWidth: 255, y0: 676.5, y1: 841.5, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.287129, sourceWidth: 47, targetWidth: 47, y0: 1121.5, y1: 992.5, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.161717, sourceWidth: 196, targetWidth: 192, y0: 812, y1: 684, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.649219, sourceWidth: 106, targetWidth: 106, y0: 963, y1: 1078, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.78525, sourceWidth: 131, targetWidth: 130, y0: 653.5, y1: 529, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.376467, sourceWidth: 61, targetWidth: 60, y0: 749.5, y1: 823, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.593343, sourceWidth: 100, targetWidth: 96, y0: 1075, y1: 1149, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.055876, sourceWidth: 6, targetWidth: 6, y0: 1128, y1: 1297, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.650278, sourceWidth: 109, targetWidth: 110, y0: 518.5, y1: 423, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.134972, sourceWidth: 21, targetWidth: 20, y0: 583.5, y1: 722, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.09766, sourceWidth: 14, targetWidth: 14, y0: 539, y1: 485, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.235824, sourceWidth: 40, targetWidth: 38, y0: 813, y1: 917, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.106832, sourceWidth: 17, targetWidth: 15, y0: 841.5, y1: 1097.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.034, sourceWidth: 3, targetWidth: 3, y0: 851.5, y1: 1263.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2024 财年第三季度',
        meta: { title: '阿里斯塔网络 2024 财年第三季度利润表', period: '2024 财年第三季度', periodNote: '截至 2024 年 9 月', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +19%', '毛利率 61%', '同比 +2 个百分点'] }, service: { label: '服务', notes: ['同比 +28%', '毛利率 81%', '同比 +0 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +20%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 64%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          product_cor: { label: '产品' }, service_cor: { label: '服务' }, operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' }, other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 41%', '同比 +5 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 13%', '同比 (1 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 2%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

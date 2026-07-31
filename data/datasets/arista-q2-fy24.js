/* Arista Q2 FY24 income-statement Sankey, reconstructed from the claimed source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const REVENUE_NOTE = '#424242';
  const DARK = '#23395d';
  const REVENUE_LABEL = '#16315b';
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
      { x: 402.5, top: 478, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 402.5, top: 513, anchor: 'middle', lines: [{ text: '+13% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 671, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 344, top: 722, anchor: 'end', lines: [{ text: '62% gross margin', size: 28, color: NOTE }, { text: '+4pp Y/Y', size: 28, color: NOTE }] },
    ] },
    service: { blocks: [
      { x: 402.5, top: 977, anchor: 'middle', parts: ['value'], valueSize: 39 },
      { x: 402.5, top: 1012, anchor: 'middle', lines: [{ text: '+35% Y/Y', size: 28, color: NOTE }] },
      { x: 344, top: 1064.5, anchor: 'end', parts: ['name'], nameSize: 40 },
      { x: 344, top: 1135, anchor: 'end', lines: [{ text: '80% gross margin', size: 28, color: NOTE }, { text: '+1pp Y/Y', size: 28, color: NOTE }] },
    ] },
    revenue: { blocks: [
      { x: 869, top: 549, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 869, top: 645, anchor: 'middle', lines: [{ text: '+16% Y/Y', size: 28, color: REVENUE_NOTE }] },
    ] },
    gross_profit: { blocks: [
      { x: 1336.5, top: 388, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1336.5, top: 491, anchor: 'middle', lines: [{ text: '65% margin', size: 28, color: NOTE }, { text: '+4pp Y/Y', size: 28, color: NOTE }] },
    ] },
    cost_of_revenue: { blocks: [{ x: 1339, top: 1140, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    product_cor: { blocks: [{ x: 1667, top: 1099, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    service_cor: { blocks: [{ x: 1671, top: 1214, anchor: 'start', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    operating_profit: { blocks: [
      { x: 1801, top: 251, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 1801, top: 355, anchor: 'middle', lines: [{ text: '41% margin', size: 28, color: NOTE }, { text: '+5pp Y/Y', size: 28, color: NOTE }] },
    ] },
    operating_expenses: { blocks: [{ x: 1801, top: 889, anchor: 'middle', parts: ['name', 'value'], nameSize: 38, valueSize: 37, lineGap: 8 }] },
    other_income: { blocks: [{ x: 2144, top: 534, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    net_profit: { blocks: [
      { x: 2419, top: 326, anchor: 'middle', parts: ['name', 'value'], nameSize: 40, valueSize: 39, lineGap: 9 },
      { x: 2419, top: 430, anchor: 'middle', lines: [{ text: '39% margin', size: 28, color: NOTE }, { text: '+6pp Y/Y', size: 28, color: NOTE }] },
    ] },
    tax: { blocks: [{ x: 2419, top: 650, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 }] },
    rnd: { blocks: [
      { x: 2435, top: 865, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2435, top: 947, anchor: 'middle', lines: [{ text: '16% of revenue', size: 28, color: NOTE }, { text: '+0pp Y/Y', size: 28, color: NOTE }] },
    ] },
    sm: { blocks: [
      { x: 2429, top: 1053, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2429, top: 1136, anchor: 'middle', lines: [{ text: '6% of revenue', size: 28, color: NOTE }, { text: '(1pp) Y/Y', size: 28, color: NOTE }] },
    ] },
    ga: { blocks: [
      { x: 2432, top: 1238, anchor: 'middle', parts: ['name', 'value'], nameSize: 31, valueSize: 31, lineGap: 8 },
      { x: 2432, top: 1321, anchor: 'middle', lines: [{ text: '2% of revenue', size: 28, color: NOTE }, { text: '(0pp) Y/Y', size: 28, color: NOTE }] },
    ] },
  };

  const zhLabels = Object.fromEntries(
    Object.entries(labels).map(([id, spec]) => [id, JSON.parse(JSON.stringify(spec))])
  );
  zhLabels.product.blocks[1].lines[0].text = '同比 +13%';
  zhLabels.product.blocks[3].lines[0].text = '毛利率 62%';
  zhLabels.product.blocks[3].lines[1].text = '同比 +4 个百分点';
  zhLabels.service.blocks[1].lines[0].text = '同比 +35%';
  zhLabels.service.blocks[3].lines[0].text = '毛利率 80%';
  zhLabels.service.blocks[3].lines[1].text = '同比 +1 个百分点';
  zhLabels.revenue.blocks[1].lines[0].text = '同比 +16%';
  zhLabels.gross_profit.blocks[1].lines[0].text = '毛利率 65%';
  zhLabels.gross_profit.blocks[1].lines[1].text = '同比 +4 个百分点';
  zhLabels.operating_profit.blocks[1].lines[0].text = '利润率 41%';
  zhLabels.operating_profit.blocks[1].lines[1].text = '同比 +5 个百分点';
  zhLabels.net_profit.blocks[1].lines[0].text = '利润率 39%';
  zhLabels.net_profit.blocks[1].lines[1].text = '同比 +6 个百分点';
  zhLabels.rnd.blocks[1].lines[0].text = '占收入 16%';
  zhLabels.rnd.blocks[1].lines[1].text = '同比 +0 个百分点';
  zhLabels.sm.blocks[1].lines[0].text = '占收入 6%';
  zhLabels.sm.blocks[1].lines[1].text = '同比 (1 个百分点)';
  zhLabels.ga.blocks[1].lines[0].text = '占收入 2%';
  zhLabels.ga.blocks[1].lines[1].text = '同比 (0 个百分点)';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arista-q2-fy24', name: 'Arista · Q2 FY24', company: 'Arista',
    meta: {
      company: 'Arista', title: 'Arista Q2 FY24 Income Statement', period: 'Q2 FY24', periodNote: 'Ending Jun. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/arista-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1333.5, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2100,
      hidePeriodStamp: true, logoWidth: 560, logoHeight: 88, logoY: 349, logoViewBox: '0 0 1115 175', logoSvg: ARISTA_LOGO,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE, nodeRadius: 0,
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        product: { x: 367, y: 564, width: 71, height: 257 }, service: { x: 367, y: 1066, width: 71, height: 46 },
        revenue: { x: 834, y: 692, width: 70, height: 304 }, gross_profit: { x: 1301, y: 569, width: 71, height: 197 },
        cost_of_revenue: { x: 1303, y: 1008, width: 72, height: 107 }, product_cor: { x: 1571, y: 1072, width: 70, height: 96 },
        service_cor: { x: 1569, y: 1241, width: 70, height: 7 }, operating_profit: { x: 1766, y: 433, width: 70, height: 124 },
        operating_expenses: { x: 1766, y: 794, width: 70, height: 69 }, other_income: { x: 2109, y: 500, width: 70, height: 10 },
        net_profit: { x: 2235, y: 329, width: 71, height: 119 }, tax: { x: 2235, y: 673, width: 71, height: 17 },
        rnd: { x: 2235, y: 874, width: 71, height: 47 }, sm: { x: 2235, y: 1079, width: 71, height: 17 },
        ga: { x: 2235, y: 1276, width: 71, height: 2 },
      },
      labels,
    },
    nodes: [
      { id: 'product', col: 0, order: 0, type: 'source', label: 'Product', value: 1.423271, notes: ['+13% Y/Y', '62% gross margin', '+4pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 0.267129, notes: ['+35% Y/Y', '80% gross margin', '+1pp Y/Y'], color: DARK, labelColor: DARK, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1.6904, notes: ['+16% Y/Y'], color: DARK, labelColor: REVENUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.097213, notes: ['65% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.593187 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.699573, notes: ['41% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.39764 },
      { id: 'product_cor', col: 3, order: 2, type: 'cost', label: 'Product', value: 0.540393 },
      { id: 'service_cor', col: 3, order: 3, type: 'cost', label: 'Service', value: 0.052794 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.070863 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.665428, notes: ['39% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.105008 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.267482, notes: ['16% of revenue', '+0pp Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 0.104403, notes: ['6% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.026, valueText: '($26M)', notes: ['2% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'product', target: 'revenue', value: 1.423271, sourceWidth: 257, targetWidth: 256, y0: 692.5, y1: 820, sourceOrder: 0, targetOrder: 0, linkTint: SOURCE_LINK },
      { source: 'service', target: 'revenue', value: 0.267129, sourceWidth: 46, targetWidth: 48, y0: 1089, y1: 972, sourceOrder: 0, targetOrder: 1, linkTint: SOURCE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.097213, sourceWidth: 197, targetWidth: 197, y0: 790.5, y1: 667.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.593187, sourceWidth: 107, targetWidth: 107, y0: 942.5, y1: 1061.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.699573, sourceWidth: 126, targetWidth: 124, y0: 632, y1: 495, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.39764, sourceWidth: 71, targetWidth: 69, y0: 730.5, y1: 828.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'product_cor', value: 0.540393, sourceWidth: 97, targetWidth: 96, y0: 1056.5, y1: 1120, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'cost_of_revenue', target: 'service_cor', value: 0.052794, sourceWidth: 10, targetWidth: 7, y0: 1110, y1: 1244.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.594565, sourceWidth: 105, targetWidth: 107, y0: 485.5, y1: 382.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.105008, sourceWidth: 19, targetWidth: 17, y0: 547.5, y1: 681.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.070863, sourceWidth: 10, targetWidth: 12, y0: 505, y1: 442, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.267482, sourceWidth: 47, targetWidth: 47, y0: 817.5, y1: 897.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 0.104403, sourceWidth: 18, targetWidth: 17, y0: 850, y1: 1087.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.026, sourceWidth: 4, targetWidth: 2, y0: 861, y1: 1277, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '阿里斯塔网络 · 2024 财年第二季度',
        meta: { title: '阿里斯塔网络 2024 财年第二季度利润表', period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月', titleSize: 92, titleTextLength: 1750 },
        nodes: {
          product: { label: '产品', notes: ['同比 +13%', '毛利率 62%', '同比 +4 个百分点'] }, service: { label: '服务', notes: ['同比 +35%', '毛利率 80%', '同比 +1 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +16%'] }, gross_profit: { label: '毛利润', notes: ['毛利率 65%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, product_cor: { label: '产品' }, service_cor: { label: '服务' },
          operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 +5 个百分点'] }, operating_expenses: { label: '运营费用' },
          other_income: { label: '其他收入' }, net_profit: { label: '净利润', notes: ['利润率 39%', '同比 +6 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 +0 个百分点'] }, sm: { label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 2%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* IBM Q3 FY23 income statement ($B), measured from the active Build source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#1f70c1';
  const BLUE_LABEL = '#2074c7';
  const BLUE_LINK = '#93b7db';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT = 2354;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const labels = {
    software: { blocks: [{ x: 422, top: 341, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+8% Y/Y', 28, 400, NOTE)] }, { x: 305, top: 474, anchor: 'end', lineGap: 8, lines: [line('Software', 39, 800, BLUE_LABEL), line('79% gross margin', 27, 400, NOTE)] }] },
    consulting: { blocks: [{ x: 419, top: 631, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+6% Y/Y', 28, 400, NOTE)] }, { x: 305, top: 750, anchor: 'end', lineGap: 8, lines: [line('Consulting', 39, 800, BLUE_LABEL), line('27% gross margin', 27, 400, NOTE)] }] },
    infrastructure: { blocks: [{ x: 427, top: 875, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(2%) Y/Y', 28, 400, NOTE)] }, { x: 342, top: 986, anchor: 'end', lineGap: 8, lines: [line('Infrastructure', 39, 800, BLUE_LABEL), line('54% gross margin', 27, 400, NOTE)] }] },
    financing: { blocks: [{ x: 422, top: 1086, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+7% Y/Y', 28, 400, NOTE)] }, { x: 305, top: 1160, anchor: 'end', lineGap: 8, lines: [line('Financing', 39, 800, BLUE_LABEL), line('50% gross margin', 27, 400, NOTE)] }] },
    other_revenue: { blocks: [{ x: 427, top: 1250, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(4%) Y/Y', 28, 400, NOTE)] }, { x: 261, top: 1326, anchor: 'end', lines: [line('Other', 39, 800, BLUE_LABEL)] }] },
    revenue: { blocks: [{ x: 892, top: 573, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+5% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1359, top: 426, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('54% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1361, top: 1159, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1537, top: 898, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1550, top: 1093, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1828, top: 336, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('15% margin', 28, 400, NOTE), line('+47pp Y/Y *', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 911, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 369, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('12% margin', 28, 400, NOTE), line('+34pp Y/Y *', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2388, top: 642, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: 2399, top: 761, anchor: 'start', lineGap: 8, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2401, top: 932, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: 2401, top: 1152, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  const zhLabels = {
    software: { blocks: [{ ...labels.software.blocks[0], lines: [line('$value', 38, 400), line('同比 +8%', 28, 400, NOTE)] }, { ...labels.software.blocks[1], lines: [line('软件', 39, 800, BLUE_LABEL), line('毛利率 79%', 27, 400, NOTE)] }] },
    consulting: { blocks: [{ ...labels.consulting.blocks[0], lines: [line('$value', 38, 400), line('同比 +6%', 28, 400, NOTE)] }, { ...labels.consulting.blocks[1], lines: [line('咨询', 39, 800, BLUE_LABEL), line('毛利率 27%', 27, 400, NOTE)] }] },
    infrastructure: { blocks: [{ ...labels.infrastructure.blocks[0], lines: [line('$value', 38, 400), line('同比 (2%)', 28, 400, NOTE)] }, { ...labels.infrastructure.blocks[1], lines: [line('基础设施', 39, 800, BLUE_LABEL), line('毛利率 54%', 27, 400, NOTE)] }] },
    financing: { blocks: [{ ...labels.financing.blocks[0], lines: [line('$value', 38, 400), line('同比 +7%', 28, 400, NOTE)] }, { ...labels.financing.blocks[1], lines: [line('融资', 39, 800, BLUE_LABEL), line('毛利率 50%', 27, 400, NOTE)] }] },
    other_revenue: { blocks: [{ ...labels.other_revenue.blocks[0], lines: [line('$value', 38, 400), line('同比 (4%)', 28, 400, NOTE)] }, { ...labels.other_revenue.blocks[1], lines: [line('其他', 39, 800, BLUE_LABEL)] }] },
    revenue: { blocks: [{ ...labels.revenue.blocks[0], lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +5%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ ...labels.gross_profit.blocks[0], lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 54%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ ...labels.cost_of_revenue.blocks[0], lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ ...labels.intellectual_property.blocks[0], lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ ...labels.other_income.blocks[0], lines: [line('其他', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ ...labels.operating_profit.blocks[0], lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 15%', 28, 400, NOTE), line('同比 +47 个百分点 *', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ ...labels.operating_expenses.blocks[0], lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ ...labels.net_profit.blocks[0], lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 12%', 28, 400, NOTE), line('同比 +34 个百分点 *', 28, 400, NOTE)] }] },
    interest: { blocks: [{ ...labels.interest.blocks[0], lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ ...labels.tax.blocks[0], lines: [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ ...labels.sga.blocks[0], lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ ...labels.rnd.blocks[0], lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  const footnote = (zh = false) => `<g data-node="pension-note" fill="${NOTE}" font-size="28" font-weight="400" text-anchor="end"><text x="2502" y="1323">${zh ? '* 2022 财年第三季度包含一次性、非现金、税前养老金' : '* Q3 FY22 Includes a one-time, non-cash, pre-tax pension'}</text><text x="2502" y="1361">${zh ? '结算费用 $5.9B（税后 $4.4B）。' : 'settlement charge of $5.9B ($4.4B net of tax).'}</text></g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q3-fy23', name: 'IBM · Q3 FY23', company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q3 FY23 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 1958,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 460, logoHeight: 210, logoY: 288, logoViewBox: '0 0 460 210', logoSvg: BUSINESS_ICONS.ibmLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE_LABEL }, hub: { node: BLUE, label: BLUE_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 39, value: 38, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 1,
      nodes: {
        software: { x: 389, y: 432, width: 71, height: 139 }, consulting: { x: 389, y: 718, width: 71, height: 110 },
        infrastructure: { x: 389, y: 967, width: 71, height: 73 }, financing: { x: 389, y: 1186, width: 71, height: 3 }, other_revenue: { x: 389, y: 1352, width: 71, height: 2 },
        revenue: { x: 856, y: 714, width: 70, height: 332 }, gross_profit: { x: 1318, y: 604, width: 71, height: 179 }, cost_of_revenue: { x: 1325, y: 990, width: 72, height: 149 },
        intellectual_property: { x: 1498, y: 877, width: 71, height: 4 }, other_income: { x: 1511, y: 1072, width: 71, height: 3 },
        operating_profit: { x: 1788, y: 517, width: 70, height: 50 }, operating_expenses: { x: 1791, y: 738, width: 70, height: 137 },
        net_profit: { x: 2257, y: 427, width: 71, height: 36 }, interest: { x: 2257, y: 668, width: 71, height: 8 }, tax: { x: 2257, y: 790, width: 71, height: 1 },
        sga: { x: 2257, y: 910, width: 71, height: 97 }, rnd: { x: 2257, y: 1162, width: 71, height: 35 },
      },
      labels,
    },
    annotationsSvg: footnote(),
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 6.3, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.0, valueText: '$5.0B', notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.3, notes: ['(2%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.1, notes: ['(4%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.8, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.0, valueText: '$8.0B', notes: ['54% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.0, valueText: '($7.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, valueText: '$0.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.2, valueText: '$0.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.3, notes: ['15% margin', '+47pp Y/Y *'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.7, notes: ['12% margin', '+34pp Y/Y *'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 4.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 6.3, sourceWidth: 139, targetWidth: 140, y0: 501.5, y1: 784, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.0, sourceWidth: 110, targetWidth: 111, y0: 773, y1: 909.5, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 3.3, sourceWidth: 73, targetWidth: 74, y0: 1003.5, y1: 1002, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 4, y0: 1187.5, y1: 1041, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 1353, y1: 1044.5, linkTint: BLUE_LINK, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 8.0, sourceWidth: 179, targetWidth: 179, y0: 803.5, y1: 693.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.0, sourceWidth: 153, targetWidth: 149, y0: 969.5, y1: 1064.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceWidth: 50, targetWidth: 50, y0: 629, y1: 542, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.7, sourceWidth: 129, targetWidth: 132, y0: 718.5, y1: 804, linkTint: RED_LINK, sourceOrder: 1, targetOrder: 0 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 878.5, y1: 871.5, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'other_income', target: 'operating_expenses', value: 0.2, sourceWidth: 3, targetWidth: 2, y0: 1073.5, y1: 874, linkTint: GREEN_LINK, targetOrder: 2 },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 36, targetWidth: 36, y0: 535, y1: 445, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 8, targetWidth: 8, y0: 557, y1: 672, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 6, targetWidth: 1, y0: 564, y1: 790.5, linkTint: RED_LINK, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 4.5, sourceWidth: 100, targetWidth: 97, y0: 788, y1: 958.5, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.7, sourceWidth: 37, targetWidth: 35, y0: 856.5, y1: 1179.5, linkTint: RED_LINK, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2023 财年第三季度',
        meta: { title: 'IBM 2023 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +8%'] }, consulting: { label: '咨询', notes: ['同比 +6%'] }, infrastructure: { label: '基础设施', notes: ['同比 (2%)'] }, financing: { label: '融资', notes: ['同比 +7%'] }, other_revenue: { label: '其他', notes: ['同比 (4%)'] },
          revenue: { label: '收入', notes: ['同比 +5%'] }, gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +47 个百分点 *'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +34 个百分点 *'] }, interest: { label: '利息' }, tax: { label: '税费' }, sga: { label: '销售、一般及行政' }, rnd: { label: '研发' },
        },
        layout: { labels: zhLabels }, annotationsSvg: footnote(true),
      },
    },
  });
})();

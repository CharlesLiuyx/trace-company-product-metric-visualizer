/* IBM Q3 FY25 income statement ($B), measured from the active Build source. */
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
  const sourceLabel = (valueNote, margin, label, valueTop, labelTop, labelX = 311) => ({
    blocks: [
      { x: 426, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: labelX, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), line(margin, 27, 400, NOTE)] },
    ],
  });

  const labels = {
    software: sourceLabel('+10% Y/Y', '83% gross margin', 'Software', 460, 586),
    consulting: sourceLabel('+3% Y/Y', '29% gross margin', 'Consulting', 739, 844),
    infrastructure: sourceLabel('+17% Y/Y', '57% gross margin', 'Infrastructure', 985, 1066, 342),
    financing: sourceLabel('+10% Y/Y', '46% gross margin', 'Financing', 1185, 1245),
    revenue: { blocks: [{ x: 893, top: 585, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+9% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1368, top: 431, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('57% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1368, top: 1184, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1546, top: 1001, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1539, top: 1148, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, GREEN_LABEL), line('income', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1815, top: 321, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('18% margin', 28, 400, NOTE), line('+20pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1815, top: 944, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 345, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('11% margin', 28, 400, NOTE), line('+13pp Y/Y', 28, 400, NOTE)] }] },
    tax: { blocks: [{ x: 2399, top: 594, anchor: 'start', lineGap: 8, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: 2389, top: 706, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT, top: 919, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('29% of revenue', 28, 400, NOTE), line('(4pp) Y/Y', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 1148, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('13% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)] }] },
  };

  const zhLabels = {
    software: sourceLabel('同比 +10%', '毛利率 83%', '软件', 460, 586),
    consulting: sourceLabel('同比 +3%', '毛利率 29%', '咨询', 739, 844),
    infrastructure: sourceLabel('同比 +17%', '毛利率 57%', '基础设施', 985, 1066, 342),
    financing: sourceLabel('同比 +10%', '毛利率 46%', '融资', 1185, 1245),
    revenue: { blocks: [{ x: 893, top: 585, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +9%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1368, top: 441, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 57%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1368, top: 1194, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1546, top: 1010, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1539, top: 1157, anchor: 'middle', lineGap: 8, lines: [line('其他收入', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1815, top: 330, anchor: 'middle', lineGap: 10, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 18%', 28, 400, NOTE), line('同比 +20 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1815, top: 954, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 355, anchor: 'start', lineGap: 10, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 11%', 28, 400, NOTE), line('同比 +13 个百分点', 28, 400, NOTE)] }] },
    tax: { blocks: [{ x: 2399, top: 602, anchor: 'start', lineGap: 8, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: 2389, top: 714, anchor: 'start', lineGap: 8, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT, top: 927, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 29%', 28, 400, NOTE), line('同比 (4 个百分点)', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 1156, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 13%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q3-fy25',
    name: 'IBM · Q3 FY25',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q3 FY25 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q3-fy25.png', width: 2667, height: 1500 },
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
        software: { x: 391, y: 547, width: 71, height: 145 }, consulting: { x: 391, y: 828, width: 71, height: 107 },
        infrastructure: { x: 391, y: 1073, width: 71, height: 71 }, financing: { x: 391, y: 1270, width: 71, height: 1 },
        revenue: { x: 858, y: 723, width: 70, height: 334 }, gross_profit: { x: 1332, y: 618, width: 72, height: 190 },
        cost_of_revenue: { x: 1332, y: 1027, width: 72, height: 142 }, intellectual_property: { x: 1510, y: 978, width: 71, height: 3 },
        other_income: { x: 1503, y: 1131, width: 71, height: 1 }, operating_profit: { x: 1780, y: 506, width: 70, height: 57 },
        operating_expenses: { x: 1780, y: 788, width: 70, height: 138 }, net_profit: { x: 2259, y: 394, width: 71, height: 34 },
        tax: { x: 2259, y: 626, width: 71, height: 12 }, interest: { x: 2259, y: 738, width: 71, height: 9 },
        sga: { x: 2259, y: 917, width: 71, height: 95 }, rnd: { x: 2259, y: 1163, width: 71, height: 41 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 7.2, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.3, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.6, notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 16.3, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.4, notes: ['57% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.0, valueText: '$7.0B', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: ['Other', 'income'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.9, notes: ['18% margin', '+20pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.7, notes: ['11% margin', '+13pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 6, order: 2, type: 'cost', label: 'Interest', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 4.7, notes: ['29% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 2.1, notes: ['13% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 7.2, sourceWidth: 145, targetWidth: 145, y0: 619.5, y1: 795.5, sourceOrder: 0, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'consulting', target: 'revenue', value: 5.3, sourceWidth: 107, targetWidth: 107, y0: 881.5, y1: 921.5, sourceOrder: 0, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'infrastructure', target: 'revenue', value: 3.6, sourceWidth: 71, targetWidth: 71, y0: 1108.5, y1: 1010.5, sourceOrder: 0, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 1, targetWidth: 11, y0: 1270.5, y1: 1051.5, sourceOrder: 0, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 9.4, sourceWidth: 190, targetWidth: 190, y0: 818, y1: 713, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.0, sourceWidth: 144, targetWidth: 142, y0: 985, y1: 1098, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.9, sourceWidth: 57, targetWidth: 57, y0: 646.5, y1: 534.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.4, sourceWidth: 133, targetWidth: 134, y0: 741.5, y1: 855, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 979.5, y1: 923.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 0.2, sourceWidth: 1, targetWidth: 1, y0: 1131.5, y1: 925.5, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 34, targetWidth: 34, y0: 523, y1: 411, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 12, targetWidth: 12, y0: 547, y1: 632, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.5, sourceWidth: 9, targetWidth: 9, y0: 558.5, y1: 742.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 4.7, sourceWidth: 95, targetWidth: 95, y0: 835.5, y1: 964.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.1, sourceWidth: 43, targetWidth: 41, y0: 904.5, y1: 1183.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2025 财年第三季度',
        meta: { title: 'IBM 2025 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +10%'] }, consulting: { label: '咨询', notes: ['同比 +3%'] }, infrastructure: { label: '基础设施', notes: ['同比 +17%'] }, financing: { label: '融资', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] }, gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他收入' }, operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +20 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +13 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售、一般及行政', notes: ['占收入 29%', '同比 (4 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 13%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

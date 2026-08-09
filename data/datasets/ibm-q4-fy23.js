/* IBM Q4 FY23 income statement ($B), measured from the active Build source. */
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
  const RIGHT = 2398;
  const NET_RIGHT = 2367;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const sourceLabel = (valueNote, label, margin, valueTop, labelTop, valueX = 426, labelX = 292) => ({
    blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: labelX, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), line(margin, 27, 400, NOTE)] },
    ],
  });

  const labels = {
    software: sourceLabel('+3% Y/Y', 'Software', '82% gross margin', 354, 494),
    consulting: sourceLabel('+6% Y/Y', 'Consulting', '28% gross margin', 628, 742),
    infrastructure: sourceLabel('+3% Y/Y', 'Infrastructure', '61% gross margin', 855, 970, 426, 337),
    financing: sourceLabel('+2% Y/Y', 'Financing', '50% gross margin', 1075, 1146),
    other_revenue: { blocks: [
      { x: 426, top: 1267, anchor: 'middle', lines: [line('$value', 36, 400)] },
      { x: 254, top: 1304, anchor: 'end', lines: [line('Other', 37, 800, BLUE_LABEL)] },
    ] },
    revenue: { blocks: [{ x: 881, top: 576, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+4% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1360, top: 433, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('59% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1360, top: 1155, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1533, top: 1008, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1537, top: 1269, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1844, top: 294, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('24% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 989, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: NET_RIGHT, top: 334, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('19% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    tax: { blocks: [{ x: RIGHT, top: 610, anchor: 'start', lineGap: 8, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: 2389, top: 749, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT, top: 1030, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 1265, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  const zhLabels = {
    software: sourceLabel('同比 +3%', '软件', '毛利率 82%', 354, 494),
    consulting: sourceLabel('同比 +6%', '咨询', '毛利率 28%', 628, 742),
    infrastructure: sourceLabel('同比 +3%', '基础设施', '毛利率 61%', 855, 970, 426, 337),
    financing: sourceLabel('同比 +2%', '融资', '毛利率 50%', 1075, 1146),
    other_revenue: { blocks: [{ x: 426, top: 1267, anchor: 'middle', lines: [line('$value', 36, 400)] }, { x: 254, top: 1304, anchor: 'end', lines: [line('其他', 37, 800, BLUE_LABEL)] }] },
    revenue: { blocks: [{ x: 881, top: 576, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +4%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1360, top: 433, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 59%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1360, top: 1164, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1533, top: 1008, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1537, top: 1269, anchor: 'middle', lineGap: 8, lines: [line('其他', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1844, top: 294, anchor: 'middle', lineGap: 10, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 24%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 1001, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: NET_RIGHT, top: 334, anchor: 'start', lineGap: 10, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 19%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    tax: { blocks: [{ x: RIGHT, top: 610, anchor: 'start', lineGap: 8, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: 2389, top: 749, anchor: 'start', lineGap: 8, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT, top: 1030, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 1265, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q4-fy23',
    name: 'IBM · Q4 FY23',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q4 FY23 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q4-fy23.png', width: 2667, height: 1500 },
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
        software: { x: 390, y: 447, width: 72, height: 139 }, consulting: { x: 390, y: 716, width: 72, height: 94 },
        infrastructure: { x: 390, y: 944, width: 72, height: 85 }, financing: { x: 390, y: 1176, width: 72, height: 3 },
        other_revenue: { x: 390, y: 1330, width: 72, height: 1 }, revenue: { x: 857, y: 717, width: 72, height: 321 },
        gross_profit: { x: 1325, y: 618, width: 72, height: 190 }, cost_of_revenue: { x: 1325, y: 1014, width: 72, height: 133 },
        intellectual_property: { x: 1497, y: 994, width: 72, height: 2 }, other_income: { x: 1497, y: 1253, width: 72, height: 2 },
        operating_profit: { x: 1788, y: 474, width: 72, height: 78 }, operating_expenses: { x: 1788, y: 858, width: 72, height: 120 },
        net_profit: { x: 2261, y: 353, width: 72, height: 60 }, tax: { x: 2261, y: 649, width: 72, height: 8 },
        interest: { x: 2261, y: 788, width: 72, height: 7 }, sga: { x: 2261, y: 1026, width: 72, height: 89 },
        rnd: { x: 2261, y: 1291, width: 72, height: 33 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 7.5, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.0, valueText: '$5.0B', notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 4.6, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.041, valueText: '$41M', color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 17.3, notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.3, notes: ['59% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.2, valueText: '$$0.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.1, notes: ['24% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.3, notes: ['19% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 4.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 7.5, sourceWidth: 139, targetWidth: 139, y0: 516.5, y1: 786.5, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.0, sourceWidth: 94, targetWidth: 93, y0: 763, y1: 902.5, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 4.6, sourceWidth: 85, targetWidth: 85, y0: 986.5, y1: 991.5, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 1177.5, y1: 1035.5, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.041, sourceWidth: 1, targetWidth: 1, y0: 1330.5, y1: 1037.5, linkTint: BLUE_LINK, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 10.3, sourceWidth: 193, targetWidth: 190, y0: 813.5, y1: 713, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.1, sourceWidth: 128, targetWidth: 133, y0: 974, y1: 1080.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.1, sourceWidth: 76, targetWidth: 78, y0: 656, y1: 513, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.1, sourceWidth: 114, targetWidth: 116, y0: 751, y1: 916, linkTint: RED_LINK, sourceOrder: 1, targetOrder: 0 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 995, y1: 975, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'other_income', target: 'operating_expenses', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 1254, y1: 977, linkTint: GREEN_LINK, targetOrder: 2 },
      { source: 'operating_profit', target: 'net_profit', value: 3.3, sourceWidth: 60, targetWidth: 60, y0: 504, y1: 383, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 10, targetWidth: 8, y0: 539, y1: 653, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 8, targetWidth: 7, y0: 548, y1: 791.5, linkTint: RED_LINK, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 4.8, sourceWidth: 89, targetWidth: 89, y0: 902.5, y1: 1070.5, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.7, sourceWidth: 31, targetWidth: 33, y0: 962.5, y1: 1307.5, linkTint: RED_LINK, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2023 财年第四季度',
        meta: { title: 'IBM 2023 财年第四季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +3%'] }, consulting: { label: '咨询', notes: ['同比 +6%'] }, infrastructure: { label: '基础设施', notes: ['同比 +3%'] }, financing: { label: '融资', notes: ['同比 +2%'] }, other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +4%'] }, gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 24%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 +2 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售、一般及行政' }, rnd: { label: '研发' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* IBM Q1 FY23 income statement ($B), measured from the active Build source. */
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
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight, color, extra = {}) => ({ text, size, weight, ...(color ? { color } : {}), ...extra });
  const block = (x, top, anchor, lines, lineGap = 8, semanticRole = '') => ({
    x, top, anchor, lineGap, lines, ...(semanticRole ? { semanticRole } : {}),
  });
  const sourceLabel = (valueX, valueTop, valueNote, nameX, nameTop, name, margin, marginTextLength) => ({
    blocks: [
      block(valueX, valueTop, 'middle', [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)]),
      block(nameX, nameTop, 'end', [line(name, 39, 800, BLUE_LABEL), line(margin, 27, 400, NOTE, marginTextLength ? { textLength: marginTextLength } : {})]),
    ],
  });

  const labels = {
    software: sourceLabel(427, 341, '+3% Y/Y', 312, 461, 'Software', '80% gross margin', 226),
    consulting: sourceLabel(427, 610, '+3% Y/Y', 312, 721, 'Consulting', '25% gross margin', 226),
    infrastructure: sourceLabel(427, 867, '(4%) Y/Y', 341, 954, 'Infrastructure', '52% gross margin'),
    financing: sourceLabel(424, 1090, '+27% Y/Y', 312, 1144, 'Financing', '44% gross margin', 227),
    other_revenue: { blocks: [
      block(424, 1270, 'middle', [line('$value', 38, 400), line('(67%) Y/Y', 28, 400, NOTE)]),
      block(261, 1325, 'end', [line('Other', 39, 800, BLUE_LABEL)], 8, 'reference-offset-side-label'),
    ] },
    revenue: { blocks: [block(888, 568, 'middle', [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+0% Y/Y', 28, 400, NOTE)], 10)] },
    gross_profit: { blocks: [block(1359, 441, 'middle', [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('54% margin', 28, 400, NOTE), line('+3pp Y/Y', 28, 400, NOTE)], 10)] },
    cost_of_revenue: { blocks: [block(1359, 1115, 'middle', [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 10)] },
    intellectual_property: { blocks: [block(1575, 951, 'middle', [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)])] },
    other_income: { blocks: [block(1580, 1134, 'middle', [line('Other', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)])] },
    operating_profit: { blocks: [block(1827, 342, 'middle', [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('10% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)], 10)] },
    operating_expenses: { blocks: [block(1828, 925, 'middle', [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 10)] },
    net_profit: { blocks: [block(2354, 370, 'start', [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('7% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)], 10)] },
    interest: { blocks: [block(2386, 591, 'start', [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    tax: { blocks: [block(2399, 740, 'start', [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    sga: { blocks: [block(2401, 957, 'start', [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    rnd: { blocks: [block(2401, 1180, 'start', [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
  };

  const zhLabels = {
    software: sourceLabel(427, 341, '同比 +3%', 312, 461, '软件', '毛利率 80%'),
    consulting: sourceLabel(427, 610, '同比 +3%', 312, 721, '咨询', '毛利率 25%'),
    infrastructure: sourceLabel(427, 867, '同比 (4%)', 341, 954, '基础设施', '毛利率 52%'),
    financing: sourceLabel(424, 1090, '同比 +27%', 312, 1144, '融资', '毛利率 44%'),
    other_revenue: { blocks: [block(424, 1279, 'middle', [line('$value', 38, 400), line('同比 (67%)', 28, 400, NOTE)]), block(261, 1334, 'end', [line('其他', 39, 800, BLUE_LABEL)])] },
    revenue: { blocks: [block(888, 568, 'middle', [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +0%', 28, 400, NOTE)], 10)] },
    gross_profit: { blocks: [block(1359, 441, 'middle', [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 54%', 28, 400, NOTE), line('同比 +3 个百分点', 28, 400, NOTE)], 10)] },
    cost_of_revenue: { blocks: [block(1359, 1115, 'middle', [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 10)] },
    intellectual_property: { blocks: [block(1575, 951, 'middle', [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)])] },
    other_income: { blocks: [block(1580, 1134, 'middle', [line('其他', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)])] },
    operating_profit: { blocks: [block(1827, 342, 'middle', [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 10%', 28, 400, NOTE), line('同比 +4 个百分点', 28, 400, NOTE)], 10)] },
    operating_expenses: { blocks: [block(1828, 939, 'middle', [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 10)] },
    net_profit: { blocks: [block(2354, 370, 'start', [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 7%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)], 10)] },
    interest: { blocks: [block(2399, 591, 'start', [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    tax: { blocks: [block(2399, 740, 'start', [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    sga: { blocks: [block(2401, 957, 'start', [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
    rnd: { blocks: [block(2401, 1180, 'start', [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q1-fy23',
    name: 'IBM · Q1 FY23',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q1 FY23 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q1-fy23.png', width: 2667, height: 1500 },
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
        software: { x: 392, y: 430, width: 71, height: 119 }, consulting: { x: 392, y: 700, width: 71, height: 100 },
        infrastructure: { x: 392, y: 959, width: 71, height: 61 }, financing: { x: 392, y: 1179, width: 71, height: 2 },
        other_revenue: { x: 392, y: 1372, width: 71, height: 1 }, revenue: { x: 854, y: 713, width: 70, height: 289 },
        gross_profit: { x: 1323, y: 624, width: 72, height: 151 }, cost_of_revenue: { x: 1326, y: 958, width: 71, height: 135 },
        intellectual_property: { x: 1536, y: 933, width: 71, height: 2 }, other_income: { x: 1546, y: 1112, width: 71, height: 2 },
        operating_profit: { x: 1791, y: 521, width: 70, height: 28 }, operating_expenses: { x: 1794, y: 752, width: 70, height: 131 },
        net_profit: { x: 2260, y: 408, width: 71, height: 15 }, interest: { x: 2260, y: 644, width: 71, height: 5 },
        tax: { x: 2260, y: 765, width: 71, height: 2 }, sga: { x: 2260, y: 940, width: 71, height: 97 },
        rnd: { x: 2260, y: 1204, width: 71, height: 32 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 5.9, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.0, valueText: '$5.0B', notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.1, notes: ['(4%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['+27% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.1, notes: ['(67%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.3, notes: ['+0% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.5, notes: ['54% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.2, valueText: '$$0.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, notes: ['10% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.9, notes: ['7% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 4.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 5.9, sourceWidth: 119, targetWidth: 119, y0: 489.5, y1: 772.5, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.0, sourceWidth: 100, targetWidth: 100, y0: 750, y1: 882, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 3.1, sourceWidth: 61, targetWidth: 61, y0: 989.5, y1: 962.5, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 6, y0: 1180, y1: 996, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 1, targetWidth: 3, y0: 1372.5, y1: 1000.5, linkTint: BLUE_LINK, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 7.5, sourceWidth: 151, targetWidth: 151, y0: 788.5, y1: 699.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.7, sourceWidth: 138, targetWidth: 135, y0: 933, y1: 1025.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.4, sourceWidth: 27, targetWidth: 28, y0: 637.5, y1: 535, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.1, sourceWidth: 124, targetWidth: 123, y0: 713, y1: 813.5, linkTint: RED_LINK, sourceOrder: 1, targetOrder: 0 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 2, targetWidth: 6, y0: 934, y1: 878, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'other_income', target: 'operating_expenses', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 1113, y1: 882, linkTint: GREEN_LINK, targetOrder: 2 },
      { source: 'operating_profit', target: 'net_profit', value: 0.9, sourceWidth: 18, targetWidth: 15, y0: 530, y1: 415.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 5, targetWidth: 5, y0: 541.5, y1: 646.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 5, targetWidth: 2, y0: 546.5, y1: 766, linkTint: RED_LINK, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 4.9, sourceWidth: 97, targetWidth: 97, y0: 800.5, y1: 988.5, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.7, sourceWidth: 34, targetWidth: 32, y0: 866, y1: 1220, linkTint: RED_LINK, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2023 财年第一季度',
        meta: { title: 'IBM 2023 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +3%'] }, consulting: { label: '咨询', notes: ['同比 +3%'] }, infrastructure: { label: '基础设施', notes: ['同比 (4%)'] }, financing: { label: '融资', notes: ['同比 +27%'] }, other_revenue: { label: '其他', notes: ['同比 (67%)'] },
          revenue: { label: '收入', notes: ['同比 +0%'] }, gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +3 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 +4 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 +2 个百分点'] }, interest: { label: '利息' }, tax: { label: '税费' }, sga: { label: '销售、一般及行政' }, rnd: { label: '研发' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

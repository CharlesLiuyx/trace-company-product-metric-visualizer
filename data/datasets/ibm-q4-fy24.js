/* IBM Q4 FY24 income statement ($B), measured from the active Build source. */
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

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const labels = (zh) => ({
    software: { blocks: [
      { x: 430, top: 444, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(zh ? '同比 +10%' : '+10% Y/Y', 28, 400, NOTE)] },
      { x: 309, top: 553, anchor: 'end', lineGap: 8, lines: [line(zh ? '软件' : 'Software', 39, 800, BLUE_LABEL), line(zh ? '毛利率 85%' : '85% gross margin', 27, 400, NOTE)] },
    ] },
    consulting: { blocks: [
      { x: 422, top: 681, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(zh ? '同比 (2%)' : '(2%) Y/Y', 28, 400, NOTE)] },
      { x: 301, top: 769, anchor: 'end', lineGap: 8, lines: [line(zh ? '咨询' : 'Consulting', 39, 800, BLUE_LABEL), line(zh ? '毛利率 28%' : '28% gross margin', 27, 400, NOTE)] },
    ] },
    infrastructure: { blocks: [
      { x: 444, top: 881, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(zh ? '同比 (8%)' : '(8%) Y/Y', 28, 400, NOTE)] },
      { x: 323, top: 964, anchor: 'end', lineGap: 8, lines: [line(zh ? '基础设施' : 'Infrastructure', 39, 800, BLUE_LABEL), line(zh ? '毛利率 57%' : '57% gross margin', 27, 400, NOTE)] },
    ] },
    financing: { blocks: [
      { x: 430, top: 1064, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(zh ? '同比 (3%)' : '(3%) Y/Y', 28, 400, NOTE)] },
      { x: 309, top: 1064, anchor: 'end', lineGap: 8, lines: [line(zh ? '融资' : 'Financing', 39, 800, BLUE_LABEL), line(zh ? '毛利率 47%' : '47% gross margin', 27, 400, NOTE)] },
    ] },
    other_revenue: { blocks: [
      { x: 430, top: 1176, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(zh ? '同比 (79%)' : '(79%) Y/Y', 28, 400, NOTE)] },
      { x: 261, top: 1253, anchor: 'end', lines: [line(zh ? '其他' : 'Other', 39, 800, BLUE_LABEL)] },
    ] },
    revenue: { blocks: [{ x: 898, top: 584, anchor: 'middle', lineGap: 10, lines: [
      line(zh ? '收入' : 'Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line(zh ? '同比 +1%' : '+1% Y/Y', 28, 400, NOTE),
    ] }] },
    gross_profit: { blocks: [{ x: 1364, top: 393, anchor: 'middle', lineGap: 10, lines: [
      line(zh ? '毛利润' : 'Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 59%' : '59% margin', 28, 400, NOTE), line(zh ? '同比 +0 个百分点' : '+0pp Y/Y', 28, 400, NOTE),
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1364, top: 1135, anchor: 'middle', lineGap: 10, lines: [
      line(zh ? '收入' : 'Cost of', 38, 800, RED_LABEL), line(zh ? '成本' : 'revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL),
    ] }] },
    intellectual_property: { blocks: [{ x: 1487, top: 872, anchor: 'middle', lineGap: 8, lines: [
      line(zh ? '知识产权' : 'Intellectual', 30, 800, GREEN_LABEL), ...(zh ? [] : [line('property', 30, 800, GREEN_LABEL)]), line('$value', 29, 400, GREEN_LABEL),
    ] }] },
    operating_profit: { blocks: [{ x: 1835, top: 281, anchor: 'middle', lineGap: 10, lines: [
      line(zh ? '营业利润' : 'Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 19%' : '19% margin', 28, 400, NOTE), line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, 400, NOTE),
    ] }] },
    operating_expenses: { blocks: [{ x: 1835, top: 798, anchor: 'middle', lineGap: 10, lines: [
      ...(zh ? [line('运营费用', 38, 800, RED_LABEL)] : [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL)]), line('$value', 37, 400, RED_LABEL),
    ] }] },
    net_profit: { blocks: [{ x: 2377, top: 296, anchor: 'start', lineGap: 10, lines: [
      line(zh ? '净利润' : 'Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line(zh ? '利润率 17%' : '17% margin', 28, 400, NOTE), line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 28, 400, NOTE),
    ] }] },
    tax: { blocks: [{ x: 2411, top: 528, anchor: 'start', lineGap: 8, lines: [line(zh ? '税费' : 'Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: 2401, top: 643, anchor: 'start', lineGap: 8, lines: [line(zh ? '利息' : 'Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [
      { x: 2411, top: 796, anchor: 'start', lineGap: 8, lines: [line(zh ? '销售、一般及行政' : 'SG&A', zh ? 27 : 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] },
      { x: 2464, top: 873, anchor: 'middle', lineGap: 8, lines: [line(zh ? '占收入 28%' : '28% of revenue', 28, 400, NOTE), line(zh ? '同比 +0 个百分点' : '+0pp Y/Y', 28, 400, NOTE)] },
    ] },
    rnd: { blocks: [
      { x: 2411, top: 1007, anchor: 'start', lineGap: 8, lines: [line(zh ? '研发' : 'R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] },
      { x: 2464, top: 1084, anchor: 'middle', lineGap: 8, lines: [line(zh ? '占收入 11%' : '11% of revenue', 28, 400, NOTE), line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 28, 400, NOTE)] },
    ] },
    other_operating_expense: { blocks: [
      { x: 2411, top: 1205, anchor: 'start', lineGap: 8, lines: [line(zh ? '其他' : 'Other', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] },
      { x: 2464, top: 1282, anchor: 'middle', lineGap: 8, lines: [line(zh ? '占收入 1%' : '1% of revenue', 28, 400, NOTE), line(zh ? '同比 +2 个百分点' : '+2pp Y/Y', 28, 400, NOTE)] },
    ] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q4-fy24',
    name: 'IBM · Q4 FY24',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q4 FY24 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q4-fy24.png', width: 2667, height: 1500 },
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
        software: { x: 397, y: 534, width: 70, height: 102 }, consulting: { x: 397, y: 771, width: 70, height: 67 },
        infrastructure: { x: 397, y: 969, width: 70, height: 54 }, financing: { x: 397, y: 1152, width: 70, height: 3 }, other_revenue: { x: 397, y: 1277, width: 70, height: 2 },
        revenue: { x: 863, y: 725, width: 70, height: 229 }, gross_profit: { x: 1328, y: 576, width: 72, height: 136 },
        cost_of_revenue: { x: 1328, y: 1030, width: 72, height: 92 }, intellectual_property: { x: 1456, y: 852, width: 70, height: 1 },
        operating_profit: { x: 1800, y: 458, width: 70, height: 47 }, operating_expenses: { x: 1800, y: 693, width: 70, height: 90 },
        net_profit: { x: 2261, y: 351, width: 70, height: 37 }, tax: { x: 2261, y: 559, width: 70, height: 2 },
        interest: { x: 2261, y: 671, width: 70, height: 3 }, sga: { x: 2261, y: 798, width: 70, height: 61 },
        rnd: { x: 2261, y: 1025, width: 70, height: 24 }, other_operating_expense: { x: 2261, y: 1239, width: 70, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 7.9, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.2, notes: ['(2%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 4.3, notes: ['(8%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['(3%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.003, valueText: '$3M', notes: ['(79%) Y/Y'], color: '#ccd6df', labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 17.6, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.4, notes: ['59% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.3, valueText: '$0.3B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.7, notes: ['19% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.9, notes: ['17% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 4.9, notes: ['28% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.0, valueText: '($2.0B)', notes: ['11% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_expense', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.2, notes: ['1% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 7.9, sourceWidth: 102, targetWidth: 102, y0: 585, y1: 776, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'consulting', target: 'revenue', value: 5.2, sourceWidth: 67, targetWidth: 67, y0: 804.5, y1: 860.5, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'infrastructure', target: 'revenue', value: 4.3, sourceWidth: 54, targetWidth: 54, y0: 996, y1: 921, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 5, y0: 1153.5, y1: 950.5, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.003, sourceWidth: 2, targetWidth: 1, y0: 1278, y1: 953.5, targetOrder: 4, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 10.4, sourceWidth: 136, targetWidth: 136, y0: 793, y1: 644, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.1, sourceWidth: 93, targetWidth: 92, y0: 907.5, y1: 1076, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.7, sourceWidth: 47, targetWidth: 47, y0: 599.5, y1: 481.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.7, sourceWidth: 89, targetWidth: 88, y0: 667.5, y1: 737, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.3, sourceWidth: 1, targetWidth: 2, y0: 852.5, y1: 782, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.9, sourceWidth: 37, targetWidth: 37, y0: 476.5, y1: 369.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 5, targetWidth: 2, y0: 497.5, y1: 560, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 5, targetWidth: 3, y0: 502.5, y1: 672.5, sourceOrder: 2, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 4.9, sourceWidth: 61, targetWidth: 61, y0: 723.5, y1: 828.5, sourceOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.0, sourceWidth: 26, targetWidth: 24, y0: 767, y1: 1037, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 781.5, y1: 1240.5, sourceOrder: 2, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2024 财年第四季度',
        meta: { title: 'IBM 2024 财年第四季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +10%'] }, consulting: { label: '咨询', notes: ['同比 (2%)'] }, infrastructure: { label: '基础设施', notes: ['同比 (8%)'] }, financing: { label: '融资', notes: ['同比 (3%)'] }, other_revenue: { label: '其他', notes: ['同比 (79%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 +0 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 (2 个百分点)'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 (2 个百分点)'] }, tax: { label: '税费' }, interest: { label: '利息' },
          sga: { label: '销售、一般及行政', notes: ['占收入 28%', '同比 +0 个百分点'] }, rnd: { label: '研发', notes: ['占收入 11%', '同比 +1 个百分点'] }, other_operating_expense: { label: '其他', notes: ['占收入 1%', '同比 +2 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

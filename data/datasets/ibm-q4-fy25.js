/* IBM Q4 FY25 income statement ($B), measured from the active Build source. */
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
  const RIGHT_ZH = 2354;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const sourceLabel = (valueNote, label, valueTop, labelTop) => ({
    blocks: [
      { x: 426, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: 311, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), line(label === 'Software' ? '83% gross margin' : label === 'Consulting' ? '28% gross margin' : label === 'Infrastructure' ? '61% gross margin' : '44% gross margin', 27, 400, NOTE)] },
    ],
  });

  const labels = {
    software: sourceLabel('+14% Y/Y', 'Software', 442, 568),
    consulting: sourceLabel('+3% Y/Y', 'Consulting', 728, 833),
    infrastructure: { blocks: [
      { x: 426, top: 957, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+21% Y/Y', 28, 400, NOTE)] },
      { x: 342, top: 1060, anchor: 'end', lineGap: 8, lines: [line('Infrastructure', 39, 800, BLUE_LABEL), line('61% gross margin', 27, 400, NOTE)] },
    ] },
    financing: sourceLabel('+5% Y/Y', 'Financing', 1194, 1245),
    revenue: { blocks: [{ x: 893, top: 587, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+12% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1360, top: 430, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('61% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1360, top: 1190, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1565, top: 997, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1565, top: 1170, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, GREEN_LABEL), line('income', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1828, top: 321, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('23% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 940, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 383, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('28% margin', 28, 400, NOTE), line('+12pp Y/Y', 28, 400, NOTE)] }] },
    tax_benefit: { blocks: [{ x: 2170, top: 567, anchor: 'middle', lineGap: 8, lines: [line('Tax benefit', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL)] }] },
    interest: { blocks: [{ x: RIGHT, top: 676, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT, top: 943, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('28% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 1195, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('11% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)] }] },
  };

  const zhLabels = {
    software: { blocks: [{ x: 426, top: 442, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 +14%', 28, 400, NOTE)] }, { x: 311, top: 568, anchor: 'end', lineGap: 8, lines: [line('软件', 39, 800, BLUE_LABEL), line('毛利率 83%', 27, 400, NOTE)] }] },
    consulting: { blocks: [{ x: 426, top: 728, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 +3%', 28, 400, NOTE)] }, { x: 311, top: 833, anchor: 'end', lineGap: 8, lines: [line('咨询', 39, 800, BLUE_LABEL), line('毛利率 28%', 27, 400, NOTE)] }] },
    infrastructure: { blocks: [{ x: 426, top: 957, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 +21%', 28, 400, NOTE)] }, { x: 311, top: 1060, anchor: 'end', lineGap: 8, lines: [line('基础设施', 39, 800, BLUE_LABEL), line('毛利率 61%', 27, 400, NOTE)] }] },
    financing: { blocks: [{ x: 426, top: 1194, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 +5%', 28, 400, NOTE)] }, { x: 311, top: 1245, anchor: 'end', lineGap: 8, lines: [line('融资', 39, 800, BLUE_LABEL), line('毛利率 44%', 27, 400, NOTE)] }] },
    revenue: { blocks: [{ x: 893, top: 592, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +12%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1360, top: 440, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 61%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1360, top: 1200, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1565, top: 1006, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1565, top: 1180, anchor: 'middle', lineGap: 8, lines: [line('其他收入', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1828, top: 331, anchor: 'middle', lineGap: 10, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 23%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 950, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT_ZH, top: 393, anchor: 'start', lineGap: 10, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 28%', 28, 400, NOTE), line('同比 +12 个百分点', 28, 400, NOTE)] }] },
    tax_benefit: { blocks: [{ x: 2170, top: 575, anchor: 'middle', lineGap: 8, lines: [line('税收优惠', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL)] }] },
    interest: { blocks: [{ x: RIGHT_ZH, top: 684, anchor: 'start', lineGap: 8, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT_ZH, top: 951, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 28%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT_ZH, top: 1204, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 11%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q4-fy25',
    name: 'IBM · Q4 FY25',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q4 FY25 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q4-fy25.png', width: 2667, height: 1500 },
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
        software: { x: 390, y: 535, width: 72, height: 145 }, consulting: { x: 390, y: 829, width: 72, height: 86 },
        infrastructure: { x: 390, y: 1059, width: 72, height: 83 }, financing: { x: 390, y: 1285, width: 72, height: 3 },
        revenue: { x: 857, y: 739, width: 72, height: 320 }, gross_profit: { x: 1325, y: 621, width: 71, height: 193 },
        cost_of_revenue: { x: 1324, y: 1050, width: 72, height: 125 }, intellectual_property: { x: 1530, y: 981, width: 72, height: 3 },
        // Review decision: a six-pixel face keeps the $0.1B Other income node
        // visible and distinguishable from its pale guide ribbon.
        other_income: { x: 1530, y: 1153, width: 72, height: 6 }, operating_profit: { x: 1792, y: 511, width: 71, height: 74 },
        operating_expenses: { x: 1791, y: 800, width: 73, height: 125 }, tax_benefit: { x: 2134, y: 532, width: 72, height: 20 },
        net_profit: { x: 2259, y: 407, width: 72, height: 89 }, interest: { x: 2259, y: 714, width: 72, height: 6 },
        sga: { x: 2259, y: 976, width: 72, height: 88 }, rnd: { x: 2259, y: 1232, width: 72, height: 33 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 9.0, valueText: '$9.0B', notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.3, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 5.1, notes: ['+21% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 19.7, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 11.9, notes: ['61% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: -0.3, valueText: '$0.3B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: ['Other', 'income'], value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.6, notes: ['23% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 5, order: 1, type: 'profit', label: 'Tax benefit', value: -1.4, valueText: '$1.4B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 5.6, notes: ['28% margin', '+12pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 6, order: 1, type: 'cost', label: 'Interest', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 5.5, notes: ['28% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 2.2, notes: ['11% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 9.0, sourceWidth: 145, targetWidth: 145, y0: 607.5, y1: 811.5, linkTint: BLUE_LINK },
      { source: 'consulting', target: 'revenue', value: 5.3, sourceWidth: 86, targetWidth: 86, y0: 872, y1: 927, linkTint: BLUE_LINK },
      { source: 'infrastructure', target: 'revenue', value: 5.1, sourceWidth: 83, targetWidth: 83, y0: 1100.5, y1: 1011.5, linkTint: BLUE_LINK },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 6, y0: 1286.5, y1: 1055, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 11.9, sourceWidth: 193, targetWidth: 193, y0: 835.5, y1: 717.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.8, sourceWidth: 127, targetWidth: 125, y0: 995.5, y1: 1112.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 4.6, sourceWidth: 74, targetWidth: 74, y0: 658, y1: 548, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.4, sourceWidth: 119, targetWidth: 125, y0: 754.5, y1: 862.5, linkTint: RED_LINK },
      // The two auxiliary-income inputs occupy the continuous bottom band of
      // Operating expenses' left face: Intellectual property [916, 921], then
      // Other income [921, 925]. Their widths stay proportional to value.
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.3, sourceWidth: 3, targetWidth: 5, y0: 982.5, y1: 918.5, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 1156, y1: 923, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 4.6, sourceWidth: 74, targetWidth: 74, y0: 548, y1: 444, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.5, sourceWidth: 8, targetWidth: 6, y0: 581, y1: 717, linkTint: RED_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 1.4, sourceWidth: 20, targetWidth: 15, y0: 542, y1: 488.5, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 5.5, sourceWidth: 89, targetWidth: 88, y0: 844.5, y1: 1020, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, sourceWidth: 35, targetWidth: 33, y0: 906.5, y1: 1248.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2025 财年第四季度',
        meta: { title: 'IBM 2025 财年第四季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +14%'] }, consulting: { label: '咨询', notes: ['同比 +3%'] }, infrastructure: { label: '基础设施', notes: ['同比 +21%'] }, financing: { label: '融资', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] }, gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他收入' }, operating_profit: { label: '营业利润', notes: ['利润率 23%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收优惠' }, net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +12 个百分点'] }, interest: { label: '利息' },
          sga: { label: '销售、一般及行政', notes: ['占收入 28%', '同比 +0 个百分点'] }, rnd: { label: '研发', notes: ['占收入 11%', '同比 (0 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

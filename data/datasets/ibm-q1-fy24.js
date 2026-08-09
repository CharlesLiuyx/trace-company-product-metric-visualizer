/* IBM Q1 FY24 income statement ($B), measured from the active Build source. */
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
  const sourceLabel = (valueNote, label, margin, valueTop, labelTop) => ({
    blocks: [
      { x: 426, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: 311, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), ...(margin ? [line(margin, 27, 400, NOTE)] : [])] },
    ],
  });

  const labels = {
    software: sourceLabel('+6% Y/Y', 'Software', '82% gross margin', 390, 530),
    consulting: sourceLabel('+0% Y/Y', 'Consulting', '25% gross margin', 648, 767),
    infrastructure: { blocks: [
      { x: 439, top: 888, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(1%) Y/Y', 28, 400, NOTE)] },
      { x: 324, top: 990, anchor: 'end', lineGap: 8, lines: [line('Infrastructure', 39, 800, BLUE_LABEL), line('54% gross margin', 27, 400, NOTE)] },
    ] },
    financing: sourceLabel('(2%) Y/Y', 'Financing', '49% gross margin', 1098, 1168),
    other_revenue: { blocks: [
      { x: 426, top: 1228, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(36%) Y/Y', 28, 400, NOTE)] },
      { x: 261, top: 1312, anchor: 'end', lines: [line('Other', 39, 800, BLUE_LABEL)] },
    ] },
    revenue: { blocks: [{ x: 893, top: 584, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+1% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1360, top: 438, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('54% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1360, top: 1200, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    other_income: { blocks: [{ x: 1549, top: 942, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1565, top: 1148, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1828, top: 352, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('10% margin', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 917, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    tax_benefit: { blocks: [{ x: 2176, top: 552, anchor: 'middle', lineGap: 8, lines: [line('Tax benefit', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 383, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('11% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2390, top: 681, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2400, top: 978, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: 2400, top: 1292, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  const zhLabels = {
    software: sourceLabel('同比 +6%', '软件', '毛利率 82%', 390, 530),
    consulting: sourceLabel('同比 +0%', '咨询', '毛利率 25%', 648, 767),
    infrastructure: { blocks: [
      { x: 439, top: 888, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 (1%)', 28, 400, NOTE)] },
      { x: 324, top: 990, anchor: 'end', lineGap: 8, lines: [line('基础设施', 39, 800, BLUE_LABEL), line('毛利率 54%', 27, 400, NOTE)] },
    ] },
    financing: sourceLabel('同比 (2%)', '融资', '毛利率 49%', 1098, 1168),
    other_revenue: { blocks: [
      { x: 426, top: 1228, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 (36%)', 28, 400, NOTE)] },
      { x: 261, top: 1312, anchor: 'end', lines: [line('其他', 39, 800, BLUE_LABEL)] },
    ] },
    revenue: { blocks: [{ x: 893, top: 584, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +1%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1360, top: 438, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 54%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1360, top: 1200, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    other_income: { blocks: [{ x: 1549, top: 942, anchor: 'middle', lineGap: 8, lines: [line('其他', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1565, top: 1148, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1828, top: 352, anchor: 'middle', lineGap: 10, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 10%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 917, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    tax_benefit: { blocks: [{ x: 2176, top: 552, anchor: 'middle', lineGap: 8, lines: [line('税收优惠', 31, 800, GREEN_LABEL), line('$value', 30, 400, GREEN_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 383, anchor: 'start', lineGap: 10, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 11%', 28, 400, NOTE), line('同比 +4 个百分点', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2390, top: 681, anchor: 'start', lineGap: 8, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2400, top: 978, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: 2400, top: 1292, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q1-fy24',
    name: 'IBM · Q1 FY24',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q1 FY24 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q1-fy24.png', width: 2667, height: 1500 },
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
        software: { x: 392, y: 485, width: 71, height: 127 }, consulting: { x: 392, y: 738, width: 71, height: 113 },
        infrastructure: { x: 392, y: 974, width: 71, height: 66 }, financing: { x: 392, y: 1189, width: 71, height: 1 },
        other_revenue: { x: 392, y: 1338, width: 71, height: 2 }, revenue: { x: 859, y: 723, width: 70, height: 317 },
        gross_profit: { x: 1326, y: 620, width: 71, height: 167 }, cost_of_revenue: { x: 1326, y: 1030, width: 71, height: 146 },
        other_income: { x: 1516, y: 915, width: 71, height: 5 }, intellectual_property: { x: 1529, y: 1127, width: 71, height: 3 },
        operating_profit: { x: 1791, y: 536, width: 70, height: 31 }, operating_expenses: { x: 1789, y: 741, width: 70, height: 148 },
        tax_benefit: { x: 2141, y: 521, width: 70, height: 9 }, net_profit: { x: 2260, y: 421, width: 71, height: 32 },
        interest: { x: 2260, y: 713, width: 71, height: 8 }, sga: { x: 2260, y: 950, width: 71, height: 107 },
        rnd: { x: 2260, y: 1316, width: 71, height: 38 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 5.9, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.2, notes: ['+0% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.1, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['(2%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.1, notes: ['(36%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.5, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.7, notes: ['54% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'intellectual_property', col: 3, order: 1, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, notes: ['10% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: 'Tax benefit', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['11% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 6, order: 1, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 5.0, valueText: '($5.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 5.9, sourceWidth: 127, targetWidth: 129, y0: 548.5, y1: 787.5, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.2, sourceWidth: 113, targetWidth: 114, y0: 794.5, y1: 909, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 3.1, sourceWidth: 66, targetWidth: 68, y0: 1007, y1: 1000, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 1, targetWidth: 3, y0: 1189.5, y1: 1035.5, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 1339, y1: 1038.5, linkTint: BLUE_LINK, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 7.7, sourceWidth: 167, targetWidth: 167, y0: 806.5, y1: 703.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.7, sourceWidth: 150, targetWidth: 146, y0: 965, y1: 1103, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceWidth: 31, targetWidth: 31, y0: 635.5, y1: 551.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.2, sourceWidth: 136, targetWidth: 141, y0: 719, y1: 811.5, linkTint: RED_LINK, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'operating_expenses', value: 0.3, sourceWidth: 5, targetWidth: 4, y0: 917.5, y1: 883, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 1128.5, y1: 887.5, linkTint: GREEN_LINK, targetOrder: 2 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 23, targetWidth: 23, y0: 547.5, y1: 432.5, linkTint: GREEN_LINK, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 8, targetWidth: 8, y0: 563, y1: 717, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'tax_benefit', target: 'net_profit', value: 0.5, sourceWidth: 9, targetWidth: 9, y0: 525.5, y1: 448.5, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 5.0, sourceWidth: 107, targetWidth: 107, y0: 794.5, y1: 1003.5, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.8, sourceWidth: 41, targetWidth: 38, y0: 868.5, y1: 1335, linkTint: RED_LINK, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2024 财年第一季度',
        meta: { title: 'IBM 2024 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +6%'] }, consulting: { label: '咨询', notes: ['同比 +0%'] }, infrastructure: { label: '基础设施', notes: ['同比 (1%)'] }, financing: { label: '融资', notes: ['同比 (2%)'] }, other_revenue: { label: '其他', notes: ['同比 (36%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +1 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          other_income: { label: '其他' }, intellectual_property: { label: '知识产权' }, operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 +0 个百分点'] }, operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收优惠' }, net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +4 个百分点'] }, interest: { label: '利息' }, sga: { label: '销售、一般及行政' }, rnd: { label: '研发' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

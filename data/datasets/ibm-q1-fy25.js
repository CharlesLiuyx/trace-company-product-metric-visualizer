/* IBM Q1 FY25 income statement ($B), measured from the active Build source. */
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
  const sourceLabel = (valueNote, margin, valueTop, labelTop, label, labelX = 315) => ({
    blocks: [
      { x: 428, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: labelX, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), line(margin, 27, 400, NOTE)] },
    ],
  });
  const center = (x, top, lines) => ({ blocks: [{ x, top, anchor: 'middle', lineGap: 10, lines }] });
  const right = (top, lines, x = RIGHT) => ({ blocks: [{ x, top, anchor: 'start', lineGap: 8, lines }] });

  const labels = {
    software: sourceLabel('+7% Y/Y', '84% gross margin', 423, 556, 'Software', 302),
    consulting: sourceLabel('(2%) Y/Y', '27% gross margin', 684, 801, 'Consulting', 302),
    infrastructure: sourceLabel('(6%) Y/Y', '53% gross margin', 923, 1014, 'Infrastructure', 339),
    financing: sourceLabel('(1%) Y/Y', '46% gross margin', 1086, 1165, 'Financing', 304),
    other_revenue: { blocks: [
      { x: 428, top: 1222, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(44%) Y/Y', 28, 400, NOTE)] },
      { x: 261, top: 1284, anchor: 'end', lines: [line('Other', 39, 800, BLUE_LABEL)] },
    ] },
    revenue: center(895, 577, [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+1% Y/Y', 28, 400, NOTE)]),
    gross_profit: center(1363, 433, [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('55% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)]),
    cost_of_revenue: center(1363, 1201, [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)]),
    intellectual_property: center(1553, 974, [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)]),
    other_income: center(1553, 1155, [line('Other income', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)]),
    operating_profit: center(1825, 343, [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('11% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)]),
    operating_expenses: center(1827, 935, [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)]),
    net_profit: right(362, [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('7% margin', 28, 400, NOTE), line('(4pp) Y/Y', 28, 400, NOTE)]),
    interest: right(609, [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 2389),
    tax: right(714, [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 2399),
    sga: right(875, [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('34% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)], 2348),
    rnd: right(1098, [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('13% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)], 2349),
  };

  const zhLabels = {
    software: sourceLabel('同比 +7%', '毛利率 84%', 423, 556, '软件', 302),
    consulting: sourceLabel('同比 (2%)', '毛利率 27%', 684, 801, '咨询', 302),
    infrastructure: sourceLabel('同比 (6%)', '毛利率 53%', 923, 1014, '基础设施', 339),
    financing: sourceLabel('同比 (1%)', '毛利率 46%', 1086, 1165, '融资', 304),
    other_revenue: { blocks: [{ x: 428, top: 1222, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 (44%)', 28, 400, NOTE)] }, { x: 261, top: 1284, anchor: 'end', lines: [line('其他', 39, 800, BLUE_LABEL)] }] },
    revenue: center(895, 577, [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +1%', 28, 400, NOTE)]),
    gross_profit: center(1363, 433, [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 55%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)]),
    cost_of_revenue: center(1363, 1211, [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)]),
    intellectual_property: center(1553, 984, [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)]),
    other_income: center(1553, 1165, [line('其他收入', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)]),
    operating_profit: center(1825, 343, [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 11%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)]),
    operating_expenses: center(1827, 945, [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)]),
    net_profit: right(372, [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 7%', 28, 400, NOTE), line('同比 (4 个百分点)', 28, 400, NOTE)]),
    interest: right(617, [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 2389),
    tax: right(722, [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 2399),
    sga: right(883, [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 34%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)], 2348),
    rnd: right(1106, [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 13%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)], 2349),
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q1-fy25', name: 'IBM · Q1 FY25', company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q1 FY25 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q1-fy25.png', width: 2667, height: 1500 },
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
        software: { x: 392, y: 514, width: 72, height: 145 }, consulting: { x: 392, y: 783, width: 72, height: 116 },
        infrastructure: { x: 392, y: 1016, width: 72, height: 66 }, financing: { x: 392, y: 1199, width: 72, height: 3 }, other_revenue: { x: 392, y: 1310, width: 72, height: 1 },
        revenue: { x: 859, y: 721, width: 72, height: 334 }, gross_profit: { x: 1327, y: 615, width: 72, height: 184 }, cost_of_revenue: { x: 1327, y: 1039, width: 72, height: 149 },
        intellectual_property: { x: 1517, y: 957, width: 72, height: 3 }, other_income: { x: 1517, y: 1136, width: 72, height: 5 },
        operating_profit: { x: 1789, y: 525, width: 72, height: 36 }, operating_expenses: { x: 1791, y: 763, width: 72, height: 156 },
        net_profit: { x: 2261, y: 431, width: 72, height: 23 }, interest: { x: 2261, y: 643, width: 72, height: 10 }, tax: { x: 2261, y: 747, width: 72, height: 1 },
        sga: { x: 2261, y: 886, width: 72, height: 112 }, rnd: { x: 2261, y: 1143, width: 72, height: 44 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 6.3, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.1, notes: ['(2%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 2.9, notes: ['(6%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.1, notes: ['(44%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.5, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.0, valueText: '$8.0B', notes: ['55% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.3, valueText: '$0.3B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other income', value: 0.2, valueText: '$0.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['11% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['7% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 4.9, notes: ['34% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.0, valueText: '$2.0B', notes: ['13% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 6.3, sourceWidth: 145, targetWidth: 144, y0: 586.5, y1: 793, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'consulting', target: 'revenue', value: 5.1, sourceWidth: 116, targetWidth: 117, y0: 841, y1: 923.5, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'infrastructure', target: 'revenue', value: 2.9, sourceWidth: 66, targetWidth: 66, y0: 1049, y1: 1015, targetOrder: 2, linkTint: BLUE_LINK },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 5, y0: 1200.5, y1: 1050.5, targetOrder: 3, linkTint: BLUE_LINK },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 1, targetWidth: 2, y0: 1310.5, y1: 1054, targetOrder: 4, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 8.0, sourceWidth: 185, targetWidth: 184, y0: 813.5, y1: 707, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.5, sourceWidth: 149, targetWidth: 149, y0: 980.5, y1: 1113.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 37, targetWidth: 36, y0: 633.5, y1: 543, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.4, sourceWidth: 147, targetWidth: 147, y0: 725.5, y1: 836.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.3, sourceWidth: 3, targetWidth: 6, y0: 958.5, y1: 913, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 0.2, sourceWidth: 5, targetWidth: 3, y0: 1138.5, y1: 917.5, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.1, sourceWidth: 23, targetWidth: 23, y0: 536.5, y1: 442.5, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.5, sourceWidth: 10, targetWidth: 10, y0: 553, y1: 648, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 3, targetWidth: 1, y0: 559.5, y1: 747.5, sourceOrder: 2, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 4.9, sourceWidth: 112, targetWidth: 112, y0: 819, y1: 942, sourceOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 2.0, sourceWidth: 44, targetWidth: 44, y0: 897, y1: 1165, sourceOrder: 1, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2025 财年第一季度',
        meta: { title: 'IBM 2025 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +7%'] }, consulting: { label: '咨询', notes: ['同比 (2%)'] }, infrastructure: { label: '基础设施', notes: ['同比 (6%)'] }, financing: { label: '融资', notes: ['同比 (1%)'] }, other_revenue: { label: '其他', notes: ['同比 (44%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他收入' }, operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +1 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 (4 个百分点)'] }, interest: { label: '利息' }, tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 34%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

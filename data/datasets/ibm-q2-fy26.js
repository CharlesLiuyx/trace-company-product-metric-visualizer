/* IBM Q2 FY26 income statement ($B), measured from the active Build source. */
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
      { x: 429, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: 316, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), line(margin, 27, 400, NOTE)] },
    ],
  });

  const labels = {
    software: { blocks: [{ x: 421, top: 424, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+5% Y/Y', 28, 400, NOTE)] }, { x: 308, top: 559, anchor: 'end', lineGap: 8, lines: [line('Software', 39, 800, BLUE_LABEL), line('83% gross margin', 27, 400, NOTE)] }] },
    consulting: { blocks: [{ x: 421, top: 700, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+0% Y/Y', 28, 400, NOTE)] }, { x: 308, top: 807, anchor: 'end', lineGap: 8, lines: [line('Consulting', 39, 800, BLUE_LABEL), line('29% gross margin', 27, 400, NOTE)] }] },
    infrastructure: { blocks: [{ x: 441, top: 921, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(7%) Y/Y', 28, 400, NOTE)] }, { x: 328, top: 1013, anchor: 'end', lineGap: 8, lines: [line('Infrastructure', 39, 800, BLUE_LABEL), line('58% gross margin', 27, 400, NOTE)] }] },
    financing: sourceLabel('+12% Y/Y', 'Financing', '43% gross margin', 1120, 1176),
    other_revenue: { blocks: [
      { x: 429, top: 1238, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+68% Y/Y', 28, 400, NOTE)] },
      { x: 261, top: 1300, anchor: 'end', lines: [line('Other', 39, 800, BLUE_LABEL)] },
    ] },
    revenue: { blocks: [{ x: 888, top: 583, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+1% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 404, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('58% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1363, top: 1160, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1579, top: 993, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1579, top: 1171, anchor: 'middle', lineGap: 8, lines: [line('Other income', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1829, top: 295, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('17% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 950, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 322, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('13% margin', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2387, top: 603, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: 2398, top: 738, anchor: 'start', lineGap: 8, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [
      { x: 2398, top: 958, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] },
      { x: 2447, top: 1035, anchor: 'middle', lineGap: 8, lines: [line('29% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)] },
    ] },
    rnd: { blocks: [
      { x: 2398, top: 1194, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] },
      { x: 2448, top: 1271, anchor: 'middle', lineGap: 8, lines: [line('13% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] },
    ] },
  };

  const zhLabels = {
    software: sourceLabel('同比 +5%', '软件', '毛利率 83%', 424, 559),
    consulting: sourceLabel('同比 +0%', '咨询', '毛利率 29%', 700, 807),
    infrastructure: sourceLabel('同比 (7%)', '基础设施', '毛利率 58%', 921, 1013),
    financing: sourceLabel('同比 +12%', '融资', '毛利率 43%', 1120, 1176),
    other_revenue: { blocks: [{ x: 429, top: 1238, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 +68%', 28, 400, NOTE)] }, { x: 261, top: 1300, anchor: 'end', lines: [line('其他', 39, 800, BLUE_LABEL)] }] },
    revenue: { blocks: [{ x: 895, top: 583, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +1%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 404, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 58%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1363, top: 1169, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1579, top: 993, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1579, top: 1171, anchor: 'middle', lineGap: 8, lines: [line('其他收入', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1829, top: 295, anchor: 'middle', lineGap: 10, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 17%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 962, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 322, anchor: 'start', lineGap: 10, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 13%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2398, top: 603, anchor: 'start', lineGap: 8, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: 2398, top: 738, anchor: 'start', lineGap: 8, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2398, top: 958, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 29%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: 2398, top: 1194, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 13%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q2-fy26',
    name: 'IBM · Q2 FY26',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q2 FY26 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q2-fy26.png', width: 2667, height: 1500 },
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
        software: { x: 393, y: 514, width: 71, height: 140 }, consulting: { x: 393, y: 789, width: 71, height: 97 },
        infrastructure: { x: 393, y: 1011, width: 71, height: 68 }, financing: { x: 393, y: 1205, width: 71, height: 1 },
        other_revenue: { x: 393, y: 1323, width: 71, height: 2 }, revenue: { x: 860, y: 723, width: 70, height: 313 },
        gross_profit: { x: 1327, y: 584, width: 71, height: 179 }, cost_of_revenue: { x: 1327, y: 1014, width: 71, height: 131 },
        intellectual_property: { x: 1545, y: 969, width: 71, height: 2 }, other_income: { x: 1545, y: 1147, width: 71, height: 1 },
        operating_profit: { x: 1795, y: 477, width: 70, height: 51 }, operating_expenses: { x: 1795, y: 804, width: 70, height: 132 },
        net_profit: { x: 2261, y: 353, width: 71, height: 37 }, interest: { x: 2261, y: 632, width: 71, height: 7 },
        tax: { x: 2261, y: 767, width: 71, height: 4 }, sga: { x: 2261, y: 963, width: 71, height: 89 },
        rnd: { x: 2261, y: 1208, width: 71, height: 40 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 7.8, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.3, notes: ['+0% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.8, notes: ['(7%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.1, notes: ['+68% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 17.2, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.9, notes: ['58% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other income', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.0, valueText: '$3.0B', notes: ['17% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.2, notes: ['13% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 5.0, valueText: '($5.0B)', notes: ['29% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.3, notes: ['13% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 7.8, sourceWidth: 140, targetWidth: 143, y0: 584, y1: 794.5, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.3, sourceWidth: 97, targetWidth: 96, y0: 837.5, y1: 914, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 3.8, sourceWidth: 68, targetWidth: 68, y0: 1045, y1: 996, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 1, targetWidth: 3, y0: 1205.5, y1: 1031.5, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 1324, y1: 1034.5, linkTint: BLUE_LINK, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 9.9, sourceWidth: 179, targetWidth: 179, y0: 812.5, y1: 673.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.3, sourceWidth: 134, targetWidth: 131, y0: 969, y1: 1079.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.0, sourceWidth: 51, targetWidth: 51, y0: 609.5, y1: 502.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.9, sourceWidth: 128, targetWidth: 128, y0: 699, y1: 868, linkTint: RED_LINK, sourceOrder: 1, targetOrder: 0 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 970, y1: 933, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'other_income', target: 'operating_expenses', value: 0.2, sourceWidth: 1, targetWidth: 2, y0: 1147.5, y1: 935, linkTint: GREEN_LINK, targetOrder: 2 },
      { source: 'operating_profit', target: 'net_profit', value: 2.2, sourceWidth: 37, targetWidth: 37, y0: 495.5, y1: 371.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.5, sourceWidth: 7, targetWidth: 7, y0: 517.5, y1: 635.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 7, targetWidth: 4, y0: 524.5, y1: 769, linkTint: RED_LINK, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 5.0, sourceWidth: 89, targetWidth: 89, y0: 848.5, y1: 1007.5, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.3, sourceWidth: 43, targetWidth: 40, y0: 914.5, y1: 1228, linkTint: RED_LINK, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2026 财年第二季度',
        meta: { title: 'IBM 2026 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +5%'] }, consulting: { label: '咨询', notes: ['同比 +0%'] }, infrastructure: { label: '基础设施', notes: ['同比 (7%)'] }, financing: { label: '融资', notes: ['同比 +12%'] }, other_revenue: { label: '其他', notes: ['同比 +68%'] },
          revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 (1 个百分点)'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他收入' }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 (1 个百分点)'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 (0 个百分点)'] }, interest: { label: '利息' }, tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 29%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

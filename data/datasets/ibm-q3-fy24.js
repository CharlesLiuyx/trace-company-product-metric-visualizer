/* IBM Q3 FY24 income statement ($B), measured from the active Build source. */
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
  const sourceLabel = (valueNote, label, margin, valueTop, labelTop, x = 429, labelX = 316) => ({
    blocks: [
      { x, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: labelX, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), line(margin, 27, 400, NOTE)] },
    ],
  });

  const labels = {
    software: sourceLabel('+10% Y/Y', 'Software', '83% gross margin', 420, 559, 422),
    consulting: sourceLabel('(1%) Y/Y', 'Consulting', '28% gross margin', 666, 777),
    infrastructure: sourceLabel('(7%) Y/Y', 'Infrastructure', '54% gross margin', 861, 948, 429, 343),
    financing: sourceLabel('(3%) Y/Y', 'Financing', '50% gross margin', 1046, 1076),
    other_revenue: { blocks: [
      { x: 429, top: 1167.5, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(60%) Y/Y', 28, 400, NOTE)] },
      { x: 262, top: 1250.5, anchor: 'end', lines: [{ ...line('Other', 31, 800, BLUE_LABEL), textLength: 112 }] },
    ] },
    revenue: { blocks: [{ x: 895, top: 574, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+1% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 390, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('56% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1363, top: 1167, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1505, top: 887, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_loss: { blocks: [{ x: 1617, top: 1090, anchor: 'middle', lineGap: 8, lines: [line('Operating', 38, 800, RED_LABEL), line('loss', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL), line('(2%) margin', 28, 400, NOTE), line('(18pp) Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 500, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2348, top: 552, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('33% of revenue', 28, 400, NOTE), line('+3pp Y/Y', 28, 400, NOTE)] }] },
    other_expense: { blocks: [{ x: 2349, top: 770, anchor: 'start', lineGap: 8, lines: [line('Other', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('15% of revenue', 28, 400, NOTE), line('+16pp Y/Y', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: 2349, top: 980, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('13% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
  };

  const zhLabels = {
    software: sourceLabel('同比 +10%', '软件', '毛利率 83%', 420, 559, 422),
    consulting: sourceLabel('同比 (1%)', '咨询', '毛利率 28%', 666, 777),
    infrastructure: sourceLabel('同比 (7%)', '基础设施', '毛利率 54%', 861, 948, 429, 343),
    financing: sourceLabel('同比 (3%)', '融资', '毛利率 50%', 1046, 1076),
    other_revenue: { blocks: [{ x: 429, top: 1167.5, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 (60%)', 28, 400, NOTE)] }, { x: 247, top: 1250.5, anchor: 'end', lines: [line('其他', 31, 800, BLUE_LABEL)] }] },
    revenue: { blocks: [{ x: 895, top: 574, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +1%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 390, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 56%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1363, top: 1176, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1505, top: 896, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_loss: { blocks: [{ x: 1617, top: 1090, anchor: 'middle', lineGap: 8, lines: [line('营业', 38, 800, RED_LABEL), line('亏损', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL), line('利润率 (2%)', 28, 400, NOTE), line('同比 (18 个百分点)', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 500, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2348, top: 552, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 33%', 28, 400, NOTE), line('同比 +3 个百分点', 28, 400, NOTE)] }] },
    other_expense: { blocks: [{ x: 2349, top: 770, anchor: 'start', lineGap: 8, lines: [line('其他', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 15%', 28, 400, NOTE), line('同比 +16 个百分点', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: 2349, top: 980, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 13%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q3-fy24', name: 'IBM · Q3 FY24', company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q3 FY24 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q3-fy24.png', width: 2667, height: 1500 },
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
        software: { x: 393, y: 522, width: 71, height: 132 }, consulting: { x: 393, y: 762, width: 71, height: 104 },
        infrastructure: { x: 393, y: 971, width: 71, height: 60 }, financing: { x: 393, y: 1150, width: 71, height: 3 },
        other_revenue: { x: 393, y: 1272, width: 71, height: 3 }, revenue: { x: 860, y: 727, width: 70, height: 306 },
        gross_profit: { x: 1327, y: 574, width: 71, height: 170 }, cost_of_revenue: { x: 1327, y: 1029, width: 71, height: 131 },
        intellectual_property: { x: 1469, y: 878, width: 72, height: 2 }, operating_loss: { x: 1582, y: 1071, width: 71, height: 7 },
        operating_expenses: { x: 1795, y: 661, width: 70, height: 184 }, sga: { x: 2261, y: 534, width: 71, height: 98 },
        other_expense: { x: 2261, y: 777, width: 71, height: 44 }, rnd: { x: 2261, y: 985, width: 71, height: 36 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 6.5, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.2, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.0, valueText: '$3.0B', notes: ['(7%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['(3%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.1, notes: ['(60%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.0, valueText: '$15.0B', notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.4, notes: ['56% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_loss', col: 4, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -0.4, valueText: '($0.4B)', notes: ['(2%) margin', '(18pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 8.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 0, type: 'cost', label: 'SG&A', value: 4.9, notes: ['33% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 6, order: 1, type: 'cost', label: 'Other', value: 2.2, notes: ['15% of revenue', '+16pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 1.9, notes: ['13% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 6.5, sourceWidth: 132, targetWidth: 132, y0: 588, y1: 793, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.2, sourceWidth: 104, targetWidth: 105, y0: 814, y1: 911.5, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 3.0, sourceWidth: 60, targetWidth: 62, y0: 1001, y1: 995, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 4, y0: 1151.5, y1: 1028, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 4, y0: 1273.5, y1: 1031, linkTint: BLUE_LINK, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 8.4, sourceWidth: 171, targetWidth: 170, y0: 812.5, y1: 659, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.5, sourceWidth: 135, targetWidth: 131, y0: 965.5, y1: 1094.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.4, sourceWidth: 170, targetWidth: 172, y0: 659, y1: 747, linkTint: RED_LINK, sourceOrder: 0, targetOrder: 0 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 2, targetWidth: 5, y0: 879, y1: 835.5, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.4, sourceWidth: 7, targetWidth: 7, y0: 1074.5, y1: 841.5, linkTint: RED_LINK, targetOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 4.9, sourceWidth: 99, targetWidth: 98, y0: 710.5, y1: 583, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'other_expense', value: 2.2, sourceWidth: 45, targetWidth: 44, y0: 782.5, y1: 799, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.9, sourceWidth: 40, targetWidth: 36, y0: 825, y1: 1003, linkTint: RED_LINK, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2024 财年第三季度', meta: { title: 'IBM 2024 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +10%'] }, consulting: { label: '咨询', notes: ['同比 (1%)'] }, infrastructure: { label: '基础设施', notes: ['同比 (7%)'] }, financing: { label: '融资', notes: ['同比 (3%)'] }, other_revenue: { label: '其他', notes: ['同比 (60%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' }, intellectual_property: { label: '知识产权' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (18 个百分点)'] }, operating_expenses: { label: '运营费用' }, sga: { label: '销售、一般及行政', notes: ['占收入 33%', '同比 +3 个百分点'] },
          other_expense: { label: '其他', notes: ['占收入 15%', '同比 +16 个百分点'] }, rnd: { label: '研发', notes: ['占收入 13%', '同比 +1 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

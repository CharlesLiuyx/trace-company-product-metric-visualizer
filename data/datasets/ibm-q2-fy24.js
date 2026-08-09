/* IBM Q2 FY24 income statement ($B), measured from the active Build source. */
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
    software: { blocks: [{ x: 421, top: 393, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+7% Y/Y', 28, 400, NOTE)] }, { x: 308, top: 533, anchor: 'end', lineGap: 8, lines: [line('Software', 39, 800, BLUE_LABEL), line('84% gross margin', 27, 400, NOTE)] }] },
    consulting: { blocks: [{ x: 421, top: 655, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(1%) Y/Y', 28, 400, NOTE)] }, { x: 308, top: 763, anchor: 'end', lineGap: 8, lines: [line('Consulting', 39, 800, BLUE_LABEL), line('26% gross margin', 27, 400, NOTE)] }] },
    infrastructure: { blocks: [{ x: 441, top: 886, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('+1% Y/Y', 28, 400, NOTE)] }, { x: 328, top: 981, anchor: 'end', lineGap: 8, lines: [line('Infrastructure', 39, 800, BLUE_LABEL), line('57% gross margin', 27, 400, NOTE)] }] },
    financing: { blocks: [
      { x: 428, top: 1103, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(99%) Y/Y', 28, 400, NOTE)] },
      { x: 303, top: 1165, anchor: 'end', lineGap: 8, lines: [line('Financing', 39, 800, BLUE_LABEL), line('49% gross margin', 27, 400, NOTE)] },
    ] },
    other_revenue: { blocks: [
      { x: 429, top: 1226, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(75%) Y/Y', 28, 400, NOTE)] },
      { x: 261, top: 1310, anchor: 'end', lines: [line('Other', 39, 800, BLUE_LABEL)] },
    ] },
    revenue: { blocks: [{ x: 888, top: 584, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+2% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 416, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('57% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1363, top: 1148, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1549, top: 1066, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1546, top: 916, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1829, top: 328, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('17% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 911, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 381, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('12% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2387, top: 628, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: 2398, top: 729, anchor: 'start', lineGap: 8, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2398, top: 956, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: 2398, top: 1217, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  const zhLabels = {
    software: sourceLabel('同比 +7%', '软件', '毛利率 84%', 393, 533),
    consulting: sourceLabel('同比 (1%)', '咨询', '毛利率 26%', 655, 763),
    infrastructure: sourceLabel('同比 +1%', '基础设施', '毛利率 57%', 886, 981),
    financing: sourceLabel('同比 (99%)', '融资', '毛利率 49%', 1103, 1165),
    other_revenue: { blocks: [{ x: 429, top: 1243, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 (75%)', 28, 400, NOTE)] }, { x: 261, top: 1310, anchor: 'end', lines: [line('其他', 39, 800, BLUE_LABEL)] }] },
    revenue: { blocks: [{ x: 895, top: 584, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +2%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 416, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 57%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1363, top: 1148, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1549, top: 1066, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1546, top: 916, anchor: 'middle', lineGap: 8, lines: [line('其他', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1829, top: 328, anchor: 'middle', lineGap: 10, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 17%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 911, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 381, anchor: 'start', lineGap: 10, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 12%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2398, top: 628, anchor: 'start', lineGap: 8, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: 2398, top: 729, anchor: 'start', lineGap: 8, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2398, top: 956, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: 2398, top: 1217, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q2-fy24',
    name: 'IBM · Q2 FY24',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q2 FY24 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q2-fy24.png', width: 2667, height: 1500 },
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
        software: { x: 392, y: 484, width: 71, height: 134 }, consulting: { x: 392, y: 747, width: 71, height: 103 },
        infrastructure: { x: 392, y: 977, width: 71, height: 71 }, financing: { x: 392, y: 1195, width: 71, height: 1 },
        other_revenue: { x: 392, y: 1333, width: 71, height: 1 }, revenue: { x: 859, y: 726, width: 70, height: 316 },
        gross_profit: { x: 1326, y: 599, width: 71, height: 179 }, cost_of_revenue: { x: 1331, y: 991, width: 71, height: 135 },
        intellectual_property: { x: 1514, y: 1050, width: 71, height: 3 }, other_income: { x: 1511, y: 893, width: 71, height: 3 },
        operating_profit: { x: 1794, y: 509, width: 70, height: 52 }, operating_expenses: { x: 1794, y: 752, width: 70, height: 135 },
        net_profit: { x: 2260, y: 408, width: 71, height: 35 }, interest: { x: 2260, y: 667, width: 71, height: 6 },
        tax: { x: 2260, y: 768, width: 71, height: 5 }, sga: { x: 2260, y: 933, width: 71, height: 98 },
        rnd: { x: 2260, y: 1232, width: 71, height: 35 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 6.7, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.2, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.6, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['(99%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.038, valueText: '$38M', notes: ['(75%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.8, notes: ['+2% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.0, valueText: '$9.0B', notes: ['57% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other income', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, notes: ['17% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.8, notes: ['12% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 4.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 1.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 6.7, sourceWidth: 134, targetWidth: 134, y0: 551, y1: 793, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.2, sourceWidth: 103, targetWidth: 103, y0: 798.5, y1: 911.5, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 3.6, sourceWidth: 71, targetWidth: 71, y0: 1012.5, y1: 998.5, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 1, targetWidth: 4, y0: 1195.5, y1: 1036, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.038, sourceWidth: 1, targetWidth: 4, y0: 1333.5, y1: 1040, linkTint: BLUE_LINK, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 9.0, sourceWidth: 179, targetWidth: 179, y0: 815.5, y1: 688.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.8, sourceWidth: 137, targetWidth: 135, y0: 973.5, y1: 1058.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 52, targetWidth: 52, y0: 625, y1: 535, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.3, sourceWidth: 127, targetWidth: 129, y0: 714.5, y1: 816.5, linkTint: RED_LINK, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'operating_expenses', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 894.5, y1: 882.5, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 1051.5, y1: 885.5, linkTint: GREEN_LINK, targetOrder: 2 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 36, targetWidth: 35, y0: 527, y1: 425.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 8, targetWidth: 6, y0: 549, y1: 670, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 8, targetWidth: 5, y0: 557, y1: 770.5, linkTint: RED_LINK, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 4.9, sourceWidth: 98, targetWidth: 98, y0: 801, y1: 982, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.8, sourceWidth: 37, targetWidth: 35, y0: 868.5, y1: 1249.5, linkTint: RED_LINK, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2024 财年第二季度',
        meta: { title: 'IBM 2024 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +7%'] }, consulting: { label: '咨询', notes: ['同比 (1%)'] }, infrastructure: { label: '基础设施', notes: ['同比 +1%'] }, financing: { label: '融资', notes: ['同比 (99%)'] }, other_revenue: { label: '其他', notes: ['同比 (75%)'] },
          revenue: { label: '收入', notes: ['同比 +2%'] }, gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +1 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +1 个百分点'] }, interest: { label: '利息' }, tax: { label: '税费' },
          sga: { label: '销售、一般及行政' }, rnd: { label: '研发' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

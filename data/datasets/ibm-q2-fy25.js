/* IBM Q2 FY25 income statement ($B), measured from the active Build source. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#1f70c1';
  const BLUE_LABEL = '#2074c7';
  const BLUE_LINK = '#93b7db';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const MUTED_GREEN = '#91b091';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT = 2398;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const sourceLabel = (valueNote, label, margin, valueTop, labelTop) => ({
    blocks: [
      { x: 429, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: 316, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), line(margin, 27, 400, NOTE)] },
    ],
  });

  const labels = {
    software: sourceLabel('+10% Y/Y', 'Software', '84% gross margin', 424, 559),
    consulting: sourceLabel('+3% Y/Y', 'Consulting', '28% gross margin', 710, 824),
    infrastructure: sourceLabel('+14% Y/Y', 'Infrastructure', '62% gross margin', 948, 1050),
    financing: sourceLabel('(2%) Y/Y', 'Financing', '46% gross margin', 1164, 1233),
    revenue: { blocks: [{ x: 895, top: 568, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+8% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 416, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('59% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1363, top: 1196, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1579, top: 989, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1579, top: 1147, anchor: 'middle', lineGap: 8, lines: [line('Other income', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1829, top: 319, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('18% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 953, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: 2354, top: 383, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('13% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: RIGHT, top: 641, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: RIGHT, top: 763, anchor: 'start', lineGap: 8, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT, top: 951, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('30% of revenue', 28, 400, NOTE), line('(2pp) Y/Y', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 1204, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('12% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)] }] },
  };

  const zhLabels = {
    software: sourceLabel('同比 +10%', '软件', '毛利率 84%', 424, 559),
    consulting: sourceLabel('同比 +3%', '咨询', '毛利率 28%', 710, 824),
    infrastructure: sourceLabel('同比 +14%', '基础设施', '毛利率 62%', 948, 1050),
    financing: sourceLabel('同比 (2%)', '融资', '毛利率 46%', 1164, 1233),
    revenue: { blocks: [{ x: 895, top: 568, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +8%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 416, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 59%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1363, top: 1197, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1579, top: 989, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1579, top: 1146, anchor: 'middle', lineGap: 8, lines: [line('其他收入', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1829, top: 319, anchor: 'middle', lineGap: 10, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 18%', 28, 400, NOTE), line('同比 +2 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1829, top: 962, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: 2354, top: 383, anchor: 'start', lineGap: 10, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 13%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: RIGHT, top: 641, anchor: 'start', lineGap: 8, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: RIGHT, top: 763, anchor: 'start', lineGap: 8, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: RIGHT, top: 951, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 30%', 28, 400, NOTE), line('同比 (2 个百分点)', 28, 400, NOTE)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 1204, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 12%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q2-fy25',
    name: 'IBM · Q2 FY25',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q2 FY25 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q2-fy25.png', width: 2667, height: 1500 },
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
        software: { x: 393, y: 518, width: 71, height: 152 }, consulting: { x: 393, y: 805, width: 71, height: 109 },
        infrastructure: { x: 393, y: 1042, width: 71, height: 84 }, financing: { x: 393, y: 1254, width: 71, height: 3 },
        revenue: { x: 860, y: 718, width: 70, height: 354 }, gross_profit: { x: 1327, y: 608, width: 71, height: 206 },
        cost_of_revenue: { x: 1327, y: 1044, width: 71, height: 144 }, intellectual_property: { x: 1542, y: 979, width: 71, height: 3 },
        other_income: { x: 1540, y: 1137, width: 71, height: 2 }, operating_profit: { x: 1795, y: 528, width: 70, height: 62 },
        operating_expenses: { x: 1795, y: 799, width: 70, height: 146 }, net_profit: { x: 2261, y: 436, width: 71, height: 44 },
        interest: { x: 2261, y: 670, width: 71, height: 9 }, tax: { x: 2261, y: 792, width: 71, height: 6 },
        sga: { x: 2261, y: 963, width: 71, height: 102 }, rnd: { x: 2261, y: 1223, width: 71, height: 43 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 7.4, notes: ['+10% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.3, notes: ['+3% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 4.1, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['(2%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 17.0, valueText: '$17.0B', notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.0, valueText: '$10.0B', notes: ['59% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 6.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other income', value: 0.039, valueText: '$39M', color: MUTED_GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.1, notes: ['18% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.2, notes: ['13% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 5.0, valueText: '($5.0B)', notes: ['30% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.1, notes: ['12% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 7.4, sourceWidth: 152, targetWidth: 154, y0: 594, y1: 795, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.3, sourceWidth: 109, targetWidth: 110, y0: 859.5, y1: 927, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 4.1, sourceWidth: 84, targetWidth: 85, y0: 1084, y1: 1024.5, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 5, y0: 1255.5, y1: 1069.5, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 10.0, sourceWidth: 206, targetWidth: 206, y0: 821, y1: 711, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.9, sourceWidth: 148, targetWidth: 144, y0: 998, y1: 1116, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.1, sourceWidth: 62, targetWidth: 62, y0: 639, y1: 559, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.9, sourceWidth: 144, targetWidth: 141, y0: 742, y1: 869.5, linkTint: RED_LINK, sourceOrder: 1, targetOrder: 0 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 3, targetWidth: 3, y0: 980.5, y1: 941.5, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'other_income', target: 'operating_expenses', value: 0.039, sourceWidth: 2, targetWidth: 2, y0: 1138, y1: 944, linkTint: GREEN_LINK, targetOrder: 2 },
      { source: 'operating_profit', target: 'net_profit', value: 2.2, sourceWidth: 44, targetWidth: 44, y0: 550, y1: 458, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.5, sourceWidth: 9, targetWidth: 9, y0: 576.5, y1: 674.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 9, targetWidth: 6, y0: 585.5, y1: 795, linkTint: RED_LINK, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 5.0, sourceWidth: 103, targetWidth: 102, y0: 850.5, y1: 1014, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.1, sourceWidth: 43, targetWidth: 43, y0: 923.5, y1: 1244.5, linkTint: RED_LINK, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2025 财年第二季度',
        meta: { title: 'IBM 2025 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 1958 },
        nodes: {
          software: { label: '软件', notes: ['同比 +10%'] }, consulting: { label: '咨询', notes: ['同比 +3%'] }, infrastructure: { label: '基础设施', notes: ['同比 +14%'] }, financing: { label: '融资', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +8%'] }, gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他收入' }, operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +1 个百分点'] }, interest: { label: '利息' }, tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 30%', '同比 (2 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

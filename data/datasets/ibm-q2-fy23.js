/* IBM Q2 FY23 income statement ($B), measured from the active Build source. */
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
  const sourceLabel = (valueNote, label, margin, valueTop, labelTop, labelX = 314, valueX = 427) => ({
    blocks: [
      { x: valueX, top: valueTop, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line(valueNote, 28, 400, NOTE)] },
      { x: labelX, top: labelTop, anchor: 'end', lineGap: 8, lines: [line(label, 39, 800, BLUE_LABEL), line(margin, 27, 400, NOTE)] },
    ],
  });

  const labels = {
    software: sourceLabel('+7% Y/Y', 'Software', '79% gross margin', 315, 435, 297),
    consulting: sourceLabel('+4% Y/Y', 'Consulting', '26% gross margin', 595, 700, 297),
    infrastructure: sourceLabel('(15%) Y/Y', 'Infrastructure', '56% gross margin', 847, 926, 343),
    financing: sourceLabel('+27% Y/Y', 'Financing', '49% gross margin', 1078, 1130, 299, 428),
    other_revenue: { blocks: [
      { x: 428, top: 1220, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('(720%) Y/Y', 28, 400, NOTE)] },
      { x: 252, top: 1290, anchor: 'end', lines: [line('Other', 39, 800, BLUE_LABEL)] },
    ] },
    revenue: { blocks: [{ x: 892, top: 570, anchor: 'middle', lineGap: 10, lines: [line('Revenue', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('+0% Y/Y', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 427, anchor: 'middle', lineGap: 10, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('61% margin', 28, 400, NOTE), line('+8pp Y/Y', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1362, top: 1133, anchor: 'middle', lineGap: 10, lines: [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1595, top: 1022, anchor: 'middle', lineGap: 8, lines: [line('Intellectual', 30, 800, GREEN_LABEL), line('property', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1597, top: 1217, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1814, top: 362, anchor: 'middle', lineGap: 10, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('18% margin', 28, 400, NOTE), line('+11pp Y/Y', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1834, top: 1005, anchor: 'middle', lineGap: 10, lines: [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: 2354, top: 370, anchor: 'start', lineGap: 10, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('11% margin', 28, 400, NOTE), line('+7pp Y/Y', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2389, top: 670, anchor: 'start', lineGap: 8, lines: [line('Interest', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: 2399, top: 800, anchor: 'start', lineGap: 8, lines: [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2401, top: 978, anchor: 'start', lineGap: 8, lines: [line('SG&A', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: 2401, top: 1184, anchor: 'start', lineGap: 8, lines: [line('R&D', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  const zhLabels = {
    software: sourceLabel('同比 +7%', '软件', '毛利率 79%', 315, 435, 297),
    consulting: sourceLabel('同比 +4%', '咨询', '毛利率 26%', 595, 700, 297),
    infrastructure: sourceLabel('同比 (15%)', '基础设施', '毛利率 56%', 847, 926, 343),
    financing: sourceLabel('同比 +27%', '融资', '毛利率 49%', 1078, 1130, 299, 428),
    other_revenue: { blocks: [{ x: 428, top: 1220, anchor: 'middle', lineGap: 8, lines: [line('$value', 38, 400), line('同比 (720%)', 28, 400, NOTE)] }, { x: 252, top: 1290, anchor: 'end', lines: [line('其他', 39, 800, BLUE_LABEL)] }] },
    revenue: { blocks: [{ x: 892, top: 570, anchor: 'middle', lineGap: 10, lines: [line('收入', 40, 800, BLUE_LABEL), line('$value', 39, 400, BLUE_LABEL), line('同比 +0%', 28, 400, NOTE)] }] },
    gross_profit: { blocks: [{ x: 1362, top: 427, anchor: 'middle', lineGap: 10, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 61%', 28, 400, NOTE), line('同比 +8 个百分点', 28, 400, NOTE)] }] },
    cost_of_revenue: { blocks: [{ x: 1362, top: 1142, anchor: 'middle', lineGap: 10, lines: [line('收入', 38, 800, RED_LABEL), line('成本', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    intellectual_property: { blocks: [{ x: 1595, top: 1022, anchor: 'middle', lineGap: 8, lines: [line('知识产权', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    other_income: { blocks: [{ x: 1597, top: 1217, anchor: 'middle', lineGap: 8, lines: [line('其他', 30, 800, GREEN_LABEL), line('$value', 29, 400, GREEN_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1814, top: 362, anchor: 'middle', lineGap: 10, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 18%', 28, 400, NOTE), line('同比 +11 个百分点', 28, 400, NOTE)] }] },
    operating_expenses: { blocks: [{ x: 1834, top: 1017, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: 2354, top: 370, anchor: 'start', lineGap: 10, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL), line('利润率 11%', 28, 400, NOTE), line('同比 +7 个百分点', 28, 400, NOTE)] }] },
    interest: { blocks: [{ x: 2389, top: 670, anchor: 'start', lineGap: 8, lines: [line('利息', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    tax: { blocks: [{ x: 2399, top: 800, anchor: 'start', lineGap: 8, lines: [line('税费', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    sga: { blocks: [{ x: 2401, top: 978, anchor: 'start', lineGap: 8, lines: [line('销售、一般及行政', 27, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: 2401, top: 1184, anchor: 'start', lineGap: 8, lines: [line('研发', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q2-fy23',
    name: 'IBM · Q2 FY23',
    company: 'IBM',
    meta: {
      company: 'IBM', title: 'IBM Q2 FY23 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2050,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 460, logoHeight: 210, logoY: 278, logoViewBox: '0 0 460 210', logoSvg: BUSINESS_ICONS.ibmLogo || '',
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
        software: { x: 392, y: 406, width: 71, height: 121 }, consulting: { x: 392, y: 687, width: 71, height: 92 },
        infrastructure: { x: 392, y: 933, width: 71, height: 66 }, financing: { x: 392, y: 1170, width: 71, height: 2 },
        other_revenue: { x: 392, y: 1315, width: 71, height: 2 }, revenue: { x: 859, y: 717, width: 70, height: 289 },
        gross_profit: { x: 1326, y: 609, width: 71, height: 157 }, cost_of_revenue: { x: 1331, y: 989, width: 71, height: 129 },
        intellectual_property: { x: 1559, y: 1000, width: 71, height: 3 }, other_income: { x: 1564, y: 1197, width: 71, height: 3 },
        operating_profit: { x: 1776, y: 545, width: 70, height: 44 }, operating_expenses: { x: 1786, y: 863, width: 70, height: 122 },
        net_profit: { x: 2260, y: 455, width: 71, height: 27 }, interest: { x: 2260, y: 709, width: 71, height: 6 },
        tax: { x: 2260, y: 839, width: 71, height: 5 }, sga: { x: 2260, y: 969, width: 71, height: 90 },
        rnd: { x: 2260, y: 1208, width: 71, height: 30 },
      },
      labels,
    },
    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 6.6, notes: ['+7% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.0, valueText: '$5.0B', notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.6, notes: ['(15%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['+27% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.1, notes: ['(720%) Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.5, notes: ['+0% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.5, notes: ['61% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.0, valueText: '($7.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 0, type: 'profit', label: ['Intellectual', 'property'], value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 3, order: 1, type: 'profit', label: 'Other', value: 0.3, valueText: '$0.3B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.4, notes: ['18% margin', '+11pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['11% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 4.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'software', target: 'revenue', value: 6.6, sourceWidth: 121, targetWidth: 123, y0: 466.5, y1: 778.5, linkTint: BLUE_LINK, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.0, sourceWidth: 92, targetWidth: 93, y0: 733, y1: 886.5, linkTint: BLUE_LINK, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 3.6, sourceWidth: 66, targetWidth: 67, y0: 966, y1: 967.5, linkTint: BLUE_LINK, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 4, y0: 1171, y1: 1003, linkTint: BLUE_LINK, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 1316, y1: 1005, linkTint: BLUE_LINK, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 8.5, sourceWidth: 161, targetWidth: 157, y0: 797.5, y1: 687.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.0, sourceWidth: 128, targetWidth: 129, y0: 942, y1: 1053.5, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.4, sourceWidth: 44, targetWidth: 44, y0: 631, y1: 567, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.1, sourceWidth: 113, targetWidth: 112, y0: 709.5, y1: 919, linkTint: RED_LINK, sourceOrder: 1, targetOrder: 0 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, sourceWidth: 3, targetWidth: 5, y0: 1001.5, y1: 977.5, linkTint: GREEN_LINK, targetOrder: 1 },
      { source: 'other_income', target: 'operating_expenses', value: 0.3, sourceWidth: 3, targetWidth: 5, y0: 1198.5, y1: 982.5, linkTint: GREEN_LINK, targetOrder: 2 },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 27, targetWidth: 27, y0: 558.5, y1: 468.5, linkTint: GREEN_LINK, sourceOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 8, targetWidth: 6, y0: 576, y1: 712, linkTint: RED_LINK, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 9, targetWidth: 5, y0: 584.5, y1: 841.5, linkTint: RED_LINK, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 4.9, sourceWidth: 91, targetWidth: 90, y0: 908.5, y1: 1014, linkTint: RED_LINK, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.7, sourceWidth: 31, targetWidth: 30, y0: 969.5, y1: 1223, linkTint: RED_LINK, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'IBM · 2023 财年第二季度',
        meta: { title: 'IBM 2023 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 2050 },
        nodes: {
          software: { label: '软件', notes: ['同比 +7%'] }, consulting: { label: '咨询', notes: ['同比 +4%'] }, infrastructure: { label: '基础设施', notes: ['同比 (15%)'] }, financing: { label: '融资', notes: ['同比 +27%'] }, other_revenue: { label: '其他', notes: ['同比 (720%)'] },
          revenue: { label: '收入', notes: ['同比 +0%'] }, gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 +8 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          intellectual_property: { label: '知识产权' }, other_income: { label: '其他' }, operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +11 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +7 个百分点'] }, interest: { label: '利息' }, tax: { label: '税费' }, sga: { label: '销售、一般及行政' }, rnd: { label: '研发' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

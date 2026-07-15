/* HP Q4 FY25 income statement ($B), reconstructed from the claimed Source. */
(function () {
  const HP_BLUE = '#0096d6';
  const TITLE = '#155077';
  const BLUE_LABEL = '#0096d6';
  const BLUE_LINK = '#85c9e4';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2380;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const label = (x, top, anchor, lines, lineGap = 8) => ({ blocks: [{ x, top, anchor, lineGap, lines }] });
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hp-q4-fy25',
    name: 'HP - Q4 FY25',
    company: 'HP',
    meta: {
      company: 'HP', title: 'HP Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Oct. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/hp-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 124, titleWeight: 800, titleTextLength: 1888,
      periodX: 2462, periodY: 249, periodNoteY: 291,
      logoWidth: 248, logoHeight: 248, logoY: 236, logoViewBox: '0 0 300 300', logoSvg: BUSINESS_ICONS.hpLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: HP_BLUE, label: BLUE_LABEL }, hub: { node: HP_BLUE, label: BLUE_LABEL }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, interfaceAudit: { mode: 'error' },
      type: { name: 39, value: 38, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 22.2,
      nodes: {
        ps_commercial: { x: 415, y: 462, width: 73, height: 157 }, ps_consumer: { x: 415, y: 747, width: 73, height: 78 },
        printing_supplies: { x: 415, y: 955, width: 73, height: 62 }, printing_commercial: { x: 415, y: 1144, width: 73, height: 27 }, printing_consumer: { x: 415, y: 1296, width: 73, height: 3 },
        personal_systems: { x: 790, y: 591, width: 74, height: 230 }, printing: { x: 790, y: 1083, width: 74, height: 95 }, revenue: { x: 1164, y: 727, width: 74, height: 326 },
        gross_profit: { x: 1537, y: 590, width: 74, height: 66 }, cost_of_revenue: { x: 1537, y: 912, width: 74, height: 261 },
        operating_profit: { x: 1910, y: 490, width: 74, height: 20 }, operating_expenses: { x: 1910, y: 694, width: 74, height: 44 },
        net_profit: { x: 2283, y: 403, width: 74, height: 20 }, other_nonoperating: { x: 2283, y: 559, width: 74, height: 3 }, tax: { x: 2283, y: 655, width: 74, height: 3 },
        sga: { x: 2283, y: 760, width: 74, height: 33 }, rnd: { x: 2283, y: 931, width: 74, height: 10 }, restructuring: { x: 2283, y: 1073, width: 74, height: 3 }, other_opex: { x: 2283, y: 1208, width: 74, height: 3 },
      },
      labels: {
        ps_commercial: { blocks: [
          { x: 384, top: 485, anchor: 'end', lineGap: 16, lines: [line('Personal Systems', 37, 800), line('Commercial', 37, 800)] },
          { x: 451, top: 366, anchor: 'middle', lineGap: 8, lines: [line('$value', 37, 400), line('+7% Y/Y', 27, 400, NOTE)] },
        ] },
        ps_consumer: { blocks: [
          { x: 384, top: 733, anchor: 'end', lineGap: 16, lines: [line('Personal Systems', 37, 800), line('Consumer', 37, 800)] },
          { x: 451, top: 648, anchor: 'middle', lineGap: 8, lines: [line('$value', 37, 400), line('+10% Y/Y', 27, 400, NOTE)] },
        ] },
        printing_supplies: { blocks: [
          { x: 384, top: 943, anchor: 'end', lineGap: 16, lines: [line('Printing', 37, 800), line('Supplies', 37, 800)] },
          { x: 451, top: 853, anchor: 'middle', lineGap: 8, lines: [line('$value', 37, 400), line('(4%) Y/Y', 27, 400, NOTE)] },
        ] },
        printing_commercial: { blocks: [
          { x: 384, top: 1097, anchor: 'end', lineGap: 16, lines: [line('Printing', 37, 800), line('Commercial', 37, 800)] },
          { x: 451, top: 1044, anchor: 'middle', lineGap: 8, lines: [line('$value', 37, 400), line('(4%) Y/Y', 27, 400, NOTE)] },
        ] },
        printing_consumer: { blocks: [
          { x: 384, top: 1235, anchor: 'end', lineGap: 16, lines: [line('Printing', 37, 800), line('Consumer', 37, 800)] },
          { x: 451, top: 1195, anchor: 'middle', lineGap: 8, lines: [line('$value', 37, 400), line('(9%) Y/Y', 27, 400, NOTE)] },
        ] },
        personal_systems: label(827, 384, 'middle', [line('Personal', 39, 800), line('Systems', 39, 800), line('$value', 38, 400), line('+8% Y/Y', 28, 400, NOTE)], 13),
        printing: label(827, 1201, 'middle', [line('Printing', 39, 800), line('$value', 38, 400), line('(4%) Y/Y', 28, 400, NOTE)]),
        revenue: label(1201, 576, 'middle', [line('Revenue', 39, 800), line('$value', 38, 400), line('+4% Y/Y', 28, 400, NOTE)], 10),
        gross_profit: label(1574, 396, 'middle', [line('Gross profit', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('20% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)], 14),
        cost_of_revenue: label(1574, 1183, 'middle', [line('Cost of', 38, 800, RED_LABEL), line('revenue', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 12),
        operating_profit: label(1947, 297, 'middle', [line('Operating profit', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('7% margin', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)], 14),
        operating_expenses: label(1947, 752, 'middle', [line('Operating', 38, 800, RED_LABEL), line('expenses', 38, 800, RED_LABEL), line('$value', 37, 400, RED_LABEL)], 12),
        net_profit: label(2382, 334, 'start', [line('Net profit', 39, 800, GREEN_LABEL), line('$value', 38, 400, GREEN_LABEL), line('5% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)], 14),
        other_nonoperating: label(2428, 533, 'start', [line('Other', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 0),
        tax: label(2428, 634, 'start', [line('Tax', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)], 0),
        sga: { blocks: [
          { x: 2380, top: 763, anchor: 'start', lines: [line('SG&A', 31, 800, RED_LABEL)] },
          { x: 2482, top: 763, anchor: 'start', lines: [line('$value', 30, 400, RED_LABEL)] },
          { x: 2378, top: 800, anchor: 'start', lineGap: 7, lines: [line('10% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)] },
        ] },
        rnd: { blocks: [
          { x: 2385, top: 923, anchor: 'start', lines: [line('R&D', 31, 800, RED_LABEL)] },
          { x: 2470, top: 923, anchor: 'start', lines: [line('$value', 30, 400, RED_LABEL)] },
          { x: 2385, top: 960, anchor: 'start', lineGap: 7, lines: [line('3% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)] },
        ] },
        restructuring: label(2374, 1064, 'start', [line('Restructuring', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('1% of revenue', 28, 400, NOTE)], 4),
        other_opex: { blocks: [
          { x: 2380, top: 1195, anchor: 'start', lines: [line('Other', 31, 800, RED_LABEL)] },
          { x: 2480, top: 1195, anchor: 'start', lines: [line('$value', 30, 400, RED_LABEL)] },
          { x: 2380, top: 1232, anchor: 'start', lines: [line('0% of revenue', 28, 400, NOTE)] },
        ] },
      },
    },
    nodes: [
      { id: 'ps_commercial', col: 0, order: 0, type: 'source', label: ['Personal Systems', 'Commercial'], value: 7.0, valueText: '$7.0B', notes: ['+7% Y/Y'], color: '#90a2f8', labelColor: '#90a1f8', linkTint: '#c5cef4' },
      { id: 'ps_consumer', col: 0, order: 1, type: 'source', label: ['Personal Systems', 'Consumer'], value: 3.4, notes: ['+10% Y/Y'], color: '#40aeff', labelColor: '#40aeff', linkTint: '#a2d3f7' },
      { id: 'printing_supplies', col: 0, order: 2, type: 'source', label: ['Printing', 'Supplies'], value: 2.8, notes: ['(4%) Y/Y'], color: '#549ef8', labelColor: '#549ef8', linkTint: '#abcbf4' },
      { id: 'printing_commercial', col: 0, order: 3, type: 'source', label: ['Printing', 'Commercial'], value: 1.2, notes: ['(4%) Y/Y'], color: '#80c9ff', labelColor: '#80c9ff', linkTint: '#bfdff7' },
      { id: 'printing_consumer', col: 0, order: 4, type: 'source', label: ['Printing', 'Consumer'], value: 0.3, notes: ['(9%) Y/Y'], color: '#026dce', labelColor: '#026dcd', linkTint: '#86b6e1' },
      { id: 'personal_systems', col: 1, order: 0, type: 'source', label: ['Personal', 'Systems'], value: 10.4, notes: ['+8% Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'printing', col: 1, order: 1, type: 'source', label: 'Printing', value: 4.3, notes: ['(4%) Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 14.6, notes: ['+4% Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.0, valueText: '$3.0B', notes: ['20% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 11.7, valueText: '($11.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.0, valueText: '$1.0B', notes: ['7% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.8, notes: ['5% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_nonoperating', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.039, valueText: '($39M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.4, valueText: '($1.4B)', notes: ['10% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.4, valueText: '($0.4B)', notes: ['3% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', notes: ['0% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'ps_commercial', target: 'personal_systems', value: 7.0, width: 157, targetWidth: 153, targetOrder: 0, linkTint: { left: '#c5cef4', right: '#c5cef4' } }, { source: 'ps_consumer', target: 'personal_systems', value: 3.4, width: 78, targetWidth: 77, targetOrder: 1, linkTint: { left: '#a2d3f7', right: '#a2d3f7' } },
      { source: 'printing_supplies', target: 'printing', value: 2.8, width: 62, targetWidth: 64, targetOrder: 0, linkTint: { left: '#abcbf4', right: '#abcbf4' } }, { source: 'printing_commercial', target: 'printing', value: 1.2, width: 27, targetWidth: 28, targetOrder: 1, linkTint: { left: '#bfdff7', right: '#bfdff7' } }, { source: 'printing_consumer', target: 'printing', value: 0.3, width: 3, targetWidth: 3, targetOrder: 2, linkTint: { left: '#86b6e1', right: '#86b6e1' } },
      { source: 'personal_systems', target: 'revenue', value: 10.4, width: 230, targetOrder: 0 }, { source: 'printing', target: 'revenue', value: 4.3, width: 95, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 3.0, width: 66, sourceOrder: 0, targetOrder: 0 }, { source: 'revenue', target: 'cost_of_revenue', value: 11.7, width: 261, sourceWidth: 260, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.0, width: 20, sourceOrder: 0, targetOrder: 0 }, { source: 'gross_profit', target: 'operating_expenses', value: 2.0, width: 44, sourceWidth: 45, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, width: 17, targetWidth: 19, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_profit', target: 'other_nonoperating', value: 0.1, width: 3, sourceWidth: 2, sourceOrder: 1, targetOrder: 0 }, { source: 'operating_profit', target: 'tax', value: 0.039, width: 1, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.4, width: 33, sourceWidth: 29, sourceOrder: 0, targetOrder: 0 }, { source: 'operating_expenses', target: 'rnd', value: 0.4, width: 10, sourceWidth: 9, sourceOrder: 1, targetOrder: 0 }, { source: 'operating_expenses', target: 'restructuring', value: 0.1, width: 3, sourceOrder: 2, targetOrder: 0 }, { source: 'operating_expenses', target: 'other_opex', value: 0.1, width: 3, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: { zh: {
      name: 'HP · 2025 财年第四季度', meta: { title: 'HP 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 10 月' },
      nodes: {
        ps_commercial: { label: '商用个人系统', notes: ['同比 +7%'] }, ps_consumer: { label: '消费者个人系统', notes: ['同比 +10%'] }, printing_supplies: { label: '打印耗材', notes: ['同比 (4%)'] }, printing_commercial: { label: '商用打印', notes: ['同比 (4%)'] }, printing_consumer: { label: '消费者打印', notes: ['同比 (9%)'] }, personal_systems: { label: '个人系统', notes: ['同比 +8%'] }, printing: { label: '打印', notes: ['同比 (4%)'] }, revenue: { label: '收入', notes: ['同比 +4%'] }, gross_profit: { label: '毛利润', notes: ['利润率 20%', '同比 (1 个百分点)'] }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 (0 个百分点)'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (1 个百分点)'] }, other_nonoperating: { label: '其他' }, tax: { label: '税费' }, sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] }, restructuring: { label: '重组', notes: ['占收入 1%'] }, other_opex: { label: '其他', notes: ['占收入 0%'] },
      },
      layout: { labels: {
        sga: { blocks: [
          { x: RIGHT_LABEL_X, top: 745, anchor: 'start', lineGap: 7, lines: [line('销售、一般及行政', 31, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 10%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)] },
        ] },
      } },
    } },
  });
})();

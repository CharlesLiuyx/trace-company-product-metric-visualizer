/* Analog Devices Q2 FY26 income statement — fixed reference-matched Sankey. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const INDUSTRIAL = '#8637ba';
  const INDUSTRIAL_LINK = '#c19dd8';
  const AUTOMOTIVE = '#0063b2';
  const AUTOMOTIVE_LINK = '#85b2d4';
  const COMMUNICATIONS = '#00a86b';
  const COMMUNICATIONS_LINK = '#85d1b4';
  const CONSUMER = '#1b9cd0';
  const CONSUMER_LINK = '#91cae2';
  const REVENUE_BLUE = '#0067a5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'analog-devices-q2-fy26',
    name: 'Analog Devices · Q2 FY26',
    company: 'Analog Devices',
    meta: {
      company: 'Analog Devices',
      title: 'Analog Devices Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/analog-devices-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2500,
      periodX: 1805,
      periodY: 1210,
      periodNoteY: 1253,
      logoWidth: 520,
      logoHeight: 135,
      logoY: 334,
      logoViewBox: '0 0 520 135',
      logoSvg: BUSINESS_ICONS.analogDevicesCompanyWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: AUTOMOTIVE, label: AUTOMOTIVE },
        hub: { node: REVENUE_BLUE, label: REVENUE_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: AUTOMOTIVE_LINK, hub: AUTOMOTIVE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 106,
      nodes: {
        industrial: { x: 367, y: 425, width: 71, height: 191 },
        automotive: { x: 367, y: 767, width: 71, height: 92 },
        communications: { x: 367, y: 1006, width: 71, height: 59 },
        consumer: { x: 367, y: 1210, width: 71, height: 42 },
        revenue: { x: 834, y: 647, width: 70, height: 384 },
        gross_profit: { x: 1301, y: 553, width: 71, height: 259 },
        cost_of_sales: { x: 1301, y: 1056, width: 71, height: 126 },
        operating_profit: { x: 1771, y: 432, width: 70, height: 148 },
        operating_expenses: { x: 1769, y: 809, width: 70, height: 114 },
        net_profit: { x: 2235, y: 317, width: 71, height: 126 },
        tax: { x: 2235, y: 679, width: 71, height: 16 },
        interest: { x: 2235, y: 800, width: 71, height: 7 },
        rnd: { x: 2235, y: 909, width: 71, height: 55 },
        sga: { x: 2235, y: 1093, width: 71, height: 39 },
        amortization: { x: 2235, y: 1270, width: 71, height: 22 },
      },
      labels: {
        industrial: { blocks: [
          { x: 408, top: 328, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+56% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 344, top: 487, anchor: 'end', lines: [{ text: 'Industrial', size: 40, weight: 800 }] },
        ] },
        automotive: { blocks: [
          { x: 408, top: 671, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 346, top: 792, anchor: 'end', lines: [{ text: 'Automotive', size: 40, weight: 800 }] },
        ] },
        communications: { blocks: [
          { x: 408, top: 909, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+79% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 345, top: 1010, anchor: 'end', lines: [{ text: 'Communications', size: 40, weight: 800 }] },
        ] },
        consumer: { blocks: [
          { x: 408, top: 1113, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+23% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 344, top: 1205, anchor: 'end', lines: [{ text: 'Consumer', size: 40, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 869, top: 495, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1337, top: 365, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: '67% margin', size: 28, weight: 400, color: NOTE }, { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1337, top: 1194, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of sales', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1806, top: 242, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '38% margin', size: 28, weight: 400, color: NOTE }, { text: '+12pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1804, top: 936, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 34, weight: 800 }, { text: 'Expenses', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2348, top: 293, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: '32% margin', size: 28, weight: 400, color: NOTE }, { text: '+11pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: 2460, top: 646, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        interest: { blocks: [{ x: 2460, top: 760, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2391, top: 899, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D ($0.5B)', size: 31, weight: 800 }, { text: '14% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        sga: { blocks: [{ x: 2378, top: 1074, anchor: 'start', lineGap: 8, lines: [{ text: 'SG&A ($0.4B)', size: 31, weight: 800 }, { text: '10% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        amortization: { blocks: [{ x: 2325, top: 1250, anchor: 'start', lineGap: 8, lines: [{ text: 'Amortization ($0.2B)', size: 31, weight: 800 }, { text: '5% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'industrial', col: 0, order: 0, type: 'source', label: 'Industrial', value: 1.799413, notes: ['+56% Y/Y'], color: INDUSTRIAL, labelColor: INDUSTRIAL, linkTint: INDUSTRIAL_LINK },
      { id: 'automotive', col: 0, order: 1, type: 'source', label: 'Automotive', value: 0.871565, notes: ['+2% Y/Y'], color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'communications', col: 0, order: 2, type: 'source', label: 'Communications', value: 0.554728, notes: ['+79% Y/Y'], color: COMMUNICATIONS, labelColor: COMMUNICATIONS, linkTint: COMMUNICATIONS_LINK },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 0.397759, notes: ['+23% Y/Y'], color: CONSUMER, labelColor: CONSUMER, linkTint: CONSUMER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.623465, notes: ['+37% Y/Y'], color: REVENUE_BLUE, labelColor: REVENUE_BLUE, linkTint: AUTOMOTIVE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.439798, notes: ['67% margin', '+6pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 1.183667 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.37968, notes: ['38% margin', '+12pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.060118 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.17635, notes: ['32% margin', '+11pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.148478 },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.054852 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.509323, notes: ['14% of revenue', '(3pp) Y/Y'] },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.36281, notes: ['10% of revenue', '(1pp) Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.187985, notes: ['5% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'industrial', target: 'revenue', value: 1.799413, targetOrder: 0 },
      { source: 'automotive', target: 'revenue', value: 0.871565, targetOrder: 1 },
      { source: 'communications', target: 'revenue', value: 0.554728, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 0.397759, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.439798, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1.183667, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.37968, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.060118, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.17635, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.148478, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.054852, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.509323, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.36281, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.187985, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Analog Devices · 2026 财年第二季度',
        meta: { title: 'Analog Devices 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 4 月' },
        nodes: {
          industrial: { label: '工业', notes: ['同比 +56%'] }, automotive: { label: '汽车', notes: ['同比 +2%'] }, communications: { label: '通信', notes: ['同比 +79%'] }, consumer: { label: '消费者', notes: ['同比 +23%'] }, revenue: { label: '收入', notes: ['同比 +37%'] }, gross_profit: { label: '毛利润', notes: ['利润率 67%', '同比 +6 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 38%', '同比 +12 个百分点'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +11 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' }, rnd: { label: '研发', notes: ['占收入 14%', '同比 (3 个百分点)'] }, sga: { label: '销售及管理', notes: ['占收入 10%', '同比 (1 个百分点)'] }, amortization: { label: '摊销', notes: ['占收入 5%', '同比 (2 个百分点)'] },
        },
        layout: {
          labels: {
            rnd: { blocks: [{ x: 2391, top: 909, anchor: 'start', lineGap: 8, lines: [{ text: '研发 ($0.5B)', size: 31, weight: 800 }, { text: '占收入 14%', size: 28, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            sga: { blocks: [{ x: 2378, top: 1084, anchor: 'start', lineGap: 8, lines: [{ text: '销售及管理 ($0.4B)', size: 31, weight: 800 }, { text: '占收入 10%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            amortization: { blocks: [{ x: 2325, top: 1260, anchor: 'start', lineGap: 8, lines: [{ text: '摊销 ($0.2B)', size: 31, weight: 800 }, { text: '占收入 5%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();

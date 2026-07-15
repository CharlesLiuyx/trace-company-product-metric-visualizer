/* Analog Devices Q4 FY25 income statement — fixed reference-matched Sankey. */
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
    key: 'analog-devices-q4-fy25',
    name: 'Analog Devices · Q4 FY25',
    company: 'Analog Devices',
    meta: {
      company: 'Analog Devices',
      title: 'Analog Devices Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/analog-devices-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2500,
      periodX: 2446,
      periodY: 258,
      periodNoteY: 304,
      logoWidth: 520,
      logoHeight: 135,
      logoY: 329,
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
      scale: 118,
      nodes: {
        industrial: { x: 369, y: 441, width: 71, height: 168 },
        automotive: { x: 369, y: 763, width: 71, height: 101 },
        communications: { x: 369, y: 1010, width: 71, height: 46 },
        consumer: { x: 369, y: 1214, width: 71, height: 46 },
        revenue: { x: 836, y: 671, width: 70, height: 365 },
        gross_profit: { x: 1303, y: 566, width: 71, height: 229 },
        cost_of_sales: { x: 1303, y: 1019, width: 71, height: 134 },
        operating_profit: { x: 1771, y: 481, width: 70, height: 112 },
        operating_expenses: { x: 1771, y: 775, width: 70, height: 118 },
        net_profit: { x: 2237, y: 380, width: 71, height: 93 },
        tax: { x: 2237, y: 661, width: 71, height: 12 },
        interest: { x: 2237, y: 784, width: 71, height: 7 },
        rnd: { x: 2237, y: 870, width: 71, height: 55 },
        sga: { x: 2237, y: 1066, width: 71, height: 40 },
        amortization: { x: 2237, y: 1251, width: 71, height: 22 },
      },
      labels: {
        industrial: { blocks: [
          { x: 404, top: 341, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+34% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 343, top: 502, anchor: 'end', lines: [{ text: 'Industrial', size: 40, weight: 800 }] },
        ] },
        automotive: { blocks: [
          { x: 404, top: 661, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 343, top: 784, anchor: 'end', lines: [{ text: 'Automotive', size: 40, weight: 800 }] },
        ] },
        communications: { blocks: [
          { x: 404, top: 907, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 343, top: 1003, anchor: 'end', lines: [{ text: 'Communications', size: 40, weight: 800 }] },
        ] },
        consumer: { blocks: [
          { x: 410, top: 1115, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE }] },
          { x: 349, top: 1206, anchor: 'end', lines: [{ text: 'Consumer', size: 40, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 871, top: 530, anchor: 'middle', lineGap: 9, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+26% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1339, top: 382, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: '63% margin', size: 28, weight: 400, color: NOTE }, { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1339, top: 1165, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of sales', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1806, top: 301, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '31% margin', size: 28, weight: 400, color: NOTE }, { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1806, top: 914, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 34, weight: 800 }, { text: 'Expenses', size: 34, weight: 800 }, { text: '$value', size: 34, weight: 400 }] }] },
        net_profit: { blocks: [{ x: 2355, top: 379, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: '26% margin', size: 28, weight: 400, color: NOTE }, { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: 2452, top: 616, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        interest: { blocks: [{ x: 2460, top: 746, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2409, top: 884, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D ($0.5B)', size: 31, weight: 800 }, { text: '15% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        sga: { blocks: [{ x: 2382, top: 1070, anchor: 'start', lineGap: 8, lines: [{ text: 'SG&A ($0.3B)', size: 31, weight: 800 }, { text: '11% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
        amortization: { blocks: [{ x: 2320, top: 1244, anchor: 'start', lineGap: 8, lines: [{ text: 'Amortization ($0.2B)', size: 31, weight: 800 }, { text: '6% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'industrial', col: 0, order: 0, type: 'source', label: 'Industrial', value: 1.426527, notes: ['+34% Y/Y'], color: INDUSTRIAL, labelColor: INDUSTRIAL, linkTint: INDUSTRIAL_LINK },
      { id: 'automotive', col: 0, order: 1, type: 'source', label: 'Automotive', value: 0.852246, notes: ['+19% Y/Y'], color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'communications', col: 0, order: 2, type: 'source', label: 'Communications', value: 0.389801, notes: ['+37% Y/Y'], color: COMMUNICATIONS, labelColor: COMMUNICATIONS, linkTint: COMMUNICATIONS_LINK },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 0.407543, notes: ['+7% Y/Y'], color: CONSUMER, labelColor: CONSUMER, linkTint: CONSUMER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.076117, notes: ['+26% Y/Y'], color: REVENUE_BLUE, labelColor: REVENUE_BLUE, linkTint: AUTOMOTIVE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.941817, notes: ['63% margin', '+5pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 1.1343 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.945212, notes: ['31% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 0.996605 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.787739, notes: ['26% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.099461 },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.058012 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.467021, notes: ['15% of revenue', '(0pp) Y/Y'] },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.342168, notes: ['11% of revenue', '(0pp) Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.187416, notes: ['6% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'industrial', target: 'revenue', value: 1.426527, sourceWidth: 168, targetWidth: 168, targetOrder: 0 },
      { source: 'automotive', target: 'revenue', value: 0.852246, sourceWidth: 101, targetWidth: 102, targetOrder: 1 },
      { source: 'communications', target: 'revenue', value: 0.389801, sourceWidth: 46, targetWidth: 48, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 0.407543, sourceWidth: 46, targetWidth: 47, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 1.941817, sourceWidth: 228, targetWidth: 228, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1.1343, sourceWidth: 137, targetWidth: 134, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.945212, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.996605, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.787739, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.099461, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.058012, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.467021, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.342168, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.187416, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Analog Devices · 2025 财年第四季度',
        meta: { title: 'Analog Devices 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 10 月' },
        nodes: {
          industrial: { label: '工业', notes: ['同比 +34%'] }, automotive: { label: '汽车', notes: ['同比 +19%'] }, communications: { label: '通信', notes: ['同比 +37%'] }, consumer: { label: '消费者', notes: ['同比 +7%'] }, revenue: { label: '收入', notes: ['同比 +26%'] }, gross_profit: { label: '毛利润', notes: ['利润率 63%', '同比 +5 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +7 个百分点'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 26%', '同比 +6 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' }, rnd: { label: '研发', notes: ['占收入 15%', '同比 (0 个百分点)'] }, sga: { label: '销售及管理', notes: ['占收入 11%', '同比 (0 个百分点)'] }, amortization: { label: '摊销', notes: ['占收入 6%', '同比 (2 个百分点)'] },
        },
        layout: {
          labels: {
            rnd: { blocks: [{ x: 2381, top: 884, anchor: 'start', lineGap: 8, lines: [{ text: '研发 ($0.5B)', size: 31, weight: 800 }, { text: '占收入 15%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            sga: { blocks: [{ x: 2372, top: 1070, anchor: 'start', lineGap: 8, lines: [{ text: '销售及管理 ($0.3B)', size: 31, weight: 800 }, { text: '占收入 11%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            amortization: { blocks: [{ x: 2335, top: 1244, anchor: 'start', lineGap: 8, lines: [{ text: '摊销 ($0.2B)', size: 31, weight: 800 }, { text: '占收入 6%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();

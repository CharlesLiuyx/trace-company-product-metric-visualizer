/* ASML Q1 FY23 income statement (€B), reconstructed as fixed d3/SVG. */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const LOGIC = '#0096ff';
  const LOGIC_LINK = '#85c9f7';
  const MEMORY = '#00d100';
  const MEMORY_LINK = '#85e285';
  const INSTALLED = '#fcd12a';
  const INSTALLED_LABEL = '#ffa400';
  const INSTALLED_LINK = '#f6e298';
  const PROFIT_GREEN = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const annotations = `
    <g data-typography-role="brand">
      <text x="892" y="417" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="447" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q1-fy23',
    name: 'ASML · Q1 FY23',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Apr. 2023',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1332,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2067,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: PROFIT_GREEN, label: PROFIT_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: LOGIC_LINK, hub: PROFIT_LINK, profit: PROFIT_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 66.8,
      nodes: {
        logic: { x: 389, y: 449, width: 71, height: 249 },
        memory: { x: 389, y: 928, width: 71, height: 105 },
        installed_base_management: { x: 389, y: 1242, width: 71, height: 93 },
        revenue: { x: 854, y: 646, width: 70, height: 451 },
        gross_profit: { x: 1323, y: 568, width: 71, height: 228 },
        cost_of_sales: { x: 1325, y: 965, width: 72, height: 221 },
        operating_profit: { x: 1791, y: 480, width: 70, height: 147 },
        operating_expenses: { x: 1793, y: 843, width: 70, height: 79 },
        other_gains: { x: 2103, y: 608, width: 70, height: 1 },
        net_profit: { x: 2257, y: 373, width: 71, height: 130 },
        tax: { x: 2257, y: 783, width: 71, height: 19 },
        rnd: { x: 2257, y: 1008, width: 71, height: 62 },
        sga: { x: 2257, y: 1246, width: 71, height: 15 },
      },
      labels: {
        logic: { blocks: [
          { x: 425, top: 357, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 39, weight: 400, color: LOGIC },
            { text: '+227% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 340, top: 549, anchor: 'end', semanticRole: 'name', lines: [{ text: 'Logic', size: 40, weight: 800, color: LOGIC }] },
        ] },
        memory: { blocks: [
          { x: 425, top: 832, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 39, weight: 400, color: MEMORY },
            { text: '+40% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 340, top: 960, anchor: 'end', semanticRole: 'name', lines: [{ text: 'Memory', size: 40, weight: 800, color: MEMORY }] },
        ] },
        installed_base_management: { blocks: [
          { x: 425, top: 1151, anchor: 'middle', lineGap: 10, lines: [
            { text: '$value', size: 39, weight: 400, color: INSTALLED_LABEL },
            { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
          ] },
          { x: 340, top: 1242, anchor: 'end', lineGap: 10, semanticRole: 'name', lines: [
            { text: 'Installed base', size: 39, weight: 800, color: INSTALLED_LABEL },
            { text: 'management', size: 39, weight: 800, color: INSTALLED_LABEL },
          ] },
        ] },
        revenue: { blocks: [{ x: 867, top: 499, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Net sales', size: 42, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+91% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1378, top: 385, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Gross profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '51% margin', size: 29, weight: 400, color: NOTE },
          { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        cost_of_sales: { blocks: [{ x: 1361, top: 1207, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Cost of', size: 38, weight: 800 },
          { text: 'sales', size: 38, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1839, top: 296, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Operating profit', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '33% margin', size: 29, weight: 400, color: NOTE },
          { text: '+10pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1828, top: 945, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'expenses', size: 38, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
        ] }] },
        other_gains: { blocks: [{ x: 2138, top: 625, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other gains', size: 31, weight: 800, color: PROFIT_LABEL },
          { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2349, top: 372, anchor: 'start', lineGap: 10, lines: [
          { text: 'Net profit', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '29% margin', size: 29, weight: 400, color: NOTE },
          { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE },
          { text: 'EPS €4.96', size: 29, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2429, top: 760, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2429, top: 1008, anchor: 'middle', lineGap: 8, lines: [
          { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        sga: { blocks: [{ x: 2429, top: 1220, anchor: 'middle', lineGap: 8, lines: [
          { text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
      },
    },

    nodes: [
      { id: 'logic', col: 0, order: 0, type: 'source', label: 'Logic', value: 3.7, notes: ['+227% Y/Y'], color: LOGIC, labelColor: LOGIC, linkTint: LOGIC_LINK },
      { id: 'memory', col: 0, order: 1, type: 'source', label: 'Memory', value: 1.6, notes: ['+40% Y/Y'], color: MEMORY, labelColor: MEMORY, linkTint: MEMORY_LINK },
      { id: 'installed_base_management', col: 0, order: 2, type: 'source', label: ['Installed base', 'management'], value: 1.4, notes: ['+13% Y/Y'], color: INSTALLED, labelColor: INSTALLED_LABEL, linkTint: INSTALLED_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 6.7, notes: ['+91% Y/Y'], color: NAVY, labelColor: NAVY },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.4, notes: ['51% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 3.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['33% margin', '+10pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.2 },
      { id: 'other_gains', col: 4, order: 0, type: 'profit', label: 'Other gains', value: 0.1 },
      { id: 'net_profit', col: 4, order: 1, type: 'profit', label: 'Net profit', value: 2.0, valueText: '€2.0B', notes: ['29% margin', '+9pp Y/Y', 'EPS €4.96'] },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.9 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.3 },
    ],

    links: [
      { source: 'logic', target: 'revenue', value: 3.7, sourceWidth: 249, targetWidth: 248, targetOrder: 0, linkTint: { left: LOGIC_LINK, right: LOGIC_LINK } },
      { source: 'memory', target: 'revenue', value: 1.6, sourceWidth: 105, targetWidth: 105, targetOrder: 1, linkTint: { left: MEMORY_LINK, right: MEMORY_LINK } },
      { source: 'installed_base_management', target: 'revenue', value: 1.4, sourceWidth: 93, targetWidth: 98, targetOrder: 2, linkTint: { left: INSTALLED_LINK, right: INSTALLED_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.4, sourceWidth: 228, targetWidth: 228, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 3.3, sourceWidth: 223, targetWidth: 221, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, sourceWidth: 147, targetWidth: 147, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.2, sourceWidth: 81, targetWidth: 79, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.0, sourceWidth: 128, targetWidth: 129, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 19, targetWidth: 19, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_gains', target: 'net_profit', value: 0.1, width: 1, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 63, targetWidth: 62, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 16, targetWidth: 15, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2023 财年第一季度',
        meta: { title: 'ASML 2023 财年第一季度利润表', period: '2023 财年第一季度', periodNote: '截至 2023 年 4 月' },
        nodes: {
          logic: { label: '逻辑芯片', notes: ['同比 +227%'] },
          memory: { label: '存储芯片', notes: ['同比 +40%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +13%'] },
          revenue: { label: '净销售额', notes: ['同比 +91%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +10 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_gains: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +9 个百分点', '每股收益 €4.96'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: { labels: {
          logic: { blocks: [
            { x: 425, top: 357, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: LOGIC },
              { text: '同比 +227%', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 340, top: 549, anchor: 'end', semanticRole: 'name', lines: [{ text: '逻辑芯片', size: 40, weight: 800, color: LOGIC }] },
          ] },
          memory: { blocks: [
            { x: 425, top: 832, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: MEMORY },
              { text: '同比 +40%', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 340, top: 960, anchor: 'end', semanticRole: 'name', lines: [{ text: '存储芯片', size: 40, weight: 800, color: MEMORY }] },
          ] },
          net_profit: { blocks: [{ x: 2349, top: 372, anchor: 'start', lineGap: 10, lines: [
            { text: '净利润', size: 39, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '利润率 29%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +9 个百分点', size: 29, weight: 400, color: NOTE },
            { text: '每股收益 €4.96', size: 29, weight: 400, color: NOTE },
          ] }] },
          other_gains: { blocks: [{ x: 2138, top: 625, anchor: 'middle', lineGap: 8, lines: [
            { text: '其他收益', size: 31, weight: 800, color: PROFIT_LABEL },
            { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
          ] }] },
          sga: { blocks: [{ x: 2458, top: 1220, anchor: 'middle', lineGap: 8, lines: [
            { text: '销售、一般及行政', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
          ] }] },
        } },
      },
    },
  });
})();

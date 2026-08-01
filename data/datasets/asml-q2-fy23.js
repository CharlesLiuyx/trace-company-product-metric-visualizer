/* ASML · Q2 FY23 income statement (€B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const NAVY = '#0f238c';
  const BLUE = '#0096ff';
  const BLUE_LINK = '#85c9f7';
  const MEMORY = '#00d100';
  const MEMORY_LINK = '#85e285';
  const YELLOW = '#fcd12a';
  const YELLOW_LABEL = '#ffa400';
  const YELLOW_LINK = '#f6e298';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const name = (text, size = 40, color) => ({ text, size, weight: 800, ...(color ? { color } : {}) });
  const value = (size = 39, color) => ({ text: '$value', size, weight: 400, ...(color ? { color } : {}) });
  const note = (text, size = 29) => ({ text, size, weight: 400, color: NOTE });
  const block = (x, top, lines, options = {}) => ({
    blocks: [{ x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 10, lines }],
  });

  const otherGainsGuide = (localized) => `
    <g font-family="Noto Sans,Arial,sans-serif" class="sankey-interactive-annotation" data-node="other_gains">
      <line x1="2096" y1="612" x2="2170" y2="612" stroke="${GREEN}" stroke-width="2"/>
      <text x="2138" y="654" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${localized ? '其他收益' : 'Other gains'}</text>
      <text x="2138" y="696" text-anchor="middle" font-size="30" font-weight="400" fill="${GREEN_LABEL}">€0.1B</text>
    </g>`;

  const annotations = (localized) => `
    <g font-family="Arial Black,Arial,sans-serif" data-typography-role="brand">
      <text x="892" y="414" text-anchor="middle" font-size="162" font-weight="900" textLength="444" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>
    ${otherGainsGuide(localized)}`;

  const labels = (localized) => {
    const t = localized ? {
      logic: '逻辑', memory: '存储', installed: ['装机基础', '管理'], revenue: '净销售额',
      gross: '毛利润', cost: ['销售', '成本'], operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'],
      net: '净利润', tax: '税费', rnd: '研发', sga: '销售、一般及行政',
      logicNote: '同比 +56%', memoryNote: '同比 +5%', installedNote: '同比 +0%', revenueNote: '同比 +27%',
      grossNotes: ['利润率 51%', '同比 +2 个百分点'], operatingNotes: ['利润率 33%', '同比 +2 个百分点'],
      netNotes: ['利润率 28%', '同比 +2 个百分点', '每股收益 €4.93'],
    } : {
      logic: 'Logic', memory: 'Memory', installed: ['Installed base', 'management'], revenue: 'Net sales',
      gross: 'Gross profit', cost: ['Cost of', 'sales'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', rnd: 'R&D', sga: 'SG&A',
      logicNote: '+56% Y/Y', memoryNote: '+5% Y/Y', installedNote: '+0% Y/Y', revenueNote: '+27% Y/Y',
      grossNotes: ['51% margin', '+2pp Y/Y'], operatingNotes: ['33% margin', '+2pp Y/Y'],
      netNotes: ['28% margin', '+2pp Y/Y', 'EPS €4.93'],
    };

    return {
      logic: { blocks: [
        { x: 425, top: 398, anchor: 'middle', lineGap: 10, lines: [value(39, BLUE), note(t.logicNote)] },
        { x: 340, top: 553, anchor: 'end', lines: [name(t.logic, 40, BLUE)] },
      ] },
      memory: { blocks: [
        { x: 425, top: 830, anchor: 'middle', lineGap: 10, lines: [value(39, MEMORY), note(t.memoryNote)] },
        { x: 340, top: 940, anchor: 'end', lines: [name(t.memory, 40, MEMORY)] },
      ] },
      installed_base_management: { blocks: [
        { x: 425, top: 1138, anchor: 'middle', lineGap: 10, lines: [value(39, YELLOW_LABEL), note(t.installedNote)] },
        { x: 340, top: 1207, anchor: 'end', lineGap: 7, lines: [name(t.installed[0], 39, YELLOW_LABEL), name(t.installed[1], 39, YELLOW_LABEL)] },
      ] },
      revenue: block(889, 574, [name(t.revenue, 42), value(), note(t.revenueNote)]),
      gross_profit: block(1361, 434, [name(t.gross, 40, GREEN_LABEL), value(39, GREEN_LABEL), note(t.grossNotes[0]), note(t.grossNotes[1])]),
      cost_of_sales: block(1363, 1137, [name(t.cost[0], 38, RED_LABEL), name(t.cost[1], 38, RED_LABEL), value(36, RED_LABEL)], { lineGap: 9 }),
      operating_profit: block(1821, 356, [name(t.operatingProfit, 39, GREEN_LABEL), value(38, GREEN_LABEL), note(t.operatingNotes[0]), note(t.operatingNotes[1])]),
      operating_expenses: block(1821, 899, [name(t.operatingExpenses[0], 38, RED_LABEL), name(t.operatingExpenses[1], 38, RED_LABEL), value(36, RED_LABEL)], { lineGap: 9 }),
      other_gains: { blocks: [] },
      net_profit: block(2350, 371, [name(t.net, 39, GREEN_LABEL), value(38, GREEN_LABEL), note(t.netNotes[0]), note(t.netNotes[1]), note(t.netNotes[2])], { anchor: 'start' }),
      tax: block(2383, 746, [name(t.tax, 31, RED_LABEL), value(30, RED_LABEL)], { anchor: 'start', lineGap: 8 }),
      rnd: block(2383, 948, [name(t.rnd, 31, RED_LABEL), value(30, RED_LABEL)], { anchor: 'start', lineGap: 8 }),
      sga: block(2383, 1108, [name(t.sga, localized ? 27 : 31, RED_LABEL), value(30, RED_LABEL)], { anchor: 'start', lineGap: 8 }),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q2-fy23',
    name: 'ASML · Q2 FY23',
    company: 'ASML',
    meta: {
      company: 'ASML', title: 'ASML Q2 FY23 Income Statement', period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023', currency: '€', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/asml-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2066,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' }, linkOpacity: 1,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 43.8,
      routes: { other_gains: { x: 2170, y: 612, width: 0, height: 1 } },
      nodes: {
        logic: { x: 389, y: 492, width: 71, height: 171 },
        memory: { x: 389, y: 926, width: 71, height: 76 },
        installed_base_management: { x: 389, y: 1229, width: 71, height: 57 },
        revenue: { x: 854, y: 717, width: 72, height: 309 },
        gross_profit: { x: 1325, y: 618, width: 72, height: 158 },
        cost_of_sales: { x: 1328, y: 969, width: 71, height: 149 },
        operating_profit: { x: 1786, y: 537, width: 70, height: 100 },
        operating_expenses: { x: 1786, y: 826, width: 70, height: 55 },
        net_profit: { x: 2257, y: 418, width: 71, height: 85 },
        tax: { x: 2257, y: 768, width: 71, height: 16 },
        rnd: { x: 2257, y: 956, width: 71, height: 42 },
        sga: { x: 2257, y: 1131, width: 71, height: 11 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [{ id: 'other_gains', representation: 'flow', label: 'Other gains', value: 0.1, type: 'profit', labelColor: GREEN_LABEL }],
    nodes: [
      { id: 'logic', col: 0, order: 0, type: 'source', label: 'Logic', value: 3.9, notes: ['+56% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'memory', col: 0, order: 1, type: 'source', label: 'Memory', value: 1.7, notes: ['+5% Y/Y'], color: MEMORY, labelColor: MEMORY, linkTint: MEMORY_LINK },
      { id: 'installed_base_management', col: 0, order: 2, type: 'source', label: ['Installed base', 'management'], value: 1.3, notes: ['+0% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 6.9, notes: ['+27% Y/Y'], color: NAVY, labelColor: NAVY },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.5, notes: ['51% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 3.4 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.3, notes: ['33% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['28% margin', '+2pp Y/Y', 'EPS €4.93'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.0, valueText: '(€1.0B)' },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.3 },
    ],
    links: [
      { source: 'logic', target: 'revenue', value: 3.9, sourceWidth: 171, targetWidth: 171, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'memory', target: 'revenue', value: 1.7, sourceWidth: 76, targetWidth: 76, targetOrder: 1, linkTint: MEMORY_LINK },
      { source: 'installed_base_management', target: 'revenue', value: 1.3, sourceWidth: 57, targetWidth: 62, targetOrder: 2, linkTint: YELLOW_LINK },
      { source: 'revenue', target: 'gross_profit', value: 3.5, sourceWidth: 157, targetWidth: 158, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.4, sourceWidth: 152, targetWidth: 149, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceWidth: 100, targetWidth: 100, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.3, sourceWidth: 58, targetWidth: 55, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 82, targetWidth: 85, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 18, targetWidth: 16, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'other_gains', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 4, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 42, targetWidth: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 13, targetWidth: 11, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'ASML · 2023 财年第二季度',
        meta: { title: 'ASML 2023 财年第二季度利润表', period: '2023 财年第二季度', periodNote: '截至 2023 年 6 月' },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_gains: { label: '其他收益' } },
        nodes: {
          logic: { label: '逻辑', notes: ['同比 +56%'] }, memory: { label: '存储', notes: ['同比 +5%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +0%'] }, revenue: { label: '净销售额', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +2 个百分点'] }, cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +2 个百分点'] }, operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +2 个百分点', '每股收益 €4.93'] }, tax: { label: '税费' },
          rnd: { label: '研发' }, sga: { label: '销售、一般及行政' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

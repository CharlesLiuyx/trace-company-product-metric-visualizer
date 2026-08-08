/* Lam Research Q4 FY26 income statement ($B), measured from the native
 * 2667x1500 Source. Financial values live in data/income-statements/lam-research.js. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE = '#20a785';
  const SOURCE_LABEL = '#20a785';
  const SOURCE_LINK = '#93cfc1';
  const HUB = '#242437';
  const HUB_LINK = '#95959d';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const FOUNDRY = '#f2c22e';
  const LOGIC = '#e89945';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2425;

  const lamResearchLogo = `
    <g fill="#000000">
      <path d="M0 208 112 0l112 208H0Z"/>
      <path d="m56 104 117 104h-31L42 119l85 89H97L29 138l57 70H57L14 161l29 47H0l31-58Z" fill="#f2f2f2"/>
      <text x="245" y="141" font-family="Georgia,Times New Roman,serif" font-size="165" letter-spacing="-14">Lam</text>
      <text x="253" y="205" font-family="Georgia,Times New Roman,serif" font-size="56" letter-spacing="4">RESEARCH</text>
      <text x="552" y="79" font-family="Arial,sans-serif" font-size="31">®</text>
    </g>`;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight ?? 400,
    ...(options.color ? { color: options.color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap ?? 10,
    lines,
  });

  const labels = (zh) => {
    const t = zh ? {
      memory: '存储', foundry: '代工', logic: '逻辑', systems: '系统', customer: ['客户', '支持'],
      revenue: '收入', gross: '毛利润', cogs: ['销售', '成本'], operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'], net: '净利润', tax: '税费', rnd: '研发', sga: '销售、一般及管理',
      y39: '同比 +39%', y5: '同比 +5%', y77: '同比 +77%', y24: '同比 +24%', y43: '同比 +43%', y30: '同比 +30%',
      margin52: '利润率 52%', margin37: '利润率 37%', margin34: '利润率 34%',
      pp2: '同比 +2 个百分点', pp4: '同比 +4 个百分点', pp1: '同比 +1 个百分点',
      rev10: '占收入 10%', rev5: '占收入 5%', ppn2: '同比 (2 个百分点)', ppn0: '同比 (0 个百分点)',
    } : {
      memory: 'Memory', foundry: 'Foundry', logic: 'Logic', systems: 'Systems', customer: ['Customer', 'Support'],
      revenue: 'Revenue', gross: 'Gross profit', cogs: ['Cost of', 'goods sold'], operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'Expenses'], net: 'Net profit', tax: 'Tax', rnd: 'R&D', sga: 'SG&A',
      y39: '+39% Y/Y', y5: '+5% Y/Y', y77: '+77% Y/Y', y24: '+24% Y/Y', y43: '+43% Y/Y', y30: '+30% Y/Y',
      margin52: '52% margin', margin37: '37% margin', margin34: '34% margin',
      pp2: '+2pp Y/Y', pp4: '+4pp Y/Y', pp1: '+1pp Y/Y',
      rev10: '10% of revenue', rev5: '5% of revenue', ppn2: '(2pp) Y/Y', ppn0: '(0pp) Y/Y',
    };
    const valueNote = (x, top, note, color) => block(x, top, [line('$value', 39, { color }), line(note, 29, { color: NOTE })]);
    const namedValue = (x, top, name, note, color = HUB) => block(x, top, [
      line(name, 40, { weight: 800, color }), line('$value', 39, { color }), line(note, 29, { color: NOTE }),
    ]);
    const profitLabel = (x, top, name, margin, pp) => block(x, top, [
      line(name, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }),
      line(margin, 29, { color: NOTE }), line(pp, 29, { color: NOTE }),
    ]);
    return {
      memory: { blocks: [valueNote(384, 392, t.y39, SOURCE_LABEL), block(313, 514, [line(t.memory, 40, { weight: 800, color: SOURCE_LABEL })], { anchor: 'end' })] },
      foundry: { blocks: [valueNote(380, 649, t.y5, FOUNDRY), block(304, 770, [line(t.foundry, 40, { weight: 800, color: FOUNDRY })], { anchor: 'end' })] },
      logic: { blocks: [valueNote(380, 885, t.y77, LOGIC), block(280, 968, [line(t.logic, 40, { weight: 800, color: LOGIC })], { anchor: 'end' })] },
      systems: { blocks: [namedValue(753, 479, t.systems, t.y24)] },
      customer_support: { blocks: [valueNote(753, 961, t.y43, HUB), block(680, 1076, t.customer.map((v) => line(v, 40, { weight: 800, color: HUB })), { anchor: 'end' })] },
      revenue: { blocks: [namedValue(1127, 594, t.revenue, t.y30)] },
      gross_profit: { blocks: [profitLabel(1500, 442, t.gross, t.margin52, t.pp2)] },
      cost_of_goods_sold: { blocks: [block(1500, 1208, [...t.cogs.map((v) => line(v, 38, { weight: 800, color: RED_LABEL })), line('$value', 37, { color: RED_LABEL })], { lineGap: 9 })] },
      operating_profit: { blocks: [profitLabel(1874, 358, t.operatingProfit, t.margin37, t.pp4)] },
      operating_expenses: { blocks: [block(1874, 964, [...t.operatingExpenses.map((v) => line(v, 38, { weight: 800, color: RED_LABEL })), line('$value', 37, { color: RED_LABEL })], { lineGap: 9 })] },
      net_profit: { blocks: [profitLabel(RIGHT_LABEL_X, 432, t.net, t.margin34, t.pp1)] },
      interest: { blocks: [] },
      tax: { blocks: [block(RIGHT_LABEL_X, 808, [line(t.tax, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 8 })] },
      rnd: { blocks: [block(RIGHT_LABEL_X, 1019, [line(t.rnd, 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(t.rev10, 29, { color: NOTE }), line(t.ppn2, 29, { color: NOTE })])] },
      sga: { blocks: [block(RIGHT_LABEL_X, 1226, [line(t.sga, zh ? 29 : 31, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line(t.rev5, 29, { color: NOTE }), line(t.ppn0, 29, { color: NOTE })])] },
    };
  };

  const interestAnnotation = (zh) => `
    <g class="sankey-interactive-annotation" data-node="interest" data-link-numerator="interest" data-link-denominator="net_profit" data-link-anchor-x="2140" data-link-anchor-y="650">
      <path d="M2097 650H2167C2195 650 2188 566 2212 566" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2140" y="700" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '利息收入' : 'Interest'}</text>
      <text x="2140" y="742" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$42M</text>
      <rect x="2070" y="638" width="160" height="120" fill="transparent" pointer-events="all"/>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lam-research-q4-fy26',
    name: 'Lam Research · Q4 FY26',
    company: 'Lam Research',
    meta: {
      company: 'Lam Research',
      title: 'LAM Research Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lam-research-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 194, titleSize: 126, titleWeight: 800, titleTextLength: 2520,
      periodX: 2414, periodY: 286, periodNoteY: 327,
      logoWidth: 650, logoHeight: 250, logoY: 283, logoViewBox: '0 0 650 230', logoSvg: lamResearchLogo,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: SOURCE, label: SOURCE_LABEL }, hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: HUB_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: interestAnnotation(false),
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.042, valueText: '$42M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 55,
      routes: { interest: { x: 2097, y: 650, width: 0, height: 1 } },
      nodes: {
        memory: { x: 344, y: 484, width: 71, height: 108 }, foundry: { x: 344, y: 739, width: 71, height: 104 },
        logic: { x: 344, y: 978, width: 71, height: 22 }, systems: { x: 718, y: 625, width: 70, height: 238 },
        customer_support: { x: 718, y: 1057, width: 70, height: 137 }, revenue: { x: 1092, y: 740, width: 70, height: 378 },
        gross_profit: { x: 1465, y: 625, width: 71, height: 195 }, cost_of_goods_sold: { x: 1465, y: 1013, width: 71, height: 181 },
        operating_profit: { x: 1839, y: 541, width: 71, height: 140 }, operating_expenses: { x: 1839, y: 893, width: 71, height: 52 },
        net_profit: { x: 2212, y: 440, width: 71, height: 127 }, tax: { x: 2212, y: 838, width: 71, height: 13 },
        rnd: { x: 2212, y: 1043, width: 71, height: 34 }, sga: { x: 2212, y: 1262, width: 71, height: 16 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'memory', col: 0, order: 0, type: 'source', label: 'Memory', value: 2.0, valueText: '$2.0B', notes: ['+39% Y/Y'], color: SOURCE, labelColor: SOURCE_LABEL, linkTint: SOURCE_LINK },
      { id: 'foundry', col: 0, order: 1, type: 'source', label: 'Foundry', value: 1.9, notes: ['+5% Y/Y'], color: FOUNDRY, labelColor: FOUNDRY, linkTint: '#f2db9a' },
      { id: 'logic', col: 0, order: 2, type: 'source', label: 'Logic', value: 0.4, notes: ['+77% Y/Y'], color: LOGIC, labelColor: LOGIC, linkTint: '#edcaa4' },
      { id: 'systems', col: 1, order: 0, type: 'source', label: 'Systems', value: 4.3, notes: ['+24% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'customer_support', col: 1, order: 1, type: 'source', label: ['Customer', 'Support'], value: 2.5, notes: ['+43% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 6.7, notes: ['+30% Y/Y'], color: HUB, labelColor: HUB, linkTint: HUB_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.5, notes: ['52% margin', '+2pp Y/Y'] },
      { id: 'cost_of_goods_sold', col: 3, order: 1, type: 'cost', label: ['Cost of', 'goods sold'], value: 3.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, notes: ['37% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.0, valueText: '($1.0B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.3, notes: ['34% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.6, notes: ['10% of revenue', '(2pp) Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.3, notes: ['5% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'memory', target: 'systems', value: 2.0, sourceWidth: 108, targetWidth: 111, sourceOrder: 0, targetOrder: 0 },
      { source: 'foundry', target: 'systems', value: 1.9, sourceWidth: 104, targetWidth: 105, sourceOrder: 0, targetOrder: 1 },
      { source: 'logic', target: 'systems', value: 0.4, sourceWidth: 22, targetWidth: 22, sourceOrder: 0, targetOrder: 2 },
      { source: 'systems', target: 'revenue', value: 4.3, sourceWidth: 238, targetWidth: 239, sourceOrder: 0, targetOrder: 0 },
      { source: 'customer_support', target: 'revenue', value: 2.5, sourceWidth: 137, targetWidth: 139, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 3.5, sourceWidth: 197, targetWidth: 195, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_goods_sold', value: 3.2, sourceWidth: 181, targetWidth: 181, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 143, targetWidth: 140, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.0, sourceWidth: 52, targetWidth: 52, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 127, targetWidth: 126, sourceOrder: 0, targetOrder: 0 },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.042, sourceWidth: 1, targetWidth: 1, y0: 650, y1: 566.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2097, c1x: 2167, c1y: 650, c2x: 2188, c2y: 566.5 } },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 13, targetWidth: 13, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.6, sourceWidth: 36, targetWidth: 34, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 16, targetWidth: 16, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '泛林集团 · 2026 财年第四季度',
        meta: { title: '泛林集团 2026 财年第四季度利润表', period: '2026 财年第四季度', periodNote: '截至 2026 年 6 月', titleTextLength: 1940 },
        annotationsSvg: interestAnnotation(true),
        nonNodeMetrics: { interest: { label: '利息收入' } },
        nodes: {
          memory: { label: '存储', notes: ['同比 +39%'] }, foundry: { label: '代工', notes: ['同比 +5%'] }, logic: { label: '逻辑', notes: ['同比 +77%'] },
          systems: { label: '系统', notes: ['同比 +24%'] }, customer_support: { label: ['客户', '支持'], notes: ['同比 +43%'] }, revenue: { label: '收入', notes: ['同比 +30%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] }, cost_of_goods_sold: { label: ['销售', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 37%', '同比 +4 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +1 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 (2 个百分点)'] }, sga: { label: '销售、一般及管理', notes: ['占收入 5%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

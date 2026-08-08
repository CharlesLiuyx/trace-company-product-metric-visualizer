/* Ford Q2 FY26 income statement ($B), reconstructed from the Source as a
 * fixed, SVG-only d3-sankey layout. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const NAVY = '#00095b';
  const NAVY_LINK = '#8589ae';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BLUE = '#066fef';
  const BLUE_LINK = '#88b7f0';
  const MODEL_E = '#00085b';
  const MODEL_E_LINK = '#8589ae';
  const PRO = '#00142e';
  const PRO_LINK = '#858e9a';
  const CREDIT = '#1700f3';
  const CREDIT_LINK = '#8f85f2';

  const line = (text, size, options = {}) => ({ text, size, ...options });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: 'middle',
    lineGap: 8,
    lines,
    ...options,
  });

  const fordLogo = `
    <g transform="translate(788 233)" data-typography-role="brand">
      <ellipse cx="265" cy="100" rx="264" ry="95" fill="#00095b"/>
      <ellipse cx="265" cy="100" rx="250" ry="82" fill="none" stroke="#ffffff" stroke-width="8"/>
      <text x="265" y="135" text-anchor="middle" font-family="Georgia,serif" font-size="135" font-style="italic" font-weight="700" fill="#ffffff">Ford</text>
    </g>`;

  const divisionCard = (x, y, width, height, fill, name, description = '') => `
    <g>
      <g data-typography-role="brand" font-family="Montserrat,Arial,sans-serif">
        <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="7" fill="${fill}"/>
        <path d="M${x + width - 108} ${y + 15}h70M${x + width - 116} ${y + 35}h78M${x + width - 123} ${y + 55}h84M${x + width - 130} ${y + 75}h91" stroke="#79a2d6" stroke-width="5" stroke-linecap="round" opacity=".24"/>
        <text x="${x + 22}" y="${y + 43}" fill="#ffffff" font-size="28" font-weight="500">Ford</text>
        <text x="${x + 21}" y="${y + 98}" fill="#ffffff" font-size="51" font-weight="400">${name}</text>
      </g>
      ${description ? `<text x="${x + width / 2}" y="${y + height + 33}" text-anchor="middle" fill="${NOTE}" font-size="30" font-weight="400">${description}</text>` : ''}
    </g>`;

  const annotations = `
    <g>
      ${fordLogo}
      ${divisionCard(87, 480, 274, 122, BLUE, 'Blue', 'Internal combustion')}
      ${divisionCard(84, 713, 273, 123, NAVY, 'Model e', 'Electric Vehicles')}
      ${divisionCard(80, 924, 273, 122, PRO, 'Pro', 'Commercial division')}
      ${divisionCard(79, 1151, 277, 124, CREDIT, 'Credit')}
    </g>`;

  const annotationsZh = `
    <g>
      ${fordLogo}
      ${divisionCard(87, 480, 274, 122, BLUE, 'Blue', '内燃机业务')}
      ${divisionCard(84, 713, 273, 123, NAVY, 'Model e', '电动汽车')}
      ${divisionCard(80, 924, 273, 122, PRO, 'Pro', '商用车业务')}
      ${divisionCard(79, 1151, 277, 124, CREDIT, 'Credit')}
    </g>`;

  const labels = {
    ford_blue: { blocks: [block(483, 340, [line('$value', 40), line('+1% Y/Y', 29, { color: NOTE })])] },
    model_e: { blocks: [block(488, 706, [line('$value', 40), line('(56%) Y/Y', 29, { color: NOTE })])] },
    ford_pro: { blocks: [block(483, 837, [line('$value', 40), line('(5%) Y/Y', 29, { color: NOTE })])] },
    ford_credit: { blocks: [block(483, 1115, [line('$value', 40), line('+5% Y/Y', 29, { color: NOTE })])] },
    segment_hub: { blocks: [] },
    revenue: {
      blocks: [block(1228, 483, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('(4%) Y/Y', 29, { color: NOTE })])],
    },
    gross_profit: {
      blocks: [block(1603, 340, [
        line('Gross profit', 40, { weight: 800 }),
        line('$value', 40),
        line('13% margin', 29, { color: NOTE }),
        line('+1pp Y/Y', 29, { color: NOTE }),
      ])],
    },
    cost_of_sales: { blocks: [block(1603, 1174, [line('Cost of sales', 34, { weight: 800 }), line('$value', 32)])] },
    operating_profit: {
      blocks: [block(1977, 257, [
        line('Operating profit', 40, { weight: 800 }),
        line('$value', 40),
        line('1% margin', 29, { color: NOTE }),
        line('+0pp Y/Y', 29, { color: NOTE }),
      ])],
    },
    operating_expenses: {
      blocks: [block(1975, 732, [line('Operating', 34, { weight: 800 }), line('Expenses', 34, { weight: 800 }), line('$value', 32)])],
    },
    net_loss: { blocks: [block(2217, 455, [line('Net loss', 40, { weight: 800 }), line('$value', 40)])] },
    other: { blocks: [block(2506, 317, [line('Other', 32, { weight: 800 }), line('$value', 31)])] },
    ford_credit_expenses: {
      blocks: [block(2504, 1074, [line('Ford Credit', 31, { weight: 800 }), line('expenses', 31, { weight: 800 }), line('$value', 31)])],
    },
    sga: { blocks: [block(2504, 882, [line('SG&A', 31, { weight: 800 }), line('$value', 31)])] },
  };

  const zhLabels = {
    ford_blue: { blocks: [block(483, 340, [line('$value', 40), line('同比 +1%', 29, { color: NOTE })])] },
    model_e: { blocks: [block(488, 706, [line('$value', 40), line('同比 (56%)', 29, { color: NOTE })])] },
    ford_pro: { blocks: [block(483, 837, [line('$value', 40), line('同比 (5%)', 29, { color: NOTE })])] },
    ford_credit: { blocks: [block(483, 1115, [line('$value', 40), line('同比 +5%', 29, { color: NOTE })])] },
    segment_hub: { blocks: [] },
    revenue: { blocks: [block(1228, 483, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 (4%)', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1603, 340, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 13%', 29, { color: NOTE }), line('同比 +1 个百分点', 27, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1603, 1174, [line('销售成本', 34, { weight: 800 }), line('$value', 32)])] },
    operating_profit: { blocks: [block(1977, 257, [line('营业利润', 40, { weight: 800 }), line('$value', 40), line('利润率 1%', 29, { color: NOTE }), line('同比 +0 个百分点', 27, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1975, 757, [line('运营费用', 34, { weight: 800 }), line('$value', 32)])] },
    net_loss: { blocks: [block(2217, 455, [line('净亏损', 40, { weight: 800 }), line('$value', 40)])] },
    other: { blocks: [block(2506, 317, [line('其他', 32, { weight: 800 }), line('$value', 31)])] },
    ford_credit_expenses: { blocks: [block(2504, 1074, [line('福特信贷', 31, { weight: 800 }), line('费用', 31, { weight: 800 }), line('$value', 31)])] },
    sga: { blocks: [block(2530, 882, [line('销售、一般及管理费用', 25, { weight: 800 }), line('$value', 31)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ford-q2-fy26',
    name: 'Ford · Q2 FY26',
    company: 'Ford',
    meta: {
      company: 'Ford',
      title: 'Ford Q2 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ford-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2004,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 38, value: 40, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      nodes: {
        ford_blue: { x: 450, y: 432, width: 71, height: 238 },
        model_e: { x: 450, y: 800, width: 71, height: 6 },
        ford_pro: { x: 450, y: 930, width: 71, height: 160 },
        ford_credit: { x: 450, y: 1206, width: 71, height: 29 },
        segment_hub: { x: 824, y: 530, width: 70, height: 440 },
        revenue: { x: 1198, y: 625, width: 70, height: 440 },
        gross_profit: { x: 1571, y: 530, width: 71, height: 53 },
        cost_of_sales: { x: 1571, y: 767, width: 71, height: 384 },
        operating_profit: { x: 1945, y: 438, width: 71, height: 4 },
        operating_expenses: { x: 1945, y: 661, width: 71, height: 47 },
        net_loss: { x: 2181, y: 431, width: 71, height: 10 },
        other: { x: 2318, y: 342, width: 71, height: 15 },
        ford_credit_expenses: { x: 2318, y: 904, width: 71, height: 22 },
        sga: { x: 2318, y: 1119, width: 71, height: 22 },
      },
      labels,
    },
    nodes: [
      { id: 'ford_blue', col: 0, order: 0, type: 'source', label: 'Ford Blue', value: 26.1, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'model_e', col: 0, order: 1, type: 'source', label: 'Ford Model e', value: 1.0, valueText: '$1.0B', notes: ['(56%) Y/Y'], color: MODEL_E, labelColor: MODEL_E, linkTint: MODEL_E_LINK },
      { id: 'ford_pro', col: 0, order: 2, type: 'source', label: 'Ford Pro', value: 17.8, notes: ['(5%) Y/Y'], color: PRO, labelColor: PRO, linkTint: PRO_LINK },
      { id: 'ford_credit', col: 0, order: 3, type: 'source', label: 'Ford Credit', value: 3.4, notes: ['+5% Y/Y'], color: CREDIT, labelColor: CREDIT, linkTint: CREDIT_LINK },
      { id: 'segment_hub', col: 1, order: 0, type: 'hub', label: '', value: 48.3, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 48.3, notes: ['(4%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 6.1, notes: ['13% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 42.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['1% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 5.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_loss', col: 5, order: 0, type: 'cost', label: 'Net loss', value: -1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 0, type: 'cost', label: 'Other', value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ford_credit_expenses', col: 6, order: 1, type: 'cost', label: ['Ford Credit', 'expenses'], value: 2.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 2.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'ford_blue', target: 'segment_hub', value: 26.1, sourceWidth: 238, targetWidth: 238, sourceOrder: 0, targetOrder: 0 },
      { source: 'model_e', target: 'segment_hub', value: 1.0, sourceWidth: 6, targetWidth: 9, sourceOrder: 0, targetOrder: 1 },
      { source: 'ford_pro', target: 'segment_hub', value: 17.8, sourceWidth: 160, targetWidth: 162, sourceOrder: 0, targetOrder: 2 },
      { source: 'ford_credit', target: 'segment_hub', value: 3.4, sourceWidth: 29, targetWidth: 31, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_hub', target: 'revenue', value: 48.3, sourceWidth: 440, targetWidth: 440, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 6.1, sourceWidth: 54, targetWidth: 53, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 42.2, sourceWidth: 386, targetWidth: 384, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.4, sourceWidth: 49, targetWidth: 47, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.6, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 0 },
      { source: 'net_loss', target: 'other', value: 1.3, sourceWidth: 10, targetWidth: 10, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'ford_credit_expenses', value: 2.8, sourceWidth: 23, targetWidth: 22, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2.7, sourceWidth: 24, targetWidth: 22, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Blue', 'Model e', 'Pro', 'Credit'],
      zh: {
        name: '福特 · 2026 财年第二季度',
        meta: { title: '福特 2026 财年第二季度利润表', titleSize: 124, titleTextLength: 1690 },
        annotationsSvg: annotationsZh,
        nodes: {
          ford_blue: { label: 'Ford Blue 燃油车业务', notes: ['同比 +1%'] },
          model_e: { label: 'Ford Model e 电动车业务', notes: ['同比 (56%)'] },
          ford_pro: { label: 'Ford Pro 商用车业务', notes: ['同比 (5%)'] },
          ford_credit: { label: '福特信贷', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 (4%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 13%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_loss: { label: '净亏损' },
          other: { label: '其他' },
          ford_credit_expenses: { label: ['福特信贷', '费用'] },
          sga: { label: '销售、一般及管理费用' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

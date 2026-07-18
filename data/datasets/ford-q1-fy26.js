/* ====================================================================
 * Ford - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/ford-q1-fy26.png as a fixed,
 * SVG-only d3-sankey layout.
 *
 * Topology: Ford Blue + Model e + Ford Pro + Ford Credit -> segment
 * hub -> Revenue + Eliminations; Revenue -> Gross profit + Cost of
 * sales; Gross profit -> Operating profit + Operating expenses;
 * Operating profit + Other -> Net profit + Interest + Tax; Operating
 * expenses -> Ford Credit expenses + SG&A.
 * ==================================================================== */
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
  const MODEL_E = '#00095b';
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
    <g transform="translate(788 280)" data-typography-role="brand">
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
      ${divisionCard(79, 503, 274, 123, BLUE, 'Blue', 'Internal combustion')}
      ${divisionCard(75, 775, 274, 123, MODEL_E, 'Model e', 'Electric Vehicles')}
      ${divisionCard(77, 1003, 272, 122, PRO, 'Pro', 'Commercial division')}
      ${divisionCard(78, 1213, 278, 125, CREDIT, 'Credit')}
    </g>`;

  const annotationsZh = `
    <g>
      ${fordLogo}
      ${divisionCard(79, 503, 274, 123, BLUE, 'Blue', '内燃机业务')}
      ${divisionCard(75, 775, 274, 123, MODEL_E, 'Model e', '电动汽车')}
      ${divisionCard(77, 1003, 272, 122, PRO, 'Pro', '商用车业务')}
      ${divisionCard(78, 1213, 278, 125, CREDIT, 'Credit')}
    </g>`;

  const labels = {
    ford_blue: {
      blocks: [block(485, 357, [line('$value', 40), line('+6% Y/Y', 29, { color: NOTE })])],
    },
    model_e: {
      blocks: [block(485, 768, [line('$value', 40), line('(4%) Y/Y', 29, { color: NOTE })])],
    },
    ford_pro: {
      blocks: [block(485, 913, [line('$value', 40), line('(3%) Y/Y', 29, { color: NOTE })])],
    },
    ford_credit: {
      blocks: [block(485, 1173, [line('$value', 40), line('+6% Y/Y', 29, { color: NOTE })])],
    },
    segment_hub: { blocks: [] },
    revenue: {
      blocks: [
        block(1233, 528, [
          line('Revenue', 40, { weight: 800 }),
          line('$value', 40),
          line('+6% Y/Y', 29, { color: NOTE }),
        ]),
      ],
    },
    eliminations: {
      blocks: [
        block(1233, 1243, [
          line('Eliminations', 33, { weight: 800 }),
          line('$value', 32),
        ]),
      ],
    },
    gross_profit: {
      blocks: [
        block(1609, 382, [
          line('Gross profit', 40, { weight: 800 }),
          line('$value', 40),
          line('18% margin', 29, { color: NOTE }),
          line('+5pp Y/Y', 29, { color: NOTE }),
        ]),
      ],
    },
    cost_of_sales: {
      blocks: [block(1607, 1136, [line('Cost of sales', 34, { weight: 800 }), line('$value', 32)])],
    },
    operating_profit: {
      blocks: [
        block(1983, 268, [
          line('Operating profit', 40, { weight: 800 }),
          line('$value', 40),
          line('5% margin', 29, { color: NOTE }),
          line('+5pp Y/Y', 29, { color: NOTE }),
        ]),
      ],
    },
    operating_expenses: {
      blocks: [
        block(1984, 752, [
          line('Operating', 34, { weight: 800 }),
          line('Expenses', 34, { weight: 800 }),
          line('$value', 32),
        ]),
      ],
    },
    other: {
      blocks: [block(2231, 244, [line('Other', 32, { weight: 800 }), line('$value', 31)])],
    },
    net_profit: {
      blocks: [
        block(2498, 287, [
          line('Net profit', 40, { weight: 800 }),
          line('$value', 40),
          line('6% margin', 29, { color: NOTE }),
          line('+5pp Y/Y', 29, { color: NOTE }),
        ]),
      ],
    },
    interest: {
      blocks: [block(2496, 518, [line('Interest', 31, { weight: 800 }), line('$value', 31)])],
    },
    tax: {
      blocks: [block(2497, 642, [line('Tax', 31, { weight: 800 }), line('$value', 31)])],
    },
    ford_credit_expenses: {
      blocks: [
        block(2500, 826, [
          line('Ford Credit', 31, { weight: 800 }),
          line('expenses', 31, { weight: 800 }),
          line('$value', 31),
        ]),
      ],
    },
    sga: {
      blocks: [block(2500, 1039, [line('SG&A', 31, { weight: 800 }), line('$value', 31)])],
    },
  };

  const zhLabels = {
    ford_blue: {
      blocks: [block(485, 357, [line('$value', 40), line('同比 +6%', 29, { color: NOTE })])],
    },
    model_e: {
      blocks: [block(485, 768, [line('$value', 40), line('同比 (4%)', 29, { color: NOTE })])],
    },
    ford_pro: {
      blocks: [block(485, 913, [line('$value', 40), line('同比 (3%)', 29, { color: NOTE })])],
    },
    ford_credit: {
      blocks: [block(485, 1173, [line('$value', 40), line('同比 +6%', 29, { color: NOTE })])],
    },
    segment_hub: { blocks: [] },
    revenue: {
      blocks: [block(1233, 528, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +6%', 29, { color: NOTE })])],
    },
    eliminations: {
      blocks: [block(1233, 1243, [line('抵销项', 33, { weight: 800 }), line('$value', 32)])],
    },
    gross_profit: {
      blocks: [
        block(1609, 382, [
          line('毛利润', 40, { weight: 800 }),
          line('$value', 40),
          line('利润率 18%', 29, { color: NOTE }),
          line('同比 +5 个百分点', 27, { color: NOTE }),
        ]),
      ],
    },
    cost_of_sales: {
      blocks: [block(1607, 1136, [line('销售成本', 34, { weight: 800 }), line('$value', 32)])],
    },
    operating_profit: {
      blocks: [
        block(1983, 268, [
          line('营业利润', 40, { weight: 800 }),
          line('$value', 40),
          line('利润率 5%', 29, { color: NOTE }),
          line('同比 +5 个百分点', 27, { color: NOTE }),
        ]),
      ],
    },
    operating_expenses: {
      blocks: [block(1984, 777, [line('运营费用', 34, { weight: 800 }), line('$value', 32)])],
    },
    other: {
      blocks: [block(2231, 244, [line('其他', 32, { weight: 800 }), line('$value', 31)])],
    },
    net_profit: {
      blocks: [
        block(2498, 287, [
          line('净利润', 40, { weight: 800 }),
          line('$value', 40),
          line('利润率 6%', 29, { color: NOTE }),
          line('同比 +5 个百分点', 27, { color: NOTE }),
        ]),
      ],
    },
    interest: {
      blocks: [block(2496, 518, [line('利息', 31, { weight: 800 }), line('$value', 31)])],
    },
    tax: {
      blocks: [block(2497, 642, [line('税费', 31, { weight: 800 }), line('$value', 31)])],
    },
    ford_credit_expenses: {
      blocks: [block(2500, 826, [line('福特信贷', 31, { weight: 800 }), line('费用', 31, { weight: 800 }), line('$value', 31)])],
    },
    sga: {
      blocks: [block(2530, 1039, [line('销售、一般及管理费用', 25, { weight: 800 }), line('$value', 31)])],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ford-q1-fy26',
    name: 'Ford · Q1 FY26',
    company: 'Ford',
    meta: {
      company: 'Ford',
      title: 'Ford Q1 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ford-q1-fy26.png', width: 2667, height: 1500 },
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
        ford_blue: { x: 450, y: 448, width: 71, height: 277 },
        model_e: { x: 450, y: 856, width: 71, height: 13 },
        ford_pro: { x: 450, y: 1004, width: 71, height: 122 },
        ford_credit: { x: 450, y: 1263, width: 71, height: 26 },
        segment_hub: { x: 824, y: 564, width: 70, height: 443 },
        revenue: { x: 1198, y: 670, width: 70, height: 362 },
        eliminations: { x: 1198, y: 1142, width: 70, height: 79 },
        gross_profit: { x: 1574, y: 563, width: 70, height: 65 },
        cost_of_sales: { x: 1571, y: 817, width: 71, height: 295 },
        operating_profit: { x: 1948, y: 449, width: 70, height: 17 },
        operating_expenses: { x: 1948, y: 681, width: 70, height: 46 },
        other: { x: 2196, y: 330, width: 70, height: 5 },
        net_profit: { x: 2318, y: 339, width: 71, height: 20 },
        interest: { x: 2318, y: 549, width: 71, height: 1 },
        tax: { x: 2318, y: 674, width: 71, height: 1 },
        ford_credit_expenses: { x: 2318, y: 868, width: 71, height: 21 },
        sga: { x: 2318, y: 1062, width: 71, height: 21 },
      },
      labels,
    },
    nodes: [
      { id: 'ford_blue', col: 0, order: 0, type: 'source', label: 'Ford Blue', value: 33.4, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'model_e', col: 0, order: 1, type: 'source', label: 'Ford Model e', value: 1.3, notes: ['(4%) Y/Y'], color: MODEL_E, labelColor: MODEL_E, linkTint: MODEL_E_LINK },
      { id: 'ford_pro', col: 0, order: 2, type: 'source', label: 'Ford Pro', value: 14.7, notes: ['(3%) Y/Y'], color: PRO, labelColor: PRO, linkTint: PRO_LINK },
      { id: 'ford_credit', col: 0, order: 3, type: 'source', label: 'Ford Credit', value: 3.4, notes: ['+6% Y/Y'], color: CREDIT, labelColor: CREDIT, linkTint: CREDIT_LINK },
      { id: 'segment_hub', col: 1, order: 0, type: 'hub', label: '', value: 52.8, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 43.3, notes: ['+6% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -9.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.9, notes: ['18% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 35.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.3, notes: ['5% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 5.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.6, notes: ['6% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 6, order: 1, type: 'cost', label: 'Interest', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ford_credit_expenses', col: 6, order: 3, type: 'cost', label: ['Ford Credit', 'expenses'], value: 2.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 4, type: 'cost', label: 'SG&A', value: 2.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'ford_blue', target: 'segment_hub', value: 33.4, sourceWidth: 277, targetWidth: 280, sourceOrder: 0, targetOrder: 0 },
      { source: 'model_e', target: 'segment_hub', value: 1.3, sourceWidth: 13, targetWidth: 12, sourceOrder: 0, targetOrder: 1 },
      { source: 'ford_pro', target: 'segment_hub', value: 14.7, sourceWidth: 122, targetWidth: 123, sourceOrder: 0, targetOrder: 2 },
      { source: 'ford_credit', target: 'segment_hub', value: 3.4, sourceWidth: 26, targetWidth: 28, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_hub', target: 'revenue', value: 43.3, sourceWidth: 364, targetWidth: 362, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_hub', target: 'eliminations', value: 9.6, sourceWidth: 79, targetWidth: 79, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 7.9, sourceWidth: 65, targetWidth: 65, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 35.3, sourceWidth: 297, targetWidth: 295, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceWidth: 17, targetWidth: 17, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.6, sourceWidth: 48, targetWidth: 46, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 15, targetWidth: 15, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.4, sourceWidth: 1, targetWidth: 1, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.9, sourceWidth: 5, targetWidth: 5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'ford_credit_expenses', value: 2.8, sourceWidth: 23, targetWidth: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2.8, sourceWidth: 23, targetWidth: 21, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Blue', 'Model e', 'Pro', 'Credit'],
      zh: {
        name: '福特 · 2026 财年第一季度',
        meta: { title: '福特 2026 财年第一季度利润表', titleSize: 124, titleTextLength: 1690 },
        annotationsSvg: annotationsZh,
        nodes: {
          ford_blue: { label: 'Ford Blue 燃油车业务', notes: ['同比 +6%'] },
          model_e: { label: 'Ford Model e 电动车业务', notes: ['同比 (4%)'] },
          ford_pro: { label: 'Ford Pro 商用车业务', notes: ['同比 (3%)'] },
          ford_credit: { label: '福特信贷', notes: ['同比 +6%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          eliminations: { label: '抵销项' },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 +5 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +5 个百分点'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          ford_credit_expenses: { label: ['福特信贷', '费用'] },
          sga: { label: '销售、一般及管理费用' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

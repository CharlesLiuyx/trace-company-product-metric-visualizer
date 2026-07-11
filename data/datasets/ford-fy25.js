/* Ford FY25 income statement ($B), reconstructed from the processed source
 * with fixed SVG-only geometry. The source terminates at operating loss. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#16537b';
  const NOTE = '#686868';
  const NAVY = '#09135f';
  const NAVY_LINK = '#8b90b8';
  const GREEN = '#24a52c';
  const GREEN_LABEL = '#00964f';
  const GREEN_LINK = '#9ed798';
  const RED = '#df0000';
  const RED_LABEL = '#a51b00';
  const RED_LINK = '#e28082';
  const BLUE = '#1474e6';
  const BLUE_LINK = '#81afe7';
  const MODEL_E = '#080d61';
  const MODEL_E_LINK = '#878bb9';
  const PRO = '#061a34';
  const PRO_LINK = '#8d99a8';
  const CREDIT = '#2410ed';
  const CREDIT_LINK = '#8479ed';

  const line = (text, size, options = {}) => ({ text, size, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 8, lines, ...options });

  const fordLogo = `
    <g transform="translate(788 280)" data-typography-role="brand">
      <ellipse cx="265" cy="100" rx="264" ry="95" fill="#08116a"/>
      <ellipse cx="265" cy="100" rx="250" ry="82" fill="none" stroke="#ffffff" stroke-width="8"/>
      <text x="265" y="135" text-anchor="middle" font-family="Georgia,serif" font-size="135" font-style="italic" font-weight="700" fill="#ffffff">Ford</text>
    </g>`;

  const divisionCard = (x, y, width, fill, name, description = '') => `
    <g>
      <g data-typography-role="brand" font-family="Montserrat,Arial,sans-serif">
        <rect x="${x}" y="${y}" width="${width}" height="123" rx="7" fill="${fill}"/>
        <path d="M${x + width - 108} ${y + 15}h70M${x + width - 116} ${y + 35}h78M${x + width - 123} ${y + 55}h84M${x + width - 130} ${y + 75}h91" stroke="#79a2d6" stroke-width="5" stroke-linecap="round" opacity=".24"/>
        <text x="${x + 22}" y="${y + 43}" fill="#ffffff" font-size="28" font-weight="500">Ford</text>
        <text x="${x + 21}" y="${y + 98}" fill="#ffffff" font-size="51" font-weight="400">${name}</text>
      </g>
      ${description ? `<text x="${x + width / 2}" y="${y + 156}" text-anchor="middle" fill="${NOTE}" font-size="30" font-weight="400">${description}</text>` : ''}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${fordLogo}
      ${divisionCard(79, 519, 275, BLUE, 'Blue', 'Internal combustion')}
      ${divisionCard(75, 767, 275, MODEL_E, 'Model e', 'Electric Vehicles')}
      ${divisionCard(76, 999, 274, PRO, 'Pro', 'Commercial division')}
      ${divisionCard(79, 1219, 278, CREDIT, 'Credit')}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${fordLogo}
      ${divisionCard(79, 519, 275, BLUE, 'Blue', '内燃机业务')}
      ${divisionCard(75, 767, 275, MODEL_E, 'Model e', '电动汽车')}
      ${divisionCard(76, 999, 274, PRO, 'Pro', '商用车业务')}
      ${divisionCard(79, 1219, 278, CREDIT, 'Credit')}
    </g>`;

  const labels = {
    ford_blue: { blocks: [block(486, 373, [line('$value', 40), line('(1%) Y/Y', 29, { color: NOTE })])] },
    model_e: { blocks: [block(486, 759, [line('$value', 40), line('+73% Y/Y', 29, { color: NOTE })])] },
    ford_pro: { blocks: [block(486, 910, [line('$value', 40), line('(1%) Y/Y', 29, { color: NOTE })])] },
    ford_credit: { blocks: [block(486, 1180, [line('$value', 40), line('+8% Y/Y', 29, { color: NOTE })])] },
    segment_hub: { blocks: [] },
    revenue: { blocks: [block(1234, 515, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+0% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1607, 407, [line('Gross profit', 40, { weight: 800 }), line('$value', 40), line('7% margin', 29, { color: NOTE }), line('(8pp) Y/Y', 29, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1607, 1185, [line('Cost of sales', 40, { weight: 800 }), line('$value', 40)])] },
    operating_loss: { blocks: [block(1818, 822, [line('Operating', 38, { weight: 800 }), line('Loss', 38, { weight: 800 }), line('$value', 38), line('(5%) margin', 29, { color: NOTE }), line('(8pp) Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1980, 507, [line('Operating', 38, { weight: 800 }), line('Expenses', 38, { weight: 800 }), line('$value', 38)])] },
    sga: { blocks: [block(2500, 778, [line('SG&A', 31, { weight: 800 }), line('$value', 31)])] },
    ford_credit_expenses: { blocks: [block(2500, 975, [line('Ford Credit', 31, { weight: 800 }), line('expenses', 31, { weight: 800 }), line('$value', 31)])] },
  };

  const zhLabels = {
    ford_blue: { blocks: [block(486, 373, [line('$value', 40), line('同比 (1%)', 29, { color: NOTE })])] },
    model_e: { blocks: [block(486, 759, [line('$value', 40), line('同比 +73%', 29, { color: NOTE })])] },
    ford_pro: { blocks: [block(486, 910, [line('$value', 40), line('同比 (1%)', 29, { color: NOTE })])] },
    ford_credit: { blocks: [block(486, 1180, [line('$value', 40), line('同比 +8%', 29, { color: NOTE })])] },
    segment_hub: { blocks: [] },
    revenue: { blocks: [block(1234, 515, [line('收入', 40, { weight: 800 }), line('$value', 40), line('同比 +0%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1607, 407, [line('毛利润', 40, { weight: 800 }), line('$value', 40), line('利润率 7%', 29, { color: NOTE }), line('同比 (8 个百分点)', 29, { color: NOTE })])] },
    cost_of_sales: { blocks: [block(1607, 1185, [line('销售成本', 40, { weight: 800 }), line('$value', 40)])] },
    operating_loss: { blocks: [block(1818, 822, [line('营业亏损', 38, { weight: 800 }), line('$value', 38), line('利润率 (5%)', 29, { color: NOTE }), line('同比 (8 个百分点)', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1980, 560, [line('运营费用', 38, { weight: 800 }), line('$value', 38)])] },
    sga: { blocks: [block(2530, 778, [line('销售、一般及管理费用', 26, { weight: 800 }), line('$value', 31)])] },
    ford_credit_expenses: { blocks: [block(2500, 975, [line('福特信贷', 31, { weight: 800 }), line('费用', 31, { weight: 800 }), line('$value', 31)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ford-fy25',
    name: 'Ford · FY25',
    company: 'Ford',
    meta: {
      company: 'Ford',
      title: 'Ford FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ford-fy25.png', width: 2667, height: 1500 },
      titleX: 1350,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1820,
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
        ford_blue: { x: 449, y: 463, width: 72, height: 222 },
        model_e: { x: 449, y: 850, width: 72, height: 15 },
        ford_pro: { x: 449, y: 999, width: 72, height: 146 },
        ford_credit: { x: 449, y: 1268, width: 72, height: 30 },
        segment_hub: { x: 823, y: 577, width: 72, height: 412 },
        revenue: { x: 1197, y: 656, width: 72, height: 412 },
        gross_profit: { x: 1570, y: 585, width: 72, height: 29 },
        cost_of_sales: { x: 1570, y: 780, width: 72, height: 383 },
        operating_loss: { x: 1818, y: 778, width: 72, height: 21 },
        operating_expenses: { x: 1944, y: 661, width: 72, height: 50 },
        sga: { x: 2318, y: 800, width: 72, height: 25 },
        ford_credit_expenses: { x: 2318, y: 1017, width: 72, height: 24 },
      },
      labels,
    },
    nodes: [
      { id: 'ford_blue', col: 0, order: 0, type: 'source', label: 'Ford Blue', value: 101.0, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'model_e', col: 0, order: 1, type: 'source', label: 'Ford Model e', value: 6.7, notes: ['+73% Y/Y'], color: MODEL_E, labelColor: MODEL_E, linkTint: MODEL_E_LINK },
      { id: 'ford_pro', col: 0, order: 2, type: 'source', label: 'Ford Pro', value: 66.3, notes: ['(1%) Y/Y'], color: PRO, labelColor: PRO, linkTint: PRO_LINK },
      { id: 'ford_credit', col: 0, order: 3, type: 'source', label: 'Ford Credit', value: 13.3, notes: ['+8% Y/Y'], color: CREDIT, labelColor: CREDIT, linkTint: CREDIT_LINK },
      { id: 'segment_hub', col: 1, order: 0, type: 'hub', label: '', value: 187.3, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 187.3, notes: ['+0% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.8, notes: ['7% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 174.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 0, type: 'cost', label: ['Operating', 'Loss'], value: -9.2, notes: ['(5%) margin', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'Expenses'], value: 22.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 0, type: 'cost', label: 'SG&A', value: 11.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ford_credit_expenses', col: 6, order: 1, type: 'cost', label: ['Ford Credit', 'expenses'], value: 10.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'ford_blue', target: 'segment_hub', value: 101.0, width: 222, sourceOrder: 0, targetOrder: 0 },
      { source: 'model_e', target: 'segment_hub', value: 6.7, width: 15, sourceOrder: 0, targetOrder: 1 },
      { source: 'ford_pro', target: 'segment_hub', value: 66.3, width: 146, sourceOrder: 0, targetOrder: 2 },
      { source: 'ford_credit', target: 'segment_hub', value: 13.3, sourceWidth: 30, targetWidth: 29, sourceOrder: 0, targetOrder: 3 },
      { source: 'segment_hub', target: 'revenue', value: 187.3, width: 412, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 12.8, width: 29, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 174.5, width: 383, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 12.8, sourceWidth: 29, targetWidth: 29, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 9.2, sourceWidth: 21, targetWidth: 21, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 11.1, width: 25, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ford_credit_expenses', value: 10.8, sourceWidth: 25, targetWidth: 24, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Blue', 'Model e', 'Pro', 'Credit'],
      zh: {
        name: '福特 · 2025 财年',
        meta: { title: '福特 2025 财年利润表', titleSize: 128, titleTextLength: 1575 },
        annotationsSvg: annotationsZh,
        nodes: {
          ford_blue: { label: 'Ford Blue 燃油车业务', notes: ['同比 (1%)'] },
          model_e: { label: 'Ford Model e 电动车业务', notes: ['同比 +73%'] },
          ford_pro: { label: 'Ford Pro 商用车业务', notes: ['同比 (1%)'] },
          ford_credit: { label: '福特信贷', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +0%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 7%', '同比 (8 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (5%)', '同比 (8 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          sga: { label: '销售、一般及管理费用' },
          ford_credit_expenses: { label: ['福特信贷', '费用'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

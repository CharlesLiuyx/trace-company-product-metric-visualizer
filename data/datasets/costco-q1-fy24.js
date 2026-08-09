/* Costco Q1 FY24 income statement ($B), measured from the 2667×1500 Source. */
(function () {
  const BLUE = '#005daa';
  const BLUE_LINK = '#85afd2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight = 400, color) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lines, lineGap });
  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})" data-typography-role="brand">
      ${ICONS[name] || ''}
    </g>`;
  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1250" width="${width}" height="140" rx="24" fill="${BLUE}"/>
      ${lines.map((text, index) => `
        <text x="${x + width / 2}" y="${1314 + index * 41}" text-anchor="middle"
          font-family="Noto Sans,Arial,sans-serif" font-size="28"
          font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${text}</text>
      `).join('')}
    </g>`;
  const interestGuide = (zh) => `
    <g class="sankey-interactive-annotation" data-node="interest"
      data-link-numerator="interest" data-link-denominator="net_profit"
      data-link-anchor-x="2188" data-link-anchor-y="422">
      <path d="M2152 422H2222C2250 422 2245 355 2273 355"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2189" y="467" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif"
        font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '利息' : 'Interest'}</text>
      <text x="2189" y="508" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif"
        font-size="31" font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
    </g>`;
  const annotations = (zh) => `
    <g>
      ${icon('costcoCompanyWordmark', 582, 263, 0.95)}
      ${icon('costcoMembershipCards', 58, 1103, 0.96)}
      ${kpiCard(36, 276, [zh ? '美国可比销售额' : 'US Comp sales', zh ? '同比 +2.6%' : '+2.6% Y/Y'])}
      ${kpiCard(320, 330, [zh ? '公司可比销售额' : 'Company Comp sales', zh ? '同比 +3.8%' : '+3.8% Y/Y'])}
      ${kpiCard(660, 214, [zh ? '电子商务' : 'E-commerce', zh ? '同比 +6.1%' : '+6.1% Y/Y'])}
      ${interestGuide(zh)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q1-fy24',
    name: 'Costco · Q1 FY24',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Nov. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/costco-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 132, titleWeight: 800, titleTextLength: 2165,
      periodX: 2470, periodY: 1272, periodNoteY: 1318,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 8.46,
      routes: { interest: { x: 2152, y: 422, width: 0, height: 2 } },
      nodes: {
        net_sales: { x: 405, y: 528, width: 71, height: 480 },
        membership_fee: { x: 405, y: 1171, width: 71, height: 7 },
        revenue: { x: 872, y: 641, width: 70, height: 490 },
        gross_profit: { x: 1336, y: 529, width: 72, height: 61 },
        merchandise_costs: { x: 1336, y: 785, width: 72, height: 427 },
        operating_profit: { x: 1797, y: 454, width: 70, height: 15 },
        operating_expenses: { x: 1799, y: 690, width: 70, height: 44 },
        net_profit: { x: 2273, y: 344, width: 71, height: 11 },
        tax: { x: 2273, y: 594, width: 71, height: 2 },
      },
      labels: {
        interest: { blocks: [] },
        net_sales: { blocks: [
          block(440, 429, 'middle', [line('$value', 39, 400, BLUE), line('+6% Y/Y', 28, 400, NOTE)], 9),
          { ...block(207, 730, 'middle', [line('Net Sales', 40, 800, BLUE)]), semanticRole: 'reference-offset-side-label' },
        ] },
        membership_fee: { blocks: [
          block(207, 1037, 'middle', [line('Membership Fee', 40, 800, BLUE)]),
          block(440, 1072, 'middle', [line('$value', 39, 400, '#005ead'), line('+8% Y/Y', 28, 400, NOTE)], 9),
        ] },
        revenue: { blocks: [block(907, 496, 'middle', [
          line('Revenue', 40, 800, BLUE), line('$value', 39, 400, BLUE), line('+6% Y/Y', 28, 400, NOTE),
        ], 9)] },
        gross_profit: { blocks: [block(1372, 349, 'middle', [
          line('Gross profit', 40, 800), line('$value', 39),
          line('13% margin', 28, 400, NOTE), line('+0.5pp Y/Y', 28, 400, NOTE),
        ])] },
        merchandise_costs: { blocks: [block(1372, 1235, 'middle', [
          line('Merchandise', 35, 800), line('costs', 35, 800), line('$value', 35),
        ])] },
        operating_profit: { blocks: [block(1832, 275, 'middle', [
          line('Operating profit', 40, 800), line('$value', 39),
          line('3.4% margin', 28, 400, NOTE), line('+0.2pp Y/Y', 28, 400, NOTE),
        ])] },
        operating_expenses: { blocks: [block(1834, 758, 'middle', [
          line('SG&A', 35, 800), line('expenses', 35, 800), line('$value', 35),
        ])] },
        net_profit: { blocks: [block(2466, 317, 'middle', [
          line('Net profit', 40, 800), line('$value', 39),
          line('2.8% margin', 28, 400, NOTE), line('+0.2pp Y/Y', 28, 400, NOTE),
        ])] },
        tax: { blocks: [block(2460, 560, 'middle', [line('Tax', 31, 800), line('$value', 31)])] },
      },
    },
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 56.7, notes: ['+6% Y/Y'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.1, notes: ['+8% Y/Y'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 57.8, notes: ['+6% Y/Y'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 7.3, notes: ['13% margin', '+0.5pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 50.5, valueText: '($50.5B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.0, valueText: '$2.0B', notes: ['3.4% margin', '+0.2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 5.4, valueText: '($5.4B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.6, notes: ['2.8% margin', '+0.2pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.5, valueText: '($0.5B)' },
    ],
    links: [
      { source: 'net_sales', target: 'revenue', value: 56.7, sourceWidth: 480, targetWidth: 480, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.1, sourceWidth: 7, targetWidth: 10, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 7.3, sourceWidth: 61, targetWidth: 61, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'merchandise_costs', value: 50.5, sourceWidth: 429, targetWidth: 427, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.0, sourceWidth: 16, targetWidth: 15, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.4, sourceWidth: 45, targetWidth: 44, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 13, targetWidth: 10, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 2, targetWidth: 2, sourceOrder: 1, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 1, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['COSTCO', 'WHOLESALE', 'GOLD STAR MEMBER', 'EXECUTIVE MEMBER'],
      zh: {
        name: 'Costco · 2024 财年第一季度',
        meta: {
          title: 'Costco 2024 财年第一季度利润表', period: '2024 财年第一季度',
          periodNote: '截至 2023 年 11 月', titleTextLength: 1770,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { interest: { label: '利息' } },
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +6%'] },
          membership_fee: { label: '会员费', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 13%', '同比 +0.5 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.4%', '同比 +0.2 个百分点'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          net_profit: { label: '净利润', notes: ['利润率 2.8%', '同比 +0.2 个百分点'] },
          tax: { label: '税费' },
        },
        layout: { labels: {
          operating_expenses: { blocks: [block(1834, 758, 'middle', [
            line('销售、一般及', 32, 800), line('行政费用', 32, 800), line('$value', 35),
          ])] },
        } },
      },
    },
  });
})();

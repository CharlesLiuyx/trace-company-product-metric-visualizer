/* Hims & Hers Q3 FY25 income statement ($M), measured from the Build-bound
 * source infographic. Financial facts live in data/income-statements/hims-hers.js. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const SOURCE = '#c59661';
  const SOURCE_LINK = '#ddc9b1';
  const PROFIT = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#99cd99';
  const COST = '#cc0000';
  const COST_LABEL = '#941100';
  const COST_LINK = '#e08585';
  const CARD = '#cd9357';
  const RIGHT_LABEL_X = {
    netProfit: 2466.5,
    marketing: 2467,
    generalAdmin: 2467.5,
    operationsSupport: 2472.5,
    techDevelopment: 2473,
  };

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });

  const himsHersLogo = `
    <g transform="translate(-24 0)">
      <text x="350" y="119" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="139" font-weight="700" letter-spacing="-6" textLength="665"
        lengthAdjust="spacingAndGlyphs" fill="#1a1919">hims &amp; hers</text>
    </g>`;

  const annotations = (labels) => `
    <g font-family="Noto Sans, Arial, sans-serif">
      <g data-typography-role="brand">
        <rect x="43" y="712" width="136" height="136" rx="28" fill="#ffffff"/>
        <text x="111" y="792" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
          font-size="42" font-weight="700" letter-spacing="-3" fill="#c67552">hims</text>
      </g>
      <g data-typography-role="brand">
        <rect x="191" y="713" width="135" height="135" rx="28" fill="#7cc7b2"/>
        <text x="258.5" y="792" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
          font-size="42" font-weight="700" letter-spacing="-3" fill="#ffffff">hers</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="online_revenue">
        <text x="184" y="625" text-anchor="middle" font-size="40" font-weight="800" fill="#000000">${labels.onlineLine1}</text>
        ${labels.onlineLine2 ? `<text x="184" y="676" text-anchor="middle" font-size="40" font-weight="800" fill="#000000">${labels.onlineLine2}</text>` : ''}
      </g>
      <g class="sankey-interactive-annotation" data-node="wholesale_revenue">
        <text x="184" y="1081" text-anchor="middle" font-size="40" font-weight="800" fill="#000000">${labels.wholesaleLine1}</text>
        ${labels.wholesaleLine2 ? `<text x="184" y="1132" text-anchor="middle" font-size="40" font-weight="800" fill="#000000">${labels.wholesaleLine2}</text>` : ''}
      </g>
      <g>
        <rect x="72" y="1201" width="241" height="149" rx="29" fill="${CARD}"/>
        <text x="192.5" y="1252" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${labels.subscribers}</text>
        <text x="192.5" y="1291" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">2.5M</text>
        <text x="192.5" y="1324" text-anchor="middle" font-size="24" font-weight="400" fill="#ffffff">${labels.subscribersNote}</text>
      </g>
      <g>
        <rect x="326" y="1201" width="378" height="149" rx="29" fill="${CARD}"/>
        <text x="515" y="1252" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${labels.monthlyRevenue}</text>
        <text x="515" y="1291" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">$80</text>
        <text x="515" y="1324" text-anchor="middle" font-size="24" font-weight="400" fill="#ffffff">${labels.monthlyRevenueNote}</text>
      </g>
    </g>`;

  const labels = {
    online_revenue: {
      blocks: [
        block(388, 442, [line('$value', 39), line('+50% Y/Y', 29, { color: NOTE })]),
      ],
    },
    wholesale_revenue: {
      blocks: [
        block(388, 1001, [line('$value', 39), line('+10% Y/Y', 29, { color: NOTE })]),
      ],
    },
    revenue: {
      blocks: [block(853, 515, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+49% Y/Y', 29, { color: NOTE })])],
    },
    gross_profit: {
      blocks: [block(1323, 344, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('74% margin', 29, { color: NOTE }), line('(5pp) Y/Y', 29, { color: NOTE })])],
    },
    cost_of_revenue: {
      blocks: [block(1324, 1154, [line('Cost of', 36, { weight: 800 }), line('revenue', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })],
    },
    operating_profit: {
      blocks: [block(1786, 260, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('2% margin', 29, { color: NOTE }), line('(4pp) Y/Y', 29, { color: NOTE })])],
    },
    operating_expenses: {
      blocks: [block(1789, 904, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)], { lineGap: 10 })],
    },
    other_income: {
      blocks: [block(2126, 434, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    net_profit: {
      blocks: [block(RIGHT_LABEL_X.netProfit, 285, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('3% margin', 29, { color: NOTE }), line('(16pp) Y/Y', 29, { color: NOTE })])],
    },
    marketing: {
      blocks: [block(RIGHT_LABEL_X.marketing, 656, [line('Marketing', 31, { weight: 800 }), line('$value', 31), line('39% of revenue', 29, { color: NOTE }), line('(7pp) Y/Y', 29, { color: NOTE })])],
    },
    general_admin: {
      blocks: [block(RIGHT_LABEL_X.generalAdmin, 850, [line('General & admin', 31, { weight: 800 }), line('$value', 31), line('13% of revenue', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])],
    },
    operations_support: {
      blocks: [block(RIGHT_LABEL_X.operationsSupport, 1031, [line('Operations & support', 31, { weight: 800 }), line('$value', 31), line('13% of revenue', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })])],
    },
    tech_development: {
      blocks: [block(RIGHT_LABEL_X.techDevelopment, 1207, [line('Tech & Development', 31, { weight: 800 }), line('$value', 31), line('7% of revenue', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })])],
    },
  };

  const zhLabels = {
    online_revenue: {
      blocks: [
        block(388, 442, [line('$value', 39), line('同比 +50%', 29, { color: NOTE })]),
      ],
    },
    wholesale_revenue: {
      blocks: [
        block(388, 1001, [line('$value', 39), line('同比 +10%', 29, { color: NOTE })]),
      ],
    },
    revenue: {
      blocks: [block(853, 515, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +49%', 29, { color: NOTE })])],
    },
    gross_profit: {
      blocks: [block(1323, 344, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 74%', 29, { color: NOTE }), line('同比 (5 个百分点)', 29, { color: NOTE })])],
    },
    cost_of_revenue: {
      blocks: [block(1324, 1154, [line('收入', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })],
    },
    operating_profit: {
      blocks: [block(1786, 260, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 2%', 29, { color: NOTE }), line('同比 (4 个百分点)', 29, { color: NOTE })])],
    },
    operating_expenses: {
      blocks: [block(1789, 914, [line('营业费用', 40, { weight: 800 }), line('$value', 39)])],
    },
    other_income: {
      blocks: [block(2126, 434, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    net_profit: {
      blocks: [block(RIGHT_LABEL_X.netProfit, 285, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 3%', 29, { color: NOTE }), line('同比 (16 个百分点)', 29, { color: NOTE })])],
    },
    marketing: {
      blocks: [block(RIGHT_LABEL_X.marketing, 666, [line('营销', 31, { weight: 800 }), line('$value', 31), line('占收入 39%', 29, { color: NOTE }), line('同比 (7 个百分点)', 29, { color: NOTE })])],
    },
    general_admin: {
      blocks: [block(RIGHT_LABEL_X.generalAdmin, 860, [line('一般及行政', 31, { weight: 800 }), line('$value', 31), line('占收入 13%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })])],
    },
    operations_support: {
      blocks: [block(RIGHT_LABEL_X.operationsSupport, 1041, [line('运营与支持', 31, { weight: 800 }), line('$value', 31), line('占收入 13%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })])],
    },
    tech_development: {
      blocks: [block(RIGHT_LABEL_X.techDevelopment, 1217, [line('技术与开发', 31, { weight: 800 }), line('$value', 31), line('占收入 7%', 29, { color: NOTE }), line('同比 +2 个百分点', 29, { color: NOTE })])],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hims-hers-q3-fy25',
    name: 'Hims & Hers · Q3 FY25',
    company: 'Hims & Hers',
    meta: {
      company: 'Hims & Hers',
      title: 'Hims & Hers Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Quarter ended Sep. 30, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/hims-hers-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2495,
      hidePeriodStamp: true,
      logoWidth: 700,
      logoHeight: 145,
      logoY: 270,
      logoViewBox: '0 0 700 145',
      logoSvg: himsHersLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE, label: '#000000' },
        hub: { node: SOURCE, label: '#000000' },
        profit: { node: PROFIT, label: PROFIT_LABEL },
        cost: { node: COST, label: COST_LABEL },
      },
      linkTint: { source: SOURCE_LINK, hub: SOURCE_LINK, profit: PROFIT_LINK, cost: COST_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations({
      onlineLine1: 'Online',
      onlineLine2: 'Revenue',
      wholesaleLine1: 'Wholesale',
      wholesaleLine2: 'Revenue',
      subscribers: 'Subscribers',
      subscribersNote: '+21% Y/Y',
      monthlyRevenue: 'Monthly Rev. per Sub',
      monthlyRevenueNote: '+19% Y/Y',
    }),
    layout: {
      nodes: {
        online_revenue: { x: 350, y: 530, width: 73, height: 368 },
        wholesale_revenue: { x: 350, y: 1096, width: 73, height: 7 },
        revenue: { x: 817, y: 656, width: 73, height: 374 },
        gross_profit: { x: 1284, y: 529, width: 73, height: 276 },
        cost_of_revenue: { x: 1284, y: 1039, width: 73, height: 98 },
        operating_profit: { x: 1752, y: 442, width: 73, height: 8 },
        operating_expenses: { x: 1752, y: 614, width: 73, height: 270 },
        other_income: { x: 2090, y: 414, width: 72, height: 4 },
        net_profit: { x: 2218, y: 327, width: 73, height: 10 },
        marketing: { x: 2218, y: 647, width: 73, height: 145 },
        general_admin: { x: 2218, y: 893, width: 73, height: 50 },
        operations_support: { x: 2218, y: 1046, width: 73, height: 49 },
        tech_development: { x: 2218, y: 1206, width: 73, height: 25 },
      },
      labels,
    },
    nodes: [
      { id: 'online_revenue', col: 0, order: 0, type: 'source', label: ['Online', 'Revenue'], value: 589, notes: ['+50% Y/Y'], color: SOURCE, labelColor: '#000000', linkTint: SOURCE_LINK },
      { id: 'wholesale_revenue', col: 0, order: 1, type: 'source', label: ['Wholesale', 'Revenue'], value: 10, notes: ['+10% Y/Y'], color: SOURCE, labelColor: '#000000', linkTint: SOURCE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 599, notes: ['+49% Y/Y'], color: SOURCE, labelColor: '#000000', linkTint: SOURCE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 442, notes: ['74% margin', '(5pp) Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 157, color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 12, notes: ['2% margin', '(4pp) Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 430, color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 4, color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 16, notes: ['3% margin', '(16pp) Y/Y'], color: PROFIT, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'marketing', col: 5, order: 1, type: 'cost', label: 'Marketing', value: 232, notes: ['39% of revenue', '(7pp) Y/Y'], color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'general_admin', col: 5, order: 2, type: 'cost', label: 'General & admin', value: 81, notes: ['13% of revenue', '+2pp Y/Y'], color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'operations_support', col: 5, order: 3, type: 'cost', label: 'Operations & support', value: 77, notes: ['13% of revenue', '+1pp Y/Y'], color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
      { id: 'tech_development', col: 5, order: 4, type: 'cost', label: 'Tech & Development', value: 41, notes: ['7% of revenue', '+2pp Y/Y'], color: COST, labelColor: COST_LABEL, linkTint: COST_LINK },
    ],
    links: [
      { source: 'online_revenue', target: 'revenue', value: 589, sourceWidth: 368, targetWidth: 368, y0: 714, y1: 840, sourceOrder: 0, targetOrder: 0 },
      { source: 'wholesale_revenue', target: 'revenue', value: 10, sourceWidth: 7, targetWidth: 6, y0: 1099.5, y1: 1027, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 442, sourceWidth: 276, targetWidth: 276, y0: 794, y1: 667, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 157, sourceWidth: 98, targetWidth: 98, y0: 981, y1: 1088, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 12, sourceWidth: 8, targetWidth: 8, y0: 533, y1: 446, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 430, sourceWidth: 268, targetWidth: 269, y0: 671, y1: 748.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 12, sourceWidth: 8, targetWidth: 7, y0: 446, y1: 330.5, sourceOrder: 0, targetOrder: 0, linkTint: PROFIT_LINK },
      { source: 'other_income', target: 'net_profit', value: 4, sourceWidth: 4, targetWidth: 3, y0: 416, y1: 335.5, sourceOrder: 0, targetOrder: 1, linkTint: PROFIT_LINK },
      { source: 'operating_expenses', target: 'marketing', value: 232, sourceWidth: 145, targetWidth: 145, y0: 687.5, y1: 719.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_admin', value: 81, sourceWidth: 50, targetWidth: 50, y0: 785, y1: 918, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations_support', value: 77, sourceWidth: 49, targetWidth: 49, y0: 834.5, y1: 1070.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'tech_development', value: 41, sourceWidth: 25, targetWidth: 25, y0: 871.5, y1: 1218.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['hims', 'hers'],
      zh: {
        name: 'Hims & Hers · 2025 财年第三季度',
        meta: {
          title: 'Hims & Hers 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月 30 日的季度',
          titleSize: 108,
          titleTextLength: 1775,
        },
        annotationsSvg: annotations({
          onlineLine1: '线上',
          onlineLine2: '收入',
          wholesaleLine1: '批发',
          wholesaleLine2: '收入',
          subscribers: '订阅用户',
          subscribersNote: '同比 +21%',
          monthlyRevenue: '每名订阅用户月收入',
          monthlyRevenueNote: '同比 +19%',
        }),
        nodes: {
          online_revenue: { label: '线上收入', notes: ['同比 +50%'] },
          wholesale_revenue: { label: '批发收入', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +49%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (5 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (4 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (16 个百分点)'] },
          marketing: { label: '营销', notes: ['占收入 39%', '同比 (7 个百分点)'] },
          general_admin: { label: '一般及行政', notes: ['占收入 13%', '同比 +2 个百分点'] },
          operations_support: { label: '运营与支持', notes: ['占收入 13%', '同比 +1 个百分点'] },
          tech_development: { label: '技术与开发', notes: ['占收入 7%', '同比 +2 个百分点'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

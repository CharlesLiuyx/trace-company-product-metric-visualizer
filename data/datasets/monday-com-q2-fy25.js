/* Monday.com Q2 FY25 income statement ($M), measured from the active reference. */
(function () {
  const DARK = '#333333';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const LOGO_RED = '#f62b54';
  const LOGO_YELLOW = '#ffcc00';
  const LOGO_GREEN = '#00ca72';
  const RIGHT_LABEL_X = 2428;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    ...(options.color ? { color: options.color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });

  const mondayLogo = (word = 'monday') => `
    <g transform="translate(30 636)" data-typography-role="brand">
      <rect x="53.25" y="55" width="82.5" height="189" rx="41.25" transform="rotate(32 94.5 149.5)" fill="${LOGO_RED}"/>
      <rect x="165.75" y="55" width="82.5" height="189" rx="41.25" transform="rotate(32 207 149.5)" fill="${LOGO_YELLOW}"/>
      <circle cx="283.5" cy="204.5" r="32.5" fill="${LOGO_GREEN}"/>
      <text x="24" y="300" font-family="Montserrat,Arial,sans-serif" font-size="64" font-weight="800" fill="${DARK}"
        textLength="230" lengthAdjust="spacingAndGlyphs">${word}</text>
      <text x="232" y="318" font-family="Montserrat,Arial,sans-serif" font-size="34" font-weight="700" fill="${DARK}">.com</text>
    </g>`;

  const annotations = (copy) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${mondayLogo(copy.logoWord)}
      <rect x="45" y="1146" width="294" height="151" rx="35" fill="${DARK}"/>
      <rect x="351" y="1146" width="347" height="151" rx="35" fill="${DARK}"/>
      <g fill="#ffffff" font-size="29">
        <text x="116" y="1209" font-weight="800">NDR</text>
        <text x="190" y="1209" data-operating-metric="ndr">111%</text>
        <text x="88" y="1253">${copy.usersLabel}</text>
        <text x="265" y="1253" data-operating-metric="ndr_10plus">115%</text>
        <text x="524" y="1209" text-anchor="middle" font-weight="800">${copy.customersTop}</text>
        <text x="375" y="1253" data-operating-metric="customers_50k">3,702</text>
        <text x="476" y="1253">${copy.customersNote}</text>
      </g>
      <text x="197" y="1331" text-anchor="start" font-size="29" font-weight="500" fill="${NOTE}">${copy.ndrDefinition}</text>
    </g>`;

  const annotationsEn = annotations({
    logoWord: 'monday',
    usersLabel: '10+ users', customersNote: '+36% Y/Y',
    ndrBottom: '10+ users 115%',
    customersTop: 'Customers&gt; $50K+',
    customersBottom: '3,702 +36% Y/Y',
    ndrDefinition: 'NDR = Net Dollar Retention',
  });
  const annotationsZh = annotations({
    logoWord: 'Monday',
    usersLabel: '10+ 用户', customersNote: '同比 +36%',
    ndrBottom: '10+ 用户 115%',
    customersTop: 'ARR 超 $50K 客户',
    customersBottom: '3,702，同比 +36%',
    ndrDefinition: 'NDR = 净美元留存率',
  });

  const labels = (zh = false) => {
    const copy = zh
      ? {
          revenue: '收入', revenueNote: '同比 +27%',
          gross: '毛利润', grossMargin: '利润率 90%', grossYoy: '同比 (0 个百分点)',
          costA: '收入', costB: '成本',
          operatingLoss: '营业亏损', operatingMargin: '利润率 (4%)', operatingYoy: '同比 (5 个百分点)',
          opex: '营业费用',
          smA: '销售与', smB: '市场', smRevenue: '占收入 51%', smYoy: '同比 (5 个百分点)',
          rndA: '研究与', rndB: '开发', rndRevenue: '占收入 29%', rndYoy: '同比 +8 个百分点',
          gaA: '一般及', gaB: '行政', gaRevenue: '占收入 13%', gaYoy: '同比 +1 个百分点',
        }
      : {
          revenue: 'Revenue', revenueNote: '+27% Y/Y',
          gross: 'Gross profit', grossMargin: '90% margin', grossYoy: '(0pp) Y/Y',
          costA: 'Cost of', costB: 'revenue',
          operatingLoss: 'Operating loss', operatingMargin: '(4%) margin', operatingYoy: '(5pp) Y/Y',
          opex: 'Operating expenses',
          smA: 'Sales &', smB: 'marketing', smRevenue: '51% of revenue', smYoy: '(5pp) Y/Y',
          rndA: 'Research &', rndB: 'development', rndRevenue: '29% of revenue', rndYoy: '+8pp Y/Y',
          gaA: 'General &', gaB: 'admin', gaRevenue: '13% of revenue', gaYoy: '+1pp Y/Y',
        };

    return {
      revenue: {
        blocks: [block(450, 467, [
          line(copy.revenue, 39, { weight: 800 }),
          line('$value', 39),
          line(copy.revenueNote, 29, { color: NOTE }),
        ])],
      },
      gross_profit: {
        blocks: [block(1070, 253, [
          line(copy.gross, 39, { weight: 800 }),
          line('$value', 39),
          line(copy.grossMargin, 29, { color: NOTE }),
          line(copy.grossYoy, 29, { color: NOTE }),
        ])],
      },
      cost_of_revenue: {
        blocks: [block(1070, 1169, [
          line(copy.costA, 36, { weight: 800 }),
          line(copy.costB, 36, { weight: 800 }),
          line('$value', 35),
        ], { lineGap: 7 })],
      },
      operating_loss: {
        blocks: [block(1498, 1057, [
          ...(zh
            ? [line(copy.operatingLoss, 38, { weight: 800 })]
            : [line('Operating', 40, { weight: 800 }), line('loss', 40, { weight: 800 })]),
          line('$value', 39),
          line(copy.operatingMargin, 29, { color: NOTE }),
          line(copy.operatingYoy, 29, { color: NOTE }),
        ], { lineGap: 9 })],
      },
      operating_expenses: {
        blocks: [block(1695, 405, zh
          ? [line(copy.opex, 40, { weight: 800 }), line('$value', 38)]
          : [line('Operating', 43, { weight: 800 }), line('expenses', 43, { weight: 800 }), line('$value', 38)],
        { lineGap: zh ? 11 : 7 })],
      },
      sm: {
        blocks: [block(2484, 440, [
          line(copy.smA, 31, { weight: 800 }),
          line(copy.smB, 31, { weight: 800 }),
          line('$value', 31),
          line(copy.smRevenue, 29, { color: NOTE }),
          line(copy.smYoy, 29, { color: NOTE }),
        ], { anchor: 'middle' })],
      },
      rnd: {
        blocks: [block(2484, 805, [
          line(copy.rndA, 31, { weight: 800 }),
          line(copy.rndB, 31, { weight: 800 }),
          line('$value', 31),
          line(copy.rndRevenue, 29, { color: NOTE }),
          line(copy.rndYoy, 29, { color: NOTE }),
        ], { anchor: 'middle' })],
      },
      ga: {
        blocks: [block(2484, 1078, [
          line(copy.gaA, 31, { weight: 800 }),
          line(copy.gaB, 31, { weight: 800 }),
          line('$value', 31),
          line(copy.gaRevenue, 29, { color: NOTE }),
          line(copy.gaYoy, 29, { color: NOTE }),
        ], { anchor: 'middle' })],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'monday-com-q2-fy25',
    name: 'Monday.com · Q2 FY25',
    company: 'Monday.com',
    meta: {
      company: 'Monday.com',
      title: 'Monday.com Q2 FY25 Income Statement',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/monday-com-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 128,
      titleWeight: 700,
      titleTextLength: 2458,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREEN_LINK, hub: GREEN_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    operatingMetrics: [{"id": "ndr", "literal": "111%", "value": "111", "unit": "%", "currency": null, "comparison": "eq"}, {"id": "ndr_10plus", "literal": "115%", "value": "115", "unit": "%", "currency": null, "comparison": "eq"}, {"id": "customers_50k", "literal": "3,702", "value": "3702", "unit": "count", "currency": null, "comparison": "eq"}],
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        revenue: { x: 414, y: 614, width: 72, height: 398 },
        gross_profit: { x: 1034, y: 438, width: 72, height: 357 },
        cost_of_revenue: { x: 1034, y: 1104, width: 72, height: 42 },
        operating_loss: { x: 1462, y: 1022, width: 72, height: 16 },
        operating_expenses: { x: 1659, y: 573, width: 73, height: 373 },
        sm: { x: 2282, y: 433, width: 72, height: 204 },
        rnd: { x: 2282, y: 798, width: 72, height: 116 },
        ga: { x: 2282, y: 1093, width: 72, height: 54 },
      },
      labels: labels(),
    },
    nodes: [
      { id: 'revenue', col: 0, order: 0, type: 'hub', label: 'Revenue', value: 299, notes: ['+27% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 1, order: 0, type: 'profit', label: 'Gross profit', value: 268, notes: ['90% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 1, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 31, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 2, order: 1, type: 'cost', label: 'Operating loss', value: -12, notes: ['(4%) margin', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 279, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 0, type: 'cost', label: 'Sales & marketing', value: 153, notes: ['51% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 1, type: 'cost', label: 'Research & development', value: 87, notes: ['29% of revenue', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 2, type: 'cost', label: 'General & admin', value: 40, notes: ['13% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'revenue', target: 'gross_profit', value: 268, sourceWidth: 356, targetWidth: 357, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 31, sourceWidth: 42, targetWidth: 42, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 268, sourceWidth: 357, targetWidth: 357, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 12,
        sourceWidth: 16, targetWidth: 16, y0: 1030, y1: 938,
        sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        curve: { x0: 1534, x1: 1659, c1x: 1597, c1y: 1030, c2x: 1602, c2y: 938 } },
      { source: 'operating_expenses', target: 'sm', value: 153, sourceWidth: 204, targetWidth: 204, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 87, sourceWidth: 115, targetWidth: 116, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 40, sourceWidth: 54, targetWidth: 54, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Monday.com · 2025 财年第二季度',
        meta: {
          title: 'Monday.com 2025 财年第二季度利润表',
          titleTextLength: 2140,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          revenue: { label: '收入', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 90%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (4%)', '同比 (5 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 51%', '同比 (5 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 29%', '同比 +8 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 13%', '同比 +1 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

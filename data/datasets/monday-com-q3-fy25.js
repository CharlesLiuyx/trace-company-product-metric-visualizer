/* Monday.com Q3 FY25 income statement ($M), measured from the active reference. */
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
    <g transform="translate(30 630)" data-typography-role="brand">
      <rect x="53.25" y="55" width="82.5" height="189" rx="41.25" transform="rotate(32 94.5 149.5)" fill="${LOGO_RED}"/>
      <rect x="165.75" y="55" width="82.5" height="189" rx="41.25" transform="rotate(32 207 149.5)" fill="${LOGO_YELLOW}"/>
      <circle cx="283.5" cy="204.5" r="32.5" fill="${LOGO_GREEN}"/>
      <text x="24" y="300" font-family="Montserrat,Arial,sans-serif" font-size="64" font-weight="800" fill="${DARK}"
        textLength="230" lengthAdjust="spacingAndGlyphs">${word}</text>
      <text x="232" y="318" font-family="Montserrat,Arial,sans-serif" font-size="34" font-weight="700" fill="${DARK}">.com</text>
    </g>`;

  const kpiCard = (x, width, line1, line2) => `
    <g>
      <rect x="${x}" y="1146" width="${width}" height="151" rx="35" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1209" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${line1}</text>
      <text x="${x + width / 2}" y="1253" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${line2}</text>
    </g>`;

  const annotations = (copy) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${mondayLogo(copy.logoWord)}
      ${kpiCard(46, 293, copy.ndrTop, copy.ndrBottom)}
      ${kpiCard(351, 347, copy.customersTop, copy.customersBottom)}
      <text x="197" y="1331" text-anchor="start" font-size="29" font-weight="500" fill="${NOTE}">${copy.ndrDefinition}</text>
    </g>`;

  const annotationsEn = annotations({
    logoWord: 'monday',
    ndrTop: 'NDR 111%',
    ndrBottom: '10+ users 115%',
    customersTop: 'Customers&gt; $50K+',
    customersBottom: '3,993 +37% Y/Y',
    ndrDefinition: 'NDR = Net Dollar Retention',
  });
  const annotationsZh = annotations({
    logoWord: 'Monday',
    ndrTop: 'NDR：111%',
    ndrBottom: '10+ 用户 115%',
    customersTop: 'ARR 超 $50K 客户',
    customersBottom: '3,993，同比 +37%',
    ndrDefinition: 'NDR = 净美元留存率',
  });

  const labels = (zh = false) => {
    const copy = zh
      ? {
          revenue: '收入', revenueNote: '同比 +26%',
          gross: '毛利润', grossMargin: '利润率 89%', grossYoy: '同比 (1 个百分点)',
          costA: '收入', costB: '成本',
          operatingLoss: '营业亏损', operatingMargin: '利润率 (1%)', operatingYoy: '同比 +10 个百分点',
          opex: '营业费用',
          smA: '销售与', smB: '市场', smRevenue: '占收入 52%', smYoy: '同比 (4 个百分点)',
          rndA: '研究与', rndB: '开发', rndRevenue: '占收入 25%', rndYoy: '同比 +3 个百分点',
          gaA: '一般及', gaB: '行政', gaRevenue: '占收入 12%', gaYoy: '同比 (10 个百分点)',
        }
      : {
          revenue: 'Revenue', revenueNote: '+26% Y/Y',
          gross: 'Gross profit', grossMargin: '89% margin', grossYoy: '(1pp) Y/Y',
          costA: 'Cost of', costB: 'revenue',
          operatingLoss: 'Operating loss', operatingMargin: '(1%) margin', operatingYoy: '+10pp Y/Y',
          opex: 'Operating expenses',
          smA: 'Sales &', smB: 'marketing', smRevenue: '52% of revenue', smYoy: '(4pp) Y/Y',
          rndA: 'Research &', rndB: 'development', rndRevenue: '25% of revenue', rndYoy: '+3pp Y/Y',
          gaA: 'General &', gaB: 'admin', gaRevenue: '12% of revenue', gaYoy: '(10pp) Y/Y',
        };

    return {
      revenue: {
        blocks: [block(458, 467, [
          line(copy.revenue, 39, { weight: 800 }),
          line('$value', 39),
          line(copy.revenueNote, 29, { color: NOTE }),
        ])],
      },
      gross_profit: {
        blocks: [block(1073, 289, [
          line(copy.gross, 39, { weight: 800 }),
          line('$value', 39),
          line(copy.grossMargin, 29, { color: NOTE }),
          line(copy.grossYoy, 29, { color: NOTE }),
        ])],
      },
      cost_of_revenue: {
        blocks: [block(1073, 1114, [
          line(copy.costA, 36, { weight: 800 }),
          line(copy.costB, 36, { weight: 800 }),
          line('$value', 35),
        ], { lineGap: 7 })],
      },
      operating_loss: {
        blocks: [block(1471, 1093, [
          ...(zh
            ? [line(copy.operatingLoss, 38, { weight: 800 })]
            : [line('Operating', 40, { weight: 800 }), line('loss', 40, { weight: 800 })]),
          line('$value', 39),
          line(copy.operatingMargin, 29, { color: NOTE }),
          line(copy.operatingYoy, 29, { color: NOTE }),
        ], { lineGap: 9 })],
      },
      operating_expenses: {
        blocks: [block(1696, 449, zh
          ? [line(copy.opex, 40, { weight: 800 }), line('$value', 38)]
          : [line('Operating', 43, { weight: 800 }), line('expenses', 43, { weight: 800 }), line('$value', 38)],
        { lineGap: zh ? 11 : 7 })],
      },
      sm: {
        blocks: [block(2384, 455, [
          line(copy.smA, 31, { weight: 800 }),
          line(copy.smB, 31, { weight: 800 }),
          line('$value', 31),
          line(copy.smRevenue, 29, { color: NOTE }),
          line(copy.smYoy, 29, { color: NOTE }),
        ], { anchor: 'start' })],
      },
      rnd: {
        blocks: [block(2384, 808, [
          line(copy.rndA, 31, { weight: 800 }),
          line(copy.rndB, 31, { weight: 800 }),
          line('$value', 31),
          line(copy.rndRevenue, 29, { color: NOTE }),
          line(copy.rndYoy, 29, { color: NOTE }),
        ], { anchor: 'start' })],
      },
      ga: {
        blocks: [block(2383, 1069, [
          line(copy.gaA, 31, { weight: 800 }),
          line(copy.gaB, 31, { weight: 800 }),
          line('$value', 31),
          line(copy.gaRevenue, 29, { color: NOTE }),
          line(copy.gaYoy, 29, { color: NOTE }),
        ], { anchor: 'start' })],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'monday-com-q3-fy25',
    name: 'Monday.com · Q3 FY25',
    company: 'Monday.com',
    meta: {
      company: 'Monday.com',
      title: 'Monday.com Q3 FY25 Income Statement',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/monday-com-q3-fy25.png', width: 2667, height: 1500 },
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
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        revenue: { x: 414, y: 614, width: 72, height: 370 },
        gross_profit: { x: 1037, y: 468, width: 72, height: 329 },
        cost_of_revenue: { x: 1037, y: 1048, width: 72, height: 44 },
        operating_loss: { x: 1435, y: 1067, width: 72, height: 2 },
        operating_expenses: { x: 1660, y: 611, width: 72, height: 332 },
        sm: { x: 2283, y: 443, width: 72, height: 193 },
        rnd: { x: 2283, y: 810, width: 72, height: 94 },
        ga: { x: 2283, y: 1083, width: 72, height: 46 },
      },
      labels: labels(),
    },
    nodes: [
      { id: 'revenue', col: 0, order: 0, type: 'hub', label: 'Revenue', value: 317, notes: ['+26% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 1, order: 0, type: 'profit', label: 'Gross profit', value: 281, notes: ['89% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 1, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 36, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 2, order: 1, type: 'cost', label: 'Operating loss', value: -2, notes: ['(1%) margin', '+10pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 3, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 283, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 0, type: 'cost', label: 'Sales & marketing', value: 166, notes: ['52% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 1, type: 'cost', label: 'Research & development', value: 79, notes: ['25% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 2, type: 'cost', label: 'General & admin', value: 38, notes: ['12% of revenue', '(10pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'revenue', target: 'gross_profit', value: 281, sourceWidth: 329, targetWidth: 329, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 36, sourceWidth: 41, targetWidth: 44, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 281, sourceWidth: 329, targetWidth: 330, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 2,
        sourceWidth: 2, targetWidth: 2, y0: 1068, y1: 942,
        sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        curve: { x0: 1507, x1: 1660, c1x: 1572, c1y: 1068, c2x: 1614, c2y: 942 },
      },
      { source: 'operating_expenses', target: 'sm', value: 166, sourceWidth: 193, targetWidth: 193, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 79, sourceWidth: 93, targetWidth: 94, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 38, sourceWidth: 46, targetWidth: 46, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Monday.com · 2025 财年第三季度',
        meta: {
          title: 'Monday.com 2025 财年第三季度利润表',
          titleTextLength: 2140,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          revenue: { label: '收入', notes: ['同比 +26%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (1%)', '同比 +10 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 52%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 +3 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 12%', '同比 (10 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

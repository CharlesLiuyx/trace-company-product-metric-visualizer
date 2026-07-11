/* ====================================================================
 * Monday.com - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/monday-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const DARK = '#333333';
  const TITLE = '#155277';
  const NOTE = '#6d6d6d';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#8e1300';
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
    <g font-family="Montserrat,Arial,sans-serif">
      ${mondayLogo(copy.logoWord)}
      ${kpiCard(46, 293, copy.ndrTop, copy.ndrBottom)}
      ${kpiCard(351, 347, copy.customersTop, copy.customersBottom)}
      <text x="197" y="1331" text-anchor="start" font-size="29" font-weight="500" fill="${NOTE}">${copy.ndrDefinition}</text>
    </g>`;

  const annotationsEn = annotations({
    logoWord: 'monday',
    ndrTop: 'NDR 110%',
    ndrBottom: '10+ users 114%',
    customersTop: 'Customers&gt; $50K+',
    customersBottom: '4,281 +34% Y/Y',
    ndrDefinition: 'NDR = Net Dollar Retention',
  });
  const annotationsZh = annotations({
    logoWord: 'Monday',
    ndrTop: 'NDR：110%',
    ndrBottom: '10+ 用户 114%',
    customersTop: 'ARR 超 $50K 客户',
    customersBottom: '4,281，同比 +34%',
    ndrDefinition: 'NDR = 净美元留存率',
  });

  const labels = (zh = false) => {
    const copy = zh
      ? {
          revenue: '收入', revenueNote: '同比 +25%', gross: '毛利润', grossMargin: '利润率 89%', grossYoy: '同比 +0 个百分点',
          costA: '收入', costB: '成本', operating: '营业利润', operatingMargin: '利润率 1%', operatingYoy: '同比 (3 个百分点)',
          opexA: '营业', opexB: '费用', finance: '财务收入', taxBenefit: '税收收益', net: '净利润',
          smA: '销售与', smB: '市场', smRevenue: '占收入 51%', smYoy: '同比 +1 个百分点',
          rndA: '研究与', rndB: '开发', rndRevenue: '占收入 25%', rndYoy: '同比 +2 个百分点',
          gaA: '一般及', gaB: '行政', gaRevenue: '占收入 12%', gaYoy: '同比 +0 个百分点',
        }
      : {
          revenue: 'Revenue', revenueNote: '+25% Y/Y', gross: 'Gross profit', grossMargin: '89% margin', grossYoy: '+0pp Y/Y',
          costA: 'Cost of', costB: 'revenue', operating: 'Operating profit', operatingMargin: '1% margin', operatingYoy: '(3pp) Y/Y',
          opexA: 'Operating', opexB: 'expenses', finance: 'Finance', taxBenefit: 'Tax benefit', net: 'Net profit',
          smA: 'Sales &', smB: 'marketing', smRevenue: '51% of revenue', smYoy: '+1pp Y/Y',
          rndA: 'Research &', rndB: 'development', rndRevenue: '25% of revenue', rndYoy: '+2pp Y/Y',
          gaA: 'General &', gaB: 'admin', gaRevenue: '12% of revenue', gaYoy: '+0pp Y/Y',
        };

    return {
      revenue: { blocks: [block(450, 526, [line(copy.revenue, 39, { weight: 800 }), line('$value', 39), line(copy.revenueNote, 29, { color: NOTE })])] },
      gross_profit: { blocks: [block(1073, 394, [line(copy.gross, 39, { weight: 800 }), line('$value', 39), line(copy.grossMargin, 29, { color: NOTE }), line(copy.grossYoy, 29, { color: NOTE })])] },
      cost_of_revenue: { blocks: [block(1073, 1150, [line(copy.costA, 36, { weight: 800 }), line(copy.costB, 36, { weight: 800 }), line('$value', 35)], { lineGap: 7 })] },
      operating_profit: { blocks: [block(1696, 299, [line(copy.operating, 39, { weight: 800 }), line('$value', 39), line(copy.operatingMargin, 29, { color: NOTE }), line(copy.operatingYoy, 29, { color: NOTE })])] },
      operating_expenses: { blocks: [block(1696, 1011, [line(copy.opexA, 43, { weight: 800 }), line(copy.opexB, 43, { weight: 800 }), line('$value', 38)], { lineGap: zh ? 13 : 7 })] },
      finance: { blocks: [block(2163, 213, [line(copy.finance, 31, { weight: 800 }), line('$value', 31)])] },
      tax_benefit: { blocks: [block(2163, 496, [line(copy.taxBenefit, 31, { weight: 800 }), line('$value', 31)])] },
      net_profit: { blocks: [block(2380, 332, [line(copy.net, 39, { weight: 800 }), line('$value', 39)], { anchor: 'start' })] },
      sm: { blocks: [block(RIGHT_LABEL_X, 730, [line(copy.smA, 31, { weight: 800 }), line(copy.smB, 31, { weight: 800 }), line('$value', 31), line(copy.smRevenue, 29, { color: NOTE }), line(copy.smYoy, 29, { color: NOTE })], { anchor: 'start' })] },
      rnd: { blocks: [block(RIGHT_LABEL_X, 987, [line(copy.rndA, 31, { weight: 800 }), line(copy.rndB, 31, { weight: 800 }), line('$value', 31), line(copy.rndRevenue, 29, { color: NOTE }), line(copy.rndYoy, 29, { color: NOTE })], { anchor: 'start' })] },
      ga: { blocks: [block(RIGHT_LABEL_X, 1203, [line(copy.gaA, 31, { weight: 800 }), line(copy.gaB, 31, { weight: 800 }), line('$value', 31), line(copy.gaRevenue, 29, { color: NOTE }), line(copy.gaYoy, 29, { color: NOTE })], { anchor: 'start' })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'monday-q4-fy25',
    name: 'Monday.com · Q4 FY25',
    company: 'Monday.com',
    meta: {
      company: 'Monday.com',
      title: 'Monday.com Q4 FY25 Income Statement',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/monday-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 128,
      titleWeight: 700,
      titleTextLength: 2430,
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
        revenue: { x: 414, y: 668, width: 72, height: 343 },
        gross_profit: { x: 1037, y: 577, width: 72, height: 305 },
        cost_of_revenue: { x: 1037, y: 1090, width: 72, height: 38 },
        operating_profit: { x: 1660, y: 481, width: 72, height: 4 },
        operating_expenses: { x: 1660, y: 684, width: 72, height: 303 },
        finance: { x: 2127, y: 298, width: 72, height: 13 },
        tax_benefit: { x: 2127, y: 415, width: 72, height: 62 },
        net_profit: { x: 2283, y: 335, width: 72, height: 79 },
        sm: { x: 2283, y: 709, width: 72, height: 176 },
        rnd: { x: 2283, y: 1016, width: 72, height: 88 },
        ga: { x: 2283, y: 1238, width: 72, height: 40 },
      },
      labels: labels(),
    },
    nodes: [
      { id: 'revenue', col: 0, order: 0, type: 'hub', label: 'Revenue', value: 334, notes: ['+25% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREEN_LINK },
      { id: 'gross_profit', col: 1, order: 0, type: 'profit', label: 'Gross profit', value: 297, notes: ['89% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 1, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 37, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 2, notes: ['1% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 294, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'finance', col: 3, order: 0, type: 'profit', label: 'Finance', value: 14, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax_benefit', col: 3, order: 1, type: 'profit', label: 'Tax benefit', value: 61, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 77, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sm', col: 4, order: 1, type: 'cost', label: 'Sales & marketing', value: 171, notes: ['51% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 2, type: 'cost', label: 'Research & development', value: 85, notes: ['25% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 3, type: 'cost', label: 'General & admin', value: 39, notes: ['12% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'revenue', target: 'gross_profit', value: 297, width: 305, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 37, width: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2, width: 4, sourceWidth: 5, targetWidth: 4, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 294, width: 302, sourceWidth: 300, targetWidth: 303, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2, width: 4, sourceOrder: 0, targetOrder: 1 },
      { source: 'finance', target: 'net_profit', value: 14, width: 13, sourceOrder: 0, targetOrder: 0 },
      { source: 'tax_benefit', target: 'net_profit', value: 61, width: 62, sourceOrder: 0, targetOrder: 2 },
      { source: 'operating_expenses', target: 'sm', value: 171, width: 176, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 85, width: 88, sourceWidth: 87, targetWidth: 88, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 39, width: 40, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Monday.com · 2025 财年第四季度',
        meta: {
          title: 'Monday.com 2025 财年第四季度利润表',
          titleTextLength: 2140,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          revenue: { label: '收入', notes: ['同比 +25%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          finance: { label: '财务收入' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润' },
          sm: { label: '销售与市场', notes: ['占收入 51%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 +2 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 12%', '同比 +0 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

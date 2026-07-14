/* ServiceNow Q4 FY25 income statement ($M), reconstructed from the
 * processed reference as a fixed, native-SVG Sankey view. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const DARK = '#293e40';
  const DARK_LABEL = '#283e40';
  const TEAL = '#80b6a1';
  const TEAL_LINK = '#bfd7cd';
  const GRAY_LINK = '#97a1a2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TERMINAL_X = 2435;

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
    lineGap: options.lineGap == null ? 10 : options.lineGap,
    lines,
  });

  const labels = (zh) => {
    const text = zh ? {
      subscription: '订阅',
      professional: ['专业', '服务'],
      revenue: '收入',
      gross: '毛利润',
      cost: ['收入', '成本'],
      operating: '营业利润',
      expenses: ['运营', '费用'],
      interest: '利息',
      net: '净利润',
      tax: '税费',
      other: '其他',
      sm: '销售与市场',
      rnd: '研发',
      ga: '管理费用',
      yoy21: '同比 +21%',
      yoy12: '同比 +12%',
      margin79: '毛利率 79%',
      marginNegative15: '毛利率 (15%)',
      margin77: '利润率 77%',
      down2: '同比 (2 个百分点)',
      margin12: '利润率 12%',
      flat: '同比 +0 个百分点',
      margin11: '利润率 11%',
      rev32: '占收入 32%',
      down3: '同比 (3 个百分点)',
      rev22: '占收入 22%',
      down1: '同比 (1 个百分点)',
      rev10: '占收入 10%',
    } : {
      subscription: 'Subscription',
      professional: ['Professional', 'services'],
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: ['Cost of', 'revenue'],
      operating: 'Operating profit',
      expenses: ['Operating', 'expenses'],
      interest: 'Interest',
      net: 'Net profit',
      tax: 'Tax',
      other: 'Other',
      sm: 'S&M',
      rnd: 'R&D',
      ga: 'G&A',
      yoy21: '+21% Y/Y',
      yoy12: '+12% Y/Y',
      margin79: '79% gross margin',
      marginNegative15: '(15%) gross margin',
      margin77: '77% margin',
      down2: '(2pp) Y/Y',
      margin12: '12% margin',
      flat: '(0pp) Y/Y',
      margin11: '11% margin',
      rev32: '32% of revenue',
      down3: '(3pp) Y/Y',
      rev22: '22% of revenue',
      down1: '(1pp) Y/Y',
      rev10: '10% of revenue',
    };
    const costName = (value) => line(value, 32, { weight: 800, color: RED_LABEL });
    const costValue = () => line('$value', 31, { color: RED_LABEL });
    const note = (value) => line(value, 30, { color: NOTE });
    return {
      subscription: { blocks: [
        block(397, 430, [line('$value', 41), note(text.yoy21)], { lineGap: 12 }),
        block(205, 646, [line(text.subscription, 41, { weight: 800 }), note(text.margin79)], { lineGap: 12 }),
      ] },
      professional_services: { blocks: [
        block(406, 958, [line('$value', 39, { color: TEAL }), note(text.yoy12)], { lineGap: 12 }),
        block(205, 998, [...text.professional.map((value) => line(value, 39, { weight: 800, color: TEAL })), note(text.marginNegative15)], { lineGap: 10 }),
      ] },
      revenue: { blocks: [
        block(873, 477, [line(text.revenue, 41, { weight: 800 }), line('$value', 41), note(text.yoy21)], { lineGap: 13 }),
      ] },
      gross_profit: { blocks: [
        block(1340, 340, [line(text.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), note(text.margin77), note(text.down2)], { lineGap: 11 }),
      ] },
      cost_of_revenue: { blocks: [
        block(1340, 1080, [...text.cost.map((value) => line(value, 36, { weight: 800, color: RED_LABEL })), line('$value', 35, { color: RED_LABEL })]),
      ] },
      operating_profit: { blocks: [
        block(1808, 228, [line(text.operating, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), note(text.margin12), note(text.flat)], { lineGap: 11 }),
      ] },
      operating_expenses: { blocks: [
        block(1808, 920, [...text.expenses.map((value) => line(value, 36, { weight: 800, color: RED_LABEL })), line('$value', 35, { color: RED_LABEL })]),
      ] },
      interest: { blocks: [
        block(2155, 407, [line(text.interest, 32, { weight: 800, color: GREEN_LABEL }), line('$value', 31, { color: GREEN_LABEL })], { lineGap: 9 }),
      ] },
      net_profit: { blocks: [
        block(2435, 270, [line(text.net, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), note(text.margin11), note(text.down2)], { lineGap: 11 }),
      ] },
      tax: { blocks: [
        block(2435, 522, [costName(text.tax), costValue()], { lineGap: 9 }),
      ] },
      other: { blocks: [
        block(2435, 648, [costName(text.other), costValue()], { lineGap: 9 }),
      ] },
      sm: { blocks: [
        block(TERMINAL_X, 807, [costName(text.sm), costValue(), note(text.rev32), note(text.down3)], { lineGap: 9 }),
      ] },
      rnd: { blocks: [
        block(TERMINAL_X, 999, [costName(text.rnd), costValue(), note(text.rev22), note(text.down1)], { lineGap: 9 }),
      ] },
      ga: { blocks: [
        block(TERMINAL_X, 1176, [costName(text.ga), costValue(), note(text.rev10), note(text.down2)], { lineGap: 9 }),
      ] },
    };
  };

  const kpiCard = (x, width, title, value, note, rx = 28) => `
    <g>
      <rect x="${x}" y="1146" width="${width}" height="168" rx="${rx}" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1199" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1242" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1287" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g>
      ${kpiCard(39, 146, 'cRPO', '$12.9B', zh ? '同比 +25%' : '+25% Y/Y', 30)}
      ${kpiCard(201, 325, zh ? '续约率' : 'Renewal rate', '98%', zh ? '同比持平' : 'Flat Y/Y', 26)}
      ${kpiCard(542, 377, zh ? '客户数 &gt; $5M' : 'Customers &gt; $5M', '603', zh ? '同比 +20%' : '+20% Y/Y', 26)}
      <text x="98" y="1351" font-size="29" font-weight="500" fill="${NOTE}">cRPO = ${zh ? '当前剩余履约义务' : 'Current Remaining Performance Obligation'}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'servicenow-q4-fy25',
    name: 'ServiceNow · Q4 FY25',
    company: 'ServiceNow',
    meta: {
      company: 'ServiceNow',
      title: 'ServiceNow Q4 FY25 Income Statement',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/servicenow-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 132,
      titleWeight: 700,
      titleTextLength: 2460,
      logoWidth: 800,
      logoHeight: 142,
      logoY: 268,
      logoViewBox: '0 0 800 142',
      logoSvg: `
        <text x="0" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">service</text>
        <text x="365" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">n</text>
        <circle cx="478" cy="77" r="34" fill="none" stroke="${TEAL}" stroke-width="23"/>
        <text x="516" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">w</text>
      `,
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
        source: { node: DARK, label: DARK_LABEL },
        hub: { node: DARK, label: DARK_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 0.1,
      nodes: {
        subscription: { x: 371, y: 529, width: 71, height: 347 },
        professional_services: { x: 371, y: 1056, width: 71, height: 9 },
        revenue: { x: 838, y: 628, width: 70, height: 357 },
        gross_profit: { x: 1305, y: 528, width: 71, height: 273 },
        cost_of_revenue: { x: 1305, y: 983, width: 71, height: 83 },
        operating_profit: { x: 1773, y: 414, width: 70, height: 43 },
        operating_expenses: { x: 1773, y: 674, width: 70, height: 228 },
        interest: { x: 2120, y: 383, width: 70, height: 10 },
        net_profit: { x: 2239, y: 304, width: 71, height: 39 },
        tax: { x: 2239, y: 554, width: 71, height: 13 },
        other: { x: 2239, y: 685, width: 71, height: 1 },
        sm: { x: 2239, y: 802, width: 71, height: 114 },
        rnd: { x: 2239, y: 1017, width: 71, height: 75 },
        ga: { x: 2237, y: 1192, width: 71, height: 35 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 3466, notes: ['+21% Y/Y', '79% gross margin'] },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 102, color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK, notes: ['+12% Y/Y', '(15%) gross margin'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3568, notes: ['+21% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2734, notes: ['77% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 834 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 443, notes: ['12% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2291 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 105 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 401, notes: ['11% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 140 },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 7 },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 1150, notes: ['32% of revenue', '(3pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 773, notes: ['22% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 368, notes: ['10% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 3466, sourceWidth: 347, targetWidth: 347, y0: 702.5, y1: 801.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 102, sourceWidth: 9, targetWidth: 10, y0: 1060.5, y1: 980, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2734, sourceWidth: 273, targetWidth: 273, y0: 764.5, y1: 664.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 834, sourceWidth: 84, targetWidth: 83, y0: 943, y1: 1024.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 443, sourceWidth: 43, targetWidth: 43, y0: 549.5, y1: 435.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2291, sourceWidth: 230, targetWidth: 228, y0: 686, y1: 788, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 296, sourceWidth: 29, targetWidth: 29, y0: 428.5, y1: 318.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 140, sourceWidth: 14, targetWidth: 13, y0: 450, y1: 560.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 7, sourceWidth: 1, targetWidth: 1, y0: 456.5, y1: 685.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 105, sourceWidth: 10, targetWidth: 10, y0: 388, y1: 338, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 1150, sourceWidth: 115, targetWidth: 114, y0: 731.5, y1: 859, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 773, sourceWidth: 77, targetWidth: 75, y0: 827.5, y1: 1054.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 368, sourceWidth: 36, targetWidth: 35, y0: 884, y1: 1209.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['cRPO'],
      zh: {
        name: 'ServiceNow · 2025 财年第四季度',
        meta: { title: 'ServiceNow 2025 财年第四季度利润表', titleTextLength: 2200 },
        annotationsSvg: annotations(true),
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +21%', '毛利率 79%'] },
          professional_services: { label: '专业服务', notes: ['同比 +12%', '毛利率 (15%)'] },
          revenue: { label: '收入', notes: ['同比 +21%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 77%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sm: { label: '销售与市场', notes: ['占收入 32%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 22%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

/* ====================================================================
 * dLocal - Q1 FY26 income statement ($M)
 * Fixed d3/SVG reconstruction measured from input/processed/dlocal-q1-fy26.png.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const PURPLE = '#6b00ff';
  const PURPLE_LINK = '#b485f7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

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
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  // A vector reconstruction of the wordmark from the supplied source. The
  // renderer marks this as brand typography, so its font does not leak to
  // financial labels or annotations.
  const dlocalLogoSvg = `
    <g fill="#000000" font-family="Arial Black,Arial,sans-serif">
      <text x="0" y="120" font-size="145" font-weight="900" letter-spacing="-11">d</text>
      <rect x="132" y="72" width="27" height="27" fill="${PURPLE}"/>
      <text x="169" y="120" font-size="140" font-weight="800" letter-spacing="-8">local</text>
    </g>`;

  const kpiCards = (retentionLabel, retentionValue, tpvLabel, tpvValue, tpvNote, footnote) => `
    <g>
      <rect x="88" y="1170" width="332" height="144" rx="33" fill="#000000"/>
      <text x="254" y="1216" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${retentionLabel[0]}</text>
      <text x="254" y="1255" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${retentionLabel[1]}</text>
      <text x="254" y="1294" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${retentionValue}</text>
      <rect x="430" y="1170" width="333" height="144" rx="33" fill="#000000"/>
      <text x="596.5" y="1216" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${tpvLabel}</text>
      <text x="596.5" y="1255" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">${tpvValue}</text>
      <text x="596.5" y="1294" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${tpvNote}</text>
      <text x="226" y="1349" text-anchor="start" font-size="28" font-weight="400" fill="${NOTE}">${footnote}</text>
    </g>`;

  const annotationsEn = kpiCards(
    ['Net Revenue', 'Retention'],
    '152% +7p Q/Q',
    'TPV',
    '$14.1B',
    '+73% Y/Y',
    'TPV = Total Payment Volume'
  );
  const annotationsZh = kpiCards(
    ['净收入', '留存率'],
    '152%，环比 +7 个百分点',
    '总支付额（TPV）',
    '$14.1B',
    '同比 +73%',
    'TPV = 总支付额'
  );

  const labelsEn = {
    latam: { blocks: [
      block(391.5, 457, [line('$value', 39), line('+61% Y/Y', 28, { color: NOTE })]),
      block(307, 681, [line('LATAM', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    africa_asia: { blocks: [
      block(391.5, 966, [line('$value', 39), line('+36% Y/Y', 28, { color: NOTE })]),
      block(307, 1055, [line('Africa', 40, { weight: 800 }), line('& Asia', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
    ] },
    revenue: { blocks: [block(858, 503, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+55% Y/Y', 28, { color: NOTE })])] },
    gross_profit: { blocks: [block(1325.5, 346, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('35% margin', 28, { color: NOTE }), line('(4pp) Y/Y', 28, { color: NOTE })])] },
    cost_of_services: { blocks: [block(1325.5, 1155, [line('Cost of', 35, { weight: 800 }), line('services', 35, { weight: 800 }), line('$value', 35)])] },
    operating_profit: { blocks: [block(1793, 248, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('16% margin', 28, { color: NOTE }), line('(5pp) Y/Y', 28, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1793, 757, [line('Operating', 39, { weight: 800 }), line('expenses', 39, { weight: 800 }), line('$value', 38)])] },
    net_profit: { blocks: [block(2325, 310, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('12% margin', 28, { color: NOTE }), line('(9pp) Y/Y', 28, { color: NOTE })], { anchor: 'start' })] },
    other_income: { blocks: [block(2145, 448, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    tax: { blocks: [block(2398, 528, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 })] },
    ga: { blocks: [block(2390, 687, [line('G&A', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 })] },
    technology_development: { blocks: [block(2460, 876, [line('Technology &', 31, { weight: 800 }), line('development', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sm: { blocks: [block(2390, 1068, [line('S&M', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 })] },
    other_opex: { blocks: [block(2390, 1273, [line('Other', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 })] },
  };

  const labelsZh = {
    latam: { blocks: [
      block(391.5, 457, [line('$value', 39), line('同比 +61%', 28, { color: NOTE })]),
      block(307, 681, [line('拉丁美洲', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    africa_asia: { blocks: [
      block(391.5, 966, [line('$value', 39), line('同比 +36%', 28, { color: NOTE })]),
      block(307, 1055, [line('非洲', 40, { weight: 800 }), line('和亚洲', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
    ] },
    revenue: { blocks: [block(858, 503, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +55%', 28, { color: NOTE })])] },
    gross_profit: { blocks: [block(1325.5, 346, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 35%', 28, { color: NOTE }), line('同比 (4 个百分点)', 28, { color: NOTE })])] },
    cost_of_services: { blocks: [block(1325.5, 1155, [line('服务成本', 35, { weight: 800 }), line('$value', 35)])] },
    operating_profit: { blocks: [block(1793, 248, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 16%', 28, { color: NOTE }), line('同比 (5 个百分点)', 28, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1793, 757, [line('运营费用', 39, { weight: 800 }), line('$value', 38)])] },
    net_profit: { blocks: [block(2325, 310, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 12%', 28, { color: NOTE }), line('同比 (9 个百分点)', 28, { color: NOTE })], { anchor: 'start' })] },
    other_income: { blocks: [block(2145, 448, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    tax: { blocks: [block(2398, 528, [line('税费', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 })] },
    ga: { blocks: [block(2390, 687, [line('一般及行政', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 })] },
    technology_development: { blocks: [block(2460, 876, [line('技术与', 31, { weight: 800 }), line('开发', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sm: { blocks: [block(2390, 1068, [line('销售与营销', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 })] },
    other_opex: { blocks: [block(2390, 1273, [line('其他', 31, { weight: 800 }), line('$value', 31)], { anchor: 'start', lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dlocal-q1-fy26',
    name: 'dLocal · Q1 FY26',
    company: 'dLocal',
    meta: {
      company: 'dLocal',
      title: 'dLocal Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/dlocal-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2125,
      hidePeriodStamp: true,
      logoWidth: 555,
      logoHeight: 150,
      logoY: 254,
      logoViewBox: '0 0 555 150',
      logoSvg: dlocalLogoSvg,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        latam: { x: 356, y: 550, width: 71, height: 314 },
        africa_asia: { x: 356, y: 1058, width: 71, height: 85 },
        revenue: { x: 823, y: 646, width: 70, height: 402 },
        gross_profit: { x: 1290, y: 529, width: 71, height: 140 },
        cost_of_services: { x: 1290, y: 880, width: 71, height: 259 },
        operating_profit: { x: 1758, y: 434, width: 70, height: 61 },
        operating_expenses: { x: 1758, y: 657, width: 70, height: 78 },
        other_income: { x: 2110, y: 426, width: 70, height: 3 },
        net_profit: { x: 2224, y: 342, width: 71, height: 49 },
        tax: { x: 2224, y: 556, width: 71, height: 15 },
        ga: { x: 2224, y: 700, width: 71, height: 49 },
        technology_development: { x: 2224, y: 914, width: 71, height: 12 },
        sm: { x: 2224, y: 1099, width: 71, height: 10 },
        other_opex: { x: 2224, y: 1304, width: 71, height: 1 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'latam', col: 0, order: 0, type: 'source', label: 'LATAM', value: 263, notes: ['+61% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'africa_asia', col: 0, order: 1, type: 'source', label: ['Africa', '& Asia'], value: 73, notes: ['+36% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 336, notes: ['+55% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 119, notes: ['35% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_services', col: 2, order: 1, type: 'cost', label: ['Cost of', 'services'], value: 217 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 53, notes: ['16% margin', '(5pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 66 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 42, notes: ['12% margin', '(9pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 15 },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 43 },
      { id: 'technology_development', col: 5, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 12 },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 10 },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 1 },
    ],
    links: [
      { source: 'latam', target: 'revenue', value: 263, sourceWidth: 314, targetWidth: 315, y0: 707, y1: 803.5, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'africa_asia', target: 'revenue', value: 73, sourceWidth: 85, targetWidth: 87, y0: 1100.5, y1: 1004.5, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 119, sourceWidth: 143, targetWidth: 140, y0: 717.5, y1: 599, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_services', value: 217, sourceWidth: 259, targetWidth: 259, y0: 918.5, y1: 1009.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 53, sourceWidth: 65, targetWidth: 61, y0: 561.5, y1: 464.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 66, sourceWidth: 75, targetWidth: 78, y0: 631.5, y1: 696, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 42, sourceWidth: 49, targetWidth: 47, y0: 458.5, y1: 367.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 15, sourceWidth: 15, targetWidth: 15, y0: 487.5, y1: 563.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 4, sourceWidth: 3, targetWidth: 4, y0: 427.5, y1: 389, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'ga', value: 43, sourceWidth: 50, targetWidth: 49, y0: 682, y1: 724.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_development', value: 12, sourceWidth: 14, targetWidth: 12, y0: 714, y1: 920, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 10, sourceWidth: 12, targetWidth: 10, y0: 726, y1: 1104, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 1, sourceWidth: 2, targetWidth: 1, y0: 734, y1: 1304.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'dLocal · 2026 财年第一季度',
        meta: {
          title: 'dLocal 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        nodes: {
          latam: { label: '拉丁美洲', notes: ['同比 +61%'] },
          africa_asia: { label: ['非洲', '和亚洲'], notes: ['同比 +36%'] },
          revenue: { label: '收入', notes: ['同比 +55%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 35%', '同比 (4 个百分点)'] },
          cost_of_services: { label: '服务成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 (9 个百分点)'] },
          tax: { label: '税费' },
          ga: { label: '一般及行政' },
          technology_development: { label: '技术与开发' },
          sm: { label: '销售与营销' },
          other_opex: { label: '其他' },
        },
        layout: { labels: labelsZh },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();

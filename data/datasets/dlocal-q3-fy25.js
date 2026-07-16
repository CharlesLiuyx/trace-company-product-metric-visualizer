/* dLocal Q3 FY25 income statement ($M), reconstructed from the Build-bound
 * 2667x1500 reference in input/processing/dlocal-q3-fy25.png. */
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
    '149% +4p Q/Q',
    'TPV',
    '$10.4B',
    '+59% Y/Y',
    'TPV = Total Payment Volume'
  );
  const annotationsZh = kpiCards(
    ['净收入', '留存率'],
    '149%，环比 +4 个百分点',
    '总支付额（TPV）',
    '$10.4B',
    '同比 +59%',
    'TPV = 总支付额'
  );

  const labelsEn = {
    latam: { blocks: [
      block(391.5, 429, [line('$value', 39), line('+61% Y/Y', 28, { color: NOTE })]),
      block(307, 671, [line('LATAM', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    africa_asia: { blocks: [
      block(391.5, 974, [line('$value', 39), line('+19% Y/Y', 28, { color: NOTE })]),
      block(307, 1046, [line('Africa', 40, { weight: 800 }), line('& Asia', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
    ] },
    revenue: { blocks: [block(858, 498, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+52% Y/Y', 28, { color: NOTE })])] },
    gross_profit: { blocks: [block(1325.5, 352, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('37% margin', 28, { color: NOTE }), line('(6pp) Y/Y', 28, { color: NOTE })])] },
    cost_of_services: { blocks: [block(1325.5, 1164, [line('Cost of', 35, { weight: 800 }), line('services', 35, { weight: 800 }), line('$value', 35)])] },
    operating_profit: { blocks: [block(1793, 261, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('20% margin', 28, { color: NOTE }), line('(2pp) Y/Y', 28, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1794, 786, [line('Operating', 39, { weight: 800 }), line('expenses', 39, { weight: 800 }), line('$value', 38)])] },
    net_profit: { blocks: [block(2325, 342, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('18% margin', 28, { color: NOTE }), line('+4pp Y/Y', 28, { color: NOTE })], { anchor: 'start' })] },
    other_income: { blocks: [block(2139, 481, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    tax: { blocks: [block(2422, 570, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { anchor: 'middle', lineGap: 8 })] },
    ga: { blocks: [block(2422, 744, [line('G&A', 31, { weight: 800 }), line('$value', 31)], { anchor: 'middle', lineGap: 8 })] },
    technology_development: { blocks: [block(2422, 876, [line('Technology &', 31, { weight: 800 }), line('development', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sm: { blocks: [block(2422, 1050, [line('S&M', 31, { weight: 800 }), line('$value', 31)], { anchor: 'middle', lineGap: 8 })] },
    other_opex: { blocks: [block(2422, 1193, [line('Other', 31, { weight: 800 }), line('$value', 31)], { anchor: 'middle', lineGap: 8 })] },
  };

  const labelsZh = {
    latam: { blocks: [
      block(391.5, 429, [line('$value', 39), line('同比 +61%', 28, { color: NOTE })]),
      block(307, 671, [line('拉丁美洲', 40, { weight: 800 })], { anchor: 'end' }),
    ] },
    africa_asia: { blocks: [
      block(391.5, 974, [line('$value', 39), line('同比 +19%', 28, { color: NOTE })]),
      block(307, 1046, [line('非洲', 40, { weight: 800 }), line('和亚洲', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
    ] },
    revenue: { blocks: [block(858, 498, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +52%', 28, { color: NOTE })])] },
    gross_profit: { blocks: [block(1325.5, 352, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 37%', 28, { color: NOTE }), line('同比 (6 个百分点)', 28, { color: NOTE })])] },
    cost_of_services: { blocks: [block(1325.5, 1164, [line('服务成本', 35, { weight: 800 }), line('$value', 35)])] },
    operating_profit: { blocks: [block(1793, 261, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 20%', 28, { color: NOTE }), line('同比 (2 个百分点)', 28, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1794, 786, [line('运营费用', 39, { weight: 800 }), line('$value', 38)])] },
    net_profit: { blocks: [block(2325, 342, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 18%', 28, { color: NOTE }), line('同比 +4 个百分点', 28, { color: NOTE })], { anchor: 'start' })] },
    other_income: { blocks: [block(2139, 481, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    tax: { blocks: [block(2422, 570, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    ga: { blocks: [block(2422, 744, [line('一般及行政', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    technology_development: { blocks: [block(2422, 876, [line('技术与', 31, { weight: 800 }), line('开发', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    sm: { blocks: [block(2422, 1050, [line('销售与营销', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
    other_opex: { blocks: [block(2422, 1193, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dlocal-q3-fy25',
    name: 'dLocal · Q3 FY25',
    company: 'dLocal',
    meta: {
      company: 'dLocal',
      title: 'dLocal Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/dlocal-q3-fy25.png', width: 2667, height: 1500 },
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
        latam: { x: 356, y: 533, width: 71, height: 329 },
        africa_asia: { x: 356, y: 1078, width: 71, height: 66 },
        revenue: { x: 823, y: 644, width: 70, height: 398 },
        gross_profit: { x: 1289, y: 533, width: 72, height: 143 },
        cost_of_services: { x: 1289, y: 897, width: 72, height: 252 },
        operating_profit: { x: 1757, y: 442, width: 70, height: 77 },
        operating_expenses: { x: 1759, y: 709, width: 70, height: 65 },
        other_income: { x: 2102, y: 461, width: 70, height: 7 },
        net_profit: { x: 2223, y: 349, width: 71, height: 71 },
        tax: { x: 2223, y: 601, width: 71, height: 10 },
        ga: { x: 2223, y: 759, width: 71, height: 38 },
        technology_development: { x: 2223, y: 930, width: 71, height: 10 },
        sm: { x: 2223, y: 1083, width: 71, height: 10 },
        other_opex: { x: 2223, y: 1231, width: 71, height: 1 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'latam', col: 0, order: 0, type: 'source', label: 'LATAM', value: 234, notes: ['+61% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'africa_asia', col: 0, order: 1, type: 'source', label: ['Africa', '& Asia'], value: 48, notes: ['+19% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 283, notes: ['+52% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 103, notes: ['37% margin', '(6pp) Y/Y'] },
      { id: 'cost_of_services', col: 2, order: 1, type: 'cost', label: ['Cost of', 'services'], value: 179 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 56, notes: ['20% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 48 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 52, notes: ['18% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 9 },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 28 },
      { id: 'technology_development', col: 5, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 9 },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 8 },
      { id: 'other_opex', col: 5, order: 5, type: 'cost', label: 'Other', value: 2 },
    ],
    links: [
      { source: 'latam', target: 'revenue', value: 234, sourceWidth: 329, targetWidth: 331, y0: 697.5, y1: 809.5, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'africa_asia', target: 'revenue', value: 48, sourceWidth: 66, targetWidth: 67, y0: 1111, y1: 1008.5, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 103, sourceWidth: 145, targetWidth: 143, y0: 716.5, y1: 604.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_services', value: 179, sourceWidth: 253, targetWidth: 252, y0: 915.5, y1: 1023, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 56, sourceWidth: 78, targetWidth: 77, y0: 572, y1: 480.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 48, sourceWidth: 65, targetWidth: 65, y0: 643.5, y1: 741.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 52, sourceWidth: 66, targetWidth: 65, y0: 475, y1: 381.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 9, sourceWidth: 11, targetWidth: 10, y0: 513.5, y1: 606, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 6, sourceWidth: 7, targetWidth: 6, y0: 464.5, y1: 417, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'ga', value: 28, sourceWidth: 38, targetWidth: 38, y0: 728, y1: 778, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_development', value: 9, sourceWidth: 12, targetWidth: 10, y0: 753, y1: 935, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 8, sourceWidth: 11, targetWidth: 10, y0: 764.5, y1: 1088, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other_opex', value: 2, sourceWidth: 4, targetWidth: 1, y0: 772, y1: 1231.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'dLocal · 2025 财年第三季度',
        meta: {
          title: 'dLocal 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        nodes: {
          latam: { label: '拉丁美洲', notes: ['同比 +61%'] },
          africa_asia: { label: ['非洲', '和亚洲'], notes: ['同比 +19%'] },
          revenue: { label: '收入', notes: ['同比 +52%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 37%', '同比 (6 个百分点)'] },
          cost_of_services: { label: '服务成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 +4 个百分点'] },
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

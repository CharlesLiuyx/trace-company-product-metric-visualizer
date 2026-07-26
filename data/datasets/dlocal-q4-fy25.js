/* ====================================================================
 * dLocal - Q4 FY25 income statement ($M)
 * Fixed d3/SVG reconstruction measured from input/processed/dlocal-q4-fy25.png.
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

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2187"
      data-link-anchor-y="423">
      <path d="M2114 444H2184C2206 444 2203 392 2223 392"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2151" y="492" text-anchor="middle" font-size="31"
        font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2151" y="532" text-anchor="middle" font-size="31"
        font-weight="400" fill="${GREEN_LABEL}">$2M</text>
    </g>`;

  const annotationsEn =
    otherIncomeGuide(false) +
    kpiCards(
      ['Net Revenue', 'Retention'],
      '145% -4p Q/Q',
      'TPV',
      '$13.1B',
      '+70% Y/Y',
      'TPV = Total Payment Volume'
    );
  const annotationsZh =
    otherIncomeGuide(true) +
    kpiCards(
      ['净收入', '留存率'],
      '145%，环比 -4 个百分点',
      '总支付额（TPV）',
      '$13.1B',
      '同比 +70%',
      'TPV = 总支付额'
    );

  const labelsEn = {
    latam: {
      blocks: [
        block(392, 428, [line('$value', 39), line('+79% Y/Y', 28, { color: NOTE })]),
        block(307, 669, [line('LATAM', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    africa_asia: {
      blocks: [
        block(392, 959, [line('$value', 39), line('+23% Y/Y', 28, { color: NOTE })]),
        block(307, 1044, [line('Africa', 40, { weight: 800 }), line('& Asia', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
      ],
    },
    revenue: {
      blocks: [block(858, 504, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+65% Y/Y', 28, { color: NOTE })])],
    },
    gross_profit: {
      blocks: [block(1325, 338, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('34% margin', 28, { color: NOTE }), line('(7pp) Y/Y', 28, { color: NOTE })])],
    },
    cost_of_services: {
      blocks: [block(1325, 1145, [line('Cost of', 35, { weight: 800 }), line('services', 35, { weight: 800 }), line('$value', 35)])],
    },
    operating_profit: {
      blocks: [block(1793, 241, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('19% margin', 28, { color: NOTE }), line('(2pp) Y/Y', 28, { color: NOTE })])],
    },
    operating_expenses: {
      blocks: [block(1793, 751, [line('Operating', 39, { weight: 800 }), line('expenses', 39, { weight: 800 }), line('$value', 38)])],
    },
    other_income: { blocks: [] },
    net_profit: {
      blocks: [block(2325, 309, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('16% margin', 28, { color: NOTE }), line('+2pp Y/Y', 28, { color: NOTE })], { anchor: 'start' })],
    },
    tax: {
      blocks: [block(2423, 551, [line('Tax', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    ga: {
      blocks: [block(2423, 742, [line('G&A', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    technology_development: {
      blocks: [block(2423, 918, [line('Technology &', 31, { weight: 800 }), line('development', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    sm: {
      blocks: [block(2423, 1096, [line('S&M', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
  };

  const labelsZh = {
    latam: {
      blocks: [
        block(392, 428, [line('$value', 39), line('同比 +79%', 28, { color: NOTE })]),
        block(307, 669, [line('拉丁美洲', 40, { weight: 800 })], { anchor: 'end' }),
      ],
    },
    africa_asia: {
      blocks: [
        block(392, 959, [line('$value', 39), line('同比 +23%', 28, { color: NOTE })]),
        block(307, 1044, [line('非洲', 40, { weight: 800 }), line('和亚洲', 40, { weight: 800 })], { anchor: 'end', lineGap: 9 }),
      ],
    },
    revenue: {
      blocks: [block(858, 504, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +65%', 28, { color: NOTE })])],
    },
    gross_profit: {
      blocks: [block(1325, 338, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 34%', 28, { color: NOTE }), line('同比 (7 个百分点)', 28, { color: NOTE })])],
    },
    cost_of_services: {
      blocks: [block(1325, 1145, [line('服务成本', 35, { weight: 800 }), line('$value', 35)])],
    },
    operating_profit: {
      blocks: [block(1793, 241, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 19%', 28, { color: NOTE }), line('同比 (2 个百分点)', 28, { color: NOTE })])],
    },
    operating_expenses: {
      blocks: [block(1793, 751, [line('运营费用', 39, { weight: 800 }), line('$value', 38)])],
    },
    other_income: { blocks: [] },
    net_profit: {
      blocks: [block(2325, 309, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 16%', 28, { color: NOTE }), line('同比 +2 个百分点', 28, { color: NOTE })], { anchor: 'start' })],
    },
    tax: {
      blocks: [block(2423, 551, [line('税费', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    ga: {
      blocks: [block(2423, 742, [line('一般及行政', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    technology_development: {
      blocks: [block(2423, 918, [line('技术与', 31, { weight: 800 }), line('开发', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
    sm: {
      blocks: [block(2423, 1096, [line('销售与营销', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dlocal-q4-fy25',
    name: 'dLocal · Q4 FY25',
    company: 'dLocal',
    meta: {
      company: 'dLocal',
      title: 'dLocal Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/dlocal-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2125,
      hidePeriodStamp: true,
      logoWidth: 555,
      logoHeight: 150,
      logoY: 295,
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
      routes: {
        other_income: { x: 2114, y: 444, width: 0, height: 1 },
      },
      nodes: {
        latam: { x: 356, y: 530, width: 71, height: 319 },
        africa_asia: { x: 356, y: 1060, width: 71, height: 72 },
        revenue: { x: 823, y: 656, width: 70, height: 394 },
        gross_profit: { x: 1289, y: 525, width: 72, height: 134 },
        cost_of_services: { x: 1289, y: 872, width: 72, height: 258 },
        operating_profit: { x: 1757, y: 429, width: 70, height: 71 },
        operating_expenses: { x: 1757, y: 676, width: 70, height: 60 },
        net_profit: { x: 2223, y: 328, width: 71, height: 64 },
        tax: { x: 2223, y: 584, width: 71, height: 9 },
        ga: { x: 2223, y: 758, width: 71, height: 44 },
        technology_development: { x: 2223, y: 958, width: 71, height: 8 },
        sm: { x: 2223, y: 1133, width: 71, height: 5 },
      },
      labels: labelsEn,
    },
    nonNodeMetrics: [
      { id: 'other_income', representation: 'flow', label: 'Other', value: 2, valueText: '$2M', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'latam', col: 0, order: 0, type: 'source', label: 'LATAM', value: 274, notes: ['+79% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'africa_asia', col: 0, order: 1, type: 'source', label: ['Africa', '& Asia'], value: 64, notes: ['+23% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 338, notes: ['+65% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 116, notes: ['34% margin', '(7pp) Y/Y'] },
      { id: 'cost_of_services', col: 2, order: 1, type: 'cost', label: ['Cost of', 'services'], value: 222 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 63, notes: ['19% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 53 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 56, notes: ['16% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 9 },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 39 },
      { id: 'technology_development', col: 5, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 8 },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 6 },
    ],
    links: [
      { source: 'latam', target: 'revenue', value: 274, sourceWidth: 319, targetWidth: 321, y0: 689.5, y1: 816.5, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'africa_asia', target: 'revenue', value: 64, sourceWidth: 72, targetWidth: 73, y0: 1096, y1: 1013.5, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 116, sourceWidth: 135, targetWidth: 134, y0: 723.5, y1: 592, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_services', value: 222, sourceWidth: 259, targetWidth: 258, y0: 920.5, y1: 1001, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 63, sourceWidth: 74, targetWidth: 71, y0: 562, y1: 464.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 53, sourceWidth: 60, targetWidth: 60, y0: 629, y1: 706, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 54, sourceWidth: 62, targetWidth: 64, y0: 460, y1: 360, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 9, sourceWidth: 9, targetWidth: 9, y0: 495.5, y1: 588.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 2, sourceWidth: 2, targetWidth: 2, y0: 444, y1: 391, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'ga', value: 39, sourceWidth: 44, targetWidth: 44, y0: 698, y1: 780, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_development', value: 8, sourceWidth: 9, targetWidth: 8, y0: 724.5, y1: 962, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 6, sourceWidth: 7, targetWidth: 5, y0: 732.5, y1: 1135.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'dLocal · 2025 财年第四季度',
        meta: {
          title: 'dLocal 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        nonNodeMetrics: {
          other_income: { label: '其他' },
        },
        nodes: {
          latam: { label: '拉丁美洲', notes: ['同比 +79%'] },
          africa_asia: { label: ['非洲', '和亚洲'], notes: ['同比 +23%'] },
          revenue: { label: '收入', notes: ['同比 +65%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 34%', '同比 (7 个百分点)'] },
          cost_of_services: { label: '服务成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          ga: { label: '一般及行政' },
          technology_development: { label: '技术与开发' },
          sm: { label: '销售与营销' },
        },
        layout: { labels: labelsZh },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();

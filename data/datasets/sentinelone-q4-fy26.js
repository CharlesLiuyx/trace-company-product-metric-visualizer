/* SentinelOne Q4 FY26 income-statement Sankey, measured from the source PNG. */
(function () {
  const TITLE = '#155077';
  const PURPLE = '#6b0aea';
  const PURPLE_LABEL = '#6a0aea';
  const PURPLE_LINK = '#b48aed';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2446;

  const sentinelOneLogo = `
    <g transform="scale(1 1.09)">
      <g fill="${PURPLE_LABEL}">
        <path d="M116 7 89 34v102l27 20V67l14-13v116l26-20V54l14 13v89l27-20V34L170 7v110h-18V0h-18v117h-18V7Z"/>
      </g>
      <text x="0" y="240" font-family="Arial,sans-serif" font-size="84" font-weight="700" letter-spacing="-5" fill="#231f20">Sentinel</text>
      <text x="338" y="240" font-family="Arial,sans-serif" font-size="84" font-weight="300" letter-spacing="-5" fill="#231f20">One</text>
      <text x="484" y="197" font-family="Arial,sans-serif" font-size="18" fill="#231f20">™</text>
    </g>
  `;

  const card = (x, width, lines, sizes = []) => `
    <g>
      <rect x="${x}" y="1165" width="${width}" height="148" rx="30" fill="${PURPLE_LABEL}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${[1213, 1253, 1292][index]}" text-anchor="middle" font-size="${sizes[index] || (index === 0 ? 30 : 29)}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(64, 208, ['ARR', '$1,055M', '+23% Y/Y'])}
      ${card(286, 406, ['Customers &gt; $100K', '1,572', '+20% Y/Y'], [28, 29, 29])}
      <text x="117" y="1350" font-size="30" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(64, 208, ['ARR', '$1,055M', '同比 +23%'])}
      ${card(286, 406, ['$100K 以上客户', '1,572', '同比 +20%'], [27, 29, 29])}
      <text x="117" y="1350" font-size="30" font-weight="500" fill="${NOTE}">ARR = 年度经常性收入</text>
    </g>`;

  const labelsEn = {
    united_states: { blocks: [
      { x: 400, top: 485, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE }] },
      { x: 74, top: 641, anchor: 'start', lines: [{ text: 'United States', size: 40, weight: 800 }] },
    ] },
    international: { blocks: [
      { x: 400, top: 888, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+34% Y/Y', size: 29, weight: 400, color: NOTE }] },
      { x: 76, top: 1022, anchor: 'start', lines: [{ text: 'International', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 867, top: 550, anchor: 'middle', lineGap: 13, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1334, top: 403, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '74% margin', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1334, top: 1125, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1575, top: 1083, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'loss', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '(28%) margin', size: 29, weight: 400, color: NOTE }, { text: '+14pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1802, top: 533, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 534, anchor: 'middle', lineGap: 10, lines: [{ text: 'S&M', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '49% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(10pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 826, anchor: 'middle', lineGap: 10, lines: [{ text: 'R&D', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '32% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1049, anchor: 'middle', lineGap: 10, lines: [{ text: 'G&A', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '20% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 1258, anchor: 'middle', lineGap: 10, lines: [{ text: 'Restructuring', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }] }] },
  };

  const labelsZh = {
    united_states: { blocks: [
      { x: 400, top: 485, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +16%', size: 29, weight: 400, color: NOTE }] },
      { x: 74, top: 641, anchor: 'start', lines: [{ text: '美国', size: 40, weight: 800 }] },
    ] },
    international: { blocks: [
      { x: 400, top: 888, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +34%', size: 29, weight: 400, color: NOTE }] },
      { x: 76, top: 1022, anchor: 'start', lines: [{ text: '国际', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 867, top: 550, anchor: 'middle', lineGap: 13, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +23%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1334, top: 403, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 74%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1334, top: 1125, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800, color: RED_LABEL }, { text: '成本', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1575, top: 1083, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '利润率 (28%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +14 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1802, top: 533, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 534, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与市场', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 49%', size: 29, weight: 400, color: NOTE }, { text: '同比 (10 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 826, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 32%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1049, anchor: 'middle', lineGap: 10, lines: [{ text: '管理费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 20%', size: 29, weight: 400, color: NOTE }, { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    restructuring: { blocks: [{ x: RIGHT_LABEL_X, top: 1258, anchor: 'middle', lineGap: 10, lines: [{ text: '重组', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sentinelone-q4-fy26',
    name: 'SentinelOne · Q4 FY26',
    company: 'SentinelOne',
    meta: {
      company: 'SentinelOne',
      title: 'SentinelOne Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/sentinelone-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2500,
      periodX: 2427,
      periodY: 315,
      periodNoteY: 359,
      logoWidth: 504,
      logoHeight: 255,
      logoY: 240,
      logoViewBox: '0 0 520 255',
      logoSvg: sentinelOneLogo,
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
        source: { node: PURPLE, label: PURPLE_LABEL },
        hub: { node: PURPLE, label: PURPLE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        united_states: { x: 365, y: 585, width: 71, height: 168 },
        international: { x: 365, y: 989, width: 71, height: 112 },
        revenue: { x: 832, y: 698, width: 70, height: 280 },
        gross_profit: { x: 1299, y: 584, width: 71, height: 206 },
        cost_of_revenue: { x: 1299, y: 1029, width: 71, height: 72 },
        operating_loss: { x: 1539, y: 984, width: 71, height: 79 },
        operating_expenses: { x: 1767, y: 696, width: 70, height: 288 },
        sm: { x: 2233, y: 546, width: 71, height: 137 },
        rnd: { x: 2233, y: 834, width: 71, height: 89 },
        ga: { x: 2233, y: 1074, width: 71, height: 54 },
        restructuring: { x: 2233, y: 1279, width: 71, height: 2 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 155, notes: ['+16% Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 104, notes: ['+34% Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 259, notes: ['+23% Y/Y'], color: PURPLE, labelColor: PURPLE_LABEL, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 191, notes: ['74% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 68, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -73, notes: ['(28%) margin', '+14pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 264, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 127, notes: ['49% of revenue', '(10pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 83, notes: ['32% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 51, notes: ['20% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 3, type: 'cost', label: 'Restructuring', value: 3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 155, sourceWidth: 168, targetWidth: 168, y0: 669, y1: 782, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 104, sourceWidth: 112, targetWidth: 112, y0: 1045, y1: 922, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 191, sourceWidth: 206, targetWidth: 206, y0: 801, y1: 687, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 68, sourceWidth: 74, targetWidth: 72, y0: 941, y1: 1065, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 191, sourceWidth: 206, targetWidth: 207, y0: 687, y1: 799.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 73, sourceWidth: 79, targetWidth: 81, y0: 1024, y1: 943.5, sourceOrder: 0, targetOrder: 1, curve: { x0: 1610, x1: 1767, c1x: 1650, c1y: 1024, c2x: 1719, c2y: 943.5 } },
      { source: 'operating_expenses', target: 'sm', value: 127, sourceWidth: 137, targetWidth: 137, y0: 764.5, y1: 615, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 83, sourceWidth: 90, targetWidth: 89, y0: 878, y1: 879, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 51, sourceWidth: 59, targetWidth: 54, y0: 952.5, y1: 1101, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 3, sourceWidth: 2, targetWidth: 2, y0: 983, y1: 1280, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR'],
      zh: {
        name: 'SentinelOne · 2026 财年第四季度',
        meta: {
          title: 'SentinelOne 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 106,
          titleTextLength: 2200,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +16%'] },
          international: { label: '国际', notes: ['同比 +34%'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (28%)', '同比 +14 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 49%', '同比 (10 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 32%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 20%', '同比 (5 个百分点)'] },
          restructuring: { label: '重组' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

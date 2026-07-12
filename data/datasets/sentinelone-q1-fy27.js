/* SentinelOne Q1 FY27 income-statement Sankey, measured from the source PNG. */
(function () {
  const TITLE = '#16547d';
  const PURPLE = '#6800ef';
  const PURPLE_LINK = '#ab83e7';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008e50';
  const GREEN_LINK = '#9bcd99';
  const RED = '#d40000';
  const RED_LABEL = '#981500';
  const RED_LINK = '#df8585';
  const NOTE = '#686868';
  const RIGHT_LABEL_X = 2413;

  const sentinelOneLogo = `
    <g fill="${PURPLE}">
      <path d="M116 7 89 34v102l27 20V67l14-13v116l26-20V54l14 13v89l27-20V34L170 7v110h-18V0h-18v117h-18V7Z"/>
    </g>
    <text x="0" y="240" font-family="Arial,sans-serif" font-size="84" font-weight="700" letter-spacing="-5" fill="#201f20">Sentinel</text>
    <text x="338" y="240" font-family="Arial,sans-serif" font-size="84" font-weight="300" letter-spacing="-5" fill="#201f20">One</text>
    <text x="484" y="197" font-family="Arial,sans-serif" font-size="18" fill="#201f20">™</text>
  `;

  const card = (x, y, width, lines, sizes = []) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="177" rx="32" fill="${PURPLE}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${y + 62 + index * 39}" text-anchor="middle" font-size="${sizes[index] || (index === 0 ? 30 : 29)}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(64, 1132, 208, ['ARR', '$1,163M', '+23% Y/Y'])}
      ${card(286, 1132, 406, ['Customers &gt; $100K', '1,702', '+17% Y/Y'], [28, 29, 29])}
      <text x="117" y="1350" font-size="30" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(64, 1132, 208, ['ARR', '$1,163M', '同比 +23%'])}
      ${card(286, 1132, 406, ['$100K 以上客户', '1,702', '同比 +17%'], [27, 29, 29])}
      <text x="117" y="1350" font-size="30" font-weight="500" fill="${NOTE}">ARR = 年度经常性收入</text>
    </g>`;

  const zhLayoutLabels = {
    united_states: { blocks: [
      { x: 400, top: 479, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +18%', size: 29, weight: 400, color: NOTE }] },
      { x: 74, top: 634, anchor: 'start', lines: [{ text: '美国', size: 40, weight: 800 }] },
    ] },
    international: { blocks: [
      { x: 400, top: 914, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '同比 +25%', size: 29, weight: 400, color: NOTE }] },
      { x: 76, top: 1044, anchor: 'start', lines: [{ text: '国际', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 867, top: 538, anchor: 'middle', lineGap: 13, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +21%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1334, top: 385, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 72%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1334, top: 1135, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800, color: RED_LABEL }, { text: '成本', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_loss: { blocks: [{ x: 1570, top: 1024, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '亏损', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '利润率 (29%)', size: 29, weight: 400, color: NOTE }, { text: '同比 +9 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1801, top: 514, anchor: 'middle', lineGap: 12, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 493, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与市场', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 48%', size: 29, weight: 400, color: NOTE }, { text: '同比 (11 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 785, anchor: 'middle', lineGap: 10, lines: [{ text: '研发', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 35%', size: 29, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1081, anchor: 'middle', lineGap: 10, lines: [{ text: '管理费用', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 18%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sentinelone-q1-fy27',
    name: 'SentinelOne · Q1 FY27',
    company: 'SentinelOne',
    meta: {
      company: 'SentinelOne',
      title: 'SentinelOne Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/sentinelone-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2500,
      periodX: 2413,
      periodY: 305,
      periodNoteY: 349,
      logoWidth: 520,
      logoHeight: 255,
      logoY: 230,
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
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
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
        united_states: { x: 364, y: 572, width: 72, height: 166 },
        international: { x: 364, y: 1005, width: 72, height: 108 },
        revenue: { x: 830, y: 681, width: 73, height: 273 },
        gross_profit: { x: 1298, y: 564, width: 72, height: 195 },
        cost_of_revenue: { x: 1298, y: 1033, width: 72, height: 78 },
        operating_loss: { x: 1532, y: 951, width: 74, height: 80 },
        operating_expenses: { x: 1764, y: 678, width: 73, height: 273 },
        sm: { x: 2231, y: 490, width: 73, height: 131 },
        rnd: { x: 2231, y: 806, width: 73, height: 95 },
        ga: { x: 2231, y: 1102, width: 73, height: 50 },
      },
      labels: {
        united_states: { blocks: [
          { x: 400, top: 479, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 74, top: 634, anchor: 'start', lines: [{ text: 'United States', size: 40, weight: 800 }] },
        ] },
        international: { blocks: [
          { x: 400, top: 914, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 40, weight: 400 }, { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE }] },
          { x: 76, top: 1044, anchor: 'start', lines: [{ text: 'International', size: 40, weight: 800 }] },
        ] },
        revenue: { blocks: [{ x: 867, top: 538, anchor: 'middle', lineGap: 13, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1334, top: 385, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '72% margin', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1334, top: 1135, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
        operating_loss: { blocks: [{ x: 1570, top: 1024, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'loss', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }, { text: '(29%) margin', size: 29, weight: 400, color: NOTE }, { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1801, top: 514, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 493, anchor: 'middle', lineGap: 10, lines: [{ text: 'S&M', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '48% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(11pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 785, anchor: 'middle', lineGap: 10, lines: [{ text: 'R&D', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '35% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1081, anchor: 'middle', lineGap: 10, lines: [{ text: 'G&A', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '18% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 168, notes: ['+18% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 109, notes: ['+25% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 277, notes: ['+21% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 199, notes: ['72% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 78, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -80, notes: ['(29%) margin', '+9pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 278, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 132, notes: ['48% of revenue', '(11pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 96, notes: ['35% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 50, notes: ['18% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 168, sourceWidth: 166, targetWidth: 166, y0: 655, y1: 764, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 109, sourceWidth: 108, targetWidth: 107, y0: 1059, y1: 900.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 199, sourceWidth: 195, targetWidth: 195, y0: 778.5, y1: 661.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 78, sourceWidth: 78, targetWidth: 78, y0: 915, y1: 1072, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 199, sourceWidth: 195, targetWidth: 195, y0: 661.5, y1: 775.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 80, sourceWidth: 80, targetWidth: 80, y0: 991, y1: 911, sourceOrder: 0, targetOrder: 1, curve: { x0: 1606, x1: 1764, c1x: 1646, c1y: 991, c2x: 1716, c2y: 911 } },
      { source: 'operating_expenses', target: 'sm', value: 132, sourceWidth: 131, targetWidth: 131, y0: 743.5, y1: 555.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 96, sourceWidth: 95, targetWidth: 95, y0: 856.5, y1: 853.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 50, sourceWidth: 50, targetWidth: 50, y0: 926, y1: 1127, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR'],
      zh: {
        name: 'SentinelOne · 2027 财年第一季度',
        meta: {
          title: 'SentinelOne 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 106,
          titleTextLength: 2200,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +18%'] },
          international: { label: '国际', notes: ['同比 +25%'] },
          revenue: { label: '收入', notes: ['同比 +21%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (29%)', '同比 +9 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 48%', '同比 (11 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 35%', '同比 +3 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 18%', '同比 (3 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

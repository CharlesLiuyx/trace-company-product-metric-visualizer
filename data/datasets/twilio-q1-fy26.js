/* ====================================================================
 * Twilio - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/twilio-q1-fy26.png as a fixed
 * d3-sankey layout with a pure SVG logo and KPI annotation.
 * ==================================================================== */
(function () {
  const BLUE = '#001489';
  const BLUE_LINK = '#858ec2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const LOGO_RED = '#f22f46';
  const RIGHT_LABEL_X = 2490;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="32" fill="${BLUE}"/>
      ${lines.map((line) => `
        <text x="${x + width / 2}" y="${line.y}" text-anchor="middle"
          font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(169, 1149, 189, 157, [
        { text: 'DBNE', y: 1195, size: 32, weight: 800 },
        { text: '114%', y: 1239, size: 32, weight: 500 },
        { text: '+5pp Y/Y', y: 1281, size: 29, weight: 500 },
      ])}
      <text x="52" y="1351" font-size="30" font-weight="500" fill="${NOTE}">DBNE = Dollar Based Net Expansion</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(169, 1149, 189, 157, [
        { text: 'DBNE', y: 1195, size: 32, weight: 800 },
        { text: '114%', y: 1239, size: 32, weight: 500 },
        { text: '同比 +5 个百分点', y: 1281, size: 21, weight: 500 },
      ])}
      <text x="52" y="1351" font-size="30" font-weight="500" fill="${NOTE}">DBNE = 基于美元的净扩张率</text>
    </g>`;

  const enLabels = {
    united_states: { blocks: [
      { x: 449, top: 427, anchor: 'middle', lineGap: 10, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 210, top: 625, anchor: 'middle', lines: [{ text: 'United States', size: 40, weight: 800 }] },
    ] },
    international: { blocks: [
      { x: 449, top: 890, anchor: 'middle', lineGap: 10, lines: [
        { text: '$value', size: 39, weight: 400 },
        { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
      ] },
      { x: 210, top: 1039, anchor: 'middle', lines: [{ text: 'International', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 917, top: 478, anchor: 'middle', lineGap: 14, lines: [
      { text: 'Revenue', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1384, top: 335, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Gross profit', size: 38, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '49% margin', size: 29, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1386, top: 1130, anchor: 'middle', lineGap: 12, lines: [
      { text: 'Cost of', size: 34, weight: 800 },
      { text: 'revenue', size: 34, weight: 800 },
      { text: '$value', size: 33, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 1852, top: 230, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Operating profit', size: 38, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '8% margin', size: 29, weight: 400, color: NOTE },
      { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1853, top: 850, anchor: 'middle', lineGap: 12, lines: [
      { text: 'Operating', size: 38, weight: 800 },
      { text: 'expenses', size: 38, weight: 800 },
      { text: '$value', size: 36, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 280, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Net profit', size: 39, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '6% margin', size: 29, weight: 400, color: NOTE },
      { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 497, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Tax', size: 32, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
    ] }] },
    other: { blocks: [{ x: RIGHT_LABEL_X, top: 596, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Other', size: 32, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 798, anchor: 'middle', lineGap: 12, lines: [
      { text: 'R&D', size: 32, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '19% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1010, anchor: 'middle', lineGap: 12, lines: [
      { text: 'S&M', size: 32, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1224, anchor: 'middle', lineGap: 12, lines: [
      { text: 'G&A', size: 32, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
      { text: '7% of revenue', size: 29, weight: 400, color: NOTE },
      { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
    ] }] },
  };

  const zhLabels = {
    united_states: { blocks: [
      { x: 449, top: 427, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +20%', size: 29, weight: 400, color: NOTE }] },
      { x: 210, top: 625, anchor: 'middle', lines: [{ text: '美国', size: 40, weight: 800 }] },
    ] },
    international: { blocks: [
      { x: 449, top: 890, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +20%', size: 29, weight: 400, color: NOTE }] },
      { x: 210, top: 1039, anchor: 'middle', lines: [{ text: '国际', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 917, top: 478, anchor: 'middle', lineGap: 14, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +20%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1384, top: 335, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 49%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1386, top: 1130, anchor: 'middle', lineGap: 12, lines: [{ text: '收入', size: 34, weight: 800 }, { text: '成本', size: 34, weight: 800 }, { text: '$value', size: 33, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1852, top: 230, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 8%', size: 29, weight: 400, color: NOTE }, { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1853, top: 850, anchor: 'middle', lineGap: 12, lines: [{ text: '运营', size: 38, weight: 800 }, { text: '费用', size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 280, anchor: 'middle', lineGap: 10, lines: [{ text: '净利润', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 6%', size: 29, weight: 400, color: NOTE }, { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 497, anchor: 'middle', lineGap: 9, lines: [{ text: '税费', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    other: { blocks: [{ x: RIGHT_LABEL_X, top: 596, anchor: 'middle', lineGap: 9, lines: [{ text: '其他', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 798, anchor: 'middle', lineGap: 12, lines: [{ text: '研发', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 19%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 1010, anchor: 'middle', lineGap: 12, lines: [{ text: '销售与市场', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 15%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1224, anchor: 'middle', lineGap: 12, lines: [{ text: '管理费用', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 7%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'twilio-q1-fy26',
    name: 'Twilio · Q1 FY26',
    company: 'Twilio',
    meta: {
      company: 'Twilio',
      title: 'Twilio Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/twilio-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 199, titleSize: 126, titleWeight: 800, titleTextLength: 2110,
      hidePeriodStamp: true,
      logoWidth: 665, logoHeight: 150, logoY: 260, logoViewBox: '0 0 665 150',
      logoSvg: `
        <g fill="${LOGO_RED}">
          <circle cx="75" cy="75" r="69"/><circle cx="75" cy="75" r="50" fill="#f2f2f2"/>
          <circle cx="53" cy="53" r="15"/><circle cx="97" cy="53" r="15"/>
          <circle cx="53" cy="97" r="15"/><circle cx="97" cy="97" r="15"/>
          <text x="165" y="116" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800" textLength="476" lengthAdjust="spacingAndGlyphs">twilio</text>
        </g>`,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 0.275,
      nodes: {
        united_states: { x: 413, y: 523, width: 72, height: 246 },
        international: { x: 413, y: 991, width: 72, height: 138 },
        revenue: { x: 881, y: 626, width: 71, height: 387 },
        gross_profit: { x: 1348, y: 519, width: 71, height: 186 },
        cost_of_revenue: { x: 1348, y: 925, width: 71, height: 197 },
        operating_profit: { x: 1815, y: 409, width: 71, height: 29 },
        operating_expenses: { x: 1815, y: 674, width: 71, height: 159 },
        net_profit: { x: 2282, y: 333, width: 71, height: 23 },
        tax: { x: 2282, y: 529, width: 71, height: 3 },
        other: { x: 2282, y: 627, width: 71, height: 2 },
        rnd: { x: 2282, y: 808, width: 71, height: 71 },
        sm: { x: 2282, y: 1039, width: 71, height: 58 },
        ga: { x: 2282, y: 1235, width: 71, height: 27 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 899, notes: ['+20% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 508, notes: ['+20% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1407, notes: ['+20% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 684, notes: ['49% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 723, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 108, notes: ['8% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 577, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 90, notes: ['6% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 0, type: 'cost', label: 'Tax', value: 12, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 262, notes: ['19% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 211, notes: ['15% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 103, notes: ['7% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 899, sourceWidth: 246, targetWidth: 246, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 508, sourceWidth: 138, targetWidth: 141, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 684, sourceWidth: 189, targetWidth: 186, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 723, sourceWidth: 198, targetWidth: 197, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 108, sourceWidth: 29, targetWidth: 29, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 577, sourceWidth: 157, targetWidth: 159, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 90, sourceWidth: 24, targetWidth: 23, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 12, sourceWidth: 3, targetWidth: 3, sourceOrder: 1, targetOrder: 0, y0: 434, y1: 530, curve: { c1x: 1970, c1y: 434, c2x: 2150, c2y: 530 } },
      { source: 'operating_profit', target: 'other', value: 5, sourceWidth: 2, targetWidth: 2, sourceOrder: 2, targetOrder: 0, y0: 437, y1: 628, curve: { c1x: 1970, c1y: 437, c2x: 2150, c2y: 628 } },
      { source: 'operating_expenses', target: 'rnd', value: 262, sourceWidth: 72, targetWidth: 71, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 211, sourceWidth: 58, targetWidth: 58, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 103, sourceWidth: 28, targetWidth: 27, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['DBNE'],
      zh: {
        name: 'Twilio · 2026 财年第一季度',
        meta: { title: 'Twilio 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 1770 },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +20%'] }, international: { label: '国际', notes: ['同比 +20%'] }, revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 (1 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +6 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +5 个百分点'] }, tax: { label: '税费' }, other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 (3 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 15%', '同比 (3 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 7%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

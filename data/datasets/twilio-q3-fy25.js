/* Twilio Q3 FY25 income statement ($M), measured from the primary source. */
(function () {
  const BG = '#f2f2f2';
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
  const RIGHT_LABEL_X = 2487;

  const kpiCard = (x, y, width, height, lines) => `
    <g>${`<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="32" fill="${BLUE}"/>`}
      ${lines.map((line) => `<text x="${x + width / 2}" y="${line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${kpiCard(120, 1161, 190, 157, [
        { text: 'DBNE', y: 1206, size: 32, weight: 800 },
        { text: '109%', y: 1248, size: 32, weight: 500 },
        { text: zh ? '同比 +4 个百分点' : '+4pp Y/Y', y: 1289, size: zh ? 22 : 29, weight: 500 },
      ])}
      ${kpiCard(319, 1159, 214, 164, [
        { text: zh ? '客户数' : 'Customers', y: 1204, size: 32, weight: 800 },
        { text: '392K+', y: 1248, size: 32, weight: 500 },
        { text: zh ? '同比 +23%' : '+23% Y/Y', y: 1292, size: 29, weight: 500 },
      ])}
      <text x="340" y="1367" text-anchor="middle" font-size="30" font-weight="500" fill="${NOTE}">${zh ? 'DBNE = 基于美元的净扩张率' : 'DBNE = Dollar Based Net Expansion'}</text>
    </g>`;

  const block = (x, top, lines, lineGap = 10) => ({ x, top, anchor: 'middle', lineGap, lines });
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const terminal = (text, value, top, color) => [block(RIGHT_LABEL_X, top, [line(text, 32, 800), line(value, 31, 400)], 9)];

  const labels = (zh) => {
    const copy = zh ? {
      us: '美国', international: '国际', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      operating: '营业利润', expenses: ['运营', '费用'], net: '净利润', tax: '税项', other: '其他',
      rnd: '研发', sm: '销售与市场', ga: '管理费用', yoyUs: '同比 +13%', yoyIntl: '同比 +18%',
      yoyRevenue: '同比 +15%', grossMargin: '利润率 49%', grossYoy: '同比 (2 个百分点)',
      operatingMargin: '利润率 3%', operatingYoy: '同比 +3 个百分点', netMargin: '利润率 3%', netYoy: '同比 +4 个百分点',
      rndShare: '占收入 20%', rndYoy: '同比 (3 个百分点)', smShare: '占收入 17%', smYoy: '同比 (2 个百分点)', gaShare: '占收入 8%', gaYoy: '同比 (1 个百分点)',
    } : {
      us: 'United States', international: 'International', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'],
      operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', other: 'Other',
      rnd: 'R&D', sm: 'S&M', ga: 'G&A', yoyUs: '+13% Y/Y', yoyIntl: '+18% Y/Y',
      yoyRevenue: '+15% Y/Y', grossMargin: '49% margin', grossYoy: '(2pp) Y/Y',
      operatingMargin: '3% margin', operatingYoy: '+3pp Y/Y', netMargin: '3% margin', netYoy: '+4pp Y/Y',
      rndShare: '20% of revenue', rndYoy: '(3pp) Y/Y', smShare: '17% of revenue', smYoy: '(2pp) Y/Y', gaShare: '8% of revenue', gaYoy: '(1pp) Y/Y',
    };
    const source = (name, yoy, nameX, nameTop, valueTop) => [
      block(452, valueTop, [line('$value', 39), line(yoy, 29, 400, NOTE)]),
      block(nameX, nameTop, [line(name, 40, 800)]),
    ];
    const expense = (name, valueTop, share, yoy) => [block(RIGHT_LABEL_X, valueTop, [line(name, 32, 800), line('$value', 31), line(share, 29, 400, NOTE), line(yoy, 29, 400, NOTE)], 12)];
    return {
      united_states: { blocks: source(copy.us, copy.yoyUs, 215, 605, 414) },
      international: { blocks: source(copy.international, copy.yoyIntl, 223, 1036, 892) },
      revenue: { blocks: [block(910, 474, [line(copy.revenue, 40, 800), line('$value', 39), line(copy.yoyRevenue, 29, 400, NOTE)], 14)] },
      gross_profit: { blocks: [block(1387, 331, [line(copy.gross, 38, 800), line('$value', 39), line(copy.grossMargin, 29, 400, NOTE), line(copy.grossYoy, 29, 400, NOTE)])] },
      cost_of_revenue: { blocks: [block(1384, 1163, [line(copy.cost[0], 34, 800), line(copy.cost[1], 34, 800), line('$value', 33)], 12)] },
      operating_profit: { blocks: [block(1851, 232, [line(copy.operating, 38, 800), line('$value', 39), line(copy.operatingMargin, 29, 400, NOTE), line(copy.operatingYoy, 29, 400, NOTE)])] },
      operating_expenses: { blocks: [block(1845, 859, [line(copy.expenses[0], 38, 800), line(copy.expenses[1], 38, 800), line('$value', 36)], 12)] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 274, [line(copy.net, 39, 800), line('$value', 39), line(copy.netMargin, 29, 400, NOTE), line(copy.netYoy, 29, 400, NOTE)])] },
      tax: { blocks: [block(2199, 399, [line(copy.tax, 32, 800), line('$value', 31)], 9)] },
      other: { blocks: terminal(copy.other, '$value', 515, RED_LABEL) },
      rnd: { blocks: expense(copy.rnd, 820, copy.rndShare, copy.rndYoy) },
      sm: { blocks: expense(copy.sm, 1011, copy.smShare, copy.smYoy) },
      ga: { blocks: expense(copy.ga, 1202, copy.gaShare, copy.gaYoy) },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'twilio-q3-fy25',
    name: 'Twilio · Q3 FY25',
    company: 'Twilio',
    meta: {
      company: 'Twilio', title: 'Twilio Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Sep. 2025',
      currency: '$', unit: 'M', decimals: 0, hidePeriodStamp: true,
      referenceImage: { src: 'input/processed/twilio-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 199, titleSize: 126, titleWeight: 800, titleTextLength: 2110,
      logoWidth: 665, logoHeight: 150, logoY: 260, logoViewBox: '0 0 665 150',
      logoSvg: `<g fill="${LOGO_RED}"><circle cx="75" cy="75" r="69"/><circle cx="75" cy="75" r="50" fill="${BG}"/><circle cx="53" cy="53" r="15"/><circle cx="97" cy="53" r="15"/><circle cx="53" cy="97" r="15"/><circle cx="97" cy="97" r="15"/><text x="165" y="116" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800" textLength="476" lengthAdjust="spacingAndGlyphs">twilio</text></g>`,
    },
    render: {
      width: 2667, height: 1500, background: BG, nodeRadius: 0, interfaceAudit: { mode: 'error' },
      fontFamily: 'Noto Sans,Arial,sans-serif', valueFontFamily: 'Roboto,Arial,sans-serif', amountFontFamily: 'Roboto,Arial,sans-serif',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 0.312,
      nodes: {
        united_states: { x: 414, y: 514, width: 71, height: 259 }, international: { x: 414, y: 988, width: 71, height: 147 }, revenue: { x: 881, y: 623, width: 70, height: 406 },
        gross_profit: { x: 1348, y: 513, width: 71, height: 196 }, cost_of_revenue: { x: 1348, y: 931, width: 71, height: 209 },
        operating_profit: { x: 1818, y: 414, width: 70, height: 11 }, operating_expenses: { x: 1816, y: 649, width: 70, height: 184 },
        tax: { x: 2164, y: 381, width: 71, height: 4 }, net_profit: { x: 2282, y: 316, width: 71, height: 9 }, other: { x: 2282, y: 548, width: 71, height: 5 },
        rnd: { x: 2282, y: 826, width: 71, height: 81 }, sm: { x: 2282, y: 1024, width: 71, height: 68 }, ga: { x: 2282, y: 1222, width: 71, height: 31 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 830, notes: ['+13% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 470, notes: ['+18% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1300, notes: ['+15% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 632, notes: ['49% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 668, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 40, notes: ['3% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 591, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 0, type: 'profit', label: 'Tax', value: 5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 37, notes: ['3% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 262, notes: ['20% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 221, notes: ['17% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 108, notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'united_states', target: 'revenue', value: 830, sourceWidth: 259, targetWidth: 259, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 470, sourceWidth: 147, targetWidth: 147, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 632, sourceWidth: 196, targetWidth: 196, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 668, sourceWidth: 209, targetWidth: 209, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 40, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 591, sourceWidth: 184, targetWidth: 184, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 32, sourceWidth: 9, targetWidth: 7, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'tax', target: 'net_profit', value: 5, sourceWidth: 4, targetWidth: 2, sourceOrder: 0, targetOrder: 1, y0: 383, y1: 323.5, linkTint: GREEN_LINK, curve: { c1x: 2250, c1y: 383, c2x: 2250, c2y: 323.5 } },
      { source: 'operating_profit', target: 'other', value: 8, sourceWidth: 2, targetWidth: 5, sourceOrder: 1, targetOrder: 0, y0: 424, y1: 550.5, linkTint: RED_LINK, curve: { c1x: 1970, c1y: 424, c2x: 2150, c2y: 550.5 } },
      { source: 'operating_expenses', target: 'rnd', value: 262, sourceWidth: 82, targetWidth: 81, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 221, sourceWidth: 69, targetWidth: 68, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 108, sourceWidth: 33, targetWidth: 31, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['DBNE'],
      zh: {
        name: 'Twilio · 2025 财年第三季度',
        meta: { title: 'Twilio 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 9 月', titleTextLength: 1770 },
        annotationsSvg: annotations(true),
        nodes: {
          united_states: { label: '美国', notes: ['同比 +13%'] }, international: { label: '国际', notes: ['同比 +18%'] }, revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 (2 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 +3 个百分点'] }, operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 +4 个百分点'] }, tax: { label: '税项' }, other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 20%', '同比 (3 个百分点)'] }, sm: { label: '销售与市场', notes: ['占收入 17%', '同比 (2 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

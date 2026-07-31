/* Palantir Q2 FY25 income statement ($M), reconstructed from the Source. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const CARD = '#18191d';
  const RIGHT_X = 2443;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const palantirLogo = `
    <g transform="translate(-30 0)">
      <g transform="translate(3 5)" fill="none" stroke="${BLACK}" stroke-linejoin="round">
        <circle cx="64" cy="54" r="41" stroke-width="15"/>
        <path d="M19 109L64 129L109 109" stroke-width="14"/>
      </g>
      <text x="146" y="117" font-family="Arial,Helvetica,sans-serif" font-size="109"
        font-weight="400" fill="${BLACK}" textLength="445"
        lengthAdjust="spacingAndGlyphs">Palantir</text>
    </g>`;

  const annotations = (t) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="112" y="1154" width="189" height="157" rx="29" fill="${CARD}"/>
      <text x="206" y="1204" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.billings}</text>
      <text x="206" y="1246" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$1,102M</text>
      <text x="206" y="1288" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.billingsGrowth}</text>
      <rect x="313" y="1151" width="214" height="163" rx="29" fill="${CARD}"/>
      <text x="420" y="1204" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">DBNR</text>
      <text x="420" y="1246" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">128%</text>
      <text x="420" y="1288" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.dbnrGrowth}</text>
      <rect x="538" y="1151" width="214" height="163" rx="29" fill="${CARD}"/>
      <text x="645" y="1204" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="645" y="1246" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">849</text>
      <text x="645" y="1288" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.customersGrowth}</text>
      <text x="196" y="1352" text-anchor="start" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings', billingsGrowth: '+53% Y/Y', dbnrGrowth: '+14pp Y/Y',
    customers: 'Customers', customersGrowth: '+43% Y/Y', dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    billings: '账单额', billingsGrowth: '同比 +53%', dbnrGrowth: '同比 +14点',
    customers: '客户数', customersGrowth: '同比 +43%', dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    government: { blocks: [block(425, 441, [line('$value', 39), line('+49% Y/Y', 29, 400, NOTE)], 'middle', 10), block(331, 600, [line('Government', 40, 800)], 'end')] },
    commercial: { blocks: [block(454, 859, [line('$value', 39), line('+47% Y/Y', 29, 400, NOTE)], 'middle', 10), block(333, 992, [line('Commercial', 40, 800)], 'end')] },
    revenue: { blocks: [block(892, 520, [line('Revenue', 40, 800), line('$value', 39), line('+48% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1384, 349, [line('Gross profit', 40, 800), line('$value', 39), line('80% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1334, 1113, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1832, 250, [line('Operating profit', 40, 800), line('$value', 39), line('27% margin', 29, 400, NOTE), line('+11pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1821, 918, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2137, 222, [line('Interest', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(2176, 505, [line('Other', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2367, 331, [line('Net profit', 40, 800), line('$value', 39), line('33% margin', 29, 400, NOTE), line('+13pp Y/Y', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(2446, 600, [line('Tax', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(2461, 748, [line('S&M', 31, 800), line('$value', 30), line('24% of revenue', 29, 400, NOTE), line('(5pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(2461, 962, [line('G&A', 31, 800), line('$value', 30), line('16% of revenue', 29, 400, NOTE), line('(4pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2461, 1171, [line('R&D', 31, 800), line('$value', 30), line('13% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    government: { blocks: [block(425, 441, [line('$value', 39), line('同比 +49%', 29, 400, NOTE)]), block(331, 600, [line('政府', 36, 800)], 'end')] },
    commercial: { blocks: [block(454, 859, [line('$value', 39), line('同比 +47%', 29, 400, NOTE)]), block(333, 994, [line('商业', 36, 800)], 'end')] },
    revenue: { blocks: [block(892, 520, [line('收入', 40, 800), line('$value', 39), line('同比 +48%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1384, 349, [line('毛利润', 40, 800), line('$value', 39), line('利润率 80%', 29, 400, NOTE), line('同比 0 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1334, 1113, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1832, 250, [line('营业利润', 40, 800), line('$value', 39), line('利润率 27%', 29, 400, NOTE), line('同比 +11 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1821, 918, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2137, 222, [line('利息', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(2176, 505, [line('其他', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2367, 331, [line('净利润', 40, 800), line('$value', 39), line('利润率 33%', 29, 400, NOTE), line('同比 +13 个百分点', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(2446, 600, [line('税费', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(2461, 748, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 24%', 29, 400, NOTE), line('同比 (5 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(2461, 962, [line('管理费用', 31, 800), line('$value', 30), line('占收入 16%', 29, 400, NOTE), line('同比 (4 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2461, 1171, [line('研发', 31, 800), line('$value', 30), line('占收入 13%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q2-fy25', name: 'Palantir · Q2 FY25', company: 'Palantir',
    meta: {
      company: 'Palantir', title: 'Palantir Q2 FY25 Income Statement', period: 'Q2 FY25', periodNote: 'Ending Jun. 2025', hidePeriodStamp: true,
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2220,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 635, logoHeight: 158, logoY: 272, logoViewBox: '0 0 640 150', logoSvg: palantirLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error', fullFaceIds: ['revenue:left', 'gross_profit:right'] },
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        government: { x: 387, y: 535, width: 71, height: 178 }, commercial: { x: 387, y: 948, width: 71, height: 145 },
        revenue: { x: 854, y: 669, width: 70, height: 324 }, gross_profit: { x: 1321, y: 539, width: 71, height: 262 },
        cost_of_revenue: { x: 1321, y: 1031, width: 71, height: 60 }, operating_profit: { x: 1789, y: 440, width: 70, height: 85 },
        operating_expenses: { x: 1789, y: 719, width: 70, height: 174 }, interest: { x: 2136, y: 308, width: 70, height: 16 },
        other: { x: 2141, y: 488, width: 70, height: 2 }, net_profit: { x: 2255, y: 326, width: 71, height: 106 },
        tax: { x: 2255, y: 645, width: 71, height: 2 }, sm: { x: 2255, y: 747, width: 71, height: 77 },
        ga: { x: 2255, y: 967, width: 71, height: 51 }, rnd: { x: 2255, y: 1176, width: 71, height: 42 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 553, notes: ['+49% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 451, notes: ['+47% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1004, valueText: '$1,004M', notes: ['+48% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 811, notes: ['80% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 193, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 269, notes: ['27% margin', '+11pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 541, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 56, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 329, notes: ['33% margin', '+13pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4, valueText: '($4M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 244, valueText: '($244M)', notes: ['24% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 163, valueText: '($163M)', notes: ['16% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 135, valueText: '($135M)', notes: ['13% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 553, sourceWidth: 178, targetWidth: 179, y0: 624, y1: 758.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 451, sourceWidth: 145, targetWidth: 145, y0: 1020.5, y1: 920.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 811, sourceWidth: 263, targetWidth: 262, y0: 800.5, y1: 670, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 193, sourceWidth: 61, targetWidth: 60, y0: 962.5, y1: 1061, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 269, sourceWidth: 87, targetWidth: 85, y0: 582.5, y1: 482.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 541, sourceWidth: 175, targetWidth: 174, y0: 713.5, y1: 806, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 56, sourceWidth: 16, targetWidth: 18, y0: 316, y1: 335, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 269, sourceWidth: 83, targetWidth: 86, y0: 481.5, y1: 387, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 7, sourceWidth: 2, targetWidth: 2, y0: 489.5, y1: 431, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK, curve: { c1x: 2225, c1y: 489.5, c2x: 2230, c2y: 431 } },
      { source: 'operating_profit', target: 'tax', value: 4, sourceWidth: 2, targetWidth: 2, y0: 524, y1: 646, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 244, sourceWidth: 78, targetWidth: 77, y0: 758, y1: 785.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 163, sourceWidth: 52, targetWidth: 51, y0: 823, y1: 992.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 135, sourceWidth: 44, targetWidth: 42, y0: 871, y1: 1197, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: { zh: {
      name: 'Palantir · 2025 财年第二季度',
      meta: { title: 'Palantir 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 6 月', titleSize: 112, titleTextLength: 1880 },
      annotationsSvg: annotationsZh,
      nodes: {
        government: { label: '政府', notes: ['同比 +49%'] }, commercial: { label: '商业', notes: ['同比 +47%'] }, revenue: { label: '收入', notes: ['同比 +48%'] },
        gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 0 个百分点'] }, cost_of_revenue: { label: '收入成本' },
        operating_profit: { label: '营业利润', notes: ['利润率 27%', '同比 +11 个百分点'] }, operating_expenses: { label: '营业费用' },
        interest: { label: '利息' }, other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 33%', '同比 +13 个百分点'] }, tax: { label: '税费' },
        sm: { label: '销售与营销', notes: ['占收入 24%', '同比 (5 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 16%', '同比 (4 个百分点)'] },
        rnd: { label: '研发', notes: ['占收入 13%', '同比 (3 个百分点)'] },
      },
      layout: { labels: labelsZh },
    } },
  });
})();

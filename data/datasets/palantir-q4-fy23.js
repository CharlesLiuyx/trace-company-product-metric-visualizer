/* Palantir Q4 FY23 income statement ($M), reconstructed from the Source. */
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
  const RIGHT_X = 2462;
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
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="111" y="1181" width="191" height="164" rx="29" fill="${CARD}"/>
      <text x="207" y="1237" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.billings}</text>
      <text x="207" y="1279" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$605M</text>
      <text x="207" y="1321" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.billingsGrowth}</text>

      <rect x="313" y="1181" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="420" y="1237" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.dbnr}</text>
      <text x="420" y="1279" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">108%</text>
      <text x="420" y="1321" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.dbnrGrowth}</text>

      <rect x="538" y="1181" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="645" y="1237" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="645" y="1279" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">497</text>
      <text x="645" y="1321" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.customersGrowth}</text>

      <text x="196" y="1382" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings',
    billingsGrowth: '+56% Y/Y',
    dbnr: 'DBNR',
    dbnrGrowth: '(7pp) Y/Y',
    customers: 'Customers',
    customersGrowth: '+35% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    billings: '账单额',
    billingsGrowth: '同比 +56%',
    dbnr: '美元净留存',
    dbnrGrowth: '同比 (7点)',
    customers: '客户数',
    customersGrowth: '同比 +35%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    government: { blocks: [
      block(416, 428, [line('$value', 39), line('+11% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(312, 591, [line('Government', 40, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(416, 803, [line('$value', 39), line('+32% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(305, 958, [line('Commercial', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(884, 494, [line('Revenue', 40, 800), line('$value', 39), line('+20% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 400, [line('Gross profit', 40, 800), line('$value', 39), line('82% margin', 29, 400, NOTE), line('+3pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1354, 1088, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1814, 305, [line('Operating profit', 40, 800), line('$value', 39), line('11% margin', 29, 400, NOTE), line('+14pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1813, 971, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2158, 296, [line('Interest', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2360, 344, [line('Net profit', 40, 800), line('$value', 39), line('16% margin', 29, 400, NOTE), line('+9pp Y/Y', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(RIGHT_X, 540, [line('Tax', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(RIGHT_X, 640, [line('Other', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(RIGHT_X, 821, [line('S&M', 31, 800), line('$value', 30), line('32% of revenue', 29, 400, NOTE), line('(5pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 1038, [line('G&A', 31, 800), line('$value', 30), line('21% of revenue', 29, 400, NOTE), line('(9pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1235, [line('R&D', 31, 800), line('$value', 30), line('18% of revenue', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    government: { blocks: [block(416, 428, [line('$value', 39), line('同比 +11%', 29, 400, NOTE)]), block(312, 591, [line('政府', 36, 800)], 'end')] },
    commercial: { blocks: [block(416, 803, [line('$value', 39), line('同比 +32%', 29, 400, NOTE)]), block(305, 958, [line('商业', 36, 800)], 'end')] },
    revenue: { blocks: [block(884, 494, [line('收入', 40, 800), line('$value', 39), line('同比 +20%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 400, [line('毛利润', 40, 800), line('$value', 39), line('利润率 82%', 29, 400, NOTE), line('同比 +3 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1354, 1088, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1814, 305, [line('营业利润', 40, 800), line('$value', 39), line('利润率 11%', 29, 400, NOTE), line('同比 +14 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1813, 971, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2158, 296, [line('利息', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2360, 344, [line('净利润', 40, 800), line('$value', 39), line('利润率 16%', 29, 400, NOTE), line('同比 +9 个百分点', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(RIGHT_X, 540, [line('税费', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(RIGHT_X, 640, [line('其他', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(RIGHT_X, 821, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 32%', 29, 400, NOTE), line('同比 (5 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 1038, [line('管理费用', 31, 800), line('$value', 30), line('占收入 21%', 29, 400, NOTE), line('同比 (9 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1235, [line('研发', 31, 800), line('$value', 30), line('占收入 18%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q4-fy23',
    name: 'Palantir · Q4 FY23',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2220,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 635,
      logoHeight: 158,
      logoY: 243,
      logoViewBox: '0 0 640 150',
      logoSvg: palantirLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: ['revenue:left', 'gross_profit:right'],
      },
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 0.535,
      nodes: {
        government: { x: 381, y: 526, width: 71, height: 174 },
        commercial: { x: 381, y: 907, width: 71, height: 150 },
        revenue: { x: 848, y: 649, width: 70, height: 326 },
        gross_profit: { x: 1317, y: 586, width: 72, height: 267 },
        cost_of_revenue: { x: 1320, y: 1010, width: 71, height: 57 },
        operating_profit: { x: 1780, y: 488, width: 70, height: 33 },
        operating_expenses: { x: 1778, y: 717, width: 70, height: 232 },
        interest: { x: 2130, y: 389, width: 70, height: 22 },
        net_profit: { x: 2249, y: 410, width: 71, height: 50 },
        tax: { x: 2249, y: 580, width: 71, height: 3 },
        other: { x: 2249, y: 671, width: 71, height: 2 },
        sm: { x: 2249, y: 813, width: 71, height: 105 },
        ga: { x: 2249, y: 1042, width: 71, height: 67 },
        rnd: { x: 2249, y: 1253, width: 71, height: 56 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 324, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 284, notes: ['+32% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 608, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 500, notes: ['82% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 109, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 66, notes: ['11% margin', '+14pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 434, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 44, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 97, notes: ['16% margin', '+9pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 9, valueText: '($9M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 4, valueText: '($4M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 197, valueText: '($197M)', notes: ['32% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 127, valueText: '($127M)', notes: ['21% of revenue', '(9pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 109, valueText: '($109M)', notes: ['18% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 324, sourceWidth: 174, targetWidth: 175, y0: 613, y1: 736.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 284, sourceWidth: 150, targetWidth: 151, y0: 982, y1: 899.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 500, sourceWidth: 269, targetWidth: 267, y0: 783.5, y1: 719.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 109, sourceWidth: 57, targetWidth: 57, y0: 946.5, y1: 1038.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 66, sourceWidth: 34, targetWidth: 33, y0: 603, y1: 504.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 434, sourceWidth: 233, targetWidth: 232, y0: 736.5, y1: 833, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 44, sourceWidth: 22, targetWidth: 22, y0: 400, y1: 421, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 66, sourceWidth: 28, targetWidth: 28, y0: 502, y1: 446, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 9, sourceWidth: 3, targetWidth: 3, y0: 517.5, y1: 581.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 4, sourceWidth: 2, targetWidth: 2, y0: 520, y1: 672, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 197, sourceWidth: 107, targetWidth: 105, y0: 770.5, y1: 865.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 127, sourceWidth: 68, targetWidth: 67, y0: 858, y1: 1075.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 109, sourceWidth: 57, targetWidth: 56, y0: 920.5, y1: 1281, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2023 财年第四季度',
        meta: {
          title: 'Palantir 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +11%'] },
          commercial: { label: '商业', notes: ['同比 +32%'] },
          revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +14 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 +9 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sm: { label: '销售与营销', notes: ['占收入 32%', '同比 (5 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 21%', '同比 (9 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 +2 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* Palantir Q2 FY23 income statement ($M), reconstructed from the Source. */
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
      <rect x="110" y="1182" width="193" height="161" rx="29" fill="${CARD}"/>
      <text x="206" y="1233" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.billings}</text>
      <text x="206" y="1275" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$603M</text>
      <text x="206" y="1317" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.billingsGrowth}</text>

      <rect x="311" y="1179" width="218" height="168" rx="29" fill="${CARD}"/>
      <text x="420" y="1233" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">DBNR</text>
      <text x="420" y="1275" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">110%</text>
      <text x="420" y="1317" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.dbnrGrowth}</text>

      <rect x="536" y="1179" width="218" height="168" rx="29" fill="${CARD}"/>
      <text x="645" y="1233" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="645" y="1275" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">421</text>
      <text x="645" y="1317" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.customersGrowth}</text>

      <text x="198" y="1384" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings',
    billingsGrowth: '+52% Y/Y',
    dbnrGrowth: '(9pp) Y/Y',
    customers: 'Customers',
    customersGrowth: '+38% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    billings: '账单额',
    billingsGrowth: '同比 +52%',
    dbnrGrowth: '同比 (9点)',
    customers: '客户数',
    customersGrowth: '同比 +38%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    government: { blocks: [
      block(412, 463, [line('$value', 39), line('+15% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(304, 617, [line('Government', 40, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(412, 846, [line('$value', 39), line('+10% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(304, 982, [line('Commercial', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(883, 534, [line('Revenue', 40, 800), line('$value', 39), line('+13% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1346, 446, [line('Gross profit', 40, 800), line('$value', 39), line('80% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1348, 1031, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1808, 315, [line('Operating profit', 40, 800), line('$value', 39), line('2% margin', 29, 400, NOTE), line('+11pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1815, 959, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2128, 231, [line('Interest', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2364, 318, [line('Net profit', 40, 800), line('$value', 39), line('5% margin', 29, 400, NOTE), line('+43pp Y/Y', 29, 400, NOTE)], 'start')] },
    other: { blocks: [block(2460, 567, [line('Other', 31, 800), line('$value', 30)])] },
    tax: { blocks: [block(2462, 667, [line('Tax', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(2461, 822, [line('S&M', 31, 800), line('$value', 30), line('35% of revenue', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(2464, 1030, [line('G&A', 31, 800), line('$value', 30), line('25% of revenue', 29, 400, NOTE), line('(8pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2468, 1227, [line('R&D', 31, 800), line('$value', 30), line('19% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    government: { blocks: [block(412, 463, [line('$value', 39), line('同比 +15%', 29, 400, NOTE)]), block(304, 617, [line('政府', 36, 800)], 'end')] },
    commercial: { blocks: [block(412, 846, [line('$value', 39), line('同比 +10%', 29, 400, NOTE)]), block(304, 982, [line('商业', 36, 800)], 'end')] },
    revenue: { blocks: [block(883, 534, [line('收入', 40, 800), line('$value', 39), line('同比 +13%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1346, 446, [line('毛利润', 40, 800), line('$value', 39), line('利润率 80%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1348, 1031, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1808, 315, [line('营业利润', 40, 800), line('$value', 39), line('利润率 2%', 29, 400, NOTE), line('同比 +11 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1815, 959, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2128, 231, [line('利息', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2364, 318, [line('净利润', 40, 800), line('$value', 39), line('利润率 5%', 29, 400, NOTE), line('同比 +43 个百分点', 29, 400, NOTE)], 'start')] },
    other: { blocks: [block(2460, 567, [line('其他', 31, 800), line('$value', 30)])] },
    tax: { blocks: [block(2462, 667, [line('税费', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(2461, 822, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 35%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(2464, 1030, [line('管理费用', 31, 800), line('$value', 30), line('占收入 25%', 29, 400, NOTE), line('同比 (8 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2468, 1227, [line('研发', 31, 800), line('$value', 30), line('占收入 19%', 29, 400, NOTE), line('同比 (0 个百分点)', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q2-fy23',
    name: 'Palantir · Q2 FY23',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q2-fy23.png', width: 2667, height: 1500 },
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
      logoY: 272,
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
      interfaceAudit: { mode: 'error' },
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
      scale: 1,
      nodes: {
        government: { x: 381, y: 565, width: 71, height: 145 },
        commercial: { x: 381, y: 949, width: 71, height: 111 },
        revenue: { x: 848, y: 686, width: 70, height: 261 },
        gross_profit: { x: 1310, y: 635, width: 71, height: 207 },
        cost_of_revenue: { x: 1312, y: 968, width: 72, height: 52 },
        operating_profit: { x: 1773, y: 509, width: 70, height: 2 },
        operating_expenses: { x: 1780, y: 744, width: 70, height: 201 },
        interest: { x: 2093, y: 325, width: 70, height: 12 },
        net_profit: { x: 2249, y: 402, width: 71, height: 12 },
        other: { x: 2249, y: 618, width: 71, height: 2 },
        tax: { x: 2249, y: 718, width: 71, height: 2 },
        sm: { x: 2249, y: 820, width: 71, height: 88 },
        ga: { x: 2249, y: 1033, width: 71, height: 64 },
        rnd: { x: 2249, y: 1243, width: 71, height: 48 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 302, notes: ['+15% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 232, notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 533, notes: ['+13% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 426, notes: ['80% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 107, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 10, notes: ['2% margin', '+11pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 416, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 29, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 28, notes: ['5% margin', '+43pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 184, notes: ['35% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 133, notes: ['25% of revenue', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 100, notes: ['19% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 302, sourceWidth: 145, targetWidth: 148, y0: 637.5, y1: 760, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 232, sourceWidth: 111, targetWidth: 113, y0: 1004.5, y1: 890.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 426, sourceWidth: 208, targetWidth: 207, y0: 790, y1: 738.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 107, sourceWidth: 53, targetWidth: 52, y0: 920.5, y1: 994, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 10, sourceWidth: 5, targetWidth: 2, y0: 637.5, y1: 510, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 416, sourceWidth: 202, targetWidth: 201, y0: 741, y1: 844.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 29, sourceWidth: 12, targetWidth: 12, y0: 331, y1: 408, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 10, sourceWidth: 2, targetWidth: 4, y0: 510, y1: 410, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 9, sourceWidth: 2, targetWidth: 2, y0: 510, y1: 619, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2, sourceWidth: 2, targetWidth: 2, y0: 510, y1: 719, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 184, sourceWidth: 89, targetWidth: 88, y0: 788.5, y1: 864, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 133, sourceWidth: 64, targetWidth: 64, y0: 865, y1: 1065, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 100, sourceWidth: 48, targetWidth: 48, y0: 921, y1: 1267, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2023 财年第二季度',
        meta: {
          title: 'Palantir 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +15%'] },
          commercial: { label: '商业', notes: ['同比 +10%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 +11 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +43 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 35%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 25%', '同比 (8 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

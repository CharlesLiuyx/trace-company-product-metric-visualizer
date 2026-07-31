/* Palantir Q3 FY24 income statement ($M), measured from the native Source. */
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
      <rect x="111" y="1151" width="191" height="163" rx="29" fill="${CARD}"/>
      <text x="206.5" y="1206" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.billings}</text>
      <text x="206.5" y="1248" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$823M</text>
      <text x="206.5" y="1290" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.billingsGrowth}</text>

      <rect x="313" y="1151" width="215" height="163" rx="29" fill="${CARD}"/>
      <text x="420.5" y="1206" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">DBNR</text>
      <text x="420.5" y="1248" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">118%</text>
      <text x="420.5" y="1290" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.dbnrGrowth}</text>

      <rect x="538" y="1151" width="214" height="163" rx="29" fill="${CARD}"/>
      <text x="645" y="1206" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="645" y="1248" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">629</text>
      <text x="645" y="1290" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.customersGrowth}</text>

      <text x="196" y="1350" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings',
    billingsGrowth: '+50% Y/Y',
    dbnrGrowth: '+11pp Y/Y',
    customers: 'Customers',
    customersGrowth: '+39% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    billings: '账单额',
    billingsGrowth: '同比 +50%',
    dbnrGrowth: '同比 +11点',
    customers: '客户数',
    customersGrowth: '同比 +39%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    government: { blocks: [
      block(422, 470, [line('$value', 39), line('+33% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(308, 640, [line('Government', 40, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(426, 852, [line('$value', 39), line('+27% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(301, 1001, [line('Commercial', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(884, 512, [line('Revenue', 40, 800), line('$value', 39), line('+30% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 382, [line('Gross profit', 40, 800), line('$value', 39), line('80% margin', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1354, 1097, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1821, 291, [line('Operating profit', 40, 800), line('$value', 39), line('16% margin', 29, 400, NOTE), line('+8pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1819, 959, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2181, 500, [line('Interest', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(2457, 566, [line('Other', 31, 800), line('$value', 30)])] },
    tax: { blocks: [block(2458, 680, [line('Tax', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(2458, 807, [line('S&M', 31, 800), line('$value', 30), line('29% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(2463, 994, [line('G&A', 31, 800), line('$value', 30), line('19% of revenue', 29, 400, NOTE), line('(4pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2465, 1179, [line('R&D', 31, 800), line('$value', 30), line('16% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)])] },
    net_profit: { blocks: [block(2350, 355, [line('Net profit', 40, 800), line('$value', 39), line('21% margin', 29, 400, NOTE), line('+7pp Y/Y', 29, 400, NOTE)], 'start')] },
  };

  const labelsZh = {
    government: { blocks: [block(422, 470, [line('$value', 39), line('同比 +33%', 29, 400, NOTE)]), block(308, 640, [line('政府', 36, 800)], 'end')] },
    commercial: { blocks: [block(426, 852, [line('$value', 39), line('同比 +27%', 29, 400, NOTE)]), block(301, 1001, [line('商业', 36, 800)], 'end')] },
    revenue: { blocks: [block(884, 512, [line('收入', 40, 800), line('$value', 39), line('同比 +30%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 382, [line('毛利润', 40, 800), line('$value', 39), line('利润率 80%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1354, 1097, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1821, 291, [line('营业利润', 40, 800), line('$value', 39), line('利润率 16%', 29, 400, NOTE), line('同比 +8 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1819, 959, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2181, 500, [line('利息', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(2457, 566, [line('其他', 31, 800), line('$value', 30)])] },
    tax: { blocks: [block(2458, 680, [line('税费', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(2458, 807, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 29%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(2463, 994, [line('管理费用', 31, 800), line('$value', 30), line('占收入 19%', 29, 400, NOTE), line('同比 (4 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(2465, 1179, [line('研发', 31, 800), line('$value', 30), line('占收入 16%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)])] },
    net_profit: { blocks: [block(2350, 355, [line('净利润', 40, 800), line('$value', 39), line('利润率 21%', 29, 400, NOTE), line('同比 +7 个百分点', 29, 400, NOTE)], 'start')] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q3-fy24',
    name: 'Palantir · Q3 FY24',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q3-fy24.png', width: 2667, height: 1500 },
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
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: ['revenue:left', 'gross_profit:left'],
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
      scale: 0.439,
      nodes: {
        government: { x: 384, y: 572, width: 71, height: 178 },
        commercial: { x: 384, y: 952, width: 71, height: 139 },
        revenue: { x: 851, y: 662, width: 70, height: 319 },
        gross_profit: { x: 1318, y: 571, width: 71, height: 254 },
        cost_of_revenue: { x: 1320, y: 1021, width: 72, height: 63 },
        operating_profit: { x: 1786, y: 477, width: 70, height: 47 },
        operating_expenses: { x: 1783, y: 737, width: 70, height: 204 },
        interest: { x: 2146, y: 467, width: 70, height: 21 },
        net_profit: { x: 2252, y: 387, width: 71, height: 65 },
        other: { x: 2252, y: 617, width: 71, height: 2 },
        tax: { x: 2252, y: 718, width: 71, height: 2 },
        sm: { x: 2252, y: 800, width: 71, height: 90 },
        ga: { x: 2252, y: 1008, width: 71, height: 61 },
        rnd: { x: 2252, y: 1195, width: 71, height: 50 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 408, notes: ['+33% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 317, notes: ['+27% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 726, notes: ['+30% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 579, notes: ['80% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 147, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 113, notes: ['16% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 466, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 52, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 149, notes: ['21% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 8, valueText: '($8M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 8, valueText: '($8M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 209, valueText: '($209M)', notes: ['29% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 139, valueText: '($139M)', notes: ['19% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 118, valueText: '($118M)', notes: ['16% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 408, sourceWidth: 178, targetWidth: 179, y0: 661, y1: 751.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 317, sourceWidth: 139, targetWidth: 140, y0: 1021.5, y1: 911, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 579, sourceWidth: 255, targetWidth: 254, y0: 789.5, y1: 698, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 147, sourceWidth: 64, targetWidth: 63, y0: 949, y1: 1052.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 113, width: 47, y0: 594.5, y1: 500.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 466, sourceWidth: 207, targetWidth: 204, y0: 721.5, y1: 839, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 97, sourceWidth: 40, targetWidth: 42, y0: 497, y1: 408, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'interest', target: 'net_profit', value: 52, sourceWidth: 21, targetWidth: 23, y0: 477.5, y1: 440.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 8, sourceWidth: 4, targetWidth: 2, y0: 519, y1: 618, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 8, sourceWidth: 3, targetWidth: 2, y0: 522.5, y1: 719, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 209, sourceWidth: 91, targetWidth: 90, y0: 782.5, y1: 845, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 139, sourceWidth: 60, targetWidth: 61, y0: 858, y1: 1038.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 118, sourceWidth: 53, targetWidth: 50, y0: 914.5, y1: 1220, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2024 财年第三季度',
        meta: {
          title: 'Palantir 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +33%'] },
          commercial: { label: '商业', notes: ['同比 +27%'] },
          revenue: { label: '收入', notes: ['同比 +30%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 +8 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +7 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 29%', '同比 (3 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 19%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

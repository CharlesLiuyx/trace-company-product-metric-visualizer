/* Palantir Q1 FY25 income statement ($M), reconstructed from the Source. */
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
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="109" y="1150" width="194" height="165" rx="29" fill="${CARD}"/>
      <text x="206" y="1207" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.billings}</text>
      <text x="206" y="1249" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$905M</text>
      <text x="206" y="1291" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.billingsGrowth}</text>

      <rect x="312" y="1150" width="216" height="165" rx="29" fill="${CARD}"/>
      <text x="420" y="1207" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">DBNR</text>
      <text x="420" y="1249" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">124%</text>
      <text x="420" y="1291" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.dbnrGrowth}</text>

      <rect x="537" y="1150" width="216" height="165" rx="29" fill="${CARD}"/>
      <text x="645" y="1207" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="645" y="1249" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">769</text>
      <text x="645" y="1291" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.customersGrowth}</text>

      <text x="227" y="1357" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings',
    billingsGrowth: '+45% Y/Y',
    dbnrGrowth: '+13pp Y/Y',
    customers: 'Customers',
    customersGrowth: '+39% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    billings: '账单额',
    billingsGrowth: '同比 +45%',
    dbnrGrowth: '同比 +13点',
    customers: '客户数',
    customersGrowth: '同比 +39%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    government: { blocks: [
      block(420, 448, [line('$value', 39), line('+45% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(335, 613, [line('Government', 40, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(420, 882, [line('$value', 39), line('+33% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(335, 1036, [line('Commercial', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(887, 526, [line('Revenue', 40, 800), line('$value', 39), line('+39% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 368, [line('Gross profit', 40, 800), line('$value', 39), line('80% margin', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1359, 1146, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1821, 260, [line('Operating profit', 40, 800), line('$value', 39), line('20% margin', 29, 400, NOTE), line('+7pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1821, 915, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2161, 213, [line('Interest', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2350, 308, [line('Net profit', 40, 800), line('$value', 39), line('25% margin', 29, 400, NOTE), line('+8pp Y/Y', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(RIGHT_X, 500, [line('Tax', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(2449, 596, [line('Other', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(RIGHT_X, 754, [line('S&M', 31, 800), line('$value', 30), line('27% of revenue', 29, 400, NOTE), line('(4pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 979, [line('G&A', 31, 800), line('$value', 30), line('19% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1191, [line('R&D', 31, 800), line('$value', 30), line('15% of revenue', 29, 400, NOTE), line('(2pp) Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    government: { blocks: [block(420, 448, [line('$value', 39), line('同比 +45%', 29, 400, NOTE)], 'middle', 10), block(335, 613, [line('政府', 36, 800)], 'end')] },
    commercial: { blocks: [block(420, 882, [line('$value', 39), line('同比 +33%', 29, 400, NOTE)], 'middle', 10), block(335, 1036, [line('商业', 36, 800)], 'end')] },
    revenue: { blocks: [block(887, 526, [line('收入', 40, 800), line('$value', 39), line('同比 +39%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 368, [line('毛利润', 40, 800), line('$value', 39), line('利润率 80%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1359, 1146, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1821, 260, [line('营业利润', 40, 800), line('$value', 39), line('利润率 20%', 29, 400, NOTE), line('同比 +7 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1821, 915, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2161, 213, [line('利息', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2350, 308, [line('净利润', 40, 800), line('$value', 39), line('利润率 25%', 29, 400, NOTE), line('同比 +8 个百分点', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(RIGHT_X, 500, [line('税费', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(2449, 596, [line('其他', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(RIGHT_X, 754, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 27%', 29, 400, NOTE), line('同比 (4 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 979, [line('管理费用', 31, 800), line('$value', 30), line('占收入 19%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1191, [line('研发', 31, 800), line('$value', 30), line('占收入 15%', 29, 400, NOTE), line('同比 (2 个百分点)', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q1-fy25',
    name: 'Palantir · Q1 FY25',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q1-fy25.png', width: 2667, height: 1500 },
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
        government: { x: 384, y: 549, width: 71, height: 173 },
        commercial: { x: 384, y: 987, width: 71, height: 140 },
        revenue: { x: 851, y: 670, width: 71, height: 314 },
        gross_profit: { x: 1318, y: 547, width: 72, height: 252 },
        cost_of_revenue: { x: 1323, y: 1065, width: 72, height: 60 },
        operating_profit: { x: 1786, y: 440, width: 70, height: 62 },
        operating_expenses: { x: 1786, y: 704, width: 70, height: 189 },
        interest: { x: 2126, y: 295, width: 70, height: 16 },
        net_profit: { x: 2255, y: 323, width: 71, height: 76 },
        tax: { x: 2255, y: 537, width: 71, height: 3 },
        other: { x: 2255, y: 632, width: 71, height: 2 },
        sm: { x: 2255, y: 748, width: 71, height: 81 },
        ga: { x: 2255, y: 981, width: 71, height: 56 },
        rnd: { x: 2255, y: 1192, width: 71, height: 46 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 487, notes: ['+45% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 397, notes: ['+33% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 884, notes: ['+39% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 711, notes: ['80% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 173, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 176, notes: ['20% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 535, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 50, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 218, notes: ['25% margin', '+8pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 236, notes: ['27% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 164, notes: ['19% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 135, notes: ['15% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 487, sourceWidth: 173, targetWidth: 173, y0: 635.5, y1: 756.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 397, sourceWidth: 140, targetWidth: 140, y0: 1057, y1: 914, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 711, sourceWidth: 253, targetWidth: 252, y0: 796.5, y1: 673, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 173, width: 60, y0: 954, y1: 1095, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 176, width: 62, y0: 578, y1: 471, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 535, width: 189, y0: 704.5, y1: 798.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 50, width: 16, y0: 303, y1: 331, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 167, sourceWidth: 59, targetWidth: 60, y0: 469.5, y1: 369, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 6, sourceWidth: 2, targetWidth: 3, y0: 500, y1: 538.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other', value: 3, sourceWidth: 1, targetWidth: 2, y0: 501.5, y1: 633, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 236, sourceWidth: 83, targetWidth: 81, y0: 745.5, y1: 788.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 164, sourceWidth: 58, targetWidth: 56, y0: 816, y1: 1009, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 135, sourceWidth: 48, targetWidth: 46, y0: 869, y1: 1215, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2025 财年第一季度',
        meta: {
          title: 'Palantir 2025 财年第一季度利润表',
          period: '2025 财年第一季度',
          periodNote: '截至 2025 年 3 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +45%'] },
          commercial: { label: '商业', notes: ['同比 +33%'] },
          revenue: { label: '收入', notes: ['同比 +39%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 80%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 20%', '同比 +7 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 25%', '同比 +8 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sm: { label: '销售与营销', notes: ['占收入 27%', '同比 (4 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 19%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 (2 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

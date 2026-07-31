/* Palantir Q3 FY22 income statement ($M), reconstructed from the Source. */
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
  const RIGHT_X = 2419;
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
      <rect x="111" y="1180" width="190" height="165" rx="29" fill="${CARD}"/>
      <text x="206" y="1235" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.billings}</text>
      <text x="206" y="1277" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$509M</text>
      <text x="206" y="1319" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.billingsGrowth}</text>

      <rect x="313" y="1181" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="420" y="1255" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.dbnr}</text>
      <text x="420" y="1297" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">119%</text>

      <rect x="538" y="1181" width="215" height="164" rx="29" fill="${CARD}"/>
      <text x="645" y="1235" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="645" y="1277" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">337</text>
      <text x="645" y="1319" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.customersGrowth}</text>

      <text x="199" y="1382" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings',
    billingsGrowth: '+47% Y/Y',
    dbnr: 'DBNR',
    customers: 'Customers',
    customersGrowth: '+66% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    billings: '账单额',
    billingsGrowth: '同比 +47%',
    dbnr: '美元净留存',
    customers: '客户数',
    customersGrowth: '同比 +66%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    government: { blocks: [
      block(410, 431, [line('$value', 39), line('+26% Y/Y', 29, 400, NOTE)], 'middle', 9),
      block(322, 570, [line('Government', 40, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(412, 765, [line('$value', 39), line('+17% Y/Y', 29, 400, NOTE)], 'middle', 9),
      block(313, 888, [line('Commercial', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(875, 482, [line('Revenue', 40, 800), line('$value', 39), line('+22% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1342, 351, [line('Gross profit', 40, 800), line('$value', 39), line('77% margin', 29, 400, NOTE), line('Unchanged', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1348, 981, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)])] },
    operating_expenses: { blocks: [block(1825, 610, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
    operating_loss: { blocks: [block(1476, 1221, [line('Operating loss', 40, 800), line('$value', 39), line('(13%) margin', 29, 400, NOTE), line('+10pp Y/Y', 29, 400, NOTE)])] },
    sm: { blocks: [block(RIGHT_X, 696, [line('S&M', 31, 800), line('$value', 30), line('38% of revenue', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 938, [line('G&A', 31, 800), line('$value', 30), line('31% of revenue', 29, 400, NOTE), line('(7pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1160, [line('R&D', 31, 800), line('$value', 30), line('21% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    government: { blocks: [
      block(410, 431, [line('$value', 39), line('同比 +26%', 29, 400, NOTE)], 'middle', 9),
      block(322, 570, [line('政府', 36, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(412, 765, [line('$value', 39), line('同比 +17%', 29, 400, NOTE)], 'middle', 9),
      block(313, 888, [line('商业', 36, 800)], 'end'),
    ] },
    revenue: { blocks: [block(875, 482, [line('收入', 40, 800), line('$value', 39), line('同比 +22%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1342, 351, [line('毛利润', 40, 800), line('$value', 39), line('利润率 77%', 29, 400, NOTE), line('同比持平', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1348, 981, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)])] },
    operating_expenses: { blocks: [block(1825, 610, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)])] },
    operating_loss: { blocks: [block(1476, 1221, [line('营业亏损', 40, 800), line('$value', 39), line('利润率 (13%)', 29, 400, NOTE), line('同比 +10 个百分点', 29, 400, NOTE)])] },
    sm: { blocks: [block(RIGHT_X, 696, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 38%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 938, [line('管理费用', 31, 800), line('$value', 30), line('占收入 31%', 29, 400, NOTE), line('同比 (7 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1160, [line('研发', 31, 800), line('$value', 30), line('占收入 21%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q3-fy22',
    name: 'Palantir · Q3 FY22',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q3 FY22 Income Statement',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2214,
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
      scale: 0.5,
      nodes: {
        government: { x: 376, y: 522, width: 71, height: 137 },
        commercial: { x: 376, y: 857, width: 71, height: 103 },
        revenue: { x: 840, y: 622, width: 70, height: 242 },
        gross_profit: { x: 1308, y: 537, width: 71, height: 187 },
        cost_of_revenue: { x: 1313, y: 907, width: 71, height: 53 },
        operating_loss: { x: 1440, y: 1171, width: 72, height: 30 },
        operating_expenses: { x: 1789, y: 772, width: 70, height: 219 },
        sm: { x: 2230, y: 682, width: 71, height: 91 },
        ga: { x: 2230, y: 938, width: 71, height: 74 },
        rnd: { x: 2230, y: 1166, width: 71, height: 49 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 274, notes: ['+26% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 204, notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 478, notes: ['+22% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 370, notes: ['77% margin', 'Unchanged'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 108, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -62, notes: ['(13%) margin', '+10pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 432, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 183, notes: ['38% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 149, notes: ['31% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 101, notes: ['21% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    nonNodeMetrics: [
      { id: 'tax', representation: 'data-only' },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 274, sourceWidth: 137, targetWidth: 137, y0: 590.5, y1: 690.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'commercial', target: 'revenue', value: 204, sourceWidth: 103, targetWidth: 105, y0: 908.5, y1: 811.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 370, sourceWidth: 187, targetWidth: 187, y0: 715.5, y1: 630.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 108, sourceWidth: 55, targetWidth: 53, y0: 836.5, y1: 933.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 370, sourceWidth: 187, targetWidth: 187, y0: 630.5, y1: 865.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 62, sourceWidth: 30, targetWidth: 32, y0: 1186, y1: 975, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 183, sourceWidth: 91, targetWidth: 91, y0: 817.5, y1: 727.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 149, sourceWidth: 74, targetWidth: 74, y0: 900, y1: 975, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 101, sourceWidth: 54, targetWidth: 49, y0: 964, y1: 1190.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2022 财年第三季度',
        meta: {
          title: 'Palantir 2022 财年第三季度利润表',
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +26%'] },
          commercial: { label: '商业', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 77%', '同比持平'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (13%)', '同比 +10 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 38%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 31%', '同比 (7 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 21%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

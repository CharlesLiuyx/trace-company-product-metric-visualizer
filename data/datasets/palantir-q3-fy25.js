/* Palantir Q3 FY25 income statement ($M), reconstructed from the Source. */
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
      <rect x="88" y="1120" width="214" height="163" rx="29" fill="${CARD}"/>
      <text x="195" y="1176" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.dbnr}</text>
      <text x="195" y="1218" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">134%</text>
      <text x="195" y="1260" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.dbnrGrowth}</text>

      <rect x="313" y="1120" width="215" height="163" rx="29" fill="${CARD}"/>
      <text x="420" y="1176" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="420" y="1218" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">911</text>
      <text x="420" y="1260" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.customersGrowth}</text>

      <rect x="539" y="1123" width="411" height="157" rx="26" fill="${CARD}"/>
      <text x="744" y="1174" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.rdv}</text>
      <text x="744" y="1216" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$3.63B</text>
      <text x="744" y="1258" text-anchor="middle" font-size="28" font-weight="500" fill="#fff">${t.rdvGrowth}</text>

      <text x="102" y="1323" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
      <text x="102" y="1365" font-size="29" font-weight="500" fill="${NOTE}">${t.rdvFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    dbnr: 'DBNR',
    dbnrGrowth: '+16pp Y/Y',
    customers: 'Customers',
    customersGrowth: '+45% Y/Y',
    rdv: 'US Commercial RDV',
    rdvGrowth: '+199% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
    rdvFootnote: 'RDV = Remaining Deal Value',
  });
  const annotationsZh = annotations({
    dbnr: '美元净留存',
    dbnrGrowth: '同比 +16点',
    customers: '客户数',
    customersGrowth: '同比 +45%',
    rdv: '美国商业 RDV',
    rdvGrowth: '同比 +199%',
    dbnrFootnote: 'DBNR = 美元净留存率',
    rdvFootnote: 'RDV = 剩余交易价值',
  });

  const labelsEn = {
    government: { blocks: [
      block(420, 409, [line('$value', 39), line('+55% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(335, 584, [line('Government', 40, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(420, 829, [line('$value', 39), line('+73% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(335, 992, [line('Commercial', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(892, 488, [line('Revenue', 40, 800), line('$value', 39), line('+63% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 330, [line('Gross profit', 40, 800), line('$value', 39), line('82% margin', 29, 400, NOTE), line('+3pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1354, 1122, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1821, 239, [line('Operating profit', 40, 800), line('$value', 39), line('33% margin', 29, 400, NOTE), line('+18pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1821, 918, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2166, 222, [line('Interest', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(2161, 546, [line('Other', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2350, 331, [line('Net profit', 40, 800), line('$value', 39), line('40% margin', 29, 400, NOTE), line('+20pp Y/Y', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(RIGHT_X, 624, [line('Tax', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(RIGHT_X, 760, [line('S&M', 31, 800), line('$value', 30), line('23% of revenue', 29, 400, NOTE), line('(6pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 956, [line('G&A', 31, 800), line('$value', 30), line('14% of revenue', 29, 400, NOTE), line('(5pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1170, [line('R&D', 31, 800), line('$value', 30), line('12% of revenue', 29, 400, NOTE), line('(4pp) Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    government: { blocks: [block(420, 409, [line('$value', 39), line('同比 +55%', 29, 400, NOTE)]), block(335, 584, [line('政府', 36, 800)], 'end')] },
    commercial: { blocks: [block(420, 829, [line('$value', 39), line('同比 +73%', 29, 400, NOTE)]), block(335, 992, [line('商业', 36, 800)], 'end')] },
    revenue: { blocks: [block(892, 488, [line('收入', 40, 800), line('$value', 39), line('同比 +63%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 330, [line('毛利润', 40, 800), line('$value', 39), line('利润率 82%', 29, 400, NOTE), line('同比 +3 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1354, 1122, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1821, 239, [line('营业利润', 40, 800), line('$value', 39), line('利润率 33%', 29, 400, NOTE), line('同比 +18 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1821, 918, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2166, 222, [line('利息', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(2161, 546, [line('其他', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2350, 331, [line('净利润', 40, 800), line('$value', 39), line('利润率 40%', 29, 400, NOTE), line('同比 +20 个百分点', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(RIGHT_X, 624, [line('税费', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(RIGHT_X, 760, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 23%', 29, 400, NOTE), line('同比 (6 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 956, [line('管理费用', 31, 800), line('$value', 30), line('占收入 14%', 29, 400, NOTE), line('同比 (5 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1170, [line('研发', 31, 800), line('$value', 30), line('占收入 12%', 29, 400, NOTE), line('同比 (4 个百分点)', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q3-fy25',
    name: 'Palantir · Q3 FY25',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q3-fy25.png', width: 2667, height: 1500 },
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
      scale: 1,
      nodes: {
        government: { x: 384, y: 508, width: 71, height: 201 },
        commercial: { x: 384, y: 930, width: 71, height: 173 },
        revenue: { x: 851, y: 641, width: 70, height: 377 },
        gross_profit: { x: 1318, y: 513, width: 71, height: 311 },
        cost_of_revenue: { x: 1318, y: 1038, width: 71, height: 65 },
        operating_profit: { x: 1786, y: 419, width: 70, height: 126 },
        operating_expenses: { x: 1786, y: 710, width: 70, height: 184 },
        interest: { x: 2131, y: 305, width: 70, height: 17 },
        other: { x: 2126, y: 520, width: 70, height: 7 },
        net_profit: { x: 2252, y: 328, width: 71, height: 150 },
        tax: { x: 2252, y: 654, width: 71, height: 3 },
        sm: { x: 2252, y: 749, width: 71, height: 85 },
        ga: { x: 2252, y: 966, width: 71, height: 49 },
        rnd: { x: 2252, y: 1175, width: 71, height: 44 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 633, notes: ['+55% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 548, notes: ['+73% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1181, valueText: '$1,181M', notes: ['+63% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 974, notes: ['82% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 207, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 393, notes: ['33% margin', '+18pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 580, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 60, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 27, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 477, notes: ['40% margin', '+20pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4, valueText: '($4M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 275, valueText: '($275M)', notes: ['23% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 162, valueText: '($162M)', notes: ['14% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 144, valueText: '($144M)', notes: ['12% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 633, sourceWidth: 201, targetWidth: 203, y0: 608.5, y1: 742.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 548, sourceWidth: 173, targetWidth: 174, y0: 1016.5, y1: 931, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 974, width: 311, y0: 796.5, y1: 668.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 207, width: 65, y0: 985.5, y1: 1070.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 393, sourceWidth: 125, targetWidth: 126, y0: 575.5, y1: 482, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 580, sourceWidth: 186, targetWidth: 184, y0: 731, y1: 802, sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 60, sourceWidth: 17, targetWidth: 18, y0: 313.5, y1: 337, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 393, sourceWidth: 123, targetWidth: 123, y0: 481.5, y1: 408.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 27, sourceWidth: 7, targetWidth: 7, y0: 523.5, y1: 474.5, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK, curve: { c1x: 2204, c1y: 523.5, c2x: 2216, c2y: 474.5 } },
      { source: 'operating_profit', target: 'tax', value: 4, sourceWidth: 2, targetWidth: 3, y0: 544.5, y1: 655.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 275, sourceWidth: 87, targetWidth: 85, y0: 753.5, y1: 791.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 162, sourceWidth: 52, targetWidth: 49, y0: 823, y1: 990.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 144, sourceWidth: 45, targetWidth: 44, y0: 871.5, y1: 1197, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2025 财年第三季度',
        meta: {
          title: 'Palantir 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +55%'] },
          commercial: { label: '商业', notes: ['同比 +73%'] },
          revenue: { label: '收入', notes: ['同比 +63%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +18 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 40%', '同比 +20 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 23%', '同比 (6 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 14%', '同比 (5 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 (4 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

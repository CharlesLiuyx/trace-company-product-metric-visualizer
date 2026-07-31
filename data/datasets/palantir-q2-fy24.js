/* Palantir Q2 FY24 income statement ($M), reconstructed from the Source. */
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
  const RIGHT_X = 2455;
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
      <rect x="111" y="1180" width="191" height="164" rx="29" fill="${CARD}"/>
      <text x="206.5" y="1236" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.billings}</text>
      <text x="206.5" y="1278" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$718M</text>
      <text x="206.5" y="1320" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.billingsGrowth}</text>

      <rect x="313" y="1180" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="420" y="1236" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">DBNR</text>
      <text x="420" y="1278" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">114%</text>
      <text x="420" y="1320" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.dbnrGrowth}</text>

      <rect x="538" y="1180" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="645" y="1236" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="645" y="1278" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">593</text>
      <text x="645" y="1320" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${t.customersGrowth}</text>

      <text x="199" y="1384" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings',
    billingsGrowth: '+19% Y/Y',
    dbnrGrowth: '+4pp Y/Y',
    customers: 'Customers',
    customersGrowth: '+41% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    billings: '账单额',
    billingsGrowth: '同比 +19%',
    dbnrGrowth: '同比 +4 个百分点',
    customers: '客户数',
    customersGrowth: '同比 +41%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    government: { blocks: [
      block(420, 452, [line('$value', 39), line('+23% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(310, 631, [line('Government', 40, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(417, 870, [line('$value', 39), line('+33% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(303, 1033, [line('Commercial', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(882, 536, [line('Revenue', 40, 800), line('$value', 39), line('+27% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 371, [line('Gross profit', 40, 800), line('$value', 39), line('81% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1351, 1155, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1782, 244, [line('Operating profit', 40, 800), line('$value', 39), line('16% margin', 29, 400, NOTE), line('+14pp Y/Y', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1819, 949, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2162, 430, [line('Interest', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(RIGHT_X, 503, [line('Other', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2356, 293, [line('Net profit', 40, 800), line('$value', 39), line('20% margin', 29, 400, NOTE), line('+15pp Y/Y', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(RIGHT_X, 627, [line('Tax', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(RIGHT_X, 771, [line('S&M', 31, 800), line('$value', 30), line('29% of revenue', 29, 400, NOTE), line('(6pp) Y/Y', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 979, [line('G&A', 31, 800), line('$value', 30), line('20% of revenue', 29, 400, NOTE), line('(4pp) Y/Y', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1193, [line('R&D', 31, 800), line('$value', 30), line('16% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)])] },
  };

  const labelsZh = {
    government: { blocks: [block(420, 452, [line('$value', 39), line('同比 +23%', 29, 400, NOTE)], 'middle', 10), block(310, 631, [line('政府', 36, 800)], 'end')] },
    commercial: { blocks: [block(417, 870, [line('$value', 39), line('同比 +33%', 29, 400, NOTE)], 'middle', 10), block(303, 1033, [line('商业', 36, 800)], 'end')] },
    revenue: { blocks: [block(882, 536, [line('收入', 40, 800), line('$value', 39), line('同比 +27%', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1354, 371, [line('毛利润', 40, 800), line('$value', 39), line('利润率 81%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1351, 1155, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)])] },
    operating_profit: { blocks: [block(1782, 244, [line('营业利润', 40, 800), line('$value', 39), line('利润率 16%', 29, 400, NOTE), line('同比 +14 个百分点', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1819, 949, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)])] },
    interest: { blocks: [block(2162, 430, [line('利息', 31, 800), line('$value', 30)])] },
    other: { blocks: [block(RIGHT_X, 503, [line('其他', 31, 800), line('$value', 30)])] },
    net_profit: { blocks: [block(2356, 293, [line('净利润', 40, 800), line('$value', 39), line('利润率 20%', 29, 400, NOTE), line('同比 +15 个百分点', 29, 400, NOTE)], 'start')] },
    tax: { blocks: [block(RIGHT_X, 627, [line('税费', 31, 800), line('$value', 30)])] },
    sm: { blocks: [block(RIGHT_X, 771, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 29%', 29, 400, NOTE), line('同比 (6 个百分点)', 29, 400, NOTE)])] },
    ga: { blocks: [block(RIGHT_X, 979, [line('管理费用', 31, 800), line('$value', 30), line('占收入 20%', 29, 400, NOTE), line('同比 (4 个百分点)', 29, 400, NOTE)])] },
    rnd: { blocks: [block(RIGHT_X, 1193, [line('研发', 31, 800), line('$value', 30), line('占收入 16%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q2-fy24',
    name: 'Palantir · Q2 FY24',
    company: 'Palantir',
    meta: {
      company: 'Palantir', title: 'Palantir Q2 FY24 Income Statement', period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024', hidePeriodStamp: true, currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2220,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 635, logoHeight: 158, logoY: 272, logoViewBox: '0 0 640 150', logoSvg: palantirLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        government: { x: 381, y: 553, width: 71, height: 197 },
        commercial: { x: 381, y: 973, width: 71, height: 164 },
        revenue: { x: 848, y: 688, width: 70, height: 363 },
        gross_profit: { x: 1315, y: 553, width: 71, height: 294 },
        cost_of_revenue: { x: 1315, y: 1066, width: 71, height: 68 },
        operating_profit: { x: 1783, y: 422, width: 70, height: 55 },
        operating_expenses: { x: 1783, y: 688, width: 70, height: 237 },
        interest: { x: 2125, y: 392, width: 70, height: 22 },
        net_profit: { x: 2249, y: 302, width: 71, height: 71 },
        other: { x: 2249, y: 542, width: 71, height: 4 },
        tax: { x: 2249, y: 659, width: 71, height: 2 },
        sm: { x: 2249, y: 762, width: 71, height: 104 },
        ga: { x: 2249, y: 978, width: 71, height: 73 },
        rnd: { x: 2249, y: 1196, width: 71, height: 56 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 371, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 307, notes: ['+33% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 678, notes: ['+27% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 550, notes: ['81% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 129, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 105, notes: ['16% margin', '+14pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 444, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 47, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 136, notes: ['20% margin', '+15pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 11, valueText: '($11M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 5, valueText: '($5M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 197, valueText: '($197M)', notes: ['29% of revenue', '(6pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 139, valueText: '($139M)', notes: ['20% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 109, valueText: '($109M)', notes: ['16% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 371, sourceWidth: 197, targetWidth: 199, y0: 651.5, y1: 787.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 307, sourceWidth: 164, targetWidth: 164, y0: 1055, y1: 969, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 550, width: 294, y0: 835, y1: 700, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 129, width: 68, y0: 1017, y1: 1100, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 105, width: 55, y0: 580.5, y1: 449.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 444, sourceWidth: 238, targetWidth: 237, y0: 728, y1: 806.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 89, sourceWidth: 49, targetWidth: 48, y0: 446.5, y1: 326, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'interest', target: 'net_profit', value: 47, sourceWidth: 22, targetWidth: 23, y0: 403, y1: 361.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 11, width: 4, y0: 473, y1: 544, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'tax', value: 5, width: 2, y0: 476, y1: 660, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 197, sourceWidth: 105, targetWidth: 104, y0: 740.5, y1: 814, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 139, sourceWidth: 74, targetWidth: 73, y0: 830, y1: 1014.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 109, sourceWidth: 58, targetWidth: 56, y0: 896, y1: 1224, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2024 财年第二季度',
        meta: { title: 'Palantir 2024 财年第二季度利润表', period: '2024 财年第二季度', periodNote: '截至 2024 年 6 月', titleSize: 112, titleTextLength: 1880 },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +23%'] }, commercial: { label: '商业', notes: ['同比 +33%'] },
          revenue: { label: '收入', notes: ['同比 +27%'] }, gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 +14 个百分点'] },
          operating_expenses: { label: '营业费用' }, interest: { label: '利息' }, other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 20%', '同比 +15 个百分点'] }, tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 29%', '同比 (6 个百分点)'] }, ga: { label: '管理费用', notes: ['占收入 20%', '同比 (4 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

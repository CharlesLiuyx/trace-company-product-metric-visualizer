/* Palantir Q4 FY22 income statement ($M), reconstructed from the Source. */
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
      <rect x="112" y="1184" width="189" height="157" rx="29" fill="${CARD}"/>
      <text x="206.5" y="1236" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.billings}</text>
      <text x="206.5" y="1278" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$387M</text>
      <text x="206.5" y="1320" text-anchor="middle" font-size="28" font-weight="500" fill="#fff">${t.billingsGrowth}</text>

      <rect x="313" y="1181" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="420" y="1236" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">DBNR</text>
      <text x="420" y="1278" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">115%</text>

      <rect x="538" y="1181" width="214" height="164" rx="29" fill="${CARD}"/>
      <text x="645" y="1236" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${t.customers}</text>
      <text x="645" y="1278" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">367</text>
      <text x="645" y="1320" text-anchor="middle" font-size="28" font-weight="500" fill="#fff">${t.customersGrowth}</text>

      <text x="199" y="1383" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings',
    billingsGrowth: '+0.3% Y/Y',
    customers: 'Customers',
    customersGrowth: '+55% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    billings: '账单额',
    billingsGrowth: '同比 +0.3%',
    customers: '客户数',
    customersGrowth: '同比 +55%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  const labelsEn = {
    government: { blocks: [
      block(413.5, 405, [line('$value', 39), line('+23% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(330, 545, [line('Government', 40, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(410.5, 791, [line('$value', 39), line('+11% Y/Y', 29, 400, NOTE)], 'middle', 10),
      block(330, 911, [line('Commercial', 40, 800)], 'end'),
    ] },
    revenue: { blocks: [block(873, 474, [line('Revenue', 40, 800), line('$value', 39), line('+18% Y/Y', 29, 400, NOTE)], 'middle', 9)] },
    gross_profit: { blocks: [block(1337.5, 373, [line('Gross profit', 40, 800), line('$value', 39), line('79% margin', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)], 'middle', 8)] },
    cost_of_revenue: { blocks: [block(1345, 1026, [line('Cost of', 37, 800), line('revenue', 37, 800), line('$value', 36)], 'middle', 8)] },
    operating_expenses: { blocks: [block(1840, 470, [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)], 'middle', 8)] },
    operating_loss: { blocks: [block(1652.5, 1113, [line('Operating loss', 40, 800), line('$value', 39), line('(4%) margin', 29, 400, NOTE), line('+10pp Y/Y', 29, 400, NOTE)], 'middle', 8)] },
    sm: { blocks: [block(RIGHT_X, 506, [line('S&M', 31, 800), line('$value', 30), line('37% of revenue', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)], 'middle', 8)] },
    ga: { blocks: [block(RIGHT_X, 769, [line('G&A', 31, 800), line('$value', 30), line('29% of revenue', 29, 400, NOTE), line('(7pp) Y/Y', 29, 400, NOTE)], 'middle', 8)] },
    rnd: { blocks: [block(RIGHT_X, 997, [line('R&D', 31, 800), line('$value', 30), line('16% of revenue', 29, 400, NOTE), line('(3pp) Y/Y', 29, 400, NOTE)], 'middle', 8)] },
  };

  const labelsZh = {
    government: { blocks: [
      block(413.5, 405, [line('$value', 39), line('同比 +23%', 29, 400, NOTE)], 'middle', 8),
      block(330, 549, [line('政府', 36, 800)], 'end'),
    ] },
    commercial: { blocks: [
      block(410.5, 791, [line('$value', 39), line('同比 +11%', 29, 400, NOTE)], 'middle', 8),
      block(330, 915, [line('商业', 36, 800)], 'end'),
    ] },
    revenue: { blocks: [block(873, 474, [line('收入', 40, 800), line('$value', 39), line('同比 +18%', 29, 400, NOTE)], 'middle', 8)] },
    gross_profit: { blocks: [block(1337.5, 373, [line('毛利润', 40, 800), line('$value', 39), line('利润率 79%', 29, 400, NOTE), line('同比 (1 个百分点)', 29, 400, NOTE)], 'middle', 8)] },
    cost_of_revenue: { blocks: [block(1345, 1026, [line('收入', 37, 800), line('成本', 37, 800), line('$value', 36)], 'middle', 8)] },
    operating_expenses: { blocks: [block(1840, 470, [line('营业', 40, 800), line('费用', 40, 800), line('$value', 38)], 'middle', 8)] },
    operating_loss: { blocks: [block(1652.5, 1113, [line('营业亏损', 40, 800), line('$value', 39), line('利润率 (4%)', 29, 400, NOTE), line('同比 +10 个百分点', 29, 400, NOTE)], 'middle', 8)] },
    sm: { blocks: [block(RIGHT_X, 506, [line('销售与营销', 31, 800), line('$value', 30), line('占收入 37%', 29, 400, NOTE), line('同比持平', 29, 400, NOTE)], 'middle', 8)] },
    ga: { blocks: [block(RIGHT_X, 769, [line('管理费用', 31, 800), line('$value', 30), line('占收入 29%', 29, 400, NOTE), line('同比 (7 个百分点)', 29, 400, NOTE)], 'middle', 8)] },
    rnd: { blocks: [block(RIGHT_X, 997, [line('研发', 31, 800), line('$value', 30), line('占收入 16%', 29, 400, NOTE), line('同比 (3 个百分点)', 29, 400, NOTE)], 'middle', 8)] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q4-fy22',
    name: 'Palantir · Q4 FY22',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q4-fy22.png', width: 2667, height: 1500 },
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
        government: { x: 378, y: 495, width: 71, height: 149 },
        commercial: { x: 378, y: 881, width: 71, height: 109 },
        revenue: { x: 838, y: 623, width: 70, height: 262 },
        gross_profit: { x: 1302, y: 554, width: 71, height: 208 },
        cost_of_revenue: { x: 1309, y: 952, width: 72, height: 51 },
        operating_loss: { x: 1617, y: 1081, width: 71, height: 7 },
        operating_expenses: { x: 1805, y: 628, width: 70, height: 217 },
        sm: { x: 2246, y: 492, width: 71, height: 95 },
        ga: { x: 2246, y: 759, width: 71, height: 76 },
        rnd: { x: 2246, y: 1015, width: 71, height: 40 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 293, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 215, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 509, notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 404, notes: ['79% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 104, valueText: '($104M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -18, valueText: '($18M)', notes: ['(4%) margin', '+10pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 422, valueText: '($422M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 190, valueText: '($190M)', notes: ['37% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 149, valueText: '($149M)', notes: ['29% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 82, valueText: '($82M)', notes: ['16% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 293, sourceWidth: 149, targetWidth: 151, y0: 569.5, y1: 698.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 215, sourceWidth: 109, targetWidth: 111, y0: 935.5, y1: 829.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 404, sourceWidth: 209, targetWidth: 208, y0: 727.5, y1: 658, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 104, sourceWidth: 53, targetWidth: 51, y0: 858.5, y1: 977.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 404, sourceWidth: 208, targetWidth: 210, y0: 658, y1: 733, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 18,
        sourceWidth: 7, targetWidth: 7, y0: 1084.5, y1: 841.5,
        sourceOrder: 0, targetOrder: 1,
        curve: { x0: 1688, x1: 1805, c1x: 1740, c1y: 1084.5, c2x: 1765, c2y: 841.5 },
      },
      { source: 'operating_expenses', target: 'sm', value: 190, sourceWidth: 99, targetWidth: 95, y0: 677.5, y1: 539.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 149, sourceWidth: 77, targetWidth: 76, y0: 765.5, y1: 797, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 82, sourceWidth: 41, targetWidth: 40, y0: 824.5, y1: 1035, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2022 财年第四季度',
        meta: {
          title: 'Palantir 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +23%'] },
          commercial: { label: '商业', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 79%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (4%)', '同比 +10 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 37%', '同比持平'] },
          ga: { label: '管理费用', notes: ['占收入 29%', '同比 (7 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 16%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

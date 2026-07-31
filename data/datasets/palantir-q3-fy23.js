/* Palantir Q3 FY23 income statement ($M), reconstructed from the Source. */
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
  const RIGHT_X = 2465;
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

  const annotations = (copy) => `
    <g>
      <rect x="111" y="1184" width="190" height="159" rx="28" fill="${CARD}"/>
      <text x="206" y="1238" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${copy.billings}</text>
      <text x="206" y="1280" text-anchor="middle" font-size="31" font-weight="500" fill="#fff">$550M</text>
      <text x="206" y="1322" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${copy.billingsGrowth}</text>
      <rect x="313" y="1184" width="214" height="159" rx="28" fill="${CARD}"/>
      <text x="420" y="1238" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">DBNR</text>
      <text x="420" y="1280" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">107%</text>
      <text x="420" y="1322" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${copy.dbnrGrowth}</text>
      <rect x="538" y="1184" width="214" height="159" rx="28" fill="${CARD}"/>
      <text x="645" y="1238" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${copy.customers}</text>
      <text x="645" y="1280" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">453</text>
      <text x="645" y="1322" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${copy.customersGrowth}</text>
      <text x="198" y="1382" font-size="29" font-weight="500" fill="${NOTE}">${copy.footnote}</text>
    </g>`;

  const annotationsEn = annotations({
    billings: 'Billings', billingsGrowth: '+8% Y/Y', dbnrGrowth: '(12pp) Y/Y',
    customers: 'Customers', customersGrowth: '+34% Y/Y',
    footnote: 'DBNR = Dollar Based Net Retention',
  });
  const annotationsZh = annotations({
    billings: '账单额', billingsGrowth: '同比 +8%', dbnrGrowth: '同比 (12 个百分点)',
    customers: '客户数', customersGrowth: '同比 +34%', footnote: 'DBNR = 美元净留存率',
  });

  function fixedLabels(zh) {
    return {
      government: { blocks: [
        block(411, 456, [line('$value', 39), line(zh ? '同比 +12%' : '+12% Y/Y', 29, 400, NOTE)], 'middle', 10),
        block(303, 615, [line(zh ? '政府' : 'Government', zh ? 36 : 40, 800)], 'end'),
      ] },
      commercial: { blocks: [
        block(416, 819, [line('$value', 39), line(zh ? '同比 +23%' : '+23% Y/Y', 29, 400, NOTE)], 'middle', 10),
        block(301, 963, [line(zh ? '商业' : 'Commercial', zh ? 36 : 40, 800)], 'end'),
      ] },
      revenue: { blocks: [block(884, 512, [line(zh ? '收入' : 'Revenue', 40, 800), line('$value', 39), line(zh ? '同比 +17%' : '+17% Y/Y', 29, 400, NOTE)])] },
      gross_profit: { blocks: [block(1348, 394, [line(zh ? '毛利润' : 'Gross profit', 40, 800), line('$value', 39), line(zh ? '利润率 81%' : '81% margin', 29, 400, NOTE), line(zh ? '同比 +3 个百分点' : '+3pp Y/Y', 29, 400, NOTE)])] },
      cost_of_revenue: { blocks: [block(1350, 1078, [line(zh ? '收入' : 'Cost of', 37, 800), line(zh ? '成本' : 'revenue', 37, 800), line('$value', 36)])] },
      operating_profit: { blocks: [block(1825, 315, [line(zh ? '营业利润' : 'Operating profit', 40, 800), line('$value', 39), line(zh ? '利润率 7%' : '7% margin', 29, 400, NOTE), line(zh ? '同比 +20 个百分点' : '+20pp Y/Y', 29, 400, NOTE)])] },
      operating_expenses: { blocks: [block(1820, 1001, [line(zh ? '营业' : 'Operating', 40, 800), line(zh ? '费用' : 'expenses', 40, 800), line('$value', 38)])] },
      other: { blocks: [block(2079, 262, [line(zh ? '其他' : 'Other', 31, 800), line('$value', 30)])] },
      interest: { blocks: [block(2140, 522, [line(zh ? '利息' : 'Interest', 31, 800), line('$value', 30)])] },
      net_profit: { blocks: [block(2455, 352, [line(zh ? '净利润' : 'Net profit', 40, 800), line('$value', 39), line(zh ? '利润率 13%' : '13% margin', 29, 400, NOTE), line(zh ? '同比 +39 个百分点' : '+39pp Y/Y', 29, 400, NOTE)])] },
      tax: { blocks: [block(RIGHT_X, 665, [line(zh ? '税费' : 'Tax', 31, 800), line('$value', 30)])] },
      sm: { blocks: [block(RIGHT_X, 822, [line(zh ? '销售与营销' : 'S&M', 31, 800), line('$value', 30), line(zh ? '占收入 32%' : '32% of revenue', 29, 400, NOTE), line(zh ? '同比 (7 个百分点)' : '(7pp) Y/Y', 29, 400, NOTE)])] },
      ga: { blocks: [block(RIGHT_X, 1042, [line(zh ? '管理费用' : 'G&A', 31, 800), line('$value', 30), line(zh ? '占收入 23%' : '23% of revenue', 29, 400, NOTE), line(zh ? '同比 (8 个百分点)' : '(8pp) Y/Y', 29, 400, NOTE)])] },
      rnd: { blocks: [block(RIGHT_X, 1239, [line(zh ? '研发' : 'R&D', 31, 800), line('$value', 30), line(zh ? '占收入 19%' : '19% of revenue', 29, 400, NOTE), line(zh ? '同比 (2 个百分点)' : '(2pp) Y/Y', 29, 400, NOTE)])] },
    };
  }

  const labelsEn = fixedLabels(false);
  const labelsZh = fixedLabels(true);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q3-fy23',
    name: 'Palantir · Q3 FY23',
    company: 'Palantir',
    meta: {
      company: 'Palantir', title: 'Palantir Q3 FY23 Income Statement', period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023', hidePeriodStamp: true, currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 128, titleWeight: 800, titleTextLength: 2215,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 635, logoHeight: 145, logoY: 252, logoViewBox: '0 0 640 150', logoSvg: palantirLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE,
      subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error', fullFaceIds: ['revenue:left', 'gross_profit:right'] },
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
        government: { x: 381, y: 549, width: 71, height: 181 },
        commercial: { x: 381, y: 914, width: 71, height: 147 },
        revenue: { x: 848, y: 657, width: 70, height: 329 },
        gross_profit: { x: 1315, y: 577, width: 71, height: 266 },
        cost_of_revenue: { x: 1315, y: 994, width: 71, height: 61 },
        operating_profit: { x: 1793, y: 497, width: 70, height: 22 },
        operating_expenses: { x: 1793, y: 739, width: 70, height: 241 },
        other: { x: 2043, y: 347, width: 71, height: 3 },
        interest: { x: 2100, y: 480, width: 70, height: 20 },
        net_profit: { x: 2249, y: 376, width: 71, height: 41 },
        tax: { x: 2249, y: 701, width: 71, height: 3 },
        sm: { x: 2249, y: 821, width: 71, height: 103 },
        ga: { x: 2249, y: 1038, width: 71, height: 73 },
        rnd: { x: 2249, y: 1252, width: 71, height: 61 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 308, notes: ['+12% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 251, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 558, notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 450, notes: ['81% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 108, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 40, notes: ['7% margin', '+20pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 410, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'profit', label: 'Interest', value: 36, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 73, notes: ['13% margin', '+39pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 7, valueText: '($7M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 176, valueText: '($176M)', notes: ['32% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 128, valueText: '($128M)', notes: ['23% of revenue', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 106, valueText: '($106M)', notes: ['19% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 308, sourceWidth: 181, targetWidth: 181, y0: 639.5, y1: 747.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 251, sourceWidth: 147, targetWidth: 148, y0: 987.5, y1: 912, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 450, width: 266, y0: 790, y1: 710, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 108, width: 61, y0: 954.5, y1: 1024.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 40, sourceWidth: 23, targetWidth: 22, y0: 588.5, y1: 508, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 410, sourceWidth: 243, targetWidth: 241, y0: 721.5, y1: 859.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 4, sourceWidth: 3, targetWidth: 3, y0: 348.5, y1: 377.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 2160, c1y: 348.5, c2x: 2188, c2y: 377.5 } },
      { source: 'interest', target: 'net_profit', value: 36, sourceWidth: 20, targetWidth: 19, y0: 490, y1: 407.5, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 40, sourceWidth: 22, targetWidth: 22, y0: 508, y1: 389, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 7, sourceWidth: 3, targetWidth: 3, y0: 517.5, y1: 702.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 176, sourceWidth: 104, targetWidth: 103, y0: 791, y1: 872.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 128, sourceWidth: 75, targetWidth: 73, y0: 880.5, y1: 1074.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 106, sourceWidth: 62, targetWidth: 61, y0: 949, y1: 1282.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2023 财年第三季度',
        meta: { title: 'Palantir 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 9 月', titleSize: 112, titleTextLength: 1880 },
        annotationsSvg: annotationsZh,
        nodes: {
          government: { label: '政府', notes: ['同比 +12%'] }, commercial: { label: '商业', notes: ['同比 +23%'] },
          revenue: { label: '收入', notes: ['同比 +17%'] }, gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +20 个百分点'] },
          operating_expenses: { label: '营业费用' }, other: { label: '其他' }, interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +39 个百分点'] }, tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 32%', '同比 (7 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 23%', '同比 (8 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 (2 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

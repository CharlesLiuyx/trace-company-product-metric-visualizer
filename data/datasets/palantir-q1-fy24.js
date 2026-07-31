/* Palantir Q1 FY24 income statement ($M), reconstructed from the Source. */
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

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const palantirLogo = `
    <g transform="translate(-30 0)">
      <g transform="translate(3 5)" fill="none" stroke="${BLACK}" stroke-linejoin="round">
        <circle cx="64" cy="54" r="41" stroke-width="15"/>
        <path d="M19 109L64 129L109 109" stroke-width="14"/>
      </g>
      <text x="146" y="117" font-family="Arial,Helvetica,sans-serif" font-size="109" font-weight="400" fill="${BLACK}"
        textLength="445" lengthAdjust="spacingAndGlyphs">Palantir</text>
    </g>`;

  const annotations = (t) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="111" y="1183" width="191" height="159" rx="29" fill="${CARD}"/>
      <text x="206.5" y="1237" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${t.billings}</text>
      <text x="206.5" y="1279" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">$625M</text>
      <text x="206.5" y="1321" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${t.billingsGrowth}</text>

      <rect x="312" y="1180" width="216" height="166" rx="29" fill="${CARD}"/>
      <text x="420" y="1237" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">DBNR</text>
      <text x="420" y="1279" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">111%</text>
      <text x="420" y="1321" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${t.dbnrGrowth}</text>

      <rect x="537" y="1180" width="216" height="166" rx="29" fill="${CARD}"/>
      <text x="645" y="1237" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${t.customers}</text>
      <text x="645" y="1279" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">554</text>
      <text x="645" y="1321" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${t.customersGrowth}</text>

      <text x="199" y="1382" font-size="29" font-weight="500" fill="${NOTE}">${t.dbnrFootnote}</text>
    </g>`;

  const labels = (t) => ({
    government: { blocks: [
      block(416, 472, 'middle', [line('$value', 39, 400), line(t.govGrowth, 29, 400, NOTE)], 9),
      { ...block(308, 642, 'end', [line(t.government, 40, 800)]), semanticRole: 'centered-side-label' },
    ] },
    commercial: { blocks: [
      block(416, 848, 'middle', [line('$value', 39, 400), line(t.commercialGrowth, 29, 400, NOTE)], 9),
      { ...block(301, 1016, 'end', [line(t.commercial, 40, 800)]), semanticRole: 'centered-side-label' },
    ] },
    revenue: { blocks: [block(883, 536, 'middle', [
      line(t.revenue, 40, 800), line('$value', 39, 400), line(t.revenueGrowth, 29, 400, NOTE),
    ], 9)] },
    gross_profit: { blocks: [block(1351, 397, 'middle', [
      line(t.grossProfit, 40, 800), line('$value', 39, 400),
      line(t.grossMargin, 29, 400, NOTE), line(t.grossGrowth, 29, 400, NOTE),
    ], 8)] },
    cost_of_revenue: { blocks: [block(1355, 1152, 'middle', [
      line(t.costOf[0], 37, 800), line(t.costOf[1], 37, 800), line('$value', 36, 400),
    ], 8)] },
    operating_profit: { blocks: [block(1821, 286, 'middle', [
      line(t.operatingProfit, 40, 800), line('$value', 39, 400),
      line(t.operatingMargin, 29, 400, NOTE), line(t.operatingGrowth, 29, 400, NOTE),
    ], 8)] },
    operating_expenses: { blocks: [block(1821, 1007, 'middle', [
      line(t.operatingExpenses[0], 40, 800), line(t.operatingExpenses[1], 40, 800), line('$value', 38, 400),
    ], 8)] },
    interest: { blocks: [block(2160, 468, 'middle', [line(t.interest, 31, 800), line('$value', 30, 400)], 8)] },
    net_profit: { blocks: [block(2361, 327, 'start', [
      line(t.netProfit, 40, 800), line('$value', 39, 400),
      line(t.netMargin, 29, 400, NOTE), line(t.netGrowth, 29, 400, NOTE),
    ], 8)] },
    other: { blocks: [block(2461, 566, 'middle', [line(t.other, 31, 800), line('$value', 30, 400)], 8)] },
    tax: { blocks: [block(2459, 680, 'middle', [line(t.tax, 31, 800), line('$value', 30, 400)], 8)] },
    sm: { blocks: [block(2461, 802, 'middle', [
      line(t.sm, 31, 800), line('$value', 30, 400), line(t.smShare, 29, 400, NOTE), line(t.smGrowth, 29, 400, NOTE),
    ], 8)] },
    ga: { blocks: [block(2464, 1016, 'middle', [
      line(t.ga, 31, 800), line('$value', 30, 400), line(t.gaShare, 29, 400, NOTE), line(t.gaGrowth, 29, 400, NOTE),
    ], 8)] },
    rnd: { blocks: [block(2468, 1212, 'middle', [
      line(t.rnd, 31, 800), line('$value', 30, 400), line(t.rndShare, 29, 400, NOTE), line(t.rndGrowth, 29, 400, NOTE),
    ], 8)] },
  });

  const en = {
    government: 'Government', govGrowth: '+16% Y/Y', commercial: 'Commercial', commercialGrowth: '+27% Y/Y',
    revenue: 'Revenue', revenueGrowth: '+21% Y/Y', grossProfit: 'Gross profit', grossMargin: '82% margin', grossGrowth: '+2pp Y/Y',
    costOf: ['Cost of', 'revenue'], operatingProfit: 'Operating profit', operatingMargin: '13% margin', operatingGrowth: '+12pp Y/Y',
    operatingExpenses: ['Operating', 'expenses'], interest: 'Interest', netProfit: 'Net profit', netMargin: '17% margin', netGrowth: '+13pp Y/Y',
    other: 'Other', tax: 'Tax', sm: 'S&M', smShare: '30% of revenue', smGrowth: '(5pp) Y/Y', ga: 'G&A', gaShare: '21% of revenue', gaGrowth: '(5pp) Y/Y',
    rnd: 'R&D', rndShare: '17% of revenue', rndGrowth: '+0pp Y/Y', billings: 'Billings', billingsGrowth: '+2% Y/Y', dbnrGrowth: 'Flat Y/Y',
    customers: 'Customers', customersGrowth: '+42% Y/Y', dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  };
  const zh = {
    government: '政府', govGrowth: '同比 +16%', commercial: '商业', commercialGrowth: '同比 +27%',
    revenue: '收入', revenueGrowth: '同比 +21%', grossProfit: '毛利润', grossMargin: '利润率 82%', grossGrowth: '同比 +2 个百分点',
    costOf: ['收入', '成本'], operatingProfit: '营业利润', operatingMargin: '利润率 13%', operatingGrowth: '同比 +12 个百分点',
    operatingExpenses: ['营业', '费用'], interest: '利息', netProfit: '净利润', netMargin: '利润率 17%', netGrowth: '同比 +13 个百分点',
    other: '其他', tax: '税费', sm: '销售与营销', smShare: '占收入 30%', smGrowth: '同比 (5 个百分点)', ga: '管理费用', gaShare: '占收入 21%', gaGrowth: '同比 (5 个百分点)',
    rnd: '研发', rndShare: '占收入 17%', rndGrowth: '同比 +0 个百分点', billings: '账单额', billingsGrowth: '同比 +2%', dbnrGrowth: '同比持平',
    customers: '客户数', customersGrowth: '同比 +42%', dbnrFootnote: 'DBNR = 美元净留存率',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q1-fy24',
    name: 'Palantir · Q1 FY24',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2220,
      hidePeriodStamp: true,
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
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
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
    annotationsSvg: annotations(en),
    layout: {
      scale: 1,
      nodes: {
        government: { x: 381, y: 575, width: 71, height: 186 },
        commercial: { x: 381, y: 954, width: 71, height: 166 },
        revenue: { x: 848, y: 692, width: 70, height: 351 },
        gross_profit: { x: 1315, y: 577, width: 71, height: 287 },
        cost_of_revenue: { x: 1320, y: 1067, width: 71, height: 63 },
        operating_profit: { x: 1785, y: 465, width: 70, height: 44 },
        operating_expenses: { x: 1785, y: 747, width: 70, height: 242 },
        interest: { x: 2125, y: 435, width: 70, height: 22 },
        net_profit: { x: 2249, y: 350, width: 71, height: 58 },
        other: { x: 2249, y: 609, width: 71, height: 5 },
        tax: { x: 2249, y: 722, width: 71, height: 2 },
        sm: { x: 2249, y: 798, width: 71, height: 105 },
        ga: { x: 2249, y: 1019, width: 71, height: 73 },
        rnd: { x: 2249, y: 1210, width: 71, height: 60 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'government', col: 0, order: 0, type: 'source', label: 'Government', value: 335, notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'commercial', col: 0, order: 1, type: 'source', label: 'Commercial', value: 299, notes: ['+27% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 634, notes: ['+21% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 518, notes: ['82% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 116, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 81, notes: ['13% margin', '+12pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 437, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 43, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 106, notes: ['17% margin', '+13pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'cost', label: 'Other', value: 13, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 193, notes: ['30% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 134, notes: ['21% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 5, type: 'cost', label: 'R&D', value: 110, notes: ['17% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'government', target: 'revenue', value: 335, width: 186, sourceWidth: 186, targetWidth: 186, y0: 668, y1: 785, sourceOrder: 0, targetOrder: 0 },
      { source: 'commercial', target: 'revenue', value: 299, width: 166, sourceWidth: 166, targetWidth: 165, y0: 1037, y1: 960.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 518, width: 287, sourceWidth: 287, targetWidth: 287, y0: 835.5, y1: 720.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 116, width: 63, sourceWidth: 63, targetWidth: 63, y0: 1011.5, y1: 1098.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 81, width: 44, sourceWidth: 44, targetWidth: 44, y0: 599, y1: 487, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 437, width: 242, sourceWidth: 242, targetWidth: 242, y0: 743, y1: 868, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 63, width: 35, sourceWidth: 35, targetWidth: 35, y0: 482.5, y1: 367.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'interest', target: 'net_profit', value: 43, width: 22, sourceWidth: 22, targetWidth: 23, y0: 446, y1: 396.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'other', value: 13, width: 7, sourceWidth: 7, targetWidth: 5, y0: 503.5, y1: 611.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5, width: 2, sourceWidth: 2, targetWidth: 2, y0: 508, y1: 723, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 193, width: 105, sourceWidth: 105, targetWidth: 105, y0: 799.5, y1: 850.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 134, width: 73, sourceWidth: 74, targetWidth: 73, y0: 889, y1: 1055.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 110, width: 60, sourceWidth: 63, targetWidth: 60, y0: 957.5, y1: 1240, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Palantir · 2024 财年第一季度',
        meta: {
          title: 'Palantir 2024 财年第一季度利润表',
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotations(zh),
        nodes: {
          government: { label: '政府', notes: ['同比 +16%'] },
          commercial: { label: '商业', notes: ['同比 +27%'] },
          revenue: { label: '收入', notes: ['同比 +21%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 +12 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +13 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 30%', '同比 (5 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 21%', '同比 (5 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 17%', '同比 +0 个百分点'] },
        },
        layout: { labels: labels(zh) },
      },
    },
  });
})();

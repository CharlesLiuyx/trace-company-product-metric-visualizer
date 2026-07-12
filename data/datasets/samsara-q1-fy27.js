/* Samsara Q1 FY27 income-statement Sankey, measured from the source PNG. */
(function () {
  const TITLE = '#16547d';
  const NAVY = '#002e4b';
  const NAVY_LINK = '#899da9';
  const GREEN = '#2ba42b';
  const GREEN_LABEL = '#008e50';
  const GREEN_LINK = '#9bd49a';
  const RED = '#d90000';
  const RED_LABEL = '#9d1500';
  const RED_LINK = '#df8585';
  const NOTE = '#696969';
  const RIGHT_LABEL_X = 2480;

  const samsaraLogo = `
    <g data-typography-role="brand" fill="${NAVY}">
      <path d="M18 4C50 4 76 29 76 61v54c0 42-26 67-58 81-32-14-58-39-58-81V61C-40 29-14 4 18 4Zm0 10C-8 14-29 35-29 61v54c0 33 17 53 47 68 30-15 47-35 47-68V61C65 35 44 14 18 14Z" transform="translate(84 0)"/>
      <path d="M102 83c-7-15-20-22-30-22-8 0-13 5-13 12 0 10 11 13 18 17 10 5 15 13 15 29v35h9v-35c0-12-4-19-14-24-9-5-19-8-19-13 0-3 2-5 6-5 8 0 18 6 23 18l5-12Zm-7 36c0-16 6-26 17-31 7-4 17-8 17-18 0-7-5-12-13-12-10 0-23 7-30 22l5 12c5-12 15-18 23-18 4 0 6 2 6 5 0 5-10 8-19 13-10 5-14 12-14 24v35h9v-35Z"/>
      <text x="183" y="134" font-family="Noto Sans,Arial,sans-serif" font-size="108" font-weight="700" letter-spacing="-5">samsara</text>
    </g>`;

  const cards = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="92" y="1153" width="295" height="148" rx="34" fill="${NAVY}"/>
      <text x="240" y="1220" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">ARR $2.0B</text>
      <text x="240" y="1261" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${zh ? '同比 +30%' : '+30% Y/Y'}</text>
      <rect x="398" y="1153" width="348" height="148" rx="34" fill="${NAVY}"/>
      <text x="572" y="1220" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${zh ? '客户 > $100K' : 'Customers > $100K'}</text>
      <text x="572" y="1261" text-anchor="middle" font-size="29" font-weight="500" fill="#fff"><tspan font-weight="800">3,363</tspan> ${zh ? '同比 +27%' : '+27% Y/Y'}</text>
      <text x="96" y="1347" font-size="29" font-weight="500" fill="${NOTE}">ARR = ${zh ? '年度经常性收入' : 'Annual Recurring Revenue'}</text>
    </g>`;

  const labels = {
    subscription: { blocks: [
      { x: 412, top: 460, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] },
      { x: 112, top: 694, anchor: 'start', lines: [{ text: 'Subscription', size: 40, weight: 800 }] },
    ] },
    other_revenue: { blocks: [
      { x: 427, top: 1018, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] },
      { x: 236, top: 1072, anchor: 'start', lines: [{ text: 'Other', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 895, top: 476, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1362, top: 342, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '75% margin', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1362, top: 1106, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1828, top: 254, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '2% margin', size: 29, weight: 400, color: NOTE }, { text: '+11pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 935, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    other_income: { blocks: [{ x: 2180, top: 408, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, weight: 400, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 283, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '9% margin', size: 29, weight: 400, color: NOTE }, { text: '+15pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 529, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 707, anchor: 'middle', lineGap: 10, lines: [{ text: 'Sales &', size: 32, weight: 800, color: RED_LABEL }, { text: 'marketing', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '43% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 944, anchor: 'middle', lineGap: 10, lines: [{ text: 'Research &', size: 32, weight: 800, color: RED_LABEL }, { text: 'development', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '20% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1180, anchor: 'middle', lineGap: 10, lines: [{ text: 'General & admin', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '11% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
  };

  const zhLabels = {
    subscription: { blocks: [{ x: 412, top: 460, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] }, { x: 112, top: 694, anchor: 'start', lines: [{ text: '订阅', size: 40, weight: 800 }] }] },
    other_revenue: { blocks: [{ x: 427, top: 1018, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] }, { x: 236, top: 1072, anchor: 'start', lines: [{ text: '其他', size: 40, weight: 800 }] }] },
    revenue: { blocks: [{ x: 895, top: 476, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +31%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1362, top: 342, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 75%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1362, top: 1106, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800, color: RED_LABEL }, { text: '成本', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1828, top: 254, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 2%', size: 29, weight: 400, color: NOTE }, { text: '同比 +11 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 935, anchor: 'middle', lineGap: 10, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    other_income: { blocks: [{ x: 2180, top: 408, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, weight: 400, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 283, anchor: 'middle', lineGap: 10, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 9%', size: 29, weight: 400, color: NOTE }, { text: '同比 +15 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 529, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 707, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与', size: 32, weight: 800, color: RED_LABEL }, { text: '营销', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 43%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 944, anchor: 'middle', lineGap: 10, lines: [{ text: '研究与', size: 32, weight: 800, color: RED_LABEL }, { text: '开发', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 20%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1180, anchor: 'middle', lineGap: 10, lines: [{ text: '一般及行政', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 11%', size: 29, weight: 400, color: NOTE }, { text: '同比 (8 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsara-q1-fy27',
    name: 'Samsara · Q1 FY27',
    company: 'Samsara',
    meta: {
      company: 'Samsara', title: 'Samsara Q1 FY27 Income Statement', period: 'Q1 FY27', periodNote: 'Ending Apr. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/samsara-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 126, titleWeight: 800, titleTextLength: 2300,
      periodX: 232, periodY: 305, periodNoteY: 349,
      logoWidth: 600, logoHeight: 200, logoY: 271, logoViewBox: '0 0 600 200', logoSvg: samsaraLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', nodeRadius: 0, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: cards(false),
    layout: {
      scale: 0.75,
      nodes: {
        subscription: { x: 391, y: 520, width: 72, height: 374 }, other_revenue: { x: 391, y: 1078, width: 72, height: 8 },
        revenue: { x: 859, y: 618, width: 73, height: 380 }, gross_profit: { x: 1326, y: 521, width: 72, height: 289 }, cost_of_revenue: { x: 1326, y: 990, width: 72, height: 94 },
        operating_profit: { x: 1792, y: 433, width: 73, height: 6 }, operating_expenses: { x: 1792, y: 629, width: 73, height: 284 },
        other_income: { x: 2140, y: 386, width: 72, height: 4 }, net_profit: { x: 2259, y: 329, width: 72, height: 6 }, tax: { x: 2259, y: 559, width: 72, height: 4 },
        sm: { x: 2259, y: 714, width: 72, height: 164 }, rnd: { x: 2259, y: 996, width: 72, height: 79 }, ga: { x: 2259, y: 1186, width: 72, height: 43 },
      }, labels,
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 469 },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 10 },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 479, notes: ['+31% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 361, notes: ['75% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 118 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 7, notes: ['2% margin', '+11pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 354 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 42 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 45, notes: ['9% margin', '+15pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 204, notes: ['43% of revenue', '(3pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: ['Research &', 'development'], value: 98, notes: ['20% of revenue', '(2pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'General & admin', value: 53, notes: ['11% of revenue', '(8pp) Y/Y'] },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 469, sourceWidth: 374, targetWidth: 372, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue', value: 10, sourceWidth: 8, targetWidth: 8, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 361, sourceWidth: 286, targetWidth: 289, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 118, sourceWidth: 94, targetWidth: 94, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 7, sourceWidth: 6, targetWidth: 6, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 354, sourceWidth: 283, targetWidth: 284, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3, sourceWidth: 2, targetWidth: 1, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 4, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 42, sourceWidth: 4, targetWidth: 5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 204, sourceWidth: 163, targetWidth: 164, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 98, sourceWidth: 78, targetWidth: 79, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 53, sourceWidth: 43, targetWidth: 43, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR', 'ARR $2.0B'],
      zh: {
        name: 'Samsara · 2027 财年第一季度',
        meta: { title: 'Samsara 2027 财年第一季度利润表', period: '2027 财年第一季度', periodNote: '截至 2026 年 4 月', titleSize: 106, titleTextLength: 2050 },
        annotationsSvg: cards(true),
        nodes: {
          subscription: { label: '订阅' }, other_revenue: { label: '其他' }, revenue: { label: '收入', notes: ['同比 +31%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 (2 个百分点)'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 +11 个百分点'] }, operating_expenses: { label: '营业费用' }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +15 个百分点'] }, tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 43%', '同比 (3 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 20%', '同比 (2 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 11%', '同比 (8 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

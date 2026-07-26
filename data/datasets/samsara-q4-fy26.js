/* Samsara Q4 FY26 income-statement Sankey, measured from the source PNG. */
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
  const samsaraLogo = `
    <g data-typography-role="brand" fill="${NAVY}">
      <g transform="translate(-102 0) scale(1.15 1)">
        <path d="M18 4C50 4 76 29 76 61v54c0 42-26 67-58 81-32-14-58-39-58-81V61C-40 29-14 4 18 4Zm0 10C-8 14-29 35-29 61v54c0 33 17 53 47 68 30-15 47-35 47-68V61C65 35 44 14 18 14Z" transform="translate(84 0)"/>
        <path d="M102 83c-7-15-20-22-30-22-8 0-13 5-13 12 0 10 11 13 18 17 10 5 15 13 15 29v35h9v-35c0-12-4-19-14-24-9-5-19-8-19-13 0-3 2-5 6-5 8 0 18 6 23 18l5-12Zm-7 36c0-16 6-26 17-31 7-4 17-8 17-18 0-7-5-12-13-12-10 0-23 7-30 22l5 12c5-12 15-18 23-18 4 0 6 2 6 5 0 5-10 8-19 13-10 5-14 12-14 24v35h9v-35Z"/>
      </g>
      <text x="107" y="134" textLength="438" lengthAdjust="spacingAndGlyphs" font-family="Noto Sans,Arial,sans-serif" font-size="108" font-weight="700" letter-spacing="-5">samsara</text>
    </g>`;

  const cards = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="subscription">
        <text x="115" y="719" font-size="40" font-weight="800" fill="${NAVY}">${zh ? '订阅' : 'Subscription'}</text>
      </g>
      <rect x="92" y="1153" width="295" height="148" rx="34" fill="${NAVY}"/>
      <text x="240" y="1220" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">ARR $1.9B</text>
      <text x="240" y="1261" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${zh ? '同比 +30%' : '+30% Y/Y'}</text>
      <rect x="398" y="1153" width="348" height="148" rx="34" fill="${NAVY}"/>
      <text x="572" y="1220" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${zh ? '客户 > $100K' : 'Customers > $100K'}</text>
      <text x="572" y="1261" text-anchor="middle" font-size="29" font-weight="500" fill="#fff"><tspan font-weight="800">3,194</tspan> ${zh ? '同比 +29%' : '+29% Y/Y'}</text>
      <text x="96" y="1347" font-size="29" font-weight="500" fill="${NOTE}">ARR = ${zh ? '年度经常性收入' : 'Annual Recurring Revenue'}</text>
    </g>`;

  const labels = {
    subscription: { blocks: [
      { x: 423, top: 462, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] },
    ] },
    other_revenue: { blocks: [
      { x: 427, top: 1035, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] },
      { x: 236, top: 1077, anchor: 'start', lines: [{ text: 'Other', size: 40, weight: 800 }] },
    ] },
    revenue: { blocks: [{ x: 895, top: 471, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '+28% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1362, top: 342, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '76% margin', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1362, top: 1128, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of', size: 34, weight: 800, color: RED_LABEL }, { text: 'revenue', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1828, top: 264, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '2% margin', size: 29, weight: 400, color: NOTE }, { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 952, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2165, top: 438, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, weight: 400, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2456, top: 306, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '5% margin', size: 29, weight: 400, color: NOTE }, { text: '+8pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2455, top: 519, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: 2466, top: 697, anchor: 'middle', lineGap: 10, lines: [{ text: 'Sales &', size: 32, weight: 800, color: RED_LABEL }, { text: 'marketing', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '40% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2472, top: 932, anchor: 'middle', lineGap: 10, lines: [{ text: 'Research &', size: 32, weight: 800, color: RED_LABEL }, { text: 'development', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '20% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: 2476, top: 1154, anchor: 'middle', lineGap: 10, lines: [{ text: 'General & admin', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '14% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE }] }] },
  };

  const zhLabels = {
    subscription: { blocks: [{ x: 423, top: 462, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] }] },
    other_revenue: { blocks: [{ x: 427, top: 1035, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400 }] }, { x: 236, top: 1077, anchor: 'start', lines: [{ text: '其他', size: 40, weight: 800 }] }] },
    revenue: { blocks: [{ x: 895, top: 471, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }, { text: '同比 +28%', size: 29, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1362, top: 342, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 76%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1362, top: 1128, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 34, weight: 800, color: RED_LABEL }, { text: '成本', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
    operating_profit: { blocks: [{ x: 1828, top: 264, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 2%', size: 29, weight: 400, color: NOTE }, { text: '同比 +7 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1828, top: 952, anchor: 'middle', lineGap: 10, lines: [{ text: '营业', size: 40, weight: 800, color: RED_LABEL }, { text: '费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
    interest: { blocks: [{ x: 2165, top: 438, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 31, weight: 400, color: GREEN_LABEL }] }] },
    net_profit: { blocks: [{ x: 2456, top: 306, anchor: 'middle', lineGap: 10, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 5%', size: 29, weight: 400, color: NOTE }, { text: '同比 +8 个百分点', size: 29, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2455, top: 519, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, weight: 400, color: RED_LABEL }] }] },
    sm: { blocks: [{ x: 2466, top: 697, anchor: 'middle', lineGap: 10, lines: [{ text: '销售与', size: 32, weight: 800, color: RED_LABEL }, { text: '营销', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 40%', size: 29, weight: 400, color: NOTE }, { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2472, top: 932, anchor: 'middle', lineGap: 10, lines: [{ text: '研究与', size: 32, weight: 800, color: RED_LABEL }, { text: '开发', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 20%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
    ga: { blocks: [{ x: 2476, top: 1154, anchor: 'middle', lineGap: 10, lines: [{ text: '一般及行政', size: 32, weight: 800, color: RED_LABEL }, { text: '$value', size: 33, weight: 400, color: RED_LABEL }, { text: '占收入 14%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsara-q4-fy26',
    name: 'Samsara · Q4 FY26',
    company: 'Samsara',
    meta: {
      company: 'Samsara', title: 'Samsara Q4 FY26 Income Statement', period: 'Q4 FY26', periodNote: 'Ending Jan. 2026',
      currency: '$', unit: 'M', decimals: 0,
      referenceImage: { src: 'input/processed/samsara-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 126, titleWeight: 800, titleTextLength: 2300,
      periodX: 232, periodY: 305, periodNoteY: 349,
      logoWidth: 706, logoHeight: 160, logoY: 272, logoViewBox: '56 0 600 200', logoSvg: samsaraLogo,
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
      scale: 0.9,
      nodes: {
        subscription: { x: 391, y: 526, width: 72, height: 395 }, other_revenue: { x: 391, y: 1099, width: 72, height: 7 },
        revenue: { x: 858, y: 615, width: 73, height: 402 }, gross_profit: { x: 1325, y: 525, width: 73, height: 307 }, cost_of_revenue: { x: 1325, y: 1015, width: 73, height: 96 },
        operating_profit: { x: 1793, y: 446, width: 72, height: 7 }, operating_expenses: { x: 1793, y: 632, width: 72, height: 299 },
        interest: { x: 2128, y: 412, width: 72, height: 5 }, net_profit: { x: 2259, y: 354, width: 72, height: 8 }, tax: { x: 2259, y: 560, width: 72, height: 4 },
        sm: { x: 2259, y: 683, width: 72, height: 160 }, rnd: { x: 2259, y: 967, width: 72, height: 81 }, ga: { x: 2259, y: 1176, width: 72, height: 57 },
      }, labels,
    },
    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 435 },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 9 },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 444, notes: ['+28% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 338, notes: ['76% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 106 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 9, notes: ['2% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 329 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 19 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 22, notes: ['5% margin', '+8pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: ['Sales &', 'marketing'], value: 176, notes: ['40% of revenue', '(4pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: ['Research &', 'development'], value: 90, notes: ['20% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'General & admin', value: 64, notes: ['14% of revenue', '(2pp) Y/Y'] },
    ],
    links: [
      { source: 'subscription', target: 'revenue', value: 435, sourceWidth: 395, targetWidth: 395, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue', value: 9, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 338, sourceWidth: 305, targetWidth: 307, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 106, sourceWidth: 96, targetWidth: 96, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 9, sourceWidth: 7, targetWidth: 7, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 329, sourceWidth: 299, targetWidth: 299, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3, sourceWidth: 3, targetWidth: 5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 5, sourceWidth: 4, targetWidth: 4, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'interest', target: 'net_profit', value: 19, sourceWidth: 5, targetWidth: 3, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 176, sourceWidth: 160, targetWidth: 160, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 90, sourceWidth: 81, targetWidth: 81, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 64, sourceWidth: 58, targetWidth: 57, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['ARR', 'ARR $1.9B'],
      zh: {
        name: 'Samsara · 2026 财年第四季度',
        meta: { title: 'Samsara 2026 财年第四季度利润表', period: '2026 财年第四季度', periodNote: '截至 2026 年 1 月', titleSize: 106, titleTextLength: 2050 },
        annotationsSvg: cards(true),
        nodes: {
          subscription: { label: '订阅' }, other_revenue: { label: '其他' }, revenue: { label: '收入', notes: ['同比 +28%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 (1 个百分点)'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 +7 个百分点'] }, operating_expenses: { label: '营业费用' }, interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +8 个百分点'] }, tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 40%', '同比 (4 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 20%', '同比 (1 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 14%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

/* Microsoft Q1 FY24 income statement by business unit ($B), measured from Source. */
(function () {
  const BLUE = '#01a6f0';
  const BLUE_LINK = '#85cff0';
  const GOLD = '#ffba01';
  const GOLD_LINK = '#f7d881';
  const GRAY = '#747474';
  const GRAY_LINK = '#b8b8b8';
  const HUB = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#5e5e5e';
  const TITLE = '#155077';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const paneLogo = (x, y, size, gap = 7) => `<g transform="translate(${x} ${y})"><rect width="${size}" height="${size}" fill="#f25022"/><rect x="${size + gap}" width="${size}" height="${size}" fill="#7fba00"/><rect y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/><rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/></g>`;
  const otherGuide = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other"
      data-link-numerator="other" data-link-denominator="net_profit"
      data-link-anchor-x="2260" data-link-anchor-y="584">
      <path d="M2198 584H2270C2306 584 2311 534 2350 534" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2256" y="628" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2256" y="669" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$0.4B</text>
    </g>`;
  const annotations = `
    <g data-typography-role="brand">
      <g transform="translate(71 405)">${paneLogo(0, 0, 27, 4)}<text x="70" y="48" font-family="Arial,sans-serif" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text><text x="148" y="93" font-family="Arial,sans-serif" font-size="47" font-weight="800" fill="#2f68b2">Linked</text><rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/><text x="315" y="92" text-anchor="middle" font-family="Arial,sans-serif" font-size="44" font-weight="800" fill="#fff">in</text></g>
      <g transform="translate(250 731) scale(1.08)">${BUSINESS_ICONS.microsoftAzure || ''}</g>
      <g transform="translate(191 1105) scale(.83)">${BUSINESS_ICONS.microsoftWindows || ''}</g>
      <g transform="translate(326 1100) scale(.84)">${BUSINESS_ICONS.microsoftXbox || ''}</g>
    </g>
    ${otherGuide(false)}`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 9) => ({ x, top, anchor, lines, lineGap });
  const companyLogo = `${paneLogo(0, 0, 60, 7)}
    <text x="150" y="104" font-family="Arial,sans-serif" font-size="104" font-weight="700" fill="#77787a">Microsoft</text>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q1-fy24-by-bu',
    name: 'Microsoft · Q1 FY24 ByBU',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft', title: 'Microsoft Q1 FY24 Income Statement',
      period: 'Q1 FY24', periodNote: 'Ending Sept. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q1-fy24-by-bu.png', width: 2667, height: 1500 },
      titleX: 1338, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2310,
      periodX: 2378, periodY: 253, periodNoteY: 298,
      logoWidth: 600, logoHeight: 130, logoX: 650, logoY: 250, logoViewBox: '0 0 650 130', logoSvg: companyLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: NOTE }, hub: { node: HUB, label: NOTE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 7.13,
      routes: { other: { x: 2198, y: 584, width: 0, height: 1 } },
      nodes: {
        productivity_business_processes: { x: 482, y: 441, width: 71, height: 131 },
        intelligent_cloud: { x: 482, y: 811, width: 71, height: 173 },
        more_personal_computing: { x: 482, y: 1198, width: 71, height: 95 },
        revenue: { x: 949, y: 657, width: 70, height: 403 },
        gross_profit: { x: 1416, y: 582, width: 71, height: 287 },
        cost_of_revenue: { x: 1416, y: 1035, width: 71, height: 114 },
        operating_profit: { x: 1884, y: 467, width: 70, height: 190 },
        operating_expenses: { x: 1884, y: 870, width: 70, height: 94 },
        net_profit: { x: 2350, y: 376, width: 71, height: 158 },
        tax: { x: 2350, y: 730, width: 71, height: 34 },
        rnd: { x: 2350, y: 905, width: 71, height: 45 },
        sm: { x: 2350, y: 1078, width: 71, height: 35 },
        ga: { x: 2350, y: 1249, width: 71, height: 9 },
      },
      labels: {
        productivity_business_processes: { blocks: [block(515, 352, 'middle', [line('$value', 40, 400, NOTE), line('+13% Y/Y', 28, 400, NOTE)]), block(283, 535, 'middle', [line('Productivity &', 32, 800, NOTE), line('Business Processes', 32, 800, NOTE), line('54% operating margin', 28, 400, NOTE)], 7)] },
        intelligent_cloud: { blocks: [block(515, 721, 'middle', [line('$value', 40, 400, NOTE), line('+19% Y/Y', 28, 400, NOTE)]), block(304, 905, 'middle', [line('Intelligent Cloud', 32, 800, NOTE), line('48% operating margin', 28, 400, NOTE)], 10)] },
        more_personal_computing: { blocks: [block(515, 1105, 'middle', [line('$value', 40, 400, NOTE), line('+3% Y/Y', 28, 400, NOTE)]), block(250, 1209, 'middle', [line('More Personal Computing', 32, 800, NOTE), line('31% operating margin', 28, 400, NOTE)], 10)] },
        revenue: { blocks: [block(983, 516, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+13% Y/Y', 28, 400, NOTE)], 10)] },
        gross_profit: { blocks: [block(1450, 400, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('71% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)], 10)] },
        cost_of_revenue: { blocks: [block(1451, 1173, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)], 4)] },
        operating_profit: { blocks: [block(1917, 284, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('48% margin', 28, 400, NOTE), line('+5pp Y/Y', 28, 400, NOTE)], 10)] },
        operating_expenses: { blocks: [block(1916, 983, 'middle', [line('Operating', 40, 800), line('Expenses', 40, 800), line('$value', 38)], 9)] },
        net_profit: { blocks: [block(2439, 384, 'start', [line('Net profit', 40, 800), line('$value', 40), line('39% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)], 10)] },
        tax: { blocks: [block(2529, 720, 'middle', [line('Tax', 31, 800), line('$value', 31)], 8)] },
        rnd: { blocks: [block(2530, 899, 'middle', [line('R&D', 31, 800), line('$value', 31), line('12% of revenue', 28, 400, NOTE)], 8)] },
        sm: { blocks: [block(2529, 1057, 'middle', [line('S&M', 31, 800), line('$value', 31), line('9% of revenue', 28, 400, NOTE), line('(2pp) Y/Y', 28, 400, NOTE)], 8)] },
        ga: { blocks: [block(2529, 1190, 'middle', [line('G&A', 31, 800), line('$value', 31), line('3% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)], 21)] },
        other: { blocks: [] },
      },
    },
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other', value: 0.4, valueText: '$0.4B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'productivity_business_processes', col: 0, order: 0, type: 'source', label: ['Productivity &', 'Business Processes'], value: 18.6, notes: ['+13% Y/Y', '54% operating margin'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'intelligent_cloud', col: 0, order: 1, type: 'source', label: 'Intelligent Cloud', value: 24.3, notes: ['+19% Y/Y', '48% operating margin'], color: GOLD, linkTint: GOLD_LINK },
      { id: 'more_personal_computing', col: 0, order: 2, type: 'source', label: 'More Personal Computing', value: 13.7, notes: ['+3% Y/Y', '31% operating margin'], color: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 56.5, notes: ['+13% Y/Y'], color: HUB },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 40.2, notes: ['71% margin', '+2pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 16.3, valueText: '($16.3B)', color: RED, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 26.9, notes: ['48% margin', '+5pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 13.3, valueText: '($13.3B)', color: RED, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 22.3, notes: ['39% margin', '+4pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.0, valueText: '($5.0B)', color: RED, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 6.7, notes: ['12% of revenue'], color: RED, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 5.2, notes: ['9% of revenue', '(2pp) Y/Y'], color: RED, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 1.5, notes: ['3% of revenue', '(1pp) Y/Y'], color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 18.6, sourceWidth: 131, targetWidth: 132, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 24.3, sourceWidth: 173, targetWidth: 173, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 13.7, sourceWidth: 95, targetWidth: 98, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 40.2, sourceWidth: 287, targetWidth: 287, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 16.3, sourceWidth: 116, targetWidth: 114, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 26.9, sourceWidth: 191, targetWidth: 190, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 13.3, sourceWidth: 96, targetWidth: 94, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 21.9, sourceWidth: 157, targetWidth: 158, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.0, sourceWidth: 33, targetWidth: 34, sourceOrder: 1 },
      { sourceRoute: 'other', target: 'net_profit', value: 0.4, sourceWidth: 2, targetWidth: 2, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 6.7, sourceWidth: 47, targetWidth: 45, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 5.2, sourceWidth: 37, targetWidth: 35, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.5, sourceWidth: 10, targetWidth: 9, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['Microsoft 365', 'Linked', 'in'],
      zh: {
        name: 'Microsoft · 2024 财年第一季度（按业务部门）',
        meta: { title: 'Microsoft 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2023 年 9 月', titleTextLength: 1900 },
        annotationsSvg: annotations.replace(otherGuide(false), otherGuide(true)),
        nonNodeMetrics: { other: { label: '其他' } },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程', notes: ['同比 +13%', '营业利润率 54%'] },
          intelligent_cloud: { label: '智能云', notes: ['同比 +19%', '营业利润率 48%'] },
          more_personal_computing: { label: '更多个人计算', notes: ['同比 +3%', '营业利润率 31%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] }, gross_profit: { label: '毛利润', notes: ['利润率 71%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 39%', '同比 +4 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 12%'] },
          sm: { label: '销售与市场', notes: ['占收入 9%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            sm: {
              blocks: [
                block(2529, 1057, 'middle', [
                  line('销售与市场', 31, 800),
                  line('$value', 31),
                  line('占收入 9%', 28, 400, NOTE),
                  line('同比 (2 个百分点)', 28, 400, NOTE),
                ], 0),
              ],
            },
          },
        },
      },
    },
  });
})();

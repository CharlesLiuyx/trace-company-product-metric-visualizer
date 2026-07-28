/* Microsoft Q1 FY24 income statement ($B), measured from the source image. */
(function () {
  const BLUE = '#00a5f2';
  const BLUE_LINK = '#85cef2';
  const ORANGE = '#ff4f18';
  const ORANGE_LINK = '#f7a990';
  const WINDOWS = '#ffba00';
  const WINDOWS_LINK = '#f7d885';
  const GAMING = '#59bb00';
  const GAMING_LINK = '#add885';
  const LINKEDIN = '#00a5f2';
  const SEARCH = '#2e578c';
  const SEARCH_LINK = '#9aabc4';
  const OTHER_REVENUE = '#000000';
  const OTHER_LINK = '#858585';
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
  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;
  const officeLogo = `
    <g transform="translate(323 542) scale(.9)">
      <defs>
        <linearGradient id="ms-q1-fy24-office" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#a00024"/><stop offset=".55" stop-color="#df2427"/><stop offset="1" stop-color="#f45b18"/>
        </linearGradient>
      </defs>
      <path d="M58 0L116 18V105L58 124L0 100V26Z" fill="url(#ms-q1-fy24-office)"/>
      <path d="M31 34L70 19L94 31V92L68 105L31 88Z" fill="#f2f2f2"/>
      <path d="M58 0L116 18L82 34L31 26Z" fill="#f15a24" opacity=".78"/>
    </g>`;
  const otherGuide = (zh) => `
    <g class="sankey-interactive-annotation"
      data-node="other" data-link-numerator="other" data-link-denominator="net_profit"
      data-link-anchor-x="2260" data-link-anchor-y="555">
      <path d="M2203 580H2268C2305 580 2307 479 2334 479"
        fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2242" y="619" text-anchor="middle" font-size="31" font-weight="800"
        fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2242" y="661" text-anchor="middle" font-size="31" font-weight="400"
        fill="${GREEN_LABEL}">$0.4B</text>
    </g>`;
  const annotations = `
    <g data-typography-role="brand">
      ${icon('microsoftAzure', 317, 342, 0.77)}
      ${officeLogo}
      ${icon('microsoftWindows', 328, 711, 0.79)}
      ${icon('microsoftXbox', 343, 837, 0.88)}
      ${icon('microsoftLinkedIn', 327, 984, 1)}
      ${icon('microsoftBing', 345, 1102, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1257, 0.50)}
    </g>
    ${otherGuide(false)}`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 9) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q1-fy24',
    name: 'Microsoft · Q1 FY24',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Sept. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2320,
      periodX: 2475, periodY: 249, periodNoteY: 291,
      logoWidth: 193, logoHeight: 193, logoY: 286, logoViewBox: '0 0 193 193',
      logoSvg: BUSINESS_ICONS.microsoftLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: NOTE }, hub: { node: HUB, label: NOTE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 5.91,
      routes: { other: { x: 2203, y: 580, width: 0, height: 1 } },
      nodes: {
        server: { x: 466, y: 337, width: 71, height: 130 },
        office: { x: 466, y: 576, width: 71, height: 78 },
        windows: { x: 466, y: 757, width: 71, height: 32 },
        gaming: { x: 466, y: 895, width: 71, height: 20 },
        linkedin: { x: 466, y: 1026, width: 71, height: 22 },
        search: { x: 466, y: 1152, width: 71, height: 16 },
        other_revenue: { x: 466, y: 1282, width: 71, height: 25 },
        revenue: { x: 936, y: 669, width: 70, height: 334 },
        gross_profit: { x: 1397, y: 566, width: 72, height: 238 },
        cost_of_revenue: { x: 1395, y: 1034, width: 71, height: 95 },
        operating_profit: { x: 1858, y: 460, width: 70, height: 159 },
        operating_expenses: { x: 1858, y: 844, width: 70, height: 76 },
        net_profit: { x: 2334, y: 347, width: 71, height: 132 },
        tax: { x: 2334, y: 729, width: 71, height: 27 },
        rnd: { x: 2334, y: 911, width: 71, height: 38 },
        sm: { x: 2334, y: 1079, width: 71, height: 29 },
        ga: { x: 2334, y: 1250, width: 71, height: 7 },
      },
      labels: {
        server: { blocks: [block(260, 377, 'end', [line('Server', 40, 800, NOTE)]), block(501, 247, 'middle', [line('$value', 40, 400, NOTE), line('+21% Y/Y', 28, 400, NOTE)])] },
        office: { blocks: [block(260, 594, 'end', [line('Office', 40, 800, NOTE)]), block(501, 488, 'middle', [line('$value', 40, 400, NOTE), line('+13% Y/Y', 28, 400, NOTE)])] },
        windows: { blocks: [block(294, 752, 'end', [line('Windows', 40, 800, NOTE)]), block(501, 667, 'middle', [line('$value', 40, 400, NOTE), line('+5% Y/Y', 28, 400, NOTE)])] },
        gaming: { blocks: [block(276, 880, 'end', [line('Gaming', 40, 800, NOTE)]), block(501, 804, 'middle', [line('$value', 40, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)])] },
        linkedin: { blocks: [block(294, 1012, 'end', [line('LinkedIn', 40, 800, NOTE)]), block(501, 938, 'middle', [line('$value', 40, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)])] },
        search: { blocks: [block(274, 1139, 'end', [line('Search', 40, 800, NOTE)]), block(501, 1063, 'middle', [line('$value', 40, 400, NOTE), line('+5% Y/Y', 28, 400, NOTE)])] },
        other_revenue: { blocks: [block(272, 1269, 'end', [line('Other', 40, 800, NOTE)]), block(501, 1192, 'middle', [line('$value', 40, 400, NOTE), line('+0% Y/Y', 28, 400, NOTE)])] },
        revenue: { blocks: [block(971, 525, 'middle', [line('Revenue', 40, 800, NOTE), line('$value', 40, 400, NOTE), line('+13% Y/Y', 28, 400, NOTE)], 10)] },
        gross_profit: { blocks: [block(1433, 386, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('71% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)], 10)] },
        cost_of_revenue: { blocks: [block(1431, 1148, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)], 10)] },
        operating_profit: { blocks: [block(1893, 278, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('48% margin', 28, 400, NOTE), line('+5pp Y/Y', 28, 400, NOTE)], 10)] },
        operating_expenses: { blocks: [block(1893, 946, 'middle', [line('Operating', 40, 800), line('Expenses', 40, 800), line('$value', 38)], 9)] },
        net_profit: { blocks: [block(2435, 373, 'start', [line('Net profit', 40, 800), line('$value', 40), line('39% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)], 10)] },
        tax: { blocks: [block(2534, 678, 'middle', [line('Tax', 31, 800), line('$value', 31)], 8)] },
        rnd: { blocks: [block(2534, 904, 'middle', [line('R&D', 31, 800), line('$value', 31), line('12% of revenue', 27, 400, NOTE)], 8)] },
        sm: { blocks: [block(2534, 1062, 'middle', [line('S&M', 31, 800), line('$value', 31), line('9% of revenue', 27, 400, NOTE), line('(2pp) Y/Y', 27, 400, NOTE)], 8)] },
        ga: { blocks: [block(2534, 1238, 'middle', [line('G&A', 31, 800), line('$value', 31), line('3% of revenue', 27, 400, NOTE), line('(1pp) Y/Y', 27, 400, NOTE)], 8)] },
        other: { blocks: [] },
      },
    },
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other', value: 0.4, valueText: '$0.4B', type: 'profit', labelColor: GREEN_LABEL },
    ],
    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 22.3, notes: ['+21% Y/Y'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'office', col: 0, order: 1, type: 'source', label: 'Office', value: 13.1, notes: ['+13% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'windows', col: 0, order: 2, type: 'source', label: 'Windows', value: 5.6, notes: ['+5% Y/Y'], color: WINDOWS, linkTint: WINDOWS_LINK },
      { id: 'gaming', col: 0, order: 3, type: 'source', label: 'Gaming', value: 3.9, notes: ['+9% Y/Y'], color: GAMING, linkTint: GAMING_LINK },
      { id: 'linkedin', col: 0, order: 4, type: 'source', label: 'LinkedIn', value: 3.9, notes: ['+9% Y/Y'], color: LINKEDIN, linkTint: BLUE_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.1, notes: ['+5% Y/Y'], color: SEARCH, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 4.6, notes: ['+0% Y/Y'], color: OTHER_REVENUE, linkTint: OTHER_LINK },
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
      { source: 'server', target: 'revenue', value: 22.3, sourceWidth: 130, targetWidth: 132, targetOrder: 0 },
      { source: 'office', target: 'revenue', value: 13.1, sourceWidth: 78, targetWidth: 77, targetOrder: 1 },
      { source: 'windows', target: 'revenue', value: 5.6, sourceWidth: 32, targetWidth: 33, targetOrder: 2 },
      { source: 'gaming', target: 'revenue', value: 3.9, sourceWidth: 20, targetWidth: 23, targetOrder: 3 },
      { source: 'linkedin', target: 'revenue', value: 3.9, sourceWidth: 22, targetWidth: 23, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.1, sourceWidth: 16, targetWidth: 19, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 4.6, sourceWidth: 25, targetWidth: 27, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 40.2, sourceWidth: 239, targetWidth: 238, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 16.3, sourceWidth: 95, targetWidth: 95, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 26.9, sourceWidth: 159, targetWidth: 159, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 13.3, sourceWidth: 79, targetWidth: 76, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 21.9, sourceWidth: 132, targetWidth: 132, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.0, sourceWidth: 27, targetWidth: 27, sourceOrder: 1 },
      { sourceRoute: 'other', target: 'net_profit', value: 0.4, sourceWidth: 2, targetWidth: 2, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 6.7, sourceWidth: 38, targetWidth: 38, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 5.2, sourceWidth: 29, targetWidth: 29, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.5, sourceWidth: 9, targetWidth: 7, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Microsoft · 2024 财年第一季度',
        meta: { title: 'Microsoft 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2023 年 9 月' },
        annotationsSvg: `<g data-typography-role="brand">${icon('microsoftAzure', 317, 342, 0.77)}${officeLogo}${icon('microsoftWindows', 328, 711, 0.79)}${icon('microsoftXbox', 343, 837, 0.88)}${icon('microsoftLinkedIn', 327, 984, 1)}${icon('microsoftBing', 345, 1102, 0.83)}${icon('microsoftOtherCluster', 321, 1257, 0.50)}</g>${otherGuide(true)}`,
        nonNodeMetrics: { other: { label: '其他' } },
        nodes: {
          server: { label: '服务器', notes: ['同比 +21%'] }, office: { label: 'Office', notes: ['同比 +13%'] },
          windows: { label: 'Windows', notes: ['同比 +5%'] }, gaming: { label: '游戏', notes: ['同比 +9%'] },
          linkedin: { label: 'LinkedIn', notes: ['同比 +9%'] }, search: { label: '搜索', notes: ['同比 +5%'] },
          other_revenue: { label: '其他', notes: ['同比 +0%'] }, revenue: { label: '收入', notes: ['同比 +13%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 71%', '同比 +2 个百分点'] }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 48%', '同比 +5 个百分点'] }, operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 39%', '同比 +4 个百分点'] }, tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 12%'] }, sm: { label: '销售与市场', notes: ['占收入 9%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
      },
    },
  });
})();

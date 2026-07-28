/* Microsoft Q2 FY24 income statement ($B), measured from the Source image. */
(function () {
  const BLUE = '#00a5f2';
  const BLUE_LINK = '#85cef2';
  const OFFICE = '#ff4f18';
  const OFFICE_LINK = '#f7a990';
  const GAMING = '#59bb00';
  const GAMING_LINK = '#add885';
  const WINDOWS = '#ffba00';
  const WINDOWS_LINK = '#f7d885';
  const LINKEDIN = '#00a5f2';
  const LINKEDIN_LINK = '#85cef2';
  const SEARCH = '#2e578c';
  const SEARCH_LINK = '#9aabc4';
  const OTHER = '#000000';
  const OTHER_LINK = '#858585';
  const HUB = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#5e5e5e';
  const RIGHT_LABEL_X = 2529;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;
  const officeIcon = `
    <g transform="translate(321 529) scale(0.94)" data-typography-role="brand">
      <defs>
        <linearGradient id="ms-q2-fy24-office-a" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stop-color="#a12b83"/><stop offset="1" stop-color="#e20d22"/>
        </linearGradient>
        <linearGradient id="ms-q2-fy24-office-b" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ff7a20"/><stop offset="1" stop-color="#d51f20"/>
        </linearGradient>
      </defs>
      <path d="M54 0L106 17V107L54 132L8 111V29Z" fill="url(#ms-q2-fy24-office-a)"/>
      <path d="M54 18L88 28V96L54 111L28 99V42Z" fill="#f2f2f2"/>
      <path d="M54 0L106 17V107L88 96V28L54 18Z" fill="url(#ms-q2-fy24-office-b)"/>
    </g>`;
  const annotations = `
    <g data-typography-role="brand">
      ${icon('microsoftAzure', 318, 305, 0.77)}
      ${officeIcon}
      ${icon('microsoftXbox', 318, 711, 0.88)}
      ${icon('microsoftWindows', 322, 870, 0.79)}
      ${icon('microsoftLinkedIn', 335, 1024, 1)}
      ${icon('microsoftBing', 345, 1152, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1307, 0.50)}
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q2-fy24',
    name: 'Microsoft · Q2 FY24',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2320,
      periodX: 2528,
      periodY: 260,
      periodNoteY: 302,
      logoWidth: 193,
      logoHeight: 193,
      logoY: 239,
      logoViewBox: '0 0 193 193',
      logoSvg: BUSINESS_ICONS.microsoftLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: NOTE },
        hub: { node: HUB, label: NOTE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 5.4,
      nodes: {
        server: { x: 472, y: 317, width: 71, height: 128 },
        office: { x: 472, y: 564, width: 71, height: 70 },
        gaming: { x: 472, y: 755, width: 71, height: 37 },
        windows: { x: 472, y: 908, width: 71, height: 26 },
        linkedin: { x: 472, y: 1059, width: 71, height: 22 },
        search: { x: 472, y: 1196, width: 71, height: 16 },
        other_revenue: { x: 472, y: 1337, width: 71, height: 24 },
        revenue: { x: 939, y: 683, width: 70, height: 335 },
        gross_profit: { x: 1403, y: 584, width: 72, height: 228 },
        cost_of_revenue: { x: 1406, y: 1005, width: 71, height: 104 },
        operating_profit: { x: 1874, y: 495, width: 70, height: 145 },
        operating_expenses: { x: 1874, y: 842, width: 70, height: 81 },
        net_profit: { x: 2340, y: 388, width: 71, height: 116 },
        tax: { x: 2340, y: 698, width: 71, height: 22 },
        other: { x: 2340, y: 821, width: 71, height: 1 },
        rnd: { x: 2340, y: 967, width: 71, height: 36 },
        sm: { x: 2340, y: 1142, width: 71, height: 31 },
        ga: { x: 2340, y: 1316, width: 71, height: 8 },
      },
      labels: {
        server: { blocks: [block(268, 356, 'end', [line('Server', 40, 800, NOTE)]), block(508, 221, 'middle', [line('$value', 40, 400, NOTE), line('+22% Y/Y', 28, 400, NOTE)], 9)] },
        office: { blocks: [block(260, 578, 'end', [line('Office', 40, 800, NOTE)]), block(506, 469, 'middle', [line('$value', 40, 400, NOTE), line('+14% Y/Y', 28, 400, NOTE)], 9)] },
        gaming: { blocks: [block(289, 753, 'end', [line('Gaming', 38, 800, NOTE)]), block(509, 667, 'middle', [line('$value', 40, 400, NOTE), line('+49% Y/Y', 28, 400, NOTE)], 9)] },
        windows: { blocks: [block(289, 894, 'end', [line('Windows', 38, 800, NOTE)]), block(508, 812, 'middle', [line('$value', 40, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)], 9)] },
        linkedin: { blocks: [block(288, 1043, 'end', [line('LinkedIn', 38, 800, NOTE)]), block(503, 967, 'middle', [line('$value', 40, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)], 9)] },
        search: { blocks: [block(272, 1182, 'end', [line('Search', 38, 800, NOTE)]), block(505, 1102, 'middle', [line('$value', 40, 400, NOTE), line('+0% Y/Y', 28, 400, NOTE)], 9)] },
        other_revenue: { blocks: [block(272, 1323, 'end', [line('Other', 38, 800, NOTE)]), block(505, 1239, 'middle', [line('$value', 40, 400, NOTE), line('+3% Y/Y', 28, 400, NOTE)], 9)] },
        revenue: { blocks: [block(972, 539, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+18% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [block(1437, 401, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('68% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1439, 1129, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)])] },
        operating_profit: { blocks: [block(1911, 313, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('44% margin', 28, 400, NOTE), line('+5pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1906, 943, 'middle', [line('Operating', 40, 800), line('Expenses', 40, 800), line('$value', 38)])] },
        net_profit: { blocks: [block(2437, 377, 'start', [line('Net profit', 40, 800), line('$value', 40), line('35% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [block(RIGHT_LABEL_X, 633, 'middle', [line('Tax', 30, 800), line('$value', 30)])] },
        other: { blocks: [block(RIGHT_LABEL_X, 767, 'middle', [line('Other', 30, 800), line('$value', 30)])] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 945, 'middle', [line('R&D', 30, 800), line('$value', 30), line('12% of revenue', 28, 400, NOTE)])] },
        sm: { blocks: [block(RIGHT_LABEL_X, 1117, 'middle', [line('S&M', 30, 800), line('$value', 30), line('10% of revenue', 28, 400, NOTE)])] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1276, 'middle', [line('G&A', 30, 800), line('$value', 30), line('3% of revenue', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 24.0, valueText: '$24.0B', color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'office', col: 0, order: 1, type: 'source', label: 'Office', value: 13.5, color: OFFICE, labelColor: NOTE, linkTint: OFFICE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 7.1, color: GAMING, labelColor: NOTE, linkTint: GAMING_LINK },
      { id: 'windows', col: 0, order: 3, type: 'source', label: 'Windows', value: 5.3, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'linkedin', col: 0, order: 4, type: 'source', label: 'LinkedIn', value: 4.2, color: LINKEDIN, labelColor: NOTE, linkTint: LINKEDIN_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.2, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 4.8, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 62.0, valueText: '$62.0B', color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 42.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 27.0, valueText: '$27.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 15.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 21.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 6.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'server', target: 'revenue', value: 24.0, sourceWidth: 128, targetWidth: 130, targetOrder: 0 },
      { source: 'office', target: 'revenue', value: 13.5, sourceWidth: 70, targetWidth: 73, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 7.1, sourceWidth: 37, targetWidth: 38, targetOrder: 2 },
      { source: 'windows', target: 'revenue', value: 5.3, sourceWidth: 26, targetWidth: 29, targetOrder: 3 },
      { source: 'linkedin', target: 'revenue', value: 4.2, sourceWidth: 22, targetWidth: 23, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.2, sourceWidth: 16, targetWidth: 17, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 4.8, sourceWidth: 24, targetWidth: 25, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 42.4, sourceWidth: 228, targetWidth: 228, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 19.6, sourceWidth: 107, targetWidth: 104, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 27.0, sourceWidth: 145, targetWidth: 145, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.4, sourceWidth: 83, targetWidth: 81, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 21.9, sourceWidth: 117, targetWidth: 116, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.7, sourceWidth: 25, targetWidth: 22, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.5, sourceWidth: 3, targetWidth: 1, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 7.1, sourceWidth: 38, targetWidth: 36, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.2, sourceWidth: 33, targetWidth: 31, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.0, sourceWidth: 10, targetWidth: 8, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Microsoft · 2024 财年第二季度',
        meta: { title: 'Microsoft 2024 财年第二季度利润表', period: 'FY24 第二季度', periodNote: '截至 2023 年 12 月' },
        nodes: {
          server: { label: '服务器' },
          office: { label: 'Office' },
          gaming: { label: '游戏' },
          windows: { label: 'Windows' },
          linkedin: { label: 'LinkedIn' },
          search: { label: '搜索' },
          other_revenue: { label: '其他' },
          revenue: { label: '收入' },
          gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
      },
    },
  });
})();

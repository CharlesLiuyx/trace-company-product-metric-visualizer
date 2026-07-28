/* Microsoft Q4 FY25 income statement ($B), measured from the source image. */
(function () {
  const BLUE = '#00a5f2';
  const BLUE_LINK = '#85cef2';
  const PURPLE = '#8a64b9';
  const PURPLE_LINK = '#c2b2d7';
  const GAMING = '#59bb00';
  const GAMING_LINK = '#add885';
  const LINKEDIN = '#ffba00';
  const LINKEDIN_LINK = '#f7d885';
  const WINDOWS = '#00a5f2';
  const WINDOWS_LINK = '#85cef2';
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
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2524;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;
  const annotations = `
    <g data-typography-role="brand">
      ${icon('microsoftAzure', 317, 312, 0.77)}
      ${icon('microsoft365Commercial', 325, 544, 0.90)}
      ${icon('microsoftXbox', 317, 727, 0.88)}
      ${icon('microsoftLinkedIn', 334, 867, 1.00)}
      ${icon('microsoftWindows', 326, 996, 0.79)}
      ${icon('microsoftBing', 345, 1129, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1295, 0.50)}
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q4-fy25',
    name: 'Microsoft · Q4 FY25',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending June 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2320,
      periodX: 2522, periodY: 260, periodNoteY: 301,
      logoWidth: 193, logoHeight: 193, logoY: 239, logoViewBox: '0 0 193 193',
      logoSvg: BUSINESS_ICONS.microsoftLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: NOTE }, hub: { node: HUB, label: NOTE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 4.4,
      nodes: {
        server: { x: 475, y: 304, width: 71, height: 121 },
        microsoft_365_commercial: { x: 475, y: 549, width: 71, height: 104 },
        gaming: { x: 475, y: 768, width: 71, height: 23 },
        linkedin: { x: 475, y: 903, width: 71, height: 18 },
        windows_devices: { x: 475, y: 1036, width: 71, height: 19 },
        search: { x: 475, y: 1172, width: 71, height: 14 },
        other_revenue: { x: 475, y: 1297, width: 71, height: 25 },
        revenue: { x: 942, y: 639, width: 70, height: 336 },
        gross_profit: { x: 1411, y: 539, width: 72, height: 229 },
        cost_of_revenue: { x: 1409, y: 948, width: 71, height: 104 },
        operating_profit: { x: 1877, y: 453, width: 70, height: 149 },
        operating_expenses: { x: 1877, y: 777, width: 70, height: 77 },
        net_profit: { x: 2343, y: 369, width: 71, height: 118 },
        tax: { x: 2343, y: 642, width: 71, height: 21 },
        other: { x: 2343, y: 791, width: 71, height: 5 },
        rnd: { x: 2343, y: 893, width: 71, height: 36 },
        sm: { x: 2343, y: 1088, width: 71, height: 30 },
        ga: { x: 2343, y: 1282, width: 71, height: 6 },
      },
      labels: {
        server: { blocks: [block(227, 344, 'end', [line('Server', 40, 800, NOTE)]), block(510, 214, 'middle', [line('$value', 40, 400, NOTE), line('+27% Y/Y', 28, 400, NOTE)], 9)] },
        microsoft_365_commercial: { blocks: [block(150, 551, 'middle', [line('Microsoft 365', 38, 800, NOTE), line('Commercial', 38, 800, NOTE)], 11), block(510, 458, 'middle', [line('$value', 40, 400, NOTE), line('+16% Y/Y', 28, 400, NOTE)], 9)] },
        gaming: { blocks: [block(245, 754, 'end', [line('Gaming', 38, 800, NOTE)]), block(510, 678, 'middle', [line('$value', 40, 400, NOTE), line('+10% Y/Y', 28, 400, NOTE)], 9)] },
        linkedin: { blocks: [block(256, 893, 'end', [line('LinkedIn', 38, 800, NOTE)]), block(510, 811, 'middle', [line('$value', 40, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)], 9)] },
        windows_devices: { blocks: [block(259, 999, 'end', [line('Windows', 38, 800, NOTE), line('& Devices', 38, 800, NOTE)], 11), block(510, 944, 'middle', [line('$value', 40, 400, NOTE), line('+2% Y/Y', 28, 400, NOTE)], 9)] },
        search: { blocks: [block(245, 1159, 'end', [line('Search', 38, 800, NOTE)]), block(510, 1078, 'middle', [line('$value', 40, 400, NOTE), line('+17% Y/Y', 28, 400, NOTE)], 9)] },
        other_revenue: { blocks: [block(218, 1283, 'end', [line('Other', 38, 800, NOTE)]), block(510, 1202, 'middle', [line('$value', 40, 400, NOTE), line('+15% Y/Y', 28, 400, NOTE)], 9)] },
        revenue: { blocks: [block(977, 489, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+18% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [block(1447, 350, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('69% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1445, 1067, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)])] },
        operating_profit: { blocks: [block(1912, 272, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('45% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1912, 871, 'middle', [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
        net_profit: { blocks: [block(2434, 362, 'start', [line('Net profit', 40, 800), line('$value', 40), line('36% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [block(RIGHT_LABEL_X, 612, 'middle', [line('Tax', 30, 800), line('$value', 30)])] },
        other: { blocks: [block(RIGHT_LABEL_X, 739, 'middle', [line('Other', 30, 800), line('$value', 30)])] },
        rnd: { blocks: [block(2532, 870, 'middle', [line('R&D', 30, 800), line('$value', 30), line('12% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        sm: { blocks: [block(RIGHT_LABEL_X, 1056, 'middle', [line('S&M', 30, 800), line('$value', 30), line('10% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1243, 'middle', [line('G&A', 30, 800), line('$value', 30), line('3% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 27.8, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'microsoft_365_commercial', col: 0, order: 1, type: 'source', label: ['Microsoft 365', 'Commercial'], value: 24.3, color: PURPLE, labelColor: NOTE, linkTint: PURPLE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 5.5, color: GAMING, labelColor: NOTE, linkTint: GAMING_LINK },
      { id: 'linkedin', col: 0, order: 3, type: 'source', label: 'LinkedIn', value: 4.6, color: LINKEDIN, labelColor: NOTE, linkTint: LINKEDIN_LINK },
      { id: 'windows_devices', col: 0, order: 4, type: 'source', label: ['Windows', '& Devices'], value: 4.3, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.6, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 6.2, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 76.4, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 52.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 24.0, valueText: '($24.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 34.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 18.1, valueText: '($18.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 27.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 1.7, valueText: '($1.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 8.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 7.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'server', target: 'revenue', value: 27.8, sourceWidth: 121, targetWidth: 124, y0: 364.5, y1: 701, targetOrder: 0 },
      { source: 'microsoft_365_commercial', target: 'revenue', value: 24.3, sourceWidth: 104, targetWidth: 107, y0: 601, y1: 816.5, targetOrder: 1, curve: { c1x: 790, c2x: 825 } },
      { source: 'gaming', target: 'revenue', value: 5.5, sourceWidth: 23, targetWidth: 24, y0: 779.5, y1: 882, targetOrder: 2 },
      { source: 'linkedin', target: 'revenue', value: 4.6, sourceWidth: 18, targetWidth: 19, y0: 912, y1: 903.5, targetOrder: 3 },
      { source: 'windows_devices', target: 'revenue', value: 4.3, sourceWidth: 19, targetWidth: 20, y0: 1045.5, y1: 923, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.6, sourceWidth: 14, targetWidth: 15, y0: 1179, y1: 940.5, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 6.2, sourceWidth: 25, targetWidth: 27, y0: 1309.5, y1: 961.5, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 52.4, sourceWidth: 231, targetWidth: 229, y0: 754.5, y1: 653.5, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 24.0, sourceWidth: 105, targetWidth: 104, y0: 922.5, y1: 1000, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 34.3, sourceWidth: 151, targetWidth: 149, y0: 614.5, y1: 527.5, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 18.1, sourceWidth: 78, targetWidth: 77, y0: 729, y1: 815.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 27.2, sourceWidth: 120, targetWidth: 118, y0: 513, y1: 428, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.4, sourceWidth: 23, targetWidth: 21, y0: 584.5, y1: 652.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 1.7, sourceWidth: 6, targetWidth: 5, y0: 599, y1: 793.5, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 8.8, sourceWidth: 39, targetWidth: 36, y0: 796.5, y1: 911, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.3, sourceWidth: 31, targetWidth: 30, y0: 831.5, y1: 1103, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.0, sourceWidth: 7, targetWidth: 6, y0: 850.5, y1: 1285, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Microsoft · 2025 财年第四季度',
        meta: { title: 'Microsoft 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 6 月', periodX: 2504 },
        nodes: {
          server: { label: '服务器' }, microsoft_365_commercial: { label: 'Microsoft 365 商业版' }, gaming: { label: '游戏' }, linkedin: { label: 'LinkedIn' }, windows_devices: { label: 'Windows 与设备' }, search: { label: '搜索' }, other_revenue: { label: '其他' }, revenue: { label: '收入' }, gross_profit: { label: '毛利润' }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润' }, operating_expenses: { label: '运营费用' }, other: { label: '其他' }, net_profit: { label: '净利润' }, tax: { label: '税费' }, rnd: { label: '研发' }, sm: { label: '销售与市场' }, ga: { label: '管理费用' },
        },
      },
    },
  });
})();

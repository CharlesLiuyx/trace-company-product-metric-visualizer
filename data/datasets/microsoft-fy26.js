/* Microsoft FY26 income statement ($B), measured from the source image. */
(function () {
  const BLUE = '#00a5f2';
  const BLUE_LINK = '#85cef2';
  const PURPLE = '#8a64b9';
  const PURPLE_LINK = '#c2b2d7';
  const XBOX = '#59bb00';
  const XBOX_LINK = '#add885';
  const WINDOWS = '#ffba00';
  const WINDOWS_LINK = '#f7d885';
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
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;
  const annotations = `
    <g data-typography-role="brand">
      ${icon('microsoftAzure', 317, 323, 0.77)}
      ${icon('microsoft365Commercial', 325, 564, 0.90)}
      ${icon('microsoftXbox', 317, 737, 0.88)}
      ${icon('microsoftLinkedIn', 334, 878, 1.00)}
      ${icon('microsoftWindows', 326, 996, 0.79)}
      ${icon('microsoftBing', 345, 1129, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1275, 0.50)}
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10, semanticRole) => ({
    x, top, anchor, lines, lineGap, ...(semanticRole ? { semanticRole } : {}),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-fy26',
    name: 'Microsoft · FY26',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft FY26 Income Statement',
      period: 'FY26',
      periodNote: 'Ending June 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-fy26.png', width: 2667, height: 1500 },
      titleX: 1338, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2105,
      periodX: 980, periodY: 1224, periodNoteY: 1274,
      logoWidth: 193, logoHeight: 193, logoY: 239, logoViewBox: '0 0 193 193',
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
      scale: 1.24,
      nodes: {
        server: { x: 472, y: 323, width: 71, height: 159 },
        microsoft_365_commercial: { x: 472, y: 585, width: 71, height: 126 },
        xbox: { x: 472, y: 804, width: 71, height: 24 },
        linkedin: { x: 472, y: 927, width: 71, height: 22 },
        windows_devices: { x: 472, y: 1058, width: 71, height: 20 },
        search: { x: 472, y: 1182, width: 71, height: 16 },
        other_revenue: { x: 472, y: 1302, width: 71, height: 31 },
        revenue: { x: 939, y: 624, width: 70, height: 412 },
        gross_profit: { x: 1406, y: 529, width: 71, height: 279 },
        cost_of_revenue: { x: 1406, y: 1009, width: 71, height: 131 },
        operating_profit: { x: 1874, y: 430, width: 70, height: 192 },
        operating_expenses: { x: 1874, y: 794, width: 70, height: 85 },
        other: { x: 2224, y: 522, width: 70, height: 11 },
        net_profit: { x: 2340, y: 318, width: 71, height: 165 },
        tax: { x: 2340, y: 678, width: 71, height: 38 },
        rnd: { x: 2340, y: 844, width: 71, height: 42 },
        sm: { x: 2340, y: 1056, width: 71, height: 31 },
        ga: { x: 2340, y: 1281, width: 71, height: 7 },
      },
      labels: {
        server: { blocks: [block(169, 331, 'middle', [line('Server', 38, 800, NOTE), line('products &', 38, 800, NOTE), line('cloud services', 38, 800, NOTE)], 11), block(512, 230, 'middle', [line('$value', 40, 400, NOTE), line('+31% Y/Y', 28, 400, NOTE)], 9)] },
        microsoft_365_commercial: { blocks: [block(165, 604, 'middle', [line('Microsoft 365', 38, 800, NOTE), line('Commercial', 38, 800, NOTE)], 11), block(509, 494, 'middle', [line('$value', 40, 400, NOTE), line('+16% Y/Y', 28, 400, NOTE)], 9)] },
        xbox: { blocks: [block(171, 785, 'middle', [line('XBOX', 38, 800, NOTE)], 10, 'top-aligned-side-label'), block(509, 714, 'middle', [line('$value', 40, 400, NOTE), line('(7%) Y/Y', 28, 400, NOTE)], 9)] },
        linkedin: { blocks: [block(175, 904, 'middle', [line('LinkedIn', 38, 800, NOTE)], 10, 'top-aligned-side-label'), block(509, 833, 'middle', [line('$value', 40, 400, NOTE), line('+11% Y/Y', 28, 400, NOTE)], 9)] },
        windows_devices: { blocks: [block(168, 999, 'middle', [line('Windows', 38, 800, NOTE), line('& Devices', 38, 800, NOTE)], 11, 'top-aligned-side-label'), block(509, 963, 'middle', [line('$value', 40, 400, NOTE), line('(1%) Y/Y', 28, 400, NOTE)], 9)] },
        search: { blocks: [block(170, 1159, 'middle', [line('Search', 38, 800, NOTE)], 10, 'top-aligned-side-label'), block(510, 1087, 'middle', [line('$value', 40, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)], 9)] },
        other_revenue: { blocks: [block(171, 1295, 'middle', [line('Other', 38, 800, NOTE)]), block(510, 1205, 'middle', [line('$value', 40, 400, NOTE), line('+15% Y/Y', 28, 400, NOTE)], 9)] },
        revenue: { blocks: [block(974, 475, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+18% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [block(1442, 339, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('69% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1442, 1155, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)])] },
        operating_profit: { blocks: [block(1909, 243, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('47% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1909, 895, 'middle', [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
        other: { blocks: [block(2259, 546, 'middle', [line('Other', 30, 800), line('$value', 30)])] },
        net_profit: { blocks: [block(2439, 320, 'start', [line('Net profit', 40, 800), line('$value', 40), line('40% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [block(2532, 655, 'middle', [line('Tax', 30, 800), line('$value', 30)])] },
        rnd: { blocks: [block(2532, 828, 'middle', [line('R&D', 30, 800), line('$value', 30), line('11% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        sm: { blocks: [block(2532, 1035, 'middle', [line('S&M', 30, 800), line('$value', 30), line('8% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        ga: { blocks: [block(2532, 1238, 'middle', [line('G&A', 30, 800), line('$value', 30), line('2% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: ['Server', 'products &', 'cloud services'], value: 129.4, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'microsoft_365_commercial', col: 0, order: 1, type: 'source', label: ['Microsoft 365', 'Commercial'], value: 102.0, valueText: '$102.0B', color: PURPLE, labelColor: NOTE, linkTint: PURPLE_LINK },
      { id: 'xbox', col: 0, order: 2, type: 'source', label: 'XBOX', value: 21.8, color: XBOX, labelColor: NOTE, linkTint: XBOX_LINK },
      { id: 'linkedin', col: 0, order: 3, type: 'source', label: 'LinkedIn', value: 19.8, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'windows_devices', col: 0, order: 4, type: 'source', label: ['Windows', '& Devices'], value: 17.1, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 15.2, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 26.6, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 331.8, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 225.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 106.4, valueText: '($106.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 155.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 70.2, valueText: '($70.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 10.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 133.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 32.2, valueText: '($32.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 35.6, valueText: '($35.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 26.7, valueText: '($26.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 8.0, valueText: '($8.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'server', target: 'revenue', value: 129.4, sourceWidth: 159, targetWidth: 159, y0: 402.5, y1: 703.5, targetOrder: 0 },
      { source: 'microsoft_365_commercial', target: 'revenue', value: 102.0, sourceWidth: 126, targetWidth: 128, y0: 648, y1: 847, targetOrder: 1, curve: { c1x: 790, c2x: 825 } },
      { source: 'xbox', target: 'revenue', value: 21.8, sourceWidth: 24, targetWidth: 27, y0: 816, y1: 924.5, targetOrder: 2 },
      { source: 'linkedin', target: 'revenue', value: 19.8, sourceWidth: 22, targetWidth: 24, y0: 938, y1: 950, targetOrder: 3 },
      { source: 'windows_devices', target: 'revenue', value: 17.1, sourceWidth: 20, targetWidth: 21, y0: 1068, y1: 972.5, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 15.2, sourceWidth: 16, targetWidth: 21, y0: 1190, y1: 993.5, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 26.6, sourceWidth: 31, targetWidth: 32, y0: 1317.5, y1: 1020, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 225.5, sourceWidth: 279, targetWidth: 279, y0: 763.5, y1: 668.5, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 106.4, sourceWidth: 133, targetWidth: 131, y0: 969.5, y1: 1074.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 155.2, sourceWidth: 192, targetWidth: 192, y0: 625, y1: 526, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 70.2, sourceWidth: 86, targetWidth: 85, y0: 765, y1: 836.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 123.1, sourceWidth: 152, targetWidth: 154, y0: 506, y1: 395, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 32.2, sourceWidth: 40, targetWidth: 38, y0: 602, y1: 697, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 10.7, sourceWidth: 11, targetWidth: 11, y0: 527.5, y1: 477.5, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 35.6, sourceWidth: 43, targetWidth: 42, y0: 815.5, y1: 865, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 26.7, sourceWidth: 32, targetWidth: 31, y0: 853, y1: 1071.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 8.0, sourceWidth: 10, targetWidth: 7, y0: 874, y1: 1284.5, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Microsoft · 2026 财年',
        meta: { title: 'Microsoft 2026 财年利润表', period: '2026 财年', periodNote: '截至 2026 年 6 月' },
        nodes: {
          server: { label: ['服务器产品', '与云服务'] }, microsoft_365_commercial: { label: 'Microsoft 365 商业版' },
          xbox: { label: 'Xbox 游戏' }, linkedin: { label: 'LinkedIn' }, windows_devices: { label: 'Windows 与设备' },
          search: { label: '搜索' }, other_revenue: { label: '其他' }, revenue: { label: '收入' },
          gross_profit: { label: '毛利润' }, cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润' }, operating_expenses: { label: '运营费用' },
          other: { label: '其他' }, net_profit: { label: '净利润' }, tax: { label: '税费' },
          rnd: { label: '研发' }, sm: { label: '销售与市场' }, ga: { label: '管理费用' },
        },
      },
    },
  });
})();

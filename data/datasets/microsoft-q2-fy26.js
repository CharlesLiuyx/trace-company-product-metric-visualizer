/* Microsoft Q2 FY26 income statement ($B), measured from the source image. */
(function () {
  const BLUE = '#00a5f2';
  const BLUE_LINK = '#a2d0f3';
  const PURPLE = '#8a64b9';
  const PURPLE_LINK = '#c4b5d8';
  const GAMING = '#80ba00';
  const GAMING_LINK = '#b3da9b';
  const LINKEDIN = '#04a4ef';
  const LINKEDIN_LINK = '#8ba1d9';
  const WINDOWS = '#ffb901';
  const WINDOWS_LINK = '#f9d99e';
  const SEARCH = '#a2afc6';
  const SEARCH_LINK = '#a2afc6';
  const OTHER = '#000000';
  const OTHER_LINK = '#8f8f8f';
  const HUB = '#666666';
  const GREEN = '#2da02b';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#a5cea2';
  const RED = '#cc0000';
  const RED_LABEL = '#941000';
  const RED_LINK = '#e59d97';
  const TITLE = '#155077';
  const NOTE = '#5f5f5f';
  const RIGHT_LABEL_X = 2555;
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
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q2-fy26',
    name: 'Microsoft · Q2 FY26',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2320,
      periodX: 2495, periodY: 258, periodNoteY: 299,
      logoWidth: 193, logoHeight: 193, logoY: 239, logoViewBox: '0 0 193 193',
      logoSvg: BUSINESS_ICONS.microsoftLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLUE, label: NOTE }, hub: { node: HUB, label: NOTE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error', fullFaceIds: ['search:right'] },
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 4.82,
      nodes: {
        server: { x: 475, y: 305, width: 75, height: 149 },
        microsoft_365_commercial: { x: 475, y: 563, width: 75, height: 118 },
        gaming: { x: 475, y: 793, width: 75, height: 29 },
        linkedin: { x: 475, y: 922, width: 75, height: 25 },
        windows_devices: { x: 475, y: 1045, width: 75, height: 23 },
        search: { x: 475, y: 1175, width: 75, height: 19 },
        other_revenue: { x: 475, y: 1285, width: 75, height: 34 },
        revenue: { x: 945, y: 622, width: 72, height: 394 },
        gross_profit: { x: 1413, y: 521, width: 72, height: 267 },
        cost_of_revenue: { x: 1413, y: 983, width: 72, height: 127 },
        operating_profit: { x: 1881, y: 417, width: 72, height: 186 },
        operating_expenses: { x: 1881, y: 787, width: 72, height: 85 },
        other: { x: 2218, y: 502, width: 73, height: 46 },
        net_profit: { x: 2353, y: 318, width: 73, height: 185 },
        tax: { x: 2353, y: 696, width: 73, height: 48 },
        rnd: { x: 2353, y: 881, width: 73, height: 43 },
        sm: { x: 2353, y: 1068, width: 73, height: 34 },
        ga: { x: 2353, y: 1251, width: 73, height: 9 },
      },
      labels: {
        server: { blocks: [block(242, 356, 'end', [line('Server', 40, 800, NOTE)]), block(494, 205, 'middle', [line('$value', 40, 400, NOTE), line('+31% Y/Y', 28, 400, NOTE)], 9)] },
        microsoft_365_commercial: { blocks: [block(150, 570.5, 'middle', [line('Microsoft 365', 38, 800, NOTE), line('Commercial', 38, 800, NOTE)], 11), block(512, 467.5, 'middle', [line('$value', 40, 400, NOTE), line('+16% Y/Y', 28, 400, NOTE)], 9)] },
        gaming: { blocks: [block(245, 775, 'end', [line('Gaming', 38, 800, NOTE)]), block(512, 704, 'middle', [line('$value', 40, 400, NOTE), line('(9%) Y/Y', 28, 400, NOTE)], 9)] },
        linkedin: { blocks: [block(245, 896, 'end', [line('LinkedIn', 38, 800, NOTE)]), block(512, 820, 'middle', [line('$value', 40, 400, NOTE), line('+11% Y/Y', 28, 400, NOTE)], 9)] },
        windows_devices: { blocks: [block(245, 998, 'end', [line('Windows', 38, 800, NOTE), line('& Devices', 38, 800, NOTE)], 11), block(512, 956, 'middle', [line('$value', 40, 400, NOTE), line('(1%) Y/Y', 28, 400, NOTE)], 9)] },
        search: { blocks: [block(245, 1146, 'end', [line('Search', 38, 800, NOTE)]), block(512, 1086, 'middle', [line('$value', 40, 400, NOTE), line('+7% Y/Y', 28, 400, NOTE)], 9)] },
        other_revenue: { blocks: [block(272.4, 1279, 'end', [line('Other', 38, 800, NOTE)]), block(539.4, 1197, 'middle', [line('$value', 40, 400, NOTE), line('+16% Y/Y', 28, 400, NOTE)], 9)] },
        revenue: { blocks: [block(981, 471, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+17% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [block(1449, 337, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('68% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1449, 1125, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)])] },
        operating_profit: { blocks: [block(1917, 237.5, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('47% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1867.5, 898.5, 'middle', [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
        other: { blocks: [block(2256, 564, 'middle', [line('Other', 30, 800), line('$value', 30)])] },
        net_profit: { blocks: [block(2437, 326, 'start', [line('Net profit', 40, 800), line('$value', 40), line('47% margin', 28, 400, NOTE), line('+13pp Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [block(2537, 688, 'middle', [line('Tax', 30, 800), line('$value', 30)])] },
        rnd: { blocks: [block(2537, 821, 'middle', [line('R&D', 30, 800), line('$value', 30), line('10% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        sm: { blocks: [block(2537, 1011, 'middle', [line('S&M', 30, 800), line('$value', 30), line('8% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        ga: { blocks: [block(2534, 1187, 'middle', [line('G&A', 30, 800), line('$value', 30), line('2% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 30.9, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'microsoft_365_commercial', col: 0, order: 1, type: 'source', label: ['Microsoft 365', 'Commercial'], value: 24.5, color: PURPLE, labelColor: NOTE, linkTint: PURPLE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 6.0, color: GAMING, labelColor: NOTE, linkTint: GAMING_LINK, valueText: '$6.0B' },
      { id: 'linkedin', col: 0, order: 3, type: 'source', label: 'LinkedIn', value: 5.1, color: LINKEDIN, labelColor: NOTE, linkTint: LINKEDIN_LINK },
      { id: 'windows_devices', col: 0, order: 4, type: 'source', label: ['Windows', '& Devices'], value: 4.5, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.8, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 6.6, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 81.3, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 55.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 26.0, valueText: '($26.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 38.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.0, valueText: '($17.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 10.0, valueText: '$10.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 38.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 9.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 8.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 6.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'server', target: 'revenue', value: 30.9, width: 149, targetOrder: 0 },
      { source: 'microsoft_365_commercial', target: 'revenue', value: 24.5, width: 118, targetOrder: 1, curve: { c1x: 790, c2x: 825 } },
      { source: 'gaming', target: 'revenue', value: 6.0, width: 29, targetOrder: 2 },
      { source: 'linkedin', target: 'revenue', value: 5.1, width: 25, targetOrder: 3 },
      { source: 'windows_devices', target: 'revenue', value: 4.5, width: 23, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.8, sourceWidth: 19, targetWidth: 19, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 6.6, sourceWidth: 34, targetWidth: 31, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 55.3, width: 267, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 26.0, width: 127, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 38.3, sourceWidth: 184, targetWidth: 186, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.0, sourceWidth: 83, targetWidth: 85, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 28.5, width: 139, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 9.8, width: 47, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 10.0, width: 46, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 8.5, sourceWidth: 43, targetWidth: 43, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.6, sourceWidth: 34, targetWidth: 34, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.9, sourceWidth: 8, targetWidth: 9, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Microsoft · 2026 财年第二季度',
        meta: { title: 'Microsoft 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2025 年 12 月' },
        nodes: {
          server: { label: '服务器' }, microsoft_365_commercial: { label: 'Microsoft 365 商业版' }, gaming: { label: '游戏' }, linkedin: { label: 'LinkedIn' }, windows_devices: { label: 'Windows 与设备' }, search: { label: '搜索' }, other_revenue: { label: '其他' }, revenue: { label: '收入' }, gross_profit: { label: '毛利润' }, cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润' }, operating_expenses: { label: '运营费用' }, other: { label: '其他' }, net_profit: { label: '净利润' }, tax: { label: '税费' }, rnd: { label: '研发' }, sm: { label: '销售与市场' }, ga: { label: '管理费用' },
        },
      },
    },
  });
})();

/* Microsoft Q4 FY24 income statement ($B), measured from the source image. */
(function () {
  const BLUE = '#00a5f2';
  const BLUE_LINK = '#85cef2';
  const OFFICE = '#ff4f18';
  const OFFICE_LINK = '#f7a990';
  const WINDOWS = '#ffba00';
  const WINDOWS_LINK = '#f7d885';
  const GAMING = '#59bb00';
  const GAMING_LINK = '#add885';
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
      ${icon('microsoftAzure', 317, 108, 0.77)}
      ${icon('microsoft365Commercial', 325, 309, 0.90)}
      ${icon('microsoftWindows', 326, 493, 0.79)}
      ${icon('microsoftXbox', 317, 620, 0.88)}
      ${icon('microsoftLinkedIn', 334, 785, 1.00)}
      ${icon('microsoftBing', 345, 919, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1138, 0.50)}
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10, semanticRole) => ({
    x, top, anchor, lines, lineGap, ...(semanticRole ? { semanticRole } : {}),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q4-fy24',
    name: 'Microsoft · Q4 FY24',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 126, titleWeight: 800, titleTextLength: 2320,
      periodX: 2495, periodY: 258, periodNoteY: 299,
      logoWidth: 193, logoHeight: 193, logoY: 239, logoViewBox: '0 0 193 193',
      logoSvg: BUSINESS_ICONS.microsoftLogo || '',
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
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
      scale: 4.92,
      nodes: {
        server: { x: 472, y: 313, width: 71, height: 132 },
        office: { x: 472, y: 559, width: 71, height: 70 },
        windows: { x: 472, y: 751, width: 71, height: 30 },
        gaming: { x: 472, y: 906, width: 71, height: 23 },
        linkedin: { x: 472, y: 1051, width: 71, height: 20 },
        search: { x: 472, y: 1194, width: 71, height: 17 },
        other_revenue: { x: 472, y: 1339, width: 71, height: 23 },
        revenue: { x: 939, y: 680, width: 70, height: 320 },
        gross_profit: { x: 1403, y: 574, width: 72, height: 222 },
        cost_of_revenue: { x: 1403, y: 1009, width: 72, height: 96 },
        operating_profit: { x: 1876, y: 482, width: 70, height: 138 },
        operating_expenses: { x: 1879, y: 822, width: 70, height: 84 },
        net_profit: { x: 2340, y: 393, width: 71, height: 108 },
        tax: { x: 2340, y: 686, width: 71, height: 24 },
        other: { x: 2340, y: 800, width: 71, height: 1 },
        rnd: { x: 2340, y: 914, width: 71, height: 37 },
        sm: { x: 2340, y: 1101, width: 71, height: 32 },
        ga: { x: 2340, y: 1283, width: 71, height: 10 },
      },
      labels: {
        server: { blocks: [block(267, 354, 'end', [line('Server', 40, 800, NOTE)]), block(509, 224, 'middle', [line('$value', 40, 400, NOTE), line('+21% Y/Y', 28, 400, NOTE)], 9)] },
        office: { blocks: [block(259, 569, 'end', [line('Office', 40, 800, NOTE)]), block(506, 471, 'middle', [line('$value', 40, 400, NOTE), line('+11% Y/Y', 28, 400, NOTE)], 9)] },
        windows: { blocks: [block(297, 741, 'end', [line('Windows', 40, 800, NOTE)]), block(508, 663, 'middle', [line('$value', 40, 400, NOTE), line('+7% Y/Y', 28, 400, NOTE)], 9)] },
        gaming: { blocks: [block(280, 893, 'end', [line('Gaming', 40, 800, NOTE)]), block(508, 817, 'middle', [line('$value', 40, 400, NOTE), line('+44% Y/Y', 28, 400, NOTE)], 9)] },
        linkedin: { blocks: [block(288, 1036, 'end', [line('LinkedIn', 40, 800, NOTE)]), block(508, 962, 'middle', [line('$value', 40, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)], 9)] },
        search: { blocks: [block(272, 1178, 'end', [line('Search', 40, 800, NOTE)]), block(508, 1101, 'middle', [line('$value', 40, 400, NOTE), line('+5% Y/Y', 28, 400, NOTE)], 9)] },
        other_revenue: { blocks: [block(265, 1316, 'end', [line('Other', 40, 800, NOTE)], 10, 'source-offset-label'), block(508, 1250, 'middle', [line('$value', 40, 400, NOTE), line('(1%) Y/Y', 28, 400, NOTE)], 9)] },
        revenue: { blocks: [block(980, 538, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+15% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [block(1439, 393, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('70% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1439, 1121, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)])] },
        operating_profit: { blocks: [block(1911, 302, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('43% margin', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1914, 925, 'middle', [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
        net_profit: { blocks: [block(2437, 396, 'start', [line('Net profit', 40, 800), line('$value', 40), line('34% margin', 28, 400, NOTE), line('(2pp) Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [block(2530, 661, 'middle', [line('Tax', 30, 800), line('$value', 30)])] },
        other: { blocks: [block(2530, 806, 'middle', [line('Other', 30, 800), line('$value', 30)])] },
        rnd: { blocks: [block(2530, 927, 'middle', [line('R&D', 30, 800), line('$value', 30), line('12% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)])] },
        sm: { blocks: [block(2530, 1092, 'middle', [line('S&M', 30, 800), line('$value', 30), line('11% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        ga: { blocks: [block(2530, 1254, 'middle', [line('G&A', 30, 800), line('$value', 30), line('3% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 26.6, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'office', col: 0, order: 1, type: 'source', label: 'Office', value: 14.3, color: OFFICE, labelColor: NOTE, linkTint: OFFICE_LINK },
      { id: 'windows', col: 0, order: 2, type: 'source', label: 'Windows', value: 6.5, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'gaming', col: 0, order: 3, type: 'source', label: 'Gaming', value: 5.0, valueText: '$5.0B', color: GAMING, labelColor: NOTE, linkTint: GAMING_LINK },
      { id: 'linkedin', col: 0, order: 4, type: 'source', label: 'LinkedIn', value: 4.3, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.2, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 4.8, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 64.7, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 45.0, valueText: '$45.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.7, valueText: '($19.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 27.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.1, valueText: '($17.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 22.0, valueText: '$22.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 5.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 8.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 6.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 2.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'server', target: 'revenue', value: 26.6, width: 132, targetOrder: 0 },
      { source: 'office', target: 'revenue', value: 14.3, width: 70, targetOrder: 1, curve: { c1x: 790, c2x: 825 } },
      { source: 'windows', target: 'revenue', value: 6.5, width: 30, targetOrder: 2 },
      { source: 'gaming', target: 'revenue', value: 5.0, width: 23, targetOrder: 3 },
      { source: 'linkedin', target: 'revenue', value: 4.3, width: 20, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.2, width: 17, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 4.8, sourceWidth: 23, targetWidth: 28, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 45.0, width: 222, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 19.7, sourceWidth: 98, targetWidth: 96, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 27.9, width: 138, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.1, width: 84, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 22.0, width: 108, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.2, width: 24, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.7, sourceWidth: 6, targetWidth: 1, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 8.1, width: 37, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.8, width: 32, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.2, sourceWidth: 15, targetWidth: 10, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Microsoft · 2024 财年第四季度',
        meta: { title: 'Microsoft 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 6 月' },
        nodes: {
          server: { label: '服务器' }, office: { label: 'Office' }, windows: { label: 'Windows' },
          gaming: { label: '游戏' }, linkedin: { label: 'LinkedIn' }, search: { label: '搜索' },
          other_revenue: { label: '其他' }, revenue: { label: '收入' }, gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: '收入成本' }, operating_profit: { label: '营业利润' },
          operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润' },
          tax: { label: '税费' }, other: { label: '其他' }, rnd: { label: '研发' },
          sm: { label: '销售与市场' }, ga: { label: '管理费用' },
        },
      },
    },
  });
})();

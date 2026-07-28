/* Microsoft Q2 FY25 income statement ($B), measured from the claimed Source. */
(function () {
  const BLUE = '#00a5f2';
  const BLUE_LINK = '#85cef2';
  const PURPLE = '#8a64b9';
  const PURPLE_LINK = '#c2b2d7';
  const GAMING = '#7fba00';
  const GAMING_LINK = '#add885';
  const LINKEDIN = '#00adef';
  const LINKEDIN_LINK = '#85cdf2';
  const WINDOWS = '#ffb900';
  const WINDOWS_LINK = '#f7d885';
  const SEARCH = '#9aabc4';
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
      ${icon('microsoft365Commercial', 325, 548, 0.90)}
      ${icon('microsoftXbox', 317, 721, 0.88)}
      ${icon('microsoftLinkedIn', 334, 864, 1.00)}
      ${icon('microsoftWindows', 326, 982, 0.79)}
      ${icon('microsoftBing', 345, 1115, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1261, 0.50)}
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q2-fy25',
    name: 'Microsoft · Q2 FY25',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2320,
      periodX: 2495,
      periodY: 258,
      periodNoteY: 299,
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
      scale: 4.82,
      nodes: {
        server: { x: 474, y: 318, width: 71, height: 115 },
        microsoft_365_commercial: { x: 474, y: 550, width: 71, height: 102 },
        gaming: { x: 474, y: 766, width: 71, height: 33 },
        linkedin: { x: 474, y: 912, width: 71, height: 20 },
        windows_devices: { x: 474, y: 1043, width: 71, height: 20 },
        search: { x: 474, y: 1174, width: 71, height: 18 },
        other_revenue: { x: 474, y: 1290, width: 71, height: 26 },
        revenue: { x: 941, y: 599, width: 70, height: 343 },
        gross_profit: { x: 1408, y: 510, width: 71, height: 234 },
        cost_of_revenue: { x: 1410, y: 918, width: 72, height: 105 },
        operating_profit: { x: 1868, y: 430, width: 70, height: 154 },
        operating_expenses: { x: 1871, y: 764, width: 70, height: 78 },
        net_profit: { x: 2342, y: 323, width: 71, height: 116 },
        tax: { x: 2342, y: 629, width: 71, height: 24 },
        other_expense: { x: 2342, y: 751, width: 71, height: 8 },
        rnd: { x: 2342, y: 891, width: 71, height: 36 },
        sm: { x: 2342, y: 1093, width: 71, height: 30 },
        ga: { x: 2342, y: 1281, width: 71, height: 7 },
      },
      labels: {
        server: { blocks: [block(229, 354, 'end', [line('Server', 40, 800, NOTE)]), block(510, 220, 'middle', [line('$value', 40, 400, NOTE), line('+21% Y/Y', 28, 400, NOTE)], 9)] },
        microsoft_365_commercial: { blocks: [block(150, 550, 'middle', [line('Microsoft 365', 38, 800, NOTE), line('Commercial', 38, 800, NOTE)], 11), block(510, 450, 'middle', [line('$value', 40, 400, NOTE), line('+15% Y/Y', 28, 400, NOTE)], 9)] },
        gaming: { blocks: [block(245, 756, 'end', [line('Gaming', 38, 800, NOTE)]), block(510, 664, 'middle', [line('$value', 40, 400, NOTE), line('(7%) Y/Y', 28, 400, NOTE)], 9)] },
        linkedin: { blocks: [block(245, 902, 'end', [line('LinkedIn', 38, 800, NOTE)]), block(510, 812, 'middle', [line('$value', 40, 400, NOTE), line('+9% Y/Y', 28, 400, NOTE)], 9)] },
        windows_devices: { blocks: [block(245, 1009, 'end', [line('Windows', 38, 800, NOTE), line('& Devices', 38, 800, NOTE)], 11), block(510, 947, 'middle', [line('$value', 40, 400, NOTE), line('+3% Y/Y', 28, 400, NOTE)], 9)] },
        search: { blocks: [block(229, 1157, 'end', [line('Search', 38, 800, NOTE)]), block(510, 1076, 'middle', [line('$value', 40, 400, NOTE), line('+12% Y/Y', 28, 400, NOTE)], 9)] },
        other_revenue: { blocks: [block(222, 1281, 'end', [line('Other', 38, 800, NOTE)]), block(510, 1197, 'middle', [line('$value', 40, 400, NOTE), line('+7% Y/Y', 28, 400, NOTE)], 9)] },
        revenue: { blocks: [block(982, 445, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+12% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [block(1444, 323, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('69% margin', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1446, 1035, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)])] },
        operating_profit: { blocks: [block(1911, 242, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('45% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1906, 854, 'middle', [line('Operating', 40, 800), line('Expenses', 40, 800), line('$value', 38)])] },
        net_profit: { blocks: [block(2431, 326, 'start', [line('Net profit', 40, 800), line('$value', 40), line('35% margin', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [block(2529, 599, 'middle', [line('Tax', 30, 800), line('$value', 30)])] },
        other_expense: { blocks: [block(2532, 716, 'middle', [line('Other', 30, 800), line('$value', 30)])] },
        rnd: { blocks: [block(2532, 883, 'middle', [line('R&D', 30, 800), line('$value', 30), line('11% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
        sm: { blocks: [block(2529, 1059, 'middle', [line('S&M', 30, 800), line('$value', 30), line('9% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        ga: { blocks: [block(2531, 1237, 'middle', [line('G&A', 30, 800), line('$value', 30), line('3% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 23.6, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'microsoft_365_commercial', col: 0, order: 1, type: 'source', label: ['Microsoft 365', 'Commercial'], value: 21.1, color: PURPLE, labelColor: NOTE, linkTint: PURPLE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 6.6, color: GAMING, labelColor: NOTE, linkTint: GAMING_LINK },
      { id: 'linkedin', col: 0, order: 3, type: 'source', label: 'LinkedIn', value: 4.6, color: LINKEDIN, labelColor: NOTE, linkTint: LINKEDIN_LINK },
      { id: 'windows_devices', col: 0, order: 4, type: 'source', label: ['Windows', '& Devices'], value: 4.5, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.5, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 5.6, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 69.6, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 47.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 21.8, valueText: '($21.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 31.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 16.2, valueText: '($16.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 24.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.3, valueText: '($5.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 2.2, valueText: '($2.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.9, valueText: '($7.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 6.4, valueText: '($6.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 1.8, valueText: '($1.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'server', target: 'revenue', value: 23.6, sourceWidth: 115, targetWidth: 116, targetOrder: 0 },
      { source: 'microsoft_365_commercial', target: 'revenue', value: 21.1, sourceWidth: 102, targetWidth: 104, targetOrder: 1, curve: { c1x: 790, c2x: 825 } },
      { source: 'gaming', target: 'revenue', value: 6.6, sourceWidth: 33, targetWidth: 33, targetOrder: 2 },
      { source: 'linkedin', target: 'revenue', value: 4.6, sourceWidth: 20, targetWidth: 23, targetOrder: 3 },
      { source: 'windows_devices', target: 'revenue', value: 4.5, sourceWidth: 20, targetWidth: 22, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.5, sourceWidth: 18, targetWidth: 17, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 5.6, sourceWidth: 26, targetWidth: 28, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 47.8, sourceWidth: 234, targetWidth: 234, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 21.8, sourceWidth: 109, targetWidth: 105, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 31.7, sourceWidth: 155, targetWidth: 154, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.2, sourceWidth: 79, targetWidth: 78, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 24.1, sourceWidth: 117, targetWidth: 116, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.3, sourceWidth: 26, targetWidth: 24, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 2.2, sourceWidth: 11, targetWidth: 8, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 7.9, sourceWidth: 39, targetWidth: 36, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.4, sourceWidth: 31, targetWidth: 30, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.8, sourceWidth: 8, targetWidth: 7, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Microsoft · 2025 财年第二季度',
        meta: {
          title: 'Microsoft 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 12 月',
        },
        nodes: {
          server: { label: '服务器' },
          microsoft_365_commercial: { label: 'Microsoft 365 商业版' },
          gaming: { label: '游戏' },
          linkedin: { label: 'LinkedIn' },
          windows_devices: { label: 'Windows 与设备' },
          search: { label: '搜索' },
          other_revenue: { label: '其他' },
          revenue: { label: '收入' },
          gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          other_expense: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
      },
    },
  });
})();

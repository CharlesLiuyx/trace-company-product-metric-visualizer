/* Microsoft Q1 FY26 income statement ($B), measured from the Source image. */
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
  const NOTE = '#5e5e5e';
  const RIGHT_LABEL_X = 2480;
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${ICONS[name] || ''}</g>`;
  const annotations = `
    <g data-typography-role="brand">
      ${icon('microsoftAzure', 317, 318, 0.77)}
      ${icon('microsoft365Commercial', 325, 550, 0.90)}
      ${icon('microsoftXbox', 317, 735, 0.88)}
      ${icon('microsoftLinkedIn', 334, 867, 1.00)}
      ${icon('microsoftWindows', 326, 995, 0.79)}
      ${icon('microsoftBing', 345, 1129, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1275, 0.50)}
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q1-fy26',
    name: 'Microsoft · Q1 FY26',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2320,
      periodX: 2525,
      periodY: 258,
      periodNoteY: 301,
      logoWidth: 193,
      logoHeight: 193,
      logoY: 239,
      logoViewBox: '0 0 193 193',
      logoSvg: ICONS.microsoftLogo || '',
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
      scale: 4.56,
      nodes: {
        server: { x: 476, y: 304, width: 71, height: 130 },
        microsoft_365_commercial: { x: 476, y: 551, width: 71, height: 107 },
        gaming: { x: 476, y: 772, width: 71, height: 23 },
        linkedin: { x: 476, y: 908, width: 71, height: 19 },
        windows_devices: { x: 476, y: 1037, width: 71, height: 20 },
        search: { x: 476, y: 1174, width: 71, height: 13 },
        other_revenue: { x: 476, y: 1301, width: 71, height: 28 },
        revenue: { x: 943, y: 622, width: 70, height: 355 },
        gross_profit: { x: 1410, y: 532, width: 71, height: 244 },
        cost_of_revenue: { x: 1410, y: 962, width: 71, height: 109 },
        operating_profit: { x: 1878, y: 457, width: 70, height: 172 },
        operating_expenses: { x: 1878, y: 817, width: 70, height: 70 },
        net_profit: { x: 2344, y: 359, width: 71, height: 125 },
        tax: { x: 2344, y: 629, width: 71, height: 29 },
        other: { x: 2344, y: 752, width: 71, height: 14 },
        rnd: { x: 2344, y: 910, width: 71, height: 35 },
        sm: { x: 2344, y: 1109, width: 71, height: 23 },
        ga: { x: 2344, y: 1287, width: 71, height: 7 },
      },
      labels: {
        server: { blocks: [block(242, 344, 'end', [line('Server', 40, 800, NOTE)]), block(512, 205, 'middle', [line('$value', 40, 400, NOTE), line('+30% Y/Y', 28, 400, NOTE)], 9)] },
        microsoft_365_commercial: { blocks: [block(150, 557, 'middle', [line('Microsoft 365', 38, 800, NOTE), line('Commercial', 38, 800, NOTE)], 11), block(512, 462, 'middle', [line('$value', 40, 400, NOTE), line('+17% Y/Y', 28, 400, NOTE)], 9)] },
        gaming: { blocks: [block(245, 760, 'end', [line('Gaming', 38, 800, NOTE)]), block(512, 683, 'middle', [line('$value', 40, 400, NOTE), line('(2%) Y/Y', 28, 400, NOTE)], 9)] },
        linkedin: { blocks: [block(245, 894, 'end', [line('LinkedIn', 38, 800, NOTE)]), block(512, 819, 'middle', [line('$value', 40, 400, NOTE), line('+10% Y/Y', 28, 400, NOTE)], 9)] },
        windows_devices: { blocks: [block(245, 998, 'end', [line('Windows', 38, 800, NOTE), line('& Devices', 38, 800, NOTE)], 11), block(512, 948, 'middle', [line('$value', 40, 400, NOTE), line('+5% Y/Y', 28, 400, NOTE)], 9)] },
        search: { blocks: [block(245, 1158, 'end', [line('Search', 38, 800, NOTE)]), block(512, 1085, 'middle', [line('$value', 40, 400, NOTE), line('+15% Y/Y', 28, 400, NOTE)], 9)] },
        other_revenue: { blocks: [block(245, 1292, 'end', [line('Other', 38, 800, NOTE)]), block(512, 1197, 'middle', [line('$value', 40, 400, NOTE), line('+15% Y/Y', 28, 400, NOTE)], 9)] },
        revenue: { blocks: [block(978, 480, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+18% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [block(1445, 337, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('69% margin', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1445, 1096, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)])] },
        operating_profit: { blocks: [block(1913, 260, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('49% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1913, 914, 'middle', [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 38)])] },
        net_profit: { blocks: [block(2435, 344, 'start', [line('Net profit', 40, 800), line('$value', 40), line('36% margin', 28, 400, NOTE), line('(2pp) Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [block(RIGHT_LABEL_X, 586, 'start', [line('Tax', 30, 800), line('$value', 30)])] },
        other: { blocks: [block(RIGHT_LABEL_X, 710, 'start', [line('Other', 30, 800), line('$value', 30)])] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 880, 'start', [line('R&D', 30, 800), line('$value', 30), line('10% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        sm: { blocks: [block(RIGHT_LABEL_X, 1060, 'start', [line('S&M', 30, 800), line('$value', 30), line('7% of revenue', 28, 400, NOTE), line('(1pp) Y/Y', 28, 400, NOTE)])] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1240, 'start', [line('G&A', 30, 800), line('$value', 30), line('2% of revenue', 28, 400, NOTE), line('(0pp) Y/Y', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 28.9, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'microsoft_365_commercial', col: 0, order: 1, type: 'source', label: ['Microsoft 365', 'Commercial'], value: 24.0, color: PURPLE, labelColor: NOTE, linkTint: PURPLE_LINK, valueText: '$24.0B' },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 5.5, color: GAMING, labelColor: NOTE, linkTint: GAMING_LINK },
      { id: 'linkedin', col: 0, order: 3, type: 'source', label: 'LinkedIn', value: 4.7, color: LINKEDIN, labelColor: NOTE, linkTint: LINKEDIN_LINK },
      { id: 'windows_devices', col: 0, order: 4, type: 'source', label: ['Windows', '& Devices'], value: 4.6, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.7, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 6.3, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 77.7, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 53.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 24.0, valueText: '($24.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 38.0, valueText: '$38.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.7, valueText: '($15.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 27.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 3.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 8.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 5.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 1.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'server', target: 'revenue', value: 28.9, sourceWidth: 130, targetWidth: 133, y0: 369, y1: 688.5, targetOrder: 0 },
      { source: 'microsoft_365_commercial', target: 'revenue', value: 24.0, sourceWidth: 107, targetWidth: 110, y0: 604.5, y1: 810, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 5.5, sourceWidth: 23, targetWidth: 24, y0: 783.5, y1: 877, targetOrder: 2 },
      { source: 'linkedin', target: 'revenue', value: 4.7, sourceWidth: 19, targetWidth: 21, y0: 917.5, y1: 899.5, targetOrder: 3 },
      { source: 'windows_devices', target: 'revenue', value: 4.6, sourceWidth: 20, targetWidth: 21, y0: 1047, y1: 920.5, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.7, sourceWidth: 13, targetWidth: 17, y0: 1180.5, y1: 939.5, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 6.3, sourceWidth: 28, targetWidth: 29, y0: 1315, y1: 962.5, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 53.6, sourceWidth: 245, targetWidth: 244, y0: 744.5, y1: 654, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 24.0, sourceWidth: 110, targetWidth: 109, y0: 922, y1: 1016.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 38.0, sourceWidth: 174, targetWidth: 172, y0: 619, y1: 543, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.7, sourceWidth: 70, targetWidth: 70, y0: 741, y1: 852, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 27.7, sourceWidth: 125, targetWidth: 125, y0: 519.5, y1: 421.5, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 6.6, sourceWidth: 30, targetWidth: 29, y0: 597, y1: 643.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 3.7, sourceWidth: 17, targetWidth: 14, y0: 620.5, y1: 759, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 8.1, sourceWidth: 35, targetWidth: 35, y0: 834.5, y1: 927.5, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 5.7, sourceWidth: 25, targetWidth: 23, y0: 864.5, y1: 1120.5, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.8, sourceWidth: 10, targetWidth: 7, y0: 882, y1: 1290.5, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Microsoft · 2026 财年第一季度',
        meta: {
          title: 'Microsoft 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 9 月',
          periodX: 2500,
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
          other: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
        layout: {
          labels: {
            rnd: { blocks: [block(2445, 880, 'start', [line('研发', 30, 800), line('$value', 30), line('占收入 10%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)])] },
            sm: { blocks: [block(2445, 1060, 'start', [line('销售与市场', 30, 800), line('$value', 30), line('占收入 7%', 28, 400, NOTE), line('同比 (1 个百分点)', 28, 400, NOTE)])] },
            ga: { blocks: [block(2445, 1240, 'start', [line('管理费用', 30, 800), line('$value', 30), line('占收入 2%', 28, 400, NOTE), line('同比 (0 个百分点)', 28, 400, NOTE)])] },
          },
        },
      },
    },
  });
})();

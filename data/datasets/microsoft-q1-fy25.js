/* ====================================================================
 * Microsoft - Q1 FY25 income statement ($B)
 * Reconstructed from input/processed/microsoft-q1-fy25.png as a fixed
 * d3-sankey layout with reusable SVG business annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#00a5f2';
  const BLUE_LINK = '#85cef2';
  const PURPLE = '#8a64b9';
  const PURPLE_LINK = '#c2b2d7';
  const GAMING = '#59bb00';
  const GAMING_LINK = '#acd88b';
  const LINKEDIN = '#00a5f2';
  const LINKEDIN_LINK = '#85cef2';
  const WINDOWS = '#ffba00';
  const WINDOWS_LINK = '#f7d885';
  const SEARCH = '#2e578c';
  const SEARCH_LINK = '#9aabc4';
  const OTHER = '#000000';
  const OTHER_LINK = '#858585';
  const HUB = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce99';
  const RED = '#cc0000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#df7e7e';
  const TITLE = '#154f79';
  const NOTE = '#606164';
  const RIGHT_LABEL_X = 2537;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      ${icon('microsoftAzure', 317, 323, 0.77)}
      ${icon('microsoft365Commercial', 325, 545, 0.90)}
      ${icon('microsoftXbox', 317, 731, 0.88)}
      ${icon('microsoftWindows', 326, 858, 0.79)}
      ${icon('microsoftLinkedIn', 334, 996, 1.00)}
      ${icon('microsoftBing', 345, 1129, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1275, 0.50)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q1-fy25',
    name: 'Microsoft - Q1 FY25',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q1-fy25.png', width: 2667, height: 1500 },
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
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 5.00,
      nodes: {
        server: { x: 469, y: 327, width: 71, height: 109 },
        microsoft_365_commercial: { x: 469, y: 549, width: 71, height: 101 },
        gaming: { x: 469, y: 765, width: 71, height: 26 },
        windows_devices: { x: 469, y: 908, width: 71, height: 20 },
        linkedin: { x: 469, y: 1039, width: 71, height: 18 },
        search: { x: 469, y: 1174, width: 71, height: 15 },
        other_revenue: { x: 469, y: 1297, width: 71, height: 26 },
        revenue: { x: 936, y: 598, width: 70, height: 328 },
        gross_profit: { x: 1400, y: 506, width: 72, height: 227 },
        cost_of_revenue: { x: 1403, y: 921, width: 71, height: 99 },
        operating_profit: { x: 1876, y: 421, width: 70, height: 151 },
        operating_expenses: { x: 1873, y: 752, width: 70, height: 73 },
        net_profit: { x: 2337, y: 328, width: 71, height: 121 },
        tax: { x: 2337, y: 632, width: 71, height: 25 },
        other_expense: { x: 2337, y: 742, width: 71, height: 3 },
        rnd: { x: 2337, y: 861, width: 71, height: 36 },
        sm: { x: 2337, y: 1075, width: 71, height: 26 },
        ga: { x: 2337, y: 1280, width: 71, height: 6 },
      },
      labels: {
        server: {
          blocks: [
            {
              x: 256, top: 357, anchor: 'end',
              lines: [{ text: 'Server', size: 40, weight: 800, color: NOTE }],
            },
            {
              x: 506, top: 236, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+23% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        microsoft_365_commercial: {
          blocks: [
            {
              x: 184, top: 552, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Microsoft 365', size: 38, weight: 800, color: NOTE },
                { text: 'Commercial', size: 38, weight: 800, color: NOTE },
              ],
            },
            {
              x: 544, top: 453, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gaming: {
          blocks: [
            {
              x: 255, top: 755, anchor: 'end',
              lines: [{ text: 'Gaming', size: 38, weight: 800, color: NOTE }],
            },
            {
              x: 520, top: 674, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+43% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        linkedin: {
          blocks: [
            {
              x: 257, top: 1025, anchor: 'end',
              lines: [{ text: 'LinkedIn', size: 38, weight: 800, color: NOTE }],
            },
            {
              x: 522, top: 935, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        windows_devices: {
          blocks: [
            {
              x: 269, top: 871, anchor: 'end', lineGap: 11,
              lines: [
                { text: 'Windows', size: 38, weight: 800, color: NOTE },
                { text: '& Devices', size: 38, weight: 800, color: NOTE },
              ],
            },
            {
              x: 534, top: 806, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '(0%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        search: {
          blocks: [
            {
              x: 253, top: 1157, anchor: 'end',
              lines: [{ text: 'Search', size: 38, weight: 800, color: NOTE }],
            },
            {
              x: 518, top: 1075, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 250, top: 1287, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: NOTE }],
            },
            {
              x: 515, top: 1196, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 980, top: 451, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: NOTE },
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1444, top: 319, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '69% margin', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1445, top: 1034, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1910, top: 239, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '47% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1910, top: 843, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 11, top: 706, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2440, top: 321, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '38% margin', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 15, top: 581, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Tax', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X - 2, top: 840, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '12% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 1, top: 1051, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'S&M', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '9% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 1, top: 1218, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'G&A', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 22.2, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'microsoft_365_commercial', col: 0, order: 1, type: 'source', label: ['Microsoft 365', 'Commercial'], value: 20.4, color: PURPLE, labelColor: NOTE, linkTint: PURPLE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 5.6, color: GAMING, labelColor: NOTE, linkTint: GAMING_LINK },
      { id: 'windows_devices', col: 0, order: 3, type: 'source', label: ['Windows', '& Devices'], value: 4.3, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'linkedin', col: 0, order: 4, type: 'source', label: 'LinkedIn', value: 4.3, color: LINKEDIN, labelColor: NOTE, linkTint: LINKEDIN_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.2, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 5.5, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 65.6, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 45.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 20.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 30.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 24.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 5.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'server', target: 'revenue', value: 22.2, sourceWidth: 109, targetWidth: 111, targetOrder: 0 },
      { source: 'microsoft_365_commercial', target: 'revenue', value: 20.4, sourceWidth: 101, targetWidth: 102, targetOrder: 1, curve: { c1x: 790, c2x: 825 } },
      { source: 'gaming', target: 'revenue', value: 5.6, sourceWidth: 26, targetWidth: 28, targetOrder: 2 },
      { source: 'windows_devices', target: 'revenue', value: 4.3, sourceWidth: 20, targetWidth: 22, targetOrder: 3 },
      { source: 'linkedin', target: 'revenue', value: 4.3, sourceWidth: 18, targetWidth: 21, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.2, sourceWidth: 15, targetWidth: 16, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 5.5, sourceWidth: 26, targetWidth: 28, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 45.5, sourceWidth: 229, targetWidth: 227, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 20.1, width: 99, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 30.6, sourceWidth: 153, targetWidth: 151, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.9, sourceWidth: 74, targetWidth: 73, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 24.7, width: 121, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.6, sourceWidth: 27, targetWidth: 25, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, width: 3, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 7.5, sourceWidth: 37, targetWidth: 36, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 5.7, sourceWidth: 28, targetWidth: 26, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.7, sourceWidth: 8, targetWidth: 6, sourceOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'Microsoft · 2025 财年第一季度',
        meta: {
          title: 'Microsoft 2025 财年第一季度利润表',
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 9 月',
          periodX: 2504,
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
          other_expense: { label: '其他' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
      },
    },
  });
})();

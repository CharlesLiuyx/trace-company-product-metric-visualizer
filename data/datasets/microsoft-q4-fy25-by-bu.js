/* ====================================================================
 * Microsoft - Q4 FY25 income statement by business unit ($B)
 * Reconstructed from input/processed/microsoft-q4-fy25-by-bu.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#01a6f0';
  const BLUE_LINK = '#85cff0';
  const GOLD = '#ffba01';
  const GOLD_LINK = '#f7d885';
  const GRAY_NODE = '#747474';
  const GRAY_LINK = '#b8b8b8';
  const HUB = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2483;

  const microsoftPaneLogo = (x, y, size, gap = 7) => `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" y="0" width="${size}" height="${size}" fill="#7fba00"/>
      <rect x="0" y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <defs>
        <linearGradient id="ms-q4-fy25-bybu-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/>
          <stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms-q4-fy25-bybu-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/>
          <stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
        <linearGradient id="ms-q4-fy25-bybu-azure-cross" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f8cdc"/>
          <stop offset="1" stop-color="#0761b5"/>
        </linearGradient>
      </defs>

      <g transform="translate(72 312)">
        ${microsoftPaneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-family="Arial,sans-serif" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="93" font-family="Arial,sans-serif" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="92" text-anchor="middle" font-family="Arial,sans-serif" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>

      <g transform="translate(237 657)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-q4-fy25-bybu-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms-q4-fy25-bybu-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="url(#ms-q4-fy25-bybu-azure-cross)"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(0.78)" fill="#0b78c4" opacity="0.82"/>
      </g>

      <g transform="translate(178 1020)">
        <g transform="scale(0.68)" fill="#00a4ef">
          <path d="M0 14L83 2V56H0Z"/>
          <path d="M88 1L170 -10V56H88Z"/>
          <path d="M0 61H83V115L0 103Z"/>
          <path d="M88 61H170V127L88 116Z"/>
        </g>
        <g transform="translate(132 -4) scale(0.88)">
          <circle cx="53" cy="48" r="40" fill="#000000"/>
          <path d="M22 25C42 37 64 37 84 25C73 10 34 10 22 25Z" fill="#ffffff"/>
          <path d="M20 28C32 44 40 55 48 86C29 79 14 64 13 47C12 39 15 33 20 28Z" fill="#ffffff"/>
          <path d="M86 28C74 44 66 55 58 86C77 79 92 64 93 47C94 39 91 33 86 28Z" fill="#ffffff"/>
          <text x="53" y="134" text-anchor="middle" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="#000000">XBOX</text>
        </g>
      </g>
    </g>`;

  const companyLogo = `
    ${microsoftPaneLogo(0, 0, 86, 10)}
  `;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q4-fy25-by-bu',
    name: 'Microsoft · Q4 FY25 ByBU',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending June 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q4-fy25-by-bu.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2315,
      periodX: 2528,
      periodY: 260,
      periodNoteY: 302,
      logoWidth: 196,
      logoHeight: 196,
      logoY: 260,
      logoViewBox: '0 0 182 182',
      logoSvg: companyLogo,
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 5.29,
      nodes: {
        productivity_business_processes: { x: 478, y: 442, width: 71, height: 174 },
        intelligent_cloud: { x: 478, y: 820, width: 71, height: 158 },
        more_personal_computing: { x: 478, y: 1174, width: 71, height: 69 },
        revenue: { x: 945, y: 644, width: 70, height: 404 },
        gross_profit: { x: 1412, y: 545, width: 71, height: 278 },
        cost_of_revenue: { x: 1412, y: 1021, width: 71, height: 126 },
        operating_profit: { x: 1880, y: 467, width: 70, height: 182 },
        operating_expenses: { x: 1880, y: 830, width: 70, height: 94 },
        net_profit: { x: 2346, y: 385, width: 71, height: 142 },
        tax: { x: 2346, y: 691, width: 71, height: 28 },
        other: { x: 2346, y: 814, width: 71, height: 7 },
        rnd: { x: 2346, y: 919, width: 71, height: 45 },
        sm: { x: 2346, y: 1098, width: 71, height: 36 },
        ga: { x: 2346, y: 1292, width: 71, height: 8 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            {
              x: 454, top: 345, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 242, top: 437, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Productivity &', size: 40, weight: 800, color: NOTE },
                { text: 'Business Processes', size: 40, weight: 800, color: NOTE },
                { text: '57% operating margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intelligent_cloud: {
          blocks: [
            {
              x: 454, top: 722, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+26% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 287, top: 828, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Intelligent Cloud', size: 40, weight: 800, color: NOTE },
                { text: '41% operating margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        more_personal_computing: {
          blocks: [
            {
              x: 454, top: 1073, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 293, top: 1148, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'More Personal', size: 40, weight: 800, color: NOTE },
                { text: 'Computing', size: 40, weight: 800, color: NOTE },
                { text: '24% operating margin', size: 29, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 981, top: 492, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: NOTE },
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1448, top: 352, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '69% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1448, top: 1161, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1915, top: 278, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '45% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1915, top: 937, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2434, top: 364, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '36% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 660, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 774, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2533, top: 915, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '12% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2533, top: 1086, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '10% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2529, top: 1241, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '3% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'productivity_business_processes',
        col: 0,
        order: 0,
        type: 'source',
        label: ['Productivity &', 'Business Processes'],
        value: 33.1,
        notes: ['57% operating margin', '+5pp Y/Y'],
        color: BLUE,
        linkTint: BLUE_LINK,
      },
      {
        id: 'intelligent_cloud',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Intelligent Cloud',
        value: 29.9,
        notes: ['41% operating margin', '(1pp) Y/Y'],
        color: GOLD,
        linkTint: GOLD_LINK,
      },
      {
        id: 'more_personal_computing',
        col: 0,
        order: 2,
        type: 'source',
        label: ['More Personal', 'Computing'],
        value: 13.5,
        notes: ['24% operating margin', '+4pp Y/Y'],
        color: GRAY_NODE,
        linkTint: GRAY_LINK,
      },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 76.4, notes: ['+18% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 52.4, notes: ['69% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 24.0, valueText: '($24.0B)' },
      {
        id: 'operating_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Operating profit',
        value: 34.3,
        notes: ['45% margin', '+2pp Y/Y'],
      },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 18.1, valueText: '($18.1B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 27.2, notes: ['36% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.4 },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 1.7, valueText: '($1.7B)' },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 8.8, notes: ['12% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 7.3, notes: ['10% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.0, valueText: '($2.0B)', notes: ['3% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 33.1, sourceWidth: 174, targetWidth: 176, y0: 529, y1: 732, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 29.9, sourceWidth: 158, targetWidth: 158, y0: 899, y1: 899, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 13.5, sourceWidth: 69, targetWidth: 70, y0: 1208.5, y1: 1013, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 52.4, sourceWidth: 278, targetWidth: 278, y0: 783, y1: 684, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 24.0, sourceWidth: 126, targetWidth: 126, y0: 985, y1: 1084, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 34.3, sourceWidth: 183, targetWidth: 182, y0: 636.5, y1: 558, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 18.1, sourceWidth: 95, targetWidth: 94, y0: 775.5, y1: 877, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 27.2, sourceWidth: 146, targetWidth: 142, y0: 540, y1: 456, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.4, sourceWidth: 29, targetWidth: 28, y0: 627.5, y1: 705, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 1.7, sourceWidth: 7, targetWidth: 7, y0: 645.5, y1: 817.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.8, sourceWidth: 48, targetWidth: 45, y0: 854, y1: 941.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.3, sourceWidth: 38, targetWidth: 36, y0: 897, y1: 1116, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 2.0, sourceWidth: 8, targetWidth: 8, y0: 920, y1: 1296, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['Linked', 'in'],
      zh: {
        name: 'Microsoft · 2025 财年第四季度（按业务部门）',
        meta: {
          title: 'Microsoft 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 6 月',
          periodX: 2504,
        },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程', notes: ['营业利润率 57%', '同比 +5 个百分点'] },
          intelligent_cloud: { label: '智能云', notes: ['营业利润率 41%', '同比 (1 个百分点)'] },
          more_personal_computing: { label: '更多个人计算', notes: ['营业利润率 24%', '同比 +4 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 69%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 45%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 36%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 10%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 3%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            net_profit: {
              blocks: [
                {
                  x: 2434, top: 364, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 36%', size: 29, weight: 400, color: '#666666' },
                    { text: '同比 +2 个百分点', size: 28, weight: 400, color: '#666666' },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2533, top: 915, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 12%', size: 25, weight: 400, color: '#666666' },
                    { text: '同比 (1 个百分点)', size: 23, weight: 400, color: '#666666' },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2533, top: 1086, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '销售与市场', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 10%', size: 25, weight: 400, color: '#666666' },
                    { text: '同比 (1 个百分点)', size: 23, weight: 400, color: '#666666' },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2529, top: 1241, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 3%', size: 25, weight: 400, color: '#666666' },
                    { text: '同比 (1 个百分点)', size: 23, weight: 400, color: '#666666' },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();

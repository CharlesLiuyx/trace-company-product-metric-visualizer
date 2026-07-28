/* ====================================================================
 * Microsoft - Q1 FY23 income statement by business unit ($B)
 * Reconstructed from input/processed/microsoft-q1-fy23.png as a fixed
 * d3-sankey layout with pure SVG/text brand annotations.
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
  const NOTE = '#5e5e5e';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2472;

  const microsoftPaneLogo = (x, y, size, gap = 7) => `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" y="0" width="${size}" height="${size}" fill="#7fba00"/>
      <rect x="0" y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;

  const annotations = `
    <g font-family="Arial,sans-serif" data-typography-role="brand">
      <defs>
        <linearGradient id="ms-q1-fy23-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/>
          <stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms-q1-fy23-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/>
          <stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
        <linearGradient id="ms-q1-fy23-azure-cross" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f8cdc"/>
          <stop offset="1" stop-color="#0761b5"/>
        </linearGradient>
      </defs>

      <g transform="translate(72 383)">
        ${microsoftPaneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="93" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="92" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>

      <g transform="translate(237 770)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-q1-fy23-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms-q1-fy23-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="url(#ms-q1-fy23-azure-cross)"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(0.78)" fill="#0b78c4" opacity="0.82"/>
      </g>

      <g transform="translate(178 1135)">
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
          <text x="53" y="105" text-anchor="middle" font-size="51" font-weight="500" fill="#000000">XBOX</text>
        </g>
      </g>
    </g>`;

  const companyLogo = `
    ${microsoftPaneLogo(0, 0, 61, 7)}
    <text x="160" y="101" font-family="Arial,sans-serif" font-size="112"
      font-weight="500" fill="#737373">Microsoft</text>`;

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 10) => ({
    x,
    top,
    anchor,
    lines,
    lineGap,
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q1-fy23',
    name: 'Microsoft · Q1 FY23',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Sept. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/microsoft-q1-fy23.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2315,
      periodX: 2400,
      periodY: 252,
      periodNoteY: 292,
      logoWidth: 710,
      logoHeight: 130,
      logoY: 276,
      logoViewBox: '0 0 710 130',
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
      interfaceAudit: { mode: 'error', fullFaceIds: ['net_profit:left'] },
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 9.68,
      nodes: {
        productivity_business_processes: { x: 483, y: 456, width: 71, height: 157 },
        intelligent_cloud: { x: 483, y: 816, width: 71, height: 195 },
        more_personal_computing: { x: 483, y: 1184, width: 71, height: 128 },
        revenue: { x: 962, y: 612, width: 70, height: 485 },
        gross_profit: { x: 1395, y: 564, width: 71, height: 334 },
        cost_of_revenue: { x: 1397, y: 1051, width: 72, height: 147 },
        operating_profit: { x: 1861, y: 487, width: 70, height: 206 },
        operating_expenses: { x: 1861, y: 844, width: 70, height: 125 },
        other: { x: 2216, y: 654, width: 71, height: 1 },
        net_profit: { x: 2337, y: 403, width: 71, height: 169 },
        tax: { x: 2337, y: 782, width: 71, height: 37 },
        rnd: { x: 2337, y: 953, width: 71, height: 63 },
        sm: { x: 2337, y: 1152, width: 71, height: 47 },
        ga: { x: 2337, y: 1322, width: 71, height: 11 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            block(472, 350, 'start', [
              line('$value', 40, 400, NOTE),
              line('+9% Y/Y', 29, 400, NOTE),
            ]),
            block(304, 499, 'middle', [
              line('Productivity &', 37, 800, NOTE),
              line('Business Processes', 37, 800, NOTE),
              line('51% operating margin', 29, 400, NOTE),
            ]),
          ],
        },
        intelligent_cloud: {
          blocks: [
            block(473, 715, 'start', [
              line('$value', 40, 400, NOTE),
              line('+20% Y/Y', 29, 400, NOTE),
            ]),
            block(305, 935, 'middle', [
              line('Intelligent Cloud', 40, 800, NOTE),
              line('44% operating margin', 29, 400, NOTE),
            ]),
          ],
        },
        more_personal_computing: {
          blocks: [
            block(458, 1092, 'start', [
              line('$value', 40, 400, NOTE),
              line('Flat Y/Y', 29, 400, NOTE),
            ]),
            block(250, 1240, 'middle', [
              line('More Personal Computing', 33, 800, NOTE),
              line('32% operating margin', 29, 400, NOTE),
            ]),
          ],
        },
        revenue: {
          blocks: [
            block(997, 461.5, 'middle', [
              line('Revenue', 40, 800, NOTE),
              line('$value', 40, 400, NOTE),
              line('+11% Y/Y', 29, 400, NOTE),
            ], 12),
          ],
        },
        gross_profit: {
          blocks: [
            block(1430, 380, 'middle', [
              line('Gross profit', 40, 800),
              line('$value', 40),
              line('69% margin', 29, 400, NOTE),
              line('(1pp) Y/Y', 29, 400, NOTE),
            ]),
          ],
        },
        cost_of_revenue: {
          blocks: [
            block(1433, 1218, 'middle', [
              line('Cost of', 40, 800),
              line('revenue', 40, 800),
              line('$value', 36),
            ]),
          ],
        },
        operating_profit: {
          blocks: [
            block(1896, 306, 'middle', [
              line('Operating profit', 40, 800),
              line('$value', 40),
              line('43% margin', 29, 400, NOTE),
              line('(2pp) Y/Y', 29, 400, NOTE),
            ]),
          ],
        },
        operating_expenses: {
          blocks: [
            block(1896, 992, 'middle', [
              line('Operating', 40, 800),
              line('Expenses', 40, 800),
              line('$value', 36),
            ]),
          ],
        },
        other: {
          blocks: [
            block(2252, 664, 'middle', [
              line('Other', 31, 800),
              line('$value', 27),
            ], 8),
          ],
        },
        net_profit: {
          blocks: [
            block(2433, 400, 'start', [
              line('Net profit', 40, 800),
              line('$value', 40),
              line('35% margin', 29, 400, NOTE),
              line('(10pp) Y/Y', 29, 400, NOTE),
            ]),
          ],
        },
        tax: {
          blocks: [
            block(2458, 774, 'start', [
              line('Tax', 31, 800),
              line('$value', 29),
            ]),
          ],
        },
        rnd: {
          blocks: [
            block(2457.5, 948, 'start', [
              line('R&D', 31, 800),
              line('$value', 29),
            ]),
          ],
        },
        sm: {
          blocks: [
            block(2460, 1139, 'start', [
              line('S&M', 31, 800),
              line('$value', 29),
            ]),
          ],
        },
        ga: {
          blocks: [
            block(2457, 1286, 'start', [
              line('G&A', 31, 800),
              line('$value', 29),
            ]),
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
        value: 16.5,
        notes: ['51% operating margin'],
        color: BLUE,
        linkTint: BLUE_LINK,
      },
      {
        id: 'intelligent_cloud',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Intelligent Cloud',
        value: 20.3,
        notes: ['44% operating margin'],
        color: GOLD,
        linkTint: GOLD_LINK,
      },
      {
        id: 'more_personal_computing',
        col: 0,
        order: 2,
        type: 'source',
        label: 'More Personal Computing',
        value: 13.3,
        notes: ['32% operating margin'],
        color: GRAY_NODE,
        linkTint: GRAY_LINK,
      },
      {
        id: 'revenue',
        col: 1,
        order: 0,
        type: 'hub',
        label: 'Revenue',
        value: 50.1,
        notes: ['+11% Y/Y'],
        color: HUB,
      },
      {
        id: 'gross_profit',
        col: 2,
        order: 0,
        type: 'profit',
        label: 'Gross profit',
        value: 34.7,
        notes: ['69% margin', '(1pp) Y/Y'],
      },
      {
        id: 'cost_of_revenue',
        col: 2,
        order: 1,
        type: 'cost',
        label: ['Cost of', 'revenue'],
        value: 15.5,
      },
      {
        id: 'operating_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Operating profit',
        value: 21.5,
        notes: ['43% margin', '(2pp) Y/Y'],
      },
      {
        id: 'operating_expenses',
        col: 3,
        order: 1,
        type: 'cost',
        label: ['Operating', 'Expenses'],
        value: 13.2,
      },
      {
        id: 'other',
        col: 4,
        order: 0,
        type: 'profit',
        label: 'Other',
        value: 0.054,
        valueText: '$54M',
      },
      {
        id: 'net_profit',
        col: 5,
        order: 0,
        type: 'profit',
        label: 'Net profit',
        value: 17.6,
        notes: ['35% margin', '(10pp) Y/Y'],
      },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.0, valueText: '($4.0B)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 6.6 },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 5.1 },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 1.4 },
    ],

    links: [
      {
        source: 'productivity_business_processes',
        target: 'revenue',
        value: 16.5,
        sourceWidth: 157,
        targetWidth: 157,
        y0: 534.5,
        y1: 690.5,
        sourceOrder: 0,
        targetOrder: 0,
      },
      {
        source: 'intelligent_cloud',
        target: 'revenue',
        value: 20.3,
        sourceWidth: 195,
        targetWidth: 195,
        y0: 913.5,
        y1: 866.5,
        sourceOrder: 0,
        targetOrder: 1,
      },
      {
        source: 'more_personal_computing',
        target: 'revenue',
        value: 13.3,
        sourceWidth: 128,
        targetWidth: 133,
        y0: 1248,
        y1: 1030.5,
        sourceOrder: 0,
        targetOrder: 2,
      },
      {
        source: 'revenue',
        target: 'gross_profit',
        value: 34.7,
        sourceWidth: 334,
        targetWidth: 334,
        y0: 779,
        y1: 731,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'revenue',
        target: 'cost_of_revenue',
        value: 15.5,
        sourceWidth: 151,
        targetWidth: 147,
        y0: 1021.5,
        y1: 1124.5,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'gross_profit',
        target: 'operating_profit',
        value: 21.5,
        sourceWidth: 207,
        targetWidth: 206,
        y0: 667.5,
        y1: 590,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'gross_profit',
        target: 'operating_expenses',
        value: 13.2,
        sourceWidth: 127,
        targetWidth: 125,
        y0: 834.5,
        y1: 906.5,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'operating_profit',
        target: 'net_profit',
        value: 17.5,
        sourceWidth: 168,
        targetWidth: 168,
        y0: 571,
        y1: 487,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'other',
        target: 'net_profit',
        value: 0.054,
        sourceWidth: 1,
        targetWidth: 1,
        y0: 654.5,
        y1: 571.5,
        sourceOrder: 0,
        targetOrder: 1,
        linkTint: GREEN_LINK,
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 4.0,
        sourceWidth: 38,
        targetWidth: 37,
        y0: 674,
        y1: 800.5,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'operating_expenses',
        target: 'rnd',
        value: 6.6,
        sourceWidth: 64,
        targetWidth: 63,
        y0: 876,
        y1: 984.5,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'operating_expenses',
        target: 'sm',
        value: 5.1,
        sourceWidth: 48,
        targetWidth: 47,
        y0: 932,
        y1: 1175.5,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'operating_expenses',
        target: 'ga',
        value: 1.4,
        sourceWidth: 13,
        targetWidth: 11,
        y0: 962.5,
        y1: 1327.5,
        sourceOrder: 2,
        targetOrder: 0,
        linkTint: RED_LINK,
      },
    ],

    i18n: {
      preservedAnnotationText: ['Linked', 'in'],
      zh: {
        name: 'Microsoft · 2023 财年第一季度',
        meta: {
          title: 'Microsoft 2023 财年第一季度利润表',
          period: '2023 财年第一季度',
          periodNote: '截至 2022 年 9 月',
          periodX: 2390,
        },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程', notes: ['营业利润率 51%'] },
          intelligent_cloud: { label: '智能云', notes: ['营业利润率 44%'] },
          more_personal_computing: { label: '更多个人计算', notes: ['营业利润率 32%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 69%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 (10 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
        layout: {
          labels: {
            net_profit: {
              blocks: [
                block(2433, 400, 'start', [
                  line('净利润', 40, 800),
                  line('$value', 40),
                  line('利润率 35%', 29, 400, NOTE),
                  line('同比 (10 个百分点)', 27, 400, NOTE),
                ]),
              ],
            },
          },
        },
      },
    },
  });
})();

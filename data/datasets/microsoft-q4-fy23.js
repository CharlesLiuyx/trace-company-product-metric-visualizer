/* Microsoft Q4 FY23 income statement by business unit ($B), measured from the Source. */
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
  const RIGHT_LABEL_X = 2495;

  const panes = (x, y, size, gap = 4) => `
    <g transform="translate(${x} ${y})">
      <rect width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" width="${size}" height="${size}" fill="#7fba00"/>
      <rect y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;

  const companyLogo = `
    ${panes(0, 0, 60, 8)}
    <text x="160" y="105" font-family="Arial,sans-serif" font-size="99"
      font-weight="600" fill="#737373">Microsoft</text>`;

  const annotations = `
    <g font-family="Arial,sans-serif" data-typography-role="brand">
      <g transform="translate(70 430)">
        ${panes(0, 0, 27, 4)}
        <text x="70" y="49" font-size="44" font-weight="700" fill="#747474">Microsoft 365</text>
        <text x="148" y="103" font-size="49" font-weight="800" fill="#2867b2">Linked</text>
        <rect x="293" y="63" width="50" height="47" rx="4" fill="#2867b2"/>
        <text x="318" y="102" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>
      <g transform="translate(254 770)">
        <defs>
          <linearGradient id="ms-q4-fy23-azure-left" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#0b4f98"/>
            <stop offset="1" stop-color="#0875c9"/>
          </linearGradient>
          <linearGradient id="ms-q4-fy23-azure-right" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#34c7f3"/>
            <stop offset="1" stop-color="#149fd7"/>
          </linearGradient>
        </defs>
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-q4-fy23-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(.78)" fill="url(#ms-q4-fy23-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(.78)" fill="#0f8cdc"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(.78)" fill="#0b78c4" opacity=".82"/>
      </g>
      <g transform="translate(191 1132)">
        <g fill="#00adef">
          <path d="M0 10L43 3V50H0Z"/>
          <path d="M50 2L107 -6V50H50Z"/>
          <path d="M0 57H43V98L0 92Z"/>
          <path d="M50 57H107V106L50 99Z"/>
        </g>
        <g transform="translate(126 -5)">
          <circle cx="58" cy="42" r="42" fill="#000000"/>
          <path d="M24 27C43 8 75 8 94 27C80 20 64 32 58 38C52 32 38 20 24 27Z" fill="#ffffff"/>
          <path d="M21 39C24 70 47 82 56 83C51 61 39 45 21 39Z" fill="#ffffff"/>
          <path d="M95 39C92 70 69 82 60 83C65 61 77 45 95 39Z" fill="#ffffff"/>
          <text x="58" y="105" text-anchor="middle" font-size="55" font-weight="500" fill="#000000">XBOX</text>
        </g>
      </g>
    </g>
    <rect x="2264" y="554" width="4" height="1" fill="${GREEN_LINK}" aria-hidden="true"/>`;

  const line = (text, size, weight = 400, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 10, semanticRole) => ({
    x,
    top,
    anchor,
    lines,
    lineGap,
    ...(semanticRole ? { semanticRole } : {}),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q4-fy23',
    name: 'Microsoft · Q4 FY23',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending June 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: {
        src: 'input/processed/microsoft-q4-fy23.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2320,
      periodX: 2495,
      periodY: 256,
      periodNoteY: 293,
      logoWidth: 658,
      logoHeight: 130,
      logoY: 276,
      logoViewBox: '0 0 658 130',
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
      type: { name: 40, value: 40, note: 28, lineGap: 10 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 6.92,
      nodes: {
        productivity_business_processes: { x: 482, y: 452, width: 71, height: 125 },
        intelligent_cloud: { x: 482, y: 810, width: 71, height: 164 },
        more_personal_computing: { x: 482, y: 1186, width: 71, height: 94 },
        revenue: { x: 949, y: 674, width: 70, height: 389 },
        gross_profit: { x: 1411, y: 581, width: 71, height: 272 },
        cost_of_revenue: { x: 1413, y: 1036, width: 72, height: 114 },
        operating_profit: { x: 1876, y: 466, width: 70, height: 168 },
        operating_expenses: { x: 1879, y: 861, width: 70, height: 103 },
        other: { x: 2194, y: 554, width: 70, height: 1 },
        net_profit: { x: 2350, y: 343, width: 71, height: 138 },
        tax: { x: 2350, y: 670, width: 71, height: 30 },
        rnd: { x: 2350, y: 930, width: 71, height: 45 },
        sm: { x: 2350, y: 1114, width: 71, height: 41 },
        ga: { x: 2350, y: 1278, width: 71, height: 12 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            block(514, 363, 'middle', [line('$value', 40, 400, NOTE), line('+10% Y/Y', 28, 400, NOTE)]),
            block(282, 561, 'middle', [
              line('Productivity &', 31, 800, NOTE),
              line('Business Processes', 31, 800, NOTE),
              line('49% operating margin', 28, 400, NOTE),
            ]),
          ],
        },
        intelligent_cloud: {
          blocks: [
            block(517, 712, 'middle', [line('$value', 40, 400, NOTE), line('+15% Y/Y', 28, 400, NOTE)]),
            block(293, 944, 'middle', [
              line('Intelligent Cloud', 29, 800, NOTE),
              line('44% operating margin', 28, 400, NOTE),
            ]),
          ],
        },
        more_personal_computing: {
          blocks: [
            block(517, 1094, 'middle', [line('$value', 40, 400, NOTE), line('(4%) Y/Y', 28, 400, NOTE)]),
            block(250, 1248, 'middle', [
              line('More Personal Computing', 31, 800, NOTE),
              line('34% operating margin', 28, 400, NOTE),
            ]),
          ],
        },
        revenue: {
          blocks: [
            block(984, 531, 'middle', [
              line('Revenue', 40, 800, NOTE),
              line('$value', 40, 400, NOTE),
              line('+8% Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        gross_profit: {
          blocks: [
            block(1447, 398, 'middle', [
              line('Gross profit', 40, 800),
              line('$value', 40),
              line('70% margin', 28, 400, NOTE),
              line('+2pp Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        cost_of_revenue: {
          blocks: [
            block(1449, 1173, 'middle', [
              line('Cost of', 40, 800),
              line('revenue', 40, 800),
              line('$value', 36),
            ]),
          ],
        },
        operating_profit: {
          blocks: [
            block(1911, 284, 'middle', [
              line('Operating profit', 40, 800),
              line('$value', 40),
              line('40% margin', 28, 400, NOTE),
              line('+4pp Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        operating_expenses: {
          blocks: [
            block(1905, 992, 'middle', [
              line('Operating', 36, 800),
              line('Expenses', 36, 800),
              line('$value', 36),
            ], 4),
          ],
        },
        other: {
          blocks: [
            block(2229, 568, 'middle', [line('Other', 31, 800), line('$value', 29)]),
          ],
        },
        net_profit: {
          blocks: [
            block(2435, 350, 'start', [
              line('Net profit', 40, 800),
              line('$value', 40),
              line('36% margin', 28, 400, NOTE),
              line('+3pp Y/Y', 28, 400, NOTE),
            ]),
          ],
        },
        tax: {
          blocks: [
            block(2475, 657, 'start', [line('Tax', 31, 800), line('$value', 29)]),
          ],
        },
        rnd: {
          blocks: [
            block(RIGHT_LABEL_X, 917, 'start', [
              line('R&D', 31, 800),
              line('$value', 29),
            ]),
            block(2530, 989, 'middle', [line('12% of revenue', 29, 400, NOTE)]),
          ],
        },
        sm: {
          blocks: [
            block(RIGHT_LABEL_X, 1100, 'start', [
              line('S&M', 31, 800),
              line('$value', 29),
            ]),
            block(2530, 1172, 'middle', [line('11% of revenue', 29, 400, NOTE)]),
          ],
        },
        ga: {
          blocks: [
            block(RIGHT_LABEL_X, 1256, 'start', [
              line('G&A', 31, 800),
              line('$value', 29),
            ]),
            block(2528, 1328, 'middle', [line('4% of revenue', 29, 400, NOTE)]),
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
        value: 18.3,
        color: BLUE,
        labelColor: NOTE,
        linkTint: BLUE_LINK,
        notes: ['49% operating margin'],
      },
      {
        id: 'intelligent_cloud',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Intelligent Cloud',
        value: 24.0,
        valueText: '$24.0B',
        color: GOLD,
        labelColor: NOTE,
        linkTint: GOLD_LINK,
        notes: ['44% operating margin'],
      },
      {
        id: 'more_personal_computing',
        col: 0,
        order: 2,
        type: 'source',
        label: 'More Personal Computing',
        value: 13.9,
        color: GRAY_NODE,
        labelColor: NOTE,
        linkTint: GRAY_LINK,
        notes: ['34% operating margin'],
      },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 56.2, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 39.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 16.8, valueText: '($16.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 24.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 15.1, valueText: '($15.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 20.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.6, valueText: '($4.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 6.7, valueText: '($6.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 6.2, valueText: '($6.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 2.2, valueText: '($2.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 18.3, sourceWidth: 125, targetWidth: 127, y0: 514.5, y1: 737.5, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 24.0, sourceWidth: 164, targetWidth: 166, y0: 892, y1: 884, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 13.9, sourceWidth: 94, targetWidth: 96, y0: 1233, y1: 1015, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 39.4, sourceWidth: 273, targetWidth: 272, y0: 810.5, y1: 717, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 16.8, sourceWidth: 116, targetWidth: 114, y0: 1005, y1: 1093, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 24.3, sourceWidth: 168, targetWidth: 168, y0: 665, y1: 550, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.1, sourceWidth: 104, targetWidth: 103, y0: 801, y1: 912.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 19.6, sourceWidth: 136, targetWidth: 138, y0: 534, y1: 412, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.6, sourceWidth: 32, targetWidth: 30, y0: 618, y1: 685, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other',
        target: 'net_profit',
        value: 0.5,
        sourceWidth: 1,
        targetWidth: 1,
        y0: 554.5,
        y1: 480.5,
        sourceOrder: 0,
        targetOrder: 1,
        curve: { c1x: 2272, c1y: 554.5, c2x: 2315, c2y: 480.5 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 6.7, sourceWidth: 46, targetWidth: 45, y0: 884, y1: 952.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.2, sourceWidth: 42, targetWidth: 41, y0: 928, y1: 1134.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 2.2, sourceWidth: 15, targetWidth: 12, y0: 956.5, y1: 1284, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Microsoft', 'Microsoft 365', 'Linked', 'in', 'XBOX'],
      zh: {
        name: 'Microsoft · 2023 财年第四季度',
        meta: {
          title: 'Microsoft 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 6 月',
        },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程', notes: ['营业利润率 49%'] },
          intelligent_cloud: { label: '智能云', notes: ['营业利润率 44%'] },
          more_personal_computing: { label: '更多个人计算', notes: ['营业利润率 34%'] },
          revenue: { label: '收入' },
          gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润' },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
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

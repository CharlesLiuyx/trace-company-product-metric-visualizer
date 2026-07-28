/* Microsoft Q3 FY23 income statement ($B), measured from the source image. */
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

  const paneLogo = (x, y, size, gap = 6) => `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" y="0" width="${size}" height="${size}" fill="#7fba00"/>
      <rect x="0" y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <defs>
        <linearGradient id="ms23-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/><stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms23-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/><stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
        <linearGradient id="ms23-azure-cross" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f8cdc"/><stop offset="1" stop-color="#0761b5"/>
        </linearGradient>
      </defs>
      <g transform="translate(640 276)">
        ${paneLogo(0, 0, 62, 7)}
        <text x="158" y="103" font-family="Arial,sans-serif" font-size="105" font-weight="700" fill="#747474">Microsoft</text>
      </g>
      <g transform="translate(72 431)">
        ${paneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-family="Arial,sans-serif" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="93" font-family="Arial,sans-serif" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="92" text-anchor="middle" font-family="Arial,sans-serif" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>
      <g transform="translate(254 770)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms23-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms23-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="url(#ms23-azure-cross)"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(0.78)" fill="#0b78c4" opacity="0.82"/>
      </g>
      <g transform="translate(190 1130)">
        <g transform="scale(0.68)" fill="#00a4ef">
          <path d="M0 14L83 2V56H0Z"/><path d="M88 1L170 -10V56H88Z"/>
          <path d="M0 61H83V115L0 103Z"/><path d="M88 61H170V127L88 116Z"/>
        </g>
        <g transform="translate(132 -4) scale(0.88)">
          <circle cx="53" cy="48" r="40" fill="#000000"/>
          <path d="M22 25C42 37 64 37 84 25C73 10 34 10 22 25Z" fill="#ffffff"/>
          <path d="M20 28C32 44 40 55 48 86C29 79 14 64 13 47C12 39 15 33 20 28Z" fill="#ffffff"/>
          <path d="M86 28C74 44 66 55 58 86C77 79 92 64 93 47C94 39 91 33 86 28Z" fill="#ffffff"/>
          <text x="53" y="114" text-anchor="middle" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="#000000">XBOX</text>
        </g>
      </g>
    </g>`;

  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lineGap, lines });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q3-fy23',
    name: 'Microsoft · Q3 FY23',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2315,
      periodX: 2396,
      periodY: 255,
      periodNoteY: 292,
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 7.5,
      nodes: {
        productivity_business_processes: { x: 482, y: 498, width: 72, height: 132 },
        intelligent_cloud: { x: 482, y: 829, width: 72, height: 167 },
        more_personal_computing: { x: 482, y: 1185, width: 72, height: 100 },
        revenue: { x: 947, y: 651, width: 72, height: 397 },
        gross_profit: { x: 1416, y: 568, width: 72, height: 276 },
        cost_of_revenue: { x: 1416, y: 1031, width: 72, height: 121 },
        operating_profit: { x: 1901, y: 490, width: 72, height: 168 },
        operating_expenses: { x: 1901, y: 815, width: 72, height: 108 },
        other: { x: 2217, y: 600, width: 70, height: 5 },
        net_profit: { x: 2350, y: 369, width: 72, height: 138 },
        tax: { x: 2350, y: 726, width: 72, height: 34 },
        rnd: { x: 2350, y: 908, width: 72, height: 53 },
        sm: { x: 2350, y: 1104, width: 72, height: 44 },
        ga: { x: 2350, y: 1287, width: 72, height: 13 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            block(453, 404, 'start', [line('$value', 40, 400, NOTE), line('+11% Y/Y', 29, 400, NOTE)]),
            block(284, 546, 'middle', [
              line('Productivity &', 32, 800, NOTE), line('Business Processes', 32, 800, NOTE),
              line('49% operating margin', 29, 400, NOTE),
            ]),
          ],
        },
        intelligent_cloud: {
          blocks: [
            block(453, 736, 'start', [line('$value', 40, 400, NOTE), line('+16% Y/Y', 29, 400, NOTE)]),
            block(301, 935, 'middle', [
              line('Intelligent Cloud', 32, 800, NOTE), line('43% operating margin', 29, 400, NOTE),
            ]),
          ],
        },
        more_personal_computing: {
          blocks: [
            block(452, 1090, 'start', [line('$value', 40, 400, NOTE), line('(9%) Y/Y', 29, 400, NOTE)]),
            block(252, 1248, 'middle', [
              line('More Personal Computing', 32, 800, NOTE), line('32% operating margin', 29, 400, NOTE),
            ]),
          ],
        },
        revenue: { blocks: [block(983, 504, 'middle', [
          line('Revenue', 40, 800, NOTE), line('$value', 40, 400, NOTE), line('+7% Y/Y', 29, 400, NOTE),
        ], 12)] },
        gross_profit: { blocks: [block(1452, 385, 'middle', [
          line('Gross profit', 40, 800), line('$value', 40, 400),
          line('69% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE),
        ])] },
        cost_of_revenue: { blocks: [block(1452, 1174, 'middle', [
          line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 36, 400),
        ])] },
        operating_profit: { blocks: [block(1940, 308, 'middle', [
          line('Operating profit', 40, 800), line('$value', 40, 400),
          line('42% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE),
        ])] },
        operating_expenses: { blocks: [block(1935, 935, 'middle', [
          line('Operating', 40, 800), line('Expenses', 40, 800), line('$value', 36, 400),
        ])] },
        other: { blocks: [block(2253, 616, 'middle', [
          line('Other', 31, 800), line('$value', 27, 400),
        ], 8)] },
        net_profit: { blocks: [block(2434, 374, 'start', [
          line('Net profit', 40, 800), line('$value', 40, 400),
          line('35% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE),
        ])] },
        tax: { blocks: [block(2479, 699, 'start', [
          line('Tax', 31, 800), line('$value', 29, 400),
        ])] },
        rnd: { blocks: [block(2445, 904, 'start', [
          line('R&D', 31, 800), line('$value', 29, 400), line('13% of revenue', 25, 400, NOTE),
        ])] },
        sm: { blocks: [block(2445, 1089, 'start', [
          line('S&M', 31, 800), line('$value', 29, 400), line('11% of revenue', 25, 400, NOTE),
        ])] },
        ga: { blocks: [block(2452, 1254, 'start', [
          line('G&A', 31, 800), line('$value', 29, 400), line('3% of revenue', 25, 400, NOTE),
        ])] },
      },
    },
    nodes: [
      { id: 'productivity_business_processes', col: 0, order: 0, type: 'source', label: ['Productivity &', 'Business Processes'], value: 17.5, notes: ['49% operating margin'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'intelligent_cloud', col: 0, order: 1, type: 'source', label: 'Intelligent Cloud', value: 22.1, notes: ['43% operating margin'], color: GOLD, linkTint: GOLD_LINK },
      { id: 'more_personal_computing', col: 0, order: 2, type: 'source', label: 'More Personal Computing', value: 13.3, notes: ['32% operating margin'], color: GRAY_NODE, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 52.9, notes: ['+7% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 36.7, notes: ['69% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 16.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 22.4, notes: ['42% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 14.4 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 18.3, notes: ['35% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.4 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 7.0, valueText: '($7.0B)', notes: ['13% of revenue'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 5.8, notes: ['11% of revenue'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 1.6, notes: ['3% of revenue'] },
    ],
    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 17.5, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 22.1, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 13.3, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 36.7, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 16.1, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 22.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 18.0, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'other',
        target: 'net_profit',
        value: 0.3,
        sourceOrder: 0,
        targetOrder: 1,
        sourceWidth: 4,
        targetWidth: 3,
        y0: 602,
        y1: 505.5,
      },
      { source: 'operating_profit', target: 'tax', value: 4.4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 7.0, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 5.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 1.6, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Microsoft', 'Microsoft 365', 'Linked', 'in', 'XBOX'],
      zh: {
        name: 'Microsoft · 2023 财年第三季度',
        meta: { title: 'Microsoft 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 3 月' },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程', notes: ['营业利润率 49%'] },
          intelligent_cloud: { label: '智能云', notes: ['营业利润率 43%'] },
          more_personal_computing: { label: '更多个人计算', notes: ['营业利润率 32%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 69%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 13%'] },
          sm: { label: '销售与市场', notes: ['占收入 11%'] },
          ga: { label: '管理费用', notes: ['占收入 3%'] },
        },
      },
    },
  });
})();

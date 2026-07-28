/* Microsoft Q2 FY23 income statement ($B), measured from the native Source. */
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
  const RIGHT_LABEL_X = 2457;

  const microsoftPaneLogo = (x, y, size, gap = 6) => `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" y="0" width="${size}" height="${size}" fill="#7fba00"/>
      <rect x="0" y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;

  const annotations = `
    <g font-family="Arial,sans-serif" data-typography-role="brand">
      <defs>
        <linearGradient id="ms-q2-fy23-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/><stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms-q2-fy23-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/><stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
      </defs>
      <g transform="translate(72 431)">
        ${microsoftPaneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="103" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="66" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="103" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>
      <g transform="translate(254 770)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-q2-fy23-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms-q2-fy23-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="#0f8cdc"/>
      </g>
      <g transform="translate(191 1135)">
        <g transform="scale(0.68)" fill="#00a4ef">
          <path d="M0 14L83 2V56H0Z"/><path d="M88 1L170 -10V56H88Z"/>
          <path d="M0 61H83V115L0 103Z"/><path d="M88 61H170V127L88 116Z"/>
        </g>
        <g transform="translate(132 -4) scale(0.88)">
          <circle cx="53" cy="48" r="40" fill="#000"/>
          <path d="M22 25C42 37 64 37 84 25C73 10 34 10 22 25Z" fill="#fff"/>
          <path d="M20 28C32 44 40 55 48 86C29 79 14 64 13 47C12 39 15 33 20 28Z" fill="#fff"/>
          <path d="M86 28C74 44 66 55 58 86C77 79 92 64 93 47C94 39 91 33 86 28Z" fill="#fff"/>
          <text x="72" y="134" text-anchor="middle" font-size="51" font-weight="500" fill="#000">XBOX</text>
        </g>
      </g>
    </g>`;

  const companyLogo = `
    ${microsoftPaneLogo(0, 0, 61, 7)}
    <text x="160" y="103" font-family="Arial,sans-serif" font-size="104" font-weight="600" fill="#737373">Microsoft</text>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q2-fy23',
    name: 'Microsoft · Q2 FY23',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2315,
      periodX: 2395,
      periodY: 252,
      periodNoteY: 293,
      logoWidth: 680,
      logoHeight: 130,
      logoY: 276,
      logoViewBox: '0 0 680 130',
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
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 9.09,
      nodes: {
        productivity_business_processes: { x: 478, y: 489, width: 71, height: 152 },
        intelligent_cloud: { x: 478, y: 815, width: 71, height: 193 },
        more_personal_computing: { x: 478, y: 1175, width: 71, height: 128 },
        revenue: { x: 945, y: 606, width: 70, height: 479 },
        gross_profit: { x: 1407, y: 570, width: 71, height: 319 },
        cost_of_revenue: { x: 1409, y: 1013, width: 72, height: 157 },
        operating_profit: { x: 1880, y: 527, width: 70, height: 184 },
        operating_expenses: { x: 1882, y: 868, width: 70, height: 132 },
        net_profit: { x: 2346, y: 481, width: 71, height: 148 },
        tax: { x: 2346, y: 796, width: 71, height: 34 },
        other: { x: 2346, y: 919, width: 71, height: 1 },
        rnd: { x: 2346, y: 1054, width: 71, height: 60 },
        sm: { x: 2346, y: 1207, width: 71, height: 48 },
        ga: { x: 2346, y: 1357, width: 71, height: 19 },
      },
      labels: {
        productivity_business_processes: { blocks: [
          block(455, 396, 'start', [line('$value', 40, 400, NOTE), line('+7% Y/Y', 29, 400, NOTE)]),
          block(285, 557, 'middle', [line('Productivity &', 40, 800, NOTE), line('Business Processes', 40, 800, NOTE), line('48% operating margin', 29, 400, NOTE)]),
        ] },
        intelligent_cloud: { blocks: [
          block(455, 724, 'start', [line('$value', 40, 400, NOTE), line('+18% Y/Y', 29, 400, NOTE)]),
          block(292, 944, 'middle', [line('Intelligent Cloud', 40, 800, NOTE), line('41% operating margin', 29, 400, NOTE)]),
        ] },
        more_personal_computing: { blocks: [
          block(450, 1080, 'start', [line('$value', 40, 400, NOTE), line('(19%) Y/Y', 29, 400, NOTE)]),
          block(252, 1248, 'middle', [line('More Personal Computing', 31, 800, NOTE), line('23% operating margin', 29, 400, NOTE)]),
        ] },
        revenue: { blocks: [block(980, 466, 'middle', [line('Revenue', 40, 800, NOTE), line('$value', 40, 400, NOTE), line('+2% Y/Y', 29, 400, NOTE)])] },
        gross_profit: { blocks: [block(1443, 387, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('67% margin', 29, 400, NOTE), line('(10pp) Y/Y', 29, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1445, 1190, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 36)])] },
        operating_profit: { blocks: [block(1915, 344, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('39% margin', 29, 400, NOTE), line('(10pp) Y/Y', 29, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1917, 1022, 'middle', [line('Operating', 40, 800), line('Expenses', 40, 800), line('$value', 36)])] },
        net_profit: { blocks: [block(2468, 472, 'start', [line('Net profit', 40, 800), line('$value', 40), line('31% margin', 29, 400, NOTE), line('(10pp) Y/Y', 29, 400, NOTE)])] },
        tax: { blocks: [block(RIGHT_LABEL_X, 776, 'start', [line('Tax', 31, 800), line('$value', 29)])] },
        other: { blocks: [block(RIGHT_LABEL_X, 885, 'start', [line('Other', 31, 800), line('$value', 29)])] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 1036, 'start', [line('R&D', 31, 800), line('$value', 29)])] },
        sm: { blocks: [block(RIGHT_LABEL_X, 1190, 'start', [line('S&M', 31, 800), line('$value', 29)])] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1320, 'start', [line('G&A', 31, 800), line('$value', 29)])] },
      },
    },
    nodes: [
      { id: 'productivity_business_processes', col: 0, order: 0, type: 'source', label: ['Productivity &', 'Business Processes'], value: 17.0, valueText: '$17.0B', notes: ['48% operating margin'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'intelligent_cloud', col: 0, order: 1, type: 'source', label: 'Intelligent Cloud', value: 21.5, notes: ['41% operating margin'], color: GOLD, linkTint: GOLD_LINK },
      { id: 'more_personal_computing', col: 0, order: 2, type: 'source', label: 'More Personal Computing', value: 14.2, notes: ['23% operating margin'], color: GRAY_NODE, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 52.7, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 35.3, notes: ['67% margin', '(10pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 17.5 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 20.4, notes: ['39% margin', '(10pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 14.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 16.4, notes: ['31% margin', '(10pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 3.9 },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 6.8 },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 5.7 },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.3 },
    ],
    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 17.0, sourceWidth: 152, targetWidth: 154, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 21.5, sourceWidth: 193, targetWidth: 195, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 14.2, sourceWidth: 128, targetWidth: 130, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 35.3, sourceWidth: 321, targetWidth: 319, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 17.5, sourceWidth: 158, targetWidth: 157, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 20.4, sourceWidth: 184, targetWidth: 184, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.9, sourceWidth: 135, targetWidth: 132, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 16.4, sourceWidth: 148, targetWidth: 148, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3.9, sourceWidth: 35, targetWidth: 34, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 6.8, sourceWidth: 60, targetWidth: 60, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 5.7, sourceWidth: 52, targetWidth: 48, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.3, sourceWidth: 20, targetWidth: 19, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['Microsoft 365', 'Linked', 'in', 'XBOX'],
      zh: {
        name: 'Microsoft · 2023 财年第二季度',
        meta: {
          title: 'Microsoft 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2022 年 12 月',
          periodX: 2425,
        },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程', notes: ['营业利润率 48%'] },
          intelligent_cloud: { label: '智能云', notes: ['营业利润率 41%'] },
          more_personal_computing: { label: '更多个人计算', notes: ['营业利润率 23%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 67%', '同比 (10 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 39%', '同比 (10 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 (10 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
        layout: {
          labels: {
            net_profit: {
              blocks: [
                block(2425, 472, 'start', [
                  line('净利润', 40, 800),
                  line('$value', 40),
                  line('利润率 31%', 29, 400, NOTE),
                  line('同比 (10 个百分点)', 29, 400, NOTE),
                ]),
              ],
            },
          },
        },
      },
    },
  });
})();

/* Microsoft Q2 FY25 income statement by business unit ($B), measured from the claimed Source. */
(function () {
  const BLUE = '#01a6f0';
  const BLUE_LINK = '#85cff0';
  const GOLD = '#ffba01';
  const GOLD_LINK = '#f7d885';
  const GRAY = '#747474';
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
  const RIGHT_LABEL_X = 2482;

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
        <linearGradient id="ms-q2-fy25-bybu-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/><stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms-q2-fy25-bybu-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/><stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
        <linearGradient id="ms-q2-fy25-bybu-azure-cross" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f8cdc"/><stop offset="1" stop-color="#0761b5"/>
        </linearGradient>
      </defs>
      <g transform="translate(72 354)">
        ${microsoftPaneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-family="Arial,sans-serif" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="93" font-family="Arial,sans-serif" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="92" text-anchor="middle" font-family="Arial,sans-serif" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>
      <g transform="translate(237 658)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-q2-fy25-bybu-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms-q2-fy25-bybu-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="url(#ms-q2-fy25-bybu-azure-cross)"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(0.78)" fill="#0b78c4" opacity="0.82"/>
      </g>
      <g transform="translate(178 987)">
        <g transform="scale(0.68)" fill="#00a4ef">
          <path d="M0 14L83 2V56H0Z"/><path d="M88 1L170 -10V56H88Z"/>
          <path d="M0 61H83V115L0 103Z"/><path d="M88 61H170V127L88 116Z"/>
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
  const companyLogo = microsoftPaneLogo(0, 0, 86, 10);
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q2-fy25-by-bu',
    name: 'Microsoft · Q2 FY25 By BU',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q2-fy25-by-bu.png', width: 2667, height: 1500 },
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
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 5.49,
      nodes: {
        productivity_business_processes: { x: 483, y: 466, width: 71, height: 161 },
        intelligent_cloud: { x: 483, y: 804, width: 71, height: 138 },
        more_personal_computing: { x: 483, y: 1131, width: 71, height: 79 },
        revenue: { x: 950, y: 648, width: 70, height: 384 },
        gross_profit: { x: 1412, y: 542, width: 71, height: 264 },
        cost_of_revenue: { x: 1417, y: 1031, width: 71, height: 119 },
        operating_profit: { x: 1885, y: 451, width: 70, height: 174 },
        operating_expenses: { x: 1882, y: 822, width: 70, height: 88 },
        net_profit: { x: 2351, y: 359, width: 71, height: 132 },
        tax: { x: 2351, y: 683, width: 71, height: 28 },
        other_expense: { x: 2351, y: 810, width: 71, height: 10 },
        rnd: { x: 2351, y: 914, width: 71, height: 42 },
        sm: { x: 2351, y: 1097, width: 71, height: 34 },
        ga: { x: 2351, y: 1268, width: 71, height: 8 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            block(454, 373, 'start', [line('$value', 40, 400, NOTE), line('+14% Y/Y', 29, 400, NOTE)]),
            block(242, 485, 'middle', [line('Productivity &', 40, 800, NOTE), line('Business Processes', 40, 800, NOTE), line('57% operating margin', 29, 400, NOTE)]),
          ],
        },
        intelligent_cloud: {
          blocks: [
            block(454, 709, 'start', [line('$value', 40, 400, NOTE), line('+20% Y/Y', 29, 400, NOTE)]),
            block(287, 854, 'middle', [line('Intelligent Cloud', 40, 800, NOTE), line('42% operating margin', 29, 400, NOTE)]),
          ],
        },
        more_personal_computing: {
          blocks: [
            block(454, 1038, 'start', [line('$value', 40, 400, NOTE), line('+0% Y/Y', 29, 400, NOTE)]),
            block(293, 1121, 'middle', [line('More Personal', 40, 800, NOTE), line('Computing', 40, 800, NOTE), line('27% operating margin', 29, 400, NOTE)]),
          ],
        },
        revenue: { blocks: [block(985, 496, 'middle', [line('Revenue', 40, 800, NOTE), line('$value', 40, 400, NOTE), line('+12% Y/Y', 29, 400, NOTE)], 12)] },
        gross_profit: { blocks: [block(1448, 358, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('69% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1452, 1162, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 36)])] },
        operating_profit: { blocks: [block(1920, 267, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('45% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1917, 921, 'middle', [line('Operating', 40, 800), line('Expenses', 40, 800), line('$value', 36)])] },
        net_profit: { blocks: [block(2437, 362, 'start', [line('Net profit', 40, 800), line('$value', 40), line('35% margin', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)])] },
        tax: { blocks: [block(RIGHT_LABEL_X, 655, 'start', [line('Tax', 31, 800), line('$value', 29)])] },
        other_expense: { blocks: [block(RIGHT_LABEL_X, 769, 'start', [line('Other', 31, 800), line('$value', 29)])] },
        rnd: { blocks: [block(2449, 899, 'start', [line('R&D', 31, 800), line('$value', 29), line('11% of revenue', 25, 400, NOTE), line('(0pp) Y/Y', 25, 400, NOTE)])] },
        sm: { blocks: [block(2455, 1069, 'start', [line('S&M', 31, 800), line('$value', 29), line('9% of revenue', 25, 400, NOTE), line('(1pp) Y/Y', 25, 400, NOTE)])] },
        ga: { blocks: [block(2455, 1242, 'start', [line('G&A', 31, 800), line('$value', 29), line('3% of revenue', 25, 400, NOTE), line('(1pp) Y/Y', 25, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'productivity_business_processes', col: 0, order: 0, type: 'source', label: ['Productivity &', 'Business Processes'], value: 29.4, notes: ['57% operating margin'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'intelligent_cloud', col: 0, order: 1, type: 'source', label: 'Intelligent Cloud', value: 25.5, notes: ['42% operating margin'], color: GOLD, linkTint: GOLD_LINK },
      { id: 'more_personal_computing', col: 0, order: 2, type: 'source', label: ['More Personal', 'Computing'], value: 14.7, notes: ['27% operating margin'], color: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 69.6, notes: ['+12% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 47.8, notes: ['69% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 21.8, valueText: '($21.8B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 31.7, notes: ['45% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 16.2, valueText: '($16.2B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 24.1, notes: ['35% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.3, valueText: '($5.3B)' },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 2.2, valueText: '($2.2B)' },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.9, valueText: '($7.9B)', notes: ['11% of revenue', '(0pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 6.4, valueText: '($6.4B)', notes: ['9% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 1.8, valueText: '($1.8B)', notes: ['3% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 29.4, sourceWidth: 161, targetWidth: 162, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 25.5, sourceWidth: 138, targetWidth: 141, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 14.7, sourceWidth: 79, targetWidth: 81, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 47.8, sourceWidth: 264, targetWidth: 264, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 21.8, sourceWidth: 120, targetWidth: 119, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 31.7, sourceWidth: 175, targetWidth: 174, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 16.2, sourceWidth: 89, targetWidth: 88, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 24.1, sourceWidth: 132, targetWidth: 132, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.3, sourceWidth: 29, targetWidth: 28, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 2.2, sourceWidth: 13, targetWidth: 10, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 7.9, sourceWidth: 43, targetWidth: 42, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.4, sourceWidth: 35, targetWidth: 34, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.8, sourceWidth: 10, targetWidth: 8, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['Microsoft 365', 'Linked', 'in', 'XBOX'],
      zh: {
        name: 'Microsoft · 2025 财年第二季度（按业务单元）',
        meta: {
          title: 'Microsoft 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2024 年 12 月',
          periodX: 2504,
        },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程' },
          intelligent_cloud: { label: '智能云' },
          more_personal_computing: { label: '更多个人计算' },
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

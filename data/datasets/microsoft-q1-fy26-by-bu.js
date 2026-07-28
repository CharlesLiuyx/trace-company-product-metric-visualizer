/* Microsoft Q1 FY26 income statement by business unit ($B). */
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
  const ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const microsoftPaneLogo = (x, y, size, gap = 7) => `
    <g transform="translate(${x} ${y})">
      <rect width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" width="${size}" height="${size}" fill="#7fba00"/>
      <rect y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;
  const annotations = `
    <g data-typography-role="brand" font-family="Arial,sans-serif">
      <defs>
        <linearGradient id="ms-q1-bybu-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/><stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms-q1-bybu-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/><stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
        <linearGradient id="ms-q1-bybu-azure-cross" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f8cdc"/><stop offset="1" stop-color="#0761b5"/>
        </linearGradient>
      </defs>
      <g transform="translate(72 312)">
        ${microsoftPaneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="93" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="92" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>
      <g transform="translate(237 658)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-q1-bybu-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms-q1-bybu-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="url(#ms-q1-bybu-azure-cross)"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(0.78)" fill="#0b78c4" opacity="0.82"/>
      </g>
      <g transform="translate(178 1040)">
        <g transform="scale(0.68)" fill="#00a4ef">
          <path d="M0 14L83 2V56H0Z"/><path d="M88 1L170 -10V56H88Z"/>
          <path d="M0 61H83V115L0 103Z"/><path d="M88 61H170V127L88 116Z"/>
        </g>
        <g transform="translate(132 -4) scale(0.88)">
          <circle cx="53" cy="48" r="40" fill="#000000"/>
          <path d="M22 25C42 37 64 37 84 25C73 10 34 10 22 25Z" fill="#ffffff"/>
          <path d="M20 28C32 44 40 55 48 86C29 79 14 64 13 47C12 39 15 33 20 28Z" fill="#ffffff"/>
          <path d="M86 28C74 44 66 55 58 86C77 79 92 64 93 47C94 39 91 33 86 28Z" fill="#ffffff"/>
          <text x="53" y="134" text-anchor="middle" font-size="51" font-weight="500">XBOX</text>
        </g>
      </g>
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q1-fy26-by-bu',
    name: 'Microsoft · Q1 FY26 By BU',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q1-fy26-by-bu.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2315,
      periodX: 2528,
      periodY: 255,
      periodNoteY: 297,
      logoWidth: 196,
      logoHeight: 196,
      logoY: 260,
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 4.93,
      nodes: {
        productivity_business_processes: { x: 474, y: 423, width: 71, height: 161 },
        intelligent_cloud: { x: 474, y: 821, width: 71, height: 150 },
        more_personal_computing: { x: 474, y: 1180, width: 71, height: 65 },
        revenue: { x: 941, y: 649, width: 70, height: 383 },
        gross_profit: { x: 1408, y: 552, width: 71, height: 264 },
        cost_of_revenue: { x: 1408, y: 1031, width: 71, height: 116 },
        operating_profit: { x: 1876, y: 437, width: 70, height: 186 },
        operating_expenses: { x: 1876, y: 837, width: 70, height: 75 },
        net_profit: { x: 2342, y: 330, width: 71, height: 136 },
        tax: { x: 2342, y: 611, width: 71, height: 30 },
        other: { x: 2342, y: 747, width: 71, height: 16 },
        rnd: { x: 2342, y: 898, width: 71, height: 38 },
        sm: { x: 2342, y: 1090, width: 71, height: 26 },
        ga: { x: 2342, y: 1270, width: 71, height: 7 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            block(454, 326, 'start', [line('$value', 40, 400, NOTE), line('+17% Y/Y', 29, 400, NOTE)]),
            block(242, 444, 'middle', [line('Productivity &', 40, 800, NOTE), line('Business Processes', 40, 800, NOTE), line('62% operating margin', 29, 400, NOTE), line('+3pp Y/Y', 29, 400, NOTE)]),
          ],
        },
        intelligent_cloud: {
          blocks: [
            block(454, 714, 'start', [line('$value', 40, 400, NOTE), line('+28% Y/Y', 29, 400, NOTE)]),
            block(287, 837, 'middle', [line('Intelligent Cloud', 40, 800, NOTE), line('43% operating margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)]),
          ],
        },
        more_personal_computing: {
          blocks: [
            block(454, 1077, 'start', [line('$value', 40, 400, NOTE), line('+4% Y/Y', 29, 400, NOTE)]),
            block(293, 1155, 'middle', [line('More Personal', 40, 800, NOTE), line('Computing', 40, 800, NOTE), line('30% operating margin', 29, 400, NOTE), line('+3pp Y/Y', 29, 400, NOTE)]),
          ],
        },
        revenue: { blocks: [block(976, 479, 'middle', [line('Revenue', 40, 800, NOTE), line('$value', 40, 400, NOTE), line('+18% Y/Y', 29, 400, NOTE)], 12)] },
        gross_profit: { blocks: [block(1444, 337, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('69% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1444, 1168, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 36)])] },
        operating_profit: { blocks: [block(1912, 236, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('49% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1912, 930, 'middle', [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 36)])] },
        net_profit: { blocks: [block(2432, 344, 'start', [line('Net profit', 40, 800), line('$value', 40), line('36% margin', 29, 400, NOTE), line('(2pp) Y/Y', 29, 400, NOTE)])] },
        tax: { blocks: [block(RIGHT_LABEL_X, 586, 'start', [line('Tax', 31, 800), line('$value', 29)])] },
        other: { blocks: [block(RIGHT_LABEL_X, 710, 'start', [line('Other', 31, 800), line('$value', 29)])] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 880, 'start', [line('R&D', 31, 800), line('$value', 29), line('10% of revenue', 25, 400, NOTE), line('(1pp) Y/Y', 25, 400, NOTE)])] },
        sm: { blocks: [block(RIGHT_LABEL_X, 1060, 'start', [line('S&M', 31, 800), line('$value', 29), line('7% of revenue', 25, 400, NOTE), line('(1pp) Y/Y', 25, 400, NOTE)])] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1240, 'start', [line('G&A', 31, 800), line('$value', 29), line('2% of revenue', 25, 400, NOTE), line('(0pp) Y/Y', 25, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'productivity_business_processes', col: 0, order: 0, type: 'source', label: ['Productivity &', 'Business Processes'], value: 33.0, valueText: '$33.0B', notes: ['62% operating margin', '+3pp Y/Y'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'intelligent_cloud', col: 0, order: 1, type: 'source', label: 'Intelligent Cloud', value: 30.9, notes: ['43% operating margin', '(0pp) Y/Y'], color: GOLD, linkTint: GOLD_LINK },
      { id: 'more_personal_computing', col: 0, order: 2, type: 'source', label: ['More Personal', 'Computing'], value: 13.8, notes: ['30% operating margin', '+3pp Y/Y'], color: GRAY, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 77.7, notes: ['+18% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 53.6, notes: ['69% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 24.0, valueText: '($24.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 38.0, valueText: '$38.0B', notes: ['49% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 15.7, valueText: '($15.7B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 27.7, notes: ['36% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6.6 },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 3.7 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 8.1, notes: ['10% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 5.7, notes: ['7% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 1.8, notes: ['2% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 33.0, sourceWidth: 161, targetWidth: 163, y0: 503.5, y1: 730.5, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 30.9, sourceWidth: 150, targetWidth: 153, y0: 896, y1: 888.5, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 13.8, sourceWidth: 65, targetWidth: 67, y0: 1212.5, y1: 998.5, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 53.6, sourceWidth: 264, targetWidth: 264, y0: 781, y1: 684, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 24.0, sourceWidth: 119, targetWidth: 116, y0: 972.5, y1: 1089, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 38.0, sourceWidth: 186, targetWidth: 186, y0: 645, y1: 530, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.7, sourceWidth: 77, targetWidth: 75, y0: 777.5, y1: 874.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 27.7, sourceWidth: 135, targetWidth: 136, y0: 504.5, y1: 398, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 6.6, sourceWidth: 31, targetWidth: 30, y0: 588.5, y1: 626, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 3.7, sourceWidth: 19, targetWidth: 16, y0: 613.5, y1: 755, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 8.1, sourceWidth: 38, targetWidth: 38, y0: 856, y1: 917, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 5.7, sourceWidth: 27, targetWidth: 26, y0: 888.5, y1: 1103, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.8, sourceWidth: 10, targetWidth: 7, y0: 907, y1: 1273.5, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['Microsoft 365', 'Linked', 'in'],
      zh: {
        name: 'Microsoft · 2026 财年第一季度（按业务单元）',
        meta: {
          title: 'Microsoft 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 9 月',
          periodX: 2495,
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
          other: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '管理费用' },
        },
        layout: {
          labels: {
            rnd: { blocks: [block(2445, 880, 'start', [line('研发', 31, 800), line('$value', 29), line('占收入 10%', 25, 400, NOTE), line('同比 (1 个百分点)', 25, 400, NOTE)])] },
            sm: { blocks: [block(2445, 1060, 'start', [line('销售与市场', 31, 800), line('$value', 29), line('占收入 7%', 25, 400, NOTE), line('同比 (1 个百分点)', 25, 400, NOTE)])] },
            ga: { blocks: [block(2445, 1240, 'start', [line('管理费用', 31, 800), line('$value', 29), line('占收入 2%', 25, 400, NOTE), line('同比 (0 个百分点)', 25, 400, NOTE)])] },
          },
        },
      },
    },
  });
})();

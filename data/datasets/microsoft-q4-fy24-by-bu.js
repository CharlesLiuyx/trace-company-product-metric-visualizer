/* Microsoft Q4 FY24 income statement by business unit ($B). */
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

  const microsoftPaneLogo = (x, y, size, gap = 7) => `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" y="0" width="${size}" height="${size}" fill="#7fba00"/>
      <rect x="0" y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10, semanticRole) => ({
    x, top, anchor, lines, lineGap, ...(semanticRole ? { semanticRole } : {}),
  });

  const annotations = `
    <g font-family="Arial,sans-serif" data-typography-role="brand">
      <defs>
        <linearGradient id="ms-q4-fy24-bybu-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/><stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms-q4-fy24-bybu-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/><stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
        <linearGradient id="ms-q4-fy24-bybu-azure-cross" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f8cdc"/><stop offset="1" stop-color="#0761b5"/>
        </linearGradient>
      </defs>
      <g transform="translate(72 405)">
        ${microsoftPaneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-size="44" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="93" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="92" text-anchor="middle" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>
      <g transform="translate(237 736)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-q4-fy24-bybu-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms-q4-fy24-bybu-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="url(#ms-q4-fy24-bybu-azure-cross)"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(0.78)" fill="#0b78c4" opacity="0.82"/>
      </g>
      <g transform="translate(178 1066)">
        <g transform="scale(0.68)" fill="#00a4ef">
          <path d="M0 14L83 2V56H0Z"/><path d="M88 1L170 -10V56H88Z"/>
          <path d="M0 61H83V115L0 103Z"/><path d="M88 61H170V127L88 116Z"/>
        </g>
        <g transform="translate(132 -4) scale(0.88)">
          <circle cx="53" cy="48" r="40" fill="#000000"/>
          <path d="M22 25C42 37 64 37 84 25C73 10 34 10 22 25Z" fill="#ffffff"/>
          <path d="M20 28C32 44 40 55 48 86C29 79 14 64 13 47C12 39 15 33 20 28Z" fill="#ffffff"/>
          <path d="M86 28C74 44 66 55 58 86C77 79 92 64 93 47C94 39 91 33 86 28Z" fill="#ffffff"/>
          <text x="53" y="134" text-anchor="middle" font-size="51" font-weight="500" fill="#000000">XBOX</text>
        </g>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q4-fy24-by-bu',
    name: 'Microsoft · Q4 FY24 ByBU',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q4-fy24-by-bu.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 199, titleSize: 122, titleWeight: 800, titleTextLength: 2315,
      periodX: 2528, periodY: 260, periodNoteY: 302,
      logoWidth: 196, logoHeight: 196, logoY: 260, logoViewBox: '0 0 182 182',
      logoSvg: microsoftPaneLogo(0, 0, 86, 10),
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
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
      scale: 5.84,
      nodes: {
        productivity_business_processes: { x: 482, y: 500, width: 71, height: 118 },
        intelligent_cloud: { x: 482, y: 808, width: 71, height: 166 },
        more_personal_computing: { x: 482, y: 1162, width: 71, height: 91 },
        revenue: { x: 949, y: 677, width: 70, height: 379 },
        gross_profit: { x: 1426, y: 583, width: 71, height: 263 },
        cost_of_revenue: { x: 1416, y: 1062, width: 71, height: 114 },
        operating_profit: { x: 1886, y: 492, width: 70, height: 161 },
        operating_expenses: { x: 1886, y: 851, width: 70, height: 98 },
        net_profit: { x: 2350, y: 391, width: 71, height: 128 },
        tax: { x: 2350, y: 708, width: 71, height: 27 },
        other: { x: 2350, y: 849, width: 71, height: 2 },
        rnd: { x: 2350, y: 939, width: 71, height: 45 },
        sm: { x: 2350, y: 1112, width: 71, height: 39 },
        ga: { x: 2350, y: 1285, width: 71, height: 11 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            block(512, 410, 'middle', [line('$value', 40, 400, NOTE), line('+11% Y/Y', 29, 400, NOTE)], 9),
            block(283, 527, 'middle', [line('Productivity &', 29, 800, NOTE), line('Business Processes', 29, 800, NOTE), line('50% operating margin', 29, 400, NOTE)], 10),
          ],
        },
        intelligent_cloud: {
          blocks: [
            block(512, 718, 'middle', [line('$value', 40, 400, NOTE), line('+19% Y/Y', 29, 400, NOTE)], 9),
            block(287, 904, 'middle', [line('Intelligent Cloud', 29, 800, NOTE), line('45% operating margin', 29, 400, NOTE)], 10),
          ],
        },
        more_personal_computing: {
          blocks: [
            block(512, 1069, 'middle', [line('$value', 40, 400, NOTE), line('+14% Y/Y', 29, 400, NOTE)], 9),
            block(240, 1202, 'middle', [line('More Personal Computing', 31, 800, NOTE)], 10, 'source-offset-label'),
            block(293, 1248, 'middle', [line('31% operating margin', 29, 400, NOTE)]),
          ],
        },
        revenue: { blocks: [block(984, 528, 'middle', [line('Revenue', 40, 800, NOTE), line('$value', 40, 400, NOTE), line('+15% Y/Y', 29, 400, NOTE)])] },
        gross_profit: { blocks: [block(1461, 398, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('70% margin', 29, 400, NOTE), line('(1pp) Y/Y', 29, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1452, 1196, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 36)])] },
        operating_profit: { blocks: [block(1921, 310, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('43% margin', 29, 400, NOTE), line('(0pp) Y/Y', 29, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1921, 974, 'middle', [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 36)])] },
        net_profit: { blocks: [block(2437, 394, 'start', [line('Net profit', 40, 800), line('$value', 40), line('34% margin', 29, 400, NOTE), line('(2pp) Y/Y', 29, 400, NOTE)])] },
        tax: { blocks: [block(2530, 692, 'middle', [line('Tax', 31, 800), line('$value', 29)])] },
        other: { blocks: [block(2530, 806, 'middle', [line('Other', 31, 800), line('$value', 29)])] },
        rnd: { blocks: [block(2530, 927, 'middle', [line('R&D', 31, 800), line('$value', 29), line('12% of revenue', 25, 400, NOTE), line('+1pp Y/Y', 25, 400, NOTE)])] },
        sm: { blocks: [block(2530, 1092, 'middle', [line('S&M', 31, 800), line('$value', 29), line('11% of revenue', 25, 400, NOTE), line('(1pp) Y/Y', 25, 400, NOTE)])] },
        ga: { blocks: [block(2530, 1254, 'middle', [line('G&A', 31, 800), line('$value', 29), line('3% of revenue', 25, 400, NOTE), line('(0pp) Y/Y', 25, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'productivity_business_processes', col: 0, order: 0, type: 'source', label: ['Productivity &', 'Business Processes'], value: 20.3, notes: ['50% operating margin'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'intelligent_cloud', col: 0, order: 1, type: 'source', label: 'Intelligent Cloud', value: 28.5, notes: ['45% operating margin'], color: GOLD, linkTint: GOLD_LINK },
      { id: 'more_personal_computing', col: 0, order: 2, type: 'source', label: 'More Personal Computing', value: 15.9, notes: ['31% operating margin'], color: GRAY_NODE, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 64.7, notes: ['+15% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 45.0, valueText: '$45.0B', notes: ['70% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.7, valueText: '($19.7B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 27.9, notes: ['43% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.1, valueText: '($17.1B)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 22.0, valueText: '$22.0B', notes: ['34% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 5.2 },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.7 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 8.1, notes: ['12% of revenue', '+1pp Y/Y'] },
      { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 6.8, notes: ['11% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 2.2, notes: ['3% of revenue', '(0pp) Y/Y'] },
    ],
    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 20.3, width: 118, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 28.5, width: 166, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 15.9, sourceWidth: 91, targetWidth: 95, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 45.0, width: 263, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 19.7, sourceWidth: 116, targetWidth: 114, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 27.9, width: 161, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.1, sourceWidth: 102, targetWidth: 98, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 22.0, width: 128, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.2, width: 27, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.7, sourceWidth: 6, targetWidth: 2, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 8.1, width: 45, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.8, width: 39, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.2, sourceWidth: 14, targetWidth: 11, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['Linked', 'in'],
      zh: {
        name: 'Microsoft · 2024 财年第四季度（按业务部门）',
        meta: { title: 'Microsoft 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 6 月', periodX: 2504 },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程', notes: ['营业利润率 50%'] },
          intelligent_cloud: { label: '智能云', notes: ['营业利润率 45%'] },
          more_personal_computing: { label: '更多个人计算', notes: ['营业利润率 31%'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 70%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 34%', '同比 (2 个百分点)'] },
          tax: { label: '税费' }, other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 +1 个百分点'] },
          sm: { label: '销售与市场', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
      },
    },
  });
})();

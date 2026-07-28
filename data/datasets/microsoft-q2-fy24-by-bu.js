/* Microsoft Q2 FY24 income statement by business unit ($B). */
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
  const RIGHT_LABEL_X = 2529;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const paneLogo = (x, y, size, gap = 4) => `
    <g transform="translate(${x} ${y})">
      <rect width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" width="${size}" height="${size}" fill="#7fba00"/>
      <rect y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;
  const icon = (name, x, y, scale = 1) =>
    `<g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;
  const annotations = `
    <g data-typography-role="brand">
      <g transform="translate(70 369)">
        ${paneLogo(0, 0, 27)}
        <text x="70" y="37" font-family="Arial,sans-serif" font-size="48" font-weight="700" fill="#747474">Microsoft 365</text>
        <text x="148" y="91" font-family="Arial,sans-serif" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="54" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="91" text-anchor="middle" font-family="Arial,sans-serif" font-size="44" font-weight="800" fill="#fff">in</text>
      </g>
      ${icon('microsoftAzure', 237, 737, 0.78)}
      ${icon('microsoftWindows', 180, 1114, 0.68)}
      ${icon('microsoftXbox', 310, 1073, 0.88)}
    </g>`;
  const companyLogo = paneLogo(0, 0, 86, 10);
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 10) => ({ x, top, anchor, lines, lineGap });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q2-fy24-by-bu',
    name: 'Microsoft · Q2 FY24 ByBU',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q2-fy24-by-bu.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2320,
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
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 6.87,
      nodes: {
        productivity_business_processes: { x: 482, y: 469, width: 71, height: 131 },
        intelligent_cloud: { x: 482, y: 802, width: 71, height: 176 },
        more_personal_computing: { x: 482, y: 1169, width: 71, height: 116 },
        revenue: { x: 952, y: 662, width: 70, height: 426 },
        gross_profit: { x: 1413, y: 582, width: 72, height: 291 },
        cost_of_revenue: { x: 1418, y: 1039, width: 72, height: 134 },
        operating_profit: { x: 1886, y: 485, width: 70, height: 184 },
        operating_expenses: { x: 1884, y: 881, width: 70, height: 103 },
        net_profit: { x: 2350, y: 398, width: 71, height: 150 },
        tax: { x: 2350, y: 690, width: 71, height: 30 },
        other: { x: 2350, y: 833, width: 71, height: 1 },
        rnd: { x: 2350, y: 957, width: 71, height: 47 },
        sm: { x: 2350, y: 1104, width: 71, height: 42 },
        ga: { x: 2350, y: 1256, width: 71, height: 11 },
      },
      labels: {
        productivity_business_processes: { blocks: [block(514, 379, 'middle', [line('$value', 40, 400, NOTE), line('+13% Y/Y', 28, 400, NOTE)], 9), block(283, 497, 'middle', [line('Productivity &', 32, 800, NOTE), line('Business Processes', 32, 800, NOTE), line('53% operating margin', 28, 400, NOTE)], 7)] },
        intelligent_cloud: { blocks: [block(513, 712, 'middle', [line('$value', 40, 400, NOTE), line('+20% Y/Y', 28, 400, NOTE)], 9), block(286, 901, 'middle', [line('Intelligent Cloud', 32, 800, NOTE), line('48% operating margin', 30, 400, NOTE)], 10)] },
        more_personal_computing: { blocks: [block(515, 1080, 'middle', [line('$value', 40, 400, NOTE), line('+19% Y/Y', 28, 400, NOTE)], 9), block(240, 1208, 'middle', [line('More Personal Computing', 31, 800, NOTE), line('25% operating margin', 28, 400, NOTE)], 10)] },
        revenue: { blocks: [block(989, 512, 'middle', [line('Revenue', 42, 800, NOTE), line('$value', 40, 400, NOTE), line('+18% Y/Y', 28, 400, NOTE)])] },
        gross_profit: { blocks: [block(1450, 400, 'middle', [line('Gross profit', 40, 800), line('$value', 40), line('68% margin', 28, 400, NOTE), line('+2pp Y/Y', 28, 400, NOTE)])] },
        cost_of_revenue: { blocks: [block(1452, 1189, 'middle', [line('Cost of', 40, 800), line('revenue', 40, 800), line('$value', 38)], 4)] },
        operating_profit: { blocks: [block(1917, 304, 'middle', [line('Operating profit', 40, 800), line('$value', 40), line('44% margin', 28, 400, NOTE), line('+5pp Y/Y', 28, 400, NOTE)])] },
        operating_expenses: { blocks: [block(1916, 1008, 'middle', [line('Operating', 40, 800), line('Expenses', 40, 800), line('$value', 38)], 4)] },
        net_profit: { blocks: [block(2439, 387, 'start', [line('Net profit', 40, 800), line('$value', 40), line('35% margin', 28, 400, NOTE), line('+4pp Y/Y', 28, 400, NOTE)])] },
        tax: { blocks: [block(RIGHT_LABEL_X, 661, 'middle', [line('Tax', 30, 800), line('$value', 30)])] },
        other: { blocks: [block(RIGHT_LABEL_X, 789, 'middle', [line('Other', 30, 800), line('$value', 30)])] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 946, 'middle', [line('R&D', 30, 800), line('$value', 30), line('12% of revenue', 28, 400, NOTE)])] },
        sm: { blocks: [block(RIGHT_LABEL_X, 1092, 'middle', [line('S&M', 30, 800), line('$value', 30), line('10% of revenue', 28, 400, NOTE)])] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1237, 'middle', [line('G&A', 30, 800), line('$value', 30), line('3% of revenue', 28, 400, NOTE)])] },
      },
    },
    nodes: [
      { id: 'productivity_business_processes', col: 0, order: 0, type: 'source', label: ['Productivity &', 'Business Processes'], value: 19.2, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'intelligent_cloud', col: 0, order: 1, type: 'source', label: 'Intelligent Cloud', value: 25.9, color: GOLD, labelColor: NOTE, linkTint: GOLD_LINK },
      { id: 'more_personal_computing', col: 0, order: 2, type: 'source', label: 'More Personal Computing', value: 16.9, color: GRAY_NODE, labelColor: NOTE, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 62.0, valueText: '$62.0B', color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 42.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 27.0, valueText: '$27.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 15.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 21.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 4.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 6.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 19.2, sourceWidth: 131, targetWidth: 132, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 25.9, sourceWidth: 176, targetWidth: 178, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 16.9, sourceWidth: 116, targetWidth: 116, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 42.4, sourceWidth: 291, targetWidth: 291, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 19.6, sourceWidth: 134, targetWidth: 134, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 27.0, sourceWidth: 184, targetWidth: 184, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 15.4, sourceWidth: 107, targetWidth: 103, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 21.9, sourceWidth: 149, targetWidth: 150, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.7, sourceWidth: 32, targetWidth: 30, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.5, sourceWidth: 3, targetWidth: 1, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 7.1, sourceWidth: 48, targetWidth: 47, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.2, sourceWidth: 42, targetWidth: 42, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.0, sourceWidth: 13, targetWidth: 11, sourceOrder: 2 },
    ],
    i18n: {
      preservedAnnotationText: ['Linked', 'in'],
      zh: {
        name: 'Microsoft · 2024 财年第二季度（业务部门）',
        meta: { title: 'Microsoft 2024 财年第二季度利润表', period: 'FY24 第二季度', periodNote: '截至 2023 年 12 月' },
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
      },
    },
  });
})();

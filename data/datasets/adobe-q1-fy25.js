/* Adobe - Q1 FY25 income statement ($B), measured from the native 2667x1500 Source. */
(function () {
  'use strict';

  const DARK = '#3d3d3d';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GREY_LINK = '#a0a0a0';
  const ADOBE_RED = '#fa0f00';
  const RIGHT_LABEL_X = 2475;

  const adobeFlagMark = `
    <path d="M0,0 L58,0 L0,140 Z" fill="${ADOBE_RED}"/>
    <path d="M102,0 L159,0 L159,137 Z" fill="${ADOBE_RED}"/>
    <path d="M80,50 L93,139 L116,139 Z" fill="${ADOBE_RED}"/>`;
  const adobeLogo = `
    ${adobeFlagMark}
    <text x="214" y="113" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800"
      fill="${ADOBE_RED}" textLength="331" lengthAdjust="spacingAndGlyphs">Adobe</text>`;

  const appIconRect = (size, fill) => `<rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${fill}"/>`;
  const creativeCloudIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      <defs><linearGradient id="adobeCcGradientFy25" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fe0e8e"/><stop offset="35%" stop-color="#fb4300"/>
        <stop offset="65%" stop-color="#f6c500"/><stop offset="100%" stop-color="#55e04d"/>
      </linearGradient></defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeCcGradientFy25)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.4}" r="${size * 0.19}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
    </g>`;
  const acrobatIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.34},${size * 0.72} C${size * 0.2},${size * 0.62} ${size * 0.22},${size * 0.4} ${size * 0.38},${size * 0.4}
        C${size * 0.5},${size * 0.4} ${size * 0.5},${size * 0.55} ${size * 0.4},${size * 0.6}
        C${size * 0.55},${size * 0.66} ${size * 0.62},${size * 0.5} ${size * 0.72},${size * 0.28}"
        fill="none" stroke="#fff" stroke-width="${size * 0.075}" stroke-linecap="round"/>
    </g>`;
  const adobeAIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.5},${size * 0.21} L${size * 0.8},${size * 0.765} L${size * 0.66},${size * 0.765}
        L${size * 0.5},${size * 0.44} L${size * 0.34},${size * 0.765} L${size * 0.2},${size * 0.765} Z" fill="#fff"/>
    </g>`;
  const kpiCard = (x, width, header, value, note) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="1124" width="${width}" height="164" rx="30" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1175" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1218" text-anchor="middle" font-size="30" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1260" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${note}</text>
    </g>`;
  const otherGuide = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other_income"
      font-family="Noto Sans,Arial,sans-serif">
      <path d="M2144 519H2212C2235 519 2238 455 2270 455" fill="none" stroke="${GREEN_LINK}" stroke-width="2"/>
      <text x="2184" y="559" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他收益' : 'Other'}</text>
      <text x="2184" y="600" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$19M</text>
    </g>`;
  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${creativeCloudIcon(105, 452)}${acrobatIcon(229, 452)}${adobeAIcon(164, 732)}
      ${kpiCard(34, 378, zh ? '数字媒体 ARR' : 'Digital Media ARR', '$17.6B', zh ? '同比 +13%' : '+13% Y/Y')}
      ${kpiCard(421, 240, 'RPO', '$19.7B', zh ? '同比 +12%' : '+12% Y/Y')}
      <text x="78" y="1322" font-size="27" fill="${NOTE}">ARR = ${zh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>
      <text x="78" y="1364" font-size="27" fill="${NOTE}">RPO = ${zh ? '剩余履约义务' : 'Remaining Performance Obligation'}</text>
      <text x="915" y="1364" font-size="27" fill="${NOTE}">${zh ? '* 2024 财年第一季度受 Figma 收购终止费（$1.0B）影响' : '* Q1 FY24 impacted by Figma Acquisition Termination Fee ($1.0B)'}</text>
      ${otherGuide(zh)}
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8, semanticRole) => ({
    x, top, anchor, lineGap, ...(semanticRole ? { semanticRole } : {}), lines,
  });
  const labels = (zh) => ({
    digital_media: { blocks: [
      block(442, 328, 'middle', [line('$value', 39), line(zh ? '同比 +11%' : '+11% Y/Y', 29, 400, NOTE)]),
      block(228, 584, 'middle', [line(zh ? '数字媒体' : 'Digital Media', 38, 800), line(zh ? '毛利率 95%' : '95% gross margin', 29, 400, NOTE)]),
    ] },
    digital_experience: { blocks: [
      block(433, 750, 'middle', [line('$value', 39), line(zh ? '同比 +10%' : '+10% Y/Y', 29, 400, NOTE)]),
      block(205, 869, 'middle', [line(zh ? '数字体验' : 'Digital Experience', 36, 800), line(zh ? '毛利率 72%' : '72% gross margin', 29, 400, NOTE)]),
    ] },
    publishing_advertising: { blocks: [
      block(434, 1026, 'middle', [line('$value', 38)]),
      block(215, 1009, 'middle', [line(zh ? '出版' : 'Publishing', 35, 800), line(zh ? '与广告' : '& Advertising', 35, 800)], 7, 'reference-offset-side-label'),
    ] },
    revenue: { blocks: [block(906, 464, 'middle', [line(zh ? '收入' : 'Revenue', 40, 800), line('$value', 39), line(zh ? '同比 +10%' : '+10% Y/Y', 29, 400, NOTE)])] },
    gross_profit: { blocks: [block(1379, 348, 'middle', [line(zh ? '毛利润' : 'Gross profit', 40, 800), line('$value', 39), line(zh ? '利润率 89%' : '89% margin', 29, 400, NOTE), line(zh ? '同比 +1 个百分点' : '+1pp Y/Y', 29, 400, NOTE)])] },
    cost_of_revenue: { blocks: [block(1368, 1108, 'middle', [line(zh ? '收入' : 'Cost of', 36, 800), line(zh ? '成本' : 'revenue', 36, 800), line('$value', 34)], 7)] },
    operating_profit: { blocks: [block(1845, 257, 'middle', [line(zh ? '营业利润' : 'Operating profit', 40, 800), line('$value', 39), line(zh ? '利润率 38%' : '38% margin', 29, 400, NOTE), line(zh ? '同比 +20 个百分点*' : '+20pp Y/Y*', 29, 400, NOTE)])] },
    operating_expenses: { blocks: [block(1837, 964, 'middle', [line(zh ? '营业' : 'Operating', 38, 800), line(zh ? '费用' : 'expenses', 38, 800), line('$value', 35)], 7)] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 349, 'middle', [line(zh ? '净利润' : 'Net profit', 39, 800), line('$value', 38), line(zh ? '利润率 32%' : '32% margin', 28, 400, NOTE), line(zh ? '同比 +20 个百分点*' : '+20pp Y/Y*', 28, 400, NOTE)])] },
    tax: { blocks: [block(RIGHT_LABEL_X, 636, 'middle', [line(zh ? '税费' : 'Tax', 31, 800), line('$value', 30)], 7)] },
    sm: { blocks: [block(RIGHT_LABEL_X, 815, 'middle', [line(zh ? '销售与市场' : 'S&M', 31, 800), line('$value', 30), line(zh ? '占收入 26%' : '26% of revenue', 28, 400, NOTE), line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 28, 400, NOTE)], 7)] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 984, 'middle', [line(zh ? '研发' : 'R&D', 31, 800), line('$value', 30), line(zh ? '占收入 18%' : '18% of revenue', 28, 400, NOTE), line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 28, 400, NOTE)], 7)] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1152, 'middle', [line(zh ? '一般及行政' : 'G&A', 31, 800), line('$value', 30), line(zh ? '占收入 6%' : '6% of revenue', 28, 400, NOTE), line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', 28, 400, NOTE)], 7)] },
    amortization: { blocks: [block(RIGHT_LABEL_X, 1307, 'middle', [line(zh ? '摊销' : 'Amortization', 29, 800), line('$value', 29)], 7)] },
    other_income: { blocks: [] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q1-fy25', name: 'Adobe · Q1 FY25', company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q1 FY25 Income Statement', period: 'Q1 FY25', periodNote: 'Ending Feb. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q1-fy25.png', width: 2667, height: 1500 },
      titleY: 204, titleSize: 128, titleTextLength: 2118,
      periodX: 2536, periodY: 276, periodNoteY: 318,
      logoWidth: 628, logoHeight: 140, logoY: 248, logoViewBox: '0 0 628 140', logoSvg: adobeLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' }, linkOpacity: 1,
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [{ id: 'other_income', representation: 'flow', label: 'Other', value: 0.019, valueText: '$19M', type: 'profit', labelColor: GREEN_LABEL }],
    layout: {
      scale: 64,
      routes: { other_income: { x: 2144, y: 519, width: 0, height: 2 } },
      nodes: {
        digital_media: { x: 402, y: 421, width: 71, height: 269 },
        digital_experience: { x: 402, y: 845, width: 71, height: 88 },
        publishing_advertising: { x: 402, y: 1080, width: 71, height: 2 },
        revenue: { x: 869, y: 611, width: 70, height: 364 },
        gross_profit: { x: 1336, y: 528, width: 71, height: 325 },
        cost_of_revenue: { x: 1333, y: 1046, width: 72, height: 38 },
        operating_profit: { x: 1806, y: 438, width: 70, height: 136 },
        operating_expenses: { x: 1804, y: 758, width: 70, height: 185 },
        net_profit: { x: 2270, y: 341, width: 71, height: 115 },
        tax: { x: 2270, y: 663, width: 71, height: 22 },
        sm: { x: 2270, y: 823, width: 71, height: 94 },
        rnd: { x: 2270, y: 1017, width: 71, height: 64 },
        ga: { x: 2270, y: 1195, width: 71, height: 21 },
        amortization: { x: 2270, y: 1324, width: 72, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 4.2, notes: ['+11% Y/Y', '95% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.4, notes: ['+10% Y/Y', '72% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, color: DARK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.7, notes: ['+10% Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.1, notes: ['89% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['38% margin', '+20pp Y/Y*'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.9 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.8, notes: ['32% margin', '+20pp Y/Y*'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 1.5, notes: ['26% of revenue', '(0pp) Y/Y'] },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.0, valueText: '($1.0B)', notes: ['18% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.4, notes: ['6% of revenue', '(0pp) Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.041, valueText: '($41M)' },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 4.2, sourceWidth: 269, targetWidth: 268, y0: 555.5, y1: 745, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.4, sourceWidth: 88, targetWidth: 89, y0: 889, y1: 923.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 7, y0: 1081, y1: 971.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.1, sourceWidth: 325, targetWidth: 325, y0: 773.5, y1: 690.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 38, targetWidth: 38, y0: 956, y1: 1065, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, sourceWidth: 138, targetWidth: 136, y0: 597, y1: 506, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.9, sourceWidth: 187, targetWidth: 185, y0: 759.5, y1: 850.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 114, targetWidth: 115, y0: 495, y1: 398.5, sourceOrder: 0, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.019, sourceWidth: 2, targetWidth: 2, y0: 519, y1: 455, sourceOrder: 0, targetOrder: 1, interactionOnly: true, showTooltip: false, linkTint: GREEN_LINK, curve: { x0: 2144, c1x: 2212, c1y: 519, c2x: 2238, c2y: 455 } },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 22, targetWidth: 22, y0: 563, y1: 674, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.5, sourceWidth: 94, targetWidth: 94, y0: 805, y1: 870, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 64, targetWidth: 64, y0: 884, y1: 1049, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 25, targetWidth: 21, y0: 928.5, y1: 1205.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.041, sourceWidth: 2, targetWidth: 2, y0: 942, y1: 1325, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Adobe · 2025 财年第一季度',
        meta: { title: 'Adobe 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2025 年 2 月', titleTextLength: 2070, periodX: 2455 },
        annotationsSvg: annotations(true), nonNodeMetrics: { other_income: { label: '其他收益' } },
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +11%', '毛利率 95%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +10%', '毛利率 72%'] },
          publishing_advertising: { label: ['出版', '与广告'] }, revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 38%', '同比 +20 个百分点*'] }, operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +20 个百分点*'] }, tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 26%', '同比 (0 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 6%', '同比 (0 个百分点)'] }, amortization: { label: '摊销' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

/* Adobe — Q2 FY25 income statement ($B), measured from the supplied Source. */
(function () {
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
  const RIGHT_LABEL_X = 2478;

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
      <defs>
        <linearGradient id="adobeQ2Fy25CcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fe0e8e"/>
          <stop offset="35%" stop-color="#fb4300"/>
          <stop offset="65%" stop-color="#f6c500"/>
          <stop offset="100%" stop-color="#55e04d"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeQ2Fy25CcGradient)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.4}" r="${size * 0.19}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
    </g>`;

  const acrobatIcon = (x, y, size = 116) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      ${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.34},${size * 0.72} C${size * 0.2},${size * 0.62} ${size * 0.22},${size * 0.4} ${size * 0.38},${size * 0.4}
        C${size * 0.5},${size * 0.4} ${size * 0.5},${size * 0.55} ${size * 0.4},${size * 0.6}
        C${size * 0.55},${size * 0.66} ${size * 0.62},${size * 0.5} ${size * 0.72},${size * 0.28}"
        fill="none" stroke="#fff" stroke-width="${size * 0.075}" stroke-linecap="round"/>
    </g>`;

  const adobeAIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      ${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.5},${size * 0.21} L${size * 0.8},${size * 0.765} L${size * 0.66},${size * 0.765}
        L${size * 0.5},${size * 0.44} L${size * 0.34},${size * 0.765} L${size * 0.2},${size * 0.765} Z" fill="#fff"/>
    </g>`;

  const kpiCard = (x, width, header, value, note) => `
    <g>
      <rect x="${x}" y="1124" width="${width}" height="157" rx="31" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1180" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1220" text-anchor="middle" font-size="30" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1258" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="'Noto Sans',Arial,sans-serif">
      ${creativeCloudIcon(104, 416)}
      ${acrobatIcon(226, 416)}
      ${adobeAIcon(163, 722)}
      ${kpiCard(34, 378, zh ? '数字媒体 ARR' : 'Digital Media ARR', '$18.1B', zh ? '同比 +12%' : '+12% Y/Y')}
      ${kpiCard(421, 240, 'RPO', '$19.7B', zh ? '同比 +10%' : '+10% Y/Y')}
      <text x="80" y="1310" font-size="27" font-weight="500" fill="${NOTE}">ARR = ${zh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>
      <text x="78" y="1350" font-size="27" font-weight="500" fill="${NOTE}">RPO = ${zh ? '剩余履约义务' : 'Remaining Performance Obligation'}</text>
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ blocks: [{ x, top, anchor, lineGap, lines }] });

  const labels = (zh) => ({
    digital_media: {
      blocks: [
        { x: 435, top: 299, anchor: 'middle', lineGap: 9, lines: [line('$value', 39), line(zh ? '同比 +11%' : '+11% Y/Y', 29, 400, NOTE)] },
        { x: 221, top: 549, anchor: 'middle', lineGap: 8, lines: [line(zh ? '数字媒体' : 'Digital Media', 34, 800), line(zh ? '毛利率 95%' : '95% gross margin', 29, 400, NOTE)] },
      ],
    },
    digital_experience: {
      blocks: [
        { x: 429, top: 739, anchor: 'middle', lineGap: 9, lines: [line('$value', 39), line(zh ? '同比 +10%' : '+10% Y/Y', 29, 400, NOTE)] },
        { x: 194, top: 860, anchor: 'middle', lineGap: 8, lines: [line(zh ? '数字体验' : 'Digital Experience', 34, 800), line(zh ? '毛利率 72%' : '72% gross margin', 29, 400, NOTE)] },
      ],
    },
    publishing_advertising: {
      blocks: [
        { x: 438, top: 1010, anchor: 'middle', lines: [line('$value', 39)] },
        { x: 205, top: 1022, anchor: 'middle', lineGap: 8, lines: [line(zh ? '出版' : 'Publishing', 34, 800), line(zh ? '与广告' : '& Advertising', 34, 800)] },
      ],
    },
    revenue: block(905, 475, 'middle', [line(zh ? '收入' : 'Revenue', 40, 800), line('$value', 39), line(zh ? '同比 +11%' : '+11% Y/Y', 29, 400, NOTE)], 10),
    gross_profit: block(1373, 326, 'middle', [line(zh ? '毛利润' : 'Gross profit', 40, 800), line('$value', 39), line(zh ? '利润率 89%' : '89% margin', 29, 400, NOTE), line(zh ? '同比 +0 个百分点' : '+0pp Y/Y', 29, 400, NOTE)], 9),
    cost_of_revenue: block(1373, 1089, 'middle', [line(zh ? '收入' : 'Cost of', 36, 800), line(zh ? '成本' : 'revenue', 36, 800), line('$value', 32)], 7),
    operating_profit: block(1840, 236, 'middle', [line(zh ? '营业利润' : 'Operating profit', 40, 800), line('$value', 39), line(zh ? '利润率 36%' : '36% margin', 29, 400, NOTE), line(zh ? '同比 +0 个百分点' : '+0pp Y/Y', 29, 400, NOTE)], 8),
    operating_expenses: block(1840, 951, 'middle', [line(zh ? '营业' : 'Operating', 40, 800), line(zh ? '费用' : 'expenses', 40, 800), line('$value', 36)], zh ? 13 : 8),
    net_profit: block(RIGHT_LABEL_X, 321, 'middle', [line(zh ? '净利润' : 'Net profit', 40, 800), line('$value', 39), line(zh ? '利润率 29%' : '29% margin', 29, 400, NOTE), line(zh ? '同比 (1 个百分点)' : '(1pp) Y/Y', zh ? 25 : 29, 400, NOTE)], 8),
    tax: block(2470, 630, 'middle', [line(zh ? '税费' : 'Tax', 31, 800), line('$value', 29)], 8),
    sm: block(RIGHT_LABEL_X, 812, 'middle', [line(zh ? '销售与市场' : 'S&M', 31, 800), line('$value', 29), line(zh ? '占收入 29%' : '29% of revenue', 28, 400, NOTE), line(zh ? '同比 +0 个百分点' : '+0pp Y/Y', zh ? 26 : 28, 400, NOTE)], 8),
    rnd: block(RIGHT_LABEL_X, 981, 'middle', [line(zh ? '研发' : 'R&D', 31, 800), line('$value', 29), line(zh ? '占收入 18%' : '18% of revenue', 28, 400, NOTE), line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', zh ? 26 : 28, 400, NOTE)], 8),
    ga: block(RIGHT_LABEL_X, 1149, 'middle', [line(zh ? '一般及行政' : 'G&A', 31, 800), line('$value', 29), line(zh ? '占收入 6%' : '6% of revenue', 28, 400, NOTE), line(zh ? '同比 (0 个百分点)' : '(0pp) Y/Y', zh ? 26 : 28, 400, NOTE)], 8),
    amortization: block(RIGHT_LABEL_X, 1293, 'middle', [line(zh ? '摊销' : 'Amortization', zh ? 31 : 27, 800), line('$value', 29)], 8),
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q2-fy25',
    name: 'Adobe · Q2 FY25',
    company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q2 FY25 Income Statement', period: 'Q2 FY25', periodNote: 'Ending May 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q2-fy25.png', width: 2667, height: 1500 },
      titleY: 200, titleSize: 124, titleTextLength: 2119,
      periodX: 2466, periodY: 259, periodNoteY: 306,
      logoWidth: 560, logoHeight: 140, logoY: 247, logoViewBox: '0 0 628 140', logoSvg: adobeLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, interfaceAudit: { mode: 'error' }, type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1,
      nodes: {
        digital_media: { x: 403, y: 388, width: 71, height: 260 },
        digital_experience: { x: 403, y: 831, width: 71, height: 86 },
        publishing_advertising: { x: 403, y: 1065, width: 71, height: 3 },
        revenue: { x: 870, y: 618, width: 70, height: 352 },
        gross_profit: { x: 1337, y: 508, width: 71, height: 314 },
        cost_of_revenue: { x: 1337, y: 1030, width: 71, height: 35 },
        operating_profit: { x: 1805, y: 420, width: 70, height: 125 },
        operating_expenses: { x: 1805, y: 739, width: 70, height: 186 },
        net_profit: { x: 2271, y: 326, width: 71, height: 99 },
        tax: { x: 2271, y: 638, width: 71, height: 23 },
        sm: { x: 2271, y: 807, width: 71, height: 95 },
        rnd: { x: 2271, y: 1004, width: 71, height: 64 },
        ga: { x: 2271, y: 1188, width: 71, height: 21 },
        amortization: { x: 2271, y: 1320, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 4.3, notes: ['+11% Y/Y', '95% gross margin'], color: DARK, labelColor: DARK, linkTint: GREY_LINK },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.5, notes: ['+10% Y/Y', '72% gross margin'], color: DARK, labelColor: DARK, linkTint: GREY_LINK },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, valueText: '$0.1B', color: DARK, labelColor: DARK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.9, notes: ['+11% Y/Y'], color: DARK, labelColor: DARK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.2, notes: ['89% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['36% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.7, notes: ['29% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 1.6, notes: ['29% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.1, notes: ['18% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.4, notes: ['6% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.041, valueText: '($41M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 4.3, sourceWidth: 260, targetWidth: 260, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.5, sourceWidth: 86, targetWidth: 86, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 6, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.2, sourceWidth: 314, targetWidth: 314, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 38, targetWidth: 35, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 125, targetWidth: 125, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.1, sourceWidth: 189, targetWidth: 186, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 99, targetWidth: 99, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 26, targetWidth: 23, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 1.6, sourceWidth: 95, targetWidth: 95, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 64, targetWidth: 64, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 21, targetWidth: 21, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.041, sourceWidth: 6, targetWidth: 1, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Adobe', 'ARR', 'RPO'],
      zh: {
        name: 'Adobe · 2025 财年第二季度',
        meta: {
          title: 'Adobe 2025 财年第二季度利润表', period: '2025 财年第二季度', periodNote: '截至 2025 年 5 月',
          titleTextLength: 2070, periodX: 2466,
        },
        annotationsSvg: annotations(true),
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +11%', '毛利率 95%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +10%', '毛利率 72%'] },
          publishing_advertising: { label: ['出版', '与广告'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 36%', '同比 +0 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 29%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 6%', '同比 (0 个百分点)'] },
          amortization: { label: '摊销' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

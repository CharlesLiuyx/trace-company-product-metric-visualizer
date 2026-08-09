/* Adobe Q3 FY25 income statement ($B), measured from the native 2667x1500
 * Source. Financial values live in data/income-statements/adobe.js. */
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
      <defs><linearGradient id="adobeQ3Fy25CcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fe0e8e"/><stop offset="35%" stop-color="#fb4300"/>
        <stop offset="65%" stop-color="#f6c500"/><stop offset="100%" stop-color="#55e04d"/>
      </linearGradient></defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeQ3Fy25CcGradient)"/>
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

  const kpiCard = (x, y, width, height, header, value, note) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="30" fill="${DARK}"/>
      <text x="${x + width / 2}" y="${y + 52}" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="${y + 96}" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="${y + 137}" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${creativeCloudIcon(104, 416)}${acrobatIcon(228, 416)}${adobeAIcon(164, 723)}
      ${kpiCard(33, 1124, 379, 157, zh ? '数字媒体 ARR' : 'Digital Media ARR', '$18.6B', zh ? '同比 +12%' : '+12% Y/Y')}
      ${kpiCard(421, 1124, 240, 164, 'RPO', '$20.4B', zh ? '同比 +13%' : '+13% Y/Y')}
      <text x="243" y="1320" text-anchor="middle" font-size="27" font-weight="500" fill="${NOTE}">${zh ? 'ARR = 年化经常性收入' : 'ARR = Annual Recurring Revenue'}</text>
      <text x="316" y="1363" text-anchor="middle" font-size="27" font-weight="500" fill="${NOTE}">${zh ? 'RPO = 剩余履约义务' : 'RPO = Remaining Performance Obligations'}</text>
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8, semanticRole = '') => ({
    x, top, anchor, lineGap, lines, ...(semanticRole ? { semanticRole } : {}),
  });
  const labels = (zh) => {
    const t = zh ? {
      digitalMedia: '数字媒体', digitalExperience: '数字体验', publishing: ['出版', '与广告'],
      revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'],
      net: '净利润', tax: '税费', sm: '销售与市场', rnd: '研发', ga: '一般及行政', amortization: '摊销',
      dmYoy: '同比 +12%', deYoy: '同比 +9%', revenueYoy: '同比 +11%', grossMargin: '利润率 89%', grossPp: '同比持平',
      operatingMargin: '利润率 36%', operatingPp: '同比 (1 个百分点)', netMargin: '利润率 30%', netPp: '同比 (2 个百分点)',
      smNotes: ['占收入 27%', '同比 +1 个百分点'], rndNotes: ['占收入 18%', '同比 (1 个百分点)'], gaNotes: ['占收入 7%', '同比 +0 个百分点'],
    } : {
      digitalMedia: 'Digital Media', digitalExperience: 'Digital Experience', publishing: ['Publishing', '& Advertising'],
      revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', sm: 'S&M', rnd: 'R&D', ga: 'G&A', amortization: 'Amortization',
      dmYoy: '+12% Y/Y', deYoy: '+9% Y/Y', revenueYoy: '+11% Y/Y', grossMargin: '89% margin', grossPp: '(0pp) Y/Y',
      operatingMargin: '36% margin', operatingPp: '(1pp) Y/Y', netMargin: '30% margin', netPp: '(2pp) Y/Y',
      smNotes: ['27% of revenue', '+1pp Y/Y'], rndNotes: ['18% of revenue', '(1pp) Y/Y'], gaNotes: ['7% of revenue', '+0pp Y/Y'],
    };
    const right = (top, name, notes = [], size = 31, x = 2478) => ({ blocks: [
      block(x, top, [line(name, size, 800), line('$value', 29), ...notes.map((v) => line(v, 28, 400, NOTE))], 'middle', 8),
    ] });
    return {
      digital_media: { blocks: [
        block(439, 292, [line('$value', 39), line(t.dmYoy, 29, 400, NOTE)], 'middle', 9),
        block(228, 545, [line(t.digitalMedia, 39, 800)], 'middle', 8, 'reference-offset-side-label'),
      ] },
      digital_experience: { blocks: [
        block(439, 735, [line('$value', 39), line(t.deYoy, 29, 400, NOTE)], 'middle', 9),
        block(216, 856, [line(t.digitalExperience, 38, 800)], 'middle', 8),
      ] },
      publishing_advertising: { blocks: [
        block(206, 1009, t.publishing.map((v) => line(v, 35, 800)), 'middle', 8, 'reference-offset-side-label'),
        block(442, 1023, [line('$value', 38)], 'middle', 8),
      ] },
      revenue: { blocks: [block(906, 470, [line(t.revenue, 40, 800), line('$value', 39), line(t.revenueYoy, 29, 400, NOTE)], 'middle', 10)] },
      gross_profit: { blocks: [block(1376, 330, [line(t.gross, 40, 800), line('$value', 39), line(t.grossMargin, 29, 400, NOTE), line(t.grossPp, 29, 400, NOTE)], 'middle', 9)] },
      cost_of_revenue: { blocks: [block(1371, 1102, [...t.cost.map((v) => line(v, 36, 800)), line('$value', 32)], 'middle', 7)] },
      operating_profit: { blocks: [block(1845, 235, [line(t.operatingProfit, 40, 800), line('$value', 39), line(t.operatingMargin, 29, 400, NOTE), line(t.operatingPp, 29, 400, NOTE)], 'middle', 8)] },
      operating_expenses: { blocks: [block(1842, 941, [...t.operatingExpenses.map((v) => line(v, 40, 800)), line('$value', 36)], 'middle', 8)] },
      net_profit: right(339, t.net, [t.netMargin, t.netPp], 40),
      tax: right(585, t.tax, [], 31, 2470), sm: right(769, t.sm, t.smNotes), rnd: right(947, t.rnd, t.rndNotes),
      ga: right(1098, t.ga, t.gaNotes), amortization: right(1263, t.amortization, [], zh ? 31 : 27),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q3-fy25', name: 'Adobe · Q3 FY25', company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q3 FY25 Income Statement', period: 'Q3 FY25', periodNote: 'Ending Aug. 2025',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 204, titleSize: 128, titleWeight: 800, titleTextLength: 2119,
      periodX: 2465, periodY: 258, periodNoteY: 300, periodAnchor: 'middle',
      logoWidth: 628, logoHeight: 140, logoX: 590, logoY: 248, logoViewBox: '0 0 628 140', logoSvg: adobeLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 63,
      nodes: {
        digital_media: { x: 406, y: 387, width: 71, height: 284 }, digital_experience: { x: 406, y: 832, width: 71, height: 92 },
        publishing_advertising: { x: 406, y: 1076, width: 71, height: 1 },
        revenue: { x: 873, y: 614, width: 70, height: 381 }, gross_profit: { x: 1340, y: 514, width: 71, height: 340 },
        cost_of_revenue: { x: 1340, y: 1041, width: 71, height: 39 }, operating_profit: { x: 1808, y: 415, width: 70, height: 137 },
        operating_expenses: { x: 1808, y: 723, width: 70, height: 200 }, net_profit: { x: 2274, y: 325, width: 71, height: 110 },
        tax: { x: 2274, y: 608, width: 71, height: 25 }, sm: { x: 2274, y: 763, width: 71, height: 103 },
        rnd: { x: 2274, y: 972, width: 71, height: 68 }, ga: { x: 2274, y: 1152, width: 71, height: 24 },
        amortization: { x: 2274, y: 1304, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 4.5, notes: ['+12% Y/Y'] },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.5, notes: ['+9% Y/Y'] },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.053, valueText: '$53M' },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.0, valueText: '$6.0B', notes: ['+11% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.3, notes: ['89% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.2, notes: ['36% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.2 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.8, notes: ['30% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 1.6, notes: ['27% of revenue', '+1pp Y/Y'] },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.1, notes: ['18% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.4, notes: ['7% of revenue', '+0pp Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.038, valueText: '($38M)' },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 4.5, sourceWidth: 284, targetWidth: 286, y0: 529, y1: 757, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.5, sourceWidth: 92, targetWidth: 93, y0: 878, y1: 946.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.053, sourceWidth: 1, targetWidth: 2, y0: 1076.5, y1: 994, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.3, sourceWidth: 342, targetWidth: 340, y0: 785, y1: 684, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 39, targetWidth: 39, y0: 975.5, y1: 1060.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.2, sourceWidth: 137, targetWidth: 137, y0: 582.5, y1: 483.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.2, sourceWidth: 203, targetWidth: 200, y0: 752.5, y1: 823, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 112, targetWidth: 110, y0: 471, y1: 380, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 25, targetWidth: 25, y0: 539.5, y1: 620.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 1.6, sourceWidth: 103, targetWidth: 103, y0: 774.5, y1: 814.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 68, targetWidth: 68, y0: 860, y1: 1006, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 26, targetWidth: 24, y0: 907, y1: 1164, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.038, sourceWidth: 3, targetWidth: 2, y0: 921.5, y1: 1305, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Adobe · 2025 财年第三季度',
        meta: { title: 'Adobe 2025 财年第三季度利润表', period: '2025 财年第三季度', periodNote: '截至 2025 年 8 月', titleTextLength: 1900, periodX: 2415 },
        annotationsSvg: annotations(true),
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +12%'] }, digital_experience: { label: '数字体验', notes: ['同比 +9%'] },
          publishing_advertising: { label: ['出版', '与广告'] },
          revenue: { label: '收入', notes: ['同比 +11%'] }, gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比持平'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 36%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 30%', '同比 (2 个百分点)'] },
          tax: { label: '税费' }, sm: { label: '销售与市场', notes: ['占收入 27%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 (1 个百分点)'] }, ga: { label: '一般及行政', notes: ['占收入 7%', '同比 +0 个百分点'] },
          amortization: { label: '摊销' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

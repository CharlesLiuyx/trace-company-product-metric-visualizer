/* Adobe Q3 FY24 income statement ($B), measured from the native 2667x1500
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
      <defs><linearGradient id="adobeQ3Fy24CcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fe0e8e"/><stop offset="35%" stop-color="#fb4300"/>
        <stop offset="65%" stop-color="#f6c500"/><stop offset="100%" stop-color="#55e04d"/>
      </linearGradient></defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeQ3Fy24CcGradient)"/>
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

  const otherIncomeGuide = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other_income"
      data-link-numerator="other_income" data-link-denominator="net_profit"
      data-link-anchor-x="2213" data-link-anchor-y="484.5">
      <path d="M2143 484.5H2213C2244 484.5 2238 431.5 2272 431.5"
        fill="none" stroke="${GREEN_LINK}" stroke-width="1"/>
      <text x="2178" y="531" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2178" y="573" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$50M</text>
    </g>`;

  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${creativeCloudIcon(104, 452)}${acrobatIcon(228, 452)}${adobeAIcon(164, 716)}
      ${kpiCard(33, 1146, 322, 157, zh ? '创意 ARR' : 'Creative ARR', '$13.4B', zh ? '同比 +12%' : '+12% Y/Y')}
      ${kpiCard(371, 1146, 437, 157, 'Document Cloud ARR', '$3.3B', zh ? '同比 +26%' : '+26% Y/Y')}
      ${kpiCard(822, 1142, 240, 165, 'RPO', '$18.1B', zh ? '同比 +15%' : '+15% Y/Y')}
      <text x="221" y="1340" text-anchor="middle" font-size="27" font-weight="500" fill="${NOTE}">${zh ? 'ARR = 年化经常性收入' : 'ARR = Annual Recurring Revenue'}</text>
      <text x="316" y="1381" text-anchor="middle" font-size="27" font-weight="500" fill="${NOTE}">${zh ? 'RPO = 剩余履约义务' : 'RPO = Remaining Performance Obligation'}</text>
      ${otherIncomeGuide(zh)}
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, color });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });
  const labels = (zh) => {
    const t = zh ? {
      digitalMedia: ['数字媒体'], digitalExperience: ['数字体验'], publishing: ['出版与', '广告'],
      revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operatingProfit: '营业利润', operatingExpenses: ['营业', '费用'],
      net: '净利润', tax: '税费', sm: '销售与市场', rnd: '研发', ga: '一般及行政', amortization: '摊销',
      y11: '同比 +11%', y10: '同比 +10%', y12n: '同比 (12%)', gm97: '毛利率 97%', gm71: '毛利率 71%', gm63: '毛利率 63%',
      m90: '利润率 90%', m37: '利润率 37%', m31: '利润率 31%', pp3: '同比 +3 个百分点', pp2: '同比 +2 个百分点',
      smNotes: ['占收入 26%', '同比 (1 个百分点)'], rndNotes: ['占收入 19%', '同比 +1 个百分点'], gaNotes: ['占收入 7%', '同比 (0 个百分点)'],
    } : {
      digitalMedia: ['Digital Media'], digitalExperience: ['Digital Experience'], publishing: ['Publishing', '& Advertising'],
      revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', sm: 'S&M', rnd: 'R&D', ga: 'G&A', amortization: 'Amortization',
      y11: '+11% Y/Y', y10: '+10% Y/Y', y12n: '(12%) Y/Y', gm97: '97% gross margin', gm71: '71% gross margin', gm63: '63% gross margin',
      m90: '90% margin', m37: '37% margin', m31: '31% margin', pp3: '+3pp Y/Y', pp2: '+2pp Y/Y',
      smNotes: ['26% of revenue', '(1pp) Y/Y'], rndNotes: ['19% of revenue', '+1pp Y/Y'], gaNotes: ['7% of revenue', '(0pp) Y/Y'],
    };
    const source = (amountTop, nameTop, names, yoy, grossMargin, nameSize = 39, nameX = 202) => ({ blocks: [
      block(439, amountTop, [line('$value', 39), line(yoy, 29, 400, NOTE)], 'middle', 9),
      block(nameX, nameTop, [...names.map((v) => line(v, nameSize, 800)), line(grossMargin, 29, 400, NOTE)], 'middle', 8),
    ] });
    const right = (x, top, name, notes = [], size = 31) => ({ blocks: [block(x, top, [line(name, size, 800), line('$value', 29), ...notes.map((v) => line(v, 28, 400, NOTE))], 'middle', 8)] });
    return {
      digital_media: source(375, 584, t.digitalMedia, t.y11, t.gm97, 39, 228),
      digital_experience: source(760, 851, t.digitalExperience, t.y10, t.gm71, 39, 216),
      publishing_advertising: source(992, 1003, t.publishing, t.y12n, t.gm63, 36),
      revenue: { blocks: [block(906, 476, [line(t.revenue, 40, 800), line('$value', 39), line(t.y11, 29, 400, NOTE)], 'middle', 10)] },
      gross_profit: { blocks: [block(1371, 337, [line(t.gross, 40, 800), line('$value', 39), line(t.m90, 29, 400, NOTE), line(t.pp3, 29, 400, NOTE)], 'middle', 9)] },
      cost_of_revenue: { blocks: [block(1361.5, 1088, [...t.cost.map((v) => line(v, 36, 800)), line('$value', 32)], 'middle', 7)] },
      operating_profit: { blocks: [block(1838, 246, [line(t.operatingProfit, 40, 800), line('$value', 39), line(t.m37, 29, 400, NOTE), line(t.pp2, 29, 400, NOTE)], 'middle', 8)] },
      operating_expenses: { blocks: [block(1834, 938, [...t.operatingExpenses.map((v) => line(v, 40, 800)), line('$value', 36)], 'middle', 8)] },
      other_income: { blocks: [] },
      net_profit: right(2458, 334, t.net, [t.m31, t.pp2], 40),
      tax: right(2460, 605, t.tax), sm: right(2474, 772, t.sm, t.smNotes), rnd: right(2480, 950, t.rnd, t.rndNotes),
      ga: right(2479, 1116, t.ga, t.gaNotes), amortization: right(2478, 1266, t.amortization, [], zh ? 31 : 27),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q3-fy24', name: 'Adobe · Q3 FY24', company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q3 FY24 Income Statement', period: 'Q3 FY24', periodNote: 'Ending August 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 204, titleSize: 128, titleWeight: 800, titleTextLength: 2119,
      periodX: 1371, periodY: 1316, periodNoteY: 1376, periodAnchor: 'middle',
      logoWidth: 628, logoHeight: 140, logoY: 248, logoViewBox: '0 0 628 140', logoSvg: adobeLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [{ id: 'other_income', representation: 'flow', label: 'Other', value: 0.05, valueText: '$50M', type: 'profit', labelColor: GREEN_LABEL }],
    layout: {
      scale: 60,
      routes: { other_income: { x: 2143, y: 484.5, width: 0, height: 1 } },
      nodes: {
        digital_media: { x: 404, y: 469, width: 71, height: 241 }, digital_experience: { x: 404, y: 854, width: 71, height: 80 },
        publishing_advertising: { x: 404, y: 1082, width: 71, height: 1 }, revenue: { x: 871, y: 624, width: 70, height: 329 },
        gross_profit: { x: 1335, y: 520, width: 72, height: 295 }, cost_of_revenue: { x: 1335, y: 1032, width: 72, height: 31 },
        operating_profit: { x: 1803, y: 427, width: 70, height: 120 }, operating_expenses: { x: 1806, y: 746, width: 70, height: 173 },
        net_profit: { x: 2270, y: 332, width: 71, height: 100 }, tax: { x: 2272, y: 634, width: 71, height: 19 },
        sm: { x: 2272, y: 776, width: 71, height: 85 }, rnd: { x: 2272, y: 967, width: 71, height: 61 },
        ga: { x: 2272, y: 1149, width: 71, height: 20 }, amortization: { x: 2272, y: 1299, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 4.0, valueText: '$4.0B', notes: ['+11% Y/Y', '97% gross margin'] },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.4, notes: ['+10% Y/Y', '71% gross margin'] },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, notes: ['(12%) Y/Y', '63% gross margin'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.4, notes: ['+11% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.9, notes: ['90% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.0, valueText: '$2.0B', notes: ['37% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.9 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.7, notes: ['31% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 1.4, notes: ['26% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.0, valueText: '($1.0B)', notes: ['19% of revenue', '+1pp Y/Y'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.4, notes: ['7% of revenue', '(0pp) Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.043, valueText: '($43M)' },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 4.0, sourceWidth: 241, targetWidth: 241, y0: 589.5, y1: 744.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.4, sourceWidth: 80, targetWidth: 80, y0: 894, y1: 905, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 1, targetWidth: 8, y0: 1082.5, y1: 949, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.9, sourceWidth: 295, targetWidth: 295, y0: 771.5, y1: 667.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 34, targetWidth: 31, y0: 936, y1: 1047.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.0, sourceWidth: 120, targetWidth: 120, y0: 580, y1: 487, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.9, sourceWidth: 175, targetWidth: 173, y0: 727.5, y1: 832.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.65, sourceWidth: 98, targetWidth: 99, y0: 476, y1: 381.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.05, sourceWidth: 1, targetWidth: 1, y0: 484.5, y1: 431.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2143, x1: 2272, c1x: 2213, c1y: 484.5, c2x: 2238, c2y: 431.5 } },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 22, targetWidth: 19, y0: 536, y1: 643.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 1.4, sourceWidth: 85, targetWidth: 85, y0: 788.5, y1: 818.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 61, targetWidth: 61, y0: 861.5, y1: 997.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 26, targetWidth: 20, y0: 905, y1: 1159, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.043, sourceWidth: 1, targetWidth: 1, y0: 918.5, y1: 1299.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Document Cloud ARR'],
      zh: {
        name: 'Adobe · 2024 财年第三季度',
        meta: { title: 'Adobe 2024 财年第三季度利润表', period: '2024 财年第三季度', periodNote: '截至 2024 年 8 月', titleTextLength: 1900 },
        annotationsSvg: annotations(true), nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +11%', '毛利率 97%'] }, digital_experience: { label: '数字体验', notes: ['同比 +10%', '毛利率 71%'] },
          publishing_advertising: { label: ['出版与', '广告'], notes: ['同比 (12%)', '毛利率 63%'] }, revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 90%', '同比 +3 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 37%', '同比 +2 个百分点'] }, operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +2 个百分点'] }, tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 26%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 19%', '同比 +1 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 7%', '同比 (0 个百分点)'] }, amortization: { label: '摊销' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

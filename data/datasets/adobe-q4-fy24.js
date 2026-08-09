/* Adobe Q4 FY24 income statement ($B), measured from the Source image. */
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

  const adobeFlagMark = `
    <path d="M0,0 L58,0 L0,140 Z" fill="${ADOBE_RED}"/>
    <path d="M102,0 L159,0 L159,137 Z" fill="${ADOBE_RED}"/>
    <path d="M80,50 L93,139 L116,139 Z" fill="${ADOBE_RED}"/>`;
  const adobeLogo = `${adobeFlagMark}
    <text x="214" y="113" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800"
      fill="${ADOBE_RED}" textLength="331" lengthAdjust="spacingAndGlyphs">Adobe</text>`;
  const appIconRect = (size, fill) => `<rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${fill}"/>`;
  const creativeCloudIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})">
      <defs><linearGradient id="adobeQ4Fy24Cc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fe0e8e"/><stop offset="35%" stop-color="#fb4300"/>
        <stop offset="65%" stop-color="#f6c500"/><stop offset="100%" stop-color="#55e04d"/>
      </linearGradient></defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeQ4Fy24Cc)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.40}" r="${size * 0.19}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
    </g>`;
  const acrobatIcon = (x, y, size = 116) => `
    <g transform="translate(${x} ${y})">${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.34},${size * 0.72} C${size * 0.2},${size * 0.62} ${size * 0.22},${size * 0.4} ${size * 0.38},${size * 0.4}
        C${size * 0.5},${size * 0.4} ${size * 0.5},${size * 0.55} ${size * 0.4},${size * 0.6}
        C${size * 0.55},${size * 0.66} ${size * 0.62},${size * 0.5} ${size * 0.72},${size * 0.28}"
        fill="none" stroke="#fff" stroke-width="${size * 0.075}" stroke-linecap="round"/>
    </g>`;
  const adobeAIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})">${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.5},${size * 0.21} L${size * 0.8},${size * 0.765} L${size * 0.66},${size * 0.765}
        L${size * 0.5},${size * 0.44} L${size * 0.34},${size * 0.765} L${size * 0.2},${size * 0.765} Z" fill="#fff"/>
    </g>`;
  const kpiCard = (x, y, width, height, header, value, note) => `
    <g font-family="Noto Sans,Arial,sans-serif"><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="30" fill="${DARK}"/>
      <text x="${x + width / 2}" y="${y + 52}" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="${y + 96}" text-anchor="middle" font-size="31" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="${y + 137}" text-anchor="middle" font-size="27" fill="#fff">${note}</text></g>`;
  const otherGuide = (zh) => `
    <g class="sankey-interactive-annotation" data-node="other_income"
      data-link-numerator="other_income" data-link-denominator="net_profit" data-link-anchor-x="2207" data-link-anchor-y="506">
      <path d="M2143 507H2212C2248 507 2252 474 2272 474" fill="none" stroke="${GREEN_LINK}" stroke-width="3"/>
      <text x="2180" y="556" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2180" y="594" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif" font-size="31" fill="${GREEN_LABEL}">$34M</text>
    </g>`;
  const annotations = (zh) => `
    <g data-typography-role="brand">${creativeCloudIcon(103, 413)}${acrobatIcon(228, 413)}${adobeAIcon(163, 692)}</g>
    ${otherGuide(zh)}
    ${kpiCard(34, 1124, 322, 157, 'Creative ARR', '$13.9B', zh ? '同比 +10%' : '+10% Y/Y')}
    ${kpiCard(371, 1124, 437, 157, 'Document Cloud ARR', '$3.5B', zh ? '同比 +23%' : '+23% Y/Y')}
    ${kpiCard(822, 1120, 240, 165, 'RPO', '$20.0B', zh ? '同比 +16%' : '+16% Y/Y')}
    <g font-family="Noto Sans,Arial,sans-serif" font-size="27" fill="${NOTE}">
      <text x="79" y="1321">${zh ? 'ARR = 年度经常性收入' : 'ARR = Annual Recurring Revenue'}</text>
      <text x="79" y="1364">${zh ? 'RPO = 剩余履约义务' : 'RPO = Remaining Performance Obligation'}</text>
    </g>`;
  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 8, semanticRole) => ({ x, top, anchor, lines, lineGap, ...(semanticRole ? { semanticRole } : {}) });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q4-fy24', name: 'Adobe · Q4 FY24', company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q4 FY24 Income Statement', period: 'Q4 FY24', periodNote: 'Ending Nov. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q4-fy24.png', width: 2667, height: 1500 },
      titleY: 204, titleSize: 128, titleTextLength: 2121, periodX: 2444, periodY: 276, periodNoteY: 318,
      logoWidth: 628, logoHeight: 140, logoY: 248, logoViewBox: '0 0 628 140', logoSvg: adobeLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      interfaceAudit: { mode: 'error' }, type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1, routes: { other_income: { x: 2143, y: 507, width: 70, height: 3 } },
      nodes: {
        digital_media: { x: 404, y: 391, width: 71, height: 268 }, digital_experience: { x: 404, y: 828, width: 71, height: 88 },
        publishing_advertising: { x: 404, y: 1070, width: 71, height: 3 }, revenue: { x: 871, y: 617, width: 70, height: 363 },
        gross_profit: { x: 1348, y: 507, width: 71, height: 323 }, cost_of_revenue: { x: 1348, y: 1044, width: 71, height: 39 },
        operating_profit: { x: 1803, y: 437, width: 70, height: 125 }, operating_expenses: { x: 1806, y: 746, width: 70, height: 197 },
        net_profit: { x: 2272, y: 366, width: 71, height: 108 }, tax: { x: 2272, y: 649, width: 71, height: 17 },
        sm: { x: 2272, y: 794, width: 71, height: 97 }, rnd: { x: 2272, y: 999, width: 71, height: 64 },
        ga: { x: 2272, y: 1178, width: 71, height: 27 }, amortization: { x: 2272, y: 1316, width: 71, height: 4 },
      },
      labels: {
        other_income: { blocks: [] },
        digital_media: { blocks: [block(439, 301, 'middle', [line('$value', 39), line('+12% Y/Y', 29, 400, NOTE)], 9), block(228, 547, 'middle', [line('Digital Media', 34, 800), line('95% gross margin', 29, 400, NOTE)], 8)] },
        digital_experience: { blocks: [block(439, 738, 'middle', [line('$value', 39), line('+10% Y/Y', 29, 400, NOTE)], 9), block(194, 831, 'middle', [line('Digital Experience', 34, 800), line('71% gross margin', 29, 400, NOTE)], 8)] },
        publishing_advertising: { blocks: [block(439, 968, 'middle', [line('$value', 39), line('(2%) Y/Y', 29, 400, NOTE)], 9), block(220, 966, 'middle', [line('Publishing', 34, 800), line('& Advertising', 34, 800), line('65% gross margin', 29, 400, NOTE)], 7)] },
        revenue: { blocks: [block(906, 471, 'middle', [line('Revenue', 40, 800), line('$value', 39), line('+11% Y/Y', 29, 400, NOTE)], 9)] },
        gross_profit: { blocks: [block(1383, 328, 'middle', [line('Gross profit', 40, 800), line('$value', 39), line('89% margin', 29, 400, NOTE), line('+2pp Y/Y', 29, 400, NOTE)], 8)] },
        cost_of_revenue: { blocks: [block(1383, 1107, 'middle', [line('Cost of', 36, 800), line('revenue', 36, 800), line('$value', 32)], 7)] },
        operating_profit: { blocks: [block(1838, 257, 'middle', [line('Operating profit', 40, 800), line('$value', 39), line('35% margin', 29, 400, NOTE), line('+0pp Y/Y', 29, 400, NOTE)], 8)] },
        operating_expenses: { blocks: [block(1841, 961, 'middle', [line('Operating', 40, 800), line('expenses', 40, 800), line('$value', 36)], 8)] },
        net_profit: { blocks: [block(2367, 372, 'start', [line('Net profit', 40, 800), line('$value', 39), line('30% margin', 29, 400, NOTE), line('+1pp Y/Y', 29, 400, NOTE)], 8)] },
        tax: { blocks: [block(2460, 621, 'middle', [line('Tax', 31, 800), line('$value', 29)], 8)] },
        sm: { blocks: [block(2474, 805, 'middle', [line('S&M', 31, 800), line('$value', 29), line('27% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)], 8)] },
        rnd: { blocks: [block(2480, 975, 'middle', [line('R&D', 31, 800), line('$value', 29), line('18% of revenue', 28, 400, NOTE), line('+0pp Y/Y', 28, 400, NOTE)], 8)] },
        ga: { blocks: [block(2479, 1142, 'middle', [line('G&A', 31, 800), line('$value', 29), line('8% of revenue', 28, 400, NOTE), line('+1pp Y/Y', 28, 400, NOTE)], 8)] },
        amortization: { blocks: [block(2478, 1302, 'middle', [line('Amortization', 27, 800), line('$value', 29)], 8)] },
      },
    },
    nonNodeMetrics: [{ id: 'other_income', representation: 'flow', label: 'Other', value: 0.034, valueText: '$34M', type: 'profit', labelColor: GREEN_LABEL }],
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 4.1, notes: ['+12% Y/Y', '95% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.4, notes: ['+10% Y/Y', '71% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, notes: ['(2%) Y/Y', '65% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.6, notes: ['+11% Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.0, valueText: '$5.0B', notes: ['89% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.0, valueText: '$2.0B', notes: ['35% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.0, valueText: '($3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.7, notes: ['30% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 1.5, valueText: '($1.5B)', notes: ['27% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.0, valueText: '($1.0B)', notes: ['18% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.5, valueText: '($0.5B)', notes: ['8% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.042, valueText: '($42M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 4.1, sourceWidth: 268, targetWidth: 272, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.4, sourceWidth: 88, targetWidth: 88, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.0, sourceWidth: 323, targetWidth: 323, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 40, targetWidth: 39, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.0, sourceWidth: 127, targetWidth: 125, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.0, sourceWidth: 195, targetWidth: 197, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.666, sourceWidth: 108, targetWidth: 108, y0: 491, y1: 420, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 17, targetWidth: 17, y0: 553.5, y1: 657.5, sourceOrder: 1, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.034, sourceWidth: 3, targetWidth: 3, y0: 507.5, y1: 472.5, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.5, sourceWidth: 99, targetWidth: 97, y0: 795.5, y1: 842.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 65, targetWidth: 64, y0: 877.5, y1: 1031, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.5, sourceWidth: 30, targetWidth: 27, y0: 925, y1: 1191.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.042, sourceWidth: 3, targetWidth: 4, y0: 941.5, y1: 1318, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Creative ARR', 'Document Cloud ARR', 'RPO'],
      zh: {
        name: 'Adobe · 2024 财年第四季度',
        meta: { title: 'Adobe 2024 财年第四季度利润表', period: '2024 财年第四季度', periodNote: '截至 2024 年 11 月', titleTextLength: 1940, periodX: 2410 },
        annotationsSvg: annotations(true), nonNodeMetrics: { other_income: { label: '其他' } },
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +12%', '毛利率 95%'] }, digital_experience: { label: '数字体验', notes: ['同比 +10%', '毛利率 71%'] },
          publishing_advertising: { label: ['出版', '与广告'], notes: ['同比 (2%)', '毛利率 65%'] }, revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +2 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +0 个百分点'] }, operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +1 个百分点'] }, tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 27%', '同比 +0 个百分点'] }, rnd: { label: '研发', notes: ['占收入 18%', '同比 +0 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 8%', '同比 +1 个百分点'] }, amortization: { label: '摊销' },
        },
        layout: { labels: {
          digital_media: { blocks: [block(439, 301, 'middle', [line('$value', 39), line('同比 +12%', 29, 400, NOTE)], 9), block(228, 547, 'middle', [line('数字媒体', 34, 800), line('毛利率 95%', 29, 400, NOTE)], 8)] },
          digital_experience: { blocks: [block(439, 738, 'middle', [line('$value', 39), line('同比 +10%', 29, 400, NOTE)], 9), block(194, 831, 'middle', [line('数字体验', 34, 800), line('毛利率 71%', 29, 400, NOTE)], 8)] },
          publishing_advertising: { blocks: [block(439, 968, 'middle', [line('$value', 39), line('同比 (2%)', 29, 400, NOTE)], 9), block(220, 966, 'middle', [line('出版', 34, 800), line('与广告', 34, 800), line('毛利率 65%', 29, 400, NOTE)], 7)] },
          revenue: { blocks: [block(906, 471, 'middle', [line('收入', 40, 800), line('$value', 39), line('同比 +11%', 29, 400, NOTE)], 9)] },
          gross_profit: { blocks: [block(1383, 328, 'middle', [line('毛利润', 40, 800), line('$value', 39), line('利润率 89%', 29, 400, NOTE), line('同比 +2 个百分点', 29, 400, NOTE)], 2)] },
          cost_of_revenue: { blocks: [block(1383, 1107, 'middle', [line('收入', 36, 800), line('成本', 36, 800), line('$value', 32)], 7)] },
          operating_profit: { blocks: [block(1838, 257, 'middle', [line('营业利润', 40, 800), line('$value', 39), line('利润率 35%', 29, 400, NOTE), line('同比 +0 个百分点', 29, 400, NOTE)], 2)] },
          operating_expenses: { blocks: [block(1841, 961, 'middle', [line('营业', 40, 800), line('费用', 40, 800), line('$value', 36)], 8)] },
          net_profit: { blocks: [block(2367, 372, 'start', [line('净利润', 40, 800), line('$value', 39), line('利润率 30%', 29, 400, NOTE), line('同比 +1 个百分点', 29, 400, NOTE)], 2)] },
          tax: { blocks: [block(2460, 621, 'middle', [line('税费', 31, 800), line('$value', 29)], 8)] },
          sm: { blocks: [block(2474, 805, 'middle', [line('销售与市场', 31, 800), line('$value', 29), line('占收入 27%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)], 2)] },
          rnd: { blocks: [block(2480, 975, 'middle', [line('研发', 31, 800), line('$value', 29), line('占收入 18%', 28, 400, NOTE), line('同比 +0 个百分点', 28, 400, NOTE)], 2)] },
          ga: { blocks: [block(2479, 1142, 'middle', [line('一般及行政', 31, 800), line('$value', 29), line('占收入 8%', 28, 400, NOTE), line('同比 +1 个百分点', 28, 400, NOTE)], 2)] },
          amortization: { blocks: [block(2478, 1302, 'middle', [line('摊销', 27, 800), line('$value', 29)], 8)] },
        } },
      },
    },
  });
})();

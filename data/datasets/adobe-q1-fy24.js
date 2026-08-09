/* Adobe - Q1 FY24 income statement ($B), reconstructed as fixed SVG geometry. */
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
  const RIGHT_LABEL_X = 2430;

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
    <g transform="translate(${x} ${y})">
      <defs><linearGradient id="adobeCcGradientFy24" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fe0e8e"/><stop offset="35%" stop-color="#fb4300"/>
        <stop offset="65%" stop-color="#f6c500"/><stop offset="100%" stop-color="#55e04d"/>
      </linearGradient></defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeCcGradientFy24)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.4}" r="${size * 0.19}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
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
  const kpiCard = (x, width, header, value, note) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="${x}" y="1147" width="${width}" height="158" rx="30" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1197" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1240" text-anchor="middle" font-size="30" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1281" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${note}</text>
    </g>`;
  const annotations = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${creativeCloudIcon(104, 451)}${acrobatIcon(228, 451)}${adobeAIcon(164, 716)}
      ${kpiCard(32, 324, zh ? '创意业务 ARR' : 'Creative ARR', '$12.8B', zh ? '同比 +13%' : '+13% Y/Y')}
      ${kpiCard(372, 437, zh ? '文档云 ARR' : 'Document Cloud ARR', '$3.0B', zh ? '同比 +25%' : '+25% Y/Y')}
      ${kpiCard(823, 238, 'RPO', '$17.6B', zh ? '同比 +16%' : '+16% Y/Y')}
      <text x="212" y="1340" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = ${zh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>
      <text x="121" y="1382" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = ${zh ? '剩余履约义务' : 'Remaining Performance Obligation'}</text>
      <text x="171" y="1437" text-anchor="start" font-size="31" font-weight="800" fill="#000">${zh ? '来源：季度业绩' : 'Source: Quarterly results'}</text>
      <path d="M2155 399 H2225 C2252 399 2247 354 2272 354" fill="none" stroke="${GREEN_LINK}" stroke-width="3" stroke-linecap="round"/>
    </g>`;

  const labels = (zh) => ({
    digital_media: { blocks: [
      { x: 439, top: 355, anchor: 'middle', lines: [{ text: '$value', size: 39 }, { text: zh ? '同比 +12%' : '+12% Y/Y', size: 29, color: NOTE }] },
      { x: 227, top: 585, anchor: 'middle', lines: [{ text: zh ? '数字媒体' : 'Digital Media', size: 38, weight: 800 }, { text: zh ? '毛利率 96%' : '96% gross margin', size: 29, color: NOTE }] },
    ] },
    digital_experience: { blocks: [
      { x: 422, top: 749, anchor: 'middle', lines: [{ text: '$value', size: 39 }, { text: zh ? '同比 +10%' : '+10% Y/Y', size: 29, color: NOTE }] },
      { x: 197, top: 853, anchor: 'middle', lines: [{ text: zh ? '数字体验' : 'Digital Experience', size: 36, weight: 800 }, { text: zh ? '毛利率 69%' : '69% gross margin', size: 29, color: NOTE }] },
    ] },
    publishing_advertising: { blocks: [
      { x: 440, top: 982, anchor: 'middle', lines: [{ text: '$value', size: 38 }, { text: zh ? '同比 (8%)' : '(8%) Y/Y', size: 29, color: NOTE }] },
      { x: 207, top: 990, anchor: 'middle', lines: [{ text: zh ? '出版' : 'Publishing', size: 35, weight: 800 }, { text: zh ? '与广告' : '& Advertising', size: 35, weight: 800 }, { text: zh ? '毛利率 71%' : '71% gross margin', size: 29, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 909, top: 458, anchor: 'middle', lines: [{ text: zh ? '收入' : 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '同比 +11%' : '+11% Y/Y', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1379, top: 315, anchor: 'middle', lines: [{ text: zh ? '毛利润' : 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '利润率 89%' : '89% margin', size: 29, color: NOTE }, { text: zh ? '同比 +1 个百分点' : '+1pp Y/Y', size: 29, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1394, top: 1070, anchor: 'middle', lines: [{ text: zh ? '收入' : 'Cost of', size: 36, weight: 800 }, { text: zh ? '成本' : 'revenue', size: 36, weight: 800 }, { text: '$value', size: 34 }] }] },
    operating_profit: { blocks: [{ x: 1845, top: 230, anchor: 'middle', lines: [{ text: zh ? '营业利润' : 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '利润率 18%' : '18% margin', size: 29, color: NOTE }, { text: zh ? '同比 (17 个百分点)' : '(17pp) Y/Y', size: 29, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1876, top: 913, anchor: 'middle', lines: [{ text: zh ? '营业' : 'Operating', size: 38, weight: 800 }, { text: zh ? '费用' : 'expenses', size: 38, weight: 800 }, { text: '$value', size: 35 }] }] },
    net_profit: { blocks: [{ x: 2399, top: 282, anchor: 'start', lines: [{ text: zh ? '净利润' : 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 38 }, { text: zh ? '利润率 12%' : '12% margin', size: 28, color: NOTE }, { text: zh ? '同比 (15 个百分点)' : '(15pp) Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: 2420, top: 570, anchor: 'start', lines: [{ text: zh ? '税费' : 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30 }] }] },
    sm: { blocks: [{ x: 2388, top: 744, anchor: 'start', lines: [{ text: zh ? '销售与市场' : 'S&M', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 26%' : '26% of revenue', size: 28, color: NOTE }] }] },
    termination: { blocks: [{ x: 2404, top: 922, anchor: 'start', lines: [{ text: zh ? '离职补偿' : 'Termination', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 19%' : '19% of revenue', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2421, top: 1048, anchor: 'start', lines: [{ text: zh ? '研发' : 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 18%' : '18% of revenue', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: 2443, top: 1188, anchor: 'start', lines: [{ text: zh ? '一般及行政' : 'G&A', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 7%' : '7% of revenue', size: 28, color: NOTE }] }] },
    amortization: { blocks: [{ x: 2407, top: 1312, anchor: 'start', lines: [{ text: zh ? '摊销' : 'Amortization', size: 29, weight: 800 }, { text: '$value', size: 29 }] }] },
    other_income: { blocks: [{ x: 2148, top: 405, anchor: 'start', lines: [{ text: zh ? '其他收益' : 'Other', size: 31, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 30, weight: 500, color: GREEN_LABEL }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q1-fy24', name: 'Adobe · Q1 FY24', company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q1 FY24 Income Statement', period: 'Q1 FY24', periodNote: 'Ending Feb. 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q1-fy24.png', width: 2667, height: 1500 },
      titleY: 200, titleSize: 128, titleTextLength: 2118,
      periodX: 1335, periodY: 1318, periodNoteY: 1362,
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
    layout: {
      scale: 52.5,
      routes: { other_income: { x: 2155, y: 399, width: 0, height: 2 } },
      nodes: {
        digital_media: { x: 404, y: 451, width: 72, height: 244 },
        digital_experience: { x: 404, y: 841, width: 72, height: 85 },
        publishing_advertising: { x: 404, y: 1074, width: 72, height: 5 },
        revenue: { x: 873, y: 597, width: 72, height: 331 },
        gross_profit: { x: 1343, y: 499, width: 72, height: 292 },
        cost_of_revenue: { x: 1343, y: 1016, width: 72, height: 38 },
        operating_profit: { x: 1840, y: 414, width: 72, height: 55 },
        operating_expenses: { x: 1840, y: 666, width: 72, height: 235 },
        net_profit: { x: 2272, y: 313, width: 72, height: 41 },
        tax: { x: 2272, y: 591, width: 72, height: 22 },
        sm: { x: 2272, y: 756, width: 72, height: 84 },
        termination: { x: 2272, y: 924, width: 72, height: 64 },
        rnd: { x: 2272, y: 1072, width: 72, height: 57 },
        ga: { x: 2272, y: 1231, width: 72, height: 25 },
        amortization: { x: 2272, y: 1344, width: 72, height: 2 },
      },
      labels: labels(false),
    },
    nonNodeMetrics: [{ id: 'other_income', representation: 'flow', label: 'Other', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: GREEN_LABEL }],
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 3.8, notes: ['+12% Y/Y', '96% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.3, notes: ['+10% Y/Y', '69% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, notes: ['(8%) Y/Y', '71% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.2, notes: ['+11% Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.6, notes: ['89% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.9, notes: ['18% margin', '(17pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.7 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.6, notes: ['12% margin', '(15pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 1.4, notes: ['26% of revenue'] },
      { id: 'termination', col: 4, order: 3, type: 'cost', label: 'Termination', value: 1.0, valueText: '($1.0B)', notes: ['19% of revenue'] },
      { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 0.9, notes: ['18% of revenue'] },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 0.4, notes: ['7% of revenue'] },
      { id: 'amortization', col: 4, order: 6, type: 'cost', label: 'Amortization', value: 0.042, valueText: '($42M)' },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 3.8, sourceWidth: 244, targetWidth: 242, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.3, sourceWidth: 85, targetWidth: 84, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 5, targetWidth: 5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.6, sourceWidth: 292, targetWidth: 292, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 39, targetWidth: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9, sourceWidth: 55, targetWidth: 55, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.7, sourceWidth: 237, targetWidth: 235, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 34, targetWidth: 41, sourceOrder: 0, targetOrder: 0 },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 1, y0: 399, y1: 353.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 21, targetWidth: 22, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.4, sourceWidth: 87, targetWidth: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'termination', value: 1.0, sourceWidth: 63, targetWidth: 64, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 57, targetWidth: 57, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 26, targetWidth: 25, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.042, sourceWidth: 2, targetWidth: 2, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Adobe · 2024 财年第一季度',
        meta: { title: 'Adobe 2024 财年第一季度利润表', period: '2024 财年第一季度', periodNote: '截至 2024 年 2 月', titleTextLength: 2070 },
        annotationsSvg: annotations(true), nonNodeMetrics: { other_income: { label: '其他收益' } },
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +12%', '毛利率 96%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +10%', '毛利率 69%'] },
          publishing_advertising: { label: ['出版', '与广告'], notes: ['同比 (8%)', '毛利率 71%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] }, gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 (17 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 12%', '同比 (15 个百分点)'] },
          tax: { label: '税费' }, sm: { label: '销售与市场', notes: ['占收入 26%'] }, termination: { label: '离职补偿', notes: ['占收入 19%'] },
          rnd: { label: '研发', notes: ['占收入 18%'] }, ga: { label: '一般及行政', notes: ['占收入 7%'] }, amortization: { label: '摊销' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

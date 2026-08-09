/* Adobe Q4 FY23 income statement ($B), measured from the native Source. */
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
  const RIGHT_LABEL_X = 2464;

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
      <defs><linearGradient id="adobeCcGradientQ4Fy23" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fe0e8e"/><stop offset="35%" stop-color="#fb4300"/>
        <stop offset="65%" stop-color="#f6c500"/><stop offset="100%" stop-color="#55e04d"/>
      </linearGradient></defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeCcGradientQ4Fy23)"/>
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
  const kpiCard = (x, y, width, height, header, value, note) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="30" fill="${DARK}"/>
      <text x="${x + width / 2}" y="${y + 50}" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="${y + 94}" text-anchor="middle" font-size="30" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="${y + 136}" text-anchor="middle" font-size="27" font-weight="500" fill="#fff">${note}</text>
    </g>`;
  const annotations = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${creativeCloudIcon(104, 452)}${acrobatIcon(228, 452)}${adobeAIcon(164, 716)}
      ${kpiCard(34, 1146, 322, 157, zh ? '创意业务 ARR' : 'Creative ARR', '$12.4B', zh ? '同比 +13%' : '+13% Y/Y')}
      ${kpiCard(371, 1146, 437, 157, zh ? '文档云 ARR' : 'Document Cloud ARR', '$2.8B', zh ? '同比 +22%' : '+22% Y/Y')}
      ${kpiCard(822, 1142, 240, 165, 'RPO', '$17.2B', zh ? '同比 +13%' : '+13% Y/Y')}
      <text x="212" y="1340" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = ${zh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>
      <text x="121" y="1382" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = ${zh ? '剩余履约义务' : 'Remaining Performance Obligation'}</text>
    </g>`;

  const labels = (zh) => ({
    digital_media: { blocks: [
      { x: 436, top: 363, anchor: 'middle', lines: [{ text: '$value', size: 39 }, { text: zh ? '同比 +13%' : '+13% Y/Y', size: 29, color: NOTE }] },
      { x: 228, top: 580, anchor: 'middle', lines: [{ text: zh ? '数字媒体' : 'Digital Media', size: 38, weight: 800 }, { text: zh ? '毛利率 94%' : '94% gross margin', size: 29, color: NOTE }] },
    ] },
    digital_experience: { blocks: [
      { x: 432, top: 761, anchor: 'middle', lines: [{ text: '$value', size: 39 }, { text: zh ? '同比 +10%' : '+10% Y/Y', size: 29, color: NOTE }] },
      { x: 203, top: 849, anchor: 'middle', lines: [{ text: zh ? '数字体验' : 'Digital Experience', size: 36, weight: 800 }, { text: zh ? '毛利率 68%' : '68% gross margin', size: 29, color: NOTE }] },
    ] },
    publishing_advertising: { blocks: [
      { x: 442, top: 994, anchor: 'middle', lines: [{ text: '$value', size: 38 }, { text: zh ? '同比 (12%)' : '(12%) Y/Y', size: 29, color: NOTE }] },
      { x: 206, top: 1000, anchor: 'middle', lines: [{ text: zh ? '出版' : 'Publishing', size: 35, weight: 800 }, { text: zh ? '与广告' : '& Advertising', size: 35, weight: 800 }, { text: zh ? '毛利率 68%' : '68% gross margin', size: 29, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 906, top: 454, anchor: 'middle', lines: [{ text: zh ? '收入' : 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '同比 +12%' : '+12% Y/Y', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1373, top: 322, anchor: 'middle', lines: [{ text: zh ? '毛利润' : 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '利润率 87%' : '87% margin', size: 29, color: NOTE }, { text: zh ? '同比持平' : 'Flat Y/Y', size: 29, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1376, top: 1060, anchor: 'middle', lines: [{ text: zh ? '收入' : 'Cost of', size: 36, weight: 800 }, { text: zh ? '成本' : 'revenue', size: 36, weight: 800 }, { text: '$value', size: 34 }] }] },
    operating_profit: { blocks: [{ x: 1833, top: 240, anchor: 'middle', lines: [{ text: zh ? '营业利润' : 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '利润率 35%' : '35% margin', size: 29, color: NOTE }, { text: zh ? '同比 +1 个百分点' : '+1pp Y/Y', size: 29, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1833, top: 903, anchor: 'middle', lines: [{ text: zh ? '营业' : 'Operating', size: 38, weight: 800 }, { text: zh ? '费用' : 'expenses', size: 38, weight: 800 }, { text: '$value', size: 35 }] }] },
    other: { blocks: [{ x: zh ? 2099 : 2094, top: 470, anchor: 'start', lines: [{ text: zh ? '其他' : 'Other', size: 31, weight: 800 }, { text: '$value', size: 30 }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 282, anchor: 'middle', lines: [{ text: zh ? '净利润' : 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 38 }, { text: zh ? '利润率 29%' : '29% margin', size: 28, color: NOTE }, { text: zh ? '同比 +3 个百分点' : '+3pp Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 558, anchor: 'middle', lines: [{ text: zh ? '税费' : 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 758, anchor: 'middle', lines: [{ text: zh ? '销售与市场' : 'S&M', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 27%' : '27% of revenue', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 931, anchor: 'middle', lines: [{ text: zh ? '研发' : 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 18%' : '18% of revenue', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1075, anchor: 'middle', lines: [{ text: zh ? '一般及行政' : 'G&A', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 7%' : '7% of revenue', size: 28, color: NOTE }] }] },
    amortization: { blocks: [{ x: RIGHT_LABEL_X, top: 1206, anchor: 'middle', lines: [{ text: zh ? '摊销' : 'Amortization', size: 29, weight: 800 }, { text: '$value', size: 29 }, { text: zh ? '占收入 1%' : '1% of revenue', size: 28, color: NOTE }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q4-fy23', name: 'Adobe · Q4 FY23', company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q4 FY23 Income Statement', period: 'Q4 FY23', periodNote: 'Ending Nov. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q4-fy23.png', width: 2667, height: 1500 },
      titleY: 200, titleSize: 128, titleTextLength: 2118,
      periodX: 1333, periodY: 1320, periodNoteY: 1364,
      logoWidth: 628, logoHeight: 140, logoY: 249, logoViewBox: '0 0 628 140', logoSvg: adobeLogo,
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
      scale: 60,
      nodes: {
        digital_media: { x: 406, y: 450, width: 71, height: 253 },
        digital_experience: { x: 406, y: 851, width: 71, height: 86 },
        publishing_advertising: { x: 406, y: 1088, width: 71, height: 2 },
        revenue: { x: 873, y: 599, width: 70, height: 344 },
        gross_profit: { x: 1337, y: 504, width: 72, height: 300 },
        cost_of_revenue: { x: 1342, y: 995, width: 72, height: 42 },
        operating_profit: { x: 1798, y: 419, width: 70, height: 117 },
        operating_expenses: { x: 1795, y: 700, width: 70, height: 181 },
        other: { x: 2103, y: 454, width: 70, height: 2 },
        net_profit: { x: 2274, y: 285, width: 71, height: 100 },
        tax: { x: 2274, y: 584, width: 71, height: 20 },
        sm: { x: 2274, y: 755, width: 71, height: 93 },
        rnd: { x: 2274, y: 940, width: 71, height: 59 },
        ga: { x: 2274, y: 1102, width: 71, height: 22 },
        amortization: { x: 2274, y: 1225, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 3.7, notes: ['+13% Y/Y', '94% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.3, notes: ['+10% Y/Y', '68% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, notes: ['(12%) Y/Y', '68% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.0, valueText: '$5.0B', notes: ['+12% Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.4, notes: ['87% margin', 'Flat Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, notes: ['35% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.7 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['29% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 1.4, notes: ['27% of revenue'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.9, notes: ['18% of revenue'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.4, notes: ['7% of revenue'] },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.042, valueText: '($42M)', notes: ['1% of revenue'] },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 3.7, sourceWidth: 253, targetWidth: 252, y0: 576.5, y1: 725, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.3, sourceWidth: 86, targetWidth: 88, y0: 894, y1: 895, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 4, y0: 1089, y1: 941, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.4, sourceWidth: 300, targetWidth: 300, y0: 749, y1: 654, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 44, targetWidth: 42, y0: 921, y1: 1016, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.7, sourceWidth: 117, targetWidth: 117, y0: 562.5, y1: 477.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.7, sourceWidth: 183, targetWidth: 181, y0: 712.5, y1: 790.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 97, targetWidth: 97, y0: 467.5, y1: 333.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 3, y0: 455, y1: 383.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 20, targetWidth: 20, y0: 526, y1: 594, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.4, sourceWidth: 91, targetWidth: 93, y0: 745.5, y1: 801.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 63, targetWidth: 59, y0: 822.5, y1: 969.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 25, targetWidth: 22, y0: 866.5, y1: 1113, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.042, sourceWidth: 2, targetWidth: 2, y0: 880, y1: 1226, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Adobe · 2023 财年第四季度',
        meta: { title: 'Adobe 2023 财年第四季度利润表', period: '2023 财年第四季度', periodNote: '截至 2023 年 11 月', titleTextLength: 2070 },
        annotationsSvg: annotations(true),
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +13%', '毛利率 94%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +10%', '毛利率 68%'] },
          publishing_advertising: { label: ['出版', '与广告'], notes: ['同比 (12%)', '毛利率 68%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] }, gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比持平'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] }, other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 29%', '同比 +3 个百分点'] },
          tax: { label: '税费' }, sm: { label: '销售与市场', notes: ['占收入 27%'] }, rnd: { label: '研发', notes: ['占收入 18%'] },
          ga: { label: '一般及行政', notes: ['占收入 7%'] }, amortization: { label: '摊销', notes: ['占收入 1%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

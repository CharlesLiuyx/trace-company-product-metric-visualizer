/* Adobe Q3 FY23 income statement ($B), measured from the native Source. */
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
    <g transform="translate(${x} ${y})" data-annotation-clearance="adobe-q3-fy23-digital-media-icons">
      <defs><linearGradient id="adobeCcGradientQ3Fy23" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fe0e8e"/><stop offset="35%" stop-color="#fb4300"/>
        <stop offset="65%" stop-color="#f6c500"/><stop offset="100%" stop-color="#55e04d"/>
      </linearGradient></defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeCcGradientQ3Fy23)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.4}" r="${size * 0.19}" fill="none" stroke="#fff" stroke-width="${size * 0.09}"/>
    </g>`;
  const acrobatIcon = (x, y, size = 116) => `
    <g transform="translate(${x} ${y})" data-annotation-clearance="adobe-q3-fy23-acrobat-icon">${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.34},${size * 0.72} C${size * 0.2},${size * 0.62} ${size * 0.22},${size * 0.4} ${size * 0.38},${size * 0.4}
        C${size * 0.5},${size * 0.4} ${size * 0.5},${size * 0.55} ${size * 0.4},${size * 0.6}
        C${size * 0.55},${size * 0.66} ${size * 0.62},${size * 0.5} ${size * 0.72},${size * 0.28}"
        fill="none" stroke="#fff" stroke-width="${size * 0.075}" stroke-linecap="round"/>
    </g>`;
  const adobeAIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})" data-annotation-clearance="adobe-q3-fy23-digital-experience-icon">${appIconRect(size, ADOBE_RED)}
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
      ${kpiCard(34, 1146, 322, 157, zh ? '创意业务 ARR' : 'Creative ARR', '$12.0B', zh ? '同比 +7%' : '+7% Y/Y')}
      ${kpiCard(371, 1146, 437, 157, zh ? '文档云 ARR' : 'Document Cloud ARR', '$2.6B', zh ? '同比 +17%' : '+17% Y/Y')}
      ${kpiCard(822, 1142, 240, 165, 'RPO', '$15.7B', zh ? '同比 +11%' : '+11% Y/Y')}
      <text x="220" y="1340" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">ARR = ${zh ? '年化经常性收入' : 'Annual Recurring Revenue'}</text>
      <text x="121" y="1382" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">RPO = ${zh ? '剩余履约义务' : 'Remaining Performance Obligation'}</text>
      <text x="170" y="1436" text-anchor="start" font-size="30" font-weight="800" fill="#000">${zh ? '来源：' : 'Source: '}<tspan text-decoration="underline">${zh ? '季度业绩' : 'Quarterly results'}</tspan></text>
    </g>`;

  const labels = (zh) => ({
    digital_media: { blocks: [
      { x: 436, top: 348, anchor: 'middle', lines: [{ text: '$value', size: 39 }, { text: zh ? '同比 +11%' : '+11% Y/Y', size: 29, color: NOTE }] },
      { x: 228, top: 584, anchor: 'middle', lines: [{ text: zh ? '数字媒体' : 'Digital Media', size: 38, weight: 800 }, { text: zh ? '毛利率 96%' : '96% gross margin', size: 29, color: NOTE }] },
    ] },
    digital_experience: { blocks: [
      { x: 432, top: 755, anchor: 'middle', lines: [{ text: '$value', size: 39 }, { text: zh ? '同比 +10%' : '+10% Y/Y', size: 29, color: NOTE }] },
      { x: 212, top: 851, anchor: 'middle', lines: [{ text: zh ? '数字体验' : 'Digital Experience', size: 36, weight: 800 }, { text: zh ? '毛利率 68%' : '68% gross margin', size: 29, color: NOTE }] },
    ] },
    publishing_advertising: { blocks: [
      { x: 441, top: 998, anchor: 'middle', lines: [{ text: '$value', size: 38 }, { text: zh ? '同比 (17%)' : '(17%) Y/Y', size: 29, color: NOTE }] },
      { x: 203, top: 1014, anchor: 'middle', lines: [{ text: zh ? '出版' : 'Publishing', size: 35, weight: 800 }, { text: zh ? '与广告' : '& Advertising', size: 35, weight: 800 }, { text: zh ? '毛利率 67%' : '67% gross margin', size: 29, color: NOTE }] },
    ] },
    revenue: { blocks: [{ x: 906, top: 432, anchor: 'middle', lines: [{ text: zh ? '收入' : 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '同比 +10%' : '+10% Y/Y', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1373, top: 322, anchor: 'middle', lines: [{ text: zh ? '毛利润' : 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '利润率 88%' : '88% margin', size: 29, color: NOTE }, { text: zh ? '同比持平' : 'Flat Y/Y', size: 29, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1373, top: 1055, anchor: 'middle', lines: [{ text: zh ? '收入' : 'Cost of', size: 36, weight: 800 }, { text: zh ? '成本' : 'revenue', size: 36, weight: 800 }, { text: '$value', size: 34 }] }] },
    operating_profit: { blocks: [{ x: 1844, top: 240, anchor: 'middle', lines: [{ text: zh ? '营业利润' : 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: zh ? '利润率 35%' : '35% margin', size: 29, color: NOTE }, { text: zh ? '同比 +1 个百分点' : '+1pp Y/Y', size: 29, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1833, top: 918, anchor: 'middle', lines: [{ text: zh ? '营业' : 'Operating', size: 38, weight: 800 }, { text: zh ? '费用' : 'expenses', size: 38, weight: 800 }, { text: '$value', size: 35 }] }] },
    other_income: { blocks: [{ x: 2143, top: 514, anchor: 'start', lines: [{ text: zh ? '其他' : 'Other', size: 31, weight: 800 }, { text: '$value', size: 30 }] }] },
    net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 344, anchor: 'middle', lines: [{ text: zh ? '净利润' : 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 38 }, { text: zh ? '利润率 29%' : '29% margin', size: 28, color: NOTE }, { text: zh ? '同比 (4 个百分点)' : '(4pp) Y/Y', size: 28, color: NOTE }] }] },
    tax: { blocks: [{ x: RIGHT_LABEL_X, top: 613, anchor: 'middle', lines: [{ text: zh ? '税费' : 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 799, anchor: 'middle', lines: [{ text: zh ? '销售与市场' : 'S&M', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 27%' : '27% of revenue', size: 28, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 992, anchor: 'middle', lines: [{ text: zh ? '研发' : 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 18%' : '18% of revenue', size: 28, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1105, anchor: 'middle', lines: [{ text: zh ? '一般及行政' : 'G&A', size: 31, weight: 800 }, { text: '$value', size: 30 }, { text: zh ? '占收入 7%' : '7% of revenue', size: 28, color: NOTE }] }] },
    amortization: { blocks: [{ x: RIGHT_LABEL_X, top: 1250, anchor: 'middle', lines: [{ text: zh ? '摊销' : 'Amortization', size: 29, weight: 800 }, { text: '$value', size: 29 }, { text: zh ? '占收入 1%' : '1% of revenue', size: 28, color: NOTE }] }] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q3-fy23', name: 'Adobe · Q3 FY23', company: 'Adobe',
    meta: {
      company: 'Adobe', title: 'Adobe Q3 FY23 Income Statement', period: 'Q3 FY23', periodNote: 'Ending Aug. 2023',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q3-fy23.png', width: 2667, height: 1500 },
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
      scale: 1,
      nodes: {
        digital_media: { x: 405, y: 441, width: 71, height: 263 },
        digital_experience: { x: 405, y: 850, width: 71, height: 88 },
        publishing_advertising: { x: 405, y: 1090, width: 71, height: 3 },
        revenue: { x: 872, y: 582, width: 70, height: 358 },
        gross_profit: { x: 1339, y: 505, width: 71, height: 315 },
        cost_of_revenue: { x: 1336, y: 998, width: 72, height: 40 },
        operating_profit: { x: 1804, y: 423, width: 70, height: 123 },
        operating_expenses: { x: 1802, y: 706, width: 70, height: 190 },
        other_income: { x: 2149, y: 502, width: 70, height: 1 },
        net_profit: { x: 2273, y: 340, width: 71, height: 101 },
        tax: { x: 2273, y: 637, width: 71, height: 23 },
        sm: { x: 2273, y: 800, width: 71, height: 96 },
        rnd: { x: 2273, y: 981, width: 71, height: 63 },
        ga: { x: 2273, y: 1138, width: 71, height: 23 },
        amortization: { x: 2273, y: 1268, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 3.6, notes: ['+11% Y/Y', '96% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.2, notes: ['+10% Y/Y', '68% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, notes: ['(17%) Y/Y', '67% gross margin'], color: DARK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.9, notes: ['+10% Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.3, notes: ['88% margin', 'Flat Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.7, notes: ['35% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.6 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.046, valueText: '$46M' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.4, notes: ['29% margin', '(4pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 1.3, notes: ['27% of revenue'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.9, notes: ['18% of revenue'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.4, notes: ['7% of revenue'] },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.042, valueText: '($42M)', notes: ['1% of revenue'] },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 3.6, sourceWidth: 263, targetWidth: 265, y0: 572.5, y1: 714.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.2, sourceWidth: 88, targetWidth: 90, y0: 894, y1: 892, sourceOrder: 0, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 3, targetWidth: 3, y0: 1091.5, y1: 938.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.3, sourceWidth: 318, targetWidth: 315, y0: 741, y1: 662.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 40, targetWidth: 40, y0: 920, y1: 1018, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.7, sourceWidth: 125, targetWidth: 123, y0: 567.5, y1: 484.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.6, sourceWidth: 190, targetWidth: 190, y0: 725, y1: 801, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.4, sourceWidth: 100, targetWidth: 99, y0: 473, y1: 389.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.046, sourceWidth: 1, targetWidth: 1, y0: 502.5, y1: 440.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 23, targetWidth: 23, y0: 534.5, y1: 648.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.3, sourceWidth: 96, targetWidth: 96, y0: 754, y1: 848, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 65, targetWidth: 63, y0: 834.5, y1: 1012.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 28, targetWidth: 23, y0: 881, y1: 1149.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.042, sourceWidth: 1, targetWidth: 1, y0: 895.5, y1: 1268.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['RPO'],
      zh: {
        name: 'Adobe · 2023 财年第三季度',
        meta: { title: 'Adobe 2023 财年第三季度利润表', period: '2023 财年第三季度', periodNote: '截至 2023 年 8 月', titleTextLength: 2070 },
        annotationsSvg: annotations(true),
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +11%', '毛利率 96%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +10%', '毛利率 68%'] },
          publishing_advertising: { label: ['出版', '与广告'], notes: ['同比 (17%)', '毛利率 67%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] }, gross_profit: { label: '毛利润', notes: ['利润率 88%', '同比持平'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 29%', '同比 (4 个百分点)'] },
          tax: { label: '税费' }, sm: { label: '销售与市场', notes: ['占收入 27%'] }, rnd: { label: '研发', notes: ['占收入 18%'] },
          ga: { label: '一般及行政', notes: ['占收入 7%'] }, amortization: { label: '摊销', notes: ['占收入 1%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

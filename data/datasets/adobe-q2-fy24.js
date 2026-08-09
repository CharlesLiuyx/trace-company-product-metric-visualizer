/* Adobe Q2 FY24 income statement ($B), measured from the Source image. */
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

  const line = (text, size, weight = 400, color) => ({
    text, size, weight, ...(color ? { color } : {}),
  });
  const block = (x, top, anchor, lines, lineGap = 8) => ({ x, top, anchor, lines, lineGap });

  const adobeFlagMark = `
    <path d="M0,0 L58,0 L0,140 Z" fill="${ADOBE_RED}"/>
    <path d="M102,0 L159,0 L159,137 Z" fill="${ADOBE_RED}"/>
    <path d="M80,50 L93,139 L116,139 Z" fill="${ADOBE_RED}"/>`;

  const adobeLogo = `
    ${adobeFlagMark}
    <text x="214" y="113" font-size="118" font-weight="800"
      fill="${ADOBE_RED}" textLength="331" lengthAdjust="spacingAndGlyphs">Adobe</text>`;

  const appIconRect = (size, fill) => `<rect width="${size}" height="${size}" rx="${size * 0.22}" fill="${fill}"/>`;
  const creativeCloudIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})">
      <defs>
        <linearGradient id="adobeQ2Fy24CcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fe0e8e"/>
          <stop offset="35%" stop-color="#fb4300"/>
          <stop offset="65%" stop-color="#f6c500"/>
          <stop offset="100%" stop-color="#55e04d"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#adobeQ2Fy24CcGradient)"/>
      <circle cx="${size * 0.38}" cy="${size * 0.58}" r="${size * 0.26}"
        fill="none" stroke="#ffffff" stroke-width="${size * 0.09}"/>
      <circle cx="${size * 0.62}" cy="${size * 0.4}" r="${size * 0.19}"
        fill="none" stroke="#ffffff" stroke-width="${size * 0.09}"/>
    </g>`;
  const acrobatIcon = (x, y, size = 116) => `
    <g transform="translate(${x} ${y})">
      ${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.34},${size * 0.72} C${size * 0.2},${size * 0.62} ${size * 0.22},${size * 0.4} ${size * 0.38},${size * 0.4}
        C${size * 0.5},${size * 0.4} ${size * 0.5},${size * 0.55} ${size * 0.4},${size * 0.6}
        C${size * 0.55},${size * 0.66} ${size * 0.62},${size * 0.5} ${size * 0.72},${size * 0.28}"
        fill="none" stroke="#ffffff" stroke-width="${size * 0.075}" stroke-linecap="round"/>
    </g>`;
  const adobeAIcon = (x, y, size = 115) => `
    <g transform="translate(${x} ${y})">
      ${appIconRect(size, ADOBE_RED)}
      <path d="M${size * 0.5},${size * 0.21} L${size * 0.8},${size * 0.765} L${size * 0.66},${size * 0.765}
        L${size * 0.5},${size * 0.44} L${size * 0.34},${size * 0.765} L${size * 0.2},${size * 0.765} Z"
        fill="#ffffff"/>
    </g>`;

  const kpiCard = (x, width, header, value, note) => `
    <g>
      <rect x="${x}" y="1146" width="${width}" height="161" rx="30" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1195" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${header}</text>
      <text x="${x + width / 2}" y="1238" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1278" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = (zh) => `
    <g>
      <g data-annotation-id="digital-media-product-icons">
        ${creativeCloudIcon(105, 452)}
        ${acrobatIcon(228, 452)}
      </g>
      <g data-annotation-id="digital-experience-product-icon">${adobeAIcon(164, 715)}</g>
      ${kpiCard(34, 322, zh ? '创意产品 ARR' : 'Creative ARR', '$13.1B', zh ? '同比 +13%' : '+13% Y/Y')}
      ${kpiCard(371, 437, zh ? '文档云 ARR' : 'Document Cloud ARR', '$3.1B', zh ? '同比 +26%' : '+26% Y/Y')}
      ${kpiCard(822, 240, 'RPO', '$17.9B', zh ? '同比 +17%' : '+17% Y/Y')}
      <text x="221" y="1341" text-anchor="middle" font-size="27" font-weight="500" fill="${NOTE}">
        ${zh ? 'ARR = 年化经常性收入' : 'ARR = Annual Recurring Revenue'}
      </text>
      <text x="158" y="1384" text-anchor="start" font-size="27" font-weight="500" fill="${NOTE}">
        ${zh ? 'RPO = 剩余履约义务' : 'RPO = Remaining Performance Obligation'}
      </text>
    </g>`;

  const labels = (L) => ({
    digital_media: { blocks: [
      block(428, 363, 'middle', [line('$value', 39), line(L.digitalMediaYoy, 29, 400, NOTE)], 7),
      block(222, 586, 'middle', [line(L.digitalMedia, 36, 800), line(L.digitalMediaMargin, 29, 400, NOTE)], 7),
    ] },
    digital_experience: { blocks: [
      block(421, 754, 'middle', [line('$value', 39), line(L.digitalExperienceYoy, 29, 400, NOTE)], 7),
      block(207, 853, 'middle', [line(L.digitalExperience, 36, 800), line(L.digitalExperienceMargin, 29, 400, NOTE)], 7),
    ] },
    publishing_advertising: { blocks: [
      block(438, 988, 'middle', [line('$value', 39), line(L.publishingYoy, 29, 400, NOTE)], 7),
      block(210, 1005, 'middle', [
        line(L.publishing, 34, 800), line(L.advertising, 34, 800), line(L.publishingMargin, 29, 400, NOTE),
      ], 7),
    ] },
    revenue: { blocks: [block(903, 465, 'middle', [
      line(L.revenue, 40, 800), line('$value', 39), line(L.revenueYoy, 29, 400, NOTE),
    ], 8)] },
    gross_profit: { blocks: [block(1358, 336, 'middle', [
      line(L.grossProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line(L.grossMargin, 29, 400, NOTE), line(L.grossYoy, 29, 400, NOTE),
    ], 8)] },
    cost_of_revenue: { blocks: [block(1357, 1066, 'middle', [
      line(L.costOf, 36, 800, RED_LABEL), line(L.revenueWord, 36, 800, RED_LABEL),
      line('$value', 32, 400, RED_LABEL),
    ], 7)] },
    operating_profit: { blocks: [block(1833, 243, 'middle', [
      line(L.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line(L.operatingMargin, 29, 400, NOTE), line(L.operatingYoy, 29, 400, NOTE),
    ], 8)] },
    operating_expenses: { blocks: [block(1834, 912, 'middle', [
      line(L.operating, 36, 800, RED_LABEL), line(L.expenses, 36, 800, RED_LABEL),
      line('$value', 36, 400, RED_LABEL),
    ], 8)] },
    other_income: { blocks: [block(2183, 478, 'middle', [
      line(L.other, 31, 800, GREEN_LABEL), line('$value', 31, 400, GREEN_LABEL),
    ], 7)] },
    net_profit: { blocks: [block(2460, 328, 'middle', [
      line(L.netProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
      line(L.netMargin, 29, 400, NOTE), line(L.netYoy, 29, 400, NOTE),
    ], 8)] },
    tax: { blocks: [block(2460, 572, 'middle', [
      line(L.tax, 31, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL),
    ], 8)] },
    sm: { blocks: [block(2478, 786, 'middle', [
      line(L.sm, 31, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL),
      line(L.smShare, 28, 400, NOTE), line(L.smYoy, 28, 400, NOTE),
    ], 8)] },
    rnd: { blocks: [block(2478, 952, 'middle', [
      line(L.rnd, 31, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL),
      line(L.rndShare, 28, 400, NOTE), line(L.rndYoy, 28, 400, NOTE),
    ], 8)] },
    ga: { blocks: [block(2478, 1120, 'middle', [
      line(L.ga, 31, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL),
      line(L.gaShare, 28, 400, NOTE), line(L.gaYoy, 28, 400, NOTE),
    ], 8)] },
    amortization: { blocks: [block(2478, 1273, 'middle', [
      line(L.amortization, 28, 800, RED_LABEL), line('$value', 29, 400, RED_LABEL),
    ], 8)] },
  });

  const labelsEn = labels({
    digitalMedia: 'Digital Media', digitalMediaYoy: '+11% Y/Y', digitalMediaMargin: '95% gross margin',
    digitalExperience: 'Digital Experience', digitalExperienceYoy: '+9% Y/Y', digitalExperienceMargin: '70% gross margin',
    publishing: 'Publishing', advertising: '& Advertising', publishingYoy: '(11%) Y/Y', publishingMargin: '70% gross margin',
    revenue: 'Revenue', revenueWord: 'revenue', revenueYoy: '+10% Y/Y', grossProfit: 'Gross profit',
    grossMargin: '89% margin', grossYoy: '+1pp Y/Y', costOf: 'Cost of', operatingProfit: 'Operating profit',
    operatingMargin: '36% margin', operatingYoy: '+2pp Y/Y', operating: 'Operating', expenses: 'expenses',
    other: 'Other', netProfit: 'Net profit', netMargin: '30% margin', netYoy: '+3pp Y/Y', tax: 'Tax',
    sm: 'S&M', smShare: '27% of revenue', smYoy: '(1pp) Y/Y', rnd: 'R&D',
    rndShare: '18% of revenue', rndYoy: '+0pp Y/Y', ga: 'G&A',
    gaShare: '7% of revenue', gaYoy: '(1pp) Y/Y', amortization: 'Amortization',
  });
  const labelsZh = labels({
    digitalMedia: '数字媒体', digitalMediaYoy: '同比 +11%', digitalMediaMargin: '毛利率 95%',
    digitalExperience: '数字体验', digitalExperienceYoy: '同比 +9%', digitalExperienceMargin: '毛利率 70%',
    publishing: '出版', advertising: '与广告', publishingYoy: '同比 (11%)', publishingMargin: '毛利率 70%',
    revenue: '收入', revenueWord: '成本', revenueYoy: '同比 +10%', grossProfit: '毛利润',
    grossMargin: '利润率 89%', grossYoy: '同比 +1 个百分点', costOf: '收入', operatingProfit: '营业利润',
    operatingMargin: '利润率 36%', operatingYoy: '同比 +2 个百分点', operating: '营业', expenses: '费用',
    other: '其他', netProfit: '净利润', netMargin: '利润率 30%', netYoy: '同比 +3 个百分点', tax: '税费',
    sm: '销售与市场', smShare: '占收入 27%', smYoy: '同比 (1 个百分点)', rnd: '研发',
    rndShare: '占收入 18%', rndYoy: '同比 +0 个百分点', ga: '一般及行政',
    gaShare: '占收入 7%', gaYoy: '同比 (1 个百分点)', amortization: '摊销',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'adobe-q2-fy24',
    name: 'Adobe · Q2 FY24',
    company: 'Adobe',
    meta: {
      company: 'Adobe',
      title: 'Adobe Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending May 2024',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/adobe-q2-fy24.png', width: 2667, height: 1500 },
      titleY: 204, titleSize: 128, titleTextLength: 2118,
      periodX: 1314, periodY: 1320, periodNoteY: 1366,
      logoWidth: 628, logoHeight: 140, logoY: 249, logoViewBox: '0 0 628 140', logoSvg: adobeLogo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2',
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK }, hub: { node: DARK, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1,
      nodes: {
        digital_media: { x: 400, y: 456, width: 71, height: 221 },
        digital_experience: { x: 400, y: 842, width: 71, height: 74 },
        publishing_advertising: { x: 400, y: 1075, width: 71, height: 2 },
        revenue: { x: 867, y: 615, width: 70, height: 302 },
        gross_profit: { x: 1324, y: 518, width: 71, height: 268 },
        cost_of_revenue: { x: 1324, y: 1011, width: 71, height: 31 },
        operating_profit: { x: 1799, y: 422, width: 70, height: 106 },
        operating_expenses: { x: 1799, y: 728, width: 70, height: 159 },
        other_income: { x: 2147, y: 466, width: 70, height: 1 },
        net_profit: { x: 2268, y: 332, width: 71, height: 87 },
        tax: { x: 2268, y: 598, width: 71, height: 18 },
        sm: { x: 2268, y: 785, width: 71, height: 80 },
        rnd: { x: 2268, y: 972, width: 71, height: 55 },
        ga: { x: 2268, y: 1150, width: 71, height: 17 },
        amortization: { x: 2268, y: 1299, width: 71, height: 5 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'digital_media', col: 0, order: 0, type: 'source', label: 'Digital Media', value: 3.9, valueText: '$3.9B', notes: ['+11% Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'digital_experience', col: 0, order: 1, type: 'source', label: 'Digital Experience', value: 1.3, valueText: '$1.3B', notes: ['+9% Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'publishing_advertising', col: 0, order: 2, type: 'source', label: ['Publishing', '& Advertising'], value: 0.1, valueText: '$0.1B', notes: ['(11%) Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.3, valueText: '$5.3B', notes: ['+10% Y/Y'], color: DARK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 4.7, valueText: '$4.7B', notes: ['89% margin', '+1pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6, valueText: '($0.6B)', color: RED, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.9, valueText: '$1.9B', notes: ['36% margin', '+2pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.8, valueText: '($2.8B)', color: RED, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.045, valueText: '$45M', color: GREEN, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.6, valueText: '$1.6B', notes: ['30% margin', '+3pp Y/Y'], color: GREEN, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.4, valueText: '($0.4B)', color: RED, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 1.4, valueText: '($1.4B)', notes: ['27% of revenue', '(1pp) Y/Y'], color: RED, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1, valueText: '($1.0B)', notes: ['18% of revenue', '+0pp Y/Y'], color: RED, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)', notes: ['7% of revenue', '(1pp) Y/Y'], color: RED, linkTint: RED_LINK },
      { id: 'amortization', col: 5, order: 5, type: 'cost', label: 'Amortization', value: 0.042, valueText: '($42M)', color: RED, linkTint: RED_LINK },
    ],
    links: [
      { source: 'digital_media', target: 'revenue', value: 3.9, sourceWidth: 221, targetWidth: 221, y0: 566.5, y1: 725.5, targetOrder: 0 },
      { source: 'digital_experience', target: 'revenue', value: 1.3, sourceWidth: 74, targetWidth: 77, y0: 879, y1: 874.5, targetOrder: 1 },
      { source: 'publishing_advertising', target: 'revenue', value: 0.1, sourceWidth: 2, targetWidth: 4, y0: 1076, y1: 915, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.7, sourceWidth: 268, targetWidth: 268, y0: 749, y1: 652, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, sourceWidth: 34, targetWidth: 31, y0: 900, y1: 1026.5, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.9, sourceWidth: 107, targetWidth: 106, y0: 571.5, y1: 475, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.8, sourceWidth: 161, targetWidth: 159, y0: 705.5, y1: 807.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 85, targetWidth: 85, y0: 464.5, y1: 374.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 21, targetWidth: 18, y0: 517.5, y1: 607, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.045, sourceWidth: 1, targetWidth: 2, y0: 466.5, y1: 418, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 1.4, sourceWidth: 80, targetWidth: 80, y0: 768, y1: 825, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1, sourceWidth: 55, targetWidth: 55, y0: 835.5, y1: 999.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 17, targetWidth: 17, y0: 871.5, y1: 1158.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'amortization', value: 0.042, sourceWidth: 7, targetWidth: 5, y0: 883.5, y1: 1301.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Adobe · 2024 财年第二季度',
        meta: {
          title: 'Adobe 2024 财年第二季度利润表', period: '2024 财年第二季度',
          periodNote: '截至 2024 年 5 月', titleTextLength: 1850,
        },
        annotationsSvg: annotations(true),
        nodes: {
          digital_media: { label: '数字媒体', notes: ['同比 +11%'] },
          digital_experience: { label: '数字体验', notes: ['同比 +9%'] },
          publishing_advertising: { label: ['出版', '与广告'], notes: ['同比 (11%)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 89%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 36%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +3 个百分点'] }, tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 27%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 +0 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 7%', '同比 (1 个百分点)'] }, amortization: { label: '摊销' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

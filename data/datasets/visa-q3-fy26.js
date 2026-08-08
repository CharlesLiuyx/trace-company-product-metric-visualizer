/* Visa Q3 FY26 income statement ($B), measured against the supplied Source PNG. */
(function () {
  const TITLE = '#155077';
  const NAVY = '#002690';
  const NAVY_LABEL = '#002590';
  const NAVY_LINK = '#8596c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const visaLogo = `
    <defs>
      <linearGradient id="visaQ3Fy26LogoGrad" x1="0" y1="0" x2="1" y2="0.35">
        <stop offset="0%" stop-color="#1c3aa0"/>
        <stop offset="100%" stop-color="#00157a"/>
      </linearGradient>
    </defs>
    <text x="179" y="99" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="132" font-weight="900" font-style="italic" letter-spacing="3"
      fill="url(#visaQ3Fy26LogoGrad)" textLength="352" lengthAdjust="spacingAndGlyphs">VISA</text>
  `;

  const card = (x, y, w, h, names, note) => {
    const cx = x + w / 2;
    const nameEls = names
      .map((text, index) => `<text x="${cx}" y="${y + 56 + index * 33}" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${text}</text>`)
      .join('');
    const noteEl = `<text x="${cx}" y="${y + 56 + names.length * 33}" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${note}</text>`;
    return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="34" fill="${NAVY_LABEL}"/>${nameEls}${noteEl}</g>`;
  };

  const annotations = (text) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      ${card(77, 1189, 203, 147, text.card1, text.card1n)}
      ${card(291, 1188, 290, 148, text.card2, text.card2n)}
      ${card(590, 1189, 291, 147, text.card3, text.card3n)}
    </g>`;

  const nameLines = (lines, size, color) => lines.map((text) => ({ text, size, weight: 700, color }));

  function labels(text, inlineTerminals) {
    const result = {
      revenue: { blocks: [] },
      service: {
        blocks: [
          { x: 399, top: 286, anchor: 'middle', lineGap: 13, lines: [{ text: '$4.9B', size: 38, weight: 400, color: NAVY_LABEL }, { text: text.nService, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 418, anchor: 'middle', lineGap: 11, lines: nameLines(text.service, 36, NAVY_LABEL) },
        ],
      },
      data_processing: {
        blocks: [
          { x: 399, top: 525, anchor: 'middle', lineGap: 13, lines: [{ text: '$6.0B', size: 38, weight: 400, color: NAVY_LABEL }, { text: text.nData, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 647, anchor: 'middle', lineGap: 11, lines: nameLines(text.dataProcessing, 36, NAVY_LABEL) },
        ],
      },
      international: {
        blocks: [
          { x: 400, top: 780, anchor: 'middle', lineGap: 13, lines: [{ text: '$3.9B', size: 38, weight: 400, color: NAVY_LABEL }, { text: text.nInternational, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 870, anchor: 'middle', lineGap: 11, lines: nameLines(text.international, 36, NAVY_LABEL) },
        ],
      },
      other_rev: {
        blocks: [
          { x: 398, top: 979, anchor: 'middle', lineGap: 13, lines: [{ text: '$1.5B', size: 38, weight: 400, color: NAVY_LABEL }, { text: text.nOtherRevenue, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 1069, anchor: 'middle', lineGap: 11, lines: nameLines(text.otherRevenue, 36, NAVY_LABEL) },
        ],
      },
      net_revenue: {
        blocks: [
          { x: 1333, top: 423, anchor: 'middle', lineGap: 7, lines: [...nameLines(text.netRevenue, 36, NAVY_LABEL), { text: '$11.6B', size: 38, weight: 400, color: NAVY_LABEL }, { text: text.nNetRevenue, size: 27, weight: 400, color: NOTE }] },
        ],
      },
      client_incentives: {
        blocks: [
          { x: 1333, top: 1045, anchor: 'middle', lineGap: 11, lines: [...nameLines(text.clientIncentives, 36, RED_LABEL), { text: '($4.7B)', size: 36, weight: 400, color: RED_LABEL }] },
        ],
      },
      operating_profit: {
        blocks: [
          { x: 1807, top: 283, anchor: 'middle', lineGap: 14, lines: [...nameLines(text.operatingProfit, 38, GREEN_LABEL), { text: '$6.9B', size: 38, weight: 400, color: GREEN_LABEL }, { text: text.operatingMargin, size: 27, weight: 400, color: NOTE }, { text: text.operatingPp, size: 27, weight: 400, color: NOTE }] },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1800, top: 938, anchor: 'middle', lineGap: 11, lines: [...nameLines(text.operatingExpenses, 36, RED_LABEL), { text: '($4.8B)', size: 36, weight: 400, color: RED_LABEL }] },
        ],
      },
      net_profit: {
        blocks: [
          { x: 2426, top: 304, anchor: 'middle', lineGap: 13, lines: [...nameLines(text.netProfit, 38, GREEN_LABEL), { text: '$5.6B', size: 38, weight: 400, color: GREEN_LABEL }, { text: text.netMargin, size: 27, weight: 400, color: NOTE }, { text: text.netPp, size: 27, weight: 400, color: NOTE }] },
        ],
      },
      tax: {
        blocks: [
          { x: 2422, top: 492, anchor: 'middle', lineGap: 8, lines: [...nameLines(text.tax, 31, RED_LABEL), { text: '($1.2B)', size: 31, weight: 400, color: RED_LABEL }] },
        ],
      },
      other_ded: {
        blocks: [
          { x: 2422, top: 580, anchor: 'middle', lineGap: 8, lines: [...nameLines(text.otherDeduction, 31, RED_LABEL), { text: '($44M)', size: 31, weight: 400, color: RED_LABEL }] },
        ],
      },
    };

    const terminalRows = [
      ['personnel', text.personnel, '($2.5B)', 716, 2446],
      ['marketing', text.marketing, '($0.6B)', 822, 2453],
      ['general_admin', text.generalAdmin, '($0.5B)', 920, 2533],
      ['da', text.da, '($0.4B)', 1011, 2377],
      ['network', text.network, '($0.3B)', 1097, 2429],
      ['litigation', text.litigation, '($0.3B)', 1184, 2443],
      ['professional_fees', text.professionalFees, '($0.2B)', 1269, 2534],
    ];

    terminalRows.forEach(([id, name, value, top, valueX]) => {
      result[id] = inlineTerminals
        ? {
            blocks: [
              { x: 2320, top, anchor: 'start', lines: [{ text: name, size: 23, weight: 700, color: RED_LABEL }] },
              { x: valueX, top: top - 2, anchor: 'start', lines: [{ text: value, size: 26, weight: 400, color: RED_LABEL }] },
            ],
          }
        : {
            blocks: [
              { x: 2320, top, anchor: 'start', lines: [{ text: `${name} ${value}`, size: 23, weight: 700, color: RED_LABEL }] },
            ],
          };
    });

    return result;
  }

  const EN = {
    service: ['Service'], nService: '+14% Y/Y',
    dataProcessing: ['Data', 'processing'], nData: '+17% Y/Y',
    international: ['International', 'transaction'], nInternational: '+6% Y/Y',
    otherRevenue: ['Other'], nOtherRevenue: '+45% Y/Y',
    netRevenue: ['Net revenue'], nNetRevenue: '+14% Y/Y',
    clientIncentives: ['Client', 'incentives'],
    operatingProfit: ['Operating profit'], operatingMargin: '59% margin', operatingPp: '(2pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'],
    netProfit: ['Net profit'], netMargin: '48% margin', netPp: '(3pp) Y/Y',
    tax: ['Tax'], otherDeduction: ['Other'],
    personnel: 'Personnel', marketing: 'Marketing', generalAdmin: 'General & admin',
    da: 'D&A', network: 'Network', litigation: 'Litigation', professionalFees: 'Professional fees',
    card1: ['Payment', 'Volume'], card1n: '+10% Y/Y',
    card2: ['Cross-Border', 'Volume'], card2n: '+13% Y/Y',
    card3: ['Processed', 'Transactions'], card3n: '+10% Y/Y',
  };

  const ZH = {
    service: ['服务'], nService: '同比 +14%',
    dataProcessing: ['数据', '处理'], nData: '同比 +17%',
    international: ['国际', '交易'], nInternational: '同比 +6%',
    otherRevenue: ['其他'], nOtherRevenue: '同比 +45%',
    netRevenue: ['净收入'], nNetRevenue: '同比 +14%',
    clientIncentives: ['客户', '激励'],
    operatingProfit: ['营业利润'], operatingMargin: '利润率 59%', operatingPp: '同比 -2 个百分点',
    operatingExpenses: ['营业', '费用'],
    netProfit: ['净利润'], netMargin: '利润率 48%', netPp: '同比 -3 个百分点',
    tax: ['税费'], otherDeduction: ['其他'],
    personnel: '人员', marketing: '市场营销', generalAdmin: '综合及行政',
    da: '折旧摊销', network: '网络', litigation: '诉讼', professionalFees: '专业服务费',
    card1: ['支付', '交易额'], card1n: '同比 +10%',
    card2: ['跨境', '交易额'], card2n: '同比 +13%',
    card3: ['处理', '交易笔数'], card3n: '同比 +10%',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'visa-q3-fy26',
    name: 'Visa · Q3 FY26',
    company: 'Visa',
    meta: {
      company: 'Visa',
      title: 'Visa Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/visa-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1332,
      titleY: 190,
      titleSize: 105,
      titleWeight: 800,
      titleTextLength: 1979,
      periodX: 1332,
      periodY: 1258,
      periodNoteY: 1305,
      logoWidth: 358,
      logoHeight: 116,
      logoY: 306,
      logoViewBox: '0 0 358 116',
      logoSvg: visaLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: TITLE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY_LABEL },
        hub: { node: NAVY, label: NAVY_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 36, value: 38, note: 27, lineGap: 13 },
      interfaceAudit: { mode: 'error', fullFaceIds: ['other_ded:left'] },
    },
    annotationsSvg: annotations(EN),
    layout: {
      scale: 22.68,
      nodes: {
        service: { x: 364, y: 383, width: 71, height: 110 },
        data_processing: { x: 364, y: 623, width: 71, height: 136 },
        international: { x: 364, y: 876, width: 71, height: 86 },
        other_rev: { x: 364, y: 1073, width: 71, height: 33 },
        revenue: { x: 831, y: 474, width: 70, height: 370 },
        net_revenue: { x: 1298, y: 562, width: 71, height: 264 },
        client_incentives: { x: 1298, y: 923, width: 71, height: 104 },
        operating_profit: { x: 1766, y: 472, width: 70, height: 156 },
        operating_expenses: { x: 1766, y: 816, width: 70, height: 106 },
        net_profit: { x: 2232, y: 328, width: 71, height: 127 },
        tax: { x: 2232, y: 514, width: 71, height: 25 },
        other_ded: { x: 2232, y: 625, width: 71, height: 1 },
        personnel: { x: 2232, y: 700, width: 71, height: 54 },
        marketing: { x: 2232, y: 832, width: 71, height: 12 },
        general_admin: { x: 2232, y: 933, width: 71, height: 9 },
        da: { x: 2232, y: 1024, width: 71, height: 7 },
        network: { x: 2232, y: 1109, width: 71, height: 5 },
        litigation: { x: 2232, y: 1200, width: 71, height: 3 },
        professional_fees: { x: 2232, y: 1285, width: 71, height: 3 },
      },
      labels: labels(EN, true),
    },
    nodes: [
      { id: 'service', col: 0, order: 0, type: 'source', label: 'Service', value: 4.922, notes: ['+14% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'data_processing', col: 0, order: 1, type: 'source', label: ['Data', 'processing'], value: 6.042, notes: ['+17% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'international', col: 0, order: 2, type: 'source', label: ['International', 'transaction'], value: 3.853, notes: ['+6% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'other_rev', col: 0, order: 3, type: 'source', label: 'Other', value: 1.496, notes: ['+45% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: '', value: 16.313, color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'net_revenue', col: 2, order: 0, type: 'hub', label: 'Net revenue', value: 11.633, notes: ['+14% Y/Y'], color: NAVY, labelColor: NAVY_LABEL, linkTint: NAVY_LINK },
      { id: 'client_incentives', col: 2, order: 1, type: 'cost', label: ['Client', 'incentives'], value: 4.680, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 6.877, notes: ['59% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.756, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 5.628, notes: ['48% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.205, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_ded', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.044, valueText: '($44M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'personnel', col: 5, order: 0, type: 'cost', label: 'Personnel', value: 2.458, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 1, type: 'cost', label: 'Marketing', value: 0.649, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 5, order: 2, type: 'cost', label: 'General & admin', value: 0.503, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 3, type: 'cost', label: 'D&A', value: 0.367, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'network', col: 5, order: 4, type: 'cost', label: 'Network', value: 0.280, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'litigation', col: 5, order: 5, type: 'cost', label: 'Litigation', value: 0.253, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_fees', col: 5, order: 6, type: 'cost', label: 'Professional fees', value: 0.246, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'service', target: 'revenue', value: 4.922, sourceWidth: 110, targetWidth: 112, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_processing', target: 'revenue', value: 6.042, sourceWidth: 136, targetWidth: 137, sourceOrder: 0, targetOrder: 1 },
      { source: 'international', target: 'revenue', value: 3.853, sourceWidth: 86, targetWidth: 87, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_rev', target: 'revenue', value: 1.496, sourceWidth: 33, targetWidth: 34, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'net_revenue', value: 11.633, sourceWidth: 264, targetWidth: 264, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'client_incentives', value: 4.680, sourceWidth: 106, targetWidth: 104, sourceOrder: 1, targetOrder: 0 },
      { source: 'net_revenue', target: 'operating_profit', value: 6.877, sourceWidth: 156, targetWidth: 156, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'net_revenue', target: 'operating_expenses', value: 4.756, sourceWidth: 108, targetWidth: 106, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 5.628, sourceWidth: 129, targetWidth: 127, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.205, sourceWidth: 26, targetWidth: 25, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_ded', value: 0.044, sourceWidth: 1, targetWidth: 1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'personnel', value: 2.458, sourceWidth: 55, targetWidth: 54, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.649, sourceWidth: 14, targetWidth: 12, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_admin', value: 0.503, sourceWidth: 11, targetWidth: 9, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.367, sourceWidth: 8, targetWidth: 7, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'network', value: 0.280, sourceWidth: 6, targetWidth: 5, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'litigation', value: 0.253, sourceWidth: 6, targetWidth: 3, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'professional_fees', value: 0.246, sourceWidth: 6, targetWidth: 3, sourceOrder: 6, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Visa · 2026 财年第三季度',
        meta: {
          title: 'Visa 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 1500,
        },
        annotationsSvg: annotations(ZH),
        nodes: {
          service: { label: '服务', notes: ['同比 +14%'] },
          data_processing: { label: ['数据', '处理'], notes: ['同比 +17%'] },
          international: { label: ['国际', '交易'], notes: ['同比 +6%'] },
          other_rev: { label: '其他', notes: ['同比 +45%'] },
          net_revenue: { label: '净收入', notes: ['同比 +14%'] },
          client_incentives: { label: ['客户', '激励'] },
          operating_profit: { label: '营业利润', notes: ['利润率 59%', '同比 -2 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 48%', '同比 -3 个百分点'] },
          tax: { label: '税费' },
          other_ded: { label: '其他' },
          personnel: { label: '人员' },
          marketing: { label: '市场营销' },
          general_admin: { label: '综合及行政' },
          da: { label: '折旧摊销' },
          network: { label: '网络' },
          litigation: { label: '诉讼' },
          professional_fees: { label: '专业服务费' },
        },
        layout: { labels: labels(ZH, false) },
      },
    },
  });
})();

/* Visa Q1 FY26 income statement ($B), measured against the source PNG. */
(function () {
  const TITLE = '#155377';
  const NAVY = '#00268f';
  const NAVY_LINK = '#8596c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const visaLogo = '<defs><linearGradient id="visaQ1LogoGrad" x1="0" y1="0" x2="1" y2="0.35"><stop offset="0%" stop-color="#1c3aa0"/><stop offset="100%" stop-color="#00157a"/></linearGradient></defs><text x="179" y="99" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="132" font-weight="900" font-style="italic" letter-spacing="3" fill="url(#visaQ1LogoGrad)" textLength="352" lengthAdjust="spacingAndGlyphs">VISA</text>';

  function card(x, y, w, h, names, note) {
    const center = x + w / 2;
    const namesSvg = names.map(function (text, index) {
      return '<text x="' + center + '" y="' + (y + 56 + index * 33) + '" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">' + text + '</text>';
    }).join('');
    return '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="34" fill="' + NAVY + '"/>' + namesSvg + '<text x="' + center + '" y="' + (y + 56 + names.length * 33) + '" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">' + note + '</text></g>';
  }

  function annotations(text) {
    return '<g font-family="Noto Sans,Arial,sans-serif">' +
      card(77, 1189, 203, 147, text.card1, text.card1n) +
      card(291, 1188, 290, 148, text.card2, text.card2n) +
      card(590, 1189, 291, 147, text.card3, text.card3n) +
      '</g>';
  }

  function heading(lines, size, color) {
    return lines.map(function (text) {
      return { text: text, size: size, weight: 700, color: color };
    });
  }

  function makeLabels(text, inlineTerminals) {
    const labels = {
      revenue: { blocks: [] },
      service: {
        blocks: [
          { x: 399, top: 236, anchor: 'middle', lineGap: 13, lines: [{ text: '$4.8B', size: 38, weight: 400, color: NAVY }, { text: text.serviceNote, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 390, anchor: 'middle', lineGap: 11, lines: heading(text.service, 36, NAVY) },
        ],
      },
      data_processing: {
        blocks: [
          { x: 399, top: 500, anchor: 'middle', lineGap: 13, lines: [{ text: '$5.5B', size: 38, weight: 400, color: NAVY }, { text: text.dataProcessingNote, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 633, anchor: 'middle', lineGap: 11, lines: heading(text.dataProcessing, 36, NAVY) },
        ],
      },
      international: {
        blocks: [
          { x: 400, top: 749, anchor: 'middle', lineGap: 13, lines: [{ text: '$3.7B', size: 38, weight: 400, color: NAVY }, { text: text.internationalNote, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 847, anchor: 'middle', lineGap: 11, lines: heading(text.international, 36, NAVY) },
        ],
      },
      other_rev: {
        blocks: [
          { x: 398, top: 996, anchor: 'middle', lineGap: 13, lines: [{ text: '$1.2B', size: 38, weight: 400, color: NAVY }, { text: text.otherRevenueNote, size: 27, weight: 400, color: NOTE }] },
          { x: 192, top: 1084, anchor: 'middle', lineGap: 11, lines: heading(text.otherRevenue, 36, NAVY) },
        ],
      },
      net_revenue: {
        blocks: [
          { x: 1333, top: 443, anchor: 'middle', lineGap: 7, lines: heading(text.netRevenue, 36, NAVY).concat([{ text: '$10.9B', size: 38, weight: 400, color: NAVY }, { text: text.netRevenueNote, size: 27, weight: 400, color: NOTE }]) },
        ],
      },
      client_incentives: {
        blocks: [
          { x: 1333, top: 1144, anchor: 'middle', lineGap: 11, lines: heading(text.clientIncentives, 36, RED_LABEL).concat([{ text: '($4.3B)', size: 36, weight: 400, color: RED_LABEL }]) },
        ],
      },
      operating_profit: {
        blocks: [
          { x: 1800, top: 304, anchor: 'middle', lineGap: 14, lines: heading(text.operatingProfit, 38, GREEN_LABEL).concat([{ text: '$6.7B', size: 38, weight: 400, color: GREEN_LABEL }, { text: text.operatingMargin, size: 27, weight: 400, color: NOTE }, { text: text.operatingYoy, size: 27, weight: 400, color: NOTE }]) },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1800, top: 1002, anchor: 'middle', lineGap: 11, lines: heading(text.operatingExpenses, 36, RED_LABEL).concat([{ text: '($4.2B)', size: 36, weight: 400, color: RED_LABEL }]) },
        ],
      },
      net_profit: {
        blocks: [
          { x: 2423, top: 366, anchor: 'middle', lineGap: 13, lines: heading(text.netProfit, 38, GREEN_LABEL).concat([{ text: '$5.9B', size: 38, weight: 400, color: GREEN_LABEL }, { text: text.netMargin, size: 27, weight: 400, color: NOTE }, { text: text.netYoy, size: 27, weight: 400, color: NOTE }]) },
        ],
      },
      tax: {
        blocks: [
          { x: 2425, top: 679, anchor: 'middle', lineGap: 8, lines: heading(text.tax, 31, RED_LABEL).concat([{ text: '($0.9B)', size: 31, weight: 400, color: RED_LABEL }]) },
        ],
      },
      other_ded: {
        blocks: [
          { x: 2421, top: 773, anchor: 'middle', lineGap: 8, lines: heading(text.otherDeduction, 31, RED_LABEL).concat([{ text: '($0.01B)', size: 31, weight: 400, color: RED_LABEL }]) },
        ],
      },
    };

    [
      ['personnel', text.personnel, '($1.8B)', 914, 2446],
      ['litigation', text.litigation, '($0.7B)', 1012, 2443],
      ['marketing', text.marketing, '($0.4B)', 1087, 2453],
      ['general_admin', text.generalAdmin, '($0.5B)', 1155, 2533],
      ['da', text.da, '($0.3B)', 1221, 2377],
      ['professional_fees', text.professionalFees, '($0.2B)', 1295, 2534],
      ['network', text.network, '($0.2B)', 1361, 2429],
    ].forEach(function (item) {
      const id = item[0];
      const name = item[1];
      const value = item[2];
      const top = item[3];
      const valueX = item[4];
      labels[id] = inlineTerminals
        ? {
            blocks: [
              { x: 2320, top: top, anchor: 'start', lines: [{ text: name, size: 23, weight: 700, color: RED_LABEL }] },
              { x: valueX, top: top - 2, anchor: 'start', lines: [{ text: value, size: 26, weight: 400, color: RED_LABEL }] },
            ],
          }
        : {
            blocks: [
              { x: 2320, top: top, anchor: 'start', lines: [{ text: name + ' ' + value, size: 23, weight: 700, color: RED_LABEL }] },
            ],
          };
    });
    return labels;
  }

  const EN = {
    service: ['Service'], serviceNote: '+13% Y/Y',
    dataProcessing: ['Data', 'processing'], dataProcessingNote: '+17% Y/Y',
    international: ['International', 'transaction'], internationalNote: '+6% Y/Y',
    otherRevenue: ['Other'], otherRevenueNote: '+33% Y/Y',
    netRevenue: ['Net revenue'], netRevenueNote: '+15% Y/Y',
    clientIncentives: ['Client', 'incentives'],
    operatingProfit: ['Operating profit'], operatingMargin: '62% margin', operatingYoy: '(4pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'],
    netProfit: ['Net profit'], netMargin: '54% margin', netYoy: '(0pp) Y/Y',
    tax: ['Tax'], otherDeduction: ['Other'],
    personnel: 'Personnel', litigation: 'Litigation', marketing: 'Marketing', generalAdmin: 'General & admin',
    da: 'D&A', professionalFees: 'Professional fees', network: 'Network',
    card1: ['Payment', 'Volume'], card1n: '+8% Y/Y',
    card2: ['Cross-Border', 'Volume'], card2n: '+11% Y/Y',
    card3: ['Processed', 'Transactions'], card3n: '+9% Y/Y',
  };

  const ZH = {
    service: ['服务'], serviceNote: '同比 +13%',
    dataProcessing: ['数据', '处理'], dataProcessingNote: '同比 +17%',
    international: ['国际', '交易'], internationalNote: '同比 +6%',
    otherRevenue: ['其他'], otherRevenueNote: '同比 +33%',
    netRevenue: ['净收入'], netRevenueNote: '同比 +15%',
    clientIncentives: ['客户', '激励'],
    operatingProfit: ['营业利润'], operatingMargin: '利润率 62%', operatingYoy: '同比 -4 个百分点',
    operatingExpenses: ['营业', '费用'],
    netProfit: ['净利润'], netMargin: '利润率 54%', netYoy: '同比 0 个百分点',
    tax: ['税费'], otherDeduction: ['其他'],
    personnel: '人员', litigation: '诉讼', marketing: '市场营销', generalAdmin: '综合及行政',
    da: '折旧摊销', professionalFees: '专业服务费', network: '网络',
    card1: ['支付', '交易额'], card1n: '同比 +8%',
    card2: ['跨境', '交易额'], card2n: '同比 +11%',
    card3: ['处理', '交易笔数'], card3n: '同比 +9%',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'visa-q1-fy26',
    name: 'Visa · Q1 FY26',
    company: 'Visa',
    meta: {
      company: 'Visa',
      title: 'Visa Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/visa-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1332,
      titleY: 190,
      titleSize: 105,
      titleWeight: 800,
      titleTextLength: 1979,
      periodX: 2410,
      periodY: 212,
      periodNoteY: 260,
      logoWidth: 358,
      logoHeight: 116,
      logoY: 276,
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
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 36, value: 38, note: 27, lineGap: 13 },
      // This real $0.011B terminal intentionally exceeds its proportional
      // height: audit the whole 6px face rather than treating the source
      // screenshot's sub-pixel line as a visual target.
      interfaceAudit: { mode: 'error', fullFaceIds: ['other_ded:left'] },
    },
    annotationsSvg: annotations(EN),
    layout: {
      scale: 28,
      nodes: {
        service: { x: 364, y: 337, width: 71, height: 131 },
        data_processing: { x: 364, y: 592, width: 71, height: 155 },
        international: { x: 364, y: 866, width: 71, height: 100 },
        other_rev: { x: 364, y: 1100, width: 71, height: 32 },
        revenue: { x: 831, y: 491, width: 71, height: 426 },
        net_revenue: { x: 1298, y: 583, width: 71, height: 305 },
        client_incentives: { x: 1298, y: 1010, width: 71, height: 119 },
        operating_profit: { x: 1765, y: 489, width: 71, height: 189 },
        operating_expenses: { x: 1765, y: 868, width: 71, height: 116 },
        net_profit: { x: 2232, y: 354, width: 72, height: 164 },
        tax: { x: 2232, y: 710, width: 72, height: 22 },
        // The SEC-reported $0.011B net non-operating expense is smaller than
        // one SVG pixel at this chart scale. Reserve a six-pixel face so the
        // financially real terminal remains visible and independently auditable.
        other_ded: { x: 2232, y: 808, width: 72, height: 6 },
        personnel: { x: 2232, y: 905, width: 72, height: 48 },
        litigation: { x: 2232, y: 1014, width: 72, height: 17 },
        marketing: { x: 2232, y: 1092, width: 72, height: 13 },
        general_admin: { x: 2232, y: 1164, width: 72, height: 10 },
        da: { x: 2232, y: 1232, width: 72, height: 7 },
        professional_fees: { x: 2232, y: 1310, width: 72, height: 5 },
        network: { x: 2232, y: 1378, width: 72, height: 3 },
      },
      labels: makeLabels(EN, true),
    },
    nodes: [
      { id: 'service', col: 0, order: 0, type: 'source', label: 'Service', value: 4.760, valueText: '$4.8B', notes: ['+13% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'data_processing', col: 0, order: 1, type: 'source', label: ['Data', 'processing'], value: 5.544, valueText: '$5.5B', notes: ['+17% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'international', col: 0, order: 2, type: 'source', label: ['International', 'transaction'], value: 3.652, valueText: '$3.7B', notes: ['+6% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'other_rev', col: 0, order: 3, type: 'source', label: 'Other', value: 1.214, valueText: '$1.2B', notes: ['+33% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: '', value: 15.170, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'net_revenue', col: 2, order: 0, type: 'hub', label: 'Net revenue', value: 10.901, valueText: '$10.9B', notes: ['+15% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'client_incentives', col: 2, order: 1, type: 'cost', label: ['Client', 'incentives'], value: 4.269, valueText: '($4.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 6.737, valueText: '$6.7B', notes: ['62% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.164, valueText: '($4.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 5.853, valueText: '$5.9B', notes: ['54% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.873, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_ded', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.011, valueText: '($0.01B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'personnel', col: 5, order: 0, type: 'cost', label: 'Personnel', value: 1.764, valueText: '($1.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'litigation', col: 5, order: 1, type: 'cost', label: 'Litigation', value: 0.708, valueText: '($0.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing', col: 5, order: 2, type: 'cost', label: 'Marketing', value: 0.410, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 5, order: 3, type: 'cost', label: 'General & admin', value: 0.515, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 4, type: 'cost', label: 'D&A', value: 0.326, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_fees', col: 5, order: 5, type: 'cost', label: 'Professional fees', value: 0.208, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'network', col: 5, order: 6, type: 'cost', label: 'Network', value: 0.233, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'service', target: 'revenue', value: 4.760, sourceWidth: 131, targetWidth: 134, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_processing', target: 'revenue', value: 5.544, sourceWidth: 155, targetWidth: 154, sourceOrder: 0, targetOrder: 1 },
      { source: 'international', target: 'revenue', value: 3.652, sourceWidth: 100, targetWidth: 104, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_rev', target: 'revenue', value: 1.214, sourceWidth: 32, targetWidth: 34, sourceOrder: 0, targetOrder: 3 },
      { source: 'revenue', target: 'net_revenue', value: 10.901, sourceWidth: 306, targetWidth: 305, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'client_incentives', value: 4.269, sourceWidth: 120, targetWidth: 119, sourceOrder: 1, targetOrder: 0 },
      { source: 'net_revenue', target: 'operating_profit', value: 6.737, sourceWidth: 188, targetWidth: 189, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'net_revenue', target: 'operating_expenses', value: 4.164, sourceWidth: 117, targetWidth: 116, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 5.853, sourceWidth: 161, targetWidth: 164, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.873, sourceWidth: 22, targetWidth: 22, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_ded', value: 0.011, sourceWidth: 6, targetWidth: 6, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'personnel', value: 1.764, sourceWidth: 49, targetWidth: 48, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'litigation', value: 0.708, sourceWidth: 19, targetWidth: 17, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.410, sourceWidth: 11, targetWidth: 13, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_admin', value: 0.515, sourceWidth: 14, targetWidth: 10, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.326, sourceWidth: 8, targetWidth: 7, sourceOrder: 4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'professional_fees', value: 0.208, sourceWidth: 6, targetWidth: 5, sourceOrder: 5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'network', value: 0.233, sourceWidth: 9, targetWidth: 3, sourceOrder: 6, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Visa · 2026 财年第一季度',
        meta: {
          title: 'Visa 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1500,
        },
        annotationsSvg: annotations(ZH),
        nodes: {
          service: { label: '服务', notes: ['同比 +13%'] },
          data_processing: { label: ['数据', '处理'], notes: ['同比 +17%'] },
          international: { label: ['国际', '交易'], notes: ['同比 +6%'] },
          other_rev: { label: '其他', notes: ['同比 +33%'] },
          net_revenue: { label: '净收入', notes: ['同比 +15%'] },
          client_incentives: { label: ['客户', '激励'] },
          operating_profit: { label: '营业利润', notes: ['利润率 62%', '同比 -4 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 54%', '同比 0 个百分点'] },
          tax: { label: '税费' },
          other_ded: { label: '其他' },
          personnel: { label: '人员' },
          litigation: { label: '诉讼' },
          marketing: { label: '市场营销' },
          general_admin: { label: '综合及行政' },
          da: { label: '折旧摊销' },
          professional_fees: { label: '专业服务费' },
          network: { label: '网络' },
        },
        layout: { labels: makeLabels(ZH, false) },
      },
    },
  });
})();

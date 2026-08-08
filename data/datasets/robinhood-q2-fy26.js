/* Robinhood — Q2 FY26 income statement ($M), measured against the Source. */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const GREEN = '#00cb00';
  const GREEN_LABEL = '#00ca00';
  const GREEN_DARK = '#008f51';
  const GREEN_NODE = '#2ca02c';
  const GREEN_LINK = '#85e085';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';

  const statCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="1159" width="${width}" height="149" rx="28" fill="${GREEN_LABEL}"/>
      <text x="${x + width / 2}" y="1206" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1242" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1280" text-anchor="middle" font-size="27" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotationsEn = `
    <g>
      ${statCard(41, 345, 'Net deposits', '$21.7B', '+57% Y/Y &amp; +23% Q/Q')}
      ${statCard(397, 345, 'MAU', '14.1M', '+1.3M Y/Y &amp; +0.6M Q/Q')}
      <text x="389" y="1351" font-size="29" font-weight="500" fill="${NOTE}">MAU = Monthly Active Users</text>
    </g>`;

  const annotationsZh = `
    <g>
      ${statCard(41, 345, '净入金', '$21.7B', '同比 +57% &amp; 环比 +23%')}
      ${statCard(397, 345, '月活用户', '14.1M', '同比 +1.3M &amp; 环比 +0.6M')}
      <text x="389" y="1351" font-size="29" font-weight="500" fill="${NOTE}">MAU = 月活跃用户数</text>
    </g>`;

  const labelsEn = {
    options: {
      blocks: [
        { x: 386, top: 333, anchor: 'middle', lineGap: 7, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+29% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 315, top: 444, anchor: 'end', lines: [{ text: 'Options', size: 40, weight: 800 }] },
      ],
    },
    equities: {
      blocks: [
        { x: 387, top: 553, anchor: 'middle', lineGap: 7, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+95% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 303, top: 635, anchor: 'end', lines: [{ text: 'Equities', size: 40, weight: 800 }] },
      ],
    },
    crypto: {
      blocks: [
        { x: 386, top: 708, anchor: 'middle', lineGap: 7, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '(38%) Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 303, top: 792, anchor: 'end', lines: [{ text: 'Crypto', size: 40, weight: 800 }] },
      ],
    },
    other_transactions: {
      blocks: [
        { x: 384, top: 862, anchor: 'middle', lineGap: 7, lines: [
          { text: '$value', size: 40, weight: 400 },
          { text: '+327% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 325, top: 935, anchor: 'end', lineGap: 6, lines: [
          { text: 'Other', size: 40, weight: 800 },
          { text: 'transactions', size: 40, weight: 800 },
        ] },
      ],
    },
    transaction_based: {
      blocks: [{ x: 849, top: 430, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Transaction-based', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+44% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    net_interest: {
      blocks: [{ x: 854, top: 789, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Net interest', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    other_revenue: {
      blocks: [{ x: 850, top: 1058, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Other revenue', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
        { text: '+54% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    revenue: {
      blocks: [{ x: 1312, top: 542, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Revenue', size: 42, weight: 800 },
        { text: '$value', size: 42, weight: 400 },
        { text: '+32% Y/Y', size: 28, weight: 400, color: NOTE },
      ] }],
    },
    pretax_income: {
      blocks: [{ x: 1789, top: 460, anchor: 'middle', lineGap: 9, lines: [
        { text: 'Pretax income', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
      ] }],
    },
    other_income: {
      blocks: [{ x: 1653, top: 801, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Other', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    operating_expenses: {
      blocks: [{ x: 1775, top: 1111, anchor: 'middle', lineGap: 7, lines: [
        { text: 'Operating', size: 38, weight: 800 },
        { text: 'expenses', size: 38, weight: 800 },
        { text: '$value', size: 38, weight: 400 },
      ] }],
    },
    net_profit: {
      blocks: [{ x: 2330, top: 383, anchor: 'start', lineGap: 9, lines: [
        { text: 'Net income', size: 40, weight: 800 },
        { text: '$value', size: 40, weight: 400 },
      ] }],
    },
    tax: {
      blocks: [{ x: 2349, top: 573, anchor: 'start', lines: [
        { text: 'Tax ($136M)', size: 30, weight: 800 },
      ] }],
    },
    technology_development: {
      blocks: [{ x: 2336, top: 717, anchor: 'start', lineGap: 4, lines: [
        { text: 'Technology &', size: 31, weight: 800 },
        { text: 'development', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    ga: {
      blocks: [{ x: 2378, top: 878, anchor: 'start', lineGap: 6, lines: [
        { text: 'G&A', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    operations: {
      blocks: [{ x: 2354, top: 1012, anchor: 'start', lineGap: 6, lines: [
        { text: 'Operations', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    marketing: {
      blocks: [{ x: 2361, top: 1136, anchor: 'start', lineGap: 6, lines: [
        { text: 'Marketing', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
    brokerage_transaction: {
      blocks: [{ x: 2346, top: 1242, anchor: 'start', lineGap: 4, lines: [
        { text: 'Brokerage &', size: 31, weight: 800 },
        { text: 'transaction', size: 31, weight: 800 },
        { text: '$value', size: 31, weight: 400 },
      ] }],
    },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, blocks) => {
    blocks.forEach((lines, blockIndex) => {
      labelsZh[id].blocks[blockIndex].lines.forEach((line, lineIndex) => {
        if (lines[lineIndex] != null) line.text = lines[lineIndex];
      });
    });
  };
  setLines('options', [['$value', '同比 +29%'], ['期权']]);
  setLines('equities', [['$value', '同比 +95%'], ['股票']]);
  setLines('crypto', [['$value', '同比 (38%)'], ['加密资产']]);
  setLines('other_transactions', [['$value', '同比 +327%'], ['其他', '交易']]);
  setLines('transaction_based', [['交易收入', '$value', '同比 +44%']]);
  setLines('net_interest', [['净利息', '$value', '同比 +9%']]);
  setLines('other_revenue', [['其他收入', '$value', '同比 +54%']]);
  setLines('revenue', [['收入', '$value', '同比 +32%']]);
  setLines('pretax_income', [['税前利润', '$value']]);
  setLines('other_income', [['其他', '$value']]);
  setLines('operating_expenses', [['运营', '费用', '$value']]);
  setLines('net_profit', [['净利润', '$value']]);
  setLines('tax', [['税费 ($136M)']]);
  setLines('technology_development', [['技术与', '开发', '$value']]);
  setLines('ga', [['管理费用', '$value']]);
  setLines('operations', [['运营', '$value']]);
  setLines('marketing', [['市场营销', '$value']]);
  setLines('brokerage_transaction', [['经纪与', '交易', '$value']]);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'robinhood-q2-fy26',
    name: 'Robinhood · Q2 FY26',
    company: 'Robinhood',
    meta: {
      company: 'Robinhood',
      title: 'Robinhood Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      hidePeriodStamp: true,
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/robinhood-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1338,
      titleY: 220,
      titleSize: 142,
      titleWeight: 800,
      titleTextLength: 2390,
      logoWidth: 220,
      logoHeight: 250,
      logoY: 247,
      logoViewBox: '0 0 220 250',
      logoSvg: BUSINESS_ICONS.robinhoodFeather || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      noteColor: NOTE,
      palette: {
        source: { node: GREEN, label: GREEN_LABEL },
        hub: { node: GREEN, label: GREEN_LABEL },
        profit: { node: GREEN_NODE, label: GREEN_DARK },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREEN_LINK, hub: null, profit: PROFIT_LINK, cost: RED_LINK },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 28, lineGap: 7 },
    },
    annotationsSvg: annotationsEn,
    nodes: [
      { id: 'options', label: 'Options', value: 342, notes: ['+29% Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'equities', label: 'Equities', value: 129, notes: ['+95% Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'crypto', label: 'Crypto', value: 100, notes: ['(38%) Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'other_transactions', label: ['Other', 'transactions'], value: 205, notes: ['+327% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'transaction_based', label: 'Transaction-based', value: 776, notes: ['+44% Y/Y'], type: 'source', col: 1, order: 0 },
      { id: 'net_interest', label: 'Net interest', value: 389, notes: ['+9% Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'other_revenue', label: 'Other revenue', value: 143, notes: ['+54% Y/Y'], type: 'source', col: 1, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 1308, notes: ['+32% Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'other_income', label: 'Other', value: 135, type: 'profit', col: 3, order: 0 },
      { id: 'pretax_income', label: 'Pretax income', value: 709, type: 'profit', col: 3, order: 1 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 734, valueText: '($734M)', type: 'cost', col: 3, order: 2 },
      { id: 'net_profit', label: 'Net income', value: 573, type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 136, valueText: '($136M)', type: 'cost', col: 4, order: 1 },
      { id: 'technology_development', label: ['Technology &', 'development'], value: 256, valueText: '($256M)', type: 'cost', col: 4, order: 2 },
      { id: 'ga', label: 'G&A', value: 199, valueText: '($199M)', type: 'cost', col: 4, order: 3 },
      { id: 'operations', label: 'Operations', value: 113, valueText: '($113M)', type: 'cost', col: 4, order: 4 },
      { id: 'marketing', label: 'Marketing', value: 104, valueText: '($104M)', type: 'cost', col: 4, order: 5 },
      { id: 'brokerage_transaction', label: ['Brokerage &', 'transaction'], value: 62, valueText: '($62M)', type: 'cost', col: 4, order: 6 },
    ],
    links: [
      { source: 'options', target: 'transaction_based', value: 342, sourceWidth: 75, targetWidth: 78, targetOrder: 0 },
      { source: 'equities', target: 'transaction_based', value: 129, sourceWidth: 20, targetWidth: 21, targetOrder: 1 },
      { source: 'crypto', target: 'transaction_based', value: 100, sourceWidth: 26, targetWidth: 27, targetOrder: 2 },
      { source: 'other_transactions', target: 'transaction_based', value: 205, sourceWidth: 44, targetWidth: 45, targetOrder: 3 },
      { source: 'transaction_based', target: 'revenue', value: 776, sourceWidth: 171, targetWidth: 174, targetOrder: 0 },
      { source: 'net_interest', target: 'revenue', value: 389, sourceWidth: 85, targetWidth: 86, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 143, sourceWidth: 30, targetWidth: 30, targetOrder: 2 },
      { source: 'revenue', target: 'pretax_income', value: 574, sourceWidth: 127, targetWidth: 128, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 734, sourceWidth: 163, targetWidth: 163, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'pretax_income', value: 135, width: 28, sourceOrder: 0, targetOrder: 1 },
      { source: 'pretax_income', target: 'net_profit', value: 573, sourceWidth: 128, targetWidth: 126, sourceOrder: 0, targetOrder: 0 },
      { source: 'pretax_income', target: 'tax', value: 136, sourceWidth: 28, targetWidth: 27, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'technology_development', value: 256, sourceWidth: 57, targetWidth: 55, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 199, sourceWidth: 44, targetWidth: 42, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 113, sourceWidth: 25, targetWidth: 23, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 104, sourceWidth: 23, targetWidth: 22, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'brokerage_transaction', value: 62, sourceWidth: 14, targetWidth: 11, sourceOrder: 4, targetOrder: 0 },
    ],
    layout: {
      scale: 0.22,
      nodes: {
        options: { x: 346, y: 431, width: 71, height: 75 },
        equities: { x: 346, y: 652, width: 71, height: 20 },
        crypto: { x: 346, y: 807, width: 71, height: 26 },
        other_transactions: { x: 346, y: 963, width: 71, height: 44 },
        transaction_based: { x: 813, y: 574, width: 70, height: 171 },
        net_interest: { x: 813, y: 933, width: 70, height: 85 },
        other_revenue: { x: 811, y: 1203, width: 70, height: 30 },
        revenue: { x: 1280, y: 693, width: 71, height: 290 },
        other_income: { x: 1618, y: 755, width: 71, height: 28 },
        pretax_income: { x: 1748, y: 569, width: 70, height: 156 },
        operating_expenses: { x: 1748, y: 933, width: 70, height: 163 },
        net_profit: { x: 2214, y: 371, width: 71, height: 126 },
        tax: { x: 2214, y: 578, width: 71, height: 27 },
        technology_development: { x: 2214, y: 744, width: 71, height: 55 },
        ga: { x: 2214, y: 896, width: 71, height: 42 },
        operations: { x: 2214, y: 1034, width: 71, height: 23 },
        marketing: { x: 2214, y: 1159, width: 71, height: 22 },
        brokerage_transaction: { x: 2214, y: 1291, width: 71, height: 11 },
      },
      labels: labelsEn,
    },
    i18n: {
      zh: {
        name: 'Robinhood · 2026 财年第二季度',
        meta: {
          title: 'Robinhood 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 1830,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          options: { label: '期权', notes: ['同比 +29%'] },
          equities: { label: '股票', notes: ['同比 +95%'] },
          crypto: { label: '加密资产', notes: ['同比 (38%)'] },
          other_transactions: { label: '其他交易', notes: ['同比 +327%'] },
          transaction_based: { label: '交易收入', notes: ['同比 +44%'] },
          net_interest: { label: '净利息', notes: ['同比 +9%'] },
          other_revenue: { label: '其他收入', notes: ['同比 +54%'] },
          revenue: { label: '收入', notes: ['同比 +32%'] },
          other_income: { label: '其他' },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
          technology_development: { label: '技术与开发' },
          ga: { label: '管理费用' },
          operations: { label: '运营' },
          marketing: { label: '市场营销' },
          brokerage_transaction: { label: '经纪与交易' },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

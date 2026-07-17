/* ====================================================================
 * Elastic - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/elastic-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#0779a1';
  const BLUE_LINK = '#88bbcd';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BACKGROUND = '#f2f2f2';
  const RIGHT_LABEL_X = 2428;

  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });

  const elasticLogo = `
    <g transform="translate(6 10) scale(0.87)" stroke="#ffffff" stroke-width="7" stroke-linejoin="round">
      <path d="M88 0C112 -10 149 3 161 29C172 53 158 83 130 104L85 139L40 114L32 65C27 32 50 9 88 0Z" fill="#fcca00"/>
      <path d="M22 24C40 15 62 24 68 45L61 80L22 108C1 95 -6 73 5 52C8 44 14 33 22 24Z" fill="#ef4b93"/>
      <path d="M1 82C16 64 43 62 61 80L52 124L11 156C-9 145 -15 117 1 82Z" fill="#20a8df"/>
      <path d="M53 117L102 137L112 189C92 210 49 209 27 184C4 158 11 127 53 117Z" fill="#2db9ad"/>
      <path d="M116 105L150 73C173 74 192 91 193 115C193 140 173 158 150 161L108 138Z" fill="#0078a8"/>
      <path d="M112 184L118 145L150 161C158 184 145 205 120 207C113 205 109 199 112 184Z" fill="#a6d854"/>
    </g>
    <text x="197" y="136" font-family="Arial,Helvetica,sans-serif" font-size="120" font-weight="400" fill="#000000"
      textLength="315" lengthAdjust="spacingAndGlyphs">elastic</text>
  `;

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1134" width="${width}" height="162" rx="35" fill="${BLUE}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${1134 + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(34, 177, [
        { text: 'DBNE', y: 51, size: 30, weight: 800 },
        { text: '112%', y: 94, size: 32 },
        { text: labels.dbneTrend, y: 137, size: 29 },
      ])}
      ${kpiCard(221, 465, [
        { text: labels.customers, y: 51, size: 30, weight: 800 },
        { text: '1,600', y: 94, size: 32 },
        { text: labels.customerGrowth, y: 137, size: 29 },
      ])}
      <text x="127" y="1342" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    dbneTrend: 'Flat Q/Q',
    customers: 'Customers &gt; $100K',
    customerGrowth: '+13% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Expansion',
  });

  const annotationsZh = annotations({
    dbneTrend: '环比持平',
    customers: '客户 &gt; $100K',
    customerGrowth: '同比 +13%',
    dbnrFootnote: 'DBNR = 基于美元的净扩张率',
  });

  const labelsEn = {
    cloud: { blocks: [
      block(399, 368, [{ text: '$value', size: 39, weight: 400 }, { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE }]),
      block(205, 495, [{ text: 'Cloud', size: 40, weight: 800 }, { text: '49% of revenue', size: 32, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 32, weight: 400, color: NOTE }]),
    ] },
    other_subscription: { blocks: [
      block(399, 751, [{ text: '$value', size: 39, weight: 400 }, { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE }]),
      block(205, 878, [{ text: 'Other', size: 40, weight: 800 }, { text: 'subscription', size: 40, weight: 800 }]),
    ] },
    subscription: { blocks: [block(773, 430, [{ text: 'Subscription', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE }])] },
    service: { blocks: [block(773, 1013, [{ text: 'Service', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE }])] },
    revenue: { blocks: [block(1147, 526, [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE }])] },
    gross_profit: { blocks: [block(1521, 392, [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '76% margin', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }])] },
    cost_of_revenue: { blocks: [block(1521, 1203, [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }])] },
    operating_loss: { blocks: [block(1728, 1068, [{ text: 'Operating', size: 40, weight: 800 }, { text: 'loss', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(2%) margin', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }])] },
    operating_expenses: { blocks: [block(1888, 508, [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }])] },
    sm: { blocks: [block(RIGHT_LABEL_X, 489, [{ text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '41% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE }])] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 823, [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '26% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }])] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1096, [{ text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '11% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }])] },
  };

  const labelsZh = {
    cloud: { blocks: [
      block(399, 368, [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +22%', size: 29, weight: 400, color: NOTE }]),
      block(205, 495, [{ text: '云', size: 40, weight: 800 }, { text: '占收入 49%', size: 32, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 32, weight: 400, color: NOTE }]),
    ] },
    other_subscription: { blocks: [
      block(399, 751, [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +12%', size: 29, weight: 400, color: NOTE }]),
      block(205, 878, [{ text: '其他', size: 40, weight: 800 }, { text: '订阅', size: 40, weight: 800 }]),
    ] },
    subscription: { blocks: [block(773, 430, [{ text: '订阅', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +17%', size: 29, weight: 400, color: NOTE }])] },
    service: { blocks: [block(773, 1013, [{ text: '服务', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +5%', size: 29, weight: 400, color: NOTE }])] },
    revenue: { blocks: [block(1147, 526, [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +16%', size: 29, weight: 400, color: NOTE }])] },
    gross_profit: { blocks: [block(1521, 392, [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 76%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }])] },
    cost_of_revenue: { blocks: [block(1521, 1203, [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }])] },
    operating_loss: { blocks: [block(1728, 1068, [{ text: '营业', size: 40, weight: 800 }, { text: '亏损', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 (2%)', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }])] },
    operating_expenses: { blocks: [block(1888, 508, [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }])] },
    sm: { blocks: [block(RIGHT_LABEL_X, 489, [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 41%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }])] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 823, [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 26%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }])] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1096, [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 11%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }])] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'elastic-q2-fy26',
    name: 'Elastic · Q2 FY26',
    company: 'Elastic',
    meta: {
      company: 'Elastic',
      title: 'Elastic Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/elastic-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 123,
      titleWeight: 700,
      titleTextLength: 2114,
      periodX: 2396,
      periodY: 318,
      periodNoteY: 365,
      logoWidth: 650,
      logoHeight: 210,
      logoY: 230,
      logoViewBox: '0 0 650 210',
      logoSvg: elasticLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        cloud: { x: 364, y: 459, width: 71, height: 189 },
        other_subscription: { x: 364, y: 839, width: 71, height: 175 },
        subscription: { x: 738, y: 571, width: 70, height: 366 },
        service: { x: 738, y: 1157, width: 70, height: 21 },
        revenue: { x: 1112, y: 667, width: 70, height: 390 },
        gross_profit: { x: 1485, y: 570, width: 71, height: 295 },
        cost_of_revenue: { x: 1485, y: 1086, width: 71, height: 92 },
        operating_loss: { x: 1693, y: 1038, width: 70, height: 5 },
        operating_expenses: { x: 1859, y: 665, width: 71, height: 303 },
        sm: { x: 2232, y: 475, width: 71, height: 158 },
        rnd: { x: 2232, y: 824, width: 71, height: 98 },
        ga: { x: 2232, y: 1106, width: 71, height: 42 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'cloud', col: 0, order: 0, type: 'source', label: 'Cloud', value: 206, notes: ['+22% Y/Y', '49% of revenue', '+2pp Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_subscription', col: 0, order: 1, type: 'source', label: 'Other subscription', value: 192, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'subscription', col: 1, order: 0, type: 'source', label: 'Subscription', value: 398, notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'service', col: 1, order: 1, type: 'source', label: 'Service', value: 26, notes: ['+5% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 424, notes: ['+16% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 322, notes: ['76% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 102, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -8, notes: ['(2%) margin', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 330, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 0, type: 'cost', label: 'S&M', value: 174, notes: ['41% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 1, type: 'cost', label: 'R&D', value: 108, notes: ['26% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 2, type: 'cost', label: 'G&A', value: 48, notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'cloud', target: 'subscription', value: 206, width: 189, targetWidth: 191, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_subscription', target: 'subscription', value: 192, width: 175, sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription', target: 'revenue', value: 398, width: 366, targetWidth: 369, sourceOrder: 0, targetOrder: 0 },
      { source: 'service', target: 'revenue', value: 26, width: 21, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 322, width: 295, sourceWidth: 298, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 102, width: 92, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 322, width: 295, targetWidth: 297, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 8, width: 5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 174, width: 158, sourceWidth: 162, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 108, width: 98, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 48, width: 42, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Elastic · 2026 财年第二季度',
        meta: {
          title: 'Elastic 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 10 月',
          titleSize: 112,
          titleTextLength: 2030,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          cloud: { label: '云', notes: ['同比 +22%', '占收入 49%', '同比 +2 个百分点'] },
          other_subscription: { label: '其他订阅', notes: ['同比 +12%'] },
          subscription: { label: '订阅', notes: ['同比 +17%'] },
          service: { label: '服务', notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (1 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 41%', '同比 +2 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 26%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

/* ====================================================================
 * Elastic - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/elastic-q3-fy26.png as a fixed
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
  const DARK = '#000000';
  const RIGHT_LABEL_X = 2410;

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
    <text x="197" y="136" font-family="Arial,Helvetica,sans-serif" font-size="120" font-weight="400" fill="${DARK}"
      textLength="315" lengthAdjust="spacingAndGlyphs">elastic</text>
  `;

  const card = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1134" width="${width}" height="162" rx="35" fill="${BLUE}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${1134 + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="operating_profit">
        <rect x="1859" y="490" width="71" height="5" fill="${GREEN}"/>
        <rect x="1852" y="480" width="85" height="25" fill="${BACKGROUND}" fill-opacity="0" pointer-events="all"/>
      </g>
      ${card(34, 177, [
        { text: 'DBNE', y: 51, size: 30, weight: 800 },
        { text: '112%', y: 94, size: 32 },
        { text: labels.dbneTrend, y: 137, size: 29 },
      ])}
      ${card(221, 465, [
        { text: labels.customers, y: 51, size: 30, weight: 800 },
        { text: '1,660', y: 94, size: 32 },
        { text: labels.customerGrowth, y: 137, size: 29 },
      ])}
      <text x="127" y="1342" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    dbneTrend: 'Flat Q/Q',
    customers: 'Customers &gt; $100K',
    customerGrowth: '+14% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Expansion',
  });

  const annotationsZh = annotations({
    dbneTrend: '环比持平',
    customers: '客户 &gt; $100K',
    customerGrowth: '同比 +14%',
    dbnrFootnote: 'DBNR = 基于美元的净扩张率',
  });

  const zhLayoutLabels = {
    cloud: { blocks: [
      block(399, 372, [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +21%', size: 29, weight: 400, color: NOTE }]),
      block(205, 499, [{ text: '云', size: 40, weight: 800 }, { text: '占收入 49%', size: 32, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 32, weight: 400, color: NOTE }]),
    ] },
    other_subscription: { blocks: [
      block(399, 735, [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +16%', size: 29, weight: 400, color: NOTE }]),
      block(205, 893, [{ text: '其他', size: 40, weight: 800 }, { text: '订阅', size: 40, weight: 800 }]),
    ] },
    subscription: { blocks: [block(773, 431, [{ text: '订阅', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +19%', size: 29, weight: 400, color: NOTE }])] },
    service: { blocks: [block(773, 978, [{ text: '服务', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +1%', size: 29, weight: 400, color: NOTE }])] },
    revenue: { blocks: [block(1147, 513, [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +18%', size: 29, weight: 400, color: NOTE }])] },
    gross_profit: { blocks: [block(1521, 391, [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 76%', size: 29, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE }])] },
    cost_of_revenue: { blocks: [block(1521, 1164, [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }])] },
    operating_profit: { blocks: [block(1894, 310, [{ text: '营业利润', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 0%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }])] },
    operating_expenses: { blocks: [block(1894, 970, [{ text: '营业', size: 40, weight: 800 }, { text: '费用', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }])] },
    tax_benefit: { blocks: [block(2137, 282, [{ text: '税收收益', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
    other: { blocks: [block(2137, 502, [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
    net_profit: { blocks: [block(2410, 360, [{ text: '净利润', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }])] },
    sm: { blocks: [block(RIGHT_LABEL_X, 766, [{ text: '销售与市场', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 39%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }], 'start')] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 1004, [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 25%', size: 29, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE }], 'start')] },
    ga: { blocks: [block(RIGHT_LABEL_X, 1218, [{ text: '管理费用', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 11%', size: 29, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE }], 'start')] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'elastic-q3-fy26',
    name: 'Elastic · Q3 FY26',
    company: 'Elastic',
    meta: {
      company: 'Elastic',
      title: 'Elastic Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/elastic-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 123,
      titleWeight: 700,
      titleTextLength: 2114,
      periodX: 185,
      periodY: 296,
      periodNoteY: 338,
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
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        cloud: { x: 364, y: 463, width: 71, height: 181 },
        other_subscription: { x: 364, y: 825, width: 71, height: 172 },
        subscription: { x: 738, y: 568, width: 70, height: 357 },
        service: { x: 738, y: 1121, width: 70, height: 19 },
        revenue: { x: 1112, y: 654, width: 70, height: 377 },
        gross_profit: { x: 1485, y: 564, width: 71, height: 289 },
        cost_of_revenue: { x: 1485, y: 1050, width: 71, height: 88 },
        operating_profit: { x: 1859, y: 492, width: 71, height: 1 },
        operating_expenses: { x: 1859, y: 659, width: 71, height: 289 },
        tax_benefit: { x: 2102, y: 369, width: 70, height: 3 },
        other: { x: 2102, y: 474, width: 70, height: 3 },
        net_profit: { x: 2232, y: 407, width: 71, height: 6 },
        sm: { x: 2232, y: 756, width: 71, height: 146 },
        rnd: { x: 2232, y: 1022, width: 71, height: 94 },
        ga: { x: 2232, y: 1240, width: 71, height: 41 },
      },
      labels: {
        cloud: { blocks: [
          block(399, 372, [{ text: '$value', size: 39, weight: 400 }, { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE }]),
          block(205, 499, [{ text: 'Cloud', size: 40, weight: 800 }, { text: '49% of revenue', size: 32, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 32, weight: 400, color: NOTE }]),
        ] },
        other_subscription: { blocks: [
          block(399, 735, [{ text: '$value', size: 39, weight: 400 }, { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE }]),
          block(205, 893, [{ text: 'Other', size: 40, weight: 800 }, { text: 'subscription', size: 40, weight: 800 }]),
        ] },
        subscription: { blocks: [block(773, 431, [{ text: 'Subscription', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE }])] },
        service: { blocks: [block(773, 978, [{ text: 'Service', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE }])] },
        revenue: { blocks: [block(1147, 513, [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE }])] },
        gross_profit: { blocks: [block(1521, 391, [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '76% margin', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE }])] },
        cost_of_revenue: { blocks: [block(1521, 1164, [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 36, weight: 400 }])] },
        operating_profit: { blocks: [block(1894, 310, [{ text: 'Operating profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '0% margin', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }])] },
        operating_expenses: { blocks: [block(1894, 970, [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }])] },
        tax_benefit: { blocks: [block(2137, 282, [{ text: 'Tax benefit', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
        other: { blocks: [block(2137, 502, [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }])] },
        net_profit: { blocks: [block(RIGHT_LABEL_X, 360, [{ text: 'Net profit', size: 40, weight: 800 }, { text: '$value', size: 40, weight: 400 }], 'start')] },
        sm: { blocks: [block(RIGHT_LABEL_X, 766, [{ text: 'S&M', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '39% of revenue', size: 29, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE }], 'start')] },
        rnd: { blocks: [block(RIGHT_LABEL_X, 1004, [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '25% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE }], 'start')] },
        ga: { blocks: [block(RIGHT_LABEL_X, 1218, [{ text: 'G&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '11% of revenue', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }], 'start')] },
      },
    },
    nodes: [
      { id: 'cloud', col: 0, order: 0, type: 'source', label: 'Cloud', value: 219, notes: ['+21% Y/Y', '49% of revenue', '+1pp Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_subscription', col: 0, order: 1, type: 'source', label: 'Other subscription', value: 207, notes: ['+16% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'subscription', col: 1, order: 0, type: 'source', label: 'Subscription', value: 426, notes: ['+19% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'service', col: 1, order: 1, type: 'source', label: 'Service', value: 24, notes: ['+1% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 450, notes: ['+18% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 344, notes: ['76% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 106, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1, notes: ['0% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 343, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: 'Tax benefit', value: 2, color: GREEN_LINK, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'profit', label: 'Other', value: 6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sm', col: 6, order: 1, type: 'cost', label: 'S&M', value: 177, notes: ['39% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 114, notes: ['25% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 3, type: 'cost', label: 'G&A', value: 52, notes: ['11% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'cloud', target: 'subscription', value: 219, width: 181, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_subscription', target: 'subscription', value: 207, width: 172, targetWidth: 176, sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription', target: 'revenue', value: 426, width: 357, sourceOrder: 0, targetOrder: 0 },
      { source: 'service', target: 'revenue', value: 24, width: 19, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 344, width: 289, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 106, width: 88, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1, width: 1, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 343, width: 288, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1, width: 1, sourceOrder: 0, targetOrder: 0 },
      { source: 'tax_benefit', target: 'net_profit', value: 2, width: 2, sourceOrder: 0, targetOrder: 1, curve: { c1x: 2188, c1y: 370.5, c2x: 2208, c2y: 409 } },
      { source: 'other', target: 'net_profit', value: 6, width: 3, sourceOrder: 0, targetOrder: 2, curve: { c1x: 2190, c1y: 475.5, c2x: 2208, c2y: 411 } },
      { source: 'operating_expenses', target: 'sm', value: 177, width: 146, sourceWidth: 150, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 114, width: 94, sourceWidth: 98, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 52, width: 41, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Elastic · 2026 财年第三季度',
        meta: {
          title: 'Elastic 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 1 月',
          titleSize: 112,
          titleTextLength: 2030,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          cloud: { label: '云', notes: ['同比 +21%', '占收入 49%', '同比 +1 个百分点'] },
          other_subscription: { label: '其他订阅', notes: ['同比 +16%'] },
          subscription: { label: '订阅', notes: ['同比 +19%'] },
          service: { label: '服务', notes: ['同比 +1%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 0%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          tax_benefit: { label: '税收收益' },
          other: { label: '其他' },
          net_profit: { label: '净利润' },
          sm: { label: '销售与市场', notes: ['占收入 39%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 25%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 +0 个百分点'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();

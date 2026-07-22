/* Teladoc Health Q1 FY26 income statement ($M), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const PURPLE = '#351f65';
  const PURPLE_LINK = '#9d93b2';
  const CYAN = '#10b4dd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2451;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const teladocLogo = `
    <text x="-28" y="84" font-family="Montserrat,Arial,sans-serif" font-size="99" font-weight="800"
      letter-spacing="-8" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${PURPLE}">Teladoc</text>
    <circle cx="298" cy="55" r="15" fill="${CYAN}"/>
    <text x="214" y="149" font-family="Montserrat,Arial,sans-serif" font-size="47" font-weight="700"
      letter-spacing="2" fill="${CYAN}">HEALTH</text>`;

  const card = (x, width, header, value, note, options = {}) => `
    <g>
      <rect x="${x}" y="1183" width="${width}" height="150" rx="${options.radius || 31}" fill="${PURPLE}"/>
      <text x="${x + width / 2}" y="1236" text-anchor="middle" font-size="${options.headerSize || 29}" font-weight="800" fill="#fff">${header}</text>
      <text x="${x + width / 2}" y="1276" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1307" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g data-typography-role="brand">
        <circle cx="181" cy="421" r="75" fill="${CYAN}"/>
        <path d="M181 346A75 75 0 0 0 181 496A47 47 0 0 1 181 402A47 47 0 0 1 181 346Z" fill="${PURPLE}"/>
        <circle cx="181" cy="421" r="42" fill="${BG}"/>
        <text x="181" y="577" text-anchor="middle" font-size="40" font-weight="800" textLength="295" lengthAdjust="spacingAndGlyphs" fill="${PURPLE}">Teladoc Health</text>
      </g>
      <text x="181" y="627" text-anchor="middle" font-size="40" font-weight="800" textLength="301" lengthAdjust="spacingAndGlyphs" fill="${PURPLE}">${isZh ? '整合护理' : 'Integrated Care'}</text>
      <text x="181" y="672" text-anchor="middle" font-size="29" font-weight="500" textLength="275" lengthAdjust="spacingAndGlyphs" fill="${NOTE}">${isZh ? '调整后利润率 14%' : '14% adjusted margin'}</text>

      <g data-typography-role="brand">
        <g transform="translate(157 927)" fill="#5ba545">
          <path d="M0 6C21-9 37-5 49 15C26 25 9 20 0 6Z"/>
          <path d="M50 15C62-5 79-9 100 6C91 20 74 25 50 15Z"/>
          <path d="M26 16C35 24 44 29 50 38" fill="none" stroke="#5ba545" stroke-width="5" stroke-linecap="round"/>
          <path d="M74 16C65 24 56 29 50 38" fill="none" stroke="#5ba545" stroke-width="5" stroke-linecap="round"/>
        </g>
        <text x="21" y="1019" font-size="56" font-weight="800" letter-spacing="-3" fill="#5ba545">better</text>
        <text x="184" y="1019" font-size="56" font-weight="800" letter-spacing="-3" textLength="150" lengthAdjust="spacingAndGlyphs" fill="#666666">help</text>
      </g>
      <text x="181" y="1068" text-anchor="middle" font-size="29" font-weight="500" fill="${NOTE}">${isZh ? '调整后利润率 1%' : '1% adjusted margin'}</text>

      ${card(28, 211, isZh ? '访问量' : 'Visits', '4.4M', isZh ? '同比 (2%)' : '(2%) Y/Y')}
      ${card(250, 500, isZh ? '美国整合护理会员' : 'US Integrated Care Members', '101.2M', isZh ? '同比 (1%)' : '(1%) Y/Y', { headerSize: isZh ? 28 : 29 })}
      ${card(763, 430, isZh ? 'BetterHelp 付费用户' : 'BetterHelp Paying users', '361K', isZh ? '同比 (9%)' : '(9%) Y/Y', { headerSize: isZh ? 27 : 29 })}
    </g>`;

  const labels = {
    integrated_care: { blocks: [block(406.5, 420, [line('$value', 39), line('+2% Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    betterhelp: { blocks: [block(406.5, 876, [line('$value', 39), line('(9%) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    revenue: { blocks: [block(873, 478, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('(2%) Y/Y', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1343, 340, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('68% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    cost_of_revenue: { blocks: [block(1340.5, 1088, [line('Cost of', 36, { weight: 800 }), line('revenue', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_loss: { blocks: [block(1609, 950, [line('Operating', 40, { weight: 800 }), line('loss', 40, { weight: 800 }), line('$value', 39), line('(10%) margin', 29, { color: NOTE }), line('+9pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1810, 478, [line('Operating', 40, { weight: 800 }), line('expenses', 40, { weight: 800 }), line('$value', 39)], { lineGap: 10 })] },
    sales_marketing: { blocks: [block(RIGHT_LABEL_X, 331, [line('Sales &', 31, { weight: 800 }), line('marketing', 31, { weight: 800 }), line('$value', 31), line('33% of revenue', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 555, [line('G&A', 31, { weight: 800 }), line('$value', 31), line('17% of revenue', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    depreciation_amortization: { blocks: [block(RIGHT_LABEL_X, 735, [line('Depreciation &', 31, { weight: 800 }), line('amortization', 31, { weight: 800 }), line('$value', 31), line('15% of revenue', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    technology_development: { blocks: [block(RIGHT_LABEL_X, 957, [line('Technology &', 31, { weight: 800 }), line('development', 31, { weight: 800 }), line('$value', 31), line('11% of revenue', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    other: { blocks: [block(RIGHT_LABEL_X, 1182, [line('Other', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
  };

  const zhLabels = {
    integrated_care: { blocks: [block(406.5, 420, [line('$value', 39), line('同比 +2%', 29, { color: NOTE })], { lineGap: 8 })] },
    betterhelp: { blocks: [block(406.5, 876, [line('$value', 39), line('同比 (9%)', 29, { color: NOTE })], { lineGap: 8 })] },
    revenue: { blocks: [block(873, 478, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 (2%)', 29, { color: NOTE })], { lineGap: 9 })] },
    gross_profit: { blocks: [block(1343, 340, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 68%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    cost_of_revenue: { blocks: [block(1340.5, 1088, [line('收入', 36, { weight: 800 }), line('成本', 36, { weight: 800 }), line('$value', 36)], { lineGap: 12 })] },
    operating_loss: { blocks: [block(1609, 950, [line('营业亏损', 40, { weight: 800 }), line('$value', 39), line('利润率 (10%)', 29, { color: NOTE }), line('同比 +9 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1810, 478, [line('运营', 40, { weight: 800 }), line('费用', 40, { weight: 800 }), line('$value', 39)], { lineGap: 10 })] },
    sales_marketing: { blocks: [block(RIGHT_LABEL_X, 331, [line('销售与', 31, { weight: 800 }), line('市场', 31, { weight: 800 }), line('$value', 31), line('占收入 33%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    ga: { blocks: [block(RIGHT_LABEL_X, 555, [line('一般及', 31, { weight: 800 }), line('行政费用', 31, { weight: 800 }), line('$value', 31), line('占收入 17%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    depreciation_amortization: { blocks: [block(RIGHT_LABEL_X, 735, [line('折旧与', 31, { weight: 800 }), line('摊销', 31, { weight: 800 }), line('$value', 31), line('占收入 15%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { lineGap: 8 })] },
    technology_development: { blocks: [block(RIGHT_LABEL_X, 957, [line('技术与', 31, { weight: 800 }), line('开发', 31, { weight: 800 }), line('$value', 31), line('占收入 11%', 29, { color: NOTE }), line('同比 (0 个百分点)', 29, { color: NOTE })], { lineGap: 8 })] },
    other: { blocks: [block(RIGHT_LABEL_X, 1182, [line('其他', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'teladoc-q1-fy26',
    name: 'Teladoc Health · Q1 FY26',
    company: 'Teladoc Health',
    meta: {
      company: 'Teladoc Health',
      title: 'Teladoc Q1 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/teladoc-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2202,
      logoWidth: 500,
      logoHeight: 160,
      logoY: 276,
      logoViewBox: '0 0 500 160',
      logoSvg: teladocLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: ['revenue:left', 'revenue:right', 'operating_expenses:left', 'operating_expenses:right'],
      },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PURPLE_LINK, hub: PURPLE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: 1,
      nodes: {
        integrated_care: { x: 371, y: 511, width: 71, height: 193 },
        betterhelp: { x: 371, y: 968, width: 71, height: 105 },
        revenue: { x: 838, y: 631, width: 70, height: 300 },
        gross_profit: { x: 1307, y: 520, width: 72, height: 202 },
        cost_of_revenue: { x: 1305, y: 978, width: 71, height: 95 },
        operating_loss: { x: 1583, y: 897, width: 71, height: 28 },
        operating_expenses: { x: 1775, y: 637, width: 70, height: 233 },
        sales_marketing: { x: 2239, y: 335, width: 71, height: 97 },
        ga: { x: 2239, y: 578, width: 71, height: 49 },
        depreciation_amortization: { x: 2239, y: 786, width: 71, height: 44 },
        technology_development: { x: 2239, y: 998, width: 71, height: 31 },
        other: { x: 2239, y: 1211, width: 71, height: 4 },
      },
      labels,
    },
    nodes: [
      { id: 'integrated_care', col: 0, order: 0, type: 'source', label: 'Teladoc Health Integrated Care', value: 395, notes: ['+2% Y/Y', '14% adjusted margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'betterhelp', col: 0, order: 1, type: 'source', label: 'BetterHelp', value: 218, notes: ['(9%) Y/Y', '1% adjusted margin'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 614, notes: ['(2%) Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 416, notes: ['68% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 198, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: ['Operating', 'loss'], value: -62, notes: ['(10%) margin', '+9pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 478, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 5, order: 0, type: 'cost', label: ['Sales &', 'marketing'], value: 203, notes: ['33% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 102, notes: ['17% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation_amortization', col: 5, order: 2, type: 'cost', label: ['Depreciation &', 'amortization'], value: 92, notes: ['15% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_development', col: 5, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 68, notes: ['11% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 4, type: 'cost', label: 'Other', value: 13, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'integrated_care', target: 'revenue', value: 395, sourceWidth: 193, targetWidth: 195, y0: 607.5, y1: 728.5, sourceOrder: 0, targetOrder: 0, linkTint: PURPLE_LINK },
      { source: 'betterhelp', target: 'revenue', value: 218, sourceWidth: 105, targetWidth: 105, y0: 1020.5, y1: 878.5, sourceOrder: 0, targetOrder: 1, linkTint: PURPLE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 416, sourceWidth: 205, targetWidth: 202, y0: 733.5, y1: 621, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 198, sourceWidth: 95, targetWidth: 95, y0: 883.5, y1: 1025.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 416, sourceWidth: 202, targetWidth: 205, y0: 621, y1: 739.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 62, sourceWidth: 28, targetWidth: 28,
        y0: 911, y1: 856, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK,
        curve: { x0: 1654, x1: 1775, c1x: 1695, c1y: 911, c2x: 1730, c2y: 856 },
      },
      { source: 'operating_expenses', target: 'sales_marketing', value: 203, sourceWidth: 100, targetWidth: 97, y0: 687, y1: 383.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 102, sourceWidth: 51, targetWidth: 49, y0: 762.5, y1: 602.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 92, sourceWidth: 46, targetWidth: 44, y0: 811, y1: 808, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_development', value: 68, sourceWidth: 32, targetWidth: 31, y0: 850, y1: 1013.5, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'other', value: 13, sourceWidth: 4, targetWidth: 4, y0: 868, y1: 1213, sourceOrder: 4, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      preservedAnnotationText: ['better', 'help'],
      zh: {
        name: 'Teladoc Health · 2026 财年第一季度',
        meta: { title: 'Teladoc 2026 财年第一季度利润表', period: '', periodNote: '', titleSize: 110, titleTextLength: 1640 },
        annotationsSvg: annotations(true),
        nodes: {
          integrated_care: { label: 'Teladoc Health 整合护理', notes: ['同比 +2%', '调整后利润率 14%'] },
          betterhelp: { label: 'BetterHelp', notes: ['同比 (9%)', '调整后利润率 1%'] },
          revenue: { label: '收入', notes: ['同比 (2%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (10%)', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' },
          sales_marketing: { label: '销售与市场', notes: ['占收入 33%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政费用', notes: ['占收入 17%', '同比 (1 个百分点)'] },
          depreciation_amortization: { label: '折旧与摊销', notes: ['占收入 15%', '同比 +1 个百分点'] },
          technology_development: { label: '技术与开发', notes: ['占收入 11%', '同比 (0 个百分点)'] },
          other: { label: '其他' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();

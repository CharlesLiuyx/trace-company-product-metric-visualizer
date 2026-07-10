/* The Trade Desk Q4 FY25 income statement ($M), reconstructed from the
 * processed reference with fixed SVG Sankey geometry. */
(function () {
  const BACKGROUND = '#f2f2f2';
  const NOTE = '#707070';
  const TITLE = '#15557d';
  const BLUE = '#1097e8';
  const BLUE_LINK = '#91c8ed';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f4a';
  const GREEN_LINK = '#9bce9b';
  const RED = '#d50000';
  const RED_LABEL = '#971300';
  const RED_LINK = '#e18486';
  const SCALE = 0.477;
  const RIGHT_LABEL_X = 2470;

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

  const tradeDeskLogo = `
    <g fill="${BLUE}">
      <circle cx="125" cy="125" r="91" fill="none" stroke="${BLUE}" stroke-width="39" stroke-dasharray="447 125" transform="rotate(-45 125 125)"/>
      <path d="M65 0h120v48h-36v113h-48V48H65z"/>
      <rect x="101" y="161" width="48" height="89"/>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <svg x="42" y="690" width="250" height="250" viewBox="0 0 250 250" overflow="visible">${tradeDeskLogo}</svg>
      <g>
        <rect x="165" y="1268" width="543" height="72" rx="36" fill="${BLUE}"/>
        <text x="436.5" y="1316" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${isZh ? '客户留存率 > 95%' : 'Customer retention > 95%'}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other_income">
        <rect x="2048" y="445" width="102" height="108" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <line x1="2048" y1="464" x2="2145" y2="464" stroke="${GREEN_LINK}" stroke-width="5"/>
        <text x="2100" y="510" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${isZh ? '其他' : 'Other'}</text>
        <text x="2100" y="549" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$13M</text>
      </g>
    </g>`;

  const labelsEn = {
    revenue: { blocks: [block(376.5, 488, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+14% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1001.5, 322, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('81% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })])] },
    platform_operations: { blocks: [block(1001.5, 1178, [line('Platform', 36, { weight: 800 }), line('operations', 36, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1625.5, 236, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('30% margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1625.5, 954, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other_income: { blocks: [] },
    net_profit: { blocks: [block(2350, 330, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('22% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 596, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(RIGHT_LABEL_X, 786, [line('Sales & marketing', 31, { weight: 800 }), line('$value', 29), line('21% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    technology_development: { blocks: [block(RIGHT_LABEL_X, 964, [line('Technology &', 31, { weight: 800 }), line('development', 31, { weight: 800 }), line('$value', 29), line('15% of revenue', 28, { color: NOTE }), line('(2pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(RIGHT_LABEL_X, 1174, [line('General & admin', 31, { weight: 800 }), line('$value', 29), line('14% of revenue', 28, { color: NOTE }), line('(3pp) Y/Y', 28, { color: NOTE }), line('Includes SBC for CEO', 26, { color: NOTE }), line('performance ($10M)', 26, { color: NOTE })], { lineGap: 7 })] },
  };

  const labelsZh = {
    revenue: { blocks: [block(376.5, 488, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +14%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1001.5, 322, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 81%', 29, { color: NOTE }), line('同比 (1 个百分点)', 29, { color: NOTE })])] },
    platform_operations: { blocks: [block(1001.5, 1178, [line('平台运营', 36, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1625.5, 236, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 30%', 29, { color: NOTE }), line('同比 +4 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1625.5, 954, [line('营业费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other_income: { blocks: [] },
    net_profit: { blocks: [block(2350, 330, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 22%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(RIGHT_LABEL_X, 596, [line('税费', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(RIGHT_LABEL_X, 786, [line('销售与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 21%', 28, { color: NOTE }), line('同比 +0 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    technology_development: { blocks: [block(RIGHT_LABEL_X, 964, [line('技术与', 31, { weight: 800 }), line('开发', 31, { weight: 800 }), line('$value', 29), line('占收入 15%', 28, { color: NOTE }), line('同比 (2 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(RIGHT_LABEL_X, 1174, [line('一般与行政', 31, { weight: 800 }), line('$value', 29), line('占收入 14%', 28, { color: NOTE }), line('同比 (3 个百分点)', 28, { color: NOTE }), line('包含 CEO 绩效相关', 26, { color: NOTE }), line('股权激励（$10M）', 26, { color: NOTE })], { lineGap: 7 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'the-trade-desk-q4-fy25',
    name: 'The Trade Desk · Q4 FY25',
    company: 'The Trade Desk',
    meta: {
      company: 'The Trade Desk',
      title: 'The Trade Desk Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/the-trade-desk-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2470,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations(false),
    layout: {
      scale: SCALE,
      nodes: {
        revenue: { x: 341, y: 634, width: 71, height: 404 },
        gross_profit: { x: 966, y: 519, width: 71, height: 327 },
        platform_operations: { x: 966, y: 1080, width: 71, height: 78 },
        operating_profit: { x: 1590, y: 429, width: 71, height: 123 },
        operating_expenses: { x: 1590, y: 726, width: 71, height: 208 },
        other_income: { x: 2075, y: 461, width: 70, height: 6 },
        net_profit: { x: 2215, y: 332, width: 71, height: 91 },
        tax: { x: 2215, y: 605, width: 71, height: 41 },
        sales_marketing: { x: 2215, y: 795, width: 71, height: 84 },
        technology_development: { x: 2215, y: 980, width: 71, height: 63 },
        general_admin: { x: 2215, y: 1158, width: 71, height: 59 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'revenue', col: 0, order: 0, type: 'hub', label: 'Revenue', value: 846, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 1, order: 0, type: 'profit', label: 'Gross profit', value: 684, notes: ['81% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'platform_operations', col: 1, order: 1, type: 'cost', label: ['Platform', 'operations'], value: 163, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 257, notes: ['30% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 427, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 13, color: BACKGROUND, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 187, notes: ['22% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 83, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 2, type: 'cost', label: 'Sales & marketing', value: 174, notes: ['21% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_development', col: 4, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 131, notes: ['15% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 4, order: 4, type: 'cost', label: 'General & admin', value: 123, notes: ['14% of revenue', '(3pp) Y/Y', 'Includes SBC for CEO performance ($10M)'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'revenue', target: 'gross_profit', value: 684, sourceWidth: 326, targetWidth: 326, y0: 797, y1: 682, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'platform_operations', value: 163, sourceWidth: 78, targetWidth: 78, y0: 999, y1: 1119, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 257, sourceWidth: 123, targetWidth: 123, y0: 580.5, y1: 490.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 427, sourceWidth: 202, targetWidth: 205, y0: 743, y1: 828.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 174, sourceWidth: 83, targetWidth: 83, y0: 470.5, y1: 373.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 83, sourceWidth: 40, targetWidth: 39, y0: 532, y1: 626.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 13, sourceWidth: 6, targetWidth: 8, y0: 464, y1: 419, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { c1x: 2160, c1y: 464, c2x: 2186, c2y: 419 } },
      { source: 'operating_expenses', target: 'sales_marketing', value: 174, sourceWidth: 84, targetWidth: 84, y0: 768, y1: 837, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_development', value: 131, sourceWidth: 63, targetWidth: 63, y0: 841.5, y1: 1011.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'general_admin', value: 123, sourceWidth: 59, targetWidth: 59, y0: 902.5, y1: 1187.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'The Trade Desk · 2025 财年第四季度',
        meta: { title: 'The Trade Desk 2025 财年第四季度利润表', titleSize: 112, titleTextLength: 1970 },
        annotationsSvg: annotations(true),
        nodes: {
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 81%', '同比 (1 个百分点)'] },
          platform_operations: { label: '平台运营' },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 +4 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          sales_marketing: { label: '销售与营销', notes: ['占收入 21%', '同比 +0 个百分点'] },
          technology_development: { label: '技术与开发', notes: ['占收入 15%', '同比 (2 个百分点)'] },
          general_admin: { label: '一般与行政', notes: ['占收入 14%', '同比 (3 个百分点)', '包含 CEO 绩效相关的股权激励（$10M）'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

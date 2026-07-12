/* The Trade Desk Q1 FY26 income statement ($M), reconstructed from the
 * processed reference with measured fixed SVG Sankey geometry. */
(function () {
  const BACKGROUND = '#f2f2f2';
  const NOTE = '#666';
  const TITLE = '#155077';
  const BLUE = '#0099fa';
  const BLUE_LINK = '#85d0f1';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const SCALE = 0.557;
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
    <g>
      <g data-typography-role="brand"><svg x="34" y="700" width="276" height="258" viewBox="0 0 250 250" preserveAspectRatio="none" overflow="visible">${tradeDeskLogo}</svg></g>
      <g>
        <rect x="165" y="1265" width="544" height="72" rx="36" fill="#009afc"/>
        <text x="438.5" y="1314" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${isZh ? '客户留存率 > 95%' : 'Customer retention > 95%'}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other_income">
        <rect x="2048" y="445" width="102" height="108" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <text x="2100" y="510" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${isZh ? '其他' : 'Other'}</text>
        <text x="2100" y="549" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$12M</text>
      </g>
    </g>`;

  const labelsEn = {
    revenue: { blocks: [block(386.5, 480, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+12% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1004, 367, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('74% margin', 29, { color: NOTE }), line('(3pp) Y/Y', 29, { color: NOTE })])] },
    platform_operations: { blocks: [block(1012, 1134, [line('Platform', 36, { weight: 800 }), line('operations', 36, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1627, 287, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('10% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1631, 954, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other_income: { blocks: [] },
    net_profit: { blocks: [block(2355, 323, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('6% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(2446, 579, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(2465, 731, [line('Sales & marketing', 31, { weight: 800 }), line('$value', 29), line('25% of revenue', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    technology_development: { blocks: [block(2460, 916, [line('Technology &', 31, { weight: 800 }), line('development', 31, { weight: 800 }), line('$value', 29), line('21% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(2452, 1140, [line('General & admin', 31, { weight: 800 }), line('$value', 29), line('18% of revenue', 28, { color: NOTE }), line('(3pp) Y/Y', 28, { color: NOTE }), line('Includes SBC for CEO', 26, { color: NOTE }), line('performance ($5M)', 26, { color: NOTE })], { lineGap: 7 })] },
  };

  const labelsZh = {
    revenue: { blocks: [block(386.5, 480, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +12%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1004, 367, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 74%', 29, { color: NOTE }), line('同比 (3 个百分点)', 29, { color: NOTE })])] },
    platform_operations: { blocks: [block(1012, 1134, [line('平台运营', 36, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1627, 287, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 10%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1631, 954, [line('营业费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other_income: { blocks: [] },
    net_profit: { blocks: [block(2355, 323, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 6%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(2446, 579, [line('税费', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(2465, 731, [line('销售与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 25%', 28, { color: NOTE }), line('同比 +0 个百分点', 28, { color: NOTE })], { lineGap: 8 })] },
    technology_development: { blocks: [block(2460, 916, [line('技术与', 31, { weight: 800 }), line('开发', 31, { weight: 800 }), line('$value', 29), line('占收入 21%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(2452, 1140, [line('一般与行政', 31, { weight: 800 }), line('$value', 29), line('占收入 18%', 28, { color: NOTE }), line('同比 (3 个百分点)', 28, { color: NOTE }), line('包含 CEO 绩效相关', 26, { color: NOTE }), line('股权激励（$5M）', 26, { color: NOTE })], { lineGap: 7 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'the-trade-desk-q1-fy26',
    name: 'The Trade Desk · Q1 FY26',
    company: 'The Trade Desk',
    meta: {
      company: 'The Trade Desk',
      title: 'The Trade Desk Q1 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/the-trade-desk-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 196,
      titleSize: 116,
      titleWeight: 800,
      titleTextLength: 2489,
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
        revenue: { x: 344, y: 632, width: 71, height: 385 },
        gross_profit: { x: 966, y: 559, width: 72, height: 282 },
        platform_operations: { x: 966, y: 1020, width: 72, height: 100 },
        operating_profit: { x: 1589, y: 479, width: 72, height: 36 },
        operating_expenses: { x: 1589, y: 696, width: 72, height: 245 },
        other_income: { x: 2052, y: 461, width: 71, height: 5 },
        net_profit: { x: 2212, y: 389, width: 71, height: 20 },
        tax: { x: 2212, y: 605, width: 71, height: 20 },
        sales_marketing: { x: 2212, y: 744, width: 71, height: 94 },
        technology_development: { x: 2212, y: 949, width: 71, height: 78 },
        general_admin: { x: 2212, y: 1138, width: 71, height: 67 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'revenue', col: 0, order: 0, type: 'hub', label: 'Revenue', value: 689, notes: ['+12% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 1, order: 0, type: 'profit', label: 'Gross profit', value: 507, notes: ['74% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'platform_operations', col: 1, order: 1, type: 'cost', label: ['Platform', 'operations'], value: 182, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 67, notes: ['10% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 440, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 12, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 40, notes: ['6% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 39, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 2, type: 'cost', label: 'Sales & marketing', value: 172, notes: ['25% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_development', col: 4, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 142, notes: ['21% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 4, order: 4, type: 'cost', label: 'General & admin', value: 125, notes: ['18% of revenue', '(3pp) Y/Y', 'Includes SBC for CEO performance ($5M)'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'revenue', target: 'gross_profit', value: 507, sourceWidth: 282, targetWidth: 282, y0: 773, y1: 700, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'platform_operations', value: 182, sourceWidth: 103, targetWidth: 100, y0: 965.5, y1: 1070, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 67, sourceWidth: 37, targetWidth: 36, y0: 577.5, y1: 497, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 440, sourceWidth: 245, targetWidth: 245, y0: 718.5, y1: 818.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 28, sourceWidth: 16, targetWidth: 15, y0: 487, y1: 396.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 39, sourceWidth: 20, targetWidth: 20, y0: 505, y1: 615, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 12, sourceWidth: 5, targetWidth: 5, y0: 463.5, y1: 406.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { c1x: 2138, c1y: 463.5, c2x: 2183, c2y: 406.5 } },
      { source: 'operating_expenses', target: 'sales_marketing', value: 172, sourceWidth: 96, targetWidth: 94, y0: 744, y1: 791, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_development', value: 142, sourceWidth: 79, targetWidth: 78, y0: 831.5, y1: 988, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'general_admin', value: 125, sourceWidth: 70, targetWidth: 67, y0: 906, y1: 1171.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'The Trade Desk · 2026 财年第一季度',
        meta: { title: 'The Trade Desk 2026 财年第一季度利润表', titleSize: 112, titleTextLength: 1970 },
        annotationsSvg: annotations(true),
        nodes: {
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (3 个百分点)'] },
          platform_operations: { label: '平台运营' },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          sales_marketing: { label: '销售与营销', notes: ['占收入 25%', '同比 +0 个百分点'] },
          technology_development: { label: '技术与开发', notes: ['占收入 21%', '同比 (1 个百分点)'] },
          general_admin: { label: '一般与行政', notes: ['占收入 18%', '同比 (3 个百分点)', '包含 CEO 绩效相关的股权激励（$5M）'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

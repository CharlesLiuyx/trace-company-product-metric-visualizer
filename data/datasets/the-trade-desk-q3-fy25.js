/* The Trade Desk Q3 FY25 income statement ($M), reconstructed from the
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
  const SCALE = 0.522;

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
        <rect x="166" y="1265" width="542" height="72" rx="36" fill="#009afc"/>
        <text x="437" y="1314" text-anchor="middle" font-size="30" font-weight="800" fill="#fff">${isZh ? '客户留存率 > 95%' : 'Customer retention > 95%'}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other_income">
        <rect x="2045" y="477" width="122" height="92" fill="#fff" fill-opacity="0" pointer-events="all"/>
        <text x="2101" y="513" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${isZh ? '其他' : 'Other'}</text>
        <text x="2101" y="556" text-anchor="middle" font-size="30" fill="${GREEN_LABEL}">$18M</text>
      </g>
    </g>`;

  const labelsEn = {
    revenue: { blocks: [block(386.5, 484, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+18% Y/Y', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1004, 359, [line('Gross profit', 40, { weight: 800 }), line('$value', 39), line('78% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })])] },
    platform_operations: { blocks: [block(1012, 1146, [line('Platform', 36, { weight: 800 }), line('operations', 36, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1635.5, 266, [line('Operating profit', 40, { weight: 800 }), line('$value', 39), line('22% margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1631, 974, [line('Operating', 36, { weight: 800 }), line('expenses', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other_income: { blocks: [] },
    net_profit: { blocks: [block(2355, 332, [line('Net profit', 40, { weight: 800 }), line('$value', 39), line('16% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(2446, 598, [line('Tax', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(2465, 794, [line('Sales & marketing', 31, { weight: 800 }), line('$value', 29), line('21% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    technology_development: { blocks: [block(2460, 960, [line('Technology &', 31, { weight: 800 }), line('development', 31, { weight: 800 }), line('$value', 29), line('17% of revenue', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(2460.5, 1170, [line('General & admin', 31, { weight: 800 }), line('$value', 29), line('18% of revenue', 28, { color: NOTE }), line('(4pp) Y/Y', 28, { color: NOTE }), line('Includes SBC for CEO', 26, { color: NOTE }), line('performance ($14M)', 26, { color: NOTE })], { lineGap: 7 })] },
  };

  const labelsZh = {
    revenue: { blocks: [block(386.5, 484, [line('收入', 40, { weight: 800 }), line('$value', 39), line('同比 +18%', 29, { color: NOTE })])] },
    gross_profit: { blocks: [block(1004, 359, [line('毛利润', 40, { weight: 800 }), line('$value', 39), line('利润率 78%', 29, { color: NOTE }), line('同比 (2 个百分点)', 29, { color: NOTE })])] },
    platform_operations: { blocks: [block(1012, 1146, [line('平台运营', 36, { weight: 800 }), line('$value', 34)], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1635.5, 266, [line('营业利润', 40, { weight: 800 }), line('$value', 39), line('利润率 22%', 29, { color: NOTE }), line('同比 +5 个百分点', 29, { color: NOTE })])] },
    operating_expenses: { blocks: [block(1631, 974, [line('营业费用', 36, { weight: 800 }), line('$value', 34)], { lineGap: 9 })] },
    other_income: { blocks: [] },
    net_profit: { blocks: [block(2355, 332, [line('净利润', 40, { weight: 800 }), line('$value', 39), line('利润率 16%', 29, { color: NOTE }), line('同比 +1 个百分点', 29, { color: NOTE })], { anchor: 'start' })] },
    tax: { blocks: [block(2446, 598, [line('税费', 31, { weight: 800 }), line('$value', 29)], { lineGap: 8 })] },
    sales_marketing: { blocks: [block(2465, 794, [line('销售与营销', 31, { weight: 800 }), line('$value', 29), line('占收入 21%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    technology_development: { blocks: [block(2460, 960, [line('技术与', 31, { weight: 800 }), line('开发', 31, { weight: 800 }), line('$value', 29), line('占收入 17%', 28, { color: NOTE }), line('同比 (1 个百分点)', 28, { color: NOTE })], { lineGap: 8 })] },
    general_admin: { blocks: [block(2460.5, 1170, [line('一般与行政', 31, { weight: 800 }), line('$value', 29), line('占收入 18%', 28, { color: NOTE }), line('同比 (4 个百分点)', 28, { color: NOTE }), line('包含 CEO 绩效相关', 26, { color: NOTE }), line('股权激励（$14M）', 26, { color: NOTE })], { lineGap: 7 })] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'the-trade-desk-q3-fy25',
    name: 'The Trade Desk · Q3 FY25',
    company: 'The Trade Desk',
    meta: {
      company: 'The Trade Desk',
      title: 'The Trade Desk Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/the-trade-desk-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 116,
      titleWeight: 800,
      titleTextLength: 2484,
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
        revenue: { x: 344, y: 627, width: 71, height: 394 },
        gross_profit: { x: 966, y: 543, width: 72, height: 307 },
        platform_operations: { x: 974, y: 1036, width: 71, height: 85 },
        operating_profit: { x: 1589, y: 453, width: 72, height: 84 },
        operating_expenses: { x: 1589, y: 731, width: 72, height: 220 },
        other_income: { x: 2065, y: 459, width: 71, height: 8 },
        net_profit: { x: 2207, y: 369, width: 71, height: 60 },
        tax: { x: 2212, y: 604, width: 71, height: 33 },
        sales_marketing: { x: 2212, y: 811, width: 71, height: 81 },
        technology_development: { x: 2212, y: 1026, width: 71, height: 66 },
        general_admin: { x: 2212, y: 1240, width: 71, height: 67 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'revenue', col: 0, order: 0, type: 'hub', label: 'Revenue', value: 739, notes: ['+18% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 1, order: 0, type: 'profit', label: 'Gross profit', value: 577, notes: ['78% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'platform_operations', col: 1, order: 1, type: 'cost', label: ['Platform', 'operations'], value: 162, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 2, order: 0, type: 'profit', label: 'Operating profit', value: 161, notes: ['22% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 2, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 416, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 18, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 115, notes: ['16% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 64, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 4, order: 2, type: 'cost', label: 'Sales & marketing', value: 157, notes: ['21% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'technology_development', col: 4, order: 3, type: 'cost', label: ['Technology &', 'development'], value: 128, notes: ['17% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_admin', col: 4, order: 4, type: 'cost', label: 'General & admin', value: 131, notes: ['18% of revenue', '(4pp) Y/Y', 'Includes SBC for CEO performance ($14M)'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'revenue', target: 'gross_profit', value: 577, sourceWidth: 309, targetWidth: 307, y0: 781.5, y1: 696.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'platform_operations', value: 162, sourceWidth: 85, targetWidth: 85, y0: 978.5, y1: 1078.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 161, sourceWidth: 85, targetWidth: 84, y0: 585.5, y1: 495, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 416, sourceWidth: 222, targetWidth: 220, y0: 739, y1: 841, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 97, sourceWidth: 50, targetWidth: 50, y0: 478, y1: 394, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 64, sourceWidth: 33, targetWidth: 33, y0: 520.5, y1: 620.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 18, sourceWidth: 8, targetWidth: 10, y0: 463, y1: 424, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { c1x: 2150, c1y: 463, c2x: 2180, c2y: 424 } },
      { source: 'operating_expenses', target: 'sales_marketing', value: 157, sourceWidth: 83, targetWidth: 81, y0: 772.5, y1: 851.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'technology_development', value: 128, sourceWidth: 68, targetWidth: 66, y0: 848, y1: 1059, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'general_admin', value: 131, sourceWidth: 69, targetWidth: 67, y0: 916.5, y1: 1273.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'The Trade Desk · 2025 财年第三季度',
        meta: { title: 'The Trade Desk 2025 财年第三季度利润表', titleSize: 112, titleTextLength: 1970 },
        annotationsSvg: annotations(true),
        nodes: {
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 (2 个百分点)'] },
          platform_operations: { label: '平台运营' },
          operating_profit: { label: '营业利润', notes: ['利润率 22%', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sales_marketing: { label: '销售与营销', notes: ['占收入 21%', '同比 (1 个百分点)'] },
          technology_development: { label: '技术与开发', notes: ['占收入 17%', '同比 (1 个百分点)'] },
          general_admin: { label: '一般与行政', notes: ['占收入 18%', '同比 (4 个百分点)', '包含 CEO 绩效相关的股权激励（$14M）'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

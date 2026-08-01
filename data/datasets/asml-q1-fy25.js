/* ASML Q1 FY25 income statement (€B), reconstructed as a fixed SVG Sankey. */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8c95c4';
  const ORANGE = '#ff7f45';
  const ORANGE_LINK = '#f7bda4';
  const BLUE = '#1c7ddb';
  const BLUE_LINK = '#92bce8';
  const DRY_GREEN = '#34b233';
  const DRY_LINK = '#99cd99';
  const YELLOW = '#fcd12a';
  const YELLOW_LABEL = '#ffa400';
  const YELLOW_LINK = '#f6e298';
  const LIGHT_BLUE = '#86cdf3';
  const LIGHT_BLUE_LINK = '#c1e1f2';
  const PROFIT_GREEN = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#757575';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1221" y="385" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="446" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q1-fy25',
    name: 'ASML · Q1 FY25',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Mar. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2070,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: PROFIT_GREEN, label: PROFIT_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: PROFIT_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 44.5,
      nodes: {
        euv: { x: 437, y: 420, width: 71, height: 143 },
        arfi: { x: 437, y: 674, width: 71, height: 84 },
        arf_dry: { x: 437, y: 873, width: 71, height: 4 },
        krf: { x: 437, y: 993, width: 71, height: 10 },
        i_line: { x: 437, y: 1120, width: 71, height: 3 },
        metrology_inspection: { x: 437, y: 1232, width: 71, height: 6 },
        net_system_sales: { x: 813, y: 620, width: 70, height: 257 },
        installed_base_management: { x: 813, y: 1062, width: 70, height: 87 },
        revenue: { x: 1185, y: 711, width: 70, height: 347 },
        gross_profit: { x: 1556, y: 615, width: 70, height: 187 },
        cost_of_sales: { x: 1559, y: 994, width: 70, height: 158 },
        operating_profit: { x: 1935, y: 534, width: 70, height: 121 },
        operating_expenses: { x: 1937, y: 847, width: 71, height: 62 },
        other: { x: 2183, y: 607, width: 72, height: 3 },
        net_profit: { x: 2305, y: 438, width: 72, height: 102 },
        tax: { x: 2305, y: 746, width: 72, height: 19 },
        rnd: { x: 2305, y: 930, width: 72, height: 50 },
        sga: { x: 2305, y: 1208, width: 72, height: 10 },
      },
      labels: {
        euv: { blocks: [
          { x: 472, top: 365, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: ORANGE }] },
          { x: 397, top: 450, anchor: 'end', lineGap: 15, lines: [
            { text: 'EUV', size: 40, weight: 800, color: ORANGE },
            { text: 'Extreme Ultraviolet', size: 30, weight: 400, color: NOTE },
          ] },
        ] },
        arfi: { blocks: [
          { x: 469, top: 619, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }] },
          { x: 397, top: 672, anchor: 'end', lineGap: 15, lines: [
            { text: 'ArFi', size: 40, weight: 800, color: BLUE },
            { text: 'Argon Fluoride immersion', size: 30, weight: 400, color: NOTE },
          ] },
        ] },
        arf_dry: { blocks: [
          { x: 474, top: 818, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: DRY_GREEN }] },
          { x: 397, top: 836, anchor: 'end', lineGap: 15, lines: [
            { text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN },
            { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        krf: { blocks: [
          { x: 472, top: 938, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: NAVY }] },
          { x: 397, top: 959, anchor: 'end', lineGap: 15, lines: [
            { text: 'KrF', size: 38, weight: 800, color: NAVY },
            { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE },
          ] },
        ] },
        i_line: { blocks: [
          { x: 469, top: 1065, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: '#e2c230' }] },
          { x: 397, top: 1097, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: '#e2c230' }] },
        ] },
        metrology_inspection: { blocks: [
          { x: 469, top: 1177, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: LIGHT_BLUE }] },
          { x: 397, top: 1188, anchor: 'end', lineGap: 7, lines: [
            { text: 'Metrology', size: 39, weight: 800, color: LIGHT_BLUE },
            { text: '& Inspection', size: 39, weight: 800, color: LIGHT_BLUE },
          ] },
        ] },
        net_system_sales: { blocks: [{ x: 848, top: 423, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Net system', size: 41, weight: 800 },
          { text: 'sales', size: 41, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+45% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        installed_base_management: { blocks: [{ x: 847, top: 1172, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
          { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
          { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
          { text: '+51% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        revenue: { blocks: [{ x: 1219, top: 564, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Net sales', size: 42, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+46% Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1591, top: 431, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Gross profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '54% margin', size: 29, weight: 400, color: NOTE },
          { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        cost_of_sales: { blocks: [{ x: 1590, top: 1172, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Cost of sales', size: 38, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1971, top: 351, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Operating profit', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '35% margin', size: 29, weight: 400, color: NOTE },
          { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1971, top: 929, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'expenses', size: 38, weight: 800 },
          { text: '$value', size: 36, weight: 400 },
        ] }] },
        other: { blocks: [{ x: 2222, top: 626, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other gains', size: 31, weight: 800, color: PROFIT_LABEL },
          { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
        ] }] },
        net_profit: { blocks: [{ x: 2402, top: 422, anchor: 'start', lineGap: 10, lines: [
          { text: 'Net profit', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '30% margin', size: 29, weight: 400, color: NOTE },
          { text: '+7pp Y/Y', size: 29, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2498, top: 727, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2498, top: 925, anchor: 'middle', lineGap: 8, lines: [
          { text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
        sga: { blocks: [{ x: 2495, top: 1178, anchor: 'middle', lineGap: 8, lines: [
          { text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
        ] }] },
      },
    },
    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 3.2, notes: ['Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 1.9, notes: ['Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.3, notes: ['Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, color: YELLOW, labelColor: '#e2c230', linkTint: YELLOW_LINK },
      { id: 'metrology_inspection', col: 0, order: 5, type: 'source', label: ['Metrology', '& Inspection'], value: 0.2, color: LIGHT_BLUE, labelColor: LIGHT_BLUE, linkTint: LIGHT_BLUE_LINK },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 5.7, notes: ['+45% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 2.0, valueText: '€2.0B', notes: ['+51% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 7.7, notes: ['+46% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.2, notes: ['54% margin', '+3pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.7, notes: ['35% margin', '+9pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other gains', value: 0.049, valueText: '€49M', color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 2.3, notes: ['30% margin', '+7pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'euv', target: 'net_system_sales', value: 3.2, sourceWidth: 143, targetWidth: 144, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 1.9, sourceWidth: 84, targetWidth: 85, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 6, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.3, sourceWidth: 10, targetWidth: 12, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, sourceWidth: 3, targetWidth: 2, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.2, sourceWidth: 6, targetWidth: 8, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 5.7, sourceWidth: 257, targetWidth: 257, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 2.0, sourceWidth: 87, targetWidth: 90, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 4.2, sourceWidth: 187, targetWidth: 187, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 3.6, sourceWidth: 160, targetWidth: 158, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 121, targetWidth: 121, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, sourceWidth: 66, targetWidth: 62, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 101, targetWidth: 99, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.049, sourceWidth: 3, targetWidth: 3, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 20, targetWidth: 19, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.2, sourceWidth: 52, targetWidth: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 10, targetWidth: 10, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'ASML · 2025 财年第一季度',
        meta: { title: 'ASML 2025 财年第一季度利润表', period: '2025 财年第一季度', periodNote: '截至 2025 年 3 月' },
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外'] },
          arfi: { label: 'ArFi', notes: ['氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式'] },
          krf: { label: 'KrF', notes: ['氟化氪'] },
          i_line: { label: 'I-line' },
          metrology_inspection: { label: '量测与检测' },
          net_system_sales: { label: '系统净销售额', notes: ['同比 +45%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +51%'] },
          revenue: { label: '净销售额', notes: ['同比 +46%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +3 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            other: { blocks: [{ x: 2222, top: 626, anchor: 'middle', lineGap: 8, lines: [
              { text: '其他收益', size: 31, weight: 800, color: PROFIT_LABEL },
              { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
            ] }] },
            sga: { blocks: [{ x: 2508, top: 1178, anchor: 'middle', lineGap: 8, lines: [
              { text: '销售、一般及行政', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 },
            ] }] },
          },
        },
      },
    },
  });
})();

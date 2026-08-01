/* ASML · Q3 FY25 income statement (€B), reconstructed from the Source PNG. */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8c95c4';
  const ORANGE = '#ff7f45';
  const ORANGE_LINK = '#f7bda4';
  const BLUE = '#1c7ddb';
  const BLUE_LINK = '#92bce8';
  const DRY_GREEN = '#34b233';
  const DRY_LINK = '#9ed39e';
  const YELLOW = '#fcd12a';
  const YELLOW_LABEL = '#ffa400';
  const YELLOW_LINK = '#f6e298';
  const LIGHT_BLUE = '#86cef4';
  const LIGHT_BLUE_LINK = '#c1e1f2';
  const PROFIT_GREEN = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1220" y="387" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q3-fy25',
    name: 'ASML · Q3 FY25',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1331,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2066,
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
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: PROFIT_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 50,
      nodes: {
        euv: { x: 435, y: 458, width: 71, height: 103 },
        arfi: { x: 435, y: 670, width: 71, height: 143 },
        arf_dry: { x: 435, y: 922, width: 71, height: 8 },
        krf: { x: 435, y: 1039, width: 71, height: 10 },
        i_line: { x: 435, y: 1149, width: 71, height: 5 },
        metrology_inspection: { x: 435, y: 1241, width: 71, height: 13 },
        net_system_sales: { x: 809, y: 623, width: 70, height: 277 },
        installed_base_management: { x: 809, y: 1102, width: 70, height: 96 },
        revenue: { x: 1183, y: 708, width: 70, height: 375 },
        gross_profit: { x: 1556, y: 618, width: 71, height: 192 },
        cost_of_sales: { x: 1556, y: 989, width: 71, height: 180 },
        operating_profit: { x: 1930, y: 543, width: 71, height: 122 },
        operating_expenses: { x: 1930, y: 824, width: 71, height: 69 },
        other: { x: 2193, y: 616, width: 70, height: 3 },
        net_profit: { x: 2303, y: 463, width: 71, height: 105 },
        tax: { x: 2303, y: 749, width: 71, height: 20 },
        rnd: { x: 2303, y: 927, width: 71, height: 53 },
        sga: { x: 2303, y: 1212, width: 71, height: 14 },
      },
      labels: {
        euv: {
          blocks: [
            { x: 470, top: 398, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: ORANGE }] },
            { x: 397, top: 465, anchor: 'end', lineGap: 15, lines: [
              { text: 'EUV', size: 40, weight: 800, color: ORANGE },
              { text: 'Extreme Ultraviolet', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        arfi: {
          blocks: [
            { x: 470, top: 612, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }] },
            { x: 397, top: 697, anchor: 'end', lineGap: 15, lines: [
              { text: 'ArFi', size: 40, weight: 800, color: BLUE },
              { text: 'Argon Fluoride immersion', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        arf_dry: {
          blocks: [
            { x: 470, top: 867, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: DRY_GREEN }] },
            { x: 397, top: 884, anchor: 'end', lineGap: 15, lines: [
              { text: 'ArF Dry', size: 38, weight: 800, color: '#34b133' },
              { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        krf: {
          blocks: [
            { x: 470, top: 983, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: NAVY }] },
            { x: 397, top: 1001, anchor: 'end', lineGap: 15, lines: [
              { text: 'KrF', size: 38, weight: 800, color: NAVY },
              { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        i_line: {
          blocks: [
            { x: 470, top: 1092, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: '#e2c230' }] },
            { x: 397, top: 1126, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: '#e2c230' }] },
          ],
        },
        metrology_inspection: {
          blocks: [
            { x: 470, top: 1187, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: '#86cdf3' }] },
            { x: 397, top: 1200, anchor: 'end', lineGap: 7, lines: [
              { text: 'Metrology', size: 39, weight: 800, color: '#86cdf3' },
              { text: '& Inspection', size: 39, weight: 800, color: '#86cdf3' },
            ] },
          ],
        },
        net_system_sales: {
          blocks: [{ x: 844, top: 420, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Net system', size: 41, weight: 800 },
            { text: 'sales', size: 41, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        installed_base_management: {
          blocks: [{ x: 844, top: 1214, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
            { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
            { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
            { text: '+27% Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        revenue: {
          blocks: [{ x: 1218, top: 555, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Net sales', size: 42, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        gross_profit: {
          blocks: [{ x: 1592, top: 426, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '52% margin', size: 29, weight: 400, color: NOTE },
            { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        cost_of_sales: {
          blocks: [{ x: 1592, top: 1184, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Cost of sales', size: 38, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ] }],
        },
        operating_profit: {
          blocks: [{ x: 1966, top: 355, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Operating profit', size: 39, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '33% margin', size: 29, weight: 400, color: NOTE },
            { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        operating_expenses: {
          blocks: [{ x: 1966, top: 906, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Operating', size: 38, weight: 800 },
            { text: 'expenses', size: 38, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ] }],
        },
        other: {
          blocks: [{ x: 2230, top: 632, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other gains', size: 31, weight: 800, color: PROFIT_LABEL },
            { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
          ] }],
        },
        net_profit: {
          blocks: [{ x: 2402, top: 462, anchor: 'start', lineGap: 10, lines: [
            { text: 'Net profit', size: 39, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '28% margin', size: 29, weight: 400, color: NOTE },
            { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        tax: {
          blocks: [{ x: 2491, top: 723, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
        rnd: {
          blocks: [{ x: 2491, top: 921, anchor: 'middle', lineGap: 8, lines: [
            { text: 'R&D', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
        sga: {
          blocks: [{ x: 2491, top: 1180, anchor: 'middle', lineGap: 8, lines: [
            { text: 'SG&A', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
      },
    },

    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 2.1, notes: ['Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 2.9, notes: ['Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'], color: DRY_GREEN, labelColor: '#34b133', linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.2, notes: ['Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, color: YELLOW, labelColor: '#e2c230', linkTint: YELLOW_LINK },
      { id: 'metrology_inspection', col: 0, order: 5, type: 'source', label: ['Metrology', '& Inspection'], value: 0.2, color: LIGHT_BLUE, labelColor: '#86cdf3', linkTint: LIGHT_BLUE_LINK },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 5.6, notes: ['(6%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 2.0, valueText: '€2.0B', notes: ['+27% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 7.5, notes: ['+1% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.9, notes: ['52% margin', '+1pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, notes: ['33% margin', '+0pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other gains', value: 0.1, color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 2.1, notes: ['28% margin', '+0pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'euv', target: 'net_system_sales', value: 2.1, sourceWidth: 103, targetWidth: 104, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 2.9, sourceWidth: 143, targetWidth: 144, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.1, sourceWidth: 8, targetWidth: 6, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.2, sourceWidth: 10, targetWidth: 9, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, sourceWidth: 5, targetWidth: 4, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.2, sourceWidth: 13, targetWidth: 10, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 5.6, sourceWidth: 277, targetWidth: 279, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 2.0, width: 96, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.9, sourceWidth: 195, targetWidth: 192, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 3.6, sourceWidth: 180, targetWidth: 180, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 123, targetWidth: 122, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, width: 69, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.1, sourceWidth: 102, targetWidth: 102, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.1, width: 3, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.4, width: 20, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 55, targetWidth: 53, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 14, targetWidth: 14, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2025 财年第三季度',
        meta: {
          title: 'ASML 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
        },
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外'] },
          arfi: { label: 'ArFi', notes: ['氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式'] },
          krf: { label: 'KrF', notes: ['氟化氪'] },
          i_line: { label: 'I-line' },
          metrology_inspection: { label: '量测与检测' },
          net_system_sales: { label: '系统净销售额', notes: ['同比 (6%)'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +27%'] },
          revenue: { label: '净销售额', notes: ['同比 +1%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +0 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            other: {
              blocks: [{ x: 2230, top: 632, anchor: 'middle', lineGap: 8, lines: [
                { text: '其他收益', size: 31, weight: 800, color: PROFIT_LABEL },
                { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
              ] }],
            },
            sga: {
              blocks: [{ x: 2508, top: 1180, anchor: 'middle', lineGap: 8, lines: [
                { text: '销售、一般及行政', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ] }],
            },
          },
        },
      },
    },
  });
})();

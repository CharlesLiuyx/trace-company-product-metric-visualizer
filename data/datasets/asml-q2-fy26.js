/* ====================================================================
 * ASML - Q2 FY26 income statement (€B)
 * Reconstructed from input/processed/asml-q2-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8d97c7';
  const ORANGE = '#ff7f45';
  const ORANGE_LINK = '#f7bda4';
  const BLUE = '#1c7ddb';
  const BLUE_LINK = '#92bce8';
  const DRY_GREEN = '#34b133';
  const DRY_LINK = '#a8d9a4';
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
  const NOTE = '#666666';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1221" y="385" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="446" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  const valueAbove = (x, top, color) => ({
    x, top, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color }],
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q2-fy26',
    name: 'ASML · Q2 FY26',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q2-fy26.png', width: 2667, height: 1500 },
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
      scale: 44.6,
      nodes: {
        euv: { x: 437, y: 444, width: 71, height: 192 },
        arfi: { x: 437, y: 755, width: 71, height: 65 },
        arf_dry: { x: 437, y: 931, width: 71, height: 4 },
        krf: { x: 437, y: 1039, width: 71, height: 16 },
        i_line: { x: 437, y: 1159, width: 71, height: 5 },
        metrology_inspection: { x: 437, y: 1264, width: 71, height: 7 },
        net_system_sales: { x: 811, y: 638, width: 70, height: 291 },
        installed_base_management: { x: 811, y: 1105, width: 70, height: 121 },
        revenue: { x: 1185, y: 712, width: 70, height: 415 },
        gross_profit: { x: 1558, y: 637, width: 71, height: 223 },
        cost_of_sales: { x: 1558, y: 1036, width: 71, height: 190 },
        operating_profit: { x: 1932, y: 548, width: 71, height: 153 },
        operating_expenses: { x: 1932, y: 886, width: 71, height: 69 },
        other: { x: 2198, y: 632, width: 70, height: 1 },
        net_profit: { x: 2305, y: 448, width: 71, height: 129 },
        tax: { x: 2305, y: 757, width: 71, height: 25 },
        rnd: { x: 2305, y: 980, width: 71, height: 54 },
        sga: { x: 2305, y: 1259, width: 71, height: 11 },
      },
      labels: {
        euv: { blocks: [valueAbove(467, 389, ORANGE), { x: 390, top: 497, anchor: 'end', lineGap: 15, lines: [{ text: 'EUV', size: 40, weight: 800, color: ORANGE }, { text: 'Extreme Ultraviolet', size: 29, weight: 400, color: NOTE }] }] },
        arfi: { blocks: [valueAbove(474, 700, BLUE), { x: 397, top: 744, anchor: 'end', lineGap: 15, lines: [{ text: 'ArFi', size: 40, weight: 800, color: BLUE }, { text: 'Argon Fluoride immersion', size: 29, weight: 400, color: NOTE }] }] },
        arf_dry: { blocks: [valueAbove(474, 876, DRY_GREEN), { x: 397, top: 889, anchor: 'end', lineGap: 15, lines: [{ text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN }, { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE }] }] },
        krf: { blocks: [valueAbove(464, 977, NAVY), { x: 387, top: 1005, anchor: 'end', lineGap: 15, lines: [{ text: 'KrF', size: 38, weight: 800, color: NAVY }, { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE }] }] },
        i_line: { blocks: [valueAbove(474, 1093, YELLOW), { x: 397, top: 1138, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: YELLOW }] }] },
        metrology_inspection: { blocks: [valueAbove(473, 1209, LIGHT_BLUE), { x: 389, top: 1223, anchor: 'end', lineGap: 7, lines: [{ text: 'Metrology', size: 39, weight: 800, color: LIGHT_BLUE }, { text: '& Inspection', size: 39, weight: 800, color: LIGHT_BLUE }] }] },
        net_system_sales: { blocks: [{ x: 846, top: 440, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net system', size: 41, weight: 800 }, { text: 'sales', size: 41, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        installed_base_management: { blocks: [{ x: 846, top: 1245, anchor: 'middle', lineGap: 10, lines: [{ text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL }, { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL }, { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL }, { text: '+32% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        revenue: { blocks: [{ x: 1220, top: 568, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net sales', size: 42, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1594, top: 455, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '54% margin', size: 29, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1594, top: 1245, anchor: 'middle', lineGap: 10, lines: [{ text: 'Cost of sales', size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
        operating_profit: { blocks: [{ x: 1968, top: 364, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '37% margin', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1968, top: 969, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 36, weight: 400 }] }] },
        other: { blocks: [{ x: 2233, top: 650, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800, color: PROFIT_LABEL }, { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL }] }] },
        net_profit: { blocks: [{ x: 2402, top: 448, anchor: 'start', lineGap: 10, lines: [{ text: 'Net profit', size: 39, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '31% margin', size: 29, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE }] }] },
        tax: { blocks: [{ x: 2498, top: 738, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        rnd: { blocks: [{ x: 2490, top: 980, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
        sga: { blocks: [{ x: 2498, top: 1236, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] },
      },
    },

    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 4.3, notes: ['Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 1.5, notes: ['Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.4, notes: ['Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'metrology_inspection', col: 0, order: 5, type: 'source', label: ['Metrology', '& Inspection'], value: 0.1, color: LIGHT_BLUE, labelColor: LIGHT_BLUE, linkTint: LIGHT_BLUE_LINK },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 6.6, notes: ['+17% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 2.8, notes: ['+32% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 9.3, notes: ['+21% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.0, valueText: '€5.0B', notes: ['54% margin', '+0pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 4.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.5, notes: ['37% margin', '+2pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.1, color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 2.9, notes: ['31% margin', '+2pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'euv', target: 'net_system_sales', value: 4.3, sourceWidth: 192, targetWidth: 192, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 1.5, sourceWidth: 65, targetWidth: 65, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 4, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.4, sourceWidth: 16, targetWidth: 16, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, sourceWidth: 5, targetWidth: 5, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.1, sourceWidth: 7, targetWidth: 9, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 6.6, sourceWidth: 291, targetWidth: 294, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 2.8, sourceWidth: 121, targetWidth: 121, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 5.0, sourceWidth: 225, targetWidth: 223, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 4.3, sourceWidth: 190, targetWidth: 190, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.5, sourceWidth: 153, targetWidth: 153, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, sourceWidth: 69, targetWidth: 69, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.9, sourceWidth: 128, targetWidth: 128, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 25, targetWidth: 25, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.3, sourceWidth: 58, targetWidth: 54, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 11, targetWidth: 11, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2026 财年第二季度',
        meta: { title: 'ASML 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月' },
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外'] }, arfi: { label: 'ArFi', notes: ['氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式'] }, krf: { label: 'KrF', notes: ['氟化氪'] },
          i_line: { label: 'I-line' }, metrology_inspection: { label: '量测与检测' },
          net_system_sales: { label: '系统净销售额', notes: ['同比 +17%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +32%'] },
          revenue: { label: '净销售额', notes: ['同比 +21%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +0 个百分点'] }, cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 37%', '同比 +2 个百分点'] }, operating_expenses: { label: '营业费用' },
          other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 31%', '同比 +2 个百分点'] },
          tax: { label: '税费' }, rnd: { label: '研发' }, sga: { label: '销售、一般及行政' },
        },
        layout: { labels: { sga: { blocks: [{ x: 2503, top: 1236, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般及行政', size: 31, weight: 800 }, { text: '$value', size: 30, weight: 400 }] }] } } },
      },
    },
  });
})();

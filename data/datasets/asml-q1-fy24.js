/* ====================================================================
 * ASML - Q1 FY24 income statement (€B)
 * Fixed-layout reconstruction from input/processed/asml-q1-fy24.png.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8d97c7';
  const ORANGE = '#ff7f45';
  const ORANGE_LINK = '#f5ba9d';
  const BLUE = '#1c7ddb';
  const BLUE_LINK = '#8ebce7';
  const DRY_GREEN = '#34b233';
  const DRY_LINK = '#a8d9a4';
  const YELLOW = '#fcd12a';
  const YELLOW_LABEL = '#f0a000';
  const YELLOW_LINK = '#f0dc92';
  const LIGHT_BLUE = '#8ad2f5';
  const LIGHT_BLUE_LINK = '#bde5f5';
  const PROFIT_GREEN = '#2ca02c';
  const PROFIT_LABEL = '#008f47';
  const PROFIT_LINK = '#98ca95';
  const RED = '#cc0000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#df7f82';
  const NOTE = '#757575';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1205" y="386" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q1-fy24',
    name: 'ASML · Q1 FY24',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q1-fy24.png', width: 2667, height: 1500 },
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
      scale: 75.1,
      nodes: {
        euv: { x: 421, y: 395, width: 71, height: 137 },
        arfi: { x: 421, y: 664, width: 71, height: 116 },
        arf_dry: { x: 421, y: 917, width: 71, height: 8 },
        krf: { x: 421, y: 1057, width: 71, height: 21 },
        i_line: { x: 421, y: 1199, width: 71, height: 1 },
        metrology_inspection: { x: 421, y: 1326, width: 71, height: 6 },
        net_system_sales: { x: 795, y: 627, width: 70, height: 298 },
        installed_base_management: { x: 790, y: 1125, width: 70, height: 99 },
        revenue: { x: 1169, y: 731, width: 70, height: 398 },
        gross_profit: { x: 1543, y: 627, width: 70, height: 201 },
        cost_of_sales: { x: 1543, y: 1028, width: 70, height: 196 },
        operating_profit: { x: 1919, y: 507, width: 70, height: 102 },
        operating_expenses: { x: 1924, y: 817, width: 70, height: 96 },
        other: { x: 2177, y: 547, width: 70, height: 1 },
        net_profit: { x: 2289, y: 384, width: 71, height: 89 },
        tax: { x: 2289, y: 726, width: 71, height: 14 },
        rnd: { x: 2289, y: 920, width: 71, height: 76 },
        sga: { x: 2289, y: 1221, width: 71, height: 19 },
      },
      labels: {
        euv: {
          blocks: [
            { x: 459, top: 293, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: ORANGE },
              { text: '(37%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 361, top: 420, anchor: 'end', lineGap: 15, lines: [
              { text: 'EUV', size: 40, weight: 800, color: ORANGE },
              { text: 'Extreme Ultraviolet', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        arfi: {
          blocks: [
            { x: 459, top: 570, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: BLUE },
              { text: '(3%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 329, top: 681, anchor: 'end', lineGap: 15, lines: [
              { text: 'ArFi', size: 40, weight: 800, color: BLUE },
              { text: 'Argon Fluoride immersion', size: 25, weight: 400, color: NOTE },
            ] },
          ],
        },
        arf_dry: {
          blocks: [
            { x: 459, top: 821, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: DRY_GREEN },
              { text: '(26%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 367, top: 877, anchor: 'end', lineGap: 15, lines: [
              { text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN },
              { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        krf: {
          blocks: [
            { x: 459, top: 959, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: NAVY },
              { text: '(34%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 358, top: 1025, anchor: 'end', lineGap: 15, lines: [
              { text: 'KrF', size: 38, weight: 800, color: NAVY },
              { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        i_line: {
          blocks: [
            { x: 459, top: 1096, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: YELLOW },
              { text: '(26%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 368, top: 1174, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: YELLOW }] },
          ],
        },
        metrology_inspection: {
          blocks: [
            { x: 459, top: 1226, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 39, weight: 400, color: LIGHT_BLUE },
              { text: '(26%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 364, top: 1280, anchor: 'end', lineGap: 7, lines: [
              { text: 'Metrology', size: 39, weight: 800, color: LIGHT_BLUE },
              { text: '& Inspection', size: 39, weight: 800, color: LIGHT_BLUE },
            ] },
          ],
        },
        net_system_sales: {
          blocks: [{ x: 830, top: 427, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Net system', size: 41, weight: 800 },
            { text: 'sales', size: 41, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '(26%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        installed_base_management: {
          blocks: [{ x: 825, top: 1243, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
            { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
            { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
            { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        revenue: {
          blocks: [{ x: 1205, top: 579, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Net sales', size: 42, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '(22%) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        gross_profit: {
          blocks: [{ x: 1578, top: 435, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Gross profit', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '51% margin', size: 29, weight: 400, color: NOTE },
            { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        cost_of_sales: {
          blocks: [{ x: 1578, top: 1244, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Cost of sales', size: 38, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ] }],
        },
        operating_profit: {
          blocks: [{ x: 1954, top: 328, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Operating profit', size: 39, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '26% margin', size: 29, weight: 400, color: NOTE },
            { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ] }],
        },
        operating_expenses: {
          blocks: [{ x: 1959, top: 935, anchor: 'middle', lineGap: 10, lines: [
            { text: 'Operating', size: 38, weight: 800 },
            { text: 'expenses', size: 38, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ] }],
        },
        other: {
          blocks: [{ x: 2212, top: 567, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Other gains', size: 31, weight: 800, color: PROFIT_LABEL },
            { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
          ] }],
        },
        net_profit: {
          blocks: [{ x: 2384, top: 383, anchor: 'start', lineGap: 10, lines: [
            { text: 'Net profit', size: 39, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '23% margin', size: 29, weight: 400, color: NOTE },
            { text: '(6pp) Y/Y', size: 29, weight: 400, color: NOTE },
            { text: 'EPS €3.11', size: 28, weight: 400, color: NOTE },
          ] }],
        },
        tax: {
          blocks: [{ x: 2475, top: 707, anchor: 'middle', lineGap: 8, lines: [
            { text: 'Tax', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
        rnd: {
          blocks: [{ x: 2485, top: 925, anchor: 'middle', lineGap: 8, lines: [
            { text: 'R&D', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
        sga: {
          blocks: [{ x: 2485, top: 1195, anchor: 'middle', lineGap: 8, lines: [
            { text: 'SG&A', size: 31, weight: 800 },
            { text: '$value', size: 30, weight: 400 },
          ] }],
        },
      },
    },

    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 1.8, notes: ['(37%) Y/Y', 'Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 1.5, notes: ['(3%) Y/Y', 'Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.1, notes: ['(26%) Y/Y', 'Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.3, notes: ['(34%) Y/Y', 'Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.04, valueText: '€40M', notes: ['(26%) Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'metrology_inspection', col: 0, order: 5, type: 'source', label: ['Metrology', '& Inspection'], value: 0.1, notes: ['(26%) Y/Y'], color: LIGHT_BLUE, labelColor: LIGHT_BLUE, linkTint: LIGHT_BLUE_LINK },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 4.0, valueText: '€4.0B', notes: ['(26%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 1.3, notes: ['(6%) Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 5.3, notes: ['(22%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.7, notes: ['51% margin', '+0pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, notes: ['26% margin', '(6pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other gains', value: 0.026, valueText: '€26M', color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 1.2, notes: ['23% margin', '(6pp) Y/Y', 'EPS €3.11'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.0, valueText: '€1.0B', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'euv', target: 'net_system_sales', value: 1.8, sourceWidth: 137, targetWidth: 136, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 1.5, sourceWidth: 116, targetWidth: 119, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.1, sourceWidth: 8, targetWidth: 9, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.3, sourceWidth: 21, targetWidth: 23, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.04, sourceWidth: 1, targetWidth: 4, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.1, sourceWidth: 6, targetWidth: 7, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 4.0, sourceWidth: 298, targetWidth: 298, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 1.3, sourceWidth: 99, targetWidth: 99, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 2.7, sourceWidth: 201, targetWidth: 201, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 2.6, sourceWidth: 196, targetWidth: 196, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.4, sourceWidth: 102, targetWidth: 102, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.3, sourceWidth: 99, targetWidth: 96, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 88, targetWidth: 88, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.026, width: 1, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 14, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 76, targetWidth: 76, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, width: 19, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2024 财年第一季度',
        meta: {
          title: 'ASML 2024 财年第一季度利润表',
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
        },
        nodes: {
          euv: { label: 'EUV', notes: ['同比 (37%)', '极紫外'] },
          arfi: { label: 'ArFi', notes: ['同比 (3%)', '氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['同比 (26%)', '氟化氩干式'] },
          krf: { label: 'KrF', notes: ['同比 (34%)', '氟化氪'] },
          i_line: { label: 'I-line', notes: ['同比 (26%)'] },
          metrology_inspection: { label: '量测与检测', notes: ['同比 (26%)'] },
          net_system_sales: { label: '系统净销售额', notes: ['同比 (26%)'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 (6%)'] },
          revenue: { label: '净销售额', notes: ['同比 (22%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 26%', '同比 (6 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 23%', '同比 (6 个百分点)', '每股收益 €3.11'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            net_profit: {
              blocks: [{ x: 2384, top: 383, anchor: 'start', lineGap: 10, lines: [
                { text: '净利润', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '利润率 23%', size: 29, weight: 400, color: NOTE },
                { text: '同比 (6 个百分点)', size: 29, weight: 400, color: NOTE },
                { text: '每股收益 €3.11', size: 28, weight: 400, color: NOTE },
              ] }],
            },
            other: {
              blocks: [{ x: 2212, top: 567, anchor: 'middle', lineGap: 8, lines: [
                { text: '其他收益', size: 31, weight: 800, color: PROFIT_LABEL },
                { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
              ] }],
            },
            sga: {
              blocks: [{ x: 2502, top: 1195, anchor: 'middle', lineGap: 8, lines: [
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

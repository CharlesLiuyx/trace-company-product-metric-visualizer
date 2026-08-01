/* ====================================================================
 * ASML - Q3 FY24 income statement (€B)
 * Reconstructed from input/processed/asml-q3-fy24.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
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
      <text x="1207" y="385" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q3-fy24',
    name: 'ASML · Q3 FY24',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q3-fy24.png', width: 2667, height: 1500 },
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
      scale: 49,
      nodes: {
        euv: { x: 423, y: 396, width: 71, height: 101 },
        arfi: { x: 423, y: 616, width: 71, height: 139 },
        arf_dry: { x: 423, y: 883, width: 71, height: 7 },
        krf: { x: 423, y: 1011, width: 71, height: 27 },
        i_line: { x: 423, y: 1152, width: 71, height: 4 },
        metrology_inspection: { x: 423, y: 1272, width: 71, height: 4 },
        net_system_sales: { x: 797, y: 608, width: 70, height: 292 },
        installed_base_management: { x: 792, y: 1091, width: 70, height: 74 },
        revenue: { x: 1171, y: 693, width: 70, height: 367 },
        gross_profit: { x: 1545, y: 608, width: 70, height: 185 },
        cost_of_sales: { x: 1547, y: 980, width: 70, height: 180 },
        operating_profit: { x: 1913, y: 512, width: 71, height: 119 },
        operating_expenses: { x: 1918, y: 831, width: 71, height: 65 },
        other: { x: 2186, y: 576, width: 70, height: 2 },
        net_profit: { x: 2291, y: 418, width: 71, height: 101 },
        tax: { x: 2291, y: 747, width: 71, height: 20 },
        rnd: { x: 2291, y: 935, width: 71, height: 50 },
        sga: { x: 2291, y: 1192, width: 71, height: 13 },
      },
      labels: {
        euv: {
          blocks: [
            {
              x: 452, top: 299, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: ORANGE },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 375, top: 406, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'EUV', size: 40, weight: 800, color: ORANGE },
                { text: 'Extreme Ultraviolet', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        arfi: {
          blocks: [
            {
              x: 452, top: 520, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 375, top: 642, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArFi', size: 40, weight: 800, color: BLUE },
                { text: 'Argon Fluoride immersion', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        arf_dry: {
          blocks: [
            {
              x: 459, top: 787, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: DRY_GREEN },
                { text: '(16%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 366, top: 844, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN },
                { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        krf: {
          blocks: [
            {
              x: 447, top: 916, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: NAVY },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 979, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'KrF', size: 38, weight: 800, color: NAVY },
                { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        i_line: {
          blocks: [
            {
              x: 459, top: 1057, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: YELLOW },
                { text: '+123% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 368, top: 1131, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: YELLOW }] },
          ],
        },
        metrology_inspection: {
          blocks: [
            {
              x: 457, top: 1180, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: LIGHT_BLUE },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 380, top: 1229, anchor: 'end', lineGap: 7,
              lines: [
                { text: 'Metrology', size: 39, weight: 800, color: LIGHT_BLUE },
                { text: '& Inspection', size: 39, weight: 800, color: LIGHT_BLUE },
              ],
            },
          ],
        },
        net_system_sales: {
          blocks: [
            {
              x: 835, top: 409, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net system', size: 41, weight: 800 },
                { text: 'sales', size: 41, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        installed_base_management: {
          blocks: [
            {
              x: 833, top: 1184, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1205, top: 542, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net sales', size: 42, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1579, top: 416, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '51% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1576, top: 1179, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of sales', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1946, top: 321, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '33% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1949, top: 916, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2219, top: 590, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other gains', size: 31, weight: 800, color: PROFIT_LABEL },
                { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2386, top: 392, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '28% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2481, top: 724, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2481, top: 922, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2478, top: 1157, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 2.1, notes: ['Extreme Ultraviolet', '+12% Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 2.8, notes: ['Argon Fluoride immersion', '+12% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.2, notes: ['Argon Fluoride Dry', '(16%) Y/Y'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.6, notes: ['Krypton Fluoride', '+12% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, notes: ['+123% Y/Y'], color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      {
        id: 'metrology_inspection',
        col: 0,
        order: 5,
        type: 'source',
        label: ['Metrology', '& Inspection'],
        value: 0.1,
        notes: ['+12% Y/Y'],
        color: LIGHT_BLUE,
        labelColor: LIGHT_BLUE,
        linkTint: LIGHT_BLUE_LINK,
      },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 5.9, notes: ['+12% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 1.5, notes: ['+13% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 7.5, notes: ['+12% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.8, notes: ['51% margin', '(1pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.4, notes: ['33% margin', '(0pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: ['Other', 'gains'], value: 0.1, color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 2.1, notes: ['28% margin', '(1pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'euv', target: 'net_system_sales', value: 2.1, sourceWidth: 101, targetWidth: 104, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 2.8, sourceWidth: 139, targetWidth: 139, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.2, sourceWidth: 7, targetWidth: 10, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.6, sourceWidth: 27, targetWidth: 30, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 5, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 4, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 5.9, sourceWidth: 292, targetWidth: 293, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 1.5, sourceWidth: 74, targetWidth: 74, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.8, sourceWidth: 185, targetWidth: 185, sourceOrder: 0, targetOrder: 0, linkTint: { left: PROFIT_LINK, right: PROFIT_LINK } },
      { source: 'revenue', target: 'cost_of_sales', value: 3.7, sourceWidth: 182, targetWidth: 180, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.4, sourceWidth: 118, targetWidth: 119, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, sourceWidth: 67, targetWidth: 65, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.0, sourceWidth: 97, targetWidth: 99, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 22, targetWidth: 20, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 52, targetWidth: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 13, targetWidth: 13, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2024 财年第三季度',
        meta: {
          title: 'ASML 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
        },
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外', '同比 +12%'] },
          arfi: { label: 'ArFi', notes: ['氟化氩浸没式', '同比 +12%'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式', '同比 (16%)'] },
          krf: { label: 'KrF', notes: ['氟化氪', '同比 +12%'] },
          i_line: { label: 'I-line', notes: ['同比 +123%'] },
          metrology_inspection: { label: '量测与检测', notes: ['同比 +12%'] },
          net_system_sales: { label: '系统净销售额', notes: ['同比 +12%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +13%'] },
          revenue: { label: '净销售额', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 (1 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: ['其他', '收益'] },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            sga: {
              blocks: [
                {
                  x: 2508, top: 1157, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售、一般及行政', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();

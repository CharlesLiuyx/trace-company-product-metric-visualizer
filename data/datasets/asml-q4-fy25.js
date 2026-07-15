/* ====================================================================
 * ASML - Q4 FY25 income statement (€B)
 * Reconstructed from input/processed/asml-q4-fy25.png as a fixed
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
      <text x="1220" y="387" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q4-fy25',
    name: 'ASML · Q4 FY25',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q4-fy25.png', width: 2667, height: 1500 },
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
      scale: 40.5,
      nodes: {
        euv: { x: 437, y: 455, width: 71, height: 150 },
        arfi: { x: 437, y: 712, width: 71, height: 125 },
        arf_dry: { x: 437, y: 942, width: 71, height: 8 },
        krf: { x: 437, y: 1053, width: 71, height: 18 },
        i_line: { x: 437, y: 1170, width: 71, height: 6 },
        metrology_inspection: { x: 437, y: 1271, width: 71, height: 15 },
        net_system_sales: { x: 810, y: 634, width: 71, height: 310 },
        installed_base_management: { x: 811, y: 1109, width: 70, height: 89 },
        revenue: { x: 1184, y: 711, width: 71, height: 396 },
        gross_profit: { x: 1558, y: 633, width: 71, height: 209 },
        cost_of_sales: { x: 1558, y: 1011, width: 71, height: 191 },
        operating_profit: { x: 1932, y: 547, width: 71, height: 142 },
        operating_expenses: { x: 1932, y: 859, width: 71, height: 69 },
        other: { x: 2210, y: 626, width: 40, height: 3 },
        net_profit: { x: 2305, y: 451, width: 72, height: 119 },
        tax: { x: 2305, y: 753, width: 72, height: 27 },
        rnd: { x: 2305, y: 933, width: 72, height: 54 },
        sga: { x: 2305, y: 1244, width: 72, height: 18 },
      },
      labels: {
        euv: {
          blocks: [
            { x: 475, top: 398, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: ORANGE }] },
            {
              x: 397, top: 495, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'EUV', size: 40, weight: 800, color: ORANGE },
                { text: 'Extreme Ultraviolet', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        arfi: {
          blocks: [
            { x: 475, top: 654, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }] },
            {
              x: 397, top: 738, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArFi', size: 40, weight: 800, color: BLUE },
                { text: 'Argon Fluoride immersion', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        arf_dry: {
          blocks: [
            { x: 475, top: 884, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: DRY_GREEN }] },
            {
              x: 397, top: 902, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN },
                { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        krf: {
          blocks: [
            { x: 475, top: 995, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: NAVY }] },
            {
              x: 397, top: 1025, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'KrF', size: 38, weight: 800, color: NAVY },
                { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        i_line: {
          blocks: [
            { x: 475, top: 1111, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: YELLOW }] },
            { x: 397, top: 1146, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: YELLOW }] },
          ],
        },
        metrology_inspection: {
          blocks: [
            { x: 475, top: 1204, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: LIGHT_BLUE }] },
            {
              x: 397, top: 1226, anchor: 'end', lineGap: 7,
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
              x: 845, top: 440, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net system', size: 41, weight: 800 },
                { text: 'sales', size: 41, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        installed_base_management: {
          blocks: [
            {
              x: 846, top: 1209, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
                { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1220, top: 570, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net sales', size: 42, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1594, top: 451, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '52% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1594, top: 1215, anchor: 'middle', lineGap: 10,
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
              x: 1968, top: 366, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '35% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1968, top: 945, anchor: 'middle', lineGap: 10,
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
              x: 2230, top: 649, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: PROFIT_LABEL },
                { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2402, top: 455, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '29% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2491, top: 738, anchor: 'middle', lineGap: 8,
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
              x: 2491, top: 933, anchor: 'middle', lineGap: 8,
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
              x: 2491, top: 1230, anchor: 'middle', lineGap: 8,
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
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 3.6, notes: ['Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 3.0, valueText: '€3.0B', notes: ['Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.2, notes: ['Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.4, notes: ['Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      {
        id: 'metrology_inspection',
        col: 0,
        order: 5,
        type: 'source',
        label: ['Metrology', '& Inspection'],
        value: 0.3,
        color: LIGHT_BLUE,
        labelColor: LIGHT_BLUE,
        linkTint: LIGHT_BLUE_LINK,
      },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 7.6, notes: ['+7% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 2.1, notes: ['(1%) Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 9.7, notes: ['+5% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.1, notes: ['52% margin', '+0pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 4.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.4, notes: ['35% margin', '(1pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.011, valueText: '€11M', color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 2.8, notes: ['29% margin', '(0pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'euv', target: 'net_system_sales', value: 3.6, sourceWidth: 150, targetWidth: 144, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 3.0, sourceWidth: 125, targetWidth: 119, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.2, width: 8, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.4, width: 18, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, width: 6, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.3, width: 15, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 7.6, sourceWidth: 310, targetWidth: 307, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 2.1, width: 89, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 5.1, sourceWidth: 205, targetWidth: 209, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 4.6, width: 191, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.4, sourceWidth: 140, targetWidth: 142, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, width: 69, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.8, sourceWidth: 115, targetWidth: 116, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.011, width: 3, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.6, width: 27, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.3, sourceWidth: 51, targetWidth: 54, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.4, width: 18, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2025 财年第四季度',
        meta: {
          title: 'ASML 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外'] },
          arfi: { label: 'ArFi', notes: ['氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式'] },
          krf: { label: 'KrF', notes: ['氟化氪'] },
          i_line: { label: 'I-line' },
          metrology_inspection: { label: '量测与检测' },
          net_system_sales: { label: '系统净销售额', notes: ['同比 +7%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 (1%)'] },
          revenue: { label: '净销售额', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            sga: {
              blocks: [
                {
                  x: 2508, top: 1230, anchor: 'middle', lineGap: 8,
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

/* ====================================================================
 * ASML - Q2 FY24 income statement (€B)
 * Reconstructed from input/processed/asml-q2-fy24.png as a fixed
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
  const YELLOW_NODE = '#eac61c';
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
  const OTHER_NODE = '#ceb0b0';
  const NOTE = '#757575';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1220" y="387" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q2-fy24',
    name: 'ASML · Q2 FY24',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q2-fy24.png', width: 2667, height: 1500 },
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
      scale: 60,
      nodes: {
        euv: { x: 424, y: 409, width: 71, height: 89 },
        arfi: { x: 424, y: 631, width: 71, height: 144 },
        arf_dry: { x: 424, y: 902, width: 71, height: 17 },
        krf: { x: 424, y: 1048, width: 71, height: 24 },
        i_line: { x: 424, y: 1198, width: 71, height: 4 },
        metrology_inspection: { x: 424, y: 1319, width: 71, height: 2 },
        net_system_sales: { x: 798, y: 650, width: 70, height: 290 },
        installed_base_management: { x: 798, y: 1124, width: 70, height: 90 },
        revenue: { x: 1169, y: 731, width: 70, height: 383 },
        gross_profit: { x: 1546, y: 645, width: 70, height: 197 },
        cost_of_sales: { x: 1546, y: 1024, width: 70, height: 185 },
        operating_profit: { x: 1919, y: 535, width: 71, height: 111 },
        operating_expenses: { x: 1919, y: 840, width: 71, height: 83 },
        net_profit: { x: 2292, y: 425, width: 71, height: 91 },
        tax: { x: 2292, y: 723, width: 71, height: 15 },
        other: { x: 2292, y: 838, width: 71, height: 2 },
        rnd: { x: 2292, y: 995, width: 71, height: 65 },
        sga: { x: 2292, y: 1268, width: 71, height: 15 },
      },
      labels: {
        euv: {
          blocks: [
            { x: 457, top: 317, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400, color: ORANGE }, { text: '(29%) Y/Y', size: 29, weight: 400, color: NOTE }] },
            {
              x: 370, top: 413, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'EUV', size: 40, weight: 800, color: ORANGE },
                { text: 'Extreme Ultraviolet', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        arfi: {
          blocks: [
            { x: 458, top: 539, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }, { text: '(13%) Y/Y', size: 29, weight: 400, color: NOTE }] },
            {
              x: 384, top: 662, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArFi', size: 40, weight: 800, color: BLUE },
                { text: 'Argon Fluoride immersion', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        arf_dry: {
          blocks: [
            { x: 460, top: 809, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400, color: DRY_GREEN }, { text: '+197% Y/Y', size: 29, weight: 400, color: NOTE }] },
            {
              x: 375, top: 871, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN },
                { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        krf: {
          blocks: [
            { x: 456, top: 955, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400, color: NAVY }, { text: '(15%) Y/Y', size: 29, weight: 400, color: NOTE }] },
            {
              x: 361, top: 1020, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'KrF', size: 38, weight: 800, color: NAVY },
                { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        i_line: {
          blocks: [
            { x: 460, top: 1109, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400, color: YELLOW }, { text: '+70% Y/Y', size: 29, weight: 400, color: NOTE }] },
            { x: 384, top: 1177, anchor: 'end', lines: [{ text: 'I-line', size: 31, weight: 800, color: YELLOW }] },
          ],
        },
        metrology_inspection: {
          blocks: [
            { x: 460, top: 1230, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 39, weight: 400, color: LIGHT_BLUE }, { text: '(58%) Y/Y', size: 29, weight: 400, color: NOTE }] },
            {
              x: 384, top: 1272, anchor: 'end', lineGap: 7,
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
              x: 833, top: 451, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net system', size: 41, weight: 800 },
                { text: 'sales', size: 41, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(15%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        installed_base_management: {
          blocks: [
            {
              x: 833, top: 1227, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1204, top: 586, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net sales', size: 42, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(10%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1581, top: 459, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '51% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1581, top: 1229, anchor: 'middle', lineGap: 10,
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
              x: 1954, top: 350, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '29% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1954, top: 943, anchor: 'middle', lineGap: 10,
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
              x: 2478, top: 805, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2388, top: 408, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '25% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2478, top: 692, anchor: 'middle', lineGap: 8,
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
              x: 2478, top: 1005, anchor: 'middle', lineGap: 8,
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
              x: 2478, top: 1239, anchor: 'middle', lineGap: 8,
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
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 1.5, notes: ['(29%) Y/Y', 'Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 2.4, notes: ['(13%) Y/Y', 'Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.3, notes: ['+197% Y/Y', 'Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.4, notes: ['(15%) Y/Y', 'Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, notes: ['+70% Y/Y'], color: YELLOW_NODE, labelColor: YELLOW, linkTint: YELLOW_LINK },
      {
        id: 'metrology_inspection',
        col: 0,
        order: 5,
        type: 'source',
        label: ['Metrology', '& Inspection'],
        value: 0.048,
        valueText: '€48M',
        notes: ['(58%) Y/Y'],
        color: LIGHT_BLUE,
        labelColor: LIGHT_BLUE,
        linkTint: LIGHT_BLUE_LINK,
      },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 4.8, notes: ['(15%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 1.5, notes: ['+14% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 6.2, notes: ['(10%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.2, notes: ['51% margin', '+0pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.0, valueText: '(€3.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['29% margin', '(3pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['25% margin', '(4pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.012, valueText: '(€12M)', color: OTHER_NODE, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'euv', target: 'net_system_sales', value: 1.5, sourceWidth: 89, targetWidth: 89, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 2.4, sourceWidth: 144, targetWidth: 145, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.3, sourceWidth: 17, targetWidth: 18, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.4, sourceWidth: 24, targetWidth: 24, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, sourceWidth: 4, targetWidth: 4, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.048, sourceWidth: 2, targetWidth: 10, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 4.8, sourceWidth: 290, targetWidth: 293, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 1.5, sourceWidth: 90, targetWidth: 90, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.2, sourceWidth: 197, targetWidth: 197, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 3.0, sourceWidth: 186, targetWidth: 185, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, sourceWidth: 112, targetWidth: 111, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.4, sourceWidth: 84, targetWidth: 83, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.5, sourceWidth: 91, targetWidth: 91, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 15, targetWidth: 15, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.012, sourceWidth: 5, targetWidth: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 65, targetWidth: 65, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 18, targetWidth: 15, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2024 财年第二季度',
        meta: {
          title: 'ASML 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
        },
        nodes: {
          euv: { label: 'EUV', notes: ['同比 (29%)', '极紫外'] },
          arfi: { label: 'ArFi', notes: ['同比 (13%)', '氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['同比 +197%', '氟化氩干式'] },
          krf: { label: 'KrF', notes: ['同比 (15%)', '氟化氪'] },
          i_line: { label: 'I-line', notes: ['同比 +70%'] },
          metrology_inspection: { label: '量测与检测', notes: ['同比 (58%)'] },
          net_system_sales: { label: '系统净销售额', notes: ['同比 (15%)'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +14%'] },
          revenue: { label: '净销售额', notes: ['同比 (10%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 29%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 25%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            sga: {
              blocks: [
                {
                  x: 2495, top: 1239, anchor: 'middle', lineGap: 8,
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

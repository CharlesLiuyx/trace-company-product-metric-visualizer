/* ====================================================================
 * ASML - Q2 FY25 income statement (€B)
 * Reconstructed from input/processed/asml-q2-fy25.png as a fixed
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

  const otherGainsGuide = (localized) => `
    <g font-family="Noto Sans,Arial,sans-serif" class="sankey-interactive-annotation" data-node="other_gains">
      <line x1="2194" y1="598" x2="2271" y2="598" stroke="${PROFIT_GREEN}" stroke-width="2"/>
      <text x="2230" y="650" text-anchor="middle" font-size="31" font-weight="800" fill="${PROFIT_LABEL}">${localized ? '其他收益' : 'Other gains'}</text>
      <text x="2230" y="684" text-anchor="middle" font-size="31" font-weight="400" fill="${PROFIT_LABEL}">€0.1B</text>
    </g>`;

  const annotations = (localized) => `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1220" y="387" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>
    ${otherGainsGuide(localized)}`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q2-fy25',
    name: 'ASML · Q2 FY25',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q2-fy25.png', width: 2667, height: 1500 },
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
    annotationsSvg: annotations(false),

    layout: {
      scale: 43.4,
      routes: {
        other_gains: { x: 2271, y: 598, width: 0, height: 1 },
      },
      nodes: {
        euv: { x: 437, y: 461, width: 71, height: 120 },
        arfi: { x: 437, y: 693, width: 71, height: 107 },
        arf_dry: { x: 437, y: 900, width: 71, height: 7 },
        krf: { x: 437, y: 1020, width: 71, height: 12 },
        i_line: { x: 437, y: 1130, width: 71, height: 5 },
        metrology_inspection: { x: 437, y: 1231, width: 71, height: 8 },
        net_system_sales: { x: 811, y: 611, width: 70, height: 246 },
        installed_base_management: { x: 811, y: 1059, width: 70, height: 93 },
        revenue: { x: 1185, y: 706, width: 70, height: 339 },
        gross_profit: { x: 1558, y: 612, width: 71, height: 183 },
        cost_of_sales: { x: 1558, y: 988, width: 71, height: 158 },
        operating_profit: { x: 1930, y: 531, width: 70, height: 118 },
        operating_expenses: { x: 1930, y: 816, width: 70, height: 66 },
        net_profit: { x: 2305, y: 432, width: 71, height: 98 },
        tax: { x: 2305, y: 745, width: 71, height: 23 },
        rnd: { x: 2305, y: 930, width: 71, height: 52 },
        sga: { x: 2305, y: 1187, width: 71, height: 14 },
      },
      labels: {
        euv: {
          blocks: [
            { x: 472, top: 406, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: ORANGE }] },
            {
              x: 386, top: 477, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'EUV', size: 40, weight: 800, color: ORANGE },
                { text: 'Extreme Ultraviolet', size: 29, weight: 400, color: NOTE, textLength: 249 },
              ],
            },
          ],
        },
        arfi: {
          blocks: [
            { x: 472, top: 637, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }] },
            {
              x: 345, top: 709, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArFi', size: 40, weight: 800, color: BLUE },
                { text: 'Argon Fluoride immersion', size: 25, weight: 400, color: NOTE, textLength: 336 },
              ],
            },
          ],
        },
        arf_dry: {
          blocks: [
            { x: 472, top: 842, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: DRY_GREEN }] },
            {
              x: 397, top: 860, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN },
                { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE, textLength: 244 },
              ],
            },
          ],
        },
        krf: {
          blocks: [
            { x: 472, top: 964, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: NAVY }] },
            {
              x: 382, top: 987, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'KrF', size: 38, weight: 800, color: NAVY },
                { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE, textLength: 213 },
              ],
            },
          ],
        },
        i_line: {
          blocks: [
            { x: 469, top: 1072, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: YELLOW }] },
            { x: 397, top: 1113, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: YELLOW }] },
          ],
        },
        metrology_inspection: {
          blocks: [
            { x: 469, top: 1174, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: LIGHT_BLUE }] },
            {
              x: 387, top: 1190, anchor: 'end', lineGap: 7,
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
              x: 843, top: 418, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net system', size: 41, weight: 800 },
                { text: 'sales', size: 41, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        installed_base_management: {
          blocks: [
            {
              x: 844, top: 1174, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
                { text: '+41% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1218, top: 565, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net sales', size: 42, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1593, top: 429, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '54% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1595, top: 1158, anchor: 'middle', lineGap: 10,
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
              x: 1964, top: 352, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '35% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1961, top: 894, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other_gains: { blocks: [] },
        net_profit: {
          blocks: [
            {
              x: 2402, top: 417, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '30% margin', size: 29, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2498, top: 724, anchor: 'middle', lineGap: 8,
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
              x: 2498, top: 920, anchor: 'middle', lineGap: 8,
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
              x: 2503, top: 1162, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nonNodeMetrics: [
      { id: 'other_gains', representation: 'flow', label: 'Other gains', value: 0.1, type: 'profit', labelColor: PROFIT_LABEL },
    ],

    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 2.7, notes: ['Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 2.4, notes: ['Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.2, notes: ['Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      {
        id: 'metrology_inspection',
        col: 0,
        order: 5,
        type: 'source',
        label: ['Metrology', '& Inspection'],
        value: 0.1,
        color: LIGHT_BLUE,
        labelColor: LIGHT_BLUE,
        linkTint: LIGHT_BLUE_LINK,
      },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 5.6, notes: ['+18% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 2.1, notes: ['+41% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 7.7, notes: ['+23% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.1, notes: ['54% margin', '+2pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 3.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.7, notes: ['35% margin', '+5pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 2.3, notes: ['30% margin', '+4pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'euv', target: 'net_system_sales', value: 2.7, sourceWidth: 120, targetWidth: 117, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 2.4, sourceWidth: 107, targetWidth: 104, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.1, sourceWidth: 7, targetWidth: 4, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.2, sourceWidth: 12, targetWidth: 9, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, sourceWidth: 5, targetWidth: 4, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.1, sourceWidth: 8, targetWidth: 8, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 5.6, sourceWidth: 246, targetWidth: 246, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 2.1, sourceWidth: 93, targetWidth: 93, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 4.1, sourceWidth: 183, targetWidth: 183, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 3.6, sourceWidth: 156, targetWidth: 158, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 119, targetWidth: 118, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.5, sourceWidth: 64, targetWidth: 66, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceWidth: 95, targetWidth: 98, sourceOrder: 0, targetOrder: 0 },
      { sourceRoute: 'other_gains', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 1, linkTint: PROFIT_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 23, targetWidth: 23, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.2, sourceWidth: 52, targetWidth: 52, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 14, targetWidth: 14, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2025 财年第二季度',
        annotationsSvg: annotations(true),
        nonNodeMetrics: { other_gains: { label: '其他收益' } },
        meta: {
          title: 'ASML 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
        },
        nodes: {
          euv: { label: 'EUV', notes: ['极紫外'] },
          arfi: { label: 'ArFi', notes: ['氟化氩浸没式'] },
          arf_dry: { label: 'ArF Dry', notes: ['氟化氩干式'] },
          krf: { label: 'KrF', notes: ['氟化氪'] },
          i_line: { label: 'I-line' },
          metrology_inspection: { label: '量测与检测' },
          net_system_sales: { label: '系统净销售额', notes: ['同比 +18%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +41%'] },
          revenue: { label: '净销售额', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 +2 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 35%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            sga: {
              blocks: [
                {
                  x: 2503, top: 1162, anchor: 'middle', lineGap: 8,
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

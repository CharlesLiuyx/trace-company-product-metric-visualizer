/* ====================================================================
 * ASML - Q4 FY22 income statement (€B)
 * Reconstructed from input/processed/asml-q4-fy22.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8d97c7';
  const LOGIC = '#0096ff';
  const LOGIC_LINK = '#85c9f7';
  const MEMORY = '#00d100';
  const MEMORY_LINK = '#85e285';
  const YELLOW = '#fcd12a';
  const YELLOW_LABEL = '#ffa400';
  const YELLOW_LINK = '#f6e298';
  const PROFIT_GREEN = '#2ca02c';
  const PROFIT_LABEL = '#008f51';
  const PROFIT_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="974" y="435" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q4-fy22',
    name: 'ASML · Q4 FY22',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q4-fy22.png', width: 2667, height: 1500 },
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
      scale: 71,
      nodes: {
        logic: { x: 389, y: 506, width: 71, height: 236 },
        memory: { x: 389, y: 890, width: 71, height: 99 },
        installed_base_management: { x: 389, y: 1139, width: 71, height: 118 },
        revenue: { x: 934, y: 638, width: 70, height: 455 },
        gross_profit: { x: 1378, y: 594, width: 71, height: 233 },
        cost_of_sales: { x: 1380, y: 944, width: 72, height: 220 },
        operating_profit: { x: 1821, y: 534, width: 70, height: 149 },
        operating_expenses: { x: 1821, y: 823, width: 70, height: 82 },
        net_profit: { x: 2257, y: 475, width: 71, height: 123 },
        tax: { x: 2257, y: 728, width: 71, height: 22 },
        other: { x: 2256, y: 820, width: 73, height: 2 },
        rnd: { x: 2257, y: 974, width: 71, height: 62 },
        sga: { x: 2257, y: 1148, width: 71, height: 18 },
      },
      labels: {
        logic: {
          blocks: [
            {
              x: 424, top: 417, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: LOGIC },
                { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 333, top: 601, anchor: 'end', lines: [{ text: 'Logic', size: 40, weight: 800, color: LOGIC }] },
          ],
        },
        memory: {
          blocks: [
            {
              x: 424, top: 800, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: MEMORY },
                { text: '+52% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 337, top: 915, anchor: 'end', lines: [{ text: 'Memory', size: 40, weight: 800, color: MEMORY }] },
          ],
        },
        installed_base_management: {
          blocks: [
            {
              x: 425, top: 1048, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 345, top: 1151, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 969, top: 493, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net sales', size: 42, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+29% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1414, top: 409, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '51% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1415, top: 1186, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'sales', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1856, top: 349, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '33% margin', size: 29, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1856, top: 926, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2350, top: 405, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '27% margin', size: 29, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
                { text: 'EPS €4.60', size: 29, weight: 400, color: NOTE },
                { text: 'Dividend €1.37', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2431, top: 698, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2431, top: 789, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2431, top: 976, anchor: 'middle', lineGap: 8,
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
              x: 2431, top: 1127, anchor: 'middle', lineGap: 8,
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
      { id: 'logic', col: 0, order: 0, type: 'source', label: 'Logic', value: 3.3, notes: ['+31% Y/Y'], color: LOGIC, labelColor: LOGIC, linkTint: LOGIC_LINK },
      { id: 'memory', col: 0, order: 1, type: 'source', label: 'Memory', value: 1.4, notes: ['+52% Y/Y'], color: MEMORY, labelColor: MEMORY, linkTint: MEMORY_LINK },
      { id: 'installed_base_management', col: 0, order: 2, type: 'source', label: ['Installed base', 'management'], value: 1.7, notes: ['+11% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 6.4, notes: ['+29% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.3, notes: ['51% margin', '(3pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 3.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['33% margin', '(8pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 1.8, notes: ['27% margin', '(8pp) Y/Y', 'EPS €4.60', 'Dividend €1.37'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.003, valueText: '(€3M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'logic', target: 'revenue', value: 3.3, sourceWidth: 236, targetWidth: 235, targetOrder: 0, linkTint: { left: LOGIC_LINK, right: LOGIC_LINK } },
      { source: 'memory', target: 'revenue', value: 1.4, sourceWidth: 99, targetWidth: 99, targetOrder: 1, linkTint: { left: MEMORY_LINK, right: MEMORY_LINK } },
      { source: 'installed_base_management', target: 'revenue', value: 1.7, sourceWidth: 118, targetWidth: 121, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.3, sourceWidth: 233, targetWidth: 233, sourceOrder: 0, targetOrder: 0, linkTint: { left: PROFIT_LINK, right: PROFIT_LINK } },
      { source: 'revenue', target: 'cost_of_sales', value: 3.1, sourceWidth: 222, targetWidth: 220, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 149, targetWidth: 149, sourceOrder: 0, targetOrder: 0, linkTint: { left: PROFIT_LINK, right: PROFIT_LINK } },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.2, sourceWidth: 84, targetWidth: 82, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 123, targetWidth: 123, sourceOrder: 0, targetOrder: 0, linkTint: { left: PROFIT_LINK, right: PROFIT_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 22, targetWidth: 22, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'other', value: 0.003, sourceWidth: 4, targetWidth: 2, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, sourceWidth: 62, targetWidth: 62, sourceOrder: 0, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'sga', value: 0.3, sourceWidth: 20, targetWidth: 18, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2022 财年第四季度',
        meta: {
          title: 'ASML 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
        },
        nodes: {
          logic: { label: '逻辑芯片', notes: ['同比 +31%'] },
          memory: { label: '存储芯片', notes: ['同比 +52%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +11%'] },
          revenue: { label: '净销售额', notes: ['同比 +29%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 51%', '同比 (3 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 (8 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 (8 个百分点)', '每股收益 €4.60', '股息 €1.37'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            logic: {
              blocks: [
                {
                  x: 424, top: 417, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: LOGIC },
                    { text: '同比 +31%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 333, top: 601, anchor: 'end', lines: [{ text: '逻辑芯片', size: 40, weight: 800, color: LOGIC }] },
              ],
            },
            memory: {
              blocks: [
                {
                  x: 424, top: 800, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: MEMORY },
                    { text: '同比 +52%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 337, top: 915, anchor: 'end', lines: [{ text: '存储芯片', size: 40, weight: 800, color: MEMORY }] },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2350, top: 405, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 39, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 27%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (8 个百分点)', size: 29, weight: 400, color: NOTE },
                    { text: '每股收益 €4.60', size: 29, weight: 400, color: NOTE },
                    { text: '股息 €1.37', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2457, top: 1127, anchor: 'middle', lineGap: 8,
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

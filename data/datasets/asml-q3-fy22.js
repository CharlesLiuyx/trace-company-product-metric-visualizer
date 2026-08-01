/* ====================================================================
 * ASML - Q3 FY22 income statement (€B)
 * Reconstructed from input/processed/asml-q3-fy22.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const BLUE = '#0096ff';
  const BLUE_LINK = '#85c9f7';
  const MEMORY_GREEN = '#00d100';
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

  function annotations(zh = false) {
    return `
      <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
        <text x="1038" y="438" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="447" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
      </g>
      <text x="315" y="253" font-family="Noto Sans,Arial,sans-serif" font-size="${zh ? 36 : 40}" font-weight="800" fill="${TITLE}">${zh ? '单位：欧元' : 'in euro'}</text>`;
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q3-fy22',
    name: 'ASML · Q3 FY22',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q3 FY22 Income Statement',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1332,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2067,
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
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: PROFIT_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations(false),

    layout: {
      scale: 84,
      nodes: {
        logic: { x: 390, y: 506, width: 71, height: 239 },
        memory: { x: 390, y: 864, width: 71, height: 112 },
        installed_base_management: { x: 393, y: 1106, width: 71, height: 125 },
        revenue: { x: 999, y: 642, width: 70, height: 479 },
        gross_profit: { x: 1404, y: 594, width: 72, height: 248 },
        cost_of_sales: { x: 1402, y: 948, width: 71, height: 230 },
        operating_profit: { x: 1811, y: 539, width: 70, height: 160 },
        operating_expenses: { x: 1803, y: 904, width: 70, height: 85 },
        other: { x: 2119, y: 730, width: 70, height: 2 },
        net_profit: { x: 2244, y: 501, width: 71, height: 141 },
        tax: { x: 2244, y: 883, width: 71, height: 20 },
        rnd: { x: 2244, y: 1051, width: 71, height: 66 },
        sga: { x: 2244, y: 1202, width: 71, height: 17 },
      },
      labels: {
        logic: {
          blocks: [
            { x: 426, top: 420, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }] },
            { x: 334, top: 602, anchor: 'end', lines: [{ text: 'Logic', size: 40, weight: 800, color: BLUE }] },
          ],
        },
        memory: {
          blocks: [
            {
              x: 426, top: 774, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: MEMORY_GREEN },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 337, top: 899, anchor: 'end', lines: [{ text: 'Memory', size: 40, weight: 800, color: MEMORY_GREEN }] },
          ],
        },
        installed_base_management: {
          blocks: [
            {
              x: 429, top: 1016, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
                { text: '+35% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 345, top: 1123, anchor: 'end', lineGap: 8,
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
              x: 1034, top: 497, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net sales', size: 42, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1440, top: 410, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '52% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0.1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1429, top: 1201, anchor: 'middle', lineGap: 10,
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
              x: 1846, top: 359, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '34% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1826, top: 1012, anchor: 'middle', lineGap: 10,
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
              x: 2158, top: 739, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other gains', size: 31, weight: 800, color: '#008e00' },
                { text: '$value', size: 31, weight: 400, color: '#008e00' },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2339, top: 509, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '29% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
                { text: 'EPS €4.29', size: 29, weight: 400, color: NOTE },
                { text: 'Dividend €1.37', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2409, top: 871, anchor: 'middle', lineGap: 8,
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
              x: 2407, top: 1053, anchor: 'middle', lineGap: 8,
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
              x: 2409, top: 1185, anchor: 'middle', lineGap: 8,
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
      { id: 'logic', col: 0, order: 0, type: 'source', label: 'Logic', value: 2.9, notes: ['(1%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'memory', col: 0, order: 1, type: 'source', label: 'Memory', value: 1.4, notes: ['+14% Y/Y'], color: MEMORY_GREEN, labelColor: MEMORY_GREEN, linkTint: MEMORY_LINK },
      { id: 'installed_base_management', col: 0, order: 2, type: 'source', label: ['Installed base', 'management'], value: 1.5, notes: ['+35% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 5.8, notes: ['+10% Y/Y'], color: NAVY, labelColor: NAVY },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.0, valueText: '€3.0B', notes: ['52% margin', '+0.1pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 2.8, color: RED, labelColor: RED_LABEL },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.9, notes: ['34% margin', '(3pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 1.1, color: RED, labelColor: RED_LABEL },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other gains', value: 0.015, valueText: '€15M', color: PROFIT_GREEN, labelColor: '#008e00' },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.7,
        notes: ['29% margin', '(4pp) Y/Y', 'EPS €4.29', 'Dividend €1.37'],
        color: PROFIT_GREEN, labelColor: PROFIT_LABEL,
      },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.252, valueText: '(€252M)', color: RED, labelColor: RED_LABEL },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.8, color: RED, labelColor: RED_LABEL },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.2, color: RED, labelColor: RED_LABEL },
    ],

    links: [
      { source: 'logic', target: 'revenue', value: 2.9, sourceWidth: 239, targetWidth: 240, y0: 625.5, y1: 762, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'memory', target: 'revenue', value: 1.4, sourceWidth: 112, targetWidth: 114, y0: 920, y1: 939, sourceOrder: 0, targetOrder: 1, linkTint: { left: MEMORY_LINK, right: MEMORY_LINK } },
      { source: 'installed_base_management', target: 'revenue', value: 1.5, sourceWidth: 125, targetWidth: 125, y0: 1168.5, y1: 1058.5, sourceOrder: 0, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.0, sourceWidth: 246, targetWidth: 248, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 2.8, sourceWidth: 233, targetWidth: 230, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.9, sourceWidth: 159, targetWidth: 160, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.1, sourceWidth: 89, targetWidth: 85, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, sourceWidth: 139, targetWidth: 139, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.015, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.252, sourceWidth: 21, targetWidth: 20, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 67, targetWidth: 66, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.2, sourceWidth: 18, targetWidth: 17, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'ASML · 2022 财年第三季度',
        meta: {
          title: 'ASML 2022 财年第三季度利润表',
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
          titleTextLength: 1550,
        },
        annotationsSvg: annotations(true),
        nodes: {
          logic: { label: '逻辑芯片', notes: ['同比 (1%)'] },
          memory: { label: '存储芯片', notes: ['同比 +14%'] },
          installed_base_management: { label: '装机基础管理', notes: ['同比 +35%'] },
          revenue: { label: '净销售额', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 52%', '同比 +0.1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 29%', '同比 (4 个百分点)', '每股收益 €4.29', '股息 €1.37'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            logic: {
              blocks: [
                { x: 426, top: 420, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }] },
                { x: 334, top: 602, anchor: 'end', lines: [{ text: '逻辑芯片', size: 40, weight: 800, color: BLUE }] },
              ],
            },
            memory: {
              blocks: [
                {
                  x: 426, top: 774, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: MEMORY_GREEN },
                    { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 337, top: 899, anchor: 'end', lines: [{ text: '存储芯片', size: 40, weight: 800, color: MEMORY_GREEN }] },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2158, top: 739, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他收益', size: 31, weight: 800, color: '#008e00' },
                    { text: '$value', size: 31, weight: 400, color: '#008e00' },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2339, top: 509, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 39, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 29%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                    { text: '每股收益 €4.29', size: 29, weight: 400, color: NOTE },
                    { text: '股息 €1.37', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2360, top: 1185, anchor: 'start', lineGap: 8,
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

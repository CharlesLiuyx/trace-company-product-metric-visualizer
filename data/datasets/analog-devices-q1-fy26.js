/* ====================================================================
 * Analog Devices - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/analog-devices-q1-fy26.png as a
 * fixed d3-sankey layout with a reusable SVG ADI wordmark.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const INDUSTRIAL = '#8637ba';
  const INDUSTRIAL_LINK = '#c19dd8';
  const AUTOMOTIVE = '#0063b2';
  const AUTOMOTIVE_LINK = '#85b2d4';
  const COMMUNICATIONS = '#00a86b';
  const COMMUNICATIONS_LINK = '#85d1b4';
  const CONSUMER = '#1b9cd0';
  const CONSUMER_LINK = '#91cae2';
  const REVENUE_BLUE = '#0067a5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'analog-devices-q1-fy26',
    name: 'Analog Devices · Q1 FY26',
    company: 'Analog Devices',
    meta: {
      company: 'Analog Devices',
      title: 'Analog Devices Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/analog-devices-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2500,
      periodX: 2446,
      periodY: 258,
      periodNoteY: 304,
      logoWidth: 520,
      logoHeight: 135,
      logoY: 334,
      logoViewBox: '0 0 520 135',
      logoSvg: BUSINESS_ICONS.analogDevicesCompanyWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: AUTOMOTIVE, label: AUTOMOTIVE },
        hub: { node: REVENUE_BLUE, label: REVENUE_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: AUTOMOTIVE_LINK,
        hub: AUTOMOTIVE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },

    layout: {
      scale: 120,
      nodes: {
        industrial: { x: 367, y: 464, width: 71, height: 179 },
        automotive: { x: 367, y: 793, width: 71, height: 95 },
        communications: { x: 367, y: 1044, width: 71, height: 57 },
        consumer: { x: 367, y: 1238, width: 71, height: 48 },
        revenue: { x: 834, y: 690, width: 70, height: 379 },
        gross_profit: { x: 1301, y: 564, width: 71, height: 245 },
        cost_of_sales: { x: 1301, y: 1059, width: 71, height: 134 },
        operating_profit: { x: 1771, y: 442, width: 70, height: 120 },
        operating_expenses: { x: 1769, y: 797, width: 70, height: 126 },
        net_profit: { x: 2235, y: 341, width: 71, height: 100 },
        tax: { x: 2235, y: 593, width: 71, height: 14 },
        interest: { x: 2235, y: 708, width: 71, height: 6 },
        rnd: { x: 2235, y: 823, width: 71, height: 56 },
        sga: { x: 2235, y: 998, width: 71, height: 41 },
        amortization: { x: 2235, y: 1148, width: 71, height: 22 },
        special_charges: { x: 2235, y: 1294, width: 71, height: 6 },
      },
      labels: {
        industrial: {
          blocks: [
            {
              x: 403, top: 374, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+38% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 330, top: 535, anchor: 'end',
              lines: [{ text: 'Industrial', size: 40, weight: 800 }],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 403, top: 704, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 330, top: 816, anchor: 'end',
              lines: [{ text: 'Automotive', size: 40, weight: 800 }],
            },
          ],
        },
        communications: {
          blocks: [
            {
              x: 403, top: 954, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+63% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 358, top: 1048, anchor: 'end',
              lines: [{ text: 'Communications', size: 40, weight: 800 }],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 403, top: 1147, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 330, top: 1238, anchor: 'end',
              lines: [{ text: 'Consumer', size: 40, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 869, top: 548, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+30% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1337, top: 384, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '65% margin', size: 28, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1337, top: 1217, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of sales', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1806, top: 263, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '32% margin', size: 28, weight: 400, color: NOTE },
                { text: '+11pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1804, top: 946, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 34, weight: 800 },
                { text: 'Expenses', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2366, top: 331, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '26% margin', size: 28, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2460, top: 568, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2460, top: 680, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2391, top: 817, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D ($0.5B)', size: 31, weight: 800 },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2378, top: 994, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'SG&A ($0.3B)', size: 31, weight: 800 },
                { text: '11% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2325, top: 1146, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization ($0.2B)', size: 31, weight: 800 },
                { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        special_charges: {
          blocks: [
            {
              x: 2325, top: 1288, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Special charges ($48M)', size: 30, weight: 800 },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'industrial', col: 0, order: 0, type: 'source', label: 'Industrial', value: 1.489256, notes: ['+38% Y/Y'], color: INDUSTRIAL, labelColor: INDUSTRIAL, linkTint: INDUSTRIAL_LINK },
      { id: 'automotive', col: 0, order: 1, type: 'source', label: 'Automotive', value: 0.794402, notes: ['+8% Y/Y'], color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'communications', col: 0, order: 2, type: 'source', label: 'Communications', value: 0.476797, notes: ['+63% Y/Y'], color: COMMUNICATIONS, labelColor: COMMUNICATIONS, linkTint: COMMUNICATIONS_LINK },
      { id: 'consumer', col: 0, order: 3, type: 'source', label: 'Consumer', value: 0.399808, notes: ['+27% Y/Y'], color: CONSUMER, labelColor: CONSUMER, linkTint: CONSUMER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.160263, notes: ['+30% Y/Y'], color: REVENUE_BLUE, labelColor: REVENUE_BLUE, linkTint: AUTOMOTIVE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.044976, notes: ['65% margin', '+6pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 1.115287 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.997026, notes: ['32% margin', '+11pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.04795 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.830826, notes: ['26% margin', '+10pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.115045 },
      { id: 'interest', col: 4, order: 2, type: 'cost', label: 'Interest', value: 0.051155 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.4674, notes: ['15% of revenue', '(2pp) Y/Y'] },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.345253, notes: ['11% of revenue', '(1pp) Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.187315, notes: ['6% of revenue', '(2pp) Y/Y'] },
      { id: 'special_charges', col: 4, order: 6, type: 'cost', label: 'Special charges', value: 0.047982, valueText: '($48M)', notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'industrial', target: 'revenue', value: 1.489256, targetOrder: 0 },
      { source: 'automotive', target: 'revenue', value: 0.794402, targetOrder: 1 },
      { source: 'communications', target: 'revenue', value: 0.476797, targetOrder: 2 },
      { source: 'consumer', target: 'revenue', value: 0.399808, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 2.044976, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1.115287, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.997026, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.04795, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.830826, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.115045, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.051155, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.4674, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.345253, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.187315, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'special_charges', value: 0.047982, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Analog Devices · 2026 财年第一季度',
        meta: {
          title: 'Analog Devices 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
        },
        nodes: {
          industrial: { label: '工业', notes: ['同比 +38%'] },
          automotive: { label: '汽车', notes: ['同比 +8%'] },
          communications: { label: '通信', notes: ['同比 +63%'] },
          consumer: { label: '消费者', notes: ['同比 +27%'] },
          revenue: { label: '收入', notes: ['同比 +30%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比 +6 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 32%', '同比 +11 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 +10 个百分点'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 (2 个百分点)'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          amortization: { label: '摊销', notes: ['占收入 6%', '同比 (2 个百分点)'] },
          special_charges: { label: '特殊费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            sga: {
              blocks: [
                {
                  x: 2378, top: 994, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售及管理 ($0.3B)', size: 31, weight: 800 },
                    { text: '占收入 11%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            special_charges: {
              blocks: [
                {
                  x: 2325, top: 1288, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '特殊费用 ($48M)', size: 30, weight: 800 },
                    { text: '占收入 2%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
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

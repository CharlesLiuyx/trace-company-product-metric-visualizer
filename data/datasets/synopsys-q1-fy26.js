/* ====================================================================
 * Synopsys - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/synopsys-q1-fy26.png as a fixed
 * d3-sankey layout with a reusable SVG Synopsys wordmark.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const PURPLE = '#5a2d85';
  const PURPLE_LINK = '#aa98c2';
  const GREEN = '#2ba32b';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d90000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e38284';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'synopsys-q1-fy26',
    name: 'Synopsys · Q1 FY26',
    company: 'Synopsys',
    meta: {
      company: 'Synopsys',
      title: 'Synopsys Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/synopsys-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2300,
      periodX: 2418,
      periodY: 255,
      periodNoteY: 301,
      logoWidth: 560,
      logoHeight: 126,
      logoY: 252,
      logoViewBox: '0 0 560 126',
      logoSvg: BUSINESS_ICONS.synopsysCompanyWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PURPLE, label: PURPLE },
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PURPLE_LINK,
        hub: PURPLE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },

    layout: {
      scale: 142.9,
      nodes: {
        design_automation: { x: 348, y: 559, width: 72, height: 286 },
        design_ip: { x: 348, y: 1073, width: 72, height: 57 },
        revenue: { x: 816, y: 667, width: 71, height: 343 },
        gross_profit: { x: 1282, y: 554, width: 73, height: 252 },
        cost_of_revenue: { x: 1282, y: 1038, width: 73, height: 91 },
        operating_profit: { x: 1747, y: 484, width: 72, height: 28 },
        operating_expenses: { x: 1749, y: 700, width: 73, height: 224 },
        net_profit: { x: 2217, y: 391, width: 72, height: 8 },
        interest: { x: 2216, y: 614, width: 73, height: 17 },
        tax: { x: 2217, y: 723, width: 72, height: 3 },
        rnd: { x: 2216, y: 823, width: 73, height: 103 },
        sm: { x: 2216, y: 1000, width: 73, height: 56 },
        other_opex: { x: 2216, y: 1134, width: 73, height: 40 },
        ga: { x: 2216, y: 1268, width: 73, height: 25 },
      },
      labels: {
        design_automation: {
          blocks: [
            {
              x: 384, top: 463, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+96% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 188, top: 628, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Design', size: 40, weight: 800 },
                { text: 'Automation', size: 40, weight: 800 },
                { text: 'Adjusted margin 47%', size: 29, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        design_ip: {
          blocks: [
            {
              x: 384, top: 974, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 190, top: 1058, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Design IP', size: 40, weight: 800 },
                { text: 'Adjusted margin 16%', size: 29, weight: 400, color: NOTE },
                { text: '(13pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 852, top: 524, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+66% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1319, top: 359, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '74% margin', size: 29, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1319, top: 1156, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1783, top: 284, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '8% margin', size: 29, weight: 400, color: NOTE },
                { text: '(9pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1786, top: 948, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'Expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2444, top: 333, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '3% margin', size: 29, weight: 400, color: NOTE },
                { text: '(18pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2436, top: 584, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2438, top: 694, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2353, top: 835, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D ($0.7B)', size: 31, weight: 800 },
                { text: '30% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2353, top: 985, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($0.4B)', size: 31, weight: 800 },
                { text: '16% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2353, top: 1131, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other ($0.3)', size: 31, weight: 800 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+11 pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2353, top: 1262, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($0.2B)', size: 31, weight: 800 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'design_automation',
        col: 0,
        order: 0,
        type: 'source',
        label: ['Design', 'Automation'],
        value: 2.0,
        valueText: '$2.0B',
        notes: ['+96% Y/Y', 'Adjusted margin 47%', '+8pp Y/Y'],
        color: PURPLE,
        labelColor: PURPLE,
        linkTint: PURPLE_LINK,
      },
      {
        id: 'design_ip',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Design IP',
        value: 0.4,
        valueText: '$0.4B',
        notes: ['(6%) Y/Y', 'Adjusted margin 16%', '(13pp) Y/Y'],
        color: PURPLE,
        labelColor: PURPLE,
        linkTint: PURPLE_LINK,
      },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.4, valueText: '$2.4B', notes: ['+66% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.8, valueText: '$1.8B', notes: ['74% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.2, valueText: '$0.2B', notes: ['8% margin', '(9pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.6, valueText: '($1.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.086, valueText: '$0.1B', notes: ['3% margin', '(18pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'cost', label: 'Interest', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.014, valueText: '($14M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 0.7, valueText: '($0.7B)', notes: ['30% of revenue', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 4, type: 'cost', label: 'S&M', value: 0.4, valueText: '($0.4B)', notes: ['16% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 4, order: 5, type: 'cost', label: 'Other', value: 0.3, valueText: '($0.3B)', notes: ['11% of revenue', '+11 pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 6, type: 'cost', label: 'G&A', value: 0.2, valueText: '($0.2B)', notes: ['8% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'design_automation', target: 'revenue', value: 2.0, width: 286, sourceOrder: 0, targetOrder: 0 },
      { source: 'design_ip', target: 'revenue', value: 0.4, width: 57, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 1.8, width: 252, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, width: 91, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.2, width: 28, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, width: 224, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'operating_profit',
        target: 'net_profit', value: 0.086,
        width: 8,
        sourceOrder: 0,
        targetOrder: 0,
        curve: { c1x: 1964, c1y: 482, c2x: 2085, c2y: 391 },
      },
      {
        source: 'operating_profit',
        target: 'interest',
        value: 0.1,
        width: 17,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1964, c1y: 504, c2x: 2085, c2y: 622 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 0.014,
        width: 3,
        sourceOrder: 2,
        targetOrder: 0,
        curve: { c1x: 1964, c1y: 511, c2x: 2085, c2y: 724 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 0.7, width: 103, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.4, width: 56, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.3, width: 40, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.2, width: 25, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Synopsys · 2026 财年第一季度',
        meta: {
          title: 'Synopsys 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
        },
        nodes: {
          design_automation: { label: ['设计', '自动化'], notes: ['同比 +96%', '调整后利润率 47%', '同比 +8 个百分点'] },
          design_ip: { label: '设计 IP', notes: ['同比 (6%)', '调整后利润率 16%', '同比 (13 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +66%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 74%', '同比 (8 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (9 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (18 个百分点)'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 30%', '同比 (8 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 16%', '同比 +2 个百分点'] },
          other_opex: { label: '其他', notes: ['占收入 11%', '同比 +11 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (4 个百分点)'] },
        },
        layout: {
          labels: {
            interest: {
              blocks: [
                {
                  x: 2436, top: 584, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2438, top: 694, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2353, top: 835, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发 ($0.7B)', size: 31, weight: 800 },
                    { text: '占收入 30%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (8 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2353, top: 985, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($0.4B)', size: 31, weight: 800 },
                    { text: '占收入 16%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_opex: {
              blocks: [
                {
                  x: 2353, top: 1131, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '其他 ($0.3)', size: 31, weight: 800 },
                    { text: '占收入 11%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +11 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2353, top: 1262, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($0.2B)', size: 31, weight: 800 },
                    { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
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

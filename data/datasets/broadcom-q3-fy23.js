/* Broadcom Q3 FY23 income statement; geometry measured from the 2667x1500 source. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const CRIMSON = '#cc092f';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';

  const LOGO = `
    <circle cx="50" cy="50" r="49" fill="${CRIMSON}"/>
    <path d="M7 56 C 15 56 18 50 25 50 C 33 50 35 64 42 64 C 46 64 47 31 50 31 C 53 31 54 64 58 64 C 65 64 67 50 75 50 C 82 50 85 56 93 56"
      fill="none" stroke="#ffffff" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  const annotations = `
    <g data-typography-role="brand">
      <text x="872" y="331" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
        font-size="102" font-weight="800" letter-spacing="1" textLength="606"
        lengthAdjust="spacingAndGlyphs" fill="#000000">BROADCOM</text>
      <text x="1185" y="271" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
        font-size="18" font-weight="700" fill="#000000">®</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'broadcom-q3-fy23',
    name: 'Broadcom · Q3 FY23',
    company: 'Broadcom',
    meta: {
      company: 'Broadcom',
      title: 'Broadcom Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending July. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/broadcom-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2350,
      periodX: 400,
      periodY: 1311,
      periodNoteY: 1357,
      logoWidth: 190,
      logoHeight: 190,
      logoY: 353,
      logoViewBox: '0 0 100 100',
      logoSvg: LOGO,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: '#5e5e5e',
      noteColor: NOTE,
      palette: {
        source: { node: '#000000', label: '#000000' },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: '#858585',
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 38.4,
      nodes: {
        semiconductor_solutions: { x: 370, y: 594, width: 71, height: 267 },
        infrastructure_software: { x: 370, y: 1093, width: 71, height: 72 },
        revenue: { x: 837, y: 711, width: 70, height: 343 },
        gross_profit: { x: 1314, y: 596, width: 71, height: 238 },
        cost_of_revenue: { x: 1316, y: 1042, width: 72, height: 102 },
        operating_profit: { x: 1777, y: 512, width: 70, height: 148 },
        operating_expenses: { x: 1777, y: 831, width: 70, height: 88 },
        net_profit: { x: 2238, y: 394, width: 71, height: 126 },
        tax: { x: 2238, y: 701, width: 71, height: 9 },
        other: { x: 2238, y: 806, width: 71, height: 9 },
        rnd: { x: 2238, y: 914, width: 71, height: 51 },
        sga: { x: 2238, y: 1068, width: 71, height: 14 },
        amortization: { x: 2238, y: 1210, width: 71, height: 12 },
        restructuring: { x: 2238, y: 1359, width: 71, height: 7 },
      },
      labels: {
        semiconductor_solutions: {
          blocks: [
            {
              x: 400, top: 490, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 44, weight: 400 },
                { text: '+5% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 679, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Semiconductor', size: 40, weight: 800 },
                { text: 'solutions', size: 40, weight: 800 },
              ],
            },
          ],
        },
        infrastructure_software: {
          blocks: [
            {
              x: 400, top: 990, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 44, weight: 400 },
                { text: '+5% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 1078, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Infrastructure', size: 40, weight: 800 },
                { text: 'software', size: 40, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [{
            x: 872, top: 570, anchor: 'middle', lineGap: 5,
            lines: [
              { text: 'Revenue', size: 40, weight: 800 },
              { text: '$value', size: 40, weight: 400 },
              { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1350, top: 414, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
              { text: '69% margin', size: 30, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 30, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1340, top: 1169, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Cost of', size: 36, weight: 800 },
              { text: 'revenue', size: 36, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1812, top: 334, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
              { text: '43% margin', size: 30, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 30, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1808, top: 945, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Operating', size: 36, weight: 800 },
              { text: 'Expenses', size: 36, weight: 800 },
              { text: '$value', size: 36, weight: 400 },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2428, top: 379, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
              { text: '37% margin', size: 30, weight: 400, color: NOTE },
              { text: '+2pp Y/Y', size: 30, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2435, top: 675, anchor: 'middle', lineGap: 2,
            lines: [
              { text: 'Tax', size: 30, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        other: {
          blocks: [{
            x: 2435, top: 777, anchor: 'middle', lineGap: 2,
            lines: [
              { text: 'Other', size: 30, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: 2445, top: 909, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'R&D ($1.4B)', size: 34, weight: 800 },
              { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: 2444, top: 1050, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'SG&A ($0.4B)', size: 30, weight: 800 },
              { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
              { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        amortization: {
          blocks: [{
            x: 2479, top: 1184, anchor: 'middle', lineGap: 5,
            lines: [
              { text: 'Amortization ($0.4B)', size: 30, weight: 800 },
              { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        restructuring: {
          blocks: [{
            x: 2479, top: 1306, anchor: 'middle', lineGap: 5,
            lines: [
              { text: 'Restructuring ($0.2B)', size: 30, weight: 800 },
              { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
      },
    },

    nodes: [
      { id: 'semiconductor_solutions', col: 0, order: 0, type: 'source', label: ['Semiconductor', 'solutions'], value: 6.9, notes: ['+5% Y/Y'], color: '#000000', labelColor: '#000000', linkTint: '#858585' },
      { id: 'infrastructure_software', col: 0, order: 1, type: 'source', label: ['Infrastructure', 'software'], value: 1.9, notes: ['+5% Y/Y'], color: '#000000', labelColor: '#000000', linkTint: '#858585' },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 8.9, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.2, notes: ['69% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.7 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.9, notes: ['43% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 2.3 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.3, notes: ['37% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'other', col: 4, order: 2, type: 'cost', label: 'Other', value: 0.3 },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 1.4, notes: ['15% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 0.4, notes: ['4% of revenue', '+0pp Y/Y'] },
      { id: 'amortization', col: 4, order: 5, type: 'cost', label: 'Amortization', value: 0.4, notes: ['4% of revenue'] },
      { id: 'restructuring', col: 4, order: 6, type: 'cost', label: 'Restructuring', value: 0.2, notes: ['2% of revenue'] },
    ],

    links: [
      { source: 'semiconductor_solutions', target: 'revenue', value: 6.9, sourceWidth: 267, targetWidth: 268, y0: 727.5, y1: 845, targetOrder: 0 },
      { source: 'infrastructure_software', target: 'revenue', value: 1.9, sourceWidth: 72, targetWidth: 75, y0: 1129, y1: 1016.5, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 6.2, sourceWidth: 238, targetWidth: 238, y0: 830, y1: 715, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.7, sourceWidth: 105, targetWidth: 102, y0: 1001.5, y1: 1093, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.9, sourceWidth: 148, targetWidth: 148, y0: 670, y1: 586, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.3, sourceWidth: 90, targetWidth: 88, y0: 789, y1: 875, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.3, sourceWidth: 127, targetWidth: 126, y0: 575.5, y1: 457, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 11, targetWidth: 9, y0: 644.5, y1: 705.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.3, sourceWidth: 10, targetWidth: 9, y0: 655, y1: 810.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.4, sourceWidth: 50, targetWidth: 51, y0: 856, y1: 939.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.4, sourceWidth: 17, targetWidth: 14, y0: 889.5, y1: 1075, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.4, sourceWidth: 13, targetWidth: 12, y0: 904.5, y1: 1216, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.2, sourceWidth: 8, targetWidth: 7, y0: 915, y1: 1362.5, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Broadcom · 2023 财年第三季度',
        meta: {
          title: 'Broadcom 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 7 月',
          titleTextLength: 1500,
        },
        nodes: {
          semiconductor_solutions: { label: ['半导体', '解决方案'], notes: ['同比 +5%'] },
          infrastructure_software: { label: ['基础设施', '软件'], notes: ['同比 +5%'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 69%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 +0 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 4%', '同比 +0 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 4%'] },
          restructuring: { label: '重组', notes: ['占收入 2%'] },
        },
        layout: {
          labels: {
            semiconductor_solutions: {
              blocks: [
                {
                  x: 400, top: 490, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 44, weight: 400 },
                    { text: '同比 +5%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 195, top: 703, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '半导体解决方案', size: 40, weight: 800 }],
                },
              ],
            },
            infrastructure_software: {
              blocks: [
                {
                  x: 400, top: 990, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 44, weight: 400 },
                    { text: '同比 +5%', size: 30, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 195, top: 1105, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '基础设施软件', size: 40, weight: 800 }],
                },
              ],
            },
            revenue: {
              blocks: [{
                x: 872, top: 570, anchor: 'middle', lineGap: 5,
                lines: [
                  { text: '收入', size: 40, weight: 800 },
                  { text: '$value', size: 40, weight: 400 },
                  { text: '同比 +5%', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            gross_profit: {
              blocks: [{
                x: 1350, top: 414, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                  { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                  { text: '利润率 69%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 +2 个百分点', size: 26, weight: 400, color: NOTE },
                ],
              }],
            },
            cost_of_revenue: {
              blocks: [{
                x: 1340, top: 1169, anchor: 'middle', lineGap: 7,
                lines: [
                  { text: '收入', size: 36, weight: 800 },
                  { text: '成本', size: 36, weight: 800 },
                  { text: '$value', size: 36, weight: 400 },
                ],
              }],
            },
            operating_profit: {
              blocks: [{
                x: 1812, top: 334, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                  { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                  { text: '利润率 43%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 (1 个百分点)', size: 26, weight: 400, color: NOTE },
                ],
              }],
            },
            operating_expenses: {
              blocks: [{
                x: 1808, top: 960, anchor: 'middle', lineGap: 7,
                lines: [
                  { text: '运营费用', size: 36, weight: 800 },
                  { text: '$value', size: 36, weight: 400 },
                ],
              }],
            },
            net_profit: {
              blocks: [{
                x: 2428, top: 379, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                  { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                  { text: '利润率 37%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 +2 个百分点', size: 26, weight: 400, color: NOTE },
                ],
              }],
            },
            tax: {
              blocks: [{
                x: 2435, top: 675, anchor: 'middle', lineGap: 2,
                lines: [
                  { text: '税费', size: 30, weight: 800 },
                  { text: '$value', size: 30, weight: 400 },
                ],
              }],
            },
            other: {
              blocks: [{
                x: 2435, top: 777, anchor: 'middle', lineGap: 2,
                lines: [
                  { text: '其他', size: 30, weight: 800 },
                  { text: '$value', size: 30, weight: 400 },
                ],
              }],
            },
            rnd: {
              blocks: [{
                x: 2445, top: 909, anchor: 'middle', lineGap: 2,
                lines: [
                  { text: '研发', size: 28, weight: 800 },
                  { text: '$value', size: 26, weight: 400 },
                  { text: '占收入 15%', size: 22, weight: 400, color: NOTE },
                  { text: '同比 +0 个百分点', size: 22, weight: 400, color: NOTE },
                ],
              }],
            },
            sga: {
              blocks: [{
                x: 2444, top: 1030, anchor: 'middle', lineGap: 4,
                lines: [
                  { text: '销售及行政', size: 30, weight: 800 },
                  { text: '$value', size: 28, weight: 400 },
                  { text: '占收入 4%', size: 24, weight: 400, color: NOTE },
                  { text: '同比 +0 个百分点', size: 24, weight: 400, color: NOTE },
                ],
              }],
            },
            amortization: {
              blocks: [{
                x: 2479, top: 1168, anchor: 'middle', lineGap: 5,
                lines: [
                  { text: '摊销', size: 32, weight: 800 },
                  { text: '$value', size: 28, weight: 400 },
                  { text: '占收入 4%', size: 24, weight: 400, color: NOTE },
                ],
              }],
            },
            restructuring: {
              blocks: [{
                x: 2479, top: 1290, anchor: 'middle', lineGap: 5,
                lines: [
                  { text: '重组', size: 32, weight: 800 },
                  { text: '$value', size: 28, weight: 400 },
                  { text: '占收入 2%', size: 24, weight: 400, color: NOTE },
                ],
              }],
            },
          },
        },
      },
    },
  });
})();

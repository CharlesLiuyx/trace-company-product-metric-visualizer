/* ====================================================================
 *  TSMC - Q2 FY25 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q2-fy25.png as a fixed
 *  d3-sankey layout with an SVG-only TSMC logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const HPC = '#ee4b2b';
  const HPC_LINK = '#efa698';
  const SMARTPHONE = '#000080';
  const SMARTPHONE_LINK = '#8585bf';
  const IOT = '#bf9b30';
  const IOT_LINK = '#efdfa6';
  const AUTOMOTIVE = '#ffa400';
  const AUTOMOTIVE_LINK = '#f7ce85';
  const DCE = '#0098ff';
  const DCE_LINK = '#85d0f1';
  const OTHERS = '#58d414';
  const OTHERS_LINK = '#abe28e';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q2-fy25',
    name: 'TSMC · Q2 FY25',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q2 FY25 Income Statement',
      period: 'Q2 FY25',
      periodNote: 'Ending Jun. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q2-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 420,
      logoHeight: 259,
      logoY: 221,
      logoViewBox: '0 0 320 250',
      logoSvg: businessIcons.tsmcLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: HPC, label: HPC },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: HPC_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },

    layout: {
      scale: 9.72,
      nodes: {
        hpc: { x: 448, y: 396, width: 73, height: 178 },
        smartphones: { x: 448, y: 684, width: 73, height: 81 },
        iot: { x: 448, y: 889, width: 73, height: 14 },
        automotive: { x: 448, y: 1031, width: 73, height: 16 },
        dce: { x: 448, y: 1171, width: 73, height: 2 },
        others: { x: 448, y: 1292, width: 73, height: 6 },
        revenue: { x: 915, y: 643, width: 72, height: 297 },
        gross_profit: { x: 1382, y: 549, width: 73, height: 172 },
        cost_of_revenue: { x: 1382, y: 925, width: 73, height: 120 },
        operating_profit: { x: 1850, y: 447, width: 72, height: 145 },
        operating_expenses: { x: 1855, y: 811, width: 72, height: 25 },
        other: { x: 2202, y: 504, width: 72, height: 8 },
        net_profit: { x: 2316, y: 342, width: 73, height: 124 },
        tax: { x: 2316, y: 667, width: 73, height: 29 },
        rnd: { x: 2316, y: 936, width: 73, height: 17 },
        sga: { x: 2316, y: 1160, width: 73, height: 6 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 431, top: 423, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '60% of revenue +8pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 431, top: 689, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '27% of revenue (6pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 432, top: 879, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
                { text: '5% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 427, top: 1006, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
                { text: '5% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dce: {
          blocks: [
            {
              x: 411, top: 1127, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Digital Consumer', size: 37, weight: 800, color: DCE },
                { text: 'Electronics', size: 37, weight: 800, color: DCE },
                { text: '1% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 426, top: 1267, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Others', size: 38, weight: 800, color: OTHERS },
                { text: '2% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 952, top: 495, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+44% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1418, top: 371, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '59% margin', size: 28, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1417, top: 1061, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1885, top: 270, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '50% margin', size: 28, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1885, top: 852, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 35, weight: 800 },
                { text: 'expenses', size: 35, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2241, top: 525, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2407, top: 322, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '43% margin', size: 28, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2499, top: 641, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 902, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 1125, anchor: 'middle', lineGap: 8,
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
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 18.1, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 8.1, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.5, color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.5, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.3, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.6, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 30.1, notes: ['+44% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 17.6, notes: ['59% margin', '+5pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 12.4 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 14.9, notes: ['50% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.7 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 1.0, valueText: '$1.0B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 12.8, notes: ['43% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 3.1 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 2.0, valueText: '($2.0B)' },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.7 },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 18.1, targetOrder: 0, width: 178, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 8.1, targetOrder: 1, width: 81, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.5, targetOrder: 2, width: 14, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.5, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.3, targetOrder: 4, width: 2, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.6, targetOrder: 5, width: 6, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 17.6, sourceOrder: 0, sourceWidth: 175, targetWidth: 172 },
      { source: 'revenue', target: 'cost_of_revenue', value: 12.4, sourceOrder: 1, sourceWidth: 120, targetWidth: 120 },
      { source: 'gross_profit', target: 'operating_profit', value: 14.9, sourceOrder: 0, sourceWidth: 147, targetWidth: 145 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.7, sourceOrder: 1, sourceWidth: 25, targetWidth: 25 },
      { source: 'operating_profit', target: 'net_profit', value: 11.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3.1, sourceOrder: 1, width: 29 },
      { source: 'other', target: 'net_profit', value: 1.0, width: 8, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 2.0, sourceOrder: 0, targetOrder: 0, width: 17 },
      { source: 'operating_expenses', target: 'sga', value: 0.7, sourceOrder: 1, targetOrder: 1, width: 6 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2025 财年第二季度',
        meta: {
          title: 'TSMC 2025 财年第二季度利润表',
          period: '2025 财年第二季度',
          periodNote: '截至 2025 年 6 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +44%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 50%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 43%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: {
              blocks: [
                {
                  x: 431, top: 423, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '高性能', size: 40, weight: 800, color: HPC },
                    { text: '计算', size: 40, weight: 800, color: HPC },
                    { text: '收入占比 60%，同比 +8 个百分点', size: 22, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            smartphones: {
              blocks: [
                {
                  x: 431, top: 689, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                    { text: '收入占比 27%，同比（6 个百分点）', size: 22, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            iot: {
              blocks: [
                {
                  x: 432, top: 879, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '物联网', size: 38, weight: 800, color: IOT },
                    { text: '收入占比 5%，同比（1 个百分点）', size: 22, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive: {
              blocks: [
                {
                  x: 427, top: 1006, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                    { text: '收入占比 5%，同比持平', size: 22, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dce: {
              blocks: [
                {
                  x: 411, top: 1127, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '数字消费', size: 37, weight: 800, color: DCE },
                    { text: '电子', size: 37, weight: 800, color: DCE },
                    { text: '收入占比 1%，同比（1 个百分点）', size: 22, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            others: {
              blocks: [
                {
                  x: 426, top: 1267, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '其他', size: 38, weight: 800, color: OTHERS },
                    { text: '收入占比 2%，同比持平', size: 22, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2520, top: 1125, anchor: 'middle', lineGap: 8,
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

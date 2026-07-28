/* ====================================================================
 *  TSMC - Q3 FY25 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q3-fy25.png as a fixed
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
  const IOT = '#edc949';
  const IOT_LINK = '#efdfa6';
  const AUTOMOTIVE = '#ffa500';
  const AUTOMOTIVE_LINK = '#f7ce85';
  const DCE = '#3bacfb';
  const DCE_LABEL = '#0098ff';
  const DCE_LINK = '#85d0f1';
  const OTHERS = '#57d014';
  const OTHERS_LABEL = '#58d414';
  const OTHERS_LINK = '#abe28e';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q3-fy25',
    name: 'TSMC · Q3 FY25',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2058,
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
      scale: 9.49,
      nodes: {
        hpc: { x: 449, y: 386, width: 71, height: 177 },
        smartphones: { x: 449, y: 688, width: 71, height: 93 },
        iot: { x: 449, y: 892, width: 71, height: 14 },
        automotive: { x: 449, y: 1019, width: 71, height: 13 },
        dce: { x: 449, y: 1162, width: 71, height: 1 },
        others: { x: 449, y: 1288, width: 71, height: 3 },
        revenue: { x: 916, y: 646, width: 70, height: 314 },
        gross_profit: { x: 1383, y: 540, width: 71, height: 185 },
        cost_of_revenue: { x: 1383, y: 926, width: 71, height: 125 },
        operating_profit: { x: 1851, y: 452, width: 70, height: 158 },
        operating_expenses: { x: 1851, y: 817, width: 70, height: 27 },
        other: { x: 2198, y: 542, width: 70, height: 5 },
        net_profit: { x: 2317, y: 354, width: 71, height: 143 },
        tax: { x: 2317, y: 698, width: 71, height: 22 },
        rnd: { x: 2317, y: 917, width: 71, height: 18 },
        sga: { x: 2317, y: 1174, width: 71, height: 5 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 432, top: 428, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '57% of revenue +6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 432, top: 689, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '30% of revenue (4pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 432, top: 873, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: '#bf9b30' },
                { text: '5% of revenue (2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 429, top: 1006, anchor: 'end', lineGap: 10,
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
              x: 411, top: 1128, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Digital Consumer', size: 37, weight: 800, color: DCE_LABEL },
                { text: 'Electronics', size: 37, weight: 800, color: DCE_LABEL },
                { text: '1% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 422, top: 1274, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Others', size: 38, weight: 800, color: OTHERS_LABEL },
                { text: '2% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 951, top: 503, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+41% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1418, top: 355, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '59% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1418, top: 1060, anchor: 'middle', lineGap: 7,
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
              x: 1886, top: 266, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '51% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1886, top: 850, anchor: 'middle', lineGap: 8,
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
              x: 2233, top: 568, anchor: 'middle', lineGap: 7,
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
              x: 2406, top: 358, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '46% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2499, top: 668, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 900, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 1123, anchor: 'middle', lineGap: 8,
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
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 18.9, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 9.9, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.7, color: IOT, labelColor: '#bf9b30', linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.6, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.3, color: DCE, labelColor: DCE_LABEL, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.7, color: OTHERS, labelColor: OTHERS_LABEL, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 33.1, notes: ['+41% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 19.7, notes: ['59% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 13.4 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 16.7, notes: ['51% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.9 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.8 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 15.1, notes: ['46% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.5 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 2.1 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.8 },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 18.9, sourceWidth: 177, targetWidth: 179, y0: 474.5, y1: 735.5, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 9.9, sourceWidth: 93, targetWidth: 95, y0: 734.5, y1: 872.5, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.7, sourceWidth: 14, targetWidth: 16, y0: 899, y1: 928, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.6, sourceWidth: 13, targetWidth: 16, y0: 1025.5, y1: 944, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.3, sourceWidth: 1, targetWidth: 3, y0: 1162.5, y1: 953.5, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.7, sourceWidth: 3, targetWidth: 5, y0: 1289.5, y1: 957.5, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 19.7, sourceWidth: 188, targetWidth: 185, y0: 740, y1: 632.5, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.4, sourceWidth: 126, targetWidth: 125, y0: 897, y1: 988.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 16.7, sourceWidth: 158, targetWidth: 158, y0: 619, y1: 531, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.9, sourceWidth: 27, targetWidth: 27, y0: 711.5, y1: 830.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 14.3, sourceWidth: 136, targetWidth: 137, y0: 520, y1: 422.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.5, sourceWidth: 22, targetWidth: 22, y0: 599, y1: 709, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.8, sourceWidth: 5, targetWidth: 6, y0: 544.5, y1: 494, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 2.1, sourceWidth: 22, targetWidth: 18, y0: 828, y1: 926, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.8, sourceWidth: 5, targetWidth: 5, y0: 841.5, y1: 1176.5, targetOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2025 财年第三季度',
        meta: {
          title: 'TSMC 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +41%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 51%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 46%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: {
              blocks: [
                {
                  x: 432, top: 428, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '高性能', size: 40, weight: 800, color: HPC },
                    { text: '计算', size: 40, weight: 800, color: HPC },
                    { text: '占收入 57%　同比 +6 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            smartphones: {
              blocks: [
                {
                  x: 432, top: 689, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                    { text: '占收入 30%　同比 (4 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            iot: {
              blocks: [
                {
                  x: 432, top: 873, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '物联网', size: 38, weight: 800, color: '#bf9b30' },
                    { text: '占收入 5%　同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive: {
              blocks: [
                {
                  x: 429, top: 1006, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                    { text: '占收入 5%　同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dce: {
              blocks: [
                {
                  x: 411, top: 1128, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '数字消费', size: 37, weight: 800, color: DCE_LABEL },
                    { text: '电子', size: 37, weight: 800, color: DCE_LABEL },
                    { text: '占收入 1%　同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            others: {
              blocks: [
                {
                  x: 422, top: 1274, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '其他', size: 38, weight: 800, color: OTHERS_LABEL },
                    { text: '占收入 2%　同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2518, top: 1123, anchor: 'middle', lineGap: 8,
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

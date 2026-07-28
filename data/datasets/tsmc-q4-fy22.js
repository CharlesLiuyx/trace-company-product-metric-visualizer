/* ====================================================================
 *  TSMC - Q4 FY22 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q4-fy22.png as a fixed
 *  d3-sankey layout with an SVG-only TSMC logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const REVENUE_NOTE = '#797979';
  const BLACK = '#000000';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const HPC = '#000080';
  const HPC_LINK = '#8585bf';
  const SMARTPHONE = '#ed4b2b';
  const SMARTPHONE_LINK = '#efa698';
  const IOT = '#edc949';
  const IOT_LABEL = '#bf9b30';
  const IOT_LINK = '#efe0a6';
  const AUTOMOTIVE = '#ffa500';
  const AUTOMOTIVE_LINK = '#f7ce85';
  const DCE = '#0096ff';
  const DCE_LINK = '#85c9f7';
  const OTHERS = '#57d014';
  const OTHERS_LINK = '#abe28e';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q4-fy22',
    name: 'TSMC · Q4 FY22',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q4 FY22 Income Statement',
      period: 'Q4 FY22',
      periodNote: 'Ending Dec. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q4-fy22.png', width: 2667, height: 1500 },
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
      scale: 14.6,
      nodes: {
        hpc: { x: 416, y: 468, width: 71, height: 121 },
        smartphones: { x: 416, y: 687, width: 71, height: 109 },
        iot: { x: 416, y: 893, width: 71, height: 22 },
        automotive: { x: 416, y: 1020, width: 71, height: 15 },
        dce: { x: 416, y: 1150, width: 71, height: 4 },
        others: { x: 416, y: 1264, width: 71, height: 10 },
        revenue: { x: 883, y: 669, width: 70, height: 291 },
        gross_profit: { x: 1350, y: 608, width: 71, height: 180 },
        cost_of_revenue: { x: 1350, y: 948, width: 71, height: 109 },
        operating_profit: { x: 1815, y: 541, width: 70, height: 148 },
        operating_expenses: { x: 1823, y: 890, width: 70, height: 28 },
        other: { x: 2195, y: 644, width: 70, height: 3 },
        net_profit: { x: 2284, y: 482, width: 71, height: 136 },
        tax: { x: 2284, y: 737, width: 71, height: 16 },
        rnd: { x: 2284, y: 1025, width: 71, height: 18 },
        sga: { x: 2284, y: 1187, width: 71, height: 8 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 399, top: 472, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '42% of revenue +5pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 390, top: 696, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '38% of revenue (6pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 399, top: 870, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT_LABEL },
                { text: '8% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 399, top: 991, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
                { text: '6% of revenue +2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dce: {
          blocks: [
            {
              x: 388, top: 1095, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Digital Consumer', size: 37, weight: 800, color: DCE },
                { text: 'Electronics', size: 37, weight: 800, color: DCE },
                { text: '2% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 387, top: 1247, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Others', size: 38, weight: 800, color: OTHERS },
                { text: '4% of revenue +1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 918, top: 520, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+27% Y/Y', size: 28, weight: 400, color: REVENUE_NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1386, top: 427, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '62% margin', size: 28, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1386, top: 1082, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'sales', size: 36, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1850, top: 359, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '52% margin', size: 28, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1858, top: 940, anchor: 'middle', lineGap: 8,
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
              x: 2226, top: 654, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other gains', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2374, top: 482, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '47% margin', size: 28, weight: 400, color: NOTE },
                { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2442, top: 712, anchor: 'middle', lineGap: 8,
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
              x: 2448, top: 992, anchor: 'middle', lineGap: 8,
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
              x: 2448, top: 1153, anchor: 'middle', lineGap: 8,
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
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 8.4, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 7.6, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.6, color: IOT, labelColor: IOT_LABEL, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.2, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.4, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.8, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 19.9, notes: ['+27% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.4, notes: ['62% margin', '+10pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 7.5 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 10.4, notes: ['52% margin', '+10pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.1 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other gains', value: 0.3 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 9.4, notes: ['47% margin', '+9pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.2 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.4 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.6 },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 8.4, sourceWidth: 121, targetWidth: 123, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 7.6, sourceWidth: 109, targetWidth: 111, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.6, sourceWidth: 22, targetWidth: 23, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.2, sourceWidth: 15, targetWidth: 17, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.4, sourceWidth: 4, targetWidth: 6, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.8, sourceWidth: 10, targetWidth: 11, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 12.4, sourceWidth: 182, targetWidth: 180, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.5, sourceWidth: 109, targetWidth: 109, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 10.4, sourceWidth: 152, targetWidth: 148, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.1, sourceWidth: 28, targetWidth: 28, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 9.2, sourceWidth: 132, targetWidth: 133, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.2, sourceWidth: 16, targetWidth: 16, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.3, sourceWidth: 3, targetWidth: 3, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.4, sourceWidth: 20, targetWidth: 18, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.6, sourceWidth: 8, targetWidth: 8, targetOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2022 财年第四季度',
        meta: {
          title: 'TSMC 2022 财年第四季度利润表',
          period: '2022 财年第四季度',
          periodNote: '截至 2022 年 12 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 62%', '同比 +10 个百分点'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 52%', '同比 +10 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 47%', '同比 +9 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: {
              blocks: [
                {
                  x: 399, top: 493, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '高性能计算', size: 40, weight: 800, color: HPC },
                    { text: '占收入 42%，同比 +5 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            smartphones: {
              blocks: [
                {
                  x: 390, top: 696, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                    { text: '占收入 38%，同比 (6 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            iot: {
              blocks: [
                {
                  x: 399, top: 870, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '物联网', size: 38, weight: 800, color: IOT_LABEL },
                    { text: '占收入 8%，同比 (1 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive: {
              blocks: [
                {
                  x: 399, top: 991, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                    { text: '占收入 6%，同比 +2 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dce: {
              blocks: [
                {
                  x: 388, top: 1116, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '数字消费电子', size: 38, weight: 800, color: DCE },
                    { text: '占收入 2%，同比 (1 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            others: {
              blocks: [
                {
                  x: 387, top: 1247, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '其他', size: 38, weight: 800, color: OTHERS },
                    { text: '占收入 4%，同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2226, top: 654, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '其他收益', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2490, top: 1153, anchor: 'middle', lineGap: 8,
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

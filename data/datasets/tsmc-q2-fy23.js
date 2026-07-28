/* ====================================================================
 *  TSMC - Q2 FY23 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q2-fy23.png as a fixed
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
  const HPC = '#000080';
  const HPC_LINK = '#8585bf';
  const SMARTPHONE = '#ee4b2b';
  const SMARTPHONE_LINK = '#efa698';
  const IOT = '#edc949';
  const IOT_LINK = '#efdfa6';
  const AUTOMOTIVE = '#ffa500';
  const AUTOMOTIVE_LINK = '#f7ce85';
  const DCE = '#0096ff';
  const DCE_LINK = '#85c9f7';
  const OTHERS = '#57d014';
  const OTHERS_LINK = '#abe28e';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q2-fy23',
    name: 'TSMC · Q2 FY23',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q2 FY23 Income Statement',
      period: 'Q2 FY23',
      periodNote: 'Ending Jun. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2059,
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
      scale: 17.64,
      nodes: {
        hpc: { x: 450, y: 460, width: 71, height: 121 },
        smartphones: { x: 450, y: 682, width: 71, height: 90 },
        iot: { x: 450, y: 880, width: 71, height: 20 },
        automotive: { x: 450, y: 1005, width: 71, height: 20 },
        dce: { x: 450, y: 1141, width: 71, height: 6 },
        others: { x: 450, y: 1268, width: 71, height: 10 },
        revenue: { x: 917, y: 687, width: 70, height: 277 },
        gross_profit: { x: 1386, y: 603, width: 72, height: 149 },
        cost_of_revenue: { x: 1389, y: 924, width: 71, height: 126 },
        operating_profit: { x: 1842, y: 527, width: 70, height: 115 },
        operating_expenses: { x: 1839, y: 778, width: 70, height: 33 },
        other: { x: 2189, y: 620, width: 70, height: 5 },
        net_profit: { x: 2316, y: 461, width: 71, height: 102 },
        tax: { x: 2318, y: 767, width: 71, height: 16 },
        rnd: { x: 2318, y: 1055, width: 71, height: 22 },
        sga: { x: 2318, y: 1266, width: 71, height: 8 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 430, top: 462, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '44% of revenue +1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 424, top: 683, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '33% of revenue (5pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 430, top: 847, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
                { text: '8% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 430, top: 968, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
                { text: '8% of revenue +3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dce: {
          blocks: [
            {
              x: 422, top: 1101, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Digital Consumer', size: 37, weight: 800, color: DCE },
                { text: 'Electronics', size: 37, weight: 800, color: DCE },
                { text: '3% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 420, top: 1249, anchor: 'end', lineGap: 10,
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
              x: 952, top: 544, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(14%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1422, top: 425, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '54% margin', size: 28, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1424, top: 1077, anchor: 'middle', lineGap: 7,
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
              x: 1877, top: 351, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '42% margin', size: 28, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1874, top: 835, anchor: 'middle', lineGap: 8,
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
              x: 2224, top: 639, anchor: 'middle', lineGap: 7,
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
              x: 2409, top: 466, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '38% margin', size: 28, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2482, top: 744, anchor: 'middle', lineGap: 8,
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
              x: 2480, top: 1032, anchor: 'middle', lineGap: 8,
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
              x: 2482, top: 1222, anchor: 'middle', lineGap: 8,
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
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 6.9, notes: ['44% of revenue +1pp Y/Y'], color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 5.2, notes: ['33% of revenue (5pp) Y/Y'], color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.3, notes: ['8% of revenue Flat Y/Y'], color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.3, notes: ['8% of revenue +3pp Y/Y'], color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.5, notes: ['3% of revenue Flat Y/Y'], color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.6, notes: ['4% of revenue +1pp Y/Y'], color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.7, notes: ['(14%) Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 8.5, notes: ['54% margin', '(5pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 7.2 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 6.6, notes: ['42% margin', '(7pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.9 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.4 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 5.9, notes: ['38% margin', '(7pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.1 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.4 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.5 },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 6.9, sourceWidth: 121, targetWidth: 121, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 5.2, sourceWidth: 90, targetWidth: 91, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.3, sourceWidth: 20, targetWidth: 23, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.3, sourceWidth: 20, targetWidth: 23, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.5, sourceWidth: 6, targetWidth: 9, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.6, sourceWidth: 10, targetWidth: 10, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 8.5, sourceWidth: 150, targetWidth: 149, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.2, sourceWidth: 127, targetWidth: 126, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 6.6, sourceWidth: 116, targetWidth: 115, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.9, sourceWidth: 33, targetWidth: 33, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 5.5, sourceWidth: 98, targetWidth: 97, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.1, sourceWidth: 17, targetWidth: 16, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.4, sourceWidth: 5, targetWidth: 5, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.4, sourceWidth: 24, targetWidth: 22, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.5, sourceWidth: 9, targetWidth: 8, targetOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2023 财年第二季度',
        meta: {
          title: 'TSMC 2023 财年第二季度利润表',
          period: '2023 财年第二季度',
          periodNote: '截至 2023 年 6 月',
        },
        nodes: {
          hpc: { label: '高性能计算', notes: ['占收入 44%　同比 +1 个百分点'] },
          smartphones: { label: '智能手机', notes: ['占收入 33%　同比 (5 个百分点)'] },
          iot: { label: '物联网', notes: ['占收入 8%　同比持平'] },
          automotive: { label: '汽车', notes: ['占收入 8%　同比 +3 个百分点'] },
          dce: { label: '数字消费电子', notes: ['占收入 3%　同比持平'] },
          others: { label: '其他', notes: ['占收入 4%　同比 +1 个百分点'] },
          revenue: { label: '收入', notes: ['同比 (14%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 (5 个百分点)'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 (7 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 38%', '同比 (7 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: {
              blocks: [
                {
                  x: 430, top: 462, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '高性能', size: 40, weight: 800, color: HPC },
                    { text: '计算', size: 40, weight: 800, color: HPC },
                    { text: '占收入 44%　同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            smartphones: {
              blocks: [
                {
                  x: 424, top: 683, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                    { text: '占收入 33%　同比 (5 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            iot: {
              blocks: [
                {
                  x: 430, top: 847, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '物联网', size: 38, weight: 800, color: IOT },
                    { text: '占收入 8%　同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive: {
              blocks: [
                {
                  x: 430, top: 968, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                    { text: '占收入 8%　同比 +3 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dce: {
              blocks: [
                {
                  x: 422, top: 1101, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '数字消费', size: 37, weight: 800, color: DCE },
                    { text: '电子', size: 37, weight: 800, color: DCE },
                    { text: '占收入 3%　同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            others: {
              blocks: [
                {
                  x: 420, top: 1249, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '其他', size: 38, weight: 800, color: OTHERS },
                    { text: '占收入 4%　同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2518, top: 1222, anchor: 'middle', lineGap: 8,
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

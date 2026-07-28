/* ====================================================================
 *  TSMC - Q3 FY23 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q3-fy23.png as a fixed
 *  d3-sankey layout with the shared SVG-only TSMC logo.
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
  const IOT_LABEL = '#bf9b30';
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
    key: 'tsmc-q3-fy23',
    name: 'TSMC · Q3 FY23',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q3 FY23 Income Statement',
      period: 'Q3 FY23',
      periodNote: 'Ending Sep. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
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
      scale: 17.0,
      nodes: {
        hpc: { x: 451, y: 432, width: 73, height: 124 },
        smartphones: { x: 451, y: 676, width: 73, height: 117 },
        iot: { x: 451, y: 884, width: 73, height: 29 },
        automotive: { x: 451, y: 1028, width: 73, height: 17 },
        dce: { x: 451, y: 1164, width: 73, height: 7 },
        others: { x: 451, y: 1302, width: 73, height: 11 },
        revenue: { x: 918, y: 687, width: 73, height: 294 },
        gross_profit: { x: 1387, y: 594, width: 74, height: 158 },
        cost_of_revenue: { x: 1382, y: 928, width: 74, height: 134 },
        operating_profit: { x: 1863, y: 492, width: 73, height: 122 },
        operating_expenses: { x: 1865, y: 810, width: 73, height: 37 },
        other: { x: 2195, y: 552, width: 72, height: 8 },
        net_profit: { x: 2319, y: 370, width: 73, height: 114 },
        tax: { x: 2319, y: 749, width: 73, height: 17 },
        rnd: { x: 2319, y: 981, width: 73, height: 29 },
        sga: { x: 2319, y: 1160, width: 73, height: 10 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 432, top: 445, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '42% of revenue +3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 432, top: 692, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '39% of revenue (2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 434, top: 861, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT_LABEL },
                { text: '9% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 434, top: 996, anchor: 'end', lineGap: 10,
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
              x: 427, top: 1129, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Digital Consumer', size: 37, weight: 800, color: DCE },
                { text: 'Electronics', size: 37, weight: 800, color: DCE },
                { text: '2% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 427, top: 1288, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Others', size: 38, weight: 800, color: OTHERS },
                { text: '3% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 954, top: 544, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(15%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1443, top: 408, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '54% margin', size: 28, weight: 400, color: NOTE },
                { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1422, top: 1082, anchor: 'middle', lineGap: 7,
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
              x: 1923, top: 313, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '42% margin', size: 28, weight: 400, color: NOTE },
                { text: '(9pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1899, top: 868, anchor: 'middle', lineGap: 8,
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
              x: 2230, top: 575, anchor: 'middle', lineGap: 7,
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
              x: 2417, top: 372, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '39% margin', size: 28, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2494, top: 728, anchor: 'middle', lineGap: 8,
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
              x: 2496, top: 952, anchor: 'middle', lineGap: 8,
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
              x: 2494, top: 1141, anchor: 'middle', lineGap: 8,
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
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 7.3, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 6.7, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.6, color: IOT, labelColor: IOT_LABEL, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 0.9, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.3, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.5, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 17.3, notes: ['(15%) Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.4, notes: ['54% margin', '(6pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 7.9 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 7.2, notes: ['42% margin', '(9pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.2 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.4 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 6.7, notes: ['39% margin', '(7pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.0, valueText: '($1.0B)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.6 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.6 },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 7.3, sourceWidth: 124, targetWidth: 123, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 6.7, sourceWidth: 116, targetWidth: 115, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.6, sourceWidth: 28, targetWidth: 27, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 0.9, sourceWidth: 15, targetWidth: 15, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.3, sourceWidth: 7, targetWidth: 6, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.5, sourceWidth: 10, targetWidth: 8, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 9.4, sourceWidth: 160, targetWidth: 158, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.9, sourceWidth: 134, targetWidth: 134, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 7.2, sourceWidth: 121, targetWidth: 122, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.2, sourceWidth: 37, targetWidth: 37, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 6.2, targetWidth: 106, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.0, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.4, sourceWidth: 8, targetWidth: 8, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.6, sourceWidth: 28, targetWidth: 29, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.6, sourceWidth: 9, targetWidth: 10, targetOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2023 财年第三季度',
        meta: {
          title: 'TSMC 2023 财年第三季度利润表',
          period: '2023 财年第三季度',
          periodNote: '截至 2023 年 9 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 (15%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 (6 个百分点)'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 (9 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 39%', '同比 (7 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: {
              blocks: [
                {
                  x: 432, top: 445, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '高性能计算', size: 40, weight: 800, color: HPC },
                    { text: '占收入 42% 同比 +3 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            smartphones: {
              blocks: [
                {
                  x: 432, top: 692, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                    { text: '占收入 39% 同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            iot: {
              blocks: [
                {
                  x: 434, top: 861, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '物联网', size: 38, weight: 800, color: IOT_LABEL },
                    { text: '占收入 9% 同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive: {
              blocks: [
                {
                  x: 434, top: 996, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                    { text: '占收入 5% 同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dce: {
              blocks: [
                {
                  x: 427, top: 1129, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '数字消费电子', size: 37, weight: 800, color: DCE },
                    { text: '占收入 2% 同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            others: {
              blocks: [
                {
                  x: 427, top: 1288, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '其他', size: 38, weight: 800, color: OTHERS },
                    { text: '占收入 3% 同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2520, top: 1141, anchor: 'middle', lineGap: 8,
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

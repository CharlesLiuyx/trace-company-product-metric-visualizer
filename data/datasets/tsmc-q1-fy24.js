/* ====================================================================
 *  TSMC - Q1 FY24 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q1-fy24.png as a fixed
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
    key: 'tsmc-q1-fy24',
    name: 'TSMC · Q1 FY24',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q1 FY24 Income Statement',
      period: 'Q1 FY24',
      periodNote: 'Ending Mar. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2061,
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
      scale: 15.0,
      nodes: {
        hpc: { x: 454, y: 474, width: 71, height: 130 },
        smartphones: { x: 454, y: 722, width: 71, height: 106 },
        iot: { x: 454, y: 938, width: 71, height: 15 },
        automotive: { x: 454, y: 1063, width: 71, height: 15 },
        dce: { x: 454, y: 1203, width: 71, height: 4 },
        others: { x: 454, y: 1327, width: 71, height: 4 },
        revenue: { x: 916, y: 697, width: 70, height: 284 },
        gross_profit: { x: 1388, y: 587, width: 71, height: 150 },
        cost_of_revenue: { x: 1390, y: 951, width: 72, height: 132 },
        operating_profit: { x: 1846, y: 478, width: 70, height: 117 },
        operating_expenses: { x: 1848, y: 799, width: 70, height: 30 },
        other: { x: 2196, y: 525, width: 70, height: 7 },
        net_profit: { x: 2322, y: 369, width: 71, height: 106 },
        tax: { x: 2322, y: 692, width: 71, height: 17 },
        rnd: { x: 2322, y: 914, width: 71, height: 20 },
        sga: { x: 2322, y: 1190, width: 71, height: 7 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 435, top: 486, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '46% of revenue +2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 426, top: 744, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '38% of revenue +4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 429, top: 928, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
                { text: '6% of revenue (3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 428, top: 1049, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
                { text: '6% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dce: {
          blocks: [
            {
              x: 421, top: 1159, anchor: 'end', lineGap: 8,
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
              x: 422, top: 1308, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Others', size: 38, weight: 800, color: OTHERS },
                { text: '2% of revenue (2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 951, top: 550, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1429, top: 405, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '53% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1423, top: 1108, anchor: 'middle', lineGap: 7,
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
              x: 1894, top: 300, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '42% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1885, top: 855, anchor: 'middle', lineGap: 8,
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
              x: 2229, top: 542, anchor: 'middle', lineGap: 7,
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
              x: 2500, top: 355, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '38% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2493, top: 677, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 893, anchor: 'middle', lineGap: 8,
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
              x: 2501, top: 1162, anchor: 'middle', lineGap: 8,
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
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 8.7, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 7.2, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.1, color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.1, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.4, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.4, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 18.9, valueText: '$18.9B', notes: ['+17% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.0, valueText: '$10.0B', notes: ['53% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 8.9, valueText: '($8.9B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 7.9, valueText: '$7.9B', notes: ['42% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.1, valueText: '($2.1B)' },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.6, valueText: '$0.6B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 7.2, valueText: '$7.2B', notes: ['38% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.3, valueText: '($1.3B)' },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.5, valueText: '($1.5B)' },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.6, valueText: '($0.6B)' },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 8.7, sourceWidth: 130, targetWidth: 130, y0: 539, y1: 762, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 7.2, sourceWidth: 106, targetWidth: 108, y0: 775, y1: 881, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.1, sourceWidth: 15, targetWidth: 16, y0: 945.5, y1: 943, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.1, sourceWidth: 15, targetWidth: 16, y0: 1070.5, y1: 959, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.4, sourceWidth: 4, targetWidth: 7, y0: 1205, y1: 970.5, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.4, sourceWidth: 4, targetWidth: 7, y0: 1329, y1: 977.5, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 10.0, sourceWidth: 150, targetWidth: 150, y0: 772, y1: 662, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.9, sourceWidth: 134, targetWidth: 132, y0: 914, y1: 1017, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 7.9, sourceWidth: 117, targetWidth: 117, y0: 645.5, y1: 536.5, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.1, sourceWidth: 33, targetWidth: 30, y0: 720.5, y1: 814, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 6.6, sourceWidth: 100, targetWidth: 100, y0: 528, y1: 419, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.3, sourceWidth: 17, targetWidth: 17, y0: 586.5, y1: 700.5, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.6, sourceWidth: 7, targetWidth: 6, y0: 528.5, y1: 472, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.5, sourceWidth: 21, targetWidth: 20, y0: 809.5, y1: 924, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.6, sourceWidth: 9, targetWidth: 7, y0: 824.5, y1: 1193.5, targetOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2024 财年第一季度',
        meta: {
          title: 'TSMC 2024 财年第一季度利润表',
          period: '2024 财年第一季度',
          periodNote: '截至 2024 年 3 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 38%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            net_profit: {
              blocks: [
                {
                  x: 2506, top: 355, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 39, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 38%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2524, top: 1162, anchor: 'middle', lineGap: 8,
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

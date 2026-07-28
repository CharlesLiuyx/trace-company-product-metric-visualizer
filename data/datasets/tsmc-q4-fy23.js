/* ====================================================================
 *  TSMC - Q4 FY23 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q4-fy23.png as a fixed
 *  d3-sankey layout with the shared SVG-only TSMC logo.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#6c6c6c';
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
  const SMARTPHONE_LINK = '#ee9c8c';
  const IOT = '#edc949';
  const IOT_LINK = '#efe2aa';
  const AUTOMOTIVE = '#ffa500';
  const AUTOMOTIVE_LINK = '#ffd084';
  const DCE = '#0096ff';
  const DCE_LINK = '#83cfff';
  const OTHERS = '#57d014';
  const OTHERS_LINK = '#9de388';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};
  const tsmcLogo = (businessIcons.tsmcLogo || '')
    .replace('y="132" text-anchor="middle"', 'y="129" text-anchor="middle"')
    .replace('font-size="96"', 'font-size="106"')
    .replace(
      '<rect x="28" y="224" width="264" height="8"',
      '<rect x="53" y="200" width="214" height="8"'
    );

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q4-fy23',
    name: 'TSMC · Q4 FY23',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending Dec. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 420,
      logoHeight: 297,
      logoY: 265,
      logoViewBox: '0 0 320 250',
      logoSvg: tsmcLogo,
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
        hpc: { x: 452, y: 461, width: 73, height: 126 },
        smartphones: { x: 452, y: 708, width: 73, height: 126 },
        iot: { x: 452, y: 952, width: 73, height: 15 },
        automotive: { x: 452, y: 1098, width: 73, height: 15 },
        dce: { x: 452, y: 1230, width: 73, height: 6 },
        others: { x: 452, y: 1365, width: 73, height: 6 },
        revenue: { x: 919, y: 696, width: 72, height: 294 },
        gross_profit: { x: 1386, y: 571, width: 73, height: 156 },
        cost_of_revenue: { x: 1391, y: 950, width: 73, height: 138 },
        operating_profit: { x: 1855, y: 425, width: 73, height: 123 },
        operating_expenses: { x: 1860, y: 800, width: 73, height: 33 },
        other: { x: 2181, y: 472, width: 72, height: 9 },
        net_profit: { x: 2320, y: 306, width: 73, height: 112 },
        tax: { x: 2320, y: 680, width: 73, height: 20 },
        rnd: { x: 2320, y: 920, width: 73, height: 24 },
        sga: { x: 2320, y: 1126, width: 73, height: 11 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 431, top: 470, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '43% of revenue +1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 431, top: 732, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '43% of revenue +5pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 429, top: 914, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
                { text: '5% of revenue (3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 426, top: 1052, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
                { text: '5% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dce: {
          blocks: [
            {
              x: 421, top: 1156, anchor: 'end', lineGap: 8,
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
              x: 424, top: 1308, anchor: 'end', lineGap: 10,
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
              x: 955, top: 554, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1423, top: 391, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '53% margin', size: 28, weight: 400, color: NOTE },
                { text: '(9pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1428, top: 1106, anchor: 'middle', lineGap: 7,
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
              x: 1896, top: 242, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '42% margin', size: 28, weight: 400, color: NOTE },
                { text: '(10pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1896, top: 858, anchor: 'middle', lineGap: 8,
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
              x: 2219, top: 497, anchor: 'middle', lineGap: 7,
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
              x: 2408, top: 311, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '38% margin', size: 28, weight: 400, color: NOTE },
                { text: '(9pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2493, top: 651, anchor: 'middle', lineGap: 8,
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
              x: 2493, top: 1097, anchor: 'middle', lineGap: 8,
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
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 8.4, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.0, valueText: '$1.0B', color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.0, valueText: '$1.0B', color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.4, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.4, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 19.6, notes: ['(2%) Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.4, notes: ['53% margin', '(9pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 9.2 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 8.2, notes: ['42% margin', '(10pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.2 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.6 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 7.5, notes: ['38% margin', '(9pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.3 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.6 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.7 },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 8.4, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 8.4, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.0, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.0, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.4, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.4, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 10.4, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 9.2, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 8.2, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 6.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.3, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.6, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.6, targetOrder: 0, width: 23 },
      { source: 'operating_expenses', target: 'sga', value: 0.7, targetOrder: 1, width: 10 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2023 财年第四季度',
        meta: {
          title: 'TSMC 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 12 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 (2%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 (9 个百分点)'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 (10 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 38%', '同比 (9 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: {
              blocks: [
                {
                  x: 431, top: 470, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '高性能', size: 40, weight: 800, color: HPC },
                    { text: '计算', size: 40, weight: 800, color: HPC },
                    { text: '占收入 43%　同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            smartphones: {
              blocks: [
                {
                  x: 431, top: 732, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                    { text: '占收入 43%　同比 +5 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            iot: {
              blocks: [
                {
                  x: 429, top: 914, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '物联网', size: 38, weight: 800, color: IOT },
                    { text: '占收入 5%　同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive: {
              blocks: [
                {
                  x: 426, top: 1052, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                    { text: '占收入 5%　同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dce: {
              blocks: [
                {
                  x: 421, top: 1156, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '数字消费', size: 37, weight: 800, color: DCE },
                    { text: '电子', size: 37, weight: 800, color: DCE },
                    { text: '占收入 2%　同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            others: {
              blocks: [
                {
                  x: 424, top: 1308, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '其他', size: 38, weight: 800, color: OTHERS },
                    { text: '占收入 2%　同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2520, top: 1097, anchor: 'middle', lineGap: 8,
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

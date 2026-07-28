/* TSMC Q3 FY22 income statement ($B), reconstructed from the Source PNG. */
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
  const SMARTPHONE = '#ed4b2b';
  const SMARTPHONE_LINK = '#efa698';
  const HPC = '#000080';
  const HPC_LINK = '#8585bf';
  const IOT = '#edc949';
  const IOT_LINK = '#efe0a6';
  const AUTOMOTIVE = '#ffa400';
  const AUTOMOTIVE_LINK = '#f7ce85';
  const DCE = '#0098ff';
  const DCE_LINK = '#85c9f7';
  const OTHERS = '#58d414';
  const OTHERS_LINK = '#abe28e';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q3-fy22',
    name: 'TSMC · Q3 FY22',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q3 FY22 Income Statement',
      period: 'Q3 FY22',
      periodNote: 'Ending Sep. 2022',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 200,
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
        source: { node: SMARTPHONE, label: SMARTPHONE },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SMARTPHONE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    layout: {
      scale: 21.6,
      nodes: {
        smartphones: { x: 429, y: 451, width: 71, height: 177 },
        hpc: { x: 429, y: 675, width: 71, height: 168 },
        iot: { x: 429, y: 903, width: 71, height: 42 },
        automotive: { x: 429, y: 1051, width: 71, height: 20 },
        dce: { x: 429, y: 1186, width: 71, height: 6 },
        others: { x: 429, y: 1310, width: 71, height: 11 },
        revenue: { x: 1079, y: 599, width: 71, height: 437 },
        gross_profit: { x: 1503, y: 508, width: 71, height: 263 },
        cost_of_revenue: { x: 1503, y: 955, width: 72, height: 171 },
        operating_profit: { x: 1897, y: 459, width: 70, height: 221 },
        operating_expenses: { x: 1895, y: 918, width: 70, height: 41 },
        other: { x: 2183, y: 710, width: 70, height: 2 },
        net_profit: { x: 2283, y: 419, width: 71, height: 198 },
        tax: { x: 2283, y: 946, width: 71, height: 24 },
        rnd: { x: 2283, y: 1050, width: 71, height: 29 },
        sga: { x: 2283, y: 1195, width: 71, height: 10 },
      },
      labels: {
        smartphones: {
          blocks: [{
            x: 393, top: 510, anchor: 'end', lineGap: 10,
            lines: [
              { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
              { text: '41% of revenue (3pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        hpc: {
          blocks: [{
            x: 410, top: 700, anchor: 'end', lineGap: 10,
            lines: [
              { text: 'High Performance', size: 40, weight: 800, color: HPC },
              { text: 'Computing', size: 40, weight: 800, color: HPC },
              { text: '39% of revenue +2pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        iot: {
          blocks: [{
            x: 405, top: 892, anchor: 'end', lineGap: 10,
            lines: [
              { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
              { text: '10% of revenue +1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        automotive: {
          blocks: [{
            x: 411, top: 1030, anchor: 'end', lineGap: 10,
            lines: [
              { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
              { text: '5% of revenue +1pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        dce: {
          blocks: [{
            x: 396, top: 1146, anchor: 'end', lineGap: 8,
            lines: [
              { text: 'Digital Consumer', size: 37, weight: 800, color: DCE },
              { text: 'Electronics', size: 37, weight: 800, color: DCE },
              { text: '2% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        others: {
          blocks: [{
            x: 396, top: 1307, anchor: 'end', lineGap: 10,
            lines: [
              { text: 'Others', size: 38, weight: 800, color: OTHERS },
              { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        revenue: {
          blocks: [{
            x: 1115, top: 460, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Revenue', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '+36% Y/Y', size: 28, weight: 400, color: '#797979' },
            ],
          }],
        },
        gross_profit: {
          blocks: [{
            x: 1532, top: 328, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Gross profit', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '60% margin', size: 28, weight: 400, color: NOTE },
              { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        cost_of_revenue: {
          blocks: [{
            x: 1532, top: 1145, anchor: 'middle', lineGap: 7,
            lines: [
              { text: 'Cost of', size: 36, weight: 800 },
              { text: 'sales', size: 36, weight: 800 },
              { text: '$value', size: 35, weight: 400 },
            ],
          }],
        },
        operating_profit: {
          blocks: [{
            x: 1932, top: 276, anchor: 'middle', lineGap: 9,
            lines: [
              { text: 'Operating profit', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '51% margin', size: 28, weight: 400, color: NOTE },
              { text: '+9pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        operating_expenses: {
          blocks: [{
            x: 1921, top: 981, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Operating', size: 35, weight: 800 },
              { text: 'expenses', size: 35, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
            ],
          }],
        },
        other: {
          blocks: [{
            x: 2218, top: 718, anchor: 'middle', lineGap: 3,
            lines: [
              { text: 'Other gains', size: 28, weight: 800, color: '#008e00' },
              { text: '$value', size: 27, weight: 400, color: '#008e00' },
            ],
          }],
        },
        net_profit: {
          blocks: [{
            x: 2378, top: 440, anchor: 'start', lineGap: 9,
            lines: [
              { text: 'Net profit', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '46% margin', size: 28, weight: 400, color: NOTE },
              { text: '+8pp Y/Y', size: 28, weight: 400, color: NOTE },
            ],
          }],
        },
        tax: {
          blocks: [{
            x: 2457, top: 920, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'Tax', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        rnd: {
          blocks: [{
            x: 2459, top: 1039, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'R&D', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
        sga: {
          blocks: [{
            x: 2459, top: 1174, anchor: 'middle', lineGap: 8,
            lines: [
              { text: 'SG&A', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ],
          }],
        },
      },
    },
    nodes: [
      { id: 'smartphones', col: 0, order: 0, type: 'source', label: 'Smartphones', value: 8.3, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'hpc', col: 0, order: 1, type: 'source', label: ['High Performance', 'Computing'], value: 7.9, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 2.0, color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.0, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.4, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.6, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 20.2, notes: ['+36% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.2, notes: ['60% margin', '+9pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 8.0, valueText: '($8.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 10.2, notes: ['51% margin', '+9pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.0, valueText: '($2.0B)' },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other gains', value: 0.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 9.3, notes: ['46% margin', '+8pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.2 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.4 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.6 },
    ],
    links: [
      { source: 'smartphones', target: 'revenue', value: 8.3, sourceWidth: 177, targetWidth: 181, y0: 539.5, y1: 689.5, targetOrder: 0, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'hpc', target: 'revenue', value: 7.9, sourceWidth: 168, targetWidth: 170, y0: 759, y1: 865, targetOrder: 1, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'iot', target: 'revenue', value: 2.0, sourceWidth: 42, targetWidth: 45, y0: 924, y1: 972.5, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.0, sourceWidth: 20, targetWidth: 21, y0: 1061, y1: 1005.5, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.4, sourceWidth: 6, targetWidth: 9, y0: 1189, y1: 1020.5, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.6, sourceWidth: 11, targetWidth: 11, y0: 1315.5, y1: 1030.5, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 12.2, sourceWidth: 265, targetWidth: 263, y0: 731.5, y1: 639.5, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.0, sourceWidth: 172, targetWidth: 171, y0: 950, y1: 1040.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 10.2, sourceWidth: 222, targetWidth: 221, y0: 619, y1: 569.5, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.0, sourceWidth: 41, targetWidth: 41, y0: 750.5, y1: 938.5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 9.1, sourceWidth: 196, targetWidth: 194, y0: 557, y1: 516, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.2, sourceWidth: 25, targetWidth: 24, y0: 667.5, y1: 958, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.2, sourceWidth: 2, targetWidth: 4, y0: 711, y1: 615, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.4, sourceWidth: 28, targetWidth: 29, y0: 932, y1: 1064.5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.6, sourceWidth: 12, targetWidth: 10, y0: 952, y1: 1200, targetOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'TSMC · 2022 财年第三季度',
        meta: {
          title: 'TSMC 2022 财年第三季度利润表',
          period: '2022 财年第三季度',
          periodNote: '截至 2022 年 9 月',
        },
        nodes: {
          smartphones: { label: '智能手机', notes: ['占收入 41%', '同比 (3 个百分点)'] },
          hpc: { label: '高性能计算', notes: ['占收入 39%', '同比 +2 个百分点'] },
          iot: { label: '物联网', notes: ['占收入 10%', '同比 +1 个百分点'] },
          automotive: { label: '汽车', notes: ['占收入 5%', '同比 +1 个百分点'] },
          dce: { label: '数字消费电子', notes: ['占收入 2%', '同比 (1 个百分点)'] },
          others: { label: '其他', notes: ['占收入 3%'] },
          revenue: { label: '收入', notes: ['同比 +36%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 60%', '同比 +9 个百分点'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 51%', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他收益' },
          net_profit: { label: '净利润', notes: ['利润率 46%', '同比 +8 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            smartphones: {
              blocks: [{
                x: 393, top: 510, anchor: 'end', lineGap: 10,
                lines: [
                  { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                  { text: '占收入 41%，同比 -3 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            hpc: {
              blocks: [{
                x: 410, top: 720, anchor: 'end', lineGap: 10,
                lines: [
                  { text: '高性能计算', size: 40, weight: 800, color: HPC },
                  { text: '占收入 39%，同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            iot: {
              blocks: [{
                x: 405, top: 892, anchor: 'end', lineGap: 10,
                lines: [
                  { text: '物联网', size: 38, weight: 800, color: IOT },
                  { text: '占收入 10%，同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            automotive: {
              blocks: [{
                x: 411, top: 1030, anchor: 'end', lineGap: 10,
                lines: [
                  { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                  { text: '占收入 5%，同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            dce: {
              blocks: [{
                x: 396, top: 1146, anchor: 'end', lineGap: 8,
                lines: [
                  { text: '数字消费', size: 37, weight: 800, color: DCE },
                  { text: '电子', size: 37, weight: 800, color: DCE },
                  { text: '占收入 2%，同比 -1 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            others: {
              blocks: [{
                x: 396, top: 1307, anchor: 'end', lineGap: 10,
                lines: [
                  { text: '其他', size: 38, weight: 800, color: OTHERS },
                  { text: '占收入 3%', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            revenue: {
              blocks: [{
                x: 1115, top: 460, anchor: 'middle', lineGap: 9,
                lines: [
                  { text: '收入', size: 40, weight: 800 },
                  { text: '$value', size: 39, weight: 400 },
                  { text: '同比 +36%', size: 28, weight: 400, color: '#797979' },
                ],
              }],
            },
            gross_profit: {
              blocks: [{
                x: 1532, top: 328, anchor: 'middle', lineGap: 9,
                lines: [
                  { text: '毛利润', size: 40, weight: 800 },
                  { text: '$value', size: 39, weight: 400 },
                  { text: '利润率 60%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 +9 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            cost_of_revenue: {
              blocks: [{
                x: 1532, top: 1145, anchor: 'middle', lineGap: 7,
                lines: [
                  { text: '销售', size: 36, weight: 800 },
                  { text: '成本', size: 36, weight: 800 },
                  { text: '$value', size: 35, weight: 400 },
                ],
              }],
            },
            operating_profit: {
              blocks: [{
                x: 1932, top: 276, anchor: 'middle', lineGap: 9,
                lines: [
                  { text: '营业利润', size: 39, weight: 800 },
                  { text: '$value', size: 38, weight: 400 },
                  { text: '利润率 51%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 +9 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            operating_expenses: {
              blocks: [{
                x: 1921, top: 981, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '运营', size: 35, weight: 800 },
                  { text: '费用', size: 35, weight: 800 },
                  { text: '$value', size: 34, weight: 400 },
                ],
              }],
            },
            other: {
              blocks: [{
                x: 2218, top: 718, anchor: 'middle', lineGap: 3,
                lines: [
                  { text: '其他收益', size: 28, weight: 800, color: '#008e00' },
                  { text: '$value', size: 27, weight: 400, color: '#008e00' },
                ],
              }],
            },
            net_profit: {
              blocks: [{
                x: 2378, top: 440, anchor: 'start', lineGap: 9,
                lines: [
                  { text: '净利润', size: 39, weight: 800 },
                  { text: '$value', size: 38, weight: 400 },
                  { text: '利润率 46%', size: 28, weight: 400, color: NOTE },
                  { text: '同比 +8 个百分点', size: 28, weight: 400, color: NOTE },
                ],
              }],
            },
            tax: {
              blocks: [{
                x: 2457, top: 920, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '税费', size: 31, weight: 800 },
                  { text: '$value', size: 30, weight: 400 },
                ],
              }],
            },
            rnd: {
              blocks: [{
                x: 2459, top: 1039, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '研发', size: 31, weight: 800 },
                  { text: '$value', size: 30, weight: 400 },
                ],
              }],
            },
            sga: {
              blocks: [{
                x: 2505, top: 1174, anchor: 'middle', lineGap: 8,
                lines: [
                  { text: '销售、一般', size: 27, weight: 800 },
                  { text: '及行政', size: 27, weight: 800 },
                  { text: '$value', size: 28, weight: 400 },
                ],
              }],
            },
          },
        },
      },
    },
  });
})();

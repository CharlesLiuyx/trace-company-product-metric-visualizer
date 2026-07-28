/* ====================================================================
 *  TSMC - Q4 FY24 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q4-fy24.png as a fixed
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
    key: 'tsmc-q4-fy24',
    name: 'TSMC · Q4 FY24',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending Dec. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q4-fy24.png', width: 2667, height: 1500 },
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
      scale: 11.45,
      nodes: {
        hpc: { x: 450, y: 405, width: 71, height: 159 },
        smartphones: { x: 450, y: 683, width: 71, height: 100 },
        iot: { x: 450, y: 893, width: 71, height: 16 },
        automotive: { x: 450, y: 1037, width: 71, height: 12 },
        dce: { x: 450, y: 1167, width: 71, height: 4 },
        others: { x: 450, y: 1294, width: 71, height: 5 },
        revenue: { x: 912, y: 630, width: 70, height: 308 },
        gross_profit: { x: 1381, y: 548, width: 72, height: 180 },
        cost_of_revenue: { x: 1384, y: 915, width: 71, height: 124 },
        operating_profit: { x: 1854, y: 480, width: 70, height: 149 },
        operating_expenses: { x: 1854, y: 799, width: 70, height: 29 },
        other: { x: 2184, y: 573, width: 70, height: 6 },
        net_profit: { x: 2318, y: 396, width: 71, height: 132 },
        tax: { x: 2318, y: 733, width: 71, height: 25 },
        rnd: { x: 2318, y: 929, width: 71, height: 19 },
        sga: { x: 2318, y: 1149, width: 71, height: 9 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 431, top: 421, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '53% of revenue +10pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 432, top: 693, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '35% of revenue (8pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 433, top: 859, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
                { text: '5% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 433, top: 1003, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
                { text: '4% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dce: {
          blocks: [
            {
              x: 421, top: 1116, anchor: 'end', lineGap: 8,
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
              x: 427, top: 1260, anchor: 'end', lineGap: 10,
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
              x: 951, top: 491, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1418, top: 364, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '59% margin', size: 28, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1418, top: 1061, anchor: 'middle', lineGap: 7,
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
              x: 1889, top: 297, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '49% margin', size: 28, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1889, top: 850, anchor: 'middle', lineGap: 8,
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
              x: 2217, top: 600, anchor: 'middle', lineGap: 7,
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
              x: 2407, top: 401, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '43% margin', size: 28, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2499, top: 714, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 904, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 1127, anchor: 'middle', lineGap: 8,
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
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 14.3, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 9.4, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.3, color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.1, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.3, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.5, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 26.9, notes: ['+37% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 15.9, notes: ['59% margin', '+6pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 11.0, valueText: '($11.0B)' },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 13.2, notes: ['49% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.7 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 11.6, notes: ['43% margin', '+5pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 2.3 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.8 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.9 },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 14.3, sourceWidth: 159, targetWidth: 164, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 9.4, sourceWidth: 100, targetWidth: 108, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.3, sourceWidth: 16, targetWidth: 15, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.1, sourceWidth: 12, targetWidth: 12, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.3, sourceWidth: 4, targetWidth: 3, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.5, sourceWidth: 5, targetWidth: 6, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 15.9, sourceWidth: 180, targetWidth: 180, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 11.0, sourceWidth: 128, targetWidth: 124, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 13.2, sourceWidth: 151, targetWidth: 149, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.7, sourceWidth: 29, targetWidth: 29, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 10.9, sourceWidth: 124, targetWidth: 124, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2.3, sourceWidth: 25, targetWidth: 25, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.7, sourceWidth: 6, targetWidth: 8, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.8, sourceWidth: 20, targetWidth: 19, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.9, sourceWidth: 9, targetWidth: 9, targetOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2024 财年第四季度',
        meta: {
          title: 'TSMC 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 12 月',
        },
        nodes: {
          hpc: { label: '高性能计算', notes: ['占收入 53%，同比 +10 个百分点'] },
          smartphones: { label: '智能手机', notes: ['占收入 35%，同比 (8 个百分点)'] },
          iot: { label: '物联网', notes: ['占收入 5%，同比持平'] },
          automotive: { label: '汽车', notes: ['占收入 4%，同比 (1 个百分点)'] },
          dce: { label: '数字消费电子', notes: ['占收入 1%，同比 (1 个百分点)'] },
          others: { label: '其他', notes: ['占收入 2%，同比持平'] },
          revenue: { label: '收入', notes: ['同比 +37%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 59%', '同比 +6 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 49%', '同比 +7 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 43%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: {
              blocks: [
                {
                  x: 431, top: 431, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '高性能计算', size: 40, weight: 800, color: HPC },
                    { text: '占收入 53%，同比 +10 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            smartphones: {
              blocks: [
                {
                  x: 432, top: 693, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                    { text: '占收入 35%，同比 (8 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            iot: {
              blocks: [
                {
                  x: 433, top: 859, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '物联网', size: 38, weight: 800, color: IOT },
                    { text: '占收入 5%，同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive: {
              blocks: [
                {
                  x: 433, top: 1003, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                    { text: '占收入 4%，同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dce: {
              blocks: [
                {
                  x: 421, top: 1126, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '数字消费电子', size: 37, weight: 800, color: DCE },
                    { text: '占收入 1%，同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            others: {
              blocks: [
                {
                  x: 427, top: 1260, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '其他', size: 38, weight: 800, color: OTHERS },
                    { text: '占收入 2%，同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2520, top: 1127, anchor: 'middle', lineGap: 8,
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

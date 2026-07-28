/* ====================================================================
 *  TSMC - Q2 FY24 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q2-fy24.png as a fixed
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
  const HPC_LINK = '#8585c3';
  const SMARTPHONE = '#ee4b2b';
  const SMARTPHONE_LINK = '#ef9f94';
  const IOT = '#edc949';
  const IOT_LINK = '#eadc9d';
  const AUTOMOTIVE = '#ffa500';
  const AUTOMOTIVE_LINK = '#ffd082';
  const DCE = '#0096ff';
  const DCE_LINK = '#86cfff';
  const OTHERS = '#57d014';
  const OTHERS_LINK = '#a7e98f';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q2-fy24',
    name: 'TSMC · Q2 FY24',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Jun. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q2-fy24.png', width: 2667, height: 1500 },
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
      scale: 13.94,
      nodes: {
        hpc: { x: 450, y: 427, width: 72, height: 151 },
        smartphones: { x: 450, y: 704, width: 72, height: 95 },
        iot: { x: 450, y: 919, width: 72, height: 15 },
        automotive: { x: 450, y: 1061, width: 72, height: 12 },
        dce: { x: 450, y: 1198, width: 72, height: 3 },
        others: { x: 450, y: 1333, width: 72, height: 4 },
        revenue: { x: 915, y: 679, width: 72, height: 290 },
        gross_profit: { x: 1383, y: 578, width: 73, height: 153 },
        cost_of_revenue: { x: 1383, y: 941, width: 73, height: 135 },
        operating_profit: { x: 1859, y: 478, width: 73, height: 122 },
        operating_expenses: { x: 1859, y: 797, width: 73, height: 29 },
        other_income: { x: 2201, y: 524, width: 72, height: 6 },
        net_profit: { x: 2319, y: 353, width: 72, height: 106 },
        tax: { x: 2319, y: 726, width: 72, height: 22 },
        rnd: { x: 2319, y: 906, width: 72, height: 18 },
        sga: { x: 2319, y: 1098, width: 72, height: 8 },
        other_operating_expense: { x: 2319, y: 1268, width: 72, height: 3 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 430, top: 442, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '52% of revenue +8pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 430, top: 708, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '33% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 430, top: 887, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
                { text: '6% of revenue (2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 430, top: 1029, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
                { text: '5% of revenue (3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dce: {
          blocks: [
            {
              x: 419, top: 1131, anchor: 'end', lineGap: 8,
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
              x: 421, top: 1302, anchor: 'end', lineGap: 10,
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
              x: 951, top: 535, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+40% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1419, top: 397, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '53% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1419, top: 1096, anchor: 'middle', lineGap: 7,
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
              x: 1895, top: 297, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '43% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1895, top: 850, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 35, weight: 800 },
                { text: 'expenses', size: 35, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2237, top: 545, anchor: 'middle', lineGap: 7,
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
              x: 2407, top: 358, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '37% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2499, top: 704, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 882, anchor: 'middle', lineGap: 8,
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
              x: 2499, top: 1070, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        other_operating_expense: {
          blocks: [
            {
              x: 2499, top: 1229, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 10.8, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 6.9, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.2, color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.0, valueText: '$1.0B', color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.4, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.4, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 20.8, notes: ['+40% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 11.1, notes: ['53% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 9.8 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 8.9, notes: ['43% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.2 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.6 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 7.7, notes: ['37% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.8 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.5 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.7 },
      { id: 'other_operating_expense', col: 5, order: 4, type: 'cost', label: 'Other', value: 0.039, valueText: '($39M)' },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 10.8, sourceWidth: 151, targetWidth: 151, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 6.9, sourceWidth: 95, targetWidth: 97, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.2, sourceWidth: 15, targetWidth: 17, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.0, sourceWidth: 12, targetWidth: 14, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.4, sourceWidth: 3, targetWidth: 6, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.4, sourceWidth: 4, targetWidth: 5, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 11.1, sourceWidth: 154, targetWidth: 153, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 9.8, sourceWidth: 136, targetWidth: 135, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 8.9, sourceWidth: 123, targetWidth: 122, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.2, sourceWidth: 30, targetWidth: 29, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 7.1, sourceWidth: 100, targetWidth: 100, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.8, sourceWidth: 22, targetWidth: 22, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 0.6, sourceWidth: 6, targetWidth: 6, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.5, sourceWidth: 20, targetWidth: 18, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.7, sourceWidth: 8, targetWidth: 8, targetOrder: 1 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.039, sourceWidth: 1, targetWidth: 3, targetOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'TSMC · 2024 财年第二季度',
        meta: {
          title: 'TSMC 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2024 年 6 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +40%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 53%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '营业成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 37%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
          other_operating_expense: { label: '其他' },
        },
        layout: {
          labels: {
            hpc: {
              blocks: [
                {
                  x: 430, top: 465, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '高性能计算', size: 40, weight: 800, color: HPC },
                    { text: '占收入 52% 同比 +8 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            smartphones: {
              blocks: [
                {
                  x: 430, top: 713, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
                    { text: '占收入 33% 同比持平', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            iot: {
              blocks: [
                {
                  x: 430, top: 887, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '物联网', size: 38, weight: 800, color: IOT },
                    { text: '占收入 6% 同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            automotive: {
              blocks: [
                {
                  x: 430, top: 1023, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
                    { text: '占收入 5% 同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dce: {
              blocks: [
                {
                  x: 419, top: 1160, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '数字消费电子', size: 37, weight: 800, color: DCE },
                    { text: '占收入 2% 同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            others: {
              blocks: [
                {
                  x: 421, top: 1295, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '其他', size: 38, weight: 800, color: OTHERS },
                    { text: '占收入 2% 同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1419, top: 1120, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 35, weight: 400 },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1895, top: 875, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 35, weight: 800 },
                    { text: '费用', size: 35, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2518, top: 1070, anchor: 'middle', lineGap: 8,
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

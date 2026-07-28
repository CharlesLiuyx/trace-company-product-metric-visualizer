/* TSMC · Q1 FY23 income statement ($B), reconstructed from the Source PNG. */
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
  const IOT_LINK = '#efe0a6';
  const AUTOMOTIVE = '#ffa500';
  const AUTOMOTIVE_LINK = '#f7ce85';
  const DCE = '#0096ff';
  const DCE_LINK = '#85c9f7';
  const OTHERS = '#57d014';
  const OTHERS_LINK = '#abe28e';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};
  const textLine = (text, size, weight, color) => ({
    text,
    size,
    weight,
    ...(color ? { color } : {}),
  });
  const label = (x, top, anchor, lines, lineGap = 9) => ({
    blocks: [{ x, top, anchor, lineGap, lines }],
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q1-fy23',
    name: 'TSMC · Q1 FY23',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q1 FY23 Income Statement',
      period: 'Q1 FY23',
      periodNote: 'Ending Mar. 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2060,
      hidePeriodStamp: true,
      logoWidth: 450,
      logoHeight: 259,
      logoY: 261,
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
      linkTint: { source: HPC_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    layout: {
      scale: 15.8,
      nodes: {
        hpc: { x: 450, y: 466, width: 71, height: 114 },
        smartphones: { x: 450, y: 691, width: 71, height: 88 },
        iot: { x: 450, y: 884, width: 71, height: 21 },
        automotive: { x: 450, y: 1012, width: 71, height: 16 },
        dce: { x: 450, y: 1140, width: 71, height: 3 },
        others: { x: 450, y: 1283, width: 71, height: 9 },
        revenue: { x: 917, y: 691, width: 70, height: 264 },
        gross_profit: { x: 1371, y: 610, width: 72, height: 148 },
        cost_of_revenue: { x: 1374, y: 899, width: 71, height: 114 },
        operating_profit: { x: 1847, y: 548, width: 70, height: 118 },
        operating_expenses: { x: 1844, y: 852, width: 70, height: 27 },
        other: { x: 2159, y: 660, width: 70, height: 5 },
        net_profit: { x: 2318, y: 463, width: 71, height: 106 },
        tax: { x: 2318, y: 803, width: 71, height: 16 },
        rnd: { x: 2318, y: 1003, width: 71, height: 19 },
        sga: { x: 2318, y: 1248, width: 71, height: 6 },
      },
      labels: {
        hpc: label(431, 472, 'end', [
          textLine('High Performance', 40, 800, HPC),
          textLine('Computing', 40, 800, HPC),
          textLine('44% of revenue +3pp Y/Y', 28, 400, NOTE),
        ], 10),
        smartphones: label(430, 703, 'end', [
          textLine('Smartphones', 40, 800, SMARTPHONE),
          textLine('34% of revenue (6pp) Y/Y', 28, 400, NOTE),
        ], 10),
        iot: label(435, 853, 'end', [
          textLine('Internet of Things', 38, 800, IOT),
          textLine('9% of revenue +1pp Y/Y', 28, 400, NOTE),
        ], 10),
        automotive: label(433, 974, 'end', [
          textLine('Automotive', 38, 800, AUTOMOTIVE),
          textLine('7% of revenue +2pp Y/Y', 28, 400, NOTE),
        ], 10),
        dce: label(421, 1099, 'end', [
          textLine('Digital Consumer', 37, 800, DCE),
          textLine('Electronics', 37, 800, DCE),
          textLine('2% of revenue (1pp) Y/Y', 28, 400, NOTE),
        ], 8),
        others: label(426, 1269, 'end', [
          textLine('Others', 38, 800, OTHERS),
          textLine('4% of revenue +1pp Y/Y', 28, 400, NOTE),
        ], 10),
        revenue: label(952, 550, 'middle', [
          textLine('Revenue', 40, 800),
          textLine('$value', 39, 400),
          textLine('(5%) Y/Y', 28, 400, NOTE),
        ]),
        gross_profit: label(1407, 424, 'middle', [
          textLine('Gross profit', 40, 800),
          textLine('$value', 39, 400),
          textLine('56% margin', 28, 400, NOTE),
          textLine('+1pp Y/Y', 28, 400, NOTE),
        ]),
        cost_of_revenue: label(1409, 1038, 'middle', [
          textLine('Cost of', 36, 800),
          textLine('sales', 36, 800),
          textLine('$value', 35, 400),
        ], 7),
        operating_profit: label(1882, 363, 'middle', [
          textLine('Operating profit', 39, 800),
          textLine('$value', 38, 400),
          textLine('45% margin', 28, 400, NOTE),
          textLine('Flat Y/Y', 28, 400, NOTE),
        ]),
        operating_expenses: label(1886, 903, 'middle', [
          textLine('Operating', 35, 800),
          textLine('expenses', 35, 800),
          textLine('$value', 34, 400),
        ], 8),
        other: label(2195, 673, 'middle', [
          textLine('Other', 31, 800),
          textLine('$value', 30, 400),
        ], 7),
        net_profit: label(2409, 473, 'start', [
          textLine('Net profit', 39, 800),
          textLine('$value', 38, 400),
          textLine('41% margin', 28, 400, NOTE),
          textLine('(1pp) Y/Y', 28, 400, NOTE),
        ]),
        tax: label(2477, 780, 'middle', [
          textLine('Tax', 31, 800),
          textLine('$value', 30, 400),
        ], 8),
        rnd: label(2477, 970, 'middle', [
          textLine('R&D', 31, 800),
          textLine('$value', 30, 400),
        ], 8),
        sga: label(2477, 1220, 'middle', [
          textLine('SG&A', 31, 800),
          textLine('$value', 30, 400),
        ], 8),
      },
    },
    nodes: [
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 7.3, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 5.7, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.5, color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.2, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.3, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.7, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 16.7, notes: ['(5%) Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.4, notes: ['56% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 7.3 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 7.6, notes: ['45% margin', 'Flat Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.8 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.4 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 6.8, notes: ['41% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.2 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.3 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.5 },
    ],
    links: [
      { source: 'hpc', target: 'revenue', value: 7.3, sourceWidth: 114, targetWidth: 115, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 5.7, sourceWidth: 88, targetWidth: 90, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.5, sourceWidth: 21, targetWidth: 24, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.2, sourceWidth: 16, targetWidth: 19, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.3, sourceWidth: 3, targetWidth: 5, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.7, sourceWidth: 9, targetWidth: 11, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 9.4, sourceWidth: 149, targetWidth: 148, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.3, sourceWidth: 115, targetWidth: 114, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 7.6, sourceWidth: 120, targetWidth: 118, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.8, sourceWidth: 28, targetWidth: 27, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 6.4, sourceWidth: 100, targetWidth: 100, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.2, sourceWidth: 18, targetWidth: 16, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.4, sourceWidth: 5, targetWidth: 6, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.3, sourceWidth: 20, targetWidth: 19, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.5, sourceWidth: 7, targetWidth: 6, targetOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'TSMC · 2023 财年第一季度',
        meta: {
          title: 'TSMC 2023 财年第一季度利润表',
          period: '2023 财年第一季度',
          periodNote: '截至 2023 年 3 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 (5%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 45%', '同比持平'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 41%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: label(431, 472, 'end', [
              textLine('高性能', 40, 800, HPC),
              textLine('计算', 40, 800, HPC),
              textLine('占收入 44%，同比 +3 个百分点', 28, 400, NOTE),
            ], 10),
            smartphones: label(430, 703, 'end', [
              textLine('智能手机', 40, 800, SMARTPHONE),
              textLine('占收入 34%，同比 (6 个百分点)', 28, 400, NOTE),
            ], 10),
            iot: label(435, 853, 'end', [
              textLine('物联网', 38, 800, IOT),
              textLine('占收入 9%，同比 +1 个百分点', 28, 400, NOTE),
            ], 10),
            automotive: label(433, 974, 'end', [
              textLine('汽车', 38, 800, AUTOMOTIVE),
              textLine('占收入 7%，同比 +2 个百分点', 28, 400, NOTE),
            ], 10),
            dce: label(421, 1099, 'end', [
              textLine('数字消费', 37, 800, DCE),
              textLine('电子', 37, 800, DCE),
              textLine('占收入 2%，同比 (1 个百分点)', 28, 400, NOTE),
            ], 8),
            others: label(426, 1269, 'end', [
              textLine('其他', 38, 800, OTHERS),
              textLine('占收入 4%，同比 +1 个百分点', 28, 400, NOTE),
            ], 10),
            sga: label(2520, 1220, 'middle', [
              textLine('销售、一般及行政', 31, 800),
              textLine('$value', 30, 400),
            ], 8),
          },
        },
      },
    },
  });
})();

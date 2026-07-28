/* TSMC Q3 FY24 income statement, reconstructed from the processed source. */
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
    key: 'tsmc-q3-fy24',
    name: 'TSMC · Q3 FY24',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q3 FY24 Income Statement',
      period: 'Q3 FY24',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q3-fy24.png', width: 2667, height: 1500 },
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
      linkTint: { source: HPC_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    layout: {
      scale: 13.0,
      nodes: {
        hpc: { x: 450, y: 387, width: 71, height: 159 },
        smartphones: { x: 450, y: 674, width: 71, height: 101 },
        iot: { x: 450, y: 901, width: 71, height: 16 },
        automotive: { x: 450, y: 1028, width: 71, height: 14 },
        dce: { x: 450, y: 1159, width: 71, height: 3 },
        others: { x: 450, y: 1290, width: 71, height: 4 },
        revenue: { x: 917, y: 634, width: 70, height: 308 },
        gross_profit: { x: 1384, y: 519, width: 71, height: 177 },
        cost_of_revenue: { x: 1381, y: 930, width: 72, height: 127 },
        operating_profit: { x: 1852, y: 419, width: 70, height: 144 },
        operating_expenses: { x: 1854, y: 765, width: 70, height: 30 },
        other: { x: 2164, y: 501, width: 70, height: 7 },
        net_profit: { x: 2318, y: 307, width: 71, height: 130 },
        tax: { x: 2318, y: 699, width: 71, height: 22 },
        rnd: { x: 2318, y: 922, width: 71, height: 20 },
        sga: { x: 2318, y: 1165, width: 71, height: 9 },
      },
      labels: {
        hpc: { blocks: [{ x: 431, top: 406, anchor: 'end', lineGap: 10, lines: [
          { text: 'High Performance', size: 40, weight: 800, color: HPC },
          { text: 'Computing', size: 40, weight: 800, color: HPC },
          { text: '51% of revenue +9pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        smartphones: { blocks: [{ x: 432, top: 679, anchor: 'end', lineGap: 10, lines: [
          { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
          { text: '34% of revenue (5pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        iot: { blocks: [{ x: 433, top: 867, anchor: 'end', lineGap: 10, lines: [
          { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
          { text: '7% of revenue (2pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        automotive: { blocks: [{ x: 433, top: 992, anchor: 'end', lineGap: 10, lines: [
          { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
          { text: '5% of revenue flat Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        dce: { blocks: [{ x: 421, top: 1117, anchor: 'end', lineGap: 8, lines: [
          { text: 'Digital Consumer', size: 37, weight: 800, color: DCE },
          { text: 'Electronics', size: 37, weight: 800, color: DCE },
          { text: '1% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        others: { blocks: [{ x: 427, top: 1258, anchor: 'end', lineGap: 10, lines: [
          { text: 'Others', size: 38, weight: 800, color: OTHERS },
          { text: '2% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        revenue: { blocks: [{ x: 952, top: 483, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+36% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1420, top: 341, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Gross profit', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '58% margin', size: 28, weight: 400, color: NOTE },
          { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1417, top: 1080, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Cost of', size: 36, weight: 800 },
          { text: 'sales', size: 36, weight: 800 },
          { text: '$value', size: 35, weight: 400 },
        ] }] },
        operating_profit: { blocks: [{ x: 1886, top: 241, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '47% margin', size: 28, weight: 400, color: NOTE },
          { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1889, top: 818, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 35, weight: 800 },
          { text: 'expenses', size: 35, weight: 800 },
          { text: '$value', size: 34, weight: 400 },
        ] }] },
        other: { blocks: [{ x: 2202, top: 519, anchor: 'middle', lineGap: 7, lines: [
          { text: 'Other', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        net_profit: { blocks: [{ x: 2500, top: 310, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Net profit', size: 39, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '43% margin', size: 28, weight: 400, color: NOTE },
          { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: 2494, top: 669, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        rnd: { blocks: [{ x: 2499, top: 897, anchor: 'middle', lineGap: 8, lines: [
          { text: 'R&D', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
        sga: { blocks: [{ x: 2499, top: 1137, anchor: 'middle', lineGap: 8, lines: [
          { text: 'SG&A', size: 31, weight: 800 },
          { text: '$value', size: 30, weight: 400 },
        ] }] },
      },
    },
    nodes: [
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 12.0, valueText: '$12.0B', color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 8.0, valueText: '$8.0B', color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 1.6, color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.2, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.2, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.5, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 23.5, notes: ['+36% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 13.6, notes: ['58% margin', '+4pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'sales'], value: 9.9 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 11.2, notes: ['47% margin', '+6pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.4 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 10.1, notes: ['43% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.8 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 1.6 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.8 },
    ],
    links: [
      { source: 'hpc', target: 'revenue', value: 12.0, sourceWidth: 159, targetWidth: 159, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 8.0, sourceWidth: 101, targetWidth: 102, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 1.6, sourceWidth: 16, targetWidth: 20, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.2, sourceWidth: 14, targetWidth: 15, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.2, sourceWidth: 3, targetWidth: 6, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.5, sourceWidth: 4, targetWidth: 6, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 13.6, sourceWidth: 178, targetWidth: 177, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 9.9, sourceWidth: 130, targetWidth: 127, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 11.2, sourceWidth: 144, targetWidth: 144, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, sourceWidth: 33, targetWidth: 30, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 9.4, sourceWidth: 122, targetWidth: 121, y0: 480, y1: 367.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 1.8, sourceWidth: 22, targetWidth: 22, y0: 552, y1: 710, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.7, sourceWidth: 7, targetWidth: 9, y0: 504.5, y1: 432.5, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.6, sourceWidth: 20, targetWidth: 20, y0: 775, y1: 932, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.8, sourceWidth: 10, targetWidth: 9, y0: 790, y1: 1169.5, targetOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'TSMC · 2024 财年第三季度',
        meta: {
          title: 'TSMC 2024 财年第三季度利润表',
          period: '2024 财年第三季度',
          periodNote: '截至 2024 年 9 月',
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +36%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 +4 个百分点'] },
          cost_of_revenue: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 47%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 43%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: {
          labels: {
            hpc: { blocks: [{ x: 431, top: 406, anchor: 'end', lineGap: 10, lines: [
              { text: '高性能', size: 40, weight: 800, color: HPC },
              { text: '计算', size: 40, weight: 800, color: HPC },
              { text: '占收入 51% 同比 +9 个百分点', size: 28, weight: 400, color: NOTE },
            ] }] },
            smartphones: { blocks: [{ x: 432, top: 679, anchor: 'end', lineGap: 10, lines: [
              { text: '智能手机', size: 40, weight: 800, color: SMARTPHONE },
              { text: '占收入 34% 同比 (5 个百分点)', size: 28, weight: 400, color: NOTE },
            ] }] },
            iot: { blocks: [{ x: 433, top: 867, anchor: 'end', lineGap: 10, lines: [
              { text: '物联网', size: 38, weight: 800, color: IOT },
              { text: '占收入 7% 同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
            ] }] },
            automotive: { blocks: [{ x: 433, top: 992, anchor: 'end', lineGap: 10, lines: [
              { text: '汽车', size: 38, weight: 800, color: AUTOMOTIVE },
              { text: '占收入 5% 同比持平', size: 28, weight: 400, color: NOTE },
            ] }] },
            dce: { blocks: [{ x: 421, top: 1117, anchor: 'end', lineGap: 8, lines: [
              { text: '数字消费', size: 37, weight: 800, color: DCE },
              { text: '电子', size: 37, weight: 800, color: DCE },
              { text: '占收入 1% 同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
            ] }] },
            others: { blocks: [{ x: 427, top: 1258, anchor: 'end', lineGap: 10, lines: [
              { text: '其他', size: 38, weight: 800, color: OTHERS },
              { text: '占收入 2% 同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
            ] }] },
            revenue: { blocks: [{ x: 952, top: 483, anchor: 'middle', lineGap: 9, lines: [
              { text: '收入', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '同比 +36%', size: 28, weight: 400, color: NOTE },
            ] }] },
            gross_profit: { blocks: [{ x: 1420, top: 341, anchor: 'middle', lineGap: 9, lines: [
              { text: '毛利润', size: 40, weight: 800 },
              { text: '$value', size: 39, weight: 400 },
              { text: '利润率 58%', size: 28, weight: 400, color: NOTE },
              { text: '同比 +4 个百分点', size: 28, weight: 400, color: NOTE },
            ] }] },
            cost_of_revenue: { blocks: [{ x: 1417, top: 1080, anchor: 'middle', lineGap: 7, lines: [
              { text: '销售', size: 36, weight: 800 },
              { text: '成本', size: 36, weight: 800 },
              { text: '$value', size: 35, weight: 400 },
            ] }] },
            operating_profit: { blocks: [{ x: 1886, top: 241, anchor: 'middle', lineGap: 9, lines: [
              { text: '营业利润', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '利润率 47%', size: 28, weight: 400, color: NOTE },
              { text: '同比 +6 个百分点', size: 28, weight: 400, color: NOTE },
            ] }] },
            operating_expenses: { blocks: [{ x: 1889, top: 818, anchor: 'middle', lineGap: 8, lines: [
              { text: '运营', size: 35, weight: 800 },
              { text: '费用', size: 35, weight: 800 },
              { text: '$value', size: 34, weight: 400 },
            ] }] },
            other: { blocks: [{ x: 2202, top: 519, anchor: 'middle', lineGap: 7, lines: [
              { text: '其他', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ] }] },
            net_profit: { blocks: [{ x: 2500, top: 310, anchor: 'middle', lineGap: 9, lines: [
              { text: '净利润', size: 39, weight: 800 },
              { text: '$value', size: 38, weight: 400 },
              { text: '利润率 43%', size: 28, weight: 400, color: NOTE },
              { text: '同比 +4 个百分点', size: 28, weight: 400, color: NOTE },
            ] }] },
            tax: { blocks: [{ x: 2494, top: 669, anchor: 'middle', lineGap: 8, lines: [
              { text: '税费', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ] }] },
            rnd: { blocks: [{ x: 2499, top: 897, anchor: 'middle', lineGap: 8, lines: [
              { text: '研发', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ] }] },
            sga: { blocks: [{ x: 2515, top: 1137, anchor: 'middle', lineGap: 8, lines: [
              { text: '销售、一般及行政', size: 31, weight: 800 },
              { text: '$value', size: 30, weight: 400 },
            ] }] },
          },
        },
      },
    },
  });
})();

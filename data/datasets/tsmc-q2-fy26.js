/* ====================================================================
 *  TSMC - Q2 FY26 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q2-fy26.png as a fixed
 *  d3-sankey layout with an SVG-only TSMC logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const HPC = '#ee4b2b';
  const HPC_LINK = '#efa698';
  const SMARTPHONE = '#000080';
  const SMARTPHONE_LINK = '#8585bf';
  const IOT = '#edc949';
  const IOT_LINK = '#efdfa6';
  const AUTOMOTIVE = '#ffa500';
  const AUTOMOTIVE_LINK = '#f7ce85';
  const DCE = '#0096ff';
  const DCE_LINK = '#85c9f7';
  const OTHERS = '#57d014';
  const OTHERS_LINK = '#abe28e';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, anchor, lines, lineGap = 9) => ({ x, top, anchor, lineGap, lines });

  const labels = (zh) => ({
    hpc: { blocks: [block(427, 446, 'end', [
      line(zh ? '高性能' : 'High Performance', 40, 800, HPC),
      line(zh ? '计算' : 'Computing', 40, 800, HPC),
      line(zh ? '收入占比 66%，同比 +6 个百分点' : '66% of revenue +6pp Y/Y', zh ? 22 : 28, 400, NOTE),
    ], 10)] },
    smartphones: { blocks: [block(427, 746, 'end', [
      line(zh ? '智能手机' : 'Smartphones', 40, 800, SMARTPHONE),
      line(zh ? '收入占比 22%，同比（5 个百分点）' : '22% of revenue (5pp) Y/Y', zh ? 22 : 28, 400, NOTE),
    ], 10)] },
    iot: { blocks: [block(427, 907, 'end', [
      line(zh ? '物联网' : 'Internet of Things', 38, 800, IOT),
      line(zh ? '收入占比 5%，同比持平' : '5% of revenue Flat Y/Y', zh ? 22 : 28, 400, NOTE),
    ], 10)] },
    automotive: { blocks: [block(415, 1026, 'end', [
      line(zh ? '汽车' : 'Automotive', 38, 800, AUTOMOTIVE),
      line(zh ? '收入占比 4%，同比（1 个百分点）' : '4% of revenue (1pp) Y/Y', zh ? 22 : 28, 400, NOTE),
    ], 10)] },
    dce: { blocks: [block(410, 1117, 'end', [
      line(zh ? '数字消费' : 'Digital Consumer', 37, 800, DCE),
      line(zh ? '电子' : 'Electronics', 37, 800, DCE),
      line(zh ? '收入占比 1%，同比持平' : '1% of revenue Flat Y/Y', zh ? 22 : 30, 400, NOTE),
    ], 8)] },
    others: { blocks: [block(422, 1267, 'end', [
      line(zh ? '其他' : 'Others', 38, 800, OTHERS),
      line(zh ? '收入占比 2%，同比持平' : '2% of revenue Flat Y/Y', zh ? 22 : 29, 400, NOTE),
    ], 10)] },
    revenue: { blocks: [block(952, 488, 'middle', [
      line(zh ? '收入' : 'Revenue', 40, 800),
      line('$value', 39),
      line(zh ? '同比 +34%' : '+34% Y/Y', 28, 400, NOTE),
    ])] },
    gross_profit: { blocks: [block(1418, 352, 'middle', [
      line(zh ? '毛利润' : 'Gross profit', 40, 800),
      line('$value', 39),
      line(zh ? '利润率 68%' : '68% margin', 28, 400, NOTE),
      line(zh ? '同比 +9 个百分点' : '+9pp Y/Y', 28, 400, NOTE),
    ])] },
    cost_of_revenue: { blocks: [block(1418, 1067, 'middle', [
      line(zh ? '收入' : 'Cost of', 36, 800),
      line(zh ? '成本' : 'revenue', 36, 800),
      line('$value', 35),
    ], 7)] },
    operating_profit: { blocks: [block(1886, 276, 'middle', [
      line(zh ? '营业利润' : 'Operating profit', 39, 800),
      line('$value', 38),
      line(zh ? '利润率 60%' : '60% margin', 28, 400, NOTE),
      line(zh ? '同比 +11 个百分点' : '+11pp Y/Y', 28, 400, NOTE),
    ])] },
    operating_expenses: { blocks: [block(1886, 891, 'middle', [
      line(zh ? '运营' : 'Operating', 35, 800),
      line(zh ? '费用' : 'expenses', 35, 800),
      line('$value', 34),
    ], 8)] },
    operating_other_income: { blocks: [block(1719, 732, 'start', [
      line(zh ? '其他' : 'Other', 31, 800),
      line('$value', 30),
    ], 7)] },
    other: { blocks: [block(2240, 626, 'middle', [
      line(zh ? '其他' : 'Other', 31, 800),
      line('$value', 30),
    ], 7)] },
    net_profit: { blocks: [block(2407, 365, 'start', [
      line(zh ? '净利润' : 'Net profit', 39, 800),
      line('$value', 38),
      line(zh ? '利润率 56%' : '56% margin', 28, 400, NOTE),
      line(zh ? '同比 +13 个百分点' : '+13pp Y/Y', 28, 400, NOTE),
    ])] },
    tax: { blocks: [block(2499, 707, 'middle', [
      line(zh ? '税费' : 'Tax', 31, 800),
      line('$value', 30),
    ], 8)] },
    rnd: { blocks: [block(2499, 894, 'middle', [
      line(zh ? '研发' : 'R&D', 31, 800),
      line('$value', 30),
    ], 8)] },
    sga: { blocks: [block(2499, 1142, 'middle', [
      line(zh ? '销售、一般及行政' : 'SG&A', zh ? 25 : 31, 800),
      line('$value', 30),
    ], 8)] },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q2-fy26',
    name: 'TSMC · Q2 FY26',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q2-fy26.png', width: 2667, height: 1500 },
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
      scale: 8.48,
      nodes: {
        hpc: { x: 448, y: 379, width: 73, height: 226 },
        smartphones: { x: 448, y: 732, width: 73, height: 75 },
        iot: { x: 448, y: 934, width: 73, height: 18 },
        automotive: { x: 448, y: 1056, width: 73, height: 13 },
        dce: { x: 448, y: 1172, width: 73, height: 3 },
        others: { x: 448, y: 1285, width: 73, height: 7 },
        revenue: { x: 915, y: 631, width: 73, height: 343 },
        gross_profit: { x: 1382, y: 535, width: 73, height: 234 },
        cost_of_revenue: { x: 1382, y: 944, width: 73, height: 110 },
        operating_other_income: { x: 1723, y: 715, width: 73, height: 3 },
        operating_profit: { x: 1852, y: 459, width: 73, height: 210 },
        operating_expenses: { x: 1850, y: 841, width: 73, height: 28 },
        other: { x: 2202, y: 582, width: 73, height: 27 },
        net_profit: { x: 2316, y: 381, width: 73, height: 193 },
        tax: { x: 2316, y: 721, width: 73, height: 44 },
        rnd: { x: 2316, y: 920, width: 73, height: 22 },
        sga: { x: 2316, y: 1183, width: 73, height: 8 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 26.5, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 8.8, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 2.0, valueText: '$2.0B', color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.6, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.4, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.8, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 40.2, notes: ['+34% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 27.2, notes: ['68% margin', '+9pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 13.0, valueText: '($13.0B)' },
      { id: 'operating_other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.2, valueText: '$0.2B' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 24.3, notes: ['60% margin', '+11pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.1 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 3.0, valueText: '$3.0B' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 22.4, notes: ['56% margin', '+13pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 4.9 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 2.3 },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 0.8 },
    ],
    links: [
      { source: 'hpc', target: 'revenue', value: 26.5, sourceWidth: 226, targetWidth: 226, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 8.8, sourceWidth: 75, targetWidth: 75, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 2.0, sourceWidth: 18, targetWidth: 17, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.6, sourceWidth: 13, targetWidth: 13, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.4, sourceWidth: 3, targetWidth: 4, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.8, sourceWidth: 7, targetWidth: 8, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 27.2, sourceWidth: 233, targetWidth: 234, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 13.0, sourceWidth: 110, targetWidth: 110, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 24.1, sourceWidth: 206, targetWidth: 208, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.1, sourceWidth: 28, targetWidth: 28, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_other_income', target: 'operating_profit', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 716.5, y1: 668, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 19.4, sourceWidth: 164, targetWidth: 166, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 4.9, sourceWidth: 44, targetWidth: 44, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 3.0, sourceWidth: 27, targetWidth: 27, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 2.3, sourceWidth: 21, targetWidth: 22, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.8, sourceWidth: 7, targetWidth: 8, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'TSMC · 2026 财年第二季度',
        meta: {
          title: 'TSMC 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 1900,
        },
        nodes: {
          hpc: { label: '高性能计算' },
          smartphones: { label: '智能手机' },
          iot: { label: '物联网' },
          automotive: { label: '汽车' },
          dce: { label: '数字消费电子' },
          others: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +34%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 +9 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_other_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 60%', '同比 +11 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 56%', '同比 +13 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

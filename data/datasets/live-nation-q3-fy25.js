/* ====================================================================
 * Live Nation - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/live-nation-q3-fy25.png as a fixed
 * d3-sankey layout. The source-visible unlabeled segment aggregation face
 * is preserved as segment_total before the labeled Revenue node.
 * Validated company and concert-brand raster assets are reused.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const BLACK = '#000000';
  const TITLE = '#155077';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const GRAY_LINK = '#858585';
  const NOTE = '#666666';
  const RIGHT_X = 2462;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight == null ? 400 : options.weight,
    ...(options.color ? { color: options.color } : {}),
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const labelsEn = {
    concerts: { blocks: [
      block(424, 415, [line('$value', 39), line('+11% Y/Y', 29, { color: NOTE })]),
      block(361, 521, [line('Concerts', 40, { weight: 800 }), line('7% adjusted margin', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    ticketing: { blocks: [
      block(433, 940, [line('$value', 39), line('+15% Y/Y', 29, { color: NOTE })]),
      block(369, 1034, [line('Ticketing', 40, { weight: 800 }), line('36% adjusted margin', 28, { color: NOTE }), line('+2pp Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    sponsorship: { blocks: [
      block(432, 1116, [line('$value', 39), line('+13% Y/Y', 29, { color: NOTE })]),
      block(369, 1199, [line('Sponsorship', 40, { weight: 800 }), line('71% adjusted margin', 28, { color: NOTE }), line('+0pp Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    segment_total: { blocks: [] },
    revenue: { blocks: [
      block(1179, 554, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+11% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    eliminations: { blocks: [
      block(1179, 1249, [line('Eliminations', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 10 }),
    ] },
    gross_profit: { blocks: [
      block(1556, 422, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('24% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    direct_operating_expenses: { blocks: [
      block(1557, 1250, [line('Direct operating', 36, { weight: 800, color: RED_LABEL }), line('expenses', 36, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL })], { lineGap: 9 }),
    ] },
    operating_profit: { blocks: [
      block(1932, 325, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('9% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    operating_expenses: { blocks: [
      block(1932, 830, [line('Other', 38, { weight: 800, color: RED_LABEL }), line('operating', 38, { weight: 800, color: RED_LABEL }), line('expenses', 38, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 7 }),
    ] },
    net_profit: { blocks: [
      block(RIGHT_X, 362, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('6% margin', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    tax: { blocks: [
      block(RIGHT_X, 597, [line('Tax', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 8 }),
    ] },
    interest_and_other: { blocks: [
      block(RIGHT_X, 702, [line('Interest', 32, { weight: 800, color: RED_LABEL }), line('& other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 }),
    ] },
    sga: { blocks: [
      block(RIGHT_X, 854, [line('SG&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('12% of revenue', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    da: { blocks: [
      block(RIGHT_X, 1055, [line('D&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('2% of revenue', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    corporate_other: { blocks: [
      block(RIGHT_X, 1227, [line('Corporate', 32, { weight: 800, color: RED_LABEL }), line('& Other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('1% of revenue', 29, { color: NOTE })], { lineGap: 7 }),
    ] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, blockIndex, texts) => {
    labelsZh[id].blocks[blockIndex].lines.forEach((item, index) => { item.text = texts[index]; });
  };
  setLines('concerts', 0, ['$value', '同比 +11%']);
  setLines('concerts', 1, ['演唱会', '调整后利润率 7%', '同比 (0 个百分点)']);
  setLines('ticketing', 0, ['$value', '同比 +15%']);
  setLines('ticketing', 1, ['票务', '调整后利润率 36%', '同比 +2 个百分点']);
  setLines('sponsorship', 0, ['$value', '同比 +13%']);
  setLines('sponsorship', 1, ['赞助', '调整后利润率 71%', '同比 +0 个百分点']);
  setLines('revenue', 0, ['收入', '$value', '同比 +11%']);
  setLines('eliminations', 0, ['抵销', '$value']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 24%', '同比 (0 个百分点)']);
  setLines('direct_operating_expenses', 0, ['直接运营', '费用', '$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 9%', '同比 +1 个百分点']);
  setLines('operating_expenses', 0, ['其他运营', '费用', '$value', '']);
  labelsZh.operating_expenses.blocks[0].lines.pop();
  setLines('net_profit', 0, ['净利润', '$value', '利润率 6%', '同比 (1 个百分点)']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('interest_and_other', 0, ['利息及其他', '$value', '']);
  labelsZh.interest_and_other.blocks[0].lines.pop();
  setLines('sga', 0, ['销售、一般及管理费用', '$value', '占收入 12%']);
  labelsZh.sga.blocks[0].lines[0].size = 20;
  setLines('da', 0, ['折旧与摊销', '$value', '占收入 2%']);
  setLines('corporate_other', 0, ['公司及其他', '$value', '', '占收入 1%']);
  labelsZh.corporate_other.blocks[0].lines.splice(2, 1);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'live-nation-q3-fy25',
    name: 'Live Nation · Q3 FY25',
    company: 'Live Nation',
    meta: {
      company: 'Live Nation',
      title: 'Live Nation Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/live-nation-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 2430,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'live-nation-company-logo', href: 'data/assets/raster-annotations/live-nation/company-logo.png', x: 570, y: 270, width: 665, height: 165 },
      { key: 'live-nation-concerts-brand-cluster', href: 'data/assets/raster-annotations/live-nation/concerts-brand-cluster.png', x: 125, y: 637, width: 240, height: 236 },
    ],
    layout: {
      scale: 50.5,
      nodes: {
        concerts: { x: 396, y: 506, width: 71, height: 370 },
        ticketing: { x: 396, y: 1031, width: 71, height: 39 },
        sponsorship: { x: 396, y: 1205, width: 71, height: 20 },
        segment_total: { x: 770, y: 610, width: 70, height: 434 },
        revenue: { x: 1144, y: 697, width: 70, height: 433 },
        eliminations: { x: 1143, y: 1342, width: 71, height: 3 },
        gross_profit: { x: 1517, y: 606, width: 71, height: 104 },
        direct_operating_expenses: { x: 1517, y: 900, width: 71, height: 328 },
        operating_profit: { x: 1891, y: 507, width: 71, height: 38 },
        operating_expenses: { x: 1891, y: 744, width: 71, height: 63 },
        net_profit: { x: 2264, y: 406, width: 71, height: 22 },
        tax: { x: 2264, y: 622, width: 71, height: 11 },
        interest_and_other: { x: 2264, y: 751, width: 71, height: 3 },
        sga: { x: 2264, y: 861, width: 71, height: 50 },
        da: { x: 2264, y: 1090, width: 71, height: 6 },
        corporate_other: { x: 2264, y: 1279, width: 71, height: 3 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'concerts', col: 0, order: 0, type: 'source', label: 'Concerts', value: 7.3, valueText: '$7.3B', notes: ['+11% Y/Y', '7% adjusted margin', '(0pp) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'ticketing', col: 0, order: 1, type: 'source', label: 'Ticketing', value: 0.8, valueText: '$0.8B', notes: ['+15% Y/Y', '36% adjusted margin', '+2pp Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'sponsorship', col: 0, order: 2, type: 'source', label: 'Sponsorship', value: 0.4, valueText: '$0.4B', notes: ['+13% Y/Y', '71% adjusted margin', '+0pp Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'segment_total', col: 1, order: 0, type: 'hub', label: '', value: 8.524, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 8.5, valueText: '$8.5B', notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.024, valueText: '($24M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.1, valueText: '$2.1B', notes: ['24% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'direct_operating_expenses', col: 3, order: 1, type: 'cost', label: 'Direct operating expenses', value: 6.4, valueText: '($6.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.8, valueText: '$0.8B', notes: ['9% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Other operating expenses', value: 1.3, valueText: '($1.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.5, valueText: '$0.5B', notes: ['6% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest_and_other', col: 5, order: 2, type: 'cost', label: 'Interest & other', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.0, valueText: '($1.0B)', notes: ['12% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 4, type: 'cost', label: 'D&A', value: 0.2, valueText: '($0.2B)', notes: ['2% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'corporate_other', col: 5, order: 5, type: 'cost', label: 'Corporate & Other', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'concerts', target: 'segment_total', value: 7.3, sourceWidth: 370, targetWidth: 370, y0: 691, y1: 795, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'ticketing', target: 'segment_total', value: 0.8, sourceWidth: 39, targetWidth: 41, y0: 1050.5, y1: 1000.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'sponsorship', target: 'segment_total', value: 0.4, sourceWidth: 20, targetWidth: 23, y0: 1215, y1: 1032.5, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'segment_total', target: 'revenue', value: 8.5, sourceWidth: 431, targetWidth: 433, y0: 825.5, y1: 913.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'segment_total', target: 'eliminations', value: 0.024, sourceWidth: 3, targetWidth: 3, y0: 1042.5, y1: 1343.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { x0: 840, y0: 1042.5, x1: 1143, y1: 1343.5, c1x: 920, c1y: 1042.5, c2x: 1040, c2y: 1343.5 } },
      { source: 'revenue', target: 'gross_profit', value: 2.1, sourceWidth: 103, targetWidth: 104, y0: 748.5, y1: 658, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'direct_operating_expenses', value: 6.4, sourceWidth: 330, targetWidth: 328, y0: 965, y1: 1064, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, sourceWidth: 39, targetWidth: 38, y0: 625.5, y1: 526, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.3, sourceWidth: 65, targetWidth: 63, y0: 677.5, y1: 775.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 21, targetWidth: 22, y0: 517.5, y1: 417, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 11, targetWidth: 11, y0: 533.5, y1: 627.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest_and_other', value: 0.1, sourceWidth: 6, targetWidth: 3, y0: 542, y1: 752.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.0, sourceWidth: 50, targetWidth: 50, y0: 769, y1: 886, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 7, targetWidth: 6, y0: 797.5, y1: 1093, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'corporate_other', value: 0.1, sourceWidth: 6, targetWidth: 3, y0: 804, y1: 1280.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Live Nation · 2025 财年第三季度',
        meta: {
          title: 'Live Nation 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 2080,
        },
        nodes: {
          concerts: { label: '演唱会', notes: ['同比 +11%', '调整后利润率 7%', '同比 (0 个百分点)'] },
          ticketing: { label: '票务', notes: ['同比 +15%', '调整后利润率 36%', '同比 +2 个百分点'] },
          sponsorship: { label: '赞助', notes: ['同比 +13%', '调整后利润率 71%', '同比 +0 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 24%', '同比 (0 个百分点)'] },
          direct_operating_expenses: { label: '直接运营费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 9%', '同比 +1 个百分点'] },
          operating_expenses: { label: '其他运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          interest_and_other: { label: '利息及其他' },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 12%'] },
          da: { label: '折旧与摊销', notes: ['占收入 2%'] },
          corporate_other: { label: '公司及其他', notes: ['占收入 1%'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

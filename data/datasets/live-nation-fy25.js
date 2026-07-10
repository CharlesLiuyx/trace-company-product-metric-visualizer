/* ====================================================================
 * Live Nation - FY25 income statement ($B)
 * Reconstructed from input/processed/live-nation-fy25.png as a fixed
 * d3-sankey layout with validated runtime raster brand annotations.
 * ==================================================================== */
(function () {
  const BACKGROUND = '#f2f2f2';
  const BLACK = '#000000';
  const TITLE = '#155077';
  const GREEN = '#25a31f';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9bd39a';
  const RED = '#dc0000';
  const RED_LABEL = '#941700';
  const RED_LINK = '#e08484';
  const GRAY_LINK = '#898989';
  const NOTE = '#666666';
  const RIGHT_X = 2458;

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
      block(431, 429, [line('$value', 39), line('+10% Y/Y', 29, { color: NOTE })]),
      block(359, 521, [line('Concerts', 40, { weight: 800 }), line('3% adjusted margin', 28, { color: NOTE }), line('+1pp Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    ticketing: { blocks: [
      block(431, 933, [line('$value', 39), line('+3% Y/Y', 29, { color: NOTE })]),
      block(359, 986.5, [line('Ticketing', 40, { weight: 800 }), line('37% adjusted margin', 28, { color: NOTE }), line('(1pp) Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    sponsorship: { blocks: [
      block(431, 1108, [line('$value', 39), line('+11% Y/Y', 29, { color: NOTE })]),
      block(359, 1149, [line('Sponsorship', 40, { weight: 800 }), line('64% adjusted margin', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    revenue: { blocks: [
      block(805.5, 475, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+9% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    eliminations: { blocks: [
      block(1179, 1254, [line('Eliminations', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 10 }),
    ] },
    gross_profit: { blocks: [
      block(1552, 429, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('26% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    direct_operating_expenses: { blocks: [
      block(1552, 1211, [line('Direct operating', 36, { weight: 800, color: RED_LABEL }), line('expenses', 36, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL })], { lineGap: 9 }),
    ] },
    operating_profit: { blocks: [
      block(1926, 352, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('5% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    operating_expenses: { blocks: [
      block(1926, 839, [line('Other', 38, { weight: 800, color: RED_LABEL }), line('operating', 38, { weight: 800, color: RED_LABEL }), line('expenses', 38, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 7 }),
    ] },
    net_profit: { blocks: [
      block(RIGHT_X, 379, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('3% margin', 29, { color: NOTE }), line('(2pp) Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    tax: { blocks: [
      block(RIGHT_X, 605, [line('Tax', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 8 }),
    ] },
    interest_and_other: { blocks: [
      block(RIGHT_X, 708, [line('Interest', 32, { weight: 800, color: RED_LABEL }), line('& other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL })], { lineGap: 7 }),
    ] },
    sga: { blocks: [
      block(RIGHT_X, 878, [line('SG&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('16% of revenue', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    da: { blocks: [
      block(RIGHT_X, 1056, [line('D&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('3% of revenue', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    corporate_other: { blocks: [
      block(RIGHT_X, 1223, [line('Corporate', 32, { weight: 800, color: RED_LABEL }), line('& Other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('2% of revenue', 29, { color: NOTE })], { lineGap: 7 }),
    ] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, blockIndex, texts) => {
    labelsZh[id].blocks[blockIndex].lines.forEach((item, index) => { item.text = texts[index]; });
  };
  setLines('concerts', 0, ['$value', '同比 +10%']);
  setLines('concerts', 1, ['演唱会', '调整后利润率 3%', '同比 +1 个百分点']);
  setLines('ticketing', 0, ['$value', '同比 +3%']);
  setLines('ticketing', 1, ['票务', '调整后利润率 37%', '同比 (1 个百分点)']);
  setLines('sponsorship', 0, ['$value', '同比 +11%']);
  setLines('sponsorship', 1, ['赞助', '调整后利润率 64%', '同比 (0 个百分点)']);
  setLines('revenue', 0, ['收入', '$value', '同比 +9%']);
  setLines('eliminations', 0, ['抵销', '$value']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 26%', '同比 +1 个百分点']);
  setLines('direct_operating_expenses', 0, ['直接运营', '费用', '$value']);
  setLines('operating_profit', 0, ['营业利润', '$value', '利润率 5%', '同比 +1 个百分点']);
  setLines('operating_expenses', 0, ['其他运营', '费用', '$value', '']);
  labelsZh.operating_expenses.blocks[0].lines.pop();
  setLines('net_profit', 0, ['净利润', '$value', '利润率 3%', '同比 (2 个百分点)']);
  setLines('tax', 0, ['税费', '$value']);
  setLines('interest_and_other', 0, ['利息及其他', '$value', '']);
  labelsZh.interest_and_other.blocks[0].lines.pop();
  setLines('sga', 0, ['销售、一般及管理费用', '管理费用', '占收入 16%']);
  labelsZh.sga.blocks[0].lines[0].size = 20;
  labelsZh.sga.blocks[0].lines[1].text = '$value';
  labelsZh.sga.blocks[0].lines[1].size = 31;
  labelsZh.sga.blocks[0].lines[1].weight = 400;
  labelsZh.sga.blocks[0].lines[1].color = RED_LABEL;
  labelsZh.sga.blocks[0].lines[2].text = '占收入 16%';
  setLines('da', 0, ['折旧与摊销', '$value', '占收入 3%']);
  setLines('corporate_other', 0, ['公司及其他', '$value', '', '占收入 2%']);
  labelsZh.corporate_other.blocks[0].lines.splice(2, 1);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'live-nation-fy25',
    name: 'Live Nation · FY25',
    company: 'Live Nation',
    meta: {
      company: 'Live Nation',
      title: 'Live Nation FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/live-nation-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 2240,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      scale: 16.35,
      nodes: {
        concerts: { x: 394, y: 517, width: 73, height: 342 },
        ticketing: { x: 394, y: 1021, width: 73, height: 51 },
        sponsorship: { x: 394, y: 1198, width: 73, height: 22 },
        revenue: { x: 769, y: 615, width: 73, height: 416 },
        eliminations: { x: 1143, y: 1233, width: 72, height: 2 },
        gross_profit: { x: 1516, y: 609, width: 72, height: 105 },
        direct_operating_expenses: { x: 1516, y: 882, width: 72, height: 307 },
        operating_profit: { x: 1889, y: 531, width: 74, height: 21 },
        operating_expenses: { x: 1889, y: 732, width: 74, height: 86 },
        net_profit: { x: 2263, y: 429, width: 74, height: 11 },
        tax: { x: 2263, y: 634, width: 74, height: 5 },
        interest_and_other: { x: 2263, y: 756, width: 74, height: 3 },
        sga: { x: 2263, y: 878, width: 74, height: 67 },
        da: { x: 2263, y: 1088, width: 74, height: 10 },
        corporate_other: { x: 2263, y: 1257, width: 74, height: 8 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'concerts', col: 0, order: 0, type: 'source', label: 'Concerts', value: 20.9, valueText: '$20.9B', notes: ['+10% Y/Y', '3% adjusted margin', '+1pp Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'ticketing', col: 0, order: 1, type: 'source', label: 'Ticketing', value: 3.1, valueText: '$3.1B', notes: ['+3% Y/Y', '37% adjusted margin', '(1pp) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'sponsorship', col: 0, order: 2, type: 'source', label: 'Sponsorship', value: 1.3, valueText: '$1.3B', notes: ['+11% Y/Y', '64% adjusted margin', '(0pp) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 25.2, valueText: '$25.2B', notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 0, type: 'cost', label: 'Eliminations', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 6.4, valueText: '$6.4B', notes: ['26% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'direct_operating_expenses', col: 3, order: 1, type: 'cost', label: 'Direct operating expenses', value: 18.8, valueText: '($18.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.3, valueText: '$1.3B', notes: ['5% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Other operating expenses', value: 5.2, valueText: '($5.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.7, valueText: '$0.7B', notes: ['3% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest_and_other', col: 5, order: 2, type: 'cost', label: 'Interest & other', value: 0.2, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 4.1, valueText: '($4.1B)', notes: ['16% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 4, type: 'cost', label: 'D&A', value: 0.6, valueText: '($0.6B)', notes: ['3% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'corporate_other', col: 5, order: 5, type: 'cost', label: 'Corporate & Other', value: 0.5, valueText: '($0.5B)', notes: ['2% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'concerts', target: 'revenue', value: 20.9, sourceWidth: 342, targetWidth: 342, y0: 688, y1: 786, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'ticketing', target: 'revenue', value: 3.1, sourceWidth: 51, targetWidth: 51, y0: 1046.5, y1: 982.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'sponsorship', target: 'revenue', value: 1.3, sourceWidth: 22, targetWidth: 22, y0: 1209, y1: 1019, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 6.4, sourceWidth: 105, targetWidth: 105, y0: 667.5, y1: 661.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'direct_operating_expenses', value: 18.8, sourceWidth: 309, targetWidth: 307, y0: 874.5, y1: 1035.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'eliminations', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 1030, y1: 1234, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.3, sourceWidth: 21, targetWidth: 21, y0: 619.5, y1: 541.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.2, sourceWidth: 84, targetWidth: 86, y0: 672, y1: 775, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.7, sourceWidth: 11, targetWidth: 11, y0: 536.5, y1: 434.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 5, targetWidth: 5, y0: 544.5, y1: 636.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest_and_other', value: 0.2, sourceWidth: 5, targetWidth: 3, y0: 549.5, y1: 757.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 4.1, sourceWidth: 67, targetWidth: 67, y0: 765.5, y1: 911.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 0.6, sourceWidth: 10, targetWidth: 10, y0: 804, y1: 1093, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'corporate_other', value: 0.5, sourceWidth: 8, targetWidth: 8, y0: 813, y1: 1261, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Live Nation · 2025 财年',
        meta: {
          title: 'Live Nation 2025 财年利润表',
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
          titleTextLength: 1650,
        },
        nodes: {
          concerts: { label: '演唱会', notes: ['同比 +10%', '调整后利润率 3%', '同比 +1 个百分点'] },
          ticketing: { label: '票务', notes: ['同比 +3%', '调整后利润率 37%', '同比 (1 个百分点)'] },
          sponsorship: { label: '赞助', notes: ['同比 +11%', '调整后利润率 64%', '同比 (0 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 26%', '同比 +1 个百分点'] },
          direct_operating_expenses: { label: '直接运营费用' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 +1 个百分点'] },
          operating_expenses: { label: '其他运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          interest_and_other: { label: '利息及其他' },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 16%'] },
          da: { label: '折旧与摊销', notes: ['占收入 3%'] },
          corporate_other: { label: '公司及其他', notes: ['占收入 2%'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

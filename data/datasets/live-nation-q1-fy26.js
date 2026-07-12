/* ====================================================================
 * Live Nation - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/live-nation-q1-fy26.png as a fixed
 * d3-sankey layout. Brand raster annotations reuse the validated FY25
 * Live Nation assets because the source lockups are materially identical.
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
      block(431, 409, [line('$value', 39), line('+12% Y/Y', 29, { color: NOTE })]),
      block(359, 521, [line('Concerts', 40, { weight: 800 }), line('0% adjusted margin', 28, { color: NOTE }), line('(0pp) Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    ticketing: { blocks: [
      block(431, 933, [line('$value', 39), line('+10% Y/Y', 29, { color: NOTE })]),
      block(359, 1018, [line('Ticketing', 40, { weight: 800 }), line('33% adjusted margin', 28, { color: NOTE }), line('(3pp) Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    sponsorship: { blocks: [
      block(431, 1164, [line('$value', 39), line('+20% Y/Y', 29, { color: NOTE })]),
      block(359, 1247, [line('Sponsorship', 40, { weight: 800 }), line('64% adjusted margin', 28, { color: NOTE }), line('+1pp Y/Y', 28, { color: NOTE })], { anchor: 'end', lineGap: 10 }),
    ] },
    revenue: { blocks: [
      block(805.5, 466, [line('Revenue', 40, { weight: 800 }), line('$value', 39), line('+12% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    eliminations: { blocks: [
      block(1179, 1252, [line('Eliminations', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 10 }),
    ] },
    gross_profit: { blocks: [
      block(1552, 424, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 39, { color: GREEN_LABEL }), line('35% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
    ] },
    direct_operating_expenses: { blocks: [
      block(1552, 1260, [line('Direct operating', 36, { weight: 800, color: RED_LABEL }), line('expenses', 36, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL })], { lineGap: 9 }),
    ] },
    operating_loss: { blocks: [
      block(1745, 1010, [line('Operating', 36, { weight: 800, color: RED_LABEL }), line('loss', 36, { weight: 800, color: RED_LABEL }), line('$value', 35, { color: RED_LABEL }), line('(10%) margin', 28, { color: NOTE }), line('(13pp) Y/Y', 28, { color: NOTE })], { lineGap: 8 }),
    ] },
    operating_expenses: { blocks: [
      block(1926, 400, [line('Other', 38, { weight: 800, color: RED_LABEL }), line('operating', 38, { weight: 800, color: RED_LABEL }), line('expenses', 38, { weight: 800, color: RED_LABEL }), line('$value', 36, { color: RED_LABEL })], { lineGap: 7 }),
    ] },
    sga: { blocks: [
      block(RIGHT_X, 469, [line('SG&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('25% of revenue', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    corporate_other: { blocks: [
      block(RIGHT_X, 905, [line('Corporate', 32, { weight: 800, color: RED_LABEL }), line('& Other', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('15% of revenue', 29, { color: NOTE })], { lineGap: 7 }),
    ] },
    da: { blocks: [
      block(RIGHT_X, 1175, [line('D&A', 32, { weight: 800, color: RED_LABEL }), line('$value', 31, { color: RED_LABEL }), line('4% of revenue', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const setLines = (id, blockIndex, texts) => {
    labelsZh[id].blocks[blockIndex].lines.forEach((item, index) => { item.text = texts[index]; });
  };
  setLines('concerts', 0, ['$value', '同比 +12%']);
  setLines('concerts', 1, ['演唱会', '调整后利润率 0%', '同比 (0 个百分点)']);
  setLines('ticketing', 0, ['$value', '同比 +10%']);
  setLines('ticketing', 1, ['票务', '调整后利润率 33%', '同比 (3 个百分点)']);
  setLines('sponsorship', 0, ['$value', '同比 +20%']);
  setLines('sponsorship', 1, ['赞助', '调整后利润率 64%', '同比 +1 个百分点']);
  setLines('revenue', 0, ['收入', '$value', '同比 +12%']);
  setLines('eliminations', 0, ['抵销', '$value']);
  setLines('gross_profit', 0, ['毛利润', '$value', '利润率 35%', '同比 +1 个百分点']);
  setLines('direct_operating_expenses', 0, ['直接运营', '费用', '$value']);
  setLines('operating_loss', 0, ['营业亏损', '', '$value', '利润率 (10%)', '同比 (13 个百分点)']);
  labelsZh.operating_loss.blocks[0].lines.splice(1, 1);
  setLines('operating_expenses', 0, ['其他运营', '费用', '', '$value']);
  labelsZh.operating_expenses.blocks[0].lines.splice(2, 1);
  setLines('sga', 0, ['销售、一般及管理费用', '$value', '占收入 25%']);
  labelsZh.sga.blocks[0].lines[0].size = 20;
  setLines('corporate_other', 0, ['公司及其他', '$value', '', '占收入 15%']);
  labelsZh.corporate_other.blocks[0].lines.splice(2, 1);
  setLines('da', 0, ['折旧与摊销', '$value', '占收入 4%']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'live-nation-q1-fy26',
    name: 'Live Nation · Q1 FY26',
    company: 'Live Nation',
    meta: {
      company: 'Live Nation',
      title: 'Live Nation Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/live-nation-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 800,
      titleTextLength: 2465,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BACKGROUND,
      interfaceAudit: {
        mode: 'error',
        fullFaceIds: [
          'revenue:left', 'revenue:right',
          'operating_expenses:left', 'operating_expenses:right',
        ],
      },
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
      scale: 126.5,
      nodes: {
        concerts: { x: 396, y: 498, width: 71, height: 355 },
        ticketing: { x: 396, y: 1022, width: 71, height: 96 },
        sponsorship: { x: 396, y: 1253, width: 71, height: 32 },
        revenue: { x: 770, y: 606, width: 70, height: 487 },
        eliminations: { x: 1143, y: 1345, width: 72, height: 1 },
        gross_profit: { x: 1517, y: 603, width: 71, height: 167 },
        direct_operating_expenses: { x: 1517, y: 931, width: 71, height: 317 },
        operating_loss: { x: 1710, y: 934, width: 70, height: 45 },
        operating_expenses: { x: 1891, y: 710, width: 71, height: 216 },
        sga: { x: 2264, y: 602, width: 71, height: 121 },
        corporate_other: { x: 2264, y: 938, width: 71, height: 69 },
        da: { x: 2264, y: 1207, width: 71, height: 20 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'concerts', col: 0, order: 0, type: 'source', label: 'Concerts', value: 2.8, valueText: '$2.8B', notes: ['+12% Y/Y', '0% adjusted margin', '(0pp) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'ticketing', col: 0, order: 1, type: 'source', label: 'Ticketing', value: 0.8, valueText: '$0.8B', notes: ['+10% Y/Y', '33% adjusted margin', '(3pp) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'sponsorship', col: 0, order: 2, type: 'source', label: 'Sponsorship', value: 0.3, valueText: '$0.3B', notes: ['+20% Y/Y', '64% adjusted margin', '+1pp Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 3.8, valueText: '$3.8B', notes: ['+12% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.006, valueText: '($6M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 1.3, valueText: '$1.3B', notes: ['35% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'direct_operating_expenses', col: 3, order: 1, type: 'cost', label: 'Direct operating expenses', value: 2.5, valueText: '($2.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -0.3, valueText: '($0.3B)', notes: ['(10%) margin', '(13pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Other', 'operating', 'expenses'], value: 1.7, valueText: '($1.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 0, type: 'cost', label: 'SG&A', value: 1.0, valueText: '($1.0B)', notes: ['25% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'corporate_other', col: 5, order: 1, type: 'cost', label: ['Corporate', '& Other'], value: 0.5, valueText: '($0.5B)', notes: ['15% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 2, type: 'cost', label: 'D&A', value: 0.2, valueText: '($0.2B)', notes: ['4% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'concerts', target: 'revenue', value: 2.8, sourceWidth: 355, targetWidth: 356, y0: 675.5, y1: 784, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK },
      { source: 'ticketing', target: 'revenue', value: 0.8, sourceWidth: 96, targetWidth: 96, y0: 1070, y1: 1010, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK },
      { source: 'sponsorship', target: 'revenue', value: 0.3, sourceWidth: 32, targetWidth: 35, y0: 1269, y1: 1075.5, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.3, sourceWidth: 254, targetWidth: 167, y0: 733, y1: 686.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'direct_operating_expenses', value: 2.5, sourceWidth: 233, targetWidth: 317, y0: 976.5, y1: 1089.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'eliminations', value: 0.006, sourceWidth: 0.5, targetWidth: 1, y0: 1092.75, y1: 1345.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, curve: { x0: 840, y0: 1092.75, x1: 1143, y1: 1345.5, c1x: 900, c1y: 1092.75, c2x: 1050, c2y: 1345.5 } },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.3, sourceWidth: 167, targetWidth: 170, y0: 686.5, y1: 795, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.3, sourceWidth: 45, targetWidth: 46, y0: 956.5, y1: 903, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1780, y0: 956.5, x1: 1891, y1: 903, c1x: 1815, c1y: 956.5, c2x: 1850, c2y: 903 } },
      { source: 'operating_expenses', target: 'sga', value: 1.0, sourceWidth: 121, targetWidth: 121, y0: 770.5, y1: 662.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'corporate_other', value: 0.5, sourceWidth: 69, targetWidth: 69, y0: 865.5, y1: 972.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'da', value: 0.2, sourceWidth: 26, targetWidth: 20, y0: 913, y1: 1217, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Live Nation · 2026 财年第一季度',
        meta: {
          title: 'Live Nation 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 2080,
        },
        nodes: {
          concerts: { label: '演唱会', notes: ['同比 +12%', '调整后利润率 0%', '同比 (0 个百分点)'] },
          ticketing: { label: '票务', notes: ['同比 +10%', '调整后利润率 33%', '同比 (3 个百分点)'] },
          sponsorship: { label: '赞助', notes: ['同比 +20%', '调整后利润率 64%', '同比 +1 个百分点'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 35%', '同比 +1 个百分点'] },
          direct_operating_expenses: { label: '直接运营费用' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (10%)', '同比 (13 个百分点)'] },
          operating_expenses: { label: '其他运营费用' },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 25%'] },
          corporate_other: { label: '公司及其他', notes: ['占收入 15%'] },
          da: { label: '折旧与摊销', notes: ['占收入 4%'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

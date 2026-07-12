/* GE Vernova Q4 FY25 income statement ($B), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const TEAL = '#005e60';
  const TEAL_LINK = '#85afaf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2367;

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
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });

  const labelsEn = {
    power: { blocks: [
      block(421, 386, [line('$value', 40), line('+6% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 575, [line('Power', 40, { weight: 800 })]),
      block(194, 626, [line('13% segment margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    wind: { blocks: [
      block(421, 740, [line('$value', 40), line('+1% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 870, [line('Wind', 40, { weight: 800 })]),
      block(194, 920, [line('(2%) segment margin', 29, { color: NOTE }), line('+9pp Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    electrification: { blocks: [
      block(421, 1027, [line('$value', 40), line('+36% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 1172, [line('Electrification', 40, { weight: 800 })]),
      block(194, 1223, [line('15% segment margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    gross_segment_revenue: { blocks: [] },
    revenue: { blocks: [block(1169, 594, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+4% Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    eliminations: { blocks: [block(1169, 1178, [line('Eliminations', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
    gross_profit: { blocks: [block(1542, 454, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('21% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    cost_of_equipment: { blocks: [block(1691, 877, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('equipment', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    cost_of_services: { blocks: [block(1665, 1108, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('services', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1917, 364, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('5% margin', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1917, 825, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    tax_benefit: { blocks: [block(2159, 272, [line('Tax', 34, { weight: 800, color: GREEN_LABEL }), line('benefit', 34, { weight: 800, color: GREEN_LABEL }), line('$value', 31, { color: GREEN_LABEL })], { lineGap: 7 })] },
    other: { blocks: [block(2157, 595, [line('Other', 34, { weight: 800, color: GREEN_LABEL }), line('$value', 31, { color: GREEN_LABEL })], { lineGap: 7 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 396, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('33% margin', 29, { color: NOTE }), line('+29pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    sga: { blocks: [block(RIGHT_LABEL_X, 878, [line('SG&A ($1.4B)', 34, { weight: 800, color: RED_LABEL }), line('12% of revenue', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 1034, [line('R&D ($0.4B)', 34, { weight: 800, color: RED_LABEL }), line('3% of revenue', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const replaceLines = (id, blockIndex, texts) => texts.forEach((text, index) => { labelsZh[id].blocks[blockIndex].lines[index].text = text; });
  replaceLines('power', 0, ['$value', '同比 +6%']);
  replaceLines('power', 1, ['电力']);
  replaceLines('power', 2, ['部门利润率 13%', '同比 +1 个百分点']);
  replaceLines('wind', 0, ['$value', '同比 +1%']);
  replaceLines('wind', 1, ['风电']);
  replaceLines('wind', 2, ['部门利润率 (2%)', '同比 +9 个百分点']);
  replaceLines('electrification', 0, ['$value', '同比 +36%']);
  replaceLines('electrification', 1, ['电气化']);
  replaceLines('electrification', 2, ['部门利润率 15%', '同比 +5 个百分点']);
  replaceLines('revenue', 0, ['收入', '$value', '同比 +4%']);
  replaceLines('eliminations', 0, ['抵销', '$value']);
  replaceLines('gross_profit', 0, ['毛利润', '$value', '利润率 21%', '同比 +1 个百分点']);
  replaceLines('cost_of_equipment', 0, ['设备成本', '$value', '']);
  labelsZh.cost_of_equipment.blocks[0].lines = labelsZh.cost_of_equipment.blocks[0].lines.slice(0, 2);
  replaceLines('cost_of_services', 0, ['服务成本', '$value', '']);
  labelsZh.cost_of_services.blocks[0].lines = labelsZh.cost_of_services.blocks[0].lines.slice(0, 2);
  replaceLines('operating_profit', 0, ['营业利润', '$value', '利润率 5%', '同比 (0 个百分点)']);
  replaceLines('operating_expenses', 0, ['运营', '费用', '$value']);
  replaceLines('tax_benefit', 0, ['税收', '收益', '$value']);
  replaceLines('other', 0, ['其他', '$value']);
  replaceLines('net_profit', 0, ['净利润', '$value', '利润率 33%', '同比 +29 个百分点']);
  replaceLines('sga', 0, ['销售、一般及管理费用', '占收入 12%', '同比 +0 个百分点']);
  labelsZh.sga.blocks[0].lines[0].size = 29;
  replaceLines('rnd', 0, ['研发 ($0.4B)', '占收入 3%', '同比 +1 个百分点']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ge-vernova-q4-fy25',
    name: 'GE Vernova · Q4 FY25',
    company: 'GE Vernova',
    meta: {
      company: 'GE Vernova',
      title: 'GE Vernova Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ge-vernova-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2428,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: TEAL, label: TEAL },
        hub: { node: TEAL, label: TEAL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: TEAL_LINK, hub: TEAL_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'ge-vernova-company-logo', href: 'data/assets/raster-annotations/ge-vernova/company-logo.png', x: 544, y: 274, width: 820, height: 190 },
      { key: 'ge-vernova-power-icon', href: 'data/assets/raster-annotations/ge-vernova/power-icon.png', x: 122, y: 426, width: 152, height: 144 },
      { key: 'ge-vernova-wind-icon', href: 'data/assets/raster-annotations/ge-vernova/wind-icon.png', x: 122, y: 720, width: 152, height: 144 },
      { key: 'ge-vernova-electrification-icon', href: 'data/assets/raster-annotations/ge-vernova/electrification-icon.png', x: 122, y: 1020, width: 152, height: 138 },
    ],
    layout: {
      scale: 1,
      nodes: {
        power: { x: 386, y: 477, width: 71, height: 153 },
        wind: { x: 386, y: 836, width: 71, height: 83 },
        electrification: { x: 386, y: 1124, width: 71, height: 77 },
        gross_segment_revenue: { x: 760, y: 633, width: 70, height: 317 },
        revenue: { x: 1134, y: 735, width: 70, height: 294 },
        eliminations: { x: 1134, y: 1131, width: 70, height: 23 },
        gross_profit: { x: 1507, y: 633, width: 71, height: 60 },
        cost_of_equipment: { x: 1507, y: 867, width: 71, height: 143 },
        cost_of_services: { x: 1507, y: 1121, width: 71, height: 84 },
        operating_profit: { x: 1881, y: 543, width: 71, height: 14 },
        operating_expenses: { x: 1881, y: 756, width: 71, height: 45 },
        tax_benefit: { x: 2124, y: 398, width: 70, height: 67 },
        other: { x: 2122, y: 562, width: 70, height: 11 },
        net_profit: { x: 2254, y: 422, width: 71, height: 96 },
        sga: { x: 2254, y: 889, width: 71, height: 35 },
        rnd: { x: 2254, y: 1046, width: 71, height: 9 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'power', col: 0, order: 0, type: 'source', label: 'Power', value: 5.7, notes: ['+6% Y/Y', '13% segment margin', '+1pp Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'wind', col: 0, order: 1, type: 'source', label: 'Wind', value: 3.1, notes: ['+1% Y/Y', '(2%) segment margin', '+9pp Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'electrification', col: 0, order: 2, type: 'source', label: 'Electrification', value: 3.0, notes: ['+36% Y/Y', '15% segment margin', '+5pp Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'gross_segment_revenue', col: 1, order: 0, type: 'hub', label: 'Company revenue before eliminations', value: 11.8, color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 11.0, notes: ['+4% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.9, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.3, notes: ['21% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_equipment', col: 3, order: 1, type: 'cost', label: ['Cost of', 'equipment'], value: 5.4, valueText: '($5.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_of_services', col: 3, order: 2, type: 'cost', label: ['Cost of', 'services'], value: 3.2, valueText: '($3.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['5% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.7, valueText: '($1.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: 'Tax benefit', value: 2.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 3.7, notes: ['33% margin', '+29pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: 'SG&A', value: 1.4, valueText: '($1.4B)', notes: ['12% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 0.4, valueText: '($0.4B)', notes: ['3% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'power', target: 'gross_segment_revenue', value: 5.7, sourceWidth: 153, targetWidth: 153, y0: 553.5, y1: 709.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'wind', target: 'gross_segment_revenue', value: 3.1, sourceWidth: 83, targetWidth: 83, y0: 877.5, y1: 827.5, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'electrification', target: 'gross_segment_revenue', value: 3.0, sourceWidth: 77, targetWidth: 82, y0: 1162.5, y1: 909, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'revenue', value: 11.0, sourceWidth: 294, targetWidth: 294, y0: 780, y1: 882, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'eliminations', value: 0.9, sourceWidth: 23, targetWidth: 23, y0: 938.5, y1: 1142.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.3, sourceWidth: 62, targetWidth: 60, y0: 766, y1: 663, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_equipment', value: 5.4, sourceWidth: 147, targetWidth: 143, y0: 870, y1: 938.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'cost_of_services', value: 3.2, sourceWidth: 86, targetWidth: 84, y0: 986.5, y1: 1163, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, sourceWidth: 17, targetWidth: 14, y0: 641.5, y1: 550, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.7, sourceWidth: 42, targetWidth: 45, y0: 672, y1: 778.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.6, sourceWidth: 14, targetWidth: 16, y0: 550, y1: 498, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 2.6, sourceWidth: 67, targetWidth: 68, y0: 431.5, y1: 456, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 0.5, sourceWidth: 11, targetWidth: 12, y0: 567.5, y1: 512, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.4, sourceWidth: 35, targetWidth: 35, y0: 773.5, y1: 906.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.4, sourceWidth: 9, targetWidth: 9, y0: 795.5, y1: 1050.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'GE Vernova · 2025 财年第四季度',
        meta: {
          title: 'GE Vernova 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleTextLength: 2160,
        },
        nodes: {
          power: { label: '电力', notes: ['同比 +6%', '部门利润率 13%', '同比 +1 个百分点'] },
          wind: { label: '风电', notes: ['同比 +1%', '部门利润率 (2%)', '同比 +9 个百分点'] },
          electrification: { label: '电气化', notes: ['同比 +36%', '部门利润率 15%', '同比 +5 个百分点'] },
          gross_segment_revenue: { label: '抵销前公司收入' },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 21%', '同比 +1 个百分点'] },
          cost_of_equipment: { label: '设备成本' },
          cost_of_services: { label: '服务成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收收益' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 33%', '同比 +29 个百分点'] },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 12%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 +1 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

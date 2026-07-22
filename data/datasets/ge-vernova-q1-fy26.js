/* GE Vernova Q1 FY26 income statement ($B), measured from the processed reference. */
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

  const chartAnnotations = (zh) => `
    <g class="sankey-interactive-annotation" data-node="electrification">
      <text x="194" y="1184" text-anchor="middle" font-size="40"
        font-weight="800" fill="${TEAL}">${zh ? '电气化' : 'Electrification'}</text>
    </g>`;

  const labelsEn = {
    power: { blocks: [
      block(421, 381, [line('$value', 40), line('+12% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 535, [line('Power', 40, { weight: 800 })]),
      block(194, 605, [line('16% segment margin', 29, { color: NOTE }), line('+5pp Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    wind: { blocks: [
      block(421, 764, [line('$value', 40), line('(22%) Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 855, [line('Wind', 40, { weight: 800 })]),
      block(194, 898, [line('(27%) segment margin', 29, { color: NOTE }), line('(19pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    electrification: { blocks: [
      block(421, 984, [line('$value', 40), line('+61% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 1201, [line('18% segment margin', 29, { color: NOTE }), line('+7pp Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    gross_segment_revenue: { blocks: [] },
    revenue: { blocks: [block(1169, 596, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+16% Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    eliminations: { blocks: [block(1169, 1186, [line('Eliminations', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 18 })] },
    gross_profit: { blocks: [block(1540, 461, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('19% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    cost_of_equipment: { blocks: [block(1689, 892, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('equipment', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    cost_of_services: { blocks: [block(1688, 1115, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('services', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1914, 387, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('2% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1916, 871, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    other: { blocks: [block(1974, 628, [line('Other', 34, { weight: 800, color: '#029053' }), line('$value', 31, { color: '#029053' })], { lineGap: 7 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 473, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('51% margin', 29, { color: NOTE }), line('+48pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    sga: { blocks: [block(2358, 947, [line('SG&A ($1.3B)', 34, { weight: 800, color: RED_LABEL }), line('14% of revenue', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 1131, [line('R&D ($0.3B)', 34, { weight: 800, color: RED_LABEL }), line('3% of revenue', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const replaceLines = (id, blockIndex, texts) => texts.forEach((text, index) => { labelsZh[id].blocks[blockIndex].lines[index].text = text; });
  replaceLines('power', 0, ['$value', '同比 +12%']);
  replaceLines('power', 1, ['电力']);
  replaceLines('power', 2, ['部门利润率 16%', '同比 +5 个百分点']);
  replaceLines('wind', 0, ['$value', '同比 (22%)']);
  replaceLines('wind', 1, ['风电']);
  replaceLines('wind', 2, ['部门利润率 (27%)', '同比 (19 个百分点)']);
  replaceLines('electrification', 0, ['$value', '同比 +61%']);
  replaceLines('electrification', 1, ['部门利润率 18%', '同比 +7 个百分点']);
  replaceLines('revenue', 0, ['收入', '$value', '同比 +16%']);
  replaceLines('eliminations', 0, ['抵销', '$value']);
  replaceLines('gross_profit', 0, ['毛利润', '$value', '利润率 19%', '同比 +1 个百分点']);
  replaceLines('cost_of_equipment', 0, ['设备成本', '$value', '']);
  labelsZh.cost_of_equipment.blocks[0].lines = labelsZh.cost_of_equipment.blocks[0].lines.slice(0, 2);
  replaceLines('cost_of_services', 0, ['服务成本', '$value', '']);
  labelsZh.cost_of_services.blocks[0].lines = labelsZh.cost_of_services.blocks[0].lines.slice(0, 2);
  replaceLines('operating_profit', 0, ['营业利润', '$value', '利润率 2%', '同比 +1 个百分点']);
  replaceLines('operating_expenses', 0, ['运营', '费用', '$value']);
  replaceLines('other', 0, ['其他', '$value']);
  replaceLines('net_profit', 0, ['净利润', '$value', '利润率 51%', '同比 +48 个百分点']);
  replaceLines('sga', 0, ['销售、一般及管理费用', '占收入 14%', '同比 (1 个百分点)']);
  labelsZh.sga.blocks[0].lines[0].size = 29;
  replaceLines('rnd', 0, ['研发 ($0.3B)', '占收入 3%', '同比 +0 个百分点']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ge-vernova-q1-fy26',
    name: 'GE Vernova · Q1 FY26',
    company: 'GE Vernova',
    meta: {
      company: 'GE Vernova',
      title: 'GE Vernova Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ge-vernova-q1-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: chartAnnotations(false),
    rasterAnnotations: [
      { key: 'ge-vernova-company-logo', href: 'data/assets/raster-annotations/ge-vernova/company-logo.png', x: 544, y: 274, width: 820, height: 190 },
      { key: 'ge-vernova-power-icon', href: 'data/assets/raster-annotations/ge-vernova/power-icon.png', x: 122, y: 406, width: 152, height: 144 },
      { key: 'ge-vernova-wind-icon', href: 'data/assets/raster-annotations/ge-vernova/wind-icon.png', x: 122, y: 699, width: 152, height: 144 },
      { key: 'ge-vernova-electrification-icon', href: 'data/assets/raster-annotations/ge-vernova/electrification-icon.png', x: 122, y: 999, width: 152, height: 138 },
    ],
    layout: {
      scale: 1,
      nodes: {
        power: { x: 386, y: 472, width: 71, height: 175 },
        wind: { x: 386, y: 854, width: 71, height: 49 },
        electrification: { x: 386, y: 1075, width: 71, height: 102 },
        gross_segment_revenue: { x: 760, y: 642, width: 70, height: 333 },
        revenue: { x: 1134, y: 738, width: 70, height: 333 },
        eliminations: { x: 1134, y: 1167, width: 71, height: 1 },
        gross_profit: { x: 1507, y: 639, width: 71, height: 63 },
        cost_of_equipment: { x: 1507, y: 875, width: 71, height: 166 },
        cost_of_services: { x: 1507, y: 1131, width: 71, height: 100 },
        operating_profit: { x: 1881, y: 567, width: 71, height: 4 },
        operating_expenses: { x: 1881, y: 799, width: 71, height: 56 },
        other: { x: 2044, y: 576, width: 70, height: 161 },
        net_profit: { x: 2254, y: 469, width: 71, height: 168 },
        sga: { x: 2254, y: 957, width: 71, height: 45 },
        rnd: { x: 2254, y: 1156, width: 71, height: 9 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'power', col: 0, order: 0, type: 'source', label: 'Power', value: 5.0, valueText: '$5.0B', notes: ['+12% Y/Y', '16% segment margin', '+5pp Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'wind', col: 0, order: 1, type: 'source', label: 'Wind', value: 1.4, notes: ['(22%) Y/Y', '(27%) segment margin', '(19pp) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'electrification', col: 0, order: 2, type: 'source', label: 'Electrification', value: 3.0, valueText: '$3.0B', notes: ['+61% Y/Y', '18% segment margin', '+7pp Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'gross_segment_revenue', col: 1, order: 0, type: 'hub', label: 'Company revenue before eliminations', value: 9.4, color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 9.3, notes: ['+16% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.023, valueText: '($23M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 1.8, notes: ['19% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_equipment', col: 3, order: 1, type: 'cost', label: ['Cost of', 'equipment'], value: 4.7, valueText: '($4.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_of_services', col: 3, order: 2, type: 'cost', label: ['Cost of', 'services'], value: 2.8, valueText: '($2.8B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.2, notes: ['2% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.6, valueText: '($1.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 4.5, color: GREEN, labelColor: '#029053', linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 4.8, notes: ['51% margin', '+48pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: 'SG&A', value: 1.3, valueText: '($1.3B)', notes: ['14% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 0.3, valueText: '($0.3B)', notes: ['3% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'power', target: 'gross_segment_revenue', value: 5.0, sourceWidth: 175, targetWidth: 177, y0: 559.5, y1: 730.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'wind', target: 'gross_segment_revenue', value: 1.4, sourceWidth: 49, targetWidth: 49, y0: 878.5, y1: 843.5, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'electrification', target: 'gross_segment_revenue', value: 3.0, sourceWidth: 102, targetWidth: 107, y0: 1126, y1: 921.5, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'revenue', value: 9.3, sourceWidth: 333, targetWidth: 333, y0: 808.5, y1: 904.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'eliminations', value: 0.023, sourceWidth: 2, targetWidth: 1, y0: 974, y1: 1167.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.8, sourceWidth: 63, targetWidth: 63, y0: 769.5, y1: 670.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_equipment', value: 4.7, sourceWidth: 168, targetWidth: 166, y0: 885, y1: 958, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'cost_of_services', value: 2.8, sourceWidth: 102, targetWidth: 100, y0: 1020, y1: 1181, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 641, y1: 569, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.6, sourceWidth: 59, targetWidth: 56, y0: 672.5, y1: 827, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.2, sourceWidth: 4, targetWidth: 4, y0: 569, y1: 471, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other', target: 'net_profit', value: 4.5, sourceWidth: 161, targetWidth: 164, y0: 656.5, y1: 555, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.3, sourceWidth: 46, targetWidth: 45, y0: 822, y1: 979.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, sourceWidth: 10, targetWidth: 9, y0: 850, y1: 1160.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'GE Vernova · 2026 财年第一季度',
        meta: {
          title: 'GE Vernova 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleTextLength: 2160,
        },
        annotationsSvg: chartAnnotations(true),
        nodes: {
          power: { label: '电力', notes: ['同比 +12%', '部门利润率 16%', '同比 +5 个百分点'] },
          wind: { label: '风电', notes: ['同比 (22%)', '部门利润率 (27%)', '同比 (19 个百分点)'] },
          electrification: { label: '电气化', notes: ['同比 +61%', '部门利润率 18%', '同比 +7 个百分点'] },
          gross_segment_revenue: { label: '抵销前公司收入' },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 19%', '同比 +1 个百分点'] },
          cost_of_equipment: { label: '设备成本' },
          cost_of_services: { label: '服务成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 51%', '同比 +48 个百分点'] },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 +0 个百分点'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

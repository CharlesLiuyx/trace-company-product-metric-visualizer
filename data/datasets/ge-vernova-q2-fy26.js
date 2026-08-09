/* GE Vernova Q2 FY26 income statement ($B), measured from the processing reference. */
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
      <text x="194" y="1137" text-anchor="middle" font-size="40"
        font-weight="800" fill="${TEAL}">${zh ? '电气化' : 'Electrification'}</text>
    </g>`;

  const labelsEn = {
    power: { blocks: [
      block(421, 421, [line('$value', 40), line('+14% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 563, [line('Power', 40, { weight: 800 })]),
      block(194, 619, [line('19% segment margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    wind: { blocks: [
      block(421, 742, [line('$value', 40), line('(10%) Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 836, [line('Wind', 40, { weight: 800 })]),
      block(194, 867, [line('(14%) segment margin', 29, { color: NOTE }), line('(6pp) Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    electrification: { blocks: [
      block(421, 942, [line('$value', 40), line('+68% Y/Y', 29, { color: NOTE })], { lineGap: 10 }),
      block(194, 1152, [line('18% segment margin', 29, { color: NOTE }), line('+4pp Y/Y', 29, { color: NOTE })], { lineGap: 8 }),
    ] },
    gross_segment_revenue: { blocks: [] },
    revenue: { blocks: [block(1173, 578, [line('Revenue', 40, { weight: 800 }), line('$value', 40), line('+22% Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    eliminations: { blocks: [block(1173, 1213, [line('Eliminations', 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 18 })] },
    gross_profit: { blocks: [block(1544, 450, [line('Gross profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('21% margin', 29, { color: NOTE }), line('+1pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    cost_of_equipment: { blocks: [block(1693, 892, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('equipment', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    cost_of_services: { blocks: [block(1692, 1202, [line('Cost of', 40, { weight: 800, color: RED_LABEL }), line('services', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    operating_profit: { blocks: [block(1918, 370, [line('Operating profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('6% margin', 29, { color: NOTE }), line('+2pp Y/Y', 29, { color: NOTE })], { lineGap: 8 })] },
    operating_expenses: { blocks: [block(1920, 807, [line('Operating', 40, { weight: 800, color: RED_LABEL }), line('expenses', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })], { lineGap: 8 })] },
    other: { blocks: [block(2174, 550, [line('Other', 34, { weight: 800, color: '#029053' }), line('$value', 31, { color: '#029053' })], { lineGap: 7 })] },
    net_profit: { blocks: [block(RIGHT_LABEL_X, 422, [line('Net profit', 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }), line('6% margin', 29, { color: NOTE }), line('+0pp Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    tax: { blocks: [block(2378, 680, [line('Tax ($0.3B)', 34, { weight: 800, color: RED_LABEL })], { anchor: 'start' })] },
    sga: { blocks: [block(2358, 895, [line('SG&A ($1.4B)', 34, { weight: 800, color: RED_LABEL }), line('12% of revenue', 29, { color: NOTE }), line('(1pp) Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
    rnd: { blocks: [block(RIGHT_LABEL_X, 1127, [line('R&D ($0.3B)', 34, { weight: 800, color: RED_LABEL }), line('3% of revenue', 29, { color: NOTE }), line('(0pp) Y/Y', 29, { color: NOTE })], { anchor: 'start', lineGap: 8 })] },
  };

  const labelsZh = JSON.parse(JSON.stringify(labelsEn));
  const replaceLines = (id, blockIndex, texts) => texts.forEach((text, index) => { labelsZh[id].blocks[blockIndex].lines[index].text = text; });
  replaceLines('power', 0, ['$value', '同比 +14%']);
  replaceLines('power', 1, ['电力']);
  replaceLines('power', 2, ['部门利润率 19%', '同比 +2 个百分点']);
  replaceLines('wind', 0, ['$value', '同比 (10%)']);
  replaceLines('wind', 1, ['风电']);
  replaceLines('wind', 2, ['部门利润率 (14%)', '同比 (6 个百分点)']);
  replaceLines('electrification', 0, ['$value', '同比 +68%']);
  replaceLines('electrification', 1, ['部门利润率 18%', '同比 +4 个百分点']);
  replaceLines('revenue', 0, ['收入', '$value', '同比 +22%']);
  replaceLines('eliminations', 0, ['抵销', '$value']);
  replaceLines('gross_profit', 0, ['毛利润', '$value', '利润率 21%', '同比 +1 个百分点']);
  labelsZh.cost_of_equipment.blocks[0].lines = [line('设备成本', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })];
  labelsZh.cost_of_services.blocks[0].lines = [line('服务成本', 40, { weight: 800, color: RED_LABEL }), line('$value', 40, { color: RED_LABEL })];
  replaceLines('operating_profit', 0, ['营业利润', '$value', '利润率 6%', '同比 +2 个百分点']);
  replaceLines('operating_expenses', 0, ['运营', '费用', '$value']);
  replaceLines('other', 0, ['其他', '$value']);
  replaceLines('net_profit', 0, ['净利润', '$value', '利润率 6%', '同比 +0 个百分点']);
  labelsZh.tax.blocks[0].lines = [line('税费 ($0.3B)', 34, { weight: 800, color: RED_LABEL })];
  labelsZh.sga.blocks[0].lines = [
    line('销售、一般及管理费用', 29, { weight: 800, color: RED_LABEL }),
    line('$value', 31, { color: RED_LABEL }),
    line('占收入 12%', 29, { color: NOTE }),
    line('同比 (1 个百分点)', 29, { color: NOTE }),
  ];
  replaceLines('rnd', 0, ['研发 ($0.3B)', '占收入 3%', '同比 (0 个百分点)']);

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ge-vernova-q2-fy26',
    name: 'GE Vernova · Q2 FY26',
    company: 'GE Vernova',
    meta: {
      company: 'GE Vernova',
      title: 'GE Vernova Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ge-vernova-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'ge-vernova-power-icon', href: 'data/assets/raster-annotations/ge-vernova/power-icon.png', x: 124, y: 412, width: 152, height: 144 },
      { key: 'ge-vernova-wind-icon', href: 'data/assets/raster-annotations/ge-vernova/wind-icon.png', x: 124, y: 682, width: 152, height: 144 },
      { key: 'ge-vernova-electrification-icon', href: 'data/assets/raster-annotations/ge-vernova/electrification-icon.png', x: 124, y: 953, width: 152, height: 138 },
    ],
    layout: {
      scale: 1,
      nodes: {
        power: { x: 390, y: 512, width: 71, height: 158 },
        wind: { x: 390, y: 832, width: 71, height: 57 },
        electrification: { x: 390, y: 1036, width: 71, height: 104 },
        gross_segment_revenue: { x: 764, y: 627, width: 70, height: 324 },
        revenue: { x: 1138, y: 717, width: 70, height: 323 },
        eliminations: { x: 1138, y: 1188, width: 71, height: 1 },
        gross_profit: { x: 1511, y: 628, width: 71, height: 68 },
        cost_of_equipment: { x: 1511, y: 879, width: 71, height: 162 },
        cost_of_services: { x: 1511, y: 1223, width: 71, height: 90 },
        operating_profit: { x: 1885, y: 550, width: 71, height: 16 },
        operating_expenses: { x: 1885, y: 745, width: 71, height: 47 },
        other: { x: 2138, y: 522, width: 70, height: 6 },
        net_profit: { x: 2258, y: 466, width: 71, height: 16 },
        tax: { x: 2258, y: 697, width: 71, height: 6 },
        sga: { x: 2258, y: 897, width: 71, height: 39 },
        rnd: { x: 2258, y: 1144, width: 71, height: 7 },
      },
      labels: labelsEn,
    },
    nodes: [
      { id: 'power', col: 0, order: 0, type: 'source', label: 'Power', value: 5.5, notes: ['+14% Y/Y', '19% segment margin', '+2pp Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'wind', col: 0, order: 1, type: 'source', label: 'Wind', value: 2.0, valueText: '$2.0B', notes: ['(10%) Y/Y', '(14%) segment margin', '(6pp) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'electrification', col: 0, order: 2, type: 'source', label: 'Electrification', value: 3.6, notes: ['+68% Y/Y', '18% segment margin', '+4pp Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'gross_segment_revenue', col: 1, order: 0, type: 'hub', label: 'Company revenue before eliminations', value: 11.1, color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 11.1, notes: ['+22% Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: -0.036, valueText: '($36M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.4, notes: ['21% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_equipment', col: 3, order: 1, type: 'cost', label: ['Cost of', 'equipment'], value: 5.6, valueText: '($5.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'cost_of_services', col: 3, order: 2, type: 'cost', label: ['Cost of', 'services'], value: 3.1, valueText: '($3.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.7, notes: ['6% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.7, valueText: '($1.7B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.3, color: GREEN, labelColor: '#029053', linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.6, notes: ['6% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3, valueText: '($0.3B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 1.4, valueText: '($1.4B)', notes: ['12% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 0.3, valueText: '($0.3B)', notes: ['3% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'power', target: 'gross_segment_revenue', value: 5.5, sourceWidth: 158, targetWidth: 162, y0: 591, y1: 708, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'wind', target: 'gross_segment_revenue', value: 2.0, sourceWidth: 57, targetWidth: 58, y0: 860.5, y1: 818, sourceOrder: 0, targetOrder: 1, linkTint: TEAL_LINK },
      { source: 'electrification', target: 'gross_segment_revenue', value: 3.6, sourceWidth: 104, targetWidth: 104, y0: 1088, y1: 899, sourceOrder: 0, targetOrder: 2, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'revenue', value: 11.1, sourceWidth: 323, targetWidth: 323, y0: 788.5, y1: 878.5, sourceOrder: 0, targetOrder: 0, linkTint: TEAL_LINK },
      { source: 'gross_segment_revenue', target: 'eliminations', value: 0.036, sourceWidth: 1, targetWidth: 1, y0: 950.5, y1: 1188.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 2.4, sourceWidth: 68, targetWidth: 68, y0: 751, y1: 662, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_equipment', value: 5.6, sourceWidth: 164, targetWidth: 162, y0: 868, y1: 960, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'cost_of_services', value: 3.1, sourceWidth: 90, targetWidth: 90, y0: 995, y1: 1268, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 0.7, sourceWidth: 20, targetWidth: 16, y0: 638, y1: 558, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.7, sourceWidth: 48, targetWidth: 47, y0: 672, y1: 768.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 11, targetWidth: 10, y0: 555.5, y1: 471, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 5, targetWidth: 6, y0: 563.5, y1: 700, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other', target: 'net_profit', value: 0.3, sourceWidth: 6, targetWidth: 6, y0: 525, y1: 479, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 1.4, sourceWidth: 40, targetWidth: 39, y0: 765, y1: 916.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, sourceWidth: 7, targetWidth: 7, y0: 788.5, y1: 1147.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'GE Vernova · 2026 财年第二季度',
        meta: {
          title: 'GE Vernova 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleTextLength: 2160,
        },
        annotationsSvg: chartAnnotations(true),
        nodes: {
          power: { label: '电力', notes: ['同比 +14%', '部门利润率 19%', '同比 +2 个百分点'] },
          wind: { label: '风电', notes: ['同比 (10%)', '部门利润率 (14%)', '同比 (6 个百分点)'] },
          electrification: { label: '电气化', notes: ['同比 +68%', '部门利润率 18%', '同比 +4 个百分点'] },
          gross_segment_revenue: { label: '抵销前公司收入' },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 21%', '同比 +1 个百分点'] },
          cost_of_equipment: { label: '设备成本' },
          cost_of_services: { label: '服务成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及管理费用', notes: ['占收入 12%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labelsZh },
      },
    },
  });
})();

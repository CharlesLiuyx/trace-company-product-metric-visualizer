/* ====================================================================
 * Boeing - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/boeing-q4-fy25.png as a fixed
 * d3-sankey layout. The two photographic business-segment tiles are
 * reviewed, whitelisted runtime rasters; all financial geometry and
 * typography remain native SVG.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0030a2';
  const NAVY_LINK = '#8296c8';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#96c896';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const LOGO_BLUE = '#0033a1';
  const TRANSPARENT = 'rgba(0,0,0,0)';

  const boeingLogo = `
    <g data-typography-role="brand">
      <g fill="${LOGO_BLUE}">
        <circle cx="748" cy="368" r="43" fill="none" stroke="${LOGO_BLUE}" stroke-width="6.5"/>
        <path d="M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z"/>
        <path d="M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z"/>
      </g>
      <text x="880" y="391" font-family="Montserrat,Arial,sans-serif" font-size="72" font-weight="800" font-style="italic" textLength="460" lengthAdjust="spacingAndGlyphs" letter-spacing="1" fill="${LOGO_BLUE}">BOEING</text>
    </g>`;

  const card = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="158" rx="26" fill="${NAVY}"/>
      ${lines.map((line, index) => `<text x="${x + width / 2}" y="${y + [50, 92, 128][index]}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${boeingLogo}
      ${card(73, 1177, 446, [
        { text: 'Deliveries', size: 30, weight: 700 },
        { text: '160 commercial airplanes', size: 30, weight: 400 },
        { text: '+181% Y/Y', size: 26, weight: 400 },
      ])}
      ${card(531, 1177, 240, [
        { text: 'Backlog', size: 30, weight: 700 },
        { text: '$682B', size: 30, weight: 400 },
        { text: '+40% Y/Y', size: 26, weight: 400 },
      ])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${boeingLogo}
      ${card(73, 1177, 446, [
        { text: '交付', size: 30, weight: 700 },
        { text: '160 架商用飞机', size: 28, weight: 400 },
        { text: '同比 +181%', size: 26, weight: 400 },
      ])}
      ${card(531, 1177, 240, [
        { text: '订单储备', size: 30, weight: 700 },
        { text: '$682B', size: 30, weight: 400 },
        { text: '同比 +40%', size: 26, weight: 400 },
      ])}
    </g>`;

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, lineGap = 8, anchor = 'middle') => ({ x, top, anchor, lineGap, lines });
  const labels = (t) => ({
    commercial_airplanes: { blocks: [
      block(470, 366, [line('$value', 40), line(t.commercialYy, 25, 400, NOTE)]),
      block(254, 480, [line(t.commercial[0], 35, 800), line(t.commercial[1], 35, 800)]),
      block(252, 587, [line(t.commercialMargin, 25, 400, NOTE)]),
    ] },
    defense: { blocks: [
      block(465, 694, [line('$value', 40), line(t.defenseYy, 25, 400, NOTE)]),
      block(250, 787, [line(t.defense[0], 35, 800), line(t.defense[1], 35, 800)]),
      block(250, 887, [line(t.defenseMargin, 25, 400, NOTE)]),
    ] },
    global_services: { blocks: [
      block(459, 953, [line('$value', 40), line(t.servicesYy, 25, 400, NOTE)]),
      block(248, 1032, [line(t.services, 35, 800)]),
      block(249, 1090, [line(t.servicesMargin, 25, 400, NOTE)]),
    ] },
    unallocated: { blocks: [block(1214, 1196, [line(t.unallocated, 35, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)])] },
    revenue: { blocks: [block(1209, 550, [line(t.revenue, 35, 800), line('$value', 40), line(t.revenueYy, 25, 400, NOTE)])] },
    gross_profit: { blocks: [block(1591, 431, [line(t.gross, 35, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.grossMargin, 25, 400, NOTE), line(t.grossYy, 25, 400, NOTE)])] },
    cost_of_sales: { blocks: [block(1591, 1139, [line(t.cost, 35, 800, RED_LABEL), line('$value', 40, 400, RED_LABEL)])] },
    gains_disposition: { blocks: [block(1811, 229, [line(t.gains[0], 35, 800, GREEN_LABEL), line(t.gains[1], 35, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL)])] },
    operating_profit: { blocks: [] },
    operating_expenses: { blocks: [] },
    other_income: { blocks: [block(2226, 534, [line(t.other, 30, 800, GREEN_LABEL), line('$value', 33, 400, GREEN_LABEL)])] },
    net_income: { blocks: [block(2500, 316, [line(t.net, 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line(t.netMargin, 28, 400, NOTE), line(t.netYy, 28, 400, NOTE)])] },
    ga: { blocks: [block(2490, 620, [line(t.ga, 30, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)])] },
    rnd: { blocks: [block(2490, 770, [line(t.rnd, 30, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)])] },
    interest: { blocks: [block(2490, 914, [line(t.interest, 30, 800, RED_LABEL), line('$value', 33, 400, RED_LABEL)])] },
    seg_hub: { blocks: [] },
  });

  const enLabels = labels({
    commercial: ['Commercial', 'Airplanes'], commercialYy: '+139% Y/Y', commercialMargin: '(6%) segment margin',
    defense: ['Defense, Space', '& Security'], defenseYy: '+37% Y/Y', defenseMargin: '(7%) segment margin',
    services: 'Global Services', servicesYy: '+2% Y/Y', servicesMargin: '202% segment margin',
    unallocated: 'Unallocated', revenue: 'Revenue', revenueYy: '+57% Y/Y', gross: 'Gross profit', grossMargin: '8% margin', grossYy: '+18pp Y/Y',
    cost: 'Cost of sales', gains: ['Gains on', 'disposition'], other: 'Other', net: 'Net income', netMargin: '35% margin', netYy: '+62pp Y/Y',
    ga: 'G&A', rnd: 'R&D', interest: 'Interest',
  });
  const zhLabels = labels({
    commercial: ['商用', '飞机'], commercialYy: '同比 +139%', commercialMargin: '分部利润率 (6%)',
    defense: ['国防、太空', '与安全'], defenseYy: '同比 +37%', defenseMargin: '分部利润率 (7%)',
    services: '全球服务', servicesYy: '同比 +2%', servicesMargin: '分部利润率 202%',
    unallocated: '未分配项', revenue: '收入', revenueYy: '同比 +57%', gross: '毛利润', grossMargin: '利润率 8%', grossYy: '同比 +18 个百分点',
    cost: '销售成本', gains: ['处置', '收益'], other: '其他', net: '净利润', netMargin: '利润率 35%', netYy: '同比 +62 个百分点',
    ga: '管理费用', rnd: '研发', interest: '利息',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'boeing-q4-fy25',
    name: 'Boeing · Q4 FY25',
    company: 'Boeing',
    meta: {
      company: 'Boeing',
      title: 'Boeing Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/boeing-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1337,
      titleY: 200,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2137,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      { key: 'boeing-q4-737-tile', href: 'data/assets/raster-annotations/boeing/boeing-q4-commercial-airplanes-737.png', x: 99, y: 368, width: 291, height: 97 },
      { key: 'boeing-q4-starliner-tile', href: 'data/assets/raster-annotations/boeing/boeing-q4-defense-starliner.png', x: 197, y: 657, width: 136, height: 129 },
    ],
    layout: {
      scale: 14.8,
      nodes: {
        commercial_airplanes: { x: 430, y: 456, width: 72, height: 169 },
        defense: { x: 430, y: 782, width: 72, height: 110 },
        global_services: { x: 430, y: 1039, width: 72, height: 77 },
        seg_hub: { x: 806, y: 615, width: 72, height: 356 },
        revenue: { x: 1178, y: 690, width: 72, height: 354 },
        unallocated: { x: 1178, y: 1182, width: 72, height: 2 },
        gross_profit: { x: 1552, y: 610, width: 72, height: 27 },
        cost_of_sales: { x: 1552, y: 789, width: 72, height: 327 },
        gains_disposition: { x: 1775, y: 372, width: 72, height: 142 },
        operating_profit: { x: 1926, y: 404, width: 72, height: 170 },
        operating_expenses: { x: 1926, y: 650, width: 72, height: 40 },
        net_income: { x: 2300, y: 315, width: 72, height: 127 },
        other_income: { x: 2192, y: 508, width: 72, height: 3 },
        ga: { x: 2300, y: 648, width: 72, height: 25 },
        rnd: { x: 2300, y: 795, width: 72, height: 15 },
        interest: { x: 2300, y: 941, width: 72, height: 10 },
      },
      labels: enLabels,
    },
    nodes: [
      { id: 'commercial_airplanes', col: 0, order: 0, type: 'source', label: ['Commercial', 'Airplanes'], value: 11.4, notes: ['+139% Y/Y', '(6%) segment margin'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'defense', col: 0, order: 1, type: 'source', label: ['Defense, Space', '& Security'], value: 7.4, notes: ['+37% Y/Y', '(7%) segment margin'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'global_services', col: 0, order: 2, type: 'source', label: 'Global Services', value: 5.2, notes: ['+2% Y/Y', '202% segment margin'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'seg_hub', col: 1, order: 0, type: 'hub', label: '', value: 24.0, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 23.9, notes: ['+57% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'unallocated', col: 2, order: 1, type: 'cost', label: 'Unallocated', value: -0.1, valueText: '($0.1B)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 1.8, notes: ['8% margin', '+18pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 22.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gains_disposition', col: 4, order: 0, type: 'profit', label: ['Gains on', 'disposition'], value: 9.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: '', value: 8.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      // The reference has no aggregate operating-expense face. This transparent
      // semantic anchor preserves the SSOT total; G&A/R&D visibly branch from
      // the source's green earnings hub above.
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: '', value: 2.7, color: TRANSPARENT, labelColor: TRANSPARENT, linkTint: TRANSPARENT },
      { id: 'net_income', col: 6, order: 0, type: 'profit', label: 'Net income', value: 8.3, notes: ['35% margin', '+62pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_income', col: 6, order: 1, type: 'profit', label: 'Other', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'ga', col: 6, order: 2, type: 'cost', label: 'G&A', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 6, order: 4, type: 'cost', label: 'Interest', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'commercial_airplanes', target: 'seg_hub', value: 11.4, width: 169, sourceOrder: 0, targetOrder: 0 },
      { source: 'defense', target: 'seg_hub', value: 7.4, width: 110, sourceOrder: 0, targetOrder: 1 },
      { source: 'global_services', target: 'seg_hub', value: 5.2, width: 77, sourceOrder: 0, targetOrder: 2 },
      { source: 'seg_hub', target: 'revenue', value: 23.9, width: 354, sourceOrder: 0, targetOrder: 0 },
      { source: 'seg_hub', target: 'unallocated', value: 0.1, width: 2, sourceOrder: 1, targetOrder: 0, y0: 970, y1: 1183, curve: { c1x: 970, c1y: 970, c2x: 1080, c2y: 1183 }, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 1.8, width: 27, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 22.1, width: 327, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, width: 27, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'gains_disposition', target: 'operating_profit', value: 9.6, width: 142, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_income', value: 8.1, width: 120, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'other_income', target: 'net_income', value: 0.2, sourceWidth: 3, targetWidth: 7, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'ga', value: 1.7, width: 25, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'rnd', value: 1.0, width: 15, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'interest', value: 0.7, width: 10, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '波音 · 2025 财年第四季度',
        meta: { title: '波音 2025 财年第四季度利润表', period: '', periodNote: '', titleTextLength: 1560 },
        nodes: {
          commercial_airplanes: { label: ['商用', '飞机'], notes: ['同比 +139%', '分部利润率 (6%)'] },
          defense: { label: ['国防、太空', '与安全'], notes: ['同比 +37%', '分部利润率 (7%)'] },
          global_services: { label: '全球服务', notes: ['同比 +2%', '分部利润率 202%'] },
          unallocated: { label: '未分配项' }, revenue: { label: '收入', notes: ['同比 +57%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 8%', '同比 +18 个百分点'] }, cost_of_sales: { label: '销售成本' },
          gains_disposition: { label: ['处置', '收益'] }, operating_profit: { label: '' }, operating_expenses: { label: '' },
          net_income: { label: '净利润', notes: ['利润率 35%', '同比 +62 个百分点'] }, other_income: { label: '其他' },
          ga: { label: '管理费用' }, rnd: { label: '研发' }, interest: { label: '利息' },
        },
        annotationsSvg: annotationsZh,
        layout: { labels: zhLabels },
      },
    },
  });
})();

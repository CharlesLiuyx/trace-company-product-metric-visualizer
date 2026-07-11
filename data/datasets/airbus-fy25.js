/* Airbus FY25 income statement (EUR B), measured from the processed reference. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const NAVY = '#00357a';
  const NAVY_LINK = '#859dbc';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2506;

  const cards = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="72" y="1165" width="448" height="160" rx="30" fill="${NAVY}"/>
      <text x="296" y="1217" text-anchor="middle" font-size="36" font-weight="800" fill="#ffffff">${zh ? '交付' : 'Deliveries'}</text>
      <text x="296" y="1258" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '793 架商用飞机' : '793 commercial airplanes'}</text>
      <text x="296" y="1300" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '同比 +4%' : '+4% Y/Y'}</text>
      <rect x="530" y="1165" width="243" height="160" rx="30" fill="${NAVY}"/>
      <text x="651.5" y="1217" text-anchor="middle" font-size="36" font-weight="800" fill="#ffffff">${zh ? '积压订单' : 'Backlog'}</text>
      <text x="651.5" y="1258" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '8,754 架飞机' : '8,754 aircrafts'}</text>
      <text x="651.5" y="1300" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '同比 +1%' : '+1% Y/Y'}</text>
    </g>`;

  const interestCallout = (zh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="interest" data-link-numerator="interest" data-link-denominator="net_profit" data-link-anchor-x="2248" data-link-anchor-y="315">
        <path d="M2195 315H2266C2282 315 2284 353 2300 353" fill="none" stroke="${GREEN_LINK}" stroke-width="3" stroke-linecap="butt"/>
        <rect x="2188" y="224" width="115" height="104" fill="transparent" pointer-events="all"/>
      </g>
    </g>`;

  const annotations = (zh) => `${cards(zh)}${interestCallout(zh)}`;
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    lines,
  });
  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });

  const labels = (zh) => {
    const t = zh ? {
      airbus: '空中客车', helicopters: '直升机', defense: '防务与航天', revenue: '收入', gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['营业', '费用'], other: '其他', interest: '利息', net: '净利润', tax: '税费', rnd: '研发', administrative: '行政', selling: '销售', inter: '分部间抵销',
      yoy4: '同比 +4%', yoy13: '同比 +13%', yoy11: '同比 +11%', yoy6: '同比 +6%', margin9: '9% EBIT 利润率', margin11: '11% EBIT 利润率', margin5: '5% EBIT 利润率', margin15: '利润率 15%', margin7: '利润率 7%', pp0: '同比 (0 个百分点)', pp0plus: '同比 +0 个百分点', pp1: '同比 +1 个百分点', rev4: '占收入 4%', rev2: '占收入 2%', rev1: '占收入 1%',
    } : {
      airbus: 'Airbus', helicopters: 'Helicopters', defense: 'Defense & Space', revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit', expenses: ['Operating', 'expenses'], other: 'Other', interest: 'Interest', net: 'Net profit', tax: 'Tax', rnd: 'R&D', administrative: 'Administrative', selling: 'Selling', inter: 'Inter-segment',
      yoy4: '+4% Y/Y', yoy13: '+13% Y/Y', yoy11: '+11% Y/Y', yoy6: '+6% Y/Y', margin9: '9% EBIT margin', margin11: '11% EBIT margin', margin5: '5% EBIT margin', margin15: '15% margin', margin7: '7% margin', pp0: '(0pp) Y/Y', pp0plus: '+0pp Y/Y', pp1: '+1pp Y/Y', rev4: '4% of revenue', rev2: '2% of revenue', rev1: '1% of revenue',
    };
    const value = (size = 42) => line('$value', size);
    const name = (text, size = 44, color) => line(text, size, { weight: 800, color });
    const note = (text, size = 30) => line(text, size, { color: NOTE });
    return {
      airbus_segment: { blocks: [
        block(467.5, 310, [value(44), note(t.yoy4)], { lineGap: 9 }),
        block(250, 518, [name(t.airbus, 46)]),
        block(258, 574, [note(t.margin9)]),
      ] },
      helicopters: { blocks: [
        block(467.5, 716, [value(44), note(t.yoy13)], { lineGap: 9 }),
        block(258, 832, [name(t.helicopters, 46)]),
        block(258, 888, [note(t.margin11)]),
      ] },
      defense_space: { blocks: [
        block(467.5, 912, [value(44), note(t.yoy11)], { lineGap: 9 }),
        block(250, 1015, [name(t.defense, 40)]),
        block(258, 1071, [note(t.margin5)]),
      ] },
      revenue_gross: { blocks: [] },
      inter_segment: { blocks: [block(1215, 1097, [name(t.inter, 38, RED_LABEL), value(36)], { lineGap: 8 })] },
      revenue: { blocks: [block(1215, 494, [name(t.revenue, 46), value(44), note(t.yoy6)], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1588.5, 364, [name(t.gross, 44, GREEN_LABEL), value(42), note(t.margin15), note(t.pp0)], { lineGap: 8 })] },
      cost_of_sales: { blocks: [block(1588.5, 1072, [name(t.cost, 44, RED_LABEL), value(42)], { lineGap: 8 })] },
      operating_profit: { blocks: [block(1962.5, 270, [name(t.operating, 44, GREEN_LABEL), value(42), note(t.margin7), note(t.pp0plus)], { lineGap: 8 })] },
      operating_expenses: { blocks: [block(1962.5, 717, [...t.expenses.map((part) => name(part, 44, RED_LABEL)), value(42)], { lineGap: 8 })] },
      other_income: { blocks: [block(2230, 432, [name(t.other, 38, GREEN_LABEL), value(36)], { lineGap: 8 })] },
      interest: { blocks: [block(2230, 222, [name(t.interest, 33, GREEN_LABEL), line('$value', 31, { color: GREEN_LABEL })], { lineGap: 7 })] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 309, [name(t.net, 44, GREEN_LABEL), value(42), note(t.margin7), note(t.pp1)], { lineGap: 8 })] },
      tax: { blocks: [block(RIGHT_LABEL_X, 546, [name(t.tax, 36, RED_LABEL), value(36)], { lineGap: 8 })] },
      rnd: { blocks: [block(RIGHT_LABEL_X, 726, [name(t.rnd, 36, RED_LABEL), value(38), note(t.rev4), note(t.pp0)], { lineGap: 8 })] },
      administrative: { blocks: [block(RIGHT_LABEL_X, 921, [name(t.administrative, zh ? 36 : 31, RED_LABEL), value(38), note(t.rev2), note(t.pp0)], { lineGap: 8 })] },
      selling: { blocks: [block(RIGHT_LABEL_X, 1104, [name(t.selling, 36, RED_LABEL), value(38), note(t.rev1), note(t.pp0)], { lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'airbus-fy25',
    name: 'Airbus · FY25',
    company: 'Airbus',
    meta: {
      company: 'Airbus',
      title: 'Airbus FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/airbus-fy25.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 1935,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
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
      type: { name: 44, value: 42, note: 30, lineGap: 9 },
      allowRasterAnnotations: true,
    },
    annotationsSvg: annotations(false),
    rasterAnnotations: [
      { key: 'airbus-a380-fy25-tile', href: 'data/assets/raster-annotations/airbus/commercial-aircraft-a380-fy25.png', x: 6, y: 378, width: 402, height: 142 },
      { key: 'airbus-h160-tile', href: 'data/assets/raster-annotations/airbus/helicopters-h160.png', x: 28, y: 671, width: 364, height: 134 },
      { key: 'airbus-satellite-fy25-tile', href: 'data/assets/raster-annotations/airbus/defense-space-satellite-fy25.png', x: 180, y: 944, width: 178, height: 70 },
      { key: 'airbus-wordmark', href: 'data/assets/raster-annotations/airbus/company-wordmark.png', x: 711, y: 287, width: 560, height: 125 },
    ],
    layout: {
      scale: 1,
      nodes: {
        airbus_segment: { x: 432, y: 409, width: 71, height: 235 },
        helicopters: { x: 432, y: 817, width: 71, height: 39 },
        defense_space: { x: 432, y: 1007, width: 71, height: 58 },
        revenue_gross: { x: 806, y: 553, width: 70, height: 335 },
        revenue: { x: 1180, y: 649, width: 70, height: 328 },
        inter_segment: { x: 1180, y: 1082, width: 70, height: 4 },
        gross_profit: { x: 1553, y: 558, width: 71, height: 48 },
        cost_of_sales: { x: 1553, y: 773, width: 71, height: 279 },
        operating_profit: { x: 1927, y: 477, width: 71, height: 21 },
        operating_expenses: { x: 1927, y: 681, width: 71, height: 23 },
        other_income: { x: 2195, y: 420, width: 70, height: 2 },
        interest: { x: 0, y: 0, width: 0, height: 0 },
        net_profit: { x: 2300, y: 353, width: 71, height: 20 },
        tax: { x: 2300, y: 586, width: 71, height: 5 },
        rnd: { x: 2300, y: 771, width: 71, height: 12 },
        administrative: { x: 2300, y: 966, width: 71, height: 6 },
        selling: { x: 2300, y: 1150, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'airbus_segment', col: 0, order: 0, type: 'source', label: 'Airbus', value: 52.6, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'helicopters', col: 0, order: 1, type: 'source', label: 'Helicopters', value: 9.0, valueText: '€9.0B', color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'defense_space', col: 0, order: 2, type: 'source', label: 'Defense & Space', value: 13.4, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue_gross', col: 1, order: 0, type: 'hub', label: '', value: 75.0, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 73.4, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'inter_segment', col: 2, order: 1, type: 'cost', label: 'Inter-segment', value: -1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 11.0, valueText: '€11.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 62.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 5.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'profit', label: 'Interest', value: 0.2, color: BG, labelColor: BG, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 2, type: 'profit', label: 'Net profit', value: 5.0, valueText: '€5.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 3, type: 'cost', label: 'Tax', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 3.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'administrative', col: 5, order: 5, type: 'cost', label: 'Administrative', value: 1.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling', col: 5, order: 6, type: 'cost', label: 'Selling', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'airbus_segment', target: 'revenue_gross', value: 52.6, sourceWidth: 235, targetWidth: 235, y0: 526.5, y1: 670.5, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'helicopters', target: 'revenue_gross', value: 9.0, sourceWidth: 39, targetWidth: 39, y0: 836.5, y1: 807.5, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'defense_space', target: 'revenue_gross', value: 13.4, sourceWidth: 58, targetWidth: 61, y0: 1036, y1: 857.5, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'revenue_gross', target: 'revenue', value: 73.4, sourceWidth: 328, targetWidth: 328, y0: 717, y1: 813, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue_gross', target: 'inter_segment', value: 1.5, sourceWidth: 7, targetWidth: 4, y0: 884.5, y1: 1084, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 11.0, sourceWidth: 48, targetWidth: 48, y0: 673, y1: 582, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 62.5, sourceWidth: 280, targetWidth: 279, y0: 837, y1: 912.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 5.2, sourceWidth: 21, targetWidth: 21, y0: 568.5, y1: 487.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.7, sourceWidth: 27, targetWidth: 23, y0: 592.5, y1: 692.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 5.0, sourceWidth: 20, targetWidth: 20, y0: 487, y1: 363, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.4, sourceWidth: 5, targetWidth: 5, y0: 495.5, y1: 588.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.9, sourceWidth: 2, targetWidth: 4, y0: 421, y1: 371, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK, curve: { c1x: 2276, c1y: 421, c2x: 2288, c2y: 371 } },
      { source: 'interest', target: 'net_profit', value: 0.2, sourceWidth: 0, targetWidth: 0, y0: 315, y1: 353, targetOrder: 1, interactionOnly: true, curve: { x0: 2195, x1: 2300, c1x: 2266, c1y: 315, c2x: 2284, c2y: 353 } },
      { source: 'operating_expenses', target: 'rnd', value: 3.2, sourceWidth: 12, targetWidth: 12, y0: 687, y1: 777, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'administrative', value: 1.7, sourceWidth: 6, targetWidth: 6, y0: 696, y1: 969, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling', value: 0.9, sourceWidth: 5, targetWidth: 1, y0: 701.5, y1: 1150.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '空中客车 · 2025 财年',
        meta: { title: '空中客车 2025 财年利润表', titleTextLength: 1740 },
        nodes: {
          airbus_segment: { label: '空中客车' }, helicopters: { label: '直升机' }, defense_space: { label: '防务与航天' }, revenue_gross: { label: '' }, revenue: { label: '收入' }, inter_segment: { label: '分部间抵销' }, gross_profit: { label: '毛利润' }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润' }, operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他' }, interest: { label: '利息' }, net_profit: { label: '净利润' }, tax: { label: '税费' }, rnd: { label: '研发' }, administrative: { label: '行政' }, selling: { label: '销售' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();

/* Airbus Q2 FY26 income statement (EUR B), measured from the processed reference. */
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
      <rect x="73" y="1177" width="447" height="159" rx="30" fill="${NAVY}"/>
      <text x="296.5" y="1229" text-anchor="middle" font-size="36" font-weight="800" fill="#ffffff">${zh ? '上半年交付' : 'H1 Deliveries'}</text>
      <text x="296.5" y="1270" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '351 架商用飞机' : '351 commercial airplanes'}</text>
      <text x="296.5" y="1312" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '同比 +15%' : '+15% Y/Y'}</text>
      <rect x="531" y="1177" width="241" height="159" rx="30" fill="${NAVY}"/>
      <text x="651.5" y="1229" text-anchor="middle" font-size="36" font-weight="800" fill="#ffffff">${zh ? '积压订单' : 'Backlog'}</text>
      <text x="651.5" y="1270" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '9,222 架飞机' : '9,222 aircrafts'}</text>
      <text x="651.5" y="1312" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">${zh ? '同比 +5%' : '+5% Y/Y'}</text>
    </g>`;
  const annotations = (zh) => cards(zh);
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
      airbus: '空中客车', helicopters: '直升机', defense: '防务与航天', revenue: '收入', gross: '毛利润', cost: '销售成本', operating: '营业利润', expenses: ['营业', '费用'], other: '其他', net: '净利润', tax: '税费', rnd: '研发', administrative: '行政', selling: '销售', inter: '分部间抵销',
      yoy37: '同比 +37%', yoy1down: '同比 (1%)', yoy10: '同比 +10%', yoy28: '同比 +28%', margin9: '分部利润率 9%', margin7segment: '分部利润率 7%', margin16down: '分部利润率 (16%)', margin18: '利润率 18%', margin12: '利润率 12%', margin8: '利润率 8%', pp4: '同比 +4 个百分点', pp5: '同比 +5 个百分点', pp1down: '同比 (1 个百分点)', pp0: '同比 (0 个百分点)', rev4: '占收入 4%', rev2: '占收入 2%', rev1: '占收入 1%',
    } : {
      airbus: 'Airbus', helicopters: 'Helicopters', defense: 'Defense & Space', revenue: 'Revenue', gross: 'Gross profit', cost: 'Cost of sales', operating: 'Operating profit', expenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', tax: 'Tax', rnd: 'R&D', administrative: 'Administrative', selling: 'Selling', inter: 'Inter-segment',
      yoy37: '+37% Y/Y', yoy1down: '(1%) Y/Y', yoy10: '+10% Y/Y', yoy28: '+28% Y/Y', margin9: '9% segment margin', margin7segment: '7% segment margin', margin16down: '(16%) segment margin', margin18: '18% margin', margin12: '12% margin', margin8: '8% margin', pp4: '+4pp Y/Y', pp5: '+5pp Y/Y', pp1down: '(1pp) Y/Y', pp0: '(0pp) Y/Y', rev4: '4% of revenue', rev2: '2% of revenue', rev1: '1% of revenue',
    };
    const value = (size = 42) => line('$value', size);
    const name = (text, size = 44, color) => line(text, size, { weight: 800, color });
    const note = (text, size = 30) => line(text, size, { color: NOTE });
    return {
      airbus_segment: { blocks: [
        block(467.5, 311, [value(44), note(t.yoy37)], { lineGap: 9 }),
        block(250, 538, [name(t.airbus, 46), note(t.margin9)], { lineGap: 10 }),
      ] },
      helicopters: { blocks: [
        block(467.5, 714, [value(44), note(t.yoy1down)], { lineGap: 9 }),
        block(258, 780, [name(t.helicopters, 46), note(t.margin7segment)], { lineGap: 10 }),
      ] },
      defense_space: { blocks: [
        block(467.5, 881, [value(44), note(t.yoy10)], { lineGap: 9 }),
        block(250, 979, [name(t.defense, 40), note(t.margin16down)], { lineGap: 16 }),
      ] },
      revenue_gross: { blocks: [] },
      inter_segment: { blocks: [block(1215, 1105, [name(t.inter, 38, RED_LABEL), value(36)], { lineGap: 8 })] },
      revenue: { blocks: [block(1215, 467, [name(t.revenue, 46), value(44), note(t.yoy28)], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1588.5, 351, [name(t.gross, 44, GREEN_LABEL), value(42), note(t.margin18), note(t.pp4)], { lineGap: 8 })] },
      cost_of_sales: { blocks: [block(1588.5, 1072, [name(t.cost, 44, RED_LABEL), value(42)], { lineGap: 8 })] },
      operating_profit: { blocks: [block(1962.5, 261, [name(t.operating, 44, GREEN_LABEL), value(42), note(t.margin12), note(t.pp5)], { lineGap: 8 })] },
      operating_expenses: { blocks: [block(1962.5, 711, [...t.expenses.map((part) => name(part, 44, RED_LABEL)), value(42)], { lineGap: 8 })] },
      other_income: { blocks: [block(1771, 725, [name(t.other, 38, GREEN_LABEL), value(36)], { lineGap: 8 })] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 315, [name(t.net, 44, GREEN_LABEL), value(42), note(t.margin8), note(t.pp4)], { lineGap: 8 })] },
      tax: { blocks: [block(RIGHT_LABEL_X, 514, [name(t.tax, 36, RED_LABEL), value(36)], { lineGap: 8 })] },
      other_expense: { blocks: [block(RIGHT_LABEL_X, 604, [name(t.other, 36, RED_LABEL), value(36)], { lineGap: 8 })] },
      rnd: { blocks: [block(RIGHT_LABEL_X, 751, [name(t.rnd, 36, RED_LABEL), value(38), note(t.rev4), note(t.pp1down)], { lineGap: 8 })] },
      administrative: { blocks: [block(RIGHT_LABEL_X, 935, [name(t.administrative, zh ? 36 : 31, RED_LABEL), value(38), note(t.rev2), note(t.pp0)], { lineGap: 8 })] },
      selling: { blocks: [block(RIGHT_LABEL_X, 1124, [name(t.selling, 36, RED_LABEL), value(38), note(t.rev1), note(t.pp0)], { lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'airbus-q2-fy26',
    name: 'Airbus · Q2 FY26',
    company: 'Airbus',
    meta: {
      company: 'Airbus',
      title: 'Airbus Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/airbus-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1333.5,
      titleY: 198,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 2130,
      hidePeriodStamp: true,
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
      { key: 'airbus-a380-q2-fy26-tile', href: 'data/assets/raster-annotations/airbus/commercial-aircraft-a380-q2-fy26.png', x: 6, y: 384, width: 402, height: 145 },
      { key: 'airbus-h160-tile', href: 'data/assets/raster-annotations/airbus/helicopters-h160.png', x: 28, y: 631, width: 364, height: 134 },
      { key: 'airbus-satellite-tile', href: 'data/assets/raster-annotations/airbus/defense-space-satellite.png', x: 180, y: 872, width: 178, height: 95 },
      { key: 'airbus-wordmark', href: 'data/assets/raster-annotations/airbus/company-wordmark.png', x: 711, y: 287, width: 560, height: 125 },
    ],
    layout: {
      scale: 1,
      nodes: {
        airbus_segment: { x: 432, y: 406, width: 71, height: 246 },
        helicopters: { x: 432, y: 808, width: 71, height: 31 },
        defense_space: { x: 432, y: 978, width: 71, height: 54 },
        revenue_gross: { x: 806, y: 534, width: 70, height: 334 },
        revenue: { x: 1180, y: 622, width: 70, height: 326 },
        inter_segment: { x: 1180, y: 1078, width: 70, height: 5 },
        gross_profit: { x: 1553, y: 533, width: 71, height: 59 },
        cost_of_sales: { x: 1553, y: 788, width: 71, height: 266 },
        operating_profit: { x: 1927, y: 443, width: 71, height: 37 },
        operating_expenses: { x: 1927, y: 662, width: 71, height: 21 },
        other_income: { x: 1736, y: 714, width: 70, height: 1 },
        net_profit: { x: 2300, y: 343, width: 71, height: 23 },
        tax: { x: 2300, y: 549, width: 71, height: 8 },
        other_expense: { x: 2300, y: 645, width: 71, height: 3 },
        rnd: { x: 2300, y: 787, width: 71, height: 8 },
        administrative: { x: 2300, y: 986, width: 71, height: 5 },
        selling: { x: 2300, y: 1171, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'airbus_segment', col: 0, order: 0, type: 'source', label: 'Airbus', value: 15.4, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'helicopters', col: 0, order: 1, type: 'source', label: 'Helicopters', value: 2.1, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'defense_space', col: 0, order: 2, type: 'source', label: 'Defense & Space', value: 3.5, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue_gross', col: 1, order: 0, type: 'hub', label: '', value: 21.0, valueText: '€21.0B', color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 20.5, color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'inter_segment', col: 2, order: 1, type: 'cost', label: 'Inter-segment', value: -0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 16.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 2, type: 'profit', label: 'Other', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'administrative', col: 5, order: 4, type: 'cost', label: 'Administrative', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'selling', col: 5, order: 5, type: 'cost', label: 'Selling', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'airbus_segment', target: 'revenue_gross', value: 15.4, sourceWidth: 246, targetWidth: 247, y0: 529, y1: 657.5, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'helicopters', target: 'revenue_gross', value: 2.1, sourceWidth: 31, targetWidth: 32, y0: 823.5, y1: 797, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'defense_space', target: 'revenue_gross', value: 3.5, sourceWidth: 54, targetWidth: 55, y0: 1005, y1: 840.5, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'revenue_gross', target: 'revenue', value: 20.5, sourceWidth: 327, targetWidth: 326, y0: 697.5, y1: 785, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'revenue_gross', target: 'inter_segment', value: 0.5, sourceWidth: 6, targetWidth: 5, y0: 865, y1: 1080.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'revenue', target: 'gross_profit', value: 3.8, sourceWidth: 59, targetWidth: 59, y0: 651.5, y1: 562.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 16.7, sourceWidth: 267, targetWidth: 266, y0: 814.5, y1: 921, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.5, sourceWidth: 40, targetWidth: 37, y0: 553, y1: 461.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.5, sourceWidth: 19, targetWidth: 18, y0: 582.5, y1: 671, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'operating_expenses', value: 0.2, sourceWidth: 1, targetWidth: 3, y0: 714.5, y1: 681.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 24, targetWidth: 23, y0: 455, y1: 354.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 8, targetWidth: 8, y0: 472, y1: 553, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, sourceWidth: 3, targetWidth: 3, y0: 478.5, y1: 646.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, sourceWidth: 10, targetWidth: 8, y0: 667, y1: 791, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'administrative', value: 0.5, sourceWidth: 7, targetWidth: 5, y0: 676.5, y1: 988.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'selling', value: 0.2, sourceWidth: 2, targetWidth: 1, y0: 682, y1: 1171.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Airbus · 2026 财年第二季度',
        meta: { title: 'Airbus 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 1900 },
        nodes: {
          airbus_segment: { label: '空中客车' }, helicopters: { label: '直升机' }, defense_space: { label: '防务与航天' }, revenue_gross: { label: '' }, revenue: { label: '收入' }, inter_segment: { label: '分部间抵销' }, gross_profit: { label: '毛利润' }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润' }, operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他' }, net_profit: { label: '净利润' }, tax: { label: '税费' }, other_expense: { label: '其他' }, rnd: { label: '研发' }, administrative: { label: '行政' }, selling: { label: '销售' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: annotations(true),
      },
    },
  });
})();

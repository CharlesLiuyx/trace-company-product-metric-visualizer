/* Intuitive — Q2 FY26 income statement ($M), reconstructed object-by-object
 * from the measured processing reference. The validated wordmark and two
 * photographic business clusters are reused from the accepted Intuitive
 * asset set; the Sankey, labels, and connectors are native SVG. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GREY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2415;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const labels = (zh) => {
    const text = zh ? {
      instruments: ['器械与', '配件'], systems: '系统', services: '服务', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['营业', '费用'], other: '其他', net: '净利润', tax: '税费', sga: ['销售、一般及', '行政费用'], rnd: '研发', product: '产品', service: '服务',
      yoy18: '同比 +18%', yoy19: '同比 +19%', yoy2: '同比 +2%', margin68: '利润率 68%', pp1up: '同比 +1 个百分点', margin34: '利润率 34%', pp3up: '同比 +3 个百分点', margin28: '利润率 28%', pp1upNet: '同比 +1 个百分点', rev21: '占收入 21%', pp2down: '同比 (2 个百分点)', rev13: '占收入 13%', pp0: '同比 (0 个百分点)',
    } : {
      instruments: ['Instruments', '& Accessories'], systems: 'Systems', services: 'Services', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', tax: 'Tax', sga: 'SG&A', rnd: 'R&D', product: 'Product', service: 'Service',
      yoy18: '+18% Y/Y', yoy19: '+19% Y/Y', yoy2: '+2% Y/Y', margin68: '68% margin', pp1up: '+1pp Y/Y', margin34: '34% margin', pp3up: '+3pp Y/Y', margin28: '28% margin', pp1upNet: '+1pp Y/Y', rev21: '21% of revenue', pp2down: '(2pp) Y/Y', rev13: '13% of revenue', pp0: '(0pp) Y/Y',
    };
    const source = (valueTop, nameX, nameTop, name, yoy) => ({
      blocks: [
        block(483, valueTop, [line('$value', 39), line(yoy, 29, { color: NOTE })], { lineGap: 9 }),
        block(nameX, nameTop, (Array.isArray(name) ? name : [name]).map((item) => line(item, 40, { weight: 800 })), { lineGap: 7 }),
      ],
    });
    const green = (textValue, size = 40) => line(textValue, size, { weight: 800, color: GREEN_LABEL });
    const red = (textValue, size = 31) => line(textValue, size, { weight: 800, color: RED_LABEL });
    const redValue = () => line('$value', 31, { color: RED_LABEL });
    const note = (textValue) => line(textValue, 29, { color: NOTE });

    return {
      instruments_accessories: source(458, 282, 611, text.instruments, text.yoy18),
      systems: source(831, 330, 946, text.systems, text.yoy19),
      services: source(1071, 333, 1170, text.services, text.yoy2),
      revenue: { blocks: [block(950, 581, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.yoy19, 29, { color: NOTE })], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1418, 421, [green(text.gross), line('$value', 39, { color: GREEN_LABEL }), note(text.margin68), note(text.pp1up)], { lineGap: 12 })] },
      cost_of_revenue: { blocks: [block(1420, 1203, [...text.cost.map((item) => red(item, 36)), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      operating_profit: { blocks: [block(1888, 300, [green(text.operating), line('$value', 39, { color: GREEN_LABEL }), note(text.margin34), note(text.pp3up)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1887, 985, [...text.expenses.map((item) => red(item, 36)), line('$value', 34, { color: RED_LABEL })], { lineGap: 11 })] },
      other_income: { blocks: [block(2208, 564, [green(text.other, 31), line('$value', 29, { color: GREEN_LABEL })], { lineGap: 8 })] },
      net_profit: { blocks: [block(RIGHT_X - 3, 330, [green(text.net), line('$value', 39, { color: GREEN_LABEL }), note(text.margin28), note(text.pp1upNet)], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(2450, 699, [red(text.tax), redValue()], { anchor: 'start', lineGap: 8 })] },
      sga: zh ? {
        blocks: [
          block(2450, 1007, [red(text.sga[0], 30), red(text.sga[1], 30), redValue()], { anchor: 'start', lineGap: 5 }),
          block(2407, 1134, [note(text.rev21), note(text.pp2down)], { anchor: 'start', lineGap: 8 }),
        ],
      } : {
        blocks: [
          block(2450, 1007, [red(text.sga), redValue()], { anchor: 'start', lineGap: 8 }),
          block(2407, 1091, [note(text.rev21), note(text.pp2down)], { anchor: 'start', lineGap: 8 }),
        ],
      },
      rnd: {
        blocks: [
          block(2450, 1229, [red(text.rnd), redValue()], { anchor: 'start', lineGap: 8 }),
          block(2407, 1314, [note(text.rev13), note(text.pp0)], { anchor: 'start', lineGap: 8 }),
        ],
      },
      product: { blocks: [block(1739, 1161, [red(text.product), redValue()], { anchor: 'start', lineGap: 8 })] },
      service: { blocks: [block(1743, 1320, [red(text.service), redValue()], { anchor: 'start', lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intuitive-q2-fy26',
    name: 'Intuitive · Q2 FY26',
    company: 'Intuitive',
    meta: {
      company: 'Intuitive',
      title: 'Intuitive Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/intuitive-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GREY_LINK, hub: GREY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    rasterAnnotations: [
      { key: 'intuitive-company-wordmark', href: 'data/assets/raster-annotations/intuitive/intuitive-company-wordmark.png', x: 670, y: 275, width: 550, height: 175 },
      { key: 'intuitive-instruments-accessories-cluster', href: 'data/assets/raster-annotations/intuitive/intuitive-instruments-accessories-cluster.png', x: 0, y: 535, width: 150, height: 145 },
      { key: 'intuitive-systems-cluster', href: 'data/assets/raster-annotations/intuitive/intuitive-systems-cluster.png', x: 0, y: 820, width: 230, height: 250 },
    ],
    layout: {
      scale: 1,
      nodes: {
        instruments_accessories: { x: 448, y: 558, width: 71, height: 200 },
        systems: { x: 448, y: 931, width: 71, height: 77 },
        services: { x: 448, y: 1170, width: 71, height: 52 },
        revenue: { x: 915, y: 728, width: 70, height: 335 },
        gross_profit: { x: 1382, y: 612, width: 71, height: 226 },
        cost_of_revenue: { x: 1382, y: 1077, width: 71, height: 108 },
        operating_profit: { x: 1850, y: 490, width: 70, height: 112 },
        operating_expenses: { x: 1850, y: 857, width: 70, height: 112 },
        other_income: { x: 2172, y: 527, width: 70, height: 7 },
        net_profit: { x: 2316, y: 348, width: 71, height: 94 },
        tax: { x: 2316, y: 726, width: 71, height: 25 },
        sga: { x: 2316, y: 1006, width: 71, height: 70 },
        rnd: { x: 2316, y: 1241, width: 71, height: 41 },
        product: { x: 1607, y: 1158, width: 70, height: 89 },
        service: { x: 1610, y: 1350, width: 70, height: 16 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'instruments_accessories', col: 0, order: 0, type: 'source', label: ['Instruments', '& Accessories'], value: 1735, valueText: '$1,735M', notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'systems', col: 0, order: 1, type: 'source', label: 'Systems', value: 685, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'services', col: 0, order: 2, type: 'source', label: 'Services', value: 472, notes: ['+2% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2892, valueText: '$2,892M', notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1960, valueText: '$1,960M', notes: ['68% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 932, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 972, notes: ['34% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 989, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 83, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 823, notes: ['28% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 231, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 618, notes: ['21% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 371, notes: ['13% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 4, order: 1, type: 'cost', label: 'Product', value: 777, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'service', col: 4, order: 2, type: 'cost', label: 'Service', value: 155, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'instruments_accessories', target: 'revenue', value: 1735, sourceWidth: 200, targetWidth: 200, y0: 658, y1: 828, sourceOrder: 0, targetOrder: 0 },
      { source: 'systems', target: 'revenue', value: 685, sourceWidth: 77, targetWidth: 77, y0: 969.5, y1: 966.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 472, sourceWidth: 52, targetWidth: 58, y0: 1196, y1: 1034, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1960, sourceWidth: 226, targetWidth: 226, y0: 841, y1: 725, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 932, sourceWidth: 109, targetWidth: 108, y0: 1008.5, y1: 1131, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 972, sourceWidth: 112, targetWidth: 112, y0: 668, y1: 546, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 989, sourceWidth: 114, targetWidth: 112, y0: 781, y1: 913, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 823, sourceWidth: 87, targetWidth: 86, y0: 533.5, y1: 391, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 231, sourceWidth: 25, targetWidth: 25, y0: 589.5, y1: 738.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 83, sourceWidth: 7, targetWidth: 8, y0: 530.5, y1: 438, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 618, sourceWidth: 70, targetWidth: 70, y0: 892, y1: 1041, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 371, sourceWidth: 42, targetWidth: 41, y0: 948, y1: 1261.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product', value: 777, sourceWidth: 90, targetWidth: 89, y0: 1122, y1: 1202.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service', value: 155, sourceWidth: 18, targetWidth: 16, y0: 1176, y1: 1358, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '直觉外科 · 2026 财年第二季度',
        meta: {
          title: '直觉外科 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleSize: 106,
          titleTextLength: 1760,
        },
        nodes: {
          instruments_accessories: { label: ['器械与', '配件'], notes: ['同比 +18%'] },
          systems: { label: '系统', notes: ['同比 +19%'] },
          services: { label: '服务', notes: ['同比 +2%'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 68%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 34%', '同比 +3 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 21%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 (0 个百分点)'] },
          product: { label: '产品' },
          service: { label: '服务' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

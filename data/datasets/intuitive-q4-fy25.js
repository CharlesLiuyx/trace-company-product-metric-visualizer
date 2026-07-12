/* Intuitive — Q4 FY25 income statement ($M), reconstructed object-by-object
 * from the measured processed reference. The validated wordmark and two
 * photographic business clusters are approved runtime crops; the Sankey,
 * labels, and connectors are native SVG. */
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
      yoy17: '同比 +17%', yoy20: '同比 +20%', yoy21: '同比 +21%', yoy19: '同比 +19%', margin66: '利润率 66%', pp2: '同比 (2 个百分点)', margin30: '利润率 30%', pp0: '同比 (0 个百分点)', margin28: '利润率 28%', pp1: '同比 (1 个百分点)', rev24: '占收入 24%', rev12: '占收入 12%',
    } : {
      instruments: ['Instruments', '& Accessories'], systems: 'Systems', services: 'Services', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', tax: 'Tax', sga: 'SG&A', rnd: 'R&D', product: 'Product', service: 'Service',
      yoy17: '+17% Y/Y', yoy20: '+20% Y/Y', yoy21: '+21% Y/Y', yoy19: '+19% Y/Y', margin66: '66% margin', pp2: '(2pp) Y/Y', margin30: '30% margin', pp0: '(0pp) Y/Y', margin28: '28% margin', pp1: '(1pp) Y/Y', rev24: '24% of revenue', rev12: '12% of revenue',
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
    const right = (top, lines) => ({ blocks: [block(RIGHT_X, top, lines, { anchor: 'start', lineGap: 8 })] });

    return {
      instruments_accessories: source(417, 282, 568, text.instruments, text.yoy17),
      systems: source(834, 330, 954, text.systems, text.yoy20),
      services: source(1108, 333, 1205, text.services, text.yoy21),
      revenue: { blocks: [block(950, 575, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.yoy19, 29, { color: NOTE })], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1423, 378, [green(text.gross), line('$value', 39, { color: GREEN_LABEL }), note(text.margin66), note(text.pp2)], { lineGap: 12 })] },
      cost_of_revenue: { blocks: [block(1420, 1207, [...text.cost.map((item) => red(item, 36)), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      operating_profit: { blocks: [block(1888, 278, [green(text.operating), line('$value', 39, { color: GREEN_LABEL }), note(text.margin30), note(text.pp0)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1892, 949, [...text.expenses.map((item) => red(item, 36)), line('$value', 34, { color: RED_LABEL })], { lineGap: 11 })] },
      other_income: { blocks: [block(2222, 549, [green(text.other, 31), line('$value', 29, { color: GREEN_LABEL })], { lineGap: 8 })] },
      net_profit: { blocks: [block(RIGHT_X - 3, 359, [green(text.net), line('$value', 39, { color: GREEN_LABEL }), note(text.margin28), note(text.pp1)], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(2450, 665, [red(text.tax), redValue()], { anchor: 'start', lineGap: 8 })] },
      sga: zh ? {
        blocks: [
          block(2450, 910, [red(text.sga[0], 30), red(text.sga[1], 30), redValue()], { anchor: 'start', lineGap: 5 }),
          block(2407, 1044, [note(text.rev24), note(text.pp1)], { anchor: 'start', lineGap: 8 }),
        ],
      } : {
        blocks: [
          block(2450, 910, [red(text.sga), redValue()], { anchor: 'start', lineGap: 8 }),
          block(2407, 995, [note(text.rev24), note(text.pp1)], { anchor: 'start', lineGap: 8 }),
        ],
      },
      rnd: {
        blocks: [
          block(2450, 1151, [red(text.rnd), redValue()], { anchor: 'start', lineGap: 8 }),
          block(2407, 1236, [note(text.rev12), note(text.pp0)], { anchor: 'start', lineGap: 8 }),
        ],
      },
      product: { blocks: [block(1767, 1139, [red(text.product), redValue()], { anchor: 'start', lineGap: 8 })] },
      service: { blocks: [block(1767, 1292, [red(text.service), redValue()], { anchor: 'start', lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intuitive-q4-fy25',
    name: 'Intuitive · Q4 FY25',
    company: 'Intuitive',
    meta: {
      company: 'Intuitive',
      title: 'Intuitive Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/intuitive-q4-fy25.png', width: 2667, height: 1500 },
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
        instruments_accessories: { x: 448, y: 516, width: 71, height: 208 },
        systems: { x: 448, y: 933, width: 71, height: 97 },
        services: { x: 448, y: 1208, width: 71, height: 51 },
        revenue: { x: 915, y: 727, width: 70, height: 362 },
        gross_profit: { x: 1382, y: 567, width: 71, height: 239 },
        cost_of_revenue: { x: 1382, y: 1073, width: 71, height: 119 },
        operating_profit: { x: 1850, y: 469, width: 70, height: 106 },
        operating_expenses: { x: 1850, y: 804, width: 70, height: 130 },
        other_income: { x: 2187, y: 524, width: 70, height: 8 },
        net_profit: { x: 2316, y: 376, width: 71, height: 99 },
        tax: { x: 2316, y: 694, width: 71, height: 17 },
        sga: { x: 2316, y: 919, width: 71, height: 84 },
        rnd: { x: 2316, y: 1172, width: 71, height: 42 },
        product: { x: 1662, y: 1129, width: 70, height: 101 },
        service: { x: 1662, y: 1323, width: 70, height: 17 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'instruments_accessories', col: 0, order: 0, type: 'source', label: ['Instruments', '& Accessories'], value: 1658.3, valueText: '$1,658M', notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'systems', col: 0, order: 1, type: 'source', label: 'Systems', value: 785.9, valueText: '$786M', notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'services', col: 0, order: 2, type: 'source', label: 'Services', value: 422.0, valueText: '$422M', notes: ['+21% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2866.2, valueText: '$2,866M', notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1904.3, valueText: '$1,904M', notes: ['66% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 961.9, valueText: '($962M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 864.3, valueText: '$864M', notes: ['30% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1040.0, valueText: '($1,040M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 91.3, valueText: '$91M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 799.5, valueText: '$800M', notes: ['28% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 156.1, valueText: '($156M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 687.1, valueText: '($687M)', notes: ['24% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 352.9, valueText: '($353M)', notes: ['12% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 4, order: 1, type: 'cost', label: 'Product', value: 809.8, valueText: '($810M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'service', col: 4, order: 2, type: 'cost', label: 'Service', value: 152.1, valueText: '($152M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'instruments_accessories', target: 'revenue', value: 1658.3, sourceWidth: 208, targetWidth: 208, y0: 620, y1: 831, sourceOrder: 0, targetOrder: 0 },
      { source: 'systems', target: 'revenue', value: 785.9, sourceWidth: 97, targetWidth: 97, y0: 981.5, y1: 983.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 422.0, sourceWidth: 51, targetWidth: 57, y0: 1233.5, y1: 1060.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1904.3, sourceWidth: 239, targetWidth: 239, y0: 846.5, y1: 686.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 961.9, sourceWidth: 123, targetWidth: 119, y0: 1027.5, y1: 1132.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 864.3, sourceWidth: 106, targetWidth: 106, y0: 620, y1: 522, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1040.0, sourceWidth: 133, targetWidth: 130, y0: 739.5, y1: 869, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 708.2, sourceWidth: 88, targetWidth: 88, y0: 513, y1: 420, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 156.1, sourceWidth: 18, targetWidth: 17, y0: 566, y1: 702.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 91.3, sourceWidth: 8, targetWidth: 11, y0: 528, y1: 469.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 687.1, sourceWidth: 84, targetWidth: 84, y0: 846, y1: 961, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 352.9, sourceWidth: 46, targetWidth: 42, y0: 911, y1: 1193, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product', value: 809.8, sourceWidth: 101, targetWidth: 101, y0: 1123.5, y1: 1179.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service', value: 152.1, sourceWidth: 17, targetWidth: 17, y0: 1183.5, y1: 1331.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '直觉外科 · 2025 财年第四季度',
        meta: {
          title: '直觉外科 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 106,
          titleTextLength: 1760,
        },
        nodes: {
          instruments_accessories: { label: ['器械与', '配件'], notes: ['同比 +17%'] },
          systems: { label: '系统', notes: ['同比 +20%'] },
          services: { label: '服务', notes: ['同比 +21%'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 66%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 28%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 24%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 +0 个百分点'] },
          product: { label: '产品' },
          service: { label: '服务' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

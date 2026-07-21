/* Intuitive — Q1 FY26 income statement ($B), reconstructed object-by-object
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
      yoy23: '同比 +23%', yoy24: '同比 +24%', yoy19: '同比 +19%', margin66: '利润率 66%', pp1up: '同比 +1 个百分点', margin31: '利润率 31%', pp5up: '同比 +5 个百分点', margin30: '利润率 30%', pp1down: '同比 (1 个百分点)', rev22: '占收入 22%', pp3down: '同比 (3 个百分点)', rev13: '占收入 13%',
    } : {
      instruments: ['Instruments', '& Accessories'], systems: 'Systems', services: 'Services', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', tax: 'Tax', sga: 'SG&A', rnd: 'R&D', product: 'Product', service: 'Service',
      yoy23: '+23% Y/Y', yoy24: '+24% Y/Y', yoy19: '+19% Y/Y', margin66: '66% margin', pp1up: '+1pp Y/Y', margin31: '31% margin', pp5up: '+5pp Y/Y', margin30: '30% margin', pp1down: '(1pp) Y/Y', rev22: '22% of revenue', pp3down: '(3pp) Y/Y', rev13: '13% of revenue',
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
      instruments_accessories: source(417, 282, 575, text.instruments, text.yoy23),
      systems: source(831, 330, 946, text.systems, text.yoy24),
      services: source(1108, 333, 1207, text.services, text.yoy19),
      revenue: { blocks: [block(950, 567, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.yoy23, 29, { color: NOTE })], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1418, 394, [green(text.gross), line('$value', 39, { color: GREEN_LABEL }), note(text.margin66), note(text.pp1up)], { lineGap: 12 })] },
      cost_of_revenue: { blocks: [block(1420, 1198, [...text.cost.map((item) => red(item, 36)), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      operating_profit: { blocks: [block(1888, 271, [green(text.operating), line('$value', 39, { color: GREEN_LABEL }), note(text.margin31), note(text.pp5up)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1887, 957, [...text.expenses.map((item) => red(item, 36)), line('$value', 34, { color: RED_LABEL })], { lineGap: 11 })] },
      other_income: { blocks: [block(2232, 517, [green(text.other, 31), line('$value', 29, { color: GREEN_LABEL })], { lineGap: 8 })] },
      net_profit: { blocks: [block(RIGHT_X - 3, 316, [green(text.net), line('$value', 39, { color: GREEN_LABEL }), note(text.margin30), note(text.pp1down)], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(2459, 651, [red(text.tax), redValue()], { anchor: 'start', lineGap: 8 })] },
      sga: zh ? {
        blocks: [
          block(2450, 924, [red(text.sga[0], 30), red(text.sga[1], 30), redValue()], { anchor: 'start', lineGap: 5 }),
          block(2407, 1058, [note(text.rev22), note(text.pp3down)], { anchor: 'start', lineGap: 8 }),
        ],
      } : {
        blocks: [
          block(2450, 924, [red(text.sga), redValue()], { anchor: 'start', lineGap: 8 }),
          block(2407, 1009, [note(text.rev22), note(text.pp3down)], { anchor: 'start', lineGap: 8 }),
        ],
      },
      rnd: {
        blocks: [
          block(2450, 1160, [red(text.rnd), redValue()], { anchor: 'start', lineGap: 8 }),
          block(2407, 1245, [note(text.rev13), note(text.pp1down)], { anchor: 'start', lineGap: 8 }),
        ],
      },
      product: { blocks: [block(1739, 1118, [red(text.product), redValue()], { anchor: 'start', lineGap: 8 })] },
      service: { blocks: [block(1743, 1269, [red(text.service), redValue()], { anchor: 'start', lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'intuitive-q1-fy26',
    name: 'Intuitive · Q1 FY26',
    company: 'Intuitive',
    meta: {
      company: 'Intuitive',
      title: 'Intuitive Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/intuitive-q1-fy26.png', width: 2667, height: 1500 },
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
        instruments_accessories: { x: 448, y: 517, width: 71, height: 215 },
        systems: { x: 448, y: 928, width: 71, height: 82 },
        services: { x: 448, y: 1207, width: 71, height: 54 },
        revenue: { x: 915, y: 713, width: 70, height: 354 },
        gross_profit: { x: 1382, y: 583, width: 71, height: 234 },
        cost_of_revenue: { x: 1382, y: 1065, width: 71, height: 118 },
        operating_profit: { x: 1850, y: 460, width: 70, height: 108 },
        operating_expenses: { x: 1850, y: 819, width: 70, height: 124 },
        other_income: { x: 2195, y: 493, width: 70, height: 9 },
        net_profit: { x: 2316, y: 337, width: 71, height: 103 },
        tax: { x: 2316, y: 682, width: 71, height: 12 },
        sga: { x: 2316, y: 932, width: 71, height: 77 },
        rnd: { x: 2316, y: 1183, width: 71, height: 45 },
        product: { x: 1620, y: 1111, width: 70, height: 99 },
        service: { x: 1620, y: 1298, width: 70, height: 19 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'instruments_accessories', col: 0, order: 0, type: 'source', label: ['Instruments', '& Accessories'], value: 1.7, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'systems', col: 0, order: 1, type: 'source', label: 'Systems', value: 0.7, notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'services', col: 0, order: 2, type: 'source', label: 'Services', value: 0.4, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.8, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.8, notes: ['66% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.9, notes: ['31% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.8, notes: ['30% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 0.6, notes: ['22% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.4, notes: ['13% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 4, order: 1, type: 'cost', label: 'Product', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'service', col: 4, order: 2, type: 'cost', label: 'Service', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'instruments_accessories', target: 'revenue', value: 1.7, sourceWidth: 215, targetWidth: 215, y0: 624.5, y1: 820.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'systems', target: 'revenue', value: 0.7, sourceWidth: 82, targetWidth: 82, y0: 969, y1: 969, sourceOrder: 0, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 0.4, sourceWidth: 54, targetWidth: 57, y0: 1234, y1: 1038.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 1.8, sourceWidth: 234, targetWidth: 234, y0: 830, y1: 700, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.9, sourceWidth: 119, targetWidth: 118, y0: 1007.5, y1: 1124, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9, sourceWidth: 108, targetWidth: 108, y0: 637, y1: 514, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.0, sourceWidth: 126, targetWidth: 124, y0: 754, y1: 881, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 96, targetWidth: 94, y0: 508, y1: 384, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.1, sourceWidth: 12, targetWidth: 12, y0: 562, y1: 688, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 9, targetWidth: 9, y0: 497.5, y1: 435.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 0.6, sourceWidth: 77, targetWidth: 77, y0: 857.5, y1: 970.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.4, sourceWidth: 47, targetWidth: 45, y0: 919.5, y1: 1205.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'product', value: 0.8, sourceWidth: 99, targetWidth: 99, y0: 1114.5, y1: 1160.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service', value: 0.2, sourceWidth: 19, targetWidth: 19, y0: 1173.5, y1: 1307.5, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '直觉外科 · 2026 财年第一季度',
        meta: {
          title: '直觉外科 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 106,
          titleTextLength: 1760,
        },
        nodes: {
          instruments_accessories: { label: ['器械与', '配件'], notes: ['同比 +23%'] },
          systems: { label: '系统', notes: ['同比 +24%'] },
          services: { label: '服务', notes: ['同比 +19%'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 66%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 30%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政费用', notes: ['占收入 22%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 13%', '同比 (1 个百分点)'] },
          product: { label: '产品' },
          service: { label: '服务' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

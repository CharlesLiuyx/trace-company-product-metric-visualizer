/* Texas Instruments — Q4 FY25 income statement ($B), reconstructed from the
 * processed reference. The company wordmark is a validated raster annotation;
 * all financial geometry, labels, and Sankey links remain native SVG. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#111111';
  const GREY_LINK = '#888888';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#d40000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_X = 2402;

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
  const otherIncomeAnnotation = (label) => `
    <g class="sankey-interactive-annotation" data-node="other_income" data-link-numerator="other_income" data-link-denominator="net_profit" data-link-anchor-x="2214" data-link-anchor-y="485" font-family="Noto Sans,Arial,sans-serif">
      <rect x="2120" y="475" width="130" height="108" fill="#ffffff" fill-opacity="0"/>
      <text x="2183" y="531" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${label}</text>
      <text x="2183" y="572" text-anchor="middle" font-size="29" font-weight="400" fill="${GREEN_LABEL}">$40M</text>
    </g>`;

  const labels = (zh) => {
    const text = zh ? {
      analog: '模拟', embedded: ['嵌入式', '处理'], other: '其他', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['营业', '费用'], net: '净利润', tax: '税费', financial: '财务费用', rnd: '研发', sga: '销售、一般及行政', restructuring: '重组',
      yoy14: '同比 +14%', yoy8: '同比 +8%', yoy34: '同比 (34%)', yoy10: '同比 +10%', margin56: '利润率 56%', margin33: '利润率 33%', margin26: '利润率 26%', pp2: '同比 (2 个百分点)', pp1: '同比 (1 个百分点)', pp4: '同比 (4 个百分点)',
    } : {
      analog: 'Analog', embedded: ['Embedded', 'Processing'], other: 'Other', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', financial: 'Financial', rnd: 'R&D', sga: 'SG&A', restructuring: 'Restructuring',
      yoy14: '+14% Y/Y', yoy8: '+8% Y/Y', yoy34: '(34%) Y/Y', yoy10: '+10% Y/Y', margin56: '56% margin', margin33: '33% margin', margin26: '26% margin', pp2: '(2pp) Y/Y', pp1: '(1pp) Y/Y', pp4: '(4pp) Y/Y',
    };
    const source = (valueTop, nameX, nameTop, name, yoy) => ({
      blocks: [
        block(417, valueTop, [line('$value', 39), line(yoy, 29, { color: NOTE })], { lineGap: 9 }),
        block(nameX, nameTop, (Array.isArray(name) ? name : [name]).map((item) => line(item, 40, { weight: 800 })), { lineGap: 7 }),
      ],
    });
    const green = (value, size = 40) => line(value, size, { weight: 800, color: GREEN_LABEL });
    const red = (value, size = 31) => line(value, size, { weight: 800, color: RED_LABEL });
    const note = (value) => line(value, 29, { color: NOTE });
    const redValue = () => line('$value', 31, { color: RED_LABEL });

    return {
      analog: source(463, 220, 702, text.analog, text.yoy14),
      embedded_processing: source(955, 223, 1029, text.embedded, text.yoy8),
      other_revenue: source(1149, 220, 1229, text.other, text.yoy34),
      revenue: { blocks: [block(885, 558, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), note(text.yoy10)], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1351, 395, [green(text.gross), line('$value', 39, { color: GREEN_LABEL }), note(text.margin56), note(text.pp2)], { lineGap: 12 })] },
      cost_of_revenue: { blocks: [block(1351, 1220, [...text.cost.map((item) => red(item, 36)), redValue()], { lineGap: 8 })] },
      operating_profit: { blocks: [block(1816, 276, [green(text.operating), line('$value', 39, { color: GREEN_LABEL }), note(text.margin33), note(text.pp1)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1819, 908, [...text.expenses.map((item) => red(item, 36)), redValue()], { lineGap: 11 })] },
      other_income: { blocks: [] },
      net_profit: { blocks: [block(2353, 322, [green(text.net), line('$value', 39, { color: GREEN_LABEL }), note(text.margin26), note(text.pp4)], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(2398, 624, [red(text.tax), redValue()], { anchor: 'start', lineGap: 8 })] },
      financial: { blocks: [block(2380, 745, [red(text.financial), redValue()], { anchor: 'start', lineGap: 8 })] },
      rnd: { blocks: [block(2398, 948, [red(text.rnd), redValue()], { anchor: 'start', lineGap: 8 })] },
      sga: { blocks: [block(2398, 1092, [red(text.sga), redValue()], { anchor: 'start', lineGap: 8 })] },
      restructuring: { blocks: [block(2344, 1211, [red(text.restructuring), redValue()], { anchor: 'start', lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'texas-instruments-q4-fy25',
    name: 'Texas Instruments · Q4 FY25',
    company: 'Texas Instruments',
    meta: {
      company: 'Texas Instruments',
      title: 'Texas Instruments Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/texas-instruments-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 190,
      titleSize: 106,
      titleWeight: 800,
      titleTextLength: 2468,
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
    annotationsSvg: otherIncomeAnnotation('Other'),
    rasterAnnotations: [
      { key: 'texas-instruments-company-wordmark', href: 'data/assets/raster-annotations/texas-instruments/texas-instruments-company-wordmark.png', x: 555, y: 265, width: 660, height: 230 },
    ],
    layout: {
      scale: 1,
      nodes: {
        analog: { x: 381, y: 562, width: 72, height: 312 },
        embedded_processing: { x: 381, y: 1051, width: 72, height: 57 },
        other_revenue: { x: 381, y: 1244, width: 72, height: 13 },
        revenue: { x: 850, y: 709, width: 71, height: 383 },
        gross_profit: { x: 1316, y: 583, width: 71, height: 215 },
        cost_of_revenue: { x: 1316, y: 1034, width: 71, height: 170 },
        operating_profit: { x: 1781, y: 464, width: 72, height: 128 },
        operating_expenses: { x: 1781, y: 807, width: 72, height: 87 },
        other_income: { x: 2132, y: 483, width: 72, height: 4 },
        net_profit: { x: 2250, y: 340, width: 72, height: 101 },
        tax: { x: 2250, y: 654, width: 72, height: 18 },
        financial: { x: 2250, y: 778, width: 72, height: 12 },
        rnd: { x: 2250, y: 968, width: 72, height: 45 },
        sga: { x: 2250, y: 1112, width: 72, height: 39 },
        restructuring: { x: 2250, y: 1251, width: 72, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'analog', col: 0, order: 0, type: 'source', label: 'Analog', value: 3.615, valueText: '$3.6B', notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'embedded_processing', col: 0, order: 1, type: 'source', label: ['Embedded', 'Processing'], value: 0.662, valueText: '$0.7B', notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 0.146, valueText: '$0.1B', notes: ['(34%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.423, valueText: '$4.4B', notes: ['+10% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.472, valueText: '$2.5B', notes: ['56% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.951, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.473, valueText: '$1.5B', notes: ['33% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.999, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.04, valueText: '$40M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.163, valueText: '$1.2B', notes: ['26% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.209, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial', col: 5, order: 2, type: 'cost', label: 'Financial', value: 0.141, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.521, valueText: '($0.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.446, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.032, valueText: '($32M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'analog', target: 'revenue', value: 3.615, sourceWidth: 312, targetWidth: 312, y0: 718, y1: 865, sourceOrder: 0, targetOrder: 0 },
      { source: 'embedded_processing', target: 'revenue', value: 0.662, sourceWidth: 57, targetWidth: 57, y0: 1079.5, y1: 1049.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.146, sourceWidth: 13, targetWidth: 13, y0: 1250.5, y1: 1084.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 2.472, sourceWidth: 215, targetWidth: 215, y0: 816.5, y1: 690.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.951, sourceWidth: 168, targetWidth: 170, y0: 1008, y1: 1119, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.473, sourceWidth: 128, targetWidth: 128, y0: 647, y1: 528, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.999, sourceWidth: 87, targetWidth: 87, y0: 754.5, y1: 850.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.123, sourceWidth: 98, targetWidth: 98, y0: 513, y1: 389, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.209, sourceWidth: 18, targetWidth: 18, y0: 571, y1: 663, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.141, sourceWidth: 12, targetWidth: 12, y0: 586, y1: 784, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.04, sourceWidth: 4, targetWidth: 4, y0: 485, y1: 439, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2204, x1: 2250, c1x: 2219, c1y: 485, c2x: 2225, c2y: 439 } },
      { source: 'operating_expenses', target: 'rnd', value: 0.521, sourceWidth: 45, targetWidth: 45, y0: 829.5, y1: 990.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.446, sourceWidth: 39, targetWidth: 39, y0: 871.5, y1: 1131.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.032, sourceWidth: 3, targetWidth: 3, y0: 892.5, y1: 1252.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '德州仪器 · 2025 财年第四季度',
        meta: {
          title: '德州仪器 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 100,
          titleTextLength: 1710,
        },
        nodes: {
          analog: { label: '模拟', notes: ['同比 +14%'] },
          embedded_processing: { label: '嵌入式处理', notes: ['同比 +8%'] },
          other_revenue: { label: '其他', notes: ['同比 (34%)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 26%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          financial: { label: '财务费用' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政费用' },
          restructuring: { label: '重组' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: otherIncomeAnnotation('其他'),
      },
    },
  });
})();

/* Texas Instruments — Q1 FY26 income statement ($B), reconstructed from the
 * processing reference. The reusable company wordmark is a validated raster
 * annotation; all financial geometry, labels, and Sankey links remain SVG. */
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
    <g class="sankey-interactive-annotation" data-node="other_income" data-link-numerator="other_income" data-link-denominator="net_profit" data-link-anchor-x="2192" data-link-anchor-y="555" font-family="Noto Sans,Arial,sans-serif">
      <rect x="2088" y="565" width="130" height="92" fill="#ffffff" fill-opacity="0"/>
      <text x="2150" y="600" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${label}</text>
      <text x="2150" y="642" text-anchor="middle" font-size="29" font-weight="400" fill="${GREEN_LABEL}">$47M</text>
    </g>`;

  const labels = (zh) => {
    const text = zh ? {
      analog: '模拟',
      embedded: ['嵌入式', '处理'],
      other: '其他',
      revenue: '收入',
      gross: '毛利润',
      cost: ['收入', '成本'],
      operating: '营业利润',
      expenses: ['营业', '费用'],
      net: '净利润',
      tax: '税费',
      financial: '财务费用',
      rnd: '研发',
      sga: '销售、一般及行政',
      restructuring: '重组',
      yoy22: '同比 +22%',
      yoy12: '同比 +12%',
      yoy16: '同比 (16%)',
      yoy19: '同比 +19%',
      margin58: '利润率 58%',
      margin37: '利润率 37%',
      margin32: '利润率 32%',
      pp1: '同比 +1 个百分点',
      pp5: '同比 +5 个百分点',
      pp3: '同比 +3 个百分点',
    } : {
      analog: 'Analog',
      embedded: ['Embedded', 'Processing'],
      other: 'Other',
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: ['Cost of', 'revenue'],
      operating: 'Operating profit',
      expenses: ['Operating', 'expenses'],
      net: 'Net profit',
      tax: 'Tax',
      financial: 'Financial',
      rnd: 'R&D',
      sga: 'SG&A',
      restructuring: 'Restructuring',
      yoy22: '+22% Y/Y',
      yoy12: '+12% Y/Y',
      yoy16: '(16%) Y/Y',
      yoy19: '+19% Y/Y',
      margin58: '58% margin',
      margin37: '37% margin',
      margin32: '32% margin',
      pp1: '+1pp Y/Y',
      pp5: '+5pp Y/Y',
      pp3: '+3pp Y/Y',
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
      analog: source(465, 220, 692, text.analog, text.yoy22),
      embedded_processing: source(950, 223, 1024, text.embedded, text.yoy12),
      other_revenue: source(1145, 220, 1225, text.other, text.yoy16),
      revenue: { blocks: [block(885, 552, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), note(text.yoy19)], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1351, 408, [green(text.gross), line('$value', 39, { color: GREEN_LABEL }), note(text.margin58), note(text.pp1)], { lineGap: 12 })] },
      cost_of_revenue: { blocks: [block(1351, 1214, [...text.cost.map((item) => red(item, 36)), redValue()], { lineGap: 8 })] },
      operating_profit: { blocks: [block(1816, 276, [green(text.operating), line('$value', 39, { color: GREEN_LABEL }), note(text.margin37), note(text.pp5)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1819, 977, [...text.expenses.map((item) => red(item, 36)), redValue()], { lineGap: 11 })] },
      other_income: { blocks: [] },
      net_profit: { blocks: [block(2353, 340, [green(text.net), line('$value', 39, { color: GREEN_LABEL }), note(text.margin32), note(text.pp3)], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(2398, 695, [red(text.tax), redValue()], { anchor: 'start', lineGap: 8 })] },
      financial: { blocks: [block(2380, 794, [red(text.financial), redValue()], { anchor: 'start', lineGap: 8 })] },
      rnd: { blocks: [block(2398, 980, [red(text.rnd), redValue()], { anchor: 'start', lineGap: 8 })] },
      sga: { blocks: [block(2398, 1129, [red(text.sga), redValue()], { anchor: 'start', lineGap: 8 })] },
      restructuring: { blocks: [block(2344, 1263, [red(text.restructuring), redValue()], { anchor: 'start', lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'texas-instruments-q1-fy26',
    name: 'Texas Instruments · Q1 FY26',
    company: 'Texas Instruments',
    meta: {
      company: 'Texas Instruments',
      title: 'Texas Instruments Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/texas-instruments-q1-fy26.png', width: 2667, height: 1500 },
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
        analog: { x: 381, y: 559, width: 72, height: 308 },
        embedded_processing: { x: 381, y: 1046, width: 72, height: 56 },
        other_revenue: { x: 381, y: 1240, width: 72, height: 14 },
        revenue: { x: 848, y: 703, width: 72, height: 379 },
        gross_profit: { x: 1316, y: 593, width: 71, height: 221 },
        cost_of_revenue: { x: 1316, y: 1039, width: 71, height: 160 },
        operating_profit: { x: 1783, y: 461, width: 72, height: 142 },
        operating_expenses: { x: 1783, y: 885, width: 72, height: 79 },
        other_income: { x: 2112, y: 554, width: 72, height: 4 },
        net_profit: { x: 2250, y: 362, width: 72, height: 122 },
        tax: { x: 2250, y: 729, width: 72, height: 13 },
        financial: { x: 2250, y: 829, width: 72, height: 12 },
        rnd: { x: 2250, y: 1002, width: 72, height: 40 },
        sga: { x: 2250, y: 1151, width: 72, height: 37 },
        restructuring: { x: 2250, y: 1304, width: 72, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'analog', col: 0, order: 0, type: 'source', label: 'Analog', value: 3.924, notes: ['+22% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'embedded_processing', col: 0, order: 1, type: 'source', label: ['Embedded', 'Processing'], value: 0.723, notes: ['+12% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 0.178, notes: ['(16%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 4.825, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.799, notes: ['58% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.026, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.808, notes: ['37% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 0.991, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.047, valueText: '$47M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.545, notes: ['32% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.169, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial', col: 5, order: 2, type: 'cost', label: 'Financial', value: 0.141, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.51, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.464, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.017, valueText: '($17M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'analog', target: 'revenue', value: 3.924, sourceWidth: 308, targetWidth: 308, y0: 713, y1: 857, sourceOrder: 0, targetOrder: 0 },
      { source: 'embedded_processing', target: 'revenue', value: 0.723, sourceWidth: 56, targetWidth: 56, y0: 1074, y1: 1039, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.178, sourceWidth: 14, targetWidth: 14, y0: 1247, y1: 1074, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 2.799, sourceWidth: 221, targetWidth: 221, y0: 813.5, y1: 703.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.026, sourceWidth: 158, targetWidth: 160, y0: 1003, y1: 1119, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.808, sourceWidth: 142, targetWidth: 142, y0: 664, y1: 532, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 0.991, sourceWidth: 79, targetWidth: 79, y0: 774.5, y1: 924.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.498, sourceWidth: 117, targetWidth: 118, y0: 519.5, y1: 421, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.169, sourceWidth: 13, targetWidth: 13, y0: 584.5, y1: 735.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.141, sourceWidth: 12, targetWidth: 12, y0: 597, y1: 835, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.047, sourceWidth: 4, targetWidth: 4, y0: 556, y1: 482, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2184, x1: 2250, c1x: 2212, c1y: 556, c2x: 2225, c2y: 482 } },
      { source: 'operating_expenses', target: 'rnd', value: 0.51, sourceWidth: 40, targetWidth: 40, y0: 905, y1: 1022, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.464, sourceWidth: 37, targetWidth: 37, y0: 943.5, y1: 1169.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.017, sourceWidth: 2, targetWidth: 2, y0: 963, y1: 1305, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '德州仪器 · 2026 财年第一季度',
        meta: {
          title: '德州仪器 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 100,
          titleTextLength: 1710,
        },
        nodes: {
          analog: { label: '模拟', notes: ['同比 +22%'] },
          embedded_processing: { label: '嵌入式处理', notes: ['同比 +12%'] },
          other_revenue: { label: '其他', notes: ['同比 (16%)'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 58%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 37%', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +3 个百分点'] },
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

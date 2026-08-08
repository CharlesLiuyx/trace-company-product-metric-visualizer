/* Texas Instruments — Q2 FY26 income statement ($B), reconstructed from the
 * processing reference. The reusable company wordmark is a validated raster
 * annotation; all financial geometry, labels, and Sankey links remain SVG. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#12100e';
  const GREY_LINK = '#8d8c8b';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
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
    <g class="sankey-interactive-annotation" data-node="other_income" data-link-numerator="other_income" data-link-denominator="net_profit" data-link-anchor-x="2194" data-link-anchor-y="529" font-family="Noto Sans,Arial,sans-serif">
      <rect x="2088" y="539" width="130" height="92" fill="#ffffff" fill-opacity="0"/>
      <text x="2152" y="576" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${label}</text>
      <text x="2152" y="618" text-anchor="middle" font-size="29" font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
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
      yoy26: '同比 +26%',
      yoy16: '同比 +16%',
      yoy2: '同比 (2%)',
      yoy23: '同比 +23%',
      margin61: '利润率 61%',
      margin42: '利润率 42%',
      margin36: '利润率 36%',
      pp3: '同比 +3 个百分点',
      pp7: '同比 +7 个百分点',
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
      yoy26: '+26% Y/Y',
      yoy16: '+16% Y/Y',
      yoy2: '(2%) Y/Y',
      yoy23: '+23% Y/Y',
      margin61: '61% margin',
      margin42: '42% margin',
      margin36: '36% margin',
      pp3: '+3pp Y/Y',
      pp7: '+7pp Y/Y',
    };
    const source = (valueTop, nameX, nameTop, name, yoy, valueX = 419) => ({
      blocks: [
        block(valueX, valueTop, [line('$value', 39), line(yoy, 29, { color: NOTE })], { lineGap: 9 }),
        block(nameX, nameTop, (Array.isArray(name) ? name : [name]).map((item) => line(item, 40, { weight: 800 })), { lineGap: 7 }),
      ],
    });
    const green = (value, size = 40) => line(value, size, { weight: 800, color: GREEN_LABEL });
    const red = (value, size = 31) => line(value, size, { weight: 800, color: RED_LABEL });
    const note = (value) => line(value, 29, { color: NOTE });
    const redValue = () => line('$value', 31, { color: RED_LABEL });

    return {
      analog: source(508, 222, 705, text.analog, text.yoy26),
      embedded_processing: source(921, 225, 993, text.embedded, text.yoy16),
      other_revenue: source(1112, 222, 1195, text.other, text.yoy2),
      revenue: { blocks: [block(887, 587, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), note(text.yoy23)], { lineGap: 9 })] },
      gross_profit: { blocks: [block(1346, 416, [green(text.gross), line('$value', 39, { color: GREEN_LABEL }), note(text.margin61), note(text.pp3)], { lineGap: 12 })] },
      cost_of_revenue: { blocks: [block(1346, 1158, [...text.cost.map((item) => red(item, 36)), redValue()], { lineGap: 8 })] },
      operating_profit: { blocks: [block(1811, 282, [green(text.operating), line('$value', 39, { color: GREEN_LABEL }), note(text.margin42), note(text.pp7)], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1814, 942, [...text.expenses.map((item) => red(item, 36)), redValue()], { lineGap: 11 })] },
      other_income: { blocks: [] },
      net_profit: { blocks: [block(2331, 341, [green(text.net), line('$value', 39, { color: GREEN_LABEL }), note(text.margin36), note(text.pp7)], { anchor: 'start', lineGap: 12 })] },
      tax: { blocks: [block(2377, 658, [red(text.tax), redValue()], { anchor: 'start', lineGap: 8 })] },
      financial: { blocks: [block(2360, 766, [red(text.financial), redValue()], { anchor: 'start', lineGap: 8 })] },
      rnd: { blocks: [block(2393, 931, [red(text.rnd), redValue()], { anchor: 'start', lineGap: 8 })] },
      sga: { blocks: [block(2393, 1092, [red(text.sga), redValue()], { anchor: 'start', lineGap: 8 })] },
      other_operating_expense: { blocks: [block(2393, 1230, [red(text.other), redValue()], { anchor: 'start', lineGap: 8 })] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'texas-instruments-q2-fy26',
    name: 'Texas Instruments · Q2 FY26',
    company: 'Texas Instruments',
    meta: {
      company: 'Texas Instruments',
      title: 'Texas Instruments Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/texas-instruments-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'texas-instruments-company-wordmark', href: 'data/assets/raster-annotations/texas-instruments/texas-instruments-company-wordmark.png', x: 550, y: 260, width: 660, height: 230 },
    ],
    layout: {
      scale: 1,
      nodes: {
        analog: { x: 376, y: 602, width: 72, height: 258 },
        embedded_processing: { x: 376, y: 1015, width: 72, height: 47 },
        other_revenue: { x: 376, y: 1207, width: 72, height: 19 },
        revenue: { x: 843, y: 725, width: 72, height: 324 },
        gross_profit: { x: 1311, y: 603, width: 71, height: 199 },
        cost_of_revenue: { x: 1311, y: 1015, width: 71, height: 127 },
        operating_profit: { x: 1778, y: 468, width: 72, height: 136 },
        operating_expenses: { x: 1778, y: 861, width: 72, height: 64 },
        other_income: { x: 2114, y: 527, width: 72, height: 4 },
        net_profit: { x: 2245, y: 360, width: 72, height: 118 },
        tax: { x: 2245, y: 688, width: 72, height: 16 },
        financial: { x: 2245, y: 802, width: 72, height: 8 },
        rnd: { x: 2245, y: 957, width: 72, height: 31 },
        sga: { x: 2245, y: 1118, width: 72, height: 31 },
        other_operating_expense: { x: 2245, y: 1270, width: 72, height: 4 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'analog', col: 0, order: 0, type: 'source', label: 'Analog', value: 4.4, notes: ['+26% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'embedded_processing', col: 0, order: 1, type: 'source', label: ['Embedded', 'Processing'], value: 0.8, notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 0.3, notes: ['(2%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 5.5, notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.4, notes: ['61% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.3, notes: ['42% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.0, valueText: '($1.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.0, valueText: '$2.0B', notes: ['36% margin', '+7pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'financial', col: 5, order: 2, type: 'cost', label: 'Financial', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_operating_expense', col: 5, order: 5, type: 'cost', label: 'Other', value: 0.017, valueText: '($17M)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'analog', target: 'revenue', value: 4.4, sourceWidth: 258, targetWidth: 258, y0: 731, y1: 854, sourceOrder: 0, targetOrder: 0 },
      { source: 'embedded_processing', target: 'revenue', value: 0.8, sourceWidth: 47, targetWidth: 47, y0: 1038.5, y1: 1006.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.3, sourceWidth: 19, targetWidth: 19, y0: 1216.5, y1: 1039.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.4, sourceWidth: 199, targetWidth: 199, y0: 824.5, y1: 702.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.1, sourceWidth: 125, targetWidth: 127, y0: 986.5, y1: 1078.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceWidth: 136, targetWidth: 136, y0: 671, y1: 536, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.0, sourceWidth: 63, targetWidth: 64, y0: 770.5, y1: 893, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceWidth: 114, targetWidth: 114, y0: 525, y1: 417, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 15, targetWidth: 16, y0: 589.5, y1: 696, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.1, sourceWidth: 7, targetWidth: 8, y0: 600.5, y1: 806, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.1, sourceWidth: 4, targetWidth: 4, y0: 529, y1: 476, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK, curve: { x0: 2186, x1: 2245, c1x: 2212, c1y: 529, c2x: 2225, c2y: 476 } },
      { source: 'operating_expenses', target: 'rnd', value: 0.5, sourceWidth: 31, targetWidth: 31, y0: 876.5, y1: 972.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.5, sourceWidth: 31, targetWidth: 31, y0: 907.5, y1: 1133.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 0.017, sourceWidth: 2, targetWidth: 4, y0: 924, y1: 1272, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '德州仪器 · 2026 财年第二季度',
        meta: {
          title: '德州仪器 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月',
          titleSize: 100,
          titleTextLength: 1710,
        },
        nodes: {
          analog: { label: '模拟', notes: ['同比 +26%'] },
          embedded_processing: { label: '嵌入式处理', notes: ['同比 +16%'] },
          other_revenue: { label: '其他', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 61%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 +7 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 36%', '同比 +7 个百分点'] },
          tax: { label: '税费' },
          financial: { label: '财务费用' },
          rnd: { label: '研发' },
          sga: { label: '销售、一般及行政费用' },
          other_operating_expense: { label: '其他' },
        },
        layout: { labels: labels(true) },
        annotationsSvg: otherIncomeAnnotation('其他'),
      },
    },
  });
})();

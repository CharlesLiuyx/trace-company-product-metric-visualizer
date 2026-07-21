/* Eli Lilly Q1 FY26 income statement ($B), measured from the processing Source. */
(function () {
  const BLACK = '#000000';
  const GRAY = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const BG = '#f2f2f2';
  const RIGHT = 2468;
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const valueNotes = (name, note, x, top, nameX, nameTop) => ({
    blocks: [
      { x, top, anchor: 'middle', lineGap: 10, lines: [line('$value', 40, 400), line(note, 29, 400, GRAY)] },
      { x: nameX, top: nameTop, anchor: 'middle', lineGap: 8, lines: (Array.isArray(name) ? name : [name]).map((item) => line(item, 40, 800)) },
    ],
  });
  const valueOnly = (note, x, top) => ({
    blocks: [{ x, top, anchor: 'middle', lineGap: 10, lines: [line('$value', 40, 400), line(note, 29, 400, GRAY)] }],
  });

  const sourceNameAnnotations = (zh = false) => `
    <g class="sankey-interactive-annotation" data-node="cardiometabolic">
      <text x="202" y="559" text-anchor="middle" font-size="40" font-weight="800">${zh ? '心血管代谢' : 'Cardiometabolic'}</text>
      <text x="202" y="611" text-anchor="middle" font-size="40" font-weight="800">${zh ? '健康' : 'Health'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="oncology">
      <text x="201" y="827" text-anchor="middle" font-size="40" font-weight="800">${zh ? '肿瘤' : 'Oncology'}</text>
    </g>
    <g class="sankey-interactive-annotation" data-node="immunology">
      <text x="202" y="996" text-anchor="middle" font-size="40" font-weight="800">${zh ? '免疫' : 'Immunology'}</text>
    </g>`;

  const otherIncomeGuide = (zh = false) => `
    <g class="sankey-interactive-annotation"
      data-node="other_income"
      data-link-numerator="other_income"
      data-link-denominator="net_profit"
      data-link-anchor-x="2200"
      data-link-anchor-y="416">
      <text x="2187" y="492" text-anchor="middle" font-size="31" font-weight="800"
        fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
      <text x="2187" y="535" text-anchor="middle" font-size="31" font-weight="400"
        fill="${GREEN_LABEL}">$0.2B</text>
    </g>`;

  const labels = {
    cardiometabolic: valueOnly('+71% Y/Y', 419, 313),
    oncology: valueOnly('+16% Y/Y', 419, 695),
    immunology: valueOnly('+11% Y/Y', 419, 876),
    neuroscience: valueNotes('Neurosciences', '+40% Y/Y', 420, 1027, 206, 1106),
    other_revenue: valueNotes('Other', '(12%) Y/Y', 420, 1169, 207, 1247),
    other_income: { blocks: [] },
    revenue: { blocks: [{ x: 887, top: 523, anchor: 'middle', lineGap: 12, lines: [line('Revenue', 40, 800), line('$value', 40, 400), line('+56% Y/Y', 29, 400, GRAY)] }] },
    gross_profit: { blocks: [{ x: 1354, top: 346, anchor: 'middle', lineGap: 12, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('82% margin', 29, 400, GRAY), line('(1pp) Y/Y', 29, 400, GRAY)] }] },
    cost_of_sales: { blocks: [{ x: 1354, top: 1092, anchor: 'middle', lineGap: 10, lines: [line('Cost of sales', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1821, top: 234, anchor: 'middle', lineGap: 12, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('45% margin', 29, 400, GRAY), line('+16pp Y/Y', 29, 400, GRAY)] }] },
    operating_expenses: { blocks: [{ x: 1821, top: 911, anchor: 'middle', lineGap: 10, lines: [line('Operating', 34, 800, RED_LABEL), line('expenses', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 267, anchor: 'middle', lineGap: 12, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('37% margin', 29, 400, GRAY), line('+16pp Y/Y', 29, 400, GRAY)] }] },
    tax: { blocks: [{ x: RIGHT, top: 570, anchor: 'middle', lineGap: 8, lines: [line('Tax', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: RIGHT, top: 676, anchor: 'middle', lineGap: 8, lines: [line('Interest', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 839, anchor: 'middle', lineGap: 10, lines: [line('R&D ($3.5B)', 31, 800, RED_LABEL), line('18% of revenue', 29, 400, GRAY), line('(4pp) Y/Y', 29, 400, GRAY)] }] },
    sma: { blocks: [{ x: RIGHT, top: 989, anchor: 'middle', lineGap: 10, lines: [line('SM&A ($2.9B)', 31, 800, RED_LABEL), line('15% of revenue', 29, 400, GRAY), line('(5pp) Y/Y', 29, 400, GRAY)] }] },
    acquired_iprd: { blocks: [{ x: RIGHT, top: 1123, anchor: 'middle', lineGap: 10, lines: [line('Acquired IPR&D', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('3% of revenue', 29, 400, GRAY), line('(9pp) Y/Y', 29, 400, GRAY)] }] },
    other_opex: { blocks: [{ x: RIGHT, top: 1292, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  const zhLabels = {
    cardiometabolic: valueOnly('同比 +71%', 419, 313),
    oncology: valueOnly('同比 +16%', 419, 695),
    immunology: valueOnly('同比 +11%', 419, 876),
    neuroscience: valueNotes('神经科学', '同比 +40%', 420, 1027, 206, 1106),
    other_revenue: valueNotes('其他', '同比 (12%)', 420, 1169, 207, 1247),
    other_income: { blocks: [] },
    revenue: { blocks: [{ x: 887, top: 523, anchor: 'middle', lineGap: 12, lines: [line('收入', 40, 800), line('$value', 40, 400), line('同比 +56%', 29, 400, GRAY)] }] },
    gross_profit: { blocks: [{ x: 1354, top: 346, anchor: 'middle', lineGap: 12, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 82%', 29, 400, GRAY), line('同比 (1 个百分点)', 29, 400, GRAY)] }] },
    cost_of_sales: { blocks: [{ x: 1354, top: 1092, anchor: 'middle', lineGap: 10, lines: [line('销售成本', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1821, top: 234, anchor: 'middle', lineGap: 12, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 45%', 29, 400, GRAY), line('同比 +16 个百分点', 29, 400, GRAY)] }] },
    operating_expenses: { blocks: [{ x: 1821, top: 911, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 267, anchor: 'middle', lineGap: 12, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 37%', 29, 400, GRAY), line('同比 +16 个百分点', 29, 400, GRAY)] }] },
    tax: { blocks: [{ x: RIGHT, top: 570, anchor: 'middle', lineGap: 8, lines: [line('税费', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    interest: { blocks: [{ x: RIGHT, top: 676, anchor: 'middle', lineGap: 8, lines: [line('利息', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 839, anchor: 'middle', lineGap: 10, lines: [line('研发 ($3.5B)', 31, 800, RED_LABEL), line('占收入 18%', 29, 400, GRAY), line('同比 (4 个百分点)', 29, 400, GRAY)] }] },
    sma: { blocks: [{ x: RIGHT, top: 989, anchor: 'middle', lineGap: 10, lines: [line('销售、市场与管理', 28, 800, RED_LABEL), line('$value', 28, 400, RED_LABEL), line('占收入 15%', 29, 400, GRAY), line('同比 (5 个百分点)', 29, 400, GRAY)] }] },
    acquired_iprd: { blocks: [{ x: RIGHT, top: 1123, anchor: 'middle', lineGap: 10, lines: [line('收购的 IPR&D', 28, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 3%', 29, 400, GRAY), line('同比 (9 个百分点)', 29, 400, GRAY)] }] },
    other_opex: { blocks: [{ x: RIGHT, top: 1292, anchor: 'middle', lineGap: 8, lines: [line('其他', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'eli-lilly-q1-fy26', name: 'Eli Lilly · Q1 FY26', company: 'Eli Lilly',
    meta: { company: 'Eli Lilly', title: 'Eli Lilly Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026', currency: '$', unit: 'B', decimals: 1, referenceImage: { src: 'input/processed/eli-lilly-q1-fy26.png', width: 2667, height: 1500 }, titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2174, hidePeriodStamp: true },
    render: { width: 2667, height: 1500, background: BG, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: GRAY, noteColor: GRAY, palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } }, linkTint: { source: '#858585', hub: '#858585', profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 10 } },
    annotationsSvg: `${sourceNameAnnotations(false)}${otherIncomeGuide(false)}`,
    rasterAnnotations: [
      { key: 'eli-lilly-wordmark', href: 'data/assets/raster-annotations/eli-lilly/company-wordmark.png', x: 631, y: 230, width: 488, height: 302 },
      { key: 'eli-lilly-cardiometabolic-brands', href: 'data/assets/raster-annotations/eli-lilly/cardiometabolic-brands.png', x: 31, y: 269, width: 350, height: 245 },
      { key: 'eli-lilly-oncology-verzenio', href: 'data/assets/raster-annotations/eli-lilly/oncology-verzenio.png', x: 102, y: 700, width: 208, height: 83 },
      { key: 'eli-lilly-immunology-taltz', href: 'data/assets/raster-annotations/eli-lilly/immunology-taltz.png', x: 139, y: 858, width: 155, height: 95 },
      { key: 'eli-lilly-neuroscience-emgality', href: 'data/assets/raster-annotations/eli-lilly/neuroscience-emgality.png', x: 99, y: 1010, width: 212, height: 107 },
    ],
    layout: {
      scale: 14,
      nodes: {
        cardiometabolic: { x: 388, y: 404, width: 71, height: 222 }, oncology: { x: 388, y: 787, width: 71, height: 30 }, immunology: { x: 388, y: 967, width: 71, height: 15 }, neuroscience: { x: 388, y: 1129, width: 71, height: 2 }, other_revenue: { x: 388, y: 1269, width: 71, height: 1 },
        revenue: { x: 855, y: 668, width: 70, height: 278 }, gross_profit: { x: 1322, y: 532, width: 71, height: 228 }, cost_of_sales: { x: 1322, y: 1022, width: 71, height: 48 },
        operating_profit: { x: 1790, y: 421, width: 70, height: 124 }, operating_expenses: { x: 1790, y: 786, width: 70, height: 101 }, other_income: { x: 2144, y: 443, width: 76, height: 4 },
        net_profit: { x: 2256, y: 283, width: 71, height: 103 }, tax: { x: 2256, y: 587, width: 71, height: 19 }, interest: { x: 2256, y: 710, width: 71, height: 1 }, rnd: { x: 2256, y: 857, width: 71, height: 48 }, sma: { x: 2256, y: 1014, width: 71, height: 40 }, acquired_iprd: { x: 2256, y: 1186, width: 71, height: 7 }, other_opex: { x: 2256, y: 1329, width: 71, height: 1 },
      },
      labels,
    },
    nodes: [
      ['cardiometabolic', 0, 15.8, 'source', 'Cardiometabolic Health', ['+71% Y/Y']], ['oncology', 1, 2.3, 'source', 'Oncology', ['+16% Y/Y']], ['immunology', 2, 1.2, 'source', 'Immunology', ['+11% Y/Y']], ['neuroscience', 3, 0.4, 'source', 'Neurosciences', ['+40% Y/Y']], ['other_revenue', 4, 0.2, 'source', 'Other', ['(12%) Y/Y']],
      ['revenue', 0, 19.8, 'hub', 'Revenue', ['+56% Y/Y']], ['gross_profit', 0, 16.2, 'profit', 'Gross profit', ['82% margin', '(1pp) Y/Y']], ['cost_of_sales', 1, 3.6, 'cost', 'Cost of sales'],
      ['operating_profit', 0, 8.9, 'profit', 'Operating profit', ['45% margin', '+16pp Y/Y']], ['operating_expenses', 1, 7.3, 'cost', 'Operating expenses'], ['other_income', 0, 0.2, 'profit', 'Other'], ['net_profit', 0, 7.4, 'profit', 'Net profit', ['37% margin', '+16pp Y/Y']], ['tax', 1, 1.5, 'cost', 'Tax'], ['interest', 2, 0.3, 'cost', 'Interest'],
      ['rnd', 3, 3.5, 'cost', 'R&D', ['18% of revenue', '(4pp) Y/Y']], ['sma', 4, 2.9, 'cost', 'SM&A', ['15% of revenue', '(5pp) Y/Y']], ['acquired_iprd', 5, 0.6, 'cost', 'Acquired IPR&D', ['3% of revenue', '(9pp) Y/Y']], ['other_opex', 6, 0.3, 'cost', 'Other'],
    ].map(([id, order, value, type, label, notes]) => ({ id, col: id === 'revenue' ? 1 : ['gross_profit', 'cost_of_sales'].includes(id) ? 2 : ['operating_profit', 'operating_expenses'].includes(id) ? 3 : ['other_income', 'net_profit', 'tax', 'interest', 'rnd', 'sma', 'acquired_iprd', 'other_opex'].includes(id) ? 4 : 0, order, value, type, label, ...(notes ? { notes } : {}), color: id === 'other_income' ? '#49ab49' : type === 'cost' ? RED : type === 'profit' ? GREEN : BLACK, labelColor: type === 'cost' ? RED_LABEL : type === 'profit' ? GREEN_LABEL : BLACK, linkTint: type === 'cost' ? RED_LINK : type === 'profit' ? GREEN_LINK : '#858585' })),
    links: [
      { source: 'cardiometabolic', target: 'revenue', value: 15.8, sourceWidth: 222, targetWidth: 222, y0: 515, y1: 779, sourceOrder: 0, targetOrder: 0 },
      { source: 'oncology', target: 'revenue', value: 2.3, sourceWidth: 30, targetWidth: 32, y0: 802, y1: 906, sourceOrder: 0, targetOrder: 1 },
      { source: 'immunology', target: 'revenue', value: 1.2, sourceWidth: 15, targetWidth: 17, y0: 974.5, y1: 930.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'neuroscience', target: 'revenue', value: 0.4, sourceWidth: 2, targetWidth: 5, y0: 1130, y1: 941.5, sourceOrder: 0, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 1, targetWidth: 2, y0: 1269.5, y1: 945, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 16.2, sourceWidth: 228, targetWidth: 228, y0: 782, y1: 646, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.6, sourceWidth: 50, targetWidth: 48, y0: 921, y1: 1046, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 8.9, sourceWidth: 125, targetWidth: 124, y0: 594.5, y1: 483, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.3, sourceWidth: 102, targetWidth: 101, y0: 709, y1: 836.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 7.1, sourceWidth: 100, targetWidth: 100, y0: 471, y1: 333, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 1.5, sourceWidth: 21, targetWidth: 19, y0: 532.5, y1: 596.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.3, sourceWidth: 2, targetWidth: 1, y0: 544, y1: 710.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.2, sourceWidth: 4, targetWidth: 3, y0: 445, y1: 384.5, sourceOrder: 0, targetOrder: 1, linkTint: { left: '#49ab49', right: GREEN_LINK }, curve: { x0: 2220, x1: 2256, c1x: 2245, c1y: 445, c2x: 2247, c2y: 384.5 } },
      { source: 'operating_expenses', target: 'rnd', value: 3.5, sourceWidth: 48, targetWidth: 48, y0: 810, y1: 881, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sma', value: 2.9, sourceWidth: 40, targetWidth: 40, y0: 854, y1: 1034, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'acquired_iprd', value: 0.6, sourceWidth: 8, targetWidth: 7, y0: 878, y1: 1189.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.3, sourceWidth: 4, targetWidth: 1, y0: 884, y1: 1329.5, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      preservedAnnotationText: ['Lilly', 'Mounjaro', 'Zepbound', 'Trulicity', 'Jardiance', 'Verzenio', 'Taltz', 'Emgality'],
      zh: {
        annotationsSvg: `${sourceNameAnnotations(true)}${otherIncomeGuide(true)}`, name: '礼来 · 2026 财年第一季度', meta: { title: '礼来 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 1740 },
        nodes: { cardiometabolic: { label: '心血管代谢健康', notes: ['同比 +71%'] }, oncology: { label: '肿瘤', notes: ['同比 +16%'] }, immunology: { label: '免疫', notes: ['同比 +11%'] }, neuroscience: { label: '神经科学', notes: ['同比 +40%'] }, other_revenue: { label: '其他', notes: ['同比 (12%)'] }, revenue: { label: '收入', notes: ['同比 +56%'] }, gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 (1 个百分点)'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 45%', '同比 +16 个百分点'] }, operating_expenses: { label: '运营费用' }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 37%', '同比 +16 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' }, rnd: { label: '研发' }, sma: { label: '销售、市场与管理' }, acquired_iprd: { label: '收购的 IPR&D' }, other_opex: { label: '其他' } },
        layout: { labels: zhLabels },
      },
    },
  });
})();

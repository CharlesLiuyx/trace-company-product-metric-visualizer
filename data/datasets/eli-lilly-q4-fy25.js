/* Eli Lilly Q4 FY25 income statement ($B), measured from the processed source. */
(function () {
  const BLACK = '#000000';
  const GRAY = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#d40000';
  const RED_LABEL = '#9d1300';
  const RED_LINK = '#df8585';
  const TITLE = '#155077';
  const RIGHT = 2448;
  const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const valueNotes = (name, value, note, x, top, nameX, nameTop) => ({
    blocks: [
      { x, top, anchor: 'middle', lineGap: 10, lines: [line('$value', 40, 400), line(note, 29, 400, GRAY)] },
      { x: nameX, top: nameTop, anchor: 'middle', lineGap: 8, lines: (Array.isArray(name) ? name : [name]).map((item) => line(item, 40, 800)) },
    ],
  });
  const labels = {
    cardiometabolic: valueNotes(['Cardiometabolic', 'Health'], '$14.5B', '+58% Y/Y', 419, 345, 202, 531),
    oncology: valueNotes('Oncology', '$2.6B', '(1%) Y/Y', 419, 681, 201, 773),
    immunology: valueNotes('Immunology', '$1.5B', '+18% Y/Y', 419, 855, 202, 936),
    neuroscience: valueNotes('Neurosciences', '$0.5B', '+17% Y/Y', 419, 1007, 206, 1088),
    other_revenue: valueNotes('Other', '$0.2B', '(1%) Y/Y', 419, 1134, 207, 1211),
    revenue: { blocks: [{ x: 887, top: 532, anchor: 'middle', lineGap: 12, lines: [line('Revenue', 40, 800), line('$value', 40, 400), line('+43% Y/Y', 29, 400, GRAY)] }] },
    gross_profit: { blocks: [{ x: 1354, top: 377, anchor: 'middle', lineGap: 12, lines: [line('Gross profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('83% margin', 29, 400, GRAY), line('+0pp Y/Y', 29, 400, GRAY)] }] },
    cost_of_sales: { blocks: [{ x: 1354, top: 1106, anchor: 'middle', lineGap: 10, lines: [line('Cost of sales', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1821, top: 285, anchor: 'middle', lineGap: 12, lines: [line('Operating profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('43% margin', 29, 400, GRAY), line('+5pp Y/Y', 29, 400, GRAY)] }] },
    operating_expenses: { blocks: [{ x: 1821, top: 936, anchor: 'middle', lineGap: 10, lines: [line('Operating', 34, 800, RED_LABEL), line('expenses', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 335, anchor: 'middle', lineGap: 12, lines: [line('Net profit', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('34% margin', 29, 400, GRAY), line('+2pp Y/Y', 29, 400, GRAY)] }] },
    tax: { blocks: [{ x: RIGHT, top: 598, anchor: 'middle', lineGap: 8, lines: [line('Tax', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    interest_other: { blocks: [{ x: 2456, top: 709, anchor: 'middle', lineGap: 8, lines: [line('Interest & other', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 852, anchor: 'middle', lineGap: 10, lines: [line('R&D ($3.8B)', 31, 800, RED_LABEL), line('20% of revenue', 29, 400, GRAY), line('(3pp) Y/Y', 29, 400, GRAY)] }] },
    sma: { blocks: [{ x: RIGHT, top: 999, anchor: 'middle', lineGap: 10, lines: [line('SM&A ($3.1B)', 31, 800, RED_LABEL), line('16% of revenue', 29, 400, GRAY), line('(2pp) Y/Y', 29, 400, GRAY)] }] },
    acquired_iprd: { blocks: [{ x: RIGHT, top: 1138, anchor: 'middle', lineGap: 10, lines: [line('Acquired IPR&D', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('3% of revenue', 29, 400, GRAY), line('+1pp Y/Y', 29, 400, GRAY)] }] },
    other_opex: { blocks: [{ x: RIGHT, top: 1307, anchor: 'middle', lineGap: 8, lines: [line('Other', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };
  const zhLabels = {
    cardiometabolic: valueNotes(['心血管代谢', '健康'], '$14.5B', '同比 +58%', 419, 345, 202, 531), oncology: valueNotes('肿瘤', '$2.6B', '同比 (1%)', 419, 681, 201, 773), immunology: valueNotes('免疫', '$1.5B', '同比 +18%', 419, 855, 202, 936), neuroscience: valueNotes('神经科学', '$0.5B', '同比 +17%', 419, 1007, 206, 1088), other_revenue: valueNotes('其他', '$0.2B', '同比 (1%)', 419, 1134, 207, 1211),
    revenue: { blocks: [{ x: 887, top: 532, anchor: 'middle', lineGap: 12, lines: [line('收入', 40, 800), line('$value', 40, 400), line('同比 +43%', 29, 400, GRAY)] }] },
    gross_profit: { blocks: [{ x: 1354, top: 377, anchor: 'middle', lineGap: 12, lines: [line('毛利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 83%', 29, 400, GRAY), line('同比 +0 个百分点', 29, 400, GRAY)] }] },
    cost_of_sales: { blocks: [{ x: 1354, top: 1106, anchor: 'middle', lineGap: 10, lines: [line('销售成本', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)] }] },
    operating_profit: { blocks: [{ x: 1821, top: 285, anchor: 'middle', lineGap: 12, lines: [line('营业利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 43%', 29, 400, GRAY), line('同比 +5 个百分点', 29, 400, GRAY)] }] },
    operating_expenses: { blocks: [{ x: 1821, top: 936, anchor: 'middle', lineGap: 10, lines: [line('运营费用', 34, 800, RED_LABEL), line('$value', 34, 400, RED_LABEL)] }] },
    net_profit: { blocks: [{ x: RIGHT, top: 335, anchor: 'middle', lineGap: 12, lines: [line('净利润', 40, 800, GREEN_LABEL), line('$value', 40, 400, GREEN_LABEL), line('利润率 34%', 29, 400, GRAY), line('同比 +2 个百分点', 29, 400, GRAY)] }] },
    tax: { blocks: [{ x: RIGHT, top: 598, anchor: 'middle', lineGap: 8, lines: [line('税费', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] }, interest_other: { blocks: [{ x: 2456, top: 709, anchor: 'middle', lineGap: 8, lines: [line('利息及其他', 32, 800, RED_LABEL), line('$value', 32, 400, RED_LABEL)] }] },
    rnd: { blocks: [{ x: RIGHT, top: 852, anchor: 'middle', lineGap: 10, lines: [line('研发 ($3.8B)', 31, 800, RED_LABEL), line('占收入 20%', 29, 400, GRAY), line('同比 (3 个百分点)', 29, 400, GRAY)] }] }, sma: { blocks: [{ x: RIGHT, top: 999, anchor: 'middle', lineGap: 10, lines: [line('销售、市场与管理', 28, 800, RED_LABEL), line('$value', 28, 400, RED_LABEL), line('占收入 16%', 29, 400, GRAY), line('同比 (2 个百分点)', 29, 400, GRAY)] }] }, acquired_iprd: { blocks: [{ x: RIGHT, top: 1138, anchor: 'middle', lineGap: 10, lines: [line('收购的 IPR&D', 28, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL), line('占收入 3%', 29, 400, GRAY), line('同比 +1 个百分点', 29, 400, GRAY)] }] }, other_opex: { blocks: [{ x: RIGHT, top: 1307, anchor: 'middle', lineGap: 8, lines: [line('其他', 30, 800, RED_LABEL), line('$value', 30, 400, RED_LABEL)] }] },
  };
  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'eli-lilly-q4-fy25', name: 'Eli Lilly · Q4 FY25', company: 'Eli Lilly',
    meta: { company: 'Eli Lilly', title: 'Eli Lilly Q4 FY25 Income Statement', period: 'Q4 FY25', periodNote: 'Ending Dec. 2025', currency: '$', unit: 'B', decimals: 1, referenceImage: { src: 'input/processed/eli-lilly-q4-fy25.png', width: 2667, height: 1500 }, titleX: 1334, titleY: 198, titleSize: 128, titleWeight: 800, titleTextLength: 2174, periodX: -1000, periodY: -1000, periodNoteY: -950 },
    render: { width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true, interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: GRAY, noteColor: GRAY, palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } }, linkTint: { source: '#898989', hub: '#898989', profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 10 } },
    rasterAnnotations: [
      { key: 'eli-lilly-wordmark', href: 'data/assets/raster-annotations/eli-lilly/company-wordmark.png', x: 631, y: 230, width: 488, height: 302 }, { key: 'eli-lilly-cardiometabolic-brands', href: 'data/assets/raster-annotations/eli-lilly/cardiometabolic-brands.png', x: 31, y: 269, width: 350, height: 245 }, { key: 'eli-lilly-oncology-verzenio', href: 'data/assets/raster-annotations/eli-lilly/oncology-verzenio.png', x: 102, y: 684, width: 208, height: 83 }, { key: 'eli-lilly-immunology-taltz', href: 'data/assets/raster-annotations/eli-lilly/immunology-taltz.png', x: 139, y: 836, width:155, height: 95 }, { key: 'eli-lilly-neuroscience-emgality', href: 'data/assets/raster-annotations/eli-lilly/neuroscience-emgality.png', x: 99, y: 978, width: 212, height: 107 },
    ],
    layout: { scale: 14.5, nodes: { cardiometabolic: { x: 384, y: 436, width: 72, height: 210 }, oncology: { x: 384, y: 774, width: 72, height: 38 }, immunology: { x: 384, y: 946, width: 72, height: 22 }, neuroscience: { x: 384, y: 1097, width: 72, height: 7 }, other_revenue: { x: 384, y: 1224, width: 72, height: 3 }, revenue: { x: 851, y: 678, width: 72, height: 280 }, gross_profit: { x: 1318, y: 563, width: 72, height: 231 }, cost_of_sales: { x: 1318, y: 1037, width: 72, height: 49 }, operating_profit: { x: 1785, y: 472, width: 72, height: 122 }, operating_expenses: { x: 1785, y: 805, width: 72, height: 109 }, net_profit: { x: 2252, y: 370, width: 72, height: 96 }, tax: { x: 2252, y: 622, width: 72, height: 23 }, interest_other: { x: 2252, y: 744, width: 72, height: 2 }, rnd: { x: 2252, y: 850, width: 72, height: 55 }, sma: { x: 2252, y: 1010, width: 72, height: 45 }, acquired_iprd: { x: 2252, y: 1186, width: 72, height: 7 }, other_opex: { x: 2252, y: 1337, width: 72, height: 2 } }, labels },
    nodes: [
      ['cardiometabolic', 0, 14.5, 'source', 'Cardiometabolic Health'], ['oncology', 1, 2.6, 'source', 'Oncology'], ['immunology', 2, 1.5, 'source', 'Immunology'], ['neuroscience', 3, 0.5, 'source', 'Neurosciences'], ['other_revenue', 4, 0.2, 'source', 'Other'], ['revenue', 0, 19.3, 'hub', 'Revenue'], ['gross_profit', 0, 15.9, 'profit', 'Gross profit'], ['cost_of_sales', 1, 3.4, 'cost', 'Cost of sales'], ['operating_profit', 0, 8.4, 'profit', 'Operating profit'], ['operating_expenses', 1, 7.5, 'cost', 'Operating expenses'], ['net_profit', 0, 6.6, 'profit', 'Net profit'], ['tax', 1, 1.6, 'cost', 'Tax'], ['interest_other', 2, 0.1, 'cost', 'Interest & other'], ['rnd', 3, 3.8, 'cost', 'R&D'], ['sma', 4, 3.1, 'cost', 'SM&A'], ['acquired_iprd', 5, 0.5, 'cost', 'Acquired IPR&D'], ['other_opex', 6, 0.1, 'cost', 'Other'],
    ].map(([id, order, value, type, label]) => ({ id, col: id === 'revenue' ? 1 : ['gross_profit', 'cost_of_sales'].includes(id) ? 2 : ['operating_profit', 'operating_expenses'].includes(id) ? 3 : ['net_profit', 'tax', 'interest_other', 'rnd', 'sma', 'acquired_iprd', 'other_opex'].includes(id) ? 4 : 0, order, value, type, label, color: type === 'cost' ? RED : type === 'profit' ? GREEN : BLACK, labelColor: type === 'cost' ? RED_LABEL : type === 'profit' ? GREEN_LABEL : BLACK, linkTint: type === 'cost' ? RED_LINK : type === 'profit' ? GREEN_LINK : '#898989' })),
    links: [
      ['cardiometabolic', 'revenue', 14.5, 210, 0, 0], ['oncology', 'revenue', 2.6, 38, 0, 1], ['immunology', 'revenue', 1.5, 22, 0, 2], ['neuroscience', 'revenue', 0.5, 7, 0, 3], ['other_revenue', 'revenue', 0.2, 3, 0, 4], ['revenue', 'gross_profit', 15.9, 230, 0, 0, GREEN_LINK], ['revenue', 'cost_of_sales', 3.4, 49, 1, 0], ['gross_profit', 'operating_profit', 8.4, 122, 0, 0, GREEN_LINK], ['gross_profit', 'operating_expenses', 7.5, 109, 1, 0], ['operating_profit', 'net_profit', 6.7, 96, 0, 0, GREEN_LINK], ['operating_profit', 'tax', 1.6, 23, 1, 0], ['operating_profit', 'interest_other', 0.1, 2, 2, 0], ['operating_expenses', 'rnd', 3.8, 55, 0, 0], ['operating_expenses', 'sma', 3.1, 45, 1, 0], ['operating_expenses', 'acquired_iprd', 0.5, 7, 2, 0], ['operating_expenses', 'other_opex', 0.1, 2, 3, 0],
    ].map(([source, target, value, width, sourceOrder, targetOrder, linkTint]) => ({ source, target, value, width, sourceOrder, targetOrder, ...(linkTint ? { linkTint } : {}) })),
    i18n: { preservedAnnotationText: ['Lilly', 'Mounjaro', 'Zepbound', 'Trulicity', 'Jardiance', 'Verzenio', 'Taltz', 'Emgality'], zh: { name: '礼来 · 2025 财年第四季度', meta: { title: '礼来 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 1740 }, nodes: { cardiometabolic: { label: '心血管代谢健康', notes: ['同比 +58%'] }, oncology: { label: '肿瘤', notes: ['同比 (1%)'] }, immunology: { label: '免疫', notes: ['同比 +18%'] }, neuroscience: { label: '神经科学', notes: ['同比 +17%'] }, other_revenue: { label: '其他', notes: ['同比 (1%)'] }, revenue: { label: '收入', notes: ['同比 +43%'] }, gross_profit: { label: '毛利润', notes: ['利润率 83%', '同比 +0 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 43%', '同比 +5 个百分点'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +2 个百分点'] }, tax: { label: '税费' }, interest_other: { label: '利息及其他' }, rnd: { label: '研发' }, sma: { label: '销售、市场与管理' }, acquired_iprd: { label: '收购的 IPR&D' }, other_opex: { label: '其他' } }, layout: { labels: zhLabels } } },
  });
})();

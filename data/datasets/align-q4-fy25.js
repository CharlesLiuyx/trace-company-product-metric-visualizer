/* Align Technology — Q4 FY25 income statement ($M).
 * Reconstructed from input/processed/align-q4-fy25.png as a measured,
 * fixed-layout d3-sankey. The validated company wordmark and two
 * photographic business clusters are approved runtime crops; all chart
 * geometry is native SVG. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLUE = '#009ace';
  const BLUE_LINK = '#85cae1';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_X = 2362;

  const labels = (zh) => {
    const text = zh ? {
      clear: ['透明', '矫治器'], systems: ['系统', '与服务'], revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['营业', '费用'], other: '其他', net: '净利润', tax: '税费', sga: ['销售及', '管理费用'], rnd: '研发', restructuring: '重组',
      yoy6: '同比 +6%', yoy4: '同比 +4%', yoy5: '同比 +5%', margin65: '利润率 65%', pp5: '同比 (5 个百分点)', margin15: '利润率 15%', pp0: '同比 +0 个百分点', margin13: '利润率 13%', pp3: '同比 +3 个百分点', rev42: '占收入 42%', pp1: '同比 (1 个百分点)', rev8: '占收入 8%', pp2: '同比 (2 个百分点)', rev0: '占收入 0%',
    } : {
      clear: ['Clear', 'Aligners'], systems: ['Systems', '& Services'], revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', tax: 'Tax', sga: 'SG&A', rnd: 'R&D', restructuring: 'Restructuring',
      yoy6: '+6% Y/Y', yoy4: '+4% Y/Y', yoy5: '+5% Y/Y', margin65: '65% margin', pp5: '(5pp) Y/Y', margin15: '15% margin', pp0: '+0pp Y/Y', margin13: '13% margin', pp3: '+3pp Y/Y', rev42: '42% of revenue', pp1: '(1pp) Y/Y', rev8: '8% of revenue', pp2: '(2pp) Y/Y', rev0: '0% of revenue',
    };
    const source = (valueTop, nameTop, name, yoy) => ({
      blocks: [
        { x: 413, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: yoy, size: 29, weight: 400, color: NOTE }] },
        { x: 220, top: nameTop, anchor: 'middle', lineGap: 7, lines: name.map((item) => ({ text: item, size: 40, weight: 800 })) },
      ],
    });
    const right = (top, rows) => ({ blocks: [{ x: RIGHT_X, top, anchor: 'start', lineGap: 8, lines: rows }] });
    const bold = (textValue, size = 31) => ({ text: textValue, size, weight: 800, color: RED_LABEL });
    const value = () => ({ text: '$value', size: 31, weight: 400, color: RED_LABEL });
    const note = (textValue) => ({ text: textValue, size: 28, weight: 400, color: NOTE });
    return {
      clear_aligners: source(482, 771, text.clear, text.yoy6),
      systems_services: source(1042, 1131, text.systems, text.yoy4),
      revenue: { blocks: [{ x: 879, top: 554, anchor: 'middle', lineGap: 9, lines: [{ text: text.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.yoy5, size: 29, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1347, top: 394, anchor: 'middle', lineGap: 9, lines: [{ text: text.gross, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.margin65, size: 29, weight: 400, color: NOTE }, { text: text.pp5, size: 29, weight: 400, color: NOTE }] }] },
      cost_of_revenue: { blocks: [{ x: 1347, top: 1241, anchor: 'middle', lineGap: 8, lines: [...text.cost.map((item) => ({ text: item, size: 36, weight: 800, color: RED_LABEL })), { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      operating_profit: { blocks: [{ x: 1815, top: 286, anchor: 'middle', lineGap: 9, lines: [{ text: text.operating, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.margin15, size: 29, weight: 400, color: NOTE }, { text: text.pp0, size: 29, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1815, top: 979, anchor: 'middle', lineGap: 8, lines: [...text.expenses.map((item) => ({ text: item, size: 36, weight: 800, color: RED_LABEL })), { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      other_income: { blocks: [{ x: 2150, top: 496, anchor: 'middle', lineGap: 8, lines: [{ text: text.other, size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
      net_profit: right(329, [{ text: text.net, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: text.margin13, size: 29, weight: 400, color: NOTE }, { text: text.pp3, size: 29, weight: 400, color: NOTE }]),
      tax: right(600, [bold(text.tax), value()]),
      sga: right(833, [...(Array.isArray(text.sga) ? text.sga : [text.sga]).map((item) => bold(item)), value(), note(text.rev42), note(text.pp1)]),
      rnd: right(1051, [bold(text.rnd), value(), note(text.rev8), note(text.pp2)]),
      restructuring: right(1228, [bold(text.restructuring), value(), note(text.rev0), note(text.pp3)]),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'align-q4-fy25',
    name: 'Align Technology · Q4 FY25',
    company: 'Align Technology',
    meta: {
      company: 'Align Technology',
      title: 'Align Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/align-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2055,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    rasterAnnotations: [
      { key: 'align-company-wordmark', href: 'data/assets/raster-annotations/align/align-company-wordmark.png', x: 555, y: 260, width: 635, height: 275 },
      { key: 'clear-aligners-product', href: 'data/assets/raster-annotations/align/clear-aligners-product.png', x: 80, y: 540, width: 210, height: 205 },
      { key: 'systems-services-scanner', href: 'data/assets/raster-annotations/align/systems-services-scanner.png', x: 150, y: 925, width: 140, height: 199 },
    ],
    layout: {
      scale: 0.412,
      nodes: {
        clear_aligners: { x: 377, y: 573, width: 73, height: 346 },
        systems_services: { x: 377, y: 1130, width: 73, height: 87 },
        revenue: { x: 844, y: 694, width: 72, height: 433 },
        gross_profit: { x: 1311, y: 574, width: 73, height: 283 },
        cost_of_revenue: { x: 1311, y: 1066, width: 73, height: 150 },
        operating_profit: { x: 1779, y: 467, width: 72, height: 63 },
        operating_expenses: { x: 1779, y: 734, width: 72, height: 219 },
        other_income: { x: 2114, y: 464, width: 72, height: 10 },
        net_profit: { x: 2245, y: 357, width: 73, height: 56 },
        tax: { x: 2245, y: 626, width: 73, height: 17 },
        sga: { x: 2245, y: 812, width: 73, height: 182 },
        rnd: { x: 2245, y: 1115, width: 73, height: 33 },
        restructuring: { x: 2245, y: 1263, width: 73, height: 3 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'clear_aligners', col: 0, order: 0, type: 'source', label: ['Clear', 'Aligners'], value: 838.145, notes: ['+6% Y/Y'] },
      { id: 'systems_services', col: 0, order: 1, type: 'source', label: ['Systems', '& Services'], value: 209.416, notes: ['+4% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1047.561, notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 683.587, notes: ['65% margin', '(5pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 363.974 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 155.324, notes: ['15% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 528.263 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 21.271 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 135.76, notes: ['13% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 40.835 },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 441.676, notes: ['42% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 83.036, notes: ['8% of revenue', '(2pp) Y/Y'] },
      { id: 'restructuring', col: 5, order: 4, type: 'cost', label: 'Restructuring', value: 3.551, notes: ['0% of revenue', '(3pp) Y/Y'] },
    ],
    links: [
      { source: 'clear_aligners', target: 'revenue', value: 838.145, sourceWidth: 344, targetWidth: 346, y0: 746, y1: 867, linkTint: BLUE_LINK },
      { source: 'systems_services', target: 'revenue', value: 209.416, sourceWidth: 85, targetWidth: 87, y0: 1173.5, y1: 1083.5, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 683.587, sourceWidth: 283, targetWidth: 281, y0: 835.5, y1: 715.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 363.974, sourceWidth: 150, targetWidth: 148, y0: 1052, y1: 1140.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 155.324, sourceWidth: 63, targetWidth: 63, y0: 606.5, y1: 498.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 528.263, sourceWidth: 217, targetWidth: 217, y0: 747.5, y1: 843.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 114.489, sourceWidth: 48, targetWidth: 46, y0: 491, y1: 381, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 40.835, sourceWidth: 15, targetWidth: 15, y0: 522.5, y1: 634.5, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 21.271, sourceWidth: 10, targetWidth: 7, y0: 469, y1: 408.5, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 441.676, sourceWidth: 183, targetWidth: 180, y0: 825.5, y1: 903, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 83.036, sourceWidth: 34, targetWidth: 31, y0: 934, y1: 1131.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 3.551, sourceWidth: 2, targetWidth: 1, y0: 952, y1: 1264.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '爱齐科技 · 2025 财年第四季度',
        meta: { title: '爱齐科技 2025 财年第四季度利润表', period: '2025 财年第四季度', periodNote: '截至 2025 年 12 月', titleTextLength: 2055 },
        nodes: {
          clear_aligners: { label: ['透明', '矫治器'], notes: ['同比 +6%'] }, systems_services: { label: ['系统', '与服务'], notes: ['同比 +4%'] }, revenue: { label: '收入', notes: ['同比 +5%'] }, gross_profit: { label: '毛利润', notes: ['利润率 65%', '同比 (5 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +0 个百分点'] }, operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +3 个百分点'] }, tax: { label: '税费' }, sga: { label: '销售及管理费用', notes: ['占收入 42%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 8%', '同比 (2 个百分点)'] }, restructuring: { label: '重组', notes: ['占收入 0%', '同比 (3 个百分点)'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

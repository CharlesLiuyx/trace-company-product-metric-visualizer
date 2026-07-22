/* Align Technology — Q1 FY26 income statement ($M).
 * Reconstructed from input/processed/align-q1-fy26.png as a measured,
 * fixed-layout d3-sankey. The validated company wordmark and two
 * photographic business clusters are reused from the prior Align dataset;
 * all chart geometry is native SVG. */
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
  const RIGHT_X = 2339;

  const labels = (zh) => {
    const text = zh ? {
      clear: ['透明', '矫治器'], systems: ['系统', '与服务'], revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', expenses: ['营业', '费用'], other: '其他', net: '净利润', tax: '税费', sga: ['销售及', '管理费用'], rnd: '研发', restructuring: '重组',
      yoy7: '同比 +7%', yoy1: '同比 +1%', yoy6: '同比 +6%', margin71: '利润率 71%', pp1: '同比 +1 个百分点', margin14: '利润率 14%', pp0: '同比 +0 个百分点', margin11: '利润率 11%', rev45: '占收入 45%', ppDown1: '同比 (1 个百分点)', rev9: '占收入 9%', ppFlat: '同比 (0 个百分点)', rev3: '占收入 3%', pp3: '同比 +3 个百分点',
    } : {
      clear: ['Clear', 'Aligners'], systems: ['Systems', '& Services'], revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', tax: 'Tax', sga: 'SG&A', rnd: 'R&D', restructuring: 'Restructuring',
      yoy7: '+7% Y/Y', yoy1: '+1% Y/Y', yoy6: '+6% Y/Y', margin71: '71% margin', pp1: '+1pp Y/Y', margin14: '14% margin', pp0: '+0pp Y/Y', margin11: '11% margin', rev45: '45% of revenue', ppDown1: '(1pp) Y/Y', rev9: '9% of revenue', ppFlat: '(0pp) Y/Y', rev3: '3% of revenue', pp3: '+3pp Y/Y',
    };
    const source = (valueX, valueTop, nameX, nameTop, name, yoy) => ({
      blocks: [
        { x: valueX, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: yoy, size: 29, weight: 400, color: NOTE }] },
        { x: nameX, top: nameTop, anchor: 'middle', lineGap: 7, lines: name.map((item) => ({ text: item, size: 40, weight: 800 })) },
      ],
    });
    const right = (top, rows, x = RIGHT_X) => ({ blocks: [{ x, top, anchor: 'start', lineGap: 8, lines: rows }] });
    const bold = (textValue, size = 31) => ({ text: textValue, size, weight: 800, color: RED_LABEL });
    const value = () => ({ text: '$value', size: 31, weight: 400, color: RED_LABEL });
    const note = (textValue) => ({ text: textValue, size: 28, weight: 400, color: NOTE });
    return {
      clear_aligners: source(413, 471, 214, 675, text.clear, text.yoy7),
      systems_services: source(418, 996, 220, 1080, text.systems, text.yoy1),
      revenue: { blocks: [{ x: 873, top: 536, anchor: 'middle', lineGap: 9, lines: [{ text: text.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.yoy6, size: 29, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1347, top: 388, anchor: 'middle', lineGap: 9, lines: [{ text: text.gross, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.margin71, size: 29, weight: 400, color: NOTE }, { text: text.pp1, size: 29, weight: 400, color: NOTE }] }] },
      cost_of_revenue: { blocks: [{ x: 1349, top: 1180, anchor: 'middle', lineGap: 8, lines: [...text.cost.map((item) => ({ text: item, size: 36, weight: 800, color: RED_LABEL })), { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      operating_profit: { blocks: [{ x: 1817, top: 270, anchor: 'middle', lineGap: 9, lines: [{ text: text.operating, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.margin14, size: 29, weight: 400, color: NOTE }, { text: text.pp0, size: 29, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1817, top: 978, anchor: 'middle', lineGap: 8, lines: [...text.expenses.map((item) => ({ text: item, size: 36, weight: 800, color: RED_LABEL })), { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      other_income: { blocks: [{ x: 2159, top: 464, anchor: 'middle', lineGap: 8, lines: [{ text: text.other, size: 31, weight: 800 }, { text: '$value', size: 29, weight: 400 }] }] },
      net_profit: right(308, [{ text: text.net, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: text.margin11, size: 29, weight: 400, color: NOTE }, { text: text.pp1, size: 29, weight: 400, color: NOTE }]),
      tax: right(588, [bold(text.tax), value()], 2389),
      sga: right(864, [...(Array.isArray(text.sga) ? text.sga : [text.sga]).map((item) => bold(item)), value(), note(text.rev45), note(text.ppDown1)]),
      rnd: right(1058, [bold(text.rnd), value(), note(text.rev9), note(text.ppFlat)], 2352),
      restructuring: right(1246, [bold(text.restructuring), value(), note(text.rev3), note(text.pp3)], 2333),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'align-q1-fy26',
    name: 'Align Technology · Q1 FY26',
    company: 'Align Technology',
    meta: {
      company: 'Align Technology',
      title: 'Align Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/align-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2055,
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
      palette: { source: { node: BLUE, label: BLUE }, hub: { node: BLUE, label: BLUE }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    rasterAnnotations: [
      { key: 'align-company-wordmark', href: 'data/assets/raster-annotations/align/align-company-wordmark.png', x: 559, y: 255, width: 635, height: 275 },
      { key: 'clear-aligners-product', href: 'data/assets/raster-annotations/align/clear-aligners-product.png', x: 80, y: 444, width: 210, height: 205 },
      { key: 'systems-services-scanner', href: 'data/assets/raster-annotations/align/systems-services-scanner.png', x: 150, y: 884, width: 140, height: 199 },
    ],
    layout: {
      scale: 0.372,
      nodes: {
        clear_aligners: { x: 377, y: 563, width: 73, height: 319 },
        systems_services: { x: 377, y: 1094, width: 73, height: 69 },
        revenue: { x: 844, y: 678, width: 72, height: 388 },
        gross_profit: { x: 1311, y: 565, width: 73, height: 275 },
        cost_of_revenue: { x: 1311, y: 1043, width: 73, height: 113 },
        operating_profit: { x: 1781, y: 448, width: 72, height: 53 },
        operating_expenses: { x: 1781, y: 728, width: 72, height: 221 },
        other_income: { x: 2122, y: 447, width: 73, height: 5 },
        net_profit: { x: 2245, y: 346, width: 73, height: 42 },
        tax: { x: 2245, y: 614, width: 73, height: 13 },
        sga: { x: 2245, y: 848, width: 73, height: 173 },
        rnd: { x: 2245, y: 1122, width: 73, height: 37 },
        restructuring: { x: 2245, y: 1279, width: 73, height: 11 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'clear_aligners', col: 0, order: 0, type: 'source', label: ['Clear', 'Aligners'], value: 856, notes: ['+7% Y/Y'] },
      { id: 'systems_services', col: 0, order: 1, type: 'source', label: ['Systems', '& Services'], value: 184, notes: ['+1% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1040, notes: ['+6% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 737, notes: ['71% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 304 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 142, notes: ['14% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 595 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 7, color: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 113, notes: ['11% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 36 },
      { id: 'sga', col: 5, order: 2, type: 'cost', label: 'SG&A', value: 465, notes: ['45% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 99, notes: ['9% of revenue', '(0pp) Y/Y'] },
      { id: 'restructuring', col: 5, order: 4, type: 'cost', label: 'Restructuring', value: 31, notes: ['3% of revenue', '+3pp Y/Y'] },
    ],
    links: [
      { source: 'clear_aligners', target: 'revenue', value: 856, sourceOrder: 0, targetOrder: 0, sourceWidth: 317, targetWidth: 319, y0: 722.5, y1: 837.5, linkTint: BLUE_LINK },
      { source: 'systems_services', target: 'revenue', value: 184, sourceOrder: 0, targetOrder: 1, sourceWidth: 67, targetWidth: 69, y0: 1128.5, y1: 1031.5, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 737, sourceOrder: 0, targetOrder: 0, sourceWidth: 275, targetWidth: 273, y0: 815.5, y1: 702.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 304, sourceOrder: 1, targetOrder: 0, sourceWidth: 113, targetWidth: 111, y0: 1009.5, y1: 1099.5, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 142, sourceOrder: 0, targetOrder: 0, sourceWidth: 53, targetWidth: 53, y0: 591.5, y1: 474.5, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 595, sourceOrder: 1, targetOrder: 0, sourceWidth: 221, targetWidth: 219, y0: 729.5, y1: 838.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 106, sourceOrder: 0, targetOrder: 0, sourceWidth: 40, targetWidth: 40, y0: 468, y1: 366, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 36, sourceOrder: 1, targetOrder: 0, sourceWidth: 13, targetWidth: 11, y0: 494.5, y1: 620.5, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 7, sourceOrder: 0, targetOrder: 1, sourceWidth: 3, targetWidth: 2, y0: 449.5, y1: 387, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sga', value: 465, sourceOrder: 0, targetOrder: 0, sourceWidth: 173, targetWidth: 171, y0: 814.5, y1: 934.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 99, sourceOrder: 1, targetOrder: 0, sourceWidth: 37, targetWidth: 35, y0: 919.5, y1: 1140.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 31, sourceOrder: 2, targetOrder: 0, sourceWidth: 11, targetWidth: 9, y0: 943.5, y1: 1284.5, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '爱齐科技 · 2026 财年第一季度',
        meta: { title: '爱齐科技 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 2055 },
        nodes: {
          clear_aligners: { label: ['透明', '矫治器'], notes: ['同比 +7%'] }, systems_services: { label: ['系统', '与服务'], notes: ['同比 +1%'] }, revenue: { label: '收入', notes: ['同比 +6%'] }, gross_profit: { label: '毛利润', notes: ['利润率 71%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 +0 个百分点'] }, operating_expenses: { label: ['营业', '费用'] }, other_income: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +1 个百分点'] }, tax: { label: '税费' }, sga: { label: '销售及管理费用', notes: ['占收入 45%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 9%', '同比 (0 个百分点)'] }, restructuring: { label: '重组', notes: ['占收入 3%', '同比 +3 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

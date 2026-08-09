/* Align Technology — Q2 FY26 income statement ($M).
 * Reconstructed from input/processed/align-q2-fy26.png as a measured,
 * fixed-layout d3-sankey. The validated company wordmark and two
 * photographic business clusters are reused from prior Align datasets;
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
      yoy8: '同比 +8%', yoy11: '同比 (11%)', yoy4: '同比 +4%', margin72: '利润率 72%', pp2: '同比 +2 个百分点', margin15: '利润率 15%', ppDown2: '同比 (2 个百分点)', margin10: '利润率 10%', rev44: '占收入 44%', ppDown1: '同比 (1 个百分点)', rev10: '占收入 10%', pp0: '同比 +0 个百分点', rev4: '占收入 4%', pp4: '同比 +4 个百分点',
    } : {
      clear: ['Clear', 'Aligners'], systems: ['Systems', '& Services'], revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', expenses: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', tax: 'Tax', sga: 'SG&A', rnd: 'R&D', restructuring: 'Restructuring',
      yoy8: '+8% Y/Y', yoy11: '(11%) Y/Y', yoy4: '+4% Y/Y', margin72: '72% margin', pp2: '+2pp Y/Y', margin15: '15% margin', ppDown2: '(2pp) Y/Y', margin10: '10% margin', rev44: '44% of revenue', ppDown1: '(1pp) Y/Y', rev10: '10% of revenue', pp0: '+0pp Y/Y', rev4: '4% of revenue', pp4: '+4pp Y/Y',
    };
    const source = (valueX, valueTop, nameX, nameTop, name, yoy) => ({
      blocks: [
        { x: valueX, top: valueTop, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39, weight: 400 }, { text: yoy, size: 29, weight: 400, color: NOTE }] },
        { x: nameX, top: nameTop, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 7, lines: name.map((item) => ({ text: item, size: 40, weight: 800 })) },
      ],
    });
    const right = (top, rows, x = RIGHT_X) => ({ blocks: [{ x, top, anchor: 'start', lineGap: 8, lines: rows }] });
    const bold = (textValue, size = 31) => ({ text: textValue, size, weight: 800, color: RED_LABEL });
    const value = () => ({ text: '$value', size: 31, weight: 400, color: RED_LABEL });
    const note = (textValue) => ({ text: textValue, size: 28, weight: 400, color: NOTE });
    return {
      clear_aligners: source(413, 478, 214, 682, text.clear, text.yoy8),
      systems_services: source(418, 976, 220, 1061, text.systems, text.yoy11),
      revenue: { blocks: [{ x: 879, top: 527, anchor: 'middle', lineGap: 9, lines: [{ text: text.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.yoy4, size: 29, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1347, top: 386, anchor: 'middle', lineGap: 9, lines: [{ text: text.gross, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.margin72, size: 29, weight: 400, color: NOTE }, { text: text.pp2, size: 29, weight: 400, color: NOTE }] }] },
      cost_of_revenue: { blocks: [{ x: 1349, top: 1169, anchor: 'middle', lineGap: 8, lines: [...text.cost.map((item) => ({ text: item, size: 36, weight: 800, color: RED_LABEL })), { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      operating_profit: { blocks: [{ x: 1810, top: 286, anchor: 'middle', lineGap: 9, lines: [{ text: text.operating, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: text.margin15, size: 29, weight: 400, color: NOTE }, { text: text.ppDown2, size: 29, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1817, top: 963, anchor: 'middle', lineGap: 8, lines: [...text.expenses.map((item) => ({ text: item, size: 36, weight: 800, color: RED_LABEL })), { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
      net_profit: right(308, [{ text: text.net, size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 39, weight: 400, color: GREEN_LABEL }, { text: text.margin10, size: 29, weight: 400, color: NOTE }, { text: text.ppDown2, size: 29, weight: 400, color: NOTE }]),
      tax: right(592, [bold(text.tax), value()], 2389),
      other_expense: right(712, [bold(text.other), value()], 2394),
      sga: right(853, [...(Array.isArray(text.sga) ? text.sga : [text.sga]).map((item) => bold(item)), value(), note(text.rev44), note(text.ppDown1)]),
      rnd: right(1044, [bold(text.rnd), value(), note(text.rev10), note(text.pp0)], 2344),
      restructuring: right(1222, [bold(text.restructuring), value(), note(text.rev4), note(text.pp4)], 2328),
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'align-q2-fy26',
    name: 'Align Technology · Q2 FY26',
    company: 'Align Technology',
    meta: {
      company: 'Align Technology',
      title: 'Align Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Jun. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/align-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'align-company-wordmark', href: 'data/assets/raster-annotations/align/align-company-wordmark.png', x: 555, y: 260, width: 635, height: 275 },
      { key: 'clear-aligners-product', href: 'data/assets/raster-annotations/align/clear-aligners-product.png', x: 80, y: 451, width: 210, height: 205 },
      { key: 'systems-services-scanner', href: 'data/assets/raster-annotations/align/systems-services-scanner.png', x: 150, y: 864, width: 140, height: 199 },
    ],
    layout: {
      scale: 0.342,
      nodes: {
        clear_aligners: { x: 377, y: 571, width: 73, height: 297 },
        systems_services: { x: 377, y: 1075, width: 73, height: 63 },
        revenue: { x: 844, y: 668, width: 72, height: 361 },
        gross_profit: { x: 1311, y: 567, width: 73, height: 257 },
        cost_of_revenue: { x: 1311, y: 1042, width: 73, height: 102 },
        operating_profit: { x: 1779, y: 466, width: 72, height: 52 },
        operating_expenses: { x: 1779, y: 733, width: 72, height: 205 },
        net_profit: { x: 2245, y: 352, width: 73, height: 37 },
        tax: { x: 2245, y: 619, width: 73, height: 14 },
        other_expense: { x: 2245, y: 747, width: 73, height: 3 },
        sga: { x: 2245, y: 848, width: 73, height: 159 },
        rnd: { x: 2245, y: 1103, width: 73, height: 35 },
        restructuring: { x: 2245, y: 1242, width: 73, height: 14 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'clear_aligners', col: 0, order: 0, type: 'source', label: ['Clear', 'Aligners'], value: 871, notes: ['+8% Y/Y'] },
      { id: 'systems_services', col: 0, order: 1, type: 'source', label: ['Systems', '& Services'], value: 185, notes: ['(11%) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1056, notes: ['+4% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 757, notes: ['72% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 299 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 154, notes: ['15% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 603 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 108, notes: ['10% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 40 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 5 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 463, notes: ['44% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 102, notes: ['10% of revenue', '+0pp Y/Y'] },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 39, notes: ['4% of revenue', '+4pp Y/Y'] },
    ],
    links: [
      { source: 'clear_aligners', target: 'revenue', value: 871, sourceOrder: 0, targetOrder: 0, sourceWidth: 295, targetWidth: 298, y0: 719.5, y1: 817, linkTint: BLUE_LINK },
      { source: 'systems_services', target: 'revenue', value: 185, sourceOrder: 0, targetOrder: 1, sourceWidth: 61, targetWidth: 63, y0: 1106.5, y1: 997.5, linkTint: BLUE_LINK },
      { source: 'revenue', target: 'gross_profit', value: 757, sourceOrder: 0, targetOrder: 0, sourceWidth: 259, targetWidth: 255, y0: 797.5, y1: 695.5, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 299, sourceOrder: 1, targetOrder: 0, sourceWidth: 102, targetWidth: 100, y0: 978, y1: 1093, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 154, sourceOrder: 0, targetOrder: 0, sourceWidth: 52, targetWidth: 52, y0: 593, y1: 492, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 603, sourceOrder: 1, targetOrder: 0, sourceWidth: 205, targetWidth: 203, y0: 721.5, y1: 835.5, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 108, sourceOrder: 0, targetOrder: 0, sourceWidth: 36, targetWidth: 35, y0: 484, y1: 370, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 40, sourceOrder: 1, targetOrder: 0, sourceWidth: 14, targetWidth: 12, y0: 509, y1: 626, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'other_expense', value: 5, sourceOrder: 2, targetOrder: 0, sourceWidth: 2, targetWidth: 3, y0: 517, y1: 748.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sga', value: 463, sourceOrder: 0, targetOrder: 0, sourceWidth: 157, targetWidth: 157, y0: 811.5, y1: 927.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 102, sourceOrder: 1, targetOrder: 0, sourceWidth: 35, targetWidth: 33, y0: 907.5, y1: 1120.5, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'restructuring', value: 39, sourceOrder: 2, targetOrder: 0, sourceWidth: 13, targetWidth: 12, y0: 931.5, y1: 1249, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '爱齐科技 · 2026 财年第二季度',
        meta: { title: '爱齐科技 2026 财年第二季度利润表', period: '2026 财年第二季度', periodNote: '截至 2026 年 6 月', titleTextLength: 2055 },
        nodes: {
          clear_aligners: { label: ['透明', '矫治器'], notes: ['同比 +8%'] }, systems_services: { label: ['系统', '与服务'], notes: ['同比 (11%)'] }, revenue: { label: '收入', notes: ['同比 +4%'] }, gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 +2 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (2 个百分点)'] }, operating_expenses: { label: ['营业', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (2 个百分点)'] }, tax: { label: '税费' }, other_expense: { label: '其他' }, sga: { label: '销售及管理费用', notes: ['占收入 44%', '同比 (1 个百分点)'] }, rnd: { label: '研发', notes: ['占收入 10%', '同比 +0 个百分点'] }, restructuring: { label: '重组', notes: ['占收入 4%', '同比 +4 个百分点'] },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

/* PepsiCo Q1 FY23 fixed-layout income statement. Every node bbox and label
 * group is measured from input/processed/pepsico-q1-fy23.png. The Source's
 * 1px Other face is preserved at native height; accepted company-level icon
 * assets are reused instead of producing near-duplicate crops. */
(function () {
  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const OTHER_GREEN = '#008e00';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';

  const line = (text, size, extra = {}) => ({ text, size, weight: 400, ...extra });
  const block = (x, top, lines, extra = {}) => ({ x, top, anchor: 'middle', lineGap: 12, lines, ...extra });
  const valueAndYoy = (x, top, yoy, lineGap = 13) => block(x, top, [
    line('$value', 40), line(yoy, 29, { color: NOTE }),
  ], { lineGap });
  const side = (x, top, labels, size = 40, extra = {}) => block(
    x, top, (Array.isArray(labels) ? labels : [labels]).map((text) => line(text, size, { weight: 800 })),
    { lineGap: 8, ...extra },
  );
  const profit = (x, top, label, margin, yoy) => block(x, top, [
    line(label, 40, { weight: 800, color: GREEN_LABEL }),
    line('$value', 40, { color: GREEN_LABEL }),
    line(margin, 29, { color: NOTE }),
    line(yoy, 29, { color: NOTE }),
  ]);

  function labels(zh = false) {
    const t = zh ? {
      fritoLay: '菲多利', quaker: ['桂格', '食品'], beverages: ['百事', '饮料'],
      northAmerica: '北美', latam: '拉丁美洲', europe: '欧洲', amesa: ['非洲、中东', '及南亚'], apac: '亚太',
      revenue: '收入', gross: '毛利润', cost: ['收入', '成本'], operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'], net: '净利润', other: '其他', tax: '税费', interest: '利息',
      sga: ['销售、一般及', '管理费用'],
      yoy: {
        fritoLay: '同比 +15%', quaker: '同比 +9%', beverages: '同比 +8%', northAmerica: '同比 +11%',
        latam: '同比 21%', europe: '同比 +5%', amesa: '同比 +1%', apac: '同比 (1%)', revenue: '同比 +10%',
      },
      grossMargin: '利润率 55%', grossYoy: '同比 +1 个百分点', operatingMargin: '利润率 15%',
      operatingYoy: '同比 (18 个百分点)', netMargin: '利润率 11%', netYoy: '同比 (15 个百分点)',
      sgaNote: '占收入 41%',
    } : {
      fritoLay: 'Frito-Lay', quaker: ['Quaker', 'Foods'], beverages: ['PepsiCo', 'Beverages'],
      northAmerica: 'North America', latam: 'LATAM', europe: 'Europe',
      amesa: 'Africa, Middle East & South Asia', apac: 'APAC', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      net: 'Net profit', other: 'Other', tax: 'Tax', interest: 'Interest', sga: 'SG&A',
      yoy: {
        fritoLay: '+15% Y/Y', quaker: '+9% Y/Y', beverages: '+8% Y/Y', northAmerica: '+11% Y/Y',
        latam: '21% Y/Y', europe: '+5% Y/Y', amesa: '+1% Y/Y', apac: '(1%) Y/Y', revenue: '+10% Y/Y',
      },
      grossMargin: '55% margin', grossYoy: '+1pp Y/Y', operatingMargin: '15% margin',
      operatingYoy: '(18pp) Y/Y', netMargin: '11% margin', netYoy: '(15pp) Y/Y', sgaNote: '41% of revenue',
    };

    return {
      frito_lay: { blocks: [valueAndYoy(457, 273, t.yoy.fritoLay), side(300, 407, t.fritoLay)] },
      quaker_foods: { blocks: [valueAndYoy(457, 503, t.yoy.quaker), side(300, zh ? 563 : 560, t.quaker, zh ? 36 : 40)] },
      pepsico_beverages: { blocks: [valueAndYoy(457, 612, t.yoy.beverages), side(300, 742, t.beverages)] },
      north_america: { blocks: [block(847, 367, [
        line(t.northAmerica, 40, { weight: 800 }), line('$value', 40), line(t.yoy.northAmerica, 29, { color: NOTE }),
      ])] },
      latam: { blocks: [valueAndYoy(831, 798, t.yoy.latam), side(768, 887, t.latam, zh ? 36 : 40, { anchor: 'end', semanticRole: 'aligned-side-label-column' })] },
      europe: { blocks: [valueAndYoy(828, 940, t.yoy.europe), side(768, 1031, t.europe, 40, { anchor: 'end', semanticRole: 'aligned-side-label-column' })] },
      amesa: { blocks: [valueAndYoy(826, 1089, t.yoy.amesa, 4), side(768, zh ? 1142 : 1161, t.amesa, zh ? 34 : 37, { anchor: 'end', semanticRole: 'aligned-side-label-column' })] },
      apac: { blocks: [valueAndYoy(826, 1215, t.yoy.apac, 4), side(700, 1291, t.apac)] },
      revenue: { blocks: [block(1207, 554, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy.revenue, 29, { color: NOTE }),
      ])] },
      gross_profit: { blocks: [profit(1562, 372, t.gross, t.grossMargin, t.grossYoy)] },
      cost_of_revenue: { blocks: [block(1584, 1213, [
        ...(Array.isArray(t.cost) ? t.cost : [t.cost]).map((text) => line(text, 40, { weight: 800, color: RED_LABEL })),
        line('$value', 40, { color: RED_LABEL }),
      ])] },
      operating_profit: { blocks: [profit(1988, 289, t.operatingProfit, t.operatingMargin, t.operatingYoy)] },
      operating_expenses: { blocks: [block(1988, 884, [
        ...(Array.isArray(t.operatingExpenses) ? t.operatingExpenses : [t.operatingExpenses]).map((text) => line(text, 36, { weight: 800, color: RED_LABEL })),
        line('$value', 36, { color: RED_LABEL }),
      ])] },
      net_profit: { blocks: [profit(2490, 338, t.net, t.netMargin, t.netYoy)] },
      other: { blocks: [block(2205, 518, [
        line(t.other, 30, { weight: 800, color: OTHER_GREEN }), line('$value', 30, { color: OTHER_GREEN }),
      ], { lineGap: 8 })] },
      tax: { blocks: [block(2500, 589, [
        line(t.tax, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }),
      ], { lineGap: 8 })] },
      interest: { blocks: [block(2500, 712, [
        line(t.interest, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }),
      ], { lineGap: 8 })] },
      sga: { blocks: [block(2500, 877, [
        ...(Array.isArray(t.sga) ? t.sga : [t.sga]).map((text) => line(text, zh ? 31 : 34, { weight: 800, color: RED_LABEL })),
        line('$value', 34, { color: RED_LABEL }), line(t.sgaNote, 29, { color: NOTE }),
      ], { lineGap: 8 })] },
    };
  }

  const data = {
    key: 'pepsico-q1-fy23',
    name: 'PepsiCo · Q1 FY23',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q1 FY23 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: '<g data-annotation-clearance="pepsico-globe-amesa-q4-fy23"><rect x="33" y="1135" width="83" height="82" fill="transparent"/></g>',
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 966, y: 439, width: 475, height: 76 },
      { key: 'pepsico-frito-lay-q4-fy23', href: 'data/assets/raster-annotations/pepsico/frito-lay-q4-fy23.png', x: 12, y: 368, width: 148, height: 139 },
      { key: 'pepsico-quaker-q4-fy23', href: 'data/assets/raster-annotations/pepsico/quaker-q4-fy23.png', x: 11, y: 553, width: 139, height: 124 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 14, y: 715, width: 143, height: 144 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 774, y: 269, width: 98, height: 98 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1137, y: 303, width: 116, height: 117 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 523, y: 858, width: 92, height: 92 },
      { key: 'pepsico-globe-europe-q4-fy23', href: 'data/assets/raster-annotations/pepsico/globe-europe-q4-fy23.png', x: 517, y: 1010, width: 93, height: 93 },
      { key: 'pepsico-globe-amesa-q4-fy23', href: 'data/assets/raster-annotations/pepsico/globe-amesa-q4-fy23.png', x: 33, y: 1135, width: 83, height: 82 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 540, y: 1268, width: 91, height: 91 },
    ],
    layout: {
      scale: 21,
      nodes: {
        frito_lay: { x: 422, y: 371, width: 71, height: 115 },
        quaker_foods: { x: 422, y: 600, width: 71, height: 15 },
        pepsico_beverages: { x: 422, y: 731, width: 71, height: 119 },
        north_america: { x: 796, y: 515, width: 70, height: 253 },
        latam: { x: 796, y: 892, width: 70, height: 35 },
        europe: { x: 793, y: 1036, width: 70, height: 38 },
        amesa: { x: 791, y: 1175, width: 70, height: 19 },
        apac: { x: 791, y: 1305, width: 70, height: 20 },
        revenue: { x: 1172, y: 701, width: 70, height: 373 },
        gross_profit: { x: 1544, y: 565, width: 70, height: 203 },
        cost_of_revenue: { x: 1549, y: 1032, width: 70, height: 165 },
        operating_profit: { x: 1952, y: 481, width: 71, height: 52 },
        operating_expenses: { x: 1960, y: 720, width: 70, height: 149 },
        other: { x: 2170, y: 510, width: 70, height: 1 },
        net_profit: { x: 2290, y: 371, width: 71, height: 38 },
        tax: { x: 2290, y: 638, width: 71, height: 9 },
        interest: { x: 2290, y: 743, width: 71, height: 3 },
        sga: { x: 2290, y: 867, width: 71, height: 150 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'frito_lay', col: 0, order: 0, type: 'source', label: 'Frito-Lay', value: 5.6, notes: ['+15% Y/Y'] },
      { id: 'quaker_foods', col: 0, order: 1, type: 'source', label: ['Quaker', 'Foods'], value: 0.8, notes: ['+9% Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 2, type: 'source', label: ['PepsiCo', 'Beverages'], value: 5.8, notes: ['+8% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 12.2, notes: ['+11% Y/Y'] },
      { id: 'latam', col: 1, order: 1, type: 'source', label: 'LATAM', value: 1.8, notes: ['21% Y/Y'] },
      { id: 'europe', col: 1, order: 2, type: 'source', label: 'Europe', value: 1.9, notes: ['+5% Y/Y'] },
      { id: 'amesa', col: 1, order: 3, type: 'source', label: 'Africa, Middle East & South Asia', value: 1.0, valueText: '$1.0B', notes: ['+1% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.0, valueText: '$1.0B', notes: ['(1%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 17.8, notes: ['+10% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 9.9, notes: ['55% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.0, valueText: '($8.0B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, notes: ['15% margin', '(18pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.2 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.1 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['11% margin', '(15pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', col: 6, order: 2, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 7.2, notes: ['41% of revenue'] },
    ],
    links: [
      { source: 'frito_lay', target: 'north_america', value: 5.6, sourceWidth: 115, targetWidth: 116, y0: 428.5, y1: 573, sourceOrder: 0, targetOrder: 0 },
      { source: 'quaker_foods', target: 'north_america', value: 0.8, width: 15, y0: 607.5, y1: 638.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'pepsico_beverages', target: 'north_america', value: 5.8, sourceWidth: 119, targetWidth: 122, y0: 790.5, y1: 707, sourceOrder: 0, targetOrder: 2 },
      { source: 'north_america', target: 'revenue', value: 12.2, width: 253, y0: 641.5, y1: 827.5, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 1.8, width: 35, y0: 909.5, y1: 971.5, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'europe', target: 'revenue', value: 1.9, width: 38, y0: 1055, y1: 1008, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'amesa', target: 'revenue', value: 1.0, width: 19, y0: 1184.5, y1: 1036.5, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.0, sourceWidth: 20, targetWidth: 28, y0: 1315, y1: 1060, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 9.9, sourceWidth: 205, targetWidth: 203, y0: 803.5, y1: 666.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.0, sourceWidth: 168, targetWidth: 165, y0: 990, y1: 1114.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, sourceWidth: 52, targetWidth: 52, y0: 591, y1: 507, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.2, sourceWidth: 151, targetWidth: 149, y0: 692.5, y1: 794.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.8, sourceWidth: 37, targetWidth: 37, y0: 499.5, y1: 389.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, width: 9, y0: 522.5, y1: 642.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 6, targetWidth: 3, y0: 530, y1: 744.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.1, width: 1, y0: 510.5, y1: 408.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 7.2, sourceWidth: 149, targetWidth: 150, y0: 794.5, y1: 942, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2023 财年第一季度',
        meta: { title: '百事公司 2023 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 2000 },
        nodes: {
          frito_lay: { label: '菲多利', notes: ['同比 +15%'] }, quaker_foods: { label: ['桂格', '食品'], notes: ['同比 +9%'] },
          pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +8%'] }, north_america: { label: '北美', notes: ['同比 +11%'] },
          latam: { label: '拉丁美洲', notes: ['同比 21%'] }, europe: { label: '欧洲', notes: ['同比 +5%'] },
          amesa: { label: '非洲、中东及南亚', notes: ['同比 +1%'] }, apac: { label: '亚太', notes: ['同比 (1%)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] }, gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 (18 个百分点)'] },
          operating_expenses: { label: '运营费用' }, other: { label: '其他' }, net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (15 个百分点)'] },
          tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用', notes: ['占收入 41%'] },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();

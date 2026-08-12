/* PepsiCo Q2 FY23 fixed-layout income statement. All geometry and labels are
 * measured at native scale from input/processed/pepsico-q2-fy23.png. */
(function () {
  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const line = (text, size, options = {}) => ({ text, size, weight: 400, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 12, lines, ...options });
  const valueYoy = (x, top, yoy) => block(x, top, [line('$value', 40), line(yoy, 29, { color: NOTE })], { lineGap: 13 });
  const nameBlock = (x, top, names, size = 40, options = {}) => block(x, top, (Array.isArray(names) ? names : [names]).map((text) => line(text, size, { weight: 800 })), { lineGap: 8, ...options });

  function labels(zh = false) {
    const t = zh ? {
      frito: '菲多利', quaker: ['桂格', '食品'], beverages: ['百事', '饮料'], north: '北美', latam: '拉丁美洲', europe: '欧洲',
      amesa: ['非洲、中东', '及南亚'], apac: '亚太', revenue: '收入', gross: '毛利润', cost: ['收入', '成本'],
      op: '营业利润', opex: ['运营', '费用'], other: '其他', net: '净利润', tax: '税费', interest: '利息', sga: ['销售、一般及', '行政费用'],
      yoy: (v) => `同比 ${v}`, margin: (v) => `利润率 ${v}`, pp: (v) => `同比 ${v} 个百分点`, revenueShare: '占收入 38%',
    } : {
      frito: 'Frito-Lay', quaker: ['Quaker', 'Foods'], beverages: ['PepsiCo', 'Beverages'], north: 'North America', latam: 'LATAM', europe: 'Europe',
      amesa: ['Africa, Middle East & South Asia'], apac: 'APAC', revenue: 'Revenue', gross: 'Gross profit', cost: ['Cost of', 'revenue'],
      op: 'Operating profit', opex: ['Operating', 'expenses'], other: 'Other', net: 'Net profit', tax: 'Tax', interest: 'Interest', sga: ['SG&A'],
      yoy: (v) => `${v} Y/Y`, margin: (v) => `${v} margin`, pp: (v) => `${v}pp Y/Y`, revenueShare: '38% of revenue',
    };
    const profit = (x, top, name, value, margin, pp) => block(x, top, [
      line(name, 40, { weight: 800, color: GREEN_LABEL }), line(value || '$value', 40, { color: GREEN_LABEL }),
      line(t.margin(margin), 29, { color: NOTE }), line(t.pp(pp), 29, { color: NOTE }),
    ]);
    return {
      frito_lay: { blocks: [valueYoy(461, 257, t.yoy('+14%')), nameBlock(307, 378, t.frito)] },
      quaker_foods: { blocks: [valueYoy(461, 500, t.yoy('+1%')), nameBlock(294, 554, t.quaker)] },
      pepsico_beverages: { blocks: [valueYoy(461, 650, t.yoy('+10%')), nameBlock(246, 752, t.beverages)] },
      north_america: { blocks: [block(831, 395, [line(t.north, 40, { weight: 800 }), line('$value', 40), line(t.yoy('+11%'), 29, { color: NOTE })])] },
      latam: { blocks: [valueYoy(832, 780, t.yoy('+18%')), nameBlock(703, 871, t.latam, zh ? 36 : 40)] },
      europe: { blocks: [valueYoy(832, 931, t.yoy('+13%')), nameBlock(713, 1023, t.europe)] },
      amesa: { blocks: [valueYoy(834, 1089, t.yoy('(8%)')), nameBlock(457, zh ? 1158 : 1167, t.amesa, zh ? 32 : 40)] },
      apac: { blocks: [valueYoy(836, 1208, t.yoy('+1%')), nameBlock(716, 1297, t.apac)] },
      revenue: { blocks: [block(1208, 549, [line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy('+10%'), 29, { color: NOTE })])] },
      gross_profit: { blocks: [profit(1575, 411, t.gross, '$value', '55%', '+1')] },
      cost_of_revenue: { blocks: [block(1582, 1202, [...t.cost.map((v) => line(v, 40, { weight: 800, color: RED_LABEL })), line('$value', 40, { color: RED_LABEL })])] },
      operating_profit: { blocks: [profit(1950, 332, t.op, '$value', '16%', '+6')] },
      operating_expenses: { blocks: [block(1938, 884, [...t.opex.map((v) => line(v, 36, { weight: 800, color: RED_LABEL })), line('$value', 36, { color: RED_LABEL })])] },
      other: { blocks: [block(2213, 554, [line(t.other, 34, { weight: 800, color: GREEN_LABEL }), line('$value', 34, { color: GREEN_LABEL })], { lineGap: 8 })] },
      net_profit: { blocks: [profit(2487, 390, t.net, '$value', '12%', '+7')] },
      tax: { blocks: [block(2489, 636, [line(t.tax, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      interest: { blocks: [block(2493, 754, [line(t.interest, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      sga: { blocks: [block(2491, 939, [...t.sga.map((text) => line(text, zh ? 28 : 34, { weight: 800, color: RED_LABEL })), line('$value', 34, { color: RED_LABEL }), line(t.revenueShare, 29, { color: NOTE })], { lineGap: 8 })] },
    };
  }

  const data = {
    key: 'pepsico-q2-fy23', name: 'PepsiCo · Q2 FY23', company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q2 FY23 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: '#155077', subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'pepsico-q2-fy23-company-logo', href: 'data/assets/raster-annotations/pepsico-q2-fy23/company-logo.png', x: 975, y: 267, width: 470, height: 71 },
      { key: 'pepsico-q2-fy23-lays', href: 'data/assets/raster-annotations/pepsico-q2-fy23/lays.png', x: 12, y: 349, width: 148, height: 139 },
      { key: 'pepsico-q2-fy23-quaker', href: 'data/assets/raster-annotations/pepsico-q2-fy23/quaker.png', x: 11, y: 553, width: 139, height: 124 },
      { key: 'pepsico-q2-fy23-pepsi', href: 'data/assets/raster-annotations/pepsico-q2-fy23/pepsi.png', x: 13, y: 725, width: 145, height: 146 },
      { key: 'pepsico-q2-fy23-north-america', href: 'data/assets/raster-annotations/pepsico-q2-fy23/globe-north-america.png', x: 776, y: 271, width: 93, height: 93 },
      { key: 'pepsico-q2-fy23-latam', href: 'data/assets/raster-annotations/pepsico-q2-fy23/globe-latam.png', x: 532, y: 849, width: 92, height: 92 },
      { key: 'pepsico-q2-fy23-europe', href: 'data/assets/raster-annotations/pepsico-q2-fy23/globe-europe.png', x: 525, y: 999, width: 93, height: 93 },
      { key: 'pepsico-q2-fy23-amesa', href: 'data/assets/raster-annotations/pepsico-q2-fy23/globe-amesa.png', x: 50, y: 1138, width: 83, height: 83 },
      { key: 'pepsico-q2-fy23-apac', href: 'data/assets/raster-annotations/pepsico-q2-fy23/globe-apac.png', x: 549, y: 1274, width: 85, height: 86 },
      { key: 'pepsico-q2-fy23-revenue-globe', href: 'data/assets/raster-annotations/pepsico-q2-fy23/revenue-globe.png', x: 1148, y: 365, width: 111, height: 112 },
    ],
    layout: {
      scale: 16,
      nodes: {
        frito_lay: { x: 425, y: 352, width: 71, height: 93 }, quaker_foods: { x: 427, y: 594, width: 71, height: 9 }, pepsico_beverages: { x: 425, y: 751, width: 71, height: 106 },
        north_america: { x: 796, y: 547, width: 70, height: 212 }, latam: { x: 799, y: 875, width: 70, height: 43 }, europe: { x: 801, y: 1025, width: 70, height: 53 },
        amesa: { x: 804, y: 1182, width: 70, height: 24 }, apac: { x: 801, y: 1317, width: 70, height: 17 }, revenue: { x: 1173, y: 701, width: 70, height: 359 },
        gross_profit: { x: 1547, y: 603, width: 70, height: 195 }, cost_of_revenue: { x: 1547, y: 1022, width: 70, height: 161 },
        operating_profit: { x: 1913, y: 522, width: 70, height: 57 }, operating_expenses: { x: 1913, y: 733, width: 70, height: 135 },
        other: { x: 2178, y: 547, width: 70, height: 1 }, net_profit: { x: 2293, y: 424, width: 71, height: 43 }, tax: { x: 2293, y: 674, width: 71, height: 10 },
        interest: { x: 2293, y: 792, width: 71, height: 1 }, sga: { x: 2293, y: 935, width: 71, height: 136 },
      },
      labels: labels(false),
    },
    nodes: [
      ['frito_lay', 0, 0, 'source', 'Frito-Lay', 5.9, ['+14% Y/Y']], ['quaker_foods', 0, 1, 'source', ['Quaker', 'Foods'], 0.7, ['+1% Y/Y']],
      ['pepsico_beverages', 0, 2, 'source', ['PepsiCo', 'Beverages'], 6.8, ['+10% Y/Y']], ['north_america', 1, 0, 'source', 'North America', 13.3, ['+11% Y/Y']],
      ['latam', 1, 1, 'source', 'LATAM', 2.9, ['+18% Y/Y']], ['europe', 1, 2, 'source', 'Europe', 3.4, ['+13% Y/Y']],
      ['amesa', 1, 3, 'source', 'Africa, Middle East & South Asia', 1.6, ['(8%) Y/Y']], ['apac', 1, 4, 'source', 'APAC', 1.1, ['+1% Y/Y']],
      ['revenue', 2, 0, 'hub', 'Revenue', 22.3, ['+10% Y/Y']], ['gross_profit', 3, 0, 'profit', 'Gross profit', 12.2, ['55% margin', '+1pp Y/Y']],
      ['cost_of_revenue', 3, 1, 'cost', ['Cost of', 'revenue'], 10.1], ['operating_profit', 4, 0, 'profit', 'Operating profit', 3.7, ['16% margin', '+6pp Y/Y']],
      ['operating_expenses', 4, 1, 'cost', ['Operating', 'expenses'], 8.5], ['other', 5, 0, 'profit', 'Other', 0.1], ['net_profit', 6, 0, 'profit', 'Net profit', 2.8, ['12% margin', '+7pp Y/Y']],
      ['tax', 6, 1, 'cost', 'Tax', 0.7], ['interest', 6, 2, 'cost', 'Interest', 0.2], ['sga', 6, 3, 'cost', 'SG&A', 8.5, ['38% of revenue']],
    ].map(([id, col, order, type, label, value, notes]) => ({ id, col, order, type, label, value, ...(notes ? { notes } : {}) })),
    links: [
      ['frito_lay', 'north_america', 5.9, 93, 93, 0, 0], ['quaker_foods', 'north_america', 0.7, 9, 10, 0, 1], ['pepsico_beverages', 'north_america', 6.8, 106, 109, 0, 2],
      ['north_america', 'revenue', 13.3, 212, 214, 0, 0], ['latam', 'revenue', 2.9, 43, 46, 0, 1], ['europe', 'revenue', 3.4, 53, 55, 0, 2],
      ['amesa', 'revenue', 1.6, 24, 26, 0, 3], ['apac', 'revenue', 1.1, 17, 18, 0, 4],
      ['revenue', 'gross_profit', 12.2, 195, 195, 0, 0, GREEN_LINK], ['revenue', 'cost_of_revenue', 10.1, 164, 161, 1, 0, RED_LINK],
      ['gross_profit', 'operating_profit', 3.7, 59, 57, 0, 0, GREEN_LINK], ['gross_profit', 'operating_expenses', 8.5, 136, 135, 1, 0, RED_LINK],
      ['operating_profit', 'net_profit', 2.8, 45, 42, 0, 0, GREEN_LINK], ['operating_profit', 'tax', 0.7, 10, 10, 1, 0, RED_LINK],
      ['operating_profit', 'interest', 0.2, 2, 1, 2, 0, RED_LINK], ['other', 'net_profit', 0.1, 1, 1, 0, 1, GREEN_LINK],
      ['operating_expenses', 'sga', 8.5, 135, 136, 0, 0, RED_LINK],
    ].map(([source, target, value, sourceWidth, targetWidth, sourceOrder, targetOrder, linkTint]) => ({ source, target, value, sourceWidth, targetWidth, sourceOrder, targetOrder, ...(linkTint ? { linkTint } : {}) })),
    i18n: { zh: {
      name: '百事公司 · 2023 财年第二季度', meta: { title: '百事公司 2023 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 2000 },
      nodes: {
        frito_lay: { label: '菲多利', notes: ['同比 +14%'] }, quaker_foods: { label: ['桂格', '食品'], notes: ['同比 +1%'] }, pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +10%'] },
        north_america: { label: '北美', notes: ['同比 +11%'] }, latam: { label: '拉丁美洲', notes: ['同比 +18%'] }, europe: { label: '欧洲', notes: ['同比 +13%'] },
        amesa: { label: '非洲、中东及南亚', notes: ['同比 (8%)'] }, apac: { label: '亚太', notes: ['同比 +1%'] }, revenue: { label: '收入', notes: ['同比 +10%'] },
        gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] },
        operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 +6 个百分点'] }, operating_expenses: { label: '运营费用' }, other: { label: '其他' },
        net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +7 个百分点'] }, tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及行政费用', notes: ['占收入 38%'] },
      },
      layout: { labels: labels(true) },
    } },
  };
  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();

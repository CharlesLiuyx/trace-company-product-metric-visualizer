/* PepsiCo Q3 FY24 fixed-layout income statement. Geometry, labels, and icon
 * placements are measured from input/processed/pepsico-q3-fy24.png. */
(function () {
  'use strict';
  const NAVY = '#2a4790', NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c', GREEN_LABEL = '#008f51', GREEN_LINK = '#99cd99';
  const RED = '#cc0000', RED_LABEL = '#941100', RED_LINK = '#e08585';
  const TITLE = '#155077', NOTE = '#666666', RIGHT_X = 2514;
  const line = (text, size, options = {}) => ({ text, size, weight: 400, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 12, lines, ...options });

  function labels(zh = false) {
    const t = zh ? {
      frito: '菲多利', quaker: ['桂格', '食品'], beverages: ['百事', '饮料'], northAmerica: '北美',
      latam: '拉丁美洲', europe: '欧洲', amesa: ['非洲、中东', '和南亚'], apac: '亚太', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润', opex: ['运营', '费用'],
      net: '净利润', tax: '税费', interest: '利息',
      yoy: (v) => `同比 ${v}`, margin: (v) => `利润率 ${v}`, pp: (v) => `同比 ${v.replace('pp', '')} 个百分点`,
    } : {
      frito: 'Frito-Lay', quaker: ['Quaker', 'Foods'], beverages: ['PepsiCo', 'Beverages'], northAmerica: 'North America',
      latam: 'LATAM', europe: 'Europe', amesa: ['Africa, Middle East & South Asia'], apac: 'APAC', revenue: 'Revenue',
      gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit', opex: ['Operating', 'expenses'],
      net: 'Net profit', tax: 'Tax', interest: 'Interest',
      yoy: (v) => `${v} Y/Y`, margin: (v) => `${v} margin`, pp: (v) => `${v} Y/Y`,
    };
    const valueYoy = (x, top, yoy) => block(x, top, [line('$value', 40), line(t.yoy(yoy), 29, { color: NOTE })], { lineGap: 13 });
    const name = (x, top, value, size = 40, lineGap = 8) => block(x, top,
      (Array.isArray(value) ? value : [value]).map((text) => line(text, size, { weight: 800 })), { lineGap });
    const profit = (x, top, title, margin, pp) => block(x, top, [
      line(title, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }),
      line(t.margin(margin), 29, { color: NOTE }), line(t.pp(pp), 29, { color: NOTE }),
    ]);
    return {
      frito_lay: { blocks: [valueYoy(473, 267, '(1%)'), name(347, 382, t.frito)] },
      quaker_foods: { blocks: [valueYoy(491, 487, '(13%)'), name(316, 547, t.quaker)] },
      pepsico_beverages: { blocks: [valueYoy(488, 632, '+0%'), name(313, 740, t.beverages)] },
      north_america: { blocks: [block(866, 396, [line(t.northAmerica, 40, { weight: 800 }), line('$value', 40), line(t.yoy('(1%)'), 29, { color: NOTE })])] },
      latam: { blocks: [valueYoy(880, 775, '(5%)'), name(714, 866, t.latam)] },
      europe: { blocks: [valueYoy(864, 944, '+7%'), name(730, 1045, t.europe)] },
      amesa: { blocks: [valueYoy(873, 1119, '(4%)'), name(446, zh ? 1193 : 1208, t.amesa, zh ? 31 : 36, 6)] },
      apac: { blocks: [valueYoy(865, 1269, '(2%)'), name(734, 1354, t.apac)] },
      revenue: { blocks: [block(1240, 535, [line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy('(1%)'), 29, { color: NOTE })])] },
      gross_profit: { blocks: [profit(1613, 364, t.gross, '55%', '+1pp')] },
      cost_of_revenue: { blocks: [block(1613, 1130, [...t.cost.map((v) => line(v, 40, { weight: 800, color: RED_LABEL })), line('$value', 40, { color: RED_LABEL })])] },
      operating_profit: { blocks: [profit(1987, 277, t.operating, '17%', '(1pp)')] },
      operating_expenses: { blocks: [block(1987, 854, [...t.opex.map((v) => line(v, 36, { weight: 800, color: RED_LABEL })), line('$value', 36, { color: RED_LABEL })])] },
      net_profit: { blocks: [profit(RIGHT_X, 347, t.net, '13%', '(1pp)')] },
      tax: { blocks: [block(RIGHT_X, 609, [line(t.tax, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      interest: { blocks: [block(RIGHT_X, 743, [line(t.interest, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL })], { lineGap: 8 })] },
      other_income: { blocks: [] },
    };
  }

  const otherGuide = (zh) => `<g class="sankey-interactive-annotation" data-node="other_income"
    data-link-numerator="other_income" data-link-denominator="net_profit" data-link-anchor-x="2260" data-link-anchor-y="475"
    data-user-feedback-clearance="other-income-guide-above-label">
    <path d="M2207 475H2260C2293 475 2286 427 2324 427" fill="none" stroke="${GREEN_LINK}" stroke-width="1"/>
    <text x="2251" y="515" text-anchor="middle" font-size="31" font-weight="800" fill="${GREEN_LABEL}">${zh ? '其他' : 'Other'}</text>
    <text x="2251" y="557" text-anchor="middle" font-size="31" font-weight="400" fill="${GREEN_LABEL}">$41M</text></g>`;

  const data = {
    key: 'pepsico-q3-fy24', name: 'PepsiCo · Q3 FY24', company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q3 FY24 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q3-fy24.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' }, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherGuide(false),
    nonNodeMetrics: [{ id: 'other_income', representation: 'flow', label: 'Other', value: 0.041, valueText: '$41M', type: 'profit', labelColor: GREEN_LABEL }],
    rasterAnnotations: [
      { key: 'pepsico-q3-fy24-company-logo', href: 'data/assets/raster-annotations/pepsico-q3-fy24/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-q3-fy24-lays', href: 'data/assets/raster-annotations/pepsico-q3-fy24/lays.png', x: 35, y: 335, width: 158, height: 150 },
      { key: 'pepsico-q3-fy24-quaker', href: 'data/assets/raster-annotations/pepsico-q3-fy24/quaker.png', x: 43, y: 525, width: 134, height: 150 },
      { key: 'pepsico-q3-fy24-pepsi', href: 'data/assets/raster-annotations/pepsico-q3-fy24/pepsi.png', x: 30, y: 695, width: 153, height: 155 },
      { key: 'pepsico-q3-fy24-revenue-globe', href: 'data/assets/raster-annotations/pepsico-q3-fy24/revenue-globe.png', x: 1171, y: 363, width: 121, height: 118 },
      { key: 'pepsico-q3-fy24-globe-north-america', href: 'data/assets/raster-annotations/pepsico-q3-fy24/globe-north-america.png', x: 818, y: 284, width: 91, height: 103 },
      { key: 'pepsico-q3-fy24-globe-latam', href: 'data/assets/raster-annotations/pepsico-q3-fy24/globe-latam.png', x: 569, y: 872, width: 88, height: 102 },
      { key: 'pepsico-q3-fy24-globe-europe', href: 'data/assets/raster-annotations/pepsico-q3-fy24/globe-europe.png', x: 548, y: 1027, width: 103, height: 94 },
      { key: 'pepsico-q3-fy24-globe-amesa', href: 'data/assets/raster-annotations/pepsico-q3-fy24/globe-amesa.png', x: 72, y: 1167, width: 100, height: 91 },
      { key: 'pepsico-q3-fy24-globe-apac', href: 'data/assets/raster-annotations/pepsico-q3-fy24/globe-apac.png', x: 569, y: 1325, width: 90, height: 99 },
    ],
    layout: {
      scale: 13.6, routes: { other_income: { x: 2207, y: 475, width: 0, height: 1 } },
      nodes: {
        frito_lay: { x: 456, y: 368, width: 71, height: 78 }, quaker_foods: { x: 456, y: 592, width: 71, height: 6 },
        pepsico_beverages: { x: 456, y: 740, width: 71, height: 96 }, north_america: { x: 832, y: 551, width: 70, height: 185 },
        latam: { x: 832, y: 875, width: 70, height: 37 }, europe: { x: 832, y: 1044, width: 70, height: 51 },
        amesa: { x: 830, y: 1221, width: 70, height: 19 }, apac: { x: 830, y: 1371, width: 70, height: 14 },
        revenue: { x: 1204, y: 688, width: 70, height: 317 }, gross_profit: { x: 1578, y: 556, width: 70, height: 175 },
        cost_of_revenue: { x: 1580, y: 977, width: 70, height: 141 }, operating_profit: { x: 1949, y: 468, width: 70, height: 52 },
        operating_expenses: { x: 1949, y: 720, width: 70, height: 121 }, net_profit: { x: 2324, y: 389, width: 71, height: 38 },
        tax: { x: 2324, y: 635, width: 71, height: 8 }, interest: { x: 2324, y: 784, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      ['frito_lay', 0, 0, 'source', 'Frito-Lay', 5.9, ['(1%) Y/Y']],
      ['quaker_foods', 0, 1, 'source', ['Quaker', 'Foods'], 0.6, ['(13%) Y/Y']],
      ['pepsico_beverages', 0, 2, 'source', ['PepsiCo', 'Beverages'], 7.2, ['+0% Y/Y']],
      ['north_america', 1, 0, 'source', 'North America', 13.7, ['(1%) Y/Y']], ['latam', 1, 1, 'source', 'LATAM', 2.9, ['(5%) Y/Y']],
      ['europe', 1, 2, 'source', 'Europe', 3.9, ['+7% Y/Y']], ['amesa', 1, 3, 'source', 'Africa, Middle East & South Asia', 1.6, ['(4%) Y/Y']],
      ['apac', 1, 4, 'source', 'APAC', 1.2, ['(2%) Y/Y']], ['revenue', 2, 0, 'hub', 'Revenue', 23.3, ['(1%) Y/Y']],
      ['gross_profit', 3, 0, 'profit', 'Gross profit', 12.9, ['55% margin', '+1pp Y/Y']], ['cost_of_revenue', 3, 1, 'cost', ['Cost of', 'revenue'], 10.4],
      ['operating_profit', 4, 0, 'profit', 'Operating profit', 3.9, ['17% margin', '(1pp) Y/Y']], ['operating_expenses', 4, 1, 'cost', ['Operating', 'expenses'], 9.1],
      ['net_profit', 5, 0, 'profit', 'Net profit', 2.9, ['13% margin', '(1pp) Y/Y']], ['tax', 5, 1, 'cost', 'Tax', 0.7], ['interest', 5, 2, 'cost', 'Interest', 0.2],
    ].map(([id, col, order, type, label, value, notes]) => ({ id, col, order, type, label, value, ...(notes ? { notes } : {}) })),
    links: [
      { source: 'frito_lay', target: 'north_america', value: 5.9, sourceWidth: 78, targetWidth: 79, y0: 407, y1: 590.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'quaker_foods', target: 'north_america', value: 0.6, sourceWidth: 6, targetWidth: 7, y0: 595, y1: 633.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'pepsico_beverages', target: 'north_america', value: 7.2, sourceWidth: 96, targetWidth: 99, y0: 788, y1: 686.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'north_america', target: 'revenue', value: 13.7, sourceWidth: 185, targetWidth: 186, y0: 643.5, y1: 781, sourceOrder: 0, targetOrder: 0 },
      { source: 'latam', target: 'revenue', value: 2.9, sourceWidth: 37, targetWidth: 39, y0: 893.5, y1: 893.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'europe', target: 'revenue', value: 3.9, sourceWidth: 51, targetWidth: 53, y0: 1069.5, y1: 939.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'amesa', target: 'revenue', value: 1.6, sourceWidth: 19, targetWidth: 22, y0: 1230.5, y1: 977, sourceOrder: 0, targetOrder: 3 },
      { source: 'apac', target: 'revenue', value: 1.2, sourceWidth: 14, targetWidth: 17, y0: 1378, y1: 996.5, sourceOrder: 0, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 12.9, sourceWidth: 175, targetWidth: 175, y0: 775.5, y1: 643.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 10.4, sourceWidth: 142, targetWidth: 140, y0: 934, y1: 1047, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.9, sourceWidth: 53, targetWidth: 52, y0: 582.5, y1: 494, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 9.1, sourceWidth: 122, targetWidth: 121, y0: 670, y1: 780.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.859, sourceWidth: 39, targetWidth: 37, y0: 487.5, y1: 407.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other_income', target: 'net_profit', value: 0.041, sourceWidth: 1, targetWidth: 1, y0: 475, y1: 426.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK, curve: { x0: 2207, x1: 2324, c1x: 2260, c1y: 475, c2x: 2286, c2y: 427 } },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceWidth: 10, targetWidth: 8, y0: 512, y1: 639, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 3, targetWidth: 1, y0: 518.5, y1: 784.5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: { zh: {
      name: '百事公司 · 2024 财年第三季度', meta: { title: '百事公司 2024 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 2000 },
      annotationsSvg: otherGuide(true), nonNodeMetrics: { other_income: { label: '其他' } },
      nodes: {
        frito_lay: { label: '菲多利', notes: ['同比 (1%)'] }, quaker_foods: { label: ['桂格', '食品'], notes: ['同比 (13%)'] },
        pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +0%'] }, north_america: { label: '北美', notes: ['同比 (1%)'] },
        latam: { label: '拉丁美洲', notes: ['同比 (5%)'] }, europe: { label: '欧洲', notes: ['同比 +7%'] },
        amesa: { label: ['非洲、中东', '和南亚'], notes: ['同比 (4%)'] }, apac: { label: '亚太', notes: ['同比 (2%)'] },
        revenue: { label: '收入', notes: ['同比 (1%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 +1 个百分点'] },
        cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 (1 个百分点)'] },
        operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 13%', '同比 (1 个百分点)'] },
        tax: { label: '税费' }, interest: { label: '利息' },
      },
      layout: { labels: labels(true) },
    } },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();

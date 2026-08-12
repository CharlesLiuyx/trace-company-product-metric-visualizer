/* PepsiCo Q2 FY24 fixed-layout income statement. Geometry is measured from
 * input/processed/pepsico-q2-fy24.png. Approved PepsiCo raster annotations
 * are reused; the Source-visible Other income is a zero-face flow route. */
(function () {
  'use strict';

  const NAVY = '#2a4790';
  const NAVY_LINK = '#98a5c5';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2514;

  const line = (text, size, options = {}) => ({
    text, size, weight: options.weight ?? 400, color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x, top, anchor: options.anchor || 'middle', lineGap: options.lineGap ?? 8, lines,
  });
  const amount = (x, top, yoy) => block(x, top, [
    line('$value', 40), line(yoy, 29, { color: NOTE }),
  ], { lineGap: 13 });

  const otherAnnotation = (zh) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="other" data-link-numerator="other"
        data-link-denominator="net_profit" data-link-anchor-x="2202" data-link-anchor-y="439">
        <path d="M2202 439H2258C2292 439 2282 378 2324 378" fill="none"
          stroke="${GREEN_LINK}" stroke-width="2"/>
        <text x="2247" y="486" text-anchor="middle" font-size="34" font-weight="800"
          fill="#008e00">${zh ? '其他' : 'Other'}</text>
        <text x="2247" y="529" text-anchor="middle" font-size="34"
          fill="#008e00">$0.1B</text>
        <rect x="2184" y="426" width="160" height="116" fill="transparent" pointer-events="all"/>
      </g>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      frito: '菲多利', quaker: ['桂格', '食品'], beverages: ['百事', '饮料'], north: '北美',
      latam: '拉丁美洲', europe: '欧洲', amesa: '非洲、中东和南亚', apac: '亚太', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], operatingProfit: '营业利润',
      operatingExpenses: ['运营', '费用'], net: '净利润', tax: '税费', interest: '利息',
      yFrito: '同比 (1%)', yQuaker: '同比 (18%)', yBeverages: '同比 +1%', yNorth: '同比 (1%)',
      yLatam: '同比 +7%', yEurope: '同比 +3%', yAmesa: '同比 +2%', yApac: '同比 (2%)',
      yRevenue: '同比 +1%', gpMargin: '利润率 56%', gpYoy: '同比 +1 个百分点',
      opMargin: '利润率 18%', opYoy: '同比 +2 个百分点', npMargin: '利润率 14%', npYoy: '同比 +1 个百分点',
    } : {
      frito: 'Frito-Lay', quaker: ['Quaker', 'Foods'], beverages: ['PepsiCo', 'Beverages'], north: 'North America',
      latam: 'LATAM', europe: 'Europe', amesa: 'Africa, Middle East & South Asia', apac: 'APAC', revenue: 'Revenue',
      gross: 'Gross profit', cost: ['Cost of', 'revenue'], operatingProfit: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'], net: 'Net profit', tax: 'Tax', interest: 'Interest',
      yFrito: '(1%) Y/Y', yQuaker: '(18%) Y/Y', yBeverages: '+1% Y/Y', yNorth: '(1%) Y/Y',
      yLatam: '+7% Y/Y', yEurope: '+3% Y/Y', yAmesa: '+2% Y/Y', yApac: '(2%) Y/Y',
      yRevenue: '+1% Y/Y', gpMargin: '56% margin', gpYoy: '+1pp Y/Y',
      opMargin: '18% margin', opYoy: '+2pp Y/Y', npMargin: '14% margin', npYoy: '+1pp Y/Y',
    };
    const side = (x, top, names, size = 40) => block(x, top,
      [].concat(names).map((name) => line(name, size, { weight: 800 })), { lineGap: 8 });
    return {
      frito_lay: { blocks: [amount(491, 344, t.yFrito), side(335, 456, t.frito)] },
      quaker_foods: { blocks: [amount(491, 556, t.yQuaker), side(330, 608, t.quaker)] },
      pepsico_beverages: { blocks: [amount(491, 703, t.yBeverages), side(316, 797, t.beverages)] },
      north_america: { blocks: [block(862, 406, [
        line(t.north, 40, { weight: 800 }), line('$value', 40), line(t.yNorth, 29, { color: NOTE }),
      ], { lineGap: 12 })] },
      latam: { blocks: [amount(862, 787, t.yLatam), side(731, 877, t.latam)] },
      europe: { blocks: [amount(862, 951, t.yEurope), side(732, 1048, t.europe)] },
      amesa: { blocks: [amount(862, 1103, t.yAmesa), side(464, 1197, t.amesa, zh ? 34 : 38)] },
      apac: { blocks: [amount(862, 1262, t.yApac), side(689, 1337, t.apac)] },
      revenue: { blocks: [block(1239, 540, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.yRevenue, 29, { color: NOTE }),
      ], { lineGap: 12 })] },
      gross_profit: { blocks: [block(1613, 378, [
        line(t.gross, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }),
        line(t.gpMargin, 29, { color: NOTE }), line(t.gpYoy, 29, { color: NOTE }),
      ], { lineGap: 12 })] },
      cost_of_revenue: { blocks: [block(1613, 1140, [
        ...t.cost.map((name) => line(name, 40, { weight: 800, color: RED_LABEL })),
        line('$value', 40, { color: RED_LABEL }),
      ], { lineGap: 12 })] },
      operating_profit: { blocks: [block(1979, 254, [
        line(t.operatingProfit, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }),
        line(t.opMargin, 29, { color: NOTE }), line(t.opYoy, 29, { color: NOTE }),
      ], { lineGap: 12 })] },
      operating_expenses: { blocks: [block(1981, 867, [
        ...t.operatingExpenses.map((name) => line(name, 40, { weight: 800, color: RED_LABEL })),
        line('$value', 40, { color: RED_LABEL }),
      ], { lineGap: 12 })] },
      net_profit: { blocks: [block(RIGHT_LABEL_X, 310, [
        line(t.net, 40, { weight: 800, color: GREEN_LABEL }), line('$value', 40, { color: GREEN_LABEL }),
        line(t.npMargin, 29, { color: NOTE }), line(t.npYoy, 29, { color: NOTE }),
      ], { lineGap: 12 })] },
      tax: { blocks: [block(RIGHT_LABEL_X, 568, [
        line(t.tax, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }),
      ], { lineGap: 8 })] },
      interest: { blocks: [block(RIGHT_LABEL_X, 695, [
        line(t.interest, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }),
      ], { lineGap: 8 })] },
      other: { blocks: [] },
    };
  };

  const data = {
    key: 'pepsico-q2-fy24', name: 'PepsiCo · Q2 FY24', company: 'PepsiCo',
    meta: {
      company: 'PepsiCo', title: 'PepsiCo Q2 FY24 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q2-fy24.png', width: 2667, height: 1500 },
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
    annotationsSvg: otherAnnotation(false),
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-lays-q4-fy24', href: 'data/assets/raster-annotations/pepsico/lays-q4-fy24.png', x: 42, y: 407, width: 154, height: 145 },
      { key: 'pepsico-quaker-q4-fy24', href: 'data/assets/raster-annotations/pepsico/quaker-q4-fy24.png', x: 52, y: 572, width: 144, height: 129 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 43, y: 736, width: 136, height: 137 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1176, y: 356, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 806, y: 302, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 556, y: 872, width: 92, height: 92 },
      { key: 'pepsico-globe-europe-q4-fy24', href: 'data/assets/raster-annotations/pepsico/globe-europe-q4-fy24.png', x: 525, y: 1029, width: 99, height: 99 },
      { key: 'pepsico-globe-amesa-q4-fy24', href: 'data/assets/raster-annotations/pepsico/globe-amesa-q4-fy24.png', x: 53, y: 1153, width: 88, height: 88 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 572, y: 1309, width: 91, height: 91 },
    ],
    nonNodeMetrics: [
      { id: 'other', representation: 'flow', label: 'Other', value: 0.1, valueText: '$0.1B', type: 'profit', labelColor: '#008e00' },
    ],
    layout: {
      scale: 13.75,
      routes: { other: { x: 2202, y: 439, width: 0, height: 1 } },
      nodes: {
        frito_lay: { x: 456, y: 437, width: 71, height: 79 },
        quaker_foods: { x: 456, y: 649, width: 71, height: 7 },
        pepsico_beverages: { x: 456, y: 796, width: 71, height: 91 },
        north_america: { x: 827, y: 563, width: 70, height: 183 },
        latam: { x: 827, y: 880, width: 70, height: 40 },
        europe: { x: 827, y: 1046, width: 70, height: 46 },
        amesa: { x: 830, y: 1212, width: 70, height: 20 },
        apac: { x: 830, y: 1355, width: 70, height: 12 },
        revenue: { x: 1204, y: 693, width: 70, height: 310 },
        gross_profit: { x: 1578, y: 563, width: 70, height: 173 },
        cost_of_revenue: { x: 1578, y: 991, width: 70, height: 136 },
        operating_profit: { x: 1944, y: 439, width: 70, height: 54 },
        operating_expenses: { x: 1946, y: 738, width: 70, height: 117 },
        net_profit: { x: 2324, y: 337, width: 71, height: 41 },
        tax: { x: 2324, y: 602, width: 71, height: 9 },
        interest: { x: 2324, y: 727, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'frito_lay', col: 0, order: 0, type: 'source', label: 'Frito-Lay', value: 5.9, notes: ['(1%) Y/Y'] },
      { id: 'quaker_foods', col: 0, order: 1, type: 'source', label: ['Quaker', 'Foods'], value: 0.6, notes: ['(18%) Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 2, type: 'source', label: ['PepsiCo', 'Beverages'], value: 6.8, notes: ['+1% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 13.2, notes: ['(1%) Y/Y'] },
      { id: 'latam', col: 1, order: 1, type: 'source', label: 'LATAM', value: 3.0, valueText: '$3.0B', notes: ['+7% Y/Y'] },
      { id: 'europe', col: 1, order: 2, type: 'source', label: 'Europe', value: 3.5, notes: ['+3% Y/Y'] },
      { id: 'amesa', col: 1, order: 3, type: 'source', label: 'Africa, Middle East & South Asia', value: 1.6, notes: ['+2% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.1, notes: ['(2%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 22.5, notes: ['+1% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 12.6, notes: ['56% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 9.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.0, valueText: '$4.0B', notes: ['18% margin', '+2pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 8.5 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.1, notes: ['14% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.2 },
    ],
    links: [
      { source: 'frito_lay', target: 'north_america', value: 5.9, sourceWidth: 79, targetWidth: 82, sourceOrder: 0, targetOrder: 0 },
      { source: 'quaker_foods', target: 'north_america', value: 0.6, sourceWidth: 7, targetWidth: 8, sourceOrder: 0, targetOrder: 1 },
      { source: 'pepsico_beverages', target: 'north_america', value: 6.8, sourceWidth: 91, targetWidth: 93, sourceOrder: 0, targetOrder: 2 },
      { source: 'north_america', target: 'revenue', value: 13.2, sourceWidth: 183, targetWidth: 183, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 3.0, sourceWidth: 40, targetWidth: 41, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'europe', target: 'revenue', value: 3.5, sourceWidth: 46, targetWidth: 48, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'amesa', target: 'revenue', value: 1.6, sourceWidth: 20, targetWidth: 22, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.1, sourceWidth: 12, targetWidth: 16, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 12.6, sourceWidth: 174, targetWidth: 173, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 9.9, width: 136, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.0, sourceWidth: 55, targetWidth: 54, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 8.5, sourceWidth: 118, targetWidth: 117, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.0, sourceWidth: 40, targetWidth: 40, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { sourceRoute: 'other', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 439, y1: 377.5, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceWidth: 10, targetWidth: 9, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 4, targetWidth: 1, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2024 财年第二季度',
        meta: { title: '百事公司 2024 财年第二季度利润表', period: '', periodNote: '', titleTextLength: 2000 },
        annotationsSvg: otherAnnotation(true), nonNodeMetrics: { other: { label: '其他' } },
        nodes: {
          frito_lay: { label: '菲多利', notes: ['同比 (1%)'] }, quaker_foods: { label: ['桂格', '食品'], notes: ['同比 (18%)'] },
          pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +1%'] }, north_america: { label: '北美', notes: ['同比 (1%)'] },
          latam: { label: '拉丁美洲', notes: ['同比 +7%'] }, europe: { label: '欧洲', notes: ['同比 +3%'] },
          amesa: { label: '非洲、中东和南亚', notes: ['同比 +2%'] }, apac: { label: '亚太', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] }, net_profit: { label: '净利润', notes: ['利润率 14%', '同比 +1 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();

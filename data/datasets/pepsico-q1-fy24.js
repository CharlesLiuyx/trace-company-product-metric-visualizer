/* PepsiCo Q1 FY24 fixed-layout income statement. Geometry, label positions,
 * interface widths, and short faces are measured from the native 2667×1500
 * Source. Other ($0.1B) and Interest ($0.2B) retain their genuine 2px and
 * 1px faces; neither is inflated or downgraded to an annotation. */
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
  const RIGHT_LABEL_X = 2487;

  const line = (text, size, options = {}) => ({ text, size, weight: 400, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 12, lines, ...options });

  function labels(zh = false) {
    const t = zh ? {
      fritoLay: '菲多利', quaker: ['桂格', '食品'], beverages: ['百事', '饮料'],
      northAmerica: '北美', latam: '拉丁美洲', europe: '欧洲',
      amesa: '非洲、中东和南亚', apac: '亚太', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], operating: '营业利润', operatingExpenses: ['运营', '费用'],
      net: '净利润', other: '其他', tax: '税费', interest: '利息',
      yoy: (value) => `同比 ${value}`,
      margin: (value) => `利润率 ${value}`,
      pp: (value) => `同比 ${value.replace('pp', '')} 个百分点`,
    } : {
      fritoLay: 'Frito-Lay', quaker: ['Quaker', 'Foods'], beverages: ['PepsiCo', 'Beverages'],
      northAmerica: 'North America', latam: 'LATAM', europe: 'Europe',
      amesa: 'Africa, Middle East & South Asia', apac: 'APAC', revenue: 'Revenue',
      gross: 'Gross profit', cost: ['Cost of', 'revenue'], operating: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses'], net: 'Net profit', other: 'Other', tax: 'Tax',
      interest: 'Interest', yoy: (value) => `${value} Y/Y`, margin: (value) => `${value} margin`,
      pp: (value) => `${value} Y/Y`,
    };

    const valueAndYoy = (x, top, yoy) => block(x, top, [
      line('$value', 40), line(t.yoy(yoy), 29, { color: NOTE }),
    ], { lineGap: 13 });
    const nameBlock = (x, top, names, size = 40, lineGap = 8) => block(
      x, top, (Array.isArray(names) ? names : [names]).map((name) => line(name, size, { weight: 800 })),
      { lineGap }
    );
    const profitBlock = (x, top, name, margin, pp) => block(x, top, [
      line(name, 40, { weight: 800, color: GREEN_LABEL }),
      line('$value', 40, { color: GREEN_LABEL }),
      line(t.margin(margin), 29, { color: NOTE }),
      line(t.pp(pp), 29, { color: NOTE }),
    ]);

    return {
      frito_lay: { blocks: [valueAndYoy(463, 339, '+2%'), nameBlock(308, 465, t.fritoLay)] },
      quaker_foods: { blocks: [valueAndYoy(463, 564, '(24%)'), nameBlock(303, 617, t.quaker)] },
      pepsico_beverages: { blocks: [valueAndYoy(463, 689, '+1%'), nameBlock(289, 791, t.beverages)] },
      north_america: { blocks: [block(837, 410, [
        line(t.northAmerica, 40, { weight: 800 }), line('$value', 40), line(t.yoy('(0%)'), 29, { color: NOTE }),
      ])] },
      latam: { blocks: [valueAndYoy(830, 812, '+16%'), nameBlock(704, 910, t.latam)] },
      europe: { blocks: [valueAndYoy(830, 969, '+3%'), nameBlock(707, 1065, t.europe)] },
      amesa: { blocks: [
        block(828, 1124, [line('$value', 40), line(t.yoy('+2%'), 29, { color: NOTE })], { lineGap: 0 }),
        nameBlock(457, 1200, t.amesa, 40),
      ] },
      apac: { blocks: [valueAndYoy(825, 1243, '+6%'), nameBlock(712, 1323, t.apac)] },
      revenue: { blocks: [block(1210, 571, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy('+2%'), 29, { color: NOTE }),
      ])] },
      gross_profit: { blocks: [profitBlock(1581, 395, t.gross, '55%', '(0pp)')] },
      cost_of_revenue: { blocks: [block(1585, 1174, [
        ...t.cost.map((name) => line(name, 40, { weight: 800, color: RED_LABEL })),
        line('$value', 40, { color: RED_LABEL }),
      ])] },
      operating_profit: { blocks: [profitBlock(1950, 277, t.operating, '15%', '+0pp')] },
      operating_expenses: { blocks: [block(1951, 890, [
        ...t.operatingExpenses.map((name) => line(name, 40, { weight: 800, color: RED_LABEL })),
        line('$value', 40, { color: RED_LABEL }),
      ])] },
      net_profit: { blocks: [profitBlock(RIGHT_LABEL_X, 301, t.net, '11%', '+0pp')] },
      other: { blocks: [block(2227, 450, [
        line(t.other, 30, { weight: 800, color: OTHER_GREEN }),
        line('$value', 30, { color: OTHER_GREEN }),
      ], { lineGap: 7 })] },
      tax: { blocks: [block(RIGHT_LABEL_X, 577, [
        line(t.tax, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }),
      ], { lineGap: 8 })] },
      interest: { blocks: [block(RIGHT_LABEL_X, 710, [
        line(t.interest, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }),
      ], { lineGap: 8 })] },
    };
  }

  const data = {
    key: 'pepsico-q1-fy24',
    name: 'PepsiCo · Q1 FY24',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo',
      title: 'PepsiCo Q1 FY24 Income Statement',
      period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q1-fy24.png', width: 2667, height: 1500 },
      titleX: 1337, titleY: 207, titleSize: 128, titleWeight: 800, titleTextLength: 2201,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'pepsico-company-logo', href: 'data/assets/raster-annotations/pepsico/company-logo.png', x: 1000, y: 267, width: 475, height: 76 },
      { key: 'pepsico-lays-q1-fy24', href: 'data/assets/raster-annotations/pepsico/lays-q1-fy24.png', x: 9, y: 416, width: 154, height: 145 },
      { key: 'pepsico-quaker-q1-fy24', href: 'data/assets/raster-annotations/pepsico/quaker-q1-fy24.png', x: 8, y: 598, width: 144, height: 129 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 11, y: 770, width: 136, height: 137 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1147, y: 356, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 777, y: 302, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 527, y: 886, width: 92, height: 92 },
      { key: 'pepsico-globe-europe-q1-fy24', href: 'data/assets/raster-annotations/pepsico/globe-europe-q1-fy24.png', x: 522, y: 1036, width: 99, height: 99 },
      { key: 'pepsico-globe-amesa-q1-fy24', href: 'data/assets/raster-annotations/pepsico/globe-amesa-q1-fy24.png', x: 47, y: 1166, width: 89, height: 88 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 543, y: 1306, width: 91, height: 91 },
    ],
    layout: {
      scale: 16.5,
      nodes: {
        frito_lay: { x: 428, y: 440, width: 71, height: 92 },
        quaker_foods: { x: 428, y: 657, width: 71, height: 9 },
        pepsico_beverages: { x: 428, y: 789, width: 71, height: 96 },
        north_america: { x: 802, y: 566, width: 70, height: 201 },
        latam: { x: 802, y: 916, width: 70, height: 31 },
        europe: { x: 802, y: 1071, width: 70, height: 30 },
        amesa: { x: 802, y: 1213, width: 70, height: 15 },
        apac: { x: 799, y: 1344, width: 70, height: 15 },
        revenue: { x: 1176, y: 726, width: 70, height: 303 },
        gross_profit: { x: 1550, y: 587, width: 70, height: 165 },
        cost_of_revenue: { x: 1550, y: 1026, width: 70, height: 135 },
        operating_profit: { x: 1921, y: 468, width: 70, height: 44 },
        operating_expenses: { x: 1923, y: 753, width: 71, height: 121 },
        other: { x: 2194, y: 438, width: 70, height: 2 },
        net_profit: { x: 2296, y: 346, width: 71, height: 32 },
        tax: { x: 2296, y: 621, width: 71, height: 7 },
        interest: { x: 2296, y: 746, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'frito_lay', col: 0, order: 0, type: 'source', label: 'Frito-Lay', value: 5.7, notes: ['+2% Y/Y'] },
      { id: 'quaker_foods', col: 0, order: 1, type: 'source', label: ['Quaker', 'Foods'], value: 0.6, notes: ['(24%) Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 2, type: 'source', label: ['PepsiCo', 'Beverages'], value: 5.9, notes: ['+1% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 12.1, notes: ['(0%) Y/Y'] },
      { id: 'latam', col: 1, order: 1, type: 'source', label: 'LATAM', value: 2.1, notes: ['+16% Y/Y'] },
      { id: 'europe', col: 1, order: 2, type: 'source', label: 'Europe', value: 1.9, notes: ['+3% Y/Y'] },
      { id: 'amesa', col: 1, order: 3, type: 'source', label: 'Africa, Middle East & South Asia', value: 1.0, valueText: '$1.0B', notes: ['+2% Y/Y'] },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.1, notes: ['+6% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 18.3, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 10.0, valueText: '$10.0B', notes: ['55% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 8.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.7, notes: ['15% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.3 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.1, labelColor: OTHER_GREEN },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.1, notes: ['11% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.5 },
      { id: 'interest', col: 6, order: 2, type: 'cost', label: 'Interest', value: 0.2 },
    ],
    links: [
      { source: 'frito_lay', target: 'north_america', value: 5.7, sourceWidth: 92, targetWidth: 92, y0: 486, y1: 612, sourceOrder: 0, targetOrder: 0 },
      { source: 'quaker_foods', target: 'north_america', value: 0.6, sourceWidth: 9, targetWidth: 9, y0: 661.5, y1: 662.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'pepsico_beverages', target: 'north_america', value: 5.9, sourceWidth: 96, targetWidth: 100, y0: 837, y1: 717, sourceOrder: 0, targetOrder: 2 },
      { source: 'north_america', target: 'revenue', value: 12.1, sourceWidth: 201, targetWidth: 212, y0: 666.5, y1: 832, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 2.1, sourceWidth: 31, targetWidth: 31, y0: 931.5, y1: 953.5, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'europe', target: 'revenue', value: 1.9, sourceWidth: 30, targetWidth: 30, y0: 1086, y1: 984, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'amesa', target: 'revenue', value: 1.0, sourceWidth: 15, targetWidth: 15, y0: 1220.5, y1: 1006.5, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.1, sourceWidth: 15, targetWidth: 15, y0: 1351.5, y1: 1021.5, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 10.0, sourceWidth: 165, targetWidth: 165, y0: 808.5, y1: 669.5, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.2, sourceWidth: 137, targetWidth: 135, y0: 960.5, y1: 1093.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 44, targetWidth: 44, y0: 609, y1: 490, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.3, sourceWidth: 121, targetWidth: 121, y0: 691.5, y1: 813.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.0, sourceWidth: 32, targetWidth: 31, y0: 484, y1: 361.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceWidth: 10, targetWidth: 7, y0: 505, y1: 624.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 2, targetWidth: 1, y0: 511, y1: 746.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 439.5, y1: 377.5, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2024 财年第一季度',
        meta: { title: '百事公司 2024 财年第一季度利润表', period: '', periodNote: '', titleTextLength: 2000 },
        nodes: {
          frito_lay: { label: '菲多利', notes: ['同比 +2%'] },
          quaker_foods: { label: ['桂格', '食品'], notes: ['同比 (24%)'] },
          pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +1%'] },
          north_america: { label: '北美', notes: ['同比 (0%)'] },
          latam: { label: '拉丁美洲', notes: ['同比 +16%'] },
          europe: { label: '欧洲', notes: ['同比 +3%'] },
          amesa: { label: '非洲、中东和南亚', notes: ['同比 +2%'] },
          apac: { label: '亚太', notes: ['同比 +6%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 55%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +0 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 +0 个百分点'] },
          tax: { label: '税费' }, interest: { label: '利息' },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();

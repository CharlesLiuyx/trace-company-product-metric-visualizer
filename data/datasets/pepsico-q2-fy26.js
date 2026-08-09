/* PepsiCo Q2 FY26 fixed-layout income statement. Geometry and label positions
 * are measured from input/processed/pepsico-q2-fy26.png. The validated
 * PepsiCo runtime raster annotations are reused from the existing company
 * asset set, except for the Q2-specific clean SodaStream derivative. */
(function () {
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

  const line = (text, size, options = {}) => ({ text, size, weight: 400, ...options });
  const block = (x, top, lines, options = {}) => ({ x, top, anchor: 'middle', lineGap: 12, lines, ...options });

  function labels(zh = false) {
    const t = zh ? {
      foods: '食品', beverages: ['百事', '饮料'], northAmerica: '北美', ib: ['国际饮料', '特许经营'],
      latam: '拉丁美洲', emea: ['欧洲中东', '非洲'], apac: '亚太', revenue: '收入',
      gross: '毛利润', cost: ['收入', '成本'], operating: '营业利润',
      operatingExpenses: ['运营费用', 'SG&A'], net: '净利润', tax: '税费', interestOther: ['利息', '及其他'],
      yoy: (value) => `同比 ${value}`, margin: (value) => `利润率 ${value}`,
      pp: (value) => `同比 ${value.replace('pp', '')} 个百分点`,
    } : {
      foods: 'Foods', beverages: ['PepsiCo', 'Beverages'], northAmerica: 'North America', ib: ['IB franchise'],
      latam: 'LATAM', emea: ['EMEA'], apac: 'APAC', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operating: 'Operating profit',
      operatingExpenses: ['Operating', 'expenses', 'SG&A'], net: 'Net profit', tax: 'Tax',
      interestOther: ['Interest', '& other'], yoy: (value) => `${value} Y/Y`, margin: (value) => `${value} margin`,
      pp: (value) => `${value} Y/Y`,
    };

    const valueAndYoy = (x, top, yoy) => block(x, top, [
      line('$value', 40), line(t.yoy(yoy), 29, { color: NOTE }),
    ], { lineGap: 13 });
    const nameBlock = (x, top, names, size = 40, lineGap = 8) => block(
      x, top, (Array.isArray(names) ? names : [names]).map((name) => line(name, size, { weight: 800 })), { lineGap }
    );
    const profitBlock = (x, top, name, margin, pp) => block(x, top, [
      line(name, 40, { weight: 800, color: GREEN_LABEL }),
      line('$value', 40, { color: GREEN_LABEL }),
      line(t.margin(margin), 29, { color: NOTE }),
      line(t.pp(pp), 29, { color: NOTE }),
    ]);

    return {
      foods: { blocks: [valueAndYoy(491, 347, '(2%)'), nameBlock(365, 468, t.foods)] },
      pepsico_beverages: { blocks: [valueAndYoy(491, 593, '+7%'), nameBlock(316, 699, t.beverages)] },
      north_america: { blocks: [block(866, 374, [
        line(t.northAmerica, 40, { weight: 800 }), line('$value', 40), line(t.yoy('(3%)'), 29, { color: NOTE }),
      ])] },
      ib_franchise: { blocks: [valueAndYoy(865, 785, '+11%'), nameBlock(699, zh ? 854 : 866, t.ib, zh ? 34 : 40)] },
      latam: { blocks: [valueAndYoy(865, 934, '+15%'), nameBlock(732, 1028, t.latam, zh ? 36 : 40)] },
      emea: { blocks: [valueAndYoy(865, 1097, '+10%'), nameBlock(730, zh ? 1198 : 1210, t.emea, zh ? 32 : 40, 6)] },
      apac: { blocks: [valueAndYoy(864, 1283, '+12%'), nameBlock(733, 1369, t.apac)] },
      revenue: { blocks: [block(1240, 482, [
        line(t.revenue, 40, { weight: 800 }), line('$value', 40), line(t.yoy('+6%'), 29, { color: NOTE }),
      ])] },
      gross_profit: { blocks: [profitBlock(1613, 336, t.gross, '54%', '(0pp)')] },
      cost_of_revenue: { blocks: [block(1613, 1135, [
        ...t.cost.map((name) => line(name, 40, { weight: 800, color: RED_LABEL })),
        line('$value', 40, { color: RED_LABEL }),
      ])] },
      operating_profit: { blocks: [profitBlock(1987, 254, t.operating, '17%', '+9pp')] },
      operating_expenses: { blocks: [block(1987, 884, [
        ...t.operatingExpenses.map((name) => line(name, 36, { weight: 800, color: RED_LABEL })),
        line('$value', 36, { color: RED_LABEL }),
      ])] },
      net_profit: { blocks: [profitBlock(RIGHT_LABEL_X, 325, t.net, '12%', '+7pp')] },
      tax: { blocks: [block(RIGHT_LABEL_X, 594, [
        line(t.tax, 34, { weight: 800, color: RED_LABEL }), line('$value', 34, { color: RED_LABEL }),
      ], { lineGap: 8 })] },
      interest_other: { blocks: [block(RIGHT_LABEL_X, 719, [
        ...t.interestOther.map((name) => line(name, 34, { weight: 800, color: RED_LABEL })),
        line('$value', 34, { color: RED_LABEL }),
      ], { lineGap: 8 })] },
    };
  }

  const data = {
    key: 'pepsico-q2-fy26',
    name: 'PepsiCo · Q2 FY26',
    company: 'PepsiCo',
    meta: {
      company: 'PepsiCo',
      title: 'PepsiCo Q2 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/pepsico-q2-fy26.png', width: 2667, height: 1500 },
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
      { key: 'pepsico-foods-lays-quaker', href: 'data/assets/raster-annotations/pepsico/foods-lays-quaker.png', x: 27, y: 426, width: 244, height: 117 },
      { key: 'pepsico-beverages-pepsi', href: 'data/assets/raster-annotations/pepsico/beverages-pepsi.png', x: 51, y: 703, width: 136, height: 137 },
      { key: 'pepsico-ib-sodastream-q2-fy26', href: 'data/assets/raster-annotations/pepsico/ib-sodastream-q2-fy26.png', x: 486, y: 859, width: 78, height: 168 },
      { key: 'pepsico-revenue-globe', href: 'data/assets/raster-annotations/pepsico/revenue-globe.png', x: 1176, y: 356, width: 116, height: 117 },
      { key: 'pepsico-globe-north-america', href: 'data/assets/raster-annotations/pepsico/globe-north-america.png', x: 806, y: 302, width: 98, height: 98 },
      { key: 'pepsico-globe-latam', href: 'data/assets/raster-annotations/pepsico/globe-latam.png', x: 556, y: 1030, width: 92, height: 92 },
      { key: 'pepsico-globe-emea', href: 'data/assets/raster-annotations/pepsico/globe-emea.png', x: 481, y: 1174, width: 191, height: 99 },
      { key: 'pepsico-globe-apac', href: 'data/assets/raster-annotations/pepsico/globe-apac.png', x: 572, y: 1318, width: 91, height: 91 },
    ],
    layout: {
      scale: 15,
      nodes: {
        foods: { x: 457, y: 444, width: 71, height: 94 },
        pepsico_beverages: { x: 457, y: 690, width: 71, height: 108 },
        north_america: { x: 831, y: 524, width: 70, height: 202 },
        ib_franchise: { x: 831, y: 884, width: 70, height: 21 },
        latam: { x: 831, y: 1032, width: 70, height: 42 },
        emea: { x: 831, y: 1197, width: 70, height: 72 },
        apac: { x: 831, y: 1382, width: 70, height: 15 },
        revenue: { x: 1205, y: 634, width: 70, height: 361 },
        gross_profit: { x: 1578, y: 528, width: 71, height: 195 },
        cost_of_revenue: { x: 1578, y: 955, width: 71, height: 164 },
        operating_profit: { x: 1952, y: 445, width: 71, height: 59 },
        operating_expenses: { x: 1952, y: 734, width: 71, height: 134 },
        net_profit: { x: 2325, y: 355, width: 71, height: 42 },
        tax: { x: 2325, y: 628, width: 71, height: 10 },
        interest_other: { x: 2325, y: 755, width: 71, height: 5 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'foods', col: 0, order: 0, type: 'source', label: 'Foods', value: 6.4, notes: ['(2%) Y/Y'] },
      { id: 'pepsico_beverages', col: 0, order: 1, type: 'source', label: ['PepsiCo', 'Beverages'], value: 7.2, notes: ['+7% Y/Y'] },
      { id: 'north_america', col: 1, order: 0, type: 'source', label: 'North America', value: 13.6, notes: ['(3%) Y/Y'] },
      { id: 'ib_franchise', col: 1, order: 1, type: 'source', label: 'IB franchise', value: 1.5, notes: ['+11% Y/Y'] },
      { id: 'latam', col: 1, order: 2, type: 'source', label: 'LATAM', value: 2.9, notes: ['+15% Y/Y'] },
      { id: 'emea', col: 1, order: 3, type: 'source', label: 'EMEA', value: 5.0, notes: ['+10% Y/Y'], valueText: '$5.0B' },
      { id: 'apac', col: 1, order: 4, type: 'source', label: 'APAC', value: 1.1, notes: ['+12% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 24.2, notes: ['+6% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 13.1, notes: ['54% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 11.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 4.0, valueText: '$4.0B', notes: ['17% margin', '+9pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses SG&A', value: 9.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.0, valueText: '$3.0B', notes: ['12% margin', '+7pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8 },
      { id: 'interest_other', col: 5, order: 2, type: 'cost', label: ['Interest', '& other'], value: 0.2 },
    ],
    links: [
      { source: 'foods', target: 'north_america', value: 6.4, sourceWidth: 94, targetWidth: 101, sourceOrder: 0, targetOrder: 0 },
      { source: 'pepsico_beverages', target: 'north_america', value: 7.2, sourceWidth: 108, targetWidth: 101, sourceOrder: 0, targetOrder: 1 },
      { source: 'north_america', target: 'revenue', value: 13.6, sourceWidth: 202, targetWidth: 211, sourceOrder: 0, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'ib_franchise', target: 'revenue', value: 1.5, width: 21, sourceOrder: 0, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'latam', target: 'revenue', value: 2.9, width: 42, sourceOrder: 0, targetOrder: 2, linkTint: NAVY_LINK },
      { source: 'emea', target: 'revenue', value: 5.0, width: 72, sourceOrder: 0, targetOrder: 3, linkTint: NAVY_LINK },
      { source: 'apac', target: 'revenue', value: 1.1, width: 15, sourceOrder: 0, targetOrder: 4, linkTint: NAVY_LINK },
      { source: 'revenue', target: 'gross_profit', value: 13.1, sourceWidth: 197, targetWidth: 195, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 11.1, width: 164, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.0, sourceWidth: 59, targetWidth: 59, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 9.1, sourceWidth: 136, targetWidth: 134, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.0, sourceWidth: 43, targetWidth: 42, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.8, width: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_other', value: 0.2, sourceWidth: 6, targetWidth: 5, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: '百事公司 · 2026 财年第二季度',
        meta: {
          title: '百事公司 2026 财年第二季度利润表', period: '',
          periodNote: '', titleTextLength: 2000,
        },
        nodes: {
          foods: { label: '食品', notes: ['同比 (2%)'] },
          pepsico_beverages: { label: ['百事', '饮料'], notes: ['同比 +7%'] },
          north_america: { label: '北美', notes: ['同比 (3%)'] },
          ib_franchise: { label: '国际饮料特许经营', notes: ['同比 +11%'] },
          latam: { label: '拉丁美洲', notes: ['同比 +15%'] }, emea: { label: '欧洲中东非洲', notes: ['同比 +10%'] },
          apac: { label: '亚太', notes: ['同比 +12%'] }, revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 54%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用 SG&A' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 +7 个百分点'] },
          tax: { label: '税费' }, interest_other: { label: ['利息', '及其他'] },
        },
        layout: { labels: labels(true) },
      },
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push(data);
})();

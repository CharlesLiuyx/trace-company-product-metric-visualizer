/* Tesla Q3 FY23 income statement ($B), reconstructed from the measured Source Sankey. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TESLA_RED = '#e51837';
  const TESLA_LOGO_PATH =
    'M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z';
  const teslaPath = (window.SANKEY_BRAND && window.SANKEY_BRAND.tesla) || TESLA_LOGO_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    semanticRole: options.semanticRole,
    lines,
  });

  const annotations = `
    <g transform="translate(158 519) scale(1.04)" data-typography-role="brand">
      ${businessIcons.teslaVehicleStack || ''}
    </g>`;

  const labels = (isZh) => {
    const text = isZh ? {
      autoSales: '汽车销售', auto: '汽车业务', regulatory: '监管积分', leasing: '租赁',
      energy: '能源发电与储能', services: '服务', revenue: '收入', gross: '毛利润',
      cost: ['收入', '成本'], operatingProfit: '营业利润', operatingExpenses: ['运营', '费用'],
      other: '其他', net: '净利润', tax: '税费', sga: '销售及管理', rnd: '研发',
      yoy4: '同比 +4%', yoy5: '同比 +5%', yoy94: '同比 +94%', yoy21: '同比 (21%)',
      yoy40: '同比 +40%', yoy32: '同比 +32%', yoy9: '同比 +9%',
      margin18: '利润率 18%', pp7: '同比 (7 个百分点)', margin8: '利润率 8%',
      pp10: '同比 (10 个百分点)', pp8: '同比 (8 个百分点)',
    } : {
      autoSales: 'Auto sales', auto: 'Auto', regulatory: 'Regulatory credits', leasing: 'Leasing',
      energy: 'Energy generation & storage', services: 'Services', revenue: 'Revenue', gross: 'Gross profit',
      cost: ['Cost of', 'revenue'], operatingProfit: 'Operating profit', operatingExpenses: ['Operating', 'expenses'],
      other: 'Other', net: 'Net profit', tax: 'Tax', sga: 'SG&A', rnd: 'R&D',
      yoy4: '+4% Y/Y', yoy5: '+5% Y/Y', yoy94: '+94% Y/Y', yoy21: '(21%) Y/Y',
      yoy40: '+40% Y/Y', yoy32: '+32% Y/Y', yoy9: '+9% Y/Y',
      margin18: '18% margin', pp7: '(7pp) Y/Y', margin8: '8% margin',
      pp10: '(10pp) Y/Y', pp8: '(8pp) Y/Y',
    };

    return {
      auto_sales: {
        blocks: [
          block(475, 297, [line('$value', 39), line(text.yoy4, 28, { color: NOTE })], { lineGap: 11 }),
          block(278, 449, [line(text.autoSales, 40, { weight: 800 })], { semanticRole: 'top-aligned-side-label' }),
        ],
      },
      regulatory_credits: {
        blocks: [
          block(475, 891, [line('$value', 39), line(text.yoy94, 28, { color: NOTE })], { lineGap: 11 }),
          block(408, 974, [line(text.regulatory, isZh ? 36 : 38, { weight: 800 })], { anchor: 'end' }),
        ],
      },
      leasing: {
        blocks: [
          block(475, 1033, [line('$value', 39), line(text.yoy21, 28, { color: NOTE })], { lineGap: 11 }),
          block(408, 1122, [line(text.leasing, 38, { weight: 800 })], { anchor: 'end', semanticRole: 'top-aligned-side-label' }),
        ],
      },
      auto: {
        blocks: [block(843, 356, [line(text.auto, 40, { weight: 800 }), line('$value', 39), line(text.yoy5, 28, { color: NOTE })], { lineGap: 11 })],
      },
      energy_generation_storage: {
        blocks: [
          block(688, 1132, [line('$value', 39), line(text.yoy40, 28, { color: NOTE })], { lineGap: 11 }),
          block(587, 1226, [line(text.energy, isZh ? 34 : 38, { weight: 800 })], { anchor: 'end' }),
        ],
      },
      services: {
        blocks: [
          block(964, 1217, [line('$value', 39), line(text.yoy32, 28, { color: NOTE })], { lineGap: 11 }),
          block(810, 1310, [line(text.services, 40, { weight: 800 })], { semanticRole: 'top-aligned-side-label' }),
        ],
      },
      revenue: {
        blocks: [block(1225, 453, [line(text.revenue, 40, { weight: 800 }), line('$value', 39), line(text.yoy9, 28, { color: NOTE })], { lineGap: 11 })],
      },
      gross_profit: {
        blocks: [block(1612, 335, [line(text.gross, 38, { weight: 800 }), line('$value', 39), line(text.margin18, 28, { color: NOTE }), line(text.pp7, 28, { color: NOTE })], { lineGap: 10 })],
      },
      cost_of_revenue: {
        blocks: [block(1591, 1212, [...text.cost.map((item) => line(item, 38, { weight: 800 })), line('$value', 37)], { lineGap: 9 })],
      },
      operating_profit: {
        blocks: [block(1984, 276, [line(text.operatingProfit, 38, { weight: 800 }), line('$value', 38), line(text.margin8, 28, { color: NOTE }), line(text.pp10, 28, { color: NOTE })], { lineGap: 10 })],
      },
      operating_expenses: {
        blocks: [block(1955, 728, [...text.operatingExpenses.map((item) => line(item, 38, { weight: 800 })), line('$value', 37)], { lineGap: 9 })],
      },
      other: {
        blocks: [block(2233, 273, [line(text.other, 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
      },
      interest: {
        blocks: [block(2240, 514, [line(isZh ? '利息' : 'Interest', 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
      },
      net_profit: {
        blocks: [block(2491, 365, [line(text.net, 38, { weight: 800 }), line('$value', 38), line(text.margin8, 28, { color: NOTE }), line(text.pp8, 28, { color: NOTE })], { lineGap: 10 })],
      },
      tax: {
        blocks: [block(2486, 629, [line(text.tax, 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
      },
      sga: {
        blocks: [block(2486, 900, [line(text.sga, isZh ? 29 : 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
      },
      rnd: {
        blocks: [block(2486, 1132, [line(text.rnd, 31, { weight: 800 }), line('$value', 31)], { lineGap: 8 })],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q3-fy23',
    name: 'Tesla · Q3 FY23',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q3 FY23 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 179,
      titleSize: 99,
      titleWeight: 800,
      titleTextLength: 2045,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 263,
      logoHeight: 206,
      logoY: 235,
      logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${teslaPath}" fill="${TESLA_RED}"/>`,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 23,
      nodes: {
        auto_sales: { x: 440, y: 401, width: 72, height: 428 },
        regulatory_credits: { x: 440, y: 988, width: 72, height: 11 },
        leasing: { x: 440, y: 1132, width: 72, height: 10 },
        auto: { x: 808, y: 498, width: 72, height: 451 },
        energy_generation_storage: { x: 645, y: 1228, width: 72, height: 34 },
        services: { x: 928, y: 1320, width: 72, height: 48 },
        revenue: { x: 1189, y: 598, width: 72, height: 538 },
        gross_profit: { x: 1555, y: 517, width: 72, height: 93 },
        cost_of_revenue: { x: 1555, y: 757, width: 72, height: 441 },
        operating_profit: { x: 1927, y: 455, width: 72, height: 39 },
        operating_expenses: { x: 1927, y: 657, width: 72, height: 53 },
        other: { x: 2197, y: 364, width: 72, height: 4 },
        interest: { x: 2203, y: 496, width: 72, height: 3 },
        net_profit: { x: 2307, y: 389, width: 72, height: 41 },
        tax: { x: 2307, y: 664, width: 72, height: 1 },
        sga: { x: 2307, y: 926, width: 72, height: 26 },
        rnd: { x: 2307, y: 1149, width: 72, height: 25 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 18.6, notes: ['+4% Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.6, notes: ['+94% Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.5, notes: ['(21%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 19.6, notes: ['+5% Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: 'Energy generation & storage', value: 1.6, notes: ['+40% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 2.2, notes: ['+32% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 23.4, notes: ['+9% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.2, notes: ['18% margin', '(7pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.8, notes: ['8% margin', '(10pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.4 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.037, valueText: '$37M' },
      { id: 'interest', col: 5, order: 1, type: 'profit', label: 'Interest', value: 0.2 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['8% margin', '(8pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 1.3 },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.2 },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 18.6, sourceWidth: 428, targetWidth: 430, sourceOrder: 0, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.6, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.5, sourceWidth: 10, targetWidth: 10, sourceOrder: 0, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 19.6, sourceWidth: 451, targetWidth: 454, sourceOrder: 0, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 1.6, sourceWidth: 34, targetWidth: 35, sourceOrder: 0, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 2.2, sourceWidth: 48, targetWidth: 49, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.2, sourceWidth: 97, targetWidth: 93, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 19.2, sourceWidth: 441, targetWidth: 441, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.8, sourceWidth: 39, targetWidth: 39, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, sourceWidth: 54, targetWidth: 53, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.037, sourceWidth: 4, targetWidth: 1, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.6, sourceWidth: 35, targetWidth: 35, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'interest', target: 'net_profit', value: 0.2, sourceWidth: 3, targetWidth: 5, sourceOrder: 0, targetOrder: 2, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 4, targetWidth: 1, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.3, sourceWidth: 28, targetWidth: 26, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.2, sourceWidth: 25, targetWidth: 25, sourceOrder: 1, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2023 财年第三季度',
        meta: { title: 'Tesla 2023 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 2045 },
        annotationsSvg: annotations,
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +4%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 +94%'] },
          leasing: { label: '租赁', notes: ['同比 (21%)'] },
          auto: { label: '汽车业务', notes: ['同比 +5%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +40%'] },
          services: { label: '服务', notes: ['同比 +32%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 (7 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (10 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (8 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售及管理' },
          rnd: { label: '研发' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();

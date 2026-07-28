/* Tesla Q3 FY25 income statement ($B), reconstructed from the source Sankey. */
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
  const CARD_RED = '#e41537';
  const TESLA_LOGO_PATH =
    'M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z';
  const teslaPath = (window.SANKEY_BRAND && window.SANKEY_BRAND.tesla) || TESLA_LOGO_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  function metricCard(x, title, value, note) {
    return `
      <g>
        <rect x="${x}" y="1225" width="188" height="148" rx="24" fill="${CARD_RED}"/>
        <text x="${x + 94}" y="1275" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
        <text x="${x + 94}" y="1323" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">${value}</text>
        <text x="${x + 94}" y="1356" text-anchor="middle" font-size="21" font-weight="700" fill="#ffffff">${note}</text>
      </g>`;
  }

  function annotations(production, deliveries, productionNote, deliveriesNote) {
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        <g transform="translate(52 566) scale(0.78)" data-typography-role="brand">${businessIcons.teslaAutoCluster || ''}</g>
        <g transform="translate(34 1094) scale(0.95)" data-typography-role="brand">${businessIcons.teslaEnergyCluster || ''}</g>
        <g transform="translate(640 1254) scale(0.82)" data-typography-role="brand">${businessIcons.teslaCharger || ''}</g>
        ${metricCard(2058, production, '410K', productionNote)}
        ${metricCard(2255, deliveries, '497K', deliveriesNote)}
      </g>`;
  }

  function labelBlock(x, top, lines, options = {}) {
    return {
      x,
      top,
      anchor: options.anchor || 'middle',
      lineGap: options.lineGap ?? 8,
      lines,
    };
  }

  function line(text, size, weight, color) {
    return { text, size, weight, ...(color ? { color } : {}) };
  }

  function makeLabels(copy) {
    return {
      auto_sales: {
        blocks: [
          labelBlock(488, 267, [line('$value', 39, 400), line(copy.autoSalesNote, 28, 400, NOTE)], { lineGap: 11 }),
          labelBlock(304, 521, [line(copy.autoSales, 40, 800)]),
        ],
      },
      regulatory_credits: {
        blocks: [
          labelBlock(488, 753, [line('$value', 39, 400), line(copy.regulatoryCreditsNote, 28, 400, NOTE)], {
            lineGap: 11,
          }),
          labelBlock(399, 831, [line(copy.regulatoryCredits, 38, 800)], { anchor: 'end' }),
        ],
      },
      leasing: {
        blocks: [
          labelBlock(488, 880, [line('$value', 39, 400), line(copy.leasingNote, 28, 400, NOTE)], { lineGap: 11 }),
          labelBlock(407, 956, [line(copy.leasing, 38, 800)], { anchor: 'end' }),
        ],
      },
      auto: {
        blocks: [
          labelBlock(864, 373, [
            line(copy.auto, 39, 800),
            line('$value', 39, 400),
            line(copy.autoNote, 28, 400, NOTE),
          ], { lineGap: 11 }),
        ],
      },
      energy_generation_storage: {
        blocks: [
          labelBlock(666, 1028, [line('$value', 39, 400), line(copy.energyNote, 28, 400, NOTE)], { lineGap: 11 }),
          labelBlock(copy.energyNameX, 1096, copy.energyName.map((text) => line(text, 38, 800)), {
            anchor: copy.energyNameAnchor,
          }),
        ],
      },
      services: {
        blocks: [
          labelBlock(910, 1236, [line('$value', 39, 400), line(copy.servicesNote, 28, 400, NOTE)], { lineGap: 11 }),
          labelBlock(802, 1342, [line(copy.services, 40, 800)]),
        ],
      },
      revenue: {
        blocks: [
          labelBlock(1232, 496, [
            line(copy.revenue, 40, 800),
            line('$value', 39, 400),
            line(copy.revenueNote, 28, 400, NOTE),
          ], { lineGap: 11 }),
        ],
      },
      gross_profit: {
        blocks: [
          labelBlock(1609, 340, [
            line(copy.grossProfit, 38, 800),
            line('$value', 39, 400),
            line(copy.grossMargin, 28, 400, NOTE),
            line(copy.grossYoy, 28, 400, NOTE),
          ], { lineGap: 10 }),
        ],
      },
      cost_of_revenue: {
        blocks: [
          labelBlock(1610, 1219, [
            ...copy.costOfRevenue.map((text) => line(text, 38, 800)),
            line('$value', 37, 400),
          ], { lineGap: 9 }),
        ],
      },
      operating_profit: {
        blocks: [
          labelBlock(1981, 226, [
            line(copy.operatingProfit, 38, 800),
            line('$value', 38, 400),
            line(copy.operatingMargin, 28, 400, NOTE),
            line(copy.operatingYoy, 28, 400, NOTE),
          ], { lineGap: 10 }),
        ],
      },
      operating_expenses: {
        blocks: [
          labelBlock(1976, 696, [
            ...copy.operatingExpenses.map((text) => line(text, 38, 800)),
            line('$value', 37, 400),
          ], { lineGap: 9 }),
        ],
      },
      interest: {
        blocks: [
          labelBlock(2245, 400, [line(copy.interest, 32, 800), line('$value', 31, 400)]),
        ],
      },
      net_profit: {
        blocks: [
          labelBlock(2508, 287, [
            line(copy.netProfit, 38, 800),
            line('$value', 38, 400),
            line(copy.netMargin, 28, 400, NOTE),
            line(copy.netYoy, 28, 400, NOTE),
          ], { lineGap: 10 }),
        ],
      },
      tax: {
        blocks: [labelBlock(2507, 513, [line(copy.tax, 31, 800), line('$value', 31, 400)])],
      },
      rnd: {
        blocks: [
          labelBlock(2507, 685, [
            line(copy.rnd, 31, 800),
            line('$value', 31, 400),
            line(copy.rndShare, 28, 400, NOTE),
            line(copy.rndYoy, 28, 400, NOTE),
          ]),
        ],
      },
      sga: {
        blocks: [
          labelBlock(2507, 870, [
            line(copy.sga, 31, 800),
            line('$value', 31, 400),
            line(copy.sgaShare, 28, 400, NOTE),
            line(copy.sgaYoy, 28, 400, NOTE),
          ]),
        ],
      },
      restructuring: {
        blocks: [
          labelBlock(2507, 1060, [
            line(copy.restructuring, 31, 800),
            line('$value', 31, 400),
            line(copy.restructuringShare, 28, 400, NOTE),
            line(copy.restructuringYoy, 28, 400, NOTE),
          ]),
        ],
      },
    };
  }

  const enCopy = {
    autoSales: 'Auto sales',
    autoSalesNote: '+8% Y/Y',
    regulatoryCredits: 'Regulatory credits',
    regulatoryCreditsNote: '(44%) Y/Y',
    leasing: 'Leasing',
    leasingNote: '(4%) Y/Y',
    auto: 'Auto',
    autoNote: '+6% Y/Y',
    energyName: ['Energy generation', '& storage'],
    energyNameX: 243,
    energyNameAnchor: 'start',
    energyNote: '+44% Y/Y',
    services: 'Services',
    servicesNote: '+25% Y/Y',
    revenue: 'Revenue',
    revenueNote: '+12% Y/Y',
    grossProfit: 'Gross profit',
    grossMargin: '18% margin',
    grossYoy: '(2pp) Y/Y',
    costOfRevenue: ['Cost of', 'revenue'],
    operatingProfit: 'Operating profit',
    operatingMargin: '6% margin',
    operatingYoy: '(5pp) Y/Y',
    operatingExpenses: ['Operating', 'expenses'],
    interest: 'Interest',
    netProfit: 'Net profit',
    netMargin: '5% margin',
    netYoy: '(4pp) Y/Y',
    tax: 'Tax',
    rnd: 'R&D',
    rndShare: '6% of revenue',
    rndYoy: '+2pp Y/Y',
    sga: 'SG&A',
    sgaShare: '6% of revenue',
    sgaYoy: '+1pp Y/Y',
    restructuring: 'Restructuring',
    restructuringShare: '1% of revenue',
    restructuringYoy: '+1pp Y/Y',
  };

  const zhCopy = {
    autoSales: '汽车销售',
    autoSalesNote: '同比 +8%',
    regulatoryCredits: '监管积分',
    regulatoryCreditsNote: '同比 (44%)',
    leasing: '租赁',
    leasingNote: '同比 (4%)',
    auto: '汽车业务',
    autoNote: '同比 +6%',
    energyName: ['能源发电', '与储能'],
    energyNameX: 594,
    energyNameAnchor: 'end',
    energyNote: '同比 +44%',
    services: '服务',
    servicesNote: '同比 +25%',
    revenue: '收入',
    revenueNote: '同比 +12%',
    grossProfit: '毛利润',
    grossMargin: '利润率 18%',
    grossYoy: '同比 (2 个百分点)',
    costOfRevenue: ['收入', '成本'],
    operatingProfit: '营业利润',
    operatingMargin: '利润率 6%',
    operatingYoy: '同比 (5 个百分点)',
    operatingExpenses: ['运营', '费用'],
    interest: '利息',
    netProfit: '净利润',
    netMargin: '利润率 5%',
    netYoy: '同比 (4 个百分点)',
    tax: '税费',
    rnd: '研发',
    rndShare: '占收入 6%',
    rndYoy: '同比 +2 个百分点',
    sga: '销售及管理',
    sgaShare: '占收入 6%',
    sgaYoy: '同比 +1 个百分点',
    restructuring: '重组',
    restructuringShare: '占收入 1%',
    restructuringYoy: '同比 +1 个百分点',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q3-fy25',
    name: 'Tesla - Q3 FY25',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 148,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2040,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 250,
      logoHeight: 215,
      logoY: 252,
      logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${teslaPath}" fill="${TESLA_RED}" transform="matrix(1.062 0 0 0.93 -1.1 0.36)"/>`,
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
    annotationsSvg: annotations('Production', 'Deliveries', '(5%) Y/Y', '+7% Y/Y'),
    layout: {
      scale: 16.48,
      nodes: {
        auto_sales: { x: 451, y: 380, width: 71, height: 334 },
        regulatory_credits: { x: 451, y: 851, width: 71, height: 5 },
        leasing: { x: 451, y: 977, width: 71, height: 5 },
        auto: { x: 825, y: 522, width: 70, height: 349 },
        energy_generation_storage: { x: 627, y: 1118, width: 70, height: 55 },
        services: { x: 887, y: 1336, width: 70, height: 56 },
        revenue: { x: 1199, y: 650, width: 70, height: 463 },
        gross_profit: { x: 1572, y: 522, width: 71, height: 81 },
        cost_of_revenue: { x: 1572, y: 825, width: 71, height: 379 },
        operating_profit: { x: 1946, y: 405, width: 71, height: 25 },
        operating_expenses: { x: 1946, y: 630, width: 71, height: 55 },
        interest: { x: 2209, y: 383, width: 70, height: 4 },
        net_profit: { x: 2319, y: 320, width: 71, height: 21 },
        tax: { x: 2319, y: 540, width: 71, height: 7 },
        rnd: { x: 2319, y: 700, width: 71, height: 25 },
        sga: { x: 2319, y: 891, width: 71, height: 23 },
        restructuring: { x: 2319, y: 1095, width: 71, height: 1 },
      },
      labels: makeLabels(enCopy),
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 20.4, notes: ['+8% Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.4, notes: ['(44%) Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.4, notes: ['(4%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 21.2, notes: ['+6% Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: ['Energy generation', '& storage'], value: 3.4, notes: ['+44% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 3.5, notes: ['+25% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 28.1, notes: ['+12% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.1, notes: ['18% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 23.0, valueText: '($23.0B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['6% margin', '(5pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.4 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.4 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.4, notes: ['5% margin', '(4pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 1.6, notes: ['6% of revenue', '+2pp Y/Y'] },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 1.6, notes: ['6% of revenue', '+1pp Y/Y'] },
      { id: 'restructuring', col: 6, order: 4, type: 'cost', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 20.4, width: 334, targetWidth: 334, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.4, width: 5, targetWidth: 5, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.4, sourceWidth: 5, targetWidth: 10, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 21.2, sourceWidth: 349, targetWidth: 349, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 3.4, sourceWidth: 55, targetWidth: 55, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 3.5, sourceWidth: 56, targetWidth: 59, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.1, sourceWidth: 81, targetWidth: 81, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 23.0, sourceWidth: 382, targetWidth: 379, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 25, targetWidth: 25, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.4, sourceWidth: 55, targetWidth: 55, sourceOrder: 1 },
      {
        source: 'operating_profit',
        target: 'net_profit',
        value: 1.0,
        sourceWidth: 17,
        targetWidth: 17,
        sourceOrder: 0,
        targetOrder: 0,
        y0: 413.5,
        y1: 328.5,
        curve: { c1x: 2130, c1y: 413.5, c2x: 2250, c2y: 328.5 },
      },
      {
        source: 'interest',
        target: 'net_profit',
        value: 0.4,
        sourceWidth: 4,
        targetWidth: 4,
        targetOrder: 1,
        y1: 339,
        curve: { c1x: 2285, c1y: 385, c2x: 2307, c2y: 339 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 0.6,
        sourceWidth: 8,
        targetWidth: 7,
        sourceOrder: 1,
        y0: 426,
        curve: { c1x: 2110, c1y: 426, c2x: 2240, c2y: 543.5 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 1.6, sourceWidth: 26, targetWidth: 25, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.6, sourceWidth: 26, targetWidth: 23, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.2, sourceWidth: 3, targetWidth: 1, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2025 财年第三季度',
        meta: { title: 'Tesla 2025 财年第三季度利润表', period: '', periodNote: '' },
        annotationsSvg: annotations('产量', '交付量', '同比 (5%)', '同比 +7%'),
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +8%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 (44%)'] },
          leasing: { label: '租赁', notes: ['同比 (4%)'] },
          auto: { label: '汽车业务', notes: ['同比 +6%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +44%'] },
          services: { label: '服务', notes: ['同比 +25%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 6%', '同比 +2 个百分点'] },
          sga: { label: '销售及管理', notes: ['占收入 6%', '同比 +1 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 1%', '同比 +1 个百分点'] },
        },
        layout: { labels: makeLabels(zhCopy) },
      },
    },
  });
})();

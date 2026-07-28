/* Tesla Q1 FY23 income statement ($B), reconstructed from the Source Sankey. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#5e5e5e';
  const SOURCE_NODE = '#666666';
  const SOURCE_LINK = '#b3b3b3';
  const GREEN_NODE = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED_NODE = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TESLA_RED = '#e51837';
  const TESLA_LOGO_PATH =
    'M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z';
  const teslaPath = (window.SANKEY_BRAND && window.SANKEY_BRAND.tesla) || TESLA_LOGO_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  function labels(copy) {
    return {
      auto_sales: {
        blocks: [
          { x: 482, top: 292, anchor: 'middle', lineGap: 11, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: copy.autoSalesNote, size: 28, weight: 400, color: NOTE },
          ] },
          { x: 270, top: 428, anchor: 'middle', semanticRole: 'source-positioned-name', lines: [
            { text: copy.autoSales, size: 40, weight: 800 },
          ] },
        ],
      },
      regulatory_credits: {
        blocks: [
          { x: 477, top: 895, anchor: 'middle', lineGap: 11, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: copy.regulatoryCreditsNote, size: 28, weight: 400, color: NOTE },
          ] },
          { x: 396, top: 985, anchor: 'end', semanticRole: 'source-positioned-name', lines: [
            { text: copy.regulatoryCredits, size: 38, weight: 800 },
          ] },
        ],
      },
      leasing: {
        blocks: [
          { x: 476, top: 1052, anchor: 'middle', lineGap: 11, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: copy.leasingNote, size: 28, weight: 400, color: NOTE },
          ] },
          { x: 390, top: 1144, anchor: 'end', semanticRole: 'source-positioned-name', lines: [
            { text: copy.leasing, size: 38, weight: 800 },
          ] },
        ],
      },
      auto: {
        blocks: [{ x: 856, top: 353, anchor: 'middle', lineGap: 11, lines: [
          { text: copy.auto, size: 39, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: copy.autoNote, size: 28, weight: 400, color: NOTE },
        ] }],
      },
      energy_generation_storage: {
        blocks: [
          { x: 642, top: 1163, anchor: 'middle', lineGap: 11, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: copy.energyNote, size: 28, weight: 400, color: NOTE },
          ] },
          { x: 309, top: 1252, anchor: 'middle', lines: [
            { text: copy.energy, size: 38, weight: 800 },
          ] },
        ],
      },
      services: {
        blocks: [
          { x: 943, top: 1244, anchor: 'middle', lineGap: 11, lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: copy.servicesNote, size: 28, weight: 400, color: NOTE },
          ] },
          { x: 808, top: 1344, anchor: 'middle', lines: [
            { text: copy.services, size: 40, weight: 800 },
          ] },
        ],
      },
      revenue: {
        blocks: [{ x: 1223, top: 463, anchor: 'middle', lineGap: 11, lines: [
          { text: copy.revenue, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: copy.revenueNote, size: 28, weight: 400, color: NOTE },
        ] }],
      },
      gross_profit: {
        blocks: [{ x: 1592, top: 326, anchor: 'middle', lineGap: 10, lines: [
          { text: copy.grossProfit, size: 38, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: copy.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: copy.grossNote, size: 28, weight: 400, color: NOTE },
        ] }],
      },
      cost_of_revenue: {
        blocks: [{ x: 1595, top: 1247, anchor: 'middle', lineGap: 9, lines: [
          { text: copy.costOf, size: 38, weight: 800 },
          { text: copy.revenueLower, size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] }],
      },
      operating_profit: {
        blocks: [{ x: 1978, top: 272, anchor: 'middle', lineGap: 10, lines: [
          { text: copy.operatingProfit, size: 38, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: copy.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: copy.operatingNote, size: 28, weight: 400, color: NOTE },
        ] }],
      },
      operating_expenses: {
        blocks: [{ x: 1964, top: 713, anchor: 'middle', lineGap: 9, lines: [
          { text: copy.operating, size: 38, weight: 800 },
          { text: copy.expenses, size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] }],
      },
      interest: {
        blocks: [{ x: 2231, top: 518, anchor: 'middle', lineGap: 8, lines: [
          { text: copy.interest, size: 32, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }],
      },
      net_profit: {
        blocks: [{ x: 2491, top: 392, anchor: 'middle', lineGap: 10, lines: [
          { text: copy.netProfit, size: 38, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: copy.netMargin, size: 28, weight: 400, color: NOTE },
          { text: copy.netNote, size: 28, weight: 400, color: NOTE },
        ] }],
      },
      tax: {
        blocks: [{ x: 2486, top: 620, anchor: 'middle', lineGap: 8, lines: [
          { text: copy.tax, size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }],
      },
      other: {
        blocks: [{ x: 2487, top: 722, anchor: 'middle', lineGap: 8, lines: [
          { text: copy.other, size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }],
      },
      sga: {
        blocks: [{ x: 2486, top: 887, anchor: 'middle', lineGap: 8, lines: [
          { text: copy.sga, size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }],
      },
      rnd: {
        blocks: [{ x: 2486, top: 1103, anchor: 'middle', lineGap: 8, lines: [
          { text: copy.rnd, size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] }],
      },
    };
  }

  const en = {
    autoSales: 'Auto sales', autoSalesNote: '+22% Y/Y',
    regulatoryCredits: 'Regulatory credits', regulatoryCreditsNote: '(23%) Y/Y',
    leasing: 'Leasing', leasingNote: '(16%) Y/Y',
    auto: 'Auto', autoNote: '+18% Y/Y',
    energy: 'Energy generation & storage', energyNote: '+148% Y/Y',
    services: 'Services', servicesNote: '+44% Y/Y',
    revenue: 'Revenue', revenueLower: 'revenue', revenueNote: '+24% Y/Y',
    grossProfit: 'Gross profit', grossMargin: '19% margin', grossNote: '(10pp) Y/Y',
    costOf: 'Cost of',
    operatingProfit: 'Operating profit', operatingMargin: '11% margin', operatingNote: '(8pp) Y/Y',
    operating: 'Operating', expenses: 'expenses',
    interest: 'Interest', netProfit: 'Net profit', netMargin: '11% margin', netNote: '(7pp) Y/Y',
    tax: 'Tax', other: 'Other', sga: 'SG&A', rnd: 'R&D',
  };
  const zh = {
    autoSales: '汽车销售', autoSalesNote: '同比 +22%',
    regulatoryCredits: '监管积分', regulatoryCreditsNote: '同比 (23%)',
    leasing: '租赁', leasingNote: '同比 (16%)',
    auto: '汽车业务', autoNote: '同比 +18%',
    energy: '能源发电与储能', energyNote: '同比 +148%',
    services: '服务', servicesNote: '同比 +44%',
    revenue: '收入', revenueLower: '成本', revenueNote: '同比 +24%',
    grossProfit: '毛利润', grossMargin: '利润率 19%', grossNote: '同比 (10 个百分点)',
    costOf: '收入',
    operatingProfit: '营业利润', operatingMargin: '利润率 11%', operatingNote: '同比 (8 个百分点)',
    operating: '运营', expenses: '费用',
    interest: '利息', netProfit: '净利润', netMargin: '利润率 11%', netNote: '同比 (7 个百分点)',
    tax: '税费', other: '其他', sga: '销售及管理', rnd: '研发',
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q1-fy23',
    name: 'Tesla - Q1 FY23',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q1 FY23 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q1-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 148,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2040,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 268,
      logoHeight: 207,
      logoY: 241,
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
        source: { node: SOURCE_NODE, label: NOTE },
        hub: { node: SOURCE_NODE, label: NOTE },
        profit: { node: GREEN_NODE, label: GREEN_LABEL },
        cost: { node: RED_NODE, label: RED_LABEL },
      },
      linkTint: {
        source: SOURCE_LINK,
        hub: SOURCE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: `
      <g transform="translate(160 500)" data-typography-role="brand"
         data-annotation-clearance="tesla-vehicle-stack">
        ${businessIcons.teslaVehicleStack || ''}
      </g>`,
    layout: {
      scale: 23.4,
      nodes: {
        auto_sales: { x: 440, y: 392, width: 71, height: 440 },
        regulatory_credits: { x: 440, y: 995, width: 71, height: 10 },
        leasing: { x: 440, y: 1152, width: 71, height: 12 },
        auto: { x: 821, y: 503, width: 70, height: 467 },
        energy_generation_storage: { x: 608, y: 1256, width: 71, height: 34 },
        services: { x: 906, y: 1345, width: 70, height: 41 },
        revenue: { x: 1188, y: 612, width: 70, height: 545 },
        gross_profit: { x: 1557, y: 516, width: 70, height: 103 },
        cost_of_revenue: { x: 1564, y: 787, width: 70, height: 439 },
        operating_profit: { x: 1935, y: 456, width: 71, height: 60 },
        operating_expenses: { x: 1933, y: 652, width: 70, height: 41 },
        interest: { x: 2196, y: 501, width: 70, height: 2 },
        net_profit: { x: 2308, y: 388, width: 71, height: 58 },
        tax: { x: 2308, y: 648, width: 71, height: 4 },
        other: { x: 2308, y: 730, width: 71, height: 1 },
        sga: { x: 2308, y: 906, width: 71, height: 22 },
        rnd: { x: 2308, y: 1126, width: 71, height: 15 },
      },
      labels: labels(en),
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 18.9, notes: ['+22% Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.5, notes: ['(23%) Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.6, notes: ['(16%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 20.0, valueText: '$20.0B', notes: ['+18% Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: 'Energy generation & storage', value: 1.5, notes: ['+148% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 1.8, notes: ['+44% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 23.3, notes: ['+24% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.5, notes: ['19% margin', '(10pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 18.8 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.7, notes: ['11% margin', '(8pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.8 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.2 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.5, notes: ['11% margin', '(7pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'other', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.048, valueText: '($48M)' },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 1.1 },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 0.8 },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 18.9, sourceWidth: 440, targetWidth: 440, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.5, sourceWidth: 10, targetWidth: 10, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.6, sourceWidth: 12, targetWidth: 17, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 20.0, sourceWidth: 467, targetWidth: 467, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 1.5, sourceWidth: 34, targetWidth: 34, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 1.8, sourceWidth: 41, targetWidth: 44, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.5, sourceWidth: 104, targetWidth: 103, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 18.8, sourceWidth: 441, targetWidth: 439, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 60, targetWidth: 60, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.8, sourceWidth: 43, targetWidth: 41, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.5, sourceWidth: 55, targetWidth: 54, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 4, targetWidth: 4, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.048, sourceWidth: 1, targetWidth: 1, sourceOrder: 2 },
      { source: 'interest', target: 'net_profit', value: 0.2, sourceWidth: 2, targetWidth: 2, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 1.1, sourceWidth: 24, targetWidth: 22, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 17, targetWidth: 15, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2023 财年第一季度',
        meta: { title: 'Tesla 2023 财年第一季度利润表', period: '', periodNote: '' },
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +22%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 (23%)'] },
          leasing: { label: '租赁', notes: ['同比 (16%)'] },
          auto: { label: '汽车业务', notes: ['同比 +18%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +148%'] },
          services: { label: '服务', notes: ['同比 +44%'] },
          revenue: { label: '收入', notes: ['同比 +24%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 19%', '同比 (10 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 (8 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (7 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sga: { label: '销售及管理' },
          rnd: { label: '研发' },
        },
        layout: { labels: labels(zh) },
      },
    },
  });
})();

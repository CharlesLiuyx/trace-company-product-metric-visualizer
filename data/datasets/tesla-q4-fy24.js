/* Tesla Q4 FY24 income statement ($B), reconstructed from the source Sankey. */
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

  function makeLabels(zh) {
    const text = zh
      ? {
          autoSales: '汽车销售', autoSalesNote: '同比 (10%)',
          credits: '监管积分', creditsNote: '同比 +60%',
          leasing: '租赁', leasingNote: '同比 (11%)',
          auto: '汽车业务', autoNote: '同比 (8%)',
          energy: ['能源发电', '与储能'], energyNote: '同比 +113%',
          services: '服务', servicesNote: '同比 +31%',
          revenue: '收入', revenueNote: '同比 +2%',
          gross: '毛利润', grossMargin: '利润率 16%', grossNote: '同比 (1 个百分点)',
          cost: ['收入', '成本'],
          operatingProfit: '营业利润', operatingMargin: '利润率 6%', operatingNote: '同比 (2 个百分点)',
          operatingExpenses: ['运营', '费用'],
          other: '其他', interest: '利息',
          net: '净利润', netMargin: '利润率 9%', netNote: '同比 (22 个百分点)',
          tax: '税费',
          sga: '销售及管理', sgaShare: '占收入 5%', sgaNote: '同比 +0 个百分点',
          rnd: '研发', rndShare: '占收入 5%', rndNote: '同比 +1 个百分点',
        }
      : {
          autoSales: 'Auto sales', autoSalesNote: '(10%) Y/Y',
          credits: 'Regulatory credits', creditsNote: '+60% Y/Y',
          leasing: 'Leasing', leasingNote: '(11%) Y/Y',
          auto: 'Auto', autoNote: '(8%) Y/Y',
          energy: ['Energy generation', '& storage'], energyNote: '+113% Y/Y',
          services: 'Services', servicesNote: '+31% Y/Y',
          revenue: 'Revenue', revenueNote: '+2% Y/Y',
          gross: 'Gross profit', grossMargin: '16% margin', grossNote: '(1pp) Y/Y',
          cost: ['Cost of', 'revenue'],
          operatingProfit: 'Operating profit', operatingMargin: '6% margin', operatingNote: '(2pp) Y/Y',
          operatingExpenses: ['Operating', 'expenses'],
          other: 'Other', interest: 'Interest',
          net: 'Net profit', netMargin: '9% margin', netNote: '(22pp) Y/Y',
          tax: 'Tax',
          sga: 'SG&A', sgaShare: '5% of revenue', sgaNote: '+0pp Y/Y',
          rnd: 'R&D', rndShare: '5% of revenue', rndNote: '+1pp Y/Y',
        };

    return {
      auto_sales: { blocks: [
        { x: 480, top: 323, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: text.autoSalesNote, size: 28, weight: 400, color: NOTE },
        ] },
        {
          x: 271, top: 399, anchor: 'middle', semanticRole: 'top-aligned-side-label',
          lines: [{ text: text.autoSales, size: 40, weight: 800 }],
        },
      ] },
      regulatory_credits: { blocks: [
        { x: 483, top: 762, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: text.creditsNote, size: 28, weight: 400, color: NOTE },
        ] },
        {
          x: 400, top: 841, anchor: 'end', semanticRole: 'top-aligned-side-label',
          lines: [{ text: text.credits, size: 39, weight: 800 }],
        },
      ] },
      leasing: { blocks: [
        { x: 486, top: 885, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: text.leasingNote, size: 28, weight: 400, color: NOTE },
        ] },
        { x: 410, top: 958, anchor: 'end', lines: [{ text: text.leasing, size: 38, weight: 800 }] },
      ] },
      auto: { blocks: [
        { x: 856, top: 390, anchor: 'middle', lineGap: 11, lines: [
          { text: text.auto, size: 39, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: text.autoNote, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      energy_generation_storage: { blocks: [
        { x: 729, top: 979, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: text.energyNote, size: 28, weight: 400, color: NOTE },
        ] },
        { x: 489, top: 1057, anchor: 'middle', lineGap: 8, lines: [
          { text: text.energy[0], size: 38, weight: 800 },
          { text: text.energy[1], size: 38, weight: 800 },
        ] },
      ] },
      services: { blocks: [
        { x: 971, top: 1115, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: text.servicesNote, size: 28, weight: 400, color: NOTE },
        ] },
        { x: 822, top: 1214, anchor: 'middle', lines: [{ text: text.services, size: 40, weight: 800 }] },
      ] },
      revenue: { blocks: [
        { x: 1229, top: 491, anchor: 'middle', lineGap: 11, lines: [
          { text: text.revenue, size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: text.revenueNote, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      gross_profit: { blocks: [
        { x: 1615, top: 345, anchor: 'middle', lineGap: 10, lines: [
          { text: text.gross, size: 38, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: text.grossMargin, size: 28, weight: 400, color: NOTE },
          { text: text.grossNote, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      cost_of_revenue: { blocks: [
        { x: 1610, top: 1162, anchor: 'middle', lineGap: 9, lines: [
          { text: text.cost[0], size: 38, weight: 800 },
          { text: text.cost[1], size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] },
      ] },
      operating_profit: { blocks: [
        { x: 1975, top: 277, anchor: 'middle', lineGap: 10, lines: [
          { text: text.operatingProfit, size: 38, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: text.operatingMargin, size: 28, weight: 400, color: NOTE },
          { text: text.operatingNote, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      operating_expenses: { blocks: [
        { x: 1970, top: 712, anchor: 'middle', lineGap: 9, lines: [
          { text: text.operatingExpenses[0], size: 38, weight: 800 },
          { text: text.operatingExpenses[1], size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ] },
      ] },
      other: { blocks: [
        { x: 2248, top: 280, anchor: 'middle', lineGap: 8, lines: [
          { text: text.other, size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] },
      ] },
      interest: { blocks: [
        { x: 2248, top: 483, anchor: 'middle', lineGap: 8, lines: [
          { text: text.interest, size: 32, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] },
      ] },
      net_profit: { blocks: [
        { x: 2508, top: 335, anchor: 'middle', lineGap: 10, lines: [
          { text: text.net, size: 38, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: text.netMargin, size: 28, weight: 400, color: NOTE },
          { text: text.netNote, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      tax: { blocks: [
        { x: 2507, top: 572, anchor: 'middle', lineGap: 8, lines: [
          { text: text.tax, size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ] },
      ] },
      sga: { blocks: [
        { x: 2507, top: 742, anchor: 'middle', lineGap: 8, lines: [
          { text: text.sga, size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
          { text: text.sgaShare, size: 28, weight: 400, color: NOTE },
          { text: text.sgaNote, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
      rnd: { blocks: [
        { x: 2507, top: 990, anchor: 'middle', lineGap: 8, lines: [
          { text: text.rnd, size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
          { text: text.rndShare, size: 28, weight: 400, color: NOTE },
          { text: text.rndNote, size: 28, weight: 400, color: NOTE },
        ] },
      ] },
    };
  }

  const annotations = `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g transform="translate(158 480)" data-typography-role="brand">${businessIcons.teslaVehicleStack || ''}</g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q4-fy24',
    name: 'Tesla - Q4 FY24',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q4 FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 148,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2043,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 250,
      logoHeight: 215,
      logoY: 252,
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
      scale: 17,
      nodes: {
        auto_sales: { x: 450, y: 426, width: 71, height: 316 },
        regulatory_credits: { x: 450, y: 851, width: 71, height: 9 },
        leasing: { x: 450, y: 975, width: 71, height: 5 },
        auto: { x: 821, y: 531, width: 70, height: 335 },
        energy_generation_storage: { x: 696, y: 1074, width: 70, height: 50 },
        services: { x: 936, y: 1218, width: 70, height: 46 },
        revenue: { x: 1198, y: 633, width: 70, height: 437 },
        gross_profit: { x: 1576, y: 528, width: 71, height: 69 },
        cost_of_revenue: { x: 1576, y: 775, width: 71, height: 366 },
        operating_profit: { x: 1940, y: 457, width: 71, height: 25 },
        operating_expenses: { x: 1940, y: 648, width: 71, height: 43 },
        other: { x: 2216, y: 366, width: 70, height: 11 },
        interest: { x: 2213, y: 462, width: 70, height: 4 },
        net_profit: { x: 2318, y: 386, width: 71, height: 39 },
        tax: { x: 2318, y: 600, width: 71, height: 5 },
        sga: { x: 2318, y: 777, width: 71, height: 20 },
        rnd: { x: 2318, y: 1016, width: 71, height: 19 },
      },
      labels: makeLabels(false),
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 18.7, notes: ['(10%) Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.7, notes: ['+60% Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.4, notes: ['(11%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 19.8, notes: ['(8%) Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: ['Energy generation', '& storage'], value: 3.1, notes: ['+113% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 2.8, notes: ['+31% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 25.7, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.2, notes: ['16% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 21.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['6% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.6 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.8 },
      { id: 'interest', col: 5, order: 1, type: 'profit', label: 'Interest', value: 0.3 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.3, notes: ['9% margin', '(22pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 1.3, notes: ['5% of revenue', '+0pp Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.3, notes: ['5% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 18.7, sourceWidth: 316, targetWidth: 321, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.7, width: 9, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.4, width: 5, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 19.8, sourceWidth: 335, targetWidth: 341, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 3.1, width: 50, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 2.8, width: 46, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.2, sourceWidth: 71, targetWidth: 69, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 21.5, sourceWidth: 366, targetWidth: 366, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 26, targetWidth: 25, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.6, sourceWidth: 43, targetWidth: 43, sourceOrder: 1 },
      {
        source: 'operating_profit', target: 'net_profit', value: 1.2,
        sourceWidth: 20, targetWidth: 23, sourceOrder: 0, targetOrder: 1,
        y0: 467, y1: 410,
        curve: { c1x: 2100, c1y: 467, c2x: 2220, c2y: 410 },
      },
      {
        source: 'operating_profit', target: 'tax', value: 0.4,
        sourceWidth: 5, targetWidth: 5, sourceOrder: 1,
        y0: 479.5, y1: 602.5,
        curve: { c1x: 2110, c1y: 479.5, c2x: 2240, c2y: 602.5 },
      },
      {
        source: 'other', target: 'net_profit', value: 0.8,
        sourceWidth: 11, targetWidth: 12, targetOrder: 0,
        y0: 371.5, y1: 392,
        curve: { c1x: 2290, c1y: 371.5, c2x: 2306, c2y: 392 },
      },
      {
        source: 'interest', target: 'net_profit', value: 0.3,
        sourceWidth: 4, targetWidth: 4, targetOrder: 2,
        y0: 464, y1: 423,
        curve: { c1x: 2290, c1y: 464, c2x: 2308, c2y: 423 },
      },
      { source: 'operating_expenses', target: 'sga', value: 1.3, sourceWidth: 22, targetWidth: 20, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.3, sourceWidth: 21, targetWidth: 19, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2024 财年第四季度',
        meta: { title: 'Tesla 2024 财年第四季度利润表', period: '', periodNote: '' },
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 (10%)'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 +60%'] },
          leasing: { label: '租赁', notes: ['同比 (11%)'] },
          auto: { label: '汽车业务', notes: ['同比 (8%)'] },
          energy_generation_storage: { label: ['能源发电', '与储能'], notes: ['同比 +113%'] },
          services: { label: '服务', notes: ['同比 +31%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 16%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (2 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          other: { label: '其他' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 (22 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售及管理', notes: ['占收入 5%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 5%', '同比 +1 个百分点'] },
        },
        layout: { labels: makeLabels(true) },
      },
    },
  });
})();

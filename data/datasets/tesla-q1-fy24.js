/* Tesla Q1 FY24 income statement ($B), reconstructed from the source Sankey. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155277';
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

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(52 566) scale(0.78)" data-typography-role="brand">${businessIcons.teslaAutoCluster || ''}</g>
    </g>`;

  const labels = {
    auto_sales: { blocks: [{ x: 482, top: 309, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(13%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 277, top: 446, anchor: 'middle', semanticRole: 'source-offset-label', lines: [{ text: 'Auto sales', size: 40, weight: 800 }] }] },
    regulatory_credits: { blocks: [{ x: 490, top: 877, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(15%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 396, top: 957, anchor: 'end', lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }] }] },
    leasing: { blocks: [{ x: 490, top: 1022, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(16%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 404, top: 1097, anchor: 'end', lines: [{ text: 'Leasing', size: 38, weight: 800 }] }] },
    auto: { blocks: [{ x: 862, top: 370, anchor: 'middle', lineGap: 11, lines: [{ text: 'Auto', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(13%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    energy_generation_storage: { blocks: [{ x: 680, top: 1127, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 331, top: 1220, anchor: 'middle', semanticRole: 'source-offset-label', lines: [{ text: 'Energy generation & storage', size: 38, weight: 800 }] }] },
    services: { blocks: [{ x: 955, top: 1210, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+25% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 830, top: 1311, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] }] },
    revenue: { blocks: [{ x: 1237, top: 468, anchor: 'middle', lineGap: 11, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(9%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1609, top: 327, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '17% margin', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1612, top: 1250, anchor: 'middle', lineGap: 9, lines: [{ text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1981, top: 259, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '5% margin', size: 28, weight: 400, color: NOTE }, { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1979, top: 736, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    other: { blocks: [{ x: 2245, top: 463, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2506, top: 343, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '5% margin', size: 28, weight: 400, color: NOTE }, { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2512, top: 546, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    sga: { blocks: [{ x: 2508, top: 805, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '6% of revenue', size: 28, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2506, top: 1066, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '5% of revenue', size: 28, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q1-fy24',
    name: 'Tesla - Q1 FY24',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q1 FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q1-fy24.png', width: 2667, height: 1500 },
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
      logoY: 232,
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
      scale: 25.8,
      nodes: {
        auto_sales: { x: 454, y: 408, width: 71, height: 426 },
        regulatory_credits: { x: 454, y: 971, width: 71, height: 10 },
        leasing: { x: 454, y: 1115, width: 71, height: 10 },
        auto: { x: 828, y: 513, width: 70, height: 450 },
        energy_generation_storage: { x: 650, y: 1218, width: 70, height: 40 },
        services: { x: 928, y: 1310, width: 70, height: 57 },
        revenue: { x: 1202, y: 612, width: 70, height: 551 },
        gross_profit: { x: 1576, y: 512, width: 70, height: 95 },
        cost_of_revenue: { x: 1578, y: 773, width: 70, height: 455 },
        operating_profit: { x: 1947, y: 440, width: 70, height: 29 },
        operating_expenses: { x: 1949, y: 649, width: 71, height: 64 },
        other: { x: 2210, y: 444, width: 70, height: 8 },
        net_profit: { x: 2322, y: 375, width: 71, height: 28 },
        tax: { x: 2322, y: 573, width: 71, height: 9 },
        sga: { x: 2322, y: 823, width: 71, height: 34 },
        rnd: { x: 2322, y: 1084, width: 71, height: 29 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 16.5, notes: ['(13%) Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.4, notes: ['(15%) Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.5, notes: ['(16%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 17.4, notes: ['(13%) Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: 'Energy generation & storage', value: 1.6, notes: ['+7% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 2.3, notes: ['+25% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 21.3, notes: ['(9%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.7, notes: ['17% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 17.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.2, notes: ['5% margin', '(6pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.5 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.4 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['5% margin', '(6pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 1.4, notes: ['6% of revenue'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.2, notes: ['5% of revenue'] },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 16.5, sourceWidth: 426, targetWidth: 430, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.4, sourceWidth: 10, targetWidth: 10, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.5, sourceWidth: 10, targetWidth: 10, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 17.4, width: 450, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 1.6, sourceWidth: 40, targetWidth: 42, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 2.3, sourceWidth: 57, targetWidth: 59, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.7, sourceWidth: 95, targetWidth: 95, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 17.6, sourceWidth: 455, targetWidth: 455, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.2, sourceWidth: 31, targetWidth: 29, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.5, sourceWidth: 64, targetWidth: 64, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 20, targetWidth: 20, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 9, targetWidth: 9, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.4, sourceWidth: 8, targetWidth: 8, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 1.4, sourceWidth: 34, targetWidth: 34, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.2, sourceWidth: 29, targetWidth: 29, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2024 财年第一季度',
        meta: { title: 'Tesla 2024 财年第一季度利润表', period: '', periodNote: '' },
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 (13%)'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 (15%)'] },
          leasing: { label: '租赁', notes: ['同比 (16%)'] },
          auto: { label: '汽车业务', notes: ['同比 (13%)'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +7%'] },
          services: { label: '服务', notes: ['同比 +25%'] },
          revenue: { label: '收入', notes: ['同比 (9%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 17%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (6 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (6 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售及管理', notes: ['占收入 6%'] },
          rnd: { label: '研发', notes: ['占收入 5%'] },
        },
        layout: {
          labels: {
            auto_sales: { blocks: [{ x: 482, top: 309, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (13%)', size: 28, weight: 400, color: NOTE }] }, { x: 277, top: 446, anchor: 'middle', semanticRole: 'source-offset-label', lines: [{ text: '汽车销售', size: 40, weight: 800 }] }] },
            regulatory_credits: { blocks: [{ x: 490, top: 877, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (15%)', size: 28, weight: 400, color: NOTE }] }, { x: 396, top: 957, anchor: 'end', lines: [{ text: '监管积分', size: 38, weight: 800 }] }] },
            leasing: { blocks: [{ x: 490, top: 1022, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (16%)', size: 28, weight: 400, color: NOTE }] }, { x: 404, top: 1097, anchor: 'end', lines: [{ text: '租赁', size: 38, weight: 800 }] }] },
            auto: { blocks: [{ x: 862, top: 370, anchor: 'middle', lineGap: 11, lines: [{ text: '汽车业务', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (13%)', size: 28, weight: 400, color: NOTE }] }] },
            energy_generation_storage: { blocks: [{ x: 680, top: 1127, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +7%', size: 28, weight: 400, color: NOTE }] }, { x: 331, top: 1220, anchor: 'middle', semanticRole: 'source-offset-label', lines: [{ text: '能源发电与储能', size: 38, weight: 800 }] }] },
            services: { blocks: [{ x: 955, top: 1210, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +25%', size: 28, weight: 400, color: NOTE }] }, { x: 830, top: 1311, anchor: 'middle', lines: [{ text: '服务', size: 40, weight: 800 }] }] },
            revenue: { blocks: [{ x: 1237, top: 468, anchor: 'middle', lineGap: 11, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (9%)', size: 28, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1609, top: 327, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 17%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            cost_of_revenue: { blocks: [{ x: 1612, top: 1250, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
            operating_profit: { blocks: [{ x: 1981, top: 259, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 5%', size: 28, weight: 400, color: NOTE }, { text: '同比 (6 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1979, top: 736, anchor: 'middle', lineGap: 9, lines: [{ text: '运营', size: 38, weight: 800 }, { text: '费用', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
            other: { blocks: [{ x: 2245, top: 463, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
            net_profit: { blocks: [{ x: 2506, top: 343, anchor: 'middle', lineGap: 10, lines: [{ text: '净利润', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 5%', size: 28, weight: 400, color: NOTE }, { text: '同比 (6 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            tax: { blocks: [{ x: 2512, top: 546, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
            sga: { blocks: [{ x: 2508, top: 805, anchor: 'middle', lineGap: 8, lines: [{ text: '销售及管理', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 6%', size: 28, weight: 400, color: NOTE }] }] },
            rnd: { blocks: [{ x: 2506, top: 1066, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 5%', size: 28, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();

/* Tesla Q4 FY23 income statement ($B), reconstructed from the source Sankey. */
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

  const labels = {
    auto_sales: {
      blocks: [
        { x: 483, top: 369, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
      ],
    },
    regulatory_credits: {
      blocks: [
        { x: 485, top: 947, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(7%) Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 396, top: 1024, anchor: 'end', lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }] },
      ],
    },
    leasing: {
      blocks: [
        { x: 488, top: 1067, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '(17%) Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 403, top: 1144, anchor: 'end', lines: [{ text: 'Leasing', size: 38, weight: 800 }] },
      ],
    },
    auto: { blocks: [{ x: 850, top: 412, anchor: 'middle', lineGap: 11, lines: [
      { text: 'Auto', size: 39, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '+0% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    energy_generation_storage: {
      blocks: [
        { x: 690, top: 1165, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 335, top: 1249, anchor: 'middle', lines: [{ text: 'Energy generation & storage', size: 38, weight: 800 }] },
      ],
    },
    services: {
      blocks: [
        { x: 976, top: 1253, anchor: 'middle', lineGap: 11, lines: [
          { text: '$value', size: 39, weight: 400 },
          { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
        ] },
        { x: 828, top: 1344, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] },
      ],
    },
    revenue: { blocks: [{ x: 1236, top: 497, anchor: 'middle', lineGap: 11, lines: [
      { text: 'Revenue', size: 40, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '+3% Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    gross_profit: { blocks: [{ x: 1601, top: 367, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Gross profit', size: 38, weight: 800 },
      { text: '$value', size: 39, weight: 400 },
      { text: '18% margin', size: 28, weight: 400, color: NOTE },
      { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    cost_of_revenue: { blocks: [{ x: 1606, top: 1264, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Cost of', size: 38, weight: 800 },
      { text: 'revenue', size: 38, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ] }] },
    operating_profit: { blocks: [{ x: 2025, top: 266, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Operating profit', size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '8% margin', size: 28, weight: 400, color: NOTE },
      { text: '(8pp) Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    operating_expenses: { blocks: [{ x: 1987, top: 755, anchor: 'middle', lineGap: 9, lines: [
      { text: 'Operating', size: 38, weight: 800 },
      { text: 'expenses', size: 38, weight: 800 },
      { text: '$value', size: 37, weight: 400 },
    ] }] },
    other: { blocks: [{ x: 2223, top: 280, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Other', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
    ] }] },
    tax_benefit: { blocks: [{ x: 2223, top: 642, anchor: 'middle', lineGap: 8, lines: [
      { text: 'Tax benefit', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
    ] }] },
    net_profit: { blocks: [{ x: 2513, top: 386, anchor: 'middle', lineGap: 10, lines: [
      { text: 'Net profit', size: 38, weight: 800 },
      { text: '$value', size: 38, weight: 400 },
      { text: '32% margin', size: 28, weight: 400, color: NOTE },
      { text: '+16pp Y/Y', size: 28, weight: 400, color: NOTE },
    ] }] },
    sga: { blocks: [{ x: 2487, top: 844, anchor: 'middle', lineGap: 8, lines: [
      { text: 'SG&A', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
    ] }] },
    rnd: { blocks: [{ x: 2493, top: 1080, anchor: 'middle', lineGap: 8, lines: [
      { text: 'R&D', size: 31, weight: 800 },
      { text: '$value', size: 31, weight: 400 },
    ] }] },
  };

  function makeZhLabels() {
    const zh = JSON.parse(JSON.stringify(labels));
    const replace = (id, block, values) => values.forEach((text, index) => {
      zh[id].blocks[block].lines[index].text = text;
    });
    replace('auto_sales', 0, ['$value', '同比 +2%']);
    replace('regulatory_credits', 0, ['$value', '同比 (7%)']);
    replace('regulatory_credits', 1, ['监管积分']);
    replace('leasing', 0, ['$value', '同比 (17%)']);
    replace('leasing', 1, ['租赁']);
    replace('auto', 0, ['汽车业务', '$value', '同比 +0%']);
    replace('energy_generation_storage', 0, ['$value', '同比 +10%']);
    replace('energy_generation_storage', 1, ['能源发电与储能']);
    replace('services', 0, ['$value', '同比 +27%']);
    replace('services', 1, ['服务']);
    replace('revenue', 0, ['收入', '$value', '同比 +3%']);
    replace('gross_profit', 0, ['毛利润', '$value', '利润率 18%', '同比 (6 个百分点)']);
    replace('cost_of_revenue', 0, ['收入', '成本', '$value']);
    replace('operating_profit', 0, ['营业利润', '$value', '利润率 8%', '同比 (8 个百分点)']);
    replace('operating_expenses', 0, ['运营', '费用', '$value']);
    replace('other', 0, ['其他', '$value']);
    replace('tax_benefit', 0, ['税收收益', '$value']);
    replace('net_profit', 0, ['净利润', '$value', '利润率 32%', '同比 +16 个百分点']);
    replace('sga', 0, ['销售及管理', '$value']);
    replace('rnd', 0, ['研发', '$value']);
    return zh;
  }

  function annotations(autoSalesLabel) {
    return `
      <g class="sankey-interactive-annotation" data-node="auto_sales">
        <text x="277" y="529" text-anchor="middle" fill="${BLACK}" font-size="40" font-weight="800">${autoSalesLabel}</text>
      </g>
      <g transform="translate(161 565) scale(1.05 1.028)" data-typography-role="brand">
        ${businessIcons.teslaVehicleStack || ''}
      </g>`;
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q4-fy23',
    name: 'Tesla - Q4 FY23',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q4 FY23 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q4-fy23.png', width: 2667, height: 1500 },
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
      logoY: 249,
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
    annotationsSvg: annotations('Auto sales'),
    layout: {
      scale: 21.15,
      nodes: {
        auto_sales: { x: 451, y: 464, width: 72, height: 436 },
        regulatory_credits: { x: 451, y: 1039, width: 72, height: 8 },
        leasing: { x: 451, y: 1159, width: 72, height: 9 },
        auto: { x: 820, y: 558, width: 72, height: 456 },
        energy_generation_storage: { x: 654, y: 1256, width: 72, height: 28 },
        services: { x: 940, y: 1344, width: 72, height: 44 },
        revenue: { x: 1201, y: 638, width: 72, height: 533 },
        gross_profit: { x: 1565, y: 550, width: 72, height: 93 },
        cost_of_revenue: { x: 1570, y: 805, width: 72, height: 439 },
        operating_profit: { x: 1951, y: 448, width: 72, height: 41 },
        operating_expenses: { x: 1951, y: 684, width: 72, height: 48 },
        other: { x: 2187, y: 364, width: 72, height: 1 },
        tax_benefit: { x: 2187, y: 501, width: 72, height: 120 },
        net_profit: { x: 2319, y: 374, width: 72, height: 167 },
        sga: { x: 2319, y: 867, width: 72, height: 25 },
        rnd: { x: 2319, y: 1102, width: 72, height: 21 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 20.6, notes: ['+2% Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.4, notes: ['(7%) Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.5, notes: ['(17%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 21.6, notes: ['+0% Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: 'Energy generation & storage', value: 1.4, notes: ['+10% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 2.2, notes: ['+27% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 25.2, notes: ['+3% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.4, notes: ['18% margin', '(6pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 20.7 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.1, notes: ['8% margin', '(8pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.4 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.1 },
      { id: 'tax_benefit', col: 5, order: 1, type: 'profit', label: 'Tax benefit', value: 5.8 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 7.9, notes: ['32% margin', '+16pp Y/Y'] },
      { id: 'sga', col: 6, order: 1, type: 'cost', label: 'SG&A', value: 1.3 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 1.1 },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 20.6, sourceWidth: 436, targetWidth: 439, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.4, width: 8, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.5, width: 9, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 21.6, sourceWidth: 456, targetWidth: 456, targetOrder: 0, y1: 866 },
      { source: 'energy_generation_storage', target: 'revenue', value: 1.4, sourceWidth: 28, targetWidth: 32, targetOrder: 1, y1: 1110 },
      { source: 'services', target: 'revenue', value: 2.2, sourceWidth: 44, targetWidth: 45, targetOrder: 2, y1: 1148.5 },
      { source: 'revenue', target: 'gross_profit', value: 4.4, sourceWidth: 92, targetWidth: 93, sourceOrder: 0, y0: 684 },
      { source: 'revenue', target: 'cost_of_revenue', value: 20.7, sourceWidth: 441, targetWidth: 439, sourceOrder: 1, y0: 950.5 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.1, sourceWidth: 41, targetWidth: 41, sourceOrder: 0, y0: 570.5 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, sourceWidth: 52, targetWidth: 48, sourceOrder: 1, y0: 617 },
      {
        source: 'other', target: 'net_profit', value: 0.1,
        sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 0,
        y0: 364.5, y1: 374.5,
      },
      {
        source: 'operating_profit', target: 'net_profit', value: 2.1,
        sourceWidth: 41, targetWidth: 44, sourceOrder: 0, targetOrder: 1,
        y0: 468.5, y1: 397,
      },
      {
        source: 'tax_benefit', target: 'net_profit', value: 5.8,
        sourceWidth: 120, targetWidth: 122, sourceOrder: 0, targetOrder: 2,
        y0: 561, y1: 480,
      },
      { source: 'operating_expenses', target: 'sga', value: 1.3, sourceWidth: 25, targetWidth: 25, sourceOrder: 0, y0: 696.5 },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 23, targetWidth: 21, sourceOrder: 1, y0: 720.5 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2023 财年第四季度',
        meta: { title: 'Tesla 2023 财年第四季度利润表', period: '', periodNote: '' },
        annotationsSvg: annotations('汽车销售'),
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +2%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 (7%)'] },
          leasing: { label: '租赁', notes: ['同比 (17%)'] },
          auto: { label: '汽车业务', notes: ['同比 +0%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +10%'] },
          services: { label: '服务', notes: ['同比 +27%'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 (6 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 (8 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +16 个百分点'] },
          sga: { label: '销售及管理' },
          rnd: { label: '研发' },
        },
        layout: { labels: makeZhLabels() },
      },
    },
  });
})();

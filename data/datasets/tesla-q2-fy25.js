/* Tesla Q2 FY25 income statement ($B), reconstructed from the source Sankey. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#6f6f6f';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TESLA_RED = '#e41537';
  const TESLA_LOGO_PATH =
    'M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z';
  const teslaPath = (window.SANKEY_BRAND && window.SANKEY_BRAND.tesla) || TESLA_LOGO_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  function metricCard(x, title, value, note) {
    return `
      <g>
        <rect x="${x}" y="1225" width="188" height="145" rx="24" fill="#e51537"/>
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
        ${metricCard(2255, deliveries, '384K', deliveriesNote)}
      </g>`;
  }

  const labels = {
    auto_sales: { blocks: [{ x: 488, top: 301, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(15%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 313, top: 544, anchor: 'middle', lines: [{ text: 'Auto sales', size: 40, weight: 800 }] }] },
    regulatory_credits: { blocks: [{ x: 488, top: 760, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(51%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 406, top: 834, anchor: 'end', lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }] }] },
    leasing: { blocks: [{ x: 488, top: 871, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(5%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 407, top: 966, anchor: 'end', lines: [{ text: 'Leasing', size: 38, weight: 800 }] }] },
    auto: { blocks: [{ x: 860, top: 386, anchor: 'middle', lineGap: 11, lines: [{ text: 'Auto', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(16%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    energy_generation_storage: { blocks: [{ x: 674, top: 1047, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(7%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 445, top: 1121, anchor: 'middle', lineGap: 8, lines: [{ text: 'Energy generation', size: 38, weight: 800 }, { text: '& storage', size: 38, weight: 800 }] }] },
    services: { blocks: [{ x: 960, top: 1264, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 810, top: 1363, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] }] },
    revenue: { blocks: [{ x: 1234, top: 503, anchor: 'middle', lineGap: 11, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(12%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1614, top: 343, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '17% margin', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1608, top: 1226, anchor: 'middle', lineGap: 9, lines: [{ text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1980, top: 251, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '4% margin', size: 28, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1978, top: 729, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    interest: { blocks: [{ x: 2238, top: 252, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    other: { blocks: [{ x: 2248, top: 448, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2508, top: 299, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '5% margin', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2507, top: 519, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: 2502, top: 742, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: 2502, top: 1025, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '6% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
  };

  function localizedLabels() {
    const texts = {
      auto_sales: [['$value', '同比 (15%)'], ['汽车销售']],
      regulatory_credits: [['$value', '同比 (51%)'], ['监管积分']],
      leasing: [['$value', '同比 (5%)'], ['租赁']],
      auto: [['汽车业务', '$value', '同比 (16%)']],
      energy_generation_storage: [['$value', '同比 (7%)'], ['能源发电', '与储能']],
      services: [['$value', '同比 +17%'], ['服务']],
      revenue: [['收入', '$value', '同比 (12%)']],
      gross_profit: [['毛利润', '$value', '利润率 17%', '同比 (1 个百分点)']],
      cost_of_revenue: [['收入', '成本', '$value']],
      operating_profit: [['营业利润', '$value', '利润率 4%', '同比 (2 个百分点)']],
      operating_expenses: [['运营', '费用', '$value']],
      interest: [['利息', '$value']],
      other: [['其他', '$value']],
      net_profit: [['净利润', '$value', '利润率 5%', '同比 (1 个百分点)']],
      tax: [['税费', '$value']],
      rnd: [['研发', '$value', '占收入 7%', '同比 +3 个百分点']],
      sga: [['销售及管理', '$value', '占收入 6%', '同比 +1 个百分点']],
    };
    return Object.fromEntries(
      Object.entries(labels).map(([id, value]) => [
        id,
        {
          blocks: value.blocks.map((block, blockIndex) => ({
            ...block,
            lines: block.lines.map((line, lineIndex) => ({
              ...line,
              text: texts[id][blockIndex][lineIndex],
            })),
          })),
        },
      ])
    );
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q2-fy25',
    name: 'Tesla - Q2 FY25',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q2 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q2-fy25.png', width: 2667, height: 1500 },
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
    annotationsSvg: annotations('Production', 'Deliveries', 'Flat Y/Y', '(13%) Y/Y'),
    layout: {
      scale: 20.2,
      nodes: {
        auto_sales: { x: 450, y: 409, width: 72, height: 318 },
        regulatory_credits: { x: 450, y: 857, width: 72, height: 6 },
        leasing: { x: 450, y: 986, width: 72, height: 6 },
        auto: { x: 824, y: 532, width: 72, height: 336 },
        energy_generation_storage: { x: 638, y: 1141, width: 72, height: 54 },
        services: { x: 916, y: 1360, width: 72, height: 59 },
        revenue: { x: 1198, y: 647, width: 72, height: 454 },
        gross_profit: { x: 1578, y: 529, width: 72, height: 76 },
        cost_of_revenue: { x: 1571, y: 829, width: 72, height: 376 },
        operating_profit: { x: 1945, y: 434, width: 72, height: 16 },
        operating_expenses: { x: 1945, y: 652, width: 72, height: 57 },
        interest: { x: 2206, y: 338, width: 72, height: 4 },
        other: { x: 2210, y: 423, width: 72, height: 4 },
        net_profit: { x: 2318, y: 368, width: 72, height: 22 },
        tax: { x: 2318, y: 545, width: 72, height: 5 },
        rnd: { x: 2318, y: 751, width: 72, height: 30 },
        sga: { x: 2318, y: 1046, width: 72, height: 25 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 15.8, notes: ['(15%) Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.4, notes: ['(51%) Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.4, notes: ['(5%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 16.7, notes: ['(16%) Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: ['Energy generation', '& storage'], value: 2.8, notes: ['(7%) Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 3.0, valueText: '$3.0B', notes: ['+17% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 22.5, notes: ['(12%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.9, notes: ['17% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 18.6 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.9, notes: ['4% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.0, valueText: '($3.0B)' },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.3 },
      { id: 'other', col: 5, order: 1, type: 'profit', label: 'Other', value: 0.3 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.2, notes: ['5% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 1.6, notes: ['7% of revenue', '+3pp Y/Y'] },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 1.4, notes: ['6% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 15.8, sourceWidth: 318, targetWidth: 318, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.4, sourceWidth: 6, targetWidth: 9, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.4, sourceWidth: 6, targetWidth: 9, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 16.7, sourceWidth: 336, targetWidth: 336, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 2.8, sourceWidth: 54, targetWidth: 57, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 3.0, sourceWidth: 59, targetWidth: 61, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.9, sourceWidth: 78, targetWidth: 76, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 18.6, sourceWidth: 376, targetWidth: 376, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9, sourceWidth: 17, targetWidth: 16, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.0, sourceWidth: 59, targetWidth: 57, sourceOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 0.3, sourceWidth: 4, targetWidth: 5, targetOrder: 0, curve: { c1x: 2290, c2x: 2308 } },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, sourceWidth: 11, targetWidth: 11, sourceOrder: 0, targetOrder: 1, curve: { c1x: 2130, c2x: 2250 } },
      { source: 'other', target: 'net_profit', value: 0.3, sourceWidth: 4, targetWidth: 6, targetOrder: 2, curve: { c1x: 2290, c2x: 2308 } },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 5, targetWidth: 5, sourceOrder: 1, curve: { c1x: 2110, c2x: 2240 } },
      { source: 'operating_expenses', target: 'rnd', value: 1.6, sourceWidth: 31, targetWidth: 30, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.4, sourceWidth: 26, targetWidth: 25, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2025 财年第二季度',
        meta: { title: 'Tesla 2025 财年第二季度利润表', period: '', periodNote: '' },
        annotationsSvg: annotations('产量', '交付量', '同比持平', '同比 (13%)'),
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 (15%)'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 (51%)'] },
          leasing: { label: '租赁', notes: ['同比 (5%)'] },
          auto: { label: '汽车业务', notes: ['同比 (16%)'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 (7%)'] },
          services: { label: '服务', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 (12%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 17%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 +3 个百分点'] },
          sga: { label: '销售及管理', notes: ['占收入 6%', '同比 +1 个百分点'] },
        },
        layout: { labels: localizedLabels() },
      },
    },
  });
})();

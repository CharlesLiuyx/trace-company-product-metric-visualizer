/* Tesla Q3 FY22 income statement ($B), reconstructed from the source Sankey. */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_NODE = '#666666';
  const GRAY_LINK = '#b3b3b3';
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

  function car(y, body, glass) {
    return `<g transform="translate(0 ${y})">
      <path d="M20 31C39 13 76 8 122 13C155 17 184 28 203 44L214 57H4C5 45 10 37 20 31Z"
        fill="${body}" stroke="#777" stroke-width="1.5"/>
      <path d="M55 17C78 5 119 6 151 22L135 34H72Z" fill="${glass}"/>
      <path d="M19 46H204" stroke="#d7d7d7" stroke-width="3" opacity=".75"/>
      <circle cx="47" cy="59" r="13" fill="#171717"/><circle cx="171" cy="59" r="13" fill="#171717"/>
      <circle cx="47" cy="59" r="6" fill="#777"/><circle cx="171" cy="59" r="6" fill="#777"/>
    </g>`;
  }

  function annotations(autoSalesLabel) {
    return `<g class="sankey-interactive-annotation" data-node="auto_sales">
      <text x="263" y="519" text-anchor="middle" font-family="Noto Sans,Arial,sans-serif"
        font-size="40" font-weight="800" fill="#5e5e5e">${autoSalesLabel}</text>
    </g>
    <g data-typography-role="brand" transform="translate(145 566)">
      ${car(0, '#f4f4f4', '#b8c9d5')}${car(70, '#c81721', '#c8d8e3')}
      ${car(140, '#161616', '#82939f')}${car(210, '#777b7e', '#c8d4dc')}
    </g>`;
  }

  const EN = {
    auto_sales: [['$value', '+56% Y/Y'], ['Auto sales']],
    auto: [['Auto', '$value', '+55% Y/Y']],
    revenue: [['Revenue', '$value', '+56% Y/Y']],
    leasing: [['$value', '+61% Y/Y'], ['Leasing']],
    regulatory_credits: [['$value', '+3% Y/Y'], ['Regulatory credits']],
    energy_generation_storage: [['$value', '+39% Y/Y'], ['Energy generation & storage']],
    services: [['$value', '+84% Y/Y'], ['Services']],
    gross_profit: [['Gross profit', '$value', '25% margin', '(2pp) Y/Y']],
    operating_profit: [['Operating profit', '$value', '17% margin', '+3pp Y/Y']],
    net_profit: [['Net profit', '$value', '16% margin', '+3pp Y/Y']],
    interest: [['Interest', '$value']],
    tax: [['Tax', '$value']],
    other: [['Other', '$value']],
    operating_expenses: [['Operating', 'Expenses', '$value']],
    sga: [['SG&A', '$value']],
    rnd: [['R&D', '$value']],
    cost_of_revenue: [['Cost of', 'revenue', '$value']],
  };
  const ZH = {
    auto_sales: [['$value', '同比 +56%'], ['汽车销售']],
    auto: [['汽车业务', '$value', '同比 +55%']],
    revenue: [['收入', '$value', '同比 +56%']],
    leasing: [['$value', '同比 +61%'], ['租赁']],
    regulatory_credits: [['$value', '同比 +3%'], ['监管积分']],
    energy_generation_storage: [['$value', '同比 +39%'], ['能源发电与储能']],
    services: [['$value', '同比 +84%'], ['服务']],
    gross_profit: [['毛利润', '$value', '利润率 25%', '同比 (2 个百分点)']],
    operating_profit: [['营业利润', '$value', '利润率 17%', '同比 +3 个百分点']],
    net_profit: [['净利润', '$value', '利润率 16%', '同比 +3 个百分点']],
    interest: [['利息', '$value']],
    tax: [['税费', '$value']],
    other: [['其他', '$value']],
    operating_expenses: [['运营', '费用', '$value']],
    sga: [['销售及管理', '$value']],
    rnd: [['研发', '$value']],
    cost_of_revenue: [['收入', '成本', '$value']],
  };
  const SPECS = {
    auto_sales: [[460, 334, 'middle', 39]],
    auto: [[892, 390, 'middle', 40]],
    revenue: [[1296, 436, 'middle', 40]],
    leasing: [[459, 969, 'middle', 39], [318, 1045, 'middle', 40]],
    regulatory_credits: [[464, 1117, 'middle', 39], [220, 1183, 'middle', 40]],
    energy_generation_storage: [[708, 1178, 'middle', 39], [389, 1257, 'middle', 40]],
    services: [[1019, 1246, 'middle', 39], [892, 1337, 'middle', 40]],
    gross_profit: [[1648, 352, 'middle', 40]],
    operating_profit: [[1975, 298, 'middle', 40]],
    net_profit: [[2475, 416, 'middle', 40]],
    interest: [[2201, 627, 'middle', 31]],
    tax: [[2438, 772, 'middle', 31]],
    other: [[2447, 883, 'middle', 31]],
    operating_expenses: [[2002, 897, 'middle', 40]],
    sga: [[2444, 1023, 'middle', 31]],
    rnd: [[2447, 1193, 'middle', 31]],
    cost_of_revenue: [[1648, 1235, 'middle', 40]],
  };

  function labelsFor(copy) {
    const labels = {};
    Object.keys(SPECS).forEach((id) => {
      labels[id] = {
        blocks: SPECS[id].map(([x, top, anchor, firstSize], blockIndex) => ({
          x,
          top,
          anchor,
          lineGap: id === 'gross_profit' || id === 'operating_profit' || id === 'net_profit' ? 9 : 8,
          lines: copy[id][blockIndex].map((text, lineIndex) => ({
            text,
            size: text === '$value' ? (firstSize >= 39 ? 39 : 31) : (
              lineIndex === 0 ? firstSize : (text.includes('Y/Y') || text.includes('同比') || text.includes('margin') || text.includes('利润率') ? 28 : firstSize)
            ),
            weight: text === '$value' || text.includes('Y/Y') || text.includes('同比') || text.includes('margin') || text.includes('利润率') ? 400 : 800,
            ...(text.includes('Y/Y') || text.includes('同比') || text.includes('margin') || text.includes('利润率') ? { color: NOTE } : {}),
          })),
        })),
      };
    });
    return labels;
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q3-fy22',
    name: 'Tesla - Q3 FY22',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q3 FY22 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q3-fy22.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 195,
      titleSize: 86,
      titleWeight: 800,
      titleTextLength: 2043,
      hidePeriodStamp: true,
      logoWidth: 210,
      logoHeight: 210,
      logoY: 227,
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
        source: { node: GRAY_NODE, label: '#5e5e5e' },
        hub: { node: GRAY_NODE, label: '#5e5e5e' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations('Auto sales'),
    layout: {
      scale: 28.25,
      nodes: {
        auto_sales: { x: 427, y: 436, width: 71, height: 504 },
        leasing: { x: 427, y: 1058, width: 71, height: 16 },
        regulatory_credits: { x: 427, y: 1208, width: 71, height: 5 },
        auto: { x: 866, y: 531, width: 70, height: 528 },
        energy_generation_storage: { x: 676, y: 1267, width: 70, height: 30 },
        services: { x: 984, y: 1339, width: 70, height: 45 },
        revenue: { x: 1264, y: 572, width: 70, height: 608 },
        gross_profit: { x: 1623, y: 535, width: 70, height: 151 },
        cost_of_revenue: { x: 1625, y: 765, width: 70, height: 454 },
        operating_profit: { x: 1945, y: 480, width: 71, height: 102 },
        operating_expenses: { x: 1950, y: 826, width: 71, height: 47 },
        interest: { x: 2168, y: 617, width: 70, height: 2 },
        net_profit: { x: 2281, y: 423, width: 71, height: 93 },
        tax: { x: 2281, y: 799, width: 71, height: 7 },
        other: { x: 2281, y: 916, width: 71, height: 1 },
        sga: { x: 2281, y: 1028, width: 71, height: 25 },
        rnd: { x: 2281, y: 1213, width: 71, height: 19 },
      },
      labels: labelsFor(EN),
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 17.8, notes: ['+56% Y/Y'] },
      { id: 'leasing', col: 0, order: 1, type: 'source', label: 'Leasing', value: 0.6, notes: ['+61% Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 2, type: 'source', label: 'Regulatory credits', value: 0.3, notes: ['+3% Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 18.7, notes: ['+55% Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: 'Energy generation & storage', value: 1.1, notes: ['+39% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 1.6, notes: ['+84% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 21.5, notes: ['+56% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.4, notes: ['25% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 16.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.7, notes: ['17% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.7 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.033, valueText: '$33M' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 3.3, notes: ['16% margin', '+3pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'other', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.085, valueText: '($85M)' },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 1.0, valueText: '($1.0B)' },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 0.7 },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 17.8, sourceWidth: 504, targetWidth: 505, targetOrder: 0 },
      { source: 'leasing', target: 'auto', value: 0.6, sourceWidth: 16, targetWidth: 17, targetOrder: 1 },
      { source: 'regulatory_credits', target: 'auto', value: 0.3, sourceWidth: 5, targetWidth: 6, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 18.7, sourceWidth: 528, targetWidth: 528, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 1.1, sourceWidth: 30, targetWidth: 31, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 1.6, sourceWidth: 45, targetWidth: 49, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.4, sourceWidth: 153, targetWidth: 151, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 16.1, sourceWidth: 455, targetWidth: 454, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.7, sourceWidth: 102, targetWidth: 102, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.7, sourceWidth: 49, targetWidth: 47, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 3.3, sourceWidth: 91, targetWidth: 91, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 0.033, sourceWidth: 2, targetWidth: 2, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 8, targetWidth: 7, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.085, sourceWidth: 2, targetWidth: 1, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 1.0, sourceWidth: 27, targetWidth: 25, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, sourceWidth: 20, targetWidth: 19, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2022 财年第三季度',
        meta: { title: 'Tesla 2022 财年第三季度利润表', period: '', periodNote: '', titleTextLength: 2043 },
        annotationsSvg: annotations('汽车销售'),
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +56%'] },
          leasing: { label: '租赁', notes: ['同比 +61%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 +3%'] },
          auto: { label: '汽车业务', notes: ['同比 +55%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +39%'] },
          services: { label: '服务', notes: ['同比 +84%'] },
          revenue: { label: '收入', notes: ['同比 +56%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 25%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 +3 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sga: { label: '销售及管理' },
          rnd: { label: '研发' },
        },
        layout: { labels: labelsFor(ZH) },
      },
    },
  });
})();

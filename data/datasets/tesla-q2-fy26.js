/* Tesla Q2 FY26 income statement ($B), reconstructed from the Source Sankey. */
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
  const TESLA_RED = '#e41537';
  const TESLA_LOGO_PATH =
    'M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z';
  const teslaPath = (window.SANKEY_BRAND && window.SANKEY_BRAND.tesla) || TESLA_LOGO_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  function metricCard(x, title, value, note) {
    return `
      <g>
        <rect x="${x}" y="1225" width="188" height="145" rx="24" fill="#ee1743"/>
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
        ${metricCard(2058, production, '452K', productionNote)}
        ${metricCard(2255, deliveries, '480K', deliveriesNote)}
      </g>`;
  }

  const labels = {
    auto_sales: { blocks: [{ x: 501, top: 296, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 299, top: 506, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Auto sales', size: 40, weight: 800 }] }] },
    regulatory_credits: { blocks: [{ x: 489, top: 725, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(67%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 447, top: 807, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }] }] },
    leasing: { blocks: [{ x: 489, top: 858, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(16%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 447, top: 942, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Leasing', size: 38, weight: 800 }] }] },
    auto: { blocks: [{ x: 863, top: 389, anchor: 'middle', lineGap: 11, lines: [{ text: 'Auto', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+23% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    energy_generation_storage: { blocks: [{ x: 619, top: 970, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 402, top: 1053, anchor: 'middle', semanticRole: 'reference-offset-side-label', lineGap: 8, lines: [{ text: 'Energy generation', size: 38, weight: 800 }, { text: '& storage', size: 38, weight: 800 }] }] },
    services: { blocks: [{ x: 894, top: 1136, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+50% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 753, top: 1246, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] }] },
    revenue: { blocks: [{ x: 1237, top: 500, anchor: 'middle', lineGap: 11, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+26% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1610, top: 344, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '17% margin', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1611, top: 1166, anchor: 'middle', lineGap: 9, lines: [{ text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1985, top: 272, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '1% margin', size: 28, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1984, top: 744, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    other: { blocks: [{ x: 2255, top: 244, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    interest: { blocks: [{ x: 2247, top: 445, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2508, top: 322, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '4% margin', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2510, top: 524, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: 2507, top: 716, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '8% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: 2507, top: 982, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
  };

  function localizedLabels() {
    const texts = {
      auto_sales: [['$value', '同比 +27%'], ['汽车销售']],
      regulatory_credits: [['$value', '同比 (67%)'], ['监管积分']],
      leasing: [['$value', '同比 (16%)'], ['租赁']],
      auto: [['汽车业务', '$value', '同比 +23%']],
      energy_generation_storage: [['$value', '同比 +13%'], ['能源发电', '与储能']],
      services: [['$value', '同比 +50%'], ['服务']],
      revenue: [['收入', '$value', '同比 +26%']],
      gross_profit: [['毛利润', '$value', '利润率 17%', '同比 (0 个百分点)']],
      cost_of_revenue: [['收入', '成本', '$value']],
      operating_profit: [['营业利润', '$value', '利润率 1%', '同比 (3 个百分点)']],
      operating_expenses: [['运营', '费用', '$value']],
      other: [['其他', '$value']],
      interest: [['利息', '$value']],
      net_profit: [['净利润', '$value', '利润率 4%', '同比 (1 个百分点)']],
      tax: [['税费', '$value']],
      rnd: [['研发', '$value', '占收入 8%', '同比 +1 个百分点']],
      sga: [['销售及管理', '$value', '占收入 7%', '同比 +1 个百分点']],
    };
    return Object.fromEntries(Object.entries(labels).map(([id, value]) => [id, {
      blocks: value.blocks.map((block, blockIndex) => ({
        ...block,
        lines: block.lines.map((line, lineIndex) => ({ ...line, text: texts[id][blockIndex][lineIndex] })),
      })),
    }]));
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q2-fy26',
    name: 'Tesla - Q2 FY26',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q2 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q2-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: annotations('Production', 'Deliveries', '+10% Y/Y', '+25% Y/Y'),
    layout: {
      scale: 14.7,
      nodes: {
        auto_sales: { x: 454, y: 396, width: 71, height: 294 },
        regulatory_credits: { x: 454, y: 824, width: 71, height: 3 },
        leasing: { x: 454, y: 956, width: 71, height: 4 },
        auto: { x: 828, y: 530, width: 70, height: 301 },
        energy_generation_storage: { x: 612, y: 1069, width: 71, height: 44 },
        services: { x: 858, y: 1234, width: 70, height: 66 },
        revenue: { x: 1202, y: 655, width: 70, height: 415 },
        gross_profit: { x: 1575, y: 536, width: 71, height: 67 },
        cost_of_revenue: { x: 1575, y: 805, width: 71, height: 345 },
        operating_profit: { x: 1949, y: 457, width: 71, height: 4 },
        operating_expenses: { x: 1949, y: 662, width: 71, height: 63 },
        other: { x: 2220, y: 338, width: 70, height: 6 },
        interest: { x: 2212, y: 428, width: 70, height: 4 },
        net_profit: { x: 2322, y: 358, width: 71, height: 15 },
        tax: { x: 2322, y: 560, width: 71, height: 1 },
        rnd: { x: 2322, y: 727, width: 71, height: 33 },
        sga: { x: 2322, y: 996, width: 71, height: 28 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 20.0, valueText: '$20.0B', notes: ['+27% Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.1, notes: ['(67%) Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.4, notes: ['(16%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 20.5, notes: ['+23% Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: ['Energy generation', '& storage'], value: 3.1, notes: ['+13% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 4.6, notes: ['+50% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 28.2, notes: ['+26% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.7, notes: ['17% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 23.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['1% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.4 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.6 },
      { id: 'interest', col: 5, order: 1, type: 'profit', label: 'Interest', value: 0.3 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.1, notes: ['4% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 2.4, notes: ['8% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 2.0, valueText: '($2.0B)', notes: ['7% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 20.0, sourceWidth: 294, targetWidth: 294, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.1, sourceWidth: 3, targetWidth: 3, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.4, sourceWidth: 4, targetWidth: 4, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 20.5, sourceWidth: 301, targetWidth: 301, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 3.1, sourceWidth: 44, targetWidth: 47, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 4.6, sourceWidth: 66, targetWidth: 67, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.7, sourceWidth: 68, targetWidth: 67, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 23.5, sourceWidth: 347, targetWidth: 345, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 4, targetWidth: 4, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.4, sourceWidth: 63, targetWidth: 63, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.6, sourceWidth: 6, targetWidth: 6, targetOrder: 0, curve: { c1x: 2302, c2x: 2312 } },
      { source: 'interest', target: 'net_profit', value: 0.3, sourceWidth: 4, targetWidth: 4, targetOrder: 1, curve: { c1x: 2298, c2x: 2312 } },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 2, curve: { c1x: 2130, c2x: 2260 } },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 1, targetWidth: 1, sourceOrder: 1, y0: 460, curve: { c1x: 2130, c2x: 2260 } },
      { source: 'operating_expenses', target: 'rnd', value: 2.4, sourceWidth: 35, targetWidth: 33, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2.0, sourceWidth: 28, targetWidth: 28, sourceOrder: 1 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2026 财年第二季度',
        meta: { title: 'Tesla 2026 财年第二季度利润表', period: '', periodNote: '' },
        annotationsSvg: annotations('产量', '交付量', '同比 +10%', '同比 +25%'),
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +27%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 (67%)'] },
          leasing: { label: '租赁', notes: ['同比 (16%)'] },
          auto: { label: '汽车业务', notes: ['同比 +23%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +13%'] },
          services: { label: '服务', notes: ['同比 +50%'] },
          revenue: { label: '收入', notes: ['同比 +26%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 17%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 8%', '同比 +1 个百分点'] },
          sga: { label: '销售及管理', notes: ['占收入 7%', '同比 +1 个百分点'] },
        },
        layout: { labels: localizedLabels() },
      },
    },
  });
})();

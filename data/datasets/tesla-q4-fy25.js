/* Tesla Q4 FY25 income statement ($B), reconstructed from the source Sankey. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#6f6f6f';
  const GRAY_LINK = '#8f8f8d';
  const GREEN = '#27a126';
  const GREEN_LABEL = '#079248';
  const GREEN_LINK = '#9ccc99';
  const RED = '#d60000';
  const RED_LABEL = '#991600';
  const RED_LINK = '#e38184';
  const TESLA_RED = '#e51a3d';
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
      <g font-family="Montserrat,Arial,sans-serif">
        <g transform="translate(52 566) scale(0.78)" data-typography-role="brand">${businessIcons.teslaAutoCluster || ''}</g>
        <g transform="translate(34 1094) scale(0.95)" data-typography-role="brand">${businessIcons.teslaEnergyCluster || ''}</g>
        <g transform="translate(640 1254) scale(0.82)" data-typography-role="brand">${businessIcons.teslaCharger || ''}</g>
        ${metricCard(2058, production, '434K', productionNote)}
        ${metricCard(2255, deliveries, '418K', deliveriesNote)}
      </g>`;
  }

  const labels = {
    auto_sales: { blocks: [{ x: 488, top: 319, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(10%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 313, top: 506, anchor: 'middle', lines: [{ text: 'Auto sales', size: 40, weight: 800 }] }] },
    regulatory_credits: { blocks: [{ x: 488, top: 743, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(22%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 399, top: 819, anchor: 'end', lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }] }] },
    leasing: { blocks: [{ x: 488, top: 864, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(10%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 407, top: 944, anchor: 'end', lines: [{ text: 'Leasing', size: 38, weight: 800 }] }] },
    auto: { blocks: [{ x: 864, top: 387, anchor: 'middle', lineGap: 11, lines: [{ text: 'Auto', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(11%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    energy_generation_storage: { blocks: [{ x: 624, top: 1013, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+25% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 389, top: 1096, anchor: 'middle', lineGap: 8, lines: [{ text: 'Energy generation', size: 38, weight: 800 }, { text: '& storage', size: 38, weight: 800 }] }] },
    services: { blocks: [{ x: 944, top: 1168, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 802, top: 1275, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] }] },
    revenue: { blocks: [{ x: 1236, top: 503, anchor: 'middle', lineGap: 11, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1611, top: 352, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '20% margin', size: 28, weight: 400, color: NOTE }, { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1611, top: 1209, anchor: 'middle', lineGap: 9, lines: [{ text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1988, top: 275, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '6% margin', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1978, top: 785, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    interest: { blocks: [{ x: 2250, top: 458, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2532, top: 302, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '3% margin', size: 28, weight: 400, color: NOTE }, { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    other: { blocks: [{ x: 2505, top: 543, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    tax: { blocks: [{ x: 2498, top: 651, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    rnd: { blocks: [{ x: 2500, top: 756, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    sga: { blocks: [{ x: 2500, top: 923, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '7% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    restructuring: { blocks: [{ x: 2500, top: 1094, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restructuring', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '1% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q4-fy25', name: 'Tesla - Q4 FY25', company: 'Tesla',
    meta: {
      company: 'Tesla', title: 'Tesla Q4 FY25 Income Statement', period: '', periodNote: '', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 148, titleSize: 92, titleWeight: 800, titleTextLength: 2040,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 250, logoHeight: 215, logoY: 252, logoViewBox: '0 0 24 24', logoSvg: `<path d="${teslaPath}" fill="${TESLA_RED}"/>`,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 }, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations('Production', 'Deliveries', '(5%) Y/Y', '+16% Y/Y'),
    layout: {
      scale: 20.4,
      nodes: {
        auto_sales: { x: 452, y: 414, width: 72, height: 308 }, regulatory_credits: { x: 452, y: 835, width: 72, height: 10 }, leasing: { x: 452, y: 954, width: 72, height: 8 },
        auto: { x: 827, y: 532, width: 72, height: 326 }, energy_generation_storage: { x: 588, y: 1103, width: 72, height: 72 }, services: { x: 908, y: 1257, width: 72, height: 64 },
        revenue: { x: 1200, y: 648, width: 72, height: 459 }, gross_profit: { x: 1574, y: 537, width: 73, height: 93 }, cost_of_revenue: { x: 1575, y: 824, width: 72, height: 365 },
        operating_profit: { x: 1948, y: 457, width: 72, height: 28 }, operating_expenses: { x: 1952, y: 697, width: 72, height: 69 }, interest: { x: 2214, y: 428, width: 72, height: 10 },
        net_profit: { x: 2322, y: 363, width: 72, height: 18 }, other: { x: 2322, y: 579, width: 72, height: 10 }, tax: { x: 2322, y: 695, width: 72, height: 6 },
        rnd: { x: 2322, y: 802, width: 72, height: 34 }, sga: { x: 2322, y: 961, width: 72, height: 32 }, restructuring: { x: 2322, y: 1141, width: 72, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 16.8, notes: ['(10%) Y/Y'] }, { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.5, notes: ['(22%) Y/Y'] }, { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.4, notes: ['(10%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 17.8, notes: ['(11%) Y/Y'] }, { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: ['Energy generation', '& storage'], value: 3.8, notes: ['+25% Y/Y'] }, { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 3.4, notes: ['+18% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 24.9, notes: ['(3%) Y/Y'] }, { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.0, notes: ['20% margin', '+4pp Y/Y'] }, { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 19.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, notes: ['6% margin', '(0pp) Y/Y'] }, { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.6 }, { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.4 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.9, notes: ['3% margin', '(6pp) Y/Y'] }, { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.6 }, { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.8, notes: ['7% of revenue', '+2pp Y/Y'] }, { id: 'sga', col: 6, order: 4, type: 'cost', label: 'SG&A', value: 1.7, notes: ['7% of revenue', '+2pp Y/Y'] }, { id: 'restructuring', col: 6, order: 5, type: 'cost', label: 'Restructuring', value: 0.2, notes: ['1% of revenue', '+1pp Y/Y'] },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 16.8, width: 308, targetOrder: 0 }, { source: 'regulatory_credits', target: 'auto', value: 0.5, width: 10, targetOrder: 1 }, { source: 'leasing', target: 'auto', value: 0.4, width: 8, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 17.8, width: 326, targetOrder: 0 }, { source: 'energy_generation_storage', target: 'revenue', value: 3.8, sourceWidth: 72, targetWidth: 70, targetOrder: 1 }, { source: 'services', target: 'revenue', value: 3.4, sourceWidth: 64, targetWidth: 62, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.0, sourceWidth: 96, targetWidth: 93, sourceOrder: 0 }, { source: 'revenue', target: 'cost_of_revenue', value: 19.9, sourceWidth: 363, targetWidth: 365, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.4, sourceWidth: 28, targetWidth: 28, sourceOrder: 0 }, { source: 'gross_profit', target: 'operating_expenses', value: 3.6, sourceWidth: 65, targetWidth: 69, sourceOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 0.4, sourceWidth: 10, targetWidth: 8, targetOrder: 1, y1: 377, curve: { c1x: 2304, c1y: 433, c2x: 2310, c2y: 377 } },
      { source: 'operating_profit', target: 'net_profit', value: 0.9, sourceWidth: 17, targetWidth: 18, sourceOrder: 0, targetOrder: 0, y0: 465.5, y1: 372, curve: { c1x: 2130, c1y: 465.5, c2x: 2250, c2y: 372 } },
      { source: 'operating_profit', target: 'other', value: 0.6, sourceWidth: 6, targetWidth: 10, sourceOrder: 1, y0: 476, curve: { c1x: 2110, c1y: 476, c2x: 2238, c2y: 584 } },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 5, targetWidth: 6, sourceOrder: 2, y0: 482.5, curve: { c1x: 2110, c1y: 482.5, c2x: 2240, c2y: 698 } },
      { source: 'operating_expenses', target: 'rnd', value: 1.8, sourceWidth: 34, targetWidth: 34, sourceOrder: 0 }, { source: 'operating_expenses', target: 'sga', value: 1.7, sourceWidth: 32, targetWidth: 32, sourceOrder: 1 }, { source: 'operating_expenses', target: 'restructuring', value: 0.2, sourceWidth: 2, targetWidth: 3, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2025 财年第四季度',
        meta: { title: 'Tesla 2025 财年第四季度利润表', period: '', periodNote: '' },
        annotationsSvg: annotations('产量', '交付量', '同比 (5%)', '同比 +16%'),
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 (10%)'] }, regulatory_credits: { label: '监管积分', notes: ['同比 (22%)'] }, leasing: { label: '租赁', notes: ['同比 (10%)'] }, auto: { label: '汽车业务', notes: ['同比 (11%)'] }, energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +25%'] }, services: { label: '服务', notes: ['同比 +18%'] }, revenue: { label: '收入', notes: ['同比 (3%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 20%', '同比 +4 个百分点'] }, cost_of_revenue: { label: ['收入', '成本'] }, operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (0 个百分点)'] }, operating_expenses: { label: '运营费用' }, interest: { label: '利息' }, net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (6 个百分点)'] }, other: { label: '其他' }, tax: { label: '税费' }, rnd: { label: '研发', notes: ['占收入 7%', '同比 +2 个百分点'] }, sga: { label: '销售及管理', notes: ['占收入 7%', '同比 +2 个百分点'] }, restructuring: { label: '重组', notes: ['占收入 1%', '同比 +1 个百分点'] },
        },
        layout: { labels: {
          auto_sales: { blocks: [{ x: 488, top: 319, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (10%)', size: 28, weight: 400, color: NOTE }] }, { x: 313, top: 506, anchor: 'middle', lines: [{ text: '汽车销售', size: 40, weight: 800 }] }] },
          regulatory_credits: { blocks: [{ x: 488, top: 743, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (22%)', size: 28, weight: 400, color: NOTE }] }, { x: 399, top: 819, anchor: 'end', lines: [{ text: '监管积分', size: 38, weight: 800 }] }] },
          leasing: { blocks: [{ x: 488, top: 864, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (10%)', size: 28, weight: 400, color: NOTE }] }, { x: 407, top: 944, anchor: 'end', lines: [{ text: '租赁', size: 38, weight: 800 }] }] },
          auto: { blocks: [{ x: 864, top: 387, anchor: 'middle', lineGap: 11, lines: [{ text: '汽车业务', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (11%)', size: 28, weight: 400, color: NOTE }] }] },
          energy_generation_storage: { blocks: [{ x: 624, top: 1013, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +25%', size: 28, weight: 400, color: NOTE }] }, { x: 574, top: 1096, anchor: 'end', lineGap: 8, lines: [{ text: '能源发电', size: 38, weight: 800 }, { text: '与储能', size: 38, weight: 800 }] }] },
          services: { blocks: [{ x: 944, top: 1168, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +18%', size: 28, weight: 400, color: NOTE }] }, { x: 802, top: 1275, anchor: 'middle', lines: [{ text: '服务', size: 40, weight: 800 }] }] },
          revenue: { blocks: [{ x: 1236, top: 503, anchor: 'middle', lineGap: 11, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 (3%)', size: 28, weight: 400, color: NOTE }] }] },
          gross_profit: { blocks: [{ x: 1611, top: 352, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 20%', size: 28, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 28, weight: 400, color: NOTE }] }] },
          cost_of_revenue: { blocks: [{ x: 1611, top: 1209, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
          operating_profit: { blocks: [{ x: 1988, top: 275, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 6%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
          operating_expenses: { blocks: [{ x: 1978, top: 785, anchor: 'middle', lineGap: 9, lines: [{ text: '运营', size: 38, weight: 800 }, { text: '费用', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
          interest: { blocks: [{ x: 2250, top: 458, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
          net_profit: { blocks: [{ x: 2532, top: 302, anchor: 'middle', lineGap: 10, lines: [{ text: '净利润', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 3%', size: 28, weight: 400, color: NOTE }, { text: '同比 (6 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
          other: { blocks: [{ x: 2505, top: 543, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
          tax: { blocks: [{ x: 2498, top: 651, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
          rnd: { blocks: [{ x: 2508, top: 756, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 7%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE }] }] },
          sga: { blocks: [{ x: 2508, top: 923, anchor: 'middle', lineGap: 8, lines: [{ text: '销售及管理', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 7%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE }] }] },
          restructuring: { blocks: [{ x: 2508, top: 1094, anchor: 'middle', lineGap: 8, lines: [{ text: '重组', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 1%', size: 28, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE }] }] },
        } },
      },
    },
  });
})();

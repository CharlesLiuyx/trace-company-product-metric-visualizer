/* Tesla Q1 FY25 income statement ($B), reconstructed from the source Sankey. */
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
        <rect x="${x}" y="1225" width="188" height="145" rx="24" fill="#ed1537"/>
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
        ${metricCard(2058, production, '363K', productionNote)}
        ${metricCard(2255, deliveries, '337K', deliveriesNote)}
      </g>`;
  }

  function makeLabels(zh) {
    const t = zh
      ? {
          autoSales: '汽车销售', regulatoryCredits: '监管积分', leasing: '租赁', auto: '汽车业务',
          energy1: '能源发电', energy2: '与储能', services: '服务', revenue: '收入',
          grossProfit: '毛利润', cost1: '收入', cost2: '成本', operatingProfit: '营业利润',
          operating1: '运营', operating2: '费用', interest: '利息', netProfit: '净利润',
          tax: '税费', other: '其他', rnd: '研发', sga: '销售及管理',
          yy21: '同比 (21%)', yy35: '同比 +35%', yy6: '同比 (6%)', yy20: '同比 (20%)',
          yy67: '同比 +67%', yy15: '同比 +15%', yy9: '同比 (9%)',
          margin16: '利润率 16%', pp1: '同比 (1 个百分点)', margin2: '利润率 2%',
          pp3: '同比 (3 个百分点)', rev7: '占收入 7%', pp2: '同比 +2 个百分点',
          rev6: '占收入 6%', pp0: '同比 +0 个百分点',
        }
      : {
          autoSales: 'Auto sales', regulatoryCredits: 'Regulatory credits', leasing: 'Leasing', auto: 'Auto',
          energy1: 'Energy generation', energy2: '& storage', services: 'Services', revenue: 'Revenue',
          grossProfit: 'Gross profit', cost1: 'Cost of', cost2: 'revenue', operatingProfit: 'Operating profit',
          operating1: 'Operating', operating2: 'expenses', interest: 'Interest', netProfit: 'Net profit',
          tax: 'Tax', other: 'Other', rnd: 'R&D', sga: 'SG&A',
          yy21: '(21%) Y/Y', yy35: '+35% Y/Y', yy6: '(6%) Y/Y', yy20: '(20%) Y/Y',
          yy67: '+67% Y/Y', yy15: '+15% Y/Y', yy9: '(9%) Y/Y',
          margin16: '16% margin', pp1: '(1pp) Y/Y', margin2: '2% margin',
          pp3: '(3pp) Y/Y', rev7: '7% of revenue', pp2: '+2pp Y/Y',
          rev6: '6% of revenue', pp0: '+0pp Y/Y',
        };
    return {
      auto_sales: { blocks: [{ x: 490, top: 320, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.yy21, size: 28, weight: 400, color: NOTE }] }, { x: 307, top: 521, anchor: 'middle', semanticRole: 'source-positioned-name', lines: [{ text: t.autoSales, size: 40, weight: 800 }] }] },
      regulatory_credits: { blocks: [{ x: 490, top: 751, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.yy35, size: 28, weight: 400, color: NOTE }] }, { x: 411, top: 835, anchor: 'end', lines: [{ text: t.regulatoryCredits, size: 38, weight: 800 }] }] },
      leasing: { blocks: [{ x: 490, top: 871, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.yy6, size: 28, weight: 400, color: NOTE }] }, { x: 410, top: 950, anchor: 'end', lines: [{ text: t.leasing, size: 38, weight: 800 }] }] },
      auto: { blocks: [{ x: 856, top: 387, anchor: 'middle', lineGap: 11, lines: [{ text: t.auto, size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.yy20, size: 28, weight: 400, color: NOTE }] }] },
      energy_generation_storage: { blocks: [{ x: 680, top: 1030, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.yy67, size: 28, weight: 400, color: NOTE }] }, { x: zh ? 610 : 401, top: 1110, anchor: zh ? 'end' : 'middle', lineGap: 8, lines: [{ text: t.energy1, size: 38, weight: 800 }, { text: t.energy2, size: 38, weight: 800 }] }] },
      services: { blocks: [{ x: 969, top: 1199, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: t.yy15, size: 28, weight: 400, color: NOTE }] }, { x: 786, top: 1300, anchor: 'middle', semanticRole: 'source-positioned-name', lines: [{ text: t.services, size: 40, weight: 800 }] }] },
      revenue: { blocks: [{ x: 1232, top: 501, anchor: 'middle', lineGap: 11, lines: [{ text: t.revenue, size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.yy9, size: 28, weight: 400, color: NOTE }] }] },
      gross_profit: { blocks: [{ x: 1614, top: 342, anchor: 'middle', lineGap: 10, lines: [{ text: t.grossProfit, size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: t.margin16, size: 28, weight: 400, color: NOTE }, { text: t.pp1, size: 28, weight: 400, color: NOTE }] }] },
      cost_of_revenue: { blocks: [{ x: 1607, top: 1220, anchor: 'middle', lineGap: 9, lines: [{ text: t.cost1, size: 38, weight: 800 }, { text: t.cost2, size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
      operating_profit: { blocks: [{ x: 1978, top: 257, anchor: 'middle', lineGap: 10, lines: [{ text: t.operatingProfit, size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: t.margin2, size: 28, weight: 400, color: NOTE }, { text: t.pp3, size: 28, weight: 400, color: NOTE }] }] },
      operating_expenses: { blocks: [{ x: 1976, top: 737, anchor: 'middle', lineGap: 9, lines: [{ text: t.operating1, size: 38, weight: 800 }, { text: t.operating2, size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
      interest: { blocks: [{ x: 2246, top: 236, anchor: 'middle', lineGap: 8, lines: [{ text: t.interest, size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      net_profit: { blocks: [{ x: 2508, top: 299, anchor: 'middle', lineGap: 10, lines: [{ text: t.netProfit, size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: t.margin2, size: 28, weight: 400, color: NOTE }, { text: t.pp3, size: 28, weight: 400, color: NOTE }] }] },
      tax: { blocks: [{ x: 2507, top: 503, anchor: 'middle', lineGap: 8, lines: [{ text: t.tax, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      other_net: { blocks: [{ x: 2507, top: 613, anchor: 'middle', lineGap: 8, lines: [{ text: t.other, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
      rnd: { blocks: [{ x: 2506, top: 750, anchor: 'middle', lineGap: 8, lines: [{ text: t.rnd, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: t.rev7, size: 28, weight: 400, color: NOTE }, { text: t.pp2, size: 28, weight: 400, color: NOTE }] }] },
      sga: { blocks: [{ x: 2506, top: 942, anchor: 'middle', lineGap: 8, lines: [{ text: t.sga, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: t.rev6, size: 28, weight: 400, color: NOTE }, { text: t.pp0, size: 28, weight: 400, color: NOTE }] }] },
      other_opex: { blocks: [{ x: 2507, top: 1139, anchor: 'middle', lineGap: 8, lines: [{ text: t.other, size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q1-fy25',
    name: 'Tesla - Q1 FY25',
    company: 'Tesla',
    meta: {
      company: 'Tesla', title: 'Tesla Q1 FY25 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q1-fy25.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 148, titleSize: 92, titleWeight: 800, titleTextLength: 2040,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 250, logoHeight: 215, logoY: 252, logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${teslaPath}" fill="${TESLA_RED}"/>`,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 29, lineGap: 8 }, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations('Production', 'Deliveries', '(16%) Y/Y', '(13%) Y/Y'),
    layout: {
      scale: 24.3,
      nodes: {
        auto_sales: { x: 452, y: 420, width: 72, height: 314 }, regulatory_credits: { x: 452, y: 849, width: 72, height: 12 }, leasing: { x: 452, y: 967, width: 72, height: 8 },
        auto: { x: 821, y: 531, width: 72, height: 339 }, energy_generation_storage: { x: 643, y: 1120, width: 72, height: 64 }, services: { x: 933, y: 1289, width: 72, height: 62 },
        revenue: { x: 1200, y: 643, width: 72, height: 469 }, gross_profit: { x: 1579, y: 529, width: 72, height: 74 }, cost_of_revenue: { x: 1576, y: 805, width: 72, height: 394 },
        operating_profit: { x: 1945, y: 441, width: 72, height: 8 }, operating_expenses: { x: 1945, y: 658, width: 72, height: 65 }, interest: { x: 2210, y: 325, width: 72, height: 6 },
        net_profit: { x: 2320, y: 349, width: 72, height: 8 }, tax: { x: 2320, y: 541, width: 72, height: 2 }, other_net: { x: 2320, y: 649, width: 72, height: 1 },
        rnd: { x: 2320, y: 765, width: 72, height: 33 }, sga: { x: 2320, y: 964, width: 72, height: 29 }, other_opex: { x: 2320, y: 1174, width: 72, height: 1 },
      },
      labels: makeLabels(false),
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 12.9, notes: ['(21%) Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.6, notes: ['+35% Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.4, notes: ['(6%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 14.0, valueText: '$14.0B', notes: ['(20%) Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: ['Energy generation', '& storage'], value: 2.7, notes: ['+67% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 2.6, notes: ['+15% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 19.3, notes: ['(9%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.2, notes: ['16% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 16.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.4, notes: ['2% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.8 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.3 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['2% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'other_net', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.1 },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.4, notes: ['7% of revenue', '+2pp Y/Y'] },
      { id: 'sga', col: 6, order: 4, type: 'cost', label: 'SG&A', value: 1.3, notes: ['6% of revenue', '+0pp Y/Y'] },
      { id: 'other_opex', col: 6, order: 5, type: 'cost', label: 'Other', value: 0.1 },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 12.9, sourceWidth: 314, targetWidth: 319, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.6, width: 12, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.4, width: 8, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 14.0, sourceWidth: 339, targetWidth: 343, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 2.7, width: 64, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 2.6, width: 62, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 3.2, sourceWidth: 75, targetWidth: 74, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 16.2, sourceWidth: 394, targetWidth: 394, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.4, sourceWidth: 9, targetWidth: 8, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.8, sourceWidth: 65, targetWidth: 65, sourceOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 0.3, sourceWidth: 6, targetWidth: 6, targetOrder: 1, curve: { c1x: 2292, c1y: 328, c2x: 2308, c2y: 354 } },
      { source: 'operating_profit', target: 'net_profit', value: 0.1, sourceWidth: 2, targetWidth: 2, sourceOrder: 0, targetOrder: 0, y0: 442, y1: 350, curve: { c1x: 2125, c1y: 442, c2x: 2250, c2y: 350 } },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 4, targetWidth: 2, sourceOrder: 1, y0: 445, y1: 542, curve: { c1x: 2110, c1y: 445, c2x: 2240, c2y: 542 } },
      { source: 'operating_profit', target: 'other_net', value: 0.1, sourceWidth: 2, targetWidth: 1, sourceOrder: 2, y0: 448, y1: 649.5, curve: { c1x: 2110, c1y: 448, c2x: 2240, c2y: 649.5 } },
      { source: 'operating_expenses', target: 'rnd', value: 1.4, sourceWidth: 33, targetWidth: 33, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.3, sourceWidth: 29, targetWidth: 29, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 3, targetWidth: 1, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2025 财年第一季度',
        meta: { title: 'Tesla 2025 财年第一季度利润表', period: '', periodNote: '' },
        annotationsSvg: annotations('产量', '交付量', '同比 (16%)', '同比 (13%)'),
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 (21%)'] }, regulatory_credits: { label: '监管积分', notes: ['同比 +35%'] }, leasing: { label: '租赁', notes: ['同比 (6%)'] },
          auto: { label: '汽车业务', notes: ['同比 (20%)'] }, energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +67%'] }, services: { label: '服务', notes: ['同比 +15%'] },
          revenue: { label: '收入', notes: ['同比 (9%)'] }, gross_profit: { label: '毛利润', notes: ['利润率 16%', '同比 (1 个百分点)'] }, cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 2%', '同比 (3 个百分点)'] }, operating_expenses: { label: '运营费用' }, interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (3 个百分点)'] }, tax: { label: '税费' }, other_net: { label: '其他' },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 +2 个百分点'] }, sga: { label: '销售及管理', notes: ['占收入 6%', '同比 +0 个百分点'] }, other_opex: { label: '其他' },
        },
        layout: { labels: makeLabels(true) },
      },
    },
  });
})();

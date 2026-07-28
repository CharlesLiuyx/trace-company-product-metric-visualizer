/* Tesla Q3 FY24 income statement ($B), reconstructed from the source Sankey. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#6f6f6f';
  const GRAY_LINK = '#8f8f8d';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#00915a';
  const GREEN_LINK = '#9ccc99';
  const RED = '#d60000';
  const RED_LABEL = '#991600';
  const RED_LINK = '#df8181';
  const TESLA_RED = '#e51a3d';
  const TESLA_LOGO_PATH =
    'M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z';
  const teslaPath = (window.SANKEY_BRAND && window.SANKEY_BRAND.tesla) || TESLA_LOGO_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g data-typography-role="brand">
      <g transform="translate(157 514)" data-annotation-clearance="tesla-vehicle-stack">${businessIcons.teslaVehicleStack || businessIcons.teslaAutoCluster || ''}</g>
    </g>`;

  const labels = {
    auto_sales: { blocks: [{ x: 484, top: 342, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+1% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 269, top: 438, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Auto sales', size: 40, weight: 800 }] }] },
    regulatory_credits: { blocks: [{ x: 476, top: 833, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+33% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 397, top: 919, anchor: 'end', lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }] }] },
    leasing: { blocks: [{ x: 484, top: 959, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(9%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 405, top: 1031, anchor: 'end', lines: [{ text: 'Leasing', size: 38, weight: 800 }] }] },
    auto: { blocks: [{ x: 860, top: 409, anchor: 'middle', lineGap: 11, lines: [{ text: 'Auto', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    energy_generation_storage: { blocks: [{ x: 772, top: 1046, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+52% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 700, top: 1142, anchor: 'end', lineGap: 8, semanticRole: 'reference-offset-side-label', lines: [{ text: 'Energy generation', size: 38, weight: 800 }, { text: '& storage', size: 38, weight: 800 }] }] },
    services: { blocks: [{ x: 998, top: 1172, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+29% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 856, top: 1260, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Services', size: 40, weight: 800 }] }] },
    revenue: { blocks: [{ x: 1231, top: 496, anchor: 'middle', lineGap: 11, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1603, top: 351, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '20% margin', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1604, top: 1238, anchor: 'middle', lineGap: 9, lines: [{ text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1974, top: 268, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '11% margin', size: 28, weight: 400, color: NOTE }, { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1974, top: 754, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    interest: { blocks: [{ x: 2240, top: 469, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2507, top: 328, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '9% margin', size: 28, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2506, top: 566, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    other: { blocks: [{ x: 2506, top: 676, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    sga: { blocks: [{ x: 2507, top: 793, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '5% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2506, top: 992, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '4% of revenue', size: 28, weight: 400, color: NOTE }, { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    restructuring: { blocks: [{ x: 2507, top: 1198, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restructuring', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q3-fy24',
    name: 'Tesla - Q3 FY24',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q3 FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q3-fy24.png', width: 2667, height: 1500 },
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
    annotationsSvg: annotations,
    layout: {
      scale: 19.7,
      nodes: {
        auto_sales: { x: 448, y: 443, width: 72, height: 369 },
        regulatory_credits: { x: 448, y: 932, width: 72, height: 13 },
        leasing: { x: 448, y: 1049, width: 72, height: 7 },
        auto: { x: 824, y: 557, width: 72, height: 393 },
        energy_generation_storage: { x: 736, y: 1139, width: 72, height: 44 },
        services: { x: 962, y: 1262, width: 72, height: 54 },
        revenue: { x: 1195, y: 639, width: 72, height: 496 },
        gross_profit: { x: 1567, y: 533, width: 73, height: 98 },
        cost_of_revenue: { x: 1567, y: 819, width: 73, height: 399 },
        operating_profit: { x: 1938, y: 452, width: 72, height: 53 },
        operating_expenses: { x: 1938, y: 686, width: 72, height: 45 },
        interest: { x: 2203, y: 445, width: 73, height: 6 },
        net_profit: { x: 2316, y: 360, width: 73, height: 43 },
        tax: { x: 2316, y: 587, width: 73, height: 12 },
        other: { x: 2316, y: 703, width: 73, height: 5 },
        sga: { x: 2316, y: 797, width: 73, height: 23 },
        rnd: { x: 2316, y: 998, width: 73, height: 20 },
        restructuring: { x: 2316, y: 1214, width: 73, height: 1 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 18.8, notes: ['+1% Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.7, notes: ['+33% Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.4, notes: ['(9%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 20.0, valueText: '$20.0B', notes: ['+2% Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: ['Energy generation', '& storage'], value: 2.4, notes: ['+52% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 2.8, notes: ['+29% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 25.2, notes: ['+8% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.0, valueText: '$5.0B', notes: ['20% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 20.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.7, notes: ['11% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.3 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.3 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 2.2, notes: ['9% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.6 },
      { id: 'other', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.3 },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 1.2, notes: ['5% of revenue', '(1pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 1.0, valueText: '($1.0B)', notes: ['4% of revenue', '(1pp) Y/Y'] },
      { id: 'restructuring', col: 6, order: 5, type: 'cost', label: 'Restructuring', value: 0.1 },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 18.8, width: 369, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.7, width: 13, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.4, sourceWidth: 7, targetWidth: 11, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 20.0, sourceWidth: 393, targetWidth: 394, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 2.4, sourceWidth: 44, targetWidth: 47, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 2.8, sourceWidth: 54, targetWidth: 55, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.0, sourceWidth: 97, targetWidth: 98, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 20.2, sourceWidth: 399, targetWidth: 399, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceWidth: 53, targetWidth: 53, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.3, sourceWidth: 45, targetWidth: 45, sourceOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 0.3, sourceWidth: 6, targetWidth: 6, targetOrder: 1, y1: 400, curve: { c1x: 2290, c1y: 448, c2x: 2302, c2y: 400 } },
      { source: 'operating_profit', target: 'net_profit', value: 2.2, sourceWidth: 36, targetWidth: 37, sourceOrder: 0, targetOrder: 0, y0: 470, y1: 378.5, curve: { c1x: 2116, c1y: 470, c2x: 2245, c2y: 378.5 } },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 11, targetWidth: 12, sourceOrder: 1, y0: 492.5, curve: { c1x: 2112, c1y: 492.5, c2x: 2245, c2y: 593 } },
      { source: 'operating_profit', target: 'other', value: 0.3, sourceWidth: 6, targetWidth: 5, sourceOrder: 2, y0: 502, curve: { c1x: 2112, c1y: 502, c2x: 2245, c2y: 705.5 } },
      { source: 'operating_expenses', target: 'sga', value: 1.2, sourceWidth: 23, targetWidth: 23, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, sourceWidth: 20, targetWidth: 20, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, sourceWidth: 2, targetWidth: 1, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2024 财年第三季度',
        meta: { title: 'Tesla 2024 财年第三季度利润表', period: '', periodNote: '' },
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +1%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 +33%'] },
          leasing: { label: '租赁', notes: ['同比 (9%)'] },
          auto: { label: '汽车业务', notes: ['同比 +2%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +52%'] },
          services: { label: '服务', notes: ['同比 +29%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 20%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 11%', '同比 +3 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 9%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sga: { label: '销售及管理', notes: ['占收入 5%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 4%', '同比 (1 个百分点)'] },
          restructuring: { label: '重组' },
        },
        layout: {
          labels: {
            auto_sales: { blocks: [{ x: 484, top: 342, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +1%', size: 28, weight: 400, color: NOTE }] }, { x: 269, top: 438, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: '汽车销售', size: 40, weight: 800 }] }] },
            regulatory_credits: { blocks: [{ x: 476, top: 833, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +33%', size: 28, weight: 400, color: NOTE }] }, { x: 397, top: 919, anchor: 'end', lines: [{ text: '监管积分', size: 38, weight: 800 }] }] },
            leasing: { blocks: [{ x: 484, top: 959, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 (9%)', size: 28, weight: 400, color: NOTE }] }, { x: 405, top: 1031, anchor: 'end', lines: [{ text: '租赁', size: 38, weight: 800 }] }] },
            auto: { blocks: [{ x: 860, top: 409, anchor: 'middle', lineGap: 11, lines: [{ text: '汽车业务', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +2%', size: 28, weight: 400, color: NOTE }] }] },
            energy_generation_storage: { blocks: [{ x: 772, top: 1046, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +52%', size: 28, weight: 400, color: NOTE }] }, { x: 700, top: 1142, anchor: 'end', lineGap: 8, semanticRole: 'reference-offset-side-label', lines: [{ text: '能源发电', size: 38, weight: 800 }, { text: '与储能', size: 38, weight: 800 }] }] },
            services: { blocks: [{ x: 998, top: 1172, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '同比 +29%', size: 28, weight: 400, color: NOTE }] }, { x: 856, top: 1260, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: '服务', size: 40, weight: 800 }] }] },
            revenue: { blocks: [{ x: 1231, top: 496, anchor: 'middle', lineGap: 11, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +8%', size: 28, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1603, top: 351, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 20%', size: 28, weight: 400, color: NOTE }, { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            cost_of_revenue: { blocks: [{ x: 1604, top: 1238, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 38, weight: 800 }, { text: '成本', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
            operating_profit: { blocks: [{ x: 1974, top: 268, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 11%', size: 28, weight: 400, color: NOTE }, { text: '同比 +3 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1974, top: 754, anchor: 'middle', lineGap: 9, lines: [{ text: '运营', size: 38, weight: 800 }, { text: '费用', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
            interest: { blocks: [{ x: 2240, top: 469, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 32, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
            net_profit: { blocks: [{ x: 2507, top: 328, anchor: 'middle', lineGap: 10, lines: [{ text: '净利润', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '利润率 9%', size: 28, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            tax: { blocks: [{ x: 2506, top: 566, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
            other: { blocks: [{ x: 2506, top: 676, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
            sga: { blocks: [{ x: 2507, top: 793, anchor: 'middle', lineGap: 8, lines: [{ text: '销售及管理', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 5%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            rnd: { blocks: [{ x: 2506, top: 992, anchor: 'middle', lineGap: 8, lines: [{ text: '研发', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 4%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            restructuring: { blocks: [{ x: 2507, top: 1198, anchor: 'middle', lineGap: 8, lines: [{ text: '重组', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
          },
        },
      },
    },
  });
})();

/* Tesla Q4 FY22 income statement ($B), reconstructed from the Source Sankey. */
(function () {
  const BLACK = '#666666';
  const TITLE = '#155077';
  const NOTE = '#666666';
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
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  const labels = {
    auto_sales: { blocks: [
      { x: 482, top: 354, anchor: 'middle', parts: ['value', 'notes'], lineGap: 10, valueSize: 39, noteSize: 28 },
      { x: 278, top: 498, anchor: 'middle', parts: ['name'], nameSize: 40, nameWeight: 800, semanticRole: 'source-offset-label' },
    ] },
    leasing: { blocks: [
      { x: 482, top: 943, anchor: 'middle', parts: ['value', 'notes'], lineGap: 10, valueSize: 39, noteSize: 28 },
      { x: 401, top: 1018, anchor: 'end', parts: ['name'], nameSize: 38, nameWeight: 800 },
    ] },
    regulatory_credits: { blocks: [
      { x: 482.5, top: 1065, anchor: 'middle', parts: ['value', 'notes'], lineGap: 10, valueSize: 39, noteSize: 28 },
      { x: 391, top: 1144, anchor: 'end', parts: ['name'], nameSize: 38, nameWeight: 800, semanticRole: 'source-offset-label' },
    ] },
    auto: { blocks: [
      { x: 863, top: 380, anchor: 'middle', parts: ['name', 'value', 'notes'], lineGap: 10, nameSize: 39, valueSize: 39, noteSize: 28, nameWeight: 800 },
    ] },
    energy_generation_storage: { blocks: [
      { x: 660, top: 1155, anchor: 'middle', parts: ['value', 'notes'], lineGap: 10, valueSize: 39, noteSize: 28 },
      { x: 52, top: 1240, anchor: 'start', parts: ['name'], nameSize: 38, nameWeight: 800, semanticRole: 'source-offset-label' },
    ] },
    services: { blocks: [
      { x: 938, top: 1242, anchor: 'middle', parts: ['value', 'notes'], lineGap: 10, valueSize: 39, noteSize: 28 },
      { x: 727, top: 1329, anchor: 'start', parts: ['name'], nameSize: 40, nameWeight: 800 },
    ] },
    revenue: { blocks: [
      { x: 1232, top: 462, anchor: 'middle', parts: ['name', 'value', 'notes'], lineGap: 10, nameSize: 40, valueSize: 39, noteSize: 28, nameWeight: 800 },
    ] },
    gross_profit: { blocks: [
      { x: 1629, top: 355, anchor: 'middle', parts: ['name', 'value', 'notes'], lineGap: 8, nameSize: 38, valueSize: 39, noteSize: 28, nameWeight: 800 },
    ] },
    cost_of_revenue: { blocks: [
      { x: 1631, top: 1265, anchor: 'middle', parts: ['name', 'value'], lineGap: 8, nameSize: 38, valueSize: 37, nameWeight: 800 },
    ] },
    operating_profit: { blocks: [
      { x: 1995, top: 304, anchor: 'middle', parts: ['name', 'value', 'notes'], lineGap: 8, nameSize: 38, valueSize: 38, noteSize: 28, nameWeight: 800 },
    ] },
    operating_expenses: { blocks: [
      { x: 1995, top: 807, anchor: 'middle', parts: ['name', 'value'], lineGap: 8, nameSize: 38, valueSize: 37, nameWeight: 800 },
    ] },
    interest: { blocks: [
      { x: 2240, top: 607, anchor: 'middle', parts: ['name', 'value'], lineGap: 7, nameSize: 31, valueSize: 31, nameWeight: 800 },
    ] },
    net_profit: { blocks: [
      { x: 2500, top: 449, anchor: 'middle', parts: ['name', 'value', 'notes'], lineGap: 8, nameSize: 38, valueSize: 38, noteSize: 28, nameWeight: 800 },
    ] },
    tax: { blocks: [
      { x: 2476, top: 718, anchor: 'middle', parts: ['name', 'value'], lineGap: 7, nameSize: 31, valueSize: 31, nameWeight: 800 },
    ] },
    other: { blocks: [
      { x: 2478.5, top: 824, anchor: 'middle', parts: ['name', 'value'], lineGap: 7, nameSize: 31, valueSize: 31, nameWeight: 800 },
    ] },
    sga: { blocks: [
      { x: 2481, top: 960, anchor: 'middle', parts: ['name', 'value'], lineGap: 7, nameSize: 31, valueSize: 31, nameWeight: 800 },
    ] },
    rnd: { blocks: [
      { x: 2478.5, top: 1107, anchor: 'middle', parts: ['name', 'value'], lineGap: 7, nameSize: 31, valueSize: 31, nameWeight: 800 },
    ] },
    restructuring: { blocks: [
      { x: 2500, top: 1266, anchor: 'middle', parts: ['name', 'value'], lineGap: 7, nameSize: 31, valueSize: 31, nameWeight: 800 },
    ] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q4-fy22', name: 'Tesla - Q4 FY22', company: 'Tesla',
    meta: {
      company: 'Tesla', title: 'Tesla Q4 FY22 Income Statement', period: '', periodNote: '',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q4-fy22.png', width: 2667, height: 1500 },
      titleX: 1333, titleY: 198, titleSize: 124, titleWeight: 800, titleTextLength: 2040,
      periodX: -1000, periodY: -1000, periodNoteY: -950,
      logoWidth: 268, logoHeight: 204, logoY: 240, logoViewBox: '0 0 24 24',
      logoSvg: `<g transform="translate(-1.56 0) scale(1.13 1)"><path d="${teslaPath}" fill="${TESLA_RED}"/></g>`,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK }, hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 }, interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: `<g font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(162 578)" data-typography-role="brand">${businessIcons.teslaVehicleStack || ''}</g>
    </g>`,
    layout: {
      scale: 23.7,
      nodes: {
        auto_sales: { x: 447, y: 445, width: 71, height: 479 },
        leasing: { x: 447, y: 1032, width: 71, height: 12 },
        regulatory_credits: { x: 447, y: 1154, width: 71, height: 10 },
        auto: { x: 828, y: 519, width: 71, height: 504 },
        energy_generation_storage: { x: 625, y: 1243, width: 71, height: 30 },
        services: { x: 903, y: 1332, width: 70, height: 37 },
        revenue: { x: 1197, y: 603, width: 70, height: 575 },
        gross_profit: { x: 1593, y: 539, width: 71, height: 134 },
        cost_of_revenue: { x: 1596, y: 805, width: 70, height: 438 },
        operating_profit: { x: 1960, y: 486, width: 70, height: 90 },
        operating_expenses: { x: 1960, y: 741, width: 70, height: 42 },
        interest: { x: 2205, y: 598, width: 70, height: 1 },
        net_profit: { x: 2315, y: 447, width: 71, height: 86 },
        tax: { x: 2315, y: 759, width: 71, height: 5 },
        other: { x: 2315, y: 843, width: 71, height: 5 },
        sga: { x: 2315, y: 969, width: 71, height: 23 },
        rnd: { x: 2315, y: 1128, width: 71, height: 16 },
        restructuring: { x: 2315, y: 1274, width: 71, height: 3 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 20.2, notes: ['+35% Y/Y'] },
      { id: 'leasing', col: 0, order: 1, type: 'source', label: 'Leasing', value: 0.6, notes: ['(5%) Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 2, type: 'source', label: 'Regulatory credits', value: 0.5, notes: ['+49% Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 21.3, notes: ['+33% Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: 'Energy generation & storage', value: 1.3, notes: ['+90% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 1.7, notes: ['+60% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 24.3, notes: ['+37% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.8, notes: ['24% margin', '(4pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 18.5 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.9, notes: ['16% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.9 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.1 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 3.7, notes: ['15% margin', '+2pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'other', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.042, valueText: '($42M)' },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 1.0, valueText: '($1.0B)' },
      { id: 'rnd', col: 6, order: 4, type: 'cost', label: 'R&D', value: 0.8 },
      { id: 'restructuring', col: 6, order: 5, type: 'cost', label: 'Restructuring', value: 0.034, valueText: '($34M)' },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 20.2, sourceWidth: 479, targetWidth: 479, targetOrder: 0 },
      { source: 'leasing', target: 'auto', value: 0.6, sourceWidth: 12, targetWidth: 12, targetOrder: 1 },
      { source: 'regulatory_credits', target: 'auto', value: 0.5, sourceWidth: 10, targetWidth: 13, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 21.3, sourceWidth: 504, targetWidth: 504, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 1.3, sourceWidth: 30, targetWidth: 30, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 1.7, sourceWidth: 37, targetWidth: 41, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.8, sourceWidth: 134, targetWidth: 134, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 18.5, sourceWidth: 441, targetWidth: 438, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.9, sourceWidth: 90, targetWidth: 90, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.9, sourceWidth: 44, targetWidth: 42, sourceOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 0.1, sourceWidth: 1, targetWidth: 2, targetOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 3.7, sourceWidth: 83, targetWidth: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 5, targetWidth: 5, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other', value: 0.042, sourceWidth: 2, targetWidth: 2, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 1.0, sourceWidth: 23, targetWidth: 23, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, sourceWidth: 16, targetWidth: 16, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.034, sourceWidth: 3, targetWidth: 3, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2022 财年第四季度',
        meta: { title: 'Tesla 2022 财年第四季度利润表', period: '', periodNote: '' },
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +35%'] },
          leasing: { label: '租赁', notes: ['同比 (5%)'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 +49%'] },
          auto: { label: '汽车业务', notes: ['同比 +33%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +90%'] },
          services: { label: '服务', notes: ['同比 +60%'] },
          revenue: { label: '收入', notes: ['同比 +37%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 24%', '同比 (4 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 +2 个百分点'] },
          tax: { label: '税费' }, other: { label: '其他' }, sga: { label: '销售及管理' },
          rnd: { label: '研发' }, restructuring: { label: '重组' },
        },
      },
    },
  });
})();

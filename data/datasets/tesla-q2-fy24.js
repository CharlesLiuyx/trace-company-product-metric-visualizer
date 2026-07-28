/* Tesla Q2 FY24 income statement ($B), reconstructed from the source Sankey. */
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

  const annotations = `
    <g data-typography-role="brand">
      <g transform="translate(153 514) scale(1.06)">${businessIcons.teslaVehicleStack || ''}</g>
    </g>`;

  const labels = {
    auto_sales: { blocks: [{ x: 484, top: 339, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(9%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 271, top: 439, anchor: 'middle', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Auto sales', size: 40, weight: 800 }] }] },
    regulatory_credits: { blocks: [{ x: 473, top: 829, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+216% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 397, top: 906, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }] }] },
    leasing: { blocks: [{ x: 484, top: 955, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '(19%) Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 408, top: 1031, anchor: 'end', semanticRole: 'reference-offset-side-label', lines: [{ text: 'Leasing', size: 38, weight: 800 }] }] },
    auto: { blocks: [{ x: 855, top: 397, anchor: 'middle', lineGap: 11, lines: [{ text: 'Auto', size: 39, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '(7%) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    energy_generation_storage: { blocks: [{ x: 723, top: 1061, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+100% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 474, top: 1135, anchor: 'middle', lineGap: 8, lines: [{ text: 'Energy generation', size: 38, weight: 800 }, { text: '& storage', size: 38, weight: 800 }] }] },
    services: { blocks: [{ x: 1016, top: 1178, anchor: 'middle', lineGap: 11, lines: [{ text: '$value', size: 39, weight: 400 }, { text: '+21% Y/Y', size: 28, weight: 400, color: NOTE }] }, { x: 870, top: 1278, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] }] },
    revenue: { blocks: [{ x: 1230, top: 496, anchor: 'middle', lineGap: 11, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1604, top: 347, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 38, weight: 800 }, { text: '$value', size: 39, weight: 400 }, { text: '18% margin', size: 28, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1607, top: 1227, anchor: 'middle', lineGap: 9, lines: [{ text: 'Cost of', size: 38, weight: 800 }, { text: 'revenue', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    operating_profit: { blocks: [{ x: 1970, top: 259, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '6% margin', size: 28, weight: 400, color: NOTE }, { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1968, top: 721, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating', size: 38, weight: 800 }, { text: 'expenses', size: 38, weight: 800 }, { text: '$value', size: 37, weight: 400 }] }] },
    other: { blocks: [{ x: 2248, top: 422, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    net_profit: { blocks: [{ x: 2508, top: 293, anchor: 'middle', lineGap: 10, lines: [{ text: 'Net profit', size: 38, weight: 800 }, { text: '$value', size: 38, weight: 400 }, { text: '6% margin', size: 28, weight: 400, color: NOTE }, { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    tax: { blocks: [{ x: 2506, top: 529, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }] }] },
    sga: { blocks: [{ x: 2507, top: 713, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '5% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    rnd: { blocks: [{ x: 2506, top: 910, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '4% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
    restructuring: { blocks: [{ x: 2506, top: 1118, anchor: 'middle', lineGap: 8, lines: [{ text: 'Restructuring', size: 31, weight: 800 }, { text: '$value', size: 31, weight: 400 }, { text: '2% of revenue', size: 28, weight: 400, color: NOTE }, { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE }] }] },
  };

  function localizedLabels() {
    const texts = {
      auto_sales: [['$value', '同比 (9%)'], ['汽车销售']],
      regulatory_credits: [['$value', '同比 +216%'], ['监管积分']],
      leasing: [['$value', '同比 (19%)'], ['租赁']],
      auto: [['汽车业务', '$value', '同比 (7%)']],
      energy_generation_storage: [['$value', '同比 +100%'], ['能源发电', '与储能']],
      services: [['$value', '同比 +21%'], ['服务']],
      revenue: [['收入', '$value', '同比 +2%']],
      gross_profit: [['毛利润', '$value', '利润率 18%', '同比 (0 个百分点)']],
      cost_of_revenue: [['收入', '成本', '$value']],
      operating_profit: [['营业利润', '$value', '利润率 6%', '同比 (3 个百分点)']],
      operating_expenses: [['运营', '费用', '$value']],
      other: [['其他', '$value']],
      net_profit: [['净利润', '$value', '利润率 6%', '同比 (5 个百分点)']],
      tax: [['税费', '$value']],
      sga: [['销售及管理', '$value', '占收入 5%', '同比 +0 个百分点']],
      rnd: [['研发', '$value', '占收入 4%', '同比 +0 个百分点']],
      restructuring: [['重组', '$value', '占收入 2%', '同比 +2 个百分点']],
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
    key: 'tesla-q2-fy24',
    name: 'Tesla - Q2 FY24',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q2 FY24 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q2-fy24.png', width: 2667, height: 1500 },
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
        auto_sales: { x: 449, y: 442, width: 71, height: 365 },
        regulatory_credits: { x: 449, y: 929, width: 71, height: 15 },
        leasing: { x: 449, y: 1056, width: 71, height: 6 },
        auto: { x: 820, y: 539, width: 70, height: 392 },
        energy_generation_storage: { x: 688, y: 1156, width: 70, height: 57 },
        services: { x: 968, y: 1280, width: 70, height: 50 },
        revenue: { x: 1197, y: 642, width: 70, height: 503 },
        gross_profit: { x: 1571, y: 532, width: 70, height: 89 },
        cost_of_revenue: { x: 1573, y: 794, width: 70, height: 412 },
        operating_profit: { x: 1937, y: 442, width: 70, height: 30 },
        operating_expenses: { x: 1937, y: 639, width: 70, height: 57 },
        other: { x: 2212, y: 398, width: 70, height: 2 },
        net_profit: { x: 2317, y: 329, width: 71, height: 26 },
        tax: { x: 2317, y: 559, width: 71, height: 5 },
        sga: { x: 2317, y: 742, width: 71, height: 24 },
        rnd: { x: 2317, y: 934, width: 71, height: 20 },
        restructuring: { x: 2317, y: 1141, width: 71, height: 11 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 18.5, notes: ['(9%) Y/Y'] },
      { id: 'regulatory_credits', col: 0, order: 1, type: 'source', label: 'Regulatory credits', value: 0.9, notes: ['+216% Y/Y'] },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.5, notes: ['(19%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 19.9, notes: ['(7%) Y/Y'] },
      { id: 'energy_generation_storage', col: 1, order: 1, type: 'source', label: ['Energy generation', '& storage'], value: 3.0, valueText: '$3.0B', notes: ['+100% Y/Y'] },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 2.6, notes: ['+21% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 25.5, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.6, notes: ['18% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 20.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.6, notes: ['6% margin', '(3pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.0, valueText: '($3.0B)' },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.3 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.5, notes: ['6% margin', '(5pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.4 },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 1.3, notes: ['5% of revenue', '+0pp Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.1, notes: ['4% of revenue', '+0pp Y/Y'] },
      { id: 'restructuring', col: 6, order: 4, type: 'cost', label: 'Restructuring', value: 0.6, notes: ['2% of revenue', '+2pp Y/Y'] },
    ],
    links: [
      { source: 'auto_sales', target: 'auto', value: 18.5, sourceWidth: 365, targetWidth: 365, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.9, sourceWidth: 15, targetWidth: 17, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.5, sourceWidth: 6, targetWidth: 10, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 19.9, sourceWidth: 392, targetWidth: 392, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 3.0, sourceWidth: 57, targetWidth: 59, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 2.6, sourceWidth: 50, targetWidth: 52, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 4.6, sourceWidth: 91, targetWidth: 89, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 20.9, sourceWidth: 412, targetWidth: 412, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.6, sourceWidth: 30, targetWidth: 30, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.0, sourceWidth: 59, targetWidth: 57, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, sourceWidth: 23, targetWidth: 23, sourceOrder: 0, targetOrder: 0, y0: 453.5, y1: 340.5, curve: { c1x: 2120, c1y: 453.5, c2x: 2250, c2y: 340.5 } },
      { source: 'other', target: 'net_profit', value: 0.3, sourceWidth: 2, targetWidth: 3, targetOrder: 1, y1: 353.5, curve: { c1x: 2290, c1y: 399, c2x: 2308, c2y: 353.5 } },
      { source: 'operating_profit', target: 'tax', value: 0.4, sourceWidth: 7, targetWidth: 5, sourceOrder: 1, y0: 468.5, y1: 561.5, curve: { c1x: 2110, c1y: 468.5, c2x: 2240, c2y: 561.5 } },
      { source: 'operating_expenses', target: 'sga', value: 1.3, sourceWidth: 25, targetWidth: 24, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.1, sourceWidth: 21, targetWidth: 20, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.6, sourceWidth: 11, targetWidth: 11, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2024 财年第二季度',
        meta: { title: 'Tesla 2024 财年第二季度利润表', period: '', periodNote: '' },
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 (9%)'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 +216%'] },
          leasing: { label: '租赁', notes: ['同比 (19%)'] },
          auto: { label: '汽车业务', notes: ['同比 (7%)'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +100%'] },
          services: { label: '服务', notes: ['同比 +21%'] },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 6%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (5 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售及管理', notes: ['占收入 5%', '同比 +0 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 4%', '同比 +0 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 2%', '同比 +2 个百分点'] },
        },
        layout: { labels: localizedLabels() },
      },
    },
  });
})();
